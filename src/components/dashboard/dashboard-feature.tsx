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
    "5uZ4QsnyTK41kP4fk9LD2h4d44qFXWSjHFxdnXPZTVcett2xzZr2i9VpUH4BrUosnXwEBvK1qAJZRH66sho9UDhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ntS9HvB11Xzs8jbMbRWfZyfHUnUfCZ7QfLLZGqeBNaHnYSFtQfin88Soy16e97yYFWRXDCYZD8S9gzGTDWEKbqh",
  "key1": "2ujgzwhueKAci238ufK3z9FAQxKtW6SJgtaSCDfK3jS7wZrE7hfa4E36YTvseLAzgSSveBxpqEgTcgweAVMszBn5",
  "key2": "24tQ9zfMDiDb4Cm9FnDizwW9HMssgub4fqYJAkkovLBSdr2Lsfu7VTNk7riXtzVt6S9jFNjShqirxR9BjkAPY25r",
  "key3": "V4PwYhwy8cys9YZ5VYuDko4RewhRWq5WqbfY1nr1MsB5KyUmbfFsM1B5ZyNiZ5yNtH94SJ3wU6nETVNp8o3mUfE",
  "key4": "5pzXzRi9gpK5NSr8qrwwagsqp1cVdzRCU1ndMpf7VTNoeXDfcYgpoSwWqwzTxi3roS8qWyWfqf9GtEQx754a6gdx",
  "key5": "5t4mS8GfMttdyGqcrfgJAW6jXsNqEUQ4eMHQ8e4eZjqrCGBH9MoJTXcYba1sge3iAx5vLLsrBw9GHteCD9Hr3fHb",
  "key6": "5fwhoE2ioT1rgQkmLcQuxLeqGQciNStrUPycQB1rFUuM1KZTHoTui3TxdoJVs3FyKS9tK6Tp6xfYxWYqWNJAZ1vZ",
  "key7": "2tiYEqwxUrBUinpHLqzCtaNV5EW2SCmQNcBZbBDiucVVMtXUaXnCmXMkUwzmX7LwUrE1gHtExhp2cRu5CHMcsZKb",
  "key8": "3N1JWGv3SA2T8Uy4WvqSyGTZ6UMurFCCMEnwJD8dr7Q47RJf9k8Y3nfaSYXR1qaiUuu8PHfnD8ndYQsyxauKkhGB",
  "key9": "4ySywiVxTvntiuYZJcScLbLjqL7vq4TKkGFgdi3pqQkEY8qq4U4ZLCqRo2sQRjHnXsR36wFhvTM72VVo9fW7rviK",
  "key10": "4PBsQniqc2WLJbBLoB1hDpy1ZLoAG8G5ZLunttrrPCFjmE2isu8V3JS8cHUEfChUdm9cRaBxn73tx99i8i4PmA2N",
  "key11": "5KCUEJ1DJNCGHJX4iGvBYpUZXQQ2HhuqLkyN1M2Vsd6Ka7GPZY5PwMREqmAtJR53dicJK6dC3LnFhjexZh5XFVRk",
  "key12": "5Wi1jKazwjfHgCV42Mysfm7ZfZ21rkY5Qa6C3LP9QPBAcstisSSTg78yMMVgGZAFqf1msGRbX1eaF7W66Hs3dbmb",
  "key13": "5LGUFiVFWKbBREVaeqhu2ifmZ4wzyJ7bNQGCrjzygX3xxk85DyrAv2m1JNdur9mggKJ9RpAMiEFB5eMuaS4kfrpv",
  "key14": "4iwaF2BPTFkrRgg8zajnYrckaFG6LP7NdvfAUenGDnZRp9nVeommSyjfak8pocURp2nXtj2yQ8pLQV6SwuXZoWFi",
  "key15": "3fo8zreBCtcSVYhx5zn4yQweguUKtSmNgUeWXtegnUbdykKSEVCsSmJwfu8TapSwkinXRYBfFvMxEbTdo9Mj5iB4",
  "key16": "2s5ECTSmsxCWNkjGHwSL66xnedNhQ6n6rVbTpyinieaki87dSPimSVpgV56Vc3AKZXsLWfEQJAauJs3aexhGkoV1",
  "key17": "q7GDnVBFY1mEyjw3hnoir5kJupsqTi9x7bNR6JgFDnJmB9yqHeDpvQ1V5QeCrRf3B9SGxwPh6hiKXhJtXXo4ubQ",
  "key18": "4H8SJxsaeRbwArtLRSiCfpmLoS8TUziBNyzDPZUga9BoYmDhoM6j9gYiZt5kby8KpTtAMp5eBz7dp4TrVBzkH8T",
  "key19": "3LAz5ortgcF3g9yqjED6XYsXazC4bkrK1d6Y2h9ZcK5LGsFw2sW3mEuzZ7yZrmpaLKdHqXNncWH5xqYLUKE8v597",
  "key20": "5VdtKVT6YozmmhJqAtXURmoxwEbA2hEEN5FdrxeRE8R22JPd9zJpAUanA14RzTa7bGwbSNGqJw7DPVsnpnrDUmaU",
  "key21": "2XjHpamcyjfU9LmueqYhrQQquMeh2rruumeA12xedDLksTkJp9V7RAnrYXbWVDqS69BSnEuSW9kBog5VwkuF3nyH",
  "key22": "3NJmaPoZRr785zgBXaEMaLKBPzwHfPQeJbuNA3KNPet5i9CqvuB8fvFxyrkzK8uweVN7LYJh2PZ2dCxW6pRxscfj",
  "key23": "3rThCC6VqcXe8RQwx5yzG88KqmV55xXLGCr5wqLvyUTDAyMB5UdEaqivtUHkKtMcXopR8Ja2qtgHPGtTyewSsaDy",
  "key24": "eUL9mE8t48XReeuGcdJWQJbYXC9Ymz3m48G6FudnHWmwYjJnAZb9Sm7SSshmH63phfbVsN64QvpgZEQZea4C4H1"
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
