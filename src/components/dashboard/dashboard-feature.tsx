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
    "2yFeTwKLPzxgwckNWdF4vtZuoVTxoDQMAcVju5Go3Wa4ichvn6E7T4PbrJ2UD9VcZJB9KSFoTLzmsZLDJfC43XmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PSrhg8DTCoyUZUjUZXgvgFvpwmHRQprxUkPVtdMzcFh4mFuG2mFPXfumPJqp9PLRmsF2rGYd9RffTwUZV6Yc2xA",
  "key1": "4HxMFVbCg186X5PYzeoJkRpz8jkqMH46EZb6184nTZTmrunDteoocLZ9bWN5JZfg9MMc3rHYy3N3HEscTcuGNCJv",
  "key2": "7wKGZzg3WRuHsRj9k3cWUD7CKD7mHTbuQbipedkWTFsr23t2XxCJAkhGzjCNgR6GzJxK3pWwrWUoZDn4soKzGD7",
  "key3": "2aCw5n2mygBqAxm8UrsHXrYujZrVpHpBriHkFggN18SYkGbr1puqNq2GhaFNiUDzjgByzRz3X9KZExiwxondFoDa",
  "key4": "28BvAE8As3M4Pa7fL9D4W3WSWF5kk7iiLJg9YzKmiLEwnjk2FabLBKyWWB66FjJkAbuJ1vB7S1SfKZmfqAKRTeJx",
  "key5": "5EEjnzToWkDor3BM7bvopoTQLwhKXacKHbozMf9QsDKMWuM62ihb45Gg6Cv5GPpWnYhw7Q5V76w6YVfPKMuPyiHw",
  "key6": "2nnsRpsokr9jvoUcD4pQkgCzSwiP3EMW4xQNyt9raKzHPDYCXZMcztgzBYvbsv8qG8vPw4hRBNBaxUvVbHcowrKr",
  "key7": "5NBkdr7gGnaLHCWphTrCteSi1mKcCYPdkDYRTTA85Cvf8URi12cNC5wGZEhwYf6FtcF6RQ1CfWbksjwdQC4vG2HG",
  "key8": "3ftED59XJHTxRW7RHyJm2mkm95krMnVtCg6u8jQHEre85Dr4Nmg62StTZWmp6gpko3a3hfWZfgBhcEPdfzmYcqkf",
  "key9": "3Tf2LxqxfdUCzdLEXSQ9SPs33Dcek66dvGpWdXiA1ePAWNtnbBu9Y5MZnmmVRdpkhexZaokDDmu3CxN4r514KF8F",
  "key10": "3MKq28JNJrBoAGF12EUQe1jLja5ai2CfZdc9xPxp6ZMceowXR6LbEsDJwAWuNK8h1K63Ui5XgeoXE1KxV9zMiUjh",
  "key11": "5iRUt7REJgJtbsp3ATyM5eAzRS9YKyHVPkBPMenDDuu84ssdH7mBAdBsXY1jaWBGbHmJ9YtopoWsWMm3GyCPSevP",
  "key12": "4akMYaQqfLdwcPECZgAuRHHkSWUAdrC4HxgoM6kzqJnRjCYCe55nvKRf9oH8Tg9Qpd9CjpRQ5tQ7JnJmkNUH39X4",
  "key13": "5ETY5RQNaSF8Dmxigo6Bn1EKPbRkN9Rkta7WEtdvPfyiffMuMRMBNoZY1JJbJGd1fJkXaa2YuiM3BobLv3rFU7A9",
  "key14": "475cCRsHvaeG9Nat2ws1Rg8RqoQDWD7Y7WntvMWJNpg7UGWSKeigzW6atdcHcEa9MDZzAHtd3x4qZUkgNVCYkg27",
  "key15": "6YWfHgF3GzbcnDZ4Y1P27bUaSujU2QryBGYoY5pZxYkhC4ooskZKXYTgJiSENLTBuJd6hbxk2eJN88rh7h923yQ",
  "key16": "FmfGwoMcruYzN3BNSiy5EDCam3QuyMJ12qHf6nw2ZPZzTYDEAVcCLERQm6MTvmBpNjXangW8wJKMNqAUabA81ei",
  "key17": "42mLJqaKxKhDXdhKVu8C7QpJWCJXDLFneFjFrYqHFYxtToYji373stXvTUCPvXdafG6UmxFDeU724zhwLnMVGEjT",
  "key18": "2VFYCwc5DX3NMT1jyRZzHGvUMMxP6kohsVmii4SBs9WgY9uTM4cD822c1e5grKBozbVaLeAJYyC4Dgh7B5BkKneU",
  "key19": "2YUyAht9GUz8rYrZuoWKVpvsuev8up3VbFQhmas3RRDzVuysNQ3mE4dF1QAQ7wJ34Yt9CYjGix5nRhNyV5ih8Mqf",
  "key20": "3DbbEyuKRFqVtx7eab4PyfFFNMVmSNyLTrcQqqMhJ5ZXBGjeALXBDZr3Y7AtixRWZzbeYio3bAiYijrYsCJv6yTi",
  "key21": "4TySUDBzVoyExmwkRpYKJoLaJ4N8rqMPqCggm2wL1n2dGEvm7FXdUVU2oUh7gN6rKPmp966FQTzgmrwKm9FuZ9r6",
  "key22": "HcwspmEH5ikMVhpmqQFPiot2GypVJmH4D7phdHSkT4zk8p11wQPrS3yGSF1fmLnBr9HH6xE3UMMm8CPXxWCm5ZW",
  "key23": "3CtuEnzcxJ2AbxejFT1hp2q3XF8MvkPVV1f5u6aNer8DD3zjgTGmDd3G9FpNRekmU1rZ9qMED4dxnu8QezSnZgEQ",
  "key24": "3Fy2qVd4GjnhziswBLxJdGNkqogxC4G68LxWSDgmGyCHKgbh7RUbtEjainnViXKvhEgmoJqoiYFWUX3WXPbYqq9K",
  "key25": "2Z5JpoHNJR2E6ohYXBbHCZAJn9TvjzPARJoNW3XDQsfTsLfxwZC9o6B665HqiUTeHyCzhwLXAVn7fDfEn1QnBJeN",
  "key26": "uPRgJXwU6ENaZSVtfKhd9ivUSs2ref4EmDHx3vyWjz61AJQk8pSg6xjaLZXs2eyv21z4SUU3f8A6MrEmryvThbe",
  "key27": "64nsHJfuGMJRYKKDkDocfbeDJMXr682wJopB2wLEPVurbFdLSeNq3hqrmednbEXyXSXhMrJm6QDV3uVRUrQqX38w",
  "key28": "5v47bqr62DysRtcb7rmmhX4TMQHuudjUrjaiiezAvjdAfYbZAroy3NLFg6YBProWf7n4dVv3bHbWCPwDboRqtnAk",
  "key29": "HhmJr7dKut4vPVskgn9em85n82PKVDjP72oJ1SuWHZHadaH67cATGExhjpZyYasrVZZjSEC7FKirJRARu3gQsp1",
  "key30": "3nLsm5y21hdxpzvizqiARWCN1GwWjrYbAN3QgYTrhiLr64HvZkmg962KQZLnANWKGej2z3MHeBTNiL9f45F3ZhLC",
  "key31": "3uSBfEaVrxKqEGsRdbNpBq7UoxEMo4syLyQj6dPQ5bRS6L4w8uYb2DHq7PYfDrruAAgiKSaTWqahBURKwv4wktzL",
  "key32": "hhwt2q6XVWhn9mKBu9S6HmmrevcMb3kWic5Z9drVfnFRwpwb4rmwwY7oLammfrdFR9cgMs6QnkN5F6KXg6EPwri"
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
