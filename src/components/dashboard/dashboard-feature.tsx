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
    "4winbL7k8MorC2LYGzJn1xcAbcBiFCiFwfD4dEGaJkN2DKmxG1jE21C6LWGGC9cJHhvAZHEFTANJPYptJvtyjKr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bjkr6rx8GdJXai5fBsRFfmyftafpQeUBRvZBAdzbMTvkFi5YEoqxZVzFWFjJNSapGQbB3Vkz4ncXpEzeeKLYdhv",
  "key1": "3UgfcjeFyN2Kzn2U9Tk7GNMkR7M6JcZZa8v3AvNX3XeLigmZt5qSVkSTyxMwnqBuzCYeyKn2mPp8bPNXeLnmUjJv",
  "key2": "2oxuwoGJm8mtAVtRccoBgJQ5ZzQG84CUEDNKMrSWsufpPrxupsJRAy4vH15siQkwKejj3hWP7S9x7dJF5XuDDpYy",
  "key3": "5VX84W1mz4z9YQ2BQMBW2Xtbf8911kUfZGPSBJeSekDRUL78B9pSuUVLjT7DWFxj4BGpdEBSXrN55VWyi5Deqm4g",
  "key4": "2jF9pohmCY2nQdrMcmst1Nq8yL4mNa8DwoPf7Auy64GLoacW7ZzheVyt7LU7tvrPknBGmwxfQDzJWwZM6jRjCkLQ",
  "key5": "3AdmV96D7k3VYTtJL5gDhBgWQFixJAh5jy6iuR5RDJRgPMyp2bL6vPzVVnhxHww8QnWGT6xUGQL9otvVqMFxSLtX",
  "key6": "3AGTMmZrqMMhxux8KjeRwpCP98s65CRbjUcK7NUe2cJZhYvT5QBjw8TtWGvwJe6eBs7gcPGXWvjj1eU7Mb3eg9m6",
  "key7": "5gg7JCmKPKK6m6SKh876GvGqpu3Fsy32bPakTspzGPRKcobXPXJN2CDkamUeSqNfMPzoCbrFpoZBjFYVL2Qgn5w4",
  "key8": "2daCih7sZUjRjasDkyU8JEniRFxz8gBTv3dXz2DYmmKJi144T5TH9ATgw6dhDjLg7Z2raxj5RiJpZ2b99kJYMaT7",
  "key9": "3HUhUbmoGNPyUmxs3ekmrb8gPYa7u8KHwpiDXojqoK9MVjBapeDqW64pbmuKqFb43GZqESNXTVRpEoFKChX3Xk6j",
  "key10": "5EQeKjZvhotMWJunAUS8bxHp7r2WUQ64Wkh21NqR8fpWoXS385Mu57S7unHKPHr86F1U2jeYSTFCDsxCe46TQmA3",
  "key11": "Ssd4HUW34FMs5efQjKcui1NxiycQsAXvPCBvJhJ2jsVVepkUYuaMkj9ARYLBiXTW5GvtmvLqE1Jsy6exsniAkWS",
  "key12": "3nP7HDUPfFK3PVrzMGUoepj5GbkNS5KPu4rHqEUD14gkZ6jNoqZRxFD64s12qg8bd5wCPxLyae2ykeK26GPCdzHt",
  "key13": "JSyG6Sifu13v7xSpkVmmKm2RSGV6zkpyvMocSrP4PiHubxkhaAspKwhn7EsxQY7YgNrwVigpipwkhQR1CWA5hSk",
  "key14": "FK6H6MrEGhHuM7WzucdfK4kWBj7NgX7bKXMNTB8YSqCGeRV7u4ZNhc3wurexNNTomkV8PEEpd3JfwrGKGEimVCd",
  "key15": "66UQn2XvsygBA1D1mCXxvwjMoABgDZA1ABWD5eVNa8HrsWwWD1qkrHs7C7SWcgY49KGdrtNVizLfzKaJJWdFqMEY",
  "key16": "52W4h7LgDxzr7uUptzZRHvkVv63zNY1zda3GAU6fQqNBBAv7o5gEKYFwJAFtQqYf5UtbLjiLibmnb2DfV6vicTpc",
  "key17": "5LYFKpRhKh3RULnENp2A6EKsnRVdu2Rsru3EVoUcWraVXR8SzgZWpikCqa5nUeMDNvKTacAkLs5hvYkN6oXvrYbV",
  "key18": "4vtvLw8LxKpoowForDTWQqv1LMtKjeYqGpMh3ihvm9EnMxh6q6DKAMEgyFwcN9dAP6gb3cSufJfhUXTcAWekktUd",
  "key19": "5GiCh855xGmCs8e8k5hx4dcSCzTZWaHVaG663bmRe3o5JyLx8844qB4ewVwWhr5F6yRG4EV8KhnKKkUEN9KHTD7r",
  "key20": "2vwZ8xoknyZjsUsb1t2hirMLXdKbd8M6jWNdxwguQJmKjk3unBQDy6Jh6s41jDbZeEdiE36LXMLqzKgefgsYb6Gx",
  "key21": "4LMdJpABb5rvSUSBvmDpJnz8RXW24U8axYWVD54DsQyjAvpMdaH4eobttP7V5yXpZGAU9sRfLBX3v9Bb155zEVrM",
  "key22": "3ZsruDsjLbtPAskZXyvube4CnWZfktSNh3Hmqnu47CNf6VFJnvfySintEuwHT9u2WzmX2cz738ZMvvtGHWDG51S5",
  "key23": "49CwmxkUnbpmeYp8KRoAEtPqsL5asAhedijb2etnrJWDpQzLXNJ8pALPsHsHcY4yXtpabu3AZyb7QwBwH2XiLqjH",
  "key24": "26ixMeBdSpyiUWFni3pKft8znXJwqtynojo7J7hGXT2xzK4Had3DsPFXqq7heYwBuM7cYTnAaSpvRV5D7q6JBYnW",
  "key25": "3sCoaiBVNQUatQdwnimfrn3c4DoVyaexn8gG3Sq6UzyGG8PYESq3vsLNsnCbjx2pkk2EYZsPKGx4rAMXroP4zJUQ",
  "key26": "4pCYtSHdXcACpx6MuUBnfyVQjRYA3upWiKkxxNj2SMSLHeogLoxVU1G9YbbYRLKdLbsXbZMZugsQt38DcqgsNfSX",
  "key27": "3zonn7rqFCd1WigAx254q5HSnUrEtpBY1zLrCj7fKsKSZidCrK5jYNA8oKyyXxcPntYSLZ4dzeP2VVv1ADz45VzL",
  "key28": "62tU63n2TtgBW6vz5aCwJWaA5j1DJEiBSnQVhhntnmcYzcfqJ9Pp2aVRd2HCTEscVRSEomAXPxP1u1jJRZuNXUKE",
  "key29": "3UtyuYY6NmTdN5stDobZhGA9bjRpswndTNriMQKGcLx8nv9TYNV7CbdU7zXdJV1upgJ9np6RUN8kWF6anDMz5hyG",
  "key30": "8Mq2NzfDn4W1WBu7Kuw9gtKZCZZyvLEdcBFiSrjqg7eud6isLXnrmj2cYx3xi4sbJMCNiZ5TS2UVYWDF8L9KykB",
  "key31": "qGVwPesQ3tQgebuoPDvXEXLHnCHJdyG4AmqnhWxrQnT6WqmMFs422VhUQ1RQ2Dq2eexywWZVhVtwenQaKVKv5WY",
  "key32": "5xLkRnDW3zvD9aYot8MPrNQMWNkB5vg9JQbV61TQPqtUjDjLZdaY3QwEeGv1RSUFtNvsCdj96FSFy2ntBb8Z67FJ",
  "key33": "5Jrq9iRxY8452YgbRfR7b4z4os1CE4mCysTepfWx6THCWgYHuYSTcoT99vW6Y5sFZvWU1WKoj66RYvfVNrieyixk",
  "key34": "2agN7xAtMDD2U947rSZ332dUZmJ5HaW6PcxQpRMdrbkPzduGh73m4QNMu45ecoyCcYvbYxfxbSMryVXNk3CJ8JMG",
  "key35": "4RuiaVxJBMYShriS26SMk6qriKBswwMDUvFBmUJHgj93q6hDQc5hzqutjyuyNggHMh93AfQphi3rpxRXZq4aEq7w",
  "key36": "5Krp4QUR9o2GyRb5hBErPx5wrYEWYRZcazrhkHMrESmjrruTPTUnNrvUtim9mtTykqJ863HayaYYMPMK74wau6MF",
  "key37": "5cQELBArPxSWtiHD2CNqrPVfZ6ANAQ2iRgWTdNc6orGjUeD3XpMGkBypiQ9hmxx9nVFsDkHa1mW5XjWwZKT3SnNi",
  "key38": "aE9xkiXXjY73R3x7Rf9QQArXdGy8fXDpmcQVto3wurrtuc8mUjYEQfxyBuqZS1yD6CGzEYrHVhc4zTmoRPvpe2B",
  "key39": "4ea81JWJn2ABygUWg9iHoz5XMuo5xezHxJXXEqpe9dfYyQNeV97uRRQTG7nHvdtgMrTD9X8iSM5vSN7jBaoqusty",
  "key40": "5BH3HtXHJXeumzqihA5VVmdWSA9m6BQd9utKty9Spo2nfBUeab1B6dm64VzPW7CNCAWMz4nnLusjrqEPxWvwdXR8",
  "key41": "4FGpoYjcGmsgSiw7Mc3rB2oZua5eSRX2wYPqsiqGML6hcbGRLUuUiZJzsoEXZtPu4JeZKrqk6eZK1oif7r8WhEpA",
  "key42": "KGdeW6D22tx2L9Pt2ob1hkXdgjnQSKWaPM18KJ4AE4KK5AZvUTmgRXC4Ufb64aW68iPoKnygiQvQdVoW7aXQpsE",
  "key43": "3Ew7WhPFYmHtjb1UssgEE4Uy1Gg2eF7VvZSpxbYHmFmTAeDoPwMAowdqpEFnELeN4u7VFYpeh3H9mxgoB8ZMEFrH",
  "key44": "5cP15thpywDBcZiDmLUKBZVLU9g9KQzeQQai8eiVxVC5WowvQ67heFBvAMznDcUqFvhBeZ2FxWScvy4QzEzmXsPT",
  "key45": "5i11K1MKt9y2JbfaccvTi1Zc94QcQ5VkKBHTpbZtQ9219zvwXpriigFxiNimfg1mqytZtu5EdnhLq4pFBof9k8Sj",
  "key46": "2Tf2VdkHCHKVM9WcA1Y5ALUwGXCaVFe1FM6jcVTxkWMYz1s4c1GnaRkjgf8eEbRjrMdxaye8bqnbVs5yH45DPYsQ",
  "key47": "4ggrdTVDE8otfibaLi3EqaxrsNLnhUqokFQ9gcsvhkFsd6bSKRn33KGDxEmXweTsbHATpKxnqTTz4bLrgUkukiVt"
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
