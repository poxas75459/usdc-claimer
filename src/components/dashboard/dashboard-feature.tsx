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
    "3WpsbwFxMwqMDoQZNwCTNPjYuNrYieA6B2Z4FcW1tsxGYoNwouGZhN6P8927te1JSoJYmUER2ksACaCSvPnuZGGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mWU1vzUfi7GSXkKo4NFJ2xgpYrmz3bc87vELFDmdxDvLRi9Hbc3tfLjn4m17QyewBybpyG7XGHAQ1oQuouKRGDD",
  "key1": "2zQ41uVDbyVP6MhxfLSxF22e96DAg4oGhLkEAsPSNGxVgrBJXKcKXWT1DrcWdRMuQrbEsxFUv1HyT82Sb2htUyij",
  "key2": "57ZnE4AWs5veggVLpajWifrkJLbjBxMCpr2joTifzpNXmt4Ubb2P5x69bzRRfyXhWLPXApC8xWNLZXN8FQfFDszr",
  "key3": "5bMYFgPresvcS797Mj9ChyEkP2ZsbabHY7PC7J93rRw4E1HnafW1arXuHseBrqCM6stW3VYNj5bfAZRyczageizb",
  "key4": "3W5eJurUAqfLQWde6WpiUQornSHyG4Mdkotnbtc4TgdE5fp2K4XW1f4eEs3Ze9zKxtH612Czbdn9JEqbgArMhZ86",
  "key5": "3NcNi99p36FWriWEXKcnCuBK9AgnftSr6wo5kLrWmUrtstQuuJH1bGe9ojqWpUt69HDZUVKkhnHuDV7XaGmC4nSR",
  "key6": "KzbNDDqeBNMJyuHEBRCExPri6pxJPnzYeNpwnqeSDV4xjTA1EZtoTFHBy1ZL7QsGJ9FMzi2YvqFrYwmLUzfvX6r",
  "key7": "56WvnxAxxyeKz6NT1wye6CMEpmBocKVodLHPm5EHThbhmf9LuLSaPy4oZzwqSsoc3WAPRKeMU9WEYdhGxybs1ALP",
  "key8": "3uSBHaEnv8KxKuYPsrjd9CjkeE9QLasgfnZm7wgfnHY9S5fNoAcfyXbW5rvHfeWokppdQhxEtGfLRs6X1mj4i8HB",
  "key9": "4UQ3geXbN5wweyMJmhfFNJCxG8k3pQx3EuEuJim1AGfJ23cTNHvzE9B2n5BkGUWZqec6ar96Me2Le7GLZGcX8xVA",
  "key10": "M3ivF5vmEETspAMvvGzmEZry5ZRwh33KbvGBedpLP3s45v6CQ54zahbaqkYLocLQc9Tkn1BPevahZZ2gx1Augtg",
  "key11": "oHiBuQRxBpNPP74aC554GcVokAxDZ9WRrYLHfaXowFHSCa6D4Ctx26DjVHM4ebrCQ8yJvTKXFyjA9nobedPHyZy",
  "key12": "3YKVzPzvCA6zqxB4dSbZapbQWBvJU2WRW2ifoR57Qupa75UexWX8fKvESCXmqvEf87i6wmSGnsUabiaeCNmEfwt4",
  "key13": "MfR9LYoBVgnhVBPMPf3uJ8JVy581aXueKLqh3RsWmnbKubAb8nMbmHkoEJ71njTxMSR77CuiydxsVw9gjiGJjEM",
  "key14": "2timnPFeEFWEPoy5ZCWzmqAjEqmURp4mYeGg7TQmMFMKE8nhykxhfSZrE3GQZKA8crJw8JMXddDypdQjQzzVpxKF",
  "key15": "5XZHRUAQYPmE11W44khJ3YjNkp5gaktrUFQwyM9xLrbdaCSuveNUuoz2cnnnK3fwgCT4VDCWsocU27NfDYegmGgk",
  "key16": "3JohQyUUcJ3fpNSTJeDsKNaU7JQDM5681jRcSRDU5qhXWLkaZYAxRzstZZNgwW1ERw4KEumLkK4jMsHv5Xbgga8p",
  "key17": "28b88EFkfcueu99pWU6AtmgybfdfM4Pxj79Y1WeEtBfB3eWRiCSYVLMEVtSoXVoBQoymSESRtAfiubnB9LpG33vt",
  "key18": "2iPV5kCWvVpHyz8ELi14vC6NFvt3FvKBgkTJx3Mhd5EpJBPyjhHw4nG1X49xVXHvfM5rwocJaFfmWU3Kd2qQEmdq",
  "key19": "5fJthugZBPh2DRzainqhr6xrzobJAkntroghKxD5WHdZtARQpCUtcKkRJyhjwqjDBMWKn8R4cxWLHuXfsXpQu3wt",
  "key20": "5fn6MTYLD2LP632LBqRo9diiz1ddwu6WGMgp9ivJWfJaaRYoL1EPABa8ucGPyDVJepENYf3b5nFDZ6aeGMCqJWcQ",
  "key21": "ddzxfcauGCP52Z7w4nSt6aXPYD488LHPiUhrxHxYYajNvp21tzxobGcEpFRKosW3eFHBEePwrAcxsjqY5AXCnJz",
  "key22": "4DVmkPBMQyuTRbf8XKrpTNzvmjjk7FKR9tyn3FNjvwhNm77Pva324qN8LTKbhk992GHupW1GAKeSTECRqMTh3Afn",
  "key23": "2QizDZsWa5RNnzFzW2pkU7wMNPyvtsFSphvSggwUXrhbo99wUWNDwEJBgWKdCj4bN7WdvwJAaYtGmM7gQSPkk1Fq",
  "key24": "48ALy6Aw1cKAwGEMKisTo8jLnQnyWJgYCeRLEJ8N4pVDMEiVofDTwdaToHWnsT6q6Gky55M8JqsW4RpBnvD8GTrA",
  "key25": "3Wo3zPYj3G5v9LBjPRGog9hNVXticmJdgMLDs8oans3LJJG9qFJQ3Qmagepbgm29Vx7RnWaerfNz17nHT8C7hmsB"
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
