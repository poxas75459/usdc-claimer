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
    "5RC7vhBe7xyNj7QR83r17uVt17BnbWgsuZ2gWdvkWshSUUexwtedZRFoV4ctKjrmjhsvrq2WSc3ijG1kKVhF3VUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25bp154LNXQmcyMj5Jx35aQEf6YF4fkuyenxdrWk68LWQbezbZFtwrMXwAd367ryfKJjr5EiJYiAoDD32x65gh9k",
  "key1": "WimTiNm2rH9tAdKiAPz38mpgmmjTKjASAwc2KYZjxDrphF1y6Wertd1rHK5KZYJ7xoP2SJ47y3LVuvKp7zjkJcA",
  "key2": "3YrEapeL8XR4G2HYbvUZNVeFStGRwoZXf3sLRZqYeaZYqSuCfZa8dXjk5K5KHChqH32vGNErmQkBkP1NmxxWAChH",
  "key3": "4tHqsWxBujPzbrdayG8Gg2dXCWs9MhijRMUBcKQkFcjBq2TvyRjCt5XJby53qmki5rrCW5KH8TsfD8N564ZZVdtb",
  "key4": "4YopN5Za5DBn7dCxvGqPLb5tqyUbWpxes4RS7Y9fmMekoBW5K8fonmavMa8g31bwscd1NMyzG4BdekT13RAy5LQo",
  "key5": "4Xf65SYdPt9WqN4PJcitLwmiNqcfm1fbLsECTX5iVCPH1n7m7YSPLE1ZkMenUC5rFQ23MLf3HY96DLLp2Hmhp7Bv",
  "key6": "3bS5khQ7DetR7dwbjxdRXZMtXJ7zEBxhqjN4bap9CZVqWd792NHwnzuS1zBv2vLe9Z5kjx682rjZ5iwbFnovSjjK",
  "key7": "5FbeZuSS97SgGgUfTgkLk9ZiJ1fjd2MFYrCFfv2MKi68sDjww2utFqq96grfkthg7FuRHNsMevxjKu48k7kAWUXp",
  "key8": "4rVE3S4DE5bmFaC6vpHzqDSUFfBg1LdzDxWofAzV6djW2pBRsvoYz4x61L7BoAz9NPScbcxnF8tzxJiNKcXDiXW5",
  "key9": "9dj5cpi5XPSEY5q7bAKQW24mAid5YNqPVicQzAsXffK7Fn7Q1RJaAuhosLdmaKhk5FMGs64oVFejq6VZgpmAj5T",
  "key10": "3JfKQTdseppH1iNfLM63kULcyg2wCXH3pHGxZdGUv8rnTjRj2RJKKEGMgA15YZHZg1A662bHM66t1uxF8SZ1rUYJ",
  "key11": "4C3SWNSKc8xTfPqtwUwMDKgwnA8fT4y3RS3XJxqzp3YyuPLgkvXQPUrqHo31YATEZFQqXoxn6SiEZy1iPWdJ7cze",
  "key12": "5GLKHw6DgHrLTCnqpXvhUMHc5yq9F2FSwWnQ1fpjNe5ag38TPv5fbTuUriE399NcpMRKiFEt3w146j5DqjXrF7Hx",
  "key13": "35aTWjP5y47ahGj8Siif8B13SWbMBg2YJdpT5xDdYxyoD1QdXKA8Rio55cdcqCwPFHe6cZW7w8aHSrQ6BoMJA9Zs",
  "key14": "2WdL695rf6KL9idY5YwwP7Cjdzac2ihTPjMfxTh8F6mZxEgjrsSeKiVM69SvL7Nk4zyv13QbLe8kvUErSUj59gXz",
  "key15": "4oWrk72HfF9znEsjHvNYSpR1BhjJfoCMxufGgNqrpShy2JPBL3ftVTCbogFS27NAt95GzPocFQQH7frFZMPKdaNS",
  "key16": "Uf7NzUfPRSVMShPni3jTE9EnhrBBY7pKzuzGVB2ZHGpfyNsQwd8sWvpehEMG5z84yyKYtAQheuKgFDGQao1rgaX",
  "key17": "nQFQa8ycGRtRso8nC6HgQ8WQtPFM45Vcovcah147iTyABv2SYwDKSiA8CDqLAkjtSiFDQ5bASFJn36oEtuMyj5G",
  "key18": "fq7h6ULZczMvpiNq2b5w1zR5abu1wUQ6EbrxppWhjgJ8XfNoCT811BAXUMFCjRq9SYoynBvBfiqYuoM5DUgS8NN",
  "key19": "4TXL6m5NZgq1JLY9skLXXp9oWzjZ8pARWAcshGaz8niHaFH37Heg6r6KcRAtR1MpmbY9jH5QNGChijF6goVHS4vK",
  "key20": "2xps9zbunnUu6caDeSsFsbBuvNKn2W6NdRwKkpSeD4XJa5JkgHX8nbdpgbWg6S3rV4evyHb5PEQ2NVy5cuZuiSKs",
  "key21": "CMtJJtDMBKTwX2igDmEiBY81F7wkV1pnXtfKrJs5tq5j8sPZNuvEjL8Egm42UeYeAgFzmbkMNZRTL31nkKeZqkC",
  "key22": "W16kGxcydAQ6ugx4C4c3pzt8Ln7rahiW6Gqa9XhxavT2o2CioDuQHxhBG2Gav4YdRPDyh7snAf1WoMK4p5pJyGX",
  "key23": "3bmoNyygHA44xFwG4QREW7iRQTEGSEnfBiWZinwA21tosBFNDoKiwnAjMvojjBEhvMPrqdqzeDY4mGXLk8n85Xcj",
  "key24": "2ZwYLfUTMUd3ESVNykWoZoDQWVfzvsB9yikunK38GAEALz8yuVuwr9M7X1FfBShsgTNhvw8oPDSSHkNauR7m8trH",
  "key25": "513wuVsbEhUGwTcsSu8cmvoTYLwBnWGKjCRj978cu7dVwC5uDHErhf1N77PnmqNaLesDKpXTpPGDktsQa5VDmmKo",
  "key26": "43oo16neugCrfbMGGhMJrgGoafQhhmEP6wQAvwaCn2zQqJJKKgEikUEDNbURH8S14stCCa9mxsRUeh94T8pyodcj",
  "key27": "YNdVLCeLTGMDhxL2oL3bz1An1xcfQNNZGC9X1TzrpkgcB6yJTdgUSP6Aaj1SpiP7jHbgqBTRy45HXyjj6hvLv8T",
  "key28": "57575c6jWZb1EMoUSdtt9wWX9NkqaVYXqErknTS24D2bhgza56YcvDJH7n4XS5cdXwZDXPVUmeYeHYeWqH8JvQHC",
  "key29": "2UTwbzRZKRfAjeGTYtK2oZT9x6znkoCBsXkmzxJmeijd9CaMBwhx49hZgfpNEVZbrqHJZckLBmExxmduZBK1LELQ",
  "key30": "31fYDZ6oyYdfRdxtfbn5VyJ7oxgCtFU4T1p7xMe8AMLu9C7BLGZnALxqFxMKCi6xC3TAaWF7KiEsYKyik7kz8rtj",
  "key31": "4AZLXWijH51fiFXrjJxsFcoBUe8SQAARWoiJTmxPo5iJL1rZq4YNccUrXyTeqgyBeCi7DxtxXcaxYc68j2GoYZJS",
  "key32": "oQLRvTFtPe9XHsbpLyniT3GkJLqWwR4bn6PdJPbS8pVVyVtmg5H1KpvR3yYiFuQ15tPZgvFUq8igzHGkzZmghnX"
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
