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
    "3mWehzWt2NqU7h1Jz2nQ3ce4qXG6fTpRy1Zy1kcygTeit8HV4mYmvTF2XN6rhaUgz95GeFcCCXoecKAAX88NqCwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TjezhBXrHxWv3kCvkGYsE1vDECqNGoRG34LBBaEKeDWKieAo8Zr3j83XsyqSB97ktNnCDcZg4wFPfqsjVBLG5kE",
  "key1": "4GpMsLBS1c6FaNin5t8joLggdB6pVUBWaU1b1bf41vV95t2XeWzLUsE3BVugaBo2c5nZ6SowHArw28uNMYFXmqag",
  "key2": "211n8RTahpu5febHiSgVtXZfbYRAocHQ5jU68jRG1SkPJvwQJ7wt2aZnBEeH5ArF3WyvErcQ8vBuawYsY6aXSrif",
  "key3": "3zpSCKmaTnjqy2JHmKuXU15igEHZfouTSv7Ce4XZ1YnQ15SSsYDWqRYKwqyiVQGey5XHtmpaCSiHpFZg8dms1ost",
  "key4": "3kfG4u6jMqRi1qGXVthpnqqTsff6CQbhx6e7jJW1kmHyb5Ehr6gFtktvrmv1BrvmJZqvh7mGSbCHbggQBtgsqnXw",
  "key5": "5Mr4qfSZuigSfrRHyZvGYwK4wX2hHNZTJ71Mr92Xn3v4zfZRH6Sto4KyyBkSrD4MwaGTP2628HtSjkSyj41PfWZD",
  "key6": "3nUifztq43VHE3eP1uCdXt6UTG7x89m4cc6DGhUrd8cnd18SSEV3GVmNAneT4ztHLP24f8sNKyhzkjGxKnNa7cRx",
  "key7": "ircBwQ2rkfxgVSHk7xA62KgJrh6179Vg8aYQ5fnvp79x3JtVnEi6sieUjyhfKLPCQqqMqxQh1XRW47Y1CDvPzyM",
  "key8": "39cGTtsPv9TUUm3teBAcmSKtFJAV549PikoZ96BJp2SJkMvk3r3om82Fku7b9796f6Sn2bcQyJAmrW9SXtcwBEQN",
  "key9": "3KyPcWrNpjKF2dRKxquykV92d8R6QBHy6iq1CZ3hNVFp28XgCQb4aVrxXDtVTA3ntMieu6LcwPgesX9eGz3m3aej",
  "key10": "5TNJMALg97UaFuoTdmFvvczdVdNkQQyFBfG87tM8snsgpkeVYzUEQN11sSJBaBJM2uYxQ22Td5P1iaAmAU4YA8xT",
  "key11": "5BGzSiAMo3E7h3NCbKUbLRQRTvmTukozN4TcBbh8Qw58gwe5yRKrPXS5chtorPqZhEJsBhNSkUeRj8L7ggfmmr89",
  "key12": "4beXzHFLPD7bv81k9ZzAYaDrLMLmPopQRWZsY74i8nEtQ2GhPCieZa3xX4C7JuVS4naxPAS9XfZ8HKFRfv7jKq9g",
  "key13": "3tXVDN8j3aD6r4Gz9jbtoo8uqq95yBd2o3JSdkgWtRGaVv3TYR9mJ2kH5JShxJrhizYUdNQaFH1EGFa6AwUwkHyD",
  "key14": "3wb3UeqkApwcqfDEYoKbrrshjz4pv3EiNMZk3wW2YNQW7rDRwtbwg3khLrvhPAwTiEufEJ7adZ8Top2SMcv7tRA6",
  "key15": "uY8QNJjWjeWg6rtzvT7ooqZqWytqGmUcaJLZ9shvtkxDXmuKTTnEh9xjoRBHjFJcpb2tS5k9MDiyv8wVb6jVsyd",
  "key16": "Xq2g325Emv4gHx7ac4KPo57KN5yFEZBs2Rf5SzEE1iKatjtTDZ5BpdNEUSrwrRPtGT4ZmB7CttaMWLX5aJmZmvC",
  "key17": "4QE5Qvt9f4vh2mps4wTM3tpV95sL1XzuSrtDknZgK2CZHE83WHem3REpY4ogcpFX79woBY7uif7q81xjcyGpw1qS",
  "key18": "3z1FFcjZNErsq2xAiaS8tUmuQqdPKq4hdsLmuJkWW2f72CB5kCCuKuxhcMdNKZ9xQftWvv2TbBqwmTFJyJsWmRQH",
  "key19": "65RW5fXJ3FGHW9ntFdz4H5pTsFbkKb9UeWqGYJyLZ1gAQ6ywvv9ictvpv8ctkNrscJPnFbdHtWmsyr5pdVYWqw79",
  "key20": "5XUsKpzr6mnvuoUzPxvPUM6uDySKApmUGZ2VfADcQ3bRHN1b2zTcXisTcnTQQntuh71QVt4Lr89uap9rDhK4K4Kx",
  "key21": "5cWGKvkvAS8bTnABuoUVz87mhAm7ApJMq4PhBtu1bvHgPtZVao268ZGZYqaccGxWFW7eLMoyG1TzbkMMayH41Ef4",
  "key22": "5XWu6gE4LnKMi9zQcVxGfNXqcAKJtqnTp2MvBzAtEktBqXquNUGx2B9K2e8GsfnjXFCcWATgGTkXhACy8SqWRp2n",
  "key23": "5rSeWpkuW57PqSeUMJbMMUFKZ4XNtYyKcQ4FPQ3XMWKFp6KqzCKMRZEe1zYnGX3S5NMGN2C3QfvekkDrrNVDeohW",
  "key24": "4vj2PoDc79NKeXYLad5D5brMdWXF7oKmHb82qnV11bpu3PdcY7ddwbnUM4fQ9ywPhYAzxfSDZtxVVgvuUn9gvugz",
  "key25": "3Q2TMYuRoH9PdY1RSbmscwutnEh2TR3NCYPR8VVjeWY29WyKu65g5RzYGMAHWMMtTBAGpo1Mf1zT2yt198RnGzcs",
  "key26": "5DjsTmWNX9Qr3CvstmziLJrHQcbRuTyEEL49c5v5VFwxB691jebi56BQvibqtjwkEfSFEcnox5XZzHmgnnHuckyG",
  "key27": "2sDoD4A3Fm2vuTHGzihkwDPvvEBYPKZtqLnam13rwf1VnUVHE9m1eJP24Dzg6xRXGknbmX2AqXiyxuJ4VzNKpY9N",
  "key28": "4RzMapB1EyaKVKnKiG4FrfEJuxkcPAB5wCYBsFSJYZTSbyHxtJWL5NmRtg78jTo79LdcpgW6Xz17KcSrTwEzt3ce",
  "key29": "2nX3vy54qNUsBzZyLetrfemMUke3zmXiHeVqG1wLS9Zyy3i8WFaeCazC3nCH1ATPxDpdCUGpdPMcE1yUXURXNT5j",
  "key30": "27Qtw4DdJ9AyDTtcY4JUPTUjoCFsSKaYk1bEt8LfLQwKCbkAaQP5TxwohAgMGqqoGX8Jx28XhnD9YoLCjuUPU4RR"
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
