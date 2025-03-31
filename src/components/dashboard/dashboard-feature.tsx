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
    "2aVqWchCdNRLwNENWsUoZcHRpcKsJkJrtupeuK16xsj3EBzYyo1Dp6uizGghPMFv6kDtDdAWzX9wZqiYgTNyWoRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PmPEwhGr9TyQhNmocVT1c6fXks57Qhig9CZfzdoikNFTtd7BxTyo2sCZFtJr9BMSErUMdNVE2XiySE3iUUyNKbw",
  "key1": "4uGoXurHxymWA6irTRpUQzf8Hegxdofh2vko5QNa5HjnNUosxrS4LcZiHvbFcUHcbP6HFzRKXQQCZXYcucNMbEsn",
  "key2": "5L2k8U1MpM8hYBMjc5yDbmyphhs2ZkcRG9ebAKtt8egAJggocRtVRRLt4d8pkWRmFQBZ3KKYSqrNKLNQFc68Titn",
  "key3": "25SNeibfaoBKKjEbnF4cjKVha23YxYk51ijeK5KWLnXNmNAjHEunGdxej2Y8hqZbPLhXqCvz3d2y8aqMvyR5DKww",
  "key4": "ffSvvrc3wBnm8ZNXKrVxbeq6Tw8eVvMLuQPkMZktHnch1hPgSBkX63WU9GBAYi16J2xjeiTyaw86gybtbUniubh",
  "key5": "tnMSPzNyuHaVsECfBhpMBiwxMrfbqobsHyfHxeQooYLELmAp8wK24LQnDmQmhsGp28o12MTLkKyu8bGjZifpmYp",
  "key6": "33c9eYh6dDzBMeSPKpsUNWhhcBvuQ8TdhLcukRCAZcR9ESfLpRmL2sUCn9aJWWQUhY64RbFgruUgTDjX3PcYQi8s",
  "key7": "5MCopeq3iMR8F1inSJNqYtEEVsdpswNijzkDizKmuPpNDYV23BVwyMyn42UZixAc4hf6SviMUuSCF6UJ2EhQScru",
  "key8": "4NWau3z1DD5qGQhARea4cCqPjVEHb8phUAtvz4gKS53swb8C6ehD7V79XG3KJtYN1mDief6Y4TW44b9zgL31wuUt",
  "key9": "5nnujcNwvXyPu7BnYN8pGc4hTfJUt6GVuK189CSjNYfnRUz7WF9TJ6hYV4rXPJ5BkWSjJtB6S6GUz4SPtEQDan52",
  "key10": "3A4tb2xF3Vuy1wt5xxze9r9bvpJWADKaUXEqxJHeMxFN92hTpggMr2E6bzx1fhL7dtVR5d7CewMM48RcBbUhuvmw",
  "key11": "2hw8TmKZyFqk8CvjjCyEjTemFA84vpzU1B7jcyx9GAFf7A7SCqkX1WMGq6ESk8zfqNCeotD88QpFcQmaJrvKdgy4",
  "key12": "5anN17s1piq5DTsBa6aH2wgQxnYjLzWX1UEgifUJ84EzLcTv2J7QddZyoMZYgKZVBK36VWLLPuo8rPXsr661DpC9",
  "key13": "e9gtCfWV58MwMGTZMZoAyMY4YrSoA8C3rioULoEtjBb7hDatAUdywTuVd7v5kYiYy7cAz9rUd6daMxnxmrZNWmb",
  "key14": "46YmAaixE8zutVKZnN39MNwi4GnZWRVCEJUrdnQgmjZa5MQUkoS5qeA5rqpVwHFMCmVVEiPEkRBEKbVA4rB9o5FM",
  "key15": "4AraSAuySX7EyJd6vKv4t5FLgB6CtGqRNRCQVwZx8HYQHz74E6J3NVDL2bKX7eJX9PZq9A3EwCBrPHyJ7xfadRZ1",
  "key16": "63a1h1UxEQjKZuZMfL5meavuKzqHhNKriFoZQzYbqTCf9ZsoCoodwnuB9pDY7rov1dJnXhJd12SHWrfis3YxSDuS",
  "key17": "3xekveX4CKCFYgoW9keco6gNrp4LmU4fr3tmVporoQB3Hy74xMH53cs66LFTGFayQM7fWQuyV1eFpvyKZTtooq7o",
  "key18": "3vAw5Pr7S7nxsnH4KafzXbewoGRq5kRJ5tZqkMNi4ivtm4fLHSm7ACwLzpoU3VDMemshc8wetwrxznUy58uxCEhC",
  "key19": "3zMsqTXdLxQTS2dNmyTMJPfU6GrhinGQQyjfaGTFYWeQzQNX5WJQXGZCVYbBw8iUb7EKEUvRUTg4HApZpiYiTcjU",
  "key20": "5mfwj66mXfCq1ucAdRxf2TKqbfrTFUNugUjZPDTDb16DuHXNUXGVcB2hBdx4yRRszzkwdtFR1dhw6g3YaP8CfFXA",
  "key21": "AXNWvdRwmVXMn8JjBhnM1Dz4qyLXUir65teciekSkSy3rTcGPSTnom61MGUU8reQcgGTcXU35Sh2spbdobdMDpo",
  "key22": "GjSdBz79w4rGnSZnFcS2Y7TD9y64jcXvWSB6tegoq92H8Foa7pqAfqYt1SLnfyCFJ7oPp4ua69jNNJRDYrutvzj",
  "key23": "hwZyTJ2qTH92yR12Rqs9PK9VimFdYHzguwxomCV3hRDpnqJN98DWWeWhKKNr1xEFRwaP4xQVENHw8tGdoPi1iTV",
  "key24": "2QTQLFLXRcsQcfpN9vQoFwaiqZJ9TfthsQGATGGzLD68f5KeDPboKrqAmUiVEX53ZmmFAZQQT8ev6bnPNXnVNYzW",
  "key25": "3Rz2SoS5RDp9zvTLWFqxHydZBMoZ78pwjdGg3iRDtNCKrFhPW8Q1J68r5wqkK4C2qALFtGP7h43GK5HYKGoT3P8g",
  "key26": "2wnuEuv65TvCuD37Zqwtyd2RVLJVXryzM3aMmPVAh342puRdW41E4HdJYwU5XUC1iHJtf58P2PpndgbwnPT3vVZ3",
  "key27": "Z1oJyHzL8NRJcytjSeE7eS1ueHjVSaTfqDGqbTULrCkkY5KJsmampDTVGPGAnGjYnzzcw1Rt4qCzQ5Q8pg3xqw7",
  "key28": "5eerDwxweeR8rHTRL1mcrGrq6LpG5BCJKcKf1trcmVEP33jGP2h2i8GW5uxZpjFJDp7KwougfufJ3bV1sszQ8K7b",
  "key29": "3ajXF2kF6qnnaZSreC52gk4CK7mfAVjsZGWnz4QHBoTpDcYEF2NgddFcF7C99sCSwhvoWTCKANW1fLcfcDo6qmoz",
  "key30": "4Uagyeqcr1byeUVkfd8a7ReLxE23MGie5XvWZrQhs5XtQ4YxqNmsCH3PcuKZXht4B3DgHVdPivbCrxAq4kGVwh1N",
  "key31": "siad997xoFeN8f3jVTFtFBjduFH2sa9tqVEXGLvoMd54MdHi48wBLCNqJcynwibZhntoHJYnojBEX5ea4f3Wf34",
  "key32": "5YpBm5LRdPLtJUoeTEwJbMAkmFAQUob6RvRSZtNo6VCKs9mHjA4LCLnLARSFfVXDBKhkFRGyMheg2stRC4zPv29C",
  "key33": "49SCKSX9xWNc6SGngGD56uVYWBJG6QM4nvz8xtgUJuBKseoiVKnAzTy8odxobuaXJbMgG3u65Dn4Ru7twxjP8HMV",
  "key34": "3dxiJLuoKqixFefVxE8ismh9fLED1tXNMVALyEjGSqNGMz6HJpNiRBkQqMeng69XEwaVnVtuUV3Qu97HxJBsCpuw",
  "key35": "4gCdchB1MCgxkhLnYm3GRZ8F8pgDdCRK4aAKGkGiB4JawqTBSMVkkbhwUUXVG9Rg4Hr1ChKKgxGsmoSVraa8foYy",
  "key36": "2C5aiCqdifsR6NA1KecUBPvvGtoe8ALxSNH3EP4Bt1H8G3YV5urVKerWkaPiTSUZDGBXpVYXej9xeAzkeMJmLYCE",
  "key37": "3oNVJqvaGVwJccKDEa6EYML4sQnEjesVFgnytTobnr7bUhGA5VnbkiDuMb7tR696QcY3Mbw3hK5hoSi8Wo2vmtBp",
  "key38": "29Sx5GJFaUHaXpgExYD6mSNpw1hNsLYjUZz8NimB9WLing78zFkN1HxvkwD9emDX8M2sgbGX8hNTk18B2TPs4H26",
  "key39": "44HRtC3CGzXEjq1sBuL4i9baod4sPtLvjMAqQchkXHGMsSJ8LmcneDnT2b2kwLrUyF4M3Nzc57YHtsCWpb7s1FbB",
  "key40": "3NTgJLg7MnwmLSi7DbsMD861f8gyQPABZMAzUQD1cfTQCbhfHcxDtTNCwoK89yd9kbrUkhPYpuxfJqYoLL5BAoD4",
  "key41": "5QcxyjmmgypJ4RUC9bMxxJzw8rqZcvSdmiyx1KymJTqUPAbATmfCM8XrZe1m7V3xVM14mf5vUcJtTByQpGgBQeno",
  "key42": "4oqaUvJbEQFg2y9cX8ZfTPuFtezG1TrHNhDdeVEobA5NYCbnM7FuwxntY1S8A7U1dWe9XjB2KbSdB1WGtSm2egs3",
  "key43": "o36n4noAfiwk69vhQhegGPjqhHL3ePsFDVErDRaZSLUE67vCdc8dzAKuwG7D9foYPrrBisdjrMeMqaFR98XeUbA",
  "key44": "5fNzS3YpiFmiMU4G4J1cV7yVoohiZJwph2JmzaLehDab76RMneEycWEfrZqEEBT7YdhDNqo7LyGp3viswAV5eE1M",
  "key45": "2gHGtMe8XDF9YmyGMdnZtJHW79jG5VJPWnRNekuh9aeB2WBzFnYeuqNV1ZAuq2onKxhwesdSHHjg7CfrYb9aN8sN",
  "key46": "Yr2iEQmYLjpQw3rfNHm88dxUZBaHYRZZVbJzkuvWPZiUJyGechUWWy3GQ5mqD7rabxpe1iYNKY1bcMzpRMCN6BE",
  "key47": "31QeYboieouTQXwPkHDT9qAM5MFAkC6RNWsJfxYAD7ByppL1CDM4UzS6ELvMu7dPmSmVm5Xfa7x94Ee7oGttFrtV"
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
