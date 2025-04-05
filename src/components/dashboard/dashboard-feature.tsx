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
    "3sWBWwbpowAQw4raBC4EijiuG6qT1hAwByVQDdEU6jewTDgXJjMMFi8azVfC4kukKQfv1uqpVtbBzL1gUd9Hcuzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bSARRqH9LKAoL3rcQZXbiWYvkzkRzhcgVkLWFsuabM22EVMwkwB67XBr7xoknsdKKdTsvHEZY8PhejPeqLDTjV5",
  "key1": "2nA3cwdaAJJWzcuzdyfAzhqtGsbq4JHhiAms7HJGfzpQyH2QoV9iRW9TVLivwbxsUxsXJTTa9hmmBKmVZ9mh1hSc",
  "key2": "4FWmVQ6vC84Aeh1jjaSGhwrSMaEzB2QNskGd7L2ge2DmkveBohJcskuwv7Xb8nAGM9NeoATTjhogWLDrzUCnESyV",
  "key3": "3Spqm51cbvRAaJhYsP7AExMAjB12V5Zy11eC3JQds116c4Qpf7Hz1fghTkUXmYDLsS3oLdJoJuYPFCHcsNzVPszR",
  "key4": "LJXNUUF93xiSCHUMGC6VN5gynWfhuWHL8Ge8YitD3Rd1YqcBQLPNm64tsvLik2vUwhPvXmWmHVJX3NxbuGa1qKe",
  "key5": "ycUZ6X3XJsAfQvAyaT8cpVXrWrmn4V6TSHu8cwTnV6tzFzHm9JvDmLK3sD51TgW6SpnsYKK69ZjRC4MpANqCjHL",
  "key6": "3evVeqYyh74P7p1SWwKFMB4TdeXEsXEQDmjYEEKg6uivxyiubMkNZbw8TTMi9peRog3S4MHedeyr8XX2xV1puK4S",
  "key7": "mYhPDz3Zda9ggkzNBrnnJZSEPcLynxUU3kcvF9z2gduyoFPTMjCDKuvFp2qkcRoB5dmuYAdWJb42UhTTWoYB1xg",
  "key8": "5EGnkk1P6Kgn4XtUif38NvasC61YdZ4PDYjvjwwaJ1CwtiMQyGEpRKzYMfjaBYw9CNjx3tfnsGCWUHRTJ8A2FpWh",
  "key9": "4FY6grBZFaZQTmiikUrZESrqH7FGV3z9orcHLbYXYrbR2KgrFQxJRTDhYAnVT5PKp7Yu4eQqDmkTUaoMNJnLSskM",
  "key10": "5DhPdZT2k1Q77t28jFW1QD2DDYuzfVzdQqFfuH5p4r14ZCe8DNDdFpJWSU8ggMTAh3hVebQE6TzvBjX6TbpNf3me",
  "key11": "4DgKFbTpStN2z5Yvt8SAq9Qieh4qjyEMntrKYk5Ai7Xin5ccQxtmMSfPex4QKV3cteTswLQnybmzVJnNFjZkqhAX",
  "key12": "jKxgHJpW9EpjjqYTQq8RcdGSR3qehTxQ9QahdJQXz8gAzxvmbUmSPCwf8hVYY7ZZyq24SyaKMJjdXutdWKmDRzD",
  "key13": "268mFsS9iMFfWjYr6JsxQqvLqeP3er2JVASGVFAjcvSbjnUb3HZNdoNqnwW1y2GvAWMSdnAff5btkfcRVMsWXAY5",
  "key14": "5DAWiuWeBDuwd22Vs62UBLCkw1QwUj8F6ZRXARUAFXTRt1NGbRJgo8vq1RWDnfVfgyPCdBamnPQ3M1ubUqKVFT15",
  "key15": "49zV44mbqTxuLX4vQgMKTAeiM9pLwNmD1eeGc4tkV4xH83nA21DgoFRFkkzwozkFwi56wmyZ6Bxo2dhqzeZvgwSm",
  "key16": "5Vrkdu2gChkvHtjbnd6eEtzZfVQkGAwmqUif8ioqntLd1mKNs7An4WCh6vJ5zYoAQfF2fzzgY8AyDE5AsCmEPevo",
  "key17": "4gSKEnrTRfZ25abN8U1Nsati5PL67EDs7FWSopcHak92x7PKyrPPGvndc4mcBrbD1RjZbdwey288G47y6KFpgx2m",
  "key18": "3eazyJhDZsQVT3BwMs3MC2m3iSncaQPotq9pnBFMmXSXPcfGWV2vJeawNip8tssHLakF88w8oSurQ8CaMYoWkQa2",
  "key19": "jirvCraRZLdq919382kyNgeWPxb9SSzYQ9U6xML9f6oR5BPpcDLJAV2TCDCNQyEeRQskxPrcivtSB7WLDsLuJeq",
  "key20": "61jsWtU82xHMNrGg7kzVppDRowc9HUwwqt6mmon2CqezBBLi5JP4CLeozQZeeCjn1frjaB3a32o25d6ygwckEKp7",
  "key21": "3hg6oDDkhKBtjFKPLSwDktpREyhiJ5ewHap2GcAeaeqvgaeNPDp6yenfNEdSttt4pdccUf7kjRZWFK6VvUREyaAD",
  "key22": "2jLWLbBkMiVtfyZ4mEXZxVE46drnqN3E7QrFcBVqLACnjjJuPQw2gEPnKryfzSjkKAXjxWEwJQwTGhX6dZZBSs7t",
  "key23": "3mCA4uGU29ockC7eCcav1pti1yKpKVrKDUhLnF5z9Ls4zscsqDa4UhQC85JjySDBkzCbD215M8xFYqWMNuXcQDnB",
  "key24": "271oGxEcAmugngATaAu9z4rndpz6gXYi3ysrHoVKTbV3mvrcZ9XGgCdiQonM9egoEiC28QX1g2LsjMcnbFDqz5zQ",
  "key25": "469WPDjM5Gu7sN66bEr5TvSDqzdBvUNBiHV9Lg68rUNcwT4A9Mhxd2pgZNgQdupdzipT2NcPMYsh6f9enjwzoQhh",
  "key26": "2XQegSf2wqcjBA5FS3XHwDt29zvyfR16MB73Dr7uLcvH1jExUeSRXZ8bmssmQCpVgmTj1SFAa2fKETT6QDASewfs",
  "key27": "3q3AGAb7235WM6xuibWZCbFjadKEy7ECvusKwEgwvbxh2aQbvbz7eDZU1dk7LQkqwKoXZdFBATBsRzUsiHe9dwnk",
  "key28": "24m4qFVoP1hTQhcGCLgkF4SM6APZ8QZb4p4s9QxPNbGczrbGmbLcvYtDGi8JS97U1JBnRphPwNJPm5rtfxDjVnE8",
  "key29": "42S991rw3aFFZu1d48HeDd2zQMzti43ksLVmLDGwphWZ5uUVNYzSk1Vnd35gGVAr4mevstodK2zfiE77y1Yv1Ges",
  "key30": "4romdLb3mYyjbu1ZG9m3rtJvNzhqnXRZNx5unLrzqBkBvBfJvNtyKogPttRZNnzscKUgvEKoJ1YUc5C8kMBgFvsP",
  "key31": "2EFjNW4jdjLJUDYrUrrwdRLmqaXi6CsbntZYUzwsVDYocdhfXAhHQUujeWSHBdKbqEMFTdDHFPNvFRiSrb2sxvwP",
  "key32": "5LfQRhLzTeE5sf2sApeYH2cBkfMjbbtZ93LFMh7eyNRY5xbiqNa71jGCJnhZRS7KJx2xfDsMVHBxpoCKxwmSzCe7",
  "key33": "2oKih6WiRGtR8i9Bab64F8B1bCg9tbHryGx2oxsnpaWES2CvdS7FvJL28UVBJrBw1cmuDS2u5ieFYRaJ5mjoV8MJ",
  "key34": "5TmPbQPoeyfTxS2JB1TssatCCoqywaQmSHau37v2HSK15R94UWqYcc5y4u4FRRAWZjQrKM5uS4RGYPK7N7HCSVVk",
  "key35": "4bKpv9CwTTzpWzVefmu1YGKFap2gbb6vaeUbrwi22iUWQba7MDNaYiA4sSF5VXQyJ6GUN65JvYtjZWEQzETNpvmL",
  "key36": "3cCJSWaUGB1zZzs9tF8NJDsUeeQJbw1ccQLUyTag33zajRa7aK8txxmQgsETF3m6SUyquyTUwFa9At59eccFHhUz",
  "key37": "43snTpoacEZkuExErMM8Eq4i4CyRkkru3hbteaommMxJttkcS59xwEJqfJorxqZpx9ppTy8Qb5CaBLN9NNEmhzpb",
  "key38": "3ZQxUzpNr2XZAAPzWZBnvNegbj5EZeQjPEW95Uhbk3qfBbjjefBpwS4NzWKks9oF87r3dF8i4cpUpp7mP4ytxozE",
  "key39": "Ybt9GvxJd62mkGT29K4hT69c5h5zE2vgDKHNDTfTU1LrW5hRHzrAwkSjy5QrerAZeioVAqCFZunrf22CVKf8zcu",
  "key40": "3CtokdLUEgC7STQEjx69F8XEsFe5pR5VXqtPaZD81WD2E8zo4NUNQybCPyaz643VY4jJxk728QMK9n9G2YYMZWw5",
  "key41": "34JbjG3dtuWCxbSp6RJ6vkQSgjcAToYw7ztyEW5fmLcEVHTZ1VFQRJRcBbkWdkEueHJp8LCz1yAa8eUT5WRT115b",
  "key42": "26LCgwynAjREqN9yKyReSiy1VqQ6Jeo4PpvBVDojstf5858XPJzbaEEu79tuTuQzGjkN1FPYD4xPskG6kJr3wzJC",
  "key43": "XXXys8ge6CtCpZ94t5cq7gHvXBqqWBsaxYdQ9FFtb14DoPfjod9R81Yo5HchxyswK3KqXrYNm7N7Ssf2m3eTbmh",
  "key44": "4CWFk71bkaTuCPbjWGbQKngCghAeV62o6cVefER3LHaPGQNTzNP97w1XXfbv7WgNg2aCCcVChVHmXRXxb7vxQfJG",
  "key45": "2GttxKUMTJFbW4yV7ceDKz5P9nGsLUwzcCStzVEG4ZfaGcQ9h3CfQkLUH7x2ZQK2NySAkp1bugSYLQ7W5J8yZWFD"
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
