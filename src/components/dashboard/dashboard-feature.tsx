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
    "3vAEjaTuGUsQEh9UT3ZPQYMtTnkCLNUx1YSwctdm4F92mugQDmoyUeuNPRtyk7e1X9Lpo5VJjv1dH8GFpymPuXuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fhXJfkpC6p3A98ZaQK1jpGpdzddSHQhHDS4EygDEa1mjCFxT3UAxXyChNYvV75hsv2CXMPKBnho1vMmdfFcYmAx",
  "key1": "2QHhx7mVQWTzMrWriUJMa7CMFtfJZrmjmusMViMAkYLibanRBtWuivc8PgzByKtPypxJrWNJhmhnUzxJhjhtDV3L",
  "key2": "Rg4Li6bLJFb1WJChEVZ1xYt5NKezo7zaZeBjuiPox4LzRzeEfmDu1DzaSbfSmmoCGwzPMqpUcDJT2gsBHivgj6Y",
  "key3": "3JU5vb7t7Vj7asRQPee7Npn7RZWXDBTvvtXPFvCDZ5b1BdVzZZp8CZxHCW9MLFLNytRjXQ55Mn6qHeo4mzDsdm1t",
  "key4": "4rXou3wkr2cfgySh82EVJGL13FtJeszBhL54f4JoFbocdYCN8nDXXQveDcyxvrK4vqq9drtF82HeJcyC7UEcL8Kr",
  "key5": "5cNqxfbtAzmPj4SgtJ14ChLRyPapTqsncTfEPEYvRzty9ZjudaxMiknjB9Y25vPVwSwDzgg75bvRuz5hjnGvcd5b",
  "key6": "2kzwiLYCTsfnjsoVUAfPaLXdNUqkHysu8PZhXukt8dbkiMfumpMkbvnNKoyUPvaRWHv5iQPAW4DBmJt4jxcoK5gy",
  "key7": "3GTgMpnt7MG2xu46uypQcLUnaK8YByiCAcAMddzvW5uaKgF4kKf6S4xLLpZo4npzzcXner496WScoqS3VgG4Am21",
  "key8": "5LMoTr9ngESyTvcBnzbfURcWBcULwAg18iTBPU3RM9GSPaKrS8birv8uhDWtXcVjTznr511hN4rBWxyD5KBqhGQw",
  "key9": "584FuN5RJE3CjjJeTqQ6bihAyFCXNbzWrEUE4J8e19T6KyLYfBsrNedrBbFNX91kmhGKijTW3rmio4RQ2ic9LX9R",
  "key10": "3mrZV3h5UUFxQUwZMNWwqgdsYWtt8hnxWZjW35iPeTnuiMZbHcbPWncoEg6DJiceHT3H2srh29nGCtwPB2eXr9mP",
  "key11": "4shwajrGXrWqWCGAwBxAM6M1jiAHgb7jDCjsikzDBvuk71PGk35DvVaSL9LW83A7nDaEcM1esHLBkNiiXiKmoSw4",
  "key12": "3ATD8yErDZmZ1WKgpNDmkH32ZHT8eSXhEvMvnjuJuci5m47CgFTD9kLigTUUXtLpZoLsFqsjHtXSmXFnkdSmT6Jn",
  "key13": "5vhBmjFAXF48rc2dRF82h93fBnTVtQB7vJ7FsAgsfon9WUkaFKFT6RSxwjNnRwXqruFKBNrA1cUnhAH9uvUJ9v1F",
  "key14": "2K8fR5NKeYEMYcV4nhBSk29HH7YXWK11YQ4xwYhUaXbEHdKAFeZfh31ezcp1WjHtGLCEFcAP5i53dnkMPaHGGPze",
  "key15": "2Wnx93x9JS4ANgAsV7EMGKMu8dPV9nQ61Qodc6xRZfetb73d9M4AvJBp1s1RSmGZxAgCPr4stKPm2CdzwnJHF9Xh",
  "key16": "Aba4mY9um5MsYsKgyP6vDV7tUDbAQu6hvFJJpcVcBda2Lb1BtyuoHXhx7hrqbAqmqhqoszCke3J7U3fvjBMapXs",
  "key17": "4ZVss29iWhMB1qmLiusC7KnCQ54gz9kY8A3Xvh7L8nw5dNt7ygFcwBwvErw9e7FUGGJPL1BCfkfA4c4yF22MWjF4",
  "key18": "4rfn1L7Sg5uJY3bZnp3cmJwjpvQkXiRtTR66dgRsFLCi7t2RFqKybXhAJJySAA7Eg6F3ixCEpEFjTmwok5wGu8dp",
  "key19": "5qvQz1TCuPaVvVoAwgEoum1AQtucaAJtngivVvNDNBB4oQ1SfdKcPnp94NJH6iV2EefigJpjx85C5Ffb8ghX6Jrh",
  "key20": "x1N2bxHr2Tp1i5oFReYdqmZSM8dPdUyjt4AvP9EZKm3biZkURdfzqEckSyMhoCLhvgCKH46yGpz56fqXVi8x4ur",
  "key21": "2zbstDDbPG5BbqXYEUSNsxnCtqcRzCgptex729b6EnyoZv5U6YSFgJh3L8oxbVWgoKoVMFhJPVanTwdTKUb25Zum",
  "key22": "61p7tJaumeBLWex9L5b8sW4cNgpwRz8Fx9ADCCiAWRiiRbDPMRP5qbGwxxjJ1aRcQG3NqYmgoSCiTwyXsn8csV8h",
  "key23": "i4Qv2twtbK82Jb12q3SU3qU6AW9DLxpTXKxQgpoThrMmttNuofdKcGV5xF7n3uZ6zYVfHPV2ZatjDKcScC5gLsv",
  "key24": "3XGBV127Fb6SLZioVoASahs5nRjjPexeRmVAoFzoEuDvfNh1tof2rnjV4M7iHtWgJ9fYtWFMLdrQwSfDQwTWkEQ5",
  "key25": "2hkkHQGo3weA6xresLjckgABLPLLDKaG6B5XbhiQT9EXUcqZwuTpJTEepEyjkPwUeT8RsdXkL8wWAK1Jqz6cghZ3",
  "key26": "4dQ2SwhWyEj7oP558ZA8JjaRHyaFgwkJCpg7acjcLRacKzFzDbbPsP7GrJwUV5jumFXQUmUaVU6X4u2BN3NrZHZd",
  "key27": "38ZzHYZaEu3n4uMY32tEYSbcenEHf8xcz68kogDNyBftRPaa3QtKrpyfk4ZcAjhY4pGSgFbosmWmTuU9LqGZLhr1",
  "key28": "DKMJTCEoa1APYm1hGD6fkB1PzZk68MkaT78FUb64nN5ear8Ru7TsFvSQqHezNohFnAvRu3iFQoSzcELQPCFoNez",
  "key29": "4mn2eNimPSnMRqsC7k7QXiQuKbVEExYyKCRMRBUTirb3fBoUb2gPUswWXgvWM8YREWHCd7Ng19T9NTf88NraEMYS",
  "key30": "2s5gisKs7kuoCWYqxVmaHSBwqwur8s61h9dkWSRAqEhEn1tiiG6jKSYr2LSFGRuB5Ci3Bsecm3L6r9LKHe1uzKDp",
  "key31": "2uEH6jYuownBGwJkmzxTpdbgSSFBiUzn8kqvJta4H6UTGckHbyKSZTcAgueNFV8YSAdRo97dSwBJw8MqJVfGTSsw",
  "key32": "5GiWGxxTrXZWr8e39kvCAqRoR7ggsB1axM47Db7ruUaokE69d4ovXXJbSYdsqvuGR73X1rXFn9hpSDanskUbc3C4"
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
