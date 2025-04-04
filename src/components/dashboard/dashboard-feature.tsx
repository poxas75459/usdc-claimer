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
    "57TrPrgAdLnP3WhjDMVsodHXMouuu24R4Uzf3ywh2GZVZUrFiNxzaHnrrCAsMTSexvWDNpz94BviiTVUhZUSMffY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u9JuMn5NDwCooPCvYi7T9cBKbiacyr67qeUX3ZajGL8NpEGWEDG2n2L9dSAuQuwr3nFetmJ3stehdX8FMQyVUdB",
  "key1": "51hAwMvDicoqUBExbJrZxeUEqDgkRRe4p4cxYHop2bm1nVdfWDgCrWo6hDqvAFkcbwK8JqXkJcGW9H5JdKV7eRTF",
  "key2": "7PUKGdUd7V4pxNmyYkCBmANNwjeixanDpxPAhjtGEKKsmf98fjmjUa1z6EwUYqXuiPWkMxqTzN6UTfaVjECD72r",
  "key3": "2eN857RohM9UyWetEARFFs1F8CGTDYkrAsKyogreSry4sbWB3DkWbYtBfzGDZrtWckzC3wSKtQ9saSdzQkdkYGuE",
  "key4": "2oXQPVqZkFAM4ChwBMjjYV9d5X9xkeVJK1jQgzDXshnX26rTctaTWF9QxhworS9F1bdJ3V8oDiDKZvyPaTfDd5PA",
  "key5": "4aMdSeyj3d44JjzmssZNWjpnQWz8xuQVrK2vhMikEa8EZGCnrFe3EfJe9MbXLeACxe7hqi8wo7GBLx6YS3S586oo",
  "key6": "4pxQFf1ykfKCtWXXqwei4DWUb7Uu2W5tcYwyFnaP3WDs5cYm4bV4Mw3Rt1rkNmU9XQjpD8zGS8Hyqe8AiGWtQSFN",
  "key7": "3zBvDCBCiihRjUyhY1ykzf92iL4fyX48Bd4JCpLFko1YEX7FV95YFAwEoLidT5pFryPka9nMhbmuRjaGDZznSZi5",
  "key8": "5rhwEtrKjSoKPRcT2bisWmRKP2gR3aEmQWCY7NHRUK4PXBEoeEmCKzxAPFxfwCwwjhoXjNQy9qWNNVd67FxRS4xn",
  "key9": "5hxNLRQxXFoCtx1MQdLTdddhRyTH2MbaSx93zWEyXwi8foUP9Cz3N6cPhiN3aSjhHtA5Ezue4XfWXqyeveDa3Snz",
  "key10": "3Xq3citVNxVtMgaaXKyMMkK8ZzghvegLeUQfTZ63zL8gEqbXde6bkDnALxGXjt5jobLFvtFMMubsnJ52bvFg5EJz",
  "key11": "2Ww9wQGK1ffZsCy68VKzu55RjdAmrHmn4WNASrFCYxGHXmFx8hng1srcFvsC5uckSBVyRgDTULDxjMH1MTQtsiBu",
  "key12": "4jAvyEGGfDmFqysb7WtYXhjXawPuqiQk3jpnuRjaFgJu3UGGYYJ3kWxdDvHmpgS1xaohGRJSRc5nPXVfe4F4hRZx",
  "key13": "Vpnu2Vn2cxn4gHgeBTzrmz1wmVQZaUzZjN7VcRYc2gMKzvwSAFurTKnPaZvAm4bGaJeW9BE88uSpZF7vHTXkWFV",
  "key14": "67VwvB1SRrLseWeVzpnJo17RDLPiJAuGKTYGMFr8gKv2pKraPFPg8Axzi4tiFxRxQnDwrU2TtqHydoj14bACgED9",
  "key15": "44JkKvLrkaURzjNqYABvA8QQzxCqjrCWnaUuBCFNEaaEuKN8kf48KNjmfQJDz3T17pKutbE1RyXpF56GH4uG8fom",
  "key16": "2LAbK1txnijL5BK52qPYZ9g1MJ7rDszSVykYtZkTjReT3Fz4Yvtqsg8NujZ5CdSFGHPWwFxyFGyyyd2VyrTAR1n1",
  "key17": "spzvXuytDU3tPPJf27my6eKPjLSs9sjZSQikS59Tv5S2PLmAiipT2nzfnZ3bXhmLZBmHRna5aqvmrF7HXUqy8Uy",
  "key18": "vBj1kYiw4ePkBDFqPozJhFUaFz1EcPTmDSWmGEi65mqJTJFzBkPEgnnrE8QN4qYQ4m1Z98TWJzP1HjYiDyFYAcC",
  "key19": "32vAYvwxweV3PBVwNGNYymCEi8PG4F7LVWibFAxZveRyhj35rwhJUViXiuiYaNoGheP3tw1iCQ1q4Ed6Hb6vLtNb",
  "key20": "3LUnkLs3kEh6E8xNSTyKZPyjLjz3GPcJixAWvnHDQ3cqAyryrRPo8ETXZPskj2ttRMYNW4iCYMqxn8phYBP316od",
  "key21": "3SMvWF23p1JDVhBYRecYATsCNp9gDGvyRUuirKyJv3UQGAB7F3J1ynjtZec9TWD5HG2iVrRdLnxZKKLVBnEwQNZP",
  "key22": "3BH9b7kLbyG8r6o3Kg7yNm9ApGgbkpbEoTnRis4nHPLPpJyGqmeZTC9eHX8jeqa2UZXLFfUeyJK53toq3Zi5X26m",
  "key23": "2jHTPzJTVfLCz2NYMpDPzHuj2JRVva9SHzdj5UkdDnnuzvGQtynf86F6DrXzfqVwCtc8u4dre3femWhVe3AH9F9Y",
  "key24": "3NoF8SjRt1qcqtdZsPbif3tm9oPXevH4JKbiCuMzvyyr1xvE6fLUjNN6veamNVcFYgeidMcPmMmHemvtHdoYnMwP",
  "key25": "5Zj4DJsDYnLYvc1F4C22XbPRuXB44hpNs5Db1YqTvZhdBWm4ZGqpHPFY3cwFBA9988VJMB2UQr6Lc9VotzRfhrCU",
  "key26": "3wCYnNvkhcHFWHQh5yWsQHYkdgWM2LfoV7JQ93QUhVt3jCtobL48oFTPv8F6SJA4mWhMt397drUUguq8K5H4SBAW",
  "key27": "4vW5nWdWCh6PQgqy43bFHL9quz5uqMt6JHEPXgJaWwYaEpF6MWNF2ZBwuNuohCFmeRk36nVYS5NVHN1jGkb7UVFe",
  "key28": "4UMmQ4WJLjcHk28Bp6jxMeVzRL1og56hH3UfDJYLtmxmhmFJBkJVMExh6sNYEz1TTbRYup7r2GUF9CRsi3XDf4eK",
  "key29": "sPT9of22Q7KmNek42LtSd2UzDB9bv3NnTS1u6Yv4BikTx4dgt6t5iA1j4sxR34GM3PhkwyHmuoCCeJShM6rdr4P",
  "key30": "6581zyBhTfi44DYyCnrdAcSu3V3pySx3Pfm9gZsuCrvJTjo8nUq3rtETXCe8GQodiwKRcBzoXt5wXz1WdRB1Wo8q",
  "key31": "TjvdfF2UFc4FkxVBkJwVMya3QQ4q8oxRmKTGxEuAaUv3PPXwR5rVkC8VHYNiZ1XR5bevEwg5w8C49pFLFcFohuS",
  "key32": "3nJWXftZaPxEeJstSQBsHgyjRUtyWX83K2tZ4Wv2o1rm9tAbF9C5uhcULhVRkABhuDdVLCVR7jj93ceUEYG7po6Q",
  "key33": "4js1kJa1RB6T7hDPxQKRcjaCnnqs4tm8pqBB2JphsmQWwnJE6tKcLga21kzh6ECoUdLMxSoe9SyEuSu7ifYxTee6",
  "key34": "4AmNJ6AjifdpLVurQsF9M5SU6cXNotk4VMx6r6AhNZf847qBxcFoi6vA5Yv45LQ4cfT83pd3tdJhA2vnSkJanAMF",
  "key35": "29AqPGiD8RuwFqJQqfTDRHifKwYMuWgN3Xjh1CgwdV3Fd4ujnd4TMpffeZniQE7ejpGR8JHWaBvPYUJf5sWjGimR",
  "key36": "2JvELToDHHAvFHCUZJgN3mEyySdUxzf4P1twKEasV9rFrdjtr7VU7LKVH4aVfNaPRsq85audEP3pAuVGqqDvKSkq",
  "key37": "43t1EaGpaHxJpLHTcB3nHLVeXx2HpwQSW2quJS5YWQ1Fmj1v74tUSHrBt58VQWPGejqKybFLkyb88JsJQ1vPXHfm",
  "key38": "2K2JvzgupetbYqVTnXGxuaVVbyABb3jgVn8g5t9rS6KywMpWi4zrhKPVdeNcWTGf82uBWbvU7ufngsJ58r623Bda",
  "key39": "5drNrYaCGLFsn9HhDN6RSiH1jd1SPZvzH24yJgCkWsBD5BeS9H63ejC5T9NgJpfM3ZZAnQYFBEZfSd9ZR2LkaxkR",
  "key40": "bEgqBV2hryVRzY3NPZxYUN4StMbjXnatvT1xi2DVTv5okT37eMv6dpJbgUXpwGzubkAnygaPmGjKdMZ5HxYZoFu",
  "key41": "34DYFJctvBocCRfnB7ZeygrrmGWXMBzy8KxsL7z565WTGXCduwFrgkskuDdoquP2r62MuV9J7w1xFshGhUBbveAk",
  "key42": "2nY4MPPPZ2R1prT5JpG33tCKPqjZ5bv46xCTTurq8uoSv2oV7e7id1mShnWk2W4A99aHzRVmKkTYKuA8B4TbCdjH"
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
