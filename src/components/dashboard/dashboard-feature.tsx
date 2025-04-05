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
    "397fNcgRKRPU97k4AXNnQnb2MXPZxBTNGAQFiu5EmwRvH3hu7vftKijg5nXA5feWJuaW4uUEYBWLRn7b2vXdjbr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EshLwtVGVztjEhf5KzkQ7eH9ALExQLL99Bm7FS8f1EQebmTywovB2nujYXXQLj1j7ebuPabvUCQUSV5tgs35sU6",
  "key1": "4QoUwL6ffVDk9pW6WXtXRKkbzitTu16vxzAvqggjt7f9T9osgCKMYrJqBTnsDkVnieM3YKtDoQefLU6Gw8mG2UoC",
  "key2": "3qHGBYcyvPyTBsvtcDTK3Ep4cHwt7Z2TWxYNDHqFBYEwwjetXGktNmGzqsWX4cXRav5cWcxvgBaRUMtiqFvVcGGH",
  "key3": "2iW1zRFSSkzMtgsVwRphkBrn7JYVXawvXSdRo9ACvzBcALHErapzYXwRUBRe9zWv6oP8HgBCyKaCu6mQ5FgSmtpG",
  "key4": "T1YTAw7Ntbv7VTmD1NhpZ4nEmUJBEVVQXJx8pm2pphwhAJqZfv4QZxgwqWmjvH4MHvV9VTNK92mKMnqQvRwwXUu",
  "key5": "Wq6MQx8QWV4fsC4xGiMzGSBc7kVP7XPisJcUtB4MnsHBEcJcC5EJMRey1QuGFBCRXowCaiXrvTKww2qtHo45eEV",
  "key6": "5ktC44aV49Et2gDRYVegFsCoEKT4uJBhgZmUZgwq3LAgXRP1JpDUXfRrS59ERZNd9BptiA4TBUt1btcN8WT4VhPH",
  "key7": "4q5jeSYvMqFJZCHTitnELBKGP3HcPM9k4pcetX7DAfQcMEi1fK9vjsuPc2Ta7SYWgyzYARNacS2neEGoD5H5rJmy",
  "key8": "kaisWMEDGSTRMut1ocSX81RrLWrsP3veNmHqLaWBKVH2VfcPVFo5fg9Z4K9utRkaiRr9XDLUEpoUaTPpF6FGmP6",
  "key9": "nPvwrxYxMfFgDKHxH7dTuj4L3VkFBzz13Q1JdPtcMZ9dr7pxCg59tghkgaDuVCzuvMjHayBoue9H4KM9RsvwSf2",
  "key10": "32za5uQNFUoj2xWrgUAQw8m5rgMfsfXxxxfmmMDdhUSHBhfxnTR3srntSGwmtnyD6wsYG6wZBtpyUtUdc2YX9NDT",
  "key11": "4hni5R4VqiQs5bMz2fnWVcViK8Lpy7zJjXo77gfaQ815ENAs53QKEAmKmBH5PDC9DzzJeBBynYmbEVRjTsAhVsV3",
  "key12": "HUwW7JwnY1888pwunGZRrHDKubPUD2SjjmdTbqDZYpjbmL66Ro9UDcPTpHxcmN4jXJkHxWv9B12LJks7k9XPQfA",
  "key13": "3kq2LFKKXYJmDPUSdu8vEBuipeeKsosCa5GCPex8rRRjifQrGwsvgQMSKo7XaVwfyKnjtFYmyt4nFsdd3d1jaKgd",
  "key14": "2pMgzFUhWZZQQj734NYKi8S7nEkyFztUg6cK1yWnn7xjJJUX563JSb8bJVu72g6vdJ9fZGwfYM2T6JwjjeR7ZQCz",
  "key15": "5WGh3aHySPRVLeyRfiiUbLB2JBg1pG47P3PKrEd7FaEs8wJkSrmkgeWv1rkxjh4HpKi57XzYcc74fWYWj4tWPGeL",
  "key16": "66pJkMXxJQ4Q3dJskJXPBM83UZ1imywCGVZ9F1E4oS6j29LXJnjkghfzmggMDMBj8DioQbPLn5yRTgKGLbGB3jqN",
  "key17": "5aHmVi15jHkuuHX9DByJP123fHNdfGxw8xbTH51tHSnYwthVxbWANyBQC6RT7CUnKjLTWVfMscsEEJ9pkXsGykmA",
  "key18": "4M97sEtEiZDAs9WUE1YcbuPQ71wizeipi1KXfVmU3cMFzKeRhJFRbpGPEMA6E3huE6eToo5a9yaEm1EbN3NiAxnq",
  "key19": "2Cu11HdnCxY97i6MwgwV1JPcFaHtySKyPyZHbW24JVEs4n1kiFb7KUcxv8V9oUJA3FWhSPTu7AeUzp6xyGN7Wxv9",
  "key20": "3W8k6whaz5UmrVFVMRkYpNV7bfxthS8pDpHs633V6rngU6NhZvRULbJhffK1AzQfLRWTNbP5UcTV8iq4QNS1AMcG",
  "key21": "29b8gK8obmQNvwcr5bf5Tzvh5xUJuVofdJ6zQ21PnjX3qDD71SHWvTCrJYfippjq6Q1Jz7NUTVWWUAeirZ9qMyXT",
  "key22": "YUvRvvhHS7cQ7iVstA2hJyv7LRHHGmaGAt35YMTCmWgkyrkkguRknXdmhudHTG6SzyiX7aJQ2qAZrYMxSRsUuFM",
  "key23": "5yrCznW93PF3weGz5tHdkVATxGrByUDL24ZiSCfr4uKYPDkGnt9y7RGp7Kcbngn6oKXQWXJDLdxsMhBFsKruvjMJ",
  "key24": "4Pk8MLcZ3Hqr4RzohE3WnSbeNYEgYmK8TrHfpTSDKHCXZZRwTUcmHfhFtAcaHQBMhare9SBJM5U4GyBUPGgGorZa",
  "key25": "VimJg5EJomTykzk5YRMVq6gVve3XURYiVXcuCEaHbGRYBAMSxTUS3gJ1jGdwBXLNFmM9GaqMgbrm8T7tm3wqqrP",
  "key26": "5tg3psDfqSGG5G6iD6x6YsYLhhHjHpovWtzoNSvs6RDA8R1fCzxCHkmrP3KvbS2PtuwfxXEMHuPeHCgGrDa2Kyt8",
  "key27": "3PPqbL1gRoo2C31SRhHcF2u3UQTe1UNkbzoQdw1ZsHCwThmiyVQTYuu8sUL6fzGxhpRmDMmdnGVRvA2cN84SvJQh",
  "key28": "52M2YZRTN1VD9x4zgtSeRCCqXcCpSDaK2buqLokVmBR3eceJHREK4RyVHERJQAgBmDScKWJ8magDoFGnCigosBSA",
  "key29": "5tNp46zfKPyBahEJ7KwZpAtQcEsrjsHnm9JSnrpcD4zMCt3LRinwiFTaLCe4zAXqLQ7WzZEiPWwDRQ4cFfFvykE8",
  "key30": "4TCns7vDpFQUKH5tWvoVj8XzRwbnbN6cBP7cTCymfyGCJTtKSm6ZqmiqSqoauUEPyRxHZDazBBVZNqoCT16XfpyN",
  "key31": "3KhVBrh8NN2oxX5NXWncpnqov7fJ7wwL7p9J6DdH5qo8EFUkToBCaJr7YjjVGN5yBSQpXpHK2kRKx6x5STjjF9vb",
  "key32": "YHg5U442CRv64mrmqtVRTfAzffnYW8UhUT2dMRc3MuMnNauqMhrHRvYkd2pQFtBfEVTxb5iBvqpsH3kjPm3XM6z",
  "key33": "5onvZaMmJvov8TD5cfMwnstrCNsD8GUFh7pofR4VZWm8gHBsth4tHAzH8etji7Hd4twZgMGG2We9zB6FK7L8e334",
  "key34": "66HeZ7Do1scjmkWLGAu4wuoUNPPVQeDuvvswJ5Lkq3YoJ7FiU3aYsRwAbiBCKe6EXmBEhhs25vWDJP2DLtTEYKan",
  "key35": "2NLaUSFWYyspse1X7ugYmA9NosnGPqziMU13BGJtHicfptrDTm4QkhxfEK7qupsc4JMXX32Upv1xCvu4h1RnRRcY",
  "key36": "5qz1PBHXkFuf5eSPKfbFikgYPEYyjhEHZebJEyY1zNYbqU2iKgMetiq1HjcnDJmkWfPZNR2UKzYqPynyzSsmX1wE",
  "key37": "4Dwejvotu9ezKsknTKHt62AXZYxUXoHhFhnsM9GfNJGPgFCcDDLMYrC1t7FhDVkvXVe8YwhywfrkmP4xSoVjonf6",
  "key38": "MjZcCga7PRgjijiBUYLfyBAeo6K48jroxpMVrHbkWWsnMKCBQ2n6CoKJyS5CDXC7AaBxh4HcCEAKZWPXoxeLaAb",
  "key39": "56dN2wLC7nvqZQJXaj4fFhgDcFBJJwDAzwPbfr4FV2heqxnvzEteYhRkaAJ4ZjrMVamLMcLuejXYzHZ52S73a3rF",
  "key40": "5rsgYQmCGS89JMMxHwsoirUA8Wa8L9yD7LXZBeoxeXQt5UzHZTLrgxHA4VGu8ohrBiWBRgbFfjS4wyDUYZfSDAJ7",
  "key41": "62sR5d6kuAQsi9EyspVix9xLhi6urA8Yhg5yhaEAejfDwdqQuruMk3PUu8aGWouVLuRmx41QYzH5ZMewzPEdC9b3",
  "key42": "281RPYFvjEq4g5EHGwAPZkR5x7C1RgPs9yXp2UfRhRdgicuFecRp45vCzbo4Ng4pQeZLQptpDDVDHAixrxJEgGn7",
  "key43": "5gH6puge8PeTs9VwkHLGenyLihvsZrpaoyftuw9DEHhxawoYTK15mxe22FLSdBoDuaCyjzZrvPTcaKsC4FhMzCXn",
  "key44": "JqFwvi5hSbotxDF1H5kCZRWQg3jvQLoNAqAEkyjaThP7HfvxDSVTuxo55ThdPhcyTL15zJ38m1CdXCyv4GTSpUX",
  "key45": "4arD5Fwx5xuespu18W2RGzBMni9PyqUQhuLjwa1GoWzd6iyDuRYU4ioa3CVaRY4oZjfkZqiN8Y79wmjdNoHxMoKN",
  "key46": "4LVVHgVpBp8csoDNYELJvvTy9bPUcASogVTBrjahnzGFRXnu8E8kRYoh5JuADgdZi9rLNUsQRcSjZV4s9QL8fDzC"
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
