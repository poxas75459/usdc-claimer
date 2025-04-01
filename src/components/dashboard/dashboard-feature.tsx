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
    "3fgfZXmiBwb9tXwbeVNC4dQqRg7ZjhqFrD1BahvAEggpvkjugMNGnMvQx5ik7UU71XKJ3xb7JBfcdxsg6YGmkddn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KGY6FNYW1czF2as67kimYPFw41MhhVRsxdiFegcayoiVQB2mmu9eZXiypCFpdvPmV4id8uyg3kR44JkgVqqXGKT",
  "key1": "3crwS5AZevYEnML6tZ258zwTbNqKAFzCuwsx15XAxpxFZgY7dMnKsTiLqRU8zXWfkK4Arib94sZW6UiAEpogJwsj",
  "key2": "2NHNDirvknVvspkRjukcf1Znm76byhJp3Fz3mkaCvkWyLHszUyHfbE93xiYWUdwVAUK2ax1TzAevgZBZX4m92yKW",
  "key3": "RdZqpGxkCmBP7hjDqo2kiL2D46AXy4GtQ7aUL3QgSYLLEjW8xmW2QWmjvtKa91qVdnkfzPTDfmDWzroQbvKwYGh",
  "key4": "2frSNzwCkyrwk8YMxAqVswmLSxtJ2JEtnaXLY9wzZhG8Bj6gr14mmWRym8tw8jEDfVSs3U1Qj2Fo4pWcE92A28Aq",
  "key5": "5Jjpom2BS6iTT1NSfWkfEfSiym29J7ZSk1scU85c2mCTMa9Hy4vBBceBAwG75zVg5f4yWxvfMGo8vdgFnqWn1R7g",
  "key6": "4YFLw9DGCL93yaYBAS5kaXMLHQeCX1Hvn1KB7B7MTfKrFE7NqP6zRmXPH4XS75Dn2dLX7Dn9xdLXsi7jDqUbMjMF",
  "key7": "5JVVwNaTyYCP5HTv95b1FMdYXxUQu9AcQHm9BNwwi2wpSV3n5BdCdX4XCxssV34LXcQRxvbtc3AE4VUNhj9vMCHf",
  "key8": "248tcrupTEThDBFXDPiFHx1i9QhSDvLeZKfu5o5gozZdNUq3YQSkKEivMxH3RYSgLvcidokFgCaCj3GoYpARKh1a",
  "key9": "Y7vNbZxppBwcMKsqE47gJGJPZbqELHfJoqEQvdZeFR8uh2MKTKbN7bsJ5TDrsKBSHSw14D4RkzN9Gdo4XRQbgKE",
  "key10": "2FCZUmB5pdJRQQM86p76W5F9GeRYvXqN2zw2N6cZsrAWr93QY1DsYP4zFVhsoWX1iiHXWRK34qbVYVLDzxbrqQHJ",
  "key11": "jdsY4rRhBxhfk2sFJ4PuW3iJwFuLN1CgWReVoMGsdxRZuUR5kiKZbXR3kxf9Q3qLDTNPYEyFB4CaufCX4ytrVMT",
  "key12": "3eYtkrCwThYXSRgHWpHGR5qbaPrhfVa4wp39nzJpnzQznm9PvBvjgAEN8gufRcwhDjoQKsV72CUib5aQYtrKaLos",
  "key13": "4ffBoDVHTKtsGqeZpBhBADjdE6BSuGcg2jDyZLmLdPxkskbt68iwaCVKY2XtAwVgUJ8DQCXEtsJ11KXQ6oZASFkj",
  "key14": "5wfhQnPgGTiuURsAHcCigYLYCZzzowU4cGfzkE4cCRQUZsB2zowRTKjyHxVvTLJqY6pwiQaKdm2wgoxfzhBFLgWc",
  "key15": "3zKxvR9EJGFDWUcjLGV6fzcP5Z85531U2mYUdxnHsMZpcPBD6ojvoTWyKMdMvaf1PXb4StgnWHzWQ2sYxiSrQBCS",
  "key16": "snzX2aBUv2XVF1mgjKFZVVzagQQXMb24SQk2ZJLC4QAzpwAw6QAutHUS2B59tyFNzdYNxJCa6xn3xPBx7pWQNXs",
  "key17": "2MmJfgDrFg7NHjYN25bAxgazGBd7nc3fmHsXLBFGfH75TsScCrZvpgYgU64xjFuxtFRjcCzgCGmkfuKyRsWp7BUm",
  "key18": "3gQMZGhU5pNTY9DRCdST5in1PX6gcaNjAJ9PMeVpwDrxLARgrR8YcywPjHVkSMghBjRHrkkjwnVp9t1ABoWdboXx",
  "key19": "jSAM9KnvnLjAKqTqkHtEDmFHyPXmQdVMmoa1uF1yNimecJyxNtgJdN1qBS2LTapWuATyugM818ScTMQmFb5zxsV",
  "key20": "2RbvByA6JKf8fMt9mkfzE4phkUgACybDVr4SEEe15EYhjGjrz7aMX5SzMYjfoyeP5VSid9uoS9zoDK59TnyhiEUa",
  "key21": "67m3usU5jAZiUeFMYdUfTvwoAdWKby9hegvxenG13WDEJ39MGyraFhiswsTyWmHcS6nQTt2MbWrbSsT5Cpo8rVqm",
  "key22": "jjWH9ayNwf996ajK9TqdtidoQ6pGjTEComgrQnSaVTADrfQvr4oinNiv8xCJvDcu6CQdGArfxGkden64MPNCwvv",
  "key23": "Xjm7xs8v38noC7jCpMA46NYrjmG1uofR5NvgxuThqgyTgJcEdVfvuG5Ya3hiEDRv9xvR4o2YhcRniSdFbhPHpk8",
  "key24": "4d7icbxdfnbCvdpCvkvANUGhCcYpkxLdkULscS3xjHxWtycCsEyhyC2TT617dQ1HgACE1PVqeDVGaFU53NmDkbD4",
  "key25": "9rvY9Xgrkk855w59fXQiakqsqmEcanVeDbj9nZAPERbD6YBzm4SdpQsJFaGhGAJA7uSuRBW7MtBcYwg41cumTyZ",
  "key26": "2Ak9iTxZbGHW5xzQzWSQG9ky3FZcqgXdyiqo64hwheeY5Ly9hnemMoyDWkHLoVL7rGYa1MHqhdag4wzKZtsvV4ho",
  "key27": "5JCJXJsqpo7E4rEkmCpNZDjPA65XXMxEuMvnpS1D2nn166ijLeUh9bMQfWXT5Mngwp28n8dVzqxBcNWxvdrykDnC",
  "key28": "4wbjVCUawsD8tY7zLPjJUgNrcYRuaSXHLped2DkXCLArARw5d3kSZvv7HnHtC6dRDKjuYDqG5635w937iBNkkSEp",
  "key29": "Zkn5sAsnXjc5RuvyCHgms58XnTtPQVw1N47ztFLHkUZjfJZ4DhPevmyAhM4RMzaa9QMLuiJhwKCLxC7B84THB2V",
  "key30": "3sp2zrRhirvrYqSAqPxeZwetLMGPAYEQvqgTbgKoc1ttzeDAPfJDziSX55559SRuvZx2rSZGAT69Ju1C2VXKiD99",
  "key31": "5ixcUqQ4hxvrP4YVPDM6iJxF3r5HZ7aK8xjVAUxmwcymYfrBaUpQRiurpnxUPrDwvWL7G41z6kfP69x2TfQRRYsz",
  "key32": "5VjRMrBcfHkPPtKAv41b4We9QrDtFCipkBYsaRMtFSQEtikyY8sbjk97FdMYeWv3kPDhv8F8LwzNNbS6ysLCqrLZ",
  "key33": "5QeT3vHqCyNYm1Tmi77VPPPUu2E7Yak9U7rK6gU9kWahZqFiKP2e3anqC5bENCpiZDWD7FAZ67Ms42Nqg53A3SaE",
  "key34": "3KP2912p7pCECbNvL9iYrup3evN5MiCtrGXBUMoAsWryXUAUXjqwhYuwuTBDuKQbP3M7xVCnaAU2oussRpy7t2MQ",
  "key35": "293jn3tWF1kSkHiEJ97acKpTmGkehrzez4iV8Cs4E67r8REgt86asdtF584dsZBthJP9DDABbHhx35m4VQssteda",
  "key36": "d9p4ZJh7R2hfP9jHWk184RQJRVfZTG3nHBXd96oDKegRRxiKfyqSLfmR5HzdTuh5m9Kmj2Goy82gi79HapFPZQb",
  "key37": "2AYEpZF1j3QWsPXfcp2kKYdN7rKeXaPiMoX6aLYfkoZ7JpDRUMhToRn6LTbC1U7iGXfMWc6Xdz7zSx9zEw6j84aJ",
  "key38": "5N7Nw6UkzuPenBBwkpAD9eFQ9Pnxu96yyQM3gWgtJBeqsujpgkZpfAPUDuZMnkU5d9ncZ3BWAmwVxvhC7uYNTNcW",
  "key39": "3uhrApPAGfd6ECdJ5aEbA3Mgdg1nVQ2YbLqF1f5yxaDZg83pn9AoFHybjdnHf9VTHGL86nybmZcoKoGFHqs4ws2b",
  "key40": "2TzBoDvVue9UTuLgxcJozCXKMWWJEwvR3K39eY2juDsm1yRaph6HWW1c7DFW2KVS6wVM2ENT1JPnLy9WGYHTgXxP",
  "key41": "2uWLF7oytjJERtQ7w2CTfb66HkZDyQpyDaQMv2T3MqGduFREpmmR6dW1EWc5YqKVPgxd3wamg5TeLF5uu9AvVuS1"
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
