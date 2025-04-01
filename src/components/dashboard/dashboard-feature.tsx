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
    "3zf5uP31xA7qcB6fXBJtHeYdjcfWuhPpvkYZwVJMcmVEhbZWwNZk3ELx3M1tmujYUii7FiZV3XTPLMM4UYC7cQFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ikZGKhNw4mALncMHTaobv9MrneaJHoJRAqvmS5ggX4tAHZuDxGiWYUzz1KRhUiUkgo6VcbEUZUWMqt3hSrZTXqj",
  "key1": "3hJsrdYrtEjecyGXTRGRxSAvYfz3dATSuprRAow85zapPAQHaABWHcWqMJrgMAoy4Rg4HC4TJew5g2yKzuC6z4kG",
  "key2": "3jmzXWXuoaXkRtmsYYC1UJ5ZuB2oosPpB39Po8TkvHvCmZYdUjr95z3sJS6EgWvB4hRJc4yCdVVoErtrAxUwYyf6",
  "key3": "5hRsr5D4MxP5xKqZtnDvnLwe2oA6ymTDCs31RYUQSERBXiK97BYExGsbdtBv3o2jq2ejXJV8WspGLncWf6aUxMBV",
  "key4": "2nk11oAXEbYPRL6S8JDixZkqMhbNFi2penu3dci6Krzo3QKYUyVFuvUcyz6aAXtNWcSYWTdoQ1MqSZM9Z7m4s1uR",
  "key5": "4WXn1s9MHcNJy3swZ1KmutebfYWNX5m3txxqZFSK9yThriwP6GvgFY7Xjd6PJLBtaPJT2DPGLCWVuH1J7C8QjhJq",
  "key6": "3SdxmYgNYRaPducxSCkiLQUVoiuaoqxRprdgLyfaKUC2NRW2iQdTXZfQDAcgsUyuKfg156uEpU9kAcHfXXH6FnLK",
  "key7": "5vXtKgM9YWWvMadVnr2hvrHAMsn3vtbhL7piNFjBwsj8wmSzCcgGMhW2kXQHSGHiVL6wwRQt9fYgmF1sEGqCS6K6",
  "key8": "3oYpFvG48nGVPQjkXrSr5isANf3NtXs1MQseQ3vTy7dxKX6Wn6aSYcfiBPVBWHQKySyC3v5efvTGAXzsA5WtrUNQ",
  "key9": "4hkFrCBSgf55YB4U2am82dWsYq4iSHDaT7TPBJmqaY8iyveE5CCthJBK6KWLp9PCkHyTp7JmA2ZGrsGcK4c1uhbq",
  "key10": "2G6SDvPHwdVDMxq6uTZoiFSzerWQQDgxYmLtPVShFQC27FLMKbVxNQUQ77VAt4duAAxi77dQUQEZrQCDQBrfJsm1",
  "key11": "3xnJT6EoZMXbHhqz84WRb4apLi5jWmomZ7NHmxm1jyER8DCPcsET9ZJRkaJpVXs9FbqY1gzC9dBwKaLKaFkEz9R2",
  "key12": "639tYU8FS4uSKLmqwU1hnZNLBCXWNfD7EYJY6KKTCi2ot91gZNxG4sp7gGpNJrcnw6XYh2UQ54vs7tDkQyNKDKCC",
  "key13": "5pinLAe4yDGoydkHEb4Nf61ErSUpCcymYjQ9a1x75HdP2gXdZ1Yh76yAVJJ5XxpfULdCM1zcEKzxt1icxhNfEbuF",
  "key14": "51wJFKzmkrErGepg2ayJELg8mT2iatPQ7Zv5UVgJZ6MeBqF3sCquSPgxfXkrXQ9rCEPsKTeya968ZtuaDcDbqNXK",
  "key15": "5uAtbuq9H4yrPcj2RUCeZzNUF9U4Fe8rz9NHj68PDeqTPPMQr4PiBCefQuLNHxzaigJ1yPaVcJDt3by58JXtfgC4",
  "key16": "5yGbBUmHVHDPVaaHUtKiQ6sRCmsXgVTiZvQkC5Jag8uuYXKGGRAd4dhaxYGewn17Nh4A73XmTBRtheZY8QKUFPM8",
  "key17": "2VdVsJAdJ15Y8CYzpFno5oY1g1A4QFQtxmDAAJx5Rh4zis1mk6NgbFTkn4nfYo1Mss8LBzNsAN3P5LAD4sR4aP4",
  "key18": "HbcqUjgwJbVWVcWUa5cB5SiE9ehLwi1yzDwuDV1SpwHjaHSZL36ZrXWyMSyuqLV7uKvb71McnDfRc8bgv1DZSYL",
  "key19": "4oWLV3gCVTyiCft5iJU9P1oh8eXtyfd9LTFTKNq8J4gmjAMbX1kMzjV4rxfL5HMxs9X3Ww9m191i94RyhoX1WDki",
  "key20": "3Bu6A9uvbnehogYDp264HhpK7KBrYq7cqhpomptAhn7dVuwuK7vttb9S6mtRpHXfGkk7XuDbeNcA5m7pkaLM2YdG",
  "key21": "5RW1B2koyapqiEiADqeBKdzkzJxoANYbbCTFuHSv1Yxo87pL3AxxB1LvveKpEfFL21a3n2u8tBnSw9aXE44pshmF",
  "key22": "5TuiuVcKLJ9U88fyVU5qbF8dm811dnJ1Sd4weJzfJL8pZaGN9iRrQ81NfK7gFNrmjSvu4vQ9WqLRC82QPqzGib5J",
  "key23": "4a63PT3Msexs7Dz6Nozi2yT3VDXqnNFogSZhtP7uJZKyQRoQCHcEcaKo6vwWvNfmWTZZaBzD2pL2zkmYH7gg5aZq",
  "key24": "4vn2TGDcWbCMcbEyPXbxz1YTHci3U4nVUe33RcZFPXa7G12PanNn2hLSafgz56hnuEShMWkyYMWVwf6Em67ZZ9FS",
  "key25": "2tTJVtUqEf58fCqRcC5dfiZ6MqFVL8P39mw4TMXKczrfoBC8h5J7SrHwEAGnz7C2396F7mJXXnREYYQWR8puS61s",
  "key26": "3oumeb3MsV9t5fCMUcdfu7iDCjfSX9CDQhEvsjA5yNtBrskYER317EAayVHzGccTVd4gJcghDhaASoAyYFiPkuW7",
  "key27": "4HsQoLZHmWD5ig7BYAVi5asqntevkrGn8eHHYiFQYZmgSZ7TEDBkDd1YD7fTFSXseGvB5V2Hb3SFiyKEkN7ZUAWv",
  "key28": "2yTA9WfHQwRpPmvqHVQnpGwPcYLsFREg1ZFvSWuewBZLx6xYdjbsorycTqmK9Nga9u9hD9UsLjvS3sHLri8TzPJw",
  "key29": "4ousgbZhVaWTuTnX8LnAof6hSqif6MGjnNCWn6c7y9aZkQeE2ZU5Dc6kgx1dZwhfbeZEFkMy1WqMc2cwrsRgASbi",
  "key30": "4ztA4YGU6mwsQCFTrafYEa9s8MVv4g74WCQftsFGi64b6u3KrsVwnncxi8ud8D5sJ7cK7HjEC2B8igu94ENxBZg9",
  "key31": "2LM6sonqk541gSeB2j6RckLybxpto3pov1bbXZXRYAm9k4hh8H3KA9LdHxtwRpJd57Cx3Fu3NeUzVHMrjzSLE6hA",
  "key32": "5ZBqnfyBQqi7kEz2vb2J8sTchbsjrruaEWboFzVpP1qdbw7yRc3EPX7gcvBpJeJpaVXLdoxWq2DZ9aTzFGsv27oW",
  "key33": "4SzLPzZP1SL188TBSHtEHx6tSpgPE3ZHjBcMmaCN2oSP15dWcx86miWwTaqwGdSXny3JN6BMjGVFmM9nUGB6sfDH",
  "key34": "4o9PDz2TqGaP3Bb9YsKLwkKWEgdn3Rir4xHkRChUgAgEPpUsvUKZ3natMrwyAKBUdivJdoA1c6jwgDqFAECGsWHb",
  "key35": "3ePBsqhz5mLVJw3N1tdTk3fqnLdRJR4BhzEmYuv4RfkBBiYKYeFNwUGdAFZTcjZjZ1Lmmtwq1r1mNSi6eWCUGAYp",
  "key36": "2WeRoeQZGpWAwJAqJxPdrK5DbNoXDecbRGuKqmB1qbxUZrTqhCoEmg47DyvCbWTYtQtu2VGt5J3KF3EUcnmNxAjW",
  "key37": "3jYdgPyrEki2smF7UusdxDZdg9VjA2h9t9tANzpuEcXgzaRkc9zzSZPfh9LhQ65UBKstJjdELvXUyNhb3u8MXrvG"
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
