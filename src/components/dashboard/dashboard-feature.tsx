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
    "46uoKrfDqD3z7U3SzZD7y3GbNVhFMDcwkzgyk2CDJwiYWXgZAAFrux1iNZCUtmMaZeCSn1A9C72TREWfn6YFqASv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "342qHBSYnbPddxHqpUUREhVvKyxfVrn5SA3jyhwcz63REQ5Go1ebZV5XRL71jH7qFFvLe2CTgzt9bBc6NarzaWS5",
  "key1": "349u9UfAfuySsrfQQNwxFYTdVJZ13aNdhGC8W9izZAg7GUZkSqZJNyPSnyqS7qLZCgtGzM8sCKKEtrFvW7AFcQaN",
  "key2": "4uUoaQs2xej1qdBy7XMZhz5pGaCvHKqZGjc11BrubzUffkdYVCAxBrGDFsoBswXF4ghyohx2WUDGe4gha5MUcDro",
  "key3": "2baxvDvr4UNbYbQ9Auhq5i2abM7BhcDtw4MF1HopfwjLrDncnoLrigKrxLPB9XMB4j37YHumqt4cdFucXGy339pZ",
  "key4": "5gX2z6W4h8u6BsTEZCQ8EdmFKByoUPcxfNUvdjda8p3qAYJUnaPB7zbr7Wxvkg6e4aXd3CEEN2KkQeypsE4NPr9Q",
  "key5": "2GsruDqGpi7kEMVkL5WiWQRDFHv5r3ULsvwnE8BV4NaqESw1RqFXjtRweyPSQVcutWaTFFNJjCe5wEbF5uCBPJnT",
  "key6": "5PBoYsikzfa1Q1YPxz6HV4LoCK6KtLLCNSsmedMrkMQHEy4JnhQhQigtUVo7hrrdVXHhjzMP39DGYeGf2t494aA3",
  "key7": "4dvP231rShodsvYRhmsxwsShs2aUptsz9Qqg3x2Sj8fV4TC4FTxKbjHgF7pdbLf9BAbSWsSYoe5o4NszGsKzsVjK",
  "key8": "5m4Bd6KrJq6E9dKs2M4g5ru6ErJ4NufsE1b2C2MGjVYPYQGjDGtSSUX2couZpHHggh6FGvGfiKJkXkEg4B6u67tT",
  "key9": "5CD9PJutVAJnJEfV5ffiDzQUGPZ1qBsvmBoxnVmYLnfX7AsJ1YSSeXmHCVhEDkMjmap9p28PvMXG1VuFAWFyhZPG",
  "key10": "ULdNKCTFpykV7GVUXV6kQkQ56CouT9p3jrNafQSGVAvcD1TpkaHQJ2d7pXf1kZo4W4a9GqNMgf91mwgpeVQzLPG",
  "key11": "41M91zfR1kv8gAKfMxE9NokYU3VRMBh61KrEyd3iz7fdKcgzAHudcoH3S8k22sFgZGkeJUEBsA9FgnMEwjoXiwRb",
  "key12": "4GvyMkbfcGFJVjCtZ6Cje8UvfRfFhT1DQeC5mqisjUJLNNKrbtfv6akTPn2cQcA3hEm4poXw8g1GQhCLFkM2V2yG",
  "key13": "3DEecaknTW34nyUSVBAuBBZtEuPK9C9jXiJtc6Hni98oie7qXufwPPBFQcyT9md32pQKgBS495RvArG2k9BHHHoS",
  "key14": "5gLjDxu5Scdbnw3aTpt5A2Xraok2Bgs7Ej1w6WEQ9evFNR92jvverUVYZS73aWpPPMj4A1HkGivo2EeKJPHkJDbE",
  "key15": "5cGxf6ZmXQnGn3tJ9i1zEQV5WA9eV1baLnsYbCwsvqWxmxVecfJ5KyuufK33LooZDmgXTm8cZ29ypeWD2mm9YmiX",
  "key16": "2RZBPKnMos3h5FAicnMvWccyGSB39cvmpzhQbMnH7132JVSgBo3R8nQNEayvi5CAPuvV61zyVLpRaRo8z2CrLG44",
  "key17": "2jYCCA4o9YSWso2ojyThqU7G2BKk34hmKdvLewFHyHU3i6vYMmYzN7uSn6reMjaSd7dDpjqxPDJHCRotuF4KeJHe",
  "key18": "2qnYpwwQEhCLqaxqMVF4uM5EhwgYWKYxHnVZm6ykpNGgbcRurZvHmM61AEGJe9ddZqAYaBLsrLYPhxVjYJRrkHXy",
  "key19": "4LpU2Xrk7vz6RxVREk7ZkrcN7Da6GdXULS27UJHG2NBZwYewjpN2Ub3wDii3w82zjYpqXn6ehACDERmcv7YKnTi2",
  "key20": "4xH6pQmuKemUgic7uVa8Kwms6pNgSTWP692CC2HUye81VmdqoAUSd27hy9Lk12SjF6TSNRbcgTUF1HnxfW66V1Pw",
  "key21": "2HgADjwczgR3P42MZb8D2tU8mUz3Po4rvBjndoaY9L2AwVeWDNio4t4B9Rutfgd6arnHYct4Du9QWiQ1fMr5sknJ",
  "key22": "3C93i9gBsfmAuceAnYr4tRCpz9kZQgvQXwvP9A6NQNNJ3BcUXw88qUpzzDfKGpnVvieiN6bJCnu68XNTKset5uug",
  "key23": "3A5MeLUN1cbowH7NiSBSPsegTALFT5HSKd4NXzCfc8xTK7uKmeJLsThqsxoETt5V45gqqUTNkS8sC1stScg5x49C",
  "key24": "5Sw59RAnrXAXRkaUdBf5S7EsrJ4W4eM53k1qBToZZdTv5mujwYFtUKyM8DDiooWTg9P9eyTpaphwS8ejyLZeWdMo",
  "key25": "4wgiH3U9TwTvHikDZL5ib7s2EKBrmFECfKrh5T6cSv9prkPvMPwzRD7CBecMgCsk2hP3TFRLdfYyRiDsGfkP3AbE",
  "key26": "2Xb3FGzZYJSU7z46ncQJLBb7fJy2dj8F5L3WLpibuEorLp8pjcXA4tqrPLHv2T3GaRa91qdsU59qfWq7atHfnNPo",
  "key27": "2x3fPgFHsU4QEiZ8ubPjrxTBgQ5SZWrjf2ofc488eP73Uj7VLoqyWRoVWR3WYJnu4nfzFzXd4zidVvE7xa8b82zS",
  "key28": "3ubWUvusgH7Lewi33N3GuACVC77YgN4tZaAQ5aJhWueznJm9k5cj4Cgmsgg5vfafc2tUJaguMrnhzaPksHL5p2xG",
  "key29": "2Qy6VRN93ukvdNVWiY6qAXQ2ZvwUjzYLkW1Wp76FBDshYtDdFhdUztWu9QyRCtLzBZLRZALn9S75FW8d52CtbdM1",
  "key30": "4aePDST2hPMdavxxp5ysFArWZQZGcuTHp8nxJmo4pPHrcTgLrNXeutHidgNTVbTR8XVcVz5TveWwyCgpV35kYTjs",
  "key31": "2kvdHhzC4Xgekc34mDaTddtThDTosWDGWuDTZ4TCH2VeHHw4FJ68kcQWLc9L94wGZc7QbjdBmNdy7Ze9GP2GR6Ey",
  "key32": "48UpL3Sa47SxwdiDKqce2zXMndyfq79g7roWi2yGV3QbT8sAN6kgBKuUGaDxZp9ie2Hz5uLjgBtKwBEqKuJakSd3",
  "key33": "fEieKNAkxroqPw8GCKZThkmRYq1KFp4kEHKV2GWudjdoUB6inruRzSoXJWHNCREJbfwqQhuUmahsUSzzrNGCxhx"
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
