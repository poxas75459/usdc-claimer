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
    "2G6c5guuwXWNNLNXiuXCiBJ1TrBrrfcQNnqTVz3no3SE3vEjnV8qjrwZGFctKzDjCEyhTY5P9XcY8CNJ8aqmXe3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "USAEU9WcMgSTMf1EESpKhN6ayzDrzhyfDa7tdQhCuReAYJoNd6GX7cARn7tPnxQ85RKBiG3P1QXMt1Cruzbctfn",
  "key1": "4b9HDY3858mmPYUaF8bj47VYqmfGUy2VNV681McmfewMAsCbjfLhqaQffbtqB9cGDaxAxDBeDSG1X5csjvMaGtk9",
  "key2": "4Um2GjY2MvZ1aLE1EHBYtXp4B2o5YBmzUEtctuUcFJNCN7XVygCfW6eARMYc11QzqaAus62okPJVVKAjTo9NrGo2",
  "key3": "5WBykJLmaZ5fivwooRxkmmtkTG5D5PWzcw355Mzn8ggfeWoqLA7hrFeh4R6oQA7aXArkCuuy9WYen3BG2Tuspy5P",
  "key4": "LZzth9GKcgEzth9SMScXyJLXkx2sgVFHMibdXHgryJJH9dfVtkdktHruuPHKWFQnBxnFbKGzRJ7WTdAPcZiZjHz",
  "key5": "2o4AERU3eTobDpFP44fPLDD2ik2SEsevn3tGDe68emcj4LK8NeVHFNd8nzqn1Hc7FXAxnMpH2ABR9SvWgERyvTEg",
  "key6": "4aU3NVfZqhekgVS6b3XiEZqXXizz3xefKdejQ36zRtxLedzUUon7rC15xLLSKcHs1Mo9scTzHEKTFtUtfEvsUohT",
  "key7": "sypnJL5Td83f4uVXeq7CNmDRAdf1mfaKLo9LrABebVk7nMFpWksGBqNkMCPFmLsDuJretickR5A6b9WSo2uJRjj",
  "key8": "fBspyPmcyAsFdxwtaWZK9KwvSNjS857NCLa6wreLd6LKTkwPZyEXgFt5Fkbt5KNkp41x5BrFU5tSGr7cRoWaJRK",
  "key9": "4C2DJnzVXqdV9BcSmFPSWqjbCnkma1bcgkcfBkkBPgumvRWQa2ab6h2SPvmaAaiGufF81Sw4ntyiVBMABR1c73Uc",
  "key10": "4GajfMPNEvRwUf1ehA1yULEiPovGDAksxBMXjcEDsZEZJXBnkv2tf9ziuLQQXFuXvtCTRjE349FYtgnNjFfuimDR",
  "key11": "2bg1XGw4Bxav7rrPLASYk4KucYeLUg9LPghGW43CRD428Lb3byjqK53dBmXf46RQTVocW38GfJWw298oB2JVSVfk",
  "key12": "3ia5jvvMKuEeocQGxfNrMr1tHo5WqStpaJ5NCJvzudThpXbJ3zSWcB2Tbx1ofyajdYhSg1awSvouPTktAVYqzqRJ",
  "key13": "YedWRxAPzLNmQNZrzXfzhwKc9c2cujfgykfam2E6LAyrdKCZ1NSkW9NaWBfrEPTFQutbekY8QTpR6fHjozuJgp9",
  "key14": "5a5o8Hea5qk6B624DfgtAVAivcYLtwh7ErANbR7qokkhEKWchNKvs5V5o4BPmZPaQQgUTwKFN5dhixqKHG8t3Xp3",
  "key15": "4mwMuhaHHLJdXZbhRzBsrEWsPQaXZhYd18svP5yZwtezsfnUJHr17Z2S7sXM4vEMJbNnW5Mtyy1vKSzmPkrDcgos",
  "key16": "fxKMyinqomB5TjwGmG8ew7aPfa96CoWGpTM5s4LmjiPydmfRR2WoHQeRNaeZEscXmCco8MFfCXezps1cRDhsxLX",
  "key17": "2F2aY59ATUoDuRpgCZqnZdNq7yuhJgTnL9ukKDVg4FTvRXpnaJewpHrX1k6aFeetdn6aPnVVESyTKqfQ6aNjJYLT",
  "key18": "4CQz6pa41GMprabk95xtfDczWmti8ogf1tbgYvwxYBCYueJFkSVSZMR2G1v54E8DewV7gh7EibDv7srVQaKjfhES",
  "key19": "4iHZjJpLT5b4gJVFzEfMJv6UDAC73K8JLLAWrouMUUqjg6TDLHG7WXNZSu6vtew7CdTw3yqXCKQmWeZzSWD4z1Zk",
  "key20": "xmobZoUtjY1t9rgpDUh4i3HKYyJrK6qWtUTFAFarZ8UMFrEfWAyZvYYVUvvGe15JwektCPGZzxdJ3E6hvzCJTGp",
  "key21": "37oCsuvP7vfFfutyUijF8JS8AY2ez9hH649EXnMk4Vb1yfjUR8P8jrvMs5TPsZEtnu1XFfNB8qGUPTVkYnX2SX76",
  "key22": "3udU8xnhRwgSQj26SP3yz727Ln47tFuFfEckDK4rSJ7TcQLgJTv8hK9R4VWFEpUjRcNACVcFJt3MeoCDse6BgP1k",
  "key23": "28Y2Vfu7o2QmYoov5o8DVFg2Pxf1D2WtY7gR1DkehztpwMXDEcabG5cxTSZqkLZmd7uGQFQ32Yz2pJmvX77TsrhS",
  "key24": "2bCwwf6WUfA4yFXAUUSXWKXR5UgqM4ys5xs4wpz8pX3MUg77F73uDNDJKT1ACuyCTsmzbVq9SMcpUtnEXsachaH7",
  "key25": "4TKvzwmLJRfeQCmvHFwXp7WEfBZPk75iArkAfgFj2xJ41Xri6tegphLwoJfpp6pn6qQJTLE6SaKSP6dE3wi6SGsU",
  "key26": "y8pcMh5jzeK7b6cmj9E2TXase3uG68x75Fw14JfYjHUybHnagVTJh1vhMjiMhJKtSpVHaUPhRRNJARm48GYtyVf"
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
