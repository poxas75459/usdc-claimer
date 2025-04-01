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
    "4BzMGddynS3Vx3SLPzUSS74U69Hsn3TcHaBYyPJp3H97Ek7C5trQFmFDMKCKAYLMoungnqj33dPTEqzg2hQAhho3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YRMqYZ51MB97jA4L7Ey4NchQQ24UxPasWh7Pmh69kAT1rXD9keHjnHHDQ5iprmDVmzbk3Sgo4SCW4xFWYoDgWpi",
  "key1": "2DKJPHCA9FijmYQxqmoVS3E7y72e6DmgMD15bAk3hMey1FoPicC4ttZ8JuHmreG3Mqrn2tNYaKbcYuT5rKp46wuB",
  "key2": "4aJibRjrf9csfCu6xLePbMCgv3FMJ5GbwMXXf9EYE1pUJzN5fPKVYsGoW6DB7y41hW1aRBszVyRTPUfhVV1P7gQQ",
  "key3": "3DjyoPW9mN5Musv4MYeZyBMa9CUAJVaqMfcvvjNw9jPJUhMe3NJQAknpLm9AASg521RL5BHSqgHMfbMrWqo42nSy",
  "key4": "2THHHwm3zdYt1wZFdfs3cDeFSFyfkpEwhniM4a9eotUovNuUysfoALjFEQTWWmCQHHmgqV8cLdsctYF9i58PenTN",
  "key5": "5hhMkXYKM8crbjGZui4qxA9n9a1yY4gCKQz5eSup2PgSGWbVDEAYgBXpTx8SXiHnfF5qWnYf5o1eC1qo2Z4JXk1C",
  "key6": "7J2mKmebUiVqJhwKcQKeCTybUeZJdinF6jYmjDmpHyzF8yCrEkFkkkZmLRQCiwRVsxbcZgqtTM7Q1fw65DiJ13D",
  "key7": "4EYmVpxWRXVehoTjSL2XNGW1jUzRsBY7bmVZsxzZP9vozi7vwMBYwQArNwUGw2GzuWpVo1dDv4U7t8dCvqff7QbQ",
  "key8": "5VwxZCwKe9d6XSRkQgV6DjhyW4AwWxK7sXz7Yx9qeYqSo9Z3APYUihAD7su4cxtHbtMQDAoVpvfZ2iBXR3LK81RE",
  "key9": "64AFzB198drJRA9QMHy7DpTFenk6kwVrG4XoSRFgQ5tyrKY1z2jv1QXyrqhq1vy3tkduSn4VYqZfmzLBQTFe3GsC",
  "key10": "zuPnPySmSXK9Vz25mTrtP7RK7DnBZm1CF4vKRNtocSyT7r7RUymYLFDUXED5ixmtTh5BrrDszS333N5Zru4h46P",
  "key11": "4mCUKstuCDAJ456VnKSDKgnSpKdh21QGHi7xLcySQ4XHgeGvbQ6WM93se3ipx7Rupu2ozPh3PwY5KJ52AKr6HVnP",
  "key12": "2ZzaoUwgSSRHbjYkuKhqNmtRMMEGyMD81vg4FUVKsyvRHrfeHxfpmG81t6AfR3rVhKX39wkW4yeDQc9LXzguq3pZ",
  "key13": "9HVsVZcD8bbHt2pXqB4LPCCPy2V9JmfU33CNcjSPjUhzNpSvrLWPYq1LsWhFm8CyA9KCGcPJbCNe8yKb3j8jxyZ",
  "key14": "3DA4etU25oUtHXuWmLJa69Dn2ZcLMP7jACJstkRhUxDXvNMcjp7zisgD1g7kq7tZisBJGVPVrBPGdre4toW9RENx",
  "key15": "5PYeqJhsiF6zHFi4Kn2sQsrjngNCeHosNeWj1keXZ5SnX8tZxpqH3sQ1rxwwmKKPK4DSfH2QtVybezbyGmyHvJnx",
  "key16": "uGPYBui5byQWxPfB7ewYyWKaSi2Hfhs1e8btU1UMSdzzzXNQ6NwvRCErVyoQXZCDD2Nbuex2n4XuWkS2YNVPBXe",
  "key17": "LQEDuGSdjH33CyXJnoQ5FeErtVpdcvq1Y4YowcHvrpDb4xWTVSMihM7zA5QgJ3ERxwrprwEVrRBBLLHkQ7GTvtz",
  "key18": "3phh2HwQGMuGFeqhZmfN1hYmdunngFR99fiokBxYyDACUoY8z3jHQx3WiEXCigDyUhKbvGdfvXMbTtDV1xVqR5kC",
  "key19": "Qs4ZQAKKJC8zX54fe5txs6xcRNckNQv9nszE55y65pCAxighcyr7vL2XokXQjMV9M4i8nvYT4YNKvVjS1zeEidt",
  "key20": "fsDFY44Ew2Xd5FhjzMQZZTMie63eE3kekP5rquuyscvvXZSdD4UANLhg5qXjLBNAN5ZxVikxsJd1drKcmg5F3MW",
  "key21": "5t13otm1p1NmSJTJT5HHKRWSVVRU5SGLHTKRMfPnA3ArF1NWzcMQhfRjnn4YgVgXNR7efwbXAGmWufmVqEu66oZV",
  "key22": "aNdujnoE7UZuHuyBgGYoTPra7be6fFgUR3hUxP3fs2x5h3fCizZQZmWMWEWqYqvpKk1Te9wmJfKFSmBp3TYRDUy",
  "key23": "215LdRnvkdszUYLRvRskMHjwiG2LjrUatTn4Cs8YtkMobdw5pZfEBieNVg1CdSSqefeHc6poehZz1LRMFC6VFyko",
  "key24": "2MR56HPu9zoBgjBWMb6qZX54dhG6tJFY4PanAJz11vp7z5mU3hkaEFxLHyGWNcRn31LFw8voiwbxoL73DWSfis8x",
  "key25": "678meFTZ5YuCYcJB856V9e6hkssBtwfyuo6rL8kqc7yVH1TehzFL4UbAqXLAhFbjWUGNpfk6d9FdS1RGmNgg7giS",
  "key26": "2NS5CFQUfpMaHnbkbDmqBf4cg3rx4tzypVmtDYDQt34aLKQeT6H5YLf7DCzsWzQh3cAKaEHyxwkNs9CrdqzZyiZp"
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
