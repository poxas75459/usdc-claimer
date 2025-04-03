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
    "2NZfm7HXMCdDYRNLZZrCG1HMxP9CQYgATzFRDQnuWZBgWdB1ikfoKJFUDyMUNcLmAFDm7cTCu9mqVdfoBP3HTHS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qkp5g8PxQKF1XFVm3eoeVhwjhUnvnpUU2LaPCpQwK573fEE4hthFGthPudX8DvSf4HUqqqx9u1Qe8agp4EZ7DYU",
  "key1": "FokNGcBxvvAGL33iYntVvHmkuaX52jUmixyMavrwbTR29HVXHDrxuwimirAhJ2oiB3LPWDU4F5fjxsNsX7SAuPV",
  "key2": "5dUY2g1a2U7wrqBcTc5dhQLrZbg6iu7LX5yoUaDJQC6gnjRq8x3h2i3WQM5QDJYEQLqzr9cjYRJkxp6AEzgD5My6",
  "key3": "63PCBNMZu9Lor4ucrkcDiZ6zFgN5gzSjkp2CPPiGPJoaoxGwQi8XmMi1m5QExAAgLPXX8XMm1YusBfQsmUrYNxB",
  "key4": "4gwMk6PwpiZ71re4C7UmC9sY1zEVPziSj9XYZSg9Se4Bvv8Eka1FUN283DX4orkG46j9hLED2EJUydwv1GEb9ZKE",
  "key5": "HDKyEJ4nTDProwhMCpB2ak3vwLRYZfHohRycnDQL63TTNGhNWfxxJ2hoNkXscaYuHT4j16BZJeN5ZeYEgNkm7Vo",
  "key6": "48cu5Ayhr3BcoMQwWrEG213SQUNn8dhu9ZAxRD86kz6jq9Ffc6MatKmzq2FMLLqrxNa3beikcJ9fdwH5dtg2NAut",
  "key7": "5maRUZ13ajxEEu8tmEgM38HHYsBjN5opdFS7X5Fj22U5GLhtcqUdDkoAcKcGo9Q1JcWWN2ob3EnHMastfBravXgb",
  "key8": "2iT4U2WmHJrQdURmGRdyUtFpkAoKJWoRX2R96NBFWe9q8e9H6GYd2tpeNbgqqneFKM2enPAZZH8DzxWjMENv6AQU",
  "key9": "xp9WESjQnynHRXhkC7ScmNzxxJ9MdVhq8siAhe3hBcM3eUjUrsbB3Nm6redkcmGtuT7QGboscZ7KGy82pF3WivE",
  "key10": "3kySdEmaYuKRKQTv5Aq3M6VM3MjzLgQTg1WgCDTWCgtAwQKFwdqsfxNnCJGAgZRigt4g5E2Tqtbnh36QEzb5pUhS",
  "key11": "5pUTpNPnd9RozaqYtDicqCXYSvYJai2fC5UAHNBeUz3YnbvbfyJpNF2nN9LYvpTnQDbrVhk8QvFFpDG944gubtJ",
  "key12": "4r19wdvYTpBne2JkWoAxmSvyxSRvU2MSJd1o7fofu6VTMrxHqU9BrSmvy3XpumavUVgjmqSGzAiUWp5taG3pEjTt",
  "key13": "5dR2Yfa9kPLatH8cfHXdTtxP2uc4V796RpaSHqN69gjuaNY8ZuR4FwjMjwPGc1cESJHDE97asJPLKXGwF88LNeDH",
  "key14": "4i7862ongRVxB2WTHTWvqnxVBUaTQPh89e6yKwgvEuLZ6j9VWJ9n52P24kMeiCCitq7QSP87XKeiqeNpr4CQugAw",
  "key15": "29dnFCVArZg82ouXGEJGYn3gbJsSfgzKsxMBR6DfNcGB7h2PswazqfbP9Xrhpi6XCwcvbgiN8dR7csES64xqCNLd",
  "key16": "2qcoL4jZ82tLcZnZjCN99xE2dVY6miSRN8YmeybPQoUh2pQ7yP7LZce4QgirsRg9E77tPnhKS4ywhMr9jbFT3pfz",
  "key17": "3X6oyeiH868bL14AGh2NeoKFARoHJqtz1JTxyV9omC5bwQaSRb9TuTqVefQ57EfVkdbsc57YgCRVZgWWS89PiGT2",
  "key18": "5cMJcCtACtyt9Y9wuM4GSBC4m3wfmQpAPUqdSFcX3fTp8FMyPEan3fJAvU2VesqK7VpB19tFXA3jJvbY8Sedgw9X",
  "key19": "2PCeibDdgi3djRfBATyRbcsPD4JGCiwBnz69LwTbc7intKqMREQUsoWS5MUwwVMewSf488esj16uKGh3WWzndBZi",
  "key20": "2izRdxnmZ8zpMrx2L5FfJpk7myiEW4JjxKdbjgmDYkR5eXmKtTG2onmucY4ZG3rz46Ko1xv4Ske9JhJ4P3K5QVPj",
  "key21": "2oXaP32a69bvuYLpGG4tmHkRFmsdK38Ldfjy18GTc8mwaLGyBhRUH75zLzWECLVqfeTe9eWS81SnAPAjSaWbSYAZ",
  "key22": "4atnmgrytteSUzvQvUdFBo1ChuN4RcQi6vP9D4ZXdgWefSbhudA1SZZytNwEaSSWpzvckZJ4h7LHP2gHFxJBqiJ5",
  "key23": "3zgtPBv6px3c499tD9TfNKSynMGvHSvbNa6PzVdMRVFUz6Rfc97QjiKevagk8DpmeRQT6zxXQh8RNaYewpt6dfaZ",
  "key24": "2QTmMFHP59hx3GoCyxoN4tmReKNyaLERcYut5dLxE2yan4Nc2ewRzgcpsb9T2NsRjrywjfgcxmuRWMH7iP9XCUeT",
  "key25": "4DGS16xwVnPTBDn92AHk5qrAB6Qh7u6kgha4fTQ6kBt97Qv9x5NC2kUTz9id4bWietLcNGqyuA2oRZHwEVnLJaeX",
  "key26": "33XzQ6JWwoq9rrgsyJVBtH9i3TnSS3YoezGMDZT8tNq9a5VXebPLTocn7E21wBfpYG4Wy9Ag5z6iaW2hwSL2cAVQ",
  "key27": "3dXwfGDm1jdDGGgNigw6nXePoyrXmt2DQkrc5muLD1iMz6WYggqhwq7NgLtEBqPUVYR3muS9pvZcvPpL31sN6Kee",
  "key28": "4yHwaZVHo4Z4yrtBSBqtAAj6LGfxSLyYqS8Ck3beoeKCQtwsErY5HSGKMnVm77hGh9U5KfM28jLLGiNWV4iw3rLn",
  "key29": "4goyGH7HyXWp8nhitRKX93ukGQqjxnpDQcMXD9kEqivhSb1F1abY84ED4JKCMrusQyFC41Z6UDtBGG5ECfbpnwxS",
  "key30": "3QrntoTStupEP4ud5iR9WbG1sfFNv3W76L9UH7HrJMqLVPAbquKeMvfFP9cpQbDfK51sKvWLgQBsK33ok219pYeQ",
  "key31": "5MTLACDP9sH5hGuXY1pERDWhKTag16RDofQYpQxFhgXiXPy1QgcYVY1g38yPTF6DQGZmpBYv2Hqt9Gi227SERH8a",
  "key32": "46C6dXuWFhTpFRLz8mGgvx5c9Z2UvfVMiC3EQVEYzrebHckmVorWLDoWJXrE5Gd8UVLKAEzz12p59oq2tYUyxByz",
  "key33": "3iKkq7dMfmqHFa3kC2ZJpY2KfoJe89V6tbzFH3LHtyDCYvUemdFVK137WC5pDBoH7xADa2ToAkzNKJ56f3RcHfL9"
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
