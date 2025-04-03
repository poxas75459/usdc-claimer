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
    "5yBEssrhEbDgjtup2fxJFJmLQdHhBUz5oVwQLE6UkNGgTAxQE9Q4S6LMyojLXj3jgva6h1peowiTTKPWrZAqwVhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fnp8xqvb5P52n63qh5BhJoCN9AjNQDih3MSkRZ2FipQc7aVx2g4vGMz3nFPhsw37DnCNKR2bWQPtqC1qQz2dHP7",
  "key1": "pSLCT5xgJvcufqtrBjqy4hcTpYriRJ2boCQB5nM9PYgbdbDA2ca3AeSRSK8xQq7Q3VesSq5pwpCJL15ETpagu8U",
  "key2": "55Vn9d9MWjJ3XVvFvrGSc97yowo47rNAFCGJJEETECVVCT6aMR9jfinmCuqtiHtP2LoLNPJNMwyjzLvrcYSH9gis",
  "key3": "Jhm7bvKW87g4tjtQ9m7AgCKCQq8Vkgath8KUrnBxjRsYRmDeG8cBLA7p7cnCgchBJeq63rxvxW5zB5DrrgQ4ZN2",
  "key4": "3mVrFWx3DmiYBQodv5nxqAuqamRYtLPBZ7dJVkKUsjaADhJdeY7yhWs5EvT64V5DXCDvXTJBPXUmpe6kGiwaV8eG",
  "key5": "65qMXxkn4F72U7bPXra8ZjoFhX5btKhogf8aw8uSe7t7M77wMcDjGggx1pFx4kC57WcYXmXtSLNp15okGUsdy7Xp",
  "key6": "2P37TM34AWhVcJu6gGNvF3Zay4NpsLKCfJPopwRDwvua9dBXHa4A3t9Bdc6wrWMMJ9KUybf6SAhDz9jyrmyTr8vs",
  "key7": "474wC3YWaxKutNi8zDziZHT6ed4xLr5t5k32eXEbhKBco1MXFaLRhyCtogs8HSceBk3nTGqa6ytijoNv8UFx5jpB",
  "key8": "ZxkN4ydLMMtty7cSxUjjpm71sdK8g2iAduU2fB3dsoQW5fh9V7QQKaGDXrJ5rUihPXXsLkk78Bu3UdGbcwaVt5A",
  "key9": "66dHvq29d2U4oPmed8gt4Fnsh6oE4zfUYGRgcvZnRXK1ghsWzqxiZBRGRyTYknc81VeG9Snpqren8yKSgRNuVwQr",
  "key10": "4FhnvZ8NRuk4StkNh44YUTqSpn5NMFfH2KAikwNDWJMzyiai39Z3a9M4K6gBrXxeAJhA6nQnGpBjrEdpSS6EqBkD",
  "key11": "366vCmHin6L4i6QvyNm5PYkWkqBhcg5zQ7kKNk77VkyTi2ucycn7LZ6e98SyS2oEEcDCnhe8CQtahd7Ybqm43S61",
  "key12": "WaWwtuNRk9kf4Y553vPDzNtwQQzQMoxmX5efTUNtUkwF8fPYwkojePJEhAhjRZqWfEsXS2BcY5Rt8MHSAFexoVN",
  "key13": "FhUJbkLKXwQ86jFco7Kn1QppVJwMHEjJwSGz4TLWciK7KV1PQynYAReUptrLAW8XZVE4f263iyFkrdTiYBHK4tB",
  "key14": "3BnCUM5hUo1XaLSAZzuvyVTJ7hj3MMua1QJwPE9YTwhpFP3R3ucUcpqUoD9m6kZvChimg2r2rQYrZ49sRLuYXqbN",
  "key15": "4aUx9R2VdKc4MqpGA8P9yLLHNwiZZ6XqPbpDmJyWDBacFjiq4a8J6QR9yufDUpRX9onKBxwHMoBbZTSM85tdUkLw",
  "key16": "5wfwp26A9mjHrpqTamZVxqQNCo9PCHYUg8rZ36bUesZyrjk1NFHYEUTSZaQ2WXw5afZfBPeyiC5oS3n7GRw3xwX1",
  "key17": "4vfbKUZdJAARzinWPLHKao1LNH6mzhAnEpNx73qibb6tLrW8oLg9qw2CWHyo7Vcy371YkqFBLdNmwDtouAHruXBV",
  "key18": "rDFyar19HdR3nw3v15tzgsvHW9ogiJvxZXWpAVQHX2pAC2mtfx1Y4yLYN8x4M3DUCqmfXiQZs9rJJgXjCpRh2B4",
  "key19": "5ut4tp66r24rqkxtvswP7tufdpWUeiefzkpviH3Yheargz7uZrDyzSRJrG4ACyFAHX3Wb4bTNsQdb2fvEywKp1Bs",
  "key20": "56GKMkMYaJqppMRVShQtz6bpSwvB9M8gKP84Fh9nZJureoTRhHzLx1qK3xGeP5gkWAaURHdjCAYky3a4RKrDHi6y",
  "key21": "51frZjZdvur7QWJDHeAyS3Dwhs1jt2wci6pKQmp9siDyNj2kUaQPDMUJhKGhTVks7E7PxW3SDYot6p8svgHcv43B",
  "key22": "4wxD9ts2iydfeCwqKi1yMwUPg3XK7ttYE9poLGY2ebN1kKnARyrRe3QtY5DCuUDHFL4V51eXfWkk55MEykf4BgyK",
  "key23": "4f35V1y4NfJVqmwCs4s5k12ZoPUrJb9Y6Age44L1fEFqfApRwqvDXEaJPDSfMK9STD3odkcsowgpX2aCm6xNj7RQ",
  "key24": "4mwLwH9LoGvmgoKvkcL7DpBo1otxT3SB6RMmj6xnTw7t8Bvqa1NVq1Gmet5o8SXVhtDvP5bGRmXRZZ5DjaMX4yxk",
  "key25": "4RmLXe3NYcK5gWSoLEk9eTDo1updFP7WS8mqgnU4HMQDduuwjyUAGSFUtGE17XafaYaNQoQL6onE9rpghPUEEstz",
  "key26": "4rTk63sXZAxKRQcSBB5ZQxvGtbYJLyszk8LrmecAvXBepg1VkUpSuMHSUkHdnadVawhVhmRzyMAi9Ys7w9eAQYpn",
  "key27": "FTPNjCYxbUfNMageq5ikYh6MJb8rwcd3uLg96CbeAU9tAwu4iAz2BNsTxLEBgsBxfYkn8emvFPRchaJ731NweSb",
  "key28": "3bKKeHps1KjdXoHeHRzUXk3XiyijztJ9HqPyTyGqagx7KaewyLg2y2D1ZQu7gwdyEYWJSJDT7U29ZMc917Xrf8YT",
  "key29": "5E3nYwGbCPHqBMKKkjBwvBs9KrbeP9QYANjCh6Y7yPVH9WnHiQek2gg6j92LuXvSJLU7onvfGK8cPytQyFEQntZM",
  "key30": "29RSeHd3kmC4UeAJuDnxLrhW4voCj52B3DUx7CjjJxhjBT2dYKgdMCg8ug5siA2MyGcasLoVpn7sYnnKFEFMk6Gp",
  "key31": "472TTv3hX3qjYY1ARqMvMPW8WqBLrGGTHUGgTfRqNNPqEYAx56jhNoQKJHBcwuegLr64S3v1h6DiNJ26tyHUNCbs",
  "key32": "3Xjz5E5MRekuw35wShRiXHSvwVBbjyU9SZyQZNJwohUpME83jczSnG7ihs1TQWJUV1VGvNVwZ4kzCoAQt9ma7tUK",
  "key33": "45bT5xgUPoyLDGfyaopDu1oPSfL8WDPXCkjUJTdLUHUVJhwrsgQXQ777W75EGgRPUFWKPUEXoiknEXVYQnBk88yB",
  "key34": "4ijC8AZAmV4MvHtkfnzvSkaEtHWjrWBjbSpQRhn5ysMjejbE9d6u8dNda3vRn1A8PfTZgjnUpM8WG5RsrrpbhVr",
  "key35": "5umkJraG978mGoGeicz4v4H62AYnaj91gUBHW5Rr9CNZjjaFwv4kHdHQzNnGaiJM1SwMHhgvbKdzvR43eL7kUhcX",
  "key36": "2fkezxkvMnkSASdwDM18jEd32QFA1U56JC1wEgnqZ2rQZshix9tZVp7UwujBRBSRhWs5fy4uyAEftVV665dAvFNP",
  "key37": "3PRbnGJopjLVs8tiitF56DCoABa2LzoetSWFnUWeucfMUozn77ge8ZUq8WoEruykHijcc6vVpry3rJmsVmbumqdq",
  "key38": "5poHQoL9bcBH7wDZk9jDq9337wrwvUsYFCQdAjx4aUZ88293j29GRxhwT1vkbXZdZcNC8MCLVk4FoWwyTzqgfoCf",
  "key39": "62N7VAdFH7yPwh9BPoGhKv2bZzMbAwZGRjLRcoxQhiaZJpruqA76Nvff6JvS5HpCoH68rtLHaDKmCiFicTHdF1GC"
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
