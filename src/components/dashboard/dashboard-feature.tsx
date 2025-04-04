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
    "2nUTNmQEHjYdoVm2uX2iZEFuFBeDW9XuWdXW2dEoKKWQ9QEHrgFVgNbHX953cMoaijX2vSTaCzptR7aL74q7pSrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24rEheMBrxsqddiG8k5AUCD1MZt2HYsEGBbsNUBpogBvmjT3dKQCFVpaRiXMimVfPv4F7FYgLQvFMRwQFX71j8Qb",
  "key1": "4zv5jBa6osC3p5YPPdyhEg3g3wqp8YpzUsDj3tySYdF3ysiPQLTX8GPkdCWmraWWewJCUHsJhMrid6oAPJQ6e8i4",
  "key2": "3QFEZijhDkQd956BujNRsxaFEcNtTXRjjiDpHYYet7WBhzeRqJ7xmEUtD2vmgB16VPsfHrFahnFVvKP8x2wxaivm",
  "key3": "4XQPTM3CKbuTRNSbDsqRaeg8P9RSrkXGgaRwgi7tapVL2Aw1bpcWXvSqmXiMHwiDcCTMrcvDmdEeD1DuahhbFrvC",
  "key4": "Vr9ety8iYpnz3fB8NEXMEHkz6gMJ9vmyB9Y6nfuAaJebkHG9JF97ToyFfb38oRewvxm6Dus3RN6LjGL3kBcuqay",
  "key5": "47n45KUJK1HBgff8PciEGUDUZAL83nw1C6punLXa17Avc9YciYzuwhgAKm3xVCZE5QofGQNU6Zgv2nnkfYuEKXpU",
  "key6": "3mxuwRtYqpjLmLzMSz3q3dAapFxTuwAYFtYg1Ko67TScfaoFNUsk4buKRS1HQauDqvkDdMQKgSrZQNik46qcqvxY",
  "key7": "3PTr26pNgRpEjxQ8Pi1avcXNHMsi2bAHAS2hqYyKMWF4zpmJ4t5ro1YQ1fH5NbXud1hLNPRZ8PziLCR7MwTu2zyk",
  "key8": "YeBXXzaqZEL2w3h2RP4XSN8F6iL83JocHRS3PtSMvmfcLe3ETe2xCKuoFwHVgzyUShP4N7AGHbuUk6wZ41CmYx7",
  "key9": "4eppEmxcfNP1fyKhhn3y2fAc7L2UuyGCJZzkHJxCCoT6LoygGcVcx91EMAMiDJi6P572DgQr31gHzMbMAP4iwAr5",
  "key10": "4XsRx9L1HrWiEtZRnKnf3wDhBYiaZQrSKny6KNkoUSLMYuMixNoauy6cboJG85D5hvUHwkrGVrpCqUo4LCav5py7",
  "key11": "Q62htkuAhHnZ8ZDHfzU2Tr9ipGjV6mVVrPNxJw9Qj1Cd1pi8GbCZVaGUQQqS3nK4KcBf58aF57qA8MnUPM64X2X",
  "key12": "2yuHA7rwZY6mpmZPZKxjoybZXzgJBtQhN6nPzbtbH6EL7HVooHCxAEfPP1wqsobSKV2tYikNxay77hAYQbdY5qZX",
  "key13": "4jpgWUFyaqk35AfkQv6bdfr71KsxzvX3ZN8czAnzLq2WbnFHLqh4mnHEUZ7J7e2PvazRQD1kVmtyGkY9U9y58XM7",
  "key14": "dYRasJhSqUqZdmLu2PjcxTK6CaVTvTdt6XmZ1Pi81nyN9dZNJag6YSZoGZCX9dAQGx18TVrQz5CpaEVTendfNs1",
  "key15": "3QZ9HwLLXRC34KG628WiqzZ4LzbgDN8sUFrGyDiN8BP7yE9PQS1TwoYDbxcuKh6uhMSSd6fPMGAhgCLvTZ88yUBy",
  "key16": "4cixUREWTyqE4MSV2o7XXtJ7wDTrysBfr6wrkXEPGVSLFtXQpK517KAUD7sMfB2u5YXFwAnwsja1MFmJ1kTVBy7C",
  "key17": "4E1mhzJspUW4Z3PymPs44DNWtccpvcaMnYzM6J8Re3BxmzKW1BBoQDVErhDSiZraseMRppKvPfYP5NTcLUEG5rcH",
  "key18": "2krhHvN9YFchu3gZ1ewGWyaQArZwnkhQXk7xsCs31S3jTMMZoVLtToqXV2FqdHfnki7j2Y21EwgP2Vq5127NodVJ",
  "key19": "4stuatqJ5t2Tas3ir4BDvsP1Qm6ZVVV1zMaQ4FLxundfzs8864pVUgiRDEtsruPLhNfYWc8r7A8rXeBXb3LW3NiL",
  "key20": "2K9mokD9rkWD3sDEi1zQvXH9GoxuLi5tWn8rRjcJfFcRuQMUzXFukAFtihJSokhVpgKeK4dihcfsG7rcb7JvkmsE",
  "key21": "2wXkq2m2YrpbxvAQ56S88m5WNMwZopzaNnNor4kn1urNLoUtcYBhoqdcpEHkDDR15Qgbjj32oMVE4FUTbpWJHVJ7",
  "key22": "5BzkdW7HMFbf1zSSzeDxzBBaGt2frtok1XNAJyYyQD6KjAXUyVES6WGwqWGwcRDAYLpy58gQKP2heN6upBcyUMn2",
  "key23": "5HQ8UzPSCjgHkvYTXckpZJ44wkLQBvQZeEDfAqPa3TWGFbbk1Kkx5E8YmEeXWCt6A21ZtYS5sxSwwLvxmkaKL4qH",
  "key24": "5W2D7LmmTCrzJeCABjbd6VYo16wgY8x57kw1Tm3jBhyenGjUhB6W9PdKStbyVjk2kqyvtHNDSsqnNiKWjYGRdDhQ",
  "key25": "5xydRhJ5KkreSaZcmBr5iFat6tyKrwAs7GoE6S4sXb8FrjMFggPjbBmdZaYGj2ZeH6HEpWWwySAyMhnHuCE4R1Tr",
  "key26": "3ijrq9PjUqMzn3cCNZ74xKLeZ7MtsBD4UwTfKD6oDUCJU16XbF5VdBvrP5KcE4zQDKQVuN5KcYTJPwbET7Zc7vgs",
  "key27": "2ZC1Qeoqw4Wz6paA9BbCQc33M962bVoMcY9fNkN5qHwagxFJWYDxxHJnH9iJEcwsNH9Xu161ifxhJrDay6uP5aFZ",
  "key28": "ABaqqZoaSkjB6LWEM91FRkRvKuitBbcKqVaftWA2JibnLrmTS5kGg3QzZr6xhA5SpK99ZyoDQgcxoF636VjyXhU",
  "key29": "3fWaMKLBb33ercGToh9WyTyVwp772uxaFts4B2R9Lsk9g3MPQaaHrrqV7hzN8arZYVBL9PKQzsv3kHdfvzpfMNfK",
  "key30": "2nYHpfbfJevPCmpcv3Br1cUDbWGc4r3gnWPLNHUhN6ETMqwDpvvHKZaDcr7zCxPaZkZ518HxgsFbb8ogBWn6evAL",
  "key31": "5jo9nmUNmYTEVaKTE9Sub9vLxhkQ3BBykyFveQHR9rAedmkjbkc2eB1VTk2ScL13UX16MuEYaDyjaVh3TtrFkdWx",
  "key32": "4bixF8qFUMbmkfRZH3yydNJFXdmAW8iZtEpieQxFqxvdYacQ1GkjLCA7XuWzN3DvvKEFxaiVbJTyPrFu6MYP165N",
  "key33": "5j6fsY1ine7K7vLoarr9RWo2eHucBFM6z6SVf2bdUPt2DZCUaumDUmKpwzcKJawYj8tfCjUfsvojUyvwurP3N2rP",
  "key34": "upySveguGNNRGJyvxnw81fFiQGY9UmDEdLzdxdGLiAWc6bN8QnAEohQataoHbAuXe3ibKSbewpVNdaF4cmWggy9",
  "key35": "3EVAKMmaXJKzNRCQEKJoC7UjsHZtwiPZisAbJ4S6Ub5gvr5KYTz6kyLL4zXYSHL3LGsJSd4q4KYUtue1SMHz6GmK",
  "key36": "2yiv4zUyV5YfHYjRf8knRXeVPcV49SbXesqFs5u41NQcLqXa4PsheTkfSC4AUWsbZULPyph81wspygVb74Wg8G51",
  "key37": "42eBu6AtGzqvzncFanyAst1oMJ6hTJbonPfnPw3LwmbdAZGZdswu97nFhovE3p8nBfVCfoGstExtMJC4voh32z4U",
  "key38": "25WD7amSk7MJp5FNJp7TvuKHCfLdVEYAZyfWXBw2RhttHnXLjh1pNNvKKGwus4Cwbt8SkpZz6kpRiKskXbsUy1Ad",
  "key39": "3H7PQcZVpKgyPev8DKJkNGDj7d9i8hioLJVpMSFxnxHCmPpzbnWmg72j4ApstXvsn8Gn39wyWZRWUikWaDT9TWsC",
  "key40": "4kthonC3129hGCYgteu5mMA7HWzdMzAk3eUNo9bmgRd3H2C21stFVhXMZv8um5xRKBZgqsk7AbcsKAyaTbUhBR4p",
  "key41": "f3RRTLJsuchzz991UghUwPeLSzoLPhmy47aVjphW26qXxWfe3QKeRYKoZMpcaR71MDmh9qznDzeiJ3fGwdced4X",
  "key42": "23wjHKciR53pmmxjDJ2r8wgyfwbTLe4Yvq9LyFp2AzeKSeoKJFe9cgLz5Xw8CUVHpUafsnxSwkLyP9zGpKoGQiDW",
  "key43": "pAJUcDt1nYihCDHMGBVZaXKt2BZc6TXPbH7gU7Y4HfTZ5pjxndptNXXdAXnuadqFA8tTSfyZwvuggQYyLJy7Dh5",
  "key44": "4g7pFdVKB81x1xm76ciJvm5KyjWEwH1BefWnXo6tnRfpxST9xcnST5e6L86VCqmMpN7RSZSeaCwjzHYyrjBetEh1",
  "key45": "QbsyxeYwnCJwGnQEiie4j455RYJXbgM4AB34PeX49wNpxVr5bPRPyauk3FH1E6QLsuq25wiv1jDDTVLKQFNjo5U",
  "key46": "3R5rZ2La3wmufFCD1tMtwcC7WY6iPcrGEMtFzrxKrrUQLuP9B9XKgEejvGCVBxztBxEbtRo6YbgiB7zRzobXrBJK",
  "key47": "2X8U66Gd9Ekw7wkFbn9nx93q8UGxRveiZi4NSei6KfGgHeA4BPCSWtrrrcUD79ZLymX6Y325YNJrG4EjLf72f1cc"
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
