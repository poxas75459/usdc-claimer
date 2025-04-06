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
    "bkVLM6Er2qBRLeyRV1DYsTnPjRFbUgrvxTpDXsxQ45T4ikyu6oWzP1UgZ6rVASVdDF2hfMQguxL9KZZRiqaRvps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gUXvaSWngY1uuvsRVr2PQrN9FVKwPMnGgFapzF1ULrPUQChk93yoUxFogyo34jWpWJFj1X4NbqyxVegbMXL1eRf",
  "key1": "2u3B2ApMmFMs9dcw2HW5rSmWQ1eeeMN2jSW15naSNtKv35fxAkUuSKQFCEKx8dKHZ3ud652t7FsWqr2HhvqFUsjh",
  "key2": "5WUqX5psfg4uEYfKftib6UaaUzURmncXRjPLPkaNpJ2qHZZb1uZtn4kAfVwAzw7ijW1wysW9CXbdpVygGQ9gLBtr",
  "key3": "4er8U3b2Qc9ndhjX25bcQYX3ZvjYwG8FWBEDSCu1p2ZruM5MHKk8hoTSpb31g3HVcLyPNqWmzeEztNvn7AzZ382L",
  "key4": "3TGjkdHZTjzxjNSRZhqLkt2htB27u4GWcGvTc9kdG561CTahpM6FXeNsHqWF7rGjM8Mufsh6cFWeYDjq5feyHB8x",
  "key5": "cuv3sGWLSkMSxnhKWxZoBuQ9bh9z4mwJZJDqyAv94UNaGQJUmu7nbBcfGEb6QDnRVmQbFFoz2cVZQuuwCQtiPVL",
  "key6": "5H9MMao2QrmfmoP4Gfp8X8a6AdQEEAAati5wwaKPP7XxZCBqskEKTQvJQPsNioUbcVhxzFWsDDCKUS9oaLrHECkR",
  "key7": "ktRxb4AgbFZpmdESrMUmFwNhryJ89VfVsdbKMCVAU3xGUkwxniYqjsmHY6U6cmRaFFRGcZ7bRKH5Qx7t997ejAG",
  "key8": "U6TUnUNXNySRh55t1pYZkWs4pPeuSz45DjsYYKujbtxUEmHcrxn1F7wtxLh6Uy6vkgoEmsKdXgp3PxnxYJa3U5n",
  "key9": "5smtKuaqz8HqHUDdCnh5gsHCEWp47aNEGoG1oV3F8N7DHk1yFbGFJamuciNQWP5TgtqmZWMpkG1Vyc9qADzpAz2K",
  "key10": "27CWs3HVtCgP3JJ1ANPYor39MDsY6pTA41wcAikgeVbxNTKQDnm2VnNuFTCMYH6sZj1E6GpZgZrscQqWVDamhG9G",
  "key11": "3uEjkXcJtKGDoWYzihdT3ycfgVW2ra96QVbEmeChoqDokCUfDJJhkLe5Wi3Q9STFXsVdq4BidwgCRyBSbJfNr8dq",
  "key12": "565dEFVV42Qs34Be3iKY7sn1q4MbK51M8g9uf3Z6woMXS83epMGeTgT6oc1HNKbdwnEzHNffST2f3C7aYTGZcJyy",
  "key13": "vqMo1j7qAyjjDyXACK9bgTbSTk9tS5mGJYiTMbWR6hzppeyaa9RGvrkkbhZJpqHEsd1kpwxvVEAjwp3KsSe4dpa",
  "key14": "DrzqVJjLjbS8dXUW3uG86jgWk7wuNGQjXTGx5rbr1K2W7TTJaMuGGrWL2bx5Zan73cZDHPPU3GmjPH9nQ5foRnb",
  "key15": "2bjWuuduScpByHaFvYAd48MYnX5EYKVkhz7G6Vz3mn5hbGhQMTzgfQ982S2pxGPGgcEUZLBsXdNDCNYdPe9aJwra",
  "key16": "5LDGZWsUi8JffKSUDWajoxWYq1oUFXbGP7aDvdMP4V4CFCucm85Uq38NLrzfL5QkCCj268XEWVeATVQqmERbz7q3",
  "key17": "5PFonjSCLAFH65MXKM9HkwboEcFnurd3NvkC1DPkwWWN5hdjtpp98anoasrXVBXVkQEjEL4cHNf71rX7weoVtpds",
  "key18": "4jbfByJtAjHdwxaGEUsyuHJbWmrEXbqZpeZzY4XyN9JNbcAa3d6cBGxvrQAT5Z91WHqLBXC3qLDogUf1v1qR6z5R",
  "key19": "29iED2T7rvKeue76dMLKGLU9XQe9ZE12PWfPoHmfXcfHLqNF4Erbo3cPc6i6vDKiKsRzacXvojEPqYbyq91Asjyq",
  "key20": "2YWQJmigN1DXKWZW9VhnjnxUSrHsa7h3bXg1atLBWQJ4ej1xGoCobVQMqzkKNagSqsnRYt11vk7sY34ZqPyWy8Bm",
  "key21": "5Gr2Zd9RPBBBGwgTSgcRJ4GhHsLJCVAK7bLsYqUEmXjhJUh6eJ7rP4Hmru7ndEYKeWrTuoniAL3natiwRRjGFJkR",
  "key22": "Pj3Dz7CbZ2oXzXYba63RVvhHucbutEFzyccCR3bHSgbBXgBU34ZSeKivxvES8LMZ2boCRhW1zcDaYAYc57mDy7A",
  "key23": "2nUusxZ4f5jjpyuPfzVkX1Ci8fWDpyZP1tY31HmiTEqLfMtw2yYATN4AtFhJnijtFufvyK62uDH1AVB4YDfpmNWW",
  "key24": "5rGvAk85jHbfA2JT9gLLtSmhDKGgGnPkCwxskqaa88BX5BBh9dSmjY4K4ciNYdTiBH7GKMYyB2yoib9gnnyCJMGb",
  "key25": "4jnPSRPqKkWQyc2vJ9A2K7ftKN5kMtrHs4A4ahKYLEpUbofMiBgdxNHcxEHSNfBcepFMMoE1d5X9VoUCuBgDpqr7",
  "key26": "V6fqZnAVAqmN4EoWjH2PBbpUw6bdtNeTmBg2asCmgDnQQWWhemwA1CaUSRtDsUZjmZLYWqJu8xFvs3whSJHNn2W",
  "key27": "5dS8e1gzB3vQxyAiYTG5Vhdq43YkeJBdbXbYc9y3rvkSSJ8sw19kY11xBw3BFThkJ8PM6KEQEyt6f73YqreYuoET",
  "key28": "2N8yCPisodQGRGJDaZ31HL8tKoQN22Dtd7oLsVheWXM3onAmvGTqseUSkEbPs5iYvabSvQ7CVFgKzaxNqYY5YFYS",
  "key29": "oc7rofo2ZEAZ1cQD2zhNVAU13wgQDN7g7Pwfc7Bc2ZuXbrFEVMqBDbxPqQvdBpGhf86XvpQmsBimcNYEKFKDzev",
  "key30": "rd2pPtpguf2jRM9NpwCBsjc4h6id4enh9yYMEsetkLVxxmF8m4ysKxHSwwuRRwnuq4UteR1NPx9Wnu28GTeU66u",
  "key31": "9rn599mqAvD2LQwXdgK1RRZASQ94tUjauS7NPtwwW3A2MKUGBzaNHLXJCNB2G7GA3bSsnN3fG7gh73onjVtaLiT",
  "key32": "2Lo9S6nYVan8EP3LCFXBKB5vJ9RdpuUVhS71uXbg6jWBJHuSHbYyNHRgQn5Md5CxcHK4RzkxCH6WLESZrLCbSEuU",
  "key33": "3FRPPc3hXsUaMt13z6UFLiiaTgVnQKMSSeHaHnM5Wk3z3sT94AFMnCacyh7Ft2HR9awP2iQTNyq5kSrT2jZ4iNte",
  "key34": "2MJuity4FdpTBVfKqVqkEtHhMZx55ihBf9XyhqesLXuFwNsYfRfP2vLDWkMv4ZPbzB96p5QCETNzZ9uq1xVbd836",
  "key35": "2uVPTJwUkuAcFZTDNh6YNKkFVSKhrMVC8wEAjzsuDJh5ok9aMb6rJcKKLgu8SFxMC26SfXkDjkebJAoWgsHhSYDw",
  "key36": "2Lor2gyrSd2z7hEMdPDfaXz4puj3gHTJzqaQeH4rYMZBaaX6YEFrMw8ZbZiDi8xGzLZgUMc6yi7k8DCdaus1ggoX",
  "key37": "4XCGGbuLJsr5ix2uPi3a9L6Y8TZRjzR4f26obrdRXnLsNeNJyXg6Btj92e6XfuvquWSaZ3diBCyy9JpzhBDKtKTM",
  "key38": "3XkiFpeZuLyzRd9YJxSsUgEWG9bucbshWuUoEoCx4cwHomCTs5uNLzCPRUq7uswQY8Z5Xqf9EZ485YwfwJJX9Ur3",
  "key39": "KY2cFysFbgc38bL8MhqxGYnDLk8zMDbY1hVePeWXZ7YM6huoegE4WwGGPy8XXEbyLPcFRXJGE4UnMRNtiGQvHsX",
  "key40": "5WaNTv7RTY2AGeqp4rgXdTPqkbAAH4ePk8g974DiRu7qUnpkPwJyxKfXepsEyEytkd5PCN6T8xxsBp3eFqdmy5iu",
  "key41": "5bg7hiRRNzbmbUwdxdGTJ1EX9VEWiV9iaQvTGucxnbKwEGurXBMomi2iGgNsm2b8RuKFwngreabZgKtDtTriZ7ia",
  "key42": "3PmsqY6GqCHUNBA2oEeBJknmfzoqYNxN5nmFwgjtHXAAjtdbGfRPuGvHTRXWqwSzmpSEAuZs68icdoDm7DyJ3LuH"
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
