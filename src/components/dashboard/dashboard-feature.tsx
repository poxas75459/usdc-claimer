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
    "4mHZtZDgQ7HkPckQVThWC8u7jWEUQmXgv7kwn7QHaAmUWoeYfKDAKAA1kEztadWg8dCX6P7LU4uxcVTTEdzvzFC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34S1R9bgbpwVDgKNzqL5AW8RXKQAiT47Uz4y7WNvkHrm3si93Kk5Z8pzet1nNvGdJ2k1iLoGEdwdBxeeJEzr5GmA",
  "key1": "2odvQNKJ15tSuKjnW6fxCZSsS7UX9KCxW63FDt2Gk8LPRwHeozMYHNyUGrRKvrGtAsisZxM86QL6rzx4oDYdVDKX",
  "key2": "2N8iXCLxU4xVt4UAHD13Lphmroku624WLotvyBjhReGP2gWa5FVdcTWHQSumiQGUEaq85RkBthKeQQhXmDyWcPZo",
  "key3": "2ZXm2nzWGw8c17zhnjP2xWrR5PvwC1qrNXkZ7fyk5Sa6Gr24SPaht9pLL1aYiNhC2GKr9HYJTZKAZF2cmybVtC6F",
  "key4": "23XJzdM6gUxYpsrYhTPCNs4ABmzpAt3HaupBT53mvj924kpagsCckqUuEWxZ7QDWiDFKwVNLRGt6bSHCdB7S2R2y",
  "key5": "56knxnoRxGWe6xVVwuJKow8JmJpkdBMj6fieqcSoP6nhGSPkpwBwaRsUH1J7eqUj2gLTajkmz7gy3TeSzzgqRGJV",
  "key6": "3pGVB3Rd8V7Qg4PQ24obNyuV3yojdMFii9b3VXLkcaBMJ8Tzp2NqmDDoQQeXY8QCZrcLRVAUNVhVYeSSwwPSzA6x",
  "key7": "4kDbjGo9s1TrE296XGSSYYBBB9RjbuiLpksefe1G5GjS1Re5tpZXkGkxWriKUuPMge33n6nVQ48YfPH2W5t8kw5E",
  "key8": "4Mnzfz6wX9NJKX4mywSEHMtJWoPDVopJQou8yv2hmsLvKNwUG5Q8bm7Y1EwPxbNWt6Z4Pdknjhqq6NqSJyGGWTH5",
  "key9": "5WvLby6Dr7t6zvzTjMSEPNf6vxrnM3Qaj6WLwQsFKYVPkedHuyVF2zxN7qPwnyRjqrmwNgaqjfkQZi8FnbpQDuLg",
  "key10": "41xz14WZebV9RhPDvxpkCa7Hhn6mefzvdJHq6YTZ1vigrWrDGN9grEbcd4UMcwAGVkdUoLr1hnTfgn5eczhcdxn7",
  "key11": "2BKqEUyEBtuaPRGmXZjuve59Tr7xoSTUxUemHkPYgRcRpeL8UgT3p5Kqu5Ly1shUK5qZwnZJ2DCmqHjeh9yLzNJ6",
  "key12": "MPVjf7nmEMRDRUaapyqBB8orN1bVyptQZDp2A2icDTZPi6fodxfsY55fvBeXbrG9U7NSpMcD5GwPZUJjegcasuP",
  "key13": "XUH12AMwVFs7dhMdJCco3vpFVL3FnjNZLqj852q9ATvZ7qgx8BsSURy2uAyGbvRLh6d1wKm56v69TNL88R592SK",
  "key14": "ZzQ1mjKsdj1RRxtsnMB3xymGdC2r82mtv9u738695pYkM1ebeVT1TALk8LvfqQ5q2u8bUhrGmJw2XuF1tCLEUCG",
  "key15": "57Q8DMpChxd7FMLhU6vZKCNWoyZfLipZzM3mtypz5MABxxPMA3Ckg543vsSRR67w3qbbBrLPgcQirCGwuTzhJ3fP",
  "key16": "2VaVh6DyehrpJwGvHFNRiGPGsEEKNXVLRYLqANzFQ7RPFLyfvtoujWJAMq6wtxvupbNXLAvnYdaxwNwmpZyyFpXR",
  "key17": "4GCL6qXw1DkeuWCZawGv7xZfP8fwe6BwBvoSfgNtthNgUm2mxwmeDegTcXecnB3YNufsY6YTtkD9xKh4VG2mXEpb",
  "key18": "4dy9cLPXVKvxoojYcAiJWgjTkjRRR9Wetpoxq5PtjFMtvWKKUcuxF7344vNv1DFdF19UvUjbPtpwCrR5u9ScFxnt",
  "key19": "2pLzXyW1k5FVSvvQ6k5XZYi4F94K7uzHH5qAXZGmN3SjVK78YPvoq1kXSzRMerHX6ExDBLXcfSA9838DujezrWWX",
  "key20": "5Lq5BUhNrKUUEvbfsoGokbf9yvujGgNaR7HPBqsnnNMEW2FMNSACThrF6KfSKRwiTRN2w7fw7nwxg8PfFUhgsmww",
  "key21": "2e6X7tY2pmZzfdvCdAri8fBPvaDwJKdBzakQT3dH6o7RNhS4QR4M379y7Ttg4ftP7A4SgE7v83oXhbj6yaGGR1ML",
  "key22": "4GPfFbri5zKWM1U4KJuXCbUoEjFEXxUJV46qkvcLgQ7PorEMxZ2imdZ5T1Bo8tVGgt3TApnEkV8g6h5Q6NqqCXvU",
  "key23": "249NW9jugJQuSTPTJm4dCFVAZ5U74WGrnjvgQUn5haAJ2eFgAyXdagWFihcb1JX8vhC6BWbt3k9oxPPMGQT7wDzP",
  "key24": "3kKQou4vKxuH456yaoQ92sTnUi9BZhdSh7bDbdkKygJbJBFjXhNB4r3m1KtAXVgTtrNt2VbvMYh917fuYVQcH8Uk",
  "key25": "2w6PEeuBfptRC3cC9SKG4DJZf7UYBr778HkqU3cxZ6DpdT9n1xyZCn3zNBRmdHEkrMYYi3iuUHFzFXa9qN7NPkGS",
  "key26": "riZhcD8M5CHkX8NhGGecFwsZNzWWuPnKY7MGR6T8AzopR9KfHDt2JckpVS5kXpURXRZqthFpgwqrHcBuvtAEsTY",
  "key27": "2RdJrUacyznhFPB65SorXrz4bCwMtn2356198GEv46UjJ67fYhTaNqK9W6jvJmih5t6m7MJ2gq8fgQP6jXj6jPsk",
  "key28": "56F4PtBkYEuBMQ7ri57gu6jiQAWyzDvCqmiocpxg9Hv3Uwq4R4psHPYUcMbrXBCNr1HkHeMxgzUQMSkHVLG8cTLX",
  "key29": "4AAZ29wnCHrC98nvBcSMwT7gCnSdfTWwA1mEdbwEHgppQnj4E55ownvgfU4Hj6jF2rKhCQg4tSR23wyCCgzqJ6NL",
  "key30": "4xRw3PnKVK4xiRq6RUuupFFk95FWsypzmuYZYh8a8F5igvahNpyBDVmk69SDRL9AP6dnjgAwSexaUKedoKFesNrB",
  "key31": "DE1JxyuHwWpnqqV9Kng7Se1gYvV6qx8ihQbht7CQ6Ecfvw1AuFgGCxiR38qx1SqvB5KoH5S1joooe8wb88xgWkw",
  "key32": "2bsBUkWWTdW4SJkpcspBnd9aKhEPCzzHvWfBkX33uUdjyV1D3f64F1KZAV6PDoZ16bA1t61c56MkfxARt4r8yZrx",
  "key33": "4MCeDjqCe1EvccjuDaRxJZfwEa3k7DPCj2nPysimqWdWWyotGTCyHPFRph2G6W4DF4X3aVa66txAMxks6uskbBQW"
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
