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
    "2wxzyjh3B5jBHo1YjXxhkegTevGBJZCbFufcgcAq6v8SZnRvZbTkHmURkBMqyftUpUdRVXX93RGPmyx71hgrxP5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DtUPceuopcJVXVHJbTDV93ftzuzLLtBm1mo4TzfGo1n9orjjEC5Xj5os6ACkvptyUyKCnxDS1NdufRknLWZ9BGe",
  "key1": "3FAdpajKt7wDXFh9yhMdasoEom6HPaEsjfbEpofhNW1nLdw4LpN1zC4TsnhY4M9RBCxKmSzWfD1dZe2v522AGwqF",
  "key2": "zASaoZYsEhnL3HK7QEEBk1RVhJfBMCVUSQkeMiK9nssXLR6wvmz6Kw8hwccCjXht1JZjTfZypGugjDu9FheuJik",
  "key3": "3jVStKXLdut1TL3wc16Ekeh3bvKgkZgs52jm4fhPk1trXFsUj7ato9rqjtToyLKwDURat5WBC4p1rNFSuyqawSLG",
  "key4": "3zCU9HiVChJHH8bFcZgjmXbfoMx97UUDm64bgC2tfLRtS1Vve74NCCnWPhA1BJ26DFwn2RV5EuFnJEu8RsyBwQSZ",
  "key5": "3FkBxWxHvqexUwUicZimsbD7YUmb975Rpjgsbhfj9ovNfWLvF8mFY3kuaX7PBPwSZ4mjZUZ3UJqRnE2tA2YcxKip",
  "key6": "3Kj3918dZPRoQiBfrTe61ynyGdkT7weiznDgehvAgbr4thUgj7GMRnbgeiyUDR9hdnb5kwb3oSSbwZnCUKfraR8E",
  "key7": "Jcriv2LKC69oMxWxxEmDQLF6Vzf7ei5qzqNmaPHnArsJRnZ6QyZcowMYy8NcnbJ94S6o2HnsBmaXJBJQmXJ5E5V",
  "key8": "21uWTXbuvYLzB9FWJdkYJXLq1SakGqRGR6JQpANcMEUWnLxmrzkLqT5bbxCaoCCzChkcRC4qMn5PjcHCvcfTiaaX",
  "key9": "5S94XvHj2sMcLqYcAcVYSCH1zX3GniVJyq9zkw51x4D8N7vYw2MVuZpiwCovJFZcv19TCgKij4A4DxyEobMzWwDC",
  "key10": "675TF3d81Bzv41GUD3nFC9CHamJF3wzLmiguLvqXjgQi4JF7apySJqNfXN1dpj44VBuAJUM2jrzcZb5ePDEXRQ44",
  "key11": "3Sg2SomDiuSGXqwyCRR6xf9k26HwdJLMAEY5GtbtMR7iFMmbg2exNnGMKKBZHm8y6bwMsx1LzscXinNLRAGpyZ13",
  "key12": "4cAmaPHY3M9KwbYCg6z2A5DGBptGoXofxzSrFS8HiUjWcSUECogvfaCr5Vcgc6RJ4DhDTpo9QAqGTjc92jaJBRgG",
  "key13": "53s93xksq2mbLN9tb3x5qgS1dwwSWC1brcw7CeG3uNtysJaDaba2cYydrL7j7biPUeYnFWKQmvQfDzPRoQGqxSn",
  "key14": "eFGUnQM3ML71N41rqQd68vf1iZqDwCTzDJ9LiBgodgKB58xtRkVL8ipwLkE7XEbKAjLmhJqtBS9NWbA132rjb6e",
  "key15": "SJtmx2kmocZDJAiAuGnYCqDcMpvUHFPK8ou6jQHqphxwJ53W8xQi9DABxtbHonWwos7XNdqBg1CkgW6hPKXFamv",
  "key16": "3Xjf2Khp12txJW4XhekAAdmviCwY5ANBgbdDMQC1Qe3tzTE3ykWtkye2gtPj6eAUCfe4JRqrtaiBLp45Nmzgxwdj",
  "key17": "5qowoSV8dNnjMWouGJ4JQqabUTenRMW7Ho9t12Ntgqxmg6oP3QeHL38WvREigSVxpnWPM7rqRAouRUkd3QwqdYgB",
  "key18": "5y4Dv1G4TSUewT7Lugq2YANLnYsqMLUpWzCV1YXtsRMz1LHYBSDAvEcGGXCYN5pFjZKuPoGhC68ZVfm3JTcCEZx6",
  "key19": "395dqTQvweRSwQbcqHvTWtSjAKXrqE3sWXGPYyMtrkoP8dGtZeJ3y9idDpMrh2QWCZ3vpdVe1tCjNnUFYVaiWLJt",
  "key20": "38Aiz4BzeGZ3bLv5JAQfjbiJ2ekV1aFjv88H9by4bvKzChn6YQB6rd3XiSBf7dQtGPov4TMxyRZjreY8XDBA4p5n",
  "key21": "4EL9gpqFgjYNHDCP4Z2anEnA18aMJAFps2pbc6fsRh89XXytFEruroYt44vS3uYdNGr9HXuEdTR3e5HokjapFBc3",
  "key22": "BkTojSSch67Mt1n4mrcaeMn4Qj9Dtru6twiTMQRd52iEbvsBcdmTt1s2cShMee8tR3aFeEkNe47NMPkQwsHRSZH",
  "key23": "549AUMgEDQjgDty1butZ9w8uVB317mw8iZ8FkXWTmM6h7aCD7UiGKeBK1QWz9gRoebby3Uc3pwm6C7FpGToAzBTK",
  "key24": "42BEmjZKax5hDuRZNWF8cw6VqvaJYDasZ2xQDRDWkfGfPun8JdCtC7Nbidf38KNgRHz6NMr6yWxpJdHJyQYr7ZWa",
  "key25": "2LvUZHGTj1FzbqPrt23kBVEeZ3wGecZ6r2oacxLsvfdhXpW6GF3KfWCN4DMN4MpnnPWY4C9YbVRqVuUM1xJCibSb",
  "key26": "2jJP6RWRuEft889PyxdwgY8eJ3yDfHasfzeCNJ1yDhq2cTa4Wmj34UgHtw8FZtih4uQbnnoLvVC9nmTk9DKVTGk8",
  "key27": "5iZ7uz79rxNkJZZhRVvbELv5J5BspjPesqvjS3rApzdQo6D3CjJXiccwPW41AE3EHfvxNA1rsadrNUrAsQVEGhUi",
  "key28": "3KrWr3ju1VknnhZ39p676hoUNG4vxR2gj5z2RzHHWZ1DPdGVj41KNnSQD94X8RY71VrqJgihpgiF1yLepmmpe6DX",
  "key29": "3wDMLHUiAAhFJTa48nwQJF4gKm5hcyvEHBm9gpZHt3E6GPtUCZRwBVNex69PCZXGxoPiN6mJFKgxjLnpsxd15yCe",
  "key30": "2YwFCK6vJuUYiwE51WVtpwC5MLYctJHAUunoFyysABDBR9HDLmAypTseHoV67kEEJiXUx6tjfzuU1JAieaNmp6Xv",
  "key31": "4FpDNzSEo4BDGCv97fs1Z4eePkebexYbPgGwxLfDWU3LsxQTNv9xLV5RbnNaizpaQygUTGhLz1BrT95y3nY7AmKd",
  "key32": "2yVq6NSoAhMof177uyXhLBv5VmWqe2u3ikwpQyCEDnWK5uYKkjfGEWkhhFcDdV8rA7pK67gicS6ivVwBCzLsStbA",
  "key33": "kPsJKhsDoYUMuXXwbymNFYqwz1mzuCCbqFrBVb4KpMyHwyjuSgnHKKEfzsytDGY8fkJRXA2NKkhEGnmdjK7b2un",
  "key34": "ghfXc2ob2P9xpj7oraNPxLh4Coosx2qrJB2WE1npyqcn7vdnEEhpEcg28f9J2gktxfVsrhevSSUFDoifHCBtwyh",
  "key35": "3Q7m455dpunix7zAQbBXJUB51oRjBKKNDGKHsrsUGD8VqL3oorTt4DaaSeoSzkDguzaG9soR6UbFfe98RJqM8V43",
  "key36": "TvLYH4HEayN6eQtb53q9cTKjVtH68fnCMCKiQpsyKibgeLQ1XFEH5qQ4J6NZBPgbz1E3n44RtyitmaJ1ZwE52iN",
  "key37": "4jSserLWYguGqGjGe77pAfv3cwk3h8woi4AjiT8bWAY3CG5jyxd6hTxzN7rb1cJjZ8bKdRfr7L1fU4eVYQiw8cx9",
  "key38": "3Jxb7WKzuuNUavpTXMGptVSRiSgPSXU1TCbrmuMv1MxpFf335p6FQyXPYnLC3HMhkwKaXPjXRj46npYoaGMyVCgY",
  "key39": "4JYbhMu7cXxbvdggMeno3m16tfafP6tj5QcV9pXyT6VyovHNghRgEi3hW3bLWgshP2NkxnWqiLvKrTQ8XtgBezja",
  "key40": "37UvJE9psM88kb5FGz3nhqEn1s8RtA46PHCUau19Mm6nsyy8iFHVWURoX6tNfiQUJ9YcrsjmP51y2EwzcLH9T9r1",
  "key41": "TUV5NEULj2BT5oK4MJdstWLDZZESAPAGET9imUr23xoLy64uRwSE9kBXTGFS6NYMdVjevedxTszkKg5ttVcvjnv",
  "key42": "5tP5PyNR9MnR5eMVR5V1YpUyJSQU1E1azesnXttHvVoifgRuGd5B6rEzZocHmjDgDH6qp5YXjgsmuBwXQFUPy2LZ",
  "key43": "2mEoDaJBp1NEq3dmzGtP51tK6Zkybjs1zafHKL8hq3BnG73FSmUGh14FTadmJTdXVCKMXS1sJvDYCgwBLtzUnBiZ",
  "key44": "3aBkbyP2EmAo13zgpyFaHZjXdDyUXAuX6MxocEASfdTnVTHUSPSCdzCXfw9H3mFTp3r3wL7E3dou6X8wLnUhoVrw",
  "key45": "4PTC93QoYbGq9zLvpumzhTjdHSDdMWXm5Td1pZ6j5QZoG5JEhSgDvopfL2bt6ksApQCkK2BEvJngf1X3DFwC7xMc",
  "key46": "2FSjoAwtZxC2PFmW6h5LHvspw8AZeSL8mXGC54eoPeS5L2Q98M3K9YKZYLorPYroeGLTsu5CU1sT9AdoSPBsKbjJ",
  "key47": "k8de5bbXvfvUHdMZNVZv7tp2tpyARiQNmMExCBfcEQFNhnzJhtfGuGwR2pTeT13Vv2xRBWWBggXxCkPVcgUinJQ",
  "key48": "4ubU4hYAtGgwLNyewGUCLieLCpRGkLFgiKXx9ib1mTqcfmn3hvkDFzYCRGGsXfFkgQEacGL5w6XctbWPdZEywsMv"
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
