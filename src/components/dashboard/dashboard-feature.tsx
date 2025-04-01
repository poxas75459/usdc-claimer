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
    "7HSQNphht1YMt59b8kTBgSjCaVbcQoFVsL97Gm6NE5Br1jBJdufZUsEzDiaSf8yLRwGK3GwpmM4kE7DvyK1fsAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xE5rt58XeN2yrmy78c3mNM76apiikMFdVnA3S3RkfX3FRNGRac24D1ZLi7YtJpNYYp3PGUbxewDWsmeYB84GfRF",
  "key1": "47EMTw2BqWBk43pHVoHtN2nrN7gM5gB4FxRNJQPShfBrr1unmUfUztL21Q83xHGYVP5zX6iviWSoYNetPd58QcWa",
  "key2": "2j8StFZd593wdyZAbhEbu5j7E3LkTCTpL7uQbDeiPse6XYdLsmfMnMbLj5ZBWgzwsmuFnYNQN8RrG8iozftrfTsi",
  "key3": "5okXZ29tcqURYg2XW8zVjJvKWnfrssgyiTc1qLHMaXHg2mhzBhzejn6EZkWDCatzjzBLMaUcqQsnDoyyr7ac1AuR",
  "key4": "3kuAprQpbMbRwHN34EKBT1GUfr6mNsBQvrwyGHKgv9eFkgxHJTsM2z5PocWo4RCtoMRA7suKJG2rukSwaDFBF8et",
  "key5": "4SWZiBsgrCNHe74pLgMyEAQ9oR9H4jx2dcJMXRNBGXzAQhfXpJKxPbPcsEQu7afiGjQHdsWtJ69tn9b9n9fpNuLB",
  "key6": "3HQCxkgNkfVfwZiNhQMekeWZgHxecn4eB8oB2ogoyA3FvbvSYUqHBR3reXhSetTaYEiVaheVPZXtJjrM8HSQ6fBm",
  "key7": "gWw8jwVHtz7UKnHXGhvgS3Epz7kkkcztYLWBACBFLLCvo4DrurKW5yVyAXVAcmZvB8fZ1Yh2NuL1rYJ1j8wHWUW",
  "key8": "U41jcaXGHVJGaJZ63qn5TBW4nL7Ee1dtppoWr3scR1GLTHLuzK7uLuStrqogEy1ReXPqRFudLWvZMH5VeMAi3zC",
  "key9": "5cjSamL9mKFFHtmnvZLnMqdfRXSw2z9e4YNXk9nNrGx7ono4iAihqFvm5qaMntqWgRXJexn3xiTxzrnYVpwKLRLz",
  "key10": "4r1Vk9C6f8mgg6P3Zso2QnxA5rVZDKPv83rNJdEM79FW5C6bse7jYBKNJ7Mocb7d7P4b59RUZ4hTSbdnrFUo6z3N",
  "key11": "4m9779P96wg9kYGEcQGM5tkDFRNe5snL32p3WtZ5vjWLTg2PwHR5U817pySkgKAqeQrgprSXMMmiqE5w9jYY2Rxu",
  "key12": "35nYNfyeiYN4Po7tfU1BrgbJBWQmq7brEeqh55GsmbnKmPitPeyMuXPMLLaMWqgLoo1U8SAaXCnMUS1YNG7fjoaD",
  "key13": "5sMX16zZd4U2rSPjEUvzePUF6o6qrWAvzM6yNDw6t3QmPKvM58KWE3kcnB89BgRSgKSpgMhDnSb5sng1KhLbEKb8",
  "key14": "3Mx4jgPiBX6mZPhmhSqp7Zk9F1yM3Kyttuw94UNsxKjAGC3WXoQZo9bywt1vLTYDBNEBE2myiauZEuBn85zJnap4",
  "key15": "4UXysFuF5kcmTzxH6Gnhcwr7MgA8B2ESoqbLpsT7eB1LYJ9TPz49hHWriJAnJRLa7vPCobi17JNJZjzfmrAk7a4r",
  "key16": "4N9TegLa8eK5pYLp9KYPKTJAGNkCCwVp9jM6etH7wAiZXDyzBbnF7gUQbh5WmXyCzjFo9BoD4vHwGvWAEVNkLFtG",
  "key17": "3MHuZt3RE9v66mScB2aNCpSrAKjgdUQqhKDXmVcDd91bqGCcuzo1y3RoXUtqtbw457C8atcHG8tHxW7kTuwaHnzr",
  "key18": "5ZDxXbbBoEdXEjSbJMSkfBUYYyyG9qqJthA9SdXzaVsoEXJAHYCbi1QtxAiFqea6hsxAAsMM58D41HX9skmHqFcv",
  "key19": "515WvJv2RDr9fauoGHZEivmkBnFxBWEF3da9YpZUt5qDhYRyDMUjpnpNBwLj127NMx6rE3K6HzQxznXuChga2bsd",
  "key20": "jy7X5YaucdUFznbbg69mkzjQsCWqHNscr3zjZzMT7n9NKShKp1nB7vMaGLzocXHFFB9PLEAhmAffDeTKpEQE64m",
  "key21": "5qZXKyh3qvU2UrxVd1nhpmpAsw2yM5sFWwHKbouccA1L1fnBs4oiQ6nrcXRJiKpvLBeGghzKTTAJX1JvFij8vxf",
  "key22": "4msqsGCYFnbNiFjFb4HGyriJaYKjuzcHW27i7kJzfBrshtAVnp7FNJaDYgGjSTEp8tg8AaTuJCvrWG5bZmb21s5L",
  "key23": "5JTs2F2Nx3NwdG282cTgBKUpZrPHsJh41r6hFirKedAxMQwVEkV6eZThXEwDJDmLPSaFVoH4R5QwahS5EnU4dFfv",
  "key24": "2xXKb9BQFyYod2mX9qwzkhKfkwinnDbL3Rgr8qUSSZHLDwgGrQZpLLQnrT4JdRJvJhXkZbMgWH2rWpudLt3VwQfi",
  "key25": "4PjvGZeDnXPTnTkioaYZND5sJhS5hubuDePxDs57REHrH1Qy6uiWhYatgTYZaGpEYPNNJ532J8To44MBFCKK44vy",
  "key26": "8MeVdJw833HPRSdfG8bXWa9Kqmb4sEUDYCJZSLGhAMMLyYqJyZzhQMAFQcDQybMmPGPZDkviumk7McfcQnq2w2f",
  "key27": "498eaqKvSCfhg7RfnEb3mekTFA7vS6TGvuA9Ds7YM4AU3sZ1Pjqukb3w1Qu9ZD3TQARojparKtVJGUPhvdmbKpCn",
  "key28": "vWdMrZnQshpZDg9gTPhFgCQNFmqs5FZS7EC91t49TcNEwrFLcKNEWbGozHA3xpQLJBYDgKG3dWaZoxaUiEiUQSb",
  "key29": "3FxVGKGGNSFnw7Ys2j472U2FPRJv7SHW139jY8RvuTmn7YMYaPcW3azBJuUnHEHPbpPBCawdPewSuFW83iZRjJdg",
  "key30": "63UWRrF6GkKm4M6V1hy6r2QGAf8wod3JL6XTHnzcKz6Lse2KM71YXHWJPb1NZ9vesKRyV3yCUmaNkXPcmx5baoX3",
  "key31": "fB2ok71Qn1vPAiqYwGskspgK5vSmtbs5ZqdohvVSo4fRTQUXCKx4oTSbZ5VzJGCccaajnwhCpLEpjHLZRNor6RE",
  "key32": "4UPRG1478Y2ddxhQpjnkcvsGxB9iymvSE3c8n7FzEFDb987tgCcZjxK2MbX33AZK5CVVnZyz5JLtxtudgXenDfs5",
  "key33": "KiiBvrbvkWzSfVuZBn9YxeT2HKahoRaXNpJUV4PYz4BCWuVU1YfHc5pMxQMtwbX5y12T5qQNYtws1oj2DtDGxZK",
  "key34": "868kHtGB3z8eeMPkodpUzVVN3nWBGcVYSKv4pqT9SUN8Fjt6ck8kJbLfB7Q1tMzWVVus3jqg9XDGgBwUVmGXLpV",
  "key35": "5iu2jPPhTcDmZ8y79iuf6LTEbYUoXZLdQwK1Wkeen7CogPAhNA7wnzYDe2CfmetkSHZK58qhbCdp86HSvNXLZuUX",
  "key36": "5gjeLaiQWdSJBAk7po296H4828GfutsMHqgGkqywokDVSjJuf82Pe2BMYHvNgiBpB2rYS6oAzfzvQ9S5teyEMb6f",
  "key37": "MJVy6wJL8D2pRCu8L4aXFJiAgWuwq9j9T2hqFHFzW957KabDYF2oLMAwnEU8X5XL9o4qhovJFxSstcBaQZBA9y3",
  "key38": "MkDcV4C7Pt7VDe1HE3eF6JsBi18jJNjuzzmawpYNzeR2Nk1P8ccPvrm4NW1CgdHEN4E38cMxQVZfuZcSpAgTEd6",
  "key39": "4X9Tnq3bQ2A2vdZvWX78PqrBuhQM4veQJiwCNZ8upnstwkJMsgPb6pr5yGSXNRJ87uUDG52dQoueeYLCMyofswEd",
  "key40": "51uCAcMbnuQFkeSNDVpAprwqAmg5au2fBLiReQTrwLqpjvC7c8uirQ39fULHkuGBMEdev8KmE7B2ku5kzrCcNDxF",
  "key41": "5EaviZ2FWA6gS8nShrGFG1fVyhbZx2Zoa9LgirkAWZGuKhYmU5yhwbT2SyhxxsL6EffT6FhhcAGVZCuSpBSHYUDT",
  "key42": "3mSmeThKtJJFQQaaBHLqDnBrREHWfp9o4sQBKXddoy5M54wH5fYBw3GdSVs6sSkGoebF2srhnwVsLy81jvUZBfhH",
  "key43": "Fva2W7FdsYM7kkKViRGPXZuqjPrqrZ1goF1bb65WuFc85T6gAnVc4HLDSza6LHmDms49syNQBE1vP4rPZNBUgaX",
  "key44": "4eNK3ZJV8BBBA7FxGetVRnzEW7H4EVD6Y7oCMgvaSspgvQyuNDXPU1o7Z3DV1mfk1ciwmo2WNZabRNmnDxVXeh9B"
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
