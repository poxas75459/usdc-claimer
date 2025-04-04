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
    "4fGen9mWAyuJWFCHdPVuif3ZodbaZKjucbnrpY6yeseADGeRnq45dxnHaigzgmVT6mwR1VBY3Dn5g28NXiYs9S1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3556w4BxjuonuTCwEC78PuzvJTDY9CD1KBjFxnTwNPL4iThTTSfy6YiVwB16T3hKK1DMVK3t5gRx5vooriaXFQaa",
  "key1": "3uoKdQGs7hm2f915hSpJR9Xj2GjcZTZJCTVqHdjndjDzQCCBqNr144d66xiu9FtzNWE849ofAs1vNp8G1cMkhSHM",
  "key2": "4mD3kui9ms1hopC9V5Cgnth5KnXfcRKR5GKZhRgkqgKWjg5rfKDyy6MtaieYvuYsy1TRFv9VrwvVZEQzQnuwUcCN",
  "key3": "2sFHuBDDKxy7DWKeL9MLoXkpfpcdbKVhrAmyycrxto4UDHTkXqFZTLt5QieLHPphc4CVzSTQuQQJmgbLXWVNaQrX",
  "key4": "3wqg5V2iPckeA6oYJS7RVG6aZT674z8AiDFz3bDwZ9p1bNgMPkbLXxh5bd7PDM6bpNF3xSzERSXP4n26aJ5dU5jG",
  "key5": "4Br1wovLPRCzzh9f6bUu62wq4FucMUwaAUk5mw7cduisTa3LExbLNyuBv7KDAictd7jBLWFLDVPWWpG6znYDXKyF",
  "key6": "55s1vrrysxta61EHDniwsKFRmnFSJvAuTZciqS66n3Ayye2uVRMo4qNmPxxGRJzkXuq7sjRv1CpPmqV1LGguXfLm",
  "key7": "Bhsfs2wxJdhcs6pGHz2xeEjEWjvNnR1nEBBiT8GcUzYcMBvwVxMLjwzs6boB8ZuTNvtSgn6cKhRm4jvbzKJGUT3",
  "key8": "3tYehHhJQELaxPjBXag5NdbjWQWhDtFMBZSvEPGywDPeZxQ7Emh34DAYmhRJKjkqifqV1hGuvrCLTgVGiu9FZHjw",
  "key9": "2o5BccLKissoUochm9Rb3ie6GCSK5C3Amboj9YmZKnZWABvSP6V4bmpCudKuxGRe55nrJQgQhyStqh6mAj6QHjsv",
  "key10": "95cKbvEb7R9poJZF5CSHiN36hF93cy6Frcssd8rtHgCpUvBEmBRDvXqBrwPjSxkgcApRBADTCNvGiqSPLoB3GuP",
  "key11": "3qHJA7SXP3kMBSRZYBRViuioAaoqcu3pSgnv71ETqnpjhEwupSMAUySi8QTYbfzEsgmGRLnp5eQpinZ7G6gyVnhG",
  "key12": "4WaxUBvXydrK2XbmfTZCaEbiBJvCzxiATD2twWxAZBZGnUmKwa5hRppaGyEZmCaZ35RvfU7uGgzngfavD4Mod9ez",
  "key13": "4W6D9qH29wY7pfwxh4JYDwTiUy2WrVmWktYMLBbYnjrMRNY4PtBsxbq8vBcGLVZkHHtUWptA3hccQ5kXgHGyYSHu",
  "key14": "2h2Lh6r184qNiovx2gshvYEPduY4D6hxNCBLf9gMFcCJHRAcPy2esLzsYFj5kW1i1NHj3w3VKbaTSRuk58cAGxUk",
  "key15": "hGWUDF6viUxoMyC5XM9h6cRyKAMiTTk7qYYdjZw31JWoQAn8ocW13dnXFiB5WS3qxLwz19gYtFbcdACaTuAg821",
  "key16": "3A4LhFrgSgz3mXFppE58FAsLREW4TxmU6sMWDZezpg2KP5afRBT88ySBAtjmJwhtVd6eFEXMb611g3m3YU66WTCj",
  "key17": "Qv7zbEuos6mxcjQbbXxWvhn2MpoMmfMvP3WBciXZkLZaX4DQB7A4n9gnNSaBnnfxR1ReBfG5a1SBApPY9fU6BzX",
  "key18": "3miFGJCaPKzQQEzx1AXZLqdQqs4Dmd4Xf41Pma6HDMkJD2dGGdBxbq2NTWCdKTS68USKkmF99rP6ikDmgUP2P7cB",
  "key19": "2xU2vizZi3UzYjQd3qb5TExQjmYMo8iMU1t72WUiyB8BLLwT6YEYj7zZWkCVNGcQNSSyQhb2MQhHvdtBZm2Nk3Na",
  "key20": "S5pMA51HjqpD7dG6QAtiA4kPcg7cNUVxN7qunB9SFJFU5DiwgEsAeCqmKtcb1wnyV6F9jVetjQ59ErubapNUHGS",
  "key21": "5DzvZtKG1L6uCoVwZSCcLQo1bc9LAVEjK4rWLT1boTsxmtXcs5RHFkRri35fZUg3br6HKbeQk52buyegiBryZum5",
  "key22": "3BAUH6SscriP4DaovcpfyySReVZMjHDs4NDYRDXiCYt4dAft9B4debDh4HTHUV2M3q6aCEsqeA9MCFrhheVTSYVH",
  "key23": "uDubHGvyqneqWkxZwHro38DVr1nGstZHj5LhNQrAhaWptmaGoKSxHedg4wgFpLeRsGErBE4M11Qo7SMuVBHBRQC",
  "key24": "629HP7yDsNbtKRiZR5FSaMBKa3HL1EUN1ryC4s9U7h4FcNnePZzrxxGSvQGneo1JEga7ryh7ivAc6bwmvqNb3fBV",
  "key25": "3LEUF1iHTPsvCcoWAFcSN4puTCs8JjEhu2c9nGNwSJHQ6XwK6NNTMWJkhvyaMe8EVyha7evPnGiskBF535RT4Uft",
  "key26": "3WMZwGm8uaantWaCPHxsSzT5ctCr1vPCvzFcygDKiTZKmSjfVuP8EMCxfZa38X2o5jEULi6ZicN9k54QtPcjoKwB",
  "key27": "4ixa5LZ1qtFzsmH7UD94LovP2wUYCpYoCXTtLvduQPx4N8qQHfviJ3f87usAnN7wie6K4JoWPF77NqRBGFqATajt",
  "key28": "5rqsQe29zN5xUPhFqMnTzwLRJkkZAStE3jxDyELkpU8kTeihrqcxfC89KZTQB6imV6uBPoJRTKW6RvNaefiKUxv8",
  "key29": "3Joitm4Ur9NCusLXtbKjCeXKu278inB2GS8aEgRpWmVsy3YnPdXvyLACdzt63Hbr28vCFoifz7WoTgkjMHY4MgUt",
  "key30": "35xF7S7fudX6Wi9cQoRD2uJrvg6aqTXDG8EcsUck5PH2dMnEYZ4o2sEDmJH7g5j99yHoKRiiq2qZGhAkCuse1tkq",
  "key31": "faVCcBEXf6LRenSjxrLFhCMJsKnPNJ7KNAJqYgJ6dKHbiY8YkV3FVTFp7E2rQYrgnKsf7oVscwqGoyKUf4RBX15",
  "key32": "4y2TmxveSF43bCFm4z6r6r1qWnx6Zrp8qDQpKkN6S4Jw2UcEws1RnZaHzRPYxw5MsjBxXvRCjKdhzAeNXgt51rFj",
  "key33": "4YueQWPJcS1BfxcCmm4xnxshGUTsMQQLA6HkwPCkHJkSDDP8LWCpqou71FfBCNNqPniMg2LeQq2xdVbQv5ULj1Em",
  "key34": "2WFufbPmbr8FTshKRHKnM9odqjokWrPduaBfc4giUNQmV9iDnkejVrwFtVeQpNyUQVWoWTURxL2BgebsbLGxU57C",
  "key35": "2Lnjyuv9AbNkaxp7WE7EjNHBa1de1byfARxiihYuLpa8aauUybrvBK9xet2EPt2Nus8GvQ9xQDZRRjWBQmkZL7rC",
  "key36": "21jndQ3eGEoN2KuzWJnhHeXxXjDtPobxwgt8QvKSsmygHgdcTpJTYHj2XYSuG2xy8nxbijqHYjeCjX21ucM7oxSy",
  "key37": "aN2BXAbZaP8sJmKPirUz2xQn8z4bZZoDnHYWLyi76baJTDesTnTX6zkHmeB8H71QxDdD6aHz6yPEcd9SzCyCHqh",
  "key38": "62mAEGj3BrdwPqyE4HaAogu2nU38uDRerGYz1F4kSPpQTc3suXi5asmhGoheV9QdmHnQ5MaCRp3CbKqGW3JF784o",
  "key39": "5QmBZDZqPR9dCKa7KgPRuu5NtK147zrvownLdhdgWehvtiQzc5pWXPN82JQLtRC7yrRoTCJXFQti1WdqeLipQYXd",
  "key40": "4v7xvnPGbqTN6Ffhmd2PMJt9X6o7W92fSoDEJjNooqW4UukFcEk4nT86X4fhQtzVR6JyMd8UJPfA56HqZK7iLqZ3",
  "key41": "4sfDi6VAGpRvCiU2fdFu8DSKGKyw8SodvvC9TD5EirrQR16FYJUoiPVc79o8Q9NfHzBsf7qzrBLs4EQnDHPirn4Y"
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
