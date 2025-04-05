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
    "2dQzLJH4sJz2Z4uTgeCtGa9YToJzyvFUbSvJwuqbKC9ayfEFPq7a6eKP5QtYyLyQPzSn6kFRF3AnL4nHBnksrfai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Ei6oLNrfZ4hLLcYSCn4HDT47mf93B19GmcQhetLmY9JvCctSbmzJDZSr7oYJF2je1rDsnVCrqKv4GjHhxEKi3a",
  "key1": "3tmsFNVAXXQM2VxLLx883dJfACbMJ7oyoHVxC9qoWcL7GGJXajr1JCQPFYsvbpDDATKqHbRXm8es7KhrjwHSCWDD",
  "key2": "ANVXMT37XJfEMvKL669H4EjUMvvZwKDRkdR7bFZ4DpDsdAn4estAXqU9Tnf8NFZRjCsgSWSQAQUwS5kLcHFaVJh",
  "key3": "5wY2RSg5hQTaXcKE1Gi9j5EDBwsC8HcTxeVA419mKKMNKojbU7cGxKG3TR1TznuCMvfuqK5WgZE8UmUebpyu4kMi",
  "key4": "32HKrRbFUEBrCxqfQZmcnfwLhYK4pkjzyHc6x1JbNJn6yLT5TrhKkrBw2XieYydPGkdMMuuiPB4jxLX6jxRanzv5",
  "key5": "4W8HzLVpoFejG6hJrBYQU58fhXQmtQtaS3ZgYPTpd83a1vg8mB2owHj9dUwofq49oQRPbB2sXkDdn6GJMLBJ5Aea",
  "key6": "3tL9mXFNnKtDP6sQqNvxfB7WWv5Py81k8biZ76tdGFeWVFtmvV3RmFWwjqPgv6sbWvbw46K2NgPwsTq8kkdM5PkV",
  "key7": "3SNGAJ8BxWJarcDQW1KjMynMJcrrvzYqpRB6aAdkDyF3cz53z6KYqBs1oiobxt559DKSjDz1ARBkziNBfUPz1yGJ",
  "key8": "63c5mczp27p5vTTmAqM6ofjMQdKxy85qxeFDkKhyxvGRpHowXNj55o2C2rQkBeGqhufPznz2zXiezfURDbqYp1n4",
  "key9": "4f7c6wZTxj78v8fpNf9FHuJr9fFk4yB9F8rDYRK5Vsfpmzx84fBfu8k8NwyEngxtSySqZXD6yfs6MB9y2uKrueCt",
  "key10": "26cynwzqeGhmkauUEubaGH1X24F8bVoBxfUBp6LamN3DTGusreJDNB82toWWUWVB1FgpJPWcVaDDUHsHDHbfZ7Dw",
  "key11": "5QvHMcwoUCE5t7zNYemXqkH9AUUvB7wpcvyuVeAkfiY7ZTSUvwmZdAPYFpaAEt68THeVK4pYTvqxaJqYcNQM6xz2",
  "key12": "5Fnm2MrVGdkukrTfnScUmpR6GCtrh6CQKfXca72petqsCFVsdwAsLJrRULBxmz2qNhDp5EXwaH8RRYAZd55u3tVg",
  "key13": "3xNwjyzZPhcuJ5fHL2gLFRmuXc1tSk2sccPDERfSanfxdMsevfVzExngj5QrK8Hnwozu2xHw4v5eqp6s7yqkqAdp",
  "key14": "rfbTSEa5nndfiuHf3es74r1DC4z6oWpjou5NoiMLPVxZS5ixKaaPY3LStuqYAt8QYagZY9nerDLjrokYZXpBZPf",
  "key15": "2tNRTsCcSeYKPGTn6Wf1MyrHbZ41VQoruqMVgANcBNrMrAv1LESfbBFNNxdsy4c9me9zbthSQyHtpEMvKSXKhYak",
  "key16": "2fCELHY1u1SP1WsngScKxR91ixnFvSnRzn1mpWdaQZKXxabzNG9LiYVXg2DF5QLF4tTcvF8JPHrzcb9zta64L5HA",
  "key17": "4kUmwRiW11UcrNBEjuGTC43Qrgb9TXJeZzxkM19YejmiDdb56ufM5BDBLGwAYw4oAJSNmcM8Qw3E6mwgr3RiriXE",
  "key18": "56jKbhJxAjehvgFG95tUFkpSnPb8rmEoB43uNwALNGPGPnsYv5FyGcQBt5uQGx33J6aDrdXnAHH7htFE7gyVWU1X",
  "key19": "2jd7UQi714XDQm2cHroBiXGtXGPAjHwFAzBCNxVMK2Uc68iQKWZEKCLF8iERV92bX1eCzKk9KDUirgtAoetcM9W8",
  "key20": "4r5QzqvBcg5PErEStxcEKzkpuxYGmqTEvspTMv5aZ92HFcRBq85hWwQ6CcNuAuNZPPAqLLfiA9GEV4jEKSUjjksM",
  "key21": "5fdmqnRfiCfK6WUE777M9KBnVqonYnA7h4jH6hPLswN337EJ9x1JZkwiM33JmwMGSKAyuZrCmhNq4F8zLv33VZUx",
  "key22": "37e5wvXweMxVDpHAc5APaw7owyhbPm9KZnLFRpMeSGr9NE7wHrQAuFMWvMisKebmoCCXF9nnQB7n4g37vQ4EtbQH",
  "key23": "4BT8X5WBaRmWwbX2w2EnmSyPnwYyjcnZ3Ax5oYpJ7RhZmzJ6CZkQ7eaucd3Dvo8NbPuUbSxDLEEsyo2wEGUXPjDj",
  "key24": "uP5cASS8eUQS5j84d9F8rV57fDa5Lvz6GL7grEyD91y1KBuZjPteoaNiTtCV7VEccGVaGJi9BPLaNZdP7E5tJe6",
  "key25": "3sNFtr2Ka9btrPrxCwavQcXz6bSBFN9yUgqSXGGFmTv3odbwaFh3oTLQUwZkY2D3nruBBEzoRtMpohN91Bi82dHo",
  "key26": "3iTmBtNBfpH28jHyQdRPacjGiHpZh9CdrokqSkEw7evmUQf84417gmhhEDJFxev1aRVCzvhhtFLcq8XQeMDDSxi2",
  "key27": "mrnHCERUwtLes3biBCH5ePTU6BHmcHYNjzY32J8xYmT24fG5stXRi4x6NAMJDGVoKd8hMCK7bPzLkUHwZfuWJ7T",
  "key28": "2w6Zq3v1EvviTDkwc5sJzG2S7GzHVDppGfAyssSBR46VLBVVuirSL6z3sofm1drTeYTh5PZkK5DEMmgSLVZzdW6A",
  "key29": "3U49WvW6PXwTaJJV4CVXzc3RV1vq2hJTbVjUGQCEshgySoGSQ2dyLDxeGiWCo2ZieUoA42e1JbomCt22xqsGx6d9",
  "key30": "aWxw65pEtpmNeyoR5cYHXkmqe1eKsaoEHhXQEC3apTCjirDpE4nysPXMNGNWqF27vgMA7hmJFSkaE5ghustyZox",
  "key31": "3JrB4JgncCT53hKbePXx6GbhNZacmHTbp5HHe3hMDthswzqK6AzBaKhdMBhHZkC6FTfx2iEfvQRsr4X5CiEFn9gM",
  "key32": "5ijbAEb3WMszYNNiccgAFKJDNzQ6C3nioV6Z2hvK3zejEe4hy4EjhDgLryM4XJ3h2BDmcrGpvkHh6QjHf8giALLA",
  "key33": "d3S1zyAfwPVJBZNU8LN2RdPLCh3Tnnsa63MbpahBpa4kYq9xU7H9UtDeLAege9fBWmAB11QCoNWm6fLLutG71mX"
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
