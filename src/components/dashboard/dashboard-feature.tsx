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
    "WKHQj39ETFZCfA2Xtn3Pyp9XDxTdrPBh9c8RjmNLqcNkfaH3d5Mr8w1CeJY1qG92erR93cEPcpWzFYeTbfUrzKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z3efRVre6KNyP3pPG8fw4Lf1cCrxCSCBF95a3RuUaQ7ybWdteJMk9K3Unpa5mgoZQjdFPRdq372x6uhZw9Lsapw",
  "key1": "3cGoVSp3oa4PGU9ADu2XnzjC3UuXLzLUzg5PFAG8poHtCvj6rYXCNqUeARbMXJsyLPag2G6WHaYSTMf3VuD8XPnz",
  "key2": "1fPp7o9cpECVot3ggnTzkzjRZTMk5bdBzrMFPDdVuzmUK5Pj4Ud8J9b3MwwxzXHAfs8WthKZRgGttprHR4XTKQG",
  "key3": "3fuSDD1ZJz4VQyuf4QMPTQuds8k9DMUUhq1KHYDwd8Qe8ZWE4nWczUXFEfwtLSwogwFFEgUwTxXEFu7skyYfDSQY",
  "key4": "2pKiLpFMvSQgtXMUBJwci2pzsDY9iV1yqfTFE6jqK6fDq57nzLPyAuB8a6s1RBmWGQxwDeYKW1ELbMgorUjNyKHd",
  "key5": "2jLmxBDEbRusmHJEnXa2J97J7aHGBEJoaVRZ5Dyoy4QHNKiCyb7sjoCgULGefjENK7rPwsBAkEB1PN3fpowyiEvK",
  "key6": "2gNSwBC87AB2V2yoA1h1nYYsWqBSWvbsZXcVaQQsX8nhHg1tRNo6tVbEoEfUjCiukL38SrDWSzNZEXzLqkEd72A6",
  "key7": "22ZXCJhvgEbCWnqvLHj7sW8seTXXVVzwwu3G1aYH8bu91rSwPhaN3heX89kirwRwqrnNeczXf9ojJTSKdJ3bJRNS",
  "key8": "414kjMjFoXv2sbyaRdr3Kou1whmzrZr5HA8XMtH1L6C5JFxPYtC4C3ZBH4RZzhvnGzcbKVAW6kPRm4rMo3YJVSmh",
  "key9": "2G8NjTwzVBV7hbop8o1NLw7M3BZnDNxeaXMCCEePRCzhbxZ99VNgEaPuwcYbh6YDuBAhaDTdp1fBW5fsMtygE72F",
  "key10": "65BAzztHev5bit8tKcmsgTATnBYwSkj8rorxHBP7v2KuWrwSUAKoCVo51RveAQ6NFLLenomtFANwbnWh2Gxd8Hqy",
  "key11": "2D1rMAAywRRH6k8qED182mxbHHmWWarXavmXzgZe72VotFVGUxriuX32RGzQR9wQF7j89LDGX44zp4AjuwcUn1LF",
  "key12": "23yxiegs97KGx3pQeCk3swyYiiqsgZSy51EHd3Tx3VTAcpmSGtwFBLCXHtFq2yUMBfLiDkv46Kq13bfUuUXZsLRx",
  "key13": "wbB3xc3taThUNod2obkt1gR2PuosKG3zEusMKqiFbo7j2sNtiLPvHxxX4eMWPy7N8yzhdLnCQRd6o4S1s1BVwPB",
  "key14": "2xk2yPbtT9j6ZiuE7uGFDtUoRRrBkwDKAdyREonEj9VTbP1hCFiCnGPnE4gYm1yRJgkdndMuqFDBZma3Guj94Uy9",
  "key15": "4d9Kzqcn17YGQbLMh2qCqBH8huZnJXoD9t7or6oT83NkXUGYs4CiSCsqDuMfeCM9vs6cn5ae4TjyHPCG7wrexupb",
  "key16": "52o4RNo13Z3hHPd6jZjT64s7r7if1wgq4BEv2Qy2RsnhyAP66r48qW5ra6D9r5BUF8VEUoR4bFohDQQLS1B8dmqp",
  "key17": "SKkNngo8tZzx2z3TLGvH9vmtkDhUVJpEHiFDCaXz6VSvpVefrKbyDq9JGBU4SWxhPPpRoshoRsCSy5pbpW3AKmk",
  "key18": "3enQxbahm7gVNvsq5rdkmCNitMdHvq3nRbJH97actcE2Z4fRFgxchSYzE7jDQpRKa9cKFaZrUKaippPM5AaY9ao2",
  "key19": "5nwKc2gSTpERc4TfV5AMBDKuPvGWAdqskred39ikfxbkAqjUJkPQi5G4KEHUhAxiXpXypxFADThiaaK43j4Yqqon",
  "key20": "2iurBEs4gKD8YXbpRSi6uGUCJsmhRbecapkNjtTyQ6dwhwZNuQpPLbdbiVAef6HnkFhrqKzZGqt86cten3mx6DUs",
  "key21": "D3EWNvtG4QxXao6faqchfgEhYQyLxpb82pHmZJ6GTU8io5NcEF7eyquoMFWGbKQqD1HRLqoVd2zr2cpsciTYyUa",
  "key22": "rZSeLKXHKJXg6q5TBU2r7qo7Mca56wnCpEaD8Q6UxEZZmYEVNR27wTaVcU9hyL6rfFKdAY9MmYFizn1X3SCrqEf",
  "key23": "4qUZw7j4sm6gQeQZzoFucfriAagRj92eyzswxrETBL48gKo9orgQqtfniuM5kkFCULXsjCEN6vJNfTHvjzxMf8gq",
  "key24": "3dLCpqvJoA4Ab8WK7c38tiwB7QcccH2QUmSaHCX9hxhSGhiKZxmxEKLefThhGwtFWBhXuJzQefNFN5T4P3htrxZc",
  "key25": "2heCGiNdwekssFETQxv9uXxYkjoVvid17VEbbQeED2VAYmWs4rbP2MMTMp6p896T7KcHvVCM5NXHLtPUZteu812a",
  "key26": "4yCKUz4yb6VA1DxLpvDrjbRJUvhm1Ua7xXtH8TWsEfE9rbzQf8LoQkHcCupLG9fVuVr7osaYSVBRdZzJFtYYi8QH",
  "key27": "5NCtH3YycnS2Vp9X5nvr4qBJTNVfx9G47k1zzHvA1JTR8565gJukKaEzbpGSaPhX9Thu64ExhHDk24hK1UQU9ok7",
  "key28": "3SLeWhBZ9bVZRCJxRZPfwQAGNxMzPF9VYE5b38Niqiqi71ZgWzMeuzKG7xc82utP2W9NapU6fbxjwcZb8FfJtAti",
  "key29": "5DoYxvjjGUKptn1UyTx1gMsmeg6oNkxXKxFM5fRmcHpUGnZNEkHTsn9n6Zcgp9xnhkuEJmwEkJWRthBm5fKqDp5p",
  "key30": "3LomAAjnGFgNTUUzKbAfdnaBnVwdwNV858xFvN68EfU6d2J7d92ZhCCtZHWjHxq7yu8mQCCe7xBpfKYQVBYgpmsd",
  "key31": "5sSMqCLqEaxusQHyupw5QGHAyD5wDWDHCzSyYmxE9JuDWhZV4cD1iuZddM5cZVWH8CL7K2E97S65d9W1aKHv1Lg5",
  "key32": "5KfRuGxjxgEEc86NyhZ8z1oVS6vEijDqdowi9LFU8UDt7utWibEf1qqByyDDuVJfiMXakkdBy8YqubnJgHiKF8WL",
  "key33": "34msFctPwo5dzuAn7BFpgsNGBwpZSqHANttkME8JjCY4uXtwA1WUEJqLv1cVYNE2hChz37B6oEfvtTHXodVWQA4u",
  "key34": "v62QUCnmBHiE6rnoM8jSddYaazRA8xcLaw4vdhV4kZuYFHn1gRjdnF9Zr4ZgHkrh7S7KshN63vP4q4K3QQEsSj1",
  "key35": "4MANfmsBLezQAcDRKLoEAEBh4iwrxDiVDjhSWJEJJWkSEJ4HVYV6nMFJ4bmxpQYtiHvTDMmXGBce2HZhgeAevspk",
  "key36": "4A7pNsWTGjhMDp9CRknzEHPdaNUQo4Fndhe1WJLUCh9MRqDyZPRPnsWjMVkR8scMXgLpY4DZPwJfuFBpuKYdMbi8"
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
