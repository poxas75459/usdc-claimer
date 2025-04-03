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
    "35PTFAtAy2hjK8peiboTXenCi1ys77bruNZ5xxZ9bdrko7iRxtYPVmyiFdD3NxjVavitPKqfjYH8TFpwAUzd4cHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rGawBb2PmW1PkvsqDjEVmWPkCmFGUXi2Zpwkc7Usf1iBonbvjSVRRk2Bi1sZmvuq7mPp1dExqRcDMqbqttE8K14",
  "key1": "2rJAXTAg9RitM3mnen3Ny5B53fzmhPzNnrAc7ckA4MA25wLtz9JGkTaq1FUtJA2wrXqEW7F58ovNqwDG2bYi3FAS",
  "key2": "RfgqakBgQ8Rj3DM54TngdCfAcvG3wzo2rH6HuHiv46YJXVGPKzxvFPTDMK6aMnV8UBQym3K6RnXWNRCYinqRrZ6",
  "key3": "4YyTvJjA8gnv6H4Tug671TYyqHhz8c9Pudh8thmz7w1X9ekus9rrY9eADJL7VER5crSMMHLHWttcZMeqLkb6W2vh",
  "key4": "3KuEf5iHne33oEBeWuYCnvJiW4S8DNhfQJsBh4rTrBgVz2t6DAdzHLBzAneuDGsQRNuo5tg4GEKW6T3Hz3s4zJbz",
  "key5": "3Zx4GsvA7s4oVxASoKoyCRsQoaQ5xM8WMVJdNmMRFWzgHHWQBM2EDi51JpJAZpgUhX3221f4RmfGusvY1tS2u2DG",
  "key6": "AzD5Ms8AEJsEqYXEgYgCZuD2vUQG536W2Mt4FiqZXzDFXKSwA3AnmhSF2fbyDU1PjyZctWjthz6TTVWoWjsVjea",
  "key7": "3jcbf2wSL2s3nGsRgWxwquWdJXfoEsjhZH2WhkRFdvsb8pr79tgmEGbJ5TjPfwPbdjmpyN7NKw48o9QGr6VAgoYn",
  "key8": "539C1kt4f7RbBZQ6JcD7Q62znq19WRFS4iFm6h7doeKo9eSs25MrcXYFQkDKFyzu7WQxeNmXv1HX7R2EGDwis2vv",
  "key9": "5yeyaTBWjwVf7sj3eg1qfwSpJnt1PPmnPLTtUbEkKgYz7hw8FS1LiTCmkxUHp9zkjrtoR4ezupLbKJCEgbz33aqN",
  "key10": "Xjq53uifjTHzVxp4Ah5EBz3991cvZnk2NnuDuFkjeM6JdbmiBnCmLKANehzQWDQH9CCxQtnPx2vo8XEQX3nsnTF",
  "key11": "n4bB5MjVyEyrpQAD9jqaBdK36M6qfBWnmGd6cvvJ5dHLAtUKVPQqpNifeF7F8deG4di4SuZmUjj5wWraLKqxA6x",
  "key12": "9ANqTb5MhtcdUSNCbxBUG4m24QjzsNwgzAbSC59Sqppr5WczNf1GaSJq8MsFnEq3kosq4ZUwk7wgdvphjGuN3Ah",
  "key13": "4QLkr5aujQxjqsm1rC9UwnmCCoQKMcX1KjjFApe1zE54M3CqbUyRkRmc6GoZwBb4reLWPhSbM1k6toMcqJF6HyHD",
  "key14": "2S2NV2C1rq8kpvKqE1dcLbAp4irT4u7mxpbp2Bj2P8EspEBRXW3xY4Q5PL3WPKmWUHayQPQyL2hud1NMGS2HjZ6s",
  "key15": "3EZ4Dr26X6x4CFoY3dwVeZKikNjuGUaTjvr4NAvuY24pPQTp92N3fGeisAJTtctCT3FTbMXm2uYMqqDFnp6AG6ZW",
  "key16": "JrwnXdEWB6TxUQvv7L4eFYhjyWftstEu3BVieQxNoD8rykvmRtUFogAAy2D3vgudKLXCv7isnWinogXSK15NWqw",
  "key17": "2a8SWF1yuiEyWtxb6NDrEbqGhENmjkwbZ8G7NL3CKdqMUHAjfQDUF4UNkcwjnPUFx3k3ZG264jiBYpGQrEHKkUYr",
  "key18": "4vhgMCP1LeZXgzZ4Eph4uTBQntWw7yhzxzcX2CmM2tf89At255yizJ3rbJ2xrtD9MZ9RTkQAE4NUUmntvXivV61n",
  "key19": "2dkoMLcCMGwfuGWcaFig71d3ekWAZf3M9KNX3paCbVYH7dN1wozERbi5soDZ5dLZJf6Kb4b6soJ984YkNCRHq2ZV",
  "key20": "upTYUhDQNVkzXFnNucvNB8fz5iTPp5zC7sB1Z3eQ4fa2mm3Dp5CRSM7VCEcZYDyZHDW5d7Pj9vY9J6rQQCbaRmN",
  "key21": "2pEDBEdj4TinFsTWeafR3auCrsF7cLQYPK8U6wZ69n24r5aZ9TznP7iNp8jqfiAEocVK5sdr8nRMTzRZhBLMhg6o",
  "key22": "cYJLoQWzQ6foG4GHdqQ5c3eBBGrZ5kxA1yAGpWJDowNdyWeJivUP4DGXGNfZco8TFjZpENBhJJvRjcFwGazUYfd",
  "key23": "7xtc38BEKXtSiG14fH4pskegCYRfkPwDeJRbf1W6xKfN521T96h9FDTULD3259i8XwK4bjhfyRpe2URPb7d6bEK",
  "key24": "5rMF5uS43YPDER3Lim2bERub8rKk4UB8dRwf3b7eghDkw4Jsby6Mf24g4qS6RcYxn9DkGmrk4zFBxaF2ppPnYXMN"
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
