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
    "52orqj8stPqsh8nZXHA1iquXgf9HXj51hKhvSP6mYEMhtnmeoG56xh8eZyoPFBTPFTswfTEC4Rkw41zm18VMor3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZ4P8qCQeUJnyKvaf5SXTBu8h4XSYUUkfj6HXiLjXtfaMFVu9Av2z7iUd23CfJiyJQiHUGtqXYhpwtq4gqYMEAM",
  "key1": "5RRfvYHWRTiA2Yr2BYZs8nK7GbfCzkLMZccNhf4pyhJygx4syPvfyXj8PCRHyuhFLBQ4eC6iLJwGFJHXULxLS21w",
  "key2": "3pnRYCjaZLHYaDnPAeBUw23224tzg1QjwviAoS2FqpFmNLsP1ge69R41pUKYrHJ1dMrRzpjZepY8j4fBf6uFHzx3",
  "key3": "5wn2ZgN5PexwCwgL7d7gHZznE3AMv7y8Rh6AkAgchGGhBqYBQ8bs2nni4s9Wr7Pc9BW2vDrjSL6NUpEjPxk4xLNe",
  "key4": "67f57pwjU7YH67B96cQXJdpFm49N3bio7DmrpJXiuCvs9KNTgwNYYzC3CS59AMWWaX92UEm5XyBZGMTWaeXV6fxr",
  "key5": "5pNDKjWj7QWxRzpz7fN4cmLVFX6RPzM3fHTxiDieNMun7i6y5cBgTW8pYxikiPkYZrfhB5sb9137y6ep88Ha4yo4",
  "key6": "4EQZuD3xScjYiAMHWeuimsC9sm2Eg6H2BJ2xFs8ECft56qyK2jrb4pcDgyfEKfwNZxautLNh64DuryBKVXYnJsB8",
  "key7": "zDnV3Qc6cjnbj5E8MmCB6PfycVH5YXC4LdmRBTakLZv8pxozQzTZ1rwAxJZBwvaQJVhRGP27qah7M4KX9wfnrQL",
  "key8": "jGgLs1JUHUf7aTHX56naJ3cov8HwcFRU9HVbGrBHouGW5dutD5A3xXt2MWTkVYXpTczWKEK1TdigkVJtVQqRxgx",
  "key9": "4VWd1ALueBbigKm8CfZKoBf1KTJ4AKMuzEX3MfJLvKgyS9UBAcU3DTUMCrMY2te7z5wowoRHHVFVmDpB2CZHfpy9",
  "key10": "3fcVsxfWsZ2G4MigMEhRZRaJQNEtgdnCrAR6bZ58e8mnaPB3PMBzzMUE8TyPeK2okBed2BrbdYp7ve7YQx34TTs4",
  "key11": "27XiYoCCSZXFGRLeqpMNzRX6mmAXBEpoztprdJaHxsQ6qJhdqwD4ZMKTw6ofki1CZoURSMgYXPAVUtkEFphatAuC",
  "key12": "5gj7fo6kWt63sv4vCELUdDx5kxzeKEZgEQ6ukGMDABhJUaUJKm4tjHWVqXHfF1ujRy4YnkiregKGCMYDe2TAaARh",
  "key13": "4MmqTLEfYcmECcocdWzckmDvvKoMNQvTUZaEvFoqXc6mDo2h55zwthZ7n2DmhQhDdcg5JqCbWh54H6fBS6xX9V3z",
  "key14": "4snxRENjBct1UwudhqpvYfZkjqiU2Nnjg9i9Un1fntbv85sYo51jb2DAHLr8NQ3iy8JCWgQyXc3k3NeUGrANrkor",
  "key15": "EEAM3GvFNyKFpu5fkaEx19jtivWsrM4BYdFVWJ7kdo1CXKubcQXZM3xmFT5gwnSPrNyDNJ1ftSZVWePNB3BuaKZ",
  "key16": "773hQzYDKjNN49TS66xywgPRt1LPL89eqXY6vJzddoVvEkcBYReswJdeqwwCv5Xz3u6bseHNgBEkg1ukUbQUBys",
  "key17": "5aczHJWLrmHQn1N7x4Munr5zFAHwLxFhFkKTbBTDJPoE5fBWidYPW4wEJg6r3Apzjw6tfztSEymmZcjjHcgjtZC9",
  "key18": "4Xt4N6sbTiB778fKfeLWwtRDD27rnvemYL9tjNAhdeZucepncebbQkygzRL4H7TKfa5AFDQwvevs9rHUMs41JW2i",
  "key19": "2zwn23x3wMNF9isQspMBxvMCyWPic5ciNGPS8q3TVmosf7qsJprbY2kQwCJFwZqRwKcctPrHMfzTALJWVW5Cjbhz",
  "key20": "V32VnRSSSEfgL2tLpB2LHxvjxbJUeAPffMqLV5PhXTn5tX4kEZAJBhm6vYL7phkWiqhM3j7UA4DXEdwFPY6gVMk",
  "key21": "Q4EaunAcjGr39fpkc6Li5hqR5KGLHwFxcoggvGxxrHqm7KodAP8sL49evY5adDA2Cmo2PkeH5zm4NrGEP2jcyT8",
  "key22": "2LAYUumyVRu15Z9gFBjTVtj9ECJiXofobgN7EY1ShMrAQSXz3DCTmgeovMMVjnqWKpiRcz6gDQXUqfhzrGh6QTL1",
  "key23": "45msb15QxzSJxHqfmZP1jj9iJLvfqtCSwTz7DuehUcxaGSkZ1pxW8EvABKAUSzSt5Uk9NEQ5gcpRGqP1yjMXKqf6",
  "key24": "4QcX6DBkKnd4PAmPhy9g7Sh1euHAeeZFScKtJvsERixpqq7WmpK46XbfSrPpbxmWNV82Ef1XzWt3NbDXexAG4RXJ",
  "key25": "4H1iZMp8wvpbLcabZjsHywvJRuAgqSdsiq7yCado4Zy4X1U4g8RJfuFAQV9fzVfAghejwcaitVQXAX3tZLu7h5XA",
  "key26": "5mDzcQ5LqK1X6dVPuF3BUbm73tfRi4RkYxExWjsAi8im5Ktc4BeTvsuFT1PXmfGH2v1a2mdSLPGqtvP8zP3LpRNb",
  "key27": "3RGaetZrhfAQt829sGwdt5M5u7L5TdTHkiHiBUehkXDiSKjncqJiZKNNy5URhhBayMTZ44w9CzLbMwwbMVUvnZc",
  "key28": "2wnL6unxzXLWkrcp2mNrVbMu1Qckt37eYoaj1ThpJkQUAQVfi83zY74Fzy4YVyeAJgRg3iXeqhdGfJm2Cbg15FSm",
  "key29": "stJsuJyZdt7RakQZVrmh2xNUneWyZU4cXgp4t78gKZDzy3hQkC8FvxX2yUd5TPSkaJNRYcLCJo4ssmdvcz7cvK5",
  "key30": "kseiswdZ5eiqXPnz3NYKP58e3Tp6NEcoxp7qeqeFMrBtSodCL4mG6GJ5R3GG9UyrkYERPYESjupkawskvxbuXQS"
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
