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
    "5tZNjeT8aqscGmmmB5773KwFEHdZZWkg7G5YEkpbKqeHW2WAW7o4CmEDcFRy9E3k8HDzgiiVb7yZFUj98g4neB2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DjQN32hJiZpvFMioNCCg36W3VChkQHjmPwtR8KrYtakpj1V4TcEG6WEsVunSjwQpP2n6JXkrGzaAZMs5qpWDWo4",
  "key1": "hFy3dVyW58gkAd4JQstc8J6i8mkFS3VdcQ9yV3iqNiPWGFHXZztF7crFP7euss6dPLS3FmAditD1NsrRQZ5sZ6U",
  "key2": "4gQkfskvaT6NdtWvm8YQiNgSyTtDh3YM7nxXXz6NSL4Cy3urZCfKXvH8o5ATNShoxBtEYhWs9V7DkJeD6nWyEmR5",
  "key3": "2K8dTdD1DhwM9teVcMR8XgzAJRQ13QqA9i488pr7PyJyR8E18D4kXuGj7NgbMJVUs2Pcq4SoDTzD3PavmwANqMDe",
  "key4": "pFVNLMNGi3NLJWNL2ErQNGKoMsiDTFYbztKWaWq7k1KJm46mXfPBjHUUxgySZ8tuQgQaJRyMYKWxbrAhZQXYYdU",
  "key5": "3ARkgs386hXNSCa1UfDWxafqS8Jpi4sZteAxPyRLGAg9jab4DkDbzTRsjTrFTFZ8PwF5CCdrkJCjiYPJSag7mjkL",
  "key6": "5YfZyizeK45rjW2wze8B8j6HqbMxaa8oPFR7MTtBW7K1y3GTwg1wxCJtSYY4nZ81H6yYcsmWJAs1ZRsYFY73pu8Z",
  "key7": "5KdFTQSSHiZauwqSyMN6UuJHA7oXptNmfFZNWQxnWehGJQBTenFdoh131kZnDW2VJE1jUuV6MyoVuTLCx7LwxeBa",
  "key8": "2g4JJKeiKSE4Fo2MwU5LN9BZPdaZn7TQvujA76ZbYF7bM1ziYXtTUSQTEZnYjqthiBx4jRLkhphYxX441Yewcajg",
  "key9": "59NRRv3BVP1gQAz26kPzQVE6VqvqvwsThs91wjW5885N5XqKyPzrvGF2kWaWt1QPcnE18sk9J9TV1UxR8qpRQzhh",
  "key10": "3AUqe4FpkiYmEPV66uziyXKJUJVjVTj6WiLnAaKDAJBWf8g6spYAeuj2F8qttSnGRJ8AUEaasqQnNvoYEb17UBWr",
  "key11": "63CMkFbzo2hExJC1zBmXdkzHWhCeueoAioPshZQxGbDFAu6nfomDq6JvjBuxWHdVD8MqtZKStZvbc73PpVNLmoY7",
  "key12": "5eSFzHtHgAiN4NKPRfv6NcnL8zaDRLuMt6CsXtUKjDX2jDBNq2trtf8VYyEWhe6VDHWgJoCfc95BWbUNHzRbDWh2",
  "key13": "4dhfXkx69EBMWkRfqUTNLkGSSSpFyrCp3o81NS84Zn9RiLNNWp5cVbfruYGS2CRg7C3ZT4FfSZ98uZm4DswyXUDW",
  "key14": "5ThTBbFHb6PQNzGmeq5yRfMpR96hbvnWvnshdVd5GnbVJqWiCR5yoM5efGKMLSBUZVvqdC46fW9JisdD3uuMBcEY",
  "key15": "5sYAGfSH2ubNxsXezEpnmHNYCF7H6uLSqyMume3syLacyHapA7EpSM2FyCp7PViBsbcVkMMvWLPzmkLuazgDhz88",
  "key16": "4HJ1WDEDQrABN3GSqpqmaRFG8JVM7eYYCjHmhSB83TRJLDy24sHzL36shoWjszWWBhKWs5SA3UHg5qQDjiHbp9C9",
  "key17": "61MSaxs37e1qDT5dGtXn8cQcauK2dfGuYnGHpD88KW6VwbDUzpojgcrtiCbfji5gS4zoUxy3CpZn7KXoYYwfCuu1",
  "key18": "2JNrKMAHmymWXbGzPxA5mHmT2FiXejL3M7h782gdaPhrWQtdTdirX9zWAG4VeJvFc7jxjFKuxHAM7378UNL3yYQ6",
  "key19": "3GKpUYKHSheni63Bq4jJU55FpnWxtVwmXbGSbsD4d7hgjGwMHixhgb1dmWUY73NKwKn4bvJJYbtQ9ZEmgU2JUnTA",
  "key20": "Sk2BhYTuUSNT5raBkqrsPSEbwbF5Qu2YsrETnkZMpHaFvYzf1mBz55RohfFDSAFsQfDgTvZVoCA6WXqqVATWWbR",
  "key21": "5TQdVRHgjjt4TdiuSTmjtjoehFnVeKxbfX8v7871YeCNJrLG9LevVqrD2tcQXcRJFcC8LDBJQE2V2ETNYgbEnuaS",
  "key22": "4Cw2JrsieNVA84xYxnPsQGETLiSc7u1vffPYLYXVY2vLeXhK2Uw1EM4Ccprsag5b2JEqPFjRL5Ryur6Ro6m46ABW",
  "key23": "5fyQDWm6PYoZbwN9AtcisehwpsGzyqsVBd3Kz8GnEbvx3Gk5xbw7q2c8urZpYb2arKnHJrEP8hN53tzjWJH7CKAL",
  "key24": "3uN2HHNBG7SGHW2mNAAqi8y9fdmxYvAXqevteHUbXxarsXSXSPTgish5hcPCY5pu42z2hWdLHaWzXcgoG3uZCJKt",
  "key25": "4BvsXEYN6A1CrLAtnhLNjt5UzePXP2w5fX3ik7XsdeLdYgMRTdfSBi9MNxqhrZER7jLEvtFAvkrGD2GfxZ47ZghJ",
  "key26": "qVZQohUaFX1CxF35u3fbukbV6raAdN6MbpVWsDtSZ8uKaFFnJjTEG2JnV4afDz5v3YgjaqsnnLsC4vzmvv51wmg",
  "key27": "4n5PjAyS83Xf2GLu33PYqMv8ZGqdQgE26KzpEZosKg59YbK6CiWx6mjcTqBHtDc5gH43kD7Ao83XcXUhzsDz5Ent",
  "key28": "2kzzv2aQRAq19BSVeWfoTtQHEJanBPREntbZEnxPYsYTkScw9HPuRLvNwZXH1jwFkrLAsoLMNL5QLHVGekJLocCy",
  "key29": "FdNJrLtuNxe8HZ8bBjkD5covPQGotQXBEBG5UyhmV8fkdzeFgQEWfnVNSFpb1PxG5ETKAZrd5RjubFHLBV2Z9SA",
  "key30": "WbENpX4dRhNDGdxT3C1s5R2pb541HSEUtSUm56VaCHKscM8z6CgKragp7uoKnfFmfbRXjMyh7r2k4vJYMr72bCY",
  "key31": "5NNFQB8oS22PcpLVcYiZ6UT48xuonDhWTUpa5yqHZ9nU9e3nApw9uLYzjGdRTH1BkgUoc7of5XJ61urEhuaLzRLX",
  "key32": "5HBmhZS6PF7f6mu3yiATvrXQH7wjkAHZwD7GkwM4791Fni77e5HoacEda5wZBAKQZE8SRnKDba5Y9tHRCx1Whz5U",
  "key33": "iP4HeVmEXexkaN53Wd6ptwEg7hP9mztG5t4UYYQ2VMoLftwHh9wJPFEeHJhcXw2AGuGqT3txe75xMxoMhaDMRBq",
  "key34": "3USMwez4mXUxYQLAEQBA7v26dqXexNxeEijoqDfdEzX2mtXFLfuUWDyDDcoxNhxLTgM576RJZEKqLeMY45figh6n",
  "key35": "XyEqmRoL9NG83ASt8yQtMqvBPQyYJKghSftSfjxVTxAStXukWFE1n1gDp6av1qLaDTZx31KTWDZuUmGB4y5vk4U",
  "key36": "5k26HzsvKFf5f9ipPQBF5o1wYigaTQ6zmaYrqcPgntrjR8iS87oc4HLM43RtvH9BRDAVcCA41HZtg7yLg6nDzChJ",
  "key37": "LspedQEgAWiFzGckHqhWFwNfJ5LGXKTNbVWXFMtdZ8bv96c5eXKcJWNydkB4ZtPNfHyEtAVifk4gbXt54CEQdHK",
  "key38": "2jwdKKR57WTfiUHcsKzxzt8ZwRek9NnKttZ5dyK8mpeXPki1G9Q9UA1pZuAunW2Tw4oVjCwbNLRFwNLFBzpikWfh",
  "key39": "4fcCQ4vQmMXMQk3ctGfSrqrhR4AcrohfdAXXFERMkopNVbvseeU6DZtwwuyft41a2A1vvRbrB16LHFmJohfUzkre",
  "key40": "4FSqHrCPiVEKfF6rp2oPME8zHk2Q6WYzRGKSCrgP1Qv9PAj3SnSKpgwow9CgujczGVx95EGTws8DzTQw55GUkSeJ"
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
