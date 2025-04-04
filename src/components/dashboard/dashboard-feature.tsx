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
    "2eGz35DHsWx2HdATWnd7FmKwWMApFHzsg4FfCUubC3tvtrU4qgP7FLFAPdYHPGdhJcvjHiacpBYD3GJUuGQ6RZaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ru2WnTvULuBgnYePp1psHQPXxBQWaPaCjYtPdtSJm8zXZpdi3SPRT1wPCED4bcHL3XWouUiv54Sgf8wNpB41BEF",
  "key1": "d8Enn3FqnBUtRmwfjnJfd857SDF4ccW7nsdcMxs7uBYBVfTDPLBV65PsCE9Vfuyn68NugRqCzNi5YPnzCoeHjDS",
  "key2": "5PmeH6FUcwEx6WxZbkLXe8mL7GXH8KF6YQE6qUgbDtd5X9aCXNwrMTmdFCPQubrwfgEYTMZBdW6EghUruvHkiJc5",
  "key3": "2skx5Ynywm2ui1uJYQdVa7BHxqy6hMXrvNkZybBWkDxm6UaYd1nTDGYGu1Yce7GWNrXxh74eRi4bcF3E6qCGWsRu",
  "key4": "4dqwYJpWSNQUCmMyg5fs26umSK661yYMux7yUggNTcBjXjK1dAcVkLt1MG55sJgJkPE8MuNShfajFM5b9CHxz4fF",
  "key5": "4oXeH4RTrBNwxcbqJsmHABXUcyh3it97CBcorSzG4jU2e67EFCeJPmqizqajKPgCzByPKacLnYQXW2DAWofjpyD1",
  "key6": "57bmqVQwPZABNiFKS48ZdN8GhpVyeAGC15E8R744SNdsfBHdSk6xAZ7KHX6L3cQ2suBV6EuSzzAzCJfacrMqnoRv",
  "key7": "2oAHNTecitRp9EjFk3qPiV8SRQUtrgYhUbYzXF9LqGuuXW8tjxCbXVgXZoabMvZgDPUW7o6iZAqPMXG4ACdUYTP5",
  "key8": "5AT228BCejtnYfrYETkUQeVD3yvM9zjpNoBUnggEbii5Adq26tdFrBctwyKa58vqQkCF4jnB5fttCC9euaDYrdfv",
  "key9": "3YnLyqkX6NgRpxcxntMXhSeZNvc7qnrPXavKkHdjLoazQsVw5wLgnp2aYSiEHFpqoH1dsMZZnZeWNDt6HxoCjvha",
  "key10": "2NuSr1nyG1dpkYReT7nazHmBwGea77ri1DhfQuMZD6EnpH4WiWQhRD7NcC9jP7Szp8fScs9HGjLZmKh7x5Lafno4",
  "key11": "4WgbGVm2TyJQJmZtrhvE1ZA126nUz7QxzE44eKmrK8KKQgmCZSh5pqXxCMBwzKX11uNhZmZohD9pZuPdusRuGW2d",
  "key12": "5wskBraqdndke85KcPFE9SkQT6bpfB5NNzEFSeTAcCJ9pCaWkJbjhpBtegUHQH71HSQX6Zpd96nzmj9H3EoxcxfU",
  "key13": "2FX67Lo885nwRPqnCfAsbJr8bcmvTG2FUagV4nb5MuGbQH21taVBVomvBNGUkJdWau8B59rsxCGWjAZzpJG9bqHJ",
  "key14": "3wADzR1WLkxguZtcp3iceBAgm8zYW3yPQwGVD1yTLw8QzFvd9D9S8pWvazNbQDkR5zpXHbY4hh3BYJ5kVyaMtqWe",
  "key15": "53Q3WDBDSyVgseNQ7FVG4BFCn43A7AFs34hfrM83DQyyzmnwDgkeUx3AQgBQXvqM3Q6ZPtihiTwbCXwoNQaCuFdg",
  "key16": "61qUaV4zywpdCBXan2mweENJYuntd83LfD3bDnv1P4zVKeUFZ2pguUoQ67Pr9Le6bVtdGmZ8EKZshbZ9XdkKowSw",
  "key17": "4uRUiGuWpJXdZXxUSUd4pDnvZK4FKwxEEc5HULUhXP4dNsCSJaHnEWH5UQxKtVjquRfLgFZHhsKj8q5xq6CLeRLz",
  "key18": "2qDeHvpvT1M5PmZDxPiJnosrkU5dWZ6g63FQGPBMh2Jue1FefbFtx4aAT8YnXhicDMpT3zSVN9ARpY9NuoTFDbA2",
  "key19": "4Fvb65x8HkjzSzhzd7T5uer3uze9r6Zq9A48Z7hRKy7wz1YYLv2eKY9sZMjPd4EUCxLAaR3SbCxKmUPAnEdCj2MC",
  "key20": "2C87SRNYh1Uovb2A4BC5mkcB8WG3DortqUqCaAGMb71mGGgsAQLZzUAfn9o28i1idQpTvaXRySZvgcSmw974Cimb",
  "key21": "3WXduVG31FgeB8V53wLN1PurNa5yyf43BMvJgkS1QSB2oCCqP3qVoLLgXXq8ECMdARU7ajGHvD4iSeGZG3mUcZf3",
  "key22": "2qGR6ZswR81PyqEVgWBX4yMnyMhDA2SBFNBzaxfna6HG6acUFs8LWihZ4QvUbTrPSuasyEAewYMfrPeP4jMAiTTp",
  "key23": "3xtMZEnKfxREXc66xQ7ZDjkgyEzUjHXsBUVdnEuERWxN8ppXWugfUxwLXT97NHEDHbBwaCfSvXzekoSHkwm7Pnuf",
  "key24": "4ciaopkh64Z7s2A2c91BAKhsjDcJZ942qFwDT9ZfSzBuwN9sMvNhXhHvMZpndaKUR99FkFzuvKf2eJXCSATzyDz6",
  "key25": "4xCypqfmQuPM5i49gQNnzz27AybwsuLV77213DB57BbaHpscTzpcQ5kDBb9TPLB3Uk7M2rXfUkYYGN7QaE8v3FEA",
  "key26": "2sScdtQSGKWKVoStCotv8HSUtc5mTy4EpP8GtFqyELTfUUoiTVFT1jHG3ULvoydcGdDQcyHMaT7Kmuxx8wVu2F7M",
  "key27": "4jXaaPAqgjDUEjcXE6KGejxNAdiJt25gUr4NWywK4VxpbXuMCVwWK58He4AfVMqjiq5N7n7KMGVV1jet4KwQjgbJ",
  "key28": "2z3rEkCYBMYXErUntWJ8CY5LRDveGoDMctNmFkc3r9D1ahMGntPMu7bsPSqK7BQKR4BiohpFy9MgP41uqRtuV3md",
  "key29": "4myB9CpVRBbe7cYELuLtvxCMC3VBUvpfrf1vVazgSJpbYLroSk8czwvojEMvt1BW7yBakJFRDfuWPsBAnFfGCZsm"
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
