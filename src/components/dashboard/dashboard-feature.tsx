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
    "3yzkTBTyP3uBFJD1JnTRK67KvQ7qm1mmTiGSDgpYUUbyyvJCpnRVtMBGbXBnkS54B44Y9sM41H6FUoddwBZsuGt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5StKfXHTzZtTa743Qs6YpLRbKZbPHHt14zMXGEW2rZSGuiH9otw9uh31QyfiHM8M7X4KAvwRdE8CrrAf8j3yAR5R",
  "key1": "2Bz6pRgVGAZ5gS7AFZyT5zzLq2DSBd8df8G38HwfHvo9DTap6cpd7yFvvhm4inBahn1EcmVKWkbgZ43NJ6xJqK3k",
  "key2": "5GSZ3e5QjJEMkjNqRqrF9DzpSYt5UBQki8dhwoYuYgKnermdwcKZMjjfBEUq5S5ePjAPmTmnKYpdEqg79dXxwfPV",
  "key3": "5x5zwshuWm6KdhnScay1oW8qxiYy7CMB3xXmRWvHnhNPKDCeGrSVRRiqP9e5cJHxLRQ7s6FRAqv4iex3N5jDGRRy",
  "key4": "2sC8RsAaaGVhUwPV2SbrYc4rMc8X2QipPaW42Z1JQgexw5R7hz7KH4tYvFB9Egrqx6vLxfyDrU6jYg986Ry7sGru",
  "key5": "4cgUn9Ny4AEBCXRWyDSd8hRxneBHCftXoxUUTDenJ6aZvnnnfGPkXBYdE46qNqt3ZVAeKtMQyVDCgJuPXwky4WMM",
  "key6": "4GGYkhCaZBCkqW4SoXs4qUXpWXWkDfGBrbPadSqbjSB4kaA8gFrrXYp82iWb1brD6qwenPnWmwM8oWN6n8zWT5L6",
  "key7": "3MCCKUVUiQFGL9PEtRzvjJ6CrHE9gfDoY7fzCpTEkCq4w78BuQA3bTkCZgERywMZBwJzPXRd36UFwLvvNDJ9Ah2T",
  "key8": "48VxXf6VL4P9pfBjhkZbeY2r81nEb3Z2TyHhCuLXza4svinZUgzNceiC2NbvC5xoj9PDfWnNzfHS6S5gAvdUYJRB",
  "key9": "2u6oyET8KKhxwozyMaUZCkyQaTfTbfeSZrnU8yo4fJ3dnH6629xCanSY55JuJ7s8TGp6cqQdNCCf5o5Twgndf9Hr",
  "key10": "3D9MgnE6HhMYacoRby9tGEBPDZBRnC1nPoevsmAqUqWYkBZJ8GkXWJEFtxEZf1zPhukubNCcaNcJuzqu9MzfpMPo",
  "key11": "44mU14NDSXtrvWVeP2cii6CkoPT3Eb6jrkNb36eiWJWB6kLzU9wWMxp7ug5hioWe8ZhBwsPvg439fC9vEfpQSMvd",
  "key12": "5T1VeZqTofB9cPbeioNby8JgPVA6A2tuFsWmKVpEqstMwxJaR4EynGPFw24wwL6N4vaS6bwxYKuZBZoiKXXeSQGV",
  "key13": "4PiRsr6HFLDPApNwCbXodbTDRSMc2A7K1VyKVRV5W6r8h4Tc6m8gL66yybWJ1ToPUh9n9oPcyiWvkAEdUs2nTosb",
  "key14": "5Rt1P4NPfzukAd7zYVY2osouKAHRuy5UCSGkpB5C95bbEBSdqbRdpCvJoCt7pTogoffQ71JuNBr4jG7eD5fTmgkC",
  "key15": "42UrWpDmaxmXyLLHyi4qHLMqMoiS4mYLvAiHzK4dZz3VLmwLwuB5EeRsVWfuNH3b1aGoiqHZkFqnvuSYGWFLn6db",
  "key16": "653QLhbfeTCHfnBGakBqRwv72j8jn3bSvn64VTMNqPoxoak5WsYtoTRcPDyUVyExAYq5MFNCwvgtpztCDkmzxskf",
  "key17": "5Bfn5u5c3G2h9jpmZgPBX3iX1SCQTN5QgkA97fc2hvV4Wz159LfRKJMmrxW1Yd6XHugLymd99uUDTJJ1qAPp7bWM",
  "key18": "q5MKURAzNPf67XjFzFUj6QHdS8nR4ZBtQgxz3LEdCFAwB5QpxBrDqZAZjChEeffqLQ6bCR2KyaUKeSNsEzi3Zrp",
  "key19": "LrFpsTQ7UGCCj6L4CNFjr3peAm9wyeKAS8NGYo3neooeovfQAtVjAyrprgotZ51e34BMpRKiXo3Yz9xkQN4Cw7j",
  "key20": "45KSAYriWAbWPfzxGvSKpKJNDNVN6yHC6pEQdigBB7cYgH18Rd5kR84iZ9QxQoKPXAsXDtqKgotucMHtNKNGHsTQ",
  "key21": "61MdDzcFUQiYNY6UPjW8JAViY2i2rbppDo7nyhaND4nPsqnb36jQmxmcjgCbu44wmxWW19rbcCQRcAGQZWSFmB8U",
  "key22": "2djpLx3yoTVBk5dXA1WZZ598KRKtx7dorKNkU8aj8SGuvWRzb91X1yXaDDiZc3rc8c16dVtQFkk1hy4shVfedfwV",
  "key23": "2yMfkPAZx1vCh4uQkmpFCK6hPjJBiPtbbkBnXn1r76wYAeNh2Wxynxf4pn1Wx4ff9eLs9mGGG9mvWhvCTi1NZaCH",
  "key24": "37YxencfsQgAycBYx66ZATFiP38d9b49WdTJ8hLtFKxNvUsuSXitmGzB7BHPuhQZoUJdoEF2BViD9vXWi3wJydB5",
  "key25": "RpCpFhqnctAhpMkD3A7mEgnC8zhpRss5g83JnmzHT6Dq6Tsrn6mcuxTsUE8cqmK27yzWGcjS9H1h3CX6rTHbQe8",
  "key26": "5n4mGtJdqp4erFSgYYVNFGp4KdVd33taJcGS1qyiFrKJ4XeeT3t9WdZc5auWxbBKNjgTBeJD9GowhPuZcM6iS9Ub",
  "key27": "3uFQDRWB51ZGwsX6YE7HdEkvoVxiFUdgxDPwZLhHMLFPqcwE9ZHYGKMyBYGAmANeGTwQB15ku2KvT3L84b2p6gpn",
  "key28": "4tQgUJ3eZ4dNW7jpVhqehAfSmnXGG7LDYX8ozAhUf2Wf78Qu6KG5WtxETiD2XTduqsotJod4eDc6tVDzdwa72Doi",
  "key29": "4YfSEnRV6RybJqxg5qJbcbY54s9nJiafRvmpapsB6JCvNmKgSPYJLKb8WawmrffHVSWCgwiDYiAeT5pwxCMMuBUH",
  "key30": "3qAmbckLstK2vp8gAmSCVRBP4MbK987h9aTjxg8cbFfjfRoPNQgqAZxLXckeLS6TwcZXr926SWPN5B7tN3X9zias",
  "key31": "4zsTF6YojnDZ7tL3NSJ7c7HHy449zGLtyC4cp1pJsevUaaw5KkYb9kK1uFvDKJUL4FCmaBdtwKLs16FLzvhDi9Em",
  "key32": "ostrZ7VwHknZrGE7m83n868F7FxemDFP8D19Wp72udunnN3j4xoUESFCqR6LhruRETKVrZBTwj4PBtoB4tb3QWt",
  "key33": "5HYmhQzFzK8sZn5A9RcPhgUZK1ypg7vKuSt5sY3EfzNsBd13EapjdydmFv7vy1rGB1NCGKEes7C2zJCUcF8X56Qk",
  "key34": "3izqZQv45fjpWQUtA8nX1cioKGqExji3cRx8mkees3hyHdsj6Mrf7c2b7Nz7d7AjuWYRj7gj7WMsDz4ec7i7NJtz",
  "key35": "3sHdiGGcRjPxgZGe4g7jZSSDcg2PECcZtUvFAtea4pA78citbBPHJnn3mu17EdBJK3aNxy7DR1X6SWpNbKemMDb4",
  "key36": "t1xUARRNS7Bt7qiZxLdNk9fMTUZ7vLk5Mnzx34dUbPYFPza3dtYdSuPmAJuUD14RCFzoCZnFq8aqse6TXoK9kg2",
  "key37": "5okRdfPQufA3TBR265NsghZfzFx2ZwHBHSRJsPvaNtZmJRGXCefZTd3CyFGkB6fDmtqKJ5ucCsAGd8Lfv2MysoaE",
  "key38": "2E3BM16rcHgdQsHNcK1m2BhcNJB4TcDUam1vDZBNYJQ7r9o97144HvvZSr5afjxrzqJYMmS5hs2cDZP91TwaaVMp",
  "key39": "qkADciCXmDhnZC6fzG6wbpRhLrZRCvgTduoBtzwfk96DRZEiSrm3K1L4mCwQxz2HdDhZq3foEiJxCAyQbNMbKPt",
  "key40": "22tG6ny5v9z8dVJABvrb85ujqqRk2xr3BQyECz3kcSFw3qX5gJvKyMDZZuPCmKJMq7R6Umsgc7k6WDjdgm7XsRF7",
  "key41": "5R93jLFUzevmGrsVtT8bfUdDEKme4aPW58i3xCzyvRXvDRZxiC51XV4rY2qphmH7UH7HygBbE2kbJQ4jQwzy4Bnn",
  "key42": "fLZKsRot5fzmkwGgN9u4sMeKdCmqatCWv64T27TTGDMJ89SAKhqwJMmSryjMYHJ8tNRCdQ3mbN21mBLtbUCqjut",
  "key43": "3UNxjSLpxSDE5VT5KYeL8CjWH6x6gjjxzL5H2Qmf4bcU6Jem4cCL9SiwHMFZ2qavitypjiT2JwQ4xG1ZxkyPyv7v",
  "key44": "3tPi5FqxWAZbJ4udnYWhT59E9wrZBc11TNVMTE7GTrezvki2H1uqJnyYuGGm55QDJMXnxSXDHsqJ4FnjYZWUo3Tf"
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
