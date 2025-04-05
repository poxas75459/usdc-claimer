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
    "24Bn8Y1DtLXEzYQqzjmYtECe4SsnLTTesSi6mepsBPxywjDCRUqNvBR7L43k7Vxk5XZ5SEd6XK5LFepwqVM6GGL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cAKDcr6QL9VgNaj417JWv8BZP3JdDmaGQGU9gyM26nPM1kD23jdhQ3E8btVwp8iXhni1dKvx2YxF8BoctWvSfLq",
  "key1": "5Yp7ayi8KmacgwYMbVJhtk4hnWz6LArm9r5kfmLgzcCkPRNoaLMF8PAbzstfwgwxtpERznKjPEM9FaDFm9jT2M6c",
  "key2": "31ah6amdT5Ec8pD52SnphnoBuGP7dR3VAa9BRjG8YPiUQbgDXVMMXRH7gZ7ARrcsjrypMtYJ3S6YXSnmSjK8WWeN",
  "key3": "3HRnXVgX1UXxdzCSA1d6NZ1t5VUodTDyLYviERj3TMMLJb42waidDuEp5ZEGGzt4WCGtaXvZTHKVNZDLeiHo5b26",
  "key4": "5CQECwKTrkqVY1UwjX9SgLHD4BoTZJ7A5kabtS5viMNh1J84vKjmWc1mKKfpP3AjXDycNPNUrmVXGBxzQgwaV4yx",
  "key5": "4VzcjdurjuU2mGEFRMcftu7t3uUXWLovo7bZQppkygqeHju2v8Q5WZsXrRwSL1fb7AK6szXP9pEjDSkmVp5YsVWg",
  "key6": "59xjgCMQoMnXqgxGpFciPnGT4x4rmJi21GhvCXox61UQEbF2R7Vd3MfyhbrhTbv7TDNGmUyyeR5AaTzDsLx3gWCB",
  "key7": "2YUKEgASj1SdkADRayhoRjT2a4MjsW8z4Z8MvPr3HJt9y4YkbZJjDRgNTz6FfwrpjtSS2KJNoSHEeeDQEpSYMgQw",
  "key8": "4s8Lwf5cigvnAELEyZdTDoHQ7yJP11Y8dv7kWU3HdD9VFgfRjDEg5jqXHLSMeQ4S8jZDu7QMYmPbaC2QEubjABah",
  "key9": "4Nds8LFMHXcFQ2gigFX758zoZYG7WLmtK3g8LSeRdR1tUgsRVEvGMFcPNbafwuPtefvN7t51HTkTxLEwUqpEwvph",
  "key10": "3sTfDZSw9Rqu8WZNjEQCvTDJRoFHwF2FsAKE3iwoNWzrqJXHMaqcRRLSbqJYBuU7ez7CN3kr3hL6F8X1begFz1oF",
  "key11": "54hYn6itZWtrvLMQtezwvCPnjYgWfsP7NBKBEs3MbwNR19NQyF6GjXqyTS58R2s8irHSEcZ2339EUS89A26qDCh5",
  "key12": "59dBDJ9HiVbJQHY9jHCUxoJ78z7wnKdXwK4gy1dvJ9x1y6PVadXhyydxV8auaZpqAkLFgQ8wBe3ivMxN3NNRwMb6",
  "key13": "u8nDiGdPsc1RM9a9UUE1qcPiHNKbsCfowu6RBn7bwH3XzeSn4yaH5F71LcRotFinpdncnuyDCpxKkhCenSCjPYi",
  "key14": "4V1WZydZFsZQBmKtZtczQgk6RYXktRqnuRzGVkW2ZZGCfN2x35XNku17oGpmboZM1sqg9XJ2hioZNMftYTGUsDRu",
  "key15": "2kbyJMQuKeWHdnJsDyNnE8JB6PboWwtn62A6gFXASscTFcFAXEfmiYgWYjYvRBFy2VLNtKh6Hvm5V98KnBWeXgp8",
  "key16": "4BC9FpD8Bt1sBA5qLLfnPdaL4c2LmoFvEAKPPMVQ18iqmYirU2RhbfjtsKUx92XnKGvkWSfre9dZ8iNHC6CP948j",
  "key17": "6pnLNwMFRDk5igawZDhgvk2kgKZLF2UPvJ2E88BDnKHcXFU66qirfF4gFNJxWzejERwSm9Ck14ECEPFpDjJgogA",
  "key18": "TUuRa97jJpbASPYntFwB7dHMQQbTLCmPVctS8f5KWw9ppsBFf7nhdkYCN7buzNN7AduqY1hhhuRyEUwbn1Q6gcC",
  "key19": "wXrj8hh9GgApbJYerzZSXDDg5PnnpvnrFWB1PJR3pwv5Si4FttyMJDJm7YXCoXT8VSmS81YXuAXa8qU2c3az2Zr",
  "key20": "5U8ZVx6Yr7ucsDFL8Gxo49QHqD3WkC1EDZ9tPVRQEuDM55k5z2YaSKZQqG1sF7S2gkvXpKemHS7cntSJY8o2S1m6",
  "key21": "25jpAXJj4qjGGoJy4z35gPPoTNE7tJdW4gSinGUjxmKHxjChsZMDo7ZRo6Y978JiTovcCq5bGPsNwRrDoKVdssGA",
  "key22": "Ym8j5RH81MfbYCSbyhgouF4PznFxx4iHgSoHyCcmzUMfFTNvnBRgY9PSQs2hqU1sQEK2CzatVzCtz6qspQFJ6cE",
  "key23": "XkXf3ZqDWUitYrXZuvVcM6idafgj12wgXgJszTo6yLVJoLbw5th4ckC6Doty8ozdCT7drZYwykhok6dRbDDbq4A",
  "key24": "Ds14eHqwG3aw9gcjbNNbBci2WicygBUwaQtHVsKW9tkfi8GBx1LSXY5u821JtRkDCC9xyz78oGKmnWeus7RAkFS",
  "key25": "3WXchYHj4duUBwgzoqZpfEHC2sF9howUbkWrsMXWm6sY27HG8EWEFBFB4SsCHPj9tjcg1p6fxJMSKkMfF7xjJsaM",
  "key26": "2eJDBSsHSCNmBwvLdT7riPQpYnAEp2B97vTQs6UjtZxRXW5KTmiQbcXNKh5fWiP6TggaTA6eiWLd33YpV719rPqK",
  "key27": "QeB9LPAfvi8PJ8WAzGR9mpZaThb3argVWJfMfAr4P1zCAcxMHVzKuFv4yJUpVdprwnM2e4xCYjpq7kZ9yr5qtej",
  "key28": "3YLN6SThPPHRp2g3xVWykxzsHdy4jFUK7HiyS8tjhWex6dCAWDzzUfy6NK7atsRdxWTy84msYomB278j1viKgG4G",
  "key29": "tT9uF8rcpKv5f62kVDFcjg4PhKwded9jm1Y4cHoPyGJPbzXAhVxoerxSkLWF4WTyKGXRPuVjY5ogEotqHQBeRBQ"
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
