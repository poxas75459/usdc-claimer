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
    "3SdR3TEr5bQSbXpLL3JQmUpy4k4x8AdrCU9SkYGoQBJriXpJ98pXZruanJ8aiqLubR6qwmirv2QLpF7XqSJ3j4X7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PHyXsHiGM8XJNnXVsvkmRvH6UuGDYbv8HPqQmZs3nwLSQz1wQT5tfFuWwHbasjBWA2NbUWfUqhVnDXZrF1regh1",
  "key1": "5AcgayaoRePWgW5oM2gWSzqyin4kL7gxuWr5VCNR9D7ekuAsNvTGBjFZbKQZWHymC9bp3jsrXuDSRNLnRAeokSj5",
  "key2": "4L32fdZkEv2cSSDBSDH4CJozKoHoRncWreaqvYFZCb3jEGbeupb2K1gWPvGPeLbCYW5tEyhSBZnynZjg3RRhzLv1",
  "key3": "2Ln44i9Xxi8odkmLmEPsycXttQpMMa5uVz1UB3FCAuzmg9rUrpAFJr77jYBkcmw9PLaTx888XVkoWcwbEDorpUH5",
  "key4": "5VDqQZW5MojPpGNRuBZ2kziVVHCXBexGDfypP9KAhMsHqisN8QuAmeonMDRVfpHD2aYgRWivKQLQJAJdwaeqsBBs",
  "key5": "drjH8yW3EJ4iKP4ixymD5r72NHst7tRztGVTfr1jGvZnnMz6Rt9uHPF3RTUsRH61t6rJ17CH5Vg9hV3CPvVKSQX",
  "key6": "27QvBKmobDYDwZhn7gVCtix4PRGLqSQE9eU6LmHMUPQB88e7AncWqfsjgddnQQdYhN5nDbT2mfFZPY3uYxvzt4hs",
  "key7": "5j2o2KyMzusGbvouo2VxmouGWTKagLn3LDzb53zaf4uMgCxLTH9GGbUsvm8HELwt2ZR1XC3e3bRfry3Dt6WWF47o",
  "key8": "2QFhhFrEthCjEXQG7FAJg4NZFtUrHSRZspTEmyMmrfTy5eprjWmC1p36d6T3GockG9BRWoxtYjH31Mmi4V11zaAW",
  "key9": "ox61KoDR4fidWg5tqWs3gRPhMktp48AeuCHhJqJkz5qN4iySoXrJu84XDfSvbiJvrmmZj9E35k6DwQe1WKrBayb",
  "key10": "5Z651ebaEKYhgCcowtEnYanMos6dhayTLLHJExfrV3En1rABdPVWKJUVcwMGq8XrtGfcPKQaoUxDan54XjzrMV8Q",
  "key11": "4vQVDghK4Z1FdnAdCtznJcFd2hR4gsD98uzqnkZEsnbznUFMeFm85x9npP1VvQyNUW2D3ZCKuj4sW8JfzBic3uUi",
  "key12": "4fx5H6tJ53GhMWwVA6kh4JggrruYV6docQg5dcr6VrmsTkxqdUXf5M7wcDhmteDepRbqusbjpPSVs1TDfhjbmCK3",
  "key13": "qh2RrvcSYEest9Z1ra7xJRDnETHu1tUYAXeFLW9Qav2fpTx91ZZh8ottyLXtkXxGe1gECKRa9TQKGtxLk8wxShw",
  "key14": "51tKBvHXywGgKPjeqRhFhggxkHX2gejucDWaYAobYud8qf6m5CBm3wJmmvgXN9C289Y1riPcZs8Vmot4p6Uq93HU",
  "key15": "5Ppi8sLFReaeNrQMR2hdqcbDB4tUtQHDAZt73u3bkLgvNNnWd2xF4C6CvQbhPzZAWSf2qrcqMUrgnED96kz6eBwS",
  "key16": "4HwZ4sxg1Rs8fESGn82Bos4VNiPAckVsW59BenW4UkLiLQE9fopiJiggL675u1LbrNgqhtS1PhDeY7tbi7uqVp8b",
  "key17": "bNkRCASYcFBGJrdzAFt7bkRe6uJy6hV5uNsbdYkvJaNsrc1BvrZWChosFgaHeeBsoegvPcngwTp42g39Gt9yhS6",
  "key18": "4V49Zasn2rp3Gf8rAteBjgNYP6YHRGE3YeiaaC9WxnV8dyhvp6PKu4hvzWmiCM4TYEMMCgkSFY5akBC8b8mojEQT",
  "key19": "VSQ5rTqxyHp5LUGufkhw6uDLuVmqJPnnebatojTcNC6abhGnSWJsBnrJiFRB3B2uHWxywfriHo1UkuVrPWgW5GZ",
  "key20": "5RmZWNWJtPGSdfYdJv4G8rpYJxxiWhKxaskXDwoRppnUzJ1j42J7MzEBfW9BeQho8rf8VowFcnTdQPxX1Eqf7skR",
  "key21": "2Xrj3uZUXV6Way592An3xYebCrf6ybYDyTyW9jATmAPfV6Eoso9fPGG3BLEAjCbwEUtZ31eNDr3xi2bs3YVQvUqM",
  "key22": "WJ9mdDA8nQHZkccd2SyRBxGco3zKZQiSEWjDnY6qvxx2pfzqKCMshS7SjMjpWpN64MNfwFwD6TguAnqFJ8ghjwK",
  "key23": "3ez8S9EBTLviTNjmkTj4tcs1uLxvKQ1ieYSRjZ13CH6WoMwQnA9TW9FcadzzTwgB773r31ZLMoeHkE4MBe1KAB27",
  "key24": "22bqtsf6maZLv5uwsEXNjpjT7QXUuQSSJbrpxg89NSQvQqZ33VP8xoCRmpVsmcDhmwxomMTJ9BWafoM51D9GddKb",
  "key25": "66pwuscVmcZP4E1zxRBkjxxkyjdVoR5kTR8bdPxesRRd2jbWJci8iBsabrpJYKL5YV7gKXzJS4PfPRsCA4wzerMT",
  "key26": "5g7TzFneBQY377UwaMWxZ7NdjhSxv5ZM5S7UskepczmHEaRkR539PjDYYYTt6TudLesp3jraRDgJKXvEVgrfnFFo",
  "key27": "Hv5bwjo81uY7U178thafuzyryfkSAtVH8bkTh5E8MqPxprkNyWVCVrizpWe4PvHUKVxNpsvTwhXvCswm1T73CF1"
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
