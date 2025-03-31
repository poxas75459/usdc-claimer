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
    "4JBTBkfWopUbxNFaDM7UFJsAUNDTPMY1p285iM9gJGXynXzqhvkzBe92FMJT3Hvit7izgvEyphmk5X9pDqB5yTqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZQmKChQE3FayobVjAgL69TamXyj5DW4dPtEWnbcsZis68Mo7GiP5Tie9MWGgQ1BB1F4QqZJ6vR2w98Z5baT7QXK",
  "key1": "WmTuhtBCedhMAP35gFX6ohPxP34LFwsEm2UJUCMeXeNXPCk4ySuXyKZWFtuooVjy3hE4XHqK7TbwCvcAqcCqP2c",
  "key2": "3SMrHGWFeuqu3TTuGe1Fw6W1RDrE4d2Dr2ptPyC6APS8TBTvakGhD2MRPm9JBorFXzXuzLmubSVm2YFJRzVuxCk9",
  "key3": "4D7GxLGKS44H2LHt7Enm25pZ896n4KKn5AEhe2uyhfTVgqmYajTiSRPUSqusWDhfh3WSZfgAHDNWD9dJEKvCTx19",
  "key4": "2tKFYtU2qkHwb9Xp6ZhfoYJVe3xS2EYgz25mcsMHyd5CHgjLUWs22Jx9NEb2kZ7RGjY2pWJhzCxV4ep4MJfdgzqE",
  "key5": "5yez49z2TM4cYRsnAUsUjkPVvYLrxR9efgwZPitveizLRH7YsjVkpo7xnfbxN6ZjZjtgr8qMboZ4goJgrYX7zBcE",
  "key6": "4j1mBmjugUKbhCnqdYHa58yE1DVuHjStpnqU2GJ43nRszkZ9TqrdT7JZVmK63mz5dnyTYDMCJ7W1gCskw6yEXXQi",
  "key7": "fVq8sZX7qpzw4EgBg27kb1Sf5Pru6FdJSuHhp4LQP1TC4ubzGADDXf4uX2DDu6Niy3biHLBi2gKCXPcDbS57Ufx",
  "key8": "65NzYTJV9Zzd3m31gesnVUgfBHhJTk96Z6g87KdFhNnZAzNwvaTfmoj8t7yUdxYuACjLtBiyZadiE6nJ25Y8tWSA",
  "key9": "43RS2fWuEv1ygR4pn4Gb6ZNWEpZJCvyXxY6WBBP1MUrLt7Ner5xDKBSKu76FxfLTBVNZvuihhaiPmWduUZAcjZjY",
  "key10": "462dYZY2EMvQUdYVLpc9aTh4GgwsGkaTYjwNuyPiqRLLY1Y2xzVsdpVAgF2djLCzsuKzQikQAxxZAJEPh8xnDhRd",
  "key11": "2VMwas3MAXQq15JUEzWVWTv836KsayZhm5UNA9onGmtzpW54aRLTGbxoXViqktSsS72LeymxcLeKxds6sFpAGYQx",
  "key12": "4aMLCgPapFQyuDLtLTuGuPz2KAnAdjN1XdyNZaiM8M7juQ8FRZpBZ3Fk8tvdc9iKYA2sPizZTtBvNgPdx2x3Kt8u",
  "key13": "3C5nPHcRsNc3NfJkD8n6gXbRgtHsnXa83BtYY6KQBQuDmBmnRytPBULL2q3MBThitGS1kgXN97HWufd2hnnkExnB",
  "key14": "37AL1xJ4VSLAPWh2SR4gG989ZJS85KwCUhN8ha6xRJcCAoDpSKrunHhPMwQ2PDc87qEqTkwtkucPfUdavpU15SmX",
  "key15": "3uGczWjJwCJxgxqiqK6FTsZiQ8XV2b98CGDXFkkT2opEQTWusLarxgWrCpgxda7B6nyKbGg97GZ77WXxiChVWnbD",
  "key16": "2Hy5rcQf9zgTmJkUTtFx3ehLVUpjz2ZjtK9QnbksiRvt86fvEo9WdtALDz5wB1Xq9yrv9LqydVM8tyXi1fWvFdzf",
  "key17": "27peEhSWfSTGUsM8MFEEyhMXKHJybg1hHJXsBCb3KGUMtwxHi6U84ZwFVeK61WRH8pU2aCVB981MKE34tnU7MKJc",
  "key18": "5XsqEKef5Dut5bbywCBX6b4TvNErKSCVqEDuSwJRuRA36k8aKQiebqt1w45Mbspk3iQFAbTx3mQHyUzvAjBDsAL2",
  "key19": "2gzw9db6ZaU4EZ7QeYK9HArrHgN9zDAswE8gihoL3vdZqJ5hc2rvnfeGx715bheF9PTqpS2ruoo64ukjRiuZTDNK",
  "key20": "4pyEdKPBcPjPxS8w8ky2mrSEUkSjm3FcAoYkr8UUSh89SALoi7K7EJpWaDgNBnSZMPomzCzHygj96fbEjb2GzDwn",
  "key21": "t7afE3NpVFc8zm7p1ERDZHBnSX2iUBL2aC6zXGRAvu2914vgi3NnRmdVz5bBQs7zYNmT8DeaQKxWiebiSsX1VmD",
  "key22": "SJLzgjqnNSY2bcz6LM774LAEV9M4YD2CsHMsEwkdicVUsCBspzU4sTD1EbKPmgW6ZbzipCmcYDFMqwyzmhKNJ2j",
  "key23": "65E1dcQ4Gf5iMKRc7net48V5xqiMBsHmyvZH7NVSEqYUFfimtANRhRJzcrsHf39yjiKi9L6hJtSnt75B3Q4moFR5",
  "key24": "5U68GMEnkoHMo9gdFe9D52BugmAyy5vucD2sf8xG9TfRfcxHGhgJqTJCWyDehWGvsByhsh7kaReXuyAmBtcDVFAs",
  "key25": "47zgJWso4n9n7WqPycnR25TikGgJYK7q8VHHMh7TWErGxM2TCfMFVGME4cyKzNMCMztHGrwjPQcSXYceqQohyL8E",
  "key26": "2ocC1RzU3hPKrzVgdXXUA2NXwrFHi4smk5a2eCvQh3A9NtjVBwDUZ6Z4jhAbL1HZN4nmpNuCZRSzkBKDNjnrk31b",
  "key27": "4bqZ3HUCtpBrW125nQKaQ9Ur1N97mCSuBo6edrqBcwhuzGM7PZNcaY72D2HzsLHWB56HJx2NAHGVHupjjiotm8Bc",
  "key28": "5RUjQVjF25U2mLTSZU3VkCq1YwVCkhU4o9HQTLQyioUViEtN9uj9fQ8KJCH974LgZLsrL6xirMmC7p9KWpU42h2H",
  "key29": "2xuo6DfpJ4H1pFNNYKTEDUjYXNRRjY9uLE5x96JBjpnkAtnkC7WstCsLqbc1XcWHCuKgojTck33eRCDKQpeaqwea",
  "key30": "FS1CQtatHLG2DPcLihBn7WTXn3EDMkJ6Nn4PBA3Dc8BA1DrUhBCNCkgwSg3iR4Ttw5p4zcfQPvEqiTFUh6PWf8t"
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
