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
    "25zUdiEpgXSRo7KPrGaUpKk6T5NZLm34kbBi7grGEqYUxYHDSgocUUoBcgAGzQUFWvqEeMD6VnDCX74LJjTtB5Mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EcUq4Rzv71QcowWNdhvYixVd1x94qgtQEKWEz8cafiChnATFcnn4ZZRCDPn7uJD8i9rSDSkDVbRZHAYGZqNjMwo",
  "key1": "4SURTYqE5aUMFF4bhmGZNXuifkiT9Gv5215hgXbvQkGCMSqd7JoQSnNNuunG8ry8v1bctRHcVaY3kPWTr97nfMfT",
  "key2": "3PAC3uyDhWyGqDBsxRfK1LDguyYRQYHPsirdXgBikFgfw3QQautVRwcM95Zi1ttfZxprqarUU6vKLEE8LZ9Zect4",
  "key3": "32wFHDnfq3DkFn8MUzpueJNJavVc854bBGDPKhMe7x12TsgpSGytLgTSwj6mECRBxKV2RJiv8qMbSX1MkbAJDVsy",
  "key4": "2mCMYnxttg3fEXBFDsa9GUWJBU25Wz3HwMhY3Jwh3PWXJd4YxxPFxoP2ayfqSBewQF9jXTT3zZGSCqYpMomhLoir",
  "key5": "3TtQ7gQJ1MyC2j6Q4SYw69BVym4j7zpFnKSwjcNQnTmz7XCwDxid7D7jaVCdoNDLmjx4AqudRurCFmsfg55FGgRH",
  "key6": "4hsiTuSU9awkdSfyQ7CQ2hM3QgUzQyNUH7CAmmfYGxLxKTb1JN853zhEvYveSNHhdS6m4Hj49DAcp8LnfkbE1qSU",
  "key7": "4gbZ1A428WwjSynwvmztQU36U3zqx7mnaUCubwtWsSDhsC7VHQNWuk5DVjHtsv8SYUngi2F4LgsN3LqzA3J6j5jG",
  "key8": "5P5S9y2iRFioL3zpxWxXG7hAEj8ohWy7Wwpo4HMSQvPYDNhTpTdqUGhTTLK7KmzSzo59viAAcj1N7AxmNiMcY2sx",
  "key9": "4t2xb1iMk6mBt3aY49p2mYsvyuUwFUeHJpCpeKpj5g42qibKhG2Vg8U96qEs163f5UPHuSKz5f3HtzqVFwEMmZv",
  "key10": "5UuaLvgLxW1p8xmTQtdJmcR4Dj9xrTAKxAKJRrKDcgmRui6PQ4mnZZvi2Mk46YzZfe6enShuaRNvuuKymwW4i6r3",
  "key11": "2gyF9eAhg4W99udGFTkt4BNvoR1DaVwP3R3K3gUN1yGfnzQnxspfrX6QPGZoNVtWzLT2QgEmX1dZrwJUqDm4c2GT",
  "key12": "bDqGtX8dcJHQ1zDqd7aBUP82pKHzhxwZXG64uzoQB9dtJrtJJb93uofMKwuvaaGwRNiZzLjhA66SjyH2isEP5LB",
  "key13": "2RJ55Yecgjjfwn2hRLdTXRddnG2ipQzWmcfZhX3HCM79ZpaiBNn8V19fu43kiRLJkX3U5hWCPUDu9jdVtTeBdA3k",
  "key14": "2FHDT1bGC1SMk3gTpofKfzLM6cGUbB64UGqAWZFaY2PpZELFqMAs2S7YZdotExGQysi3WRN9sNndbPnaJFhC1VHj",
  "key15": "4irhWvCkB4vnPuPXwqYi7EbqMRYoj5sMB5pYv7BPVTRmRtMPzeSZMhDYaw4Y2HeGEkyAzBJcwqysx13pRUFWa4Gr",
  "key16": "3Eu1L1ePyAeze1KGEdW7MqoEsGuDyw2gFREuxr8XZHPRAsVkYuEqMfJ6xd2RJFZfYw1U2Q8UhKAefkkVbBc7XfE6",
  "key17": "31mpHS1tPJ3w8HffMDuQ9aRnM7vKCFybFwinRTNTjgH5G45PEPjwpSBewjjwc4D2AMGJi7HHdg4LShor7Anz9512",
  "key18": "3SwVqMAKe6BVEbnAjJuKZeKNp5ickVk8kABeZG2qh3NxL2nnC9Tn53UnH749pbNwU8wjLnCirmdLcnRV2NounFz3",
  "key19": "3FA93AQfvtXUE5XEE5Hwd5xDf6s7mPrJBNvBtPCqcMZJcy3EXf7jR5HbMhCDjmKbK8DQDbdcpeBB1KNGxmNaywUJ",
  "key20": "4xCCCTmSSmxH1QsJVrSYLabD6rx77xT6P6NJpG7ghau2ZoLdgMAVKmUdTJsbxCQNExynnrkrYspvj8TQ1he4owWo",
  "key21": "5TVvBmwKNuFfHoUJebiqQnBTijBHhiWh1tT6z7fgFdMJX3eQjfH3h9dA5wmRT4rQveWoUzvvhyfvEDGhri1faD41",
  "key22": "2jMRegudygy4pySWNjHw6uNU3GdbnDs1NjqWegmWspwx8A3ByTe3pnqm8oDtyATkR4Md29serqK4vP6JA452F8iY",
  "key23": "5RBBfGfPsRV5h8AYExnEtfoAYwmNWT3GeAhWbVgX7uEoncjU6SQZjyKGoWLjPTkWkEBXeaC2GSJd5qjAnYo9ViRs",
  "key24": "VkJYZ5fKWHcZodfGPApvFizThG2NWGqjBhmmFZafEX98JFVtjHuWqMTY6Hjn1rDnF8hqSQKHsvHXbc6FUeE5dzV",
  "key25": "zobRP6sAmvaoKAS7kkQW4VSk853Dn7ChujbnwavaLoYyvYecdwtAFGx8K3fivtV7tTdiaEHbWW51zG6dtHeb8y6",
  "key26": "3h5U6wT8b1SEDKxNbuFJY5Y1oiWdDFnfJDq7rcpF2vRgzkVngzt8FqnsWKAr9QT5N8X1Tr1K1BwDTFEDjgA9kVGn",
  "key27": "5j14w8R5BabovRv96G2VB7CcTVNsKnqWDKGPM6iUkenMFuPmmoYdEbWE3mwcsFbvD84Lb3Fg6pe2GYAs1bhumtJ1",
  "key28": "2bMs33PBapx3zQU6zcdSbfQg7LksBLW18Wpt9DMgmst4LmQozptZ2uUF35C5Y993kyt6zQdocuPbYGZSbwAJkwWj",
  "key29": "jwWweT2gi4sAjbXtm9p34x7eSu9NYKazYbBX5w4MXsesEGwZPfzXFwSD5UagrUL7dFeeRBiDkboKKMVMH4zCKDh",
  "key30": "dzQd4tM7tN42mcR9YqQWrreEUhTen1CRAeBicpUx9h7EVk8WRWBZiFhNYMwDjz64G21v3Bnnj2bKHass4xyt1vU",
  "key31": "JLQ37Jjjn8XkpQ9NU9VprUv8Yyc8zbrEJPrLWZzeMc1k1nMSeAfpFB9Wx1XAM6MeSqVnWXcpgBg7N7rRqkbXxE9",
  "key32": "36btERe7zUkMrU8fvcwRSz8b9B5vSktte5t66f2SRG6z5zZjMFmb5kmb5o7P1tsGY3btAfDywkUWfmMzfkf4cGiT",
  "key33": "4EEQTY7LwP2TL5rauxGZnZn5aSmvwYb1kjEt8LgLbjXcFL81GJf1HZ4UFLHNDXSNeGGZSKgzJAQDJxWiLWEEfrmi",
  "key34": "4u3MuVikTfbg6zwf3ydFritXHQNAun3UA6pcqhGGCJzBY1AZaCXFQx5GjsA2kVMoKQRawJfPutnQSzHmQuT7AtiJ",
  "key35": "3RPp2dE98NCa4ckYPzyeU5s6wipWciYvvNVMmEU2w9659cJPXUB7ZkFmqnUWtFjWiAekmThmqCBqQ3Rzey4rpmiB",
  "key36": "44Nqvff5aixUvPaEVpApGxx2naNL3mZKgnRVGHS1xkcUzU4Gif7CQgaDs4VUvKT7ZRVd1uKpBJbiHS6c5rihRxUE"
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
