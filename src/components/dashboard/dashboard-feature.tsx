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
    "5jvUXCWv59eaN1oFvFdz3PNBhMxJBKTbukMcX5ntqbo7ZdJYXKbuUZ3RC6Unpv4BRivUxf6HEB57rF8zKR3KeYiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ed7NmqWUk6aaimhUqh1D4a4RbV8TayTNspyW52fhcY3BxJ737PuQfZoTckBaCHr9mnZTHM8fKk8rJV3R4TBkE3F",
  "key1": "4szCmevLY7HyLwcdqxDxuB3v3rnQLLJUoCfDo8KbnTs4ZEYnw9s1bAooYy1geso3jknkrPTg96vpphstgUCMxhXy",
  "key2": "SURn93Bzijv1PGT36SPPdJZnQKoweCyuKbxKM5n3s5ici7n9QUbDAes2UgUg5YX5aSjULnKrGN5iS2dA48XFcTh",
  "key3": "26sFd2H8NeuS1NaRJ2dcohppnf5CFoL28babxcM8Bgoyiw5uvRJDTGLjw9U1NfZG46znVm1ehpTkzGksEVKwoZww",
  "key4": "2v3DhPSWHzWuyF5zkgMQusaa3yXLFgDahXxmHcRtaSwC2YYaEEv9UMFGt9jsNk5BH7Dgb5xNbZ4XiQCYLPsU9uMp",
  "key5": "Qtfb39P1fqvGX4mBsgMUQbuawpqWcqRyAp4DgQ8qXQQKkTRJUmYfM2uznr7QW1T3ny7Q5hTGAVHmpyjfY3jrSmK",
  "key6": "43LNsBUxWmhgwtSExDHPv18SANSQbDUZSD2P4TnUvCtM6jA8JrrmiLWmZPruNaxZJqakWW33gYRVod47BEij2942",
  "key7": "4ZJ9YFJ9dVTcKPds4gdLnM1D4jmeKGXEKbr44SXWZmrvBbH3ssxXQeWq7snsfQGYqBKLgfEZp1MAWyFSxjmYnvRH",
  "key8": "yv21j8J6e6m5TqpoHoG5LXFFkQDQUSJbaWpGnxUctgFg5mLjRdqAdvxBdA6qKY1dwhhsm4gGc47WMfNg2qggtkE",
  "key9": "5pehbowcvTeUczZC1SywufsNttVU4XT1KFK6wF6tbj5CWs2YmAFtBVY5h1KywkLBiLV48x38PagxULyrXjSeh7ss",
  "key10": "2E7CenY7BvwzgYNwXWKWoCFxpLbF1iKieKxFzAmPUGYfNXWCakw3NCuoU7QosaneuPzoYeZUoWGwXmU9osiazk9Q",
  "key11": "3rJuNCzsB6qGUpYxtyfHjDkYmn5aR1bxkneNKpHUSkSDpgX4FSSBgKrGzoq2H6iMjPWZvsSUx9z3njRCZyer2n32",
  "key12": "4A2jCr3Cb1mUVQ5ZbLBVs9WPgyUjUthQxSF57hoaS8ZaCnFDjSBjRWwgEf6WNtzfWdxqThB7EBATsY3u3YNqaB7R",
  "key13": "cyqF2UiorKMBZyXdL3sEb7UjeJ8rCFkGeik6KNJWfJDNesjh4aqFVeKjWdXVcax9bZ6zzdJcAkm1D1tSjmArESK",
  "key14": "2aC7L76r8xr5ba1SsTzVzxFKQ5WnFtZrLFtniYqtnD8DupVL1peYeusnUPFMoqwZmi2wLKKxJCA1Xa6FRuQmcYHH",
  "key15": "3x4kJQpHuDUZiCep2q3hoFgmZR677WFBkDVLHUtUqpN8XFhikjYVpLVCBJeAsdEJv3D2Hza18AvJFb6Nhk6r4oJe",
  "key16": "A42jUaK9SM5iPnY74zqhDwKSbMrLdYbJcVYu1WoSX75ThmtWZUsMs2qsLxCg42WcanaHM3qRLnMZikjqhgumcq8",
  "key17": "26rjz5f9x5iZUKsGY53w46A1ppDsMDDnUzqcLDdx3eBc52DBYoNgi9d54DKnAqzLYP8LtUSrEYAc94A5QVWrm7bS",
  "key18": "4QfaizGvqCwd83Zd4YAJ4EKdwaq7Q3eDoyzoEexCjNZfzJSxiiGord41FFjpxVhncj34dd9NEgj18MENw14FkwwZ",
  "key19": "47MsdPbUfgdkdBtEvcMutGnJ2azGbKJM1MGXaJSjdbXWPt7AUWVW8NZKjkC8pUA8DfbzJpdAvXqxTq9MGf6dpU4f",
  "key20": "icYTXg1E462EwPbF3YmGqZ8ntjBa2r9VJqWZt8GmfWExSF3iMpKo7fxemdAvBg9tUt66iznweTp5HXUecrhwSqo",
  "key21": "251gggZ59ceLBr1yoMrWaxrRZpRxALWBpE3kD3MgqhMKHFPysD1GB8G6dbxwHoov3dUg7i1tvFzqmehEYseRABbD",
  "key22": "4tQiWG5steUZnBMj2sFyYbFKLr9pELn2t5uGoKFJNJaodLhuiKXkKKCe1PUWXEbXszFFTQGHsKscsWW7pj4ouGEX",
  "key23": "4BLEAdirhs5cDjWxfeuCeY8zRoBEoSsoySKybqBTv1g9CMriATv5wJ5pgzQ9PP9kQNJQVNqh6DUvbuJjVXsiWm5S",
  "key24": "24n4LnuFtf3rQUJH9vw1R8sYDtSZ6E5cjmwXyVHzZGVyTuE8nAgt2XtyoLx1Gf1A7uxZN99RWaTWAnwHqqxHbqtU",
  "key25": "4tZZp2qyd3QKfkF9xGe3S2CxUanowvVKC7W7bKQLXzBdLHaL22rHQauGtbi4zov8VjSRf8zWmH1s3tXVmBb3vgZe",
  "key26": "4AwgWYqdGKWfAQAYcV6qLmiGxaM3deXZZcb5mXgFsVR7o9S8icLFWmo2Tsid1sNcNhFuRXQyXB4X4V5usmwiuKFp",
  "key27": "5BcgG24m6KM7iRvMUrKAxVqnTnW8LUxCf3jsq41i6tbHhxT5YvgNQWSRDDhbMjvaE5CRVxRPHdQobeyePhbG3aob",
  "key28": "2KVVAmTAzZ5kUhwG5JBNqk5jc3hBaAbGX9DUyEzENFsvKLw1NyTy2Phfu6CbYV14F4HuSdEEyZPiSYkPo3KXyHW1",
  "key29": "2XDzKXNH415gaeo4CCsWwGgbZ4dB3aAqNm5XCneVsvMZAbRxuEcL5MW6F2gSTWjyjr1X8ZyPxEaJDyLgh2fgxAXc",
  "key30": "3q9cAt5AJjRhLgXEXXqeJ4gvdfdLjhaQ7XwGPbRx1ENCdXtfN8PUjYQ4B5Yxjq55tkFHD9zJS8rYkd6enXBDk4Cp",
  "key31": "5g3AN4y363bEX1BgBqfBLvCJs9XS1trw1zRRs1RPYD2ciD95H2gkUDUbWZr8nazk3iqWtinHtGhdwSMYMt7GBcGe",
  "key32": "pvMtgbfCiE957PHasyiGadpBhh5DkXt2KW6nhE6AUAdNkBWdukRACcfBfuhShp524ZgTah95qmP3r15DPrmkWH1",
  "key33": "4mizuVenMD5uGGEdPx8DsnkDNDGKjgxUcbLaruZSzm6ZQuq9cKrrCu4ZmZnTfLp5a9z2J6ZerGcDgUpGhWdY5C9b",
  "key34": "3NGHFEsQ2yq66CV54YmCDESXHNeX1hqzLwujPEZKCrYxbzPq8CFTnDqsYuLvBhxhkQZQ6iMyJP2Sq8RNqkmSPVVJ",
  "key35": "3wB9L4hy7d6S3zJGLd5dChfYChQnopRLv3TdgNBMNbt7hSJTJ9Suc1jYsEZYyUFJggxV4yAAL4sUUsqdqGmtt3aQ",
  "key36": "N8PeDqkgBJ9hQnwM9QHsqV23x1Rd4z8rLdcxcoc6MYtgZ2FNRU9Vmjrhn2Tnju6etq6oxLUAskw4nvJs2akost8",
  "key37": "3R6io6GB3PmEHXPN6iWfVF3pzQHLwP6SwgS6p7EgUjGCSxj8WLkGLRYSbWNk7vEht1bhRSfy2u5QVTBRrUZkyqPk",
  "key38": "3RroJCHwWEYCrZZrDCHwbJ4SZ6tFbwEVSuQ8DoHHufkZHyz1Eq4obW4FRsKKV3baj3wKPwmW6MaF7SVCWHbHNXSz",
  "key39": "2SxbKg4MfRHVYusk5SLp4KSyb94y9iPpJqPwGeH9wyfMM9KASkC6QLpi1CFcUbQ8GcGyUnb9PxFetvzWP48Evqmt",
  "key40": "5xo75pxjojbA6ARj3F7jMwQ5xTPsuCjFZBvebosFgqKgztrsomVMUUUk1VGRrjJ2jpVcxLiKpNrPZi1YTbB5asmD",
  "key41": "EiQvrjXKjz9BdyF895qWhyK8jUa5gCr8oLhkmzHGzUxfBe784MWGoAAD6Hrjws2kuU3sHpvNN9vhSM71mm8fM6w",
  "key42": "urqRZ7k6DarHgTFhrvYeCMJXXLduUsJwgamLJ85gYDa6cqr5CUS7HmJKrLpWS8bvFYVe7WZZhYXPTbdxzPF1NAt",
  "key43": "5zbkefXfLoAqHuftzbrex66FqCnNECUi1rjK23nEjcCttmE2QW6xHp26wNrhQQeAfByZytrLJpsDdv22nrHoh51F"
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
