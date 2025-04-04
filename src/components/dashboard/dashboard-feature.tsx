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
    "t5LsaXJi8eReU1cEC7HnsGcqsPp2vLL13L55x3ojVLLcwP13AgFdEWBMDjH6xF513GxiAYqnUbj4WuVJA17HNiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yVXg5xShfaok4NWjvHtFt5sfZB1B9x2ByRxGiS77LysW9Z6PXSXnXoMrJi1cVxWKdY3MbP8H3uUVbgXYbbxPoBy",
  "key1": "z2R4CrVrnWndGsKYHy2rtcu69F3cUaYVYYFKYVPBPpHem5xateSTx2di3wqZa7zGdugDCjAhwi8R9522869Zeqr",
  "key2": "28TtJNYUSG4NUEGVb3c2PwQeC2sthFsVA9zhfNGyKiWZSwz5Re6BSxFjhXiXgPHd1qAbyFG7dV3eYqTFxBsjw4FU",
  "key3": "L8i3mc8TNXq3EteGkYBRW4NRbU6KHoqMuZ5ETqsZfNBBc8rc7LqicUu7Mih8fZotH9npanutWMJb75MxXUueksC",
  "key4": "2U25A1qGk3deEJSN2QxRXRe6p5bLEzTTAr1dR9ReDoRThSCrrGLHEuUNDVq8i5YLWQJ6LfejEzG6kTkJPDPahwgP",
  "key5": "5XY7rnQRGbqWgkw6uoYQf8CarebW7kweK9yst38yjguRVp5FVQpcQJ6wHgAvPMi3uT8PTiaQMYHxZcyuucE7SUyQ",
  "key6": "4dstbeRg9P5DGEp37vQYP6aSmHY98WYz3cSirkAH6ZNx8rqoutHUguLYeAmxTp9e8xVrgfaGU8VVwMc7ixvJ3jy6",
  "key7": "7moahL3nUuJVejNt6CuPgT9rajxhtB8PQoukeVVady6w8UwAxch1Nto2jGuATu2rN7e9jtb4cT1Wq5zGSrJnQzA",
  "key8": "5XFCwNzGDF2gLartDHgpcVDginKiYtqZMnCQYuHRPsKLfCDADKa6LELBdZYAR2FMycPebzm6QnFR3xRvBUA9BybU",
  "key9": "3V8TnaWPY8WKTZsRMBPw5gHoKs4ufL1uYLHxdknXpEpzw9CtSKqLVFPCXuM6dAtdLZS9zs3mxn9uQ6JyjJE8aumx",
  "key10": "5noCDVHCMjLyF941zWUcgrzSXeKcJZ93QvnDvJjuFzPgPJhMUprwxPNXJQDTNxhoG5M8bex5BrNUaRZCu9Vh8ALb",
  "key11": "67Ak8UDvKN8cDXUU73nxomyDTEo42AFaZsZMY89yZ5ztt2GUWpFYZH1wm6KDvsKPw2H1qbPCjMjS2J3yoQUeryM",
  "key12": "rYqBz3G73Z5aE8zmzPkBThLKLzyTiMLqS7gSRx1bkbeeUTtnsH2FksPw1k1vrq4V5ycrUo6QptX322KAspk6mtM",
  "key13": "4GymgEB9gsNMGrLoQTS4n7688wkruewAgtFg3Xs3edfHY5cF2rsWVGLa1feUfUjDffdQJ6msEW8mW5H9uWesqt2f",
  "key14": "5JpFfq2PgpwrUoamBDhz37FbM2NbisFGGkyMj48HbTpYD22341Jns3HtKeNoCART64KmjBZrio4kCXxKT5kW1BQe",
  "key15": "2GCfuTF9bnuHmzHGRKVqB8WyYZox3XbiNbuaDVxA4rxXVfbXh5gMZXFRcQfSvekQCHNbRma5GLmjFcQ6tYmVaadn",
  "key16": "WymYTWiTLjeMkcWbC744eAH8PDFPFsoSvQMZD7KKJ8FAgKkoYhuMZsPCKA1bi8Z9UYspNCU2FV2yisBkJYf59HU",
  "key17": "52gYRwf5PsB29fuakgKGmX3Bs6mekJN6s63a9QGTaBoGUuZ23UQZq53zuvfUqxKm8zfNtdeniAeC89VGrsSVBzJr",
  "key18": "4QQi2hUCAyecrjaQXfwJDKc8uEvoQ7DyGr4eB2tL3fsxkwt74574CbJuSqKCujJ3pZ1KCZtU1PH8L3pNjVCf5NhA",
  "key19": "5ae6RnnYSb2qUXVenu7mz6YFj1D5QdmbfbinsY1g889c7GdLXBZezg1RD13G8bywE92PPQxi2zJCU2cgyVDqUX9u",
  "key20": "4fyn9VPXzUc4Zawzbc3K1NGN8APRZvsdwDZo4o5qT2hj4bPHKa4B9RcYz15rsHdpfpBY1dL4dQ8wYojYVVfgYgbc",
  "key21": "5SS1LEtPmjanR8MgNaCPuPtmefrp7zZunBJj4fizzDdyo6bF9Q4E3o4BKtT19usVn32zqtuD6ro6E1aM7dGCaUo",
  "key22": "3W2h3aEP6DVJzvvD8CCWpceYbAJHmufKdUZNdhAz7cnjTLeT5qCatZ95ks2jhamGtZoKTmP9iGgWVTFKuaD2i6tZ",
  "key23": "5eziDr2ezmoYK7jEDSRroesLbQLmRReWxagosb8RfzJRFz5hFMzdx1ZY5C9VaCFrfroQoRLtXjYyAGvZVE85mtyM",
  "key24": "2y1wpaSceg48pcFqK9TPrqvhbFaFb4FzjQhdNEHPrZAhvqwcoVtiD6Jo6RCNEkkWF4c7Ub7x1tXnfUwr8xcuJSCe",
  "key25": "2K3x363HcXP8VLcouXXMk9Y8uSKea4GdkvvDvVAgWgYhyTz2HRqhhSBSqXsbHsZcaunbzjjAdSyc7zNFGQS4DF7d",
  "key26": "5W7QRELsrpppaamPWfkUvEnXrGZr6b6qFbBbcJwhuh3FCWYbjPZUpSmQa29j8ZfTsbWMUBJZLZe4taStuUwoozh3",
  "key27": "341QkFo3diyAWTeFDZ5pQMvvw2aWFNDLPHAuzJKxSwpmTE9MHd7gF7LA7U1Jwzn3VTKgEsU7aod7h2vGebBSxZJ6",
  "key28": "35i3cKtvfw3Pn72ADhwZvtqZLxR5ytk58TGXJPx6MVu777sy4sSmsvTJsvSUgqUH5GkT4H3itfoAUXL1aLCnZu9s",
  "key29": "4cFdGhU2MzFSiKLkoxbavbTuuPLhCyM1sSNt4pq8KpWMZF3P2qhiX4esQELEwhtTVVvWk3R6Qgw7fsmyjFm2BBz8",
  "key30": "AZSY3t8So9HEmSkFksZAX2EYgS37T7STcVmXFFJUqQ5kZnW1ATHqx2iTgpNe7H3YVKSPxMHD5ecGFumuX2f32m4",
  "key31": "QY9NU1MXeKXmmXBHaCb6hqxgRYP9RSYVcbRddKD8pq8Wzjo2fk7RbCKCHTaAHPhYmvEbNnWZMrFv5iCEKaHRWuu",
  "key32": "2qph9MUWjGVD2wonEUgJReHamMbVgb85GZpGa2djxfiz8NCgeWASGitStELqcDkNEa7F7wTgcXCJky6GSyX4WFc5",
  "key33": "ZDaVfKzdWrijgunR6rfvz6XGPkAxQ3iqgW8gNbQfJHRQeG7yZ3jcfBa94UzASAqDjif68z4h3fbKYZHEsbqViwK",
  "key34": "PhZa8pc9gS2Jqc4ufMZEhGCJDbbEzDgggczNJkthGtvgmtFBLaTPkCRMp36iqG5cPb4ounLK5NyepMnVdUALCsk",
  "key35": "x5efDgaMaTwLqTC4GNnLuuuyZK95QmZWvqSQdNvsTDVPHxL1FKRENdsNxekSkvHgAhighUdb6oe2Ad5vbgB96Po",
  "key36": "4qxXMk1bTW8gh12BFvLwWQBXcKB8QBZhN2CgxRXb1CijtfW36LXa1VAs3hDfJPwcuNux93bsnCmdasRie6qCkwor",
  "key37": "2dmbB8WVRzhXnUMDhGs6gtzUNKSHGKxwypiytCRFSnRmcaJhhtFNQWVvpjRzXfyDJpn5vXm4mEu4RPRoY2X4hjqn",
  "key38": "577b9BTSjMJA4nU7SSkgq2MicxiBMrNreY6rpke7Fr24rhfMwBFpmWfgEG7S27MouLnLqmSQEf7gnBfLkmB9r9yQ",
  "key39": "3a6onMMEDXAFPv4ZNL9oEJRDVGapmXyv8UZUpJpUeGV7kQf5WR4peU2dPcs1SHDCDLSf9fEoLpWDVkBBoVmT79Ye",
  "key40": "4mpzqqRJUEeJvfFVWmb9RyFjeJFzU3JP7rq18SqjqX8MVuNk7N7kxSLGrWTqe9fvLwPT1YKUUoswqK4KXZuDFHLy",
  "key41": "3KnHQbL8NdveVFukGFuaU1t7CkxQYNWeqtwWC2bityTG11SP6mo6HuzgW4v8Eepvpd26uZALDuS5jFsR1tXGYiks"
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
