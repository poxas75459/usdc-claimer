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
    "56gB6LZDsr7qQXFkutHvgfCUU6Yr9zP6UQTxjPH7rcpSYWnnRhpkLHJF8mbTffSTXU3M2iznbZ4Tsj3TUE1neCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NbEPGobAQgZtTBWBMkwLngRSZ8F5zwFhbVKZYcrQP75tmmWdTFMcdrTLYHPBtuRC4MDQZpY7pVSHegtxUFswyzg",
  "key1": "3yYgX2hXxHxkfiukbChSdzkUASbuLpMg74ocPpS3ojmKqMHdT9ugKL8mfWBeC4zUuLxtUnvhjGqfyYJwrxYRvHeu",
  "key2": "ytvMte4gGjgqaEwnt3uxVxzKhzFCGGRq4Si5QN1NDmKDx7S8qhC6sFJ9mCdfig6bu8m1R9wz3miiGjv1RkNJxqi",
  "key3": "5GJHbjT3R8WS8cqTiqTeoHnZFfa6gehx9Fj6KXQ5pt144hfn9SX6KEL4z7nxaVo4CfBhpfe3nCuDtXDJ7oUWMmNJ",
  "key4": "PfekQuaUVaLUpKj6abHr2M5YBZMgmhDywTJPAy4qyxUP2Apxt5fsHRwWGkGkXaixNAYLsySW6N3Zu1yRmnyjRaQ",
  "key5": "RBDqNZxnJWbKChzJTq86DeNjq5vueVRxKGKn66j2f22KpbjjwLf9kxqfaaMSpQoczjCJmLxLj2MgkD3bnnBygMV",
  "key6": "4sWNUJsvLrj8u33sfDBns9TEqAYcGanUmu8CjtysvHhZH9FZA15KHETRLc4QVTnGarzHWo5FuwgazaYxqgZR7qCC",
  "key7": "3keEJ28PVki7MCE2TryFuQX24mgXiqTHuVw3P6RLYTtYX4Gk3K2HuDB6FpM5Rd7HX1cjT8uuf3QsViK31mDJBfgf",
  "key8": "4HyLdm9ooiikuPc4V8ELEeuXjCCDnQR3pGJBmsotmLCsE5qToAERYnHmSLDyVfAFTh5e8UPgojez2HBwUtdwym4x",
  "key9": "57ktgwxUAJzGGLNguWXM626bb6U4J9595oufG1VusFdRyXP8EzHqHLScS1K3H7TKMLU7rbXjEgiZbSj1199D7eLj",
  "key10": "2eJj1JpVU8m7yQoLKAvkNFWa52TSqU4LPEkfKeW5ESHCxmgzPvNjdfia1QTt3814SXwpziToLnDbLQ1gCNH5W2qe",
  "key11": "5JPpuEmsuZ6NfKxH32ZXiVcM845LjXXfR9S7P2Fcc9hS9vdUNpmhEVnfy1ioRBic5SxfjyGQG2qxQMtFFVFXJEqP",
  "key12": "67BsafK9HLcjwgGaNQSHsfmUFACyCxuRqSJ4TwC1hJS9dini1jd9QjuMnd7t3PA7vdUQBveBc9d6GV9GqXAYXTaK",
  "key13": "NPbCwLBh1qA3ykvzV9R3pKGJ6hShmEf2RABtZ6HYHuiWEUb9VrsyZrSJwSYgEZ4Jjx1wPK3qFY6qYAun8CFkwEf",
  "key14": "4afxw8BjVKyHuLHsvvsLwXBZ2aJ45AyfyqHkzWn7wiRUfPUW6GQ9zG8wMgqGVTcwuqA5nJzWq9UBUeDfpJXgkzTv",
  "key15": "4x6jgLbEgmLuFWSFCZfspuQnGisfYetf4L7d89bkHqE5BDS7konPDjt93GhFnRBiwiTGdk1SCkXxcUvEywfGFA4U",
  "key16": "3VJBZ5SQRfubCUfu6P6GbbdpcjZqAkUkwfystoQc5Q4YeAe6S8FrmHoDoQ6BVVjXB4weuSLBRpUb3UVVzJYfhyuY",
  "key17": "27CwZqiR6FEUfpCP2TLNYgVWx9EtBga1kB5sCgfRP5psR6Hg8HbymidFwpFzepj6gdksmNtTa2MB1iBiL4sHDrgi",
  "key18": "JDSBXFQwPNrwts9tMDtN5r6UzCRncm8xVmfuSz9Y8YvWDtH9fQDAhRUdk9cSsgVLj36Yzj2pKfVENxZ1JAMj9V8",
  "key19": "3xokshSERjK2oRRkKpPDCxorwNHkPqarLjJhZkQ5RAV2FXpczZdchZ3X42E8LTfPGdfwXcKokjCBb6hd2Sfr9rdE",
  "key20": "42aJ3kibr8ZMBNtp5HF53AsnrbwXU3VY7BTxpW4L1pmnLgPmDSiF9k4ASE5x4uL1iTyH9AN4aMh1c9cuMwN7wDAq",
  "key21": "4fEabcEju4nKU9Dt12gNL4mTy5SBLF9CdfRhdT2DN1Gup9A21bwgTxtJqN61t5Yv2x4fMp4pgCR27pFpSwKnJJxe",
  "key22": "4WTXMt35SkpdbFh6gozxeErJyoiLuzK4tj31N4PoQM3YYTfRmkwLbfW8d2c7MAJYeF86QLNHrRxcFEmchJXGBuh1",
  "key23": "4MMTLYad4JR3U2FtW5rG2NAqnuGzjoQSwD1ADVyu9TiKXTXwtCybcDCT2xnKG9Tm3yetz6WPJHFeBCh7FMj5mASv",
  "key24": "49YZStZkZjce5soEbgbHLMWsLTVbrXGMP3CzNCRDBA3yKMffg8197YFyBYMNNnDV2YtqJxpapNaA2KT6BECWLxmJ",
  "key25": "4ma5UvBRW6jg95P7ZrCbrJx5GvSKHsLNAkDQ7ggjaGTS6Zmy9vzUhPWxmRJq4Ziq2eSbnrdxbfJEvKjQaLH2V11o",
  "key26": "2QTaYw4vHVFRgDR2E6gAtYVhwQRABBDzsErd8xkgvXNTZzdHpjsLBtmLug7SsArm8j3pGXZFwLTxUwvkkdpEurVg",
  "key27": "2DPLPT9Je94C4ca9MWvE1Dzivpc7b3Dfw2iymk62kjYfTyFhviFu9pLLMcyg9M5dAfDMSDTDrozDLDDx16q1sgQZ",
  "key28": "2vgQzthgBzvoAJFnEJkuXrmhWERFW4ri9nSpJxLi6anfzCfNW9XUKj9XmBDiXCNZ3s8xcUrFnQSJhf85hTfJRewK",
  "key29": "4KKbzkBxTBsXsNYi64pKhANtaydgvLqgZ1wnzSCTA3rBUni6jrbVPAptW19EXGCvZA1v9JmvEZvtTcYpNYt15Rsz",
  "key30": "5NevMgKDTsj6GYX2jM2v4aiRKmTw1N72N835Zp3DKrwhetPLXDLs3ntGA4u8jH6sVrbJ8aDFrKSCERV9ATWUZUXX",
  "key31": "3tabFw2UCVm9wfQoxUnJtT8zea4UuCnp1VXR7LZFyv38rDYVKgvhYJdJvbCt75NTaUFpiwc292mcKShr96bqC8fs",
  "key32": "gQWDMnooJqS9jVXa5qyxohGj4RFB1ZvMrp9cp1ZdFVEkTzFFb5Rgw74KNgZcVjQguWXf64NbNC1QosBcy7bFoqu",
  "key33": "4JcHXRmfnJvo9ZWA9iCNAUG2DJqBz2CUURpp32qQigeK2UzuxUjyJeQCe5x1hSsLbCqQ74igSPZW1bDjWJG8aWHF",
  "key34": "2hvzoiwf5NMPkF9odM1FnUXae2WrBAJJ6j1TUzHVh1pZVe8ZkLmw5MK1H1xCjmGXrTtm4yqb4sXcVY7Z178B4gkv",
  "key35": "3bnBxVGTZsALriAomnYY8dumb99a2Ghbvk5w48F8HUs9VvV2pTyadPUssmVKQcWn5gxFUweukkf75M4e7JWQteQt",
  "key36": "32PvkiJYBs2RhJXehYvMk8zTTuxipL31Y7zjyLfQC5Bhroc2CFcJD18W3SrEHgfe26EAR7pVzrC5u2jgmrZKsKyn",
  "key37": "4MqwdgpKusTam8gBUcjmtWwaXiYmM5Scv9UrTJ6wUik7Y1XPxWqrjj8ShLpHLHZAqF3XXsiiyc5bijhMfV6f1LVg",
  "key38": "22N5vPH1niQDqsVPMu4SJmje7ave7MkvrLsiMiS2WxHx9cK5Y7XWrJKK5Y99KdSKuznsz8rhe6hVEq7LwhJDXSL6",
  "key39": "2Fc7HU4GACUz23yKBNUXn8QEM3x3L6qqSoXYSLGFe6s9rQXvRM3QNeYCZDpGwXAkNnhdEmVkuiBqEuHVyVDJcMiz",
  "key40": "3JrEXsgYaZfHEPu9s2hihiLYz6tU3ZRTVzXAU8cedZ7Tc3SUYeNbshxHqtkDHvUDVFT7kv7NmQWa3z6q3QtBYdg7",
  "key41": "5worWtAYk5xFBxrh3fYQ2vbmgBYVNTPK7A4khPgu12JtxdWr4LWDf3mbB2WH1qVRV5KJKp2aga8zupcmnNHXWLQD"
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
