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
    "5woUVs3bruECe2kwm88byvQPAmrjjN7ow2CZxp1xvb93BAGyxTuVQxaEzhWS8EUDp4XGdA8tYYUh4EW6Bw8maqEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sMcAjRVZnqVL9BWbAYLRNWRjVerA3NHbTQymZ92MKadyePvQmsZniGmYunKF2WppwKrwxxrqu21goKrEYN3Zi8G",
  "key1": "2k7rHMdtLZpN8M4WAC3pXNNJR6n7SbxZbX6fp67J1TKKTCprNiWeyceChhJ91RvCPEopihjNmphrqDCZpYva7t5",
  "key2": "4iMEyYGPM8ckG2AxwxdMnzEMny6Bm4dyVL3W938h4ntSBJkCpSTurjCdhSXo9ERwWPkzbeEVpz8YrxGmoK5DqArt",
  "key3": "3L35ZSo2zXpc4mWTQBF1neLZbR9gimVwarbwX5L7k7bZjimah3M87YndXRxBiRABSYAGw4SqvMmnYdGsBgJrKZih",
  "key4": "3fufEgexmjKVFJmrmFQWcxBBfTEw8zhxuyE25DyqoBvyvzusWJ439Qp4vt3HCx22v3GztftymD2QMdV2orrNS1zH",
  "key5": "Q4GxSQDd7sq5yvTBuhyYz9PgmMCQF2kVEUZpkKuMaNGTmLDvrn1HSUsEWtHsQs332U4EZowNZQszzvfJ5BCj52K",
  "key6": "7J5zRzrPBmkxCq4PYyePuCsZ21SAoSwf6QDdELCMGGiMNQ7cNErahme1e6HpPaBYrPBaRzELJkrTmctdz4anoWR",
  "key7": "5Pc5gZwyUYc1QfpyvuW9HWtgeUp8XM5EBViWFzxj7uBitBNGm9RnmFHQKdfymLmy1TN4tDEQEe3DjuVAmoSvJQD",
  "key8": "4oPfV3A5sTm57PHKqvJ38geRq8k5rSY2jbrt2nWqrWk9CpTJ1Pr8kLDJxRUPHbrDnxx3JNNajBUhR7J1WTz9D8At",
  "key9": "4MZQX6M89xsrzrE85zQw4TPYYPtW2apFwwdB2WxQQRXRxEM46PpFEaqyD5XeYxygehBXxk9N4Udn3mr5h8VnRKR4",
  "key10": "7y9iZcHjqVr8c4Gkk89s7tg4h3rHvxWVUH6hu7he2nQeMwQqbVpRW1bwaXT5vBEYY7ajqj3Yu46bL2uUeeWGpre",
  "key11": "5rNn3EKCM7vNhiBRD6zJRPFXP4SyeboCStP6zvgWADieBAhSNHzruCs49jUD4dnScFnhZdYorRBKxkNNohqp143k",
  "key12": "4jFTovs3bpRVdvJEq8BB9SSkzioQTJQc9GfGqB7TG8eowCStzcBSUYaUdTW3tV7JXUyr1BWu8PsfXgfVN82G8bVU",
  "key13": "c5XG41b8CPFH5Zs6fRTSExGcNz5sYCSFQ8rWGo48jhHr6JM1Vmn5UuUZTHh3CLwbNrpF2isRZhB17bD3n2YopvQ",
  "key14": "5D9PGfXoLVQUnXR6bkaiQsAvAEaRzmh4ZLtb7Xh1uLNGEULEeSCcuXUwykmpTNTw3Yhz9FoV5uwafLEx1VJK3chs",
  "key15": "666QfnengvnxdcZbaxk2WWYBwXkkTg2r2wxbuGQDV65q3HCZmJu9j2XGVTLLboyXEjVy5QN3PptAyZwAtAdVexwV",
  "key16": "4XVgsvGYK4RJh2LvGrWUxwzt3uNAGzXpwJATVYYUeGxKaUnLMM6NSTZaYGpMkmxoT9G4mk1EsL172uGBowaywKbs",
  "key17": "2YPvfXGnB1HaivyhPwSdjSokTccX3XrySXut84gbxcLtNgfkNjtD5STb6KdhWFVaTCqNYKuXyyRWuVYoydzpY9Kc",
  "key18": "JNTyypffcU7ErxBVsUBtozuniaaNxURTgn4y1vesLB7WrYK9fdGJz7j2eBwD23i2ovCCSwVDrnimfdiTdMJh3oh",
  "key19": "A7acQ6b1mT7iQPJ1Qo119G7a94viDQnm9hhh2WADunnQ5GaWSVTz9aJF2TtbDboeqHx8ScBA2Z6zyKuU1PQMQuN",
  "key20": "646veJenrueDxmzWuzzQkoD7tH5dfzjHGsUj8nNkq6jkJvTCNd6rMoFaXrvRzqFVp9YoeQh4DSsC6eAr8soRyPha",
  "key21": "5hTYiFyPNjEFAiZkWDrZArU8XWcZxDFDQMTQjYfAD71h1XVvcvGnZ4Nkp2NFcbTqdRyiLLTb231iVAzR6GrByx81",
  "key22": "5x79k4CZ2xtrfg7xTukZ15vp3uXqpZGSFgirodQoSiK5GW13dLTmWX1nzLgx5Bya4NMKpndBVL6fvKzG97DC1iyN",
  "key23": "3LafYhLsFEBb5EPvcxpF88HBzVbq365viqHKGqWpHW5tshS4sa7RrKCZDxqFL4ss32dQDcXURX84j2fPrK8NcTtL",
  "key24": "D9cNdoMSwDMt7f6mPKCakXqWkrnqjcY7HiVHgEA91kdfMxrJNzbHbfXGjJ5kBUe3L6AHYVuhBe5HjkueZ9z592v",
  "key25": "5roAs1aUjFoetFQrdfjFGZHRSsvFQaM74qfYdWxzVhRbrTVKyd6P7dBhywSqEJjSey7BMb6s4hmkYuFJKnJ2qXwq",
  "key26": "3y5apA3HvfJesaGsXTQ56fLrPiUctPuQjqUmhjLfifekaqvjzTcpH2GjKb8dqwDsUdNSwfAK9Bxs6smpMB9xUoXR",
  "key27": "22oUasKUSpK5xo8JYfDnFhGEYPEG1ZoS2qo3wedxGBxqZbe38bf5sYmdxwdLASrPPhuswoSfPB6JUjRkiTpQG2XF",
  "key28": "5fMEs8bNvkvxHndu6hopDMxsjDKBU7dxPYbmXytm3umQ9iFYae2iEjn9JxL54Q5aRBhJjyJufdJmofwdQCwJJQZ7",
  "key29": "vNRTNBeXHqepJGjK3kuoL79VhNQMNK6CvQTJDsVKH2MnB9i67V7FjsmxyhMiMq4qYvbkm5x6SAas5uRn8EfUesk",
  "key30": "4N2BsVn7J1sBKqUqMXoJwKc1hasTkp93EmjHewxt7eKLf3YDo4bbKkju4PBZrdHYpzUQ7k64fYwoFzmyzpj5DSQ7",
  "key31": "m5vk2zuekZ5oDpwY2nkb7uH7VgnaV11sM5pJkfWqeg7m4bRk1zH1Vhu8x9Pebrcij5tsa6uJ5yjRtVYhqooeVHg",
  "key32": "3W3qxKpcfCH5b52tAuEsUG3tuxHAGYBY6p1cSpQZVFtZAcEQTue1Zgc2EjAQfS4mEUgkXBozmnC5DD3xExxndHcr",
  "key33": "65N9G9oW6uWv9S3PubHfi4Qa67dTry64neNjiM22J4r1hTbtHmdLTJaXYDSNgpmpapwKkqUqcxksepzJUgNSwunw",
  "key34": "4FyFsefjFnvvDCBCCXRuMgVwJ4s9GqLPiucMJhfWCYiRTCf2tCUGWzTv4aeX1vCJrugAbJHLnstA74vq9Ltzrope",
  "key35": "RHEh3SnKgnZa9y21UFiSDTXpj15aAMNoZX7buAeJzQGHBgDpp7rv7DP8VTZgce16RxwjMe9voU944SAAvW9Srbh",
  "key36": "2GD92vhefe3b9ao6hZy5vSZv2Vis7q7aYQGLoxtNiTPCSzSf8y1KtTUXfQF7YmQceFePYM4A8UjB3f7eKExUB6NT",
  "key37": "3q6NT4rZZ6psUJzNrPR82oLJWoosA9x39qAgcBV1sqdD5HgKGjNUgfEZvBFZXFYqdR4SKV8Bj8ik4j7TRKi4LYqN"
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
