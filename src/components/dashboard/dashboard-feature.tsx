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
    "2Kh58pKB2opfYTcWuk9MtAEFZFshQKMzhpakupA4mvN85GTN5hpEoXk3UA3sQxgRfyGhY2E9D71MHmj7kEfcgokT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4c6SDRN7e15H1iVQtMr1jg3FhT3L1QMoyENUZy7SM7KXdTig2T2JmToYeRhB1dauWukFAmcMsqAhkL8LGazJwY",
  "key1": "ti2PQ2odbd8L4hDB2G7VbwwAQJz2vZwyCx5dHnS5Y2gS5Cm7PzVhXyoA8sE3pyBJTBfEHxoqVFn66EgoLUaRoRv",
  "key2": "4x2ZaHipqVYK9U9GQTzWuwQQH66npvmG591gK6oqoWyuYue1CuGx5B51zmy9q3F1v41n79bdNUMzGtfHgbkAJqsh",
  "key3": "2tNXJuB2myJDPKw5DpGv31V8kR79qCfZ1Zg2XqrNqubVHXP3kkEefrFyT4DY4xDE3oNozTvtt2NgPxKLgbP6e8pV",
  "key4": "5qXC3xy3YthbpMEPY2jq7ocPGvFNgh6QU7mwkhgBTNaBARxWfnxxpBt7xeGwNThG3YUKH9oEgSCP52jftbXyEo5q",
  "key5": "4Km48DVd8P7cpuieNm9mSB6fn1wtieo1Cttqo481WXfEniiXrt65w23GtiQmF5LQU3o5ir48znaMBoGfB846r6GA",
  "key6": "3H5CzCvmivT3JMeLiQGprEpVnkgj6Hpb38giVdSH4WWYJYfifoGEeCnZzE6pwe93epZHaiWyyVNn6xxmpxaC7ioG",
  "key7": "vVXKTbJjDcWtgh6XELHCBSQ6kBWscbX6adU5EJ9aXaDthrSKdMQC9atHS8hNnTRoe8BXNSzNTnvnyzpm5b7sFaa",
  "key8": "UpXSx9yxS2hBfFwWV292gXYLBTg8rP9to7MwRrKUL1D2j5krzFBEqLckjz1j5U17H1T58p3UUGDfC3Z9Vrri8KG",
  "key9": "5ULuZoXxKFFFMi5SMdEycL8GBLnm2t2k3Ro9VyPktvDpr2BLUgRsvMVAmXupvujDcoSypYiwpwwz4xD234yA7wtF",
  "key10": "3xd4ePDgar4wtFa8VRHte7UnDJYjWtcZQceLquPPGFMvD21LFzaLV93dpqpFuF31JTgKAJE9QhSUjqEeRBvrQgNo",
  "key11": "5Sr7QhWtKC6ZDf7e5v7ANgXLwQVwFG5MWX5kH7qbrszcAwfwX6Yz4rUjZPTGxmukWpdCdTtixptCLosY3qZHGuZE",
  "key12": "wxCva46pQNXviCCYeXbCjwRoqyWSyDk8GEfeMoR6XEPQtmkBCnsLbgtmwx1edgtuZQJ91jSYZbuk4iEqmajCjpr",
  "key13": "65EUHekqTFuZqgarkAEJwpabdEAv39Ms1vbxswPaEkgAqyRzJbxh2B1pRofR6CXf7AsQ11bF7waHAwqvgkTPSQdE",
  "key14": "4U9yeXSCCSwbQX1CFX639RKy9XevmEkUaBCQBbQ5BkCZUCc6JxceuXifA5vwrkJzza6Uob1oHFjazqCnK5bWuuSg",
  "key15": "4cbniHSAwStRyNKD9Reb7rNxkG9GzSqvwbDyCByURGFUHYR3i5HzGxyZYD1V93LYSUvuzMRyRT7zLMPnNL5PNAsS",
  "key16": "SkPUfcJuCrmR1ZemKuKhncuKvYevhV95Az8iipkEPLzDuTXynoAjxD1UqxhsyCmeLPXQ1BQ1k2phh5AmEWPcDvC",
  "key17": "oFAS7FeL8be8udcbVT7AQ3J4BZ5ynbJvKwUbGK8zF47BjJkRCtsDWj2j6d1VWbXehfzqKiRP36BDdPmqnNtyAhc",
  "key18": "2bv8d4mpfKbaRR539UCcwYuZXowTkToPkppdiWPevZPNUorHv632dbfjJS1Gtbz6f1CYFh2GsboC8R3cCpUrAJtL",
  "key19": "4QVSgZJowqYxh171qnqBR2v4btQ3QMc2oQG4MYz99JQfeqHR7HpaNqKcjeXPiFviWs1K1hUDoapcbwWmKRwsT1qX",
  "key20": "tNGKxcRXaMosFpmyEobEKfohpFhzxi9ZMN6gAXy3eVNoaY75PPwEBJeEPiJSGACJgiPjL11drEq8cwvj4vnqpL6",
  "key21": "2rDX1in9JBeKT3SpEzq4oHM7utyLQXMuHF1DFTCmMe7pJm6zUUEtkeKyRMeUAxxWxiBwbPRk2RCBDPL4vvd5dDFJ",
  "key22": "93ypCFVuxx8CG9fhnskrR5BvsPXzQqWr7rsYzYEsqzXU39FdJ5cV9PGv4uDuFC7MECHzyfnMXHSSg76wFitqfKD",
  "key23": "2Zic3Z2cUoaEMcApeKyUPCGUeGptX16eGPQvUJCbiYUm8sXyjqAbASAmjrDG7tuegu2xSH6EoYo6TiGD969EsF5G",
  "key24": "4dwKPRJnYqD8NqQ3xjVtYCy9Nx4QSM9UWz2RZvMNqtsQ63YXsjQUqmod4SEHtMHoAfVtLLEAzjDTesgirzTritCE",
  "key25": "4Re8LoTMPknf3DaR8pDZCNyfFC3wC7jPPhFS4XMnhuNqyoBAQZc13WkF4wALwuVRf1fG9scmBCon3vS7KZjpxwTU",
  "key26": "5rME9zVRrH1JVEiEgMPSttxyTLetr2BSKrg9T52XkiMH6bUiaK5X9qCmmEshM9fHg65SfoNgADPcV6xeaGvX5htR",
  "key27": "2w9s2Bx1md4fFkmqGGzuijFGk82yJn1toFAUMKj7UV6bDFWGpmF8Ex4tHUqLrnauvXtMpBg5oqSvEkR9iq7CfMqd",
  "key28": "Ky7udGG2aL1oto4qciEtHitND9wdGRk9U3BcYszG7bbyoUg8EPdNQ3wMUjvXDtAWSfQ44jgPbGzc1Qt5VcQL8yq",
  "key29": "NeWMVQhJV3hkoL6AWbATScbeNPzgb3U5C1mCcWxfFJsR3iekp7eL99v2QtnS5dM6oqUeyKG7Tuikg2WjpsCd8q9",
  "key30": "qc1wxdvxbZ1peu1dRY32P8AqUVZYvFkQ9iFrSJiq92U25KrV5jmDmYj17bWBm1N8Udj9YS3jrVrVRqhpgMVYGnr",
  "key31": "2tBmEQ5Jh3Px3NMUfDoPc1gADZm2hFeHNetkbGiUAw2ToMU8tSjUhh9xyebyEwVzf8BmGHMnswXzM3SEQokTWytn"
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
