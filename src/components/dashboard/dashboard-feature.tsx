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
    "2Nd3mhBPKm6rVqAzsFrtjwSJGNE3AdCeSUEYwqKEgHuQKXrkSfyrHtp2evajZfm5DRhnXE4AsPDA7aybFh3YYG3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "612VTfMY5SMLjdR7UK1uifz8GJ1d9T9AsCMnKVrk2xPpcKZ4qMnuiHH9RuPxgfCRAwMQ2DYzoNwZ1Yf4TdCUzU2L",
  "key1": "24p6FdgK891Mmyy9w4gtrwqBfYgjSkvVzjbwqDTgjL7MX3FrMSM4wS1GjR2efMPEvNeAFpecLVFhq9y36SkRUxbi",
  "key2": "3EFns1mtCzQNvdFD4kh5QQX6JnyTASHqR6KsHuzXXDH4i2cgckF5KgKcYJVbXb5iSaSaahRABpMDkHskqNzkUoDu",
  "key3": "npgsQxYLDCHTBzvLVC3ZEK5SowUMvNKgaH6KKhCKXE4XifHX3t4dhAG1YHgdXz6JSWM6eT4CAGFsM3dHy3ngF9a",
  "key4": "3CXrxBAx3mFfSLtmFkzkNMqXVFi6UgQ3smeSKj3PMQfFuL7iGg8UbaGXVpeGpoKW6d4iEvF9Vb6sn7ut3Jg1oTsH",
  "key5": "C1MkNNfHzkGU3LaYFoCBNK9Fpoihx6Xs1aiaNgT4BNWrBUCaykpQRPbGSQpjZ1FKgpay7iGP84GN8ztcKNgaRYR",
  "key6": "2UmUefEwYgTZfCVzNjnCsaX1PxXsB7FQ5a2MsqcBhHR6tsBqMAToM3CzR3JELseZ2UXPqXdcEqmRoVqhDhfAzCLh",
  "key7": "2jFSRH8Xdm228yRUmvQ1TUoASS6715tf6HQZBsBnsh4iWVVgRffgRjDPXUQzVy1NZWqtwh7WVhTFvfd4kPwotEyA",
  "key8": "2JTSs7f6xh9bEQQBfKX5BGVus3V5NVEVWPLik3ETxBqmZy4SkX2t4VDunm8utDWwz8CMJGZpZUHzcCnN7cjF2bi9",
  "key9": "349EXg9VfjtcB6MypXeNWejDDnQHwjjZ63w8iwEaB5KcLekEwW4QcwqLHLxVCyMDW7RDmXwHEFcxnAJyuhVQg1L8",
  "key10": "deoxy7znGCqWS7AB7f8FwAGe5dwkuyKDRD2nq16u7PiG6q7nYV4SsQ3VYojfTFzqcsavbvFHoUbRn3Xw9F5zrWF",
  "key11": "4R3jcsztEbkhgq6i2761jF6dBK1EpKdSr2Xcxdq1QafLzkA3YfyPHaDn957wTXACb4FgWYU2izcTKZqFDfeUziB2",
  "key12": "2Wgd8kJZJa3yumGeMKhhXmiopsAYB9q3rWgWJnMFxeFoznwi3wsRLmxMppsi1gwh8SC71Nf3NAk2JM4Kqp3FxtNc",
  "key13": "34cXwdUb9zSwnGomMUDE5hJWQQcXQVhzK6k7RyTMWgDQgGUL4MU5nqDhcCmzWk8LKar3ud3ytT8euG6XcnfhEfxj",
  "key14": "S8DuVbX5wFgReCULocB3xSp91X1Th3z3yGDutXmrGfDTNCmuENEU4RuXcGehdjD6auv7WWfDWGcBwrW2t79JCPz",
  "key15": "63xKZHHwPZ2bxFcEYs4aqTF6ic81gv6M9iGPjuFpUgyEzi1vStpEv9orgsi1UrsXNM5XQh6mBgosUnGu4FcJtfF4",
  "key16": "2rzpudhVGvmnqV5SctpWJFShW9NhwqwsSTRGzbKp8uTBiEz2iVUPY76VN4yQQrKSkCEkdr4do2y3YZf5W4t7iKsE",
  "key17": "4asFoKxsMVeziHjQQje9EBu4RDyy4e26f8vYmJ7S3NM7NM1frLnHKADphYrrjTpyzz7vuf2VbBU33EUyuHwcfWTi",
  "key18": "5GXpXqnuJKj98uBxK8iuX2kPebSPVtnjbeAifk2g6fa6KVDaxk6HYHiHUN8Vg6iKbdwqtoikW9LPrZyrcrsHPm8o",
  "key19": "3WLeDhmHrxfx5SeCXe5rWfeAJxXRCRNAxbpf3zN86vAuntkmcBF1JCrYA9zcNcJj8mVD7vQcyX7gJ7rJHUG56yW8",
  "key20": "4pgYsckhdZcvtsTS1W5qhojNB1X5DMj7aLAGFYAYFNEuGjwW72bJmkq2eEXGaCdY9wzCdefvE29Ue6wZDxAJfd4J",
  "key21": "4Pz5eBje1WgT4fuAoknxRTTYgHXmmscLrcMjy75uvhuVEuzLi9yb8S1ctBdkcM6wbDUh9x5tvfcDKaRBWVQN22mc",
  "key22": "3LMuEVHa77yeZX9TvLvL1EM43m8vUmFmaANUW2xdJVS1JkYdvsjKZ16SNgHs1DXLQmaXTQd3WoH83cspruvexAUy",
  "key23": "2s3QvpmJ49NaU1Gjhs3prtcwifxehwdQJ5BwkTfeLbAziN4CLyLMe3oKxaBRvNkXZZcBcgRW4ad798Pro6iUe2tq",
  "key24": "4iTfTrvCDwV9cQWVP6LdtNy2Ri7HqUj9Q6kekeRoumz6SgJXGfpNNvUW8YKiPzJ1Qn1eu1Pm2FSgrXDtmkdnKFqN",
  "key25": "5mRoxN78mvUcpX2s2iXDfoV7gALjBUMzM28rc9ZDaZo8Kg8rjFS1wNYN3u4BE1BhvUGKSDJ35cvh3LYfws3GpJBW",
  "key26": "4iAK886tQwNHygdCMjYkRYFRMZAKonavnR1ibM7PG2bvA21zrTEA2E9sQJLWn5p4cpQKVvzMixQAmBQmeYTeA7S4",
  "key27": "2VXYhbheWXNBytWa9wFugaWub8qmzBpj1XJVk6qCpRcpybYNTJWFckecHex6bMT5XhzCYGgYK6CtcuojNc5XUdqh",
  "key28": "61kExgbPHsgquCJKsNnkZjBLtUHkzAiaJ8ouSFh6Sty66A4S2yW2GGv8u1H78cwFV4HSAce5mtdUj59z2J6NZ6ST",
  "key29": "5RbVy9kubkKE9HQiZhsZY4dsaJpgmVpKGfekwt7ELv49de1WaMFj1j3RxpibLAp21WLmZsSQXHi8Z9iiFKpnwFxH",
  "key30": "3TKSDWUwYNmtKDbLbVyasRavaqGXsntfgJVsT7tg15vG7qKjg8uphcHzg6bE4CmcXMXeLvcj9Ja3gQAPEDtQdLLB",
  "key31": "4JZvm8Kto4oa4vhegDJMqYXYPWYrCmg6AhNHp8rJSB6LeX4phqMtYnvL7tsyG5fDFzzUK1nr5LmKivJjvDjMekPe",
  "key32": "41UwEZN8mYpSTRpxaNYsVFcfzp664P6B9XwFxUPJewuXSNSfWKg36RRG11kcXviZVgJMokgwWZhbky9k4Zg4CT2D",
  "key33": "52Qk5kbGQ6F6WK588ZJvq1UjkKLMSzghrWvXxj1rgrB1b6pF8dUa9zVja6AWdVMfD6kc9a2cAvegiuptUCfJX917",
  "key34": "YxzBnecPSo6UJmFz5pTNb9RimfQejMC3WfC1JsopELgrwEpBdbKSpxBMQdh2qbxBh9DNbTqidDWmyKcnvkNf8Eg",
  "key35": "67PmPQdw8FnfuNgB8eQvNtZjcbXsh8uE52C5KrJJjeTCYcutagnGEsDZcJPjrFjoM1eTk661Lp5CKL9nTXDLBG2e",
  "key36": "2CeJBG82RRsTiKmE1ET3ETySMsxGBPt287YwryhfWCvAt68pgZUCr53J1XdiHvy6YmyR5vYk6uiE2tXshm7vQhwJ",
  "key37": "5D9RAMcjjx5Ej1hrNvCf7HWRhjRBaVmQc5HRpaj4Eog1aDS9TqPvc37jc2NufX7AtFgvxmkk8HqmzZJdTe6WpoDS",
  "key38": "hqJBKYoBeBFW8CoCJxaEQ6WJTqAbqVwAzHrhW2kdf5bkU7YFpUDSNGQzujyQ873av2F8v29RYbGrse82GEyWb5u",
  "key39": "3sJwwCX3Fg1Qwu9Mrni4Y5gM2fLkVy69AHN6BhC3oRbpHeKaDQ8fzNQczMEjHY9pCpxSYbuepuQsNT6WgZTYvJFc",
  "key40": "5Ht7pLsccsZ86oLEtTY49ekKhAFFYkasidHXqH6Ts4kPtKDMzFrpaT1g5TBKbNBYGXyZaC9TCPM4G2CswCDgn3by",
  "key41": "5QkMFEKKjDEw8nT6atwSAfMGG7SpqX47ZKsa78xddQH923kZrafnLFbsvQbpo8ojwg815EB5X9xESAyp53UWozN9",
  "key42": "4xsdksbjnG3if8Z6gQGcHtUW5PSgQv6fswGPPifHgERQjDJjfi4wu5BYku1sMkFJMS33cqZokvAvt9NEWVSb65w6"
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
