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
    "2uZb13FhNtZ1eAc6tvXcXYgmG2b1yWCVqeLp1PaCAyUbkxkDMpTsoems4EdKKLb3UTQen3UyZWzUNW1MVmVAJDim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q3Jj5pyy4Y4QwVc4hwaANpavEqY46u8GzgqS8e17XC9C535kLSwEHfqBpJuNxxcsW37rLZsPgk98ti9ME56n83N",
  "key1": "45k67HoA6ESQAwB4GgYPeQ5osRL8AJG6CQZKkwi6Ya1XBtrQ3488FT7wqcXmksaKnVfXPsaBncBAMCfKqQD8hQwR",
  "key2": "3pLzEAN1S6wwRfabevCVWLwtNTgcJ7dpcqt1arb9pUvuraHYD8Yw164V6dSL23ypfRbDzcj4u4D4PfdhKH7wqUgs",
  "key3": "66WkX7t9BtgCQfX6HLRdBopbbAqcEbFWLnNbxmydq8kDDDYik7a9bnFseiTRPryfGuAatc2FYTfw1tKpMexQhwJT",
  "key4": "65GB4CmnVFBnDHYQxsUHBE3yBDG16mFBtSzA6idmL7QN9MSZQeqA28vPcFoxM1Gz6XMNNyQwDDpDXYwKUuKrHvQX",
  "key5": "2J4Fd3UGcR9KQHZ4x73wvjkdmRL1hMP9DWvtRNsH7kS3EGBn6KK5LWf2c4TUeJPTLf6eJVBET1yeF4sSeF8MHNmM",
  "key6": "5hLdNUTWR58w5WufH9hW8dmRCPhRoJgrFguVyXw8pakXz3aYj4GdBoqhuG7bv1ApZJoCdf4t9BpwkH5VBZDrbFVy",
  "key7": "67okbRL6jqTcW6xVUWmRLcCKGeALcEBj3UnCn82vGGJJ5KH5AsSCrfsiX7J3vaGsv8rwCyc6BdKr2aQ1F5QR4gx1",
  "key8": "3b7UobfUthsbURJJtQLW8sBLLZcce7xZUBGUm2erjJAQm2cu4xtgSMLExT8GgGcNac6CxR6pTp6nfiqGHiSWQaZP",
  "key9": "3JbwZzSFBwHsq7NczJsUDZoiLXewSuf5YXqDzCgCLyAs1WWiyygraoC4LzZEHq8y9kMNraN6WhG3C9srNCWtiP9B",
  "key10": "29k7MZwmeBioqs7qaxw4x9SrzYUTVygCmuDeEC6ozTugxxGDbzZhHcewcFmxzFFKZ7eaXjm55WyUiM1CiewV5A2M",
  "key11": "WgJiftHWoDVbT3z31Yh7r4Pq6g2C8znCth7wwmzPPQy9iAhpZ3MWEphx6gUPH7LJ4231JGrBjaehyXB35u9KzJz",
  "key12": "4YGoMyg43K1UH5tKN4z8JYBMmgJuQdjYnPEkcjFQ8XpCeFNnCXdvU3ycYeLPQYGMU2djerFTJsqiJPVaXa8rjHnk",
  "key13": "2qeLZsWdvEYdaUonkzEbAvD9AZFHoam5tj1yCJWvkSQx5tX436TnmPgp4DeGjiqcfqsaGiz9tnQC4HvSQncinbU",
  "key14": "4E3HUye4bguCbhUdVQjZauUbot4J1fu8hz4ciTUwHnRMmQ8TMkVfSX8ndVPsCFkDAtG8f8zxJ2PTUsiCGTv6EZxT",
  "key15": "46cJu5SGoj1Rr24xCCPauEx6sfouiNTAeWLntQazwDGChA9VtZng7fr1vD9jxcHdXTEqKrGeCqJeFR4HGeZ2xwHK",
  "key16": "4tkrqaj65m7dnUZcfh3sTwE3QRJFP4JZWBxXJVCqirS5AtkLnxrmmEqL3vxPCJN2oakbqDVWjBmkNzFJzF6eKij6",
  "key17": "M8UvxzCQEk5Mq2t5PRihkmyyH7sJdaXJaTns4oqieYWTfodtdmvaSGM7Bt77pJeXhREGZxnZWEb8MJkC5LyexPs",
  "key18": "2BgUu2CxVFygiC2Q84UeGDdn7gfkAcUqRKSBiG4WgbLGv8XRMtDmfcETqVWYxDPRrZUTL58p21BHGqFk3NBKhGhS",
  "key19": "4LeY7sjG6f9w4iBx2kpFpXnjnFTxUGWBn1gjYP1q8YdAKcn35SMgvxRk4WURgGrvyj9UunSoDFpncEW7ATKttcgG",
  "key20": "5qQt78Fqc7ZSWdN3sTws4a1Ecm7BSMKpJjU6dmvBdt2YkTEcSSsD38y8iFg92HSGFLdLhqRJtMgKNHasZ7cu3mLm",
  "key21": "2cf8YiC33qVXmrjCmc1jv8zwvL8WwkPyE5n6TUvckg5iDuNkbjGHXUQn99WGLpz8h2qf4L68R4gK44oVccgToaKL",
  "key22": "34kwXQ8g7bezkUeLez4uatqniMBcRFgcbFfbNirSjEfwE43a4Y9zfbGzyGuH8uYB7Lir2GwGk3EhsvHY7p5gswUE",
  "key23": "2PpH9Qj9fMe6xm4BgwBpEvtKiK9GUomKfE8wRcSB1WEax8LDSMABJXGB7nDMSGpNWUyqvSN6LxCA2zCSgbtfmZty",
  "key24": "5ZEfZeXPX5asn6xD2EUp1zWLVGjqjAHQ5H2uPGiFLnP7XY2EVB4j5pEBy738xKXuCgCtkDY2DE7JEVBcWD9qx8i4",
  "key25": "4k8X6NK6sb5m1RPrCn2KWFnDFVzTHzmtAEBippHHCV4gancLktf7yk7HbEEH39WfQ18NjPnXGLYDT1KKEqmLQTrU",
  "key26": "5YM3VjGBkb9zF7PSSDvE1e7ZR8M2NPxUVAwAZjVQdi9z75TZPW6SLd9tPn3R3s8g5BwizEJFXmkUMW5k4DFwAUpQ",
  "key27": "q2zwWPQae1A8weFwk4uKQex1aMJRQiapesn119yA6AGMp75PnU89KXNZVZKpzY2gHG24fuCoPULGM2xUBdmEctx",
  "key28": "29zA9rrkfRFuqseK9QcTQXabh2pgr38ovcKGFsLALAHwawZ1xq8Nm9amtJYjYhHeLuszF2xxr2BrodNLHTWhMnDt",
  "key29": "5rPi11XnoKTDLAkNLpNSoK7TatpHsxWqFXnCQ2QucgKmD3FLe7dxUvkuVGipZNgZ79nFfMZ4Y3NwzKu16XtfArBE",
  "key30": "VoQcvxpbwmMQdH8NiWJEjuGWGztR1a3bzXEtjQSp6abcEdAy5n6YvBrYD8wghCgqVJnJJ7nGQr5UMSp7FDF4vLr",
  "key31": "4sDZqTxPAM3AgnDAR66FHp6oTA6AcZVj7kF3KCybBQZBFB7LvKa42XuA17A9VBv96BZXkUv2CvhDpKGoGi4emfdv",
  "key32": "3qG7eEfpASRD97bp63DohgHaZtFvvHWhcXSvEAnk6d3m15zeL885WDb2CVRzmoNiSQXiZcUxb9JvQoQ6PtmWXzGA",
  "key33": "3XvTWKMWbgLvq9wCk5RCeao1QeKEr59uGZMQZyuv9rNkrpquaRHS8TzcHkFbQR6zW7rEZ7EpZy55b4m9KG98McWz",
  "key34": "4Nn5hoY6Fo9u122arFDQQzSP4rXhYbheJSzF8bFzhC4AfWzQJC6gyrZrmUXXPsEt2yX43js3S6tDnKYkekEFr7fg",
  "key35": "46Sp4pH3d4ggsBfViwa9f2wYpejb86UwSwEMMmm5YSTMDrLtpXYoe8MMgSaxAQx2rjnxEgZv3NrXiyTzoa4QVFri",
  "key36": "4BuwEBBz1pRvpBZAp4fx27KDwbPDYbQxEqC7CJ9dzpofZXtmh9NrsyJVBiyJY6AGB2Gt8DHHfeEv5xwXP4P1jhMW",
  "key37": "5obnndNGizTJqVDk9yKMNdZK5MmhkJwtUyCa3tgudSdaVohwKMfoCpDCobeD7CNQtW6RydmWQTXmxpEr7HsLSueJ",
  "key38": "3ZAdy33hCfnoBRbVHcX6Y2vWoUSBn1iCrTW1xq9KZMpBrGRVdFuWvaf4PJwPWnPrmU5bRVpszN6byduEMH72nGYc",
  "key39": "4doTd1kGjnPQvsgLhx43M42wKUX1N4j2rp4cvEHR23yHuVMpVA4aftikg9UNBMXoYTCv4u7g6Q29rfG1dQS2kj9t",
  "key40": "4vQWHHrAGdmG8MU64NWDYC2EdrcrYDikqGCLo8Q5ioSwtUG4rGhd1p3dKUDwSrFE7n2WtrwFqFrxMpYvcSXARKjX",
  "key41": "PxeuVB8fhHd2FxiUditHb9dnPt7pk6e1EHUNGTD9pKQDimSMs1tGLRkkpZN7iPEx2XdHYKktS95Nmxac2tBpk2X",
  "key42": "GpZYJDUQYLRdjEDN3DkiEVHgGfsMCHrt2RHeMLX7GJREn6xDkbLQAMVKtqYdx3JVEGNFLorfMTUieJ5fybyVcqT",
  "key43": "3w74PoJvZWPogtQnEcygxbb9NkzYx9JF9ZDU4WujnYNfVx6kHK3beCRmzTN9RXZXyHXfDNRHBBG2EPUwAwccQcZb",
  "key44": "5YJWGCRyfQR3x15mVzZHFp47wjUFgcRdx9PAhW4RKii9cLViGXFyjof2G5siRpWQ3m2WFZBdhYxJD1BYfXKB3fSS",
  "key45": "4cx75v8Agyf3qTyJFez8DCQahRCHuZVQvancuK2G1j6Kum45BuRtaELLzeXxAZ3CvA6GhxFEyhuQVPaaMLk5cKz2",
  "key46": "3QXxp1faminXy3qKsri7LcGA3xT1Lk5oAEAadgAFqFnFjm2fSfjPzEgqkYEVkZ1TbFZRgD2ZY1tqJJRJ5krLQFP5",
  "key47": "33BkY2sC2EbPitogdPtgshkoELXGcNxFZkk3CvCATsuZydVCYGqHFanbG46DogwmG9Fr5uiHAuytrhsmsonCuYvp",
  "key48": "4tYj5bC7ziEmcpmFs6FnpHpRf5958pjHTTc5x5bQZe1Dmg7coNrpHxxPQqQ32GoVgNkQxEVYbDfnAxkmiDzyVLjS"
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
