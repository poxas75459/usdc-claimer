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
    "42vm1hxLVG3zBM13vsd1uE9cWfWHCxg4ghv5TXNpn2cUvfsJv6Gj2mkncSoW2uDsXo4cJA7yDndRjV1HqtnEWJ3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R4nb4iyRyRcfAW7bmgRHUQNyFDt9sCLkE1PggTAZVZmzEEQ6BjkNR7itLT4Hf7vhgt3nT1K4gJ7QeUdxcpyygk3",
  "key1": "4YgysiuBVCGYBPaDWpReSczfDPBMptxpsK16A2jk75aS6MRX7fonNPWbYrd6e5nyTjmakwAVgw6eocTCCELrNX9C",
  "key2": "3rgwDc9wg38QyqRoYeSzEQraTe2VZRUmSuVJEiCxnpf1qwJBeiJZWLCEiWiXCsKFLzbtHNkrQo4B8ZgMQstUvHtF",
  "key3": "4LZ22HQs5fgwGKxirtwfdGVZi9TDeXYmE3y8DCePTubw514gb9JN6MADuGimpUGnVvMvfQQZoRoxPGZfabBFBkAE",
  "key4": "KGxtfH6Lgj4p2j6C4HgHp5nMRD8uwRxDo6cdhefmLd5xhckL5kiiRm79VEjxsY1bU2CZbuhsx5Q2jmxDbH6eP8s",
  "key5": "2woUZJTG9pCFpWrUn8kHVxreuDCcEtn3cFiSUYJeTJF6whXA89rAYCjWmpGSWHpucHbnh7s7QAd5xjjUzx6P4Qap",
  "key6": "5cL4xYBr2hdVx4djBv7s2NGZdZKtrrLtCZLhU7i4GU7Jur7scn9S8ZXAicdjLiLWBKUF6J8pUMMG2xjaJyCb1v1d",
  "key7": "5kyUkTv1866DwSwoEiERcSyN1Fvx2LmMhqUPmv7XobP6W7vZaQVLCFiAUMfx6SqadWfUcZn2ozEY7fGb9dW89ydL",
  "key8": "62S5R1wo3ZKXsGFXAy2oE3LTM6ewrSfyvtCnMEXvtM73sZGM75MBVmeYT7CtqnirmSQUPAcKcn8e9QwLVXjZhiuz",
  "key9": "3Z1jxFp4vku1w2pBhzV7TReSECY42u6WCh8iCuVwfJTPh2rQnmsm5yfEvDY4GBfoX3MLtKFJEGjX6U6299fg1R3x",
  "key10": "2TuAxj9Wg3yMMs4XQkkAfZRUMvQCLdbR8ACsBu752f1W84GLnBCC1dm2UVfzbJ7eFszL9ZdRWpq6BJoo3iQkPJPr",
  "key11": "4qjyNbUTYP8tB2v7Y2AhnBThEFKMUsstUGjoA1gm1giqJuop1HrV614UPZBUYWV8K6sio9yiGPRjUAqxPqJd4sK3",
  "key12": "4fEosJJBWdtmQSoe6mfrMjYhwLvNqvLgRJJoYsYQzsuTEDrFR1PQCUYr2QVg24JxpFvRS1yVuAAvFUyU4atEKtbf",
  "key13": "5YW5uqFpNTB1sK4VjSuEJ7bhicPungBBqzwWN9NpeiNPwRKXWEiTD5o4HEy645Ph7c68rMuReLm6iNwNJYyE5Rt5",
  "key14": "63yPmA8UixkbehWJrXxw5Ny26DefNWeU6NN8hGh8BiWonQwsWUmP5yftX6p4K1sCaRqMjqVK94BkqJJHLqUf6io6",
  "key15": "5LPpmUDrLa37FiSmoTu8RduhH3rgHQ75poVbUAtYe2ohhQcLFpAWxSdAeZT8n97qPh1HxPJ5a4tQskW9Mp7uMnu4",
  "key16": "5eQ9Sz6KtHrYYRLP31irkBMq79yCcCJNJdVrmHn5S5tDh7m2YCcKPNuS4iHxBKS35BA9dRUC1qGRNZhYc3cizSUx",
  "key17": "388UZvgfHHXgP32tMKKnoUs6zDgQQKm8gXtkBeEThQHWSQH1bMHHktsqh2dxXP1Wno7bLvqUp3PgujET6VmiZwnP",
  "key18": "4gyHy9Fm1VHGTEPHJAgSfh1jWv52LGCXohQ5BQBGG59fHtRMnBmi9UNUUScHrULkxQ6LGqcNEmWUctuh5NGcJsD6",
  "key19": "4E6sGNKZniaCcXq8ro8xeRtfDEWiZjLw8EovZnmVy3B8HgrjBNggxYiMBrGvDheC5DUF8r2yj5aRrCVh2UH6xF7Y",
  "key20": "55ywdRbBJrbaxfGm6DsQR8zbW4n2azy9HbzDRxBEdCREXDXC1Xo7HrnpbqKJfJGWSr5bpofjUh6Y5XxcVaPuoSDb",
  "key21": "3fn8Kjxr7Eqvc2ka5e64CvnE8Bprq5zhcetTHE7YqC4Zih7RfhHtEmGpPRwKLz5NVyYYbwEMKHLxSe3GvKUAXdZ6",
  "key22": "2ucTABsnHWSc7ngMErdZWriXWqMzWje1tH6fVPMbeqFwrACFRhmKgNbcN3FbcvKhVafS4hPgHD3orYvU1zpjqtc1",
  "key23": "4Lhr6ev9cPzM4HbPJexXbWMSX7bm4APXkJL3Na6HTzboLmhKKXatoyDxrzmjjVwLXSNbRJhVHUFEiaNASDAUt2BV",
  "key24": "4tLmuayDrjcWqMGegDp12XaqR4Mhdp84dNUC81tPaG387H3Cmrvj76TmrV27YqrEiURRLcMtcp9FdrtQHfgwPbam",
  "key25": "5234SofxrnnGgUkE5gRTQaWkZPa5eKNFEkFSYz2s42rMNhvqzMHbT64Fo4HtsiFfkzK5cCk9oxRpiVvgvDhv6poP",
  "key26": "676xrvGNaTSupLaLEQ8tTAqsgw998Km7Mx3aLjTGyHdggZVz5A9XTF1UxADbNiWz6ZyzyKtoMRzwnkcpU8sVqEn6",
  "key27": "4mCdutxRBjxwUFVoabXhF7W9ce2ioxsyAzUefKsikbWuE3nJk4dNMu4F5KvFFwukVvp9yXMRiZzykF827FAzQMGY",
  "key28": "5vkNgMMZwgiz97BhZHRsgLp7vdcHJQ18kbCA5JhcPouiZgy9o6o2yvEJ4AeiszdQdkFGDu9JzAjf9Zg8p9BERxqf",
  "key29": "2oVb4WQUwHmsTb4h7hPtUC6c1afgUpNX5ckj9GKfCYSryjEFsNJ11UzsCjoVGA8F6CqECyBfNmrsoTJF6CnZx1FJ",
  "key30": "4gBNAr5DjZV39dp6E9RfqrYcaFuKDykKKigCS8w28gsoNvViQ7GBcsk9YKfonH8TVRfXK4PuRgFLBdyrD7QqawJ8",
  "key31": "Dct2mVYjXzSb7qdoKJCNVTecAHNMbgBScezQ4299YpuxELLAWvz14kk2PcBPuE7tuHdXTKaSTnQSoi7mPHQ7mEw",
  "key32": "56mVWH2sQP8FVYs2ocagi9sHZY3WVdtizDPwVQpMySsJfGWFB8echafjQZKsmQLFXy6HYmQ6oxdbn3PzTqA7jcBd",
  "key33": "643B4oJ2ZwyYPXQGhQQnKEYDQMpNonfAS7mLUitQNY4XVRFcxjKnC6wvWo4UxM5Vcp8JtYReU4ppRqg6c1WKfst4",
  "key34": "od1Zm2sJ151G5zkukRE8cErXp2ix2c6NM5RAdbQ5Chu3btH5WemWT2NnaX93nxg3rhWJfjuf3L3KfNoQxrZPDXS",
  "key35": "5vXJdQQMzRALvJyjRuLTUiSGFbKffL71hyvcq3bqC9ZqmP8nsZ7L2rirtGijyyoA8jstKzReaHxRXheikwtbEnRr",
  "key36": "4k3dUCuwH9PAyr7Djoup3RsRzRF9rRuPK92iXHDqmom7w5ZYAa22uSBU7Ft4ZPwitRtmdMh8CPNWms5CRX3KAkXB",
  "key37": "4T1eMEUKgrnEUiag7XLioshmrD3HHNZhuvnsSwJ2mok1vwKExwP1NQaVhVhQ4eiLdvhnwddYJwYHT6YGAFb6Gpz2",
  "key38": "41wpNzuJcWZnmQVzUs41AaZXgVTc4HfRMGWeSkC8v9xeio8xeAMR6BwoXsrYmCjiroCWDmSkCNx4HnXceyhNJpuV",
  "key39": "4QmC5qVQA6hM3HJSjskzfpBrW4nw2XwUtjBUGA4H8PSGXXyVuKzu8oTFAZMqZHScb8RYKNf7haWXEHrvYMYPKRhe",
  "key40": "39zPiVuWbLzK31gcj5v7PTk1C289fbq4CA3wMLmYBvHtqFRCf4F2BxqzMMkUZtdVC1TBHppvpp5Z3PfiKb5ZPiZz",
  "key41": "2bAPqRMHuCfDpKjDDmgWzqNnAbQXSmHfXbrhc13UKH8duT1ncnB5rZK8nGE83WALzbfeQ1CzW6mGCxD3q8fXV9Pd",
  "key42": "34FTsX2iVYujjaQDk21S7Ghtqb333pwwmHqZQeP91isdPtSEEjxRqVf4kUGsmD5ZcPsXDHcSeTmeBffjGVhq1tk2",
  "key43": "41VtNrh5yNHxoPYy6zVPjcujXetrYFcqBjtAw5GHwsK9y4UW4V8JF6kDuqtHKArR5xkyBGcfQ1WYudGS9VeQ3622",
  "key44": "diQqcaYCPUbLsDeKzptNpp1fSVa4RVZBgwQHs9REE7qDTyKNwZtrJASKzBaLiCFhors94qL6pDqpbLVyNxk1Xfk",
  "key45": "2JHU2nsRKDvpLfiih5yhHKJ9x9hBbVpY11CoD2jFg95MQNXSZrs16tYRsonsGhAS3g7rgpsJzsggjzh7dtgNhpL7",
  "key46": "3hdTAgzxFEuwSAXd6taqQe3QyrS89hSGFLyuBeXxQjgsnNcV9JVioLfrJSXh4bWETm6efDuatiVEWU5o1qW4DhAD"
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
