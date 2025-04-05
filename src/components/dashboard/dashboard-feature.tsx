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
    "4986CdVS7xS1ixXabkvcxU9Cpy9RChABNFDNsxyWFmAvs4s4hfD9tncyUKiEjviz9tRqydMyPULQwu2pm8BaMh6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9DwfckDqxdFEBjVwMMLDjrckn9gnahKbZaKGJHxK5wxP1HRGiABAWYfdJbWKEgezZQBGssVDytvAxse165XMrJE",
  "key1": "2Tc8QkDWAC8pjegorRpvRbqFYEd6HwGzReRiY4LpuXNygRYdL9BGbHmuSbJ3pFFFJeR3CgMxxaaEXAX7MgzP6Nqe",
  "key2": "44U76HnvSsGDf9eu4M8PVFZQHvYFrqJdz7LKzQdyLHp9nosLe8Xz4TQ5MUrnTF3i168oRR8nHEB1WACwTgQdjtcf",
  "key3": "ASxVfSbP9wfvYNG7nip68ps15bwHuAazWMP145kD6rjthBKVw3Gt1VbyugYHfSgFH4spwFPkeEWEggPntneYhmN",
  "key4": "4vPLDJUYbpaS5Bbg6zbzYopFEUqbN8Mopy3Qc7VEMAp6BagVXFoSoiKHsB7NCqq8gYwW4q1ZunxGM5FqPYAeWLuo",
  "key5": "3erLf7iEfUJBNtWk7gphxjWwzaCKXYjt7VzyzoQVuqjkUs36SXzD9vUoLw6CkKekCmosAuDSeX96ksavpEEm1xVP",
  "key6": "4KiavxrZ9XGFs2Tb6Q7yq3M3agajnZeEAaNFBtjqKxRpFbJKiWxMvVgwx1cwTxtgkXUqtgkR4ki8pcfFYdtVdetz",
  "key7": "3e1agaKChdPpYFWtCz4G8RLeuKexg8mpw7YfxJAJKUuvMqBhe5dgL6VM4YdZBz2Y5gDJkCn7bH93yQbxT3KX5ttr",
  "key8": "BTC7udtTLXsCtmTK12UzDUHWHyDAoixp6rekx4HikchwiMMxMnTChQsAWpSLcbftrD4VAEUGz67LkD4xFWAvmFA",
  "key9": "2Li9rxwrucayZ1WUCNeCeiqjsm28XNjL6E1rAHv6uwanvqy51TzVXun8udHPgSWhiWRDCzGvGKMuPk4uxK2kHiqx",
  "key10": "5huDdL4RnLhXjVG4FUWXZydFq6DExmqSDJDnYumBzTvwfoAoWqeSaLzT5KmqPFVrbZS7HAvtVXUtbsP9EW6HJkhZ",
  "key11": "54YGagQuCBvbxn1VdQVAgRvVs3aRsw77periSVYRCJzz2Bif1LRW78yHF3uLGRwFxRhVy4cw6qR7rvrcDb6nFV6L",
  "key12": "hFaTjFCVBphAtBtievEMFokUnoQCVev8n6ozDY536H7yvT2JX57ZkQeSDRpWNqrzb79FQrYnd8dvUDS5Tokcmif",
  "key13": "2eqaqJNqZf3s2xT9YeDDUhtRsuMmL6zo2uZB9JemqvoiCV1wSanNeMiMgHteFo8HjFvVZFXDCiC1rNhR7zKySyvH",
  "key14": "2zDsqNBkcPfz8hh2ofyo8rkrKhYxvwEYYroA4Sk6KSHyDx6vseGycqHg5hEVUFAJS3PU8F3PuyMa726bwsHgtS5Q",
  "key15": "i6SDSTJ8YvevEJPkRKDZtuXnEw8ffcF4HKvHysUN5mRXhQ7Bgto7B83nbjRPbsToc1ze69PZi6Kq1w87TCeV7ea",
  "key16": "4SrRSKbrTE87b8HxePdMKpaLsiSCTFQMF9BfWHxTH9YBfN73oVgpt8hgM2Uidz6MseVM5qaZY1Ezk16yA1PxLKV7",
  "key17": "5qzLdAuryufvMXoMngF5tY5BFUMVVvpw9d8NqWTjRJxnKPMyxccpJZxmZMvjp4CWoCgQcFb91tGYofCaCszG3tiQ",
  "key18": "2cuYAqD6cZYskh5nN5ZFNMQzv4cAw7FrrxEJBDQQP11JFGjFDVLESP29mW5nnq8XuUCbAWq1RfJPTB6CVxCf9sey",
  "key19": "5DswgdtNtFLaAS8keodC5ghPeywGKbEM1fL4FudkDtpzJUwKo9iE8WNxe6fTwEKiiaPLfTYN2f4D4oTut3ig5Njm",
  "key20": "275v7Gj7Mxc78VzFC5wV4uqzHkEfutsFDGcSnyvLHQbcvdgPQu9CbNcnLyKrRjNQLA53ftx5PhXMpF6mJvf922Cy",
  "key21": "25j4xHpanYAMhX6WA8NXC9rwxygpursT7Wxxwyvv34QSL3LnFNSiVx4hFUSedBePdeJLh7x7jNSQPqGpny9Hdn3c",
  "key22": "2JjRUKR5LCwPbW3dexBLZZb3KNsRceaasHG2mhvt4KLfokukjDaUsYLUDTarJbg3kpLu2BzE5o4HemVFyBXotQHn",
  "key23": "MozM5xjRGgVCunymuSxmkQwgXFDUvNzb1WExVrRz6oVZNqMH2Ea49B3Lxj2QGfzyzF53CaHvGkwxLtVHEUQqKiv",
  "key24": "4RokvRy2bdRBfPL37Uf5ZcqoXoq3anTjr9LxKAJFDoB4BKqvGfoK9BZ1WxhsfZYcBCerbk3sKojp9mVAqaDaryvW"
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
