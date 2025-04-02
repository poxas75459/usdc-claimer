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
    "5u1Gix5wH8S4JBCepfhZp74tvfg3Ytj1qFDfg8Aof5EEGuTf3DFe6run2zsxAy7xmxWjDKxKGZvNVrPmrjb4LtjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fZVsVh4kEzqu3yzUAFHjQ1hRzxSqdawnZVHzvY96Nu6Kg4qYSdwUYLStyQAPhYhk5EngSBBsBZqA6VpFtwtK13W",
  "key1": "3eETQpPaRdUw7ikraFjJjagd6VD98RPhJzW3GqMEjm15Cfe1ApRpssnaJSsASa6Ffw3jBJLFkvi8nETqHCCDSoLy",
  "key2": "3x93MtTMqnkpwGxFavbdFtzWVNELMwRt9XUywpNUkZPvnAQs3oCp6eKUPpkN5NZ3HJNetonnqywgoWsoEWLFDupc",
  "key3": "31xccECwJK4BXg278VfjhdBbJ4JiAZ7RCFC2VWA6Y4jwsGrv3cApYsb4ekgRFoxnmLAsEkEXZdaZWp9XhLs7bdxN",
  "key4": "4F6xnmkRFmxoiboTqVoUPWEnGdmjnYA4YhB7EwS3g6S3KLtsGVmYn4goeDyhpeTu4c5pyptprVjvX68n9j3hcyrf",
  "key5": "2PBEX6hEF8Heycpe36otJ5xYyrb37urBE4ZDhcyvEpbkn4TacWhRx3ArXQZGeTfFUc8AdqzNSMXsy3j4aVfWFBJX",
  "key6": "2fNjnWzgWpoKmhSQkoxpLufn5qmkrkPqbnxL2iGAf9XrrJpMrc9fhModbpHv1zAMwfMar6ydbjSqGyoPsubjBThW",
  "key7": "2NqGcGHL1wiDgPPJiFnXJmP7TzQQAK5QYyBYH7wApS6FicMZ9K6kQbRdfFj73uJ6wpux6Vcee6nXCnpPtdgCGkGH",
  "key8": "4nwdA5BEZmyXB1rQNHJaxSxSLeKUoXFamzZp2dyTTofetraJzZrRk5QNfCMDDVhZJmFuQA1gY28xcHiNjjoH67DE",
  "key9": "2C9AGRaE3LppxF7CjoBiBAG2Yu7DAnAHDkirVrSUAQke5THdvUhy5t1HeqK8d2cs4Zs1dRsmU5j7v7BU9UuXkG99",
  "key10": "34JPzxf7cauoxSZrhwU7nRmbVBYPWJiC8Xdd5HyvLxunyBiYvKYYmaVFExUAFNQGxQC4NSqNZzGtAU8NAmDy6H7J",
  "key11": "7oajwKHXuAN1cdNfxbgc27utaSe19wqreyrnKnxdhFJGmMSonn7myhLC9rfER8YREcChJiMarNdpmtvLFnU34rW",
  "key12": "K3Md4KK8sp1k2KddD4qoTTUajqokHcxNzaS62fvSBwrCqex2e3mh2zH1wRUvfFoF3HPcrBCUxdoVjrzqTGFopzv",
  "key13": "2HdGb8zMXGSTDF3qWRVEnXybPRaJcpPeSWtXeFztLavSJkAYKusBq8X5DPGVyJcc3kAjB3Vaxrs6NT6jBgNAsLo6",
  "key14": "3PpdBsEvypXKcx9bG4JYQcS1BTL8deeFMk4zWizybCd2YhAHixzoYtYLQ6u5rvVLAncxE3NuCXZjsUvUwCiQcLJC",
  "key15": "3goawZbMAnYbzJ2E4eGreJXy2L7F6p7Nidr9hu35EZD8cw7rHspZ3rtM4NHYbEgSzanS1hcbYcah9hn27GZWZbte",
  "key16": "HC3kyrDRX4GvgDiLQ4q63RXxEJA8CR37vzwYRPKSihSyZybXiN7dAKxXMcLUf3rNj2p56M9QDcnV6NJq16Rs3yf",
  "key17": "pLpDoxfADPXwUFwA7FDUrrTYiXW7rBAFvF3SLhe5ns7ady1N9EfCwkUqjswxpmZt3ojfxYY5Th5zfLCR9j6xsUp",
  "key18": "3RjxLPqzvdykL5XNBjKbMXYcmhCftkqLwTvUDWjwbprVFdSkMrdezLxmmkmFMRabdUE4n8TYhBZk7D6pddDaNbem",
  "key19": "3EU9ct3S2ouCv82k8h7m9waZV4fkgTyf87a8K4NqfLG6m9xDFy6AzM4AVa4J5Y13ySx9cgBDQtGjUEKqS6xcgZeJ",
  "key20": "2mo4AKLn4GeyZAnb457fzHWRR8cWcYZ8dkdLdBFYmZo9eZg243HBJH9jmGCvehfQz53jCDqP32jmyEXXGg7gaCHc",
  "key21": "62DkJoZgHANFLFGrUCWPiBUEpqC7tm3Km1KcB5ndAghUEUA5GEeWEzCtNZu7SccoEZxTbLQbuZNimwaeZFhmRaDJ",
  "key22": "3V4hV6NrbHdv33H3ZeB3K8MJBBskLqVTJpr9VjSUNtTuQowfiqDa5UW2nMy8kT18tGBxkaD9RBEPEwLPdFJHGcmm",
  "key23": "5ZuXBT8YsYvoVA7rWpwgUdsgMkCvFQkM73wjh8Z1YHcMzFVX8tFgtdaXt7zVqBWCboyQsPJgZbZArrvkUPbGLNQk",
  "key24": "34Ck1Ea6LRJuoBBewFb8KMJvBqpMBb2YA59bXBHWabDgsXivT1sm5qKTnBteW5Z1nE3iB24zc97gQcF8x3jbmvPG",
  "key25": "42r19tqCaAXsgcUwDxVhZ6GuAVqhM4hG5awYPLrHHugWQsDaDRjZ4pxMVAXD4PTabju8qnvj3a9DHZVNJysd72o5",
  "key26": "22MzXcjcjD9RGcuwfTBJUQtLfkip2D6XFLFxrXqskiki3poqpAE4Zq43cSKXwHhQfPWSrgSBGgN4nUnwpNp23wQb",
  "key27": "2s5GfAzrhJqdAvH8KNwxnFWmydmSXvgYo8a8nuPE8YaumaUvUwfYz8U5YqhnXuw8UhkNwb7NRhUD9ekhpmdcfsjb",
  "key28": "4sHT8eiVEiWspLcUuCbMBQLKfp4xhnpqAi6a612isyeh8EJUe9gjagfHFKLRW43JAWSt2J48JuwgTwg1dztoqDV1",
  "key29": "2x8Pm1R39zx72LUsvBdQatPsv1Q8sG7YBghgP91FFAPoDg41wjJBoZvqeM3ZPZxypp3FDrkcJUsV49YqdnLucZJk",
  "key30": "3i1SCyRJomwxLFnuDe2Vx87VHbWAnY1i3HnuMzK24Votu4dny13WAEk7qDXQSd87kSLPgRXk6idkVLjHoypTUqK7",
  "key31": "45btzhMUWDrQmm4BPgKDam91pTPPtVV9Cu4NGiuGFZuynZG3pWUVPS8zDX8x9TH4E2LH77s8Eh21Xxv5grcA5CSy",
  "key32": "tPyk7NPXJYLz6rB2iAdnSUxGsFWHb1eVCJayMbcxtpeiybYBe89TAgVJmZn6Nrjp3i1DCQU3JeGtu2mRtFgDXud",
  "key33": "2fW7vccuvMQ6yXdwNzkLxb8eCdmnA2N54wFtGHkMb825AjnhZqJiSAWXcTgroW78esc9wchs1MMj3xCyq1PzEDad",
  "key34": "5hbunMt1RMkdqZWZSkG87mvxCfbj7bBk7wGCUQsVUGMFB4vwtqaGaPDSyzjfUQgkhQnD3PzbwmUyQMhUjH1vEyPv",
  "key35": "Jy8C4pnXYD6gF5xBzEPu5ZykVb37qX3LYN1Kna3r2EkWyQdk5At9WjVvsrPeju7LoZNvz2rSFC3Y4spPe2oLiTz",
  "key36": "5JKs51GBd8fiaAYcugHdZDwTahbgFN4xxse2sJucSkK8VKNXtpZaiRuS6xi3NdAfZKrJ5pvn9aMoF952mLZxjqPt",
  "key37": "2v7UX7QaBHu6HTw4HMwfrVHJ7ee5uyppQijBiRj9xiRAN3g4nNPCrj9Sq1BWQsfPSpUBzwwxsuGzrFcfxdbazhYA",
  "key38": "w3KzDxdcz8pABomfms61bjq7GfHa4ZfAsuS9fTZ2EzgkJu7RCdHKvRTE815C2yBwbetPCtAZG3FfrT3ATtDSYW1",
  "key39": "5CrcU2A6wPacYESHai8QroQnM6ky5pDSWX2sy2PA4R19hemXRQZn3hzfdUEUWvKjqfhWXTergNhLv5K4E8MWuKko"
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
