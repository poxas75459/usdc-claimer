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
    "3QJqJKnPe5SGfsHS52Li8pxFiLLGuqGpRdGThm5dzcJB2UAfgGdhHs2eXPf3SR2rNoWjE7z7o7apV7Ywv6VwctAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sSoK1r7ef1BTyJoJn7n8pL66WMWdfKZa7wmeQRvrKz6TeipwNHacVhRHsDiW5tAG2M9gSBHG1ke9fgMa4KausSe",
  "key1": "4GZ5LBazBkVA9m3jSxJQ3UYBqweXHu8GH432ePjpzQtEC8bYk15iag3AsM6QsXXRo8aXhbxEc95rCVA7UGbMdfeZ",
  "key2": "4K1VEpRCzfihEWE3BNZhcLSbAJ4ee69pkcjK1TGRV6k4K8NeGUAYZhUVcS1Nei1kuXo6CUGqEHGPFB2Fb4foW9me",
  "key3": "QLbZPFTJsyKtPR3wh5EgGST52jMJqngWdSkmKmu3aEZQMD1BJiGxpmmvsHr18HATkwwnuwjQigyztG8BsNWLFWi",
  "key4": "38DRrBNpn5C4V3sxmhMvWYDhArWE6x9PDrw7JBZMBfHk27FL5FYHpcvvxuubkr7hSdLvhVe7v6DA89Qb3MbhYJ5o",
  "key5": "56zExBoLf8Jqe3JqDmpediHHcHw9YSSkHu4D36jhbyWwH9b9wsPvzRUKvFsD2mDUQ1TVJG7MAq94UxQh9mr8n5r3",
  "key6": "4D1FeYz8JY1h5ToDN8v1LAHR5JcpcE2aUefjBdcBg4uPsYDNKe4rZSSGA3iEbr87fapCLK9T6RxWZPRMaCKcHHiw",
  "key7": "33NMnbRjLTycHijAN3uhwqZy1SseSzrzVSaQ9YbnRkK6FxuntgDhrMXNnWtsFZqiGbhBdYg4XmYJjEEuDJ6qmHxe",
  "key8": "DH3YU23yAirgyfRkmPgANeZwdFCryhcXETNjBihGRwh6iF4oykfpfxLa5EjuPBw3ySjVsRJFzkg6EqLYb1eec7j",
  "key9": "bXEfQKezXaoHnDL3rYXreywxGWKsucJmE41cFFXuuh7gyhDVbdnRgjp1FhJFQw7hLR6DGaxBFSQEU4fLnyc4do1",
  "key10": "5SL8W9yBsxaLUXNVx3fMVmnAGj3Fn3Z6fdS7xrhEfmZghFndRR7CSsYkZAuQ7sRTWQdwqbw8bejyuny1KcKtWUCt",
  "key11": "35dTwCWNwX8bCW6tx7bY6SjUoMt3v8cQFEkfEB24tnJXoxKvbfQjhK7M1BE3MBbPZBgg1ULjAWeBA4wXe6dcthnA",
  "key12": "GmuKBYK2JjxN7n4WSdqsTvQthRiWTCJ3Qxqmnk7nPVafhJMm667U9RsoLfFkW8wvTiRBVqnhpcPpi1GWLHSMXpL",
  "key13": "3F1QNifRxrkP9VJrYrtp79itUoXVDcN8qztwAinzfuwhmrPb2G577fdTMfa5wqfNrHSYBPBvPRhEhH2sTGXzXLWg",
  "key14": "4zKGXvF4Rtd8SMtcXLRHamsAqwm6sMqwx5pSVhmmkE6Va29eWNUNWVDW6AZKBtk2M8fSKUWqzehpWwCXGRr7NdMb",
  "key15": "3npV5uHE2cgcmkcGrfaowd1NuhdN4CEsRjvFbYNcDghB9T2hj14ZXuArpfakNes8UuiQY66UdQ1cXqPuBMA3VM8g",
  "key16": "4ynRCxDbx25XWXzz6NAi5GuPUZ3F472LJ4kAv2FoqqBhSxL91d5EVkghkNED3x4HKSEQGYwKnLyw5ZLiG6hAKQ8P",
  "key17": "ffXbD8tc9KGiUBmhcyZPy9fWAGr5Q1ZS7YnLJuJeDbrdSZaMkU7gBs6XisNK7ksmwgUAz9PipeQmm99e1hjKCib",
  "key18": "4wDQhhM6EDjt7AFAaEbzZnc8U5irgi3Yz1ewS8uSnDfUrPz3ZbjxwASH2uarj5EaEVw6V5isYQWbNRazhB2oG5VN",
  "key19": "q4b4u1i45vPEfg4L1zRdt4njnmbZZP4Fb4wW16yARbe1ctPcWKc3BgpUArcTBjtwo5vvJoqhoBDjv8pamttgB4w",
  "key20": "2N3keQ4araPv9i7RcAj99Eg3NACAoaSDrSLT5oo8e9Eyvhco1CbYmkN55B2VZqKCyTJHarTxkFappjDVQUMzCP9S",
  "key21": "r3E2uyyfbn7xDvVDhzPNdnr3CDyDQpFDF9J2jHG3S3bhtp5uZaFWwRLjfuyf369LPiYDsPFeBik7SYDzDAh461U",
  "key22": "5phE8rvnDh44dAZSHrjn6HWHA2UwXjJaMmncVyYFAGuf7NjXhW6T3voCaHRLq6v5JvbKzVbnAJLoCbPSXZLXJWVs",
  "key23": "3NcMhDnSCeoFonPtWCsYWnPdv4tabqkNcfsUc3L7CFQ1GMciYoNnxpd325dfQYe6grA18KLR5XnnrCS8kYqvA9US",
  "key24": "ugHgVxAx3CWbacdygM98HfgtmxM1s1yBQsj9YeGv2FTGAtsKHfkKEsr3gNTdeFfH2kXgD3FVgrWN2C3aZQotBd4",
  "key25": "5z7N72RGesgBfmQwgeWqJ3xnA5ogepTgCjjy7LpLe34q3ndTVhz9jThxhmYToy8kwrNPxn1cqGj3dhWZbirWokQB",
  "key26": "4yehjF1Fq1XYZANwbdirhd8ZBgobp1toUxa7qEvEcwV2WqFb5debjdXyCrZz2QjjosezC9eY4aT1AN6H7jFVLhvu",
  "key27": "vcvQBLj1uCuQFpWoEWVY4UEfmY7sMiE5GN9Ur6CEosbTahzrZK8qqFJyjUbguPCaqbu7M8XhunneL8shT2oDLpc",
  "key28": "3cn2fCRZZRgfdudnGtuv7g5rUXqP6gyRY9Bghyqek1itv8MdXBJHwa1ikcJ3Mg3EN7gJKNk1Zex2eFMNHcytfMo",
  "key29": "3SJpufoUPgiCG9nv6mKfKH8fE8BUVGkpSzoWAc2dASsLNZ91XEiUfKaRpLw2wXtMXhNuSqKYS24KY7ogDVy9mS8X",
  "key30": "2XbhD6PMW2yN5LZFDA8HUrJAfqfbD8LYxm2URFY4R6hPiSDtMUn9eAgKx7TVfTYEdb1FuT8Dci2KnVvEpJiuH3om",
  "key31": "BVrV71BtBNaoMjis6ifxQty16E765nAYKxUoSbqBT9u2HiQcACVNJEC8kLyeLECDWx3ZromtU3wK58STTWGDiPE",
  "key32": "366CdZTMBw5B2DMNrwxX19wqhNT3ZBUXc7Bo2pZNrRhxfHzXSw2LA5Y3mvNpS8WJVvKYwifAqRfb8rzeRNCFs8Wj",
  "key33": "26e4uMvmu1eXqKYk9ncVmMrDqzVeiyqb8Lvn74GjU12K8NBmy8t6D7BVMKuyfMqtsseFHbAvRePPfiJnKzjwqpHh",
  "key34": "55R14W1XAcYBjT1pud86qE2MwMoWcThrAgmTiUpofG7HusNb1BRGdqsirrQnhKzFWwRj4ttvHDNcCToCHRudDH8G",
  "key35": "5zYT1tSX1WU3Ci44q9wDPAnTfv76cMpX2zivzWUqQCqjk7hbJgiPzApaaLrgRhPLKAuXTBe7yYChYzvoifWLjXm1",
  "key36": "4m3VMuiFqsKgqgUKnKDrRXDavcJb7PAb5neGtgboGkMGUf9tWtYMdG8tWtzZVECNG4qmAnNv3XsKvXfUrcSfVJAo",
  "key37": "2az1ih5GrtMin2ptxh9VXACdAKg1HWSHy4mU3sJaSAvNzTw9yHU1NWHJb54mtVJTgb5u595WHK1sV3xb2H4n178P",
  "key38": "jL5knJkL3uQ8WoMaGKoEgDJ53L1pRjjdP7gB297CCwA29e6C7n1XdWd6qNzncFC1YiEzWSNhn2xjaVoaWYTA4uk",
  "key39": "52i3k4AaeMZP5VbxiTtkmoqvxLhd3XAG5ot5ibkTr9eits3pn3qAjxxsGZae9PkWgb2JDo9e6XpfzXPqfEEn38PV",
  "key40": "DZuodnK7D3rF2uAm2Gd4TevSnzWPqvDJn4NHDzvPw2H5gucVyjc8G1MduaE837VuLtArXGpgso86N5mzkrpHViB"
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
