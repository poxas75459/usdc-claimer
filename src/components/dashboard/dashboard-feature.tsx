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
    "5ZU9B2NFGARSLKhihdcN1eWGVFYSEG9rMofNbaBo3Bc7bQDibynzyTzzR4Zxn174m9pjzydbG4eTEwYrbPLh6yat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2APyUxdGqahF8zVXXVE3HvGiFHJjKTU1z3SxC4L577aMbWagw7hU6eSnnvv1nQfA3Y3AWTiNXmUoDFYpgqQj3hPs",
  "key1": "QfAXdoHnUDVi3FtPA6sbkX8PJ1D8uFwVMMwZ2QUyoiTMDNYnAQSXrhwWHkeoaypxrs8ucCjJ2KGc5daV1nGazdx",
  "key2": "5kBP85t2Cojz9UQrmUGqt4Qvp8XpnmoyN3EENmgEBxMjaB7DGpqX5NWMiXfSEqPi31HemvhhYVZ8FXY74DmSTeHn",
  "key3": "2EpHazpwKnsTAeJmUisai18v5qWW7K9kT5kN9ToFnKAqn8urpPEdXw8B9XGhSwZdTpaoYwmqfQygLTcCGzNztcLF",
  "key4": "2FRsqK7rZrQJiVtWUZ8mZcgjDCJCfHnqZjCzbiH5CsaTdU2oWQt4sqjYama1yTWr2FxcXa2kNCCyXXRNL4zmNgML",
  "key5": "3WqpAtn5eGdvQZdUdnRzBkNTT7tczc7S8kjx37kQBwqkmNP3UtfrXF7Xd3HRxVkC5BCJGfnZMS3BH2KGxWSYthEr",
  "key6": "wkEdgor5tUHpG8NUmNbyLQap4EUX4Pe5ddRegwHRNjdJHDRjF58wiEXovg6DHWY7Zq9J5C9Huf5jJCdP3WqnAKV",
  "key7": "4Wgnkbv988Eptd7L2uZJsAwmCSx5jpxZNroAsLaFFyWkVwVkf4A1A99a3eo3ecNKwBEZ5FoQKK9mrYvKZEgVHuNU",
  "key8": "9LyduaWPxNZdWkuLJoqsNk68iqr6x2YgPnW8GZdtDJxPbTXqnvTpVo4fsETMsdA3fwp9FLh53nSpYGKnVWvqyFa",
  "key9": "49czyn7sm43nJqNKxGmFARXRmvMFnQh3ArZmMUCczzig3ZbDH418BFVyaepbUUc1YH1t7dyYbkTZviWFRKmw3Ybq",
  "key10": "5zBVV1HuZELSxDWo2YW35GLnJgHFBxfBZxbMh2AZjFsxKsBeq6eceY6WAYXXW8uCHod4XGqnDZuBYqbA3NdzGVG4",
  "key11": "5EK8HvDE24vFdgH4Cihsbj939WGfSe4cJY9BnjTX22ba2zNeHjo1mw54NDWXPfsZwSDKs9kZCUTm1QevJJkbzsD3",
  "key12": "5Rc7zzLoba8w8yPHRp6PBWjJGZh1vUFwSPryVso7eMMp5Mo7U3DbfLTMezCro8KiGGqGQUPkwCuR5M3TTUnZhNwA",
  "key13": "3ZcbuEhjtCoa1KgU3kPrXgADM2PbyfDpkXxYw7YrmmSxvJ1hwTenMXPTnaBiRkr1amBruGzdGriuGHiSUWNuxj5J",
  "key14": "2GwsweCWHsbuKRthzPANSS6Lsf85zz2WNrFyznVCcAjL8kBip2wkr4NgW9yF7KLYW3CyZ2AfxMeSZMSV2nQViSRa",
  "key15": "ieoUvpW7naDwt85euWDJyM7vtbwU7979rGjsmTxGibrYzm2V3r8CqehJX7RntNcFHG4F3qLZ2HcDQYiw5m1csAW",
  "key16": "5eZeguqi9eZb4PbcETik1UXtxtWw8y678M9BAfgxn5bPkCGt7YixJxGCFpjQPs5UytybY5KFZAmWj1KVJFeLdyR7",
  "key17": "4wMdkkksRjoovE4N5e4bxnkf1wWPF7z5tjTsh2iGwtmmWtPGjSC1GBcZKDPLWgvYrr5bSFAWqNzM8GJyuXLkkq6e",
  "key18": "3cN9fFfYdgsBp4bjL4Xt5VCDAfFjuk8Qa6guYYMoQRN78uKBkoraYiSmjirT1fuZF5YyfhFoX6P4pJpPhUhkXiDo",
  "key19": "3KrWEZVVEi1dBxFaBSzB6LRHTN19jpUsg3VQtp47N3QnnykHpC6iaDPy4xYGePC3ZCSxoYFzZgkGnsnwvmmA2988",
  "key20": "28bNaj1ASGgEi1UGNxGqtWGCwdWnM5kkBqJsY6vrHMy6trFsdMjXSGALUqW8gPnW8Csw8x3uCunwCZGLACmV3ShV",
  "key21": "3rWPkkxKYMyuV8h5ohUCwNFpp6MccBHWo6oKqAXNzUm3Z1eEPf2pJFrcqPD6VRqrjhWRvKctwXd8syekcFuC8H8j",
  "key22": "eSyqjHhetmpFmXgR9xdYQDAuQGqcrGGwFeewcbZemxG4pcMiBecdqdcHqrGTBJS1dG78VGYbdkShDpAP9rT24F5",
  "key23": "3SSarCgShJy8q1e2HwjXp11ztAyhzVjNofZX45DdXMPZzCvtYxmiZExJYARtGLASQ7Nr664gnPNYu3RnP1cjV6KB",
  "key24": "RWUNWfD6MMvWbh7TcviEyWBXnjkMbfHDYT8nHJbjB4BMs3aqbBupBb31eieprPYER3P2MP38mT9nMda6dvRVacQ",
  "key25": "HaD6i5YLEpvMQ4Ap3gd4CTixwvoTHuMF8cx6qspNiDVD2rqX6QajPAJ64yd1jbyw2rFLw1aKfjkwGsfH9xax8UX",
  "key26": "4U2H4dQiDyx1GccPsyrCs1sjJ121QN545k57d4aTRVkAfeDRshV7ZGsCHf2aQcKMxotgJPs4qGMBjCsVSgJKtASg",
  "key27": "4nHVUSaRQaNfGRxXeBLPzw5zwMMbTSEei6ZdV99hN5NCZJQVzHJDxjSdsHHZjwrnW4NRHbkNSTkjEm1vs6hSBxp",
  "key28": "3Uja3qQpHvWGG2uBfBJAqx4rFjybkDCBfTGW546gfgPbRo8EVmh1GNgi1NfH8LqSWMP5X2rKGFvMvPeXEB69TuJk",
  "key29": "37HRsVnhEyiLduXL6d6gPV5eszQCXbvqbysRbaJZKM1fNyKXyJFoRAYHvBpNi6nyzdsadWXU8fHVt75LFTYzDrc5",
  "key30": "51uiDzUjvab1PoUnf5qNVNZydBkiC2pRj9dKWE1wFzHM7jYcXXPGuJLzbnZ99jA9CooqaTyHwbsNGuxvshgo4xer"
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
