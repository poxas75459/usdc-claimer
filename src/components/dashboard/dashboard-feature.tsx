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
    "4q27JpraJGAPWziAqs8u6oY34gn9iN1zt8ySq88MF9vPHoYyhK1ngmjsbgDvV7MRaStN62WTKijZ93eT4R3qbtzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k74eNCjfjEt1LiyTjSLz29Jsq7rxfJUs2mNM1bh4oKvAtmGfQMPGax6BHi6v6RPSwEmusX6umYti5BPt39Z7jA6",
  "key1": "5Fp4JaBsWvgTWccMQvTvDdbYdcXxYr52eaSE9BAr8UDRkGVRf8ztxCaq8jNYkYAQZuvJPzUTH9ncjavRxzYi6wJQ",
  "key2": "37TccB12Z2eWAPKubmgWAA64HSo5pod6Eg57XPyGVtdFGeWzgZE2n2ww65FerR6DMmmDLzEK4e9vwSof9n8pGcLt",
  "key3": "4UcfhjViVnheMYrmrukqLN7Ze7ft78xbupPEoknByHJtVPNdqkXUBZxND9iaZe1dbHxCegeU8NSAyj7dc9zjzvXa",
  "key4": "2QMQdAr1TV1soEnouJKcw3T8sLE4wH1oCkYYJmHFQGPweFnb2Ne3spGf8BHQbW8QFQ3WtgCci1aNKzsFrm7n9xxd",
  "key5": "5fF8VXhCVzQcpqpxCJxDDSZhZbnr6A5woLU5zmEqzwZE9iZ81qMdmbuVD45sSCwt9v6ePaY1DXH1svFLqFdFRkzy",
  "key6": "4bQeu4aXkb8qvLEWg7pByJsbu3sjGxHsr6iWhmBov5bDvFYLdDTka6kvdAskdxCHNWczVB9KLyHzJqGWTNM28UkG",
  "key7": "Q1rWDFEj9tjCY2hVLzrtDPV1oy9dLE6m3kzNPaL2Bkstm8dJbs6bonesXu2Cp5uLkUsnPX1Gcui29g86fnGPmmw",
  "key8": "5N7fDo4k1UZZSDkj31Ftt9tFprG2oTA4u8cbiMUMhfNum7WpTxurskUmu6FFh2FJHkKoanTf3qWiG5BCNPAfMKqi",
  "key9": "2z24XSGCxnyRJAGo8wvbwVfdXikVfMe5nKG7Ts9XizKVEfAPXHoTsqo9hn1hEbr2c4wke65TEekT474vzuNayLTz",
  "key10": "2oQhoptdGHKy6VqWG62Yj5wXhP8QLxsL5ucQigrTdynd4JD3iEgE6ybZwDWFqxuok2v4EmCRS8ahq5yjBoieAHvt",
  "key11": "4edcWoQHCuhoFw4WYPW6ELQjQ37cqdKSMmBYh7S5a9tid1bVvxeBAqtoS5eSXPeCy8g1tUx7AgHcEuaafDjaWfKP",
  "key12": "UVxdMCtd4EgBXUFD2fxso58j5b3755VQNh4zKcw9jhnouguwgEkxPhUKrtpwA41Foc6uR9YQ9XPjAZNY1L4KeN2",
  "key13": "4WDXQHaeMr3wQswtgoq16ZS4CHqoKHHMoWheYQMZzgaBkUFgwLKxTXyZL9j87KySA29nL9WvNddz5edUSATqetM9",
  "key14": "324bVmu3SptLEHGjHsDJyfY4nTxuiJravk9J5jMJMfK4gZDM9Jdher2av1pD9FQDQEkM6kwTYjHeD94LJdi2g3YL",
  "key15": "7ZsgCiPvPUKV9aAK19sxruE8jMAJ1dNbVUrC1umvCiDXzJhWNCSzfAdJMA9mtScCYb7kxtiBWXe1htZwdeixbFM",
  "key16": "xxhK2vs6t2v6ofiSvUJcMeBahWkerZ1gZiNmVDHa5Bx2Pb49GewLFe3cSaMgepub1ZtGNDAkRZe6zYQymzVTZPh",
  "key17": "2V34mtAGtqwpJcjtFPqzdS46joVDepuviTznKw6cpGVGqN3yMdWwdqe4SMsVfxZwt7xSou6uzhfer4YbPj77gVv2",
  "key18": "4CxCTSrkpKnLL9E92Eto4eHGpBh97HWCLyQRF1zSBs8jxoQG1ne73WgDwzQJRXtQiqFKyVK3MtUCmEUFd2AKyRyL",
  "key19": "7mgT1F7NSqKpxzxjPugtSM1MHGvkyfcPDTVLMr9BHncfRQWtSgRHUuybrtwdeTVTAzAa1TNrEFMLR8W6ftJSUKB",
  "key20": "xGCkAkXTXU4U2A8kPkLJPyaXSqmSmZtgTY4h9s1ZVr6uBJV9XQQPf2hPSQLnqUWoMCvdDgFFeb6xKhfvrgA5nbM",
  "key21": "3cLAyVWxYYs2Nqv8nomQtrVV12ZUQRxcCBDih9Fe8kswiSkHcfG3tMmJjHCpzjVNi5sTskrWTiUhh68vPCDtKtv6",
  "key22": "44pp2igWUbockVheWitWxLu2vUfS3s1hgSGU2oGhPY3Uo3CGYqQFHRprg5a9ApHZKxJzBGef8yDbAgXWtTXLxnpB",
  "key23": "2hpZjy6mMVVay9RRyjEbqLjJMGat2RW4jdSiWKSBWMdqiwRDDvkYNZwbSsi69gMpbNKytey3bqA6DYFK7Xrjaw3Y",
  "key24": "4bU5UjepeEtVqP5hjW4GD1MsdnxvY56fB3Yp353CDNFjBwGafDmq4JtMnMzAX7rMchfbxM3JWBpPwR83AEGVmpXY",
  "key25": "3xNHFuZMnuieMtjFLgJZV786gVQyQgrt9MMNpp8mufwiuR14oM9gJPwsjbudhEe3qaiQ9oSXbs9kTYep22Fdu7bx",
  "key26": "2aA7JJMtVAfyQKdrZ6SjYs6GoaPFRZVpXP4PwQv8isvnXWEwekLLJNDxEN2b2UMVHoMQ1JCRUzGjMpKWMveNaWXr",
  "key27": "5Ajxs5L6GjRt4NF8CPoouHN9ep2ozt4SRz2k5TFJhgk39Ls6ndD9xAF9ZFSHAdqnmcsZAsQhCdhirteUyvmjhy6n"
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
