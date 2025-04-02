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
    "zu7TgeKYojFBjzKR8ht3P6Lda5kKrf1utVNGzVtYt5upTcwBjn6B4a3hiWdEuWWzLxGBTbuMTHGVoBpzLXvaj6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DX5zB2Awg41YvEYZXxNjemgjDuVCvAwP4AzFzsDCQbrr6UJqCpNVovjkSUCkYfvuTT381Y4rL52FvARFakRL1Fn",
  "key1": "4P8AhM97cideVJUmnpBbu6LY4J3p7Q4GiU6jjw5nGbb3x3Lvuk73cnrTVzQmUGzgBvYjbzFbgms29EF7zxpzVEfk",
  "key2": "NjAgmJpm5KBj9eSQoWk87hA8bDwv5VKgP4dTzFiAUeBAwJssGf2kfrXoPma8KfB7MrPebonZod2L47bftRTm7Bp",
  "key3": "5h1kYqHVz4JehcQBKZSpKmurS556YVDJrKUpf3Ld5Fn7PG46sf8RrEzSrdiMTc6XCEWG3ifn4kDhUfGj4uTPWiT3",
  "key4": "4LciZTLk18XqpbZCvg7SG4wM9c7CptHYqMuMdhytCpeNk8AkaSiQfczuXxCuG9avnTjTndaqB5DBZydqkq8wNrmZ",
  "key5": "4z4BRUp24EXC9MyAB5BnuAFyu2vwRDBTzi6YTkb5ukdjLZWsosGAmj83mk3DhBscBSoH3xSWDuCMVDH1SJbbnTCL",
  "key6": "555ykWYjtJTAPGKYyuF7QPcGyT9DTGVWNGfu2Tk1ZGt8nukAARvZi9TjUi3qvUaB7B4LjQGtAdPSx1ErwdxHL1kL",
  "key7": "4V15L75SUcJ9m2hY6b7s6LMXTxKW8sUudojcgYXEg9KcgriRA6pfzL5qwMBLeFdT5djEuPgqjuscqoVAYsxpn3vK",
  "key8": "27VQqrd4PGNjEnEWeupWmzYj5QDj2d7zupWJsLZyx3FWnYTMMgRvrAACeegDRM7ue6CQnw8sB6yGSokzAGgz24Ek",
  "key9": "4GKhftyF41vjAkRKwxcyAExnL94LPK772YGwRdANhevmtSHbxDiAa87NYGN7DzmoEEnARtSh8ADmMEQQW1Lyd86z",
  "key10": "2RBNMWn6HGx6Gvqyuxonfhzb9jfxbqScsK32LhhVHfBs44hWXNvvEnhnaJHaAToeWXcZ1RBRPRrwcDLReN6ZX8f4",
  "key11": "4351DkBX4GrydrTnNcAVP6NHG7HN67W8opsnnJZ4FRc1aVMMMDr93QkeYk4HUpLVRQKEZmy8FBjdpNCsMCqGiD3v",
  "key12": "4y3cEog6yZMKK59iLocSsyz1xdYzLhzPgHdSGjkmf264wFrsj6xNZPeHYxqpt8RtkSHqTmEf9EX2biaxRw8TLWun",
  "key13": "3ze8RfHtLDTywg8SZ8EXuXh99WuiLa89bEmtn1R9itL9xGUzMjfijXfpCRhRhdwJN1ecmPfZvPtx1NhND1wygCT7",
  "key14": "5LnWUazcnpesh9TznAVTnkPaSAo2qPARV4kfBbBKLECN1rWk18E92FT2H3SuwoP7eFYeRW9h1acabHxfaB4gpkCP",
  "key15": "VPnueEhmmemv9j6CFWBhCpYc35uDUv4uiZBf3krN2CyvNU2fk6TH7vzaj5CCFr3NqRwyVhe5zfccsAdoCKBXLUJ",
  "key16": "3qP1MtpaFFDTbZRLP2cTJvdKC8HA33v9iLhGctKscpbM59QiqvgjUR6v8LkGwFnziSF46k9YSKT6KCuAdVLD3rRc",
  "key17": "b8BYLzNJ5XzXtDKoh7QwHGt71w2eBCKF7aP9KMLM1HaH6BbMqpKzpc45KujDpnchThPYeBo5MFZzTgpgzCQEgzw",
  "key18": "3DnMK7JUyp1FPvjCwSPRXEZNTCuMf3hujEHXS6HheyT5PLjiBs5Gegzhr3wXRzQN8DTffnj7ffaENZP41fHxU7tv",
  "key19": "2G7bXwLaNwjqSoef4rV9hhVLLsy9bDJdv9KXmWbbUJNbLRCCYvQLCVH51puxR7ut28P4KE4VfTJZsWV89sQGJuiR",
  "key20": "3BPoJyLGScTFxykrZ9gZzjcViCoo79Lojb6TncLh6PAymfdfKXHrCsEJ2xvxUAX33m2wuuq7Uddv5qNuFnaGSKD2",
  "key21": "4WDRPguyCGnhTfFm2eitqBa7N66uxKheSVR8zqt2aPvNkm9PgJNQAFxs1mqqpeY8UDhbMEUZTrSqMrsNtxSDfKdQ",
  "key22": "3AwnyQdnXqSxUd87k82FT6XajQs9vzJE5qDU4ikH5DQfspbiJK2qkF7dK6ThctZ4VGbm996sars7ZjpAJHS3UTwv",
  "key23": "xfCT84eCtpZqyi3YUYHoT9Eai2PyHqhXy7Uw47aNtgsuQqvq3pDrYegpaPfCwNosaPzfyZ9H58p9fukRbPkvKCF",
  "key24": "2UmyyT5XuFHLCM5kNom5BG4s69qj5gBdJrgy6WbtgVkg3V2cTFCb1csCfejcAKBAJv1W4cHLe2BrmDnzefvDeoUA",
  "key25": "4wB7hAMNQXsVH45kBVrpg2udEWXuiSbREWJGb2SLiJSc3inJrijLZoGsDthTYdTB1rjKqjacEs1xBp7dcughvtxH",
  "key26": "2gu7x1nC4tjy8rdgmtdhJywxXtVnokciKgr7BQKPXK7S6gmnvZd2C9DLFbSeeQRbWRJFBrMjYCYxqYHj9Z3PAxit",
  "key27": "4GyXHxv44UfMdqrezMJd4G2ZNJriSAiVFkxLzUaVMY2Mu4JuWweGhHC1JXqSge1vrE1WHTbLiRydJ85cuHBdL2y3",
  "key28": "5cJjakMQc7DDstXoeWnf9AupW7m4jVGRuzaWXCe2jpuZM6FYYMnd4BYgTNRaVRgG39X1zXdMbEQ2NRVWazEMkiRb",
  "key29": "35AMh1uKERRxXUL1utikp6tHZhUE4qp8ocT2qnnU7vhduBKCoTVZURGo7xvAECu8KyQj5tATvwAwx5ZJ9yk1gQ71",
  "key30": "3KQaraG9p4yN9AYF94qDCoQWa2uNfMdabfCBBk3c5Wr34vQnzo3MBCWAsB6owxjeyiCgWTqToChKaT8d4dpLR14z"
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
