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
    "2pqGJPEvV6y5TgCBCtApvvauVSZR7nqyWezQbJeAo7YxHL81nEEC32DXSnm2qmrK4cgw1mYN6rG7XLGJsZDmNgKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x1wAJ1oetDyqT2saMnjoxFh6ZGMmxtPWNPtUttaKUssxUoXVNKmj53Tx8FcdXCeqS3a2sfTvC6ez2YXKfhVW6NL",
  "key1": "3dtTeKBWo1yfkoAJwHNVZ9sRxjfpWrWiWJef4LtsnRaz5JjeVFE9qk6KNS1DjyoZbUSsBe22G7nKrqqH5UxGf9W7",
  "key2": "31VJ6EXE2QcWSNMAaAi9c3d84UUFPaTmmcMz6uEWLRBm4xsDjK6bh1wzCHWyAPVVziCkHE5i5TwNcGJBvBpjjBvx",
  "key3": "vJhN4YaRUY99U51xo4fx6W4tx6iGDj7XnJojf9MuXxpovgiGJUhcnEhhPVcvRwk4GavjGqMsQa1jJByppB8Zx2K",
  "key4": "K8KeMETaZ8dhGydSFf6YpFJzFevJj3wjjyMhut9Hpnc7v9jkVeCwkPKgbLoedF6jEWNYoKUp8DwPBEvk1XTNkZk",
  "key5": "3rKTjt3vGVNv2hgep5JtA3edwff1CqbQTYrB21H8ETfBzioN5ojk3AhBWkqB5SdnwwwpdWSJ6BReTTHjz1dHXJJ5",
  "key6": "4ES3ham52aLd59HRGCJYJv9muuEsn9yd9Fk6J8NE2VHVymVUckdoxAntWJijwkxsZNFSiMwTtovTpau2go6U81pY",
  "key7": "2pEQfTfNfFz4ATZsqeCKRYMnEtqEkvFUhtuPAZUvjEi3fGskE4aFEcRZ7qrE1o1x61jFSZcJhAKUT13UNdy9b35D",
  "key8": "2n7C5Dy4gj1y6xdoDPh6LFAPJxJPFLhvJ8icqBaBs2gkY253jkzAcCKgjMYUYSAGkR3vL4VXdMWP9kN6WjqxCxPc",
  "key9": "42zEHJmuH9aDrKphK2TbBUkAb7G2QN36vPHCqLaAB57FN8XBMTRnFmhvJadfYyNxgxXpLnkV1dXNhb6WPSL62aGw",
  "key10": "5aQ1mafj7zP4EyYE2g94Mz7A9N7UxZyUJGBvF5vUctFrhQsFRa8ceZATBcxrMaZawNKceJaR9LqRUrsPGemEF4jo",
  "key11": "5wztYUzTpaksmS7VzC39Y4rDNtYLbmgJGfhRzsC3YyWVZLx6MKKEAe8XaTeYSCpWoUtfsvM3E5mtkzqzxJYdyCgR",
  "key12": "4eZvjNcnpfSuBbAh3BgSaNoqKuZ3MB3zBbhrFNjdZhF6nj9N4JTgzoastNGUKpb4Ta8pzoR6GLEAJXYd6GVRvqMZ",
  "key13": "4QRiGsyBSq2HVbLsGo2EwwCwgD8F9DR38wjjfVi4uBjAR3SxwyoyFfCKi7abvRy8VBFAhVQ2BHfjL4sMMatFGPV6",
  "key14": "4NBRghKxMLhzmvbzxkGfCmPrpJLvgo9WF4BNYM69MPFFoD4qFYzZL7S6Y5Zvv7pEX26aWHCmTmKh7WEy137DzB1f",
  "key15": "3Cb88bpL57FissK5QoRBEdHsmX3wrLDPKDJgu2muPu5FBP7dWbBeX3hcdG3HDQCDbxZ7oTAQbaPwz9S2fvi5YF6u",
  "key16": "H7MriN8sBhAre3jRgqoriDHCf7zE6YtngX8jHq3bo7oatPXeUfbxMubcWbLvb9PHRzkLXEZweGnAfSkZPj32EbD",
  "key17": "42gVUUFvqTYF8yiENkV6VQxekC3TDriNPMebeW17kFsqaGUmhiBWNYNchPHFShSmBDjBB6nd9HUjapZPHzJib5bR",
  "key18": "2o1YRnedcesGWGCZ6oRJV6ZWR4u6UeWp4vefe9NdwyppPAJN93NXLBm2FGuThNukvSzd824fHvjCekfMxsZ4DZ5J",
  "key19": "XBYbhvWdrooWfqQ1hwGJe1s2o18yKff32w76NKYNoEUP9o8AjDgGSrArU28ZK2Sqy7pNnas3nj28KF7fBN1ioCK",
  "key20": "5bEtynW2TKx67ErZPN31YSZHiidxe8vkB5cmLcTEf58icBKJ5WYAu6acX5D6A9Ugs3jLZ2KyWp74V6xg8agKtvy2",
  "key21": "3cCo14gyf4PWCGCmmBfsWFiBd1TfofEQhreJCpZPdqwd8qhG9h3tmWrAWuJb9kFSpUVBNW3XbxrWfUwokhduavd2",
  "key22": "3DVmR64xmoYrGddeHA6f6qfaKa8LVYUTfXChqZxtJ9gTzifhNMck3CyXCsuAebYLXhjNHCAZqzCJBtwC84H7feeL",
  "key23": "2pQ7wN2JsccfjFKpM3YXS7r5TxoUzqRQzwL5ZMVK3sgo82JLmYKRC9JsWu1MvvXEkfJtTu5pX6DjPbtJs5sppMXH",
  "key24": "21wMuzA5Hj2ZV7Gzfc645WjEQJWhnuJQHc4FNzTWhG1bhb8SgiXcJjA1GCnqxYFJkkgmY3665Yy43SPQxwKJTaJM",
  "key25": "29aKBVMmrf7kFb17SQNnoDVdZD8Pe3p3c4C39xo5NoZ6p7bkDXHmhwjKDkJeTFry8J6BXk2iMirQ6tMhaSVYSdYA",
  "key26": "EBeuevdtDrx4JKdyushMqVnQLHf5nibPPQXrCWuxYUFggx1ZrnhXzw8ydEsuNdruTARcUY5WUXaQRLjkUir9Loa",
  "key27": "3uGRYpNxsQxHCiz55Bkv2JWknYAuH3woE1JJGr3mzpSbQkHT8bQSHQMRSVnL34Dyi1FRgbLn36SRvEsNv5TZFGJq",
  "key28": "fWn7q45WAbCJcaXJNWisuamM1oc3wPumcjrcWKpDPjYaHBfexHodR2WdsAxg51eKS4VY9kPo1RJCgXz4EdzeeQp",
  "key29": "EBRhZ6bhhiSM1EpgmevFeQiWFRArguheZRyf81XBRVgJR4dFJxGzmRLCEZSENZyDhrBEUz2c9pgkes7i5SGTjPA",
  "key30": "uQzWfTr7PDQhmuEmhNduhj411DCSTmDZJ6qpvmvCMvoLSVZkfCvSYRdZRGau2XxZTRioaiHpQ57zeEdqUkWW3uZ",
  "key31": "3GTR1zEecsxxo9A69nyhpek2BJiLWQvYnnuzqCbhNvLSGWpAjaciDLCysoCgqEf1AR1dPPsE3Rq6NcdwY27DHNmN",
  "key32": "38pSnMxUpAbsFyQYPS4iUXGy7jrt1MFomGCrA7ZgRbijVWExxESWpBCoMaaJ49xY9acT75LAjE9vi7GESqKxW3U6",
  "key33": "5XLhF3NUBvd99dQTmcjT11DifakpQTmQASYhiQMTXKJ78FvrLu3xGoEVMMzzds6rgE8z5KTvhqmk7ywAsqwcdhDk",
  "key34": "Mki7YqGpHguwQXremthY59iVs9NWFkg98q885CT6QKiE6C8UcC6TWixAtB8GJ5Gm2CAxeS7zMqq5AXughoJ4S2h",
  "key35": "46wmhm38S6dLSbbBueziyQTfxbqZ6iPfWgybZXF82eg8M9oekVacDTNTnUzZxWaEnAdgsJkzwaVUitCcwCm7r8nv",
  "key36": "5p8qFV2VCWESiBzRcYfNTk6FDJEkEMGkckKhfsbm6ZoVSKCb3FdgGqj9BCEuF3CQoeEM4YZ6BjS5mjnabhM3jKu",
  "key37": "5J9PoKqrtW5DyCp9pgErebSkokBtKcuWbf1TbApKkZgiTZJWoNsKuWt5usVgUeJKe6jD7SXuw8r2wnVtLaHHT37c",
  "key38": "2eYK24FqXM9yYdS6YbMfYvmRsAzUTocw1HPwoYTpSoNZKFBJEC1cETyKPH4SnV84ndto8ppVkiBNmz6Xy8VGmQw7",
  "key39": "5GZAUU7Vc1RotG8S6fvvbb3dghSivecqhXxJaSsvEgx6ozPQfbbuRUYjuBQwbiZCpC2G4YZuxJTGwXBYYwUsynfi",
  "key40": "28nSBqUjgfcoayfvyEy1jGXWgS4NDPV3rqgTJDgujq23wKkaTQUWvCVm41ht7P5BWKZCvfWMb6mfFVzC1o4tpvYT",
  "key41": "5LCkNCgt6niCbnNbkNSiSn7rx3nue81gpGPuabEQTTUPY21xvA5Uk1Q7MoXWkDoReJYeq8dP4ezbpe9xa4RXa6Hr",
  "key42": "GaghGD2W8b5f953SDoiUJubobPvd5APFp1gKLvhowjJJSQjPxzR6q6jSKsx6JpzM5fdjXBZ4pA8yWft4UFZF1Mz",
  "key43": "5ef5wJYYHfbotaitm4Tp91Lfjnj6SV819h8vt1pJNgadPGgSXiXNyjTCpUYLjf4QBqJbMTNgy7x1gvyyGsFsCWsC",
  "key44": "5DqdYWAaMBkft7Fj9h7kg7CZDqaNzmL24csS4uDwTCZpaHDbnvLi3RkJRBsqYaSwUacUCASGAGFF1PEoBZzYZ67e",
  "key45": "5auuA812Q5XeLgqFercd3LBpXZPMzXvCFzipMv1bqwWLGkfboNK7jJxowgWSipcutc1zKMNYEbBTz59Ve5QtQgsS",
  "key46": "2R7ikZb61EjCiq8m2RNyELUGryxcjRhN4d77Qh1k4mPArpjnJQzov4upr3UVfimo8JdwJHtCn1DU4CtcTQ3Cz9ew",
  "key47": "jgdWmjSGNHegACU2MGoCgXCxtyCfSwTLUB67ZWtsytBnqCM9PB9zo1n61ELVqaKYZTGcn69fM6zAgfjmTgy4oBH",
  "key48": "5EoHrQcNTPLC78knAmC1YPUBDfjwMXKyeF36cY8xnX3FRQL9owvMdUH6XtiYZwEk3Vnis7ScpwjDsDZqGkPM8pky"
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
