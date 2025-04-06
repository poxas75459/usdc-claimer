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
    "SyF6Euc7Y6pw5KBvNQtTYVvr8ND9DMz8fwT7QBxKmx7GErBNH349aVx1XwHq3TZwj7Ex2PWsjZ9WXKGWh1Agup5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Lbntwp1MhhzZYEr8GUS8P1L1ssH4ZHvfBSpbSZdH6tjGy7hQGt4kcL5uwBLnCvfyqkxeNQCnvPnC9bkiok1Zig",
  "key1": "5LWhTv76gx8RdfA586WaZkEGBhdmPacfAK8vHg7yBwSXFT7JAnjUCfUsHRZw8aXKWTxfgxjJe6zS78e2e7wft3pe",
  "key2": "5f7Gu9EXxnjUgRAsRvEHHaCS8fYHvtNuyei1TuNHaHLKFq1AiPXGefggGP4kD5KfT98aXDp1K7xRPAg1y8zRzf3k",
  "key3": "4JmCBPmBMFKj6fo3HkSGXHfugke8s44FgDKDV1aryUAqafoHnrrk9QmTFSL9MU2ymkAGQ4p1tfyMQw9RwjaBQT3C",
  "key4": "4sUbkn2KrP3oTDdF3uis7cAT2AjjuRmgEUsVM7nKJmHH5sUjuQfUKczikkojXxbGCiUTLx4ZZM2d6bYAU6HpeZeq",
  "key5": "4U2KtmMQCtcR3ngXnQP9cz4f5wiqAPG85P9a1eEUpUqA7YsjLeomwVb7buPov39ooqoYaix7x7c4wCo2tFE4PJRD",
  "key6": "4fBQndbxeJ1ed3HxJfhG63xb6XSXb5eyX3hZicyh5am9UeijNztjagTqiAeBXqQyHcAJvUYDnYgDCyecvtz4PBgv",
  "key7": "2ggjjBimSzi96dQ8cg5p9p8Gs69WoAjK3dq3dmV5ntGmpZ9TpNBXp8jUmPe7gFVALvPEzvexAV7DWDUaUs5oqHaP",
  "key8": "2tE7zmMdmhKJzU7ZaGgqE5fd6EU9cBghud4Vu95WeJHx9XLCvRUfYhLoJ49UQqDZCaL5scnjHoiA1wPcY9wabnZc",
  "key9": "5mqgNSn42XFLB8tYF7yA2cS8bVUPJJJmXp8bHfcPzefTMW4T6fWxRrQfSVPcTc4ahX6cJfHBBRU23szigugV1umu",
  "key10": "2QtzCXV6VzcMqfkc2Eqr8D37qNumJbEL2LhG1AcVaHn2SN6GG8Y6j133F6T4PUVExkYWBpo2zp9Sb37qmctw2pkr",
  "key11": "TbdTS1pupFLeaZSEEgpgGixTYF6FHFcz7qR1zpsU3jjb7iNdqywStWg9pUWTcToaXh3T9cAk6pH5L8p5M8atLyT",
  "key12": "3YfTev2vszV8gE7YDgb1i32JaLDEYbbCY23THD22apYzoN6bUNRGiVLfvznJT7FvDejw3n6zKFngLnwRnyK1xLjj",
  "key13": "fxgMt5Ax1D8p5EZqELK6xdc3SCxvHhtFUDE5iU3H8hJpreF8we6uxDjJtrDgrNTKMjxB29WynBQBPFFHnwZ3CV3",
  "key14": "55vYzrKWgq1oWraAUc9nMeKyTEBt2Tsx2LqaR4DDZ6iqHR5sPppTsMt6qPiLZnP7bwybisvcyiUwt7vAntfuyMnH",
  "key15": "zHahPcN7VncXw4aEgWxYj1YT4bQJi9GG9UNMbLtFyPAVXNSAPuScQqekDu39v5QXWYsoq7PW7qSHSX8xHNCWjjp",
  "key16": "4SwcUR6pXYMUNHd8YAuvk8ZAmVvgNhwo6VFZCchGS8JqVr1yjsmbfr87TwGiBeK9XsXKDKzHcsiiADHCHJhCPSu3",
  "key17": "4J3pczWnLAL4wgZBFKxxUWkgsAdmmst4ynkckDHJaiFKV2QhQfNFLoeNVKYAPZbufiMH43aVD54WJRP83wAfvCZa",
  "key18": "2jUuWkoxfSNCLLrtGcvLn28SKKPLbPH6WFCxkzQrkGKuQaScMt6sTnmKZ78N8YMv7RRpm535WnegW1M8Pum9i2Wc",
  "key19": "5VDs4yTTuBEAZ5RDc15pzahsrKonuttMabBjccXiVMCyHqTaNz8eeWKVR8B9vCxLreW76zA9ihFiqCKBRHXzSGPN",
  "key20": "LRhdURar56RFWFTubz9GQofhkHwTv3oY1mRhV4nZ3ToKPJBJ5Nc4Z9ArTa34jbgw3Py8Rdmn6HttkJQKa3Z5BXz",
  "key21": "3TJdpWtqaTJUreM9DcSvpwQ7S2rzyvEq5neXUS1Hbi3dpNhSZkQASAaQAcjp8KvT71vaJb9gyNhZAvGysXC7w3vV",
  "key22": "5J5UggTUoGAa6HjaCFMy4ZF9RT4rFsChcywjb61TrnxNzwn8dkXttPeY1tbHvfSPooZABUEgKjX5ZbH2pDncPmRn",
  "key23": "4J2JHsaaWVdagoSTf7NPBEZLw2hLUCqDQ141ZsX6EEmDynUngytNYPVska7RY5Dn7iwnK47fpvbdgmWKuvaMou1M",
  "key24": "3sR7195dF3Cd59Xki5vfdTU3yuPRHTFVPSa7E9xwe2QpX8vUrm9jmE6awfcUZcqPeLtVeBCKLkTMDy8VPZySYVDs",
  "key25": "65pRrG9gd11i1o3SQHkEGeBmsWu7MR8DuSU4TDU78SnGHPKsSFnMBL2sxJyfAhXvqy4qWAmBpQaDTfVCgZD3ocnS",
  "key26": "voTvKKoHTCAvrSdVDGZFy4msuaxv9sgA2qSSVpvttAFh4ZJKmjEytTUrXpsWCRKoTPdcUKCZBw2XtQXwGGc2LV3",
  "key27": "qPBSvmpQTy8Bwqkh6vd896EsTzZLxmZkQkhN8kCDWsUmLofk63SN3kV9f5sqxjebNc3jLJx7eQdsiMEqqhwJrfV",
  "key28": "Mi1eMJSzbtc2wry4sX2fJMEmJNXZHCWEe3RLjQqFVLZtTm2dSsTM1Nt9AAWjBZay2kXwMiEugi6o3Ajzgi5UnmQ"
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
