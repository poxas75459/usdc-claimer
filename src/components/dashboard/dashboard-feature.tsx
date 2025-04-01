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
    "XqMDBcNWveoNipbxuci52RE16N3AAQTE21WorRdkXX4bymr2adsgzNiCHFrGF7vENFYdiLg84R3B1pDPHtgyuSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ArHsVEqcbFnYgik5zj7ffp4vU2YH8qrWac88Mbyx8Y1rnQZ5qVv5FK7Uba7ugnL5hwcRhnhVfYkrDgQMU5uxKvg",
  "key1": "3oDt3zmCWNYq6zTD8fHtqdZJMa6jECxMhqtDLErkpPcpaP85huMBgafpW1bY2Cy1QQrB7kKd5dmgcoYU7s4wx7RM",
  "key2": "5UWuLnaCtyzSkhrMtnLwyYP41mJ8YkJPqwEiizViMXuc1Vc8E1K3FnhYvqRSTFq3hCHa5eUD2opaCVEPEJP1NV86",
  "key3": "63BUDeTsC1gLQ65m93PQsaashNfFFWNBo4bDJ6HMHDsPU3L4dpJtFr3bV2GGFRS2FcKsnGA1gZARjRQfVheb81b9",
  "key4": "rUCs6bMExT9RCbG9vzqkzCK8GZv6NeRmzufcrd45xGGLX7oxZVB4GmWbor2rDGDoTpvQyvNuwZFL2CaUy7QwvMs",
  "key5": "5VaM3aQLWjxSaQqWKATTvisRqXZHLpSas559BUeaKvKc2cnqwDcBnrw2TmcG7STwosEiybYqtkZMVpgfkKuQQqtY",
  "key6": "4APi4yDUZF4XspTYoK1GHrk4wczuvYFvASJPytzeNVYA7N94NkuxpWZwJVxDbZQTTxMRDnvQQVXiiRSmGHHeeKRV",
  "key7": "mTprsRnJ8xovjRJbxZjUkH5pra28UgmJsLo2poXPrtWJ2HkbWCheVAbyztrpJvDEkozNG453esHQDatFZegXmWq",
  "key8": "57gpcQPMSoaJATk6KjpzdzRhhAzmz4hXrmnZuKsnBLXxfoWaJweaFydy8a33Zr4ZjCtYuub3YeMz2HcMD3TuWZDd",
  "key9": "fbeyjyxEKxeApvhpfjzmFPcocnyQownR9Jzj2r8CriKPHzL4g2FYhWBhDNrfjXZLRdVTMpk7QsdbXyGpPQsr1xi",
  "key10": "2V2Ef9htCqA2nzhcKUqJzEQt4D1fPfspuYMdAtz3f5UTvYjGqs8pr3DW2tqsfA5nQPCQZzEHX4DUUw9mWkMvE5wf",
  "key11": "2k7iSdj6cz4idBCarGkqgr5bRWUEozhbMEER8LwxR2UnEDz9WCMooojknLzsAVqMij8bdt1mktzqJ3V8QYRr7JXd",
  "key12": "64ijUY65LLh1gd6p9E6AHDS89X7uUYJPuHEkZG1MkdFS4GvfGKKb3vu7UDWawdJ6PtHD12bc9dZhEirSqR3rejCL",
  "key13": "4QEG7eXsisb11q2goLnQa9RnFza7xvug1WNrcEaFGbcXRGGVPuAY1ph6FR81WU888XzfGBAvrYribH1QFcvXcmtW",
  "key14": "aTtxzPWAL56Ui5z9PLXt25jRDCGHFczJnGQVbhENtCF3K9qgYDj4QpHVbuHvA8YVyfsMuzCf9qbmPMzspWRsYBB",
  "key15": "5GdE6BmpDziVE9URtbPmmTbovBxacABYh2JdamyHoECwfC42vdf1jpm94ScdzhDJnFAMEvdeKYX5wZAgtqrkwhHW",
  "key16": "SkvvTbmssTiCV5YAqhG7sdVTvVHU5RnGiK1vHEV3TVDX8N3Yxjdn98AchVttfS99pzWZfkjfdSFLdvWMN2RxwGL",
  "key17": "4XV5JqsPeqavEnzVHZ3DLb25szWVtoGHRi2bzwDKy887RmCgLhBBPj7V7sFt8j23zare2wRjwDtdnzKTm6qqZGoy",
  "key18": "3P4pHxMYMEoz26kUXw8LwTi2uQUF33TdZzL2Eq8MpXHkBJ2EZBUNsBViekZsET2G6y8yvcurHNYnWcWxLdhED8mf",
  "key19": "47sBtL6nYMxWJ9kpaAfzExoE6seqvKr478UFpCXdN5Ky8d4jwC2DwV5jzUE5ryDyHZUrLexVi9d76ChxCnkD4xH2",
  "key20": "37aZcmERiihu1mH4Xg7zMGTKYSD6EdH1bmFHLgUCopZuv4eHroGXJ4QubWJqEU6kWBTPgezReW56orDWXvVW6Qe8",
  "key21": "MSmu8apzbJsQ7MaxtoVojtRwGzMznZSXNujaS8XcAifMqgFy2xvhU2XK8Y5hBvSSWRAq7NaQfZEFH4SBSQzAEMe",
  "key22": "2M1EaVYdyUuKArDJg6AJENJRqvfTJLANNV9yNBk1CtZkLASNU9HfFSR6MnP5HASgPdDjt7T9yRapCKQ2BKiw8cRt",
  "key23": "uPD9eCJmshnaAK7536LHNxvBt3FjW8SNHJc8692tpMopUY5oYhPAJ6b3GDYtvYBnzAjXUgHix4pp8XdYxkfU4Dj",
  "key24": "USWgYd7txK5x2DpuLdEqAGbR6pUrG3gzptVJ4kavhwKxPvbUWaKcrwjYxSG2dFghYwZ82QvUyv8XmwCEj877Jay",
  "key25": "3WWzMZ5gxhRrgyr2eedmJTEmj8ET83N2tb6R6NSB6hzQ8zjubusNT2VXnvEt2cLj9VrpZTNPVc49eHz3RW5HnphV",
  "key26": "5WhdfxmrThZ7TpUjSLBfcpHgaAoMM3YRv7bhwr695eBy2bhDCLthBsHG9xHpVQ2r9wip8GuaKQ2X3ZQJzyNX61Zq",
  "key27": "2kwqh31uMmsrZedq9nr2C9RXaipi2adDufnpKP3pJgAdf9SpYenwwj1Wp5DzbvHQHjq7tzJ6NwkDegBqFmCXjfQV",
  "key28": "gFANR2DUbFqHXv94JQFYjcSvs47RhAbRgWXNp7ivUNWFisaAtyyRZTa8e8qY1BSj8wB6dDgBtNF97RygDHYfmJH",
  "key29": "u6if4N6cyEc6JUJJueSuxjXPE4ts9SqdYpbEBE4vb4Mu6gcs1DoiHoHMHc3FzGYhyYZmbyxSEWfM36C1yaidYAS",
  "key30": "3sztHohng8VNDZJDcFFRn7vS5QR5vLisbQaPg3MFwFg2U8gnnT9XoAXdpN9oHm3NokXuuQcD29r8tNakovJXsk1n",
  "key31": "457bXdmtzJZmzQWqkEj55KcdxgfwjDa9oHdDYL8FAAXMuCHvLXBh5hwyr3B1tBfiWidEjTHV7m2pLSsdwA7jpP96"
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
