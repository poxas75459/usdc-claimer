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
    "5fpFj37vNqoAfGyh3BTQMcXrpfjxbzP46Gym15jr8nVxw5cV8XiuVJquxyXNT2NBfrvjsxodKhKmuz4sRQXoe4KV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LihKW1Kc5ZPHqEa51cetN6YGpCFDFMeXBSeVYpW6Hpegd7z8KjqLknbVhMDwS6b9iaGmtALmj6UbqfndYzjjQtz",
  "key1": "4eERi46vo51a8cVobkGAJzvc7DAGnRSfnin3Vk17qNZUBSLZwf2thK22we2ycQLWXyzMgq2J5hiELoWiMUbjLF6Z",
  "key2": "ekrGTt5fG8AfTwrt5n4UHfjNRGhaQPs6eTz9nWJJjcdxuSafRGCyhLXgprMmWftreHiAhEKvKYftDzfVfUTPx5u",
  "key3": "3ikJ69ZZzvwDWS56ZigYZcjSrVwnR6DKhuThpnBgqXxmXuYYBPRMskofAz3L6BkChBiQw22bGvXvBfJKiDrdrPCE",
  "key4": "5eb4S9P8qYpMVeR7atQYaEoXryo7ovv4sszVcT6dJBafDpHk49Jiopp1BSE34QkNWepyeFYCpU9CuNsiK3pmf5DM",
  "key5": "3bep6hfBM7ziqbLHA166sz13f9CMn9v9Qsci3RdVnnjiRubTSWKNvEDXFy5n8bdLjXZLahrjhVk2efv6jRXphd9d",
  "key6": "5wDcaK2kDePDmcTpzea1ZXjEw2ATLN9X7nNeELF4G4tECwZiWgu8gfah72KHD1QzT7XqcWxqdaf14Hf1ay8t5cxL",
  "key7": "5GQwCbFRKg4GbmrGRjf1VvTno4V8B5bLcKGUNzrv5q5M9Sxu3pgEebYYojPwrxXD4Hm1bMvw3zkJ9WuY1VNSDKdk",
  "key8": "5uDekZT7pYVRsRFtPzLB3Jsy8CBtf4HUkQTkeJZCwLbVaSq3qdyYTFCsh2R2ce4KK22JPjZMeNa8No9ABhzciASn",
  "key9": "2UzsLveKySRdgg2eohkGTJtiCfQoF5YkBqN3bzNcS1SXwQWTtgPJGS6UAYEfQWdDtBhGmTQAEW8q7goWWn75HtGy",
  "key10": "42dYZGgbQ1Hkdjy7ZR9LJL8EyinppoSSZgdjE2HgTHJ46nsLePmv7T1GpQJovKvCxzgeMYmQnDjN2hdYkJYj6ndj",
  "key11": "4vrqVnGDfFuLywUAFDebsbqHBnkevStULqiiSqSyvJyJt7Xyt1g3wxZaN66azPzCZRGJUCyxcG7bX2dYi1Ui4dJv",
  "key12": "4QLoa7indijyjSqAgzmaHNiWaYc4SSb6VusD45DnFZkL1enNonNndbqEhT8zwGfYHFd67ZEAZbwaizXuZzyeVkig",
  "key13": "qg8M5uZPshtTgNpzTFBLVMhArEwugFCix2PscUWd8DWCUayNZbiX65h6kmabVo6UTZenxrhk4ge3AwGYSfmmfAc",
  "key14": "ijRDR2SXp844M3tZWs5rkBaxFqK12ZB6unfLEKqhzrmxoxqoDftYci2yh4WPLDTpAuy6NFM49ZxhDYcZDwcfsyS",
  "key15": "5w8AebTLJuMFP1DiB3diUeSa83V4brcnsNSQBk6aekorYwEYRKFGGzmQQtVqBjv4tKdToLA7AN5krYthka8Xnod5",
  "key16": "3MssBN34PDMFuFeQow9wW5x6AXiTwbEFvH1psQ42nT1YZXDfB2TQmzSpA1cRPVAswGTq2cpXoqntYcYCehGywNNm",
  "key17": "3SLKptonmCP7TZt9mzN6t5DQfbcUarxUsvN1VS7e1JuKrFatCXvj7CDrhLjQqYPkVSsDm7yEcLkJu1N1vEyz1Cqx",
  "key18": "2QiZ5ExH4hiWfyRby8oGQnncYsykJH3QzKYRTGHQ389a6ToLaTqVS22Hg5rnDFzPaPuZtL6KP646bgNKSFS3Qrk1",
  "key19": "3j5aasVbk4boo2DRsVTQ8Ca9CtfaSSzYVAwh67XytHRoPWhpcYMz1SESUSKDkJvdaLhrdV8aQShWURzrXsF1AFQC",
  "key20": "4skbw8DGfn45CWdN9FZbMCSdo8DcnhvNmYwdMeeks3Jik6wAtDQZ9ss9X6Nmegw2jeF1GWTTKLZSR8JAmCTDfD2v",
  "key21": "5kAtV8VVrn57PUP8j6qrefzeJ5MnfLWvbNKdCAXoguYjzUpcSnDtKUzQ1zD2aAGE5u3MYrovPRmr8e5GerCs6NPo",
  "key22": "3D5QwmPVgsr1jGC7SJRSnoeVdTWXPJJZiQrGQKryxbMzugS87Se7yjUZ18R6dXuh4zPATKGT8y4hawY6k4ZjdD7X",
  "key23": "2gF26yjbT9hpgXFD3qJnh6LWsMnJwBz4NZKGoi9KpZpbbZtXrzMBbQ9pFSpvr1yW4ty1h8MtzDBBPEgga8e9AUER",
  "key24": "4ye58vN4GRq9wkR65duA5BFCTz4Ti7akxcuCPZKoow8pNRPBRY9BWGheqMWbkegpqGQQpHKVsjFoER7ziPoLjwwD",
  "key25": "3bfwUgRkAx6hTeMUc8qBFWomQJTiUm2R5gq8WfxxGC7MFohEheGxv4WPte1CFQ2K4eomd3pSfjJmnWYW2t6MrNHh",
  "key26": "3dAS3iL78wzGUu1v5qunFPjaNLuTkjcBcVXiy2MiHD9akuMNKMXfevmwVyRxwtx1G2zPnXfjcRqqfmkpBEmjzDFt",
  "key27": "5KokZT7tXWQ5XGa7AKTsZbLXwgfibfFRpiaEqcTBHgijC7q9BygP35YG7fLU6o697b3HXq8UYTSSNCqCFS7WtuGV"
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
