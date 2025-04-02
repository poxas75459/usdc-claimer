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
    "49SLoja7N76SDFX9pNk8QroenXnamCUyLRWzcENtCR21WrM6yhszJTVEwfSown375Ewzd9eR8QQLgoFfuEQjjvbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YkhWJFyXAae7TDSyBDVF6P3MV9UeyMuFUQWo8BMXcMRNcXrXjroeMCehJpJ2djH3xy4EFGaojEfRoypCW2kSNe4",
  "key1": "652wauZjWXvwLF52eo7gcN8rCpdJGeuUywNYFBeegrSEBTMezzSxhYusvzJVFqTgAiHUwamqwHMDz2Xoc1W4bhPx",
  "key2": "2xKEQRdqbekMfiLiAoAERzCJLHSoPyRLzCNkNgnqpoRcSZV8sGvhW7ZoKF2HZkESWP6SbEik64x1DFBM5DNSFyBi",
  "key3": "aRcydCPpbWicsjYgkvHQBtXrfYev28GWGTU2bkj366DxaTQyGvbK8PbeayLvUBPg13Ntowm22C2SQfvmwwqwjfq",
  "key4": "4NFtCG42SsMQAp2HFiXqaeWmjD3S6wG68RBsSBxsUvx8By28RjPg5iuyezqAR5ggUtLktbTtJHZYLtbEF6TGSvwX",
  "key5": "3dPJmhHyaZXDhq8tshbuhtFNMbaMSPmYg4oAPnGgmrdCxBhqf1W94yLBQhNgFbmek755DC2aQAmCMSMdom2BZUf3",
  "key6": "65uhfXvjJ216KtQhUoYM1VCW8VpVbLZnMJvUhbUnukyqbimWg2R6gzj6MXq1DC6tDPvFY8PThksMxRZpTFcMniM1",
  "key7": "5PAuMgW1ay9sbVJLCLmXBb1VNU2yDWmpyXku7KfyRnKH7gJGNreyRpnSFZTqKVnXogpSJt6wwK923bLJoA37N4g2",
  "key8": "49AFuF2mGZGGr8Gpfp2ck4ypKQn6wWNvobxFT3fnUvBYwhtCskTqKVjTbEK3WwacFg9Gaaqa7JaPydcDc3dVLqbt",
  "key9": "3dsAkNmDcXSXKvUT3ZoeaY5jQpERvLRRkLLf8jSYnzsHVSRb7J8ZoonBRHMqsXGPDvebbtayPVNiyUNLP4Q2e1t2",
  "key10": "5j87uhaq9AVwxrqmuG91ei9LaGj8GqrMp56Pc5MydrfKHxtkgMrap1TWvFM6mxA141jWdBGLvskh852wHHMGSGsS",
  "key11": "38yJozLENBwpeSmUoZyvJnxm4tpXUQTuqHjuLpJTVpHprQqEe1iAJVPyEKLKT93QxpL2K5ndt79Aa2TPmhVn7F3K",
  "key12": "5MXn7oXe6fJuuH1cgwsQ8duGFMiGNPURFqoKKpJeTWKYzii291EgL8UPSeU2iKEkLjHVAVyAMWrta9cUr7JvmP4R",
  "key13": "dBDjmr6ByBuevmXoj5Bo3zeqWqTnqFc68LiZsat5oC8e179qMcDGWdhhHS6HP3RA4tpqjAHvwrMdkeipHDuD2Du",
  "key14": "5bNabhrggkpgwxG3TDGEJk5uLSUUTGmMP95mTo3GJ3ZGyBEPchRt6BJXxQfSJ5FZB2yZjC1eTzye1YnM1JNWZw5D",
  "key15": "4irKZjZkktkmZTn798DdeSjSgZ1jd7kqTZ5PGa1Xeo17isPZVCE5AV4taxko5oY94uK4oZk3kmJCz8bkUWbb6C7b",
  "key16": "NR47VaMKMrse3UyvTwuPJjyXe8DAMrB3BxjQr4yo2EjzLR5iDK5cA5Jdoh4EgFb4xh8YEQ27gaPyEbBCYiDuVXF",
  "key17": "63opD95Jpxhq7moyy45zYKG6ZfLkyQNkLYkNHD4LX4KXqXnoTdCURGiRUkfDGugN5hZwXne3ugh3bWBPGkP84p5P",
  "key18": "3nMQM4P1pYrsqP2wHaLUC6LmkQvoYAQAvtAesLRH5KFfsqYqQ4vgtD8RRoKkp4ao7Ea4W3L4HBD4i5dc9CVovZwi",
  "key19": "4LU3kDaXRzobPbkfwas7cUs2SFcFJazWAME2RSVQRBmfNfFvQqZKhXMy99gnGUdxyEGWqmNRRqzpw8jKS8nqkAb2",
  "key20": "5jTGYMGKM5BT9KJavKvAQKdjexRCDGw5qcH7f1FBLmDfpkJs2ZnQk3k6rRm4c3MGxwX5Zv4R6T6EQpP3EvX21eBV",
  "key21": "39XbfG8jqD8aaNdowjb2ktpmVcP6BYS2Gtmz1BFxLsGbtXZXveCSQie2ZvNrvEZnM4wbLu2Q7pFmHFD3uGPcLDQT",
  "key22": "2Amiuys1JpUw71nBjw3Gz7GUMBwdQuaywiuaSw1Qg34ebkkMFMt2oSyDZft4svP1uTFefu4dd3ESaw5XnMjsr5ee",
  "key23": "3VFsF3mH4r592ygLeZV9qXwwbQBTLkczcuZhjvQg1nBuonYx7Y3VTDLpmsVST3xXy2f2DfwQW9TLVVhdh2nKg4xU",
  "key24": "aCSEyEkqFNsRzrZwhFwRWxTqFYKAQTp7Lf4NaPLh4ixMxEjtGQtGFkDZ27zdvb3esygv73Z74mGoQqcqfm4s8FW",
  "key25": "5Cu9cGMnUpHSX746kvDLsmknbeECM6N4NMmFMMhpNuxwxf1iVXM2cVWFaRnAxjLTkaGBWtjNDZ7WVbajdaAZs3AQ",
  "key26": "2HKveZAVTKDVHY7RgZGgB5NasJDvHWFpSjTCFLQjbLKzQxEbBR18CQsB8DujpJpEjfZuUXnKkW1jRakULKpQDp39",
  "key27": "2CYMk96sbSRFvq5rZw8Qvq6tm52s67WdfUH9pb2DuUc2sRMYTXvPhfGXTW4GwNw1LnzJdRq68sPJ6NJS1Qzghjww",
  "key28": "2TUtkBqHhfVviYoer3H83S27mWgDXKo5TkDK6yJbAAQN3qmxJGBhxqSUdrUnu3RzGRSpC4LZdBRFa22Rod9jN7HG",
  "key29": "2nb4C1QHfX9xDhPoPwRTwXWNcJJFUFA379Dvcuze5bsXNv8PaC4CkRoZxgUPQKyfGs8VWp3WnhETZrkQYAAWNyP9"
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
