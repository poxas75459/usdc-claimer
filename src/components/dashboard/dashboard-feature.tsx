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
    "2jHP7THJ9T7CAU3b9eJWobHkyQ6ZxNFhnjkBKSYLSKK81CEZ2Nv54aXCpd3Vgn4xcbSzQf7x8wxdSU1dRsib3E92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41nxxwzGZPHa7Z9VQSVUdEkXivbey7dCAX5vJJBNUthsgeCjuhijYJ7Dzi6DousAxA8SX5vxSorG1XLntLnmmCaY",
  "key1": "2tysCvRmTYxs3qnC6PMxvUxr6o95Ej9FcwEd1aqpMkLWAXugiinaDEiAYQfujkRCt7kzj4tgZzgSW6jcjWdyrcR3",
  "key2": "2tkqMFFMDRhqbUtzwwanNtRgRardzH4nb8Kjm1XXdjvro1KS7nD6swJC6uBayxATp2b5mY9i6Wk12mRU993xn1K1",
  "key3": "5pCp8q379fm6DnxJmcGpwdrwUh3LChXGvbsUMBDfGMhtDELorPfyeWiLBdY26tVkCwynBzBMHRykdFNVgbXMnC6e",
  "key4": "4uFzgEKn2GBM3Kiyz6XeZJ5Hj9uJRKjH8bPbo2USr2bRTAQHNvujiQthQ7WKrRNsTkbUQxcfRod3fUJ5WEkp6HrF",
  "key5": "xcZV5tURUpGcRJ5aRb83JrhGmuk4j1BKrkZcynoYtb7RiSZBc1yHLXwTnyspsBxxyhb7RS2Cnh7EYqcxdz9PmmG",
  "key6": "3wG5uwY7nJAmo8ykoqg5ozaaHUkZmLHnruksChDVyLdx1G3of8pGK5dXtcdiBVdjmKTW5mLwAMai33pwrYyoAZje",
  "key7": "23wDGzT8UQ6Ldc4E8sYjWbNLA1SmSAWsmpz4BinM1UHCJksKBsqo4tQGeiWPxvFHZyJdqnZDMvG4dsdJWhFkseyb",
  "key8": "3kBHXeJBdE4QWRa1QKztqGsrg3VwiPaWq2aCBpgBXaNtP7R4xBJSDRbwpCJDHtteqwHLXFsgC7Fm6w2HSz1uTsQp",
  "key9": "A1HeHQmtkqfY2BMAyXQksnSZdQ6CsJnBNjWzFBTxXDN918THDwHPWLwJb1B48wWvujj9iG9UD6zk5r6iw3Pqup3",
  "key10": "3H4XJ2wdSnwNp6XqiEjdJDcfPfnwXgr7gKjBGvNZvppKzfb9jDoBq2eMCJTGXKHvwkVgr1uxaiVD6YTgnwY11GGg",
  "key11": "3G7rCKwaorynFv242UVSPyPCWZSbR7DDQb3dEqxcL2PspyktfzrPbDcQWA884EGEc1uPFT4hJYYAgSB8WefvU949",
  "key12": "5uYfWrCTXn22zwossyRCrA6ucu3WtL92H2qUDbBu1Wqca4Mb4BxiLBZWX7YusagSNYeB5opoiEy6gnsFRUTPsbu9",
  "key13": "43baBqdJGvWp5hHjiNEz4ih9Qb6e51cEnfFxvL4A649DnLBPUyXyB2rVErUANZqXgjRPArxegtQtwJZvFBZ6hAwN",
  "key14": "eVW9iExXFVYfbZyPvhPXrC5LN3Ep4GW1u9eYGvAW2wQwP9SG2rrKHJVxhFVvQhhkAiH2zWnYsucXmKsziGe218B",
  "key15": "vtUwuZgY3J6Q4gvb6hit4NMyGXFibRCjSiNhRSSfoUz7oNCKPZTSkVUGQFX8WkpwoyFBsnWpjoHQj8Qtb6B86dD",
  "key16": "4qzhzY8Wa4prfzqCiHddoPLirz9woTYQXrzvdGZ3SsfMHnPLG85ghC96DaKsSLHHDRxbrEZgpC2XPxz8jeYRL3CU",
  "key17": "4DnE6ujSrAMVviBzTJ6A1ft1DDtS5uj2t26UtyN8VQFaxoqmLa4Ud3gqMkijLW3pQ6sHKASJuetjtUj5d1UVb8oY",
  "key18": "5sordebq84SvY7U8UwRmgRfkzhN23c5n5Po89k7Agp2hBexXvvshKW7HjpLaN41uK194nSNt7yQ1CTnyms8SgLcL",
  "key19": "61rHsB32kJ8BcTxLPLVMbX6nqpBxFEk4d51vokcXjMpCiMYPHSM3Rzp4rVx65K5k4cAiP18ri4bRcP9UQkGseaCb",
  "key20": "3NKDAcoE7XEverhjtPbbuD7YF6r3KjJLo6DD2qt4QmkpVsQfo69WgdYfodygP3tnWqeQPscNY6yxVY8Zh1b6Rbn4",
  "key21": "4uYJjjPZkE3Zuj4KJMeHy8vxLNHZYmB8JSuNaBCgLWNzDXDQLs81HTKATrECu5JsLNiV1TBSZHAP6yNb2cdBBBU",
  "key22": "X4Ph1afPKMtAtdmfGeGVA9U6tsjv3mpdcFq3mM3cWtssuWqBZE3mDExsZjuhRcowq9jVLpCjgQ6EW3jy9DsYp6n",
  "key23": "2msAAo5dot7hptCR9QF2XGcfW4GmgwFFdZhNUsQaevM3JRcYUyDWhEsWHey8oh3dfXy3FzmFgkYxzNRr3LxpiCca",
  "key24": "3wrsYmm2JC8hKyCYpggypV41A3d99FKsTDs7qiaTBwWHSbbbvyJbaPzMoU8ziKTEWArzfgT1Uwn2UpJuYhtnB4Gg",
  "key25": "62gKwoy7rkCdXwwQ1qaCqEkAG8K9FWtNCgdLLM495piK4wsdeYCRRe1JfyQJvgXWxnTagQWssjC2prhPEVpn1ULs",
  "key26": "3mMWG6WvzNXuS71sMqsgZjRbpZbCVVQyUTi92GQqW9Uzk5mAfdejghe6tyfcb8RJwZkfKF3RnwpzTnGnECXM5ua7",
  "key27": "4F7D3tNJCxxm4XzEUALrvQzVECg5513CB4TiCJkTKnqwM5Zmjt87udjJrUL8Bb928AcweWZnNGnbFA61AiHpBUEZ",
  "key28": "hdm4oqUfTNPmHdyrfv37aWNnaXJwHiECJwtm9hqUaY4UAPU4p4jHqdghU2AUTb11UNp28hmZsXVjbVf9rUt3CWF",
  "key29": "4x5fLpZvHRC1UAWnqk5KnHpgyNgEmqWPKCBY3SazDwTgBnGAGQt6dHZ7HK1TPaYzgZ4qbEJScfg8dz1TM6QyGvht",
  "key30": "2ygDMW2r9j753w3jUBLyWReFBYSB7uU7xrgWaBQZ8jDNHRuhcv2uzoFPaQWeffUqmwzN3BzPvzgi6pdZtknrsLQD",
  "key31": "3a7KC4GYMBjteXTsswL8Bv9rWk4VVnRAATwKHPWG4T1VGAA9ZxJYeckMhcMzyBW5YpJu3dVP2EVWZzqaFTbezmr4",
  "key32": "4dm1NCYwv5ijtC9tAbVdH5n4fNKBUXFyxxFSUgjbhfBh1b32t4b9cuTN9o2MSCfzXv8U6thuLU8aMqbxTfBU8zJc",
  "key33": "xRTTrPx8N7w8JxT5LsZaauaxCbmXUBvxxadS8dzY4e5fLoy6nv5cS5r1wDq4GPXfjw2yx1HAn5JPKbsJQfLacXF",
  "key34": "7WcQZztvgguP2tLUujbAWZN5X1haBSBFt9Sh1KpnsHmUakPP7Aa45QThwgbgUP84gzK6zqPDPUSBP7kERaErVN8",
  "key35": "ifzDvQuH5C8m8RcmHuzUXsqu5RagohyyHRYh6t4Mwq4kXEAShstfzsFiP4SAtmJqAFCTtdDKkmG62P5CA9BDkqi",
  "key36": "2oYCiBDb3oUh5XFw9MV2ks6astzbj4eTsuLCxcsASx5FxGpecSrdjuTh8kwZPM6BfHW2bTAm7ED5LmjpT1My94ES",
  "key37": "5bzZgsWc4G9ncigRUP4jBneLuNJPQrQRFKpMxq7d4G7Q4ysJnvg37kk3wLEADhZVxWimafFhXPZb74TkjywBzgKx",
  "key38": "9tMqcfuCYFga5jyVLGNJ1V5Y9cZBRvB2g369HZDKxsHm7TwmjVQeZqUbcGJksKssDsG7NPGq9BHGKHYMqLi4AP9",
  "key39": "4j3b8wwDkZ9qWYcexAs18N5w6utBWx2p3ki88hdSNDifwyK315GRYVV9mBYBjFuN4Jo3nX2E9mMUjdpNPZtMNy7K",
  "key40": "4aUU3EzvHyD3VssGKg6t3GFfyYti5tC8QFruCjSeqPBGYXgAZiJWu66g9xa265MswFU22uL6n3J5EK1Xq1hHfUoS",
  "key41": "qAJJGkGnNVedpmXg59hPB46BJ3a6Z7UN5zzYe6V4TqvCmLT7YHwQ7F9ywG4C3p5EzytGRkuaNFMmnpw5AeAXjMy",
  "key42": "5VZCSpqUyuhWNBebageqU4bQ5qkfvbnz7iYWKJZLM6eiNhQviN7Biwf2KSt54djknSw5RFNGsz86YVxh7agxsrZ6",
  "key43": "28mBgvjfHXuesZCMFmNKmkth3TVXdAtVBFU8q8gCZaXv9HP2CwJQLDEzYBgoS8xmV5Q49GEJqAH8hsgjcwR6S6XC",
  "key44": "2wwY4FaWB8qqHh7FagbYhncE1yhJj24bXoFvu4s1bnkrkVRLMpnVaadzTxhakP4y7PuowtPXu326bBv8kPafGV5W"
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
