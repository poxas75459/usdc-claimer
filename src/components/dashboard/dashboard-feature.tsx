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
    "XEhPFKASQftMXe2oMWP1Z7n6vDq35WHUBtVRo6J9vWdhWNhKGXeqyoPNy6cMUA4pB7kpCyDmqPDasNMJM6FyyHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YDQvMrdiWWhnqcRujmnWg1VAUNQmmrgDoYGiUUn4kQ8fExTK9zzQDwEYgQyoC1nNwiZZjPnyNXuppCziBGD1KBG",
  "key1": "BLCdSm9byPSWhiDCk2dJ3WvRTivZATPGHqSSbPyXjw3YnpggqvXQ8FUsxwgUpMACkTfHXC8jskbREYWeJvBDhjd",
  "key2": "5L4Uk6cxHsYhhqVXGNyj4zhtx9XgDPQDKn77cdxbSkP1NuTwPqUo3Y5QMr7vEfNBcgpHm6vPRDsUiDMGXsaWNgkY",
  "key3": "5wSrVfDcSau9eEEVKxPDsDaFf9c6tzujshgqoFUZxsjigJAime7uq7sX6jjgmMuw5DGRbnDWw9eLaeKESC57LDFe",
  "key4": "3wcVSCTx1geJBx4igcJvK9ULSCpGe6ffmud2cJgiiBGe25ruSSBGQEDfHiSNHKCML78TRLK43B3nFY9o64QWxBUa",
  "key5": "2qsNmFvs5QHjAC5yJG7Ton7BLruN19XQoMVThP2NXQpYUzjs17mNVbMrYep3VAxow1HTM6GaQZjftvzHCJc6T2Ru",
  "key6": "46TobixpVe7KR1TyDTK2CeVxRwdoztqU7mQXgrsQQUYtpm2PKRSoF8NfJteUWYTanXmuM5KB2kBGKr1ZfG5oGD1t",
  "key7": "q9Gwjeb52Wq8GPUMPcBXSsHNmPfnDWV56MrRo2ARuMuWAhwmDa72aLqFoPQvRx6AM2nwNMfCTmLAVcKRTd3wLbn",
  "key8": "4pb2W6Mgas9FhJovUAibS8vHiiefwjr9WyygbVuF1Ef7uf71JooJvgE6k6exR338P81sSzwdLniwQdNjVYk2Kn1t",
  "key9": "4yLx6CabhymFLAfk3Qew8h3CPpBrEjsH5FcmjSQQYTE5hwdCLh7hDReYs1vYhiNybTitdoR2D8wMN8YFWntSSvcH",
  "key10": "2RiUufymr4KY5muFwitkRVwGPFLo4xV35JsxEbkcuSWhWmPeS3CPVz7RjdbEpubhru6UYcrHPNtZCy7JZU7ZL6ER",
  "key11": "kjQpveZwH7fvkS9dAj4jb2mtWjQtwqtCjMmDbkBiJB1ccd55KZRM43xyZPKi2mRkAu66tLhLHbSvkRM3vAqJoeC",
  "key12": "3M9yUti1TPiGzBDgX9of4gKgbvxRwfrzgzJtyE3cUVTwRAYRvD36RxVL33aBfxytuoQiD5zuMQMo26Tms5kn2miY",
  "key13": "3jcVbC5pCAJ2bKKsHRsunBYyyFReepXKxbqeGcGiobbSCqUhEb5noDTfFBN9Vw67BJKMUhPD1rhGp8oYpZzabbLA",
  "key14": "2Px7mZ8cBXmyBhx6hJRVyPC43tykeXNRurEUXTmVV9STbUwq8R6NG2SFwjE3MwtXtHPQ1CCfmpVH5Qg3dFBSZNV7",
  "key15": "3D2DaVqM3oBsTymm4Wf4XcwND6Vw2ALB92SuXtuRiEDpQaSvrPZKaetrdPKUHqzRfRASuC87hYoSAafJHB9YeTsT",
  "key16": "4wF6sqGn7A3extt7YSYV7BrSeR8tohSvWprHeXhG7b78ypDyhcCbkSxBhPj65DsXVnMqRmbeP7K6zVCLUaA7dec4",
  "key17": "xaroFZpvpSyR4CwiZoPmQjF8vHXMFZtFJF72zE7grHHKZC3p3XiYGa6p4UU8MwxK1hH4ULxpJ5E2LAduBw6KWJC",
  "key18": "56w3GjSyACn1gEAn9D9gJoZXBGzkSavBkDMEVTifCvpVAGKgGVim2iAssawH4raD18pf765f4gk9vMabxt6i1K9z",
  "key19": "3uPJQ23wiUnwygN1a7utVrqPeMvJDBxxs3mY9Tz7oYVoc4GTCQuZdgZjkQNTrTS25qX1jZF2r9gUryvBbSV7gd78",
  "key20": "55rEL1spHNGxyRE6RmUgsrcUCaeTF4FWVpVwUJah3UPHBXjmBS8Dj1omPs7ENQJgLTvmtZwWoYmoCzHh8cun3GRR",
  "key21": "5wgEm7XCxCbC67b3KPVGwzr9RuknxuhwpTyiwjbaX1XZF2fiXd3UYbzrxbeR8wHd7M3eq25LpPSzYwNBFywz5st5",
  "key22": "2THSV5Wu1dWeFqFyZbKkfm9B5fzabsX29TS8F6okyc4MEAAiKaNbx3Vma6ZXr6o5YxxERWHXUAMTscwnwodY9SJa",
  "key23": "35paEWZGXRiCTrDy4KGYnxgpzEDTVQn5tA4mb6A2ZPiWQ4Vi1okL67Jq4JrCsJBx2tp2troUMcNApZY6XZFFAFX7",
  "key24": "41AgiTMsF1vR2xLC9Lj94NRRMRyNc7YMppV9J1HYASP1jL8e5Y3HqyjGRMrkTP44X8GzsTxLcD4acuZTqzahi5uM",
  "key25": "2PGBeJGk5LKGQJLx6ae96BZAv6patfLxWpmPEWLG76UUUAStRaotjpcMhbgVqYrKUiotk2GDFTWVxdiwnY5owY85",
  "key26": "2o9z5afwt5NCB3ZGBCFBH11iQPcrsASzESfHoBDV9g8KHrTEtLkCmLo4v2cS7RwNNzevtf7XhMpemjCdidzfT44B",
  "key27": "48tBh8NR32M8UC4tZiXwYNRminjjsAKE2qDNpxfn416FtXBfW77zgGsF5pmTvzRDUjQLXt9LrRv2HxTUGR16toBV",
  "key28": "58ZFSwSXYxWLEou44dAfzVEANHF3vwbQALspt3JVhjZ758q8fws5zXDzEHJ8DTRXgjTjQEkCdB64nZSn5eRJ1MXG",
  "key29": "3ULjKxZX3CspJPqKZj7hhbNmdXVQdz9NK4z6j6mU2AFhMAFN4sdMeqpmnfgrfjYx2ZJqA5R8N48TqCogv782d1LH",
  "key30": "3PGHZfHuAwjG1q11cWCW5q6owYjj6R8LD6zCngwZsAGdkcG1EExbuQwUw9VPVXZQbEhu2DYGQSw4sS6rzPnQJTZT",
  "key31": "2Nm96ssFmV8kLdqmgkeWKUNZAFcfr62Spx4hqDizXGUuxEuq8eNsXDNR8ZWSnDX2EYnQoA2T3dNRiTY1smNJ3sjW",
  "key32": "4TjeVRpdH3pzDdh8urF6YnKtgrABxnupRsdC9ZQmVv85i2xcoP3V8PdGkxjuzqhLQHK45Fc6Njj5BoiDSWMbo6Nq",
  "key33": "pXVjYzFXpXePt1yUA27h3HoSWccEGVhnVDQeqnwBfCFu6aQX7yUyizBHoNpEpwcNh1cGbLmvyRquV8AgAb4EHyM",
  "key34": "5Bvi44TN9f8UEkYmjBej7ixpaSpHAXpAhzSRwqAXKmYmzPX4gzjKrVerGuMyHgwFQyFTx4KiS85hnjqovP7fcNPq",
  "key35": "4MueBwKv4rUSEpnRiNuyxXCUEnaxkyLNWMdS6gpEkPcXUmyzfp6YRYtGXYeBYq6pZDw5yFaKhpCXEH81b8XQe7Z6",
  "key36": "2WZfr9stXdpNCoTT1pP1R4VnVUXsxZgVwstD6qi37UjUn82FLdhoJmfFuPirkzrkzejNM6u7QztUP31tb3MvpVKx",
  "key37": "2QyT74CGCdjaCZhHjrcA9eUGZEeTcjX6CcYGs6nBTbH35HZQXf2KZDotCB4jkCiLX8xykiuYNRgik9ux38GXdeVb",
  "key38": "2iSuuEys1kse6VSihLGanb5uagfvu2ExS99iAZJNJkg8QQ7k3ZXySZw1sVpRtRKqzqz2rVoe3FHNWWugp4dCzA1H"
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
