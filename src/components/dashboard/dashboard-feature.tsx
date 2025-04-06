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
    "3utdanfh2bbN38RLvqyTMs47TZE3eoZG17bmr6d1aVhkvyFnxw3hijbXrWmM6DfdraGoq9P5p32yt3NMxSivwxpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oX6iwRuQ929ms6eKChRvcHFJrgHofr9yzkiFGPDWWoxj4MfAxgLW73MQwkM1NwoRrmxVAVii5jzBar6VvWecfTr",
  "key1": "2ALW8FQ2hbcVGamJn3Gs1vVz1xS9nHiKj3LhVsjiwJmuEXUR5pgESTYFtTbgGbeTaqWKatQ2NbnzCqx8VqV4752L",
  "key2": "3Q4MMTTedWHuKmMi8kPjurKsEB7zGRDjmcJustrvSyshRbZK3fDgAdcQZe6DPjHnP5RKeV65iaSwFDFpQqzCSgCJ",
  "key3": "3azfE6HtJpJBTHMWrxiNXBHzabndMcycXEpbSYhfzM9hhMnT27yUtNhuS8gGvjmsWdvYe1M1UX647cgcJnshCneR",
  "key4": "45G1E89povjiz1QemZRcSbc3go1Sr6buhNYFR6adeA2pSBCSTDU5ZrceqvT3u8ziPz8BHU8cGqySHEriTWe83cHV",
  "key5": "2JjVWjCiDEj3bgywFiKtFPypbfbnYCbkVRBRZtbMtMHAxQC9zCV9Bj7YedDz3MW6AfkfnjphtFB2YgckstwEqnow",
  "key6": "4TetDMz2Pb51Dxve5Ja3apNY4WCt13ayRSEBQ9cQdkfH5PZw4tg89QNrVD8QKURVTCn8YuxmHn9gF1MV2KkpcbPf",
  "key7": "4Rw6rKxX5K2WGL1hK5pWxMw7aFDL6NxbffYjBd562zc7STKbFLNVkD7A8Dac9Z1YiPJBwzdnBnxcFwFkGiEQMJJ",
  "key8": "hsuUmwizQVo74vWtthzuw9Dee878HNUL6epvXDV6Ji49DBjWqRCCD2xvAFWGjHzvF1YyYRoEnHCC3oA5Bza1fyu",
  "key9": "3y5K29R3kPWhyJmsxh1aQbCEs857VekntUHfjHtfQEj58ovpEiAKLzyPvcx3tHQJqeuboeCFTHDQHzpvdQAFFA2C",
  "key10": "4Ei3AFxhjZWecZLwhurcBtCRMP9dREqP84k2yQRm1GsU2Z9eKyuV8bBYKpVZvYj4Tgb4m9AQ7qD5FptRHxSBoYLJ",
  "key11": "5JK5htRBh48w62nwvt4pUPhW9d6YgVhdZcm5HdgRs7hrhmJeXydMfrTdCsBnfJfdmUL8zfquaSE3x9aSJ9JTM5VL",
  "key12": "nC1fesNgKD1cZVSnx3KAYDVUbx7XWgH3u3AN1x79p2vZwhnvA3L1QQPGPyUYXaDn2B9aPfsVXvSQWdvHzF2ZZkC",
  "key13": "5N3oqzbEzc8bkatHWddzCKxNromHfqsgk41cuYNY2YCP3SDbmN5Ek8fLWHL5Cj474pgS6o42w9zCkTqUmf4mEQr8",
  "key14": "4SPiohjVN5vweLu5oTV6W3ZMtk19GvaorqKjdpZDQCnTLg6UkM7S5txk2WBtLDF1HWARvDxrNWonNaMUjpmfB5rm",
  "key15": "4rGRS8tvuPaGnzNvGsMVajQs43uyCAh2rZZfvGT6qckPeLGN6pzCEU9ctuZFgTZPZ55qmZknLE7UxqvPC6KBrKCw",
  "key16": "3AkHRQpKeXPv17T4p8mBguMGeTLsHxmFm8omv6ZcanN7Afc8Dwp67gmH9bX4B3EQNR7Qbk9FuUdiRaNUFiSfeQb1",
  "key17": "3hRy5q1YRbnFQ2oqEZbAmixo9zczGqdDpcsxdY6KZcrTdPr2UrBmJKTwLJyUVzZehAC6ePbqZxyAtYropv43VjrS",
  "key18": "5PZ5HwvDYAKPKUavLGhJv35p9XrUiLUyjG2T13dCmQokjF1N6oVvBLNTvaDautYSb4SKXzXETg7fgG9wY2PJpiKq",
  "key19": "3XtVzm9Q3hBK3DZPjoQ6ngqPwtkdSXhTHPZEYydUgJ8Qyv6zzdEx6Wgf2wAhoUjSLTPHf11bUT46EyPNVKjYhMUD",
  "key20": "2ARpyw9gvWBbTqh5S3W7PeH8p4NJkQWigNZVcNhT3BXiBqCDZ6WsHynfsGtdYVt4EoXALyQYbSRQWvNVTdrGfAm1",
  "key21": "7VKyJUffnNKyUPCzAUe19uuN7m5TsRPmmzqu3BP9RrCYQQXko2LJv9TxYfV1r6V5cdhC6xWwQCXCoQBoM8arNyN",
  "key22": "pNu7svGhyUQHJL6MbbVy18rb1ZHPCpeVC3VH51DdmA8YXzwmLd8niX6DMzz41DiUkwfbD6CYGNpGB4RWgPYqy6V",
  "key23": "5UVQakoUoDhCNLw5Bg6aCcSJyW2Z6RY7QfPHTpFdkNyCqtpXUFTpKMxDHZja6VqMDz5zwVdCxdVjWAe7cwjwPxzv",
  "key24": "5DFG1iF7eawYwZkeAg7UYwxoEWQbXD1WB3caiuBV4LowGBACH6dGjJBX3whYVDr62rNpE43uXEF5ymuGBWFWohLP",
  "key25": "2yWosXT8P4PcMTmwCTfSFEWrsEew5ys3pxLpqHsYDGZAPthb2rFknkArzXMS8cr8yH4RCMED6wyJHsJpYjbhTvvG",
  "key26": "66yXbwF9zBTxNjriPGJ6KhmVqsQSLEGigL12vcjeMfihKHAvcE5YBzAwYA7isda7o53sKPYQviwWGX1m8ruNbLWc",
  "key27": "2QXwc92jjaPnQSmw5kvkLddPrzeotPnQrBhmZFd4ExJqqMsKZZYEj1MzUjByFxSVYDKeqzx9xGMdXgfgo5e4s2eW",
  "key28": "5B58MtkmHVbfKSps6Ef1EG71a1EmVnptShtvZ61757tJmZVBudLJoQfhA8ZcGKZjE72aE52sSfDKNFWF95fFQ6Qx",
  "key29": "2PEKYTKypVDZXJM78PWZz7fcyiHudX6J6nCVtkTTvUqYixUZkkdoSQph8PvsLyorkW1vV2dd7D3u9rc8YLvMxahn",
  "key30": "Vhur5LGEaAGfpGochxqy7byqmz2BQa1kpq2NJFDnSiJWXM2XQEveMutiBTa62Yt59UNfCu2gq9dpDTx489B399s",
  "key31": "5ib6NwKDkAWN1eb9W2YfwQ8MBGqCChNs2hSBb8i3atDTNtuzYW9uxPoZgWhudFYPtmqRJvQq84X9b5twc2J1qGSB",
  "key32": "3Je8xtru7KVM4vwJRpVypeVTYBrKwBMSw7S8VGGeV8nN9LoKAy4FZmXX2ZmkP2Z44mb5FN6nJiLSoSFRtpqhxocH",
  "key33": "3bLUhLSBUd4KtvgvY3Mk9S39wpezdPxCNTqzVYy4cAH2gHBeoBLkadxZzMTavajymgxWyQEHXEXhdVYCpVSHdThB",
  "key34": "3aLpYQobg7nHs73boTgtExeT4kN9ArU6Cr5Kk3Ner2DHFoU1Bt5rqJPy5RAKEW2MHniiLSKh4pbdqVSK56M9oZ3L",
  "key35": "5v7Vgor38ofJcV7KfH9iskBHGLEMoCBg6GxSXGppR1q4FraoVmBYBicun5Bk8ei9x68Utt56JJqRKhNrPoCJF9Tp",
  "key36": "DBHgTZfdaAyaiP2e7Lbv3s4dFx69m3t5hhvhdxkSq1245GU49PoLbBxcx2MYSq1LBQP72SzcomLLx3iafoxBoEe",
  "key37": "NmqdUEcUXgTSbaUhRjcCKUZpbGm114CD3eKV3FKpyK5PaZRyDbbKPutBcvxuChiNdKk7caCpXkYQfC3mi6dZmnr",
  "key38": "4uQcLFKDZzjvU8nX3EjQjmBD7Urrus4fbmapZGu5meggskpTjzgFcEZuqRFZXeq2jwn17LourQNmpTqkx8RSakxB",
  "key39": "3iekBPGevZRHCjQtQD23fcFieUVxShs2fGCh4EesRdAtgctMGFaJ2dJLT8Ar6mXq1SbBn2GXq6K4W6xn9rKTKCuf",
  "key40": "2mDK9HgVd3LcyuBrESdLjXLM6jmhS9DLnYZhe246WSfpnER12uwBTm9JyXNs5GufoUWwepsA2ksKwjMkYopWYgb1",
  "key41": "37vNLuqrSuZAnWJKZaPtRRkGJPVcHzFECct3PREn2QdntbcY4kU6xtQdfumoL7yXQqzjE97YGvqqRVzwUcFSTCQA",
  "key42": "3us6nyJBmAPVRFzQphH6JP6zNSvQQuLByM9wYTGMf9i64rtAHETDUy9ZDBeaVi8fka5RtS9wFCk5kFL3y7wwR3sB",
  "key43": "3E9cHgbMLRXvC6Zphqo3Xh6nW1EXxUnWR89TfBLGLTLN91PyxxQc4SKYdd8imH25EzTwaLhgDSseunGXaiFWssPp",
  "key44": "4bugAXRciAw12KaR4G1d94J9GghLatsvDuLnT4thGaAt2J2gXF2bkoDdccFvXea4ZFiz4uhdfKYSDEKTLUezaukb",
  "key45": "33PvUWaBGzN7nL1obGuaLibRx3bn4W2gDZTYRHeo3e4JGtBp4z5rcWpQcqX43nLWxuc8JyBNZVVvtauMDVEFBnf3",
  "key46": "2cgQUq6rRSZRa5PbXYpZarS4fJaRiYgWBsA1i926SPsRovSpg1xfikuv5r9d57cZhUmCzQM8LLvJ41Tuv5op7ZAY",
  "key47": "24zA37po2rtLpVhSL5FGc1rPvvKi1WzMU31NzWeQjboySgAwdXReGPPQLhZS6kx2hrcKgCy4UTK6ArqxaeH2qzgT",
  "key48": "3KKikR2esBfAokVTXVhTAgefFrKDADA4WiF6cyAQvDSWATG2btGy1UYoEPcxcymizo5BELgV3EHU7LRgx4Hmam13",
  "key49": "2N36YiGkfF64Z2SwQdoPWVJYDjPHqAQSzy1PBexiTPvhZ2P5X9XrvacvY23G3GPM5NFrRRzU7r5Bk1EzrHp2P2hB"
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
