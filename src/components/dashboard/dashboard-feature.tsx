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
    "2xZjcH8sTzh2K4H8Tx4KyYJhJomedzR64Wu4zE4V8C8A7vXTsh3TodcCkpG3Q2nJGMueYvNsNTzJer8gXkEsvnae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22SeGmXuhP27XHxPDWzjNggmGaXKLpA7U788bYAkpPvCRc2Eah36QKn2XWxBKRA5KDfUR8swbqyphAsBYRx38Axu",
  "key1": "55SrmoELsk7LrWoNKdGho7AYR3aq75Xe5tnYf8wEwyFt2cjKKnPgmpu7gEkod1FUtVterDzqq7MPnvwukc8afiit",
  "key2": "5MLZFFCEhtJd9ieAfB6E5tQXsWjQSN5hJWakWCWjdfLGSy6ssgXQMjbmWSHZpnwY94kjTdzSAKFmRQNDty2zQhhw",
  "key3": "dP1VhUuUDPUF57JeN6g7g1BFd6zod4QHCDYPpy86k6kqEUQh95bhJvbTVhz6JVRbkywgKKedceykC9F6RkycfYk",
  "key4": "VuNFP1nSxyqDtfn5R7AForgqGbGM9V6J3b7TXb4uG28H6SBEMLFmMcChNYZ8B8fK4pJ9Ezs9hM5sxbrTytZVo6w",
  "key5": "2wihbJRZG1ae1cXbxhEqHzNK32ugoXjQ6mNtrgKNp6uGg88rYAU8qE9gNVj8nxfP4xpRrjUogFgGi4cMzFoaFUrj",
  "key6": "5CwE5hdvw5nLsGyyZ63bem526cHNKR3qNNYDv4V5deNcoALsDYPXC1JZVpg8sXjBb7Aib2itRtjBuQJv6me6WxtV",
  "key7": "2nhrsJxgcKhCVQScwt5mJPRUcR5yhZ3MLsiu5c2bgNZSncfUPBKdwc1F4dEBbVdZq1zaGBzBFCByGVzRwj5bRphq",
  "key8": "6ok2S8JrZpLKJMBmEFdSQQCt4pPaHn7fmiaeUuzUdUXsbUJDTeDwqqs3LmSkmGBdteiRWApn6fhpcRCqdrapcAR",
  "key9": "2yqoPJC1KnEhoa98LJYim8sf7xcxAFvNQLZ7fjgVNj5uD2VfjzhNKJck8rAfTVXYXUCFVskSjfm7wbnwNKSqjfdX",
  "key10": "4pfJ9kmPUXnhoxSfnLZDaV3FzsvQpPQ9SC9WrRp8gWvvKhRksrQ8D9s1NaaU5hJeQMy1spYgGhbnZNDV9XXmm2iH",
  "key11": "2WeNUpfVXUykcYEWXHTLEAsir1ejZBWwZBzy6hkNX9dcAoTaLQ6YgxEvQkRi5jhpPXrS1pCSrQNQwvBiaZ4zRWGH",
  "key12": "3pFcAqCz9sV7W6ZCT2WmjR9HiZDADeZ99MpkqrEPY4LczsU4HTYvgJoucEMWHjfmiYmtznoQnawN8edyXbz91XRc",
  "key13": "Wur3ydt7JcRT3XFU8UctWrLya8HUHDMC6pmvED1hGN1q56hEyMMrbUr1mwMcgBgHZc1wt1Aih23SNMu9LMo9Xhk",
  "key14": "4iDPw3MFQ6ztw5ygRbVqMV92VYJtQa7RkS5rKpwfn2rsrwjmfr6avhgNnRzg1r2HBz8DDrAcShbW4ihPzPf2vapt",
  "key15": "2CNTXfZUhK7HezCNLdCA7MGHNWiJCAAsBsnGZqKq4QuzX1Q4erowN4hPh9v1368EpJbUBdRWvzBnpQszpYUCE2Jb",
  "key16": "4U2Kx2yE3k54yG4Cm9aHf9TmoTJWGdNAV9za5TCZKswCsGjVYKYtLi63wD2mqmWUoVAvm4XTCtgovjW54rB8Rk6G",
  "key17": "2szDviULz5TZdwo1HtJzmcK1tfWprXpq6tYYyFfHLmCqbopqDGu7nau8pALAhUQgZ6JQsDJiyBj64N7PFMtQiegT",
  "key18": "5xquEX15eKnpgxZjAjRxFGta5CUXaR3G8qwsC7ZoyN5mPvseX2fZ3hG6bYm2EViMMZf4TFoL83NULbHoBmEniyzS",
  "key19": "5PqEwjabTzAQnpMXhG1yDVs1nq2aN2tc95K9E7Z2gckrVkCJ9HA3BzxhLKbuQVR5bRry5NP69yS28R7sUtDPUmt2",
  "key20": "9t6e2GXPwwEmUsbSCdQzhUEZsMfYmvEvYTvS2xSGEo4HhmowB53tBxdLzUynFoQmRFRoAMnewkqEs5dQjkCPBaj",
  "key21": "5P4r7ESXGrdsjhjk8CH748PuiFGrUhfQ7mrrz86AcmP47MsV5BqPa6kZAPyrgBMdhsSNtAFqx8pEzq8zQVVwvhrv",
  "key22": "2ApowfRqMzdRzeU8nktjcibW25S2PPVLBZJtrNt9L4zMxPEqToF7NtjVhV8ReZbJbhzBBFSroK9jXpTFMDTF36YS",
  "key23": "44cNnoT6FKKT2qhdVXMtKn3JkMdMiuRbVzZ2Jsva7TcctW2unJKhKRU8UhkPXqaYFBaabV2zq8WLQmPu6h8x2kbZ",
  "key24": "2HPx3o357mAXya9AVDLmXydrsUuRZqFZqHs6h6tBTAxtwicpfapeDh4hRrxZs6QA6tAt13jaPuCKwhcyBMKuwAgS",
  "key25": "2GVcRYrgMWCFi8EZRrpSF39DD8xU7L5CQxz8xphA4jJDN9qmFZFkbJLXm5SAQwYAARuXW2qvamG4RUUpaa2qz6Kq",
  "key26": "5AfQ9qvQiVqmqrNKHMUbVcDVh4mvG6MvhisZPBEQ3VQCFE6Vy9bKSmrvU6p5ycZ3Yp4FPDs1LU61khQAo22chMMR",
  "key27": "3jcqHbaxLvqBs85A1eoXdLc42nhzAyPSdoVwVN2pwfX8kSGH42ZQcEJhiwiV4a92J81bEPVCkyFjYZqhRUU5QaKD",
  "key28": "4aB85ejpuZp23Kgc4EPqtYqNVTsLaojmYjdbRv7FeDkJXqT6RKudSTqey4x991izCeaiZRyd5QfsfTT3VseBZHjn",
  "key29": "64oKG4cgn6Jo7CbU2Bvz9JDJnmSKsAcWEVXGyBbHGKX3xcuMSSnj3bD1JXyyt4pjS6jnqj8hq7ujdkTMhbbCNCtH",
  "key30": "2fYD3rqiy7Ktt3WXdsEtoGUfy5fPXK8yEZYF32QpGJsWzjFbkSxt39AwCXJ9yHVPHuydiHejf1QHkFttBYmCGKsi",
  "key31": "DvKvx585WASKz7Qd735chnzkkQ9Z6AZqxmgmWdMax4AtqkF1EhrctuPRCs352XPwPP6XFqdg5rSE8JD65weQVj1",
  "key32": "ft5nYrKSd4HBNampQaKTYjBTm2Em3yrjSmE2bcCnGq1ayV19VXBzevftRnn7YpQx2dRkSGoQomeCCV2N7xmzA82",
  "key33": "4DY8veUnK7eGhvihQq57ULJM1vWFXyFv8wiEwiahd7oL9sH94G3Wn4D3St88RcymmwT3wEAyy4AjudpD1C6YQtni",
  "key34": "49up5xjuU99Y8QfqJYQC2CwR5QUh6ndYGzAaj8X3nEkj8u6J71fp6AuPoocA2LzEKB741hwWTeT7GGJsQ1mAMJ3q",
  "key35": "2CC6JNRUMPdmhh5F3XMvCNwBCNFxYbNXsQs6CQkdLKBDtWFw8k1wpiPBVegSKvnrEYaDprxqhMJyrfZ98Y8qXnRQ",
  "key36": "3EUBnwD1skVxouYLJSsxhEaGkya745QZrpJHMzpFRZCq2UcMwjS9m5AefR12noeNmoKSk3SgwmL98cQrEH7LWZ38",
  "key37": "4iiBFvpzKgRkWSDNk6Ex1SQhCJpXiXxDZFeRdmP6tXdioVHGUPX3VFin2gHWCB3r7zKcz1smyiu9Bk6z9TGBfn3k",
  "key38": "2ajDmzyLExDpex7R8HfR5m6FiknkjYrbkAuVQ6A9S1rzLxAjpEHfQCVCAcBLDSE8ZevDWVXfCRSqDzbjqx4gXUge",
  "key39": "QTw4jXYVYnKzjW4HBC64ezeSQt5MHveqJARnAonE2CYBdDfB9noh6R4Mo5oBXtZmRGRYoeSNY4V1m6C87wZUbBv",
  "key40": "2Exiyc7C2wgfFRmQ1v1Jri2obwYFjuwKAn9urRVzW4tgZr4h3Y3xJ45bJuirujukGiYVPJacnok8ki4NboDeLZuH",
  "key41": "2jAHKnbNHZ26fmf8x3G3VXyCGXuVMvpZwD31QqMkFDYX9WmRvqYjU9GGERQY5u65qTKzRJxzaamLsWm556KJQr9k",
  "key42": "2NcpVdqEnyDw1NixY1spe8vRZn7qcVVsuj1GafvYd8gogB1sVyChyMNmSzG2gdYyk38A6eUQztmjvHGQBFgUzFjB",
  "key43": "HLLDXmuPSD5ZK7Lu4oNNo6pc8bipZzMvwVEHModM1gu2DMMc9s1htgpdxp9MyUKjtbsLyDJHzKEJdD15VnzcTUh",
  "key44": "5SwqhuBaA7u7DrfN4aDoQvjR7k9LgvZMWDNg9qH8nn4TnrKBRDZKLSnMTszZ7AAwBBCPWFpvrQ6QemJ5a1a8yiC5",
  "key45": "3e4TfKESaFCyC6xNvQzx8A8UGqXw5Kjsyr61nsRhMzVWxD4P1oWDSAscXgYudbXeg4vsMxWAVJcGa5YhsGVNbNuU",
  "key46": "2KbzxpewCLzTd7nQKsNZVaxfzz58QZxr5HLDRqT1shyYAT5ZEXs8XdziNrPhxcPPJ1fRwVMiMequxP1pgup5wL7e",
  "key47": "2SwcdgWM5TvjDCG1sjjtjB9X1YQtcZCRxqpwwxzQDuyiDdC4pyKcZGn9B4xBUGoQxy3L99CoykgoUipGi17jx656",
  "key48": "46xDVXxexSmt67VT4HB7BNs5q8WCNBZ2ZWDkasTxwSHhJkDv2oKgCfGYvLNQwmVV6TZ7828rb9waRkCmEBox5KWy"
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
