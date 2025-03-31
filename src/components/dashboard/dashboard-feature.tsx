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
    "JSPEfyzVnvCFccKHoCTuifjvpWUK1oCWKa84Cp5DXyKMBEz6v8PsA1WuAeVAQrFyqyQPBJci9Eh7Yept51NcRMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HsvpiE7ZGZchqtw1JqmXCB2KPwp58SAr9snhHaEHmYum1G5pZe4ptF2PkcnobaHDd2EfFihdtAEGgMUmotY2Dzp",
  "key1": "2N2kbqQx8vKq2HaiWbAPdsugWwzYvYDtUX2AWLxHaQP3TWf4NPTp1CtGayikmV1prtuFW3F5FYAXFtmRCd5RAFjt",
  "key2": "4h5P8yhVx2Y2Phz6HsUBYjqJA3gAugCFgL4xLBMZbNNg8cQF9KzVAcQBgDqJUqdHSrXN5xjSmw699TZsvAhUrXGU",
  "key3": "vxuCoiKfzohhf9pa8PpV5bcTrA7zzw5momvXB4UUP5SsBXWbKZ3RgrYoQWcvj3GYQPfg5inCc7TGv22YbNgTaxS",
  "key4": "2xnDo28tRhxn119i6APV3u9o241o7X9VjQTKCnvDteMnA8XVemXjNyXnZeYT2pjhjzgk2KqR7SQu6uEFZ5NbCeP2",
  "key5": "2ctyxXEPvex4CTXi1vvM3wKuBqj5nmYaiLtgsxTbgPD7qQPLDxek4aywi8dFb49xe9JAhqxC5wT9twiLMYQLVMW8",
  "key6": "gKEauFr4dikoDNNuVT7go8LywFNdDLWQTxwntwwXAX3Fq4hpWACj69sYy5MqN9tVzf1hE5cYx1GDWn6Eni1uHaY",
  "key7": "3ZN1UeGzmtTL67GqKw8k58jfs3TxykswW4u1NkgLo2FcDcQ51B71qDfJRvnRWNqtdvLftdgnygyXtcWSuvqaGUmL",
  "key8": "2WUKxwBotvHwssZZVLXGs6gSKPr9kg6ZmBpDKdAd39su451MKB7tqVi7KmAUKJrbWUuzE6qq1wYTRQKb2p9SWHZN",
  "key9": "26hssHdZWEfFm5uSjpVyoVAuz1Wuako74CAxpwLpBbuXYvwT6PpmUb8wcnje4BHxktbUZBSzofV2PpGFT15CyH71",
  "key10": "AR3SaUgz9N19PnwLVRXnQ7yXHWwpqAzPer7koDqJrxzQNPbtgkKRh1uuhFF4EDcsdWJAS5CovGo7TE9aH6hzpHf",
  "key11": "2AZ4JEhkdx11DnByuXoTtxJdrd5b7bVfzZAhCxN6JFf7RSKzy4V6pgCmG72KTDpNaxr5EjFtz95mrhMhrWivMdJh",
  "key12": "od3XHWHB8WYPEjErcE4NDQyEKAMnVmAzAVysDGwJha3wNE2V7VwSsmbD3D9dVzCsfd2YHSyhULn7KpdMC4GxP74",
  "key13": "j9Y39DkokQQX8dNkFVNu4V5iUEJ7sueErPH8ZDAT13UBW7TwWsbRtGiFehj83YouZYcx9TVgE1H162j8g5ySnjZ",
  "key14": "5aQB9xyF6oVmhoR9qxSBYmiym17sTdWF3XKyTcpABWg14BNXLEM6FHJMFexkRxrG1BUdmotnHJVDVsrPPALu3GEG",
  "key15": "5nsC67oDhQvYRibDfan5qZNrrgdLjNQTu7EAN492Zk2F8DxLLZthzkMkWkzSY8sVMxfkCRT3K2nBN3ALLojXxrGU",
  "key16": "6681aQf5h577nSGMaMtSc4nvBxkzPHnMKu1XSMJFAVfjvTBzb3MRKfqA1Czfuc2XbKtiAFpDdgPnFZAGyVtA16KJ",
  "key17": "25dKmVEXsow7NByhuMhA6dXCo1zCMLzwyWRHf79dYj1ujz41VgNJwwRDT8Vc6miBSY9nAh2ZRUeYwtEcoz9XMhRY",
  "key18": "3DWV8cPpxPV6UNvf7CqqWLqQVSGUsp5LhnPQMP99v2p1g1TNmruipw6yDoDQmoWdzauyc145o7BPYQUMapY7xFyk",
  "key19": "4RncNF4VjAeA3vLwR3qkB5EKXtBGBy82WFrmzy9SZuB5uxpKmCUnzQ1D2ksmtvN499thb2piMT6YjJtczGfxDdhs",
  "key20": "3YA51sETvFR4q9e2cmSGnDz4jVbUGNEbyhQjMFAgDLUQ95QBGhKC5V7zGEgHgAJy7BVUwrFcoqoh9mCPZc4geVG7",
  "key21": "3xG3swYZXLeYZG3Bj4sxc9W2w49yhssDnMDY4hCvLKE3koddtnUBZNoqHFuRXZd9BXSKxzuSaZVpG4iQJXR7q3T6",
  "key22": "4hXCWaWCPpx6iELfoMZdKi4hmc6YtKjcwztu45ZFc7szyK1pTtpTk9ntNVXVuhdqR8pxTUmngL9GH7iumW1N9LDS",
  "key23": "4v69JWNGH3MMkhbXsGj27r2MxdB2zpFkZDbcwe4zvzHiWCrFNbDcmbB81aaU5Gav6sq9oRVdxWzhGx3iC4iKsYMg",
  "key24": "4bDZUkNtzU42tFTB9XHdqpYhExzZrioso45XPEuAQt9wTJW6QU1vNWgzV6SUEy7XoWdkt7nKuSrkjcAWDe6g2HcA",
  "key25": "2Ts1EhwkyvYmb64u4VJWBLGqeVi3fsn8dnKeisdyFXsgaC6vXpHaLTD5rXm5GoYfBxmgZCfDPkK9MuhGtkJfrT2b",
  "key26": "4nv6KqVmpE1A19FYhaF2YVawdZgR9RpQ483aJJHwPRmVo27F9uAe8ipr12pKoq2ooCE6YTjkosNPvP6M4ct6yfGL",
  "key27": "2vwTHcRgrhdw4FH9Z1t5PZcVpSeVDZASy9TchZE8EJSDYtFgN54uPHJGobzJX1c8nsuGdHBMRuaysooXeB21SdUq",
  "key28": "2RvcLj71iiz1h4gKHDG4eyyT7tygmu122p1TAj1srTUHFxpTp4PdFMbyztNxRiuQ3nyYyF5NDUvDDDEgcEcfdzZm",
  "key29": "2SX856work4n6M6HHUpbcVYLNJLem2KjP8Z2TzTY2g3Dw4y2zWUMeWCERjyuZNfhskYfbS5TEhn2WgsBKrsdfgfP",
  "key30": "5FJ6UhDeCRX5aBbc6DoQjrCcg3q1uVaMbyVRrJrszqVk8urCo3HMeY3VDe6RkS1m4SNcQy1Zffx9x1JYQgmBZM7B",
  "key31": "63qY6UPE95mR4VsDsGB7AeWY6T2XFpVFZSsLJaMu8pQYaRXr3GfnwRzxyVn6LexCt7rzJ7bFFBEwnsF9XfBzC75t",
  "key32": "35MdFWEcbFgGR3jqVk7B5588zNqLJJJSLEkLmdC8a659kYLdWmhvscLREYtRPhaFsEeV2JZBUpJjCktQHt3Zcwhj",
  "key33": "5khMLUGTwStDFvemFp7qnD6S75mB77d97pXboWzKd6wefsdfjRQVRH3jM9sEPcAJ9dorc5x4a7sEhPAdifE1Cvwg",
  "key34": "5z9QUBYTwMUrXe7iQ9aGzB2NTYsV4QdSKfEAA8xiSyt9LJWjDEF5GKeNgMJKYUHXSg2Sd1PaWz1DkGZW7YN98tpo",
  "key35": "45CxhVRhz84JyQJM7tchc8Ah3TYXpJnXAzuRrpXxmvhTrMie7ATNWTtNH9pDMpZUY8f2B4WZTfHpQTZVeVfZAdPL",
  "key36": "3SJA5pUKHsRT6TchMHeNvCaGzdrwLgfrHrBwVb2nqM97ywpwSJTG8Kn9z7V1DJ3Zf776tZ6BaEeYUHp6Sz5NQyqD",
  "key37": "5xkfTLa28YYWSZ1MM2ryUbSLMBXzAjxUgdiA7g3GmiiFS1mfoMo2EBQThCW22Jh2n2qWSeAy7CADZd9MYZJhMngM",
  "key38": "3z42hgt2PMxj7kYPULRTEAGKMPEmTuHH7Cv9Vuway5tcTvhnzKksH7CBJxrxJ2rm6kqkSWj9auUAoycrAUSoWkF5",
  "key39": "3MhsuLZB9NMp5VuvkbZQajXFS84jVjz9378CUjpx5LFhoWTYxnJeiFSVSGPnKp9ABFTRxSGDAgczPS3JBTqHc3gP"
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
