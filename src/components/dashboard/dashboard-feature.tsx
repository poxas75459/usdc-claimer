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
    "66ChBF7EThr5Ha8E7pgn9zQ4JTccFyczmw9VVFYEksBhxctCuZCeqvVDV3pXabkpHcH8bcXmbbX5vXqcjq1DawdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bGGy7DFb7BXjnzxCaNVhU8P7a2e9E4wwYWEAXYe7ciB3uddx6mjmCVPsXgAbdiSHcNmEuUAa3uP1GmWCAaYUg9j",
  "key1": "5Yz11NjhB48LKi1LfteNaPWnvPLouJsyPz6Qpj69aFbsWqsaDTBCtFzNbNJXt8t4yzxkER1fND56tgpybTsCCCyK",
  "key2": "437ZCVi5r1pYVWPLibwFD16bdbSZmd6tUniSbKyGSj1g4MaFkGkUPaWgnohyD5heW9XmxVgfxfS6d4R9WWFbZW8E",
  "key3": "2XR4ywKZUorDpdbyHoVsvWxkE89mDcaiHdmiMLx3MDECCZMYnhpAb4p2afkYyBEU9VxKKLmTnUVjG3xvD6KLxKR5",
  "key4": "4f3XjPEV2m8S1AdQ1tamRB8dgJb63DhJ91kfnxr68Ta3nzbfLYVvR9WT7ymDM2gSVNGS6djznsSfobFtMNjiwYtW",
  "key5": "3E68dJ5WD3PK7hmBR6bZqjSR9iMMR1YTqGEnZ8zb5dH4x3BpnnidkBUZvpUoQuN7cWCzKx7WEqNHtZcHBKy8AAqL",
  "key6": "2W6pe41G6gLQ7uftygBY2eKkSrsp7JJYrVQNEziGNAgGkWpML9K8ZiLjU3i8J4iCnYRD9sDXc7zcAmFrmwpbxkHb",
  "key7": "2tkq4FfmJqYAYu3Tc2cid5bJ9k6Q7uLEnzDxrbEr8GrnT4h3LbDra8S7dpaKwaEk4pp9L42RoBHAFSSB6njBNPku",
  "key8": "5YZkRDGtzFYu7BmLjnTDq2HtGYq4opy5sB1ag1tted7548fk8dyAYDi4rT9LQQ5wfBBKtnCQXBeShSgjjdGBa6iw",
  "key9": "5VF8DmqnfW4DfmaHHK6TdKiwJquWt88ztRHtPEwc4SATd6rofn1sSDfWctKGKjTpVzGkhEr5P3c7X8AcrWZuBFfV",
  "key10": "2qpdkts6YuxsYnYGJPytqHTn8o3fX4bktdbgoTBbRpb75K3Zn439LeSdThKrTeXZPiFpFKyyx8LnS22EGqkQo61J",
  "key11": "4svyt1JwdaKVBBA5H3MKWjxETq72kKedtv4oDiC65No4KGBGs47DGiPpeksPesfEfvRWtWtWhN4jEL7GpjdbGDMs",
  "key12": "4TCWeMkNXqZbznLk5sJEQGExgs33yCfaEmtfo9dd8Dkhnaoz5kWP7t3cp3vxoNHG4JiQ5mfymLZ6SaYMaS3kGN3m",
  "key13": "4marCeiknoTuecbKvYDeHL1axoF7rERYyoacnWiLkasBiTmQJqkkH7ug774SAn2K8DdspWfUS2wMZ1LpV6ztUwkv",
  "key14": "3QPgLcoRjWtFhjoXyLjKC7NqZjTERw7vwYGknpg5A72mea4qE4qcVGLFSjabjY82eMfo5DdSE2QAufmzjYWa1iu6",
  "key15": "4RCMPDkin8EFaeeiuFwF4KzhLLJfSGysnBpLzc7v1BCEW8q5ZGW97SMNjovgMwzK1Vsr5BfnJ4GjegwR183G8EqV",
  "key16": "3siboQHj9Sy8K2mgfqQrMfWcPLjXD8dqzJHuu38CS1zqiJX5hZm85kByxu3mQhdwSCXLYLY6ZwcLq7gxy5G3QJxS",
  "key17": "MK1ebMCtUXLrwMeVG7XXaP7Te4kZrMmCG6FXrzitNgpiZr8bvza8hzVtd7HYvPsHb3m5f2pWK3Zyi8zGNZ99PSr",
  "key18": "34vsPokyeGZZtVDY7KozaXnteerg4svWK5eGsqML4WVKzAf7zUQS4uJkKHnQKQNQhXKCBANMPn9ZZNvWm4ppAXy5",
  "key19": "4t3hCSCEhaw3Y2sQhuynd4EUMiv8kTVGoLg1grm1UizenrszW87UBh2xFVbbQViGzrjbg8cRwi1ozy9mhYU8ZCqd",
  "key20": "5kwg6yjRbaj9YF6wYpNWtu3HZCsx5XGSu5AgSp8eM2eRy5AQcMqiBhG8LqKM3Vap6aV9vbFEQxr1r55KmeCbynd6",
  "key21": "4cen1HtmTBVYmkhEAUxtoZaz4fMwpuG1Dhk8Z8v9X5gWFyU8Z48p9Hu8XHCGf6V73D629n9RGZKG6DMUEGMNcerS",
  "key22": "4QD2EPHe54Yu4xTE4Atp5xT7e6DmbU7c4CRzdvuNUWtGJvcPcP1gnrzbWCV4huC2mUL4P3SR1qyigvVP21nr5iDZ",
  "key23": "5EVPuchWy9g1NBMUhRKiG57D3Ug5Gb6jNLPKDSL5xm8nGLVyv8CQdZdZ8rAUY1rEXZukJhZ1FUcZnXDeZZnBbYnn",
  "key24": "5UaoTqFRbAbbxUrdhSVs1FcvWsZpU6aSRfcbgQgMXShmKsfgyKn9Xi4WiqmhphN8TkjnZ7VFjnDmLXGNpNU6wCc6",
  "key25": "2xj41beiaZRSbGQ2GSaejqdqQE9NKCWhW3d9WUyvBr2fKHUees2ME8Cm1SYgugyLEmeFWphV7NZCH4NVNdTXkWqJ",
  "key26": "3V2GeiRzhR9uKksVTD8TuMQgtX3DkzcvyJyscmqWhGi9i6MBEArAURRDFGzcqz6PEqgpZYyF2NHbNDY18FgojCrk",
  "key27": "2gYyfkCzaeqKALyApoKipyYcx5nLCQjkwVKDjTGQWSvq3TeLYpjsvaXqBwSHvsJP1vqFZnyVAqEFGfCedc1Dv9yJ",
  "key28": "2f5XCdrqrDMr7yy8j46PjHxz2QNcAKigaR5GU8kdD3WZk7xKVL5tF5HYWp8sD3pjEGi3FTFsC488BN5mqwZdoPwx",
  "key29": "xiFCwRXwHVCeo7ZDVhnpUzVtCZgYAbBtvNKUtnmmVLFNxzLfHboBgPqdKujhUiSJrW6mciBzjk9vfbuuR9JQhsW"
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
