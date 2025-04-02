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
    "4T8mPVUTKhTLXjqeo3NEWLhsGtTpLLqWvaL5HTTkT7xxRhmgEcNfcXshU7D72TktruRuAkFwDMHctque2id2eJcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pjB4cnW2uL7MzWHYRYtt5L2dJUJMfyojzwuJgCLTjVaxoczLgEcZGwxEJ3fod2YqJBnKvwizGQRYHKmRBq8WYg5",
  "key1": "K8pJk3zHgBDddzfmkMDNxwNy2x9JViwrw6o7B7S5PupSyD4mGfdwiGdscWZbYaabrtGMhZh6qvqvYySCmku8k8J",
  "key2": "4bHkMczXdyBswk6r5LPy6vLaoZf92bSANHvJdayuHy31uFVB8vK3WivpyPmacHDWyxJBAL2456b2nkDenSCEtXoT",
  "key3": "56anhu5rajiB5vpGGpChPZR3JEoenvbXFd6QStnXWjzis5SUZXtBiV5Ewj5YMT7HPCaH8BGnCVX8c6AZRsx5eTQ8",
  "key4": "3euQeRNik8Up5UKhMDuoBBDUo6aKZAAxywvEujiVMYvFYej7ABbRiZAp7faSr7pKkywQpk4xjWKfPAceaKX5qLtr",
  "key5": "5KrJv3Nw96AoLZqvuXRSrHuc9JoR2oWvvj1M51DB3dvsyERUBvDA6SCEXgqJ3sFEa2dTGKdm1WazSFPepvLxpJvg",
  "key6": "44tNkSuw2QAqFkFctsRSWh1ABgd3EJPa4nGs8Nc4ET3skWCZtYJ7rhhtHCE32aqhKvEPHL9RXmn38ZEKnysCo54G",
  "key7": "QzpQE4dN8NbFKMSNbhNjJdmsA8esgJXXSzCP6FtTvp4dvp3dsVFhzyi9SYavvJDydbrzwoFWWYfVaBdGcwVjxbX",
  "key8": "5yvmJ4wgrSxrRzBz3qn4BjAr6FtYVrSn8QnvZ1ZQJ4uYXcJoTnJbM8z6h8Uix6KjWNuMavQNKR6ykxb2tu3TMtjm",
  "key9": "5LJNZJp3suCndtgmdPLFWbyoXjqMYgjMjPgWxduwPuHvAohfmLwhMRLnvb5YLeBMQkHNdW5UfMbbkbUhpGkyc1n2",
  "key10": "3bsKn2axe6mafAeE9UmXpqNim9oJcwfTu13AFUUHSJXn8a776MTPFuGsrmW3Mi57DVdwmvnH4XLfjAT9paYNwfQB",
  "key11": "4GVGiKYpvmS3WQcb62SY3mg16m1TtvkhWa8ekiqEPZWY4QYykt4idyKGM32nJyDeLP9Q7wypPkUgY178NqN9cZG8",
  "key12": "R95yaAovyiCP8vcVrmMMtmkEtRWkKh5Tt8Ug1fTXeC7xQyAZJJkRij4xJQHpGA6AU4xUkHyHz38rXgfP8mYwGA7",
  "key13": "3SWjQi5tJ7aBeTpHSi9dnrCh2RAZXCo5BxA1i64xaMZox4srEqE1iLfDZH28U2r8eUYRsEGy7ZbnPsXbEz95ouNe",
  "key14": "3j32Q7AG3nXdLXPG1sqR5wfUvBCHaDYYbzmkkEdeSP683v3GTWnVQVGtXGm7fC1uW2pU8ob45cPDnDhhV2uAqvDx",
  "key15": "23bkBsJ6FdLWCyxEjt6hhkTEtBuyn7hMruuLRg6UUDLV24kE2ZX23rHdSEDLTJyf4cmPZKhhQqiJXHcbgYGFTwen",
  "key16": "3xhayBGjxJCnirMrb2UYZcz6NqEyMKaiBUauZzTP5kPiBNGDMp3P9E3VAssiVZJXspnbH4jPYsR1Qb4vD5v1gNod",
  "key17": "4A1vzi5TVjZ1rVFBJswetGJT75Xo9aTaXGx4XKzR9bQDXrxqKLjMY16sA864xuLkrBqbPasyEFHFXCLoVq7NsWT9",
  "key18": "3wVQtKVVapLnTQx7eWGt9MVSAWD6qM4Xvs4qFz5dRD6xTQiajB37z8zFUKhG1EVtujdCMiF2m1bCwg9WTAxnoyF5",
  "key19": "45JxuRfxXurMHUSDXrw7efTi34cRv45jZWahemAsCCidXSMdh6j5dVqUsNTcZgKK1eJnuFf5P1iSSJyyw1exRhas",
  "key20": "3UGa4FvCTiaY7NzPgY8ossqChXQWRQGP7MzoMRy7hshNm3UBdW6DBLi9MavBKj3G2NEAc5JJFPimxiV2ECZoj2Fe",
  "key21": "zVGobr1LenJLyrpj1NXMh6rkbGy3ALQcbAykX6MJrep3Npz24b95kvdqT7xQ7S3fvpTxzosBWsZFDWCXw3stC2x",
  "key22": "2VmVN6xwVDhb1E6z7M1xTVAHU5cESNGqUnVg527unRT1mkf3xMXUPM9n8qBmZwp9Tw1cG5zhZ7d2ZAGPfXLFkG6E",
  "key23": "5Uxg37Txbc6x9atuXkVo9C8cuWpvJVZEFE4vDHdm8QzGv9e8bMYjizV5LhN69tepSQexHkFFaD8UL5u1bM4tTcL8",
  "key24": "3ikBQysSgd8NKH8VU9An9hvLoRQTXhsiLxfFfDBxMdpo4t3TNcxwsjNqoNnTuHy67e9aeuoGuzSLEs3K2BejEfj6",
  "key25": "4rHArNKzVzGc1vy5om6Zgz2t7FoKEpZnmEMLfYcfr3LybngMQaprBeqCTWe7J6HCvJGP6B18mYNQEsGNBohrg5C1",
  "key26": "mTP7W9gy6q8nakUBCRtMakFpR62wdzESYAun6oi6KjPaCxbf62wzvvN6ezTZWi6FNUJTHvHnxkdVzZoysR1MFHq",
  "key27": "5sQ5KqXwfJyEM8RfER8w6SootTVP7F6VopW1vP8QouebCYvU8Bn8Rf2YioVbGspvy7RAw6Y5PpTKgjyfvzSBQvs5",
  "key28": "KtemPJAwXpbAK374XXjj9fUZxnob3S6FRAWKfWbUKvqHCWRjpdpJWWxFzxBPHqNYFdQ27JnGBW1oju2HoSUnwxu",
  "key29": "5u21JBs6rGQKFdtJuVbvubG5C7uZDK46gQRXD24HwR2ByaFbqLXyAP5Lr6SUETpzpaop8yCX7DhaamZqTh6j1Agj",
  "key30": "2V4vkAtmfJvjXMQMxHM6HRs236QZrdWSqvLgmiHzqy7oLWzkfGozU9GJycYBWmqbYQYxetpro3XBjJv1YcYvQxHj",
  "key31": "2bQFb9YWpZXHJRgBoWwsViyXfMuuLe3Hy2SsDY9YuikULLUa3rrRs3ofuo8EvkRK24pk7H9Ko5cEeHEqZLtXyCjF"
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
