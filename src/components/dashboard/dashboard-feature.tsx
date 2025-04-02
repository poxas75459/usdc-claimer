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
    "3ex2QJXBd5f2yNox1cqpZJJZc1G11QwjtATBenpMo2monHMcKjqUaRZqGPNRSEyn7bSZo7C4ctJMPVDCAK3S3tgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ks8mADskJh487DmWbRXpPytF6Vf6jArbht7EiCEPFGDp1H7LqgXvWrX9cMJhANADihPZZBbSgZqHeqK611iA17y",
  "key1": "4GeugwDF4aMGM7C3C5AcD1hReGLazoLnYjuGShzqoLP4DYrGtRfaMk7kFK6mwVADZTsCSBcG9XCsc7GZToUQeLvu",
  "key2": "2eh5HGHZiksU5tNY8YG3vzu2PReWvmr7hQw8oVVVJ6Q4ZJQQ34TnXAbw4d4FpKoWTC79btgzuvyJNTBcJkp3esCh",
  "key3": "4bAFQ7JtfBuyySz4J16iwPXWYJ8ioM4iqdi3Uc3LBeTJAt47zcTdzhnxsSbVUZMcEmrQ8GB4pAhm4ihp8iBkJTHh",
  "key4": "5xMrnbaBQDnGFXMyC5sTb8VZpc1cjZyzGTvsojbKUJFxUgJhsQ1xYMDXnHAVkbGVfNsoBvn28hshCW5BHs3LbueN",
  "key5": "5utX9tFPWpCbK7uUpDiDLEYvmS31dLScnytFhzF6h7qah8Z5epkA7RHNYVGVAWpoJQJcufqBHK7CbKztAiMZxULB",
  "key6": "5jeGCAPkpgW6b8kzgYxduQt7LE53Aj8pQ5pq52W1Mcv9AMxrk6GB3Q3pjgoa4QV5T2zUAi61YKHFjy3cpZWD6hNB",
  "key7": "33H3CfR6uvuJAn28fPpgfnXoEKb49vn8aXkLr9Wh96c6BtPTNc7cRhA4gKG8q5YCjgFwBSizZQ7qJujrtQkheRrt",
  "key8": "4StDzx2JrQKX1nCAfJqND75Kshdw6ZRZEbVr9jM3MkHSCWtiRL8UYjj7uJWBi4wLo779ey5KVeXd72eGDVf1sBXu",
  "key9": "3xbYxjJUvieeXbxqBGVkzf7CHzXpxwgMBFgLjDaaxRD85hkhhSrKXDEjiqUoEUMEfrqcwfD151aLkoXmQpNXVp1w",
  "key10": "2WTQTtCAWz3PhoroNjY9pHHVHDcDhvQpgyhKe8eXCMMukvN6icAZGsaJuApUT4KoazXNkpBddtXAFN7x92rCPAgK",
  "key11": "5f9UDjjaEoyxveDnUdLm3TZS6rdRMqGkHRtqeDF9pikEggj8vxML23GLxd7wu89ZQHQnQycMz2CXHcFohP6NLcdR",
  "key12": "3asPBDzTxXyZ3Hu93LATmeQrjEVhMJsTeiypEF2ocUMjvNEUB3dqBYGLh1WePEbWfhFENRKAQtnyyhwwNj2YLsBs",
  "key13": "5VM3wVfUMvDS2WuNXeXs9XA9qgVXCncFp5ysGPuPtiYtkH9rBGMDdd85TLkoUhPwTsoGarNjzjd155mAPiHvB5rQ",
  "key14": "2JGR3kFoxbxEmgWNKQvwvwZVTvLEmVt46BkUdZEkeXhqis7mr4Nk7VzptXrz6qEhdb7rpfLUnYDLmdSLzw48P9hg",
  "key15": "jojvDmRVeQNM5hpKZ4Cggtt1Xj4tsfUWW89kyYZwmyZUodEG7fopxRFXCESgeWRJNrHDjfifRvkfvEA9BUqCWPj",
  "key16": "5MfthY3a6oKKarA1zmCbA9EFjaURvys8NhPqFqLMd3bkr3deQCEvpSmC1k4n1SW46TBXRGa6FCtm2mamioS1ygnD",
  "key17": "2w2EPKNAP71HTfLS4TBm9oeqH5voPAsYNkzUCfmW6FQD84SCdFdR4oY7YCecCCRgnHFCrzgGqKkBVURp6e4JPKH5",
  "key18": "5jZ439kBJeQDJBC3MUmK1dAWXiq8SuVME5fJMuc6gTM6HjhFgMTpUKKMCHm8WzKZNUVHTBBKhyQwinF4PV9BrbpM",
  "key19": "2a4uvZJCtnsAtLizcDDqsm5uaFahfbaJKK8gfRv185K49FJxBUXpT5HfVB7V9CcPy9Hms1q3io4s1jAkgYdSSSAY",
  "key20": "58jcCZR1Tykfm3PmDRbFHpBviSfCtKk9cikk24bFakgs8f31SWxM43hmrnwgNWCGjchd2d5CrVTqZhMs99S34XKm",
  "key21": "3Hx96VJLrENs7kztLTr8ApfUz2fnxLJFRAoEFjt8ZYTfAbU5nZ7yKKcQj6tJiU1USxLBZMDZRGg7pFx9m31suEmS",
  "key22": "4tnj6P1WSmfbHjHPh9Fq7FcHM6MUzrTy73WqyQTtpXjupMayv3LfSJprV4xCvE6YR5VA4kzt94dCjLdnJ88PmVFJ",
  "key23": "4KtTvato2sVU5UvWCjrMymYYUBTgH8fkGkoRJFZeNAQV6K9roqbAizMm8u6cdjHcWKDPLwNtKMbbSUU75zsECfWu",
  "key24": "4rq2RDnsEZVDmqtnmBqbkdpbww77YeGDFk5zCAnRddsSFgQF1Q1cQ1BQLXdLk8mv3Pj1X1d9SDbmb4G1GSAvLBur",
  "key25": "2pFGzWUeiianLoEMCF9sxGf2cy9s4Khfii9XDax9c5P5umQsujhwxpT3U7NvcJxH3aCKZZyLPh7TAYYp6P6opMAM",
  "key26": "2R5ctvJeo2NfBEEq8UzivvPgo3WsUq3HB6RHd9c5TRsExbcsefRhBE5Q6mQkUTfe6BLAASNgnkX5nbM5hmcvaMo",
  "key27": "4STqRCMCcNtyCf89mmNngVJZjCVqoB67JMa17SR5APwxjyRx4XY7np5pRpxPtVTpfy9WdAzZ8U3aVYjbxV7Sgxh6",
  "key28": "3SsitBLcGX7SR97TF6bx2pWkaX9d4NAarLYAbn5yCxMf1tYxyiUzrWiowNroQHG4ddgSbqLAXLtdZSFB7sL8Wg2G",
  "key29": "3WCXcaUtpLhEbNDcSWQksMoHaCUtY6gAmTfVvrNMWipDQKvrWWLMVA3bDyW36F9zDmuef45Ap8R6PrTN3mBGNxPs",
  "key30": "4d54HyxQ9KVumfeubYnJ7LkqZEeDh5B9PVvNyZADziTpQd7TnVdZZHp3L1tcWLkWjBHnhEXfcowKaTDaU21uuhoT",
  "key31": "3CSXCoJi2WoPbis52Ni8Bu23HjSrND1LTYUEH9ak87rNiV5iLDxDXANWWL5rpy1DpSK8pj8cym7bqaLxTHv2GWAM",
  "key32": "3dPdCjKdjPaZ2qmwi7pknLWK7tSxq9wrqQ8YHPQgTK3H4YtNFdjotsoXkB6yBo6kjPAGxwwLBDn6PEYcUz1GE3Xb",
  "key33": "2VtDC9Ut2y9AQ89LVEfUPBjrEQjLpVPjy4oQt4Ag7Qry7VbKw98npZBuPd4fcCfF6rdzmMhWkKLXYufMGNVN9Gqt",
  "key34": "5KeCw6q1foZnQUwA24ZWGXQooUL6G5wNdguCSfYbLvWsnu5cBHStnGYWS6awQDhzJDfLaUSWW68QiCcoiNcaZMaT",
  "key35": "5gxzaLwVMf5nUKCeLqFULHc8jxfZ7cFQJzkpkwarpJ7cvbPX64WmE6RFUFFKNHjx4RqnHHwnu8vQWxrQRh7kpECq",
  "key36": "28XnjrfZyK6FE22BTARR4vgEPVeYE4GZC9gVoPDQXiDZpcWMDQKpsnSyTBaqBerCeyvp3hY59sC4ySseXWwDA3Av"
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
