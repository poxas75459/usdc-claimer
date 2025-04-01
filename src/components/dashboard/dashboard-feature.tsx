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
    "jJ5Rr5cBrY4sLe4prSYw8JUpZ7rtY581FaiYU1VzxWQgv88NU2k53bnNarAmbbdj4Zzq16nbhKuDHJ6tDu1z5fW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZT3hfqmtugDLTf1JexsRdM7JukXTS83bHS2G4sNMJ2T98tKWJjMrXdhaz8XeqhRwT9Fg8nvzxphF6brF8PD8y8f",
  "key1": "3KZiimYd71fPN29ZrwZ9WparXMaPmp3nH6eTJPzyGLvb5R5KQJx9pUy7ZFMh15DX4qQNeVfr3rqQ89A3LEP9erX",
  "key2": "4hWp91J6Zpvy8mVk2eidyMM1ZfSSLu4ApcaqDdRdsKatWq8XH3qV77HukHoGYPyusMywBeJre9g7mLA341agPRcm",
  "key3": "2xUucVGSo4xNpHrbDkNy2QzFfjPnC8hXGpUm16Pbsowf7QazRuLSGVNMvhs2NdpbVuATQkYuRXYyzztHqjk4W58t",
  "key4": "48sVfPihACQJHJzNeRqtx2QatwJ7BiYV3SBBRECgrzBkH8fpnME9Ed9ocxc61eKE4UHWGWsSseGHpHNF4iDQvgvT",
  "key5": "5xLXp1VZZTcUpzUhJYBi2fJ3UQiFd5navVUZVLm2fQS2wYXksa7skyFkQuCujerUTpYWNF82ishyKWJM4USnQn2u",
  "key6": "4WDKnfVhnVYHSrYPQsWQpsdT9ayKfzawTNzeS683rBnAEpH6qzUfgyrdMudwQcTkr7C8B4SCrxFaPz9AW8AfeRSy",
  "key7": "2ozdeCVwWa4eA4vWMvU3BSv1eNK1d2KDEMFgFruWiMw19em8s2vVVPLfF8KJjdPtgbN4XsYNRrwzm14fRCV1BsJv",
  "key8": "2epoGC1431pnm48RiF1ZNvVP1ELr51qXc7tU2A7NQbbohQkTAYq81VNvkBH9SknEwmTjqBjehqn3bnVvBxDN9Z77",
  "key9": "3nin9wvgpmY1K2Bnb3z9o5HfXVBGrwrAVnrfLt4gV4CBrV8Q4qBwbPHtyYzTn1mJySNTKQAJcQKYhjuBHtMGiPqM",
  "key10": "9J7rq6bWvjQgDhinuwhfk5S2q8g926yESHS39GTjq8MLKiCjLqQVUxDWoweLfYhuncSvJH33YXGbRAFgtGPwFXn",
  "key11": "2hmG7oSMjp7FjGYkXeMr5CZvvByX5ApPgFCd5VzjKWgFH8HQusRdykuYSbPeqG4tvaJ3Jk5uTPr8xCL5J1uACPgh",
  "key12": "4eAnc9y2tBPGtfNW1ngHRwonQseajpUoCyRvwRPcEnCwXL6bN4dW1Bfn3SYzg8P9Xdrr62npoPQa887GSKpL6WNC",
  "key13": "5RuTFwnhqhzqc8LopweXj7kBjuPDwRwPPPvWPibfQKZch1e4jFaN9MYMyinaC9QyceNcHpKDciXLhDdJkiP3WgkD",
  "key14": "3JVwN94vmBM1FbzTZ2oCs9nAPyrzA7TcDkTktZt5JRG8DNHxD1ir3B3MaWT4ZFW2dvk9NMa5kbnVLbXnmvLxH81v",
  "key15": "4vQh1sYMGWYNFy74caX7Vu1GzQAKwMXJLUiukQxRPwRfJTdtTNMenAGzYwNju55WwCE68QfrWeKQZ5Y2JF65r56y",
  "key16": "3uYqBsYZLFMVdhCBQYfoygB7p4KKuzgX84uvGJwRh9PhxxmKfHAnBiomsSZwWNn2a7bkGzEYc3DwX7UbabJDDA9R",
  "key17": "5HygVUaVpsREzqimX7MuNGcw5LUW2cwjh99qNwpddEViQ6moFqfeS7XwjBzqvKE38YUmSpBFT4C8wJbqPJShVw65",
  "key18": "s88NtLxdMMor7BKcEupdvKbhsBpvygQJDreQdWUVQzouys9KsZqaoMeKaMNknZAZwiyMuwf299yGhuUkBbnYxUC",
  "key19": "5KDG3ZnJRc3CJ9ysM41sBFwJam7hpPFKaT2p7e2jB1NRwdDy5uwvinnPQj8VPUbqWvJVWBG9k8iAyZgmxbn3Fx9y",
  "key20": "3YgU3Szh1eXe3Z9th5uWCXwxQTiiF8YobUxPksZsd3SAx7ghFtut6fbdd5mhYLkZckdXZkS6YhDY93e2dqMYtvry",
  "key21": "51chKy9J5NhkaZ5JLopdh84sCjLgsCT6sTXMBFSTbd4a2cHidRXmnnY99683A9mHeK79noNjWuLShb283nvDeWKj",
  "key22": "9NW6XysYJcR9pFam3EayTqwAHLnAUrfzeELCAJKk4BncWSYw53715zWVuwKuKnWGiij2JU8v5jcnoTa3f4pZ6W1",
  "key23": "26HLsMnAeeQwcs6Tf6EVYAiAvd56FrV91qEDMZESgYrgEmgfbNZEte3ZK9MHj9TnocoJvzikXyy3bMwtADU4k88E",
  "key24": "JA7gcE56DYuUofFCSo62R95Mdh1VZVkVy2i2jhgxvXgiw5fBvKKcWXMco71d81LfJexLoVcC9YtUv7RtmzZBJJz"
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
