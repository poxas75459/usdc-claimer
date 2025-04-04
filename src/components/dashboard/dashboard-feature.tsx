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
    "2LdhGHgnhvz6RUDJfp1Y7je5RxXGk3EQcjoMwEB5Mm5TniGsHBrDi2MVbVRee4QcC5K4tZHcjSiUrNfA6dRH2GBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FuQYEyyRwAFKoyc6pJHFGmZcWnuLjXS7LEpF6nqZg3Dmba3iaKgK2w6KXuoVZSNbvXrahdjdF64MsQn3c9tD9Ma",
  "key1": "55WxjS47jgbcZp1bMDqrZRWz99P945xMzFcSSG8tv6TgCWxzw4QVoc6iFhtDReRrb18ryhAw4dsH9qffkAmWB1S",
  "key2": "4GExEpqvVYEPYLgzMUbMisf8M6v9qgsTQ78ZB5WvWWktjZvMziWpncqeKCrqmz8FU6DZ6grQoeEy7oyivG9bvD8A",
  "key3": "3ty3uN4uQfaBzqE15ahuizAV25BaaayNfuYkRAgFGXSCzirWAPQt3YJSE4WXnFLwUXHQJKgtps32nrgKaXr1SeZ9",
  "key4": "8szKuvoxzew4nu3ZF2cnqYvsVBXUoSDS75kPw5RHo6BwDXkXzfPfUPRd5qbJy4wxPr3Y2Hm5PLb5QTLWgjRGamD",
  "key5": "aeezfpKhgAkukD6uY343JzLLHWKStQevnthGhr2cCdoZ7d2ka4vjqfhyiVhx2XV3psECWWu4ZXGnueJUeGyyrJ8",
  "key6": "4c8riRmzBFn3HbKsjHivV8hzfA2vBZgytGMUG9TRG4Bfs7KnM5M4gA6CQtGZoPF5x7yKnuZbDbrodKiXpdtrX1se",
  "key7": "4ojnEzHcg7aZpdDjJnasbkGWCMoCRBPgKTC6ND7XLF2A5TQmcsRGUJXoruHBKEbgHrVhbNiG14tQDRRjM7ETw5Yy",
  "key8": "2qw7hFopWXqhcCQownsnUgEy2TsGntAJ6b9aNHVUPZsZetKsZJVw93fhR5ZsyeTbUUmznHzXgcPNNFAxicarqprW",
  "key9": "639YHLPtbfzeQpRWB2vRrx1JWQ1WXoriGNPt8dYPSdM2fevpNiJUkM5NmGsoD5UGC4XSagqjdZKQhQ1bTK4o9wme",
  "key10": "3Cw33xJbYXrVsfptFSXQLXwTh5pRRJUsijLkHu4yyu1qXMQFx2ojxv22ReiYvsXTqxmeww5NzpnYT4HQp2HJTSY3",
  "key11": "2r6nJB36cd4vyQYAr4ChbsURez6wWd9imMcYJP769GZYYrfjqimLyqXawXRe8hQe9FqQq6eiGSqWi5kvnsQSen2B",
  "key12": "ZWY5QS5raBhudi3HvqtLigDxQq5GKw63h14oWZjVaKrSDQeXAYNHY9cbpRDrkVb34AE1FWUkYBdJso3MaCmwtzY",
  "key13": "4xDAHfJRvArE5guJigLhpCsVfnKSxDoQf5CXCLNSAiztaTipXXQGLFomYsBAio6ovPgdB19YXgW6AtGULNzQLpGz",
  "key14": "2dq3ebLZSzuFgqz3NeGqwkU86rcQy44erwLeNXuvDwViPyfqpAzDzKX9J94GyJxe9HJUqu9SGqu1JtF8S2bDHJv3",
  "key15": "41WnfKzxcPyJUWd7TZyeiY8PVHNTyv9d2vXvDcsRpjQsxJZVxQ9s4EwwSyUdwmewYY2VCb5BXu4Mziwd4oFFM3FT",
  "key16": "5GCyAZZ5Eho35xEx4qinMCh2QQDfu8kmAKdbvWhWNcrgSRLZuokQZsUZo9BE2PybTMMVHtUQoxnRfvhCapYFJF1c",
  "key17": "32aDpraCpw7HXet5dATu2pypDMvnKTQuCVSn7KvzgjTD8p9zMxSSZQnAjhTEt65srPxmN7gA8UhY47wQbedZCRk9",
  "key18": "nbHUsf9iXpYMQqbPCz5PteVzHjudohTyx3mCHuedWi3GKCvjy6i2QND5TPhJe1xDkFpqPJ4GtZvT6EJ1T51EZGw",
  "key19": "5nJip7TwJjJ8u3eD5n9iMtRHR5tvD4uzmKk2STauPtxPdMJgkCk9kjYbEhknbYd4JUM8AfWFTL1QwtkSPig7YZb8",
  "key20": "3tH6to9tbCiq6tBEwCCcRwzWA5uakcexCm5nRcGyC8niEwHHba3cEXLNMZ6a8kTUQiDZBK6tqWDw2kTmzDUyeHzc",
  "key21": "5UCiTutNaNMbvGeHrBmpb2ik3wd72UUaTym4ryZGizp3H2cMVncsJXsfThjpwT2M3qK8p2QkQhRJit52skee7vZ1",
  "key22": "65BqtxVegogQdiB9aeUg7mpSkjTJs9rcpESEzjH8kDtxumbZxfRkPtLycB31Kgr1gKmGKj8Qcvr9sHFxk9UWBeMb",
  "key23": "4ZiTMfstiCcmYdcC6MS5wAG2M9X6497HiWuYcHUEn36n2LA2ZpxbuXwdJHPJJm7mSE9cuijkd32xmnoG6sxajim6",
  "key24": "rSkcgftEL9VQPCQMdUksSCwuLZdqWNPAEHEKeZFiveD2XVk2eDore4BYzvTztRfvLBLUNHJPwLrRbVms5c1FXW1",
  "key25": "31o9FTZb63eRsYhkSY9FPiwmkNPnVUfbCMcfqweBVSX1FX2ffGT8j3EyMnZ177wmfvzTAHWYx3sSagpGsvqfzGhv",
  "key26": "35bzqThgARxKBn9QyPunT2xcY5nwHWK2HekJ69PZddm4QT2EXeWdLvGF5EGGCawXFCNdjb9W5ACF6PdHtAwX4ktK",
  "key27": "3U3kbjdgcmbJgfTuwJLrokTxozsdyTc2ci5ckDng1okuPc27XdE9iyCo7N5vg7v2szozXwkRRsLaqPATELKzzQML",
  "key28": "2tvMUCqhL4ioLuwwM54a7F7ceC4M6z9UThqRxMCsUXJqN4rtvJqPDNeTfdXYTUKV4E7NtVWNiXuHbmoJjarTnC9",
  "key29": "3QnnzxJJ7G8ZdbSiRSosPvhTwWbiAxdBJ6yUBV1o7kkZCW44hQCRhmM7X9XS3r4fso2RoGYgPkzw6AxWVh8r4mFT",
  "key30": "3uxx8WhBJNvxTjaMFP57B7dN4jrKpDeJz8JuoCPMBUJ8LY6RsHn8oUzcANv58Wx3fASQPFrAXaPn39nLJt3BjB5z",
  "key31": "24tzJKbrviq3rabatRmxssf9mLDfqKhgSxmdCSSJpnwUa69yqLhuYoCJSomnUfxqXk4JfBddJEPFojemFfAaHax2",
  "key32": "Mb2KKmtEhGJ3PwrnP3PrFXDzrduUy3GuVs9BikZHAb3sjYxVY96PZiJBuYCuAVNUZS6WrtjRPvm7imLXqenhe7S",
  "key33": "2vVmgdqAsoEtpLhCCLWALFx3iJxTzxGYLNxsM2K44TbsJQtwYxkNz1cNgqJvPfqhS1WFPhnjcE1dCbJTki6NU3S8",
  "key34": "469wf1TWhqPEk44uYkySS9834afUp87QRCfvVg1m4TLshCNVUkbjvtSdJghGkc3MR739NmGdk2G1QPTn7NHweAbs",
  "key35": "5B8Z3mDR59kV9SguTrUdgegrnJLHByPWU3xEXztUiPLnoW2GpNjCJE3Vczp69ZzS9qpvFkGksChJQF2May4KcSaa",
  "key36": "2wdNhHPbAHFEGZ5VuTZqDMnorKCbqaVUgEr1vi1pyxZ5w9957J3nmpSjQrn7nrtwM2eRrZyMKHyB3aUTE49vEinF",
  "key37": "4wG8baBTywafzrLniA1QkZnVjxDikAsYwy3EnEMPAAXw7EugE12vt5qKzo3Xzdy68B8FcbLVqQH3cprpLsvs7Lm6",
  "key38": "57gJePPmMQUzFoihD7qB96UJq3PJ8JPj1RuPY1qfA5DEYsxqvDSSMRQsqxno21ppLSLjM3AcYbThkrDSM415B3kw",
  "key39": "2keenrtUiufxt3hjbt6FCuxNWxto1D5kR1gv3qTdxpT1bV56xKEJrCD7ADjvdmTBcAKmWkkyS16YapDdDcdsvKd1",
  "key40": "81LKY52mjG2EAcwjHf8NgU897McXaYCLvcYoRnFtsatgyQqZGhMU8eVTsM3pi76Wu26kaejmVo9r6xjQJzah4yj",
  "key41": "5eyRHJVt5LUzckK6GG33LvEqBfjiQ6v1DVMEAWPwQooNi2Aa2yMLrYRHmMuNds6AR8wyD9dzD6T9PNi66GqJSrqA",
  "key42": "5Rv944ehMdQAEgPQMSo5AAN336d8MmiL6wwUoE1uFGrqPWnkk7z9kfK37GciRYQNgB1RDrtyC5HLVnKtJ5wNCSg7",
  "key43": "kN9QyTsrjrnXPJDg7JpxAA76HFXxRjfauxXHkEkGQra4X6mCmvnPbpriM6EYG4ELeEL1ky7gqFnSDR1VyYuJFyW",
  "key44": "ZNHjfu7E1HyVHXHZCZb9EY7wNZKJyKc6RTNM167X46YLLnWi64Ckr2jeVNmHbwBHo4vLB7zrzZrSduPNYeKtmyX",
  "key45": "ZgCGfhZXeTwfUs7AyGGiUGGUH4oXuAFAnzVPawzYb57YyKnggZrajvBen4GP3o6fn1V6pzoCaL1QrHixnNPrcai",
  "key46": "2rviHWbFtFrcC8e3Pqjb2boJJkdXevqK9NvQ8duzuLLs4qJrMm6jEuPrXkcYANzjkMeGr46JoKPEJ8XJddH68rt3",
  "key47": "4gjqXu1Cn6Hg4Sxi5cDx4p1RCU21dL76T1ebTAGAgUbKBV9cjwXuDKA9pQTLHV2D1hP3tmU3ugQQWP4nm77zpAc9",
  "key48": "HPzRtpdBuagL4kQNghWip1qUqSwn6RfDC7YL1wR32Sb7DYNvJAyp1Lsbdb7hvNriKR26DUZ7ZUej4t1nKLTmF9U",
  "key49": "aKoavNF1iGku6Vtt6YZexhh6GKS8DbDb7y5aH1G6RuunUKzafWVCMpSVTsbo1XFd74Mf1m17jQ1zfffHcSBDo5U"
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
