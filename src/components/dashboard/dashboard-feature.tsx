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
    "5nojrRcLcMQwS6CGHHBUZaaAmGSxDmr5xavTyXaoRp5nfNr5cJjeo79gfj82xrTsDLQq86mGYjyW7VPQhr3NbNjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UT9QWLYt2pNa5rXsV5FQR1XHz4rUWguor5znM7QVNyDrCzidCM7tM8NvhwKRx7v6ruPnpNBvED51tGATnjvAaCS",
  "key1": "5VXfpoD5VcbK17f52AdVwyEqzu8XMYRSPqTurM8vu6yD9HGJMLm6G5xptAXAFrW3ovoW2jPAuWHBRrsESGbHxTTd",
  "key2": "3rmeSwDTQWvw8nML7wSG6udU6tq4dgqcw3omrgTcN9FfVTKcGFukbEbSysmNp21tfKTjm6RBANPvgwotERrdRiC2",
  "key3": "kjcC9kNYrn6DEZVSJuda4te9KNw5Rcszgwh2qMsTNDQWtKaeazsEGUH9J7xQB1E2z7STMwb75P119L4t9acSWgi",
  "key4": "5qxM7EfWjbPpUj4B1UMoDxSGXJ7NPsugXL66QnFW6n56WF8Sxg2oAd1snZqwdXejZpuiykMytvVxf2UtzVkYuq4",
  "key5": "4sqLHysV5gwoRt9GtyD5F6zKjKtsPLxnL295MewGP5NH2bjvDFYFACuNU5Af3VEGjYyf4Vh1LkWcWNo1wTJE7cnU",
  "key6": "TLN8Z94cZM7kxXR3ZwCa7G14a2Ztmd9f5Whvq9351SzAjFnPJVsUW7wkQUSW9JtfwUtxHsu1JQrmPqSy4x48w1a",
  "key7": "2R1F93wwVHC9FVuybuEKpdL4FUhvUK91zaFV5hUKHJuzyVKph69cZe8SpzJUYcY3ZnVopMmvpqsmqmN6ibE6acbX",
  "key8": "5SUm4rmrwhmi34hzSpANNUVhfaLpdTzh6XzDNe9WHuCDbivVQAVL3wWTYtj2PtosYkHZc6KuYokxGKVyTk5fui6P",
  "key9": "5Bibj3SvDJ3BX6SQgskcALkKyjgda6yuW9kcxnPXKNePd3gDq1mBjFhHir1PveAwW26YqNJ68GdAsvPeQKFA4GZ4",
  "key10": "4junau6MeHLNFSsPK8HRajtBaMpfdxesXW2fTLPsa2h6Y6w8FfKzpXxmxh2xG3XFWs9sHVURR1GN2iSwHggnLNhF",
  "key11": "2gvmSGG92J1CtQnFFUz31NA3gwQxaomwbWxjUXBMsuyMpW8o7mKcgTtWB7aYwB6ivJynywihcMugfhySvzmk3Y1y",
  "key12": "JxkMCcPwwLmLDPvY4wqPj1kBSVkpG7G98tM1DThyjPFsMHSZ8J3MLa4T97awXpsWzd3ZsMoUzeZRs8hu9jxeReq",
  "key13": "5ZVUecam4dcD4hXX2ygf9sa95ywmeeF7fi1KkpgpLmUErBQoXap3fjqDhw7gzKbxb9kEq3CxMWJ8LL3jQS9598PB",
  "key14": "24oktUDcPGzxdsXisKmJffRrm61qsKwUHMwrKwsEhtPZqAYVPVv4cLUxSz8NmpGEhr2msuWcKom6r6ee1VTEK7Uj",
  "key15": "59cGjkGuGrtit9oizAyCGw2myFnq8Exs1HkVQLvzvJTujPYN5rG6heWpDtUqWbMnmddWjJtdyu57aq3UREes1mPn",
  "key16": "3rvqoExLmZByAF62BGCBZJepdEttkiXaQDCnDoxyEPmsTRpLqtokP5YwM3DTBKhhB4ZTmcqLK2gq5EGkqTKWvPNX",
  "key17": "2k8fDRPwrpcTQzaDp3u2eEwztRFJVjYpMFnCM2dEt8EynXVRwM5cGXR8KWHFPKXkSw4k4rT8SVe4w7CDFESVXpTz",
  "key18": "5isTUCN3qnHKkiKwGbfo9U99fwuktggvVK2rW4HVpe4ay3Cxj4gSgTsrwMJwZ8Tqcm4Y1o7eGEwDhaQvr72n1yn8",
  "key19": "2Q2HnmiRSUuSNi63SXi5EV3HJoVD2XdyFFZ8xgG98wXG3zBFmqS1eADR43noFPzsDDzjHpjRYSk5vmGbiQpV3jig",
  "key20": "48138jvS3QXc53gpP3LCDZbDVpcfpJJzZBCc6aL5X3WHE5CJw3vs18bjUuDudpG8xgZgVSuNZbSA4ZTNuvN6NqkZ",
  "key21": "4i4HnDkzm9gmBUZwVxZtwTZ9Bg7FGLKnr7KdAu6SHPqDFospwvVWrNQ333sDtcb6P7JBEHrQB1xwmCbcqWWzP8iV",
  "key22": "2hE6RAQfGvq5Vaj12cgHT9AriQWPBPyJ1xGpTccMyRE15gJfo4GK5k7MTKb7yAVbMKFuCfgMPtahYinLmAZAqEK5",
  "key23": "4RRXF2GxRj2L46VMV95Fjos4SADkXPGjh8ueCKxAY4c7PDSUCMx1Tb7jRKF6BAanwcYbRyB6dFFd6hsND49rD9Tu",
  "key24": "3BJNHfofwmVCY2n8q7gKu8gFteM8DH4fMt7F82PHJGnQ3Lxvs839rG52VD5QibeRq1HiARv1De9NmRwzH2GzrgJs",
  "key25": "61fyxaeLpu5ZkSQTNoS4kns9g8ZHT8y374A1KeW7fpmmBSKtbupg4p3i5rHLmGEvDwRMVKDFxkCiB2Bse7cWS753",
  "key26": "5GYck4P1x4TMC1hGmHLvDhRXVpyVJDX2oTDsq8yytNzzZfWtVBKXfp5wH83rkfDvm9oB1q2QZ31FJk4sjezmuHWy",
  "key27": "4MuaDzYvoRCg5X8FFhju53H7e44PbFsxLQoFLbHoQpqTx9thvr4e222h6Z4Vp5WDyRFGhcnCtXgVen9VLEt8ChFr",
  "key28": "58CVhbQ2ZiTk4YcZCSyLQ8TZ8qESUXrA6KehXddTuR1uyWHGHiTP3vmfkMcQVwetoDAduQFupQ4HfcJbdsd45gcX",
  "key29": "26XW3hAqAUcQacXvPi2EQVm1sDTRdxCrcCab9RVh8hrb1ao3LgGMkeFedksrKxScZqEbyU2sdeWTvQDhdqTXzbvC",
  "key30": "3PWDucoPrqwKwhD3aXQ7YiffNMDRts4ftACmAmGxc4JS3kHqkHoc9Ru3Bc3Vi2nZL1auqfwgGNjzuFh4EELUREqP",
  "key31": "5uvmNcDhhFNWJaN8EuMcNSssvjaERmcUgzZcUpDo7rqxuBQvLZXCYEiVksV24ubSbWvcteoqfzQeX4CDZpAGgnTW"
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
