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
    "xJ9sx5htKFFfEkxSZvjbh2HNgf82Pb1A3huDVSTmcB397wL4zoR4AGMUgEZzjLtpM1P6iwmVG6bdy13GmdgGTzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gT3ckAs1ggTvkBSTvQXZxjrrx5RVUpbL9yU5PULCxBXjPF4gmpKLhB5CY5Xqzk3ADpVGiMmnKUvLGMUQkQs4wyg",
  "key1": "zo9FezsR9ZNEy4DVGU1qprv963p7qdxHRyaeB8mpzDDqc3qwEzT6o9zhi1vQYh2yHAVs3FBHw2Gq4fEJvp1JKQg",
  "key2": "3GZ4z2yiHpWkywZzNNTYW5VkwcWNmUWrY1aLoXjeDtp7VrsEo67qSoM45zoUaTeTjqz6kkYw1UKNiLYh6B7cYL56",
  "key3": "JNT6EQ42qsrK4dj3BBbTyjRaP9JDJ8dKQ96Q4RuAiYnyd8LthFNrxN5LHfghJF89TSKuKxT5XyQvcKWqLf3WogH",
  "key4": "4gEKhHVzhVEkfpy47wj2eqKMRpJsKA6u3hPeG6To3Dk4aMUtbYja8cHQHYfxYC1qNd9ZVEMoVeExM5vuQC7UUatp",
  "key5": "3VhyjK5hAQkxcVVumpPvGHsKCuWSUhoqv9orQyNJgiF6iAsEjHgn2uBkWaB4eSsbGFKayuBHfa5UWxnktX4qVEqz",
  "key6": "WNbSUaThAjDbruFuwhHF519ePQ9NLNgzDAMsaBa1pb4NAxkY2vDM64hApgd7mYJuvGot1BWWuocbJHM2yjiTUpc",
  "key7": "65PNRbbDat11hYsoPAbNBpFZCB8bdgKAP9HCFQnoPTJ3VtTiZtzGGxXnfwM687fAkbqWeaJKubnhLmEEgZUv8kKg",
  "key8": "4VJ9Y7WE7SXhnQu6LAuTaGQubZDCgGJNCS3KDQDgo6PE6KwSoQVyCqVgab5PLGUSKyMryrLKTpCLZm7gidJgKi4V",
  "key9": "37cZJ55wqjZr9WJ5X7LP2k6e9CWU7RSy7BbYY8w7AdZHft1fw4J1tqtt3MCzGFM8zfpHiFHMLH5uvvuaaN629V6k",
  "key10": "3fTa5pQ8bDrmhGwN68hTZLqrUwKGWcoYKRPG88VcazkhzrjDjThojyh1nMnq8c2TobgddCEa2Ra8xLkZbA9jyT5R",
  "key11": "3VE7j88T11DWhQg11vQ7AstQm2xgwJ9MAxdgXVukqJyBZxKKdkL2YZnEnrntLBvyg9Qw85Cn31EG6fPmBJNTaDC2",
  "key12": "jfHqRa3rrDVy9ao4ErwfL6TENFs4mewKJgcbUELowXe1ffdNao83Fc5QRxuqw5rVvTAAfYg9hQhXX82usUpo6z4",
  "key13": "pUg9KCCH7Ex7uEVF8ubfKiAydNbYdi1dgmvD1VdGpBs7Fn1DX6N6c2VirBhJJrQ2r8EWgdjhB73WnZnbSvhiL1M",
  "key14": "jb4pba1Edq9NgwYnMZ9Mcdhsvk9oQqL1xxZMZFGp4eEebPBtLzVUKx8nbhBEYbYvLwRSXGJxe4b639PdvUiAmWD",
  "key15": "2thJCNt5GhqX55bwYTrNEm9zGtG8so89Wg3DKzRNnL5g8GCdLKcbEWuoQ6Fz7KeWH5vM91beRXkqkX3dqRyPRy54",
  "key16": "3DuEmbLUvxw4TGBiAspCt9bM18E7Hhnqo1dbEEMrCSNUqpPHwbhxx6HW5ygc2MAHwpiMT7YHhQ29gmpoTDNjDVdY",
  "key17": "2RYkbynY5VQcJdQGWszWu1ckf5rzJwdRiuqfdwGfmKvbcii4iWQtT2PFcHy3tnHrFByxw8KsPMCuf8rZyFvHga5L",
  "key18": "3npjc28STEtKd5uinNYX6mjp5tK2fRqgBg2nVRS1Tat3G4E3D9izTN3tyMjEXt3etKjApi3ChL4TprtpAwZ8iiqV",
  "key19": "iPhWjLBfTRyBW3jw6j9dVF5W45GkbfXKraRxDgioyxM3UprQp6yzwa3WS8jw4Phq2aZ8bbwoBU8UA2ey8XPoQBe",
  "key20": "4Q5vHQiKd9PWdsnzV2FsTrgQyx98yNYcpsGCyKaGJPZc4258C2j5EXcug678n1MEjUTJAPUmcF5PKxUgHn3WiXDd",
  "key21": "5Aji9xW1RhpxL1UeLdaZMZQdvY2nQ1HJjPVaFGg5q2aXgp7e7oK7i4KTz32xXzN9RzMtG47pSJ4fXSVF6Ur6WvhU",
  "key22": "5JVKRDNK4brp2r7pRTCj2piL9eHZNB2846E36TdLJ58cEZJmLs8qwazKzouv8KFqYnRsVoosXXKufgtcs6WNKcQK",
  "key23": "4hK5MRz3E3RmXNmABzNyQA3EGyzncTeKrLRLNx3FqSbWJSLr4GkPRMZGJwViuuakNrdT6jGKF68ZRwGwTUY3Pgm6",
  "key24": "3EiJvu87kSYRiW4cscmdZDXrcDfzXuabxKKpSWCpEJ3Gtu9NUQsQWRZkzhemZhfFCiDqmdGwcFyRYKyhvbPpFMUs",
  "key25": "FCGzHCUE6GJd2MdRns2UjLgowCZ22QSaumLzdizgU1snKbCmR1WGag4ZwffHuk6sFnfABp2RNtqFqJme1XYUWPv",
  "key26": "4GkZoqZRnuXn5g3JctH7VjBNWvNLBneNEDGsgJgY92CunCWRY2Mi5CxsDn8AUucxqMzQPMkdtPj5svzB5UG4ksiE",
  "key27": "5U6BMrYdFHJqa5H9Q253CpG1ougrt6DkVWGMuyx5z7kz1SADwwdVKfcFHYMR85igxWtcXYxUdM51xzpjdpLvnZ5b",
  "key28": "47zdKeNT3vadA9DravvHfUKyCua6ExgVm5jvyVUvUYSSossAzyNQnaQAuP5BCt2iaWBHaGtaAazLCFJTR9Sbc4gH",
  "key29": "pemVHpv6mDFMkELLjGchhXUPPmCKLeKPUD3iPeoCCi4GMngFXicsfYkxRcUJMURHzUNf1UWavnJABzfZUSymsnV",
  "key30": "8UF5sUdy4eZWP9jgRFW7mimHjdaNwPnhVjjY33aud59PZ98j1PyyYkdggAUNbTcrYxWn1FVHVkxG8oj67peRV7Y",
  "key31": "3hZeBaa35TP6ynwBx7DKKh3ndnnNBUwuts1hPgWYmqwTpQLjFgepMmbyAWXazYh2YkHzpbWRHuHpWeqh2D4y1CFE",
  "key32": "BEhLfUE7YpCh7ZGS6HQNLj5S3n2bthAiqyfM9AGgNoYMTudUxEChf8EwGaRXKyrhfT1NsbBMuq8pbfPL3zqfCgk"
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
