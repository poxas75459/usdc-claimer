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
    "3yCAHQCthKmcTdkXhmqhzFeoKCbvGZXv2a9D9uPK1mm1AaPjwnhHH84t6hCsC88rBN6LxeNby59v5atmvWoeTDt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hjKfGBA1Fp5LpkPmTAX4PCNot3W5mNU7d5GeBBa82jWjAAcX3dHwfZrt5dLs1TQE99KTaX3QaDz9PuUqPCjtTtw",
  "key1": "42WnauJtKhfzi2pMbDic2kq7vWGCe3XgGQ2mZ6waWmA9EDjpX1ueaQt9R6eswVShfgMf23YKHYNNEemBa2DnLPDY",
  "key2": "5jhr2QWwYfhmBKqYgVe5Sso7DvLoLSUiB7Fte9SNDczV56yD8EhCkjD6EpNTFv5Jj1ePqoGfBoA8C6zCMTnmxzdm",
  "key3": "5F2aPMhanJFp4Pr4sQxJ68KwnQuWopdub3EGjCYhgDNz9v3Qp9Te5ZJfMHZbuzGtgY6et68SJQ3GpcnwEgqw2Q8Q",
  "key4": "43V1EeBKUze7DDfNf6MK8fukxg5VWuU3ZaS7UyhyaDamR6ZrZc16KEYdUNENvFs4WgTLitat1ywy9r7vGkM2Sx7m",
  "key5": "Hron3A3cithnKR9jV5TfeFRHoVBjCJnbi43WwXzoCXyRAr24bMtVqbGX6MYP9FaZg4P6nC7BTG8xT6zwCKQaZyw",
  "key6": "3qbVtnPdPUyNTYvFNERp3qCm3JHeN3AjU7j364GC1EJFPT8PgWWbze6Z75MCiFMoNXdw79FwoUhjYjrz2hFZifuy",
  "key7": "2HD3bT9xcSceFhAtYDS11CpEhhT7bKUc24T9xh6CsDpuqU1oQWTNGzXmE4ZNvJVaL8gPENnEVpqrRMcMehPj8ttF",
  "key8": "4tSvKYCc8ER3twh1kvw9hgdh8UnPuYR6e3HyPFZSHLmPLMzsNwUP1q8qywn1dDUYdbZ3yVBVwNtpFwgHn27c9S7Q",
  "key9": "3nu8D1irrNfwd4Cu44kgnEVit7cxvJXEY5hc19QAnMngDV9nfzfJwEoj2vuJFH6Bc8t21qvSzZJd73DveHNNF4jU",
  "key10": "3U4aDAbmJ6W8mjaWj1kAozebktE7SahnaVVewN8Fk9cfFVDC1o6NQMMGCjpJVFjhRsaeLbKKM86yfiRBkwZxHZ42",
  "key11": "5NaEGPUs5wyQcwHmbvLzsgny7ygySVdz8ws4joZCubrr45Qh5JZeNvBXJptPPD1bJGdtF2vHttKBb2s2FRXg745K",
  "key12": "3ATJzddDV5Jko41Hmh6M8WN2zGt9ubJuaLHvs7UphdbMFFtr6wx6RALREnTc6cQGjbuoDVwua2qfDG9XCvrVbEtd",
  "key13": "3b9jDkjcbjGuDgC1KZkhhdc8d2bQYU95xcQEFfVAGF4ZLPe1yN71nKQHpWByNSQi3iNYhHGYanbvaCr77VxUXXfS",
  "key14": "4fVj5DywXCpBQQmLCh4ic1EPJBmH9oVBkpcgSomjrJChvnaozjZGE8erY8G735wMk4cN4fSsa1fDe3sidMHRvE9V",
  "key15": "434gDXNWD22ok5GwzvBzPv9qCnsjGiA3V9MYY7CQYi6Tat22UD9SWN2AcJxXXBy4CdFEEB5qcKe46h1mHe9ZihdC",
  "key16": "2tMurV5eZjxt6PpPJGUg7MX6o3L8q8n2GGGC6Ea3bt8ZAJQmZjQKZeC857zsZTAcM5wMGkr7swLoTNFMzQJgfoWz",
  "key17": "5qjRD82u56kzhPqLxhaU3SFTYs7quURqUkdydQe23XHqf4am4cvvYxH28Lr8RWD5a3cQRNsVNcebmKna1wi8EkN4",
  "key18": "2X8h85uHBPZpfLUufPhNGzddbGddQQpGsMpqbJUMmrTjwrJ5unRez67BtHGJRmJJ7uvtwN9qrP2QV3WLwumTBshe",
  "key19": "4pDsj8Ux1XfdxcVkFb9k6HYEw18Yx6ngfTWdcUP5bSm1e1jJez8uu8WwWMSrqZ4VNdycmib54c9o6784srsJrMWv",
  "key20": "3ZJh1piQb65rFnHfYcsCK3CdNJpgNUvfaz9t8LHDZNMogk19JTJ5AGvrppU2t454SLVSqaEbMYcrzdrWaabfiM88",
  "key21": "4PXZkGDFGxrLd1AYcugiBuHp2mr6VPTAb1gar8TfFCPhe3EjrbM7Pqx3afavrTr6Fvywvo5fE5aV3GDmQ2fYg67S",
  "key22": "4g6znKmcoUBGk3BDJNPhFNNdqynGVNq8VLYjxbF1MrdxhaqxQ8SX1PNQQxnQirB2EhJySeXBaUcSbQFLFZ79CiZA",
  "key23": "z19TPqHBmQvmsVhyzwx8FGVhm69Dq4ZQaYC6cXQDVERG8NweBCJg7hae8d6Z5zxKz62ikk9Xzoq8EcSUfNejbpK",
  "key24": "1TmivJRefFg1yUw7s4FERCf3mcgRTQRuQPJz1XvqcJGXYTt7Sjdjss1pEsn2uyumbvMvRpjhm8CeuWGNH7nFxJa",
  "key25": "3apya565hVwaj3u6gSQ6CxhDgkvr7ogBHFS6eh26n44MGBiKRqANk9PCk3NPpMgF8Ahee2XQBddTJ4SfZBfJx3cB",
  "key26": "3rSJqCnZjHLLHRgG8rtmvaEfRvNLkBuY5mwHKDWvFGWL6boKCFKDEASGYCtbrkpUJVtyiDHhsG4t5EZ9k7h6Y2xD",
  "key27": "SvLKW3LATj2VRT62NQJQVcKs69o9vagxWBUjJfeCkMMPhi9g1bX16Zaj1AFBjzmiPwsxoUGi7YkateXoviV5YLM",
  "key28": "3XsuWf97Si5FtYfRARMpv5urnjw1cQ5cWmAHS5MSsZWr51MfFAEaJRmqNAeorZBgiq5W4uzyZdWRKgaCNjgaFQ2R",
  "key29": "3iVPRntJ5LQCRuvECVbCKKq44jP4kjF7HdTHeg5ZZ56k9cfLwXF2vFJtrbRZ9mC9368T13YR8VxrKNxKR6urmes3",
  "key30": "DL2otk5yc15CFBrUnU3JzrXncKqjSWrU4sNAAPc8uhhzCcBWvTR438PSP1yv4LFi9A7FHh9VAvwFDH75ikdHR5X",
  "key31": "5MovbnddCfv6A7sAH7VdToxLSqCXdAgf66m5kLGKEMLqCwjGnPtyWA5zejnNroCVTmt99DtSQ5QLgvSYm1dAJffB",
  "key32": "QuBUvq28BhTQknhtNkRkD11kUFAwxY3Xu38nGJcP3xcs51hkEUmj9LHnsfY3sBEAfJGMV6hyrjS4zrq6xztPMub",
  "key33": "37b63GX54Ri6QPeFe6Kgun6xbzSGxFZgjHqTcqk2HAsStEgKxTRChJUwDfUFuvaBoPU82PwmUqRWojUzGUmStfm"
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
