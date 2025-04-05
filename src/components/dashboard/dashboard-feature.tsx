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
    "2TJzdT1pFQHyTwM8fNQ3ZBeeKz1T6b71RH5nxcf1H46txqDpVNiWkr5kQTwxHCuWTDrr8M8xPnyPWW3AHUZZpTbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kKeAv2w8n9bow6Y6vfoFkuwd1frQsu3H7xPmtdNxkLYd78KNs3Qok2borfjMVYCAYEAYi9aQ77byqaZzsSScw5B",
  "key1": "5k5xbZawyasePnCtAiCXHqJEGEMnuieMWPnicoSTcuYaJFYHzoWdY4R5BYZUy7Cpa4cSWGVw9cx3HS8fuquyAnLT",
  "key2": "3dgBAyzmQB4XBcqEqcNTybDBonC4dKtWgXMAg5ii4Hg4TVYwZZdrtF5uJ5zR39tSjYXNP8sDq1PKB8x3xNoGrGDB",
  "key3": "4mVA5YUFvCB6rWyaWyF2GHrz9d5pqtoD3H9K2tpVesmYFTtUMFKdG2wzscYcq6P2SCpDFHe61aMg3zfTNDsAXr6B",
  "key4": "3MnRztjHwrmvDBJoAGQ32jmBKeKFvXA3YttWdiKRpJK4C5kzgQhBWPs6owF2bpTSeWRfxjVzfEiXWLcG1sLUtKr5",
  "key5": "3cWznrR1aXS2AHp8dd7a44JnwLkFrV1aMdqqz2YkrAVHnM1NfC6WwTg7Xb7UPXQChDBj8gDamWDunCpbxRF4johE",
  "key6": "3tffz7AfDrqWfTSBN2HTFKgGpc96rk6bj3NnRpcqWBsn8Xoh5YhW2m22Re7vjapcWHwQiPfAPAMpSgzdzpUNcb4m",
  "key7": "5Z6JERbW9p7HbE3PYx4fChPUY2pztA6GqGCY8bJyJWqHjYsQmgBNHJePE4QSKf6dUxVWuUoutL8jPjuC3omppqjD",
  "key8": "2bBeoYK5MV6fK7fTKL2kxMERQTRo1S8qtmcFUNEbDv2vo7iYfXKLszbnWYHufx9AT79wo952v7PeC3mbQPvPEXdL",
  "key9": "63RmeQ8mvTdrjgDhbGMoyBFvZFVck7UKg22e9K1nMe8Q4JKje8sZYXug5fSAvXzfs9Jx5JZ6XFgMx1EUoCT1o5cV",
  "key10": "2eHnatQgavtMDuXjC171WMRiY5Wh1VcL5TbQyT2tDrKgs687RtSvY7decoSqyq8z1NHHkWa6WnTTJ8xA4VtBc5yk",
  "key11": "CGYUBqtvKCTspEP4DsXJ4m4tYSKPY3KZ7ZCneAAhQQn6QQdDkaeFPNPjdNTFm2Z3bDUG8YnZ1gAsrZyJptE5V64",
  "key12": "3mB6rPdA79rA3qYAfrHaiiTV5SDM2JoT686SCbm5PucTNv6gog22YFvj8qJsPASrUWoWdxVxcz6iaC6DKTqkzvj7",
  "key13": "2DvdrnsYMRDJXt4cqVKzuhRJV4w7m3rfLYy4yJLdzQp5FNnaS7aS223MzFgRaspdzApsaUhy17MTPncQCkW11qWW",
  "key14": "37MvbNp2Y9EMstxWaGmcZQGxKAUoxQqVe2YZ5XEg8qxpdZACaS5jYHxq8HPGEmUFziFpp3xxyJsYH8SRysuj7E8W",
  "key15": "5Bowwce9MFxh8JehKLar98Cg7fJJNyByZrXGM5C72pbk5c3D4rL2ad9bN7wc2qtszzJsVmNXRcS2T8wiLUA77KSJ",
  "key16": "2F1FYAEzxaSnbNVWWZr9vQzaeRJ47p3neZRgbeVBGeWZ4FYyZCnaqfExorispQJjtPT8AUrYkXx7BTYnqDviPtHU",
  "key17": "5DiNHyuNvqV8cVgxEaXQGQL7B2GxEJc2KsgdJNXowHGXZ5yVkbXMtmb4Q9h4HFdYwkHqqjZdV7ge6Xy5Mt8YFr6f",
  "key18": "45qhBz5WywYgiYLYhQ9ipDuzEUbUujhNBwEwuu5B1th3aGBufgM7NRaN71s6GYnm8WC4VVhmmDPadCkj3sfPjkfZ",
  "key19": "3uQcSyxfnsVv53LJWLZEi7pyszfurYK1PNkvjk4U5BjATG4d1t6cTv1j8NBseX7RzaytzpzSWR9cvVG44ESw3UBs",
  "key20": "4TYeWDX4RpgK9prRzSTdiLihbq3QtezjUXJQBuD9YP1NRMgbFXkjmSemnhyPCy7fg9Sy9Qs9iyizu6LbcjC1AvBs",
  "key21": "4BQLBzdTqb5Yo5TVBGgZDCKP1XVEKySJ4rWtQGmPLK2uTjUUiwXBLgTNkThBV2Si1Wbg3pBcLJaHLECwm6ineMG4",
  "key22": "49jrr1FEc7MSFsxKToYsqT9zjDLrRzYKDq484rDSzdsMVr4ph5VuhgqEBPreRJoUqE15wpFJseDEve6csNTGNL8R",
  "key23": "3yn7rZdCUBrAtqjBxAb5LLL8v52wVRyUKqUEhELB1z6jg47ZYoUSjT83EQVcj9MPobAiTaVq1Y8XDUkWJdUbpCkN",
  "key24": "4QRCryHFgtsC185yDcvwhgjn2Uq5GNkrK7Hn6hEpZGbNNVHSvWyzB2b8Sa3ajWNEa3E374iDM226Gnaijs79o89q",
  "key25": "3ViuZiKM83HJ7K4m9kqK2g9KtswhPCwVAC3SWmD8igik7w3ygu7FnjHu77g8rGxReuUsmvXrdyi7gmuYCsinvAyF",
  "key26": "5jzzow3LLvfkECzVk6jZFN61jXuuUXYRgcBCrya26qav4Kq5EZUSeSnm1BgFnPKYGv6PoRvMJhw2aYeAh2Wnd74W",
  "key27": "2rBuVXzZxGLNeVuMBe7RcVP3aeeLEx5iqVrvtpMNhuLyyQBbjpRNnyk44otaxQJUpzef74dwQvUYoPQXoLw6agiw",
  "key28": "368f5X3paJMpCbHaYXv2CJDHhFXYgzZMsXzg2BmtMPpZoSK9GgKEqUhAq4Jj4wJKuhCNE3tzBUAfHJSCP1LpMFfj",
  "key29": "2F91LCZzXwYKdwDC7gpZu1uzwis3XKHGfHPsiCqLgavFPuLvfCNB5P4eD1LzGYjHFC4Uvg1iLVsEq3WbU41Fy74S"
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
