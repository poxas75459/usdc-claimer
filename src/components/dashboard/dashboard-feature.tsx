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
    "4LoxVCmY8nhhgKMgmgrUPXGzpH26PeLnN67CpLYMUvTMZydggV75Sj7NmjDLn3YfookJT9NL2sqLX9UyojQ9arYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R62hK8rNF98HVQhkEjNoHo6hv1jJnAB4uLxPYxZJcreioFZxjK3oHAygNu71Z9LYaydUpbngWhKrirxtFx9Kise",
  "key1": "DwavZHtZprUmva23a4EhUiNjDFFqeiBG7z2EziVcintfGGStQxNKs52GefvYVbEzbmmxYNYx3XWGoG6bHQ3bs18",
  "key2": "hdT3gQH9EMKXxLRLN5ekmyhk23ZdYpv7oGb2NY3NGAGXD4zpXbuEpdArug7TY9aTHbhqkoutvaxZ2K7kwR5FyHC",
  "key3": "5PVnrB9PpJ7eSVNUrS6gA5ssj6Y6WGRFLSsg5px7XL6B22CTx1Jgq1ZrZvFBzgYxqUG73xpDQpTtjUmDPmXrRQ14",
  "key4": "5uBUeowwyAD9Z8whKXuzN8LwYmth4yZq8mZ2pgFRXfdWkGzygD1w8VWxV7QC11A44EwVsNzB5dixWKdcNkjve2gb",
  "key5": "2Z83WbE6q2guUdUtaTotYLBLtVXm8Xcuj9AoA8kf8xrVb7sGXgPMufcquvSM4TNVjaGogJNnSrMt4NcjVPN8FHZV",
  "key6": "5PWgTREbjBVTJ7KY8BX5ft7hbBR5NYCwAp4CiPRNx1BHud1jz6njy73cPXq36FSjcFpwu2EmNuyNThSBzT5BpgpH",
  "key7": "4yfzkoBUUbKmbNNURU9PD4412D55y9M5vhkDSmhU8HzCKLFJDd1oycQiAGQFtefPhm5Vss49TJsMtddHoKwjCHQL",
  "key8": "3yb5pWRwkaCa3sjiEeiCJGBdLmTHSWkRa7NQtGL3ncGBfpArL2hnES5EE8K2pAbs725fDjVptM3GprqiqVSJaW4n",
  "key9": "3Mkyj5UFvenRUrSETQc82hg4EGd7RFLRLsu8cVnGN15AXDH62KF9g4WB6zK1SbvfVsrsrTWaHNzG5PqxVBiwPE1t",
  "key10": "59oXJTLryGrWSd7tbNYYvTV5LQZNxJ4NU3qjZ3Mke2PU6xUbt6Eej6PoAAskw37UhWybSKKtZNvhv8K6qdD71Va8",
  "key11": "2RuY6md2HPz4WRCCLc97exBpoNLLCz8TiGdP3wPgxGS8sLsiETAZcjvR94yNKijKCL5fLTzGeQUnsg7wBKRatVrg",
  "key12": "3894KDJbePipdPm1oyfxWgZ5H594Du9FhDpgGiNRychv2VheSzPtkHXYeDLLSEzKztM6HnyDGjUqdQ9xVsRrZmyW",
  "key13": "5bdYFTpoRcQmTB1MwrEV22N98aMiRnSpWDe5jXs2Q5R48AreoJpHqLDhN2WGMPZggtWZ8Y7hXbcNtaGQNZCZfNqa",
  "key14": "nQ2Y2fZWN2RX8jGos3cWF4qaqNAhWQypzWdoHaitnGHLKLtktvqvg2FSAdj7WVKzE4waoxPxVLLzvmDDJuVD3Ta",
  "key15": "4tcNvjRzJpnNKPsuojhHJdDVuYmb7ExNrRenWU9cdYDJFNJEyjyE3g5mwRGXcVKWE6HSZQpUnc4x2cAM7AuHuChA",
  "key16": "39da58DXxDpwNV3q375Y35z1Ak8oZa2vWZ9vdxgUuunyXTucvv5xR9ZYGVRf8WJ5p6MjL2nPDEWKoLy8jFr1GH7h",
  "key17": "N8RNCcqL3fsh78tTYpALfcMRPVe6mkyvorVZ3vdD8XitCeW2VEXjephr6TaLXVKqQxo8LDUk69FumwsvaAuBGWb",
  "key18": "tcx9VBUcxB3rio5URRWgDb23yPWBCBkUXW3V8QRHaeuSQGWA22gkVQViSCrAxK1Re3tgytN5YF2T8XCX6u7ZvFB",
  "key19": "2GPVT154j5PCJ5sw7cEs26TPVwMAAXySuQviuonU9dfctHNKBKncmwEpo7PCpCZFPAE7xQBEUq5DG5DrLJMUv3Hk",
  "key20": "rYxQpiePTaX8rB3ppwhQTL72hgfG2EZQEk3f3UMLwTxfqhowNwxLLvWm14NjUURU2hqGeqbQCvSs2RZbMhpsQ1S",
  "key21": "5Nh23dkwyeL7JNV5Lu5RLNGrtduNvKm1zKPHkfZgGd3HCuZXs4phiUgA8JNJPgDU2UxoPtEYwAju3BTv6VSDUYbH",
  "key22": "3KpcMywUUrePXeAfjFvcGd1nXCyR8UqCJU6XNw9UhDNuWci8YzNGjiGkj1TwktUwLFdaFxMgmwdM9fFfQNacGTW4",
  "key23": "ht9sCJPzHiajpvkY9EJRsmWrHjm2uRPuA7cBsH59mh8ePPsDjVdRBXvvfybzZhYMzcByJaCjqhHQfXquYJqi9YK",
  "key24": "MP3bWwK1hc2FgvAspB2MfEXZtWc2cpreDPdZMRDjkxVXAtw7eddpH6WyKzkK8uR2LXakKyTAeck78bACwUVBhrb",
  "key25": "4bdAPhQSq2uuMuJFxgKkAJcJM5kM8a8GdadZQFPPxSZTR8K6yz7HPSYhbJtBASWpBXqF4mfhTBKmf77zauoXaqA9"
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
