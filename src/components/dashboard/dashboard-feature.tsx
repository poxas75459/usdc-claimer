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
    "5Sh1PBK7cX5BLnhQ6hzfaBqq7HtQQh8Q9ZoqH78E7xoLhbYuZFHzqbK9WqALfPU7FGgggyBQBinTR7DUPpDs7WCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QRUzLFWMKmYhRYXQnsEPeYMaDYNg2R8nxBiMuz6wXK1fcCuKavRQnawMjKQryn9cF7E14HvSn48tboJhYyyvBFf",
  "key1": "3CtaPuwr9B7bdxtQsnrsNHtVt16vbVaXMG5kYwDFsjgW6AqyTFLRe8oqpqRqihbKpArAVvSnAToqUoPXaYtketM6",
  "key2": "5oUknZQDJgEgXGUUKEvqtS2dNFtvWdZYdYhpJsPHgFizHQxwvPgpuCLnAnK3UzJnmzaV6p8a4c7unJuhcwaroqiq",
  "key3": "5LNzceYHENrTYL9xtC4b7GbWiKi1q4b7tDRgo6DPQJJxThvkA4421s49q8bDouN78GHcB2qSBF3Ry45mecSpv386",
  "key4": "3RyUYyoSjyv6kk1LGp2q1Si5MhZFKGCSorf2Vtx7JzDT9LR9dGycEZona82w6gASaGHuPXkNbDBXPHsCbNUo4oBD",
  "key5": "4j6uJtnYNTqA4DVcZh9usFvQvDobFCf2DJ5Mj7np4XWCT4Gwqx3SrT4mu2y4foPCq3X5V8G14y3p1Ns3Xazy738U",
  "key6": "4d5Mn9LxcynW13gWwhokcNQYmF8SzzcPoECy7hFVb1ynxmxtGM8n6gGuJ79bct3FQW82UTxKdbATGM1gbgjy4wmM",
  "key7": "ZrjKCTF4WuW4fwytxrkZg9q7B83Bqc9ELAh98AuhzRsCZRc8L9SeefqwA8t7r7LJns9tsSnJN56XUmf6VPZMDzt",
  "key8": "3nVZ6aiwtsd5Fa3H3SKvMY6gV7WUbu4CtNKkmLyNVhEgPf2HnHGSKTyqVSH6zPyu6b9z5xYEWr6s2w8xFgjAX74x",
  "key9": "5YaxzQ3xTyqbzMBTMCeoiJVcQvvLZ9efnJt7oXuRgcozJW8ixcJfPmDFwjyktT9R8EvqLP3hqPTZugXS3LxjtRmU",
  "key10": "3bTttkYxNyLVKfkCb6XzbdHeuK7kFD9EdjoxQ1kXoJGmB4STN43dJYQEcSoA2P8ui5yizvcnkbdEWFcEALffW6Zu",
  "key11": "5oStXvVrBBL6zNEepfRu3NLnmS4cKRxy5xWtEdj8ZGnKuULJUwnRXU2F3fRvbzFLJFcc42nduPnL43LWtawMaygn",
  "key12": "3bh8voUXEFfZ2Y4kiKLYsq6ajrCd1XPQ9UBAwcKTLX5pRyFg2kRFHWDWwy1RdWqTNsW9ZkEHwe7eugNU71XCY3rT",
  "key13": "31qJN8nNUAfjkNszcudgTfM5rQha5CEcKA7zqFmbJzRzTrPRBWYSzkmjHn48HA8SceC497SJCBFjeNBHKF3VqWaF",
  "key14": "cwBaMdthxnfaQM8gKc4nBoyL4nUDZjF93r7teYtrbRcYiUgYcpFr2u5MtS8hRS8efoxfNMeFx1XrQbtixZay4jV",
  "key15": "63vCMrr1dvWVpcGAcV5n3YHi5CRHop8vRcKFunq8KoqdYkevAGedLQEStmyXMp91nF249t6nFNHkf3dXy1EWoKsr",
  "key16": "5JuDq2DkczQ3wvXB6w6DiL2RA3RTdAoqSV6SCJE4CrjsjUcgYRtvb4LohviiQ4iu7hSmdtggjxCPixBBfWQsQ3mj",
  "key17": "3wy3X4TaTd9N9SeAs2xtWpEhf9YotPQT1XBcb1qVC4Pk3nGDRxyJ4mJwqVHWNoaJs57Hggzp6p8oxCp7vqDPuqWe",
  "key18": "3cvTn29WtwQFqwcSN6bXvfLfmBPDF4XYLeHjHAqoCquFVT2qcZxgaX3r6c6M37tQGLxbJDaLZ6gnsgwPL84SCPKt",
  "key19": "4qkxXBUUzcU2GDEdFXyy6Qube8D1XAbaK63vTJXdBrWi1hPckicYG6P7yaPoRzMK7zb5aYqF3Mb4aQt88XeUAdDM",
  "key20": "2VnR8HHJNoLRBsRQtDJEyZwj7AGebav7gR2wFUWyk9n1TxNgiMxZ5XkUFaAFUZssk6mBwJyYKFNmdvt9B6aypdvk",
  "key21": "4AZv2LzipPCeExpAVqSqD8DSXh16sG1ge8e8f8KbvEHtSfQPwTCmvVwoExcQqE7q7n9RkcSxFezWvgVJg8Udd42V",
  "key22": "5Z5nByr8KveiMQCtjFmmYyKCfs5vEpYjNTrV8CiReZ6NyzAerkqKesDgpP8dT5BRvGKqMmmZjCw45WYRMRPcez7A",
  "key23": "5cKGrkYuY9JtSkCc7x9x3exc91c2DHeSQxPzibCUCrCo1ri3TqANSXDcjBzfMSgaxg3gnmbffpFPzaQVua6CnDX6",
  "key24": "4JxLsVwwFMh2EPnr3P5xR2Xeyg1BPt4ARzuL6Q61mYcVvNAGCXjpXfPySU5zMMVahzXcnScKvMVYwT115pQJfTMf",
  "key25": "5wPNaSM2q2Rn3uLthYzJ7e99fQusWiobUr5HQKBqu9PU4WzBZE3ntcdt1FsUxxTCxUnRTn6nxPbDxoDunx1c77pD",
  "key26": "4TFSFcybyDkpWn7tMW1CTanyyyP99MpTrSqaUB3rPyB4Jwb7sKre1BVYkcs24RWqLM2ZBtNV2vV1NtSbzrpdaoJH",
  "key27": "4gsko4eUJq2mshsirMvaUWiT64FKuHFD12VZdA2yiUYVksR6inHRW9ZPSkcgytZ46boA2EyE3EiQa569e5nfxtho",
  "key28": "4cfF6fLLkEhejuQMcxqgjuYwdJwwtqtPtJiTemxccegiWE8zh2Uu9H1WzDvhAnPyN1JMTKY9NHwaj5Kw6x27XWFS",
  "key29": "3j8BetCgoT4JzZR5wMUaqxZdpZqzHzJScuHBnpx54NCNYGExybE1HX9XTTGLSshVf2YJSKQgfNYcdcqAyb7E1qRV",
  "key30": "5MDZ4BiqX7xQMWi4UH2jo1GT4RmaNYmTvZzUXVpANanAx1RpJfJ7eLQgTbuEyfENSTReFerFBSLMXottsT8Xiusj",
  "key31": "5LKGCPF1wQqy3bvakgvJLQfzWaaeh9Csx95Zf7xzjY8dxTrfURrdbpeLjvEUexhonDBeBdXUwRXaBmjtb95gkrT6",
  "key32": "3RGib8145sgfEbDwqLXFHLGXhyYL8qQmfyYMsSJtH3wiX33nyLr2Fe9W3h9UufoBajPdNmATU15u3Dn8hfmbHtZ9",
  "key33": "5z9LXxWAxjaPjhBMhUsJnhTw9GoTh4x9LjxXrh2L5yxYVaeeP9LF7iZw8XMrtUr68MPyfEGxjYHjCm44JqgEMAv8",
  "key34": "2E5RGiRdbuYUBpe8wrz2NxFa3XcM1jbUL38xfuQPNTUXeznJhNAjCGmxweN7UdF6ZMxe9yp3YNrhxP7G4eeoYKiV",
  "key35": "4qYdTk18aFS1LRjovp23cSNHMh5ichMtiLFZ3U62njpNUxh2wZYFXicRUeHcXuitxY6ghy6ZKBczh1thqsARUyk7",
  "key36": "2uQ5XhTHDZzMHjmjE24EBmjU9kzQYUWDYkes79zWuVajZoyLQucVDkLbPYgF7znD6dLedXHALguutte3mopqtepC",
  "key37": "53nJeDeBxn2KQk8KSRTAL38LaSes5uhw6UsEovn8AGnDN8UzrSVFj8mp8drohkN7Ym9crrpSphVYoQJypmb5MCku",
  "key38": "5hhKs8Z9PmtyKVmqVwrzkVi57UTGZ18u8vd7RrQFdGNU4z5RWipHTJspkSUKAP7CJGQ6we3vcBzBKx1o9d2oaRBn",
  "key39": "4hXXwk5UM5wYH9ooBmPHTAhcNZu7BpenaDwANvDr3KzzVmjUWk9WtQ8XybwukPYET552XF8DkZ9Bfx9qsidn9Tsk"
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
