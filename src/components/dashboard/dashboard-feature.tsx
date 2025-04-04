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
    "X2nr1KSvQaMCqRYxRhgue2AKVuYuopk6rzCdd2XUvfX2SbDmKWUfi3YGXMs37LFditQMH6JGfXKwMT7szRo7ytP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3foCJWXMtC5Xtd6KGGQMBSubznBwdAa2TA7aUgWY5ZyUqSExgwShjKg8NbdpuBTJpHyW3ifB8aSD9NpGPU1sTfTQ",
  "key1": "4aAbsJwcsFZzJKZvCWoHgpFM6XNFkYMW3g2mnQ3rGtXQGVKgjVoydT1r6BPRLn8SaMv24PRQnv7HNa2kzHDQUUin",
  "key2": "5aJzHuipVVYzwpApFzwCeHoB5dnmpd1pXp9oCrYAgBoKNkwJR7PskdHcEKWfgq3AZquzsGC3vnMuJEdYTxXWe7nc",
  "key3": "4ZHnLq78kjW23m94eVN9Jr2oJueMTykhEsHezrVcUcSNKAMh6Xy5GPZYiuCqR1AfUWXiqDLS7kp5pi7EmVZAdLtA",
  "key4": "4U9GG5Z1s1XzhsyfmZDnUrdUVzXZB1HXZPP1kHoCT6Sg17FaPsUqvgfwDX6uTxpy8s5Vuc3q44qsza8cxd42S9Ac",
  "key5": "W6fdZBFNiJjZbdByqtCBa3xQ4R29Trg2AUtFBvUnjrGcxHJYkPupZcxMv9vXPqucEySysGsfPqAS9PgpAxdGFsu",
  "key6": "5jGhQNQfpZdUQChbZJ3N9v2skWjwNxj6AN9N9dXRRBTM92fubRDKCbWxZJTjKj1V9sHrknhArAUgk41h5jxtr4LW",
  "key7": "4GX9yL9hFxcBs8qsb2r8b8NW4PyQn1T96f1JvSxZMRzCQLeqSe2ENjrW6jrnDwW7eXS9mBXLoUgLuhwQSn2Ftqp9",
  "key8": "4tpuoJbXae9kx83SQQR23b7tqTwoBqWPKYrTrXpvbobo3zS6E2SgHEv9X5HheS72YTvVf6T8APW6SvbDHmjP9yTM",
  "key9": "2NP1dcTySrKBEwqiuQQTTnqqHpkqgDxcEhJzJu1Dif1ViGSeMP896ypqgefocwzgtxfWW1pEAE23koP9uryCit9K",
  "key10": "ie7a7YBo5LuSp8NcZiGpRXmyeTRiA9j9xsQfcgocEPx6BTeS9aLcYxeffhtRkzcZ1yxo2z9HjK9hKXs1pvvAUVU",
  "key11": "T27YjHet2pR6yj75poeDWAoNmT4KeZVaSxzbR64t7mwiks3vmm6sS6cH1wGWcMzjyWh9TzAX38UXTHfT2PyEGJg",
  "key12": "3eqTdGagQHAafL9cTMg2bUYroHW5MrzKK4gLhWSyREJJhMNKY68eZtRDD9yMdGND5WvRrPiPbSY5UqHkE34HbwcK",
  "key13": "39UnmwPpr8TfFkuxCtxNscAFE68JxHRkzpPAbzdDYFvkXZziYJhHD16Nsi7Uak8ku8gVPA5DEG2S49iwh3TGRniu",
  "key14": "4xwiXtob6J6yWaSECKfDFipcbXhmiuaZ2YXSgw8qK4HnrXi7KxV6ykMongEGRDxvyC111zYR1xeUdPgpwg9sF9XX",
  "key15": "65ZWLhcsEGMXpaFEK5NfCQkGWp4Q8AREo7FuVAi9TEzsgHsHLtzRCK8ZFsEKV6uP2w7f4U4bNn4CzZafkYZMummK",
  "key16": "2Rgi2QZGuKco31TUsNbZ56zj4PW55aVU5Bh2VDzxNPXLhijAW4NxkytpfEGbWcTwJaxux8TugXT8KyRtnpXKFEoE",
  "key17": "3PMp7D79M1vjhV8ucHqp4Cj2zrz8B7q4aCvcqUFq8jqaBpysnNcFRPAZaZAZ22wb4rxqvKMk9G1QmAARP7GDgGHx",
  "key18": "43sDd7F2k7LkYUEbcvxyHfNhRe7CkcG6saNkfQ1jtBkgxWhu5ibVCYhLLHHZ7QDAJWSVk52ozVzPmB9xTQta92Rp",
  "key19": "5nWA6kP8AAAWJBzgPbhuUosvpM9hy3fCmmvJ528sbDAUUzdrUUa3DhQ8ebTFJSoYMGQp7iSbkyweYNcVe4X6d5Ra",
  "key20": "26CEQzwLcQRw9QJyLKiFvp1YXAJyRksPeSRkeCn9hUANeg74gWRkJJsiATL65h2omifp2tpBgzuJZYqqNmfTE5EZ",
  "key21": "DgyG3bxaHR5HMpRKMZ8rFKVudgcUweeR5HbE3QGyAd8WdCzzXNP6DdBhRWVFi6d4v7URyh7aLfGygLqaxRz6HBf",
  "key22": "46u5hymZWRTVh6chTpJUsNnnxuCm1cbazNgKr1sNAgsusHrFqjsv35Ykezha62KPpMvMg2JaBQj3J4owPfZYy9iY",
  "key23": "63VTpXDpVm881HnhDWVhBnHFwbHJbay6VDT2Yn8vEoS6X8gu5Q1D6CanAtEVqkXxouKaV6Dus6ZPX8XBnEByaTKN",
  "key24": "3FenehTKWxrTsLJjPf1b3B3PdppNvoUUDPfdUWRKoB2WV5kvNBD3hECWpUdBcirukp7D27ECuhxerQfQqutfZw5t",
  "key25": "231DzUR2S1WPtazeEHkAa1BXxUEVGYYdH2DYPMGs9z3vzeMmUeQuaXvhKc1CkUWWBWYh6NNnAgpbpfcF1qsBDsrE",
  "key26": "3FNV4s1RwAWBfd745he5YcAwpzPxkoaCqMHH2F7YLRqn8tpnTMTf8oHd86a37tQAbsdwek1C57EGApQhiLmmdSEs",
  "key27": "5n9UoCQkQfthctk89k7d56vqyiu1WG4mkirBma8zcQKuBWcPpSuTDFrH1ubiKrV6GFWmvRkyNXeJDyxQkeLKJKFu",
  "key28": "5nsUkL4mrnBorRVwEoGcAccgRyhWjaKBozf8eS5ft4r54sTqJzhrkTHw89pRFtYaVjTB2rGsh7EeRHcMZgsE2xZp",
  "key29": "2gKuxk3uhfuVpAMkegCDwXygzt9fukHLAW7tA1aurbJ6XUUFtMeMVmmzU865jkAUkpuscGGvbykS8WTk8fPcMEwp",
  "key30": "5TPJWnGvjR39WDgD6LjiGcnvR29nvv8uNEYHkw2aytWoCR1PaCBqepJxdynWqqFWpMkWuB5amAetEzm1ku3bDr4f"
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
