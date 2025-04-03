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
    "3NwRt4XTWkMLSAECWMZi7Lsy6dm72HRskhKsqSthAuHdwaRn6zqrCoQpc3weKzDPRiCf2eAFHE3aaC1ckZjb3gDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z61herHdiQ9kmFYqUqxHtV2oLXZ3tQW4tPoU5zfnb4HY7EVn7GMA13NPuL3zBs5aMDxvwscTmy9u5wmfzRKuLNZ",
  "key1": "qkMXW3KrkAX1YGb4W4D59isSns6URbHpeTtbVRJAEGxt9JxmJPNoDigCpoKVxvHz6BMBbpN81bvAnKL5JdYzaU3",
  "key2": "5XRfhKSQ3zW2yxvxdvHTsZPTS29FpiDesGPY5UbwTbfcUc4Pdr7WDfVMc8fqVEgE9xPURHq8CWgwsMgfpECAVSsb",
  "key3": "5SwoqtZgKGPfZt6RLpGckCzbHcsaErkfh64JDkv68ACevncCcv6AYETrsrUmuzscescK9MFdWvA2BxMjGH49p9S2",
  "key4": "4Ck3KfnmcrjbSrbqE5CzvbeD5w4igZKXpaeYzPkVgyEwJBmUPEAKwLz8A1ZR2u5zp3zicsCQaVCvAfGT6Dpfce2Z",
  "key5": "5bkTUCwFWF5b9KDz2LcPddTmbCKhWFrHhTRkqCQNMb7N5gEV4gQSy2K6THE9Bfr8NYdNgP6taighUPGfYtXs6axW",
  "key6": "ixJTRrznqmFDAb7fxjfwGpJbB8W5acFb9k1DBjRDmSiBeKGTrvTcRh2GzrEG8gV7Bamz4JrM11pgST16gihdyge",
  "key7": "mQ4oNDfDpxWwXu1npnrXH4MkBnPF8qs3fgPNwSfzvJQaU7UmLzJp9qyGuYwDEn1CJmfUYhbA2e3hbgxT7VaCimB",
  "key8": "4TwZTyXm5jeKCg7nit3jQXhDdizbcKG3gcZMdJLqxCiWERPHTqniyTZ4UB7GfXkFyN9Jj6D2PJxp2t2zkYpxsvDy",
  "key9": "5zeC3pC2gBafE75CnBfF9pntRDYyFhcAWZpsZVaLSNu9ADw88SAC7jm8ZjjZPtjTboxTWEcQtFM6VzSykKNWzkuy",
  "key10": "HMVpop2oUzwYY2pf4bEJhUEAjp8xPH9LVd4YsSpBmD5tPQRhxY4Pp4fLBddAyQwL37xyffPr4bxDUpG9NqoxgiQ",
  "key11": "5SQiWtAdUG8kfaL45fGEPkdTAJD2Uu7n7iSqHRAsxM3BDkt1rTsQGuXaZDixwgs78PpfEtHyuxzWyuLtiE6rrUHF",
  "key12": "5p6TyUYyV2M3Ja2KDYtrMb1TLQP4bkrTpXi57uFCQRncj1DtUARx7DgKuc7gA9j1pkgX84BxTBoxXGutfzPWXXhe",
  "key13": "2Rt5r2LEUnvWfWgryqUwF6Rk7f7KrPAFZMzqBz4L8VExkN4Cgs4CumBnV2EbEqkXvRS2UTReSzsk6caa79f9W4dG",
  "key14": "4jeJae2fBHLB4hBf23xpUUTe52VTuEZTf8nPTbB1TF6awFuyCTs6kPWBvTRgQCdjQhdJ7jSda6Zs6a4qGL4gbw9V",
  "key15": "2ehQcZ434er8zYZdufrj6nBwx5J6T5sDYY563YBXPsNue7VL7hXM4YC29AHDUs6QCcmnQY97dWzPgoNs1ZxoQixm",
  "key16": "rBNQ1q9qn3Q74musRmMjHBni81hKzCm8X4QMqjemJt1at8HkZmat6zjP5D7GYqF9ZZjCS3TuAaBtZYLZmPuHvVR",
  "key17": "4fbBBF3qe6nNMadrxnL42vXMm3QL8MvxJut71sF3Aymxmg7xxxeDcVi39eDW7Uz4SbtZTu7mYNJXnE94bhReRNEZ",
  "key18": "5peGkaUTLpk3MDf2inxxZVioi5jZVSZ2Lxk585PQEEAsCcwoAFzYwJFFDDMFo3SgmNrWBNj5etTDiLoqi8E7ASch",
  "key19": "3kTN2XtgqxbdCBKwuXT5vtp2f7kykdkDtViD6QDYLJSJUK1xsPTkK4ptNDd2Y3epii2tdfASy1YeycAHjoYTuKdc",
  "key20": "UV1TiScbA1mKDqpqcCvzCNKsyB97M9BeRpYi3QEKswgyMv2t2ZiAGjcuNsizBKc5QnuT5Xttwe4S3WRqCFePJHD",
  "key21": "3meuWjnto8StsnyXZCB5oykbfm6zVqVFLPFzAeCwqF2gjevrLccFUKaJHJeP7hsHScjta97dMMReP7R4sYfV6V26",
  "key22": "2bBLBgdeRPieBiFX6sd6tLorhWxaD2z4WfC4DX2RKdYbnafjQPieDBw38ZEMtLTHBAZQquhtFBYMc3EwxZgFgqqJ",
  "key23": "rqEti24kSDNGmiRXFnHtiycAqwFPYaYPEYymeyVot9rysxxhMS7t8EyaBV2nYBwttGCYwbVAjUBKRf6TtZ1Nxq2",
  "key24": "FCziADNtbz7pZWymbxdrrLWTdYaNVcZdeM8UJU2kiJdtuzTksV7kQkiJ9mAp1AHTfRaVatYNNCHD9ApFcY36GhN",
  "key25": "LHw8PLcztEH1vm7XG3vj7V7t2a8j4CiBj6wESEhxQb74f53e2uQrD1oNg72Ywrr2jgwPFGNjpzHCxYmrQpNqyvi",
  "key26": "36sEfgvec9dEDrTx2c2TwUXuNuQPoEEY5gTMi9kpSqLzKGjf6BGWaiRiSseBqg9ZLJr26RajdoZZfupEdZ5aVfWj",
  "key27": "5dP2D5QJrrpyXperzmWmR75gs95qZqxiZ3ga4iYVcvMh6Vym3b75gGQMfLkVUcDKARsfDs7fhQ1eZnSHumfhgt9A",
  "key28": "3WWjqw7prp2T5KiTj8iaisDRt513tVxSj8PJrX5drQSTP1ret5ZQFSzsACPa3TZxRHbixCC9y9TiHYPhSgKN7zpf",
  "key29": "5deHnVWWC1339iaCfcqzrsc8PR85rLWDZbFsrUEYgWpbQGBZaXPvhzcTsetU4tWLWhKWUs2YwASL2DrPhjJefGq9",
  "key30": "3cfaRUhvUQLhKt1uCcrHyW2ohoTcUKBtADCoFqFPvnfscstNjNPKGnTGLYRGNpVoJoDrKUaWrV4QccpB1NedzEvJ",
  "key31": "TCrqKdG4JGsy65h8ijQju1ftX1nqtwwWuWGuHyu77rdEyiEeJqtFgMcnvJLwL6h7UrbkoKsEjkzDA1sLBsmsRnn",
  "key32": "mSh1oohbX4bL4wQGUF7GtHcYsQ1dVh2PEeQ1F4PSSJ6HFD7XYhjVDXLgGxakbAz4MaZzoiXCcXAh85qA9PpLs72",
  "key33": "2FWpUyv3VFQRMHjnv87taXEkByavRsZdQLxXSLytaQc879z7GWnZPkhVUCyj8Bx4CZqvtx8LnaqCHB2QrW58jsST",
  "key34": "41ki5WoFsjXXf1Hd7yS4eZW5TXtdDxoNwWHvLsQYi9QyuYtiyJ5RDkHV7pxpPmzFCz6Lid9A7HRLrfFMoLDn7W49",
  "key35": "3BKV9FFhZG4kkxp4QhKjDiJc6wvjoG8bXzrv613uXsFF54Tbkhhot1Jy9rhrBDpfMHQMzwDG5uMFvPHYp2tVzzh6",
  "key36": "38r8kGXiLXoqXPzxjMwtoMmrS5RG1NTkMFcaVjf2ZaF4Jk9kNWy3zDpbyz7BGvF2uAt2huhSbHtA2hfY7sadVxYG"
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
