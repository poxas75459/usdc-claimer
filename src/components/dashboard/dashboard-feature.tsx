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
    "5BmihQ7gQpKYEyZRCDeoQD23wBXKQ1LZQ1yrEkHDxcU2j4HTiGNevivQc1SdyjZmqtzqTKLhGMscJEb2muRitx8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22hrBi8beSKf4Rzm6V9WbgiNHv9aBWRW4RaATzuxnecDPVUMjixfzQx5RAYydpBQsD8Mw5S6M4SxdrL151aKUXsC",
  "key1": "2MRdXGnmhWF5AJYqWWzhBQEkjegJLkzBeFhvRJd7r6Ujj8mR39zGfKWf7697WeK1E4xbJVmizxrnzWZHXVYzsxLZ",
  "key2": "2t9GokLFu3Ma4Eb5Gw5w7GKkCwhjFNB5HoY4yWLKvXM8Cwidqx6RJjqxxVBjMJ2oLvCWPycBJRm6p84QUj8g2Pkr",
  "key3": "5jkbAHybBTweuhbb3rBg3ASejFqwyBkBF9nzUhgzyW8CSWo9jAjcMjk6AbohYmN5e3krartDp9zih3bgBXtRb336",
  "key4": "239nsuo9TfQGrTCh1NmjP4YYiKaJeLkMqVwLN5HoUgr5YC567pj7w6y4u13ZkPubYzX2CNLUywvFAiC6p3TR4pGt",
  "key5": "Us4QZE5G8ez8Xwipb47fSXj4hvHb7Hq9SboYdXyeyeSoNXQzTFsJVXVYJc4NTKK7sBNMmw4NyoxDo5DpKxktKdW",
  "key6": "4SY5QKeVLCP1wjtBWKFmMRWgEf4JeHhQV2aR7csa6HNzCYoWWZxzXbUYs2Z7uWSvcSnHuJ9mFNmxyjd5baLQbPdg",
  "key7": "fhcyjR9vCVkBuqWQaXPRypR4STu9vQngmo3YQ4oaBnf2DQ2Xc49xGnkskzuk9uzLU5EX4ugCRHbFGGtAEwdFi9S",
  "key8": "5JZm8LTgSQq7F4KewzRYqoXJaoJcgHL3smgnMM5AGeFMhG6h7DmNk9VXtfV2qX9H4zMZPezQ4uWdywRRAfUDNwPa",
  "key9": "2wfMEyzews23G33YMEhuKMsrML87Mofobt2yiJedRS2EYKP82uytKWM5foTDmUE3JkrCwvbLf1Y5EDwo55j26tDu",
  "key10": "4qbJKAZZzBHjuyq6ReqjySxHNDw7q5NNy1881VYsPuawMAatZ3FHuqFuc3CLSEUpmvWk7PL7S1ybP95vhuTjdiUD",
  "key11": "5TryLMWqFLFAKLZE2JoSvB7747sELSCuady9NKmVnuUZGcbMDUt6A7eMjxcuUvM72sMB8k3A7KVAXJE7HkUNyjJV",
  "key12": "hHoSbktdtsubAdAiG7M2fsXoVy8VyHZ4aCbLqtQVWRiHJwHCyHL3xmWURzdo9i8TDWSCH3hrZJg59wN9Rvf6tND",
  "key13": "4gyAYreGoF2wFwzARYiPdLBcitSSU3s7QMSXdr3nsRpe9aRScUhWKrtFynMrT3UtmWs1f4zPTdcCLYaJ2wgj9K2C",
  "key14": "4tm5jiWXuxergV7dHqK43ecrDiuUtnfXsHgr5K2K5g72J1JZmZdTD8Fr5YCHKTRF6iocXAnPoXPwWadA2YJcn9EL",
  "key15": "4pYjPEPiZSfBA7j8CZGH8xoaDWLoPVXGBsFKqeqqbp853dn1YyrKQwqus4JohgWZZRfaEbCsDbooAWvpg3gTSAac",
  "key16": "49RrQDP11TJtgw1yQ8tUQr1h7bkHpkH3JkHAgP2KYiYSVFSeaHjvCatDNEUkgbemy5SdB14LyRJ7hohB85N4nPkM",
  "key17": "2xfDV6GmVNeZ8xukavvrtSkVjy8HRhkkXQR3iLBC4PyWzTMk7jTaKr8MNgbJmJJjRDPj3utUSDMzsPjH6kBFBu6g",
  "key18": "4EegSK18earBbupWp99CibPbPWELd2b3pZniQSiZSZJMJXZw7SEBySgwtxEiN5vK3ZQSA8GLGHgcmVz9vJVFLLda",
  "key19": "2K44g3ZgKWmfcASjbCNPCHvXoYoG7ffDNCfyqZi1wSHRG2s4Md7AM21kFDruB49dTj8X3ttchrdSPpaf19BcnqyX",
  "key20": "4jRiaGP4e9VpD2x3HGiG15jzd4L7vprKt6tWQAcwLpnb4J9dmhidWTJCEoFfMySoZQrqdHtaYpFppmYzKGoLwsWB",
  "key21": "4nSUnGNmXMCqX4VamVmqhHQkKbQHUX3uUPSNmhgNEBznSGtCoxoMh11y94Az6rhT4q8HJ4uP3hbBNryuFT2uGvaZ",
  "key22": "4kXnCvsoGjLYYL8DQP7wYABkeRoqoD1ZCaXzvGPcBzPL9Uau2U31hy5uaFp6JxRZf4XRYWfzLc6JQKqg7nHZxfGZ",
  "key23": "4eQ85JVRF3teuRDhTEKuZSJMVeQaYYEPvxJMSJHqdtuoCkRXyqCEyaT4MW8Qaz3YVPFbuWBZEZ43PoKSfH4kNmGY",
  "key24": "4cvUM4nXgYRRjq3rwbejNnKz24NBey4mZaMWXGFwcqjrrQayC9UUPTfPsdVib6jHNabyayeVjMzZ2HfTwGGnhqT6",
  "key25": "2BNP358tzR3aAjzW53kGbeXrJEw58UFdoc5RLXCBzyK6skBCQv9Nw8bSUFjYmbbRA3rLTM363E8vb7CVmcsmiEzB",
  "key26": "CcUrWtBiWRa8yfuhZ8CHAAHKwaHvt9mJ6VMWqiJ2H8oMwSTKY8aYibfaxP8YURBvWuvuWwsK1G41yVDUwZ3oQbC",
  "key27": "4H7Eni3QWXMMkirGLf59pqSTexB1u3zx6aXfVarpkd6Yw7W3xG7KXKmVgAFbYvGBRbPoL27yZHYBtBgXBokLDRru",
  "key28": "3b9wvvQt26acjiMPbXx5QmV6tr2udfg5aiDHvfKo5nhoRGgA3jg36pW9RqLqw5x7kYi9wBTeqZjRAmC2HnzxEmb7",
  "key29": "32xsKcLXhrCNRpS1CGVNste1UzP4UVf57M7saw53J7Q1KeYaUXdhVqqGedMqYBUPT1Trpja2Mqik4wVAfnCLeY5X",
  "key30": "6cEYL4j3AviM28PN4zD1AWyWrQaqdMVaqJNvAmeHvRcDBuAxFrBkZNzpdx8Zf9k53AsR34ESJ9cFBD6JS3qmGF9",
  "key31": "4TaQb4HxpvPhCgdwPRQm99EZF5xE7WhiNPmev1hxTZzxiUGC655b1wkcb2LEa3s1eHKnbJbZ1rtYFSKr4DJSRzZF",
  "key32": "3R4RJ52qBpPJ1c5o32SVeJzfDKvSzTJBraCvgWtn6qBhAHapHxFqeG5JfCYG1P7YrKGPpDzF2B7gyD3veSzanJXy",
  "key33": "5nWLs49AmFWE7gJBc7wUrfRjQdo32DeharbnwaawxTnjjk6xny8QqdapzV42nEcDENSivLV1VxycWr9iX6mrncCW",
  "key34": "3pZPijrVGR1LF2qFPSEi7DUEvs91H3kJSGnZDNWzCMKKW4n8QUaZqGBLPkBUhew8tRafBa9abCkhzgaU4MjTm8L8",
  "key35": "3A9AcaSZkRuWwKm13bjdzwfKwe1zEwnf8ghFqjnQnYCBBKnHVDCBLzaWTccUXzHjZ1hG7fgrKaW9C8gQvQ2nMAbQ",
  "key36": "4sJxNYkpCVbnde9arVMEq4QssRzereH7NRCmeyzxYgHewpLcQ6ZVXexnYkgtmT5kzUS8oBLnxrDPTPYcpMSwVJhP",
  "key37": "Y4y5e5wc8wHQiLHTesW3dVCW81N4fq6e6nqiEcKCdK5Y6775nsHQAvEwAhfFZtJpyfWhPbiPWAzr9HH1R7eriGS"
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
