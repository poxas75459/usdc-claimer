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
    "4jmkuZwZLSiapNsiWemmLBJYpEhCdDNyw6JNjtFuQag5P4DuvxpgPLCkv7ZtGfrGnpRyKe1VhAoz2LwrMjt94kXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GMepvmdYH7LnMTwR7hhuomegvPnZ2dqn6JhKhv2Vbq25rcDYCtGEUCwCmEcnRbNnZwcxWB44SD4JyRsx3UrX1qH",
  "key1": "5UzmhwGGFfyNn3cAPqhz2nzF3VproMsvSAo1onUaVG6PFW2yD3aGQMNHjSFmdunhbTYHEsjsdcKtra2j7VsQHCH1",
  "key2": "2cqN2Uqc5fv5Znh1mRUGA4Vod1NUhYsZFmpzAhp8xWnT52jTiCwt3oW2SPB1XGiCwB65m8YzeLFivzKKh2TQe4rt",
  "key3": "bEgGz5xk9s4LgYXL6FGzBGKuqaBNXgMB6aRuLaWtrcrnfMtX3x7maccCCzyWKqZSvJpYEDnZeqw3JCffE1MuBNm",
  "key4": "Bfo4Enx181cKqRP5hd4Fz1WHjyDtXUhXfBrVm1PV6RA9aoGbWCHh1wSTjkvDVUKr6mknTuEnT5H8L8CKcwKfFCe",
  "key5": "2piNC3PK4MDojP4EZgnRqaQLsx3GP9zK9t3rpbf8kdK49BfNx7T1UBMPfUFb8JgyPQ2S9WNBPH75iK189KJSG2EK",
  "key6": "2VdedgCdErj5NLf3eXKvRk82UjQ84x3BxLPVof8MshEEwVtVWHfpgSavYn9fS6sGnMm69fVXtieYxyfxGZ4coLCQ",
  "key7": "41tuNSeQQ8346pVBrQN8hPYGzsBNT3baukMbXafhx8Wx5xcjkfa1QvTCQFkB4JDQ5cc3528PshVfTpe4PJsxd2J",
  "key8": "5Eakk5atVzD7Gy75DQ1C4tdFj3WvBSJ2AjiADiWbqP5rALC2krvCTkZkJhLtmza3ZkGw1xMVB4pzKp5mH1s8NaT4",
  "key9": "2334X8EkvnaeE6gupHgd8GaeMMrv6cc6x4Arx9bpcmJJrDkCQnLVNq7xjyWnQYcseBAV8ydcqw4C8oTZy8PEc82g",
  "key10": "5fUSHgdBWFdSjFzCcJJbFSfu3tJs6sKVSDGsKM8PaZMy8hFqK3PM8JLVnvZihsHsPjJiGcy3ZdaQZ4QgA1WAZGxY",
  "key11": "2zRjZHDsRNf2MEGabvNgwRoZ1Uvq53F8xtKaCDSGWWAH4x1xQhteroSWe7hNkmU2hFkLsM9PcwgtQhYUt6QNdRbF",
  "key12": "3rPY4SGTu3qw4XNjbwf29ECTJu4EYoYJ3ELBRd2cDcT3nDuWkdxyAXocoVWfmMo6r5bsaKVfiSC9rGSHbkwcnSCD",
  "key13": "43E55KugEcwJ9CbCGLZiTJW4thCdprRrepw6rNgRn5LRYxRvcfKMMbyD43AaNN3A6EqsHFjanvxWwjMCV8HXBQrh",
  "key14": "CifBLkaqaPgqs2onmBTg51kw4c9jXJfnkHSf1UEeZbHS5eED78ju4fnZEveEBLkmt2rYZV6RWRdXMLRCiGePzCm",
  "key15": "S9jvQGSp12NaS5WTWPhCzZHsbamE6LLF6kQsY97HBGYjtnaeDj9pCu1f3uqazFWf7BQyJ9UjkEWMx6R8LGmnM9C",
  "key16": "66whbDJZrymMYR3MvFhUCCXBPZBBtdUqKZ7iUAa5GwztwKvTQYUB7ZQSruxhptaxbFs51R3dScB2k5n82Wsq13am",
  "key17": "3k48wNXNtonQUATdmztG2YrQUHxPs1U2dJTopXS1LKSPA5iEy7dhtwiGUUZnRHGwSKLfwrRbAxGTLNKsZXhWaL7q",
  "key18": "4gx8bjF6bACAcNQbrESh5RV8gG1BtFqnZTmErWeNkZDKjqi6UqgzDHscmQhxqdoRSGouoC5WL96PZQFv6mkfNrM1",
  "key19": "52pXDbknieQa9F8Rtmvh3FcViVSEmmwTm4pKpGDy5tT1d7zPs6qWevffqoF4PaBZzRkwYd7mN3mvLr1cDjzeH3o7",
  "key20": "48PnVu6dMBMu77puyh24xAA532zCfkpdBVqkRvhXeuW6Wdfhp9kFDmjXCzvvx1A9pzRB9dchPBQ9JG1riV36vwAG",
  "key21": "4nZ59VpogEDspKcxJ9vSf7MxRmotE7YYVzUvWvqB8QUzRw5YsgwpfcctfU86AKZeLPBLSRiXuxrQxag64NNwqT3t",
  "key22": "azP8vT8So8er81ReAcDBz65xkWw5SQaKsvJaWiE7xdhgmt9sRHiSHXDkfMJufWGQs6Tfgwuxw7QwLutTRNzTY6U",
  "key23": "5beVDL67cSJpBfmEHwQn1ADTh3vS3jcyHGpE9Zp651PXbpMdDKoGiK7T2jaxVtHo8vZCea9shdNTV5hLbVDUhv2b",
  "key24": "RAcTaWJASQuq5wyzjt8ruTp8sFs3wPTuJn5QzKQCh8GX9EUEm3JFvAKqtaq6YVHXFuADBvXhopSenyb1dXABLqC",
  "key25": "5jFdVcTyEdRZTC4Nj3eFx9LweofjG2MASXkZCJbJkSv6LTsNF8PDDMn2sBk6dJ5cgFrgkehAGkeSenL9g64Ge6pU",
  "key26": "2efQq5XbnT36STfng23x44nvnFhGajk2GFB94EVrxY6GA6SrW8nFBjTRDumrsmgjtppDgWKqdwdCJkpMMZjymEqX",
  "key27": "5BB8c65QhjPXpR26MTs3GWafK8PmRtTgdw3XtWQkU2nNXTX9Zntzpb8UydfC9rsSeDdEjqphhfJxaUdnL6ZSLVPN",
  "key28": "5JD5t1y2584i5SXeJ3C2KLLPYuisKyBpAksndwLRoGdRqYb9E8r1K3n27T6zsxzKVWeTNVWf2LVSfkE1QaMKQEYZ",
  "key29": "3ojzCHszpfe2urKPFXwrMjS2qpyDLKxMGxUC9QY5EkocqbNy1qGbu4K6DhUZfRzo4PBCFd8n9jMrXG2pRVJaTgTt",
  "key30": "ksdjaWFpcCQBZuBWekDVBMn8siGgVdPZGmuMhqPmACqq6c9gbtzyeTKUVwVpHrDTiuoPLidduqkQwtxqV7RTpwZ",
  "key31": "33ZaF8GTLTVHGgk7jdFNwdtQY3Kvgv4dtuwBWRfBsVeEovM7AJH8k1fTSaGTJLsZXMNQvPznFmyyKaXcUrggyCbS",
  "key32": "2WBeJRxbcfhMwoAUdWWoPqCuPube4hJpYF8GJv8oPymopp64hSW9m8aTUniv1PsvkFLY28yKnSHbh8GUH64Thu2W",
  "key33": "2nY1GjKmJ2bZ7qUsv5FNQZuAXWJUjMHHEELpFyjcxDKnjFmPATVxB3A58GEg4FSFWvA2bSCABXiLMRFbfJrvm9C5",
  "key34": "21uLy8r4pcHuA5EZYVySDgRrJkkvr8DeAPpFFbj8Sv52xbBTaAicNTSmbcZVjyBCLb3f77TQ7ZokGZ6d6GtWZmyF",
  "key35": "3pKXfMiiFsHE4VuKBKYHE6GT9SPKrv5pHR4PdHKLSKaSUDG6FWeKp5iSQwwNuAdr7Ar11NYnzVyQgQum4gSpiqfk",
  "key36": "4GtDui7oe3RbHPR9DjwPn6TK7NvRqbne28gdutXw9MDK4UqFCU53R4Azpxq9HbGK2X9JQD7WMpe5XNP7gm935xkQ",
  "key37": "4jSJLpwepXHgRe3EPKiNBvFCvv5P7r1q1ZPiBnokVe5ZE9i7oKRuM1abR43yLwkzui3ro5sPLpceo8dYcakJ5mQy",
  "key38": "5DnwEMUeoL6WPE3CDqp8PgS83DDNhwkmMEvsYwXsFQ8AQNqrieuJtFxiZRpuPzK5fzUoyavyxS8Wne7mmM64Q7Aq",
  "key39": "36rWBSjDRpa2989FYTMtaHYs51s9XnS899a9FMJ8Q3hH5Vuh38s4fK4x4VsS1duztmVdh4zLbEJ56tP8CTcs9fV8",
  "key40": "4nm5oLrwFEJTw83RAhNjFaNTYxqai8oJYTjC21j14jnpqdLNpthwGDMe1hwvksUFSadoMhxHk7vn8gDzDbCfAK1k",
  "key41": "f8P1iA1p9oYocrkePvLBg4mQrHdpt6ua8VbBY4MjD4sYvmSfjxjabjkM57XrVumVVBt3d9cv44StvCqxffs7pq9",
  "key42": "RcmcMxr4dS2fg1ZkHABpEx4fLksFignvLypZG4KHpATMitsZVGCVmvvXpthpGBX699nKv3sZTJwEv1zLQeh2jRe",
  "key43": "2KrGzMPecyQ1NXKshnfRXBSxv5QQ8VdEA4xBeTM6W5kdQC6cYuk7cx3yaLGaVqWzkwbdRh5Tu89vW3H8Vf96FpEx",
  "key44": "usVTbWtp58UwPgswSsmNBd5fWerXocnp8r4M2JkpxEhHCNwjK7jt6Hy1c6uh46p4QvmHma5cutTpUAxdokYFAf3",
  "key45": "4qWK94XA1xXNkuvHWssU8J2h83Rvg6WY3ELrbsL8JLbrDUA9t6Lsbt7xcMcS1EHgU3GJaKN9ioVt3rSR5BV6SXBp"
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
