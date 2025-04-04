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
    "5KGeYc1bh1G55FGG1FGJW5PPKTr71X5itehV8N4vTGoo2bSd9LPNSfyHgki7U3juWxPNLijFkwMaCLGVhxu4fL3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tb1ZZsWCZznb3ThXJmYo3egLh7rR9WLjShkhbLeqzsqDw4mR8YGpwfwaU6P8m4RoXNcUi7xgF81Yy2pngNsCQTN",
  "key1": "2ZWbanXYf1TPcWoTGGLkHG33nhZzTpSxeuS2nuNMakzb2uNP2fc31PWeGJXv6Jm5QEhD95CHDWaTuVWfvjtyyyzJ",
  "key2": "5fJMDwhoFcE7b7QGP1L5J3PQbWVxSBMPZKBssJuZBNXmGDwdNVnSYSnpfCBKDdfxnnteRfQDXfAc2pcQboggun4u",
  "key3": "4DaLG2AXLLG2MLcjzfAR7kPM3FgdEyZ4opjMEYXCKJXW7b9DRfbkjyRyjJHCQfSUAD918VGiQVjhGimStjw42XeS",
  "key4": "2sCxpB81A8q1yU55VjoujZZ6pGJCAdNKANkVs9LfmUzrgpjHaAjxagHp8m1m9aZvZdfV38J8hZDZnbZtsEzK3W66",
  "key5": "2crq4C8pfSyK2gQuNpQVcTcJcRiU1cVEcwCZ96CSqk2jPF4VwkExT8LTaW7sCe5ib5QRHyeodZS8818BRpQf2JYJ",
  "key6": "512ykyT7Bjx2orVo9ri5QK6qKvPihjzGxX4Pi6WXyTguZhLdeqBRtstCyLcVThwB5H7SDC8cpLcrTXJdkgCF1mbq",
  "key7": "5j128XsmXLFtXTRBQdJneSuXkbHtPyqwpBRD8qmDucfdAMos692r4G4tLCBeCEA9VJEsNyXeHbfbCVcS4S33A4J5",
  "key8": "HjzHCdDCY8A1CadCR8fLwKWHBUhyhYjJT4zJuZRZNE3v4dxaVp3WLYsYjep6VVCKPXG7ViHqkVMboYd2L7VUbKu",
  "key9": "oRKsZxL5VCvuRH4pBZtpXCCEgs8owGnbe2Fety1xugHzr6aMgMDy2i6Fze8tt2fDwRNPSBy9skXgrTZ9wLncSuG",
  "key10": "5wTF5yRPvyCtDjqQ7u5Q98VMMbsPWtzLfBL2DsFuTPhF2jtzweCxZM8mSyesx2TTAjyMAuSAz43S4YKBERF6XGBa",
  "key11": "2tsiHhMq1k2uoDezyzqivfR7xm6YHXjqCCxTTqhvdJQorspcRE31hqb9AEzdBDz9rHg4FL6Mo8PdNrLW4JNtbwaz",
  "key12": "3oBDaeLW2YvWnbWb3xhu8f9P7SuNaV8PcFGB39DcPqJzh7sXuER5VCUiHEHm5A6j3yHU5KHSEvLXZuLpNmRs24He",
  "key13": "8fKHVDKj39D1eSinT7kkS5Nw8ERiRnaDQtYZ9BhtA9mktpqsJmY2yoriCxCaL5vxoEckz3CjnWbwk9AK66tF6k9",
  "key14": "4vycMXvz3dWYg6tGnzmdZofEU4rWwmG8K67kK7LXUCHV37Yjed1TiMLe883QzdaUNpdHEW2kDsWF327rURuSbCKd",
  "key15": "2nCYSEShGK3wsXd8y2GxZq7SSdk4NQv3xJj8p5nB4GFXfBhBPopH66rP9DgCUFmA1GZMXkhFNfC1wDTMXjTxTVbd",
  "key16": "C7fhxHPGrs7J6WodJRTv4PSzFrPdwRZxHdzCjgcZUiwHVeVNEAkG8WywxFK9RsnNttHe8ca91nDvvqosSfdAAkZ",
  "key17": "w8r73BqESBqxwQq2ZnoZch8vWSQZjohZ11ntCJiAdfuxKahS6ZKdzzBUty3fQuAr23XQJ61ADRrUYKgriTEsfiG",
  "key18": "5KcFHt9YubXPQhq134TWVYu3hMNzCxzUmvdmDx81As756W4YjetRtNwb5qwUjRMLGhk8BaGAGLK6Mvndi9ntJFvN",
  "key19": "CiENpygaFrXZzVFhYQgGZUeACj8jDthT6bSvA7wF9WF1aa6QHoZaKz8pRP45qvqaED8qN3dB9pXdcd2kmzx27sY",
  "key20": "3Z4aD7e7dNNhuvisEZMSc14SQDYNKCFDr4kBdmSsb3ixGWQ6DjaZai94E1J9KftNejuuprdWJcowjTzNJbduX21F",
  "key21": "jkjdu9w3zJ1zZkkTjLskRgcR3rjqd54QnGaU3SCR7TyAAF68ME4iGu31CMiWPeqxnY32czzrCmAFbwL7VRnafNN",
  "key22": "45ZpBU9s9QAgeXCHDXNhjfdKonfKKpkcP6YJdw5qTnBamQSu1mgJPMh7ZN2tFYEQcRfeU2pYGZfvSZaRkbfS3rBN",
  "key23": "2dN9Eh9rRNU6JCHQtgxiX4FZiQhuceehvLLS7a2k3G7PWHZmB4RoRGtPFFrfpRzcaCVSRNFqhZe8ynEdQGydHxJp",
  "key24": "5q6wYHBhmYJfYn5thNBDcrbwpSjhEGCdmMhoRHFNaWTN5HvV6my2C4Xx7z21ttWt4D8pEvTa35Q9FGY2YUQ5Kdhw",
  "key25": "3ZfeknDQWDcKGDL2tzkGg3gzmsjVhSftimxysuRH7QjxcwCJNLteJNwcNB2ojrGs59mbGPGs8yXKok99HzUHd9GU",
  "key26": "5j2ac4cqHj3HVge6LYs1eezp7BkK2fwbECtcPgB1wnTiQjqvKYmtZjtuQiKgTPtDkCDqdZ6fhJ893Wb46bEb6LKP",
  "key27": "55qhingCMdCBx2ZQDs38bdDBHMPR9SHfNyCApcY3ALUqFa9QAsEmSJQ36zHcdVFbwD4DhihC5zSuxQ1c1BsWGgCA",
  "key28": "3T7hUGMdg4VaJa4EVLb3Cty1RfQ1M2YZhFXYcgfaPjJ9Mage6dzyPRM2igZ5qP5herkTRCDcxDCSoQrLQGQeXodP",
  "key29": "yUxURyscE1yd3YNLsqYLmKvonke8pWRcR2G5a6fuVmgQYww7bmA5U7CQJgAvt2VjNTVMGo6yLXpc86QAvM22bGu",
  "key30": "3c5GuQGsZwyfqMYBS9JaoPu1zPHdvvvJ4W6z2VeWH5CMyvLuq4FLizvdGM1tdWN3qMPxDPQNJUEpyQ34aNP4TgdM",
  "key31": "5q7tTmSefZD6kQ3dhbfPvPk347stoGeagzfABHsdARQehQcEYBNqMsZgaLnsZpY3y1g2vELERt6uWvDKyRjQd2pe",
  "key32": "5hwWYbesezSR9PenAtNZ1MTjQjYU7wSuixqDzce8h8vfGQ8DFEj7HXS3yi2RgjUDMQetkG4qXuW98md4BmXvnHbz",
  "key33": "3ZH8hee7uq3DNy3WdWn4mo8TuzhVzRfibxbMtiuQHcRp59FPsW7HXb764B7AnC8Jhko91GxbPBFRnzgFC8qE33Wc",
  "key34": "339LgbsEcvvuiaJyTX48y2UTLFDNrFpYSSB4Soh8NxosUP1U33tqAnmHRKRfVhv63nfM4wg3oBXwNn3j2DXyB7F3",
  "key35": "2R2CpSDXzLJXk6afe9TipY7DTPJmUkNoyySUvFZ26bivSBEWRiHMTDVq6RzrFSS1fbizoXSj6wkGukTmwA21evDH",
  "key36": "d3PTrgZrXByVafNrTbGfpTw99kytTLy8SuTFGayg1Kh13Q4QqUucFvedeL44xrA3odiCtJuX8aja14gCMu1XCCj",
  "key37": "2ScCWrwjoiyBDiPXpwsK4aB9yberUfBdxEkACbVPnWuBXQ9y8HbQZZi4NhjQ9gTmeJ85sFhhfeS7HGoLTNtwino8",
  "key38": "42eypySdGn5uPWncdyyMtC9Tqt5SuJeCcLAhAZKh49mh8fb3uFGZ3wrNtEMLm332k6LLXD5CxZnoTBF7qc68moK",
  "key39": "4pjKhrLCbWkcL36w7ULBgh5mE8Up3FCWA5WsX67ZwdW93w5bpkh72swRQ23wTgQtJK1ck979sXYFX3aUng5jz7WG",
  "key40": "3wboQa1mPJisQNUmtf8SWd5zm9ukSpDSVccfdLvfXNT5BjRor4QiaiAGnapUjGvt2KG67pxALGHgGvsB15C9mkku",
  "key41": "2fgqV8n8FcRnarFDVPt65ExtYLjCT94Lx35M8aLqxEmWEkXh8PeZELpciWoVQPAARzfy26SFWCAH3JKMU3eVMdk2",
  "key42": "3Tb3d8pPQhKsueGWWGB5oTec617FeQPfQF1p8cLp8fsHXVUU9EDQDkHGwbs8oXfL1MTsq3iGDcrZYh4HrkrfTJFB",
  "key43": "59tevPR49k9bvEV6K8JRkDyP3wuf2F58itxxn68co7uwMn45N2r9zcshamuoCCGL5F23oyjhGNJJjSKSw2TXfD6h",
  "key44": "4oAV97NaBRixULUECJsJvFGkyVY4wgqNUCSv882tsW5gNApS3qB1PxczqoKGnhUjAnYoDbWUVqVfCkMNVDLDpqFz",
  "key45": "3ogFg5encFu3czG9Wg6Y9oGfVzXEL95X5d3Awu1mhmFvfmTWBczxmDTHcTECSHQirw4YJNvNwEeh4dHyDSBR6APC",
  "key46": "4ffXD8kr3FnabYrU7ZrgtACcU7zULHU1oZLgKo6mEAy5SfBhEkLZmn494YosfK63r64RLdmFxDvR7jb8aGvoepvc",
  "key47": "2WhPU2pKEBuWuey4mYnzVSWfoEkCjdhXGVkLwMBj2cZo9aYXGaexZxM1Pngy1F9C9n9wuLtduJeKE1rvho9Jm9GJ"
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
