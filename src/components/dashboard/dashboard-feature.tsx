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
    "4X22LzzkxXvbxehZtAVsvm8mb2Qy3M6WYVGNgiJ5fbvRwxEjwMebHHdu3Pr3R8gTTng9uNXNaPRTcxGLZwFXtrgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PzfRRHVxfqSN7Zx7qnKnPBtmEfLg4FUNLCaZhH8DUcgwpBucq3MJtupifkxpP4n65d6vY8GkUuuA9CWntL8QMTA",
  "key1": "5GVJmhetcERy27Kf8bADXd6nGJqy65Af9BKW2tLVQnmXSJTiod1bAxHBZRMsMnXWNUSt1pi7o6WZ1f4X9RdXQgtt",
  "key2": "3FkKJZ2HiDuLXDyQzHEvJuB1wDggyF4QGvdQbRWgmM28pd3KaEUeXMbktCn4wyvEByq8rJGP2KKFDMzthJF6ms1T",
  "key3": "2GXZRvsCVj27EFpj8xCYfuyrX5ZSEAa7snnRtjn4wjwtsSZNgETBnQQTbdR6mBEA8q8hmic5Snzx5G78wys666Z",
  "key4": "532b9acSGXcRb6HqCRdUJ3wwwewZ8wdxDPQUYU7MqwQANaed1e9awdW1UTqmjiQmcCcXdv2yYpxWiTubLEzmTGQW",
  "key5": "5ZHXLM3KmqwPaiJY2VmdJB73Jd2jyWJGzL1sDAPvZSxLT7gDe2kFBHZWxke5jyNoF3MXBqbLqhCzNhBqrDzt8GqJ",
  "key6": "4WVj6MeJGJA16GKQWqZfoNe9xE1NJErU8gC9niZAaXnqXRbyHmrXEatAmESQgTUZPq3NPg7sAkG5iTfTQVgy5wt3",
  "key7": "3fFPbFMavUN6DAjVdFiabt4cGtMRS928z55rHjik3r1bmPZZ2dtX4cGspnYpm9TjuPczcEtSJscJt1NZ1ndY6NPR",
  "key8": "3Fo7FCWD9DG6wf8agQJ8tpEd2zJ4LnupLZhGGAY65Jj79tCp4huhaZhi4foxuqVZ65bUWvcwx3D4nP77Xqyh1WTH",
  "key9": "5CaHaiL1UucdsgQZJR1DgARa7BSvmDLGoDC9dXwUEctsaRjm789ED3m6HBAkhu3MUtxDwhH65eRVzNmB9nuMQ1yM",
  "key10": "3x8fse4qiMeFjcUtEs4gJ2rMfLeArPFM1PbLHZioUrUVr7SXSXPeQB2jgXKWjtryUWsvCrNMVCnWpDVTYy6S5rBL",
  "key11": "5PeHZMsRWBDnoR8sTisNgBWwFtshmdSqh6GM9RjHjL4GKDatAT666d93K5TFBSUyY8obuXQMMENpu4iWtbjbmTX8",
  "key12": "5HShmneZsdcCFGF7eoVBjjbNhKpSuGRT5wsokgdmoeQRiLU3cFC83wvUBsWWJyqBNyiyHw4pgwAkq1VKxakkGnb4",
  "key13": "4Hv7pXJvfMgiUt1VoAsW2vtw8b54zAvV7tvBTqXSs4ypvFzBBbdCe1Jqhurr4PXRKxxjwN4nyr9sBa7qessrJ2FJ",
  "key14": "23RthFwHV4o6uK1Ecgf6EvnKPzXisgpaetPiTFJ3Cnu9Up6wdC5g6BnPn94G7hp8Y98VW8bXU9kCAQ7HnAM2uEUF",
  "key15": "2BGr2b54bZXcs9ppFWuaPAXugQc2p6nN6eSusSKZ1hUDKfLZTd181LNMU6jpXfreaeJbFfyDaAGbvoM7eV8m1512",
  "key16": "pJjxthWZU9kgaEcyuvwxJsrqGjkoAmbqTU2HJsK4S7uz76RvbFUxXoEN6S4GbQPKgw8MCvZu8A5SqaRoJ182rP8",
  "key17": "4S1kQQXvwsN7iDYqQdwk6RNb7ibo8sRm2dXU5bk32xyBYt62YE441Eypz9NMabS6TMngGDmmBWZXyxDNRHogvcPt",
  "key18": "5c4njpLUYuzZYwi5K69hxH9GieCC648WPrSUhyKkQWPUQG19zNTc3fV1dqkTPigEHvWFFnt4iPJRkiuhSPS1gPn6",
  "key19": "2XixTaGQBfnDgTMK9487ZbD8cpiwHys4FrKjJx5JJMQQar8vPKpfbBZ6yT9GJ2U7VLNRCRyr4CnFDrKAPBBihjfD",
  "key20": "4btpP2WpBqhVU9DGpGmadEzp1v37gdFiHH6U3jGWZTWFNTQ6BQsDVyFwgtta8CyrwzqiC7QtVok6Ua4j5BY96WUf",
  "key21": "3Yh7M2v8knsobuU7FPnJLsV57yydc2VceQ5XTrA1oBmTVymPKSrd869zesDaSxVHyEwutgvf3YQwdRYeg4rogHL8",
  "key22": "55wuGSHckHrtKWQb5xW9NHs6oEDqNqRmF9twKCvt5fC7vHKmwNvdFKotQZ7UyTeHToRy3x4EgxVQe8bsHZ5mMS7q",
  "key23": "4uJSSRo4beryTW3KcekPZCN2a71AhwUMLtUtruFpRFYhD3hmo9BRzNSryvrwZ5WW7gTPVEPqHuurCHKYPfwkUqV2",
  "key24": "3NW7G33F7nxNcJyiQHKkvBijC1zvAZZ4SQoTF68re8buNgWyNhbFR5yW31J5huXoMfR9peH3Mk32VpSWH13Vwx5W",
  "key25": "5C6e4XQmganoC2v5CSU3MNKwcJ1638Uaaxcdoqctu41wW1C2bdBd45Ero11t2JCxhTpzpSATMtbSPQXVvFTpy1bd",
  "key26": "8vAYtgKw3Zc8FMfAtp2XEJBNKTTN1E1Bt6YkNbxMWyZ4afzpBK5SKzbmEnxks9JzxEoutMmnb8pDoyHiaFDJZqL",
  "key27": "5CdrPBWpdeb6RgpvUSrjyLrC1mJeBngNDDAKDbwLa8UTuT8W4EjccwhvgyrnXKCTomXdJLRa4L5zwb28wFpcp4Po",
  "key28": "QaUvGQTWAyWuDvspaom9EjM3tz233WHuA2sKzfci7sQvM4dyRUrDBkvctFRogQK8mGncKjPcLHhEsDuEsZxB7aK",
  "key29": "5m9CYUtWwYtms4Qc4sE8BPXaQ4NmDbFz8RYbZAw7KxXEGPv9BS3vpcuRM9Yq3CwQ5ZztUAQWeXmF26AeGUAxFxaD"
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
