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
    "3nxxQ6DuxcmXnJMXLLqgY3cfYvwdqbN4Hcrpp91XuFwNZ6LnUaaq7EPZQSu5yFZsDzK6nX2hZCh9oy3xkszUtJYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lhbr5x5XxYj2rWBpseyBMu7rvxNRzdZ9UymtYXrA49yam8JavZQSrnuucydtH4GRa3BsQMj3dnvSYV6GtYhd8kA",
  "key1": "3PuiGFiPpvQrPAfWGCEkcrHBt6UKF1Wn6BQwTwhjajgcpGYsNumHWuc1Ngu73LRNEvoKKb6GnW79xFRBqJGwg2na",
  "key2": "5MF8Xii3U8x4ZoE558L5vD4vRQCHzH6426AuBgWQ7jrJF2MUxSmumhctjYJtpJANTfeCJuRKuTM9Sff53Vg5SJbp",
  "key3": "4DhJkSk252TCCa2pCqCkKnf1CSSgGwev3ooh6HP7iuySWvLk69MRGjxby72sPfMEXUbmajpxfpfEEskWdwTVSt8C",
  "key4": "2F8SsbPmiLngWyT8gacM7HR6U1gXy52ib2BviwddJxbdC9vpqMDqWtPk5ydxaM3Avak8JLvvCEe9hvVEcwCaTLvZ",
  "key5": "tSPn9YFfFQXqa2DKzL6LPtjC6RDmTsBg9JdBebJ8MCQQwZcs58t6HGmWeMC8N6gALQDFhfchBM3oZWbBbMvKpHj",
  "key6": "4bMazoo4U9Qa5Bj48bbdwVdmQwKpV8Q6okM845evr3mZz2MyPP3BZi2S8qXYS1NYgXpAQ8g8UZmC6xBEcxZWSign",
  "key7": "54nqhQV1HVjpJhU93y8Up4iVWgNAT8UPvbTSD6ofyWjdvXqqcWCvpoVuUBMMJKXhSH5hWveKuL9hqTzi8wNiwB7H",
  "key8": "5rNX9bktyWPb9NwPSLqQcyeehLfqiF4maed6xmoPMhkAXdePYZPnoyAYZgDQYRWj5SCdFpbyrABwnCW99vPU5d2V",
  "key9": "47HQohUFzwm3aJ6q1ZGZ5zvjLdnBkycnNWR4H8CCmNrviMxZpb5USMjqc9EWNjm5aQFfoeyLyb4ZWGfdz2i8T57E",
  "key10": "2oW4HGE27awQ3qQBbQivC5pV8n3yrFeEK3UPPbN9qZ1NuE9qetbhhnB8Jmq8fHqtWhjDLvTpfNSgV8hqZwEUhzNV",
  "key11": "5zHL1xTtTS8etgK99dQVYmDw7Rz5NQi99hp7rxVxRsJpsr9so8eGSNzWkqvAcXX8YGzVMMuQiedBDLnomBSaxeXv",
  "key12": "WTxHTDtVUksYotzpgfAiVoPFTUKVVu6rdEH3wWFzCwgn1mdDVXEqGCuSCiygg2USsVRkWqUtkCERNJBBdBtxW7B",
  "key13": "5iM6p3SrrjNkRkutFcf3firE7J9gWuQP27jtXrn9o257jX1mB3rtxapDyxsnfmXFaFPCvXxGKyuJGVAbX7Skocxn",
  "key14": "5xgk9GcfzbTVx4ti3nTd4n4yY9GCe5gSg3DA3FbXs9pjuMDHmVXu22QViaWwyinjDKTdKzgWVUwszgjrpEVXwG94",
  "key15": "ywHiCJ7uafngST5AhnjnUgoRM6dMT63efZrkkwxHgai1cZ9QC5kfBir95pVEBfhKWuRT8nFXSKFp7kB5GUiqzcy",
  "key16": "vv9KdkNHwaNUHHJgdRZ54ADD3UhHXLp8XuurF5vV3ao8EGuUvHVvKTiZok89Sej4666bujzETkrkSLqyULWncFS",
  "key17": "4LEM1iuzmLcZyjFpPeP7bxAeAADJNUXJasQtyjJhR8Y6dZ8QKH95xmUpBhvssAJe71NAY6dPz31QcDuAAmLBG1QC",
  "key18": "4RbAP21JTkRpPjW9Jjp2C4G9c2v841uPP41LeyDXt4gJimjFz7rcybfdmBKtjZ7jZfRwh443yw3Ycc3uFHAnRoVr",
  "key19": "5ymmtYB4Xk7dwQ6j3gJzffe484uPPQjr447hU4x4HPgZeFLz6aJuBHUee7qwHyPSzzbFGMNMmyc7v8Dn5LCMAMHj",
  "key20": "5gjDYNxavUTzoxFmoXN6r6v3sGNfTu7pTt1hq7hxh2byRwz1LjZzDTNhQKkod8Z3LRDgx6ufm3BxfsXVczMVMXe8",
  "key21": "fma6JqJkq3fzaKUupMajFZXxSL1zAq1k4RqNpT8Vx7XnKJn3CrJRb3T1UEjQt2m21o4LTiJHbkmzTQDQKd7wGx1",
  "key22": "49FELxf9qtJyK62zR6ywqA6F4diHT715yooHFEED6WxgXBm6tG5PNbRBVWZ9AcUe6xsi56ZEoAHxGm1bU5rYgns1",
  "key23": "2ByLJ8M5bAgdrmLfZWWAhh1rSimS6ezhGCUHkN3NZcRfDJTHULKWH1nRfWvQP972PoZfVc5emmQZQL2uG6c8PZXC",
  "key24": "38LoC82u8V9W4uJhXdmexi7eDDWDi11ZocZgUwiTZuptn1TaNPL8GTMswHwuTyKsWqdQBu3ZGUTPFePfyUNZUAQ5",
  "key25": "DX2TbiYEW2YPupWwieDPX4xAqWC8kFjbUXuAE4jFe7zi5NvNL8nEasoELBQDb8G4otAmwMYVLgQX3tqavSkNLYu",
  "key26": "233AempaFr2rfTmMyZUdtzUHepejnr9KbDS2Jnv4M9m6cU5RujDhgWydNpvJKrbhB3iQa5p821ueC68VsziGc9EC",
  "key27": "5hgASE3GjWrjv4kateMWNWUq3uSPVjfdavYxGaedpPoFaPwHfEii8pjGpXQkAGgEt45ffjTEERxAmRw4pbohwL2D",
  "key28": "5f2empKLNgVM8oPNdsTM3xFBLeZLjsJokxmXaKUVNg1rDjHxeDL973KenDKUzE7vGLZs8MAhLwu8j8ARf1KaJfox",
  "key29": "2g5nk2ZkCw4f8ERNLYxsDnASyWBqxYB5bS2YUS5Z92EVDfj3kUL8Rj1im1ZYM9688BUiXgJdRYaT4dQaSgHTiEtK",
  "key30": "kLg7p3NwRkPbFSw89h8vJwzEfh2a7iHZFAoL72zqVGVbYHdDFsUd55m3mq1o63VDo3pNih8GxXG8fDdcmUDEYY6",
  "key31": "3RSSK8c8XhFq3eim55M6wvKTup4DtiJ8vfxfLjAcM3b27qRAShv51rAKSdSYA2WMRAiL48CoCDgF3N9Euy8ZcsWv",
  "key32": "329qw68REXLjV9DHXu7awSzEbtLzrkvQnuUAcNVkgUkR2nGUfDzsAttSXmkmqE3K5UDpB3EUB1dXo1ot7UaWwkmA",
  "key33": "2zr5GUGMPN4JweMaJhZx5uoSJQ6amXBgnpV2m18Av4dX84LGaaaxqWhsLzsquFEdPLqVnSQCndSyCNHek7ELVQAc",
  "key34": "5knNmwQna7f7w4XAEhp86zmB7KZAfb6NkXYFfccEtrK26noMgRf4cB8oRcdP4ZqwBF5PkKj7457KmXdoR7PKBXo2",
  "key35": "31VnMyAW4J7DmJQqzs95jpgMw981VaGxXFYdFpW74nDMweYREWFu1JCU8Pv9ihxYvb8NAF1UPDU1V7DtkAJxf458",
  "key36": "4RRmBuCvzAhakgsw1oHV7b52wqHxHbQwSZi24HgAa5TvSdBdcinZvTbzuKqY9NN9xPTu2Q8JGCiN1vXGgxvoE32m"
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
