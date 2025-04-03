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
    "2Z2UbVeP3xD2bzMguxWx1DzttMxyqv3YSAAA3Jbm7iTVv6qegCSuGebTQZjJECbBySeTPoqrN8QkB1SYc6rSdmPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kyxbiquET8YUn5Kh8zvXukSRKU4ee8w8PeLiwAUCRMraHESkViEjqEBwZbFyJY1d3nBEGaqdBRZF12oUuF3C28i",
  "key1": "WwZaPySxmbbZZ7s2D8X6C8BfbpTgXktMJpLDA8G1zB9KDBGt5oyToVST5uZW6HCg78SV9eZsj9YHLFruGwwUMnr",
  "key2": "2p98aUSH1gikGu1occkZ8QnKMR9u6LprasnAbtkHF6BHKZBDpJmzzsbFMKAfyn8MhwVrvHQgLt9ijBupnEDKMchg",
  "key3": "5d6Y6k1AgMQDVWUT3RCSvo28UmijGMhXfZ5m3ZZJrrVC7ZK56EmQWUyUMmKFSuWmCjXrrfEkd3RbbqR1ZimKwC7v",
  "key4": "2FHXYPhVeT2kTuFFwj4WvWh3GvMTeKi8NPcjVvb4TCoccdTvHfghve32yrxPyd2M8jkH1tjw2GVsKCFhQRvXMpEM",
  "key5": "4xyVy4ioySGm2H9GqGq1ekSZ2qEXsCimC2o7THexkhq9ca9jMiEaQcHJpUBaFr3taCGimNhhT7cpDRFinxFnFnhC",
  "key6": "3QZMqQA94K4NheKZSkYjTgvFydzUJasxFsyAJ2kAFozQi2nz68QhLroHFBy91KFXDACtyZn1FY124NRxQjQdfj6J",
  "key7": "5d6ZQw6pPEtytFRYpaKh2wZXXj4e2sLDUpTtSC9bQcbFkvfGGnWN1AjzrMvfzqredohS3TjuDuDBfA1oi8yx3UAz",
  "key8": "4j4zsuGzLD5uY2MaNGwxUdWbi7ZYHx69EvFxoyAzxPamwaunyNbHD6SGYd1ckFu4Q6ivKQdtnWNBWzGxwDWgRP9J",
  "key9": "4Yo19swJx8wVUpQzeMTHz8F4yyfdWFpwFPiKevYjeNfnL8e7EZSw7LpHJ4wMRMtm7SBATaL7YQvc7nVooHhB7DQt",
  "key10": "2aX56ELeQnuW1rVAQaiQGyMaMNFqnU244BB7k173AM1havcfciZ1rnGNHQxLLthk1qL5LCmNgwSDhwg6DhDFNh1s",
  "key11": "5wetPVjgyMdqBcDn5NxAjKDt4upw1d2CNrDiqNmyQQYHvSDpirxkLQ1396jkxgzZfDAJqqXq83Nsu7dpaWd5Y75z",
  "key12": "4ZyuDhAZg2uSWv38B3QdT5dftYzNw6FrDxAA3fVioDpdeQLajUTFcYVsmot5Vekzp1yA57MHQiS6iqHZssNNbFTD",
  "key13": "5pcGYkttpAfo1fDdU9xVSMAqSmAYa8ukDnVgWFBugTX33KwFp73Sg7iMo2decd6ZwTLhnpj9Tx9b7pfvqJ7HBv3s",
  "key14": "4mMjRkM8o3xy8cRzNi7fP52QmKYiXPahLFkVQApwar95xJvwWtgzYKyiQwFYpudXe4wWnmU1RLMBPoXD7YAt1FRB",
  "key15": "5pbubiRfccdz8R77yjKeRUyqzeL9TzGRhBJfZZjWqJi7bhVpL7G8pJTTTP8PmReUiD1HmTXE14LZ3hD8mkS4s2vF",
  "key16": "4FTXhVgn3KKsFD1TNfaDSHdjP3m2sLBJYomXqBovmPxmByR2RifnXBCQnfukzatWRmjKKoqFp4a4qVpfDmmyprke",
  "key17": "QMb66aXRVyVKZdCsf3kc784jyn3D9Bkgg5VCAjp2HTT3Lsaqw5oW6YiYNws2Hru1Kbph4Wk7Tbv1Ma9d13VZb95",
  "key18": "FHnc7HCQDiLoLzmegyREghwNTsFUuynCmaSbwHdy3cvU8uR3AntJYPrsZsiqg8uB2YVPi58GPNMRwpAUUWoLmzv",
  "key19": "56FABcWVcj9sBg4qfXMq7gCRkoLcJYtF7BBNbpGsEXJ8n1qZKCtzCXFsVAQ7ZbkCdTBRhXywuWGsSLEsppm2z6B6",
  "key20": "gXBJXN9dJZvxqNCogwSnpgef4UhrdPRz2o9vUqcFL9TmrdjQPLNQCZ6C3iyirnvLRo6p45oLqzCQ3zVs91jT93S",
  "key21": "5MJNeMNejxzAAc7i7djCWi33Yr5V1jfWsjvGcMcPbUMxufbwQabitUSizUHDtYnJ1RVDTAoUWKsPUg9heEBWW5Cc",
  "key22": "3EKeQaNGse5tPNSLrYTMYzYVevp7LMwDDLvqbLmsXjTALTpgnXx7JiTXG68Bk1Kmh3g79uFEX8K86XgGKu4SPT6",
  "key23": "4ibf6iKhZRGSRdZw9acdcAA2Vq8ynnyC9UdZ3G3jyiWgGAcmFoVssyHuST23MtwihPkZjXMpiYWpENiNWuB8cmXu",
  "key24": "3ag97q4oxy7vrHMymwJf1nLvKeo3HNG83RZTpTMNe6EBkXWweJ5Z7nCwtywyeYe949MJb2QiMavcNRiHRFq4f69K"
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
