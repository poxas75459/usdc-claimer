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
    "33WWnLskiCFBvk1eb9rXnfzS4petWr839MKiNN2ops5qveDiNuobo938W9LhJZSMA686hRuw7oCEQESg2Ss1gzVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i4CUJq8Q6WsBLorKZPc5geZZRJvQMDrYXyB6T3KagKJiEKvMLJSrtxoydWRJQkXoxSbLVYdaQa6BMCd6DaoHTNd",
  "key1": "4qGCCzv962XZ2miEQkA8oCAYvKxJtutHQWSCzwWTqJg9an6ueJFwh9KcFj5aPxLUWd1q9twGXshnHkHwe6UuJtdw",
  "key2": "5Mer5viym78E52UWDAUytNLjLcFZGifP8uRF6ojn2EXPomz7pucHXUVLvdui2N3iv53iSX6NzW4HQdkGkhpxo56x",
  "key3": "2SRinDztz6NmfoJuwETTPHY5FZshCG6PEE3TS4UPFzSL5sQkooHKDEGwbtuvMxt96Nmvq2XQ5nQRuxnQ7Wa1FNxs",
  "key4": "ShNFESuHhWwUi9e4hV71iG922mHNWJYF1pLwH4YihHc264ARoF4YsFBwdm6JA9bLccdcyGzvJpbgHieGPTbN2Sq",
  "key5": "5pH8NAznfEok8duceibrtA4eJksAuEJ5rTFeqqz5y4xMBXKCuoxjS2UB4JPA37KY6Qe2VRrqNPTqcpGrs734EDH",
  "key6": "8VE7XGeX1T2MkVRPhzgf1bXs3MbJ5HJGLkUYxZ1akuMXJ8LCP1CPeNFMUH7tHXfppbYQMKhvrsruH2k6ehs4bsS",
  "key7": "4YNYwNbxTWW9QBVGg89Jz8fVq98pYm9CkFpUm8hXSetaQpPKb6pqtm1CQDb5MvQh3wrytXGV9PFJCXKZFgAHB3WH",
  "key8": "5RKDeek5uiqPDkLaWcsRMERv5pf7ZQwjqavvvA1hRHDB1tVvJ5cTF9Ryhtja1z9kC3aJgiDKcsNkoQMp4rWAmLp2",
  "key9": "2X8XcXh6d9vG843KgUaypqmYGQfvtugAZsx2kzjKNctuvrp8gKpXcx7H1MXAsq3MPN1cYbBcWMX7VfFmvaFkf1mX",
  "key10": "5sXcj75pmWg1X1NDKMMPP4xukpeXxo8LMZdqLzR9Ci841rzBzcJ5CYZwD3Am6JRwBwLj4mwmLyaU54JpUk5LZsvm",
  "key11": "52bMaytAew8iQwk3ufLe6AGFSzAV5qDVGCSUmBVrgsbdPJQxef1rYfq2wmsZXQggNdYUtR77doTWEyjgBfnFZpzS",
  "key12": "DTgVCc289CNz4AbKeUSQmeyBnSKc2SdiDhpKYGEiqxa8hjKxFS5PCqzKi3rn2CsxFpTG9LctsE2siKLGjGBZZHv",
  "key13": "5Gzvxt1KjVYKFfGGBj4bD1Shhv7LAcSUeLRNhKsMVTn7SS45nGj9uku83uh5tVXFbjUjXK8z3onhhsuRhoafZ47B",
  "key14": "PcqhUnkzEC1ry3AYZFW9cWU8RM3VPYkCNwK8kyRiJYiqqK5pA3UfhD9bb5furmbr9NVR4ewCmKBErrzRHv7JtrG",
  "key15": "41H2f6FYnqG6snpe4LHUuXQhqtRTv7cB1WDT5YiMWVun2zJGbwqtoJuH3ndD5Q9zAjG3t3Q3rDVipRz2bZVqicYA",
  "key16": "5jMs1ML5bZRrtVkKCsRWfcviQ4gxjd6btzLo2pimX2LEjZpXgpfZr564LqBp58eCboktA6Zee8XTEWcQPiVpExyq",
  "key17": "4wPiLt3TiDy9tbZYJsr36EtujR6pYgGBaFBjbpUKqkg37Gnk5WqvkxJggYPJEw6AQ4bbsBbX2bxjnBExN8MwbsgR",
  "key18": "eGuCrd98YXE4dQJgSrepee3ZarQHn8EXsp2wvNuUuxZHZ2VbjZMVNVBugpZQsnszbtrWJUurbmB92CkNEkcX6D4",
  "key19": "3JaaFaRfkavXehUAs36NrMKeMfGVTHCdvHbfQrbqGVVkMCLEeLABCrUQtGLrWskgYdbNq9XwQZe2XhTpzAGM3kWF",
  "key20": "5cUqnC43oQHDKx5uNRYnhdH3koM3RiDs8jXkyzx8mTQNz6fV7Q9firwM5pAmUSdwEbjF6b9SJ8CnQ5yx2M5nPsFJ",
  "key21": "5LQvUcwigg5quQe9ebUR7TVC5ea8RaG4EXVhohG38gFEK11UHN85nMATK1Jh6hyhgr2kCsM5ABNwYknVWE8kLsPd",
  "key22": "zEJCapVFr2rkEgr4GSJPFC13wBDY2r5hKHk5F1YPt8v9pNQowcXj4qYipt2oMmWBofRjTHmpmDiSXC2NLEdT3g2",
  "key23": "4bcrJsebfKnSWDwYB5zhjZWG5fLiK9m5ocHfu96WfhQBEm2UADZ1gYJuFf5vgksy2YgWCSvZvnabwVsRyn131SSW",
  "key24": "63PfXKXpbXYt11ZptNYbh4sH8Ph9MPgMsx87LXyXu6VahLXXbpRDRToPFg1Jcb9T7JjUdnPi6tTtvutLCBDwkRGn",
  "key25": "zec91hQBeHEVa7ZEbPdujoaUXLf54jVk85kBzGN4U7YGPEMxnfReEwENrchpXKBQU9xLYJjoBk7NSKNaGqkJ4Mw",
  "key26": "2PqCVmuHEED7eDigR4jVvvnGzLWhLX1xwV1XpcLC5KaarL5TeT6Lw3z1vD6t5L4VGYwPSVKGueswx88ndPfMxnw4",
  "key27": "ibGPujzrZEw2L2tS6y1Fb7bZys8VBHUKpAFhws2cMmwDvRWYStdngxkVQj4fRsYpQPoqhBzrpCd2cre6aZJ9tGD",
  "key28": "SUheQ4aq9Dh6uiK9pWChi545AUJpZBa2sgrgkn2SG6L95CY9eZ546xqBPkM2XkmcrDjE3VrLTa1CMDTn8jAyD1a",
  "key29": "2mAZQdaDEPKvVy5n1uBexahH2cxUGVAtFxUEZ66RYMgqeZGUWjAfr2L4kcUgWjmHM8WzJsnoje1vNEqrbLzzicQN",
  "key30": "3cuNn4Mxw33HLwkZS7bW6oF5KTTrBz73DKsYo2e62TzHYvsqrG3bEuQ3owooMy1dUFSJDRQCgdACVyn8qJocJCKz",
  "key31": "5WwEAhYKJibQTEuAcsmwdVX5fgNmkHmERzi2xosPV6Fv3jVZ5mfQBJyxkyeYSfYnJPDbUwG8hJfHdXPYWjfr9H6g",
  "key32": "2o1aaFVumhH1dENqTKFaimev4MPv1P5p8kGA3MriUTTExtQ1Mi3w48BZmS2yje9nnJAiLw1yoHVTByLDtnoKySpk",
  "key33": "5iWk7FrphBbexb7eNNsisS6YQWkko4gskGV9UF4s9UWut6ANXwti5M6cnQpK6KRs4PV7tAj7g9F2TLWvutV8sG9m",
  "key34": "2VMEJ4gLagGCEeN3kLykef8Hfzaa9btogusDtYstPv7toWmHkiveRVDpH1wT9PDCndPWnAMg1RDezXbzuktCNmFR",
  "key35": "3UWmZvF82A8Lq4dn712BbUPke7rkYu1GqePG758xnww757EUMWkjQEgcBqYWDP1wGvRubdCoFnaAzPFfDJDYktFi",
  "key36": "2db9fU33gTNwBftdygsWBpSDpFfmGGotS3SL74nFYTNJkf7bfKubuEYfR135cJYoaHyhZ5wBa3qGshGAoGM1XXFV",
  "key37": "jQxPWRQSLn8zbQr8Heb2E2fyRn9ssBrtA6wrmBs16eWPfZ5okgDVtXYvJptDUVfaFzGphR2JvHtUTTkog4avwpF",
  "key38": "5UEdXzEh4AHCSsmCN8vCcAAJMQ6Cirh8AkFQY7t65ujYgpKGHbtZfr7fPuwkLkZ5SjcuScQTCSDiWEscRV8bj2Ue",
  "key39": "xz4nwps8CXENfxipyJZiKRAeyrSiF76USHnD7qF8pV8wJwPHPWrnaNz6CTtTJgB5qvRwwqx4cHr1Lf3XxGasjqS",
  "key40": "24nX3rMRcwP4LSCwMNnxL3U63Pb5haW2hG4Ew4YwLa5EsVSCS3gU5cNvAW91FTWf6PAnD8qE3xFJA8GsjGCF2gb7",
  "key41": "5SAcsmJ12NhoYyU7Egif7Gtvv1KvYxNo7ZdWzEiMdPm3Uedj8jiA2U2pY7aD5bJ6ozMwnHvEvUx7VZANNeg66Snw",
  "key42": "3C4bRDXNrWdR7FejoofQyfC376YpA7etrGdJ9wKHdSXf6AuZqzCg86jAgiXZ5VdEgM8Kzrs1agTSc7dSsYQ9h96g",
  "key43": "5PUuQgkLwXB1jDiKNfQfaHmAiMM37uaeGL6JnpUvCUj1F7yaWy5j94RoWbc3p5SD2tmQ3hSKHcoe3awyphs2nobp",
  "key44": "55Ti9daVPF4iHWaNm8idYYgf87tKQBVv7g9SFrokkD1fHfP6YgYAPKVqZwZ7pXnL5QKLEuD8syMv2eY8SxViX6dP"
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
