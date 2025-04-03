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
    "in4hXKTUkeXB9cfKTbW7Kg8rAHcy6Ku8w1FPRLYGwRpAUXfSFGdQPyJfgjVJY2CuC1qhd2J4dff7Y4WmDDrqoWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bJhad7dnDMqkKbZK7x9p8hHc6a3DrPMgbgUgun2eCwP74pfaZgjU3LsnDGipGdvpaiCrkk87yHSQiUrxDyFocub",
  "key1": "Cc1RmFDt57WLqXNGzpnM1mvmzbsXj3pyRgX69RKeD3HaZ23PUji8g4nSgJL3kZHTmEY9mZLGQQeAAGvG1RwkEXw",
  "key2": "2wTkLDBAPuiKRi8MakXxYpDGTvU8HGVXcdP9bBct7YHq2ZtpUcgsxauBjMPjvUDe3yUWGbT5hVk5EMMjJ8trZWDc",
  "key3": "4vd4eNei9E8kBDG3rqCxpwYkw1H6RJXHeppp6jgJDKLQaH3d8jPgUXcyWGFu1fHeBDg2H25YnQ1HhpiDG5DEKL3A",
  "key4": "4vTVH9tfzcEcbwznX7WLQQVSVfzcuyT8q2njEem5e2NSTjsfCgWZjJmCPKuXNMKEUEdybAFBK5oKRb8KUydkeNai",
  "key5": "6LYdAPeEZmJweZC7VRVYxgT9UVQpCAgX68SpJovTLMajRs53b1zyF1EPnA8MYV4Yj2pGxxEaSfQhmnsGEBT6XpS",
  "key6": "3wEJYmwzrrrKcQY1YTePvzUYkFuqkrKUD3CSsEt8Hajst8L1jPLywrjPsxHco2CdsCfDMftPs45wNeRrAdLATxJh",
  "key7": "2CQN2hpjwGPV18JX9KdkcPt8afiNUwXhTDje32M6K7DBreSjJ6nySaeWg5nUmXbuYLmNnRjKfVnupwukhV81GVdf",
  "key8": "661gzMPzmifasigg743VfLAUv5ctJF1hpD84KrKgpApTTfGKfo9x4SY6Fy7Hv51DaBg2itRvgELvxT3mpeuRxeZf",
  "key9": "3wV3Qw9Zf7nvfUfYrFj2uASc1LYmCPKQMXUD7z8SpsQzTH57Mw39dcSQ1QtyrbRQurueXKKfwyhRZFVUCiPYfCrn",
  "key10": "3NjuEFeo9tnXK6A43qRcJ1JjMYajUv7vE1EWLuQ1LJuUWytmowBWXHWHd5QPTdoPWgsB2u6PvjQcmtwpRJijXHr7",
  "key11": "4X1LDpuHoCaGZkKMsj8r5fHivZ5BPvRbay15tDRSKCXJQ4hhLfP4dKQo5W5wUd4oJE8GbUXp671MoZSdUKc5vN7X",
  "key12": "3SDzE3PnCCWyV5nnQjUfF8RiP7Y2AfaDWgT4VzaNVcTyBMru8rFTJ4b8JDHG6LQAosW4SHpRXQvzvQhJL7MHQPWY",
  "key13": "4cMLoQTiPYMiwv5EWuaxUrSrFAFfUAPg2r3bxRXcsspCKjFfH59RsyT5Akc4u7jmPuHB4xc2HiURxUsHR2PTHWPR",
  "key14": "5dh7yd1NuT8DNW8nnhR5hMjg4kT4QaTXVp3GSyGgnWwrmEYbvmgcwu6GoUDVvsW65S6dqDEqsznkMTykdsLXb9nj",
  "key15": "39JrCsZxUDBL9fuqcgMsHWbvCwh3bicBiWAdiHtTMan5bFHffJgwxG1uT96mK6yFiJRtQTPpCRDBsWSqTA8AAvRM",
  "key16": "wiUBHFR8Y9JDF7HRJec9vr4DDygq4AZA5YgnPo2G781hevSztFQ2fhjkQEGhGhN9mMLSEj8Ep7KSB4m6uX8yhwb",
  "key17": "4H835hwvAU6MW27zKyqontdiCUXcxRxtqncTMdhEeNVZ3yikWfedbTh61R5hbCbYwRtpmMDWBPEZ6qfgTfgwCTaG",
  "key18": "2mzi8ssnnJ2AFR3j2CbmJ22FdPezvXGGpPNxXxY4ZoPkMCE16YHgcceGXKkUZ1tCyXb3S4AccBbh5RZ1ufK8CYhN",
  "key19": "3zWisNjSiQFXJfpr8f8pB9u8icDS7xdwgMtLgHjp5mBqoFKzVGTGZiLsU62nVKi5LeC5b53QPZSqGnTD3fTdekPY",
  "key20": "3dKRGsa9k1SZYTrhZ765j8ZrpLbcwuKKaVHYHLAuSknUWSiaa92ZfP1aKrw8XPXR8UJ3E881QMqM9PumHvADBH9H",
  "key21": "3Yr9a6r36c5grFchFhERwfWrf8mn45t2hkdDH3nnoRdVMkCGmScvdMP66jHmvva95kACFtNaye14S3YCVZKsY8US",
  "key22": "3vgxa8r7WTbxt6pzZqLhPzypMB7WSmBG8ngpHNyeXC5dJ4F5KjKhPQLQHLh3dG6dYahFTxFQy3XpHYn7m4DmJEFu",
  "key23": "5rccTwfnYx2cjnSKoPN9srvEjtj53yCQEgtyhyr14bwFxduCwCaDvHzR8EKfhEm4WVydmvbo2gEDVeJQnPboyFfS",
  "key24": "4AxwG51GJZDAAk827yVyc738UoD91xk91G9z5ApGFkbic1Lo8WFVEoGpa5Cm3yX3dWFvsx6tsNPkM3EypCewwwKY",
  "key25": "fyeX9mcDz5unFqyCAcWpuYgyHSC3fu8y3vrQapSgd35wUTZnVNE5VPXuqLBGqdcYbw2QSPqzPp7KBhWoi8EKTt3",
  "key26": "21fVL6fNbNDoUSkT9CocZkdUDQGojkhzntT3EwGx1ow5b2f5PQfv9gAfSPy6KcKPhaopbUDWikLCuGm4LSU6FqCT",
  "key27": "YeR9JNbv3niQYKxSeKx3Quzze8fpa23hn8L8NeG5TXCWfmAqqc7xWpF1a926m7umu9sWLbghF4wGckFmPTut9jJ",
  "key28": "64M2HtnB7T2zVBeNLRRT21Wbx7Q6V5tNtLrcogV1LHT3iQGGS4eorAtfR6ZVatD4D4SkMsyTWyHDr3YsE7VBm1Yn",
  "key29": "3oMXjyEbo73JePUezRPARN57pkeJrXdbPHkndZE2SoSgqyAh1GwcCqcB4b8ToqcEY2fw3uKFhwtE71Wq83s4tW19",
  "key30": "WohNNbEXMgwobzKojJGi5s9SJYqASzDgoqsAHYkRpPsfBMEr791e9EJwQYHmvhAfFCpdgSEBodU5AFJ9y1jjsgT"
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
