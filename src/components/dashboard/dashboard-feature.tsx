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
    "XgMF1LvAft9BvgyRGP13RALABb7wh69bsnBHpMuLdEH6P21KCxXcTgcbBpPo1gz3K622znRzy1iEdgAuu64MZXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UffXagyHTzMjSV6vHPZ9D5SK6o1wFRdEW1cYC6U5o9wdQnQsJJVudGM5tr9MFjdkPGLXdvBdvAjcsqrtSvEsnLW",
  "key1": "22eLZqeUZyD9HM6gsNfzoy82mZUCPdWJX1zRYGgphfwBcWUa3qb3ThABAU9oE4VU9x9HfBWzcCgkX1wvvMdwfPUK",
  "key2": "4bJ2xWp8ScTpa5VSeCygsoGuEEHVDXeV5Ux8pCmBcbt8jC2dzv7cXCBXhpH3To2CHicqTB8eeqWsnnDvQJJFLtTb",
  "key3": "aT9kMjBnwHvox4Fj7qeSoZ1jit3wH2q9XiE4i2Pm7ffq6rCo34R4b95Vpmb9ifSYSn5WSe42BxowCmJEZ8PvvSG",
  "key4": "39zuAmRi6BdgpkZHBmMdNuVkrtJ3oUYgMruc5HpoSdVRsMB8crMpe6PyYWJ2ME1BNwmNC3adxnMpeACXzexj5JTw",
  "key5": "59Ls3Gjij2cjEx7oEfZDLwWWcXjME48DJGXVkABE7pL9NEbBSNxXEXopDRCMcoZSDYBrQ6QvanBN3GGEYkPwCPew",
  "key6": "VW5JExUyHcYt4utNUCPFTbepnLvviZaaXd3pChyK3bhAtqxKLCRtS8sJ8UdUDqTXYt5frLGfZquiew4przGj7Xt",
  "key7": "545hFMXCMdo1qUyGq9EYESRrkGBbAAcH9xqx9nJMALBJqwtYdujrwBJy5n1vL2d38Z6Eji3oTMR2EoHGRHN1adzs",
  "key8": "5ChVpnBHkNgb46kDiswd5XMvNKH2tqY6cJE3S46vBPTP3GLubWcRbzKaRvRiRtZSiu275yS8gnZteMnEVKpjPygm",
  "key9": "2k6Z3YFeyY1zJ1MNhNrf742fz4QefPGiNVHbLPRSknG5Wk1HiVisjAgqtay1vrNVjcrr7T8xX8CVXDztUg9PRghZ",
  "key10": "45hJid9Lh6JepeY86LGE4GUT7n6kxKNSJvEB8ct1CUYA37CxmqBgHu3umf5wzWrPtP36NLsrG6PRESmScubjbkHk",
  "key11": "3tycH7VoXVcrsbHim1LZJsY62BQ9bXdUmRC6e7QARBAKh4w5k7gHhZzfnmW8GwJfhY4eYWuKjWFiG3UUHfkh5TAS",
  "key12": "4Z3jhpjakw4LD61qJcwSbSAcgGPdRWbqNUKxbeYFDTEVCqohEpx4owKUVGass9bkJTHokhsBzrgkcLHekCXgLYub",
  "key13": "3bywMCiwJxYiD7NApzgtUpADndTNhqzsG5g3z4w7EibLvQsbJjURMa1fqSaHN4ZKzSvdW1WtiBBYLvF3wS16NCxU",
  "key14": "3pxQVpBCyRze9WCL56Xszqt956VGLEhRz1CJvnkEPgBTdZtBJxb4qBuxbCUnw4aey1EcNqDbo5vkHbMzzEoBAg4N",
  "key15": "4UNpaNFL7jPdxsJd2xGDMouqR72995xyjGMbrf9arE7echq77Es6C5PkBqRWAWupZzfacnHw1LHSvEdF2XRQR2ft",
  "key16": "2fL8BLnFfgCb3akNwsf5F7kypmC2mQDqqGNFaQfCieZ97jCK5rmAasixeMjrMABfXxkyvLwSCJHkezvi58PeaNki",
  "key17": "3KtvJ7X4z4AAUodxwatz7GpicPBtFDeYmVyy2FR3GaKWvm9H9EjFdchFp45ZKqFKGrJtPLc7kce7xyeDRusxVcKd",
  "key18": "aXsY2SD3EihK3wuatSNhCpXwg6rUUJLmRAPsWY8Sth9hAQV7UcJnRrLLz4MHWy6D6e4XMVCyJuXZsb7k4PaqACa",
  "key19": "2AUQTBBo9dwu7UiSffjFcXAQSRGsugDndmE4fwo8e1CM5kxL1atvnzrqZND9g1Eoy6kYo6GhU8CTE8D6yG9RqTmt",
  "key20": "eVZnMg7U98xHWmoxstppQ4wTo6jzqwTuH7Zr2wbtyuoH4t5q5F9hym5vGUDSTEC2KwVsLXhFvD7aTX9GRTULrSq",
  "key21": "4xsAzc6sXyV8aJz3o3QZD2ttV1cJ9fbDTcUHUeHaP2kRcYux6CBSBkzAdbTnYBgFkd2W3LHtJx7x2qtPU7Y7Ddpi",
  "key22": "2KcAHBqLELATQEc7SmdyfMxsv18aSb6FanSYuRhXSjzd41bFH2guAVucrApbbZiRmzjQ8jKPqgXWvZ1xvhfcSYuD",
  "key23": "kTTFKB3iQ8AEgYU252w4qWz4ZRqMpHHWGqTC4BJJA1qKtTYyQaKtnjBKm5gSv7p8L1Xp6TXWsHir4cxKwsxSrmZ",
  "key24": "3sE84xeN8tFe54Xwm9fRYAmqFQNH5BcbZthNgkWHVJxRihnPfvbU8t3wRUdAiuFm53CvEGJa6ZR56i9M9rbMcKtY",
  "key25": "3e3XuaJCF37Hor25AiQ7UYAtYsz3CYRndG2M2jZ9ZFKm6Dxoo2CRutzWnKDtByMexPkcr7zaZKueWAZyWTT3Rsis",
  "key26": "2r6x1M8E65EgUGi7gjhKHcrpmBG9wrf3qJDzC2jVbCsQYV6QqkvoNCreVqq9jLbyFDVBU3r9Gy58UgTmj9zHKKWr"
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
