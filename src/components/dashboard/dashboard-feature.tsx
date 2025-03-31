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
    "3GudHiT3xBNcx2TSgZg2WvbsYzSA3Aa1s4RCPoGLUwgJCKKnsUbzyVjhJyUmTvTy6DpzKqNJkqeD1w7fvRX5E26d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AGtdy3xqKhFV67AJae4XoeEkqxEoGHXxFXnwvfMc3sjBhiB5EpHqVNfaHkLapaQ6tc5ACGUHwqonEXzHh3KnJq6",
  "key1": "2SFSkjTtpK2PJ6JzJnAEKdudfm8DR9PewWmW17UNXbTGLPxyYpjRpqbADnYbSwoLxa8PuH6oBNXd25qKRzdZ3a8A",
  "key2": "23AxQzUXR95v3zTH2tioPyhLuRYUFBzUc7hTrHvLqjpJPTM7ZiuY19GJoZ6QXTLx3aYUgJhnvAUQxgmYd5TqpDkS",
  "key3": "wPiecYz5A1tKCWhwLU1T4iyh1yVJ62BGk7oYM9G7Ekp1D9iF7SDeRsT78KGEKG11voq2tF4o6psBHXgbmr8XPSH",
  "key4": "4PdnxQH24stJRQV9qW9Yurj3TtGj2n4n4Wd9ricvKEgnG2koeRDaVZV2Uvgu3uGsc9x56dWjwm5ojFSUS4N7fXCy",
  "key5": "61LYXZbjjAbz7byshyVZMG6N2qhcDJjCq2dfSB9B2zuZ6vrj4cSJXqBeZqKaTUaxSuovVDyXpELM944YZBuxi5sf",
  "key6": "4vTonW2NRZXgEZwXSLrHunNGfTJXzjM1Nknv3Z8LVzaxzDx2kEgzcQa4Spxcy5CAYcuQNjHPYkVRJoP3VRsCThRm",
  "key7": "3699YKuD33z5AawhtzRiZQcMpqw3jtqviyA8PqLMqicuT6ikR2weKM6p4uh1N9CJZLHQypRxZ1fTCVzwkkUmsc9q",
  "key8": "25Frf5gKYEdrVQf9gU6kwPWooH144sTXanLFwWkKNfKwGybBcMdWAszVyN4y5vYPn8yimocW8B1HgBjbMJezaX4V",
  "key9": "2Hym2kF9VBjuQ6CuDu2TFd8hzHT1sV88fNWpYn8iCfjAN8PsY8YKZ1HsMLtbNamVewTrCvpt8NroEsYCRwLCUfuj",
  "key10": "YSNBnKm7YcLhRUnxvCBqJt7zDJwzCN7Rjfr6jp1vUeM7uoiLtnFcCS9jMmSwAU4TQqD3HwEhSSjejUbWBbhMdkh",
  "key11": "2MAxXq3i25VtzvHd9BiSGE2q5uHXNhri3vKMXP1qFwzaQinsaS5A9bWp1CrjEXNnrApgMe614h13JRFPhBLpYone",
  "key12": "2PQp34QN25u1hJ3VULNvtqVC5Xv4ueZpXAVRw2xA4ez8W2TPSKEfP2ProVdmtNtMEaZTj7tX7dFhRK7z92c5APfW",
  "key13": "3RFP7Bxqziwo1MELzip86rQhJcFSf5Q3cFeXiUaSnzM9MUVGHMu7mJfs6N1C6PrMvC5vwUkKdG4MMBxvTr8TvarY",
  "key14": "2an7mvxdoHBCa7UKSsrw37ruUwHb8T21ix6gMq5AztRfgFcTpUMeuffEUUu85gNRC5sfL1F2FpKvcwjAYEJt2DVb",
  "key15": "2XnT9SBLpzjdMeHiqwWz6DEBWp44zVgmU7GU7NCvGrLqLQG4brtZpyys3SPHuH42UXmufdxpa4CSn1Y4hUZ7RZ8j",
  "key16": "3w73gbbR2wCRt71WxS8gL93taHzojNZRZqmKRVETQ5QZmXJMLptosZiuRCZfyeSW9yLXZ37ejXNTgbYzyxXBVACD",
  "key17": "3Crp6WjEAfqb9N6zsNBC5GjRHxsa9BxGNSQhzBk9Wqtu74hmufVHDox5nEJCmYL7J4Zo4ify29bQTUp6D9QyUht2",
  "key18": "467mKoNYL16JpbXm78Xo8Uskyt9QHKQwHJ9jFgNpyUVokh7GKt3jACjw3d9yW18fxVamv4NMRyBBvrL4DErQDmni",
  "key19": "5nodZMc8FXN11DyqDeBmTQvhRhKrLUMo9j9awReZkZf7dJrvo6Qizz5wB74D3Zn3j2toEtNaa7gZYx6Wi9WVeMG5",
  "key20": "QjZqxKHbaZQP57Q4LsQu28v7sWGTtdTPbtU2bHHvWTXx6aeRnGo46v4aVf87S9qhYei8Gpsu4aYATdLLtoFMoCq",
  "key21": "5RfjDR8AUofRKvLxwEyv5UVG54NeyG2ezt88PyNwSVp8vaQf946E6yBxKp5WF5xhBDs4zxc1DFr8eTRSiBsbyeAc",
  "key22": "2Qocd1saqgAZfnkK7A1hSwtmF61F5jruCUwY24QfiRxPPw4GfAhowFktPgDDBf6s71uTGMV4UDrwVqLpXPbiRFsM",
  "key23": "2ToqdxfJuLcnrXNZGhAXLFpxxKz3PV4RzES3LjopnGyRPxL1vFRkByZ3n3CccBfHVxbfy8Kq2dMrqaMccb2gPYaV",
  "key24": "3uWULbYTqam3nsvYHFdGkrxiRcNVYYwR1Td8qYbDyQUtRtNEG6SQFpnYmwTddUQGoJ2BnvrwyChMbqi6zipAg7Sp",
  "key25": "4U78BHMvNgCJdE7Xrz7L3TgcMn1ha6dvWhNMH9G9BCofKBg8GbPSSFhBNzzLh1fr4ewHRdsoJhyV6zmDouF86Mqt",
  "key26": "ZpEj2vtjYv86bZgitM5PbiqiRreo3LfJeWq9caezdXNL6NZL9WAgiAhQm89whfHeuzU4wLVtmn7WHEuPC1DuFFP",
  "key27": "5Zn5XJgC6kgchpE7jdBs5rZgAtLK6MdykghKw1Zu3RzqykXKt6XNxgiPapBHopUJomQ8XMTKuTF6BXLxQAMagjrV",
  "key28": "2JH9yBALV81VgLSpz4ZfNrQH5zjCB6fz66bT3eGYSAEoNLbQKuJJ1eeuiz3hYZC4qZhb5vKR6VaBvwmEpyAGxkUi",
  "key29": "3TemP3z1CwH7tf9cquSK72bRHLs2ctUDRFibGx5Bsn9XAsU5McBEEPehixhbRGSMUY8fKPpHeqjLQuedPKWP9NPM",
  "key30": "8PJLqtYuwPmQ7oXvBDNfkF68EQNmTbMAiJHRiq7o6mbXj42FeHEVRSvswh6fj1JzgriUtmYnJQ2xacTD454szN4",
  "key31": "5vs5gV897zarbzYK7RNWNkK3LfSK7tAzXEHPW6wm7usr9zUtftKvZQuJnEHxoxAoDznsKjuZT7Tz7EndPrGAZbDo",
  "key32": "3YKpeFLiRVdANSxvLWnzV9SYScW2FamARdL5DDPcF1gfoGtiUPNSSefgDbsngwWqhNHeWHiJtr3HDFcENS7vPZMJ",
  "key33": "6zubcFu2UZARgxiqdYWsvJSez9CkBEh6rSQzoKmfr2p5b2vamkwAtEXcP2nYV6yvL4jVmRVxbMH8jtfUsdngnC5"
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
