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
    "4n5EDebmkGecKwWkdCRrwkMuiwLWBiTqFzjNYrJjhddyibCNVPhwuwWgD57MP6b135Qb2ZXJkL2u7dKCgjBYBLRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bet7Wcg5e6xethGKurUHwA8CvECWU37QGWvYCNJa3VD1BGB7WXxLqwisipFkZcYJHXE5pHB4R6FrrRfhmDbKYAk",
  "key1": "26vstTqtZFdYeJW9jy9dg1q3m13g6fnavmxWKNWYjCikSHZTWgL8FJtL1TKnyQWbX5bC49ALrfuLdSQMNSewqxjf",
  "key2": "qP4LTVDngc4N2EwxDMXGUZ7TF2bGmgYgRAzuvY3JsC3kV6LPwLcwDv6CN4W962n2mWY1toTQbGABBXbp5oiYJge",
  "key3": "2hSdqejmGf68S2Fn1BQMSK2jgvWPk5HSDuqXFkehgdLmZdGmGfLSozv3vT6nu13NEJfyfU5uvneoHNmQJgypuX1N",
  "key4": "3j3nPMGSe6BrBoYArLfmYbGH3pL3Xo2PsZWbREVWbYrcKY5Fx3rjhF1HphDMrmGt4vV8k2nfoAznXesmgFCBqa24",
  "key5": "1zmVNkaxfxT3JFS4zJGrbJ1xKDipXfX4VocnDQDBozMe1yyeVMM9xaxc45fzWpGcH88Co6ngpYvw65CmXjCwC9Y",
  "key6": "3LeKL5w7w9eSUXFaS39hP8vdb73DEr2zfc5CxNSox7rw7vHUmzkXqoFskCReyoav9AXWwgmdafSBc2fFgsFnrkc",
  "key7": "5zTSVPRBGMDFSxsnuA8C3uLM313NFU41F1aN2RnuLFrd9tRtuYxASDafArkmQupa6GbQVAyEHK3NLppW5BoJBQwG",
  "key8": "2sV3GQadoyTFBuNXo4TfoB5BG7p8P8BwTLm2k6FoyXfhYMPjLL2hotzrvgSD1BDsHV7jGQpUTFKxhv7fPzJV8qZB",
  "key9": "2ddnHtbM35a91B9psHo4t3ApbMrYufqPePBepYsi4ymgVbjb7SbEdoXCGzdLcCoLJLyGiMq8pAdkrGcSDigHMhpq",
  "key10": "577vX24Av8CXKWpgm4tkHjoXpzKuFmwLbWZcakiAECgrm2VKxPr6GDANie5Zpegoy8QJSdD36RnYX14C4Zt8fnSd",
  "key11": "4n7eWwNsAJ8zDzmk5h32mDDfMRRqn5eRJQZn4CCa1Km5NT5gWknicYzzSmomzPqZGzuoethcEJH9Me9PqvBeWD3D",
  "key12": "3rYg7AEdL9JpzmPbJuqsGrPvbaYJNoUrc7f1h3QpNjonqYoQ3Gph3DQWYkEb1qSv9uB4QP1s3rbq9MkeP5zc6osS",
  "key13": "22yYrjiJaQscKUFGpWLj8WLAU4wzjVXHz42cYtMsKLCSvJztQpiRRF5DBkNniyV7h539gUY4ipCDV9KrGf34bjVZ",
  "key14": "2TJ2SZRw3SB2rAirxMC6twFFUDbbNb6rdNa1SHGhCbCNAryAAuBnVRa3unEz4FdFMny2vGXeNLLwJr3zyx5w99p4",
  "key15": "xV3AwkkDNUqptA4qvy1joesc6LTPLy62qZvzo7YMXuZXwW3pzJ9roHvoJtfPsMJ87vu9EMAB9YsM4T9w5A5BCyn",
  "key16": "8mQhodLQVfyd41WWfEC6JXnwv3dd2AZvNFvuKRRZceXBpUuc5WejLGkyMPpHWbp7datckZQJa6KBT8WEZHn2Ahe",
  "key17": "qgUFHWbSSGasoadPz3np2FLVN7HrSDjmrKQYfBkZFhqpY76ACrH9za7gv1D9W7ijRCohicdPSX73sukbNv4CFzg",
  "key18": "WFHukyxAbVdctmzipMziq5rCwZJX47fJ6NSKihkvEcXMPGeBKKDrEhDPohrWrHyqiMk9QJuCUSNYZdgwUDDBohn",
  "key19": "Tw1WzxNHT5Yj4mYnwpgm2M9Y6KAxeZMskf9FEtvd9FjyMinThf6sLv16JXKp7bXrgxnB2hrEKvm7ZjWcZhv4ruC",
  "key20": "2oGU5NXnrPUw7FxUgRh21kt9mbjnP3zr29bcvbH6CsvVMaVq97ayuPEKEJWbvU6JenevWEXXVnTF81hdLrRRkBez",
  "key21": "3aRFvR7458t9FQAMw8QWxdePc6ZHJGyGTkED9EwJHYdHPrgCKzooECz9vLQQoaoHRszHPL77iqiiX7tiQCtqaSWA",
  "key22": "4efpQLfmFpgKQro12EgEJiayoEby2NvSfRuZGnJirMBn1S5VtviQCHPk4et7yfWxwNdbfLrNJV9VZT6N7n6Vc39V",
  "key23": "2MV3vmhZ9KdawqmwQarc33Q9ugYvtD2yPmEZFpzwdbFAR78Ae8FYaQ5YP1P7LUnAU9Hn6SK1aH1xjzZxiTG8NWfb",
  "key24": "epLWsV9P2hMbw9zkX6TjgRwTCbGPa7qXYC4KrpQs9vN1BHnhtrGgMr2hmJ7uHivPsxjPD9Q8oGPRvpUSorrgMBf",
  "key25": "2NREYC72wsYepRUERa9bQEmk5r6bPnooPdBuRdfjFLxAaKo9kxhNDne64kes6puRUbz82Maoj4aMSX29aTKRyDC5",
  "key26": "4YogsggSf6R75W3iBKjnYotUvZzj4q7W6J5TkkLkEPUKoJqYeGtAcyY2MNVmrUnsQyH5xwPzPQJN7ZzQ7gpQm4CH",
  "key27": "3VF4twPDNBX3XdgPxYrirJ3LNsckJ75nkv3X4Brm8SyYSBmgi3GdUuutQSWsFuobKztFneC11TKyNzzSjexxLWT7",
  "key28": "7UKtc7SPCv3GrZHDeRMypQJQu1ue1DRTVy3MJNPs28QyuyQDg415CiNAdCeTPJB4MyyWHz5LUqT52v1AqhscH4u",
  "key29": "3YiNa4ueTNmygaZD9hzrojrHvctbV217kK5LwXEVWwpJgzcqR3Bn3qP3rWPKvjC5ekfaKjhEBqg7UsiJ71rScRKi",
  "key30": "56fbLPCYkjrRwqJnXGgc8qPZqQsoPm9up3Frn3kA6UWDvQZqV2aC1ewSqeZpmtUT5VJd68evnHb9o6o6ccMi5EPz"
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
