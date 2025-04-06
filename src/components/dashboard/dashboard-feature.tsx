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
    "2STwaeVTxNZDZEUUPeLucJJp9KgFJoiYCko5Aje8xwYQpw6dE1zDwbBBGZ5gxysuwohmqTayE6zLPk7BfrotKgxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KD5rwVVcCjCvHAoRWjRkesgeVC5xpVtRZSyk1Qm3qAqErYCRfi5hqr3mYT7Cep2LeWZ8cdu3ojAvsCaXSoZBx9P",
  "key1": "5uohxqa9Ac65wG9wNe9oaHqyoB3VMxDipiG1JkbkgqapWQ7LERiwsEQNjevaYED2VFWBydPBYK9GRYwej3jZEbri",
  "key2": "2QG7isYpKH2TW7MDoN9sYqtdGXyieMHvNmBzzia1szdMY3D7REaeyEfV7Sci9k9WeM9hhLykCruWjRAiPa5sNCuj",
  "key3": "3HhewE2ni3Jq4679m6AwAM8fJpoVdeTzJ74X8SNBY4jEREAyzZEAvmJSoad5JHxg7BHZrbrPsGVAxVt3QdTeiZnf",
  "key4": "3CiizEVFvE2VWs59GU1c3fjPSk1QVpKuuSMAqLPMVcJsRErVUHQxXqSTLaMuSNRJRjtDYs6s4zfAQ9SZMezJ1ckk",
  "key5": "4qBCNUWBrBLdi3yS71CLET3vQNY62LK3PejtsdUQZG2ciZB3TZgsiR9xxBpnzJkTw7xc7ujuWR6S2YijituPwiJu",
  "key6": "2ySC1unE1m9aet5L8gBvCoxaV7Fa6LExgsyvujJhPzq58tkCHPD32b398aVYzzFuQvztDEUM5EszPGfGpZNgcX5C",
  "key7": "85JhRGzrs2Hu2BFBv84mp9hpnqAjJqd9yjEcTtf1GQJfcmq9nthXKFvNuR7SyEYU8XoomL6A7wq1qE1fVnkQ98d",
  "key8": "227kWjD5voF2JnpnaQZTR4xEJvq53W1LSKRkRWVhZkDjDGJuCxqf4paA1mo6jWBYGXrQ7PA2tUAJtLcdcyQNpEvn",
  "key9": "2qtTxmLRoCD8kx3zUtXjMpPy6Egsii1V4gi1BEGKXu4iukvML986FbJfUfDm5xPHgDJ8ZTgRRMkkVrvvMhufQXvx",
  "key10": "3RxqWYUTXkrMvTMwKX4RAmCDarWsXMyXpXj16kkrVw9taNhC1takiuKd9M175obdpW5J89q6fLaDG7Cr5MEPaujZ",
  "key11": "5Au5LMTS2wRHXuQBzem6GSBqiJQhTVy5cgMnP4tqe8Tji8d6QfymUYcjffMGD6k3LBdf9zWSATWf6ggTeUX1ePuq",
  "key12": "3k2QaoMYHSWyGfufmK7w2aWSs7kWwfMjjiBSMhgVYsPpy4DMkyQJoqx2dp6uokCaKdRMmJLHQXNp27VHmp9Ls4d4",
  "key13": "5B4YaXX1tTyFpus1kf3nfYfngJ2yq4gaQSrZquuF4N6u6mvuasqNdgUmcqDdisUkosGT6vZBenSSJNtzuA6cjGhZ",
  "key14": "vz7YcQo7gjaR3qeqEtaCwatBjxkNBC8yxGqkPSFAhivpUzJVuWMFrwruoWwqHGRjdYCwa2ECHhRhpxLJrkVKBVq",
  "key15": "5UWACr98yhPC3hge27xkYHqnMfPyaVwNbDbukHaxAkFX8LXjrKXXdFo8XrpBJFKzGh1PxASsqRRaAqTPrcvpvqcy",
  "key16": "4cbntaN4PPVTsNZ2QdNmWt7ovodbtXSzmLR8cdSM9TZ5yWAZ7Y5rKTZfjkwbnT59Zuw2P9GWUCcV5yZ5ZbMuLNQm",
  "key17": "3Rb8Ah2nn8vsEREJLM5wrYAnhDbNkaHEwfXc9EZnRKowrX18mDmoENmKvpMHbjZPDEN8bgBxdNyrB7ZH9oBrs4bE",
  "key18": "3GDMBdEcUwPaSW32qtFuqRfcmvhEZyeBU5XwmfQFh2TSXqS5m5t4RJA1tyoQSgznPDJbCXioCPB7opemJriDtyth",
  "key19": "21LnByM7uFvipFJQdQEsBGF4w7sasQ6wgKLALq58RcJ8CUjJzGdzmiQfuhQ8L53gyiCwsXLgEoBMnqxfp2WjKaVp",
  "key20": "35VrADq97JzQNGT92unHNu1FkZsi551z4exYdAQ23oks7xwfYSmSL6snn6cdpJfPTuLJe7wsyXJ7jcoZt9GGWW8i",
  "key21": "3p62Mq2RqK34ADdtmPgPSqFvEPx1tcjZbH7CyKZjeTXoJsfU7hgzx2BACkL8jht29MNLWjyqCBmvD8kM5HShUEy",
  "key22": "3b4Jpa9SWec2YqZGGYfNqN5rnJzFCkZM4AucsPB24TfdCoFC8tVKL6h5Yeo1cMXfowLxWo3mJHQyxmUzbdnprQpG",
  "key23": "3QgaxVZW8V22khM8T81qDiU6JTt4MiECSgLPqVGVrtTBG1uxzPAMTk8Ch4bUirwwY6ahWZdBQdX7uJTVFqbNQbxD",
  "key24": "3mT22kmt6FdKzL7kdoTXcHLBcGqbqnFAihzUcvL9reGdnFcUKDVVWUH8gbCp9g93u8RJDEpq9sDwFrZD3cKZakbv",
  "key25": "4UYqsBaEp7LYNMzzRNneWfpgzLmiixDVvX4fN34pAsvWgcqwcgF7RcWaEYTyqKkiFwtzxYmuaptxQbkwrqr4eS57",
  "key26": "5E24UCdYqb9nYrVmuHJ6zjGGPhkjNqK4RQWjoZX1CC1XLnTYRvjdgfCuhGbQzwg9HT76ZznUfC9szYz7TFihKABP",
  "key27": "28gEiBcAursggUM9ePRwsjTmwYsyA6nAEBeQzfJz7VVunk65gpA2ugNJhrDj9pTaAG687sfNdPVAqoK3TeezYPEz",
  "key28": "554XNFkLLn5cazPzLDECRhcevPi31ExCwoCYRy3erXixY6k5KJSxmf2HzRBCnqhkeVM7ZYkGVSkatrGtem9LD8wX",
  "key29": "3BfbUgJxi1R2QG1xRSPoowmBJZ9kgPj76gKmtoHu3vGC9rWi3wkq4FCtV177V2iojo1oZkPUMJggnDL7G7WMmDT4",
  "key30": "2BuiUXhA6j2Sdp5bK6C9GahsegHt8Ewyy9NK1s4LtLUz6PadiiyRy6s4jYxQ8BM32XAFNcKxJ9CigsJyXjDKgeza",
  "key31": "3bzLRH8YkddfvQTxKf6Gm1FBG49Vgd98e334CtfSG8ZFrQjJGLkBRUDx4G9svj1zy8fcnZhJzb3JVMPbcftxEiN4"
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
