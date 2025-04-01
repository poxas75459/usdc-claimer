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
    "2zQnfrZFCPjRqiud5AFPb4PPFmSZ7N8VDfTMpGm2Hy5CT9q6TpZkcCkcWGug8aKdkStcx9ZqwWjqjY1fzKVeGkfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "436UvJ68VuoSBJ3wkEx2m8CDPDPPuoaTfsU3Vn9NNKMeMJNrXredqW1w6zhjhnTLWM838MiR7W5RdJe81B94jZiX",
  "key1": "2ApQv1YebBkzzyXNCLH6HkaRtatzFdHkJBEkdugXxBM7DWrh4t4i36pYhsnqZtoiRquNxMw4494tvKpPLEDZkc92",
  "key2": "3gEWJaYJoESqNvACzBTq8ng8HyWEWiWrqh4J5s5Nr7EgyMc9HrMkiTQFuGN7Y9odKFGBw4ct61nCNw1FpNHTAu9r",
  "key3": "5TehTBFNMstfmd4DgbjyW2yhbwB5GB3FipnfVvxVsAQsM2uBNA8GkyLeQp37wyAsH7vFTJCGtMK5ZUBWXQycVGmd",
  "key4": "ksvwdpvkCULNA8vJy63Tz28yVvFpRBJS4X3oqYwbbdkmmujDSSRin9ivPcnTKmst4op2rUfNSx5Y2hL9JwQFpa5",
  "key5": "4VXUaL6W5zFRQ95Um7oaa9wxwEdef3DZRTui7PGLzkw6WnGfJ6mxaiHBaZ8XB34fxyxEeKcrxqPxXN3j5UKHdxgq",
  "key6": "5uufBzYS6UwH4t7WayknTszBSQFC1Lk53eR9Nc2H8756UZVYmqmPpttS6GUNdHtwapcmGZLEzp91Pow7JampHM7d",
  "key7": "agZ2bDv7HAYfjVDQUSaM9W1zgsTpUWNZxda79nhvpKkrer8f9f2AWqqSNGFgq3SY2oEpJ8C9Uj1TJGJ6LgTQuWV",
  "key8": "3JbjxpvxnmjZ4e6HwPkPGjxiB4FqPuziU2xBSR764A9ktd92kGEcHWmzNPLwSD1mg1mWTfwAaP1JyuF7pzzaHodR",
  "key9": "255vbrcQNfQtwy5f9dEj5P3g3tfwwi94CW3txeGedQNNeqRuvnCVJuyXvUW7KgryBRPfAWkj2F6R3TBkWiLqrQV4",
  "key10": "4pgv4mBSMW9MkZX48n51skv4q7srn5RZS2ttDBsKL3zPhpv5cnovbDCeHHYUS3yXaM2WiywbR83k4W6gmofKChwH",
  "key11": "5r6H942tmbWUBhc6p8o124bDoUq6Xkh4Qfn6ThsoeRVchU4758rZAMV3uPgGKN3aF7WAuwWkLNRsVfM6z6No9TqE",
  "key12": "5DQ7ozs3fwsMbZ7vQBGgKNoH9ZXJShKXQySSYDBHZ8Ygd7R59RsCEZMLQ3UzEPoPJbgAxyFF3d34jvSRyr5r9z21",
  "key13": "2fE1HTNpxzpvBdgKxKZGGtHgQzxAGjz3JZkHtwB1Kqq72ZSGUmrYbQX5QnGbvLvtUZUtzKvnbLNbQzgkNpFotoqn",
  "key14": "67ZZvB3Mg55ahoBVuFrrHAvYHm7482iZj46hfVpKqdgNQ9UAu4aiFaXsfrXVZ6ANa1Z6ThxjqEEBr4v7MAWu5Ye2",
  "key15": "2N82GD2Hf4jgZxVHjcdZUBQ3LfSnjiYFdj2f2J5SouvKucr659abMHC2CjUnvtUxCCpjdT7BXi88KhkWr43Q1PLd",
  "key16": "3DbXLnWDebvmeAJhtmLNGunZktHJBAPgSachhXQs4CBcsJ3fd9TQNmeZPE27hNuG5FyuDk8J53Mj2v5asS4aL739",
  "key17": "2TjLk4LBTgLQHP3JuzKcesv7yvzLwCnjt7PwLZ4ThhyeHEaxTsQhGuZ97FaX64bzu6hr1GSPp9x2vcdMRfbvMhn7",
  "key18": "2bbsNe49WGVSzofPbmt2nJu1FJZdhcntRyPTTAAeSWXjwv3LAmRnSS7V2q4uudGLwp8zAyCoc9uzexbsrS89rRxG",
  "key19": "4SddRwCzv9o7wmprLnRzthMCkBjGPTNqVvymcyemfsbPjsYbEZW94PmZ3vS4LJeEGUHpFJD5DYqbASK2asQqhAzT",
  "key20": "2q4tazjSj3iJ9uMwKPTKia78PuWZ4gFPNj87JANsgABwMnm3RxGuDDkG4QZYshjBQqrqxbN3g2vJXv71aKyCjqQM",
  "key21": "26gFwVhEubZEDyNeVqDXSd7HtWZKHiiGT6sibUAa2DK7CwiFUjM3rwEpT8PS3zryUZa3L4fLTeXZaVfRto7pnwRY",
  "key22": "fqLmqbfiQeCs2iHLNBopCfdq13qBDAgU9WuW425g81Er3wvXhh9D58JM7tGy2oT5PX3TrLtjPWpUPgKHSzGw632",
  "key23": "3uS3vh44xehY2pqkAaEKiDufFJ3ZWHNDccPGTBqA5aopRLkVMjvd49XL2SKgGHnzqGi6eroNRgWHYPhCnMjE3Ds",
  "key24": "4HnukZTtSm5qK2n2MtxetZfRe9iqkRYTachB7oGuTcCZs7TdQXktZFVH2n8ofv1t6EGphWiUQad8fCKqDcRRyMFA",
  "key25": "36Fxc6JRwjHD6KTzc8LxQ1PS26YeaSWj3jhw1yNqB1ahwrNQivoHQ4NResGWiNUULuXportq21jx35WQsPbknavQ",
  "key26": "3LCkHvQQ9UZK7WDyJbVTR6RL7Gq9nkVjyrcv1DnSLyfPYanwn14FVg6EVWS9YuH8Bps11ydP86jDJNxBTCbH5ux4",
  "key27": "5xPpZrF5ytjeteXsc6zvBezPaYAjm9ipyzCEgdvaboKn4QJBKaF32ZEseAgVgSCtsf4WxjdurAjgtwz2jz2w21ZA",
  "key28": "5k3vyQPLg854E31WQPZdMc95B3rSYko3Q7Hb5AcnmfXbcgvmFg9x9UMagkrRyHX3cmnCWetEN48SM57LcJKYSPmA",
  "key29": "5Ahg7XsRsCG6qvVjztPhHZHbAbKGesm2u2wZJifwj53bCkswj9nVdThf1cmy94bwvyCrsspmQSBEfPW4EHwuQTpG",
  "key30": "oNae9NnFFTAbQ6XRffi6e1rU8MALNsZbGNZcAj4m85UsiK1YwZvY4S3fcduMmHtMTRxbQiAQ7z83THyx23YGqJC",
  "key31": "2xiESzTciZc4shyGhsYdQxgTm4BZxrHKZoTGXCzn9jRMnLS7fezkwUwhQihLfsAHpgFmWBZr6WSYzURCwyJCWG3f",
  "key32": "35FPVVtE1JvEBhnda8tNsAYciTYcCaG974oW66d8oK2ZtsgQNMiGYvMhREGNHgjzdoch1Hj6rHeeHSPEWwkEgcw5",
  "key33": "4MzKZTH7VhLvKkqerLGzXeD1ZuoCFk4f1QdcEFgg1mXTdXtk4H4BecVJRHGFZeCaof5meBiDJFb7XMgaVaeVmHKv",
  "key34": "5NMmTe8QgWbzqk8Q6sNJSLEj7bxEcvy1Fj7rMokci9jW7cWfDsBf7oGKGZdwRwtpsYV9AYqdN76GGqZnFCRC7LC6",
  "key35": "3fUU3Naqj5fWooVRytWc1GXkweMZtj2M6MJHTXXwgFo4BBBPqztMdqKvhmzeJZKbE4FatR2Fza8vt7bxQzHwPwSZ",
  "key36": "5qQhMxZD5F6h2xuKkoRXuwAUijqbAoLGCTRX2w4etafveHBjVgfbZtc9iqoQ3kiaR8YpKZugcSo6JWAPXwh5Eh42",
  "key37": "4Pdf4Fyj9ftpdf45S8LKEbAsAAZqTLp7LhMRwNDKDBrY7UNtmFgcCyzX1jSTo5w2EyS844EnUxmWCec2MXRbUVjg",
  "key38": "4SKB2L8MV5wN9aqokv6rbhuceq61w1d2vbvLRxYNPRxty38ZmiyifYnRVto9hCcBvAEqkNAAeXEV2TB33PvRKfmw",
  "key39": "2ZFve6N5qinGkq97UFtbf4NErqm1HnpxeoVdcW76jAJwLnpynXyrGVUqDaNHfGzu3FjaWh6ASu95sAgRjCZNn5zd",
  "key40": "ERNh1w3FbAUKPqzpQuEbjBt5dbWs4Y7DFdSgoC49dEKSPr9dbYSDZLMYxdaoAjXhXVrVSSaybtMFPJ3h6hhDhgk",
  "key41": "VfqReoGieSbjuS24vQU1ozJhbuYd55VgK4C5aj2TSbv9AFiFKPb4cPrm3oue5M1dTRibBX7xRkFA1FWQagV83He",
  "key42": "4BST7TohWz4v4xbzoYvagQCGsfEFddLahgWH66vd4qGsH6ZQVEQ5dpoWbfyS2X2CQAmbLmLSNzHvnsAuNZjSj1ax",
  "key43": "5cuGVjHJjt7UrkYY9LFPCeAfV3WrHoWsnmKQwd158ruLJGYuUjKw2VxUNRLKAouTZ6x3f1RegtMzJsN6UZuennXr",
  "key44": "5APHUN88YKYmUTDaKgy5GTFBv2Uid8cNyTQtQ37fTF7R6hEM9Q65XVaZFR6o6nddU7MMh2RTLsmkNEkGJDpxYcfz",
  "key45": "5NA6DqQXVY3ZtGJEADtQheQTEPm7YNNXU5rkgXixfZUzUevZ5VZprzNPB5bkUKRqv5u7NtuLaqsg3QFmva6AoS6p"
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
