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
    "2hZdoMRupiPVFgzP4dtsegLr6PbbVNZEKiDysN9aCHYzuJptrw5NES1UdKgZRNRLvyNoKy2iFhifqfdnYfpi2bMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46HsAUQhLXpuhy6y7ExQo8FMKv2Y8g9jvirRQGdt4Gb4rXi9eSqdwnUPoQEtSpMNA7pBXYA9ZSBJ8Kp6aJSnNNmD",
  "key1": "4nq68sxqsQSbcVzWaWChVCvLP6HcmHtZh3QyH2siL7EpKGUE9XsqUTETZUUEsRTbhRzw3cMtrmuCEYyT2FMbNkvs",
  "key2": "3Xz6cq1AJYS4PyumtyuKgFnoMfLpM6xTmnLVGETwnyCUnx6g1UScdrYV8nN3sMpy7WpbeDf4P5oyFf6WzBKtpaRU",
  "key3": "3CE5JA9E47AJoQB3a45pQrQ213ozsRgB8Y6kjvSxzBtZJNFbMGHKXyb1wdRvbnAkdabdfUnd4ta9UXt6v5MU7eRu",
  "key4": "2CgQnNxfjBRvAuMsgdWDrzQs6aAUBFZWBxf1z82JPpyGN47aDtTeckd1HkcbLAgqFx2MnyFLuTim4dsQSivLgZJE",
  "key5": "snTMrd2nG665V9Qi9ShzPtXBzqbVUtok7VzVtqD7MiYnxB5d3DosndQKQt7otYAh6gWXA1CXNNcuHQthXwqvdDa",
  "key6": "3KxC6rSVrWcppgr8bH6fvuRHmggVTXVeWjoqttBKeJey47a8eg49bLFkQEgmyhppBs9DsjWvDriQxELrP7Quz4Pi",
  "key7": "3TAiZVvAKiba1GRcdtGY63qdhEHVvAEHxMhvVNxbweo2KKPWvuqMUJCKyXurGj5niRngfPijNpE5BUGpNus3WJG7",
  "key8": "26CHERv9KUhgpsXMTkoRsRL8QPzscEdascaqQ99BMH1Ys8KrhJUxLcTcBLM1TFES8KPAY2ezqdrkJjMhFcw6AQVE",
  "key9": "4e1WEjSf6VYvdNJuJKyHvybeuGmHgJD6hWjy1aNKfKDSLptzmWpLritpmWdkhinafEcL8o6pHpX43mTQhwahbWhp",
  "key10": "5geee4ngxgNkc3Eq8m3FSyhUadk4ogzXuWB6uWFbHR6R6avJjqZe3dGu2ePxdub9aS6gSmgEHkkpSv9rdsVbardc",
  "key11": "51sobtp9U85WLD1E4xanP2EzoK3XUKgNybUvVNS8pfzABFDY4syxPXJnqmkZTMEeVp4L4ZPGUgttLhud5gA7wdBU",
  "key12": "53xVRfQVZ4qajWEGR9Wmyx6RMTNRvZKTwapb23dVFos79jd3ZF8c3jFsyuvHTPJAM2ES6RoLHLzL9WEkexEsmj2H",
  "key13": "5FrKRV265VmSbbP1te3LtCKgCnSfcgmvAqLcXgyH21nTZpKJQhuRL5Yj538GqmbbJcuMc1W3Es2D8VhBhAjp9Jto",
  "key14": "2Q4v3f6XzYT5zuukX7Yuv8Wbo5V2pPSuVNCW74Dd5hJxbgimSxaevTSnBDxhnW1XUgM6C2TX5y5Lf2RJiTJgoztS",
  "key15": "2SdXkvxQx8CyvX2P8G5gDqikzAeQzorSEexqaqXCXJBPTzTfDGqeCeEX48KAwsdQhuVfrFiKJe48yCSvszTDM6sz",
  "key16": "45QVyuvHKzdLL27y9gt5tzdxxjq5hNUMUAPA1ji6NsipYs4qnsjKyAmPbnHh5tUAK2JbJrTnPwpTnqbtj3mTLsHg",
  "key17": "bJXoEcMSFRPzYo28uV58accoee97EmFnLPq26ANMx1JouqFhw7Zxms4yA9ZRy61ZU9Z2GnenK2duXSDZuzb98J4",
  "key18": "xsdchqBqXJrV2xfqWdoU2dJynFQcmG7bV6gq7g8RvhcavfsPrQgJAq2JwTJJBvQneyunTEMMy7cwjvPKT7RVEGk",
  "key19": "5mtXWWETjeUF8TtGzJuzosCuojFvQcpgBvFDfe8ZFYwtbvDKdL9FKCd3QR6Z1DpEDoVHUyFzy5AeZRmTxphjw7Nv",
  "key20": "4v4BtoArFWxUNK26AP9ZGq3bJtyaiq6WgVgsyo19bzVTV7CSrdrZWoYg8A8sFZJUdT7wodL8ypA7Logv2zC4nq1f",
  "key21": "2oDM6KbcLjxxSCW91GYg2qHgWSuwA5GJQimu6THFPT7wTCKt89RogBQuNagCnErtGixhvj9eyQqhWLZ2cnKCYx4P",
  "key22": "4t23VppLqzh4An3CT88JLn5FDYLSHhGtUNSvSSC2SPP9EnsQv7s2CSWQ3euJTiWSUQNMfrJ584LJkxwSAhaWCPQZ",
  "key23": "3jsC6cPaydsg3qZxNssBnpsXofEiVre1VftRpCvmH3h3AQcaoWW4K2UhGx1hBeu1VWQCxg9g1ih7UPSZRXLtXM17",
  "key24": "3iGS6dFK3aQ8HywUUYeU689uq48K2ocG615R7EKEdRX1XLDYCeEweHTzQep8n7NQkN7w75sMA4tDrEqP2u9dRTkq",
  "key25": "NAaTHwZDnqX76qc9E91panw9MJgtykaZvpo1LyGSYzKJdbXtdTc8N8ndoZhfNKyhvRhw8NGYJ4B8g6wQLD4hdVW",
  "key26": "yA2dbChUtmKsf4rX49XjtnJDHL9eUqPZSj5AkEcL7FWKYFNgbGuwxaYdHGGHviCa5TBoMiG7r3oBkdCNgsU7pk6",
  "key27": "2N8oqMbgNAD4fa8Yj15HVY16nCBwH91QYJn86sB5B2QQ9EjLExf8DuC9RDn3jq4uyhP1xM7hNpKvsXEwQGixPYrb",
  "key28": "1VJehrgUwxadwFCHQTwoNhEaKyn5gBE1MPEcegutBwgPi8w58wPez7dQwtx4qyFKoDr2BLJABXnGMg6K8dqhuPu",
  "key29": "3cNvaiuBML6eWgagUQQiCbU3fN8aEYMHU9g2L8p7BSUTWnoe5EHqVUV1rubQq6or1cQwEA4ymD1PGg3mLs1Q2Rw",
  "key30": "3chFUhAPPvN1SQ8nwHAqed9WU8voKHpJgmEfmMskzVNJLRbMHpyjXeDERLyZkqYc87fwDDUpZb3ar6TgPZKNEWXa"
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
