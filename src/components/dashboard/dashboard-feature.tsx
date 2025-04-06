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
    "tYiyumRD9Z5qFp1daJBo5YMK564eg1zgQSx4CK1kZVesz17aGV22XaS1ZqGHEdyjiiVK1V5hjTBbAEtR2BGRxLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uxPYsLw6xfWjW42qGz7jXxpbydGCHUwWumWKBCLSzhgvyf3xvFpW2SRg82dfTDkyAnueUyDYw1tkXMCiiWa5vsd",
  "key1": "4c3h6fka1B8i6Ysv79U97zkJbWTYAcBRXKKk56m8tLnzmgKmSZo7TC3DqRHuLQiXP2aiwXHUwaR86XcyFwnZ3KTG",
  "key2": "KPqjNNJa8rrjkZzLtv5k8i97wQ7kUKQJKgqTwCXooqwqjMAwF4HDLhNdG23kwKMEaHNaKpHkrTMxCwZur97MYko",
  "key3": "4tLxjXwuuwf7iYf9gFT5HB8QtmNWeWmdwXyATmwK9AK83WdZ53rKiGL6gTDH6P2mxvqHeVbK5jxKex7ZwWPXU3uT",
  "key4": "2Ljw33c6cxBZ9YV51XyqDzatYoa3VpZKvqoW2X76SYFPg2L3vczuSATcCTLWDR7TRteXeGpyJ1GeyJcyGBtRAof9",
  "key5": "x5CqBJZWCb4NMcwfGSXZv3f77Za6JdWRXyeoW1XRa8CgiNuPuHqDzMBHh3cPgJgQFLx4YZe7ih9GE8QFND8CPYR",
  "key6": "5LgwNdAjCpxtMmRTgqh1V1vbvV6aygiUE1E15pC17FpDosF2E9YmQq2gXDoLniHgNxaDuA8THPDUWrqfY2THMy46",
  "key7": "4cjk8nGXSNZ3MbKKaHk76XxjVnKdzthdxvLh87j2Q1FPAP1CoTo5HYWhr5vPmA31iiK89qudPALxEVSW4gnRpksu",
  "key8": "5yy5ho3zcxNbnuoGfYHSuzJAiXQ2z52k88n1Wbf3kr8dNxAJPsqixMLUfU5mQNqVdJXhorq9EqVe3vB1rrqQfWbb",
  "key9": "4gLh4a2nJMeVNGDr2UmZsEGQfnDbXB32RcZzVjW7yJCzLsJiE1Pbe7cM87rXvbsuvqsE5jZxPhUurRNhoWyZPPX2",
  "key10": "3W9Amgs5RUQBRajzCL64KJMitcANJ8CCbTw7AoENy81ihNXxSrsD9Pj33Lz1RVeLk5Y8eUPr82wgBhEhYc8nR9Wt",
  "key11": "MzJ6dxcfkKsavTgp9tzzHwxTdwpzr7iMq6g4Q9raCHirrsZQmiMXG3mtbc9Koaxtk6GnkZXnWkgdntYbbACr88B",
  "key12": "3g4uzNZQXRgmKp6QZj59Ld7ir2pE78VmfNr3GcWDrEVw8haQtyCXND45qX85Mx5pHbYk4n4ydEyhSDvPmV5NLMdi",
  "key13": "4TC2fF8aEvE3dakktSViutwoEkJrh9kWAhuJ63QmfMUQNBDxtpvd3rKFh8YgQ824Bp6oLM3v2YpY3QnX7TJ2Uoqi",
  "key14": "PZwy6hKKaoMJBYaDbpxCLkotvn9ZLB4ghyuFSwJ3JnbFsd8RiGe5wKqV8VZnjgd3NXoE8W2xFF5BUZecBALwTcE",
  "key15": "4JicUn4dJEoFegH4PTwKrDsWVgA7zZgx6Pfwyg6FDWhcG9XLtce1McyYEBYDqnaysVBbFyYSEZa5S2mECvajftiL",
  "key16": "4BoWTxZ3pdhb8SYX74rSvu841HVTYPSVZyy9dJENysMvBECe7X3htJdQiKxtQRvAzB66Yfo1LcFYpC4EE4SAcqcb",
  "key17": "39rkYBmLNgdHC7VmftNz6AfpNjLHXdAa4yHVhuZiw8V1aXigd3jmPbQJquYfX6LJ3vtYB24wkeQWraKmSMGjUeGn",
  "key18": "hf71SygxEEX5A6tjKpfdRkL8VTjohqiGS2rKFmBAto4Ja5f83RPHWtygbn58ch9YsRd2nNTNxkcKN3kPsSHEWmG",
  "key19": "3NpzHQ7mh2pnFfaTPH49WKs66Mu2uxkJDZMG88nvymLD72aBc9FGdBthrw4zaSbKra5hbxqRZxfrHcP1Qsukf1cs",
  "key20": "2bJgVCNZ4xT6ueQEzzRS22eTzBCWYNdMfEKadJXPLmC3q34hcKfNFrNSr21dnoD2qGB5LV3A3p73TFyoDdXdAtfc",
  "key21": "2cxQSJtGpgxH1EpBcf77EvtKuLv2Fu2uyoNjbnaaKR6EpgKasSXeh3XwnKtZ8aWpTFhKPDks6UW9tUHP8q19auR5",
  "key22": "CQJav9VFzPRKMgAdS7VU3xTLhHiod31Pt9xT2AgGBQMwe2KH7YBusRZo2GLkhAT8EdboFXyGJzK81pSW15PEcgx",
  "key23": "66HdbumvukBvpmETv7XW24rfgLS8gPMwV1NTvwLAyxq9ZYTuQDfj6bayhVQ8LBm5WZhzh83nCjk7UaWomxWNNnVr",
  "key24": "jF1FQi4mjh1Ny6NmTSnBwdMZ7TA9GD3jPnFFVbD18uAT1RVFU2sWVkiNR7LKX6vSBGKvogGjn6t1KjNcSG7vnzm",
  "key25": "2zedz1etpCogG3vnjbjHTN3fZUTEDLqPZ55tAUyZ7J4ssMUrAa1USqbFY6t1c3vt1RTT1dhxb1d55tHKELfHARuJ",
  "key26": "2khfA3vTeAevDYSy3XLknaWHPLPmCd5drJ8sK9FMkPStGD9rbe1aJEycVNEFc6gdyRE9hkVYCDc2FNLmFvS7DeDG",
  "key27": "5QJkyPFoKgH8kqkt2pNVuSJ26cBCJoKDY3UpgQ1U2HbkUGJbnqBoJMHyT1codFaSVHmBK4WnRvp6xu9H9FyqjLXP",
  "key28": "2Vvi4XCyQeN5DM6WGKwbYMW8uF6yuJSnCTbmgSKMaHCn8sWDRsWtpdzKEK9yBmYNf81EnijUtDeNyetxFWWkL5NL",
  "key29": "5szdjqidcKvwcpRQdZzbCnvd2AKjYiYv7Gmbto3AuTSD78T8AqAUVTbCCFYgzVDKRL38Ruv8LqmJZdV2bjiTDt81",
  "key30": "4Bdf3v46839nVKPyF89DiCBdjDWokcirLkJDy9D7cr2cq7Z2yE3uvNbBQ5GDHqGtemGUnqvATRz61U2ntpSCfeVD",
  "key31": "4zKNU3XYUMpyCGnGWxQqDubhYUCjSNuzAjQVAQShkYFbaKZ4WC1j32jUDVHGaKMQ3u3qu1ZkBUvXjW5N8oRPApQr"
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
