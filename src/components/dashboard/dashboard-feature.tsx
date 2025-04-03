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
    "3EsCM8Xe5syCMuYYsiy7mM3g364fPKG9gL8NruR2rxPNCGrLnuAj9yX4JisP1FdDXPYadJgmbQFrxcat8bCTkqZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Emi8pFzwrwgkrTj995YiHbS57FyUvKPfaXRwQhc51bK5TVmv4bBGkqSvm1s9N4D8gBYyigcqY4rFA52wZmK5pFH",
  "key1": "4UcA92ELMBwGfLgfKaYq9UUo5HKjQJdEr4FTN7mc4KhZbBse6smRgT16UGmf9pmF9mQZNdgBmdmDhvma2JjX2AE5",
  "key2": "2RJwKgPn28cctCEesq2QMoRmQcpzYXTwRfe5qQKwETrk2ZPnrCdGGfRsjf3yrxYPqXcp9BZjWMnhb55GCPEPBGpK",
  "key3": "2eojw9hUaJMZKvLWrZQfVbZAUdq2yfpK8dhi4Ccc6BmpMazSyxK7QxF9HA37AYNkN99adzioRVaeAFkgHvBPLkvX",
  "key4": "4pgp5AHjXUrxLzGix7MSC6t7PU8TjS9Vh27KmXW1rDfPni8qHvsUhEWsPiLv5RxPTdgW3V77FGaELG1JbMfCM3v9",
  "key5": "2F7k8TnTHigNhyBJe78ckYUaPzMy4Gm8DaniNpvgGg2pHAmmNHJe5c3Bnb7NvYgb82wmi5ye4pwdY8TqQ1XSUW3a",
  "key6": "4Q4avKrS2ok4QH9tBY7KtHvLBZsLrNiwgqwkW3zUd7uaGYXucNX1831FJZnGXoMnYFzfV2mYMUnpvSo8Ghk5uSHZ",
  "key7": "4JjRDuM979nPxXZvddka9vuhNQjTfgcHhda4THGR4mLSaT8dFW2qkB7hQMxUjpLUmADQCdyzWMELVAod61MQhMk5",
  "key8": "g5X89DVYecLUoTnt7LypkPcmn5sxbWKQDLNtHZgnkbnzNY1zQmxv2thqo99y8vsNNH6SYkSrNmdYgsrbo4YKzgY",
  "key9": "P3cm5wxBtmdyHrRLwZnYja4W1jnUh8obDNpYRTqRhfqEr4fARtCzq1g9ppxG7QrvukT7cGWRDjRnb9Q41fDLUXP",
  "key10": "3h2U1sPfbuoesQdu9L67vSb8q33mhhjecpoSABcFrwES6L2KfhFZfheRr6HAFoVy68zapGk2S8nCkc2DiigjQ3Ah",
  "key11": "2XsB3ZqVwNcySZ3D5LvfmMaCCNiQ6gkE6sekaZ5feK5BbNYY4VU2hnU9jPmDVhJEjrSSTv7KbHypVhfjQAA2FhUP",
  "key12": "4xuQCWKpAPzeA4JmTE41nhCFQYXCvQzjKmFN7gyGE9C2EyZoVuVLSyd7LNQjXU8qLKNYoEkLV6eie637QqhQETjF",
  "key13": "4UUUeFNRAAaxNX8B21ocbM5stPywouR4Fhkjg4jdGanXN8sWqTPgxrLhXw7eKWRANdwWqFkLNJbR9i9nyRSNMgbd",
  "key14": "itArJdkDhfhu2TPdMsLo7VE7dpVhfaVkVYfvns18AieaocXviBiQ7JM1NptVF7fyKZ8RDRf4XQFT1FXRwamy2XT",
  "key15": "4gYLcZuVtRC3WMjnyttwWPQXmaaK38oqw1sNkqeZoxKmypj64zQ53TB4pWwR6F6b8c6CyzFaMegRbqzsLyRdkwjX",
  "key16": "CMStbFrkNFsXRbRJSYvn36s31oZZUthdumeFSvP5uyaR7fKzgpEpfuuLEDeCXzUSYdZHDirreUt7aEKj5YrUoqh",
  "key17": "5uRPwjDLTnvFCUQEkRqvs3kDFdcDB7A3og55gyJ5Ln3SzdSoTd8ko67M6pXToLd7CPtY3tT6CfKue58vrj4pXnxB",
  "key18": "44cGGp8YpJsUvHLiTnqVNyZdb4FPxgTtBCaSsmwHWRguYjzpcnc7p2wzt16WYxPtKSxeUngkaESdXxDj3yRNNkxt",
  "key19": "3geiRTHYWJdaLFWyNbPrY26XcQ3pJZ8yigPNg1ThERgBsVnR1RCFkiURf1F8L7J1YqRDPUyk548T4mP76ueGbi7t",
  "key20": "4tbaMDyv2NzdQAvw2Ht4k8qJzvQNd8341MyisAAE6M2x8P3e5gptG6xZVP5gFyqXFxLAgB6fcvTfAFyqHjRMtTpK",
  "key21": "4WaX3pUJ4b5ouGambMMCUmzNycSnnEHkd7bteZfGcVQJP7bRDY4WbF3LW7K5ogsFntg5z4NpKEVQHFGefgMShboj",
  "key22": "2dskBMwXZdhj4E5oHV6mLYSzxWP27vxBTpyDHaAzu3qME1jH12wBju15UZvGGXJVzJa1SMLnt4CfMtMkLnN58NP",
  "key23": "5pGSkoCh5j3HXGHZUVyWGeTSv73vxL7PtAYxRuCVSHmnsudt6Hi9dRGKVXYKXXAPqZEk3bEbNwfLUU9VXRx5w9Rg",
  "key24": "4PzF6db4FkDQJA83RTtz16Zu1ugxzFqCwzxQBUq6nE96sQsSc1AdLewYbh512EkKmPLST28ogijnYT1RTACUME6k"
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
