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
    "Y96fbCvUw3DFtsghNeJHyXX1spLBuQ6deG5Jd6sebzPzRxqHP89Rbn4MGytLyPDmkgRAe13icUqMiutEUbcF3WS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aEWtg98AWeQhkxVkkQJNHg2zAUnjWNDRL56rJi2fteAerUrXvX4ekvgKLUE1Vk297jR49wVx95mRU2MrLdJozcq",
  "key1": "4EKefFYEdCCJMYWbKQxLoF9Ch5HmKwQngGRvwr15E3tm3KbWyCTszQDvCTsna1zCWixkXMvgoHbToe4V4tBF54xy",
  "key2": "KpjFx8SXG8475BjjGcNSbH5jtRMDRZ81AxjkzLxBoFHP3CWNjC3RTALqShTReeQb3L2oH6kBj9sXbBYRA6jiera",
  "key3": "2LBcunYYuEuX58A2R7s8VHaJnnWShMKo38w8fZucmGF3jw7r2bqC1WF6medQ1DUexf4UNKCUviLYktrcjydVb2Vo",
  "key4": "tDxCRsM3TYvGqgciEebKiGxK8dk6Af3byUJrppSSCAo2fD1Zgu64dF36fhSz4Z9HWKroCEQUu4T1BbkpPsQvLGA",
  "key5": "8d196SH6RCwkvaeEu83jnWfDoAKCDX3emYdbNgvdDDD4qqwBr54XXsKse7DMpGJMe86eCotembcgCEQyn31KT16",
  "key6": "38LWUULFcQRRpQYgbrpNb35gtYsSfwUDujM4SSMSoj2sdsWdQQ97gCancScqSPVJkeNsK7Z8AJoJaQs7eS6fh82q",
  "key7": "4wP7U3SjozkDKwA3gRCVukHio7hVv4DjDuUmE4uPhnux6BQgHhPwrfw6sYdorxzP1XaAqHb49GLvGqu59v1RpzbW",
  "key8": "3boDjECG8eVpPiVFGLVvoC8XZqGQoUJqsCkfsqX15ybGnwbz19spc9hUGBFoq1bwTX5MgG3FH4aVL6zZCtQYqrqN",
  "key9": "3C2x8t9Yy25k21bMi4cFrfUQgzvasru86BMQzznkdK1rCe6vcAQ2KX9aQa2r21piL2fEhqqAScPfJN5141WZBoXu",
  "key10": "fQEu3RkMoQZJD7TGZLLVWhcqVkF8ujewvPmMreSoeVVafxdHqq5uY1dYWmpJdnfSz9o6tBsbRvYndmwwc2uhqdC",
  "key11": "3TJ7m4GT1ot7udrCj2PNRWpcZkmJjzAVoTEtXqRe9SaArEkEaW8aFoHh3acZ9K4bYH16j1Q6LTqyScoptDLJ7Dos",
  "key12": "5bm5QPSo6fvR2DQhZ5CWYdvJbChyzQkbK8aXhFF76cbzqsNLzCfNYaQCi3tMbQFkEjzpoVp3jV5BcRFZKSUPxBsB",
  "key13": "p8MkVbninYRkeyg92uonhjDLtRMGRv5kjAThdF9tLgRkRhqzmpfkr1J64KDeBVJiFMfKBProzF4TqLHPgtQJgaf",
  "key14": "HrT9idG8YHXi2ife3kSkCB4Ao7dN8v2xCSCjtCE5G9qyecyHUT6bPCrMjrKc9woxJajBKhFkVHarKQ9CKPmgfDR",
  "key15": "3uApuEnCwD8ivrRMD1VZBmGYaCPkT17T3c61Vnx4BkvTBGYyC9Xtcf7DKHc331j8ekyeFQoRWwBDPEDmPy1QNHN3",
  "key16": "2FXhXLfuvwdcAJiq1tryzBE87iQhG6rBtV1SoLwy3bQXu5ZsFWoku1qZBB9DFctTNLehKVw64WzAhVCpy8YoTwRX",
  "key17": "3pEXQz6BDW2QH7XRSNTKNTvdfU7n8J7NfSGDdxbE6kSLrnyMAvYnyJbQHygqUF6xmyVk1N6SY44VAYuv6Sd53u4y",
  "key18": "Ax7jBzK9oamfvQWcLUYkg9QGHp9Tmv9QZ17ftZz2cFJZ8t93jzXTJR7RSRSc1aBFBe58mF2gRizu2yhSVT2uq16",
  "key19": "56UBAM2LzSNSEBe2HWvCzZLxCf3pfBqFcWCftCbpmADdyZKxx3V5mc4Pq29L9uK4RkGvxrbNdiojYBc3vnAWWgv2",
  "key20": "227rdMfheHXfLiuhANTUBmSqoCMp4ivYCcUbmKyt8A2n8CxLcyLHnV7Xdr6bE8d9mANgEWJeKoPqhUJ8qi3KVJjG",
  "key21": "cgraQggGMbeof2jKp6oUGB4LYte48aMQgRFAtKfJ47KSk1wFoz4PRRFtXaF8Vcqbzcp5rdaX7Finzj6eqG43cvn",
  "key22": "2dvRfeMFS8jNaGTsLWT9YJLGrU3CaEZF2CR4rN4zZTZEsDbSsZNr6vWSe8PGTkT27ykHGABrzHTzsWaCKt6J4oNu",
  "key23": "3Snic5geajMrMjoxPQU65fzvwpnVNXM6DKuF8v2MLeWxQSkn25KTd7DUZBKPqKxZQb2avviF2hyNj3mgcxwyNzPj",
  "key24": "2ZMPQoJ77v8rTkmoRmBXJtEgjSmaGdvCRBU5jCGkeerKJiciXdF8Mh3PiiEJ4YNsQqaQrruiSjoEE97UkVNmzB89",
  "key25": "48u5sF9icksxstge5EXFPWvaPHrbLJYrdCZB4449mvUS7sM71Nga8CJF6435DBa8R6kDWpNbnmxV182VUWgGNtbY",
  "key26": "kNczBPUMsBvtir3Qsfx6e484mmAK2mMu48RE5bmUVFb48rEkA8D5mVpfvmTPqSVgGaVyPfedQekVEwp9jiW8Mv2",
  "key27": "2cidtNNRZ7mrSQNRBrHLhMoH6dcVQcNTrzSERefrK5JAwiE9neL2mFzbF3wRwGeLiJ2AojCh14Bqrey1Ht9Y9XiF",
  "key28": "5kZozuSQx3c8RZmm1X6xT6cFScETHGA5Cq9puYXSNVEqUiMk6sgx3APCxspxiqbwvq9AceuutmcW9DrByFLXnXca",
  "key29": "56jKTQTJPpbYUhDrwpoV82oh4JeRSdi7ZHCiEMKTdtHceYVynrmfZPna17gQghuxTLVZsERVvf26xgHfdc2LWhQr",
  "key30": "DBtvzMTJDaFuYgLirqCHBPMQf9Pv9jKABj9gKWfA4uoJLcQaZH6YbVT9WJdiwKNsibkBEmbUJYi7ETDHp1dSdxA",
  "key31": "sJPckwgxX3fLK2d9xsLHqzqf6u6irqHbUmruKyzaEVoKitkSMny6RHoLi3H1RdDJS38RudDdyV8oAssgX5Yb4No"
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
