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
    "5S7yXLJMBQeSpS3rUCFGTmAUqWzfYNvUXbiSRmwPEwym3VrNn5hdQQqLyBQ4n8JnYqxA73iZHCpm57ec3NjfoQur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W5Rk3St87bvSpwooNhXU1PaL5pDEJfivT7Qh8d8czgfA59fLvBBH11YNk43nvDevbETdTucqbW9keX75C37DNoW",
  "key1": "332UVBYD9ZQMitEqN4vhhUAGAD4YmrHgFscLKvHW14gkjut3xoWUfWTBqtVSp1S9UdfmpG1nQJgGZYa5Ki4wwGS9",
  "key2": "5KwvV64FTFnEcfqKvZDJmtaQstkNnqxdpG4TDvNd4a8iyMTbJDkBELftGrwAcPWJx7koaGd31PczTNTykg6tABH5",
  "key3": "4ngGpBaYFSvw5tuL3wqeb9tGi5dq8SwUNBeCwNxFvyAuavpv8krfXvCvvywHFLQEqRXQGfhw3T1nNiF82pRMCGWC",
  "key4": "wCjoKWEWzjeX23n3PT3Fk8W5WEMF1FMHUZ4WPKGJNnquP6Qi9542fdLExfKVs8JCjhSpTkaTaN2TnjeZiUDq8fr",
  "key5": "3AkMHPARCdzN835B5uvKeXxfVGJ3pKnFjgYx2Q5Uaq4Up5BHf6t5NGnspXQB2xsKX39Lwerc3hasv66tJuJNZ5S6",
  "key6": "5uJNYdeGscx2s3eox9xAMVToaW3qq55bWgoxbUwwPwnBHLo8PEzy7AJpFCB9ZwnGZ5KdCcFqWmKLuK7JCcLkMzYH",
  "key7": "5iEZs425U8aVa4jr5K2vbf9SBkEexS858q7EALd3R2ALWtWrQmrjuXiLNREmyVGzNoh1KHdDuTyBrAMXGbFqZjtb",
  "key8": "38xFGbWuyJXLw665Em6PQA7RyphYqbfkXPRjeMNX4FavNPMdtziC5WRkAGe4TZQhGUJBBoAq169JFvU84A59TJRw",
  "key9": "439bp5WXRjdE6o851DULcbLZU6PZeAUQmaA1vAZLLpK46B2dikiqa1DJYJ3q1WTjdcKQggET5VjKhaNXh3HGSndW",
  "key10": "CbnNH9myhJNxxuFTFTimwcbjygm7365n2YScErL7t7UY3n2rTqTyF53zcQRQDUj8iMBcb5HRMU5v9ougM2xiepL",
  "key11": "3DTqw9UEiBD3jjctomWUA9ba2k6MkfGjwjxMYZMbM5GMh91jm7cop9nypcvJ62JuixPu7jdJCUZmtBgQFX2iLqFg",
  "key12": "5chjZZjdSsBUV5ye4Y7V3LRvdatFqVrtfvSheGYouk8K8zzZgLiVaBqU4BLgPtQqyhZ5dKXjxsMUhxwoEK185vo9",
  "key13": "2W6FnEKJgiXi2Zbr3zr3DFn8E1gP2YqvjQ4yUmhesjYLyvREM4aByVe27FamfhCEhk6z87LpSP7EuU4pTXEmVZdB",
  "key14": "ANnXRFXSe6xJpKF2HFXPjNfYRAWFHMMARcsgrBqTKXKxWA689NuoJdanXphEKebTQQHp9tkGaoXdMqjpygAAsFQ",
  "key15": "4LG1qREKUgQSD14TgUkWUDYxgJzL5toqss1xDwjtRK9gqnPDdZjpFPWo4rfHUjTsFe3YRSaJ7uroRhdojPHxShYQ",
  "key16": "4KXJUyD38hyjRYqyUCsHyhzfNeDCVF7LaeLoJm7deQePNtXoLs2KyM74ENcG7VxNLG5sk5U2k4pvJrC1DueFJbAP",
  "key17": "38Yax43VhhqZsucmSQw5QJzdAeXBALwtEw2iv1ivJ3ryncSPtjByckxFA1aoTTaDN9zfe4zh9AdNSXXd3CWfvw2x",
  "key18": "4jPXNw8pBpKueZJp7EykFgwnY7qP5yCCFWqCnKUecootqNA1bKBkfdc2ByNcCLybNKnEqL3NbcyYJQN2S19dJpSb",
  "key19": "2TDQy7ajRfPh4LFy2AA9pHPZucjSpMyiZqUj5FWpJf45eMm9srvrACUjL41vmVe7ExRZF8iqb4u8JDPjPRbYFhVF",
  "key20": "434AYfPmaPZwDCdoAVvWJGT55ZfTtiHDCaznqkh1TSBkbhgwHhm3MXwLWBfgS6BpcQqbaAWayjgMexz3zT1Wrxc",
  "key21": "9SaXiJ7mPf4jf7Kk9ZdFRMjwzb1U87Qiv9j9jvboLh4ECZEUiCMj5KyDqdUbVb89j6Jtp7VkNRqBD1bVN8B8PEc",
  "key22": "4WFvcDt6hHoZ1EmsKnTyTsuU9piVtAK1kSzV1kdrb1KPQJJbDUhyG6R3dJP1vecwRu5DEpMFCVzd6ZRtig8wsySN",
  "key23": "33pSZkxkuwccaAQfd1Eeq3mUS35D6YdbcP5XfWjhnZK4gkwoxznXVLC3WYmJt5Tnx5vR7MfDcLrHh3BGY7WnTsgP",
  "key24": "2XVNJW9eDywMLbFeUq9QRa7BWfHkiXtUF8YnwtByTMd1utXrEG6yanSKvM61jda4t6i7wRwJyztCXiMgGn9etAaP",
  "key25": "4vw87Xrjecs7pfVQ9DacSpLzKhrqwyvjyTYwiJ1sqyqanzxmS3TdM7g93sBdepfoUMrVn7PM1g1jpG6ZR6hvyKdk",
  "key26": "3hrAEUgAx6Zm8xv9hkv7Nj5ZsSZT8vL5Ag2it9Z8iKWGuoq3T2mCXsCgJkrP7KCniQLxn6mQzNyosULK5dCgDcpj",
  "key27": "x3m4Z4S3BU6ksGwRrMpihCrAyo2d6jHhGQrqLDeBfiShHQMMVgLA6akipg5MstPAjSCGqRGuLD3tFGhxR9Sc23X",
  "key28": "2XMkFWXTQcWNdH5xnJo8kdqsQeGAtk89va8QnSWEDakPBhUyA1LZhebRRBGpNRWetesPgFAYVzc1oKJcugAZZ7qx",
  "key29": "bGPdNX3oTwDSpuEt1wcuB8QV9RXpehnCKUWk1Xu9W5BKCMY3WBsM7kVH52PJ1s7idxCvbx7a9EeGC7eeXG3GwcC"
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
