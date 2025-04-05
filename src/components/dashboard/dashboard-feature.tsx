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
    "4z7NthySnPcETrgM7yTqrstLYvMfFSTys6sXXwS8jtLVHdhC1Lq7Xp2qWhR5QepoKaZQsC1SQUtSRTwZ8Krf7Ezs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44y6azXTVoqYqsBzpXFJmaNcEjYYZjiMquZzfEFFvsUim51oyUeobNGP4BpyUj752cS5i1LJkP8FyNho1qBsymjG",
  "key1": "4bigWgYNgcnPcVbojdy83qhhrkwfcamCaHt6Z8Wj9RhvDVkw2571XmjdXjryCjtK8KxahcFSSaCEKrwKrKo5MpQU",
  "key2": "Z1UUQ1kANr8DMeLjNKK6HMb9SLmvMNjgHgp3rTDfMZcgA9VwjsFJrwQohLh3vWDVU9Re8y63aLSwyqGHAwZWVap",
  "key3": "2JGvGksdQvq6bpZ74FpMiMyFBKoEkVZQwusN1fLonFEvEFfv827FMNPXENCB2m4PBfWUofSd33CH6QB5WYkt8zWJ",
  "key4": "2mQZzFzY17GDCpoNZ2X6QP4ChwUbYGZ4RpMKvxxLtVVZ1BGUKM5wpJEy9F85yJAat1wo8W71BxSSiMBXVuU73vYd",
  "key5": "4ysdBEBuJocaB6BD77cdPJ7MoXFw9LARYrryKt8i8GwyZNR9iwBGZXa84zXKPwMe6kKEiLZjmb7eWV1eVA79bcND",
  "key6": "4Xd2NEYBaSXVJLdAsRMsiod1JAyW9YrqEPZNLYQwoNc66jhC3q3evq3bL4ETRfjxbvX2KdwgXNGvwPU2C7cftNDs",
  "key7": "2miwDpViJRDYvXupReVvbzzxNYFEoWTPLAmPdGKoUmtyfgiGMFcumom8qWXzHpjPA7mLwzUQTv1yG8ZCh4UTbHMS",
  "key8": "vc7GQ6fSqy82DNP9WTVpUwwUJjX2vBHMdxtwJHp2abkxa4eoUtGLjDrdYHP6tWwXyz9dps5NFpvnkjwGnefso2D",
  "key9": "2ixBGjL96Bgyoqb4opTRxpao13AS48rN85hQ5FErPG1hMfnDN9UzEVtj7bD7j66mhkWTfRn7T43Vewqw6fecnAfS",
  "key10": "5ZsNBxqa6kzKNbTMYq11eChm3K4UugnD1A5qg1H6ntWcdRn7KcZrSxmeQPPKGUxUg92VCzX5ysPJseZsDwjnT3jP",
  "key11": "2n59yQGYLjktEaxNtqr8z29RFNXGZKKRhbKKaEK5h1NGoyE1FC2ijPRn9qaAtxbi7HcrKiif7qmtytRAXiSA698o",
  "key12": "xF6AeLjTo2JEVvobtCvhbwRXaoMLgmrjYVWfHFnzeMTPaeKeJXFE6VBoAugG6UiWC3KMGAcmHZ49CMcwwafRBTC",
  "key13": "4GzrfoavEaMGFADts2WnxX7VRJrBisTAnGLyH5iRpLWdiEj8gz7MhVZwcqh16Q4LkCCpD58wCnwY5MHpsqnX5qdD",
  "key14": "2vRc7cy2649EAmXNhGtxkbrKdFMW2fkpvFPZQhs4WJGhAKVbuL2yh6zUGJLMEBE9sN3sbQPkJwXaAf5j4xSqBExs",
  "key15": "3ukcwkUR2mxKfYYnfKPWMgsMiPgD7tRNTU6wAaAoy6gHeAgGUC7FkU6NaZSykFg6qTru7TkrAEukpMjYKf8vrKK3",
  "key16": "4H5TnpHu1Ps6RvezLAwoEEBmkPmLxRmDdmJBHttziUw5RBKZEf8wLkhyyzuVUNkr5XQn8CFHpb5rzdze3qZGtH6d",
  "key17": "4G64o5sSqJxB2nQmPAV11s725jtvg3whJ4dvunttNFmxq6UVrichEgJKnKszD3FzvQ57TemLFdxKE9UXJfbZTtQz",
  "key18": "5hQtBMfavWqWvLUqE5KxKy6UKf36UmeiQ6H5F1vEgssex4NhGcxBBJ4cAiFhhT8pJkTjN4gi3miD1ACm6BpFtMQy",
  "key19": "4YADhPh49614cPyDSm8aPx1jaNCXx43bPoMyKccroWXbsoZVTmx9gDPKPQGYyaTgATiQrSVqze4LnZsWau5Bw6hV",
  "key20": "5yAQJozy7JbqaZxi546ZYCUyMEJTJhwk23oEPZbwdNs1cDvYLqoXqg8fdT5vD53tHMHHMyEqfyyEmdHeKTuBs6FR",
  "key21": "32iGxyScArFLK4ezcvYknRzPd5d2ZWFkZrSgL8fiZVSX1Ko9KrH4gye4hFsjUQHvkJDuzgBiBL4G88xfXTXgMwUQ",
  "key22": "67fbUc4SanpQCFDo6Sn5F1yeQVwipBGwYq6RjUXdr82oMVFwZVf8NE2Ex6W6U598BxYJBLHg2STLuExUf4hfcYXE",
  "key23": "2BXXxJrsNPPqsswWwmpC1cpT6PQHe6pihibiw8JSLkk7tjRTANkfH5c1LaZ6UhTKaMBdPRHmpp9xpG5L8tffv4D2",
  "key24": "3V5nA2ywDSZHD4YrkZPXenTBnsRZCdvZEoFZq5DKc5BqwNexuxsHXDcScpgs2Xt7kkVLSfCe1GhFaUxocLSLq3gG",
  "key25": "5wME6CRU52VUPkE67A4VoYPkVe4CxCNZYsHWDmABetxXZJpHtDMQ3vMMSyeBe7sFpNDz8kiDdQRy3DSypWYfnnKL",
  "key26": "2E5KS3RN7SNzoGfVGFqwk8YGnNvr6TwpuMdNvZif87BjmozzDVhPzghZtiNG18gQDGMRXRJJEXrHEmv8fRSBZ3EM",
  "key27": "5rcpW8n9G3i8MhJJ2uBALa2tQz6Epp42Y5Sy1z5c9npf7JR9XHexEffuTLDAHMoevp7LGf2GuaZx9VjsJotS2oSF",
  "key28": "4kh7ngXA8bK6BGWvuujkQBhLn9fs39m3enmvUT538t1Qwe7vQG45rnwz7mjBE9kNCXNRQUraaWbm1thXnyYaNswA",
  "key29": "N5K8CwLvBZeUkcBX8ctehDiUN4bn1NtYYApTSGqkD3yWr4EhLZGop6LKfsDcwpB2AragXKYcGqZBFit45r8soCM",
  "key30": "Dd7CL7W9XH8zcxVKHomjdLWa6Bte4WMisfRa5BWcoM87krz2mpngJt5HN3TWut2XXbdJXfCgykQ8EGGzLvnhLAy",
  "key31": "3nXNweVxYEa8SiXQNYxofLsLMXArFsGLRNVb7FdCNfdJhvrYagpSTH66bubbnmkkeF32jVYs58vtveq8gLmSC6eS",
  "key32": "3yQqZqCK23iBxFot7cYZp4AA79A2zcvc5qyy5MomyK5w23PJJ7PpMfL1YBZzrQPBXCcYsRJp3pW6oUjE8a2Te6yE",
  "key33": "2jd6yBnmEAyGCL8DD83gwfu8wMbFCq3Mf1dUZWqpwGHD6L6RqKTFwQnhmVsrLzmvZbJBtXF5knte3cxpb4KPYo8N",
  "key34": "3KvtNd74Nr1Ei5v7RHQmHntLby3SG8EPEVEcVYQWbCP9H7f1M9KfxumhDxPa5wDwjacymmuCCE3yjmwYRHqZUNRP",
  "key35": "35drnvT1YKPUs4hupBrBAuvBx7GuNtMBCHHeQc6dGdt6Vuj2nteHRoKS2tixaERVERpCLQk4YWEPidjH5w62NWrL",
  "key36": "2ofZVktLA7tucBnGo4pLNf4UEZ8ZvR7JGoJ19zYybk7cAn5B9E2W6EkLXa5HuMAQEmahtLDFCtMqpwyUtiWQHimD",
  "key37": "3oPj7uUnx3KRLkyRNdGqAbsvJRLGCGLVsPksgn8Xxj9EMK3hhJtFh43UznVWu6fkbcXtAvHtCMzKwsojTwPx3vmA",
  "key38": "x3YtZtvjC5nvX7i1k72RsfyUYutKzcjcZtr3QhP4NQA7WVnP7jrmcmfrMWa2i5qweDrNPwVzSEeRPksVvrcKxX5",
  "key39": "pm6ab1RA77v7f8xAtxC7fCFUyCj18A9w6B5aop1d3TfMnyyzHnH1thdbEp3FBpLTB4SDywTADqDdNQRodAAiBZW",
  "key40": "Rjtqech8bDHLsUcU84pHkX7fHAZEwYoCfWVeYHpyS5wzkxzQLsZrxP8k1DFmAMFs7oKPjf53drpmp7w1RiiprRx",
  "key41": "2dsKgd8sEUYWoLs4YbmjufCJbUWPh4mUcvEyMh7UNQL4zePuHix6ZZTHMsEA65pn5m7TweU2GBWzzA33U19tYzjK",
  "key42": "4bkASrMWMUDu9sSrj1z6548yeMSVCVq5iT2K7Be3zoVeLtGdTofqDfXYCPqLJFCyKQpXgkCzMB8eY9bEZQRGaXcU",
  "key43": "5h9teyR6DhpxgrGXSUSceWUPQMSdmPXcHjhjD1uHYoVK2rsYbAH3NZ22iBbo9rTob8y5FNtQRo5pCYVQodoGcaVW",
  "key44": "2pFZiPX32iwiBVijPpH1fQDkKwj8U7US7J9kqtcfGkqZDXrGnANLiaqX9uupZX6zhZpa1cyf1K24jHRkyaybxZdJ",
  "key45": "4Kb8eFZqU43oUPWLsnZXXnQ3b6pqLrRMZvAEg6RWnL2Sq8hTfpViavWhkLDqTZUvF5p47droB4QHLHphaD3v3Peq",
  "key46": "4B1pnZoPzjedD3z7SVEv5SMcTohupXtVXpwcBzVjdUBgD7c1fjmoy43tRXw5Hob2gmbanwyH9X8Zx54kvg6hBSku",
  "key47": "3hZPpU3iHXU7VBiU4EpUnUwHYz9sgpLdH6wJRMdpo4v9kLiPMzhzADHcA5bF5AjmWWo6H6Khn5XCZT4QbZwygRsu",
  "key48": "etcq1mJ4Q2ftwbbzTUo9MiTp2EtCAwVeEh693Yy3zsECejkCLZyZvW3sHCe3y3t7kuuYe6ywZDro2HD9YDrtmaj",
  "key49": "4YiLwyR8DytzJ3d7WrP9evBv2NeoMzhZ3j9zK9fcmwBEu2dSihapqDjkPx7usyWEXZu8viRZYkgvksCq6kcfSCp8"
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
