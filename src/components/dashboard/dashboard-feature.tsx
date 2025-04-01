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
    "ad97YZ7HUhCFHMrnM1G1bZ3Q4GokuaLHLTNMHgfe7zfdbspuVDxgfpXj2FVsCCHMnTr8j7RX4MRNA9Nx4amHbT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W9sevCBMsuecFrsp9WsNuZd3WJ7AcDXPjfUUqjUaQBYkTQniYqDUVCaBFAuc178raKrjP53gUwSpZDLRnH1onm7",
  "key1": "KLTtuXV7z1yKsRavs3q4LfqSA4Fsw72xnXij7DtwDM3QueBFhcjEbRLCoHVeZkbesjsoBXyTjKmTofJvx18cbez",
  "key2": "3U8nHPzBcr6ta8qow2aNyW4fFQ5Nd2SjypgcKTtcTcKAkJPfxxmV99FcG7wJU6TgHK6niyL9a2kkjDFHcXBq7CZZ",
  "key3": "4h8363dBhyMGuz4YKw83zZwjr64Ye4PmVuPTZJUsEJpqk5xqL7eF33a23b7K9JFDj3G3vhEoZWb8P7vE8n2wkVXk",
  "key4": "3bCRHvWmZNa3SLUMy9fp7Fb5y6ii17dDUxKFDEajnjmvk24w9i4C46U62NzbrNeKD9cyL1fpAk2vqAivUmUu6qMD",
  "key5": "HiTodCxJ8Yto6WBPUJQEcatUwPEd1CTEuvdZjzyqLs2TiNwt1z4co22m4fGcKDsBdomf4bivgoBdHUNHqbwDzY7",
  "key6": "2VyCWAJfsX8ETSV7eMrzhWxaSP9D5MU7KHnS4VK9TKec66oTfp9JyBfP2Pm5NeifxZtLiYdF5y5npwc47rchmhrn",
  "key7": "62gX1ghHoUMa2jDEiVbBcpVMUxBvUrtaR11rvEbYGC5SsEGHKBzmxYgQid7cpThgBQ1mMiy4T2RMKZpYoPvKdQA9",
  "key8": "49oZuneTAEvWHxxCacE54FKSy8Xg5a3Dkpzd84XYUEKt9WP5xNvh8AT7sqrubmga1ULwmsaBN7fPDRoaaZ1LLDu8",
  "key9": "4VzTnUDLYsHFZGuY6dwNqS6JMWpGKmRzKAHheVuoM6xjp2gCiz4Y6jRNnMnB83aNxgTP2ZbzHg4Rkxp2KHTzVrEK",
  "key10": "25jqeAz8uGrs234Widng2p9ow3bo1vcSQHrLqK9ynjkNZ31c6NuDt7bWR1mGUohZp7Z4xXcg4J7YQsG4NLrv9cBi",
  "key11": "4h9q3GMWygZiHLqdqBASYhiTVG3WQ3cCZ7J2oSY17WXpA7PaXUj1PWyDvt5TEnscN7im542pnp9uZh5Lv2BuhRP",
  "key12": "5apZi9LHKRe32nWH5d58MM8MAF9rFtXdt2fYuD3q23fFt5z55tRfB55AYunDxm6sMaMEQkNkub3Vkg6SQUiztKCd",
  "key13": "EBL5jtKoBBkUnBBJLkEekfYN9xYMnXt5aqaxCYGXass7gT8yXN8vBKPtNAQDcVJoTcEv9fDNdZoRoZrjR8aMA9q",
  "key14": "Km9j4kGZKD4CRdk3qizxsbHtH5oPgvKgFtw6Cti1XEgocMw3TJdoxtGDnDPDRSFoJurbxyQ2dWVZKGjrqzCQXAF",
  "key15": "ZAMi9eZzDW67pTPeX8fpFT9iadQ7YDPtn3W13YTxKbgggfYKSFfL4iYuhnCzzN4B5MbFyoWLKDZMhPrZrMUz7CU",
  "key16": "3hRxHUxC6wGXMrhTwJbcVYSQv2rGkZ9toUFsfXTPuzax4ELpAytvP19qBxerM4XhP45mAEDSUqhzzreDoQYqcSKK",
  "key17": "Jy9yzCAzT3pcS56GtB847sHhoPSf3ay4X7zKcFCk9xCZzF9gf94FxyfWXX2jQpwzUUGHwUxP9dNEoGmxzEXh3Nh",
  "key18": "4wzNpqwfztHUFc595wrcEVASbHJ8i5b5jKUSznADLCfD2fMR8wSrofv3vg2CfShommjFRKdWCaZCSfy3LQXd17b2",
  "key19": "31RqXgKWUfwYJsuBRNJmfCAa8Qd9jbFduHWPybufJNNYbciJtZCNrJkX8dPraHcr5tJn7RjhYNVuhcjos5UjFX25",
  "key20": "5mMuDwRQ2WAdARBskZj8w6doCyxBRL1ozk8DCXJ8gEyXpikZvrG673tcCNFy6QsdodpvD2BSTpqaLYXBjdGQeziq",
  "key21": "3KyHNjxPaWFuQYqZcxSSqgW3GoqxYfNAmbyw2vJA7gpMW2ofznhvS9A7kv2etjoLABFydnb3oxkVvMx2KF62KtZE",
  "key22": "49FJJEKv9twj1gZxcUvo7KLRDJCCHjyGQPQya9E2yzVyJtknfYr2Y6QygFq6k5Lmr2eNh8Nh8ENpeFfwNK6NyXtV",
  "key23": "2fb1NH6pBE4a8JgaE34E5KnojTFunkzFqx9dsJiZQV4ZfzcBcToYruis943TN1xf1yofFzqyqbYmrPSPk56szzRJ",
  "key24": "3mhhFMRzRSu6UV44HzxmZxXCCZCexGmCxDgjVtqUgWdKNTubem9zyfxNTRSSZkTbTgMjK38EK4eWCLpURtWBXPg7",
  "key25": "2okLNiJ2Fyk7RLmcgB5AFG5EG18YrZTx1BZThbpWPV1BzPE19ZsPT3Cm9uuAeiqrevX6gkQreXzDqnyfjNFMVn7M",
  "key26": "Wp3wX2uZkQ6vhjTsa2K71U7ZxNxmvwkoqBVyZWMooCKnzv6K6TPDuyk8KmdscAEoUZzEPQnaLUSaoRSTbrS3fTh",
  "key27": "65uFy31Nioc2rYeP6dZiv92DqxqBL3VKtK2i2hEyhLosDrhVt3kWPdxyrV35JQqxwT32uAuYr1fMLLwuKV6yvmNc",
  "key28": "5YxcxDVYfPSotVbqmDGuojABMQdB2h8XAZqiqSXhbWPkWV3iGT4dMi6cm7VAnefG4Vt4A5bDZ2Sodg376iQNCQL9"
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
