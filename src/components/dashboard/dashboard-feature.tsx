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
    "3x1JviGhY8fDtkHyg5PYEfF3XcpiHMHkNTseFKMMK5FjSerW31xpwGXGftes9yfBLzHiTteYUza5nYpNdP3Zqjhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hc72mzq7vQfhDFxKT68gYVCQKbH7WcBaU6ohWQ2UX8xbEjJrZT5ZHJHdy8ypvBaag7F9MMa39Ms3GHvKEWUpkuA",
  "key1": "5iRSHj6twmX9tHQZFStmnUXxp8K5dt95k5a84dYaFtvgk49F6ppz1Qe3tiJjzMc2f6syzKGT3SPSMa4Yvq4XchEG",
  "key2": "3426U5wUVfPmhiL57QG45ZwsyhHxb5ZxuaNkEkrMQEtcDNU4QucJ3fBFRy7NaoNKzdC6iyNAerWB9P6et9GUfbk3",
  "key3": "5cHq6AhuFN28DqPCMgcKN9dvHMCQnN854JLGPXYkrdYEUwVaz9gSRKn1SQS8zB22aHtVqq2iKp61WWqjwGFdbsqo",
  "key4": "61ueXpRajdJh4sqappGMq1afxGJVeKum5mawLNCTDuq4B6gVXQsFDGt3jcde8mKzKTEdK6WvnbkYHz7hxqa5jWxE",
  "key5": "2ycvCvUniQegfNWDMTTm4MMFsHfDj3jGsmA95nAQm6icUdhi7dCqgGxXMfytfeqbjuYz2YLVoWQHVTzYjhR5DgxV",
  "key6": "5ENKB7kD49dLPYa4Y7oqzrtkaVTYFjFmmxmjAjBDPkeSHQbdDqEH91qqWP5RVwCbusNbPv2tNWqPh2wzvfM8S3r8",
  "key7": "5iTq9gguFYjbuqQp72jrhzDZpcHousC8jVhv8NY5ky4PybQ2LgdQd7r37rr7hJNUNS3yuLg8j4L6uYvb5NiB3pww",
  "key8": "4mddFcLEUuaUWgeFHx2bGMuvaUYJ1df66NpMvx2fb7eaYhgM2jDZnzL8jKKo6Lj8sbBDYUHuSpZpuh5B8umY5n4x",
  "key9": "3AzJgNa2i7pzhYoBuY8cHSphabauK9gKXFDed7ZypXmu9Gk3cKMFFR14iKRn2U8YrTCQagkK4PZgoNZbW8p3rWDH",
  "key10": "4vL3pmL4LAFFsih8zi2zsqSqCMr8xtGmnpYFixxT6wb469kG4qorVACXt4JxRZcPC8xjJJAUuYdNMMhqLFoU5T9y",
  "key11": "2gtH4jwYPzm6eV7mpuP5S9uKYpYNxCUh2ZiUyS2CXC462DP51dn75yqxbThULVs3omcowGCoHG2XEwbygtEYhJRC",
  "key12": "3Z7qj8tLRrXKPokuPhLaKunwDZrEJRmijMm22PbQ1MmT9fBVdQHQYAFwdp6oZkMPQGKtoXhm6rtmVHwYSoR4TiuA",
  "key13": "3RbAY5HE3mcJjexsRfKTh1P5BtwUMaYorJsNoNvug8ErwabXRVp7NyJJNmWbWxndEtAhhFfK7EPXQjaggioL8Vvi",
  "key14": "kfLnvuZKvMqrjfyxNUN8mz4igQt2oWSLy9LPeHhzC8w229fb9aN7zaq4mc2YesWTDu5a9e1jfPxATdbgNZhN8eE",
  "key15": "5g4eM9NbFNnfb4S6rPh4sAmU188oqgahKQ3ue8q7pNvZqYM7NjkPsmcFL2rHf4uBSid2eidc4oV5ASnH1KvDc7wU",
  "key16": "4rHrWkxxsS6ASKo2nVvxAFxnwRM2UbbPhsimeZ2arAVaAkLL2GprsBdqSUWWLyNkLUgGWahCkRctKXNTvcrmZAou",
  "key17": "2WoZN9ETEztihGZ3bsHoU4fjM51VY29DudhNXEBwbuXhQqPNUG3NAtdcnAJF4pPCvF2D38pnAdymNp2jyEmqCyVS",
  "key18": "XEhjfyHT132g8x7jRnxpPB5xsKdH589xCgz8yGAcsoXUSFwUYkYWzMeLy1DeS2fzhrmkuAAij2ApnniSMH17uZN",
  "key19": "gX3oXXBANLfJTp3dBT4oUL5Rppx93TLiL6hwnVyxJ2yYp388nQVt7LtD7stYperqWp5iYVSBZFjhojdFk9PHxQc",
  "key20": "5CTTJ3RhkRPcACmBja6qai7Ca4QRFYsmSubUmp4346eGqpjzrCeVxN3TfKzW9zGKoQTDGqWxEXL5tKkdLVryyCT1",
  "key21": "2WwBmfjWJXD7D4RZ8dZtUjgsVegd1tF4Tpf6EpMNin9d6CYHMuxWJLsu3QYJJ8D31Lz8hovvQV8ET9zTwEDrgU6m",
  "key22": "2oU7Ue6wuBZ4T7cTC2hpPTZsfoJ5CpB1WgxDzwSrxkFmZUeNjWxJxkKJsKPtc4JSt7FaLSVuMjF3PZFmmJXEvN85",
  "key23": "31MCKxcdZ2fPnkEAjzcuCxua4much9LkWaHjixSJrowSLr4241pFVxuYAFg82jPT1KbfdTLnpvtQ4s7vwtr8Defg",
  "key24": "5RXgjLnGPGKoiqWxAxkBm2rZsrXhnPCfMEwGZJSoG5EibD7AFjeUeq31G67ABHNduEMaF29sqfHs5ghaccQ8xdZt",
  "key25": "V7gPCtUnyhzrusL8avvupS23yYy52xS7gxF5vrWPmyp8GqGjFGXXk2NZ9c1YfXzkWmNGDAMeJ9bqhhazS2iGBpD",
  "key26": "2dwspwCZpBB4ccLuZSxnUrThWwVGjyEoy4VKo3ARh3hXwPQXcfbw5bbQJRnm8AefQo4g3ekjRBEGG5xYE7J7uudw",
  "key27": "5BuYZ85a3jhxp974S1QsFecXu8fyNFKUX3xDGDDetTHPyE1ngEmv9MSVk548e2smZbFj5kkLVUb3TLeKLtJtB7G",
  "key28": "4V59mNK9wxrdXU5ksQPKmwv3ScKetqtu4BwJvZrHXfAGpFfzrPdJ81VVsw8VqWYfRBSxWhW4LnWM4z9V3oCbSmfA",
  "key29": "23BGxmC7PsVkH6CvoueXJZyaWPHazbxT1sSrhNwy73CAkmbTL8veo6LC1oZRfxVhhzKFmS8U5pP5dNxrdKGJkodh",
  "key30": "5RZMDb32uFqEtfj2NgvtWL6ovCv62SL3bHcoM57VrAsEWpwn4n4nSwtp9TM64mmWKRs32fissufJrQeneyB1BDcj",
  "key31": "3xiNfyP5RMSyvnQw494GjEPZaLP4TT9uEek1m2hGADUwfdsvBMz4eHHFNXaRA3WkarCqoRZdxncReTyf1qey78EU",
  "key32": "X6F2B16PR6AsdcVftJApAQyngi7oFyshvXry9G76s9cw1G6hCAwbybLgHiReZfyfwBfEsmgvHjXQopw3sRGHmM2"
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
