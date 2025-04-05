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
    "4ZNXLrbEyHBD5DAhsB4445hSSzEKVi71DozPsuUvUQABmbc72vwgfbTqjGzRmSusPaQe9PQg3KmrRQ8TG7xGCrTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iwVbTHBN5twnjW2s1acHz6RYc2toFDGLErUMqGvA3eGMfTKYR4Vsy2A7Zy42jL8AyQYm433cXjG6Jvtc1HEacKB",
  "key1": "2NV1xV7KGUc9EYyQhr6yWQYQtDig9PFTSEA5EpTmabyVzjoCFZUXCncFKE5R7vRdy8SGgKLHaTdPv6oDC6mCg1Bj",
  "key2": "2qFH4jsYUgYqyVpbELo1rYiXix2rMM5jSJnARCsiiRWA2n6ifuEVzMdy6gAjG54JPMn9dVhixPwGGCDVo3DAzb25",
  "key3": "ZpxFe4ZAVy9iKrLqb5m88oZ2dU4gvR5v3rNAunFdachRQy9GZHcJ1paiyPzvAXxJu3KPEt7Q2EWXcuZfNEGjRcX",
  "key4": "2YpiQjsJPkrnvRFc4EJ9MxiUaFkxdzoBxsR5nZzVzZ2KPQX3yXu4VQUVndgpkTzVnhiksxq55da6CNA67Ls5mCn9",
  "key5": "4xyDFRnX7cyxwpmzYousb5CvE2gPQn2W6GMpt6NEznRsxXYKRHLbuDroe1BPoxhwvGuCf4UzMqwuaznogFtfeJ8u",
  "key6": "ZMTuramzhF8hXWagLCoKfm1AQVptvwzWxh5WSX9GWz7okY13xxtet9a51MiiWbf7mjV4fq8ii115RbkQHGD74Xn",
  "key7": "5jpASARDnRiVXEWPN4nB5W7PCz1sJbFRTdTWe1xrYqJMP2c1MPxDsC5ntNP14osUiVYD1ApuHQBPR3JzhMWTDKXA",
  "key8": "3BD8bkXvfMRHvrQ8gQDGL8sCoeYgFAMMMP1UGm8HErG8DgZ5F9NGZLcDUYhLXkMJwJDuuBRhe8bMugR4i9G1yqfa",
  "key9": "5DM9cdaxV1UhpCHLe4HMyTVXZGgzbGfm9cBftVhJaMhqkypHg2AhZsKSmixVtNaWTR9R7uk1KMsW1RUiUjUxKJqm",
  "key10": "4Su14BJgZbnFbtU2LYhsJ46myyC7dRGCKGAgp7xq9ZvtKN5rzKhBkai5Pu7YT855goGiVqbejTDLs2HYPYTkQRC4",
  "key11": "56HM1e9AJ72tVdAyDyQgjHsJNrpCaft18szdWzcsTBwUWMjZTfVgQhkvU8Wqc4SCQdu23HiaR2zXFJmYsCt3ph7m",
  "key12": "4oBsnLUuvNtL7jSRPTr3C857FJCicYguHFTFrjSifXdWjiZXSNjprS2Cg3ryB4QEFaF9j488TqdShGH4xythxyEW",
  "key13": "djy2Yk48QvY83S1ntMV1qw98zuuTkSQcoAqLh3PhX9nYaeQ3KCexyUWbUCMxSFRJc5PZ4EWEWB9U2CTjMvnyFKz",
  "key14": "5nF2T73TDmhdHFX1VaQEm177cuEXbhjimbg8YxVHKFDgAFTCGg6vvLd1dwMJ2LtKgwqYvQ8D3DdWoDWodZnVYBhC",
  "key15": "4Gbi5ysVeYEUz8h5xdP3jmHAAZBJosoTVjfRHq4pMdyHkVkgR1pz9wAFzpwjCB5cZGwqJPGKPo92ABprNwDAbZ2x",
  "key16": "51qL5u5CT9yPX61nMMZQcABQW1PMumZbkHQRhjwrNimtQBsbGbRspdBH9kKRpc265zgdjdPZxVbWHmsJUmPgCCCn",
  "key17": "24eAy43a3qjnMiTGsRcXcZXUq7cGjcBVRqU3njEDwpmtizAHBCrUVN9kxzRa8MsDrTPLx3AHnrUgneEmGSWFXf1K",
  "key18": "32vbfkbnDLbPE56ebVpeZXS6DHq14Cw8nxRL5FnWaCSA5vGYHDHxfqxbSavoUUunn3AV2rfBGakCLF8L8DLApCtf",
  "key19": "4SCMakkFYNY9JmjhKa862soFrfLZ11x3fF1N9m6iyWobcXfcNpYAf1oEPRdGgkTh84HSbsCXJKqEXivdxVJ3d1bs",
  "key20": "3t5GF3wJ7JN4v3TMav1UkJDpPaehHEa7b7GydLyQNMyBBHSNekzNcnfCCX4iDiy5hEkH7ihp6C5c8iFhASvBCCvg",
  "key21": "5b4MHEG1BnZj2LeQC6QWu7W1uEsN5M81WuQoDdenzZFqKt8Mhsb8oDPC7n9vtyhq5nCHKvCmusLqTU5QZcBu17Vn",
  "key22": "5zQhcwZPSH7TFBEBgBSFBNSUt6M9rhK251Dac2rGeLEVpgq69NHaoevkvdCYJaUoH1XM6AftugW2fWFcnvFDbKXq",
  "key23": "CeAE3hDABqHuyFmfm2UqXUeGGxN9xFJcjxjRF1CQ3k7xdrTpuTRzLrHe5w3whRpEUPQqUmeuUCZ1ccMJk8LMRbk",
  "key24": "2H4REQUw1SN2p8D4vksckCJ4x7WD8Yb8hWw14ECUmFu5FQspNafLQtxJeCjqBNf79PGr9ob5L48BDpTtKyK3sHvn",
  "key25": "2JxoRK2u5r61gBUYJCj1oyeBkMUNjMqfepw9fFgUfWjTfkA6wAgVM3WetGLNUMePm6PJCqhTzASVEasu9Kd8hpFm",
  "key26": "4AyGdG6Jf7JRNJQywbC8P6ykzcir6Xo1UvyRNMC8x6an5jxCGScGKYpFtD35gqWdXGGL47aM9cev2prgvsi6ipL1",
  "key27": "5EicNVVmzyE71dmfPfU3ju4zeHTBCn9hX4Fbd5KZbNzKbbVPbr1Xw1jqtuFJaP9YRZC8qAjkatMCT1oVMYWFNYZg",
  "key28": "5fwF8zFN9kSxYpBHJthJrjnxHFg3BzudeRxXGewyZ1tYnk2z1EQ1SwPRNxC7G5VCzvP3nfbJWArF2tbvymwiBtM6",
  "key29": "3cN21iWhd8Zy7NC4nQ5mxYkdAaZQPS5NuxGfpAoL1dGdgywUvYPgtS31CFmNJUsLJViSxJe2RBvzvAbMkdubUMKm",
  "key30": "3SohWW8TdKFdAGob1KoUy4xBmJRQtreE4gkRs3cTwMsV35dUXHqkFA1jrjHXuPJhLgUxP8Jwzf3g7MTL6FJSsA1T",
  "key31": "25oZRmUamKB3wn4t3fdCUUWSpKsneoM7oYXy1MyqJBmj6uEs7zHyr9x6R5aZY3WQBkPWmFDJbwBFypaShuf5iEcw",
  "key32": "2QuZZuqChYTujHarDSPVm7t6FWhvHTW8z524XCD2CNs64A4qvFZPNTkxsMQckuLLuR2QRHeQTjgfauJj1zymwo2F",
  "key33": "2wQjnhADc3Ka775i6LLn3DoQCwJSL4RBErKmsGUVneX9E3KtL6nGa6WiXDE9nAgZzrtQVf4waLQ12jzqVD9dTfxa",
  "key34": "3b1L3EAUw9yhQPGhkEjL8oi1VpBwfwYPtWuiQjisbSptL87q3CXzL14nZUHKbdj469vJArJAKNunAutmm9yJrMX1",
  "key35": "Qz8tAnXcUMCxxBwhrRW7k1biLYDE446ynHqHqAWCFJoj6bMguH3jzVK1DD9uj1ovZw3K4rVZxNgiWyvmdgMjpzZ",
  "key36": "d1j3KWvULh7moyQCvXNT7NU2GRXbX9XnKsE6mhfYhcAmXj59g29Sy1SxnBCT7MHk3JZi1z6viZyZ8ZqgqZhaeFK",
  "key37": "31izkDALbfqHwYvSUdaeybTCan8A1w7uMGRzSuAadvJURQyoQAUFfVeNX1oJG7ExujuotqJehYzEbUTdrnU9FPHh",
  "key38": "2bub2HhF9qjK4iU8hjwLHgT4PUuDmF85x1JhavvNHr6cgyXzzEufwWWgE1CEyvKELVrtozh2Frq91N3784i14wfT",
  "key39": "GzVBLQ4NksGPHvhcbg2GpgcfVVQrUwd6QsRimLbbxd8GFHdEiq4Yjf2YytniAvPoR5zUaQCVea42p2mzJcZAuvy",
  "key40": "2ABAPsUSSkZXzNM3RK3J8Pb5YhAfxXNrytXGQLvkDpCqqNT3Ub5PDiM5ZcHnrW6tzfeoBXCPeffN2UKt62WWchAG",
  "key41": "3kUEXRevgabtbYjtP86hsAgCKxk89Xk4FV2EDo1Nogt22eNDX2Mf5WBuKXKEcEWPQna9Te7X3fDQHkwMoGrDqXqW",
  "key42": "5Gab56V1VPzBTqqirzAiCuAk8ZM7M7HrA74Jk7XBAhMBZC7hL24CUT8zxDeckDLGvrJ2REB5ZXviUU3YyZPwyc24",
  "key43": "5SVrutvtwvvowdyGDaxoLRS9GPtsJLK3ZiS3bEbuoao7teW5KTCVv1ZB2fp89aamCHrYTZ4nQYASWd3PucoKmFQD",
  "key44": "5XMoCdQVTY1uWLzRp3nbqE3vcz7DAj82iNC1v81odxLNPU2ujtdCmWh7PtDwSMcz54JwNKBbQrZReJbJJ9tycYEW"
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
