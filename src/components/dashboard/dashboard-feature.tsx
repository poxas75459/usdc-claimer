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
    "c6w5AYabSsHJgF78Zmoas9sxJ4rFeaLKnxx3Vqf6nvk4jzq2V38Fbu4d5qg1v2gnNsoLPA6zJCdcf7tcE6qxAtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iLUaJRJvSo32BwERhVSMBpcUbPCPDeCJDZsNTvjPbuTgYBwqrFePrWSBB86Eq7MfghStnXQmLw7pYcpUSnrC7Fe",
  "key1": "2S9NW8TGrpCDT7ZWGi8W7hBEsijbmyRGnNDBARPUrzZxLciwc2vcwigtHj7axnaC1AeJRmoPjeSjaGJzdzTD21dZ",
  "key2": "fodLTdHtbj89XLxTMhRZ81gSiJHfEEhYbNnuUUWftyz6LyrnfGeNPWEXfrV8dcXKuJWrV3kf5tsfM2RLF1VK78e",
  "key3": "3UWE4NLK1UwbNq9xAJg6DRxfktA91mjLM53AeZdWo1Ht67XnEUNPHsv49HdNS2qkKkWKk8K3Wjm6e9UHvJjTgsEB",
  "key4": "3zoANoVMaxpJjzeSTBZaruFhZj7xCRMgVn5cb9TfbdsDSAEmUko3o3iJQN3WoVGD8e1QfZ3rDn5aX9kR27eDuhm1",
  "key5": "3XpqrazkZDdbCiMoPXRpG9rjdVC5xZbqZL8KojSEvSjqXCPh1asnskfNf2uHmNXYfCDSpsGCgWXvxprQEy5q4mng",
  "key6": "nALnbyukVW8A52e9fmBCkkXvX896mFS1RCsEwcgVe7VLiBh9xictABtW9bMNC3B9Ag6uU5nVUBGjHXig2pKzZWP",
  "key7": "5xPTaeVezk76gP3fD5EXybXzyGHcpcSKzhTXEkNTs3n5tnXiD2fPPeNwfkFt4ZejfR2RCR5x4ZzAvExFr29376Jd",
  "key8": "mHXnHicBRXeUBQn41oakGiftH8obHA6jhp5xEwSc6sKivMmurPACm6Wd5tuEvVayH3s7EHK9Jn1kZefmGcvqvow",
  "key9": "5VGtLpPCbyY6LVcmNbpiriPhMTAnbS5eh5cbJu3KUtXh8ksB7eSxbZMhVYyUkmqpxGWtFUaqoyK1EH69prEf8KeY",
  "key10": "3EFyUwVvVtie3Y7EUzyzuqVkZzCChYEipYfXFFnkUEV3Yoi5smyz1uAACx31GUBUHmDNH8g8hCe2vcc45GHCzmNE",
  "key11": "5ZunpV73DS847Te3ZghPqGDVF4JHynZ91LwjYNbUqCUfuia9uuydA7wugfpFiQzi8GUrv3gqEEoBU6XeCgqzUF13",
  "key12": "5zqZUBUz7hMjy5T3pAhD5AqxaxJ59CKuNo2S9GQCUXm2vzP71gKdtazS3pis2ZGHmGXpshuLjbU2pppLX6yvUnoN",
  "key13": "2XitzED4xdrbANE15VhX1N4dLgnyhuJeXadUc7XvBWZ5NFvdRtTGERt4cxGczqL92JaTCDdco5Zy6Je3MYF3kkbH",
  "key14": "4K4w5Y7zZiMnMBnzxSQCN8MTigVTCgM6ebrVubRfZ3U9rU8VhDQJ5ZWo6sbzaEs85FguDSa1kBp3nv2rSiQdSa89",
  "key15": "vUAG6BUSyHGjSsEcZHUocrxq49umd6dHsRPw5vr21XVKBCSoE1g4hwaNYdxJxWqz78FKhYpKeo76JHE6U6g3ihy",
  "key16": "3Eb4cFqUziTqXUd7uPhxvssHDemp4gSps1daJdWbVBzUmifv2A6B9fA1JGkNboaY1XpCytDedU3UnEWiG5vRZhkw",
  "key17": "48mNHGtUBRX15GyL3bEHEiLEowK592dXFDP9knh3DDzFGzQM2XCd4jkApEfd5UXzazMJYtFBny6PzeCTjUiAjTpA",
  "key18": "5Wo5T2dqqfNWMSeSpB9qi9juwHGQM6JmWGQxLJuPWj3A2i1eTsMZcN78BFzHCjnvzi82d5irgbmuRWpD2qE4dE6n",
  "key19": "3H9gwTtEzhtuGrkCCAB96WPBebN9YKLWqR3vKi1P8ezMoAL5oCAQgSSRokFiMJbkZ67MUKy4EBoxkKzf7TnnUL4a",
  "key20": "5M6TmhUb4RkwQNnuZiEhNPgyj1NvuiggjUviNzE6YBujRUKJquDhfoMkJaLezZrjB4FvFWdvBbVNh3WentMeRrKZ",
  "key21": "5uHHFVH94wdu8NF9gcfRVWFACU66TvgNwg3gk5EJmFGQu2kdkGw5Ni1hZtgyztkW8An5xAvybdSzaw7kBk1AP3e4",
  "key22": "5p1pcEvo6dXvsQzrhVmdjLGFaeYE8e7uZbLqV9A5KGy6u8yaypLfueJyfQNEjueT8YTSyjJo3yywc5rqx1v7YX9d",
  "key23": "4cMmaakS9A6Bn1ypwYCems8RBPGjDtMzwKbVRR85NXzYhiJVmVuvbWAYtKNUzW1hgd97oRfDm5ncA1uEbFDvLaZD",
  "key24": "kD4dQdcRcVZJsPFNEUk9aBfAC7CdoXeYvsMnBMrz5Knh5tbhXKNoBapJ9JV1vbZz854pHHQvSpjJDcz2oQHbjnW",
  "key25": "3ybxUinibyHoigxrV73CCeCyjEQuW7FrhDNRSqdz6xeLwmzLxDJdYdNWuZUgveqH58w8tLYdbZogVVPStPkz8ch1",
  "key26": "23JXgfXQ7J8KhxTuNfa4pwYddcHAvMLryj7EdTSgmuwzEFz8jyfBeT9hjvSg3RuoUDArmURREaWYDaTLXaVXs8bH",
  "key27": "3Bjo3KxvHgV2zc4axpkX9gkr6aD5kCZbYBmbuHmXVDaz1mCTe9R8ERBF5ogsF6P9XqoHPhj2DBYsxerHXSva2Ce4",
  "key28": "5KyN3knVxTybwqiHpSkmS5kAPo53c3DREJ8DK9irNWrvT8FLGEKGPavHcMpx5vSp9DLMvy64wRJYYAdEFmnF3Pb8",
  "key29": "3FZVuXMwE8zBYFuKaB8cyVN5KQysV69rBy5SDUry117XVAEVxd4sawWkUXa5padMdBHr5LxLeGB2Ea7CcgSmMqXJ",
  "key30": "5UYTcWMLteV79exVcqRRCjYSN9RqDUoHc6FoMZ4tyF2kE3mCwxX1irEaDMz98Kynjg2wWYE1TdKfgMVEZqc2VFnD"
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
