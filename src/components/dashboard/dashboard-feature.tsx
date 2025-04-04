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
    "2x9mb2zn7jP7cqpH4q9jVrAgdZ8BJ5xXmGEDMHL22Y42J6LopNBaoRTsgyQc4ZDW7wYpeUwuqnidNcnP12UcH7sV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gJJMF1FkG2afDV6dErEPJtLEK7njeaEGVrVr4pSTNbyxzVW4pkZ3h6dYmYDy6NqwU6u97uFyVQN9XU9meQ6jk1G",
  "key1": "4EqDDnsibnVTTM1g172mrC4CEfdEFbwp5LoH24yMLk7ag876rXXmvAXxzeuNScoUFWqbdFehdhhv6v3tixxdhpyM",
  "key2": "2HVQqxEEJTt6RsK7MA7X6JaYztpLZvpZKnLgfgLnTVsSLdCL5w7f9cGyrcXC72A4mBkA6TZwCk1nnHKdbWiwu69n",
  "key3": "4VQVqyUPsD3Dd7w41KjZE3i4mNiHHz93K6ziabjM79LjABBTkbwnWQm7p6CWtrgbXVSBdQAZcLdmZp6jv6jx9s2k",
  "key4": "2UrnsnHwh1Bfgo8Cbcr7puADSgFGeSEV1oqFv75M9UyBeMbruZrLCKjpMCMXQ9AMWCqtxgL9caQVvzbYfxsY4hK4",
  "key5": "5c2bFh1g4b5z3UtQjguCavdRmf1b2JdFveSQWTHB5iaHvkBbpsdjBbEwRyEPdPSGkvk2MWUVXBXDd4d5ZcXEnLrq",
  "key6": "3BGEj5iT2rDRS9nDsYBHbyroxWBTTs5b6ybTE2vn5ECvLMCyv3HVSczpR8G7xMkcwZSq2VpBaqwXXvMTx43AMRSa",
  "key7": "5sGJDkPDJocYnEb9M6SuCnV8HaopFn4eAyT3PY5bNBswXBGPju7N7LJqZNoxvTVapiG4W2q7sMGiHrhJb7bT5cXC",
  "key8": "2kvaCiWn2xrjYYdvkvsP4jbV5TeiE3cjd6mW7bTzB9fae8qj4SikCW9mMkfzRsy5XYrGQP4B4jZ86gi8GTHbfDbk",
  "key9": "5s8V8ee8eyae3Uetp32sNSu9pH3sdYAtJM4VULScVYjCb5V6BqdQhNKG16eCHUXxwWYueNWPdUczu8ZHdQCu5HoE",
  "key10": "N8pxH6NqnYf8RonwFk8EH6vhnNb7d5HvZJsxnvvVHQ712tPi2KFGHC3ctHPY5XkWSC6sQggy3Zr3XrWitM1Yh9m",
  "key11": "52kgjyUY1WszqNx5KZoZ67kSBHKL81rEKsoa95o79ZS6MHbuhwhMCA2jB1afTX2vFkwzWP2FNcVePT7eJJxLS1Ly",
  "key12": "4We95BBQjvvq7SaFE3po1eobThWKQp2HiyuRsjY3gWpgMTsEkaBxCkiqgCu683zM9KSrXhwYkRmSwvk6TCYUYMwg",
  "key13": "2f2HKYh3irmWyQnEpnwzVe6PPguxiaKBobPKdPi4ciQfiYZByFUcuq6EX9RdEVyLuXQvJ7S3QjqRooz5nYANfMNv",
  "key14": "zsxxEjXZYgByFUFH4R3enQaRP7pyE95VsNxzibipAb3ncEkYWB9UzYgVkJS3ePAAgNbUKzUN6xCVd35XvYh352k",
  "key15": "4FZtuViXewFsHMJFUJpAqMjFkH2dUQuWxha6eceTUFvG1eN5m2YRbWZweXiR6MBXoQy1BJP9PzrwCe4zi43vR3HD",
  "key16": "QtBrvkhHLHsD5qJHunhSukvchF1Pkc4Zsu497VHpATbddk8eVbdUJic5BVR4MvHPtNmrfq5XSxfz6uqnTts9Xok",
  "key17": "4ro3jn2U3nEFTdbnVfjctNnjVPX1R9gv4nJvQ5VB6bp3qiBuEThT9Jpda6HFxsAD711bArGpLTVMft9Z8vAKnxcV",
  "key18": "3E96UEcMiHvSLhch1AdVPDEoM21zjrCGtkfLtjRAe3T1mSWY3dfP8MaKPfEsTfkBgR77pY4m6BMxWwXbGGDzMX9L",
  "key19": "G98qupF7MsJz6iuzU5BnZXqibZPwKYZ51D2mMg2W4nKNDCntikdQqyQG4DpP7oUsoUVyaST2KoF8bndAv5Ta42n",
  "key20": "2YUs4yysFhnk7nKaHRVnY3dXx2JuBr6C9PAeSjAQVfYTsSYTVnHqQX6BuwEi83QXkfmhpNKrCwoKUE6ExaNW1XGq",
  "key21": "5VvWLLg6Lfn2zuKEGa377adTNzA4oYxNaQ6R38hSeu5RuWfUwYSD1ZUyZr7tzegD6bpBzVB1qguER6sbdiJNjjK3",
  "key22": "2EhWvXmJ7zGGJ2zQ9BP2Lju9gLZPFdARpVJ11RBFFwck2QgcKgtC2NLCkfLBvzmXPWKAowDHf9axbwkjm8LdFzF9",
  "key23": "5SWCcNdvF8hccTccPc1VkVcgdwcNzRBLwYjfaNo2rvQ476hD2E6cTvb9LzK1VfB5GsUJMURZMDhoPAecWhJQ8nxj",
  "key24": "3tTiv1jafE7g4WWREmPiVvxwSnHpzaXcgcveQNxogyFjayc2Dj5nKXckZGU8BsvEB9XuZhhg1Lcc52z5hF4THpiN",
  "key25": "2v8i98DgDWxuU4ERNtysLAZr1VPr8bvwzCbHDzhskz46ex74GnkcoJ7y8Lm9UFTf6xsiEyqHYcMfjsTwzSM543W5",
  "key26": "ixBrkQ5SL8itkeEc4jr68qBn4jNHDmwXviTvs3CNJykhhCkTMb6QptR9btT4kdSy63jPNQZkqP4tVg64GcMMuS1",
  "key27": "4UatJ7ygV8NBn69AX6A9o1kiHrUvtYdv8jroYvrAQ6nNdwwcXVYAdmkjiMy3fZgVCCfGHBbT6PsALXHeXbkHvivK",
  "key28": "4LhptfMsB7vNRxWBwFQhQKiTBvhpRBcttxyX6LLq5NgWmkXyTgyC6ZgPSxPeeCQR4VWXrJqF65YF6nuXvQnjWiQL"
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
