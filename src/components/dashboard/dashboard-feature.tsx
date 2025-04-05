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
    "3WLuLg8WBfVvNhYkDPoDiyUEegq2FagqQkFTkCeJnkqdoCPBhwA5LDTYmriPa5b1Sygorbo9MCBywpaSeHwevLgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QwYiQAJsAhHazHTUWoJ4ghJLC3BNsnGH5sk6kj9hiiJfgyVhZL5jDh3DFwmCU96JZF6hML9SQDs199YWC1enSRG",
  "key1": "2qQpW19Jee3VXwEmcY6Yvg5t7k58W7fZgVTSZ95kCZyAdAUezJgpuq1G12fS4WHJ43Fwh4HRN1yzTRob4To2fu2N",
  "key2": "5rv3cMmstwq5vycpKySRmdPCSEoThd9gv9ePScvnt2SjbQRR1ZbAa4CMJ51KoqE9FtwQoAeq6vTnSCwMG6jxBsPd",
  "key3": "3qtMXtWtr1x7uzebUwuBy3wgXn3EUyjcfKcmDXDe59RXapG1BTydm3H6KrC7d5wGpvsP8KFx2uYT8fE8AJnGeXFf",
  "key4": "44hFfjhBLPfeXDMVoniXiJUY5e2cbdHSzCWwNEgZRH81oDukswyZobY1Sidh8NaHBbD636bCrwFno1A9CSEsazgg",
  "key5": "3pyXjLmz7NxYBZTobM37fAw8SrLwFkPjc3ik25yjdgBSWnuy2yVErbMCJoMzsdP7esoxTh6yuasUxrD4rPc4zpUd",
  "key6": "5XuprnpXpaeYMkrmCouww6NcnSrf9DP1qtr2ykCzQG8LBdWsBR9ZFGAZmbbT4uwKZ7u8CvHKBba9YbfeKJcMZ1iZ",
  "key7": "5s4AELTeKQHGRy4g8qWnsQpvXUwQhtnPzJ3x9eYmwoXtxvivFgyexsyDZvKsdk2h2GKtyeU2QybYVxm711wJHNq9",
  "key8": "2b1SRLwhYvXZXEZ78jUAQNpe4fNXQJsS6wMvg5dtGb5VxunUJMhSjmzrQ5Wn28avShPTd4VYedbUYMBcnsZgPBHY",
  "key9": "49PbKgMfeBSYVQxPf4mB7sAyZKW8XCqNM7FkA2ZRau95cJNbUe6KwnL2FoVXZQPoesYGzRYHTbb57MkVRG9wRnef",
  "key10": "4h1rFn7LpQDWcRjkEiHki72cwhKunJ82JDvpqB5b9Wx7FvVp74HEwDuaS2AhVix2ZogEdWGnVAgSxCqFhQva6NPi",
  "key11": "4Zit9nsoHm3MogwjrWgYhjyTYPYVpi8nVWhYXCV3259ad1KKXuCarsCQrc1qzZYnu7H43stMnCCgmj1h5fbktP6F",
  "key12": "5twtuhYHqfWpJK9xoBAs5Acs1JdzztPH2U4t7oXihc7N5Y6kqhuCwS2aLirWSsGhVQyfkYJmfS1PJY66CiFtPzA2",
  "key13": "2LW9qr3aecAGgvA2rjzH8jLWPaBnGuDm7Hw3VgyKvcYw5rJwTHBasBF1sWWXY9p6Bxf4tRUL1aaQGMCJkDdvxFc9",
  "key14": "53qRYmp4GKZ6xDowL5wJNdSZVnCdD788Dm53DRGTbzYckm9uSTbH4mfV7uxTXGyRMMuU8f5C6U6bjKoNzKVADAJo",
  "key15": "2pWfReGkYX41MY2N79EoUmVjm7dWgifzPGugoVghBJ3Yxgv1QNuuch68VXvH8UMmGyBBBmZo25q4EfjBvRUFrSzo",
  "key16": "34EyzDF8cwh8bMHWHv5xGfnZPW4XGsmLd6bCTJBZUsvbS6gkG7p9K3DBwikats9EmSkZzSgFS5eRy2HAG4jN7U1S",
  "key17": "65nYfo3xBLhLxeeiQ3BNEWpSd2tY9coXecBff5gLhBcZc2y9Jh5kNEssFyNn9L2LY1QrkXJPzYxsGEDgTVUHBSdx",
  "key18": "BubFpb6Fw7UayAva7rasDNdXBtDMTVhvZXdSY1SzLqEaCrYkYmyYfcKNNYiGW5TAkV2NVGqymnQb9qtrCC45AcH",
  "key19": "4nfqMNxrroUzqrV8v5yehCyHBePNnEZpUmLbsxo5vrGrpb52ebKrHzqg4TU71wEzkSGLGSjx2V4wWB56j7cNdjcy",
  "key20": "4fEbzdxkQ8BWQCUwu41sHER5zdL1jMaJHJpf8YmVBVRxCuoTTgfodnKNHVWpuQscWeFPheUbodd4Bc6TByNhuhPZ",
  "key21": "va7jgTJRHnS1EyJoGspCX9jiMp6n8DSknKe2qPjfVxQz4Wb2qkm4ww62NsK3j7gKKQiG9mRnoXMYtyQSPcreu7L",
  "key22": "tq8RT32mpVD2oZdLfG6YoqnY4RweekZDHbiFs2pKKipbxR6MBH5qWG3y7Ga6tVVEEm2tc6KaYisorjisraaYqe3",
  "key23": "29SCqkFveb2aV2Sp6CSxZbjUy2WsZtjMmkv1VVueRzevqYekSYxtKcFb2UfhJvkRgxtuTKr7WVmvt7FuCeMjAKqH",
  "key24": "5zxswsUnjbeEv5Y3YwAssmLLjwgrVCXcAaR1grA7e8KWLpbBZGFyCgNDxGsVg6G3vBVNsDC51TEU8JdrvDAcaqcs",
  "key25": "5TR2Y6gYivi5QVkKWdG5ZxWQEEf3CfkXQWHaWeJRW5DJCtHbNrmzSFRZ3b4GYrkSUcoN5HYnhy5tZ2f4i4Ks7MyE",
  "key26": "4TzinfSvYUsgKUfdDfWoXRebL7Am9Lt3wwGXdZcDbq22Q7tK5PWP4rni4MSQpt4TB436BuXhBLDZmBE3oVvBnByh",
  "key27": "3UvY9DkekarEbBRrNA1xAkaC34guK7U3qvoVn5vrLr2wAeLD2rwzT2qer1xy9AFJbftQTxXjJUwkWdadc1kwp1xo",
  "key28": "237zTssDb69BzFe1fHi1jXPjRveaktxkDEBXMDMzrywcqCSEAqtHLoCgDeQnfYAJyt3Lx5zZK2oJc8dfmywXzu2C",
  "key29": "ComzDg8G3eXKtbdv5MB8CfcBwcUo5ouiu82tARNNFn1Wc5FnkPyaFaL6wXt4v5cHQdYh2oD5kCJTE6ge3m6uJ4F",
  "key30": "LcVgbmSNfPVCFoEy798M7P9rFphwmxdTeFxh6qWcn8C6SdkLNiet4YiHfjxMqyxYsGRFpFBxnuct93P3WXMCYiF",
  "key31": "5kTf1x9EExBpSPtYb6WobA7ADbbmvHiadiwUs2HJK5umfGyGFyZASn8Shfru8yjtAed83SNZ7iqkDTa2euwQ4uGz"
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
