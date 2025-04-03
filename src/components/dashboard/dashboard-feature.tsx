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
    "4k2PgszKJVFFdo9mAtiv1fpyMzNCcdx34BzwR5Gbb7XdiwXtyL4RdmB5wUmYZa6qEeDX1WKfKFfzzB641jvc4R3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yd7ysUKNUP1WqAEFZDVifsUjnYE37QvdNmv1USNx9Rt7Bt63XL5v6KCigAaBwgDaYz9LsS2TrEbowUFFLwVR46e",
  "key1": "2xwj1BzDDcykXtrFMkTJsVzQhxoyBgvWkcWnKe3wiRQ1R6pkuUBCx8ZcZtgXooZN51CYuXykS9LjVja9eWdMdYvn",
  "key2": "43Qq4JjopgPPkz2YqdDNzZSrAgBwWEBRDVkTn5EBVXYojM8zbvTYgFfLmtoUQmf4ofNEa9Pygpr23iBtJE8w6DCs",
  "key3": "2yteoTaj2KSJ7dDqmZNDrJX5jLuZSQqYrs4mrom8kk3H3aRsViRSKv5eWugVVA7HnkDaEUuRM8NAUXzZKSHaqmXQ",
  "key4": "3T8Bazukm1YERUfq6kfCurbu3JJHDik2XyVE9U6hYH3ib46sfvpYrDM5F9QrduUh6ioJA7WHo9cuCMHWbChuSsA2",
  "key5": "4nj9vHfRnTd55NCrG9Lhge15qnAgcTdVXMb7YEhqrMsJ1fsxnCosXcRBhehSkRad31Asy3NYu5DbZdXtfyJBMrcQ",
  "key6": "2JhaRC4jKUwf77dLxAtNkV8TE5Zdre3Wp2K1tt85GAtWga8vR8DktaAcxiSocoUP3txEiehXhF5ZgbWi15wi2oEK",
  "key7": "4M59FtZaaE1RvMahudqt2ZposYUBZz6XFbnWuRSYLTPrZRzj1GUmww3Z4e7mEtU1LshdjiUFsZmJLRzivW5VtWc7",
  "key8": "3PLb3cwfkMhUxAJc6Ar6XrpQmi2BD6aXreodDVjuxUPCHt2ZuEQRMfs4oW1noGBWxvmjQynDuwMxBY3of41pGRN2",
  "key9": "4URur1oNYP8eJd1pmivA2xwt3Ue1Kd7Umn6hCQ2XD7hCVsAPVKjyh1YQvGmH7mvxacKHdbivQAAWinTLwWS26ZNu",
  "key10": "3A2KsGT9bWU61U6NDabZvXyLPsPjmXC5f9hYyNr1c8F4TBan8Rrf47ErSidYuBrML5G2HzUynPc5JeYkQ28Cx6mN",
  "key11": "5xPsDE1wYs2qsJKg9a7txYihLbJwGV6pYw4J9ut1fFu65e6sHKzFakzdpFsrzDosDzDQFvBRe73fzUTS7KkUBZTa",
  "key12": "3cbhfFFufagZKZ5C37PBB2N9KV97CFdvgu4zDFS4WqbM4yhawUjZdG9cLqdsYEkNtuJT8qm2z7tgq3ukomLqdCGV",
  "key13": "2VwRw6u5wHup5kZxHzFqGdkJHXVx6viCzR3o7xJYEkewoKvduXH1gEXvwTuQzZFX83RkH5iERLGCYM5iEKyU9t1f",
  "key14": "454LDZbTnhZvSjbaU9mGHHLQiPxWPgEuNEBmBAWAsFScr1tTsdKfyerF7EU947fMWnCJ86wRZFdtEEpGFwon3R1",
  "key15": "hJaHPHmAPa1MdUeKFg9wz7gHDx4BkUsLA8Nh3PZc8Uvwxm8S1UNYSgRmw2K6rbmNJRTs3VpH5JRzBsjVUeMwgXw",
  "key16": "B58AQWsSz9w2CwtTuKNuNLJTgM2U1db8yASRwLPPRdSbUEE34VrAkM55hriCDgXXkoDkFZ5vsSaTJ26VNgiYUfh",
  "key17": "W93iY7ypXVwpL3cXpySJV91drqMT5CsSY1wA5ZmNpMz3yS7FAa8vGAuvD7omXhji4Mkda95yJLzriQwxqZt2s5E",
  "key18": "V4cjd6Q4sur4yhbtC84qbp7K1e8Esg3qCNWsnFgP7PJCYj5W1m3CMW87wMwzH26C3M2Q1oJRHvG5oniffuV8PRs",
  "key19": "5QrZqyrKcam15mJ8rAztKfeqfDgzbBjYFw288VYA8ewKPqUM3BcRtYYipia2UuT69XHabEBGadomeuXApqfXikSG",
  "key20": "3YNStffNFV5ys7HM1R4cXUhiLaAWVVuQDVL31bpi2exuhvRBqjqm9SiKosNfHUyPLe9HXCkEWcEUByfBfPwRoxXL",
  "key21": "2YKHtx2omq4DZatxoXZtsqsbcmNXEpw3kynzWDDcnXMF8FGRhe8gD2cfjiqraaizmzVssWqNr1vzKUar4vfQpFSj",
  "key22": "2hcHc6Z46QPYm6oJ9garDmc52Z13wHoQmGVivq8fyJtE5rg4rVRU668ezxY6K9JBeyQm5X5QaPf7vacEu7K2zZeE",
  "key23": "5LfqkFR6z164VaYua65YWx2KhYXVUJptpa2RdVr9EuvGH8M9BaQLNY4JB4YeDuxwzoX1Db1Pmw296NWyYAW7g93Y",
  "key24": "514j4Mu8FfAbxKM5BvgVWkJzXJijkPj5qG9rE7ZdniT5YtGFcUdWqc4EXRLEUSaLMr6xqgUM1AS7NNhVMTngAehV",
  "key25": "4BnZEhFC11cq6Ne4EWGaJyktwtezBropwseGS8vsGsRJQCfYgHnTTYK7mM1yedg8mksifEkjs5s58JzgjWKKTkc6",
  "key26": "2Fv2LBS2T4V7SaUVwhB8KnSTCsf5MA5kHREekuyLZF771oU1zHCC6BPWkvSPx7vek4yBVJTmz4XAmve9czfVDrMH"
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
