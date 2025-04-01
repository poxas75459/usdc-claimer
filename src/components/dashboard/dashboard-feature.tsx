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
    "2NLazMyYRbQs6z4RsdMXSC6AGcAbRbDupE53gbp7bo6dzJUvf2s6ovcRdWL4jeqek4WuSfJniei6a5FApB1xTHxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qJf71zeKpC5LJoay9qJ4A6FwGJZm2SWJpsi1CGofWoYNVVMzH3fqRnqP2BbWfj7K8hnxQtTkwzEBHt12RKfpCHx",
  "key1": "5AuHWZcpqeUiiR2PAidYpEUAm4qihYSp61ckuvUqmoPpDdaGHuyimQpU2rxnY3YN1SXKBo39BGsUZRx8NAkUY16D",
  "key2": "34NNDtWFezw4Gc6TFKtzuE25dgvE2Ec9i49Rq3WiMZ2ooo9MdwPkU4BRdc6R6eDzm96yKnVLT6shVZaQUrijb8pi",
  "key3": "2GkJBU1ayhv8L4BGa1oL4W3EPkydmv15XQqiGoUJLo7SFrZ6dZphjyyxNoJJjHQy4noG6YR8KVPUQT61NBRek9pw",
  "key4": "3DkacMWZFEoRu7DKDjTCYTd5eqodUPRutwUpWjmUPqSZgeHs7p71ZCE3EqBqbY3fz1sCAmQ7zJY6M5N6VGUxciZs",
  "key5": "4QzrKWB7DqVeXQpc67jBiKvkTfhQxtJeKCx6TCP5cKAQTf6GeYXrWesGFgABFja3k7KMyx4bnr4iCtcjg4C6eXhK",
  "key6": "33mqzRPH2xu5fXzBAVcqrQtycKxgATcZALH9eTusLFKwFoWPvc7tB9CstpspaRf4UBmnWG4SE5foS8BYx1ujS8vS",
  "key7": "3q6RV9B1gfHSn4XDzGeU1x7oUhvAVJryhM6R2VewFSkhoqFLsZeZyMWtcfgsdcNvk3XQSyHtU1wCYYcqXbCwjTAb",
  "key8": "5ZLgRYwRhfFQKW4BQksSt3A8vBbiNKUkesLo6bLsmeCZxLNYpNecamjxnP8jMyXThmh52bmXpXcH6Vj3pZ2Y8f1M",
  "key9": "5jjfzQnFM77ZHVEmaA8ibLsXoc4WjDtNb1yYuCcckRtwTN2mdqk9uff7h3YSSgbTjbw43dDTSBmyojieCMPk9rGc",
  "key10": "2vYXWJSh5Ruh1Pgfp7DNPDeLmFt18Zv41xsWSnJfkg8QhrHt26dfE8q6YhKuUWLi1b6bmT1T4AV1o46gm9TAM3rx",
  "key11": "3Q46QwRDvjqRF6rYomsLvryeHhUTe4FDBcJky4gJfLoJDQzm5PK9wMHsKgdTj7NCBtVW5HtJcbiS4R4F4nu1d7o6",
  "key12": "4jZNWxsNKcodKsZVdu4GHQkf95nBeXsLZ33yvw7dpHRVavqYqUVxyfeKeArkaYy5He7yhSEdrrV3beqnfpiB9JuF",
  "key13": "3WMxFaC7k8Xi8S6Yx5CGHuCudymefjVLMKUK7UY7MwwVVvx5rjtKRVKaGp4mR71dtDHoZbjX45Q4EovHq4FtpFQX",
  "key14": "4FGhVx2RB8cdFzgz8XDdrM7JjhqaYxhfmuY5ZjHYMG4zJ6nDScZXJqATRyLcTUXjrUWfrLqMp4UToEpZYsuvzpnu",
  "key15": "RMtEECW3kjQe38Dnsmi7CEa18g4kxt5tRcpeyAGnVVBWb1nGhP5sdMHxRNFzC2RwxhpUZk4uWWr98HKx2UjkZcn",
  "key16": "2nN1i5za6kBzkKFNr3NrMMfh5QFqTB8cX2eLEpkvYAbwQhK5TWaVNx1vM4tHo7uXpujfdPWhcQ4qvkk34pToNaHc",
  "key17": "3aHhXjYP8yNkrK4YmAbvneeKvY9AAgso3Z29j27CiN99wrPhdpNfGSL2JmEgM67YCwKHu5uFhWrs88HkrFozw3RD",
  "key18": "4jJgoHMsZWNdeU1SzeGXyXQzbxc2HnvxNM6BfH64iQv2Lmn9LPQMxLQWKqhWCHmk5PhoicRwQTEiCaeQMCo6BKt9",
  "key19": "67je1KRBxUAwzv93N7APnpW4GYRyS9aobxniAGWcSfktqwaxsD99uR96H3V4WYyvQwGKMQBhf7XEingmcwQitiwi",
  "key20": "gV12yXwX6KTokN2gnEpsbbqYjD6NFEJFbyHUcBCo3mb4U3wVEEAsF2KTdLn9PfUJQt9qDkvRkZLJXAqVsEaHGQN",
  "key21": "8E6yAcCXfb1e37qqoZndosMJ6rTDi39ihfqcypTRN8BhSubdytXGBgxdYPe1XVoGkjoMpsD646U1DBVn7tB7Tmn",
  "key22": "3K7EKY6gLmVzkETueaUkCVWHwzD64YrVC4tcGJdWbsTrKMdT79yjpzCBtoFTHUg4vMYUN8bY9XRsunwsCMtfo5SM",
  "key23": "3ndhGChvQ95WT7XgjvnPhyjJEp5t1kEU158XKMVnVyeA4Fpjcxgfb2B7oUkXTztZFcBiKJyWHEcGmKohiK8ofp4N",
  "key24": "4jWp15UtJu7hZgpPAaFj4GKx8hqeomWa7pWT5fwvvXAq2NDJ1Sgriy5s7iMXAzRCNDwh54ZTeHsCJDqMdFnLC91m",
  "key25": "28s3pFsgVoHHabNpb2k4rp6ydHgZmDUxUpQU9Ei28exo7uxboAGjuvChgBJA28iBdfcm28h44HhXYpumXiQZ8ayc",
  "key26": "4ZL3EYbouqPKxWRuSJwHRiLLTRZduaWahpB1fM1V1dHSYPuY6gX2CDA4BspLjqL4ShNmhRxnyx9uR4iGDxxEYWmD",
  "key27": "v2nD3sFsvMugW1mVpD9S3AdvkaGs4fJG1dEZPPyTSoRnAaEMzhND2iow1fZEZsLEiGb4Ze6pNwnCidq3VhikBKK",
  "key28": "2jFgmfDPEBp5LjT4WfVbMGmfUmv92vnUT14G57DiQYaHx6sgAVeyN1fx4ee1fcdMNRKUEs62PgpvokW1AcWuXzTy",
  "key29": "5SFGudMvofFrbAE9ERYnLJ2gHtu78CVPSEb4kvASewtHGVvQMiRgpHeaPm2TPu3y44uXDvdER93u9UfUAFm5UXH",
  "key30": "4krS7ttNFawf32XShA21kZG3qGLYXVfSAf46uDr6Z4sj7CVfGqBvc8jThQNRjq4Q4a6HQSwcocUsPZQxkfMyzgdN",
  "key31": "5uTLD2YxefwjYnNN3W8qReP6XrQUWwg7M9jCgDnK9Q72FYQ2oTsVTwGXRyH5o249TDnamq5ukAeQc5WEv8fCCiXE",
  "key32": "34fnquLBvm8R8YewU6ryQ7rpS8x3xnYaFBYrNkd6xnGUCtxP6xoioVbkR2wvP22GQmZN8nxqFA44xG7dVrscPcJ6",
  "key33": "2uJfpcG2WKKyf8VmUTyCtLkhYBvfjCjdvmYT6P9oFkuX4Xp9CPJGKfWf7eiDk5GxaAsahxsyjiBFvfUxL6PjQ21u",
  "key34": "3KCxraEBPM6L9ekMoeqdhKV2FgNekvb5tHvzx21EHiBkwCMMCkabpiQfW5xf3evPn8idVuFC33CM3b2KGnwK4AGQ",
  "key35": "43xZHBy3qw7gsxxC5ZVjNNmEaqZkzaWo1fqcjETfFEgNJo1tvhLRGejxwmKhLW4xcto2PcewdmcwjadAwqQZP6y7",
  "key36": "ihU9mHgL2xD8LhB1zpLrct5p51bWAi1Gx3SbgjCUeV94pw6av7YsFERHBHRBdV9vsVrFEkxVqNDHQoEgcrq2ye8",
  "key37": "4bEjANEXQxHze49ddT1AdPXBuaWuQjcJHgFSHX61CnFTzf7SJG3vq85PN8bKXhC7ywJstXboYpoUnu96mpX6T8nd"
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
