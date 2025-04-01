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
    "5QLDB2eShkeRdXe78WPW3RWnwaNpPcGn1zbYx9QzxEgoq9JPqzoPhrDoyTFFLbjXxZgFKBC5TsAberBdhzzdkhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b9wP9kiDftqSKwd6SSFYQ851w3NWg9Q5gvswHWZ5XPVoybZcq7L3VWaRjWoAhQWvVtPRjhMR3Nt3rpXxC7E87x7",
  "key1": "2V56WFTX2SqJB7tNNJCaAbD7nCW9TbRPsgSZRpqHiXD2RCBcczeBvQkDSZ38fZ9fTAsaX91xY8LQz5aVP9uDud2W",
  "key2": "31YpzLJGihGFpHtNwn76kj9XTA3Zh9LcUbZmuq7nUXTFN4qt5rbmXPRjn79SgAmNWRUjbH6ScnNULE72KbSBHbS3",
  "key3": "4svLV2KvZh9CjXq7BUnAt38b18GSBwqyJEWrWeYLCG1WNjpEEu2wibB82Rtkrj8DsgtZXQG1PvBibzs5T8DxYz44",
  "key4": "Sa3BmUWwxnHofgA7Nce7RY87BPSbVUH75AkA7gmMtJQVwZtknfPJfsfPbwwXGDxqLuMyBSUXd7n4GUDLrt7xdZy",
  "key5": "4PCXXpherAhoeM5SfvoG3z73E74Ga6gsjD3XqFsEUmcDbEHD2YP1rotVCks8zacCBCe1xxao5w1hCUb2tcyWXXrG",
  "key6": "3HC7s8vWjpqVgJKEFnW53QueDa18M2Bddv574EAmbepFn983evStnLek1biWSrjsYUgjyC7MFGWPyBVBUCkgX37h",
  "key7": "5MPjvgSswe2DLfDbLA9zuMkGFcFsQ4CgXMqUHqMcVS1tpLrK8J8DzCb61moPHrXaECCLSwkpFsw9Kj36kNaPU3Fr",
  "key8": "5xSHgDBxHPZAKq7T6j1a8uddedjiNbz261Jh5uyqq8w5De49ytbGKsbhd81Y59Vw56TUiFzc6mcQnREY5cFs1Vox",
  "key9": "5zc4dp5CNS4TC8QatWjnMuJGTXZwBem5YVGQDDJoDjS4uiNupUWL1eT1Reu4bhbX324zZvoajkKALfp7yATRx9Gf",
  "key10": "2LN7b4iYm5qCAJMEgwNZmwChwfwpmr5J3sRXVdH8JVJUiM1YocNV9JiuNme6NsxLFUJ7y6s6VuCzg3BmsRyt1Eyv",
  "key11": "2Wy2t8tqHYfqCVepsPvSTWJybyBW2kErHwfECseYVVGtPa5XNRF9opFS8wF68vbg4oYJMKmjNUo3AWbUqzfixiNQ",
  "key12": "4aRsLThq4H2PESXcQ3X4og5iYbQ6c8BiBtgt294HcqYRwTVkPWgsAuasrxUvjSpaKjo5YCQMfrwPQY6JHsA4HbHL",
  "key13": "2tNBNQJBcCxzKYL34bzdweUeYoyBwPMa3myXPskBfDijkMWwdiW17GRBPguwgAzgzdNDqfVkiRwespuE6fKDH2RZ",
  "key14": "5nbHufAhnHWyyp9kmypg8xzcLmb8ViruR6hV6TgoQH6dGc2RUGyurSuakmCexZSgAJgo1D9E5R1ydmE5a6FgjQ89",
  "key15": "4LCBGoa52EnSMVkzXdpAfP3bya647JCAFdT5tC8SREzmbjc2RHtWZCTB8LF833yYCiMxQGjJ2ivGv2tPQAiPBwCV",
  "key16": "5JCujFEWwS1tsXD2crMrnm98quWbxF9YnDw4ArJAfUHgps2bf3vA2vR9BKpFsZMwQz7KPf8WQwP4TvtRivp973eK",
  "key17": "1u47KB2snaqUwYzRe4o4tFZ61JNbd7Agm3CnJyFV7WgCf7wqcmm9b4RrSM587zMxu9P6fRfm2TYVJMXazELfCMf",
  "key18": "3N5cRXgwqqJ9XyCy2ZRB8YWUP33cFnNxHVnGMZHWPqdbBnGRqDXH7CGZ1yEYx9gaxNi8Zw3GsRFfQHjyqvV1bT68",
  "key19": "Y9TBpXMEP5hg8HtvXRAgKFPQcQ7ARcFHvwVbdeXhPe2rhogq41kJAXJH1eBBycRo1RBJGvqZ6QvACcZYfnJ1jCq",
  "key20": "bKQmiFjxDw7xvc9Ts6mGSD6Nq3eQCtJxFoPx1BNXLcpPNMv7zpZchQS8DJkpq4hykHF7SBTjvtw71k69y3M3vjj",
  "key21": "3ifkVS9UNc39CdDL79RrcVjJRe6QxXJK18aGyM8FyFTbuPu6KPADjZxKPbDkzaAN61hdXeZFqw8oFt3g3e7K7xCx",
  "key22": "2fbq1Rj7y3UyQz2Pw5s2mFfBRjBdfibKcZiSrDCUtqmU2ygrc5KQEsAynNKrjRwY1MmAkhawfatVRtv2Y1FxQAVa",
  "key23": "65zj5ZdnJQMe1sbFeCjkaufwo2BGykwZUUEG9WKbvnPP2mKSmnrN7mmEd4PdAMepHS2oxiDUq8GkCmsTarDFUsB7",
  "key24": "bP9w9jJmwdkCXTntPCSxF7RDzNmfMMe664NUdGpbWo4pGR9JYQ49ERdbSPjntoy7DaXhBm2JSRw1HficHwXWXqS",
  "key25": "2T7nu3nwSf9gSuMhc8jP6U2N41UhNNygrNnn1jn9RJJEh1bcpth3PwpCHizAS9zvPNEFLjJeQXAMWJ8pbsXUWm5k",
  "key26": "32DcHzRExv6MvnCnpdPXSoeJPLYoJ26yfk2Yeyk7FjsyEfB469o7qCDRLZc6VqBug2CKwVtoyRKxsjmTPQi9qqC9",
  "key27": "3HE8R1Bh7hGaaRZfvj8WdcjguJtvEvhAi5SLRxgpR6yk2vXzy78KvPExxJJb6vfsz2GKwwsyPrkKYNLPquEQ9emh",
  "key28": "5WrfmQk5GCM3srji1SSC1x3eoCodTrwVS25xn7YVQitXEurMuje9SvokBgDNBZ2bwzU8Jj1gn3nQazX9tCSamScH",
  "key29": "2wvyQanw85LqWHgkQrFQufKLEYQRQP8hmurhquRr8faKAJE4BLSjcBLUngN9eBiNxnsdCiHbRLi4P3S97bWCttSB",
  "key30": "2ggrVbj6NSgVEqpmWZvAAobTHo9usk1XgSmsrhCy3E8b4iH9dWazhksyg8U4UsaN34XUHTBtT3WVSLBVyCGMou8n",
  "key31": "5pbV7Bejisai8zS2fajKpLorqLLHvNfFmgU1Pa9qVapx33iWjtt56E3nBhrHmhmmXepwUnqnpR3yFwawQgnUeNE3",
  "key32": "2ZKnqcYeRRWRbvi3TULx7PNppUbtfwSnKskmVAbeEKKT16fs7ptJtHLcWzie1P3yRHRG1LQ5iJx3vDHP1LQfpiDp",
  "key33": "3jf488VLhyz3y4j4pkuMmfdFL1V5tW4VFxhucpw8y1Tg9eDVKuhmtFfCpBXJDxRyLm9Jq85bPfXPXSHS9ZqFS8ai"
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
