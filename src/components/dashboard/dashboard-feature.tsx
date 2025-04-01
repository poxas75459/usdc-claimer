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
    "2Y4SdgVyD9qgbSemfuMFs9y7rsEKebSUsYCjPxyrBXydnJPXtPAqmsZdHJvwiFBaXhQZYFCDB9PvdbfAJ9CJR29n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rHexuUAMvBtJMbQvo96FbTAFbt7jWusXAnfo34gj4fPJFeF2Qv47nL1uw6J5v45LrNDEUvk3eVskR6GHRTq2xBL",
  "key1": "ZZCEfh5dL1LRUHHw94293XfZ7EkUowVScWocZ36LTL8jJDBVqHpyHaFm5zwAcH8hH2pTN9iUuaS7d4ChKycjULN",
  "key2": "3w7SdvmAcW1Q4sCnK1c9tnnF54R1U5GJ6Y3x7vcWFGfa9V6zMFW3osi1mx6yxZCckyDwDKFwzRGLPaUPtphuLXVP",
  "key3": "4Ec4GRu5GoXrKdZBVNDTBCrr738PCPmjvDDxjDybZz6iogTcjMiTKvfwFR8dGH4FP5QEYR46jpxPNXjV9x6ZDu6x",
  "key4": "4m1u7ukaY7G3xJCNRLP7RdhJzqJ2QFFEstJdbACtoKsUJ4LPuJt6JjhQtLk5GPbk7Nzrj7vh47PEcsScTZZASrec",
  "key5": "4UTXTHM3Hug3mhuPamuY1r61CjujH6rMPwDve665cfFZbNWpHaKtXHLyvWYE9fKRjSCCBkaX577TtNgXtRr7sDJ7",
  "key6": "2MscQgTLDExqdZf8X9DmJ4atvBH6PBvtnY7VXryse6veRb7R7MYM9UfuwUpdLSMH1eaQ9ZndgjAaZEyfDyrxvKFB",
  "key7": "2VAfwA3B5KxALQ7BKHZEjwXLZgwsh6gCZm3sxiAsDiYPGtVH4jky2Lzn19go3bF6a8NSR4w8jJWDSW39PMwRwFwt",
  "key8": "3Ad9DUqRCTUcn8wrp1rd3sFAismiTb7Qi2xcF2egmFtozZDXLrLmVzaCY2b6LhdaeLsA6ycyDTKdiWnELA3XPvdk",
  "key9": "4GcPxnByf2qQtH2QSL14mrJr9APJ1wX6xwoHSWcRwBNV4c8NsJJUW8XdboCWx1Ay6J67DEC4Mb4bkVQcgMsu3r4d",
  "key10": "4DBx8apqHw5hv3jdvN2AnrcaeMWM7PvvvB9Jpxnnv1nvMq61d87cDn5JaCd1avu7F1feEZvLapMHqD4uMshLaDJY",
  "key11": "4uENPQyFsxJiShpk6joTLG9WtAmdhBUqKtVAPDmGcLLxbiBdUPy3cGZoWKpeEq8scLGPpFKUenjHvY9UcCZsy1Te",
  "key12": "2KK2MoBcWYdG6jLxWm4ygXLaM4RErhANLc5uA3TcLWDmPCmpitpKYnw999QEcoWy9fQzCVEeeCsA3aCXSVcDz7dC",
  "key13": "2KuqmR6HXApDSxswZ3ZQwLeWaVeStMGxTQ338Vx71SFqpnKsrGuHoBpW8bCBb4yYaKmtPtabAHsMGUMRHqYQrrcC",
  "key14": "2ktYLUUe8XQ1cFjb4WnsBG6XtJztb7966zSeFhq19niHoR3KsVxvV1LdmvVhfXb1ZwFWZFtK3H3jmNUGqoNT1xKT",
  "key15": "3XMWV3wE2jGMWPPZFATUJN1xm4Czvom5eg2G9vitDX6uRVMKH1NqnJsiLUKe8CnMpo2UTnzzNVYedqGTeNBxeMAB",
  "key16": "2o2gmK6E5CHiWRtR1y4xQGvtrdnLfNpQT2UTxTxnHsPrZY1MCSsVQ4byCZbtMaVenVWwzfNiF3rGZ8bosbXzmbbx",
  "key17": "3uyaf2hoTAF1xxmX4Lc9ndLnUDALbRuT9tRi6u8DBGekHwKyoYD4cxZ3VrRykySWi84sBxdiNwECEvosfayYhRPF",
  "key18": "3QDLWXiikbRFNxPuXKaFRfKL5tJZTns3kcWAmKAtPUJKXcRuFv1sSJ2Wwqq9RfsP2GqNBib8pzGRjXmNSh2gwqCa",
  "key19": "32shoNGYpjoeGPyuSPtgt5NUBdCvH7hBrxcDZBuJqd1eH1yEv5tXY53V7ANujdGeVdYTYwfdeadGgLb7yZNbMiEE",
  "key20": "y82nMd57W1SbUBL4cjgRZmrbWaX1y6pJu3MyF1CyHW7fEB1ULHeWDaxvGiy1QKzS7jQAWckJLrqC6UHoYB3erzL",
  "key21": "2XFJfTtzfmYqN7vHtjJAJM5sL13DXhRhQvuxV4Nu7qwPGsWUM943Kqe6jiP9DsRfcaiiiJQzHuuE7ZoVH7K6ABLJ",
  "key22": "3JXhq8tNAVb81qAFG9dQsBpgwL57dL8Mkry6Dgse7HEGstpuJM2tSLYfZ3hJZiAa2VSXPGRXJYffr7AsywehaVqt",
  "key23": "5ohKV1t3QCrfaatfhF3zRgxa2VanXbmHA62hZCi4pdprGRXChkpcnosnZrrCcUNp1waYshPbnzVjHZtAKSsj5z9d",
  "key24": "2NjPjrvVWKbJZgGz1s9LhjHi7Zu1w7NRcjBYdXbCtY4bGHCbzCzJ4mRUUJia1zQEdn5U1fWignTXYeqFvrbLWVgA",
  "key25": "4sArfXJZGwRq1xL4NVY79KgYqdEGygPmvNpqy1rKv13h75vkmFwDPSrAYFBbNubq4LvtWAVWNLXwJ8XqyG8gPgpW",
  "key26": "41zgLKuJ26c55eohegmMCUz2wRY899BhUUrDQWL933RijfUu3MJYyG3SrZxrYH46D6xd4qauwRia9fQZWGgEdQpR",
  "key27": "5FDPdbv9TWzCxvMTvLyXBDNqLEDcGmnsjt5RtdTjpsXm8FKUKoPEKC6jDE5sZvC2Ht4gZ1Ug6aqcuqSpPkafYM3L",
  "key28": "3sNLBi778EZiMVBom9M2pMqGe7eS59xnX5nQjZwJm4GfrxKjhHA4ddcYztEFWtjCwJsPaYnWT9Zm88gN3NnCaNF5",
  "key29": "2SeVAq3BnzwNEDRvPERkRUBiAEa1W8UCGEw6ZhA85A5BE5am9trh6hafkpfYwM48ZzmATYHi6LdGZtNGU1eFWtU3",
  "key30": "3ky1dGHzsanUvLiMznN1BUfGVSwaWgCKbL6Dixr3hkjTu6YFtTVdJdQEB7DinEDiH1qrDZVMDHTKFU8MGUNjUWXS",
  "key31": "33CtdVi5bmxKoA1urrERvTwa3kMAdsUoe2uCerPYWgGy1xhAx3maVHbkDnjrvMp249qVAz4ADe4zbizavP2u7NCu",
  "key32": "3W9LEibp6Q4cAy9pPA5pZ6kDHFgZviWjEZR5bsUXtk1rjhFPK3wwRufJkpmNzhhecsBSY79wCKW9ojLPU7LxcQGh",
  "key33": "2VrqL2ip28Bi3hcipPyBLb2PGbxbjrMNCoWpQJUEnQayddfnNwCbrTCfQcbFhMj6ugD5QWcyLYEvWVXphKcsnuQv",
  "key34": "4kC8BaQkjZ2pk9ktUbjwx5CgbYcyTVc8efkRLKoUTpDjR81ttWugnQo7y1gCfUV5GqSmz4fCGdqH5gSCU4Rgc9sC",
  "key35": "58YREBpra8CqsRdSuTi4K8ST4VsuNmMgNWbhXYsRqEX8TFXZ3yiAwuTLsEhhDWXqAg3dDWWdEP6ZDtxjNRkq72Dx",
  "key36": "5aeN39dLUS7xPr3TXVM5Fnu5uCYfMhv5eZC7QULQ2wpzPYh5ANnoP25bjB9agVrw6Gkg1VSDwGrePwVejoLqrokz",
  "key37": "3AWjshshiKY2YrWyoqvYYnVV7ifRTa2zHrzVSDmbVrvoRqEx5c87B11syJvqHWL62EVAfvTMX3SFoXhU3VCHNNXw",
  "key38": "4cYqrT29GdB1RGopNoVQCzZfHX5EbNQeov9dp8BdV6sHSpjNboSbjmamp7G4KRxASTFoyb64iD5o4eWVcq9Q8467",
  "key39": "eNgnQjuDzwW4Z5tnov9X9YZ8yCeyjgVrC3gF6ebQzTRVpWHE8eGJ6ig6em2CXnnQw4MV8rRuehKvdXpUHbhZ9ek",
  "key40": "63iMHbghNYMF8k5PHuajqmQKPvFrJuYYWCdCnjc3BCgvzZoy5RP1Ys4BWfVFXP8D3Q6ij79MUSXaHNBzZ9Egi3Ks",
  "key41": "24DsFQXs2F4izcS5JxBXujuEUC9uGgpf9emfwKKFFWCNZ7Daxy4iAfBkC7wTNMNgYtTQuKcTEBjMxc4ALVNrKjZn",
  "key42": "4ddKjPz9BBzFh39EZtnk3JEmUhpuRWH2X3Mc3Sdj4vAmbZZ7b6J44zgnfUfPayKsP8JnRX8VAbzwiKfi6ZXJBiGC"
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
