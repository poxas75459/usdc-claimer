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
    "2r135suBfMBBiY6JA7pjQrGeV8hxBawQtpWUrU1bgtZcaVDVsMT7EXgpd6VdQkaT8SKWZMiUkD1vJfyVKXvFUgxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xzm1uCcybNVqHs4Q6Z7C41dgavB9jCQMepd1CnMHE3qdmq3RXbdyvMfZAuhPGo9kC5yWU7ZuTcceTFYLJSwGThT",
  "key1": "3uHg4EfkoqmXdvkmtomBi4EgJRKmVbyT78Vbo4zAzXCDtZmirSin16kbR1LK5hg8PcQurCDrusikGXwxRuNuKjRA",
  "key2": "21d9vqoPZ9Jny4pdAi5idHyeFZAa6kkozPoAK8zZWNkpSzJcdKoznm7Gr4t8Ub9ATvBCA4M3TApnvPKyY9XwrjCQ",
  "key3": "pu6Z64ipX649vMWHAhST3iHSxqorPzB3neN3KUANSjmTHim9DM8JdY6KK2ciRorucZdMnrUjQgL3XofqSxgUsw7",
  "key4": "33FJHxjEcaMJvCiMYXvrYsiB1RWQE1Gqg92ZbtLbbMrig7GGhUUSj368Mm8f4ncLcATj542Ec6mebuRfuwJ6jke3",
  "key5": "284ZevcAHwQU53kWZw7CPCi6gwmA1KFLSCAZygXfwJA5ZwGcpy3gv9wbkonsXN9tXHY8pLbxMof3onyerBpZ1fFB",
  "key6": "2oDDDuQp9ukp5x1XEHUMmJkSnR6mR1PSFVCHBdwT8p6G9Vj3nSw9vtCsGi4k17gUCeYzsa5uP8fEanAK9fN1qQNR",
  "key7": "2GCxrsC7TGZodkA8MvPG78TpQFb8KAa9v3ZxZR9vZoFeE228neNTGVsTAABiiqphnuAoat1RDeCNjPRaSu81b7FG",
  "key8": "3TjPmBq4bDEAXCMA3HTp4U9TdhTjmSFaSYsZoLE6tUcrmLSUQTRZrpJqLabzy2cxChuUw4NqyrSvis91TbX9hmLu",
  "key9": "3zBJ6TB7KqVDCKpB33UZ7onrwJn3e6hKmFTmt1pKDEBE2s3nx4yMY71B2Q5VeLWey2B1m7Gb4gdWGWUFR2T7jHG3",
  "key10": "5onFnPRH8TuaRVLb8rG8NuqnUmZADBHMUh3pd78q7azoHSpV1p3vAS3ayU3UmFTrh2mCELZ88ALBRGA7UAa2dXW5",
  "key11": "44cjAXzmoJnvTymzY54k1uoeyWkYgxyC748wTSGfCdjV4YkRJann9XaqfrZ1yKMEyJtiGh7QQk2rpz2SZanVMXnn",
  "key12": "mMEPU8hWPX1yUUmCfpCtWMCTv94Vd67sPwQXMrPwgUKNmQ7p5NEke1fJBmCgUPM53v5fMnMCWUqk2HZjz2gFHE4",
  "key13": "5nFYnSgEyuhGn35163HUeaownSGwhRkzwtywUPYHZ4mMaNqRPPyAS7sHWvTj6Q7Wz3w7hRBNmVTeXPfesYxKASm7",
  "key14": "3wc4LdMSkzLv36FDHDrF5Y67LinnrRups5tJk2aJkr2yUJTQamYjPjPJLi15Uq7b1yKBPkHcrZZKpDf786yhGLwx",
  "key15": "3EMDuE7ZWWAqB394CzUe8MrKW68fzpGoGNxFvQ2yveBC2zAf76pDnZPuTps7LRbHA8BtkVB97GpeKKVTLNz4Y1vd",
  "key16": "31u2ZnagtNmADuN1uNnG4MkwLxsSLxLyWkosiwARjqnQSPNkskuTPmrocQPGv5r4LQEdA1eDqYa27anuPXFy3pe1",
  "key17": "4QRgtnRhvoXgGDbDrQwWZ6sCWoJqGKnorPbiCkGJQvFLRoiPmkhXWLMkNovyteahtU3FVTVg84CzssEp2XGd7ZWE",
  "key18": "sxAqQx1qKut9i5awyFSyNcCaggTSwhawCBKBCcorX2p5A54V8NR3bibirgDtpFw5qKAFAFgV4RjEfx7eXTQG3gM",
  "key19": "4wNdQkAmUfFUZUMzRZ72uFnErpEBqQcXgFpN7U6UrAERZ14EU3TofL2iLK9v2fHLftDzp9FUcivNNDHYEMtcGDq7",
  "key20": "63iqKzyaX84xcMAdYqzmAXZNdzVk4WSPvjzwE7mEMuu5zwUsF2YBvcvaib3Y3xzyPwHiZsymouTg4qJM1hDY2d6p",
  "key21": "2AB3PbHkBJeptxe1e655hVRtX8vQmzm8vkQ7cC9HFLDdG58ckD1SH8SvNS1SV8Jzvk431ZGZNexL4eJ7Z5E6jrtb",
  "key22": "3T1oQ4mRgMUHdGwNzhsPZ8386mGvbyTVjW5nc5YUqwBgFKgnytSw4bjFRCpo2XNMgrt8QjpJ6UyQmUSyuykTyJP5",
  "key23": "2tR66YK8Ur6tLz8y2wbnnQbNnkhesP4eoct1BQo9YMhiwrWF3GQwSbC83Jyrngab46Ctxz7qTNGorX9bKF4Nb6Qu",
  "key24": "3Z7ny3TUDQVfBakKCpEvzHPPaTqKLgdBvJkoXQJz6bCxnDwXAEqmdK9vy3fm8oGJjD6YfMnAqFDCh7dX4Jz3kCfz",
  "key25": "GidbkXGeWZAy58eRmHi9WqmCE2nVZhbWWHPxihZUA2zG8W9kzvyUpaPHTQSWMvhicQJorQ4nYjo5VRxPPwo1Yg2",
  "key26": "5L3rt1bMGjdHzKv2AxgDZVLVbhma4LSZ6BVFXcLpQRnZrnfSdY9uHaweqbraRvWxqq6QdfcNXDq5f7iPdKvQv8o1",
  "key27": "36YV89drwP2ZmcMRhVFZyexYFJwxmVUjbMDUdNxJzZEw6CfX784aXo3ewpMkFu1N6bpcGygfv8PA2GJwskPuZBKW",
  "key28": "4UNB9BgjFTVd1rBAgHvALaZkqvycSJ6FMpgftPKNpiGD8FfArp4bJGkCk8QFWhckDxCxBEeZ5EAp2LJE7MUbu4PQ",
  "key29": "5V6ovxcdn1DVQmWrxq9siLYgFYyXUCXB2zFxwe9zy8XksSxzstQ5GqRxTSkDqwQ5rk38DXRFN8Q9Yy8XRou9UeG3",
  "key30": "37ihfjQ29ABrwNHreN9jW37tD1hQuzJAqHgyodZpGWs3bmdP2hQ26T6wKEsg2YkPtZtXisELaTjM81Sipc4oAfZM",
  "key31": "umDhLzzc8rZ9J9HRZ2D2C47aencc1fk7ju7h2qFSaPiKtqw8t3fDAon522UicBnhEs7qi6vJ7bVA53a8ARrMEkZ",
  "key32": "3AmvvxZiWDjWMR9Lsj96uGD1tb3kLfcVonB3GPfpMwK4DcaCq9csCMM3JHDEQJBMiLkzfhHC4hXVJvwraYX5D2pf",
  "key33": "2iMP4499BdKWwEsFJmWof8W7WxZQU5EYiXmM37b1FE6StaoTUHSoCDzpBekijmHuzTH1nETf76kAewiJgaZgvC8Z",
  "key34": "5qscQZuLRBwDmwKMtfxGwTTn3KcYmGVHUB1qCq8uQ6RzWcEYJAYcoq8pK1FEouSZmCSZBEhBqu8R1VqQaanr7E5a",
  "key35": "4iEyJq6xtiN2YLvVGYeJLBNY2FreBUSjzGfYxAvE3En6NiJ2pqRYqpNkbZk4xHANtWYip49cq4FwBgyZgfGmyCw9",
  "key36": "65w2yxmhS5BkUitRDRtZJjCo4QQ6SeZ4mLbZoCZMHrHsju97GB5oKrqUtW5qgye693HjQkWXpfPKzhARCBn4Mnvb",
  "key37": "5P7ryKmffWtWdSnC3ucNXCSnZGttPsJYUVPx4AX8BN8Dar46jsb76bghgmCuPWisxyAKXzZ5Y5QTqtq6dLDpDUeF",
  "key38": "5NNNe9sYS633exNP3jjxJRg8rixAhVi8uWforT9Be5Dv8ciqVsQAMF54dgMHuRNTrQzpHk2YB5vy8V9oef58RvMQ",
  "key39": "Q3ZpHQvaUYgPQRDseyvvuKh6t98Xjwr23KQtFBBRi6Ns9FCHhSt3m5fxfoL9YsjbCKazSyBsvwbjvdh1XgYEdKY",
  "key40": "2hKCFHi5JGpLSKAegqnEp756NrWbGYYpnhcSxapbPwS7yFBFbgYnrqYXBRo9uEZV33STF3QY1eoiY3xXPys9L9qP",
  "key41": "4u7MDTpWuYX9otNgisKvJ33kZeyTiYjnKsYQ4tXqUiQT6cv4njdBR3z9Wt5DZ2g6UyRShfwnhMGP7tXBMVfnN8b3",
  "key42": "4QJjmvkUDm6GMysLN6YErbofZgdi3dw7kpAarLDdzBqC8bVi4ShM8ShcS9wZCViu2T2BvQbmcX9XVrevcHKF2ALT",
  "key43": "5M11EmmgJgyQvmAZVujxz5CKYLRCq9VRTX4Du7Mzpb5Hw6b2X8R5tBN1n7cU8tnRTSmfRsuhXfv81D5GRNDRYooG",
  "key44": "57P1aTxy9iyUrMoNkoiGikdKzVbYbbPYCT4v4JWKJktqFbK3oVny4RNa6er84hoZUxr7DBMdkV5XVH4ZmLGGgmgC",
  "key45": "e6dsKV3BTV7U97PScsPHzo4yRMgRDWapuji9qqeySyGFYZHA7mumdwUbiRGThhtwuAHhqfzDXsqg1EoQiciZK5x",
  "key46": "2KzAFTePx8iSJT8WhdLMz5nzFEDq7ej7bgPgLXWQ9krw3on4SDYe4xwiaUXrSs3uULeq12CxcBKnA9HKZHpde7o",
  "key47": "3JAJdz9rjYTxgJ9nsse476TSokwnB43cfrz8J3SxNdCzAdXGjEpcgAdJzghhKHyxFPGpPDdyKQgaKjC7JWsoD7vG",
  "key48": "2QhXSMhFNQK6ipjWL4psDAEGNv83h2nTNYc8YaQddpX6CK5uBQZJmYCeerpr7YmAiej5EFzeMRWQNxjjWjiz1RcL"
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
