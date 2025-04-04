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
    "44sbtMavwakXX1tqUL8Kgv8At96Mbd6JjEwYxT8CaKL6FZLskAaqUYzem4jWSwZ2j5YwQthVrMscEHxUxPVJsUnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DHijoQNUGThRT9BsN6xWLw6eLP92GMS4KJJePGmJhWAJxmHa3ssdPYBHy48dDfBedppGdNTSJrvNesL3yzY7rAo",
  "key1": "2CLJWR2uXkKouK7y7Ry2tMKdwJT7RQi6iR3khff31X9bedkt6G4y1gRnSjniVxH3TpqGBWCSYRWLKoKFjCHKjwj1",
  "key2": "2xi271tfUTocjqH4gA6ASgQssQnjDa7XHZ6dsV7LwEMn29AwJCGKYrcd4fFnJVnBdt1jk8GbAQQcYGa44m8EtZtf",
  "key3": "2j5Qja4CeyqvrTVth67Lyy1eBsyuKZGVaQUsjBBjXvwJzG74YgqSheU3sBrxoWSFSEhawirLcw6bZNGWp4zjLJSe",
  "key4": "397ETPGwxyziLSWQxSunPUKBYN4QaevDqcydNru3g8mDgZYX3hwigB6voF4zJ5Bb5xEQPE9azsC6WjTLfxEye6Ez",
  "key5": "4EEyzFY4fug3pxhWpmtuRztTEbjkGa58ZgfRVMXse1d7eRzjjj7uNNdcQe3Jxaemn4pj1oVpQF6PrNp7SZjoZpaK",
  "key6": "5QgREjyAZYGzpbLFQRLcZXwMr4bDwt1Kxm8pXk8NKpKjdWCUc2UnYjNNa3Dhgj3SifGLbwWM47EWKXHYc1k1SmQq",
  "key7": "egDdLSxM9SZSQjsxETZT7xRcaybsETpzobJ9zEYCWVP36bAVRaG3zpc1QfaHWTPcccCU12popqougujbdRowJg1",
  "key8": "2bkfQcoQJ7AxtqnfxPwN12oRXmCu2oZSAEbgDVMzESbWCGm4jWDUk8Fj8gKLiSGKTLAJaHBvTZHWVpnvQv15JDWw",
  "key9": "4UiBBKRSLxn4L7GVV7Dym7BJ7A19vsxqMGNzk1P2EP6spMbGamroJAT3xyqPHcJr6vrEXfF76LDKajXdWss1R81P",
  "key10": "2HwaYA7Bqxtq5YVL8mKqd5QmPW3DnG2ozRqNU6wB9SsjPM5jMPjrkdzqeUs86xTFE9CCcbJwkwJiATnnJoaijxgJ",
  "key11": "5mihGex3hfSCLmePs3zQJShqpKanQFUq2cjraTPmnKFTSWNivzF4Up4BKN6oPoaGYiGe8aeP8eNJrjvV8Rtse4dN",
  "key12": "5MszReeKm9B5g5c7id4B8gDrTwq9wuYWCoEs3QvQsTpeSpy6W7fvwq2pHTVcUFmfwyaMceyayJTUVoaUF5UycTZM",
  "key13": "4d67ykhoU2r7J6L591uck2xAms4PMtRPbBGSKakvPfof7VYRDWqWmP8NNLBidGAVvW8BS1M2jvcNPt9VhVmeAGLV",
  "key14": "3FBGTdk3SzL3TUxShn8cupkaSnEafzMho4UMqLZU3wigTLwRFDp7gbqNJVMcq9SSWAMof214mshVWAKZ6iYvZidd",
  "key15": "2AEqbZ4spAjWw8bZeEyC7Nd7YhM5QvPcBKDtvTKq49shwhqZorC9JkobJQXLAexR29b3eadTAnjWs64K4PDzL5be",
  "key16": "3c1YyvCusqm7q994v935HFEGFArTFGkh3Mkz5XkxB1BjWUt9a9wmuMMcMq66EBG6HcHTw3tFggSRQkKg1XKHLfxa",
  "key17": "25JpupkF1zzQZkFfSRaEM9QYyPRi6THgnQLCzoBh7z1LsZNmueVzheZMz6W2k1k8TEJS4svJMGQnPb8bD8XGZZwV",
  "key18": "49XowY3oJrcH6oFVo57bNNH9AVRQ9EcHRqPu2MbZBkoavu7bGYjygXRUQ1TCzvvhd3BaEnqvqoVHBbJkX5odiNXn",
  "key19": "RgdH6bBjmz7FrVKn2Duuk88RJVXPadM9GPW6ckPPRjxxSaqoewGx5pbodQzBXUnUy5wjeKLLyPdPSegA8cYhSWv",
  "key20": "6FNwQ5XyqemwgF9uNUAdrxseJxz2X4RuSHMn1jUeW27Pmqeh3DebLFf68h1jvdXHY5fGu4QWYvTotFDR6WbJ2iE",
  "key21": "2HH26vWBLjz9faTfkZKZYhzz6s3BtJBHCEHLnZjJGnanw8YGMkF2dfghHeF9UAWiuajuTNgH4donuQzVZ8qVxsUQ",
  "key22": "5VybmsbxiAfXrghmaD73Npq7cgvKpQLtrUvHt7jSwXUM5Vyx5NnKRbABh9SrEpum6jeF84gvfVn6t2MjEEFpL1PN",
  "key23": "5wLAYgJFMkoaF8pDQfw7ZdrwnoRgQ1aGR572rD5Qah3AYxTxVp5uQj4EXaJB1JToBhSqvhPWQP9bJb1NJpRvaKcP",
  "key24": "wsLMqoeULeQ7sLoPYQnBXyqvQwewD8qPz4pTSDmnLDgGt7RuLQtEkcdmpY2kqW44RfQrG2ZGRq7A2dkYJQhH8pJ",
  "key25": "29wX2Xp6Jfdn5NfUVbTBUiUMgtN2z8JJigYzRAniiP1hkYdhRBuKvhDghMm6JqFzrpYL4TixenGEdChxhH7GzGdR",
  "key26": "4GipsUfaFtJ5Zy6HUnG23BymafGnjV9QugY1GfLDYbqTTRG3XKvJUxap47gFBEpTvfSLVopbXjaaDHQmxZx7ijxV",
  "key27": "5GxXDT43ZUFeC8ZDirBJtFCsR3QmVxXPNNUp8wraCCMyh6ix4vHcY2hZoSsdbzQmyEru82QqLn1d7TKjvzfCNssN",
  "key28": "2LCEgorgsikwbLWhNVATngCBjeVy5yzyao5xBw6kBTkKdqphNq7x2BzmsieF6fYcSWKN6o2ZSixszyCRx9uJKcBC",
  "key29": "4Kq7tpbH8MwLjtTnzjhm87o6C2E8GBtR4y89x2v1BDCNsnKymFEpqdfG5iQzxSFhv8v1hbLPTxCoqGbmKxpTQhoH",
  "key30": "5PBU6FZsgPsnuPEzbiGTahURuy1fXMCvzMQhvWFNVisAmsDLX7cVERyF5JdQmELa34UHU7aLWWGmTbms4xCCF7U7",
  "key31": "th7miGmhEHS5YJKiU5j3a2m7PHAoqec654TcVfzM7K6Vtt7thHxv7EUoknHKMhbKHWz7NECCosg2VLz1sYMLV3f",
  "key32": "bcEtJwZXbUkmy8shgC35SaNYQKCgQy1Nv6LYDb3HUvWnKdaxMjP4hZMDMWP8uBaWuZJp12bnicdfnW8g7ndKR8u"
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
