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
    "5HdthpUJzaHaZ2Pu5An6EgdocNsBRiWn2q53JbTYnJorWWwLdWGzTMoUxPkMDduSFakH1T3Ym3PWdHy3mv6Zcv9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NJVqhTx2tbC5xguCVT9iD1ioCR9c9KTzGzyyEwhTTvUKsjTyuqJcBuwHJNxPTYys1VBJWq3H2R8EiiNUzmA2D3g",
  "key1": "5oiocNV4f5WxfTDLP86qcR211yfRVvRCP7k39NQrSQtkxiYU2VyDCarEUM5bYJhgcYi6ik4vKSQkUQ6peD2Pxm8j",
  "key2": "4MFsURZ4ZNmXLC35sGYfAXXmwMFeEgPGwCsLB8zt34UQjVYsi8GXCAUVssEumkBRLkQCqD9PfxMYijMU9AkAxa5A",
  "key3": "fkGf88NSu7shDEYwa1jYnC4VxsFSJWM2caYUvESLKNdMHZs4H1PeAR2bGLv4SrpS1vkwaAbWd5DkCyXmCnxLkbe",
  "key4": "5Q81punLSnKwwMBduxbP3F3n6YQdDmvb9rGGVeD8ixeLygHBxrYMT7UDwDkHoYJLCvk7CMEhzfRVdt5UQJKVjmy7",
  "key5": "2HvRPz9Bk2FrXh3rXnmAmhpJ3heJxtLMHHvimNfPrFHCQmnuNnvcTVeCBivw3g2EiXUVs64gWLZoaqXbj6PbbNJ7",
  "key6": "9fwDgTZuaenniLNhB7GBWDEa7PJr7HkTZcRFcaPzyEg1HB4bv5iQxik3vuidnMErHCtqUPvL2gaQjY8pF48uu6v",
  "key7": "4RVmNNgrtWPB4Y5Q62kSEF1c38PSGzUQyKGsRfUogRwMnbbLSpgWawACjSxzAK6DsGBoeEUhZtF8be5etWVS37m3",
  "key8": "4rNkhxSzUXAtz8FuyvN15CQJGpQxUWzLJeJcGkxqZ7h5zhePZicww4Au8xFnNBeRZHdvMADYfKJ7no8odf8SNfWp",
  "key9": "4eejJSU76fbufEpT1y1H8mmTkuBHYMTSo755k6dW1cN9cRpw2ZDpyTBesr94jtP4nxJH3ekSRM2LuM8WHhmaCY8c",
  "key10": "4aTbZDBUkBQkeowmp8jiPsJ3b77HkJrRtmhGKHQPdpMzEaUwokBZTaGARV5jEMrPWxKx5FrgWSKG2ocDuBxkjm2Q",
  "key11": "38CmoH69bssDQqYJvRjNqyPvpKuDNu4DcbV6LWSeq6brefQZAhPstPPrY5StRL7kiDj78ztshsaAqjeC996i1Mq",
  "key12": "3UUkZ5ER1WLoD5CMes5XZiYkZqhqL2BV5znRboGnphfDR5hXB7HnNBzxS8KqBfpfKTtvsqjY8ipPTBjCAayjZd2Y",
  "key13": "5wEMJhAWT4NHUJcFRTUrAgi67re16VLQcmmN8pE6TzbfW5pTCVijeX1DU8SnUkDTeBLTWSd6VNL4vGCNF6MxGNNW",
  "key14": "4HGxECnKrpgckfBUiy5jET9wsJJjAB4mD1SCMzZqn8kEyFSLd5bJphmjKrASgMumY5dovSGWv2gnRQg5QHq1XG2P",
  "key15": "fp7SHxBGTJdQh9QG4HxvhGajX1A4rN8taJVj3AkA5qBqxnUrfUtuSPjRad1nZrpYmvQQpFPhe4QcfTey89ytwe4",
  "key16": "4dN5MtDa6o2ou37wUcqwaEB3d2qUKqTefdRDuRX46DuWB43fPqioi1CnVoWdvLic6S8Pyv4GCHKNkAP81fRwg2ud",
  "key17": "5S5arRT84s3vxoqDcQ9nSa93jDcbsXdRHrSovUYmFQvwvP2y8Ub4BkmsskSsJAJNupY7peoYB31p6is9rqZ5T8cA",
  "key18": "41DDabYp6KrWWULwzL4nF6a5DSZTbSFKuhF2WcM8XJid64LoED1FrPqBB1rN7wBhEyuxGbP2arGnForRykdnXuxC",
  "key19": "3koiYdzeQFo7TSDSqqW4GUybX9wHorzEkLJYSDYy38gzD4XuLWguYPozBTZ8sJ38FDYeoUJGgUZhumkydr9kViqj",
  "key20": "5npgjWD6fmoSshTUjhm8hfRUu5TAFP68CW7S5iaj5hR61kPHURJDtrwaiPaLjYyKuBXD1E1F7DuYXA4p6LPdr2ta",
  "key21": "CTLnoTSzg1npcALy9q3ujAJDLmLXjQcY3aXDGrV9qygj6CceAABXvZ9bfWsFkjAMSCpfFHYDkh8sjL1mTKeJdZF",
  "key22": "g59Kx4qeyD4HxTttb6ZdLDEzZJhjyDDft8Ts5hz2JVkaWQyxN9dmtPFH6HmMqS2tDjKiHQKqkBPuzZqWCWRMNvx",
  "key23": "27N3ZFKAHeRrt12BMyEz5xTCFXwKZVF1csMywGysrFh7nAvawgVMnCJGxG8gdMd9qkXEBHPcQPjFP4XqyK2D76vK",
  "key24": "5ju4E1F6WDdNhEPdVqEzgXtogbemp7Ek63aFbFaCf5sinhMr9q8pba5MbKZ3JsEsZhT1w82g3qRFgCNHDjrWYEF5",
  "key25": "4HUAoUgJTqKWBJqruso7NMaeJcbMWpuyrWnjXKStbvySUCyLZmEQ8sMAKuP5VPEXWMJcCCNeaubTSaNifbu7yE5c",
  "key26": "3aDM2zE1DFYeb9vzeAhHXVDKx92XfnratmrSuAyhyZvyAFxo1QSPPVTUC8JmYNHGDZx6wEHgEtFLsfGxu1738JA2",
  "key27": "5dutDscrahK86P9dYLQ3wYCo1KjYHkDCrbu8UhQ5RKvdeomNwk3EE8XnTbYhkPDqr1DXSG4CQoUTbbQ6tNT5X2WN",
  "key28": "2tBwVb4NS5D3A29KEzt7T8S7VibAfsCmW6U1aXf59EkKmRdBrNc9wu2K7dQeqJ85jBpXSo4GxpkwEkWfQrJAZo7a",
  "key29": "3fwpKjHeaSZXpZgzsbhi7dijHVrawkgqJM1tr9oBsfBmVbnsRAqQG59FVKZnAisgK2BYyKkszdakQ6hX3NiBsxNF",
  "key30": "5ShoPMKfnWAMrkGfgvhqUiTpVvjqyNryZgmjTgr2XyGnPBqFYjtj8uN1YQdCpNAN2sGRruYZuJTo7AYVz639r8pU",
  "key31": "4K9r643U1PzepnSsB6QGn6sVYtAFjv6WPNVTfZjH2JyjMqQL8cBxhKZ1kNynEof1GPtSKfTwSwZqqAJ7Mua57VgB",
  "key32": "f8NVWBV1AeTZ3xH517TrKc99YnsdYiQ6966AamN6FwRfcV4CH85DAAnoDJ14JkSgmngsA4YPfYLy1NqXYPGksRH",
  "key33": "67fMmEW72B6wa5eBxk6ZqaDFLGvNmK1Z7cdkVMWUnuvj1MTitJUNjC6Gr6W7EdFvhCza54EFkGsx4UCGPeQBhvLi",
  "key34": "wC9cnBemqMJ3BUgp95nxHEKwZ2CjGmqXdTzQyEyPzY77QQ98fQthPgbcEUSuGVV78ToQ7NSZSsU8swWzMWc1ZEq",
  "key35": "5pmS7UdeLAPAWczoWpGic3i48VFG4MC1NPzVwNER916rhMFRKU1t2earUF9ThiN1saPUGPDFof2Y7EhEvNVysVsq",
  "key36": "4kjX969eVBzvw4BgvhJ1YfbMW1PtgmmFEX8euKz4CNV4UZchkB1Am2sE5CLc8RAu86d7p862y8vxiHMqTeSbkziz",
  "key37": "2rMoyhkpHTkPYEj3F5dWpSFJPXkjF6WXqoY5b4JuUWVo6MjT6ZMEY7SurAvYMhR5a8fkTin9rg8TxqkVF7r2azkc",
  "key38": "4rEr53YvfgHsXehjr8kbE1bgY6KiZqAhCZL9CUARC3MYN1REjSVjDnGkjfNGVQfHec5WoixQvc8gFYpNMea7w1WZ"
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
