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
    "tJwvdTzqxBRf5xW8is5sgkcPbviEiuXPveuq4RVdWCe3xxNyZk9mTYzYYFWcDjPSETZJgFthHs7ZdAKQYpGeZMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s4a4AQ3GQMZMD2DYwwmzw6UhwAGBy2s7QaYDz5y68tsWDrDqRebju9QdZg8DA23AoXHiZ822gJY8zZ2CvDgnjPd",
  "key1": "39eatqfGCUms46fo2N1uinA6tDuKQmw9LU1qaph2rq38HTsEnf853397MDAfEPS66er3bTFdtHot2S4f2uLpkrX3",
  "key2": "4UuDnMHNsipqDsuDd6pxUSUrizzSDwqLnJybxHkFne7DPMdgar5VcVrmE8TLS92imVK94sHFmMAyJWfxoYR693mc",
  "key3": "4L62cWPSwn82eoxKLmQoFNr34NWQbYqnWsBtQPf1hX3XmqX3FNpNE9VVbjgeoVEYrpdcsfBwkVHA812NWAuRiMct",
  "key4": "5Vd1osuAstNkaf12miUtwqW8TGxLMYU8iydP4vL3vbSP47JJZ9pvygbzZ6qGo4G4SmLSZuRYtQ3rFxqFA4A11QMW",
  "key5": "gX9cSS21NLYMEZ6UDUokaKHy6jiAkRTvLhsGkah49idA6Y5sWaYkg54pj9d4jytSgHK1AW18kvEB3BDL7uasrtf",
  "key6": "4xBmeKBujFsawaKdYg1jHSqcAVf4GFMJc6NYvgrmEmWoJXf4886TXAMUS4HXJcPWygji2fmy8GrKi51CzGmMpLCe",
  "key7": "5TQ8tjLjiCpa3E13XS4y7P7gmn73zX7ZUzksHTqR4sqhWQrk2E9uKSzPKpFTWq4EcJunpHPVcXcPDhkvaP1yvKj9",
  "key8": "27LAZySxn9cKfbBzZHtMtTC1Z7QBvB2UG8j1NQQPZqc6b6K3DFakPGBc3zGERpmKKviedRi1ibVZ36ERsmvgezjG",
  "key9": "2BNPHBeAh7AxAN3hjyFo1DQQb432U8gfW2xqsdpQPuPDhvTKtJ8YzNwj3uSry4pYyrf5pm7Nx7xHZm3scCV5xSYY",
  "key10": "weh9Nx8ixp2rsGqyVptKuMJSLoEbmiqx1jLBjCERXgoQv9eoQFnBmVCMsbD6CFx1FUrBi87BXTt536PTPDXabw3",
  "key11": "4KC6downo7ha9NZxa7QBe5vBfCffYMqHxyiGxSwPoNbt65hyx99eQ6XDvw6yfcMrKUc3ZJPdfGFZN3VJMtkCF6Rc",
  "key12": "2i19BHMHHMqaXMiymRStenYpex8Hro9Xw1NKJ61YBS9H3BPYvtkw1MF5sajKGNG5akdMASEx6W2eMoZE7v8Cs6P4",
  "key13": "24E5F3RqScUwDh7SGP21YsaZsuiH41ndgJT5RN8sp3UG937JpkSK27rzeACoknryiLgaegS5uw85S6rHvjbhQmvC",
  "key14": "25Kkm8BM8rj1XgGoYobUjXPWCo4GPYhxCzHEB92zPjiBXvpQasUUef36qAq2ZU4hHg1xSzNQEoM9JAS3QWc1DRbT",
  "key15": "nfPRvDytUGmxTbZ87gg77zENA1CtoBgWrggc2EADFrQwhmXjzo7m4WdC6rrVtMVNomJ7EjPJpeu8NFRKhJAFbrf",
  "key16": "5F3xSptCg3swkonWSdnMKe83H5ZZvmBmTWHzHeiBPARy9JA6uobZQrsvYQVt9warvwP1Nmsr2hh9iGcEZ5Ch8BTY",
  "key17": "26959Qvh72BumDJ7yveKgD58bfX5kFH97Pkzk2Eo2XF3DzBs46DV68miKvvm4M4JhnfGZ6obN73CXqGszUvgchVV",
  "key18": "2YJWzTiyg2n6GTJTXA9yqTjGwai2wkPMNz7gJVb3o4BH2ph8PXCmJebPqfoPRVEb5B2Cw9wGfmmN9zY2k2J1nMFA",
  "key19": "5zhdZUfeQNQXxj8EdKxbD5CD3opzfFTbcCducAQobA9BWFwgE2raCH7o6faeErneZa1rGezFhyhzp43Jy1rTnrXd",
  "key20": "9EmNdsNpfLFY4Y79Qdj5rdoWwZKzxxiHjbZoYBZ8j6YGLyd2RFhBFPSnPDWfFnFfDPAtd7NVFGKuRpyeKCJbcTz",
  "key21": "5xYDp85P6MC7jvaX3J8A6zHyekaoLMzgucvpN3WgtN4BbUA7bE94tRsWqtR8niaGZDFCx55G4rtHZxjQbKZSjVh",
  "key22": "2pkWKPCeJDS3cibG5J95zmBKJ8gJURWqMJCHHZG4ndcWwFbBfQjAnj9f2w23fTsdfpKLkDpmFmSLYpuo62mQyT3L",
  "key23": "5m1G2cPr9bBRQ6QwD8GFVitpCEkALGNVGkFgTLdcBhtT14xaXfDzcp2gGcojWNwqjqT1Fwkbb1AXoq2UrffNHfwQ",
  "key24": "2WvQsuGjhdQXbQWitUkkR4cqkJ9bMvDQJk5JiJ7kKVTfecVoxrsd8y2Z5FciADJUEdkcS3GCMDih2ay8aQeCJncy",
  "key25": "5MWTAzbvAjDZe7mjqWfTJ683ZFwSAfAUjfgrrNE1yum54fLd59HnxGvkHACizf12kSgCBmeqh5Q8uzPAvAEb2rXX",
  "key26": "4YmGta8uWC9X3wPAkqqeKg4nY2FiuZD9TxCJKDjXzQXgYWwVTRyRjuk5CgF7aLzU3dYqMCc4u6jqMgtKi1Ss79GH",
  "key27": "3wZ4qGrLK7uRNYvQj9wvMdaZ2ExkisAqfX3jWEcVrPxLkwxGjkTLCNaUkuDo3vh59rMupsBafgoCQNQak4AAeDQZ"
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
