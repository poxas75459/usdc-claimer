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
    "5Rp847vwGsQfzHJHWYBQLZRVgEBrpkrCSWByvZQmBw1oaT4PLXnPEo1sMPCpYUojvKAqnUHfz8oZ3bFtoopta1Tg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UGvHpg9qoADXYcXaxEoTYSPKxsv8NWET9sdTTPERZ9vN9xJw2gQ9e1BcXUrhE7R1tRJqszGCoSJTj5mSC2MscfY",
  "key1": "5J9gmYszvJyvbf3UptyUd6LK88ZwiVRFTNRtxWeU9z9keARmi1iBh9MtCsviC48BXx8jFdMyz3wx7o7kibAaPi8f",
  "key2": "4Yvj4xGdHwjdVLHaQNKAHcGvJcEVv7VRkY2qrfPC8Eo8RHM3JtLeQFJ6PfFE3tfFARk6om7pLtnp5eXzVAgb3MSk",
  "key3": "2wXbxWz1uYmfiZv1WgFCK61LzKEhap5u3SEZowHYZm6HfCnKTNQpVAU3umW8QgogeKxohSx7UKapicK5xznizaQK",
  "key4": "4xK1tWgaAwYx946icn7DsRuWZTFLUJ61kdjctxGYLhgbEtj79WwnVjw8bs9byaK65ezsdfFnNcFCVXUP9Vm8YeE2",
  "key5": "Zqng12aGYrG73bBnKNquBuFmXgZaxX2kBE963UcQ3887Z3xxjzo7Kz3HrYVBkivAoU6qFLfS6S1HfJozQhc84Le",
  "key6": "2LEnVJivRaeQSADPseEseoog8e4q3ujHNDcTqt7y5Nh4jvC2HD1vHMHWXchtNsmFYaNhw5ezBV8c4KV67gVr9K3L",
  "key7": "SRcaBNu3BjUTe1PcthkKVokTdiUGHqzARYsTDAaDnHtYBeyPM7imdAU8xs7HB68nFsfotGsiiN5FV9iHwrdAeJH",
  "key8": "t6oxxtLNgcEuGqAdKLwEYuXwxYGSgWPhYJSRH12yYU4XHc71pyQKSHy81qDTSzzUSf6w5HeA84rihJKnpUY4iMQ",
  "key9": "5rquZ2rCkWPz9hMuGRguY5zDR5o4uX49pfNnVaWNx6HozmEK96bqXn4Myx6WD9SF1GPBibxheCnbnr1k41WD8R6",
  "key10": "63ozDNxVFdrUt6sdGgvSDZhW4qJ2cnbkgXXhja7q2BTUXkNsCYYBoJhNfQnNhHHQq2Hwk3CwyNFaknqeB5YRgzrd",
  "key11": "3JUWa28kkPyEXdQuZSsYLk2cFoU3WZKomyVx6TgihVkSi8VosN5GzWV94oph7qNCAJ2YPjzrFwV5qybaCiKTRF4h",
  "key12": "xBPKEuBAwCg6NdCjFGH9WEsUTgMgnNjPXtRfvwWJ7cYEHGybdJVKQTpVzcTK3WCAZUez9TqizHFE3di6hu96oLi",
  "key13": "376T6SDAH7BkCzk3iwTouCCfwwJL1GcdRH7L4e1CLQnv7a1Ux6iHKeW7G8QyfEbt3qSjoZn2YQBuyWbJfz1MPzR",
  "key14": "56LJwzeckZ9tVTbx3oH4r47k9oKyyUJ6CnbGWtJFoCSS6unrn5VM3o9FHvwDhbQEZJLEf5jmCsBXxCpAFPYp9UHB",
  "key15": "e7sjVQQWE2mg56zB6CSxLZpfhQtSRUXP3S1dvFgiLiLqHkrdNAEci7EgjX6db4frZpWQ87aPAjJrmKDbURi9XYa",
  "key16": "5ng8JyHRiA1crGgYwBMapvtRALt2gFVYD4on8ohQXExAdceDXT2v3BjvbomQL1JD9WFJr7Lm9YH73b5MoFsFdapZ",
  "key17": "2kHeXZDQQYm4uFoMwwXjxEWfzJ1RxGu3CreBkbW4NL2MUeXct26goM1x3XGa1upGk1hfurwHiLDxVis6m4U4n74W",
  "key18": "5B6UH18345ddemuc7xVXBaXBuwSdKRMURjCFUjSWu8Atjbnp2ztWaNXfbCm7mpSSHvsxq88dFt81C3WQ2NXVw7Ad",
  "key19": "3G2S64e8AWEHrcXq4AmSM1P5ytagmiQ6KUUKeMuLLbT96dS8KC7SVhs2LWgczHTLQb7jJNAwUKyzBCetygLykbnE",
  "key20": "5Kpgcf724jukvSZCqJYnrsXFhY5HCnBZpGPNp6pHX8TBfRVepDJms1KGtBdHn7iJCVRU51cU87SXkPxKqznNcD3t",
  "key21": "3v7mUzrwrDvioChd6TPrxxgt6NytYhtfw88D5aAMkK5VnoayEcsHt1wRxSgjwkeyhAzudAc9E5WkgKXDHoEryFQJ",
  "key22": "3XHbmWaESzWbNGiSvbHojPhdcDimgd8v495rcLybxuJnCk5BZKzUjx2DBHyjpNSAYA5sxpdKZswNkPzRvgmaWViF",
  "key23": "3yoG6HgC6Gao4xVTQYTseb2gfiunpPnwkCYRiFmpDGogqkywk1HhAuL4ScTzc5nqecdmQZ5kk1xij9RLdSW63FfY",
  "key24": "5vig3DnuZpK698LNqgzsaAZHrdDueDDFRn1y2McJVs2nocowk6s3E2JYHgBN5rs2XKrzfySmC1fXaaVkGwCSCu6u",
  "key25": "YaKYCYGD7SZvWSUDspUp8e8nHbRpkNnSiuaPFstrU2vbnktiLGquPEee12cr8anA9yKwSXymygZCYxHThY8Atsd",
  "key26": "3VgQVcDRwTTqpJab75tePFmjJobUcjtdHEhFDrZVm6zcCMjUPGizAYaa9h1YQRcHvgjGpNPHgcvKec8edVDLHpBb",
  "key27": "2oSVPk1shxDr36uGyZPTsSYJvTcShi39oi5WTQ8VRkNe5JyAwQrgFSnjsQbx4LuhM2zzTJoHTtCtj2xsUc4Vrc4E",
  "key28": "24M5pc6JxMLDeaEjMuucaa8jTyxatjK6TsSbTavgNWrmtrH8KCKMRWTfQQASFQNSEZvQXYTt4ukddxD6srZTHvVX",
  "key29": "3v3AAjhiTsT7ak6Gp2RJEhr2rVezPZNaU3RC6xU5gmTeAwC8iN8qvRBhG3a1kexGvqErdrEJ7xaAWzsca61Ldqai",
  "key30": "4mR8mU8tB97GQ7L8imEZKAo8Vz6yhGhdZJJfuHzEsp7jyesFSfjqMct6U6GxxVfhCxyRH1EmFEFd6EJd73o3xxsk",
  "key31": "2hty1dXuFJ2EggUsq7FjnBAGdW61eyVee4XcuTyFXawjckFwyfC1bgbDFQV32vChjgN9PtyAwzBCPz6mHN3T1XiP",
  "key32": "3fm3NpbJejuajkooadYZaapNr8UGMBWSb8fg2pEwcCfFT4jSZVYxoJjdiF3wXnaR5Kbb7GPBJWcJApWx6yuE3GR6",
  "key33": "21Y3RRQBVkPRTAy8z9ukZce6XT2noenT7mW2cgCpYWUTYSjDsmB7CuZNbTvuBCBrcrr9cEovHQnECeDnHowUrAK7",
  "key34": "4JzF8Ga4xPWQSTp1a6uPTQETLCSQfCF8qgTg2Uhvg5SpwQD3ePT6eAzpFijtDzAVRXBN4zRAnGXLk6utq8u8wmXt",
  "key35": "2UZZoij4UfzWTxHpMCkLcfggEiX61yCiFTM4XGf7QQUqsg7Wi5RPaiR4WDCWtrVMkxxAqL9o8YTiztKGpLVV1RNJ",
  "key36": "66H3v6egwFSMDW3CLZcApur4Dcu5s8WwMr4Zcv61EbmV284rRW1Kc3Q8YsQQEPWVvuBL14MzHPGQJb4LszjEnp3o",
  "key37": "4AXgxN4hNVSSzJpyCGrd9yTXz7y6EZEaNST73kHhL3XGnkAYNBXPgBtES6tV4NFMzbuSG6CDvwe69i2Cv2t9UGiT",
  "key38": "4W6c8Hg5HufsqtzLF4ERHbH1VJCxiZiaHSybNowBGUgJoA1SCMKFEjXe1LWgZ8PJ8MM2tU4ZW4VWxrWy7WU5iyco",
  "key39": "5VmKqJ3YeewhsVTxftDqVWjYLnca4vKXGumvtwrYQGoY1a3qUVJ85EGhjo6wHvWuanM9vAfQMoCMiMp96FoyUkHA",
  "key40": "5cTm3VZxihgzcChiKwJioYA7XHtJboJLzdXPThhR6kskHyQM3QT4KDPkjDEYvwS9nqim8Wkn3fe8TGrECdaPSW1j",
  "key41": "5iGFNwcYJWWZEtgSq1zLdYcd33oYeT4zFxWmaWhxtmY6xWw4yd7ZQUwi1qJ2rKEReLi9AZorKMSDzhpdjbJjLvBP",
  "key42": "5ufetdwECMZWkPhE4169ud48HjXLKbBo4LbFJJ6atTMU6QsKo9456bZ4BJLYKJfH2CcGVUbz9hjFece9daXJYdqp",
  "key43": "5wVXKMJYQ2BZpiXMfPWPQeFbaUkuTFaHqBowjZUKvi9Au9aerPPL98kXUq1udVe3XtfBqwrJwHuBLFHQwxXCZ5wt"
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
