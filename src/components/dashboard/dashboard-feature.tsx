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
    "2BqbzgyPaAn6Qr15b1Mdv9ht7EDq4zJLf2Xnt8RsrQjiteSfuPAH93PKN6YJ2HLSNVr52AribCDWKtm5ct6BFWci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y5T4GySb41BpwDxUfxeVu8aYZsQhVNrTMQqXYq7J5Dpe98MnMXZcVVrUNYdfvaaBvhD4xisx5X8XewJabb9sAQT",
  "key1": "4zWWjAiN3cD1bvstcHNfVoM4APPBQvTGUQsSwfNZzJVBHPKSp8VtvbAQwcKxzj2zGmkugnVwUCH3Z2jQT6sSSZqM",
  "key2": "2NA6oD88bBo7CXdBYozSYwBvLV68PNdNRBDhwtUdiForZs1R2LsAxy3UqLa68q3D1fZNMaCctnniG8N8kU7m1RUJ",
  "key3": "aVCG7DTRtLyQLXNaTky6ZBuNHNrXqb6zJ8gtByqqSKNeF6o32r1NBnsVCfN4tVnTnH6SfnKWUwkPCLga24gayhJ",
  "key4": "2NKfwKho8MRzJnEkgDvw9WwZ1M2LSKBqcXzEKf9atDC3ksuZWiMujyVMFNpiSQSgpSvFqUe9t2qkmRW35HdgXXw9",
  "key5": "k95DtGHFyq5E6YTi3WjciTidiWTSuxBPzidYq1XLLB1kuvAuFVu6au67tN7SP37BLmbHnDcrbnrR9HwYQuya1JD",
  "key6": "5AriYFM2poUiJiWVFe7LAxF3JHBBPUbXZJHeAzTP5zX7L2iA5Guo2vaNcmjDURr1uYXRH5QBaR1Jpi1J4HFKUCEM",
  "key7": "5JkFgySZcqKVbjg7pbfPP8mwpLtNU9H1DTEkXxCWxbzDUAcPVgbQghaGFCbL9DiWSb2oY6w3FJrk5FN3vemNU1eM",
  "key8": "3APzLuQTRBhpkQ6vE2VY3dm2RUDngS8CG7KXZefe7Ksh7oE8QRAtyuQaAWDqpwmUuWzDzkiDTHoieMY5PjanfvD4",
  "key9": "4ztUYRiuqXAj9KEYtdrpU9WESgQHpwzfsXLDHkfsZXAPXwTPzRJkAF7n6jFywZXnsYWEgtondrkqaY1zzYtzavGk",
  "key10": "BLE77QK2E5bC3ccLxTysYPG7GpqTchkynYAQKzMEjVkuPjnd61Fj6nShEqFZ2p8nW67Zh7KMHGdAJsX1kBgkcFj",
  "key11": "2fi5g1MT5AJao97FJ4fLAWfWKg9M6ToBRjaqsZEowfxKVjSTm37pw9xmSntWie9S85Zc9DmWuasU8ZRDBKEGeiE2",
  "key12": "5mvcipE6jcHSq2raxqQZ7JVW3z22uFVp8bxVR9CjPw8K6ZFxCjPaAr25Gx4W9wjSJi66ZZ6ucRwpEwKXr3dV3XWF",
  "key13": "3T6h378WCyFFWiJ4wRuKKGYUrLQeQSAuxazo3YgKrruqRefjwdsQtQ6bt5XwDqK1uQFN291DduSUuHPbGuFdPmrG",
  "key14": "3ZckH9WrU4Cvkncvb4v3WJ3c18QUu5ksQoejShKMDKbytDHY9DSS73C9hY1vdvTphwa8Pj4QwQj1dp1wUPBpaps5",
  "key15": "3x992Cx1dPj1Y38uoNvtd3BzLpr3egDMUC7tykiP6DxQxMfbEdfQaZ5mZ1DnX1ypciZ64C91JYd7gHig542Q8GP3",
  "key16": "63Dn64AxsVV1rcpmt59B9CQyu3buko5nwjufDJ8m5sCp2mHV5692PqaXGMAmjiNgN96dT9iyozfPCh74VVop5T8",
  "key17": "3uoGQr3Hof3a83kYV2MxhkyqbE6n2Ffw3iUBABcptKQeixutA8ikFiP2eWWGkntqPPf4f59Qz3dcHaQRet6PrBhq",
  "key18": "5z3dfaBPsFPXMvMyq9m4VVpjTYczGHbFGvPtuS8cvXS6w7Dpgo3YWMqbJ36XuHtVQguCDDnPcgGU6yj4PzpgvSPh",
  "key19": "2dRbXYGcXmJLZhnqkUcvWcuY1x3HgB4ifsUhYMPam91muhwspKL2BW4CY8cgr2YtDZZwAgii9kfcdDAjnCt87vhq",
  "key20": "5vFNjomXJU91iqTxpw85GEbstG48pX1VX719p1oxFBhwkVeFVvkzDvWihBppKaD1PCe3E9oVWaeaqrWQL7K3Rajx",
  "key21": "3P6rNAmQuFtUqV5Av9ynVvsQG2sjNzTTJxnzzQ1bk4JBJobwasBt5DaMJ66jVqu4eATjWwnPY7p3utz7KbFDJKq8",
  "key22": "4DNVYdRfeSdyJJYSV3mtapYHpVeRgvDhHXyFFhE5JD1G4Ma4AXbwSB6ZErA2Qu8Z337Vpi5vXdYp8p2kKnGLg3HQ",
  "key23": "3J3TErhbzfbu23nVs2CRubePteznmoZcy6AXAyP7LHUKi9W5VByWq7gMdf51vgCtYreVWuUV2v4jRMhGWD5jEYk8",
  "key24": "2ThepHdTkasywQrrgmF1Ew77NFY4oMetnL4rSygpt9aw59GVYde5mcZU3dKnDEs9boh54z6wC3Qmm1FAEEXF2fG",
  "key25": "phWXB6ZrKximH4whT1fPzs4HxUcsp2SbeCh5UtWfd8DbKHKSW6HcbDGELkYsTv7AnY232naQWVpGBfH6wWpac2u",
  "key26": "5vwR7JD8mGPLmTp9gzmqA3qH9196xXe5fd7sx4W44P1K9toB7Md8Dw2VcEcfqyXsuGdBZ1CVt5qmatQ2BZbxXNzR",
  "key27": "3B2HbmgZunSxVh2xNy5tDJ1P9EuYS7f9ycqVUZ6mPEa5bTGzjRrMtLiLM4xT9smx2mP9WDbQW9sxuYjLtfDUKJUs",
  "key28": "5ke79ed85U2hsPsgCdU1LEP394SgHhH5paWjSUmuGomiCHN2xHxMDS9CBCFs1XwC86SPjuS5FfSVB7T56MbXF9D6",
  "key29": "5KZZN4BpQsPTYtLELY87BDiceuMnUo1ynNiS3kZV2PKvbn8ShHnhd2DH1L2JJEempnixdC668Rtn3nHWSLgJcfpF",
  "key30": "2qSJge2M4R9FkSWUjZGGnByQRtnCu4jHFfKTo3KJzQwmY7GSAd7QvpJmAEXF7cCLx1TmCQAcb39NBHcfiMzYVZxX",
  "key31": "4872q7GU85cq78SEKkr6F2bMqcc8o2mJUK4mgoxaBkaqeqTC4mABH7umXGU3fyDwYgE5nZrpB9rHhSnVYNDRuYbX",
  "key32": "2HPha4hyms1v1YeGuzym6EcukBeQkQE4jHKKDcevFkmfAMmmod9sk7vg3qrV8nBJ4s9FxMXiLYa1oNVp3bYU13Dz",
  "key33": "2PvdHJvBZR2X4PCP3aeZH9nWhRF245Y7J87mCKJzpkHm7SQFMd8we9xNR8xoDUTiH2S32XeDeXi4keZvpiu6vGNW",
  "key34": "WwXKF8xRccrZZrkpocyKv9fE3L9sT6JWUamEyKirUoAfcggDFtY41Qnid7eTwxh7yd7TsGirrWWxZv5nbkNMJhC",
  "key35": "4nLwTD6hK7p3R7LBh9xGqGnj8ySzJ6iDWa9gtC5dKGttardhssaE2PidNmuDLqTrcTTMpPEzArAGfDAbHAjHJub",
  "key36": "26aJrPwQ7mZo4BNqCLQqC891cgvuv4fx9vjmtkk65NjPfx4uTFgqc2ztasNfNRC7Fh1b9fM8YGtcfbqV1EQNN8rb",
  "key37": "3qSM9AtdVRqvwgk7t1ShkwRDNahy7x1DBwXV83dqfoJaxe14hwbT6MYxBRBGuGGJZexgFJrBEuZ5Cxeih5pdz79k",
  "key38": "3Nrbrzv5uDkUL5Sx9YSrNG62BJGGdyregPWe4KhEQiNhmD4gsaAptCHarvEbX89CZNAt7xY93CidtTFjjzx4Hfgs",
  "key39": "576AZgScXAMS1VuFKzspbuuqMCrsxLcujmaQgXPGrCfufCCPEaCmFpjnD22RgR54bcw8pfaf4bGXMfXUNRx52pTD",
  "key40": "3867649r4g7GwpdMMyfSyZkv5rSFcspZWQ9yFHSMBkjqX9AdVJfDh2xNpe9cEYZcuXqupHYZjQM4BC8CSzuW1a6T",
  "key41": "3Po65ECfpT8TRrd3MEPmG25deCzdX89YKbhMrmJUqN2Z2vY43rgMhHoRKSxsvrUiZHsnpYp4pch3LG3CbJiBedPT"
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
