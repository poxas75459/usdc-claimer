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
    "453BMsukWECmEYFV1mpKCgJosWQUpMaU3xLWoAybFvpgxE73rkSYfT98vRye7rfWmBWGGQvtPoku97AfG5Vg9oVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dKksPyL9Cw4XKm4LadyLMq26pdVLHW41UNndvNux5LPTKbSXbbmZWmRAA1pxeKdTVGGA3FkdfUontEEH1gGJ1gv",
  "key1": "2Sy5qeBb5dQrX1C4pdHe6C2bxTU3vk9K6uDjvbNe29dRDX6xo9tvVPunDF7QnLSsvA3W5hWy9mj6qarPr2S1sG4s",
  "key2": "4oZ14BfLRHmV2qVDvoGXdUMD55ZdDfdZRGGFJoZYEPbrzP7s1G4X8E8N1qdKuw5MMrwbjzBXXrbUzrAeMZXL9qJU",
  "key3": "4nr7R622TGHcv6UZK4mmbFUxDAqBmbbZ8WnvCb5uxhLrDzn52VABUrXVASM3abR3Zkkfr31PRMMefce87sj7Jq6S",
  "key4": "29gJHQu9NBvKXQUAv7vNXeNYKrMrQpsRZmK8KPqqHLmfnT7cGPKhrHwonvMkHGqoX8Hb58cUjJryeSKJY3mQJyxu",
  "key5": "233aRey2wnZWM5v8riJvPJCgvSadENSECCQiYa6huZdHZbxgUsWCuB9TYDAxmT4YYxKcRvkDnJjRV793tMWMdxfJ",
  "key6": "3m4pSLhF8vnsHDusj71sCqJzzZo24CYy9DFUasQQeXQYAg1tVVFRJRhPPNUJSvsV3iDcZdEkBSW4LLFZGL33rtTg",
  "key7": "5e9E6yn8qQcYvCzM6YPSh7Factud8K5oEJ39SpBdTzBV77NRwSewnREXCWur9DxoUTwuRRaWMrNnfnP1kWPknxH9",
  "key8": "GAV8e3zCYgXzkJDxe5n1C35whFEwN7sjZ6ZdETp89UR4iyV3fLaGe9HU2zBqKWuaYcAcWJfPRehDaVHK867RR5d",
  "key9": "3powhhdDCgzqezsNwnHU2m82SBQV52kDziMTvdQ6wPnDfT2t7e6bD7FZL8Fu8G3JX8FuYvR68MD5aYZAHsPGeBhe",
  "key10": "2RZH9ajs1Bd5SeWhvwba5HheTTaP7PwBjs3z9GCQWHXNjBzJAHgSdJNJ3E1qtbcP6vmifdL7Z5B82zzayQnGYPCV",
  "key11": "3PvL7uhdk4V6D84Kea8oTJKVY4mocCbYM9WGM7VzRdVgBMu917szskwLz95Wks91xpV4vBjt2BLRCNnfEipqwQD5",
  "key12": "5S1HXMRWR9nc2TLXJiKgw7Rf5uDqGmzGZZJSCGtHyWK8epqAuT2NBEtQFvJZyUdqtWYgc5QYvVjpHJLVJXKfaMMf",
  "key13": "2wn9B2fQ8ozRPjLj5mvUk3GXRFpz2soTbPV829sYmU6KVTTgLUBFVoZ5qjgcqiD1TMqVB8dzxiEPfr1JRMxdEkb9",
  "key14": "4JEqeApS7Yw34RTa7jh8EeK1PS6vKLBwA1fWJXwB11JM8wZrjywah89xfWLQ3chb9GLCAvWNzpYeGc7UT9qv6Nux",
  "key15": "4TAeByGx5aupJ6KBHuLVCahZtwBmXQ5YZQso462fvhox7y1a5SH77pMkBmRznpQSgZQWYfUxEWWvi1xzLXHCG6Rc",
  "key16": "2bzKKD7NkrBd2VRzddoxmeByGdyaPAG7WCusqHoaFCCAcf7T2mqT4sSLsmrETrgrbxzhyjVWGZ4KsCfE32iTmU19",
  "key17": "5oXmvsSK3oDpUZzWUbiHLHDAkFhjSrKz461G862rjxuqxE1m9mUrLfK2vDYQW6Pbx4yHbZy3jkGm4YTmzqHiaHpx",
  "key18": "3x9fFpeaWooE8crTCjcEupjB4i1hoU6mPgAobwEmhffa9tU39JTJrS3o7C3Vv1NGggzgmwkhqEctR1FAuZXcLqVm",
  "key19": "5haaxiTKDgjnFcY7WbGBjqrJz6Mrfxz9FmU1LeDBzQEybVAGm1uumS6w2Bmea6wbxHTvfT1pJWEgZEUrvTqMQZ98",
  "key20": "2yXzjWmsyFvHPfTc3AeyMPuj3UnrZVEW4q9FDb1oqGnmoUuCw5PVvbZpq5bgRvF5NNvgLwQijkSDsjJAfZK5pPAj",
  "key21": "4EYBp7HdwHSgcUrEtWqcKPpw7fir4LMws5aNPzRopLoZMd7GN3jhzy35S8nu1xs1X2ZrYwcFWTJ2uABhbGamXfG7",
  "key22": "3UYeLm4ZcPEnTKKPCxYqUqcx1xY6hzUb3trahuHrsfMJnSK7ALYKcUu1Wx6KmeiSp2jmzVDEsT3wQtr6AhN15mwV",
  "key23": "2AUkrqkqVYqpGjew6v2cTW8Jj1oar8XzMmmM7ajYNiiLcTiYH4RzoyuoCKyTRJaS9TGKZt8t77KRDKMHQxLfruSv",
  "key24": "2NU9yr2KVtDHNioZvz2e31pP1gWAawWgsvYBgDUWAurNTxyRBcBpMJZaSXaNax2mFqyTMVEB94QwW5Ep6LA2E5WL",
  "key25": "4FA5sMxk2dmCBRpg9jXGEZHUwYmP5rAcaY4V5yjBHM9WrTNnh8MxT63eGvWC6baEwK9K2nRZrNvcsGXHznvir37y",
  "key26": "2z1cMgQjqomKgR2S1Wt95qt4XTj4MfoxURhxTKeb7XkZjbmdNpr8HDMBtb2Q6RWCrT9FbX6GB7nb1fB8AH1B1sMD",
  "key27": "2mtYdZA9dAgCffRb7byD2GrMuvnbe2RsBKWEgM3S6EFCQWTJJbW8sqrrMHvQQ6KM7zWVy6kwJoYkToW3bGsbVPHt",
  "key28": "35qXNmJYrLQAbBSEndLpmGLE7K8k6EXHzHGBKkaGjxeZzgmcCVJZ222hScBhSHHpwR8Yym7uDVA6H9M1Puv3EVJ8",
  "key29": "4GKipNXnBuNHE9ArrDe4pStrZwQug7CERUc7v5V8NZJnwWa6eKXsRCdt9cE1RdbsGCsnjSDJU6WqRnBFX7PzXLCy",
  "key30": "5ACqbxTCyJgkS1hEVcW26witwuwXEUGvotGeFHEpQxmc1oWWh9yYXvmVWRd7pWHnfkA6VQoxFjStHj86m8ZwE1D3",
  "key31": "5mn4Bu8ouueE11XQzJEdb1ra2JqdKYr3R7pguuNQUQXLZhMdnJ9c6Q2UhMzWfYst5S46oop4pBNR6iAtV9q2Qwdv",
  "key32": "5BCe4DPbzPzbrazCg8LUTLVfXHqNp3pjYgxu595CBKwxnpZrWq5cabJw5qQHUhPt6EfgxTZcMvGc4iDXY1p5ehSi",
  "key33": "4icckTTNeA3m9qQX33EiHihQNDHqdu5jYgWQpZKFhYAqdDmFBYgDriPDjxDMguAeDXF5huRpH4Lo6j5cnotma3F",
  "key34": "26RSGsbUVbRffNZDDFCSdWD46nFGtex4Syw16mKsMiEzUdCi1oG8Tz1vjnnfsggmW7rRccBKgw3YbwSTFqCrr9VW",
  "key35": "ssyb94JDqdWBCFLrEVuAG1kjpQ3jHJqtU5K8DyUNkrnnQeheVsSgLyNdm5ZRfFgnBF3FT9Hz8VPq92JwhuJdZQA",
  "key36": "3Ffb3gEHvMVzdQvib1F3N1st7nCZkhwadxga78wDcoYcmoug9dDPk7UEU1QrTW5VDjbvwkownHRrwWmrUPaRecH8",
  "key37": "4mBfT7hDvykoBD9QWtp6GJZxzt7LzPadkP9hyerb2K7P5MNMRifKXKm8ouLcwkCMDtKLmHec4owyuhC5skUCVt1j",
  "key38": "5HK63eHPtJDxojJmdqiC3cu1X3wc1AVh38oK2PNuHXn7GKJBxz2Hwa37bGwuYeRK9fBth1fTLC5sYVfkdfiqi18C",
  "key39": "4BZM8yrD1fvyhfVHNHmfoj4CqFZ63UWkMADSZykKA2hXJHGE9f9qZtFZHra2XLKJd9yyWuWTJn3nXDhJwWoYqpCq",
  "key40": "2DuWQzMcto4WPVgace9znLcmWvZzL4xvJqkPFKk7cLkhguZ4Rua3pBuWc7o38m29Gkfif8ykEts7e88vZ4uPnpLC",
  "key41": "4nwNCVKiM63CSKmPsMd1nJapRtFRGe1uiYuzTiMzMZA64vCiPYsUXYqc3aadaE57Xzic4pjvybHu19oWgFi44V8D",
  "key42": "4cMFDHhUWGHxpU27aGq7fA61dS99sqxNDkEJDc5mYRE49V4c1r7JoN3qYmes7h6UMDbQ6afurKfRYmQWNGzgey2a",
  "key43": "3K6J3ivF3D6q2A8kaECseUDXwmBJ4YFzoD4zxV4bSPRyAhgWJeQC5qS6BiVHdrfEsiaMGAttVpzzWM8qXud2tqwZ"
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
