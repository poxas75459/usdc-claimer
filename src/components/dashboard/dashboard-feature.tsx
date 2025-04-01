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
    "2rLeJBDXtu9tSbYHE4HnNt8MnQQ81Khd8Bq6Efvw7epTJh4j7c3nvbGy3pAoJnBjgm4s1TA2MCQuq3cy5cbkCTry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RtaqUHJN4cKqRWvGSHpCsTRnHzboFdTPqbK43teV6iyFEsGD8HGMfQ1wzqwYxTRiHoHMjipBZfo4mN6NmF1a3LC",
  "key1": "2XwW4rqu3Fm3bZDjyTSKAUwDMgy8xUJXHh1PDN9z775FjfmC3qqeh6B2xhhaCpDdeaehzNnaVEZfd5hayLLEeN5V",
  "key2": "3b1QoENdPApRzQBPNDyWw11ncLhUE5XTEQiCyH19ieAaaS2VzLw3VQsMrHhmAChqHSfKGWJn48gbFbN22FdGq1tA",
  "key3": "4hV7M6Tc7nVkb1bqKsuCXCKK7TugBVKj7oi54yKdu69m9pV5TSWKQdXKx7VEPpWTfojRLkZpnN5gDtEVBzyQfeiy",
  "key4": "32rZuPF1zPcHdmYTg5bEc3DTm4R5cGrXdTTrRkymZiheV9HGywViopzv1Z1DDHvxua8VNo71A9cYcR9eTBHEBtpZ",
  "key5": "5yW8HpfTS6eqrH2W5qQmHCKzzVpbhcHLc4hWCvHRQTMtR66gsYf3CsDs5S52cxaF9T2Usz9UfGeV8zEgoRJjFnUc",
  "key6": "2LysurzQbwZrjsU6E6jnxiRjvqoMVDGm7LeM8FS5aSXvAZX9uGnaWvGH2zF4onffrxgyEvACmnN5uL84aZMCamsS",
  "key7": "5KeYi3nnL4snssY7iYE16A5vLFDRnkDet5SPr81ycD6ZdR5hYWSgfbvdjkSbQmiRmw8tUFp7KiJNdGRT3kynzVeF",
  "key8": "2hPprxVeyZ3CFowJBggpJSCm5v27pfMD4APdv4Mj8jMpurugxHq8aJ4gyHHUd9waxdvMMv9QyLALExKDmSwB2zqt",
  "key9": "3P5WX9UwQyb2C94HRFak31dGe1Mg8XGuhx29TfGXQa7RVytjsed1gDbH66iQuyWmJiG5kvJgsKsiKvWa6VEQY31s",
  "key10": "2yru8JFbZSPTX2hRchkhxNFTfQBEFEQopDccC1CHKNbFzdvuXgDzHK2qYTZSudVuYh8RJAwkKd6ywXeXcBYCAM21",
  "key11": "3372e9wWhxxXxcJqsdLeYmhsz6nm97hSqQ3nxXTRR8skQieCfYtXCKmDGq2EeYYdm29GuQH3mTKoozwFwKggUGHd",
  "key12": "nH6RbH8BysAHYYFHegEpAPgGTrKW84w1zte9jfGYaFd9SJeYFp5e3UigrhRT5xadWf1GHBmdffSs51MMZR7Q4NZ",
  "key13": "C45JegkXXzTxfQWTb66mvNiXdmDNFJ7zBpKCmrTvQWsgJMP1BtxM291t4JfgVPksTfW51jukovD7FnaYDPNM85y",
  "key14": "5f7CTcEEfpJSLe2XCaPtu8pMoFv4oZkMmVnAhPJmsWJZLrPT9JG5jVygEqtskUBvCdurxULCQ5KAykKJCUf7tVRe",
  "key15": "4p6Z2zSaPdEfbk4vGSAqeAUoxN6C3pD4AFeKPEHftqDU1iUy1xHbtdGryXgJT8bDQUUgxXTPnYqCcw8waVU4Mp9s",
  "key16": "5A6j4xxov9ADDXbnW5GsPAoSrAyoADBv4R5svNKuUEN6R2tyHFG9XCuzY34mggsg12QfL5nPtaUhs8gHofB5S6yP",
  "key17": "5TUMPWwasdxEYvWkrGLA8s3WDgHHULaySE7cDT3fBp1KmTtFy3y9yBtpEcKuMzNLFc5TmwS1KtrkxezrpUevyoxR",
  "key18": "2i4STR4CR19ovmKoD4yHDiXnbYmS9LqKxBdSqbPJFiN57e4S9CdMDfzWTGVBjViasiK5thwkdQJraPseY9Hc5qHG",
  "key19": "h3kL4N55hisjs2bb4G7i5dP91ywzDAtfZimVYzqqs5qLt6WEcrNJLwitMzh9SWdq2ec1pnqDcow7F9L4zULchRd",
  "key20": "4mpXJpM5ELTjLG2rUJZkFJgTiAnRioZKWyEB3kwJiMsJYABM8GU9forsfgxugShhYsnNb8YY5Zwxng2sf8WASZHg",
  "key21": "65rSPMo5dRfXuKEyH21FT9tZHZJaSBnZAwHUqFe8EM6kxvdP22SpqywRiK9TE4ShjY4Z1tNrSydjnE432BperCLW",
  "key22": "23rpTof8QrfybCGLq9XN95AcgfDbdqTzRs4FTbC3ir4vPzxkTmZVAvGtZbMHWV9C3FRrp38nzcSTabk6HJvLmHHb",
  "key23": "44EeVcF1FjoBB3xquvGzEFRF492DuaX5bQopKfHDdTbWsJj3J2WrRnufDiJSEcv8gvXxaF8yvss4Qnw7Y3VvcQt4",
  "key24": "4hbCTmnNLi2K4zdAnhwWpAvBDawaUhjD8HD5MD9QCqzXMSbDcyy52o6FjaUz3phBKHA6w34evg2NCt5dNbdXX5Tv",
  "key25": "412uYx2VKUPLV7yieGijTVsjWbiQ9UqZZmwzLmVrb31WW6Yr6Jymzwdk5j7CuevqRa4icZXMHjHMShzMyM3Yjjgo",
  "key26": "5328N6S1KrPp7ZEtawppG9NjcMQ8SzRB7SnmS1tWwwKr84yFvD516RskpWU59VyGgbZwc7UPGhS1XWNcAV6S49UN",
  "key27": "3rvGxiZa2naxdsKZn6u1FoZ3W71dBdeYAzVcvwFkatUWaJ2xUHdJqP374woZFtVow9TjUpjm3dJdJ3Q7gguF2TEP",
  "key28": "EJ2K2Y5NqCUZcFaJWUkPWU1Jz5Jk9ewXHzJALKvJBL6W598MFDPrJR5qdznsJQHGTvqbHwT8ghV4eqZScBUDPq6",
  "key29": "qNBgcSyVz1Jw94m1Urgk5WYSDX7JErveaePm5iKiPFXxcfV8yZiz2KhVQ7UL3DzjWkCK3HzQZNjmtftBmp3ghUk",
  "key30": "nyJQvXmxjjt9yv1xA4jJ37PtPHXJfiqNZLESmUhZJZScbXny1BK1npQsnSrGhbyTuiiRaENnATq1LfFQYqd53sP",
  "key31": "YW6jcyn1AcHuNCg6cdoombA4J9Z1pZGsxHYajpyXWTMhvGnqeAvYdpPq3Wj8Y85pK2Q9nSrVPFbhDAnmwFwdn5x",
  "key32": "381uVSxXmuukQVYX3UCcLmVpuoW9F5sUHEFZ4QzpJXuMdU5LknuNwry5zCLbjms7eD85qqMLdDch2fXUyUanFze5",
  "key33": "2KDbeoQUCQHwN5uK7tSuEgPnJfgWXcrczgUW5KcPZmVYwp9FAwTwbQUR5Ndy4wAeSqFHUQJo5m3on96sDEqcwNrQ",
  "key34": "42gEP1kDeEyQm9CbMRiPjX2Y1o4my6TkAjndc1iqLEhgicEeYtP1js9i2hXsoBLmJsbY3qN8Dc9cCALRwm5xiXtq",
  "key35": "4ib5DBPYTsJHiwh3zfXxqGsfHG1A2gTwxoBzL1Zr2v8ZscYoY6nAZErS3NcUVvEQqs6kdbyt3dEbQ2kb9tC6mvNx",
  "key36": "2kCjUVqSZ9FpPEfbYTKhwtsNsZYhQSit894WL5FqjKKxhfkFHYBPuugJYkx8nyXrqXVuuyFkzfi2wj6CoFTxh6mg",
  "key37": "4rxFCyMAQZzHVdftnCGsPFDYr97M3vTCBHhUH8uTzPACe5CbKXQv6Wv5asjSV2euzr2xktWLJibbqAAMFyk4fNpm",
  "key38": "38FRd2oj436Z6oexeeMyvqRyYDg4q4LJRhuVtGjLLUybVNdxDr2xX21VaRkUd2cVRRuB6Np95NZgeLCPjJhPrTmU",
  "key39": "2VU3EXqYtMUgkTr5WNsT48f4whxqXKfwvb7wsGenLccMmRgk3TxVZNiJT1xCb2kaNTSJcqyd1MyhVQLsFGjfaqk1",
  "key40": "4kaCkwMvqjRK1Eoo4afZcvEkxiB7h8CSWTHrQjG8fDYi4EBcaj1qXUviBqGXKbiHQsXA5PDMnreSZrs3mdXJb4sB",
  "key41": "2TVGWFFppdMxzegqWVD6DqB8D4ArG9mLzoC2HKPcXvCCECoWPGEPJ6GFsGiNXxixcBkRXBL35TYjmdpVo3tJ1AUa",
  "key42": "5ecFtsyhaPyAW3WYsiRuPrh6Pfd8PkdkWQT1U4Hhp1Muz85jNk48iX2GpRyuM9wzaqg2F4GyTmtNhVM14gPb44zH",
  "key43": "5Vz8iT4NesKr6STuP3gWSM9U3wFLbK7eTPasAsci6hqVgxSmhbSeUpw1XzwcJuZ6beJqsDf5ucLbWvbVk5bsd7JN",
  "key44": "5fJJVRiLL9HN1tR3U8qYhqdkrjFEisSf7Pyscw3innBbKgRKCiPgjM5cktXJK8txE2axaFbBtg1gH27MF5SqS464",
  "key45": "YLecxnFEtmyhaY1cfN5uLNoHT5TV7pynyNuQARtwUPwtifQCu444CZtEdevrvyoh59qvxZq6ikYmWo3ZMgvFFA1",
  "key46": "3X9e5wuHNZ1gwQcngtjRwgjwAT8GLwdxGTq6U6CSPX9s9uvX8XZQF6EnxuZZkKdftwvcw3UoXaRVLGmLMgUZEFJy",
  "key47": "2SSStLeoWxKus7GkG18KU9Nny5w1nx1j1XT9vMh4eManVekCud8kpfRCooXr9575FPpZNAHE89BASFeXvTxqCX6L",
  "key48": "4ieSu1KMgHGPqx9vt84a6bp9AUUquamdTsabcWLX1KcZkv27u2wgT1MqT7VjQXDjndDVP24rtoyuTk6ZRD43Nw6"
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
