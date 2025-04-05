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
    "3ZU2spzuJQcrPB4ztouQHRo4za612DqQox4PaNgkTzxFVA9XD68ZXgKN8xngaj537Bfp6gLE9cv1LFMsg1boesgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mtVk1Xqiv7KGpri3DgbLhhVt4UENojgw2fwUwEWYEMiw4S4uB1DfMcYoK8oAPtxHbqpZ4XbXwS6vNcXyE2U2o89",
  "key1": "21feAmbW5HMTYfxifKjUMoXykSTmjx1V33hKjFqeaSqUupXnndLxr3yMRtSJsnnKXLBDPW35kphKM6S7tZQEZXRx",
  "key2": "4iLtE2pUXGiWmXPAHbSmPqFBgBjvikuTWKMo2bfQ49R3SvmZSY1ztGaWHjA2ijfzqQgRwqXMpozbso1v5A9iyd9Q",
  "key3": "2BqoxtaaZavatmVk9ywpHXheCbdi2LynzSwKphdRcGU1zJqYQfSxL2MrtXFv5Vy7RVvyufnYsG8hdctygbLJKUkz",
  "key4": "4sT38p7esV8u7LWb1gPZ9jdbxBvmevgyRREfNUwBuD76CF2vDhD2YhUrJ3UogBS2M7CZVjhKNgHDY6mR1VCRfFDB",
  "key5": "5Ck6MJdBExwEABxhyHqB5gbgF8hUmSMT6n2cEnbRF8CZ5nQtQASvbzet6pAJaUmeZ7rUBbJ3YbuBXSBW4HLfYL61",
  "key6": "372Y8ubLPzBaapmDpY76r2hcQ4yiqpjZqwDud1uG3cr6Mx25c6BZ8agGSETvjBaL15rrTnwcLisjMptDpJiW2BpK",
  "key7": "gdttXyw8pWNLz7A2DaEBR8VuCF8wWQRwhdR76WbT3hJjZ5usnRuyeffh78SzFyXJ7Chi9DfJZ5h5J9pZzsMG29w",
  "key8": "4GAP3tqxxwoAurHJqimu6BViUBV8HPx8uBK3vaMuvTRb2BkS71Y6Tztpsp1zMnEiq5MKEgrNL2SYrdS3qbcJSJSK",
  "key9": "2wMqEcB9uet6trdrKTcCfduAqjcqPF7aQzajrGatiGAUSdkH7tJ4iT1XLVw19eR5V5ggqRqcGpU6AQJzR65zS4BU",
  "key10": "4GwdJM71A1rfavp9DsRcPhPEmGhpJfLdxgYD1FWTNegyYzELZNs9BDDoZ8bUofZJp9NyY3Yxfs7uf7eyAY1NBh21",
  "key11": "2G7mSCTNToeVT6WCsLau3rTuc8yq6tuqunvzCT4kGintx1VESKaZ69CYqsd1ajVbQk6CkmQMuxVngx7pa1CLk6UT",
  "key12": "AEStoDXE7kjM8pACD9gUwnVcpKQv4ChBeM1m6d7v4Mg6zcFhaPPasRAtDoDio129XQruAR8nZPaQtroKqTDhrHH",
  "key13": "5qSx97bSDKZQee9cbRCErgnrRm4B9tdcL7MBTLB2SCsF1NWVv6isStijwGJT4gno6iP3BJKqkgB9ce6tis5P3Kq",
  "key14": "3LmJ72nPugYphQik1fUM6Yfv71oEkfpqQ1iZ69S8kBnEyEi29QYy2sEBJyWb5ZCpk8nCFpu2JD2ouCMP9G8fuiBU",
  "key15": "4yjPaMKCdY22iSRC284FCY2zVHtZHLQNr4LV2DpSjvtxkMwe4qWdv34Gf7maQtqUcAC2YcbTRvDJkwkSw9eaFips",
  "key16": "4z1biiMFw2bZkpiVrizVLqWotCPX9bq5FtScjvsznP8nEqk4XQQzZZNEWXv3zTZKhU3VqPxDMdkp8acSzxXqnHPb",
  "key17": "yCtdudB3E4oBNguawQyxrUAD8v5xRi5fCn2CABbQfbJKnH8GYZ54U5YMzt2XFg5ZCVDmCREso32ZqUTQ2nk684E",
  "key18": "5CiCVQyt8NHBrPxbeXWKnYdxDNdyre4XwLkT8kzZpoG13jpiPK3pXLr8QuCmkgDsa3J5iLivgKMshzwRrTPa9Cya",
  "key19": "5B2PTPC2Sc32zHBm2V8Kzw3v6nHvZh8c32mFexTaHBdZMq96BwKXccMYi7ZU7kuakut1rarTh5usG9onFFtueEGq",
  "key20": "5qs39NtVSHVG3nBcPx4Pqxik46mXB84Jazp4SwAHTjvu4McEAtdXpNcaPbRLf5T1yt7pzx9CokpEXArepA2jEcDR",
  "key21": "5fpGAgn3xNSE8zLy2dUobqYN8yxkbrSPCJAqYH7ps3GA6cHXzjK15tat2aH4SnoKo9hodwbs5Wc2CzaSvaPwKgia",
  "key22": "646bNit1yEUoMW5E7nnaQU342AuSdekXxZCgZbmBbo8G8hEBdGSXpMAJ1Zm8qX3inCcfvh1Y5QQspWUuoL4VoNSE",
  "key23": "3NGmfwdQynuQzo3h1qRe4iFMKNFcYoenqgoNXCxpVQ3SXasRBAM3QeTu8eq1PYyXRuEZh7z4ZGocw9qD361HFvjt",
  "key24": "4hC8HUBLbP6K1sGYjxEDzgsLCW1VRuKx7p9qA9JRWGN5VHFwzfSoyUjqojpNocSmsHcWmdNs2X61nTxEo4TDyNSJ",
  "key25": "2v11pVgyvyDXvdg8wCud3EfjmQN97LhgCoCC2ApMwG1mJDNmZm6Kz9w6Tb7WSFeDwzvhf86zRRM9v5Bn3UeuqCa7",
  "key26": "36jMxwoJoEb1RKRKnYUXGNCf8hLgMnskHoHEviEED2qeYbBU8Gd5wKjR6uWNCQLtNc4DvnBLSHpBPg1FthHJiKCg",
  "key27": "PYQyCzT8yxGA8CvEdwnXeiXbpxp8P5MSDmJZmSCK2wrUkay8tyYgcD7jggWWFeEd8dZNsDxA8x92KDotuuTfzoP",
  "key28": "5wY2FZt4mHjrSGCAEySrvFfgGGyckcr6WZPHPnqGYhUUbtUFQJpQxdGYkSPjpdDNKudvCuYQfBRSB19BMMAup7Qq",
  "key29": "mkvTzPa3Wv2VWa4EXgwoh9GTy41Xrh8gNVh2TPPLHAEwy9GJPhxKWmqBWq6UCJHr7e8C8NYP9SArCtUjcVUccYF",
  "key30": "2248mieHtfvcHviitHHTkPgMooomK28hDzY9bx1NwNurWCKzcnHGbjd9dNvNwX7d5xbo4R2X4SA74AUWH7VSMZUu"
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
