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
    "4M1Fm7y2wT8Kx47D97jLRWr71UyorBn7o6Cw6vvdqrsdXjq3eYb3CfhRtYoGv3DgUyH3C2ZzoBBX1CAMriMJHqeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54qm2yP4DaJVNiPftqrX1g8xTh9HF1NS2XuB6K8ge3SdgSBYYVVu6YkC6ouVBStJa6epM8S1f879Mb7tTGnEXxST",
  "key1": "3Eqp8Avg5axuvDbfu87ocCeDHtyaNppCBjSsQTEgMEy9LfrXmDWhCpKP833Aae71ELWtQaEggNuMCqvyMRPSkdmt",
  "key2": "4wQcrGggdx32J1mNfzBp2RCzDaLPhoMRfyAm5K8Y4dv5yMZc2GmsFubLfJr45QroMQzCtHyVJxnFyZBNrJLN227q",
  "key3": "4AHo2LM29tKJN3nXL4uxqH5G1nqF9ykTzBBcQ6aqKyEroEFxVhp61xhCzKMN9NbExDuUeNZrYkkgreGo55xFZy6d",
  "key4": "3R5WVWMBrSXPjyvsvRXpos9NzRiWmxV5bjHV1KZK4kZCwMvrJnLu7Ud7QLP21aAd9bm9yJaGhdtb2w7LpJP6XBkP",
  "key5": "5kFXacz5nQQHM5XwPbxUHhbzrc9aybVXfesDj3dcebJByHFB75S25eZmC1ZTnitWoDuRL2pwMLNdhPSE2Ni9ojyK",
  "key6": "469rguzpXEHR49mKH26L178fKU8HY4zb3nVghLoqWRNFh3vcS4Z7gFKKz1pY2advXhQiNB8R5wV8DLWKdjympAfn",
  "key7": "23LhHbkdvoLri2Z7yWmuQyyeY69uZqVwj8ncxhd2vpexUTjGGJEziKn9pcS1kbk5DwkXM3DGancDAekwPw7QVy8A",
  "key8": "51V8HkmB2oeznLxQxqQZWjsE6L7Cn4NdQtuJUQNL4v3MzJDjA2wwCQ8URhNqCvC8rar7qPKK9Unmdwrk5fJVQugk",
  "key9": "5SWRbVz1btXWmH17p52HG8PFmqMc9ryp1xrKWPFUJXxtZKZnFBJ748ScRy5wcvCFiMuQQcAQ1wuJjnnWGytmbFzK",
  "key10": "4dA94ENyFtTfjtZbx6VLY6ANPhd3xmqwZkB7z2dF25LsdGYbnrZy3LFKiwYCNmhzZjSy82CPWx89zyFVr32VytU9",
  "key11": "5PeXNBNa9U8ZBMUdTKis8rSJPUTjEWQ5muA4pPgZqcvEsLmu8LYHic1wydqSNu9R44tToZv7iG3QuBo18FHwgaZJ",
  "key12": "3JHyVcmdEWfefUxo7UsqbwoYawPeTLWKc1bwuUuFpHKP1qraHMoBYuiQrpSCAQaGBCXA9tba9Nu34WHgRM2Pm2bn",
  "key13": "4MUBxmLjamsn35aWg8DW7n9bz7xudERpcT9tmjz6dx8f5wCrWgEcAX7tRoVGLFsYdYVPC6j8KQx8hjKcfLALfXKU",
  "key14": "4LxkQR5GJ8VKpcsZfMdYbK2hDRJ1ftmsQt1BzTJz3Vqvd7hUG4HSjXGS4XWf2K1n9E3FdupzW4cdyMTqkGmZKTn",
  "key15": "2ubJb93Wrt5ifXRaRFwL6CKfkG7yrBdGPFLdqUYGQXz7tCyrpqF8esW4jqHaGaeNzHjxgitPCpx5dU6Wi3YAFjQs",
  "key16": "kg42VUG3QGqA3DLmEfc7r1GnV8j7ZUCdRowS3GMPhWzU6iFwxQ8jTuGKcxjFDAsupHDEPDdpTL37bM7CfSBFcA8",
  "key17": "76bdcHBZNJ4reBFse2AoFyPJnrsqy2JbRRh73c5Jz5e5gd521DBYzoJsgqHDZUa2U66C4VoxP6io56tbwT77xVR",
  "key18": "2rH3j4iq5TBZhKECaaiYqoKHTpfyy7Sj9b4rFyp7mPKQcabtThMQah5kFe1fdfbAgrYirHfZzyXXxpJoMduKWvio",
  "key19": "4XEMh4twCmd5EzNSzUSraqKjmCPer6rCDSQPaoFZN2GBKBx63HCD42LvhSVFPyxNdjsneycV79YXwTnNVocSNFtn",
  "key20": "47YFc9o2hYtEf6rYY4cvmxzwd46X8fWq8qmpQiyMy2UNDFyoTSGG9rAyfWXdErituRMsYiLXQbr3M5VG93rVnjeu",
  "key21": "ByqjKP44rhY6T8BAFvYJpoDdaqq94EKBNqAVduesBro2m2kqzwyzh9RqFrPcGQxidPV7PvRVqDpiEpr6btnT1cn",
  "key22": "5EPyujMyCmqxv58iFmr24gzE58TjemmpD59nbjEZ7tUJszkZ48ShG5B8Xt8W7YK6DhZABkovWF8xLfaPgtVmSgyB",
  "key23": "3Kqw5r2VNSnVjsmQnmTfXJ5PMTLo1mYqaqWNwCgYovGYurD72SUesBKWfsreX75nxQ2r1NbaXDykqak8YCqdV6KT",
  "key24": "3MTHkHUSe5y27YuwnVfksSxuvZ3cEGYnwqyuCdorFCfmxzFLR6rXGbpW7NZktoCHSsJ29TiHurzHhVKP43VdTVkV",
  "key25": "YnQYNooWXAUXrFq97KEfPw8erHjwbF6F9sfhtckw8ymHEWne5zFrGyR7HiQx32Z9BdUeJ6dVwBpxAiqL8T3jcBo",
  "key26": "3XcYBZY5MHbXiUccTt8uQUSbua5jZCq4hziLbSEpRydfWLZ1vSB3U1RTcu5dfF4t9q9oMtigWCgNHqynAMAWqkSG",
  "key27": "28seLQjX3VNbo4cj34QynT3ya13AdPy39pW4AHwvn8jJEf7mcRc9zskiYcqvMWZxn8eDtp7TRbbvAThnUZamdjfP",
  "key28": "3Vw3BzeKLwSYmCUHT5GtgyMhXK5Arb359EGiRujDMpjeTdkhtc3pxCWBDoMdqtxd9BbGCaCu5r5VbQ8aU6kQ9Jhh",
  "key29": "3TTkXE52APNv5ELzpEZo2khSfbwUm3PT24k9krLA8kPLyfrstxMdpRbKDxXp9dsL6Mh4CsAFoeJWRoxgn9VxD4ZS",
  "key30": "5BNiQjsEen7ariC29yWKZ5m3ENGF6WHjqjrp8kqqrQzTeWmXgPw3PgLUCfDQw456RohUboS7X52nQVB3vtaegFRp",
  "key31": "gsPC7uUVi8G2yATdn12NY8DV3DbBasUrykwVX7FwpBequmu1YBmAy6ushaxekqajiabmEEobFkHciDc8Qf8UQvp",
  "key32": "GfZnF9WmXojKDKn2Jg2EhgKzwLFKnN4jLF4he8Jm3nLbjLCYiQajYJrERJezi44fRAervaRnXyTV4Ew9BriRbWd"
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
