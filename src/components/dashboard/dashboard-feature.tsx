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
    "2eUfVpiTJiTFSZKhYFUpy8qR9HVLQtEUvoKEiBReL2JeS62AnuxzQTQCpapYAGWyHoWgbrBeJxGPNZrHh8K8QWne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9hY2Wkp8adYGko3wmXcjyzRQvS5zyuqmw71zNJ4XZT1Rebi8tGFb4tXHvPUrrF9E1JAjxzP2TUC9BECxKiXcUU",
  "key1": "4Bryv7tmqEAHtnLb8yUuaxrqB6QH3TmEpvdRJfFwcQmTLRGpMS4c4wqjjmTVHRvPJCxHGGdmCbnGF3fdyzCcqsXC",
  "key2": "3K9y9kLpU7mpSLNiMmkD1xWHCTwxiDxzyqWUBSyGadNj7YEsCJ5maaBM8CFkMJpSgvv5MuYtDWSuezr9QkXVTrRW",
  "key3": "5oG4qXMVfM8ZsUQ7kc7yXFG1KRsUqKV4nc9YaVufwCLTY3FdS6bpJVqchppZh7tdULrzZh5raKPeHRYKFpS999Nj",
  "key4": "553nUiRzsF4uupFS4LFKmN68ouyXVPWL8zp1Vbw3Yapc89KVvwA5dpo1QXnL6JAxJR8ZVG5ru9XSTDanGthwkz7y",
  "key5": "3FXxFfQaJyuy5Xz6xydMcco27i7huP8LB4gADHCE7FojEQDTCRNnFoav1pS3NBN55b6o25tPenrpaNN3dh7jcpsL",
  "key6": "3Es63Y6KHD4qZgjRviaMn7qU2dJ1aQnrCmtNrz8U98gK4e5UJu5VCcQhGhpxTTPhkDp4BdNLBbCwhPCqB3Q8gWhF",
  "key7": "kjf1N9otKZArFdkW3XLvX2zZ68ZF2AiKNkvp2ocsRN3HNijYoxRBQ1AWUCDV6PJ7Nx4D9RsocMEUgTY2dYmssCp",
  "key8": "c7VXhkjf5Y3DCiaK2Cmmov6noMRgs4EWmN4hBVT4UFqnNW467tSsfSGZwLVv2FkCcd9R1Lb9Yo6ac3Urdp5ZpWe",
  "key9": "hZjK29eEQ86RhDR6i8h1fcKhvsjMCJ6UYtjcqF7aDb9TCJGiJf3Wc65aruYLZTshWcx4zxLnsQejkTYFsKGdo69",
  "key10": "3hn6k7uuDe9sDmwpf9j5EvDbJio2kb4yeeER3dC7E4yjqrR2fpjej9UNJPXz4KaW5WPqKQZK2QvjBBiMSih4ZGHh",
  "key11": "5eSkaTdHXAU5LZegfQBc9TiA2SVWXNNtCYxE1NkvxxkfxffT8nSaL9HMqnMmgWKuzuGfti7Gpt8gmtEhc52PE94Y",
  "key12": "pKQZJTQ6bvgCpsD9tTee1r8FY1T8M7XwbEKD2cvs4i1XkCY6AZ3SZEn6TVnj92xPibFG3djioAVoCESGMJSGAS6",
  "key13": "2rVSGEm5QeabSSQGpkVKV6CswUCyBriCsZGcHZp33BbYU412PfPdTshweNVh5mga4QP7WHqUX64s1Hhf96YB6itN",
  "key14": "3q2cxBB7aAtfoTgEZosnunKFAWEXFayLBhSWoG6qqCx2GrygSfvNkHA2w9XqWUZDGdGkynyts6mVYybWqcZv1HoZ",
  "key15": "CPaEqwfcTxua4scs6uPPaW7HnXrPnGLR5YS367MrgwZGF6mEiWa4zTGkcG8Q21ssaD6j3qS2eQBZ9YruxzqPYWD",
  "key16": "6WvurvHJZAjnLyZj4iNz6oYDupJtASM58KdKWpKZYntRQKHFhoNbe64Uhwo33RgYKaBZ67Y8Zwd9AUb2WxGZQpm",
  "key17": "Ugne1C2UxoU8N14yMY2pfeHGfhsgUHct8WVNv6Jt5BVWk3kdy7JtFg3WDJJAUin3teQ7ao4AZ7YnyYbjabYxQfg",
  "key18": "4rTrj1pRgEBZz3d9SSsJprpQQaoJLAikZ54jKvyYrahxp2pnvhNgtrsNxboUt7dGX6nn3v8MgobLvbQ3oXf5yX9s",
  "key19": "3pK2KPcp4sAghvapBMqcPhGLvZ6BAFBamDrawabJTeaZGsxAFC8dXnPdHPfysux9o4pVkVnAw312j5PMBukmtXJ5",
  "key20": "21LgY2BTC4vrdva47a6CbZHc8npchdwtjU1gahTg3t1Pon6wUFmzSPcH2nvvUcDMrdvaKMKzMA93oZrr2Spz3SxC",
  "key21": "3MnLA1SdrArWkb8y2Tee1Wi4Mny125Z7KfA8mLuU2vJsUKar27V92R2MqbkjiPeivFAd5uqK6CkTfzPqgYc5xMhv",
  "key22": "2vTW31RG2N5ktJETCGnhbiQBuEqgeKdFWChpgoxS8ZZgMAT3PxKs877LeaFf6cAneDSMExEw4AUqVf4gV41nnRGU",
  "key23": "3MaoyPhCebDCttJPMUT2fu9fEMmmvK2GUKa4fbxtE8scVCQ4zMtbGonpgrfcrsX55gEiktRd3cce9MywhTUo8irg",
  "key24": "3UpWFdYVR7JrmDHgCzJ3jZxDi78vb7gqjShuQSueTEfJ6ipEZrWqDiW3sBBrRnB3vspUjCDji75GEjdnZGjye68M",
  "key25": "5pB7N8X6CR9Fv5XEye5mrEs23ouZZrwFSxWFthrTc67wQjPMcoifgEg6W3mQWgkGQY1xBHMEtnC87tvj9QtCpczJ",
  "key26": "AZgiHVCKBje8V6JU1VovnZrbKKBZ5zTPNteum2yP9k8ngukjrk449Dp4fVXdFSgZB1w2JWpL2ehZXJy7pbfWtVa",
  "key27": "52FjqAz2XGfGwB3cVFNePGrybB1pwXSygpwXYLp941wi2QZiUqbwue2WFBLxQUZYTeiPA3ZzcToLmoRENHs7bkCg",
  "key28": "fDnLKJ6MuLbkdPn7k2Fk32WUenet5jvB47ggbTyZjtRxczNC8ts3GweF3a94MHZwGKyzVQw9drnFKdNajJheTE7",
  "key29": "5zcw1otcnmEMoMbm9U5WnZrBRN3JwTwLnSv8wWWjZnQzTSBywY4aUD36x6pCBXwXdydQh4C4Lix5nmtmntVRMXLx",
  "key30": "5joMXDDacndvyZTkpwZrtzDn9onqfNQwJ3zMm1pvCmaUx1tGeshakUCqjW9qL2AwTt8uRCeqKuaD2gmEyqxaQgPN",
  "key31": "zPbeWtTquhu7utheTRBAsZnE5T82ngCErrdwCs6Rch1Sd4mkrLXQV6iVuPz8A5HEHdZRgJNip2JvG6wjfR4o2Tn",
  "key32": "2Znj23D4VzkBrpPYHqRE36CKkTKc53ksiaBVDiycWQCAQ7RHzGyuu24PiAjopqFQTp3XHdn4tkRjjsrKBqVmPGb5",
  "key33": "2j5hsstrA9Rc6cxLmhQXPuof5pe7eEMJEBqmtpeDCxzP6J6rkhxeWa1zxipj2iojQ22B37j4Uf9u2bm1DLyDn97b",
  "key34": "3pth5J16BEuasbm2CWcpxXyoTb8Jajg4Dj55RejzyzVfmcrn7F1DneGPf2xReSktksAMyKrfZzXSvwksaxcRHCUk",
  "key35": "pRv22wXQcXL7nLLfdQif64w4wWs2kVutzrd8vyFsdDx9LiPmEXm3hJJfrh29tQqfuRQmbfYw5N39kPg6n8kXZxa",
  "key36": "65HxR9Y6TD9nhNepsLfA5TtJHNaya4rVZnj6izdJxpgWBcxcxdk3c2Rii5aQs2nvsDghMEfvNjMv7yiPB65UEaWp",
  "key37": "4kM3TFFutLJTyZnGPPKZasYoyQtZZYA8tYnA49WuHEQ6jdbJ4EGBRs8mz6aiESoug2hhSWFnRbrUaYD7own8Ao5y",
  "key38": "4wpnXZoJh9oWBjziXinJNfqAqG2VrqiphvuoPmm1oE4dMbUvLJD352eyMKs4jzwjPYNfWuxdmg8pUiwDQoEXw2HU",
  "key39": "PQC2Ywhenk6D49VsGjizvJnZRKGb2LYbCYQQqREmxbYGdAo1yEmerBNutqnP2tC3ixX4gvRwTGjjeg56bibVxzz",
  "key40": "2SYniVxd1yH2GHwfQMkHZY9fkr7BXSwHCDcPHTzbiMfXotvNCyDmsaSPXtmkv4kNNp6Q2XYF5bvQ5JqLodYydiEi",
  "key41": "4UZ49mLBPADVh3kj9ufJoxTxurxeasVNxrXLYaEBsooR1DsCGT7vCDB58p3dNRqnzuYaqKzLqocAqVqbYP4SvHtJ",
  "key42": "pkN35kDY7qMuY5ku4kz6zWggWrL1eDSLU3DHq8ZqZT1wCmZkYgUAoTRCviqJcdTcFp11B8w3zkeJXCQvZJn7q6R",
  "key43": "5TLpzBZR9o5FG7fn2QLnM8vGT79aJuPgeNiXAGtA9idomg81LkJWDR1UmFXsUcV4kuRcK22N2vEaoCad6p28WG8h"
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
