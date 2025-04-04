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
    "5yUWqwYW5Ucbp3m427C3CqpJjhoo3GHKFL4Fxihiej2KHgtfFWU6C9DjJs2TuyH5KpnMD6cBocwD7QcqbhAchgse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KanGhGM8Xf5rcdCytr2LvWJiz7F6ttKJxMD3vR3hQ97nyu3wG7499QhsYGu73BDkrbRsiKVXzdt8cdc2PUskrsn",
  "key1": "4XNDcnta3zzcLzEvBzi826M5NGfoQR7RKGbvkUgUvL5sgwVtpqrA6qFYyShSQvEwjz9CQv3G4Pcn4QMrwRXLZ6jF",
  "key2": "uGrGWYpMz9b8Aq1d9efrADGkDL4J2Zz7QNqCK3isXew64VD24xRjuFyTNiMYTUXcm1F1Xo7YSeNnPRaa5uCV4nw",
  "key3": "4kM9vBPepEModYN7DcR9PP7z7ooQgNnwtizJc1HtLPMBFG9cvHkv3piGYcNbmZgk64J25ncLRLpMGQsovk8XNnGK",
  "key4": "4hcT1F2Js8D1AdiuFH4fHaVoxEuMhvLqs2fN21L5oTd6Cst76Kj1YW2stG2fJWLWUNK6eVZmxq1ZgtAKRZU2f6ab",
  "key5": "5gAwozQhn9TikFKM284cMcCcs6BSYtayXe3DsJJ3ZVJUxVeiPszXnRnQhLkoTZkFwxhqYQYgkaamCeD8jd11aNAu",
  "key6": "HD8UiHSDbLnLcharBWDqHvJ8Puj3P4NJQRj2RTyXkQANkqAzPVT2tRrUe4xb3XwL6G4V3RmhkbP3xUa7UZqGJTT",
  "key7": "2f4hJbwJKE9iM7zLjEaotrc8kCsqcnaE3h5WbCPDF291nvGYs8R4bH2ddLGzLxGVswQRqx2zqACAUy6FZZAgFiNC",
  "key8": "4Nh4UW1oPrVYif31CawRmo72pfQS4h2Qcjv9xGjVJDbCHcvJQpKLrUBds4C7j3hH9T2JzZjhAktU4BmTLMAt5W4s",
  "key9": "STGvw99uLf1fTT2KWpyPDUhyCv4BZ2gnZyJQDrDcMRtmPYygRCkTGzH1yv7gRQbfqcbXaJhbLWpvShhM5P56NEZ",
  "key10": "2bqCUyEa458xZnjQd6Rjwjp62AW9bpqcHaPorhHSo4Gwue6DqyotrodxAnq2ZANt2w8qyH4RJvuEDnnupn4cJodW",
  "key11": "58vcMVWgEZmomJc6SGbXtDkxeWWBtmB5zMVA2UVHxob3d7LYrvsN2GHys8EKonfEce1KK8f1WkvQF5GKPrPoZYcy",
  "key12": "2qHhDZQmvvfpcvmwE1CJAhT1WuLwAGFduN2pyR8vYdhFQvrwDsK9xJo5QPgQ5BbhdVvFZsyDQ5pgt7bvVzNMJgPE",
  "key13": "2cooKYCXWJXHFMfTNw5zUTaNf6PV22HqRdne7NgE7snSrRHogWZCFf4Z6hUTNnsE3KMr9M3vYJ24pE7JHagMvkPH",
  "key14": "YkH1A9xL7F3hh5MBCPex8kCgHroQ1SNFzauDWun9DGrdbKMXpSCNG8FQSsSqTrHUiQXcSq73TFZ3Pd1j2mPS6GL",
  "key15": "2aJUD1ctYepkswWoShriPk3dszF8T2Y4B8r4Nft3d8QMCrc6MaHNPjzPLopp5ibWx33eJPozJe7p7N7dU8xRLRS2",
  "key16": "38wZ1uXqH1SECVjNFrHxM3u1vqmncxWrVEySojQj2qvqcDRM51ceiPYDRgefFHT24STaSy8QwpR6NMq8WUxxAWdx",
  "key17": "BU2HKwMh6bFazm6BpAZQ8yomUYiwX35CXZZSD26JFMwKm63Q37QaQppqJtyS4zmKcbLuaUYKJNjbuBjs5t6GUfq",
  "key18": "42vbQ9JPRQbCmj8zh5SKmVKg2QpycLhk2t6dkZKpzMShCt55YmK2BRQ1pvr6gALDqAEFwqNthdiov4NEAhSVGkG1",
  "key19": "5pqbZaWW8eL8E1CURK1oG9SFUjqZWNxU9tYFSUfKf1v4c2HNpnCNmneGMhRkuhLTargKz9SbALCNDSS6PBib3s59",
  "key20": "57E4h32oBVK9SFpUYfLW1nq7w1tp7U6hswkwvo3VZmCVPsTNrv8vCAXxtRPc1kU2tizuQ1Ybh1PXc6Zm5VEBBX9f",
  "key21": "36oVKW6sGLXb2PXjXd93EoXoyyEsyBLYaCLrhaf3YHxNcuRB4goLHVBNhLb3kXmzManiBQL2LyVtTTJd1GPiXrky",
  "key22": "3EteMGM7AjSFoAttQnyD1BK5B6Jr9gjzZC3e7Z2MKfiHrCpFqHcwSBBtGFJD27YVBkDMjKhjADugsyhPqCb1bbQQ",
  "key23": "26SYjsp6tUE2W8W3CnhVTZFuU3PSSc6mimTX9DmVX3nk6NEdT5RMaTyngtSACW1N38adF2NhEQFc4JNBcX7o3YWm",
  "key24": "eQoWSKtHDerkQyupchSzMqU9kRYHRaxBZWjFbYU5Q6C6NwRGTSv88y1oy8bkCHAbx1o7Vfe713EUYFjW9p6gTgL",
  "key25": "4Nh5JET6odLitzcURyDemn5HngikQ3w53ia8UKx22VrG58AVrE8LFa7Ym5XpeEAa9VdpFZes6xhVM7jNCaAiVLR8",
  "key26": "4MqhJhGefQF2mbf5dNHFPoZpgTEDUzTeSYyY1cDYfHX15UDxJm4n6tTkF22AKxoicd7MFPHH7KCEBgKehPApc77o",
  "key27": "5W1nkdQaeV4SCwhnJKgoD2QDTtX62mr42ygqEqyhcmuFnWvCFRj5rL89fg6ww8HHYMEc5Mp9sT8CPvfKzx4N8pJa",
  "key28": "4wyG6hgktVvchdUSMDRanviEQuu4oB9E3U7TwKfcnAGmY6ZeHu5wRSCAigbMjEpvDxhyXuTe3XxLJ1VsHZMckhd4"
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
