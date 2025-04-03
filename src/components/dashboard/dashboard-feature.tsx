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
    "ComRCd9CcwZbkVCotQWnFNoXyUcpLrghbJMj4nGASnRXX6Dvw2hxqurnNTtSsBTnpiGvBKc28EuMqKeSJrgQaCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A3FFdWYY4me1QhLoCfNZc1XSAcV8Rh6ud3cpUQHvdvbtBHUhxHNqepRjgXQoTp2QriTqNoRNDKmZtvLwqLUJDYp",
  "key1": "4ZUCuUvSsQNAdgTyesANFbXwQ64e2yViMRvejSnYwD33iy5vphG5Am9RYfKVx7V2FQPNLYwJqWFC9o1jHAG71r1i",
  "key2": "4ZQ1JxeqGwdZMhRzUVECEDT6rDmQgHEXjYMceD3573K3Y4cTK6x33sjPygHTNsNXN7wZcmmkqRikKVH1D8bBDWtj",
  "key3": "3VsJHFoeQTFpt9sgsiqe2TH9T6ojJg4t1Duz34PWUrYEfF2Jw1rEK7b76AcmJbvVjWhaSHZafz4aUMeBuwyknKMR",
  "key4": "5VBjDCGLVRd8gZtYmcCjpJQCkHxJa2acSYr4eBL2UqPghq5HBm8hce6enNBLrirn7zqErQmTW5XTAsjWnhJqALfy",
  "key5": "42aPPf9GQA7SMtDByHMhLr8NdV9Jh3g16GfKshsni1NeS7GGfgAgUQeAP1JyGcA5wFsvbwKZYp9Bo6KjruLifrq5",
  "key6": "4WyJ5Gq8bLypLEbwbLtQSfr4BqmiDdaksds6k4E4keeSW2xjAbGYuwaSXm6TN1pTu3Fr9pbjiwKZxWwErgmLXU9i",
  "key7": "5avP2PV1Yr3zeAJJNVFVYCYWFJs37e82MyDHiw54GqMRxpUcF6hJdXPYiJTLt2bWPHt83v6kmk1WihXoTyRSWsc3",
  "key8": "HyD2hE6tTLXb8dNRHuzWr1gp7GsZgtY19bC8Kc6ZTUWZNN7DzXiJbRpYpEMvSvKMNUqXPFaQGsdEgVzz3pFD4Qe",
  "key9": "3Z2xEkbqsSQJxJNYuJY4PXEJ1KqzVXE6Zv7a5uw8NewG61Yc82giLjaEVgqUMQ5SMKMyM7YAq1941qqQdCLm1p7g",
  "key10": "2UJfPKNtx8oD7Kj9C4PAsZJfnQKGZDpUcARExKYhnApmrDtcuSVqneZzCjZmVDPxuJnyWGh9CCffCKNTXo4ZVpQt",
  "key11": "5yhgddaB3BFLLW1LhEjP6KZkkstqJkUZrM4q7cpsu5MkCTd6f8RAynW3VEDoChrQ7xiRwkU9iVoiB6ZBCPnBKZpB",
  "key12": "jAjRH127zUab3LFT6rdTaGeL8tm1Pu82YV2ypkKpzR7bXDYcUr4EDcRq61Qcp8nT5R9meXeSEs3CAJgBndkfKGH",
  "key13": "3Kk216cx3s9PUAAtc7FesB1P3VpXanFeNG3imd87MkbRh2WwanicqRK63QWRTzvabuzgYcNf1j3aRb91ai7QKXQc",
  "key14": "47gockr2Z5WLcW6K9d1nseFdETarVevMyipxZ8xMcACmb7kh152GEHQBHQBvvqYb4ctuDe8hZP9t8Xdf23PPXUGd",
  "key15": "2vxagzCDfMzs81uU6riS7ehHwCpNp3MB7o98zFi1YpQZZcCpPRRqQy5HrNBcwP5YakszD1Y9Ktg7yq4RTCGquP6",
  "key16": "2n7cUX5qct1YGLjr6UxS5enqwwmhKsHnok2DjPNN2Jm5b1Em6M7G6U6o61KK6VTPGPcYYzfRHSQ84c9zPTi6DW6w",
  "key17": "vrUzzjyTyTkdAer4wHoVBKfPmQ9ChBxzBPncraTuwTUYfLubPyUBXLMrkKGozdkvuCKxUK6repErocJhzcyH22L",
  "key18": "csWTGhUtTRY17GTmf5usVALp7FU5yx6YXD447QdRjMDFkYs5ttFynvWDHBjjFgXpDVKyZhkTvW7xVVNm6irXCb6",
  "key19": "6CqSjfxvFVNX4gAnuCvf3dz7ycK4uj5ppvV6SJ2eD6cAY3nKpmiQDDNxFy1dujhdufcPL8ajDxbsgJFT7xGeLYe",
  "key20": "4CpdUHDGHSDVPBkHfJW5XtqcCLaBzoLRbRXALbHzuCCi5beUPd9GzgaRfpQg52PKtUKNECbnujcbrBf8tg49j3E6",
  "key21": "5JyYgLddXQyZUPizgni7Jya5gFkCQSNyQCeTxDXg9WnCcPe4F8k937UUGRjo4pNit7dkC9rLjUYdZJxUTXVZMbNP",
  "key22": "4NkGFWnDXLDdBd32CqfnYbuGYReuH5CGR6gv7ke1zRpbJBHfohi11eSVnFfS9hG8Eo3xTiX91UNWkWnMWGxYA1YL",
  "key23": "LLcc2aiwSSvKJ1APeBHvbzd8CcrWRTwst7Y8DTJkH14tvGSNpJHtBiY528z4NkhaUKs2FkB8z7qgGMQMDCsYUtJ",
  "key24": "4r7C3CP568675oRSb57oap6GCkkfQ8qzuXPfcfQ9ve2N1RDFv1hLenKLsikrQbmfuZGzEitehz1GCs27tQGMNu88",
  "key25": "DgoBchy982hiVbUUS2dTCXAaPRfRmUzhgNbVi73gFN4QGut6e1jHZXSdTWyt9nN5z6QE4t29SdcPfBxsiPww7fH",
  "key26": "4A1Enr3MPMjt1TkYeYB4MpyrDXQvkWxQokWXaPjbN92ss9WkMCfWvwb7Pzkeem5dcA4VkiDu4tuNkM61Esbtog59",
  "key27": "4WWxcH7AveaAq36J4Q8ETUEgWMokqMf2FfXdKYTn555GGN1iG9nB1w8zW87XfbmZmo2p7qZdPr9JG8rAuUNFr9xe",
  "key28": "57xB3zHJJQBC4XxeHDGeWbF7N8uBJUHxc4xCCZYAUekUU1hq6uqtz9rEHkNtNqgsz5bHGAaZMjasG66T9amhBur5",
  "key29": "2bDDoA48LXhSNscYyqjJqscK7MBmZxypvSkZhQfHJWK1Vw8pYZXgAwEZH1xc34a4RdKPkDaBR7khkxxJoptehUtX",
  "key30": "452T5cMxmftKpjotPewv534yqT2ZSxponTXu5EypHzb5NqiJ8jGarwaeVYf6ZYSKboeY5wAfpgRg1Y53W2BGGHrP",
  "key31": "5nhmFZX3PdBjmukGVH9JM8hQwfbYzmxVHSAzLPGVm97oi7GQ4vBnb5a7uVPUwyodzZ66xaS9FUcfA3F6QGdS2Fby",
  "key32": "5ZHzULoTdXjhSpSpbGfVYHibZi25TpmukteV5P66tMnLHPN3tjT9k9LBHAdnBaVDcfePgM66Kk51EzVwghKzyQvs",
  "key33": "5entpz4zUEWsfjygocGfoivgsyChg4ruHhR9wvJq2Jnink5bkM3uMvNCmoYYfbCnqPLuntds2wRGNevUAMPRRu93",
  "key34": "3R4UGL3pAojDEu2sWnsQPzNS7YF5yLJqEXR3zFypTdaV5zYhcR1qJBPADvtxv3A9wgdhwvEUjDpob92AbfhB81WP"
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
