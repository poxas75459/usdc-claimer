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
    "3y8z1Q1RzwBbvPbyPxrwovmTZ3BarhnT4ptis2eBAJMpd4Ro1cumifkNMd66eG1tR9hCqNXWQSZvAUiX8g3qgyNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TjCR4HwYYUkU3v64pDK1sL4QWU37XZ5r4PTShq51Hha7WgHc36QgfPvTx12QWjwFoJr13PzM3MRrMe3jxTHu4PX",
  "key1": "5zmuonPYS1nxckSc4ekhebc7GgZVTaWkJdvjoHTeuFEofdLfRjAimAxAdv2ppBVAQmxadLGRELkXNE2y8joKA91Q",
  "key2": "3WeUR7J4tgkFfyBzGTaGLW155u9mq3bqCQCJixTm5HNRTod5hGzQsjrk6SEPSjFhZKwRpS6TfrYbcW8uQu6pBVXj",
  "key3": "2GVbPgxUBijCvQKi4cxXVr2NB1kpC9n6Z4i2kpXSukGNDohSq4XcMC58MwEytwnA1SeFA1jniKqrENXuAwHxGSBz",
  "key4": "3sTTMQ1G3uuh8cZCoKgMRehxsC9EVcgQzZmpyE8wMCQpnED3T93mMMAT1nYoiY5qDrDnjj6s6R6GtYHQ7p6hG6Ub",
  "key5": "4zfiA664NeuqgHQZH3rJ87cUeXhEK8w9d59DL4MEjCgfUDY4r7SeicX7HUkohQ7ZDExxV3khZMjSt6xD3SUhQggz",
  "key6": "4LJgVr8uzp4enYgmsJpZFhdQNqaj11UEfrEXGGxwEKaEYgg3tSnoAcZVs3pCtqisDMv3vvNWMq818UjSzfq77Ukw",
  "key7": "2r13ovJuQJqfvcwpTp7m7Ke18Qce8aezW4QR6MLDx1aKy6RQ7BDSfjJWVCVKk8mcSeZEEGYFxpZJzJqKpaFktyNe",
  "key8": "3VNM1bB5zp6H6bAwG6gjzVrUCphcmEQGmjtKNhgd5dLN1g9Mp8kHXi1mCWaLaDyJp4YJr5MHeYHSZECvLYy9BvM2",
  "key9": "4YeQXUSg8akj83uX6SRVLz59trnDEwvY88sC6CyFitRDC2QwwPtHDJPVT52DujYkB5AM9hHnBbskfVexZuAs5c1v",
  "key10": "R5zMD7ibRA1Dep7ZQBhedSSd5nZsYhtk7y9c6Lad4fW1aMJiYPaanCCJmmfyyvf6uTD1BeYicL8DnYP4HW79d1b",
  "key11": "5EeeCrYmXiLa37uX18b2mdCjMndre87mXkLEX8QCChPE8mUCX1VEVTv8xo9FqNfFaNNQA43AaW1gw3KpVG32L9q",
  "key12": "5TDEczTjdNUuppMPkau8DsLGgNzhXviN65RzSJeMLfKcw6vdntKeA4qGhNqykoRjujkSqbzuNFtpfv8agUqyMXcJ",
  "key13": "4apSTK4mUaEmpSpfWtbQcUvbyg7uQ2Rf4qg1baH2BVdjmysEBTNQf7UnuvRCSTo2NzGT3TLv3CzrcCn4Vczqd95b",
  "key14": "3rV2BQR8QBoF6P6f4oRzCnfczQRTCFjGWLyF1JMtatriEFgswoLvRGJQbnFs2gLWUbDLT9nDARhrohFJL5kqUSoP",
  "key15": "3sJSdqeWCUDVNZNS9mYBgkxizX9VDGWmd2CAQTVSBjnL1b95xPJ38GbNizMeTs2YNmReLEdJJPot5haB7azQpcpU",
  "key16": "61LqspMva8yYNthskALk194dfpQpBfPFTzEx23G5pkRvpeWgvi62MpGsWhdPnRGvWsrzcbEhtkW27wCW7qPdbZ4",
  "key17": "5jjLrER3B1zGSpsUe7pZUwSWnxmNawtL675GWetMV2SauHPHkfVLc3s47DBaZbRdVCYjS8qjDZe8j6hTwYPEWECJ",
  "key18": "thGfZyQZk41T5hKipNCL3Fafi55aMfYWMbCmr5hsye8VKEUPx8P9fSjM1tU4tLVEHqKcMk8VPCYKoWs4CRWZVrE",
  "key19": "EJqTC4GiihBn9H2ifFHVTy2f1vknf3QZ5NvRvkg7v7prNLSgqHH8YrGkZWGisgq3KCh7mt2inV8ZgfUqYEH5ANG",
  "key20": "2Q7mNTxBmDzdqxB9emwBZM91LnJ6QfSvEQQPZVnpXc2cMmK1v99ED9oqxD5oQuVnqteZRSEJswDWrB39TbvSc9co",
  "key21": "4ELQXmCnkjRuGQM2dz8zjadY6A9uH89ZvKHzrRT5H1QYpRRYQiM4NiGvidbykdxKTg4ihUyWvzjepMduZDWxGZ2L",
  "key22": "4UEQSxaBsf1wncA3kyNpbwWz3jBBp2DknerbAjBDhq9sA2Pst1S5QwKXDv2CG3iFJeVLwqu42G8vQpYja9qLh7rF",
  "key23": "2XjN5i5GhxxS933NENhxkoqyTnLXqvQYkB25uyQ7GPuCrQ7Cz5ATBY9gb71kjZWTJCNUHrT2HrxLxqEWGTKbTcUJ",
  "key24": "4AMJr43MPWnTYp4gCamUuJsKvTkX1bxWnvAGDkG2eJxCGCQqbbBgLk8TL48G1iPEPJb5sEzk9edwoMAyqvkceKhA",
  "key25": "JAKURLmz9paxjsAtN4VNwrjUMhGZ7AddYBk9ExGUYiTN9U9GThWUJ4ysWsPimNat3WW4vGPJoa3bo821Hq4AFue",
  "key26": "5ebtGjmdZXvs7zqXtZxSmAS7hgdkKt9iFBY5WG9s5W9s4PT1HxDfuT9RGJKjw7RZpkEThqQc66ZAzmYERZqcqn57",
  "key27": "571AiT4SyKS13nX9sfrveYqjk4qB5NGGyzoGzgZXm8KfaUs7SpYiuvZSv4m5VwyvwAaCC4dhVEQBLLRC59PCaqLC",
  "key28": "5eM6isHFz6hLaxEspYEQMhRm3ch3JgSriTbLHFtwH4Wf2tzm8H29dewhdhD4EEP4D7qppk5Dhv8fj7RWAExq5Ajf",
  "key29": "hykDHwMwn35FKMRQfw5FMmxUN3SXrsUPkejsoLewq9inqwWyVG3GwhiWZfhqdkqjzntYFRsxetTA3UNASpJQqx2",
  "key30": "3s3u2UxAtqYEgnhdSYqioXo7NQuiMSWnPdF8tFUWF1uzqJiYbptDvNhssAsEpT187XySB8bgtttPQXdCYyLWf8RH",
  "key31": "2FP9tUYpWRPm57dYtGpnQj2Nc3w758Y72CFRgZsTFCebwvfwstAAFdHwje82QSmudvD9eR1SL3gQgbcSzKGdEHnT",
  "key32": "3Aj3uBjf48ZQ7DCpdHnjirnMfHXtzWvtD5qLDMHPGU1ycTWQMntmUAHAHHyahdL6XXkTguLS4PTZrMecjfRWWSbn",
  "key33": "2KSKDSgoo35AgANFuGW4zSUPSJ7vdpn3Go8vuaQEgifRRRzLUv5vDYqkwUgnbSmfzx2gmq1cW6f37kSXwiqGdNhv"
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
