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
    "5sjFC2W46efPrHGwfg8UHtytxJM2DDox9aHnFe3FuttyA4GdMnR1vXKzGTa1akyF3uY8Uiv7TZt7ZrGCBgQioyzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j3ZrczbBn9DMQBVH8PSEjAWxL3hLZDWWgFkBtHkxAhLAxMXFWjEz1YpLQDCeG7XqtLks8Ttocei6gxpUBK9PmY4",
  "key1": "5XnBA8gLqZfMFpFiRLq1g575cXJXZRP3iRLrDQ1z7Ka5ttPPXfT4mEsn4cEJRQgRNZ4rdKpHvYfk29LKyvQogsgn",
  "key2": "3vNPHYuc8og3dijHD9DtkKT4hMYmX9quAj8fPo9jCYGz4VzrqwALw7ySFZppaZjq3r3HpDUR2eR4B3PrnDQ9jkwN",
  "key3": "KVbZsLj1PQg9yXP1wziEWGHFxFPsMqAoeUTv6A84v2evR3HkGk9sTcCnhgxDXdX8kE1fkcT9xm56Fud3mqRMHMf",
  "key4": "3PXTzo4QpRKqmEC8ATDVagz2XMAwkU6yvBZK3ebqs8mvj1j92S5XVGzzTuXogVSuz94fJWT5oSUjvz2S6nPMe424",
  "key5": "4ddsrSELSKPqJeNrde1nn7yRp9GQcU2cttvok51sXUEvttYmR6eKzyX9TLLWVyQBkjJWmmPfAYuS4HnqEqjPdb56",
  "key6": "51ngbnSBAU5be5ySEHGEKNvYghqMBkHxU4J73hqH9gbRyScGStQwSJjezuWsNz8HdbcfSeaGH5Q8CCuJ1VxcpG6n",
  "key7": "2AjDSR5HKggRHxeMH6HKtiHpg4LcDiAb7kwYq4ZJCyLDHJn1sW1KNFDNvz1zpy9CkpfeZ37SKf7ku23arxa95wTs",
  "key8": "4qGkUK3NZZxfntp4sC1hLc4r5u5BTH8WLVhenonaEkbHZsdKqv7dSMjA5LvH4NjWFdsM1nRcCxTKxJzzpMuNAf9h",
  "key9": "62JjYykB3iBqjNkYeYihm1hkUy3Nq1MKoLLTf3T7MSupkpwH4cx1hB2aHTYAYiN8JG2b2nUARTPTMQwZfKr4MxBP",
  "key10": "2t7T5TLgDPPkBV38nTTFibHjLV9PKzersxoeJNPtsdiqJqTGpKC9LMqwE7m3oxJiu3dwFJREz1rTPpoFZxtZkeRq",
  "key11": "2SERWzpNesR23LQ9RYNEbG1L1typLCFytQMyntgzV6d3PScGo37aRkwtMRDWp5k81pTeGS6jN1p3VVFmrPGhF7m5",
  "key12": "5H8n1eUqNAAweYuo89xDw9Lj2NuxKYE8PpM3nqEaDs6jAbJVP9iWcU38gUmvebxcPYb371sjw5NRrm9fC26TzWKw",
  "key13": "Hs1LJizT19KVCrQbG2JyEwT6miWviDwV4xCP3L6HwmVzxYqbW9hBkExbwmdVASQpbXUivRaNQV612T7nXNzXXhq",
  "key14": "5gid9yLQ9b2zqazQbtvttuzGZQDKkEui6D5y43ZoAhbh4fZsqfy6iHKNdHYZBPX9VhkW7guaiU6ZPaRxMWJfQw5t",
  "key15": "4pyMtQ6czjkCNGZcQDdzF5hxsZfWnLsScLt9mAwyJJVx8gMdMxwbhjQ7uriy5ZHpYY32Le1jokpA8LqthrrvBM1U",
  "key16": "3n8XrATLLjZ2xR3xxH9U8EnCHeV9KqiusotRLijnoJ7vCdk2s1PjHo6Y3VJLKi4RcMo7wRmX6Bi7ysvNeQW5ZXhS",
  "key17": "2HWtXj6vdu8FyXqJv5e2WZTqjPg51PWy3L1vQBHd7FPuG1sa7ThtQfYYD8jxFHdD6eSv9KTFAAMNFAwe3UrHPnSn",
  "key18": "5mqKy13DYvCBDf5po6UhxgD8DPoxWqASvAuaw7SoAa7DApQunu3GKYR64rLGj2uC1VAA6c72cmVKHvXHcHLuazWA",
  "key19": "5ivi4BSeFKHqWiKS6YBxy2oqHpuae9Dw5UNYBxXCwhBdnuqEtux7z5mVv6UmQnHcKKXBY4pRBsuVbPBxzPXoeEjE",
  "key20": "5uacypD6hC9tNxB8mqsLKANjB1Yj3fsB3Yz8psY5FpZZTt4cwmWDc5RVCoKXyH8awiJjBbShXwxEpjf3cgLtrHBP",
  "key21": "27csGCt6fz27DFHha8EJXs5XjSBt4se9jBCWtWevQuVYJXZ9CueNjAjUyNgYVe4aFj6Xxgceczmybqfxbt98fbCu",
  "key22": "2mGojCXb2T41scb2EAEvDgNvq3njKboS2pfHxHBRLN4UWaEPD1e66T53H5iRt7cS3RgCFvK6yie4uqG6euoawHGs",
  "key23": "5cZjyFiRD4pBr7b3XQgHZSAzboUSHzpM9V1dKue8MATFChkbMPUpUZssPQhMTkQJfCX81naGssGYv2bfKgk8UCzb",
  "key24": "3TjUJLphxW4Mam1szQMXCKgRjzLYvfwJXzWQpfbsqbPDkoRcXemSQYgLXkLbBefwpyRJun9BhoikB2ZKN4To9Z4W",
  "key25": "5a9PDni8rSZqVy8WnJVE1ptD6xRBagkLD4RUYEeeK3nCiwfpKSVA8nij5sceRS8pTDjpVXEZcbhDiwXkEJKBuXCj",
  "key26": "4xCrFcak4PJZJXfeXNFRXA8uEGs3F7Z9uXwLjsQdh7HCB63H3vW38JCeUT98SXWEz571hnxqnHnhyjir33gYaE4y",
  "key27": "5iqpwGV9HiA9XYpaJs8GSkMqoxdqRmGS1sFGC17yjxciDuvphyHNJdUoskuZ7p7JWgvWMcWNkxn3zprRfmamAa3Z",
  "key28": "4d6VZs751KasPD4EGktMXdWUKGfWTYUrNqmGwZosBtkLSUGzRe3PMULAQUwG2dksjdF4ooqVh5WV2vsP4vvbwYjV",
  "key29": "5CiA5KbpGCG17Mj9sCGGN5EDjCdcyWphwxRfUsYmNXbvDoEnP8fAoFhikk6uDk2e5aDhY1fniXBJx3MajxptVhY",
  "key30": "2Fqa4194GVXfRKguDK2dw7qjmoHri8b6hYXa59XgaqjpcyRimQt1VCyUsWhZKXnyjT336cTEpioEayHu5JhZnzwr",
  "key31": "2tCnFwWasMLF6GHThWCiv4Hg1oxzVJ8beag1i2QHyxHTPzhw4JUN6dNemX1HDHkGKFggnUD56YPQzawabGQQ2NT1",
  "key32": "49xTBVHvUkq5HeNv5YsRkFF2eiceFcYACy515xaiSZ5eDzQnKu39v8pVrSra52ap8QSmhv1Kx4heqDU59RQiyX1d",
  "key33": "3UKo3uJWNSz8KUtwuqJRzbPFbRciYeamZ5MDTRMGhWFDDcmnHqnzSnzUSv3ivAY3kTgkJucrk5qNoA5kJQYys8FF",
  "key34": "5XbMRuDwCa5Tn7xXjK5rQbY5e736WsPhH2Rosz1XxEzo9e7G7eMS4JX2uZCUh3ipsf7f8puUVMEfPLZkZ1SNb5UG",
  "key35": "f8dSTnRxffCnxWtC4rrM9yfUX55ZRL36HnU935SmVXB1SQFiEEnXsUtbUHCfykzbab8Do3vc1TuKu79iMGVAGoL",
  "key36": "5FEin7ghSDeQ1Sqverr6u3xUq7qjDpYJMaDBk1CMWDBjRGfZFpTAF7M129Aw5PYrMNB3xRzaKmk4HXmGymjCs2h",
  "key37": "4fRbbqyj2KFJRPTLdo4yGLT3Te2kZJWDvRWJ2xamXiqhBMWhxWRSKwAsRtC9uWp343dnZ3Ziwy7WrMJty2UHEvaE"
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
