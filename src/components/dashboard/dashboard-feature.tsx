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
    "5YGmNQgUhcekL1tkqPQjXgtTMuQ7e9eFUyqL63bXjb7ZwdfKrwiZQrdp9yZCGQidiaBeAbTtxfAPZ9CK3oagkQfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jjSR11aEjB8Fbx9Y4zFYCgNuYm1Ub1tBEavskRPcqeRVmZnxhB53PSA7xpM4pELh8mTo8SeeqGz6Cf9T3TP8zDM",
  "key1": "RNmjz6Ay1zLKkAzQf3XiHBaYmWqcAgnXAijVNJvn27C4rqi6pF1oY3ExBMnTreQjmHkDjEoQNhb9pPTHRKX89Hy",
  "key2": "5EFPp1Xe9MTGYanL9B4rydvEx2nUZAFXyh3bxHuYiM1wyn2xZyhRAf4aEsouAbaPGxU1rXbQjhqPV1cQcnNNjmrB",
  "key3": "86nYLpFGBpeTpRGgJygERwweq9e5tN65TwakQNCRoLPwCMC8JNrWEpSK5pKpoEg5vbtb1XUaEc6iG5tz1HjojmT",
  "key4": "31V5YyiddCgiwj6bmG9AjJFWgMUL1YHtKhNsfoQMAA7UKSdEVwszrmqYnpYjKyKAQaF6ZteyoRv1LnPv7pVwpbjQ",
  "key5": "4kkqefg1ifVpFVjG4NatVsSDgY53ChUMqTq7djCH5dVyE3EAwZv1GApaApbnSbG3sUTuBcjFCxEQHDYqK3D5eXbn",
  "key6": "4jC8KatCyxCo3ZPR2juUr59GYFgqUSpq2nhsra36bno7h93cYEWk6qGyn8vLmLVvjWu2vyt8QkD4mejWshh1grZS",
  "key7": "XMr9ZYKb3JX4APqGRS7LGz5p1QjSqaLX3QMd1QhHXA2kc7n7vYsBMFGhJEZzS6hye7bp2uG9m7exUJK389qXvmX",
  "key8": "29JJjjmtGdMY37ai95LfA9PSrjMc4NnfV4U4CMQW3Pm3wHFPyMgjthXPgHGpvfW9X8W4RLCQZkPgStRMmsexB6cn",
  "key9": "3Q9sqi4H8zEg68jw7J3dCWxpBjiDrMSUNXkqG4uPdYSjz4APtTzfC3aaFGRns54RQoSoVt2DTW9h2PGDKxgxZFP7",
  "key10": "3umLoZC32KFSofgx2A2nJtnh4c93c8kmHLn8UAsjv51ZVmpgh3ZjQWrTtYdqkXqALuhr7qUgPWaouaY56U7mFRjh",
  "key11": "4afsMkQwx3Gue6WndMzN1uw91qR9hbbKEiDB8RXwFrorP3y56qWZJSY6Guh82uom9Jb9FLn8iLFwn8nP93C4JSob",
  "key12": "4fNFuh91nK5ohcjc8sRqcebt7mEYmGyyuPH6gsMXLUgVaB8FKgCqTjWCFu61xK8eDJ6PmTbXYUJbcfPZBEqQr3D",
  "key13": "5J4oaCVf98VDSWzVcDmpKDzRdsgXorZEbUL3r83dChK4H3kKzPEZHa8yMkB7nDzvuXp5PRYWqvMshPbX9cLAGSy",
  "key14": "47Wh8ajPHwzJja8QMEp4FNbnDXRVhQJ1pVymERRVkgCr44iMen6RJYGxmMas85ZVC9v4kEAxfrF8KXS7Atp66pGz",
  "key15": "3D45FyLV8t7wuT3u3EAmYVMXkfGBzL3zpRjRhavdLS6Du6rwCDPJi4fpnWgjMAzVY3UC43cCzmUCGeFvG2PpH8Pu",
  "key16": "5B8yGpUEz9b63QkzEYe4Y6YTG1sKLTu1c5fbtHce5cLLX2cTkevUQN34cptjGrhsFuaR1EXpQ6zy3GY4nE418Kdz",
  "key17": "zmmiftgn2SqvFbwDn1F2TShFzf36jaggpYmh3mGqkd75Qex6XSiEFi213A88MDBx4MbMeeXSnxhbzJLCCyK8xuZ",
  "key18": "21Ht6sZJeNoWq2XkHADQZ8mnP87jzPSHssd9geaoA1hyw8Em9hfMBXC14dqevhWtB5uvMwkwgDUpMFgD5Ze1xpVC",
  "key19": "C4V2PFfehStokBnmdUXRL1iNCDLasBBxpdC33aPrWAHWE2RTQ9G79eo6qNKbumMHWfUqq8i4MT6bDdssg43hBoF",
  "key20": "2iwCbJzsrKr2yNpYGhAsFjRhKoyKUnTdQZ9Lsj1rJ2DdKKmsaGYhybDT5ioqfQjeMu3uSWDbxrumu5VFko12rYEr",
  "key21": "3rWoaoE3rYGNvzN9tEVGpm979bfHqDLYzASXy1vqxtQzGeUKKfW1tFjW41paskDwXtYqQk7zTMzVHfjRSADQJFvS",
  "key22": "2Uaap5mKZ2hGHnGDPtLykvTYY9hExdmj616xP19B2qqZshKo9Bv4nB3gk91mp2cZzMHLpfkp6QjbFJJGTGXts7ke",
  "key23": "44HkwtRJaVM2xzK8ddJSYf7jgvviintFfsZH8t2FRFyGAM6RnDd4Ry8YAzjFXYe5XA1ga2srBjFbc5peapUyHG7P",
  "key24": "4wNHegA6CF53reHZEkTxeMcGXB3dtVhoojaa9dAXiwBbLjSt9aiVXBykiUhTxdUF8k4pXLXoTZdbgCd6FDqfMb6L",
  "key25": "2zdE78VTWuY5ZYwzyBvUpTj64dkjjgwtNv93FEZfW6Nv1zYpcejkyC4HtiMRJLfoDSEHwDD5NYTtejYss11AQcQw",
  "key26": "49u6fMZfdSMrRiRuazFb15hJjKGXekf7Y5HSYpCSaDwshBZPhM69oW6BRCqzadwmt1oi3EKSs8rZbFUMtZDFVJT7",
  "key27": "3wseAoySfi96VSTnt8wMvJRPWLtRsvdP5TYEBCvAp4tGv4em3MrymeG6D78qjmDxTj3rUCon1z1icmPBWHSND721",
  "key28": "2vzAeUUe3u9cj41bZi22QuUxL85prh3fGw6GFGxNT7p8Bi7ew1QWDYEq22rNfq8EFBwAZ7Vf5nNefaZebnNHtkZd",
  "key29": "wyPhAqnwwrmrmQV8HtuJa5SWS4ppZtDWxzjxpbTMKeFJNEqNCsJLaLmRWirCcWDsx5CdJm4ncZHg6bqK1Jn7WGL",
  "key30": "5EMmUFfKMss2ffkeeXnhUUDyFKsaCRh48Yxfk7WGG3RWfmdY8qebphmxbckdPXY7Lb4N7RWjTa8TpDEbdyh9MThy",
  "key31": "51V6woXuHGxQRZRaxScD11t3LMcDHugvw5uubySee2wBWRsdbwVue1qdHpR2gV8BsvxJgPELj1ueVbjzvwNDxR5a",
  "key32": "GbP7hnJobYwnsigdEvK8PZZbzq2CSsAyLP1Qufsssz8JrUwca6BeiLdUhfFsUBYwXbqi7LBfWiEEQPQ4EAc2Bxm",
  "key33": "27Dnj5gMQJymhvCcHvyQHAAKDAJKetsL6YaNJNca51jqvwnUBTQsfdNF1ud9Vx6yH15a1EnhT6B7YRUQxqvwMrmL",
  "key34": "21FM5y5GFfeDLjXRbfvxtzzWcd2CVKBdRP3EvSxfuBaVm7rf7hjDTtrE57KqsMofcbBkUEWNmFdckoko53Gm5Jzd",
  "key35": "Ns3MNWgWuJFXZS9DaJyg71f4aeXkFBvsYzEqyMnVAf5qFeKTqURr5t3p4tbNTUfGNRWgjxp79YtXQDKhYU5hCUx",
  "key36": "4PDwxFSfyqnzXTA2PUPob3ujsskYqyZ8qFhMaq9YCcca5DA1sguKyLxzZaVncgC5QwXqCKri6y4XcWstnLdtwEge",
  "key37": "442FCbxQ3Pjcr8JogEN9AxBskX43aUtfKH2KkzfVciD4jpFskv19qRJMgG6uCjSaxPGYTNagHiZVT8QbQ6AyVYe3",
  "key38": "59fpWgqRM2hrjcjBFSLE3pb8z8ufdhqruVGaB95zY91529YMmL3jMWbT4SC17gVsAVQbjPRfMTboCsCeuWbJEij9",
  "key39": "5SScyNzMjCfaAqbx1wgsiP7LD5HGsLfhghSLHjkSFhjD9bc5yrSN6Xtaj83AF5L9adgJSRyDvS7YoBNBgBtFHQ3K",
  "key40": "2bkReYsiMuvx5opNZXUmx4C6tWqwz6m4g5rxUgC4JwmfHm519QXXfJD9bjkkZWZLNuSBG5sQ6J13jDdgvwxda3iC"
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
