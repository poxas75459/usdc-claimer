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
    "63kfYHpQ2Y6iQj5yFmy2CqW7BXUx8b75cye3SxZkGp9Bd6H7v9rcAETXjPN1hRpdwFftPspiUqrRW3Z4zu1J1USV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YxevRPb1vgKjXsgs7naWV8yxaYg9oCnWVheB18AMWL6Q7HLxXWRB52taroJd8S4gA2xkmdF2prpMwFJBSFPhfoi",
  "key1": "RoXhZHx8p4Z6BzK4QuHioSwbAWacW3ZVXHSnJTD23j5bkC5Qsnc3P63GPX3XwLgEPanRsv63V7VEhmm9GdvDqfJ",
  "key2": "3yPYtHqBngu53JPiBYQgsx87A5qXsJPAaHQo74ebYJyBZDmqZ8Yp9S7FzMZa68MAsF4GsFvjyMQMZcyGvXjCZ1Qz",
  "key3": "3fpmytsBiiteYYhhNSMt9WkzLnzXiVyRYoLNpTZSGwcuyTXGMxS24bqNkfkhVqFD57qgmqTdzHNSRwuqV9DrFmFH",
  "key4": "En5sL5Jmhk4bv66fSnCQDxySxd7nCvbYTQQYkiDtNZg16StuJtHNTKhJ2QwMa7b5J3nvcMhva5LXRngziVM6Uvh",
  "key5": "3JuhP2mQxeAsMa5B6wpQTcR3tkWp5Tj7RSi4fS7Kr2o87oEqAcY97675ArpcfYfNCjFANVM7AzMnY39D8UycFeoB",
  "key6": "49vexYEXB1XYYtdtQHHEBGgsCtonNNG2qe6eCTF4qYUxWZ3MJCQnkQY1vMsHmYU31bkbmbDDobCefYKcMFRoTwke",
  "key7": "3kgtGpxhUc9bvHqZfCD3xjnAfrwQ16MtUw8m7yVDxnKrmL98sGsZZztBdZ8t8Te4HBT6JFPZKVgWhdpngNMTwXug",
  "key8": "275kn79QM4R2wc3YEtWcXVZXKz7VdCRiLSK9x1eTEzdtV5WNaj6phV4BZUpRCadhHEfBxY3Dzn8Lpt2mdC7psdiy",
  "key9": "3FTzGSDDPeCHL27yvmnjjuHgoRLz6gnSuj4QZtC3JgNzL47s2Lc22TjsYsY46NpqAZ2vGRnEmkh4ynLV6jdmH8r4",
  "key10": "4vz52HdvnL8TDQV4H3tHmVjCqy4QP8bKcDv5yF7KEM99RHnyczdJCgVf1r5R6Lccwhcu1PSwM9cLZDm961qmAVjY",
  "key11": "4e6UJdN9HkDUDsSybfb5vo7qiyKbbJNM72NyQ4yMSinXAoiMvMparQv1KgT2bxShqW38u1guRALiahh6v3k61PL",
  "key12": "5myY4PCwjwGmRkeC1s7MUi9Tbjm9s3Ug5mxT529iPE6rEhY1o3kUdq7C21a2yBYRsGw4GFWaPRFQsYhV5fs8BrBJ",
  "key13": "39vGbhSQ6M1WJPa4KqUSu1TjjSJNZdraoK2kPgv44Utvgm1VdboLeTaBrMtyyphT3SEFh841D7vVXG2hDkypCGfx",
  "key14": "2J7nUKsbF7GLCFpxhiPtAnwutiJE8t57v4C7DBRVBMdc4BNfRXbJL7YpUY9fEKUho9g5F84VN3Pg9d8DjKnSyX69",
  "key15": "3EG8BhXeMWkRLp1r53Zxjk6JQD4SQ7J7CbnXJHkMtSMQitqAn7Bh6CwBAvSZE7Nt22jKb4ymqvg1ZzFVbMA5kee1",
  "key16": "4gX4Yz1QB8F84h4vt132Cyp2oqjm74txQvWxneM99D9YqhdBebu7dWihzYtuzE9fZC5H5LemzW63sPUSsTt32U53",
  "key17": "4ijboJQ6GUywuFVBLcfeqm11x5343bbi52XHvgJ1BmrtdtRdfrpTGV7baK1pBWd6tAjWvLndGFGnRoMgQNhpgSkW",
  "key18": "3uZjdhb56rrbgKo4uyvZzMhrqeEowotMgjf2N2cN8Nv6Qh5pwKqp5FK8S3x1DCR8qjUbyN2qQGR9jKLA95HpMaqL",
  "key19": "4jU4D7rymDbUjcF2GKq2g18wBbJ44XjkaKE8U5GVsqTJ4CEcHGQCsVkFRPDStRz8noK577jdqhU58nWfdV13Nuos",
  "key20": "46FKLT3RNHkRTeJBM1DXoRwGD5JGWjxH66ay4PQ3Qb3odvJA7yFDxpB6kDAHW8kVcoKYRqoNgEN92vRSaEdbzUoy",
  "key21": "3e2i6AtNs7aHtj9TDU31qE8XqKUTz9Jj6jcgSzLmmWmwp7fRAPFbmurjiXJkrpeoT9mzDzPi2LfvPK54pY9NXFjM",
  "key22": "3BbT6uPH2QEGZtnmYhDMfRwBj3QRzSxaLvxs7rx1QwMitaouroasNgNd3jmiQi2FcvV4zBhxGwqA2LWveFSmp2DC",
  "key23": "2C1VnscdzSTkfT7BRvA8Lh8PBeQTKGX3i7xLc3x4NXs3GdueHyBtejqw7eg3KbPi7vZ5Gt2RCrCxeGzce9f9Ky6m",
  "key24": "Ytb5cjJ5BnDhC34j1grQjTw3qFhEaypcMiVGKnKYNX2rDMSysH2FjRhRnNYZC5fCXTjBTvFBbbquDkwjmm9z7pj",
  "key25": "EdKMDZoustLaMQsznmSmswpYtgh2voZEahPQEwfy4Ju7WFcTNDb7v5rMH2XDyhgCwL1t1YvSqy5fa83wSBkui15",
  "key26": "4wLYrU3kUwnYSK2oV3E5dxDRGqpvqGEurHHzgpAzNhHEfaJhnKguy1APLViSQXunYGdCm1pv6vpSMxBMyJcxAxNL",
  "key27": "2D9EHBHBj7532SVzdx9ZwmnuynCwWjLjkazaLLNXeYFEHZbKGKuwL8j9wd25tE9Cdh57saPAyFr741jLzMuevXZv",
  "key28": "5nqW5ocoBXngh9bdT49FKMaU98UfSob5cAocmqiRHCXDQ2dCB6XeTxW8Pcp19URacsgBQr81WFNaV7cSF3hHTn6u",
  "key29": "2UuNC5oF4hgqWEr9QKTbWKgxHunw8KAx61nYKCgPuJSRJjqZ5TZXgJ6jrAhzQraasdKmnecX5a5jffrTQt2pPXLt",
  "key30": "2DYvQqFyQmZvkJXPG15tzQW1wpKT5gpF9ViUq5MF5xpn9uYiVexF3njcMRqMasQTmEd67miTGHuHeq3iRnY2N3B1",
  "key31": "5vFBVS8Q6bFu81nv2yVYK6KA5kCKoK7kHZstJhSPmqckRGFVq9PkxWjoZ5eEtaKZjr514fn6rADUReeYFdJFAuZJ",
  "key32": "3AcfAdpodJn8AVNxjf152knaTYPVWStEZvjUJRLCFBTpEDKbHzHbkxzSr8jA4ETycH9Q8Agw8zihY4vccxWS9FeU",
  "key33": "3o7gcpW9eFbzfGf5iagk8Xfp7maPySkGqYrrewiJU4vD2PfE4jbEsRHgUaJ7f91SmqYnPGU3GFU4WdNeFNwQ8NSr",
  "key34": "42wJfyMbts4NSTvj4bGfapPmPQvopmCXtET64v8tjPCobMqVUYmVNhmpuWbDpoyRaAop318jxJFih8aLzvf8MzSM",
  "key35": "5Dc9EVtqD4Gedcf3UTXBS5dEVmYz35Zgw4AFVwwRemmuTS26Z2VxHc2E72kNdw1tqU3oSVbJe6PiTnt9iiabjDvC",
  "key36": "zRYzawBcpyouJ1eko64UxDGJZGar4JNpAqCYq7oBaNTnQiefWEhThHPMFqmrGqjxwMkAhTZ9TxZ9PRjHLayBXNz",
  "key37": "3FK1xFMwhpAAxxtGRymUsav6wVtKAc6A46bUgVrTL3vx1YJnHRhppMhTe6NyrkBGwij2Sak7rRfGESyyA6xPHyGj",
  "key38": "cgZ11gZ6PpnJsJ7VUpNScq2Nrs4KYuSvJnuJgFPeo34SYeDyLVef3yLUypMypzC1YK33Rs7sgUHv1w1Z1SNrNvq",
  "key39": "3nGaH315qyHMfPsoMF1aRcvzJPKUhCJmUxDsCjC9nF35SB6nhURPiMbp6NrUzPcn6VWYpAjTjQAd7g7iYWeuNmGZ"
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
