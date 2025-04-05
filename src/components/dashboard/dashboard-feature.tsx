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
    "5LX65SRZbgwffi6gU9iTdc5MR6j8an5tVWym86oNyEHCcrZKh8gFbDAPUuZ8cPgAxwN2dknLXpyWRu6K5DSeYQT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ySF549pnDYnKpWYDoPo4JkMPBT6YudERzru8hiAxXUxrJi9doWzizrEcLb3fFYLCsSjDGTrmQqBCUhDXi87D9uh",
  "key1": "4sxbLcgBgspdf1NXv4koy278EsZeCakhd2mAcotbn5knAfpv1G48fRHA1ii16xHiJLJtcqFgn377k8ECdJMSHWmb",
  "key2": "ZVhR5wbDbbgPJ2oQc1SsNtC4UkUWr5eyYzD9Acz4Ubgxi3P64J3Rnyuj3x5EdJaz8u8pVagkP4We7rZSTMLUNEU",
  "key3": "39uhhrA3g34KSqqbQcgoHnfa92TUbC6xWrkgij3ihqLAJSUS8cM82X161qee31nBXvprNeNGrtMMRHbfCJ8y7uQR",
  "key4": "4eYdrfGyZiPLk9EkFjo68fCLHkM2hsJdwcpugGw7g3Luwvj1fZPXjqye7aX4UxrJmVmmR249BST7LYhSFZuXZqq4",
  "key5": "515DfFaScUjZnC5NDBsxXDTtQrAicJdBZKu5x7YL7TQdY7pUqupwYRXA8WrqJBcgihYD4vaBidXvMfFuMezpLdHX",
  "key6": "Qvbux4BHrnooFbYmd2qpEq9dGXWmDar2SLTmyNXTgfA3kPFh2wYRtqU71HxxG7W4JSCZdTC7MNykknSqUvKLfZY",
  "key7": "3inht1BnhWRMVwcWF8KhZiHJ4t1yJ3jBewTJgx2KmyCiTbo3osdE2NkrkExZnC2UsrjS2co3bsWtZY7Rar52wutn",
  "key8": "2RS5gynNWDGjkoptkgcUFgsrxJtgTwMKXjB8oxEXqWNWjgdFKerZ7b8buewEYztgfaPSWoWqaT8dFULDqBfvtFnU",
  "key9": "5vmcgTTzpt8gwLDrSK4WfrPqCNwSrPcGRVcEp1NgjMJodShqwdTkg1aAkAYz6H5UWEhbWoCcwyZJYXyUZmxXJ5nj",
  "key10": "5D146h2qqertR6WsKT782arMJhE37jkkSCcbuq5WMCWiGA1RercXfZDnA21xrX7kTS4ZgUsqdWThKr9rRf2A3xcZ",
  "key11": "qnSevdk7E1WDbRS871w56n7Ti6ZTWYi9eiaKjt3kzaBQdCXWDtW8GVViVp1igwxWUWRiaho9VumoGPcLn2ZWnbv",
  "key12": "uQ6vq3C5FK7xEJukmufm72QJeAxb4uFrdH3Spf8sEGdy73hL211dYuL8QaPxvnbdSqnQhVYWiaPrHK4Cu5jEPqz",
  "key13": "4YEj61UhUmQwFMqVbUdbWzL9eoN1LtUeQcXBK7srG4Fb13Sk3GFdh9ySYot4ypbo6wRNsNTGmRAFUv3F5GcSdKVS",
  "key14": "2vB93LeCXCN7D3xHjNxGnfaY5YWJpoBgLPzqzU3Xn2pQcUu13YqJ1pNk5RrRCaHQeWAbkVgLhS95H1TVaMaA3tLH",
  "key15": "3qTPDMU7jepMfFfUWVV4GkPZMs7x6kaKpnYhDtnK9jWH73ZAiGp5v51N8otvq8HpUEt9YrUjVYkZGr9in7a5kYtp",
  "key16": "3TcSZLYKBhSjPs4ZMtvgFQGYAwxAy3RqFeucDZzXAQKkofixHMpRYFh3ED3EQXoJX9Z5UGbrufGdTUAZ22VeFh2Y",
  "key17": "5yGaTFmM5cCKjdE8s1EtqiRQW9JRtXcW2u2Hp3SMD9UvnuWVvjTbnp27P6kojnCdqzRNBnMoomZryaU5iTL2seYL",
  "key18": "5dx3BvTQeRvpf6ozaTzNvhWPEszVB1sb5xgfhPoiC6592nNv7Qh2vu4oCXqXFssa6ZW3XtgjM9Yx6m88rqZa4uhc",
  "key19": "3cX4v8rtTQ7Kf14msRMgvu9zmjcPvQbfeVVZNEWV3Ha7Ut5uk6heiC6Dy7NjufRXCE5QfDPGrpR6DrGUY6bWaRt3",
  "key20": "2gQdMrRPM1UuHA8MhmUea5w8WyzbKjjjNvKkHLALX939aPh9ULm8W7GiMpGGsgQT5F1UTGb6an9rhBCwyW7upNTB",
  "key21": "QBfe2exyPc24DFrnQDGvcySFjqu2Kmw7XtJFDMpRZZJ4CLSkacDt2jBGRo7FyYc1rBB14wwD5h6tmGmxzActsHN",
  "key22": "5mdGwuyuvhobUHkA7gkzeX4KD8f4d6PqQDL7QNq2beArqm6WkoTMvdwNYKUAp4GC5KKjNnKyZrYbxEGcbp7JA7CF",
  "key23": "2piFq5uRYxEYGb3FJtBePnLNFbzf6KJTRTpUUFMYe9YBxKrn762r3Tf2cbjXwKHhpBgnqKe1ML8uz6HEiHo2vLr4",
  "key24": "2JoQpdP4KWRZzAHoW5GMCY8pxuQH6tUiivbyoTtRvDTTx6QsBH6mzvdxEXaGp9Y7tG78VhR1aWFKSc1PHbdhMxDE",
  "key25": "AmpqreoXCMZfLLBtSyr1Nzi6R4hBZWBGNEvYMz2As4sLgK3DCjQfto8ZQtg7TyqWQg5KzKNHozYVztSx5JBEBpA",
  "key26": "5ZVE5aSLuNHXMFY95E5kUxwUnSCq9bL5u2bPTBiRX76GrKUSToyQFQeeYBTxXe37k9KsLxXoHeUGBAkJcpgbbLK5",
  "key27": "41MEk6KoNWmMEU419MGfhEYoSqpomjQBDexhrmwR4Z5J7jHAuqoLteQTg3UouUpvft9dxJSX5VivcYqAMdksSvmL",
  "key28": "Gf53iKDPDAsK5QhRze3LMpLdM2Hz9vD8PQGasqF1vMzaSqcsUAFkkqosKiZjUFSJe4eLfVfJSSD1XmmYgzmT6Rf",
  "key29": "5nmPntNP4aSeA6Q2ZaPRK9rJaQ2H8DMEZ1iEgjtFiko8Q9zdYj3priEY6YrhPfDBMDRYHkV3DESgkqCpD685m7D1",
  "key30": "3WATp55pLG7jnZPfe5eF9y992Q4L2okJ3ESBrnqweaLbTBcuCMST1NH3Je89oQhrgfzTHWxFYzxtj7sef25cAacw",
  "key31": "2aGuxd4reWsmWS137wFBwNcmR84JJrHTNNuF3izbwLV7oDvGbfyBUvJo1LJ4BuhtT9j7SHvidrAcfFGSqxBkyZuW",
  "key32": "TB1JhXEH14zvLisxddxQwD5MTbnKF8ET4LG5dFm2Nb988ZD1qpCbeMidsrsBGWBcoz13fPSuwRfENT7GgFuTMzj",
  "key33": "37qQy3JyQKZEKNMQbv5KAvJjCGv8X5iNqcuTAE8TLTJKyWzLcfS5PbaXUiz4mh6rmfvq2UPB7zHJht83xoN6WrWr",
  "key34": "49ZvcDNaxK8TRQyEk2gDYezSUTykuYQQCbuheiZTobMK1JArg7GzNwey5EM4TgivKxbh2cgCSny19m2u26iTVwwr",
  "key35": "3Fo21jws5W5hsdpPAFVDhT4QB8zXx3mSrrk1MG27qDRn1tDVWKXeJpcv3LZafmYtrpfzSg2m34zm1QhWrFqGcaNH",
  "key36": "3hDYS7Hx99oYr6pqerUKYy8SYCdpEHNFDT57et5VTbd2VjdFkvQukAyqZCe1AgnEAzFmHbQ9PUwYfD8mj4ZE7GuC",
  "key37": "4FAcE7oHssX7BDHvLd6yj2PTnF8eFsQ4ZwrWTWLcxdoM7JXYab7927SKNSXoBGpFgJ4myxEKgfyrrcQogYJrH7dg"
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
