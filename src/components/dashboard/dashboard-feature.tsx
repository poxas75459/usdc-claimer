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
    "J3DkPA2fVfya3GrBrCfH2zCdCFGva9RYXQdpdSormBtoGkCxTtCXPwrBKFrAdgeMFNYyHADiHGiTQpnPmrzxBCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oC1wSYV6ya2PCHEq8VQ4winMmME4dRsdYxPENMAJwXVqFySjiZHiYUiev2NLhbeYtuNZBgGkeagboacaTQNfQC7",
  "key1": "3GwTpeY7a4Ki7wJ34CRKmvrBw2UcjXxCWUkhc5BahhfmVeAHJrVkXm47oaGnv1b2sC2PmQ1ZV4f1GEACdTz86a6U",
  "key2": "KWTJe4vQYrjqQQcj3cS875JHmCqNbVUCH5SgT1GwEJ9VcyGpedxDniN7W9z6XCMW7xEkctLBmTgaLYtb52VZJBG",
  "key3": "AT7WhHbtCFtquTCnhcLRVyRynUcX2RzxKP731swWZvjVsVckinTnZZ3jZNu3r9ZxZWrnQvcAM8QCMiyV51X4Whv",
  "key4": "54QnvVDz1LgE3PjZi56z9LcuPqKmMRgABGjmSbq4Gtke1UAn9tDh7CtE6iz2c6Rvn5p4fUENGcmjGPWipc31LnSs",
  "key5": "Bq3k4XbArgbhhF7ftrBSZAYLkEj6Jw4vxKPsv9DxCWxp7ffvsCryQ1vP5VGmyZDt26sAZt3vixY65aVSj4X9yHR",
  "key6": "2uMKaMfVSoJbvLA2LW5ukr1Cq9sCEaCRmGTPfZYoWVsieMqtStD11nwMqVPCLZJG97QGVAJ721z9xS8uPBG8JhcF",
  "key7": "57WYgAax9cAa1m7m91MynZCpfbi1BMnSgrV8ffPhuEE4fbWT5Za4p1MPxnHHVf1xxBGGdVcWJVWSt8WZf7Xsvc7f",
  "key8": "4u9ZHKwoaVfJeHnqG5PcQ3StvC2vVZFFepUNDzXrWubZYqGUDymBAB7UELKVDpNfkLpYFRbFrNF18ammvrABkEMQ",
  "key9": "bXqBRV4P5uCDHkNjPE5mXue4FVhGxzZz5Dg8iDf8wCEL1UX9Voj9fGY8SeTzHtZ7ZUsXmP5X2DWFptBMNXY9unh",
  "key10": "5NgqZTFjdxy8b7LEZ8Wh9wgV4bopwaj5ZFfzq92Gq8cq4tkoCkWdcQznRwjKT2mjRHfTnKJjfzSpdiPDCE6T5noY",
  "key11": "3CP573ivYQY9fTbtt6ddjKKdoWX7iFSGjGLAQ1mBpeSNCZ3NBKnVaooK1AkFj7eRwaXSaAnVnPFbrEiUsgXfzZN5",
  "key12": "en545Pq4NVPhFebWj46SShk3AoHXNYsdLLhcZmcnW4sfzq86gCXWy3EPGoUED2gvNcyJ5sx9RAq8YDUi8Ra5yF2",
  "key13": "4GksyyTTiiTEXeH1WKE8Mdv2NXmnFP6BJCMWWfbF7U5cyfKAhUNy9EEwbJE1JdqkZ8rUTRHzSabphCNwoNCGt1DT",
  "key14": "4hSQDWcAHWhyVGtBX1s13tUXShQyqJMxTpAwmRntv266H624o6hnR4nRN9v4Tvk73RtPEVusiMVFPk9xUZxiQ8sU",
  "key15": "22drfvrCVhpQFACuE2cHCbG1Cq6x91R5QxVKVKtAiQgP9DTM3cDM2vwQn4XJ2vDf6GMPGG1vwhjAkdMmk32hJ8MS",
  "key16": "27boxy3EHPrnVaJVttrqHj7wCjMwkPuFkxvi6gz9t6FxnMmmTwBtG5UKs67vuQbHADMkkELhdNbNLd8dckSMQkGY",
  "key17": "3hatECdSEjP3nGgA57Kt3uniyVBdCBJY5czWsH369NvTmV5x22683mrURH9y5agkdZyXL21HR1G7ZrCgn9wbTPMd",
  "key18": "5K6Mt2hpgJ9TNZfVr4yBf6NhLwLtWHYQwtjvvCHjzbxWU5yhrUV45K4dgxALsS3NHf22gTC4VtgSHorQ8Dh6yaFd",
  "key19": "5LamZkp8vF4dNa3WZ877EMceMNr9ChzC4QK3jymPpFmAw9muNrQiBruzUjuSrD1CG7rgv9VD2R4FNtwchxpuCbUJ",
  "key20": "3Mg37wjgtnW3EiuXgcj9y3xFWR8jxuC8ZZsWNCBbXFYueNYrwGJwC57TpLZu4iK4AfoqyheSazD9mQnfaoLW3mw3",
  "key21": "3yCZEcBB2Ptf89QV8jfZun5GjsTDTvvGRrh77gwaHzSUN3HvsrmyeNfn4xaWJrbyZymmphT5b8VEZvCdirKdS5UB",
  "key22": "2FJ7DVoF77jHFGfHKGXJ5FxHgNooEddkNC9W2fd4S4tE4s5VL3rhCWb2KRbroy2HawV2NYVz9QCdiwcE8z9UfSNM",
  "key23": "2rfdzWhLxHq1MaAiKwbz8ZMWRLmyZjD33Eef7PPoyUQGS6pWQAPsAbQFVKotPFXfpM8yuKsT2QakM8s8XiVXj6n6",
  "key24": "2zpVs7R45XT3tCdsBDLr6k9skaaASmzQu5LhkHmaYP3tkTsXPpTm8EWtZKZ248EPez1iA4LDhnzPUSpBDpcrpjM8",
  "key25": "4fJ6c8ZXiLr2qY5kutjrURZndDugLW7FV2oANN3bTxBh17XxmuPRuE2DrvueMpQ9vUGWcLArmpTpwFLVTEkwGWh5",
  "key26": "54vRRRXShqkrYwb8fFXMRppRyT7cPMMUQqUDAezZ9kpCNpFsTrKSd4tPaNEcuWKVnpALMLi1mAm8AwdoA5Ufrduy",
  "key27": "5UAfHGuxEGcxxk77fk8m6FFoebYGqbif4pNYh7BpcPSWY41X5GJ2H8655Tw9AbvdcNg1oAXrz62J3ih16yDjDuNS",
  "key28": "3TE7LF3fWLp7uVGT4kFyEvddUsxHQ89mLuDfxPRK9zHsTXcazTkDfyajpVGjSV8uUjDRhXPAkUBWiApuZ1tnygka",
  "key29": "5qxGzgg7eLNwUNjZbgEpqDNXpZ8u6HjyCGGAVoNMDe7YrmUgBZK5aVMsqk93di68wDUesGhYPUVAWixidwoD3tCG",
  "key30": "3AbV6mSxLbh7PhbRhPzRaTpRVuSGwV4uZrfMGCy9AyUvPKSwwKgNUsaCLn51fDH7fcrWJxSLVoKP6sfRrkGgq9dC",
  "key31": "5sU5fKRZVvBNte7P9gwmrCenskT19ag7y1PxQz14uLh7iZkRt1K6VqsCe4PEpB3cSELqVqvLNV44h8Hgevg9UaRv",
  "key32": "DhcqAEgY5UqgQ1w5KeDysafevE227CVYUhqjzivFuetPktgZfk3QoRLQED2ND14V2NZAdPW4b8ijAWFBgDWSLwq",
  "key33": "Gk1pdMMScYHPvcieJYZifWMnnyKeAoKECoepzx7eBih6pxhEqPw6BAPHP7hSMg6cZeTeRYeTDfadoUZnbt72YE1",
  "key34": "3x9rwtxsBEfo4a66XXDdo1QMRqHb4ZhvBk34o2tRoXUhY88VXTjbEXj4XeX76ogztkkb8BSSvYS2YmfsbJvXDSuc",
  "key35": "64yHstrKxfpMJnXfUy71qsbt6HB6vh1juycgTcVC3NxgtBj8VADAZ8s3ASShQdYYFNK3aLcojVZyeKXyTd4WYPad",
  "key36": "34LBADHrqCqiicHoeb2swkCn4mJDaqDgdBwkBXbQEJt1EGTAUi5NHPGRrHeU7K8JUo6aMHikycBKsQfbR6fkbY2F",
  "key37": "xX2z9QTFGUxP5S6LvG12NpAWob8qDpsfDqV5T26DRN3ekujnzCRJCxZ14RscA9M7kpVHXrELhzmUuC4apo9i2nG",
  "key38": "36po8r2MLJAuuqmBkKB58KWF93PUh8kD1jpiKbxHEwhnWyL5HDkfiXe9af87955Gw7ZkUu5zJd3ipHRh4WxBqRvW",
  "key39": "3JrDNDHQzqvJ7jgpRuEqRQQKjma9G5b2F3aJNS8yTdcUKBqjoVmFe9Wq7XpYbdLnPuk8zwjZSf4JJcgbNrL6Kf2u",
  "key40": "5PHmQBfu94arDCTo112537EXTqvcXvP19RyMJhXB9MrJSMdCfeHwsVjdTDYyUMffh8p7DYzrTqy2hkFE3frJSBUi",
  "key41": "3eiMz2hsazGTBsLCCjPP6zCQ2EVKpbr5Sr3NBL6SrKp9eUHg1SnCFPuRBCamYRtWsPjBxsysRawGD2XVUcDmkSsA",
  "key42": "5UniFGCoVzx8HZZEmnQTrFRZg1RpdKoUJLnQUj1UX9rxfRNEjsW4t2MKdZLqaxTMpxirLgmzfBphDGpknnZDM7xW",
  "key43": "3vbPhie1KF2MFM6LaZ7jy8c8cqvK66skWughZFmAwAAt33LcLW5D1WSagUuuqnwjz7tiQcp3StZ79BaapSzei71k",
  "key44": "5QmgcoMh6UuHTZRABZGpYCi2cXBd2MLUpdLZELxGmhA39NPUhhcfxBCeZ8GKWvm1CuhLWMraGkiizN9Hud9WQKB5",
  "key45": "4GdCcJQw22CWJFSCpr8pNFaHR6jTkCs7p6WmWP9vgveT9EbeRuEFRq1hj1EBkn75Qrqf37M8sQAVDZW2ckWbbBHh",
  "key46": "2xuEo6PLvCquatp4P62iohf5eqWgRGdh2nmaQ9afYiCyYzwTUivN7En4yA4zT6iVyYYoCpmSsaRDz6Xy3iyTM8MC",
  "key47": "4XLgP63RAh17J93ykQ2wvcurRfsoFHi8B1HjS7UDQJKLBZq8VrKkUPmZJPGk5inV8HxNcUBf4FtDs56KCs8Wa7eC",
  "key48": "5SqTYAYd2X2BViM89ZqgQUj9Nk39F5V93q6RgCt4Mp4CiFqwFY5xvRUyxRS7Ua9fT88arV862ZhMK5mQJFwCVKZ3"
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
