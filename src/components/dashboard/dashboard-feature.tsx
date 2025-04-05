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
    "ZiXBqLpwAmApt635g9G7f3xGtPM2fNb7SHMir5TKD7ZzUpeNKDyAaaEj3XB2xmDCHttD9kPcnSugUTtB2yR25rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UTFpo82BsWEx3gvpNXMmKFx2Ub5YYqMZqSNJbiHqy3xLwTqpL3Hz1HHkrtGLRMR1GRoqhjvFGDrseTVQzvnhkTk",
  "key1": "ZqWi7BfqdkVDU2NfrSqzjhKRrEGP8KpbMTU4veuyNSm3DcAJooZKCrieBW3q4YZJMDfieGrqwPiGSiie68XEPQb",
  "key2": "2XPagPWEfMD1vniRomDh1atyiY3BXBf1tYpFBvuJNHbp96gkqNenJN8vr7sp1KAFFQtTn6puG9GPxWDAu8cCU4at",
  "key3": "4cMtXi6xkrrCkT1RcTui13Nqsesj9mdjUHULFn9Mpkjw32Sj9TMSBtkdLYN7oQiaA8nKmMHjix3fFJNbNx4144Yw",
  "key4": "3KJuuTZoGaRWTBiUMD5brm9aFzxWJG4Ef8YjMSCE7QEYHBg7qwcvPA7kKir39TY1stc882Lo1Sg26pTSr9d1BNiH",
  "key5": "3E541qr3XBFyjWkF9oVGoo8PVHWZMhSowLuPpcyRGbhN3rwNj5xg3ngVTPHYgm49kUsLnK5Udg8xWVR6PYp6xupb",
  "key6": "3tbEMTAZCx7Hw5q86DqAQuwHqhCRRNWNsYV6nc5xeJfzFUorp3K27U7QXNmCgZASNBJbMKXYKm2bQQMQzbV2XLkH",
  "key7": "246Wj7rDVDcGCefNTonoj4eRD6tDK98cQq3PRtCSkT7sSbTutRVcZE7tAZMwvZmz3wPyf4rZvHr6XGqRs1WjZDBu",
  "key8": "UqnzaXhF9v8AuxgGGi1FHUQVEARrPLC83J2D3obiRRZod7wknsJBc16p9chdc2X6bJRK6Y4hx6AfTfhU8CsgvcS",
  "key9": "32pPaMQ9bDHdBnAdVEghZ6cWBVdvfx8HRLtFV6DcL6PV16R9ihqzrrHpWcgbW4Q8PL6rqJngenAo1tZDhBNZhRod",
  "key10": "4m2ixRrF8TxJ5dbrA9LrexBQD8hgrbn9wVz9wEA1Dt3kark6yyYQfghKTDvWjDJnhShNdcSfEz1Fah6oVreQjSi4",
  "key11": "4ZfgtiVbBBQPzZNEiBUDY17C1669KhmW6uxBbKnsqcxwSUV1qJ6T27vYuMF6TCyPuEjCaKLXQj4JiCBAAHdzJvk3",
  "key12": "62N1TFqgvKVcrHabLHEC5wXsfvSdqAy1mvftpUNHRenLHAkb3WhmVShtDoRFNAHUedZA41MAaKhmTMiMyAb8EjyH",
  "key13": "3UG6G2s4Zphg5TcaLHx6rTguMo86QTHEWVbiqYJAGzVFP3UCNQdp4itSpthdSQ4V9K1UQQDZ6PwStdUXCnwfr73Q",
  "key14": "22o5BSTf2529jDcWepn5XHA48P8Vp776wbQJpDxpXgbAh8XVCfL6cX4bfVSuyBjU4hG912q9dhYpAKGhbVRE9sKx",
  "key15": "54oYGCDGdX1376nKxg5HpTdBSwbs2HwGogPwiHGQ1ZAReLnRuiK7P4J3W3eDHjMdJPGPmZ5DTSmNFJZKQDG5jqJY",
  "key16": "5yUp4oGrFhhscDYMvuovHRSpwY2WmSpgu5bsLXqQcrKY4BJLREVY9cUU7raCH9rH14pXuuisKs41ZeAeYDTBYQQQ",
  "key17": "5gJZKqCsT8x2rnJPMgLJLvveWXwG7QaaLFnnfcbQAc6zPpvWvqJR3wGL86npRGSNeVkU3fvA2So9HJL7HpfxnKHD",
  "key18": "5boHntJMJffqx1Gmgh672AJLw8tkt2tZcF5jFM6LadiJMRg7oojvabFneHPLFHXUX6d9qo2EPCGaE6XFL4qkDqiY",
  "key19": "cH1oYvC6WSZQCACWxL2PDCy36LBqgLVRUPcTxh9jzqPzpTBLpRV91ea2M6aumpeCtarGw2YfkZ3Un9iPpSRx4Ha",
  "key20": "5rfNT2spwPd5qsZMksuoep5V8VcnKTbYx89juFBaEHxKVS9Q67b6AwpBV2UfFH4MkBPgwgL2Jm6dvw2F7XUK7S5j",
  "key21": "2saXLmPer2t4padrfVbcmwfcnfM875e1F4YUEA7Y19zQkoCybP39FWk51aoLBSCXAhqm413kWbamvhVA8bfTYgdH",
  "key22": "3DJ26JVR8JQgSU77Hw7dMYrVijFG2Qpu3rm4QQeNPT6B8hK7tMxw9EXDyNgeCtoG1tLtrf7yVF35Ciz6E3mReBcJ",
  "key23": "DWwPcPPe5DSQUCntnf8TXyW55Mju7ZXgzXZzHVmMpyw2MPC5UMbev8miRfKwzd31aLFaSvGT8PuZmFtkspFQfb6",
  "key24": "2Gmzy1rrn34ecVJx8QsgPTDkkQx9NRw6vBa1cEbJupGqmBKr2HQmoxU96agtRRekA524Y8ufCiVHcVrUuqN8RCz7",
  "key25": "2g3hEpHEY9b58A8RzZpHMQR5Su6bKrqH9Ce929HgtptAzhCkK3Nct3M9GfG2f6CuA1PJ4HTrVNEY1mM95nDkRo1e",
  "key26": "2qU6NVUtAgQBVcaEvkHV1mAjB7Gm4d6uc7kAAXxXDe94R1qhqXjQarH4DCBga31uCtUHoH24TZe55knVVTuWKisZ",
  "key27": "zXWucJkVhuuvpwzNvao9zL3CC6bpgNu5TFSxDm4QF3suRmFDNEutnUnhtGWqVhxHMhPGE1HPGnjmMAgHz9CrNGo"
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
