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
    "4CwZVSoq6bDAhLyeoEbL4aVLVpouLmG3qSp98e8tBw4XNBPTj1Qi4CQD6C32HJViqaaLyoxrh1SxbSpw6W4KZunn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PmuT7wLGzZEB1LKJChTEoTmSqx8UJWdR6bHhF41u5QCadGN8AvQTEdZ1ppBNFqKscntdtxtM4VaRQ3XMBeBBMEB",
  "key1": "5gRkFnMJwfhp6vdmNjS1JyZNBhAcuQCh1AhZGzDeQuH56nvLAzfGWHreDxgjG3aedcv8v1WVYjw9eGcwNrYrwrp6",
  "key2": "2TftjfGJjuu96c4C79B6BY6jbXJNULT5gsya8ZSdqEcYY2BhHGz2UCB7L24x5Wju3UmyzAosXFd9mQsEAKn26CRb",
  "key3": "5xtCpoYbaxppFTGC2PVttkH3kPfUGCscga3hacrkBt2ShSaoNshpKVKCMdyRJauu6tNDjoGJB7DQ9kZBLFX3UTCq",
  "key4": "3oNsUM4ViKrLn8sLA6vcMkweCeATGGnonNCeQbBWNGDQcioWVht14DYehf8wotogFcahNbjDsFth7vH4b711VNY6",
  "key5": "3FhYo8mbLhoYSdyDrrZZ8MtLkdRx6S37kQdjzKe2DSJMWnBVzjRMyUPpuiHEsXqJzjHLHhRyk6FuMLPj6nPUBRh6",
  "key6": "3vrq5hjGtcBMcgax7UgLnHhcoSMaRjh2xBnMaAESGVDA1eWZT667NUsTVyyMNjtVDyZ2DYpKjMVqutD7jCEPCWdB",
  "key7": "66fbNkYV9165KXH4zVG6WGvNhokvyaqG9FA3zgT3Me5ze7b1xWEqCksTdBVAN6pmhpZuSRUdDHkrVeC6wqSqnZvd",
  "key8": "2aa2Q8UGkugqa8SfD7HYNiZGDWxZ1f1SLQny6QxeesGcz2dnV1wdsL2SrruHh2VXFjucrF3saQHaFb6kUrSJFyLb",
  "key9": "2qxdqioQNRJeBtEWc2y8tNojNRVnTuynTRovsXjXRsviorH63utoB1HdVq3hpBpi59S72PN9UCd7WCMnQZrdVuLg",
  "key10": "4yLPJyHjqhUmdGjJKp5xwjtjkXkUpwsoutCN6PTKZahSZb9zFyYkMx1msPzGqsYR2ToV7RmhPm7bdGsXQhf34T63",
  "key11": "M7uZpcfXnEFN9Ap2Qp5icZd5b9wjJLPyVshKrrUfQqMyDsCb23EyfsefzvhNuhBj6qipjprYCSEsimm6B4mHFWN",
  "key12": "5NhLQA16CppWuvhmzfkHTCtojNxLAxMJENrXvWfqTXB7sAbdTgFv8rzBD5XixrTKRnn4z5Ls7TWBpJGxpKZnAi7C",
  "key13": "2sWrv5DEeftbYdaj1SEAk1TGaAuHAKPs5uVHhWCdayP6CrJinTfWCvBS2QJbRTzjhb1m71YorxZqQPvAAzzFykH9",
  "key14": "wKF4GZBkGkCgGoDdbCvpSgFcJjUhrQH2cdzTD5AzxEJeDso4n7neQqfzkoGkbwbU6to3sFZnVpsVT9bKa4hvixw",
  "key15": "2e8AAZFZ5miBGdfDiEFyAC9kYjnX1yECS87oFz5RZuFXbuJN4UrdmNcpq5zJn6aWK1QxYTSSinEeEbtTguUWh5h4",
  "key16": "5F8hpwgg4mbUpMyPCjHTn1E49ggJ6SgQj9rqtHQH7PPvVc9XMBdf5x3d4qh2NRnT1ydodXD6z6FEg3bKSfmhFTDS",
  "key17": "5Vb6Z9iVxTGmo2o4CV4Pk4Mzs7BjLJysHuiuyDGznpLT6j8gSEnwpFAXJqSoyNm4kzBFxdmVYv2ndWTvr3rRfad",
  "key18": "hBQjBVBH8batKrkshiB1qSoyw4LRavCcaSorNc9YV3eNUqHtBBfKSSEnZp4bG91FgERAXiG8qpSDPk3SVNGoj7r",
  "key19": "3chH9xDCkQYFdVcL6t9asHE4KJBgGttuiMYtsJVZMnJqgQX291FcT83fJeJxTaAV35Wy6vRmayDkSMUnztiy7b2N",
  "key20": "4ZNMKneYtUuz1sbhqLXukv5rLHA3D57qupsCS5oKRi61kkUWAHjYzjZHD5R9ejxEUe8RopRiL7XuTiZTPMA6B48y",
  "key21": "5mmLxFe5aFhksdPDy4ZpdiackBMf2zFQNiSEZuHnhiVPocA9aZr4SKBM8SmeTGVEC3EgUJ24aSaLmsmYsufgwR8P",
  "key22": "JxiWxk23tF1JiMfCsdJZSDDazCA1GRQR5BKeT6XGFZ8u2BTcB1pDV9fEoMCeNZZNtwepes6PPbaRR6KypG8JriK",
  "key23": "5WoGcEdzYyAgC2GnJhhDwXFMyXLzW8rmxtXdMCUpoxsiJeNb5cKGetjkfzuUa7E6XfVaxhwi8WUMmqRQWi4kwCBG",
  "key24": "4UcXfzvSadaDReDKRptrLedmK9KUPVR9ecoDPJcigkpngrhXi5ZF5wcgCAW6Um2FDZbmZQiuoELFYo8Tcom5oeAZ",
  "key25": "43qEFFWpFQcwARjEYgmFTy9Ug85DSVwKZsY234iNpG9UM48iyvbydRyfA5S9Zt6TU1ydpkka45GqirAJDjCzVAyE",
  "key26": "JomzbYMU5SkDyppJfqdyBdTKisDHWXRdwcarg2TpkLXDhdSJEYXnJbM2X2ruM5h5E1Ton1zDPKftWPiYXXkpMVH",
  "key27": "5698dYNKht7memYY2W4FjzN6j46RW5pGuE7WMLukuzhywjMK26wyZZQCdDgNg2ahv7q5UjycA37v5c8YhE2TmFQR",
  "key28": "4HWFKyu49XmuRhTZ21xhUeiu61dhhdjQErrfcNaKqdCK7cXSYir33TRLi1jabCATRWFC1bocvNBGBuAGJZPX7M1i",
  "key29": "5gdw8ErccedewFJNaK3uDJUkwSiY49L9U73BmnsNccVAw91Cyk9Xawjs8Z6XB8wTMGn4VCQyY4BjDpanfw9hyvox",
  "key30": "5N5HakmLXgzSWYT93K1qAtRfMJVVAP4QNEjaMkZTd1oLsYF9Hbm4CFyHcDnJK4WnvBYahVNtiBH5kB1p9p3f9k52",
  "key31": "4dVpNdrKbmxwX78FENxifHZzRv92gbchYBeo8Kkf5pePKhmL1fNSLB7begzenmnJym3k5NFUrXKq2dBrVNA3sKCK",
  "key32": "2Uc534q3YKyEUe2yHwf6aEPCtAMioJKurhnxWCL1p7txx8e2xmfGHjXUbj1RrpqUw77ohSkCZfogco4imzGF59ar",
  "key33": "4KGzFyKMDWq9NqZx7m4LaHMmyFHHMEV6SJqp2zJ2fqVJEB8CsMj9kmZQmR1XJDZ1mCDYdg36AvvwHm2zjkXKcKpz",
  "key34": "2GNCgS5F8kCrewqHhympAqUekQHJosye8M87Gj42ENLWc6kMH8U2mPhKcWWaBRsHEHWrE2qfSUDaC93u5DYe689d",
  "key35": "2MvqVqFSYNT2ZBpcb2awo3bBCggKbBjgyFEYJr2CenJmJC6pyppPtG3M7crPkpChatK4fAEFEZF8UqfZxt4C23Xt",
  "key36": "3dxXHn6WimZeRC5yonmuTYqt7EatDpFD944d5TZsHRj89SrtVbA5edNhynm5Yctucy72hrFfxC2D2LcCS7aZjcbs",
  "key37": "Kmk37tGxDEpswK8BUMRzJUVRMFTwqhtSCsuqBNasqUfDjcSdRBpmyyj1tAsbPbZ8X113MhCy1ThTuW1Ej9FzJt1",
  "key38": "5cy536xt4Km1Y4fwaFRV1wHin8HDgTdkoUAcQ2Fs4qJ4cCtQQrN6Y9xQhF2XVqCUiHcoecYnbVP8D2VSrBTX1dTv",
  "key39": "3JCpGgExyAf1Sd6r1eWi6156AfFRsxXrLdvHLochwasS55fExpAV54hyZjgi3LHFJbkLPqEa9hhzuFT9gPZhjw9D",
  "key40": "2me7TKacofVX3mCYmjL3iEqBXiaZvUcGx9RKFd2ZfGoY7oe6gmW1HD15LreMBXGKTG7Ce6WYCyWEAJq6P1Pfs3fv",
  "key41": "5boAsjUoSqpBDV4sa56DvxySppKpeSdLTfC4Uk1ZhnD7GMgYDiSZFzLkAgVY63QVsT1FZsG3WE6u7XruH8S2dwbw",
  "key42": "NfpX5SD5xEbETxE4ivn1ypA7nBdNf7W6GA6Ta3sBtC87xvCws7UuvokCutrNxpPfmoH7PqSmxYARNXSzHEC7zfM"
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
