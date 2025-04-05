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
    "2bJwVHSReqxwZwcPFxA6LdiTVq4nf2r1xDZUos5ipc5Wt1ARqb73GbZSH9TEtW7z1JnsRzFWacqFu9vHyVsvr4cB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NNi3gfqJCtAVA6mxPivY5ehDVD3dfTrdP3fmokNg3JebHsWyaSemBNKWh9M1DKYQnGjpMjhQrPXcc1XUcUfiqHD",
  "key1": "w5gjg7AMYxSQ8fkswbmUQ8uFRQF5Nb8ctCcmrR1ikTYWMqnDrEwQBniQUSZw4giMKcdf4n5GBMTAVb7vTXGEMJM",
  "key2": "4e6qcbUvnRmaUuGAMWvWGAZrUY4bVYiz9GjWvEa4QnP6J6hfrbDt1eJsbc7q7LvsJMDxt9y8ehMjk1bMJcj6H6VQ",
  "key3": "4p1nKKf7FSAbokHAaJPtUCWKHocmmAj4eCKas7zPhDLQ58X9puZpW87AFJBRNqk5z91LjZechMrH626yyKkvpC9q",
  "key4": "iJeYV7Ha17a2Ycqvy6iHrxJT9sJxn7jG5JGPwWjZHRSuW2hPZh7dwTEBzWPbMZSrAEAveSMZgpiDdP37T3j4gF1",
  "key5": "4w9roQsv7AVXH9zAqd7Q2623ArBmtcFVvW1hqM1QogtNcH3NU1iZPjcXvr3KV2vbEAcUFYzCQp4DmBMvTQXUTBme",
  "key6": "vNx7b9bKiqyiezofJiPzd6QLGZJW67t9UC2yGoUeF3Aid19N6ENoLmX5YyyZ2bnPtxo7cisLy2YJRrsyRNiqufD",
  "key7": "jd9SHq5hBR8Q42pYswBsJDqDQAfyPXLizVGyMQZdGdq9dSoRSahL6ZEVF14ze1t486eKRcpz8nnqKHxGvWf2qxU",
  "key8": "WayUZKUm8pwBp2TVAZBW8aTz7G4BQGgz3Qmp5do2ZaAV5hmyf3HphRvVww8kefPq1eJsZuaKiuUeH7JaJ1aNghe",
  "key9": "5N9MKiQx2rJADVnFfbfNS3cvBeWYDqBTAD6LY6Q3vv2UzKoWKQpPvXj1gMy4QH8GBFyVPKicXR9N35Xp7bk7gag1",
  "key10": "eK2eBbX4jDRFcnrq2Fbqcv4y3dVDcQt5w75cU76Kh4jSeWKkGV8B81wv8cxAaqKa9DCaymA5A2Mx68kdeJkzMUm",
  "key11": "2zzj3sNBAoSRAX6mvWZVtohzsN3UReorRj8mDGDvHn1HKnsYvLiug5JatfvecYwsGGy6gtV4yE2pe2dXjA2SDdyV",
  "key12": "4APEZiTpcAXLhG7zXc8fYcuFCbsBKexC4A3oVBp15EnokxjWqnFamYdvsPDiNaBiANbN7JxZauKTpF3873y2W3Sa",
  "key13": "5xP2qByfdGXBWPDsc1vVZCn5dweYpNoCBoCJRYXA9VBDb7DcUbPS9wfvPoJMUyxGMGaX7HgYDWDVvWpM98xp12ka",
  "key14": "5Mjh2NP9pKdiyiKx1dyqMgz8PjzT7Qjmjbzzrzcs7kqP45UQUumBQ36ddNjmodaBJtYQqJHFBUN33FxRsWxeou79",
  "key15": "5aPNp6EPYcz3XYvdjK7SpWdrKwDUsbMDyg2N2sYspDEGZWyTWhMvSpXYBeRP3aQpGXBHUUDNgjyHgc7bfy3MVZ9P",
  "key16": "gFD1ccCKZKhDn8micBymE43meMtwALosby7jYgwH8roJ2CBVMisC1XnjeqwsjhG8wC2pXKs8aJ2L317RJ15KYdj",
  "key17": "QnDBMcBfDPpaxwyudr1eiuKK5vQvgX3Zb2ELNjgJP31U6Hti4vohPALUfS8n2QUYWcPJHynFUZ4HptFajECc3HJ",
  "key18": "3Gtn8zVS3wr8R2tgFs4t4UWEDsSN74vp3vAm5KvBQqBChdN372DnPGfS7JnjZVLqR5QWgB7mAJfQVKEahrc399tY",
  "key19": "3NQSgXKKoP2PREppypFq9u2TpwSkJGrTtrsTNm3d6UN8bPCR6ZQNJgd75XFq6LRhTxtvTru4EF2gHzdfHLqK12yi",
  "key20": "2f9VN4RBNJZWCtfcerU9XpnB2oDUnY8CHnZZ9jFdzFTBwS2CThix2o8jLajgaXb9hBHL9LuJzCMXAJ6Czmv6xXmL",
  "key21": "4jtRpGPKUrJmirHF2jPiizK4MP1UyWX9FuqKTaXnUpksPi5sCKueCBUeB44zLXVfFSFs3DU66ESgUVaR2AkJvX3j",
  "key22": "2zLKQuwYaitgGS2ZRxoSnLKV7VCKiPdWzWMBffEUBs7iPbPGutGTgj8gPaougUyJJaHSQFNeN2H8GcuKQCHFiYQC",
  "key23": "2Y14LnDdW3V2ZsD3xPQbAGz5Whfb7ZKQWaqeiuaW2f5j3oyBjHK4fen4HEVxXfswXKayr6bEuZpY9XuzzWjw9fd7",
  "key24": "3CJVvVgnG2dpdwxWnvHLUUggDpgMVHXxrLeHbweQvZ6iJQzJiCaZLda3CspyVKTeE9NY4zwJSQYddJXo4LMAPft6",
  "key25": "4gkNoFvps3HigzoYNKmPkw4bmVjc8wpntDewiBdNRzB94e67LJ6yESAEF17LQYDdWG6SJYiT41gCaBEQ1ThJAH3Y",
  "key26": "NCW1cgZiHTbxpeYqr3J1Yq3mfxbgYmYEsVZaaEyf6aZ74kD5J4uv6pWBz7zhfkE5wnqdNPUUKA4AUSeCCbuGKMU",
  "key27": "3xXRVigECZpmv6Cj812RwkryunUxFYbuhtrUpjZWD5DFwME5AcajJ64hNQfA3EYUaSDdJ9UfYeJoeVQ27o3GEfFm",
  "key28": "3Uwyn6yYMoQt2seNwAmbwFfYEwnggA54MrxeNzMwgdkXerhpQR5CaiMLhrucnPssFazfGuxuu8hNjQZsZQmU4BWn",
  "key29": "4dxPCLy4veYVA6fXy7FbZgCpwjXpmDAZRT2b4HZuQYFXWEyPuNFhvDiwCBoLcEVpD9SAtJ8FJvLT7PjMvoyDMrbL",
  "key30": "4cSAptfbzeUCkyqNMaCk5Hq8d33mshTjv9PKynZdrZgjFaQHo45txuYUCCp7KXkVqz59b1Ze9bBg2mSPfUAX8ZTg",
  "key31": "54n1deikHm2T9ZP8KsBwB9MozCxgPFEAkyzA1Gx4nuEhf6yLmgtABgWtas77cRoStnnmw4y3J9tyRRxq3ZTbg4wJ",
  "key32": "4R1BdjAzM8D4kdXgioGoamKDeTXHaEsjrZam5MuqboniAzMKbjNM8QgXo6zC1KRsXsJLEYEriXwCtubqNukJxNxt",
  "key33": "5cRnMXPsRS42DL2LJzdiBcC85vGrwqa4MchDNQSEQnF9aeDVWWt6HLwfd7RMWhqhLwadpXcTMZrzUMbVULQCckm5",
  "key34": "5aCG4PWh59gCTEBhhGgHFkJNit5ovSn2MshptNd1PZGPUhvEMFk8v5FgC2phSD9nWeCWePReJ5CTWnhkG8hnWicR",
  "key35": "ESH4KPrZt35rTr4XCAuCauVGBhVHDa6HttZqSiwvMwfPHiH1aKrtfDNPNj9Pz2eZptf1cA7MDaBppJFE86QVzF7",
  "key36": "VkyeuNzQNVGZFzdZSYw4iMGTC7ir6CS42nHUU1e4xX1QYUMNrgRFk3wmHnfZ1t7KaEPkxMHNCMynv2He7JfsH6g",
  "key37": "34JXQNg5U9xGhtKC2MVAp16gSkhNbxZWPAcsL3QEio6fMs5KJSdmYt3uH4JbRe814zXDNHtEiyYGw7SVw2YpkGBk",
  "key38": "4CMTC7E1ti5gXWVLj4cmXZfxqosE3DW656JM6hLhX6aUmkgCi8qRDfwswymC3CqPK9SVuqPSMubNnguwqR1PmtJk",
  "key39": "qsxUbkeowDodmJwtdPWykTiFvYzWqGg7r74hdpaM6NTJB1m27EPtjiknmRJmH6vjjmFRXZ8PGTgrPHJAKAQU7zN",
  "key40": "51LrYVcDVMgtRw3HLuD4DR2Lyv95iwWMbpFRzn296tPQNKGqnLmZ7umosBrLJJE3Jq8yRS3fRpYcmNx9wYhsGPBd",
  "key41": "3UvVh5jVi2dpDAmJHNMHeTbWQpJCunguZEBoh5LL19Bq8bicKxBH2siHc8Z6o33doL3kga1BRmkUKWGprXCCMfKF",
  "key42": "5JbVVMrdS8fDe9A64guFZgAp3ibkqheoeUuQuJe81Wg23GpRsHkAssptymLkxA4cdw81GK4VuuedoDeuMuoDKkPJ",
  "key43": "2gzDQv9MoxRG8oGsVxGRTT7jLn9MooMXwVXcHA98dgkMjmB32ry2Te29JKGQhmHi4ESF8nXFYfYvf4yzo6RW5wvM",
  "key44": "AwdjhREqRUMrJZ2wtCor6yYseYfC7babdQRnxVGY9VKkv3PEycZDuUJ54F5wJktNkAVUzQafifjudsFR4QwLRRs",
  "key45": "2B6qnrbH9UH9T5fQJQsqctVQZ2Kmm3PgkxMxrD74ZcZYcSCRxtgdHwNj2p6SjAQwVmUXuPKNzyPEDYgxBuL3URkY",
  "key46": "3wxURTLbdyd7d4NcuJegbhestZgoPwKiP1epcLb4xekGjNqYD9NFFU3awQutL4Pbm8bgig35qMwnQu2qakwtAfrE",
  "key47": "23E9qzqGwD858hpEsRqcBExzrA87jBT1ycLasPGNjNBJhSv3XuJPX4KmiT38JKA4LzJYNyr9Hy5LQbfS5KjX5AV3"
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
