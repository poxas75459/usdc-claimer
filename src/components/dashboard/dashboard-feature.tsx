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
    "W5918gF2e2rfCFdfCT81mPir7roPXS6166u6X8pmGkXezUfundwchpHWvVqD4vPcngbvB5q8qBkqeV6RExCouZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XcGCU5hnN9VSXrczzhP6Qg6JyPoWLMxo9zP8uDnLc1V7LHovCiLiPcMqwoERxCGgm2kWTfNoKJmnNh9ucJKsbtJ",
  "key1": "51tkwBNdFDQKEjbKqoN4hrX8hLhifxwtxnnRZf2Cqe7XKNmeDSNcgu86B3VbDbmY1RZ3GH5t8qeDRS5QFL39oycG",
  "key2": "3q78iBeYtNJUVXT6EsTpgiH3xGUSxoFPbF8Z7J6AwdQ1CsicGjUG9BY7abF12goWBg4HTj5kNHXJyTDxFfjFFtpY",
  "key3": "53A51bKFjV5C1uwpnmEeJ8JajKKuQVCMVDaQ16Ka9AGEcEZTZGAoBCMhu7JD7sMynp7mY7unpV46812zJ4Tpg3uQ",
  "key4": "5Cfwwi3wL4NgihBZEqX76pPtxQD5HRexU4G86Wb8yfZx9Jx8e5yduTE86E5sKnGKUNyQe72LKfP4B68NQRwuKSzj",
  "key5": "3NNc6MwdxSmEBL7p421amexPpP38sKEBAEyFyBjuyq6a6HtCRkm4BBpkCPJ6gnmw6gPKxzDkXojvwenXhQ21Sdid",
  "key6": "4MJaN4Ccwb7PaXWEYsffCME5h9mJ76n2Zy2p3digrDHUK1afwXPF7xVk2pCGM3bSZZMDceD2EhNr2XgGWwy46LwQ",
  "key7": "5fF127bBiKaygmrsibhZV9bDb9WKh1dbFcR587VGvpTQ1FBDYcfcUcQx4LzucZNHJSzz5o2XDab8k2nsDc8J3GPG",
  "key8": "3P1WcYYLopXcXqMzzVPsf1gUgacp4fawzUh8tBQw6PMUPohrrqzW5EbTQn378NR2AwGzhwPvNeWGdXd3Xn8oygru",
  "key9": "4TsJU1wMi1fhDdsq5wuTQbHkXBdY8gzGNoP45iDPyeVN6QDraogzM3gfyb27f6sNwgjaAVT53XPs6VMcXn9XX5WJ",
  "key10": "2hfTvhb8bXfYK3CfBFxho3U5TgHKYHFooHobtGtzCT3AQ2dcDmD28GHaiWQvzGUsrZZvcbSuTvcXLiJvAGVN9MYn",
  "key11": "2HSWrg3kr3NpdqqNZR9dGGGCpGZ5gfDcAg7q3UFbVbC7eiyw58ZKE17XMcBk4xzebygTJVk9WFW9A7F4j2x9eTuv",
  "key12": "5KYvEQ3Je37VMZExtqWdCa6vivDt7yN2yGdNbT7pdTYkB5UfYPdmAE8rKHYs8t1bq6Y9FcZjgVW1GbBBEw4C3qBu",
  "key13": "394GocQNe6UTCunDFemePx41jME44ZDmoH8Gd2qn9qHdXzt2mchxneA5Qe4v7rbLXuBcxVDc4bbQ1pcFeN2xMJEh",
  "key14": "65nAjoTRAaWziWXy1nQuDwMmtPJHZuQwQDP1iY7jQBwDGGt5eEaxGwN7Dxk2vHAe448sarvC5tHpEKp1cNqfBpTc",
  "key15": "5481Beb35kSn6gCHfXM9tqmNqr5yyAM8JweKB9PdNhvZV6yQPYitNxhfSiiiqLVyYna9uQwGm9SWcbTA9VSNEVZw",
  "key16": "4qX9PTFCSEe6ZVhvwDdR4EdN2FxDPhWkQrfdqwc9mXqFYSGkyXWyg9uBmC77FtwD7kX5UuBubtxNzqAj5TxGMVFF",
  "key17": "5zgGddwjhVhk3diupwzgKKLq2hrbVDmDEVSRuYNA55EDTFF6XsjtJinFDmFMuayiQQsVmq7RDCajAVE3ep9HykNt",
  "key18": "4KyqE5A15WZfEKYaFRntXrr512ATyFd7w3XaCRTnBTJLo5uYAuXAsT2sYQxi8kDCZfc8L8Dr2oU17qmBZparrz4e",
  "key19": "35m65w759ovNSVsBZ4mNLBH9LguBP3Awnhg1A1GDWYpXvzqc2vJZEJEjAAinGJ9dbeApgJmpqkQu7SwmSQoT6Za8",
  "key20": "3VirpBKpRoibz8KnnNXPcCGpLgQVhatRMzH6JVBm1YDDXUPd8AuuPYhgPxkDyDGjEgTu1zrgFdvXf5t2h1tkqWJF",
  "key21": "2o9a9n6h9VrS9iMe3X1tGNdNbSKucz8axpTSrQANTd3ort31UubmWgC97zAMMe6w1T1XULau579XQVY9MZ71cFKd",
  "key22": "5c8R4t5u6szf6yEcmDEtwtFAA6CfrzwmrgfkKKiXA5YZUi6hRB7ERZcPv5rKgYCqmdd3yFZLwJYsRfDYVcKDRrc9",
  "key23": "3yffoeB8Lx5T48KpFexWhqUQGQWuUSpZRecrvoe2NNnyQUJqXJPfVUeoeRaVLTVL5SSQvnfYJzZC5acn2iPj4tmn",
  "key24": "5ULXTpSuGYAueaV2EsbaVF6pBH4YDP6vcxbWxfAY7Hw4yje49EjoDECtpjy9Vk2yifkLHsGHFL7j3fnb688Umc7d",
  "key25": "5yDYYCKua8SPCUWAg5CCDw3hhdAUfooQrZ2gDbUSHKS4p7WDxcDYGywX9NpyDApHeqsWif7kyUEwesxvmHm9pbR8",
  "key26": "4v2bJFuyXVYJjmmGUDRnXDQ7Np3zgfzZmrKsYyZP2fgg1jYxSPM8qu8iEgmTaforV3apqrF3pePkSkpLZRgMTWjU",
  "key27": "3eMcshvggJmiudjvW2r6SDGRKJGZe9MiH415PFTkgGU2FVpXjQVcHZj6iR157J1mVQrHZEFTWAWuVagJP4ZRzTwJ",
  "key28": "5Pr8JfoSwKt7NZWcUojrtqU6nMUDsaMwdzW59wWQ8PbnEufEtMTcWwpCduYw46on9h634J6WYy2R8XCycbryKukk",
  "key29": "5WsBQopNpeQunLSCsmvy3Jjg1jzWjNtrtEbjCb7SLcRT1zHWNMmTyKsb82RC4VVs3pcwPd6Ai5DKh8Y83oJVz7aA",
  "key30": "4a4QnQznin5Wi1LtsQhUkTZWrzkeHB1RYTBZ7qF8GVtxzx2UpnwgYG8ksWvMb6ypwqMuW9zqGXG2uErLj7w1qTco",
  "key31": "619rZ6DaubeKHE71GV6KxWj6cHhdy29XSnBHhLb5cTTH7c7HyREzkFrUwK1iahws4HT2QHHrGNzdZFLa8yxF1KfT",
  "key32": "5Xeeu6v9Bg9VgV6Wkkc6LPHDKEa2E8bQ6YTvtvFLjq1vd1EWbQ1p7MvEirdKquT82m2XMYsoc2bB1NDiL6Qsd4zA",
  "key33": "2Sy59jE6e84tARhKTKT7vJfN2kBD5eDZX1kyuiRcwqCredPu9vCNsSVYjTVjPWaP6c9Q3Y6K2dEV7pzvqXVPig26",
  "key34": "4z7ncaMARtFWwf8yAaTpB6eEaRLmwnHTyGa8eAZaAYPCHT2gm5d3ndna27FQYhsJp25JJL9ZKBbJzeVXfCKUEC44",
  "key35": "3SnZtpbhoXWRDUXr2N32VyVfrtJXFgBnLL2YUXpK921YNqMh6sK3yqCJ2aeNDNxCHLeP4x6YDRexcmh2TnpBhXTc",
  "key36": "45fgbjizPZxvbXiMrBMF8yvDcCoJkab36EJ994Ug8tHPFRqv7UHC1DTNG2gAxRcWrK18gYsTbRkFcuzyXNdirZEh",
  "key37": "7u84FqBgWHTN2zFfC8uGPxr5xPqY1RQQ13SzxRRS2CaALWgnqHT3HoVqMGSpUWhfmUh8fbLJiFZ2wmhbWQBT2Uk",
  "key38": "2EmPGVMmWdfkVDzG36jk8Ldob6ZV1gvQ14dBD1VVnRkkmadnxXCq9wEQgxLz5JeFysmNwyQCL8Gj9WUyYmWPaaK6",
  "key39": "2xDKvhgfkDJSteyD5pANqp17KT3Fz7LKiV1svDwRWz5MbePVJSFjWXFRG9RUHU4HRA2jsNXSqRg7rvtS35FfUKox",
  "key40": "36zRBaoEC8iMUkxRnv2Z9gEE3aPa3wWP2m3taG5BjL92dwbKw5jfajG4fBde1TS1Cw6jGN9r34LQK8oeFktHb3iD",
  "key41": "3Y8qsqPcPCx1zMee6kv833g6a4h7CeeGW5oNfeQRSZc76grxP51DrSLL15Gr7U9vJCfgmqBvDrsCSdRRUwgEcFck",
  "key42": "2x1RonwDjPZafmrGoYVeKVLxdCM3jxC3TfPEGfmDysGu6TTkfyrrNK1hrsS4hvaR72ys4JXjHhNmiqvegVvU3Mjg",
  "key43": "5hMtdVZoRVVaYkvs2HYWeB8XFKjip4dGUEeJD86CSACNbpbrHv9GYH15yX2zJLJGQffJmaD37SRJgvCcdUD83PwC",
  "key44": "5hkp1mdDrqg78pZCbKLvfrEhF8zBmcGRudv8AKvm6GbwDR9iXq76pgxc9jDmzNMGB4Cjr9ArLqfMwPs5Ugv7FAvp",
  "key45": "4H43mMwMXgj1odrLJUEPbVUx7sn8TFSmcCoM4iYZ4XqvGTmLZyay2u8kUKYEKgSxAqumUYVUFx9pEbAZnwR1mrT"
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
