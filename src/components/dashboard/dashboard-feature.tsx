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
    "223VFgyYPhsUJ6xe8QTtwwMhyF4TXxv2p1Fu7t1YRDCGs72jC3CQwqUubvJMJSsA4vYMkz18VH6EA5JAb2Vr4934"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BFh9hBbiEucx2eddUyU2ftwjHjRGe5JQ37KMcJTve2CGCNo1GHv4ajwozERnL6jwKHVYSQ4RKTKzXCdppycwGA7",
  "key1": "3iDDrEYyF1MDuGzfv5qxi3mAAvhajgLbJGAv2pLV5Fur9NdXEQDojbLMagoc68hWKm3Yt1MGk95x4z16rxXmBxdg",
  "key2": "2MQUjDm7J9vTrrnDWoYjokyCfGqT8nsxw9igNALwHbZWnr2G49SVciNvniUsA4RH7bEBAHWDPphMWNgFnpN9J3VU",
  "key3": "362pHQmRh8bXAyhBEyj1ARMzQPWWvHwgmSc9V8DKLK4cALGDaPWbbPF3HkBnmpZo1p61j194UcNwazeqzzBMRcMs",
  "key4": "4mufuLcnVrt4GDuWpuRuNe6mxopjETMgBzvJa9oHrMjvtVwLQFTfRsyBn6pdmakHpVcj3PVeWDHAf1jJeNUnstdb",
  "key5": "2XvUaMXj2sRBVD2CMAkEtBRVreRzMm5tnJ1d7NRRYmRkUzuwHXvUcAe42JV7p9yEQkwpVQpXpqYxbAMKhNgR24P5",
  "key6": "5DUfDs6rCLJjamTXdKy4rbAVRpPSdWjAMZudUu5FR9owqnWZAY7dBPFVWyeouk7UAqx67euzmmASprNH1qn4ATHm",
  "key7": "KQXtsypTU18kSkrZpioguBc8yuvPmXnbryuxo14uoFpUmETtpdBApKCM82ZdesM99mtK57woq5DcETrXySRs4Nb",
  "key8": "61NBQU8Jq9UicDhS3zsbeA517LSGTK6fCMvsEJcsaZXDX4VkEdVhYV6R2P9YQy5MdZXgkuGqCvGLTUeNgK6skecx",
  "key9": "5xXiZkVMYjt4JoBq5G6pkVB7vAFsu75BJLd2mEX3f2tTyAJFjqx1yUAdbiMfbioTPCj3tdkuoRwYmtUSDBtrdMHT",
  "key10": "2PR85eQFkvKpwy6rS1cQTWyUzjYWuqvyTLSzKY9aLy2VX5kGHkrZcEvGpHMv4GeBefSNsaVSK1Uz4UTo7m29R99N",
  "key11": "4x8raafuXCmHv354zcdSSt5QhKM6CEvU4YYzBiq6DwS5fTrEmy4QkqwGgrVthz8HuoxVWCwp4qKpRKtbxaQ2qCyE",
  "key12": "2GAmnugSojB8eZVYTg7sbrdCJ9svHMTRSXfGr2DYjGJDyP3YezjC2Vv75NpV5Eksh3ULAfq12sQ3XMuVkzMzj55R",
  "key13": "4qN42XjskL6LrsFDfhQgEsoYJkhcct7aJ7Cw4FpMbE5T9xCWbxRypXdB26VVPAkcnzWsRwF9T6YVf8p4bNsFyET1",
  "key14": "hTYmcm8CQozs3pM9niaL7kkJPWe5qq8d9duUBW5tKdttUTb11V2GvjigUyuiA3h94EViQHxPqyLLY3PBAPGc5t9",
  "key15": "4LCwtK3Rk4PPwyPoegcAPZVBNux2P1q7K9v4ipTqWYivsf3gz9NspZZCG9QKa7fZ5F9JZ5CTrb1hW98uL2tKt8fW",
  "key16": "5K17sw9hYvPbPPMJcPisoq7sYp9rKpEJX6Tz6uVrWcRctWR4B38vY2PHrkUbK5vidkaVGYtrUux4D7b7gtLLQkcJ",
  "key17": "2u5ZQsRoHMwMiYZMp6Si9SsMUhG8tpC1EwegvcZdRgWiAWzUCQZQfND86TtU9GtbLWkbGLurLBXSYBQ26V2Xvtp9",
  "key18": "XZgMsaVUTnP7XZ8EwyAbZvJB4bjSdxBsmo5dfGYqVvkYhE5KQzgFNqYdVovaqznEbEsEmhZG3SxxpTdkmkBH7sg",
  "key19": "3rXP7yAqcXEsQz3ZkGvaUzsVz2dKNhNTXdBQeD1zhedGdaadPoXQsxwt3cBnCGddXQ4DENiKz4EjZUNPggvEDPoi",
  "key20": "59SaGfdGQCMMSHZVaqMfNdHjAXqKXUe9KezzdgXqXe5QHLgWmv23Cev2R4RiRS1Vfy72xwMdMPxPCkAywuGeH8cA",
  "key21": "2sjYQWcduNNdUFFqdJZnkPzQ7b5T9M2Xdr4r1BtUG9V9AvJZMt9wPLmX7Zab9EkdaNDUsFaroxajZNS5KapBAgg4",
  "key22": "4RVnAK3kQXYrgh7YKREBgebvsdFwH8aexdhCbgrMx8dQ4CnnHJh6Bqg3dATTqMyqkRJBUqGH2jhrKHksCXL6qnsd",
  "key23": "HtpNV2DC9ATcX6kjYYa7E4sjyDNdt67skCCaDnWZaY7RzvPX2KWD4KFgzTVhCsFZPnzQyHJCro38KXDQrm9oagW",
  "key24": "RCZyoVs6wsHJQwWyz9C2Q7xTKss27SX4yVzF9qyyE4iph9cZcNYSnoATY8NCSSuyHzFKyAvkvRbDRgw9Do7NHRo",
  "key25": "3pQ95VQEoPE8VLZ7zx3NBT56qPcyVWjogzYQDsQ6VnzCArwK9chwMMDRyPDNWzSxbGG8DTEJ9qgxy2py4E5Rxb1K",
  "key26": "4We3J9iZKcQeb48Me9N39nodHBsHxNHCzHhnJZxamvS6AeshPc4dFWkS6x38MvFbj97gcRWdszocX1U4ViSPEKKD",
  "key27": "4q1sbMvkVejmUz3JcVwi7HPbLZ5ZrXYMNyvzy7FoJ23NGXKsJ8dUvsfzVErPbqZ3a4RzaF5pYEQ9Dmie1N1j3wc2",
  "key28": "3EzTbCGeA5KPDRrwviyKNxWoW1757tnR2M1KjpnhTHKgP75Lb79tnTGJqjRcWAE2Gsrrpsgc2rxwvLmcHqPDTPhd",
  "key29": "5NxJCVMitgaeTA4H2v7XCYkEvTmvTw1Mq3KywqBDE8jRRwHtx9CQwTWAEEcnuoTXYiHtYzu5bA1xWjruvdferUZY",
  "key30": "52wHCk2D61whHxLR1Mr4o872UCPLsiNN3jvB9K3wA5rRc5NFRPHXPebQcteX2Ar7k2JQWTm2RYB55opaFDBk9Tvk",
  "key31": "2JFoRwn6iH1SotfnFJ69HtCvEw9gXd3e9TMArjCkp5EdNvMZG4K3muQf4L9ViRQnwXNmt8vsHwp2tUto1egVGrpL",
  "key32": "j6y6QWapPa1BZJHgoShkvhW9GuDCYe2xak81AUkxruopWWjUAPwnJHqc7dtqKBsAMqCmqkL1d3YQM2N5L6bYHWk",
  "key33": "zZWfzbSi6AuxqYpC5PPN4UtW8VVXnCRshyY7J1S7MipHeA44gwhD4nhA4dfveMRVH5bKRkdx1J24Qu4JaD26VZk",
  "key34": "4MEcrN78fQBUPnHLVvbVW3XtiNLD8NNWu1RxATAZKpLJp8DThtafc3xd3jddJcnw1Ck1ZqMpGtDsbM5fZiwRvFuB",
  "key35": "4AK8efwmbhD7i4KaGkJ8m1Y1HKD6HMHwav9kTHKHT7Z7tJ4TdEYqZuuvLCtU3MUNpB5rjqdWV6fMDuubDUjQiquE",
  "key36": "4puK9AZt63ByfrHYByZ39AzXWVnN4VXeg5m83boPnf6G7sxJ3X6b6R4kXUTd9Ac1hPYapessesucbP45Lq3SEtH7",
  "key37": "ZYMAcBC1HmbdMWZoAa5j2QHYHGynyaxyEgpoD7UvBmKs6dQBHZ3aaV6ug5K5MvvNe2eAC5aYKMXpwV4S7T1M3ZQ",
  "key38": "D6nj5DaggWNkdJCB4At3Xadr3Fp5LR4KaC8iFTm3cfaajcE6AvszjLhA7aPevCq4ek6VRWqqsbcXScy3t555EtF",
  "key39": "rLcvncDRdXMMpbkTNSCxLJeTgXYjZZeLZqtgPvkA8Nb4jtGLEpzVHxbTm2ask3RZP8jzZjzL5NjpHACjG2cN91V",
  "key40": "2s1pbwnhJZGWtoUmizPewVVKgBhjCAPSPPK9mteMcJGtBR8NUhBKTQGrm9d6KjFHcAiPw7QuskaRocZt3uJfKkVf"
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
