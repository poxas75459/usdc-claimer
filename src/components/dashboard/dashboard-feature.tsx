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
    "3qE71386ZQDYzAJRcnUPiTV8bW19gz2wpnipFFLeqB9Xricb563s12jdSmDE7KeT1dXU15XhNCvb2fiPy4QXtbHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HxLtMdbW78yNuiE3e9RAUWEsSznjeAJyUQNseye6MLctp8ZJDU159umNCbDsVyFuX3H9vp88pijeLPDo6mogmAx",
  "key1": "ScAgtLXJDoMnG4rsBrhyfA3xyfU5NMpigZH7CeeucUDbaqpT2jP64EufEmwzXcgQ2UNQqH7eVwhFQWmJvPYrHSV",
  "key2": "AbcS45pvqEGxP2jgNWjb1aGBYj7jtG4RpsvyHBCRkGAFhKsBtMwh7kuUk2TGLbDnkYWJPm3dMAnNDSr1TMAKPNB",
  "key3": "xGN72Egtgnyorrt8h4wtUp2U8AeiqVSoxs5dEi8F2GCxNDjpAr91rEyZX2hJFBU4QbT6CkyVkH2MpojLbjLT9C3",
  "key4": "4P74gC9MV5nKaqXitMVqcXSSt9ec5stf5QaZXVchAGmm8gQWxJrdmmuqoo2iQKnt4RSyxqFyncD4ZZNzRyc8pX2d",
  "key5": "38V3XsXpF2ZpdqsKLQatWBvwYcaSw5PR4ZidSj52MWLcNheUzKneqAHzpkr5vxs7okN9m49S2HVMV2NLpE5kWQCQ",
  "key6": "2gF4u3BRdWEcgsL5ugYBD9GAn1eMGK3kcEmDQkJ6vWgNgdPCjX94wGJfu1GXSZQmwBRfG73dTRJNSWGYJmkHBcjY",
  "key7": "3EY7zJTVuGSGfGQfy7AbJ2b697AXo1XABbZczg7NoqBEgC3NeGq4m8zikvW3vYQaFshTMVKVCE7eoazohTAsyFxb",
  "key8": "5EeGQ8SRPZ8cDLcSdeTt5UcmFnaPPfw1GCoqmdj5q56E6TxvMiUpEv7Rby3CjKqTxD2nAVCGxjRycpzp8DQJwNnz",
  "key9": "4MxBvb3PSEX2eAtNSfUN3QTJZ1E2nL2k5ZkvdyhPKaKQ1dacSEkuQFfpVpXbjJnJJtvc3psVDrMo9YBB1rVCH41a",
  "key10": "28ckp8WnNDaCBnrGaJPpbojeAVC867xBSGz6ZwaKwNrsfKMB8Tf3GxtegVTQrSHwFH8qXELyYWMm6hYVSynZAfF2",
  "key11": "2888PqS8Pfuwt1WvVUog9Rb5564CsME7HDEbkjqAdtUgkYaau9sUKEwjJM84xxRJgehRex7vwY5UQGnKDejby3qL",
  "key12": "5VjErjsyfPCRSkCEVUxREKcu7kWrDYsgXgWhXGixfj9Pe8hLuWDuKyPLUaxUhS8xMeoNcKupb9KtwMxm7Gw7nC9o",
  "key13": "5KraFwBnDKjB4jMmZTwX7o4rRu8tPraUKwK7eTpav1E43zp5Gdq98CDqvebLRq3z2PL5ZjcKor5xd9JGB8w6B5A8",
  "key14": "qShQ99t9bNzpNdkZ7toA3YzZbScQbFEbJcPJyz2fsYrzNnUEntJauQz44GnHNk7WgGwMCGhPWLhkKETUuCNf3nZ",
  "key15": "4TAdMzNpqYRTq3M4wNBBCzitPEELnUwPYibPrH6oJCVvjJS88RQprKp9E8E4hy9kvMDegBfc5QXTFJx4GiE6rgCQ",
  "key16": "5NqENb9vbqrxcXcRPwpNJSnyvNLdYVwzbvzB11U943bz1yNMRNggK5EoPxgk869iMoHhZTGT4jErPPr4q1han7XC",
  "key17": "5ygz8Mzs9635dAn8kbqnZJfXK5ypB7bVNGDPHvRQZmb3xbnxYaNNY7oHVKJYQ4yqKSzP9YpfiqbbLRiKYw8mezC3",
  "key18": "oWnj7PyTVpJbFG5ULYZjE4ARZ6nZMgqNhLDLYmjqsqM5gTJ8Vsh2bnw8jufit8mXUsCD6gi7wyne3PXi6gaUdBd",
  "key19": "3dyJvabBkDnhEgjdfFVhGQxScs5yXFf8zPZxADWyucTdgDiXE5x8AAwuW1k1UGz8wDf6UQPgg8qbe37UkmqThUFw",
  "key20": "4SjZNRzDg6kfY8kCX53d6ZGkGbUEDz9gP4ip4WRWLdj5tCweaCogSPHcWAvcZbZWJBMR2cW4qmLDHm4aJtM2AYBH",
  "key21": "5CSLBx51dSitED2DJvy5tZEntS4n67BzGWCcFQfo4ohgUWinVM1w9g9ZAa9M7ApkHmAJitV7RR1kvh8gjDwj1Ltc",
  "key22": "2mHYqeYhYGC5fDNC6fZgGDD7ZdqWVp6PubJYDun89sq3p2P5Pee4BxLxmNBVzvEgCTgEqJps9tf8qh8F5aMEzRVa",
  "key23": "3ydQ6Uu7CMK7BepNs1kCAXxrgw9wdRPy6uKPpRK5ZMCaTgUQewCYT23W88L3spgM7eRKsKHqMEr8J5aNWJP3MLRY",
  "key24": "3viBhyRYKQBEYvGeQ9BUJPZyVjbwYinwqS1afS28DvfBoNDz7WEN6cr8M5L8XPaqxVxk7QESkuCWSnMG7NUdJ3u",
  "key25": "429mPqe7eWnk7UPLGHzSDbx3wFaL5WLSUAs2dAC5XUTe1M72RFza45cyXZC7S9RqNoMe4usPJWKDDiEFCxonyAg7",
  "key26": "2wMQSgZ5c192x2ypovEfCPRkLdb7r7HnKjiXEKLtuVUUZC7vrnHZWRvbQ1ecs9caS346X2GqbUKam5CCVx11Hphw",
  "key27": "VTR1D3T4JgJwbHggSaLVoXt5uZ1uytcX86imRt3S2Ujm2cHnXFCgqcsps3QencD18JiHBttYfpvtTBtXevhKBbG",
  "key28": "2vnqvTL8V11Y1rKbjzL7m9NLAMU9AhsMVuhh4Bk8ct8WcFEBTkF2Wm6SfoVyZ2LCEdrN9akobARtJqjqdHnXHZMk",
  "key29": "5YoV1xpbS4YftWRAdGY9wQ6M4mKymT2e1rgotwAAeH43ucYN7vSEpX4YT1YYFPdVBmnwxjUgAaTpya2WuTP4eZi5",
  "key30": "4LQab4ycvgwQrCraNWcWzfig3c4xddHrW7S2ZXDjU74T3v6FXqv6Fark4g6yagiGp3LreRAxvrDyo85DSJBxuGMY",
  "key31": "5LN6mqYqEeaDngUEXSZeYWUpt2mgCf7ieaL3d1ZgcPWsKGVq6J7FbpaGSRkweT6fBdxN9yTAFsYiRFUeH7aDnQDV",
  "key32": "3iwwiQ4zVa3v7DvLiT6anCHovL6kQgR5WjBvFmKNZkgyFq1sYa62tyeKMHjrgXEPz3AtJGyt8s5meFuK3kzKV64H",
  "key33": "3Agfi7xFV7iaRG9SeXhxM1j6X2vWh8iFt4A2DAPzAMPT55LJsSyV6dUDMjBoyAt7hgWMCALRMJUotnehXWhHDkpd"
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
