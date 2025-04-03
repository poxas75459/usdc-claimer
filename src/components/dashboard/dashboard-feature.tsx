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
    "VVqR4AdbhCikqerPU64rFfgHXrtZaKXz1EHGZyQuHNdpNCq9Err7CahEaMipwxqdy8kWXEdMEA5dhZxtZVKPKVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4su49fgGgPQLek3dKX1s39UNppyLnqTqsPg4JAB6cotLg3qqdQUJbAimeG2CB98HE1FiWUQ6W6vGeowHAqkKdj2X",
  "key1": "4kGebV22XqXFqoxMTFVD4M9ji4yXdrrWct8T81FGJ1oWMnwi11YcvXmz3PY1xnfL5nAdsahcWB8c1MbBvHerLJCY",
  "key2": "2Ewqv2NraiKpwNGNQmtosraYR68AtogHHxu4dMZpSjCMTqUU1X5EBV6NaotVCjvFiaGgxZC8ScGRSHbpZyKj9A6K",
  "key3": "2jwxXqinc9nJX26XTbcHEjh5ajD9fKFLS7yqDDv9p5sKotjbuh2s3VnsbvxNBQCwB1eizJwR3uERbUchy4gPcPde",
  "key4": "2Kp82AomcBJGmUvdPNFc9rSz1D9HcEWs2iw4FpveuGmPBBoxVrKyWj1x4vnRhtgfbt2axEJUiyCp1rZsdThmXjAh",
  "key5": "2s3tQmWSNm5Pr9kUiyFmiJc8ZK7gbRYeMBhfdMZHWoLPUdUQjAKQLddXkG8uJX93Nu9mGTqxCipbsoXCuGeqz6DX",
  "key6": "vaesq9BY43L6SPvB3H7PXMCQ2vSqtRpEBMV6AyihQGQraAZK9SML9w8njYh6hZRSCeQcHzpenDyj94NGTyvxWhe",
  "key7": "35HdaHzqHUHHtGFr4HrvPBGXqo8oVdxQF662bUDBERRCVKBwrSoE3efUDqzhrpJSU39BLVP1tS6oKVdF8JT6iC6J",
  "key8": "2FjnzGguv2ZoK1n6Rj8qMjC1BNP26YYXALSzgpZEa2bD711TknzFmyNSikcdvtLKVoNuUde8yx4jqFEo3ZuLiqN4",
  "key9": "4Te2oPaGGnK7qDpKyaMrGM57DzjcZiUYDwhMV8zGPgLL4CKBi6PAWnHrehLUTYCEHhPxgU5uurCGgwSH4guDJoYL",
  "key10": "3hxijL4sFFVYkUw6FtCUgYpUZoxnr4hT7t8tf9LdXFrqSjGYLHHUobsQcX77Wc3iRwEVH2JxauWgSiHBVRvc6hBn",
  "key11": "4E3wbjNJ4JKeBcUTTJNs3XGtBJKWn9Erh669yZPh1VGpK7j4EkqrEv9Rckxty4aEWVpSYA88NQezKFhdfALnBFi2",
  "key12": "3vbBEdfyhdkbRiLQiDJ2eemkK7mw63fJxBiv8UACoPdAVtdtwTkzsi1MkghVXkyVDf5ZojR17ymDSDV8rHBeAK7t",
  "key13": "5Vfgr6dmzasCQmD9ymgDJag8NgmFSexZ4W6DPg5negy3JtVrWDPoBSwhvjzd2jU2pWxrWSN1czRmTL3R9N9Smg3j",
  "key14": "vz56HPXxtvY3i5QzA4wLuj1ju8iW7QRmmcYeT6pW3W4aC3938Y94RCXh4gSFnrPCyvBE96qGAc1TN2qke5DCk9u",
  "key15": "5YH1urUJGuWd2YEz8LtbvscfLynMg8jsUkoNY3Ymwdbgt9uK9uofTkSXrhAhXZYLFMkXsv9sGtAqLFue5xw1hxRz",
  "key16": "rbaAFNCT3ej6JaToRcd6kYZKeM9oeuBQwHAsYgNSKcfoEViWkKzNvMRjpo1DpkSyEMQ3a9t1KSoYBEKKjji5cmS",
  "key17": "2591jB6K7MEUWRdi7fzU7r1GxmeHig9Ncxvve2hv9jyF54QEPM9sfovG5s4weC2aHvJbotx2wntA4KxRrfXDtU6n",
  "key18": "62yysuWVVrQk6uuU6yMr9jmoxNH3FCmyxHSJ6K93ZyjLo3jHP6Pk9Yx2zcPh8aoMfc94RHXJxvG6ZuwLnPBhXuXd",
  "key19": "4Y5TPnKSf8rFD26wvyEuJXAK8bGBdzaBPWG8CNcVQT8iLyGPaJeo8QUi1yhBAfVswDtMXK5JYewFyBmFwRwsP2ei",
  "key20": "4yRpyhPKaecUMcuNmZ6sP1H8PMygnkK3YMF1QhurA7QRsXSRPawQTXoGsdThzCzdvSskgY7TiAbgEhSwE6PHWqzK",
  "key21": "nRiMM8gS6PLgxqMapR1zDEBrs46m8jmrXC5JvDYa7557TQMehGFymNhj79bsQKmaVrfwae64Po6N55YuC54xpeb",
  "key22": "bGCAqg26gxJ9qCAXGz3ZuSdUxA3GsvTLh32fPvbXFGPGJaXCPXbM61jZYaQPRBcfv6ZNQNTXkTCqMN8tfnhh9c1",
  "key23": "3i8PLTFbaaz5Hctj3TYnnfcRcCzXAneF37dv4iRtbuLSSbgMPzBgngehC4fyHAK6cKiy4X3MEUA1FrvvuXhV5VFL",
  "key24": "2iQC8KaKJZu2fhYuKCUPZnYPQKXojnCk7FjQC2x3bU8jmaP2wqqL2tsxoC3XSbqTYTdYaoHN122pjd7nfbc1CqCX",
  "key25": "5xUatqPZcQFJhoqpoQPgRvv9wHpqiQHarzhoCEAsmLuPqiC48krbbpZpz4wjsaXFCTxfJMjyXxpDuiReo5nDzDqj",
  "key26": "TD3LKPxeSpseeK3gULGLvo6bHxdCYNGAB1UbGmBwdMcxS2ooTUEs4pEiP4mkCRWLGRpUtaKZa7mcKk3J7wASUB4",
  "key27": "5ckREj7TYpjcuha2eMJdZKMii42qknn3XFkhGUjHjSePJgvJj7NhL67b9nN2X35hY2FEqGiCqA119J5YAdcNAaA6",
  "key28": "2WnUJrCZu4UeuifSvzBVpNgYSyaBkKWKqV6rs3wq6aQQ9RTbyUo5TmiAaESq9KYid2a3ZrRa9pMTN4sFYn9hp5sJ",
  "key29": "4Y2Ww7ZHgYGc4aYddHqfjg4qyFrbJzC2kWmWPSeA7UsSfC6ySnqKybWjDoKQ9WW8MWYUtGRn8eNXYSY8dpfv9Vy6",
  "key30": "BZYRp4g5jZMVdv8c3ZujaC5yotJHzwyaPSEnAB3XmW8Z91y4AKGwUkDxEWvj6dXC8f8L6DVFqY1BAhMNAPcxbgH",
  "key31": "4imfEyM2MxFBaSKwMDe9HtgkLY7zGeF2sMATtbSUpGjz1oFJSnjG6Vf4E1eeUnDLspfn1e2g2weCokAPAyEfNbYm",
  "key32": "2a1yiDiz9W9X9GfbmGHRWy5LSTeyBB1i3UuyXgJzKQoAvyTmgcyHBuLzYv3ThAJCF8u9oMb7dWmRGpw2k8brUfnS",
  "key33": "3LvdRqX9dYgjxbS5NJDBu1hgu8XhPa7putkp2i34fW2nLC81HfDrebHABipJktVjGeLo7VhYpYDRcUHhm7W2ZmsH",
  "key34": "6vLgSUP6XQAonEnoq2WHmf4mcSRBxfypFJQ4hqYpgK4XwPx8yU9GUB64FWfjaDFdsYtS57Ah6t2eDF82Wc5fVfD",
  "key35": "587wL855EgshJELpgCrn2dn9U9LtTavMiS5JBqcY7HmtWoHdz7DbGLekF2Whfkm5EVZQoduMGcJwgBroCzC6DdgZ",
  "key36": "2RdWP1zwZAcKLgwq5zPNJESuA7JRN1WMMSejrKvGeN3WSsG5HTyEEofLTPxBWaeQNPrUA9W4JKX4TESxiKB451Bb",
  "key37": "3YbjqajRDcmUjFc3MySyETTEpEB71TYL1BuqXcDENePDDRBb7z6BCr23M6k9HZtxHGWEbGE36ChDRdxkRBF8r6fe",
  "key38": "5utZBoTCU8Dfbu19LssF3yvC3uUHLcqC5QePCNzLcxziRsTaH5LXJpd7bUGPYBkQwRh6aU9k3eUNViW4xHfo5qCh"
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
