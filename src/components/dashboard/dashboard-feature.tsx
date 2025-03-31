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
    "4QcwZDqoEBVT8CJcZGeH3kmBdgmamhNmHuDx5rvxHxrzhTG2RvMure4DydN4dKHbpwYsC4R8e1XDMfUa9thDhtmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63G4ogwoinym2cvyMspUPewdP4EYMMPA1KBPbsonyXcp6RcpuNx2bnvT2Ez2aNSkkyPctBn4EanPDoAhfqbCWDDe",
  "key1": "2CN4xbkBv5fmiT9PabsxSSGubC8AkfPtQxzQqFb9WRqoYTYDEkh4Dci4SEt8mY5w6GF1GgTwNeCTq7Atf1kWAxGT",
  "key2": "2T2JEQXd4dM52hNSxEgPP8jCFcp8jhZPrgU4jhh6epPTTxL3TH9kNasPcHGHtP2WUufq7nbcXhEUPTyxX3PcKaAU",
  "key3": "aQ3jUJkcrdikw3m513QazJgiXqy5nFRCtCdVcbw75QZnZSYBsVBLkUuQgKf7yjX5jZN9jhJNNqAPUfb7f6UksKj",
  "key4": "5CRaDdNLbdLrSZGGEoukufkn34o1oYtoHNmnVtAWs4tETVMhzTh3fqmSCVyTQxJVxzoLdSYG5sRrJoiYUH3p7ERp",
  "key5": "yXUvGDei7VSM7n4eZDFxVgCceygP2UqYe5VXkQYg2guvTajzx6MwCUrVmNbYszpZgMHbjwGvdiK9jQcfYxWKo44",
  "key6": "5finz1jRQ49S6a55cHLTZRKezdobVobn5bALiP2VHULZogDyAiq7bULq41LkjfY3bAFwrfRBUr6TjJojheKRnVNN",
  "key7": "MmnPMvf4YYjKs5UuqaYdS5nVg97jx3DmpiapRAVZvUvBTB28YhhKHAZQ8TzJnfmG8vYzDhY3wnUWtXgmfLwkhcC",
  "key8": "5JborFQ4baeqoTEWmtiznVWpzy4Fv5p36WZYki2qiKR6t9Y85yr4zvhEzfhmJJvcmCb7zVwFx5Y2MWat4oVEJEnJ",
  "key9": "2UfHEFeYAJNczacm3AZGAMfRgPrUULbrQUtZRfkKdRgGS7qLse1PU52T9EFeMYMGyUsJRku2mEtKNUF1dkut9kQ3",
  "key10": "58VKUyhikgbTSbxxKL3D9Mguxtzow2tbYdoCjmZgHgpiXK9fkEKCKt1MwvF94AoDuNgQEQ9JvYXcWNJkfFh33i1D",
  "key11": "mer9i6By5gZ6Wo5HH24WCJ2wCRapE6PsqS6DMmD9hNAcszdYJsSk3VaG7rb3JnKRVm6MaZUJEgqs6o7a4iTf7BW",
  "key12": "5ATP8zW1LrA7g7tL8VezbwL9F2xGbctBkU3EjTpCVnGibV2yzJvgM2BqThLatL2EjNLbiryWdoUDE97ZvM8zaXg7",
  "key13": "2QdqgPoL4VSfzWPcLkGMHLfVxgphNpNKfz3cfaLNjGjnLMcWWXiYKBPpsMYKiUBgATGygrsmTbSTxA389R8hYKVY",
  "key14": "5EDgA8uDBvRfRxHtqE4LFNeu91tweRh6x3P86dcjjs2dUHZMjgC6jL8H2LkEirnm7L2YRWc5vAasMx5qGdNLfXfe",
  "key15": "3cCGQ7NoCjq6GfTEXnQmRXwS9c2DukiEZv4B4mNrcBWWix2codBc866PE8bV6KknZLB5fubnuZm2ReXfvm61DaLD",
  "key16": "iaERhDRxu7ECWt6R3gUEDMJZ3ihdqX3wHKLiejWbvzrKHsFhVgL6iUCgku6BPGjQ8HjtssFBfVQ8trgCey6xC3q",
  "key17": "3ePDADg57E46fNJMBRav99KxTc3rhYy9NBTkfNxJnCxpXQYrEFtT198sQtvGE9gc59Kab9CxpPeNch9Buwi4p83c",
  "key18": "47LP65CJb8f6aahVhDyLDap4SNSAbV2opKQ3ovm9nh6UDsP4gZW8CbBMKQhmjqCo3F8QiobddELSzfZSZEf8RbTB",
  "key19": "4219jhfTvsyYL2LxF9mNGe21ot3FotGJdQsn5GRoqqDsFbyYSRQot1WwfRvSxGJgnVAvP21T7Ts5Hegu9g22uGH6",
  "key20": "7MjBNRzLeKahGNARgPCMfT3goF9uWb5K7bxBQcBHpAWmcmLqGTremT7KiCnu5ouPsMkx5JKhhRoJbokKF7gNn4G",
  "key21": "tvof9QiB79DZrypg3BTUA7GtMBryeJkYZrB7JDpNa3tacWYvGZcDeMRS7L9td2XaUQabHpdC2XXmz5HK54sybA3",
  "key22": "2Biaqw7iX4iTxH8RVtabWpQrf3AKZ2NfVnoZTSrmNSY83cKFhDBb6YxXeb7W2hFZa9yKBe3NPG4yrS7VkoFzA1x7",
  "key23": "2YFcRPbXsp5NBzFHTNTy2zZqosnA63rjmYE36JVSDAq1oWgCDJV1sudLqni9dFQ9XWRqVXtgfYBoj51ECuoxV51m",
  "key24": "4GyQnpmFxadpVMssD9JsvQ7rchtP92zgmS6PaBjmrDesm6WDkhw28ePfD4vphqN2jKVdUSNzqbPzU4LrFCyKFjfV",
  "key25": "5GWUqHSR53uMgHnVVnGYcxjvfgoSJKHxxsgkZEfgr3drd8uESvyHBa4SNTLbpup42feSURoEddEs1fUovtd2ak5W",
  "key26": "4W1D98LjpxCwSXbSzwaPj1qN4YcPRj91d2FHEvd1KWTyuy2Vy5RN617P4CH5uW8CdsFsZYJ1Lt9uroYRjhA4yzz1",
  "key27": "54Y4JbF6EX5HPGCbnpFtN7HnVyibaYXbTGErmzDXHZhBQyCkdqpUBEjZCL3zZ6azjbQJiKdF2tg8ivip5U9XsD2e",
  "key28": "4gnDwzrGZo8hX8tb2zDHbwiGn3RRrk2yKBPihG4nBrToED5r9BFZywzWbPDDDCKmzDHeRwYKm4xkgeiwwhoVyymA",
  "key29": "5aEYqMMqjckTHGv3tfbxvnjWByrhoQ1KDehma9c1ggyN3cNmieEkURiQmcsQorNoatEcFN49er7fHXFUCuAu56H8",
  "key30": "5XKUPvQLugp1At9wbVScDAwN5kk7Y24WdH3GnZLLmD9qT1NZvihCBKdnAqak1axEgcQwMfjTHR5HifTQ8zxmYV52",
  "key31": "nbzs2W4wQKCKAuhNjUZ8HvHnttYJGvRy6end1akmY6X16pZJpwXuuRJNErSRo5A6hzriDkhYN4LESNx2ygNYXaC",
  "key32": "2cd5Gdr54hE2awiGBvTjNxVvBjjN3JD2bW2xce9xMvFXq9jWr5qfUkXzjaEqfRLaMvE2QbEyNxsf9HUHSuABqnkt",
  "key33": "2epafDxFw4AJJ1QPG7Di4248LCKVU1aJNQZWaLdFJ3zMnaD6suS1NquYZXZwAQsihUpWJt5PG7jnQsFMsKVa6BmD",
  "key34": "4j6iyow4bRau6ioimADvLR7LwFQybY9wzUEUAcD8HawcqVEeqqMUNcfYCSpdneBXD48DivPquDxg6SBjsFBYBEfG",
  "key35": "kwK557EwZU9HyqFcpRc7UYDR46N8Ea1ACpiE7zMAu9yWivAZFsXnCTgXcsb2PDNUaUpmFfaZinjbP6LiV7c7F7N",
  "key36": "2kmCqScMxgR4dF12atmX8uojKcQWfnq5LzjhW3cWAMSq4joWuPJnaLYnTQkZjp4amrFFZbQ4Xtn2Rt6dp8d8Cnhz",
  "key37": "2rz2yyRHQwry8TAunajPYpTYsCZMvU1dV9woEepEiuKVsAzZGj4gtVu7ZQPLextJ6TjxjpXvsW7h6y4zxwjtSFsb",
  "key38": "2qB1tGHNsLNXetTD4GyQqepMWuLBWqVQKU3WoNzgCJ7hUxQ3x62QVWBiJuDvRLQr6NfqWg7jP5AKFFj4UzXBh9uR",
  "key39": "5Ak553kAG6qwicyfbESRfpZvRRomknG8oNURXidcVgRfQEHC3NzAwRwy8VacnVSWW4RB6Dpyc4MxbzFkiiv2Sufq",
  "key40": "2YN6aCy9ooMgkPFoqwaXFJ3sFuszRyjWw6215sJZ5iJpM6bg5gmUkesAux4q4P8X8NH4xjEkA5EA4BygVG9jKysy",
  "key41": "3SpJQoA1LCqYmuPHW7Hte5ASXGrjgCTfPw8yCKYJVTHdALYsGwgy5hekHc1zauyaxZuF64vr8kELPy36J3dzs6ND"
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
