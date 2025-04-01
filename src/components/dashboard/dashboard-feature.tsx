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
    "33cUYwNVbFe25WByBtYHvXbNts8gRgaqfS3YxXbC4sJmAg1jNb8Pk1bAo1AmA2FNTaLFMFt9MRB25HQ4qgUT4Tvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67VwBQYd9rCQ3wS7i9g6mkZXxayJ1ArXxG4RTkHAt7kr9G9VYEHTFTXfmzvgxyvd71xot8GdV9JvckogGfMeZ1jE",
  "key1": "381hqZqN1qEZV9ussuw3bQp71spDNarQptPr5mncbKxZ882r8ED2YZ66PDMngoBgcMF2xaZ4t7N5yqcYj2qjq49J",
  "key2": "4casSFXE9kuPqBNsxM774jqX2fvGAf5EDekvD9zh7cxPhXDMagY5GwJawDJVTSVRckL496B4pGcu3FbgMRLeFALB",
  "key3": "2tUgc9EnvxtvEBsXyprKigG1TWQ14LsVCJ3hNPB16jjRRZ1CvLSPtUQ2c3UQEQr5obTwGRhBeuqByyp22S1PU7rj",
  "key4": "NY5V3XHcHnM6YaEq1Nfie5cqj8EEF2yzKpTJ89niYQBq3pk9Rpte9s5KE6PSor8diwnBk2tE74v2aPnT1NgS1vf",
  "key5": "3LQs3EPwBkvjigxxrVHxrVeAK29YQ2MmdxirpJfczvaja3ehKnbo3qytJeWC8uM4JDs5g6ZBCvyUicMpJ5EnFqdx",
  "key6": "wQeRtfsLSBHPs6wBDynGJXUGCDZ2LmA11bf8g8RJjeVupFBwKXgdRQnqKoJUZhYXkRsHV9H2xi3x5u9CCkkyQ1F",
  "key7": "2p57ZhZGDiChgrYsWCaqekkXU1wBbuoz9EwuZyFT3EoCSDp84dzrBpTWRFKS2fjL8ZARQe4UZFjuBNDh2GrFarNK",
  "key8": "5jVZcHWLpkvq2WDypz5iwHeMwNBqpV4JCp2arkQqS2eF75AyzUQJ7tLWcKc8yXy5xR3BCrSk9pBWc9wzHo6nUp1r",
  "key9": "416uCSFbiYeC7DerpGy3cGz2jZ5pihnqKgXdJ7UaUpax5FJsZRStdzDSkN6SeJEzH8rqk8B8tYsVRyfvoMCNL8uM",
  "key10": "4YEvjT1yUiEMPBCzr9dq1x3qC7oxxaeYBWR7Sg7cHxkqFEUeMPGAiwCQvcYJAfbxSaX4QSssQgaaKEvUq4MZaHns",
  "key11": "hHUDj67vKYMumuPA7aB84otVfFoqZmYiet7CEinUtUM9d6Wkjzvej2a3QwQzybg8EKafHyxBhNgXSyCGYQ81mnJ",
  "key12": "3s9uFu9m3bTLX5XjPnwgqBXWLVtEoU2SxFD6YGAYFdqm4KAMxbpcKvjkrETMQvHwBqHPgbgi7vGMQnf9M9xGRdDf",
  "key13": "3htrGpFw2cJgQwNktVEQz4KC2RTH45giMjCSi8RSARfU5x5p8rzgdRAXRLGEYNHmYeqbNpcvSXV5sHNAgXuHJhmw",
  "key14": "nyaXTuLj6PbG8VzTbGPpCugN7mshjvBG434ob9jcKN9xPQR2ipLDHBTc52GYWw4NpvmjCF4BB9MXo17Lr3uxMfF",
  "key15": "68X87ptocHenLZpHxcs3bSLDA61szMMi2zZKMM6VF1U2SVtEWErBSJwbQdnrthfrvQ2xeJhQKtgU5ipcxfHCbex",
  "key16": "kthGjdKPMhL2bb9wj8kqoF8ZuV33J5pmXYdirJ6QmtHKrfJUsurbq1ewCe5TtTzhk9hxpQz7w2rbz2rNBdoZ5Wv",
  "key17": "3i7Xqw77gG5FXkBRdELt1JV7ctJzkWBbq1bXbf5GEQT2tkdnTuXrkn939Pq9t3xuhe5x2rZFW1QTjUpQ2iqRWhAr",
  "key18": "xauGcZgVqCA8HoGWbEWZvnH8B3NZemtgkNzmVB2ABuYxSE1dMGmbctf2Mxj58BqUZaX9Fzkg3PeNQHfUNwsA9tf",
  "key19": "5wy3f5f9D9GTX1RVDF2RFJpWj8oo9aBxxFDu7zo3yp3f61MTvAPNkefxq1Vrv2xfC4hNYtkjt7t2hepXZow6f8ho",
  "key20": "58V1pbBnRvXtGkDdcGrEhbPCcvRNWAE1EisNKXpQxgDnfeFnNXu1myvMuf9ZVdW4nQAecRyUMD5mLwpfSzJr6H6k",
  "key21": "2cBiRnF8PkrRysbpTUp3PcorACgCCpiSBYbZtFsFpzzVcgVrRr2vXjnU8ecfHg15MaKj3sAZiVPf4qcXydPgEYYJ",
  "key22": "2W3CjGpXhFB9s8KQuqKsSnsSQnhZrp6HEqcsBCUAToGXkrmb85DFEThEvc5isi1w3QTVHceXtfpnhRwjeVYLYti9",
  "key23": "9y4DftNu1aJV2VJd7t5WpmhNWnmYz6AQ9pL7LvbzvwQcuYiSHiaFw7xfEevR2FwpdAHG3kBMF18fomzX5wGMA9W",
  "key24": "2HuzWRPcc15PPfJ8TK2PRgxG2UccUkWWy8Pvkv9NHe18UQyCF6N7Q52wma8SaDyiSdJnEdfweSzAHuDfD5QXAgmm",
  "key25": "4PMyfUYUHyLRyqgCckEFya4Rwz1qnA8qVXeDfx9ZmsdrhYHfzcsZgP3yuonFwW8nJLi4BfXgmr3XLvuQYgXz4HfK",
  "key26": "5thD3qbAKsMXNRPWGSCm1Z5vw61qRDh3VMJYU9ufVeTYkRQVtn7JznTX98FRcdU3VeEBNzEeiYFHjztko5iuawNw",
  "key27": "5D68z7ru98gnLmfrNeBESeN7szEiYoWsVLe4AVpaCDHH5xxBa6JJ5gXWaGG8RKitqzJeJk24w6msv9N1ZtnjZVux",
  "key28": "fG8TboyAtETWXPdgWbJgZWc3KZaEyCdWKAG1G1wwYE7YX6fUzwM25v8MF4yVsGDAvW7fdGjaxwT6svBHdc6orz4",
  "key29": "1Gp1Xq9iXd1QsxHiaF2TFFbPkH1RdwV4MPGxdj5rHnycdvC9hD486GpbWePPUbw7s1NYXTMnd4X5RhDSXdjez6a"
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
