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
    "4Mibsh3hVGhHU7CErfRd73MXNP84bWqiFPePwVNJXmrAfazqX4jVzCNSoLJgRBY7pBAvikh5p5HN5x17HBwnFUkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nSHHby1AwyuDHYmbjDyCcoFjmP52AiSq9dPZSGqgPQtxfQe3ryiJXg3qqMAU6cqcYdk2vsVCNoone9HENQRVLwv",
  "key1": "5NjYLUyWw2U3Y2wui7n395JknnwqqyEgbHxj62Av7aLez6VAjANdRwehVkY3thtuui3QAz562ZbPp46s7oWPUqWY",
  "key2": "4DQvKAkWtD3ttRhjuvsvov3nPCZqZ7SDp9MPBwpHoimpdVABup3bRL2o1b5KZ6mmYAqDoHS71A817pGTMXJ8yCy3",
  "key3": "dCY8b14iikgbNyp8hLWaja58heNyb6FEFsWabEPez28hD4r1Ay5SMWrsvLuUF1q7ibhdWGL9C2fs7vGGAHWFKNk",
  "key4": "3DN5Axjg74i4suWAxPkqKEdTye3tUHLWAVML7ph5S58LZaREZRi5G2q73LVTZHg1LFmFMudA2F7TvC1zaH2Md7W8",
  "key5": "1wXfNtdQxHSKuYu75QnsAuQduXQp1a4xKD5uZQ6NeeJH2DsAj885b5eEYNHL53yzM4RSgzB5MEn4oLwKn4MPetH",
  "key6": "CmUa5sr81tKsjxnwFBkgndShPkQArkyYyNgMAzbXcemwvD9L7hUPY2zWtLPeRCZUW35raAyHo4ZTw5dKWPfZeuL",
  "key7": "5pF1JQ63TLo5ULN8PyQ8mN3HQAJYWQPuX1KfazSRJL7VME61F85uzncc42ay6d1bQncwDw1y482yRWCGEgFPUdZh",
  "key8": "2kgByA5tv7VPW12Eu4GU2HdELzuxzYxNbdF2E3gGbkh3V8kkmunJsAPrAYNDEFeFTb3TEAd47cLYdQ8zrugxxza",
  "key9": "3faZ5RteNkJKbvjLr7txbfjqdtKh4s98623R2kK6jNS6YA8V7DJJs9PcjXZZW8BSspWUdMKthL5AcccNECgLBt3F",
  "key10": "1Hqy2npLxESJPCv4REZo53QBW5nGdsLCAd3HMXWoaySaZcqKEDsMXo513C6H4dyDtD7MvdhqVzMsg9Pbj8qSfMT",
  "key11": "5Zj4TfGXkaQxBLramQ1ya8CCmcRnAXbLMcsx99AaEghXACwkmHsNBodeftyVMMqtvHwueUAqsaEH84Qf7b4NMqRW",
  "key12": "2GKYaPpL2ycpgiY3UJ5GbyDB4WmMjFEJvxvHsnFW3iCPvuKez5eSadH6xw6TQKxf6kZm3Z2GU1aaTuzBanKuedPU",
  "key13": "4a18FnJ79WhqFVPZu3HFE7uJLKv4Hf58qEgFb8hYJJUvgYKCMvN1g4xmvA4XnoBGdsDEmpnP8FsJLM9W4jw8LwAG",
  "key14": "b29eJngMVrDgWhS6AvFCYVh5p9D4wGMnVEUB1dHReRjsVHBjma6CAPMGQCDqjwhQsH9t1BeZkDagNU2H24CX1wt",
  "key15": "pn41BdwDF9EXkDvtEYbugZvwhUjo2eKiYyxQVXpiiBbTRdhQdLN1mzeYj6uwoib4KcdvXS683fRJ2qLBxBSEPb8",
  "key16": "DvLB72Nq3QtPY8hSbsnMrskzMr6fN5to8jioftrrp1yro5h6CmAZkewTZ6efJLRNtFhxNTBRh8Hqwqis7wNFd5x",
  "key17": "5UjjoPgkbZfDXCbmTZhAaSSQE7wF744hJD4hjhf5h4V46RWax9Au6vYLFvbzwxoNCwS6vCEmrHekPUwQLtvy6N3W",
  "key18": "4heTCKYMmoaJLsd8GrowPcejYk1RmUJzunHGhpx7PXgcZGB7V8N8bCrN1pHawEiDyaevEs8pukbFS9n1JjJCUXxG",
  "key19": "5jks1j1RXuNThie4s8KL2FmEAntVSA2KbWsAJvKqcejwJSrrQXRfioRALe2wUaommvWQND1jsqfMRcUUv4FU2sjN",
  "key20": "3RraSHurMVKcffsCMFKZrEDkcZWm1zrgRXM56XSa37WabZo35ugBuPo4nTC7uBRr67KpP3kdh4SuGETgg5vU4WCU",
  "key21": "5qKsK75vapQ72M2nVVWjnVmWUtY9fYWtD637nHDG6yegSnkraDt1aM5BsQR8L7u8Fp3ivR867mZFYUsjQejLUuus",
  "key22": "3oRfqtXrZMeN7udowPVMapuSLRhFpzCLgnteVpYU7RTxseV1phPRqsY4koWYyzu3DyMrV9ESU5TB1TovrTPYyK2L",
  "key23": "4fbrdWZuaBkW7tUK4pYpLTCj1GzJjxUSwLEBqHrud3sGxfqWSbC69Fx4R1nkx39Dx3MrignwDipdbvUEkc9qbDwT",
  "key24": "62KPRsZDEvfX5XwJEqwh5NSjtEsuF7yRNK9UkC2uwW6SxVfoiE3g5vcxgyGAxFia5WoV9t1t5TSZL6EeVW1wppZc",
  "key25": "3JCaEttPe9DKfLWLEGmCKeXs4dkRxRBchmgewPtWSCNKrQRWLcScraLdD2WNEE2yseewVmn9VRAy93HNgx8YCNNS",
  "key26": "35yNEo1W95s6ZmizewLpEtNr9a9gicE84Vpf9ASzVUtMkFi5rhZ5mvuQfJ2qYPi9KpgpNomWtEpSKy1CzDVdzMH8",
  "key27": "4mxXA3iJDENjwX9WMeLc8XLTk2XreA7oQX3xWUzY2PnzryrQNuMnShSUiDwwqQXcLg7Jz1r2sd366a4x9nWPytLL"
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
