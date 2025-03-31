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
    "2e63gNg2CrEe5UY5gmF9bEJB8U9Ag7N5H3dS3n1s5LVx8C9xdL2woEX6RUJeXXWx1uZqMtEU6Z82dja4mMKWSQ5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3twvD2sFeprWWtv6zuvLfrzVVC49ZNTwvDA8TV8NfWGizKZ65hKYTCMVguyu4VChykgXuXwnvRJzKitmGDX2XPsh",
  "key1": "5QY26vTFWyNz2vgyV8TmcHCwWuYjo8SxY4UPfrQpgJCr3CdogJurep8mq3xveuydaq83HFRfovZtmFXVjPTmM9YG",
  "key2": "4BYCvbjg1UtumkoMHQxASFCrhhZg2pkpgYrkhPZp4zJm5cBAACR5yZmXj5rzaet1WHYTXyKUmUNVtWhAWZVNQ4UA",
  "key3": "D5sLCLoZbtkVXLNg4iLRqkrc4YwwJVLWHrVQpywKVDa1ocLKBGuqRrpGGaGZtSixbsXY6Avh27gcL66QbKUkvDk",
  "key4": "4PFREk5CCMxAuAMSebDAdukvW5cuCe3fuFGK4PM1MABJQasbY73Xunsqm1kTLhqRRjUmZCLSrSDqzKpJk3GMWP9A",
  "key5": "543ukTPUQeiAn6dnS3Qww2jhF1jfqBsyRRbQ6ao8FoaMqpGGipxLJvfycTw7wsdKMDJrXsmjozpZdsMjmJPRxoN9",
  "key6": "4PKs9QQY1BN1Xg6UgoEqjP7k9Rwru91VrCGA3ARhJjSsb51AaHH9rg8ovQwtqs7qLSmU9FnqDWpEZN6ER5xJVq5S",
  "key7": "5AG7tveDwdLz7HJqMLPTv9XhpiyWpm5bodQ4j9SB1KDSqPZKQnDDLjRYKVLLvzqTNLbshSGJB9owiVhY1S6z6c5S",
  "key8": "2YEo9oaf7uRL9tk3LnFR8WxGvPUWgrS9LvdP6GTRtDiCUjGVoFHBQKFu1bCUWqm1YH8ZdvunJ8RhALh7Gi6aUYcv",
  "key9": "3fvv4Gbg3xcDpbXknoi3CBDLMzThAyvg8v9mqhfvoDy4p88FrcbTd4yybHtTmNCaqxq2W4PCR6RTU5cQsL565FR",
  "key10": "3qhT67ENydSR5GkruiQRYtDebDjS98sov3kdQKPnfj7Uzt6FDnnJ8aKM284sskqKevVVwKAoQRdo8ATk8c2KAPyZ",
  "key11": "65DoQNFsgckWjfYQxjAyoJQNHF4mfTDpWZh8Qvoidy4Fhxmw2xANp6bZFSoucgpL2YU5JbkCD6jfA2Y9yKXg2QqL",
  "key12": "5htuwvfP4Di48muiBY9WfRrF2coeEpUKK8caoaVdJZB6TjQCsJUoCzXucU6U7pLQLPT5sMgWGmneMy1b2q7wZjVV",
  "key13": "5Q9iNJVomA79JyzMZWGpk36f9g4HWdwmTwg24kauskGsf4CbrqdgZ56nA6fDccdEkEKZPNrTb8HZp7AM59DFgwfR",
  "key14": "3fuTZzxvqygLn8wUWVYhNaUuErznLH7nyUJdLLSxBMHNWLzaH1x3N7HsGMSLK8KUL9qJAsfTMQCPrvb99m5BtmJS",
  "key15": "3Y2FFpFqYpJivujwsXUyMvx8DqiWcYmrgQPMf7fbQwjbUTfsNpeFVEUdzuPk3QEvQnLkF67PB6vRXczALCA8avPj",
  "key16": "5cLJRL16JFiD7Hsr68JcgRxRsyESW1Art4D5bMjejq14S91fRsvUEEczFsPyY2hprKZ4wwpbQ1E2FS1VCuLtvrBS",
  "key17": "5j8Eh9PyutbjD9cbJnFpsxWu4jn4Y4tt8bUHSodUjwLU21HL5bJNHLrLvFUkyjeiL59CTtaxA8sZcmr8wxcnSuh2",
  "key18": "3vfjPju13axqYnnwo49n7P5hE3B3gigVmFnehKttPFFXZz3DV7wViAuy8bFX9d89X8AtKbCLirBrE7CVNVGCsGeK",
  "key19": "5YQaHkxTxu5t1cuj9HSWveTqUcQn9wBd6mwterRmNAzJTNPmSCbF8dqztUJqKbP3HpEkBWbEQPvNCx9NTB2bLGBV",
  "key20": "2TAX5qMQtPX5P1uXDMTrLpd8wrZu5ALiomYi4EWkddkNxfBk12g9mv5Uxfdb75ixsz5z21v69Yg73zK5CTt3THiD",
  "key21": "4zdxH6ZYVm6x6JFXmUmjm9qjqpTg1ZZSXhbaExG4BEckTxx6iNbShg7kQvvNuTyTjdSpvbaSTQeHtHaBhjhrA4Gv",
  "key22": "5JaKMji4pd7KFoekf7GQ76yxmHjnPLC4uvNqJ2dqhB5mArJMfV5bmN4XLfPneCR6DRJQJMHwA1RMf3KZfzemkCwZ",
  "key23": "gP8qKs1BfsK6Su8mqLL13SLVGmA3LCU3MNPMQQQcJ2Lx7Qr8oB4M27TAjhZpd6uLvpmFr2r6gKttL13Wa5vdq4w",
  "key24": "24xJVUdHt9K57Ba1fzUrochq9ZWTPazNyNLNcf6Zxt4ZRYk576uBaZKbPr1WDsgyVRzJMYA4YHtQBCpJFJ8RnKGu",
  "key25": "mAYFMi5Gn2gmKXjLZz5j43cf3TiG4w4mxdH8ScxporEZfQ3oW83P3g9GVekFnu7uwivpWnyAGKNptFuPbZYwfgq",
  "key26": "5st53p2UcjJGoqUpfDSVps8rW7DFQatkTcK8VjsyiqyWZXnW3FoJqAqDRAvKtbqqtvSn6Vp6HN5EyHazkVWKNX1Y",
  "key27": "4Un7C61oTRVYfPPmqTkk5gjKY59aJsaAoRWnTy8im1ivaferyGUtZ3M93pNqaVNvAjCtijAEXoWw8ncfEok3K7BU",
  "key28": "2oyLWRKPaeXstS2oXStT8k6P5ns4UdYb1ogWVEKhAwsYM6qLePsp4YnCt9UVQ6zzMdyrHv4EmbekNVGFa2FeSz85",
  "key29": "2z5FNXjt6F75MjWboBKsXAPJv592tCwXE5qBU63QFqFE5PCT3RkLtnNrNPQiR9LYwacZnUSrQNRvCHun5apxLTrs",
  "key30": "3GnoD1o5vUgW4Du69mf88KvRRNAsqzo4Ar6tM7f9xJ81Z8ZFfvMGHQrtCCDpKCcQ4JWYCbqzBwr1CDhSYVc22Zwj",
  "key31": "4EziWJ19dGPW5K5kXR9pfLXN5pii4nxSVLUkMkpYKBfUcbhapnxM6rPp6Fqtn7vcY8PkDWcMXUwBYMYGVVC6129P",
  "key32": "5rReyoXBxrCp2e11dLgV9UFXGS6oFhhKgrvRMhDU8GDMj3sCeHSeab8YkcwGwnnSJjTwmeuRKxuaC9NJi3mpDUAt",
  "key33": "9ny8NuaQeLDxYsG4sEFpEJPTupHfagp9Va5Am2GiEusP2eHDyV5C97QiwVYVtBxyAcRuspEdc55vxzNDJTQSPhd",
  "key34": "JMqxnf6X7Faec1KAkmi55EvofGQLwGtnhtkEVURUGXEiuNKask7WJvhgMeuu2xtcRaWaMM9eDhhuTarHugLNQfo",
  "key35": "5T86iE3o1LH3VANqBnR8dsyfrWRqHybiKvuB9LA1Zifm4fU4XYriwxG11djMd2tjwaKDasq2aZsDUxJKNsdkHdNn",
  "key36": "58ZXKPXU3RDzm8nbX76NXbUeGBtHCtBHEyoqvyXBAbVNrbr1FhoaJNekXepmTWwRvhN74js9Nw8um7X3B3knnUuB",
  "key37": "5JG6VkJUp91DWC7L4yaHMiUF3izuzKfaevKANJRZn8Gi3pRbarQCzLSCaqAFh1jCvBhwGeEA6Tt8azXAt3q9CJd8",
  "key38": "45y83hbhx1yok7axbHyivQ5e9n29DW6riCACuA66DSD7hyMj41AdJkjhRFru2DMUKaerhRc4YFnoUvXheizPxDKg",
  "key39": "5apQfpm63Jwb7zdD44xCnGc4XzqJXqzBSnkP8HN1PxsQuwUbosnkp2N1uZ77eZ9rJCRtKBEwXPXJbr4pTyzJyvh6",
  "key40": "QfAPPctEDECgPZdNifLWnKnWHv4ZaaNTQ9soJFCAF4P9pFny76UUVA4PkhZ1nmKxYPsMaKX1qfxY83ApF2yat2Q",
  "key41": "2iQGPX7qqJH9xua1mjemHjcyXs51ppDBio9598bxTxU5RLhDzsw8U3a5mz88vXYjukF2FcneZMUT4HyisDJX8sK8",
  "key42": "8ghwSe8GVaYkK29VjpUxg9H6e59u9JBAqTVQ1nT9P19owbDZuNvkYsDDUr3P3dwbF6pwyi1VjRb8TkWdsASSSRH",
  "key43": "3BRtfbv7XFnDHFv2AhYiSivgTP4xZ1xVyL1kYM8iMS5VmsMJ6eoShtbMKKeezeQWTrxZLgNZQ6eFHcAATqvB6T3L",
  "key44": "3dbN4bvshja6hF2XJY2jdZfSv9iEx4HsVzX92fcohTnut9ToVrty3i1uLChpSygCbWPaRzBzB7bvQDV26DwrN78M",
  "key45": "5znQiaTNBod9ZNscfUsCBc4t5SVU1fhrruimqKsRFriCTpGzUTPvNFsS6CKUr4eYjmCLyqkEbf8LV6BymbFKNx27",
  "key46": "2UXzGPp1trmxptYnhYtSoSd7aZ8vxsZXJ6oKmRF4E3LNrjPaare7Bg8Ho57QWzudZst2ojsiD7xoAcy5VBXxn4dv",
  "key47": "2FJ131KyZhHS3sP3218koNX6rycVi9Gt7dzavVvtLYLKVR1UU7bk4fEhAhFqhLVMYH4uetgSeRnGTJ7PgMp6hp8N",
  "key48": "uyWNQPsEsV3LoALBVv7xayvjp4SKySadgHtHaQWSwJ1h9mshbGcCKyxEvSAX2gfafNc5s8oqCcUZEprbxqLhdaf",
  "key49": "2nn6k1BUj9DBG9nEPgebBQg2eCek9rNmSy2ULcVeaZqkJcPX73EZsZ2ckppi66hC8s1SuGJiWuGyMingNL1dC2cS"
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
