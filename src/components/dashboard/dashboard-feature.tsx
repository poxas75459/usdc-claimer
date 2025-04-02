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
    "43H2nPi9agtd76yqQw1yVUd4KPfMtkkJDXZaZRSErxxsc5HYVdeCss6HfS2xNbXnL3YEP5ix9CbSNG3fyxnBuWtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eAArVk2KwJzqSKP2BZRgMmWH8JaFVATyPxJcXaSMa1E8hjZP829FMtHKZbMcBvr9Sag3o3ioCtrLKqdTnLK5E8w",
  "key1": "3hTGyYKDHEvBubqRRUh9yNZBtEFMVoprP6QJhTn7NKXZTgiNuKdcSC5US7QKJVNeoJogcuHE5JzupqS9go24uXkV",
  "key2": "56mzi1ngfRqDWkQ9zCtL2WFjgKqXD6DTqWofY3j7tQZP6ZzZBWvvoymkPY691RmokMh27YEvo5W9bUoTa9BMkNiH",
  "key3": "cR5G2Un4kpuHTTBxAAQMHY1VzaDZSC8YH5X3EUD5yxxFhfr6zzeTrpgQCvHdabKz7DCGRGnWdAPvADrGBGUg7FJ",
  "key4": "5MJncqyaRrZT7sbjbpaRTg5tJZernV8CaYjQrCrptPvmXxbBCYPgfaP5iShriv99oQHArkTBDJZCawPEe9eBg2hf",
  "key5": "4DfJSmYdyKWsNycWwm46NY7AGtwKmeQ5EHven8RjAeyQa1jakCth1bASBnQdvnZm43yGetpA6EzoVnMdGbzX8uaS",
  "key6": "P3L7Xf3HdgCaAATBG33isqBmnJcXCEa3LWx2DJyJ9HPnYCZ1FLpcXpqn7rfr3moa8XuD1ByFQVzGJJ4Tp2CRyAE",
  "key7": "7hjxfFcjp9umSryrru3q1yAFU1DTK5HfDKfVbiX1VnNTo5jTLH3qw4jK35ebqRuWW7LnWscdLLs4eBAZQNUqZXv",
  "key8": "4nwKxUgHEZ6fzuvBGpo2iQ3h4egPKzFiVbLtNLGJFz2wMKtsh3GpFR9ERjd8juor7qy2KnnCWubZV8zQUDCvfabN",
  "key9": "5isjn9g9q431y3t2e1QvWrNvaFhYNDUwLjPmJxVKeAX3nqcjgWBHEsqV8o1APAtkPU3rDp9yKt2RtbUsVPh5SmMt",
  "key10": "5ggswbUXGNANW29B6AMrjXBNje6KiRGzSK7zCxwc6kgZkquBL6odTPHp68a4LAaAz8rWiY8PY5ZS4wey74CX9ES",
  "key11": "23Bhe1V7WeGD7gTbAbiPSGS2Qu9NRuRijmFvxKTo46yaB2VKzj8GLUjRvgWvvFjkW8zi4uwDX8pJwAxe4A2pw7UM",
  "key12": "3wZXzAKC5MnV7UPZKCC1JN3qYbWBR5YVzwyaa6zYx9TXpciycAkcYnzS5tCRAPBKdfdoco7m3HmQkdiGF1e5DpQf",
  "key13": "3UQHt7gwgbRC5xM9vxwv3vGf1zr6JPaNNRgLNhzsuHqP9yyefHaMrm39RvqRFaRJdjE8hhj7jWRqLTEhuDai8geP",
  "key14": "5RNgXPBDgfNiRxnEVDv9tsQVyWZTnGbuDeBhWroU3EFK3mR5P5j8hyp2PM1H7FiG5z4FzdNNx5tDDrCFsnkYTPDs",
  "key15": "2o19GZdZWUvqcYwFrv54JcvHSPKx2Ut1GvLEpypuQXKvquvg8K7cHVYbn7MdHaVjJwUzbSFQfVEXNaPJH3wDhqZT",
  "key16": "4nMnp5EKtQ8RbSPW3tFu5u4mYYvX8gkXzf2kuDWgnBmfrsSfuXfpKfdCAYN1iXZPBT9mWpxh8UEEtWUsQxCMR1A6",
  "key17": "QpE6yV6sBSpwm1UmyLAmRmCAr1HRbecC49eGryaJU1Z1PYD7LSo5rUsuoiLVf7znB3dzCrqm1mZwpLeLJc87D6Z",
  "key18": "2Z8qU3TEouFS3Tj5QxbS2aBHrLBuaNdKavZMVubgdDVioMyDVVvEvCNT5EetuSF3yD3i9f8agKdzaPDvkCHn4Gg8",
  "key19": "5oh1FyTgKaPwbg5Lo4TXxyNK7zDfNcvdSaFfPqygSnVKLXg4cXPatDBVH5gwrCpyiHV1radLbWRWMj9ZLEDgCQE9",
  "key20": "3Kr3u7FjTNe54badkE4jsBtnVr97z9DwaMgGJdumaL3bWTxqMA6hHBMEKBjbUP1qkGvCWeihj41zLW956AUGnbuP",
  "key21": "5W99hLrw5gRfcd9hiQmd38MCM1b4CF42ErFZY1GXcKkfjJREzVZwRj6QQXkRoQDe8a2GsRQaYktEFQPffoNg7Hg4",
  "key22": "4ghGyaznuPhvsw2QoBEyMcRgwDA3zordsAZGE7yQPjbFkxwxyZrFBTRutshFvxxB9EP9N4DERVZaCV5psvSdja2U",
  "key23": "2QqaveS3ZyX6L25rSdjfVeATmbHnHbRMozb6qYBiv4vnf6W6gCiMGBHdp4cAv38HLKio98KdKKXaRmvKGn4vNg5P",
  "key24": "38wDHFkKSwNmU5zwpMZRiDGkv81Po1CwMLSRj2JSjSL5MvQfc5yzjDHDCjm7Qr2hiyTStcjUwnykV7AFd5qkbpCu",
  "key25": "3tMNmfzhbgMBjzCxbN5mdvieKiATGEpGCduUZwpyJWV6xiN6uj2EMdNr4Ft8QkEH8yArBPrwY24TfF8VGqDiP5Wh",
  "key26": "Fq5BjaazntgZJ2s8bLi5FZ6aBeFmcDReb8d9437qz8uomPmpGrGGUjS4TwubN6yP3ViAtyXg2ZxNL3B3vsLxcAv",
  "key27": "4ZboRnRTeDmJcfk3WMG86UJkubbiyj3ExMbrs5Z39M9niwQ7gwqHeGZ1Ahp8UB5Ceg3dkCGcv5o343a2zSQKZD4i",
  "key28": "4sGHTiyfMNF8tXw9PLcJdF38Pvh2QGFuohvvcfMvxjijkwcHQxHxrcopoawAeG9yA979Vvr8AkJD1CEb1iRMiaMo",
  "key29": "2HtpNCPHnFzgBXgGwpS9gTxS2gMdrVzUK6ZaW9n1oU9hw8WBHYDpcc4SpvtQrM1gzct2Q8yx1HTF4x3b8aJbQwcJ",
  "key30": "N7wRvCSwxu5wBjmFaNdVmx6321XFJmEskU1AF5KZah7iFUgGYZtFfh17oePsqJ6D8MvfKtFhKju41B4rT3qNn8b",
  "key31": "5MmxkKeWnKAXV8uFxiynhNrDDUDmr956a8fD1Po7gats9PQU1TKGcFZg9bdkRapJjJcQmWZq8My3AhqJy93DiGye",
  "key32": "4ZAJyE2jMsuCz5aG2Nzy62zmx9MPQEKmvGWFNrRFrPRmGgEjjGQZvSvh6W8FCa4XspsAy1FFJWM2XNfTuda3ZdQB",
  "key33": "3oaPRogDkYtsBjGhNVevV4NwsXwhqA5X813KVwXu6Egu3TwE3UYZBwb4mZxySUcuDcsBwbjRFswQXinNvVCpjpNE",
  "key34": "27yAJ7KP4Vyu7BizPGBXhZkQtg2t9tKp8o5tVaH44SjzFAt6FUVmS92oVxbDLTBqppZSaS9NqnaiR1GCgExiCudS",
  "key35": "2L8jyLT3HqkwKjUdNXmVo3B68Gw2rhzuYhRgkQHPmrBo6JY3hS5gKi4PyPfLgmVyVN5LZ11bM533mKKzsyhC9nqa",
  "key36": "5KQzGtNunnhSo98RLV5yEwJdR3xZMWS5oupMYBjfzLwJRY6NbcuXqBS3nkv6z8yy56SfZNEKkyAG3GW14TdVZc5g",
  "key37": "3zW7nX4cn6UTzSKYJjFCWxN99XWJkUqnNZFfSFndfUq4tM4XbUzfw4ScLt6zMsNqT6mY2mszRFLCzD5oNEchMjKH",
  "key38": "3gvSC8j1e5sDqPFvNrUy1iFHw8j9VZaevjVCsoaZ3S2XUbrbxiWSFbeYgoSM3KZcvYed8JrVDh63yu9EoTqY1og2",
  "key39": "42mUudgvjyEMHEPHWaR2Xf1CWhnLQxNAWWoRaRAv8P6MvTADrD29VHezoLY4w6yWr71qHbUih6LJp5qzN4ryyJAz",
  "key40": "2tahZ6AmHP7pkEHUHbujLyqUXmiBD81ijsRLyA4AsnX8qFq9NkBcFKteawRQiQvtJCnqDvQi6AJ9bCLLcPM8PwKF",
  "key41": "3KpPRto4e6ekjvw29zu81RN3nMwi3odoXDk5bCE6ajN7ezdMHPdfmgebtGuojkn6Lruv6iCLRg2xPn1LYHtJqXUy",
  "key42": "PeVCd63cZXiQr82XgR2nFcyjPuYHFbPVsnwxEEoPVBjukma6y9RDnYhC9sjZq1bNR3hgFueMF7ukMma1miznrjb",
  "key43": "44p5QhqqkjkuHygr3f8CpzhwWNxrwXDL3LPVs6fH97eFC761T1JSohHme9xh8DvVQSp4T1yXmcDrKmwd2oe3Zuyp",
  "key44": "5yT2be4gqC2wZF12YBKyn73eGZxty3kEaeunvrqSwHnEvwFNZG43RF53SfUn5UwrBywkYcDTisBJaxWCQFDstjKN",
  "key45": "2NSa9gT5GmDwZRjxonPUWbyjDALszzhJbQkCrtCQwH3dz5cbsovp5WPP24fcvHJiUxkPQXViMoWJEtLMco3aUjzr",
  "key46": "4qdMfx5168EmZwSFQshGDRzQHprcXTGffB51aGzrdi5njxbXuu6d1Vfkre8SFjTEDvSsAruijLvas59ALWBmvj7N",
  "key47": "525AD62ziA6tUdAMHvb9p66x4AqEpztvSEZEd2RkfY6rhrbuFrXap7P112J2SuTYXEqV4hZ6eV1NkMRHHMS7956T",
  "key48": "4FmVCzwDqB6ESLvXmY2XvfWS8S3N7oWsdzntCUP9VXysiij3UV5zwRRYALGLAVEqvuAfixFNaLgQbe2jjE4gCRXP"
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
