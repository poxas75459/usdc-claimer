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
    "2chNpid6Sgrq3cj4S3cR3vvELKt3EEUCyHNC4y1Wvrv2BkKzDMzpzv12zbYastZ8Nn6Ae3ya8Z921pPhe4p8RBTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33yuU4htUxrEYwKkZXcDp9zCMtm8qaWFPDstQJ8KjtYFNoaxpAs4DJoeNq3FWNuq11n5GxnmQJvXr3HjG1RNvKny",
  "key1": "vG8zyHwcowPB87wZsPVxzA7GJyLDw2RXjiuFqsBJecr1eL4DedHX68NTfY11CtAKwh6rwHC7W2tn7SM2W5SxDnU",
  "key2": "3ovEbqV9rHJPEF4rUwmw84YaofTu8V5AjiyP7R5kA95QSJnaXaepeh8hK8jb15DswaoQu3fdmtpufvVJ8tyeCL5p",
  "key3": "5neYkMRzaoe6eWemvCbfyAWMoDHFTvB7LZmRgvjp3LE4xWhg4rCBHBKS9LJvqagrDEVjv7Sw1EwRwPFpR7bttM65",
  "key4": "4RLHr5ev6euvBDrLty74ufADXqs6QJ8S6LnPge6vyvX3ZG5pZqW4AugQJMskjfjFJNBuGjicFUtj7w2ntnuvC7Y8",
  "key5": "YNvQdTB3orBRR37stbnjGjWiqGxfV5dWK9pAkKwM4LjSQZT3TKYzgcERWtLw97waHXMwGEBw5acoFyWWWkqx6EN",
  "key6": "4v1cYK25SiBM2yYVDjUTXsVmz1MrkvtE7GUsnCMSQN7b8N7UX3WKAzJrawQZ4JR5vjBcECsfx1fwm6ycDEWTTJYs",
  "key7": "33Cw8diXmo1dQ5k1FByXSWYbLRDFxH5Hds7k1DtmCUbCXZN6Ch2sBK2Bvhq7FFEnN5VMXVeGqAFSm4wutC1oRSi6",
  "key8": "62pFqR33T5AU2aArzuSGjuA557hQ6iuxj2QQJxwve533xcxBSMfgkhSe2Jp6rLX95YAXTEyMCKzkjU3WeyJWseok",
  "key9": "4rDYpDjSpATHC6v2EdubwouVoQPmsQVWujQPFcfb5PZraxmuj4QCdxpafMQ4Nm2yFKPgYvS8eHszF47zRYQ6ESmQ",
  "key10": "45qR1Bs8hi7VGXAB16XpCBMxUACgT9iecEK4jyWb8psmJ3E5fT8zZcMotWHwavcGaU6tgjPcvUgPCznDJ6wXrK87",
  "key11": "5K6AtbY4btC2P6oQzpEAFKy9Yc4bqTKVXrNX2TQBZGssdrBA9A8chLuqQvGmyTjFvT6Ud7cchdWKRscJjRtyZwGA",
  "key12": "jRTG82D38UnXYwruQreaKadSWHBYTnFkzZX6CDmtccLu57fQqBTE1tdh7KgRstddKG8hvcB5BZKwS39VH5TgXnS",
  "key13": "2f7BWxq4XmSEkQpXm2Q5K6cKBKEMHDQyK383mTBhJMchaDaVkCzW1J4hR15vgtJHR6FCqdhpAJ3evzkZJL6MjR8n",
  "key14": "28c7mnT38JxrodFXdvfb1ww9bR1dikpthye4qzFdMwHgH7V82QDTstpUEFSrQoD1nAQP67xrzcvdR53kPUDwD8vq",
  "key15": "2PmCfRb5esh4vCDV9uk3DuT7r1ToqtLFdXffwRhNMvnCRcCMfKPHAwDSGVU559kRX7UgaMFbhV1wTHgM8NCvv6UP",
  "key16": "3D4jALL4JpsUFxBx4fhvmTQW1fNWnKoXb1f6DV78RS5yaHNJmoe4mAGdMzS7J7MM9tMBCR2m4gxiwpPHwU11EMSH",
  "key17": "4Pq8TfMxqLdGMpMMBmZ9AGY7kEzkduMkBQEpL6ifbBT1Eqikzq4FZp23twvPqr2ktS6LhLJ2vHewiovJLNiPUjh8",
  "key18": "5XeoCNBa5hWyF6BEuVB1CoQGtokQhNqy7ak8EFvERbfgc1PxwVycsG6RkddJ4qQ5e4AZKfhf1z4x3GgCP6nim6FK",
  "key19": "5W1qN8CP37D9wef7eNf3Zb39zhwASf6PEhkjDVhMiET69PPGRdF3sLqcheoFMFzZ4n6RvSRmV8wJgx1LbvV4NtEK",
  "key20": "3juitH1rZa5FB1LCvK8Jj3CebRcf94wo8BnnyvvcFUnAXLLJ6iAXfNtx1dZ9VVAwyQhBSAs5BCkrECnjvmxZpHPc",
  "key21": "5dGCZpc45YeF41NPtSmpDmp6aTe5ys1CDrvBf5aXRoZXUNVXePy48xPbCBnVHdcsN6vPsRVUqzugCugXEKsviUgs",
  "key22": "2EBwQmhpqPyKjaro4oiJ8FzWTxccXpZvae4eGQNNDTqeRRWS8Q1gHYvujDSFFb4SbL5X6Abp6tqEgJhdEsZfyNAc",
  "key23": "5rpgqrsBAeYvHuynR7feesjF4oK1EFcB9hu7FN4wWCewJo4WzzFm5LAocULsBxnFB99NFmuDDKj7sM5D2Qz3Bn3S",
  "key24": "JxEievsP1jCfrDaqWXmZayXEydBZVfGHVqjD4jKCwGUPhzq2dL41XEkT9ezmuNYUaav9MjRbYSYa9w7QU3cvkAh",
  "key25": "5Wm1gC473VcAdETwtR7CP86KRkNFTFV2KogANr6XVhVnfxmKnHJfG9YfqzECDroAQfu4GJeGf2LCe3Azoob98n26",
  "key26": "57qwV5SJws7ztCAbWJQTWugCB7HzcnA7GLqwTjCAkcRddj8byELDtM1mHWsCAf1VY7BF5UVpE6CYmcPfVnm4Ey4G",
  "key27": "5sZK5JypZMgX6Tg2q5k5E6m4nvMA4kiRYtzoHk95WHYdbxADWBhgaHPMXo38SPCxq8JZZ7pkPHbVQwe7fUd4FRG3",
  "key28": "4NjRUSUM98XBjtJFCwv5nLC7LZ3oQE2uUv5quAX1v982n82Fja9soK9KUdBNkq6Mh9uQsBNkZSmqyHjduNQFHSD6",
  "key29": "eTEchCfUX5qHiXgQ2Vi6qQKUo5kbaT4EWYwyCqYXTKp3fgu5fDZmRrjLE83vsvWA3sUCRYGZwNEXsQMif6gh1GZ",
  "key30": "2oHLs1MJA8SdPcj5HY9XtMHSZG4kduNsir6SvKSnGt9dXJKSHSenT4Uzh6kRN3f8MC9KfS32PZQi3UB4biJYocaL",
  "key31": "2vLVFCVRP6axdJBRNHXXdykAQ9cTZM15aXBheqE7Us28Ny1viYbFc8FmAZQP4D9jfCGm2js9XihwbjB4wr1sMdQt",
  "key32": "4cZNU6AfczHUuqrvJxm5RWVvNviMbic5t8Xi6E4cmJKFZ6j7JerrdWSWZwNocYJb3o3N5JH3kA6ZZh6ANTEsWaDZ",
  "key33": "3nUZUsyUR87PFfZUPM3dieufB55xH2mB6L51xHGj2voEh4LnMntsKLqq4T2DkgnWMToDoAk6MvnKqjaWgAQEXEuH",
  "key34": "3x447Jp4ZXUUGJq2RN53p7XAcVD8TANLsCrxmLJWHajuXuz1fj2CCM6Ep79e3P51LEstm2ZaW5BZEv59wtpST9NM"
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
