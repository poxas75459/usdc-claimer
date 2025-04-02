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
    "42yMa1hciS5hs1sChnYsHFaH93W5nDnP6iAHJR3MVYd7nzxCW3N3nHLrrJ2nvW3ms2EQ7ThVik26W5hzSRfqz5hE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j52GJsKC1Jz8ixgGLm7zCRtqkQpKHzg19Paxku7GbbRTuWbbFKRcaeTRbMXF4g5SsVSPbYHjebnqHcGXc56h1CJ",
  "key1": "48G7yzUwtBd7fNLd3KtmD7XUXv1oSNV36JwfrDWagYKKL123J4YPuGdLtqEW3BJ4r5ws4yWm919b619hHQeyokbV",
  "key2": "Hm3uGmXTbBwFkQL42egMTUFhjs88fE5KLT9qbeYQkfPvXAwmNuR7L2MSSWpeSbutc4NDExPmPsLCHgB9BAdquyw",
  "key3": "FHfoxayfYXxyeXFxE8tAjEfsEfmPaKCTh7HtiKpB2xDwi29wM4J4JDiUsVfMcS8X6VfDCkXT2YU6s3FNZGfXxxQ",
  "key4": "4y9438SNPeX7D9UjpxRXfwBt1B3YjwTibVN5ARVM7GuR2Z8vxEUaHPRbJdnqkFhN6kz2URmz6MZsvUkAqYhHm3Y6",
  "key5": "5Jf6Hpoff1ijvtsfGC5xg2ViikaG9XVMfeDm9unwccZSPprXHbKxX8cZyWjN4hSET5rFeb5URu3KzCbKQVFJjR9J",
  "key6": "2cGgNkV59tN69cUXASJUC3C1wgozUnzU9PoyTP84XVqkMNDLTvHXVRiPs1UPzoeXfdufftSHZ3e7eaaMX5pHdLE2",
  "key7": "4ecKQAZdyYKctwytqnUbeJQgC2kBd3ers7D3FB8T5VpeSVs4pCqBXBC4RJJj9Np2mSfoPhYMaDXsT7vHzVpwUeap",
  "key8": "2GWTiAb7eudn2LXNkn67xiVhUw6iwyKujPVfzeezSivFekkgmQG8FR2oqDNS9vXj7jH54N2vDLX8hASHHryKb2F2",
  "key9": "6TBVcBuWTxKHi9oNuNMNXxAfgnUCLKMzhjtXEe6wzDuruzEu9qh29hARVKyF6xFo6XTMXwDrXU29bfkkrvWcoqX",
  "key10": "4zbmyd9R6zQo2MnxQFnFYmpvLQZ3PqDQQxZzUQFhpXXsvyhcCnLYtsmYt9S2bDdXwgV2EtRDvsrdqBer5Ay32hdc",
  "key11": "5R3BX1LXhnsuTdvSrXterv3paJwfSbDjykSS2ifBUtQ3SQ4C96HDta9kJjsf2gVirgudY1GZD21BVYh1CPcVQbB4",
  "key12": "44fv23LWU9mwiohsDKNNDBEjg6SdXLmUtZYURFmrGFWc88pMguz9Ef7HFzG5f53nW16Zi2YvicPRkDi4SfavaboV",
  "key13": "5TeA6tigJjd4BrkBLGxbSEHgiUfHBdECvyWFh17bjQqzfkvfU93tj1bSsXvqveTd1sfRPNRCYn2GaPRzCvjxpjk9",
  "key14": "2gVXNqR2KBQ6KArbMgrSMEUhiETxkUrdbE2MQ3DJGQtTyu843YMgKtj3eysPTc2ZjRLh5mNB6bEntKxx1EvNkLDx",
  "key15": "R6Sfhi88THHwJsHLZKghGuZnffTmBSfZKvfWfoABHYD7ftdVEHmeTFVejyjMaCqHHEjHBLNGX7MEZnyFum47XVx",
  "key16": "3kGHc12LBGBUZRx2kJomgHVd6NRaeWCjVemD1nHscYamWsCLtnH8W9LXtjv9VjtjWmjp36s1iL1LQDJPvqHhPf3j",
  "key17": "3oBJt2pjb7g96udexvQLe71TLss7biRp1h7nbjQ4AduLYNZ6Xes55LwD7hxxxqYmW29Tup1sNPksYkGxbGFzM9yQ",
  "key18": "64PqmtPbqui7EK6ZP5kNqAooAaHm7i5dQQN6DMJ51u6DViduDFLA97HpAicLsUahfpoiKXiTuf3Mpd2tNt9c98JZ",
  "key19": "2DZfiri1QN7bzeEA9PKJ6HoC6EzBAAEgUVSdyS69U52vzJxqy7Sp2cqHMfBPfeW8XsUZH7KyGdEVfneDCQFAmUuG",
  "key20": "3Zxgg9QwnXoQYU5cVbo3JvGNqWyjitXqWemCwRRsNt41xnktGX6FWWN7pYMLBwDVE1QAqWnwepEMWc9jbQYzk5wY",
  "key21": "4TTZGxW5XA5Y2CwNQSnejgxhLVKwJczCCR1oDppVyHYEkpXCSBCjhRQQgNvMyb4QMkxbNM1f2n8WHc3gMSEADf2",
  "key22": "5Yz4zAHubqkvm8vc44hrfrGvJHx1CTch2EeMScqDAqaU7jNt46rzhtfAqoz8BB7pfoTFSbXnucyDoUGm5rUCjpkr",
  "key23": "4WPAzw7X7vGYebuNV5DjapBzgee1aNgtX6gLS8Ai8USsvnpeYxjbVap2GysMNTYDBDrAhkFyKZ9Y1ufmPZre7hE3",
  "key24": "qRv93WGo9oFcQDqFmUHtj3PqPGUHrNRB911wDeybNwku8Wq3WrgnKsnqK887F5HNesnihv36qDVMkuWNEgWn2vz",
  "key25": "44deCvznMcf7UwcNyL9WnNjqfBeHPvabFXvPVrKn3FsPXsQdDNoH2StfezetNsf7ifrc4yxY9GjzC2xrGq39kapr",
  "key26": "2aGhAZd1LdrYV8Zp8mYXW3UBXN6oDBo5wQxWkkUDY1jg1rgVyDppMCjAobEGwkH5v7UENuZfYw9McpGSY7iKu6rM",
  "key27": "4NZNn5y6at4eny5SnMcTs4Ndj1t68MVxTMgtAJwFPbhHYR4qK9U1bJbhqW35de3f1G1RL2FLJAmsir4sEtTv29ZQ",
  "key28": "2bhNgMFWCP2C3YBZgyUFV6MMEpXtTmiXb8ucXxCV6HpTm5hNNkRZMhSfxxws7AveyJXMH29Y1oYMGQYurGbAbiov",
  "key29": "5AwGCzRkdtsU8amLe93QAbKWABcccmDbZqEbHDNF9ZYeXsafiiQ8oKaecEqsjhWV243gQVZFcobMu1QiTLZmAdMi",
  "key30": "3ZY2NggeRGttvm37gymtrMPYRmrQiZMZqgPcdPEiTBHwQe8CjrAiyYVdTzbY9VNXc1yeRb8KBtaFp2katf65Gc1W",
  "key31": "5oz4QdB1gwLucC1RbnXpPaaNvki3FXBm8wzXUkTYQTp4rxcs8CSUviqK9MFQ26USspGJ23FqmNw9iojrN9xjCCmq",
  "key32": "2JY5QkqJ81wu837sbm5has3t7LGepd3WU4SewqNXrvsdkYVM6uY3vmLPXxTw3Zbv7wvWjMgivcdfyQbF4bUFZFU4"
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
