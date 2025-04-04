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
    "4mnKwzJghkZmrvCXdzP2jsw7tHzgn1VHJ4Z7XepS5Kob1DgYpiRGEdyC8LBddiweqkg96STUvS217UjaVcRcivrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JGSXCkAySba7cBEaaBujEnRJW7Ja7WdW7s6aCV2KaGje1geXnj6pLxP39NQZPurTAJtc4GdMXwX4KpUKeV612gz",
  "key1": "2ogd5ghx1ZoBiaGVSYnCDqK2XuMd1yokf97FU6jmstafMJXLVtsNtuzXWb9cZzcfej4xyNKT9Z7ise7U199uRoNS",
  "key2": "624Zz63a3tdJjNAJi3EFsMWHx6iUH6uGG3pjFDAnKDor4Bp5ZMEQrrum3CD8MVrCWfwtcwXTCGWDEgHRRzeEejqe",
  "key3": "4jFMoLxekeoEFF7UpNvZT56yVPrTGPufjYix3fYghGwMdnBysa7WuYbPMeM4HAQ4YPdsQDd7fwrbHQUDCy25odEV",
  "key4": "29dbD2DQWoKMCsqEnmNjC5v4azDM4c38SRiNX6i6Z4RNqLxPbV9uhpY4fWpvDM3WNzno6ZYEnAA7tw69zBqVh4k8",
  "key5": "2TveZwhGY54u6nNsWhVMZcJu3guz9TBZD9jJSZ26URkG39c1MwzGkHyqp7SZeKLk2qBJbESqRoZg9GCRWisemv4b",
  "key6": "5UXfoaQsPy4fm7NmMRzetDaZqhKgq2eHM8YLPojL5BdMZAcY1BpVs6GRxn5ryBKcdeytzLuwYuK4iBLi2GYrk4w2",
  "key7": "5cmHDPnMJtQbGg13zkupdd8jTQkoXaPg2rqnTMaSa6gPVf56gQiQRtezRm5yoGpk6X6iLWRqd4SEBgQbnTeRh41Q",
  "key8": "3CNtsKUPzSMW3ePiSbPTxN2pTqSH6ARwWPyPNQruNa3vSV4hbTsN6mAGjDJJW4KNxbST1uVmMCArFqFjMHqB3seP",
  "key9": "3cjghGV53ooe1JMqUk6sdrx6os6F6Pt8tmHN1vBiMUexksJoAPwQ2JifsJaMPUAuCntwipJ2dWBENNi1cq9Gd6WY",
  "key10": "4JtNR4cRKg279Ao54xehnQS1XDSvFaa6QeAHTxM3SuzQZ5E3iJ3yLs4YpcX3g5B1F9XFJqYQcUFmeSKbkGpXLREu",
  "key11": "S41mtRbRHpf746QHVPtv6tt62BLSCH96dReaxBeQFcfSD2kA7Xuz6Knbzpb4xWNqKEyJ7r4suRjap6yYj1qUqtf",
  "key12": "26NovUrmdo4im3jTUKzPYV8chqAnkoB2vpByBrzHgwBBsgpoTBdZAFFdnKXtCeFUeAwZ3DF6rADKzueZPQiHw6oH",
  "key13": "4mCzBQz2bWs9UAZThxXmCieWZn9uk3hYdxnMguHqXB9Cep1xVdETA7eSpbQ9HeYbwYg3aY3rhHFZhRLcmpQipzFK",
  "key14": "4Y3wz3j9ZE4duj74gbDqU3i5SNHHGctjYqY5fAbaHP8eWWpgwqUwhSS8usYffvFQbKNZmgjsg5XvZutuYcMGBYdD",
  "key15": "2oG1zagkoypycJQyWefxnB6qzy653gC4bwMPQowewSNUz87LCi7tZQv2L8DKhWdXH5Z3ghBVmS6NpHhaXmRyPK6n",
  "key16": "32goSTek4KxPn1nwoU8etNN8QespBnAsHcqcGes2wyuYZyY2qy8rRcur4WvF3h6inFQ9aJNLm5q4VayfZRXnuUWi",
  "key17": "3fX648uXWQ5AmxD77ZVHMSbN5b3aW71zufKRNGkU6j9R9z7YoQojdS978dZn4Dp1dz7bS6SqFxC9gBWFYScJkUHX",
  "key18": "fiJRRSorCNJ7e4qxpWbZPXexz756FGmK5FVSbr4Vcvb7bsMy77h8cTy7PSYNQsfskT2j2SzMjsWgzyJdzxUrQD2",
  "key19": "2LQybNV9WsAsD5WuisPm5jjsaKTMJMS1idhNha79APyUFv139sqewHvxa33DEYCAnc1tGRvowcG3ha48f2eYEc3W",
  "key20": "5QtbzxokG7nCgWRUU44bU6gkNsBpdCWSHfhfeKc7evn8fLv3BHoisRPBx3cjsrqjDwftHDx4wm9B3oCWQxXSv7Xt",
  "key21": "MKGxBvi3ADxDPgkVa1m8EaWVvJinaxhpEdzwNUeqC4u69P4bDxCmtrVNYLhesgY3NGP9m3aMfdvQFWmrewVY4wj",
  "key22": "5B8ES6FN2JbLcXPf7itvVoAM5HgA7ZU5sw9VJr5M9eKsCi2pZb9ap2csLMAgJ85YJC8tykketyvb7sJiHbKSgz5k",
  "key23": "3Fq68z2vH5fMZt1vwsy9qkb5eaAWYLgPVWBTf2PAEHc4yFwM5eVXGWH51eG1tB5uZhnSLrafQcG73qrm8Qkgo1Lj",
  "key24": "2whC5CFuw7Zp7x7LwN1Z5G6KKi6Y8VTtES7LqUv9AqRry74KThqDxCb9WMU9aAQ73mdBkjgbXZVeW1khTpkHPeYq",
  "key25": "276fswVapNydVpQ8ntTLkeLzStvoLc9yQ7wVG1UKEA3dKDuvpLpE9yTL4AvJmXGgefkjGVz7q1J1SPZXhfXLhubt",
  "key26": "qRofwKzd52RxkhZM7TKqRVQkEAS2Xnr4ZbcyurYALH6oMqLncp7qJA5zcS4nkxm98EouRS5R4uELGTpBcXPnabN",
  "key27": "4UhcR1KQVCc8Ur12GbN3nQu8pJfFy6fhH2Q5V7JL88mP4GBy78FbxX4nf5dz3Ei6jhYMzVqK6Rut8WKniLGSzptc",
  "key28": "268F63PTJH6sKhh1XmqStHvqGqQTNZiDPyEnTHXSC3HNqhz5S7CQc75LEwYcPVsAKzfPh66yubMFRHAJS9EJM9Wt",
  "key29": "3XNWmX1uqYPjommLPkGHPetrNEMHkmx9xQMarhM6SS1GR7QMRwXTGSUnudMFRzmTNVsKjWAmCGqfNikcxNqK3eym",
  "key30": "4eXSt8RvxyfP3KJ54KiN8Cnd8vGkXmRviwYBSmxdjCgbY15YXmWgr7yGY8ysM1vwzgKJEhK49bAq4FR6fR9yQEyu",
  "key31": "3GDPKYPf8SmJmbFK8bdhwNP68nzDhRxfyy1vZCTrZdsTxxCGmQyHBiEYvo9mnXZ7bJkzUkdq9Etp9zqQUvyTkH5d",
  "key32": "DErQ5CAPA9LoBQRjgLkeu8BTojH2BbsBqDLkt375Mu2RwDDpxbNxbGaXcX7gYA1pQM6ANEAGJE4DKKHcKRifTgx"
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
