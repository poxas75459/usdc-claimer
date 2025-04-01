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
    "29gasdmD4EHUAuT9nVUcvEmjvAtksmD5DB3Puk46Z4qTZiT2mB7iFX2vWuFU6Hgw8qYsrqebZiTvsk7W9aJFrz38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ctpGA3h8sKw2BU9BQfKgJi5WpHeU2CKWC5V7T6Db7VoHRrq9joFC5buBfUk5PbhNcBCMkWKEUm8Ac8jZ7GLzSd9",
  "key1": "5PdKBsDqWSfuFtpLPKDWqRfEbqxQhkYcnX4STeeRqL6LGMgNRboLpvVhrvZvPJ93AsCS1kubEMnxecDrq9bTcs5y",
  "key2": "3tQ7pKu7wqoSN2NWgvNbnnxEFtEMdwR6UstMwq5pbZLGtpZ2y1FHrnouApwM9hViqBWmWZZmokH8gERzb9F9ERmV",
  "key3": "3CbE3HsRD2BCRm5RaySWMhpSBs4M2uy4UUAKK6cCeWNvzyJYjQveydrCG7dCjVGhrS8GLCZ9iSqsCqk7G57Hz7Sw",
  "key4": "54aDHQ544PV2UDVW5TQPY6M9iPk3rdUiN3N18sFtPrC755eCXTzWC92yfuzkLBzG83xtesWdNdu1EY322bQe2faW",
  "key5": "5xC981Q7W2n1RaK7M1mSiNrtasG18U49YSaL5Dp5WksvwFkGy9HHp1LwJftNRzecNJY3ytxGsSgSWosCpsiezLzm",
  "key6": "r5HL46MU7auHJtm5ARN6gqsG3rZAB1mAFLzyxW2CCowUaZqRBAFDDLYJMrxXmVoA4qyGvAPWzDjUJNSbi3E65e2",
  "key7": "3a2wkQfsiWC9NxUR1zmEWCsfFyFRjHeaNfwuP4CivYdGpqNmDfEpKfSQjjAyYxJrBNxpmK3MUUbXErScT1WrwaUn",
  "key8": "4BDdHhKWsNCcPRgz9Qp6A4FuFXoypGwnNKK7LzbztesTqhDLxRT9LtZ3b8K8fukeVjow1NBxqU6zzfrWxdKsTSG9",
  "key9": "KkTFb3i97s8gs3KeCtga85DaZYStzENoDqbrpSLAURMrBZLNDfDh99nWixXxHKHAME5yGHbtYYLowUpzTj3EHLx",
  "key10": "fLAkN9ACh5DwQG3weiaEM9GqYD4tq7HPm698qSLzQfPgs56UbXDjKeUrcpC8uAWdPJxaxYinudbu9wiG1B5fE1P",
  "key11": "47p3QF667Yi1c2qxin2nbGGN4GS2X2Y271U5dje1D2BBeseEjCc5fjQnaEgpV4wazt7NsNFUyjnjRH4xnC4hsYGx",
  "key12": "61EXtLFizfj8MoKhaPv6HoWfeGSc3WyAfbMaA5pnXJwo2645vBRi59X3AxGAwx5nhQy4myoW9iXk8v8Je75UmpNG",
  "key13": "59ZmYtK47yWPVcAM4YGjikTWptVgqqjEwFHazKJSsftYTARLPVUTeZEVEtPtqFkHU5huG6wgVdbjUUG7z9mZLvMJ",
  "key14": "29wwRnE2Rmm58Q3fJ6U8XNAys1HbGL4mbiELYANwZSJ4BtBq5C52s8125vfYzwjcVDq93MEDHj9DEY7GGzpDgDAY",
  "key15": "5zaxhSRN2LnjjKa6LA4MqNQtbRw8AWNyvA3hy1r2biLCXnUZsGBwuRQmtcJPWMuB2PjpNQZxgud1TmmrKwXNvx99",
  "key16": "5phRGmZLYqnUtM35Eeq5UFDEeDBpi69JjVvf1T5npWNjy8QrB7vFnqx3DzuVbtv1Xz6Qib7NDHMJcYCyhi8jF3gK",
  "key17": "49FBjBLZkLjXqaBUsj8GYAF1frK8wgDxe8tLuNbn3t5KVBosSHsuhtuJTocihrEmHCKyo53JrotSjewZwLUtZHkD",
  "key18": "36Q5b3xAUeSb3FPGhkA6FdJ1MaFNF9UNAP6jTBpVauL38m3TkwvHpoFCuJj6CMsXc1nTgwCKyXfcA9WvMt2jAT69",
  "key19": "3Pf8mZxrqbH87sUBHfCx6RVJSLKwpNpCDxnofifYFtQXgjUGu9ECz8pQbpi5ZiM5yVBGpCmzH3i8S35JUW6zCG9X",
  "key20": "2toEtKQ2FSEwXAjbQ7mU66XwyBxBAoeFaaZqsHPRE1kr8gULhWV7ru2Bgcu23ox7EkDGkwWYd9xjCSmkfAMVBczd",
  "key21": "3Ag1kTCWyu8Kw9moEzJ8rQeksM624bq1oAQpgVGDybVLLcxaH2VopdFmn5TMkoteEWvefAGe1KR95gYto1fMzCxm",
  "key22": "5ZSZTnPKdTaDJ1bkYkTtpJFGzGNbn5zWGonaY5N7G71gCZc84PojDopTgEmhgWBs6kjkhMWGAp2eUvrodHHr5PFK",
  "key23": "3kLQvgZ59RSuhNjgBfhyuN8sUSch1FDXJtWHY3KZTzrND6yDMMdUdYCvA5j6SsdEjJSjACz3UFexn9HeYQbuRED4",
  "key24": "4x34Nu82PJFUPESaMunAhJvvLVY1raa9tZW2FNUBh26pjTRGkDsRagDReR7UmTwRinvsqFevKgDqLQh2y1c3Djdf",
  "key25": "35nsCqCKSEoekqUi2XhK6ZU1DnBejrKyQjg3vmVJXUPsHCwVnBQGRBsvkinjwk84CdCx5WZJFV7dY8ejm3RrFiXu",
  "key26": "YRtsf6HVYskyu5yw1UNf5gdLpH9JiuQg2Aw2BNNQbaDHvNZaSjUiWQpzzj2hX8tfjrhyT6KjQLpAe4rnrsQB7w9",
  "key27": "3MiQB2csfpd3ha6sPY9JBC1YQ8sbGqbwMu5hvXETZFgAwq8cy1oTfeKqqk6vqptG4rEGFNCsjhrzWfgCHqsB8coe"
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
