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
    "4RSR3kw9QhZ77sWLgwV5gm2XNxzH4fh5iX6LypWoBoAg3SAbdHvFgfjRyqPvuJB9PHnVnPeQymygDbP5K7eLkYij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "no7AjZT1NHzkCM2RcYHsvDm9zXFDoTy3bFxuDJhanmq67gg8WbVew1PTHLxQCasVZgTkyNqSz2hcnaq1PF49ngd",
  "key1": "4hREsiHfyFCzMEeJstLNTpLkykePEQbQefzuh8jn5NzLYGDP1Gzg2xsM1RGdLFZKRPZ6zn48jSD8GqzK9bovMGHJ",
  "key2": "3qADPxz5sTBgfgUKvTaVbuiFyjpVj1MCG2c79WKAZMH19LvqXPh3hDoAj3pLXQL9YU2aHmC4sgawrGXcBZBZbMv3",
  "key3": "2ACSLsHB4ertQbCiKnVRt4xfLPK6UaRr1cYoTTRx4PQFYRg8h4wzDg7eLm4EiHxqKmzRShtNonT9CQjzcqPSDhKE",
  "key4": "7u22wcWE5YRWV5FvgBowTfGgqmjiTtFYEoN2BSatMHai1fDx6MW6ag3oPbML3nVZ8ieoHTdR214Pdna7M3Z9kbC",
  "key5": "21bFUCWkujF6iRj7V8fzwTnXeek3YWpoKupusaa6BcGA5Kk6ZKBVcv8qK4j1sW3wewCgeUq4muCG7HtZ2mQ5eTGg",
  "key6": "4vTSJKqUCjUbzrkfxhfNugvfygJ3dnymcw9Rs8S5MauLUYXMBmceS2xNKmkfU7daTK3WSAnkJ4KdQ2EQUC2b2TqM",
  "key7": "2LcpCq4QWYSpAtdkHr5CjKat4fHUPGzbdnwbKUCXYuXGiVwUnBRH6ytFeHjWgfV6VqY6FvaCDACdwYL71Nhdfws4",
  "key8": "21JFkd62dJXH13gmS7Egc8L8Lfi6BBKLrGABTJsQ7SK5tnotHnhbJAVdRX3d35ebChyikf2fjWm6r5sR5jR5GCaD",
  "key9": "441J67PhdkBe4Juj6Xd7nqjnUbbYuYvviSXVK9TjLhS8wnSzX8SyMCR3qwe2YnPWngwvFBgFTgbhV5EDrCDYJPCc",
  "key10": "5AB44rnVM7DrB19zjciVEkCf2X2dp9tVSVZqHP5SqaFcXYGPmy147mkAvqR1rMeZChqRntbVsWSUx6U8ZV8koGB7",
  "key11": "4MgEk4ELpprH2GekAKaeWFSrgCysxpqLhYNsciW8ZHkDUpKMsc15kyDuwxUh6feiUqNzytuXPjGVMuKm67pV6yY8",
  "key12": "5r4cSW2XQ5maP9Ucn3fXwvcsM3VHqwQMfQgZvDAs8VzXw6ctU4p7AqEYf8t6jBw7bs2UCQuQyZMfxnAc8SUNbczC",
  "key13": "EJVWXYoLdkjy8131QbAww8YoyrJ2WQNmEPFswUoNfe2hf2ELtEiw3tq3pmPpTiN4gDd1nGHMkPmLRyHdFJmTHSY",
  "key14": "4JvXDHuy4XHkkNszbD1dQ3vjFzBP4G83WqMr1Mj35LL1n5QvP4VueS6yKShwENRpGnhsVaUUvfWv7xpfX77akz6K",
  "key15": "rboVgmt11eAdYuQQhzwB4KGVunh2E3ZFM5ra8KwJZdx5bLPYjfiR63fTDTUoTNb9QQdadhEAvYUx8DG87AxuXou",
  "key16": "5JFr2yGpRxcgcSFFrXgsUKoxuucthnqowwZy2L5VprnuYCgwhnLqQrhgx4zpdKcBHL9WJRAXHbHi9VsLL32EzcKH",
  "key17": "X5ZBUfAcwz5ZDYfPfBB3cWvAe6dFb4qQv5yMeVo8dREbu4NPhEgCyJyhVq5MSpAq2zgXR4o812CCGvFtfwxggSX",
  "key18": "hgrr1rLu5egWreSfPCcVR3iAY8C6AsXZiJ1AD2PDXys6CJPsSbkcLAcir2eJCE9KF8gBV8R4Z9X9p27Luk7sJzN",
  "key19": "4VZfxitFZtEcDJKn1LXHRw3GPXAh6AwNEj7ncCYvgkhkqngHxgfP2DFjwLzLBabLwZHpmnXFm2YikTiiNhzEgWo8",
  "key20": "26G1eu7hMRq26W9MAghCtAF4tufvU3ENjB6uWBmA7iezGRGCah6d1B98oycArr4b34Hko4cPhksPV7BrGkG1jYPX",
  "key21": "54uHnXHqK6UY4LNDxRYbkzL5wQCYV1mx8QTv7Tz9YNuQhAhews1Hx2NZL3sayLY8LmVrhWyXUzR1A2urcpNYz4GV",
  "key22": "5QTX6MwNd6yWGs8uzMit7QNYNtUUiw37seECXSFNqE43FstjAM2rtcwXNdNmqnBDfjWe7BcBRPFbGa1KBmTaFNig",
  "key23": "5WMFprfD6w3cvmFPQhyRGDWW4gim5RXiM8XsQquSFJJuuq4VxsZpneyKAQDwATKRQA2H4gVwD1zmPQw11kAjfrNk",
  "key24": "2PUacDYvnaDEp9tDj6B5rhtTYarJgtVEWD94aYdTpe5Hxs7UNpQaMCP4j4iQdzHkoAsMkBVwCbFAJU3hJhHDxeNb",
  "key25": "fcej4fjW5a2Bb4xkseE6Tqst9W6Cnrz49gjnoEvSNoQ3JhdWR1REBQC8qHXLnMzK43STLV9Ww8Ft1YkRx22n2qS",
  "key26": "3AJcZGYj7dPQgkehbXs32qFGw2LjNovx9mEShhtfBwHF4d8Bxi13qkWwgpq2QaFBHMAFPs2WPqLb4g2LDKMB4Wvg",
  "key27": "44xS9Hm5tyfhy79zKTRd64uMt4TrQNXSbkccH4bW7seYiRtucxKHgqVL7s6SUAJaCRrKkA71CtvuYVPGtJ3rh4jD",
  "key28": "43XjYTbRzXwoAQ4Lm4uwhtrJgaefzAgYJqBrzx1STgEMmeEUs9eABiE3A2pfcFrELfnqtvHps36Lp6JUySwAjMvW"
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
