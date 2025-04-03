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
    "4qJ7bDGaVCkwxrESsros3GNAVy5ho9SRqmWDM3nY1atYe5h4Q6bY4otrEhiLhm4y2CMVfrrK7RH3ygSJ2wy2gz9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nd9fHd7e5c27ey5ZrvAzy2VVd29KeG1zCrEgmragkXkjCmpPvUubekUj5VLCygYXr6j6KE9RSL2Ca2wVfJPiZtQ",
  "key1": "5zfrkzfaURNqRbDyQUehQEPuKTaV4BQS3itkooB44EU8dxnm4AYeUP2SvU2Q8Pi1zYnKh9E6VLvTJNsdBpQxKSmS",
  "key2": "5K9vUcM3nL2JnXhnxeZBpBf9EbvxN5f3p3Mkc49rkjguffhr9dqE1jKqEibS1MmsNxxu86C2KSoKejzTKscbB5Zp",
  "key3": "4M5scEGGLNNSVxAtjkwbgGs132C5V89fUdgMbKdz57RvpJyoQREc77g2upBRbn2PsJXDftCQHmM9ECJ58UnabDy6",
  "key4": "3fYd1EW28KTcZqp6NVADiBBpA8NHtz6YmTicNsAfLgJbrmYZB8i4hjGRvGsxSm9KZhTgMxWKZjxrm8KMgkwE2L1q",
  "key5": "581LvD8iCGLLjNajH62FwkfMMwUuzXchtFpwdELJzGnSGdDAWBA8Rm2CyAUcTsetco1Dftab7By8aLtHLogCKsQu",
  "key6": "3r7oqUzQkph8fKPw8wz1kXdSakX2QkjV2s2248r6GLU7P27kVPi4wXRqq2Wgkc9wEnJujiD3jSmK5asA1Vw88EfJ",
  "key7": "51GDckkpD4znCkhJDpAZjLoDnzLk7yUfrmfYd5ZTnBRa8BCPmqNTKyM2B7jbti5SNcmgYBaMyLyjVNTFpBj9QyJu",
  "key8": "4LDAYYLUcuRwp2MKL79oCToVd3tAStEnNmvAzd89HxsBJCQxJETnU7rM4qNXHr86VSwYhsr2YXqgmNirx7HKVsDW",
  "key9": "dpr5eG4eRPrLdPMhySoND7eZzbBUDo3Lscyk1Cix17RnJj5U56kdmpw84agYUSVRGFecixGKPMEvZwvhwt62iUz",
  "key10": "YxxXci4FLsBkBjvHRFFRwz4TefjPxccpwChe1Fski5KofaHocEs2KG6NXzSwcvx9nitEZ2rMEm5ecrKtbo8XSQJ",
  "key11": "9UPT87ZUcz4LXPWMAjZNLe9T5FDbnT6rgqGbWyXvSwFRKQbZLCg3WE1EgR4qaHfBXzhcaQx68shrxR3eFmr2Biw",
  "key12": "3WssmEHiYaYmoa9BuJQnwYHP8jZQt3z3VyYQERUJ5tVfKYWWEgD3PrT5FG9xa5g5pYxYBjUNHb8osgtfxumMr1B2",
  "key13": "5WSxE9qj23FjryBfzRibVar2TtRnNfHaUvmhWQNRAm58DtfRRRKNdyvTGuMSk9p17gNVFsEDZEJBSYsFY5WvrH9x",
  "key14": "35r17iq74df4VAChmyPkAe3mA2kvzJy3bAZmnYmuCijR3tN6Ft7pPSFYd5NqotkbEJ6GWwt6YLDHYxWibGicqUUG",
  "key15": "5X5WG7KhfGVXNhSfvvM61QbDkAkHnB7JBKSr1Gfz53HSR4zaCARShMUQwe63cq2dbiMUztFxir53mEJAnnp4KkLD",
  "key16": "47n6ZMiGH1mVXPqzmRBePyfpxPYaPBW8ooh5cCvmhWdpx2exxBVhfxuJGNiGW32Zk2X1U66fiMBMocwmeNmpa8D1",
  "key17": "2iQajFXgg6PzgAa5msDyryEmupA8aRyBA98W8G9Zm7NYnB2t6EpAZsH1CC5am6t6es6uyXXyR6n6A4j2pJr1QkNv",
  "key18": "428EZKfgSsXobP26MsN4qXEUkypRMwTrzbS4zKK42ZKhindYH2YCH2fwuj8cMK3zphkVpUPmBoB6XTxtGpEnPBZ6",
  "key19": "4Yzqz7DdCukaNDwwkt8BY61yS5qwkXcxTj9vn3LyJV1dYpqkJiDLGzhiVTrDMMpRJ6xx15DnLM56yvKeMoHySAJ5",
  "key20": "2oafNAoiwcyyEFyBipHhruVQDzH9ZbM2KybZCGjkmeffzvQ71tZ6UqA18vLsHGQsKw1Vj3JqkJXKNuhKd3Vjf4D",
  "key21": "4zzbMmRVef6DBZ7LVaYxfbstVRteiSVgdGHonno9PZzPvJnLrv1ymvLrMgrAHKakS5yFc5TC11nC4nQ5xMSc3GSP",
  "key22": "YcKAB6zHdhbCgDQcce4NYGmQrskS8tn4Y8mAup7a1FP3KUNQ66XMD6TFnW8fkSj2QXGRwErZoD2fvv2ANb8PQCz",
  "key23": "39uxEwZsv8yzAFHCEKKf6cG2HrLKFYfMdaXBweXeCe3jgz9EePQQjWW53vUqh9pJWBngGHyKzx3sb1xmdLTa9Fkh",
  "key24": "521Su1DD21obHYnGENHwQUVKkcYaRzmyP1gbG9HEFDP4UEhmi4YjfZ4XWdMTtn2WfiWZmwCfj2F3RDEiiJwc3Lh1",
  "key25": "n4GvCNJD6QLdm6h3qGLSBBUBCnqKkf37MKqefc2q8WRFHndv9XJ13Lmk3vhYKBa3Db1z8wL3q3KTfWkDRKENtgT",
  "key26": "4cSz6JoX1cWVkGrrVqBmNzQ2QWsLEdoi6QXugBq2zyrm9Qp3hRmjXyouGEKdcCTiEg5YreAU8BuKgJ5NmZXTpy1b",
  "key27": "4BACmm6NCM7MwfDFCyQEXSRuYSTvALD7c9w5AdZscgFD9teKyotJaVeBSDWWx86iqg4qCFEycjedtmZbvxFXtMV4",
  "key28": "4yGjkxYMZq3Z6LFMCPoAetagEbmth2ZHBabrhAXbERMe1iqRPPbuQjHd8vH71XzLD25KeUHZqvqenjXEUBdtiSeX",
  "key29": "54RaLxtAuSHLwbJdA42By3G211Q1QNigqKuZMs4MpeJcVVDN22RHQucwSuVHBwwTLNSrGciPyNtVEvjgpaHLneKC",
  "key30": "mBMdPdXoXvNcmqkarpn4vNx55kfixnjyhGksYUNchePk7n7BM5WytCvCWBwBZ9mNKCLYRZEryAXNeB9ftDtqTgc",
  "key31": "X964eQRESAheyWGQQtYQmadAWBLVxGHpE853qxnxpc7nDA9PbRYhRpu819Sk3RmM1oWXhQT6PAveU5uqvuxRsiz",
  "key32": "2ChMxcgj85mVZdRr6zJvcZQs3sRTVrbo9tZLB2gjyq9aFA7HafkyQvNuCX8SYXnbWjsvS6CbiKAa6G6QRWcuZKb",
  "key33": "43gohJzeyKBBabMy6hP3mEvNis3Ly6SZKCKW43oPGvP67ys6Y7VthTou7EKce811gUqJ6Qx8k8bAYzttDa1ZDABD",
  "key34": "2JexVgNhgnQbhcfrj8uHtR6DzifY2e6b99TUczZkj5m2XeyaM3HNosR4rQhfxNzrdsCTB4rZ1pGzX3sGsADABuYV",
  "key35": "zaFB9eL8tRdMRkG7BzEZCWio5CmZe9KhcKNKzttekosKzpWKQyt3yiFf4jNZYtz64Ly9VxjzLBfzZMYeDVDJJxb",
  "key36": "B1gdNjDeFgs7fZaHysExpkmXQTMqd6PfvtiDiauxaGB1c4dgbFnomEtHKu7VbTPHwUrryyseh2WGS1se9dsUy35",
  "key37": "iHELMs3BVG6iGf5f6AWgDdu7kQSjddxW8LR1CjJgpBKgRf6RDtXsNjxL7as3p9m2Mk85swmwDB5Ty3jN8BPknQ6",
  "key38": "2DMt7HUA8vHt3NMpREr3N3XH9ixTik3BKvQeJnkk9sS5iAkhLpZAeT1ZRhjQe8AFNUMAKiZ1JCxYYncmg9TKdJ8Q",
  "key39": "3cid5X8JHxtR7X34SSvSzkEy1HARd5B9ZX9MUNyBxNJwNh4AZKsmYgy9KGCqgeLgTUbQNfmRL7y7KUA7GquQb8Nb",
  "key40": "3qt3phdTFXpHRovgwht1gVRYLKqGBfRvg7jvuaqSJyUrzcZmfAE4j8PQCU3icyeh68m6px2ZEbBaVdetvkWbS3my",
  "key41": "4PcLGW4v8FnbVKn7i6JCQzHAekwfn3atH3aypvkzBU5u5YrFaWHzpXpnbzV9bb7da8pugG1s8ZBv8nVcPpRUY1Sm",
  "key42": "rxY6wRe9ABX7YdAHKXYWyYhF7BdsUUbRFnEDYnAHByenQpQnxgPkvxvjuZDdoqAmNBtL2YKrE9epvGs4vyiRrnM",
  "key43": "3ftZqar8ndiefYg3PpP6mB7Djwjr5ko6dLv1dfpg2swbZYvXfabW89HjPyJpygrReiwb7djVdUDNV2gTQpD2wWz8"
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
