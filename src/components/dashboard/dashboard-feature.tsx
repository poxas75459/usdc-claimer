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
    "2X9mjzripZSu6ytLzLdqk7MexmuCKxXyXfh3uECWhqmbspHf1eXCdQ4eip7EQQGQR8ty7xqQ3xVoa9AiTz4uGTtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "627YcYzJvKcLqMyqRog9MBpdnFjRjjJEXmddZG1bR1uXrwNuee58PhPEedDxwGx75Ae1EsRkNKUeY2S7F6hx7iZA",
  "key1": "5DAhj1YzhfTRAbQ3tpyMJEMCmg9G7ArA63s5JMBk7BtBUZJ1ZEZLh4h7gh1zeVpoXsMEicACTJ97mDVfXUkEmFFa",
  "key2": "3CbfBRtkcb65umLxU8D6cBcaoP4xG2jJqWsopC3FBNQjhTko9iAopfHqqWHPpPnZYidivtg1xdkHS32RNhjPG1yY",
  "key3": "3YiPTfpGTGfU4pGTkKRrrVH2rcsu9QqvrfvBpFTEKE9NTNK7rDuL5HAoVXhERnHPaTE5m6B38QdVsEj18dYAwsNt",
  "key4": "2y8d1mHqsVX4nd5gGZHtJ4R54vZsnssBZXAxc412JeGCR3t8JCR8Gu87Z9cxPHxoab7GcKNz2xQdkGYGfPnatVkZ",
  "key5": "2wHTP2UKAgzoagpwRcMNBDFbUjApXtVb1ubp95KEd9rFeZ3a7VThX2oK2fPRK9vU3mZN4JCqBKYdCD5mDj8Xy7kn",
  "key6": "2z8JkMWP5CREQeCsDEpNkSLeowqxSX7zvmyqdhXYLBTa3HVWqrB3pC2b2sGvBRY3YHcNioKoDHPWuaq2FwKnBvtw",
  "key7": "4acbsM5JYvTf3vGnCiXhojAnzY7vvP6g8KaBazSSE94Tvohq3hYV2gDu6TFTLKVQf7RfwUevAX1ktRU8Kf6iEU3X",
  "key8": "3pBSvYxGWrrWxG7C17BvaEs4nqnrpFW7cLsFNySAGYfmsbej2yNqzXHChdd1ShCTvdvhW43wPDutp1GppYew4Uwa",
  "key9": "bL4NnGCiN5zPzuNQyEinuW6YMJju2R7Rv2o6LLcfPYop588kXF62bhK4vAHsL6R6UqZtZCYreWqLZq768bUZ8nL",
  "key10": "hcgi2SeuCAdkkh6UNzRDCM3ZrM1tHCWxX7XNPJPDE6C1PyKbQrMCd3RM8syrjsZ14k9m19LwWiLx2HJTcLyWX1T",
  "key11": "4pRJatTdFwHgVJwynkU1F3QqAJreymcMv4BiofrpjvWYnEx4M5xcjSM4CQF42SeUznve87MSmYq6N2DmpiVSB9NK",
  "key12": "3HgxPDrscTzUAuCfPi5m8Jko9AmK9dJE5TKhgxRcaukSiZPhJ8mwzRtqTeXZkLCGTbGnAiJtQKKLNWdxo12ArgaC",
  "key13": "5JdfnijAbh45gZGs744o3EWgkWLpyRef2aEbs13UN3Kr5BHNqFCV5fAHHhyhW8hoBtSvcaeMDFyreN5yVcCeFqzE",
  "key14": "5oEZH4ZmATE6wr2jUJanpbfpFkvf2AfhS1W74JW2zpAEFkRs5WPwWFYPBq3UDi5UxtFuBjkqGtZX3VvFB2qX1ini",
  "key15": "4gaAWpyvubUfs8hBhdPG9CKR4n5XmiXoWeFiFdoeo8iQswiiNvunjNivGYf4wGyHzaLEk7biUAoaQbJttB7eGa2U",
  "key16": "2JyxBQvoqs8H7EG1cmVAPCVC4JNSR7Ng6Ct1bKT6YnBwFfdQRUhUDBG3CmBJkULG8FwHbJ1ja6BA4sK7WMG9FPaV",
  "key17": "3iT3YquUguoHKz6fKHeLoZNGAQE1GS63KjcopAhRBjLXSVpCvVKhQCXKzumG7JT14GxfhitHdnCzfiBdvJKaC99f",
  "key18": "5uqKpDTDjjcYKZNt2CoKNCR5ucTz9JtGq8aew8zjDHA39m4b5qFmBmkVuqwNVYXawvfkrbSoeoVeGafqEN13VMzH",
  "key19": "4jVcNECdkUmAoATUaDuUjtaPtHSG6963bCamWVFkAd9uFFTbBmaVAaKnLtKPTFFHXKvPvR6krd3sjDXMfwE64SxE",
  "key20": "NmKKgbjsqJQtpJop2gMQAnS77sCnaGPrhssuSY9u1BhyDFvk9ZunXdUWptUVtcFLTKiUBWQXzczRSWCyhYNK8Dz",
  "key21": "2555scxLdubNm7We9ZJtu8kSJ5k9MSj1KFM8mnqjv25c9JMNnymURjH7aZEkWXuA5azLPpLJTZDPKjHKeLdAhTo7",
  "key22": "39sdMuy8KP2tmvta6BmCqRwmsQNeWcrCV2PcH7ZnxGbishfsyd6wNcBRBQWdYzBGMsydw5FW2i8UR2aYiwSzX7NY",
  "key23": "5rs937kE3EUuMKiVdoaRdd8stZ69cu8CdzZJ4AJ89K47shCNqCYMw4ENMKVaLPNUnLWPGuURygWm9ZYHy5YpFWz",
  "key24": "3oTnN7mUKdnYttEP8x7SPcp3xoppggr19VgqZ5d3S1iHA7hG4JkLk8i9ubFBrtpWU3N4LvRgSsbCFM3fm4XXBBcL",
  "key25": "2YtRWgYrqpNgB7aw7pahBsb5NHkNeYwxo7YQeFWRMnuSTLGj6KVv2vwPfoyqjqeBMvYu1E26Q9h2YNvpirt2JFcg",
  "key26": "2y5jNABzfHteD8Khd1UZ33JgcYL97svsejaoBRoZXQNXZg19C4QmTLNtfumprqbCpdNzjxDAkezAgyE8PbXynrrw",
  "key27": "3bpTqhVAEhUY6Wj6mLoKdbWz5urpsNnYYiZWe6fRa5KECoThiF9GovmEhGpP72MCh3krQC5xAeFaq7pQhJLfnTrp",
  "key28": "3NpaeRHEFgYaA75QVM71jckVfARKMQ5sX77c2723m7uwQXXaLrp1m2jkhYVQ8XjFaLzm9AbSYcGemAR1TGyHeh45",
  "key29": "3YFD3WLXdTNxLPYjpvt8KrZvyMQvAXzozMF4GQ3ErWcDvyfJmH1yTxEG5ko5krQhNtPy15eSkHon52mCEcsStNF6",
  "key30": "5WuP6q3sih6at3QsNRsWHx6DyjH2gRok8of1xKp7B8YqB4vLJFdM9vjSiF6YtZQ7pvvV18Fznd1qHzXzr3PPrgVJ",
  "key31": "5zgWf9yUVKFdb4KS3QPsaRqGBgXQnv97BcJ56fKXcUXpDFvRGscawKiDVebQDiuacXiMqKD4GPuBCN9wtT711rAm",
  "key32": "26L5r8QkBbyVMRo6oNTnHaMj2fcqPdngsSDYV2GxuE58TBxmUibKBRCM62H42suzFqEPoDVzeq5XVDptZJEtdfYY",
  "key33": "5LDZrbFMnMgKZZcjLQQ6jc3UQqLxPPttMmjVUPs18xicLg7LhSs7cXE7sX3ULJR5WC5dfBmVk5VnnxUs3PKkMf7a",
  "key34": "Uyms3bi76gVoqLVkS3kzPQGejYGRiD5VVscZ8FDa9XCgNqYxxaqvKJZFV6hFqZ2LzZYS4614S9tuzQt2A5SZ2fk",
  "key35": "3fFE3vfdgH7YJrfFdYKJf4o2MkuMgQ2dtUp1six9wafMwSzoRgsCJiVcje1girXsPVhedVapkAzwUSyN3XLhGALH",
  "key36": "27jyA9ALyQHX7WqSAeEWUXrPULLAc3wid7Lt9u5Q6FmZ13L7eUyzP4R6YH7w6vxvDJaZ4TtpMUCmr3N966SVKEUt",
  "key37": "5bNS25Re6Rn9CmtipSwFc87QSQVGKpRs9AwFvoAFvwtJvkb4DAaspEib789uf6nm5LhSKBVmj96RzDebKbCEabKw",
  "key38": "BdcuUqaEsUAANam1QKhXMDzTn61X1Lshz9sLDkikLptg3SNxeduxi6Hpqx2PMxZFas53U7N5SMf3FGLwvvVRjrD",
  "key39": "4uS2W9cSbfZ9DoQUXxC3Fr4TdTKDC1dbL3ec4Po6kCtXef4zVq6D6C8C3Sb7hx1U5MUjRqbnCkK3WV5gckZTzvN6",
  "key40": "4DLWo2bfLMaF7GW8PFrT9znxMe1jf13t5pfi13TeZj9hcnFNkC4anKFzBe8SF5Fjzis7LexqWgseDrG3L6VWW3Bu",
  "key41": "4Lhdkinc11qBT5MAhJHEQ7aaNn2b8Y1LkcvtCiNQ41xQJB1dZqzNSwY9D824X9sVSmGGQW918rBUQ9BRXpZeYLHB",
  "key42": "9hXjGtA9fEgm2uSwiMDCVoScNyqkCBss1YRPtpHWXRvvk1Zyrc53R1F3xTF2rmobDq7mxgHBHRVHdPrmQDS7phu",
  "key43": "2Ekmgb3BhhPXdwzUXpXyA1QbRB1nY1sqdx4dTVtJNQ4ieYdZVzTW7xbQviaYbgTSHU6zMNF8wRvr25nw4BjQuao4",
  "key44": "5fw6hXpBsd3LgdrxWJFLETL7bNBjqXLc1C9oHJCuAxMz1aiRwXQGoWwbV6HFjY37mWKBpLPS8ekDK3gAD1cgN6qY",
  "key45": "PuiTzguzXzMj1DrqP5CFEDRtwhqnkZby1Q6NJs7EEcNx1sqG7rkFCBkVNbnWC6PTSnNUfct2xLTsg1UqhhXLAwB"
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
