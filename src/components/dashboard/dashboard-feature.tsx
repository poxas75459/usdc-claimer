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
    "XmaDxmL5yzsqJuwKuTGXMWtEwPA921WmpJBSK1iXFKgKJ1vcUvTWGuAcJskAYaGLK2GkWRHWPuxJf72pAPSBFeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CUSYPwRLAxSLfncXqyWd4Mhgad5uLUooYGBYC3bT6P6RzE2ygdMmohCh7nW8brwaANzNS6xdoRD9Hsui4tGr3dc",
  "key1": "537RiJt61rrbYu15ACyXXJwevaEXRgabkf7VsBjXwx1Bnu4P3BH6YZtNPiFwMcTg4cE1kVZnpXDdCJfEYs74o4ZC",
  "key2": "5NoLMmggb6RmzwGsrrzKM3aXMx1ey61R1dSTjCN5CstXLknJSPzF5H21nJJUqoST7w5oVBEj5d2ehCCtYoagNcfd",
  "key3": "3yfZnTavCegduudD2x6dUJ7W9GFJ7xWbx7bCTAoo9UVRWEDTy11fNxtHqXrQq8q8naWJYF1V3W1RdcPZ9AAJgrQ2",
  "key4": "huDkixqyEmCdsp6j8MD9uwhsS3uuXKua9eMDTCxNXofXQGwPZAnk8T2TgxxQiC4dnMsakQK8rpzD6he2WrfNkVs",
  "key5": "5AhQMaF28WPaHyqdocvX1By1eTV5VDbz2cRHp8QMwvhYKE4GcSukWBTRNwNjDUvE4LaDjccZCrpxokpmmLHBnyJE",
  "key6": "2qTUa5k3tdb414kE4uJBssqCC9tzAN1KMUD6Nu959uHw4MgpSMBnf2fCwwJnhu7iuUiPzdmkvJLHyYZ7SmvBwhRY",
  "key7": "6GdVWzcuhFRY95UV6pvzWXArs1JFPJVB7WJ77SRrc5TT4Fw59AQXvxFCaEg8RByAxb72nVgBx8rxjsNykpZX97C",
  "key8": "45Xsiuy5gNFTqndmFt4oBRzjKha6faaXidGzYfGmXkbc52jTkZXgCThirQWt7uaZEL6UQDMR3SLdVx1VSY5JSWu8",
  "key9": "3WE9WugsTbfDjJF6zRgvAJu7AGFZwK71Gqkjortt5v7Zfz6WNK1gxRqf72VFsWrz1ZSfijwipXkXH7FcSZA2nut3",
  "key10": "3ess5E9AnuRwQyoBjgDxTjKxcSvziqUQBw3uswMssttRuXbw71L1s2iC5imvgBAtiyqSgPt5nCupMgfKyt6NVkCe",
  "key11": "XBJNGLD6ifZNKLS5UUXiaE6y5puufiEGPLjfQqs5STsDGeUnBXsMYJkFCkFLtF95woFQuw4Yg3mNMVWarRCRuMK",
  "key12": "4YJKXPH38wY934URQ4c7KY8mWEmLmpzZ6wSCMzxks21XYhduUYL9WZQ18StErTwPwgvzXEpf1vss7CB4akaAYrmP",
  "key13": "3AUrxXfvND4AqwvkVmbhymRafbKpMVCNP8aia5UTtZNmzBk7bXnHTfiv4NGnHJGnkKkzUrVYrpKbFAsEGDvKfiBt",
  "key14": "3GqJdePnMsRSzodobUWv7wpHsogdCJfxgA4KpqX9cEJ8aVxwF3yFjxFRNdkj6akmFASXZT5XWCEWgV2LV3ow26TA",
  "key15": "3HWJHSzFTDfdoDmiL3azc7uEScjxffC8Lxnd9nM1oUvSdTmzUmurrgxMfGm1niShxqdfdfw6KMeMrsZpeT8DiCX8",
  "key16": "2sGmHWeGSt4qcDbbi8V3jD6iRox5z7AYaGkXVyKvVmQvQrxhFdYNvKqxk1o8r44pR5asLCW58dvb54g27srA9z6m",
  "key17": "5RD24NrD5SKuhjxTddF6RGxh7XYyEZm2Yjbpx3hYs4iq5AurN8qRuXGSjq2E5ZCNoGu7wiuTYFdqcmv7veMqT3w1",
  "key18": "2Ge9vXwg6PxA3uzjudgnQZA1UZu1ybWzsfqSdnmaTpcVYrNbwWy82xTfDovDyR4Qex8mm53dB4q6e5kt9h3EbEGs",
  "key19": "2EXtoYqzYK6LdXuEgv9zFaRB4zbHv88JEAwSKBK47dWpQpRjnaqFPdJfmMUqiUUBHbvrdCALK766nZg2YXS1seTM",
  "key20": "4eZNeP4Cr7xX67ucePtUDnQfeMF287gvDoAiuQDNbUQ6nujcbbWD46GYZk94TP3oX5DXBTaXWrYRAwfiE44pLT9Y",
  "key21": "22ear3B99SoaZmBhhMMkbjcK2iNwWnZZVzGstUME4Xuc2UJbb2nD7oWVoqLWDT3bWut2MpSipjyhqzqe4T76vvAb",
  "key22": "4JqsvTfXw8d2LUxiTVQWD3sieXZWS8P7V9m9XPWMwmcoVYjWoxJC57SgWeyhi8VEe5wJU76sQBrm2kSArAnWQ52T",
  "key23": "3LpeT3SceoAaNkQnCzJ4MMtFJEx6JH2mBxs9iUBxuQL92NKPe2kWN8X2YyPcmf8hXWZqtErXg6ttWBCxz1uXoMC5",
  "key24": "3Y6X1c75WkhrQEEvw7iVG9KZJAwh7GfLCkcJfpx5xQx4gP22WcesYjXm5xxFTqyKUmiQsBTCcH6jgsADijt5cPD2",
  "key25": "24Fpbb6ab1VSBrpayq2H7ceKpXhZB1FVwUQWgk3MLu9RnNPwxYjVsBERLvadgQSmZRJm2RW2yzJtSDJ3aipQBiSp",
  "key26": "3dCUcv5tRRPGL5HybRrhcxymBukv4Mt9Pge4U85amprZic7jpCEUN3uqzVkfGgdovAfytNpAYPZi3R9cs2DD39nh",
  "key27": "5TkCKyKiqV5piTukhq3qZNyQd3LkxK1ctTd34RZ8e2tP8kuyfoVACnwLd6p3JYG2BB9K7Wa1h6noKnN6ZCWAxd8y",
  "key28": "2aEiNuhrosfaM5zakquWqaqyMDvzLGmzuci1nz6tJ3sxFHHK9mG3HzS87GZ1fW6kKV5NTrB8zLCVVLUMdCYY39kf",
  "key29": "4CVJXV22yxJNit4M6prerkdgHWprbV76mdj2uCPR8vQv1z1wwz5qLAA9LtNVZ2CjoKUhpCU4TuLExGmfKEZap6Ss",
  "key30": "4PYXWPNae5Cw2hXBPDwcEJydyV6T3rMH93fM1Qx7CWjZGUP3LdMuqKxDp8dHZJEMPgoJcM4FSTftP8rX9MRLkbnJ",
  "key31": "3y7d6RHniL1MknSRicz3uhZGwfSLmhNFNJMRpr9phRP4vfUaFJZnG5PkfEDZkt1ndhbpSSxmdwBuPGcHW8pA5pc5",
  "key32": "5VftPkZ1wTuJJzSnUmXJptVwaqZs7DHaz1CM3xtv9t8iyzbJFvLAGWidZsU4VWAJ98SwB2ZGfhLEMMjH4AQhfbUu",
  "key33": "5a6uRMoYR8EhHGhHy1G2CRZbPK2P7rqU6Fy45VjnWsRWWQKdnCYjFGwM5bY6kcFhhUTazcwosXEEUVB1xuPwrdrm",
  "key34": "4Jth5vhy16LgfKBLw8dRpRbaS5h8t6Y76JhqLEVi8XowBW6wGGgg5jHYdL6d5KcUD7D5uN31hpkD4Gr6spTwhEQD",
  "key35": "7iHnobGAoTzhUQQ8XwhXsedGCYTtpqQi83R4xmt2FNKyY78gXE8AppAum7eWeCJH9caitPZrT9q2pexbAeeVCqM",
  "key36": "2Kns7CPXoDkh4JWXB95hHBAy1B6zFPq9m9vfpwHZoKoiT9t5pFbvmLJy59B61P8k7ix2msSMVQd3b3C7VTQ8T9Af",
  "key37": "2xnhVyqZWdy6QiN61BTgxeEqbZftgARxTGqrFUzDjBvrZdSct86utod9VVBCocksk2xxrc6NFFqoMnXyprxWGuL4",
  "key38": "xa7zufspsUucx3yTN3wig7bt6uQdootenfKvyGs6vUjNLy7a3S4tZB3HJ86d5PmmLfJaVdToqMU61AVSDC6GV3x",
  "key39": "4GU9qXBhVrTDzQCRb6Rii9uFVzkCcfSaGRPdXKgY1kYmdghgUseTb8nYqDYQUh5HhspSALLaC7rK81AY6dYZsAVy",
  "key40": "2BU6CM2RAdKnzJW3gVCz2oSZC2Lj9bdKqokLp4uzKjTpNujZcLLiCF7JSdudFev7U9gdmN1YphepVSdBrhQLEP8h",
  "key41": "3gLBCBmdyFtxooDfumEHx8vuGpvYADMHHCrwTzoLD4dyxmCo3QhGqNh9XN1Df2VxSMyADbnyFvSSGBsZhoucaLNn",
  "key42": "3MSyuQjYB9qSqbQDw6nwxqLmRCc4qRs5CqP1nT8S53ioikpodTyXbGNBo37rJBGnKG1HBSX2Vwt26w21wWnmbHc5",
  "key43": "2t85SZpJ8cKG3heGKZeop98dYZ7ZA2Ph3DnHZXWufwBhUZaYYcDB7uR1kvdYPRqscsCN9NGGrXVjXHQS3Go322QW"
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
