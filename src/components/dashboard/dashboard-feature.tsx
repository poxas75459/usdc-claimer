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
    "2UbDkLLYQXAte35veeFKAaEFysW8L7Ej4yyC2yqxeaSCjtM3KVyFzSFgGeLq5VjZnhmBgj17zUPHzp42de5GvXun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B6wS4FyBQ7KJHnQfzFxRdtpkUruJEJTcdVAE6BJgYuVd6bjPPUFtF6aFYv63ENH28CrhnU8qaGf9dC52GKdqKaW",
  "key1": "4N3LUxb2DPPV3qc5JsJc3RoGjo47mCGhgTYGBone9wuM4EdAj97GVE1FgsRRxshxmZC1S7UnrtppEoqcSLtusqoa",
  "key2": "5bu9mW6fJgf9ksFvTjMYBhVQJdtF4F6GBJ5qCF6HzRt1reX7wbGSskBgB9CERFjYgkzdgBHeXsp2wALcVJ6A5Nx1",
  "key3": "61uvnEGjeubyVQbYa9JD1h9jvTgThw8BSwwPnYLLstxPXheAYFXeQoDwv6FaphotNDka7UCGWr4vTo2mpDWxrEoR",
  "key4": "3E6FZZNTwssdG4X2erkRuUWHuS3VcDDXjsrcRjAvjoS2rrBBZtWrznhQqEGWnG2aHd8t1fGzcKYPG3KisrdJjmmj",
  "key5": "35fGPGeE1o8RxqeA2BskfKZ4vFMbkbwC7EseiB2gdoN6WmEcmvPbqhSXbNJpMNd5rwqC9kLxAmScgYK6z4GTvvV2",
  "key6": "PDgvmQWk8FKUdP6wSE8Rj7Qs5sGvjpF4AN1jGXGGpafdJ7RNvQuojATGNLwUxTNREH6kuKjnL9S5fBfneaJvFXj",
  "key7": "23Nf9BdxUYS3AJwDGTj5aAK3MZPfYrtP8tn9jeKtqi2gLRxcn4tCpe5XttBxqxvVVBPiMUNGS1v4BUgXWpCJgLB3",
  "key8": "89maWQZA1cS8UCrBY7HWA8mdBopVk6NNWQfRBefEgLsU8ZJqSaueFSH2nUrzGxA8AXtPNu165JHSNnX2VCEMWoG",
  "key9": "3RAREex74FzcdaiTGnFApw91aK8FATxcqrz2PrzH9D28zMa4sM5bxzkfhJEyaJQ3ZFP2swy9qSq9v8PK85xSFBp1",
  "key10": "3ZwtCqF4uP1RXV1AHKXa7oaz4jTvyA2mHkja33f33zgf9b1eegHN6NLJxntNqD3odsnyuLUbWRs3xKpd1YG4LgWP",
  "key11": "CzViVtj6UFDMVcEqkPmXstRu5wov1RnEvmrUfUej68ofWbFESfS1M6FLiffoFpQAiMza3tH5x1kw1FokqAXTth5",
  "key12": "2cuWkdMs9sWcHy7EsAM4BGyzG4SWpCkoa9UJBJuMfdDc5mVf3jYwb5WrAX8xSWJqZi2TqSmUMHumyq5ngLchoTGg",
  "key13": "G8nhacVwHcoGSRpjWLqguWdwH1de9UhG6F1nt1yHDLn2Z7drdJA11tpogYHWu6jJWeBGZVRhERcB9xM2RmWt6Mt",
  "key14": "3uPcUqsamHaWs88zAQtyHhNYWQqy4zPBdN3ZqQ9GR3r3KgNg9eQAdgqN3Wtd8wgVyUav6V8SqRQ4SR5bVreKj6ZG",
  "key15": "2cMrEHmCTA6Py96ZR1JkEFovF7yKEKmeYnCG67934xoog553fzM9z6DNFqQvSxyecnRXdaXM8eEG6KQrir9YzokC",
  "key16": "3PAxnzM6WGtk6696vi9Cb4ZPc5Lvor9aWouSdJRw38C2TuqtesFSMa323n73bQ2cFfh2KmB4DgThjfDqR5V66Xzd",
  "key17": "2JEGxMFrbiaxFPwvaXPKqqaam8nBmf6TLZfNQpuGZf2f7zd67JjS3NZtddYGD5Tak1yaGgXeSj8BG2bb2dCBG4pZ",
  "key18": "3jyBfmNqi1GSPeBcKDPJ3iXsSAe7KNtazjp9LBFh65bKyY1zpwAPGgkSwNeT5UYEc4yb6qtJ6s49Fjcop2p1nm6t",
  "key19": "4iUdNKE64cGbyTHb7UeYxMVsHNyQPz5oo4s6xozxvin4nFU6B8Eeg9A5VbxnaCYafF7d6YmNa4GxV2SfyarZToFj",
  "key20": "3WkDRg3cJRT7pN7gENd51nw1KqvtPugt7ey14NyF4pkUScK1bGbPerbVj8k7oqkFamZUu8WqSovWPKoXoJAMNNpE",
  "key21": "2ZxDu16nWgGBiSNo9kXt8fChjnxzB3TfLJDu887SHfzc8kkKqnM9mMMANkWoK4nSVW8esiFocTmhPX6QpaExDggV",
  "key22": "24fnzWs9J2MVdTYJYR1nGfTit57cMFQAbJxQHK87bzo7kuTMNWjwz7WkrkHz4dAYvD538AFqqeBXqewYQcD3BFEW",
  "key23": "KDpJVWbDPmcWmoPkNSXkjZ2HEsHTeXguKx98ivQ1Zgt3J1VymGtjK34L21JgpZyneqoBsppDERwwCEVU31s93jk",
  "key24": "5oVLCEEG4Poerv4NumUsXSduCGpAdhZWT2a5SY2K4jCDWgE8AgTawHJY1TSEKUcyg1kXYwDABy4hPeR9uwoZJUbJ",
  "key25": "3Zt4rhJeWM9UStH5aiC4yi7FMZM5JbHHgkfZNAWEhsAfPDzwhRfbPnm7HKWWTGShsa3wP5TBXuPnzJxFogqTNFa4"
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
