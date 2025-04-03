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
    "3UqqgNjEpd3YLJWhEwcfRuty4waxzMxs6QLkNuZ1RST9oVTfuCHsPBgygNvCGBv73eGgcJ8ZqPJ2ijiU3bcyGrNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JY1c2PkRF3nA35Hs9KUeg6k2MkRpQGwuDCyWXjFegEfX4P7Ab7X4GmVhtd7MCoihF9ubJXTrNtWNwQuWvdtqw2w",
  "key1": "67D69TbcCE4AqBWWHgK1Mq8eBvgUi2ndueDEg5L7FV4B13otfZC5tfySfb7kGkVCBLBcK8XY9jzNbyXJ1CPSmJsC",
  "key2": "3jsypCxTA8PPBvnsmLf9k4kHy2rodKQ4FpW26Ko4NeHLpxniCEH7vFMJ9T8EDgs7jR6aCsyoApnagaiNi1whZXTb",
  "key3": "5FVrkFLV1qdbtuXQu9ycqsiAaex5b6yC9FzXxUbyc9hJ2ARPjMqJUNLjprAzW92d4gC9ua2LvxUP8JLv2JWaZBp3",
  "key4": "398BF7PWhPC3bKHy1kjspsEHPyp6B5hoZ6vpidJQUuFpoFuYZHE8hJ5ruvuyzvvknpSDzaViAJSmVQKdUSEi63dv",
  "key5": "3KAUx2iA5iTmTkT1ZALNkYu6cFbe89dTY7qKvSqY3f76qR2zDdBnf3MyFjsE3mRMRjTWFaeTjKM19tW2297emL73",
  "key6": "4UVofDUU7oDhwFd9AU2Z4uRCqB4JoAuT5Zuy56Veti6zx4BUkx1rRfZHEPwSRRSztTn8VED7g5gou2GMUiSQVHq6",
  "key7": "14yuFSEfHf8prbhPtneqp587UNE7GmQx8SFCavCBwjSwNHCLXHVAYfz4atNtbpsituSEedBhwLbqmo7mhBpd1Kc",
  "key8": "3WeLr6NFT82ADLmjbWPQ7SGvVc2MgLY2rKtXV4ELHMB2DtW1jHYjL3FuBHNd9dU2RiekTsoeB4Aery8GgL8L8HEv",
  "key9": "2c5QZWyQrxU2q4HvejiXFxEu59PfKrqmjPEff9onD1v4Y91JdfS5pNFQNP4sRcESxg4hDDNyYR3bLCXUbaWyQBXN",
  "key10": "2D9pdoMfeDupV3L2mX5XuLbeLvLZTxstLRsjqs84edZk8wdB3DH28FcZhuC92GKu5MVrQoeDzSo5JVAC8XtZTm1Y",
  "key11": "UzpdFXGvW4REDAApMAEde7BfkTy1icDyrCgZyxsQUdTYkgpz2QRH18Kh3apaUFNmak4BZRrUZXCwE3Ne37VTJgu",
  "key12": "2ZxRha6XZ6riUPkbVjhr7bAL6hDU6ovgBZR9dsydJVqiRFsVuAsvo5fAnB65TnfGawzUZhNbAY8u3ctYFwn2MZYe",
  "key13": "c8wnndNVxjCBPbMoqLqdR4nQwAuuZn4xt6UupkibGGwumq3s41idLGUe9XPF2iUsSNQ4cLrMqyjTy392Xdfhxcd",
  "key14": "5WAmdA84M2nYWrYdexqhiCNbKoZJeTJYEe91f1rHXcnWiLyhXfPrqbsfoMsCKJN9zhzVYQwj8LMRET2v6576qYie",
  "key15": "5Ef2KB82GhqjY4FvWv8CLaU2pUSNfByHzYCcVJBAiCw5g7efxtnrXg3LcaqHYbifmf3GcSKUPr9VMMrPVoissetm",
  "key16": "3XegnDXV41xP4ag3q9HkHtrPjpHWCByXvkJdE8arqcUvM9kiMaUvLuGKqwSiQQL9oWPSQwRkzmxfW964qHxbYFhU",
  "key17": "2zDLidRkycbvVhDFmsGXGHGX2nt4JNYzFxueLJrtcaqFuLc4CDHaQB2jc28C2mpLBH8iHHTqev2cotP8wVAVXc4M",
  "key18": "2VFPX6b4EjKoF5BjY12CazPcWQQJ5KdjBsAZTTui9xLLnBynPqacadP41YUbBdPjGTG7Qen4j2iBTB7U5ypi6ZsV",
  "key19": "XCNtswVH5WPyYHoKaHcHEZigP4KMr9xRZCnMnb761ZHXTjBZgpzsVegvq5cFaoAwdUv5Xg4DtwL9osqDdRmtRq1",
  "key20": "4aPfRpop2FewDxgx3EzDtUyWP4RTogBudwjJi921MB15Ntaxp2iiVtsiedQQJBY5pz1ScASkNdzabaKce2Tzrjbc",
  "key21": "3VortKSmzeARzHf5civLTe2rJ3Btc2DdA45x1RoQZf9gfpdzJNEN5AoZqRnzsPBBYhW7mDa2SyLDXn5Eqy61N52v",
  "key22": "5Fuo9briUGZek7nVJFqoe1nXRzz5eRBPXczYgsPj3HoJnTKkk5ZgKveWufrwBKdGqSJ4nNkiBfpLVe79gyU9mBUy",
  "key23": "1tDXzAcQ8wBJQKCWH6HzSGHNFgo4yBY24rhS77pAxq519BYd566QAkLf2h5XCEoPxupgBb1dxuKmAiBawgRLczU",
  "key24": "2M1x9XduZ8tGw6NY6idHZcS4qGfWb1dSfaZ2hCJqUXCLn3CLSJGpnZAy68XdM5wUY1i4cQcckqG5PJq69JbVdkah",
  "key25": "5abGPcjgX1EDXrH1324zNqq1DPN16hHgaP3Eh4VRgvy8Kf4HPRPzhAVonKaC3HiViZu2gbPT342qzsHNLiWi2fkP",
  "key26": "356AACGpgfyDGpKaMyiiBjb8YGtwBsMzNZq7tAec4yVNwPHy68gxiXFbxp4F58HaeuWXBhLmenBo4oiQYxt6rcWN",
  "key27": "2ie5heb6AA2YAyyEfDPgq4tgsbyKmvmKjtE5FauBQN2NZXJAbC4DmkmHu4PYV911YQC11tUTAsQeNZWjNLpE25iE",
  "key28": "A45XrxjzkBruUJvYnDrY6Tkvpn7aGuy5Y4cng84svb9UGLrL3iRjh9Mn8KXUbfTHStExa6f9F1HeerP3Q37KYap",
  "key29": "3Fqsb7XMd5Mc2wmqkMHVtyuRnJDA5tkJgWAj8sPhWVecyfqEhX1dpzUr1dGrmm56wcmjtzJ4tYUM6FtwqwMxNjZe",
  "key30": "2DLTeu9xqx5QBP5EU7ftYiXkhfreZ6Kb8oc3AUgPzCmJdMoWsbx8CWB2ZNosvniQBaZq7QXDYHVGu6dZubTcjoKX",
  "key31": "2BLsFVvRBdwPb1DifKBXQQDiBmcuuja9Kwzzpdm594J5igUbVLuQycN2sYZfuRiyr6J6E5agT68a72XqcLAKW3x4",
  "key32": "21rFAmCYMmjgnowPxXxLpTT4FeGL3WoQiW3xaVxi8buMUNhK4qhS7eqEPZyJiLRxpZ5XEouw91XmRsix5dYYL9VB",
  "key33": "5KQia2ow6RNKZZVU28yvzr6grRamL4tk2ASriUpZbzRL6cDXCGrYL3ywioo5oWCjAKwRxEpbmMxbVMke4TwFKAZV",
  "key34": "5jVog6bGyhy2GkbtZ2KT2cc1V4nGD9nN6b6zXTqNp9a44LFVZwVvKdMUJpxXTbP9eHDEsvm8GqptDHtFGQupnfJ5",
  "key35": "3jKSQLrFHtebm26f1wWSCXmZ4Niy2x4fYxDLoR3A88egdwT8cMCgVaqmEnwJGoQZY66fmatCZUB9Di3UjpQEEaZ8",
  "key36": "458ttcecFVRzHJzoK72VdJoeAKDiLzC2GUWbTfntgH6JnA7EZT5soyVamkjHoGHN4dzPXdj8uP7nJBGkacYxhmRL",
  "key37": "3JpnoSj7MQjdrZsgjRB8t7u9ZxMUoAZELadphohfRpUipnwzKijq1ust6CTeFVasGHAEhCmeqpVreYR5G96HEa2h",
  "key38": "5t6sJ9m8J9JtPoQKaPfhyxByWV2Pj8SreJMTa6sDyCUbkuQoyABuBHE3iUbcaeBebQqPDQDTeiSRyGuwR3xAANLd",
  "key39": "3cXAY5KbTRnZEPCmqG2LV1LBURasqc9xB2AXfR1ZRxmJ9Lh3EnNRHkW5TnNHmgbkv4XYS3Ge5UayXcD2YZAqsshX",
  "key40": "4GdCwyjJ3c7T31NqmubWMnzvGQ49tpyRFg7AXiMyz5UfByJYwa7R5pAQFoLFSGV8PWV3F356rBaqjz9Ax8KCQ9yj",
  "key41": "2WVtDZy6dNqtaPY3YJk8PpTYK61EEQweZ5jL7qCwTwq6siMAirwh2btNJJbgjzZ2dnUMab8KMoHE67WmSKkZxy2k",
  "key42": "5juww8S7WFM1b3THCEHWf3EAkHqQoLWQGdiyxXv1z8o9FRHEwqqgiSymn9kQrtvBULxxJbgWZnLYv3GNXdUxtrMF",
  "key43": "5jhbdqapACKjtnxzv8q8khZpdjzC5ZNho1D1h5S9g9ASH9rkVRfLXKADBTP3izvTeV9JhCoPw1U6YMrokgtdfFkM",
  "key44": "4Zj99Mbf3eX6tCAG4mzHuJhiVcFsBbmr2X663v3icyXK5urZek5gZDk9Rg6uC3DPDqbLw1cWQxeyMCAeG16gqc7r",
  "key45": "2NfaHkKaUwhp6dE2TruEzkxBhvHrLgGe26yxWgFjwMD48JpSxfyBFcniMR9ndpf9mVXhNYP2Djnf1o9stq4Mkh8t",
  "key46": "3186SuM9a22fZCQ69Tqiot5WyvuMpBwPMdxW3ppzbbd3AmQYgBzBGM3JtWA2SSZbxCdUzT9oMkDJ5PqymiRb2PrY"
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
