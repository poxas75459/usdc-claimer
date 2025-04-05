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
    "RDdCgeWjUL8ud7iaNoGHG3MwZsZcE6mmLnT4e5JjaL4rJHdXTWQ74MN8KFWT8RVGKbmcxhPFmzHySdTr57QrtTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bRTKh9FujqsizJEXscGowebCkFjxYuTKUk2YtzkYD7gZRd1GEq8A9XSb9cVFFEeWQjbXWDbDb42LHXViVLhoBcG",
  "key1": "2C3hcNRxH6CYH5XX3RheudAaTE9F5kWs8oaddYaBZferMCN4m1rUcQ9xKVw6EeYa8XYEZbTUGnb6qXqURW7CeFNp",
  "key2": "3p2Qpis2jurRmfi2KVwFWkyizEoEiUE9i8wxdeKNsjWtxvhHNSimCxdiMGgASCYFBsZ6YFpEHG4ykmyczC3AB1bu",
  "key3": "HDEghUEkZd8P4oULyPKh18nBT84VgeyUBPfzzRURQvjTsd6yQ8tq92D2BaGqacNRy7p19mZ299XgpJAYML7MuEu",
  "key4": "37spZreh3rYFy3sXxWsnJKPP3WcPGBi5vYxK1rsWw8mwNtxiXUM2QSUzkbnn81Uad4apWkV7ieqSoNwiizK4GjnV",
  "key5": "y86TqUrZ1QDbWBtAfktGYLPKVzzqc7XSRN1MBiaVbd4GcxDh2rWH6TjBhormt8TBGyiVCG7jGnhFnqWPr6iXwyd",
  "key6": "S6ZFR7aiRuChWE6B89wdFxUYwjBFBqczo6ktDWoyBsmeJyp8Gw8ujyT22iN2wr6VGm2qJSsZK7f6P5qK9bDHXCV",
  "key7": "BbSZRQGwk3pp5hrZs3jVd5E1VbQcjxyPL72ZUzPTTRSNZaY2ZibBN4hz2hbyCCYk5CdDKX4uN7TJGfkfEJnViC6",
  "key8": "3FoYzJ2jjRKp1EdDsdgCMRfYoE1pFnnHejDRKVeHtkGWpJQxfWfVdttvKDdUNeZur1sNJ1amRmNgE2ynJLxNdc7K",
  "key9": "63YDR35KWHcxcxaZ2ombKo27gvnSL3zQMP9azS5KdT4WggeE1KEEP2n2oekJZBMZSFLy2FEU4wg7v4fXQnfTMg9G",
  "key10": "ZTyJ62BvhMTvAPZZyogmN1xy1iabLGxQ9v1ZQWLsNg5fH43r3GRgG4Gv4MPqCZEwk8rNz14EKbnHibdNq2XuxpY",
  "key11": "2fvSEoPnjBbWXtvTnP9QxsQnChCvefdLWBGMLSACuQKJsSkhZiAaAcYZay9CRu5AG3WW1SgD8kTDkDcn1es7mVkN",
  "key12": "5uKwzvGE8JGjf5WSeqDedRMW7aYX9AcE1XEeovMUR7gGxwbwKthtcHona7BY4C1LpGZUTygyNfox29JREjiosTx7",
  "key13": "4bYeuc8cwDvJhpqCASyZ8eMBmz6a4NLmyHGDaeq72YicNyBcAgaXAc4Lu6xNVRduf4tPL8gCwsWCoCfW1AhX8hiv",
  "key14": "45UYBQdtnEdb4VLAwCnRitJHajNEmNFms1vDMTQiyBsqn4nMivk6zuvrk4NYyJXz1J5J1oFXevszsUWziPtZaQbX",
  "key15": "4Vbq5WsR1nRWb8Mzy3Sa3yzNsUnbGZzs97LrjTn4PcZFFTTfEnfBALSA88f1urFu2WHAnU5inRzwnqLvnzPqMhze",
  "key16": "wu7HUEDRk3N8RkxX1xoSPH7pp4dQSBgxLYfG6YUJm36cHgbwh9H1ZLTkFytiT7w8K18SnP2fjeqA9UQFsMkcUVi",
  "key17": "5FvWq4QYeeTQHW52HtJufT9azidE11P2qePVuXjp8uXMiADH11v5cTTu5EyCGHHz6oDBb9GSBeK7BAJfzRiS2bJH",
  "key18": "5AQwxhJ9GVGgfWZAzRLirS77SWfWvYxxKGounusiDD7T4QSoNUkyvZh46xEyZ1cTv8pakAELuNjfN9nEuxZgQ5kt",
  "key19": "fJRKPsSEC9YrKnWGxiWRx8P4H6PbG6KPKhrftdSr7zCzBtP1mTQkLDf7Ge8dRwLSBYiaeNJqeK5b1prb3kueYHq",
  "key20": "34QS2xZuQM7tnBajG5etEKyknLUBwyqYXHDzrGGGGJn6CMEcYJTuwTU92m9nQRZ4WmsgqjVB2NLkBGFJnjUHf2Mi",
  "key21": "3rVpHm7xVsZekxF4hKR9iy2shEVFEBw1gYrqFAVqe8iuguTLmG1t41TR4jmdvjmj5GAus2s31fiDt6tPkQnKmj7D",
  "key22": "5yWh4HYHCPijcxck7vGKb2v27dYgVVrPgweCXhaCsVBUqbKkzbhb8hPHyYvhvtUa8qsHva33inEyaryjsBRUFVtW",
  "key23": "5zebdde2BQ9s42U15FEECnWcPYiZTbvvFnAu4W7Cz9bWV9iHsQDYTUBWjejPpspChvQGHQW11LRV4pE2anJ75iu7",
  "key24": "4TTvbMiSuUa7DyqfwWozyjELfjG1w6pJHKQVVSJSYNxepmr2pmU1msyuMDquKYGsa5YWbTFeCSADGeSrSUmhrncc",
  "key25": "65Au49xjrzsjqbwtmqjUbKCybvjPsBu5kNcLSrufGtDZT414XLu5GSJcbSFjfVvdZLTTSq6RSF1xrCLfoS1eeeX",
  "key26": "3skGWJLWz56KvsvAgZ7saAA9TzUMGXhDg8P4vn8YczeaHuBA1RF4AVK4RsUx2G2p3Hwt3UfEMkQ25MQL6KH1o27m",
  "key27": "65DvvPW55agvMz14vVhgb8HDzh4FXk7dsUfQUEY4XvPiFYzpjjNYib3d9LE6QZzsnaW9uzbNJJRADJSExwH8t24Z",
  "key28": "4NXM1KMr19b5fGJFmpLt3dg116XuHFZTAprTrd7rGUeZCPLFe5rJwhCPFwy4VX7oTczyjhS2M9QxDQWn6PDGWErU",
  "key29": "5R8Lt6Bx6n33Eum8Qm9Fu14cvqc6jrGLxqA5TovyJLhqXebNW8eD4gHowBSykADQHGB588z2XLiMTWfAsAf7pE2p",
  "key30": "3rAAp74Ps4U3BTikjTNeTmJdGYMNYxKPHEs6kQGp2RjJUQZ9sQWzTxN1qe5ibuZZ4opUkdLzzLjrzt4U4dJ7jkSz",
  "key31": "3f9C2aeCWjv4QGs7PXogcUnoNWi1GcMVVN4goYkM51JsFRhXEDQYnVUBTxmNt5dvjAyZ19ggXqon922km2euY8D1",
  "key32": "PaFXA3wjxZQ7n4aJ9BAzKrXr4wCCcnkSp4B18WsaKdKGtd5J77q9DAkXDJSW6S3PveaN4JXpqNiKhXVW1b6erQr",
  "key33": "VfFhDTtwNbVVTrBKP8QiMPZEhTYF9tDVpTbrrZyEr7eFVrVi1hu4pxgDo1DXbWCBuuCMKFCJ1Y3qwremAx5NP7n"
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
