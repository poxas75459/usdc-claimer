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
    "5uzi6vdrA3ybZPFDFS9XWfBdf5GbzDT923FjP7uUSL1maJ11VRP8K8qMFqy25QfdcAECRo2SHUkRoXLxUz1PuU6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zEaEXSYgCeb7nUZ57Qj5EYPpobqNVn65rCuxvLmqgZqeatkMtEH9c6necWhCWsQ9DT2pgEhpi2gznW9LxK9oukF",
  "key1": "2wRuNPfQuebV5W9bffKQD8FBhBMeyqLUC59qefqRCKuh3gpr7UGkzM9riwynwUNs6vTm3XixvFAvHd4QSAXT4kse",
  "key2": "6748rARDnLz3EVzZYJ5z7rguXYQELsjfm4xCLNnYN5iY5dMQdCft9fPZR7Ga9ZUK1tMen8xTfup5qkoFu7FV3yQF",
  "key3": "4kxpNrNrtrrfKBMbTnT4hCnUYekGEkjcAKjakBLCWxye743s9SbDTMCJMy2VofR2B9CxY5hkXgXg7CbHxz22SknM",
  "key4": "ib9dKWAKsiEGzpqZSdMp3gfN4KVkHwJ3hG19ELbpt1Yj6WYM38EUHtv5e9KuhGDfNjBQkuKW8cUBMDZNHFYJ51P",
  "key5": "5tFGqWiQSTTjAHX4Vbu5sN14XQ3J1MqukNuKjrqHbSbcNYu8xcHLKaoagpwYeN1eApLiR6uYt7ZFLVJWcKxuPjdp",
  "key6": "5MtaEv64cTvWoHikE2Yh39THGbJ45nmCaSukyf7m7faMF2gJLhhHUtxPemrzKaTUGSVuyLFKs4tMJr6D2AFhgK6W",
  "key7": "rXSuXEoEvFmHxVy2Bwp7YCn8auAatMnrWss9nVdz2AjtR5esQLiv5MNRikiA7ZyBq1QzHtxpgWNDtWW8rGAYEVi",
  "key8": "4j9mU6NsSqTtzLENdN7Ao9tLpshi4c2ZG7cJaTMUYbKPpLeLSJwCU6oc5NK6VGW2tPLwre8mvQ7qSsphdfkyBSLT",
  "key9": "2QHkXLq3rz577qkLBF8YCCNCreFVqsGCKdjwhcJ6jji2H2ZHDTDZNwZX4SpGVGs3epGBnhKNDSubT8YP3WfzL6Xi",
  "key10": "2FmJZbjHvwtdfXVmuqTjhhLXBXCg2bXbKrnoDNdJqdKcWzcYJRcMZ9TeamDorzbRvP3iQEiyha6fYC7PF7SL61Fz",
  "key11": "5sw17SKvQqXQxQfDaWkeFFN9nbjW74g689AjTt6KCAeW1TV5t1mNhvr2ANC54yQCqwM4E1RXCHBMyCfCqdNbRx4z",
  "key12": "2VFxQFZ7LivdCnyzypoF7FUmpEi3CrJEq2CnxVoPHP7eJci72Q8EWkCp7oTym3tQirBs5GUwNvkx6HcHKaqyYGW7",
  "key13": "49Cn7NDxQTLr3ZUtR3PN3U7uGWUu7CQMTpjrqKb4VfZy6i6xgweQgnofRzWjcgN4xLL7y2XmrBBvaj42PnmDh6UA",
  "key14": "3BNwdWNMzsw7cfRXtAaYG5sk11S84ymJ3hMdcxGi2gg5Cv5B2wJ3ygNqYCsXQUfUcc9PCcpyAwV4b34u6PFxXTZQ",
  "key15": "4637h8PhT9jQWn1n7Tb85PM4BpM8zntH4x3dqsg5HNvSbLscY2topMX1hy5VdHUXvww7xJcYc3xN2KCWosRERWCv",
  "key16": "4goe44hoUSVT3de15BjC5u5iBpLSdoYmpA2J7BjzGahvsYPZYAFzKcqeXZcSw57DrmzWP9froiU45QmZAnn9akFH",
  "key17": "ZTLqxuLou6hHosYP2gUX7X7rAxG4Kh7Xzft2Pwi2gycyWNd5i7NdUC2mNYZ7ikgcCCdjjJZdzL4Jqaw2Ggc6qJP",
  "key18": "6yq9L9yCELDu6N1sKrf5DGT5y1Mzhecdj8gZc4dVVZsRH2D3pzsyFxaSCSAhGhBBtrBqDjXyzUwagnvTozQTArE",
  "key19": "gaKd7x82hzLVtJFNSH3QxTWHsXu3hyMiWmgiQveHDyELoC92W4M7NbMu2hv1WsoGgdEJRnrLjFf4xi7DFuYiS2z",
  "key20": "5VSxV1r8K8GqyQMCSzWW73wiZAVWpz77eg8GCYvqp8a9hUmaHq2zDbFTEVa7KLEmeuTvnWNMedB5QDErQZ8R11hk",
  "key21": "35bUo7bVCJWLdoKTHevM21bkbQrF7dxTP5Yy5ZG8YMdRybEPVyYfyzRhV4j1NsnZgyhdFz3LBrVFxBFykd7NHfUY",
  "key22": "5gFcas3X1ZUiR8qqmn5bV4maXAexmCzc4SrAcFke5gRFPEAynM1BSPULTmvtEJhaEsryPGbHzdebwbGwxvhNyrRS",
  "key23": "2tLigjsh9Gg8N2DXrCeuH2DSX96Xk562ZMCUAsA99Mhv4CMSikHLUaFCbdz8oKhLRkDu3aWcDbZTJpeZSwAKrPKN",
  "key24": "5At2FfPPtyMmT7hmpWzrvuGX1kMJzv5wPbuiERL5DQVLhmG714uTtpRg4cjRXFL9mQ14XgkRBurFvaS7ZfS72mx1",
  "key25": "44iBrtoZE47NAFfHcwcCuDVPtmd2AWHcoPBthTbhmLAj7R3QdwuEKDdE3PKVHvHjshrgr49qyZENHfNWDFhZMqC6",
  "key26": "35q94gRcWUFcdVsj9MJYd9oJ62B9Ph8iKMEyGAgH9AipF9yVHYn6xRH2pm66DFBotuFtgTyWfyXsyCryay2nmnet",
  "key27": "4Q9VxvkMxDG9tMiBq2fCSxJGNscjoW7X5NSSZYh7eK3p2WmoTzMg6QH31V6M6N7mE6DtEiUrEUYuQRSDZm1C4cAH",
  "key28": "417k2pNXFEHaZcbGyaLJdZ42uGGoZsjnDJh4cTiCffP6fYdYBcReh2kNhNV4jHkxpNH9bqcR6XBhWoF6DsV1z8KN",
  "key29": "3ncN4NkBax1GU7U2tTu9F3Z3JNKuk5PuQifBCpS49pehqa9JKWoXWJ5EDB2DDLSEvW7FRPxCUx9zhBKWqkfvCiFb"
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
