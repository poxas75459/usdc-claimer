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
    "2puTiZ2NxCAgV9esiKNRcbH2sbaeC2nPTd1sk26nycLqpUAV5pLvXTBEhwGLWKXNjadA8m6FNzjEPS6Win2vXp7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3enEchakxQffJ8CFspsNx5uZxEUyZGtiYKXxcucXkJXPAhrMuUYuNkCpWFCLsJCKsNUMvNQy7cuzDTfB1EWirEMX",
  "key1": "2t5HcmSatNjzJKKFW9R4Y8pVJBhmnLWZppVYpEEugm4GJ2kiq54LsYJn4fMmmSext53ApPY29UDepFnXVoSRQa2p",
  "key2": "4ucG4BWEmqQzjVjavSXLHnFMZhnpaJm5DVowXi5YsVGBnf8UFfdA6z9JeksaTvkbwftBNYfkLkwGusFrNYoxzU8V",
  "key3": "qNJp3UoGqdxMdnMxW2trAvXV7qBvwxgRqQ9TTT41j2HV1oeC5HMjx2RJegmUGCBgT12j54fgqJJ6gg8VvzTDHLs",
  "key4": "5BPvTZ2wycX3CFd88rhDuUAy1Q6Auxah4f4PMCe5Cumgko7RFBgyMQWF5Vo4KLnxpuNKjggaBXPqgfRReKWN6PbH",
  "key5": "4S5aAEkJ69EcQV3nLuKhZMSjqdvcaD28nNDno5EeeRQcZHXq2HKbebfafPJ9gHQYXMEnB1j7kRmiLtKXi5pCwhT",
  "key6": "2CaZbZKhP7mqYBWSAjGGEmCDFyw7kZcprLVEmJoFwVHc6HepRQYAMH5A8kyN5PsHWa8uNAfh8mo2ajQVmoyreXaD",
  "key7": "4Sh2WVF4CpVyxbAHm1WTxVET1Q1bWB6VeDU3soGeDdG7FPtHX1gtCmMnT2LhXaBiPhSyhR4Mf95CEi258XThACET",
  "key8": "2f2NMnC3ucbshfBq7v9NjBxfhFwmcQXH94v9DrFSbTRBU7NkWdc84DLhspnQabfQnQpoq4WV82xVmkzpz6ay6Qk",
  "key9": "xZ9Bki6wLKjNFyP73gr7We6nmhMViBkhYGkAPiPzSENc53G1mP5GVoBQHhamMkpX7uQNhShyTNY55JfsduwBqU9",
  "key10": "3H4bQFPBTQ66WMvaiaf8hmcARw3UP4RJ3BSBacRKGcRStLD7kwT5nCR5SSqe8xAuWPifNY6vkNggPZToHKXLAdvN",
  "key11": "3iRWWTTeMnitebqHTDeNiSTh3pmXV4Kzg8LxWpDQTakKBk3QWsdSzgKfvPuaXqqmVsZpvvVpTMjwPHzXu63FbtCM",
  "key12": "3x6YeRAaTBxtib8JeyoM6cndUp46pSEpYdBVcFhTpRWRDSLA3PQ9XftBbAL33uStcZS3sqc6j3hWZpoXEJjqN15d",
  "key13": "2Ua5YK7K9eDRnri3Jgr8ziZGddKg4H59UGbYpLTEXrCF5A2o13FwhuvJh6yoqkLJbnFN2WuseLr9sFfYUQdJVR4M",
  "key14": "3AcRYvQJWMUjw9KUMPgYQc2kKEgdYA5YxYGeNmr1MRuHHZyudapNUVhh63xi75WtD6wq3kLGxjXhRoRcMiMdEuwG",
  "key15": "5eZxChFCo9rkiHpZGi1AR7PiJ9gm4p3ZyK2DMDiHDk1JyLoSv9vdiCrtnupcbbnx7NVsZ76PRjEJNnTnT1i4zfzh",
  "key16": "3xqFrcSiJoxfhsX5hex6L3N1fPH4TUadZQVkHuJPESKU8zRT25vjRUxWkjsJTrLNhACiCUcSLG1p61Tht3sMYoDF",
  "key17": "Zxv48BbWWTmUyUk8KbgjEETmoFfmB1LRngyWPTsNGiLoWyS7BfSxVkCTsGRnWiwZx4ggpjwJKZUuCnkeGsTitDG",
  "key18": "5GJ3X7qCkUBa5avHhVeeaQfNgsYYUzmzjje5YuoHeQRr7CeKyZ4cLvHh31tuarUhoFFuHbJGEgoDt6csENJJ1Lhq",
  "key19": "5vNqisHPWcjcmiEjJYEaYwD2fLsy46dEM8U6qwpTw4wAPqc94q9WXot3NZRLBKQuKiDE1Sa7GQ7p1q25hmEyF4wV",
  "key20": "4sMwMEWdyp5YhAUre45EeddmyniE6yjAE3sRmk97PWctfTCidYHahiBeEbQVGQPLj34r7nk375yfRRcuTXHTFLFD",
  "key21": "3dcQ5mEQ1MVGJcC5YMKn6DmqSgEvNpkw8N348Ys4PG8yyYDbepB7W5TTNNF7ueGcNxErP1U6dUtudbKM9mpzq6jv",
  "key22": "53vRnFP5c1ot9ad8ti8GNTtTPFFHZEFmfyLP5VhDR8nTRUYYFp2cKwtRgNaowKbBjMBEGCib5Rzhym92WVCwen3o",
  "key23": "2nVTHDpVfHWNZRgQq5uZ25E84xuJmbU5GNYBhBHFz1ZRoE3FbWfQJHWeNTc6he88zSzvA81xYw4mqBgu4MYNgm3Q",
  "key24": "3p8bmvihJye5WESygSBpTXuttmS5EUsckwWxMbpgFoN9w8dNQKQVfrmUpacJAPvQrZYVyprtjCvjZ23rhARjQGqY",
  "key25": "23GLfW44gbp68ws9dMBzBHXYDhgcHmnjvsnmxFT8xgZByec1gVr2MZoyoDk6AFCE9YpLHqigA2wqKivSyZwMvmaP",
  "key26": "xTcbp5CCqpwnvCtEePm23S5rZ8XDDo9CSoLgUzjEvZpfy5knQaLPUGgAQbFBEoTzedAuLBduHtQXuYTUz2sNyMF",
  "key27": "CPs2XGJpNMQ4qAS8F31mQyLp1dwpdbnWzPsAhZ1a4WYzzFjg2JF2c5Ba3ufNpTnAxbmsXg632N5SjnGKTVg45gv",
  "key28": "3cw2dvKaqq7MKtEcqGDJ1HF1CGYMRuweUGepiYfX13GjYwidhG5cPYRYxzoNKcAycFtHWzNKZT7YmNtsYhXLS6SE",
  "key29": "4ToXtiKF4FZa2f3Su2VoaygmpBeGXHa95S5rSBQnFJiqrJTnJB1SvQofHV12SdwyemrfRcVa8VAutjLtDNxFpJK4",
  "key30": "2UHscFkDtogmEAREV4QnXc44TPKLPNJEiiMFQYwYRXQi5emtHZC1NfaPaLu5ttvJMAdHQQ6T1jo5nEKvMKCT2UNq",
  "key31": "c1eBHYPQDj5bVRbbdMmGMmRtvCrjrdV1uixHZEimZbR4fAtGj2gEtZcPU6p95Y9mUdhaJPCDAuPCsE3DcrSFXEu",
  "key32": "2YrS6f69bvs8rZXuW2gGc49i9gT5wksvB5w8iFRb3KD2cPtKCHn61Tmb9rGQJzHfkg1kZw5kC6YiAzGVZmtWzuDx",
  "key33": "4dDSV6GwddQ7cnJozcNch6kY5okPLDCiCwDGFBffnzFESuKuaS5LDj7ZCGmvvCn7W3UraSSY2SvhES3soru4ac5o"
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
