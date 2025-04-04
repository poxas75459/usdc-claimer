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
    "3EgJ16m954QwmXUXyuABMUssiLDduZA5AK8J2R3AhrUadaFQ8XT9vqvcToa3jRowLX97RT4GW8UC76t9dhNnYcsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vt4Y57Tp2pZhFhpu1ByXhqnRPfARTsoFQaMDqKPUBw7SQSVCei1R8nHe3nrXn8o5nPv74AEeHKCrYERjvueEj7Q",
  "key1": "4U3kbXu9wQw2hdmo2gHa7egUSUfNvasYFpQUoYgh1dakjNuRzg97NbVqSPUZN9HQXyqNDZXtRYmHZzgi5mse19hx",
  "key2": "391e1KcTT3JMpMdrZMwAsEeB8o1R6aqbL8s99vvXmv1CK5vri6mj7JvnNUfjqBBEpCinnZrWsr7BWfh9ppFbuwxt",
  "key3": "DPaUskkmZVrSjRaFwwEsxqtBW3TZU3Shjx7uF3rMkjkyQHgQyVmxgRYSGCcBm78RDX3oDSz13eU3wXxnb6jiN1n",
  "key4": "5cxnHBSpCDrbKfn4gL9RJdSeA4D7rQhRtJKgxCCmb49b8UJS9DDU2127pHsCUxvE1cp43fT2iURsdJJbU1ATPied",
  "key5": "5MTzgKVTRBXT2U4PSGPBkBJias3vL8nPptz84jsWpFqgy8WBNGWzZSvxRme9Fo6MuBQ91qSerjwiZtE1nqCDgb6t",
  "key6": "E9fhxhbnUxEx8kY8isNyt6GdfRVxJr7JfX7MCUHY5oKHoVvg5ABZ23eiTGTTemiAQMYx1X6svspDFAUiQJWY1Fe",
  "key7": "pdy4bcjUFMaFhB7oyiCJLkPVHHLAHJfhy7B8y7m7J8rggbYJuamXG7GCYjK9MWA5QXWQgw8XG5dEVfUVCJTkzmR",
  "key8": "QfJDeMoYY5zNpA16LhfGyZ3Mp1HBEQgeaxuzNAEgRuKm8fsdgQeNoFS17nGudcYpthdFcsmrQq1SJoXcFyiiwNM",
  "key9": "8GvPXpxEJzPdkDxeTen4374wJ3632SnceGPsWzujsGWLYygzHn8xUWr9ZyGJRvt9ffjYdWosmd5mwm5PCuntZQJ",
  "key10": "4q1Jiyy9yCW273qrsw4eehg9AiPZkJ5KuU8xByKbQ38Xj4QbDvdDub3G4xLBKNRYdC8zUyDxmAAk7MjMrgWnHxZ4",
  "key11": "3M9Ra8bnYxpEimYDKMjUrEkxT9hXGJZgPRK8QuUmotiQz1ZDsN8pSPQEEXLTepM9AYYJjdWVu871rFXxKxPbbAqK",
  "key12": "4ofXCaeN8ghLdmTSpapZEkrKKEidtCx85mMSHbRyAgbwmHFfzCWKYcdFtPc6aaytMBWupbBdE4sphRGLcJNP46sd",
  "key13": "2PXk3hi1w9gDnSAHhwoxwTGhcobQARSwFseaM97g9NS5dU8WgFQsggCfvF3WetwieubmEgnDdxg5vRVQkbgngsYp",
  "key14": "d9ZWoa2tGGTJacPru3ckPnj4f5j5sYwZoqiPC6tQjfymo4jqeACN4UbYjthLuF9HQxwnCeoBFjQEdwReG9vK8eo",
  "key15": "62xVv86VL5uqDzq6abX76Bdiqvg3horwWp9fK1BzGf1ZwVzducGX8mmF6MyezKcsEG87kNNsUVx6aCqrzApSfh38",
  "key16": "arDDJ9gvDwzBCbuvvryPMtrLvfbFJGoeW1gEjekLAia7RtvPVqFu6FRaVvL4k8iETNraV2KpGzWKNs4Y5Au8Mu3",
  "key17": "4LciBez93FCQ4u127iKedvKpdh5x7YqSqzse8ML3ArfGcLUJ3c61TW7a2JG8L5Qw2fKPwNa7mZaD5TSknLiignMF",
  "key18": "5gj2HkQWjdPsAuvVBpeYXxxJSGPUWwzZdgpH5XAHTiM2PYEJJ1yKtm5kKG8dGGuv2LxDHt8acEPmfgS9pEnow5Fg",
  "key19": "491VT2ipPqyqmGVfn8LJ1rRDqqBQ8xZ8UN7KgsrQcb41rcZmKApgx5XMbtHhAYSR8xWzpJ27zR2hku17inA8rYn6",
  "key20": "cX1cdU7dMG3hTXKKRzJYhsX2idnGHjxrQWjMFaz46hBREyqbx1toXRnCVaBy55ndBGJCzriR41HV6qhP474GeLN",
  "key21": "5W2DSSksq8X3PSHuSNxoJU6QJLw5ijBwDcc3pQnTJ33r7fZWMZrGPQmBmbJnCz4yqL1vv7L3P55ExtRBp882w1Zj",
  "key22": "36wGbVAzjei2YyXguqJYhCryWEPwz45MVbH4FZnrZpDbnRzkNfS961YawSDVEqxdKdqYUr7XnwSaKFiUsEGmUuzX",
  "key23": "LVTQaHS9cfpHWNSw5eUBLCeczWm1PQE3AAHpRrttpScGzPkr1QChENvV2mc7XPKzLUmue5ZYkxR8DytUngZVR7X",
  "key24": "2WFxndZyH7xtfGAWuj7rFEiy5YS6VC7NGi1Bsr9k8XmADYpNPf4GxzKHtG3EDaQDrKaWxh3hRo5yuhonBwn5Xi5S",
  "key25": "5qvug9ZKJuK9EG8aUcyjqERcrGeko3N33nEGstv8aBqWNE67st36joQBvBhM6md9RgppBQ61oJqEmCikvM36TZDs",
  "key26": "42m4taQ9xDxMmS1kgGNbcLiA9H2MmyKgcJaGmnuUMq6cLKrhcf3m4RPzUUEqeVCciQb2R8o6sM7epgjco7XFzfyR",
  "key27": "7n7RhBLLswR4EvSQhCwqZA3TWsQk8LVoUxBiT36dWRrffZpqv3YJQJYPgPFNTRf1hmDkcgpLf7swrLy28w3yPv3",
  "key28": "6DG2LxJE19ayZZUHvNvaxUWrZpzWZAqDvsULPpcECTC5pLJxcSKSFnbSjvbZZqsQVdHPnTeuGh9q84TcZPKsZSE",
  "key29": "4zSWMFFtUh5JNtHmzm6AyMpEQq79iaEAcVrdo8CRrymeM8CFivcpdzchjdLBpm6grP1eRsRXqDBuFmjYUnGnVHGJ",
  "key30": "oLR3x9LkaAhHiVd74UKUtbdQYxShkyXwWchhfgN9Ad47Erc1JHkUTbYripMckpAUEyEXxRaxAHcxoZ6iJ55XNa4",
  "key31": "3zvF9EN99nrTi3BzwdLBLqVYoPuH2ShBDu48quoUaGYG31KiFpfWeeizXkDbPDTnEQGU5Zj9949ghrALSpHHNKzc",
  "key32": "5cVMAnWishC5PQydsFAG6kd6G6L5onpjf5pfX5Hr8TCCPSYBwoVvqpA8JqgD8mxwPdkegbx43QPUxsamTuCqgUoh",
  "key33": "2FqV4bHbDznDDbjVc2gwatxBJaTPw1kgeRqLe9gpoARZaF2WMvZ4F1bEr41WD2CVtSmHCzusLZVMEyyCn174w3Yi",
  "key34": "VQPLFxzdeqP5We5B88Wte2GaqvBT5PriPfsXXa1Cv6VF3dePvkk4SSvY1e74WCv2BpqN73KszxdMu8vW7nFaLWo"
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
