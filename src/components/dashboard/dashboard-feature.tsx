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
    "23xJ6wp4MTWceFnT4WCZJXy1mphb7MnjCwmF42h1f4LKtiCgz6f6zV2Ry5iuzRR3zBJYq7fv5VwwtwP1btjgA6Wb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KvcyN4y3egA8xX5F2L9VmK7aBqejEoFCrYTg1fY9kX7oiVcAwckA9AFFG7EyzJhka1vdTCEBqk8f9bpsYEf2Rr9",
  "key1": "YNcgiF35VzhT5WoiLGznA1EZeLjAiNBjNk7BLdVCQjc4BCkyfgumKHCzU6tCGSBTu271zh5oiiM8JuQgZpzwcXu",
  "key2": "6xWm9d6L6m26REQWvMEnwiZdZbyfyoSCNn6TX4hQaFWgzvSiSYrMm8AcRkkpt4fyqyp17L2SXiNPcXYuQCX8f9o",
  "key3": "32Gdo6WNM5RP4b89dU1JoBpNnHQh2BCY8W1piaAvTeML7R6CvuJegjDCAJkaFkAtJJwaCERT6NyUHMm4qP23cwnA",
  "key4": "4q4Z9R64GiXyZv3RzVpNz6o3joBARLT3V9Gyg2nBCSf2sY5hubT5Krr9fb2z4a6nKrQjoyA648ejTKqFC1YeK5nt",
  "key5": "26DwbbUjfvm6W29Kb48BWzvWT5jxgQrmUDNpu3e9jfngwz2i11bQLoBBsBGotvHz6nQeoSNnoY1zBaP86DRn9w2k",
  "key6": "2HgUCEUQNps4S26NYMJASqZr9UUdawG7mMX7wrEH4rNhTePcQUHvgFXfcH6cUrmrHxuWjifCzeZvLzu95K1tx9A8",
  "key7": "2itsT6ANw47HgJDq2riJ36nzPf7punwCnuvnzqeXW72JE5DUWdZs194zTc4yrxuowZfjhruh6AAPMRwJSGWhojZ9",
  "key8": "5jyfUHoxNxFKj5nUPVrc9S65iDDTKaaza8pJb7qtFezdDtx3kVU4VvBKZXzrVfHvjzt5jVx2KHS7E2KdGZKMqHC2",
  "key9": "62U1VosREDSvc2CvjktHffk43Pq6L4Sxsqy45TSkvwKwyym7KTXjqXSs7EwSd9PsH5sFK3BYb72ucB2jUALNc8pS",
  "key10": "4YRN3xe8gRUXnCkR7DVQDYNR5s1DuSsPXW1TGVV7FK9ups1Sf2FNK5gwsVrkX6cBNMg8dmDn8UMmvRTq6iZ8BKur",
  "key11": "4xciFTNDzackaoE27JiZ9iFKdbEHP28SWebXRyBx5dsLYcq1MohWTZ3JoLJPzvycYyjJfuwpQR2sjNBC1jtUkAKp",
  "key12": "2PW2NUeJLDZDaRkHJXdvnZAh2thVJjE2tM9ZExW8fLgSmrgSxXmo94n5Cc46Sf6FUFsGevnQ46YDoECxCgxfeWV8",
  "key13": "e9edZkEpvVH1QeqhimVfRrFJeWt63TYxYc3M8K5yU6C9D8bJsneZ9H5ruCpa3uUfP56PFxgVAojXWLJXmnDJhFL",
  "key14": "2jV6TXZgyQp9eEfuiyRPSKCd679ntwh4ywtBAZV9tc49uE62e3CAo5CjG6sFuGzBLfXj8pNvmrCaTsQAgBhoWC6w",
  "key15": "4BfXBpjiXcuZ2444UpaZCCBFigjF1DQCfjZxhbrUm1bDL9GwqNymYrWGQEu8zDUagvtXzWiaWsXn3Szjh1VUYDdB",
  "key16": "3mLJ25TS91c4DcVyWgeFuPMwN4iknHVwXmFFQf5hmkDbDHdBb7AEjmr542DnE1Nn68k7YkVVXu9JG8geF28WFM7c",
  "key17": "R5eyUpk9ttTViWtm3kWaDSx2Yog7WoCQjXPrQFEUUu6ytc5k64QTGXqnbuFwifJgweqUvEU5puFhY61XUVtMGS8",
  "key18": "47TGgDrdNqATvUoKGRTU9D39iRKo1riQhom4pUd7RpV945TrynPf5KMfpXK9CzCcJq22c6FzkkB5oh96pr6Uzm8S",
  "key19": "2WfrXZ7cJbB1vko4Lx4W9EhMBVTAxmN5W9c4LusDDnA6jgXgGpUwbidNjUzpHivusDikikiBvX77VNCurQJP8DqT",
  "key20": "66WAZqcaCJbfR5Re6fJjuvTBY1MGiNWATyGmqohwfhko1k31AMbVyL3U2DKiYyTGdsFHsgPSexQ8ihLmmvGR5ikY",
  "key21": "rzoNmW7A2zVJi26R7Ps82hscr3nb3r5rNeTjBSibigZAuD4aLAcjQE7yJB8k25YQ8JAq8sr7CYN7iCeu9cEvUwP",
  "key22": "2v9AKvNFGJTpRo3dPbmohatGbYYnrovjGBrvoFvBDHKcG7VPSba1LZWbWAXGNFJbLaGmkYB1xS3ZYuPTN8cppimV",
  "key23": "2yGLhqJ9Y8cZ9avSkyhCP8K29HvnkKwcUjQX33H7PLVwQ1h9wZJD6eJsaJTn8QSufv2gyV66ycYWsFHbabE4jA2H",
  "key24": "2K7EHxy13zYefZa99BAP7ZYC6VckVUfqngB5HG3WzYnqRkBXc2wdoNB5C1DVPxN51uzjJYNBEM3Be2tqHpngyg8S",
  "key25": "5QXQgSGDjLSRtATVsyyVe4Vzgzo2dZuDwPHB8pQnAnwQK4mZ6pV5V6hVcEPEJ5vRDnmucgEGRrSjUEuLcCWh5qwt",
  "key26": "3Ff8Gs3vaqQGEj7PNsALDubDjtkQHLgiDPss7cwEa4kom7vifRihZcmeS4NDC4QvwcsaK2pRKT2JgXRFxpcAgDAE",
  "key27": "2VF1Y6di4cWkzadzLu9NvBAoqwz7kMPFG9vGAFK37NFyzDUFepX7zyyEQZrdx16PnoiKig3uRTHsRnFdugZqq8Nc",
  "key28": "yUyafyDUV5B1CXV572crK8skdLr7oRrCuBrVBhCFTMDt6g1gGgUWmMXdgu2Rsbvt9hdc4FHu2pxCARfAGkSysTM",
  "key29": "5Np7XhzG4tmkYeCoZGnp2jwjHWsY1QKWmacF98Gyi3XNrZX54s46sdYvJcoVW47fkLJHa4gdNth2CH2QdgSJq9TS",
  "key30": "64wojve8pVeA42gGMkunroZWq9jzqF5Wppo9N7UGxfW9KhRYBSdg16zj95WwVNuEATCGJnswBSpL1CDtjdZkT9nY",
  "key31": "qDY4zSBLnvszwyeReqhxXWcypPY8qEG7tUZvExJ8qX2vFPtaMSSGdSWGUfx3zoMoeXHNmeSZv5d4DarjoAZWcow",
  "key32": "4kjJoCYCcZP2LFLWzfhA7KA8DDzeskhERaQNchZs1ahtFA8Ez8CAp8ytrqeFXeH6qvVy7yNxPnFPBGAigz7WsxnA",
  "key33": "4ntqrXASmemFHKx2VqoUqQJGCj1cUahW3mStGg6q34AthqZRz3tmGKne7u5VUar9G8KUPwquHZcMx4ehfDtFkxVN",
  "key34": "5RnX2mYgUEoVMukfbLFtFQdtDSFbmqG4AxTAdwvmgpQcuGpKfe61nCgs2na5yrtXazvm7CxfufNu8MrZbu4PCw6j",
  "key35": "2rDK6LiBPZQRqqCnSrz1he5A8sjPmpzfm8hDsAp9wAzKDX2jpJsPF4ynbi36kdvXyw4N5CCAyGwoLF53GLS17Dhx",
  "key36": "4h3QxjJMinhjeFu74hKCqTsfWdLMYcTAD6DiyjMwcdV4HhpbW7TxWtx8Xs1rbDQgXotqnaXKfCABn8Lsy3cznqiX",
  "key37": "2wdUzwqRLdmoipN6cV2jBnNVGKaCVC91wfkdw3oAxkMdcgwhSRMoxiWr3fAS3TjUAN9XqY9zVUxg5qynKURLEDB8",
  "key38": "5JUgruLV4VbJUTXCyRRk3LSHUb6xDTLgQkhsEfxjDBzBXJfnfrhyCQsQxShZp5J5v1cuWwbJpwSG4Dt3JBBcaeFr",
  "key39": "4CDfuc4frWQszcBsuHxz5CFSJv4EydYUK6u4NPrEUw1VfxzUBCvETSBTuhUzzwzPHLEJgUZS1WuUYpyTTRDhAu9N",
  "key40": "3kaah2NFpyoPfEhQ4mvJUY8HzeS1tb53hQpYbiSBph6Qv47Ud5MFiPGiahVk65RA6crVumKLyTKjigxLG6dVFjsr"
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
