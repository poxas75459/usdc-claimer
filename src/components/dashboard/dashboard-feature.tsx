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
    "5gFpCAadzL66pWsJ7Srf5ZRfXGC1gv9MGeWjvuaqvxEEc4P7SXu6qL8TyjGJCSM3RqRqMyrvWWiWNBgpCdwm5ZbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tf4Y2SSrtjoQn52vBjw1JgqddFLDRYnGJA72DKghvYYxKMVogbuMQa6YowcSHqWWrEBt7s8CKrkKHtZrqnGSPqM",
  "key1": "4oDbbfRXuny4CLaAEkkoAPQ2WHE2NjyYrGMqcZKX9PFRvZmsAac5SPaMrU7459WKY1SxahcE6iRwkziRaQwJAdic",
  "key2": "2fVXXoXEAT29njz6fuADhoiaenhMWtWQc9Vqbbo1cwfSJwTMXksZBBptbJjcaZbtoa6jtXXYYJJZvdd1eaL8fngr",
  "key3": "5HxcuE3k9MqLrA4mDuoqBojUQDTLoyhxHMPqcSPcnnNWEHfySM6gGLyZdy94EbbZm6sTViknj3ZJeGKynQVa5Pve",
  "key4": "5Mn5o3CwkhHizjegFqGYTCeq1ftjZ3qoYTxbcyB6F69hBqi9Bdi3FWDuv9xi6XGDaLWUg4kDQqepGRZvj2oaUZXm",
  "key5": "41J8xUWxKXopNynVoqdRUWjRuokPAPUBh1v1w7Jhjz8JgyN6PLY8ZohjHhA4EvQYNDxx6LJNVbbGxmDeMy4QBARb",
  "key6": "2f1T5nqn5EvvcRCSLBDmR2mdueLEeBJa4Cd1fUztGrvm8NztVhcYR7AREi1tmA9a7DgJEMnMAqnzS27jCNYEnPQG",
  "key7": "5L8kvVULo6KMrMaws3w7VRzCmzqBsG8je17mRyFNVp5t8pMY9rr3Tk2fG28VazWJnzqCsi5jheG9DJSschcNUExJ",
  "key8": "3BjgHAabZ8V7uTaGW1CTERHmU3ETmi77kRxrtypWZpZVouhG4PPSFqPudmAQC8zpieiCpFGypJjfXgM45ycuMbh4",
  "key9": "5bh7QWprqLbWLh3417PBbPa7BZwXWbTWMhWne429yNJE3syVjpxNjcwyxj4a9YPXLAfjPGLnnEt8hxUEnpSggTkz",
  "key10": "33EPFxBTK3vFqFTPHiaQp8wEQVVo1rDQLQZvADnaNfrhUauRKe2i3tCb5RbhFJ4Xv1514zP7BGkj4rshEtKDQURJ",
  "key11": "5CAVapfd3JPpyyyZeCesbyiL6XgmfDuVZDcnJ9LnsbBsBNarWtb2yg6PkaZCF6hRbaAeJyEGz3ATbmBYaEWgfFnF",
  "key12": "4a9WQS7LRtntN1Sjc71zzeyv3mrgbF1eEZfcsKeF39KdRTnskp2wgkWNZr6bjczYEBrJyrfBYBaK3nxhe6jSeJXW",
  "key13": "39mRkiNXvA3Hnmx7AFvytcziyEpv47J51XtEnK7UxESTwwdmJUiTHmibuctEyh1exYHo3RNHMNv91jSkRCT5iiw4",
  "key14": "2UHBUtFama3cHa9V86Xx9e47sKBQxKwcYyzGJar49FtQGucG1e3eghrerTcRGMqGDKS3jKsdfEHa4DVY5Xq8VFaC",
  "key15": "5Lztg6yVpEwGssExQrTqCMo2YomY27KDzvj5F1sWfH8Gkj8qieqJVu9aV95buhpwZWqiqtEKBRMJUpBLQUb4bmBz",
  "key16": "L1DfpXydhvxXmfNkUpTubqNRmWkDmViTjScgrZRxuZ6sLDJsbenMvC8ooFn9AgRW8qToaBS2nJaw6YeqQK6Ee7Q",
  "key17": "2RnMPxGgxwZhQpBKqUiSHW5VH7Svbzi48ozckfhcgdk8h6m5R1NhG9GG2mocjaB6gknJMTD1QNnELK4pNCwdKvCR",
  "key18": "3xbX2YVJFPZBdrgJ96qy5hQpp7cv51t8YfJV8hfKRFNS67NXHNmWV2iom1hfFfpFA1kE6XKrhbeZnT1aLmaZn99X",
  "key19": "aJrgofxqMuQgtJJLwKg2373hQT3Qi8jzpfRJpUpdiRNvphyGDjhpPaoXN8EHj7Vd3NpLYmfd6NbS18fq8TBtpw8",
  "key20": "39dsUrKX1YkMXaSPN7HB832rdNbFikZSzYYktYmqXcAZiiCmxjqv1FPbbL8DDiNUpExnoUTWUuh2AuVuDa4UowUA",
  "key21": "35ScYEvuQ6gzsSLvYjbuVKJZxLA1r1FvoN58xa3p1brtDAWke9c4PioTQq2P5DBtyLJXPyS3PT1Zsrv4A8Vxmn6E",
  "key22": "2aUnyXGjFScQrphgoSkgoAzn9qhcGVkPd7F8QHsPQuvRUJPMne1kExxBpBsmwRpFc54iNgohVTVUte2oNhcJZk28",
  "key23": "59GippEGfEZGbW4sz68ZHDSmSMAJ1KC6dAbKF5JuUaAr4SBPN6s1kVLUfV4x6Um2tcwCTAj3eu28mRQ6zovjxjDW",
  "key24": "4H6cjyFJ8UVar52oxDb8qqDmWEEYCYjgbeWdhdvnRWB6NCVsvSiP1fxnpjvGvAiVgBHdFuhJKzwa5FfmakpVzqhQ",
  "key25": "4WtqHUHATrLye8w5eKyEFhYwJ7UT6vV5ZbgjHL6xmkqgN9jUYBuXu5yksda8Z62qL6S55syyr4djKeemSEfYLQAG",
  "key26": "2Q64y95XedS4kieyrnHVc7ZQsNSmA4YMVRWmRsbkf37smfq3uR7FS1Wu9UayTzUEx1HfY8qqFeyxyhU5jk8WVCKq",
  "key27": "2AD983FEoDvTTifWcbrQAKjn47vVboHugKvZvyg3xnTX5YdZWhSRRum6RoyRc8hAxW59wCPZfPGde3UPJzjCpbGN",
  "key28": "64QAnqXK9Fp7p2eXq5T5F9wRNgqmDa4uGtzAZHcX3vRTAGyNWZtm1kqisunt81BFettvqWMPKvwKA5hJbuovYp7Y",
  "key29": "2C9F9UF5YD9v7jfpxovk2KdzGhFai9VKhvPBThMJDo4j3TdqNCL4kQpeXiUErUjAw5GTxws8rRroFCeLZ861eEQb",
  "key30": "3Wr5fBThfqnwrUEmiBpCRkmhgdpCLpAu2BJks3GGgaPZt5Nf46zX5bvJr1TZ8jAuzfb4DX3aZSpZX6dsmq4DnaVp",
  "key31": "4tZH4Hv5o4Sv75KgiHchVYRfHa4rttybaKjfz4FYrtgFcJMXnrSpmpzwRpwjqfaRhFGsrKohAsbahzYX1eB4ndRJ",
  "key32": "5kUuBrfhqR8HuK1MzwdCsNwgURE5FPEgUKyT2Dq3PctfmNh7Xh4p1n9Nt3HxeEc8pHrAqMxDET1nYnXZ63fbcVGJ",
  "key33": "4XFYHxJSUVxCYJHLQWUQfRoPSxm78ccNvWSuUdLfBV8C3h3yzPHT89jvT7GTj7vWzSXUC1S1bLX2pHoB1tWMZKLs"
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
