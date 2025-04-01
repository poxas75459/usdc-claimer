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
    "4v582wGi4ueXb5XVy68cabP51jN48vnFayMksi2KnxfzicsGS9PcmsomuFrLJd5XX4QvtdKdKRXMWJwra876Zjmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jyYFLANqHS2PotyZcGRKfuT97jESDkueojTRbHP4fDwYu6Aship75yCkHxGUTKTkUSU6KKMrCjyocMse3vTWqRW",
  "key1": "2DcqrG3VspbXgWyerKFkJETeCkcidsVuVtcaeHX7gTwVxaXtKWJA9S7GcyqqRvSdF3ee7B7w5EbNcVihBHaCwAeH",
  "key2": "2EE96zGqiaYoqe7LeA5P12jBd8masDTYWoEBUqrbEh8hgjeDqfYvpi34MoPif4uhSfrq9XkJY1SVvfD6BmFVRgdt",
  "key3": "3BgoJTd84KreniBSgci3RajLBAWsTRUBNSfNdNAjMMcj3Tmv97Um18fgVXdrgr1tWVwQfR6n2F4ZaMqpyRt3KJQ7",
  "key4": "2KgqxQpRu9ci5peAex19SL5JctzAFTKvbqiyCm3m5FkD3sNa2QcmpnGNNE7J6iDsnw3QAs5dE3DzTJXJtWvU4Yb8",
  "key5": "3qQBTvKk3Xm5ZnzNuYhzQZLPgb9cMEPuwTrSv14mfbPj337puTGZAcqi1939cK2BBSTVdZHVvCXAZo1nwtFWmXL5",
  "key6": "1VVXpdeZTm79fs5iiF92ksmgGmiU9Ls9L161JdaSBi4SRrNz9y19dNxvAtSwpCrL3oTyGv9w1MU5Frs3YoCc8Xb",
  "key7": "5UzcqE5Sidy2HC513ytSuVgr6bFYa7M4F1bRfowVrUxuKX3JV7ZkMJGfMLqfrq91hYpRv7qTp4Sig5h8b5T93Bku",
  "key8": "2SMdrK5mLeAcsnJ8GR23FnWqFqPMLjVQuZRKwF6PUqvywwCH9sfz3iUMamwt4sVbVj8fRpMVS9f4CGRbYbjfm2Qq",
  "key9": "3DPNrv3Y8Hxxco1okX1vvnerwju247JyqfufhFj5AVcGjamTh2RZzhmFApKRPqBLssYaXCckjKJJaD9QotqvuTcq",
  "key10": "JHe5cXsaG5QNnvgGJWcvXHwiRACN7xUQY89uD4JYMqx9TK2989B5Z8Gx9X2ompeE6115qdMgwyzTStn3NhMW5pB",
  "key11": "nx5b3Li5x8CyvG3ejwYcKVVCqh7rRnBHgUDYt5M6qGKHHX2o8BWghf6BHnsS6ep57PDnNd64Q5233krD36rssxG",
  "key12": "3dFdp9U5aNjYWJo4H42jWCRvnAZjuLqzCE713mntPFrSckvqNXK5W59jRLPg7J4usE9QcW8pQ1BpY4hXCxuPmkkB",
  "key13": "3Y1cdAnfo5uYoRjtFFMdbttwG7BaPs2dU9u1pmR7LN4eqBwnpK5KtUY7dZfB5d4usi7qJA8bLXC1rLqBaWJdw5kq",
  "key14": "5GeRXjE4cXbUJ7FbEtBgBp7LDfwLTKtZunn9CjxV4CHzCQ8pYhV9ahazbw4WAGp37n2gAV3BjLxY61mfqS597aTa",
  "key15": "5KwbJQ5WkHZrrASPVcyJWnwPncoAL6sUervia14EQDr7Kfg2Y7QkBkTGTaWatg4nsB2AyuQLWgRVbs8s9yqPoXH1",
  "key16": "2in7EGEidjGNqkqigdWZy9bxmHUSGkknStMni5Wk4WNjJxEzbogzeNxKwFtFx45gf6twt8Zw6cCxvA8Xa2vCf7gM",
  "key17": "3jFPxEzLUfkhBA7hG5BWGCZYn4ysALVa55bX15z3uEjp8kD7BypmcXKgvQdHoBpZdJg1m2RUoTL2K3nTr3bg1e8p",
  "key18": "4v9iXBXxXvS9skDDAyzxS28ST6YiH8dHeafecjKMwJJtGrbyYt2rNaXF7qHMqxJTDtv1KrzJCCi7hFnWaTrqkLYm",
  "key19": "674ah4P26hzXt6dvA5CLkDnGfT4GuktiQuMQkgyUrdxJu9Wr6tdQBphMvLYcZgkZKJqBEs4b9xZ3k9uDwfJ9HDU7",
  "key20": "3yJ8kb5AXA3Evek6MnAjfzdMweLNJ1LGjEDGBfQE2C3tfnZpwwakaNAQRgHmdiZbaxHzXszsgs4dbCsbvw2VyYh",
  "key21": "25YjpR8yqPv21VbSZBfXRearRB4FZn8iSuBhQrJpi8D5CJqgoBWa3fNtoY9SN5euBWRCNimztTfk6awXSdvD9kDV",
  "key22": "5J5fwpqzYexyG514SoLnC1PMAnEPp49G9e9NwEHA49gtbPx8f4qYoChgTFLcbdU7xc8bsWkWiAfBNXG3RChSBWe8",
  "key23": "3hcLsAJqt3En69Rb2oo5j9g9Y2dR1WewXcVzdhp7g462LqHnvNpE4D7pnUeFjRynp1CtUdb6PuJt5UeiY5jUR7pT",
  "key24": "S5sSMRY71XancptvtiSZsPrEaRSa1pDBbebDVuX4fFbQ4XZhYrHioo6kdtrzyv86JKRKcPZfBanEgAbnqKrvAne",
  "key25": "2gotSQn7fExGys2Tp6quPVhELYm8Fx7jA62wKAnRf38J5aUKaoHxnNEY9UbtP2Q5Ury8uXwkdon1eAGTLXxEhCBw",
  "key26": "3pE9QAUYreX9SNydWWj3hcLdTD3ba9SaD5hGx47hcKYr8Ue8k9aixDkaioWW2Y2aQwoSLz3sPRQDC7HeZNQGRi8s",
  "key27": "9qxiMTDihT5X9hmXK82ukyTAhq19yysUb9oB7xNAnH4Ai44KbiVcpEqSmhcwJDSgcPDxb3KwKQGAWK5HTC1DHEj",
  "key28": "2Lvrf2VncrFDxsd1p3cszdMqUJ7FdzKPe7X6xA1Jm98qLCqKcMS7rQ4SEDZJqVCSgCz1H44upSSaKrgwNarHJpLX",
  "key29": "H4fXhAh6whuK3UdjR4Dx3GgJTnHq9KBiuEEHS8c62uV8YFF5x4NzpjXiNcum3M1ZsCWy3X8znpaHisUzH5aBZYq",
  "key30": "5uc81ypJm3sX1qwFcUrm75tbqHpKNe1x16ChJ5NWaAfHCG8jbsXxpuDxMSvmnwn8GfoXbpo15qpTw58tnXyVwwMH",
  "key31": "4bVUeeSWWAb37Q3x31Xp5U969n3NqyauBp8kLwYC9BQzmSgSQBANs6KYm56y6Py1xCYqRp1mSxhbSbVPu379HLHV",
  "key32": "3L6BGNVEniYhU38qAn1SLodcz5GCYNhf4dQuubMcj15UN9ueafrcFUoMd2N95Apd3WU5JJW7PeYrqzbvPQ7koFy9",
  "key33": "2K7V8wbSHtH9mjGDjRjXNFPXMrLyE1fZ49zu57kt76WVyuSkmoNuGJeBBYojfEQ6HkwG2WXnQhHA1jMRytnCVryC",
  "key34": "56jB7Bs3o9LRvRPb6g4ytC63SPRvy9RWAoHS5dzMoSBHhtEYP9kBDHvtDz6zVkzCQRiNnngofkMcEZsngETpdqDr",
  "key35": "3Yc1PZPJjJzwf8cGfogDoUyf2oj5YoxxfTYnZiWfuKNc2CE3ysW6RCJq1dTCzXsVCEUzWa8dLw9DCZeyE5FCRfYj",
  "key36": "4ASofqLvU5TX5ofArRWQYT9gfM2ewELo4A6zM4822T3a4piBRXc2hMdHaeabKWBPkvXjd59mM3qpAiiRqS7q2zUG",
  "key37": "5bSHVjc2dGKPzBxXEgQSbKt3dgDQKAyi7oLL43HVeEnAzSN1o5iLXaUffvGSoeUgf3vucTt9DFPT7Sn6JUcqeGjA",
  "key38": "bioMwCuwhFkMUmQUaQFgxGZiPtCKjqK9hgRFax1SWCaKtASQmrQKrkm1xjMQLF3U3WETXF96S5EFX75H8zCX3wT",
  "key39": "4XG3aUYWzwZ25LPda1Jt8FuZSRg3b4EXXkHumPzV74zZ31wfsuP3i4PsuBE7D2GJiBCk7GzJZnEknhpqGzLkRQ3s",
  "key40": "5byu5FytPzmHRqWqyNZz4393deaBdaXFrj465pHvVcrNUK25S2VXXbyiXgNSQru9E8PPPwzXpCcNn3E7CLfthdse",
  "key41": "4wEaTQK6MKZSVCTCuRd8Y8D4nqjnE8B82Ce2JhGwh6ZshxvSsmahPaNRTKb5Tjw4YFAdz6CS2xPp4Eb8L2hteevS",
  "key42": "5cHujveRg9N2UxMe4ktWcBS4DNEp4iHC2ueZSdz61pNqrxG2aEheew4Wv3roVMKeTU13n1sCMsEtknBSywnhWL6f",
  "key43": "5z9KSKqWcNnBVj5XxNYqgMrg8rnb3xgQoJtqqhNYXkWV3mpdgeJ97BUd8MgMhTcMspUTjEM9zMsCU9AXZJpRhfMm",
  "key44": "e8vwTtRBbUwuEEeCKMHLepfxVBUv8Bt8hKBmp1PzXU6uQqbvExL1kugcArfLdURsiN2f2u9UtptbkDAeDw2obrT",
  "key45": "5QR61BRFT7itEpXdxSa5sMweNVJjXA52MvWefJxP193X833mPZKShQMpnmNzwx3yT22zYbg3iSvHLykpGat7RL5N",
  "key46": "2Lx7U9LHuqmwV5tFJuMRksB6mvFjy2jaDMX73dLUYcs1N2pEqrxSZ743iN8ZDTY2drWwgZQicmSNpZ7k6oHyutvj"
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
