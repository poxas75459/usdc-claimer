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
    "4tyX5VEyiWK4eziyBDMs8YqnaTYHahCmAZQtDjHrgCFPZMBSprTNkpyoDiTKicZnyLNG7NP1WDxhMiZKih7C5j4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y8tKKutWXpU4WYf5QGbr76isnmTNmPywzvQNWp5FDZnFXfaFnAYx9tdhhCiP19GRPusEbQyEJwWqNKFZbtnZCJt",
  "key1": "2jYwjMW8SEPv4XhE6knyq2dRDRSKz77NKgjsd8FWeQ5PYt6Zhj5vgse4JR6Ynp65NBD8TkLsczrqUtnY9mqDYKgx",
  "key2": "5brvHxX89JWWyRDe38XVu427i69VvtUP4VBk2hhSJzLiZbU3YJZP73CfTzhnmszCpF6t3VB3YAG9jrWnDWc14ULx",
  "key3": "hkrLCVcFTbGK9CagqhnuLsAKfWduASg54EcksVQqy1svDFM4pVfTVo8exQ3w3GUU59QiTv8wwq9817wqtWpEpRt",
  "key4": "2oy1vWJwHZ2dFTh2frbLx5AZScDvGbjY1fGh51fJ4QX1k8uQMtvzKbcvKrrxbuoydmqZo18YrwnkeUgoSATMvrGA",
  "key5": "5TF7RtHUBVTbLrhYWAQSwEXBU46aTdDWcgjkJYh4Wbqcf5WkQSEr8TVdope5sWCgnuVtcpocMSiUPLmWPgqGrtwC",
  "key6": "2dsJYovFMtndgesxfkkiXSTe6mpXHBH4beGNkaTB6L5fvugfrfcrdpnVuxhxs3j9ebcsDvP8PgqBtxuSrDA5gAs2",
  "key7": "54ed3twTcmjKG1hnWuWH4Rq43pEp11cdrAaWD1pepezMoiFiDQZ6m6fP3zoX5jN7qroPkqCdZgudy4TWoeHGmvWZ",
  "key8": "23JWThLirb6Rv6fsrgD8b6zQTYfwagmTuDwumrpPbnCe7k5u5gUiANkeQQQ4MnDno4GKtW2G3vtgqpw9YBGfdSFg",
  "key9": "utTyTFq9xbwaN15FzeWrCexNPdNDF764akP49m7dpEqfhKi1AfnzbbmfhqhQqiAGsMkYZHxvvkXARtKcr8PqhwF",
  "key10": "ZKtc7DY2a1jXJiyRnZmiTdsrAm8xHdSbu8w9vUSSnWaxUv9e7tFSxN9EYHJbPfA6mN7gai4PorB1pMSLixnXTjg",
  "key11": "2Xxj9xYFcvxuNB6iuUmcAH5Pvt4maTSKcVAPwkHm5pvgEonbDUbyw73tMs1MQ8Z6XYoGJifUcxhzJyyfZPY1ZzYw",
  "key12": "5FNTvBSYFDcuQdjKPB1VYWWeiPRZk1cZKY6oRPJnPnkCVsPzRnJNtQAuBU7U7YPA9ZnjpCuxYd4D7xasdmHCCJqZ",
  "key13": "2JGrqEhbw8HzQWksoToEPa1bpoWY8sxMk5gXr5MqvfSqyjpWZTXJ53et48VN82TC7A8dw6QNTTzb9DcPmPCBVAT2",
  "key14": "4S2LPvDhuyRwxaf6KsnqEvbw5DF58MiqwfWUJet6dCyKN2y7J2ewfvKoxNRNgqHWJ1v5ugTrrjeDWedsaJUsPHjy",
  "key15": "3m8WfbTdfxqNzevG6Fsh5WJP7195DBK7qVQvRpTGE8s7cvCJVd2usMiKgD7MPL9wnCoUHtpcgDo2qV3Rb2WaTXJ",
  "key16": "4pjRJWvtcKcEo3maczM9X3JYcxrNqFFoUYi2dAvKzK9DYCcbSxycvVchZjJq4fbdP1etJKsenmwt95NVJbhXAh5x",
  "key17": "5TGGGF8hikhwkZ29i8VJNspY2ZCcZzYA4zHbmN42X3aBiLFvsc5bpz7VP2DPkbF9za3vGq9ArWUox1Lm9751gW1j",
  "key18": "3Abs15EcM3MznMWhP6MGjmHeLoSaiDvNtt58dd1jTzu6jZHmjQN8EW3SLyBg9UxwRK8i7v8AXq3MaWiH51BZgbok",
  "key19": "5rxqZksWyojT4iK4EebfmWfRXELGXPhVGejyXPF9rTFM8EWtpru3sARboh2urxKmEjbPENyAVoNUdVzR5pFLTNiL",
  "key20": "3noGFmUxndUBZNLk3LLQ4GnQus3jbQ2HfqaSKLvwnWTVdB8jLCXhecguxCn3cTCwpJ3qEGJ3owyLUL9nuNJNV7kP",
  "key21": "6QouqGMyYbaWUGkt49x94Co8oGch1XCajCSjSbHE6KUzA2DYbh6BePb3YEieeTihGWMDKwfmwtVjjXvwk49wfTR",
  "key22": "43eVEBDr7J3VjMx2Zv3t6SYceP111DZ2kXLQUUXiGiHCJvxFgG8c2hqZNbGa4j7CVVUb1FMuM5nqDZG3uhidxV1M",
  "key23": "2h9WYGsodEbEiprdskpydikvwdoW42cnbyjSa6C1Hd5LWQ5i23kxv9DQ8xEF8fU2xseBUQXjM5C1bmHJgDzybUTv",
  "key24": "5BvNtiSniRmBvX3YMTVNotWb46HLpMVVQc3nYMqo5UR6A6n7rn5HpqFMqr15Qq3XbY9avCf91KSeXLpPCg7g2WgF",
  "key25": "2PFqp9tPtFPjQTqiQxGEtE6EbX1tWUvsPFXKoaEvL6Yr9zd4TJgAw8fAmHSikX4W1579k9pQdaK3P4kyUMyuuBcX",
  "key26": "3nwmmwvUcC9tVJNHvKzgs1nT1yxYELKuSVidNNhLLbj7p3nELafjhZbtF1nz7oMvqv1uEg3nUeE99MUsQaZQ8A2V",
  "key27": "siHp5NAE1yKLABeJG6ugormCDiYYcfkKcVMdYRQy8ZAAaqXuTPWSLGtrViKGFekGbwMfc7XFFP9BrX5qgasH88u",
  "key28": "Dk7FxsJhj53XQABqCZjVMY39TVpxCmDUnfj8aT7Fd4YYTR56exao9rHFeacqW33UijyPfKJ7hgNRQ4mNPrEyaAR",
  "key29": "2RkhdepAeotV9gDPnEFQA32zi2EGD3ye24JzHqMSroWQC1sBHTz48vVCR8EvNduj3Vp6Eak4kwtnHV2oocxi2viV",
  "key30": "5EXdv4HpqMGGXFxAFT5oWjU7TUG9UKHTtS9kdbreYJPDQiFENfZdYgipn4s1hJGDRKfNGDfAgmhhnWHjHsumdWvp",
  "key31": "27jQsv8ETkhEvSbry6ZM8Rxhq3Fqn57zkq3GpJBHzGJyrzMGfChWHcTmcNhCT2hZYNpFRvHgd8zD9U33LkbFqQdf",
  "key32": "5Nn3KhxgEF7rf6ySbhpcsYQcUKWEBCM4t7zg7WxEwFA8pqFNctiavK5Fyq3JXEesCit1SvaGAdq7oaj7KDAKUqYc",
  "key33": "3sxqhFStQEPF3eSq7wsXNtAYArZy572LsJrxM4rps1iRPCaNkcMJtzJai3C38WUKvVfAJ2eDJFxoEymrBtymofjf",
  "key34": "2sLZsnCDzSvswXAmoK7FG2Zz64JGRpoZ8CRnzfNULDQ5LKRntrvQx97yDMChbDp5MjewyHcG6rK8YcpCkgFoh3MB",
  "key35": "3rEpjNqWeaHNRimkZLMQvMst5E4i3aEGNhhMPaEcpJjbgZB1QMAz1CWPwgJt8hTNYWATSiuxoLX1fKoCE33VK5fE",
  "key36": "4CRpRf4L5ojXWdGb1WYNSQe14DdBCK3SYQxjiSfCnbT7e7RQd5oiH1CmsGfvpimbMookHxeHv1me7QVPSkMGq19n",
  "key37": "o474Biny3BzBG2QSLtiMARAgwtAEhdARBYNux52ZxoDPaPHDi7svo3wz5Ae3dBpdZHmzDFATYYdkFXH9e2FwFa9",
  "key38": "67Tt6hFrxSc7LNt5BEL6wthGkHCu2mJm8qVWAM5n5Hxu1LYdqPfaDcLdgbzKSpyoLeKPaoqfqRmqpb54sejn5Chb",
  "key39": "2D8qTUUjZEFh8V91gNGJhSK4pMbJpi4AUXmnSPQT5cnkqmjif1SXWFZZXEGKFNCCRJzCmt3WdW2PRycLDe49d3be",
  "key40": "8sRb9bSafDvZrfbqjpeRP21KHVZpZZo5H3BCub8AZW41vxrGoVo7fJyZcBMiBvgoBBPwM16fiHSffxcmTNydE5J",
  "key41": "362HZAWJiuVsLuCZUyzhDY9dVGFJbJ5MYvJmLeSDUpxCiwrWR6krdA3qTkMveBmCPduaexLru2tg25CYmxbgocYy",
  "key42": "qCd1pgEya9wdLtvvqmNKnf8pSida13AhHbasWxPLRUcYNmUcsKeQZhr6mCqT7dJcnonzm8ri6hocLPSULL5HjRb",
  "key43": "2sxjnmjZHGCkHkAYGzLFVWRztmNWaEXkSa72vbf1j1MYNDbu9Zd1HwzqfeVtBzmnMcrZLYANVwWkFNkwJwDa2kju",
  "key44": "2Gu8X8x1YhiM7KBPz1vH6aMkodyGyQ7Qj6B7TPrEhy2wV3sZw6x8CN34YHimoUcYZX157s8tkKrYiPQfY9pwHsAT",
  "key45": "4HbHrSUvXuDwQdAu1b9hfEbt1MxKwrAA6PdcLuSPEhfrV3pCQNzJQNXZsMW5VBiGA472JWcS6EaYmhUe1dp54bHg",
  "key46": "5FpkMd8bsxRxWSipkxcFZXJG93ecHHRrT5QAykuTPxsCqNGDfUHtEzGS2QHkv79guD3fZyxw6dSn7H7MaVXY54GD",
  "key47": "ncRD5kMLKM1oKVEisuKohZvP2U9ZdNgZxdNcjq5w7erDcXukHgeqR4b3AJpssk71mMycujrgAt6Ls4oL4YUsBph"
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
