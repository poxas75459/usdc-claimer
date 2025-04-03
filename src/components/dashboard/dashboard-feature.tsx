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
    "63uZtYnZNTaVSXt8i98xjWiUWBPfZFagCZvdYrLrP6Fe7C2MKswWvvGTSbBB2QjLoNd2v7b7McwmJ86xXjJDXdHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K7odvE5a45MGgFo1hzSazqhb24699GQ2ZEzzXA3w4HvW3Pw5c3XhgmtaEZGWvferZeYBA4oaZURQgs54eP7kh1S",
  "key1": "4FXm74M9oynMq2nikE8xHfJvxpA4xT2AsL5tVG1o7xY89ZVSAM6scEe4qYHen8W59srxrp9Q6Rvjn3F18FFVpHUS",
  "key2": "3NTZU81XvAbapq7frXRhhymCyL4ZVxNtX79zKcFwLX5cJGPTEeijUYxRcKmR1FUtjzs1jzTFdY9MrQyDtqHuxSsP",
  "key3": "4xJ99MhQbJmZZ1NJPbmCfvamAtd7phfhrAEz66WpPV7o4qR8zhFSgUBAANkrfytQYbKm1wnvkJVT9541f9CCNee9",
  "key4": "s7BKssqJR5rAVJaMpWSozZ78txUNtGa7vLA2grzUdWcmgUp3k7Kk9MyGxEuE8oogKWAEbRCbVg1Tdj5rMqAuPXW",
  "key5": "2Dn4VjXmi8KsNmLhx3wxYmK8CazpukoUoLff9RY9X7NJAwCxkFeaYWJXybyeHD9WnvpfQqe5sKvnYgW1dZpGwBA6",
  "key6": "2knrYxrtNQRX7bAXFNbegzntv6haffjksywTmEbvut4jguutiWRWUBD7s9ENcTatREjMoHd1v9R6BYfWyw86GE92",
  "key7": "Z5wC1Z21Sn9A1d67meutXxXWtbRatmMRiCmc3SqA9ijw1y3AKmde7PvdQjzuuyJ5QWHUXEY858Zei6XX2TPpmJi",
  "key8": "5hiqmpVn5BcwW6LBBZ2md7D5cSqbHVqEJu7Cm645Df34JEzrRAvgtdtk6taS3vPSft62uEg7ixceV52swmqs5BPC",
  "key9": "32fTwmDzUpMsHnUHARiHmtUG2a2VTPNeCsoLrYPCMaGmZdRxXtJG7mifsFwGHh63jTasZXBYzNXdXGbFMx4qsHfF",
  "key10": "3nzemhYdt6w2SSF5eu8NNAHB5Kkraf7RpTLL43B4xyeRasLSLFwEQDXqJ1LbyR4h2MJTsuV1dkvihq4mnW7iyecG",
  "key11": "4sGitCHFQWMnnDVHNQghxYspPX5SFh1EMYRx3bMH73oZijHyTJqPkazKtS5NkHHesvYF1wWSAcokiBtuKf671xoq",
  "key12": "5aj3fRCJzeV3zwk1dRFdGx1RN1kfWwArwibxDrn8s2LSorQXNKQyBVVW4kKpNrdBN6i1buBhcTZdaxojdb8QLmzB",
  "key13": "3YDdEoLmPHuV86xGdmK1dDFmZuuPJbZ3N1GrnUaH3a3uLYU4pnUF3p9aRbmjiEaEJroyAxkLXxe6knvmaQXxG1tB",
  "key14": "j7HGBpKLihSAk9uiDTeTBRgJ6vSnsp5cNZAFxSdyXk32GgjPEQXPKv4wJZKAPQ7NkjwhJm3ak5p5yf3CTHrwLe8",
  "key15": "6xYHeieLNHvPSczwq434SS8SZuYhZnjkYJ4ssQFd25EaGJbXuxVjRx2J2xCmqrceF1TevDvyQ13NhAo3pJrykFN",
  "key16": "3XQG6TCb1QsXks1hgPcEW5omcsgA8usrQo55smnpaSmvasMvUH6SVNj3ivHjJtKRowBcf3eP2AeFgmHNhYvBkJhg",
  "key17": "2w7syuTia5TQHSJeS6fhPAdEHQgRmQ1Gj8nfcK2omnyS8qskZ8sgybNp5RmvBCJiQtL22wimcbKzRiRsZrqpSP2u",
  "key18": "Jdu1nZatPgwG8vK86asxNM6UJRVQgr1SDxKZ1nScj4mnHywpcKqKfxqMK3HwsPaVy8HMaR5otogkrQcZ5wa1RNy",
  "key19": "5WsoMew9n7LLuKHSFiKfQSJSdo1X1g7xGe1bRqo8JYfc7TB3BuQRugcj5s9grFnEkd7HoU1JwN6gCUAmx5X2qgnu",
  "key20": "2PvKDPEsKudUWfoYdjVyWUR8h1gwNyvzVDpThTYJLR1xG8MgCbDHvzQvYujy6W4WPGaRnt5N6bVzygVxzHmGRtPA",
  "key21": "3mCeCWHqbbxvznbaGt9ffTU9Ba19Jh6ro4M99sW5SqvitD3CGMZP766TsPpa1eER2qRC5HFQEXaHrxgnkWeAbYAC",
  "key22": "2cFX2BmC5QhKVPUfNAy6SU9zuevkHRcHX93SHHwy4Tvy3uGyAna8G2Fep1N2GWHgFUjLicPHhDs4ngpk7a6Cjh5X",
  "key23": "64ZREqa1PJ9MraQ1tVZ8eMs2nreE7G5vVpKt7uFBkYmEYDoD5uZ2dZhzBmB5fZgR5Q1cu1VHNtPbeafEqGUhJy1o",
  "key24": "4PzZwjd7gz6VvBfL37osAKatGjJw32Y33Xo45xx3pxyYWtthTzXWVv13Kq27Y7ckobkL1UHJn6sTEG4tEAcRuUqc",
  "key25": "5cbjhPnssTLiaFYfTN5LmjpRYGWWo7bQAjTmxeeCLRX8tTGC3it687NhTGfwivShbSbXRqsv3guq93ut1E6D4MdL",
  "key26": "3XoGGJqQdpM3otKBetvKUea9g2VuSTniELrHQkfayVEs29JRiVfi9wVFtY7B38MH8xP3EnPd5kcZbQ5o5PpAE5eL",
  "key27": "VhXeVDVzW63US5gD9DrAjoZKjzA44zgNkF8GJkkAi9cuKbpcHhnXBRE2NoGCzXKY8Bwcp4AEhtfLs4hfqfwr1kV",
  "key28": "3cJcV8wqs9avsanANwD16UsJzCiUjNYobctRVFhisQdsah2ZBqhxjSYy4XxNLKskYH5cXqu3bvws63Y6fCHpyP8i",
  "key29": "r23WAEfF5H9rQ5AN1eiLEaq2YguEHLY5aPwJ5S6xJgveYRaCHa1HvFhvbcBveM8kmbGNfZSFgyVKRkKysEzoQ5M"
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
