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
    "4iEMChzG4ABmrs8vhhj1HeE5uBzUvJPtGNomCNrbDL7WpLpqSsoxhVCG9pBDV6XNQn63otqT6BitocgTYREE4wWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZuBkPVTynN5Q3UavmQ6aFDndRS96RV6aucmbBK9uZY3tKMkRYEPr4t4fxxtBsBaWdVxXSAakZDuPb2CBjBbdSxg",
  "key1": "5mKkBUrwGJyopMUHoME2ufMXq8pugPuLvvx5A1Awn13p7kPKnqXQ33rQnxejNT8Z2AzYPL9Z2nUN8vnqBgCG7YSw",
  "key2": "3hSUEBx9EHeJVsFMSHiNowFYuBBinX5mpn9Xo7cda45KC1NyyHMR4THBpVdqx99KnDuQEC3uB5PiMK7VGTYMFG2o",
  "key3": "heYiuAGLmsuLvv9Ck8BtSc4wWVXtGssVHpw8sUZ75m7YQjSKTq68E7SiVbrFxThRWCuEhJD74Q36mGnQuyYT4uA",
  "key4": "4LFccueiwUmoKMip1vSinpXhXmeKwmUmyXdZn2PJYKuzoWiTXuNMNsfV96W9mcVNFrZVefYgCGqfkaDhtWDAHtfZ",
  "key5": "yJ5YbocBAGhyT3qSeXY4KgMwf6RmY9jf9TapcbVRJ5nTsTUqbdVQoyuFt9hCB7bZhxux72PfceN771zjqzCY2JR",
  "key6": "3V4HuHEmXCphqn3idur3R8NTU3xXmEoCvW85FnNTarPW1eSMg7j8cYdff9ELzx7CAdS21fjsKkQStexr6ZAJg8vB",
  "key7": "3ymfzSnZPVMRQWXF6jkbKNKsA3hNfGwK4FFuazRA2aPKSxX6mTCRiuKwgAYiWqVn5x8PPZb5ttcB9kXCKMm95e9i",
  "key8": "5YAtgAKxYGmBTZ7Cnv5B4rqN8sqqqHHAMkaCfSqW7g6JXwtPoNaCZB6p6qcnLzmrwh74zPyB13f9sFY6KqkyTwVr",
  "key9": "jurrHamYZTV4sFMBzghXDFmQecZG6FX2Bosvny3zZWKH1DLJRcncDdxGSD2rRQveXCvE74GLR7Fe4Q8nNWzHSX6",
  "key10": "2xGU8yxQZVgUj6C9Ahx1ZvUb5JdvHnChCErBrm2u2mikcXJjoAGve5pAJfyjik8A5NsVeiXibtTKxQYTwBR7Jj1K",
  "key11": "212FzRYmAvkv2yRr3zov5rwHnn9QKEyrrSoJktfqDZhL8bDydLJkYrzKEtz93GMFDqRDdn95xTzyaHvRDMR7hkJH",
  "key12": "4MR4n5DBMHKpFJtVWyfGuemu8V8wmmpXGNETzeUsLzeags479rtszFwrKZD7yopNZs3bU8r8P2CXEZrWb8M5Jm4H",
  "key13": "4VT73h3JCz8C3t6YtNAU7313vWQtCCigSgDwCdRCu55Y5CAxh4KtUsg5oWUnjaPt6sqtALTCZp5Bgcp1uxhjrwEx",
  "key14": "4qqo3vvsgu76PaYgFjjCKooLTBf9xhH7eWrYvjkps21vdm9zZV2bcAUeoKhEh4zY4fVMVZZkTNu1nVvwNAUMnvGe",
  "key15": "2x8oDzGAbtT2LVBij74kJH4rhxqo6giHErULYMVygrzoQAxjs4ZLkUfFZocmpD8jTbXhDzjsVhvZKtAPLC95TZWt",
  "key16": "2n65W4o54tZnYfGnSaEpHTFwJVTbMseWB5HZcw8BWW32wceHzLUssx5pnrtevwCoDAECVqe3HWEYyTbHHxcWBY67",
  "key17": "5AnjmYt9AWiDHWheCeeoXhgMRQooauVGTP1Rja92r4veo2v2YP9FH4sskQUMfFixo86rQthQqhnWaL9e5gJmnkjV",
  "key18": "3FtEZUZx4kv9comXCm49eYwcdkZWQaCLSLQmquSjX21XW23TceJhT7Esc71VjHAxsxLUvE8G7ZCr6K2HbFxGVpJk",
  "key19": "3XMkekd7NrEB81rsRFgu3joZMHBKwfCwzbwGd3V24in6SSzp6VfHSLPLhKtqrc5eNz6n212E3yXanRStaQVQr25J",
  "key20": "5DKporw9oMuu13RTSGbsvLzMfqY4m1k3J1oMqrocdc9HopXBPB1THgUDmBsdX4FqdgGtrnptgzA4z6DZnsjvCxzR",
  "key21": "4udJu83gQuA8i8zSkCXETfwXZoiEHCt2CPRY9w841WBagHJKQtfJqcPgqREb9a36sS5NMKuCMgu86DQXi8FtqE2P",
  "key22": "42bLPnLpc3GZGHpa8JU1mAnwKAC3pVzrp9EYp2mPgrh3orK1ekEaBSKeW1Je6nk2XG8Rxq8CoTysXey5sAqUWasB",
  "key23": "5kFM6T51CBN76mTVpGRU9nUa6MnZJFe9THM9A4KAUtvwqq6svE31VeY6H3m9tmXWQH3XWAcb272qyHaNMMwmc3PW",
  "key24": "QqmvyMUfPe5y7tjNsSDp58T4cSR57tWWExX3zoJiMZMdtKE1sqjJzB9Cw8wmbNwCVnkvNabYjoThGusyYB7Vcr9",
  "key25": "3SCZnDF7xmXqqNNBWhYZUqYFMdwVY4iwzq93QmrQV2HnBnN8xohMQcmhs2fAxHVJPZcL2Z5fzW2Jf8UhQYDqCNqv",
  "key26": "5HTXX5nLC3wtQA8xRrQMRTuCXtcqXEZt1V1CZNZrTgRYWgU1rS6bYu2nG66FuGRh8FkHbn6hLJVxByGfRQSoJjCg",
  "key27": "23DmXKqSzbAiiyiLBoEwWqM676yaW6qWjJ49KgrPJZPD4VNbA7787D71RkTRxUGaEacCMxb3paHDHnG4KuJzVYjX",
  "key28": "3e9NfKwfgW8UhHAsSE6GXsGkBkSQQGqFyb6ubiFmHuPvHeHA7DU73pMSrpLmeW85nZFXUVS8CRFfNzTjz1wN9PSv",
  "key29": "5qkPXCHZTvNPGxLNbj4Hz7ogSNPVasMJuLRTJDB9ZMRZCNoCJTuCEjpkeK1Mb7qyddedk1NGrpqfYc1Lk6wc6879",
  "key30": "5NRK9ApxZQp7zn6XjQEiWT1dWiPzBnVtV5k6dLFGwwJRZpK7PcZ4Vx4GXQgfrkWkt7FpHvKbRf3L679REBFw42vw",
  "key31": "5kHPgwqvLMryqDB7LVBm6GFBSCZ4NBDnJTv8SJ7ubFTMxMajvEf34W9VGYbK1ARJjRhFe7XZU112csnw4o41jUSS",
  "key32": "2JqaW57NPRjDu21q5RCr7uEWLZKyAcCWTJwBWpQnSnvnr7hUpjkNTd9hUdeF7VVp19zHYLD7LkssL8HfiETBGWoh",
  "key33": "m3h8qbFGGzMvp9ptbLyBHZoV1DGbrf5VKkgLFVTcTVc6NXcf142AQGJdj71QAnscVkBFKyLVKNHgdi8W5LjcC7K",
  "key34": "2EyLUizqhk9MtLP9RUko7Cw12V25zNvu4woH3zM5ieRyxb6mWE9MkPAhT16EviewxohDUVSXNc9PAF5gFHi4mY4T"
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
