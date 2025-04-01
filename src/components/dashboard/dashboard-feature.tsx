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
    "5f8aRtkd8PUYve2fEQ54fshHdY4TfHf3tTdrYSoTjsk1LpPtHUrPRxYgHxGeZr1Wi2Ux295d8KrmZnwm3GWZMmAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4juZeojdjvHx599wTGeBRTt76BYERwjKUQjCTrfHBsAD1QR8A8S4CeKWGnznc2xZGpqANgfgiG7SHVqAu5uqPWvs",
  "key1": "2mf26Ep2JdRFupv1kMug1etLpSxPJ7iQ2vSHjdRojMbqq1ZFMxQsYD7FqUuTiJuNapEVBoLMZTQ23dZfoRMxyg3p",
  "key2": "427ogTZCkD8Merpk4sB9sipPPCqEbtSpYe6FoApapjiQMMx9h5NoeL26k4TvUNoJq3pxZ2cALjeKKQe6RiFFfwTu",
  "key3": "2ArheRKoXnJpFdTc5Jnb31FDqecvocmn8dPjJE4f2QyF359LDnAXuUpQr3VNwQSubxPfV8pLM3fMYv18H9BVsyiE",
  "key4": "4vsC7N1o1kx1ZHPCMJ1ucJuNn9CakvfkwXLgJaxQDqL4M8VqGLqNt4pCDH7j2gL2tWsUKjCvqgcn76ZD6VUtBvtq",
  "key5": "3gjLtzLSgDh4HMPQR9oMebENVhWmF9xcPdmouCCMGZ1uCF5Sktkthscdm1TtFeyhoTAtCfuM5me5ug43pjgG3QZW",
  "key6": "2BiQVYAc879H1oAjoPK241YYTkrB36681aJZBT6hLbdU8T8uygENCFTSZ26XReJALdMvzB5VoBvv3aJ753d9xHj7",
  "key7": "37Mw9Lf1rLrxbBG7CNUZy7jFfA54Wvsv21hWddXJbEx8GUbERBJGZfqncsCHHCfv8s7QEY9yhQNDwRsew3ADZyQk",
  "key8": "PZiUGGzVMrtiCqh7XGFLuXAY2457bhBek9bzS1YdeBHf5veMMb68Uc7rdNSsQw5hcsbUhcR7bPVPY9paVCzNFJT",
  "key9": "5gz6hVEggQ95n1PjBZPsZQ5yE3LzcSyEZ1tm8kZcHdCGfYpmfCJE9hnbUfBVod2AMoicra9grGpMJAag3b9sWXer",
  "key10": "MXwqMV788KU531udGTv2sRH9G3DNvL77hYKz9sfpi2QbzeHnx8ztZyiVk9Suy8CcZkmhif24MqYYJB6pBg9MCjf",
  "key11": "45Ft69hHNWwGZzQUrRNokuQT6Pre3pXwUy3xCkZqJKUqsAmFGC6HaPJWBjQnirgoTMRxScMT6VVLSgYg2LmfMWpy",
  "key12": "5LAd5LtqQvGsEZtD4csrmYNTLkUKYoLn4T5dT8T8Az4ykwAkgU4Hxp4Z39AbhnA17RGtGsCAwX72SHDvhBoXwthU",
  "key13": "5Qx9DLdxMpZsfXNXuZMsa1k7sPAS2Lg52RStwg28CpEYGZsMSdHEma1mr5rfv1nfqoGqCPfJB96w47KzVguQDfMq",
  "key14": "4BVYFEcR3WfCj6HF2A6pC9eggSq7n5dyiNDtg37D6fKwXyPWNeTCK5AK4pdBegS7TYpYtRvfzzf9WW29niq7KLHV",
  "key15": "51gWJGtis7R4REEW2HtGCj1zV36zir32H7EKjjSRHY5xNyEARoVAkPhw7DpupP4NvHD9j67XpDJpWdbjXteLYQwh",
  "key16": "2vgbkuqYDkwDtVKs1gwg7YGp8fehhtfQVY1c8AFTQFJa7uyst8Tu9xD2VY8g2ewRfPBjuTQTU5uUMfGdCEHq2o5g",
  "key17": "2x32Xf4HvRYWAYcNUapohdTa4tKckuBQGMQdEUHr4RkeEA3VS67UNg3a9GEQWxnkjnxJuHrU8ChYkYWJvgKb66DH",
  "key18": "54ss373sLm1hrmbDk2nhppepcG9QANTk88F8kfxTYD44ArEg8VYcQmph4DyXxEa2QUgKtfS9QkGxauWaLUnmWEVL",
  "key19": "dxsQVsaRVbny5vrYT7E9NzyUoDDJwajZoskpr7MfsaAVeVsNHaWkXQkDYRa3rTd4D973FDbxddNKo8CBiwEtkoH",
  "key20": "2stQMHerZxqqQCrKVqrd1ebzraXaUYh39Kbgfy1e9ofGsQSBs4k6apkA4ud3HeymVqMK94EPnerPmmnVdLsPXw3Z",
  "key21": "4oK84uHzxzHChcLtuSwTYKKM2aaThZWUm8CdK5UAV5hg84wPjS9h567Ub6BSh1eXMDTQ456bqmtgws3jH93QNrZ9",
  "key22": "5NdnhfAKVKC5cZqcJM781G3JeuPnBUNebCvvsey8YgXpwq5cxTNC3ZzfdSNgKZ8htjrheKcAda4aJCqnfxq2BvgL",
  "key23": "Xs9jGjUzw3de1zE2iU4joozDUijbmveRLgSEJ9pSDhs7cVpY4ywv8epfAZv4X3PFjGcaFZSmZTc5kaPpjqna3Q5",
  "key24": "5jgsVCVzRKBfrkntkeULAZTcrzp9aXL9sHVdkKDR53nuYggzR3ZjqpPgARgccdyZQAyqbFexRUeJiHU7NJCmztQK",
  "key25": "4VGiLziCRbB4nHtQe3JggrrhDv11RgVWeNkpbfEDcZ4UB7hrCPxxZA1qyd2VirKPRY6aPVWRexvzBsmyGqFDLKvY",
  "key26": "4qh3zWvnKMydyK7TjRE4QGoMLssvHYkZVS6gHhi4vZycxrbQcEWPf3NfTqvZ53hynXvt7eWV1Jnv2GkygFjXhkQE",
  "key27": "5UPwWBHoHDKZmforw9yazmSy4VzGwBBH2GUWSRQ8FRVqfV2MbN5rTCTEnEXk8k6fRQk8J8vbPzahDNdZPKg8wZFw",
  "key28": "yXhSCwDJ1dKbB1VGTXjKEZZLafuz5emz9CUzkCMpKpAwWuy8mw6H37BKoR2fCd9QBZLAPhfktB7LshuB5tsgbH5",
  "key29": "2CAEt5fqWj3mSUpBJUSgqYRMKqYgdjcsnXWXEW8pqz9m4gqb4GpKJAZBZ7gcudjG3PPNi1jYxmAe2BYZCuRqWeYj",
  "key30": "tKrtWjdmnVUSmhRQYtSFrXYfxqydCEioFSfER5zmoSnNAoXWqt4FM3cXbMjQjtTcsVQryrrUL1HqyrL698keM2W",
  "key31": "47g2fHRDKRSFCrLwb4tfmbqFQbUU4bf5QBRgps7gSsKuBQWUZmrUR5vQqHwgRRLJjUktAyB6WRyDhvjcAFq6pGoS",
  "key32": "3rfCFyZWxQnVEaEcYLTpQCnRA94n6a94HhL3C9ZfRx8iwXvwm2pYW4e4g5AxUSo1DwrpcN5LMj1vBMgKGezTJWSV",
  "key33": "2z61VuVHkusjvGyF5MVVdmavPu5YHALeWpWS77DUiXaLdgYkyg7ER6Xy97YsdYVKUbqdbgoG8SKr27e6xnMFvH5f",
  "key34": "2KLoXp1LnsK3FKA4r5mWM9LtDQNJ7BiVpYZfsskVXrpC9rnyvsx4SdDRrWwc38i6975hovGFjDjHtvTMVv2fEpDp",
  "key35": "NEAB42KuzozQ7863qjmuaDkk9ZTUGnDs7MJ5AqgdmG3Q4dCkgqBfMECjTaycSzvKHX2WSLo2x8V3kMA69qUpFfi",
  "key36": "2Zr5SVd1B8Mj1EdNra2W6suYeZbZmXDJrU8HgLUmVdnxxYXYqPifrwrbq6BVx8N6fRsWjGDqKqUnbWBg6AUZpEcg",
  "key37": "4xHngLteD4DfnEfx9DNBWcb6SWLzr3ACTHETdJaPjwRhM8SFNts4dYswgRDnDgMWZmaT1YrtrusfajrvPt76nm2u",
  "key38": "2EW4QHFLdRZ8BLG59P8Gt5WFvdaYbEAFBfm8uNXrj3mNGMFUkRZtThLHabw5iZFehYt7g5w68Rp4YkYtVBMMuhUc",
  "key39": "2Y4hfc9ioswzeVMikcguLDtihFr9gypTPz18xCnm4uahpDnykyh5zpyrrKqRHpXgma3C2bBmLZDc9at9K4X2yRtA",
  "key40": "4E9ndmYbQhRQiA2BFHNKHQK9h4yycGjnBKcAmpx4nofx5zbbxgcwvdHxPrV1Ud5mBuHV3WHteY5q3rXTQwyY8anY"
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
