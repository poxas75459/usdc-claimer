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
    "WLyWnnsEhqpLRqxopaLr7ipHqGwFuuUGenHvdbHsLG4JauGRTCCfAG4sorMnVG9GpSWvsiPvHT1zDP3rtJ4d9PQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WHgHwfY883QJucWQJUy8Pc47ZuuF6Fy6KHwzL4du6i44ipCP4XjfWVNDUpWBSJvc9QZursd5TPVTMkDq5ipX2cz",
  "key1": "2Gb1UdNRffm4FBC2ttqVp64CFZy5MtwNeaxragPJ2DqqYvCkRb25TRmYMhdEg6D3F6QbenK8D77YRJJ6kVpHAFhG",
  "key2": "1khwFK2ojrJx5ChW24rjUhp4G4H1Agb2cWYvtsTj6i6kk8q78vZteKvmURnr7mY23Dv9L8MkviEHRGZLfeNboJW",
  "key3": "2dKKJL8dUxiwPGRwLutigkHEbaNAYkddGtxPSLjh3RKzemu92QNXbKjbbwU3gmkd5BxnkzAcqxAHW3mRQPNG3sHh",
  "key4": "2TjWEZ6UEFzYUu3oaSPzKKGkEqFJtSLXnvPQirfYmpWEPXD4A6Wvw483nf2Nhs5TQmuekjTPH3sTbC73rp6WCxVR",
  "key5": "3uEH79LeatvMqQokMVpruWd4APRAW3nzXWPmpTpCR68XUjLEMHPpjMH1TLcv936sEyUPS826ZQj16yYTzbdL9A1a",
  "key6": "UvRZA7k6wvYdhXo9XuwputVcFFo6sBu5XChg1JqbPbeoHHi9W6aYiGv2pasfoGApjSwPJFsjv6LQ58EpxVTLPU2",
  "key7": "3aWsE3tQisJCYWgdXrAjFewBCXv5YmQVi7bJQN8LYQhyMPwLtzuFHsKbg1wvH4RNFGAjfYXXLB7T2FgQ42EYcYJd",
  "key8": "5dkUp7KMRfFR6jKf4Q7dm5N2wJs6WadMf5AT1cjQDfbAUUYmpjb1vV1DBsuNf8CyUfH93rx2dkiPCsZVyX2Hft4L",
  "key9": "4pijENTiMWtAN5hDQkn7yfxTddrrVB5phe1yoJyJa6o7ihRqx7BWJedcWDXyQVtjXDyNsTGWGsrETm8UEMpebM9r",
  "key10": "2CRZGEsJUYnrLQPjYHnhy6KwkrvsepEnn5Pi8tE2V9Bp2sUeUytJh4pAMAQAD9LZt22P2yjRg8LuU4p5HhVyc2LY",
  "key11": "3vbwSpsWUwKuM1gtPZDvS5X4y8qkesy7ndcFRKT6fg48eyNWDumLAyQGqWRuBSrrvVCwiXekMhGFnKZpaBSXpvBb",
  "key12": "5bNrsi4ixZtiqqsFVhk36pz84b2Ex46hifDpyR7wGk3jwUMWJzo1UirFanPTRGDwZgYcrBEhhrWTLhnvr83mic5L",
  "key13": "4iDSaQxMyaWrNuTdL6cymaPWGvip4UNm5UBN8XFPw6iCBGFMR8Gb3UjsYFpet4JpZ7BVuWtVtpSF9Sp2y695nEzK",
  "key14": "4CBXQqt2jPddfuECuwntFCsog5C6Xmbp6i8H3kTcLZW3ZwMf1qSobKoWq1u5te6uXuXf1tMtCx6WVkfqdkwDsUza",
  "key15": "2ujXPUrFCPT6kRrWbmoCNG2AJqbyWkWPPZbR7rkVystS3oRiqyc8CVFbkJe3wL9QsTBvRJihvU2UyZjFKBGY2dYp",
  "key16": "2sHFj1YVFz1f6gn4d6SudXiRMmFW94wSTWFHBbRACpFgU4gpD3AFwczkHPChA8fjfUkdeYuyTc16T69H2rPEJuei",
  "key17": "C6WDDEAESJVG6ikLrSMhBTp9VmjcZUeVdpejEUTUXBsjJLZSnkSoBvZW9dcFRv22m8LGwRD8zJKCTwA2ZGyE4KL",
  "key18": "4kLDKBrfmkxwFAsmyP7FFVSp6fxgbBL7cu1WPFFtbHbCmJUveSS4ePmjCioVJaJK5PjFrsXmHPRgQvZrXTRXGc8a",
  "key19": "67YZi35BQ413YcbpWSAV5hJTYDWsyDiggC5jP6L5kVyciBs1hnQWnvmn8dUFmeNVZNvXTaqp5uRcQ98dpZMe7bio",
  "key20": "3hn5wxXKkxEYhCrt6csJc5wYHddUM7LoT4uFxLRHQpbpFrDSPi88YkUvbh64i1sSAGjM1Ky5ifo1LcHvc3cfwsqe",
  "key21": "2SF3U6NTj9viuWh4z7Ve2aRpvdn6oPmRydX8rSRRKMayrNYBXrxtf3Xs1GC5wQgEAJ2ySxzDCx4ss8fcZ85HvU42",
  "key22": "KSQpTDSqjMpxusSY2UqqHr9rq2nUSBVpHhZqMak7oTMLh3QbfJscZ3VLtW8pD796LLaP3436ERuzASuVUGfmmN9",
  "key23": "428AsuzWk6qcP9WTpvcgWdXLrQhURLWdjB8DPmcuqGximF2fpcpfSXfkyGeGuFCrU5cCwWKkM6TSg8YuSSktT7xb",
  "key24": "Tko5LjrVJscX5ec5KCEzMdYSoQNqYKrCE519Ji8gjUWPCzj5RuuR6KmgUNbSKdruKaU4qKeAaBoBSSa16YKupmT",
  "key25": "58sqanK3UgQ7UnYpDfsfNoz1VUq91eHpTHfZ4KGtNnCtLo2DxkHS6AbZS2Dc6DYfMExc71Rku6C9X4Rkeh3YJTvM",
  "key26": "2NpsMwTPQCd2wAy6cqy5gTbZ3zvhXx8AfsWQ3NVvEDUAeR9VCDBqArpmvAokahsALkXZAbpopkuQxF96xMG3Gjt5",
  "key27": "rN1qHEJYjSy3xVbEovFUNaDEXdmTp5ouavJejNnLDw9V4xjCJ3V39QGWCHD3r5DYhbmKX4kxSH3MtBrBdcTEx7f",
  "key28": "4oomsFDo6S5tAYxDDVgnkxRJzXfUR7JiQSRqzKy6GubLwEHBnEpf9u3udFEKBmJwn67BkxzbnKWEoBbhLR5mQebF",
  "key29": "4cHDeh1CPAKRo1fs2eNAYjbCsmLQpA9VZGfMUih574p1djpYgf3se64Cr9tDNU9Wk3q4Egp1WWHBoNdZo9rTSTMY",
  "key30": "3h4RXy5mhqessAQmu7kS7QtmYeHsg4omb88UCcbXu1CCa3mx7GZVXukoBvGCXC1Vq1tkbQDXQwmvtHedbBC4tJbp",
  "key31": "2cYM4aAqvMH6NgVvoTs2G8vXthtRbV1R98V4tRRYfoasUjHB851xi4xLBkrsxCVmW1VrnAgZxhZBhyJbGeUg1Qo1",
  "key32": "5wtUvrR3HWUK8hhWYaeWREV2eBSHnkh16A4WE2cpLPbm1PvRKKmP3btpazRBmTCYnaZhL8AXQ2wFzAJAMoxjDhgH",
  "key33": "3r6zJz7ZfxxTjs16kpZGKBqHjy3eezDEZTEygWcVWgegZZxT4cPAWkryGU5TKJYxSGp7B66iAyH69hES1PkPMQ2B",
  "key34": "2rKP1gibqDu9mv1ym7v59N3RqZk3KzgFbjhWWLQ1sHx5MGMxc7Ps2hb3LgCWF3uyAANiASDsQKeYPAbmpW3WVchx",
  "key35": "2XNqESGEz5ZcodbuBVTawGxritmK8DHjmiLWohYjUtuGq3dzLVNQg4ujzhWjaYMfXCDNrKXqfjca4AsyHLZB8Es4",
  "key36": "2k1Kkm7QYefKFXLUonUMs5C4VJg8jXL7H96CjpF6483yvTvJbHW8WCFu9kVAKq3qkNVEnKcLTBthTxVW6geUffrX",
  "key37": "2Cm5obZXy2hGFkkk87iC12svmSHf8PRYHsCdbAzT7bM23DKQJs4iJEKAUW9cgnbDGA2E2oitRLuQYfCSdf96s2pH",
  "key38": "2ttzwWGkuwqQe7GyDfpkuzcteUuCNcDAE6g5L2gwxueLbpfsgMVA4wWbepP8pxFab2TY6FqB5wcB65EuwSuT3Afr",
  "key39": "5CZRMPW3aarGkHAjJbgJbHmFYDruPsqESZ54PdKCYrPGdJDN5ey7kj78Yyw7fvEEWkTGi2EJAq6GcfZamL6t5yCq"
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
