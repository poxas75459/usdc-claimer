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
    "2hsbLvVyzg4Tm2fawnpe5DKpTYP1xM8NBa9buT7KKVvL8PUToj7knw8FrTXiDT6wj5Nv53s5737pwLmWMWWyYjGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Swcf3dCbGqy5jgH5Qi8m6WFQhRT6RsaEwctfCJU3hFQSeHrSmSCxKjs3NTC4zcev2uJobubpge4bWiCY31kaqa",
  "key1": "YrGpgTpatxaYVo3qgtNaQ66Ui8acbRLuNnLykq7HWtKUnNqnCLEab6n5MrkieoGwmwCqWHE8d7W7mHsUKTqWmqH",
  "key2": "3nigZLfPoFNXKLjrjA76pATdkkuxaeHmwbzTbBpVGHMACQbPjQDM9LjtdbpsPkfzb5L1an7BMokX9taZ9xsQ4sTC",
  "key3": "5T8KgSjbepKgR1HV88egRYgCrwA5WAHN4fkfWg6RWKYWQSaTfhscg8kXpGmNH9JYS4z9TXuFTp6xCuWtxoYsCRX5",
  "key4": "4xvwBvfWJnEwJ4jAXZziW6LJbTWzENogvx3oG2DRu4viYiA8cqtYswbTSxbNqbiwaUGmbCzRGmYyNkVHT32ZexAh",
  "key5": "5WNpigrwbCXghaMFeVmPzvPtSePfAgv1dpBJpGj3JJapvqFsT6J17natz5APVJTcxwZVLkm3u38VBDMwV85BZQJ8",
  "key6": "4PfpPNdMnzEfArRLKfnfQW1QXFTqE2TycV7f4uypNUcdYAgz1CMB23QWBuYf7T5ec3BUnEmoyBgdoxNArisQm7JL",
  "key7": "5zSv4TPpGJ5orNXtGnmgFRQEdbWpw4aUbM79vCwMo32epsuBwQwyFPiunTaVsbRQyqDpyF8vm1jMKy2a8YKPXPrq",
  "key8": "5oUmAUPgbrrWHYDAESeenpVi2TPY8dMHp25ERKnU4iP3ikxzDg3vPSqSxHryucicfk5bFFm6bhtsAhj2ynhENgMQ",
  "key9": "HgfmRatovSQFeEjCFdDooZFUfvD3LJxkZjvTKm4kfXou9PJAZqjoZkWeeVKGmwgkf18sp7kNYAei5DyLQrbrGiv",
  "key10": "G62CSgGonTecraS5DKzt8jXhUAisrd96xibzEgEArG4dSCcK76MZmNJxQNgbZSznRikn6M2vkz5gKCqFJGBohdo",
  "key11": "9X6Xw2qMfwZjG5caLaz1MXiVhBSrRjgY87GYjpBDfgQTibqQnMu6XgRgZqHYctvwWjpUPWF5ye2T6bDz3sUVr54",
  "key12": "5XeESkFEaVBjhv8n1nv2J1qoq2vH7DvBx9YNyhk3WRxA7idJijayJuGsWgxbv4zusj72BiPoaHZA7sg8qjjoaXxP",
  "key13": "5HFMm1ppRnvpxC1FbmuRNPgb9Ry5x88QPnGATdSrZBG5D5HPkcrddS6yLBfRbViwpnXtzTvYnayqC3MfkRAPwNK4",
  "key14": "5fMqnnsZacUyrYJwuGVFHZptUauDjXbe7vjQ4h5BgT8U2JMGJv3qQ7HiM8en9RDmvyZWWziLGXyrZpjbBeUdrRN1",
  "key15": "4V4t3ZcVJ9jZTSRPs3YERkFxR9zY3nS2eGxDG5YbdpHmxXhH1uQ2gLDUfsdBowVSx7ZvTUDJUuQxE56VvWwAUNLG",
  "key16": "66AR3qk17UopmwsJno6GpnM1E8NpjXijKrtW7waU4KxJLgHVzQrGTih3vsUC76cT6jgv2Rx1SwfEkpNDA5GnXuBZ",
  "key17": "4pCkMFJE6fzkhxfngjTmSd4aSBETYdWSJxTadYJMZQ4PcEh5U9AwHWZbjmxvrwk671KbozwRTXwP9CVzwnP5d4uB",
  "key18": "5wFsdtJ2HKkfbwoxZPbHndvLj2oGEdiGcrEvRLD4aJpAsy7LxvuPw3cZHoA1NpzHm4uiwgng8HvT4aRG8EbSffZs",
  "key19": "2xUpVcbZK89fdXpu9ksvVj1WXvSMBF1yDUWx7m21hP6Lqm3xXipP6eS5a84yBDccXUeTvMknzUKmkZWMh4uHUV1v",
  "key20": "4UnEHXGLo5wZxFFTNSjB3pMfP8hqhPoefB6qJYyg4iLQP98E1VUkXfbh4AxQtNxsUZsde72YmPJwdc6R6CxdRefm",
  "key21": "5dUUEdDzUGWvJmEkRmgxGirhYX2hDiWZb4miPZrspaBKMhtW9fe7AhPLgRpZhvZkK1ZAjWtdmSNR4XKP4wptysg6",
  "key22": "2g17b3PiSy5cGZqXDSCWxN7bgU6FawruFRNT3hQqqt23qDKSaGbUQn4s2oY5m5e55nT5C5dZhd1V6zPoTg4FKFP7",
  "key23": "XsVmiECcqxvKBh7fQoN4azAguMBhD5oEx9dDxU8oCETe4aLTBp4cQL4RzDcWmfaaysmC9hiYMJUg5WtnV4qYqra",
  "key24": "7PXsDMmEmkEckVVGR8ioF3afLUz3sJt4qfWjNaWg1rPLuEM8mt5nEFQJqssKDvh838LUVSDU1GLFVBU2cHYZfv3",
  "key25": "2CKZMPVqYAeyvUbGVsgcLBZizdxuE87AsaszLVPKwRZvZERidqfKeCaNPrY3LuuXdVCgsLHtcBtd5qs1EpGv57nE",
  "key26": "LTGsDWy195LZQYnoZNuFmreBudJRcUu4kRpkZLHncmDVeTRZ6UdmnAG2JbwZb1VdGiVXyefEASpcC6BedRwCWWS",
  "key27": "4U5TgNzu8RiBotMpfVSUBz4cUX8ARuQt5Sm1W18BxUHHkJz1guKXABodybfFjfkGM5JVtzXybtQjzqDSzMkA3Gmg",
  "key28": "363AThCBsiziGC5Bs5easQLKyfTgFDv14Ap4QvtJNcoE7pjua1Ny56k2EnqkQ8KdwR9upnyfP4nykweXCseSYor6",
  "key29": "NfW3AoXV7R1f6Arz96hbkQKBmtKjoZULVABvAvaWEmWCFKUBiJLY2P2tZQvP58htv6jmJ9bJuN8CUPxf8EaASjA",
  "key30": "nyukpadcJLu33bHoJc8spvxgfidfnHsHdK4dupzdL9vRm54mfYNDNso4doLWb8FUsiBCF7YhcfX3o96vX9FG9P9",
  "key31": "31jc4KNWnPguoBSXX1HZ5fwYFa9jJ2FoWf68CbGiAyfq6in3HJVoRX6gN4wjBjWsnhNQXu4pYd3JaX3ubzTQiZWu",
  "key32": "42mfEYy2c3Pd69FPqETL5jYgEDzYyGuVpZScch1uSLfQbogJpmqBUNfxKuPYaLQ2vPE8tSmZUmqye6Bk86v6ahUb",
  "key33": "36689SwpqiaVaKUdJC1GATNvWrkYRT8Eva9wb9XJbDkbH7my4gWQ6GAonhKAe8um9Waj2mVLs83YVeixVRyH7RF2",
  "key34": "WKYWmDCvKHtPmqv5SVzJGyNJzMR6cbLvonMy22DdX2Zvu8fFGM8PgN1vrEJEH6SSVKsLNTbocLfG2sCNugEdxei"
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
