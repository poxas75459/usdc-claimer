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
    "2jTqAvKkUvgXSaQnV3sPFQysGkYscLd32vm6nGdhy1QVmMf8wwkfq9vCyyeVatUxJ5ubz5ztgWfvYw9Sipywywd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nCpXZ5TfLtqAWuHVwmYdVsK6THaoWUDRes5z9nafUNUbYpjbH2ve1Tmez4AGxZxtPUZwqcoSbomdVU4GJXhwaSV",
  "key1": "5yYVWpvwNfkP5zmoxwo3AKpTnG6k5ikVExvAsoqZVEdVMLZ2kB8Mg142rW1yk6mdkL9bHjRfYxwNH625gWtm2LmZ",
  "key2": "4ThXV6JrnzWpX9Qii5se2z4esFCe3QLPvT3rH62mdZ35RngUgKPuAuh7VnQo6DaTNfUe2iGrn5m84aYSpbVVt15S",
  "key3": "5bD19sTyfXiHu3Ay3U1XtUBYJwgyc1U1F6z3ccKrdtoDUBbAne7cXifjgmQ3dfGuRw9mXN43xnBb7xTd3iGWoGh",
  "key4": "3d3ygFNsTkf7G71aGrAQ6xpWW4Ky5EUkgarpHMBhqevJbQAd9Fvg3VBDXJ3ZrHZKhHkuz1Mhm3uicQF2eRKwYTqa",
  "key5": "HRug5cNrb4azZTEzyuxpVxfkVRCRr1frH9frVuKcfGuA9zvhsKBAjNHxW7qPsxyTmPhs78fE73weGup64cLWcsT",
  "key6": "4QyqHPEd56Je5C2DgeukywR5e3cpm5BagSP3ju54JCY1Zch5t3NeZRUgtHRdCzEy5poFZ1bgsuScr7z5zhy11arT",
  "key7": "4sT6RkqgX1Hor1VaoCfihhzGeUbexTEcjrjFyjpDz9saEfFDKkzNLDjYtfBFnGAeZLbAy65zcYGyT5VyWYGp3kHj",
  "key8": "2LfTMEz85AGAhWmyc1c9cwUs5Nb5TwpVDPYqFTVxkTEB3NgJyeEtbUtMF24yeTk261dZM3vu3w27BvLvkBUsK7XQ",
  "key9": "u3icZmqx4Q6hQkb9v4PZVuKRYEAZYPznsp4CbbJisTfA5x3rQ4eURC4KntVxbo7738FEeBLsPts1BoMgLfmW8jz",
  "key10": "pgGW2EYdjVoVnQXnkG8JYiJZfFXXZspo8vpSqzJfjtE7JXxBLFgPsScfGfdJMUKpp4vkh5mPVHiYRyTD4Fxcjew",
  "key11": "3dxMvUEXfhKCm63w1s9ZEYxvuTTunkt5EuQzbPenmd25Y4n1SAb8SgKTVE2E1PAhHDhQhz1RAj1n1AWEKbjEf72w",
  "key12": "3keicdsjY1tQN117AKC5iQ54rEcQ2K1R73Pmz1wpjW8YgwvsoVmZG5iiDrDk7MJCKb3y9Dm7LErucE1WgVyZREz7",
  "key13": "4Ca5QrVvrQeg31M4gy4hSuJMpovbiS6hpBJ9gnqjsujJGZz4unsqzRAmA3ZWx2mqFXNYNHQ6mA5RJm6eumzTxQrn",
  "key14": "3uVQWoQt7To2Tdz6HsEXQPs3pYcvE4L1vYhuTsgu8zmRjUeFLJxTVcvTNLiPWnkEvSwLf3GYDpy48XYhxfCEPQtR",
  "key15": "5Q9YZGq1bdsqfAeik3SNPBGbaDSknB64FctMu31WsPfJExFAY4LkbArw66s5dhgvrqp4xoZdv47StnYb5JwnsZNX",
  "key16": "2EaoXX8FbF9weXuSz4JAFJqTvUdceVXo5Fyrgs2xt2fTCkrSaFUrJjToEV1t3nhDKVJqRuBTzJmHEJc6YxXnthTf",
  "key17": "2SdwwRvkGgrm4Bi4KPnYkagHdDrCVZvPG6jKVxTY1sGEeT23CY2DngS2TfUm7jdmdeJCJfY7MarBUFrkSmzuZdz9",
  "key18": "4tbtBV5w2zNUqbRjcep6QXMgFsd9J7ggirAkDUp9ef9B6gGGHeQKwL2MPLdjCsTbEw8sqCJDSN6t5JYzBWk1nPKv",
  "key19": "42WhfVUbd5XjtvQqiLGdwssWNosGXU9ZddVYuvU4zPjfdFTuEXqpARuCUVuwGHphMESCttLuNiNRRtn7VN4zH8bz",
  "key20": "SE7JM5QFZqx5FhXaBerNFEsMjSVjazYe7wkEksqkf7jbiZCiZcvHfNCigp8qK4aGrWWvMDxpVTcJG9W6NpUxVSf",
  "key21": "3CSMv96rD6c5V8GFFP261pqJpNmWuyb9VGE2wkxidgABrWuTnphUUpexTCZVFjErF2Wt9eqGQw3LmQPv9QNFoJDh",
  "key22": "oHwCSUUqzN5j6RuJnGLccneTFCEbmhq2jQJwuZvpj632KWxHU91LpRhP5d8oEd12bRv5uBUwnMFX4SDBgfhjHfB",
  "key23": "3WDKPQrMomCfxcdwDuz8Rm9C442DQcdDuqJ2f8kNN17FmMBGKPDYV6UHjpz6n3ZCNc545UZzjugpKs8hw9X4tXMA",
  "key24": "4scVtYn8H3afok9rfQ3GkW4o8QWRV1wXFpNsf4rVq4ZYmPn471HW19rvMxaqzd96VgrBzW71XexAg81uB6R8Ydys",
  "key25": "2VQfAYWxRZYhJvoNdCzi6MHyz5eEGzwwVMPpAwucLEp9JyWu3qp3KfL9P6yGTLws3QAATL2vqLz8UAFc93MG7zPJ",
  "key26": "5pKdXsxh1177jTpFRChCPXwVdjuRWTVKGuAnrgtzTYWLCuaDMKYjXBPp1gvHc7wgBQbBdhSu3pSeNmUDJTtGXaaz",
  "key27": "66AEysMbi1WroHT9Dy5AKoQCFLsPu981B6BD3BHLqWx9EweHpwmw42uEHe2HrSgX83FZaCmS6ukdAL9Ebvda9dRF",
  "key28": "soddBNt3PFCUd5gaY3HASW4cDx6jPYBrPHLw2jaxLf7AbX1YDrqgQ6oZaRdV9vsqtnjuAzJoKX2ohH2mk45tZCd",
  "key29": "4dA88ie6b3nUBiRy7g2UR9aJUgDEdGV76FuDUeTsnqjvLmf6qNpknaWruJnwbyY2Yy5MKNQj7YQ8Y7MAzZzs24nd",
  "key30": "2tb8w7HT6KtaqQbNggUr1XRwHFaQs4KJvYZ88py22gQ12m7FT7XpBh66pKSmwVPBm8uXtoKSWUQqhAhHzWErwT9A",
  "key31": "5d9PgArsVex7gst3TocDpk3uM1c64H2siwQWfR9YtQ282oMUs69t3vgQNG917CvjjTu8CcPhKzoZGcRtpLVfAzBF",
  "key32": "4hokKo5VwdJ4SHw7JiEGDDD4UKniN7KEuafnpfYQ7sQUjbdSvoprsXYLykPq4xtWa6eDF8aMCK69AyxMyz1eczzM",
  "key33": "3L8FFh2irFW79tj5ML15w6GwVExjwKsi8f9s78djmqW6H95WBiqoSU3Dye6VfTspjgEkrjNumUSjJvVdLPrVJbdG",
  "key34": "2sFZBbvhrozbh1yaqo7K3gMXnrAFm58mBcgZf8Ng7R7U4ft8ZD3Q9PAM6Sw2udrRtAidwRXnBLdmoHRJ3Xda6dNh",
  "key35": "4fjiYLu9CH7P8t4hx4goAzc587U2rxJTNrrWoSYdZ32Dw5jLBV9GXgqxZzwzi5GAEqnJQwoLMyKGntLACR6RK7qd",
  "key36": "66Vnne1mtuunXDUkW4VfSzyRrmHB2PptS4mHfs1Wmiu4zFPsfhpHcmKeML5g8CxEpKg6fDYN4QFVDfTTAAL979Hk",
  "key37": "3gnCHD2vBnVV6G1orxseGTGL7VpbvVjGUR1QmtwaNLxhKTc3aTU3bfypB3Vu1EAsJTePBzsvS4Ws4L58ZyzDmKfy"
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
