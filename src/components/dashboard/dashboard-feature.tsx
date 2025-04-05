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
    "25DgjvXdVkYvgR6Ji3ppTBnLdbtBVBie2zctqmkBRndBXho4NAiU29r5MQCwGM1tduGZY86U5z3LmbgWpe1ye4Sq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W7rG3rzmeQHYQhacRGHqsV5qWinixDtzuQ29WBa2ZfXgazb7tJU8mRje1uzxif4ZkmXG21AmRPrxvJ8pwhCJoBQ",
  "key1": "P25t211X8GNdH3WMAF8uK2G27FhrWSzjbsoZWaTSwGHa3jYSYtp5fnCibyhAtw9uS1827FMXiKfTS4wxvuETrM8",
  "key2": "3PKUvVu2DwWWRZLWb5hcYqYUVTAqmuZdRUVKscdC8Ljt4wXbWeA5SZbpGGy7mrthFK9N9fv85AwhxDS99RYmLDp4",
  "key3": "4w3Kbqo9Uyd8TP2YC1BoH2XwivegNJHEkcCmPuPiTpEbkV4Jrscr6rZM9euQc7Kmj34Duvcm9uaWqPK36oWPneym",
  "key4": "4115WsEUXELAUj5Fyvx9uNRHjmWD83eTi48B42JxaWJVALKdJ1FuYy5LQs7gsKB2faoT7MmdKLLQo4EfGwj5X8cK",
  "key5": "2E3BifaM53CaaX7cUMsQDdKTyRUfMWVLnLksyy9YSsbz2YuGdWjexe5v9yjumnx2x477S4zWgc6nLG1iuosbfThn",
  "key6": "2HWQzhKRykw69Zo8MefyDCNpGzG52DKPFaHkVBkv8nBuo8b5tpWeuzRGN2hRGHsZp39fjzvGe32onH2Lz384qSud",
  "key7": "GcgYbGd7ijVePkrUdq1LKNTi4mJvTwo1mXid7QDVD9JyVWDPPEkZ36tkK28iBtNs4qwvmSMRaPPPhoPphwy7Xtd",
  "key8": "38R2bwRuNeBvmZTxWgZozkhJow4GRzWH1Eamj7iCw2dunFoxu9SPWPrVW7sBkqPxUxzSwo6pfvw5jpEZnkEd8qBw",
  "key9": "5Trg1UA2EVxZUHKH271yJ9hLLzuRgSDS4RJSJz7YgmQtdQJz7GFhcxkZDFezyYBmDy8KHznLoJvP6zEh96cbh6Ud",
  "key10": "44CRwYsymFiHUkKbZq1ybohNuEYYsAEKpefuq8fABcfPULjHdSXNHNPzrqGvSdsiCbVu9oqsSaTRb6B5rfxW98iE",
  "key11": "4CQTa1E9VC6ujt7doMAPunTWHmRoNQ8jsdZXCAps263kwSxE5pLmXXvSqPJodmzPKnBR9ccf3MrNqE5gmm1eUpbA",
  "key12": "5kX9GZeuwETZdYCz5LHo3zzppUrrG7SFVh8kf6bDmzfXw9UNL4SJ2ES8aQNPjbc2wjswpiE4KgeX7xgMhzibqhqG",
  "key13": "53xrtpTGFvRgnUQqg5tS4Q9Lfkx9gLDNrE5SJEG3EC5sxqKrcX1Jg9roTiC9E1BXvFE8FQzSiq53mqjPT4pXhkuB",
  "key14": "3qet8NKjFuvjwfKqF5dxdtFnK7Gh8AakW7RXsRGdNbJgSNjGYxYoij9s61U5FUEnzPMtqrWMapzEyEzkRGZBtkEC",
  "key15": "38RFmd6SNxYVT5e3Pmzhfd8NtWdn9aDG2g3hHLzkKftHWV1ShxzfDizJba5LFRddAMNJMJkxLo17FJAitHvhGKQA",
  "key16": "2m8XK99TyNPJhL4Wq8JXumvLQhKU8vJDVnpKo1QtESfs4VYFSjVUmE7FqvpxiwUxC97ZPMWbqXUZuZqAeYfCSgEi",
  "key17": "FZSZ3t7a3HN7Q3UPDK4TZ1tsNoMkBX7pGFamMi7kjMJj9oWuQ2E3jVvQL8dX5japujjpRMREzhm4KQJFzTSj6oJ",
  "key18": "35jvtxFaG55hQSE4t43gTVVK5VTf57KXmwZDjd7FMH2z4T6H5ktUaXPCV9AgoZumGCZX5LZRbeGqPhRyebC8WVxD",
  "key19": "67KnDzBMRQTJnEwEtCA7MquGfDZ3MXy5qYbCNjAqB1JqJ56UN64XExQuzqCYdq64vavrM4M6pkQ4wscebvrUjj65",
  "key20": "4Rf1xrWLzw2zR9vd3kTVxaM2672JNLUpVoZESx2W62rahppKT4a7U71xbZo8SmfqdYoFGEfGGmcA6QcKTrD4RphA",
  "key21": "Gix91x2NXBPyocJcTagND8NzFUnv4MKBR5Ud9XyN7N6DxCnkfZbEfBMQe6mbdprKy2q7bWg8CB1WhJ2Kmmn5NVc",
  "key22": "2N5WhrnU2zZQn3yYAPHsDEYpAJV36BVWZ8MpEnkX4LKwCi4A5mmwiCdCXpjgBsDp9GPGt1Dz2QXYctAX3eG3Ctwd",
  "key23": "5J6Qkfm7F9sL45FUEwSVetu6yD2TmZWVYmbYHf2XVU3rbhbT4idBzk18eFWpC5rGSEKLvprunjJ4buVPKEzmrsNJ",
  "key24": "3o9tBR57NHLjXo1RmsXCx9h3F5MURfjp6ye5o6a5ksoHpSiGhcyx55Gkg6AQg2gRdJKqT29n15YYCZvqPkPpitxn",
  "key25": "yRikx7avhbDWTfmbepVVASnH8LERWQPqE7gapbWGKde4eeanCeb77yasr7VyDfJ6Fh9GokZjCFm1BoBiMC5GUL9",
  "key26": "5k9wKwACnf4FFbbQEqifQWpDkuZTiww1HSKxTTjzxwwn9rmyNhNzntMdEQhnvD6UrvVD5PfciMAACEJbZbRegdfP",
  "key27": "5Sq66CKLUD68bbGd6Wtwd5fAbAUawewNCc7ubd8XxrqZZQqzKsQukx7wh5efCBKDeQ2EoRmLBGfr6n9gpXRjA9Kf",
  "key28": "3dE59tDkm9oV3hEorxZDC7iBnMALUQT2JjXXinXGRVEuDxfXZnAFDwPsbwhc7kwKFF9ggf53Dvt9Q2JaRb1miNAe",
  "key29": "gYrBewYtuMqKE8aR4Mrxx9frWxQEvp8JGfYK7MT1XFyLxHT4kjqTs3nxATzWFV1q1L3h75pwx9XKj3zBeHZmHm3",
  "key30": "3RKyBCcSs2ZXPzhh38f69Mi6HCT16eehRcxUic9Q8PM4e47we371z1Rx71MudMmXMu4cBtpftKqjggVPunXUxQSW",
  "key31": "KtRCyDStcLJysw8anXJpw9UcZbWgqxCFA8xEL9h7Ls8X6L6sA2EJZwDbWA44hzTLZL5m9zDwiKpPFLzYX5eUAHE",
  "key32": "myxxFsZ7DPdvhh1FUr8FS6DHnVxzJBQvn6WYKFnDkLDkgJzjcC42wxQUVs8yWd3BZ7pcTYUBCMGuL8Q63ZkTewn",
  "key33": "5JuMz6A2yyvhb6PMYGKn2BE7TVfHe1ZF119tzh6dfM2v4EqquEqf1N1TsC6B3EXPE79qTSnuzHagTbNj2K9vKpwj",
  "key34": "2iXNxbWyJZCgFzVmnYnKkpA9bRXqhM6yPVy1DFmr8hhhTU6iJLhNrSpeony27VQSh57tzSc3f4WojJM2XCJX6iiZ",
  "key35": "5eDiM5xhxgfEywUTNyT9mKgRNvBCqbrzuS2KoztfPwpPA9NY424kP53NxwspC4a5bVfP2LTeVGWu9ceLjLfmyB1",
  "key36": "VZUz9ifFqMq1rjuAEMsu7ZwGxuP8hLicbYeXwiuDvqzqGYVYFxQbAJWA3Pz6UY9vEDoh2nj39a4F1mds7zC5afc",
  "key37": "67NJq7ahpg9TXGxjYDvK7dE2LRmNBrHcBWf8hABaQx3wkynksecgudCZ3ezXnYt85J77Ugeve16X7MWeEsr9smY1"
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
