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
    "Mv8NiTJi6Q5Y5Uu197efLNqqh7niRaohoUwyxj6EwDMXfG3v79qWg6MhZG5qBPXJBqpXxkNPieYcd2rckAp7XtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ur3jEvcak3NG69mdY3m5j7kUFtXbBefzEtn8aZjkSiJQ82BfikaafipqYWfemAgw5n1FdNGEnKbQtZneAAmawGd",
  "key1": "2pshwQe6LFPy2omNLGrTSR2R4aMLuSsQTWhb1nKV5Y9mPn66EsVH6u4xnEpbhMSCJVMTsYF5hboxDbj7kNfCLej8",
  "key2": "YYtg6vzFkW7bUUNf8wzmg4KbHfUbxzzsKEhZCSh72x2otzXVR1B7nMT9RZQsVD7F8jqSMtPNPi3HP3BMTHq7cAR",
  "key3": "4MytpSgAfUzT3wUrkrVpDDasJ1bLc6L1RwDECbpG3j2tiUwF8F2Np5rNgyGxU63BKWhAFUmCCuSBNbNWiyRJL8TF",
  "key4": "5xMMtw3GMiuBAUKUyN4D7AW8aBexU1NiuUspU778QvWvNbWCGSjSqVUsvZzPuSd6oBDnwgH7FZ4b5HwKWvWL1iK",
  "key5": "2AcqWM9gbG3SihB16NB6KEJmfWZjXZLBSZ3nxW8pXD4rU8CaSy4Attkvxo55zHZZ9WBWFDL2whTH2usA2adssqL8",
  "key6": "57dDmKhFtQCeDhw2PPGJAK6nTxDCG8rmerw3wqdwc5G54QhY5CLzNmGWrpXZpCAXGowNGeDwWpKgGNkw96oVYSzv",
  "key7": "3B3qC1LTxDyw1ccjNoRc1tDoAtPS7poYTXVyQrHwL1xDKeshabBbj44x3dnG4Bzvk34sB1tQSoYSTxadz6Wtpery",
  "key8": "4QHiYxmxigXGzXRkNcPpMtYXD1dNxdreMvU6YRADvULSmhKvLvkc2AXv5NNPyPvsRmFeEBQkvFjoM2XUzXbmY4Q4",
  "key9": "5btXUzY5JLCbWkXJsyzRHJwpoeyGVcDGYXYodA5wH3QKSziBeckDrkXRKPayFZF1PLqNcDfADvVNKM6ZeHg6S6T4",
  "key10": "3r9WvdUPWzv4M5sVNUTPseECCewGKmgv5YjjYUmvWF4CXH1wPb4P5q1Hiqxy4GKqqQmwouznYWDRtWHZJK2nNXvP",
  "key11": "TypENnLR3qWzkoyPrckKVCboHnnpFfwehhTe6TPLhTC9UDBMSFzAGrR1hVqG18hwDqTvzgFJBhAwRXbKS1hMaHS",
  "key12": "5soPB24g3FUhSWm8s4fJnTCfsg8yfkVZC7zwQNwguAExWDyUjW8c4fniyCBbGGDHvqeQQacNG4SegV9Xrzz28kTL",
  "key13": "43wXWDdPZrqxefJEqVdwe8hNRsGYTg4uUU57mLzqyRB3Bnfpk4wxCbutXGHZbfqRhtBbT35J65h1uSxKy9MoCeYS",
  "key14": "59p63UyPDx37RyMteLfx7FVBKstJtjCSQUESnSssXVtygdu6mHwCZRPBkb9p2hjTET2FC7T4AzMRsn3tZe69oa2p",
  "key15": "4ur2cBsLxXnc7CQUoF75yKg71Z9b2izwaXuEdrYZDPQ4KVQgAXk7vnjWykz38Y8P2fTvAsXxkRNJBESJURgbvEBo",
  "key16": "2kVwzBeDAdgwbp4XrfvvrBa1mrGQPEwX3Uw9eMAckFH84q3sEzvoCubPd48VJmxa5EAVYVUNyWmP6TWGNkRDmhyQ",
  "key17": "2kxtyQUWZbcjggHNq6ivNJivr2n6HKWSyXKQhHDeK7HJyTaqyZv4LnCT66YW8avgg7Vr4okHNe6pJ9bDjvz9pVjq",
  "key18": "4x9srsKJScuDPwpd334f9UV8tyAGmzwGuCVnCngXPGQMAmQoZyFU5UMhVxTcynwigrboFo2Wn6baaqH1vpBb9rQv",
  "key19": "2HRs2KY33pxhHSem35GVXBMBXRAnZ5qkxv5m9WUGXezjUWnW4Ai7Gt2G2Eq9wSJKBGjkpnm9Y5U2USZemy5dQQsA",
  "key20": "4V3gJtDf4p2vEQzYhcdnawV6RJZGsRtJu2uxJzcnJejz5HnbvGm6CSszQdfgj9VJpzAweZvNAgqoU52XfJUoXdCM",
  "key21": "2XN4CeEbnTm16vRqEyPHX2RZKgY8TxYHML5qSntzGCrQn8GfujTZeVKkkekP61ba8iZvbmKB4ucZAtenTL34Bj6j",
  "key22": "5cmqPWfn6LTBCJW41DHWb7CAS4SPHm2fMpXZ72QnX1i9rsxPDyGwvB7MWX1PgpTZXFf6gAYAEMv7UdTPCDgPcihB",
  "key23": "2ELHtJijuvw5MwoYzyUgEya9L9seTk4xgoC8K7MKLaYAjbBoa5Fg8tywYxRLLM7JuSZJd5CxdLmWkMsY6zuJ4zxU",
  "key24": "3Cte4AYGNRBv6hUKW7SxuHkkxobJsB1Kb5wXLFMHwaQFzxsd8bdooBArgRDC3jAQkwnLfiE2UagNzneZXw3g2b39",
  "key25": "652XxvzcMoGmCVSk2fT9GYhY9vVHGpnPsevnFPUQCdosQY2aTSd9b5eDCduNg1sGbw9NgRmCaDsYgvsDfJDktrw8",
  "key26": "5ithMfT39EKrqzSW2LQGYk2xXA5o2KGwU51niDQf3ogLbraU2k8D4Mi3i49AfdkYiCwupumanqztkQHK97qMBfuk",
  "key27": "2pmW8y9WSTaRTRst7xM6TprxuRoSmZ17neu9EyyYAvNeZUffZ4ArWwxyVd64Ysmvzdbny6n7YFSedmVTgmAM85P1",
  "key28": "2dvXh3QBBoiEALb5CSEpC9u3C5uKAtZ32XHzmwR8ucDPS5o7bijHQXHxbu9oU2MnWZFkNHD4B3xRhGbmzQV7BTf9",
  "key29": "icQ8C6QBMTVPBFcfMPyTqjSgTeuqexAEyxWinsHeDWmUe94pHnCMeLDqvnbsLvQ9BrMj6yYpU6Z3XMe7gXhmGcj",
  "key30": "2ftF6knErZhm7ov3KD1am5V9TPFFxHK411G5mGRbDmkZ3XFniWLCeq4a1UdCTuEk38gfPVm6nNpzdd9hrtzsDzpw"
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
