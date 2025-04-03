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
    "56UUaWCFyinS67HTK4Zr3U9QP73jDWn2VWGrceWrmunCcihTbvp3Q17ouGpcCvYGNpofMrDY7pUnqRWmh8CXeXpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44fCiPmfpbeyu1UttAfzGPDVgfgqozTJcrcnP29CNn4g7C8cvwmq63WKvBAtvSdqZcGiGmQdv35XgqXNQ6jRyzDH",
  "key1": "4wFavcpqJQaux2237GJe2i7Q57PjY7TNzeSf8nXm94cLXZAihZ4vg5wkzH91whsu7YHqSwSazC8DAh9QyaExcLvT",
  "key2": "5Uy7kMzbRgk4EkrxsPSTv9Q1rQo7qGu5ADCSG2aueNgVf2vXfWmnoRUwSQiD2Bu8dtatk28EqxCor5PR63thPRYe",
  "key3": "58K4nnY426oQcdxLb3fpJMvKjVS54PxFj4P7XCGk9wgw2ydmt2BJc2DYwts6XiZdAghWVBZx6aF3d9C2bBM1SEDy",
  "key4": "GgGA9Wqu7Pauy1PnRYEPgzFB6Gf4ihWQjDaC3RFXdVL2ij2iACe2ijtMj8CogfLy9vNxcB9c5N1fo6WSqugvqC8",
  "key5": "5P3YZrg9acFpM7KoQEPRk1hvGUu4dm73Rb62FpJ75W1NTtJHZSfBnKJLH3VELW3EYg3F69j1LCD7SLo7SXkntei5",
  "key6": "2y4tC1CuUKiRSjUd2ckjUAkYmmNbL9MUprAHoFoxAGEzwjf6sk7aXWhFBn7ZuAPNPVH9a8hrdML8k8sM7Kboi3Q",
  "key7": "4QMWXtY2Qw3FBERuNib7YmaaMYVAb85sUqEMCTiEj6L5A6PHsJHwGzqGSDtWwJ5pcbHPPVmWijnBHhgFp1TqYaWJ",
  "key8": "4k3DwfPk4ig2xn6uE3mtJG7p3fWWXezKaYcuiuBBC7anMUybJSQq7AoGRADkgStQdJDY8MN4h1CePfxUS3vF9GPY",
  "key9": "28AyLfhzhwfQZnHo8LwqyaeXLxitGMkbSresmFrC8tvhmyjeAJvwAPcGDAj7hGwkNPUE1vLvXcPxoBmHziQTXfcN",
  "key10": "3ACZPidhnCXzQxtGDZ8A5gRQd4RCXJ3ugNHxWNLo3nwLkBMcNt4D29tEf8p5SpmXA6UjKC42yVLTfYxwU1ZWPFoE",
  "key11": "4R8ADs6n17aNHuBiQmNMiVyuFifTMsCfxP5Z3v2vYY7i2WzNNyAVAAaUYVr5PVojPMYs3T7YGCv9vwAANfxxUB4v",
  "key12": "LeptjLjAs36rQiPr4t2GbNkUMyLs1kDLnFmPFUFF6Syvag7gwpdKHLhMC7BkwYHbYLLfBjXry2iPfBsWGLXsic5",
  "key13": "2ig9skG87nXYoNAdv1gBRX94Qc5Z2UWpRaw1kg321qgmkBeHB6Kuhjw561yi9nR7hnBb4HJuqUfSNaoz7p45H8PH",
  "key14": "31HTwDScAq4kN9KFjX1Ls5zd1b8w5zYRBQbMrS3o5Jr44jMKrk7J3CwkYmV714Tva5RUZDvxQdXY2tJh52ajXC7b",
  "key15": "5ZgtVuTeE7nZW5SjcbFfQZnijLp3A2isr8DBHtWDdQiEtLnWaPKfLCDjrt7EEXkUPDd5YQEBhJUG1VgtnjtPcdsK",
  "key16": "2ZhGeKWcqyJpTPyqvyDUTnNyy2CLM9wqpAwdCqoQaJ35oxyNSF94Qp2reeMQw7p9EdqDQBBPLdhghBk7bacBMfA7",
  "key17": "4ea5xKKWkXXGnM2mGm3aiZ8syZQmHvRGMov1AQnUK9CmQfULEGDV8GAcB6QePdnAZasvVvac1Te7GsQjRa8bR3AT",
  "key18": "31XP5rWtuRMpYf1nNkZYb1RBVVrFxrXbP35C1QYzq6ReYqVvFe8GSdWDPmF9PQ4yHfmo9Eer29AWqABmZUAYoPHK",
  "key19": "3trETLtB7t65D9S2gSBMUxryk8WjUdoYoLjrtqfMLqeV2ULQKMhUhYynp2Y15fpF7kZp5JerkroLbfBj3euaUV1u",
  "key20": "3yeXd61LqkcyQJPJujbDU15TUDRZLfEer4RhmDqo49Gmi6uzY9426pKpw7ckyJEmr8ALUL8qMXBfmyd7BV53AxY6",
  "key21": "4hN2Tcy9XXKQWCqQHbf4srtjdEZkBWnADNYdtwwJS3S91U7Uqjc9fmJ3p6FvwonQ44NJQueGoyBfEmK1cqUAcTEj",
  "key22": "2JLS9XBrEswnv8V5fk8trKZs4bJaZhVVBcfk5UuUuKETf3Kp3BoKQMw2yijLvwhWJhGVLxk93EgyrxDNRa9Y4kUP",
  "key23": "2zKFVDXgPFNTqc9ggHXPsfqCzNNuzxj8qsCAFFnZx2wZGbTEy9B2UgErjue8ySwwtnSo1eyBCJbNePnP9VroVZFp",
  "key24": "2kjyvKbCgkgfRFtj6XJK6YLZHo56QPTvVM97zsjQFqFMXDHWQQCSvkLqzzbjuJMBC3AzUrRSB6uwybeP8co32QoJ",
  "key25": "gkXabLbLAaMvebj5rmywVLbm2ztKLpuiLgbvVKo7gucGSns4cUYWRZatbZPWn8MEjTeTSZL9B3k6kjZ8nhEpaX1",
  "key26": "2keQTyk6zBCTkdbxA5RN8YP5zHudJGjnk4mCYn6Fr3Xy1KiobR7sQjghLrLcyzw7WQFyk9dSNLQnzEuZ6BM47MT2",
  "key27": "5UBCvxTjJANjktJFQ7P4shm8WQXixRkKQBR6khmhyJ8TWD5C9w8pQp4b2iEeWzzQDnnLrMfi1kZkzQgZLsyELKPX",
  "key28": "2HH3Xau9aL9S4fgxYgSUDeVFh14A1RnjZSo1DJCzop3Ljwr5JV436hhwwu92S8QftbLJkT1BXA9YgFv7e1hCUyVr",
  "key29": "aL1apWj7aAP59YQ4FhgktyoYLLxdoQswNBXJ3M56eQRVTLhdGicpALNRjZCmPpt9cDknSWM1UuusEsRpZrfHS1D",
  "key30": "3CxNUGVm8mdkeqyQqfLMyz8uo6kLb1xshre1VMuy3KNwXX51k7ph7ncRBETSaYEBbvgmBHKSNwNHrEuxiCi6nWrt",
  "key31": "voqHERysXEGNERfXfXK6NM5oFSGe8fQJ93nKsAgokvohw7mDGSAyApBJcj1njzm4kEBVTZNuxaqmCMTaQrUwdtq"
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
