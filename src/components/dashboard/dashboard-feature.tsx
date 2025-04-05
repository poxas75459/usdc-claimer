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
    "39oT8eToFEhLxtPdwRckUpS2R9yRrHe3mBxU46kznuUM25VNz12tBpH7a7eNj39c1EFNuRsxGK2Mz45N9NVmhTNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w1m5gkRYNdrnxDy7t1wRc4QsXfgBmXFR22NZuGc2zuRfM3cTS9r9o3MpqwD39fVG2MJzbazzd4J9A7a5t4Nrrk9",
  "key1": "5fwfHZUZRa9732WP1cpLP4dnZyeWYSTPjRRxzR1gsGd1sFu5MojWxkKE3nDmfXTFdWWSZjPJXQ3xyFLZwJPAXvCH",
  "key2": "bw7J2cdcWcsrXhmEikHMGDAhRVXAyQ62E7ddkFWK34DeHhfM5mL6WBYrXbLHXVc1gxK1YvFDmhrht4Gn57mCVt6",
  "key3": "6fZct8s9nCifr5KRNfx1afEEsrj5w53q8QqcXHNSoCGq7gVViJG8CAocNHvqRjUcQVq4dbA9UHh1KVxKkRnFanx",
  "key4": "2aJaSnG6TJJrYpuac5eGMDVgNkRN21WbR51qbQ1HGaaovUpVrayZCdfugRv89BiVtzdMaPqre1A3VDLEKDxUKctG",
  "key5": "g1a5qmFokwumaoHVYRidYZbv92Vpn6KRsXseCKdyuVHXbqFz8FaC7eBFiy9duqp3WKwaUAPKm19r2hDsy4eBp7K",
  "key6": "38TvjrkFbkBMCU8oeeV3EAiLHV81SDRJoyFTMfE2FST7pgfE7D8iiGb56SWPLAbCH9vKSgDknUxBtnuk3KUyyw3V",
  "key7": "46tti8Qh8car7vMoLtz8P5e4v7zTro7SZLEXnQvBSJruuHw894r846FjPsKQ9poUF8RGpTzHNhtBt4zvX7p2VLVo",
  "key8": "3T1nrc5b1xKCDbmGuwB2nzG2NcoAdRq7b9zqNat37mwinvhBPb3BJhrdQL5gLvYrQb3sZkkWJDxcMM29xcZuPoCj",
  "key9": "2etVWJKfJdASggNTFKVU97xtx2gooHLWD8S1Dsi7XH6ctrGtSD71v6SnaHkMHe5LyxBHWxjwosBFzbdUt75boReV",
  "key10": "4L9vFCHH2kLVtTSp1GsRwuWeoJGodQsK8prxmLcs2VupgksvNDH13We5cKhGtBnR2hhqiWfDuL6shW8XuSk8md6w",
  "key11": "2fpdS88ya2n4y4uy4o5LrzJBjhHXNcpbxjMQwUULTEGxnJi3eFYzWmJiHmCDyykHV2YCKTux9zz8e1V76gEAYZRC",
  "key12": "4U63H2tdn7EL1wjUTsoyrofvZkZJnVfRjPT1i44V8AumH5mx6AQzCJyAHBw2ibnHq13zqkReKDLTdwSgJAPzVWgn",
  "key13": "5kExTjyh6MmKpWRw77uJQCHdCJmqWcuCFcjLi6RemHKDvEFcUqTDJCQuVR7snCkYf5QH41VhgS5cY4f9zSzCkjc3",
  "key14": "3AWcHaCBQhwtsowJgrk17LTkSoS1doWzmEUZjNK3fMyyudLxuyp7dPGvgwkm7tYYVKY8ukn5naKRPdsyUv3NU5m3",
  "key15": "4ynWys2H9iMxn2yHCynBgTbhqBVVfNS8EdsKAg4wJcgxaA3kLC674kCuxeTJKKzABrUpGsk4KkoXzwRV5h12M5vj",
  "key16": "WAmakNNHMc7gHaJfAFFXbc6Lex9HcgYdSNQgKzYTZTAqpA3mPKtkszubLkdmbztCHvLFdNH3iRkjWkqM9pJR8Na",
  "key17": "RsrVBMJdWaMaBYQwKptikV4CivU1EhNCD4rwsMoKkYyCNePaMr7QYEvpehiq9PGzQeDUFmxv2aCzTWg4GrvXy7U",
  "key18": "2awek92Unmz9GP45EESM4mY1AvkZdZG3CPshBNm3BCUrjMbfX9EZpWkRwi4Mp3DTJ4L3cypKpidnwX3LdaisqnTq",
  "key19": "4ARwNgGsiDj7RLSoRHYN6kLj5x4MxLxhC4xi3rdS8fkxZTun8SfibmgvQuehad6RWJE5tMGFKfqzq1AzxKZXHZQ",
  "key20": "2xXWEkAtRbM2X4sT549X68eU7Xr5omGbMW6HSSbTQpAQfLiG4Ky7fyyVh4VG8C6CGmBq8fbbb2s1FXj9yj1KPhTe",
  "key21": "3RYe1v1Cw6d6YLAkDkNrnsvu7aeggUjtoFYJcF9SuySPvMNaMpvgrNasvpvG9gknWM3asLi8TEChYq1eC1r9D9AK",
  "key22": "YusNq3sVuUfsLtVFJV47RXMj5ijDUvAFAXwPwVSZG2MizJvJde5uAy95cns7EmJwoCUAGVWEgrNytCrJ61k36VE",
  "key23": "5yugoqsjHwunkgnyyxJq8PE3N2kUStCp7zfRXzcn5kxCHexWDSKJpRs5zdNUifUK1iZYwa48yDzgfehWcFa4rKSL",
  "key24": "5JwAhbNZDLp9KQqrVoBcbvaCzTMKzU4yhmfith8W5zpAMZ8bSQ2uCYaxg4PopEQk4WWJ9wrP3QEqEzaGpfmZqo5r",
  "key25": "rRQXduuNCVPepRucCUjAAwvZyLzHRR7UboFgidKzWFWgdcw9dAxazRbr6dp2PrhDCwLKztqDrGMRdVvEM8hqn1x",
  "key26": "4nbdhsfQ1HQ8UZB8Nskywq4QfMrkFhZFzFJjQYgieaseiAKYrozrWKbeGqSdF6tRwTaSMJifVWK1EctKFaYRSCP5",
  "key27": "4VbTPCymrJKk4Vaug984FjAhcF1kvNez4yegB9s3DFju7GLhxroDd7YWNhq31cK5BwpyhwcC3MuX5kmWtH9PAgNi",
  "key28": "26xjkmcioDsHV87bUnf6JQRzfArwimFDenRzcJk75fK2NJuBxjYDnf4nSv5vvVUtcDfnciVMJE8LEasCWyjvaYQH",
  "key29": "5dZeNFRpD8EFuwdpwqk933BxZZkDrTrFCNpVzAkoxhv1oZssi74igagsRzM2nMF321boWgArtjLjYxHXhH27Na56",
  "key30": "3CgCK4HN42vcLbNkLhcEfAXiTKTpo9QJG5fyJGgMWs622yuJXuftRTts4imYCwat2tqrHKbULwje69RzAhc9XBZh",
  "key31": "4TqDaP2j1n5WpDu3ULMmtVcJKth1RZRdV2jWjgkjSCxNkPyq7WCxy37BojWji5G2sTnFCvK2mdyfr6j3EmtHRk4J",
  "key32": "5DYgu8QeC6M9EpfPCi6XUsEEt8puvsBExgWBPZjUWDXxCPPxHNaCTD7sTPkCJdd6x3vqk3ZtLD1j6Au9HJSJzZhi",
  "key33": "42Lo2WPxhgYci3MyjdgqFfhGSGXbjeJXiueHadvD3znLm2KM147MDKimx236X8JRFyiQBA9EHDMF2kZGFk6aaoWV",
  "key34": "4B7oaTpFi5GBNKxTchdXunFWyCCZ2zbo24MgoZ7UG43VVN1yVycMvpUMFibrkpvStBEeSuXjSimv5cqkzRSeivD1",
  "key35": "2e6HrTNXG8N41kWyuw5W2PFYchpdzgy9BG4hEasg9BoxdFfRUvSCYKkub7tvffAumRDJGXr9h1JgXJ8g7XMxkR5N",
  "key36": "5TveLHDuUepza5EyKVjtDXfqcsBhZWovAMucYevU9ggjXoWS5BcGAi1EX9Xyp4KbsuPhavkhCiNg5KoJuWAJx5nk",
  "key37": "2C5fj9gxE6t9NXqY6ABWTtBDcAmDXczSMKMRvH8V2wZ6hU8kwTev96sRknArzwwFqJYrF6LZLXg5joTPJhLNAz5S",
  "key38": "6zf2LW2kerCB4TkCrkmH7HwvfddVBtbDAeMG7kasuXtLYHD7LB2TTrkhcsdMAe7ndahpiReJHcmx2Yytg5LFa1a",
  "key39": "4ruahoEdbb2LLa9vChuLMK7ht6YpQouuh7bKJ8xsrUzJjrPRARNWvbmcGoGRrLe1PXkjn5ERBFgSyoJTCi9zqUL9",
  "key40": "3eqyEdzyEowY6vtEZyWcQZ341rFThAcWGncw5rLdgCyqy4GdU6rUdMaa2HLwMQ8KGcHFj8H8z4MxEsi9ukyu9CNf",
  "key41": "44DZjZWb6Yo5VZg4jAs711mqeT3XqgkNUsm7GKCTFaoHjRoKCRhBPUh5aRrQgoTBMvhHU3WMDHioGPLik7ZcahDu"
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
