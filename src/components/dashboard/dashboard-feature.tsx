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
    "614NWqisSFf159gWVXnndBoHUWP2igTEwGXSQspFiCTgZH4SiqN2XKozZqa7UR6wKaGPNi1pS2wNz5BFbBj5gaWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AEybAwWfXsrDWCFsbaFzVU7tj2QBgDhYDZ8DYSKhWfmdnu7SXpEeYYvTo7jK6WsWPnC7KpCNzYcS8CtqX84W5MQ",
  "key1": "2iQCkgoutYzK9RrN6rtuD89SuMhbVVn39qkmEzEeqSejpZ78CTZRQaWs5VMEGDzbymSiB5mnAoV1yFEPf4rEKvrk",
  "key2": "3zTdxwDBdeuS7N49Un1xbFKUhqqqZNM6Ar3ML4BNCMAmrdGbU8MH3vCDHqQCRfaTFLqDkCd3p4Rqy1kQmdPnpePo",
  "key3": "PvrLEVx61UCd6Za7XqWckaUGvnRem3e6Kew7aq3rQfaEwKfjcWKWcbTt4W8QsuBzjpHuahDxRhjgMDZEFEJBU4X",
  "key4": "3kRVVFEUhWk1YwABZ2dHnBt1aXBkz5qLY9yBR44n7TDNcpV2webxpDsk2DGN2TGqGohN3Xfx9rGSGji8dmY3htoX",
  "key5": "5mv8gvjSsr5QXF2zQHimpozW8ttHb4ghx5qAi97ouyoPysLV3FyjqTyQxq2pv76TrspcZXbQymYLGiRWfqPXp4Dh",
  "key6": "3H1mdQEqVBp67y5Un9R2ngCeTRMhaYZvmfDxmaJpsSewKigadLkCiQWfUY4Jr99M37BHM4bzy49Z57DaFfvH2CRr",
  "key7": "3wmg25N37QGAfERregHcWyS4tgcUsCQoVa8Ms8Yga8F7YE4eaGWJx5oDUcbDzoo5bpwrjmb7THGTWgJbj9PtsETA",
  "key8": "hZk2csipAboK7rqUb28Smm2XngaJk4diXoHrfmHXhHkVWySAbJQwmJhoHrEvvpvfSz9HwE1yLghysz9fGnZYbF8",
  "key9": "JYXunqD5vsHZgYTDDaCr7X3DbC1s7X28c9ddwe942XzbnUBA9uAChxwJzCHEj7tC4hab3oEVvCY3CsiM1MWS74v",
  "key10": "3AUX87gAoVByqJHAbC68cpZskYK9svrLNGD8tcteMWyz3UFKiNcnW22cYfZxy7tDqmnj7KNbTt7Xce65A4ne3WmP",
  "key11": "rd52suSruhTCMEAi1XMbQJCiNKmTEr2ZznZA9tpznaF3ETrgJR7kqDKyoA3eu3ycc7CnWrk5dJeh2PV2Tk1iQ8E",
  "key12": "5eH1vSwUh842UP9WtffY9tt4uyFuoCqHSRGpYX7sQ6VWc4xs4T7Vfs7wGLPPHxGg7erpc7wiuXrx5nsFRc8eh3pr",
  "key13": "5hZoteoLM3kK3Ra5rAKmPaiJrS1D4rH8nDLtmWebR9rwjGb9bq7ajeoj6SCNpoPPabi2CeLAQQJHaaZXrNH8H4ZK",
  "key14": "SwgBCfq4Zzai5MxrfQGBFxY5Ns6g6eeL2vaWkw4UbT8pZs3tWWsr9qZ1zWB4NnnjCVeCxRcuGHeLFM4nahJvxJJ",
  "key15": "4z3RqiTKau12eQ4MVYtnseF2hFAMxoTsWTKos2f6AuqjWTzaYYxLm9CAf5zrTGqYyfBx1GXnyYTF5E3LyNXHjCno",
  "key16": "4tQETL7Gd7DN1MkCrv57ePUKASqByZ4tpbSNs1s6ux7bahDmDjCCmNbJ8LzRxLgeSwQtgmW6a3sW74DousrFZrbE",
  "key17": "4ePhxbDDSLzbzxbkGztzfTYErR2RavWPpNwBH7xFvnuBx8bJMWj3F7eQJhesKdj5yrRRDNY73DaCS5BioXqY5E3",
  "key18": "4cPakmkKjEkdxTuYMDqhWdUM6GefNkG83pC3CMx3ZR2rPNb5RK6wzPPDmy5kUb5q4ZKFtzAysTYksns1d8hE8gSo",
  "key19": "3RYLwpA2xxkKCtpqabV4DsiVsih5qNq1Ssvph4ncsSEkCQmMYo4XifNJqofBHjNWi3xKmi2Xh57HM9EzL2onibEx",
  "key20": "6565DAXCrznZ79eu7HfjsFnEh4UBuzEsuPHxgg8ujYv4oEANfZjz9fktA1rQzZ1T31dbkcaXhHaB9LtjasbaHaJS",
  "key21": "3WBURNwkddVKfSYy4TA49Gp5FyWt3E8W1Kofj59xwC2comMU5pC9ALkUv2ojg83qzCBpk3wB2ZqxvLwY8Cfaq8FA",
  "key22": "2uT4Ur8cYSAMtZYUJB1Wf6u6nGn7fGYsZVCxDFjgF3zmnmqYFgC5zmKzwrxUxvMYoxpedCXnBbhVUbWTPE9BaFJb",
  "key23": "3qkK8vCXsw7rXY3vnS5rbCuLErRbJpWKrQCK4YnPkWFUPmgRi83RuVvgJRwHizWTD6qcqHXckgETE8t9dCL8C5KF",
  "key24": "2axK5KRTTqHtikq7wh3h8b8Q4deBDwxYVLzjnrRY9j8uNcq4odbKxs8V6mrCUCAA3Dsbw7q2Z1LXJMJdgimqm6gT"
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
