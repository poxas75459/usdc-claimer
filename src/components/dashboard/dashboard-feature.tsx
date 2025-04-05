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
    "4Xm5nggk86CD73S2KJ42wL4VFjqgyezEBBnxwqrAPwpFrb6SxCkg9HMWNV9FM755GzBv722u3bt7Kb26QeH3ma7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V6G67fydZgJF62ZB4uMJfhxjtQDQDUmyBzpZZ4LgYN1hH4wADmgYNmVjnjx1AiXvZRtsyt2EfLd5qvynkVswRBA",
  "key1": "BDZSvf8ZTQtJ1FTete4XQMYa7FCnQ2pijdxWh1SdzAip6ZYqqYoAWqoLQETVUvBTFp8AkTZfqg7KYWhkpkf4HCR",
  "key2": "4W8nb3F2fKMUVSwo7pHe4YagK2FXJAahAnhQd7gGzUm9BEj3oWVmy5doN5UXUMVujN6WqP2vbD5JUu9vo4atQJQJ",
  "key3": "42DRdMRrr53iZUURkz8ctYnExwWrZpUbGRTuH1y1B2RvX7WwnwVun1UsVYJFkk1UJGtyPLGJiV2R4r7s5WqQt4uL",
  "key4": "5GmRvM4WU7bSU8Yw6DpUknQryoihUqsfa4TmXGKbi4AM8BzzjkqknQuprdD1RpkogvoRsyH1ho1s9HW4mCPyMcZB",
  "key5": "2a7zPXq8rvQeKXMEduJTeiFw7SRQECpHAfHmRwgctMKJih57Wto2FMVxPn36VSGvtKrCnGQMkymfU8A56orbTFLd",
  "key6": "WE9EyK4aRe4yVZVgJ5vjTTRE7oduJWGBKj19n8zVptsbGMfVa7zEtP3iWsAmn1mzLVDPnGrpVwLUQdMw5eJ8K4u",
  "key7": "3EZyL5kYSHJM8pvRVmDBJJH5i58PKBVRG4a2rYFaKSTmmygDsx37openChKunATjpgm8VZ1Tv8wxVJ3QrQCkh8LG",
  "key8": "5z5nuRt3PXm16nLPHU4GH1JvkpW7Lx5DHJvNoaZEvkDqXsq4PfKf4nZCRHtWJeawr26936c2JJmc5jhiiQHa2Qcn",
  "key9": "2MhD6pdJuDwjtUBaJeyZQ7UoLoiq51zUJnPFJZwnngSh2vyXxMYVNwB9k23YfzQgMpr2v9iQYLJJ8tbjqzZYyS8d",
  "key10": "3F9WePR6J6WomVmq4aECYvv4fTZGbuakN8CuUnf1WX23tGoab4vhrzSxin9ijFaJ8L79zrXnaHzogVf1SJBHRXS6",
  "key11": "5GkGRA15Yb3yHeoZfvZBtRQCv3EgxDtdWhnLE11Z8eSffCUHD6Cwrh9rCdoZ4FdMwhxRPwkHmFutL1JxjeBBBgeB",
  "key12": "4A5pWdVR5XdenivynC3mQ5HLS8EcMAQjyGQFf5gZf39SwDvN5dvxBLAUYMQho8iZJtB73oGb9X5PPbntKu41oRQ6",
  "key13": "4FphZNPpPiJ3iW9Mmnapy9zwetk1xVrqckkWp7qypouiG9zwkrFiAQWzen6iUe9wuBPXfxnza6wULK2P8Bb5fwBV",
  "key14": "4xEEcZyJBuBMW3V1ajwKs26RNQGehbawZGdD1Zx7uL3d2pTio5y731Sxwwiv126Xkm27H1ivaqmrfsx8AYBnV82E",
  "key15": "5gjJtm6LNFoXvqrfVe6GvNqTfzYxStesvHSjtD18VCN3fUTuL5rvZXF1428Mc48sBNDawJSUSMh4Zda6CBXqzN9y",
  "key16": "25ALAEa9FfHAN5F9F1shNkwByLDUgFHCFDrgSFdxR5Erb8ZhVhqoaYQLobNhwZFFRzPvgL2UJxipExPekknU86c1",
  "key17": "5vZaXdoxoauVNfKv3NukowxX4xTHQWx2QAmb5F2HvamMGzr3mXvQt6YbkSPWZQM28Bz57VV4LAesJbpNaW3ctYTF",
  "key18": "4PRFGxjs5PzwyrdvreeR8ecs671CFKFgvML29p3uxmYzqJ3yEqUpQeAEs1fnwU6czax9m2W3yPrrGCZE7CLZoafd",
  "key19": "2XXkXx8AghW49vYSXAPoMMHypjMFxGk1Jae9pqcPijNYNAQ9mFAo1Cwbzd6tsWjkxc8739vMsYsoqqR4oc1dnkwN",
  "key20": "5eJxNZ81kDo3Q8Fne8TWggSXoLFYcvseye8mUoSkFCsHdkGiEBPb9jzBvup6NpGxHM7uJRRftu6Kqo3D5fDN6MMi",
  "key21": "3zbgQd8pvw8fVWKbLCoS1JnnPk1vyBh8XePiR3zwXBKvZaV2tvmq7seoxYb2Cf3cH6FPhrsshVkJeHvkMRqd4HUh",
  "key22": "2Zy1WBHmn8DaHK9ZDJcB9yPhFaB3y7QKnPP7btLHuHKsYCerYMZMdsidSgmmDt5sUnpznkqxBXgU3GJpoFqihrhf",
  "key23": "5Z8ErU9nnhKfY49QvWGsZZFX5uoubfkqiJsyxhqdmHRnBiKomsYtAd8VrDS7g3w6y5VTWmcpMuUW33YSk1mkx3GU",
  "key24": "4uAhjkhNfW5mC4fsCjWhrFXPKS3S5sVf11Z3khtdZej9KUnmG9PhwDsfm5kqk6uMpyCT3gqCMr3CpSowUiw9ihH6",
  "key25": "5rajd8TKUBh5QpLruBQ6Dn8ykxoeAqz1LNJyZd2EQP1TE5DXt5p2VggBm9DKgeDx5NE3jmbTczYgTgbQCXti57eZ",
  "key26": "AMnxP6w8jaTTup2NAUwH9tpbpVLqhjYigoTL1qNXcCcShPHd9ATMVZYodGaJ4dAnuAFtXoYDhyPcAgR2sA8x1rV",
  "key27": "3a4Fqv33BVcBgRoLpUseRfSGikF5mhAVWiMD5Kb6mo7j3bupHn1TehTGKjiWp1pWxR8TAMYWS4PMcsb8kfbsusV9",
  "key28": "3MuCuKHHfrwHmzB2zemoL5DF5QVRMeN1m5D9Db7L3CNVHPscd1Uy5CN76mEtLoQR1xR1cWMxqwCv4N59tkXnjgyB",
  "key29": "4HMkyqoygNsm1Hk1NBWbwrM1awJUtXbmFC2mUkPLvLRTc97ssbnLddkBiubAtyZ1TBFvoGe7pHbB9nu7xfCxf95u",
  "key30": "2g1yZfFkro8YCXNHBLqbTyJ8NDZ1bXKtiS5rGEc6KRrUaJ4Lrzm7XQ2CWDhv3xP3e34K5mJZNjWG77SsPudTPhEP",
  "key31": "39vudwDVQGMzXq6KLeTwc7SydF4m8bSkbtSdmbs12kCtpjqesJg9p4v3dD92MgAjYnkndD5sVixLFqnPa5WYNJuy",
  "key32": "gRYCzb4qi1PzSwNzUzZCM6RG3kFEupnRVqjSHDCzNoRSYYrYeKsaH2aHJmp8A7y4WP5DPuyjWmj9avY64JSN3KR",
  "key33": "64oVWirsgQ3YXsFB9gZcWnTcyU32v8CNEVjTzHM9TVsnPk7MRBCRLxM5PAe1df1REcEEuwbfChhiGT3YbCyBERsq",
  "key34": "2YB7Q3vDboUnLJBycmH4pG3cSmqbdHK1cCwTSydHx7M7iC3FiyJXNzR83kHmxX9fkfrsPfA61ne2QdRYBfM1hvPg",
  "key35": "3y53Wdh1ADbDr7ZRgiDyYdMuhwbdvhwcevQc8DYUGzQE9wXUu2VDhXCWHNWBJt2nzNvp4dSpPd4FycCiGEkcYTyo",
  "key36": "5jPfBuSGEDCDtFFJwVrRwNfBQC4Da4Dm9o6a5WXfEdBtKb8x5QQnfDbCxDU9BvBj7nbi2g15n58HagDozaR6pVR9",
  "key37": "qTHjPGXruPg8Nx8wG9Rp94k6cPmYokJZaTRQVLZVg3yPtdN2vDHhfXCHstdEJ2nKMx6UhrpSHvyGHXLCcuXcq4Q",
  "key38": "28xhBtg8toZq5a6PAfAXgUdCkN1KaLnFd91ad51KhHUiDjkyEJZyE5qGBwh9aSfLaAqKBx23GwxWJgpjyTxHsnPg",
  "key39": "2Ku5t3fgeJZ1WRmMBrknbqKgWCyxCJEXFfqEMBSGgVa6SrtE2h4MJtSFATz393vbxJGuvfwv2CtKRJE7y5xLsEnu",
  "key40": "ZNngfmVhXmZYwKu66GbC1t39CSUwVQqEFFEQDZPVq3n5JzEA43MvNmpoY6xhKeBC6Zkmmy8CacMEAnpk7KChFC8"
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
