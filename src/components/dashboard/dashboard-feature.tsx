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
    "8x4xxwjf2e4dg3FarfgjcX89Gp5Q2gSXuu3Tn9SrywrWZGnky5Bgneq7GQha2ind4om4WBCHeSeEmfpiSTipFER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ngnrEsPG9ksdd3s1ZA8BcUScMPUPU8WMoWJ4Rogcf1XMrwGZR11gANpsSyShBgW7T3AKo1HXWuQrkysFRCtGfDK",
  "key1": "4L2z6TR9P5ZjoxQrCwh6T9tVapoUppJvpPjfBfuhni3FUhoii2JW3rvYx7GDrY3759fBcdtoJmJfckdFQTrb4oHE",
  "key2": "Ut7NsMAp7qNWDT1jBHaUnrgMEdpnHwhERFKPx5jmpteLG3G6Qs8wPKqBW1A7jBw1fsmBwnAhgFfXroNf8WANDH3",
  "key3": "5mBAvZEg25ExUMAbasC3yQAbZC1e7GzvjXZXNVh9HQ9yMTTLUuCn4sreEXMnEeKhqsZmaUnMdqwNBrKyBnEhEy9w",
  "key4": "4Sh6zjvtcxP2E4siGe7uRaYRdFZymawUZLGB4rDZjC9YtA3BMvxvhrVYbzihkU7vSvBaW4Mn3MkRwKBbvNh1UQEg",
  "key5": "fP1M4rWK7ofLKwqp2QinPqgC89bMzrWkMv1H5MkXozsxSwvL2UbU8MSXuUahxaFXGM5n93QszaUdpbhGBoNP2B5",
  "key6": "5wkGMVPerYvAhP2LVKf1d8e4Z8wbZ1B2AHSBBVwXSWsLDeNbFqci51fwDFYQ4vD1KpoaQg8ABYwbxuYVQLNkKj6i",
  "key7": "32M5DD8V6nSE8JrYKK2FJmVomCw4VT3niNy6TjBTfsXjpFJoMGPkXoPxLNu37yy6m12ST8PqVKbXoBYbVLy1UKEE",
  "key8": "fyEdLtH6AisqkMd9jXitk8UoYL6upwKZqE1pbRVY1RWUuVdVsvr3ferzEfvvw3BykyVNiWGZCExmNRxnyP5Qvw4",
  "key9": "3wZi7g7fQeL6prBVeFT6pUUKLPBhJG7Sor8gadqfvhDupXzdY9Rg8y2UBYqwdAzcryqxpAVi5g6MnvS8LWzWeM67",
  "key10": "5x2zGqka44YWQSz1KtpMLWB2zwbCWdXts1CNC3gcUi8oT66NhHeyqWLwDgo15gn9NvX3uLpcSh9eYNAXdpHtdDG9",
  "key11": "561tVaD9Ph4WdpV2AY77nNgyd7cVANNRsEcnbYUFH1tTwr6hM2VGGZkHz8zhSGkReoeKmLxREokpqRRFPERrjzsF",
  "key12": "4VMWJgu1NMwC3Nu5XVUA6GR94DdwpE297c7RauZKCV7RaxLbba4y6ymrZHdevN9m7CcSvL8dsRHxouVXsFcv4BDk",
  "key13": "5ykxua3ztWypnFGnQm8mPgAxxEW9CXyzGJYJPK7pZ9xPfczJVZU3KieUaUMVZdWaUzAQBcczU3WUj9JiDVeVf4Bo",
  "key14": "3TA3BFWHTceef22LhpxdP8ssPL6Zw1TgDurMt1P5GmSYsiNjrJqfF4cyGp1iuXHSPHawDXNShbaNzdter1nEXV9E",
  "key15": "J5vE2WkTCGkxPoBPJDiwsfk5fHA8TWXQe8Bzo4wb6Mc9TfrQFjGoPXjJQkoTjaS7TgRWCTYNS7atjk5MSPadYF7",
  "key16": "5oUfD44aL7Y7emw4UZqXyWc4Zroi7MvYR5cutqzt8enGbyahLfXKaBCnqAuKKQFQmkyaeHDUZNMQ24Tmok7T4csf",
  "key17": "2JxDjbp4qAXLthuQ4gboNrQKmMAUwvxmpy1vvuhcurZtLSoCxPjskGGmQNa6Tia2BGjH8nWJBxuJRfx2v2PXUe7q",
  "key18": "2XNZKBPCCpztSHoyYCPJkdskqJDRXN9vxpDRM77Wptn1Gy5NUMVuTDo17874YjaM7TiUvxnbtFQZr2rpu8TukX1h",
  "key19": "5KrK1rJPY5WGghVRk2grc2CGUSgYfj74SPnbUQB3vY8z9dVFBRUkdmtyMdj76pid4PjMWKszqPSSKE9psaWFSKFy",
  "key20": "2JdmbeokPXEUo7yZSLo9ep5DPn9wrTT5TmNmd63Kjirj4SzKmT5vMVFHV1mgrTs4JfJqnc8wUBPVTFz3GeYfieTD",
  "key21": "JUsL2iJ4PETtAxwkDxmPMhhp9LN5wtmVwtrTicT3psvReoGrT96WbjYwXzVUkSV823Ec8oA7L6w8bRuwWENKQb5",
  "key22": "2KUvHk3PWjUiiJVht7aUUmvNXQ4mjFjLxYgwFnabn64Je2F4ZhkwHLZL1iY7GABHoQcwwwnsiqUE9JmXe51MaN6M",
  "key23": "2YxbBvw85FPLx3E8zeQLQQ4WEWZ7BzWndi1JKyXRLgmyji63Dm4AxomQCVU2EoS6rJomYRsSuHbXx6UyJk6hX3kk",
  "key24": "2H3vexy3V4FdsecssaLgckCHDys8KB1HuHPbVjCxxdhPMmHNqCJCEFx7XzJ4HCRqm9dG2Kwg8uJSwsUKyDHeztny",
  "key25": "3D5EDyHCtNqJBM5rRPavuHkomRqyqQX6Qb14ycnCuy5jHQrvEAE6GT2convQ3k7VqT8VSWyXGUyCYxXBaNd8Rxvj",
  "key26": "KL9iXtbQP9mRM94fKGgK5Zui1TQFCkr6gwyCFVugXCZJp7dx2w4rNk3cFjujgpHXaCcpBbDeJgaowjanwP4gtVQ",
  "key27": "4agFEXicLMweQ1ryj342jgmDqk2RAR89o6tCKCEL4hbGYJPyv84GujcwRUzTUp3HYDTzQCoYe3UxrNfYfieRkcBi",
  "key28": "YdGmLXrtLb3fbxiLaoYco3GSZw4m7oVoXvAg32Hnq7VjJM7RLMMp5pwLhpmBnKZN2nTwoF3PW68PmCnbTksez77",
  "key29": "pJ1rN65NKGsAJjnukg3X1Ju3PwwciGgDPCfUoECv3pqYBHcGBz6mdrpGpZAp6YWSNLM2uibqVxjCrER7byqF3Z4",
  "key30": "4NekHMPm5Y9WKq4BtPh6oFUYhvMidGaxyTgCa9y9hyaF6KURLU66oxExxo1bxxSoLqfbPcTf39bLQVDDVKEqPTYh",
  "key31": "51pFXt28pbiaHDafLchjnVKN3RjNYpe27F52JwqNwo8dnJZjVWTD5jPwk7UAYu7KfNwV5jNXbxYHC8H37RrxEv1K",
  "key32": "9bmZXDeHsvuFikMLBu2TGbcBfR1pcXdquposS1MHwQEfKcURwCqtzjn3U41fyBsCfHTzqhXdLGweF2q37HL81tK"
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
