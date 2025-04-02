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
    "4fwdymqSftYKmoZGY7EgVhtBaEEyVFCPEc9TJdhmxFVxpRHfQGzceVimP7JGNK96aVR9tz9Kr5XsczKmugDDrV4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3itefbKK5RP8CbciEVScpLAG3sF4Ei4vWnwfjt44TJaUgEJikMmCG4BX4UJ1MWVUTaqELq9RVzJFuxHjr3t3CKER",
  "key1": "4LjPnzCUF88hceLpsSHVnKv8tTm4B1kjB3pCM1Zxt8w9b6HM7B4yZhi1foBv86PabeTSZhuXjdELZE8YKJ5g5bqg",
  "key2": "4J7Miaj2rpPmRfGKi7KKYxijjhs3bKNfKyKN11nTzy8jkyjjLK2czxDo6fjVhEJ3MayiCq3UAnb4xQASW7Ah6ft5",
  "key3": "2Vwm4eXFzNdnhwqrJqZ8fdkHQN7JiSMTh4jVXsSt3zAnfucN8MJmhx6ScpxVwDGSbBm5p93yTGMjhHLtMMFSJFr1",
  "key4": "2AHgi9yXuSAUiQJHkLZQxvWe1zwjuyRygWTddHse9hyEeb8h83Qk3JnJgrejg1YZ6bDmveSjcnm4m19CckdZH5Qe",
  "key5": "57AuA2xrNiYjUyyp5F3VxC6Pyzp1FuR7xa87ZwbDx3CbB6NM9EZDXWz7e8cz87hrbg4fVBerjRWA2iwKwrjnzHYa",
  "key6": "4i6ie6PpMUQivP839bKJMBgDohytrtvin7EPAqL4RjtA11SdBqd4B1AYasu9k2BpeT3H9jeMHjEMYTUYJLsneKjY",
  "key7": "4ED2riHJQzJPVrGCoeG8NnJWAMysdGuR3XQ1jxsgL79rjqievtwZ8up4KfWgEF7CsFQsGfETcCcBnu46XtZ6cTJN",
  "key8": "2yyURsPttnA2tT1ga3cuKPV353tHWbriGu4a31jV7Wjs6dkShTA5jXPEaDDMnTTWBoXuxybnDm6iYWuqUJKJ3yDp",
  "key9": "5i87oUGu2oVuaEbGX9XtHT6SKKxprTfzLWkdu5h8W7ZBJbmRxRLCjEFQNj691VHmZ9mZurs7PFHKZ3W5yXSYLdKS",
  "key10": "4tyNosnh6Ejft5PobMHzUyjwzLY8529wTwVXamfk671HPMk47pNs5TzYt8xf5W99fCfm6xJ4SaDCnybZRatby1eN",
  "key11": "v5Gitb31H7uNvUHDT5zqcvYr6nAYqZSyarvyzZWDgrmtgQAFtkRqHQGVN33ZLFqSuiPgnwrEP36Tf5bnpwgT7Dh",
  "key12": "3EU6KvJ7P1x7Ly9LSMMSJuCgTPdALboHCfEWyQP8aqjZWQk1z1QJxB38aEiu7tnaZuVHv1XHuTDBoSxwQAh9TJRF",
  "key13": "4ZHCtRscDX3DcxrDKp29UVphAroREAQzDgg1pbufsmdNzrnVVhS77nrV8VWNYjMi2tctNUBzHrY1Te9fnJU6PKuP",
  "key14": "472yJeXjrSRDbs1KuEDfKixZoTPLmZ3pJEkR9VFEBLnTYWekoMLjTshq4zdkdmQzwbthE3jSKzmq5qHx3aB9CKtY",
  "key15": "26AUcXxviuAwvy8UMZusHA7YcnybwHsLDBe5L6WNoNGAUZ31eyrFXcui1FHZfhAtouc8a3Kf28wQFGgLmGuyHcRv",
  "key16": "5AykKdCa7NrLys6gjvuWu8cW3dZLv5AZw88wh8FebT2haBqZQYjnWfbkzf2SyypNDPHBN6zYyDUKhwjokDthtw7g",
  "key17": "4aohThCzA6begD1HCQQs7BQEWnEJTuB9DQBEgoDNbZKgYrkAVpE4gJu92wXeJXvRv5ox87rjhWs7Frftqv8kAfkG",
  "key18": "kTp56LPfpjjAoUYKnhV1824mVzX7PUqarraykLUGNfDRSzHr66LuCNisXXSJPHoBLN5TMBevifA71k9NCN1cNpZ",
  "key19": "4LEHR3wWWgqiDtPA2SdJFZatSe6obMLVEU1XhK7xH96f9ZufouogUiwFR5D9ViW6iEWzzfBHwSfXJDphR4shNvWm",
  "key20": "3sjuJik1dafeN3Qu2euro4zsgGCAVkcukhQneyqjV8tmevCXSBmt6yk1K3dVA9XCGi1N243vK56KrXjpU6SFaq8Q",
  "key21": "VmEVAAnmWCY1N4mjLx4DU7TpGQtDLnNsEJCXNwWcQUSQQkeFkN4jHwHSq2vngXuqWayn8hu9Wf5du516emFA99a",
  "key22": "MPwnmaBbMmd17mFWrobYpGdXkxk7Witum23xekWrigmRhhYg1MzKMQprCK5m4y7Zw6LZKHNRs9qKKAhVf3GBXnp",
  "key23": "3bb9KUzowjY8jCTiPfeREQ4z5VjwG8aZ6RiETSVDrBBbYa7VhoWcmQ1f6N6bNW2xfXZtwdaf7YhSs9FjdxZjYogi",
  "key24": "25UgPPwjfm6dRawZ63kimzMumrvJWJuLBAUrZs6ydqFMazRaSW4HN4tXpnWpwKmdZWUJfboX44sM5ft6AzRqFYsB",
  "key25": "3Z6unrx97oMSQ2GVEKkmYgkhFpgGzuaCczn2S4gJnNTVGNb9o9pjmNtFgAMxUrwDM5n5XDjAUka1t6SJnoumfTio",
  "key26": "2VJmRazJfHpow2m6qVmP6DzRpq823G1HujEZdbwtvVjgrkeobvCp73VHxaytB1nKHT6j6oYD7oF6nnRyrAWFRyj1",
  "key27": "42VJcMbE35GsJBSMoGY3KQmwhkoeyvctRjzrngEdBbonLDd3CEJKDraT63Ws93utYJQY6E2pgU6vBN3N4jxMjc1f",
  "key28": "nY8DVNo1noRnwhKJP2NmYC35Sk9YZqzkPeJ2gUXyPyBGXGbJTNpgpYTpw1ip4RZbgiYgdA7j3CcFsGdjyH3F1KY",
  "key29": "3UoEAc7iJXmEbiQ5BPiSdFBWmaRgzDR1c6uGLVnTUHMHcRrYt7zKeFfBrH4wfk1yNyFswLb7ShZWYJpSaYo5MtPv"
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
