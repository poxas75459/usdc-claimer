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
    "3Cr7Qb6qnpECJbP8WDUPqPaQ5kYz7aDdpC4aHod3zfbGfbDBxDJHL9AGH3zXfwn89oY47H76jkSKkn5hhxRjLXMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yinpfoorZfYFUeKCH84asPx9QY7LfZtcdXh7mWwrBEa4jSA7vg96VoBMk4u7HKdwMEEyoUwTRBkDzAp937nUBHj",
  "key1": "579RTGNo25jKyhZjBKQUjpJvjry6zkGJgviUnpbVckRVMrgb6G6QZBpixL5tQGEwSYLp19hj1aPZMDSCknwwT47j",
  "key2": "GmLvTvajJW4mii1XAUQPC8rurf8ANySYEdrCoq7VtbQawKUcW4cDDtJ6MyysTPDy4mSEYMEmgsnytccWgb3X9TH",
  "key3": "4VtXmSgSzHtxDCXhZSLuyFSidk1JmexJrP5mfDejjRXkGx8k8MkiY7RgzVSuqJ9CTC6zwWytUU6Ygukr2C3ZtnY5",
  "key4": "61aaAK6sfY5sV6W2qZbDVyCC76uAakXqfF8kL1TPCsvF64JytJu4HnX3o7apAGE9DcaJeCvTvcSv8ywengNdDWFc",
  "key5": "KpfShYkEicyvjrSTFsWAHZqBPWj4nzwF39UPMtnFHaC1sJzLbTcjasefNqzVuVuWdRRwMJmoVf3bsVTU5bhJcjE",
  "key6": "2FFnPXuQAU9ae3HKgqJZ97TfuoKNh9TRQsqpFWm9LjfuXAxVS4jRNVzXx9maqZwxxCSDHP2oQhtkvVKf9Jy7X5rE",
  "key7": "M2YbWj5PoooSE1U53qmYVre3PLmZr4KuYFuErdTFs6c5ra5oMJkY2VDoXLtnGCUTTKRGPBZikEteSSietAyZwqH",
  "key8": "2EbwHmyL7o5RwBrarMeHQH2qv9onjAj97vAs3BNafFVqDuxDLfyPs7odg8MVi2itd2pspEgwDh9QxyeQ7T7mDVfe",
  "key9": "4dGaV2XCMxqYWv54YxCex4oPGJwpmChYDtNG8wbiZjhE1P8wPrfGkmgu2xyNnPFdmS9tHTBkECYTqDGnsdSNnay4",
  "key10": "4H5wGLuaHGMr7kDjxmqXVtxnUcN7tE8Fr5BiFLVT8ab4Cx9KqnAtpvtBjdJLLjFbbqgADykkZQiBZaGVoqZcW2CJ",
  "key11": "CiJAr9ESkzhB7Q5xLY8X3bGcQEbNeZxh9xJXuE8LwG6hFNNsew335D9mNojcpGynxMzQRTEhbMigGdv12F8rPzp",
  "key12": "3ThDKeVkWcdtWcN8GxMg76yEjTYFN3LpgVMFXA6ghKXNY8G529QVtNbMTiDHTUdsQzPYCwmsQYbzzvwazWb8yvVU",
  "key13": "4imK7afnd8JPyYxCEhZPxMopoxdS3iMA3v2dRwSwwNUDknNJv4q3wetHicbEkoLhE6FumZ7ACzWspXV5UrHxQ3h2",
  "key14": "5WrXV73HQnHL2jaUtL4ptPd8WLDPrZPjn7kKCFSxXUzZ9ikEbiJtWoS3oHHXdU1TMA4NJj4aH3AW4jkKPAEuYK96",
  "key15": "5Em848qgPgE49kJJcqVPVZmmoTEBpN9z5bgPdjorzdQwbsrqwvPhUnDj8xF4xoZvh2raWNafwHxUMy9wNGr1C53e",
  "key16": "2UvQimAQiHmP9cNtZNkNreQjGouspugc61bCpdqZ3CWZapsGVzqm3ng4186ULKDbU7rXxnDQnRgexJfQ2LrUiz5K",
  "key17": "2N9ftGSsEbNk3VaGNzwYkR8f58EJtD1Tbg7gihVFR97ZusDyBFwcNsp7Nex5HoGdGveJaGFybPnBBbUkvyChTWMF",
  "key18": "EWH4HJaR12d1KDGc4vPZEmBx1FzonVvgFYXc5w7Jaq6tCwnXrsz1GbPdC7zRayrcNvcM2VzwBTvvXuPAzQPH63g",
  "key19": "21nycwkhrBm7YumnMWpuzyudGDvM42gyhe47zkrkoxWTyjRSvcNMBPT38k3eztNvfV6WZSYUp3hFgMNDFBjTUoFg",
  "key20": "v7D7X8195ao66GSPXWuYqAHTjydLgHFxcK3sV79DeGkqA464Tj8BMXuBwP3hnGRgpDgQXeYkHovdC6ViSABTR9D",
  "key21": "F3hjJ14VRqVy2CyXeQJgedHQz5RKnegytJnDCQSXSoAv55gPFf23Xfx8hovVgcVn7LpMDNQAVh1Ro6pWFqjSd6d",
  "key22": "61tLNk3mDU92wsnSkYktB3nEprq4peY85iUDRG6WUR8NiCmgXypqmn2sf8yKKsZRt75V3LFKniqMr43XsfSfNamN",
  "key23": "gLMb12HVjN7sDabKbpwWcEbkQDJcjGrzRp9eswmSKCAWodZJcnojuMskuqPGQSDAUWZh7HW1fE8Ha4mQxRfSkH3",
  "key24": "33eLxbdVCBaXhjAwBn8uRWi6Yu8k3NteDmQeqEp3knPGKcZXN52Ts6cEPGgJJ1yoKfkxt3PbASx3PmZmkSrrD3mt",
  "key25": "Lzf6KWmbypEpptGXyrNDpcieuTxuptULEpuGmcc7RFBMX3k4EBGm3PCPhNSNSARFPBXYnWF2m9PWicePJikKziA",
  "key26": "61CkNPWv8YfFC283tYadUX1cYmy6j5eHjNAzTfVupbZwicAzmPZxRX4AqoRPQvQ9aJnUpNDSgvmFtm9vGsfxU2eM",
  "key27": "RXgiYpg5Ug8UoDd6yxyDJgG6L3RR7J3FLJatkjn7NimmgtosMFxwvQnhwPPpB6RDS75U7C5MY5pQ6z8eittejkw",
  "key28": "4f4xwUBuBi34cPBJcaKgGXqz9KQuhUaBvMgbLHya3HuE1EcaAYawwLtxSzFtupMyMTHCX9R9x8BBoNtpkc2Yzm3t",
  "key29": "UsRPWiwu4K3nkemcj2pGwRyVv1rMUPeGB91Htjzwwyk7WLC1JSawKzHC8GP9Ff837K4YfYgdngRieyGRtU74zNJ",
  "key30": "61onfBikGjBKPpUmpgWQdcmMU8XV1WiqWyjRVG6yV1EhhfVb83FJkqUBDNuumq8PNo1hiG6TmCA7PcFych27J1LU"
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
