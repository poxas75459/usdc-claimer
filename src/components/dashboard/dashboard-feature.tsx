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
    "4sF1aftYamvnDMmujQQKrtU3rcC9UY39aDqQ7Ww9JL7DswrXMuRiuwFWCKcQQo4nW6SyNAMA2xwZ8NAHRonvGkzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nsoMfkaPCwge6rVtQ3EyWhJ7CAYHgMACEaVeQdsiHhxye7oh4g8utdjB8H2H2CfWLH7LmwkM3eVZ5VKnXY8G6Lc",
  "key1": "uVn4VfpQm1c4W9yQj5oSqMG6YQHPnRBXr2XWchnrxn4owYoQ3fAmPTBMszat7JvHn81gpXJ3khZCp2eAMMnJPEn",
  "key2": "3BsYmfLVWPfqjUE3GK3qy8P8WDmzbyeJy5qfBQeUevwuJesYjrszaPTAadpHgzTATxHXbceP1T8PhZgYWocrTrWh",
  "key3": "334ZW4BpBjT7N9GbbTTeLAfTZmhHp61LQMM1FWTnsyRwnbxSEVxgUhYQbb4she6AgmtRtsnwoQa32rKifGopwtSZ",
  "key4": "2BUwuzSQS2h8ip6QwSSLKknMAuHw8kjbaDj8nSH6deMFDiKFKmcsjvzMXmzLKFnzjJeYqXXPHQVM6cLtcyqzY8r9",
  "key5": "5MyXoU25YQRrF6rdGEYEwCcFDXUZ3DPUE6VNxN2Z9pUCHJHRpx5VY9xvMdd42mfwQcwacqMzQCpw4evDLVcqPkuj",
  "key6": "56E4h1W55chAPN4oN1BsJhPrzv64i9EbjEaDYtHKFQNrnEWbaKau1iX4SvYccnG7yGMknLiju63HzpkzuUBHEK8s",
  "key7": "5WhRjFX4E7hkizhi4NW6URk5DbyuJGukiGFrVy3KF5F3yQFU8sU4Zjt6eYQeGYr93uugn24xbe6ivwQwHzR1vb6b",
  "key8": "4Vfaupp4PD4xATLuWiTLrerZeP4CxFNSLrfimf3qzwHos6pgHR759CN1h3SSmu3ULf13XugUUbsXKfSqCrRwp4SZ",
  "key9": "FWFqBo8dKAFw5Rom6n1DTxntm14mkD4ohDbVrrbqp6754uaN2VD4dVUmoR5kg6uoTXTT9hbLoNhmaegBwnndKxF",
  "key10": "2FBqttSEZUK4nHyra3K2tEKz6hD3yYx1Mg2QZsCXoxedmT1FktRL1rxvQUM26ULmB1NbUxNeL7YafijJrWiZXEkx",
  "key11": "4UquazaawfcKwtFsEJ6xyzPZiNx7Rx3arGHKAGQh5bnepABJZzgkDBXnekWmCminby2pHfDmRZdfiB32JwbMsuVQ",
  "key12": "2TSu2sJrdqKdTKmR5zEPfoc6LqzRJUS4L3f11JHuwMXHJoSr3MFDR4k1xPTtdriwCcNRtYqwq8tBRHWDbePQkFjQ",
  "key13": "uh2Dobv95uwueTaLxijP6EBbUWTUK42LfFA4hsD6hCurMF2sNWxXoeMER3b8zAkJHEWWJLhiLMBwx7Yd6bHRGhe",
  "key14": "4moLNLRRNQWyWCemADnU7fVP8DRsThDdrjKpfwSV2BzsUPqSWqZM7sz3NeV3sB1FThaodooP1YSVhjbqXrtyDq2z",
  "key15": "3a27ijdMXNVK1DHjUydXv9DjJka6pqFerhUzHH3TBHzskmYaNxaR8HBGFDiq15ZqJCSpKD3qnAC1Wh8FQTy8Ds5k",
  "key16": "4Ato72ruRAVk2KbA6UEafUFEKCyhraqkRvKihMEzAhqtnadyUg8W1AejUv1tRSu6W8JtZHf1f1AS2myrzhinLFcN",
  "key17": "YRrGcPVcY6dNThvfM98HD4hZsoWja56T9cXb7VirmsWze7YCQZUh3r1vcjgUd8DQGf34rmNPK2LYNa43ZSeZaHB",
  "key18": "3tiB6YBQqaBt6axLdbTcpU4LLBKfN8UzJLdXSiupR9NfEa7kE1teyi8RqrkiWgW26CBeqXYeg3sDRqLkqcNoAFjv",
  "key19": "4QcEBPuW9NGToPEZFvJEAtZu6ucAFjgbYveAaJM7F1PfJhswSdLFtxofyiTiwHETxw2vX7x1hxV4xUZFNCufhgGo",
  "key20": "2dsL7YGv4bYnKQaCLW2kdU8M3cBUQVvgn9kbxz9smhqUjU4UsX4aXYZPEs9skPNtx3zxyGsnBp3Q3PuWRAVAi9XH",
  "key21": "2ksmaNWZGKirafnnj4Q9Lew8Y2Pg7nHbhcv42Agp2hAvTT1hGQhkQWELCRABm9ZZS3CKSCvW9zV2WGNuGKtNgJ71",
  "key22": "51BWqDGeAH93bmd747BtSfdwR71iuSSEBTxLLxKZcCRc6GusdieW5Vz3GacP4pnaTyG2EepzWqLX9Tyz5xbXZuJ1",
  "key23": "4UuA5ehGkB6cUZ1tf46AwnzGrXR3HBUbkPA5cDh1xMtWGqdaEb4LeWp1epe1Mq8pvwDBkz5L9qf2g3abMqU8eLHz",
  "key24": "4aZQyQmuRT32hdWoRtMYjhwTW6FzzuzhyDJWj1g7ZS46SnrRiuz4bFj1ZkJoH4UNLD7MVHwKP8VCrxb3m8u134So",
  "key25": "5bLMLL3qBUMCzhspE1nC173PqNvmhhqSpqFt16gSUPSNBAKRYQfkFLequPvBo4SUW4PHC85yykCxkBkG7pRwqdmg"
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
