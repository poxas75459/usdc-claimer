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
    "PujyoUoSRqHVts2584cbcm1AUvnK5ePB86gB7wDvA6x763keiTzCMfbToJhnXjvkCJXTPAW6C14jfgg3fxnK2X1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37PpEPKTNEmwoALQeDvgoiY48suH3BbBm2e9S8xJSd7TA3qvGzPqaNVjZrpU8oyR7BViHo71jz1tDiPUAx9XH2Y",
  "key1": "mXFM5HftzRYDmf5KZG9tbwJbbjShfq23s8KdNPs7j4fKAJ1WTPUq7TBzutnAXLwauJB5udXSGF3qzbqyU9sPeHD",
  "key2": "2iHWBruiqKwTVQEtvztkVm23c1CyKKe7zJm7rguSYsUHE8t4bhJHpffbdgwCLpNBcFzK5zHit3GhS9aRXEiwjhLj",
  "key3": "hhAoE6Fpa3ipZnqwhEvcPmYMEG2Yn826sUwVrjj8fNs3foYLtkvS6yWvALWpWHfLbiFbzo92sRgVkna1BNLywUZ",
  "key4": "CpmMoNamD5n45uG2VHoKcQuQiPzefvnKMcYoWAQwifEdC28i1i2ygW9RFh8k5URxzn4bTo2j6aSBAyASCZSYaVg",
  "key5": "2Mm5dxM99248hyR8t4fPsDwMmi8XNszCsYqnHFSSPMWq1x9MyXuD6qT12EgM8d1guz3jsLrM4wkEAY97MXw2r37v",
  "key6": "2QZCXMN5xHujd6bkMk45vQNn4BCg3oFPsTYy3QYbwNNwPwV9DE2zEcYEwnASWY8EvJ1F5JeqC7aVqbu2KbUtm98y",
  "key7": "3Zs8o62KyTSzSUeweyfdRxigYTTmDpy5Wz4uu17aTkVGqs3sbTyDdpUVoHkWpXdHF1ABuz1DnYBAAqLSQeorqpGa",
  "key8": "3Gq5Z3PvbvdnagRC8XWGgVrupwqEnqg1DozGT1LKiZa6CDRp7jPTYCjebkEgSFnQmcKc7XBqscRPTLp1CR2Kp7GG",
  "key9": "5Sc8U2RofzxCNUiEHpVuVU19k1Ep7VD8hCfZ9TrH7DsU1VtrTshgbFTWLt9sGwWxs6NpYxBaha5cBtF6c6WZMbRL",
  "key10": "3s5qCvd7zsY6QW9qXehWwtSwvFEEryYvrJQ8DNEpWM5qJSasM5d9X5aJJ1SAkr7o7dLcL3Sr1qQyiLNe8MssdtJW",
  "key11": "jAJ4VRYnKVrRbMQUTZRmUBb9DfptnL734CfUjkev6hAFxkn2nWKtXHS61FwQUYoyYNsJGsz3n2RiFbx9y7mgwSq",
  "key12": "4d7ZjGQqmsAs4vmJY5VKzXmn562fVJYPZTcFkZHfML6R2pVKvT8LzZBJLSHeWDJ2HeurnyUCHGLSYsSDapfomMrr",
  "key13": "4aCf2aoVmwSKb9tNcYgRUDJ77xsJSzQB563EDfHZatqsDc6GBjjUWiXhrbAcU82sYmxkiQ9VY5iNR1oDwYVwa49X",
  "key14": "sLVDDQqdpSAE2eptPVbayqFHfqGCdAYQUVr7NGzn5ZYnxNsE7aHVSGzV2pVTwmhzQEbYpBUWf2Q7RN5nCy9YvMA",
  "key15": "42xNkvuNThMtQCKbXZTMWd74px6oePPztcKZwPKU1f6R9sdK191TFyQfTvwRwkHMdS2Coxg4zJFtrEfybi6qgKEy",
  "key16": "5K4NgAfks29ewrrmwTKzZJQVAbk57bhZk1uo9qw6krFPzNDcpZsbW4cMME1LMpxABEkkZwUWufzH9fq2YSrsdn2f",
  "key17": "2BwixVnBs5PvojguQ3q8oqaLLQntkf7YeSJZsShm8F8G5RCrsFcTEQX22DebpK6cv4QyyvjiMWigTMF25AoGxSsT",
  "key18": "3ySZBxv58fJ3hcGeN8Pkdu2T3xSi58srCu5qm6VW5LM8tKPrijMgFsdhBfAg5hQ6oFrrkAvaHGrfiVD5PeZRW6Dz",
  "key19": "9hLgCsTRFECJoC8Fi7ebNSUChjUAFLqreNiGbB21cY5Y92R6Cb83UfZgqEb7ABmHdiXFgwMUn7amq62SKtaR7sZ",
  "key20": "3ct3mhFjZXvLpD7sGL9ABiNXytwpFM3cD5bxaRpQ3e4dkijJMg8JC9CPvBbwnBYJ4h8UhrjY1VUvzAC7gx6Tc5ru",
  "key21": "63ysB3ie9VVSp2nmuaRRZQzR5hLmFwi9uJRrYjz1tsZUYcZLUVxDSJs9Z3rbuqaEhk41F2BLtAhpKE7mu6sQ6gdW",
  "key22": "3Rgkk3ycrg8WJRytcYpan9jheVFZgCQyKb25qXW1Gxyif4L7RDoUmueY73vbMu67DajbV4EPYM5yuj4x5maU5JZ9",
  "key23": "ABzZYeMtNd7UtFrr6h4fkP2eHcAGEisnDkbE1rNjT12wfS2gJEjdmLJwTHBvmve6fMc4GLGXiMfzUT2u4M3z4LA",
  "key24": "4Qkwyzde2vPCRrVtLBgstrUbEddYmajS7qQJ5q3hph6yctyGh7UGYbQFUHA8xbhncKkSTy5GQ9rmk5iw6mYR5FGp"
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
