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
    "4AMWFK2W4msPwn37GGvqrMnGg7Cazn7CVCj3Jpm54cpcm1tByJ5fY9RDiA6FP9QgW2mB8FJtsP7uuZ5bcXFTk3pJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jjyo3d8qSS3cBKgULboEQUSuqDLfdHyBJD2jo6ff6aLPiZZm7AjWMicFYyADEr7vMDA5zgnMbMXFn1zzmNtM3XF",
  "key1": "5Jazyx279NSA2njRC9ofpoELzc6nAknsozgybonDP8CUTjaCUy2LxEVwHb1Ykm7N6r7vX2Lvybj5RipM4YnaUzK3",
  "key2": "u8gRG2RHwSqdXWzpBrM42jMF7dvWLzqY4ukaBNfozeQfrN4Kk1KDDf9gDfEh9MkUxa5hJr1qE95BBfFMeCrRBth",
  "key3": "5635ryUQZ1774LqP1rZoDmVfJP4nv1K8cPAYYbEFoPNg4uLtyYRrCC8k7WJVxNYHpcsmWH9y5PW77eDc5NEmZZGG",
  "key4": "5PEsTMntU69jctG8aDzycr9o2D6ypnCqQLjfvB8beFbp3qJicrAX12EmnjqymZ87p4JY6AenybiP4BbX6aQXojn9",
  "key5": "4aEdMngxE8cHFjF1Gzhi8szyWdxTEfcpa23bWgPvbjX4ESpdGLWprRJBube6hmpZ6DZ2qEV36R3BNqruFkLZ4dch",
  "key6": "Wbu36dSe8gZKnEiMJ8n4EwTkRyZyKwpaGUn3hZjsXmEd123EGAt5QiFsXvfE6ufx9XrhmM5cVLzFf7uqPYVKXMX",
  "key7": "393XFnqLuL7DsVFMpUzGJXg3xxqDX9uC7zJqBrP53RJZw3w9Gd3GppDYxq2TC7JkgCTaQUKDEPRDjZWPtuZPTEFn",
  "key8": "rvd5hidDfCSp4hCiDGQWHg1AT5vKCo7rFnQ6P7dFbEZX3NYHtxpWpNSPF7JHp8sHJ4KoKXupU3YabdzGvNwkHR1",
  "key9": "5A71VQmmgjfgzaYChgeaswgnodKL9bK8S6DPwYT3iW7WEDmLmM2Qb5gCGbttLRfhC5r4fm2KeS439akoSw51qokh",
  "key10": "4oCE4viKrmXSQFfsxbJ9p1uRWvP2oHNXPn7gce29xra2kMJ2TRbMRukczpZpWZL9fENCyQv8y8L8b6myTnQxcgNG",
  "key11": "4dgxiTpwsW6qNvU5NKNKpxHHhfPn1MiCpZwF2ibNpmgF94gBcmvDnHYidiQcAGHcKHa1gdPSygxSHMh6bksSkM8m",
  "key12": "YjZoq4xyXTAD23C527T7u4ah4kfqBceyX115VMsm3bkhP2VqHHygv8wpLuRrYCbgjn4EKHvukJNBxKtPi61EXXb",
  "key13": "4BVd1666VeiWixtdXN8Qj7DxhRVrwcKv479Vt8utSUW2hJbV55mTmEJB7MWQTB5ryQb6gnB7ybj82iKewxr3w8Fx",
  "key14": "ukVPT98npyhRSK98kAhcSvxHyppZ375VBPVmGDAF4YZoNU7HPZMTUDmuP4VTmn7H9eZGPorcC8bcf2YRRRMTE9v",
  "key15": "4ztYxYB5cDVMngSRHmPy7cgDgxz82Czh1GStvuhXfhTqAZBiQL5cbnFftjRxJEYzejiMWHXjH85kViEQLSJiKimD",
  "key16": "RWdAE91GGwezg7g4QzstHrj9qsjneK6FDC7NuSdUvmoXRZeFURscLTn8P9XhfLZ67daRKuVi4JTDhxxFBc3chcU",
  "key17": "2AgEcaNppoXHNVpK5WWSykFAnEps3mfWRViQncVSXA8en7CqBrYwWbQ5pxWSUFZbsrkXfa5LmQMeUhcMxoCRjavX",
  "key18": "4cdR5d1YwinF5HoJsM2i6oaQ9z5c3kUKWgpGCkPugFpfeLpYDkrb4ZBcb5okeTWmfKsNnp1fPompNRth4iWouiv3",
  "key19": "387xk5VctsoH8ajJ53moz49KU9zRhTtAcvmKf36dAdTB8o2fb68SJ7vfX1dVB8mWu4gA5Y819ZwPDmZjBzJzMN22",
  "key20": "jVriho38jo5X9etaEMGm2AR4uwGzCURhKKri4dS3HBT6uDLRcNZ8KAyJAGembWGoEcL32E9sCZJSJua9m92r8eN",
  "key21": "4coHd7fbXdE6hQHWbofXUMPwWhSuvU3jiwDKxGZqYJrKFnnK9A2skyJQXtGwAS9aWjss65HpsRJG28qX8QRf3JQ1",
  "key22": "3AkYRAb9UPAnC1DQ4HrRu8C4vpMBZLCkEuPQYg6dVqopHWCYZAghA4dqXf99rCiQov2BcL6nenfcgU7xsWxT9cB5",
  "key23": "QUR5yvB9vqDf7izMmuP7CpNg4GHsBEBMYqifpBGSXBJtvuKyjNRxo5fyMJituiMJL7zyr9a9W1oaZSAZoKh8cra",
  "key24": "3Qi4MmyhKmbvBeJitRzA5H4a1m5zXFEVYdSUfaSJEr63oLQFe2YbPS8JvPFurB3mYwWhawrH6LBnbe5F2eiRN48k",
  "key25": "VcagroVJCSdVacVkcKPiLFVFg7YUi1k1aDrZUyxS5xxM5ApjNLvg9yW8kS93D9XT4JvYB8j3bo2sQ8az1Kxh76m"
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
