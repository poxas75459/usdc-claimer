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
    "3XVCEA2vrEXdkxrAr5zgrLLGYVEysR2BBiHPX7tkXfxo8e4unQstm6sQCH7qmBfHYJRt89X43mwMsQhGwsdmii4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jqsaqEqSpNYCZANYJb9CLLH7B6hmui83sXHeXv6z4pdi6Bvt41itKZoim7MgkK8HFj1LdTnU58GHUMNwLsnuzTr",
  "key1": "62UwQVoWgvZbTkjbTu9k9frzmRfH3WJdu3EJZ3QwJRcKaPZZf9yEXY8XEsDasbLnz2WfKS4VvfT8Q6Z6NcrYLgEi",
  "key2": "4waM8U1GoHQa3MgZFvjN7Ug9FMBnaX98LmbHWSKX9UgkVZPb3H7vSpRNsbS8AtprFd4rRmQDGoizoHYRBdSLDhQg",
  "key3": "4uahJjnmY8pCThJyjjsyjGuTaPJSg8pS4ja6HCDxJDDPNHEqWnwcJKGwpJL4eY8b1RzPrnrMqf295UPqw1raKxxi",
  "key4": "ZFEjEvYcwXarDsGHkX693vwvgcTGvrqGcSRXSBsuMA46VZsgbQnGy6MvqGk6YnFeChBh6nFGoXNr8S5Ysr5VUcw",
  "key5": "5i3CxVbREX1WRXEC1oi4zk4Aoki4AxhVfQEGDZDzyjYR55f7u76JNZ4GXcq1FmXSKwbAR52tPzYeV5Gtc58axiqc",
  "key6": "5f33QM5iX21zeWdAwEub6Fpi5N37jZqJud2sd23YGTYTVf2CL8v6rjm7tavXd2HBiP4yhp4eykEwnWr5awa7EynD",
  "key7": "7XrcRmcDjs4TBb3TqSmkie5TLXyyfMgiDh268X7ZW1dKhx18vWtxMQH6NUtdewmb3aLH25ZRirPaFNTieoeKf2R",
  "key8": "3iRYbkXnhzBrApfpaWGFn8gPn9jDK2eLdDzAqEAAXYCnyiNHjcKoZtviQJQKCHqRmWMjhMcCmjAepkNMB27oH4wE",
  "key9": "5wbmpDceowbCm9MhpQj36ghRevE1n7CrbgcFqfFe7ToogEih5sw9Bf1pXrJ6cSqgHEDzFPHdCZouiQqQvrDFkzMu",
  "key10": "2oQnbW1X2w2dWDWNhuLBjsuNHAxL93gyd8rXrXcvKTxR4Wcdv9enWjHV9ifhdSEavCqi5iCairi5TGxxJbwJP2YD",
  "key11": "4vkUx91gXAyNhBv9DNSsXngHHYZyShFoh8AUzxWcsT3FN5r221ibcGVerpYDtpEgEoJbtgh3FssxuPY2JawVpN2v",
  "key12": "U5qpaWQxrneneNLHACDBqChbPai1rvNz4uzEKyvyCv6C1pepcUzaVQBPW25mvD53aY9DkNYxU4spzxHHjwr4Wgg",
  "key13": "3GsXHPtb5xY7jqxt6hZZHMUc33fwM2WCPA1824xp7iWG1g2LezjByGypeNsPNUbK6EKNHGiysXniaMj22ncBCkXM",
  "key14": "55cXoF9XCVrywDwedoB6QZEeDJVSpdmJMQSKwHZNy221R3jYaoMVcRiEtRjSbZ5t89jHC3eSZARWYFXoVEu1tsP6",
  "key15": "5vEueHCAiXsfupzDBK2dH2mvrNNB2jstmb1E14YCidMDHDCW47WdDqnj777diyaLSQVb7qavaHJUzJt4DtYTofQq",
  "key16": "3mLgbE44gU9pq1rDbzkbF7GR44BSVR5aH5syomKWjhPZsmSqYRopseJ13GmQqKVMsBRWFGjEHzZtoCmK24zRj56B",
  "key17": "59xysY1sA9h5WXvBLdZRhzU6UTBwYRGTPd5a7pfGxRZWYTw4NdUd3kZng7ixNnVHD1MBRLx1v1RAqkF5E586M8gy",
  "key18": "3KWmebqfwdndUGynghja5MV62pTMcYzdVJKHRTr1ihmhrTma4r8nT7bUDyMXxDvdiJGZfFGwiH9jgY6sZJBMVdm2",
  "key19": "4KRQyhT6krj1mBSKhg5ZUecUQD92ZRTuECrM6Xw7hxXkAYwmMGXuDWmc4sBG6MgqLRuujtJXkuVs1yc5GaeNMfB4",
  "key20": "4nHnREJigsyuyQbik22xEP2B4ooyQ7Rjnz4w3zyPKt33QeAZ858Vny15JzJWYABe5oB1eqyx1uwznxrbGa5B3HAC",
  "key21": "422MEzXjmKXCBbkJggYpySjEPExrP3dec5vWjKok2EmfXXLQo89CnzGFHM21tiusZM9xKeePQQRNV7W9c4fHa9AT",
  "key22": "24XbUdsjA6EpzD364H3ja2NGTvJHP4PG7SQVgVFeUm6sD2fBmfi6B6SqiWwQQUyx7hngB1Bnfhp9q6mamhyUgsTp",
  "key23": "2v6BsX8U3vfPYPpCEtAp9wCt1qmhgWAAqNAiaV4qMXj9C5J4URc3e8TR96B4gLFEnt9VYsUoE4P7Qu8brifssmZd",
  "key24": "4TBNWFM9gEXUPRYFGwRKi4bP9xTGNjbbwMHGutrRdPmaWyasjZJsuRv5PN2JyWEjrLf6TUHVomiCAydfeDH5QLYc",
  "key25": "2W8zCBz9WGHyuAGne2KY4hmmo4CS57nsk3fXF67a2Ng4HgUJMMvitMvDLwJaUYqMA7nEmEGDAAW7g9RWESgxiukp",
  "key26": "65jZzHfNmhmx3Y7t3auLkAFgpzbYApDgGbvkAAFpwgYy7CWmApykFSBA8HmrGd6g1nkdFr1scNvnHKtyFSw9KcPT",
  "key27": "3YTAVBqRTcTyUSQNVGR2gHsFEyaVRMu5SEPKPKerKkFMM2avvU8i5w5SWrzvKsyiiWEuhrxgYd8J3YH2ryKKxooK",
  "key28": "YxypWuFZTcmDrW6eXyvSJ3dujypAxAAVX3ufMS1eG95CFSGvrJn7y9QBCbuXZBUt9fCuT5CNsdbMsDKHTT69d7s",
  "key29": "4UFZZ5HHxB4JmFCJskByb55Veygtq78xpUCQykL559H17VZ8qQxmC9VkLZ4W7mT7NuAywp8WX21JLg5HXQHCFkjK",
  "key30": "5RqgS7P1zJFLWhxFNK4qwLttWn5jhF4YPeQJwaMaQAAHQqkYC9VEFRtDKgygVkbnmtuKBmHQkvi2VCgRo1tvFdti",
  "key31": "4dTmMrHKsRHcgTpJfhncWyoizaXGFYKWrcXE8q7LSTs5w6UqAkACgiqWHuyngqivdyFWEwkgb6kY4cHG3he5qLon",
  "key32": "3YnbDiW5ub84bxcykJA4tKrtz9b9Sgbb6mqU1uwpcM9fU2pDaBpfFhiErxT17D9mbDstHk4KGUGxa4is19iWvyWF",
  "key33": "Ct554D2zF7yY8ESVZWwWycMgLMuNsFTwrbfzhxtziU9yiNuviLRxxJLhgDFQaSNr52p6H9j3YxPMfUoL8DyTdEx",
  "key34": "55s4STorE8MgeWd1P7Mu9iJHmMmTaCK2vtQjEditrjhoX8LpPiCyrXJy6mZJZBRzYe5EhFf26vWLC3seZ1DmKV1Z",
  "key35": "5PVU8fevjXSkEcA9xsajEkWTovNJtuEVNfY2EJy82RpwBx3xokwxujQUARUTDNgJSqZ5Ryf1s477PMC3GyFP92WQ",
  "key36": "4ULnEe9dhXP4T73PcbE6cS3hEi2vRT4MdafHEjjp2HcoFXgthNPtoRBbBpz1Uja7uyzSRc23Z86D5aV9YgkpmPPW",
  "key37": "3rPTKfmbYZwVkGGBrkDWt6krBcQX874feTb8imSzsHCYdaoJYUQ9eYR3NmDrcLjhHfy3a5FYfL7C2vHDAmBRfUd6",
  "key38": "3zCuDY98BQxTMcyymSdoFggy6oVjC2kfoj6NphDtWMSfGHkapejMvwzhocDp13r1T9vva4o6nRg4jv1egzd3awwU",
  "key39": "3SFh6kdyrbWZDj5XUAa278fWv6rVtJqfBupzhJ4sxckjQmVWCcXb9iNMYR9kLx1LZqQcND7kSsTJgKQaZjStL6x8",
  "key40": "4Qi6srDskxjUvKpRWpxNLHKmJoEnXwEoXKPKvUpujrGQFDjqoYSQnZKJWyLPPHapeTSAADZ6hYKMUbZzPgRsH9E"
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
