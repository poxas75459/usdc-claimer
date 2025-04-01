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
    "2NTe2AWGf1u6kksJVmpToH5vbeF2cLwhSB5G58TVodiwXCURNzW72kmuZuctfsCiayFyNZsXgjcDFR1nZnDmE5Dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b5ufVtWYCRS1GctuoSU4ffDNZQupQFpnknSNEueCxqytTZLLLehNM8fcUcr5qPvQBUkxJ3DFNRpmERQAFjvumxi",
  "key1": "123DTSoff5V7ojG3FwNMqbhn7VB8sHAfwVrDAigjwvBwB3y2oR3yM59GM5e1ygLADuPJGvVVmdYtheKQnhz1kSvS",
  "key2": "5gtk2GRD9Cz9PWMiMfJAQP2PXJw1uBMQXPqJTBcwRmB9jq2ZBXQKD4JYUGaxP3w746MXyWZd37HgLDECZQnp61jT",
  "key3": "43ESYt5jkJZn2SNY4481E4x33uZMtqchfqD3D7wKhTDesmZj9rka7qhFc4g8iwe2tSEvcxyKVKzR9f7omebx5z2y",
  "key4": "neA5ifyEx2gbRZkNr3KWH9xKWPbakKifjftiNSWosb5h4RLmkZVv3dyxkxYCUBAZoV2UQ89CxTNK1VW9kFysBZw",
  "key5": "4RCz7Ef4hoGFPCZ7NcrNAeef67vD2HGLcp1GkNk22C7M1JpDhbbY5aCaYegBmHcbj8aNHwVTgVcCNxoxJB1yjMvY",
  "key6": "2BtHuu3dJf7qCeiL9wjM1FRqDP5iFAN4P461F45SZNemy75e7AEKKkeHf7TiKcNK6AQxUksScmi7g7Tf7ww5iFk6",
  "key7": "4KD4TK1Ky9Qi6E69AgUhbuFod41AFUYW1Z4Z3x9zN4fCkq4JdEuJCjAFnBiXnST7DAwRtPQEY3ifZ9peQfQ5XCqZ",
  "key8": "4XZFV1n34w6d8kS8axzBRbPtLQboHrxyN2uBjrMSiyRufpq8z7hc2u5MzM7vwuDDCGvyx56SvS6Wv4kj3GUBaHQe",
  "key9": "43CJmxEkmAVHwGpr4mD7ajeThcFZ4APRkyiTQYQoK8mgY9NNAJX8RD2sf6DVoN42xGsUHSMJjN9Y7cb3pVKYr2tg",
  "key10": "52TPi6g3BMWyTtZMz1x7ESmDWkMVnYmLQbZ4xQkktCPtcMtw1cfgCnekgsHFDwERdJwbsgDELqdjuSsWgPj1BsUV",
  "key11": "5MieYcSgi1uDreRFMbaNwjkpyV8ampTmK2v5vx8GPPwhbHnyS9kKRtEaF9hktCs3wAa5X4kknjp9gw31yD3AsmUq",
  "key12": "64ntfo4yceeGh98KZSVJncDG7aCHqxwPXxL5kHx8qnGebfm3kfj8DTkiLkXNp1JGkssqJT7P6BSW2mD1B1P69iop",
  "key13": "3A7wJQMWYERVASr2qPqqQ5D6QppgP63GTFNxu9VEqGtEDzb1ihxmRMhrmNgZg64FyCHHPMbv3uD7awym8ox9JJjn",
  "key14": "4oorwJxkFiUdTfqVaUT7yMbZv1WuMK4kjhBrz8Ce4AfuUqw2nZSscJSJetux2gZ1uawcYNWiao77br6mLtYxtgCN",
  "key15": "5Uiq6nTu6wJzMiRyBAgsTEZVJUpiX2pWAKDBouVGWLN5SmmVUKphx9kBYkPHwD9pJuCwKBoPvREMpL9Gr7nPbr5b",
  "key16": "deoWhsPJEQQUj8DzyTPLrsvNCJysmS5HeRadBah4MbQ62DxGXMTZCpuPHW9gehikKBL3n2MKFtd77oET9WMKGar",
  "key17": "4UsvsGSksNYaWSYQXkdUi3NSJDTybVHb25GQG6RPsryyDFgbzB9Nayae33DUKJqNm46Ww6azGj8zFCE6XkurAC5T",
  "key18": "2akpVjtoD5N2maxCoriL1RH8WeJeUi82HarMCzBaza2VXWQxSymkrAwZfHvhFpoH1NP5dmgKzMXvYXc96EK4WxWQ",
  "key19": "5rHJSDt6HNKDmRkZ2Nh3LvF9Tvs6rEG5bP3tcnWPgvLgu1WZd1YezBnEyqWJjhhJM26EMmmMNKNGxqCnCaWnMnEU",
  "key20": "5zK2Z5LcZ7wKuPULYb4VJs3g3wVk6kgczuDzqMr4bnmYKdhSUz97JvwsLt5E4AvcLLS5Dqxzzk9io9zJwcYBEMb8",
  "key21": "wJ75FwHxVow4gJw47Xfzjh2Wbc5BUU4cF8JBtZy4p5GC4zqoZvkKjCsxz4tYdJfQdeDHEvDTixm1HDXAHE54PpX",
  "key22": "5jQ3kEnGTG3vrcVwYx2sSdoF2V1SupJBhyw7BNiti3ZvCNAbg63KB5AzjuP5tyyJEpgqHgYjD1QKDBcWPQgazUMT",
  "key23": "5NzwbWG7ku2UMtu9uGCjDq4oH2R7fdM6mcFd1FR1MNU9xATDQ2TM5HtdEMJDAbzipa92iWJ1add7UXmGPqe7fYxt",
  "key24": "2eHaa2ZftJ8rALCzfRTQHxfTb7ErQ8xPY3NsbGvktJxdtbA1bFdjSkjmYaGQWsphhy26GSFEff5EY1gdmFDecbYp",
  "key25": "5RBLrepoigoGwYSo1WkgyuX8i2xg1DHqpyTvxjEsLxTG2FN7aimwnHp4BZzercwkd5T8ugQhL5VYMhNm1DbJeDHK"
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
