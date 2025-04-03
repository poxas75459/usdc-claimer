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
    "2QJwM2pzcMhVwU1iXYCLB8y4vdLRiJzUqvP5gtMgiYp93bPezjVANYYoSuXgkYaH5yQbmecXejruZ77yaYM4k9wP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g64kMZ7131c8YKVCuGGeyvC1PBayj4XGkCC7kMhhRUN4AmALd9HKc2YHM8DPjEDyYc1FZvhnkYj5Kw15cw7LJsJ",
  "key1": "5wdfBMktEAsQmGFV8Cs7eRVE2uPzWxCvdCrTr4W9uzpUFgbQfKRSPgZ4ZtZ5kiswQ2upHv8EJgcinVwZYG9gDCFY",
  "key2": "4ghCiUEjXKpaCQhDamVYH6gxrZUCdtKs81BgSGUBk4wU94V8THFyUr6pc47mbjPsPRtP4EwGGc3Ry3r88FV75JDy",
  "key3": "3ZuLahDGwWmxBe3sHeJ3weiutHjMeWJBsKLXvMS4vsXPjf84RbuLmyk4Vukv4qGU39wD8KTR2PJ5g91Yi8zEqKap",
  "key4": "67UKDjPeavvYeKH38k8qM2UriPFX39eN8C4aihZL1mUrZxQspEdkHTrwpTa93DyLJfmmE29ACipDR8hUDTy5nDSL",
  "key5": "4hXRfGgDzXj995W7DsXeCNsgkJAon7HuqcmPSnMuhJSvGMbuLupV37e5ixWSsHNmgA8odGjA9eqaUDejBdgKtu1A",
  "key6": "2JhT6Eukm6omKo9sz1ju2XCQfaXnGhJqptrG9hW7QdN3EBu9NhuRhnCuiNwEs6wnPGW57dkpCAx2HuqHAgCYa3AR",
  "key7": "5bvMB3FSQb9wabjwLBxAhTpGdYmyxzYAHvQRFqWUbBwQFy1wJ6u8jecXHcBLrcx7pgKm5W3hdupad5vJFKPakrtC",
  "key8": "3UkVwvukYUsDLhe63mNAaZT9DioqSasTYXwiNnyPKSPMLA5cMpXhCxkCKX2GRgtBiP6fKUyyKGH3FoqrUhghfKMD",
  "key9": "5EjsNNwQKhD8awnpR2MJ8fnr8o8YdTEKomeyMRDxbQ39kKJjPR38hxsnNZUoy6m4JjaKtjjmjhBaiEWXEzpmZGNR",
  "key10": "4sXwqiXzLY8wW2gKVHeKUYSQdFuBdj7LdN2wFJeSD59S7TcF157BY6ohoWQ7J8rMMFGEkH8rbTdLCMJHHaCWviHW",
  "key11": "cjZ8XPLh5af4YcfoJbi5LTSTPa9VwCkKfgTK6vgCWqtqiwhXm4qtG1r6uLKfxis1J86AE5kvfNRQZu1zxwuDokM",
  "key12": "NSSuL1EBD2LY3FNvXQtEzZkMhaoskRBuX83Pq2pQMwyAnhcgwnXRyVYRK2ErLRTGRHgrvr765xA5PcxTKh9jN4e",
  "key13": "5Hm26wKkra7ocpSwfjK2UDNREX8yPSp1tYZ5saMKBAN7eVPRSFPfkVZmqW52MbainQ2KkMcKDmbJyzgfZkWxjRhg",
  "key14": "5Y5SjpMgfyvCsSfN3dbwLkCB2FqXhiwrQidbv2jNCpp5xiaern9NUCGo2VDXjLoU6E1wtPpHAgZufoPSPrxKLvTC",
  "key15": "XnbWGCXEiEA1JELmXSEWmce22EM38EKsesm8BnTcioURLKQVh9vEQeuiynoNf4hh6F4yJQRzRXXeHHTgu6AhXsb",
  "key16": "3NKp8VSZswjCA5Hi4o25aNTUXjNNczg9dtVxW9CK8tkVU2xffkaBWsLp1m2VtKSs9G4HLrvgoRA4aiUttN79d9H5",
  "key17": "4VxgHJDVedvQPLcuQEMcD45YuzJ7PieNy3mp5363vsGANDAzy62VDJFZsiW4uC2h6n6HJjfNtrwGLCShz9JjjATT",
  "key18": "51NwSU1E7LWTBHb2g3qsoPzrNACuCgjDPUBoBdvcHrL1PxjEpQEij1pUWCZ3K5knGjifXL6hgkWThgegNAdae1om",
  "key19": "656x9xdfCSQqAHtmLcuxurDqh5qm2arNLkaMExhae2xZ8it6Tf24c1TZ5QunG33v8SEpiMtcynnEndWQLF3aJx8h",
  "key20": "5r7Py2ZsT17BZdaZb14HE7YydZb7EQ7P39D1pFG6eC2Vm4ETS2DkcNM2XKw93EfJ5k7uEgpfPew9tAWrNRvPTL64",
  "key21": "2SaHBcxhnfiDBCra7NQQ6C7v17txo8ufT4aBwofHLWBgbARkunac6xXuvskG99R26Yc3mVBD5HfbkptWC7KisNMj",
  "key22": "3rTjoTNEZrPMTr6s5HPfDKCD8oaMCd3Xs6ueaWtix1fy22i9yaKAdKsFxirDuXNhRE9b7aFUVyoHUMYFxz8DKKF7",
  "key23": "4Ms4BnMuKMg4DEcekrmi8Jfj6SUmw815MUsmTEZGmx1Jrt9NyQyRwjhNRXhDR7H2rfP1rMa3XFbAazB7Avis63VA",
  "key24": "5gucb2gFFrsaP2r1cHgPfbvqPKFfxiu3uQhqsxurSJ47Gj7e7bC6ZBZHZxwYGSWfBgBXNrnoiDsa3d6hmKpHvf4y",
  "key25": "4ogCKM5EHW3cdVJUpkPrYfDYiBb2e1xjJ8f1EiJvDQvDhXsAQUFFecFitsRLCBCtZW52F4KtBsDv7qwnEfaxNQuK",
  "key26": "2EC2NE2gm2Bnz78mfjRaXrpipuUyB1QyMBejm3Sb9wUB1ACPhfDBgSeseEKvRDcpxNmFNA2bm6mECHcDVmzsRec2",
  "key27": "5CN7L5soEnzfdDjAGyZ3Jwyf6uMfE5MXkJLevZgxsz8g6BXPMc5tqQ5tvbmsVEESJu3Qmy1L9UWEVwhM9xYzghjL",
  "key28": "3AHV7LKpnoESdtYAnKRhmjVEkaZ7tayt1k99Gaz8ydBnsUpTT8t6Ngb2d3JS3wbC1pY1LNyovuq8fXXCqrypXe4f",
  "key29": "2rqQPnEPna7d8CZx843BxwPYnT8dGvJZF3KoMDBxm7YruDC1JSMUudKjKLiYPLiXBU3SGBQVaiEGYHC1e9EjYaNt"
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
