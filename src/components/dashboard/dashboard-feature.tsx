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
    "5yLz7oBQbhBR5QVwTBG7Cq2jpcnQbf7DeiZ9BdPEb2boVufG7tr22KMZ2yRHjBTDDHmiAQWFAg9jzgpCpPNWwv6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UumqiRJCxkfmL6Tb4DrjNvWez973aZjoMdCqeZiPKVUPUNtLcEyGVHXfa5JEBytfCczm3wZPYmtj5cuJGRQse24",
  "key1": "3P3d4Hm2NxSq4c72uEXCgivFLbqeiyS7Z12JZfCEqNYmMSbbKCCXWvGXbzgfAfXPf4zp1GeKmYphLtYCb155Zjkv",
  "key2": "5Cw3SSguE5ooS2HCtWFuhdYEGj6thojQxsVEGgCJNyxhHysuzyJNACtDjiT71VEABDSkhCrrbNSpU3etaoBrN968",
  "key3": "Zz2c13MEksE5erEw2qpqHrocExe7hHmz4qWqFVXHofBq5ZbxchxSBfLHxaK1geumTo34jZeLtvTL7npQmmCT7cp",
  "key4": "5vX7eA3ULnYzYaZ2q8wF7EE2qULc2wjj3gbVz9iMVmzfMMVnFrcRzF5s3gYZGVweU6D9xmdzGvifCUzJe5uUfGVu",
  "key5": "5VBXd1Yy2xuTH17f79QDN2TAsjGKecr12ZX6xxtSZaC3xgcSXj8bPbcqdsfxZzF7b9VMhE22YLdJ9diZodyvHNbh",
  "key6": "4ZVaiE3tLs19u6DDRDPnWZkim8W2Zf5pfFgWcoNv94WJqkDeym7fhAKGs1D4Z3SgALyF8JK9PSTqgt8f24dHTwTE",
  "key7": "1PvEmSgb6JaK65JpSmCFDofNjStAygQC4uhHT5SkeD2Zmr1AAMzxo2aEhieR3TpsKkJyp87gvUh9pkTrq6ST1h9",
  "key8": "4ALJYE4dzHKwNedqMqQDZM6cyxj8SAZTFZEHPL7EC6gZUGpc2AjnnnrYcCj3Y6nWijctNDTpfP62K9LiMCSunqsQ",
  "key9": "objcA9qbfUj73Ju5RXQpGehTNQoDnAvSvuMYRvuWwctv7zAsmvSu2dFxgXH7KhN6LyDe7okCvfvBZrDz6NUEpBj",
  "key10": "5yHVk2VmyaEHD6s9XzcKHz984qWAC1tM2gANLiTSG5JS3C4U5jniUBTemxcsmaMLwaozcjzq6udKWrrDVGrmE4VL",
  "key11": "5c8emZcJ6JpdFkTSk8yR5dsqrihZVPuDvtxY5NTuhhZcJ7j68UfSGYwRGtWcwJA9gn44rgBsq5y7an2WgC2xLNju",
  "key12": "3kb1LD5ECbdR8vpPmCJUuSPAyYThJuS7qb1QdR1UGjE7qKon6UqMWji1Tpxyot4QVqWKexbiKCC5kMBnuiXANDjZ",
  "key13": "pCbbEJB8QqC2UENSoJkvxoQVcHTtCxfUtBBVfxdG1vfpcWCUF9VxFMDJZSP4bdE31jXxE7HnxbFjxwU7Bkqmvsi",
  "key14": "2TGBNLzmESeuHzcLaUBGYyfREqsL8rqoPR7x2ynsfUy7rGXrW5cFY2yiGjrbwgWUFVTZys6Z8BjFsVGNaEkWZZWk",
  "key15": "4bMkWMUHg8ebnDASYY6UTM1LZyNssTVMSSApd98n4PsTHPVmH7N35PT7mLBh3txS61qd7WpUsA3MZyKFHiCS8LBX",
  "key16": "3TRNf5ocfmL6ZtM83AJdbyiE6LjhQBYRhBWheP2uAgk3ZbtBbZHV7GYkfVK7SsfbXMBsyq7QAoyhd2R9a8U9mrKC",
  "key17": "vExPM7uayqkSGuf52KCUg7jidwvw7U6zysVbZsY8SPqXrzzuNaXmuamv9g9f135nfchCrW7z43EjD7Yda7dwW4S",
  "key18": "2S9DLThMAdC2ruptL9DZWZZpDbQtvkBba6vrMJFVsRt1UeWfVTUZn3WRVic85F4YjJCrGTHyXkC8Ynozx5JqsQW3",
  "key19": "J6pTS8ZJYtpFsE7p9RzceHuKsCcsjmh9PQd99Yo8v6iGDFb2EyTDQWVWYt4FmsMiKBs25vUz9obSjYVieokwDMJ",
  "key20": "3irW3G29WdvDvhU44i96qCLnxYN5C74WU9QNH3rC2WghyDhMLeBhhd5CoxntiAWzafZJrAQVkUQ7MvgwL1ZJq7wS",
  "key21": "5jbUdXxMeEMV4f5K59ubaw9BovuF54kjbiPobiqodDnDiVgsdBAi6bbUQ1zmxhpTy8ifWebi3najoVFvZUpmAGez",
  "key22": "4y2v2kFxkw41cxBW8EoZSuZfhZGffbAx3thsZX3vLi3U6LsXmQv57jNbS4Kq2amxNJun8yJe3nvnUaNaS3CSDP9w",
  "key23": "3YJXVZF2ZvbdZJdSZLgEhNq1im9NTNNwXwtrzr632tTwVbarhDKbNjLsXCr3bNfcp8Md1iBjv7cynEjAgSPdZwrZ",
  "key24": "4Ghf5C4fQDWXvZv7fiFVg9ucaov2Em4YN2xoZoyy6EF4rcQ6Sdnvq9N7nKn2oc6AnmLJU7fVdwrGEHCsKgUgjqUn",
  "key25": "5S3TRvQ6RKsjBdrfPrtHT4tKFydRV8UAudGbn6DogRiHK1NH3Zc73fJpXbaK9rHT4CsEtMyakTxU1ADGMqvUXTTR",
  "key26": "4hWBp738M7FYoRPXm1MG1NdhS8Rgjo5XrZxwhnj2vMz3NPkbGftSnppU5hm9zyg9tHkiR4mQ1t6UNdVrWJbTc4Y9",
  "key27": "4NkNHpgsznYnTzZpo7PwFipqByJgFxP1B26K4qbRccmHnEuUGsXJgveJPdUz2CPqRta41kjuHtUYQY65AayDaV5U",
  "key28": "465ddAwqnAQx3KQfhVzkimRDcYwzD5FK6uwf73qzmDQ9yjo2LyRxp3e7DvLEaxivunpyzrizBJChZdVoBDWnYWMX",
  "key29": "ciz2LaVp3Na1QKJZ14HQC2Xk3hc58vXXo2FpvPzPF1aPMU3S2kHprNrdFjCyiDNR8ZStPjsG1SfFnFcFUX2D5KP",
  "key30": "29S4nh9RajS2EyiBcb3EA6fTX7arYBC5RfTxM3XHuztCzWHDUvFsquRuTb7WrEUHWMaJ8bugMJZ8EBjLmp5ifCZ9",
  "key31": "mgJkmb1SKRt6faJZKM1NAkbj2XqiJXM6JJXWXd2A4NPmYRk3trM6ashC2cNuJBqBHz5GteQCAfbsZUCa3LXMNvD",
  "key32": "6592R7T6hcxtp6WGEpZQ7fh7mtWJBHiJoURJajiXycaaWq3dPne5qk2iifoADbK7vhpQ4A11y3qDMbcMXesj6qEW",
  "key33": "4179GJx9PYuh7nxjnnT5dWvhR66u3ipscQgW8vwoS9k5osnhAu1Ch6bwZ6p3qbCF1tHMEeFCpLM9AhF6iGiK6UZD",
  "key34": "5YsWVZ2FmxFhmgfhRGFvyiNQ96ZEaphz7rmtCLtJhz89jFgwkWbcr5PFZCSuV2jVuFgpEchS4Wbb2j51L41U5XA8",
  "key35": "2BBAd8Yy84jM4x76pjiSG6RH4ot2RhvCQRPFfcbY5sLyys9W33CwGME7gbxKY6CeG1aBowFCveShaD86GiBoTaNP",
  "key36": "452qcp15y8XfsKVg79ksYi6e3pNTACoKKbiiZ832dBiitmWDfCvWWg1KjKvmbREYmjPcBFjnH4o9gHUPPmQYVQ61",
  "key37": "22nTsLRuQFeSDDTnjjXviaFaTMEy2b3FULozGkEKUQXjx7bYyWQuGVRKzRwAXvZSBapzjkQPnM9otPq5K6MBuT1j",
  "key38": "2rHfwJAcVa9u1KLWM2n1GTggt8pMQ3rG71dDvzHCM6KD7sz2mUEzHjcXskqnBgEHo63vUbNJqyWrsg4ZNi8zawzV",
  "key39": "2yJaZcJhB5LqqNrm9FXApi7WNXpsV1BMwWnYUccJHGBxArSPEWp5XXmgtSpniGzc3rW2tjzuxXdfkktho7rxEhmN"
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
