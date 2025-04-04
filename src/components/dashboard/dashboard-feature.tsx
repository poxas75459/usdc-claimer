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
    "25dqtupQRZ177p6WuUUCU73paAhXVvFAmN21zc28e5FQ7ibjYCTmb2TLoSrXpuvX3U2DguQkeSapmB3FSJwmFMRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rbtevks8bnU5wpKwL6TBC9d3BGibRJbHiJXurwuazsYNYukMAF8q3ApbkRnMz6d6aYgb6LsH7ncRwkuoEpAGPj8",
  "key1": "65auQWeyy9zaw1FG6PWhKn32D4VQQeie6runLtxcXpSZnd15Nj4H7WFRrTGM9je5aMx5BDRinWrxtr5EXrUTwZoX",
  "key2": "2CXGwcqYDqyjsnWhBWAU9R9iLFXddPYfzZjyKDViDWKJXpgKbEwyXhR9yFA2JHqd5JNWK4LuBkoJ1gFUB5kNkJCt",
  "key3": "5uNiqHrzxEbWxqiDFPqPYF1V4JoNMBLVSZAM35Wp8kzH5JW42wF2P5YTXghKqfmznHhikPZ73FckapRgUaKpDiQu",
  "key4": "3EUvbvmFhAs4Mxp2eLudMZLYFHWUvGffAR4saEcUNiDLAUxSDVzQmZsh5deccKPxtRtxbwUnjpgoYdStxwVgms6t",
  "key5": "mWZ5aDZhvUo7AbB9RhbfevYQz5AmFCj5XmV8D8LsC99yigrbZ24v6U5ZLCwq58AYBpj46J2YE9JhGA3wyW11h6X",
  "key6": "5wqCbXF4gNRStz98MrS89wUyAxhkcHypEqVKbkQFzgL6JdwV8c2Th1gfaKPZa6x3ecJNtVXArnDz5qkDm8JbSqaa",
  "key7": "2VCrAZYYzkgF2GtjbxL1o94PJgTxNh3GcttMjfKDg4pefQwAjvzoDuxjQD9RzyAaUwjBrBVk28vVVT3ESVrYxMZe",
  "key8": "2QKueP9Bv3BQ3N4B2kBmGnZcRV7eT5qR1QNqAWnsSqDxoHrYXe3HjHDtL6Wuvatsj4qoTtXpqTPineidLB9GmR1t",
  "key9": "mic9vgkCTYPyDSFsLBLjMx1UPEpjZ46iePcHfwnw2DHdnwZKmy6o2T9TeiF9NDXUATXoN1q6VsEMJWPAfekxRah",
  "key10": "2mdW2cVyAyTdhXkb2hVfAkLihcFCwT5caArb2S7QkF9hi8HpDM9yB2Lf1Vur3qNYsnFPo5UFe2g27e1sxBdyQbzB",
  "key11": "Q7sE3mNj2Js2Ts2ZxCDjpUMj3Sb3epfoHhTzokMz22RMnzzBzLsiZWoHtAZgg7NxjLmBxNz2a2Bi59hDDPdbpL1",
  "key12": "ymT5dmw1XwMbRgwZpvWaj91tARJ2srXDMtrfhK2V6F6A8GSctFY6NA67qY26aVdbVxt4cDMSpLYQZDDR5Bif6ib",
  "key13": "23T8Z9ZGN2ZWSuCNX1G2DeoVM8CsNKgzTCnhabA85Kccu2ZGPn8EZxwTu6vHC6nhudsEoBkDLaSq92e9M3VcEtYz",
  "key14": "3zQ8uHwLH5Xs6f2WL8PrL6ckfrPf33RCrCS4LEnABnnfdcjFBkFgNSLv5gN2FPZHeL4h5Wu625b2ru2xwyohsdvM",
  "key15": "3c8AkaqKksZnPL8xdfNVzgKWt1rv8fzn7GSeZNqw3iEvEQy88SFro8nemV9ReQP7RmW8be1ntUFFLfP6MQrxb5Ju",
  "key16": "27bKhmu4TRLiMnW693oBzKHPz6jTQV29imW4FkPvVL7icLMXtkWPM1kG4j2ftABfnUua1za1VoNWnzEAT1gEpEsv",
  "key17": "5Z6uGoVknbGWsYAi8w7qs6yh7BN1AmYHSMbmigDfQXkGxqU6r5cLe9c1B3eEUekASTaBC44JUvQZvCpK4rnn53tS",
  "key18": "4Hpm9Ly1sruU8GD6hpMDPgs8foQeqrcsWXh7td6RvRVUdgsX8UPJc9ZkG7pSW668yZTPHeswkH5NREX4NBAYubU8",
  "key19": "5iBrq1TNSQKKoxVHzk4BefMMX7W6LouB8BgxfLFaA4AdVc5Uwyu25mN2iijLhfiRX7aHzST2T5vmCfFACweeqfaV",
  "key20": "3yCeoa6EukpBsSP9dcTem4oGzzhTZotBrFiQcjVsUSPSFpSSW68omhuuAr6Gar3mrDZ4wtkqF1nEFdjVXuTMHP3V",
  "key21": "5JCtPWdrrrt8FSrUz5PvRcvcjR3S5BtF5phMrkAUfGzNpQbEcuqJ396o7GVRa81osFNG7zgi9Z8tR1WuhM66xEeV",
  "key22": "26wVA7GjcyPgZFWme8PJAGCKzrBCF7w9nm3Wug9sLWnABh8HF8Ft4mHdmc5MkudHVAb9YEpjpSYZiK1vwD7fw6eh",
  "key23": "5htaUgviGbj9t1SutkikUnPSHghDhtsYWuUDjyVsQJRevUnaBRtWwv6ZQXxbHoyup55FXJrQ5s5JztZ8G7ZmayMb",
  "key24": "5WoUvy7fPAC9z8RSFpXnpWDvggBGQbF1hA3R863VKE9omg39rcwuDhnsSexx82zd1g2ZmBDr8GiX1iiRwJLwoXV1",
  "key25": "2T3ACHhy3JWqj52UPVpxXhr4GhzC4s9Q87nhJHX6EkkfdwzT7L8oSzqhF7D33AdLM5HXnTttJy5dUrAizH6MyiuH",
  "key26": "4H4X2KcUTdwi2VSV1fUqPNDVU3ASDmBP5yqcygKaYiWyuNTSht89LUKAtrP29uUsxCJMxjSNgHR97eesEbcPMhh8",
  "key27": "5JkJGErdwJ1RrpxWqMHu3jjshZQkqgx4GkqBjXiGYAsMaVRnnEfmiqyuC8QtfDMjFjwG9Gz2w7DhpAriCUXEutjg",
  "key28": "3GJG3nxC6ZGAsUH2qwCgfLymB9cFonD9CH6FEbHA3Rg3WjBSwwRC6BWJCjHGcvZ2fNwN1n7WDUmQhyLCPaHpQuzz",
  "key29": "4Nk9zykM5PUbyn5StKReNRmgwCWLXch9R23gu9iFv5SVBRLBp7Qroxmb6hu1e7z4uCR9TtVcXoze8TxjExwMWJQZ"
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
