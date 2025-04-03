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
    "2Z6ZrZPhRMpz6BPdhLYrWZjnL3t3DFn6RLoPvFPtCAZquhBSHqdmfSPoA3ujsv7ETMUgny7NWqU4VjbNUHBP5DVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nQKYS17q2eENexpzkxVuTaJL39ygTAKhNe2mrZLg9kDU6vtvpEndZ1bxE6B4CvKmrqaQ44QRzDLZ6xRhtDWokXW",
  "key1": "3JheemitGiJMX9BwoCWyK1fpByUvBuNVPZCzKr1mbMevWRC9N1cqDfxYdUeZp2F5S9Lms16fCfaPMxoD6ybJXJEZ",
  "key2": "21FbMv1KKshPRpunUyvLLCYrG78H8SHF4wws8mvCxBcA5oK7A4L9JHrZzirH1FdiapaHaL8N3zUEcAYdPsaRqChr",
  "key3": "3Ej518CYzSV2boPV3CSAQo53trPjZVgmXB2yFzEgYSPhTEeMqyQYTgimSzMDrmj4PSmQQWtoWC9SYs2Na68SzLQP",
  "key4": "5DBTa9bDs82swQb4v5hctkY1AjKAib4SEBoe1Qy7qLEnykSr6djHiR8XQLDcS8shR18Et2QE5RGXR69ETPJ6kJx",
  "key5": "7CaGs7p9VukCVXSb9KfQGY16uJydnN7trDctozV1TPCe51337qtz1ZE37bC4ciu5T3vwCxBmYHSbxjXUrmL2pxm",
  "key6": "5s9u2T3hpX7tLDtiUYLzvLRD2Qmzu3GL2gVV8K9YgGyvi7KAtc6bDPSrsFAsEvMa1x1rY4jovVKPnF8rRpc924Dw",
  "key7": "inq8bWDsM2gHrg3ntL6nQTru7hgosv4PeHPuSqNLLtK5DFtZfVzPM92jeDCw1eoZZ5V7JtpWRzxBTYXtxSqekCN",
  "key8": "3T4RPgAKUdxTKPJB9WuBQWyeXYvzdKUeG2avSGNZHZoBHu1RyvsRJ84ZfgVDkSwgHd7BhmjNdaKiu7ew5pWzhQoY",
  "key9": "4frqA11dSUQ3UkuTs9kZuWpEiRaaLet7TEfrrxYg6a2uApntSUfZQqJk2duq8Y49V4NimoMff329gD4THGb5LLy2",
  "key10": "2cHxy55QnLYYvteMjxEhYQfgD1FvcqGRQRd9J5mYUbRuKeoJWZDxPJnrjnttnoTYLh9JYVimZwCyBGmPxfoyYdmQ",
  "key11": "5BtsvxZrk9XWeCUKdhed7E9mHyGUYcPGdAgPq7Xi159FPT8j9DX7eopbvVtrPy5yrwHiEgwWtbLSV8N8Esp1hsrb",
  "key12": "s3YuPzmd3ASNC19M48AJUkyqhpdoacHFFy2megZCxVB29w2Em98XKxaCPWHQCv5S6G5xPZKQzhg7n34pjfdiVGq",
  "key13": "2UaPQ7r6VJYpdJzixvHYCwra5g7m6c46JJRh28iBz7s4a7WJzVGEs8z1B9JExCLaSAUHhtwt7kDSajGgiew5kPhj",
  "key14": "2MJGPY7Arg8G4e9jiTFVfRqeMhksKmyKUVQ272GY2LSemMdbNSyewUHPSDhyQ12zEP518UUyfrEFeAAZEVXieRhS",
  "key15": "btJ3vDsmLQY1VaNmR2uv3autiuqKyvHL39Zy5rMQEwgje4eeRiFQh1c3NG4GTBEiZ5xr5jZGWHKgGMeUvUrETbv",
  "key16": "4AxRHwU6yi9sxAdnTd3kxVPy3agWB5HBh4Ma4QXmJsX66EHg4pykhA2mCsrBuFBTnzid7w5UYtGMskdgMLbuVUD3",
  "key17": "5QrkmYhCxjTptW7Qxe4NjiyUkzphBQcS9wax58Yj4h2mK8VcBW4n3UcwwVJnFfnuqEtd4DNWeAUcgbCkSkvETTRr",
  "key18": "2YowYCoTafYyEEL13wwTjenbfjSQZSWNVaqwwysmNDLhKTZ7vzefejuGeaNZg3RPZqZM9V7j3qjNwuwcmjNUuZXE",
  "key19": "2R4FHhAaCPQXRJLkpBcyoMsoWGG3hLHWqXUoHQC561YyM7EEq4bsTcxBoarwJESTaEe9jMfnggF4iXoNgL6fWGJn",
  "key20": "4JG3h3Hdo2DZBhksho3za8CPkUrWY83xhdAgBZyNXaAEWBheq37dLGkptt4nBKxwTA7AT4zfppitDxCQWZdU9Ywh",
  "key21": "4PXGfPyukhRp1pJPdg31neWkfr32tKrao34B3SBCz9ypZRaaeAkfXuqNWysuq9HxfAyKgfXHoa9BmjnbkRforuy8",
  "key22": "3J14gW9ZZ8Bv49Pjhqi3B5DzeG2RDbZo3VXwTA38B9furas8kbXW6AZt9Wv4ZNU5XomPsa3wDoq1FMW4FvnNywFc",
  "key23": "2DUNTGyEPkd4vRb2WjdJvczt9zDpievypVv8ctMoaeaEWTYvpBJMdi2tkz8Mm9nNjfuXpvG8zfN1Lg63TsK8o2t4",
  "key24": "2mUenXV65UZ9bfAGHAEcvWvY67tGx5Je5yCxFY81F2bKYaRpB2txjYQ9yyG6cYTu2obuq8HTunUUSA4Csj326hUB",
  "key25": "3qra6tp46gYQ6fBfs11iswR8a9xCyyv1TJHRbNtBtFPLP21cgsj1RJz86uYWxQj8GgxCbmkPcLxEzVaYFvXgwaxM",
  "key26": "PL8ypSagGdPSxGMEg5D9kZYUFNxXt4qYK6DzEG9dUkTjHrEUoLqX7ys5QigRKUM7XPsx12XJRref9waSexS68x3",
  "key27": "5Z4akMQUyPposBmfaH6TGDkwWDzBuJNEuXwuBYtY3f4c9PsThe9R4W7L2WuTugsL3Ff9HWveJk3xjdzmVC4puLqw",
  "key28": "4uRaAUFGSLdFTEw6k3LRrXXekKEeJyTCJyLwxyjRtQV7oyWXE9Jknk61CvebEN3iLAARoGNXKmu1GhXk6ChoaGty",
  "key29": "4bKaTZmk1Fy8mF1oHPE2Hrg6pj2qZbqjhn7P2byztFVG6nf3nsNBhpMigfbxCtnWpjqxJkT46GTZrkoxbcmjtywM",
  "key30": "3nGnCPVEHCNkT85xvZJ1TsaNQQMYtxnynZym4fd5D55iYsmdAZMr8uZXKcdWCrP5PokBvarEz2kmiaATdy5g659r",
  "key31": "36WeQRCeFDthj9tWUwY9sVyp5BGsWEeetfGQdiu5DnnJ28LFL4tPstsGScXNepHUc5HhKicDEcGWkbzDVmaR71je",
  "key32": "4twdLfJYRxepkd4Y5XTxdUZM4P8bzMbMU72V1BsMC2sfkRJmB9UhdYcSVwYxzSTnYCKBRZM9e6N7wfitvgAt8ubk",
  "key33": "2QVqapcr5HZZRcJn2wgevwnzs8baXJvL4U2csPutocwHxpr2STeM7pae17uAVBnJRoZBpmGpptTV3ZuVovYBUQJT",
  "key34": "599v9dM5o1P2YqvEGMu9f72C5uevj32GPSHtfqazTbe1enNLoMRMUJgXhmuE1jfuWyFa83GW2Qe3gGugqVYtTtZU",
  "key35": "5FsY9nfVFjaCjDCWkEAtwSSyNKVhPcMfQuQCaqsfRgvP2LyBruCVgcFdvkwCVU9GzxZW8q5e2StQEX56PwpwWYZq",
  "key36": "5UEUYWbMdNhWDLYRcbVJqy6VQFyZ9iCLwxPXN7DKPYs65fJU4wGuZ9Cr3P1LMqW3dRkmVLNWJRHjd3nB6HQfw5vB",
  "key37": "2AiDWRdc81PBU5caQqHfwUy2xDEX27SA6AycqiJr52drx9G4cLq4V1oGDTiwh7dQ2kNqpQkVQjkTBF4JPVr3vSGk",
  "key38": "4467SX65qVetyMKcHQQZ8NCPhn351raaXRoqr3pFUFfSmhtP4Em48dzXQXHBsAfbiowDas27VkPimg8HK2rP8Rt",
  "key39": "1yNbGAWMr82u3TPXojXo4tuxH5PJakaoMVHAxuhSGCzP2RRE7Mj2qwUr9LZ5na9bUcdQJGa3iLs2DtGKEdeNioF",
  "key40": "3V3CH9J6rH82icKY4Py1HG9D1R6tBo1Pvj7oEsHpraL6aJXT4mr39xVNevNJnCrSDXt28CGXEWb52XPE6Qpsape2",
  "key41": "58HABJNvkyCNFpLpzc7iYuVnXx3tnqn21pGzP3xMCEJDp9bcFyt87VQdVt6PahQsse42MsmDgkWJaeFxkf1AhNHB",
  "key42": "3NdU6wyrKj1FZQSePqnkAcrZf9fMR9NBctHagwMRNVaFec4Tr4twDiy8wfQuinBcAbdargp65p5Fu4qiwKDgsWtL",
  "key43": "3JD4GRS8KSwTYTSkB8VsZL3K5XVtKBZk7BLtvaTc9f984knRnAxgq7zcG3gyyBzdLDxDd3JXCzwVfVjc7WkU3GzH"
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
