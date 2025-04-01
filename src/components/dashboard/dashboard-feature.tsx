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
    "5QE1kha9FgG4npdvvn1HLFaeyAcxXH9xNhzmYUA12HdqvrTHMJ33Ap8kG8foFfzP2dWABRsoHebRwWn2MNmFi2F6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MnLVFRF4eDMDBz5NW3BYhHMHs8mUkWFh8rjYtzoQFvqbKcxc1AzgKP7NU3oCpABED42h1AxaNwF8XdPxSR6uSfA",
  "key1": "2FsQWSQMfYyMfrKxn65mqbBCg1qFNiS7AQQcGsmVibnARrxrxHjs7JJFkot4aeiWdy1CMtM6zCbNrXbJSjfZyD33",
  "key2": "5rQoYptQwMfEsdHCM8HpRTSdo2ykEx5w5c1adnAfkVmXHBmWCeLd1dgL2iwGHw5bD3VgrgakKE9Zz5c6LeFM1Hjk",
  "key3": "3gc1hwJHFmQxogfZ5Meze4FfapsEE3o2Ld8CJDBuXnCXfuzrmjzaNTkLh17viByBE6c8h71vbAbdn4LYjuQa3VXr",
  "key4": "45knAkALBq88rYKrjC1FzuRh2eiERcFqpmWACvJnUYrDDT9LTSP7zQiVTtjX4eKR6wfz8faC5WmEEq3NCuRMjAuM",
  "key5": "3x1HFqVFUQ7kipVEubgjT4CXgSD4AvzyjCxg1B9m94M8VWP9RBmEz7bcMdUy7RLaFeuh3wuoCaaEtQaFWkesc2QN",
  "key6": "5Wu1z1BDjf5LU96SjREvUeiUuZ6fHRw1JSGTfz9TDabiyTppXbZJNCcE8wB24iLdgWUt9rqSNeG2aeEutPoSwY1y",
  "key7": "3a7XjmvDXZMzVY2mStKzuMxsKr3UUSc7Wq2DXxMqKuXa2NBAKFZ32WohiPtjb9NL2g1yyj6uejt2jNbB9iAuxj8E",
  "key8": "37EyZCPwB4mMXwwZFHrLgnpU6Q3hoRHPrtEf6j4WP8JMtnJ6b2cso1GLjtADthJBXTHDrUMvMbcKGsswGFRSQdxf",
  "key9": "4cmRUFuXa5pEFGKfvsrToMNWreHkBDCYpoRkcFSBgkitCCe8cfbTbtJmgiRRbw7siioRSbnAbDLy4CfDzLvvsGbB",
  "key10": "HS7aGiy6Xzph1bthunDauiHYPECZocBsk6Bk2pczT3qgYQVLaY6eo7wb6BCXhCgFVo9Tqn4MNu6QziYYgtd2bGU",
  "key11": "3xDP7jcSuTHsUqdUAYkArRrg7dUFmSG3fKuBtYWK55SyGCxqGKA4AaQ85NywoqwUSj5iJWFXrCKGhirpwLvhaJ9s",
  "key12": "3fDZNZ3c66hL4G72nUR23m4rj4jrT2eMmQnEGJMNSdoVnF8bgDnnh21zpSt7i12UsW9mY7B7nExHznmoY2ZDSSW1",
  "key13": "2cfBJNqfgUJVhSeonXCs6pgi523RgczZ77zn6YrvfaSLXCSbEg327CQwRdEwfUBuGrQzJ872zNsorHwHbp5G5faH",
  "key14": "2GG3snhLzHyhL4ChHD5dYMwFzAicUJZ53462xb3Nwv2TjFqcYbEm1syh52HoyR5kpHWfYQNsaxtMpBaDppKyzfad",
  "key15": "5x3rVSAYdPnMWTxXHFUTjD1Wyi3rFFamfnXnm8vQBKaXSpfFSMm1sy6eDTowAJc4Fz3Tqu3Y8DDTGVaBgd2qadps",
  "key16": "5xMrzdtmJbAHW3LFiQmAmcG4Rro4Lxjuf9a6jrL44zdwGHg6NKjQQDtWofznZyBokUcTHKxHFAGCgDoMcbKe8ABK",
  "key17": "4FfTBSQPqiagMmRrd1DiyUMjHYPCHMnLEyjQEByNz2ArHwhKXf6HSA2G8FxXVDi3ox4Mc8JoFaBSChPH425cMz94",
  "key18": "5gtdhMMwe93peGmQkguRw3aHzaWHuiKrxxpDZ8peRZ6Q24cBvdtAB5ads3r9gZdiVTECsCjdGLBMHpQa28YSTi6o",
  "key19": "2jMjm8wLx7ndf473uWMHadVXNDvNX9AwDPTDBJ1HqGjf7GTPwktL3ncfy4XVZB9ra5k8v88tVSVV1oL8KFjFjofu",
  "key20": "2Qn52GNkyyge17isntZ9BEPt9BX4pnvy7B9YsuA7Nv2pVJ9AWtMQ27PgZYrq1KUvEepWJKKk1hq2gmA2hPxnLRpy",
  "key21": "4nsRYhTzqZYcnnmUrHcTJCaWF48eGaqaEdD5W7qR1zw5ojHWe1J5bbamMBKWSz18fF66UroyokqP3nePnhbYWEKz",
  "key22": "5a2y2C1Fc7f1qD1srn9UykVHqmedSJr8wT491JZgeytHNVXHuKiBD6wTiWYodGxZc6juD25rxrD9RbjKgWM8Dqt6",
  "key23": "poKepYVngX1mnSnK3JGEnwjjUeP55vYNGXi1Pgib8ge56xv1paGsnZ7gUwBVTHVKxQEpBwZw9yneEHoVzoTEnrv",
  "key24": "4RU2ipPZSfd5uH7juLorNcyte7rqVDXu6T6goWGwUeLVGb9eZfWXsscJJ4vjPcpphj116frsEzgX2nyjxWJ7Q97j",
  "key25": "3mAuNEWtW98SUYot81Kx2pxKFFfSYybdqGXAs29umNUBz653VDftddJyKdbk1N8KHAvp3vpgEydcT8dxtHq9ZrXZ",
  "key26": "4Z2TeDhfEuwtDd6zfSVJmrhsqxD3276shpfboeU4hnViWnrjbbgMUaUk3xby13iNLQV91CRzASrALiK1sDvMSz5e",
  "key27": "2De25F6mT7MDd3Sf2L18mBfta7MpokYHD4miqVyRgivNrKwjuKhoe64uejsTN6Hnyi5dHk5Lw1cah2jsSUTZ59oc",
  "key28": "3y3hVD5TnND7xCzKcPGgjbfrBvLh8L9gCuxVn21DJbgXAX2zLw4fUpRgBQ3tx9p7HGHuiujm6neks56Mzpv8p8Mu",
  "key29": "578rTaGTrKzCs18Kiswrfc8DjnhtGrEtWhMwqKsz3HxkH9Zbeg34zK8S6HythVBnJwifMQwvQATgUinuakgV1QzE",
  "key30": "XKWqi9obFQwiQhjmLG6EDnxzGSyyeh6Ut2SZpxHmLDJ28uiwHYAAZCPZfG9HJ4VRWFR2i6vgLftaqmfskFxAqdh",
  "key31": "34czsdeEZZfkhaBfr3zK9xssQz2XpdMu2goFXkFVg9eKukmpZJyDtPSAwaW6A6Gsz4vS6SzfDwqkyZPKBqkbYJ7C"
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
