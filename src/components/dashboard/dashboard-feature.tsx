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
    "3uV2NBtnyLAfSDuUofNWD9PmWtEfEBqtZA8gwhBxzWaQYg2mhSW2YB15fuPwSzqZdgQbCZ6xQT5qKKXVJdjpjfnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C95zjmrKZzuV1Me1AXmi2eQNiH5ct3BHVZAqVLtidcuYi9VaEFdP79fLvmFuMJ5rqrJJtocV45c8EjUhfNgzysz",
  "key1": "4e11kH8jhT9AQbHXyqhnM7UNrP6Hqqqff1DBbhitgLQgPAWfpBMzj413hgUv3aTFJgbxqnp4FhW6EXR18A5AKoQz",
  "key2": "3iK4oBt9KiRBdDf6dKujrd7e4LkmeAnwmcxsvWt7ZgR66PLtyRXcgo3fQLTQxiEgyFtVNHSrxuzePnZ7ZtSKM13N",
  "key3": "3x9V2EeMrZefA2kL9MbTX7ESWb9Rh21G6LRjnaR7He1VYUiLFmhHr8uAC9UUHjaph3MJXUvKDq38ktgTcTsAvJko",
  "key4": "2NuKQZP9mWGKpHnYdfGDjN112itWDsYXsMduDGaNZZTtHBq6c3xwjBAKji3BRXSXhLJEzDCY3jo3yq8We3ZGhKWp",
  "key5": "2NPc7yFvovineKTbkodbb8obbttU9cPBq9ZjfCsSR7ndFLnRUnLW4spXZzpMkSV22DS4kdopgZGi3Nh4UkYonrgA",
  "key6": "5qXrcd1bAZgibCPuWX1qY5ogJWT8kEDgKoSef8CdQnCmNdK9AzTrkgs6rCHhEaNCG89hmk7yosxvH9E95UEN9bUK",
  "key7": "5t4SwYjguWNahSkae2pqCZ6cyfT5BvV76xDW1ak4XEDjfjB5KBUEZYK8nourhnALXzEJRqRbFxNxPoWKCq7rroxn",
  "key8": "45ECXkifaQ5ihj4JGH7P8pjdnE7XGAfhS5Xj1MsrYis1k1WnpHMjvApgGUw2UPaHTWpHd2jVCeAFRgGnjs8psZ99",
  "key9": "4Jd7THend4nbVCL2gT44PoZHDmAPr486nmKKELPdz8YKdadWQ1itxQaKwmYVcVNcApuVrxB6K3wA54unM6bMLBFg",
  "key10": "4ovQxK1bUjy95yArHrrn4mwnUtW9GLfVNEf6jTTP6V99DvTxZPtLXghBjgFPPvZoepbvjgBQxcHpNCEWspXHy84A",
  "key11": "cbHSPgS5xkamHWugsj6YmNJCc4ZCHDCJkxXqTaZdrzaVSFVgiWoKRR95VGj1C1WWaEf4XHTNMVMWbyPCa1PTL4k",
  "key12": "2PqaRaTcwQS9xR9RVheSKa4CmMakZSkS3ys48YU1AeYRtZ6qg34VPSjoEACq6kFT388ZAHQcZoaHLCJfZ8bKdbjW",
  "key13": "2mot6gsU5Wtnt1qmoCCEc4bS6Js3vB8MRpAyw6hU9DbrQeW5wX4FEQS9ZAiUQCKgvKT4Q4mHMyb771wT1asXSfos",
  "key14": "2V7P6Vi9CPoif3pCGgmZ7MMttqyGq3bLwxKN21UX88pJ4wTXuxAp3fXetZbL7bkWycLK29urvRrYQhmEu3iPVYBn",
  "key15": "3LJn4dLZoujVY8i1CDzLZDdBFYdRXp1ez3HPGfFAPZuKP58VCNYZW9CBhXR1NmWzZRMYU1XHMFRPCCYSWVsR2gQS",
  "key16": "4sr2xhfStVKaJugoSfMeSqthdixBUJ5UNwXNXaArrhCtMMdbJdz2DbHVW2ktdjvu3Ui2vxerDJe4Kxm5pDhJybDz",
  "key17": "3e1KzvQu3Zp656aXWydSoxNtHDoXG8YyNjpRBAxbZqNw9Wj29yBngziWNxq2rSVx2oda5ivgsuMNDWeuNNWhpA99",
  "key18": "4NW2vwxgXPGmrRp1wrE84CtfQxWMWmfC6ccYQVyEG3YNM2UWoPnUDChreL7NPRLsiNtqkgkFYMiNKz5rZn8SkAfb",
  "key19": "3uiBrwYj59uowDK4MoPAML2QPmy59RcBS85aNF2eKU14KwKBdfvYzCLuRSFb3DNg2qRS6wZCCRD18HDvzNCt2gvz",
  "key20": "9AWpVssYa71dgyPHhk3eXkLwd4NcevjXsKmjMDfYMntejRWjvnkzjaEDDCodCnemUdKXSknjVTT6dJPFv3XZof5",
  "key21": "yk1Uf4qpj6zhwoiksLCTUo1nsCizvUWE2d9vZjfYBYUT51B19zq2QGBZnUQZ7DV92ToGc5xyB22zHFjK4Q1XYrK",
  "key22": "57e35XkgREwj1TM2Ru9auJWedcXsJNnRaRcKYKsRBxrx2Zpgu8YXNr2TeAYEL6wviUUEj3agn6hV1iU5Gxqie3MR",
  "key23": "4erCTic8CNEbzBbK4QtAee7qgVWCYb1sGiug5jEs7heEDPHGnsmjoQogEJmKYLo5EGByJt4cBwP7pP5f4mrHcTsS",
  "key24": "4uTocK23ua4HFKJzfoWX1dTCe8D6qj6gpwV72jL6oLFH1HkbB3b78Xyin9Aad2ABmrEaSKqxCVmbTX3ArPovShoK",
  "key25": "ivaT5QMi5ofCLoo1FgDWtJ2yqXFYKEGyjNgj2AwPRhYHCokMHG8oApMgph4VHoFfdJXZ3oP5AEAdauEu3WMCfyT"
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
