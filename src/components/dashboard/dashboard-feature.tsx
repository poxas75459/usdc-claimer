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
    "2ZqVQdGiw1uNkAAiPmH4mtmpP2yoQABXcmirgEdstFN8DsSQ2XerPfcSB7Uc7rSZ66YwywaE6dueif5DopT3iaRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F13WJVoDdtXwHyUabULjG5yDY8JcJrsqVQTL27WHSzB3t28LdQ54mdHWF3P2pXdsg17mbVo8if4LeuRbo3cYjgG",
  "key1": "oFPjR6zE9NCP3TU2uiG7e2m1hKdJhPejXirRTLiSqgX9AgYEUjQArTBmK8DLGkNmrVT2wysUNivaT2qy8RygXkt",
  "key2": "Tp713khMFDe4UnJqQyTgMWXZuLhNpWqCDFRPv8tEhVAyUGzKfuFKWT6rJww1u5PgP6oAz6npPthVRsahSuW8YBh",
  "key3": "FtUNJf83vAEMNFwCxiTpD9A8SbAr8fdecHX31HAJ5H7h1bVWLnVFJEN5wdjZX5FmztJ5FDaujVJ97DwAmqCe1Q1",
  "key4": "3DpE8k7TKoZDptVPjM853dBSthdK2ymUZRWSRBPJyDwumLairLzh3xZmEkKJKNRDAQRb2K2242UVUUNZLjtQmJqS",
  "key5": "5VejbpTz54zbSsiDUpBKBvtcFS2C4KHT1PSf9mTyixRyk8GBLia5wAypq5tT7tmwm74BYEoKQwtoLmZn5hidnLe1",
  "key6": "9XvZhAbMaMYDMvesXudcL2L8MZpFA2m4cobFCMYUUmVBssdWi6BbvDHp4ZwbnaANJXWBsiFeSfHdT2Xby8yU6Va",
  "key7": "3EHymuJCUvo4tfjhTH8BbNhiaAM6u2JdGFoURaKkgfg6PzmWEunRNLiRmaeZhHp6wBfXFBNoE9JwC5QpMniH6VSp",
  "key8": "4Hzh84DkHtw7vwy7WRyPG1ibonmD1fJh5hwjy8uWfVX5EykyUnLrQJT5bnJYmoTvy5Snz5G2BtApT4qzqquGNJoC",
  "key9": "5Paz461enFVztraZaWcNqoKicy81iBUgwdJUNBPtX35s63gELZXcy3pgutBQ19um6wHxiC8NUnhdSGnWJhgUfYc3",
  "key10": "jc1zUKRzbwK2qNDZxFSwDqgvHiniYcKxzWoXdvDWTYxxVycP3APbR6XWBR3VnWSzfSZicHvRDSzSkuXbKvf1ukF",
  "key11": "42TWmJQZs17e7Cuw9sVBPi5GWQfyHSmY4VuTtrtHqFK3ewzWoXzh4r9Utiu5brDT2JJBySkd7RG2B7pJrE2rJ5kq",
  "key12": "3VMY4ZMLzZjeKKa7Fu6wy9QqLEbXhuqy7uKHjiBy7ifHQJjyagkxQ2cQauho1pXw2RimJ8ASwWnd4YEFibtcHejH",
  "key13": "2WBY5oHg6DhSdaNpxLU3DX788QFnaEohxKeM6TEtH2B18GyUTJubmpDhj39rkyjP1jZnvgjWYa7tokiWTTd4c4V6",
  "key14": "2o4p8iF7BVU16niw5qBjDJX9UEtsRR9msgQffoT5BHQr8RAD5TFfNDTgNEsBRBcnUjmbWG2L3SKM8KrTvGawNbHA",
  "key15": "4CUQPgd54AaDn2CKqmSPnnk62STRLpphutp6ZFGnHnhQjdJaT27WL1VczUK4i3Z9b5donHo5FzAdGpyWnYaWhRee",
  "key16": "339TPpjAaF2qh12oiN3gGriWhq8y88MUZwtWqvKCBgzJGbZQVEc8fRHdgYi2BYvcG1ndcz55ChAvSBC6kFL8GpTE",
  "key17": "5v8BtXP1BaoNMSYQ9yytzLbu2qwR1eBtweYTHUMn5gsYJBUEh6eenHboLqwNMa1orEbQqgwSBA6A4o38r6FktjkA",
  "key18": "4KhNydmjrH4vJMjdLmSbV2SJhwhYyh42jh6DrMvbB3HUEfG91cV8Xpgm7USzyyVSAk21H1onM7x8K9K2gdDgsZJ6",
  "key19": "239uaSbCSxJXxXF9tBCivm7J5cJxTQW469uoUqRvqFUw9zZRmSFoej7FLea2D7vr921thmjdaByvKH3vRvBETQYi",
  "key20": "2uCRcYx8cZvCyncCzV1XVyKfRr79V25aNefWWt6xLk6Zn4KzPMcnHndawzCqJxkcJapqASDddT1HiSimURAvE9Uj",
  "key21": "JBY92GHyrSNQ7GcrbUpczRdBC9Y8SaUEBPfnHTP9TrctMHu2PryE2qrxwpw4tZDHwjHxusRzsdGEGSEzHT4E3jV",
  "key22": "1oLY1UdBQCw1tsmWeKZngnH8SWS6nf84fNWqT78VgRno2dQr6S5LUh6CmQhNt3rRpLvNGJyW8CyZmHU49nxadms",
  "key23": "46rzaS2vPiPg7yuQ1tGEPG24kzKcbukDvQzDLhaS9uPngBFxBpP1HW1dRfHkEpACmFx775cV5fXzwdf851BcfwSJ",
  "key24": "SNvGun2LqYBjBYW5Ls2KciVGuJmZMxMHtxAe8mC7av7ivWyQJaEXFkSxAj8pFjEDiMzmCd3R5ywZJj589arioAB",
  "key25": "3xJYRhRhnz6pxD9ZUc5xgaihY4NbqNZAs49ewThkAgmp9XVRm1xmaucGdDdAAHYTYmCyPKqSuKpShw24Urb5eAYv",
  "key26": "2mnMZxUzfX8s8yPp3fEuscdreFGysXG7ozNrCULiZYzyrsMfm9rADQbq7sDKTCVQ5iEdSzNnoWtk66ZpktmVdZU6",
  "key27": "2rrPSfZ3Hff9WUPKT67ACRM5qqC7EE66TX3d2KWAtLZYK7D4Rx7tUGh7SdoYYGoVDKBtiVi9y17JkTRTXN8KDq8e"
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
