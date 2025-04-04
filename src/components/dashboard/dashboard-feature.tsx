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
    "5yvZpQybdNiyELHGt59VGunXjYs4TDL2AhHEU7sq8F33S5ED5PzJZLRQayWcN1bAAnnPaKbkXAWMVw7M1X68oQHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cktYNb5HnbSr81oLYzvmHVvUSsSnbLG8MCB5qUAk8DuL7fwk68oDt26MFHWRqVDy74sFXQbCGeUo2dtbDJPzZEo",
  "key1": "3SNxheJaL35arDw55gAzmDp85Qn2jviS5pxeSETsejmhJkETGbZdK5UUepmBPZykVujTX3NFjJzLtueQ2DUErjgs",
  "key2": "3VgCA1RpN7mMy1wJNcpmN9RRvWMC5XypoFzVtV8SNjmem64FZL7CSLEq9cqhHfJEnAYUJhGj3garqQ1k3Uf6YdHt",
  "key3": "45ovbGZWzWJ8cYfuUKWaZAdcA6kTzXvYkp9iU46AFqvtRAczCDHcA7ErWLxX9J8biVaXVULDawdr9RmGzqyHGm2K",
  "key4": "bz93KSy7ZvsyQYDNtdkoR8HNr9vZ7ZDeqWGVZu9xBAyuNDs6uFB8Xa7XRyU31q5AUVpyofMtBputqxdXjYtH6R4",
  "key5": "5gxvkqkfXpPFr1JqtsEGmeVePUs34KnHY1B9iPYPUdP5Zb2on5hSkq3Vwe7hdZFq81zH1yJkz6vsYCgdUkmvD5NX",
  "key6": "9FewtV55JMBV2knohNwfadipjFd1dB5pfFduQ6aiD3gMVewZhNpTYBgVTFd1hAL8djBkHsUYYsjat7ik9WuyGr4",
  "key7": "5pfysS4WqKpSDEnv54q1cshzyDSZHPNQqpFdme6PFYTHsffDgB5DUVwAPXqfXdsgjPvun5783t549ddwNDUrBpqC",
  "key8": "2Z6xx1ZFMMWiBWZcZLhhFS2Qw6nve5uTo9NxeG4kqucxwkUggF1swNWGL3s2Z6tkvqspJ7FQkoK4qhBTCKybjXSw",
  "key9": "5hkx2Krx5GqEsUxoLMWyjgeS4RVjAGn1Qvk13LbVC6PxAbwyUJvLpBoEVug3wPuDCggQ2VZ9TKj6hoZ5VaJUQaew",
  "key10": "5WQY1y4PGnXJ2VdUXHGMeCwz4VFJ1WFj5wNzGLPC3yh6J62ory6xABQGdX3Sxd1eh94FmrRPvVp51uXRqkNd55qZ",
  "key11": "5wFh8BA5mcZjC1iLKVhtiUCbrpviiAyEsk3m3v2iNBhatcJLBLJDJEYd6d2cMjw99vxJtDWiMd3UDXGHmLouuUx2",
  "key12": "3nAM3Ce1Kw2H6QQCGo2mT3hCunJbGzcm9Ne2fm5yt5pZhxSB5Ye35TTR162UkxQGqkif23EnwzsawNW7i6p6LiWR",
  "key13": "4Tx7pgr9QakG1RULNeUhj5QnU9khtCpftSS9nLY1mREMj3rRyTKGhWxeKDvTEbCtFiU7acr2T7KkrFiQwmXUfzrV",
  "key14": "fcmnc7zPagYaAMETbYn3w36jGDS6853wY6TuuRnno2C2rfRsjKpJZCCiaTizrP2JDrtYx6ErN1QVbWPtP6rifdf",
  "key15": "63oode4QkABXkNmunF3eBcPDwmvVUfinWe6kXa5q6gmezcd7RKVjN8RscqSCRmAfLvf7UPdfpWqv9CmaBExKiXzL",
  "key16": "2NadU8y1A4KB5syCATE5AWhG8eqszahRhLMTnuxPR4e1Cd5Wz1nXze4b6sS3UtstLnh2VZACXDescEER6FKKdjDQ",
  "key17": "4SvtKmReydCTkfEzUveT374WTQwPZVCihQUUFWeRy2JoPoiKZMsoDnLu9wVZ2FAE9K7vqWBFghvb9gGMHR2wN5VP",
  "key18": "5cA54Ch57u455hi6AEzp85XszswjgKPjz4TyP72a23iSjrCkrdF1mwWq95MSwTpgMyEj9FMPtmnhujtZZxMAqqMX",
  "key19": "5s64R4rfZeuBypqT7593M9Fq58Xj8ZBfMUVbFRzLn3BeAWE2YDiArhFLYDb1qcWMwEQcVXaW4uPzBpn8RYyTkXL7",
  "key20": "2R2NGcSgEteeTHqhYsF6Gkko4boDzHSaWDohPv3mpPH82saTpKn7RQ8GfrPfaiUoj5e3nHosPDe7TpGzWrPzCua9",
  "key21": "2Mr3jPgkJ6FuhdR53yFg1mbg6618uoaLv76uZSMSLWxdkuQAK3G9w4vNme6CJrBQjC7ps8Cz8SHYP8DzPoy7knZz",
  "key22": "4wHRhY4VcZEQXaH9ULH5kKfXKM4D2y2suy2fsdxx81wT3ixK8GqUEbZXJxoihDumkKVG1HGP6Pn4aWVd1ycXowoX",
  "key23": "2QustZs6v13fQdHp7z7H1W6TrfskZkbLVNoxant5Uo2dZCXzMLjc9WHNwWucSQHJKvajLGYEhaaLX23xREsuottJ",
  "key24": "B2jrBiSBc1yERwK3zR3GCBjPPwU5YzreQYAcyGDgv6JEw5pZec28UTPrhHCiyAquvG7xamjTr2C9xa8onzxoj2G",
  "key25": "zzwsFczDs9BtjXmA2FN3TizcKwasR3ZqUxg6KYaT2pKVXWCG3kLE1BJiz9LExREHLpYqgtQo8T5e6FvstLksGDW",
  "key26": "63k8kuM1xNcwyC6Seube4ThBZUMSPnrzMMJ8Zc8c65jYfctbgrC4sn1zsD7W8G6YHvvmaX2VwzraPkbTjDUkFcAC",
  "key27": "4cP6WnWnDptTchpPz4SHHw6FTbjB6xhy15BMQN9TEC51qqcyXuCiUHD4b9Ko4y7hc1xRiksepPRNbV836mzjtMos",
  "key28": "3Hi41UUJqZBaXHtLfzKiwR8ZeaswA7WKATwGnSBHeuo7cqpX2onkBpbMe2fSuhWAYmAS4LW596fyx88w8zveHuMB",
  "key29": "SqFFio8NjTNqVQvdYysnnVstPAn4zGGti4CYVSbFjzWmENtn6Y7VDvG4HU5QSqpsvJP5XVUELeLR6qKhLZX5hu9",
  "key30": "2aodpyZdEu2yb1J8MSWN473P5TYdwwL8hBieYcsUCZHbqAhfcqRDHTSCdLC3Uqxvjh1Y2nvkVp25ZyTewspmZeat",
  "key31": "5mdawfBFAYSj8B2j1vpsjLz5ryJGzGwqMeyxpy1uxecahjB8vRpi8PUVFJnr7EoSL4LF9sES7tPZjsQz3hUwkwcL",
  "key32": "tQ2RhXwFgW9iFSEf2PKsfKXmxkGZTDktdBxJmbL76BELhJbMTcKoqJ22w8Xbuu2UoePXMPH57UF5TPVUkcr89mX",
  "key33": "9cCrj5pgpPpRUqfRwjTEnrkYgtVHBePcaQn22ps6k5GsznTUEgbo1Gy5xmTrp6Xxe36UJ1vj6MfzCUD7QGq3zPR",
  "key34": "4rU7JtpD9MjXoLrnRXTyKQLHmqCTtdaTBYWQBRbGXEMqGD7Z8HD4TrrocNLcZEPVNqdLw6rzoN4VBQomGRxo5AkR",
  "key35": "51zjaUZmbFcwCaKkbcmRWZCwkQmKMR9QtC5pk8QBbUdoNtrJWFnridqLH9bf8XVQPtjjvNZjfyFZ5mC7E4LRwCdN",
  "key36": "5UgPvsMT1rY4HsJ7DjYyNT5gRCsRKbvpeSVrGJX2wyJcFFTbVAzxkCsfisSQg9NWin8yMFBFevPyEd8SQLLZAmAt",
  "key37": "zZvKq1yLJ9Z6TdERsPgLpYvNctRvBvDETH23xYgbDkMjuU4zXFyr1iy1d2q8Tv9T7oDHiC9SnvhJPbBoDoiR2ey",
  "key38": "2GgEehWibBqWAbDZsYiaeN9rAH96xxBThHCSupZBYhAH3AqK8pNPWWXdnGVxdC9pKsVJSfS8yBxN9fxWGcYRSJYt",
  "key39": "3i1zxdyjVaUC11SUfDCHHVyfX4hdvaVqg2nhhVfNZxdYpBMt4qnoeLuEb1hsjv2UM1t6JY9HvboX1faruorKNUZ8",
  "key40": "5UB7K4pVewRqSJ5TwuNn3vmQt8hpTTWRUd176DBB6EygTpp4ghnTcLx4kmeLceRgkY63yUTYuZvJKZFXmy3F8r6b",
  "key41": "5vu1xcuKgEovF9X7RfxiWX1oTgCqPZdsEQ8PYR7G5Fzxa9VNPjHg3v36nPqZGTA89jZfbQJkeMssZ26dv86iD6ui",
  "key42": "5wk5AcAuMUgyQtEU6RX8zZw4UQMj7te2ctwK6BHkavy1JFVHv3JEDpHsvntRcYwxrr8nS6fZKXch5xteUNjyxrnQ",
  "key43": "2gJESb7mPLBgRNEyEANaQhBMvAMepBv7MHLTVdxQQY3hbPKQpFrkfzLUwtCB8S8ThZCa25ZhvgbfpS3bBuHgBqpp",
  "key44": "na8Jhfo7WxG4SXu3A124ELaybLdsF9ytc7KnXj4PnRbsbHdDKYJCjaDwifnZmuWkTiBxbTaSh4kk4pdbXceUWdm",
  "key45": "39j6zbZ6fh8EFuSQxajT97LRrenXgqSMb6nuYnHjeNY2BHWpWjxo727gotFnFRcYBS3qfrAGfGX2nCAfdhHKXjiZ",
  "key46": "66xMmWyx6wYrGXfmhTyB1TVonRXVpAQSVibqmKr79VsP2exdPVo8nzAH6er6jKeNLfnhy1b4WfcYDmYA99as4gS8",
  "key47": "5TWCpKt2Jp4n7ZDni476uyMkyQtT1fzvMnwWv1ZNU9LatFkD6Htg76v3TnvRN6n3C85HZLFwXo6rBZDCQ27oybJg",
  "key48": "88kqbnNEKzeTygcEJuuTRyfhvmbQDcjxUiXGkG6SbeRSj5qHpZkiGQZYn7zWBZfToaiTzBUo3HHdCeve8TJmeQk",
  "key49": "28qFhKtvEYcX84qb6XbqF2pCqEy1idesEmHY9ZUSkFx9ZHAZmfJnfvbKArrjb6A5qj4uSXvPfaAA1eXbFqBTSxoh"
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
