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
    "671pxbBoTxZbKqD3RRNqrszeFK2KMp3YvSXL4Ee9cxub1JRxHDcTXKLKic2m1oCdmG9VUxUUpw6uizsrWa1En6HT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y1ThLPAcqYGmosom41a2mN6p8rT6niLBHoanY11nJ6zaAY9dfRXuZ2abnByaCt59C1AUqHutnBc23WsYXJhfsf6",
  "key1": "2HpzYjyQfhBQxJqNM1Q3PUzyikpvJHH2omPzJBoPMRcGogpiszzo894GfaMiBushpAgxs9Cx26yTssKdxBjpFugd",
  "key2": "5Yhqzor7kHSY4ixujdiBzReXxpL7KNdfVuYJMTFYitLTus2sr4i8eeM3iy4bsMZXgxCG3y2cew1QncfpWPBriXCf",
  "key3": "4KA7fiCVjQqRgCUJWDWq84wiXTRbYnhPMB59cDVgbZkFBTsv7ijdwoURaDX7H7TnjXgYdFXhxjKevaXBXqxAp4rA",
  "key4": "s3FCkKrhuaiQDjHNjPiKTE2WouQAeP2ELowQUrpW1FN5AssBXPedhuiBMtxqHf4Zuu5YFxdifZJ7i8cEtwEmTjw",
  "key5": "4QHSuX5pAtB6JTkVshYgN7Lsd7nYiqpuNEVK1wUYiNWba2LuFiNQfccgrE5EgvUm6rZ1xpECwHjjdJv5eH7DRg9G",
  "key6": "3pksw9EPufH9pirUrmy7o3ctRG4Z5uFDgN2VBS41krKh2kMeHKd7yPtRPZUoBYyGjJ34TSyRqcedLYpRS56NwhWe",
  "key7": "2yXp3U78cqJsCk1iy8obi1exVqo4xu5BBuXkuCctk3ZkYf8C9kW2kpLbGGSzMMrorms6EHXqEMVhhYhy357asMzR",
  "key8": "5o5Vi5nGbCqSV5XJb3xmTV4Jd5u33P7ysTezo8oswy1stN4tie1HtekMDpCr2wiHAM9FznYb2KdiA87p4kneNpu6",
  "key9": "4BN8wusNhRbzScacNW9KP8X1RsmS8ohZczSyAe8aRBrTJbdurZWgWLKGoGtSkY86V7H2f7NRRf9kgYugcb2HkjS4",
  "key10": "xipdNer3QZvZFnSmKQy8uDTJ9ECuw7qtsPXnL73GqqLF3bKKAMueHkFtrRgM2pnpNyDqJnMbue9U9xBJ29Lcws7",
  "key11": "3gnThM8srTww6tDkwZSWgg9VXtWLPhqpyQ5TV5a2v3kD47hxje8Ere7ta4J27Y3fyEd4FtrAoGEq4rpbmqSCGMFR",
  "key12": "5VKRvbJe9d1XcKbwxgzUGwooKUVEoL2T2erGeymJT65ivHdan5M6Bb1ARM57NvwuyGPzuGXhKWHopJ7VACHWGbWW",
  "key13": "32jrRUi317CBAjLnQCz3rwPuLYKxvpvbqhJuA5bgtqpVdVNzkVRptJqrP9YGLF1bTETuYShib38Zk9UfpE4GbBt9",
  "key14": "RYjHm5mCNhTATojwy7XNYrQixCJWVqUGRQaS11zs1RA96JhgSgs7wfSzmNf6HfQtnaQrpsr3ffyCRiZZeFizNq1",
  "key15": "bpxKvF9YsqHUpgxqkam4S497vNqjwKNhwBLxuCcT4UCPi5WwL7uJnbn2djYaN9dtj7SBLFgAfxyY5JPASZUKHmw",
  "key16": "4N2tsprCzaXo9wkKjjpp6pAqsZkryuAxbweev72cqtemVF3ECf5VhFfFMUMFFeUkuLQkG1mnSyuX6Sz3BHse1K9Z",
  "key17": "4TqPfbpbHSn6iPePTh1as9kJP9BfE8TtdfjyjwKZXeEMquKYC8t5t8Y2EEAX4R9HSUY1aPpWUbrdkHX6ebB6cah6",
  "key18": "C4ixGWD6kTVdGb1s3HhitKgbbhziMVYJpaNu5vZPQnQjbgbuLEZphafZAL9s2fAxpSYcNqNhQNyhTDDuWt55JP6",
  "key19": "5rTqevcTwGT5t7KEFguLmdLWCuaLrGTHy1ho8HeESSULULgE1MGYTJzdHFFwXU6LNapD68sNqifqQDh8fkS5sVa7",
  "key20": "auYNpkGbduj9hDuZWTKSHVamHc8o1FUxcZZb4TnTSN4grGqyHXVHsfyfrL5KhxvhFASqAjqXYTRqwCGmoJMiSTP",
  "key21": "4bcbDB3k7uuHGxcMpHLVPF7cwAChMHqFaZZZfDXpujz2pMryptJywNeHXZ4iNJBjJ3K7Fv8uxvLE8oicUoqMH2jF",
  "key22": "QRte6W6sMmTyQscfwYmHfLQ2RtYjsNsgYJEcYWLQtMMmcBeZXbRG8Zi8kGXuM3Ug2M1MQPjH5Lr6AJ5i1vd28F3",
  "key23": "4KrkXXPpvQYr6kWywUA6PT8QZKQnkGgKk5PvSfUQhjB3TR64WiYntEZtTtDaJYf4fSN3xmofpsFB1mUZQNQJgiZ5",
  "key24": "VfmwuiQ1g5mj6HpBX7GzzfTK7W5zLeKewfMrqaAzM4y1oFBhEHdtZDDRjm2djSNT4neD6y8MBt3586fN9Tyzpju",
  "key25": "55jBSXNJHR9opEfnHTQGkPQ5f9UVPq8zske9FJJ1VFpxk9hHQtwS963wVt8a49ncsehW5xFtqHr8Nk7euN7C9QBc",
  "key26": "4eDnNLjCpPfvfJ5qwiUU6K3EMtwWUTqgfsA1RuXJXeUcQ5iKPU4NERG9nAuiUU8MELM3PDSr8XK8w3yWxMAyy8S1"
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
