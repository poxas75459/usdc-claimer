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
    "5SigNLqfZWYQfEPSJzx2C8PYmn94vjd8pKjr4pnLDaWtuBFC5tsN15Dm2bxmCVkBHcimjRNyqEasEe8bVsDMsmrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y3Br6cD4kUVJ5eCdtEkdgQzvFjubBahipWtnpRf2gFpcqpBY1zLs69vLSXidxUC2LnkuFWiXyNjLVyzX49jnePi",
  "key1": "42w5ASBGA696fXEDqDFSECQoZnR3bLYosBH9aqaxPsRkjC6q5yAoyHZy1qN7iRvyN85s2EmKL3jpsnPq8VVML6vw",
  "key2": "2Swqgee4iWystpry8uxRBdkF2arMZzGE9tecEQi3kZetTCLX13L9X3sjEaip4ywwHSiDhkiDTQW8AGPsHRkLxXbd",
  "key3": "GPuVTsVG9jsvph9gfNG2mQtyFBctsSsBLNaHzYLYq7ZsJti6cjbUTPphBLqVZvTqd8SRLhS9i7f59YeEVNpRY7Z",
  "key4": "5Qnea1qvKVtdixqpnq1DbGLzCgh9cgvK13pUnyFuwpWqDE6XMtRsi5ed7Ug48RYXswZYikJZYqh6G9xvfrvkUMCs",
  "key5": "413Ezz7N8QpVp3SPrzk61kQYayK26CfiADbMFJN63yh8htUxRbP8NAFZ75TDtvXvJ1Yw8psRnatdhjxwGA3J4U3",
  "key6": "52GVdxjDQxiez9EdhinJsnTZuPDxkDqos9hYWphjfGbA7PkGQp2nhgSoZ694oZJRLQKabitEQjRLfCJz3HcQrpvs",
  "key7": "4H2ckuge8GHfQCbKADXQNiNKiqEaeSxuUcnjw6KJwwvRD5pyL9tNsiZKuBMe8pTkYN4jezdNp9Wp3F1Lbr5JfAhA",
  "key8": "2o1oKTxEj3ge8WPjVKMw2viSxiCxhvEW4PdRczCH4zTeM4Phcn2FszbPgwtWtCHP6ULsp87MN38x82xWzWNpqZPN",
  "key9": "3wkz4HuuesMrDXuYpsXJVrh3NCQSVcdQwooA5k6BHVHoTdR1wKJTazrntqajE82eV4HQcsiXRfGPpCQqoKFBhZNG",
  "key10": "4BpPNXs4JkJ1Seb8dPMctQPnoGqcsVJK818LQXaDHvxxhkH8gKT2Dhb7EvcRkVxEi7jrD5auN3oSpovurSHm9owe",
  "key11": "2jivijCu33e9xMm8HXGGZKrLAPDurVqaKjahawo9zMxGjCNYQcg6bEsojUWgbmZbbQ4d65BtFKCXQCMy8MbB2vLD",
  "key12": "2o2GsPjig4NiVb1p666TmwTgtSVxXJZBQs2xP9LAPGBPu16jH9bhh2Ti7iqrPjmmAuPbMn3e7ruAbidjrmNJdbbn",
  "key13": "3ZEvYKEC9WCoyH7xvQyJQ176SjHGFqpL6BL12pHKBd2kfKp13ixdfCs9GY7ZcFHa9XPv68C7o7tyXfrktbcaWUow",
  "key14": "5rPwKUTf3y6QBPvAryavo3rCaisXTuHN8Zy4zpEQSAsY9avhDNgPQZNBBwiMzZh5jGABSYjXkRCUoYLhdmjLW91V",
  "key15": "X1MNp9QTF2Qjnwdu4kDLA9VEzTVDYKr5mTKZxubMk6H1BKmKVf3yhzXaMQsx4eTH4VzjSG75YTng44TNMk5oMjF",
  "key16": "5cSWyY2F8LCLGdUxyN3ZWPjueNM9jLHNdUxbeCaC7Eyp92gWLSzyYo95SatmiYrdFrwLnPvFh3HYopnnPrANoWf",
  "key17": "5QoVNAV1nHjkYoy5SjPzogJjTzp6XY161FYxWmKPBLDpzwNX3td9NMp1EgtpWgwo1bao1Vhsgjr8PThMQhzTzXLD",
  "key18": "7pwZxUSWvbJerEBEAhw3x449KuCGjzwpb5sFKbXxToPy8Pt7i53mkPvfNC7iuC2u9kcSkn98jE1PFRL6EfipLrN",
  "key19": "2K9AUdNWtme7SbfnY28fcGPoLaUnZmsL3QZ7BJar6BHKpe447gynrbQ4SaJszaRz6eAdWjqRjy72eaBBPxT5vqtr",
  "key20": "3TKRMkjVSGU3XmbBRFpmNhh6BqxTGEWjYxhmNPHeSXcPgFsY3u1U8Q7rd8utdDsgdCo41E2BBbUGvwNnKynoudfq",
  "key21": "51NpM6SYHA9mKBLy91JP1oE2MmsKz3eDy2ZrWgYgURjeyMJ9uHHU87kwdoRKjFNh5d737F1g4yqJYKMqEUiLsdoD",
  "key22": "3HJC8SuuTVyVfnJPvdRnQas2ZQ26TTZLuc6Cbzxboe7m8DKnHJGeu9UBDN9SStS6yFvzL5twJUYMcp9fcQyUiWFK",
  "key23": "66ZhovnuFwMAxHN6ftoWELRV3qNSeLEXFBdGh3ftoSAnHQXkJr86wqkpbMDnS4LRpgjzX7dBaUEwjWX87NQyVMvz",
  "key24": "Dk89RSWEgy8njLXKy49sTFU6joNxfbPUqC9ReKw1KjBFbb3zd9sR3N7XoVCYHK6k8C2haT3sTiTNmeJYoo2cXCP",
  "key25": "3Q4QCiD5ryGMkKFeFtZxrxWpiakVhKbnwfwdAHKx73H1ptvEiPNkpuwT5ZABQ2T7fbzqYy2CLMTYuLnugMnLLrgp",
  "key26": "sbHAGogcAPr7xKQcybhWDh3mGZDSg4gHE1xQ2j6QEHC1EC9Psg2hudi67Z6A3AMTx2yWM497fz1rknLyBRECqsd",
  "key27": "2jhsPjSU5GcaNa7HCJQHXyckmiPgAoBe1TLbMs3uxNXqAEN8m4sG3QxXqjFSEh4aAVfw9kN1xHFuB8fRxFPqAbE5",
  "key28": "2PFmtzmdiBAjY949uATDtjJsYspNLb5FMdLQFTnboxGoKEq77xeBTifbkHNkQufffCPEPnkWTziHexKAfsiTTSRf",
  "key29": "4Mmq4R6GDQYFvozsx6riWqzoCkHwMxqtgYSR6Ew31juCEpavRWMzMnbGt94UcSoDKcPwBbFHb1HCh7oKaYAcRC4D",
  "key30": "rkfbfhLGd3EcbgUQ9yEe668gkdXktkQJZ5JwVpp4xwNY6euUedAThADx85DFoUou82odLJagnc9cPrLhx73NJD2",
  "key31": "5ST7Uj5oVECbSdpBB87ZZEmRsMKyhotfWXp3rCJpChmiEtCuZ8dTq7a6dYMDq2RkJLhJos2odUWve8Nk9PmuhrgX",
  "key32": "2Q3TqME3RvdGzKnYTYUPgw1qPXgBxXDh8G8mAH1sZ7QDTdJFeNZrTL4ZV4wg5FLt1BHFH1AdRDmsifZta16y3hTM",
  "key33": "2N8JoG6k3skLhRZaCsKFsGtqnEE9eq3sv1yeaSKGHsGX8M7Vjsa5kbZZDtpVpAZZPxrKWqpqREsKgUiAQK3YBz5B",
  "key34": "sJdPgwnw4xEjVKFnfRvVE3YJJCtSXAiQMD2W1JKDFvQqLZzNGWpsP9YAjpPLK2xNJChrPquUfwpFpyraVc5SLGm",
  "key35": "45WZ4epr6dD3sxReRx53mnAhaQhZxryGWeGQip7mvPmcq68gmjqDeAtnGepSBCZ5VMasB735uiK1ZDjtKu83F8hf",
  "key36": "4yERRLv8EtrjsTcVxdJWDwMxhYBK1AXThGu9EvKvP47q42svE39JgQsC9kMVd8spTrremN8BCusq6JuikX43jX8y",
  "key37": "2wfsWqEJoPZ8NEnHFmgtXPAEByC1HaoshLJLm4gc3KJUzQrLR4Fbz3jdQXpCS4PyreCreiJDciwgwnzvxSjDW4De",
  "key38": "3fefEhXMF7Kpf7bR1WHyjJVXawUWWHiD57D4K5kEmCudAGhXYujoYW52DyR6V8kPX8CLDYfPbLckQ8b3G5aimReP",
  "key39": "3Fc2d5jm8Zu3jCtfUNTf5mhjKMdNxmagn8vKqcGBbdUsjcw7RAyyUC3SYRX3K9Pcodp58LT5i7nERwY1wan2LBVN",
  "key40": "dPwA9jrZYwJNEHCb4HWJdWYJvo3nhZLDQ1vhw8MQBgynEcnY8sU8N4P3RnN4QDnQeNyQJM1nZ1t4XJW8j2wt2D4",
  "key41": "2WEeJ5z6Ns6qDsTscniCqe7YuyofWVhXjYiyzrnBaRmNQ7fu7ngeTocpEkf7Ew9WnuNGA34DURs8FkgF47sLnJ4i",
  "key42": "42KEYYCnV76z39BSaUp2tzLgZ4ky6LZwTyJHBQmMVUaQSUZku8pZSmDY1axmEyF6nXX1h6MwUy1FdSySFGTgFyaD",
  "key43": "3FuXAG628JT9SchRFeN7EqFedHxrBfV2G8LaQLahmf9ffeWDKCfq9jLUovUysvG8cY9xtGEfSwT9iEMLEL9JgNQ5",
  "key44": "2L2Uksxm22nmXDgNmU15m1C8dPKQZoh1gVVfHWyj16MCtDDa5rXPrMoGLYNUoaaKXdQgYnyDLy7686idtjL7KcDL"
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
