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
    "2rA1VZhyTumeyWycV5fnq1jpMVnMqAFPvkwTZGnVyrs3ryk24pMZeqk8AGnih2cg7u5s4SSUrNntDWWjNVkY84v8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aC3Vxfbh5pS8W8HU94sgRLaXqabLVSviADQHWzk3Ey3jPyR3qo3KtytVmDUusJ5esdCJJdScbJZuAWy51yHgKnZ",
  "key1": "5ZE5Ck4171VWxCVqut8tJYzhSMgGSHjDWmxEwZnhFsLL771o7JPcuE9DitdaM3bULjmCRQarmCdhJfb1tdfdzfLB",
  "key2": "3HEnKyaUzr5smfT4AnZeErQCpRuVQfEcUtw4gBn62rwFRRauQo5jmHnjnp9bhTxbM7KiG4xWfBwtrRSrgZuGvavt",
  "key3": "3AvXjXdZELTfTrwyhwiELdzd1R7vLbmUBYKVb7dU9NeaB59xoPGujzgy2UNzBji6toXHSaTxBexHSvbn3zKzt5T5",
  "key4": "46enPc4jLeajGgmgDqd8oRof5UFVxFQsVQ3DKxr4ScSgtFLJbQgBkVJ3JLzEX6KorFCBNfbFYpc7BVM3r3UVas7n",
  "key5": "4TwrfiYPfn3DzMTBK8cRJkbaySBKh2EmUVLMk1WuMdZpzKwYvtzfFqKTjt2mhxVzKXhbB7WcqZh2AR6oy6FpHYDz",
  "key6": "h8XFEKYQXAuvNp1v8g5jsY7mhja3cdjUQRFZzUMkJns2A1EVNdJ3UZ6SfZuTgZBTvF5dWozEy1yTyJsNRHPCivr",
  "key7": "5V2ub5Zg5YJ5eJmitsMDBh2eUeWuazoxWkKAB1X1FCK3UoXCyrLNCit2jVV9swwav8zA9pCtvPZMf9mexKpofWe4",
  "key8": "5iSTr61Pc7JuF2SSZqw4DG7H3VFpNYAdk8XVNENgAhaC3PoJA8GdeZfmGbNaznpaSyhcZS62Sk5wk7Bu5cvgUkoK",
  "key9": "5SKHmP3yvWwY5P6kaufsFo4UJS1Vv6JbaTHiYCCnvhDexj12ZmujBEN8ZWo5un8kS1Fr3tLrwsrivACXLdRTi8hZ",
  "key10": "5AhUpB2GfG4vDjJNW3ErMjVi1xJa6m2WNjEHGodK1N4vMSo6XLmvZSDmmUP34pFKrZyGfF6a2q9zHcp8SquShAi3",
  "key11": "5RTmKNyPzj4R5aBAGMF6Vwo9RxPYojHTuyDbaktcfT4ZPuotY3SRC3SHE577n25HfM1eFL7W2hFvmPwZvLDZ15Zc",
  "key12": "vx86MoGY1rZbJGFZzZfV7iYWrbAtrFBXHQmPpVD5m8v1wGv5gGuWR8DwzH6fyDSNGtnpX8Zd1qPgpeyN1Ef8Ukz",
  "key13": "2bePw5kEsMmc1p8DdFCtzcU6k8C1mog9QWEA5hKg6Ju5JZTsYZQdz41oThWrm5u5i85v6KgLYPEMjNWdRVmiwPjz",
  "key14": "3ocMF8iDZmeYACvqmZ1hndHh6k8TXhzszyCk2v8siyMzsZoEvbqkMA7RZV4JL6SqZpwJJbgNxwzYEP3CwnmGukHa",
  "key15": "3hspQQBdgqMupPhLf3P3JvDpF7LChwJMVxGXd3jES9DmqUtAhnukuKx8u8E4wmHwCyAK4UMEC72kX1VrYwbw6U2c",
  "key16": "3g2ZfLnkqHA8UvabzYDotA3PmvPPUEmtAneWeWuPiVvTnCxoqUnkvhLn2HfUaq1VnLDQKu1fb8PJSqhf5RcxpnLB",
  "key17": "3Lx3WJ7zaBD7RmSmCSPJKSNcwErQgZsetQZ7J86er594ATXikztED9jeRWRN77nsAdLWre5hfRrMygUKNARBPaCm",
  "key18": "4EHZXSfY5nXThYUDQqV9vNBR1uHCdTXyXaaGtyBfgrnuy3jNCFCAf6qqr9gG5SURjviwBPVbzNKeKqrazjCWybPk",
  "key19": "4JEABYzzKhdXSBq5kCtEznxQpXJD638tWMxSFdffdLMSL9YG2FBCFyAjMobUq82VHfiqyy71xpQouV6ka7JkUpSa",
  "key20": "3vGH9CQtx21RfZkXg3DsgVMKkPcQm5f3petftPmELgmaj95NdCqftbZMYBiPtLPAPb59bzeJJt9z6VUyfKeLdSZP",
  "key21": "2cU2aCdbqUt7HyrNfP2zNkcV1WkaKtgwAi5GkCTM8BJGvEE1EHuFCu9EA17nu5v3XD3M16Tfxa5EhoCQzQ7udiSG",
  "key22": "3kt6K3P5ckAswg3xnqKL96dq8f4StXJNQjAgHebD2V75Jvy7b4MbTeWeM856w2ZgXZoiB554hfqYiMBFEGqKac9T",
  "key23": "2CZfqW17nAnYW5vXEGZzuHziZdD3zoq6J6CB16TrrH2iutksVnxqM22WeuEzKNGvdmznHwSMYVSMXD9EKHKoxjSg",
  "key24": "d5zfPg7kpVZMxMCCWzqf89KS929PcLbqMqH9rAo7DkUYe2ceAv6XmaEbuH4YJugDfpFdx42o1uAJyS6os9mZ65C",
  "key25": "2xozaqrjFpMJqt1YYex3krusZxiz3FfysfFi8jsJTpqhkkvPgot1ra9xiGib3T8ZuV4PAXSy1qfSXk24jKYHFE7N",
  "key26": "2ZC3uxkDjfdXH5YNxkW5FQ8wvifPD8JB4VraYkMtPyMKYfDbtxKECY2oiXiCkoqviiLRVQ1GtUENWSGtHnV9RTVm"
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
