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
    "uuJT6aQZaHLQkVki8gSG3A1UyaEPyCjSUE8dbAWAT34Yi3gzSQN52eLXx6jo1ubcrtjjRLnRhjQ6Uu8X6T9APMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYWvWScLCk7tUzjLuEazNpfMLuZzMTtCNJtNb489VT6Uz8uctoqcG5Zw3Jaceb9YrhyuZvD4uQ1FWhfsHmLaCzG",
  "key1": "djefh6VwMHrSSv9Smhs4nBG9rcPRaGKSVgmZjorybmwArevXcKuC8s9KVLtggu2PRr9DuLREYYN92v38wPJdam4",
  "key2": "65qM1BmjvQNG9mnw9GV58ZKQTfESA2AX2YwbB5JK8NTvrYcQF6P7ed2S3eL65v2cj6QMjAs8oZVvd4fo2g5ZauQY",
  "key3": "2RmKP4iZrNshgN4opPMkX4r95U3m3g7EHQfpKeBihkqhxWK5UMLT3kawDLBsxszyFparmQofk9oyeqGX4GRKCsk4",
  "key4": "3LEwuDazQP8Q5gggCnzYPDuAKzAbngm7tAC9kZThmNwG49SRK4WyjZUek1qSGtEkpfWrUUJLE7WwFNFFyjriwvGc",
  "key5": "5WuYmTLvVPKEp7QeZTZSLF5cew1EiQMfFhsgUeaFpiEuKCUTpStsgNzpTN9u1hP5VbLyjZw7iE3a6dj7XxwXGbUQ",
  "key6": "2LVxrVf2RywrtySvcyv3nLDaSZiVHxUc7fw9jVboAwJWFqMWcaB578ndPLqyPXFNvXg46Edq8fuggihM7su4jgcD",
  "key7": "4ykLF4zNmRzjgWbRGi812vKT7GpvSvYJWVANFsxnJnckyDUBdkiTT7LSboE5BaTUp7qSb3CW6nYdT4qUbazBiGSm",
  "key8": "5yTACYWdNcStKRSV8bjwadDxeZudbKtbNa3rj9StBe8toMKGkoFL9oJ543MWc5RM3XtPhEGPD5u78tbgB3hJv9mh",
  "key9": "3oB163cKqqPkdmJyGBwwfEciG2DmZfVVjoojXqz3eJBQuHBzZNKqv72MvN4zD2BtQK7y8DPgMkDBUTMNb5kgWprD",
  "key10": "55hzR1xSqmfbtcgVdEbDrPpXncNekiVRLYwef3Ene7JawoV7pT3SBaPRabT5D6XxopEyXM5FMvtGYQF7c9C5mTGL",
  "key11": "d6ddUK8t83Snn9cpEFLeVgrWJUSefgxDQErhffAtfHFPLLt8fcvBzn7Bo5Ahu6B87SVXzgVxHoVQcgYajwLsh1g",
  "key12": "5zcB784hkLutms5ExbaSgSiyWz91PjFGGfhDFA86vSnJqtVvGjmD2DMFgTJeizWnjkLoHeTVUjSFdBFt9v1z8rXR",
  "key13": "2RpAfeE2qYcxhpKjgk9uYXHjyiA8R7ugNY7dCRR1BwYRxZDMRhs2hSMvgfoGmtu6mbcQnn51F9Qj2Nn4hbrBgccF",
  "key14": "2a3NNcCcMPGHDDAe3sCtFbggL3VXYC9KyD1rJFhQ8gzegmiMB3XoW9asXpcgstnmMvKym9cwHbComcRrWZxcCfWw",
  "key15": "65Wequg4SKdRpuGzNBixVAEZuCzaLEDW4ke54RLT7EjoUwWJ8rM1gNSsRBpEqTLQk9h9hbHCeYnEAJtyTL8HyD9c",
  "key16": "57zkWdZdj3q8JtjwCeKWt7kvhUB7ZPZa7drWJETBJokqTkAfXoDu4vmNxndamQkZhSe9E1EQmuTqnpmVyLtCHaPm",
  "key17": "62yN7inYkp3rrVTmG6jPN4h4WcuKnrnoiLquaepyYugFVedTFtzBo6xPPJBHZdQyfnSUfkxExVX9j9XCDxQGy3BT",
  "key18": "2zCfAUEQqJcBmQSZFfrcNmzV91UWNYMSwCL621qPAfUSjKgpr3Cq2FGQhrDLG3UjjjZuZawUH1CPd3MwoRnaX76o",
  "key19": "3aLPLktwiETJRTMbDc88kEKRUueGCwaYt9MwXbyZFfh4mCHxRd69fhYZDatzm6gn9aGw5JBnh7bwCSsSTef8G9Di",
  "key20": "2TFXYD4rhuzszZMRPp23YpgF1qNKKBmvfB7u6ysjFNoqZqARUuBCm7C5oCfrsohVfTZZnqn3jdt9vxxFByP9a6C3",
  "key21": "2nYfqPMPFqNUNsm1kWwU7e2ww5WGa1xKMpstNwTTFTg9NnBPDbjGSkuSUvW6GyCEu2M24WmjxAEAbiMEspFWqRh9",
  "key22": "4bx9oY4HUYJ8iEkbR7gmGYC5eoLwcpkWTkN3gE21Kh8WpjbeRYLX4i8c4eZa2o3qYkTZ3RmpCjYUJU5dGfhndTUg",
  "key23": "5G1jsdQqfdYzX4m6BFxhbGiya9Qk9tCHBPwTSLAEA1Cs4F8UZ94VcdVYn3xdWgoyM4KnkEQYTJc8cdiXP4S3M4hu",
  "key24": "LifHMYTXBe4ufyY5VFJB3fQdjy1kj6qzac1SsvhyRvvbXKGt7S9zb6Py75nqAUGihDAZwoPynSNu4tG5VNkoxKz",
  "key25": "q5urFkzkUD4tatyRLTytGi1kRhoZr1AhiSNLrDYfwcwRBZWBuKFS8TvotYCe9B9K3ntCxMMSjMETDJTf78Aibd4",
  "key26": "2Enh6BwgsvcQjeh1XMGxx2VaPMBYDFf477ttk1uWdqmh4YLDZVT7GapTNMnu6m7gDZrswkTfAD8Rxn4KJRtJmXU9",
  "key27": "3QT2hHcKVMtmRv6bzWgcSogma62Fp61XU7TGDYoMVpMhxNCPdkPvcCxoQWcdaKpBHbG4PNeWnFcWWpKYL8N34sdP",
  "key28": "5WM5zLpKVTrQaTri3FY73VZVFNbqFjkPqn93UZwbSc3GBP2rKpoEHWDTKkqGvQaawqhtn4aDXmoh4MhzZmvN6LvB",
  "key29": "3CqqyY6k1fmCFoVgUz1tqYLeZ32F7pGnp2it8HWUhd8DrAU2ftFPBMHWAe95Bp94KMcWp9CVfgMZEFrzp7AVxmmH",
  "key30": "54aQakvmdeHfwr1DAfeqXwTKvBQ9iKTKxKqjz2WUen55D8gRnBou9PNXwYW9tNqtqZizZSKi856MhGJDJscHYTHv",
  "key31": "3duVJQwRiq967S1ZPV6QWPqQzhpYVXwQgYNYcNLz59DVbcTVZeCPvuPgJXvDo2qQ2HFbcZohQLgyvTZnqwTRatMc",
  "key32": "jpkCJjjdexN3M76zgB1Ueob1NrUXzvqGHXJfd1SYnCSS2NYJDr8rzKsHma9qizR2jAv9P4vCULUTQSCtgTYEP4A",
  "key33": "3ecRTpc8kpMyMBqRQWWucE78J2UqS1U4Q6hHSdBBFuv578YBQwU7gNSVXYQyEHJNFkGKTfRDa6i4nJjkQoNJE4z3",
  "key34": "8K8v14emmQS3R7kXU4VPShhGo5neT8BVHUMqinZFWGGYcefgS9R5MeTaLuEnxBFd11bvw1nDn3J3p35H843EWos",
  "key35": "3BQJmyK5PiyfpWp92bXaAUqkVeBHUh2Fohj5WmqUcASxsAbd8dXzt2q45jrXpq7G84KwyCBnc7WisgvhgVcS2sRC"
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
