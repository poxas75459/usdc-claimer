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
    "36aaLmiq2Ud57XZXmwtXHo3UGRusNY9U4MDNZUCJT8TF37vp4prfHKABuBkwrSe6qdwUTA7yp2VjejQnam4PELQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PSiEVKd6sGDdcZJ3yGrLZMdHkmrTr5227VJ9fhS7R7WJ8tYmCj5LXGXS2ZXEMdWCqxDPiVSa8Zp48Bjx3Sexk6j",
  "key1": "bmvTozBx256LKFBsS1EKrs8ndgNmjoNYWdPpg2VhZymJkxupo4CeyygLPJWnzRhdFjZ5CiLjbPRDwJBeuY3zuZq",
  "key2": "23NZDuqSwkAEjsdPQsRgscC5hGZ5LTPYVmwjNfXjpje5HkA3QMvvLPqtN5LhnDvURtLK7Ue7cQsQwm3QWihDr9j1",
  "key3": "F7faFY7qTvp2ck9BBYmw6bptmeq5kXzCm2wuimECbsY5RqjmnMa8FUHxbXpjNHncViRY8QQNYKVkqz25K9EKtaX",
  "key4": "1t5FGd2Jrx5FKHCFbTZpaMgpRbL68DcJT2XSMo3UcrRQfScuSLqYDRKPen2474pLdy1dnvaHK3DyRHqpSzJxCHn",
  "key5": "3qGGkBN7eAKhs7fahDu94pPFeqBFXA57ujZAZ73uhRBQbWakYBAr33P7FBjQ19qdFKTeZ94zUxoRMfgD41Nk6xRT",
  "key6": "eSnrN5YSst22fzaWnjrW414zAwgU9vcECpkhAuBX5oGVukuULmxVtpHFMHtmiGZ71pVm1oJit8Gpvs1oWEUAfu4",
  "key7": "3HKdBZL6RqPJWnYgRA2ngmU5QYLK5P4Kwi9eyAMdsU7nvv7NnWLKZpF4pdtYXZH6uJVP5JhkGKFQgMGFhqQA2pZc",
  "key8": "3Gw2R2C9wKt7Hee91PByW8o6XD93ww3yCEKSFFuzib8ddGNtAtY6PDoknxHybW13URb4wMTSc98ACBFv79hST3qj",
  "key9": "2rtrvagMTcAkhogJoT3gvE37tkXiddaiSQ8c9uMWJTX9BcNaPqkEvHffFJ3bCSkNoam2tjuMpBdTk6cMHwTQ6LTF",
  "key10": "4LH47bzCj9aMj6tbADburupKMk7GGSm3CPMD97B4X8jxsJtsHSYzDAQNrPUp4biD8CNtSZTp1Y3oB6d2oTboVH3x",
  "key11": "2HvaNtwLLzT5JR6XjA8L8DW3yB7arKpLecZCwcDZZxcwUpppNxjjkC3rJaNgxW4AjDv28Pkha3WmJi6eey13v2zt",
  "key12": "4mq6tDvtK9w3dPDDk7qB4bPFSLq2ATGBfxgAFsnSUV4m43QQiaiqwb5qPoa6c37hFqjAgnmxVXZVby1TYXcEA31C",
  "key13": "3aVn5quoc4m1KF4icvxC8Bf244h3Yb575gBjfR2JWVSugXqA2Bz8NsVE898wvmejZLfg3PCrs1Hy5WpFudWhkq85",
  "key14": "2DF4GzC9VvcPY3YQNrQVJU3PcTQBj6LQhHoXJcXBqqUGWG9Gmjj4hxmJC1dXE3egPoJAcmAcAzLe7cejKAnHVtBM",
  "key15": "28xsdgCaKeVgMQxt93AzwqxCf639zMk8rtEee2phcq249eR5hrzbgDGHH8h3qQerN16B3192Q4gEnAB961XQgPDj",
  "key16": "ij57QhRbWz4F1p1BoEQ6ZEHCbaWEKZ32AqTu6vb3xAbyHRnDdTbuTYEhmyyi51vWLf4P8ZVCiyfFdwLZSUtSVs1",
  "key17": "nwYFcu9QP47KQmVS4Cxrswux27gd23f3qNH1DNcqMbZ5kTmKomNBwSNUoKUrmsS8JVUchENup4dgYseB5qDon2Z",
  "key18": "3yt4HkMa6JDCHr3RgpyG395z9vpNDvHGx3NjK6pTjaPFt6CTLTcyAL6cea9rvmZEr1mXCsSyK7RMvjfz1qpH5Zes",
  "key19": "2LNheLN1kZonCi1379e1YyEZ8ZbBbhqyFTax25XjaVqzKyhsiroAZUkzfTCdmbK5nB4qRw28JiJtev9pf9KKcStG",
  "key20": "2f27PZMM2xrPVgCQ65Jb6uAFkAqLYqUXhPUCRw6MSnHMZM9QEW8ihwJikzkU7BcwqnpRwRaFL7j9ku33PhroiYmK",
  "key21": "4kAhyv7yAAdhscGaisQkxuSK3Y7tj61NQL2yCRSger2qbacpGEHc67HYgH13RkwyjLCLyEFWzNvv5w6s6hnnyZu4",
  "key22": "4SKrbiTu6rtKGnUKsqDnkwPJqiQasyHkDKXedWaUafUtgxHoyEP1mpfuLgozSV9ATgoK5J83UGLp2wJGy4Gn8WBy",
  "key23": "2bjyZAmRqLv6ksQmEPGcZRenbf3AmPe4wSMoc7M3WaGJG1zPnorhqAxhVSvqggeiWMomhMsUqjRC3fLs69pUBkxH",
  "key24": "JtLzEvLXoFyfp2f9HX4yKQnarrDs1KJmLbvb3jDkszVnEv6kguXU3YLtiWmjhsBk5ojyJiJoccMu4PgqNMVbfeh",
  "key25": "5cNcvju2TFG7f8mzWYDWFuQKAqDA3YZtpewpE6D2F2y3RDRwsU3QALo1PNbGRzMD16oh3ScnuXFQtsAuQw58mBwM",
  "key26": "5RwAzh7jq8REpPab2dJwDpnfxnHAtj2pocwivnmwg1oijA9fc8bhiR1wLQ2r5Vn4wtetBKdV3qkTicso7koaBpT1",
  "key27": "3RR1HUK6oDfSpvtNB6ThNueckqhRNtSPVtwhi4CZvH3h6WQfaQ6syYCwcHz8LzYJALmFW4BF7jvtxhgsN6tEb8Y5",
  "key28": "2TKs3poPJudmDqztPxT5okXwpy7BXX5DVgotANffxk6fiK7MjfusCzmTb63scdKAQJVfSWiZCeCLG3E92pFCaYNz",
  "key29": "2HcMyLfAzhfmFe4kayRj9GVmMVhzRNYYTWh25XusbGRt22qFQaqVf4afaanpZEJd6YS3xGeQRnfYE1Aa68NbgbTj",
  "key30": "3McVzsntA89syL2Strs2jGwMEyJfNp1K1TsBHakzWhe9QKEEbzZyYHM2PcqjjP6Tycq4tdp1xod6LYfRzuP6RQUg",
  "key31": "3F18Mgt42LX44ab869Ycjj5fgN1ddh9tJwXxuyRiH8TTQ6awPeb6BnSZpmWKedxZ5mDPG8HfdUT6FM7AyTkJzc5z",
  "key32": "5JnaFLfiYDx3XPYDhmNo7ysKrUQYcJFFHy7AV4XnPv1yaYJQLNwMSPov4gpsw1ACZUMgb2j3skwjjN9BFdSP4ZGK",
  "key33": "3rFvGUaHVWpLLnJqxALLhSzvKdxkMcSFXwCQmLat1TPdemMtMe6uscr8wYBKVZjsvZJLANk7SHrW6QEjj6vGrjKK"
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
