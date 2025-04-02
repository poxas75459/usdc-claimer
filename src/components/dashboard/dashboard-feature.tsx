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
    "2kdyPLkvN9H7FYxmzDMvddeqpvE3tSt7Bq6b4Dv1fNDt2MDnPmVsJ4cAA4MeVPmkDox5toTJPt4n1ZCYt6TdXf14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qVXuZL9qUZDuDNVHyZz6Jyv31mpRHRejLva2EbWjzVssfa7xvNhQ4FcL52HmXtRk4417n69coAreK3G7rw1sjqN",
  "key1": "4DHMH2PaZdtMYGWxRcSZwjBivj7jLt2ARNkaVxUsh2Z2RMNwsKhT8vZx1AvxRzPm4FNfTe2JAUdw3v68ex8ENXgX",
  "key2": "53kGTd7niTKxc4TkxmWAp2C9Dqnh2bsTvhmsMpv3yLMaJbnmhAHjGvrmPn1Umkzd9u9D75LaFA613TBQttxdK4AT",
  "key3": "2o6dauYdcYFh5baNMLzqzPunZEXdHde616Ajqf9F5uzDJeCSmytgJUWTiexfXVZKHdsyJZveQhvLBDHM6bU4K6nY",
  "key4": "33JqhUeJyW23jWppiAV3YqQzU8DTDKqJzKvwfXzYJ8xfnNhHgaHGozNbddDLWKY6DkiR3DvLGuPbnCharxEiSpQn",
  "key5": "4dj6Mo42Qs6rEL1FM7P1UKvqdNSBDHvoXfkJRNMkEfzGn57e7LY9ArUgdgcP4tNmH4dZfUSJJ6nCyafgY8Qd2uRE",
  "key6": "KrvGaJqPDVRE1aG98e6FSqoQKSxktigQzFFdAXmbrYXYZgkiBGBX4BycvFtdR1EwD2K4bghHR65CPmveL1AUaRt",
  "key7": "3tiUYnrpzEY3SWGFEsrRCgqX1bTsuyyX54KFeTcagQCcQcFwLwXSnud1HzurNTmkwiqDm9DSY3gZqJtGvoKyaY5h",
  "key8": "48CNDu8CCYZ39RFRN35uwwm65iWzRbXPxKYQg4p3PY1NdgHYPf73dgDkXDXbwTzrjLkauwcZ7udNzEn3jgnvqJBH",
  "key9": "45tniqUj4Qri1ctNmR1QUFHapKjpRv3T1xmvwMbbhzkvwBZ4nJBZ1AviT3PW4nfTKBeocWwUwndok1p8yMndBNY4",
  "key10": "2fqySYzeeJ5VzajvVV9gox13wrmuHyQWwRGSKSsRAQFANcXhkuqZbYkDJQ1DjDha79M5NJ1pfD1xZWMJwxUp6wtz",
  "key11": "DJYhE5rTt7hGCprLXq9VPRxMd92wVFcne1VToDRjyucSMxFCmbNJoFyT4aDtd6DZGpq2mGaajRnwfDcyPLQh6xv",
  "key12": "4RyYR3BtxxHjnCViRQjmBwx8abn48e4hMwjAcLeC6sXJ6gzcrkG5zSJRq3zaki9Q38B2EXRBdqMZAWvv4ozEzpeQ",
  "key13": "3P2dG3NKuwHiU7iBKqw7bLpVNpTzkEw26a26Cq1WYQejspv5xcN39mF8vhsfHLCf9gHzQsm2TkiYLrzeRR7Jmvym",
  "key14": "3Af2DaLgrVEjyjAmhhAzraeNMtQHniem39Jqk4RaQVEz5hBTTF643i7zSMhqw4Lj5LzfpcL5X3Vx8JWdusJcw2aF",
  "key15": "5nYPWKgN1P8Sccq4xMZe4bGSCMMtBzMg4472E71rkfcC4KhSigwRWNxgPP3uxoy6nPtrQs56YM8Zxw6botmr1q96",
  "key16": "5RY4Dwd6t2z2zRDcb3FjR2xLrQLwp78GgDar97AVF2AQXdQ3f7CRpsKoZFBFfNbPmw4sDNw2GjfbrxcsrdHzVdEe",
  "key17": "3isfNYPnwhSzPfjJ6UgoEZ2LmLgsvnf6UfNTiouZx4XhKwW21XATAJRHy8JwHc5wsqHXpJ7KoHxfofnaajuM1XqL",
  "key18": "u5rQxiBXadcRYG8BGeZTNq1zWcD3Tg3Vy3WPmptqDRMFrmGkGX3p82RUeUwyddUvPQJgKcf6rhngs3GkS9Zt8XK",
  "key19": "4gTgHykn7C6QW8UKCvjWtfbiKHHYyFfyBikDa53TpAevi6uC9eMMFYWuKAE683vi5es8PFdrbdnNGFmgMAccytqC",
  "key20": "2Jw675L11VzeJcnd4aAE466tq5g9EZaRh5FuH1zY7SwpfZ2vm1uLHPDDkbU2Jwk93YzyCPePYZ5K2Xsj58S9WDE3",
  "key21": "3u66Jtj3iRsF5DifYwBaUJHAgJjenMGR2jEVwBXkmf3KQLCNZEWdwnBj2SUPKbDRF6bpLgRpkXS2b6chXFen59KA",
  "key22": "3J5i2fyghyjQuPvsM4n9ee1woDiYCc3EgDCCrMXD3zPV7frZJtkyE4AizD4JKdqnAkLr5eE6vXRSUTJv1JRXLu2D",
  "key23": "DdnXPHQNsQ8eGavtcZC8bWHq5AcWcsHmVAeSpahJZY13U3usY3aActgiLVyPDrsjS9DLyujwAw38EyYzuXSvZJ5",
  "key24": "iSLzqnij2gu9yXS1tqWnKEkDBV17RUnc9cyxyKPwcf5HPqRsTg9ymPyTeKqdtFg2LmYxAVLZ8KnzFGSp7cWEgF1",
  "key25": "62pFpVER27yCBX3VowpZVYHN6aFFkkJ8wq243353qJng2B2U4K5GCrYUfX4zAi55ivysskDnhAGpErKLDAiKqhG2",
  "key26": "e2hTFNKXEaZwDTiGi79Fh2UrRdC2sNZS1RKVRkjBGkuwGAdfzF5t92DssVn2nFPQ3z9eBrLtuwYCQKzcx3zVALK",
  "key27": "stLWXE4wUASdNV54VdF3VfvTFabK5Kzeo8eAZGdhNgQuwqFKF9A1BDMEDHKQvDmxo5tmx3WiV5pm4sTZSCC7gdH",
  "key28": "3zKciuGHapL3GqRkakaa98bZpXPTtGAsYVwJLcDtzfNsxyHtbkTHqs87WGgwwX1oukhNQEzxiwrwqaiz4vCWS6PF",
  "key29": "61YNJo5L3K53j1edK4T1GSE2kbZBkZxCZkiDJ5zdR58V9dP5QggbyfgToAH4Lq9gW8o1Z5Ko99zBFa8Zkk383MoD",
  "key30": "iR6UeyzXWqaP5UhyKKFfs21TxXkvMfwUgBYmen4L2fgyEeSwwCjkieMemShNuCKEb7PJKbgDah23HihLWk1xKaQ",
  "key31": "2h4LJahPMoq8w3mkK1Qf8VVFPPp4abfrMiRkomtmggd4vT5CToeE1P5TvX93y8S3tShGkoRV3vqBXxwa6e1QB15k",
  "key32": "2fuE6jNsWouTajVTh32pwXxY8VNjNcjVPzMJQbSv9GFh9zAvhYxP8eceSjZKn9odEX5ytNdyGUVXGnAaBZ4RmJBq",
  "key33": "3KsHT3HF9CTnEP4EwChzzJV9HRBQMi9dioEPxpAAAc7UxACdoPH17TJa2BvRvgNYdT7rxiETFZYgDHz4GWFG2sfr",
  "key34": "2bm6KwwKYENQx2SryX4kNWuk6JVe5tEkiEDsv5mja5qUoHgSGvECSYQtTm52xGD7Bw4Qc9S6z1nZHUs837jVf9ji"
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
