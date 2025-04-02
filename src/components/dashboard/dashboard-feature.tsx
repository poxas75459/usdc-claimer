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
    "2BGweGXkCsfK3eGyeUWaszpb78dLFX8sRZKusv88GVy6mQuSPhCtH7RgxujHenPqw3v6kaE1hg5bPiXQTvNoaG3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7i9W72MhpHx4k8scAAJN9E22yhjVaoxcKBRigumbW5XUn4bahaC1HUZmBvZ33J3ZnY5tgLsPK7jg6pfprwajdSP",
  "key1": "3vm7SdAvZ6LUD4HHnniVgsHxk4XjFJxHAgfKGETwvuAiteb1rUACYwaFMkoAwRJaTagE3bjdTXu6iKsU2gjUtxsJ",
  "key2": "2XCKn1k58iB1LAaA7tnw237XdUBKpsg1hKcqxWGpqTbzSfY21BR3cWR2KknDtCmzBCVKyfbNLMcpH4XSnkc2QBK1",
  "key3": "t7A93tQhCjQd3zZJSNt6wzK7J8aHNRsbtntSkzhHT3Nt36AUAPKzLeCjUamXZPfXLA39sQg3nZdYQHU5q3puEdj",
  "key4": "3AznDEEZNdie4WLGpX2UaqKfa5YNNCwFWNZjyqhkxihzmbVgyP5qNtTXUx1m1D5vXzNg5ogEyPiVcR2wcQrP9zza",
  "key5": "Ec97D58HsCXimWZuTUKwWUdgexWhbHj3FSaZ2bMeVWshkngb8RZc9eNxK2PpFGCiLhsho2j1Rz7ZA3pY2QcgLTD",
  "key6": "4om2KUP64QWumssnQ1R8DMQtwbdndenxyp6nnoaN889QWcCkaq5LP4jLdwnCJ7RZZLFcQ6rGEH6wykyBcHqaUEhv",
  "key7": "4GDNKx69MYkcJk1sEcHvgRFH3P2v15Hi1yRiacjThi5d1SbgwBP7cfZgteBjmnxh64cWtBsVMDsJkgJ65t2QgKEi",
  "key8": "4sr5eHDGtDTayTQDxfaE7nMix63EUxPHb7QB4sbMzvvrLdR6qApLicU8b7myi2ynZLRN54VHSWDYKskYbbQLB6TY",
  "key9": "3nGVmcVqJ154gPLeCJisMMLDv8bmXme2GVgNsvBZhhYEoBSyCbpZXf5x7hqYNdKDkEgktqiFp5L4SieqrcKZUsNf",
  "key10": "5Rj3pMQhBBn5aPn6QhtMPscbHZjaPUbLFPxyBXCzKvroivbCw9x31BgZQNn2VCteaxbM6Htkck6bKdomowbP559B",
  "key11": "KmMeuK26Fc37QLyxcUkdqkCJoa9ZKSQdJeMV282ZSQe6Vcpw5aaq1EzJwX4uhxWMmgw9ftjrjVjFhc91GGquDEF",
  "key12": "3i4YKF4mK2psEX5po5mcHNmstLRU3vR9x1L84JvoFy7EejyLTHcScsQivbEvzn1SM8FtzbNtVZALkarNLiQRsHFd",
  "key13": "zXXdmWsae9sZYZ544fxQji9WsCTuQgcwYKX8W3mWUvjwqvAxyJ4KB7PHaJ3dMGkJdoEL6AixELHgbc47ehHa14Z",
  "key14": "2CoA26QcMVWx3jrC94MexRhEzPgR3StUA4BnG8ayXEdug3ti3D2KaChYnCVBmF1usYQdnzGyJHCpZZLScwfzn7v",
  "key15": "5yQ13JGhsmc2HTKg2yuaFrWVageNtD9yGdMUVrGM5GFekRvbhq9nou5XFk3sKcLgiJTG3SFrJMYA5ksUQzLLvEpf",
  "key16": "5vQ8qf6pe8puEPJewCcxxydQCP9UQLRpE7nNtzttWKRt9fvh8rZv1oRUdtmpA92GK2XcVmQz84pPKgDGx7NpPsP2",
  "key17": "5dVW6PKVe8N3K43ydNqA2mvZMuCD79orhFDKjsbHpPWU13udnjgazKKwZCmiYRcwS5cb9P5aQqNXjhnLkvzEXadZ",
  "key18": "4w2KqaArK6GPAH49eG4insBfpij5dcSg9gvQGcqBnLeEWdViX1yPfDokMgLcU4v6L4R92AYtKgDxkho4yiTc55cK",
  "key19": "5MAzrzjPG4XxgoJ7eZvL8ZT2FrfHoLgxbyaXU2UYjYbYbjfvrzzaW6nceRExxVV3kv9t4SPamF8CDi4YMQuhd56A",
  "key20": "3mL4uubRNDBwe5VUn3XSpzYhYCyKEPJ5GgvwyULTnMBPK9FdQgzGmXWj4F8QcV8gS6vEHoTYEh7UhpVUumuVT926",
  "key21": "5kRE3WhxrMLq18vmNApKQSfziewpMciS6svSRV2T4tTBNHTQh8HzHhujFnASAyqfEvTE9DLYNDD3UJJaCxr4AmuM",
  "key22": "3tMLsmCKjFtNSMhyjbUpokYVaJJA6oKLfbyckcpAe59fDomDA3bzhoLCmCwkZC5cVgSAKMqTHoVfSCZpzw5VP5B8",
  "key23": "48uVxJ7V7gWe4Y3txxDYcB3NWHfCHxpmtzgCHqJK75XBAjvy74ZS85Bu9RRDJ57dcSagdbPoCjUSAyqdXLSXba9T",
  "key24": "22Cy7D6TxZpmrFHAvRLw5gyevpYcJxxSpG3RU8GucWz8vqarfjvzfjLtPx8E9M5m9Tf9ATMT6RjwETkqn1N8ZWds",
  "key25": "uhJ7GbkwtK6gu57FenugxB2XGD7b42DrpELeirYiV2rYhFMAvjZswjMBgucbBNb3Fuq52Bup61GAE8agTEvAFwA",
  "key26": "3c63UodcJFTvc4ukyiNQ56gQcW3cfGLUd3c8aXB6EfP1GFnernrbuChPpAknTcuFdMwpZLddH2zWn1xizkTaiddG",
  "key27": "5d4G1BQejgPTy89Sjj3ZyD7wW9v4z7drbEnD7t3PwSa9bE9x6xdDPU8uS5XbJJvTQ4V189P6PJn973meytd16zrJ"
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
