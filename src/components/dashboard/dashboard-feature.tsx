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
    "29cdbye6n9ZZ97eo9HbVjDKAWCbcbXpR1gtJJhkQHPiBRpwPNt5c4yTMFS3oWgVf1DVAzno5Yhc14UNsHjSxfR2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36odkRaQojWq27SiPXKUdZwUsihowpuA5bfT1mn2hZc455iUQczXwmyK1jpy1PYme2e2scKr1j1QFMKXitNCTXJ4",
  "key1": "2ex5q2PCVq3EfoezJnmMSw4tEEL8aiNzQa3SXC25ChXXXBCkfNm3mw688ingkP56FnwWCGgyTKY6aKnReEzKiXMD",
  "key2": "pVk8Nnb4dNNWbLorCKZ4dkgJPDQHSZmpKKMg4L8y56CTiqxxYZxKn31Xs3UxbWUqUv1dnsenKBjgsws5qDxd7xb",
  "key3": "4DamWU1a16VneRtxzgtg4M4zke6ht1fMnfLwsfVPoYVxp5kxSPvYWsATQjKfKLBHKdtHmV4KnU2tEznAgAGXEuCV",
  "key4": "56R7zXScU2KdbqYSq6sua4gwpGFyQ1627PaZ217sxQvZzKkPdi3crMeh1VANXtz56fMSfhvpJtYq1jKahBjQaFBn",
  "key5": "2fGqsHkLJWzoU673GkXP22e54PJNXxs4nG86fP66x92TG1Th8tHB23uQkJso3em1oWhAJReXD1Hnf4CG6JmVuUGr",
  "key6": "4cacyUVKTrxUa8WUxe9ziXGRi72bbinY4wdY6nJiWtysMLXZtpfiSud6Jx3HWhxAyDfyBe5mQb9H2voLobGzyGS1",
  "key7": "4Axkbv1kAWhjsefaQggvauThe9j4hVoLqNHXkxeBUBmQNBcyK9rNWtuEfJyHnHyfHfLJ916ZLdjXHFktkyPPirEY",
  "key8": "63PpDKW8Q54FTMvZ1syBrYsK4tEjHdFLqzfEKdGPqgtEPXQBZetmprVVjZSmawseoq5WTijhnGX5WcyA1zX8hFQd",
  "key9": "5PhCr95ghGXkgf3MnqzzfwDhyfqfsR7hVqfcidf87LhbgamewLNLv2jHW5bnEu5gp7tVxuR2PJKXiyktqCNWi2Dv",
  "key10": "21gh16XJi3LaSejfT8GanV2xEEQ61vZFbJCWJ3m7y6LFDWCZuBV5B8MHSsSQWejvjja1cC3dH8NWJY82pAeNTrMr",
  "key11": "3WvkpKf42ZpieejdDEADqjbEaJD7ENSf295xumVZRs8UNKxJHgfSEZDyHCejkdXZfyBE7a1Ss4d4z83C3phvnSkk",
  "key12": "5fRR1PnGMyPK8Qzk32ZXtoYHsU74mMPwoS6E5XFvsx9vvL9qahZYCbn15gQpPj85rTaDh552ZxFNitvNcfoLgEVn",
  "key13": "5tmHgJy1eQhPeGAipGQPxtJuPUyEt2LgH2Xd5u7u2gjJxqjEPH23wsUF7PEG9RWda6b1ai3xffTgErQCQ1XobytR",
  "key14": "3n3TGhSCYHxc2s85tKwFGcN36fjYcEeEjSjuh7yraHs9LH5z6iaboqK4jrttPz49QnMJBjcDVqbWKX9kFryWCRcL",
  "key15": "5eCUHfkrdKEXZTetnsY8rhnggEKMnc8YRHWJX37fmVFFw723iZsoW51WwhYtwZdN3ykv8W5KAgyteEjZicirhnXy",
  "key16": "4wsUBa5KY7KqWdWMBYZPeStqzzgiz2ofU6mkY3B6YAfWFVx4db5cytymqJBoxwVwnJpaT9Rm5YfxmWeK86Gcq7Br",
  "key17": "3WgFTKEegDQxMkMaCVNAPFn3DqCQdVdzwUGrytuPA7TrcuYFFSPAsGXEAxpjfbYtx5apSTJpmyRGF9HBAAVRvEt7",
  "key18": "3UveaJibz9xQZGTw4mC1ftJ2PYGFJYFDgyD8z8HBkze2xLmG5nZMbdJqWqKfS6Nqf39mC4bkCNwAxmAbeNipPR5Y",
  "key19": "5wVj1KdyCwpLttT1eJKV6FLXB6hR7NadR8tVNzuQJG7BxDmVSnRnPKcj4arxZLEjdzLexRbW34CLEZYx41gJwH7r",
  "key20": "3AamQdjgsgRcRDoL9LTMiaJbGKj7iDbWz2HtK6fRvbUvAQVRZw5myu2NCYzQVJfeVECVqoNqgUAe2R1E3TV95e6s",
  "key21": "5GstRypx2MCy965XpRk98bQs9oQenzXMqoXjGu7mmAzNF9QtqyKHKcpx4BjNudR8NwgRgTy9ogLYYtds75r2kAKM",
  "key22": "2e9YQBB5Ai7SQhN8GghFPc9xFvaRvK5vFAzZPPGmzm7ZLE6ySpBqeYfanCM16YG278tWfrQ1NS3cn2HMXA6hJQrD",
  "key23": "4FvBu5jhnFbumcGbx8KX9NBnks6TR6zH8HZxSS2CjqiTNGBJLsvAXz5Caa1nVVCuQXrBreV3aCV1J6JCP79838JQ",
  "key24": "3sUNtPSJieW22MvacL84y2SWFajm2n2MYUz9eLF7nkjG6kQCCuiwvqCTmxFmTem7WAZ76qMXPNzZneN6JoJXbV5s",
  "key25": "3GbgfXYTx1fXVz1P3DjYJAKpLHfHN4AbnFyrSvnCpEAN22Uxp5PvvwqdxHHcW7xygSJZ2bvrpkDXbChXcHdKnVnS",
  "key26": "3mVmVL5U6HJVHEqyjub8skXgH4ktKmNSyW7oowfhGCKGbtbgXQdjzdXRbaYZWapBS6ukt8A9zN2icVyESm2uu3mX",
  "key27": "4oiVT6vbWkAdocV5mCj3JkXGq7daUYYGsDUD8T3gN7cit2pcQyDhdDEsiBA2R7DzxBh3SBz77k1audUw2prUE4eA",
  "key28": "4kLfHhJJHcq8pS7efbG7c3hPGNp2hSmCEfinXfaTpVPmRcGCc3QAuecrDPMYaFn33mS3XmKXGS1ViFDWcyAvShc7",
  "key29": "4xU5GH7nLb1uWQ75R6cEs7NJer4yd6z7C6s6m3jkP2UFV7CLa9rJbp6tsGsLxWUj5LekCV5BpM9G3urg5xdLCucS",
  "key30": "49SjSQnzrqcXwZHYq7gWJqyCZN3hrHYSwcaBcdNxGH13x7kq2xqdryrP1KVFy6Cri6H6XCEmB8Q8Q8wHpwfXZNc",
  "key31": "2xtz4PmeNuqbiEKLZpQwGNV3ZhJgdebRVb7uoPcjtL2WAnjUx8zGESCN8qvLrP9uKu1whnxtRhcYdWGqx8Wx9anJ",
  "key32": "4UPqG5rt7p8AFHEz7PVMuXXGCPqjrwR83eAQYzPbjCNtffeQdvmWZnjyEhX4zpZmp35R4rENshchM27Qj1BfQZd7",
  "key33": "45aw6SgoeBMDEnrotcDTeeKjxifobnQogezx4shxnLcwAbDbeqRRADSc12xe8eLtNVZJeum1CNGTnK38AnokjEth",
  "key34": "4eZM11DAxgmXzvrBW1NZXGKqWfnoKMXGN1SKHJKNgiHnPMcEP84VWzFMVzi9uHECpeYg5rF3CSsYRfkVh11M6GsX",
  "key35": "5CdkFXadqFMmhtWigDVHtDnW4VX3jF1KfopBxLTDFt9VTbHyepZyoYD8RxXSAhwrQamnmZAUKFWdW8bLq1riqEhT",
  "key36": "GBN9wzLAztw6PgZncno1qWNwVgRL4ycYR1Q3t233MtxCQm6iAFChu6fEBwgMW2NYcxBK6FSYQBkQU6MyZsCZmLu",
  "key37": "5Eb3GNG7QmxbaqEa1BpJqk6yyHPnkQhLpmckgXE4f4AJGMezT91Fik666nsTeJhXVVkiVPMoCZ8WZEtPKzPZXacv",
  "key38": "2wRZhnZrPiaM2ooB5Nig4tfvRNTog5KFwRmk85ohVdZymaxe4VAg1gKL4WbuL29qYNiKqt6HfcPNzLNdbmHZjS9o",
  "key39": "5pzaSaNzTZ6WDSqh5WvZ3KXVxKcQwfkBkxEAYizEFjuBecYn5RD9LVz3QAcDgiWfZXwGJ95mZQGuZPNGqSAv9arS",
  "key40": "23FSipnbHdGo1HfgCPrKrc8PMe7WRwcyc7Es8oaW84Vwu9hsBdKRBiKajR8keiMU3KCFY3YjGWL5Htr6ikgXxETU",
  "key41": "5WPqr88Ft2Xzp9Wmy5ugEnCqBdTUThz7DheC55c1XSntvjJvRUBQoLdkWhyb54X1LfhibgmxeriQ5fLquH6K5AvK",
  "key42": "YBV9WFLnEGiCd1BLrnbS2JaqMEtkuUGvZUrYJ5XvBHcNLF7h62dwSuPSb9WTJpdtFwxXnfA4ZAm2PzGaehQELT2",
  "key43": "4eM6PCnfnfsVPcjvwggz2bjC1kkG3gdWm3ct1fCpmS12pp3n46nY2MkvTxyCpCbYy2utyGgSA3t3TPJLNSEvtQRs",
  "key44": "51J9Jr3tyKeJn7rut4DeQRWKtWkVvd4pMGqhtMgFQfXDnMNjtoCR2jj6VeYAVSiZxHtHQA7iTCdKFfp48dCHqQn",
  "key45": "5xVZAmZQR8TneV4msRfdLeUFGtMGoPrJeoajbxArwEr3wpGEfnUqVx7UM4b2WtAA1AAQz1hFjAJt21ySVSR7vnPK",
  "key46": "2bHgg9r6tbyEHEXLkTmnPhmNe8Ne86faaxVGaTY755fH9EFfQbgEUoBNrnMw2BTVL2yagDv5Vy5kW52MnB86PmGm",
  "key47": "55Wwhc4fBer7fZzrW6sVijvQpXMV6YTKzgPiXuHRBFTVabpNre7AgdumwYZRKwkE95ijaqVKDgpR1n1yAgXctsQM"
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
