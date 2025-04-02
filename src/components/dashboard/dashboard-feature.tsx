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
    "Ehvgp8wNrELDSyzzQ8rwZZm4GXi2htJTUKEGVysFKQtqx4vJSUmKAU1wisnoFXizXAJkzRztdH9e82SpC16pmX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZbQQx9tzwwDG1SZ8CnwbpK4A3p5j3z2x58J5BoFVUBkrRbpzmAg8Vp24jwscRMAmvUu5btbEiSVpEU4VWCRTMug",
  "key1": "jUsJ332rzfdSFY47MWWvtMyyvGcsvXRjDFL9aobUMHYiNykT8A7v7aPLkZ8KAaqsXRDa5f26cScG3CfYFdhnzUN",
  "key2": "tjDDFYZr3vAHwSbux4ywVWcrry2q6p1AyC4cwewSnSVM2w7yqL4AsXoGTFuLbe8MYh7fBVhFfmPA4wBLksmZXHe",
  "key3": "4FCQofnMY3AF9hs5v8Y1irTx7xrTHN8iW2LXnhWCd31srtYkHjWGLRTsuPpGH37xjwAtyjo5J7HjsYEAEZibPwaS",
  "key4": "3KGKUB8BHcWQcbkF11SP9bC6LFnATRK7wdo8JT6uoEmoX5o1KHBFuCwt5LHy9V5ESRtRC26MBWpfKZiUz8JnhiRT",
  "key5": "5K3THLaqgfeVWNvkkmrD8ru3LE5GNF3qhFdHpoMtdwhZhWVg7BNXbS8UHpjapHvDN97Y4Guv8kNAgvwUGnm7G5R",
  "key6": "2UmuHv4SGuU3zDca2o5jgo8ih1XXJoWM5Hn2RjeXcabYipjVfdYVcwcjFEJ9SNPebSiHrvjf7JzTy5EKLewg9gdv",
  "key7": "2KB2kA8YLoxai63oZkvKMRbPsxCz3zRzQfRr59haifKC4SETUz5qQpjMUQ9LWsqzbSB1AtR7rKLb1jGBBoCKBPBU",
  "key8": "4Xd2VoBY2aJrWfYTzjFjSNzxFjq3t9rGEFpPXR3GU8TQ9YgNgDt4rU3ELsYjxHzE91fSg4So2QJdQKqmhpewRuKF",
  "key9": "nfgC2Me7MoNJDVPGkH5vaVygbawtA2MNZhKLaXSxHz8xZyVRgFuhR6mkGxSNe2CLWXs996yBzmGZmyfd7FXX7Ti",
  "key10": "2vB1R2P6w6nZdVczMSPQWFmTupy4rJhjVEPYMfmJiGcT23aL34eDDR1ECvNT2o9Rodr2udTA66kEg9fzWTRtgTGo",
  "key11": "3wDBytYMiyo6hyuP8PUhuH3jdMfdukP6pSSpr84kyotuXTn5dSjoREYqUCMKRjm9LUsKNSNRXrZq7MpfmDJVM98X",
  "key12": "MqpY3yVrKr4xHwnig6QcSz381mLSipXcJmoScsBeKDZ3RRGSMK4vjzN5sG4dWuT16hFmi2WienwFUUou7bqtNkw",
  "key13": "3bUVjsh5Gsr85qU1PzppUHdfzNhvRvJPUHsya7o8XqZvPMNLQ1ojQbCw5JWpmQJFqyiDMxkgNzarpycJGyRT4ioT",
  "key14": "4WqsCzYz88HZ7Fh4kq3xGCaiV5L73kwEPc8RLnTAB9bT2SqYWgw6631mG7jJMVEzaTbLMmRJgAExHq1AiZqS33to",
  "key15": "3XoDYg6dCFa3wG1UfY49aJZJmY4ahJisdSSvPNBzovwNb46hxdTHuNUHnpAyFbbukyAt7Ut3j8kMFmNmsZWc9wDq",
  "key16": "3VWytfVqiXJuD6vuHmv1kpvkErY1vMAi1AUZ5eLj1wYX4K1Suv4ohgCL578xDNUUx2faRHBKLQxBYS7SvuXsqUXQ",
  "key17": "38ikfi5d1mJ7WYUgvFDxN8dLqAy9RarPhjRepwwpYUKJwAUF91jcZ5W64fRvpEJuY7nEMs1xSusyKj19ECeV15zx",
  "key18": "63aAuKqGSJjqQja1SMZ8vXqos6E8MZLonykhQKmYkMcFSv7aNQPWxDfZ5UagpZe2J2cnQVaZZ3A13gyaYNthztmH",
  "key19": "2Zhetj5Jd2QpafmkjDv5tRKHmFMJmbdkGvZTkmigsPwqKUqv9JfJZKPXnQNH4ntqHn275ZbnbYNLXFa97DwAKi9w",
  "key20": "3YDZwbJY3fkSw3dyh8jBsKPgQ5NJjkRj1aPiXFPbGv5swAaM6vzxtA7V9zFU1PozWJiG64i8kbkEZdF8C9YS15Pv",
  "key21": "5RFHvMKzCjogR1i4LCsXBw1feGq95kPwQgiaz53pPr3uroJm9tbKz8MJWbuK5GLBiMgfHhpgaoQLqCKZBVfJjTV1",
  "key22": "42BEqWNRHruVK3ufFGvvUu58ZtBs7EMkVFGf3L5KVHKuZ8yHep5GoAfoBvm8N4s6DnwSvGDbH26pnvkPAuDE5Ffi",
  "key23": "32p48sW8B31H3vYsvpreytTSdDWuw6YQ2Tk9kHvHw1H6hSRPMRQNgbQ7pyAMdjPppJDRHWFpmfzxgpuuyUyJbH8k",
  "key24": "8YzDVed6zRMerBaex185GH4qTmh4xvGXLv2zGpQhSRvr6W2u26QaetqYzgCy3mVcasPZZ3dGfrfZkZUcBKNtrLF",
  "key25": "2Qoo37WZncPuS4L1pY31EGVU7oy1RS5Gd3k3R28R3ZSwu8rsCHCpLNgD1fDfU2kvv7Fitft75Ha8WBJJJFviBqnY",
  "key26": "W2fSrc1nEK3dHWjPQ3bXRP5dimWtv4GA5xDRJJyaM1nGiTHEUgpeGxs7hX2xbJgnCi3irUB6FZ6hArnUKBsjZqn",
  "key27": "2gQb3gQtpSFzhpMzddW1NqGFWFzsrksJsBP2Znd4ztX7rAUDW5e7AEmcXka2W1uAex3evCX4mor5ngWFkH1eb4e5",
  "key28": "24C9hrxnmuqB927xyW6VCSKNDuXNktdxg9RAUJVLkDZFt4QGQwp9RXcdrEx3nzUMKqkh9RetGVjSaVwQDkCt3ovY",
  "key29": "4J2rvN6W1P684GPk7kos9J5xKDLFUmvy92kgcSWBxXEPuGEnHuFw1pMmamAu7iujEt3kTc7DtoqH49RbCFHcUFcb",
  "key30": "2NLGUNqLdBLfodh9fTvL2Wrxb1xCy6Cg1BQaW3TVCA1nLo7D6TrrSKS2wCp86wKocKcFN12pAJ3DSBR2EBmaXzAz",
  "key31": "3ARTVrFvKSfA4zqsmbMMyvZHZrVPELXUwoJM7g6uWHUiW8CFamhf8y2JYGMsKavvbV97rMKuyUnWQzw7AzBnpFJX",
  "key32": "2RU8LbdsSQ33yAbK8CE6obbpuhgD7oPtQJWYjV3uvNLfbTBbTT1bbCKidUNjMNxAoMU1MjXgPLh7oMgTAmDFEC24",
  "key33": "3RGdw9B51SyKkodcXRxVTpR2KtA1b7c5XA1LD1w7gy2LTPAPmhLDf2HozWSyzi2PvSPJfXRbE2nFpobfZvCio2zm",
  "key34": "4rEouxputM1y5foxxD5QBBv8teWmDraeTRtZDq2KBUdXx8inSTMLhkJRSkYTn5xQ2YRbWTkvqx66aAxDT3ZE68Pp"
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
