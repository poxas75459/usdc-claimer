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
    "2iF2b46LYZxt2bZaaa2qwAkWuRHyKUMnVJRpvzudkpVisPwY87qspGFjURun43jobG6uaNaeTQnVzkCFwzowGhRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4afE16bssTKuYT93JBjcBFF1rLZADirigPVfprrB6UfB5DxFbvURXBrNro4MfFpo9V96wfwirjZtgiapq1hrzcW2",
  "key1": "5w669cNu399Wqr8Xyb35aLZjgrh3MyuAGz47d6T2QWnEpmcZLyzReKDh9ZMMMyzfrndEDSRq9LzMkrvgaBPJbbk",
  "key2": "5Q7nhk8kXcYsnRebiiUQATyznRnVkvF1p71ufJTQwMr3yuJrh3rKtgarrNppa4EAQ6bXVy1NmDRR9XEuZC98M2WN",
  "key3": "2hfCvnjvrQYWicQm5fFWCzu5gPzmGSdFfNpnpPnfLY66wgRAzUBxWCKmrezPPdtgjFFS1n1sS2aUbWJ54mqXCJdK",
  "key4": "5ZFQ1b5KHeSo9riu95984C7UeJUhNTMRVTQDU9fn2cypCswqqffTdZsF3sFcg3eb9KjRk5sCVNcmk17tQe8DBH1N",
  "key5": "4SHoWivje8qtMy7R5JQiEenQD4PQ1sLTHMancJssZxVP7v4fyC9fpX2Fh1XU1CcoQ36DuHzKHMSyba2QHBaTpKPE",
  "key6": "6633GdhVfLxH9pbTg4MZsB3vYKBrvvdmBVb49Qqhu1h8RjATFDDgt2zpqntUXXiHQkvPh68uBHfiRCnNfJdWzCFf",
  "key7": "5b8MLQD1s846Qvr6EHdsXxCk6VVDduXTbrFeUsmqEKPrxUXRikKbdZxhWSMHR4w626db7XHY365Yqic5tecm9Vvp",
  "key8": "5jc6S53ojtwq7kxugSQTkK2LqyawaoemJxgaVLz89JrbntKvxscgxGPLBqSCjQRkvo6os8RGZaiV6RFEUNHXTx3b",
  "key9": "4LDzKaujfoRTYPhzhdo5ZbKrndJrjk1gAzYss3oacGkAderAn2avKyd3hPHNGM77HS6PXkBuk7sVcerTTuNKktfu",
  "key10": "Rz9MnPahwBfxcMz7TF4KvdqaSC59did6MDhQNBxpFvtfjwaqSNLX6azRpjfAFHauptyrHP6PXXCR4jdsa76Rt2y",
  "key11": "4J4PVxnMm3RgHDEuc5Nn9i3Wu4rpXBaFMfTjYyW1mKt5hc36oM7eZDVA5ufg1amUhv4KFRBe5npfC5Ef3UgnFPyF",
  "key12": "23skGWfq17zNGsJUVd1ciL6khsk82hML1e1o1eLPh7caB2AKXJv6NrPHdSdG1hzHphJRu3ju5jsNgPA8L51Fn6By",
  "key13": "2b53Ky56ynmj1RdjaP1omvcZfEKPihgGNV8QdR7cbSDWwCffnBoAsFxJuMSzyVDmuUeuqiE17nC5JQF8knshGHcC",
  "key14": "3XYTXr4sAAWVuspX786XSZW7Zv5kTTaozGzf6pvLhFYkYYUjkpKXifAoDUcsWKKmWo2bYNUHKNf8eo8yrSXrcTBC",
  "key15": "5xBBr9YXbLbjoCejfqza3g16L7DeGCyDoiQqqJnwBAoDN8MBG2W1J8c33DQCYqLrmbtAFta11ky3tcCUKP7KWK8s",
  "key16": "4qfaDfU1bEj3FdCJRwpfajseWhZcj14a74348AKphksz4oXzJaaYgtakuN3GqSMtqkgaorLh9LzKP3C3hshRiYc",
  "key17": "5XpNvWFLrASE5gtk6xYMsXKX9umgC18UsJXmGrFkQs76GEBP8euLxMmEY6dZRE7U18ShvHDZjEoWts3WT3mvWy4o",
  "key18": "5X2BFpxMmqWhasmLZVQPgYgxgU8osavAZdkHgQEYoW1vkxTnHkjAvbFCi8hCCBYfPLuzRfSVSLPUNeHRFxEgtg6V",
  "key19": "38AwN1Gz2ZNhbBvXdRCc58AYBWn7tvXrtjmkCTCUUCBVfH1vpDmPPnpqn2Mu6rj49Qa4whQzRQCCFurDeqMz2M8v",
  "key20": "2MBPzMii1CRKEaNonMMnVzw8CEywuVXQh2oXDBuxHRJ2EEX4muiboJfn5sev4bLu18pSkSPNiqkNREhVqZXWpqgW",
  "key21": "5WF2R2XecJMgGY6WJSf78ru9kYPmASKaFeBLF3CFhpmojbg6TSr4N83XUX369KLv3wDiXyBT1Cosw5Ptz2RyjBqG",
  "key22": "4LHHKRhS6JDVJWPgm7rbKvaVPajJKgzFhARyjumWH4KNktPZkBbssuhRD2vsF8Hryw744JXVSZ2Zuqu9FK3v2pyK",
  "key23": "64wcXDipDUEmcqDY6kEzaVbC6M4Yq1EHxBmm6p7jowmDiDpZRRAPmktTUZpAqrQZGagjTQv3YFRspmaBD6dXw6Pc",
  "key24": "61QB3u5tXwhBc815wrwLEFdCsn6QJ1b8M4sXxNLGBbZkY1rPHY99BrjoXxQ17eDWwmqwGH8EV5QGs42EM2BuKUyL",
  "key25": "65z3tC5dbpzzaPkkHN2s8v93rEaduzbLezKwARnUpdQgzcXzU8LLmCttFQomzfP6Zmo7SAXuf6fEQbYTbF9oEEK2",
  "key26": "2ke2NQ21QQR9Z1Kz4zvuWTzWHj1d1xEbJQgtg3CUrKMqKhvsonrTYAYifhTVFC4JSETnwU9B4wruEWV8rogbK9AV",
  "key27": "4L6jGjPdQTPyJv71Ak9CFn2H4BjHQwPGUV5oQp2Jhtj6BcQQGB5eN6QzkrxsDuZmFTMdUL9gNfC8TXsRfv6KeEd6",
  "key28": "4EtitsPUJ52MruJudGyMY1BFZokZaHmahjDzjGAGqwNTJyppYGjESzYE86E5QHZZsRL3cprujo4hfHaMSMvD3qCN",
  "key29": "3U2grck3Tvz1onxbk1CetK2peX2PeQX8Qi7YATjwjaAUUa1UtqmgwEuZ5MkWhVi2R87dZfitTVn7KgXLymhPKa4R",
  "key30": "2mej3TpEeVUMJPoc6Wu5AaqgosDJvDx85QdCrdu7CBFRcDW4STRoMyX9wUG6Cxz8BUk1DMQTk5QtNaBBnhiWCL1F",
  "key31": "5mqBAY4aZ6QRCvnzU4xBgUhvNGCUgrpz3UBB5WKDM9CDXcqxSApiTnU2ViG6GuBCKMekEemx7AXR9kTLPWJcK5W5",
  "key32": "2qRzVRLeV6oAL6coLao1KzySoWWdUihvjr94SGa6m1pBXS3Fw37qkmCM9j87vhuFNNQU2QhjqdY9jMAKfQ51d6P1",
  "key33": "5p6FLDSh5x35sad6mLPqYxW57Hrb8r8ft9GFvAvTjezja8ZZQvNNvjRVSaDLWBTckYo9YvC1wawwYcgsX2QHJQhM",
  "key34": "4h6Y2wSCuteemdMpQuyRm92WrYxDihuAd6ndRyHPvYXksXX2Yusmxpzf7VfQsRYgHguE7gxho5HhJQKoNg1VGC9q",
  "key35": "4a8mM5W1xp5BT69t5ZLu97Z5ee63c9WUiYrf23g6wuv1EsPDtSunsmLrvETqtYoTTcKR78ExmdGdjScgqwizZu1P",
  "key36": "3TNLEkC1YRzJZjhEKnHWT9RvnmyUioieWohar5QuaKnYQXU1kh7CC6ZjrGRP6msRiUMgC4cXcv3fJf7wzPUfkb4Q",
  "key37": "21tbapNum3WkuXoad4eGuthaa5Cv6mazmgneEn8oEmaJaCLRfxD5zqpdm98hqTQuTyW3z8YdWZuAYQFLGYbYqWzW",
  "key38": "51oLRqG1chaLz6hT1SRkQZ5FMaWj5LEgyTCG9hLHjmmaPzM9NppuS4iUo2N7KQQKxVuizaugYey89mmU5jSiV2B2",
  "key39": "4dK54TJhfJUQNxTzAkPkcmCKysUtJpBEg4QySQSish58h376viAA2MV477timRBcDWeqePFw3iUH3YtmdfL57bNN",
  "key40": "5165xTb1fmAPLnzMEewE8Hev92WhuKT3Qe5XASKM8Hb7sP9nhy5Th33npyw9snsf88t7W21MLQPZ77KD7H9HpTYh",
  "key41": "PJS5uNZXiHhWTCEjBsqbaKNxe3KFH6wyBmdDjaUK4PsdFFz3ssBUMNVViKym5AuEC9v64CrTKQy5oaVMz59UUZa",
  "key42": "4wdvWw9QXHrsymgqeh4jArVa7WfiWGwMa7yKzhF1mcE8iHNvPQuzzZiufUc1suMpYKA5Y4RiVvH5Xc2yQJFJ7Dse",
  "key43": "5aYAsheDSgW7mjeahNvcoeu63TE5awx7U1Tn26LzcTr2QfcCr2wX7hy5ymaZVqBKmUVdY5AJcufdVjDwVhAUS6Ju"
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
