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
    "3rsHHWDEYMPVgoShojKLHuA4PZkKEE6rH4yYrUHV16vV3RVWKF5Up3EsTGBKhknpYiyTBMp7QhZGeVMPGiBbnvHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wFqGtbkT8uBmsqjLFXrGP5psQKrqJdNjbKKJZU1hNN1dQqKDwBwBu6UHPkU5z67uYca4vNf6kq62Do1AJT4RiyZ",
  "key1": "3ZxHxaQjH8xmWhTYwdit7QJ5QA6fTSkJkGkDd4DwrTyRBZ7gfDDq4TiWM8dwqpDBdvLYpKYcaWFwLACbvotJYGqv",
  "key2": "4GFzdYqQVcAVJy3HedsuzhofBF33C2gWbK4F8i7HNfCAysp96ra72QLzaD9N1WY4jeLLWuoZXiZLCA9EU7yGL9Zm",
  "key3": "dJnKdeKUiE5BuNwXDfmmF1DYME5TCR7UpAkaXpttLo8fuQh7zskDiYyjR4HaQEusxtLJPfhryhUWy2M1Fd9e9so",
  "key4": "5U6roui2bpnRmTCtuenEHUa9RAkvSGT6BK1GrLAftvy5T1TrZY6amYEd3xTqs4VY45ov2A4XtEUNXVU2EaHe5Xho",
  "key5": "qU7B3haiYLF29M3C7k4XKLsttCxdf3x3hQgFk8UPESyiCBn9kdAPwUKWaQMmhexJoNgqr3Gb9hsCqTikQRf8dSZ",
  "key6": "4qJ5QzWyw4XAwKmbQwQHUJZ9nzfCReFViE6UFHSKms3h6vCLxGorxizmbekYNg9vm2dDy7tZg4WDEYcgzjw7RvgR",
  "key7": "46ihck3Yz2DQ63hUX4Fgzh7f4KArukxGNY7Dcc2yGBSSm18qowgGgTCL9Th9oNF2tVyK3q6dSEhDsSLQgs2gBz6G",
  "key8": "2E8s9oYAmEoM5s6mNDUnB8c38i53g4DNxbv77EJmSABYaGENcYcokCEpckUKgPLYGvAyHoZ95KMcty2XNFjdQnNf",
  "key9": "4MajnJSsMz6vnQYVhD1f3uYkY8HHqHSzEFc3kyD3zdp2JtjCHEwstqKYzk8h9wr7ubWX67ZE9MHK9T3JsBYVkJtr",
  "key10": "5L6p2A7QFcSCdmk6u7TixuQ2fo4Ds3ree5Mfein685QrVdonhHqSNbDbTH2TnzGHkDnaSjvqrEFXRoyrKyQQgHKj",
  "key11": "21edSE4KAvhxR14iVs6vJ31JAKkdyD7fGyh7sXxF5XQYTPDexn7hib1xiJzShy2D8C4QTknnG4tkKafrgCvhFLAZ",
  "key12": "4Sytvj4zUkiHhmJB2wQnxqy6jStd5ZK6FENdTEJJri4sqRJGern7x9V1hd4vUfDDD3q8bs1oVY2Tzy8p5ZBqNEdG",
  "key13": "5tDnNciQJQMQNRP2FGS989qeGY6HLSCVNTfcVYRHJ8hTYq1o2iWqm9cYfHRjzyenC2zEwK5Mi3xWggM7G91yk8WN",
  "key14": "45JjPhyN1TZcnhkApk8wotPrXxSunhosP4R4EiE2YAPrPWm7ZMNHyzb65XfGXN2Wzn82ieWqLXYdnHCwUpp7QyF3",
  "key15": "5D4iab3spNY88S6tqFJPnpUH4G3Hm4JJbxygErbhZHnmVKKTfqLePsbbbnntTcphZvfW4jPftCjDBctpTxnDe62",
  "key16": "iJLEw4b1aZHkq4R24LeTAhdoFjHCA3mEU5FhNdL9LoVL8zTErx9jy6fSuemCtj1EZgqujoZShH1BPC7WY93BLNf",
  "key17": "3HXj8FaBeXjqs1G9Fi1mG1V1ipzZ61pU6YdAExoqgEBtoDVctsMAVC4E4FBt3tLSt3iprEmLFeMhkoT537b6uKn9",
  "key18": "23G58eQ4bTfwbeKpZibmJFkYVUEmx3gGdTMmgErQQu1MTJ38FatiZvQw1isWeBhXji7bb4irnvvmewYukM5rk39G",
  "key19": "5A8mcKubQzhPgwWExz4uNZyQLKcP6Wsd6Lo6W1ixQFoXAHktSGvzUE5x9fXY2jYqt5nLnEBsqHTqDYnCky7YEt5p",
  "key20": "29q5Xt3M9uZnu5L3b1QphywScyySWpViWveFFtdBkt4uSntUz4AoQ24C2yLXt4LAmUNdJrYUXrSQ3WBmYgE9PvHa",
  "key21": "5UCXdLYjtVvSbsCUTs8BK9Mn78qk97rXcTwaXxqU6PQSygKHSShTgasw2LB1wgVCVyvN7wKwXtw7jyNUespJRbA9",
  "key22": "3h9Bbk2KguzyWfXiXQsbgNJGLYPgkGWTgmjMdSvBJnYb78gAnGDbiTosRjdVKNVy7cgZjUZgzaCcneA63mt9giiE",
  "key23": "4koZXdRhn68iTjTLH3xzNdhujY9XkgrzhCrR8g2v5mHVXtuWuTvt1DRR19GUbam3qzUavZkbJvxv4QJBex3VLUcs",
  "key24": "5jF1ivBFUw58ZaUrKTwonG5323rxNjASKr8ESTP8CWHmmiDSKDBCqtuhHo8Te8WWwhoXjvvaER1m5sXaRagCymSW",
  "key25": "JK7BhEkW2eJpaujH7uudW9aecTFLEnfzoxHGd3K21YdpGMg6ujXKSMhDKiMLr1L564N83qzYBcs3whReeZoG4Tt",
  "key26": "2wotpfdFQE8N8GDjjEmf1cYq4sGAjHx2D6XSeEAPvVc7mtrUs2A26GtpvksbuoJogbAjeXxWAMtqegTJfgD9NJnc",
  "key27": "5tgLsvuWdk6j1hkAnkNVUkwmBtVy8gDX8vQKrVZUAo9WQzYRUizLDFEsxrgT6Gt8vH1PD7eG15DKH7B3X8akp22S",
  "key28": "4LM52SczKF6zKh8vmnQ8UYmmnDVFmedjeF544jJUZ6dTqpnLWPLTp8Bm5cTKZK6htn1qKEypHm2sFrVsWNgPg8uG",
  "key29": "5DExqW4MiJCC7NWaPu3AaGdwW1iKyqnFRH7aGx32wNSqBKWrk5dnPmBG8Nw4M5YxNNh39jxP2nSuJyLi8e4Q6r1J",
  "key30": "66FqBVQ2kT1xZJzkS5Z68UWSb2L5t5s1HLkDM8eRYTm5m6CivBhuMH7BELGiKeXpdkyaFMg11NREqLaXneLeZKka",
  "key31": "2ygwZR8vqsTHMsSH6iaHGZRBgXTqiTJPY2mC73cHfjJ9tdcGUy9DrYLMJQCo8xr15XQEcxudsKMWPeLnXFkRg7UH",
  "key32": "3DvS8ZgJFCKsP5xA9aKD2eM7qvDaJjwZEZNd9sWArDsggSTw7JHHwftURnEb6ZHDA1k9nbbVY2LsXmwLLD7Cyo53",
  "key33": "3wAw9Ny7uAanEJmmfPh4uVRU7yojPGQdQqx3nw4GkQeN8zu7QApeQZhBLDTsQzAH6KdEH4pyxfbvZWWHCKR12mWi",
  "key34": "3VXZNKxzwUh7sq1FsmhztjpVT8nvK5F8Rdnkmj5z8gwTkaGdzSP8863AnDaq9LAViwTNi9Zi1waNi2JqGLyeJ84P",
  "key35": "4DZuqx1JaQeNkzCxdKjuyiwUXR1HqmaKSvXGvuWKJgeuNKro9A39n4rCjeazffJHcuEN5iK8xc5J6stttR8nsxz7",
  "key36": "5b2FyLuzqraTWAvwaJ9JW9je84nS6sbkJmEsyW3d9tXE1D1e7agniLasF4ChUHcPoXLp9xaapaJhXNwjxVLvb6rW",
  "key37": "fzhKQGoAbeLNa4cc83iJj7r4WBWGA1LjGK2nZ23KguRELmwVTd9qeJapbub4s3iiv3TdnQwKbx9wDbsVscb5tue",
  "key38": "5qFUuSGdqrEy9SVqTrbtumtVEP7QQLJxjd2bCY6xAVLTpDcCkC8zKfPZNDhRvQ59pF5WFF7DvvZqUstTaSgCYLiA",
  "key39": "3AiA1LrhNqj4joVAMxfZee4n7AiYRxp68YcRs6Ccx1EaLoJq5fKPf4kHS6wvntx1rL4YLxYHeGhUR7xVBr9TsxxD",
  "key40": "5KMa5Wk35SGYYTnNcHmQVRXJBcCEMRM76v25ywy1wmjUfiGsYmvnp8nWhHzjby2aPAphJ8HjS44WygZYM1vGPhTq",
  "key41": "2HhsqzEHJxzYaDzMwK2PVeAmBvFi3GPrKC63QMV1jZ1YxhxZNXXBwVnWtUHFUuj1dua9SGnWqifGnywFMd8HZExE",
  "key42": "yDqdQuUKCPHmJf8vViPHfLQmryHfJxrFXJNbNzuQubXdbuW5zkEC3b4qXmZNVMkW61dCMCd3pPBGRhcBVdgWyu2",
  "key43": "5NkVDahgrygHbyzXXgANoyMqxrDrZCv6ctvLtiKRjTq5bP55p3drscxbWMB8QH8ycxNRF1w8s3trwVW8TmpEXLZs",
  "key44": "4cSjryX5aP9FZjbkL98VbxMM7cx753eec5panN1uhpRr6h7zfk3uZ6BTwESyQAZobwSxDz1b3sEeKQpuv7BcUPdc",
  "key45": "39ysM5UKwocm3FYaaYNm75LdmJrxU3hRqkmyBhVwmdUe6cFAsRYCGgnHfTM4r6mkbnSeRbxn7eUhKg6ZhcRyMAoh",
  "key46": "5rSMj2Go66i9WjudyAiJudehQaFe8LP177hcz4yFy94tH2zuvsSYRiBapxG6vnXtBLgQXX6SZdKt9ttSNUzjX8S4"
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
