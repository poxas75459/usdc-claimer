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
    "56fKRbiVgnEMpkfV8dGSe399HMnmaEVMaxZXkDqQSk7pjwq6acqtFfNfPu84wCGmjANSJuqQ8APHcX8fwNqnwqvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jysdWMot8Eop6HzU7PmAohn2gJ2cw4oHeHr9XoiGszqKBDfJ9Bnpn7PUNKymwUD6qddvztQre3ENKdenhzgCYxS",
  "key1": "4SWfuVXELoRakN8cfLHLwqCWgDLPSvehroQqRqA88nJcqjkYndbnyebyZoXnSTXiXRMjc8CGcT1gYesf3DPEuE12",
  "key2": "5SkVvYPGBABMqJA3989fkh7nmz7mWxhdyhNvG2V2JDcPR97pC3xkJZNWqF8ziK8M7x217A1R1sd6jEqUsTNWjjLt",
  "key3": "3yrBnJWC5ioVkjjp8P1hLRC6rZSvVjTpQRq6WY1uUXi6xGTCXZLXW6fstyCTMoLSuWAPqUoU18josz13fGrYTdRD",
  "key4": "5pJXzJqgitznxU4pT4HFmc5PsfMa7VkQ4G4YAQLkgf5KS8uui4hCrFVuzkLd3ns5vo3rT9fvfFdLAwUax4CKijWs",
  "key5": "5VhJtcL2JTsgnSCN6ATk5tA6tLXSMsBdykW3UJ6VXHsZkckTXhynFtxqJFKSL74hBm9bJ4BfhnW5dVCmhzApSUS",
  "key6": "3Pn7CMVKcGzYid18ohqCYVcNt1pLeG2S33qkSRSFsf7NfDnrQQxEsUyGmWCmmEF7cJDmRWmEk1XwrRR9u5VXfhZb",
  "key7": "JMPXFK5NazQzWNUWjrbP2aTotsFHPbEvsQQukAftpNBEnWkFzHBEUQgj79ah9PcfoP78NdExg6z9wxeRXmc3xVS",
  "key8": "52oyCsezJFaRcRcvxHjKUcXd2L5SWNWTx5CMWh9X2TuECidPaBDbk3cKaR5Wc3ZE7iR2xbwSuZuEvQiYHnjYs73G",
  "key9": "585Fcu2r3jdgDDfJEs7gkuVi3WRqrbmnd3cdBznZJ78wWGEJyqJ6L32WupYnL1Vgci9UeLJXReXXz3UttufBAX3G",
  "key10": "4tqvn4SYgM3uniKJF6vYES6GfW7sKW1vGGgBHgUrCwXFbRVshU6fxMnhjbSCoAH49qGT3n3cFjipGX5MJU3ZMiLp",
  "key11": "3q7cD1z9bmVfzvJh8bL7dJWSxoqSbGqowwC2uJVJ79uFY3rCKn8Bkqn6sLSWtgbBmM6k5peDa4WeXmew9CgM626U",
  "key12": "227ow5yBHmXq7a8nKsu2wN1wqZPbJWCs51iqDf6WxtqaJ8xh3jnBTqkaQJBCK7GPBL7CYSYgXkzLwJu4JmaWuGDN",
  "key13": "3dAQViWGPS74fax3Fi9s7vFBLvEFbL6VGioKZSATohCW84iAk28X3uBKE43q8D5oBymFtLfrn8J1xNzBjhM3cAyW",
  "key14": "5D2oYCWaDZ3Xsb91m1Y7SAwbhb1WuNjz6q63SyroxfmW9viqqhoDpmeRuFKncjFvTTDE2RKDsRE262vZoV6suTAk",
  "key15": "iCcAPB6MJFSje5vorPMaEwaLYYznqFz9uertNFndVMnfaS2fwPqBYTX35Stq1hUBPJdhVXPJprZry9E2LW9gtTX",
  "key16": "SCfS5hw2RWKSyrzorbCVmAZA2FH2Kp8HNPiucCrWLf8Yt1kKoCxYwFTm59Z1DDZwbPGTrurprQG9t1h55UgsChH",
  "key17": "27iWHz3ce5m2jcGfzLnrdTKZY9SgC1hyK5C419m4eFdpDoPMXF4E8qESjupoaYT48qDJEPMg81EyXbAX4PRdwUGJ",
  "key18": "djEhW2wBF9bTbSuJtxjR4Nrjc2Dj3iZb3NwuhCZXc5FfBmUodYkxE9irdEj2SWGBgYdM8jRy4cz7qbiGhFuUWQz",
  "key19": "5WUeUmRFmoHejWjeTCYZpKJqUCow31QD1nmSDt2LL9bpsYwPvKdLeN9XZLVgZjkTLQr3tHffAYpAq2p3gYLa84cU",
  "key20": "4y7WvL3xZWuUQKUqoTWATpZGwbsRpXxCu1znaNSwyjdkMAYNyk9GjirpnHDEztS8Tfg3YajvLLfcEG4SYathK3Ho",
  "key21": "5vZFcBidEkc6VdDqyF5UFWVxE9ztXdKwcHzuWvAaZ84KKaDzqPeCa9dPjxHjNvRAUkFZdcsUDp2mzFmwo4euiAGe",
  "key22": "5grJKJGbRHqMeTYR7YL9QAY3GphX8Keb1uNZdyrHADAyRQcpxUfT89cwwLTApBnHA3V7x4KoNx2fyhr9j1hhpt1U",
  "key23": "Nn1qrZ8kw6nCvaN1KV1wQsWuzcHegRpBwu8CVz4hpTTyzopUZLrW7kWWweJNKeaVySbP3v1qjSdb7pRc2mvgPMz",
  "key24": "4JWU1FTSDcJxNidVczdfMmwdd9w3VLqykBcpjFWSqT9xdaSDxeoMubfnS7AHoY5GbGTT4WPm2T6SrvdsQ22rxb7A",
  "key25": "3fBbPuEfK3gpJ7f3YsVv4o9Vy9kWF32ZMACnhyX6kg7FfgbuX5ezDv7xaKmWGHkh2TPP2KU1rYQi3fvmu2aBvqEU",
  "key26": "4CzRAFLfNPg2u48YYTzVC1kgD2JEW6UefYRHEwdgxrVPS6ebDZUTK8FfuAxv5gTS3jZjA8i1LvR71L8yZJCC57XL",
  "key27": "S4oBQWxywP3izjgoEHJPaDzP3EbCqhfoE2UgX74ezQRFoyvFKmpS4C1mBkFw2BdiZrAmiQUx3VXbfXFuVQ8bsEL",
  "key28": "4o8y7MQmKJjXu2nEEmcgoDAskPyE35KQZ9PEzbyDV14DSKC774CM8maAFM3SC23Co9FaA9upW4utCCsAy9DVoaPA",
  "key29": "5ycGLNrxKR2n7DWzGXKnQLU4wKaiLGBAgWrYnETuaNNZsVWmB2rKQ4i5ZfNAy85d5eBjexC1kP9edH6tvqhptz97",
  "key30": "36ULWH8RsD8a4xxR3JxFvUdjx6jYZG3Vr1qTVGC1XPi88jRvc49UqkUfNQLpzLnx5qGXMADgwCSVtn24HuHNbUAA",
  "key31": "5bm7Wjin8C3ah8bTT1aiTFrHJL3L6PckeV7TvF3pMyc4BeajUpfUMtZdn8wmSh9Wafe4kWh6FJuuu7jAeBcrMCNc",
  "key32": "4dqCf9R7N7Dw4fFFKNNvR3Yp5i9FCT8G2utEsi7Qta8CgxmByJxDnJgQEDKrdsVYcT2Dr2jf9XvkeGRr6e3u6TCt",
  "key33": "5kg5VQhsSYayZ93AW6dPJM2bhVGpB7NWJSsfwFZbeDBbBv3ji61k4xvcSaE5DUxQ6TqUjGNvcv6XWWsMjAe1TGTB",
  "key34": "3N1a3Xt2YPDE7VkccUvuAXcsb1QhBNoFa1iMWzc2m3vf5yWoET4B371Z8mmQXut24KaXLdkvqMT5hDJKLxjJvKY8",
  "key35": "5oeF963UNxYLJduiaiZcc6GjvAS3BTZ2a8Gu9tvGdcU87TU91Fn5aqTLiV863qbDfTFRZfdJUpbvYN5jTM9pzZGP",
  "key36": "4SXCc8gnpSiuURjUw9LQu946Dg3NkiivppFKV2KTsjvxfqAJMhtCG9oSs5UPpi7rKAVX46uJAe9dwZP6yo8CbXta",
  "key37": "57ggspB8AwWjuv1fup8UitmVvDfaTN9wVotYJJEMZYsrUxRMKaw7uPqDhRmCgZ3uS4xWajrV3XFmWw1z67zKiLYT",
  "key38": "5kWy7BtHBaNSbkK74KHMCaJ4VjdgCxQCCCTobQR1XV1indVRED3YokWnZwP28irC3XEHtHguXhTeT2rj8jAu1o5D",
  "key39": "5vfCLphX9zTeN1yXS1aTNUnGpW25zJhGjoyUP8z9j7849A6XeaXHNfh9Fa4CMZend3pxthPf9Zkjzp4ADrjEKwyx",
  "key40": "NQb68boCZYuvD7wSFzkExeSKwv3aSeZQZYL4JEPM6efC5gGRwajT2UymGc7omS8PmhDCmrf647ED3enbK7uBqni",
  "key41": "2hhy8tBXQhz2LSyzBmGDpwDdmDJvyBZdK5h8eMdmDVPBVw3x4e8geVZdFSKmro8u1eLYNdA7fYinDihNK1zk2nKw"
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
