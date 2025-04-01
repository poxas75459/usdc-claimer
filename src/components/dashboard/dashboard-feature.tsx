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
    "3SQXB61NeNvdD91NaUCcvQxpN7QvadFYYvy1K7Red63XR7omH3EYSNdaK9VNPG4r5L9LyArUvrP7ArGLW7QR8VCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hatBYZ9HYaJpyF4s2UUeBxfwKubAs14EqhaJTrTgutapMeXodb49MMDRViVBEUBTBfGTwFS76aaKHK8Q4PNFHdm",
  "key1": "3GmevHYa1obsB66yp3Kx13p31vPz6tLDQ7eWZzqYBQEWRmq2yfMDcNwnnXC3aG8n4GwhWEtU2T2kwFmeNCVDSDpj",
  "key2": "3yUtnrZFF6ei1GbFC5tyJ4s4ftWprYh5jWCJNMaDYfjyw8rKEUSxE8SfMEfcF7T1UFsf5k4HfrMB13YjiFvdHS2D",
  "key3": "3PC3ZUe3xhM1PnVoxZn9HcbqJArcqUFK1mXZ7qXCokkQgGumEf6Cf4j8ZTQRpxd2cmPRMXspp127bNzr1VCSNcyt",
  "key4": "4EHNLLX2ZRxSCLwR6Ex6fMsN26Tqx8emwJc3weri3yMrdKLwbDJLCurye8H52ZpH6NsEjs5iSzKdVe5ghM3EWF3r",
  "key5": "47c1LsczcjVpifJckdcFS5ewqNFXbhXVakVpDgpJEZH8FaV9h8PiwCRk746jX5b54UWsE1wsEyMJeY2pRccKYJvM",
  "key6": "5HxSoSBnmWqoCuD3ZyVfceUF8zzxPJgCwoik19cxdJCca8619a4ebDeVdkwi21NDavZeD9kTtVUEVVPSeEUxPhuQ",
  "key7": "5mBQYSC14XpMCgtYgCDyr69uHkeutf1vCeDgcSLDfwc7Zdjh2q7VjchM4iwXagcmh7VcPDAWyskguJeQ1BEX1BKN",
  "key8": "3x4jDfwMRjg1qdWoJDkATkaVKKd52iRPqTR1C13aTkrthNteVtqN1LKQxxsoPX87DyTK7K9rtYZRPtAtwN39TSpm",
  "key9": "m3BdYe8sizdncVvry7jUJLunUk7fa7BxB4QdVQJWb9QmJJcbgRnVkeZTCSmCT1wJQP4W8EzhKmFs9mMuUFcRLNY",
  "key10": "Hw2hDx8BtCrKKN1RZbxeC94ywWEdrvfvJENBM8F6LreuovyDtBJramTUGteE5gA14njkJ1v74EhE9Y8npVWNRdS",
  "key11": "3QwZP1ZpZcZi5Ssg2JXXsX1us1oBa1Ejt6wDVuohS2F6H8DcpnxJEayU7qXsBSfaiegAhTkZyHQrurUjLFAZMCsw",
  "key12": "3q9GdVuHBzA4mTLfU3WPBnEmrtCLkJwzAuttF4RikHABrkRKV3pHzR3VXzjzNqx9yysGKgTBCjLCVGUKKmQKXW3b",
  "key13": "Z5B5JPd9JvU8msNWvP5bMCtqDQpmwDSAzRZuKPDtLLWQ4hXdMSRLzpJ7gdU52JsvtDxmyYa3B7NKSRd6YCdbrtE",
  "key14": "3pKKiFMKvwJzDQDTqv4NJ9kNBGczek8vLVbhqBzqPNu1kodRbyKACNhysPrupwcckaVJp5MxcQPmNSEQM9Ef5Df5",
  "key15": "W8ceoeHFiXDsGXf9AUb9t8H5cokWZLnfzSSnRyrL6Zdh5gqLAEmanKJpizos7iSQ2gMbxBYsM5pb27TNsJvEaSd",
  "key16": "4S4kXtsxwq864V6VB4uy8kZMZCKwBrNrjmHWrNbHkVDHEe9BS6mkEsfzBCi5m99hyqq5JN6RvNsPsKTXK6doZfnj",
  "key17": "3euMMcm3gzKusq28mfJkTSp3ybVnxShnisBZ38sLuCszE6FBTRawvumozgqrkbUKXekKRPQh69dW7sFMTSQTShXf",
  "key18": "4vhQJs5FtgkEinVvXaCiAD3wd4AyXAvSKbwgjxU7hZwThMDjRbvqtUkaoFbHAfswotuQetUHrXs1Cff8x9n36eQo",
  "key19": "59uw6xNkovmuW42Qwbc5enqmnVxY4g6HVnGXu8Mc6xkUpVNGFdsBRY279fJnDxXB6cUyfzgMqYahSCVEXFqZxHiT",
  "key20": "4a5Fz7gLFEKJF8KoHLk3ctxtmWTc22XFdGarFqq8Yt6QpFS2ppUo4fsA6iQYXCaQhyHsToGfdzrpRAmuGCN9opuC",
  "key21": "2cNRZBvZgz5CTJPFFcjraRuGj1yY5djzWWd5iaSGpo4sRpby4xfQDRQU14o636fKGcwwDKNyYkRGRpHyrGUn7KWH",
  "key22": "4f5Bzy8ijDxuuA1PQJTNpZckautGuZJs2CfdvZYeVkxyLm5KHvctJpLAUfcu7jNpAmb4DaeVgE78yPFgMMfKE8TY",
  "key23": "5gDY6jD68HwEQFGDLpkTg7vn5yYimNXgKcdMatTdYBCUkbNYZJ6WMDAdpwWdcrwzjYzHKtguvyEXJd7QRRuZKEW9",
  "key24": "bVRC2sB7mSb2cj24TuYTrbGmgkwAPezSsSWxDhunru5FXNryQzKbrpPGGDwUNwmTrhWqxVrP1SGWxgnu2xgoZm9",
  "key25": "2wGr2fzG7qxH7DdMBha4oSbY6W1C5W9oNjbYzmWH7QzUHHe5jT32V4ZK6xjBcw9e2SpP1CPf9ToXBse7dzo6518x",
  "key26": "4wWqz8YMX5okiJ29GkhB5Vt6wERCmME4A15UsgGLhk24Tm8uwuEKJEwCcykYq7Uf68Wnz334Cho28jUcpZSDj1aJ",
  "key27": "2MyjPEgtMjoJQnnyUoX72bhXULqaGrv2inmWWzpPUXqZmLn5CQqg2W5Ex6SiXSttCCiJEeriEK5ufweQCuLR4cGR",
  "key28": "5ciQxgE7rY4axs5MBWYKoBNioVzhRg5G1DDzWtTSY5AqhJogPyR9gFmXPiH5CwB4Kvefg9kt6Jp4HATJ18Wv171u",
  "key29": "39xGL7AaXanjoMKXp7BwkV54Du1tPP5if9PkNWSjjhF6AA6gga7LbcmaYZBXV3YmQgM64TJiNB8LUYUYBRuhcQqs",
  "key30": "5stHDD9K3u52ujzqANRCFffq2UWK9FCJfRZ8ZRETtzfvDaDGsXKjtdXo5Ua4EwZBsJXKVVZ6fbFaevzNU4EokW8T",
  "key31": "NAEkoCeymppu2jCTQwCR8Pxce2P5yVTfgWwsZFGst1jAxsNARcB9oZPKJvgqHVWhTczFeWNSktxYYFrPVjeLV93",
  "key32": "5nZBWvpzCf3Mqg8G7hubfjvJYvQi9u5WuEHPm1aYAnKQygXGK2V9xyMdXbzSTxAi1gB5iJScJQ74XRHLSXrpWCvC",
  "key33": "48cgAaCVYkQnBHnANYnQRRbhtD1U2a8MKGRb5APPAWBCELbX1BnPYvY1Hv47DSr3R8fMZ4QCKBY97LuCme17rfik",
  "key34": "5BxJ9JrSCiSQCBWeLK7UWs1MSFfwx5YdwF62C5kZLGeFcp5vf78PVNSyYFe42PsV4WhouwoadA9qPrqWzoWQpvRU",
  "key35": "3oQWkCjEf7fuCKDpdPRPR1s3r5F2QUsWmFzcx1ssHWgTUqSpnF8RspAe7e1RzH4RnJbxDu7TtaeGGxtcmzfU9cse",
  "key36": "4mAZyAVnSg79x5KVv81od2Rrw6oFpdhLbUbea5mdMcs18kE4zWF74rnJe2R3c4vzX5xZKHcmmV1asiDdeGnrhuqF",
  "key37": "5iNVGC6WqU11sQiWmsmjJi4DENt6posh1GTFGg1H3TMT8sfYmkNRzynGsWiApPd8dvkgQH6Kv2V5KY4hMktCj1pA",
  "key38": "3As1xkjj4CDi4m7uHRfpnwpczpB1Yqhk3Tape9HzcUN4ShwdQmdRQiWEts5hTN8ruCw3yKbsDjDsjKeqtjGQ5VeC",
  "key39": "4Z2xXMXByhFPphtqmxoKfADjysf1KDLfVVBXKE1kR6Z1dX1VfGGMPzzzM4NxTHzLhRAbonsckqvKGdVRen64ib4x",
  "key40": "2FEzP4Quuw8uAcmQCNKnb33yjR572LsDiT3ooWgJXrbVichYQL3XWQRUgqhjGgkhcThMiBvU8zUPZmKZ7MBCgun9",
  "key41": "3w4psu7dnmA7WjUaf7gSDFEWxu1FdrXFv6YTH2SDVY1othnNe1yHV4NQGhyubmDwnMfYb8M2vWK6xVYs5GvDh3Su",
  "key42": "4rgHxdTxUo2vkwmkU4Ad7PaLKs5gk2u9rXpCzr67gvgfk8SUssQTJrA79Xu4sPQHLJaatW5g9CgoaibP2gixDTf8",
  "key43": "CgG1kfCKt2yj6bz3RnLzRSD52jcGMtWqE8Wnwg1jer7GnbsrXAzAsSkLVn7NwiAXhwDkE5726ai8XQqSKN9RtYr",
  "key44": "2tAuzGJx84mqw8rAt4VPSQXrFaCPh1gS64CeFNDzEdRaaKzPa9Xokgpu79Kjr6zwUjPg5ZZnxEDTsQfESpbPzQH3",
  "key45": "k3ruJKMEHTtyZFe44SUut8eRKCRsSbLnT9P2YLGSJJjCV7Dn3yRFVsrjruf179zJwNnb3mKi4hv1Ar2tMziCLNh",
  "key46": "NPjnW5tC5s4x1JLFwkj9cPe8AkoRBi3K8SgF3pGE3HzK5Nt7muokJKcGReDKqKYUjNjtanQyEEmWY2R34NYjEee",
  "key47": "eSgSBYYhUcRxQjCM5UJwTnurfZwt3uad8fVoBCzRCYHWQSr7beKUs9AWZBT3ZrJtR2VZbzPSMgxjPKPhwmuRvBu"
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
