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
    "2jc7pp3EWRntooXrTcw6mgaygAszrE2Kky3XSc69mDx4S3Bx2UiCGJVWVGmh1WBb8sVKFTF8vfuhSMXHqG49X6Wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zSo8rYoimHDPHCxbjwQ2dXdnzqEYdWg9jqHe9D8rZfaJqnXQDnLXC2MmqFgjT5p5RQLG6npeUCcNqrPgfYUkPsN",
  "key1": "3ZcFqBxudh99QPazNUF9vHTBB2yhafTtcgVPZ9zShcG9oH6ooqZrMR1faQLD9gEyEuU12nP93DBoL97Hk7TFWaX",
  "key2": "4nDCJTERXBdp89gpWK8k6mYkVNMb2UUvCoioWVgDqBDyNpmXWpzSX6E9b8LtwNtgsyrVzDSGdtY8Hqr6JWdzvqYL",
  "key3": "4MqaEF71BtpfTSSYCW99yZvKnMqn8832HkWHBnM8WaRV43RMJ6NVfgTKSkJjNMzQbR3pyzFfYaqVidpnSsTH3tMF",
  "key4": "3BsyYh9uiYy84cnLoeqPwJVnhZK7taxr4Sztx8eC9pEbC35jrRnBjXPh4tyJamGjKABjaA1txQjufJGubv78Vbu2",
  "key5": "eDpHCfzN6eBBZb2LCkDRMoEassjLQxkz453kjxq6Z7MLmc7feeCVwC7b9mpoquiqWGyQRXUmXyQWUG7azWnbmnB",
  "key6": "4MYxxJmqvTkWK7kZMo74hhf3NnfGDqWzx8hJ9FjtMvxgqvaKXU8ru8i9vFjEiZJP5t3yrzE5taBAQSCF2HZ5CmxX",
  "key7": "3F4zmm9EdLtyzpVyjizxWxbfovN7zEZZE6xjPxbu1Br9jvfF1MwMT1oh9X6UjSGTRCmjqgKTGob9xK9u5qBRGLjr",
  "key8": "3ka2X7yXMArp8CHmGY19Z4sp2ny18gKKgpeA3eXq7ocrXhi5iyAmAucBLEyap3S8iRzMomR1KPX3NC77j3cD7TfC",
  "key9": "YzYCRsX9z7uwLd9EJZvyY6Dimnp6AwQBtr57sRfhFhQ233JHGunzRWwnyAn794UMtEHJrBXw4AKsLPNEzgMAjYr",
  "key10": "3Rb16mcgHSih4SfsCRJoZMAQRPAdakPbbgrbrJuVNQcJ2BrrsUu4bzcQF3WqmkqBqBN8HyxfpajZdsh3oqsAB6kq",
  "key11": "5cxfKK254S4yh4kuYY7VtKNWDHtdz86hKtJSQMZk7o9scAgJ2JUVjJR9c8ALsPdSsB4qCN6UjoyrfWYinCRGNbiY",
  "key12": "2NQqnmBe5CdwhZPUzbj1sya6agqrZfK2b36jAVYVk1k1Xbkvec5Kks3L1pMbbEpeaUousiPrkiXeX8B6URGhctpJ",
  "key13": "5AEbmpJzEMGbBDqieTo3JpEqKqL6FAB2VGBpe3eaqLQ3ygDQdt5x51pZi388e2RFUszZ1abRDtZgGSWR1XrtbafQ",
  "key14": "5nifSUzsfnXLbzE1j1q87yaFgeQKvnCPhHVBbC5xH93a9yNc3VNAdo7iTpc8quJEGz7JkjjeauZfoMzfjH8NiCWA",
  "key15": "2nm2yWoMVwFT3BephuqGNWtmYvTs4Ldh5nR5FPDHPtJ26Wuj75TBKVuMrkdrg7n6hhLnEx7XkG2iPY52kNU8GLY6",
  "key16": "3FuabSMekgX4qhvb9HJxn7mXwEfNh7WmRGtCZwdN6LkSBEkzvrFLx2oiBZvRSsXmz6hXhb5dPiXgyXfZoP4j8U9b",
  "key17": "5uL4mcN2dHVoRQQ8ErqKRZWUYEPKxnVqjGRquCYGWmzabFjMH23MLFrKc6rv4e2QuJnNCdRTrs92yzd72p2DDYud",
  "key18": "awdvzsoYT8WiBs3tAvMM9QySy38NL8Tg8jMys2DZLsiuiaHwULHFEGMdi8Pj2As3RLk9ptpHDKLrekK1GZjRxcH",
  "key19": "34wzxKttH2P8NatecN4F2wJz8kyQfPu5BLLWfbKpHSCf3cDMLJisEgbjWw7baxYuyAJnX2jZ6NLmU8nV22UxoneH",
  "key20": "3aopGDCGmRtNeAyx2j41QxE3fe4spAXxz6RNz6a16ef719kq1tZ3QVqmRTzzotJXS9AVyV6rf9ooNhdX5q5SbKKq",
  "key21": "62ax3qGt98Uurw1betmrXGKnUKUuawW9BXX1ktfi2y3wqu1kaVvNzJZ3pLe1Uvygwp53akuM5KJEYTBNopzTmF3R",
  "key22": "5ymijQ6RmAAuik6Mvxkg4uSC38tUqG8ZBQSTa93LvUUpyzKqST6ri1dihr7BYdWWT8iMeZQwqwzSroHCTzowCDZb",
  "key23": "udvqo9sVfq8sWNaZHW63gXQ64kgcE4rUa6j1Yfgu1ewE3JshUKfcywS4LEJB5dReDJ6wzUx1Jd2eJddyhBCr4ri",
  "key24": "3n1aZqskKn4ZWYwsEJTP9GytCaACfFyz4WAjbSgJtwK2By3gJeQuxJo21zGF394BLsR4N8TDyeQJgPG1iFSXT5S3",
  "key25": "fjLKo7FuSdLYeWVyRJnL4kfiLnPxD6xgrBEGZyofSrmLefYPAV1r37s8gUw8zmxNnGTwYXvJedkA7EkfEN9bkp7",
  "key26": "3bMPWbv9g6uPYuSfjdiZzQgUN5JN4TsCcADNpSEVpRJL8Wx39X3noKPYhah41odfJVbnDADH5wJujv4yMG9mZ9pR"
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
