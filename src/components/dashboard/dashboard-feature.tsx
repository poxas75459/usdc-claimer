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
    "Zf42AoZDKA2SS27bKuLJAGpK7vvECV8H6x5EAKvd1KCZn7zDzoLaHQjWGTAREeCa87HfSRkQt954Utbcxt4HnQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ajk9eBmCoLUjfvuVJEApDQotwme3dr7agXkCFZKCSbncc21uVSXK3e3YtZXBhrj2HCZNeJmnFNsk8GGgPVeU3BX",
  "key1": "4rceyaNwrB56WrzHof4YYqhu83qv2UqqoiPgADQwgXfe5G5c3vVd5hx5giCXJGJueHd53tfZusvNTRsDFuc5i1AN",
  "key2": "5nPNHmDv9K2tB4fqF3ZrWytCQYJXFJEZNJvb5SHx8N1Q1BsL2RDwownHBRqApsLF2U56E22NAJrM5teQpXq86Xwe",
  "key3": "43BU7dUNAFLVjdqJ5chGL4hx2GyN3vbeMGwyUjdegcRm9DmGTkPqhboSYPszwnQbGDiJzKcuNtPJNjZUVNvPJZ3R",
  "key4": "zVWu7YecLtjgLNgUV8g6fBADpE5AzMKy2B6QifUkaxfEPL7YNKgcstVbGT4M9ZuJiJgD8BkJy7t8ESB7j42bc6P",
  "key5": "4krugmdUcaLNex3fbUBkK5Ty8RR9pSSWATray9RK28SK9k4HpkpJ6Ax7Rk84LNGpaGFKV1LScGtL1NxNuTXdUrgn",
  "key6": "BQHMSp6JGXZhWJF2JNh4TWoiNLtPztjKtnrWdcHnW5Rhvrz1AgoieYWYxfiotdYu4gQCeZ7do7UQZqN1WbKrRqS",
  "key7": "2JvJWyAKWRU8cGGkNibFHyZszxn4PdGcLay578cJXQL8ALf9mdUCRLWmEqLX6Ru5Fs5RYw6ir98w548GfdxV2Yjk",
  "key8": "4FR1LQtuskaBHvfxuxwdQncQVFyoQS7wcbCg2hjNm9BMvECoqrgPyPvDjTUzqwMAs8Pj1ec5xKuMan2cG1HFA2mr",
  "key9": "47AeC5cr7HDDiobwUsg1pa2TBiSrZe97Y5AFKKpy4WggHqCATcdUpyfZioeYq38CNcoWAgiRzeuA9jKjXZuc5Awe",
  "key10": "4qzN9c8mntvhhx9cwBj4mszDTMgsv8AR5wdE1UvWZy91fGtPDPsqBkZSC7YeQbrd6qmumaqCARthuDDNuL62tCmQ",
  "key11": "2vCXpnfjAguDMtyWSE9imP1wNwqR8Yks1ycJeos6DiBumKYPxPcFZ34JRm63kyq3RLWcAqUXxkXgfCGh1zpbzUpq",
  "key12": "33zU8Q6QH4A3rVRLizgi9jU5VVdqxGkJ1GF7u7fxK1AgRQM1Dcw5NZEZ4oX885E6zr2tpFjoU7w5epaFmuMEJ8xR",
  "key13": "5Pks3K94uFMoFALNZLaAv7vkbwfqnz9M47ow6ZDYMfATViHMo91DiHuz97W9owmYiPASjsybBYspvUzWf6apjvsR",
  "key14": "3tpKbirxAAkpk98ThoT7jmZzfZeWBKSFSYt1vTTxSSw8iGao6oQUupCCDiF3MeCpCTjabRvCz9Upm9kVFsge9mRy",
  "key15": "2Jdre4D6s23YVGLNdFoNgJ89k2KpZfdXjYxtKNEytqpytfFfKvtuUgqkXK6djQST4ZygHrV43QVwc7ZCutCF55GX",
  "key16": "4Q1kt4YyDyy8vTxy3vULycykTLk5P7iExHvuoSwFQFM9ZA3w9rhNzes83XvagYuYQngPhnPhzYMAHuuV89ZYLJTA",
  "key17": "2wPXQmMSF5anuCGuhnfV6GM7Gznp5YV9mDz2ABsuBs4rDZXs9zhPj81xojbGmvaQaRU7A97h4rDJGRsf27sm4QT3",
  "key18": "59xkjRAS5r8G5Lymm7e115DXJJAV6tvMFgb73SRiVLu14wU3VuNUUcTVQWbGdooFNuiLMWoA6cBpNkZqXi2rT7ie",
  "key19": "33h1t8GKVw7TpKTN42NXFhn6u1UgCzjeaNasDrcPqqXeywtLGZcpAupkb7nTApLHU7faeiTJtGuaNwcN4Bx3McnA",
  "key20": "61D3PQrCHBPYkpxu22fUW7GN9SPzMGFcFPw6AkSVsXnvtTmBfF9Npb5MNfjBU5T3Xnht3LMKA7RLJHMjr4NSUkT8",
  "key21": "59RQKrunCqVER4am4ExjbSzZio464z6x3sebpwpNjC9AeitSXCMwxCkt3g2xihaBjjHUFA7fcHxzRvD6WZvCkqPZ",
  "key22": "4t9dD5Df9JtERzqkjqkNnWEhE6hzzJgB4bnDUyVjZpJnCaz2Xt2WJ7b4P5Rmxkg9PsCgXLVtBxJcH8hTZPPsFods",
  "key23": "47nJcKD4RBAMqDTHaJUt9f6wgXXaEyW8PEqKUiWyL4AwrKPSc3ZRiphj158X9W3jaBP2ouCmzdqtwHNevVVr6akV",
  "key24": "7LFQTxXySVvX7PGaiJqqo6hYShCV32Ck7Qjg1StemTTC5cXbnQA9Z5BoGoKL8uD8W1xdQd9qG9vhjSCwQTcMEjz",
  "key25": "2Dc3WDLPTkKFuowMqEBYdxneU8qQbwwuMWf3MLKEgRCVaeXMTd57HcwrTTvdJBvU1oM2mPy6EBQUy85LnZdoAnF6",
  "key26": "25oAm9vDtju3f7PnbAMHFggYHGwa3Juy7e3S5XwvwpqECbGE6fBFa72vwMp8dzbU4BCPF2UaMH15PJcGZrKFdr3r",
  "key27": "3C9QM4pPzXti7Y14ACp2yofY4VAf9x4WHGt2ztzHnXwg7EWrJNqRKrWMyTzkk6BwVxafM2NApxs8djFopEW7Nfzt",
  "key28": "2TQarmr98cbdg7kqUYm5qAjMqTvU2tZ1jrb4eyxp1LcpfRTT8xLWuHCxjYM7qmhF5FSeUoDsEAKVGFyery9Be4G4",
  "key29": "2PzSEEcLUTumGpn9hCwU7JWP2N93Dw6BP5XUaESgnemmTH37S1BnJ17CjVMjpGNTRDm1BFGrfDmP8yMNXuHPbQ3M",
  "key30": "2j1yeXkGzyK5hhwUpVGCiGtY5PCY7pi3z8nv4maqoch8W5LZHdoXfLorqwvtQ5DqLBwaP3Yqekv3TyJov9NhAmL",
  "key31": "3z3y5n2jEniigXFmF3Gw3Pn9BX3v4cso4XmvnwJo9RaPAKCpVodPUW4aJEdxizLDtPgcJpYTeGjBTo9unr2ya8Xn"
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
