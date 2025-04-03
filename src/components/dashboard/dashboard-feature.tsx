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
    "5sCqTLhGvRCJD7wpU8FB4dvoEVikuHtXMqkfZWEhN3Pvg4829ozvx8wrqwDHieSvnKJAS2fnBERqQvmfwtuzjUGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43A2g3vfThG7dhWHuUEob1uByb1dpHXjQNCu2FNfenPHKKBTBtRz1naC8Fiuj6983gwUTbuMkG1k7avhPZZXn9UB",
  "key1": "4pc5nK7ZvK4ecwXw64y8XUuy9n8hR8TdZV8vPqvYUR7SbPvcvRSbHeQaZkRhcvPDtf5p5rVkn8dcbSzzzrqPUsFK",
  "key2": "63b8aPXHEWbGgAFpz81yuWeq9esKsEd9QgfSna1Yx4BjJbivwE78Fxn53V17QsoKBmhNF8hbp3L1EzJbetQbqp16",
  "key3": "2VZxxf7KS2uX7uBbR2twcWtyjkwM3AuToFFUezr5kfwc4po4p5UfZexmut1HhxpSzsa2APsXQDfsvhoyREqLnMJQ",
  "key4": "52n5YvDfmLUYDYvX9GyLz51KuqnhHVHNZrr9fAVRzgTy3pWMictaToszzwj2YkUhBMmYvVByqyrfvWXiKdAX1NVu",
  "key5": "3x5Hg9zGgpkax9qLrF8zu3Bajkmz3Nk3go3WNwYeZ1DHL9EQrLMWtYPTdFjakZLRenJ3irLWmcK7HCWLagLjHtjP",
  "key6": "49sx2mvvLVCJAnSw42snHinofyrAUM8oWGodgoui4pBWgJXvLDJuJXsT8dpsFLu2nq3rqVLChdVtussF5qjN8fgF",
  "key7": "3sbERXsVwtx8Pbfp8CwXpCBdXCbc398BwKVUWTZvoaBVzKLk3c9SGAWCQGvDbAekqRghfD2PwiPMGA8c8tv2CeNB",
  "key8": "3khqJ2cyqw7MDacp9FRedRFD5DRna4HSWWWA3gqcxXbNX8sQDDt118nQANHZq3NiYjWhLGiG6KFwSSHxhKPJnunJ",
  "key9": "4QpjfbShxhcEfz9sCXYcThZVEMhFCQgd7KYZkoEuPaHKyXfqmBXBHV849CCKiu7VnNMtrbsUNUWBzMgXUZNwbnCc",
  "key10": "3wPHyFiux1GXCrgZRpa9RizxXGyUVuEKzmkr2jwDkkbUxUHxYaYRaKTEhqRt8wc8zrb9nT49m1xgnDL9ueHPZ8uq",
  "key11": "3wgL12JGQXzGY2Hzg6QTYvJHbRPjXi4fpK8LNpuYR7F4Nujypvb4CSmu53jpd195bf1DKaLS49qBb4aKxq6H65TH",
  "key12": "4qTfbfnysNbvbeFWkKkysHwCMgXPUMUgrY7fpxXAwKWEmgJjfzJf4a5TBpGLqmwRSmUGhfsiCFQWKZamEuPeMxXU",
  "key13": "4iSjRvC3Dj2SfjGTBUzTXRmknrDYMveLhjvjvDFrjPuj3aJRLHksLwZHGADxF8sfu966qcidVvWZnxk4sVB8J8pp",
  "key14": "62ZQjmGiAcU8VUtD2NSCVazhAXryXcww48PojEn3L6Dwwht5zokYPLyYyQyCw1av2Z2vRY6qZVdPYn5r6T7ppE3Y",
  "key15": "51bWT8u7XkE1N8mYAK2UEd1C9fD44kGNCgn62PeAZadSB4Jpby4DkQSZ1fuQnbj1SWiPEnLmWjn9bSeFh32AnudV",
  "key16": "385uEaUov6WnFb4mPfRF3Lhm6PMH9H5T5V1SPLRsW3PryTB6hCKkHzScpqFwUBk7CZE5SNJt2yEpS626w2KgHQe8",
  "key17": "4REkCjmKPamYXPP8gwRJnwfiU3UCnvHRgv56rgty3DCeUZXn3Xwo75QyTWLjrET3VbJxhwKUAJXaA9SXXXLZTq1v",
  "key18": "4Qptm4Ga8R12F59bEy8FRyBKWfmidY2ogD3quAYLb9yM8joBgEfMydUr6ucZJpb6KBAtpBLFLk5JoiD8Eu7xiVzG",
  "key19": "4qMPYKbRXxREm39wQEew2asziu7KUAwAyBA7hQqNHHafdXVNMpKpT97jNuMKCPcWcnMNDog82KMZr2N38SMPKHgN",
  "key20": "3WZv6dp5EUNBKmWVZncdwbamW1BarvgibHwB4e3ABRyxR26ETiUcjHFPcaGy8UYyiqFRxBh5y4v5E2Nh2XaseCvq",
  "key21": "2xP7YTLPLaCKQM7316BxJDuYspspRM1DWZqSJSrhh9Pwf8cGp5t5HtBJXh2ATYT9eLqr6QUULBiciFAjeHN1upHs",
  "key22": "436wwYjLuebcArvkwv4mTuEmfBg6EkdrNoDd2rNHrFZxTrLmhexyftMRYqjgz9tLD1tD3nLeKDouRJeWwD1sdgJ7",
  "key23": "4M7poBwehZaEA426xBgnvu1RPPvCoshJBva5pdaFhap1UEXptZFrXB2HXFTNz3JikgtR7U1UyoEFvTSTyA9xGfoZ",
  "key24": "4kiHB2po48RmCSQbE6E8cdaE9RsDkpraM7Rh8PscgjzVL3KMjHM1an1E4dtLeSYKJwXmYVisr8dbdogoT5TigA6P"
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
