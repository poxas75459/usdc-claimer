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
    "ruk6sN2GeHRQmNgQKz7QUVxKEFFdMVSqrL1QjLs5e7ThGyQtAX8Bah6x7Y6Vrt3Mr6vi5BuDNm3GVLhPLTXQmMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iu4Up1cXC3MpxtQ5yL6MMpbYEJnd96S4g5WuuABUCrv2gH8vLJc9EeorXjpQKXFzm6iMzkgy9REBVxMcg7gymXj",
  "key1": "4EXViEvVtta2biAa55iMcBX784Engr9r7MfAVRv412y5jCYCzY7iFnA3iiJYogXwcRo57nJDtySMoYK5hBm8mQLy",
  "key2": "4P2JsLcP8Ks31f474XBR8msCrCwJgvfV9379gTDzgvQXiaU9RTgmU89DdVG9eFJPNu51jmgGtiKwd7BAakREsTif",
  "key3": "5NamviUm479j224Cc8F6oDGzkrGHQ1Z26JnknSFLj1t61fSJDVTt8czPuwrAordDsu5jAbkUSoLvHFJ1g6AyXar1",
  "key4": "42DaafWMrznnBpdgnRKJtiBhtNLgqkeXTpbPLEHnR5XkwyGWsjkECUNKUTBFE7V51icu8TseNZXsEFxVsuALUusT",
  "key5": "4oK4nhxAnomz6dPJPQnmRf4KT1YWvLLhL3u7y67h9XJC6vRfLnLSoPrQrzAFCi4me2qvEjBjjZAK6HShjAnZXHBi",
  "key6": "2Fypv9rQEoY9eHrNzAKJusciUrpWQMQhyuS9BDELCzuPJPab6KVLtpAhtYmbTzwwFVs2uUg4Lys5GLJsfXnMNEjV",
  "key7": "3yWkrKznP4KFx6KDL5ScK9KJkq6bPAjmXTv3UnfJSsXcG4yzroGgzDk57opYgCKkzd53SsBEGGGDWXthCWuSMWP2",
  "key8": "5FR2Eon4cwpf1GMjPbpTs1wxpchxenavEnAvYqR4oAG7kPtHaA4x6EZqC2SzZVQWdsWEddBow3zccsB8Pz7Ctj8D",
  "key9": "36FKxpUUs4ndW2RPK4NRUJho7Gy5q41QwAd6gEG7AZVjRqNyt5fSfuH9G1UALSecGzrwW3A231cAWB379RZGW124",
  "key10": "fSq6Xo7zPiY8TGbXHcnMWjr8xUB9YcYnsP1FwXcjGqcDkg7QVzRau76LHhfiqXcWNBe6kf4ZCRc6DJXqKCdCNjc",
  "key11": "5BiMFqGRvQVysp7f9mZm5hAX7ekf8M2YFy5wNh75sKSQGx97gXYiY4Ef4bpQqyqernhVYhywfLDZe74S38gu847b",
  "key12": "3L7AfYqvcFha2X5vTcmGKqgbPGsnMTZFCqjHZpEjLf5QPwfJptE4xFPryRr5bh64f348Uzd9EF165izgeQZeFEgq",
  "key13": "5rFkdUyXwPS7TTNUpgMBYJK6xsJDCotooXsNRfy4LQePC7KJ7yZMQPhkMDE3V5E7Rp6aZtTkgYt3ZnNFW7iL2Ky9",
  "key14": "3QFjNU3JbyUV7B2xhUEa8hRbKU412nRUjynHQhNnacdLFAiSUzmvc15sQ1H4mM2WoVf2FYjTXrHGg5TxhYccxeMH",
  "key15": "3EwspSeGkBpEa9gRMdMp1vRQs3GBWhpmvPSjEAFL9hkT6y3MutvpUv5TjBf2RSZEMhqpCfjKbcWtsr9MLmTrtcUL",
  "key16": "zbiz1Tqe9N8sXku4u71wQiqruimsYSSCmhJtwy1XiMQk6ntXtPr2Qw1CXQU8jZx2Z5w56UmfieWhjHBFV7Y3dJR",
  "key17": "21xkejeNkXdefMyShR6yoTgLSe2Hs2V8CrHWK7GfhZYv1BnwoR5gHmSze8byEvEhowBZ9r4BSeFNqaTWYXi9MnQb",
  "key18": "5JXgYDeBynNRfsr2xSMCTTjeL4oXtXHXjw5B9ebAvDqUFzEAhRjqRZHwnTMUVk3CBTPQRs87xatnYcUtma2ZmUpk",
  "key19": "5sf6TVzgRFMtovnjArsUDgzXxnyfBLVf6rtXx15gCFfvCqW5LipeH9aMR4j1L29VmTbb6RwgRqRhEBtp1zorx4dV",
  "key20": "35xXcxXb6Wfnzb9Ukaei75LVggu28tCPApqrBsoPJ1qeFMmFZsD3hkKLS2wBDZrj3NMkFGiiA5ep9kvd7xhgYFxK",
  "key21": "3aFUHsMsQudNcBtwq9kjk9CUYegVbwiuMHpqXErNrjPZupqYABnMpYY1Q9x9v7o7gPJkWZHKGm8bnuZTBqRGNLqr",
  "key22": "5QLJFBZ94uH34wEPU23wYe8Wt5xypaRMb7CXLJyy9PFBwsnd8yyjtePC95thTtfgRy2VaDf7SWQwyQsCqaRSwUwh",
  "key23": "4VUxMWVHc9KeVTNyxriVb8y6gpYFrXT9gkcYdxKF6gmuRpNaxg1auRZBpjFdSEKvKTw4r7rCATtwjCQMG89oRBzN",
  "key24": "2jcdnEwDaJm65XnTjw9u7DJCM8VwYfrPYGG4VeXXKG3Mpz94GFKGMQmFThs9xmSqPyvWaUcZEUy3EbAqeHDLWjBo",
  "key25": "4eCaqb2uhhQg2B8QiKkJuNDQgFRxpHFmYGvr2jS7k9UjWboxiydMvRtyZ1TRMJsFgFb5612y2vXe386TigMbX4Xz",
  "key26": "DAtAp91Czi9yUfF3kEqWauedY6bUUYHGFxqQZL4QgvzDy4vpaohDZNcpjcAauRDabbMmRUSUZQkvHvwPbmtdHVL",
  "key27": "21oYxv9mLZ7cbyAxBinnefsTY6yCaPoBYcVGAJGoRgCBvjreGHqDvLjb3cbG2Wzq2LFAfM8azpMLFQRqwkjxUvdX",
  "key28": "5iHGL5Y5jgo9eXqnfsqyDJtrfqLug8F1eqC1yvV3JsbrHGbtvyFmyjDVi14Yz4UDipNZyVfT53j91BXE43Xrm9G4",
  "key29": "5gZgB1LxUynq57gqXD6gv9kZ8auQfYgnV3jirzmgtK6gdsoufg4X6NaCV5BcXJodCib7p3YpwTRapGCrKv1LKST1",
  "key30": "4EJ8UgFBAHjVcKVmawGydA9rjscypNG7hehCi4eZ3yMVe11X3MZfp47cPcSPz7gfUN2NYhQPyt5qGvi6K9cn1bGi",
  "key31": "4rMJ1BHoRUGRBNHrunJ4ssJLV1Mz5NoPXhv6kKwdyofGRCnHy4QffnE2iu6VLxhd7SArkmdKwkU2uQAPvkQtKyoq",
  "key32": "4DbXch6KwpKEmtB8RqqzTKWooX92F2EHZGbzpsb1SRe9Z5cAKFKPem1j1os6bBpCWo62Dnj3UCiW7YLA8rCLNi8q",
  "key33": "4uhBzwTsdGiFpDrL76bfDhmv3ytQeKo7rEeDPRAMEkSTcZ3zecQbAvKB4MxBRveU9XhJWKtNRfjxFQ6QNKNEMAmq",
  "key34": "PCJrSNV8i7sJDuxaa167VKwCL5XLtdjTcn8iepnCfWyQCLACtPgvJKe8iyAohgXif7qF85MewoEBTbwcDQZoci8"
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
