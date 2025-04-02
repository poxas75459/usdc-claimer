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
    "3J9Zt3W3grXpX3QRXvDes4B7Kftog4BPRAp8yyvjiPh9PJNSQEq1eW2uVSrkkBkPsmmgKT58H38S1uvyeWeK3qac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dzsHYFDcgh6aKNuwKuUQ7HurwaX2dNZx4Z8eATxj8CQhwMPY6hqPxQ52FxdnkWZeMfg5ZTGrGCyBZf9x7dRkeMg",
  "key1": "3WFnsGrWqbaxgWXPURcAncu6UH9Rd1WL5as64GCiGtisy5CGqCkErmWmgZjjkrbmdjnfc23R6GdJBAKHGndnQmd5",
  "key2": "4u8Eu73zT9qNUcCGqVbvtggSCSR4xNEGMzve2JGvQ9MEaZviXfmY7jrwdKaEqrF7sGZDZsrQSRbWjozXF82PJxrg",
  "key3": "m9v9J95UQMAbatYeyxorzaNKKKGPvHEANewmzdyxsEwBaXjGcwnCDUpKHEwbNm1dUfdEK6EgjC8MBuRwZwiWyGu",
  "key4": "65GxjKWYNDGzjgC9Ho96EELVLV4LPSMNoM5BSAH95PD34rqghjNVajaj2in7eveYMnKEf3uVkKbmJ8c95aos4ged",
  "key5": "4SiRwJDFtDsr5fbDWuYwEiAm82sCGV4W3a69rYcaXURD9qbipviRF6E1b13rZvudxTdakLuJTgmhdZbtXMUzri8S",
  "key6": "5zYz5tZxyCTCyFbswJ3NsCXotcDm8womsEJ4xpeLuMtDwgG1kTE6mSw8onKVH5XXy53PzjeMR3fmSwt5NGXd9aUt",
  "key7": "5JGHmEFvucpiCG8StR7EBvNRvm8bSrpBwLMy5ZJSzM6WfDECY4bBNehdwvjFdDVpxHYQbHdE3gEpWjaPn6RYksiK",
  "key8": "2yCCcub3bJ7GH54yBFJ8J9Rtr2a1VPTeXFdvhTEDudriMAUUp13WNMFu3FJtzjAHNxjcfpDtJ8SYV67rTniUvVTS",
  "key9": "3yYGSTuuQ3sU6SXuPdRBN2NUun5XKePW3qjhWJFYb58DPJh2v29WcwE3BRyx69qHA9ARoSGkKrwqGktqTHDp7sgj",
  "key10": "3sngEsNhmw9AKk17PLeVp26eBeiGVwEaGGRbx17EdtvKsQY8aq1Bxfee95Fc5rk9SyceVKLkhTpxPWZj6QzMNNcz",
  "key11": "2kdpAUdjTcCDBiQVArg3hg3jnaU11qLzMZsVi2hf6sjjVueHH3kwRZJc5MLatpbVK9oDa9RdDRqqf1QPUGPFLNKf",
  "key12": "2SLCN79LN8SFaiK4CUSP9hLgZCbwrNxDf62MSDAzFvPueFTf2Xdu4n6aTWCxt32D3FQ3VYznEBPBxFVGxZtMT622",
  "key13": "4eCzaBkfXwNPsXTYcytJyz9reyRZnM22bPFppoPe3X3AgUPqe7EHGUiUfeWrYMmjPevRWC32exYZze5aCzD5jU1F",
  "key14": "vVAp9nZ58ixCZMrT49GbBVdVw7iYiQw7oTsQJx7nEsxuFaL46HgtDDchkNqfGJKHo8oZtQBvkfYjdS7aTPQUDsb",
  "key15": "3F7hbmAAmmFB1okNo9ueRNkeawuQimCbsmPNvCmc8ks9KAo5tSCGNm7rx4tUGzDR4x5iyfC8NZeUs87N2wbiJXnw",
  "key16": "5kxrqLSBWx3h9RXUCP9n4CCw7XKBQiNudYRzcUBd3kHp9wAMEumb99Aq4Dq4p5AtozsgD7hqHg6XH82MThdxMnFF",
  "key17": "41L91952K3DomVAjHbmnUr4rR55wJMQqEeRYGC2Ug3beNc4Ay8W3k4rndhN5uzw6iACK15zPmo45uvRR7os7pYFh",
  "key18": "3dBFCek6dWQVty5wRUB1rGwnsQmgXmoh4ac8EtDZeXTb2Eqq2UHanFW1EH1kKNYCWnP56RTQEuJMKmQbnb6RYJR3",
  "key19": "5EVtoXdJkzvyKWWQb8D2kmXKP9NXxSh7Zu4qVZ8Q9NW2yidQYsHFJZYMxztnaKGDLoLJ2MGVDwxiRF5MFBSBhVsV",
  "key20": "3UpECTe8cp6sfFE8rjCemNPfxs4Yk6iNRw3JiadJCdTDkbTdJCibHtEuXhUP2F2ECaw99zWiL99FY5MQZkoSvprf",
  "key21": "43mMhBYaUorkt19nT562mbCGToN2hsoKyny68Y7QVUPe4HjHSHtYCd39j4prRH7KFyiSbfLBJo78pxMYvVDRrBLb",
  "key22": "4jbjg1KbwGrKaNz6Nes8UZpkYtzzBmuj67PR4GXLkWfmspPsy1Fq8aZF5krfDNjKEYL3afM93WVG5pA7AnvGNdde",
  "key23": "2eqYgGXV4CdBUffprtTpwtc79Sb1o8Q6D5LMyTay8k3JxFNea11CVEy1aWj2PcnBMNx2TmL47vHJ7GSteHZ3dapB",
  "key24": "4bSEJkz2KE42kQjtJhv2qo2KmTrPGg6jSVqdEXhYfNfqDcRzzV7rjH4fu7fh75npc1AA5zoAftSpi7BXr4D2UQhY",
  "key25": "2oUd4Q5uVApaXCbpYuMmb7w6bTdf9vEoDiCoDjMHqo7epBp5DQhZjjZAikkwHLNc26WfqeUKbjkpYBKMUx6HtZ9C",
  "key26": "4fS2TCcxd9tVDXHYMGUqqDAURQDxUXShQqi973tsbFLpe4eFQEaNR1XTs7UNg12VYTTt1bsxFUxymB1qdWiLJVtH",
  "key27": "T8SHvjMSDZiXYaDygZk4MHqLQ98VhQ4BdbvfPYBpJNRmNCPsM9dwPYiSS3hDYV1mAfLiYPCmQtfEo66ER9iGEPF",
  "key28": "3dvLAjJDVAeKWXB1pNWQngiKupMzg9NLdJBKdFgRardZc6XrZpXFuhBE7RE8TM7b5db3ELLu7LYbuepKKieCXKjf"
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
