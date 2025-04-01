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
    "59p4ZRhgNArjctuA1RtSh6RNita3uNKki99TsjJ29Ne78QU4LMgeNcc8iykpKNixuTM89RHjuKTJvjietvXt3y5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gcc397dZ94wx76mCYp8J1xK4BSvULHmyu8VEF4kqvXVQresZYULrqCLMMuFaDMU86GxSeurBpa2388VCLErr8G",
  "key1": "4XpotiVFSuehaKSdDg87r9dzxJpv6jZjJ1EhnRnFKysAheuABHaQRyjFCt9JXwfd16cCsZkC1byaQWgDkuX1snF2",
  "key2": "VkajA6ogyeRs3UsSFzZLThhRfzoKnKAWEgT56FhtZExGWiBT7G8LvRTNQdvRV3mSYp4nbqHcvydytv5nNtjjgxy",
  "key3": "o3xyWihriQ8qB7BBJVC5sZds4TkkXfrmjQncH31rzWMH1p5B3e7wfhVFXY5AdASQWN5H5NRDVsfyzKZBF4CBgPv",
  "key4": "3BzcivdkjZhWF5eW9E29f9eamL7iDE1QuWAaskfrfBomNaiGo3SCoWDrJZD1CpZB14sbFsoLjXT2k2K3VcycmRsY",
  "key5": "2yDrxnhhGtcZ7sZawGeYSXwuGUKAKeaSfh7JpuGw9WkxCR8Ra8hqi6mgzZcDSkJ7vurzidY9wgACy1txsPSQhbmd",
  "key6": "5wGvrwAnpt6fZZwwXXsanfj8g82X121y8SZwhAvDMjUpq7jgquMNm8oT8PaDT8VK8Q9Gv9s9mcGNQRwSp4Y6LrZQ",
  "key7": "5n5jQSPwzVBGFJAkrvPqpFKULJVKVCbyxr8ehMnwaRSa4EcPXpzbLNLGBSqhbPATVQJQumpV4RrCdP4FZapSe1GG",
  "key8": "2V5iqh1vHXzYbToFKqyTLCKMQxLaR8QpJxKhv7pEEETeQ2ofi2UksB4rTW3uurQvtacxz1Jb7eerUZybvpaXDkrE",
  "key9": "2DSCTyczsDUTC86xcFSZ2ZDTfQ5PJLAVawhhSiuQDLr8d1PfLbFMXDcaocvb5pJsnyP6eZsZHBBgKBHYPkjvx88D",
  "key10": "2fxzG1xrrgR5uPkNu3w7wok6WH17ao7DSCxwbf6oNV28mPocfa1Z47CpMukVFeo2LHum8EAYHP21agtMbmHsWaDy",
  "key11": "pu9FsDfHpDnrBDumNvyzYv8ytkr2ydgGmV7xTpuBGM6udk1fX9xaqUjZvf7dJx4rG5nzeHH2tFryzQo8NzUHrbT",
  "key12": "648JPxFcJ42dULcJnH91Q2a6DdqGC5J8JTvxBZ8jrZMmnHzy1WZyAdCraKwaGozHR5e5tUWvnqkkV8WcaTJju1ci",
  "key13": "3eq3GV4RWBqaVhbiaPim6xJs36f9xxAK2QDt5yDAnug93JRogvwPP6bLfp45WEhEiMB9JtitzkKVcfqfzPsMhiwH",
  "key14": "2xnWMDFrNk8vkbdfaG3oAi4Uqtrqgs6YajaDNEsufaixADSMWnnodVgo48f7YbHvPbkYHqB5C4w2hvVy1JHNmJfV",
  "key15": "gM68g7iWSkG2wP1ZAye8WpCf5i1iswWVWzjMPB8RXTfGC1mPtxUCppqEkDX4dw5aJWMfjrMpeoTB3MMPmGTg1ys",
  "key16": "6EyzVjaBtYod7p3VKVoPbrjjJj4x6LQnc4Zbo6Qo4ZCMkHgZuKHmRq4Yjxhui3HdCiVTdy5Mc1sAvHxpo1GsuSZ",
  "key17": "4GmeweGxHv8cBHpv2ZzC8yQ9pUN9JMKfK5iwS5zo8aECYu4uufFNw8bxQgWGQNvLvvpNo6uktaiwdWfV5H2ACxmx",
  "key18": "2JUbMDr84bQya87Yskq3KCe6ZEQzT2gN4SxSTdBYavh1sYEj3BKNrdRwwLzBaLerv5oum49kiY8ZrRxxa117cSt",
  "key19": "2wQeTVi1HkN72wJbe2WvhVeXpFT4QyyJAn6Bmu75bPpsS26Skr8woDJqLWs2X5jCFEjatdQX6yPvVtwf3RZwZHRq",
  "key20": "2APoq1Vy7nsW9ZsJUPHUE2bdeocMBK89XRvK4SMw7qpaiEz2gabkG58cEiyfJjUE8mbCA2iEPPjAQXxaZ9uJ9mDQ",
  "key21": "eNZQ7wC9bpCituMrhJeQdPLQ69FnuKLhz2XL24fZcdzH251x9WsRew6WRn4SZ8tXNvXDmPgEGENYUQqZaGXn78r",
  "key22": "2YCRLAzSXvJq4cKvWuvvDakmWHRnUHFs5aEQuW9qt5ktDGJkfG8recygYyLRYvV1aVD7NwKuWf8vmB2b8cZdEKWx",
  "key23": "2oKkGj3nnZWWrwc2XceZPtgBv9qd7akLRzLdhiMTMECTMAdLxkCycoQBKfRPnErKgUxogcRRPnSdzM7u5qKT8Cvu",
  "key24": "3PZKR9vBi1HX5XugotLGkxBmGS1Z9MwSvAckwjfjgus4Xonb5y3h3TDAPmxsMnM8npekSQ6yDAdmY9yts8urThsw"
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
