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
    "SZk3S9BAnQ6w39KRCEvAc5TaTptxyFepZuircznogVxDMGLDVR2JJBv3jAEM2YF38cxDs9UfckhWY45AvervHar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47of1SspeVAr9ECBmFVKiupH7e1B3XBd4GtmNrsgZFuYNpDWBTaKCEDrAHyVme9eiVHraqRxYi1BQr7PoDZAA8Um",
  "key1": "a47Xr1EH1KJ5nsuntEGLUPYVHuSkZf8vVBbk6FBiUk2vnypH41BNmLpVnvohuRQ4MwtpVV9WsU3CycVcD7tx6Wj",
  "key2": "61SSdEYSe9u8HdzGRbNj9N2576SfgVGD3rGhBWXrG4ND6NYH9jfeUN5Ssrad35uRC4JYXPX396coC1QJ28cpo5XE",
  "key3": "43xJ1RjBkYAQtbokWmusuvhauGSJkLUsb77wSSyGNQtKJjjJwB1YKvZBp579m8Vd23p5QaJ6SdPswPv4M7VNBgJW",
  "key4": "58kebTkLJBjddxhLiHkRJWMaMeKv96KSzRavc49WtaXnGVNCywCrjVZHYCBPB1ixcZFfBhxbhroVXg2Eqvxt9QMV",
  "key5": "4RGWkxRbVavmYMu55H3ko64zjtm6UtUYYnE8ywat7oQgpxciHgERNoqmrghdLHk3Z3e1pnqNd8HCm8qSrqyZsaD3",
  "key6": "3op36gEV6vMVc4utEVrXQfkqLwFriTsSz3QQVvtjTkNRiTBR3BWQ7ewpskpLZe131piDnPcNejmqq76T2grZCanc",
  "key7": "5mLQSSFKAD75N6DDV4A7boS2PwLCoV3PtQnbRqbYDM6KNVvtGy8ujv1DXEtyYSYoqT5RweiVG7R7TG5Tk1iZGsUG",
  "key8": "5iDA9Pi7yvBhq8EAThNfkdNFJrDojrXobXkVpxwyzPHVQQoRViQoBdwofL9pZ3hQSWUqNdu2iFHLuvJokWZcdeSx",
  "key9": "apdE5CLdjxXTy6mbZ5PmzJqqwqtRhvULWhZ6jmT9zLNCMFTYRk9qpQPNa3N2oLuj6gxjA21Bewahyjs54ZS1tPo",
  "key10": "2cz8GWCGaQuEgyLYMegMzD9heesgwES7Z2XrwiRGFCrnbr5RT3DDV7b9EfxZqMTFN8zKMMKv9wqJ8vm7x2EMQg3t",
  "key11": "C84fnwhAHhUU4VYUS4a5xHpSd1fYRMmnQjbhG5oMX8WwEcJhKeYeNZb6CrymtY65Pn8TvShfcXKXFWdKJz3xfdc",
  "key12": "4c45LUsDH8hGYK1rtkpK826N7VFR39p48h2X2okMEMUEPTNWNRYFxqBkqohds25Kh3JyzEgkURrJMZ3Xu3xLDecK",
  "key13": "ZnheKctmWYFgYwnHNqv9bAxy4QhyTmqnMiqzGiwLM3ZgvyUxqMLqt8mjREgiyxVvdMWLPqBbMXX2XyizHr86uf7",
  "key14": "3ei9pjeefiBZWbQjeHUm7zPUsWM5jJ1UGveB4cVABQiECLAFpK58pux5aK2vkbpaePn3Fc45UoJwc1TErAtqhhqY",
  "key15": "5DNhjXEe3NJApWGhp1NBh42KVMZmp9R1WbEda7hzkaFDDT9cPQCrmmUjK3kWKp3jkQqHsWdBxsyP3TFU4nrmSRuB",
  "key16": "4M7TJNLALYkey1Swf6V1RZ9zfetcw2pyKgKYueV9S8QQhRdJi2fA7QdrASo9t59qRkT71R4E75WPbxkHBq7vWUw9",
  "key17": "3GKiT81NCmwwKLPPFzXbWEuRKcuv9k7Df3MmrCqeSChBJJ1ghPJamxV2RUg2nnaEpgc9KuJ14GobDUtPsQMyRXGU",
  "key18": "SPvFgvmXX6BvJoqP5odMZjzqJXfpH323WmSn2XSiCYu4AndP6WMF7fqkpb2XxAyTtTNELtBB3x9jBN8xjoNNsEm",
  "key19": "2jWciHWGZeggrN8NZRDdusTNFy8VCWHtQZXjAzUGLtmm4MVm3CsRjhM3ntDNR8xLRfXXWgPkanpBpduyv1yZe3mR",
  "key20": "3m4uos9Fok2mEEDmeH5ReQ6oYwZkhLi1cRF98eMBe3gMcQjMYiDVAiZ59hwQiWifjHv4b8Sxhm3vD7JSPbcJPm2E",
  "key21": "Nh7qCRBAs3pWBZK9t8zCvgrhWTXDbeZqGuJuZ2SuNzAPB7ojhtVibruWXFKcqo5c5ymnNXtBvt7ammj22rgFt6y",
  "key22": "4q8Lp6hXYTm58n8oXaK8AVK36KzqZZbT49Vid5dK5d2jUfjbW7uaq6C8giCmp4ebBVZeT77fnfcBxTRG5n3AtRk1",
  "key23": "24u5YRq99m8BwcxqZeF4TNqozr2vAi2bhRKaQcqGhM1EUKBDYGgG6cNUhb1W2ZHabGXwYje95tWucmMBBVP4chHm",
  "key24": "61HWq5Z8kKcH56FrbfwGing2mLsSAfeQoB9GHK9ma47jZ3aPZiLPMgLsU984uedhxdyxBGHVb2CG1icz7Yancoaq",
  "key25": "3uCYtpaQT7a1ohrwUvZxdKsMx2eDLFCbpLrV5EJjJhMwfYkLtjxhXfR9RBKvDvUCS6gFP2CzmkVzQWnFBR9cPXYR",
  "key26": "3ciRsgq5V2A9m2knEgsk52ndv4UVDhvEd63n5VUQReSmnP9gqnDy8kSZyJx2YsymjAayU1x2pcQdjBPeVJvkmRMc",
  "key27": "J1mFD7N9ronFfWoupFjvFMXEF8X2iYXAn6jzvjtY3xWAccQM8PTfw5AhAC8RZPMHaAor4h9HpK8ajCQd6qZxysx",
  "key28": "5EXzQiCTuXJoGZ5nYE31hJ1g8V9ow6DJuTU8tK9wA68xuRUZ5fdoh62oNJk3f1byTATyh7KFrxXSayid3UhWCMKC",
  "key29": "4fQVB3KfZYT7w4VP4eRo9HVvQ5pes6KWyrCS8tpShvUkVorztYLHd7QZeQZoo9cdzSQWtUfuiJJW774DSaWPYpJ2",
  "key30": "39Ft5nrzyXMCo7svXkY1QGXMhGuvtJvFGiG9brvbYNMTDvqeteK4gGVeadyntu9CXPMmNLWdgex1wYHqMmdJ24Dj",
  "key31": "3xW1pmUsk1RTLyB1yHvKRDfAnRntEcQNFbEUTr5puZVFMJ8qMPSuZaU5xh8zAQSNFYeQZ31Pe7tKvQuhbe65Fg2D",
  "key32": "5HziSuRnr1MeHnJi1TJCP1X4uTkBeWj85XUCd2cdXqW1yA5mY4ZEfc4G2S5XFsnn2SCxzGxfbjpEWmSZfRqaaNje",
  "key33": "4m6WCgAJXCZyW2jqxr3jpD3g96PSxd88axyrQ7mgnfvs5EaQpbpDuSvXeykkncneKFx2pXpoHTi24zMuqrprUdEg",
  "key34": "4Vt5XP6xmxRKCHsk272fVLWFjiHjQiHar76gskdzqSj8D2cuAtAbfZSyudUqT9KxYQ2ecYNhoBwM5xUbJozAhFMM"
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
