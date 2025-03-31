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
    "3JFk3WWq5EYJDDETRcYHSfQP6pp39p65jXhYWjwYymCpDS7XSxDM7FPPYb3WRjwnuPHr6RXM449AutDM4tE9v3Ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eDedaZZsX2D1xkQyVKirwMg5winW33RQyNbMFaRsRywgNGipqYzV6jBT3M3UVaMG34vhzoz8tCpuNzZjrtsJRo4",
  "key1": "2ZaYvC1ZtHAZpUAXUHgA81udnZtqxzZQbgdU79rU4iRXoBHuoW4DTQgVBLkG2PH2B7WpDE5EpZLh8d8bm6L7s6cS",
  "key2": "4EKwJcG8jwEhxjUyTDtrpATC4q38Qm9nX86hocDm49xFrbHidXouX9tzq7D1Tn1roTqYCGji9qW7rkoDUFr9kxbo",
  "key3": "2cWVMLePdV8HtHhJ2VdLpRG1ED9aKBbqnjY88JLjo3a71Q3yMWArAoTrtfhrKP9v4Da73GemRcY7veJLbsjLEC1n",
  "key4": "3erdNFitqPTKHySEygWMNVvqqKHxymZPnnDvvwYUvuZ6NLPJWnF8veV7A2xH79eu3DoFvEUp7s65tJHZwjA43p32",
  "key5": "5G8VQ8iVKVYqF9yqsZCzDzT1EFMPCRCcvQQdTZk1CPZ9NCNEUKKnr3mPwo1zPCRmvHDrkb95oJfbQw4qS8NwccJN",
  "key6": "mjnv3nWmW2pmRwgFdGrLKcJkym5G9NPtanmtS6M5po3W9NtQmAtFz7UPgo3fk2Zu3TCJJZKr8uzaDxYstme9DAn",
  "key7": "5CDTdPPZSpzwTr9rrLr5BM5brvmufakoJ9JGeevnngXAtMtEojD2X2pM3GWJ1TtYxqA7JA2158sbuytvYU3ZPTfC",
  "key8": "416nL64NHz29evC4nds7MoUW64cdskqYHw8sbZ5DSorCPCwmtVvNAv2UaqNf2GCx3kasPJQND8ZNaZZu387BV1NE",
  "key9": "4WdjzNz5ANJBy8xwaDYmJpHeyETPwC3NjcTELG1pNyq3usxsTCZDz92eM5HZeSf44q6SsP7NBgCwtbtPvCPSi7hR",
  "key10": "2VuKJZjqCGVKJyTi1QtS2PCUpTMfaCEk64P13HkoYdTEMD7daU4UjfpXymqY7Uh5oT1aUJrAbDr6bVMFjrm13hWu",
  "key11": "3MSpmptkDWQGfQgrFsvxY2f8q2678GSsjGMLbRqh4nEmGv9BynEJdFDkecPh5xcwUu3dbWKboAEv2V1uFQRD9oZA",
  "key12": "2HzewTScHxXw3365pWtAb8TBKby2D3Y7y4qwpCNYXrakm5WTiJZk1cgFDD8sqnCjSQiZ1eC8ceGVTC1qqfpHS4Qp",
  "key13": "3Ty7y8tbHSVvfAhZP7REzcsnDLVMf8EYDqhNxyZzR5bTHWvWG8y7DuGPqUuxJtbVF7h4ueTjFxAxy8cvUgmoDKwf",
  "key14": "3sk4CkkwnSYJtGbd64qYg96Ne7hMg1HEZcjUMV2dRuomeXB5uShf3KLqE7JqEq3kAAJZDsdgp1mE8zeaS95Mni7P",
  "key15": "4Yzw8nYqztwGc4QtntdwgQUAoEX3JUiirXyYMnccYm1mx8Nk8MWPAXsQYnqJhsWoMGEips3oh9xJGU5Jv5vgUwL3",
  "key16": "hphsn9aRisYsd47DGa7zqJLj2v9bnf5RZPZ3L4bpjoC99cr3c3ZfCqf7HEDahPGu1ELYWKX8KtkRHYTPpqq8zhg",
  "key17": "48tCZ7JY5KTX4SsgjcEjtauz72HCQ5nTa3G4Ymmmq5tAqQ8CA1D3BC3iKPbFu9HJEsuVGYmdeDREtkRizdnd3fED",
  "key18": "5raKLCj7dRVB8U5ffyef3gtgnPVQ2EPzijN7MZgZtPgkyswyuTbwFutzGu6nH96Ux5WWCpvHYZygwJJHgszV1LHz",
  "key19": "3uJHcJuFMTQoHwE1Jd4kyDHN53AkmKyuTCeLh71wuUvxxHAfyrgXdjmrL7er2z7cpKbdJ5baXiepu1mwDYr47bG8",
  "key20": "patqAyju9QzHjBL1A2cSqBCqF6Cxy6jGyv7Kj42WNffR741y6gw7RKBurxTo9x2mimCVug13y97XBGrfGEqnSHD",
  "key21": "5eFg3qYqQeoNoj3eGdT2NQhqxBnLps2ozsBf72kossjJA9DFCcqWT9jcMgoKoA9ug3pKicKbifXcFFcgrR1Ma52K",
  "key22": "EnxTDAPDEYHJUQSJ69WoG8TJxJToZ2KGyWABCRgs2ghzj1eC1WpDE4BHCccjFxTAkL9LWBCLd3Cyjwvqg3BCkcd",
  "key23": "2KZtFtdUQu49vtEKJtn6ZDz3sSihskNzaDZcpvkEBq28KptSZM2KGn63TcoedQAWormg283cqqtmY9ZRc9UPUL8p",
  "key24": "a7Z133Bg41ppFGsqpvX8HA6VQSGqBopT2XFnuym49KfQXNTauaumo8ZcQXmat2QpShDNF4b4xzvYuvMN2uaRNg8",
  "key25": "2CyNZvTUcpu6VYYL9E5pwuY8mUo2upv7A39WNkrt6wXATMKMH1SPtpp4Sa4Lcr3J6KwSrQEhMphrbv5jt46fdWjH",
  "key26": "3vbx5DghN2fVtGwHu2XT2gNeTH3QmdJcUtF2dYrmYoeVzKbraELoA6EtMtCyzxAvVCCmkhq6FxqFFeWXrv5jB5iQ",
  "key27": "4hCKGZ7bYP26CDwqLwxTjpRWPXaBf2np7CknwfRZpykscdxqPtWqXxDq74tN5CK53tm1edJHz9T7HQ1byn1cjvgN"
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
