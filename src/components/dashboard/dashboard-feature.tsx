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
    "5LsNzBFmLPvBGHqctzbDePHb3GC3PvPrBTpyG3dGrsuDPMY1Ge7vimsabN1GKRbmnPrUggArCP9tC7SbFAMFwCsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cyh2YsjDDyjNfYFSGWy8YjQEw2MVQWiSqRPMDjhTBrPrKaUyxFCGdqGkdLPJpdHYL7B3KdhWCydZTTtVukjhZU1",
  "key1": "3P8Ly76NFi4XvYqhSFMYmHUU1rmDxKTDYx5qEFosEikhwXBLCH5aZSbCfvNLai43gYDTVZtid2b9RK1kLdwoHEdR",
  "key2": "mSLxF21CvgzhQsGA1ioX9T3J7G5HqgETLbHxaSTc4eEUQLFFiiuY3ezmLjGmzdrnNep7SPAeHGLm9n3YVCb4CZ1",
  "key3": "5vn8E4Zczkotcch2F6MscYrv7f8uMof57nKDTY3f6EMf93nGLoPHe1EnbqkXwfD8pAA6uDxhfA4JkesoQgntTxjK",
  "key4": "28UYcJnjrueryi2QVLZSzE8VgeFMtPt498PTQVqEHirND3NDzcuScpqwEZyAZsfvL7k8oBJMmqTPZAdW5V33pgtg",
  "key5": "2z6rcewNeLyhb75NxRpYoqouvYUrzNH7NhiVnNz23SiGff8zFbJVtzdTXTcByuv93qsCFozTJ18HvRDuYLxqpzwc",
  "key6": "5trZdNd5DgWG3Ns8NzShfBUru9crCbzwwSW7vDWGZsETV5dPDjqoRYp25gEpvwhH3kv1YFZVFBzSuthqeecRypmJ",
  "key7": "5eFxzxzPY99zikxG5jp19xAhpYxpvbSd2ptG2hpAFDbt2m1SVvH2W8n9jytxsqAVbM6YAfo2eMBUxwUR71PtnX3N",
  "key8": "4q6V5xM3B8Rs1AhrzTLjQST3GoSHsvHE1AXBEbZgV91E55xMjFroZWTbmmZCWtvrLUTjAQ7B1DaXN2PKEM5x4mhs",
  "key9": "4jBadukQvFbwVZezRaqMzAjUcr7869jf7dfztxaGbMaVS5rAx5LjJTfMH8kjDekof4ogN7cCUPXmVzMjB4k8bNvS",
  "key10": "5m4ppUgRosCMcDdGQdXPrxm2MW7qTVvjwgcyYaobKmAALL3ohUaDik1drgixDBtLsrNsmMGsHLHLpBHdijmRvKkP",
  "key11": "65tw2SoYL8SY3k5swJKdr8fLGGPmUrsVYmhZQqVPJH817C7wAFJhVuU2cfZVFVYuz86nmczgBpHf7yV5TTryPyuA",
  "key12": "3PV7LJsdBz3km2sVE8Fkb4gisMxqbwDiTHsFT81Vp1Vbe6dqtAUuBgJKL32zmQazfid9zyRnu4AtMUaQrvx1jfZS",
  "key13": "2Zihx7fbpZFrCXiEmFBrQoXZ2E7YjeyBDnf3SYYdmVumxpEZjFuZ2FiQZBArJ7z3Ru7pqsu4qYKPxN7eq6cMVQEM",
  "key14": "4juo6QgyZCii1jFojfkkccFUGiiZtBY51HWTrN4HYw6nHdijo9o2MFYVbdLzKPSo4xFqC5ZngWuwVTRo5uAgNwD9",
  "key15": "4Syyn3ABCr3Xc4RWG2E2Dq7XYa8aEbq6AhKog1dXgd1uexNqCSdzCogzeRjNRX7BLWHdJCa5GM82Jpm3kBCsqJU3",
  "key16": "47qN7Ur2pB1bABZrX6ET311BKPEBAJTDsrpvLmGZ8DG1WMzWHTpUaydmhbZn7Q9nRpkrCuh8txMiucCCqLuL4enW",
  "key17": "2g9Xd16MCcFkqLLc6e4vC6H3pM8V4YWxRJzdMFwdVzN9pPzf5yjfD4UKp2MHi9WFCBfiTAMw9eYP2zarBUzmjZeS",
  "key18": "2pYiY36bh7eeaSV95LWkAgk7xF55uVKyBeFyVn3dzy8eEBne6bdpEAYTfvFqgpzpWh7ysUkcHSwnMVu3GoSoSjhm",
  "key19": "e15ZDQxs6VuDz3n1GG8ay1eBN8ma2E8XqkkaxBhLhyfXdGi8K9Rcq6AM4NLtWRnLy6ejr4ZDFiuWfitsHjLtxtN",
  "key20": "4QkLXu8jenqHzDcRrWoEtrfvhVYYRYeWszoodYa2j8nZsFczYKmJ9KY5Kq5qP38R9oY4cNyiXnjxARfdpGutgfFB",
  "key21": "ScyTJ18nT6WArDfb4UMSZHohtcCK9fo8th1nnwQkBjCZZw2mA3pGPkw8DbqVANXpEv3uQgLB89AFt6nSkANy4c6",
  "key22": "4YeXeg6BdjjS8xVyVbPVGUiZ9GgAbJNvTAHCAP4L46u8iSxxLWhqj6UAoQ4HXPu9t4ypHYTbogdftSCE5QE5SxL5",
  "key23": "NWGyMJXYvb7sQAacUKUniz8R56kBc9DWtQRUFcRx5WFdtq761QM4tNUbHCpNQkFQjC6p7TLSoAiPCaiSybVPzZo",
  "key24": "3Uf6wjH3rNDEa7QjgxoMV9wm82bZbtenYkeAA5fwFH2WZhXSWgE4Mer1AsSsXB16vPEuHrWbnzqKt5c2x56g5Guo",
  "key25": "21uMLxixDpTTVXLtndeZhfTtS9rb63QXGPkUNsR9CVNMJ3hmXk1tsR1GgkucVu8tf6GyhCdoPqf18ioQYf8ytznF",
  "key26": "kyNVVkqnqLysFzfpozCzPpHqDoid7EnWUXTkfKikHs4oK8cFpveUmzuraKH48fxjtjpReyNEnQaA7TxXU85H3pN",
  "key27": "2DNzxLL9sj3MgNtCufVKwixfL7WoDbauS2xkgu226j4EFot1A4kk76Dky4PGDoi5FSFcfppAWuzNaHLsicnnSR1z",
  "key28": "4Vax5bCpMCffhkwDUDyX878TDKbBvbFDJM54FtGCwrL2xQBZzgxUHrUzHBwwHKg1yM9s3EYKSxm3KkVTkkJGfnzi",
  "key29": "48mKuMuzMbhLT92z98SxevhtZSzsop4RLwvALRgzrRJQZqZB7wYsVEF4Ggn11BLsxftHCYFZUELUTrio8qLodjyQ",
  "key30": "3JqgmbWbKu4aWzMo471EMJcSw8YSa41L1Ak8DV9bsKn6guvs4Jh12eVEu2961PNBG3rkmkLgjDfj49F5zUMMqcZ3",
  "key31": "nB7FRL6dKBChiUUqX74i2nKrCDPvVZSZipHBbvKZKR5Dqq63RHjJEfx47hcmeYDuE6X2PwtUMNaydnaxH137t5t",
  "key32": "F6HY8ef9L6hhoUvpCrnAF7ugBvyQQvw2kqGsccPHAkkoZ4AQY6NRswGznJjjv4oNia8qZCeJaDPaGyANqkT577t",
  "key33": "5dDSgCtEUdunzWW2pTmgoQAaBBRxYKptHWEhGJeuFBCFHtb3yTzUAHyHHpDZrvEmoHPikrvVkCQktk5tGCLgZMe5",
  "key34": "uiDK9DQoxpEWQtq3MGvYh3msri12PinUJiYn8kpjYPMhc2Cea8ZSbgsYm7cZoNuBiaDoWDd13HRKB6VsGFviDZn",
  "key35": "9xyggTiWCZfcGYRhAxBH5zmJcSiTXCgLNsjacih65ZeYJZJX79goTKb3CXnB29Yit6Dnj1Y1HXtTLxE7SkojmyL",
  "key36": "4ZMtLVReVy7sbx9vfuCtzqoyLYpEebxn52NcLQCHNFxFShTQFQLg24dwUiTCDDQnK9wr25u89m1Bn6tQiPN8P5sb",
  "key37": "3fPjXVumJ6x6qxPyUNG7391THmiM3tze6mysCNrP1Q1EKKgz2vGPEMJ8PDCsnUABwrEwShoXMLGfjk9AXLs8rqTw",
  "key38": "3Q2UetLKfALm3RXhGB57UdsCnMwD2Yc28DSzCzq5uz1QKEABVwoWNXgS2MYk7fZuV565F35m1ANEN7tkPc4Ez1WT",
  "key39": "38CLmuEKEyLFM8VQ37McBFCCKv9oknRmADw8RKa6sjW9zVN81sSesP3mdC4MrsZznQ5cxXfJeTntpqUNxFu9acDB",
  "key40": "5PQyDGtHCvJwnmr9bFvZMse5LhY8R5N7GRQucnppTsSbB35ucN2tgd8RbLyfAqLrttMgYpwe6kvQwpRxXq6d3uev"
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
