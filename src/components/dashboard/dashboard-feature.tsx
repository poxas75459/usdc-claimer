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
    "iLKBpxme4C8y37pCkrZhZ3uyuYXpb98MDxU92yXBMiYSSSkCY14zG6pu2MfD7btWFXHQEhH2FzF3vndnhSthDrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cmmD1nez9F6xRycyNfgpjiTuaXyK4JNLcuXFfznFcMHvGKwZfGwXV4oQBhAWuKyAemMAZzPFkME93FTYU7hRDf2",
  "key1": "4ftAuGfe3F9K7C96nLz5pJ4xEGZZ5E8YMdZbZ4GQseXGZ1L5UJSaL5wfrnpcSEMvawXLud1bcWUaDYa3KAu4DmYr",
  "key2": "5siTFwAH2x4EcsFjVLsNomowHKkjXtsUtDYw9TA7nZxAu7ZfqS6zvLb7BvuPqSqJ7aeTDtzxP3oiLP4ib6JwEq5n",
  "key3": "4BDWGXDpVJZCwaMMiycKzFRpJd2YtZTJSdLkbRjCRx4zd7PgxP3p41CoJfYAfpVLTYCLCsy77mM1YWC43YT24eb5",
  "key4": "42YpiX1qxP1tjrH7yPAC6qachFVA4nQHT8ppG8YRALzHxefACSc2c7u2wsMm3KrUi6cVKzswjZpLSX5WSktsDsVg",
  "key5": "2ZsbKQsp3m6giz9Kt995EgifkMGiV6zoqafDxhYkZsVsQJZtUCngijocQygyfkk75HADQtYL3SaAX89VZyTDjsjQ",
  "key6": "kvUMCNdiefwRFRDGJKB6Q5aQusQzF7rKQ6cHbxtwE8ARJ8TTfSYHhJNfR2n3ZUXnbGnMyL2Ne7L3i7eiMxAtq95",
  "key7": "4ZVvikezqcehBbNCDTfFGJ9b4NrtWbar9ZQRt1WVKGgPNRVGC9GonVgj3Z1zhJ1gjPpaSB3NCDG271SiW9Knt9WH",
  "key8": "5UkZeG5hbFPJzM66f3qweGqyAR6d4s8gsFYnNFPVRBisBUMEAiQY1KRvUxqi6KYEtCttVW5BEU6TECj35R3BYFnC",
  "key9": "4mNsN7Ltra8h1tLh5kEeRhsxyMz7PyjKUok1RusDPPPM3tyvvbD7vkTnxRcwoChyiKMRGMYfrHfmPnRBM1aDGbTo",
  "key10": "e6BWJ4HdKgLrQoBmLS4CFbLYeq8BgfdYpMehMTVE2nPEVtMvrA1UMdYV8gzHLDUxgaPiMQAxTdWCg39UurZs55A",
  "key11": "3ckFQ9szsQkVHYxzB9tvnHAwGBZXazQzqxJETcvBXu3Cy4EFFw1kW5adfhVGr6sY8hz3BozYVNw6me6XobfUW3ag",
  "key12": "5ScUKuKtwHmZBm8SbQFRGrH4wRQvsNwYudwUzuioB5Hd2BHHKbQNp7Fg1hBV3DE8xpdnZPiamUt3nPySPxRhPWmW",
  "key13": "2Fhu2w23U6a9qVgbC7ghnh9i6UKBaezt8Bk8BXTsUwYBgBupYLoehgNgw6UA2oWpthK5LG97v7Zscor7MUSLhFYx",
  "key14": "W7HMgfsQYtCVatT2kahzfRERtTgog5kiBV3AnVx3bdgutnUSRKUEtjtQd4oU9a3PD4Y7sb2drhjC9vXTQHM53ew",
  "key15": "4uM3mYzS8FH16dQL9c8DkQ1vP2jfz3V7bHMZhJCyXS4Yhtn2EzB7Ur68wxzucR31CmJa7LBrYRGytjdnqaP37a1V",
  "key16": "XcHYfSSaff45zemaofdHkKYH6XyXyT6L6nP1Dsz1Ezx2bLY8JCxXaA7HmmzFkYVM6SC8r3M5h4ZaAUpsJrpPJj3",
  "key17": "m6YtHyXjkjPSaujAFKjd3V5PRYLnupZbHRaeZmDPsKEYyR4wfaSyZDaPBNgJCtnYA3u6YXGYdqHgtpJ1NvARoLs",
  "key18": "5C3SbcF1YkAaB9okHs2tUEcQuJn9ymhKkhCvMe3dWJKU24EL1TW2GeTPaXWG3Ao1uxVVe2TVt8YB7a8Df5YpzaPo",
  "key19": "3UtEKV5PwqJW4463Qz9f5akB7hNKaEZbARM2TZijWnVX5EVPFbXtMcvNpHRnRd3fA52Ph3LYUf3GuZsMg3bSpLLU",
  "key20": "4sdsBLFpFsyToHgsYztqVoqhLLufyCUcQGYVFQGaiMxQpoLDWJNut7CfuB13D6vnykxaAnhQ4ohdGcjoxFKDs9UB",
  "key21": "2H54grxmceEyXDzcbgBm5aTKckyonKafVWkMyCdhDh3MuEJqFNuCsocCXyDfWgoKKKjDeRvoMroLDyRRwoMUhsaA",
  "key22": "2zWs8RcR2i8i5UJJ6aKAb77jcUVKQWjURpg3bKycMos3PSfCEGtv8ZSs6SvD6gHWhidKJSU1M2c6zgb7yPEz111q",
  "key23": "57An7rkXbTKcTWYygrQmMqCWiXVbNLfvhWydwUbyjScXf7c29duuwConiELuXzf1uVSynmBbLoQA9qiLxJfDP9pV",
  "key24": "3AazHZ4D4QQGwiBcqVhaG5QjNwxVqwy6EajgxZBe21BkBbuMq1GgCiu5p4pDSLcJp8RGQk5PikXnEimGW2Rx2cM2",
  "key25": "34gpeD7gHwEUSAEDSkGANpRt6M6EYXsHLKjX6hCqb8DenorT4XySFwuZ9wZCxSbyNA2PssY3G95EGtYfjyfCHjx6",
  "key26": "2Yk5XNQvQc64eETdMvD4etd2ueNoxzCiVdScCsxabqD5ohPZmnW4pemgQedPo2aF93AxinEL1QUgJnXccffAxThT",
  "key27": "5ZDwJQVmD4tzhCtNY6wyLa9PF9VMuSGTGxAzJRPpDSVSyz1WCJJNtXhTCNUMgusgaDCcBBqZBVm3KzpoYnYTtMtT",
  "key28": "5irnbSr5qsfbSDJCRdragHrJB4h4Cwf6Ggy7KAp2uAmCRteFBMSs4nXSMforSzU2HJ18kyEJHPYK8iyha5ZcnD32",
  "key29": "4ojv6MHgVAkTrvaxFPML5kpHFDpYA9wQRxxiqCBrPKMsrTEDmFpUF1bMrucVGXK7cWcxXY46Je5FWAfuXDqvLs3",
  "key30": "3A8oF5afFLEpQqgPSa4e5XzZtSUKMHsrqj55xrNfQQkraHKc1ffBeNmpjiTLi1sLiVuZeYrrJadmaN8xtMjJErt1",
  "key31": "4VMoQYtxTPJsnkGfj6yY1S4LgocUwgMNU48CujFfK8wfNXrFwPGGFETXF2k9fACMYsm9rwHTgxKsCT53BseDKSGk",
  "key32": "2hrp6h7h4BUySe9tzT46RuNh5vPusDykbHr8aSdzVj6AoJqacT3V7N4Nx2ACH1wqhrtj7ajJTabMwLfJ8sDZUK9i",
  "key33": "GnM6YdvfkWGNqv4LEWNQuogkVMHUcdJDkZ4D7dnEyfWD6dvvCEhei5a36DJMf8S6rUxkburPqqUZBnmCDR7QYb8",
  "key34": "BzFqk6rMchGYhzo8sKMUxNp6xFRRSfhRhLpWggzaCR7EKrQ2rHN9m8BrmkKxzKfjctJfjpG1WFubFW31NszLriU",
  "key35": "2gSFiv2yFQqit1YhEBWkfq1iX4WBGVPMaJxuUbo1Kd8Hqo7Mg4c8kV4FedjjXjEc98hFjKN9cU8DxaMBLLBigkPR",
  "key36": "rkbVRRatpCGJmSHPU5jqdzZw7x1pG3psARkAMaieYg9bqBRneTf95ZVnAVrgSCyve8ymXNKpRdMnj2TYAtDMNpq",
  "key37": "2uy8CbjesHNFS6TSt1TozKkP3GRTMChyHf3YJ9cKKNrPXBnUQti31Wb45UY1RvTet2SBz122H3uLDMkrjr7cB7de",
  "key38": "2itpkmnHLrgRgReFyQbPq1zQD9Le8vc1R3jNisGdzEw9oMheQLZxqMDGKQM5WLwGju2WULjMCgMW88XctuVc6yhU",
  "key39": "5SyVBcN8MMsTfSLCTfbf7FPLkcAsQgFq8vmFc9fbw2oiwTAVYnnNfZMBGute5cTzJr1UFVSpgzhxyWMtj6fYediL"
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
