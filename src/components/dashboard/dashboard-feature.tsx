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
    "46X3k4kzwvXinQT66V6GLEZNGcvDeJRrLwbczGimEc6HZYzoY3qqRA67iZ2uEB4ANFek3gdah7QVA28jh4171yYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yG5y2NJSvkuwB52F86dtHLZ9SviMneKTax3aJjRqW4n6LVtP7qkFPfsktGH5awjf4vsfDLi5XVQ4vhzhrSHwC8k",
  "key1": "51n3JZiXQQbKoxJ99j97cQRgmpVPBEk9z6WF5KLrZTFpbgszy7jvBCCixGkNY4nMmDHxfekSUHGzbz6YDhbmAMhZ",
  "key2": "4Ujj91w4qhmm2KPpWY8vzoo76W9FiEQwBNUGmYQtiykjPwxRtdRGQuQSgbogj5AKrbQ8m8xZcygwgCA5r2XNprae",
  "key3": "2p2kDDPktLZMTSKaARSkzrUaRGAfC3hC8DxySfvXJY6H862fUPrngkDrwx11pr986hDtQ8xje6t5oWXyqifUUfJa",
  "key4": "4Ph5RVYV7ogQt4heL1kFw4ZZx9UvhNY5EtktDZGcRgJxDoehsxf9xEaZg5BwsBnKasuQXUArA97nFzXxbkiqf3Ce",
  "key5": "gnK1u1X7fpjLYKsgRGhuaXUZLQzRhx48s4CpFLo3AX5zyRXhGKiqZGvQw6HWNKd7uhAisqMByUT4zom9JiJJJQP",
  "key6": "5oPVPQwd3tufFx8N5UzL81Qrq7a5Yj2qRJusumRvY4bt2PQEQrsmkmh2aKooz1SK8oDjqZ9LcnregqMiAoeyWZvu",
  "key7": "vXTBA4ahM7ZgWLrSxRLBNpBeDLHexhqUR7dmRrsPrcV7GkeZEK95Ju25jh2GMi5YtjSVrmPSRX6Krf57NnnB6gS",
  "key8": "2iKymTx92paQU5FEPYNzUv1MUingfWJW7bqY2EbzKmcHUJas8U6TZcYDG2pZWKbeS1UD9vpkiXpmH53JE9Pzqmjz",
  "key9": "NAHn17pCiKcXdnG1BF3j1K1pTmAPwpSWzQWh5bA9DdYDnG8DwWWFfN1W899eFE67A8rpxb14D6bAzTVSrJSFETX",
  "key10": "eB8aGmh5Ftu421VCYBQUmS7oVAGUJALVvQLT8c54ayiqC59XD5PsapoLX42X9wY9bHTFS6y1etEfveUyEWwYVy4",
  "key11": "2CLvar51Fud13AczyJHSpzj9KcrtiCKaMmUUWaxDbjsvxp9c9YGrBqkBcNkdddUWW9X5maoWaPf2g91freTF53EP",
  "key12": "4wyxbL68yEAess8yTh6U1h1r6veDVpeoDxPN3cQLfRRMVkZVvnADTdkwksYeU7gQsUVhkZXKnkaD4vpYCywQw8PN",
  "key13": "3gKtDY5DF96fJVd2dPjod1fomnN58XAxgqP4Kwh6x7hfahbiVxduLBcSTxFmU7FVsnkqEZJiFEX5CdigQfwJj92q",
  "key14": "2YzQFaHfZEF38qCfaenpTKAeyRmN1thr5ErnRgzukhHkLhJyofHkDFmPJPn7iimQi47oeMeRUByoraSTcD4n8L38",
  "key15": "3uhi88xP4oVH79FRjk7f7CGNotfZHSjsWXnPVZx5N7ASjKw87Av1uiXuE6y72Hv8ovkSnwUfu2GuPMxCBYN6GhWH",
  "key16": "2mJ98biFwo6baivT9HZXUuGQKGBvdgqrxXVRmpdxw4CwWx3Q1XgcfCeSL5h4YJtyXVBnzQ8MBGcu7FJ5N8TbMELG",
  "key17": "55gQFoM7DeNzekXqy4ACnX8nQrBDRv3ivjGVkPzea2WznJazKZB5yJ5yGyDGk91v3S9LDp4Ag7uJe9ewWiZM4kv8",
  "key18": "2JNQBzQPxmTzbhy8ihyaf8vnsKtW48kKugrQCXFfgQmZ99axwht6UpifPxdHxeeJ1kSqKcodYngjJUaLviRqSz1h",
  "key19": "4qNpucXt557JpwZED3A47uHDVFwfa9ishmivx12uuJDxFG4tJvSiCeei7g9eWAjqnsDJRcV6LuhLypRZSX5mUiZj",
  "key20": "3bekSTjm9CqUq8HmWfJztLLZ9RKXi2qXAbwT2DV7zGqNxmmgPZPznyn3bqDFFwXwNdf6ruFHJHp749vQFaT5jR8u",
  "key21": "4W2VghM81sVAF2kb93b17WMfqgsaeRhWadjjLUKg8qePin6kx92ouPR4UFqBrob5ZvbjhbKXVEr8n2a4t9AbH5Wz",
  "key22": "2FZBZVu7g4MDWCJxNb1eQ4dkoUutYovhb73hrtbBFz1dh6GYieBUPX3qL4WP5yvw5BaVRSYcjPzoPcFEHi57cRXA",
  "key23": "5xQYgt5goTWHmYiRU1o5N5Xb3o9ZBhzg6EZsbPBKikCrxY5y55BQvUNC46NmFcbow32cPDdxosenk7c44YyVLqwX",
  "key24": "4fFFZPa5ov4h1aQyQffVqiPwEpmwMwwMTw3TweKyks5wEGgqn55Ygm7TrYcaCh5EFe9zEHj6atr79HzufjuJveym",
  "key25": "SFEnZKAtay1NEYLnXKjXGcdUfKs9akMGgFf7fiJfXtTfAvZRCB1SHarQodueSCQtgBhN4hiJrp11Vt21npGUsVk",
  "key26": "4UHxN2xD2FUMXrQSrRDQSX7UjxmExwZ6dMeJ4uhnp8N23pGLmnanFoSmD3dya7xCdr4c5wbkNJGKNMNL6VurFree",
  "key27": "28DgUMLg537k17Smbv4pRL2SK1dgqsbGYoETovPUCPTevmmrH7DNnU8PynLsbgzmAEoXS6ALTiWzQAfuuGoHiXQf",
  "key28": "4ZrXdttHYRAWoB4eqSihdZTqrCLL8nwYEhKyhcsyshT9VB69NGbYACqQPTwMd3zLkMKzWrDCGRSKkHfDx35pSaHg",
  "key29": "5pmLE7bZ9niVe3M5hDtX83WqLeLmh9kfPNUiX2o4L7hoBP6dwDbhPXmMJcQntZUtwyz8QKniEfKnpJCveC1Bauyz",
  "key30": "3d8KKS3v5Hd1Mj5dZU8zsWwguajQkBPog8pJgqWYfnc8YqBJWM4Qja9iMmme4hAEBicc9axySqcgYfTrEubDqNtz",
  "key31": "57nm18ZDZea8QWaTWygZE4qnNLpNZXbui3qSd2h98bDqc73To4LFGErJGkJVXZD9ThPtdHUgDBGKXMEBDFJU8goY",
  "key32": "4QzenARzWEFCQVfupVEJVT4L1N1E3eL76nJmVcqHDMnT7MsARJZqWqaKnSSi6eDEh7CHGYttXugaiLYv71h9UF6m",
  "key33": "2euiv1wyqNGyB3dmUj8ajjYZXN4gqj9GXsjvbseKKR8YAYk16weREraXx2mRurCMJ9kEp66kzC4nrxrsyYnvgXjD",
  "key34": "69BNGQYxcCu9Qw6wZLHpvnCqA377npeNf1nD7vpSqmmfmKJje8MiPkMsiEXKMiUyPFQnYjMRGmAjuTRBAzA3mq4",
  "key35": "2i49MatuWEiqHvfEr838faGuqv5wpGi7XxvtmyQipECGaNoRtCU9BY7kF6WCUkKjgAQvQYG8CdELoTw7JbnTkTkJ"
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
