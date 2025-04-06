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
    "24aNGnMpqGXWuFQ49oz1gJFN4whwyeQvKcvhz1CtnFgPS43E9YT2MurvDoYeZphzFrfi4fM1LqnP3Rib7vgjzzZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ycDS1qj2sGbAgLsLgLU4RbNLVty4Jy7xvr4PBezgE6sZZGZe1is1pRtF3Loi2Ry9uX24jg4Dv5zzoUrRowuWaS6",
  "key1": "4ZezTHGF2sLfHk2MnpU81xnrMv5YNxFXmk2wpeiRL7PRt9k7v5wK4VeKFTaXDkMJF3duvbrCCWP22KZEcTDQgHw8",
  "key2": "2FMsEyQsLwBjKj9o1LFQwS3yULD3NRoHA6tDxnpoT6x13M2To4hdY9W5eF14xXEbGWaWUnMwxXoT2mSTFG51KamL",
  "key3": "2m93VaN8NYKdZSnRT5NjmZq1sazHvDqWDfSRroFtdKRWYjqYnKCAbYd7DBz8GAH6NDZ9sM17nhEtbEbogsT7SFiW",
  "key4": "3cfh5hDNQn8d6xnusXvHYQshdpnzjxYgaDzCNk5yo5Hz6G8aEqouuoCXYXeAzTMjH5zZ93mxtHe5gnQRuguZTjmq",
  "key5": "4VXpn5pFhbGwUQ2SzcpjNDx7eEC1Hx5fMVHqPNxLX7xNWwaGgxfoUh1VoDKrVKfexLd5xkJMqPkBCz1dXvLNQNNN",
  "key6": "2mgF6V2cYbLDszp2jsbQ17iULx4uhnhjZe3REt3LJp6k4dvceQsAXAFAXuNRrEcnf6ySfR6goLFEWJFbmTbEWykM",
  "key7": "5h6aWaQF8QXqxrkgSiDaV3i1BDPgRGMNs6FuUPGUR2RsCyz1AXwrvFucv4rXyGNJkw9gNC7W9uVvWsgDpG8t9ont",
  "key8": "5ZsCKUL9Lx3fU99hGHvYKvMrzBPy4vybRMoQiocqFvW1qLTPUwL3EgZZ7FZ1qiX3MKF2MBuA4SYBzxEWi5jKN8yo",
  "key9": "VrDgMRdaNuSaWy4962wbQXaHWU6JEU8j3M55AcPXUWrLnTbkw8E9XN6hgNAdng1Hi2tBSFiMPRmFttkBnk8D4P9",
  "key10": "4u16f9QRA8AWHFLKqWpsei12eKERBWHLypkGwHHcJCrSEL9rQtqtvH5A7pWT4iAm44g3m1Hgx7RZ3JWWYahqPBvk",
  "key11": "oTsWFQFkUseESSysq2eP5j4iM8jGfYnvHjRWKkNyxyjcMtTqy3gGaWnK7zaWrXbH1517sZyGq4TBv7PYzvYRa9S",
  "key12": "5kCXfTQXDpsmV1v6aFkEHPFFD1QTSYCrXZ3vZFn9s8wdQ8BpwtJp4hg7KWqLB2K8eWstpuyUY9ewsLnZoNNsKJbb",
  "key13": "5QRBhYMN9Si5hL4QMSwznx5s4hVCX2MCSS2ijDCGbNQg2F2wjYP5vFdF2mwiKsr4GBcvAKWQdWuc6LPxq7zaSy9M",
  "key14": "46WT11FVvEHvbCrUNxiBxrQqb4tSQgDMTF6vVEJqncNCYjLVCkGpHDtkZcPbyiPBqe4BWaj9KUEUNQ3fUyYExxtE",
  "key15": "2FJEfJD4RSoW8jueyH2VJAc6rmpLiAE1CtAX31Gut7j5cgC1JAHXW9CiGLisMpnY2GL63ZtmRs1vzcb15uGDYHyQ",
  "key16": "35sqE5t2FtCf1ksBeZ9VYgqz4cRRN4fB3Qnqu2uGdvTAjR52WseXZVoDcX4tW3f1Tdw8dofxwAAMTwJLnEj7tWYP",
  "key17": "3ernrkYVa1h3Z8bPVq7KFVyfRMHK2FnyWBouhrwVNYw2mjY5AKSwYu1iUVRAew9qq4iydkmRfAxcA7gy9Psku5cs",
  "key18": "p5ZbexfigZsXKaYmEX99BNuyuMCjApbsSidsbV3gP1yQbFXwUFy5gcvx5LLXzLY9ZNhLtDgJHzpg8W8eiK5inu7",
  "key19": "2TiUyvVFmDA86MjsRnbMUji7LZ57aHf9L2E1PCRHXfRwZ5UPvr64nL3wuodF9Yk8eUjtbAaRrBGPnyrWnchzfr3",
  "key20": "3zEp97yKTL1jy7FuNUowj8sqow9cKKVXmUQKF4wHb54Hwi4A6N7dJ2JJHv78PvUnsx4qk3uHGH5szzqCx8d96MMz",
  "key21": "2fWYCA71tKsnSbHfXFaDWiy4SQ9gY7FoVD5qrbXDzafQ7jZkJJpRVegp3c8SvXtG9jZLNJUjfrVATBKuPZTw8fUJ",
  "key22": "QdzcUt1K7EQdHGcLqd6DTKbmDAcgUcrzuUKqaDW5YQXZ6raBAQCBrWcdgv7ovEbqypWkXDT6rdmecDXHq6RPA7Z",
  "key23": "3CPsSboWDoXqHUfbMpjVQKAX9oqpmpK9p8MyoFuKMfgvcVPazYifoZTRXRy9D2dzEVVgVpDP36QvYoG4naq3iLtt",
  "key24": "4FaDjwyd63vbtE6R4nrqiUYgVKjPHTumnLF43HXd98JTQHUazGKHP9qNA98NWEWnFpr1GHRVUooB6qzXPkheWvAq",
  "key25": "2r34rQALSYYdahDh5ARPXSW9SqHNNYWp9Jbc23ebCtb7E6er2bMY8y2oMigYieP27HJbBd56ZMzf5zinsjR8GHAL",
  "key26": "GPewQGydDWEvvYt3EcGYTLp4unekFNTfEKZB3P2dquQ28H4KZgTWAHvB7vCW6ugHbpb2gonfvCNLVb6oLkuaPXC",
  "key27": "4EuyteoT139wgZVpbQhukyPybq8psc4EzkbqBn5zna4TNgodZUR9MSNETGFdSV2nzpT52KbfmiqNtXX1Pvgs6pY5",
  "key28": "h2F8DaTZ37tR3tzsrNhPKTbpSf53qPXVxsa8vFHTAot1P8tn2vmxoSThwezcWHi1LZWfNeNegDUEY3vmhW6WohH",
  "key29": "354FCgKrMojXjxbvPG1e795WVeCKwD2vMykRjDGnRBccngvCXytfU8rEkxuAWWausuQ6g5CcC1KYQh6fNkwQ5ztT",
  "key30": "5EoVGVEh11xMGqzfZjDY5YT5AGKKsgsbEXv1RYwSUc5i1VFCrSMLVrBv17dMxXWCXYkDmNXuoHPZVa6yx2SrVMSi",
  "key31": "SBgG1YNxzHQKRhaeGVFX38NkUXavDvJyLDrDfF9rv2dDxGfvpsQyvKsC1dSadckkZtRv9sW2eaasE5XHauJoLjZ",
  "key32": "2gEdppxQGcpqq1hrpSBUfjrV7vJJPQRaxyGxQQS4knNYnfG3GkJ87uSijffwSnh8SCHHHencgHKt9GMSSAGFjbCS",
  "key33": "xJZ7JgRQEpiFMUeNx1JUQVDPoWAyttbcfKNTUhyqy1qzASXRtjBZF2Saxi7LuvoM63XG9MgHUDRcQQ2WJRgRmQe",
  "key34": "2awMBwjJ2dJsnQGiiBjfQMWhsnpQQcn8RK9UdKo53vZ6P2MiuBsxTnPBXcX1H2j3GuSok1jffczZLs97dZppfFaj"
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
