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
    "miUk6Bcxp4vms28MhZkNSMHnEyms7azDEadULXiYiLsZMxvZKmkmosxXUm7Br8Gd9FGX19JiLmpZrRUsRVRFAPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Y2fJS1Umh5DmAJd34BPdm6jxR7R3BN2niFb44oSFLJ1PuxZaviNcPeKJPtNzpqL1H5mu3yH3Vripg9i9kNwbGZ",
  "key1": "2ZZRXBfWwr6mrxzTfcbRGxPboWKbAcJVzKZCeSpmxWU7LKtTntyrvVn3n6BsYvTfcrxZajz7pLUqT5LbA5kNxwVe",
  "key2": "5qAMF3mnG6Vk7en2myZJufacXTmFmYZstMPG4EVahtM7HX78Azq41TMLf5gpFnfdUaj2wXYmwJj1i2ynRTewnqsM",
  "key3": "3boFwsjL4cUr4idj7mv5p4mNoi468Z6YWn9jaTeuPjbSzf8Z9JKUrjxYUfykutHwii6mMHhRfNog32XepTaBR1b4",
  "key4": "65Hx5r9rmY8zYjC9kgJWkduuY9UN42qedFfXoMihNJBVN1Rk5bcVscrh9BFnTXc6ssbkGYrgp651jn9a3mqNZLye",
  "key5": "2Ynhrf5iJoDpPUmkebwK1VUZwZe4ZztBmN3TZvcGWAxtq7yc1GnV7VWL6H7JUFJEQ7hMkmonK7w2ELWHHqKTJtcy",
  "key6": "5K2QoE5yWAXFhNYgMGadFiQ9tFefCzMFA7mPfbgp3hwTcF4qpfnwe48WH6exBDELwe4kxPVqjFmVU8jwogVynwfa",
  "key7": "Qcf1Njn49dPrgizAQzrLDM98kXhvWv6oeyrzNid6KRAGTHrRbPdypJQDieYKhCZm1WnNonV6oTeyNzKzUAYhNBH",
  "key8": "3NsRVL6uWAc15FkS9rBX8ynNQWaZSjfzF8SyFg17aDFZGchXX8KRFuKhh2KceQ7GPPeQZsFfaL4Lkpg8XkmWAmUv",
  "key9": "5FoQDMWhS6kKnQe16KUZBGE1ik8aTQUBY3Um4N5t8atzD4J5rES3zK4v9YHyZuRkCuvKGWwAeKVKeDtbcEfn1PNg",
  "key10": "5Met7NJoPRJ7UHkzvdCuxqdEngyvzyQyKBa6uwjDyqzVLz4cZvgJgxp96AvNywPt9s8BESYqRtYVXzyRdUvLg7Qw",
  "key11": "7vTMmdnSr9P5mhws1MHNyL5hUjtvUtMKbkNBrNHAHw6iTLZHFSyvCfjhH8FERdmQXGQB5h6s7Na3cFAKpWDPuEb",
  "key12": "2WNUCCrxgWrBDGvDNFHipVzwQNgavb6wiiBjGccukZH9CXimYS64kd9vyd3WkzHJcdw2BsmMMFvGQTwhww6zkXpG",
  "key13": "5CNMHexXxqFCh5nMr8prwy8Xv2Wm15awABEt2BYVyuFHvrJs6fhwqEVfapJTxzvPNSHH3ERzDC74GH4GQcDV7sn4",
  "key14": "2mbncubJtCdXQthGRxWbJgWokmh6YEY7Asz3fAQFuEWSkuHswzcB3WsGphXPNqqoZTRnWjiGN3dSN28vif6mC8M7",
  "key15": "3NoVWi4PS86NX1cGXiuS6LTr4tKUDboLRtR2zMpNAyUoy42gp4JZUAL5LmdM2UqvNhiSe6jtunT4Phgup1E948PR",
  "key16": "4nrL4U5AuncDEfXui87xFD5qE1cUKEjtBNbaceKHbsrsLFU7Nxz36SshjaAmbQu3A7aJs2aDoiQt3FTaUAKSAGH1",
  "key17": "E2RURKbwevSrxKvXPu3BNijT9H1LxFjyKrvTH41vJcFRJTtamzzGT3qmFuSHMJEaNx5bbHA4UxNd5tXXjZPrrot",
  "key18": "2jNZ9cYSJPYmpJ2GEQTnvb6qCkxnesCH5NFRPWzHN8s4vhK8xqp9Hjg44QBe8vaLUMkB7QNFcGYsRqrUQvDLcEhL",
  "key19": "4Vwzbc8BBcBggFQAXnHjdYMvbDiB3h8hG2pJnEXo7PaPksJfGouHvPCq4wgtbTqEy9mLyYbQvRRP9x8Xf63AtoUB",
  "key20": "2LooPG5k9tTbVYXNUanbTmaDVor9hNtJgMJ4KqnDBVq75uYz4tJGegcFCj7iisTAvwjoLBx33L3dWJMnRfb6h4z8",
  "key21": "4fxZMWfGxvZezXaf1zdM7Hb7PD5KtWZ4ubcNu6amWW8hjhLtLk9o788ft49HxhLfsTiQmdnzZaNrkVfGNcU8Hr1x",
  "key22": "5YpEhreNJLmSE3FQPU2GMiMf6266FBBxgXA13HrCzuyBAtmNuNhUD7Ytub9NGkfoMvmiuVMTspmEtBwMv8U6c5Gc",
  "key23": "4txEbTCGoNxwLpLNHCNtC57ZzWSJQMdLFWmmVYWbEKSuPkc6guAMtnhLkpQM6SrWf7gWDQJsKNuBm2Pbf9TA5Wj9",
  "key24": "4v6Whs5HGQwHsjE5neziZHT7ZdD4r5x5W3PPRbtkV7gv3vHaLhMCUG4zKeGDQvzHeS19dEpMUrHsiUmToxes47uB",
  "key25": "3ihdMmQJNPEZz6w44KjmpWFAfSSazEsEoqC5phD22ZmDFn32m9jAD1MusZ4vuu3WTFAgLNnxHBD7k6vKK5JFmD6M",
  "key26": "4AwMhFawxGb8t2CesoQtQMkVm9ZPYxkzTm7LF4SCzsVnU1iLWnCrPh8nUjeWqQkenCW3iua3Sdt1NwRbMHFGdwKt",
  "key27": "2AGHMi2RVhEFVQYPuLPdcSdZxXCBnacaT8cadWkRkfTNNSBg7TyZR6sKckCUd3cdi68uorqoBf5v2hJHcZFa5QZd",
  "key28": "4kNFdqyACNk7jyXar2YR5gxYK34YrkU16tS8gdLUYque5djSCYyKKrvUPYHL72ZYUPdGr1YpQWetpc6oWcN6a1R6",
  "key29": "uNRHYxggTtfaNfDqSdxjy7GwEekWg9TFGLxkcYLhFKzxAz27XS7Z16ZpgMLr8pdgF8FaPVDy9GqV5DuseqKQ2Zw",
  "key30": "Kst53rpAH3NARVyTgL9rK58V9Y8H3TKBYhi5czoHY9u7F8mw5geCdUwMUs5utfrtTE7qR7nK7sdG28NbUFJa6tH",
  "key31": "4xr2sLsduP4Jbsdm6vdd2bC3Ed2q26QjNGnUe6hPWhTaGaTh5eGpH3zAYjVQ5JmFPqnCAfVfpZo666pcjk8WiCEt",
  "key32": "5jAR987KSd6yMvtpnD9S4PDVzH9kHSPZP4Zc9xU9UryAeVwM2zkNcP9aczRbrMmveMdCumwoJvP5X2Sgz8xQHn8v",
  "key33": "3zbnkCzN97CUktUFAMNLpRWuy5pNfwgZg9aP3e4QCGgkhNzAUaWcX6XgNo145cDHhxcnzWDg3jzFGwM4Qe3pjhYs",
  "key34": "2xv6Qa1FabvfYZ3aroxtFvKcMTvmLT1P9ddCTdjgwT1fVeaurcp32svhGDoATMEbHrgxG2Qc2zDiEk3SKQ2ReBXc",
  "key35": "2PUGAhGyzo9zo3CMuZ6t565R89R3QB5yjxZxfgW8P84kxdex9Cw7TYxDB6Pba8U7XkNqJT5XrWqF6SoJAZqbc1XW",
  "key36": "4TuD57PE5J2KsaW6RoehfxHp1D48cUbytzHQ32tzAiKNanXH8ayWBCM9czKuvoyeXjQvs6kyGF5SWNpMZpEKt9no",
  "key37": "2DsWvKK4cSHyjLsNDRH8hnph2vEvLu7LWMmDqyhWdYwpMr8KDXLjJs1BRp8JW3MBGUJPwe9pTgvgo4fM48BdFw6J",
  "key38": "2XNCKkCm742VMWS36P1fkTGpEcS4UDLY3PjfKEW2RqH7uqKgj18tp9Rmmc16duCMu4UJJgwC23A7h51CScs7gPpU",
  "key39": "2LvuagEjTojehmXA5S8cmV5LGU1JXj3Em3kagskQeCUa7h3oEu3pDmUUVHLZkgArsjBLycGJ6ePowUZGNzWNQh8W",
  "key40": "4CQu3yvCgWUAddJggonMM2hgCuqrdJ3Cygya5uvfLcqTRoDXriqMrtVuD4rab6RcXFYKSvZcvckRCudGJLwRJNgA",
  "key41": "5R3o9wBgCS4fJuMdSLyKuy8gLTVcQJqovXeQqJ9AfWp5AtSWnSkUg2w64xXufi7o5dqSrbN76A2PkbUEiZH4rcx4",
  "key42": "3Y1ZyMx6m5hbQpVmqZr7ZTCTSyrEt7zrAERaFAtUd6gfNRNm7PBNXnNhrfS5ZNMKcGZDFvBAVBwZMqVdkacxCNvH"
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
