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
    "NSTRU1dPJZwZi4j1ZWYcH4SNN5jTKkmmCTpY5pQ7zHHxLgsYwbuN9NAJSFHnnhCYUwGVv7vDonL8QsYUpFxhiv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LbkCY5FXPYxBJvhAN6nHJFUVK1Timau1VYReaJgN7dkkYwYqKm6LCtLN5CQTrr3nPtaBkrd2T1Z6QjHN4dmWfZa",
  "key1": "3upYqHrkGBZtfzRzbwQUme4KWvAsb9CcykkY4MjkD3apWRkfcLJRgQjoVveTaD85Far8jjnurZVRccfXh61BRpMY",
  "key2": "iqSJaWD7eoFUKjagdLFpzT4vYr4AFi46NCznE8Kt1CTR2qUDgDGNLRxVFUqPWpMG1aPCiXnmHmxDY5cPxG9afXu",
  "key3": "4K7dhr9uewp8pbTMycrGaHzne12mWyE2aHbTxvSLWR1bE9X5wZxoyC4UV9amR7bx25htGeWyHB6mfbGvGeDiuYyy",
  "key4": "5UjqgS1Hk7msKJgtENCjg8RBGzRkP6WdeKzvDwyFFRwSUFtfe8pfRyiDm3ixQoNEckWvcvoP6QoKZQMhfkHgPzVe",
  "key5": "3m1PkSWp2PYyF3qeJL9mzGEXackijZuC1xWuECPBi37wk6ZLwaqr2DQk5cALshdp5eRtusqKmDmyP1dgWGoirxkJ",
  "key6": "4k5Q62Db13oM18RcZY5Z5SS5s23xwqwEzFh3zSTMq1cfR2koj1A9mcUJuSgBY5WktmjKZUycH4DoDqx5UJ4B3xTv",
  "key7": "2y7vr5GafpmEY7b7sDjAcARxLDY4sGXhm94r2uE8QUvfDwtu8xzQnZpfg2Q26mN8wKKvoiR6ZA6BUTf7CgBrsmkj",
  "key8": "3xzQRr2fMq85cuQV2avxAHcvbh2Qnrs5eCi27st34hqizZJYHzm3dsKkWdzS5rUfuT6jybKPSJditJn32bQH1QiD",
  "key9": "2u2m7eK95oeJVt974XqfLGFz1e4wUukePQQw6Q2U8GNZ7pqTMZWhVuf2NVovmdZbrJPeV3gC8LCNnPmaiKgyd3v6",
  "key10": "23yDmSSy3pVsDGRr5DjQEB2pJfHW7ZmVEkK7J8SktzcaVYX6Pd72jncxYcz84mh8YVM6WRXFfTaasUTstFeTS9sX",
  "key11": "259dNryZWphTrMQgcbRNekXAKYvYwW4qw629j1kciLdvQ2hFQQD1b23YcMStxx7osqkoabtFogFD3VufsrmoHH3v",
  "key12": "MUZUShrK37X8WhPCtbXyH4tXnSw1VNi9U4DXCQ5JQp6VCSphsNR8H6o9C4cnceKLiyev3A3L7qpz6nqHzt92VaT",
  "key13": "38oEDz2K1v59MkrpDAzr4jqqyzYMiamgi9BM9PMfq7CFU1gJyQLTCDtraG2TdD9B9Fj5Wowmd3WXUgqZCGYR9aAX",
  "key14": "3FJcqWLwujLEAKF67LQFX4q3KMPp5vwNcZtJsxJuY4Q5kCzPHji3wZPnrDJGVeWk7iDChZE74mjk9SCdGKqpTHqc",
  "key15": "R3zLAS7JHRy8QqRdU1sdCHKRtt8Eky7wbAi2qm5to2CjJTTzgHD8B3ib41dSMWB71woQgJE2DU3mxhs9zVs3r48",
  "key16": "5xtgvyMPj5Ce9P4UdMWMfjzdKu4bn9qjahU2qa4cyC4ysgjpcy158w3Rq61WW4TrKvQ1oqTQpTPDTzuFWFSh4Pp",
  "key17": "5cQoeFtBq5QfyE2f7zg79Md2pQLobo1qm6ijc1g4prxZpGP82CZR5ETGsA3pNMLWgnkBux9tstZ4ti8ivVpcq8Y6",
  "key18": "2Y8THG8KWCTqqFg2ePwR4hJmrkAccBRZgoRP1ZEDWZ4stKmk5qGRvtFWkHW7UeH5EFcDad4ddR66d32r3qGmVm9g",
  "key19": "4imX7eJxxJLoxHxWppFiduZaCjFiWjWeMqcaNszV9F1X2Km4neiVP6RoCyt7A5H8VRsvJW6jcAqm3Uht6RtuEfF9",
  "key20": "2XzX6ZNGGnx8hyQhATka366pb3uHdgW2KWCkrriGSXw6JYoeNFhTuPGxthwuC62q8sxdFReSPWsqcEZGm6p4oRW7",
  "key21": "4Q98wb6z3aQxQ5JQjiH8j9cLM42zMqGwWBrmHB3E5etbvdd7AeUvsikWSQJXPi6KrAUXviddQz8htNmYqUEFp7eb",
  "key22": "2D2FgAxf9QCNW5eveVnuTaDbss1hB5oKJqXWYgM78mSSeMe523aNh9MLUsxzK8WYKyXkcAiCz79ZDs3jMrHqLsV",
  "key23": "2vKPNDwgrFDgz9cyDzzUSCiguqJkReQN656aDMNv8uWeBrSbpBaYhuLemFSXsstdprvMTsjZk1ZZbXfXDjN37kYA",
  "key24": "45TB8Gp3q8PqqVdd1ZNQdpNQHvGi45N95UJqe9PLRLbuz3dPrnnosXHqpYMoiubpJr8GvHRogzCCG9Duq7FejpvK",
  "key25": "2Yxs1VSnDEQuBgvQfM7i5wh9E3wTgNnt5JXkYQ2KWzmYwMDqi53p9WpHpS3v2NPwTLekqzSKRoML1boBLsWHhb1b",
  "key26": "2NJqNkrH89vT9xakwC1b2M6ZPxn8DWRTfLbQGDE1LML5YDCazy18emdgXN41WCiDKCdMkfBuaqC4AyMqg8zeMbAM",
  "key27": "4pXFFxaB5RTCj4ay1mLU3XXSLN1AodXja1YNXYMPwXsvUPCqdzja2EQpNvUAnQobDTV3rBBWteEKKF4HHwqDKqYt",
  "key28": "2DmQ74CKhxVP5KpqeEZtftDzWPh6oUFXMSPjPajUqiyJyT6Cz5EXns5Rwpuurhp4t5NocSJhNY5Gv3Hk77j1qmNJ",
  "key29": "2CtLvUpucSUmTNynroLzTRzjA8bTYzNsqtPAv7JGCtaFjzEtBVyJ4Vn1sweffD5FbES5HwzvodENfqKcr2u3xaaV",
  "key30": "23qfUht8pSMhHfsy13RaKTSC8p3uP4ctmM9znHVCReEREspeWbB16wzfWg9Fko3V4KYGki3GztxDzJKx1yZ9SE6j",
  "key31": "3LmfH7kTHdsuCnMg8dzCCsHJ4ifDx4pT5ZCA3Kwiu5HgkCaqKFD9W3zr3Pv7nyxatgNDHo6QggCFp2a8w5LbXPsh",
  "key32": "48rUNWmBPQCTHogKcVCC9hE3HmBgkaT93gRuNx6YaJ6VavJuBfC5bsFUM3RoVhcsVW2w4pxZL4yZS4F1KFfLV7j6",
  "key33": "5rDPZKpi4kr14yxp2uKSpzbbGFeNgCf751ymBAqStWSFnhnpQL3QfRbBf2tJyPHfKmcp9JzWdmSqukX8pqKyGvVG"
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
