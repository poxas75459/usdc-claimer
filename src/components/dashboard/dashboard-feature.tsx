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
    "35sjCeVwSyxCcUjbccByJ1DaC6SARx4nZJwAfxMVwagDoHceUyrjzAWKu44aBjhpC8CJC5VuMkKmXEMHfxGwHHnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7uXyXBDwMLtJS6swLjwGF27U9rYKyH6gZfhj5QCQJw6W2TMDriyqJ4yHPF8CAUtxS7jot9yLePkZ5o694ubEAE",
  "key1": "4Xk78FAaopQumHoUBRG6cJwCE4WnUakZrfwzKfPSLuAg14kNFcUXTRQNViW7kgeAZKLrLqxg1MS8fQF6xRKt18oB",
  "key2": "2gCSUAxhyFDyYUMxSL7YCkt3DcjEYxFf7yxLAwox3TVBP6VTatJtWyGkfFrTpLKdrJzAbeymxqfEu9mtYAKQL6ck",
  "key3": "2B54559Dg37FMztHFVnkvK6KuMHotAuGDgUsUi88Cr43YKZ9rmDfWjcf3Wgi2n441oUf1uLdrAagcSPMUNkfR5nL",
  "key4": "a3q4XW4pTkhbVR4PBDr88qdeHnJ5WvnQ98NGW3sn4jKapTPjzm5ZrDaVnFqk4cXe5urZ2aAuRLtLgpPEMFL94Be",
  "key5": "4nUHXAmfnRWnkUiLXUQBxhCFDo6gPvCGCZawVZswV1RSDc31fMmRRNYiQMpxL5VRokCeddqDxw2kbwYa6kcFPqbY",
  "key6": "2z87CwSbhNnavbD4wq5jf8c1L36B5AJNgYK2CoW6DBqsB5LwVCCcUd7Lk17cRMiBNB29TisXyrW6LLuvvH2BL2FE",
  "key7": "5kGS4C8SRwaBpUwM6MVDmz4sDuuXgXpzZUymFSXky81xN9GQ1Pg1uPCsRmbpCUiEHT7pDhsKHqdyZAyYohdzanpX",
  "key8": "42S7Tyvy33trjTXowYZtwMkoDbTYQqshER21r8fH2u85KQHJUptAnHHkFDEf5zy6VtV2XRUn8ys3MrPXFafdULCp",
  "key9": "2CraraiViVnown4HGWbSbtrNMiGKkPvDpNwBXchu6drfJr84APZkS9sfG47NvsVT6Yxc79Ah3FuC4qQ74xKhmqH4",
  "key10": "9XnwkvvGdqDVQb1rPCdMdkKoiJjTyhQKziXQ7MSwU2AeYExFAnb6JFz7bzvqoBWHuBaii1GUoaSbytGMw6SWUPj",
  "key11": "53CFnMhJb8SU4NjKSRK38yc4obdNABF3ush6EWxrNVbZkX38dY7AuwomM7FhWriKjxbUnw3PNtLVERu598yTp4vw",
  "key12": "67bmaaemu2gNv2WMsn5Tt7MzRW7cY9ikavaEyY1aGATBk7RRVTFi4pQ341P7JNNspuPERyNGvC7B3BpxnG3gVr6t",
  "key13": "erbvg37F2zUu87Fvt4x5wY1T7EhqCFbuQm9Kh6Jmq6wJgKGvc3DWyzwk9YhtGsWUXvyZURv3hyzDFVosNrBia6c",
  "key14": "6o2mCAnCHmbaUTGekm5CUr4iko2dKejqY5AAWxYdXFPtBZoCe1dQxo2Hm7pHvsLxgJ7NAcxw5N8m6UbiDyshu63",
  "key15": "5ucN1w9Sb7Qk99wCFLLxTYaJgAu9LZ94TTNAVCWD4x3uGqUD6VVNikqa4Df2xT6KMnBu7bTWPCu8z55ZEjPZ7P14",
  "key16": "VvHLWp9kVwvXh8hSGz9UsnGNvP41hjUvgT8k89uZCgPgvQ4Wy4qUrtFnun1bGSj9LacagZt57KceG8LqKg7yk53",
  "key17": "2L45SJNM1uATrWmsD4Bi7wMNqyDFjZXDix5Yci9US1vqEsf2ehZHd7vHoVgNdeACmSiEqSDa9W5mGvimfjYJyPNG",
  "key18": "4X5q3nrxdqGop8CvshUhvNSZeVFwuoeRTG2i4oHwXjZcevppq9ZA3UeiPkXYhsrgcv6Jbbi7mporq9UPRCqyn3TG",
  "key19": "21UokjECp9oaTNX1NUE1kHDZSj41666mPhN3AP6LAB6U8B2sXYN2EZrikyUTgBbmBmvj4n3jvNg5mkCKSBcKjRca",
  "key20": "4EykL2TcbmK7xaFfd7DvJkgUNHu4sgK8jMz4wuXqPjXPrUbH6WLUZQJ7vMvnaTiNaFhsvn8SDaK4v7Lj1W3GcFar",
  "key21": "2N4HZyiFQCGSfb2MuDY1tDJREYk67ipnwTC1mZCnABjX17aJBCypbHoxNkRsM67PiRcRsQpbcWdTLqo4jR7WaKuT",
  "key22": "2q3mpxhF35gDMgcGLcGvcc27LbZ1W8coShLA4U1ptyqF51L1ab8ANeARqMsxq9diQc2mgtvxVkVFb4b6DfBCYtJx",
  "key23": "4b3MFVwG8zEXYAy6wxnfx7u7j75swqSjxtk2CUpii3cNEgPPotGsMeT5nPfDyang4fMjREp2bynaQ7LrbF6L9bjw",
  "key24": "2MwHXTEezQLrMCwYXC39UBXh8DkGwUfpaMZUhjQgMrs9kMN4o67dZtatGhQEiSDjGRf5cFJae5ziy3eREQoHRfek",
  "key25": "43qtsDax3edpfzzMW67d9bb6HV6f1V9Vtyrbux8wLBM4wBNVdWHXp78wdJvD5UgBcRoYG7Qo6CKGXVsLg85otgDg",
  "key26": "2ukXJgWqb7Lrdzcq6JsPZGHPXVDBoHPFgU6DmGuruJZ6zfBaMvxaP8t84EczA1zzzbeqF8gfbZkPDZQvpvtRQcxd",
  "key27": "5MztQipePPQUdhub7pAzD41GUvtGPkGKEEu51yU5W1bJJUQuraMZLy6VZRs8ZFb2rsEmjmdBMvodUf8EwWJVCCUT",
  "key28": "3ZhN5hcQorLKsU6JqD85x6dVrdEtMnaKv3BfS8NVVBX7ks8hvPo3NRvcRjfxiDfDYtoiWkBnMFZZ9nKJNVNEPJrA",
  "key29": "4TjuTgusgPzBqkFDqFng6q8GhbUKsvAFfGUtN71v1yKnhHzkc4FMaCpG6neAyxWBbxbjV8J92rt4v3iD2PnTDybz",
  "key30": "4csCEhnZK6LWfLVCDPqhJw45VuaQbJVUyNEcteA97fqYmNUn6nyyTrp7EQasjVM3p9X3hc6FSCvZe6CU43FhvGvt",
  "key31": "3ZEBLLaR7oiTcY6bGAkQur17dEwSgNjL9orXGQNcsKW3zgHQGzNtH2FNz9XfpjhymWrjUrqHH6cBRGKQZnefj1cs",
  "key32": "4SvprJ73ajAiRXYVEswTPp3x56fZVpUqg4odXrqMSBuGrNAPbYZVShn4rJbNvh7eW1m1eVBJQHky7hxeLVBREjPv",
  "key33": "3fCNUDxBA3BjPsGNB4c1DRVdd1JBbTw9mCNQwNq6An5id6YdrDy1BUNR1JUgDgJ1K4T1cDztZ6H5Fhkrgj8b3r1V",
  "key34": "5VxSsucXAfoC9GDLwZjqKAFKu3YMTd88KpKUwntujXPJieDK6ivUaQY7t8Y2zb4DNV7sB9ApGK6T6JuKFRxJmuzd",
  "key35": "5zgJcxdkLpSSfrsABQk4U3DivXHxUdLgcZGUqursg9A6JFYSZawqPfwbmi8wQGxAjoGPc4C2BCXXmqfCvus87RiA",
  "key36": "5F8uUBs6mEVZ68aKDCBHjPpNgz6bQdjpviNqDLMq2tkShoqHffVZ3Pm1vcpbrMAgTaFNH9eTwT6vazmw7zY2yU9g",
  "key37": "3EpimSj4Uw1aAhsVwtFDMNTbKAWB3kf3RHgKhrbkXfErfLrQ8teXGD6958TgPgeKBcacTWsWceZ3rpAJkDud3Uhx",
  "key38": "3Zxr8kXduPgShPfsXaJA3P4k4ngcEpWG5QsnmGEPPWkNNUYCYwZP9yLne8z5w22XBi6nrFtdHcFTBw2Ucr19fgKN",
  "key39": "5kdKXmUTbDqjADZBXA1vZZUp88NzT9tLJGatETnKXCaSxzT6u9NKuxZADkacB6LeHyiQtwasiN883uVZj2TTG12m",
  "key40": "XoCBEbg9w6CUqLgAgGviRsNL97JJFSonmriFv7RJCiX8m4KYzzN9FeDsmUkbLr7UbioBrweUt6js1iHBPbeZChy",
  "key41": "48i7VRN5HhgfiS7GGu2Yrbk129ntu1HhXwsoK4PLRGupGyF1x1VALLAwcZ6FexPtcAJP393JFqmuZEb8LAAvAVFY",
  "key42": "qzVN5Ctc9J7EqBaQ6XqrrWuNZVknnswTGEmeZimrpF8uaQbKeh7mebvkCqiiar8zAor1ouuAYQM6T4TsmrfwFmd"
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
