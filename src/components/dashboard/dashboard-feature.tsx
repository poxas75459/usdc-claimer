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
    "23ZQ9VEFcRMUAe7TUJs2hyfS1i8fBcv4npgCJaJah2B79BWySsJ1KRwGr9pJrGd2LoJVffvGWVRPJRZe1paTu9fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fNfcC1AxBJBkuTHABPiPErgCeKC8MCrndZ8EsJTKaKhngb6uHoFp3nrm7ey3vxYt4Z15CwACjvMcCvAfzGtL5jR",
  "key1": "2xu5oTagKKJ52UuhRicFJLjH1qHRjQQR5rPuFoCZUQjQrh7Crvy4DikWJ1Wxb9czeYMg5gBL16s1mti4ERq9SqUe",
  "key2": "3sHZNHneMiMk9DXnnbThDyWq4amcsXBe6r5VpiRb3pwanVV57BLBf5xaz3XrPiginAAAoEDU7frd2A8rWzz6L91x",
  "key3": "4AxW7TesopTPs4eoNZy7XpACfCgakeVwiZyjEiLommTxC7wWgE3PwpBrWrcxnYFzoH7eCt8VTNSsDMESjjGqEqEL",
  "key4": "4nJTvYFYhXzMTgzkntc7hUnrbWK2wCYjP6bQrv5k4pwmAuBhM68BHD1twqLUY1rwhKJ5HnvmTFScGviVE27dH7b2",
  "key5": "4pmrSRkhRruKqsKut3kDPdUqUVLg3ykoLPNnLxiPFQEi2meWmij4htRxtX2kdjzNMztF7yCFfPvEPnvKX7K6N7s2",
  "key6": "HUcLorP6AdYSrRBVBNpRT5KF3rbHCoSfcCvyosq7sMDo6wB99wz3VMHKuDQz8w7TLbJDCeZF1yypTmN9s1msVEk",
  "key7": "5PqF5bduXQSGzxDkxpunFg1dAu1JUKG4i95tddpMoxDC5pxNWvAXbP1qe2VVmwaPHF7HAtnU9G7KjMxpcNZTKcQb",
  "key8": "4UZ8Nd2kojfBeQejz9FgoyPWNYxZRVghMJW4JLbm5ZSPtFALvFGRB8UYF5cdwR2fmrR6GVG6XtF7svx2B2hQfS8y",
  "key9": "2spikJBVYsojcfkSXcLMTS8P1sJwjTiJ97y9CU8aBXKuvdtYJ1oVSgxM1QNRQQSrAZbfNwzbbAsj5y3R7o6xWy1n",
  "key10": "53CNTcggUntDeU5bWenZXT1VJ63XXezZ44MhMoRFKym8ZdGpnDyXbQyKSiudJ8AeMka48TcV5fN6S62KmFAdgmRX",
  "key11": "5i9Wa3MUf23VhPorWLFabVKVsYGRftG7XKsaF34dvnsXSF7MJNcxnrVaeYuiBzp6kYxVEsp6cSsR5uV5M7wsfAoH",
  "key12": "2h931q4nPuQkTUQpX88RzT1HtAsBCzRCT4bqQNaThqLG83obPxbLfDDSuWMP7G61B7jBwQdcioZVrC8XAvkcS2GX",
  "key13": "bCnwynT3KnxiPM8pw391yQL2zr9PEYnPVkCkJojSY5FXd33K7yJH5eSFDe7MnCRjxvX23iFMmrp7D97kAU5uAKt",
  "key14": "2knQP8yByxywUSzBVH38szr6kTERYZvjmJmi5NXhgr18DCjxVre9nNB4eVsjXHqZBpwQSpFwSM1SUkjvFgqfKLcT",
  "key15": "5tM43a8zuLPXHzTPBQSY6ooHSGqNTymmpDpTZvqiMtfSzht1uLvhkLEGgVqFn5oKdUKfzEWrthi6fYyCfLvBU5F7",
  "key16": "4Hq83NwyzD7QudHMdhprxJt5v5FiXYiwrEew1TbUs4or7Y7RqgUVj4vpmVLAy7G4ca9guMWYiGc1riqyhqhYBWib",
  "key17": "44yYzw7XfMdA6vvu5FqMq1FnkU9omVJdGAKTB6JbxDmg533rm8AWs51a6ZYwExh6fLfkmaPpUey23cFK2Jr9YRiJ",
  "key18": "vJ6gAkFBQmfe2td4dW9yy7CNSepZAwwgAkAiov6ypTApSVhwN1oDWEs7JtC1HbFVAJ9jbrQWtYiqst3MQJahq7D",
  "key19": "2fBfTiogWtcHF8AEzHejT2L8PFC9ztRzBQzSRMD5MhYrWZBgGkMPs4hkmopgeXxBucEWUifkd2jbLh9SZVsRakoG",
  "key20": "5Vx5aMA7FRhcN8q5iuDkzpEbttKyfM6whoChtSQscjh3ye1nikcFmtjtLrSEbGvN7bFwWhmaxmiwXbtL7x18Pn4C",
  "key21": "44zVPb61xSQ86He3TVKzjgBQa1GEQobPMEBHsLvK1sZVMyWEkkQ13QbLSYx55ePaNoupgSL3LwzQfxqVrXgejbdd",
  "key22": "2tiVDYmkonRHKmWG7iaZPKb2SNcpgqmkvYRJg2K4TS8KZKtXzfFvLhARnScSVcSM3TAtiXL7H3xynU6gG6MQmhzE",
  "key23": "4JpuXARXS7VcEC2aBhuDmA7PXuYBcGNFb8N69KVinFZZmd4h8ujuz3LQXihJGcK2vBMc3zYUTwcVKx9Wp6QVzfrL",
  "key24": "4z6DAFPSMJ7yNszFGEbPJEMHebWcy2QVYQxEAQXMc6iBNHW5Z3gwJmdk5uTCR88nXyEe9MYccpCKbRshAsuRmEpR",
  "key25": "CD7xhGa6nuaREnRKThBHD6wEmzRFkhEDGhtjK6xCKHKoqy5JfpLnDmq8ANVmocHwNJQirFmpP2qnKX3qKWDMT3S",
  "key26": "36h1ZBM1bLN8Cj8b281kGHxdmyaYXqYTHCWLRYMqe7r7gh8hD24ZJnNZeEDGH74cvxcP6hdCRybQBRnbPFsSkp3C"
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
