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
    "3XM3bVv6bpwgf6saJxFYeQ5D5sF4X9EoNHFSNMXPRE2Rda6uwQPQEdWTixqAqBLcynbrWDnmV2MaNCvYnkvpv7Ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tq1S7B1GkmWjPf2e9SFwfBetHkZ3H6RDG76eM9mThfY63ohictPamUQRmhWWPpP6rE7dimLvackyXcDXKNFWQkv",
  "key1": "wuzyLcBjGBC61ryuPTPxdaojeADTwUjYNNx1XSgam11rA4CTHvxGFdV2QNJNokZ2oiVhKMYucVGBiJebBfHWnmQ",
  "key2": "4mc1zjbwpHYFpefqRo185YCWvkWBuNB2c9qBokiSFgvTJgrgE9Av9fWqHhjYSvxbFgez123bYVsSBxbPz1x1YNVp",
  "key3": "2YCZJubpkQNrM4pE76xJZKkLgBJbCECXkrTGAupcZruAfeCCkr3dwKRRyaw72UxkwvT51y64FTA9dUJHnqvFSB8F",
  "key4": "2CxoZCNip2bpHX9jpNZbDcqCkqZTtrRk3WTnSnmK9DKbmzJSymZLgfwJUK8zzr8m39pJFTxi39L494A2k6k8HCap",
  "key5": "3aPDKXa1rNVwPUE1BLb3NgepYvLKhonfnG3MhipVgsLPHycFXYZMYy9EM4VfrtRf5bt3UukEG5tmqqvXW98Z8xYe",
  "key6": "X3GRCuvrwZV6iSa698BoAUpLV3JmWHVpraSbcpukMp8rQAov6w96w1fho8givAQTT6889k8avmyp3gsKmvmMoNu",
  "key7": "2WWgcnzWHhCXGT36J3hCiU4qp4Hh4eVagQB9aDQY6yPRr4BwiyEZMRe8jgVWixEDNH359pTifmpTMKuQxvFp9r14",
  "key8": "24yCx6aU8PG3JJD3py4nYUNrBfCiSotM84uxRf5vASBZhiU7qLusa9Vro12BmBeQbBhFRk4Jzr66X7DYCcvbuDjR",
  "key9": "5N7h6SYE6Pqd9QbW5yGJUwJYqXNQG1zFTnxs2j8YnGtbrMWcQ4Jne14BmRDVTvNkBJKfMxTG1Z69oCUdGzvXxVU4",
  "key10": "3ZiWjws2ixtdUFmMfUx2Kms18rJsMr2nod1eSq4UvSYSF5bZuXsTnusmkJ9PqoY6trUAHB6wQZ4US8ym8t26KyZJ",
  "key11": "5YunVUZ6BAu4cuZJEG9xNCq6uB7VzyCTFdnQzxnEKg6LutXt3Awdoq3jueyaxxtJDPjPRQzesz7fYLWtA5gUYCB2",
  "key12": "44EmyCiHW7kmxo6XbPQtPCgCEE7YCbA4ExnHvChaDdGbkLGKFTw4gbXNjUzVkd82eDbbdQq3UVMVPPfDc6pP4bwm",
  "key13": "2Wa39ffMnUqbN6RsHcku8TAQ5DW6r2idPcrHPMiW5tmJi9fm9wmDzwntP2LmFpsrvM7K14SttJ3nrsYYLLWcJorC",
  "key14": "g7PQWZhxpNByEyypT9244yNd1QmMYPhf89WptmExnqG8LN4FxogPqzNmKk4KBGLRgomjPhcVg8QoY67SnHrMa6h",
  "key15": "6bpydB7Ccd8WTSfdzb6mZKXi3cUvjEfnWw29AtjXxRUizU3CupkXBDcPPytoo5AHWNuMvuQBVdNja7fcgrRSeHE",
  "key16": "joHbNF6oAoTpQWWVRRgq79SMyET64U4C8pCaBUQuL71qHAoKT2sdKpnEEJYEjFuDPCu8j98ugyDX7z6TcwtNUMg",
  "key17": "4M8uBPYT5jeSe3nCiScRwRGv79PHS2nYqQ6efsBCNrezZeLzjF8qz861RpRSqtAA9MyCSvX8mXZX6c6wEbfnkouK",
  "key18": "5h49w9osyKY3bVy16GQoBnKo2cgUL6Xf9ydjt6khgdWfh5R84vrpU3uVnfYkxyunQ6NtfmS7dE4M4o9wkiLti7g3",
  "key19": "jsNffUkqftTvBzNb6hCy7fHpcUrFwHjZwNg6h37BsmRn7LEMgPDRaDRPG9KbWvr73T8rjj3mc9CWh4pt2q8mTbc",
  "key20": "49Fn4nYFcyQdwwcRPimycPS1qDsHKhUjyAGFJJfuE179SqXtKrH2VCEuN7To7upgB9oJqYUsHsR2srveGJAGnSHR",
  "key21": "52hXLK2LQqWUaG5zezit2x28DkUECM8kE4piasYG44YecqP1vmh7XwQWzjxsUzCXVciWGo2ZdfUsbA955eTArnFy",
  "key22": "4ZgSntoNBjU5mPdpUFuihcLCxfg3oNZpLgue2BZ2wnuvTyBskVxzFEbF2hibx1DEXw3xB1EYABPq3pWRms9KZrbF",
  "key23": "3wvg3nEKf3coeiA9mwVAuefVLWjteQM9HGPiC2q7o8gfrEHMxdhXRNUwYeWBcwE4koheJMQopUrHTXqGYKFJjaKR",
  "key24": "44MLReGv2FopiEctyzeci78PPzpnx6ig3e6jZL7WtE2cvKRfmWpRx3r1w9YnpSFcLv7UAq5dpKTjbLu9JJLCwjUR",
  "key25": "5U4NkKMMAYSAbx5yUX1C3rNyAcDjfc1usNah2k114EVWETCkKAhK81W2QZM7Y3oWXr5uRa9avDag8L8saqz9QPhR",
  "key26": "aMnxLx7voYfmq7vQ4eQ8h62ospDSqBFCrEDyddmZW74gEXCAMRMKUMdaVQHoSj5TbhvFQUaU9JE8QxHCHUZLjDR"
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
