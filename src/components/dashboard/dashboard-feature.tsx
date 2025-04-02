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
    "33BGzPVptSExdCuocVxQ15gfQyshojGqsohxryu1z8LftczX95h7hve4a3U5SKgaZDPwYJUgAqhid1BiuesJgK6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jqp92pxadZN55nVPPu3pP1aZx4MZxM2MsnARDVz4FvzsxzUf4P9XcM3kJosNb1efMQyUR3FHZZ4aNxYoy1cgkHS",
  "key1": "3uZ7CQfWpv8qV4hV4ogL8YwS497q9DwzdX3efGTbPLQ7rYb585Dvir51i7A841z3cRxgkFQH5McRMaAMXV5oEcw4",
  "key2": "3mazZLABgEa9rC7kYfz1sRCE8GUqa8neS4EywAHUnB5pqcYfprwb3ebb37NzoAheqxSjBq8zLBSnQBCgJmHw6gc2",
  "key3": "5kNidx5q1neFXqZuuHcUXsbhHZ95uQoCFrWG7UEy2ZqMDTqFuXzNuSLnF1Ag7SF9JRVvZpdEwYFbqmX2gBmhFSCt",
  "key4": "5QgrzwxYTFB6seN6Hn7JESvGcCFSi4GzkWP3ckJnRXDEMdzfUfFYe472UfuprEbfBqjrKGiRqEbUNxgG6WgY7psN",
  "key5": "7HPWLLwR7oXePkqPG21gYu3o9pyGktbJURLx5sdKorQj5BsLrtLu62U99KX6otrX9VLoqDUV3X3a1eT7G9wxXYs",
  "key6": "coz61cFGYX4hWAMA7qACcCAgv6CM3Pi6nyq5m6ZwB3HkYBgrZ7pqKo2hoAHg14eHiyBHy8C12nBi5SM2fTjEFfF",
  "key7": "5wWfkhkVMefJuLWPdqsvzUhErNZB6fs1hiYY55Cvw8D2CervWc7iNFbthB6N2vHTXcfrwzA3Qzxwt3pQNLE7VRta",
  "key8": "3URyawcGN89NX3KbiZUssiRhfNNV3DhiYjYieLDPJGcxa8yNzcpdNokUMoJ9mc4cdrUXvTwibuup1EN3v3UVg1KW",
  "key9": "3BKzyD2bFVbb9x7JfgxEUzBjwz5FxmcRPxgfAtBpX5dYnJ9TGSyQZmAG86A4Y2cqvFZsz26CfEDWNPQQY5iznjcT",
  "key10": "4qfqVAduSKBmytiC85gNQb65Gyqor7LhWbFvKo7iTUromN4qG3V2VJUz5qkbLfPaj71kWVNf17cJRnb4QMzm5dcH",
  "key11": "3HxjXhG33y4cdQbccSENHt8JudQPtvL4GHH4mpbszXQjAUrigF25YiyreUPTpnRXETaEfTGUq22x46nZLnaygopv",
  "key12": "LjkzqQ17oNnAec66pHt26YJkN43b1oviWmhXxt5eKe3sChUcofkUcDgakJ4itG6ZGG3S5Th86kmkDrzksia96jA",
  "key13": "55oz1x1qVD9L6iZs93bZ3e6tzVGBVAiTs6pkffwXcXNmNAZBTPJrgraqEGjLnRzoqDCj4LLyREhpErdEwkp7mG7s",
  "key14": "64w5LZtrsewVUYbp5MTNNkcbuS2unz6eneM5kx5eHUnxhdMhSCL12TPePsutS8qZaj5NoxAWuz2kqG2ZXMFnvoNx",
  "key15": "59qHkXCvv67Dp6cKbteNKGsV9LJigdx9C6wmuxbKQGoRtHjcHjezoLyQ8kayFKmm5ZnSP1nph4HL41PP1kMcCqxp",
  "key16": "3kS4Mtw8zqXzPL71oRU6duBXTbVmY9nw6pCmp3nFMTxjT8A59DueWr5WqHS4ZykF2SNLY6vFU1k374bGsA44Z2ap",
  "key17": "o5J5sA6ZfZR6tXyykcSyJwwVjS8ndCjp4r3pWraTFN96ppSeUuNuSU6xDD63St3QX3ZVe3Xp1bnMs59FgsgErry",
  "key18": "21TvDgwWz73GJmMVPLUavcjgmZhfrbRcrDvrGsEQ6gG9Kn96bewyTZ7MBjJPFSujkkcSDRM6dn3MjfmTm68fNJYe",
  "key19": "Dq5krz4K8kNMbEYNXQRHez1bafdXycevyQbin8FAW6ozn1u2qbKG2MWhSbZsRpVXs2KNqkYRdxxtw4LVrAsfPvx",
  "key20": "3cWv2HnsYaygCaWko4YVm4Jm77CNM8JpgMy4P55j8LdtVdfBMiDQ8dGaf62R1UagfEh6XBkCSgoW4tmALf4nx2yc",
  "key21": "4DcNrS4DVMVut2YPAXujDMvwxidzYM5vbbzyjGvtarpRzySdMDh4FmZRza2ftAhnfYeGaJe2Zg8CeHVaqGqrbfSJ",
  "key22": "3napuGFHakVv4GdxTQYKVCkcsGsAbLR3yFs5QQLcWb9Fw3SoicwCk6tNtePChtEoAypaS19tXhTpphhM3hPaipTD",
  "key23": "4gwFaqm2TVP4Tptu46Kq5zA1AHWs9XZbMLm5wMm66RgMaRQrJKmxYZgQJHoykfkfwubEhfEmYphaFy7HzsRkYPGs",
  "key24": "5w31zyRG8Ya1MkPWwXUiLGgtHdpULwrG6rQrrEMG4SS1wi96QxvfsVJkas51ySXb5W5CGMMCqrn4bWTEMeRHpSJb",
  "key25": "2GupyfmMDVww8tkqrtT999cGJDd71ncU2AQEtRa9Skq89HQx457uty1QyqibvAEkZR81FN6rrGHPH5ckkqFzAK4r",
  "key26": "456aFiuxVRM4tTU5LvoJm2pkKdggG3hq2Uxju8yBL4MdXbYzUJrZGpVa2f7ky7hwuxrJk2jEJUac6VjEYVDioQJE",
  "key27": "23TaXkbk6iXYSauCv4R56wcPJKQBBcNdrxNFvwNYVbxNNxF1Qm9of2AyPULaaYheUof62RJaxQfFSmexUfcr3R61",
  "key28": "2GCnPPSAv6iQd1Vpnz1HXKPXdNJkPhT6Kging8ptvBmHHU1WS2UiPoaoYpquRiw8fAhJyeFUnN1n8f1xFHNYpiox",
  "key29": "3kfPCWmfgcRSPjKagMw9xsSKzpz9kq1eEixfCduY2vYfgVDajRkpi43aQTbHQQifZa8T4Yh3jvi11cfv4zQXdStc",
  "key30": "KeX5HcUvjAQ7S8e91NgLiWJPmoYtd3guYzK6oNsd4RE3PDxVSrcMZRWfsyFQat9zb5Ghx7feTLy8mvQ9zquNd6R",
  "key31": "5wRKMLxMdNpKL2EQNmtUYuUYUCpL7G9fo93kSFJFtbiaZp5sXpkoEEDfVLoVXeLMkuPSY7VXfvhyKWpAfDcXr8Hf",
  "key32": "3pN5XyFyzmJg2vWNtMRy59xQcYbk2qxjF5dkeRcwb9p7tGA1NauNdMWBuiKaQHEHKhnLrvJnESfSjv2swPGTo1aS",
  "key33": "5nLzuA6PfnXPCeP56SQJnBKvLCRfm7DAGp6aVWyxDFTTf1ocDjxKKrG8tVAa7hHfPrFSSQ59eMbHUxBwwM4VwKmC",
  "key34": "3faaWT9XS2ia1WCb7GfUkhKfpStWwCW8FVpJ65Qptti52X25WBxuoxoxeP9Ri2FFjWsLj8wN5fnQQsuMbwW5Zhvi",
  "key35": "qwm9igZwdVftWJsLQPHNUDaJeVzP3bi8gorEu71BZp7L6GeRmwEdDBGPLxW78r9SYF9uQ6YUFPcni4Ehm126YLo",
  "key36": "3yK5z8Ps8ER8JzeZJAUXqWzq8QX9UbwMtcZmLPgBB84jF4kcXi2tvr4pxjnLMjbERxWJHwmc2xF9UvYF5WYDoPG3",
  "key37": "2EXbHdaRiGupnXwcRsadvii5BdfpQ4ZoqUYE23vjwc65jSXR4GVZLmTHAyq3CNU6asgziBYMtVyPgp58agf9JYyW",
  "key38": "KdbVuPpiRAGCsEvos1tRwfx5USFysa5g5jzj7qfBUszU16YqcsZt6YZqwZGUeAKi67xE6sAjsGYAEKxGuhmSeci"
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
