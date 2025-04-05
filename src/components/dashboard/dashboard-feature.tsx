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
    "44t5Zniz7EKkvdr4FXZKMvHk9YRTiyW3pP2C9ZU6XAwRgW91yfxEmvf739fB4jJ3nLhWyS8hpEMwf3B1hvddU4Lq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uA1tzn4PU2FT2YmWiXFhA7xz8sdPN1bK92TjeKcBAmzKjPMLAGJb8t6riR8daFtREeN9zrHDScpiToajSShj52Y",
  "key1": "VdgQBtpSEfYfWpxkbMsoa4RZxsW7GeCQwvJFTJpajFZYmcTih7sJJ7RJwvAAhC5Vzy5JgL7nbYvbkfseQQuFBQR",
  "key2": "5JWTmTymgzDG5vTfahNQbEX3JkGBwTbhJ4F4RN65bBbhJgRYFhWM8qiZyc8u5kuPG4NMb9HUJf4M64Sz8RdwocPV",
  "key3": "3aBQHjPC7knUhq9DaYaSjacunAHXThnQkqAfVD6iL6JuuN6RknYqJMdsxjvdy3cqwKWuUkTGz8rtxBeHfUAGjFNR",
  "key4": "5ssJm6HN99o8z6jVGtoByD6tCvhAKbtCje3w7TuWr2iRSyUrjLvXKjyXxSLfQEv71qZipM5gwfuwcPbJdf5WL3fB",
  "key5": "5TLidVonBcPzZVCWsHn2sJxUYG1hj1zTJpLDiKGFkeKcJ3q7f1tnfFNduzzeXT3u6AmLT1tLnrwp5XuTJNoNM9tu",
  "key6": "39PgJUN7VVaLfsMQDwcaczP49ncib3aYvGARRmtN1aLbRUg6fc3EWEpqKDmJDx2t7d2RDTMjMSybkHrVJrEzD9bm",
  "key7": "5XY1sGjF2mtVhXuzF8MGP7dbaxzqRUewXbYN3EoQYf9QeAL6WC3LfPeMQ9NGnkEywWgDLFHLjKGjLrD5V6TzSMgx",
  "key8": "gGYV5EjTZcaDWC6VfKw2T5BwRd8BnoLDCh9RFWw2fvb9L4io8atAR5e4QiASdVAsoXTpkpKdBN4sw2Ft4pcJbgD",
  "key9": "59kee5gmAQSkPjscVMMn6YcGqS9T6PY5YZTjZFrMTDFE44WSeFv3H4ukEFZ7mBcY8NTndCLVmDJk9rj2Msccw16F",
  "key10": "2nDjtVHdGKYx2aTPoWJpTYUiF9jgarSLtzr1wcfo1nYfgxqFfEzWPVnQRr6LrBrN4V1FDBZQ8EU7ET2eQj14Kobr",
  "key11": "5cNk6fh7yEFmXyXHmdWiAz3gxFvFssweqE2Vw2Jxh8PMySErX6NZX5EYxbfDY312nKvRUbedgPYiMGEAtCNc9PR8",
  "key12": "5REezurFJUtQC9T2xrGMBATiUZNLU7jBXhT1eHQM3WTWpNjCDT26ji114MgnYpiv6FQUb7ij53t57boXdbhWdxN5",
  "key13": "nievJYLmameY5zfPbu7hkoemp2FyXSH75Tpzh8KLta7auJG33EESawYg3936trDUJH7bfR8wRNzut8kzEPEspA6",
  "key14": "3AQCvXtMoUnYjycbHyDjeE35ePmHZ5Yu4ZsUPZGyHQWEsD7wz6hjYYUkpHRUZwDxDCz1Mv8WWDmrp3mP3khEL767",
  "key15": "G1aU9QjyXqvYfCZMCTB5ucCeaJN3NYFwHBQPDjy3EqWUTvsSi62uuq8cHMATMbBXvszADwBbKr1f6HgbunTCYCa",
  "key16": "f7kDpLoxH17dHkP6K59XbxWWxXqQjw11WLsMdD5JGNXT2u7YWJwLTuRZxF6i3GYKVtrdUdYJ8pmkTpQNJFmMqrT",
  "key17": "3xg24ewpAs3mUet3LaEXBSkEjEXUDchdvVM2cr1N6cqogQ8zamLnRfY4DXFSLZTyjdDx7jMcfSvG6535mqNi2RJY",
  "key18": "2JASeQa7Nq3g7BCCJt95agcUKZjaFbLzyXMXprzd1gYvfUZNUJdXstPKTgpg7Ug64UUJy4oMaMp5ovtiqXJ5R6n6",
  "key19": "3qdm73UB8S4iW7Pip74e9gHLyZaQ221pGHfXxmj3bSvyVRnKpuHN1CGpWYsNsYuwcW9JdGDKPbtvoaBp5tSujvA7",
  "key20": "4UQxUS8Y5MvBmrD5N1pFaSNtQLLPs7ka1aWPL787fgPKWUX3u9mhwv1PKACWUaMb5ihFHfdTHHKjuswnUrh5DuXe",
  "key21": "3kxSdMKWHpwMDUaTHVGDQs6ZcRQMcXSzdBH95dDaxV4B9tSyPhcqGupN3fCSPPbVbTGGH55VfMdjpoP4fmqfxssJ",
  "key22": "4V1g9dfCrshwKgqab1UvwYEMJGnHttXQmn1JjENR1Gqmt7A57HVD83z8ndq47ZCvGXEaqFcYFtosimcmZgjiKWHL",
  "key23": "M3cRiXVpUddw3amjyXyZwhx298ij2P6d5SihfBZ9LzgN1Szj4YPbFD3EQGFzmqAbsedmoML4xhXNadNJFVL6JS6",
  "key24": "2PcmnjpnHLSCwztpXkHR5bqr6TqbkhPVmYkrSnqtojx8kYPCoRr14thvk39QAM1KnngS4FGvqFxzLMyVA6BFiXD4",
  "key25": "2E1GwFQHfbCGKiG9RifaVqBJrws1Tiii6UnTeQn3XccCnqVpB2qGoXbtjkoacRSfxnts7UwFzNMAL1oaagQqGgoF",
  "key26": "47YMbidf5eJrGTX89PXK7nRgzkf6aQEcjC91hiGsVuB6Zgj9YBnxD7b5f56C1MPiiapJdgPCRCH2t7DVf6hGHgBB",
  "key27": "5Y8NZrH9xW1nUJJee7tdXkayfvaPKv9qxEq2eKfBxvEKLSZxv9AKDWdegK4F7rrHvPP7ucr6KZRkde8en7awMyxz",
  "key28": "3fzh4WWSBANLwEHZcqo8jFqnXjL6WrR1jw62gar3fBTbgaUWqPzB1fVEvgURNdzL8Jsd9wKKKDtGMFsJNbPZHk3A",
  "key29": "3auibGfRiLtetWSwK5roYjHP8Sz19X3dSxa5YxrsBoV5tRLaE79ShiXhqrNpbxrtLbWk6k2LA3QPiJrDtdvsC7GH",
  "key30": "3pw8EVkT2KMVkgkLZdJQdTexUPzSWTAsPMjkefEirsXYsejNSwxjGo8dK91HMxqrf8mtwkj8rSHzdxN8uX5YYjWB",
  "key31": "4CJ9GevUKGpyp8z3FS3jbygZg1Dquh2der5LHzzRGs5UZJgsDmcEmp5ZUjeo2Myut7HfpWVYxAjV1r7me1qH8hRc",
  "key32": "5GA661nSFfWsAF6B2FyvtFPbEcETkoaqFRG7kPxasQn19Yohx4cKHqXnckNY6vAaizhLhRDEdRp37uSC2xdRxkQz",
  "key33": "5yMMyZVRWVau3aA5pNxe8WQRqWvsQmBTU1wt74ig5kRuVByeFyoCUmAhTPgAVVW88xwAFE2VdCX1FfnR5FEpT8jF",
  "key34": "4JvG3NYnVgLrhHjU9zY2tyh64xJE8fUXDPVJeXbWZMPFbsXaPvpGAYwiJAgrGdQ5RehfSuEoY6Hfnv3biRRNpVwn",
  "key35": "5a6EtMwDK2xJS1tPxAKXZ1kPLkcb8su7Ez4U74Brtb3XjeCB8JXfy2N1voXyLKBTMG6T4CmgBNhddn7PcMMDm3yA",
  "key36": "4w8GE9duJ2Bwwvp6scUN5WumRz9p4day4wHWjC1X9TZ6ycpVdsEFppKjjrRJMisCfv5ZivX9gZEYn9nTkqhvoenC"
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
