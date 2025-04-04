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
    "39L49KWDCJtwC4QWBqz1ytkjT63MhngvRaigExVoD5gCBGhJtAwD1aZXwFfqhGQZwfdhZqJPQZ2fQnvYveweuqUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jqVsdGPmC7E8DHoJEfoc7JHjBoMh52q5pnPDrrxB2D9dZUJcSMbz7XdA1rFB7p7hHqJvU5vcEScP7egRL1MXiKE",
  "key1": "z7FspZSXwFTbos7eArazpQE5yYQSAk2whhD2MmFdyqKVRTAR3LUyN79PZJ79T7mjDPYy1BHshviajmm82x3zEZQ",
  "key2": "5DdAJsSm6Qn2knsevBkgM4Ng2t83VSwQZrinw7zQPKFsQFh4G8qLCkszh1ZG8BXRGSkC95jWtX2b8ePcpEamX4Gf",
  "key3": "haosu3nUURxMDhRYWPXoeysAhb8djPHNZ78jgaKRmDNpUpWVaLbX9FmJ1tu4q8rbhVqnFT8wEgaCwQJrk3h6PKn",
  "key4": "2PVrCzGKKrjA6NBwrw1eDCikn1U67ULai7vepwuSCHKHzMwzuxefq4ECjNcHq8jz6dEB1H21QoeuZ7DThH6CVEbL",
  "key5": "2knTWpc65cQgKvnVVXjfYULXBwFAhBnNB2LGuNgFQLNYJ4tUXTXxsMpPoedfvjEaaPKqf5XvxRTZF7uQYfHLA5YA",
  "key6": "47QinxN5aMMDp2pA8DzRAaNDs9Fc5iwzuHYQjsMad7ZPmt8nnGzZ4zSDe921iSfw3UHvyEMcXTP3zVpNrM4ZWrDZ",
  "key7": "4vRj7LCXW116Bukb7S3iXhaJq17cfesE8ufEUpbL95bdE1Rna542ZW3iNqYzW36rymFsQFUmFt6P6JTNv3ax9itA",
  "key8": "5GDAPVGExY91B2ErN8whvGetgPD3QXpU3KQ2vgCDvys3qbNbSavm6B54K4qQQejFwVKjPgeQUgJtsaNRsRZH5ays",
  "key9": "2uEL3oKVG1MsHPSdx6ZhYjKsmDGm3R8eJtkqgLrSMAZvCvyUnepNKD2XTCPQdAbz1KLcKrF7nTx8BWP5yKHW7Me7",
  "key10": "2mgw4yMBsKHEddsUkk8HJi9wahfWWUBSb57Ac2tdSBz53KjhGZjyZ7iGUabz8pwG2UVwir6f1e6g38sP9HS1cCHW",
  "key11": "aUa5GLDdZqK2Gt8aYEUuMCWea6RdJreu8CHEtxnT8HgdTiuArqZNVFFB8ptAHXoiufXfe4EPVMoCTDeRovHPpUt",
  "key12": "64AjmPvAgSd6ZndoJAHA77atTQjD17uY1BKFdyavDvXUjRPHUJvNthNGEUfg9KzMCnHE4Umodnzyz4WDEwjjERW7",
  "key13": "65a6Gz6RLKJhu6uWCySDkGPv4gtjzpvidBLRV1Lb6EpWQPpSMyHQYEUsWdkSe8ENZs4b6xr3mKV39gLfvAHot5z5",
  "key14": "oC5NQvxbux58YCp6Sz3YFb9XqVv7ZTB3sbD3ERaVCQTk4VRHxdT3RjHUJHNE8V8RBH2qx9dJbkLQ7Jx33i7uYLv",
  "key15": "PrSWagrXpEidwhGrDdZoum4ZrQBQdeV16M7t351JzED9KK6m3VMx4kFg6AUS5fzGhQe7cUcTRcreZFEJCvNH58g",
  "key16": "5YiEZJkNRqsocRkDAcqfKzjG7Mkutn7zapMw9N6D41zKv1KAbtf5BRSuTuEtkXH7diU1SiTR9ksnuKJjraQUdQS9",
  "key17": "4BRgHTyQSfcgbUwXiJySnqsgfK8DYTJFHnZSV6P4MT8FqUxnge4AMibUjbZFhPpLvig7LUjnAUsBGu1UHsrtLdzu",
  "key18": "5ozZRqow3SYmxqWqfSDKRHQbNrvVbubuS3uzezKKbbSATnWXVPjsPJmwgAnKMWGkokuYQNaiQgnJTRnmUVT7TdNZ",
  "key19": "5NyiAhShuxPw5S6Mn2F1Z1du4CCRbe9o1WvahMLS58ri95FbjizADo2i6k7uHAhus1xy2nUvT7gDhqbF1roVwba1",
  "key20": "4zsyLzZYA7nihKoXDKA9H5kBtxJffEALkw5dHx4bRTDSaeUUghth87siJjqpy8uZbEwMsVFAip2dnmM8HrMZSNW4",
  "key21": "2Qh5ha2g1Yg98YAYQc83A6ovY7Gj4L6mAWZP7Mmy9w69bviDjwmrs45GPttUT6S5nc7j2ZcGnZnpSwTHjAYj4Wyt",
  "key22": "4uLTiQq3hnuG3bAP63svVoUoWMacmxtapT6rCpQzAnUZro8KMQAxkJYCVsr5WiPPWUWqxrUwnDoVBXeEJJ92fa6h",
  "key23": "2mbdZAKm1afyRH2nsWTZgBtVxYeiHkx1PeTdTJXD83k7k9WkzDC4Z1F5pZ3TjVw5ZfvLYgBBKmCCpoPf5RATTRXF",
  "key24": "F2SEKq8dZrR8ggvhkZFVY4PePTi2Qqyc5T76VQD21oYM2o7UoXFuLumU8oPHqBppowehDwrV5KUnt6jVnkHDNgp",
  "key25": "p9cNVZRoufBzqUoV4dcn6HhAzMUC1KeYz3cXvrhiC6yyfFio58iDyBFGwMq25ob4hgiD3cy8ftZ24rLbhJSTb4s",
  "key26": "34ZUz2rrDK6uKZkodu3bwPsKvMqwyPKzDgSqhE7F3KrusB75wZT9AYU6ETCJ95E7cUpKtfjCwaNJdLHbyDaNoDrd"
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
