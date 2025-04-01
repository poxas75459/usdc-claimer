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
    "5Ybs99SarCXmn22ZMWquq56sKnJRW3B9gCEzdDkz9qjJPHQjBUYKojbx4cKiPLQH9fjhw6KX3erACpynKdFKMhVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jMDGBxbGYhVrkJDeCoPd1DmpJsaWVhxAfLYznxy9oUnHYXTwCpMNgtQajsFgG76nvCm5g3sLZ7AUYdkTnQRf6Xe",
  "key1": "3Yn3Tywpijp2GjZ9fBKaN6ZYNWGSKzwR5qkxjbq2N8WjKDa2rhaufWtgP31Vt9oabNiBbvkMGRaLkryis2uo93Lj",
  "key2": "PQKKeLELjeNmfyFMFuKkqVkkUpy4HLPSpEF9Ea8hEuyvU4xZzm2HKgsuSP1F2dCzU9qcDCWXZCDf74ciVP1mPJ9",
  "key3": "5Yr6rh9ZKeLWBHdBmL2x5MHdAAxcZeYJdaQfpPt8gq4V31q2R4RfdrQ4abgSp3ZBLVPGgy6AScZidxBQaqc4uJPh",
  "key4": "a2a1H3gQq1g2xUsvQFJdZrphTqGVEXiozMweJiVpvzQ7A2kM4RxLsT8vGosumTkZwgqrVPkwaGzktLtiicJrggR",
  "key5": "5jsPy5CmB3pYqFpU8CV77Zfcz4cQdRh4BmsJjNmyqPVgi8dLuDULCohYuNeFsLBobk91443v6rpbiUbXcdkEJ3Zh",
  "key6": "5RYWvdHkMDBKHJS1o4Wt9q9vgWXsnXgMxUXkAwc38ZesPZF4Yn9rWaTxZFTjm4GFsx1mVN6T9uSk7TreMjbTHFcS",
  "key7": "3p3ftgRXDhABT2PnXsA6ZRYACZcgj5FncB7doHhwfX5C55Gk7svJv293EmJL3YdL2QU449Z9CiHEitTmX5urc7MT",
  "key8": "3MD4SmtrqTz12oLnwmnWzcL91MisuMoEh7DhAyqhW2Yj3hVkQxX7b3SRhCGMFziQy5CsWsVU3duk65rFdA4JHjgG",
  "key9": "Go2wG4TAWMSMzxZNiW6PUdRma5eXYVMsxj5xPsZPCrwTVgi8w6CuBvTKcferMdMeSfAxp7tfXEEn9j3B3Zsg8iY",
  "key10": "4XF7e7YbmKRdHhXnWb9omiy194aRhsWoPyWy5deovtJYj3q7FPyCCwKK1LmPu36Aeh6jyWpLewz5K2Dnx2Xbxvvs",
  "key11": "5nUyYqS5CE8ac9VGCD3CHszb9fKZyKWnaoCSf7uPp2iKeDqzFcTWaiVRefPrjFyovSvEmhYK2sMMjEtsBKSofzSp",
  "key12": "RX2phhWN6itkYhxzPBRvBX6aT8kvMzq5fYaeC6zzFrrZrniK7Tab99H3yKvBzrSTYFz4hehhbbqJgoskAMGwL42",
  "key13": "385r9SFsBvw1uh6q7FzqRi6Ms7Zhwx9pQiUXFvRJ8SGzdTeAgt4YSCdgeUHQLAsoUX8ywBP98GAk4Jw5qjmYJjYM",
  "key14": "2D75UwFEr56tfY1opKBR5cSKdGmPdMW6Yi16FbFkbJky8cDYwR5HR5BYw5orGMciqh622qQfwVuKc6Rri9GCdf2x",
  "key15": "35dupRdbTbdtFPm9pJHLgUvGBL8q9TAzeYZbGkjtmQoMjkyZRdf5Vtfz9pRbSBj86d8dcbm1Qp5qdZuY8LQesN1V",
  "key16": "3EJvgWw1rA5YXDuwMkFsbCsncEJqFZZ4uibDjC7VuYHcW1e9KJjN9hHhzpr1Dh7q8vS8YJPXDgXVzecHedtRxWjW",
  "key17": "pYk9XS7UVsNGzbQL9k6o6ryJSa8Tze9puEoBkVmugF2gzkr17BTLUkg9HVHUsGAZtF3ff368ZynLPti8f65JSrs",
  "key18": "4ZeKRK1DXbZFtjXqnLcK741MzkC4CQRsrXU9bqAV8PUgadjMiQKT6hE3TScwWx8z6eh8HXGddCyUMgtJJ6MNXtfi",
  "key19": "34tmGpXBV7cgRbY3Devti9mKg3L9wuyYwQArNn4FhmgrAxNgvjCewHhw3CP1nbHbWuvLeWrj1EaJoVQvY8UevkMe",
  "key20": "3tHHoJQBmkkFsBU4TCnrFHSheuNxvGzDXuuMH5GtYXACpSzx8PQy1wXJWUMMnxbiZvo6URBYREefA8Uu8DojEFR6",
  "key21": "NepNmkYGaq2Kqw9wPhsJeKrrcmXmm1qEuBWcLaMXCv4ztiszwRd9yTEiqxKLJRpKjmY4fveTTQz2o7wqRenYRAr",
  "key22": "3FTgWYVrf7pzsfAfzznarkjWQdRKhasigDGgjwMJwqroEXDcLqnJ8HSuf5CWkUymuDkdsBEPv1xWCdd67nag3t5J",
  "key23": "3nxaX1sY9ENFRi1jgJmhQrFfL78sdZNYsuhj6znpw6JuynzmfjGeAjcjmrLbHjTmwdRtu3gCc6GWT4cAAU7ngeyb",
  "key24": "xr31XNUXLQmYU7Hjn2wkMGyifURr9rJuQ4s7iUefmSCme1sy9hS2fgvJdFMvfyQpP2A9zntmiGsHTCKNpo7NgUu",
  "key25": "6UQfSU8V4X4yQjtfFxmJGpnkrVieajuPGirj3gLsntCzNNB4k6VchrHbjUSfiPCLHXiN989bFMBxb7DbWzGvnEb",
  "key26": "2N9wDvGTcxuupF7agxDp7P2gnnmqwyadEkndXa4TLWiN4eeWLTmD2rCBKVPA3k1pscEMvp1JRbB2LawpyMBys9AV",
  "key27": "2kKFW9Gb3Gceka5DLeCdaB7TuHxZYXutKXfg924eCQsahyLA8e2BiySRAQGfmSV6318FpeFjL3B5fhPma5m2APW1",
  "key28": "4FvZnhKq7tCLuraN3gocifJbXW1KaqL3MuXxP4zZGu9mdpJogVvEhsxYogaPbzMhegrSAwCxzhN3setEdjHqjWkw",
  "key29": "5CvCAm1bErjfrwYUZsUtnFCuZuRAFFwdLCkcZNWWiPbndNdY2vu2iUrhNQUgsr151sGzXCbyvA1QTx5c22YaJsRo",
  "key30": "4ta3zxF4MCXnvUJRW7cfQrKCdFuodashgjFxWjeBFnZD18onunEu49H8ip28hfpV6Ye5sp1gK7Ho5BGUYBuGU5ip",
  "key31": "RuSZrmUgNdsMAV4vVB4UAjKWThbwgtcMHeZ9FQDW445xV8bVjHs3ZRooWLQgxArq2rotTNZeweouKaWotVjiXUv",
  "key32": "3P5rwwTnG1Fg3zGwRgBLjp3zMX6a6cQFgbCLjnGVaAyt5444MsJCwm2xuA273ptHVdBtSmddJgo3DLUu7deQDLiV",
  "key33": "3CvMqu3GAs3nfAcyRNm66E4YPdL9Lvv3Rt3tZd7pxxkekSDBioscdhUia8c6VQWP8W27t8Zt2LTrbcahLYpFzQfx",
  "key34": "5zWoyuvcrZrkBBicDnSknuL1kFtB2ELKnUq3WC2ckxRt9huxQCxPscA1EPfHVHyTzxnYXfZT5uJnTFncdCmAPSQp",
  "key35": "4vbmuSuJV3fWafkvR3DJhJbTmxB9LsfDpEsTBFzcJiao6gNySgKJYmPxMjQcwxtAU39yxkVcVmSSZUCgr8Z8jQnC",
  "key36": "4LkCCnCGGpYvDnBWJhFdRtFXDjdtdkoUDDuPRM5kKArPmx5e99hYXwU1a3npSfh8Js2hmzqfPWpR8aA597rVzgV1",
  "key37": "4FnuCx6WDHkKbUYMwip1JgpJWACKmGpG3dnQC7YutUeTnoWXukVFx15WRvTxYgEN6L727aKh2EfnbornmRXcQwbq",
  "key38": "41nFfg6U5N8uJVcnbNabBVhEgc36j9VCBh98KjUFGds6Emfv6uQBxLHvq6yb9TGuU9Sugd2EU1iUxYBE1gvjcBXN",
  "key39": "5oNNEHr9k4KETke22jXa1HAvkJcEAbs87vkeEFvxAy4BG7GNchCJGXUbWjR3tpqyB7MEGh9yWjgqzL9mGhkJ8uh8",
  "key40": "2MR7JkrAApEFYTVfJELF2Dp3xqrGV2Q7M39rUZwm8ips5Yt1Gmez3FrkKtbpho6u5nk6p7YuwVzGf5DPR2hH7jig",
  "key41": "2nmw91WuWCNshjwxyCeBTQ6h8jK6QfaFLTJebygVDVnvE53KueQGQoMM5qZzGgDAfxDAjiTkj5bTamocSFVNSHZe",
  "key42": "Hto7jTrh4yXQq8tmnUbbf8WumZr2cJqDVCVcw1jGhXLpqL5D3fHF8aYuvCseoyHGHgdVWdX28u5idSYZiusdwx6",
  "key43": "Cp8CzNZZMxoWwuponiYesPsLKNZbeZYbsGLtr9spuiWLoA49xdXuFKDKzufArCiWgSCL7C8G6EFu42Rg6ZGnG6x",
  "key44": "2fcZ5pTY8aAgdL4tDqCsSBhvko4UFPkD4BNYCeBF44ZxyBoFaBJM65Wa4kQSvrqFkYe5c1Z37s6JoLV6wYWM8hVg",
  "key45": "2mJ8rxtMhLuDU6grXpawVM5uHLtnVYsobirLD7T8FVN2d9TBsW16FCxPsCxeVzrwX2vu89wH82PNPckdoLRCVgZc",
  "key46": "v7WWT5sQERHmye8o3dmBYrSB7ymr2aUCpJW4xNbKdfmrcLXiNj6whC4JNupHk9P7inT7bHHSQXb5PfWfSxZiDc3",
  "key47": "63JaLn1duyti4CagHnDojbRhjpuRW9NTmJrvK2svs6ak1dPvRWxPUxJTj4YzNH2Lcu3kN87k1QjeyDpejaaEeL9"
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
