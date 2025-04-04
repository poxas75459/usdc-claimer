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
    "KmMV9ispxszSCbbJM1QWQZMwk1PDkE3vE6Vy3vUSRFKkQQFYyokYcknykYdKFjLdve41RXMj3mKjXt9b8gZJwbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26j6XMixbAP7WpBLL8vwA6Key8dYcDkSUcJvjXYRfVMGBE7AGyT61MHP2wNnCffNbzgp6JsatSfeKVvKsAEjrcBi",
  "key1": "FgNuXcHGWytrEXHbrSHNG2x6SvDpwcXtUuwFB4kCwXFfihJQ7veABf66DMP24FtDQVs35mXTpwrLLSDdFKkQY5q",
  "key2": "4jKShCAqHLC18M1JigQuaE651XkWmiDUf4BwfQUfVLd6vJuFpKw8v3UyUwySQWECUUvVCSkpdz2gKbB1Za9VRC3E",
  "key3": "2eydqTzDXA7GwJ7fmzaGbNco3a86hBZ5hYBdCqWKroTZoSrDK9kNAHB81sepfS7R3z7HMQiUSefJVkUzaPt7ioeG",
  "key4": "5cyqzSiwkRBpFKrzCs7RjDxSDecie6MErdneXAFJRMX12PeMSdGyoy6bKJFAV1M1Gg58Fgo5wKTnrVNz2Gr7xrvf",
  "key5": "4fkMZzrgUUQVQ6Gv5v88D6a9DoSZth6Pn9HD6HvBDRwWTkYhHpn9YaSfBQnysPu98mtEGBBHcBnkFJsK8C5nqp8M",
  "key6": "zyv259ZxPd5XX7AHV1y38YB52xZ1nJUPPtixwWniN4jgFxQdcxpETsey59Zwt1GCNgtH8krRuXZGdbGoQTGJ6JT",
  "key7": "2qnmrNT6BYU4VYZpDfmpFiGAJ6XABP2XVLKoE1cwTxwQJoDZvCHRTvZn4RsieprBKu37Wxc69AUksbUvJs53puTT",
  "key8": "5PbcEcVVq38q3kH29E1K1mmQdFvEF1sqzLwJ9oGYsRAG6zU9oRci5oubsuMxZ9hm6wLKP5LqeZ2rALMp3kpPZ7PV",
  "key9": "5y5P359EibQVkUryopt2CqVD5YcgAXjnkHqzvtSqGyw9ckaZHBhygEg3Ne65h1rnREJjDNhdiFAmiwQvVFjARdey",
  "key10": "4VrRXcwdSS223Uq4LMaZj2BNV5S6avDphgj3bNtqAeUSL5rGmjeoURQcWhXbiNfJ7wLkhgw3K247SjKNovz1wXij",
  "key11": "3fw9tgzeoNzQRK2osubiRhjJQRUgE1Qb6TufQAjsWyH6VxepPaNASD73RKmV8hDTdEuh2yi8sBkdCaVbdxqJaLwf",
  "key12": "5DHeJBAyG7o3C2YMbdQPp8UwSxwL4Gntpg1h9UAbHUckhKCfV1xaoDuTSzeiV46JeqDN4zsMN6V8LHCsw4BNyRUm",
  "key13": "3hFky9mJx7bZLyQ8KQfDCsnrPiTtzBRWPsTT17ivkDyZmHyRFQ37PiMnvZZBET19V4zwypgMX5jD7Asr6z4mwnfb",
  "key14": "spjrwLqBYWXwPuy8nyyNTRye3a5XD1cpYFR3ht2kbmEqQwczvJ56YmZFwu3ZKEgMnBPu14gXcaXrW3P3MJJ4gUz",
  "key15": "3akbDMQC9pZfPBjqw2sq6FHrTxZQiSzFWzUzGpCGdwZBhdsgZhdcrCHR6PbjpsJFgNFN59Lnrad9SHKujuoRXrbr",
  "key16": "3wr3DqPm66qkUqrhdVUg99UHX8mCzvpHaJCAnT1m8ELajfecH45xrn3eTSWwvJUF2F6fcYWxtTjB1mkfgGSd4bZ1",
  "key17": "4cCTcPSG242wnqvVmzysYQg6dsKq78iYWnLjPDunhJcuXfE1Lej9Q4widTiaUD2mzVBiX6X1GHwtMaVpuLhUQeV6",
  "key18": "5qJcBvYeLCYQ2yhnEzVSZrDACENR2f3ZQJzxYMWBfN7UgAbhScBwDWzLKU7tT8ysd1434RMEE6FQhmq8ofKnbRm7",
  "key19": "5qihgxFXvcjkX7vVxKm2hRPVDGvQqvj6xHtQ65ZbDy8toW3pQLNffZSa7xkSoJNKbkNqwLMoFaHzFziQpVrfCnAj",
  "key20": "4y2iWNWgNNTqGDiQyS5UnrqbkBZ65qsTeeyFSHxGqQBy6iVU9SqYdNxoWk2hYNG7QaDoZJHcfSNBfXYm9yEKt5ec",
  "key21": "4nmUYGpdyV31urPK7D2MVzmiMJgMq4TWHUcSWAdnheEqQyRtySp5CwGMDz9F8kwQzpeW99wjHzSKrKqTRSgc29yY",
  "key22": "2k29Yh6KgpALWKQ5aKFTQ7tRrjaVP9Qi8svspw5ty3tQav9ebQSDFxvvjysf1L19gDW6NSyoB1o7xucvugpLLKzQ",
  "key23": "4phzxSX316foH8bMrGKZe8VzoU1yKtFzTKtuk4MrtsnJjHCs3WkwPhkKiqKPtiK8s3rs5M6qN8734X6d6a681CNs",
  "key24": "RGnq1gzsbTSe3XWRMi3HyXZeAhoh3Zh9npS5Jn7CMi8s3dU2JqxjxrBGMgPM9qWE5JtUfVcwzDkbvus1JXi5HEo",
  "key25": "3P34oQ6LkjYMVesjLuLMVpFv2P434EwJtSjY51Nx6iiJzmgBLtb2LkzACLktkRfTUXoXbwuSYQLM5n74BsQ54d6z",
  "key26": "452ZeMKcrdnrd9x7LWuLpz8zM6oV5vxVWxhKtaG8aDwBvsRtEXgv2VSXKq67pzvR2MG5PquBw45L9bpZVrMTgbhu",
  "key27": "289YAmfoXxpQQf2ffzQzH8zbzPbK9cU3q8EYEbNibu5Lds27cdjHWVDJczPJPXyevQs62Xa4NqVgHJFPxCNuJ8by",
  "key28": "5Ctqn3iiKj5CEQ3noTEwRoVf1WfSeKdaQ1PSfGYTScMVmYkiZbGvyU9cmH8aSg9haLHG4npPscfh2nnTwwNX8Job",
  "key29": "3Y7c4A5AnRsRcQC2UsGS2VNNnTbWJyWgUnRgh8s68UqXm4DDnNPge4JLNUToYBDWCgKN3eiS8yxRPhqBPQ3iQN7j",
  "key30": "5DARthaRseWFWZ4pZd6Vy2ivqpk7XNcAZ6oC5SwF3nw4dPvRTTTujFTej2zirruvjC5dugcugcdJyzp6DBvqBhXk",
  "key31": "3eb9gqqS74kK7BU55KdCVH6z4LhW4uzPEgSvLfxVDuWsiupAwwQbq9w2xoXyJ1NpexYLeqPzZJp4dqtUmK3FjxiV"
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
