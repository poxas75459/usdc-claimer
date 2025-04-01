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
    "KNMgndaCtvdgcUGQpHprRnm4MpXN4DBBR3e7BAjUj8WDwUYtrjnepbx3Hf8AobAJ8DkojjnqiK2SbCQNMYAoDyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vSkaNnDHfjskPbZneiJWhCastBQeDogo8PmMVMNam2LUhnkHS2k4fnAq2rfCZiXr9naZ1vHBjocLQYJZnKT118P",
  "key1": "4VaQXziaH2ydkXbHxdQABYSmTx37GfKE1jBiq9Adw1bfBAjztsNGDWBYSoWvZqAjEGpnc2cbxD1dBxEnHEkkLyrz",
  "key2": "2WYiGdmsKseBZPuK2HPfAgCCshosCJ2c8yCoZ4TKifX1XJSmzwE2asnYepsEgfLJcVwBWJAUy2TTiFgXb6jUNVCN",
  "key3": "2iLurFjigyno55ebniSufXv3T4AfTHYFknVKnUhoi1uMfbMMzUfyHHrYaEZuBW4XJC29pVWR8AbdrJSN5931vEME",
  "key4": "49n2SRu5yqM6XtH7rktjVF8LbZgUH4L3dzLrparcUY73JnJva424xeNT8nTktjigQqcWaLMdY4U8XgxrmT1K8WfZ",
  "key5": "5jYzKASHCmRYEFxK1C49MSYBPfW1684objmfDgTFQMus8rdzwjFckawQLzJsVzJPY4XnobuGNMzgzG53st597TAP",
  "key6": "4AhrDrGNrkfvXzfFnTuYkvC3pfJCXocPm77dnCnwqK1VqNLD3JNsueEtDMALxdyrcPncqqMqFHcddaorppAy6jez",
  "key7": "2ANKSZSF6MYUUPGBWnS4V8a1iYbn53LgFdEzfb7mmuk1QYmn6afJSDG2EASEb5GzhqT4QN9rbha6AuqU7x6LCsPb",
  "key8": "5uSSHeHE2gd8DNgkWoEgWbKzbpgGkEtkXRgnddcpE87ZSVGUAZdMeTsVt972hEwWZ5eTkT4rPVLnWziCrv8tRDzX",
  "key9": "5snjYXc59sR1LSxjcoy7PXcGMjNLEBdLftG4hVasrvtwKf3boMG9WbnePQSt9TZo6xQeDhn82fRyLk5iMoUBzhH4",
  "key10": "5ZeKQPV3NSSDsYmnyYtXdJrxCvKq5NGeRN7GDGbC481P2gg2e3iHk2inDL9Q7JhQJ3DcyTnMZ6ECVbSY6iqbZ3p5",
  "key11": "MRL7fqSqM6eEihBFZi997rN7ooBvNySNDxZnWGSZ594YnYCgjsQAPYK4MCRFUK9wKYA38pDXYbG5QFgxhhGPwpU",
  "key12": "5YUwaw5KZbdECeNaZ1GxV12o5Kcmk2cP74P9W7kWsn4TzDFTsoLVEp8Z133RctEJ83Mf2EJA3J5EaHWDNk1vZhgv",
  "key13": "m7hVzGwSX8MZmxtc9ErTBsT1Pwxro7jF26kBvB55nQuep9FmtL4XTzR3nEARhbcbpzRQykYMeauDQLu5dsFfyLN",
  "key14": "2bNpZSF2wm3KqTYDckJ7oQYWqotyRrMfGLHfGQeHCKQAyCvgeC7bXQiogR1N1yvKnXPENrQqFPyHPAXBmKzsCcHm",
  "key15": "5k4GNau66hrrwKwkJJBTUsdb1BzMpN1yWicGDKNHsYkCraMQXwVz7LzN7ei5hC998kCgMfTYJiXooYLLgZajLvWp",
  "key16": "5ANuw5arpcX33v25eeC4oCdrqgQRKxyMGpqLo83bFQSo8dNoA81PKUQBupcV4tfTxoeCyGYBDkXPncHCEXVwav4",
  "key17": "2i5toWdFeBi5hKEBtkYdoZbcU5t7yxNHn3vQR9LZgAzFGhjKkKMAMcddT7HmHtWkHmfHHBodr7y4sqKEsTZFBvxp",
  "key18": "5KysSoeV7JEVK8mFjDGuAz3tTy7WCcRubrfUfUXeFZvH3g6SQnEFC96Hn9PXo8rmN9guwPbgyzLUNLbvS9Wp9yga",
  "key19": "5YfnC4yYdpVh3uEU743aCiZKJWjnJqJUXCAZKvuCPkmP3CRYFZy4RiSCQReMdJv17GYQWbVGV7iLQjgwnMtNpkE1",
  "key20": "554QAEDfghH4amZYgVJ9w7yMMyZEu42c5uR426GH3LLQJz8bwM7hxtRLHLBMWo8kGLRLgFReci2xsVdCTwVcEebs",
  "key21": "5Kzg22YRdYA37YFvG2tF8hrZAVosRcbX6K476iQKjSSDbNyH3geHvvpY3612KG5434tE7fQEv2yYc4gzxAniSyMG",
  "key22": "23ad48KBi5UZwyRYYtduXmfXKLhQDLdWAqixb4m9skN4H2nyNgoxZCBbFMQ6jrsFNocJFoGor8uuqVihDANgUr5A",
  "key23": "5B2G1vzHUBoN3A6YU16yPCo7WdBRya8Mq5s5GUs754FDqiXjToUq2cWbbBadAjCSKFFJAFH2fLUpQhsev9UZhXjr",
  "key24": "28gPci1y9X4ScY5ZndGqSsgm6YMrjEYCnFjLG6E7F8asdmENs78GjeT92ALEKMf6BTJ195StXtMQ2qwXvMWA8Kjw",
  "key25": "2NKQ3AHJmGn8upG16HtJig68Ep95K1KzCzXdgSQbG7a4ebLYhUaf8bKNeVxTVwVjMHe3oHXG7RfDGjN7Y1akuUnv",
  "key26": "3Zt1xSY9H6Tv1JGZDtmoZeRgLcd8CdfzUdP3xq1YqLrcJ5imF7uEsupL4rfCmUkBKBZFrCNjqF5kTcbJDPeZTxxU",
  "key27": "4e4ztW53h5JJYBxaszPBhDiHN3FaPPz2g9KpgoEk8W4iSHYV1YJB4UCzxWrBRPfJz4FbKEJVeAymXq3UJ7qWk433",
  "key28": "4gq5UZtaNxfShqxG6CS1x6ZXGZvLDfR5fgjsJLXadZYvQYs9zQF1JZMjqYXaJukKuWQqqwCxPgi5mpYJwioYoGby",
  "key29": "5QLVqUAEHzUvqRMR4rmcaJ1MsgekzE7Qfr5rNEx2jdsK7rFwpf67xf6Q3n8Biea6ZDy1Sg7ZJ9E9vECpmYeye6bL",
  "key30": "3NktNK2U3a65GMVJEHXsUKuUHxkPFyY9DzRRoYKntZGLVUXwZfwz3TGk2ityzoZ1YNJZXjATHpf2psCFE8ScGBVX",
  "key31": "3JJbDUAs6cQcKotNosf1dqKbcDF7PxFb4T7Lb4QFPkXnYCwBG69rR5Qy6SwQS8eXZvqrz31yx3FDjsRUWMzfz9o3"
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
