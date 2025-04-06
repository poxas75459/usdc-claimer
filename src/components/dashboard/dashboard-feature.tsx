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
    "4DpK6sME8fLgWCgsquvePxz5i2cNcGe53Z2DnZehLJjbowPb3R2EoXFsNxs1WupT22xG8oKt3J7RsBLWSZoAkA2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64SXdPtLcXwBPBcXN645Qbhcqgiu4Kp5bmGqKfkd9snsZNKeSQW71FbkdhL3Szt2SguBsUXHaEYcbjp2BCBSeaWX",
  "key1": "3HC9DkH68cvysnm5v3YZ2owoiwRMitjMsXjCZ1AfM1k4FeqTYT2m2QqYKnVbnj57cY6ePpfRZhoiDHDvSzAtPUFB",
  "key2": "QS8o2ioD4vE7ueRh5xdEMWHe2vjnSC5DtqTR3fsQbvymACYwPQigrm8yTGnxqFwDcMM3M3aETiMWFeaDt3Fjb6A",
  "key3": "4fXqb4GUhQGADeHcEQSv65bgQQVQPPkb9pozG57Q1gJUuC8EiRDdD8DXHYPBpYonpfHXRW3FtHkw3FafXhn6KtUo",
  "key4": "mMvhv9MriAd2cZK72FEaRcX1vTw4pZcq99EVLr8Vtd9WAw2bRagEeN4C2xKHNFA2ZFuk7nXTPHXPodzWY7Dg8rM",
  "key5": "3VAzPn3MqUk7EUqrP384gPhngJgAyG8frVFErM94ynNjDQCnCfMb3g5no6Vc8r4YGxRurgUvazo2zARyCSQgfxra",
  "key6": "yR3KSY2dqgVHgKUsWx2ef1ATVFpVg55LesS8of4WTUvGYtfkkXgADiUtyty9rALNrdmCpTswGKaQgqQEEDcpFwB",
  "key7": "5f4WapejuS6eMriBWqg2bzi6kdfwEs9us1CsF8VLdgGQ3Y8xUybam1bD4zW1oDSz3NaJwnTj7XJcKh5gCGum2NZc",
  "key8": "2sNLsfVmRDjp9yLsFGhUKEj6fNHtnJmPziu6FkyqSSAHGf4VJCRHwwYTZaAwSfiLbRRfc5xd4G1mpFMGjCNV5SvH",
  "key9": "5aujiXiMp8ipF5LfWQwV2P8WQeK51EtWGsd3Tpa4WkEVip9v5js5aKSebkcZvHh2x5QVnWHNqrbqt8JSLCvQnpiV",
  "key10": "4Pa1ZiSRAdui13KvfJpw6nZgnYv6fuRk282tCcvwByMCGTH2WpsuApoMkRbApbVHYMSWwS5r8AN9Q9mYeARXRi6L",
  "key11": "5Kq1r5kpxY4TmKedbzC5HgSHK7eWnaPjU7cndmWX67vjpEEFcFrYtjVi65gUY53FHG1rLdRRsf2kM3nvU254VPDu",
  "key12": "3ASE1fbbmeq3ExWsTYmhpNZUzn73p4HWBQVEaiijdaWaKoEDbp1n6SA7STDvgzedCuE3KNva9z5ukw719k2PHWjz",
  "key13": "53MBwxGT8pdW11VW7niUcFFbycwXdjKJ194ojzeGpNBnJBHJ1hVHNd3VHVfxGoKbva5dByEq7cGzaeCX5vf9Qzzq",
  "key14": "47NYNAckV6bRUxFzKEoU4HT4N3pbV3tssZpFR58baW3GjV8UDxbLUg7hVV6hZp8ENs2SgAS3nhNCypn7kLgfHW9s",
  "key15": "3G5KH933XnyNzqt8qkLfuiB8RiZVaXndwNxJLvDjYJowGdmXj2ioynZ8XhQZdX5QmbQf12c1TWKgNA4QQsMNVVhc",
  "key16": "4XgQ8aGqYfEXpRfE7LkN3Pi8ArZrsK2acriKGsssu9No8fEjmD6oVfG3CPpoY9BqVEP6xZNZhkBMw7qDgX5GbJei",
  "key17": "3LYHpuf4oaoiDTuxsZsDmQWRMnEUP6DL93QncGD6abuGLRukgxZBE5rtSC7nuP7t8uuPmN7fPFuTAXfgWa3H2HzX",
  "key18": "seybLgDzrkZRh3A6F8GxBZpWioXwJpihb5YeLi96nGbW5Gd8hstATPrFSRtUPaMU4PKdLkq9rvZ2SjfXsdpyahw",
  "key19": "2cPkYWtxZhWy4s1X9K8cffxcCmqKP6PFTTCNAUovfw6GJhsc4X9MrNmoQ5tvAyFimZ62KTqqZk98hwuavNNaB2df",
  "key20": "2KnCxDnzGMtvEhRvXjJNoi5XSuHFfmBNi7pm5Mrv8N1UyZkXPTiETyYSm3LxuvXi1ARWErvsrWLBUsvumnpavB7m",
  "key21": "2PPtVLdCYv99P5kDT8YvU9zH3wAmQC1YSdzq9zKSvxcLXDJdV6hGXuy3NmFDduCGbxTKvASCy6vZtVxhvANfscy4",
  "key22": "2mhnv5dU6WMZsLCrq4cwBSK5UGxsGbbAPYEHnSnbZqpJphWaXuauXA5hL1tuyVLfUdgPid2Eb7LvAAvUdJK8GQed",
  "key23": "5KPJgZK3a9stEMZNZccYBATzt9woPdE7BtAZ8Qvr3RoejUVqXWz1HtUH35HnSNF35UbFKYenHNgMrimtGMQ5v1mG",
  "key24": "54gvFyXSne4bLKpKpJ4x9iR8ZhwqJCbVpMt1Gg9uXddrJeWtwwLpCJ2u4yPQ8KKAmYjvd4QCTzi2tgareordBYWM",
  "key25": "rmNgpCPz8cYXdbEBuWMY3q6kr1GgsFfPBMnYCWWzwpoxw8RCddwnFgo2xVXSHNC8xybG1tVLvgcbyT8GRiSPUtC",
  "key26": "gTADmmKk1ccN1abjjFyqmxE9esy9Nk2xrXDvLUYUaaBogqJT6E67UGhtytciQP4UkLMQ39PuG5poH9LbKUAWN6M",
  "key27": "4WscgzUfkCSG1qq18XFgRpngqB7k3Z7U51ZCZgsAnxNrV8VVJx46p4VwYw8bqoiSqD2zQHTBGbmaTLBuYvtvz1Lu",
  "key28": "4R4cUvQAzz7wDFZuvoa75nr6rTGi9NySKgmpmy3mfpKfuVJjP8JpKnuqvVSq8Kx29L1FCRSJTYwnGnZMREpHmzYC",
  "key29": "3KpvKmrBLxMXF8UjBbK6qBsbwGRSbupMzgDqEs2WWgYGrZeqFFyFP4i2mdHEtVCi9pjadvbZUJcnXzQr2hNsEGiY",
  "key30": "23no63GqN8ZnSbBwy11V8ipM4UpK86SNUNuxKceoCLz2Pb6hCtJbQp3KxQkyUxsf1gJ3aAdac1Hcnj7Qvgowbcst"
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
