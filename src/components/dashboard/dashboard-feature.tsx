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
    "EHJs7GxAB5VN5wLMEvQPpH6uxGUK2XujfV8HGPRdK9XqNq9CLkmnHUhKHiBpEC6yCk2GweRQXgLsFEGdjNEPvqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bp2UtQNLh23W9F9Fq32udBZLPQmrEBEa7QGStcumPvpwDs787mWDcqWFmNg3p58m4MvXTZ4J5SvRNVjcBPNZSm8",
  "key1": "2zs4FTZvkryiTqayqgXKMjeZJj972rvh4T2rgeTQTbWjcje1grnPRi4jCAYfHpKkXRxQqq1Lvq3sr1JyxGEErfkV",
  "key2": "GX4pXXgw3UfJqUqDRNaNSkWTUute7PmMqpFgRrvnWz2ZKuXnu6YnLUAqEQnr51HU5LoZeEPZa8DsydmpGc4kesF",
  "key3": "67hLZDih8ygTSMNmThCaJN4ntFjSJ4oR4MEAtTvnZDsLMRRiytSt7BkmdBcJjYsmCxDWsceVkrX4zn6m4kUCjKMy",
  "key4": "25hLgdtfbn2NeezANcnbfx3oNtxXHPkPyxKQpnGXHc9cgamj9c1EYetGfr4qWZGGGVbgR4TCwhqDRfsUQwLuqW39",
  "key5": "5NHTHBbmkyAr8HANmp4Mja9eTSw4Aqm91AGRQNKSWDUsYyn6TiTkCVzPsVB9Wt8uPELBRwNCiLpzHuNqW9bmCHwV",
  "key6": "nYJs7sp2bavVCr6KrVUEe3gqgbcyLLynVtgidLscLfQKEczUviMMXFVDPs3bXjKiLBZzcgUimD73Nh5q6qhEBNQ",
  "key7": "5AwfYaHdAzoUYyQb2Gx2Nci4n2HcXfxzQXfabgXhab9WQAkpheKw65fZXW3HduEYeS4MQM5dxYjFtHKiYUGK9cFG",
  "key8": "38owPio2hei51yS64ngT226uzRZcuntcK6PJguKFs5SpQBvgvGmXK9AEyVUpcK2ARzpWScTS2LcfivwVvYzBg3Gq",
  "key9": "4At9gmmEMy6gSULq66kz7a4b387K4zU6y5x6JVMhE5HdWUD8eEin4owDLos6d6nHAiAtxjb1ZtTqnDmwxb1MLT7w",
  "key10": "3g1C4YzC3LnuAcRF3HBuek7QSfVkZYsZJhWkEmR36nHyTupuPPKbsKXFKo6JTUzgVB3xd6JzdLyVH44HYzPz6yKR",
  "key11": "3vK2G9Y1SWUMtFfvUk5nYtB87XC7zt3eD9oUseuyEwvyGGfadVLq6mtXD1KTYsDDFSe4jC73Q5RKBNNEBAmTWQMb",
  "key12": "5nfftM34GDCbU6sKyybYCEBjF8pq1FeWsADqSdMAJoJ5HR4sWtkHno34VhjUvERe7NM25MXEVe1kqsB8WpVf9j7g",
  "key13": "3eagxJK7NKQzniLyXJPBXAD37B5bMrH7Tj8e1U6WjyTbu72eM1GDHroCPMmLg1bEZbmtnqhA511hsFwArKo3rS8d",
  "key14": "4SnVgf8v2tpD1idfdV3rRMxQ7kr15JDGu7dScxYh3VktYXsbhsnyu3ifFe7kLqY9M1MsdykZXmCfZcQqHfAEpGaD",
  "key15": "2fjLqeUUuRRCeTuxRfYeWK61ndqKt6QbSmSYTSsvH92xPTfQdchoBQ1keiT5AhEJdqDbTu3Pa3i62Fz8ABG8NFWb",
  "key16": "2QFWB8esa88CcX8M22VNdVT1aTHDNSnN5p64PqK93i9aipYpASNUpx4nx2eERQcymFKiKkQY6zKqht9MbFUyVc3o",
  "key17": "2iGcPahorcXeAAgJMdGdYBVxreDzEAG4tq3iP8BNwvL3MoevhfMJZChzPwr4jdoxkMQ8AHZtnjusPSoZm1MMF8Ww",
  "key18": "2pp2N9kgjtkSddfteAKnycxFScYmz9dsqXMBqFuJQ3d4fNFFpNucXwkY6NUdH9s88Tdp27QtcAoTXfBhuywSy2sC",
  "key19": "3yvH7uMVjhCs8BByK6NuPTrmcaTdLXBZ7AfZLtXL9NdzPfFeMFRMLKkmuY6VhD1Y4tifpDt9XbkJosLhx5hd9j6C",
  "key20": "viHRaBF2ArPjYu1ozs5ZtcYq9bkDNrCP6HDVR3LUuH4kERwAfcYdYjSXMzBPprLepiyBrZZMgeBgfAV4kDuX4PW",
  "key21": "2oCcKvZF8r9pGb29GLXa63B5bCUM25sET5v3BzJseZBzzDaj5b7xEdTfjQ5MqKKRTZi6yuSjvb3R97gfxKHk3kAK",
  "key22": "3a8zeZqKmQst3yWBEGhFC3qHKKXioxiXJYJ39roLcgkCmhjMV6NgTzHDuavGYMfhLQeF7MJj5mFUthbrp2Vn9Lwm",
  "key23": "4ZcZx377XsnZpxxLfnQtuqEhS4GFdG6vhz1VmgEFENcwfSfprzcpVTQ3fNpG148eaf6HYsAsWWz7AyyN1GwWftnp",
  "key24": "uv7siwFiaEMokpas53Gs2iKyiYtV2zqQpyKgnNNuN1Y2RiSnsj334Kh7gZtHHf51HvHnC2JrXyiwcYgUqfFzRG2",
  "key25": "4jAdJ7472MbiAmzrBFMuQ8SutqzJCBm3K2h5EWYHgUgbzNWvujLxWt2sn6Q6PnpGwvLqvChw3ZGLYVUFvSXGg7U8",
  "key26": "4mnJ67wdzX1MJmhhaqf5DvWWAccBuJLTpTW751FMaY8kWU75996fK1vVq42S9JHRqzp3hb3BLSKaU8gitSNU9DYR",
  "key27": "4WXBHuX5YBBqP2nyAVs5AYzxyaf7cK1PYVwHcP8dszJAK8Xae2RNKkv2GSYvbwnspaQ7qAY5cXyCRgJdyRQjQ6ms",
  "key28": "3oNqwyAGxuh13qqCHRWysud1HY9eHAxmfSFzQduHtLztT96ngbpKuNGyVk7KUsPgWXZzp15AwquuroNhatJ1W8AL",
  "key29": "28ZHx9hocQe5xbLyuncL7FKYntjvrPbweYEuNQ14tyLWC8bYv7PhwESvaWrAAgjVSktLLDvYVnnzs448fnWJgCBV",
  "key30": "3qJbSajnhugbsxvU3ZBxjRBsYauymUFLoG3RP4yzn31HdGnJQrxau6L3cMG34zrcqTdrjcaWJ6RdH1aEKnjAhdMM",
  "key31": "61pkoUU34sHhLRnKfdvvwH96sBAKpJu3EC97vkEymvmRWCxHeQMiaAjKCCiJ4kvp6R7buKnWkdx4XfgHZZ27D33G"
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
