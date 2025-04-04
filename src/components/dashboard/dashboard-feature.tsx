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
    "3ZYocRpstYZKS3YGPBogsCAAmeYb9NkZR66AkubkDBm9g2L9h6BK5pLvXDoq1JGwqKhSyMQ3qLLKaG8ZkQszbFPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gKpkuAnQfeqDaffVZZZA778ZBhKFhK788BvVRxYQ5wjNQG6wGMNTbQ7641H84VBx6st6ovXCEBvYzQ6djte1WPw",
  "key1": "4M3w25x5PwG3YPrneTdsUPX5UFHSUN5G52VtNbYfyEbwvD9BauqHQFdT8x6djb1t9utCcdKPopcZwaMDCmmWvM1F",
  "key2": "5HqqiKduBKegHpQfQp2fHSCt6QTEKFEJ88b2jxda534gPJxD9Qmwm3cKsBm8XRqFt6RYMs3uS4pPDTwxVRgMCaNA",
  "key3": "5Vu3uAvX9xqwSx4wdG1krDsJnHaJRikHLUgTbuarZ8s83wXfuxfV6AeLvfcqSXWZVJMCPxq1DJYyB1STuAT4P3hJ",
  "key4": "3r52rSRmSwVvfMQeo44WpDAw1Frc2uqZKobdBHMPCs8z1TsHNeyTcfaNsqG4ivKLcMJ8dE98vGRUDMPiVLno8XuL",
  "key5": "5opqtXpyLek54GGAmSK4RUXn5qfPWtzx4cAnKr4Cg114FjKPsd38XsvNS44H22zr3utWT1Q7CBJWTWeNhe4HjC7L",
  "key6": "2ziTDZLRFn4Rcr4FAb9Y1T4tih9jroWPpBiHDspYApzRD8oE19oBryVosfmU9gNJyPrdvQsknayrmaCXrA6cd6Fm",
  "key7": "64jzFVrGv6dLPxrMEjmBAqx8jyKVu3Tsx2Gtbt6S6n6ButTJbtEMnqF3zzJcvTSzba1h4jyeqV2LrvuaKyzm7wzY",
  "key8": "1w2Qkrp1qm1aGa31N89ktdKHvJyR71oL6M1rFtMbyy79bAs9HNH3562SrpqeNoaF6QsU8wEz15dJT8rrsBspneE",
  "key9": "22gTj5LpL9Ft7RyoffsK55zGpChQCg5F8zUcypA7iPrfuPxhuXokg1xPfnhss3tg45FYEdG9Z5h9q1vewKCD54xw",
  "key10": "3Dqg3rQxmSQ2pk3dbnsEuqngp56QXooefTq5HjSFuxiYmvtjQm3rAncBgKF3JLGMkTqSUJbr5q1wFeBcvpTEfStT",
  "key11": "44E2HBV9cVzzj2yuNscHkN6hzpPgBinPSktV46Z43GvhdK3JXgwdFstm8ptCvdWjXsAEfBXCikfUxnYEQrrthUqK",
  "key12": "MiwtFbaxJRwHizk5NW96fY7UtWxaXG3enTanfCdN47uPSaCMfMgFuU535RtLLkVauhEtpMcgi7Rx9xDcFFuhSKe",
  "key13": "3Zeqgia7JJ1DoKw6sAk9CaALV8SvJeWvcek1oasHQSfHf1xWPidcLe4dZyUNvkM6Roc6DZ6Vv3fTkM7YrUpWFMd9",
  "key14": "5BPGtn8owJGneHLsRv3CGSGuvVXqQUgcPzxaAoQynkq1uBJ2mKXWPXksUhyAwYfGdyK1TrMMdUvxGR6FCtqu1HMV",
  "key15": "9BVX8TJ1qyDDWe2f1sSMzbosMvkrZnfmM3vGb1ET9ijLHYXhN8FkUDBDDWhMdPmej7XYqMARmT8CpVYyQFrJKsL",
  "key16": "3S14yktwhnad8aV9LSavWcHVEQDJJRvAJJ9LzEZzWrgB2TfmsD7FqQFKFAqDL1qgZkKPmmDbmFPZXtqfBQ1mqi6f",
  "key17": "4BZu3gvenmW6MPdiuSvdJpV4idFC8LvHJsvHczszwnSp1iwvS8ignKZvVhSVYQ2HopbwE7xj6vN4C3A29tiF3nib",
  "key18": "5i1QocwzNVxu7ybdkGMK5rPupQZPnAAvc5A6QCaphaRpQMBV8yJXApVLrn9PoffS9qqhEVDNH8V7teGUMEmZA6dg",
  "key19": "PfdQgTTvkUKqNpKCXBBdKod5g9C9d9rk3obTbGJzAGYAgV2qCzUdPGKJJS5Lh2cs4UaFSjKmuLYsVxKtgKkhub8",
  "key20": "5qdxnunTLXyLHsV8v7dJhD192PjyzdaCqdsnGzUF5rEfrWEwdX5CY8F5Mek2NNXZ4TcksNbmDj3MiExwRCaRWJWS",
  "key21": "3tataARYxYz3hm6Wry6wcmMjrnRki7z1PHbA2GRGKbd8U8t7JVKgV27vTHZ2Lv8B2uGm8JY3wZKoN9nrbNooEmkj",
  "key22": "543vj93Nd2q4yNBocCe1i1c9ScNFAhkXbEjTAWU4LimbPtj6C8qjf2bzKrLNCaWK55GnCJUMN7ZNkArbQcteLtzN",
  "key23": "4Cz9QHZUnQ4e6HEKSZWR5pbu3wkL5mLGetzbX2BSR6ZPXNNR7HMGvmdz9DULhXaPhr9g3sCrxqfpHuByHXRbNbLQ",
  "key24": "3QbLdagKotnm4VNsvNZW7PtSR8RqPMCfoKHZYF7WZKbgzfgjgk7fMRczf9sC66PRR5bJmUviubyF8i6LXrZvwqcX",
  "key25": "2DHyXEX3UNKoftAC5NRzfe29uymxzwCTbyfoPTrHaRcqgJeYxA6LiwvdwRJaZChzqtGM9cUngsYgQj5fUabFEMt4",
  "key26": "5k2V6SUpoXguLG4TfBbvNDrPjb6jSYame2ah4t8YUqtFPGhdnPFJ4SBcmdfoVgjWzzahDxb7DqP1tUwLyJogJKAj",
  "key27": "33sDATMHmv2UFNoFj9tznh7vfFJq62YHV7FLSB9SBsQsKmD9NLt8xS8hnQtThdvMSdvzGfgumzXN3ZoSYnzwiSrE",
  "key28": "5WXxjH51o9cZgRuR6EWzdUgCwfSXqcGffgUv7nnjiR3KXr7YBmKTjRpKzLs62utdww8Yzr86M6NmVAhhVkwr7i2J",
  "key29": "XBBmXJn4QdxDDSMEC36g5vFcnCkodbacJxHuEYMJzZTvgEYcgtCYjCRjbYM4x84hmuBTdt7WJuf3scqDXMJnQ4y",
  "key30": "3jpREaqvAWwNzrCxFvntR3fdW8TyRvViMLfc5mNLsSqer4xHRH7tiNqh3kQrrGMrk3KsQ8MQrvRgEo53pod1evx6",
  "key31": "3ytd6cvZ2tHuvbT4NwYbEKL7YLLMBnteTJxu8E1Ek15U3bBs5WuRrFozEVRDwtnGNc1TVcj7zJiW2eEd3LBsz15A",
  "key32": "39DE9uPNpFHjs4VeayyktzPM4feQQ7UNiweZMhkDkadyFYL2Z3E7CvaSodoihmV8GkJbdxqFscKCSEHTMsGcS7q1",
  "key33": "2oHznxhXoKYf46ZUoEPh54m6N6cjCRuWAmLbnEkvHCFC1RqEu9E9YYDGWmHMfhBaui5V5d2pybwRDvhFpct4B9nE",
  "key34": "3SK4QouyobGakvpmSvAtEawvGM5jMaxYbnRyY6ddSaSYo5NWq28NVyy3ui9xGARdmMG9MEKeEB3xi9fMdNdPhzMy",
  "key35": "4DzPxdsoK2y2Lbak5qjgfFhBfvrcHnr3mmEgHGWs5uuF7FCUTSUaVAFmiZS7SoGo8h4tkhaKZRdJMqpWsNnthEk6",
  "key36": "3ycoAyfZxytV7sD2iRBEfQ1wMgtvZuFW4dS5WM2xWzDoTjc12HgHTsL1EUTdim3QyTwsLxFmyXAyr8gnn5vZmDQ9",
  "key37": "2fyeL4Ee7XdRjncgKBrxe67RrSUMwTQDWtrpo41mUje3PBy8AQFC3oNrvkWxkXTe6zp8mQL3BJoLCmhoJkaVnyqd",
  "key38": "3fbremqm2bnEErd22vefqMzyi3b4SjiwAZBZCb4ETARwfF9xnX89HRSHRhLugq9joTZ7YkoHp99ak5sdsmGZTUka"
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
