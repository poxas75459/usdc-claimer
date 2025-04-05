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
    "4NkavVi4bKgZhK6eTjx883CfrmvuTxsqs9XdBj2JJj7Aq36sbfXDRSFwqtrRqjga2hifsZZ9AD5magWwyafLogep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pRJY4MVdeoQdDtBZ7ZFmj1tCco5s3hX7ij8hNaGRQTkawKZZLQQtTTDjKAy2MBLKYfqbi7W4HXmtkQGdbi7M5m",
  "key1": "4GcobuCCvW7ZscH7WCBjdsQQBZ5Zf4N52M13LtVFGX9cfM2Er4xvJG6UHXohe2EnLv4SgpjW4mDrSo8FH64sPgTs",
  "key2": "32PduEqTahuJZMvHsSVaWLQsxN8BEKeqTTTc4DQLSNkNEtB5rhXdxohPeeRbb6VMsUXG9ku6y6pJStFgmER4htfi",
  "key3": "4v5sxD8Gg72HtZqGQHXSqGoD5SnVLxtNDDcwNB12upX36PTiwv7fdVChMq1ubDg7HCKz5SFJ8LWdFZg5hv2cuLYz",
  "key4": "2FVF5zY3SURWw68sAKcA3ERw9WkCibZBS1LdsDxPbpZZA2v4TwLsHae8rubFxjHBpatXFYWgWN8apdMwsizHDgnQ",
  "key5": "3d8uvFx94hXx8kqBmjr1fy5K2iWHZFXUQg2xxNEDhhqoWmnTdkQ74zWcZN1xKDxAEJaVSzGzQXRzhLB2CZXpdqSZ",
  "key6": "4fFit4DwTpxqEcyg5SbDsnDehyWv5Yz27Afvi5dGFzP1hyWRGePkNyzNwR9gcuCSVZ3hXaS8etbjBFx8Y25gZDKH",
  "key7": "n1zFZmUdAsmb6o9xn2PBk2Rd3CTdwbFwnBn5KZQenvVFWMVE9G3rXBh36YvTF5yDw2XWwBgpm5xD7UuB5CWVM58",
  "key8": "Hq9Qad1fq95J2x1Fro4VnW7aRwUJ7eWaTtoTr2vLtfMTGihYrneX7u3WKpocqg6dfwP1V5oEcPPk3Sry3JHPE2S",
  "key9": "AGmXsCCphXsM2PoDHbXUd3yJLmyAeZutdwec4hTS9bFkVRyacMtx5uavXQavVS4GigcdcHm7X1xneVpnEA4TM6E",
  "key10": "5ktEtzpTMckN2WEh6Jd22mK8DjgXuQUaNBNx4874dwvaEtCodrKWNADdX5MAN7DcuovmcTR1yXw8PbbhW3Hc9iWY",
  "key11": "4ZCDSsdUJ6u76Zj5gSz3DRs4BnRpSzj3TkHKVVDb8N52SPc1wHa5DZSQoGa2nzsRGbpkgNB2S2fdwupKisaMyiyA",
  "key12": "3c1Km6TopTyrvQPpp9iVS4esiUacYMs5UybZJpnDwXCWiFNbZyen27H4ktQvUPvTrbNDq2NUC5Z8tp1t766j3Qsq",
  "key13": "5n9i32PHUBc27ewifaZvXNjK9mF8by3RhvMUDvCTRRgfB58FEbJhcXN5RsRvuHWnzJsqtAQ7Mi6ZiyP8GukdctYK",
  "key14": "2h1YzK8ib2B8ksnirH7PES9v8kSUcXLP87yBm18h8jCpsZanippq6beB3nC2SVGL7Qa4fWNDwsLFiSuyt7KHzB52",
  "key15": "NPDUwtKWs9n2fSyH64XrfjdqgaowLquiqJp7MCJwxeMdVnqLndJUnCSk1h1zAVqutSjSnxx8XrRdZT1ftzqbkF8",
  "key16": "3ZNhnRZk7M2vjKEjL6idNw92DmTXRBVFrDScunManMaZvFYosWGfJaYkCZH2QfDNohyCS3nGLgip3UHHA1a2feef",
  "key17": "4VAfXfJfFjs3FrfC5Hq7AVwSmj1SyK7FhvvQwMr6FzsQ1kVm5rGX6TPy4ehZG4ACWHZanY5krN1KnBhxyXsqhjDz",
  "key18": "4jai2UQaWS9tc3zwPQKfftRsTg5u3J4yz65VcLoDanjrzMAQyHnWLcduTt3KGEpg6aExDS5CmHF4C3pc4gEXXrRD",
  "key19": "265ebhMDHpqhNHSrsTS1p4SXAJtdt9k5kusUPJW1ye59yg7rnkecShEzkwrcvgu3nDQP8Yv6xzUgx6pgX78eEZqP",
  "key20": "4jUoMbZ7rX8ujGraNqUh9e7YJkMu8mmcBoKFzvyicwZ6Xse59DkxHMcefTwL4qJEPiAZ3UzNbeurPwtoqtM93v6p",
  "key21": "3cUNjMBL7PVNDNyRXG2wGBMKRbD9ZupUvbxiMV8ph73EaMmENhsaChKqQtW67YxtghtDen4qAxJFhHvSw9q83BnJ",
  "key22": "25UNd5996kuTmMwn4Yw12uiy92d5c4Ymdx77QvnqawS2ooBP7WJD4sD93Jkbo82h6ithNsP1NWPKFTEhYgbT7YTr",
  "key23": "qQRiUJug1jNp7vWQPBzUsWWjaxQ9gucJXXhgungAcQ2FxtK7yAbRJf6R5czT9t4kgFnKCYTQtFwuxGrSp3aQbAU",
  "key24": "KAu27npQ84rDZPhCkjtS7UMU18dnprJi8m1D769WuTuCAgKUCckcBRrh86iyxemV6M5j2PDnwWpqMpTfyuK9ozq",
  "key25": "2PfAMjMybZy7sdHGSYGyqPqbkqNKQjB43BL5Uc6DLW6GeuHPYKabi8ZeHxahNXFroVsczdbZ1VJ4PRis6m3nohXW",
  "key26": "y1BjqmK1HQKB9rBHbTxqq54SRxHRBQBfMrR9iL3rVKF3Sy5X8nmeNWAzG6N3mFbGQsj8rLYz57eFoJg8ZNvpsY2",
  "key27": "2osvUKiGZkzK5g2SYthZxQc348qHNMJz7aEtc1GZ7ow2XYAp57C7swZMx6kRYFM8btLjSUcmn3Ma5jFktxwGNrK7",
  "key28": "xRyv2xktaUbJyd98GpoRnVrFuSKqBGuZ9Ub5Yq3u98QAKvEk6VUdmo5CtV1kyPMKsdWggZdTH227LnntHGSha37",
  "key29": "56mxP34GaGjzsFr6bcmqK5ektuSZQ36ryVSHKuAsctSP7ST1i8ym6eCP5ckDXXBvoopEebLsnbtAu7rSHGkfrv1P",
  "key30": "5XDYPbc3iHgzcq97fH9jyBDScnQTzJgNGG4xBs5aa1hKHJ9Tb2sBeRBkrX3pxxL1c7cpaxL8Ecd2dsKGLf5ZFLDW",
  "key31": "2KobCGFG2YzbZvjpnKtxzrSHunS1QQoqMNn1CQA99Dz3gDSRaog1aCb9oqKc9ZvoDEp98Xa2vdUiPB1K8Z4Eirhf",
  "key32": "4NgEawvsVCb5HbXXekp2TqmPbm73NHss5Vzuc9goCFVju5bAbgPZEYVikKLSrXmV1feFQR5Z2sr8sgTdNZSoGEVE",
  "key33": "3Q72EeDKfTx3agfLPUreJmx7GSmeNCoLNddbF118g2dHKZWm5D8vZWGMQFJetvFo6tEG95V87uJ2fbGLZAdrd6jL",
  "key34": "2zmpnhJ9QMwP9qHpToTE7tp7iJL9Td3Pi5Y9JoF8a5nUymCfCXvKoi5KDoeisjDf8SJ8bFneC54TaVvHEeCntDHv",
  "key35": "2mqTA4XerQnVdrDJHJjhAPPwtGyrv2GfwxadVQW5vt7WM49i4QcDFbWTgQMLiiugNVowBViKS6Bh3zA4U99SwMyG",
  "key36": "3XHNTenYeYGirnenw578TmeCezZbaQ4TGXL6gk7ajCTSF2VcTyEdTjwxpxd2NS6vHdKosi71pPB3jbgNtfwV9dXE",
  "key37": "3KN3gDgv94CTXz8XdHTZ1acBRcQY2tuTsUCP6sJeu1LFyCVdtLetxnoDT7sHsTeR8Nk57VYGcXPMgTvUhJWpH82G",
  "key38": "3pTa4VJvJJiPg1zM2pQJmABDE8bSyRXzeSVG6fmFjCgLuyntFsrHaWSkyKKAmquqWijf88qDgqEsU9H8LHV66h7P",
  "key39": "3VCyco1aiWnmU4ZMSWFaxLuNBG7eTRcXPwdYfFnEeHt1q7mzgkyizN7no1qCaAraZwVxqdfcPK584zoi947zhEn9",
  "key40": "2fRotrZoLm9vU6iuiFFvgJeWA4VJpEyL1QhvqrW9SMxTNKvAYcP4TYCcQqV3nd51gqW5vEv573HGRpaYnUqpb41v",
  "key41": "52FUTRTeZ6pssyqSJfede8XRoSmJUvKbC47jfZTduYRD7oXnvrxKi4Wi4VEZ8wrfNLgUkaGjyLfr6wYV9DdhxdRv",
  "key42": "qgYLvC7UFrJNWtYLN5VsJz5NrdXcKQXWYw8QAVs1M4ptWSYqiWmpp7ADXqq3XvFNmpQUvHKFa78vvnbehJgr7uH",
  "key43": "41ZMQHVCUnok5fxG6m3CqvXHqVxYLiPhj45cusT4to6f2KL9kFuz5NC3S5UGZATYxqbvvJKzHU4NrRJeKgEeCVcA",
  "key44": "5m6mEkUMWNcQMhQp9qmpHgAjYbDwAvAhnuMFhrhnfb1mycXGfkx3rZdnh4Meyebf3F1YKgtSokXi6JCtHrTtEr4T",
  "key45": "666jd2qph9hRx4XtDRpBdYzWr1MyrTHu1g8boTjec54QhjvLTVG4BHZvxAaZjMTSqTa5HYMhCQdszvjL6J3uBvT6",
  "key46": "43edwKTQevNZn7MiwPe8jAABuACYy3d7FNqkHWJG1H7YonFuYv2tpr7yuQVAV41KBLVQ5w5SnaihjHnJMtyHBtm8",
  "key47": "2Lvm13jVh4cZcbG3tMXopG3b6YJiKBsLVVEiisM6d69FpMLrbX6pS7HM6o488ueFnzMaz1NSYzA3qgnmqvpJKoBU",
  "key48": "55ayZCDkFi31xTEGRDALnUFbDbrJtcBcWzBXosjpirdsPpvxhg331vF6FejH1qsLrTfsFKr7MmwZF4ZcZXfbXerU"
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
