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
    "3gkZgd822D4BEFsod8HnLNq8Ffso3rpKqh4PUTzgMW3B7tbu98eBrtCNSzwbKgXQL94hU6ZgQsWACXWdHczoGe33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vFqQdntJogc2VPhnHQNLFb3meKgrshQvhEM47hbEr9SDMNGiysab6P8qx7BRhRfaRDGabVBVQAgYuYRFTvhDLDc",
  "key1": "3YYtpsJuwXAgqiMpT3Rnhckbq5czzx2cUbFAjXikeR2PPzP79ZLrbLcEhxevog9CvWMCA7tNtcXTWvPe2WsRWBqT",
  "key2": "3TNMk2sAUyu9pLsATaYtRrAuunKoEQAuHKWnYv3bErHxbocFrz3ki11Sod8BbGizGgyPYYhxz8nYYXEi9JeZEPWo",
  "key3": "2T1jWjJLrNxzbcEYa3psdMxahZtCkYv3mv9A4Xrwi5uhoRzSx88uLFsurkKTsSEPiqDUKJXg5hjWYhC2m9TrtREo",
  "key4": "4afLf9ZgeL4jGmWV9R2MTXceZAQkNjJtqGPNcX3LEFVRMhceZai5nH7osMPPNZNStiKYHSjMHVTrECNLz334CgvD",
  "key5": "5XaSJwJPf4XS9LhSBi8vn8ufTysExcoHamUXFpJxoMwgDGz3xsaWtqXq9AbUf8Zy95VsWLD3TqoLaDjtibV7MkpV",
  "key6": "3JJFKehN3ir2AboULaJTYRUKck4uDejEMmtkn73nuFKWA2fCF4kTc9LbacAkqaxJ7UtBwfXLazhAstwAcuh7hSpk",
  "key7": "2BM6N1SCXAYKKJHKrPr1xUnwVaYxcVpimhBeUZnaoDqfEFuwKaU6iMqoA1iaqyC8An1m4n81AnwzZSQNu9XayKwg",
  "key8": "4JzDH4FpDoG6e8of5iVcH3SugX3NqJToAVxrdmBEqGQLhHuc5V5w8MVWf547cEjMMBFuv4VuhnntJNJ8UHebYfag",
  "key9": "4xKpUEWzAeFbJr2XTrjtuzGAMEkeS4siucFWYiYN1JDXUoMbf6P4v1dh8svPyGmJUZKGwyFqUi9ab31T4F2wdbKN",
  "key10": "WxyqXLHJKZ5DHP71ue9YmZRz8w7mKeogUaMsoQfpu4xzaUVg2EefT4t215WmGy2Y6mu7Co85GB6x9bjD1bqSBzj",
  "key11": "2RuxZVLZyjNpcT6QRA5ApnTgUxdCeoYqETvSEcwJeizTDwAErBXezHNhV3NwNTTx1fa8KXgZAFkCRRi9KmPiKGz7",
  "key12": "5R2W9oqjSYxaAhz6obyR4tUxGQtHYCjec9wHD3taKuJFdNnuYxSnPqWFAMryvYb5PR9y3GMaFP23auAeLy4wXyuu",
  "key13": "5fiqTZXpFahUAUBp2PQLuogzZpfZySDRaDdp7bdyvhZK8HdDcUPeH1d3DpNmKhXG1nnwWtbsbp7BoBeWfnHyMNFY",
  "key14": "vHJTHbqAaS96bv5Ph4j7nvixvHd7LTKUh2F1Rae4WSFbV8pfYi54bNZ6PRKVacSYpq8fD9mstF6KLUtCiuK6wns",
  "key15": "4jfUqBnB5wGNZncTBMPYdBoadvaeGr3rVfHFokcgY6tgUCjwAQtjA2fqKrbayAswjfWeuf27pdTrR58fwUyfK7Mk",
  "key16": "2DcXVbztyXyMXcTZkhsifqMCUzrc2wKbqY3qGXW1FiH4qDCFgCAMRRZy9E4TQ3n2jdkWKc4Rxjy3Nmrcff5E6EWh",
  "key17": "2Fh2vhxs17P7QKXdDzXBRJCMKfeGfhxMxRKbTQRPSweCGvQGcSD8mBdACQCdGKG651TDY3JqfmQYn1rWzjjKxfiK",
  "key18": "LTtQvDK9GG7njBMeaZYWUmEGu7NgLsVYk2o7bJtxf87hVQdiMn4poM4FLnGi6CMeBRH9xWLKjJAa7iXEUwVG2HN",
  "key19": "7A9HUUJ5MbjemXqU52P6e7vmqdb7mUDCCsgi1SHci6F33YGTNoJNw29iAW1isagoA8q3LxxMbpbYiUVK2wcHuyW",
  "key20": "41mdU1T7puh52H3DJjuGNHLFkqsbRxF4KkGXtoTp5LNGWNuee79F9sgpPLKbJrpyYdA8Mx5WUYsTs5Cz5mfs4YzX",
  "key21": "36G7WQcn99A3nPiUJ5byZqDhH6a3jK295bqsHynVzdXyAsZU84TBn1fBVq7NnSqNSWg48Hsb9R7nA26K6eERRFex",
  "key22": "Jj8J3xJk3ptsZ4pf9hLdYskaE1WuZ6Rk1Ffm5xkU8rc9H33EUny3RPr3B9Mg8Jj8WMcR2Mnpv1z5ySgvjajLkQD",
  "key23": "4VDyUCor6t3kVUqWSmtJNDh8MBhqENWSdMnqywFF53AEc6zpXe6CWDhg7b1mQjfFkuBWyjCp4oh4Wzit2rqgxUUd",
  "key24": "2ttaz7JVrUC6bba8UUjMYP6drt9iETCpjAmnnbzFacZGFKVjxMJF2i4yWPeefZ5qA45vye2vLcoq5JZqWY5YG1vo",
  "key25": "4GxPbs8khBQwqh74WGTfEy6qDNTySkvLGXAp9DKykCBQZSgnXShHk2xmARhyHUEZkgavBrLQEAAof7uAUUZ924cc",
  "key26": "2v3TmnTgGU8ZzacYgzgrXfi1ar1wbNZUhWoyGvnFVZ1qzgFYceSiFscrjdHYuqfJGYSg8DoTtrX5QZmLUEjDmbQX",
  "key27": "5PfbBYzNBHt4qQdD3CP3DA6KsywFwcQK1MKajYr8VMGzTEFsZbEoEhRhnx4q8JyADb1XSgX1n3PVhVA1XyC5YcZo",
  "key28": "3n2Ms9zRhPN6fuaUoRgMEHL8rm2XTErmCXkorxAMZpWsznrqDQM2J9Qqadt6Nh4QzHjGUqCT2UTx1a9E1AENWnoH",
  "key29": "5eYnLjg8h2q32o8qEk5rZJ1FY449y2nCpeyjWE9uXYzjEg5neQUE9TkV7KkSXQoQgtfMSuKtKMQ7h9xpNZq1nBn5",
  "key30": "43kyobeX7yt3Dm1iB1CZwRvVW6VKC6W2JThi6DiL2yRGwCqT63K65M9m3bwduSJQwpbqtFs4rtx9ue4FcV67iSyo",
  "key31": "66oxB1yLfARdbc7AV44w5Xu9eynJ1WPd8jK5Bx4S2FS1LANbqMLt6VyKe3AhM9UKS14689KAKxuj46Nkyy4Et5w7",
  "key32": "5bZKA1Qi9TNNeaQKwitzs5RMPfn4EkhBRXxmg34tuYUby7boKvwL7mNcU2kfDjo5Mnoc7y57mUvNcTmn8RsYCJEX",
  "key33": "5Q2eDmMcuEGzwdhUAT5veZH1VhoE4HHcXWWE6k8ZU8Jr9mPbdi94HkSVqVjLPsqxShb5rC5YnzQv6x19v4e3YLTY",
  "key34": "61YKFL9phGGqH2eeYqwiVZJ1Y9kxEzUJyHkG39NzHAdQMxL4oiE8TEvtRdrfAxsAL8yuoPKhcYdXu8rr24hGJhi7",
  "key35": "4FeidmyDNf6EcdC7D8pe86ZbXGATpUVGv2Akt9gJ9LFJbMMmagtTBduKWWXXqFZWFB8NWm7LU7bbpARhdnsHn7Hn",
  "key36": "62r5rM5Ska4zpUhq76HtFsj5ZKa2RvJEAoWA25vA8Fm3kftgHgb4khknr4ZenJk9D56Xme7YSY1bsixkpuwz2hkG"
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
