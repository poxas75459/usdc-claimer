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
    "2NtBJ2a5M7kpGuSDcm5v7HqJGiSuHWMLpTTvX7DqtbsXgKSps6J9VTxkwJX4ziFUkEtL3hV4KV6vVjLUdRupQHmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xm92D2bSTVFHrADjvSoPsXZwsWLXuuwhe3M5JVb6Gp4D7CfjCJJPoHtd9vdDYovCZ3qxdooUYhtboijTJn9e23z",
  "key1": "5A9CgkEAsJWUrS3fUqhJ2ouz2A9UmpWXrFvHFJNUkM8oXX1huzTaccWung5e8H44XNGasnHMhxGPQx7bM8XnjSZD",
  "key2": "2vqiyeA6q29dba2S8CTcyAttZKe3Tdv2A5uGGoafP9qKQLh16oWS688BiqXuSA17j7BpFwwJA89Euu2Hj2RTFccy",
  "key3": "2uZ3ykH8kBC7oMrdZGJTJjewCcmuybZodT28VqnQhEMAbw5f8W7XSVLbcxEce5XLFin9VcfuhQiVeFKLhkMRvEUv",
  "key4": "2TC7kWVuoPxfxgsyXohCAHEZXuYUZegLEL3vtZ38YkDdft2t6K1S5HhwhuoaVKRiMHFV4wDRZgFETMbBBGFDHJhr",
  "key5": "24m85ofW5hLAN4CT9eVY3B1FtMQUrnyWyg56E4HSdELVv1hec2hKvV8Shtj5rzvpAC7wacGLADbyPuMwz53Zcmnq",
  "key6": "2vuGYrqpSSbjCHmZY1KnF6LdvVyhPfhXzW7jrAUDUxgQR2ajYFWE4mcCubfyMNENbpT95hg9sAR1qbQFCKKNDcK6",
  "key7": "3BuAkpwZScFhzN8weXDu3iFXiF5MMjvkk1qCtVabLLxp4afxsDXk68JSc9hFHiE1sP4svnVHzuf9XPoRzQXM22cV",
  "key8": "3dNwm6oFa61QUfXbZrQX1vFGLAy5q5epFqWhWh3VurYqpvhnbTPtTbHVxcCPwpCsikt1UDvnjWHZiruVcXnJERFp",
  "key9": "9kkLK1pQkfwje8MoLTNXrKJK2CSyhQbxitAnEEH6UmmUyuHGdg16dF648TjdHmhc5eN5TBckLEYqPVD4yksYeys",
  "key10": "5RygFhqXQMKtneYpFzcwjbuAaSEZiNVSz6eTgDt1rND12K6zMwv4DpWTsf1gkK84979X4vQfgw5tjajammhwUQEo",
  "key11": "3jZBjFy2E7TWDozaBAU7rBT3iCRvreZMmuzKdL6nM3kWzcqPAak85BxzFy66qyR6Pwo1imQUzE5u9hGGyEEAxd2H",
  "key12": "5crTqKgTa3tL8iqTqKu1yoaHguKsUfmFBXMCSgyYJSiWKq183q4cNEAw3FQSgV1gfTXKXp1fGssiW2LmV25uwzKf",
  "key13": "2qFmWo69HozwamKSxnDDgdXHw27MFrVJBYudk48cdMhbw3cMv1A82ustK6BQT5pVCkd3vxDaLupgU5Qn9LtxU62i",
  "key14": "2LpA66rgCtyjVyWNeJS7SUQWkBingwtg2VdaKWXm1cvLFizXjojTaxQL8oXmrmmjLp6hkSPt7TdbaeFNYq6CnGhB",
  "key15": "5zyXEE5XnF4oSnkbntfNcEf9ckwqVbgX9VC17MHnLG5fXAEs9ujM6vHmiSkpb5hqy6214pzEf7H9DhmFE4DkepUJ",
  "key16": "5Z15V8eSjosGCU1fcPM1c6r9MzcdNuSD3npvpWWsMRqfXNqErgHkV21ofHcD4NWzmLHFDjwEcrEx7s5NmGJ9BoFa",
  "key17": "5YYVkrJp2CWEqoKk28CyyWTmPHW9R3DCuEsioR2oK4QAAt7vCPuiygY4DGzgXgnkeHoKBp22KM7JYMzWxVg2r6za",
  "key18": "3t1V7pzv1UTVSRXpvQ19khya7Kn9P9PvwWzDNpT7EUKpxd798q4BkR52AajkbS1jKksE684cpoXRFFwvSBft9X9d",
  "key19": "2eXemU5axzaV29nCU5gc8rEwqJs8uUVxoFEPcQYgYBXwGGmEx7PCJLrBGPJswbKnMN4s6eJNYXLB7VQ9WpnDmP3E",
  "key20": "5EzTyr7X2xWQEDmuVrFs4YueTEEea1YYqUnATTQkqpHbfNuEcba2cAkV5UhLPUjfCR4N5p4jS7UNKmkJ1q4pSKZ5",
  "key21": "2bnpNfDvsyMUaoEba6yPVgWHpuowRV1V96pzauD8vt4GHEYaVZFNQb9EBpVbH75v9KPcwNszyieQHWS65ytHxmWS",
  "key22": "yNcgx3EXW4vbkC8Nw6USTm55ue2FPMEZ3VhtzrPoZqgjy48facsWBSGv4KUc4Jgmbs2v8dffF5XnRQAKmD8sLHa",
  "key23": "5qYEdV6SjwEGMuTpBwnvCxPkGGCpkE8xigurRXxu7ir5UWCkVReYQcA7QNSUzRc3tEUuCCMUre8jjGdQWogTJn6J",
  "key24": "acRDTn1cPUdGMuH7cRKUVfZHcRsQ1om8dwq9Z9bbW4BLSWXodQJEAJnEhcM1VuMi8bVXr1vNzWUuZxFGgtegWxw",
  "key25": "3juwgG6koqjH1PLiNPfVBFUzBfdVSheoXKkT6nJdcSRVvzT2er5qJrKD3SrPNYZNpGQ4eUjqha1reURRFEeVjkK7",
  "key26": "2aVDJXf7KtgvANtQ6U7TmgQeNZJrULyxTsmH29aPRjhhrZkzdJ7WCc79T1Nj4r79Fr5Wm6TDHmX6DV9UmjRkZ4uT",
  "key27": "5ciQydycUZX95Mpr9Vwo66fssNj8jPnbUMv7LbhG1YWSrANWmznYcvL6pwnnswB4d5kHYAMtQ3H4Au2DZdYbQYSX",
  "key28": "5V64VtKEadzcaJikT2t2FLGvRir1Nf5MwRWK5VgidziaaHQnrrTy6sfLt9MvHyaYsz4PfJUpGwEyPkk8LGqtxK7X",
  "key29": "5E4uCQKMpTWnyQbYYADm9T5aVk3xczJ3vk6uxMPmPPrJ3x6Q96eJ9fSGmk3fePHeyLfmweCh4U9q2EHZ2vFGauhD",
  "key30": "Jqu95Uo32fZWb13xRgHj1cPpJcpoGTjz6vuXiNdMqVxKMMX3DnnC8dBZT9ibcYcFTVqDptxtpFvf2zyfRkNsNTV",
  "key31": "55iLH8tNp6c4NtbXnrn74Z6Sq6kDxDWiJgWfKwKJM8KJkFUMkaT83yGCDzXYdyMg84io7vhdU5Mhf8M8FbX2qY9F",
  "key32": "63crnbJdheqp7ksSy7ZuEfvsEWDy1MxpYD2aSjg6DCkTaALtrcHcB1wu1xSVeK8DNyT83oJGCpoZqCfcwRuW3kth",
  "key33": "2E7JsFVZBgZ974T6UkHSrHHnQttNpXFyU8y2b3qSurYfZsH1puqxxPBi9Y8n24fcci3EQzXiFpixEhNdAKx16Kds",
  "key34": "7DL5Wa8ChDt8mMuE1TSNwKUvgmnBb2bjKxuafRf6i5xJBpEbRUno6FYxYQzw2LkS9KSsgtJTexz5K41WBqKddtE",
  "key35": "3mDwMhb9at7nvA8VeRoQtMkz7ZiXPykGR3JZ9Etoa8W3829AWhEnu4hZ8e7zaApDCbznPxbQudGy33CoiESZ7W2d",
  "key36": "qA5bxYDG3gzjKJWSSABHnS9KMXUuqLcNfT7x4kes2qDezTEt7xMWeu9PALCAxZm2Q6yZU5wjQbB8umqGmb2cMw3",
  "key37": "3dPzR6fhWjQ4Grjmwf1bA5mLykj7vbs1rEMMZDMMC2hzL4qz66Y4DaPeYJB78dNStoQPr66KBANZSbxAn3sZw14q",
  "key38": "3AfaAn9qRrfgQ4wmukkv94ZYR9QADQLZpUXN33o9mN6hLW5jrCj1MLhzcRPbyR6gofzJqw5uR4Ch1owm5RZvLGMB",
  "key39": "4JLfUkW96RH2UEh5uoVFg16nNKW2WuY5SKu7PY1NNVXFWgyeYnndyAXhfUo9a5jv9h5451LuheJBJAYRFfeA9zvF",
  "key40": "3f7jdW7TXhWeVJVmEX2c965ALfPs9C19GsTSST2RpHdNKpkVBCfjBgj6BoPBDtCeMxHfH8tSRH8Xp259YRKezwut",
  "key41": "3HURiD6EQEpzMFugErua2FbabWrbHz9cpQsarYsE49MRdVMa7SoZ8B38xuTR2jphsqq4kP2CPro6kxkwvvNV17R8",
  "key42": "4rgt9xgyTzysPV9h4ZwKwextfjdyxwATF1AB5JuGHxwgkRjumK4fUdLMpcgi7qumLN93u66tKinS3D7HJZkiMjaX",
  "key43": "36mmAiCfCeVaHBU2YH9EALQPJY2gYVy9dA2WtVxJ1WDSptt7Z4Kxz7GZSb7HzBmcxSUQaUuMdtbCoP3122TNt898",
  "key44": "4HHhqE5bT4BiPt1BHS8ZwM8TFT8ncx8tek8PGPvTiw7dMDhvbwbsNv7SWNi32CGc5mLeYPan3HphyxHhB2SGcGLR",
  "key45": "3gSbJ4GjAzU8BkM9Nfn8iM5EiKUTmxHdRao3VvxSiw7wQSn7RWDcegTUMjvchChPQdHNfCmG4veFc1fNfdDFcJYc",
  "key46": "2zpGRjna5zLuiReRzioVoAJY4E1v2YrKJaKhV7T8mME8ywiZEULYDibAb3RXEQDKyVWBQd4jrHpug785CHaRgaeb",
  "key47": "4v23XiT3mf5eXDHtz3xRSSfTBk84yKRscr89f6UcyZyn9BTFRjX8LsXjKgxsDZ3vroXXzJKLdYE9iYCWNFsd3Bw3",
  "key48": "HXz5W2Tq1tTn9aTrtHGxPdQXKeddwEGbDhpfntP5tkjLueAX2DBAWfh7zBMGAmeNWmscbp6SpRrcMkDxMMdfRGd",
  "key49": "d3N8mHEawKxW3pLCrzjxB5uxJAxqmmWpLu4UBBLTFYB6YPA7str298kYjFQTbj8mGdJ4D9aiTB7vsV9D1BAKKAw"
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
