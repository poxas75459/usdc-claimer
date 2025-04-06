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
    "5Ftw1YbcAu98DiD3WEP7bFRrsbAJHn8s2S1NQrbmeerguxgebxPvLpZZ2qQmMhG6nnTcJhdoxWfJcmAEnJwQ4FmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22diTm4QAREeyMTyoqM1ZARyaKNtL76PwLkUS52GR3oZtzWNUbQabJoWBXFMNnmk2mJm4bZHW9PpQMjJdxPHx6tD",
  "key1": "5B1KiGBDo2Y6No2nhESJvhiAwv5rCdmovjTRdg3rfwGGrRrso27xVzfbCUWNnPAEDp24HpMRXaAx3WwbpwChabHe",
  "key2": "2YyMsLPfntaok492NUh5ABmobicAXrLC56U174GcReFphsDd3eYsvGGRPSU7dt1P5jmGiG7iJyCJVVe3N2KnyGeg",
  "key3": "4iiAP1mbMCQxrhyWUEvwoLQWrWYZADFQrTnd4Jt6MMUFrZ5iyA8xD4Feg1GMNrFJicTwwJxcnnpiGFJmT6tZp9CQ",
  "key4": "3oBWxMwEwTUY7Ccq9DJPTpktpctZY2ruBmr7tgeEBtypAmezqLoHp3uq4fJpkWQ6GJzTiTAYzZ1VvRyYFKXHf9iF",
  "key5": "62ZKc5qCodHdvLmfT3TkbciG8s3NUFM9vbsZ5RqJ2udKBEWbkXE1mEkykU2uGVzi5zs9smVKeLBN71F4N1rd7hco",
  "key6": "3LD1hDrRHUBRKe2pDHHG1oJxr2bd9FRZMCEEBu9W6uEY7r6fFbgnn3d4WBwSkU8A3NJNg1KstndTGJzU58XXVa2J",
  "key7": "5dEHxhGxtWmUf7vPijf6g9ZRreEszdamhmw932bLXCoapaC2zPmh3PshaEnTH9yjgAEjYUVogJXzbUkbs849cLiV",
  "key8": "4Lq7BMvL6Cd8pduUacDDBAU3Qx8se6dXRHVJztH9qaKtahXnaxJQfX1MKNt4tKB1LjJEZc9tH1yeHaBgugB7cEg3",
  "key9": "2i3GSLcyKBeFrfr64ujSBCCuT2V9SZjtJ6U3zrVJLoSazQz9qk3sTSh91dstCdq1jc59qsNVoeztVWbRayoaGLiE",
  "key10": "4upmUmJie19mponLYZgSS1ykLC6gZP1B6XNHdFcAHf7C4jeX4xriM7XpuDKF2urKyXC7zisjD4CLrPRGgJUKEcqp",
  "key11": "3ejxbM3bpzcZnrBjoY4AaCFtMPaNfmg167r4qz4yqcT4U48ZjGgKr7PzUTi99JQXTGeGwf6wJvh8m56qTMubn4GA",
  "key12": "5tKZN6sYhYGvKqTRdRFDSextcTT3U4361hG91fzV1hhbgVM6TLyeyn6NxUYyaYqyfVJQfW5J8chToXoEMpQzP6qk",
  "key13": "3FwoT4Bmsm32do7kzugBBKW324LwuXMR3pGytEhxZxiUZkaQk2tQup8iqpkhipyLm8xS8ByKNzSRTiXQHHTyFej2",
  "key14": "MntDDpG9iJrXbVRdCUfN25cJpCiGBoG7sVdauLWSG8JUK4mbrag1ZKv3DNi6wtuZx2aq8PbymbvS9eZZrvkY3YV",
  "key15": "5y6rF2QSz43JJK6g3WwT1d2imwZJEVqXbWYougUDwnSnM8vLZVY8chySZojtaBZVAdcXTYnodNas7CUjKEdntUYj",
  "key16": "2UviMdr9A3RrV3RzD4PjqYJChh3Sx5BjrjpZzsHnxs4LM9Df8ftAZaUdkcwQEU2YCBvex52UHmnkevBvgGWrsh5a",
  "key17": "2xHrf4x9eTdibq4zFb8EPNknXuiVcGpPJ2r3LLxcZHbYQWNAYyxLnmKfXDWSoz9HR3W621eBwo5KE2sv6Kn1YDpH",
  "key18": "3aqJ79rzXbbxVt3quAqJTKotXw1T5aXfK5BYTieTgPmVp8LzJNPCsuodbWA7X9i8LJ2KxsMk7A2dsq4V4Vn8zpAP",
  "key19": "5RgoM4sXS5o8VjJr2WoZ5vfSkXvFbRPUaqT7GrEonXGAsGhP2qT2qh3EbtrP4cvM7ZWgEowB4LgZTFKNVDdnbEpj",
  "key20": "2EHUGdezTZcCWHsEXxFDToQqGYA3YZ7LdgbEj7CAEsMbA9unuewzfPF7zSuW3PjnNFrsFNRQqWTVmBHf6sQo8THQ",
  "key21": "4R9S2AT1JiBmknRQxo6cjh7ttrtymPpQpbkMJ7C4stPK1bSdBPzMbxxafBmT5NAsk1UDePyB5euSCeXWHUSaiqhH",
  "key22": "vCL7EzLA7tb1ZNXBPdMN6HRuneVcYEVoKkMp3GqK1z11hVPe5usJuuR6yhqRM92pFc1ia5V21zLhkwKNwb9RiS4",
  "key23": "2dLVmjyB4BX8qC3saUUJLWYdvMyccTsgmiFuZTWGzQH85gkAk1iRCWhGGHXY8BKWpEDTJf4UFbb6ouWpPSpaSC1F",
  "key24": "28c2Y4pqeu8WPty21YVaXivEUbL1B1FcZb7ggt9yE1va9hoeoXVbpbYnFEgM2zrJXtYaHTkNRfS4Sv1gXaDJeKg6",
  "key25": "4DLBdGm4mNwpWyPez9iekqNB7DFRm1v6jS4EbtNmi2WBwkFdbJKRLekwEG9z8KUYaGVNtFgm2YKzo9K2RZPUZN16",
  "key26": "3JJUwTySayewi3u7ep7KiRhEuWZVwkXWGJkC9GoF7UPkQKNUn1dB5Yvoo8M2Kgtsra4q7UpoxA4atRTF6ddP3UPo",
  "key27": "vFagkoq4WnCLnwC5YXkor99xZgoS3N2oD1WT6iQSWJhchsvpL7x2znXWgtckocL4r4ydTUcLMuhz7X5XLqnMEcM",
  "key28": "4tbomyekowkd7JT9dfH4ZMLGZ6siGH2qZrjbF9e8qGAes3T9wBA6wBSjZV99oxweiom8exdHqeL5fVv1QxMKiCsw",
  "key29": "4a2ZxVctLfERscqBViN644LfBGECt2nY9t6wZrqBSv6GZDdyyfmVxPQx5uybX548pJa8pYJMAwRH5ziAC3zkDtpd",
  "key30": "3uh6FBLGUjLpGMzDDkguTPoQL5hYCicdPiJsJuESHoBibQDEKvQu62bybLbV4GLpGzgVvjogF3dVbyygc63VTgf6",
  "key31": "2YVVvfDUXcbky1Jezsjt69X8k6XWNXSxW8qHdoXJfdHWR74iKDfEsFWWejXYnepPE7CDDM2DCcz3nTob2fDQDCSe",
  "key32": "3RezAS499jsXUoVQaZL5MQ6q3t1MDrbMPGFdYhSt3jiTZLSYMx4BBkX9cSQPrxbQUpQi5zGtQhzziBhT6D4K2UwQ",
  "key33": "21XQGEL6AD7TpcJ1vjpLjADARUm6ZXGPMkq8mZEbbxBGcvJsaYNmg97d7tDQXVHcdaRUCJ4UMPZqykUNp6urjfpz",
  "key34": "cLY3BS7SYBux69HesmqcYMtrYkruEfTow5M35DgF7uZcR2nsyp5uMxj2UgqT89siY7XsAKNWf2eGbedbX3wnWLC",
  "key35": "4o62LhGnp6U6bdRH7Pzh3KT8kYykhdr6T9X2L3eb2syw6Wep5Xw1Ze5rbWyzJSyifSiyRGeRsUYPfxT3Xn6USJ7W",
  "key36": "C4YUd59jeY9b7si7vCYdYdSSHQS7mPnhUeN12FC6qn61PD7NFdCJjbM97b5arccQnMqmusZ3cAubnEggDWHoguF",
  "key37": "4gkL1d2boVNoqTHXmMESFjYX1CCFDab94pmc4fY3Vw3sDoNjayAwByU7eNyWhEjEVtyocnmSB49eA1yF3eCw4y7n",
  "key38": "3T8q8Q2kwCNUnVwmfz4fCuNGsTqmbf1zggAfhqutozQXrSt1SeoaBUwt72GPQKRkhySRaMBmGP8WGqaiPss2aA2H",
  "key39": "3NSpaEivipuf25HCDrGzQn3VZngNa8VFrLMWu3EGDTxH6BVC3rJ9nBFSMYpFMJpspTSHTamYstC9YAFb48ij5eFr",
  "key40": "5DM8sSpQSESwSBdpYGLnyhjHes9ZCh2Y4QC52WCa5aDgZJGjMsHAFRTgCEwsbKD7vRqTp4uwsEzDiMz57BkC7znN",
  "key41": "2iMoLRFc61zSjhAy8H2opMVoTPqxcm6rrZixev1s5mextnwRskg85ScGCmxgrMdKdBffSFJCBqzs9nv758TCAx5J",
  "key42": "3vdDGmE8ntnyEv4UFdGNG2bP1oWnRqBCwKtVa2hFYxFAhbmGuvfm1uyjxbQokxbfTYqKLCZ8s9q7h7DECMSGAnd",
  "key43": "2JooaC52XbUhUbhgvBYMetDfHGAoq9ER2xAs2E6kTUVNBDf6wcEqhEPJfxgv5kuGnSMs9YfjA6Kbv1qp9d7uMkgM",
  "key44": "2yCimpbVmUPSuShuzsNPKR33kgwqEDzK3RihN8nmfkghyQ6eHtdV7ANsAxYtYCAGKG6VTdGD8LF9SmafyqvfDfPw"
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
