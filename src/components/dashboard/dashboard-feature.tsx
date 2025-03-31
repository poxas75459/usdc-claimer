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
    "LuMBFqjWAup3FC8withYVHE8Xxmg3FSQcnDHA26FUkBv64VzrocZxnyf5qQcsyshxpkAqhXNdMCRNMUbTjwDHVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hQjKFV6euqNEZ1GdmhRma8szKACptBNkE7LvqcAR8VkB76aGEUARnAwDoD3kLS3zTbCY4HUoDGz4U5vCeBxLEEX",
  "key1": "2gsuxRbZucR4CLkicnfwwbMPd83MR2YzzozZWrQovGRpYksKBgVsJM6PtjfvwmEdE3uCJ3UMMQ7PKaaxNdGbz3JE",
  "key2": "4TZFVMPpkPTufpb1mnk6QMQbrz3mRtSaGuRSq7bKE5XMQvWESe6ri7ZLGiuS3ZG1fJnkMc5hj6H3BtgTVWQEzJDv",
  "key3": "2p4ynyw64QNW5ffL7K1VFMgaQEQ7TrjbpF4V4MbGuBmYbd92q17suVec7fRh15ncA6np9saFJckTXw1nCYQhUmRg",
  "key4": "5prXKSB6BszerHHQ1fd2p1aSxPKRo5yRdBd4e83vxEqgfaMqW7iDv4fYZh62ubVTWTGDJuue33GpNR1YoXSyuHRE",
  "key5": "Wq66TTG8Zg8uVRrAQgVckqrWqhsgNRaqN1UG4ghkbRdeWuM1sUSLvXQdutPSP922psPkuhUqiH9y5ucLX8yVQio",
  "key6": "52j5iSZ4fWocuvFTn8ToSoBVGTTeDv7yRSLwVPdXYnKc3bjv4zojXrFCtssatJVtjPiDgiZn5j14siFyxLvmmhXX",
  "key7": "nWh6ybGKwARjBqd74oF6yFCNZLWKQgc2NKiqZMMGgDHUteHDTKNkaWobzQkmzAKcfJfenPTCNneE11v9UNKTSKC",
  "key8": "2mgqBHKjKVW4rMbZwRGudbCdx6QHFWeS9NNJBLPL4dX9VJj6uUQkzJKupLsKD2uiPnhesjWqsoTHLBDKFU1jMCfC",
  "key9": "3zfa33mbMm3jTxnUvXuBeDfGx3K9QZ4KQCSPZSXe3sWEYec1AtK794TKgavraKT1L14Xc1bbdHRie7BF2rKgjjLE",
  "key10": "5q3fuWYxbs68eu3UoM46FaGsq1EjVtvysL2o4hqwb959jjvHCW6oLFfK3xsRq1doCWKG7d4LPkawRgbrL2Gc57y4",
  "key11": "jq4E2xF2vCALw1gRKc99c3H28baY6wgEK3LnEB8zm4sYDsh36Whh1e3dDk6ps8zWQNJMm3BuMriokt83QeE1bxG",
  "key12": "5CQw14bPXUe1jzVQsz5xYBHpcxqF8vFH69JJDxkBXW9EQJTpBHGrweMcdEjTZpoW7nge5yQ5Dvbr7xseEgrAet9T",
  "key13": "5uiFKTeHWvKWDxdJCUxxniofcdA1Vsjz9jgJxJaLJbq6Akk9BQKFgSQgEAkEW7TAdMhDibjctPvFDutpSzwYf4fm",
  "key14": "3XzSpN5LKyULLP6etRJ13vn5XJKjc8JNhx4DkpRiHJ6TXzqF9tdftVTGcLHuY4NPws4UcpEmsWyMbvTdHxFGGEwD",
  "key15": "51HQ83m9hJcHX3CmbUzuUWPaJYyVeUFY1zW3hU1vYV9z9ZBwKAhNTt3qs5obhRq1WMJQFfbZ73wJffDkuJSWMygw",
  "key16": "4LvAnw6reXESaTXnNZQe7cv1vUiJnGhX3LB3ubEBjbdxUUw5uVrtWdKb9cJTAPY5KL8PPR9p86d7bEEW2QSmCTie",
  "key17": "5WADDc27Z5uCBdXsehj2xZTjeAJaTmuj9cKxNJK4C1NheNsVhd5BBtXAaff2rkDPYYCehxF9WRUnrSUvpqoLEe31",
  "key18": "5bB22rSMH15NuFWnqnV5CPWQvmnDbKeUCiYS3EysDxSPuHvHuxbdyZDMGouzSG5JeMVRcrYTkiB4CaWYsvKQN7ji",
  "key19": "2zUfeKMMSFeuNUdeKepJKFrb3wE33gzBZy8HmzicgLhW3pw1iQ5Qx2HbjWCiFsB6sJL7oVSxn5Ctwps6GzUbBA8x",
  "key20": "qwrgACnEkid9NwdaURTTcibk5kLhK6LArCyToDX3d5nAxPE9SKzMq5RNTVNjcXfL6sYcmV7B8bsHQdqNkfYixE4",
  "key21": "5t8uZ4gfRk8p7aao6xj81UT1gDQvYFRavpQAT4H9h2aSG4sPwT6485mmsWJDowZ6dBu5PWJ5jNzc8WBtQmR1aGUy",
  "key22": "4ZC2CuA63cGcHPknkrtC8EUq47LcEKFpXBdJtXbHTYCYtK3rKCDqLjFZVTMETEMKa74L8KL8gSPf6LWtHivKR6eh",
  "key23": "3cUw566Dicu5gLymFz4vqixdE3UKgY1ZGwbWzCA6cBUXxwh5abowfQXHAU9DAdxqjghGjFpomVyg3d4mtG9LDz5z",
  "key24": "5JNfztCW4QyYeMw37qEsHW1YmzxYAHeURKNkE4oz1AHnjBbKYMwmKquoaopmspS7i4d645m4ZX5VNNLonWa4xi6Q",
  "key25": "5bXd5RhSYTZBsT8g9HCDktsmyCxPj577jU2amNWdUh1YuwfHpBHxni16LheBHxrUuVLbVdbUCM95Mv28kkkBQUYh",
  "key26": "3NJo4p4fDGLtE6VVFMz7YEvxqU7UKmAsfKo4roFd4YWLYRQRxJ8Ck7PHe4W9Z8girSREppWb3N1HctMk6KHhsNpQ",
  "key27": "2myB79W6fjhiGJXRDw7kseqgBDuuFpQiaBMxrdS9a5Kpj79SMmhLCZKGxeWQQXMKditLL2BGNgwhjQEci2fYAMQD",
  "key28": "nute9NPfKKWh13cStC4wCT47ftbaqM3zB5mCNTUyaU6FCKywvV3V6QW6Rqq938QowUD8ZxpVguvqRaNfZMaBRZC"
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
