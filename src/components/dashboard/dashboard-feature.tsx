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
    "26F3Get6zEQoFdagmLAAMtEbrazqrRu8rb8FhCCVE12jfGN1Yu2eadBcXGT92tSCCWdFTW6ecJ7DpEeRXJVid7qS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KMEnmxKg1bDZAca2xeBxXtnL2wmRxcNU64F7YLpWF7sDzKgvdXCA4z7ZYnAkkm5JkYVYrfQrDqhuFDgNvKCyG9s",
  "key1": "5v7oQDGKJU5c6MQZWtLxCMbnPdqBYpRqrC3vsPaufioWruHLmjbQtEFMbVdhRXYGSGyTsVSZC6eheS4i5LwB2PnZ",
  "key2": "2usZY7Ea6SGD23w6gdNsbqaUXc4h8iTYZH8jQ2nb8Jwci4AMhnU4mF6YGDBMjcEkYTP4yT3a5enS9NAJouUxqDtS",
  "key3": "3EKZbm9hcixnfwXjFvz6rg43PwRc6g57Cs6pgcXuyFUirxUVqHpe3mfssYkgfN43EVJbG4UUFkSazJqkGmRkcgJQ",
  "key4": "3bvi74DY62oAkEwhvdPqXdBP7hPRSTxd1GpPFKcB1nAS7wsEiJX7MTVLhWnFHQS4obH1b7NJpJtdZnSLSTdEj9tk",
  "key5": "3niLsqcnUBf4363c7XNavVxSMubd2fUuh7dstFWWGwj1nALmcxTahJGwgNKP5JXMoR1aYojGYELSJCxMvtqcz9Tb",
  "key6": "4FkZTcuZeb62g4XTzPyfkKQ2zepA8hoyX1yL9J3AEne13xYTVqpZmkLh4hMcJzXUrCc7weBtQucuRx6ua7w9fwXN",
  "key7": "2fxDzPVww3CTZ2pzDn1yX17ny8kfanCrWbVLVvA3sk5o5gnYhFWMFF7mq4yqYhSFQ3vxkkukNwjZiNKehNQopA4v",
  "key8": "39mS3scL7RRP3E1XWYJ2RBXbhq1XqdrHtuNnWA5pzJSRPRtkwjoXeV3QgkrMBvaSPb8v6iQ3JH5bf1P33V6xxz5T",
  "key9": "VrXpgbtpzT4mUTfoRAWYnHkSs6ptnaAYt7DwCeTu2bkdXGhNr1Psy4aBSRAg2A8xiw6X2kv6Z4KV5uvKTmEq5vj",
  "key10": "5fZiWE2Gdrm8YdnCLYJQfxXpUkmZkPVFTkfJbyFwq5K6eemv3mpRi2Zb1CeVDRnY3tdv5KqzuLVFZmr6wVt2DuiD",
  "key11": "47RJkx95t8WLE29Z2bbU49QEaJcE2c1WMAYhMH2UnziXbfmZDmXuka5L7wXMKHRDZy7iMzjyQneQupwbXq5FuvhK",
  "key12": "5onJCqMH4koXK8PgkgpvLLjds9hno5EsT3Mi3yWWx2TFYTjf1CcRzRDkaKu2kTQEZnGQBLJQgi1wnXkij6bNVhUo",
  "key13": "UvLQwSe4sEUhPoJxniAYvfmD9PQ35YHBAVSyUE51jqGAi5Se7GnYvUdQPqm14SyW9sVKimKoyMWWBqo1doYk9Pv",
  "key14": "5yrH7325KZKMgPvs89jhkXY4XXqjGexAMKpAHuotiRBRmqp2PsjcCpBx4mK6usng9tHsiiZzrUGF4gLHZmMF77a8",
  "key15": "rTEvbyikhNcXKMSzSxGp93neMZrPTHSX4NLg7e1Ms1aTjNhoUjESY2R5APNpotDUM71q3w7ziGdwuibUoiT8vg1",
  "key16": "52W66HzMHvXRkPm74eU3q8c3ALW3UvJxUhsSNBZnHLnupiyLhsvotyTMJy9Z6Fdx5pR7Vfkenj4VVYiA6ED4Gw5a",
  "key17": "2ZJXZPVCgekw9NigKwAY7uAPUpRQKtM63f2tzcHwwHuuvbBFoCfxhfLuLdGePmdqqBh1hKgVg6zP5txsvJoQD6Sj",
  "key18": "g7PsTLHRKgzAGuW1GzSGSigVvZQUJT8P4yDrMD2FjswsLTNC3aC5KSnzPgcNQnRwW27QYXsxUQtuPEKKNEniUh5",
  "key19": "4eJZKqgdvVqWBjsTFZgE8HVLctRAec5VZG3HtvAQFqopQ3PK4iAsKWrYNWxv583CgZtBEiGq2NQ2wh1itp6dF2dJ",
  "key20": "4Bms4HfQQccX3AzoRwW9YUsoonW2jzRDNHvSNyKzhUhCYvyTaEuFwvfmStnRaBBY9BL1aMkR2dmrwPtdCVTENwtf",
  "key21": "2saF3C1C9i4ewAEzZ8uiQ13hSN99jsa3VnqDwcGoQ1KV7ofHX8tRCoescpVaJZZ2sAosATsgm51dgsjUut9NkSdi",
  "key22": "5Qioy3HwAVXAfEMAyJXAMFojSWAdczzYrbxg1NuzToJ265AWddKkxboKaEGfFNEKCVoPDq4Mbh69VMuoPihcmRpf",
  "key23": "ZHgo5dgeJJ8P9zCDeERfVygV2dkb9D33VRcQhztJkbDGW2KM6zGPJ6GbWmWhTUDV2gwqsPw3ZTMLA1rbybiYRsF",
  "key24": "2zusLFu3cZe9CGBZs9WBm5Xj1Q1p6pK4xSVePQTriUzqW4mqHKnV5ti3SHF6MuGHrubfBJydKbCN8GbxGK5o91aR",
  "key25": "2BXZbEhsdB1uRyk7XjFKx4D7Q32WfbKzPuEDuznMz2fkqnQQG8nGdaC9hebyWCpKpDXAhBJiKJGiMRYumMgofUHD",
  "key26": "yuKH45RbV48VsQYEKEFcer9v4TjosLdonVbVRMTjq5Vf3S2BgeiNAvb4frhUFwufU3yonhxCYankZGyH3JYRLeD",
  "key27": "2qUHs1pHg3LjJad9DNT5whUQciYre5kkbHTobmfhacRGtaT8oJMnkvcopYY4hmStPSz4mobrpn4Lcut2Hrc34PvR",
  "key28": "5hg2giWDHuA4hwSzXNXSc56oBvbn9DRuyRYnyRywEmM1hkD26r3r6kSH9VfGNJHk28LqxwL1kVN3CcNxPpzsZJS6",
  "key29": "4Tnjk79kmTCXbEevd3LSqTgCxHUCZSDWN5sTD8mWoYnALfYSoMDETsLBA8r3aLyTbc9Rtpe61eEooBF1yrVWNSTj",
  "key30": "41sxe8WVCyGtGr69ZbbXzRYFeyM7Yud2D49znkz9azSwyvXwTKfPqYpY1fjqBi19TAUwr83kFrLWBfsbKERUrSQy",
  "key31": "312RMPYdj3Z7rxPGgMumtCLY6CjFGLxFhNq1KL3bWPwuFfRdXhd23EWoi4ubsWx4AumuVi7Z5P9Bmwpe2iYxi9No"
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
