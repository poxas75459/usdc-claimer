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
    "2UPN2GcE8hsXaTCpNp5Pfg1y8MtGJ3mZLkEJMPsoFzuyZDdLLvXRZ5cSGZJzPKA82h4Z4DNq9saCZzV5csNEpqRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wrP1atmK4nLnua7bJUALyEg2CCCkUp43dmt3r9dhkBwipESVH3VcUtrqux3uiC9kHtyiJk4X8BbsAsmA35vAgYY",
  "key1": "5YFV3T5T8E2hGk1zJG4PgUtWepf96QBPEWP4BbXJnmKv4B5DmnqTEJr73nWQ1PMeiZHuXioREdpwFnXz1x8YGU9j",
  "key2": "5uv5AAzCzJweaeJzHrB8oDaaf48qDtxodnkT1hXEXBeyoXzoMfSHnFPsG9Fg9dvkCbmP9Nsw1HLPqMsWzggmEirx",
  "key3": "5mxUqDca53pq8usFAif2Nm1PqN6uMmn3k6ezktZGqbsdPEve9E1Md3kAe1qGSUoKHhA43uam4VMd3NdhiyVrUKhf",
  "key4": "2h544sNug5QL92ZjmcMmeQuzeFn29GQxgMHL6umzHoJAb4H1c8VoDv8Jc2iENnMVkcwUWZxED6JzPfQfBvnwikGF",
  "key5": "a79zkgd49F6jFsHmBr8iuhsEjbZNBxtZk9MnjYY3yyfag4E4PLTpfpAKjFNAAZ4xAZ3rnW2e7wUJih6QF15EUmk",
  "key6": "25JqUwNvFM64grpL7gF7eNpCdc4KPV9wq1Ce6Kjwkj7fmCzHj8cKmjH7wgtksyzMrAqZ769uZXL2UKE7KDJXBEY7",
  "key7": "3n2mu6he6LEE9J43cwexewzYGQQcP15WDq9VPKUDd8pfU1jDq3SKorULjUpnZmZqCRW59L4Cq7aPanhQYezaXc8J",
  "key8": "2khCkMJEWMei5AqEJA4a9AccjDTQfyzH9aRSS2dFd9MKymg9YFttvjSDT3wKn1A6m5HcrAWC3HsZRoLerobtgmX6",
  "key9": "53nfZamahjt3MHdc6o3b1wRwpN97TKmaaT2nuocFibCxkAEb3zkqBkxHaizkGMMNj8MBxJ3CGhC4vrmuWJJJcnJU",
  "key10": "wVURFaPCCpo3MELizcLiSfvVyXA1ZdUToEmPJmwsqrW1pcg5wimLcK1VDs2FxKZNRaymi6ziDcQBvXzVYsAsMcc",
  "key11": "SwswNbaR4vwNSyyT6adqx7zMhC3fJk3wedsw3MQv2n3NEJXFxTSjrwmjMQbDGCwo8K3wax8mbABMVA88QMhqsBh",
  "key12": "362TT2nkJrZmJeEYPGGSMfCWNVWPP79ARyyra178cXrdx1m6VWcjQiA4QDjxnmVDXhQDowe78grZ5prz58DYbMUE",
  "key13": "56T2VBNdCWxudEZnLGKCgXUMZzP1Xn1zfhamE6xruq3Mgsm8CG17YtwWBjW9xUf36dQGaH3rNfDRKPbPH5TjQ9WP",
  "key14": "4RCEHgyMcUV4g9dGEPk4jUy64g4mthZrTvobjdycReJyYXbgpBYNQcb5Q6XyZsrQaQRn37kzdqjTwCkJnbGsERyn",
  "key15": "5H8Db8aSdGqrrsgxwU1VmoP8MUivBHgcioPaf3C1SQAExLXD462wuXJCSYBfNQayrHzT9DMf4LbS1vLXQeT3K1zx",
  "key16": "4ez3jCTJidQDZS5r1SovryQuDavLrA2XetXVfLMXLyxVQzyouBkLXuMksPQXmHeZhA78xaBKZdQZtyqHZFeNKcvA",
  "key17": "3CBioUtUF1XDRA58fQfsWVHq34nkZDanjQhQr3WCQLapaaV9ZrNZyFdTDNiYgtvMhG5ubeGZWJG63g3dcNtng5kU",
  "key18": "3prsVjMmuG22ewSLpdWqoXBMrmqx7qzfYAgXXMvKfYsq5bv4ULiDvpi4oYCyiguTF2bxpkryZdmh8tBY6hRJQrVo",
  "key19": "2erba3s8bRbBM4973Ri6Fgk3WwQfKnLdKRjxc1DUbmpuFrGY28t5kv2GDSAZDvrjRAe5i4sNZM8iDj4DvDnqnTZF",
  "key20": "aR4vqjWajmZRjswTknBohz8b3HBPbbcqrc5KhM96kh1MPKpp1aqxyfndrjg1w2SXEGuJqvUsm2iQUZ6xnVGMGNZ",
  "key21": "3gXWqLHYP3L8cWE7zqwHxMv4z2efBcFGVhtuXvW1A6b7PGSkmBv9ZKLr7jxyKTEYEyY3Kxmbk1qBUkV41dEDp6U",
  "key22": "4fXhJ2MDP6nvPGFSSLdPxgtrw19YRkaeo5U5wiWVB9jqZEro6HsmPjkpL9H4pPqUK9EEJV5hmQKYvENyN5j6P4j9",
  "key23": "5FUgLuvityhZEKpqMUat1epSyVDt4yNYw9Tjp6F8hrTVVXLAeg7ZbV68k2QUuS389E8XX2RJNvj9UZjwKBXU4pMV",
  "key24": "5QNUdf8RW2ejJGVYy1yLwMvUPym4zt6yjCVz9j8KZhLaujMgBhj46DmpqFH4VzFMoAwNsqjo9RXTW2ZFv17wPoFM",
  "key25": "hyeKZqNe3pDJRettTtmz5VDk4rAm5bUaCJhYfB8yEMuarj4Z9f5mHo5PwxkzUgdCf3gbHcmFYSmLkD1t5BQHmuY",
  "key26": "4emifBUhM7BK9YRygrv4VvTtvsPXgzAs4CDBvRe7EUB8Ds8ZcaM7EtQCneEgSNK5PrrQGkapx6gPxPNkrUQB8N8i",
  "key27": "3Zv9RPoLF6hW1CDEg3Vyq24dDEzVAk9rcd8w4CGJUpxjqP5b64rZCmtwJacyxKcAMVSVuH6jzZkcEDfHxQH3ezSX",
  "key28": "4WkEwh2pHEdgwKpCgS6DYfVhvsZJdHom6Vhnjqz7PRBTGWmyfenfPTfpmcWJk3Ps92SjEXw2ADkrEm5a4x7XRNWM",
  "key29": "eg7MBzENktWHt3kSrzNfYQVCnRnZUai9b2TAJE8CvyPuNMKBTsjbRrjHcb7MkbGTySDRrEZUAwoVN1jkSBQ9auW",
  "key30": "vmb4pYowq6bg7dySe8URdsByhwUoVBV62fHca5JQAHXmvgESeeBkG7qbAubHfAcAA7L8mvkabPZgTMDd6pHogV8",
  "key31": "4HYerhxSxkz3vSJBnDxXmxtnCMApjLVqmChL1u8o5TAYGy7KccpojWPe8qu8nfbu5dgPQ1T9FBmoYDrcT3zbRXTD",
  "key32": "2eyESCQQqk6bEYVqgSrER6WivDQuEXr8kvQmyLsZa3Uu6bNQyWF43TRYdNV3x8TBqeyLyxpT7vyp6pP5uZ2zqcZN",
  "key33": "2mB73fdCSoAHGBbzwgkU6Hunz4rAUt9EJVgBcdYHvbzZbEmqMAQ3o1tDB3KZCne9LQkdo942JLPrK1VhjVGa6JB5",
  "key34": "4jeNW1sZ1zPK6abp1eZsvsNhBjMa1CJomiqsgkdXuQ49FwA8msFLsDMnVi1SLiVEUuwTzWGX7VgBmNmyyGxtARnc",
  "key35": "48EZ5x2LsPc56YBB5hUBgbCit83iFPbHo8TQ6L76vgx9sWNuLe1DrbChoQ5VmdzAwR7QcU3QFQ8kMKYm6YuCGNZS"
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
