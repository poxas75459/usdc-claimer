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
    "2C3hFsN6v8BAkfqkcBXo8C4sNtSwt6hqhwUtta5Lv7p3umd94Pn5uQJJijBMhxUeJ8GMJL8jb5Rh3v5DbnqThhSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29AWyefykvsCBPWGrnCFYmhZeHAANBCCncwZMrCyQWHrSz66dRcL8ddmFLCZ2ak6tKuXxcTK5QjDJJHdUf3WHHQR",
  "key1": "39UJEbvK1G7htbUg9xytkrcYcYTm2Cz1voeHzzXFLr3z4SurF8MwPvEww5HpWSmcFXtjpLevjDeNKWhuXUMVQV4B",
  "key2": "4hZJmMmssnnn1jCgYoPrMfVd2aSN9tRpohWPhZb654WeHoS7fM2exxasRknEUaEvRhp1iiJxbHNr2ojZQmP6pRUu",
  "key3": "3C6F2qvDAgWCRHRS9jorteD3QNNX9JRy6idvdg4ELah5Lxo4JRWHuVKRbNhoT3G6L3xpzSSq2ze9kwTFxHS1Vczj",
  "key4": "4fkU2HHbb6XmnciDqdh23qrUrGgHgnx6hY6nL6njFnEXcT8iWR7sXet96kviRHbbS8qQ2oBUJaxc5fQaaWfi9BdX",
  "key5": "5TTea5NnMYcyjRUtxcYboXFHMUXViQocK1EEw1sRz471p72n89E8PdNk6GNdbASNN4gWmgKy1Arc8sxAuCWbsv6d",
  "key6": "5qdtcE9HekBTWDpqxUd71zeYCX7Z4s2bDrdxnetyjXFZ82ihYMSJ6JgMEhJ3hd3kNQoQdQYRSBM9jSzQvafuLuNz",
  "key7": "4GaYkWmqNW2HUwu4ufGgtQHEhmsw9Sk5boiAATho9ZiidhBv6gArmJyMVGHAiZU7k1k6WcFHxyxBYA3DhYJ9KPKC",
  "key8": "2zHh41eeADnXHkjNQZV8kVSvephmV9ePFXWfAnCcDwWdKiKVJ4LGuNBfetfpkK7FxPn74oHNiGAyEmfks39GzD1f",
  "key9": "4jZjpEVGRQJp5FPNjCWCkBqefhF9GCBWLMxzTNCNmBctmhWNARGJbp1SWaSDYDnwbsWzTUV8V452WYsrE146BJ9D",
  "key10": "3Vadu5FEhDxLDuWfgTyvsGtZfKFgg7nP4LXyLc4St2ke558eN4xS4SBDR1JqfQgYnjQoSwDbyZouvAdwkJReuGio",
  "key11": "3bft3hfbC9RPuD6MLY2gSEZe8yD2VJqDrfWBJMPWbfqbxMz6fGXhoPmmKdHcmxoLEC5RUkMLn6gcjG4X5hpMBbqB",
  "key12": "4pZK7jhB86NqVHMXkkVgDwy8pMKLgBZTtKvkEhFkFrqgSQH5y2TFJbYZzXPcpTn9Ruyx1c13YAjAktao3CrU5vWT",
  "key13": "4KMhW3WX8kYLVSFGLF32iwx7qrdrgGQ3NSvNihayvGMhiBLp9rfS7xFuXo7VUHnGteES5mLmw29cgii99fZFi4Hb",
  "key14": "2UTUNjpdH98sTZtTbFPmwuqc1zhZJ5jQR2HydXCPTwwzEdisYCD4yWCjJp9LMhZzouXhQNmb5zcHtDN3w2uRqrLi",
  "key15": "DwENbZrU8xQibMGtSeiEspMcZnKNqPjUnbkwyNQzj9ojNvGkSPHiNVVqBU7G2YN1eCA6C4k2KCUF9Ds1gTw6NKU",
  "key16": "4MLntrRzCp8iiGFbDBvSbP3vgyYQMmaAmkH17FWbSv2Zi4fhbP4c1mb7nvPiu6oG1frFHZvJEFSMcoCtAhehfTK5",
  "key17": "SPzc2acmBzSCDZAvyxG1LJsMRrbV8s4XMiZKn9YT4NTDbitxyQ9aUhdFTVnMMVietG7so3LQmC214S6T1xf4ncf",
  "key18": "aXifgyQi79u52PjT4VmjWJQoYg9GGUnteAbuSqbaHHUxRPMevGEctoZQaurVrZEGvZF84CKFZ1WdyLBmMnN5j97",
  "key19": "4Ap3NN3A6PiGaYqkq4ejL2Rtz5no3pKLXeCXZiRUNr1J2JdX24wZyKzCgyd9xZBNLddKLuaqdrQdwN7JUGRKmKUn",
  "key20": "2qkgW8MuaSTJRtzcG1LTr9YmXPjhoTTmNxijtrsnPWyJY4AkN1PRzRPfYUHVoYA2Skuj32zGAML1wmnQfNvMkaA8",
  "key21": "2BCDDzzcCBtVrcwuiKmWnmGA3h5RNndjSawFH3xUpPXzXFp5Df62pdApADK7NcAmomd4YVxHbbVu7LTsMpoYW7wA",
  "key22": "5kwiNNmk394sY4vfiXkqM6xeMcwp8K6VexUonjst8hKLLLqMcm4XwGFED1znRXNnKbAp1V61o8pyi71VBburDQeU",
  "key23": "b1J9QTMAZr3Lh9nL4JwAPGkiM9LTU5tGzgv4pCyrtTM8eesWE8GgTKEfh2mmy9kqGZiWAnt5wuJQRHJELHjDjiB",
  "key24": "4YkD8ySEHXw9vY61VXHesCEeezp6UACu51rTpZGCuRhZ5v5bSCEDawqPuUko5AhBbzgbnsEudkd3CbueQQ8inwPu"
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
