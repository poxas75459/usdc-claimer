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
    "2FTC1Tw1gJAPW6mnBrzujyBQ8TuSFAB9rtgzYFvTZT6D3xdct7dQ7v6JEfXTwi5vNSYWga83iTb9n4zqB1MQnToN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64HYpf29e9KCQ8cBdbneXFogUeiqb7nQD7cSGrjvSz4busLso2SvXCmVRyzNp3bRU34W8atyHgPdpLbXzL9DKiZ3",
  "key1": "ApnNi3hUn7P9EG4UpiiQJWP9jSar5xcqXfM2SMb2sF6xutaFhz8x1bKfzsqZB6z1mLpwLU79Yz5HZg5wpGBzzLf",
  "key2": "5d926XxY5waG5XoLEUbREvHvXJxYDncbBMFmvnDvWTfLScxzHCXECCAEMRRMnoZhgqwgpUx8DqvkYnpJ45GdAg53",
  "key3": "249ojwKdWGLRvaoS662j8qVB2fsaN2fsvRzdYD68yL4n1wnuGqDL1Tvepw1gbmBpBWKoAGpuosGc5MencZcDfK65",
  "key4": "VNKL2P2EpKjm64ErAJ6xMZdXTBo6wS8jMKFA1pBnGPiwChVNVDVQLf3RxTcbhxENxtWaMqTtPv4rrCLA5GosRPU",
  "key5": "49qKyB4TVjV8EkNTR3fFEJeVKsZ5ePLCopkssFZf8BQdENyz7CbU43SdzNWyRvCCrirDifHqf8Z6XtJugZcx6cCj",
  "key6": "4m7HW7hWv1YzXs7ACTE6TBwPqg1KKMBisowjr6ERFu4DQFytG2GYYEH6KYMM6YX8wwsgJDVT8rmw4vvwLBTQ8DRK",
  "key7": "61Mw1mXXcFHPasUNndEwYcBTvdN95urdfRvgQkktw4mhr2YrpGRe9wu1kNt47Sy3Cf46cguu3HhRJUdXuTZpzQmP",
  "key8": "5D1arPvk2hWEYVFoQ5tqgHkNAQDUQxWkEV27rKmWxUcd5Cqi8iDcs1w8hzZSbwwFSK64Akga9wyTh4QW9Wz5UX55",
  "key9": "4nEv2Y4PhyjxSmbBpJ44ZbAgwwwHqK3LYp2fLxfrXR5KEewc1S3p9RGfpHLFJhPKy7je2aJci1ukMpShpvvzd2Go",
  "key10": "36scLRnEQzSVNkWzKycEzVAGDMFocHyiRm7RWZq45FLDgvAjHts5b6YKUzPUCLoa17o5QBdG6LL2AH4B3fUrHr9p",
  "key11": "66hjhD99DwA7BRPjborMqUJrBkJbhKug2UNGdyZZ1cb95Lu2tY74zRhRwiEJZb1JVj2cGHicrS7eRtPAqENZu2sF",
  "key12": "5e7RJrvJ4T9M4s51xvych4S3T2t3ofnDxBpa6EAJqTnVNLTy8qUQpEEUpWwuQsfCJEEP9cKxxw7fr1pSgZJNRNu9",
  "key13": "3bHhqE1j3s1SWe3mSAnw8qqpR2X6s6YdhFnzhuKDUx8p3rfJwcqfjCnscCMkWCt8ZF9135aZDPuPEkQmHsNJEche",
  "key14": "2hk9ZPXYfGYeTbE8AHP9eeVyjZGNDJ527wo6eA1srSaVwL6NFWcMH7UNDaPyMogkCNCNJ7mcqEQY6jdRBSwknq9Z",
  "key15": "645HfCumViP4mzJtQ8C1E9k8UQiQKB9mcKiny6jNVo6BeqoZq6p4BUe2MaV4zQMUwFBoYZbJVUX8yKJskwHwoMKz",
  "key16": "3GbRGBLxoxu75bqcUB5YrxxFt5davNx6EcKP3nZEHaMmCkXLa1Erw6iACb5GGRyt4pxLSUQ182QCrhHphmNAiGtN",
  "key17": "zzc5jtin1hrcUEUv7PkE6QLSMbricDMCAiKQi5UmAHrD3HP5Bsg4hmzMYo5v3SFKYkNwE9DQQuG1rut71VfBwdr",
  "key18": "4m9oFTThRQ8tpFvs9CP724tLwfAQzsFq6U8UuPVrNJ6K94B1zyLazMuhLtjNSWEWS6ipmxXN1vVR6VGhcXdi7w64",
  "key19": "2tbDwxMemgG8vzMeiih2jK6roMDSEfdRwFwCjSxeDNkRmz4ZKrJ9dGMgFvs4hpbamPNCUdrk84LCzcvfAMPbW4Pd",
  "key20": "2Q5bBvnAra9zfZTc2huDAqiJrXXrqevpgsDj2XWStJQbaYXDGYbiiMREG7QPLMrvuKWCCAC2FHTRefGZHURC9FLz",
  "key21": "2iTEq2QGmeHRVbaBR88tVYey4DVNKQsbHbuZ9RgHKdYGohPmq4EEAax3NzbEJtMEioAvRgK3w67ydBszF4G82ao2",
  "key22": "4ew8nePR362gwyicy1tsS5F989gpWNcq5GwVikR3suvCi6zvxSQKom1SYW3MQucaFY2Zvi3oYHb7VinRDPMJVPxF",
  "key23": "5ZCqfNeto3oYxtWjafPkq7FZgTUQb9W24BUJQhzETNGSk4RL1y9NpFa5ssHito6b6Hbk1Gn7D4tEKeUthdHX98DY",
  "key24": "5JyQE74U8hAxYmJ55Z3SbUvK1wk22oqrfqHiLpRyMRGJRqnRmCiDRCraHguvppme2yD27fjxJEimfpHW2YNX7LsL",
  "key25": "4vcHFLL5bcxsmYCoUWnsTuZWpezTv4iAFjk5FigmattUxsi1GVvMqXme6JSkQA6qkRgRuux1tJL8tpbUUUt2DiLs",
  "key26": "3D4LoyFkgupo92i2w1ZZjrrcgShr7cVWAovYkGufHwcZts8iB9vvWciSuPMdD2A2EHaSvFAghLwqK62E73vVswUz",
  "key27": "5HpS1h7JJkjcupyRKz5wPHeMCpgnXDdYrq2BBQz1xWmydXVXeUziiYoeSyiWym2TDsGQJsbZw3aUuJVNeeCf8f7c",
  "key28": "3oFXicCVcbXgbwx8jiM4xxdSq5MsXiN6ufcepnT9vnnN2cEWxSEoCt5PaysuqiGAxtHb3TvU2bV1Q55jmsYuqQyf",
  "key29": "2b4tq5oj5zpGmnPCei3rKX1FASETDHB9QRWSeC85TdvX8TGZr8s7LJ92ButJD4MTenrvDuBWrCDa4nxBZJBVTHs8",
  "key30": "3YGLg4oePTf316WjKeodB6UX3hGjZutaBMrZpAdA7eb31Gngnvu1boMyqqnhiQwT1cEqYmUqKzbxHr3ovMcxVUQo",
  "key31": "YNSSJK2XirJjwGBq6BYG1PguJbR25HwqvStbPjuME1vsYM7Gg4YRNCq9t71sLM3hNzUhZBLf4svY9habcbXoirw",
  "key32": "2JtZLFcsjrzGERb9GnBEVUSpntkHcybHh9JeoAF49aLEdG41Q12gCrgGhRphKBLt61ipDbdiiovF25f5ej5TjiC",
  "key33": "5G38Hz3vt1A5Ap6y1DCLLM5w3XG9T7JFq2YZnQnQdJhsgpGE8QqpDgvoEu58h2Q5JRnHw3QSufU7p7KaGw1z3Utr",
  "key34": "BrurxwsAfixdzLjz77bJSVM5FAy7r7tRGpvFQsnugoTdcjhzTc5Vib1xcGEDnaoNiWwwhmaqV7vPfVZgHiiJgKZ",
  "key35": "4TyiY3rA6MFEpRTULkv5uvofVBHxuoZQ7CRtfqXihvQkCg1Qvghd6few1i9pnQx6gMAk2bwCCaBtr8yvVM5fV8Pa",
  "key36": "qnz9AmhxMJdgAKqRai3pc2tTCvhR718BQfwf6En8748U73N4rBqwNAHDW2AQR2dD3t7HHQVYGbJsaAQx5jLowF4",
  "key37": "hMRAh4XE8f3icBBMeVoCqVXhAXwE2ccY3u15Fd8u3XTouau2nCzHXC3wLrV5iUuGVWvhfqeRb66BtumzTRnv5wQ",
  "key38": "3XkPyp68D7EHY6gTRNaQ6pq6evU27nvT18cwBMi9rVN7atKBB7BxmKvTr3aNoKVhJJgQCyBCvnZoMuEpdW46f496",
  "key39": "3cCKTu1LJ5nE1iJVqLcrU7Rvhc2cnf6X51Dg6rP3tJvqSHRbUnRkgiUs93KeoZHU1kqcD7WEtgsqGF88MekJ4sWb",
  "key40": "k37CWp3VTkexkryiWJpDu2yxBA4vcwU2rdoPsF2GEqGxdMniCAKDZnKyBaXqSfJ9bNooFRhNRBS5iKBM2DU8dYJ",
  "key41": "CBPfmwrWS1nJebCeMugFTCZfaW9K7kWbSTdEMjbYtA87dJJoAvwYXtpo3k1zHh3KuAB5EhtnvS6ByEG8uPSoMDw",
  "key42": "2ypwZag8WjvqTiV6SeoZseLUw1BL6LipDpUfZKg8jfRBae8nGdBKRL66UzDTYdH51VzYo51LnFFwzrDqGcDibUP1",
  "key43": "qgQeYWGEynbQqp9ypHSHSr8FUW5Ue3CnNLfZybftNnFyUdBxG8kvXToD4B9pPP41w2bVbNRLj17H82wkkQ95AwE",
  "key44": "5xeD1rmn8RME5hJGkFciZWVfFyEEc5P59pP6goLHSK24qxRDfrDZ9X1BfwwvaVHxMGP3zwb77mu5vQtsd9oytiY1",
  "key45": "5H8w3wCzLf2VMcDjSYB1foUtCTkapkErEKGBHdE7rejQgkab9C8Dw3JX6oRjhcqSLPa5kFUqsW1RPKpJxoEkAZMy",
  "key46": "8aYLeCjJ6dH9XZJNk66RStCwWY2pqoDKTD4AVR2D8EC8jGTucPbHqzyKjSfxTHwE5daHr7fwYGVDXpNqnqFBhxm",
  "key47": "55fwop7hvxU6y25mUgcwoaGQgBo5CAyiskHfLCbb7QqVLNLcSZKHsc26DGZRNumc4sESwQQysQGEFsRVpXbkQEfu"
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
