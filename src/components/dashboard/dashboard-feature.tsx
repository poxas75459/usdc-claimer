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
    "3n64oaXkSk26MSaynMK6dWbqMRtyje4dxJfJAQ1ienLURfTnjrhv2CQgowuKqzwHgT9fEUMWmWjYvkwrMGckoEbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BGwnPRQVnr3dgJEDzFBwu5v2K6yYjjD9e4Mn9o55S3eQXkC3xWBwLLF9RfT68cvc6Pg2HxuNHpPhFsWBu9nxoZ4",
  "key1": "49vHt3JBkkSuRcdg4oiH7MCbUKPoit4brXPUz4VQneJNzezhq9xCGdhYdzEEivHoLyJ4nD3D6WdK5U6MAfWbB2Da",
  "key2": "36BtcY6JqWWA18528we89pZi3Y7xsY1BKvzrC87ndjFHyxXCDc89mB2Ccwk5p8GdhXdvm7Ki2wktYeQAYdtvPjgf",
  "key3": "4mgVurL4a5LVHS6j6Z5izEiwardF242gSTYygLVx2X1HQyboXYvASLkdQhD4hdv7jqbZgbt11YrJuyVg6jHg9sXw",
  "key4": "3XoQ6w2ybpGx3qZtzMvCKqkbZdCnvArbeR4hVTWB8ZozFD2fP7RYKDQbUqEW8PzrqVSS4dns6NwF63ivmC5wsJxH",
  "key5": "wLKK29j4W5fuSgU8VEfM3mjL7QFEmzUn6Tzi9rzFS5r89nJMJSvWqMX5Zveihwh9z2eqb74uhDAdfztkBPx7q8m",
  "key6": "hQKPN6PYBKzzkB2VCZZy2jQp1dSTtKsoxuaR4YMMCeN9jFcLifUdL4s6T1bCaSSGhRdAHLBYV3J3UNwcKMLrbWd",
  "key7": "5sK4PQhmT6M2afe1SbjdnSRbkPJ2gVJAXS23NedBzrkrKKBGzAp53Nb7HBz7NH6vYwji7yxrv962XzmpuFH1YbBj",
  "key8": "1CLWWGcccDBWWDcFqJg2moL5ssxsGUwiPxw2AVVtu5wn8CcpsoRhgM93nbRNndF4MrxbSqcMhXp29ZgvbgNEeYr",
  "key9": "2yRmDPx9LJNFfwK3iKXjoDRLn8DUcRS8jATgQEWWiPS4fWkDr2s6k3Vjtg6nVFS1dqXCTKGrmHFwFW8rsWPXTaN3",
  "key10": "3air49uJrF8mqAYRxyTmw7npSGcudJJ21JUY8ThMxc6dipX4yR8Y762JNB9Mn88r516gNv8XEDaZoYq6NWpEPmoo",
  "key11": "3u815eMwNx16o28gUKdJ1R8rFHUcDgX1yEW7ktc9ijgD6a3GhGfdB3ZCZMuR2bPPtgyELCBh2tnW1VcrLXdroVjh",
  "key12": "zM6gJdpVmVThw9jvoP93qQXkRJfiw6dkEx97xiWdFUsyMnJHq5HpH5WERrX4GRDUcHnqNxJp5gmrRhxhmVS5GuG",
  "key13": "42Za78TEyaDhZLxJ3TVsFf7nayT8tcVq43WWc9ZKNpaqCzr2k4avXJKANq57P1TENiX47JXg1XYMLnoj9ud1SPp8",
  "key14": "5cYM73eLNqxD5ZNqAULdhoXJpRKsM1qBcaequoft1fe1gu6uXiL4eMYQCcPgdpR6db7gfk3WRj8pJk46aK6FYUmS",
  "key15": "3y2VaC27bdEJp7RTPeyH8zVcNmBviVzrgnE3bVAivwrz6pj7T1DjekMMm2PdEJu5sTL1bEwNi7tA97iyV4s3LYsR",
  "key16": "5JFVb2zroCwgoo6T95cQCLbujFUndTQgr2YasrH3vyf4J7VPjvpgybxERVcs1CW8pZ1btLWeQi9mZHA2arjKQHUR",
  "key17": "sxzahmap2pgiCRg63g1Zr2S5nH53XuZ7wmJduUUw4WUALoJMk4XpG16Pdc9FrN4u44mgFgNwKTuDjRv26prg9M4",
  "key18": "5GqPmDV5mnU5HdGPa2crrbF2TjoARBssawfrdGLWuTngyAAGs4yUJf8pp8RmFjW3fTc8z66Ru7Hodgmf4MZgXQr9",
  "key19": "3JfeG2rdKdXU53HRxHPeHAjGLSijkfb1rDNmKaQXdWag3q3VC7ubYrreVq2gkCxq5twSnvmT3E9T8vvuANDfBCX6",
  "key20": "38bwH8xGwMuwU8wUX7dbw89j53Htzy3Sddqki31FQGbGmjsgDWnJsKJtRvWaYAokAunD5iRy41zeavnvi1u5vh8d",
  "key21": "5ZtdYiXsLResSCSg2uQMr77Nh7guBiYWo7jJBGdtzgSRvgWz88d7KJrNCYNbofKmjBsb9kjbvq8TvecgnfMeYPV2",
  "key22": "49FAH6trYdFss4jDGx4ngvrvtryightrD5cFYmCQsersh7uusJdgqHEpFZaVf3hJdpnE3i5EqcteJ7S1WNeSYmRy",
  "key23": "2JCLPcRKQzbpu15fjzFgkqaDUB5G8i6su7nwXibVJrdJhJ5NA4zPoEYwGMGc2HpCdxrn9X66GBZ5gKCoPZGB8ycM",
  "key24": "3Kkt3eZuHknj4tB28dgBTkShW4XYJZDLjDU1HxY173Te5RykpnzTLjTCKYqo2TtefToByWRQX8VB1g9bfbZwbbqL",
  "key25": "4VMJy4qAwHkRsDoxZCfbRQFLpRbNqTbYvfNKzXSnDPGnDa4wQAWA6s2Y3ErPWYTd9y9Yt4HtxkgnDVBMemAYV6iF",
  "key26": "4YSfKb58ScWaXe5gHWh1RyeSXPrA7GkGVABwqZo8zypqBrz22UosSxFjasfYe5yLLeeSBN6d8am3gBR2K2bsYmZd",
  "key27": "2Q1KswGZKVZDD1GpmfJfEJZX1XfxoM5NFdwdHZYsqohWPsXcXaTenBsk7UhsL6qBNd46n2av9x9eXzghj5HyanYD",
  "key28": "2CcfegfxvsiT37tdXvJnDzgZMEf4F6YMCnQPQhNSAmX5Kn1STRVq3diqfZBCvxuEQtwGXeqtd42YfAWSvx1EbNuU",
  "key29": "45jHWa4AKKNZ9mKjg2P76hiB797th9yZj2kwMmZZxFeXDmuRQCZEEAj8bo2p2uNKkFbZJRwzKycbiSQgbF7NYMur",
  "key30": "4EvXkoYDzzKL39hsiDXBovDNixdxtg7awdLNPHvspz7kB5sq7AMFE2xWuVtrhHGHrp5WBYVFFdFV55fveMpvQER8",
  "key31": "65wH26PBFLtmWFzC55VrNjv5cPpRaPYTBji7zZje9BNYfcfRNNT5TKhV5Pg7WaY5Jn9QV1vcYpHBMbz3rjL66dp6"
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
