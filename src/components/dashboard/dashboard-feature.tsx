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
    "2GyDm9JDMXpMV4q5Lw69LrnQuFXCeZJiVEywhAw7V6e39W2DrELd9RpSD6MW2MS7LhMVuDpoy5XcHzfyvwbaNXLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54JkwHRK8DHHsNNwYXUbw3QLS29h66jiMqSovyksJMvJSs7ssPHkkNFLvEmMZXxucaVkcwGBPFsZVxLkuLcqTNJL",
  "key1": "3veje2crUBbwHiZg1VVjPdYQpYLZtZNaET4ZhVMYuajHWDcA9fj4SZevxJjB25ai67K9JvCdyLwLGV6Xi1ip2rry",
  "key2": "3o6jTztDocfq69iA9RSC7D6CNoQcR2NHESk7EdGbxk4uQxrFdJFbtyt8LXcXQe5Fep1tMLPs35PtVghTRnEmT86w",
  "key3": "PuKrpjEUuE8FsW1knHsTqvSsfUtCvoskdJupu7k4ygniAi4BjuL2RvL7vjDgaouYG5Snobew5g6Z3pBJcjmmuiX",
  "key4": "3soRkVZCsWMGaH3qFNTd4LEG7FnKPKgWn7jJVWDtHaCTA64cUHAgrMsUGpNYPyzKrYyAvTZfHcHNvXcNEP2RY99T",
  "key5": "3MWpSuDzzjoXCbL4fRwccVzpR3W3f5KzyMLoG29FrmK5BBhjcz7TK8m8QJ182DbfPgDRHR4N2XeFRSLmSdSBVvL1",
  "key6": "5owPmMYTrCZkoAoDXTtumit2yiDKRwgXj8QzK8UrUCwZHd41PRRb9wX4MC25g56wZX1iLWzwiWLQ2f4bMtDJ8gkN",
  "key7": "2v14m5F1zsYydS471Tvfd8tm3SyhjxXeF3ssvSzqVGVf2GZBzyUN9ooATCtif3eYAScDSSgT3zFFS6xA15JV9W7g",
  "key8": "3wPU1CCs9bJ6GPB5YZnk9xFmXqawUy76yitXoiSY78UGHtKhf5uUCjt4L6ybqxjusWLCYqyV7HHK9nNzZBFCxQpv",
  "key9": "345zPFvNGaSoGRSbxGv4mswyNben2TGdg84SQaJt1bhHX5TbKssUTNX12iVUCAKUEFAnrSdgF7CJn7TX7oJGtbSn",
  "key10": "532QJFnYaoeDKuDfHiDniK6TA4B5ZeWmdWugiXcScMQqnNTxU8xv47xXP8G9jZ4UMTbFbUkhU6Rore5XF28rbB9X",
  "key11": "2kHWnuLxvhNMJFDD7Cuu2uAPiUvj75E5pqtTJVTdpJ99Bu4E5FTVqRRjHFtm78d4mrCSMJjxkg5zLfRWUM3r5uMy",
  "key12": "9ZYRygjRsx1oWgPNWLiLkVGfo3BeWqcNu8fEs8kezYHpHWUJEVYrhe4jgbz3bkuQ1mtfCFn4w9udrJsHGD84tMs",
  "key13": "4vqpvUe1FqU4jJwFwJnZf4cYGkBwuqJav2grQCMm7cZJmGBmMDWUehFYgj8KtMCFZZ43iKDNnP76ne39aSHf3fMT",
  "key14": "5eoUEYzJZ7W9E5DR2D6r3G7rrgoK75vWw4Xh2tS6MMsddDtRmmDYqyiDNr2zJsr6z92YXvx5XyapkiKXtXN1izrQ",
  "key15": "3EsdZFQEtov8w7ZFnFrkHHWeUDxwsYxTPUydPjF3YvPHQx2X3k37N6UUTSsprTwXfpfKDP3YioyEGiEiHc5W4ZPi",
  "key16": "4NFA2JAfaLoXvSaaTW7ZaZYekUW1ka32BacuY2FFrXvihRuAeK8WvgztPRd4z758AeSXW1ACXZvi5XK6LFxaNYC5",
  "key17": "2ZyKT1Kt8ev3XcX9enQV4PetVkbdSh3gNXVW5DJnX9azVzuSpmkcSNd3waTmVfJWNNP4DaM9FUM2BiRkLaUnuBZn",
  "key18": "2ZuZU8NZfPANB3YHbPkX4KpqsAUNsTdsg5Fpu9az9aS2uaALMTpzLkWwmFZobTp11MGQfDg7Si4da5BHuui74CXy",
  "key19": "5WbqMTXWQLmGCP4d7tJamFLtiPtDzyUNV5QC4uAuPLRzqh6taBQvCXS5Rnzy15tUZdFSB6QCsPeRxuYQ54fH86Yt",
  "key20": "2J7jGyTw1SCF7Wp1SznYKUwGLAFV7UNUsnSssy82CZfx79GFRH2Tup2W8uPNPQX6qDXcxjGnvdw1y9v2QSWbmaNK",
  "key21": "5ujxxkhZUot69bs9QL1YPz94uASjjHgvV4zx2c9pAk5KMgkPEViase9PPF7SwuRg7MxqnbM8YctcQpf7nJ5VqnCg",
  "key22": "YEEvQdgFEy5qXVCqKLomUa66Ssg131NogFWpgLZ7XpbJttZRVPCkJzNeVf1U2Cuvy9Uht3guwtgKTKa2P7DoZgz",
  "key23": "22ndRHtHCyH6ANC3BEzVCrFyk9uHSaLPBMQZFfef4a9PMrnwhAGSjW8eAaeq5jfCeKwgUsTd7ebRPND2C4Lo7afi",
  "key24": "4x8AmWPujuqR55srDTWFoCVS7CPokU2TRzRVGTSLD17ccb49MWug48qBxKgWTRSabLQQauwB3ctuymtdxNG7VtwK"
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
