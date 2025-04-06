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
    "25fnofxBT93Kz9pMo4jQioqTFJ1WT51zvBe2KvC7ZQCXDfsPDPg3aH9MVAp8vuP6PknjUpknZ73Du2RArdRXt4Q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PGLEgzDuWrB4zA25Ed3oHNXZnoLjjX5q1EEV5XEcqBkACQNz3hAhMHXN2cdv4jY9TGaGip4yCuBhuB6vGdXPzyC",
  "key1": "r41M8ec2LQPQaGsqKGePVseZKu2ySnpL8Gxiz8tR51qanLpwBQ1UKX2c7cei8QnKtm4TALMhVtoLfEtM2ACJyHM",
  "key2": "2LpVxtqLUPru6qGoMS4ks7LmCswuhHTMWYyA9qcRTUgSX3FM46PbbfiyVuGxJyLNAvpXVHutwcxQ69CKfb29oCY6",
  "key3": "3RYepHtNPy5Mbxep6KeLm8yAyTdaY3KrofrRBTCR8VZbzeGpshWrq7QRDKezQ78L7aspFF78959SGeHTbezcG4Hq",
  "key4": "5UdWvKNGJbBYDerJYnH84dd5yE9NKUziweLe3nrEog9eB1qpBer7VRCaYAdSj9Yt8EprNHKiX4nFBshL17hg81J",
  "key5": "3SNyaneAP5sPv8MSZ8q9WHxM2FeiSR4WhqDRRk1XzgPy4rBxBVyFJQLPFyXKMSYzkXufnCvke65dWxQM9LaE8y2Y",
  "key6": "uHjo87uuXspG3xouU7DCoTt3SCwZBBH5KuDiJziaUPiy72AP1neyTozDaoDsr7MyvUXTkrXCtuSjvUzwDHnm2eo",
  "key7": "4cMiWL2xReSWVddyocpyJAWJiuETQnwz3TEzTmjg6p71yto1oHQNVmA4KDdAZ4rSrPByDaunDMDYozYnhGc14DDr",
  "key8": "wnLJEKw9iqQRQxAMHD4r66h9vxRZfma6xSGiwKN7dGKTFNYwkdLZMcV3XeEi89YweM3m7gm18ktf2qTBGbWHFNd",
  "key9": "4Amyx4ngDZHZv993WYEsjKhNy1TWBrqdNzwfvDCetXi8EGfKmc8fV7WvXgbTZLF933eHXhGvWJdmQ5jetry3fLYK",
  "key10": "4LEaP3Pke4kTV3n1AsLfd7bf6mRmVqfp4nW4kRdB15gsPwrtwDJkdUjZP5DTGfSXCaXwS26h2yfx3W8x5An434jX",
  "key11": "46mmgAN1oVdwCcmzipbbbtVVEkdLrwCb5QG97nREp9sPoaWGFXMe2Eypc7CHd8T9VD84tKMzJpeReFK8pAbEM7Y5",
  "key12": "43dyUFVSh3Rm1zxrPaD5S6BzcBobe6UGgkZC8krXQWRPMgsW1tys4mGFfXCnxZcuKUg7WDoBNY6x7Hu9dr7uPZXx",
  "key13": "4woHPDJYvvyEzEtFBf7FyKmFERpXe4eof2jcFQyMFpd24WTg44WWqTyfdbZjzUpWd1dc23wqPCe5D15r8zWC36Vh",
  "key14": "NpaTKeDCbDSAFeQTrSkrosRhwL99Zpv4DyQ8TKtvNpAq3qThpqGtHhDFhwZbq1pc3S1s8esXspbvUM2Bcc38ESL",
  "key15": "4QvXq9oGFKoLnyU8pKief6ftn7hGntTSQZ4q497BpDAQrx69aTUY9tocvZn79YKLUegQrgFMj38fRrvBU7g7AYJY",
  "key16": "3DXz2VqRz9wqF1taP3TCbKHdxG9Hv9wmeFMwXgSg9C5NJazKd4v4yPXN88HZPUhkLexxZuAszWY6VdSmiRNUhDxY",
  "key17": "62rcQndNYsSxRQxYnpD1NAi4aAbNdzx3mVcdT8Hcfrb1xCuvBNatV8K4LHPFWyW1w9J6FuiYoQ1UpJF27gZYGQHF",
  "key18": "MZ7qCb35e6R2wCqBZHBh8WAxHtH1LHdJ6vvu1ngeRz2RVcFxbwrLTAT5ZTwXWjp3BWA6P4QaH7ZwHLDPbBsPB3V",
  "key19": "4v2NuYzyZdRT6Sn5MHbo5xcDvvKT6HKtNb9VWfxqL3YgjzaDRTsVcz1dEjW3qRz1jeU4uHEoBq9Q3GR78KANGodz",
  "key20": "5oUmwAFM8BjaVwnxdWPCc17zLY2VPWF7Niq8aES6D3skzeDrKSszj42XjHit2yyx1V2WbWphe3aUW9LRwiqP4oPQ",
  "key21": "2ikmZYg2Dpzr2UEWUwV8y2YmLiHV3YnpbZNgVWSDa46BJDv2ojqbPkG257iePVTfTQJpZqsnXYMqhA1kPtjZyYun",
  "key22": "5W3Dsmoev64Y3dEviNPVm9yBXUczxSwz54V3dEgz7pbUL1W4xbXqSLHj9ucZvAfeX2JxyQG1sF3rFgjc2VvL82Gz",
  "key23": "5NL3WivcxN76BgXcRak3L6d2F6i6e2i41SFn5bmcfe1EFzKUBHLC1kxNhzT4JcEKYPVz1bTseCgdcynMSpNbNpHB",
  "key24": "4kztqorPrCpB471B4AeXi1aFT6co7EvPW9KVxM4VXRmnQdtW8Y5F9k9rnrED2Ur8GVCQAb8BYQLFd7fLPJXeGf8w"
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
