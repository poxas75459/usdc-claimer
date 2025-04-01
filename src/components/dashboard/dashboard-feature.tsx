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
    "5cYzTQUnruv19mN9CYMfwDQwSQA7anetiU4JfRncUPsF2xPQfmMobYo8y2yHzx1gMKhKcvgg52DEn9x2Eeukmp4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZAtXfrJCTupPLQ8ezcTCDpFZxYtSLnv3PnCx6dX3EWmqimFAQDf26DFcdo4E46iQd6eErihNS3C64XU3jRcvtgQ",
  "key1": "69KRr2pNdEYjtrHRENJeoUD3GxML6Auv8jKYR7H8jzsi6x6JHg2ne95W6MPdJoeQ6CdVfacAUWZBrJY2KWM5qje",
  "key2": "7z4L69y5Swg1yLkoWVNrHNzCCQ6uBXG5PrpxhjmtnuT1Z93aiLBh4bgHhBKrMurgJpPmeqahNUK3W6ubfLhkTbG",
  "key3": "4ouxcryBVGjoeYUCBabvhrczTboAsx9wGbG3nQ21LTP3zTZyVHVraE3BLDCzou9mBDuMsVJwWAisXVKDiAZNrwSq",
  "key4": "34zdwy76A9JWzkmuCzE3jJvFp6sRwP7gUeQRxWkGTnwr8JuzBduYUi6eU7EmAnfNdXvXAyFdD3EB9Uymx7LJYo68",
  "key5": "paapomq1Qa4JpWVsB2znqAMEtMVRE7tZDKDAFU9wM7bdjoSMkhYSLJJ3zekgwYEisgekLPQmzR7fmCCJVWoUdne",
  "key6": "2SuzGcSBMiwDenFhTJKg6ZuxUWeKsVeA9oGbKKmdrypFev5nXNF4C1KdySWN1jaAfkN2GkvtPLP6Ejbb1pdnKsGX",
  "key7": "3mXaHtT3sTmCbTq1iwUScDe7GH2CNJBL92FGRoFLVXnDVmwCZ4CYmyfWVThsr58dJMxzJkpiiT99WjuFatjipwgA",
  "key8": "2jQzzMG24kU4ZiTjtZDwWj5t1ZsJk1UxAvunz9NfBVJbP6gzNfxA3DEMP4rrnCpK5w9uejvLSptQby9khBS2nGn9",
  "key9": "2Jrcocbkryp2MVgqBctMXnzYviyeZxh9fgCw4GySw93VnhYf2kwiXgUo65g4qZamBuvBrkz9kuMCh5MD1WyjdUEo",
  "key10": "3qowSu1MPYmFbpNTXg23ZA8on3ecfT7xVGYsK8U14LCTHyVrE51PvYE2Evn95wmN1uf7gpKmHkgY8MrT1rVMnBnC",
  "key11": "3twQyUZK77AX7NQSQW7URAHoUG2CJ4qdtLjYA1GV9BMPwrX6ztTzo3M8ZXX8xh5LkGNuCCKQaCYGNh2pMx7Gm39j",
  "key12": "4XzhVyrLHHBiAzczk2jd6W6YdixLi5MUHs4CFKtgnSKNhQTs7Ch751tt5pWDjgWkk9YUhBK6kXtScdqqfbytVTdP",
  "key13": "u54cAkKmMHL9UwNTjxpTqbGu26RaYhS4fBUCPf5sMNsgp6EdSozYkKoHwpyVSQuLUe6nzgCHuvAPx5atxZfPiia",
  "key14": "5qtjSnGQTV2xeV6n63fenkKxVxZJCry7eEQUxGg6J1v1UbFmSNN2otayfTJXUD5yWaNoRHa5ucji36mJm2BgAELQ",
  "key15": "65k55xCDZA2rJAUu3VoJBasw1mrSaBir8kgUkk9ga4pKcb4aAtLBSnaH3zWu4js1ouLfjTNRh1hrLEAppU4MPyET",
  "key16": "4thsJdtC6bnetufxLqyKmyV8GbU3Vh44Weiz5f9XVvXuiPB89FWLCAS2mBK94mUSqWKFd3Q21Fj7BTEXJcFxzjDL",
  "key17": "5taD6f5ZpexapHBFyuo8H497RNBFpY7sPY4BiQ4hD5rVeKknBNY7zJDNG7UJxDAZfJ4tj1xhRCJpQw4J1AoVuLvG",
  "key18": "26VySAzv1QJuUZvVniCWxKv86cktvyrsSePBFmCyWwyF3HZ74uP5Bcbw2rnh4gdcHmz7JYs79FZx8GKB3qtwjdAD",
  "key19": "5P59MhKs9BWr2Gy6NsikarY2P2pJGRur7jqU1ftJ7uB39hh6zKHnQ9s9hvgw5gXd3RxvM2Av3oxUxUe5Jnz67rDH",
  "key20": "t1VqGDebStHkcLi2omduchcqJoabN6JymviGP5jhPR5f8CnFadKVmJVxNFiJbfQEqgZ8JorhJk1SdeiwcUYTCp5",
  "key21": "3fk2xA2TgrVZhihr635cPRwxZuZ2sL9T9ckwopZzTzFJCziEBvVrSELiwBWid4AifJ3MDuogWtc2FqB8ez3eWhSu",
  "key22": "2kCBtU1EQSU2moZDHP9dqbGij3gMhD9yGwne2FCDbt9GxVAL2MU7fGxcD3dtf5wfxCg6EAP8Fy23Do7ds6cN9Lbg",
  "key23": "Wuf2qm29yr1ZR41UBnsuc2kgrVfGPggHwaGu1Mq5wANzb818WpDso5X1yzrB1YmNnTwjjUTZMq7aubMtEYsbBQd",
  "key24": "4Py1dV8x9b7LFU1Jz5tXWXiNvxttz2VbqadpKu4vZcv2EgHEZrYt8DqifMus6iSy3sBK7pp5yDAaFfUYHnyHHiac",
  "key25": "4LAUAcHkjrgEshRG8eGJBkAgEqR6L5Ac6AHt9iqoEyweQEtAPrSyHj6oVEfdnnwAMdPXBve8tk1EmfkvETAih12e",
  "key26": "41tiwBmhacQh9BtZnhkZAXZkukuEMEvNkSTaVR851WGeKnW2tZkWyZcHrz4tBNkUpiMYMMk7K6CAK1oDmWcEwUKr",
  "key27": "3GsMst65rnUwpeEshbN5Qn1DobRcBSxL4HG2c1MgFb83GWkBn6YkwXutUCkmroCkxUK9rf8vYePJVGBujWpUEu8t",
  "key28": "2qJqSRpbTvvTboPsCVAthkgFfS5KdBUwtLZo2G2WkCMJoTKzNBXpHzWshfRLftqCzum7jbfiBsRaR9R3RMUY5Ws8",
  "key29": "tTF9wCaX6YGYNXhpPeGn6BcFhABAdghs1uqtSdMA64tfmYQZ7v2LbgWYp4yi5qcGRkdisn4gMCyfKtwB5Emzoyh",
  "key30": "5yVnB3WU3ZWSoqAgyNxYJj9GaYGYAYVeytZzX4Kp1F8Nqfbm1ge2JPnzfs6HuQ9zqaVqdGvF8ek6nv6oobAWU9G7",
  "key31": "4zAWjNqZ14gxqMvCbPziq8BfbvninsBXJbXnEmEnVdGvtFZKjqn9jbXSYfdmXX8Bgz7uUDmZq1mssiB3idrDoRSr",
  "key32": "53DAYEpvnvfsdj2Tb18CxazKSb4YCZYUqDoQWWjMfE5SvJ3h54rpZcP49m5E9KKAaDHkKHuvr4foz3sRcH5uBpSH"
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
