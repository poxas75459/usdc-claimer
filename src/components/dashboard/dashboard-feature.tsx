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
    "5bLfUqJKj3HtWwesTXPVNmgJQdSMd1LpjMVNgj86fXrsoSHWYcYSKxeRbT1yz4RekLcRtuJ9Rws4jJm2D5hWnihJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EpTmNW7HfWqoQ2PrPXBnKz92SNtmtBd1JbXYChq7Ed6ofCE8SMCbrqhvZ5J61Zri6aHB42YJPy75PWQ4ML5rbMU",
  "key1": "2WKAz3PueAq8hpPy4jsm3WvTtx8RX2ebbxaBaVSrP94bDnBRsWXPyuDxVezTdRCVAVtBBWSJzfsqqiA51LNptgLT",
  "key2": "4aTz57dWFMRU5rWuXZMhJzb4x7RykkYKWwKMXaDqHzuTo8CLWBgR3YksgP7vUcfu22FP8m3Da2faEhZLDcjCWt1c",
  "key3": "2dDm7iYBD8XsMwhaNQ8F3o8isRYmdzV8TdWMSY7AqBJwrACKxcKDrTDTHzjyesXmTD1XJeh28qJUhVKZFvFYtoJD",
  "key4": "4XFjqnGJag41xH5AoXg6wshFe9VGwcqMxYF36yh5xk1dg6Mhb9cwY4T1q67piXvCKJVAxyiMRoC4whLcfFHR1Scv",
  "key5": "4HLRFU1TUVPKiV1xhceb4fki1A19m55dV41Phwunz6FvfqHr1pKEGi7X75LZL6AgrcAscKiCgTk5BPNtmPj4Ehcs",
  "key6": "p3kiMbSjPyhuVgPF9HJC1XKKyN7pifXwqrbzGxgWqBXaL4JDJEvVDyNPYiHvq5jQ1Ah9N31HLKRu5XDEG7BfkTo",
  "key7": "4MYNg2u2UoupfnaZCXLxLeekTHSV4FqAat5vab4EhHryR3doBeY9x25zzEYcy2kYDFqGePp6jsDvyw7D3oFNwEhm",
  "key8": "UX96ivAG48R4vh3Do5Lqe4hG4ypuTQ2xsoZ11K8jRacipuz3W59dBNvQ9CmHrDFL7y4HgZMLiSAQyMqksabNpCN",
  "key9": "4cW61LYHKWiUaxUr1LYxC2crGG3MNPuMnvZC4KDoXSehGpxm1px29FkVngnvfjiTvAeJkbGxrd6hVjgbJMcAyuVC",
  "key10": "4sUViHGoXZNkK2AhZpdZUzKACDgrDsx2Hbdo6SQ6uWzj3zqhLFMbqmSrGLqhiy2FbkYyTGVX8KzBHPRTZrfBbCVA",
  "key11": "2bBM5YHDWMWebP212EEAyAMiJVAUVvZL5ocYmgGNXQzUekptgjC4uJQq1qdB9vvjnJrycRvDzRpB3FGqxWudrp5L",
  "key12": "5PTGg7yae4yHyuTWArt9u5SbAPrmu8Jfia3dfvMzeeY89kk8fkMqc5e5GvgwVNpLcczgpMGMi6jsK8RV2Z8F4qFp",
  "key13": "W1jsbaFAnL59Kf9jbEx8CtRxmYS3SXTZJ7yNL7qJf5u5HMqvcSTaVE391o3jPnoLLQFEDQbZK41b8DwL7zxYTpt",
  "key14": "3WPsBM7oM2i4Y9AXzup7Cos8NbSVec2iqvStKGap3ErU9DEXt6Yt8sH8EASdmmXxBgUJ2z4DurZeiBj5Up87uXi3",
  "key15": "WBmSyntRjGCk83Ag8xDmnRMzbYBtZrSCSTQZBUfwLdgPK79PW8g1PdNjR1aKvbRT8su2oYmxu3ERtBDf5HGpN2m",
  "key16": "33HMxMQBJmkq4y2cLfWWdWu44GzNPBj18tKjB3nrSHSAvbWgzmBEE2SzsvT2PN6GgiszJQWeB29DpipSR4GEn88p",
  "key17": "63DEMsXVE2QM9dWoPJG3MGa2B2vNh5EBpXeBDVqEi4uJL547ea7kwWD6SKUAFdVLv7vGcJ7fFfyAq2wCukHFmAkV",
  "key18": "GZ1NLsarTGYCxXiEwbyUqTA6VdVvMtiWcsvY8okJngA58rXiDe27qhBvd3fCvFxeyHdhCcLvVKerujxKVpJ4jcU",
  "key19": "3ggSaAUT8EybtV1uKLShrVBH4vdpg4yr4LCPZQZSeSBzKCQtadEZQMzynxcX8a2sNS1AnN9p4hiZHt8nL9UuSEcF",
  "key20": "XbHdZPPZxTeDWvsBhDo7DnaLBLakn7QXw3E8vQjRgVJ7ieRRHJPKmxnY3pcxUMe31AVcULxH168vidnzb2Ny2pe",
  "key21": "5FhcHDRsiXAvtLpGxLB6trAAsk6Q4G8AiwSP45wvYXKZRjrsk6buyJt6i1zyrESF5YSvTS6xRzZFVNfPBShkgVx9",
  "key22": "5pyMJvu5nCtNECroJ3hhwwFPfeMoWa6j5zPymR1PSdqB7jke6Nhw9WxAHNGat42QRMwFxVjjbhM9QzZhkC6ZmGWq",
  "key23": "8GQjNQAYd6aMrC8f2AedT7k7bwkZM8HJ2tstEFroX5XD1XjQ7Kkw4TMZJLu6As84ZGx1kqo75KPZWRTQFaSEXLi",
  "key24": "3T53GA5hMRiiXikiGxqkH1aMmLw5Lc6KJsTxVDThMWGCbU7MeoLG5RX2GdEWycgKSGEnrD9KeBN6inzizw4Ua9Bu",
  "key25": "5ngFRySEWwqgUrz8fqqc64ZCHTe5f8FCQUg3ru8aLftsr4n5LFG4YCZgwKQCDg8dooG2XcouDVHycFSNaar6RocR",
  "key26": "75C4kJy9cxXUqV5QTYuwrJSPCM9NtfjEiQ17F7ddVQvqt9gbaNT1hsQmpMB8bWLuNeTZBegd8hcLdH8am3PiC7B",
  "key27": "5YbwHL58c2Lqa3XZrWfwLs6c9N6LnJ8BtXDXjNqqSv5QHLBgHvBYqWoCm1ZnMep4s4Z7nRUpzYBkH8yPcuiQgSPy",
  "key28": "4nWQJfCYVrBNbdcFt3zYBcXhCJYBNZWQRaobdiwwSJ42FfgifodcoDq564VRp4q2LWvT6Hmtf9WiaqEk4Tdqk2Dt",
  "key29": "3J5Nd95HDavboxVuRoA1VbaQThhrUaZbZG6mcSr5QqeseMhxiuPA2TuLCXzMKKGenFZNPKdQbF9BxqDFA5KBWF5p"
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
