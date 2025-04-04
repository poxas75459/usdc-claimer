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
    "41j3dY4snP2e9GU2nZwc6XMebnTv3BYi6cRmBKBkkpwMWSWqvikmYHEzvJBd4VWmajPT9Mxx4PANHLhc16ba91Sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eTae4CfYggZEw88D5FjuQYuNKSUt7hanrNkVHhNZ2D8xpgngLUEwK4dKouMZmXdj9j1hcJSuEXmPqZqXuBRJ1cn",
  "key1": "dJgMwkvVAzCJP4MLjUVTZfDiC6GpYvkN9zeAZudb6RpUEptvKGEaFDmX38dKQMBHTkh5TCwfgnXpGQJDyyckjtY",
  "key2": "41LMy9Qtt9L4V3ncKuZBZLZ9uUpH4mA66fHcwp9RE54h62vmgRpcbjjRWiHdeetmnbM2KXUse1pMtFMDYN7dGvvR",
  "key3": "3fYYKZ1YnsbtKeWAnWkRqfp34QK99vvgvNk7MkZwaqqEU8tgc6DC6H5ZSy9L6iNiNNgxfjQRJwZHYCFBV5A5Le2x",
  "key4": "4LNVUUuxyp7F5ZvdwoMj4AzeRybafoG6BsqkLFQjWZXfY5k1RXC61VukvYrJn7sxS1bHe5swn2Z1hrTSd5iUw4dF",
  "key5": "2rAv9TBhVr7ajrMQjnWsCKnB2fiK88Pqw9UKVuJmsGyLBsZX6zAm84VX1CcK3wutzckyb6jbuPQxBNsCvqnXzpLJ",
  "key6": "3KiABMh7CJSEbSPJ5k5RvReQ1XyJ2JmF7G4CVoJavhWgtQ1w2dcLnyDJBpA1Wmwh2Aakuyh2vcMf9uhXM2tyqmKq",
  "key7": "3EtH94aCg7aDM2Kh85GYx8KxX26utTTux7niXn5hi4QKeV2WUieE1atvVW45yrXKq7rQ28Y2P6ULxTUsC9higZNT",
  "key8": "5cqVx8f3zU4zmSxDBHpnJvQDtEzvjj9DoodP1KQ4c9AgNgrk6RgfTr5qjFnz9HEK5WUN7VCvYvamy9zFjfCxiTqw",
  "key9": "4BypfdakbxHrMgeZ9WSeR1zQ4NqeDriiwn19xhc9sEGiZyAVrbFWPvZC821QpmWQypv5bXdR9KV2NSPBfz2punhU",
  "key10": "5GnZh74mJQCb2jPcTFcBShHFjEXU8pBaqfRC3Ziv1GY1j6ofhGYsZ1NHTkwiibsDZ48PfgoPDBHUzT9mGwrk6tnd",
  "key11": "2DDLbvj1YgE8qAXWyUiDXwhe51ZCuuGJJjEb81TqsNgCiTkbDxJoaPdcQhMT8qT92NDsLFmWqdoEarZQx1EUigpH",
  "key12": "3ek86hoyCtxXjUufkFn3LeJiiiGs6xFQknQNv4WrYuiFxbmi9cZ4mbo9awqdKBgxG81HitJm1mZZ8qmpJ2jJHcMm",
  "key13": "2XUacnCiurmZK55PLFdpqa8sgZnfSzKL5tHaYLB9RjEEwevqyZRVvwoRPpswN3xNc1PYtc9SUHR4jW6r6gby8RGQ",
  "key14": "2HUSgZRHPZhE31gaGHP69kw2mfnnRguniciTDVSYQyV31PuT1UTCsy7YNigEnJb4emAoNUXogjYhB4HEV8mY8Bg8",
  "key15": "2GPxC4SLJa73gxdBwXfL6bMj2NuQjSeRvh2DP65h6em2GQ2zzBsc1fBqM3R3eVTyjpoZSYga6ZDADd8Kgdfrf8XK",
  "key16": "5pba8w7cZT661tkpqPE2X1762vXdvwMxYvGTHJgzdDpaPdExyASzaf6jW2seLReGdRCzy4uNX5snfpk3VyF5ieDi",
  "key17": "UkigNpLeayGrYw6isJcpsQhbgVxVzc3HQQ5U5jwLbr6y9Y3t1LLfjBi1p9uDJJA8CBLAYtZC4YSpTmfRwfVbF2X",
  "key18": "3EUjyNEf1om6Db1maVUaYrkdhaVHkTjZYw2hooTpj6ikyaP6Uwe92KLMzJ7viTUTj3pQRpE7i193RP7jAc4r979n",
  "key19": "3QL2jtDXvGfcyHn7fvkMRPdqxFFsVVZ378BCarJpXf9qqmSbeWN7snWQzyx2PnG4mrqRziXJxARkWUi6yguUmziF",
  "key20": "3YazmU4394NPTYhZgocJaDBXB2fzmKxLHwxVymbJ8zmPdTsfJJrJ5h4At1SEQjWd88WF3G4WdmjWoUhuhQPrM5GS",
  "key21": "25fgRLotZ8XVWMm3JXiyv66M96SGr8GUPZrHSAEwFqcqwHaSNznTqdsn8C8pF9cssSETAWqGKn9sjYAeyqBi3Ucz",
  "key22": "5U77bPqmQC5MWNKrLU8MdCU8z5f53T1Ut2rYVp6oZoM4oqy7rkKGWytnFiFGkeq2HDBEeMZ6igm4QFDBRtKqtbfy",
  "key23": "3Bt3FcAbwbn8W9kWDFvWhj8bm8nggmNbKqNDuJkpXtUuXYdasr8oBZhec6YfVPkvYpBZy4Yqhvg1f4HHfs5MtZsu",
  "key24": "5WG5vFa1EydqQ8MoQixuH1eqzCi3kLRzsrGMBDGne4BxofnuU7h3VcpAC7iSyQJr7AUmTkQa9EwpJPVdSEJXXecu",
  "key25": "4FRFRN6EAveL3v1d2GKsxk9V7YwNDLfUWz71zc49kCY4QraCVem6hkJJsgZdAgzrV7N5uo2UscFDjH1YFetwPcxz",
  "key26": "2Qy3pB9FjbY6csZVpHmforYRACUXGn42vyU6BEPZpHDzMv4g42B587DpGb3YuQWqHgJvajsqGGGF3wYYhugAKBQV",
  "key27": "4bkJnNqqmzR47fkRrV2eDdZfbq3a33MoXknGdY6vVfdcs2ikUGmk89uyNYuBQe6xbB9J169x2jNWErpcbR5XQnB4",
  "key28": "4w6vXptZuf4Kd9eZsXaGnc2UgNZ9QmujgKeiijgVNGnzJyoPKFP1NWSXudmscypGHgVKzbp3fZnKLqpd4KQzdihU",
  "key29": "2w5gnDbr2jdpn1CRoqEXgdPVwsKMZjEdLfezbt6tHc6SUaNy44pcQTkHZHhSLL3pDf8bNY76EWCMgfKfDCaBWrwa",
  "key30": "2irUtZj65QDgiLBNbKkk6GoPARFjqdWnVeSPe26zRqgnoDbfpd4mNbhZ1jDi6ZhE2BFJjv2JhhDrL6yJcfTBGMb2",
  "key31": "4L7CTfgDpjC4PB8AzFhtCyPF8UPwck6Po6zs6e995kQqpuYdRJLpDGRekyTeCbrxep4hidiDpT1qFgvk8hCBdY17",
  "key32": "4yRtPhfDqAvK26PUm6zi6GrgXf2SRjv1AAJhBkSNbYp3rEoJhis58Q86vrZ2kgie2apyyftnV8PC6D1S18SdGFFe",
  "key33": "4j1YYUYZ2RS9cWSRPddAqcSHWUZ5wYwz5K2aENEXqxxApvNuLpApXvPMT5HeBDsYmns4PSV3BQzkFPQit7H68aSy",
  "key34": "39byf2CvB1TrwJ4jFS2RebNjtbYLwXCW1Cao1LAgRmUEYMv7i4fUAjuhkpEop9JHRjJuDgWvSctSs5mwWN4U1dhY",
  "key35": "3c9HQwADuKrrfAQ1GUbRLC8b1BuVTnP2pckWro6NNntuBKhtGBzhYFAEKjXd2ti2XFbtcPAFsfpnbQFXx8AtHDmC",
  "key36": "2UmH8Ah1Vo3q6Sm72DJNpRVDQEAxipG6mjLd7PrapiTcgWPKNUzXTKDyf96gCCYSMKTvJv9QhE6DHfwo53NKNyWM",
  "key37": "3SqfXuYbS6DiyKtKcccaCSK3zgWY5TUCYHN2pcgHhd6xKMZdB5dCuokf9mRFDGDvQNiMbTm1d2DSM2jYUAspkJoD",
  "key38": "snEnAX9e7GziSApEikGm4QsazQ4G2weq55VQaCRFbfQMbMP5CneQW5PaW98of9LgFytTmfswpmbaxX5AXh8dNik",
  "key39": "VsoPumpiXTWV82cmCA5N9zsuR8xD4s3jrgBjCth1oDbhJ2vUvoq4S5ukiS2GBGu1LZ8foNd5UyJj1DjCSCyj2fq",
  "key40": "3ZChBWaFPDEoqYQ3X5NCkBVu1RC1hmraAUb6p8CVgQwJzpmLMsb6JqqXUTh6AF9EAxp4NUQhiUst7uvCzpfiBtax",
  "key41": "4XAryTifApWeUh8dhJTGLTdc8Jpoa6E8ykBEvAFAJs6fZJoioEc1QtCtEdXktbXh8Jruwz7xZPvKttzuNtcdfWk5",
  "key42": "3kjvBhaugUNsSKfddzSk51dg7D5vaXPoSU9pa8Nt4zSRorBtqm167rdUsjtzgCwtAnffUohLsMe2m1o37roUuSZw"
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
