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
    "3vM1XEzB5Mar4To3TJ7WxCejkCExmjyEc8BmqX1QZoL2LdTww8kNcZnAnte5T1LiRKk1trHGpJwxEjSY6TX6bgUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48fBW4ijHHye8Fad9ri87uezgq9EnJXQ9TqaQbdr8F1DvFLHKbQpEhNMUFPZFLzi7gMBRBtp4BXjJyEV1QwZE6x7",
  "key1": "3EunaG9vjnrHi4RrCKXFajjFjKpqQsaqLdgoaPL9R4CRoJMNSN1LHzx3Gc1tZ8m7cwiw4u6iEjaC8og8w5RYMbyB",
  "key2": "2Cwt5PGPnKX3F6oFhY1Sj7iLNbsvnT2dC2UcpR2h7gGiEcZwk3ZR8CPFPcM8gaFodz7AHMiGEAx9dtjZkDiSQc7z",
  "key3": "2LNi7eHXp3JdZkzLD8VnMxNhphcDCNHXPD3qCT6X33rVRu2TfXuWYMrCZreXj6utct9nXDpU5xPu679BoV4WrY7s",
  "key4": "WtRXTTE7fdgXU7729RNBcQi58wVw1XLL4hg83FNiR79UqQDuf6wdB1vc2e6bZGjtcXGaLcnaAZHf1wn4ngsQzCS",
  "key5": "5HV4nJV6KZanPaTXEm2i9tKVcGF5WUXS2FmnPbFCPbNr5U8m5KimyPkQx3eLmx4YDsqBPndg9NpQKndKJWyda5oz",
  "key6": "aRD95sMhVQ8USAwMfUx4Sjqk7fQxiCDGYjwkac2LZVT4EvabYCG5679PXebbBoTgow3ez11zUMBCZuiWDdE4oms",
  "key7": "5dMWCYHApKiotC7gEiHqkLpR6CMjFiVjZAgVJgK7mhYYq8V26JjfNBvU9LSyjqd2j97P44JrpA1ocbk8QEc2gMw",
  "key8": "2mL2cPKzX7RL245QqaVGC7mT2ZnbBhKCKUP8ZHuYeoJ4FjWvJYuWbchALpMmi9941y262bt9Npukpk9EobfivGBi",
  "key9": "kwo83TZctjVRKuzJJ5RVJD6z2iNLYb1YoWn6AKp7rR4YHrVg1bNnc8VMxMLx5SzkLGn9todJWDEiJxPmijPwgdT",
  "key10": "24urGT95bSKg6QtueE79JsRRaJhk7ixNKYZy75Qp2FBBGoXvk2kiCzLWprVjuxUmtFroy859Qn8aFp1ubZUB5FYz",
  "key11": "4XGbfrhGVALY3dDQmXZVJqteJSjTQUDqPv7FuLzBXAj7MANdiKmGyz9CDpahds5Rt6nETwZuifLwfJRT9NhNwkJs",
  "key12": "23b1FfdqL93nUHu6Ktut6bMLG4dD21UmgQ1SfTfnm8zXTQ8m3rJwJLRYiBMdkvqGTKvoGWDGARuNU9eWD4jRUhf1",
  "key13": "3awWwex1UZVn2kR15SdMhxGL8bL7DaTxHmzf4rdn6SBDDaTzGpySCpizKMMayjn7Gvtrnn1oV96M8qyFdBedSqcC",
  "key14": "4m2iNYNGYviPiqStCmuWch93nYKcE2zxtWaycBfv3mdnzDeCnko3CWksoCpE9gskUZDAm5cn23RitAXeve1EKQ1f",
  "key15": "XEkdVGy8DSoTNVPM3cqTGY5xczAXAiHfo6ck3aCs1CfFThgXVF3PVfvXU3K5hAhzNoDc9Vn1RicrAoK3fBojc4y",
  "key16": "268V7oF7qFDT4WPR23UHKZ2wQMacWJzpDzKD3WzNjEBo6NX8S2bCtv881zTYUyrbDHvFC3M2yr5CzrszFvfD3bZF",
  "key17": "EDPq4f4ZJr5xPHot6ei74BbJUK9SpczubYzWuF4HEuwF2xuCTwieWpzJxirVdocCYfMTGQtGB5jzjRGpKaA9MEN",
  "key18": "24MixaAPDMkqZ1nFZUyRJ2inViyT89mTcSCqRv5X283HHCXribxj3ie48aZRVobGJKjPVVG5qWM3Y6UREtnz6N5Q",
  "key19": "4iTbMKWZjK3xpKzDy23EfTcCX7NUsRdTYDmK8nCMXQErg6NgZWJrBDrx7rWS5hTKNViSqLxDcJHGUX7FupfYbQzg",
  "key20": "3ymPinr1JZ6cdQjzNEcvJ5Yqn4Y3GUBGwm3aFHQ23K7yUNzNK6QUh5paHywz5w3cFcEad8UWKnjoKG1FV5WGi1RH",
  "key21": "4M69hzUivhcnQcCF59WJPpQDRCwVxBxtw2J41JzqBmooXaNkm6QddKoiehyb5xFiDBMGtxoY7xh561nRf2UPksUh",
  "key22": "3rTgjSZey2yxtgfEzoz44U9hcG29EwAoPJ96nPDKT5tEAen3HgQFB1bbut1BCA84DFGijAbQroaxh8JDQ5Kcqqis",
  "key23": "3nFT4bWRr7zdnGtPBZrEL3QnKEkvWconn4VtqAdpwh9TWovDxTPfsPSe4Y4EyU2XkLZFrrWeuecY1oFTCxLzQYEM",
  "key24": "4BcjL15tYJ54vKXWQdT2dUxgM33bQHCqfqdMncNufzwy1PtyQgTiwbJvPbHgcV1RhSgzvcyHPZ3KtfXHbHJuuY8X",
  "key25": "3q88tZD5tWSQYkWG14MoDwz897oBh2hZqzx14HzPTWpu7RonxJGnDfpjrBg8BYzGMYhAxs4uAEsiKc3zNoXYYH2d",
  "key26": "5HMmfQCHqw8iY3K77A4U2htUucZgevxuSDJfzZm6M3BQtkWimqePXKVAA163yudNGhCyy2FF15L1KNTMzhb9Kyow"
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
