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
    "4P5fjxiGGD6f9hXHGtUmWUWgzPhgqUUaktkZ7qVrqdcrr7yz8FvJt3zpRdRSCZZKVEXLGDzcjtEdiFyVkpy4t3a5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zS5ZsxfasZtzeX8vkDJWbYy3uPL5yhdN17FLHkbTDL4SxXcHXRSRmUzqFSc511gKuoNwJDTysd6UmW6Fy8DcfUm",
  "key1": "5qzVHUysLwsfN6jjT3dHeHjZeQDJ8G7AvyjcBFAFwRmKVRLUnXr1PSWMMf2nkcSVbNv8xmWcc4eZTpDda5iCZHkA",
  "key2": "2AFKzheP1AAH2qCU6B2Gs3Xvh466PqNmdPf9YbFyQmGW6AWN9ofY423bAV3d5srYPZtCz2tzpJM2PYVu6hwTND7u",
  "key3": "5uKyZEg2PZbS5rMtMK8MnJgGQPdXVvRuyEqFCecDZp4wUsAM6hrq1U1252tVgXCU37sestZzNMsUrkJQHsE6hgtZ",
  "key4": "oYvrBBTD6MKa62tuBdUctLNXAGp8YHtbcTjQas8EL9RkvCvfqoF2LB36mwEizFUjN6kMzmKQmdGhNLaHEtFUca9",
  "key5": "4LNCfGRNqd78JofpSZFvBCAZHaXMY5mX1UVw4zrr7spxkUyKpGoSSCSh1JSYvvDEm166KvnRoZGNPkfz8eXPX1Xq",
  "key6": "1EAA4iQVRcNVWcXhEhH4EbeF3htAbMPs5CGFGfnQ8yH1n5VNERfBeHywswBhMHBBA5JVr3hRBSMuxoETQWAyRWG",
  "key7": "3oY4EEJDogNVGZ9js3J2y9a2M1C1qGwkFrP429qwuiqndCPraXFhXAVw8zSHWkKVxsU6tvJB4tNzLGLGmZs3DJeA",
  "key8": "3gCVdueT6SQwuU9t2X3Cy4LELbqT7FgypggUQvmdmksnp6tXEjUPiQbqv15bmYAQ1v9B3Krts5B4a6kE9JnsSnFf",
  "key9": "2sXyGSoKfJHmMUF5u2hhp3bJ5SqMBLsH4cMnKbhW79qL4eYaXtwuwNZxbCqFP19qCGgss19Ua1uxCFAEWrY9mDCC",
  "key10": "55kPTBnpzMdHNGUZoLAqhUzJrwuo3KhB5UBiZ7Etitmq5Ak6ThhP7sLRUK8SRo8kA8aFrmPRR4DbWAacEZccqWDL",
  "key11": "zDvAFsYpTwhn8pEwaH1RU9AH54kYithLSESszj7KmYtxT4LG1VdSQNNpATvnfqkJ82kE69xtXAQ9KGhAxm8tDB5",
  "key12": "31LsAhTxarnk4XUSX2LTV1fxw6k7DZXxTyax67CENspgrC1e6dDKPypJZgmxUgF5NTVBEb4Dn5jgdqDMNugcuStS",
  "key13": "4gcBCi2QdtHFeCCCENwGoRL3pcMvqumGTr9GbVwpPLuX5kWpRwgzWkrrhddFxPKq8n6favyZ8N9UEbZNpHg2Xn37",
  "key14": "iUDKu51EjQ6nXM5J5KJctif1BvtvjQDpTi3SYwG1xGYbLctd6RVLY4esAWkCqhgYVDTpCzy3UkfnkowDMgnaz8j",
  "key15": "5fQhDtyEiThsDujGVWexruUfn9QiRuY4XEJoYpmg6xFzvTMtUyFnST4ZPLHWdFiZJt2noPtjHKtnSj3k5XSGPLKJ",
  "key16": "eJzNRRNyQ5FuYHMpSrmYXLhsGk47898UsrKPygpyti8YmdzQVE2VUQE5LLeAF14oHoZ8xF7n4nFtaWwXdU51c3v",
  "key17": "bcWMLocUzq1wCGAp7hiqDwys6PV47D2VRM8P9BhZWj638fngEYfauGiwNeSGzatsrfkyGuThkAiSixyCLci6Zb7",
  "key18": "5AibWLgf7xU3gpxKzuefMChesN6WmPd7YJrnffkDcedxzwxhc3q46K2737HShBRnVxVScSBa6CDhmpYYCDTtHzDF",
  "key19": "2tUfZYHLGgrnrprBA5CczaXjFLwkFEGzyV5yrz2zn1V2tLK93xP5RYZaU4vW3uYNeoKnJ8MLPYkPf16SHWk7PJJm",
  "key20": "jNsajRZRZcLVJkYrncco2R8BdxfSyhY38fA6FonL7dYjY1S8q6fzWkEiZ93f6khaCAaJB3t8z8s9LwnJ7wMu6ML",
  "key21": "5qRrSmoaNKtf9kUTENTU1P8V4SL6WR25ETzdsLveez17f77qf3oHN27QUbW5BiJ4gzVzkNDamWnYufrDM1tWGBgo",
  "key22": "3AZ2bRFuRPxT2fVyhAiT9zqmdoNZd3LsvJvgrMQk1CrKJPfu5C85KrV4Y6o4ZDhQKSaY5m95hBTA9EH6Dg7aKe9f",
  "key23": "5QJAQ2GpKy4QB4mSvyFgywWAJddjjvvbZAbm3cMxxtWJYTFQ2fi13AaC3NNaJfEpfcXpqmmyju9zHpZswoexQB72",
  "key24": "KBgXF2Sdh9xAiF86Xh4D4vAX93KtYEqXmDKdCmJtzU7iDAR31YmGgynBZj1ptxTDkCPEJ6v7bGJ5rPDmhtS6xw5",
  "key25": "59v7GdnxQpek7TGUqVcRXQ3ZnE8QMLNJD5qUXHgXsXBvwxvafQBS7j8UHJFqGYhh2zEYWmE7Fv8yfJsgmd1HrByB",
  "key26": "2kE4epXXXKJWRNwx8wVHnwLa8AkppAkQewYCdt2np45A46vwMtHedoAU4A3LefrFmSa7hHtZN4QEN5FRSPZ2iLSQ",
  "key27": "3K2Cnw1jyLH5uWS8AejCAHCV1b4TVSVpg8s8opNcMGXKr3tGezViqL6XtGG3UPFmTaGzKeooxzjXHHLJdDGRGg8G",
  "key28": "3cVszJqKQWRHfawqezvwHHJjTZdTaXcdADY4RiJ3mKBH1k4LTZm1e9Rpq3ChqSkui8EHezgQvGeoSwbBhuXhtuT2",
  "key29": "2HQwJ3SDnNjX9Y4Q8KuabKFtHnhUMCQmkeogffzvsQFLjrfT3GZhC7XAdDDnxy6Sx2cQV55YCFnyZc4mWC25Miv5",
  "key30": "5arAnEwrcNBc43zxpgHsev1jxn7G5zRHS2L6YcXKMTpikA7pAzwHiJsimSKzFPvcqhB3mQAj1WgzB4jdbpdSMx6Y",
  "key31": "2xoaezrsb1jufa8Z5e8e1BtY3VQBAMAsW1DYzRwmtnvvAiw1LBxZxLughGJ961QB74FUcUhVX47dm8tvkohrr3VU",
  "key32": "5oFdwmb6wsqV6zhxzc7gDy5cWsgjg8BGzYaR9mj3y74e1MyvVogD9bQFZEyqs2JQ8WR7fQic2gQZY4Mm3yW8yogb",
  "key33": "3JQvAenwLFjHZrUdvvGp48rLvVAcvCEN8Xntt33C6e3AnFUjpSnvKxJcauTkEs725Lpy2zC84PKQnzBmyE64sN37",
  "key34": "2AD6Nv3pN23UE5Tnb9cYsFU7KKKJ9qphMtnQQmXYeyy7UXArUmw1NcfSAmCFnkemZuK3Hej2A3G1RrGSCi7yF8dJ",
  "key35": "4UgMb6LS5JvvRq7sYZnaNLV9rgzbDf3PKSHa7RLytZDsrMAFPuRLcdsDU8QsGnoDZ2UVRdDdahrWWrUmzLPDEMNx",
  "key36": "Z1MmJ7Y8uK1EdtRt1JY8c2ifr8UV3GJXEvhmkbyAPbxn5UqYn4m95Unonm9SYRMByuUof2DjkuNbB3H17HfdGwR",
  "key37": "21x3uy2YtB1FSJSYK4roSjMNw7vB5ZMZsSRBBivxnLoadz8tbJDB3CzrhkhXF8mrP4G7zXrKzpXywd9Kfu5QELoD",
  "key38": "5UcqYfiZ73wMfyEUYjUSWV4g2M8g4csQEysQKjat875Ux8qfPWiHMmkqeTAsH5pvobYo3zQWcYHQQyL83pZ62ADg",
  "key39": "5mHVMasAq7TEqrjfdYYHzYisuaWhqMAXdBV4J37pX8w7xnpnTSovBB2rpppkVppYB3UUk5oqC59GLeCzvqotDvwZ",
  "key40": "xnDJbx2c56v6Fvm8d4pFSLVEVDrN8cNv2w8uoMhgGGGT6FG5yEPK7JWXNt7jQ89Unbe2cxRF6Ur6hSkmTJWLJAP",
  "key41": "5QDJdHqLm9EDYXJpxchRgifqi8D54fMiHR7GMroxmPsKvtP98T9t4LfRrjejzXr9jdxgfoviHC4xxDYkvjgnJjn2",
  "key42": "5ZJSm2MA68UscrBcXucBLBDZbebFLrYg8FZzg9nCL9CGZa7NV8ZbWHBP6fLSpXutesUA3PrSG8yfp9e6TYgkXxH8",
  "key43": "3tkU127JqBRm88UNymgBVuF8Dt8Y2q9hoZ4WHgxNZHSmVoYDFmvu7YNS7Z6fryJyGvDTa23BCrDTGrk14tKSsrg9"
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
