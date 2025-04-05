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
    "2VzArbxefps5hCBq4gCUYUZpdFVdLZosCC2x9tEdgP4gtzEEVRiQCPE9upCbEkDSF4peMQM3fP4SQNghy8mZsiQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bVRB6PLJfh3BHoEK3dKdpHNP44bPKE3VBdL4B2onZb8r7YLehh6dGzpDDoMaNSHhpdcpXGJcWX7vXCs7oQxHvWN",
  "key1": "5QBEHFcn91iHaPt8pPi5Ci2Ws98g1pwdtfYqpPZE7sDHigQVqWpZ1wo1koZQLkodv6djpxAHyhw8p8Ngw5u3aJSi",
  "key2": "3SGc9ZGSzwZAvgE2aYcSdEEwtHZverCmr3CCqSRRyrCqqPmWVEtac6GgCYWTei3T77wrkukzKXPfAYLMeJLvZT7L",
  "key3": "5ci9iDKMxFyhfzzdnJpQB2yfBtFUfw5DZqFJ686j6uf1NatgRAJVNfbQcpcr2Mc8USoKXV1SxGBqNturFT13asxA",
  "key4": "2RqqvLXYvXbKeVyurPayM7yiJ8kp8FkbVQmmHMCxHHeuEjW9efPkLzzB7SdDqCK1YZangJxd1obwCXWhTveEqSVV",
  "key5": "4j3uUKK5HntQbveAz1T2uwd6EUoGBtNJD6h89hDnxZ1q1fa6vnqvsjB5UHmMatTPhNxQQR7cBH8PwuhTzYQtJ5jN",
  "key6": "3ML9qbaHJiamP4rCLhGB5NQszNXMactGc1AxbPJMWkzCWqYf1Ttm426huqH5eVBEwVKdQ4GA27QDgvL64Y4kbJBB",
  "key7": "32fyPgmDMHTabWQszmA3kvuNc27i9uZKBgVLfNNdfzaRzU8eaRFbLMwesTvNM237TTCpYwQ3CUS9ofRjaZBNUGff",
  "key8": "2iAS8f7xLeV7Hm4Ti7X6REFYpARTEn4NHs9RKdy87J5CFHRaax59dwXwwpy7Ydf5g9oPcic2pNsCbJUrvN6d8pjR",
  "key9": "65b3iYbcZdnBzwUvabdyufBDmwbikEnyDQwD3MsaGihuU8QH19AfVRorULzEbMHvVMSbqHwWhMoWZkDnHnqCUX8f",
  "key10": "4qsGjXu7PuxxeXmCSThfysUHJs6c49gxmSEsYgTNXvwNYjF32Rtu1Xn18LQmzB5DGjEU91FAchFTqptyrsHtxxLy",
  "key11": "x8tXmovc3c1WhL6m4yH4vScmJrNrGP2wMxZzthHYXa8px9A6XLmQAw6AqpwppuKsc3SDBELQARHpjPzEud4Wn3P",
  "key12": "5Zct8vDHpyUuGSmC7LELszKQ2oaEsMzarhcF29ZCa97DbY2sequK7m1bd4ZHmYZhKvVuwW6ngrbbeyb334EWnCs3",
  "key13": "2pXuLV6PyPqT3cFQwBjeVprY53DqwFKshBSYx2THamJgpyHLrtGirQ1G1A3jEc4yNtoYDp6rvg36wMniquR5sziH",
  "key14": "5QCxXfuqsekBqa6iFRPm9GJUds9FSzSF5uDAUNauqFVSvJ4zk12fNPWSWEFZaW7SMwTrfkCag4ux87ewHRqrcChu",
  "key15": "3yxbZ5yHtSKEMjLfBgTsoyqqmCWiiGpnEU7d6U3z4MjLx5UR94D5jjkJsjGVcwVPJ2SaQfeWsVTXdc1K7Sbb4iuf",
  "key16": "PKRBPwWbtiwHq3Qt6vRc6oe9ribyucRAWpTtCoggunH6kgebetpfU6mNY2ECQYzLuiJHTaNDQmMJTuUKedxYwsy",
  "key17": "643zGHMBoNGYHj2HDHvXUkfmStePD1X5QFxJuQHuZyfsYaeJBH1Q1gVfNDpNkdY7HP1NrGbi7HUqh1WsKQPwCEGN",
  "key18": "WvA6UcPuxQdK8uLKfdNYSWqtfq3r8KwjzrJSyX99xJ8FCmB9WKqf89tZAsczgsekNg8FnBiy88KXtzJha137SBR",
  "key19": "3iGC3CqcziDKNGWZ7AywQNSwiRAfKD9VRaEbAucSZ17Ztf6eNyV3jXc93LFReRfudJVKkGtsBohB9wRQiLGaz7VV",
  "key20": "5pgBrg2y34qzdB4tWW1kiB6hPjMadsu98ezXSgka7QaZMqZhwucHpWxiCcqtmiqh5hahDuVRRiFHqQS9vrv7F7kt",
  "key21": "4KS9MimR4Tpfm77bCM4MbdzZPKuo2LYihFib6bWq1PdvzFtiutjUMaVAAJhwHMVL5e2mRXNnwiRqyRj7he15N3z2",
  "key22": "26UJguR698KiPfZGUVBbPffbwzeq7SkJ3EaV4LwJtzchrkUi8AwE1pajMtT7cb7pFs9qguUjb7AuijR2wcPVoykf",
  "key23": "574yKEuDM5kwHedKG2Nr5wjP5NjztVJMHWeYGpSg2grfzjpSzcMtta3b4xjei2cMkd7TQhouX1EyNMnuZhp7uUxo",
  "key24": "DQapXdcaj7p3Zx9ixjhmZU1FfXSw5B1D7nx9ABETR1igYBaMhnL9nRke9rZ4eUHct8CUDsTHxv7bHZczvo4WPyv",
  "key25": "nYY1KyJCtTYqMHebuCjaTVVg63XCCq9SZGQ41DBmRUkrfUmxJGfZYqgUAh8Fi6vsGSUbLfoD3jeVz6r1qWUmN8n",
  "key26": "3CmQYXV2whgE3sLSt9Bdzr59UqzbsESUVtSfZFwSjvYXBSAVZSm6ToyXFQmT9rBo5pftBydTAv8dT5ix337zYv8x",
  "key27": "5DBdxHvqMdY4N7KAoFF267X9SZXNYFz9E1JFzaafYcVWrA5DsPGdbvaqaRkgGaYgcTdj2TsSKySPhatMtNCZ7vWA",
  "key28": "4p78MFWe2QbpQyzbvumsim3QNkx9q8HDoLHkBiAZtMWBpmXkLqE4SD3XA8jjzcLhtWHcqViJnQCosYZHnNhtHSyf",
  "key29": "65Yg5ux53CAXsoy6LVNvqHd3Wec4oknLytrrm1yJnQAepaTjbviCe26Xs9EFhc2pEu9FkEjLQDoxKVUcLi9Dytou",
  "key30": "79nDKFR8SqPiJXApF6HFK5SSGCTda4QBpVf2EfY9VNEzHq1t2PnehMh5ojU2fiEkfjeWa7yfhYnHrSD5RgASd65",
  "key31": "5tysvb22WgiXHtrtVp7mnN6wi9E7prmu37bVfvjLrokEZ2JFzVRcuDRp6d7w9BMuVtRMk8kQ3g86zW3M9m8M7xLh",
  "key32": "5vCApiLHwLKtYSNeP2s8yEvr9pkweBq767bXHfnRsqy91dJtpg6meGmynk6PykdTph2of7fLJJAh8DqkRXnrvD9k",
  "key33": "37FRcoAHcjBg1xJWnHersy6QAPABJFrPzqUwbeUAT6PoAf5StSKVq7pLA4BhNW6L4bfw9wqgeP2tGvtFeCfKDyjJ",
  "key34": "2YWzpG2Jw9ascVKxCagXXSmhaBmuY6Cb1qwjwGAKdVoeDRhhNoZAmErc9qhYtgHJJkAQnUmutyc4yte6xhjHB6y2",
  "key35": "zX2YRcYYcryFRpcemg389uEYbdA67kt2rRxWJgQoqndvjStqCTEEit4j2DPDEtc8Hp1sFGoNWiQwUdp9rycCQTn",
  "key36": "51zM122cLXogMaC91MaJFN1BJTu37HHNEfavf9M59EAVgBVPdx1SCs9HDDqXLMRs4MR87YnU8XxoGAF8yKoa9J1P",
  "key37": "7EvWpD45Zg9LCd7ESRXE8nVesWtHaJtt8zAJpEZvUfVWFQBtucjBVNehZL1TbQKfkvuYu7NTHxkP2SVaKMUTSvM",
  "key38": "4jLrYCsMCwK7mMocjC5qYZPPPLax4d45sA8BiJkh8PrSqiFDsUAyVobmu5EpCZTsf3h9hTTEyHyKRJeiDqiurcxV",
  "key39": "3wybzKyEdEqhEVfP4ycrtmEXoPNGZ3z586foffpDfJxJF7mtHnvUesjMETakzmbH8n9bbehpNNrPVysN9yqciyrk",
  "key40": "4pugBY64ZY84LhwmDaS45gTGzcKzsqaLzgg3FtpikpTwRdTicrFYsTR8kce2rbc54HF6gwgawNysd5xVF8cQEYhJ",
  "key41": "3xAQhQJV1jppBPKDjBmv58rJvQ2p7GuZ4qjyK7Ps3nX6EDUTzPzo1LhVWjbLGhw78jpCrAbStipnDZqpHrbWAqXU",
  "key42": "XBjCnPVAZg2vtPHiFGxW1KxbSY5JWAX1miqZorMCjX7yRY88QpYDwWapFvStojTauatV9eTEj1BaKXxkArGLjC9",
  "key43": "eLbHhxwNiLSS2ar3vEGb2haBcmz6U2MRf5ZGHeifrGDXJkkkE8Xngy6u1oy9gXw1s5A9atSr3Z69BYPcNhWtXKE",
  "key44": "bZ4nndy4cAnAxdLRzUfe5oe1cCQG8o5wxQmbfCQerq2Mo2c4Y2mj95cZtx5MSnoq6KmgdXVTjtniBj1rgsGZQWt",
  "key45": "r1LztWkFaZbuaAqfxEJx5RqCWCwEn5Vntd6ZJfcm9XEovA1EZpim4e7o7LziiqNZDNHeTJvxBTaxkYeogaPkYwP",
  "key46": "mKm38rhx9vA4Ft1YT9dnQZvtTa344rxgx7MMtFRQrH6mJ1JNLrTgk8VeiYRpS425kU7bBDJeuYkoQvUYL9eJ44K",
  "key47": "Qk9m1sbVRnDJHZAVBsAVNMZ97XkkdLGVfrm9iXNh2eSDVdRriMdALx9XfwXua3iCxc1Teh44TmSjBWrn57wvjvX",
  "key48": "4tTNZPKV5Ga5cCKXc59EL5uzcjez9PjWkSE7FL81cCkyfbC2aB3hNvuV481NciSm1DpTNDTbYYELrFsG35xjAgSt",
  "key49": "2eHYxoXg2pKQfasDUkY46xQfwdK17t9r7bsjmxRP82bK988iZJ1NWo4dxi3Wz8aAEyVjPMW443Acmi1RQRNmBHq6"
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
