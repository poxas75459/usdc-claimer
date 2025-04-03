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
    "34g55xkniYy4jhBHichUXYjtKzn59jrz4Qqdne4xVr2oHUuBwrX4RDe4df3y1RhSTNPgue3FZ1d2rJYqXmjBeAks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jM8BUL1CA3Sjpqc8RP7BZmsVA6EeJzW838PnvpWyhvEguxjp7BXwpnnkME7o6mmPazz2774FJVnS3Sn6dZ7dq8V",
  "key1": "4aH9WBFK9V25fq14B2Z3WAV1B3r5yMMmjoqRcMXqfMujoZKwvfgvPSaDgMxReFhzTnNT5YA562epzC8NPNVhHRHg",
  "key2": "3gxDjwFdCsiDGp8RSn2jm9Djjicf7ceSsNWc4sdQYN5zUFFSZULjK4tcbgE4He7UCKRtq3aC72oazQ52PMwu7NGu",
  "key3": "2sqU4DxxmWc1qkfhEUzyyqAMqBwTxrXVpxdozG9Li8ErUSmkS3YyzRD1RMdgwjDHrdsHPMEsbDeYg9eeUkCRSqPF",
  "key4": "3dKfsVFVmw7zwvP2nP3Fe4iRQPWWv9GTUiJjeGmdUknPsQg25N1g5Srqun7MU3AyyTuHVgRNkmHt8XyRBAdiVskf",
  "key5": "35NQJGZNfqU6achrs3rTS6VV69Dw4M16R1nZZnttAgV4avtP4Z6YqR8TYxqoWpv6fRTUcBYUFKNrnETTzuptcQbq",
  "key6": "4pZfiLXKW2r22H2HT4cdbANApMGXqoRXY3L6ekxzWg8qyBw92GXpoGutSzumNfueXEUqdBT1wnofPoBkvEmBC67y",
  "key7": "MyF6cNqBNnQAsXiomk4rs9HWztjQioJDmsqTdS45samvza9fyndbxAj3oCNcuJBHhoXN9XXXHK2C1jsCfkfSM72",
  "key8": "4XBuAcRvCo5EZzPEKprgB9xGGgw1xjPFBdpwDA5ubpkr759C8H8BuHoKePXVDtHFwc3f8QAVNKUAFD3VsyEM1YGt",
  "key9": "21gg1kMB99otwBHNnux7pxCbi6bgpeTQsammGgRsMGhD3ycAmXbXcgeCN94qTM1n6vVjFtTAvhhJDrbRVZNUJw7f",
  "key10": "5PfwZGLor7mTaGDhXqTeWMbhJJBejxQ24QmKNfpHPvFLfTyQgeQi5RfY91TF6qb57VNDd68Vj55H915LYG6BZYB1",
  "key11": "4gwxaJn1YT8skkhbRismhNgeTcQxxQMbnyHCHiB56THbTcRmiV3jDhyH1kacdqmRTuzfePNP7A1PprB8fh7CHMSQ",
  "key12": "2E8pzBKcKkqbaYk6dVaYkA45hSgLoKkzisVuMGyneoCJ82bJau52rijnvfyi8B4yEQqrXd5AmokjKxQkzkBXmqan",
  "key13": "5qSDcJDRzbcoriTUdtirZhb5bp2Eynrpfw7maKktd3vpk8DLpJFRZh8GNrsnoCWBCWjsB12jfyWXbTNwJdGPMSzA",
  "key14": "EzUk4Qy8y9CidEgNwbrGHEidqMVcBxBx4sWgrDU1AJQirqFAtd71mhQe79gdcpUgTr56ZpcnDbikcppb3JhpvzR",
  "key15": "4VcnzEsuq9STDUvd4Q1vbSYA1TPpYdafUzNoXgZeorgMqpucgkLGheFc11VBZsDWbL7zfp32z8R8pZth9Au6RN6k",
  "key16": "5c7u29U7jR9vMfx6JYEfBtF8srwmJBG47rqvuMWnggoAWzcR13CxCLvAkwxLxTGoN7WX7m5NU934cmr8txCerZPK",
  "key17": "5Nvqz7ioSgh9sWaUHPamdrttVeC6PERYAFx1S725f4iLf7EKWQ4S5UGQwrrWF7hMBGtVme9uVW1kp1HmGYHYRcbC",
  "key18": "5GhC24uebwaJE51KFrXq4f391EsFmryVaQhfsTvdcRHTGyZvuf4rx1JQ2vHD7AfiNJJ6mkFuVGAvp7CmpS7wviGK",
  "key19": "3c5HBaKdMUsvx9LrMmLfAwuASaUCTVrZaVatftBrNkpUTJpNyJfwPzDSan2w36SngA8X32fBb9KNJpWxM85ngxHu",
  "key20": "3hctrfM8qAXkGytTwRiFhNXpygjy5EU2QdtjnQps77JC7gnnZCfbXAg8EKLdKzakqeiCnGMYHfkKM44y7TpWavt6",
  "key21": "tMQjqAPdMRakdayXMbJARxQq1dPBqFP4hoYkVfGphpo6A9SMBGUfr1bGZZr34trAYTTN585mDqTYzTruUe8oHNe",
  "key22": "5vB7HzZJjvBqwsyin2bPAZHYAUqUkSncTfA8UzDbrHUNbDfVLVfmadv6CU7Wp1BJBuXf98CLkLQ6Cz2nrjvbQCKb",
  "key23": "3yvSRXazXHEh6ruYQQ5ASN8FnBnXjwg8ava6CqRPUeu6oTJBcjwDkfeWsFfsknkRDu1JYsTqb66E7ZMmmeb59om6",
  "key24": "vCi5nWSemhSrWvXNYgAmZaECBLywKAZuQcKHnHNe2zV7uDafUa1PcJ3E2SwNnbL4Ea91Yz5rk7ot4pPQoCvqYbY",
  "key25": "2gGRDQdE9FPvvLUWHN1U62QoMfQ9qSvTJPYBN6qsWERuTkCi7oyHZzF5TJg4hrJGhpL7G1hQ3eiGnJ2i816xD73C",
  "key26": "223keMtTtYGRpucSMpmeM4WPZ28vEBHBGNSF3EpihKeaWQxFpDdqRD4f46Q5yFiUAxbm8sZczoDqasg8RJGoZn6E",
  "key27": "3K3yCvot6yvxKy55m2nUoFokjLfm5dJPAwYKxSYtu6RcoGnpq21yBPg44jExtGhs4ZkwiDEWPVHK8wtbmBnhqSEp",
  "key28": "63bvyuidPxcbdjE6FGTSuDg25wb4oGWDN19ykPWwV5DLHxKnFhwUiyF8yHLfef5BaUWX6uDabpX6aeQnEoCysmZy",
  "key29": "5Xmvu1gt5BWBeKko6xD2CSgeH7HcVHinFPUnpUMsF2jfpY472XqdX7eP8xq5KnRMjV84o6i9TMZFHcTFKSKXzo6U"
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
