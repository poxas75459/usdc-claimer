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
    "4fpLrN6avvjZhrXcaTfVrzF7bC7B1xG6m1zzY6MaKP6WrcsGoEDncLaZ9YX5BWguSD4TCkdRDWTiArHkxaxPqeYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24kwUdvZmL7khw2uhm4sep59qEYtiPZrJnK5Lut7F4SbVcUGyzJYWWfaFxKgGPyuQ89hC1nDUVnT9Bk63hRupJJp",
  "key1": "4F8GEcVLF3qq54hkAsQmpq5925Wtn2Brpn2xmjLJvTXLe8dmwakYs6JcUTWEfyQwjjkFk1RkV6C7XJYuGPE3YqJr",
  "key2": "3j5i15VvxapLSFAkF3dtLGEYgyRoYvbCxLAM1Fp7W7ghkYjdNfesZH7sfDLZudYa1eeMKu3RzqiHUbhEkPqkbURv",
  "key3": "hP9ZzPfHXjJ8bYHL3HpAXek3Y2fMiDEUb6FanykZa8gjKRRiKcVigQjuumEwTp3XFwcz4Et8o51uUiZe3bX28Ya",
  "key4": "3w9PBbh7e6Vjn3Za78MKfrAyRFYR9HMUHZ2uPqSkhQCB2AgizwvFhYMiENh9GwAHjjCdLMxGh6wUXF2cfDe23hC5",
  "key5": "zChuyaiWNWJUgqnNBfYDeZbR6nVZjhxNVZLj4m1ycJYpXwTEQdkm9KWyB8yiBv7SchAuzA6AW8sZXnBdsJNMNMk",
  "key6": "636KYnhGyYWG1L1eDHJvftU1FfihMDemZ1BM2gT1PCxKcsgNoLPNVosrrMkmDJGg1QUoMpXwqd8pXdD9i9VoiBH7",
  "key7": "q8s1eiSYMuFr5Uc7zieH6UExQaUjC2DyKzfo5PKrstePstZJZM1RJBrzbS7wZZKH8NJbSpfamiagFoZxXdetbHJ",
  "key8": "8h6qA9wzjFw8fuuHTbHMbcZCA5VdY7rWyccrP3AuPEp1Fry4saRnt7PRpDDJpXEYXWKZJGYXB4AbfAYi4FsjGYE",
  "key9": "4f4yNkDB99dWeDMwi8r2JpK7bCyY1GibPdqx5GdE7QFoXC6HKzA2KBVMJK78Ue3fz8yXfSKzY8NhhZeoZEsY49hF",
  "key10": "3dFenSzMjNneohkB4RTUdNi6mUEPrqzdk6rtFb3Y42yHHQDoa1VPnHA7xBVBTF7KkXEtQZEXTpt4MbEm6tFv3CbC",
  "key11": "439jab37j171FoyaWu77kS3pwEaDmnYBHNP9ZeyMJiehyKZmADaXHpcKddQMMk3ajKGGCDoGZy856HnQmNvLsoiL",
  "key12": "3yMsSK5Nys1vzqsxXTPy2z4wcmbGXAhN2sdf17jG7MFJcc5vSqZxS2oVcTVMamfeABvAn1xzVNJx9noQGdXcW43i",
  "key13": "3rVBMYNrL1q8iiL4P3mJJggJey7CXyfRyvf3djw4iryH84zrYBpJ88R6U6wD5qpiowZ6RBVKcnV2xxDNPEJgxeW7",
  "key14": "4c1Zd5sCgcY5v25jd4VWLYjMVrD7PBvQQ1aGAfu8iRekRcc56D9tCT8JDRVQapYnLNfjdhNAabv9kLyaHrsGaLr2",
  "key15": "2PeHmbVUt49JJq2UkNKXVq1umbouWz5rexN42v1tRNv8A9j6jjaqodc3NDF1pynQzha6yqUd3V9X2KnhzqfVmrxC",
  "key16": "4ziNoHKVtaFupSRxa9wadehLx84QxRQ9dJgHW3eEAoDRvUyBcwvGh2rsRHU3WY2fX5U4pvnof87F3JVh4svSkbpt",
  "key17": "3nDn8DzdMXbB6zyDSGEpVPBd2zH6gawvUQqEwwLjno45NLTJW81uM9BULe1StPzXo1mZRFXNh55Q372amCUTbMMa",
  "key18": "4bWNrKH2srWvULgWF8NyUPEfdEEbQ9xCqT8wydpHN52nE14a2dXVsdY4AQcPhgjdhCcmiyc99XvbZ5cV8SEWgLYy",
  "key19": "8ekyFJbRu2BLsgfSzaHTC2NvA73uNUEziVsYSMqbhRnooefcpwk7ydsQwoNNas9jAeNTCyPRRqCwU6MwjmQvSaf",
  "key20": "24qzGZD2V2zD49aYMuKqRERega5qMgQX8pKZWXhNAVvFRce6gYo7gjvz5oRCQPeyD5D5X1BzozJG7yWfte1YuuN7",
  "key21": "ruHVcJEjA7QyKsc5oumVhdaeBwqGSfk8D5X8XWmLATiifSPHnKWrjXZY3ap14VXDWZtiBP82xorHh9ZYHsVjtri",
  "key22": "jaedJyiVVgH4x627nwQZXztPrhrkEZDKrRdjunXUKDXiZz3dq5S2vbfecBBCDjiRLvvQ8MA6Vh5er7AUENwqYtX",
  "key23": "t6AD6Rne7zHxkhnrG2n8Hc8fseEuw495RQtJinfyLd2sFrXd2PTchciXeGqk47WYqHakbQjP9fogQTGi35ppwDD",
  "key24": "2VhWX6sq1nbTmNwyE7ezJigAB9PiseSsEH1UFpf6zo8kWEW8XsmXDYqK8188WfJ6PeCrzfUo1ztbw7xuNYH831UA",
  "key25": "3tEG1TogCJTxsY6RgjzfWAB7fsA55r8wWddrkkCJhqGUkhFesqwCBnQWpHr676bkM2HgpVBZ1ySTAscajfide7TW",
  "key26": "2WNBL7h4Y1mPJYky6FXFoMEK9DudftUKXEcQ5hSKCY71phX4gNvNRDu5rNNLvxn7F5y5mJ3ig3jXCP9MSATJgUow",
  "key27": "3EcY4CBJZB5JEvC5fRWujcnqESbdUSDNu5KHgdyD2Xh9uQcjQMBudsUiJFWMnCqWjBV5VvBXoW6GBudFFbqYjz5",
  "key28": "3H9d6Xi5L4SboxeB6FbGgUkMPprRUCnTD5FXseutH3HFQndssCfpF8VyUjUKhwzb5Ca7bS3qDxQ5bbD6kZjTUQH2",
  "key29": "4YEusugfiXMH3E2N2MeZHrP9esZZVhaEnj4Gzde84mrrPpAyJt2X7Kf6YmTui9Suqfh2EdjcnrTHfb35fKTPjYRC",
  "key30": "3Y5pYT7iRZZpP2pJjndkQ58LPCHmEM8NB6WbTWZqV7q71vuWZQ7faCbwNPDvvJ5rZSkHi2gFomsLGeqvpq722WFR",
  "key31": "py7iw96wL7KRvYc5i7raBzi2zpQHpApEn4oY8fQ7jMLpbCwHf8sNwcGMZY6PWDyKZHS8MstND3v6gXkia4rdFqm",
  "key32": "2DsBUMwmVPMk9oMF8oX4wxVcM6TCtBEDxN4gJ3DRKuq8nD71tUWcGoymqH8szV5UURmfHTLRsxoRCbKajWiG9XWx",
  "key33": "2QuBLMMgncgBzXToWNMtr7DkrjcvEcoVGY2WkrUpaMkWC2MZLMsfBDAoEiuFdhuNyQLFfMABsU6Yq9Nigq67nRJC",
  "key34": "3y7To2vi4jqugLZR3QLp3wnunA8nHUP8yo2fqc6u38MbUXxLE7DsporbuFBWGk7wfA9oRyyyfSdDNzv7gp4q1H1H",
  "key35": "4VcTodtuAaLhvZksc7CFNWkSJ9sLhzLNpW8DjAwopbANMoYUHpZ35Tp7hhqa3yuNaaP3aSWFjdzdrGT35u6oDNF2",
  "key36": "3kxNueo1XaRdqj16sMcXgt9kP29784pdQHQ47pqECRNnCyTht8KiJ2MbBAgxN8pRgw9bDtN4rhxw16LSrp1LzWTU",
  "key37": "3dmzLMdQDTAGezpva2TvnNFzNkhTe2XrTDh3BPppZsnNuJhjT2ApxTfUiJJU9TYSw1udp1i4uhRd7mJzac9tNJri",
  "key38": "3TtLAQkvsVufvFwZy2EQ61DTjGn8MTzQWhxmHBYoi4PZAoVDbUeERmgAFsxtV9JQ5Kcz57tsS9UcooxsXubMkdrr",
  "key39": "4vxjY413bcbmTeWbprH4UaPhakPEENruMr3AjPtv8iKsGfFBpX1TpVsGms3JXQFsCp1AXoTFEsiCEPgKX97BDfQW",
  "key40": "2YTzSTeoWSwdEz7wT59vAoNBcEZhKBoiwMLfnewKnSk2yXd3z485NBRRMD3TYxSxdVaXG44LymYPj11bYR7CgPx",
  "key41": "5wHyhhuGBWwDNetXp1hvaJ13F8XkvHeQiHmRyn6tCxaXENyV5mLbUu9KnwkUdLFtWjJzwpeQkG3qU2BAeRg6aRpo",
  "key42": "3f3yz26Modirz4uDt6eHwY4soBTfkf7jYp4on1F6kA2F8drrvGAm8CvwGLVoJ8dB1yh6oYmyuoWmtx2RtEr3Hwkr",
  "key43": "HY9KUp7fWg8GpW3pDTEgHrQSAHBTFhEFMbe2fWvkWTx3weDbkjotPWzenR9BXZqibek5HNm2mbfRqEQF5k8AJfy",
  "key44": "5Niy6xSHDVbfJR7mFzq5tRzgakk7ijs5Z6J4LUs8x5SfwLJ6og92o6MXjLBqFo6UFxdC6EG1iaiupa7mQZpQpYXa"
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
