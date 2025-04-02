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
    "21r947BqH377tKG46JJktmMkaSJzZSsKcchrAz9oUAbpgF2E4uGYL3Px3CrrRaQqtsbCFZT993s9qhNvGCMHnznT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K14WugzqAKm5NonR2UdsN5hoaLjuUV4tkX9ddLTiFiDMJdRq85jiQaxcxgrrGG8qERo93ukcNiiYxnVGjDeJ39i",
  "key1": "58Yfnt1u2Yf9TW7UCi8P32kB13PSB46vUcPQUmYHWVhSnGsvmqpWW5EgQG4WhKgpvkgdJ3dgvsShoTNorwPXzWKT",
  "key2": "4CEQjEsHoMoLdSxvYa4VSjCm6qr3588WqtqH3MRH7v4qq1uF6hmmW9j7wGSNaVNjpeu5oBanBQD5kSVcXcb6w9KM",
  "key3": "3WPWZnkabv4nAG6zv5cCwzSWtjLrQMa4vjRkGbqSYCWutoJajaG8jGMFNvctoHiicJoeHG2bT8TuKSpjsiBXnsrS",
  "key4": "4ebHmfuCT91XHk7FHUSBS73PPsg8Pi956ZNGTBpZjkrFYenJN3GKRu8ydhqucRQGyLskL5yX3ryiZWTMSStFbGNY",
  "key5": "34sAH197TFMCu9LzciHsS55VFpzzcV2cXceTvRpk95AxM6mrESqp6jVAG1ckxg8zEC5mHbVgutBVYce6MFhQRQck",
  "key6": "xKbwJb5G6yV3gxXAu7dFXapCJWpdDos3uDzVDREPo7mpfjPEsatyApqFxjMAN3kXM3k7R6fev7uUfXtZ1taPBhn",
  "key7": "2ke32qP6zX8TRZXbvG58KCbQ4NK3BZ5HwRUV5i3Y3fH1N49mkozCWJS5Wby7L2SpbMQHXV1XxGn2qzzkcZbBVJ8V",
  "key8": "5zUAJUzmBB7wzyjD6uoF6vgS5aC2XVxAtyAQYQqrdZA46BhpyH8nGLpQtpBJTSBe4nouHYeUmjUNFGUYw3rBVHXJ",
  "key9": "5VRwai2w3N8kpzyu4P2zDyvuVCSxEQBkY68kJEPzbUUg2QQGLPHjf7w1yqacYN2pNmWadDUeqpTKCjrVBt48eSXT",
  "key10": "2VYdH2xoBGPyAJma97X8BQ4hkwq4CcB99ih1mVAfJCxudcXM6iqpx32x8Po2NEZrL5KiLPGKA94HAsMzAsK7guEX",
  "key11": "2nidPWrjvDx2Aam5EA9UvWmoUvietmAkJ5DjN57CDQHZue1nA2T6Fx2FtETW66VjXgJXmxJ5ynKwSXoW3BVWQ8rH",
  "key12": "4Ha2EmKqv9reT2A71ES8ZJUvmJLcaB2MNckat4WGnjz7HtA5YwtS5K5QAufKn72QNB3ftKjg8S2qe19ru2m8ADfm",
  "key13": "3jMN3SRyotWxU68ncFA5uSgZ3ACrmJDuvVLJK1YKACrLYNTT5nCKZ3cstoGpyqUALR4cNT37Qsd9CM8RzTcd38Gi",
  "key14": "5uMYUiN24Qn2z2puLvmHQ5SFKwg3X9sbb5JWYmznJweZpgSdaZT6np3McC6iw2LnaarPxpcvagWWivskXgrFneC1",
  "key15": "tjGxr5HNb9kpjBtkFuDCie5GwEUVX6Fs9xwNNnagDFNqkpfs88ytPCnuAdwKFHAW3kXRzhhgBkB82VZGjGb3gEw",
  "key16": "5Wp8UNLrPTTDVrDpoKzCDJSNMKS8BmCrxyT4UvQFckf4NPTZJfNuLcWgJbAgrgD2so2uGbahUbccbP6MkiTaVDeD",
  "key17": "2eK9qBYxQXkW9gXrFmdW1hxp9ugjgPD9LdnMsFdU964Pq5nhgFAPzqP4Esz2nDHuXMqYifHBPZ791AzzmJmV9UTP",
  "key18": "4K2SugP8h22P5GEGRxktYd62hcQQAnPp3cfYmtEj495CcMtobMzmyVy5f5GE4USQYnjwtHjxuWCiyShrj7ctqh2Z",
  "key19": "3Kvw5afnp7Y5a57yQFSkLxQsXE3bFuAwHdz2YvWo4LQrthnCCsFWoGMgPZvwY9HuJKmxHDa89hcFswvKsqmLFGhf",
  "key20": "4AUFgaFTPQxHpfy3r9vqSPT63YpcXiMCj9ovFVy29fLjLMxaVxH8xMnyCBH74FD8YgyyJ4jjANGp4UxJ1WC16uQx",
  "key21": "5bVwF7sp9YwDxT6XDsHUFXg8gQ3WyrS2P9ZjtXyZSk9bYCQCT93Ld6j9W14RTktqCdUoifBWhhzSmBNSQCgYpyuG",
  "key22": "5PsBNazbpmjfpBY1W15j9Bgn47jvmkQ8TXCe6SyQP6kvJ9s5QvAszgECP4oknAwKHwcgyShRxNeWi7iCHqxQo3pk",
  "key23": "8cfTz9ZEGhRsf6zMVV2gA2q8s44mY1HWbZcqtTPZQNJsWDQ7qGwG8ceKaNMk3ncLvPiMPYFgcvqgw5ky7TBa4Bv",
  "key24": "BQFXJRaVVyP48AGRqXiRGZJFU7hUTZAV22hzpmXtiz8dDe35rhwWevuW4oQd689mvGhQWD85jbUMN14SckPp1sg",
  "key25": "5iieHq5z7bFQCZjaQbdiG9yYcDFva591xQ5WxBfqJT2qryob3LTrDVYQfAc9Av8nNtg7VQnYC75XWGEJH6wxYK8R",
  "key26": "3cYAGbJiTfrNioSmcYXD7yxZVd5C31JkcShWHL2sUSVhTULg5cS6vyV5i9HxbJLH18HQZpBZGNL9n2CF85mMrdv",
  "key27": "437AStJHsbshkdrNmCFGQGFtGnjSpriAq4iPKBnyqKGW3Cs7hPzA9RxeKzw77PqbCqCziihEGFUNPcvhMT6WY3Pp",
  "key28": "4yQwYY3V8CawHKUfhUUWKwkujWwH2Ag81A8wn76TSiJedkewqe1jskWDcmq9hqHhpn4xdxSYA8ww9VrvCBzy23Y8",
  "key29": "2vbf78ZBtY6k5jk3n4pQ2fJTXDDZyc4MQp7fG2sGNr9q851WR7f35vqPSYA3kCn22VLokNk7bSHovMwzhQgD9LFY",
  "key30": "52duPeb2ysUYhUrYQEiM5Uz3KbbPHhUu4eNeuo6o2DhZg3S2DuoSmb9vt9vwnULDK7WR7hLgmSHeHGLbU5xYaWav",
  "key31": "5yuVvrzwBnc7WwaiuFm5wvUiJ2Py1BTaZ4FSi34hvmjPXFvVxQoKqfWkavDc2o76k4t2inZGBuqJyfkNXo9bL5Sc",
  "key32": "2pzjMxG73BRvmGfihu3kGzZ3EKqvaUkdS1NHHsoXSKD4XBSeYLcrvSR1yxZ57FZmwQ93fgmFJktwQpNna37fQvkn",
  "key33": "2Phwhhr1ThwBqv5Ezv5nWBJ1LebExdzT1StsJjytV1RB1eX34SNrGNWu7LEe6QNZwPVNRg3ybmjZRkh3ur5MyMpX",
  "key34": "3rDHveY8jXzRzFbipRdz9n24fGQErSyoeCpkFeWtSnVwRJgYX4Kizna1p4AjsGTXa5J9NgAJT5jDWdCq5WX2MNEo",
  "key35": "3xKNDmUg9jghha4x1ug9KmW7yHdviKwEjKJr4D8ZocUCyFucWR1VLPpVJwJqsZWG6QSm9AJDdfLTxZ72fkxjXnkx",
  "key36": "638hrmuHHXsYAXeR4kTEdKW4Xr61xvQjE77Mhr7R1ayScLnxRR4CcMeuYq46WSbz7ig2qppRTTRMMfBfrhRcqRJW",
  "key37": "4csPS1zCCJeP1MPeTSCyKqSSzR23djd86mdoNtqWt9FZKnMzkCpCtGB3yWTsk9wTb5rU7oKcKhHeodnQR1Z9dExs"
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
