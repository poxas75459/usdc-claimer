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
    "3SV85uLUu8vb6UNG7VDLWGKHHD4Bi4CgyKryejaEo3zaGGy8JS9m9kGH2n7Xx7kzKQxoz4wGGBpzkqqPefmP6McX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XiWtWPLaFN9TC5nnGSG1tsAGvWy9LKKRJZUrpMBDtGnR2zCZWKyDsLjtd53xVSzqy5cQszqvJ1H7BBak7xbX5y1",
  "key1": "2WT9NpSpsnJ3yjhDrFRrSizDhFNmjv1JxLb4NN1GGx2vNhxu9Z3s9c1VTYc3SuAnwJwRZ1VApXR5rHGwyh3WFUYE",
  "key2": "2DmuEP11hhCB3ST2Y9meXLw7fx33nWJ4WYATA1S3aeGcXca6hMNBrAMDS3rNDnrq6q1BDxMWFrgpzSh5duC3QsPu",
  "key3": "371GQH4kZ1Q3bdnJJx99k5DccTUx5F2QjAMr1Nxv3QSrF26rQBL8u9AG9ALHjajSumypcqRPRyg1KXiwF3nhb8BD",
  "key4": "4V8qwS4AaeCZDHdfbfvVDuV7aSFTRhw5dNL777dVnW7YF3RanN64B7pmyWdbeB71PPRC5ZSZsmSbt2gGUW5g2bZh",
  "key5": "5gaiorqzPVthkWgcwjf469s1hviq2rPc2X9Tf1ubLJRFT6xnAU4pJrjaWBwymgeUPwBF2oJppc7EurZiUFi1EJet",
  "key6": "3TxmgpJKDmP1xqjxUEeKduuYVUFwSdMKggTL7rvRwCm6na59Gd8gz2QkjoRwhugcici7ZnGjYvoKmhYSrSMLdDub",
  "key7": "5mK2yUFs9D4EAHYeqkBvZixmYLLXZYCMK7S74sfcNw1ZFb2TgZYPVJKUm5HoRMZaeP9v6e93oQz1FxoEKvjxSgpb",
  "key8": "4EsAtvzZ7Go9euSkC3KC2WggjFkdJX7bmbTaF8uJFfSUnoky7oqPfUwcyWHnL8pmXQZsUTqH3cbqQFj3tT8W7G6U",
  "key9": "3A9aPk7VG4nQSbVjrQnRLpmixhi3sB1odM5osK42cUCW37vzBRecX83L2e2ihbupT6EApPnwFihMFaa4Vayu3TzJ",
  "key10": "sJTnWMPccYXdxQiiWAkTmqA8sEGrEnfb5naUWGjcs3hMiwt3Yo9wSTE7weUr8G8YnD8pvuJadU81tUsNLzHymbX",
  "key11": "LufyHwBs1ssDM2pWftkypQThAC3g5i5GUYvwujc6LAGrGWbrfJH7Ar6XugTYH9DT9ojUv8Nd45MoEeur1EDkJW4",
  "key12": "5zPfEbNjPks6uZjp4HfW2yctUKwts6PPr2AvVGWAYnEq4f4f7N1FutEqZGX1S7ei1jQuC9JqMinbvGEekJ4u5iUn",
  "key13": "5LytwmUuSwbfXXhXJSmCg872k6nBrCnGf2gHcYDYHSfpnTGgyEfcj3gupNJxXkJPHtC4bGJP8jGaWFjkrjRxCTr8",
  "key14": "YeretVLB2L54qmjJ4iLJh8ncNmkTwQiMiTLGq6d8YZPtrmkKFboq48VbyscEgmvsNd8vfHsbhBtBrVFpFYs1T33",
  "key15": "3fyfRYjP56ZyidjfNyHGKLDuGEKPmLjDXJANJR2uSXmwQoi8X8UV3x15WNN5tTb74BvNTVtRaV2ECX3sCyM9qzSS",
  "key16": "3fyW7AHShZg1qoAXsMdEvt2RD5cwNBPi8xMnMucVoXZ9Qc1YQVUJN3tDqWS4eZxbndQ6rMbewWtWgBUNr8Y2EdmG",
  "key17": "2s4q2Jnm7gddG98ZDKNWAR9dsSpzBSadvCdJ2wwUFewMDzD4YqswNizcvurPN4cq8iXHLju2LREsxoDn7QsKptWt",
  "key18": "2svPwUipvGUyCkbNg5LUS9raV4R5LJs6TwP8jedTU3oBmkn6bKbSSD2naAqEgR6MGJFmX6aDPWPzSSMEUbpfyWT8",
  "key19": "2jZ3AXrUneCmsVx5aMyhqBq6aPASrvHTmyojcnGb7MoeHVg94sRixvbLPNf4jLBhKrV6jX7FM69bDF9of3nwtpU3",
  "key20": "wgEL5yVaaT1zNnU4KFb9W8g4bVuPWFKPfu3nUvkh8bod8JPvcHFGdv7m26d52mj7kgLJrYgShp3emnqnnZNfoWs",
  "key21": "5T6Zx57druE3wHV1Epf4JPnLnwxpkZPfnV7AezmtSQq1NCMYYXtRgeEmCEwMizSEw2f6THAK62WduD68Uuy4CRgD",
  "key22": "4V75WxcaefowggA5LryeXjhRyWGfPFJ5S4s1Q1R9uncw5ZpncQPvF3Epg1ru3ZWVPeLCqqNzGhMMDsU7FbDU1eXK",
  "key23": "2nQfeeaTbsXzpWhHo1m5n8dFE75pJkdGASGBnMYHcgEjKXjggoh3FXTrRU5yHLuHXovuYHoMYFx26Zy4kfzfXcgZ",
  "key24": "2vPkQWjyT1Pzpr3SghSoMnLZCbcBsJrq4M5DqpB77aVmZxaWYh7ZfFfVPfNK5AG9m8ovf1LnAHFp1AfJcP5p1TTT",
  "key25": "4UTWKnmead5LASWbhWX9nJfbWsQ8UibxHiKAcMZcvAy6w775Le2jJJge97ZXo5AfAUp5Ce7HXXkptxr6tuUUCU6H",
  "key26": "5QQVWitCMNgWHAAUNW87sLuqVeDBaENrVGxEV37gqv8ePWtJsLWsVK7aTRBrnqxPGuRHnS5eoR5oQVSkNgQ733AC"
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
