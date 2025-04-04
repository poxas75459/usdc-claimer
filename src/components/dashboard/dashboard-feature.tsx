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
    "2qWLAD67LDieyZiRyLnrQzp6aahtVFUrf4cjqG4wbAohdRFSZQbHNixcTkLEviXdzL3booo5KG9vam3wrDXWpid7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26XbojQSbSeKz9UY9ta6dZ81VUV1MQmLRmdLDVEGAPikrcfrxrGMcmoFPW6FSAQ8SFoxr1BMe1J7wLL98uhTAnv6",
  "key1": "23ZhqSDnbmPJGZUAd5at7rigsrhMDXc1bzidvX8eyhBK7CPsAn22M1ff9zSyMpdesXhjwtJJuBnP51qJ4JfuRXb3",
  "key2": "uiU5YG4q94difx9yYn4XcbLPv1a7hUKjuwQ3eYEQaAQ8ZqoYCiU2tp9d6aqzkSwLiBipGTRM9ZdmSv5B4QecrC8",
  "key3": "2JdouKyfjHPLLm2Yr28KHXunPPdRrsCXPGLbUZs8Q1CsxvtfDzo7cqkxi9eYSEZMMoAah4gLJBE4VfARJHoktRNo",
  "key4": "3q2z7EyfjuhMsxv6qBwkYem9MXMYxHvxBDykNJnnec7AzLE6R5fmUTmAmCx1iPYS2tsk6HfUigPFi8tdy1xvsEA7",
  "key5": "4mg1U1CiZHC8vj1RYwC6p9zPEwuyTQFMj9SJ2xR18e3D6RanfUDjky2HJ1xmrEnU3qArnB3XCUKTgVknW6G44vCU",
  "key6": "xLSjc8X7JZ3EtXh3xJY6PsqDQpg3vQMwrgM1xwcu5r8LZA8VoWgg2AHnqwEfLi2RoB76Bbfmdcy1sLyyUuz9XEM",
  "key7": "2ubVYujMcM2KK7MxmLoP1TxZ7U7Ewk2jf1rHTuDcAW159q4KMEXFtAmVpRpcZsu4jJmpm4trw8r6Y7rRQx3zYvaW",
  "key8": "3ydDRxEmJ4fGu1XCKDqD9drUVLrpMYbAdLhNzDLabUb3kbxFHGoSnMAySQj9ocEkhaWWmPiYsdo7TT3NDyHD3X2w",
  "key9": "4grBVjw8uJEJU6Z5N1HVT3oBPYZyNHFpJkzUFyfEqJgBRFzHuQGSG4mAMV95siHR5EwD3oCF6LvnGcd31GXTrUtk",
  "key10": "WxrCouJRL3j5HFxEHCTJj9idjiuPQDvLKGHpXUWXLM1bzeE2KZ4vKXjTyTxLYoT8eaPrP3yarA6cjHjeKP5Tp89",
  "key11": "2gYxQoFWDgBm3WDduQaGXUgdhJAUGva4VV3z3mwmREY4iDHfWX3yNiFwXpYJ9Z153o5EqJyjJEgUWZCTygyzuDAs",
  "key12": "3MeiZRYCZ1478qnPq1pDop8Wf4j7uM6ui6aVHf5pTEinEUNpfM6PiPn5SKW3kauHnCksqMPKWV5d5928cVtSGeNG",
  "key13": "23HDhNo1ja2m22xHenML4euWmkhmtnTaEdFRBghFesRymPHRYurQWzB8C1GJVLMy4vHwdH8hCwLE3pu6ff3wngYp",
  "key14": "5pSHHuQuuo8AguNntotXoPw3qKaTF3dyPtYsxfpkCr7zFjRe7ku4L6eyAkghiVGP7zR3juLgELW7zBg1GGxRn4K9",
  "key15": "5CSy9ynuYy43yqHKEnQqZjZSnfhczSYLuTVb4UKZQh1VJDoYocZ6dkdUaQDCkocHkpH26Ags7Aci7dhrCL2tf65p",
  "key16": "4StVZTjsVx57jC7f4xjStd9o8BxugUw3t9wvejCw3mSuSdZZgSn9aMRHGyzHB6qGTAM4dmDwhmBzZrHsguRtXhKL",
  "key17": "5k3AdhBoBtdn7esygnjZbgxy3p8zzhwQcFm9Y8uAo2XRwkt7R8QpPzrW5B8aZrWxfLMXBc2os2gJcg89TiSok2wg",
  "key18": "2brFNSSxkJaXJ2tMVsgcuf34fxbZzv6jfpES5N1sYtRHrmeihwcho9QgcngGga8E4ZHDjYBCQedbLWYDKYih9NW7",
  "key19": "C2GSx6dVkUQSt5QCVUW4rF7Z2THVK6AzYyDCp2JAXeEcQRoyt3JnHnnCnmZM2LterVGTfdLEHDfSr1zQDhd51yA",
  "key20": "4KsJi13oHZeM3eCWHfNAHnQDDKgAbihLBxNCZvFzeD2jSrwbaTu8YjnDuuhVW7hPF1MTBJxqg2HRDggyhGDsRDXS",
  "key21": "44KNhNPnQcGSUrXnL5YAn1rZSR25wAKEwPSKNaF4s55wJwMS3txDBpdtVsZHgV6bCG2fF5yd3iQecqkGQo9wUsM6",
  "key22": "3x7tGMseVH2uVh8bDaXvZRtA87Gs5KpmpZmdMgfhUAhVWAcXxT6w84DZugEJ4N7unAbY5g1n7q6nwP4Cyr91xpbN",
  "key23": "2ZLCsT2acmBMSE6TfFFVKap2uCSBFxxTBWCCv4dGde8E8DYEBNZFS1svEqLbDqL4j4RwVcD7Hb9h5NQQptUt1LcD",
  "key24": "5F7ueWA7c8Bajn9H2iSW8hcuQMHoxXU6QuRvFibCRwbxDFaqZQmSpB9ZrWJ4zc58ruWSmxKL4Vu4NCNso6PyeNDM",
  "key25": "3bfGfG2cyg9DNkbM1hHhm9xvvee4cBv8NZ36apANRey5EASc57hE75nZkZwkeqDM84gKFiU14sYfPkVUmYnfEDtv",
  "key26": "3cxTdFZqtT8QZxBFFTom4HL8GqxgnEyVPeWixK8cnN84NvdNRJb5F7wVpmtiAEb9k6cr34crbv6BYnuHkApcPWQf",
  "key27": "5fV1WTZaRt2nys92Djmqei9Gaih2UtYSegSxsAi2xwmVrVai8FTXvMfpbqYtWavTAU4ZwupXatJk685Qghm9jYP3",
  "key28": "QvzWRsm3zgFxBZZJEAc9zPzq9w41tGr2vBFc2zXgNatJpCruSkwoFDRy25r2nxTdXjWRmJwqXz4U2mRgWuz3CU7",
  "key29": "5DhNBhUJD8XdCnA2panxL8RUcYGUqSJ51Jvb7UedNFPXVFRXU7TGHQusGj619hk1xuKGPyZ92XW2aMxQJb2U8jwH",
  "key30": "5ME7fdkyu7YoHSvWKbnYyimcryvVqnZQM35BTF3DVvJiH5KLVp3pjCmXuXCgZgfrxXj9Yehtwz8cy8DFiri9Uz1L",
  "key31": "3Nofd5ii1c5LtvTT5PFQBUcQq6gpRiTAycE28s1YofxZyGUjAcZXwP381Mac8c7D1zvrwTKTsF2e5eDzPfGNBpyD",
  "key32": "4yvWiZnpbwKUoMAsTJbUfMBM4LVu5yHH1inKVKZ8XAe7eDdbetpr8yEtJAcnq8nb2joPL6oYcnScK5b4gpCmYof1",
  "key33": "2GbySpcuV3dkcgbHi5hoXW8a3dCoFhtm4KFDQDgcCz49wJHtYFwdAKr6C9YPJmz8s8bgSNEtVnXfKjxQtoh2NoUg",
  "key34": "2qDzhuvxUqyfEm5Z8kwKLx3VmvaqaRWvdHZu6Z4ExusWouP34vnU99Ka83kA5Hci8Q3KYg1Xia3KAPZp1wp9BJkv",
  "key35": "4oYAq4JkYhAfwPBUxsft2h8JFwwMgFGTaT6PjLpZsQP7wigRfjvpaPHe297DkyhUjTcQpFyMNa553VcFGZSJz1F7",
  "key36": "WzZn9hD7E5qxsV4wK85f3gSH83AJqsykXtUkgaDQk3gpeby8NuLSWVDPMYvUMrZukvZQp9W9ReV3fVg8otm8Jh5",
  "key37": "3zEYGWV8PLdfe9DL5q2chmbQ3xYwo6CDHWjscbeK9hj22EyD6LRhjUZBuHHDbALQsr7Kmoiu32d3HQpVeAq65hoQ",
  "key38": "35LkQecUtskHHGrQUxDSsaMF84eSfSY1CgQzBHjLjzpXjN7tTiLQFzjebHtrF2Mc9S7qimTExe98d3X7Rb4UPLBi",
  "key39": "67ebLUVGMy7kq6uihD66QmG9anj626nehqE997SV9m2Dk4jzwGDnwu8m2Wz7eKboir6rHBGqZrCjf2QQwtRvbUza",
  "key40": "5vXPfYUhDX1AvyUeB9Uvgk6WNYvQq7kBYXGipBzyeKsT8V2676M1GAW3yFZWezoTbkDipcKJNXjktH8v1DLZCnRs",
  "key41": "5xfMNSKVmG8cZ7iiVHPhBxyYsZtpfAMAKjbc1pmNMjxH9NNEaWSfzjeMBZx889Nd7xqjv3tW9ypZ7vBSHE9PgLWD",
  "key42": "4UteQQp8pF68RCaDey2gMjZxmmWZvHLxGXbPrWEHWNbjRjB4mtCskWsx6yqd4nAtZC3DnzSSUZ2G11DZNEEpNnHc",
  "key43": "5HcerMojuTWGjcRkUw2c2xHUf37imu9tCpjmmb3D33aJT3Kf8av8723uHJQ6FsYgLvmhQHefvWPK78byQLUTKsba",
  "key44": "45K1yn7pmzE2ZGFo2LRfPtKvbHQa7JY3cLfeP2BtSHrAcVtwFWEhAcxPZcDRHF29uDaiSL7p4WpR5NB2B4xZGbfc",
  "key45": "4RC6hb1KHv5JtbHZW1MuCosBs7ckz95o62D6vUJBQeHLLMTut6tPCqbpgJcyYMtXyBU6ad2LNsbbN8ZSH6DzY8QT",
  "key46": "2kMDHZTUu13WWGryKqtrpdLVBgeDFd8fwm5rptqPXL7gRs5X7rBd4TSgR5vQ9iJxUByvaSUQcBBk36NHae3S5Jhi"
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
