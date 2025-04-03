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
    "2YNe5TbzLX2Rn6w22XaGsAC6d5aPFW8ocbe1pgcTjaxx1pHqEBfiyeW7GdQs5Hgi2BRoR12wtfxAL2Rv9djAVAwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mr9ZSeYZvykqqnmjvBF4W4ZjuNS2PrR7VARtFFXxVQsUnHk2C5BR8G8KBajRij83CzxNie88reiuwDs8FFBM2fx",
  "key1": "2cm7WPjKW756CPSHDZx3t6zkykA73r5dNKYESQU4BaAT3cT3bSmQkuG11WafsFfe5mUVxXiS8RfjiwGMnfbLPaVQ",
  "key2": "5CvQ2eiGdXbKoym68Eoo6JNXaoy2FQoKrGEeyJE9kLfrTWrAyf3uPYM2nFCALUcFGrt6Vs3Zxrqa7ZGyC2TSiudf",
  "key3": "4TW2L1wEhpWTpaxERajJW3MS3dvkd5dAwFvwoR2cHLUP3Mexg3A9RjzXLVU1keudVmQYonGLKUJ2UdPR97PLnphy",
  "key4": "4LLJYYSyNFxEv2s7QS6UbFhSf9gxSTz1NxCLNhfPaJgyRYF3gDDQmriAPaFKAe5iVLpqzPHPerTcS65oYiHLWPkZ",
  "key5": "5Puo7ff5XHbBrprMBwMgVZ8Z93rNc7YcDCm5wP1GBNpf9EWmjA5tJxtJiYKu5EvafEhDZCRfJKeBpfAKGzxopCKe",
  "key6": "2DvWh6MHgbokr47fWmb6NFqSnBWL3XCaVf7sDhsHVkmLn48rSmiWJkkujVeYLBon2jAp4CfoGmna3bRARQF7b7eX",
  "key7": "fQaBkvAavZMXqC8BM3Jj62zG3XtwqcXpQmqvrYW5hkGQS9BGhDwcWc8j9DbGGyk5tn4YS8zqPB5suJWA48qoKgB",
  "key8": "23gKLRdb2aRZf9WsjNJiL1npwWY2P7ZMjLMNkkXBcmNvtowA8wr2hqGz4cjvxqXBMK5UjTLkWVYDPkgjvkRZAiNw",
  "key9": "5X6f3GDYi2pXrZu2T8U6wxKwZUQNVWYmwCEKiuwCFtNdRJJna4vkVnHTxtcjJvFmCVDQoZeQ9CzvGgdAr6NLnAjN",
  "key10": "2TfWpKbwkx1d2RCyG7Bhx82aVUFyVQbPXBezvYFZq3YNGwyCMTRdfxozeZi6hMQPJ7o2wL659KfhHXccoiWPje5F",
  "key11": "2evrywrkEZxyYdQwtj5o2i7q5SurEcu8b4iSfsEQ5RAc6VKcfrdSZ1VzhM8muqRp4jdZk7BJFVG4pL5eQ5EvGSmM",
  "key12": "5hYpGo6wGJwohZxUvXueGDC9Qsf7ta6Lv9re5Beygw7N2zNxVR2yRqTcFaLe7j8fUxwp4XzSPa2778mTDbmkH6PY",
  "key13": "3npwm7gXR2vJfe1fz1VBcZ1w2cfNbC2ba6q8UvbByQB9MxthFz49HmxYfRwc2Kkkaf7JhSY2MxRHpAvVpn8MAiLg",
  "key14": "2J2djDPs2ZYEYKCgniu9PrdyzDMWChBXPxQpGSfosXLEQNEC57LEYK7yQwh5eYebcYBjwZy6tKaVWwpY44UhBzPn",
  "key15": "51yBd2srzNg33btHgk1M3Pv1JHw7HteTbQohP9eZh7HKm6GgJVQ7qRk6WzHXRtzGRXs5u5FhJEmWCVvmZQThHk3p",
  "key16": "3i34WUnC766xqfzTh5xuBfXhubf2ZVEkmgypsv1my7gBQQAxrGynVABJ7Xq5YLmMhGv6RL9vW3tJGRYoWsmruWRB",
  "key17": "4kfNkhPSE4U9Xnx8pT1sUcnoqPaLHNBQcHzEtkZPvVwe6YGEHHV8WBpsgPeehyCzxo2CbNbDcjkspTqEbuTzSTt8",
  "key18": "3GUavUCntiU8LDLBYfn8HMLnpJAN7Dakqv8gCchzQY8D8uWryc3KiyBhPU2Mb6EUrYzBUTVjM7YnCk2Kp5krAsAC",
  "key19": "4pPuaieNWEYJEPmYtcSYhTWR4UobWLnzzvk3sUi7LfFimifj3nm34syjht5ykZr2a87KSickh4Q5pzyi2EPf1XWz",
  "key20": "4UiRw94cPT21DAAGeY9SmnBwsXmEWsXyVyojuPrnxcEKrxWH6nvqEdbkD9JMmVVVpCZT7tzQq2cKdnkCKzuZTRCg",
  "key21": "4cBCWy9seqo8fxnpFLV7d3f1VpB8bSeevDNosVbwpkqBvG8pWaUDs2xguaPaBCAgYjjEDrcDxCVcC2S5ExWzABtk",
  "key22": "8TBWwHUt8UZsi2ecwEZg68w6qww4qHcDs9e4xvtQ87vWgpTpwt879fGX9rhvvNgT7KrRDN58ub6PY1miunMHhnD",
  "key23": "3HhdbJtiuu1joGQUwgU1pXsrkaoH8zrvvea287MxAwNDUE3L5jYBPMfFS4P9URtJM8EQLN1ToTZXDwd1Q2t8CXFu",
  "key24": "413DXhzjgbWSQ31f15Y3SkVy4s8qVxZCVgzvZvNJwAcvxnTzwUvzALdaobYYvfQsRYVjHZ66V7gpKLrMghfrAhGu",
  "key25": "5JgfdYZLFAkmhDy2rKvn7qfURjgp9RycoLPhmbCcS66jiYZQDVjw2JwFpuphqxHpo5fPcwMi8sf4fLzyirNkicBN",
  "key26": "2FqrHkTBjBLp3QLJWjNAcaLeSfERbSaEE6VZ4k4pDcseEVrHHhifdtFEAx8Q5qdquh4c7KFzisXQZUFteRFn9oqb",
  "key27": "2eK2N4KjGwtAutDFzTyPKurqX9VRXs3abDLMTPjizdTr7cEGazr3fjUNqVjrin7FEUTA6zkM9YftyYqSKJQ4DXgp",
  "key28": "4cYfWc75LKX2Hmozb1BgwKCk9Q3u6czpXH5xyRY2ZZoMALVBuDdawN2eL1CJSXCvh4ummZGQ54xEBo1SuabqAKnD",
  "key29": "3T8Dn7W6JcGUDuS7tY6bxtfYu2HtF8VL41x3UthsnLJqJrmjGTBcU9TVB2N8swJGYBdm4H9DqH6HTQV4ostBiQ9g",
  "key30": "5dsNhzGuSuXmksJpy3qhAJpu7p4Vm7soxyBgQokjraLvP3P3c5kfEsAmNDdcvAQLtj2viLPZVRsTohBu5bjoty4h",
  "key31": "2Kf978XLHboAgNmMEMKY1EoxZYVghhc9ATfUzimiBaLwanhfvpPwnUgP4nRwUiSNyizuUv4c1ikRYfHFFa4XckkB"
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
