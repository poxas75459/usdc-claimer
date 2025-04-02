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
    "2FbDGrpV7T1ciWNjPSmPAP5yenepeUugwZKost7zNw5FZqDmtkj75hA2cRXCFFndb3tabRYAs2DHr8wBtdp4jh1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ComtYRV72DqbJuDNNhxPvPMhQWxPRpvYkXMPSEW4rJaNn9mGTUhzJHdbDGqkAYJrRg6Zmf9Fd8F8fj9exfXxnyQ",
  "key1": "3W4PL4x1oSktrt86vCJ8KVhdzzAkKpoDWvbC9WVFTHPMFSXfF8o8uvRC5h2JdLqpfw9kingEgvgqrBcsjnRXNjWw",
  "key2": "5pYXsaK3FL2okxtrv8VudDyLqPpHdXPeb9R6voguyfpRLPPgXpvJgJPDkxtjcYW6FWNABKkFbujf1Gi6yMsZQW2b",
  "key3": "2TJgnJBtZGHkYyAAcicMu85p4uBAVyBpoGUWVfpzRFqPKZ7ZJxTw9bSsdaP57EQtLNQZw6YPswuGt8jZpipXPbJQ",
  "key4": "5oZ9Su9XTzmqoGv2s1hs75Akd7cmy71tKfJh9uG3N8kq2Nix2vMZgX19eoQmgKvr4hwEnDREoZSEwxYP9Yq5XYUW",
  "key5": "3uDh5ZdiZikWDuhm9cjV6W7bBTMJsRb7a2UAjKT2K22HYdEoLPZ349tJdbdWKMr9GTJv5CwkXHMMwYjUKDsvjhyf",
  "key6": "3ZPwZ8ov6sS4Z1UQcqqp5sjWZtpb7fWUnjf9J7JXBoBjZBaaWrgW9vyrheDykLqjgYTEJVrxNVJC4FG7FduSUH82",
  "key7": "2HZAE8Rn7ivVuPEW4hHKTcXrFwtNukxJPA3YhjcuJ2ySzzs1KenDmeprzTVtk7Vf7ssSZnjCYobazRnKeuykWFSN",
  "key8": "eZFdmFnp4BcbtotnchUEwUf4mWhhgA6caxXN3N5CVvHoneVZsNsRvSCxG3k2ZyrCHoTUuPaFanBxw6QXKvcitqU",
  "key9": "5YY5P5jdubYp6mLocnqULAxVGF54FkBVUo5yykKmLnfdY9osETLXMqN6JhHQtQFk8qX7rzNfp9BWCikxaktiv6we",
  "key10": "46arwSz1AQ1pGpkLR1QsQpVgD9KJibhG61CBqxd6Syx9j1gQ2sUceJVFcoxrmcgJqZvj2Duv1Tb6vsA4e2X485D9",
  "key11": "21oLmazKSg6fb777J97FBCUEVxeHL8kdwwkXKjKVbAhUbwCHTWkrYCPHPTWuf2BsRkczFCLXcb2Q5TXSkyuMtG2m",
  "key12": "4eJcR84BM4nJwiRkbNCi9NV7cLKPEMF7w3FRhx7LKTwE4iqgoW2zW2oLUvW13Dcy7oaqYRwD6bmoZM54f8yXkrQm",
  "key13": "4K59p9PoisL4bk8BvVoWFXk9aLDThAi1gBEYWAshiPQ9SFBsRwiMESgZgNfvvz4WMtTyyMws9oq4ks2KPizZpArc",
  "key14": "38kCFfivEmKGMyL5PkvGbSzQmyRE1uycefggQAid6VpRDaipLX6W8yUYcUdi2fM6SG8jsia4o1pKmmQg5aFYx9uP",
  "key15": "3DaT8uwd1uXyrN1kMBWPaUeZjuQnECmj35mSBg1K9HiPmd5J4KDvAWDk37ziJiKyF8Ja548AEp2PjEGCBUosRhY2",
  "key16": "4gLoUracwXXELgf4fcX3x6gTPHDNps7htCbf8fMJFCxBtRb8JXBnqkSdw5bBddJwHrYC9QP7heDyrkMt1hFgTdZC",
  "key17": "5jqfJsje7opCvRMvMXw19eJQPnzbVv8S5WETWyDi8fLB37MQ6XmJky2m4yhb8EAquDgDL4ZgHsCh6mbct2WXX95R",
  "key18": "i24tPVE3JtEnHve82yegrkrmFRbTMx5qjBdy7xNJC5Nz6H7CUGxG9WFXp9BbrVspJtX62NtsH3ZcUYz21sz5Z8K",
  "key19": "4DDkEeR7V6XeoLhJqG3Xaz9ZeHZfPnQq1fe2Beud5dWqm4N4Z2FdAyachR7ApfWX34ftJiR4LGQKYjr3HhLxyW6V",
  "key20": "2insWBUPy3fnfgwTTqFMVbwMwvqs4iFCd5PZegGhvcepVZ7QVyd8NE4xpSKe8FY3sedVdWmBLYcLthqqn89YB1hC",
  "key21": "4MbW5s7LPVqbzr2A1yafjN1R8bebJBDpk8yRvDFmjmJqgvkC77ZgWaawMwAAf1MU9VzF2t6b5Jd5oLTLQxRrVK63",
  "key22": "3SBAMEjhRDB4r2BWBeGTu3sAEpZN6YDdGvt6yFHps1WvCaYTTQu3YBJykiXm4jr1Dq25coUg9HUZM8j7CpusFdxJ",
  "key23": "5DGuWFTTYbvPTHWFNosUWW9tapVrESSq8V3xWqVq2QeNVv17txd8W9JabCZNqksiExWFpZ5sfy9SGiPDJxcTqTgP",
  "key24": "GirVYVSYU15aPmnroa8UfeBoDvd9jcGitCQHvHh1w85taDn92dRvzok7jY4BBHF7LETMwwdZTqJXbkwjHYH9vsz",
  "key25": "2RCrZ3Luyp3JcbGAkGVpJiAfenogdsHJh1Tp5WGrVNbx8sBQcGYg9Lqa6oQmzCFWivpfXNxasdEktedWFazu7LJY",
  "key26": "z3ruAj67yzJdvCoWnm4ahJfquZsP4drpDZYuMFy8d3YBcC5rGALCM4mFBhqRuCKy3n2BW2DRSaPvojBMsEX4aBA",
  "key27": "29rTAEF3z27dtD4EfaYxpEzhAkgaFwaBSZWNjCAN26V8wnC1r39Q1Ps29PBTXk2v9bqzJu4R3vK2sAbPESiB6ete",
  "key28": "5v2Ga26aZ31k8EGWfqfK9wHFfVMZbM8zU78yaKSSgeKkTVqcdYEokpErZVk7heZnU1mzAANbvx64vA4amd722Np9",
  "key29": "2wtgXY74dBxvaLDRGUtk8P7jqQg3JcuRPHR2EqCrt4uM2empCCwDdMiEJh7kkEMREZ9usn8sqJ6nm97N3gzGReAU",
  "key30": "3sVhRzhC7zPmrryWufwMvMZF19DEHzivaEZEUX4he7hanGkZo6JnWuaMyYTW159bXaP1QpQkvtYLd6VUhd6RfsJ2",
  "key31": "q44mXmfN9BXXW1AcUqAV3Xio5Nf5nDnKc4sdi6nThESuKDZa2LBYtYGyfChvqzeJkmqniPdXbdLKWdyMSYSK6Rv",
  "key32": "4iuwFpBovAZKAxH5DSjwkga6PZaa1ngE7dZ88gvjrpFmcutWZL1LJgwQZFYZdbm8HmcCkjfkcvwvC7jhjsT3v6V1",
  "key33": "2GwtAuriFKU9PUDXt8FffE87h2yqQX6JvNzehdLkPgW7co2gkkyKovT9GCGpLkvc7tL19xmgKkwBfniWDemF2dyu",
  "key34": "xvJF2PL6eeZcX5DRs3BU3FNSdEyiei6EB6MBfD5YSrc8FVmdxWGUGefC4wvJ7NnLmPoiPMKhef7xKUpSonU2GvM",
  "key35": "52astybZoshup4T4E7FghKFkELUA8Q8mvpfhmsTQ27E41oVyTANKPTiZ8xhjL3sAkAbYwtvQJYhuQ3Q2rg1GkJJy",
  "key36": "47mD7xo6eSyiuyuSxWpB9akMWDUWRUXLFNf7zTM2v5dQpiTDLPwHrFC2XQbK9A9EZN131BufE1d3kAeEogct5Ppz",
  "key37": "5xv23ge6AptemGR2fAcondnWAuVEtNVuALJJy8LRLEUQE6C2CF1rgsdpTKnZmcG9dJzQ5v1ShKYpK5be6WWoCCwZ",
  "key38": "2Jcd3Y51xwfY5YGzTyM5z4Y2DF4fvLvSxeCo5y2AAQ9BenGtypxqhyR5SpxXVoPLBR9ar6sB24jv8gp8qCd876jr",
  "key39": "5XXGojLWJDyXuaA48FCbz5z2qbX8BTk6d4Ljwd7vKEv1tz3WZmg1eekjRNpVU4XGUXhyhYX75UFwypDSvB6iKCaH",
  "key40": "n2St7mDtg9qTLoyqqDkhY7i3vj1NuVCtMaf6C5hekcku2NqsuRUsErbtCLWB257nEewLDMV3n3a8kMzKaNtT9uN",
  "key41": "5fFQMtSS8WN4f7yfVHBxtUTZZBzKeRyM23KEJrZmbGMCG59x44EnvKUcGfyJe5UkmWN2h84MhNBefFyjL4qxxN5E",
  "key42": "54kxd1nTx8pWpj94kYN2EgypskG3QshcARJh9cSEhU5HrBKbZvziMYMgcBr8GvABV57pXWJB5gXsov7TKUcTs6KP",
  "key43": "4hwVnzQyXXAeHcHcs49t5ipn2HNiRCcq46yHiDUZeqtex8wBgijYHqkBeMvGbSanqU3AWkEaw7kNtMFXNNY4Tg4a",
  "key44": "HYq5TM5ZT4G6KAgvCYoXJZLiotwgEzw6sQCS5bTcoMya8VE4Mv1AC3Md3kVefYmmaraj1ou3KnbjR5vRguZTekn",
  "key45": "2JmMXcJYhkzhyfYLoH3bqjjmLnAUWu7fAy9bcX3nBPsbV9pPMXuh8Qv6gkZTiocp6UpvbUBnqjgtvY3BJf4juBQx",
  "key46": "587Z9kJRmsv6PjtcyFyzaEd8FA3N5RZUkdpXPRgHQwMGgeyPEmQ1r93oWtrJpzu1sQipr9Gjp2WZMTybLgtU7VyP"
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
