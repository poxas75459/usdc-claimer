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
    "2P4tmcMAt2w6v89s4tJ2vXK1CDwfTtZjP7XWJ7d4iQbewhsZqHV1izndNv2XPAyyJi8h3PmyNi2KSXBrXwHGv6uy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T8iN2xCg5a2cSw3nA7wGTsLAnJRvJPqxtLKvcYW8TVYkq2orfTqqg8YGMqeVSsS3DUwHXdWmeW5CwF8Ab36Wt7v",
  "key1": "3NdXewd2Qt9SNdWtMFWbD5EswKAPxkZxuodn7FKbYvkjwtg6AaNY6d9N5Nmg8A5SXBhP3n671UykFPxf7iwELJBZ",
  "key2": "3zFMpyKxKYuXKBzydAUiKnmVhG9aQrAcdszW4dqdgt35K1eUtffpoXb2qJfLM2qYYqWdCY18pUqdT1jihkPsDXKS",
  "key3": "z9woiee4mBQHmRVdFfro63J4JmVvg7t5UAvEegpdwappZMs2uTB6mdTWMhTEQ5kH1tHbsGDSbiKjzUX6vPLbYhQ",
  "key4": "4dH3q1Eia3rCc24N3Fw31gUnBCGKMjFsy23SnZJvyeS3aM7BU5PxjmS6EsXsXpyFKbkSNsEH7zTrdm9k5ep4tLS7",
  "key5": "4cNp7PhnoCzctoFar1kCStaouWL7fL1ZvzsopGJYyjiRC5dLMm4Sm3H8NxtRGCTEUxKFd8gp5n1Y1pU8vsNvM7a7",
  "key6": "xbBhfxDRNnfov6hU9tpgpSHmt3koc2iaieqbx2aSs3GTqaWGrN2PAES6E5p1oM6aW7oQ4R5WEWguUw68xXESbq3",
  "key7": "3krdR5frRTYz2mB8McYS2vbPZFH9jnMx9tLXRgr4gZdKMHELwPzYWp3pAS6QofbFk727aweFn1eUr16FsRT1kVuD",
  "key8": "4UUFRUvBA7SNTFRoDRFseGfUsCf8KssmsSAmphv2eeboZeeURwRMTggLUYxBeYeiytYooo9CReHyJjfu2VKRcnar",
  "key9": "yrJxvjdRHi7MgYd3s7YPDag7KCNXwwSGHbzgGgVUuwqGzogAY8JST3L6n2aCTmCAXbGdCV8CHEiZqo6cxqf5CRd",
  "key10": "c7yK4cezAtbHciBsnibY9dmHSjTyTFViXsXiXCKbGSUweJ3G6gXp2SSzicCwpGSU4JU4yg9h3nJWiuPpbU6B3FH",
  "key11": "4eBZnUcfssy2S5ffJQYag3jwTe5C6YB8dnsdbB7qZoHZQw9qdEYpXAWtBhvUgppDBP3Yf6dtGcbKY6Le7s7bRqVe",
  "key12": "4PZH8AVegGX4naPiYyvqX6TDDtCPzeoDQoyHkjbMPZQNnfasTnQjgAwTyPedghrGgzdNUc5Niuuvk3JF6WPuTKeo",
  "key13": "2RMEzrgoMkPK6xjJY7A9xDogxM4xBgXZkx1o7DhpCkX1YfTP7esL2ocxCaYroBptjQXEzPQb5kLd2FDAYBrjiUbC",
  "key14": "5ZtfrX2CJvwZi3CYKELGtBA5vti8de7rGWEGZWyd52pyScMsMdYAC8AhmwAetbV79dBR7UxopAFqFVntxRSNmKCb",
  "key15": "ZfhZUcD1bLPaPfDaZRXvp28dwAYAavgewfTDt7kpMjRVuGjp28RQS1ptNR3XikMhNXXFV62JHQLyQe3Gjjm7ECw",
  "key16": "5L7yTD2yZ9Cm9o7s8pDspETk8tFzRndhj8Eub5xMrJDNhiYEUWkjrFWKs3rnKWvpQcJJAhEmUMQf2dEKC8JTnwZG",
  "key17": "2F6xL3mSHNRVfsxiHMNxrRbx4LSRwbpWybZuhVgyYPxa7PjYLZxP3uFkDpVynAgZYgXUGnyRvu1oq4PAAMzheZ2v",
  "key18": "3E2cBecMjCM5dgbTDiuyyqc822AMMzWfd6zdKDUsqiiJVoN4XR9XcozsN2HUrWE1zc3eLGPfFVbHPbg4PYXEUU8s",
  "key19": "2q8aF3pJxdUZD8FGtE9BemfUZxCZRPhdUkQVgtCYzck4t4uW3Uq65s2A1f2v6aGXgMBQ39VG52UmF3VQbp3HEN2F",
  "key20": "3gstmhGdYjikt2uWu4Hk951hxAWMHDo8VwHGQSSeKpLUKMUqiiGyhiaexctQa4wfVj4RpNtY6yEHvqcXeWUTVyMc",
  "key21": "2NwwmAXg4FmtS4rJQPGGnz6V3kv3AWrtR7QniL4tkp2mmNwLHbicnrNZzQpPiZX9KvVpmQKenazU8Mig5XXiD6uz",
  "key22": "2BQc2oKXVGFGwR7EXsGAsbEYmAC1VQjbJJffwWCuQkaY9hknRCc7EnjPStzaHp1PGrMvuB1zWq4KuRvowRQs8CjZ",
  "key23": "33Xu52HXkqdVsrmywPp2j1YqmDLdNahUA7VXXJgNTRyzo9GHtxfEcVBtZKZaNd8CQXtQAYa3LHnADQFTRfsTBYhs",
  "key24": "39ic3uPkRNrTsk9AADMn9Sr99HUheno9bR6XaYeoHHwqR23h3rCGwAyixiRno8F33DkTdcmDWANMWCtT5GSAYa9p",
  "key25": "5SykQc9PnRhNW4NeucUPHwG82gupGG79NpRrTEwT11DXPx3pw7DdSnVY5aZ8sqDa4VN6PXv87ScEmbKJGhTu9gWV",
  "key26": "2nN1Fh59reUpUgsZqvvNQSsqh44g9G36dSz5H5FUjkoeBVxpqM1KKWibgqbkJM7R9dybRFCHTTXjWgtcFcSnpoev",
  "key27": "56jCQWiYbr1LYNQM5sHKMct5aDNL2pwU2NKcqA1j62Ai4S1wy7p1di9sfZeJJyWijUwNjgEUEgtyN2urzAvxu5u3",
  "key28": "5D4MXj4ZPHKCsKjfRnqUN2dFPQds4VZorDxwcHjqRJK5HE8SNVFKXDWb1dVQ3Td8sCYjLqhTYoYBqWdVtXvGFC1i",
  "key29": "53q3VfNgo9Gycn5ojY85gcFqbTcd1yB19ySDvgnArxXGBzKDS4AdhWkpNG6A6KRZYryM4zKnx37TK9Ap7HE7w5kb",
  "key30": "5HysKMid4tsKUKhHUYUqMQpA1NJ1Kb8PizQEXYs118Ca5LebAJq4UxDtyk1YV8ftP6RaZYdVRxrsq8RAZpyyPDNE",
  "key31": "HMq3PLjtvyKZWdGAgLChv5S7bKnarFATc3iBm4us3UJyuKpCyDBE6p9zNjGtc53h3n2T1fXt4G9dq6SFpoXxHkx",
  "key32": "WTEKrrw4QPPKax8P9ZPt3gkLo1h6qP6fDMw9Jz44zgQt4WfMuMV4bzNwZVLSqmAaj4x45uGrhFqX1G1pbvHpbJW",
  "key33": "22xsoXerfPh5WBr2TSuGigBrEyF7DAsStxsjEdVYF2jEnotsjQLSU2jXcwNpbZQfnmqVTnDaVzsQam4KFgYD6tsm",
  "key34": "5vEnKiiu3iEQy4uTezELJQMT96ubrCCeeS7SWz8kyAM9J7Sw9aXQZBAyAHjYYwG4ZLQavCtxRRmDYBH4cNKR2uRk",
  "key35": "5b9sRodpakXBsJN5C6TbqjS9CQky7Q8SpRo3W4kZQJ786EHyiHNtr3Ubgv1tktraZKBQ1WrNNdhvdwZ22feew2MY",
  "key36": "4s7bGy3JAL9CtJXByujLANdhyQP5m7jBNx919EKrxPBgYyPUBhkkGWZ7t4zcHGBLeGG8V1bKw15NEjRGEjxwmEFX",
  "key37": "7Uxpkj1sPWC6DxQe6Ux6j8FsZZcpbhVk1JhHnHLD57GyMrUGty2hTL3rjZkXCvD1yz9nCfhgf77pf5FuVzeyPtc",
  "key38": "5fBDEtaRTDbJP57xtAgHqZpkUaTGLzaU2rFo9qmsbA5m4KjmJGKcjsyuVgimJbZQCozmFZY3gwQEfjrm9GZRZFv1",
  "key39": "2WM7hH9x4jr71Jw3pJgR3juTGTYe8rnkiVeXVJ5ASh85YtzsPcWEzosvjLbgLPcaiVgeNnKijz7qZopuc9qAF2Bb",
  "key40": "Ppj6zEX8w9jLgujvZfiZgYPDbWSjyGYSpf9uvy4kyKBHy8Pjd6c5ggnF4bvtxf8A3FAJskFZjYzASHkTtQzGpNc",
  "key41": "4idmahGqGKdayWFVdrwJApnopC3CUgGntZrPymfUDiWT2WiZvV9S14Fztv4pjVfkzSBAsq8HeQEmJFEq7UTBEmi5",
  "key42": "5ujzkdYuwAXUVES4tHoU9ayW2E3RoHRkHKPh9o3XejY4NWEknBZw7ZvMsXrth3LuwmYPH4hoh16AgT83BERjTzdz",
  "key43": "QCvjjxhWfYxJxMPaxhaT4hqJtV3RRkWoypubGPN6vHX3mVKPxP3ihprLsvRQhXo52Pu1W9tS7hParfBSk3ALw1m",
  "key44": "4VVATXFjR4SzhJYmLN3vTxMEmuNH3um39ciDkkHqs9aWbfZYWAX11zAcxQLzWgPUEyZVBWeVeY71BZp8nQRf8gGX",
  "key45": "4eRTygXFqKPpNwgg48EAGLxshYAYsMs55WxfPvNoTPoaA8FAXUcdTfDJ4NB9eS4wwC3Kv5et7ufp1LASH7yvnxxd",
  "key46": "ZsKvFRiUScvqEU2m8SMpN8H3QseJUhJFGEeG8t89rzrSYCC8BLz4NFHnm86VTvC7t3yDE9LDgmaVPKeQFge9WUN",
  "key47": "2nWgpYxEBrPmzwdeFSUbTaG5bsJTL1b3QFdMefjMwQaj8xENnBnpbRbmLvxWbxyAK3Vz7HjkheFB6dXvx3G1giw7"
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
