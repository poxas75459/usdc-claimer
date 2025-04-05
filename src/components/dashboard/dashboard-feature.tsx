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
    "65zho45hEtN9PXBhUY2oy32oF7kPQ2ZDx3osWcqVEzBwXSe4fAG3PcPPgZk7JzLtrkQ1W8dCjK3rVTzwkceWEeJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YV4m2Vw9can1shpUDoZ5G44u6vxbkcYLwweyRvt9GTuaAGdokrj4KXV837iZHQoavVYhRtff1LoZkVceE1nbngR",
  "key1": "36uaYgnpBUtzHwHA6NVcoeXpfbLb7rneZrgCpNo2ghEzHKeKWhAEwBJ7GEiVhzM2WX8cCvdV5u4pRqNetuTbTaeF",
  "key2": "jEzcj8diV2qmhbC1bpgzLZYJbqvxGBrK4Mfu67SWmSFdi5jrAGnNbCCZ4kNAhZx8C6R3HtWJ7p12Urbxtobe1ND",
  "key3": "584r37yJt339CgNDXbNvMt45njcYRBqvEgkimtYtQGuUhACq2R5axarZwq7zgPL1c64hRvxeP3svZP6QvxRNULUw",
  "key4": "2ZsD8wChMSSWUzxBYxfzReBpdCyUuwAubzzkfiWKopGH2tvjeyhuMQ6YV3Mz4pa26gLcJ1Dk6TNG3c9aM6xPV9ij",
  "key5": "5aBPaFQKpweD2MmPvWRDx4h8xj8WBHvLJ4cWExR49MRFsUdnfBj744kzuaRk5cXw93K18k1VV5Q8CGwNrtQA4MGb",
  "key6": "2NE8XPges9Zk4qMKEeXkFgtPuTNtgW25ApYRya8VVvQYojqXV6pL2rJDuhZ4anDkVewUUMLZvWesu9y6Eg6Ufpcc",
  "key7": "4oGHews1p3NdfYrwVXCXx1WbcBiPC3Jp6BA5cmuDpxgvJKJd5qHVohY3iwZLjEnCJTwCcdFdvqz4JYRPh2dRvkxy",
  "key8": "5HKST9z2Y7wNgXYbLfeQ4nhgip2RvSu4g3TWt6Y9G8x3qiio2sGPutkHfnfznorK1JUf6Rwh7qThMh1jmv8V6CPF",
  "key9": "2bnBefriGQMpMKfT6zrNZCbsX4gMBmyNqZpcSbwWzkjxF5cF7Wc9jYqgxzqoCbKgV5RuWus8E4qRN7dbaHcWZzao",
  "key10": "64BXnQavD4pC81gvwZ12qGxDybAUZfLNCjc96LQMup8JPtsmqkL4LnJrCbWNAXGcwhhHapbzki2t41e4UqQgWNen",
  "key11": "5hxXQczNP7BLc7RkGmyzgKMMHQMFYp9PVzYpScqJDwBFjhn4w9hsKfBDAZdwbPQDx5UotBmkVQGs4VPZ19SwayLd",
  "key12": "5LEhq2BoEdZWPn5Nt55gUfZ8jP4NWVL5RRcvzXccJZXUdnh7CkRpyWjTEh5zzjTAJKG9mAyfkfcT9Hs6QFgbyBUj",
  "key13": "4VNt3SHWXVqa3uTtzfGn7zHMeWXaN4GBQLt5NM4hBBtRrhmo3tFugszmx1J4562uyAr8mmWCoedUydG18h4osEjm",
  "key14": "3GwffZ7mj15F5hJCpUh7jUCnpbjdo1MCTyMozMCze58E8NukiFXSuFuYwwSGs665a9jdJaMfX67N3iHNCpMUA5TE",
  "key15": "2wKBBJb8URYZLDXYZ8ABwjQ2SyYhu2aHsnMDkwhMwHNgjL7QWDvw8Ps36rWmg2usqicYcDFs6WGbdHjh4GuctoC4",
  "key16": "3LvdWKRt16WtZPeZWHAoniJCmyUzMgGxKrUhwGWbNGe9rF7DjpcBrbH3uDKPBy6T5zu77utHEEVjMpZrhxoo4Kyr",
  "key17": "4e6NX26Za7ZQLzwhLg2ym8g8x3g3Upr6YKGv9fd7XrzUegKxdNdRiKWMFvweGorcoieK4UwRSRQqVdCDAfwwjYgM",
  "key18": "8KZ73JktLYbe7kcixpVve2m6hqPvzTwXJWj4GS6R1SnaFvSK6mUdkHjYou1VFooYbmhetxcFmMpbYjwcGxmQDPg",
  "key19": "39UewREAn3QNumqJ4P4juBVoKUmpnfwoPcTVaEBbsRmCCMcDQYrYzEh5srpSd3QbP4n1VsAB7vFSmNay6Es74mNw",
  "key20": "32WmNfKLSUvMptabpvRyum8Wibu6UeX1rHFyfi7tkv9Tf9fvo2Hz6Uun7ssyPSZxEK3UAkJ1mEemGtxQraJL4Y4K",
  "key21": "2VRb9EfWNWiUFr3N9k4GvBL65sFh4mc7vBCFj9TyL68GgngwFaJ7idHv8E4abPLPcDpVzaFUhqu8sudYRPox3VDH",
  "key22": "33it2jVhA97dr9fj7rvz96GCn7FJURnBL2i3kCUeDBGMCa9X9PFSQhCMJJAhAgY3vV4WyTjX8PjnqT4U4reJ5qy7",
  "key23": "4JNhDnqUQXjReZ2HdPy1hTTbaD5ccKCHezbNiSyUDkEtjs7Qtf8TuGHa96gH7tg6wq7YvrQuWrAKwpLWgyJH5JFo",
  "key24": "5M9xb1NEtbpF7HvhHdZbHVV5nx6RfzpZrb8fJ5N1Y1Z8J6YeqzLrwA4jbGevSxB9WQwTxgQne8cB43bFUPbNLqgV",
  "key25": "dMk4YtTG4J4a5B5GPBVGuLQyxkjf62pGZyeRLsjohxqBwRsLBzJJSiZ2SSu6RepapReWPzZAtTYozwPVD9ra3Tp",
  "key26": "5CiJQu2DZ18heXP2rvK1oM7wsQ95nDqAHz2KcPMDJW1YHAXYFyGdYcXuHYp7NvvtNZuwtPjjdfhgDscXSvi8Fmr4",
  "key27": "3y9NJokYNWbSghNEgxrwtzuHmoaKwXmkyYiTsd2iyu6eZYZGNQnGSittSJwDx23YYf6bySHBdpLviN16AYnUwua3",
  "key28": "3LVrd5Q67YBn5SH23s9g8uBcQTc1PLsgKJtCiGawhkkLKaXLh1a9nDK5XaMN99xGgtt6A7mCxuEJbNKhQ6G2HXwR",
  "key29": "3akNdzk9iYcRNtDVWBXZEVfzxzynYiiN4N6o9ZYy97rBFZaDfyFRToNwBxjmpebV1aGDhnNe62MDDimnURiUCnsg",
  "key30": "rdPBpe2LXuCvuqMQErPLRgqgKe96Dj8wG3x1bYbgTSB79JYaKJdpXfdWwL21wYPKU9DyzeDwCk98r9ymQJ4C8xR",
  "key31": "3vKhdS2xyESfERH7YkxESgJGiAfs1wzoWP5qQPZJQpgHvADX38GhN7rr9HnPndZZiruBS66XR5N3YpX9vpdgHpZk",
  "key32": "3SsdJYUz1YC1KziAMxUSVySScn1LC3vHgrDwY6PxYqnx243mcapL3gqFDfSwSNQ3rXDkc28cG9bGVNSRu5otV1dL",
  "key33": "56jyTccUb2zirr2sPqr1HGNPouPdrCmu7A8pdu73HWRhsmQ6BgQugQ8vrkj7dANkegncJo19cpxnqEU2LKa87u1r",
  "key34": "4RrdEwQnNPtDQJtqMgzBJha5c7YRLhk1Kv2W35BpZBGWyKTmUD7Mpu7DQQsnxKLkNBRP3QrXWUoYW9WQ9toWfgem",
  "key35": "2hbSL4RCwzNxwsZfX1shbvmkEWKatMnasFfRmsw1nh9mg3bsfiCjCafqDTUuD9BpZ76AumURZCZ5KRQkM4qZBpgH",
  "key36": "2NSUcrYm1naE9Z7eJipe5CcMdrWmeY4Esn5FryMdine2fnq7dch2wbdxobGwDGQ3Ru8HCwNaRjXCxozK61LcwacL",
  "key37": "2ffxqAshQ9MWZwMmL6Ct9nA4wV4DWptTkLMbY51wjXXS28r1EUEMHLjE4uA17Yfz6ecuC3nfURCGHhN1g9vP4feZ",
  "key38": "3yXnWJhJVHmNYuSNCjDwYDPRMSsFfKgdLM29TTo7rdt1y7guN5aaY5GLNNKxAQ3R52ZrB3BjZ5wFqJvwacX9w1UK",
  "key39": "woz4sM15VLZWGJ1BDbVm25jo1kSGmecGRQjdNuJNGdogRvsKVAFcKwCyAjfEGVbgox2pTxXdEMVhWVYdjVWTiKY",
  "key40": "39BRVGJ3jpQDtWUohXG5wvJdtjaWoP6dr8z6R1iUEc9uMxYUsPbqBoh5ro34Fjv1S2UtJccHUptoGvhwzSK7ckVG",
  "key41": "5bEv7v75ik2hjUWhkrR6DFrmceoxpcmsbaUWqmMVjjHQVPZnXpj9yjz2fMNG9WC82ybr9DNqbqfzMYmYe5eBKS18",
  "key42": "5R2fqV4pSZVTRqexY98Z9gwxWYP795i28UWTX8D8KRcKLBrW2ubffVQ5nAEmRTKXSNyX3xk73gYGJyDvnn3niBuB",
  "key43": "2wi3EYtmyN1up31GJBtck6m7f9Nt2AzYkdmDXPWoyrEXwxTURudbZYkor6BZjAaQoQcKvKxLdfRAxTzFzWKAjrGw",
  "key44": "3zQH2wh33kTsgvrPgkZi3LaFKQKqzYCfQRWydHFwfVDDFkrsa21F26VJf46YenJ9vuycYeywqq8LdKaLb1jaDRFK",
  "key45": "3qcnEe9kzEfPyJB9rwewA32MCJU8yMBSaqK825FZULdqAT5vTgEFD3KeK1AwyBuLXzBzop2jPd93xRPkFFBTQrum",
  "key46": "4u1YJrkHXSfMydvedh5Mkx3c7pDVwrQwBJsjZ7B9ty9izrALsBfWnBrJ4pxeNhRbme32WCfAXRgn29MgHBfF9u1b"
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
