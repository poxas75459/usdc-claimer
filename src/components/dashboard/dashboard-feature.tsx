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
    "2Qjb6im9GUVYBbkcb8BZaceoN1JyLqnbsoi1SSB2AdErnc82gWUFBy6A49CnpUECUwMRbEq4jK8N4eoxgQ7LoKVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yXhnBgEqoybwgi8NjzWwE6VLZ4aaKF7zjnSKeQs5c7Avi1XZjfXZSvPh8gqug48WMtXbgCLohzcv1Xj2cjtJvDp",
  "key1": "kRcFdGxknEj4MF2ZB9VR6XDm4DQpFr6RkBc8RUCZUTDuPJiiTfPw1e4tp2r4zvGQ5LTfgujJRY3PfUhQ5kmPE7K",
  "key2": "4tQndapQDkWDk4iAxTJfRRqBBpMfrDoxAM6x4A1ZtefVbMq2uB8PCThELn1VbiJhDDcEh4mPcwV7qHLGSAjBBxaW",
  "key3": "2mmJYnbF4RinkSrubNb3PY6geRaphbmfd3VNrj5A1U7Y1dyMcaiEAJZRzLjkxWh2ge11dYkWhrkjhdnXT7PSFYMs",
  "key4": "5kSNaWbX7Fa3LgR73x3N2JsR2LKXeJdCE39sAGbDggVY1ycSN1fEpdr6ocDDVJ7TbCGRcDAV1xwhycwztfpPGzfk",
  "key5": "5SGg5StE7zm2PcR6BoPeUxidiZG8YJZFr7jRKzWy8CHJjVQyfPgounhqbhonvzKn3NmVR2dkTfq7ULYU7xB3sQbn",
  "key6": "5hHcJV158S9q4xSSGLeht65JezqoJeqrPsTrZnd7eCh1MLB3PNengAeBewipvdu7wRYAuVCjehZtasVvkW641J48",
  "key7": "5TAACcVPyn1zwdCrZiPk7TKyERi98fZES3Fd8KjjSfnjWVG7LHaZaxHZyWxexREzLhbqMveg65sCET5yU7Tv5KsD",
  "key8": "5jWN78KdDFYYSiFCMG81D7QsWa9cJLEY57A4pBmfWtfaiGMzJcQZSW2PtNjpgcEw2zHPkB1RYK4UeyGehDMAnfhQ",
  "key9": "3cr9VL4aL3D45CwkNsFjHSMT2cnXX16qK4DY21WbDuo2EucRrq4tHt1DgwCMVdJa7CaHMGRRUbyGFJpS51njTnes",
  "key10": "3hg3VEL7LwMiRtDaY7EBTYkJYTrUaufimy3Q9dvofDAWoaZZfPV4qreNrF7GJXM26jf1tdsCnCreaorBtHsPiPqK",
  "key11": "i9qtHoFCrqds2fPDd8MasvGzq9xWVMXWxKPKYvUG1LCFiwkD57j2CduwZjWDd3vVAKomXoKfxSa6abKiv6J8uD7",
  "key12": "4osBr3behCJ2LrnpnUdLNnjr9nrFSyy8VTrGUMZX8PFpZDm2yjn2pUuJ5qd4XZPdAf8CBAkhH12NmQHWdk8UyHzZ",
  "key13": "4piqG8nxPkx4deG9rhdLk9i615eMVwn45B1QZcjmtwD5aYyGX4M7fxpzJtKiSja7qyMdkZ4peGn3NPPc8xnZbaDU",
  "key14": "PJpcWeMxCm7UR7vF6xkTeUuhvftGxpoW3YPdrzVcnFc8LXvqxRnxoTnzsc6dFe39D3LobQjF5Fie1mC5cHFVT19",
  "key15": "54a5G2ZWE43d1CQKYo1bu5ZV1z85VqnLQ3nqRP6GWnK6SeFrZMMmbgzohpu11RxghxB465vHyhK4zVB3ijBGwdS1",
  "key16": "rUC1r551f6wPRUxcR8iGbpma3jDxMeCi4VmkyGa98xr9pJMTXn2CfjaKEGmqVVGWuxXdKw3df21MHromrRnDNei",
  "key17": "2KPJMoK1UNWrJQWz5q3CszBpbGrpCbKABC7YtM7gnykAUM8fUrifceQkdxXr6Dnc39RNWduZh5ZfWgMuRyC5PRDQ",
  "key18": "5e6jnzEmKBrkGa1cKSd8Jx6ASUxrhxoAJ9FdQvZ4QFL3PB9zpksqDYQTau4w5eRyzoZcTxdfmb5VUrSZgMyumvtD",
  "key19": "DYazXGe1363mZcjqAHKKJxip9KvRikvaKLDtAtSt9dHYy1QaB8GqwgVgN5TjhSEwvRrj1htxkhwEhNDkAr79Khm",
  "key20": "5X3g6J9S6eE2VhBK1yYTAhLi67ZDSRN1sVobf3mKf3xAXCQSHAS8LJpsWSgoXNPF7N6bJme3cddgpQf6dPJG4Fzo",
  "key21": "3qB61iKZq8FkrNTr7oAFAkdn3dPcdLzc7HcQfNgKQxBGt7bKTmkCVM8iKdoE8sqpmJRqowaJT8V8v7rmY5mDZAe9",
  "key22": "1NyfS5muUoQFwfojzUFNahHQ58oBqyXrKmE6fMXZ45gVs11DiPBvhR11UVBWqhdhpKWkiBdxwWkMnHZo9SVS3Xg",
  "key23": "2RXJCcukjokU1M6p6Tsp2Xch5gcbRARGnFMyrL9EnmS7LMZ7EAgqHXmEzdrAgpFDnWcARyLAeA8q6iM3o3sFqX73",
  "key24": "2WFk8NJLPqrgRcfK5viMHutBW8tNRCjGLPsEDCdoC6yxkVU2kH9VBiuoeXq5pP6BaeTyEcRmL3obr5FTvJTs2mHE",
  "key25": "4F4LHN2CQUWt1N1LRhKTFTGLaCpym5ZrqjpDrBya8Nk9QczbPutKAqXH9SA6QpF5S3i8RSgLzgUrnrWfwdaHzjU2",
  "key26": "2ANz8Mypa9CgGRLtoDpJXTzQvZhuxpLgRxgEEpi7J2KEE8t668si3NE6Fr19vrHFQ9ZiLQhw2mLJMZ7wKC4zw3X2",
  "key27": "4Pm1SwDBjoBDpdNr7UckhriQ9jNrV8GzG6b8akNJsa9AG9s9xYimTwHwioF6uhtnZgMecXjwCVubsdzvfbTA6xPh",
  "key28": "5z6bmVHpPTkFMiz3y21tKg7PFqJaEMvmXVGffWoGSddVy2mdUkWtKXGdBaQ8eR2B6HS1eHn6R7mLbHffnB532LjB",
  "key29": "3hE9C2VVvkPtyPSgN8bm49b5mJmhjQWMEvr8sh8eVA1RknoUy7z828VCoejnoHKPuebsDFsXTUo1Guxrf3pnVfiX",
  "key30": "mRwFLGVHCWnydrcDGXuHBQJSbch5Y26Qvmi43Bb6C5iSh1nWkoj7dqwpaxW7aHgPbLRqCeGQbF5q2ELXJtjxYSW",
  "key31": "48XGpbCwVcHWJi8jtresB69SfuXVuxS2wfWFacDSrfwaDLdfNjqbGD26qLMGS4iwjkBMs8FRLhibVwsRjBQMCnpf",
  "key32": "2uvjneSviTQgLDLw88VYwCyBBzbbiZtNviZF2FSurEt6dy6ukx8YS3tXiAj46ZBL7nwYrsLxEe4fscNcQZiFdSsL",
  "key33": "2XfuP4d4asqw4bao1NrVxr7VHHkTBxvkzt79BCzoj931stLN1NDKT8HBNkuNr4pPmFuZXT8fzCrScKcQvMyJfwF3",
  "key34": "4E7WtFJxasxVz2f1MfTpwH1Q33eoij7JiAFNHM8Tmw4ZFoA9ha6avX4uStX5yMU3gsqMjZctEUSCs41iqy85dMF1",
  "key35": "3oRYjRjCwYBBz3AvhgLTizrpC6z3rLWcRW3gGiWrKbt9bPL2Hm47RCE258paychXR8CJPdAQy4boJWwqcTdU2Tcn",
  "key36": "2fbYf3bYSQkPoc7qZcTz3GwNYVrJ64hXFZb1fzdQPj6a5T14qVvzaCeM8TiCmnNuejjpJRdHc5eLWGhuwLE9XNKn",
  "key37": "jjsSZT4pnPnoUzbxaKaNGNyahpd7eMApTCZgEbLBDVA4baBKjfdcN1fmB23URd97WJHk3RKfRKCSDFzFBgkeu5k",
  "key38": "2Wpgj7y4qwvtPVZBDYPrKpK7YwNd3EmtVG3feb8qpkENdWsRbDBahFoUjto9U2byQD8s9CyD25sqUq9Dn2SToP71",
  "key39": "64ywQ2tisRuN8TUvcxEs5Aee1iVc9CXeLpWXskZr8JgijcRQSczYb9AAqDLhdEkqaYZYYGcGigi8VtUBeGMgFLuy",
  "key40": "Vj2Qz8YPysnwKqpzNRcYnsYrMH3ccsTToSqYbFptGeVEZytJgVMd1GQn8JZ6gNViAX1SkYkd46vZ5PjTkYFWjy7",
  "key41": "4T8B8meUTYUAGhAi2JhkfU5V8Mo4oSPqo1gJAmyJSFcZArTNx2z6s8HMZuoTyTe9A4VxMkXNi3XQhzxkMReruBwW"
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
