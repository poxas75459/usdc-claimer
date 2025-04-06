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
    "3FxuhPWGeN6x2omyfYba2P4yTRXKbJoAkTkA1dJhRPwTuXX9rpV6c1LFdH89B81TiZbfwaiELD1g8kbY85Y7qUF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gd1VLRBEPCk1RVLekeZJFebgPk748UMmNuCHXNEdN3RFteYZq6NcfYwLq38vy1Gr4Ksuio1Mqxx9kr5u2Dkhc4o",
  "key1": "44Y5Vt8LSVZjmfwStuwZKk5Bs15axW3pmzzsV37U7UKSDfd2pdkRaqwEswhRsexKNE2tJQtWCjuh92rp21kbPDSH",
  "key2": "2zRHkTkAYd8yJLM935LJnP8QqetHAnxsFq6B2BK2sfEpULj6TykK58k4UnUuRHXEMZfhBNVZBHi79nPgmZiRK1br",
  "key3": "54fpkR36khJxRqjfGe2AuKp3PFubQGB4yhFuoGAyD8QRnRQ8VJcZEg4x9iGZoPR1db6GxfT1NDK9Q7ejYKPTut9y",
  "key4": "bWzWv1ZoEt7PtYJw9ippZFEW7Y5oTeM8eAfdjpQ4yv9W8Q8SQkNDSKBs8SRMoewjTbQYhVADptGJUJ7f67L7usi",
  "key5": "46fRZBwXsEA4QqDS3L1L7RuqKYYm8f9LQCRzpVrcaHEcJXoLXEkKWvZpXVc82QbPeJuUEpbXcXNmgzbNTR5vtQWk",
  "key6": "N2NhdV1Vuj6DM3gwWPz3aog1eRSKVrQ8zGNCSR89iSkAsgfrrGPkpVgrNc5EyjAB8jNPbuQ7zpjvcGygTVKe9dy",
  "key7": "3KBjqoJFshDN7nMpMx52dKWh1git9DJPht3kqauv1m7AQAMG9VR2UyjTyKtz56uqbd7JRQMCctbKKm2CDDhVEMd",
  "key8": "2Wgm3ygFAUmtXmxDhTH1Svx7p1Shr1g6Krgi2ymuvpXE1xjj5y7LYwASm7Zy9ZWTn35RkQNvgnHHr14ovb7Vdcch",
  "key9": "5ZXPgyo5NbAYAMqstc8gZdVCjJsnS7pHHLetXBLf5TGjyFmja4A2JGuUtDLyiHXxekMwpgLgB3XmV37v5BXHGdg3",
  "key10": "2HAX6i2NYmmBfFgmDC3pvURCFeAt6vpkHWsv9BoLpKJ75DmHcQEvHKwVZVSbFgQxkdmnBRs9NTDK7Hhpmfy3Jx3L",
  "key11": "4y1jSQ6sbq8RdkxjW73vHTymxNduWBf6VKa9pPoiGkpbTihPUgiQaAEXuE1QzoPMFUX9WKJmSfNPaZct8iizrUCm",
  "key12": "4Mj2GN7sBdUC41eDiJkPXj1ZnrpD6wighLWffsPCPFKByw4T3SwXcaSzeYHMVfAp1UmGB7gaGGW3u22qVUJ3FJN4",
  "key13": "67WwJyWC4UrbEemMbtRHgzGv51byNMqjRxNoSbEeG9Ai7QM7Xm152iTNsMQP4s6sQxvFE7stsWxZ5aT4k66yvbPV",
  "key14": "5GH5yLNNWyYCKM9YGNuzHfAafhf9Y44MRMuut1ToRaAvvcXvQF5qpCZUpioH3aRBGfGCrGKvqXc7M691wYw1gM6G",
  "key15": "3h6PoLuA6KBtSx8942Ns8RSAyB8vS3fH55yEsUVnFkTZ6qnwK7d9em9VZPh9ztiNgnzBV4dn2YNZ4sHDijAzHFVk",
  "key16": "4xbp2tBdWX2vampYCAnD6ByVwtpPvfCs4c3HMcECNrnGzDk7w7Vqu5nqSQBUeh3AUZ3y7DSXwfWgKDfQF9em63ZK",
  "key17": "5yYo9GzZ527rAYrTAKhSXURMjnbRJDBxqw9GdF61Xh1Qmu9YPoJotdbytwg9dE9rgNJ1ymMmgVKNBBcafGj4vmMJ",
  "key18": "5o6t2wm7mZ2sU8W3ixDhVue21UQc7hoMmqxBeX3jjePc5vtaP6x89GhMfxscTyVJUkiBxzCWrZr69WiR6jXoT4tK",
  "key19": "4MNsNw6Yqepy1QycKo3Yh3TA5ijRJhGGbVkQ13fS8AMt8orvRVYaverqqTguu2DNmNhNYWzpGWa2eYU1ydwDJ8rR",
  "key20": "27c2wyo3Px7xVRYvc8fRYwJz8icu1aM8pSYHDCb4Nq6zo2MHhmvKBbXif86Xq9voqce2mifdkPhHK6w7yxKgQnPe",
  "key21": "BDprNWiW5EAuPrcDhA76s4rYALdkiRsYYUGZxDfuQ3STSib9Wc1dZ81Nxcfzzw6a9k9njwhAqcoNbahAJ4PC5ZK",
  "key22": "3Lc6CptKXw61vS5CswjJSQygcBUUSsFRjr2dhmRfhMYQGtU6TFzz7cSdtyNwiQ4mfCZFj2m87aTax9CN4WSBBgM1",
  "key23": "yc9RXiW3UVMCN6APFedgxcbemzKwd6GXT6WS33qn2SJ5E7U6FFwSSeX6J8KF3W6kpkkmE1yPVzcdNwCzYNvVHbe",
  "key24": "2ojwZF72dQYwAjMMnUtSfUNWBaXS64mKZj29thr89Hv4PBKkdMTTbFXj3tz9pKCAYGHiyjwc3fFJVp8Gwng4CP3c",
  "key25": "2bb5Hcug5ErFiPEqZQVrMGdXd5SLsSYLDdDfqKxPxL1ribDZXCUbP9sUHxPEHnP52kpN1nKeNynz5kvTkqtexH75"
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
