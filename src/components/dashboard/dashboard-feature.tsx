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
    "4SkFzW3pti4MKSQoWC9ACQM17GLEER41fPdCSnPT4nXMhddZ17bug2ZydrU7qwqHk2y5ZB1tZwJcHuXfvz1W49U3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "471M1BiYdBLvmdU4LHCEY1egsSF36CM6YBZjemd949qCx3vvP1pFG9YnS1UUbzs7jFukPAN3KNuCTxBG2Leciv12",
  "key1": "5x2erbAmK6CwUsAmJjgverXHJrrhyQ6gY8XNUGyEUEsojxaKkVNmdSND8j4N93iBqbtkBW8NeEnyi5EAbcZH9YDJ",
  "key2": "5qSjw9KJA4MZLDtczEdQfGerezjU6aUu43qVJwJMB6nuxkMc9kVjUgF7Kj4DAwAH1JVN1UPuxweZJqgKsSRbMCJU",
  "key3": "5w1EQfkoePSJNVDDWMAUspfKkwUH7kLYGj7ucVs49V5eEVZGu78rgQ3tAMJnBoLuwpPB5kBUuSQtTmR7Zciv92cW",
  "key4": "5sZZTqcDxpPAfYjLwLCYUQRvuNotrfTwMsDU3nDt7cAB6HZWatiDhKsqFVtKuh4346tEWZ3KGA7rpYpaJ8xYEYaj",
  "key5": "Jx1rdbsJpE1twn7Anp63dHSsj2tzJs9RV9qUqjdwJ5uUdggkuooYLExiuTaB72ho7QgAp9oGgfbF7Jc6i4QQv2Y",
  "key6": "2ByeTjSpcscbVA9m1md71agaeGK68omefC5EGZNiF2vVg8YvT79htX6sp5Uv5vDfGczjwimGu5tZd6YzYsbgAjE",
  "key7": "3eMkcdg1uNY78GKQY5z8HVgqdf5z8roQF11SZYfLew2ans9vXox6gHyjLpgCcWdMhmG9Z16SCoHWHHrgaEVHUWDE",
  "key8": "2PCK1JaxRr51oMuUBqR2J2hDRwsicBU7Kd6H3BJY8jFng5dox3FTCyTzy2vyRdiTf3hLMUkogbXkTdcsCfK6xJqU",
  "key9": "46yshABySUCjymYJMKbtpFLxG1KehZinpNgA4U8oGmfJuCtvZUsVBJ81Buj4PLPuS2xhv3uDCGDS9Ac7cJP43mxf",
  "key10": "2fyEQxg1r62TCu33WgU3aCqXv2ZSJaNYr86bTu6eJpiS9Uxp2gB4q2Pw7fsBVjbUzFgEkdNzxzjUjee35S9rvMsV",
  "key11": "TNUsTSkyauuBCn4ubp67ACBNy631YHFiVSAkgTzS192yuRJBL3x34c7z6KB8ra4UKKT8b35GE5kr4AcMYnaLxma",
  "key12": "4i3vfKaBfvprK5RwZP999kBU6MmuuQxYdq9ArRm8LZ31BDxa2annPoQBdKg1nGNp2roQi97rzVQvyGvKANKyYtSm",
  "key13": "5Di8AHDU5xjzqYnVe79Mz23t3enMLWKGX3Cbv36CQZao7yawk76Nm97EVVKCrZjZ1CeKUVrT9PSudo2Uf9dv4y2z",
  "key14": "1QNCgu1GmYnnur5pzKXjcfY582m6QYkZFAwDU89DFrzkmSUAPtvzR6jineKDfNcNMwUTP7NUU1kw7XGt3SgBvqX",
  "key15": "ogRuhS7mzaTVqnMVFCGT8etf4bNoxv1VEsQq6rrsXEexYDDqaDBhCRURvEYB3McanSbsHRxvN6DRxNqQFNGt6xM",
  "key16": "5P4qxAVjXZS6dmJbkXDTZrju2yXXVDVTUaSkPicE78rf97WDrNEssvEqkm299ZWbvUxhzKUvmaikQXL2WWez763U",
  "key17": "4S8zbrAQEN9XcEyETyJsfJVmgDBUXvYYkTPdUdoqKfrXPSoQwFp54CejitYpiGi2uAruVjqAgsqy5DDQXfNUL7UR",
  "key18": "5JLRKWtvN9qFNj4tEsZifeu2BA32tuwQcCd4DDWEg6mwmaingFN2oB8V3gz5v4enErmi9MHXJrn2i3miH7qPb9yj",
  "key19": "A8TaKgviDDCMmstsemrnQNe1VNjS2bjzaQpmrRiF59wJqSgERzrwZ21CiuYzgVH31zj2QmadpcMFBiUzDYxhdpi",
  "key20": "5BBthdkBtvTKKmXdwU6jLEEnz9f42zEe7zmGkrzy7mQSdpfuwgR6wwxfGSfqyinGBZewKnRF4h6c99mvULeeuDva",
  "key21": "4kvz8ev3PKQ2PnTrYihLjqxp42TBh7QMH3xwgMFmxnzZQq95JkqBAQA42DVyYBDQBpUT45wjNgfCDTuyaVBPnGf9",
  "key22": "fEXCtYNsKsvg6822sZLAKM5vhYSt6t433o1PR4US7DtyeW2xg3H12YEgtXag1JKdXS31gHdY2YcpZfP7PXCCfuE",
  "key23": "4JdkyFjNyBdTTJqLr1cBXtCcd1jb24hYjYkQ8cBGSeo51ZTmoLT5vqBdApqPGwcsHymcMiVEnfqmTW3ATjJrcuL3",
  "key24": "4thPEUDXtabNHoL8YRnaY8fq9nouGakZiCStCPsGoTnL8pbfoSZZmnAPiF8xdM9hPNjEHDYQno3Mg1rMdcdVUcjR",
  "key25": "33UzGvnozpxyU3QL2AxuihuZGrRWbygkMJoYakb5MoeacDsX4zVUDSb9XvtmzRm6VvnoPeq7eVAbBN1AvRMGohyA",
  "key26": "2ZGysYoayKTnTWTstArbzrk5A5JvurJFYm193acmhCz75sx56P6PZhDQc2a9wjE9a7pNr5RLarnFdRtBp7JPhjNM",
  "key27": "3DbqRWJymCGg4HMcU82DNgB3DCNaQokNdjMKbQAF9dRRT1sPkn3QFqWC958A4up2FtFAJS8J9V3dhvVCjs47KQeB",
  "key28": "ovB8TJuCoFpdMGcp2Na8bcMgF9oyyLQZ1fxeDT6zf8pWCLgXgoxfMhWTkxJX9BMoVmAW4RWn3rtMjU1pQwst1ZX",
  "key29": "4MPCuM8q5ye13JJM6EdGS1nDnML41wWbwbDpMgZ5qhbMvrGvi5LEejPB9qoicxpSJmtuhGHesQ8Q9GYYrM7sQQs8",
  "key30": "4kvr6W6tSoNEMLeJ1Fq3bG1TR7U9s8GqDa1qRvrGbMpzzcCJ1AQc6Yzre8zPm4xw8WCWFqCL54Le1ueWD17ZpPMv",
  "key31": "2yCZkTDX95ca7Vr9RGMVKPgmbHG7K2hV2EZDmVpKxmWzzr6orYX7oAko6cZVzz6g832arvYTDaYSRJAtYPL3bmnN",
  "key32": "34hNFT3hW8o68fj9pHA6d2DdeeeVc9xkKwZvQeNQHahKc4KJE7meaB9rpmL7hSDpHpkxf3pLqwbU3Uu7JNze9XYu",
  "key33": "45Dy6e18cwMHwUEKQ783SgVHKqdicYQR7HPoLHptAcqMGQKDqC4qvBV8nsKfuLtLvquCaMkGNo9eTiD8UUFbLJxK",
  "key34": "2iw4uMtxr6N6YDMUb7nL4vYJjo32cq781ytZjhvjE2kJFUPQPTkJh1idFNUEZmC7DYZjWxM8aSWtZWYPnTWNPCNT",
  "key35": "2Lx8D2yFQfGPPRrU57T48dq5VbHyqyXpquJbAaWc1eUWPVf6ZVdmXSeduQBJsQhe5SYcto9KV8AgTF6H6mnSUJyc",
  "key36": "3axK3aj2Gb1MD6SC3ikCXoYyMGa6131R6N4F5pRkwNeur54MqTJ8RxZKN2urEsSfF1gXxjTtsfoNHTe1zy31Y2id",
  "key37": "4n5AQcZQ7XYrBLPpcJWMfs8cPJweshVEP6DKJnaMutSqW8qv6en7M9HvX75xczYf1qjDjFK32YJqg8vCX5gGwU5N",
  "key38": "655sJ1QsWLWYBDH7n4yARy96Yu6AXMfSaZ219f6ykQW2GUYgMhqjp3ZAE3JCYgqGwjKzBp9bv5q27NzRjs17Gw4Q",
  "key39": "2n91GyLKTWrJE6NNpGDMrsrNNuVJ5bGyMoEB67Ehn9tsgJxaKAJkeghHHV8don9zXMfb44NqDUer2KH4V66a1JLL",
  "key40": "57gw8QDCz3QRGK6hpiekhJL8Yr4BdZgQGSpCskPqNdDEGVNugzHEkc9yWQek2PSV5S6iNBND72RtFMcNQkh76nZB",
  "key41": "2uBQyqoWiHvuAjcK5q9dXYL1eZoBCnzkkwWA6fG1p2CJXjLuXsEEWtKjMLocBPS1djSsqokDKZzMzpwa3nUnUE6b",
  "key42": "3dxfieYFbkkYWxGHigkmWTj1CVxbWHB1TfAV8n5tCBYqfaBJZo4ePagaKrKVtceZ92R5PdNQc7EJKbnxZHfjrrpc",
  "key43": "2gCFuCh5xTgMYSnmGqJq6URZ7qKV8mhh2Vy2LaFzgnKxfp116efkzPsMUhFwhDVPXvHXMc27vEbg8vwdu71c8JGj",
  "key44": "Xv9rMojFpjXnv8WCHJwPfs9pzzAtPLyLc7sMCv591L1nadvvMnLxQJUUH1RsLxDFMryeZDyEeDicmTWac4smQku",
  "key45": "2SPdXapsHMkxCgeshfn7KEEgR7STX71UYWBy2m6p7kMJ1zFkiMCtefV8TRr4jHBvjX3aL9q6jE6EmwMdXxHtyVD3"
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
