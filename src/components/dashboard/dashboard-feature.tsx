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
    "3VMBLnUquBt3aBJEQw2KtibgBPobDZsnAeCTW7dzKL8SP2TwFJnFqG1XnoZqPbrDsxNBLpEpt1f9w9KcPUzXBMTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zXrH28UYtw8WPcxxU16aDrDshSdHkqdNmjGmTEjUYrypZrL6enAAeeMVYm5tzPa7wAo6JzvP1sgYmMvM9cN3ezr",
  "key1": "AG5GMYaqeGgzvjnFuK1V7nAC6diZvATLPEAZsNHXJVGUiADQtU6WDPJMa9qiD2pfFNLEsAmdW1haW3y2r5tm8pv",
  "key2": "UMCaZta9AowARxbJaSQ2mzf7QxYTyLnyU6crvxGcPVbjiqTaxpaoBJiK3v2ocM8S5uAXkuJxnUhmuXsj3dGFm9F",
  "key3": "5sUWFCisS6AY9qmmzF2reN1SgTVUyFyikJphwZxkXvVPSfKDNA2QGfUnKBN5rfHdQ5m3QpTXLmumWn1aGFdvFiDc",
  "key4": "4BMvTcoaAjgufyzmzFkzHfu739pQfY2BKfk828m4JojWAa43mdR9kBs3cZyQaSBTEvFSYQ5jGpM7e9G2byVLG2P1",
  "key5": "3v57JmNUG2tRDXQCmQ8FEFBzgiWLf7eHWcNq4aRCiuvPS5oLMN8g4WL23NgKBAKrYrc5uxEx3vfF6McKTBt4N5fX",
  "key6": "3D5Kzwwoz4qe3sY4vpbZWbZKcb9ghNP5ztbhz15inhA6uaT3EmVU8Zfsk7iJRNugtvd2w8tPGyY9xwGhYNNcG5V8",
  "key7": "62xmDWrbTuBGzookSDtcsztSntv34ZhzQPkU6eF3CroZzhqRxp9LWuejUK1Sp87wQBhqrvXap1BwFXYCXXGoVHDg",
  "key8": "44gPNYbfFkkVvZS2E6ttjyP3NfCj4PAXJiQitt9w3Stoke8XG4nNQy2wWtBFuhW5Eko6zYar3YBxVztVTGqPEvKe",
  "key9": "3zW5QE35iiKswzzWYToToiXr7rjfwLChN3RJqmujNc7Kmjhr8pASFqa2EWAvhuMRUMRKi2DViHtFBSgYxjqBsb4n",
  "key10": "22a83K4HVnXf51pUhxAd73NbtSveEKkHMHrtNGjLrkLx2MY276jHkav4wKqBCERWUWawpN4zWzxgf4jhsxaJ6H5S",
  "key11": "4fFi8J9JF4gvvvr4zqFfzfFXe2xHgEvqFBfL7qY1DaEuHxfJ5aaphybdeUae64Qagc4W7sWnD1zSLjSwunnR7UTF",
  "key12": "jEDoHrMFNSsEVjbk8xpQk8rs4ryxLNXraPnEiUN3SkE3E3hFyj3bBwywwJAGZZAi7m4RGpZ3oYPwy1zdR9bHe5u",
  "key13": "1xuautDbcefKNVJGLvknrhoi2qn5FW6inmiqFs2wpK2zPnqYFq4JKjBkVHmwzVvLh4hCWwA3KiNacYxGHdU75G",
  "key14": "5Avfk96dafCRwPuvFow2q9rRTcBLT9aoK9cVUVSwEYRV5nubWpZ23j2njg7MomemvhPdy9KZ1K7N47TFVzTW6XnQ",
  "key15": "rTYe49kk71cQf3BJCsFfom8GAX7JLJGVw4PAhffnqzDq7HDoFnNN8Lk8eiEtYmmDxhGjWmZQqYpiWVBH3aEDZBL",
  "key16": "3JGjMoQAy1HNN2d7VAqpVufJvNfTtZezKFNv4ZKJEJXHkDP3iGpEqsiLsKdS2Jo6bPTGtHmAHzANV5AoQ3GwsecL",
  "key17": "33WNB4YjL7HAXKk3dasvukoV5L2Zo5a2Ay3AFuDtNiPCbxNrrj2bdPuMWCREAUqxWAxzR1WSYyds771CC2JwaVpp",
  "key18": "2hB7f7kZapsMqGkGkeYUjjK6xqdeVTf99cdmqJmDHZoKjt7bhGgQu49VAau6kB6QMSQNmVANvMfoXSevVmctUvty",
  "key19": "4jMMa7FtxaPaXBFYQU9it7gL3TJorPqrwirBUUAJ3LhxLi3hEs182JbD4taQkcZL7zjMENwn51J6Mh4jMfJYRUR1",
  "key20": "3YP2xaNVQ9R85BVxwsS58VWRznNJiSsuiAome8d5sUTSV7recPMYDt3DzuwXyDkEsGvbDYtidjR4bGAdRHneGKAY",
  "key21": "5xNhM5bArAghDA9Ap99UDLc85giuEZbQina65efuMsJQQgVcsPaUvqquCED9WnsL7qfwvRskQX6fPdLw8t8s5PPw",
  "key22": "oxr8tqSKtAyBFqLagush6WD3DDU7CU9jGTuqAPURLJafoU4H2CZRbzFMXWjU3o3oMgpvgzYi9AG94fswQX19b9A",
  "key23": "5hzyg7nndqhWk7bLH5qBCU1ZyQTpxfT4e89NDZitER1aKASwxekZiXNjBNCYm9BtGqNAPgZA8XtpJTCeRzUEZpnX",
  "key24": "5fqX8mgCX8ZnfbohiUk7vYyRXo9ra7auQv2Ts2aJZ18rxgXNMh5xss7CitFyKeRzwS646Lj5Js3iEC3DfrnbXf4v",
  "key25": "3owjHxmj9Ux8YgsyGthwxXybbDvyxBQ9HhyTg8E8U14zdgPb9EVG8mccGQzYpZEUqpu7TeC8D13JrRr5bazHZcuJ",
  "key26": "4g2FvmuWweRvSDUvFkPXbPTM6Pgz3eQJVkw25s4ZTCXKBNXBeoVo7jPNGbcsBVSAGcjfJGPNkbWTyzjZb1yPcjVZ",
  "key27": "5pAmSGpMcTBYbD4u8ka8VpXo4SvtWRdamnrFj7yXbYSZs6rLJYjkSwAScEaQ11dVEghSRwBsxamzuTRMXUZypnUf",
  "key28": "4eEMzi2unAykErg78h2QZ4Beiw7GjSGUy339zkXGPtvQs69qz9uRHmbrkUudDBRiSQiVLLdM5WSD8tBc5us9Jafq",
  "key29": "5F9F6rCgW1GbUGxAwEGuysHVDZseMoHVD9xc4wvrmnFWLStEgAeq5nFyAvBr2d3nrf8QZLaUNLwgtaprpPTJ8Z7J",
  "key30": "4QpGmk8xSTp58YRBcsH3DdDnixRc8pKX7kfmHRq6NCeD2FrZvyqpZ3k8TzQaMtyN6y39xQdEXUPu7WcwX3vvMoTS",
  "key31": "64XtLCRRGhCSiefo5XusPu9hbg2ot4wdwjvvp8TBhVGRhDytUYDP5QMAYzVKi4TwF9ip5wVPEzpZV29tjjHTLNo6",
  "key32": "2nwaTvApjCHv5qTjFnZEJuXZT7jLxtQvZd9Gt3MRz54oaZ1YHeWMrrKq3fNbaL8WiMx5FCN4kznU9NeJA2EM8YYT",
  "key33": "KgpftiZKb5CKPtPF3Ws5xHwLN3Bptf3WnBy8gbqQgTdqCnisSUhoGztqRp9psxTuzwidnBgmyx5wfRfVfEqo3sh",
  "key34": "2phbzyyqKbZ8obFgkuyCBBQvGGrg1QdfU1oXgPb7ptyAS6XQsSxhzpfUkhCzqyfqSeuQBSz7SjWxr32fNaNJiWYJ",
  "key35": "51LPygKdXtytDrgyPavHezd4CuZeF3ZKqrFE9GNTuKEooPMc9zNMRVknmcvuEr7GJoXCvHy8hMNauF5scJNczbNY",
  "key36": "3E4GpULJqWfnhAAb2A24RwyK9fyT8GLKquU96VVwmTCxt3w6Zd16bJKFcAsA5wjo3f3c68jUFncwzYKmS2PT15C6",
  "key37": "4YvE9imTr5etFAHatg57ViXzfbcsFr4rdsrVcUkwZguFjDer8vRCySLwsaPBgtYAgbQXdCYeSCHYiHTLRsUv5E6X",
  "key38": "3hdQmLcBJhyY9Rwb89zZC9JK1JwbkcKj87rQ4FJeL2EPBDqnem9nGsN7EyiWm6jdo4KyQKs1dzTw499eECYPRVMh",
  "key39": "5BYFirJSxbNSWf9vV7ZN3wCQW23p6J4Qc7mh9GgWjb9vGigbAfBwTt3v3EgXieKNAwvFADoE7VB2AYenSnBe4w5R",
  "key40": "3rKHwDEQrejuKpDUY1fAqZ6xB1xR1BCZV8ziAKBohzqjwo8SnakD6S9WiNok4Ls49Prv1XpB6PaARsErtJP9icqv",
  "key41": "5KgC4hXHPpnrY6Ek8LbwvyxNnggzubSXF2RkdQL15VJvMYQiqW9EiMgvCvfxWsPATchcv6AKmHRzvCcU92YyFhcT",
  "key42": "sSEUTKtpRfuKsp3g1b1VHhYqM34JnToJVfgjUNTyCD97NQNAkJNVcpcwa7WR9KeDi7cakfmm96yKm7m66fKHpUB",
  "key43": "4ABHYUzrDemniKKz5u2wMjtGGEZ2muGYbVTXyDY8qDWN6VVuaoinCBZLs6vS7KKNn84tPLhHVdcRfVT8VK6mbk2S",
  "key44": "4mMuV8L96xN4TAAT5ViTsqp2iRuK5rT4drzLFsHyPQchm4aWWSSDtmvkUZEVo16rqyWNzfitWfQ94UX3VsuuFEAM"
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
