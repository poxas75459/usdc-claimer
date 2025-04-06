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
    "4XLoZVNuik3KKCrSSdmhUnCcp9MxhYzEDQgcLNtagreorc232furK4638rYepjxqt4VtfmLNvK2LSdagzaLRdrT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rZ3zyZbLWwYpLHdcp3ktScf5DqgNrtMrGjc7jF8Srwz1NvEENMRXPUqkbCgxxV5jpNJp44dMQre5eNYmb761DAq",
  "key1": "3WZVeJCygtHbLoAEkWbXwFMEdMphPv2spLg4iF8LXq8jmUfPHezDRAWteqpxvHkTTEKmpJs1PCy645AuX4pFa2Zo",
  "key2": "3DAT8w5BaDqXcZMezKBvbYgsYaey2w6gcXFtX8sbDzQUDUA4iWX1pkJSHnb3PQmdi4TxfsxhZykyXRtWTW34b4RD",
  "key3": "yuKdPRN9gmk2yVidDSQM8aX3mstSaMQydFNGsuvaXBpNjTgh7b9i2C4w22iNbHzmSpMHpcHLFFBwR2abokpqWsb",
  "key4": "3pn1o44FMhwRbVzEfgS2krd44oQSMV1ihsVC47KgEakxq26BtL5K2qwPRF4zWFZJuHwtf7L88bcJcNCBoisJdw99",
  "key5": "26tUwaGyynRr8xCMF5k4dmZ9RMwjxWkWfoJL98T93y7ERRtTwoXkQfKyRX3qZzNZNs6rHk4BVYwG89vo8JMb7gUW",
  "key6": "38cCwrGJzgLuZ4Bmvw3P65RMgN8PjMc8fbNzAgU1eHvXsGGf87Y5CGP8DYztWKBSRRTj1U7ZFsDVJhDexcBGKWB5",
  "key7": "26EWrvFYpEy4rkLvEQTum1qS3iDwmcS3vawVhiCPaYezGsLrXSTxu9RVT5S5cfA19EdtKVxWpRVxj2gDo9u1rAip",
  "key8": "4z6pYGs72X9ftfKXpbWLtCELRnDQPBtijvyiKD5Ue2bdyudutdRXeAMDRwuWYCvYaJEmLg1vJwY4XnRYrHfdtFqH",
  "key9": "5d8acH1JrdYDZj1gDBSKWcf1NGfHa8PQa5VxMRtKyAHTmPB35u25XUQTBbGhFB6GwHwxfN1zYYdctR7cpw1nK1gj",
  "key10": "2fqv6dcSxuqga7ro2bFvMm1atB8tjyze4Tw6YsCYYnxJRJxFpytJ8RbGmwDQxf1z4hagQWJKadmnUjzijTZ5ZAP1",
  "key11": "5D2WtWAMEexc3dvQSw1KcZTBWZ8awn9SLXhUmwZ75AogRcnYtWt3qry7yVtqdAeiKBPTNqz1MZP8nkCiR1LWFMsn",
  "key12": "itUVSsRrryS9PRQgbzZUkkq6MNeK5caD6YS9qLZtNGsAz64wK6rVuzbFM5tAwisjJ8qM1fJS5PZBSXytJaTADWa",
  "key13": "5By72P8NUakn5TvTKZifvQw8GhWEwmprNTNFmp9niavANwsQpUKN2uJvK91z29spxPxRrPejHFNWWQCMCfvu6QZU",
  "key14": "G9eq1oagK2a2ZkinJaE6zWv9d3Gz9TfKYh19a1a46BPxMX4Kopci5K5XwKfgHVbeqaKoWVFFrfHzdgVYKFwm7Zq",
  "key15": "2f2LQwMewfMrjftyB8vQyrrat8H89UQsT8sjGe7d47WjL46F6ZAM3tCZ1HTNUoPvkiTCeyEwCSA6eF64jphodtS9",
  "key16": "3ku2MeXaCjTQtnip4aMvkKtZSJJatQQPCZFnJcmTkBcS5cSgTGhDcAqh7UUvrd25hMQmnZa9BMP1J2rMY8uHJkkQ",
  "key17": "3R7zog6bSRvsSPLwfi3h2o3iW72DK5jdnEpRniA82GaWNoqAV5gJ5EVBXGa4KR24bhJ7gdBRP492DvgaNxNkKkhv",
  "key18": "4NG92uq3JBdehmyGPaumkFwxJcExvzwsgcT39vzodBxEX7gqZMvHg9Q3McMfGgRh6SVygtTVhw95nSDBiZbCkVha",
  "key19": "4XtoGHJT1Ymg7VUwnnQDn7DhmoXSTrMUFUn7oLiatDDRP6ANaMqKogrgWVk5kB6ndpc76DxEpqoNgP3iT3oh3QNz",
  "key20": "52qGoq7FkETgYAUivxcXB1vJmou5qftRcas6ps9ZgNicJcUN46AhdKyPp6xJU9EwmcUBiZmfBVctBWihkNgpwCim",
  "key21": "3qufo2ejMCVUeoWK77omoZsFigXxSb96YQt8yBUrUrzY443fBM3rfUc8WMjihzxNdVzhUh9mVGhv2bNh6AwkMwf8",
  "key22": "2JbNuwFAdZV4xnmy4dNnPkHbD3HwuoDSGBptS3RWZ4DuPUZBe5GcTXVpoDEZbySyeYxopifJSHc2RUCzFCW6uBWC",
  "key23": "5Bgr914FAEU4LD8qvF1eYARPG91DsA7BAA3GktQgdx8T6woULM3K4MmJP3EUQ6WUTaFq5pNP9GatHvaj2qgbnwfM",
  "key24": "9MH7sWmeAwUDWLWSbFGyYG9jLfLmqisTi6gcQUe2knvYiEVEuG2Au2bvch1g1xtq7eRb2cdrZaVCq1Y7CYxvogr",
  "key25": "44dZpaMMTWWpAZ1Eor74sjaraDbK3UQxNf7NtsF4SqHcKaSPPbERKbAWffJH85jaYVft6Khqz4GSGDGwkLWLryxr",
  "key26": "4eyo8z5TnuGdkvU3PYkCaLsqhRHcyf2qFMAPFGb1dQD2U3MLjJ7wyFaPp18QJogD7dVSWk6erqWJkML6CN7YwFQs",
  "key27": "4dEcZvh1isUSqqw6MpE8Y94172EvEqMGoPhxwLP6grv8GqGWwf5PpAt7YtaYqitLuqXmw8degFHoHUAcPaMUo4mi",
  "key28": "2dNSiFkY4cRjyofzFhbHwr9KaZV4hHFGjT9pyePRr1h7koPX6fN3Fi5xsQ2pYsKEyP91kEu2FV3JCdMSrm3mtgkU",
  "key29": "2BByJLKY6S66jx9TYhPAMxsiDNq6ckCpNK7tiqCL1oSKTk4hp8A7JmqvoBHo3GGgwEEawguRDBBdezxNLy2dmJ6B",
  "key30": "KCUWseK92sJdad2MFEZRS34rwSwCicJKizYCwrudZ9RbYnetqtbPpreTxmx3EMt3iRqHu23V3vvrCQtG4ScJysB",
  "key31": "57AhQXGcm6RbW7CsxGoxbMyjAWBg63stXkR5n7VEUxoBnJymxPNgAA8AazKgk4EFpunnSj1LtW244xqrLg4ZnoaV",
  "key32": "4U4M5PXTxzMSPSvDm7yUKp9JwCXgbZdG2c4b8TqLiENkQfuFuVs8fLon5CzwzMGCWoBuezKimaXg4VMSRvKXxDbh",
  "key33": "5c6ZkU2KF8JMnhF2xzEL4CvA5iFzVHFQntH9LaSffWM2wsERwWKU6pL6rnxcNbAHQD74TTCAqSBLeayDg1pjze49",
  "key34": "4NZqrZQCGnAAZfF7hbjZQznnb5pLi1HUSLWpr8tPD7BReQoyztHZ8gpbXVLnLGnGBuqCfdkD58FhiL7yovcdY8Bs",
  "key35": "48BDv6tAxhdD6bong1QYksFVirtasdENzEEZFy1NeVTfy7qgbWPCR2GB2Rmvgk4vhrTmnoQ5AV4hyCXQyPa4TGYb",
  "key36": "5cuVQ7ggg6MGt646XDDtB9WWoroepocGioxNMMkGhiD4pFctpjuervfx3Tj7cicwqVce2H2ykNDiXSS8WpYced7i",
  "key37": "391P5eZwE1xbS6qqKr366sbLykXggwUkFF3T5DLF7UTB4uvvrBTtvSr4Nfnuxub3s9M5YGmAqwohDy7PEXWPHrxE",
  "key38": "4zLECikxSisEihxxTLXkoUinRkYCTPWudxdgEFbDYQtLqw5CEJWCCFvo13rKS3RXPKuJ66fn462NwfbXL3oVzQwx",
  "key39": "67cHbW8BWi2NGHqZ2cEFBtrNGPkm229KG9YS2qTddAEunpvSy4QyrxaULwZ2Xa44eu3nMBFwKL6xQ1kSQLPdK25C",
  "key40": "5EprC4m4mT1xs38UvxcFTcb3VpG3Ff3qdLpVw2c6ejig3M42A5ABNhGQEf4nc9GsSijqSGQyvTiCCrH18fPBXHNE",
  "key41": "37jzhVAhv6pDkxYa6eheRYwGxKYjpccnZqGtt6b2PLgdDXzaaxVt9uQ6JKNUtCV5La2WbV7NS2z1g2KMmt36rSwW",
  "key42": "3brv4EnsVR3safVpQP5ndfrUVVx1LFtmfKEtR81Gf3tStandaRnapk5NAbgSPxQV9vt3Cwt6uy9GDw5CJjGnp6Dh",
  "key43": "5WVNTCmsHTkpEtF9o6iPY5fcWNznxKAYxHMeAMkrZTjgseEwiHeLL1JM3eQSUcBYDdKvasWViQbT5y4WhqqPyCYY",
  "key44": "22Kqxsg1q2z5LHrSmKe5FPkb2RVZwj9ShgXWjfS4hj5otJd3DYpu7AzWrRQNj9TCoxpud3vAX17UgLW4CJv7kYNZ"
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
