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
    "5jcBcXh5LH8Rgds3mipyjdikAhD4zqVHwB8GXZYsDUWtP2BLRLbypB3CARcrTw47zyWqJzwQjRZeECbTR5tHKks6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JHf2YjRpabYDiecnKjhj4CMH1dGsd2uTze9X5xZuejyGCHG7Mg22CQADtbQKETLo6XmwKTi9jNnQ4J8G3zusqRe",
  "key1": "67FycSBzHABH79rmmtWQZuYrwbsGWx87cJrVFCHoi5PsNPvcw7WPtsoehrozdj8LMiauMc57KoRXsmtthQNh4zSA",
  "key2": "3gPbLnWbMa4ennnnHJLXL7mdXpmmHwEAfkrJofstzTRS4VBRTY7497vpVaGZuoTvudTCFKBJKPtAVmmCDBkdSMJe",
  "key3": "3TYMBeL2GRcBGLfJW9nmqdoSfc84QhSSdLYdDaqFbYeW8jQnBgbxDM4XyPVFESWdo5ov6sPx9Cx1VyecexBK5RZu",
  "key4": "4LQJvqEpEVDspt4aW46pAzCn5QYLubas5yGCtHaxt4hwiHD6wZWgvDBK19VL9px2qVdRQSaCcghs5gxRWVwrFVbd",
  "key5": "3qNTM5WTBrajEt8fUjoQBRzzq3s9U3JxjnWTK23TQ2BfyiVHJMha5is2Q8d47UpgWKeGbXyocz2YNSXCLsC5vtkw",
  "key6": "5zKH6R7Djwirecj1MCoJMpWTu2r5VAR4jTY8t4oUaEzKusXmoCgXMaZpptj1dzEyATThakXXpNbr5Wcag4bg2fWv",
  "key7": "2LG3BqYeVSKdSMvhCh7xuX7xFyQPxHCkecRHWvzwCZMpN8nxEs5DKc2W7Eao7Rn1xCTGsMZgXo6oeTsBdYihxa5M",
  "key8": "4pqoHT11z28QYAkxYNGtnfbGwhWutgcFHyhG2a6wJpTR38Yokd1FxoJfXu8gfgjEcZpfoiJ76TbHDKawWrXCg1uu",
  "key9": "3g5fMdxsbbNRmZxVF7BtT3xmcvFm9zQhM4SSrufymkp3LKeYXvVFHxNbpojp1Y6MwbU51fQbwdrYPuJeVGAuK4Lq",
  "key10": "2f8n6RZgyYiEbdU59eTNFwYb5whuxAvVKG6JRqZ1i63kfvB7agzBBM4ZXTaFaStQLeJAoT7EoMCXCJ9QwgUnAmb",
  "key11": "3kLiwxHGS3PHCDtiH1aXTUZgHp6KnrjaZoWwmp9BcgXZ8TadvKnhtXF7EUJZg8qGV4L66NtsRBsDjezCteQ1yhye",
  "key12": "3zf7Sd96aJ4DeFYiibNHiBTM5mMv2qBGgM4usVbc1HCjxh4u86M1DJB7eNFQrNPqz2NGBAnXbVQVBDM1mxP79Zt7",
  "key13": "2WNvV5RKfAaoNX41PLczqFBym98CQyygbcB7ziCdFDj8urjcZcnVd8sU5AxeHgg6CmF6VgqzbAR4S4yqTeeAqFz2",
  "key14": "5XQb3e7q2my4p3j4Urhxu3r6oLhF8ikdooPZJr639HhoARLhV1yRmaCHhTigLZfKYCfxycr3XkGVDvuzWidVEkhB",
  "key15": "jPf38R5tCyAU3mSAiGZJb65MPn2ti8DAFZHVYQeTaqx7iTtooujhGGH5mBGUaD4b58Z1e59zsw4nk1aCFAnEfJL",
  "key16": "yJRyxm9JuFyNfzaCfS2vAYWLEUwDGZCcrDV8NMYDFwUns943g1dsTumigUg4L9FuERmsvSTAajKNj6qWGTcsqsU",
  "key17": "4KZ3KvpbP6icJno5eNHP8u9Rfd35wdZQMVfwfH8PfVyGY5HXjWoY1rEAQKhGZtMgFnRx2mAHWtyfbSdiunGrKKuh",
  "key18": "iWEimnbgi35dHpNXKmQgYXfmjCjjqBZR7nQ972M72ihciThyib1kcfxg7P1y3j8LR3sLciXUF6tjonfS1dLkgzS",
  "key19": "3xDwc3Bj6sdzbbUJdSbTCQs6CpAQNDJpfLpQn2P5RnNhTHbvczJyvTArmohbDyQSnXgLqCp5VN9E3zCxgmaLgYQo",
  "key20": "35Bqh5PfLhxL6zWULP3RnrU9fNhxi4TP2p3pf4QGbguzaEfochz2E5rJNRg9RWEdoF5kTiXi7VFo2wz61EMrwHNR",
  "key21": "4GUd5tV1crrQ1bamgCU3zihCUvM1iyLBQGHSQuTUma7cUSwsc2jgZ4dshQdseG3uQhXrjddzsPg18gbTUUGCz7z4",
  "key22": "5wkyfG7Y7tSqC64KKoGZXX8NBDPcrbtS7nFzLKVXCfA7mz8zWmbPtRUB63Y68fXvqFiWLNxsThLiPzgk7ZVbFmkJ",
  "key23": "2ACwJmpbPysyqDJvTXpiKahU1NFd9ehenfGgHY8jf2SBdrcPqLgBWToe61NXc9vv2PFxguFYCCCnPjQZzCvEWnyS",
  "key24": "5VwfTzwaEbQne2zBZLb5LrDVUQtrqr6Y6AWu5uBf9PQPDjDRUPzwQ75GmKMZbL67mAzQrjic7nMT7SPwudzw9Bhc",
  "key25": "27kRqEhuku78rJMoFdiYP6XWc5tJjNashE4DCq8MsC6oiwVJN4cGLc3qVHuK19P43sKeTLQnwRwHQVNHv9iYSa1q",
  "key26": "4jqYtMpEMVTdrmD1nxCmX4gKwLCNAn37FeRFZ65zqZmqcJtY2eJbfSxT8FoJrbM7w81zfBxwVwzuZPoM1DyVV5xG",
  "key27": "3AF15qE1d35rpDSw7gX4fGmgQJYLhSYMW4kA9ot5LAoZSnuRsaj5Fi2DmWJcz1U5AtUVzuWJkJeGNyMaPQUUViQA",
  "key28": "3AWi5XMLDhnzpdwykXxVbJG1saFWnEA9d7ZrfrrMfuCRfxXk1aXz2nGZD5cB22YukmZo8Y5G8Tr676SfPjHekQPR",
  "key29": "251hSjBXHFmfya2gd6XDCJDLpSGf8KBPjyUfWA67g5cxpthfX4qa6itwnzWk3H33i3ugEv1Xtqtnvr6MCZ9o7rS6"
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
