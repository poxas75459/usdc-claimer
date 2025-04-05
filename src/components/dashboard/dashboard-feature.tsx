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
    "2nkJ4sTVGCtxJvPkyZqxgjdBV91kMMUV5afWQFwT942vYB8t3MedEYZx1jwSLxFPB8hwwTfAKqQWPLoCirWxqVYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xr1RKcPRRr1khVE91AWYjHCFgp3zGv84oNadHHxTgBKkhNSzqTojUg9WstAmGUVM9gMy1SR2Me8ud81q5L5A6vA",
  "key1": "34nW1oPX8sspiHJbeQrcVzbeCiiHohzAR4A9Jkj6xxfWt2nZFWEffdJ2W7qTqjdX7SbyV4xrcKwCJSuzDr6FAHMy",
  "key2": "5bcJ5wrHpBNHp7HDMGiBoEFTb83CVvnHLbVBWsPeDpHw2JAEYorNYdZ88YMifeJtgvmvzY5bao2LnYf4fi3PfwJR",
  "key3": "4sJ6X5ZqikMiv9T18oUdhB6sH4TAcXUT5yhPauEZU2qhukSEkuyffbvQHTv3GruxzRyB9uPGZBoRnFjCPPiRFkF6",
  "key4": "5ucxuZwDT6Gs1VnzaKdAGymj8Y8kuLUzSLwJxEmNJJL8QtJjaGhn4XQnm6UfiLsCKjkZjd6WbawFu7dizCPVas8e",
  "key5": "mwmjF7uiyoCisJETw6VmsXQFpuTZvhAXFP2fGMF7VYLWtm7PC6BKermqEXmMCqWLj5RsdUcDJRrjobgMZe7vvo4",
  "key6": "5Jsnaf7SMfXDWSVs2HU15wqQwyhmLnAJyk61iWvq6sSf3TMt59ZCwqLDVLCutRDA4CkMCwoxNNiTAMaWYgZmrRTp",
  "key7": "65fCNXxgAjuNE3cgWGNtFdXyxUAvKWgQ9VeP31U6Fcg9FF8YJnCAA8Yqa9rxuAXmmKgTHXVuyeLoXuXWC3kStSUg",
  "key8": "4ZAcG7aBz7gXfaVrwrWykFu9Q5bVo5XmSuFx36YCDBPQPZMYupmy7R7efriDbb7fLLF6niTQB7ehpTHwRg3pheYf",
  "key9": "5VNYJob2wnf5G3Wb679wQ5UwEG9TSuwhjWK2w4LijyLuiFhKcim9WjVwwmE64rXrdA9i47S2D5KaB1VuqN8k8E2J",
  "key10": "5ngd1Fzp9hyJ8HTF7YrAdxHGF2hSDWYHiAB5nNzEXYe3aU8U95erCTjgrqssYAdbmagtxVtPFA6HwgzWhbGUaBAu",
  "key11": "4ypRkf9JRKLkjkBydyDQnykGXGCLjtT3RLWyVLKfp25oGR39wRBbDwzukZKcjRhoA66wq2n33sqHdhjVbvXVw6aR",
  "key12": "4RzHHB3ohnkNL3KULw461BkLL89xg3Lk1JFzcVDudR9Hjuwqe4DEe9GjEgquXHTcfeSyyF8w3M6xHurkTQhrjctc",
  "key13": "4R7xHaaa9u85711u9KWHUcotYfjfsLqzzc3KauFaQETmUGzHN4skFPgaXzxBLcbTN9VHex2Y4g5Y96jarodWs7Lq",
  "key14": "46YYDUPb9Jy2p9UYCZHufSkSagZqepxTt38ka8F7mpqRr5QjyzXXMBEUHRm5Tky5fGvwnbQbWomsH7PP4whRp8U5",
  "key15": "5owiUoKhoDsqSexLvmWFJHEg7xkfkGGBRtkqBsLomZ45YFjxcFznj4svm3NEQR9YTySxRrnvEWm7eywUppcn94Qi",
  "key16": "t1CsJjpcwk5LQBSzq6S2j6akPgU6GpjaDPd65WZkMQvzrYsqpFFmRqRoWiz1MvVwB1U45UwvT9X1ro7M8PyjBPN",
  "key17": "5pMGVqpdzEC6BsBMC57UNQhPuSALjNX2REZ4zTJtDMwuoeuihbjSA2i93kYAmRHh4NnHu8hvobP1wAS9m1A7PapM",
  "key18": "yK6MfpeBcMnfsRbNpm5Tp5y5udweY8pFVhg8ypG2KPXuCyzxbfNy82qsSY1heLuDvFaXxVCuH3NdVHgZ1GC1Hsk",
  "key19": "4o4Awo7niF3fthLNjW44jEFykdfvazxdFLqouNDoB7yWuRnLjpYPcL8qaSqbC58kraeoZvE1UG6BSeVCgbAaPGF4",
  "key20": "5pn6XzrzP4McPCc4Y6SnanzWKbZDrrdZmv5UxNzc4eQfqqe531mpPGyxBtkzXxu8XMnjoyLViSJCDBq9VM8vWDST",
  "key21": "2bFGPZf2i32FtxumGfsK3MV2zFZxNpXFWHBQPcvHYY6qtmG2Setj95MBuU96AA6UjSD97x3fRbiLyBVEJnnEWdhk",
  "key22": "2NEu2mtjFc6fV1iBT1qv62k2u3DB3niuBh2JmFWsw6kDm7vdxGMEexM72KAxAzrwyQvmyuiajY5KHfwhAUaSLJWR",
  "key23": "4mF6zah1YE332MjhHuB8ke9YfWJ22FjYHrcJ6Zd6qiSAnwJSBANeMNMGFy74RkPVmyJfjdPh1qp3mjYChuyBgai3",
  "key24": "AWoPP4c7ZBArSYuoNqP996cXxJxi7EC1C5pSsTo8eH9b6hsVp87wEAaBbUwMANnu3THRziFFAEUba7sosJA5S61",
  "key25": "2woFWYrBoeic3jknCF4vEQPz6cbWGJYM3gsDEJVGDX2JSbKGv6c9NTKc2svaG6BGcdfVvycAcvZb52gYVZN6pjbZ",
  "key26": "4Gy2ErS1cWVfcotxxufe8HKvwkJq7czoVV7KBpckyC79M98k9ibp8xyTyAAfJtAJ9iPRDhgXJSog4RZLMWBh9TB1",
  "key27": "2AUhXx15g5pYVhNsUeTkmmP7JWpTeT5gtJF6B1GGoXVFvS42GaLG8qu5TqyTbztq7wAF2m7pNim2BX6SQGA82vsQ"
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
