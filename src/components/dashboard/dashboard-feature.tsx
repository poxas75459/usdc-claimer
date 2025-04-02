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
    "PEzFyJoB5kHBLwiy1DTKqSJe5o1YoQVhpsfFDSw4S8HyShPbK2eaV1r66esy2uQmTAAdM74ecxHZ8398NG5FE2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LWN4fgDtjenyayWk6cBxdxfDaNnJokwpWS81s1tnmgTu2GUq7VbWBA2iXC7Vb8woPrvYbj6L53ZdNHRodR2J32i",
  "key1": "59XHPrm1SY9LvsMPpvkU5CwheASRSbbC2yMEuxJmZoaV4ejgpbStH6NBMFPW4bSc5LrRt2ASAQfg1XM5s9CzMnXh",
  "key2": "3xXYqRaCJbPnKuNgNtkaxEniEWREZNHPeyFqmcA37DdTn2gUz2nbgNU1odQp2WdgTkEeE6456NM6AxAwSD74iUsh",
  "key3": "jQTRzTLChHBzSTxkkKWMitRtyA8xfjWeuoXQzzRfcCHNH7bdDVDciPmYuBZqmQToMaoDmgW349zVQi7g7pZDsWX",
  "key4": "4he7pLZjXbxEBwGJFSxvJQAGnCEWzuUShzPLJ3URN4qndGGyKST1ASyxsaBFEefGAAJXNQS51NJaFX3yjq2t65nX",
  "key5": "5cMCZHakiY4p8sVoz8yHaFNyMKBpTKVYUwXRwbNNdcqaoDemrwoVi1RM4icHn8h9LSDSafhuJZr71JvfyD6BCG3Z",
  "key6": "4Zu8JwdPFpAaYpiKkihwnvf9JRZDCL7DcKPb9FHCo914AaHVx6iAqoe61gDh7YFgmkRP9i11uGKKd6jSdD8LFGFh",
  "key7": "3oGkZBZg2BprkdPYeZBEwTW4eYzyT21uAyVmJtKYjDn6rgjhegWVghqphQxzdV3yscgJhNzGqgkzv9k6a6PyPoQM",
  "key8": "4SrgccDrzuaARxPkg3x7eB7x7kERrkQy4f6YonJdAwo4u7ZY6HHRo4icnBXAngLDWPd6PmZe9J4Jq7fZWfjoXbaH",
  "key9": "4GtxpKQgzqBku8nzMfbyRnqqyNMDgyqRm9vGbQLAEBxxFEbBjNRVrHvbzNTXkAU72V769bModn4gnan59eE5NfZ3",
  "key10": "5hEM2japJYBQSsLkNEu8LRyUjGGvuCWjyL8BmFC12fEG3zjQfqJTfxnxTUPraGCdDQ16TBy9reUE1nuvgY5kpGLk",
  "key11": "4gkDa2ngf5yweycjKVqCztJ6YR39xrp5MyVqnQtoPU3TbowDfBUw9PDSXeBimSJpfgbC2fxxLzjeCw2myPeY19BJ",
  "key12": "5qG7F51AmFRAeT4YRNzrUHci2N65QBSvQLR4TnxVfbgPzX9WTgA9CSD6j8d4FJEbDk2cqVmMrf4NkJ23QY4gHW9P",
  "key13": "4GRUFjQFcCThn8J3Wih5WUCQ28nE6TVS1j23152PANwegsmpCmHpcFrS8bbjbnZkrk21E4koAqz1cem5zwwdeNrZ",
  "key14": "HWiKmQehjCWZbkU7kDjSLSsqdrwRWVeKXgy9ZdczzosTkgMvHEWC7JsosnBPdKcsnYUL8MbY1bjDyN9bgUjUeme",
  "key15": "4VPKjLBvu88FAq5hezAqLKXE8nXghMmaR549LXUFgDfxchjVcHLFXQGijzxyhhFPgLn8uB31BvQfUJzjRPq9VfSL",
  "key16": "29iDgo2uPPi7gmKCZKWYqseXFaofLN6vkodZiBQuPt9GxhLF9wTobNp7tADUqkCJVZ7JbaYacXCbURk8bxWsLCEd",
  "key17": "2KRc77r5jYyiv455nMTPGLSRmcYwWxZjRHMgtcEquuqsq8ZZUUD7wTD4Np2q1UF8kCCKuv3tQXXauFtSepbBZK4J",
  "key18": "SmPcPkZBZadtjXkdt9g3KvK29yLRTw1sfRNA8ZbAJRvvQpj8XDQMctxm1nZ5amVupYPjXquSQaU1a8vPRErt6jH",
  "key19": "2Tuk7WqMkf5DhuFKaE1GjKaryX5KhcdyMSttPNhoNox552gUwfZLqb9miGkKVtoTe8WwRGSj7EuGgPnR4byFi2Dk",
  "key20": "5FEJA2gijyt3aVnRBzodim3vGvgNjS7UhUgrr6FE7UBFGf6VdD7PH66TRW74kAUjG5r6tS9VU6jw9NQWa5n2FSVJ",
  "key21": "4bZzoKs6oc3iG5EvmLEs3SHQvjhw7CAe8yctoFHpaqSJSe69RwkqEtujYobY1vvjqK95ByqmQiVk2VCMZxn4qr45",
  "key22": "W5MYS6kAffmPUK9xhNTef8xSFq3Qmat1umSuJFmXWtMaGGc31pegLuu4gsV2CB6s49WmN9JTJ7F31hkAUFikwEn",
  "key23": "8taBAqWx3sJXdp2kMLdHqWKQWYVsoFxBpnNvChDrTbieAqBY5ue1AMQEjMytcZohwi5YdVHaBgfpiscAcXhkK4y",
  "key24": "mzk3Rm2CoRu5vuu7MiM9GyiGt1QU4PMLGp5B5K7arHZqvR8VkHRcQkK52tiMBCvfDypih9bRrCKnhcnvgMDL329",
  "key25": "2vkbkgaFeep37LkyNAeqsPu8ukxQLjr2MVufHTWWZr59zHsb2sVyucza2nucxz3MXCVmHM2NqKG3ena4Qg6PhU2u",
  "key26": "33FPn6hQsXkaKW34dQmMonJNVQQieA4YXoBf7wTbwVGa98m15wKCBaVgE8aLMLonfmPW3jWY9JyyS8xWykoHwdVM",
  "key27": "27zZrZaE3Wu6rt3CCnSrHiTuQiE9VGsgrSwkk9UTuAzFfBQhkg7FmftkArG9AJHLKA2s5zPj2Z9W4Q9izqXcrAEh",
  "key28": "2NtYP5R6Lp8SL6GWcFX1Af9HqEqg6D3kMRNAWkCzXSjLjAhfJn6ErKq3GDgrtGXzaRkk88X6EArNZvZZMvUCEjDR",
  "key29": "3eFsbPLXEsMY68LWUbhNbz8ySinCiRu4c1APZkryTab9gMpHmwXkZKmCZJmMDfqXNczEdsyUJ5dfpenmgLbhj9zp",
  "key30": "ppjeuG4DLHbNQCPd7Pws3sudPzSR8bfVArjuQYamvFv1QqkS3bnmEqPNkr9FZq4B32wbFjtEgmkq3q8eJMEq1WA",
  "key31": "2v6uJLeYcnj2tHLM41y9eUBJ2fP76kWUZ392pPsvd1t7j4kshYpSwbKuqszxFjrnTGaBda71FjmxnMn5d9UZ8zum",
  "key32": "2o4rbBQEGGNnCSJwHCpbEdeotDMphsoQ1LkNP9mCBKmVRgEYunkLv6iDaLTmNTfE4dso8Exz7JWidiFmfjEWHR1p",
  "key33": "2T8Z4bLDbfBcceeRkZahTRdiKMx69L8AK87hyaD9HF3cHZy8QsnKbmXTpcFMnm2WuxXA1XjpHHy3L7AJ2GEDT64F",
  "key34": "3ActposoAnofPp1wcwjMtRVnpzQ16cPzCPHTVjhJpzozBPvuAW6aTHnZaQvnX4sEYjFBFHkb4dMLVLaWHBBTNW1E",
  "key35": "3C9sEvEnZroF3UMgGxCcWqVjopia2csZp3iY6Zja8QxJzQmzGQh3g2rmUoJByo7LsQarF5gcY14NQkqDDDCuQxRu",
  "key36": "3PLpfjMzrqBNH2VvrL6WgzmmdZi27apJ5QEvJrhWsLk5anLdo8TaJWCDQXpzHyeaRJhHdBXQ65Qxy1TE84aehhR4",
  "key37": "3RdJ2SdrMwiAnDtsLZSJXchoysT7p8MR4EVbup3yqRvhmGGKMtmjYA9TfjCzhQAGEjgLtMbGNnKfurEy1xXHy9HV",
  "key38": "56pG4xpNQaVBbkdCJvCv7m6kCM59c1iwWZQNLNR6pUMupFmG8yWeYpeTLyhPzfS6yjqvLLbw4pvbS4SW3JK85Wyt",
  "key39": "2mSYNGbyPXjUN6vgtbEhDE17ZW9qzoHLxBZGTSY9FDLJWRLNMonJ1r99BmjbaxRnEo85kZXQpev9nh1EsmwDJDsk"
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
