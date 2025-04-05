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
    "5W7r4fREDAUtZRFrBfxDe7rFPpCw2ZusuKNnzvGe4vFpmfNd4aTm5vvtwZTjAogcnNZ2kE91HJXaLdg3Pcc67iqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GjiUnFz3mNwWfHw1pLgws9s9QcRog2MnrhHsrd9jibGhFxFo2R3EWqBcThvQhx6CMBVU82bmrL2kxYC45MthGSa",
  "key1": "2K27mEZXocz7MQSvgbPqQzA93YV7YQdSvtAgQMZR2PA4duS2Xjx5Qmbb1ZTwmkMYRf1ciNgsyssvNiQ7yaaZdsKL",
  "key2": "63MdBBcxBWncmRhFNjmm39ZW1zDonU2T4NJKMp3wL8EUiDNKcrDnxJbDimyTeaRSneNh1KUKCNe7pDPEUu3d1CQW",
  "key3": "43CTHuNqFxT5VcSdYxcziLVmXREDJ3mXMSApqK1gc7XvGauXZZmTi8PmNRdpf7rwz4xgJVH8mMY3upLZ587atAnv",
  "key4": "3azhGCReLRkmfmRgoDJbNUVHUHK9wzkhaz8W2FYMPpoGkRebDfHQmZ8wQCafQs3UksMBd5ZZWgQq47BUYkrsC9pX",
  "key5": "2dgTZSv9H9ZMRyDSVYspoWe47awDNHKySHr3cTwdASUx3M3BSjxwKtSMLRHysWhVNCoLUb8ziGhD3oN2oeArurTG",
  "key6": "5Rmmi5GWKgdvBsr6f7FChREyCrHwB9av5ZHxqKfQhDfqBd3jC9CxeBfjzqtYzFeupfmjxsMv9p64igo5vbdRwbiw",
  "key7": "3Q26baDSvasYhSWz3c6LXbGg9Kar1Er2rtEWDP9WhYq67vHypim11DiWuXetaoPHhLg8niSTAW4AdVFHhZg5yUkZ",
  "key8": "5Frx9xcqHLGahYa2L3a4JFstcav7Df9P5yw25i129QVehvnh5by8bggzrCbHSmjDL9BQaHNoTVP7bynWb7pAxjFb",
  "key9": "2CwkrkUnZvURY1j7jjDooxgqzyHyK63fmJUVVZPVxvdT2s8pLkDwmgo1fpmQyPhG8X5mQbjcV2cFtwH2AiRx5gD6",
  "key10": "FN2MnqvwNQ3Pk3tEK89zAyNSERSvMapvTUoAUE7C4rQ46hHiPySuo2GKGFjeLiMPw6G6PpuDrRptqDEJnhN1E68",
  "key11": "4rQX7tRRbQiDYM27piqgALLmsyYKZeW7MRejy9JwrqT6pAm7UBFUSsq3KfF5N5uwFWTuXukEyTJB5M4FrJEZdUHb",
  "key12": "26Zbwngc6joxRzVndjMcGMgSZZREM5rN3Y7KiSiEwvj1cyY2BvYFct8Y66gz6co221T38574T9qAeupwkE6dKoT8",
  "key13": "2VZHZDhtpVG5NxeL5HyGBLgFQitWPi6Ui7kqbfXVkhQ8xTh7BAFfo1eMMxfpb34h4fNkoHnc7RsjRckECsBQFxqK",
  "key14": "5BMoBSgn7DfQTya1Um8YzH4k7PxUhW1CQvxJt1sAPdoocQJp9J8YZMo5KcWgpMoqvLZzUYdp6DCotyVPz4jY9t1T",
  "key15": "tX54yT9FNxehwMxh4u12FdwnUrGSPYKo6ifZ8Xo862LgQr9ZJEARU9QjCx98uMF6ppvDa4tnHkiBACyCJugMXRk",
  "key16": "5qD6Kek2UG2Vzhec1vhgjaJ1fSeQdAN6KDRiiWrd8Tj1EcyfNGZKXHFc4e4P3YqGKsfZ3q32psR3GiNUunLVxt43",
  "key17": "3UPgiJT6zdbWgTNZPcr1s5AE1yJs4Vtso3JxqSGywJDGtLuCLHpHjgZPikANviUts6RcBE3pAhKnu2dVh3TYzw9C",
  "key18": "3s8Lxekp6tx1RHQ4FfmQsnySXRHN2AY8Ryv41FRjF9KpKwz4rjPrxQM8ibRsH2t8rUT3gUopfAKPLa58iFfQduJ2",
  "key19": "4Znub82hrCnn6KYejZh3YowYVv21v5a5fXnrXsU2VRabzzjxTgY8RKr6LDYx6KrvnSdNb6M5Mdpf7wUBPEEq3vQc",
  "key20": "4RCGeUfmgLg6V7yaxq2ZeRr2MfpTrf4oRj6LaiCLcDUP8bNHxFPMhyEjXYxXL38nR7RPav8x71gtV63V75S2GN2K",
  "key21": "2ZZJ9izeqHYYVnkJbYPSKAJhMTQGCe88QxH2poY4kJSKFTN7SLmBfbQHDjye1JCZcMnvKS4tArYKoeRdLwSq9q79",
  "key22": "5Qh5rmKQdqB7TDoZCEMz1t9qCAfbujgps4ATWq2XeAaa8Vckro7g1wd2scEdaV2jA65E7NBQqmXkRJhRqnrRNmPL",
  "key23": "5u1KBNfjVwEGFY3Yoxt3JUC6qi717pE8D1h7qt6wKFrREtn8GyHceUcL9n6SVpRYevPt1nJUZpH6EnMVGN6syaWY",
  "key24": "4ZabuydFJWXMt6e9zyqVg4bzfe91jmTUdXob6RWXtQaWpVTtbq84rEbzYRU6nXnt8VHDqGHUX8LxKk4kQ7GDoNJ3",
  "key25": "4xiaP7WvbAoEGQj8wZwn7ZM8PUZRK8VmLGx6wMSicSyCRcu4gaNZRGcxBHJ5nTFtmPckdiNRqFVRrBxTptXJhey",
  "key26": "222kn1zayS5h97R8hmtiMGdY8TkfFiCeevz5kQSEU1zFqF5mgLAN2FysE5pyE3gNSZg39uxxjJDNrsJjDQU1YPNb",
  "key27": "4SMfXr37XWrkT2aPbTeRHN6Y4NX4HKobXL5n8E5GDMxBMvRANmWQYwF6ot13wSwzWM5dv7skPbGAq6YG6PmEE7Xs",
  "key28": "4jqoeVtd9Bihfq8hc6e1ZgiGqRxDkCYDg1JRA83S2qk57qumuQZRV8ZZgt8SuXbyBw4beX3Ug98myPiJtpe4CEnb",
  "key29": "2S9fDsyGekNLE3ZRNLbzMzkGxzhz7RNGE9bHk6pLcjxJMKUaxJh3KL3Ryc4XuMXVEsyySzyPBCSgYLcV5eoNox3R",
  "key30": "27zu76mroFofdKrGV3Q1J4jCP16DRbCstruSz2FCLsDJD7rw8f5L9R9WZFp3NCpfQ62PM51BymjDRem82qmZw3sX",
  "key31": "3p8kFe18feAc8yvggvy5mVyExmn6qDf4i7JwYrZ4RbzpBc1RtW4F4c9sob6CWrzMHtQH683bcCazzGjVQ4ctbseb",
  "key32": "4371bm3zXdKQYUngrcy7ko3Cm7oUztXNYqqyWNkEMsT2GZPuZXsdWtrTZ8E1TUyGZkzS7kCGn8vgBSgxwa3ANad4",
  "key33": "DxpKBFo52v51rBM8ZEmo1HHHVAKoZAEgxsYJvSr9nXboSXCYv7rszAGTCXbAznCq2MAfRZvVG1pkigQgZiynHmp",
  "key34": "47GHTGgRw3GhvPa4BgJy5GcZmWe2myFWnMGfB8HzQ7UjjGHn6Ty2d8TtM5rqe78s25HpGWmzjmVSx2uJJuTEdNU8",
  "key35": "5pKzGAcQS7AbXzKE6ckWkc6jg3teyqvAsXrtQhHZx3W8ev7gnZodK2a5t9rCYYxhmN3VJsagSwxMGyLYMjDjicFe"
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
