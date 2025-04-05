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
    "49bLTZdgJK3wc4FMBR3rYcGAz4YKQoPKdDcYyiMEDVAvHtiuAAshGrucpM8m6VyP2XsrXEABGVRHce872KPrWSxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3reBtEo1x5aASc1TEjY8dHqWU6JVQNWtQGzURHQRtT3fDWyJwhtVRhEDPxgQARY7ab1koELWFpjbjQMY9pDqbp1V",
  "key1": "38kdqh1eof3g2gEVS2JEPv1sptoog8ddAmzbrSUaUynCSe4L13b8eLp688hYR2zcqByWYGquPySKFFDkXJ4uhmgm",
  "key2": "219kahTsThFFEpfLveYcWUQs6ct6AvzmvbfvHwBwgBe1qkXCJmEnASMLpbHoSPbiWBUnEXKrTZBJ34tycS4J4xVQ",
  "key3": "5x1m8SVPcApFrx1JjozJQjeNFYAaPRtwV6k9qR41abUcdA4bJGz3owxf5tALvsVbpm9v4XTahABGJDWSh6Tr18c1",
  "key4": "4XzhVcnF1Ruj1ApL4zKrni5JkFcpvyA9BdWvRaWhNLiHaQ3cq4scdv1UZTSBCCH3ha6QtwBkLXnd9sjD5izqhURz",
  "key5": "5sx2bFtM8m2Qjb3jLXvDZfX2A8tfHK1X8Dheu7SVWAtGNVZg6bzvBAhcj8aQbkUdSLSZtFZpyPvT98qfq4gGstS3",
  "key6": "5dBwyvJ7JhbULhTuDa4bFuYDqt57YmeDaFEGS24736syhBssfvSaNHzWACEU53zT6uhcVHCy6rGCEZB3ZF2Pfgpa",
  "key7": "5CQoKyDAfmmdLmRTpXquPCyrUvPXYM7aQQbJ39XPpHGaYdjx1epSNaM7frFPxq5CWGXoHh5We4PePgsaKARoYVkq",
  "key8": "khFN6v1iRwppHabiFZotD9t19Dtsx8aecBhHtYa3yCeqAVGQ5B3QPjv5iGkMbhqfS4uTnqnKgQQqp5ReEsWZU5L",
  "key9": "4pU3QYHM24hF54Z38YeoboqaEtbaGQPaFkEY6AHWLBHV9NF4yVYm5YAsLqbeuqhb5QKYV3S9AoUER959NLrrMC5E",
  "key10": "4TbpSCGihLJj19ZMKreDfFnogtCLusPggW7ksrt857bamrsHVhXWtnW6W2Tt1zGKzagxV6JPoVejrBMi3ZvQgif4",
  "key11": "2utLYx6CspPhrTJez9oSyuqwSQhKaU1N5yPiPBVCJFTWSS4dZse1YudD8A32gF74TBKHDCyZ6CVPnrVrryCaxTRA",
  "key12": "poUKsvEM16TSXgmtuzbJgCk5LiDPSqMoUsNXwhRkswwS4sDsuUTb5Dpkzu71mkoXV2PUpqi8iCSSt99M8Gt4fTJ",
  "key13": "2jYfcW2zH4k9oS49EXNXhsPw7q2fSVeHsPpYGbPE6Z8J6rKZFvYeC4S4nej7Xkjfm5qo86omiYL2cDEBmwTU6G2i",
  "key14": "NUDvKoCww4vTB7amjR2eHEyXDG3EEZFAaFtHpMX8TY4WTriKFNTYH7bCsqvfdVgDP2eeSNKaYJCHxrrpiVYQkpF",
  "key15": "5bxZaeBbtv38NX23GUq3LfGMEyzJKj4wg3CmdJmGxQt2V3v868xgvEzsNxpntb881QuPH4pZioj7KbHnZAg9SE9G",
  "key16": "5AZ4u7KdoE5ibCZB7Zp1ZH4QoBLA2D2tXRGedyDmSeiCo7dAAUJTqP6oqrHkk1mz8v5N5ztmUyyUeW2DDveJvXVn",
  "key17": "5LP5W1RhgmxuiVt2suy1AujmagTgNB8pnX1REyXXYcp3YzbhwDj6tAcozPSu1Y55ZLuP9qEekddQBigrb9MAcv7m",
  "key18": "2jnKfJtRqmzEALMqm9FRgXT3YhnMEHT4FLX5mqU2v1wGGgbWw8kftQoQBJd24YN2LqZvLqYsfbZex17vSNWSDbkF",
  "key19": "2ZtXkREW9P5JbxErBJiSPZKLV6tQGPsE2ZReKqKubLh6MvZPd5bKiNjgAcseHd2XQAs4g3JpvGuFXTC6E89cMAnU",
  "key20": "QwnQfipwedffxcHBpnJvzdXqeZT6XJRHV7pmGg3S4U8x6Yae9epaF49qT4QkKutKhSLgRZ8Ng3C7RbQcg13Fw2E",
  "key21": "3iZ6jw5imcNWHWME2Sk5mEAo2EgzZWdC95Gv3AyCrfMgmC7zJX7Rimnh8kZnuNbEefRHtH2KecXr4N21zpq2HPXP",
  "key22": "3oLaPXzD5Lhpg3oytDX6WRUMG6rV6JMUSBQEy9WLczqzBM4UocdjtaR9VqYQ3JSs54GRL9kvDMP528Zt3xc3uEhF",
  "key23": "3DbrmzoWii348h99oCPw69hoXYUoRjxsHYzcC9wChEC7mp1gompvT5fVqqh6ZUN5cQgDSfriUPmeBPQ1z99DAF4q",
  "key24": "4ZHryf7FPXYaE1EzLGWJjBK7KiNzUnSvffr5jqwFqiXnpfAYgXGCgo7RhB43KxyYkEByeDzk9LYMeTeX4EA9cacV"
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
