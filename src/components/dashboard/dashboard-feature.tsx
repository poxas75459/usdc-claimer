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
    "KV5JZ3W5jeaZEkhSiW2JGrApYPb8YuJsmPuAyFjXcWaDsjwuFvuzuouZP2iSLhX2B3fX5XmkV22DMeEdDYLRTHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VuKM5uNLCJNjfCGCbXP6p2QWSeTsvcmmmHhfWgsSLDoKs8iSQeLLX3Bw23E2PwiyraXWB1suFPJdff9EvXN4PCb",
  "key1": "t5D43t3xjR3GYL2sHAi4DC9mkSJ3qaQYv5jUBncPwwAzLSk782e5keurHHweobvm8rnd8aKmppm4674NC21cdTA",
  "key2": "3z7ECLPkcwjdLjSe5XbRtSgu9aBCVmf3TLqPxAf73BQQ7uTQxaASRBgun1Lk7YAE7a31ZHyU1vhtXWQcMVaVytCj",
  "key3": "5BQEBCgJx5ebSqpV5yRswfGdM9B46EKDdUjcn8kzyvD4CwjMF2ZvybcUEBUxQ7jyowMqPfUAvVf21jzYFuU54KtJ",
  "key4": "Fj3ZWeMJnNh1BBZhkezHbBfdYx1FBpLHzggvwnhNPyUBfz2tPmUHebd1mXZLBUNFhdF4upoTWA162fe82DzJkwR",
  "key5": "5yBFkeGvBnuFWzRQZ2G8o2AvRgFL5JGZgRhZgjHJbWFoKFqiTCk5oewE8LxEzFv2DxcXaB3HoUvJjS5ZL1iV7CvA",
  "key6": "4hcnzpqbsq9JRDHxP3FtNggnfG55ryYonNfqPPtFgS7NaQNgp9Q2MmRVhEg16EkwtmQGkLGfXKpzsKmxn7RWZs6J",
  "key7": "5LggxkLcVkS9Xiu41JaveQhiRGT9RYENRMdDW5irnoYQKnLEsTDXu5Cc5ngXAyWucLg76eeHZKQJvf2TbT1bBoe1",
  "key8": "5i2Ni8DurmPQ3SiTJcR6Lb2S4kwyXo9vh1GzebQLeDhGGNLDosF3B7x3mCZBsYMiCUrpuH5gQR6EJax7LumSsLXV",
  "key9": "46c2CUqZmM7F7gf3zpk4frNekpch7K5ugCtyAfe4Sz4qMuWxwdJhTkdKbXBQxrTUEoqJr6CfmFEb17xwpCVtAYEh",
  "key10": "4wJ3fhCQCxUsKgHB6b6cAocdEmdppoiCrFBgTnKeM9jyadJgbWxJhyR79v8p4uSNdo5VWEUZkEsCgRTpMpJeHSDY",
  "key11": "5r5uoL3ZHVLqtzrpAohgJ2aN4zTa3L7CcuFepxxnyLDqrqW8hecHmJTcKovJLC5PzqW5c5zRh1NefeHesS8zEBh6",
  "key12": "4BWcjbYfHoMroZ66n1tAFh6kRjSJ1mfgVF8ZMaLhxSErWWJvrmGZM6AGc1jcfRdVaLfhUCtJa9mWdfrLVd8PTZH5",
  "key13": "4f2qCXD5urCx6ivorahBu37tm1aRzAVABUnvpBbQ6YM872kN5urEQgpyEGj6ffQimNSVEy47Lndbkm7oFTiZcsbv",
  "key14": "3YWZ7xGscSnWzCkXgaPfoq3VqUn4aai3T8e9zN1MuA7yF6p3pBqdbEvpmpZb7o7CL7wTnrgp1DmAbJn6RScedWQo",
  "key15": "3LEMEfG75nsG2YT58Y8bTy14ZrDoiymvPgrCZ9qyv1UcLxsXtrhkxdgTmd5RFu6nF18YqyL6HpmNXNApaAztdqqr",
  "key16": "87HpsrZvvcfpYUMiLM86v1eyfhpz4TcFH3ccAfDYi2DsZ24PX1fTmnTaeRY1DzVBQ9W5LRLPbF6EUkCLR6UcqCQ",
  "key17": "4tsnR6mkvpPJsUjQErtZtYv6ARoUE5ZktkYHz4h9eUoZ88z7bmvf6NqkieKWXMRHH2PfR4vkPPq1qL1zZy1uE3vY",
  "key18": "5WtBrrv9kWGtCfxJt6tVFHr6BeYSADCyUWqxxrpsCRbwpq9r8dTn7hfXTN3MTobmMNGDuG38vQEqaa7He2muGZL4",
  "key19": "3pkkXx1xKS1CHvRo5nizzJGUWgVUucc8mUNRLwUv7Sju1r8zFnHf56ZS8xNVyNAurkJuvbvPcMAFmchqcqGTWPbX",
  "key20": "5AkRH8r5Mqk9a5YYERr5NwhnQnuVATMRXF78a253qwoZQi4GWeKMuiKvLkcu6AWwQJdZKqvXxgt8h1qSZ6T6ktc1",
  "key21": "3ZjZacmL81ottrcLTRNxoFsvXWeDNaHFdbFWCtZLgf1paifaJSbBx1aWR17suUxtuJU7AWebgRsHrcU6Kio6kWS5",
  "key22": "51VYELPZLZJyd95vyg11tiGz8EE6bTxdRRCGY6W3aGPZ6oA7PtxhReGBCAGxtiisemnf2cBXy7dkZ8tBJUmkXYGq",
  "key23": "4UXH5U7vAiYzwxiwTW52MxSGwkqcHT1A5Lv2hZL7uLnG4yYz4EjviZSR4QH7H3FiZovDpJxZ11SKnMRxXtFquWEx",
  "key24": "5SR5mVSc9kiGVgQ72VLvsnkGrPVk6mZtdEk4CFjvZ9gToQCVCmbaAXdRvKzgCapWhicBqzkrAvttkEPkHfdP7MkS",
  "key25": "4XHUo5AuM8VZk4fcfHX4b6LxZayMtBGf6rEPWVb8g5v5uq4YomTDBED6jFvQxTSSgnMvyW4aqaP7Ue81Xq3hzH2o",
  "key26": "2PsvCccG3sUvV2fyWUYw6BXMT1pLkfgKyTWVuwCHHK3ez9CsuxB1t7gJHrRc1cMWEGBpSw96wx8VytPNeSbNfavc",
  "key27": "365bFBCURe4hKRKsFZvGnr171TEAmsmBLmSudgUwMsQePBYiYUw538uUDVK4R8i9yuuYYHvYPo1ou6Yj8UAmn8rG",
  "key28": "3PJkuLrsgeoJt4F35tYHQrLdNEHSra6n3dmazytarZGmtMq8A53ooi7awYaxVf6y8eXEjEYJC9E6AbsBjZpuUDW1",
  "key29": "3uJhEHYf1dBQW3RUuhZ9rz9qwbhvGdSsM39p3axGyzsdSXnKDZcjxen3k2VtkkKGc7rx5xyBGJBXLKbk2oMZYmsQ",
  "key30": "2anHzHMV2LHyr5rXqd7bPuPycLHhVvCKkesAbBdmXiJ9PZDjYJgunucb9b6CrfH3WMHPYejT8BXRMvWVZ36KZKL4",
  "key31": "5jXyZ6CUWF8nfN59kgj75hyLiqVhTo7WdYsRwQXfcid2iQuTNG5piqjmfbnASMStHK7vLYnyjHXYHVdkZsyDamrj",
  "key32": "4SgJh2TDuGjtqmVpjBn1Ag7UwJazmW2nSeGe5cyMoFpPwPqLYL1jxLUDPpr5iMnuE3iJ3T7imnin3YWoc2Zs6BGA",
  "key33": "2DNAD7GGn76EBrXehEP2Ux8XX3XdN1iFW3w3xf6F6iZ5Qy2L9cUiooAySAi6qEf7oETRUa7L9qB7czj9p53uNa2t",
  "key34": "ZvjsguYEyQefKe2R4TxdPGv2n5ajVRRQLfFStvx27Cd1RELnwfgVWHEC5jMqoD8x6pPEDZvfS4Xf1i2UABhEyh1",
  "key35": "SHmdj4RZetEm4j6xV1Lgg1Ln11aUSX8T1bmeCE8ELzvwaRh25Hh4WufFF9dYXmejWzHFpEb3QyHbdVECE9sysdE",
  "key36": "53Js4gLQZxgaeqyUBir2i1e1hdsRiZR1cAhV8JqSSvMBmGbGjNoPpbumYbg97BdGjJwfwFRGCajmsK1gE57k5FJC",
  "key37": "3VzmdGy9ASwy879Ypm9sqbeXS9kPbwU4rexyYXEk8Cd7jXDDxWddxSMTvh1ax2mNZ9kZA7W5isVPnGXBJ7E2ZAxx",
  "key38": "3ws5AwQiXhcUxARp5Y9CPdG9Dz88gCZAQXT7mnYZSUYF38gKnPfHwDrbPS7xB4T5MeGrBegxbchxitJL3ZN61PYU",
  "key39": "5qv3B7BH2cpS2PUUtkwxpwuqedjoGaQNGFqyfYAJb5D1sric2nhkncSc1x5SqzkGz1WrZg62tZiShvTP6dXm5Pds",
  "key40": "2fSpZxbQje3PZ89fAW4gFdfhmJArxWtu6DtKerGMNWXJhU2TDRLo3nQTdwXbqnQ2euHtYAzebSKTEqbj9CZyPABF",
  "key41": "36qk7FTKz1G155iekNjxzDxf3o6dTquUnWyRVCGvD4Ui19vG2weDwzdfghBttfzL55MrAQaQrpdYPmPRfJhYvm6e"
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
