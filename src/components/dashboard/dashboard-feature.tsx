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
    "4Dix4Tdon7teo3Vvu618ttKseh4qSEFZcGggEGSQfUN9ncyXVGCcga3NJgqxLQXkfcMkLdd9MmLa2ZrXvkwywz1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sm3gnUNM2h8Z7hWurvWbDGbbGYDmGyKXu2XhXx7Zc954cydM9V2ZWWXLi6cAEaMrej5WrDdNLw9uFGGhbrb6X8q",
  "key1": "3Bn6ZhH6MTLoGV5AF9EVBKBEZ3NpHLRq2CP2FRPCYyfopiPkMNL9H8QjAuWKnPE8WiiFcXVQeGK3YvhkoXUVv4h4",
  "key2": "5o5J6Rr1bpVAbTGprRMTh3zWPpjPyC4dKoh1eUjHob9xVYndn3KCQUUbJNVbrsuvtB7hVDkDnyYdTj6kpRHCeWRg",
  "key3": "37HSxT9rfN3wpUbrga3u3axSk8DRHqu7PkMXEdPHjRgSoc2tEK9EXebFr9oM536rBZ2DqStBkAyhvMv9kuZoiSes",
  "key4": "38xxauhNvpqYa3HRNDmKWPR5Ed2hVMV1mHeahyNQf8gPARh8XJMufsctuiPVrY3UAgmPFmN8S9hjW9MvmomGKwBD",
  "key5": "5KeyvXHv9DY6zrNFqvnS5o3ibZ3ahMJQvVxBwcuefmtu6hj6XNy8JdQkmqH4CLc1gfB5yTVDiBhU5jpaXQte6qd6",
  "key6": "5cKws54CyWE5yueQMqvF8BYBSvFWMDxr6nu7bYkeeMbTXfNednZTSm8h7CkqhvooYXefoyw3BsToq6gRgREcFA5s",
  "key7": "2rPz67TTjMttrhmTdZAbmbUusrPUmZxdbhSFYGtjS35hLhBW2jXr1pDDp8XXeV7QLYs69gpbnoSuiXEUE5amMUJ7",
  "key8": "28kQUrZvhjTTwm2jwR3DRP1NgXXxQiJdAEQ9rxjez5Dw4G8rgywqJPNjLW44eYsXch1XmqhmWyT1XKWTbtw65Ye8",
  "key9": "4JuZmToaDTFTVkjDXJiAsf9N9vJnrreGjGXYxtp1ZGRxQ11GhwcpNGDVAyspBzvMWsyeWzuZJEpJfGQDESUDfcYL",
  "key10": "5dgQG68dusq7ynwm6xiXkzqZavV6Hi2Age8w36HdZ2FB9qTWJfXhs21T94q9gdNCoCzUHshWUDiebgCWXKx2eR9N",
  "key11": "Z5EynYXNEGMzUQ71WSnsBLGJG4MgCpMLs1k1Hize95n3gTwxV9pz1RxiXyYBsgrZzNPQLthP53pvwWGmSv5G5k4",
  "key12": "2mAX2k9J5pqvggEPEX4yHayKxaTDaYmMc4Zf7yTkdJPdY8UBj7dBcWieLxz6ehE1drsReo3d4Wg2uVFP4NhPD1up",
  "key13": "3mEAL1ythq3oDhFQUXNiKtXENdshXcSeMc9Vua4wrn841kTmECFGJMQVDNpiXfrNR1JSNos9SuUBBJxBsMMGnoav",
  "key14": "57aLURe3GpSEsFmjifUAcj4TqHLRCiSCRfBniATxEvaKUzEwc3j1nXkNLfWfoEYqb8a3SvntJNnuETWkeew6Zzgj",
  "key15": "2CrxwWKoXFstEiD2ZTuBxLY4qy4qhzP21bjsrJwr2ESmu6A9PytD8VtjwTGnBzyZ8EupjJ8EELpFVkNsH7qU1Ww5",
  "key16": "4RcbGnGqtUBomaqRPnGJsPAa7YZp9jxWzSgKcwdL4yR9YQ36veJZbCmprmuVH8y7xpfFesMyUTEN3E9EmfU5dVUZ",
  "key17": "4pjGeB37gEmYMu7VLmw74ZVqn57voFd3j9ieDq9JJArauHgDoqxXyfgckLywdGtsDek1tpts7wZnWTLWdkC5aK27",
  "key18": "4rJ9fMXk4Z3dBaww3utq9EJj5p6oP95VqqeyWTqXi26P5mHrfLZGu6VC4yd2cpiZ8krdxAfHWEgfVJmeS6p8rENA",
  "key19": "2JgrqceLnxG1g8QRN9WqP2q1fomiyrMwcfLCfwCyghqHYmeNb1a8Jm7b9XqDyBUUAaHcJdUhRkewan422KGcuYgt",
  "key20": "4TGnKuJweCG26dD1YZvkfdsaCwmUayUPywqtDD8Dsb4JrVfVP7aTjJoXCx3w9QtUafDZ6TbBPvfjwMXas46nYN4A",
  "key21": "4ZsyDaBiCXkvYHUT8AA8N1KbT7Ni29KBRRVKHbSbQTd2j6vBC91A75DtSqNVAiph5F5jgFMsfX2LzErTS8RMkkt1",
  "key22": "6b3bGSz3RtwZNwRqjzU9oDDeyfCRuejSY534gnBt5cYsMPuPQYqmz36BFNSdapDNWCTdnSZWMMMFRCmb2RYam8u",
  "key23": "5aVRWCN28fzto38QHo69mVrFspCK5v2SjNoDhm4r7LiAgZa8ExZL5ZePBYVCXsY4wYzQeTUSpPoDzRGRD1uV5Y7s",
  "key24": "45BhompykvkXxaDsXxLuGoEwiFxkZnQyevNt2nip5hs2m1duSPiU5PFwmhCY5nPZwwXsY8mmax8PtwzWvZF3nMnK",
  "key25": "4ATGZNHqxregWZ3ArSxrA1R4mhYiDFfmAfniCM8fXwDafKFXSX3dPPEVZTufwBP2k96njtS8QVucCZsLAn1g673u",
  "key26": "3pJV4Wp9oqwyCdJP7xWARNaGJ3HkpkZzpmivvQqeepMfnUh4Uj8ymoCbQSfn75JSTrxFp7HKwnxHr1sMmTB74Mnf",
  "key27": "5c7awZh9rQPBhXhTnNSTCgtCkCdbaDwePTm1sbT5yyYB8eQXhqzfHoTCaFozG2bbQ6XJD9Lt6e88tSnWdbDquhxq",
  "key28": "5efTMhvKN3g5Pg4zcMyKYMAfTMNF4EttidUtmgzeyHmCXYB8SXmgJnzpK5NUW17YJi8EdCtPuvqMMneXDQxySmd6",
  "key29": "2Fb6NVeFbnYaAwhaSSs2Ry3zMmmqFEodB8D3TjYSsYHrDnVHWqRgKHZjHqsPg5MmDnY7KGhX85vpVJxR9RizRDSm",
  "key30": "5xZzFG8PqmRFybCeyQY1Gw9HXzt6DGH694BR9GEJ4YredWBeWsSKMqG1enJ38fDArYqX16VNxMkdCZ4H6ysiAzf7",
  "key31": "4RLy1opdgFvWgz6Jju5EnhuZvicVeH8pvZPcjuv18FkJtUgLbjLqAfNVVEZHrLkjB9qc17DdyYgGu6hSZAEG6bHi",
  "key32": "o9NpSPEPqwLWAUyJMvfVtMo5NqKyAypHdFCAueMAFYvjD23a41sdHygmgyMokJGR7CVD2bGFjodnPLRbatQQbUr",
  "key33": "5hE3Vfuak7pm3q7PvqGavW4dC6RChbr8mbbR2LDpa4d6C6Cx5HaTxomD6aEprwKnQ7VCjHHr3QxU7fKYBHof7FZq",
  "key34": "5JuWyq18x11RLyVcC3CPhrJNXHtXzbHCEjwCizx7RN5e9kYC6f1E18hpiH4MQbiGWEaZDSrDyLG32uJc5jaJfh3g",
  "key35": "3ifj5PQeMuNPVzm54URaFfXKaeFBvKsFFUopy49gZgLp2G8qdftXnWiRRQgV1nxmCBHtnLTkQnn1uEk7Dpg2GZ7",
  "key36": "5aPT39b9QJBmiE9tarQhWSmLKNiXb6B4PG8rAq9ossPh5suxgh34Whdc8YUYWJqAU1SGpHveKA6BQJ9MBCDgGD1q",
  "key37": "5zaA4iNXt71rDati24yaiQnGMZWqC9CWAkrZaMfZyKg91pKDZ5EaN3evuED2Mm6228kj5swfA6pSxtxRfCyuVKHh",
  "key38": "5S9HJCzb1XvodDWw2AZVEx2n2uv3TRfgQYESk47ei3YKgthsJAUovpcLgsgFbXaEQcjJtTNBTdUX8FqxxNMxbFzi"
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
