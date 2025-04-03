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
    "2ouBnLi34CVHdmLcoc2aH81M6J1Bdyy1ujBLYYTxhrCf7R4QfwPgH3uHwNVz2uKEsgJRrc54Zp4STJzxaJtfMUtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HmsASfiFsh1xiqEgmhVj7dMFvAJdGdHzZDuagK9YEundn8SGYb1zzJa3tqZdrUAiHerE59N9iXBxLERFDUmo4wz",
  "key1": "3AkGS7k1vHD6976TL2mEBLNdXNeTzQ9iPGZDtajb2ssRrEuEjnWKPJNUg5va17zCiENnMnkwDKzoK2EPk6anyYv2",
  "key2": "319Gjncks22tA9hzcmYz8LAEodtypRwmzUBgdnXB36j8ihsyZCG6uMxbAbvcUvNx4RpGwsqUitvnDRTXpqW99KBL",
  "key3": "3Xke3emKf44xZNzwk2Bx2gB8CyEQ2harjhGXziWfLa5xEZdz7g2eBcpAvMrTUCtLCKnDwcEVXQ5sLsTzixK3uV5N",
  "key4": "3xpb1Zjwwe6BuEomKnqRLFPvs5FYp6PR5REXsFzUvFCT5xsi8etb8hYBaLizqF45iVp4mrSbLBPDK56ncNU5ANA8",
  "key5": "3kMorPsBbLSAvke17nRyHMWFFRjZspDvbX7KbW1QMv3j7mZjPUaPYrPPNqETtBF8hVLdSdKFB5L5juQuTtaLvbyN",
  "key6": "3REPFjp2LvFTfneamtkMJs4f8btccz3p4yALAgbbZLjtQtajcmSvP6mtVfsygzcpd7PrxWQuvztLCvJ8Cnhi9yyu",
  "key7": "3w9cHZu38wKi1FPLVU5geAaZUXfjGAdpCQJGiy6CogBPqS4Jeh2qUCJQnMvvs221MvFeuseSLQWrw4anxqDW9U67",
  "key8": "uJsqw13WjQxFBavRYzhaQ83bL3uXNQTCY3XsEeqc3vBtTAmsuCVRBfTenfenDGzrjm3a9MwygeyNVjgB1DZWcpt",
  "key9": "22mWWF7SzjXvQ1vV5XvTMMhesYKrU5LnF434MGNxsdUb9amjoQFWtMMzzkNJjU9pZmNim4ZjXqFVuVLYzGyFe3Za",
  "key10": "aYaXGkHTERdV9eJQ5N2vWDL1Mj9iTMRSW7RmNysQuWDGimnTgyDTqBJQEjbNADDgtCA9LmU2VCX1YcxWbVjAGkx",
  "key11": "2UNTci3zmMj1xiBY1d9cGkxryapau79bg5Jr2kakpPkX6yzxwe6SZXm9eEzD1iJvv9yr9p3BbWiWRW3ndpJqbG2p",
  "key12": "4MHtRLLSqzBZq6e5AvPgTJ7n6fPeRNyj4gRJLcUm6dVb5EiuTRbSnTyhSGCXWP9E5Yru6ibY3v1v5DS12pVMT6Gr",
  "key13": "28tUXXRwNdGWJvDy7oNSTvsgQTkFc3YPEr4kYc45atD9GmnfS8fzFkcMVjiikzmpVQsSw9EtuV3zXp6KQwcZMhQN",
  "key14": "44KJxctrPnroqc4d5wRHeCet3SRR91qfMzDeaqcqWwUXSwgCK3rF3NytwKtpptenHFF8WZxRv3ACBEqfr9KmRgFJ",
  "key15": "2KACY6Z4WFpVciQstZ8e6Tn6tpAgZ41GnCZuiNL1asi1xJkvBC7Zduxr635YuwMLmdFrn3VRgSRxyDUgSM8gCnnY",
  "key16": "LRzStdrCJd7HxNGxvEFejGMkS2pDCbjmjUAHTkhWb8WWYsmV5uNCHtCGKSJR6AYEfKzarBT7HtuYEyim4sJnXb6",
  "key17": "2sKZAyuBGTNXpKXCvn8NhSUyaW64gwHwguZX7R5sXq8gPyCSknKZU2iEYMtQdJakQfzoLL8xxjepUpe2tiHatBfp",
  "key18": "QkGaNdbq673Kn6jZ3YncW7dq2X7hzpLKQLmiEiab7nLAcatY76w5Mz1Q99YbH5k1YLin2DiBEieoaK2stCH73aK",
  "key19": "5TjsWUttdA5Jp65249VTCLjanfibHM8HbcKy8x9wMfRUm7pXYTQm1ZEL5eaFUc93j93nKb7KR6VNav2V7GENuQeC",
  "key20": "5yZ3SxUfA2xbmCDziyj9tEWUS8Sjb3EATnWvN9cfKcA4FS3BFbYHEqL7DM6SSsXko1QWmXeDduYQj5JfQk746onZ",
  "key21": "2SkzNhScxqtMT1gWtV78U5893xxkMfFGqdXmhdcat6qDToBsQkgBu3XqNor83596BSg77vtiSK88bSDfxwk5zni7",
  "key22": "4qKJ1dURi18jKJZQ37KKvcxj71HGtw7EGFHvJY2TFxhbKCegBv3y6RoiptZy1LWY58xLEXW5braGoCtdFyFHmuXk",
  "key23": "Htuqr3tAazRUsz58aEfr9Hdoh24W69aYqwWhwZgvSKF362npw4kX3JjcKSzyqMvqfhRVXoqYPL6RHPjQ7R1Da82",
  "key24": "4nt1A992pwreW9megcQcGqAzwxKrnBRyWPteXw1mNzXHCjSBHGiTWQ9kdfaDRBxHFA1HBNJxNRpbPuBjLg1ZZytD",
  "key25": "59hhZNz6KcXLsWtvyokMYuNDVeP19sPp1giAs49xSD1TkhKP4YDuT8YDdGTj8Vi6aLpXkwzExvTQZG3CYQbCk9yp",
  "key26": "2R5qhShCnnQEwy87dFvcMb689TNyHYv1JPt4ZVNE9fqHX6ukHdJcMhTnVs7dMsfZG8fWYuia7tcjEvQL12dgsbgr",
  "key27": "2ebgDiihQQGJEgAir6KNLUGB8BXRSGJVRKn6QdsvkCDnBCo2d9tj8gtTUQ97K5KbMTWuGF2cFXr8sRqLZHHJKL6Q",
  "key28": "4UMVCfarKqLGbXnnPhW6byvrGBYbZzhfbepmEvfyv4gnGVdbyhWW5YSA4dgcadSwyxpDjedTJkzHtmA64rAkAP9b",
  "key29": "rYVUqVeM4nYSzVoubzHagTqRZKqTY4ZRTFgqLmNHmAg8sMJ9W1vq6QAdXNqy8qdqtbifLdmaMmwe51WMuqKuwiH",
  "key30": "3xHhnTD89m7N4rbqGmEbUo6Fc4FLa2FM8iEtScoeXRDPiCxAq6uU7gbtxto1Crv4WsstmotsDG8Mgy5iLudfxP9s",
  "key31": "5Q98qmKBSZg7TYBP3zseegnF4Sw5Bxt5PgtdawsjugNfaB5ad2zeBZV65qtETVKzhSiXsEBbkdphmU3FSFEea7nE",
  "key32": "3tgjUvoMvMdDknGajCnsDLWfQAbuY7JNxCbAnaVy555Vf5WopUuLvsi7ypWfBq2PaRr9jsT9V7bSSJg5EZaPoMMM",
  "key33": "kQsST9daqpYmuknfa5AagCsNsLVLC4Q3Ste6Mu2W97nKkjr6oks5NorTMjsvckswEhXwmsbmLi6U5fcNtrVrRXP",
  "key34": "4icV8yrVjnoYaCd5gAeWa6u8ankGAJx4aKWsCjsg1N45uqVekYvtsoRkL6TzBnNJFjCFHHNa6RE2jBceBrdoWkk6",
  "key35": "5KwUDWwHqC2KvjMZGsbhcGFenTZUujmnjns8kg9PuWR3qxr4CaMHaz8D1u64mY3m1ycBaHNTecPgRQesaiewxg22"
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
