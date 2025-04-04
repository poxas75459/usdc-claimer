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
    "3nQSpA6jSvQEt42Jmfeopd6nWQX7DR3wJbKJ4iqYMufn65CTJwWvkdTtFA9VxvxhSpXSJGvDDqbRydxbpFAfVKZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GYF4MzJv4v77fYoQoG2PziWnZApTb3dsjBS7WihdsC8tDtq98EeaabirG1q7CBP2J6LAoHeDFQHykYTxag4FQj6",
  "key1": "VcjNFNpYnqonNizcH88s9QikWNzd4PQ9JJeWEBueKBURPmqTmVK2eQhYotT5Cixsg1cU6qf8VjNvBLDEimjwVns",
  "key2": "5bUPXgrM9LjY1GqUUNLZ1pE9Cy9XGSD112y7K8K8ycVPgt8FXAcJy2FFVeJxCxLivLUuFevZYG5cqJHwHWk9DTCq",
  "key3": "4JKQJ5jKuLmwJXvvQ6Z9DzdCJ8d1hDUoUju5vFaz2BnPhFdn2RcKvpynNWFwjYKr7pxjiRrGS8xdoXQP7CPMfHWX",
  "key4": "67MLvJYLyfCb66RivC7xrKUh2EpfLL9Dti6ABs2mkHdECKrCdyEhtEVPY29nW7DaXKWZbhiybyv3UtY3YTAqaKB7",
  "key5": "4gtGCbwomYXEv7JaoeeCGEzvkwLDfQ347VLHDCPTEq4ZSE8haPL9bdctb8CwMoknzwgkCbBpqcQa42kAhnf5rk8N",
  "key6": "CHNKggdiR1de27JCWyxTYiDYPHbZVxXmozBgDoWMHU83RKbe4eYzNBmJ4VNUVSyrqUbjTv9SGFGsMo73knXrynT",
  "key7": "64osFveufszjFhQGyxipX7rV35B4jf8oMR22x1bBHEx9zbFrV7FMKBhN66BXf1EjkuqopN2h2eLMbZTVwRJPG4ho",
  "key8": "2b8gZcsYGAVHuNouHVaBP1DURgwaM4pEnqSy9WNNwgzo5MufGjvixoDNhEsf35hQj4TnttuiBpKrHt48B1ifVoKW",
  "key9": "4z4HZKXYwXkh22L8D9C4aDUtrNCPV7Ax1rZEr8GqrrxtfhtpYiZJUuAKzxhpHPudbyibqgGmXzD4btrwdHU8uxrE",
  "key10": "TBfmsaVedWqWHQ8zFu9rVP9gaujBw1e2aJPoJ28eVb9FPpU2mAqBByNL9jERVP2rUfDGA6N3HaD3hkJs4nxn8WL",
  "key11": "37jdQFfWoTyFkqKspyZd2onpA6UsVwgep4cjHwnuga9Dtv4d4C9iHZz4gc3AmgUo9RFsuNsH21F4QhaUksaQjg4Z",
  "key12": "2ahgB2S3FiXzKSGiBifF6UqxkxiCrUtPL8VFfceLLM1rDLPtJ1xGi7ZA1DkE5bbEdAHmVqykDpodUnkuq96cHuBj",
  "key13": "hqzbAeNx6144EcRXQnvf3ozPxT5P4W2LqC3ZSET4gTykwSTYa2xXqR8juKwBoy5RGjEBPgS9818GEvGboNhGyDP",
  "key14": "ToKW6vQfz7GsiYZvaSMgG577QbTMgYNrTfWgHibqBqhF5p6xyDYqAsPx9tLp7KMhN1yB7Ze5d2hE8KPNr8aCG4s",
  "key15": "4ZoDGMw3MgLSqkqpifivC8g8QnH6sS9HwMUiEKC4kQkjE4vypVZuTioMNaQdfY5pnVFo4C2U7c41akyySPqNwZh7",
  "key16": "2XJcqor4wnjgDihZ8PSn2wfDDU22Vbu8AqPyNVDeTR9AsRc1EZUfP75Boc2baag4BhsxRXb66Jhm7RMeME88zwSD",
  "key17": "2XfAwnXXna8mJaQqiiZXn9MsbLME4PFaEvdTB6ovDSSfdZwTRqFfw8LZUDrHySpkFyGnbVgAG4SZEtKmy1bEGkFE",
  "key18": "2akjxjuAcUPB5AcXhLCNDeNhebC7GsTa66jUXUuR5fxmZtgg7m24ALivP7G5ieank7Hs23GZrGML6sDNSh8JEfoo",
  "key19": "2kHApB7TEL433Zi9o4CHyaawtWMz7LWLgKAYqP5RHRENMxn7Dq3xEVpNTAWfmZsHSAhZrVG3itBRQw3Dpxg1oSpe",
  "key20": "55Lw4wT9jiYBQFHjrJFePbdisUPQXHe38E9TvULAmoAk53RhrkrGXaY6g2pNzcHVrTyznE8M4fKNrLuAJ5HEbLUK",
  "key21": "5DcML2rWjs8bEmC5Z3zAVbsaCCYdV1HWB1BVxiiTqVXCWmTW37p1uAmkhFMe5KUBenBbV8yox6iNwwtjAQKbmxJp",
  "key22": "5yb87WDy9dvNiNLZEM1fZoHSHWFuNBV9XufonaYXpmcZEq8hxT3RnjPrzb8HQ5XDK5yCkYAPx1NxdF1gnYj16vak",
  "key23": "3CzgaNP7bA8F1wLo8yaJEvha1P4egZw6J1rKL2LgR28sCj3UuRSiP4FA61Sctvb92bKurWDdmmmZJyDE6X7JWNJX",
  "key24": "3dP9M5eFdyL6ZErH4JXtoHnUZbF4ju21pgm5VKPecwaWiYkLeZg7cxoano8fUQKR5nBkf4kG8DXZQE8h9Cb8Gymz",
  "key25": "3JQKxT8VzWUND9vqaMjU3zdtkwm4CbFm9hfzGQxX4AZDDc2kv8P8wQej347nWiwoDQe9Ue4Bp7SEsgUfcewTZkGB",
  "key26": "3PwvU2uz843f2BaTU24YSsu1ECrQQTHXGRjiMee2TZJWSZSFthGvWobAHdgsNzddL43vQYBNidzYzkBhd8fPUkHM",
  "key27": "3SQq1wwLmLa6QjwLrotBbW8w4jutEN13n8kCb5UuYvMGp8HHiEZagRwwo1YoMDQsR532hv7mbBPLiPBqZ9G1HJG",
  "key28": "15o1cQacUrnBqeF9N4n7rjKsy3e3N235V8zNNZTBcoTDTYVcF5vtSTFsRFPfnffu8yyQct92m2JDQmhSeSZUoeF",
  "key29": "5SfzCjJE8UACAd7WQhG8TT6C1tndPh575pDKh2jfnHm4mnfySwTF71gckv9oW6rBRT3TfXQQWFc9Q143bDNZVTtQ",
  "key30": "3kGqrvGXcvWU7rP4srx3KbMnG82bawRkRwsfWBSsqhoLrn36WVjVvgSb7gpR3LuSc1qWGdsxTMSmvaeDBQh6SiPH",
  "key31": "47UuKBBQo5yVgrLHjsBEfRTXjmRapX6dPFeFsYDh5xwP1SD3TZP5VoqpyM4LcEvkLNNALXTshRz4po6pvpeEWQRq",
  "key32": "5jak3y22qy3YhQXCmfrAWs4ZucCCoebfBhJdmKLaqsRXMfu9tvFf5fNZKjNtcr8RpYKRyeF6kCxA531PXSBEGUjR",
  "key33": "5HDwXasv6wTeWMJJzgrLLjxxMvD5cGXN2A97JWBGAhiZq1hSgvMPiD8gXWmztMSEQMmfFfEbVS3LT7pqUxuGDwXa",
  "key34": "51P7uvzBQ62p4pu1n2N53NuXXyoGvaARownb49Ki6kErroapgaZ5S5i65SSVFNaZMjeaXeyYxa84EMgyQMaUA1rY",
  "key35": "36BsoSBo2uihneMbEWtq3CcpkiU9pAdWfoJSe12WD1BZmD7HdhUvKKuFgVdfzSa1AhZimbaeNKDofTBvrcET2yQQ",
  "key36": "5z6dcSMQcNatMGwNBrxS7nSghuS5TGmF8G3dXQUixACsc3mtw88FD6XM1xX6A9AY2fZUQPN3CTYxgDoBS7BJ3SwQ",
  "key37": "2SKuosYtchHJk4qBeiR3Zvn4uJSAq72YhCmfcu8Zt5PJQ7dD9WFWHd15xGap5H1mTn4GWbFez8DrsdrnngUPrLQd",
  "key38": "hnxAwFqeX9BL3k9TWVrs6oHqtJawXo9rLbgMNJ2o18kRYLTpJybqDmvZPiAnbfkugiUck9ccxpiB1PRWkSmdL2t",
  "key39": "5m5wsBwVZgiCyRfPqrUq3KaBpqU2sugPrCLXtNhEs6WDxcqBPqi3nHDCjwZZ9jqWNrx4KGou7Cfx7iAaajWpXTJG",
  "key40": "5YXWVeq31f4Txr3VTwhzBjN3SagYWF2pZch7ib5LkBxzSDzM9PvajWcnPnDyZAdrpFLUEgXw7FAvDWB7oSd37Ajm",
  "key41": "BBWTdC4eUEG4HeZ4BUbL4y3Qy74edmfWXnatoeNJehiwpFkSjjecrzquaS6tAreCZFrXAWXiscEJqAWnnVVEP3R",
  "key42": "5fNCKdLVpdWhMUvPwLXQQEFe7xaRk9SZa3qB75XVRxMt5uq75ipibvwjggGgxSAwgVh2LSzyS5T6DpAZZqpqKUqY",
  "key43": "2XUohBSMyvKgfq3yywhDbiDjcoGVEeLBbhWej9qJuBAwQZfnGsuPvctVuNsh6vNEbrx9NYD1N8Dqn63a4YxAesLB",
  "key44": "3cyGfSXh6vX7VbP1H1bAmgWuD2Jh4ta2cQqoijhNqHJqzQgdor4QZcUJ1aFezGCWY3xhhUQNpxv9nktR4fwo1Xj9",
  "key45": "2Deta27LvzJiKWoXrPJYWUcjR4CBY7RdVLwb7BbX6Ypo9FeBSTTur9oVyFoarWd8YyKVV6Z1d24jKUvQ58n1R8kg",
  "key46": "3fwzUfrvMRSSZA3hgcG5XrRapLaqF3owSddByKNJZipW6bphBgc39dPjmn75bvkgbrvXyrURjm9RW19PeWQ6kZeF"
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
