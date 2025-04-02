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
    "2KLyoh7isnHWodmU6NcVYn5jV9pELaiSPqy7F6M8qjabTryktf8UMNFp6UBcdRAUHvXQ165BXrLRicreoSyX5J9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H4LAx3XJSG6brZ81ddvdNKQhccnQp9uiSyoTgotPj43AfXk6FRnyBsYRqCrgKV3t9EywX8YaMVaTXPKhdXtKwnz",
  "key1": "5wcn8GMRKGZB5WvwQwm8x7yL7RZGwXbqpvnEFmBBtkGoRLdoLmTcD6iPjAXrHr2izTpezeYZNComahzLPmBTg4rp",
  "key2": "3VF56Yd8nz4vu3SwmTb8GmRC5pg9K8up7rh4DHKLtimVyC9rBdKBDxeHuBGuf49LwtHz1q6noEFLzuSQa8u7fZw5",
  "key3": "5xBy78mGWdbNtJAxehNyb9roqRRFntQFSWMw4cmR7Zx3QnnhDMF6Yiyq6sRtM6CvQkiUgVF7PtaUdtgzTNdp4uB9",
  "key4": "4DB5Ap8MsEA1rTDnQbjXi65w8dHUWm6dUpxDcZeW4QuB4s35va9vwcZLdfSdAuZzppFMeVxNZxRpyBUZ5cs37tEg",
  "key5": "4BS4HuJzdiXSRhDqHTLtaozUivLwkGbtf61YdQGUxRJAp27BYLt8SipxHCEnGDU9sGzPY4q2RehGSZrbBh5yg3iJ",
  "key6": "3vWQ3ASBeLeEeL28kb637sdbDzWNkKhTinsAbbNE12RKroZKPEpGVasDAKDmC5VVgWryjRKmsY1BvVwTvqNBS45",
  "key7": "55Uk1d7C1bXb8qWvS7HA74xuMVXriEXQ98vTwbZqtVEY1keLgnzckX9AUSaJNa7AZWRwcyQDdcteKeu9bSkDszjo",
  "key8": "22ojo8bRwLjo8zVz2oNwqKonLaPNsGdMhELNp7JUMWmD8d8uHTUHDKozMrhJ9gh4ukq1sQfXAmTKSRqgN6HWoP3N",
  "key9": "4QTrg9c7YDjXXJDDPMVpNqmwqZrF6yY4ua3wdZbu7MnR5iRo9oUtnvfJvEuGYzpHCrf7CZoiiDmT6tf8dzeGrd8K",
  "key10": "DhcxW3UjoUZxrkFwPdF3B7unKdsPkX98bzU9xEnGtbY6TKpsEGqCGoW7j1fmPybyKsZWVWNuMJ7u5VHreGadUfY",
  "key11": "4pJwgyXDS5kSki6gTB3VNDkS3SxPp1cT2cfoesL6UFW5oETkdehuJ6gNSmxsYUJQxcD1zMhNBvK2gLhHA4L6Sduk",
  "key12": "5pAcUmokZXH8pjT67JAKx5h5h7qYJKnA7cQq62brknPnw4vca4Qtxtfhuj6cakwXwPGpmaZ9e5adAmsT1qfBB7dM",
  "key13": "45N2GWeW35E4o18stfwfiLgDgmqgeUrw9f8NrcaN8mtjJC9zpuTkaR3i1QsdomYEetnKCoPhimDqg52mB9Kz8g8b",
  "key14": "54wcpEhEaVD8wvJ4wcWKUhD4beC6ofK8u1GSyHjiPEtDp7CK6qhiyHQCsgstxWXF1r9d9o2wfLp1PrvoewjysxB2",
  "key15": "3YEXbBtECR8pc4QA6Gd3qNeVFKqbML5KVfz9jPnAj81qvCaneWYXKMpo4LLgCPDM4YEetutRJHWJx2TdWLtBTnyq",
  "key16": "4EwVRSqezP8vZFHP8khtzNwuVr3xpea4bKMrszg4K7yWsGuyoXNXC9FBrMAziJ94ANieJFnpDfKaVYTWMdwjcc4s",
  "key17": "HzHDQhSXdtMVc95jVTTU3Ry122NfxWCmzcHyRB3VKS4fuKp2GVbv8xPgr1pn8UFE2fadS3584HhBpDpL4CAou5T",
  "key18": "69qC6Zcm1BKzsF8sqB6YWZZds89EadLGUUKs64hHTNxSkGfjenjtpRTTrDDf2aV2vaNqPqR4uy6KVEtQJu9jeDJ",
  "key19": "3vEYuFnBdm6QEs2dEQzgk7ZHvNuxTgac3suMAPyaRiRkMnKNLM9gxLbPqMrBS6VrfxGEWww4713qPkZqpGQ4YkAv",
  "key20": "3XwZFmtDZq6XmBjgaNvyPXAVtVU5tA2AoZibE9VKMF9YQfM7q6kkjizdvxgBw6mN3kF3yz8EEh5cXK4XYWAsutvL",
  "key21": "3hT3HG8NGkmnLuXTXNAKY19QHBKb6TrYtZvqJFNcQTZESzFTF8Wh4kEdTBVrC9QdZHNRpGgbNmJRFE6D7Liv4J31",
  "key22": "3JQvX9steLZvpsCtCddXwUsGkNvLJwPuu3GCtV7uWJBJEew9UkxwdLHqSdDf7LSjmcgHMHLL32oYMz63YhcJknvL",
  "key23": "2cxy9PLDSqq56ZJ4tmqANkoo4hV9F7n5zKQ6fMPu4rKoHQ3J7XCzRt6P7wJBK4YU5eALB3hV1sxyUG1nYNEvWHEp",
  "key24": "4HKo8mt58eDiXrPxzHTSVzTB99mSUGAj2TG4BWhbf3TW6GehWs5MQD6wKS3WhWzVQStjHZ4qUod2meExfHFwnwfp",
  "key25": "61T7B73cdg3ZW8iACnsmn5kD1g172wxRtoZVyFPD2MtM5Rxhqv3V8XdroQfRrQiQ1offSmUjNY1qaQ4CDMUbwbFa",
  "key26": "cYCCSaS766ojxvrxV7YC1u1apHBw3qLnMRexRsHzceihLks2h9ePEw1iFWiEjRMjHKs3zrzcgdfpWZaTLsNPaBi",
  "key27": "5QEvuJsBqdPj4fTyVTR8A8seHAgVtCqGwWtGofG2JAuEjzTgRFNwz3BxoHWxQTuew8KfQ3yRg4RSjx1EhCL8CUfT",
  "key28": "Rh5xMkauPZvEzbyF1fk8fNcAY2p3uqNv42frti3jr7sbJnmuAx7wjob7UtSAMLVoMhguJG7Yq8AvnzLaFq4Bmrt",
  "key29": "4GRZboJkLrPkstr9SmDNPaYS6ESq6FCLf5qZtmNRCtjLiQsE5oDS6RNzHZAumb6cgnvy5RXbrVXBELtN5Wctguhv",
  "key30": "3pJ4qRFmCkpYybz8vX4r49CFVHRgjNphXRrab8S23Bh86HrTirqborLuQGEVzFESrmF3piqDWMdzvWvCDUzEjoDZ",
  "key31": "3HR7PHq82v4bmMCp5Ekjp1JP8f91Ac7F4JK78mDwjFUC86FPbGFRnjR97MZ95bdieacpV7QncJab9hHiuHBb3vqe",
  "key32": "3gFDMedwH7mnWSTTC3k6SGeQiPqmWtESmNJ5vC5Y53quSbrofBqFiVHXF6wqJEvwLskKBP4VBu9h8UR27PcT8TWV",
  "key33": "461JF5e2eMWWQsv6QkWpbnoVYwT4WtdSSxT2ngJzTN2LBaGwbqcnA6z7EsktRGPNPRAnVEdK4ZcBhMnWE2nEAVZu",
  "key34": "7Rn4oTYBTVHivzhFXq3ACbTv6iSfsFNkuPcJPBt84MNY2v2yAucLZuustEyfD5Kpg4q1YHTxmwqoAc5HeqRJ94t",
  "key35": "48LbwupT8n5NQYQMYFNkhPZzV3VJiyUq77CvrKGGX2VrsmVgQJmjNtxV4Y5vsjarxVmm5hMxd3GfiBxk7uzf28hJ",
  "key36": "4duMR2fqAdLT3xQ7fz352XSz9BVssvW7xQYspG2j32T8af6iuH8yuZvW3JgfoJ4cYdnztSczAKC8qZX2gqiruUCc",
  "key37": "fx6gjsQVpGoqXkgBkF68APJKW5ZQf6RPHVpoMXMXLi4TPcJ6bKdUewsDFxF4fQ79D2smjwwTPzPUF5ALgS9gkFu",
  "key38": "3cjazjnPohnmU8sZdd7GfLuNYBv2yU3CwD232pMJBCTZSPmuqmkSaJ6HyZNMW3zTxUXajYEmRCPUAxdc5vH9r6Kp",
  "key39": "3zSSAEfmKqVTp9kqsDGDFcPuZfejiJXnpoCWYZJR5AEgU1UZucHy3hSGyjAB9z9uEzTDJ6ZJTFtwsX2X4hE3ah8g"
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
