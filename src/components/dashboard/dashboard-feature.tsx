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
    "rCAHoBNDVeLrgSUggHJeSwcFjYNKdwSEXUC3cg4xT589G4g3Mc3yZ2ePzKUC8b2RM4dnnMbTmo1xEU6tz9gQdZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TzjvuXEXdjf3WeUyxobMgdfH9v2cyBqsapk2jgqoUfnFuHLhFx5mtJ1QhSMbWjeLT9CeZstwmJNQFrVAUYqY7u1",
  "key1": "AarX1x5GYqdLq5ouXkBb2kDABsUmLuN85Yxy8X9Yn2ipmKtkfddz6j5JZNj5Zq7VxWgZ4FfgBPuiPhE1MatGw6H",
  "key2": "3nNMiYCr1bZVbLM7qn9fqzDpxoaNGagDDFiH2AbcYBRMxbfhpqDS2L9Nyrc11DmkryysJJTRq5b1s6ZwAU5k3kFD",
  "key3": "5P777dRfTiZcBUEGgp69xqy79aLnqJyiHJ4wEB6TJRVBN5cQySVqhTFZe7E6ySTaA5dMGnPcMq6hXuQdQZAU6ib6",
  "key4": "37gq6p6sziKNa1jLjAh9gtmbwMYWGa6WEKPVeMMDK1wLjMV7CozNsoJ7aYnbX9c3z9zTiUHEpuRzx1FLTDKJdgM",
  "key5": "441V6PJNxeohiaz7raqsJRSBDXtsZdU3X8DHwHe2RGPCWCphi1FZL7QGjn5DbEieqmD9NoT3jyuKwXbuUqimJZgC",
  "key6": "2jKU4aidsg2YQPVSwfXNi4YaCU9q5JbYbs1UfCCn3mnLJq411Hppz28z3AWP8gtFyDnxWgf8GzpUstPUPc62SwpU",
  "key7": "3HahetzFQZwLvAmLt7LL1eLiCRAhoW6uERKuEezyGMsqTFWjzXk5fUi29nWyFPSq91WV1qPrYb9wVVoWaZXPt735",
  "key8": "2iAVfHK86353fqwc5PzP1qfU6gLyTAbEMMpCkEZ23X36B9cwqWMYDQFXtkVhDfyXFVaKLHkXiNdFY9HEjXkvzbfo",
  "key9": "5a35wmhgip9hDWjxNtzFe37vX9wLkknq2a5wiFHoC1wHmy8bfGuXZgn3JWK1DjucLPjJpEQ1qQTKJ73ys46yVUgg",
  "key10": "3xttMkwHYDbnujY3QGFXqP4dZrFR8q3FCJ1iKZgFG2F5RP28pcBTLx9wp5NFdFHaBTsF3afadFwc9vt8GEUXqeZn",
  "key11": "4ktWuDcTkd7scAMnUPPuN6YdDnbguEK9uqgZqZk2P2cNcuUu3sbBSpTAHpvN7cNXxQwtb6Es6u5aEYarBb7JUGQB",
  "key12": "5jfPy4Kev6KBk7dGu5cy3VVfVEAK7hGsYuyb6p2BKqrwUeJdgH1NTnWobdX8hn7RchYvtqouLUZDnxEqQ9R9NBmd",
  "key13": "57MkLWRUiRRFYSQnTXVoGpPp9hDxobaAUPDZFPAhoGw1SfwVWa7Q5n5Yh9pqmJMGGLfQNAoKkgzQZ4TBq6YCBDD3",
  "key14": "5ivz7qAtjBSJMiepkuJhtBxyTDigwEf5FeZaifTdkRqtCgJKW3hC3732JP9fBzoH8iJ4LinQBcoqLNXpUpn5z87",
  "key15": "4A4xK2qCWqWmBQ64USZt7NzeGAQHMnTLtkM6hnm8YMCnv51JoVbfWHiondkjY2UpFgF3yneGWHxeYgkm1gdSDrjd",
  "key16": "4ixwpSu7CBDmQR9ZNWbc7UcSLC34JuLHVEN1HjxgPkw1Up7aEvqbuKxsesQC2rM77DqaDezCgs9BjdhjNib3yqdz",
  "key17": "63Ut6zdxPzK7X2CGRRaiKU5x1TsBytzBHXFBmM514cjsQfZwEP3zgzhd2oKiaWkYZgs9AU6JphfXnLQAMZuCU2cm",
  "key18": "vswwCxhJG8P1wGfMkpt8jNJX6sgF9Su79J88U6TNhobFjkw4jcySEYYNTgBgC6VCw6VGF4ss2HNAo3hPmvsitm1",
  "key19": "5hWD67xRbbvLXhWLj15wku317xTDmLf4tyvSffHo3Jjar2Xxua95mTBE9G9tifkkf6QQZp7WK1vKM1xcoxbGAcvY",
  "key20": "2yR1XEpmhGDXnX5Cb4zcX1K93b3nJ6UCMviHWUBQJnHAaLFSXPyKjqoPeap4m4J3QAwc61wTCNrckBcnJX7kQB7A",
  "key21": "A3otp8QXdstjeJavdkaXtG1RynUP3p9nJjQ9kmMft5K2jsj9rsmu671iiz7qKTmXPd1QBibY9BVFDhAJcUWn6AU",
  "key22": "51Lu6R9T9SgRqs1yEoq3sXA6VXv49PiEcboAXXQN8KoPoyb59S3KMdCQkhQf82KYXuC6uaBEcQhPaHoRFcS9JEuV",
  "key23": "5eeyWqJT2m4cMzB2Abhsh6ifEzogK7Kg96rHdsd5rcuZ8fRUGxhngZDVqK93Hu65gepd2r6vNBbpC2DGpxED8JXT",
  "key24": "5mgX8hHveDu1UMrvjdsMxdgNhXKM47DrGnbWyqVHuUoR7aJxEwWhZ692DCip2LZzoTkLjK2LQCJP84D4twKgT3aA",
  "key25": "3VUBFd5kWPtcA5ZfX6Dz3nqB6pZp8n4hFivYSwmhTXJ6SA2kLTuibkb3nPiKAJQBvYi3HDfr3mN4bTZpNppUtBsK",
  "key26": "4aorWcVZxpahqvXhw91U7FuwtnAJtyagEomvTEyA273S6DojGiur3ioHe1jy2zAzLthhYPASrFwPPMrAJNfvUswa",
  "key27": "5ucocSuCekKks9sPbqmnsNg1MqrFgtj3gYJ6pK5mm9iUo4CJXPyqpB6m4VU5TfbSHAtGYUPDXLHcZugZqPKnMuNM",
  "key28": "5P5T7ffKXmEsgrUi57x7SCct562YXds93LAJdwBbuaunAfysVoYNm7KPmyQsLR6S98vExoZB5Uihc3qfj2TDRcky",
  "key29": "5yKwuvLVm3PfzLj6cbspzVJ5svoLD4uDPiZotggSw5iwE6DvtaBEeRAapC3XQWxVNWs3Eroc2pnkngzZNRoNdU16",
  "key30": "2hQQDeoHwQAiSbMZmGRpSc4tmkPT2msi41TR9vNBA1dQcHPSG8sD3JpBU5vGmTrnhe3V2T6K5AW8BJi1wPgA1XbQ",
  "key31": "2YL3Fa7LxjQoVRZZsVHKWvYr9dyL8z9xLTNY3ReYvtooNJMuDP4V2fMJodKq5Wo5pcMQbSpamqMXKitJYb64nvUk",
  "key32": "5mfScDxi1auC5bR7XfW9HGMfQ6om35XtQM3au2KR2qf5s7ubpaVx9HEBWMqCvfFgRySeM9YcKHnPwCc8wbC8oPXV",
  "key33": "wa9uMXcFBzu4pR5YdnmshPMaVxMFSMAGfBWRtAwmTDGsrsTE6uhQYMSW2SWQpHPWYS5u4SNiXMgF4zMqGbMMa4P",
  "key34": "5W8Ab153CMcsuDqGrA3kapEZxJhKoRwfUcdz2ZseLAUQtYfxEuHDY6TYziW3Sgdxmeg8JyyYAWkt6DwQgsFLcFHZ",
  "key35": "2hjz1SntGrLRDNhFhnycTqJnscRzvNuwbJunuKe5GXHVjpUxAVFy14qpxw4QFQis2evMaP38Mz2fm4B9Qi1oEvHA",
  "key36": "2UEcnQkRHhzoyCCxVSjx673PMFKkAgybFPFQsojKqkbYeWfxeS4ucqhRTddWhAym4eB5sDcZLNCu1tZ7b4SjpR9B",
  "key37": "2gUUD8cvaZ8DRjnLDs4fBcskw19WosjMtvqWkm86gPdi2KZnxHvc82ZV4MTFDvb5RjQQqHqoFCXeV7aD9BptvLNC",
  "key38": "4bR6uXY3gmi2df42wWU4N5Qovf5ofKAGCXruHik1YMTZiEME2iZtn2RiHy7zhDcsnq3kVW8dKWcHnRJuz1jrUxhj",
  "key39": "541TsRwtJJSWybBypSDo53ujp4m853gvta2PR6z1Yyq5nS26dEkqRfhtD1nM7jg6zK7HFhx41yyrbbMaD7khAPwj",
  "key40": "2GnvrnhrmqbG3ABv9h2PoeaAH4kvqJtGnLjkBsntWWLwYGkV5C6wZUU4ZuV3mANT8arLQg7quwYmPKXBs3REfKci"
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
