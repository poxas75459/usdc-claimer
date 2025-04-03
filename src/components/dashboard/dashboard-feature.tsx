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
    "34rdYHy3eoUGjYT517pnVpQgxAcTrQSnUz9mRvxsSZHQ4CyKq1QrtJ9eGT1a1of9zW78RCEWxgrQfWwjCEGPzU5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hav35mfpXTy9y9ThBuUwRDr4x2kcfrecdFza4DkutDEqQ3Ec2NRJWWNquxZCE7cuK3xAr5xZ4z6FQrMWS1Q81D8",
  "key1": "3QSLt9dYpKcMemp8eGykuxDR3armdZEcLkpJe3NqLs3bgeVA3f88fBKjeMPoeMPAVniKjpKMjqrpu6HpaybHFTNp",
  "key2": "4NZa8L5e5PthqNtcxFxmiph4g9opsGEiqGh9mxdvoozHQu8Af7bYya7B4k9g5zM1XmpCLr8ohfECcs5s63Qm7w74",
  "key3": "33CHRM896iNcYC7g9CYjkviM21J3tQNaUrKiNfsTxSgeR6zEq1vvwq45xYg7CuAUQFHiaEmk3diBGnBE8MoH1RQ1",
  "key4": "5gu86tEa6GJfdpP3NExVnhKHtFhsyuN2oZXS9MkeCpCHsJDaLP3t1TFQ7iEy8rxNQbsRK4rQ86unZV35veGkobNW",
  "key5": "38oykwLUq3M7KGJNzozPfvjYUshGMfBBq42LNWW2tQv3H6ambe9FUhZYv9V5Zn6B4jUqNjGNY8AAbsJpL5ypfbS2",
  "key6": "5SNfxCfffq6EUB46Dx7yqMG5KR9Ao9rLpveJ7M7FEhoC8xzJNwYLDTqfFQpLxddQURBy12k6hc9pjuMmgjC22uJM",
  "key7": "28W53QwYvgEz8EC5i2kNVSw7uN2oqgW6Bgeb5b6oXkYYJyiPmyuVVa9UUBG2anmNxdxwJpor8QxUUWKGzxKFUt6E",
  "key8": "53TiTjsVNHUpc9mgWBKEggzY7ndYk6p8RKrmD52UEa9K4tQFZXhd3gF5MK7wtck49ibHLqdDhW2R31s1eKTSpED1",
  "key9": "2AZGJE7FAKX2QN1fsSgTk3nb3rXyZ1QA1kzKoF2rAp8kBkoSZyqWSUm6SEfdZQvJsfiGVbX1uqpficwzU6NifDWM",
  "key10": "3sBbk1GcBWpZCuLeMagQDnVLP2Kwj2S94v6iDPcWVZPnqtzfRwsPguZTtbRhJdgsJJ4oCtGmQHttDMep8vuDwXWB",
  "key11": "dEerDC69gH6QNV1CHM1GkGd1QkK4U52vvvHsN6zdVkgrQWRmS5kX5bAjFsUoooLR6o7sgpXS36YwjTHGekUG9U2",
  "key12": "5EhyBPp5NtzsZYkwcHkUjM2SFFya2Uu3kHN2Tds4Rzg2E2tqnd2AXRGd76hpzo6pGgPynXU57fakxkY4Nt3J3rJs",
  "key13": "5yiHniZ3uMMX7yR25J9aYFhjnfJ4wTLNe6HKj6jSWjqyYsWfDu1HC7joPwjhVPtbHMm41MrE12PpEDuoy2v7QmyK",
  "key14": "5UasyVM6Ph7waeJpVPnfjFqqfwMjQJEbjWD6XXJoHuF9GtTUtH4RQKxqzZvbLxDrofEMtEfmGfvYuGU1qEwokRA5",
  "key15": "37AfXohCzGhvx4y1GST8ndPR9s9PJsmYwz7Pq9o34bFURMEaZKFScs8RZEsvruzwHLDUW16NiQpUCt76GhXia3th",
  "key16": "3vgtwvqQe6MknrYVFL374YR9Fxeg6xAePPuv6dSBakYophkrSPi7wjuUgVYEZFDXvVsLf9qkU3ukf37iCYAVfdVm",
  "key17": "4igz2YKRna4h3KFLYso3y1jJwMMVN3RKDxeGEB4vCXwhENfiDSfCU1W5o8kR33RL2LN246ePxtqRHs9mjLVZtHyB",
  "key18": "3vLbdhGQfS7QvBmw6YaDJfcmqJWBJrrU64bs8DgKmwPY74vNNxjWJ6okMESgKXoHAtZsuMeg8RWyiV2ynKcisbku",
  "key19": "4HgwLjqKVDNqi6HLVf9y3CbBt6JaEuBpfWTLc545Xh1nkvafnh3UEiaAUPiLjPBJJaQ3qqowTU5muSPLPPNErcHe",
  "key20": "2nkS2MsoKdMi8Pcao1xMsHcxJ7Z48Lb3R31yybkN9gNAqDehqijoX4HipWw14NyDmxRLW3BryUrnXYGW5zTtBXXS",
  "key21": "2ff32Wobc1zgJRKRjC83g4DGGUwWibEzoi6pvWdkoUBrCCWA1G8FVPQyGFwZaZWT45bvh5LEPoGHmP6JCnyRRErt",
  "key22": "5eA5bEctjdEvQ4eFDzNsoENjDNK6osLz9hox83SfKfGbjd18KBHXBhei4RbcP72HHu1x9kXABYwawBmEnWhEhKi2",
  "key23": "LDis6SstipuUrBdNDdJZ6WLocbq9SWrcDzJKDqPK81TUPLiQ8znsnuViPA29qRc7ef61Gu4ZaZzvUbih8aCiRbF",
  "key24": "34Hg5qkwjMLmkVh9jPC7UuG3QxCSMcoAKi7BbLgmvZ5qH4tqpyWvyvAwT9TLU6r1Qt41o8JAQSi3Hv1n3j8WUPx3",
  "key25": "2NDFnZmsLaWiqHqru9xL4G5UL7egwxX3QDwSHp5LSCmVZJE5o5g2nWYqwE8LUtxV7eYVg5DTHbnp5PF8taZLDMwK",
  "key26": "4RCEBnMUsm5yQjHLpU2NXfy9Gx2sEgfBW9goGUzaYtFh4YwHh6sy73cV7fT9UcoLqHSk63F59ABN5fJsFkpbvGv7",
  "key27": "3XFYxURgrpvjN8f33ET7SLCWP6aiXEMVNXovXuMRk6uJQ2Sbyb7VH1DanJUVLa7mKgKCPDqpW5kyzeesGEY7w7rQ",
  "key28": "4vDtQAd6f1bd1T7ziNv7iC5nLbZvvbXbi1szvfppUeq7xsE3GtmW3Jx68YqxX6TjBYjztqi8BHVAy2dWvMN613eF",
  "key29": "3iHR63cD13Zy8c795F9ProMuRDLx3Uv1i3eFo9mYFJycfmfB2F9Z6UCxzyVbnez36vwziV76sYbUr8NR5VkFF2X1",
  "key30": "5Y9rgpmtsqgDVuiXJ8zxKbXp8aKfr92P1Tx2yiMvYygKYAvKebmJahybch7h72V8jwNaxVC1d9k4aM9UyQKzHeXe",
  "key31": "4hNVTAM34A54q5wDxGr7P8R515xHNGuKUbXPDqeVcPBvN7Xyvmbewu5WULVBeeyShYATYaDvcELW7DygFUqvKvrE",
  "key32": "21YyYhNKJQ7tWUkc7Q4e3rUka6uib56yaqfGQmj8Ln9wVmZ1WM8KN6FF1ry5i1ny8rmynfiQWgD2PSjvoBpF5ETL",
  "key33": "5BFW4Joc3dNy5Yi19aScSdizYQxeiym4QG1FazFZj858LWkuL24UkHxwSaQmjunLZ3M2zKSP6jqgxXxjvTfZSxPC",
  "key34": "28bskbtD13r11WuibUHfN3pBw3C1W86x98izMc1KxynmHdukd1ZoeNMMDfGBTozzw7JxrKqRG2iByjqShAJDZcuY",
  "key35": "5uVsmz8UhEKn7FoWASbHomrSUANH4wJadXyFmcKuW57StX9SMrn8EPeZsmJYqrJdvfnyj6McyBfuAJQmi4Wc36YT",
  "key36": "3QsYZoc29ixasnGEUj5S4mz2qm7fryDduwPPRpRJi3PVSKX6AWfGQjgPUrXVzJTdKZGwyP95gnNSN9nb5xGZSrP1"
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
