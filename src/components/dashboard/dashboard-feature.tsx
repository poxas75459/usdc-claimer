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
    "4zDm1xrSZdzExY6KjQcWiJqA9Py9FCrfcUFJc1Z8UA9qYucktnCozc5hXJd962gTMovsSp12FVkXTb3TJTXXUGRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i8dEmJjZtu62iofqNJe2M42iCTuQNWUxTtVFZdDvRGCskmZ9ds6arPAjgrpsfED3GVg16xSXuSK8Fz1N4g7mdiE",
  "key1": "4XYWK61JW2uHgGcTny1NYLf3DZvL1aRijVCZdmuhew4xyzuMBGtqP1vL8gZaNMVMbxUzj92zwCbfZM6YQw7a8FrV",
  "key2": "2QzfaPjtYNq4UGojEHZqozy9APGJSg4bWfJvV5NWTpNPNpeF3bdxb9q1PCC4vVxuLwmxPPZj22f3a3i5W8bjTUUk",
  "key3": "22WwayGSu1TbRYEYro7YVJdr63xBuNcEVGtiEYZ9yY6hxgUameUYA22bcoJ3NFZq6hSRFaoRuGAx82grsRfr15q2",
  "key4": "5byxCxUNwAZroEWgWo511sBJTQZRA146BA7jXrc8nipyHAUhHuckoemp7ydw9FGgRUAheGB5V4WHmuCeLGFoNXjQ",
  "key5": "5Tkrw4DpKKKqGmU9CJgbBNRJi6x6G2hEcnrbRC7oQWJyjeS15ZYpQH9YhEPJdDPd6hQJwjzefo1yTk1oC8MspVDu",
  "key6": "4N1ZojxbTKqskp53ggBP5HnTF6ofoHgXzp22docdF1s524kd2r9rbfW3Q8GLeQ3X5Fg3gednnVtsErwFL1yj6HLe",
  "key7": "gfZcVoE7crbrGSQjN2uaiPXVVDLPaRtUzscKWS2vJCKn6RhR8488QxL1nkFZcu91rqbBA3BxPGHcwcjPQ6Q16o1",
  "key8": "4D9W1iyoFmpFycPDtp8bkQkBfKs3ZQPvJKJCmB84ZBooDQi1ta1uYXeK8t1RqkhEZ4w53AJe7vHhD5c6MjUm3rjy",
  "key9": "38K1VFvBib5UXgYnebvtRucZSsXYfSRzoNEmL2zLD3yLdpYLCgtXG7YDt6CkMC8ekSfcR1Z6tM47NHoo4oGKhH4a",
  "key10": "4qHaK9zwZyqaPbkLFT619Md2RjNWZJZaZ4LqvCZFEWkgwY6N82SVCa6nMuQSfHKWRPnWZJnQbsc9Rdatdi4EAkqp",
  "key11": "5viMUiy5Drna6B8xLJP2uL8npwbKoQ1V9y67AoknRuhFTCmYNKD6f8GTBaJY7n7oCYPnh7eD1wFmgSp8wNmWX7TQ",
  "key12": "32Ft11X2icMR6YKQPsQeK5F2TTfx26EiGqvW6geq5gTu7UbQC2XWLFqCmwn7rZANExKFUVZVxUooRfQaat9rLBfo",
  "key13": "5Ex26Uj8RSpx5abZ7VK2764aL8oZ5FwB9QCES326LDbrpeYbQtZaBSK8NQtPmvsyetNgPTHQb2T4Qbboz9XbbHPy",
  "key14": "49A1UKuB8aMtEvR8GAGJiXuvTp9MPLYwPygXdVpbJoPgu93Za8bMmoKTjQUAr6S4twrH2DaMBfvTJ6YBSyQvGjTC",
  "key15": "3Suzk5RZFhK3i1HNhzNNwmQTQncTrEeBA72b6jzAuadTdAwdtZb87ZsM31HUhsdTUme87prMgLKJGPKLbD4rG3nU",
  "key16": "5GqxEaBaHYciRuJt7jE4iXjH1hJMg7bi6tysDAh1ZFsqjf5vQxhSXmQEePtrhaZkWuNqoirqF3RXNWxgJFUEhhd4",
  "key17": "4rBLKoosxry9UmfVyeZVWBUEEygB5X5PgQW8cNPoQcMJkhGWpehepz84TrmanpZYKkWLT2ZQtAA95X4Za2jKcZNf",
  "key18": "322ZCPnsEKp1S6zLeGQnY7quPYqQesKT5ywnpiLSXDcPoAr9VYNbFAPBEKtyeRgK1i7MUxK1eMbsp8KzDe6jEKAZ",
  "key19": "3zeDUSXdB3UbVrzR6dmddLHR9yrLqpuFaL87P4k9CyiJMPtpfDxbPxaA65t1RtJzn28356fvXZeP58mWqWDxegFS",
  "key20": "4gTbPnqNy9pjDAXaqcSmz8C6rvsQ4YWHK5J269j2Pw39S3J6cWHM5bDjQobUPEWPipWRMYnPHnKYYrnksZb8MmXz",
  "key21": "2RCAN5j1DFzCSQbbj4qLeMuRe1LbZwviKqLnR1jex6qA485KHYtsHNcWdDC3xXDyxRr3QRuKkKnLwtCiHNbMbX2H",
  "key22": "4ZbA7WumEzj2ScofHGKkQxGXa8hmPC7pPj6Zkj8MfR6SChQntmmPMY2EBa4JX2PLu6Ued7J3YXZyHA57t1mAc8qg",
  "key23": "U6EXxA5WWUuufDmRrcBeYzDF9sdt6oQBGeSBpJZazQHTKRdSuAr19hcGwjdYsVZmkywwKBPpTEboBoeSXtMq1jv",
  "key24": "3g8tEe8kG9i3rxjfDL5BSe7yGAGxbTHYKRYzzGk5bno4JYro8DjkkYqHfb8W3sDNehizy7HyKbHjEGGUXyEsTKB4",
  "key25": "4WrNKsThFAGWMt4vW2CPC7jweWyZs1EM6JkTfndEWVb37emXmxiYwzVnbUCQpNHEPeL9bcWUHXwDCpkuFy4xA7WB",
  "key26": "339NCqQ9WdHUNLUBXRkdb2VHNTXJazwY84eHa5hUMy2Lg6zK3aPLz7kA6fAXtZ5mVeyRXWpZH8Gq7StF5YdnjyjS",
  "key27": "2EjUv6W3AcrhaeUwreYQKeXZof3YQVe4x3fRM3A6PxVUGYKY5dUnvQqUAThNJcVZdpfHo3k2LBZCyYptGV6wwFFF",
  "key28": "5zbyTAFi9B9qQeDzuY4jEGNQJfyHgFn3wjxTEZ2QATN6zKMxVjMHZxADwQZQ9hJYLYd6PHAn3fVkZ6KURibhGPWc",
  "key29": "4DNEjFMcKy7tvKsWHGiF2vEBp7JbxZuGzgmjg9Qz3kTGhtYy1mEacfLbpcf4LELccnmjnkPDceFGUwSYUtzKrYoS",
  "key30": "8j7FocXhWZCY1iTu7d1mYXTaohx4EoKdofBJMK8ggJJvZJw2sEtq4b36R5cfNDvUDCWF5icaCATN8tEtn8YwbQ4",
  "key31": "jhQZt5BXmbANFYsGm5kkVH7sxdJY9JRqK1GDjdGcNQEfMXrbjgwqPomVKPk6dHrGp7tyoNkDhGpti4MQ1c5dJGS",
  "key32": "2rK8ft4Tp2e5g8i6GTy3BGTL1YLYuZgvaJUJYgTJRgQhruDG18nvnF1KwXnqc7P5cWk3aLxh2JsF5XnZeChqaWEo",
  "key33": "22AzjjoRBdRmVE41ttHK4SM34GqSfmveBeoEzcLKVznRvYbmfffCpep5SDaL4qb4Niq5kt81diFTTC6pYyQjCYhC",
  "key34": "4jEUBg5A8J9KWv4ts1hVwUSTvBngGY6haB6pLnQ8s3bpkMp6aPtKGod8MyxeQrWiwLQsERHCzUNtjWGKHnVMp7Mt"
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
