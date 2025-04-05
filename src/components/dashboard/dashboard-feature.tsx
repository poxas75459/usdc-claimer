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
    "2mTcx975KQFYHDDsy5C6SNrAW1GHMeDmmvKGuts6EJ8iCwqACHp9Qg8jQ6YNYZXwnWaajzyvo8gL7y9xhpTTHcW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "526FnKCXqgomX96Pjd86F6AaSU5gYQi1qGhWrBMGdg2i5UUoLfuJVLqYCVFjj8kRAdmfKjSbduKewgMmj61R2GZ6",
  "key1": "5agbH656sVY8y2UYA8AVChkod4TWygeVJMVGV4ppCWYpaeQCyKyo7fKMa56cv42ePE1WAKZuo5WtHXMwWDLQfFVC",
  "key2": "gc2iJ9PJQf62gvqBcknZNxqtyLLeSGghxbKQwQH6Tyr72Bi3N5gBhHrRsjvSSk9DH9xAVt2CgXfBsdoFZceeWQX",
  "key3": "GMveWThrPzm2ckwoj1QjAU96aSasLZocWmTeYsiRKiymKTpVbmm2ugARCQnBTSdGPviWrLD5WJmr6r9wXRNgQgZ",
  "key4": "3aaA9teWr1KUZSeSJ5gUjEWf1bkpY6yirhMFg3V3WTTfSkKy7Vi2vm5wdExNUpHPdvoBMzGhSP5iWa4ni6mD3tyf",
  "key5": "2fZAmtQuY2DiGnGKYtMiFLYuFVf9g3z1BNHgDE8rrJ7dWtJon8ZAdN3DE2nWdHSc1L8J6xL4sprqsRNeUWSvk5oa",
  "key6": "2bEsibmTfgbKmHE6LQcEtBhoWsTcz3vLbm7ro79jvv1hMDkfZeSBqErwcRbDRDv6z87dXZSvVBVrHAyFpT9y3L8A",
  "key7": "4wyU5vGioABVzz3rPPJfn94HG5yphWrnNNXgzRLE7HbgujrXnToQq8QRXazyRMpdDP1bX3wCsHBspCAZAbPmEKxg",
  "key8": "5J3Q32Lc3CunRwMVzwqUqnVed1X93MdhtGVo3DmfxUiKRm6BZckhQgixgg2sKX3CMmhSQRfnFSucmtvJuFiCJ2hk",
  "key9": "DJFeyxGTRz1rY8JPvTbArJgeXeSpd5yhu7xfBKDEwxi56n5PFqJFTeR35U9KB4S1pxKdgAFzbgws2K5iW7QpJKC",
  "key10": "E3W1FQCVdNYzw712GgubCVLo7riZ1okCWoT5YHcXJCq6wmCWrufM3N6vhFbfJiKSiCUtgwFi4s3siTwN3Rvrrt1",
  "key11": "2MjVqXhwWj2p4Zt1y7HV8Upfftdb4Z2ULjRkmYvCqds6AQzjMSoquQo8SCdiqcpMHRh9E1VM43DCMmQPT51NHuTK",
  "key12": "4VHMifLURtZrqWPW68mcMH5ueNF2QNTtg3GkXdPNUjkNgN56xWNXxHwfDmvwwiisNK74LtfuX8JiiD3YsKEWmj1v",
  "key13": "35CbhzdbTWyaFJbykzUyHYMu2ydDET4uSAktr7NufFAWTKQQ9VYW1ssnzHyJ8WWnYXhL7UZumYBJ3NUruzhFa9ik",
  "key14": "2PcrYeYwEzDe6EsNGzikzwYzV7ACu3SGiQzrKjixAg35mzHczMma1sPYmD8Swb2cbFvwJYqtNy4VhdzBtYqTWTXT",
  "key15": "5Pkc3qhZ6KzjiLzb1n24Yj3UjakyksTdPdoC9nd6jiAE1eumtaENkSHPeRvR9qA6Crq2Dio13QbUqCzk8hnmC3bs",
  "key16": "38DTdNxJiX3WxJhGgxU9MBnv6BULanwgCCSNWfymQk4vxosSE7jMiG1JpTaLfxPKobBzFAYb4stJNEXN8DZ7vwa8",
  "key17": "4AzDfpXBQPi1kbWdKNh7XdpPCaLWp9XSkxuKFhAUDpzMBHWtk7WUcPDWgD8mDn3uh5G7rTDKgYByYp6aGY3UX1CV",
  "key18": "3QbioAVknK1EBZKceNZkgcDdbipAQoySNA6bt9Tb3R6BtS14At87TgWR1NxnomA4dF5nPddL5gDWDtVL6PgCdSvf",
  "key19": "5snrpkRvvpoxsWeg1s8haQpS8KfJV8iUQDxjv3YxsWBhKtYyQkefLjyRXNctw7HN9SqSUyTXk42AaoHdn9ZaptFk",
  "key20": "4FoFrcW1NFnu3Pi9HbQNePiA4YnJ7Jzct7aCj6P9rWx8rVAeuBZa2shYtP3x1Bp1uLnMX39yGkddEFXihVC45sXA",
  "key21": "45RBtWzuK56jXyKhw9foNotAfEcDM2M7RPtpgWt3mkRatiQTiuapRtSDZiuLPiXJtGbpZSEnQy7eKr64Ni4fegs1",
  "key22": "4nyv9Z4U9HGmsUCDZmnrq53Cv2zHeyyocazn4WPVZQZgUyL8q6Gv2WsvBGEapurx59u72wUN15B4K9j8e3gbpaZy",
  "key23": "2SoFUTR7P3rk18Qbcem9WLEmjtiNDTDDGSRwdTnugFyYffAmCPmhTdTYZzmjW9p7PMhqgQUzKVnF1312b53VB1XN",
  "key24": "3LCFjb3S5cvxd95ZTED6VUrDJUpKkHtGVszjgt5kPpamyoqziehA8xAgakcyefF9Dh8aaazZ4DudeXM52cG5vFjo",
  "key25": "3uRjPJcuBrUNynyyNt2G8LPojx3Nh1kt24d9Y3ZYiNi4NbK32eDG9HSH2oBBk1UUrpiZ3BaWbHv5BGCpEuTGfQZ4",
  "key26": "3FWJVgZFo71FB1C8wx75ENwoMfY5V3UYcui6nbxBfcfoMyfZbEE1yhiY1Ad2MhLKkHkkizchq64DEfatdsB3gHCy",
  "key27": "4eszbp1cXEKj1Nx4mRWAcDCF8rWH9svUYq3XtxKThGFMQEtdXmfvJ8rq8iMpkcu6cv79WHK3RrpCsqE7c8ysbmiE",
  "key28": "r4bDKySWJ3k5di7VfeVSHxKLSuTZMXKKJNg4Rj1vq4M8BjnTs267aCVzcSCdhg8VYa6XxKWQwcB5rY2LD5o21Ui",
  "key29": "5cRjCBpZfSbqXmGMEGgiwWXdkEKhHfmQKbE1ULtrcDS8dbefMPMnMsMF6bLgpb2tmQF8VUEvhYSmMcayhsr8apA9",
  "key30": "4RY2ACZ1buiqvaMt9Q1aDyKbMjZNVsPzBf6th8u9MSqxHw6bKDnRXssfwsedU2PHXgotUikmaT9RSeWrm2XsoUN2",
  "key31": "4b5MBCVy4ALenxe2EsSZRdEcyKXzdMo1RuoZ9hCbxWgrdyBB8rBnttE2iht2wonHJLQbGoCzsMtMtU4SvBz3H9mn",
  "key32": "jSDgyUZcipccC5DNpJP9Xx2sYe4o3Ujq7FLp2Qf3A6HkDZmQwt6qPuBtqNXHTaPZWSZeHjzdWy1gJgatWfPP8vK",
  "key33": "54C94NAr52XmGUkWAsNXM8d9QdfBZCSvSXLBxHcnfAYwaGwh3QtqzVZBgNcaWuVitD2PFTJTZizY52eT7cYeW7Uu",
  "key34": "56uYd8jMwPx9CiHeNTBuaVx4r17vCaXeZV7N1AZhd9vz6qFaftdf6Ew4MZmqaWMkN8c11sZqV4P7J8jwuYHRYq7F",
  "key35": "4XRCASnzfKBtdnX6QD8REZbpwXaLQT4Kq2Gn4XThD3aDGbCLSmyxzzWM9v18C9tsHrQNGSyzyjv8HkKyZx8TNtHP",
  "key36": "4cBGyRBxa6NocqGWj9ZVD8Vg7d5rhtRoYcYvRMTyvQkNMUWX9NNnJitSM6fxbxJ9jUgvgdHAArymmTxijYTXk1fC",
  "key37": "2ofGPxj4ovjqsyraWTPUkNNbZyCqcY9JnbgPbJgtsHJ9vzqGQuJUUGLkYixGa9esRjiWAeyMVbQjN1UeeuPbo91i",
  "key38": "5yQWhbAzPKn1PuTJ4rm3EW8p54oc183hzyXMpvU9NVb4w8RRE52rUyVBUxYUUwYhjW9e4V6ytsMdACFswBxz3Ryu",
  "key39": "3N9fpYJpi9T2BgXfgTCtNZEvNA9Etc6cENo7VsgTx91wDA8NjLGCkJUcLZLJRQQMh7F3WofzxtLEr2WC59efMAXC",
  "key40": "k4FnsFAFvo9dgRaBhxfFMYGFdbUugA4vMkZAAVFg7HaYE1tuX7gbqR8iMvUHNpmzr92WguM2gVs9WLswN24hwui",
  "key41": "51tonRNfKXGfBPGWKDbx72W2HTY5T8Fb8yPVHEpikArKbbkxpBDugh2jPCspGHWNqxmPK8E51VBjnhF4oh5pKGRB",
  "key42": "YFixvk61UGRxt3d6UmM8Zfvbnsbc8Rb41Q2kB4XYUYRarQ8gHM3ZrTBTnAQFxef6CRXyqr2D3amM64PRtZMZvWp",
  "key43": "8ur1CsVjHsEUxZ99eLDGiGre7y3zqvHVzs7dMz72CjLnfccgBLqMKoGzQcR1RqiC4gF9YuU7uDYhnJsg68NfKvv",
  "key44": "27jWHnegAWaCnU6YY5vsstsQ75KdLNULttqC43pkgaTBh7B7Wt4xzPuqWaBRAhYzmBarqRD5eDteudHpPQr8DJvU"
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
