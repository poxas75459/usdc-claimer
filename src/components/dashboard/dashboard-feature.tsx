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
    "3iU4gT1Hom7CbqYP4qoxeX75Ef3z6mVP7rU34ChJ7Lg929Xm8fNwEAJxmw68KwLft2QaoiKUz6BiLojdosQVXZth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YoFTGH8JzzNZLRF15hGTQXRi1BpkqSsQ2VvACTbzpytTVPzm9NsUhzYUCVR1EWYX6DC1U5rKGP8NkNTYq5eA69D",
  "key1": "26vCybhsxXe4PWkuJdArMzcAX15jLvzKAjpcJdxQBTGZs3XTercEEh3BbYD3Sap4RMYjkqjFxbRiHmKSB7TT9d4J",
  "key2": "5u7jn8H29ytVzQF9JNtugGqW9r7ahGUdAjZMQoqfCWZ5Vwta1jqwPa6B4VD1Yst55ZAz7WoDPBMeDLSfDuWwmPkP",
  "key3": "qbiPo2CRZ67iRu7sQkBdqu5K4Sobxfjs1uBDVqyLobpYzb4nq8EJk1HwsAZa1ygVgKS1qytLB982VToiJ6sK4Xx",
  "key4": "3o4784sqcowCYT27oc3jwZ1Zrkam4qnimxGZygL6pSJ2cDJgKWw93qw3ZePhCPA9D9Nxan9mYwsJQHeRnd2eDhDN",
  "key5": "5ongr1MuA59dzrnj2V3fQLHLxkj4GyQmRZYqAGTjtMrTFEi7SR2RSZ3DRiSeytYFMyuDBS8YKc4Ppm2wMFQrt8ES",
  "key6": "4SkhERMrEZAuHJSNsb5uAZ1EGmDga9tas77KEK1LuwHcA4MLis8HUzKv4TSvYHMXx7tM19du5aNpDyrcYgDWrdLk",
  "key7": "52kXymZJ8yq8KK1cM77wDUFkLpssYhXPwEbCznJ3xBi9Ki54dMKCVP2SQFNWjBTBuGzv7jDHrvXTitcFV9oAfgN6",
  "key8": "27Y27ohUYTqzcGeF4KXagj3G4wQDR8G8fpW17s7xPgBM6idMN1PmL5aoD8sTu2eU21FpE52ECY9XtmXwR2n1fTiD",
  "key9": "5iAEPvcpLt3yUaoJY7FwqXjsby1iSQgQnVz2unkW3uMxvjSVumeYXTeSa884dU74zSZiHB4ZabfV3a1xk3TkZr4W",
  "key10": "26wjqaUf4QHiFUToWj8oUa24E3KAuq65ufJ9aEv96sjmPpLJSyVuawEqaBhcD34e3Y4koytTYHiV9Tdg124FKUjh",
  "key11": "5uuCb7x2RD2QL7LTDJG8rEamJ57XS5G57AKRSC3FoeDroeMvZSVfAt6wRDhcMMSTFeZASkimoPh79CiZXB63CEiE",
  "key12": "2PkXkTGTTjGSoB3aPhm5nVBRHo2q6mchQvJVr3quwX3fwdvoE2vpcZCN8fvmZBnbYT6sKCEmxjhHpYHK1Me91xJe",
  "key13": "2Syc5EEJ8xEnnNnU4QtuXxCddi7QroRTF1vNpCevDXSVeqXWMApfrpkCLwjEiAiBhfa3PzhuwwHmG57b28sQnx5i",
  "key14": "3UwFmnLQ3paBtSnvCbeAYV8wSqWi469L9Z6wmYahPMDT4zfz1oTQv6aVJWJMKe9id2tLzdJN4RtyFkdRaEXJ53g5",
  "key15": "4eL9NY2nLpdzGq8zvQ1eX5ekHkpDLtv9Stve8yvDkkupVUNwd76yg5HMVjJaffo55CoUehvqenhNX7vVMKoKbJQJ",
  "key16": "2DxW3SunsKgdYEhGbsa3hCnmdRYnWzursb2f4jHUyfdjruTYj4dythfzJYytnikPmSwphouu5MLguiEe5BuadXUS",
  "key17": "Ny9SQgEwxd2Wx2tZ3aq2aS2xxZQDQJzGavnzf1sBMM2RtP5LXJYJT8HwDMCuBbwhvoVYhFxLWfD9d9eKYJ8Rmjo",
  "key18": "4KXKfwLCHuur9P5GwWW2jXZqtkrsnbZuyi3j2SrwthGy66TGbgYP3YT7tL3pSK5BsZjcKBmMaTi7UacHfhp7cE2S",
  "key19": "3KHft1poFrdynSFpgGbAvTcfaLzQGqB7pXwennrfHLNHLS9FL8mNXeLJJTGNnmWrkesPXgEeLYN38Ktqmg3ZMNg9",
  "key20": "1P8GVN1YPVcFvThWkRqmGvYGC6EEJnNyeoUKPGgNx58p88vzZ3c4v1kky5iwELwDwwyfyjgVBtoNmz8YtVpbeHX",
  "key21": "4Rj6PaziVcHEptE7UxnRcE7XJq3auMLRptuaQNvs98vWjtzAFYTnxKYrW8FLDLhAGJaqsp3W1izrBJT15jkq42nD",
  "key22": "5Qz8DK2xjmRzxPyN4xWiPUHoYGWMN8NUH52JMmvNEsueDd5CbWqreZwm98Ppa5TSgZcgDz266Yb9meaJsqP3B64D",
  "key23": "4aWFKLMhDfxqf6VJrGJFQcGDnE6EuzHmemxLQsmfoqddTZV59Bp62TWPuSPEGjL1AsUt98orhkZgvUGP2spHZppN",
  "key24": "43bEPxW4e3BSWCDVRqfTzWPCi3xSBf8HiUhd729wE1e4zTW1k1CBnMbfaQEpGRUJ2FE11G9Dk9tfpdfYFQHrNmWF",
  "key25": "4CwN6MpU3hL1A7sr6zGtuUyqAmHwAXYgpzh9L1NAWuimzpKFEneiG1qHh6sYtJJJKUNjjwBWRydetMgcKmjWfJFP",
  "key26": "wtjaUjY43H7pmLce1bfDRq6dr3m3ztsNzQnVAAwxCJVghQJi5XNAr1CeQXBzFKaJa9S1v1JaNVJAq9Hfh3agA9e",
  "key27": "zADVbqvURnzmu5HtNTpihNedSerup5ckCUs4LUDhvH1ia1fDDW3rQ49yYjJoqQegh4kuaMKW1Wiw8UKYcUNa4he",
  "key28": "3jM9Y9apcR3ne16XSyTAccKWauwnsJnNa2oepGarHFeHU4LvVYuhuWfxPEJSzgHUWgbhJXAjp6574i4Am7Ymth5x",
  "key29": "2aaWsj2Mzd13CbvHuVm14sbAwx67AgQ1aNGgJ1JfndFCrr6rPSEkqfR5WDuajaUiF84PdDunR7cAPREWyxMisxki",
  "key30": "L9ezj7ddNCkHfDMtU6apN6aTGP7DpDrnGoCoh2keMiKy6acso2KRZyDkU3ZT3XWrxZHB1FsLmej5iXKKk6PYRV4",
  "key31": "2NgBienHKc5hxqzzdwFmjVBNzZ2MkcNeMFFkKYEVEKNcmPEknW8AJ5g8mhdL1LwY39XsBtZnoS4fv8AL6gELCmPM",
  "key32": "5kw6wAKukouo821vjSydkF4j5qHmLtxGd1fKj3zG6RcJ6ZPeSkAgAY8B2mPtkX5NrSy6euPizDbKvRThUFArbv5",
  "key33": "4JXbjg43dPywMuQ3YcH85CL3jFFx5wTFeHGvV4rAgBWwG42ceLvMzZkCmu62yggzoe7NzJYLpdGNEDttKeXzaD7d",
  "key34": "2xjhhUw7nv7F33NqYBi2396ARwTdfTPmtcv71i84yXAnUax2VF5skfjWbm8XeWuixsfEGfrMHxxDh1RHcZhEox84",
  "key35": "67QkC1KhZCqVLApXACvyxfswwr1XmPwUKKoXtqe9w6sAaQWNbYLknw73MZbK4xVDTn1eTpa6tuQdZUdKRVZRCBaH",
  "key36": "5r9cquzHoVGTfq9f45QJGB1RpbnrTHG1eLyjkE1hA15pjEKbQYWydXbDuVeKxoEUX2Xg5ufNeQw9jqceN5BTzWA9",
  "key37": "2GAkeuMGfoGmC3aUtgW4LNeAPnsEktf6FHYa8bLmJTFKvP88rQw922mFcFvR8NTH9pihDJGeNV9N4dxY2CfvLwQ9",
  "key38": "4MfK6zv6B2GL12hML6fP5T9dsbnTdtVTDbXVPDigzvFZRsFYrStuEXh4xMR6XTuphY3CLJbstmueGWN3vE4zLpa2",
  "key39": "2CYxLkHXbWq5Ma6u1tJt2Es5Wy4BckqBVTU8Tj3oxcstTxBKLMKudYnbftYwWGrZSPZnFAvWf5rQSVvb9BY1HAS4",
  "key40": "4qwTKdBvo3NRg554GsKwr78LkUKxsbRtwHeUjP2RWmXsm2rnsYbmyKiEWXKjT95brYiDfvRvQS71q3cpgbUb9VnQ",
  "key41": "XTm3fDyitrAmr1B51jCcNr7aXqcYCaeXwS94etVPNHRc8xGdJ29Pod2wCPRVYd7nfCJFFsJCQthV9ZFrp5qyEUr",
  "key42": "4bn8sodbVdbVcZJ8sHjTJfcXYjKtmGuVciHvoHS8JnkFFyqcjcQUtQtU8R8hpcPy2wDAtJpxw8u4r9FGUstiXqEp"
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
