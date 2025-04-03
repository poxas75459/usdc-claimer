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
    "65Hw1dwpKKVPGTqdjP2prNFrLaYRgFRLoajeoyxwjh4TGru9CWnk1nFTyj3kSX37SBeH89rVh3u5EqNDDpbps8HE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZmJi2gvNwP2GXZsCefkR7pnGbHo2vLLjdQqQ9CduPV6WZPMFM7BGPmze7o2HN9AXbPgadqQyuryb6ASmLQNhC8u",
  "key1": "37hebizo2x1XMESNg1hE13pYv7NPSwjBK13y7oECGjfZWAd8fVoY288QxBq6bS5EeC7KtpKyc1PrSnxryVTntktw",
  "key2": "322uaTr4TuKVbRRaxdW9LeaCp9KppbVF1aKEttAGuqKhXL1NSvm7XZisZHSDLAAnk2HGNLjEySNC8ULqnU8c9w48",
  "key3": "4Ch6y4YnQjdWVCyLaktSEw9vKbFMDtZ47bNuoDZJQDGLvKFwqCtvF3eqmrVMhQtqGaM3w1xPrskvVQhoKYUhxVCr",
  "key4": "216i5EinNuJ6fb2CN737nt2tWbjjxkHuHJHbBGfzLwfD2ZNVKQGNfTSUnJ1SszYS14rrRDKvN1QYMMVbk6Qij4Hs",
  "key5": "4acH1zbEiED2hSXB6yxt6fpzgfjiD5s1363TY8wzQQNbR8QGrRrEFZmTr72cfUaABGvMQjWzwsiinZgPZLMoHgVM",
  "key6": "2Kc6F9a9Tx5SMumu8xCczheKkYrXHpqMJwT4FpsPGqLs7WF1woJTk8rr4WGGwXtezEk4FdxPHSbimEApvYTDnLGw",
  "key7": "3LjT9RfW3Mfi92cddkVKtnU1EJCidVC3SLSLg97wrRYENhUvWQgF4rAgh56A21UgSkNDMBxiZAxmbQuc38nCBZdL",
  "key8": "2E3mHCRmgPWCsyuhSFZ3dGJ3ZnDJKr7gvFcfV7PFoLVUoTqUjD2nuumnVKHF7iPrCxybzUh5VjMQUXhXdWCAkFWz",
  "key9": "6on1id1HExu88HudmKBAatZwCwBb9BMpwaznPXweHgTjhYu48rBnfD8tXEXL9qjayGdQy4w89MBBQTdmGTKZr81",
  "key10": "EoPxxaHzmNcU8WzMzu7wFxxE6bLPGWKsnc1jc68KaRh3pjdzwc9QN5WiTfDvTueWwPRA39NP1uQF1gv1gPRkX8Z",
  "key11": "iD7SygkKDdU2NGnDBTD59Dv3aRstyCdU9DHqZcw1aMjY23ddtRn9VbFHDLNfpofuhgsCNSkaiD64XYTTkagujGf",
  "key12": "3sP8kqm8BjDJqVD4nTvd9kmBwrG8biTdydcKVoUNyxnxwzEVoFnBGCtp5wKJqgZA7tkSjzgjkYCxmbLh5k2eMZeP",
  "key13": "kY3YLLNT23aQzBKknby2n7VzNSuYMNz9QXHR2BsYPXK1ko4aqooZzwx4pNmq2eYp4feNgJLx3h5RWuuBYEx5nMe",
  "key14": "3rpMshb1z35H1j4q2yYp2Bi2YSjxRan2h5QsEhnBkKDFghZDPvxignzhnnApaBHXk1NTDHSLCxXKbQeiBJDUjnvD",
  "key15": "5krL13iu9GVjLfmpFhkbN36kFgbWN4tAp3ab7XtVCXD8rTv3R1UQY3Lp1oShoWskb3Ai66xpXnYTYZWMeBUNfpeX",
  "key16": "4uo12DT88b3Yo522KgBU8emXnTrN1vQ5p3TR8xf9qNMWAEBdVU5mseP93tCiVENDrBQPrEDYAJ4FFtvPbKcgXjE4",
  "key17": "42DS6BajnjLQNpBkQ7W2romXVemyTgzY9EBvJZbJV9FNxQrQVnfHy1F8PQzrX8uyLhKeGwAJQUiNYUsmyi5mHomF",
  "key18": "38s81thNj5Nk7GB3h97GUuQmgNoXeFocZ6cEN9zGv5FxuSYMXwnQ2Gb13AiUKHEyxUgHfwUrruknijuh2EcMXgen",
  "key19": "3YeCH79tqzepKjpwBe5i12nFWTYPwtBHU9SxwTbwKgq4zW38RvQeozKVAwUbN585AVsMwrVtRNAt8xYpzkZVj25W",
  "key20": "3YMLxQ7BNAXGxFuQk5eor1eZYoeVVGdKn32AC9bnZPheE5MRuhpVn8erCf2T9Kht7FR1HQcuTCtbnTmrSUTDKw33",
  "key21": "5BGyLKCk6DY9uWBguxptYJomchiEppN22XbL7wCYhK1aHQnFifdtdjFumNYmKMq65dMggCiJzJuqRUQHMTXhxydf",
  "key22": "aKUab8rsY9tE33UajeLfTKsvmyCqSYCdmreH14qJBGPtGPtu7NEJHz4qXpnTSufzczAyshcGWnJking9JQUcN3U",
  "key23": "5c7suCT4u2gLLhYEz3tWTAsuYjRH9cwmgHUjiDutLLQx49c3wqmXDfNyJvv4d4GRNSeLBs2DXoVyvY7BJjcQHHpo",
  "key24": "5RcSLGQNAB2nHgBRMeXUyxDWvQ2An9NNSHMwE82vjpMXxnF7bDQHh3DocZyS8Tww1Jvy6aDFkHjtjgvBeY4iUDpQ",
  "key25": "5tTiVWxzgY3kBs5172eBotPXWFtZRmomBcjNTHfibjx1WyrMVYeCFnuuHYTef4vxx4RFraA5Hx7pWpMyEzqDXydG",
  "key26": "4JSRvP3PTbwjKz6oZSr8f2yvkTit6Gp47LJgarwrngXsvbCr1vytZXs66HAfHQuvxxR5R5L2ZdaCgaHvS7QSqv2s",
  "key27": "zvPwJ8dJiqUxr3T8V97z923cZMoGUi3p8Mg8o9e9Pgb2m6HU1fL9AnYHbDb5h4J4x8ptsWgQtvr3TLG9NnNS8n6",
  "key28": "54Tbzdqpty1ZuwmWxU47tPHH2hxr87ymeZ2f1E3bemWmMbyMUrWHgKURnnYnGsurckTLC8AqmkGYd8k5Rpb5Fcja",
  "key29": "4Raj21E2BrCKLGtJWBc9P5G58EK6d78ri2jCkw1sDQd4TTkzGgMCYLj6hwEbrCrkTpnMmobve3zNKo1uE6zRATXV",
  "key30": "5hVoHEUSdEj7UBMDWg9HWLy9yT9cYGF2s9AUJvKFiVrFPFpDX5rGXvbj8VyZcsbxW7Sg1tdh6V3se2GcPJ4RYHdf",
  "key31": "4QYcm7KQAMDHNEZKop7ncHKXKYRh7WpK6YoZtXJQA9WHSwGmPdLkmwFLhF3cMzrAjBhV3p4xYAP2FvV586Qw9eu4",
  "key32": "4hKqGqq5HnSVcbbiopAdjQAsmCjgbjNiSXwVJ1eRNak1eaQn89FGJqVXiPws5EoKYCCx59K4fqepju8vGRgJTaSe",
  "key33": "21pSeG9EjSDvH1vzEWXwngcTBLpPCmPUP32VMvQUJxmCc6VD4Ghjm8xiR2QrgasDxt9uSYXsJg5HTLgBiuY1aRiA"
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
