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
    "4BmfCpWHG7X4NkjcBhcr2pN96dymnaMG9VLXA6P8WzJM7eLe4t3okR7rcCpsAKkYhWMgkvyr7SRS3rH2xW7YZuPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q2qKqhPDMg2reSjHc9cZWMjz6ijbnkHY4aETC7q36bTmXXzyPSePe8dYBDxH6t3nQLHKuBXoqQ68UNkPJLFGsne",
  "key1": "M2ZeNv5k1Ge2AznAUuPXvWktn4a3o5ygZ5hNcn8oaVPgyFESPGe5v4txToGcwNGpH6r7oGdnmRxCJLCJDudoZ72",
  "key2": "4pi7P9AfHr6oz62dzXACXaSiJyG1SQBE7uDvtJsJe87ckJLzzcetk8ecT7wCvMjnmA4MBztcVUvCsveaGgnznLXD",
  "key3": "uVoVZoJubAknwvNF2TDg2o5M5mWp8iPWe7A9d38Py2JjFC8U9e639cuHaM8BfiuCfR54APVLBpiX2f47qK6SKPb",
  "key4": "o3HR3PBeW2qbb8UfbZtxCo4FKEgtRiBKgcQACKooEDpGEQs7kXBoPbpdNVKgcQfbxdasaEXinBTeydCgL4HPgB1",
  "key5": "26kzDFbxXTCoWjvHqbkaNGwq5hN8QnHnyA46sp47ogQfP6dq3Aa1A1xcF5qtRbvkPkWnFGj6FprdwjKixs2dQEjn",
  "key6": "3cpzifkgFSdwmb66pKwwpEsyU5ojUxKgu6HzgBFcWbcWjEhvfFhoM6XBFnkDeAj2Fnf8oApZPbL94xtvPTSR2cag",
  "key7": "3GHfgHfvmHQVMzkSRve6unTpQfykconWuJTFMJEYiZy71BPq8JHWNAksnrue3xmnrSDj9RHrgE8SmaHPJmTjcrBk",
  "key8": "5trsjWhkvZCfrtNQKBTHKeFo9P85HVqg9ipAfYaTwpSFMn7Qn4XQMMCYWKbRriVVdTq22jq7a72TVQqjLfwCWa3",
  "key9": "35n2REWXzwZM1aetrDdyzSzMTMMYFCEKH5tQm5sLDEBVqPNY76M7my7h35Pt9cttQojLc3GRksoFf6WWfWLBAhN6",
  "key10": "QFTFs9YJPv3g8oht2kPUM6HgNENN3JEHszopkFQQipFjTJTRYSHHX6tRWNJ3kACZbVzMH2hRuksGxMcoYQ67HZQ",
  "key11": "2Ah5GP4zCfG44oeEcg7zG8Mj3gyp94uxzpV7tB2jfbgDXPmPwPKjpobTsGVqe1NoUXGPyXd4j3XoUQ9U7yAYL15H",
  "key12": "5ndAg5ivFNAw9pi9ZXNJmtX58LWZH5Teh8uctYHS1ZXCrcmyTiSZzPYksxq6BgCcPG1jhhsvQf6qac2e3Vob6CoK",
  "key13": "2qk1rXxfBGiiU3cUAvLquHWooQm6yruHoim5qvqiU2XD6ddCMBL5DDM9pQcb4Wvv5JAiMrbv4PeRUVw93erwrmMy",
  "key14": "3zYKsrR1mkKYQaaYz9WeTa5Q3BhfgELXuRFhXUb8HfGauHKQtWrj1aFooFWBu7HZhfqRHLURhRg8kjmULwsYkgaU",
  "key15": "2y92s5bWa6sbNtFCB9j4aeh3iUXVU6GfhphN6dEGCN1UN9JGv7by1cnSG6iqVJZNSzrCEoYtKgXpA68aTnrANWoJ",
  "key16": "3ekHUXmcdCfaezE2aSUKgrQFe1uUm9bpW9eo4NuUJ2jkPe58GCAsGUT433adLzXwhvDjfXKcAW5smbZwAgDogKXb",
  "key17": "3YytRgpinkp8bxFtXBnBUzYXCQs2kDg5ZaFynyHJEy8KFMfZ3nKcgGCgdjb5kK6SoZjotw2HPiFt4rMzAtVipp8x",
  "key18": "4wimAfCfqkMH8ZLHQf6of2QQF1wprzZEewNmuuLEbhrNAc3eFg7ob9HJCD9RvhXAPYMDk8UkHqt4afNjS5MzE3JR",
  "key19": "5YLCnGfYuiX7QHvQQhrWcWbvWfQqm6eLzwyvrdzvYzpT2uAQvTjbfzaQegKPDCBj37NUznBSN8CsaAkc2Gc9RZg5",
  "key20": "jDHrMr8oUWAwfMDd96TVDezT9EfmzW7FoxyCf7m6KAxAqqQx1aWdocEW89Z6sZRq6KP81WHa3YNQhLicHoCgZFq",
  "key21": "4ixUe1FMctyuPHYSXdtCCAZg8hT5MyPVcv4vxuTy8M2SGT3QxEbiRbcFCnB4VkFv1o3gNRVU4ug5jUmvLJQnuEAZ",
  "key22": "sw9jGNDUFpofiAdRUBW6jMS9ootbEq4gfAuvfyB5YXoS5WQqgvFSXswumSVJwMoWWhQRneAmzAZ5kAWXSJ9Fons",
  "key23": "SmeMtDZsWbtagm9xkrmNAorjQXu4BY65oFred3cj5kG2ebs8hkYSWiGh9szo3RNMd4KExGGF9TYCmi11tCaz5n1",
  "key24": "6r2HVX1Uxsb231kdf5uwf2LcVqQjQTEVWJsKNym9zeYhMdVVsmpoUYJcW3AbMyoqhPFxgig17xvDkp3cZgGrDrY",
  "key25": "2wGzxNaQw6CSdZf8j91vj8tDuJBmo3pdYQeAk8nhJMU7owB3NVd5pKviHhC67CE25V27YvRp2TehZuPRBrs1vyVo",
  "key26": "4348E6dGbcwfFJu3VgSeuFmxtAqZsHh3bojTkGS3c66CZeqT4vQGoszBRNoBjekDeToWbqNZy26o8TRTgdaRnQqR",
  "key27": "4F1aTAmdw2VoeobNjjWcDfevRMvE4ewMfEnGAfct4jx6eQddkkRisBaXy38481JvrsXmde9AU9Mg95gFBNcPqHnH",
  "key28": "4TMuZJKP5S71Udd8WXsmQum9w1PQq6yVLhLfdfuNpBByzYiM9A7tcMBAvBTBp2mE8yNQxrCYXKZGuWRySUMqkFGt",
  "key29": "4W2YN1edyE7b2XeuhbA9Tot2GRQvEY2XCZZLzyEj3bDEuQPKNpGHWgzMiVF1Y7ivQrAfcpLtBLsU963GjZDJzqqB",
  "key30": "3yAs5J8ftmPF9tzbVGXCAEa6i5koLoHejd6DfnMS9jWsSSf6Q3bfzfna3F55BS7VKjKvrGPMvKfJCFaCRWcE1yxV",
  "key31": "4C7YfkyUTt4Xj86nRMmRaNRpgM8PTdwdNrcTCcNkdfNmsNenBmsXUfonqcgciu7TdY3HBQV1Ywr4GBah4wyk722a",
  "key32": "5WCsr4AFygVonp2VqCSUPQY2FKLJ11WYd1rfAoFMAgEyAH38Jr2CtohuzUfNQ4Bx47oGnkcQs5W1BZHu9xoe4E1R",
  "key33": "53euu12aNNYVvv23aohCumNVbTAujLo83yB3YkJGhQSk4KDWEapDxTM2GcQbe2vpVYEh2m9xJTcx6jYYQwomGCzJ",
  "key34": "3fB7sCcSoNdBCgJp8dAKKLeBo1HanX9DqxEkCK2gATLkxbF3jPCGqVKRYcLzeWdtb27yKMjgpXbNAobDfVymxHUu",
  "key35": "2obWJWvSf4rp4frz3X6vRgovTaKJSWj3NTBV8NPcdVbu3UWTVRsNjTwswFVy8wqZrus1Q5ZuCjrkeKqwmLVXjgA3",
  "key36": "2keMeR7GhDs9DBJRXm7uTZJ3YNN2fr83st23QCy8UxMHotATpt333UfeViVstedmnvy5KQL9A4f8JXSZkcQw6D2t",
  "key37": "4U7iFthFuZnikPPRz5f9dd8qP4YEW2vfsNxfyyMfp6BWBTsVPyGdFiZ1bfPFcEpzbHMNzMUKN6CM1y4fvJ22Mkpw",
  "key38": "2ncpznRsrVjcWuvH5g73mjrQ1YaqnRiFEGDUk7NWRpjfChvyWyr6dUsG3sUKjEWUp4RtgYbw19VZffyTUSPNiaSZ",
  "key39": "4fApjt6RRrEmskdmRtTNgG9eStzFpHgWo5eV9UJnCStRXaaUrxqAbs2nkKCWgMFedY89L4CPTdaUBuz7TPhak1Sq",
  "key40": "c1uPyfStt5dHafnLiqGbkqHkJS6b3dRGK9E85sZPJzsRPHrietHUMiPnjKswM23B2NuQavGcwPCAbEfZrZXjk1f",
  "key41": "5dPGD1DjSkTk9ePMq9vTuRVpyLP41Xi9k8sPia6N6tq9bb8fxdhYdu3jm9rvkF9QLhKPGzbyAHuUpz2aP4t945Wz",
  "key42": "35KY3mFQ3PoR6bFKiPnxnQwZKEN5ihwWCzmmDQd5B4F9q97UYKWxcKuCo4GyH29GA4ff3vrgcoLNQ38qEwRkCSWS",
  "key43": "p3xEdnFAx22BNkkk3zYPERG8hzK4suTwjHUN13GQPowK2R3JSoA9XeLeoBbBxbFJQJrY5fUrbBdAdh2H8VpqYmF",
  "key44": "4ZkgMzoY5pEVFgy1gkzjnEDMCUDYHDyS96BfLUjXEMzw5VwQszhqBFwMY62pKf17T65JUmYbRVqtEwYhhucQ95sQ",
  "key45": "3NBgyUhXgEBoHAHv114sidAAPC3nyavu8muqwUZ4VFo2SspQt2ShDtuTk8n2hdXaFfd2CbkxePtsk85wnFQh4onh",
  "key46": "Vcb2zB5q13qv6tXak3913iAwbn5o9EWi2JJJFwuXG3xxXcsSSoGYUTmvQceYeRPveNnwMe3kzowvuRjFiPs8WdH"
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
