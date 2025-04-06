/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "zePbZ79kUyAsekUanZvmYzqYsGjWR3Tdos2XL9Z9dW6zS4uEt5zbN3oA6SWqhGLTvNBGUsadX9PAu4uDJrMupRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FRFtJAhc9pU8g89bmnaUPrsEPRAcXgUrLKwzs8j9ZGmDHUsDjDsDCBzVk2CXMbcpcURngKBoyWm8nD8idQWgnxk",
  "key1": "33ujonnruewi18rxXX8jXDZamjLVWUzw41C8SK4iEDuhmiesGeBGivWVx7gqua14naRZYYLibHnxdQmvLWrRMGRN",
  "key2": "ZhrzPLqM1S5ueNRiJ7iLx1t1xqak3FeY1WJq9pTtyvHfsDBBN6RbxvR2NWHrvmkejJZRgcTRWkkTrh6ugbbZQS7",
  "key3": "4aw5HRN3hYuJji4KJyjA2fyyXYaMiM2sPyRdFxkqGtZrna7XQCYC8RkT78D5mZwP1CMhNyxKzDF5gWEutGFDsyYi",
  "key4": "JAwmVkTRLrRa4eVsQzB7cu5UX5fGi8Bt8Zzy3ws91Y2MEAFhLjmcqm8tz6NMcV9JxAXYxU5oSvZkGkHdcX1ks1m",
  "key5": "2pp5JEtrjQVSJ6SjCHKhdk9T2raF6kUhHsUmXe6P6a9djdXxxPkMvJZ5qTz9GLX3XiPzh6EERGDu3r3txNuhS1P9",
  "key6": "3Yx19HLuWAx2wZ4GwmbNAi7JDhy4neF7hnJmVBG6QgvZsfdKfKpB3xdGYPsyL8cdAwovmpYSGZgguMz8VkgLTrWL",
  "key7": "4dCRuVAuufujHHn7Qn5SxcLY5heA7DT3CB4M4hFBQav14rvmwfeZ9KiSPUtJYoBmp57GT8VDDRDRwPMYCCybmjrN",
  "key8": "2m6V2KaxWx1r3hN4xrt97KoPKFFcPeSNpNWrsGK8gd6DNFPi5S7GfAjHuJWybWbT3dqhrC7zgFNqPdT6mp9P91H4",
  "key9": "AGdbDTSKWnwW3EXy34RvMJJDkszF4QnFDLym53RvHjXoCqBd8CkVYT9EBxWzCdkvHhXGUcrn8vb3gTzhP6W9Mze",
  "key10": "5bdVMC8f6HfoguXcPqCSbrKTpwPjLGU33hjKLc1m6xvThnv4MXuYdU5527Ahxs6Hgf7JkTBTUeFJ23kQCvbPBgj5",
  "key11": "3whJA2yr5iftJTkxcCcD8HnJ6M7dFBv1hZyp5r19ZxzugH74UNcJVa7T3eyFzgHbDmjRWqxybgNc6P4ZfXGbMxsQ",
  "key12": "67321BXRqf8QQFeawt7rAbsaxR7eZJpMPyEKyPrQMW86LND5XYoy1K9TjZimNrrfu8EmnR2mjjim2jC5Z3Xg5Tmu",
  "key13": "2J1NShU8q3EorqJKvFUH7TizPcGaCWULE9Qm7iuMEAeouywEfGyaXmdeFGCKoLNAvQ7zSC9wkscdTrpCmZbwepqw",
  "key14": "5hLUnJ7mMSh27k3Q8hDQQvTTeW5ZwY6LdGmjQUmKrDZu39XbzAZtvu36m5SGkg2s96jwAJPCnGAC99PxYANF1hSC",
  "key15": "2jmVvZVLHvsiQyeeoLrD3sjhxSeLiY4ZnbyzJXYpyoaWMWFSAZhMj9zyY6YeQNfN1J6TZQePmpqVrxvfsDZCmaa3",
  "key16": "jcLzuNqqwFAhhZ8yC7QraB2ahKxS4JktkQ1PiicqbEPPV4nucgJPgFbtkngthvaLaLMmuu5qycekca3g3oN728E",
  "key17": "4jDM8TTUaodCMK821MQBaiEJvyiy6Ff9dFkit34NLNo3GsrEjiDPJASqcSAovT7B2QAw4QZa3PsqyKR1qnVKiCCg",
  "key18": "5MesXkxi5SGmESCWhNEBpBprTE7LXeWjTLd9GvPRZixz6sTQbd2bz8y9KXfWtxdaqa8ZbuxkkLNjXg3Xb4d5dCdn",
  "key19": "2MvJXxULRo8meoEUrCF1wxLBSWNpCF1SZUBjfTAbg9BaUXVBWM1wPHefRe78BKbi7MjP1CepAhcdBLEiubmNZwKf",
  "key20": "U4QPeTvHjrUCtASKi621HvMihdwCXHwxFzbLW1GtTx7iffbwZWht4RTq81fmABHZ8z41b6xtqXmcRHhmEJqyZTr",
  "key21": "41rHujCcU5h9onomGANKeSQo75uS6AbknFMv5hhZC1cFZt2dPznNWD8MjrDURe6NusCDXd4qYqE2kRWHh46V3Qxm",
  "key22": "a1fGcP7wvcNRiUAL3fsLL83wqxuKW5RNnyYWNWeoNQcqGaR7Q1Ek8NFPFbfYXtRf4AcZxMkK5iMSDfWMS6DEZpa",
  "key23": "54YDxceQ5G4soEE9fRsC1azT8K6a2K7mdpBPZoTdxsZCFJtYDZoj6on5DfwP4dkNWRJbsAfHtrksRwig48RWfQhC",
  "key24": "2K6JU5Uiu2pMjrdVNNjBtdahXRN8PyGn4fPP3aNvAYwkG6hHbEUuQti3jq1sieuihKpgtrvxNUKNs9Mf7BEWuKdc",
  "key25": "Ed5qVxaTbmeYntBMwhUsxkqcV9N7YscBKVBPxLks9s4t4iZLSgRyWHcSBWXjLnifz8mzZJ7DAQ1yRi1Mf6EEMA1",
  "key26": "4djZBCFfF223Q9Kg73UibmPizJE4ui6g6ZhCQ9UsCPveaxugFSqBdQGcdP1bySjczqs4W9XjAkvExvvXmXeaQama",
  "key27": "5sGYrTKz3WJ3aYcZAZ2mhJCcckuWEJrmddSnPWM3vCvQHuA54UrFrassR5GZhGyLeJ8ovdMFdMcKroSf2jifQ4HB",
  "key28": "5CU7eZypB2KiJNyX1Q981WP38pwJZSiDtrHDzd1KrYiYG5vivw3NVqfBxAMZN4i4mi6zc2NPjDCgANDx8kCbV4pg",
  "key29": "3R6uuVStvnpTtVnEXky2tdT4zixuv1VBr9naxubFCPgGMCVtoFm5zZuV6r1fKP4hrb5FghJkGsc6JmhUXnNzMfAS",
  "key30": "4LrD6eXGky21ALMEvNEKJgCF25tF8HjNjChJcya1Dv34QaHA7XVPeGSgeRy7v1YGnsRs3C9kaETK4GJbDZ3Pcp6v",
  "key31": "2moHZtxpHP2iQqGRry2MXKo62mAx2oggo4oYCfGJ7xvjccFSjFdj797T2LJE8K3YnNVny6kmUVbCTkBosjmFcQDE",
  "key32": "4bsWbLf8a4MeBGqgsAuEQg3RXLT2vZ2VXqpLE7AdzbKTM4WBj9ETG81R39e1E8k3P1WWzKMZnPFkUAm9Cs6Fx744",
  "key33": "WhABaZfeqKYw9R7VytkWrF5fG2gTgaB8hZNc8Lt4ZPHa5TkbDgX1i1CyXPrWKVtwmDsNtwkNzM3WdhywCoh2xqC",
  "key34": "zx6skWinjPojnZACxtxxn1v31qiAJarqSCCTfG5VNupy4LiWarp35rxq4K7WRDz9L6kPVuC8e9XqckDcRuab6iZ",
  "key35": "5qD3jSsx93CJygB6hWHAAApXKkfJAA6Fank7eMqUYb84mwtFnugrRL3seaqEaBYKiNe8MGyHeQzxkkSpQmc7ab4p",
  "key36": "28MED536PgYCiYDVzC8NY6K3b6mpPaovpniEBsXGhsbgU1YimWuv5o1M64FHw3CVKJz1VTp1U57foeEDnNt7aLrk",
  "key37": "5QDoWgzpyEFzgT8SQBWnQvdkWTeLR9XBNNQ6RPC2nMetTuqp1YH7e7DXL4ZJaZ4evg65ZbhppRKwVNiFp62NjSZL",
  "key38": "5yQsGMxnRDAJKDmA99PAPMKdV74vkEkDWj7ViKuC3wvPShz5krHxDQ6KSL6PbvKg8LWfGmXRjJ3fR8rHjdkD53pj",
  "key39": "2UxHKjGnzXMn6Prbrbr2Sv7AMCjUxP6441x8wRBP3JhmPoERxzfVfPe8GA3T971Yg8mP9qYWUE5ooUxpgUaqQ2mh"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
