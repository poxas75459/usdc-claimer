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
    "4VB3QHD9dztkdLbvSsor4ZvPZL8WhzyRuk9drWoCS8dr5oRepLec6XPANsY1PrctG9cM8pNvnLBveeYmdXPkEF4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s3rJKCFnQBbGjseeU2BgAB2T4yF4kPTK6jjNR3Q9b6n4ZAL5AvEEGeTB4FTx68rZhf21xq4Kjxe2eVPRgWyxSTt",
  "key1": "LYT63FhhpYnaGtyKNfzKnhrijCk4EttYHEdUegz9b9HUjcYat2575peAqwaWXnDj8L9AvEmd6ZZGCUcj3G1nvKC",
  "key2": "4VBPmk3BKGMqQD3AVbh6j3V32KdaBCUvYSZmJpk6QLiDYUK6qWq9y1zwaZg1MwXmU6rKNGtZdhS5vnaUkWFdYkLY",
  "key3": "3DYJTi5MteJZKyMTxda5jYPa4oGAsUCk9ar39GFWx3Zv32eY5ogQiqqS1jJtKPZjM9ac21rqkxpxiKuQL36userM",
  "key4": "66GT4GF5CEfAK49csGtRjcuZGh4dTSMLDR4s3dvD1DyXpCQYbCQsFUoYxXnUHazq49reKy5oLtTXGLNrXGwmndLf",
  "key5": "ftSYHXpJkYZ41XoUAoQvmnoVjEmEHuEeRY9YFCbxmkvJufbHQSMswoBTPJtByYrofmmC5E71TtdJPMfg6MbhhKg",
  "key6": "5EU87MQJewDFJnjx5TESqMJ98TsC4a6jxg1fLh5pmrJ2sVWym41mMzoe9WZX7PpUX3B1anD2ywzFDyRKyp7BLYAM",
  "key7": "divULJkShAxSbnXTstKYsJfLFZhRNbymmqMNh1BzrstaZiV384zevENwVR1GYNgzjT4wEMk7jGQHGztAZackBTC",
  "key8": "2RtYpqT3BsdQHDF8qVDhT7TfRqTvJJeMLvyG82cyi1eScPi2sJeN2AnQ2RLjukLosqeHbhZWDDn56XHPqZv7jSUr",
  "key9": "5qUmCzdxr6NpPzryBZDSvysTKrmweKcjZPkCNpEcHzGz7PG6DKQjynswa6kVr5QAjbZXVoKrTiku4DdjazsdVdUu",
  "key10": "2wZsRDTbbuM7CPQJEJ36hmEXJ5xeNSLa1g5DkrKiAqusyLc8vqAdynd9JBBEVKnCnsSiUCvoiNQkdxRfiJSpmke2",
  "key11": "3oRaz3QSKubWVG5sU6k24D6JEJyL8bSdHdat9cg5HsL3F3Ky6dD4AAvoC6j5hpmGu8xa35mHBiyb74GPSZ7HWmvs",
  "key12": "5chNiwg6g9qH212zdhX8NWTXBzXRTxNGV8r8bABFM6nv5Yg2zrwdrMbWdpBFH8CDdSi1aNe5MGvuikwE6j2BjkbK",
  "key13": "227F5veJXwBGny6URRLa1xrwrhEzBEfc1CxUb7pNikuvYEj2CK47jXb2873SfvHvDzf6Uaf8Jk8vmuQzfdGL4aYZ",
  "key14": "AEc7897NSK62sx6TQbK3JmGcr1QyKq9ao9Dfjvr9P2rws7GAxUEomyMdCm4HfNZS3N3AR1vizcbkyj8DQcdCifY",
  "key15": "41kJmj68D2yCoKnjDH5SZrpQ5XGFvrBZZ2SKK82kxaxPzjXXMLosrDkCGU8YCFZEcPvRQqZhCRrqYZ1RnNvRx2UK",
  "key16": "46ZWxuATFT5iEUF29v2jveggECs94pqrASKEJvHQ14vWXxJnjxGDMWktZ4R7SFCRJNFR53kvxZtmocHgKArVk3qN",
  "key17": "5qLgX8252H74LDd9eBgXDwt1V7YC39mfqJeAXmvLVFHCNeApCc2BhG9aGCiGUKUEmxsS9eekLnCNidbBLdgEg8Hb",
  "key18": "5H8i76KkRnKzqF4kdGLoSDS72wZh3UhvF16ct3tRGq1FRqgSMPsjSHMkvvwcs23R3bc1WWVped6QQnPe34P4uhbX",
  "key19": "2fHKyWLVKPUFM6A7hTCV4SLf4Xo2yJ75RV3vc7zMoRA6QRpiS8zq3kji7eG4JurZeVUYnJQ2oAEWZh6mmPRXmJcE",
  "key20": "2ghRjFsEGUz56S1t816i9dp4g4n7r8ARAzEnxFFjVn8QouNHfodwULmntXb5Ud6ENyjksicV4ZTXk4qiArt3CUUT",
  "key21": "5a4Dv2W3E1sPYDpVL1Ugcdz8P9FurYB2rsRxT7dqHzQLh543p3TW87Hu7qMN4XgPqiTcnTPJogzhdH2br5VHS5d5",
  "key22": "41C7qiQonHgXYvfWGMwg4FWY3wiSfMBwwnArQUr3chCenjPWz2WivE3KqzSfW33zj8rQnpTDz8SLXV5ZCQ7McSM1",
  "key23": "4rCVXejBXzGC3KuW9dErTGs5h9tzz8AE667wKKvx2Nh88vgSoTPXheLHHDsyu9UNCdaNuVVeF5i8aa5gbyhm8ej4",
  "key24": "2mQrvwbWtqtx1Mz5k4LGezkJHvUJpQvou6VFpShkdU2FZZ9kEjD54wsqWSJ9VwQz6hPnnvTt2YbXPXRU7zaa24b8",
  "key25": "2V77XApa1hosGBdDcPVTTEio4uYkEjVLAjziLBzS1vm3FWrwasAXnYPVstsFizoNxBBVRXtfvxTKWbkoDJY938yp",
  "key26": "2FUJFWsWufRVzSd8vRbJX2RN2XEnXviyF1RXVDZQuAwB3PaiqxuGD83stEsk4Sa5NuzhVKss6rTBkRrPvgTzu4L8",
  "key27": "21G3LVu2RkvUdv4HEjDeEoRRuuAGQjnbjutypoJz1thHnheNND1SCoXCMDCTWfhdaLqNp618XtW4J4pQZ79HrRgz",
  "key28": "9cbufAP8aj118ZPHrzvsPNEUYvoyWHCXxQvjQmbkiCf2zPnrxzsd5RvKcyYHwgfBDzDz1vxmw63dLcVgEieQGRL",
  "key29": "jbUF6kBsx2p6GTY3xgoScaRppqqfPDBi3ojTkTXibd3pgSV5zDgDxTmCCP34qD9Sx6yHc1KHwmQhKYV8K8tCJnP"
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
