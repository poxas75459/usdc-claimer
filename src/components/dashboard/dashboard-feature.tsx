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
    "35LKXXavePmwcZT2ft281H4rUSxE6M6cQSNiFRy9Yyd793YckuPzrr7i9R9qXebHhXW2nDETgnFZk5RY6Zejdvto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cYA2ruuGWnDgjshRszKcq9CQVv3rD1ewrX1LC3zuDka86Epknuo4ee3Eu5RxAYw1Gj4o9fS6ny3sSrQEwDvkLe3",
  "key1": "5S1MP6zakFj69mHydotKSR2QmhLD4KU3X7TmtUz45b3h5as3q8ssYKdCmNyse9W8oajSA23sfvz4sxVHkCj9oTRv",
  "key2": "2uyt3vzUdGkXvHgBqsRPRLikTWSfJ7an575uBviEjggJLvgLr9R79nUrPmL3TCZrW37tcbnQk3DCc8oa8nHn8rW4",
  "key3": "D3Lfd8HkNqEHqD7W1im7qwtAjVFS7XTBy8Prt5k43W7u2JT56yHGLKUcfQMQQ4iNAg1NkZLCPWxMCSWNn4FTgcX",
  "key4": "5UWWsyTKJx6Ue85vA2gxrYLzwgNMAJ4BUu97icZK1t4skYWsm3u2bAUkgsgAhKciC9fAMzfPBttLr7dYLWLaS8uV",
  "key5": "2pSNDUVoNSB7jhx6RSbE5NWar2LojbJyqnhFGfJRasN9TnaEYiW7rwgSFMy8kLYpDRcTHL5V3Q4mz1znj7r4JC1y",
  "key6": "5o7DRXeCJ8evj48pMCo7Zo93Tfh3wXca1BoBbb7vPqLDTxZFQ2HgxXBZC1mA3S15mE7tqA33PHZtDwaoPS13mE6s",
  "key7": "3X5SZHtHxt79JVnAeZUAfWmAqHAHATNMaLB38vVjp2wV6U4epYbKVUr7D1dh5AGkWXqN6ekj58XUAnvAQHhsSaKa",
  "key8": "4CcrhWqTM6PrXfRQUNz9N2gKAAfRKmcom11cbXnhkDAkHkZPGvcuV4MMEMrQvBiWZ592m4WkdbHLsvbUvMDR3Pi5",
  "key9": "5MixKNpKqKeSpVZQu4MvZGsSrHEEmrMtNZQZnNzNTpYHzkeM2tWNmgxTMAYC1qAdVgDQwEqtHtcjcn53TmSb8oAX",
  "key10": "44PZmzntH2zKEURyoghE1gdWKCeBPbHjkGUEsvG4YSUuhjwoxPWNCD4GHq6G2MFCw3HCsmrBw3puXmcVmcETiQou",
  "key11": "TzyBu8FkuRmsFUC7WXW4qwNxWkqTTeBd2HSw7mbK62PmZYZKPSjcFhDMdqN7bBcK5vXJ2BNf7FAZzXCQAZgm9J9",
  "key12": "4zWTSKoVeBhb8AsbSTahaUbCnvJA3oYs1tbSXmjTQRLzSvf4uB2VdrMQV6cuZb4dvjtxLBnuGvpMYLX6eQ351bPQ",
  "key13": "3VyACkEGMFqBRUSMZHrqPKsTnGtCJhFZ18bhkUchfn2Hj54WZprAGE8T2awP9H3DUNYshYMYVUfB4VYRjyRVMFJa",
  "key14": "43KCUgVRAKvZrt7x1Bz6My5X2zNVy1cFDVnj7tXcQGEpq9twnMDvad7izwqg4mFcemNa93PuSPNhMvUqDA3iN2s8",
  "key15": "47FMuRz1g32LgbAYdpRbD34p7qhi2SkpuJjhaBwHKWxCk6uq5BpViho3CWCeQjFuRypLVbT8Nntfd5YJBXK5Kb1e",
  "key16": "3enpe9EmfTJCSFJu7zNRR2TnpcphtRVwKbjQhuqMsH52MJwQn5bUhR16LK9EoRNxwYPzPRSmsgnMF7uUx5qFXvYX",
  "key17": "rQZA2UfG9ZKERJFovEEuqM574UzMVHfxzDAW7ASdPZY4HCMddenv36LjhHN2Mbtg8V6u8TWR7ymHkoX9erCKumt",
  "key18": "2m78fvi7tC1buKdi8tyfFT7u4C8bEKn5kGqCjUv5RQBxrgYpL8pTH3tAV3ieLdWmZTVL4R4RUg7EK7dafwkDhq2c",
  "key19": "4XKvNtEAKmLLxTBPCXKJNPDrEg4q6y5kv1Xj3Qy5oabdSQQ5kNh2piZy1FCisJvYaomRBTscu6sorvdL1xGT7XS1",
  "key20": "4ZchFY4s78hKo2CVDajr2TRKYr6nhVK3oprohCgQALB6UuR1Zv3CFoEnHxodkNecmJNJrm3ymkW3CTDaNgVeocgy",
  "key21": "4uE2gxjihK8dhQTzPHbqYuyazXSvDfVAdKu8ELqrTbqeZQj3oBcEJcr97nu2BbTtfaGuLzWz7t6wjg2ugrUaNTpL",
  "key22": "2AcWTUu6fwns7ZuuxkBmNv5D3eX5SnvJYUm1JqneTAy7L33uVcR9ts3PekYUrqNg831HGF5R5qkAqGjwadTv6Laf",
  "key23": "3nMnr2HvdMJ9T6H318NoLqWbLrHgiu5R8v23qDQfeEUMbqgr7FJUm1aLK43CTydBpCW1SSxjjB2cSK4M3b7g53NH",
  "key24": "359HJsrSPhwx3Mt8GQcGmXRFtoxuiGkBXHELgg9K9AnXQa31tn1s1fesoQ7iinEw2fv43eYr2tjBDqKxWsLGgZYx",
  "key25": "npXkXKTk9yyn8mCWFB3bNTLWi2trcEqjMECNika3Rby7Wk8wT37FvnEu3nrpQPCSkWEjJqbbJBAxSYYaqai8pEn",
  "key26": "2LTGok2f5JavnFBw6KRCoo2WvBTm8WGhBqmQ51ozoFgEWAuijPxyUWHpeKysB7Vxs7y7DhB9iBSufADP8ETbnW2u",
  "key27": "3wQ5QT7UnZbHLX2xYi2MP6LQFJEKA8UsZiVU8b7D6LAyE6xSzPpX2FHzeRBChvYaQQyHmjxGKQynGej8oHFvvUay",
  "key28": "5gdBhE1WkEV1sQPCe9vzdqdN2ALdaphEa1dXVEpmMxACkwrLqN5bKCAGQXVbAM8eEWkYm84PrGCVop27wNnrJQyP",
  "key29": "54sPu29vGycgoZVTr5YfheXbbp57HmkydBTYmHm1vtmGZ2BaYsYiZHQ9EgH3abKdXhSAWLpn9vaQHv5Q61Rzd77F",
  "key30": "L7kvJn6VCiYtuq9qYbHp7Xknyh4PfagpCSof9bSr6Q8QmoqXKZ9F8vSS7QFmCh7fg7UdwZEJBNYcQ12iazNGDRZ",
  "key31": "2FAAcqH2eDL2PnK11kwkPNHPUyPtzLUaPqDHztnYgDH6kbtkeCq9XiPpU5WMGzZpAQEMrHooyyhc627suoq61RPs",
  "key32": "26qGsgWv3DFHx4BznN8EpdToH8cADEiuDG7gebB8GWNHDrN979C1Y4ALiShZUpdxUP6wpcMKJEkHzwHNpMw7Bz5x",
  "key33": "525bLB7CRMRhAygDEcX3Vvkux6MrnbJ5vbLuiGnnBx6DnTNk9SqN5uRkYNQRUwQUT1YFM9rt6U2iSTpMzYhUhdbA",
  "key34": "3LVR9axhTc3mr7nwYjgDMc766i6NgtxSx7y2fAvAJVRCeYxgJfyMXqcWXR7NLqKuR3t69WBnDPZqHhZCnDC8Xy3k",
  "key35": "2Bv6eBdCSDJxKuhBhKjco69mKT7x1MVute6hV25HZHMHwSmBWvrUQcq8XBd8wWmspsoWSMUCYQmCAbnsJthvLUGT",
  "key36": "2cgY2n76mqQdRqNPqBnURJ28Pg2J24d9r32F74dZp3h1DNaVYUwXDBnz69q5uL83g2tqb7eJApAWTb2SnivfSGGZ",
  "key37": "nZDrUWmLhLRGVoeu3M5tx7bZeSA8QGeJewTjGzdmQESsxyYFCVAUx5g3r3SeWJFGasV3c5XrupwTmasdc2Kz82Z"
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
