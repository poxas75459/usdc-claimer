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
    "3zRAdinnjsQ4UK84FVB9ECM7iHRE1p1wy1quckdxsCYz2bQbaMEibCmngAuoxxCKrj2FXCuPa8YMvasoxpVNCG1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UJZboYPsELeme8Dujmp2Lnypec34T7KbRFRMcamXbDaFw41Rx13V6yNRTj4r7MmJJyqQ4ish7ce6tm681HvMiyU",
  "key1": "zLZxBX6n4mAGqGAQmKF6voDwNiL9vmSxGmYpLmxdB2pDWwDp1n1A2MjJ5A7VPuAoyGjWgGL6Zr1CLcprEmi6Vvj",
  "key2": "2FunofC8y6DHH2P4ccWDek6UVvRER82GTHn55ZA66wN1F33q1rKBrj2v4kyK5buiRZq8B7xzFHdTKjRXKTgdcZ5b",
  "key3": "2sigzfMkcu3wrpgnuJ3NxZ7aB9CoGUEC56qJz8sQkQsRx1g8RchY6BAVJUGuKMjg6paUtdBt8eNTWKRhn2e3XGHj",
  "key4": "2S692dmHZTQMdPm7gtwjeKeE4jkCpXAMXVkDysxFawF228VgTBH5yd8zHWXnidxtCiAnArSEZfFRKm1mCtZgjL3H",
  "key5": "hziGjBpP8D8mmCNNFvKGdM31xodE65mLXvNf7gSCt4xtpspi1JuXMVA14anGtMUBTPPtFyt2dotn1GsRC15z9Bm",
  "key6": "2GJLtA1UUUSdo5bH7og6RdYhSH3HExkwwZ8yyYBwDB4QpbMd3nnekd1NpAppvJrzzRTKd7uBgWNga7GSvk8Kp5LA",
  "key7": "5UR2iefDjDSMn4C5MefN1SinVpywR3kmyD8n9QbPUjT6W6TT3GrHMVFowj22eLL85zP9oa7bpFq5RX3AAh8sCXB9",
  "key8": "5994mx9mkwWns6vmwEe8mhcvUUt5uQ79GNTRbD4ywX36QoMqHsrcqhLvUhqFLnw81xGryX7xx4ZRx52xNrGKq4pV",
  "key9": "pKe5kCefmYfDMRNFGfH8ef5fuBxTso7zJfrHp1JsuDz5jZuSQ2wBozyGyDvY9DwFneYrKFXzmTxqw43bBZYv5BU",
  "key10": "2BSRRVUUHB6fMiXzA1Y1rpJkZVXpLAK5P8K6Ny8sHs68rGQMYiSDN2wu2oeBQtYzoKHL5CJsNVhMxHB825EKfrEo",
  "key11": "5dVBXE8LBeqkNGYxPXQgv7ZVh1wt17U1WL31jKvAEiY94yXj7kmhrsNBvRuDm39uLEdfNg7WNWJQJfs5GoRiRxpX",
  "key12": "cxqAgLkSiz7wmDSsgjxjqAiJArhzRZiXEiixB4e5UEWULWTaJ4koQT5C1Ehia3cduPwyC73sg6ics6xAedfGbWJ",
  "key13": "4E1Xg9Es8eQmspzedP9atPgL1kDkoSEezr8AZbZ2YqbzWHg1Bz5FURpSdccSPeU9z4xtj13tpuLMmwckb7x8vbvX",
  "key14": "sq25iPTrFJCHiAfivaM9552eMGHMZfk3ZVuhnTLCTmnNZaEs8z8A8B22EM8YaU9NyLtEdGRKHYWiMSJKta1DqG8",
  "key15": "3XPBK537tz61rfLLgmURNwMG78JVTq6FDu9VQwgPzKPr77K2KCHwwHPTnqeBZqeqfRHRpJ7nnJcRDqw974sGBHM9",
  "key16": "2SWE47MdhTfZYPHACyooogHk1Gq4vSFnzoR9rRBS6BuWk5jYvrwihjbmc5gyLkDK7jibHzym17BhgcLLu2BqQVch",
  "key17": "5sg825zYrRaxUcUYWcvbCxxuXDGx4yr3ekdbBNVH2YHcvY4xnvAHFdBiLBdfYoBuqEfwb9Cs79TjtZt3H5feSWPw",
  "key18": "56RZd1cXzsjVwowLisngyaC4EzDMKebrgWRcCDvGFGhr1Vk8EoTPoXQWLeBMKWnG7EHnWiyMUKtEhpAFwVDEdx5E",
  "key19": "55AsSkNWrviP3wX7Dep6AB4N9GDtaCwFGcUq8UQEXg8PY1M1TBHRTxYBUsRCv1QjeBBjzz7LMTVJZRa4Vjp1bYvQ",
  "key20": "3ULz9hvnnMNEgGPsW2LJsx1jZ6ZQgRSyLj79N8nMpMifWLgZtat5ekXqU34PuSP7LqUCErpR8dZ8jqGnQdJ29qzb",
  "key21": "57Vgk7kBYeQP3yYAwKmuHAJcJvkorjuUiBp18TpDxB65LGbMHhXW1FUtjNW35GxYGZRhaoCPotH26Y6easpCZKET",
  "key22": "5QJiLMxKtg92dB7KRPqkkt1pbZhSzjoAvjqnx9h7oTtPpKo6h3wLtmHEvmLqA9k4MiczXCdwWx8Arq9yQCMCzpuo",
  "key23": "4DNoX6CtiktDtjBmxcVGSSpqPY6RW4z1x9ZLKPju7i3foWLgKPV3WZJSszCaXqUVzJLg1wQTrt9bD9tECBjB6hoc",
  "key24": "4wsrBCmguTiS2RvFb5RfocRKwgkFt1Rkx7aNcVPPYJiURHsF1PqoEvycGtkRhHVTo4Hr7ZYhzXHCeFMuqNsWfgV9",
  "key25": "4egyduPBscRQgVZxubRQaXUPe1tB4C38ysAPmrcJkuSZy4NxGyDbGGGhXADN855bepY3uF2hStMb5SWpgy6q9grP",
  "key26": "5Nq7ogZfvrB1oecjKTXsqYwUpsFyJiPnvzQJAwU1b3kVcmaa6oof1TEcRg4tnG27DPmYKn1knG3B8yMfaKngMUNm",
  "key27": "2EJ4cG47GxXqwVUpD1Zuw1NMUpoFqyQz1FfDcpYYCiXLn8Y1s9ybghnVXMmxBGRpfbJ9wgaf8W671bQXvXehaRcv",
  "key28": "4h92m6KSweEf1yGTh1mD8UrJYYzrpGs8qdS3E65HZYGwZurPWAohGW8m5tPMkRB6Nb67xc5jBihJHygGzC4RCZ5k",
  "key29": "3MNJFGWrDanju6NY1paiqN62jzrCaX8xAvEwBHhDfRiKP6N3vah6PQFQxJ9wHA6fKai5vmM5tYTw22oEP3rXZJzP",
  "key30": "4LbDCUeryk89QnpkpTnCVAo87towZRbf4g16zYZ5do7p4uFVSssPGC5HejCr1q6xedT55AQG4ainfscLePUrcRfd",
  "key31": "4UbgM47Aj8wt6gSNz8YMrmcKVr893mX263CoPkBwhLYspoUdA5hvnidFQrgpAFPBszDtYNwi5QTYFonH2Gz7ZZmx",
  "key32": "5KB7oJSzDzQVe9vUsi6zW4MHzwTyqT8SZ9jnaf1kfExbJ8tPAgoCZMyFBKCMnqArPwYaQJFweccAyDNSxDYvpfY8",
  "key33": "LkjxsTMXmj4W98zAdAi4BLez74pW5simfqMN1z3wW7w9ppHCbE2yhAnmYWkBdLi4rqyabMt8iFu4mDnXTXNniY1",
  "key34": "2usNjTGtfNBzeyCRa32g9W412qf8cWPQ2Z33ybcornRpNrBqegY7HirbE8syUTZJkKYJYdnQ5MDWk8UXyjYgAAtp"
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
