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
    "4AkdPhkwPt4hDLiigiXp5zAMa6qjrAPweTuNffaA7ApF4wLeTJCF8QLv6KkAfu55icL6epgntHLyoV1Vrife1P9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FBz8DpHtepkAbrxfJuxRdcJRvNDnM1Yt3XoVhZDZN4y7uX7uSfcju8q5BMp4BkFszaTArAWGpkqN5K6L5yqKnjN",
  "key1": "4Tz8zaipUwtDzC3Hi3WvMQLnHEHkkEXyhdswpKroNoqBYg38MjsqzfKp1h4jj56K1DdkeXNBd9NLrZASaCEzYBMX",
  "key2": "4qnT6tuh8zRMDWXwrQRWR7pDhTRjvWt4gzB7L67gpD9E4NPtLLeQroWUAfikwpbz95juU9Tvvj2cHVKpGndB5rHC",
  "key3": "kcWsNaqq7D82U2GpqxNNMUEhLD8z3nxiWwhFoiGwh9iNdbW8fNhXYKp1ezkbHyyikrhbYaHaLiNbKVwU3sdNi5J",
  "key4": "4ns1LUNyFUVrnAbD34RYtGTXornz7jhjX8dYs7SV8mGUdQYXc89Mm96rFFPQBqYwvvcxk9y3RaW7zqKzKaXNsYUw",
  "key5": "4QN1yPLB835FbbbF6hkgxkMRWHgcmmGVxNAc2mqfEPkGD6C7mms4hn3hoMiSLqXZ1z9uR6ggvKTgmAzQVpHLA7J4",
  "key6": "2b5SpkfQAQTdyUcz8GZ4v5hhjpTa1vh238KYrYGyXuPdfVRY5GVYcrHLvUc4SqbJFbht6UjZjDb22qHkCrWecvLg",
  "key7": "3VBBhfNydY4jR8qAPfyUJUoPbi2iNoa6BDpuxJamsHU88gd4PG4Ez293kkgcYgCjY8wAhJyHVZfyJJc7NDxegKgt",
  "key8": "eiwbQjzsPyzjXJVu1fTUYSKMXRoLVDq7YekessFoCh8UygaEQGydgk6jT2TrmxPZkzAYqeEHe7sM3mBFqNVgFb5",
  "key9": "2EaVcGUptV1ciG9PTbz6dr29bzuKFAbPWGmFBCV68UZAq6PFpRvkSz27x78X6cvVgziDSDLnkSaNDMZDZDYCfD8d",
  "key10": "2n8coa5V1KNxuugg9bjogvdq67jSXTwLV37jYM7NDpPcZ7byw46PVSaW7EnUF2gtmdacdrAijJDoZDMCTUQgAN6y",
  "key11": "4Ut9eBCnuyVAV3RET15huAH7c9aRT7DhUYGFfQvPeQL2jkxVyeGSpYhEktqdmEzgP8P61EfuFbRoGnGHfDa6ZkLs",
  "key12": "5QGZ6j2syMkq77iWuAosxbD8mxMQ19vfLMiaMbM8acH8dumX6w4rNW2MdbgX8BaJ7xnSF2PCFbBBTF61t3SDUKAn",
  "key13": "39KVp1XEnc5ZFtsrWQY3C4gx8GriGr47x29bwiTrwCmevQAykNnzLweqz9NR7Qm4wdLNGT9BfnGqbos5X9VDzsdL",
  "key14": "ShRoqAm4BnUGrR8mPMCbWxT1Xwjg1LTCLpr5aSakdWPdYeTEEUtsujW7WZaK1btDzANguooeVcDKuDA1TkzhLcq",
  "key15": "2g9X7BECSjtshiFMGCxDoD8wEMW3MLv6LGofYexDYYNa1dfSWrKk9jSqWiguQK5rREp3M8vCGwiDC8hwkwmX4byo",
  "key16": "62m5t21JhodkoEisbgHVENQn3Jpa4n8deQfW4wivRwimVE2e7JjrfLdEp3M26MpFfaoeghzE53cdXJ9ZjrmcU1xS",
  "key17": "38hV6LPpq5hint53wEyivrdCh7BsrG8sriRdGXUoA2EzNdpVZzH5xnSBKgJKbF6nfCyhxZjriBqgREufBuzTj7FG",
  "key18": "X5xrXpiGYCvijsBuH3Ki9RpK6shaktMHsuP4i6DBtKsN1woUdGK7gMirpt1xcNvk5Md8Qqm6BPhFgdEWtyMvUZR",
  "key19": "4iYAppQxz1Bav2HZkrjnfiHYNGkpij8BiD2RCCnnPeUPJreMdBXTfjm7Pc3nesURjkg1reTXj2Upuc3LkH4iyuXj",
  "key20": "4bUVPVsFw4cEREXJkjdFvtTRnixokCdjTssMJfQEW996T4yJEtgpYeM98J2ja6BMVPnaj9D7ioW99DgboeQdk2s1",
  "key21": "2zG2CnnQ7Sdytqem4EVKQdzjhy4aC9PsGdsWLMHwZ2xFRGF4XG3avpBnbuueguu1b7e7YWYbALTu7tNBp4dH3CcZ",
  "key22": "2jpuAU2ghL9nRn6ewbLtXJutsCTsvNipyX8mftXAptYctbQVKModTwoUSUv3LfEJYcuF4uys4tGQU8GwcQU65CMf",
  "key23": "gqeMwoz5pqvKyM4y2XkMWqD8FNQXmJWgwVuE3p1YwPnEULbrpB1nnyzovgjuTcegcsWsM6HFvgEuRwXE1asSfRM",
  "key24": "2iUa4UM4dqXZpqRqUt4BYfh54tgfGPJULgy25XU3DVk6h7SWk2TkMy45xGWH2WuqUwviPQNNEtediwVQ9FaHDUr9",
  "key25": "4brMmFxeKtfMt1MAbe4VwVn29sa58mZU2UXap1xiUUqSmA9Tt5sZd9tsqGSnAtCN1Wa5AN1WHh9v5eXrNZJHZzqt",
  "key26": "fBL28YxopYydB1oSoyHvUFKUAUpnkHCKTapvTrrQTZU1b6owcXvyKNuTBdtDS7fimnZ5BT9RZTfvCEUYWk6SqmG",
  "key27": "5YoeNDQ3uPQz39oeXeT9tKExxAvPyVo75nzYgn6nNGWaNrAWkiKhLwXPKTcck6uVfshYQ8b4ypMCGDY6tLSV25pB",
  "key28": "4ynHotqCDia3q7dFdMPbLwSEtKPaKcjnRVY7A3YfFQnob5BH4J47uvPxvmMezgB3fz7m1K1UHLXTWcDum9iCKktS",
  "key29": "5EYd8sm1zZSeaE2yi3unhrkhunTUi5mn4Px4qMnn23BdJCfeGqphaVQryeAGCKW2ytgZx71xR6PU8xcs4vJLoYmd",
  "key30": "5HMKcaBjRWT9sA16zHhHoviHuLCnUpZQrZR56wNwJjFrmqWrtbjv6dXTyKjbAYpDtocLyypfdnQKAzXW3jQtYL4B",
  "key31": "26281VSXGNMsdW3Vq83srs3gVX6C2KyLqxbE2vwPWXiywHBnh1tZMpDfvmef9nFZsNEnY2phdLpd2vc6Varx5ypB",
  "key32": "2ieidfhmPEmoyMssXodRNTLPKzGNjofjhmWSohqBu4i3n4duND7DiF5TJb9RQ2jK3nSpy2yazVZgD75K6hEs7R4b",
  "key33": "Cok8RBEUY3PoSY5caca4sCip79cGZyDbURmBVX4AoEQuq2o1jygoET8dGzbab4JcPUkytGidofKgXuomZwa7so7",
  "key34": "218wZozXJQ5G7pAVNFDQmPRPgiytXzvwsjQfzFQVeBsbnXTKFxMYwUa9ZBQne4F9Wr7CQDCZtSAzJkcRD9PuYHP4",
  "key35": "9bgcouQntsw8wYwapdKRseQBsphziSAcV5mEphG8apwcrECuTuz2q6QGrUhgKzXnzDb3HETNgFu48jhqziUuWRs",
  "key36": "2g7qxXsgZVNMGfKu4oj28omMmH3DDN7aT8JjLEKTryhaFk8b4dPBanYSMfWE7Fcf1RFjoDdLqrCxhHn6APBoGWrX",
  "key37": "2oVbiPNkaskicboiVDxBtzQ1PjqNhMBuwrWUxWaM85ycwHQkXWDESFbKGJ8iybS1ZzNYJFR4oFVsRQ7JCqWV7puC",
  "key38": "4SxJgtYBaiQ5TJfPsMRxoVcumg7daVP5YsYbkuyBME3YjnyaA4C8SBrCxoR1p9UKkqzRbvD1LHfgguLQ1WTXD8H",
  "key39": "5qyLXHtDHMVCFFMmn4vxNcamiCVF1VrMyy3BRUL3TiQ8ugn111UM7pbMY8rvL5kHshrUKr1nLdGaSz4p9xCL6Y8E",
  "key40": "2kUQZdf7M84DtguH48hXwSwtNpuCY6E54UDtGyW6UvXowpXE9SSB39XfBiJRrC4e6jRCGNY1pKhjcJJwH4QZ1ZdX",
  "key41": "5WqBRNgC5W3Zy95WuedMRT5Tn55X9yVYqe36QsauAoNUA8coZsp32XAvPVWa7cm4U8oAHBmHkc1GTxmSugBJT29f",
  "key42": "3j4Vc28kPjASYbCYiY9vp3LYaEtVZ3zbpuXENioZF53og9JZujmPfb5hyjzhNBWG6k1WyRuwENcXc36EWW2DHpm9"
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
