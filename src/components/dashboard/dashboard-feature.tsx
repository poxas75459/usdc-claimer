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
    "2qLrfjZY6pTXSodqi4iptpk6DpjzPF6CgMMqUHGRqvsnrLsaRhsitfikHPLrreWyKYEvRLGwpVaHYbtJiJzHhvRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "541JgAynAMQDBMBrMKg7UgBpMAHRLMUJKdHsncwPPsBseWbNkbmsMTJZh6NM7f1Mi6Nmpai2Azu5st5kTDMJqnJ9",
  "key1": "Zh1xKnsnNB3fW14AXbaRonojHNr5jqzrAprxfk8WojGzJ46esz2kYooK7SwxtCPKNR1CkTA2ETVupgbkuefKyB7",
  "key2": "2c3M6azUb9eLh9LMhnxwUgKQTV7neEBk5L2bF51VNZMFHa2arytFZSTV8odQJ38A8xCyzkUDF61NJscVe9J8m6GU",
  "key3": "2XxxPkPstZAaV47DxgRCJ2MWqQ2Qe8z6vwsb8SpC6xJuGB4BMkwehjNEfB5LL9xz22iXuNuB5yMCP7Jvv4hmAKMR",
  "key4": "62HXFgS3ou12E9DG5TRWaBYfvHFsnMG8U2qi9a3gMfP3j1Tp4S2TdZcaBu2pPpVSW9eoRsypxNa7bToFmz1t1RY8",
  "key5": "32mCa2inP6bS42xaQLRWNcqy9a6kmM4H4hJZZDMLtnm6wwFsFWKheJqeveyYNYermVECe3NTK4GncuSvivPSX9ae",
  "key6": "4891GEAQCDanuq9LEmD2tWvPTRcXNLPjg1kQCqTG99GG1TsAj8B3Ywb5v9E2tEX3CdgCynN9Xp8J54zhCMfKAMDM",
  "key7": "Gkn3EWLYeX7uzgjPuaY3VSaiaqGXLtkVYgnse2TKhT8C8LowSowojZ5WXYiFitXiUbQxJ7DeGRQGvXK8Lut1saH",
  "key8": "32Xm7QBUwruLDk1hm116LXUvVJzUb1eqNSZEGM2pJkRnBwsyPcbjxLfGktmKTLGuHAkn1JHst5WvbcaZTs9SEan",
  "key9": "4umGar2jKH5u4Prcvh1fBwhjTa2MPnV7p5aGKbGiBJjmmTBpmnd9rVyA2dxQ5jwtyenBnZMkg7wwVjHNy3LitHQU",
  "key10": "2X4K15R3isVKTMoZeiGzkSUYiJSafSibxvPio9zkyXihjmywVq9kmxuunwqr15bX7jEqH6DC892PdEjicn58r4X6",
  "key11": "3EZCcSQz9B1RRzEPPgHiQDHYBPxWrAM2YJekyAF4vDot37nWssFXEyh8KZ612nJd9kuHkjsKDjZ8tHsnJbjtQbNZ",
  "key12": "ikAVFVmrVhKcCaTusj8NtorSfLqEMZtKeMTUYHi8eqzfXMLQ5FV7sRD6jjEN1XdsY9nMEjKPGEpehrM4X6ZyBp3",
  "key13": "41FgNGiXzZQ1rEg9ZupjAiLahoZtBVf3CFYcPE2xhnmvWjewvZEMcN1AM5S7DLVATK8TMkxK6NPw4CWq2PNuDxjQ",
  "key14": "VfZttoCrGz4fD7r36CkxE5c9ryaRfXt5gkYeH4Q8CF3bmzc7iHpSY3pWtwT5hFCUNn7jRmZnfEvJRHpgRQiEdgS",
  "key15": "3gspB9ZYMcAyYfcqKEq6hoqqK78coXMLU8hvg3xNcSXDfFsCEDJDTRfunDK1HpsrGaWcxbHcwxXkfcz6eKqsAL2F",
  "key16": "5nWLNPRarGj7zsdpD5JEtTD98Pk3tZN7yaqHrhtCecLia64pcgAhbSfuuXyKX4iWDGbGsE9ULgcXr14Z2DNxgrtS",
  "key17": "4ebUDUxzQePeZzNH1PGcnKUQfWepG5LHyEyjVHtrFaEuoLtPoPZ2qQL8AeWCqYu6oTvGeszjNSsZoXX7rQTaKL7F",
  "key18": "5GXYU2BSfTk6sjNjpgnDmFZC1YbMmGKXPNE4Qk3kZhytgFTJQ1hD8Vp2vkk7C1wtvrSrvDc6oD6m7iTxnepG6ZEp",
  "key19": "63YZumQ7AXhVB47tmaBds7PDKaTBejMWWdDrbKVGupNtbt5HH7PfGTnZuE3on5ECRgcMGqxFEBr4bNdiUiBovTTN",
  "key20": "2gQyjYine2tBVfqcSGF2mtYxEKzBswyChq2xMJY1AtEvWuedYm66KQ3LBw4pALhdS6BUGTPcxLANzSbX1cUzkvrD",
  "key21": "4GJFkKEL3W3T3a5ynHh8RyiBrxy2jbbi7N43G7o1oWQR3ucfzbt2iZefQr7GXDQhUb15A9Txj7fVDQLn9ZuyKVua",
  "key22": "2DYdtbKNVY5FbdtJLccH1ZpMMbqZCmepMrYqc3ytsBYVtgmaRRC1ES59TU4wrAigVANX94cfrPFYBGK2Yi2Hs5AV",
  "key23": "4LjhqapEQm6Sq8qHH9YACRukiVSbUejxMmrsAbpXooECBkdBqbaqGUiMDJsjEUMmQYYqpCg1nKXZMMyE91yWovKN",
  "key24": "2Yfr7pF3RWhoF2kRss275KV52RaSgcChSjGdj4Yiqqc64XjUQ4Tstby2P7c1pAhWESozJZnxzqHzMc22SKiM1Yoy",
  "key25": "2C4stdzMyjaWaBQhVt6FLmVmzrNDnLCr9aeQgFaZL3RLouByuAkf1mGxcxYLeSbj2m5ArcgeDRe1UAJMk5gcJcBf",
  "key26": "3L7VVk1iohg4TvF98H8MCLKeu7yTgo6oWd4oq62YpHS6NDTkNybYgpdDfoZQRpwTSXj1AHS2TDhc8v72ZavN7T3A",
  "key27": "2US3aumJVgUN7maxZd3veotiW3pyYHccHj9uPjbd3yHMhJcFoskG9G5PtdYR7nUNnmwKRpdjRTQnkE641kyuaCzT",
  "key28": "5m9trMPhHgcqLQZVFk41wzWFBWuXFQNCNdDqTi9VoZPRB8kpHS7qXP1916dc8gVdvNq32byQaMfKdHRgj98vL6Hu",
  "key29": "5Sc83NoeG3Bt684sDm5Z5Ad9w4bMPRnU7AtNJKLeZyR194fawFbq7vty8S1nqH7u7G757xkFXtCyVtDGkoVnruq",
  "key30": "4bosHK44TuXN6VrcvVC7F6PkspCZPUPwDYBpxKTHhH4SdjyaDqo8NC1wHECvMH7CRL5GR2NVoQwW99D1gCY9BtP",
  "key31": "2cjDEX7ZoJMoq6rwCpa7iNFLgiWfb6wgJrEdrvX49xsQ3adGEeunwJi9K4H5X8KPn1xzA78MRRv9JTsfv1kb8TkN",
  "key32": "52Xy3b8LMoowEJRJNhQAMyKDwLWbpkWUnUQNXCQD4woPUJ8ZrP8K8Gevi3yDUjtmXuKKqwLFAgDxmARrotmhUxbp",
  "key33": "2B9ksGuSAYiBRNV3cVjFg6WyZCfu1sF8SLD4x2R9ZJy1mMafSuARXeggnJyJUtu7Rrf3JSQcjRrLLmoivhCQ2U2s",
  "key34": "3HjFm7x2FMs8SYJwHhZooMw8DNXHwKnmGpJvz1fU5fYuE172DDpciZE9r31PPypCMoxyaCf2MsqmWgTnSLPCDZem",
  "key35": "gPBw38och1YJguUN7nPPF45s6h2Sq5hDGeqBeJm6CXUHKM5CRD2LwaBdLKhsyWyFrwxGyQsDrEW94YpAMWs8fpN",
  "key36": "3wvHqu7TLpgCanmWogxkEkHHSoGCuGeMekq12S3MjxVhMJV64ZqEFF18qgKbop9Q6H1xdnYHTBm8cM6Y1wmGFHvb",
  "key37": "3uk2ufVfDRBtQbGLh7jUdUHbSK7RVABAJNAFJ2n5QZyachUPQdrNwZJ5kSUzZetAe6boQzmmG15KH112jBz2Kc99",
  "key38": "24aUrmSqceFBc4MxEBpuvgNuFMTGB3RiFvMKD4y4gbUjGXqa4J4zJr4wczQAcJDob1idCWCLXaEkLmfZYZV7bZ3m",
  "key39": "34bmRQ1eU7Rjt59Z55BQmeBH9j3v8zxL4EhJQVq3SZqN88yyxE9nNiEHTkeRXDc5Aab9USiy6dyULr3paZu1z5ya",
  "key40": "2Rzvk7MgzD5CsUM9rnQbKeyNydLExcvBTZUDg2vjxW6MdDJRfLRBV4YPipzjAhs11k1DNrmT85XcjhZjwAzBGivu",
  "key41": "9mP9JTrfoCHFR7iwcmkJiUHjkPws6Sd7u5BCNS667xwU1DyuVCmo2MM1G14R2ttnb7aTvr5mzSbHpxU8R6Tqtjz",
  "key42": "5JwQRLfcbWczSxHEkVvmS2mjRjxiEsn4rdAGiYcxbK2yxjsZWjgZnTxu5oSvnmo6xvkckSjddgDA8wrEpCFqECrr",
  "key43": "5PzUGNeQPVKKvQSsjkvVT6bKobCVuQu8NHtxBDHdS36EeeYsveLFWndsgDBPX1Tw6KyvhnvrcaHqdfKEz5gEkU57",
  "key44": "63TUJ2FhxytK6Tw9JQbgsHbDeikJFnoQYNdBKfzo1hdKTYqkfJqVUHVvcvruBvEqbHnqoBMeEuQhWDK1qyLaEsQq",
  "key45": "BRNf1UMnCyp1R558s9mbjDbG92xbeTdYmvHoRco9RP22xFa7jwf87RB6KvcznUpw6QZdfdHrgxQ6ZEZEnMA7rLG",
  "key46": "3X7qXNMG1nPA446676FQW7nVBiQxU1KakoJzmZnCUR96gLeFzi26mCHKz6c4bMdeVK866UN72sxCC89LBzTHVkGx"
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
