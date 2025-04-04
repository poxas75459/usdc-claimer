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
    "2GXCCnwiGBhhUQGAFUT5bdRhDcrmfgRbxxzS7HFHLYssEHXarn7T1qRne2pQYkiDjhxNfGUAFcpuJB1QjdiKDtdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mYCN5XsdjGiGAA6d1et4xWT8s3VW6vNQ4hGPo5PSjjtsdkhBt4eCgDmpfvmvEDT9zxhbG5cmQuKyanGfshTAGoM",
  "key1": "3kEGwy1bkwBccXqWzDweoh28Wf6V7XiwEJoWqCYjz48n5PU3VWZq7Td3ZM2mcZrCTkBFfR7ygD3s4xg72pwY2cTZ",
  "key2": "3pwcFnKXDTwUze8AyJXHt3zZkyD1i8rS2VZwrRuGVxSA6m7eH5LcFfCxEWX6dWV7xvwHZyBiaBD2rrhDVYKFT15U",
  "key3": "3HHvfW9SmiMahc8oCRjHJbLgnyNt31Qy4aLozfxz5xvKcLhGanfvyk5U3Le1CugfXEgjmLsHNwyT4mDHwhyxhjpn",
  "key4": "3bzXHXqLzaVb5hLXbegHxRt9eFe73Aybfc7dPqj3cxzaTThcTBZvwmY3CmeH6cCXE3HNqVDxqHKxzFJ1Cgko277x",
  "key5": "2Ga4H8SHsnN6xR6YQTEb2eqQuAUcLMNaqYVQztiShs4oc515SCQjru3gWyNZdWwN4oWP2PT5cavnZ5r2w462JRVS",
  "key6": "54HkgRNCY2aMG8ENbxBZmwKqFx82wa42F3ir2e216qzQ2794DaWaTLhbjGswJRn6AxRAin9A4WS6Jd7CPtum365d",
  "key7": "2qJ7dwZVFCV7TYTbav1mk1wPLf8iLo6VHEaEzhEL7acBEx7XnUq9h8tPo8aw7LsYdMazdJ8mGNiKvAAfvQoup6E5",
  "key8": "2fB5bqN5xWBqdMvpBYsq1tK1AKrZT6LVjcJfMZhg2GgNDijRSXMEsGstmhz1iWWMjUuaQH68vbjPzaCPGbJ1ndnF",
  "key9": "4T6Xmoz36PZqNbjzmtFbJXoJaovAjP8qKN2tdvJUjkNiYZdSRJYY1yiAQwReZshAFHVxXWLy37f2vNd8efJVYB8R",
  "key10": "49YbowDJDAGwbBRFjdi3JHGk8eXgZRExqnerWrXMuuH8f9sazahe7TU3xcfXbWnnbSSDGgtkPw15hmrS2v8XLduA",
  "key11": "3hChkSLKJoTqypAwtamZaKKHRmC2dUmFkH3bfSv9hs5A8231QK1ACPeMyMfwdgRHvw4LdPpnpA8Vf898sRUwUJ1X",
  "key12": "3SfDGSDyNExakaP48jxYDVAJqPPxSgYCXVudfqpQ7TJFEh191CQozZW3hBLb3RnumJSzC7CuxQpr8neHBYjB73tF",
  "key13": "5oGZWiAaNJ3BQ2oEkGXQxu5J5zi6KgsAPtAjf36ZZ7rYjekmW7Wg7DBNbNmaiiYeLj2gQMNg3FRXESrvo4mCg4FF",
  "key14": "3x3MtspXxbR21E4QYdKDmDsM8nYoreX7LYaRukngfgNrhZAauEfRpZe7mAL9oYf66KbkZoZFqwo8JHpjrLMZvfCD",
  "key15": "4kPFwKWagmvDkrvofUADtXLyJEGfkgir2hw4brzkJ8dPiQVSH9759gjVLjgUqpXmenaEhvx5JPP3kVFwihK4FQki",
  "key16": "5GGj8okvSjr8rDcZG8cJNK9fYwtoxQbRqkGXTVm6Cw4K9tvEAJdudtSJNgdXVDX2U39vip7Zr8ueYgiqrryKCVD3",
  "key17": "4hgJPiD4t7b6rBt8eN9RtNdNJ4BasXuuHkqetavmeni13nD75uUn8PCHWxLP1SPNej8pMzhsbhKttj1S9M3RZpR4",
  "key18": "5Akij1fYaCehjNpgcJkNYd9ddeEDL36DHBShDVbbaZjaUfgbDFzvXkAzMkGwuTpB91PWbdLkCHRynebEX8w3WQij",
  "key19": "556pMhYd7UKDmd3WdWtkUeXNLyqUwaFJuFHzWDABNEPPaBGVH8k6ADsEqWMkQDEaq6VboGmYR69UWqXWxucxexfs",
  "key20": "pm4JnMzNZJU3U6j3h1RYvR3w8wSogbMaipC8CJcQDj5dfZhPH8EChQs4ifoxJbEFE7fFL8hv4smrmWhbYtQAMm7",
  "key21": "2RDBzhKQkWtVACgVqKkMYi7o7QYaf3X1KJYnEcpPTd3E2QQJSa8PH38AR65K4Qwwpsm6ajQ5SGMWoPizwqCnGDdf",
  "key22": "3ZmXe7iUPrFLyjAMqLWpPkSLjLzYwpS17cB8ccZrAJHn1cNRFHh5nGX61zYSVzKiV3Dj7VH4cx42nFhfL3DQw1Uq",
  "key23": "4ui8p4VT159iAyQnRJhZ59egLcL94TV6VrhFxQ2jeAFmwmajHCrFrz9goDEmBV2HUpa3UkbzUGtEqjR2CYycscKo",
  "key24": "2yvCokv8qDN3gciEHTtRvR6rQse3PeXeqbRDRLuTMsHf1DMFuWnafoiAivfaaf9VYvX816W2QfeNbBAEiZegw8xx",
  "key25": "4odCNvTesj8QC9iyoALxuE4EFxkGV9acQMoYGtUjR6MYoSFgwpJZWi1K9zUGdPycGQ8pphsNTJ2s2q5LiBkV45kA",
  "key26": "41ma2dfx1omGCGagsrMzWmZC9kQcx5uAYBMv8muk8FpNeEZZDnhKvg7CMnFcDEQwdAxb63Hh9ai1hpD3kaxjvdoY",
  "key27": "JjVgQRCuuiRNpMRiGfjvwGdgwnbRpQ8Es28bGfT6Um68xuzB6jXCxZMnySjTGCjX3Q7kwuB3jt3KN4oSNm77gZQ",
  "key28": "WgsJNxfU471VR49UFfnKs2xsMmmxgZ4eqiEc8mGmQS6VMYmDEQX4o8MrVF6s6V4CefpFHKqqRgkHurfb16Hydc8",
  "key29": "2JeCvTBDn1bwZbJfCtLjFCzvhyDrABDWBK6HHDRZ3dzxsXGjEq2YwsV8xFWUvCsXtRC7LuX3tPr9zBc1wboDprrc",
  "key30": "4zR2awsKq2MR1nyh8TWVof1CYE3iPTo1rQg22RDdtZHtmo8AttF8YrY2jUrYcmL9Uv54NA8e3jBcQDXjPKLGXTch",
  "key31": "3oJTM7v1d6H3HRNYFeYUCwNMStmhZ1z3yE6EEhaoMXgntkS68AuzDw7oL96mDkfewAMTX5JhhzZbBS8ZrszajfvH",
  "key32": "HZuoTDmGMtyQ6mftsU9mNLof5ogh7vyFPVD8eWLPLTdNCq8MDChHJNeBbEDu5eUtzyRqvPkiaEdioGimR32qicp",
  "key33": "kRPiHJdob5Zdv8FhBAEm9Vu3vhYBbHqTeDHawVrD1tHSyXNrk7A9FEBrbBFdNd3qSigP78qCPrm6C8ihSQw1Uy3",
  "key34": "3fk2mY9tmNksyAGM5MZSPb296vWXXHUUoJcUeYoX2zcc5Z5UaXgPdBM4KTRS7BEFHJBt1tmJcVeHrUkS2EWc1wJq",
  "key35": "45viUuPjyaCC4vK14ZgphVFRE6nrAMTMP9XA9WF7iv6dNsixLHDrVYskJtrPEDGLEzMwyxaUdmsnv4Es9cjsWCj2",
  "key36": "4BLAYHGadCmQJA1cjvx7xwSuBmTvXAif66kbWwsn3ZwRJ3qz2AvXtnCJnjEoxVRc31wBGHmHjNWJkLD6C5ijR6k2",
  "key37": "ELWCuCFNk43rvoHF2bmTaepHDLhvNYYbb9cX2n13qEEhRPWWZxsZFwZ5tA8iboPxG72eX2Etwy523GvCSZk23hW",
  "key38": "FE4xLsZg3cViybmAXs7B1Hs7soaJzLjMjsqyDyE3XhfqXNCRbLwLKFN6fpEoLQVQiX3JN2y1T6aVZtqZDDVAKw4",
  "key39": "2spaCJzvbtpRUwLuPy5vhkRNXLYr7p9NzN7Dizv2a2QhXZPeT1JQXDgbEkrc5f7WzMs2X4bHSb8TMFoon7XGjdgL",
  "key40": "3h3aDvMUmem5tZPw92WSMD5EPQV1XZ2tB8cZ8zrRP6wPShV74DYysahJZs54WzPBLNKaM44uTUYLJYhEPmYquTSk",
  "key41": "6yhyG56uP7X8u9p1Dw4wfafubEzZr5wiq3Y5292CxDBUkF5ZZoajYRogV1V3wCn7a9jVG9ogeP3Efn5XV8zFN43",
  "key42": "3Ngan9rsvXg9VV3soq8roctYq3t5yc5SMuq3nWRd4CsWjYx2jz6s4SaVg3qJKCrGpp7VMivB4mssYmPo3A9VDwqR",
  "key43": "YzHjnd2DvhRpqk9uXkDrJoHCAmwB2PQt4XiYreZPpcYoAhcFpdEBXAcTbFipnitttxGXiFt28DebXti3FS6wHVS",
  "key44": "5K7DZypnb72csxhd2Ugj6Ac6Cfb5PB7yVSoZbgqzXNYTdHufChY6SKLGXbRYeSYT7rHFA4A9WxqqyaZbawi9eB8S",
  "key45": "4KMxTPiXAc9mUguKwNeqp5JnR1nmxrdYdStAE1sYFrKfatDXGTy8eZER9vFSYoAcpVrU5gGBZu9GXADHpbPLGxWd",
  "key46": "3K4BMfPCo8EG5jmGkLMmiPq4ysNWbDVHVmXXe8wGkPy5SM9AzCPi9LfvaVXxJhpkmNKYUoxSnZd9GbsMwyFqmhg2"
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
