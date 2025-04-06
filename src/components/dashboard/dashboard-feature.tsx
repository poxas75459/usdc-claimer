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
    "3KV2cwLF4QvFjmvEsGTXSJTUNoituamPy6xj46kMTBYnH92nXyM6hbwTqGXTd74yiaxsW4rKpM7yzmJSYhAUnbTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GfRSg47KEYLYtjHJkUBJBu8QqvPD8wC7jAxJ1ARYDUFedPXqjsthGu4EA5BFgs19S4auuFVWDPJxZFyur5p6AYm",
  "key1": "5ApgZiN9tCAXUCFMw3HjCDoj9bPYBNtSgSXmikYuLgtMPpC5XNGCUAQkom7cUBZvaHS1pkXFSfMFGakQRJDbnYtw",
  "key2": "41Tia7jA8gKeiZg2vDphiPqXkoB6PdSTMLhPNiXRyMJ3HurqKaUaz3ph9BbFTtoTwt93FW3MtrS3VStQbnAc4LF8",
  "key3": "XSNtAmsB3PU7m7qpiA7MQ6GTYX5AafT78e812VDZjSTDGSczf6qr8m5bc2JUhFBe9uLiMssGCx34daFnVNVcn1t",
  "key4": "2GBBfTFQhjdDU89an93kr4pCybpm3KUCUduq8H2JdncWFnGnswaHqTBHLD7PghZCmZm9QwGoKodyYoeM8VqnzGoM",
  "key5": "3VPYGusYydmaBnVqoZSi2MidGHjfchmf4SVMfdLdpWquuhBjhkXRAbCpwRTPZSqAym9tKSVCCLVJnVMs4Wejfkso",
  "key6": "3NvomHjetCjA8NcSCmEoMwesHNwLfR1VLqJFD9zADarjunZEybRwei7G6rx8a7YfyzUmY7wiuW8GjEZAo6zGLcBu",
  "key7": "fUB89BMTwqrvLT5kBnxTdTVCYZtZ7DRqsYdV1sHrQEwdHjdYaQgSvRwA5hj9Rrmwr2QmL1wN6ULxhopJD3M3xEm",
  "key8": "YeeciwgpyxG3vtTPpDySxS95oEmSXJ1uT3fP9y7uozy6JSJpa6jsJ9EQbTwePjE8PG1B9Y6C1y3TJ2Z5xjzWcsf",
  "key9": "534kQdjZbzaEAs9D5zAbaVx6No8tLb6sHkzG52AUaMnPazoo9uusyXbsU2YjcmZEskb5xcno4Zw5HaQ5HvQ6J4xE",
  "key10": "41oanpzvVcXh7Aexh7CmDfVc4ouiyVCvjHkWq26H8AhY1btnhuAA491EC339NTS6xE67uTfRpPVkosGYvyEqJPfG",
  "key11": "2hW5y6xZ3BYwYcde7WikJLXW7ZyHkjPiUBYCXRYBJ4QeNe2CYDojkzGogSvmuUDio9M1yXJVT2ExEER172LcbvPd",
  "key12": "2R9qkjeynP4qvoz4qjzu8yKoR2H1M21p43rnXjema7wtUZHQSQqvwp6KXT2aAsomhvMeQfgpmsTBFqNZ7GxnUDx6",
  "key13": "2ysuGV71G1J39wMugKBoBmtQujfLvL9dckykYAwSsQ6Dduy55cTuL8yiQo6zjPD8ejuK2xUxE1qd3h6695WfnnP8",
  "key14": "527QapGBuPmFmtbjNrUqp5Dapz8D4oSRSp1mweNDF24eisj8TxYxwTw2Ady83uCxZyTNdLhm8ouYGXmzJi4VNSTi",
  "key15": "axfCB5qFeNmW3tvawwx4zGPcAVoomdFCfiHNKPq2FsFCCC7qWVg2797oY3X5vZDrXMgoG8o64BtP9nmc8N5MMHX",
  "key16": "5aQs6Leno19QRVWBJRZn3QYjMj5J7QHiMac6J8SADDpStfG3X1MUwawHrLm54qCTC1TM1v6phdcrK7Dj1MQzAX7G",
  "key17": "2tm8wUaVmVMoCmtuRe1ZKsBNBD439kMvNcaWSEdx2B6YhKq8D9hVZQ7PKCqiTiXrxkH47q35uBRAKq9vL1KzwZx4",
  "key18": "5dAUCThCmUaKfrnvBy8Piiyrn1UoZedkxT4F5aMmTijmZ5zeeSWq3tdoRHwrbenbnYzgWtzpitNQejMM65HGJrTn",
  "key19": "3u7sPaSBy18gGkchP7mc2VtoTFt1VszwVotRMPovLRi3BwkT3SmyQt16S3YD5aZAnYQD38FAFWPDiakypA7gG8d9",
  "key20": "4xr6kydX7wt3VVyy4PrSEqkRBh8kFtPtsniwmrT8wkcBVPuoDggmGGjWJqcMMcEjSAsik9ZMFVwfPRV2PUfa2WPs",
  "key21": "5B7y7ZXkhGAMgL8Tfj4VNxTwQKhVDfHoo4GJ4SiQwkriNMR4mr1yideh4znk97H3GntsXKSer2ijAw7onnFzmaHi",
  "key22": "51ukpduEJp6eti2cbGJaqvto7to5mxffmEdgvz5c3MTjV1mpWktm27cvwenZPjxJZxyYCWYgAakg3uWVJAUTzyrG",
  "key23": "4t4asD1TJgvba255GqXNLXt3xqrzcHDtprQEpF7tjuXS6ykfkZ1Z3DAKFrG5xVzxYpAxHCWrhyVMbAHMF8EhFCZx",
  "key24": "4k5SZFH4xb4TJNDTjETevNMbM5rXqSHKXQQ4i5YAtac39EjfdbiNzVwee6Jyqwo8dZozRPftfYamwMm8dP9WdfvK",
  "key25": "5nDnQniFabUvhmgA7WCbvgphjJT6nAas5MK71UDW94GXpDGGnw7emaFAWnVwuUBpKgnn7RXUj2LcvSQhzAHkQRin",
  "key26": "ZfWKnfCTibhbxVNMzNR8xsnGgNbxh4nBFiYkfz35iRsyhQuHpH3JysYx3aZR9yEEg1F5QPbpaQsDMNRH4PsRR4e",
  "key27": "3wxBqkRkJwtMTNpvJmQ3sMHWCtAFynEDdNd35agxA3iBongPiv67qXyuPM6ocqnWSvyZRi6webDSbgV8itj4XXFt",
  "key28": "Cr1AeQyDPDUBJ18cHr6F5YNvT8ixv4G97DFFhNMr9931qaLLzEE5Dt6oYLci4GhrFHD7M4NbnAB1Y6HSvriwovF",
  "key29": "5gqRtePdydmaDYq3y5WHgK6mbq3hNReRYTZ2eS8kvVDaGuuc6HcUsqbQ8nR7qS6SPqgiYPAg9Che37ednD2eCfD1",
  "key30": "3rnMhg1ZbqQzYa1VDNyXWhYCwVdTF7RiEECkJTDbZ6MZT1kQKRJpN2Vgt936RQ6A2WFZj5F13mZYiJY8RFo9NoD5",
  "key31": "94Xt9vkEf3f7UdNzEyZyrXK2Z2Cf6HecAGMPYi5SeXx15vvikoziYEB2HuSNG6wG7F27NPFFJwsKgD9yZLzSEZX",
  "key32": "s7KarEnq7LsGtqwy7fK5QQfzKs5UXk9FsBjwsMP7CPU2xVX8BKBfBLK6g9MKjJ6iKcSSS8er7xhYRojFF6RnooZ",
  "key33": "KJ9UeJRzBgvopHL6gEPhFcznip9xLznXh6o8b4mqyhgq9qvwi1zTknttZHvQ2zfpw9RWssDujsGXtCMGPf9gXgX",
  "key34": "jy7fgqVwn3t6ksbCevZTiQbM5tL4xozhZc6onwXV8WQf6gafZMtRjTafkUd4njYycEdVsR8js7vA7QFAcMnM6UN",
  "key35": "2m1B5hnuGcjzVmpMuSXq3qdYmwnTsgtzJG3Hf8gfZPkCxtZ1PwD8Hc2wNyRwbdmkXmvHer4qZhfA7PzFfMQcvq7A",
  "key36": "33P4mhQxSB9rjrbPxYHmjxYV9PFruSeh86sGRshMs3xi77ULYgdad5XW4nwFLiyTP5osxDvF1HbfoiyHeJHRYDW6",
  "key37": "2124GYX9XzrDCB7LiJ5aK9n1HmL44MEAAVuiSmf8NuoxJEnjkKp2MiXpp1X13DWcdQyfAGZmPoADuStH2uxvfTMV",
  "key38": "5VaUh3cAo1uNgSYWuGgoeztgfX9zy9vDFG6tyfnNqNaxQSLgFQBsY6kJEK2tfvqucTts9tezf5p2YHhmiwxLLG6d",
  "key39": "2kJ4VSdG3rPyhcyd6oDKq4d6nHnb86irApAAGr214qUgMkgDkv6C5Pwmh22jjn7duFq5BsZ9q5ac4jFmACyRGzCx",
  "key40": "2T4CY4Et2LKHhjJQx4zNqErPfmBPvkYshnH5rHc1iVHoGv3mcZzwfhpdjbCqCfQuWphbdmFWssvkWvGWJAgFfmwZ",
  "key41": "2PXL9op1uXgVAH4Q3RtzKJqgZWVm8ykdEnEh36qzydSjWpySWufrMymv82ArYgy6jaFu6PBKrfbUrTsUEiwt34GX",
  "key42": "34UKi4uFYugeuzuo51zh3MmgChmJd8BNQhxh71MCKepJzYsqNUFgDMT3iSGgEi9xbH63Q9vUZyjyXY1RnccUbETc",
  "key43": "4kpk4gZYCeqX2f3CNLFYWh4zJ4nBkCrEWeWeMgp7GJLLMNhSL8fxdbqCNbcf9mX74yMJF4awosQTtVSrMA7zuhzn",
  "key44": "2xopPr5RK7bbJ8wiWMiHur51wJuSyTFdFFGtsVsUfjcCUessMUrfEk5JnprjR9KbuZLk7N48B2W8QVi4gcvuzv2b",
  "key45": "5nDPSYrajQSZRdDMN5gjHhM3DZXfiYMP7zAuQZZVwXRLife5kJnyVXDJ61AwdoxKwu9y4H3y76TbMmJyandC5PaR",
  "key46": "5FFtU1wsGDyJXRxzeBiaM8ri1ZM6Tuuf78tNHBL3LbpDt8vNhXKkFbUNJBeNquT1zKJ8RJiv7yiKSWLhwoLRHjtA",
  "key47": "5uBrymPQaW1xtwoX6EStsKoU4cnUYok5t59CVHgxY5ab2mxuH3ttfKz65rYKzVR8YXvacMbWDHDHNTN2rVGJuaCa"
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
