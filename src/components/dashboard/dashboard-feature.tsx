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
    "dcc8CrDmxatM2avARqFYpFSg6Us6wbqy9Bwd4APpTR3CJdaak2HPzJqwWsqF4x8gnRV59WMoTuH7PTGF1D2gNkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VKq4BmKjSuD8qaqnp2FrzyarNhgmhLU6NM23QE8dwDfWYa9YDivvePbPA7t1ht2xDdKnMuK9pZVRMPAzA5kRGxR",
  "key1": "4Es9QtiG4Dqud4YJmRBEZdBRmYgPrAgCYd5ZUwS4Zw11jELDkPLsgcReD1xtdPEhGL9j374AVXHDJ9xix4mVtitT",
  "key2": "4bE6NdcMetXMZgzp23TuuguiWTynDzKQnWqdiLraeUUa1og35YLWUyBp1DoHhkDPnXiTo7Loa2WAX8TifQoLJVTQ",
  "key3": "4uemwYvYNAWorfmdi5KhbFnNjMFWmXvBgbs1dy71sYWFANsK4vfSDq9wjw9Z1NTk4rgnzirAWR9ptFR2phmAj2zL",
  "key4": "34NxriigPudkHyKiQeuusJ52wikPWakPiKJU4TjTsawgL3nFJUfbHMEqxMQvWWDUWvrSZhXz8b4C1SSaPjTJUy98",
  "key5": "2dMyC6FFp8SJ1X7s9P42mXwXwV3S9iGgWd2wopmoWU4hZzH4VKVzaEmqDFk5xsVUGj7VSYFsyV5N1fZBcCYWi16k",
  "key6": "KJ8ZvVSbkq81mfgLHcmjvVjPksy23e2e22apUqFWDJCg1EgQLQW39seaSLZ6igErq1ov8YdqJgnMiNSQTw4m3a1",
  "key7": "5TkSoUAFbcDFMK8D4C55t5Z4xnKnYkDSWs8yTPnf8GEcMR44Vssyph9Fn2Rtx91GKT9Gxt8o76vqoJ7xEDxE9T6d",
  "key8": "3ANjkKAeuwpGpuThRHjXTbe6QZxs41kwASQr7psRLRjgnDcshR2rWxqLnwqe6kA5daGuN8imzDJYCuMs6jpgqh2U",
  "key9": "5PC65QJuzzCrdsNejYW4fdcwnoTBL48Y416k1MpL99pq7XvnbaZkPBWYb23Jgi2WXxWeKTt2dkVzJCTDdSUVtAAi",
  "key10": "2J9BFB6biC9j6qeFz8pTpEQ5x8SuzqLfdpzXnKEuih2vX1r3LZ3omyr8SqT4QPCZiSZiPFEvkVx68Dazu8LzYXgg",
  "key11": "4TmXEzV663dWjWcxceoSLatAtXAcsitmNDcwGF5tb6GzbqBgLSSkYLdyKWddiSQCTrxUBaJEX5JfYe4mBSaTnqCf",
  "key12": "dnD9svAjqxauptqcWBGEuRJhTJtnHXEpwG9ShfmbnYMaq3gB6ADs8kZM1smDERhVKVZBzKUyUwbPWnyH9RM7xRw",
  "key13": "FSBMxgUymg417eWtZEvvR7cBaTg6Uz6iyf3Nd1Gm4NQd6V8uj3rZ64SJYpPJtUZogoS5M2YeP9d1TuEdwFd7fVJ",
  "key14": "4xeUpFeHp3z8xDrkiVqZRRhtwUxyA8ebHVJboStA7ZnnUgawXywwWM6BjigYKuJy5om7c4QzmsRGkbwXc1ufr8BB",
  "key15": "Kwa3Ku6vjFeDJXiyfiLrwSLhb8r8qrrdQzB5aTRVPeg9Xtusx9Un1S9G4rQDAeNtqnRxC69nyLz7d2Zz4FxiZj3",
  "key16": "5d8E56usCb6oZZEfe7jw4sK1MjdagrAz4fS7QBq1eKK1JX7BeqZxodCxWRdocQJQar4RDPBwQVMCwgbto27vMDNC",
  "key17": "5XA4T1NQyQzkHf1GeBw5T3NWUf57HrfYtDYvSPCkhndG7KtrytpVLvixgwgqMt2XUVzS7AZ1Zr3jXJz1txtqoqUt",
  "key18": "5fcpZs1YWKhqmsbXJMhCMfknauKbVZxcAtKByGqCq4PaorWds49fY9LePDnFaco3UredBKvk4LGZTQ7JPNWP9hFe",
  "key19": "2Fb6Ceak2HnCR8YyScjfiqk1GFbSvrD1NxiJ4zDmDNudZNw5jqVzyiHn5tx3SuQueti3abUSrUMwjn91UqUj7cBx",
  "key20": "b9LvH25pnYi2G7Kj9ARbySZeAtrzAWsuCMmaeipfrSiw8pnezk2kux9ynLfF7yc6ECWjKd12kT1vcz9F1UVN2nP",
  "key21": "5ev3v2ichnyt7jd41GCjFUqCV8sp6cTeKavHMmeRDhdT7kswmwJKGuADwVvnJXKzWkkykvxuJzS7r6G8aeihDpjB",
  "key22": "5m3EUGdnyXCw9vTgpdasAw7NoEfbTFWXGrCNK4hYB3rqiBp9JT8EKhZwDQpWstvk3VKgroFSKBHw8dX9TzRSBnMJ",
  "key23": "3WarcLZAJ2XfwrhWfQAiFKUVwvJZnGoraUmWjGRovu4CD4SL5uWKtpneajhLbrzjC8hDjxaYATK8ToVqPuEkfoUX",
  "key24": "wmguqRrjs2KVqB39oooKmLVyDenEurdsfsGLZswJ1vdLtpbGiQX6b6GsLV2kZeQNbUQ2uHkG9Gfkh8AFoEdhh1Q",
  "key25": "5CCNVHjKinpvvfeBogSvPXtUrQ61FqP85o6Wg9ZQjni1eKRpD9UsfUKptmmMMYHKrKexbkZBiTtn4d5AnRoEXEjz",
  "key26": "3uPrpHFAfbHRexMoupN1eW5DrCLgbWYeh2E7Rbv4GDv76KqnSonLGJpKa7X4cgVjgHR3rua5XD8X4Fd91v7SiSxa",
  "key27": "5vHBrcDAxzvJnMv243rjAzPzz7TfDw525Z4vVnAMVdDMwykRzJwEJs6T6qRaZAdjLjxpTm6qJpetqM93Hu8iDbAU",
  "key28": "FoGuGDNrEYmRjpc1VR9PqxicE54Q2z5ETE8Q46UqYAwbtwZy1Fn2quQn7Z8XwwhE1YmuDdG8cudko2LVQ3RD4mG",
  "key29": "3z3WGYcBjutG3zTbYFGpTDy5DFMMj7Du3eu9hgXeFoWrBR8xZC7Q3sj7RF6QzY15TfFpvWq8EthxLszmEzVb1e4v"
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
