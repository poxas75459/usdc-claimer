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
    "5S3VZt1tsHb7F5kzBRkkpJygBT2WQmrJBbfeuchyT2inhkqMXS2X1AqMZyBbNrMQcvRvB3yk69q3HAy7M7Z5SC9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SHGBnq2NambMX1oBsjMd2gvmivs83ERpkHwqHdaGWXxTU9TdWY9RoZcUE31qnLahEyWyHvP82xrZiCb1fe6zg3Q",
  "key1": "rCmoLPQHcXLDip3TjeiAyK5vRYzb9TKjRTZpM1zQpncRPTMAR7Nxi4XHZjj6mJ3HcX49aRNkbpXrs1LPZpogjDc",
  "key2": "2fcqXWz6enSEYXVgibd5X5sAP4X4u1yCVqagJKt1s2Ungg3b3SyepiJWX1731ew5Svn4RzySbdhAWgdSxQRSaj5R",
  "key3": "31Y7ZkRZT8bp4wKhAH8PQKmYbfChKir3fvW2ePncizvauGpRBWhtAS6mNehykWLgDshvcpKhv18jKHuBLFratJZn",
  "key4": "4HnYyV81MjW4C7K69TE7Z9bPiVBedno46x3dTa9Pp8J3h3NrJBVXCMWkrPpJct9ofwNPsE1Lombf53GxfYRc9Wit",
  "key5": "3aUaduR8ufUA6jMeDDggWQMnG5LpAiNke2X1A8q7zkiJVW3ubmfFtTJYnWzFq7hZmxBhY2hW9kax11CfZ2EC3rvq",
  "key6": "5XK8aSajGaHjaDQKYzZF9WgtLbKkXzBQmKXieoBhwj5vmXYaHJcTRdJU1iAo2ojSpgm7JKCcVizg7kfD5gcFYHHd",
  "key7": "3pg5gGCCqSsbUuM77AQxoWktZjZjzJebvogRtMrGNvBEJYRF9MPnaWjMhAwTnCTRym7gpWPsZvUGwSk1bNXCsJHm",
  "key8": "2H9UvTNE6HntuGMgui29fXxHgBWgjXdhhoZA5EqsqBUwkM9tqRrYY2bBXY1HGcapdR9HWLZLXvLtr6ZhXReQwd71",
  "key9": "E14t67bJ5igPZ4L8mKUuTQdrfVxGijhPopzju3JaTM1aX46CDYwcKQsbWaPdL5TXnPQcrrTomd7g5gLpG43vFVT",
  "key10": "3uiPKjrQ8KGjJHokhKdt5mo5BwSqAXbSAuEovgVHGAJGhiLhViGDNyLN9exUf8rruoK1L3452odoDfmuh1faRJnV",
  "key11": "21r88WXrtKCpNu4NQ4mzppwGaDCHcNmePHgupvjwosmgjaU6MsnmPsrwGiLk9G4XKVgY7XxZB95NmkYVT4wo3aZ2",
  "key12": "QS7VmkbUEUMRWRh6uGGdcoiYRMJDipvYguy1HVLFGVyvpjz6q5zD7kNEPyBr2onbNg9EVTo9zug9JyCZgk42fGs",
  "key13": "4jqgow1ccrkizKwDgPaFTaWYWLZuJEqbthp8vRpP34puDNFHeTg2oWaohCRc89t3Pn94uZKvfMDyR2x3fH7JZjXi",
  "key14": "2qDiW5tr9gqFaXykpXz2cKUdsrgQkNM2eRkNuxmx3uJ6E5cz9X8jhz2DKaWtC2sCvx6zF2hVvrXGvAvemveXdwxT",
  "key15": "4PNuQwQHam5eRKSXJx5KKvEYQSXES2XR1VeBTotJ5VKzNNvNzGmCS3bhp2KCQhf8vW2PyGXPxzFcdzTQEX5nwWod",
  "key16": "3Nyga6p91ohMXfgY2Xh9CcRbcboAQzzEJTWo58fkFn7SvyBmhH57TrVwvMHPWiBCWL7kWCkv1RExH6fsVcWAr35P",
  "key17": "5sgixaXTNKcosUkgrDcmwi878ZYuC72bxCzcDc3dqMf47txriw33uNXrjz4FmF6eykifcheCKNjbdaapphzXE5AV",
  "key18": "2AdW16WkEnr7BCS34WRX3VFLbC8yL3KuedG1KNuaphrEheaXHmEp2u1EnS4gUQ2W4GzZvwpTRgqvHM362ZBcQf2i",
  "key19": "2vMTDmwc2xMkHqQWTXkawhaKWvERpizpZTzZFgt8HcLNnEbvfAqpFxzJTFEy34LPcz5amQga4DfiQueMSawFbuAM",
  "key20": "2fEzBYsfvxKeY4YhVnppyzAmXDUMGazU7wVxBBRN97Qbne8nfFTw4W3dxuKpuo9pbk327vqYPttCcj4Lz8ASVVFT",
  "key21": "2QAbnTMv3nrqT6AbvPTUaBvLut9fg4cyqb42QSX72ViD2TamwFupXLYSzAwXTpiy1tkwiFQACf1qDMGvEEik9ex8",
  "key22": "rYR9QVXFz1BtC4BfRd7VkN8VbFogLpoLB5S8d5mdgACDQ98vghH37WbZ2BiYEnUp4cNsL6EceFqnZy25XxFfoV5",
  "key23": "3zm5pqUuGYHtQ6aZQrvGebWmQLCiVyJ7aSGXFzeKd3NEvAjySp2orntCmyQ4V6n8dNtcNrqYBYcNDwrWHvqMzBL1",
  "key24": "2YmeuBTaJGcccw2tHCqXGudqu1FCm4Ay6oew9STZLBw6F9j6AKECBnAWqdy1aQyD36vJb2gSeAGR2Rqtsph4ni2i",
  "key25": "4Ro1X54DoUr9JM6MuTKS6GzRzUtUv5J7WNAmvMeHXiVqBneCXEb7kmKFKQE83GNyXrQzEzikpV9FPxeLXThPVTFY",
  "key26": "4RYCbDEnUfSCNUNcgXz73pGT8Vxsc2TEoFz1mq7SzdZqcpHA2he9ukWyUiDNUMHvZWGLyBAEyZw4LYBdzWAUnNxd",
  "key27": "5vRbANLJZoqu57NGbrp7DNvwrgZwCp2zTcoh9ttyeDPSRXh54Z6kHfb2kWzLBf5ECeZtL3kxzWpTFQvueteEkRwa",
  "key28": "nUBkFuvxqBSdR4ke3jDSJeCmA8rBbpZkmkF14LWgYuYJtUFUpDNkLMUdw8Q6GpWQimAJzV4HypVdYBmqHTVAeAi"
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
