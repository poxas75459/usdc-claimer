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
    "4FVYH5EwytCh4e9jrVMDjeD7MBK3ejr5CHr8LQX7LRELp8eD4Jo83YuKfyPZQpDXRNTnfTS7WQLvf6DPEppUu9rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fhrgvGVYMwASqQZWU6yiazjiLvHvq2DXfF7nnvn1FeVudJHogmXhU1zFbaCscMqNr2RScBJ5vfSndcFpNCJyLD7",
  "key1": "YJLMqGCpfroe1hPCqGEUwAMNtnMscB4Et3Y8qYAc4qvRNxm8ESoUViABq6tLcm4h4rXKMLUX8hoTeeUpMAggsQ8",
  "key2": "67jsSvcCcWyNCsrqLv8QYnDnavewHZSofnW1NqFeuckBgukk68FRV2J3Z4tg8tGhjHxB3NuKJAknjoPr4Poft3dy",
  "key3": "EC2jXRoEnrfqg8FrDrVGpqpL5pfM4P2tHHsEzLkZWqGUt7mvx3NnfpJ1QXaC6kjN552D7npZcBfxEVHEYGrr7e6",
  "key4": "3Hbr1uJH6BvHZmy5qLdYVxfzpoGEtgRF27GQ3CfNujKJXV3CW5UdNSgby2E1cHtNfZs64zQuTUh8g8coU4CufdhX",
  "key5": "2kxrVdHHy8ZSFRL7ieU1nEKAMYTrWm2A86Yw3HfkC6XwqqWzguL5HoXLBEES5dN8vtaNXYuHSGswKo7FhKKkZMau",
  "key6": "4sbFM333LoJEuTcB39Dbie7GwpCXd8J9WggLFPTZthkrGQXVjNC9UQy3jtVdpNxDKbw3JmWAjtYULrGv6DhUrWk4",
  "key7": "3xhvp4zmfCYXn5KvTEY2e3SPdW3dEgebAURQwLAbxzuCT8xBHgXZ4yrm5CxSqyeAZYpdqmNWVTPRkyRKjmZJi8aV",
  "key8": "q8pf5SHeD4W41JKEgHJrKca3nVcse8ySzGQXsajQx8GYebcVGtmt58Ru2SzyKhCg8AyPi4B76bzeMr6KiTkcaj6",
  "key9": "3YsX1XYYHLoPzPH4N5yhT4D6eRpH4DDjsJxNhtX1a4zxFmihewBQdduHvqqWXp7DMtZjFJg6J7p9KQDdhHBMmmRu",
  "key10": "23rsdQzjqHKUbvyDbcSGk9fau3bEwZgWnedd91JBmQmF4VC3ffnovBMSYTM5hUWEF9eoFJdeVAUL2dw4Sirsq1Hy",
  "key11": "2adRz4GbHGpFaDaLja6Zw4RE81853TuWEET1hLJKZF9Ch4bw8BMBjqTun55KCV2yjxmXS8GaPnFcuCEtpmJyaGAV",
  "key12": "kbsFm5ZD5C7PzetCSX4yvjpEUP9ZrQ7VFsN3aBq9eyJorVeZjdgWZ2LvKPsjLNi7fyoHagYfVTS2t4knyX1AY9Q",
  "key13": "4Y7AmXH9jyWe5usSSBSYieVgtX2jFXKjTBsKHRt918Y6jfRNWmuh7Pp79gbv22oD4GLbcC47WViFGocbNtPT4Jf4",
  "key14": "2apRWGk8LHU4oaygFh2asmWVTqpSgtUY9CTFySTTURHZP8SZiNqCW92xckLPjr2zkyGNXf2AoojA6dHgdjuqBeVb",
  "key15": "56BYYQ9T3vMbYE4kFMNuWaFGuFi8SQfAZ73QafnLK9ZovJo7gfiipEpVe5u26iD6pEaUte5kdse6Lmh1CiTszcuT",
  "key16": "4EuZX1zxQRAzhBqrCySdaExdPk5oErWj6wZWV91WHZW7e8w1bSdfHqRqtiLrvr41vfE2NjK4jHXsbzSM1S3cWGhz",
  "key17": "2KLmNSr8kTe6LDkkWMkCrqumbBvatJqY2SoeSpuDi1JBAEXfLZrJkuphisBfyX45aF7KEaPUwG4RiVQLg1opC86m",
  "key18": "5tSGgie9TC6MVcb6AhZREpLQeWTeGm24rEf1DtZyZDhUK55cXzLdmghLVQEw43k6WR44HAEWBLm1JWZL3J2DNuXy",
  "key19": "4jL4Dr8JoVLmYtK53aZaDuBYJxep4C3Gv4v3G18rXpT3pSyS8DKyXi7CRjcPEyfBuxmXDKaqnKrbUUJ18itsHDtT",
  "key20": "2Akwcfg5rX8VH5oL598UXRH2NarFrFvErJGJKyZZ2aTH5jbW9hb1V8RvA8CmJCLSkWtn2Pod9PB6QZH3aewNXX9f",
  "key21": "4kiMXeWRbG3ec25KPYCNTiFHTBZ5NkwM5isrJad4hy2rkSNEj5c3MSJaiofmQUxHJaMTbgfZv247mRcHqk2hbemN",
  "key22": "DRMXURnGuZRfprW41qmjNFMhXnujbyFAiG3cnPua71fneD5fCXKaHpEiymzm3JATxz5bicF1so28Hgsm1NTt94Q",
  "key23": "2r8ivjq4SZjhDNaBuW23AGyvCFT7oysBz4dK3gNxEKvjN2kDV7YmsgoBmJWRQbxuyE5TJePG8r3yrZcuNWg1YA1q",
  "key24": "f5PKABQTM1QBoudB2hyMeWDJUb4cesMzBv73WqZ2d8y3tq6cK2Li6x2Vcrke5WCptkYU4Fi7aqKFAzjvx3ZRmz2",
  "key25": "4qGNvGTbH5wWbdYAfUD7RZ67SWA49YVAv6uoGp6ppYp43s4iYhJtr6mjkSEsCtt4XpjPCjSSXVv7HantNApYymsr",
  "key26": "5HKzeLyXqU5eZ6pYMCq2U2ieRPzk7BCvWRbvjY3bTf9VTf1W2qicxVtDFjhfUbWyNmgeJVSc4gd5YVyetVSA7RyM",
  "key27": "3zyxo13ZxTRBfDiyZCwsC5NQ1LaGLqaV8n5btCNkDPGfJm7QakauNZysLMxNjyJQT27pPP5NtAEL2EMnBCpQ7u8s",
  "key28": "Sth6pkTxSKPaY7aK8NRXx21FYTvWJjveNPov85feVJ7WiM3Dfmqa2reHjMZD2LFwXY3kFYyfYrR8Yg4d4SUZKxn",
  "key29": "5txgEvg9dKjNcnBy72o5gTS3D1ho92M53Y3RWqasRc2EXKiWAtEVqfqkrz8CED6khge1f6wpbA1MZCYhvrJAWBQt",
  "key30": "iLeQsZRnb73YKdnBBuvadaFzNUfnua6sbMdwnT4F5mrkZB3L7dZTLZ1J4U7qJ36tfAbXKMYg3pjHPiCaBJouSgq",
  "key31": "63fWkzq9k7M2xb63ZxacVkLWNmDAePabDL4j2DGCWQa37urWvtphyMzxGN716keou7x6L6bhmecHBcXhDDGf6NS6",
  "key32": "4m1iZdg9XKHSWko6CjEai6QDm8icvEdNayDa341LeGv7QhoYhJ3gMbRnvScbMtomD1uwHfcTqt4tmv5Y7HyWy9h6",
  "key33": "2ivxPjn5RsjMiwjSTPkT1xNJzLWV67oM8aD2bjX3jtS4h4MUoCVrtE1udNDFnU5KwpxRPUkEbjVotdH2y1rCAjn9",
  "key34": "5jGoQzAJvFSoUS8ZJLLsZGA7ScT4FFXi6DpJhzJwymed87eMokMHqMbVyTFRWubJ5SFLPad74HtPuhxuFdjzvrqE",
  "key35": "5FDswFB2dSGYr6AySDf6Aa9NXQxqyrJFSa9YdbwjtCd27Q48w7AN7VDwvdvvugPTaJ4ohG17mi5XpUbwmmeM5PDS"
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
