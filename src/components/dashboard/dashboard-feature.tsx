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
    "X5PrUA4D5KcZenQHLd4aT46pg4Sa5bZXzsgDq6a31ckhSxVYGztHWC9Vm8Tr8Yj33P8ixoWgNPmSRmDECpSXA4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25gyzvvTedR2midnowooPZgvtBGpFoYcsF6U6Wc5xQjfrKsosJTr4jgijmZGUVzw9RGUF9uiA15HD1TJVuyv7rLA",
  "key1": "4cPJUmmdR66QTpxLvgMSjNNxUVKzmyaXg3Z6pK92WfH341KexhQY13JVBT9wYDWseJDvtf7ovcczgxXj2mo8h5UM",
  "key2": "FDjJuKbMiM54yn5ffe6LuC8cCEgKtQHU66J5JB9hmH51VuSRE1V1sLK6QUktQyjgfnsmVbq3RYLKX9d4RLceGUB",
  "key3": "4MZe9eryVozYnPN87ME5FVHZ3ZBGkYRw2S6R3QTGpwAbw7BmXndRwY2PjvnTsEeLBM1wMQ8CbXw9hYTf1vLD2TUB",
  "key4": "4iYmboTwyCHNJuNUUNC48zS6pAMo5P7EqZ2gYr3HQEKXpZJZ6nSpynKMsYVsPkKvENePnepE2ctcA79Ny153mu1D",
  "key5": "3Lyy9sYvQU7kERVUZJdfAfqiC7yLUTLNiYP3EussYfuHR6daGmVEgJkZHo1JwVRuypn97ZeYyWuHd7BJXZEC6vNn",
  "key6": "3wHzyGSw6cW3ZhQCoWdgpd8gvaG5G8V65vCywvJT5xAqJae3NXUkmnvwo8GUvkH9j2KXEB2Zxdp5GPLmJAHhHWyW",
  "key7": "2A5bLjRdtKfAApC3NC3hSW4onFzmrcb7RwrMnd8eZqCzDGhR2dEAaT2jnGighw1XArE4XFB4ZLRXLeu1SQM6MAZm",
  "key8": "4tHg2e42okmed8C6g8ppNcYyGSfwt2yAoL7z7n13tE9UGWuuAzJg3P1kHpXm5goKoa1SxV345zoxJc2QSYeHHA81",
  "key9": "38ch3fUBeJLUiuEhd5Uuib2jLrm1QPnPafNNtyQG6mCRsVudsT9eFvrzMjvEE5WeMXb2KxWMNBc3ufRQAJTV2dxA",
  "key10": "2fLg53z6h3JWhSctCe23K97HcYHeV68qcQsmhmcPmXmV5J2acUGwYfjE9NBHeFYkHoYQiCSX1g4iNu8vLo4u8mcg",
  "key11": "ZCvXAduq4w3Ssxmv5pDMLGsQy6b4r5fAjtaeJAgAtvnLppoCcR9d3UnQYnbdRidVqeGCfvdSGDM2t1tKtgN2ano",
  "key12": "3otre7js4reH6FLzTwJuvEeckwmBm8g1rVRAGQv8K4W2qFsPzbwm1xELTDzbd4HXcTgLvAZhm2ShWkzytsD2wJUc",
  "key13": "bBsV8exYGKujAdEfKx4eziFnvi2wBr5z9Vgp2rbpGu2Ry9ojKUydqAzqzfAfhqyD8eMkManRdE2NYahqmW5maG3",
  "key14": "3rk15c8YdeGYErroz8SjoaHhpJa9pWtd2mCA3TosqE61wgF8RR6WdfDatm88UAnueaWhSoeHJj8Ty2NJSLKnuDY2",
  "key15": "4cx2kCiGFKe9JVHyk3jzQJh2EYGCiTauzCRC8WcgEGZiab2uUakHtQajeV5eqL6Uov4U3DwnfDwRTJb9PyyL1Gc7",
  "key16": "RMSxozrZJBbSxX9S85pC6cXb2WeLmYA6VCrj5RZ4S4gP8GTf8AjTVNnnQ21qWUpZASZeHggUU3Fv9h4Ny4SwgDH",
  "key17": "3vztd5DWMZB4BwLwEgt7DfucQekPPLSHsaw4xiVig5BKbg6Eqe4xRYJHt3jsxmSNyfPWU1kenBjNdtMqeKJrA8Qt",
  "key18": "5Erz6eizx8n6zncrcTRpNtxz6Z6v5cwDJM4rmjkfpn1uHwYaZqPXHXBDnr7vzoSAw3fAUyUGayhePSSXhd7dxp2x",
  "key19": "3VFZcMdcSsW9kP4CS1Q5LaZ4edwno8ZYSDEveLuZUAWRK7iD6xb1Qjgsmy1WJQbVWCEAtnHfHGYEv3DaXbrDx13n",
  "key20": "2c8QohrxB4kGxTFSJKSsmua5KbR2tYdFChEfqMXwmn9qQmd3hpwagv4HKQqAb7FiD3n3hdGH8pkNsVTcTWkVkSh9",
  "key21": "2tLZPm9qPQ5dVyxt54EkiF3fXVJZkiXx1vXJN6Z3SpNrW5k93KswJK34mZSWzBmZDzVUAJVANZnvHcZe6hZf1tWm",
  "key22": "3eycF2cci2gGBtRnD4iWq72fiigJJ2B7NdNhUTKBDfC6apv89sRvoLTfqF8PBUtVirUAn9h1Y5JnmMS3PjwMTCRs",
  "key23": "4RoXiM3t2kkdFyXUyK8EGXtNVtVGnGbjSRRfrL6Lu9i24pCaVhiod5SZoTuhxByNu7KrA79LaZzKHwQSH4scpnj7",
  "key24": "3NfpYE4Kg3cm19pxMBF5vbrE7PLfoa1KRcbNGX3KUxN3nZRx8HurR9F3TdtEprL5CkMYc2WCk94PC4NJxKTgN9yS"
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
