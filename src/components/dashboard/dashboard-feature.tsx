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
    "4Az8Yt7ATz5TKaiHkhyThoKzq5CRAZgT8QjRmUYAiFJEjRvZFkETQf5BtSigNzF2qarRRiMxKrTZ7aRCjFRgBztx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y93qqmuAqG4bca5tPxuvLTbHejkZvaRiqLE6qmAToDcgs5o7yaxA3MrZBZfBdn1dPMZ5rSnvgd5L7ijWQ8NX3xZ",
  "key1": "JxfMFMXRgJTz9qAghNLZ6V5rMeXJzVyQUvb9RMUHRy6FScTMwRBHvtD8p35hF2g59pLarSyGLrYHZPJhh4BKkAE",
  "key2": "35WeFUapGxKy9RMW3K2piSfqaGD8T2U74urxFF7cZYd64FCMQdPCtE9yRXnfFyFu1j3vnYPJAWwwZbNycBpkXt1h",
  "key3": "3eHzdNmPYyc9cUZih8pakPNdFiZA7T1h4YMWPtjchX6A3E6DeLGwQt8QvABWHjHpt9uKU77EJktCYpsJ7mcaeyxJ",
  "key4": "wpuk2CyGwyJTrSBXnByqQGpnrrvXHDCAV1S7vGnuExgW4mn96DqMsgTkh2LVm8DrLYV7CpbSE2xh82WbJZ8JRN2",
  "key5": "3jkV2bT2j2Abn342PnnJKTJb8UEFzBwYTuadwXqSyDrNejU8MUFUQ9J3o27nAHQMKFZANpdnBmsn2vKN82HfeBNU",
  "key6": "wAK87yMiL98bYNrxyHXxQtSYkaHivj9XnQogTb5hzGsPx73g41horbvYzakSCRsvQ5SzEPSrWeMBpAoLvtAqKvP",
  "key7": "2B4U9qugz7R6nZdUb4ukSiDtraPkg1vj9HwrUSgATsWNkJ8SuSAa5GuDofHM5z3D3uusfc7CDwJLXULvXmUoUrP7",
  "key8": "4t7r2P6N2oEaAtTGVMRjmQUDUqEqVm35rnWMSuGyVZkQn8HesFWUb9TG8AurBdxifpAXzYQpK6FETZx5TyCY9Zne",
  "key9": "55zqCkmv9Dq9D3yRJofgG6UJ7eDTfEpxMyszhAzzpqmPUKccRjcKyi2fiFGrSiakKyTVLQpWrxCA49GGtuUHCJsJ",
  "key10": "29sczcXQVsAqqhrhEwK6RZjN7PMkTbLhH9ZoLAhbdJ7G4uAShcQueajPSqenoVrKUpm1xouDHVpdz5wZfqeXDcKS",
  "key11": "447PNV4p2CJ68xhhSNim8yUdpGxPMwQFTp4BttbyAWhdd1YnEoLhR6LcbwxRWVZgPssdQbZxaRMLZmyoSUqHCMoU",
  "key12": "2ULA2cL4LRhUsQshryp6DS47zmxJXqLvhXsQaYyi7Zx6ij8TTDBjrWCNspo7T7R5LKTjdgG1kRHtBrVokm3kvRp7",
  "key13": "5fGxMygaKy27vx7aYyaWhnbe2aTt3CUzz7j6FHc2RKv37fKi3T54aUrbNUkxTzsQPjcWUpTm5SX9yat8C6BX34dQ",
  "key14": "4MXS65e4bDpsvZR2vAYTkL6KsZRb7cozNcXkxKZvsgvJEoF5UGxZA7NB8Ys6J3QjabvwP7wTSk32JbauBKZuK2qV",
  "key15": "5xoQqBBWZnpzwMraJMWwioKbcWbXAenpK2KVzy88vBPpupGr4MaeU8Y5Zmpotkz7hh7CG6ny3BSP4Den6pC6jwST",
  "key16": "5WuiedUwS5JBKuTWtbcAsLkrTZ8pdEFPs1UM8cGTjp342nR2KNBaDbjyNDNiUyLhqYwou8LXdJyk5t32pziArUkE",
  "key17": "3si4FnjhNwCMQXyYJo2pqkHT2cumu5as7bgjLaHmf2ecq6ca1KtjRPkKJY2DK9kqpKAzdBb23KfS5aRFqPYzddZ7",
  "key18": "bQir2VawfZ4BeuTE5uyTG8JYM7AQgHd5tCLRWRmZXvQPgkuJTvSRvi9ujUw4Ny1crJFA5hyaAMBCcxsAzXBsWCE",
  "key19": "2nSmZEJEjezBn9T6SyNvsXHXgg6L9xCr285Z4nVGgkGZyErQDFqe2m29gHM56yTuj95FFjpWsi36eHWtuEcRUwQT",
  "key20": "2eib2F322QQG54cfgdv1BBwBLZVCdiRcbHDpSgTzWKPV7zvFxYkfrq6AHkfoHYF5MWnNoSv2bEXU4LztoNZY4cQV",
  "key21": "21A4oRRwfcPqNuu6RBeryVEpaozws4FeghV9LSERRykLfNy9AWUewN6g9tygStCn3tdpMoVELRNuaABfQ3FmxD2W",
  "key22": "2KP5SgAAZdm5QxW4VMsve8ETD4Bte8kjnb3x4CUrNg47SL6cFE6xaDYBxFwsaJ4Pn4GK74DG7LPyHa2SLSSbUb19",
  "key23": "5HQhr4jFRk3i5bMBDZExxPu9VPpiQYxBKFo7sz6x4Zt2Xk9y3iVYLKGf5hsCYGKf8SYHZ7RNsz2W2nD4LQQxMKGC",
  "key24": "5hcTpKJ9PkMrjEsV4geNykKU1eVdmLNQr7f1YmHSkzw4hwFH9J4VMxyYuw398KoJ6Kzyb9V7nFczvJe44mffz7Pd",
  "key25": "2PojfMBJ2msxyAPAbpWnNoYbDqwapmgRp9soQU8tphReELXLTJ8peDzY6U5qgZSsNmd4MhShcTn2Rz89ggPjG68M",
  "key26": "3yhGgEphuGy4DN4LfXmouTXcCZNgVTuMUkfNANKYGVwLaTH5pnQg2JMBWDVBVRzPZ83RbVXobG63AD3UZdae6qV4",
  "key27": "5s9uYcwahH1JEWsjTUZKWhL3EBW4Jw5DiAEcPFyCSXeLJza2EQxSnJfNXpwnkcLKSS5fVcBqt6SY5iyVbzQWjce9",
  "key28": "4AS1etBFYtvxKN5XZNVBu5CiRwsLEsNHiPUHU3J8hxgBHJyRbXBiGx8iS7D3uV232RFHzDnFZuYuhF7WCM531Sz5",
  "key29": "pQA735syjBjj4n1wWnrLzs3vZXz3Rh9EZUXYPG5LVxUnaYrmriwAyCkNvGkuwqFaPAvANhGZfW4ueC8bFNo9SMr",
  "key30": "44EDQiisWAJwSRQSQ8iWhUbjtByoWxGgHiWfxbur4MiCqHm4f1kk7J3d5akdUByZsggQBEHhPyhtT1ijvWKbVzF9",
  "key31": "2GaNAXXa88HLea93wuFSu329KhWFbwy3TvRWBzMggjzW8eDBQyeDQuSqxyWza2jrrBnToiGM7RyXgpa5GTm9DULd",
  "key32": "5gmKJiJ2B9FuzcpdVwD7N3HzGteKFTa3dCFWM8i3CT1hEMkzKyaU8vVnPkgTR867RVrnnpGzFujDmfbR2JtFxiTA",
  "key33": "3JsEeedroTJgMU1WFgsBmR1R4yXGDDMNQ8Y24xcHNHrXJFTJrvyNRXe4obNbVuU2jSdqupqyB7xQRnuAyivcmMWJ",
  "key34": "8MM4sy59z6m5Jttr5nUdkyCW47KKiTUH5ouAPaGyyhhXrvzrifTiTcXoKAEMneUNFfiVJ3ayv8epNFxAGAUhvVo"
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
