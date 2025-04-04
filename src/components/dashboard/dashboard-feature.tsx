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
    "ZSVi4fRfn3CxuVfPq3FTXcc9HUz3ydVzHxCE4NTBGdW6PYbztGDceKhb1ZxnRFZ96B4HyhuMJz6wVhd3tg83FRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kwCFiByCHP5PAidrCwLy5SuBEMVzfvWL4R9KFWBLEGgihcLBwzzznyqfzmy1uoe5yuziS1ME9zu6U5FGiDeLHpQ",
  "key1": "3ijHrj6py8ePpptUvA4e3Ya6CVA53EPQN9iZbB3xBRQHH8s9uqhEcjMi8FkxsouN5zEMfVE6Z17s7e9YoQ5tCH6s",
  "key2": "64cVvteefP86PNeKXggUhgfoXoYKEHRg9zz1y2n1yLfPuSXtfKz4K8wgQTKuvtA4q4Zwh8NVnyU33HrBQ9brJdXy",
  "key3": "47oQCPKASLBRfyu2eydvWRn35rxs4APses3nJQKaiL3gNCzDZRHRsgyhqMnQpNh3V7wF9XzjDH5FPkMb7V6rwbZ2",
  "key4": "27pginr4nBdWpC76RjhDd7x2DqT6CmojdUhCvYTSsrEo7p4HnFfDpSJZtRyNe8oGzTLpxDsWn4zVN4JYFu6SfES3",
  "key5": "2k1whmA9AxnigchLPSuCj2oZHH9XxRTbtcDuGZJqjTPjLTzn7nMovFRrN2RibtHYcswK2UYhHSXQsmPHBRoxSZKP",
  "key6": "2dsRZQmg4PgUBJ9unPpsVkM22eEZrjUaaRqtuqMPzvC3uhP7orbEDeGQXexr3fe8hKWGxhRiJVmvAr2BHVwBXYw9",
  "key7": "337VhHYDoarkjTRM6cuJxsMpZjHjPEtZULh2KBguCV6U2fsRjMNNYEUwBwGvuR5bnofjxvzqEn1vXPXsQ6HcdPJF",
  "key8": "5BvJqCyxmeKiGRFenDbxVBfCHXg2MPYtcXb3BGDMT6Ea8f8TL8zAZK4LL6UhKqeD9vRTgMJwBFF4SXNKmCofWGa2",
  "key9": "5CKZBRJZMKgWj24hqRU9imPRvWzz8ijWLc5bWxsHj3pMRLht9FhutiZzRweAdNAFNTi5bKsqNAJLVCoaPcT7ZK96",
  "key10": "4y3X4Md59wDN9pAsVS3vEWARPvD7XVDeYdu65GRdGP1KFAhHnvmUBwqA3deKWtwqHtVQqjwfDUiT58Gx45VHhfqg",
  "key11": "5c2NU5okQFV3w5Apg3HA462vuSA7QkEfeozetjAiSC4Z9aEJrFKj2wzWaFa5MXXfJwo1cG5zdQDc5pr2kknDFEsC",
  "key12": "4KqH9eFCeLZuGLVhs6fuFysv4676M4SAhkSBvcaoZsQFUYp8rdBhJWAajaRJBDoX3MBEXTcYyvq6QEvZdCGQq9HK",
  "key13": "5nM8GdCbAmtnHhmHswfC16vRPBEWByMSBYk976LfD4E3rThrN81SxfR4NTEoUtJwEFakmd6PYBMuQvmFna5pKJ67",
  "key14": "45ex5UvTqu9RmKUwLCcAf1vDEMdzmvucFhdP6PgXG8p2TFf2Fo3t9q1igHhkvnezwmvs9Gr118pzWcRyV2b3M8f5",
  "key15": "2mSkTVE87qGwqgLehRMKFSEr1R2PxpZCXe2KB3QQFpbE3iKmavNjrHuQAzGkKi1Ax6fugnwir5QfQD9xwwttqexx",
  "key16": "zGu1WUETyw7wGBGxAhADr7SoTLespBKrPjxuQtAgoN7TNXSjrkcpcEkpi36gPmV9BLbt1etQgPr8Aqrcn5qE1hc",
  "key17": "76moPLQthuKUS2xqyVb6SykB4kV5ZxPf5CJmcGXThexitL3P3HH3CW5ztxewGFj9pdYB31m1W2jhXqAgq5mxvhi",
  "key18": "u2b955ZC7w4HNkKd6VEknzYDH8gUgQUgNQ316yra4aXetTKdRcE92kPQpiY5b1DmsCNbPBn3f8fYa86UemoCJVR",
  "key19": "35sqtHPZrqgt7jD48Hgxpnjyf91tsTRDnX16j88LoGp1XUELDQyi92TjinnAfiE44FZZhFja3SDHJYHhWEbR5LjP",
  "key20": "5cuajN1PUoNcJx758tVpfwawYDSLv1hTTsYShPKJSndKRcJ2zMx3bHmsjcV1BwuKNPDMVoMtfnYtxuUyPEkpFq7C",
  "key21": "4PjssZURyrJgaLktoL6sn23FCtvBrkwBC6dtxZ3X4BVFYhYRzBeGdjTUjZivwkXMiymnQASkR5KesQXSB94cs9xW",
  "key22": "3sxvsXj12tC3Zf1XB9w9BoCwDiEQuHGA6HZM47NRShLESDcyxtWoXA9yT5iqBnvBuXbtNctMNLK4C4a5XxLKHn7S",
  "key23": "4Bnedip9CszLMVT6PFnrUd9zsby3DdRF37Mgcv9Wv93161m6yCUQFQccWxt9qp9rvfPKQm3G7zSrtWy1Atp9mHki",
  "key24": "2MHS7zJP7HfRpRVvCAKNoE4hVXfSRbwSiGb19jJRqx7mkr6Nqc5d54bzn8SavWT8oNjMECw22285tEZw7gCewi7L",
  "key25": "2mswdA8epHv3EBvSgwKKADxsqSrGhYGe6sHxFPohxxmAnKmbu2fNHJEzEoBvDkn9DEDU4He2BHErYUyFtpprv5WL",
  "key26": "5aW3abFHfoKMz43hvbwjYVvT7zTDVkzRfxnw5F1tF242rtkpT3EVLK1F7GaALQYoZ2ZXps4WWfw9GeNfkUewGk3D"
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
