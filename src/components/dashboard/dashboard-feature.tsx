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
    "4AA8AZ4oUiGfxagHKCA1utfQP3Pn6ismPXLFX9CXWUeMKio6hyrndZ6yn2cYokq7PUpmxtnv1bhdef71SozcfWxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nc7n6LKVqsdWe15Aidw9hCo9LkeWDz7CWZxpB5WxcNie9Xs8fU6zMhVkAy4pF4svhoCH9SG3TkLUZsu9JfJn9uk",
  "key1": "3kgBoUgwNobKnTSBvBVXxeDCsx39w8ENJ3Rc1W4hkxhwYpQAgh8wVdv3fG1Q1NyYcN1zCBWG2Ygvv6yWPaDMAki4",
  "key2": "4HshxxUNdhb7AGDzxEBHjYKZ1SAUZvAjqKm4qLxKoZW1ETvD4BGpDdJmikZEPEsg4Y1PrkHT5YR6XN3K1R437bhj",
  "key3": "ZAmYsPvfjb6L2KL8jpLcgiWuXyEEZ7883P3GEaC7BnBNodKecYUPKnihukgu8vopQ4ptxnkWp7CKzkMxtSKbQfj",
  "key4": "2KigXjXUf1Gtwc978Zrvv8mCKbGTCZEbc4iFrkycdvYqQss2A7Jft3qMvrNqbChpHPfTKdb67QcadWbKVePTbb9T",
  "key5": "38xtCUNHGibf7zCFUt8zaXs4C1TRjyMjg7GKV9ENzebPsZ4FsnFdSd7eD765cVTe5FcosP2fZ9sfgCzCcy7rtkYN",
  "key6": "zEAthfiUFZuSpCUJTCj1GgbDrU4pcdW6sLAzsu57jrQCSBS2wuASH6bFvWfKfGrtJPbuvr2hGzpgMuKUZv92xft",
  "key7": "2Vakws44gQpQDSw8hsV2ejiSSFRPpfqjqARD1snodGwpDjR3vcHjepjAwJUXusJxoeNHSAHMEQZ2vJNVSHEfGBam",
  "key8": "3DUZ8ZMd9WWMRiSRizYS7DtoCaUNYcYj9htusbTG4FkhXhDS3PwYUYE6uQfGmgBTTKXqUVqfmC2bZzgapNV9MVh8",
  "key9": "5ja17WUqvcqpu3nkU5ykTWr9McGMzsr4RRif6nW4761ZR4MaSgZkVTngVPFKssoK4NaAAbMrby2T5LwFWDKk2NaE",
  "key10": "525itoz8FekZ6hpiwDTFxkcNns9GNZJBfgeHA9ddsTvZtNP9Ef4bibtqYi4o4so39n1qz9skUrTVFg39FECeY8JT",
  "key11": "4C8uNtsyjd3Bm84JP7xiNJeDPWbTuygRfAbpRNkjSfSm1a4VfzSZvWmjG4enkysUbtcUFwT6BkWdMQrFzecusdeh",
  "key12": "5sLWEwxpUom3CY8Qth3KF6Rs6MapoaLQU3AAV2KGHDMKVnbhAtHSWj3g9b4dxzYs6PZQRAynPnzgMFchvaV99ZsZ",
  "key13": "PGH2fXoWshpZDaonHuBSsWqC6kPEaBPMwZJG6QTiiKWTfVqdexXBkqS42hNTjGtWeGCjSXGPF5mVch3Rv7wmqiR",
  "key14": "3JxkdAzGgNQo3EoGSYuCas3UqngywkCXa61hQWZL1dASGNuq5vHiuJvDweLSSMMq9rLoTQX6kLDMT1GHY3HtRwWp",
  "key15": "bbpnx9CJzUBk4BvRAcY6V9oCrCLJ8PiRZ5xZLshBhRc9cMFHMjTvL7HsdD9VZkJ6J6PkKmbxPeu4u5knnqdCSSB",
  "key16": "BMbTVNLa76cmAKQqjX4M657Lbzw7WuJBPvXDNbxyPtrw9Jfh3DX8xwvk9W5bUJfQcmLqEfjTN3P5M3W9Zvau8kc",
  "key17": "Hbs6vRCGf5jQ2QmtGKendQWCNR2PJupCu7QGPWaqXkp3GKbd9XimrRdzn4FM5nhaZ14DiLwwq25Xra1Df8Q3xWn",
  "key18": "5yEK6BXMZd1SQF5RgwqU8tdv9Y45MmrbJjFCPZUj7zk8F5UM3D4F9nK2JzLvwoSCCKKq7gxRnYLzYWvtSmEE4ZxD",
  "key19": "3QTCNka7uD5GUEYaXm8tekFZSLWCHX8LTVy93JyPxz39MLyKVmQQWsuQ5uembsyos1Rbg8TNbmtZqPJpdMVVLrgv",
  "key20": "2cC7aX85TdMCJvToS5Lfqcwf2xsjAEeg7QTg8AP2rkVDNjMJSMUm4NgpLsYCoeJG9FMQDtq28bgzmksAeXYfi6JB",
  "key21": "RaStdxukT934JEpy7H79apmzFfF7x6HXMN7hMgGpaYCSJboTyTQmJvZEoy4Nsug5RaXeHwbMNDuL9PhDgwCmv6h",
  "key22": "3hgMB2UP9Pjy24XnZ8WxQBbRDcEqA4EH6p3SCFhAvpeSZRwTg8hy2ySuGVx2t3CHJAysPv7ifAjwvkytx9HUvBW8",
  "key23": "2ukDywsc5y9tTTkbf7rtRCD5wdwojsw5UEF7EZQBGFaZaNqxfkJHT8SNDYFh8NumH3GGXCBNeVZrMbNWejH5268C",
  "key24": "3VWd2LDWsNSHe9CfnuSTsWsdJ7Kc9bHF6xRNPyp6j7xxva1eo2RRbq9wBUyhyoXbHy7ZmTxkjCvEj9ar3BWC35De",
  "key25": "tgBDyRnFJ2BmoRVtQ8pkCvitvyD8LSQjS6x9NghThevzYJs8VPZmGAeoCTEeLXe7KpzBtKabCcZwUGJTRkCFo1d",
  "key26": "kUTEcGuT7FUH9gXZtYHkNVSaJboY83Mx4rhecpuqfQ8kHWgwwSEfYZGCKL48g3mXB8kQeT6L4rQvwu6LQgf7Eh3"
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
