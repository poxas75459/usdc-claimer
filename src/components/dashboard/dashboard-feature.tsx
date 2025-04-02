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
    "Xv9n7tf1H6sZrnTRq3rFdKFuCcuRWBy5BoCDJh85Bnuqtoh7oetndZuHsiXP13zEsNWPGqRD1mExArNbhfvexJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CEuStDRmzrrJE5tmboqq1MzCxgBjq1oLmVorvsdnKxZJBtWLnxfJuPEKG26cuzRfrCfAPXvg8sBUNBjzhERt2A",
  "key1": "36CUEsWkymrPhTWBaypUToBzK3fd7x8imbQQBbKmiN9b1rhxxk3SiFJ5SV4yVESX2cc99H2hGUWku7q2Em3aFTAt",
  "key2": "XTiBF49y28ou6mRwW5SWv4mCUMCCY4rN3GtVdoWSGsQ4GhiQYZ7wKaVi3azCXqCCb4vSAP4puFBNQYTLgBohHwV",
  "key3": "3oA9GbHCUtMqxavx6hLhcsCpcayayrPEAi8K1rkM67dmqCD43myCzYBAKge9cSXN4XW1LEdv8YTAZVZPxBaRqVkk",
  "key4": "3KKE2TmwFWQ18im72YVqougopxWsLCvcRgfQCUAxKnJ4dA5TFeRPVakJeigXNwZTgHhgYMcbkhhoKNfBiBYr1JPH",
  "key5": "2VAycxojMEqiAMyePp9r8eFRcXvdemMo73hvdrwa3jk7AeP2ys3t68dr9xavWyzU4EPmRyPrrHkQVPHgeHT1cqD6",
  "key6": "3u8iEvZPEiGasiioBLwSAZmxY71pVLHMLGmRKCQSWnFS7T7UsfDpHLEcxa4AAbgzC9VsV4FNTLJNte4y43Nz1A45",
  "key7": "4QMQtLVuoZC9sz5yqPdH3Ssoiq42XbwcogNAvazcZsMWZAM2MS36nzwyWgd6s6iZjS4qZMEtUMBNgVmNGfryF946",
  "key8": "3C9B5bNoKhtUE4W6di7xUdCt2wXjgykXhqXaUNvjDpfkocRabjXZdFDpWGmmu4ZY5bWPUwZeuLGidZvZXkysAqxz",
  "key9": "42Xt9KMHmYS1wrRgJGeCXqWgAwztnwHjS14y5DzAiEdYff1ysHozm2BFoFc7deFTPtXbS2g6ciVTbtJAU7h1XRko",
  "key10": "67Ux9Q5yoqb69XYZobmumDwYcfjvChbCfEEQXQ2VXLw4aF2tdW66u6xQZPJQXC2jcZVh2hBQhnWYKPgfGqCNjreG",
  "key11": "2ZgRUY5f1mJxWXRUKaGkCaKmuxbTApQMnHTe55hVjS9qwm6ZbuBA6GsN5gtYuhKdfsubmkdG8z7iEaufswJu4ahJ",
  "key12": "48jCXLQuZX66374TjThAVziALiCFNLEcFgSHwXsvMACP7YauSiaAyZBeFXonK22RXeVoWsAKym7N4dz2pNtXpCVB",
  "key13": "P7ebnGoxAQkxapt6pQnkBMj2G8Jc7dXdmADxyMFonfxPS3K3QqbsEo6Yws6uGJafdEivYJXPevzCBdLKwWbowq3",
  "key14": "4HRgxxNetZokYcL7WP4Uh7i7Bro4EhpagKxfXdb7hkH6uvn2uuwKxbtd4EuBxu63yb37NKeu65P2fnbDuU34mCaW",
  "key15": "5y2zccw6CgEPyGgAXJKsXsVkhjVoGiPnkw2igaYoYzWzra4JUAZ5KybzQzoJBL9SH9f8spiUEeQ43FJ26sQ22JyU",
  "key16": "2qfkormzMvC4dabceP4MJ2kJwVssqHV3us3hV2siAWMU5kQ2eK3nr5Ut7uoTHjMq9S74uFTNVpaqggEbkU8GyeYw",
  "key17": "5U7PTneCfxmp5Wa893gaaKhaNxfNb5NapQv4BbcA82rgJxKTVoihrxfZpupBQ1zGAdWqLzNxQEfpFpN4nyKgHHLM",
  "key18": "55f1vWF947AM1YWaTBhJCYUgMWKhgya6vo3iq3KUeC6wL6sf5a9wJicjdFGKc1x8euy3cfetqBkVXU3N6RBuTRxm",
  "key19": "2bzETGnqY97eB8xuKfL2RRPAmrjSPvxtjrkiC14wwtpaDEnD8QT5mkcNZcoy8yaQLD4HPReWuWkT8HpMKfbidzjn",
  "key20": "22X2vw6enSPP5P8GaZMvPhPpm9t2vVh6UXzHUoeHo2AHRgj7RXFQJN4mtjUJUsj92mGZuYKH8iqyDfQUE3EyZW1M",
  "key21": "4kfeLSka7s42dFiSaR4474sMpf7y4NqLzowr3Zk2PbWi96Qfe8ddVhnipCAX2k7vXsKdjMBaBDHbFETaCVpCbpEh",
  "key22": "4CeSMM9s8qt8Aq3k2ubne9UBDuGvhR5Vy8zwghCH3ZL3ftmn6BdLaucuvRBmZr2KYoNZ1VMa5sj634WoQPLdmmmp",
  "key23": "4rJW2FaKpty3MzPeFoVZf7pYXjBgzW8EXSxtmAABYoWYTsZZGNNbZYnJ4w8FCKNCjibrjWMbnTK7soYwhgSGEFGj",
  "key24": "3h1LdQV3eLSUEoYRxhXXFQJZgUp5Z6tuDvs6aGrhVYm4FoVGwe7ZQrkUHja75AnSsgHLdXpDJmMw85hHBH2mAf9j",
  "key25": "4Fcf3JDbACiYe7MKTFfoT75Zs5m4CLQXHbjM2xckcu7iu5g8eHqUHb3dxJRhrtwUTUhv166zydUTyTkarvJeX9Jz",
  "key26": "3YUXEPF8VjAqR2xpqe8hbZ6Gi5A9qTbyQQff6E1r7fRfMAYK2SuztSw564ocAmCDGqMFMrW95wfuMXruDo4AtPQ9",
  "key27": "4uQJQGXySrdF4itGDK3zbFbqpJhAm5N8GEHNBh3mKgAJYYP4Dmt68tAwe3NHWv86wdzPDsvbKgsiYMse2136bqxE",
  "key28": "5ebqVmMgPdMqLN5R3tG6gAU9DS8quU6RhSQpCg7EKctRgckhB6hFLaf6Kk7tNPdgEiz7Gyk1NRyxSgPWPPcgWygW",
  "key29": "2RtaDYKi332tJjS3ArmdP3z9PSxK7LL2nhvohKMSWPFb38PCm7e6aU3W5WfzapYVdxUjtK5uwhmi7C1aGHqMm5W4",
  "key30": "4DGWEXvkv4RBaoppEpvc5ULQunbhUaoPKWG1nPkCs4fsFvcjBi8HQxvi2zLGfAmpgYfKsJWuJ78NJkcePo7gCXMS",
  "key31": "3W8W165MtZq6L5tt92sp24CeUWFMgJUgpmvH9J8NSvHJvCRWBHUnSKy7NjcAo8QL5HwhmQ51B9nSPXV55nYoibAi",
  "key32": "5NbSrSPTCj9m7aDXMchJz4oP8dLWZ4zXiYwXws6guspTj36Ta8Sw7FkMKuctK81WfrQ6ep2frPUwCzqK8aKTbr7W",
  "key33": "2d9EhtbcDJjtq7Zz95LWD9x5n7zT86TriMjeHqerXDz7VXoZJxPmDx1ZJNofLo8sy3SpipK4z54b8zkubCk1AwiG",
  "key34": "4NmYFtXFnavy5KBFB3N2Ak8egskeE1WfbeBgNw71BonK1RG8ekeW3YYLCugy6c431FgciK85Vyt6wBeC9VFGRt7t",
  "key35": "4zq52iu3JYpzDbu2jxAcZrEzKb7i1afk75UorZCssnp2x2ewRUi7owSmrMDjfkm1Xebd3ebaG5Tsw7nSPEBiZkNu",
  "key36": "YGX4mKENpTJkDtSU8bNSdsj69ndkxpTreYFASJx8PLnHzrd1nU3XWvrsGBCWKJmsXTcsPA5AWN1buDtaU8esosm",
  "key37": "3di2exgT7e8YKLg43RaVqTDPELcu2oD5QdcdF3LbezTMxktuStmj8Uk4pbSRe7D1qxgbB93xKbyN6v75n3iQCdQu",
  "key38": "4QJjuPs7JiXyvmgBjQpC39sErd44fbZ6LhCKaZBLj1QxNrWDYHmm4zDkAcbsgnBzgwQk1hB4xpYvt3jZMfMTAuCy",
  "key39": "3GospmygBdffaaEPwa3u5G2sepWNX7VaFcwVgA5qg4i54pUVKaGryMHKZSoSjCu3mTdiWhERShjxigdFN85x27j7",
  "key40": "2bfhrZf7BVVTWsSBnfFn1yMBW9AC3oTE9iPyJR27AixESQE8pBxhCkg7wFDJ7oWFX2xqqt78G4e5cco357BC6VYP",
  "key41": "2Gu6SFH6k65wSLQvujFLBskcusWLM4GtCPRuSf7McRe4ZxRiXucEjPuokb7KtHjh7P9wK32YC6gZyxhE7Yv3V44w",
  "key42": "4MAq1vLNoruQDyo3SxMMY8M5Km3N9CHAs7kFNeXiR68bwcQphVwWHhYaiAGur2HofvqXUWhNUs8xnzBEj9JWZ3U1",
  "key43": "2TpBfWQncnWwSCvPJBudLyGnyXpxqEyhLizvGpP51kE3s1Argi6DoZJjXHp1N7evs1pADdoCzwboieCYxAdMmKvb",
  "key44": "5w7MhhTm8L9dhRPdmUdSvFQBcXW6kTVbdN13UWjRZY7CRk7dieVZ66EaTKQDrEqZAG95Da9zy57MFZnohiPnoHHy"
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
