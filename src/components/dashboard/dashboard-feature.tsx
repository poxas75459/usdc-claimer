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
    "2U9HRuTekuEQ8kDqNgKK3G7s1KBFTShcuVmv6Uchf7CcZVycGzpxMJAVhJCzen8XGmjkwParhmaWMepHKyUnVQKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uCezR441UtdaaUoi65b1eRawYWBmPkgU1DDcBtGCDNRYQ7Q8wYNCbNxtbM7RiduPj9g8tyHFztZmvxo5zDGQoPk",
  "key1": "HvWK2SbZE3VeZTGG8NMVmnLdxA8xLGTcoZyYjCVj52AbEiGugWD473wzkbrb7L8XzzWan7Ggz5avkWFwpfFSc2j",
  "key2": "38Gktd3wDSKgHWSZufJwf2RAN3UiFs3TJnB37bnuy3t4g6hizmTmsmtQkSvqp5ZbSp3GGkhibXAXwYTT6NM1dDfn",
  "key3": "Qb6jeRa9XTdSPEGCxQ8viDPqecs8nTNp3rvj3328naCzz1tExB8ExfNfN2VKkicMfDWXdNQfS9MSBgHn9d6Dx3H",
  "key4": "3W3SXKJZgEGUcWUYL1ZCeCwhkUTXirMPeGXQgZbkZRfNG5nCn26nYw1QZRKWkvNmA6FBnW9HCk9kLS6SerAosorU",
  "key5": "4ADqzzT6HtrKx3Tj2KgJLh5gsK6asry37X6xnRzm9vq4hjN7zNuNZowJqVKQoNN76hEYg8nTSac5ZKkioanyZpYq",
  "key6": "4NPJYqtEYTRZBvMxHqGnVBUqALNQn1H2TSogpngVSxBtrX82ARfJtzMcSQsZ8eMLDTsa7BW3sYKnBNLrbLbUskdw",
  "key7": "5P2DPFhdFcTPqDTGLoyqNY767Lb73bYW9UowDNypXHgd4kFZYQGp9AEEPa9ak7chyk2WCcQEkt6NN2cQDLDFgFyn",
  "key8": "2Bud5t8PC9T7QTzePiU1nZ2SDvLoBw46oNsvMmVvwcdA9UapgQocuccGZ8VRWpFbcaoxsAcuZ6vSjsWMG1iqqjg6",
  "key9": "39XrviWZKLadvEGt8rAefrTLijVXEbLFH69Ca2hdtAy9fk5kxjiGQ9dfJfqjqkmeHBmnxvmBkZ4XB5BuMMyuSwSX",
  "key10": "2zqQuHxruzWQoLkF6Dtt5KkAx5spLTvJpJeRMw5qmnkKAfWNgmwLzi6m38pvMxkCBn6EMCF3AYBFE17qBxBytgNa",
  "key11": "5gxBBTJSrsVqD7ixHTLD2rq8Rv252vz5Cr2vFbvwYR8c2daLr3DdTGEkCF8te3xZXf7zhQKtMp293oiuQPKPPEYc",
  "key12": "4iU5PYhTFi2TjubYrnfJiRQWKmVDbmYDjq9a5hnyWPt6SW4zHfK7avokSLFmgwrDgQULYF4Jk4szQSzYUngMZc4v",
  "key13": "AjquKTsb8ghdjWX8xk8PwbypFYeaH1GrDypMMSmTSBTaeybxeb6WY91gTYsA3QV5Tp8boErEpawRg1aiCWRrWFF",
  "key14": "2XWwzNAwpMdWji9dTjH8pPEKBU1isFmXwqbJQwGzfek1xnPuYxoZsKdgwY4gBu12q3fFh43qhEPMvotCz3fAuk2A",
  "key15": "ug9ESx35k9uV7r4WXptUbYpJQb6FMNn4EncvZmmgS1aTkv3yNaD5gmNPFiLZ87obMq5DqznSFA8zprXwythpEAF",
  "key16": "49mVJTufYk1sfccvZMva2zei9EeCawP2EFuZoxX8ZYu9mCuPEqcQrkgU71TXYnLcHhrWh4YB2nxpecdopR3LpxuT",
  "key17": "3bDLvASXHVsjU54zgzP3kw4i25Vvpqkgc8ZZJrd8nTc1aS6BoLW5SGpqVFb2NUugjCoczQkGeiq2VKrMipZkiMfC",
  "key18": "225KTzusJGz24eKNRPPTPPWVb52W2CeGDLxStKWVxNzXvopMDCsBo3bzZ8oGHn7dFGMpG5cB73atCXFSvDTpTivy",
  "key19": "5dUfJJGXk5QaE4T4Fro7TjppQoyocQKsyEJ2MT5bERaCqT9uzzst7rR9SExpXm1zziCJbnErktuLdzsL9MmYK4am",
  "key20": "4j99mTchXzrJKamteRWof1xLkM2HUHnvKdPaajYWmGWkmqHbomxPqNfyvBy1A7dc9JAHouGG56SjDaaSetukvDgq",
  "key21": "nKDZUduU97KZK9eUv8ZSXRYNVjcxx1i6LQAxNcJTAsfs3fh6tzize9cAhkGxP6zBCSKdnZWoEnKhn7qGvVDdU2j",
  "key22": "3NnMXV6gDV1wM66h2Hzm8s3TdasbdhktPQ2VbYfe9EvjDyMRVXJ2TV8hEjPJCB7mRg4inSW5RGmadfSfZ2z4nb3o",
  "key23": "ve2XuaK5tP3RKV2LzdRKiNq9yvNNPnoW3yjh1UZwRc6nwAZvYJyBc7RoLheA1ySMCQqB9MDfAxXJno6uXHCHvA7",
  "key24": "4YCXFLR527zqd1bMNhiRRJcit4YwT8HsUrz4bFJiZR19fH9h4uEeYr5EVDA9PDbkp18eB25PFnmLAndTtezey17M",
  "key25": "LCGJYv9kX9mNYeN5ujNR7Z8C4V5fyEELHj9V6VZ1Mc3VRSL6FdQ4ap5gZ9JhgxLs31BnvE216KVQDnMwDvuJdAT",
  "key26": "4JDoFZgwoFQJ6x64K827NjfUdcxGYt8WaDBQGCJjJGHJwMZd8aUi8n44iyprnNWP2NHj56zcgydd3LKeBJR3g5Gb",
  "key27": "4eVvKxW4Uu5TvYV5b4VPKyuaaZnadUCZiAM6eqGbMjJ8WenuKsKAPz5wnU2SAYNioJPuhzaDyuqWiSDrrHewqZrB",
  "key28": "2iTY2QVL5Jbzf68Qy2JUMd8kXwLmJ6DPPD7EfxrZ5k3oH8RWMb6eaHsrKyzmZ7tkFdjMNZU66YTKGzEipDj9gTtv",
  "key29": "2Ju9HvkKZJmJd7wcKRGwPqHRxDPuw5ZzefezsCYDp7rUYCh994HV4wVAK2fPhq2zhkwfRBTo8zjQyj8uabbSMJoG",
  "key30": "xaTd8sYDNoAfBxskxTxdQH9G2Qe5VQhpTWGbMr9FaaLkTPRUt28RnBfwVffsKLaNsPVggUFMJZFNF9rSBnz8zvd",
  "key31": "tAmt2cGrC2UddCL5tdvmCVfTEArz6CmNaeJ6bo6Hhvxni8Yfebms3iPBsfn2qNRC2FErj9USaEvgD2CiRmcX8ft",
  "key32": "fyLiBQJgKVKbVJp28w2PnPmLeu6TXKuwmDFMXo6mHUujgQW4NRFudg9DKF6zvJ6jAmhyvhm3GkufHH5MJMvg5Ek",
  "key33": "AsQ1EAWqmeJdwVbxuUGXVuKyS2LtEgVVUfjiLAPettvmRuQmF95AdRPRgLgzmyyQYmzDAarDuY7ZDjmC1PXWf9r",
  "key34": "2WH1NFSH1y13NxHqGrNQUCHc3snwcN3mCwRiP6rE1WcAsSvNEXmkscsoPqriNnaakbAUzpVcoSnXZidDXhpLTvzT",
  "key35": "FdaLSfhDymviXovwcvSrHee1YZKQkgBPrmvB9ifgLT1TztAXrYtzmi3ngMpNTURc1ZQdEK1qofJcAEqcWxmawSU",
  "key36": "5ZdJ4wK8naiAKDPQtmLkyKiMSkD5AYBQLNwAm4L6Hgc1qaMRF1jTBipnU4UXvkLrgmCsZfGZcgMKF4cQGXzrtFzq",
  "key37": "uujHGkFnfp9ri5fjGmuQd9fKGr1pafoT8Rjeej2pq8rzjmuKQ1VtSWtfx76szbddDgoXdT4nApj67T6dPrQA7Fg"
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
