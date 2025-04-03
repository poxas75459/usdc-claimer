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
    "2XutAJFJCoKyqzxLqCkM21HNGvxKdqoXFLpptEbbQwiNFhb3YsVS9raE1p4PAoTZ6tLYeUMj6d3khrUiiL7vvBkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hapdYGj3sAdk7ZXQ9273DUgwDpzAkD9DLTa22FBWZRvNYhP2aJauGcWsEJeJzREsAg32WLrkpqtqS9PEWcYD7Tt",
  "key1": "4R67M7q9bSPYYSJJwmtKzRcVaYPzBfQMc99PFQThc9jpcQJXUfhxo1azXxEjgFkcF93PmCZ2F9ZYEzmjrMHWFQAL",
  "key2": "W8Yhp1fUjHSG21YuiMBk3roia3CGHDPpKQuKGCjL5N4bDAaF76MLXxzzZLtQLPooSjB8CYUd4pSnSB65MscYnfx",
  "key3": "5cGaNsf29uvB8TnmtF1T3SLFMmGxnuYdqE16NVEV9tpkyM58iQXKSCSRBTitMi7nhoUXRzo8EzKDKK8DiTtHAYtc",
  "key4": "2wHDHHb2T3YsANhMbsFD6G9171DrTWwgoowb6Jb7doWWuoGb9sPc2TdDwQRqLv33UMuKpgvKKQpxABhArdyeZ3aw",
  "key5": "44a5c5JKVyfJSh1SsrcfRFo1ZpRHkJdT26NxHecFFFifFy1wkJyuAYxUCXkJDqfSqwnPMPkbAxmRJkYop1J6gdN5",
  "key6": "4UBD9Um5V73mgn26vfa6aGxr8D7n15LeiUhyD7GuwT62LQFq8U9c9E5EtU2NtfgXADnSZUwQgJhRdFzMLit4xDd4",
  "key7": "2ii1v6bG6yntbKSsoLcnWc7SLuQJFSr8xzSaG6FQaeVd5RjeNaWMAXpqcfcJ2EGpWGqER6pkN3tEKdVJm5KCxiu7",
  "key8": "CmYKUuxkCq3VeyHWJKz8Lo951MiARyKNpmnVgySzpua6nz7JsWqeTEB1STRSHouKh869fuVjy9ZideducrcCyRx",
  "key9": "4sXbgrTnbsF7WaiiKnjjpP7trxAuVdA61GiPNMYRRq8qJvbtHKuZgQ3jUWpzVnfaQh1uJV4dYQA7aQGvgisbZt9F",
  "key10": "4tK1ta99BGBZmqz9Cioy8vKieCeJCQb9yZTMVPCiybgzapQw1nJrUjBVaB7cnGQFNzuEpRhCrBHHg9jEpxbdy6wq",
  "key11": "KbaAzPw3aeW3mfPvuZ5tth5uFJ5vyiwyfHcxfFu3BrYPa59iQm7nNipqm9vFnUnMvjXB31yqUe9ZDXcWerxjztm",
  "key12": "uhLNhcEan6ymnCdNPg3WYpgfPD3PaYAjMpkHJku6CNuCQckrA6gUNS6VtnEaFh7MgwQ6eKZJfMoXkZ77w5NQmis",
  "key13": "57cUcBt3TVLWepUeSNpg1Q8p3VSVpBqbiESDruR4CjGxTSSTyNyZwgv2os1QGNkyEgpTC2MCAyTVSBmuDeADjWFS",
  "key14": "5NoZVbS1EjyAXAB9sjmmoaE4QEPs97xKcgoDXM3xJNMhUvb4hZNmpr7dEhNjYxXvudPiAQXLfcKp3wHxDEUnj9Fe",
  "key15": "2XBFHkjVskt7HaVe2UoGgfkypxgW77kjWQDq6d8oANB7jX5KBf6sRZoNxNLhGGUS7uqPVmuoCXoxhSFHn1mQ69pQ",
  "key16": "58YPntjwA6Q5cnxeb9m4yurX1Jc3R5NgURUW2kqYnjhf6Kzo138ojikqmHbQbrGZZChJ6W4CZASfhX5wvyMdTeDZ",
  "key17": "36Y1CRMsVtnyFdV9GEPvPLDukgA2fJXJLBEHABobAftwAQZAExbV1ZKbY1MN9JqWtrjVSLvVJbS7QWTfFGcLqBBw",
  "key18": "2qT41ZMH7RUU1qDJhqnFvmkQsBW2vmhT57tEnAhRyTnqRjraBXi7T5LRY7PwJUY5ft7e6uDJKNtvNPg3aNiE776t",
  "key19": "4t7X6itcqWQJMkAbsNC6qmu7CXEbZeZkz9tHCgw3Df5Wx9uFcb3pEiHpgr8C4RijHc53myWQCpnG6QQdkSiDr7zF",
  "key20": "4Bs2sjnaQCiXETAxJkbJMSW2MTotShUsEwJi3FUyNT1MjZmFkzHiqP8nW9GpovsNLZnZpxNt8jsecRvftR2gmg4S",
  "key21": "5xAEnHGXPnm5yb1nQgFvfucTzUextKcGFrBPNaPksAd34jRVQfFTiu1s5MEUEtTmap7uGodpwanaiypoX4Wu1vjj",
  "key22": "4tYKG8cXnsCGubDkf3nyWyfiinZMJ5Tfbv6gDvxYFkqNfaHAgF2BDDsge5ruT41H7d4JWop4Paywz3MckvoW8Msp",
  "key23": "5X9e1e8KMC48Zspj52DATKscpBAopqiqt8J3DvxUpSZCWdYPNf8e9M8A1TUwbWefeNxhsrFVvfJzJFx5okhvrGBV",
  "key24": "26KfUpUu8pNEMpaA5wP8NawjNxhhFC2kz8UNCnvU72mkCQDy893A2ePi7usWeU8mGfa2W58gc5Sb3mRbMgVLqBBc",
  "key25": "5jgP4y1PMg7CDyFuVEyheWdXjssLqPDcMvTPYfZnwx92mJRM5MSC3txLkkqx7cDKX3n1VCzDnMoSfk9eTCJVv1wa",
  "key26": "4QvzYpCDZaes2FSeoGNJbBCXk9PApSyYTFC63czq9WHohXU9gcwUL9SNWybcJjyBLzSpRsdpewCatQSCXnZfQanc",
  "key27": "2JbnquK9Qfy7ZSmT4Lfzi8c91SWp7uvXjf1dXAbLreqxPaEcj84Mu1EiyLrsQ6otRzA9kejk6A65xzNFKd6KX8jL",
  "key28": "5fhyHsP9Frmg9uLicj9K1EyqtW8ZqYAe6BADpk6mxwRh2o8m7LwEj5k3Kt4oooWDbB4Hzw8xg4BkQXnDK9agsmVs",
  "key29": "vdGNyxCNjLkXUzX1aRWnpyJdZnNG9jvqX96iuWxGg9HphRRVof9xYVB23f2bJXYKgizGnjASa61yoEd6FXbprFt",
  "key30": "29bayKkufLs4TS5PwBpCUjdVdsysEawpPrEBwTB8ak9qS5FyEsZ4D44yjxcLDffCQxeFTrWVUDJKQi9cjH4dBJAo",
  "key31": "NJRUW1cknk6qSoi21FWBvjBe6zeJySDk4T7RwzygkrfovrG1hJ1eKKuMUHPzTUgf6PTuyoofaH59YinnaxeKtvo",
  "key32": "4mULNSRHG5ZUn4UuMy3TRJjRLnrPC8aA4g5kUcp67r2pWAoGE4hpfzbCfaMU2DPQBTS79ZzfvET6tBtHdkrCPfxc",
  "key33": "5CHEFUmMcuLiotCdYS8fUcGgJpLu4eGwNfvsSQu8h62n8LfW2vGWu7R8J3z9aQ2Zy1KbLCRyURqEGeXCbUaHqxp4",
  "key34": "UDjmcN1yAmmYvosVcNGgT4USPrNGDVdsjyjKfmdhe3wcGRnhnRwugEXDdH2BF8va3EfehAVZCvc8yCrMbaj2tev",
  "key35": "3zLiKW2P38EPk9YU9vPRfabGGHdtZBa7XBkvRHv3aTj5R5YJ1BAeQrYzjBezkRXQTrzkV6cy86hRqoJnSXxTnUA8",
  "key36": "5bQaJyPCAUDdsBTKcb8t4MS4awtf5gHcMjudGcYn15ccp42dgRQwVUU6KNEVtbrpvgxc4DciF7KLJgB5cNeZ4Biq",
  "key37": "rpF9fzDfuDdqXakqiXESt9mc8du2a1b3JqvP5J5dfEidBQRbc89aVdehS9MMCrvVnxoDA7aX8ekEt8JDbQZxZs3",
  "key38": "5mtadGtWnGegeAyBkZfxLJtXZy1BACH7hASMPq8bMs1DMoEb9YXKrhJUcNKyS4bSBBYhFT9LVtnKvR87MR2RvvFn",
  "key39": "476xoF2jdYBbuZ7LzzUstg8YByL4TsfQ6taiES3penqHi9Vp5dyu7RctG42oqxkVPPbCfs3ZdxPx7WSh6vx6Cdrb"
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
