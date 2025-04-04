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
    "2BB7xkk9iD49zQn3HvQE7mTJ4qQQTwGZvcSBoCnczPmvgxJ7fmiXWjuJEyHiQmQguv9v4a3uwUf8P6r146Q3vErg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57zyJ1ucfT7TVR2UJhvxjQzwi4kqDJQu3AH7TxdHT23PAf5hsk4VUZgdERS9FXUTqvyc3YoYWPBDjCqeUxzj7dgG",
  "key1": "45SPywBuiMvijXFMsLW2eCQZky5A9H1F21JexTrwFMGSqtfByJ1kt6bEs2wM5wKcd7WhzSqTdzh8Bf7FWaKscyTd",
  "key2": "59m91KBo2BDG1xZG88JoLrj2Sup9P63XQvqUtA94oHPgktoWfsyh4AmXfXoyxSf2XA7feCBomkemRpn7fVR5tPh4",
  "key3": "Cuz1mAnVMKDpuHsCHy27PGQTjYZZFeuwiYrPDZk4rysVEwWCgRYNfhhBv8ThaBUuUGcwKzQmSci9HBcH12DD32g",
  "key4": "5Gm14eYcZ1hr8aSBXhHYqLnEB1L2NNCwDtktD2BK9sWxXiWP9erVfxjWDvJkzbsoPtPAUTi4W32uDv3Li2o5czhx",
  "key5": "32uxdTcjnJZ3S5pbCGZ3BaAU9342TbuJEEcUYaF3V6Q4Suam2c2FnkQansqozC5VSBsX5zKeUwzRLXbP4B9GhocL",
  "key6": "2LuEEyung1Z9rN4hEQPJZmxpvwq5zodaDKXKjDSKQBa57Nc57Ms8pvG9LSP1wSStZcimgxPJN7wEmkWHR1pbg9zA",
  "key7": "f5598T9659PHKV9rvJzP8XxiDYESHXciGfCEbAQfoTQu4qzxrgSxQ8o9FDkddJ3RqpBcQ93h7cshcVSsCVsSnH1",
  "key8": "4bHSN2prTjmAvNHhMo4FnkJ56xdffmjwhFUoZcd8JQvHjy3fsUe6DdKMKb6qhF1dGwoaNSTAxYKLNmAGQoTyi6DF",
  "key9": "3FoiK4pmqHF1jLeuEcgf4wcN95NdqyTQTjkqtHqi5GELkrvxDpxCbEV3zXYFRo7fDNhcJFzzK39ZnYuYs9NxHgtB",
  "key10": "2LZayknXdfzFf6ZZBx2mMbWC2mjdJykP37wUYDgHDrZMEL3ytPUbtZ8Bzmmb7d4sgxKzQHa3EyPoqpxUnxTMLkJb",
  "key11": "gZDoQ3LUKQziRctz3561ps3RZFyW8PRcp3QrSJg6vbf84NgXex34hHJfds75MekKJWqPr6jXS4TZi35n2z96677",
  "key12": "3eMBSDNTqTErvMxc7KDdqf2RheNjmoowWSyTAPXDfBtWyWjJNCBRTQyXY1Ae4w3P5HHJuK8THGws91ejBoqHBSPA",
  "key13": "5JhRK21dXLG3T5htEEr3oCegFFrnKA2nEw4PkdK51JXVetjEkUxHhTdb4vHBKn5Nwzitudh3tpNoNPzBbQN4VFkr",
  "key14": "2cKj3pMBjS87TXKt8t3FmwfLxSK2QFSShvqKYmx4cqd3y5NpAbCpcBvRSkhrzCprQ5kHAv7h19RRRPyQknx9tePf",
  "key15": "3wPe3vdxTZJBHGtVGS5sfMQ2d7uuJcrkB9VdQTDDkEvUumKo8VqtREc4PoW1sLpAuScC6NZ5uiFqCtXUbf8EE44v",
  "key16": "W4opyDKgPxLeM3SNCPVdrXdYDUJSEm7SBL3jgkuzeKg5XtX2KkBVvNRTxTLpXfH13MPToNFCBG7E5qJHXUbEzth",
  "key17": "Ez4FazDKPSLfA7GzjeU4wBiUBj3sw3NS3M2gvaDWHEqxRbz1v8LUYWq7BVS39xTSjmu4a5yiD7po3HGY5BkF3Kp",
  "key18": "6KgNC2gpxYKqJFVSX2M2ud4SnmufST1GZMnfdqVk21pupDMP844bmnWdDHUxWnKqSnxzgY3ZvMzaPQVDiwNJHxm",
  "key19": "5S4EAz8a6nGySJrqZYu7N5yUmd8stQYh3sW55hxpS9vm2uhcn1kXZo5ym47bRDiamV5nuqgMSnkahVNSXq3EFyNJ",
  "key20": "5iivExkaHuBpwuWz6VnX3muNnmknnEZb5Um6jdVEH3VZi2k5Ud8RZBcr9iLCiQMm3LX71WsxSjDaZ1esuuYTaiJa",
  "key21": "3APBZa9WseoTr7GTnbm9nGorsAJ8xH2yjwNK86GppedifWDZBPMVtf6zzebSkUop1GKDnGJqyDW8AcGVxY8i2Sn1",
  "key22": "Yo4ahEuq9vNYHHVxFs5tDweKHz2cRb5fj6knaE17BJ6j4cMjVnoagE7We2KqfzdCAycK2dxWci5SusGU6PtbCH2",
  "key23": "kNxxRkiyz8dmtmNBe391zvUNwEUMAkyFKJQ3fVZ1LbhbDSMs9FoD6wWMh1uKFFhx1JyHvmiv6XJjaDyiF7CJWeK",
  "key24": "2h6rdAcyYZD1UqU2gCmKv4hoA1yMPnPjsC78ZUBNPaSRnBna1nAGRnNwUMd4KHi8zcpZBZrBCQHziCPZvv5Eij5W",
  "key25": "58WouKoHhtGE6o98HX5EsCzHJfkLBiwQ5zde6EXYVQV41AHPa1cU2hcSo27Dgg9CcXJHAQWbmFdCbeNsGE3Wa7T9",
  "key26": "3CZsPygdkz7KFg3Xd2GssTxQbzZ5UNbqYDH8HpG5AbZLKkpZEzK9wdXrQhmDQyyrv29wxezMgp1h6qxC3R2PdJvB",
  "key27": "3Z9Gx8doSzqQNGoWFmdurVKXSTKAuV3d4m7jB4C7mByKuwfYET9YPCugRAtc8ekXBktGXwW9ce3GGA4z5x5Dd6rh",
  "key28": "ren4ZBfxmoy32U9UjZcRSjaat8VTVZBY6kQ9XtxLwuMsazU4HvxDfAfpZZJZghfnHAhTXgRmDjvBn9iKgQyGT3Y"
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
