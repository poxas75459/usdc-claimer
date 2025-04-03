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
    "3cGMvCD9TEN2mQkxpmxd517YZFWL2P24yXcjwwVZEkE4ggt1nJ2rF791XMDDG1kxGTDYsDh4EQ6pgPBR2ZNmzvBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WKZasw7FiFwidj4fSKSXePX3WjKevSmwxvEScMqmaebhm6Y28wyEwDo3BWH19uiQort7XpZ57aL6tPCW3rpcxg2",
  "key1": "2GUvQ2HV8HxNKdCsqT99wJJDLuQPj6fYx3oGB4yKsmQ371c6S2GmPvvEQLJTT46oreBpozuoPin9z6CsWbqdXfrZ",
  "key2": "3btT5BhXuLXcb2yrJQptmtH4cn9qhncJvwFhBaNNM6YV8u8CY3oLHgzNiAohBCHeBS7q8zeK7Zn1aUnbP9U7gjhV",
  "key3": "4HZmMPbM2ZB56KjR7zpimnXuFBAsEk4STrqdehR3hieABb19c2B9c2PMD9sjzvtQ63rceLGGVCqhjyQDYszLmyn2",
  "key4": "32EP1SGDTuhsPnszoxw5pCPN6ZYi9w7MJBodVH7WQWYr3W2SAwKdQvDQR1a3uAPAdPMLDr5HhYBXKqZwJtw7rV9D",
  "key5": "2B5tZVeMn7b968nhxcWjS1BvX7ZSefKs2DpTRrTKSQgpHrkubuMukU9CWe9VhKrbzZ7ZhqGRdxZbyijSjAMxBAxH",
  "key6": "4RtDEqTH4MUWGGBCYjnzCgJ8VHKvbHbF5GWPZPWLRqP6XWNEmvru4ZEzGv7nLPcig1oKtBRVcLCCgAEBnSUNh1RC",
  "key7": "L71orLitQ12UQjQcgfYqzbPQm3qvP1mzjRTyWeGLTrMzoCRiVaGEXMrx3LrukJeNYJWfXdDAoSFNd6vDB6LGd4z",
  "key8": "2wxYfdJ9qsEaykU1Nwd1Z8mkMXN2MwCKDNgJJQgh9z8sad45PFS4XKACo44sWLFYGwQE6Waxk1Qx22aSPaZyqr5X",
  "key9": "tLSeF57e2XKbC935pJbpoLN4npfw628UciCBZk9tVtt1wVgfTUBZtN747Zv8fViZt5r14g1iUXgRQ3xg3i8FSwf",
  "key10": "W3YJQWscP8B2heiSDFzqFfnoRmfcSBHSagGpNytpXDRMVjgRuh8wVTnWfHURmhUQSvtXqgfEoKxtYFBk8JJ1LW3",
  "key11": "2hBFNqhmFWYWM92TYJnv2sCdXtdxfY9dc2q3zJLoH8pSt5tXEFu7bedCnkLpfXK8F9dv4jYTB93NBm4jEvf5wHJM",
  "key12": "Y5JQFKkXUvg8a3gcgLdwVtMFY8gE8y6J5xMo3TDonk17JooJTQtZo1PjpE8eySxKNMyCH2CBewZ9PD5JYYCTusY",
  "key13": "3cHaTHPg5iy1THYqUszB93Z3kjhxAx7vaf2onuDyCH3SUDwBotMNGV3JCjkaA15k1YiwuNMFxrZEYSooLzyXiuJB",
  "key14": "4Efq131gBik5dE5FvA3rzLefciYNYZMtxbHS2GmKzjptFNaq9nFJFtzafQGC3QiaCNyYRRKFzjoLa13v3xNxdQqx",
  "key15": "3fopQKrijztHmyZmK1MybH6Dco2mtw6zJk4hSHrtQmENHNqDi25aQpaWD9uJmotYgGUbTrxCaDBFeFC1A484xBRk",
  "key16": "2SrZVjtak4x6Jsk6oBhZ1A5NJ1Dyh5oDAYZbiu2WcsCR7w66LY93v7WpqJVn1UikGHcqfhq3BhWdLCToHaEiv8yr",
  "key17": "5xgvqzQccQccs3HJo95gzGVMcXFb9zAdXJthprwbkf2jyR1ZEVrBkVsHR3zuWXX3gPfyfmeqy5eHxuHWGtmhs1fY",
  "key18": "5Z26PdYay1CEbrGYnwSwDt3vVLCKzNxyrKuquMtyosCqLXruyE6cMqtGEEmR2ZUBpT4ibMnWHBvJbmzR2jmiqzv2",
  "key19": "2CzPvkbNyJhvPahGgaUwM7UAsWtQ6bk21JtLN1rJPXwmGdKt4jP1ZBNCU5b5zRGJvLxVwAg3vRt8hT35mPTjR8Sz",
  "key20": "3B79dS7afU3w8jLqcaUEXLKRHzTk2NmutEQjY2QxDUdKnNo7M4MPNbLZ5KidkqCrZ8rCwgGQXtsLM3KyvLMyi5Lw",
  "key21": "5m1r2utFkFsJqGtwo4YYHi1LqRArtGwHxsTdVdMfc5or9UaHR9BJvvi2K1i45w7Bn2c3SiVx61Wh3oTUSbhQJ9HB",
  "key22": "4jau1trnnQrDGbBjr2WmPM3GtddV25k4ZWcT1tKdsJZNbQrpKiyJDivmDgbtUvThzN2DZdhCSDw1niCB8jp37YSJ",
  "key23": "4JV2VLjtt8Gs3wQWBg9E23hFFms1dEdGx82Yxjynk9jbCWojN2kMXzc3xE2sM6kjYiZe2NzoPFGiYQE9Qv8CAGJ6",
  "key24": "3WxHmy1mna5VCVV5Y3UxWV6eayMomukuHszdB4NtRxRmUNKwobuZmDdwYyFFDdVYGJCzg766mDUHgMewdRPncLyr",
  "key25": "59EgDQLkRUzYszCgYa25XSULQy3nNQx1AF5Ryugxcoe47KAajKX1jsyCVqMWXNeNLLJixixSvjS64quAUiuCwjeq",
  "key26": "28NNyRaaAeFPQbojEK93SYorqRdyzSg5EWsS7iTjXDLdnTjcxeCVR6exZfrPaT31omGuywaKro1DuXW1ZTu6F78i",
  "key27": "2QXNo1oyNyXohKFdvGauAcgUPppXJL9L6e6NCpx7AZ634GfK5TMppaHfeEEYryJVvK21jbEAWwU5G779h1Y6fkdy",
  "key28": "rACA7PUHYeYmo4zRmM8ZpwiWxiiRJsAAqtk9beMy6rXqqdJ3GvnsYHVvoEoA5FWBH9JnJf1ZKrd2bta2643nmSi",
  "key29": "5RZFN12SgYsDoqwK6n8BPRcfAmcEMaoVKmGRZif8sBLPdyBXDmuWipdc2hVqVDzrAAXnBeP2KYAeuNJ9dCCS3bdB",
  "key30": "4z1K4hne6msYYCAhuTJtA7g8kGrZ7vxXMgbDEAJjt5vD4bRUWbGKYBkG1SY2yue4XJ2WNFXSepAuKXMwHHCZ3icb",
  "key31": "3ooS2ia2RPBstPYD1q1w3fsmFPzX8mh39BKs9mxAjJm1zG9heuqGSC4k7iuXur7XpiKtWc2qp9xQkbrGX4iLhjGe",
  "key32": "3TdnYfg2xyGrvhyd3GGvXWoPt4cXPtVLtJiHMB8cSHRfE3u44y1PQwXQ82vqPRqyjjW9Az8sHRvruB826iujXRwL",
  "key33": "5XYrKwC6GqXXy1xH8wtWUiVYdzZKitmZ4o7Y6aEynSJ4Pa6SvS8UmwnHi1htVoVe1Bg7qwzv8aWee15jpRCsLyVY",
  "key34": "4EAUWUzr4eCFHUgxyq8MtpXhg9BgY8ot9sYEC9sqvsEZB2sxNQgQUyPXsU8nMqvwvAfAW3mDuxpxw74CRnB1dn3q",
  "key35": "25GZ5RUauo1inYCexdK9SygnAwUGEEEUB7VrHJPzZGsgPuxFxreBVmG7xALLgXftwBRZSZvv5ZacteBBEvMd7miT",
  "key36": "3xYoLeiCmDDn8dAyNtVWbkwKGi7iyt5z7FuP48f7Ue1fG9ymZhYfvccxoyfm1NDKmoHUzYeFDTWfKgccpkBf7jpP",
  "key37": "4j2Ln2dCvQjp7e6S4cF3Zm92AkeyJhyNyAe2jCczchRznaSGwE5G98WmramZupyTfAwLmCNydNoogdfnXC3LYghP",
  "key38": "45kJH9YEe4rtnMoRrBj5SdJrUro4BEhmdZr3rHBEum4HaYsfNMBWnFDarMjXgkgneT9jvJjBXNXGZintRPJ5Av5X",
  "key39": "xn5pSTyYhpC6q5DtLT6jipdFXyoLDzshH1EKT9Ufmj7wuvHdPDGHEjRwok7e6rDBME4bj9db8W5qeXAHbyQtLf1",
  "key40": "3hmKJWcPyWVcpSKHwNbbUcJvHtQ1aUQ5pXeLD1eJQXgzP2TSC3jSJpfZLseXvhEGPUZHMNv87JWPbVZZVYBxi4Pd"
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
