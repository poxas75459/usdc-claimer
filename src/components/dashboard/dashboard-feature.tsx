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
    "538ebx6DRSZnf2jfnGyKBfWswwWZPErpx4jkkktrRphgRwP4iEcuC88CdJJx9oHj5wLQBHNkoB9Ee8749URq4JaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BRq8o6XSBcHqcjuqihBamy8deN26oQgKGZGfKg3fEP1o6djTdVQsWqeF3jyhvnXouCRsnz1AUnLDvaZ8QnsE5Jx",
  "key1": "4aefKBdfHgx5hGNvh3437uWLDV8tixpxG8cK764wmap1fxGmEtpUuauRL9F9j6ALxqPjH78FryZTkrEchJV25Xhh",
  "key2": "2GBL17VH42uJzDscngNxFpFEY1pyGSmF3MNL59hFpDArEmJtDaQWRV424HV4QERWPbrSsyGJh4cvCa3UReZJo5L9",
  "key3": "2vzefs9ymQsR5ucoxWoGy2dFCKixNQWkechFy4odqcNey7sM21go9uVhCNZqnTXUwnGNtzt1nrQ1PmPzXJCythe6",
  "key4": "4FiSLAsAmQw2BJE12BE6ZgtAbALcARJYnAqov4QHWFDCKhNbT8LzEiz3bZiPa2hJ3pQbbHVnt2bv8BTmGPMKTh6T",
  "key5": "2W8JmJXySCpZuuWEnscSKTtjAFAjmwsPkZhecrnvnjCYvdiywRxZMDwRaSYjGfdnJtfwbEW4SkLAyyhPMezSkgWq",
  "key6": "3XvwdCtLCZUCMF2JWbbhJ87DPn5bdB6SxtiCQmQF5jDiqzVqT1KdvAynrtdgcMLy864q9nmEcwSNvyq8RjAe5wmU",
  "key7": "4e5GeqamwMD91nzR2rQtMLEKFQzMYkT4fYQLAcre7DotwuzHaawrxneLYmkCbFg8TWqPHiQ5fsTnGXRdbrJkJMuU",
  "key8": "4pAiKQ2NuXV83vjuPZgRVKz6htue4nF6WEjNYr14dXhaL3SVsZXP56Toza6VmEzWfbK6maKNAJspMEg7QpJgrjxi",
  "key9": "2GqBNbc4zTmwPo2j2Yey23nEztGY6s5RAbZskZPqwFkoMyC6JJhtRGEHb86PbkkXhfCsjvFcMyas6Qj8VfPzMZUm",
  "key10": "4yWVaMjR5F2gsXnpb6R4WRtXTeokEspcyPnimaQfpgPA1hE86zpB5Zh5VyR1Yvy43DxFL19BZX6hfeKmMV2cUQdo",
  "key11": "4Zvj3i4Z62z6qVuPZvGe3ehm8G1VYekoVSjByhcqiFQKsYTDBmFso1XXatbFxhGBDbRH3HiDCGZr9jDPV96eqoj4",
  "key12": "58pd2JP5kekY8yoQvppH2pTScFM4fstYY4DsR24AYRoqbEtrnicBMrzuANx6Zy9ccXecjPy1nZp96iEv7KTwyEpa",
  "key13": "5vVvmNyjgfD9FE39mky5k4ifgV13xzmZdvD6wf3ZJV2YjHWD2UV4XPvQDGjnbdptrTMutrF8JHumASXnFDccoQed",
  "key14": "vPA8bgDv9BhJX21oDCrEGLY4QCWULjhQgnZSHADb8RyheGR3gAFhb2vHeKuzjowiaM7SEbNJ3W3dBouH4yokqWe",
  "key15": "4W56xiEmfHP3VGCr4R45WSvUrk1hfcggtXS3vMSNTmbrbLm79hjZRB2AoYm6ad6V81THLWNknUdkDpLSv4ZSiLMd",
  "key16": "3CtqeGsbQS8A9T73eGKuG2RoNf2yitwmcyhqzVUu561Eh2B8uoqAhLEHbz8Znxju1F6ASihFNxkrm7EP76SCCEM2",
  "key17": "aU8gUrpzvduD4NzyS7Wg9FogZRNyHj3FkUW8nr2BHJF9adDXfA9CFAyRGw5YqB7WTu8R5vCfVmYDhswNvEzeLX4",
  "key18": "3XQpz9MHnGcYarQkVmBgwgJMaJeX6soC826z4YEUS85WmdV8FXrkuhH2r6PViEwgnvPtJ8gty5Jae1GMyJ7SxdY4",
  "key19": "5DjZe6nNeH6NK7qQFmQGyZVbT7pUsQaaznkdqCg2w1bjjjcGXKqHnAYg4rT2ZQUoLNs3WLNLVPLGYtdvdnNk6Wpz",
  "key20": "25XWEf5x2eZa7M4detLJXsXFajFRvRFTbaLQdYSPVdHRD8qmbBQ6w65cTbMcsuJQRPKfBNMwYL3BdgBTNUeS99bb",
  "key21": "3pADx2L9Wy9SU6YxikJXiyr9cuTH6nnNKp4H1CxYnmNVmQyEbWiN3qChQXaCYNsMePzrs4viZb2Z1WP6xNfYFfaE",
  "key22": "3YN3N3Nugh6azqSpX5pEmMJ4Urug9N6seaVw1MStrqbGJsS1G9Uif7QNZA5Npax9NiQjQWPSZNbfDcp8e3Pofdnx",
  "key23": "2PyVR5w7YeK1kFfKdqo7o1SPjS3NLXVE3h4Q6kPDa62hxn6RvMR2qJCxyJHGkMDgumk86KEf36TVxjdseBqikZBc",
  "key24": "4MZcPi4SWYuYbUPzCPSUZNvqvYDyGJqFU6si2zMrxxXKVbUG388ftNnpckUTMkHDZqpFgEQSHfFUWHNeXhMYicM7",
  "key25": "3kyyiYmxXfK5geZBaXaVDjEbzw4fS38S6Z3WwSj74vHqSZcLcBzrJWqyUPQiccdanhi5Hw1pdmghDK3PKvfVnjU",
  "key26": "3n4pvGKco31GEozckbMGGjBA4qQsmqLhoGsBZYQLA3tJRbkCaRwjFxCCFirgAbmGT5LbsVYLuX41Yp5YkBWcQVSK",
  "key27": "3RtdFBW6f8AkhvfKUPg2KYDX8mF7U4VKAYpW1khd6r2WdUR3mkSbatHwkA2TwYpAfnYbMRkoRFKZP9hCTGNDG63y",
  "key28": "3qTsJDvPtXM9cnuE9ZPqmWuiyU3aiwt7AfAsBk7TjBSw3YtR1ef2eNv1Su1vBYLAPSvQjosq58bspuAsyLQH6Gzk",
  "key29": "4qLP2iQgoW2kRJQpenbTTVhvXqmEwMSBNXiZgtnbeUps2X6UZkSJFtTVfhyBkrhs9h19ZxCVjdQAfYGfnabhtCJL",
  "key30": "4hXGHs17ht5C5HKG6V7ubUiwXGsMCAL6Xec6DnBvieREGPjyaKd4N1kBVE9rStf1SoHV1TzgXkWihTFMo9tK91zd",
  "key31": "3LyuGSZab5tCRdWU5FdYouEy3w62x2uexSHdQTHLpP6sVNzjtvcg35xkSJSFGaiMpNrcUoW1To9UnCFe8vLxrQ9o",
  "key32": "NmoSbPzxhxuN8ADo5esWwstfcxkX4FEwYR6zGieLfxF3zE87gCX1yBC1tyoJHnVM22K5aCn6Ws8s2DDiReFiSCW",
  "key33": "3G9smL9qnmvC2zHH81Ai2hE38aoeSUQfQRwuX6mBzxohYPfP2fT8vgQQnjd2MhZYWpqyFkN4CZe1iRLvUnF9Y2Wq",
  "key34": "25AM912sCYWSsUqvhKCwyP7TtUepwuirdF7AecWQAS4Qxt9sLP7yYcEoYPbyowzPeNMB9CMk6wmYjmHzAdzeqomD",
  "key35": "GxdH74hycWGX1WizPR2sbcJS8tD88EePb6eBkKLNdbEkQfGFsNh7sTceAmdD2sZmTK7TG7RDgMvMqtC1qbKiGwK",
  "key36": "25gPh1rff2uza8po68Z3JmpGynfSwigLRmdmrETaGAx78QhAEhDYjMQCuR3bWXStCvNH3qQwYkF69XtJVmgatnsA",
  "key37": "5FW9vXB1jyEMi7GbWp3hAXPaX4TaDaMZvVkTEDEMfEL7ymKY5mdiyXnxz17j9hNqzuowAgsNi7Jn4Km1z2uNjuBr",
  "key38": "M1WyLLgPCyBq29JVUAA9k2TnS4eE8axNgSQyutuFo94yoMXeNJBE8Hq18xbhCK8NPe5hwDPj9SbcR5N7e4qZV81"
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
