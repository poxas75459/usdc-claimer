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
    "3nyWkcji4mnptSqmqEUj8ycTYc9FudnHVhRW4cf6sa4fib39Qww1fgTFfByXDp3cR51xEWK2bS8wfbXFMbRhyfa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43E5sexz51cK1sGJ9QTUXkTqzDMJsLFWf7eQfvBj15JkcgPDtgnpig9Srv8BvWm6CbnLyinqQzRnvLAJFmJnpL7v",
  "key1": "4e9ZREr5z6HPvvg9MZH21TcBdCAGQysJeFde4Gytp5H8zAUFcn3vQbqGoHFPJBYWLzreLQXzwdoE6khbHthryBdu",
  "key2": "3Q3NBmjbNS9hVJ8yZL9vaLC43T3He1GHpKFWNjvMgEXPFDkmbZg78ZtcZvNXvEp5A5RtwCY8WWAdHUkK913X7AcP",
  "key3": "4pdVKLtht51fPLbyRjgEVstceY61BRTAPbE6rgrk8ecs3Sb8BXv7HuJvS5JQCraXSQNnb12VDEPWMZrKdyrc1mPB",
  "key4": "2wnK2zu7C7rA8MjANMToFk8SpiSkd8ktyVobKtpHnaRuLP7AhjSWvF82B4ZLrGUoarkPmGggVjDAauZsPnfX3TcA",
  "key5": "uAU2aipeHdUFbttekEN5ZUEuRbC3pukkRRtJDUPWa46xERUY7RS99uZ3DpHkU2H5Pf2jK4jjkMxRHbgzvcC52W3",
  "key6": "249997nrAsQD5PH1UmtSRcft72ymk2GnmvynUX7s5xGyaee1yLXtPPPLra1R15sr5L6tq8ZtdG2JnLn8CA5s4NeM",
  "key7": "2yrGN6PofbHLQ75LCsKM5qCHRzRPtJX3mcDVqWcnAfrC84P4H7j778793Tw4A3kyYQCkHXXw5Nm5B6RFdtPpUpTv",
  "key8": "4h97f1rPf1zQgRJQUArLykevXAhVRUHdjBFfuWPDCHQrKM1zh5xLRHVeC5iLyZDFgmhpm2SxjhTnd291WaCQCvk5",
  "key9": "3TcoShzdQFoxHsXWZKG4JYaE5zmdoPyBYSTC6zgKiuSDe7st3rkjJBjwbL7dCFx1PQX9v8oAcZnYpoFtNq5PiJhB",
  "key10": "3jnurJWBCZrXjMDeDCzaQY9cSS9ze1XSXEYgyVPghuP55CxKUq4dDSqtLrFcLrozXwKFPSV8vsk4fjqrJguPmaxK",
  "key11": "3fe76YaWJxcntabS1YqN6iNYnVhpi2N3Zx9WdEfvFjyv7e5dsGMSSNUK7vUCybqirPER7GcLCdbRNdsx12g1A5or",
  "key12": "4JXRBzWiDCAe7VYEeVUXGNAiXe5hJRPmUsHa1UFeXzMHxQNNPVLBwu6KjT6emduSoc6vL7fCxAW9Q565LkKJPWx7",
  "key13": "3FcgAR5VXnRu7Dv8QauxQiafgAcnSGjuNkEFxcm91hA9jSSe3AJpp79Nsi4yi31u5YzwiSx7NRzVPJVVkYKWngij",
  "key14": "31sV81iuPXFspYGxK5C9pNuBL7BHh2dfAHDh79B7AJaixZ1Szbx86yDAmLENsY6TPprrYuyJJHJPszcsQenLfVmb",
  "key15": "3ofvMrqGnothnSnY7SUtFASNKxWnmUMKMPYB2psUGZhsGZ7jSwnLXMf3ZefWsrNpTFnuLtWPtui7R9PwtrJhahCx",
  "key16": "3jpfVMB9dEmZ4NRoJbDSLU3zQJkwjxxxqTzZfBLw5k1R6ZdXr5CBzXodjmBddS1qajsYBXxhCZ9qcjFJoGVobWrV",
  "key17": "52iuBqR4f8D9p4gTdMyvgBKEwRGNDUW1a3pCRcf2yCn81CBLgwZLNAp8zwHpyNi62a9LJvikVZ7kyxRwBiWwdVSV",
  "key18": "29yBYX3D1fDFSseEf1rWFxYVETCbhB7sh48FAiBi7UVDnRJqStcJRa4Z7feq9rouEX6TvZWzY99UNUUeFH2Hn34x",
  "key19": "5xLKtPpGTntX7Kpct9bgfq95qP3J72YWSE4h4vJCc9A4wNKZ7qA3R37QfJz1eGKxxD7jJtMV8pswzNCXugZqgfpx",
  "key20": "3Yb17W96TCT9aN4GbvwrGnT9ZPCDrtRooTCtPHuhLQTsreiS93topTnxkTeWGSf1kDWbUHePWyVktnYVTqTVnUNk",
  "key21": "5A8h35XK4PEFXvT2rrKuPen4fDYVhVMRsgXM23ttkXJQu2LGkQRpLzpCqV9PLzgb432eZwEniBEhmcqDmb1kB5Ge",
  "key22": "zXDn4mFPCSJ13HtUGSsac3eSYmuoQy39vkrpNFjhQd8mYaqZodyzET4NroFjy9q5ksmxxJpXghqBtWsTM2xkXQY",
  "key23": "5RBdJNx6cCVkiG5rpm4ZZ8SjrYfYCUUCGANmwfbNAsXeb9QqD3L9xVEVMifxpoz8keiebVRHo59JtkNVZwN5GXjJ",
  "key24": "5oeoKpPh5BK2rTxjBb3XocLDEykUE6aXMDLhWsG2FF6h2Ntq5WeKdBABZkWKQNnxweeaEBWRBdQ6fVUG23dQaVG2",
  "key25": "4vSK72An5rU5JkNzktxaqgU2pgd3d9SjhBn9u3D6w7TU2poJYXLvhaNCEssyCjGfat3RNwTCKBpsixjBSru5nC65",
  "key26": "mNVPhsicUpPGqcQsRTZxZfp9gNsLmuXtuhM5LFgEcrFbciqiEXsR1y2KM844qZqvjRoC7oqfxq2Pf2hgWboA5sc"
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
