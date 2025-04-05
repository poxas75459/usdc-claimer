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
    "4x4sBLe1w6vv7CdYjLSAveVJiYPDfduy5EYxYRB6BrExuSKfeyu2L8jwkhrBi42QtYXhVM6gfKsxdoLRMdeQ7FsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dkDMJXev92EjuNwm4BW6Dt1sZXybiPXgNh4XcvCYR5YgyUt4P1DyzPDFLg7W2jkFgLFsD4FnjDMdTmhBSFLo2UU",
  "key1": "5HDx8Kc6VfNa7kGM47ubb3fgzWGm3zB5gvcAFZv3bYXThgzaWopF8qZicj1ER71Pfjp11hVxBh4sNE5xxCDcJCNd",
  "key2": "2Tcbs1QWWznrraQn3fm4QirZgR1Kg3FVZ3H3ZeWMTLdunrMBLW96gYHgeXHismpC4SAowZJEzenYywhqtNnSwqu7",
  "key3": "2RR2RsvszE298ECj3VUn14PPz38rwLdRssjXjphVEWKLeBHAXvgFJX6ALBYZSrnvUYChi2oXGpoBn6atJBMXqk56",
  "key4": "3ZdKSgyTcEbWiUkgVjEVrcP41Kwaj8rZPB3uwwthxTxQ53bGKM8g38Qxd3oanQRiY5dwMFvwtJSRHwM85JZCkPS1",
  "key5": "3C1D36WWp2HrBRJaEztLzGBMUxeYw3XXUDg9ZPV6TMJE1UQSyg1PU1xqir7PeNNpWFNGSi3u6E3o1cVfddqdP9F6",
  "key6": "5EAH8C1CggkJFRYTBFwYwKvfWYGqZp4kBwMYkCoQR5zp2rniLCUfP4QTRmcGyGMmjgS49RwRjEHLrhNRxHs5ozXG",
  "key7": "4Gg3zCYDN8VnGX1AhsdoXhiFEE1coCLvi7tCDmd21QPEkc6X9ma5uCxCaP1uvdZ5YoTwvAz5AcmGmQmPx25aVeNi",
  "key8": "2DYDtVctRimry7DcmWf32bmZjXY4nmg8E1HLjyXVK4i6xjpPPvCRDSWjMHWaCHVCSfdBzG288Q3ha6uVMQoyfQaW",
  "key9": "33cHGE78ktM9NaTAojoB9MSkVz1KFUhJGS8mmpbRwEfwmoiNfJ6UWof65Y9sVyg3PD5ZEQKQCC95SXSUiGt4fe3H",
  "key10": "3Je5Y7ocmziipNE62r46QcdUuWUAWacMgQLBvSgY7Jum9q8LStTChZyvE9j5HFFAwQTtcCi2AaK8mkHwonWWy4KK",
  "key11": "4kApBHBb3tR8adT4BkjHobavWLtUu6cKZhjycNFiednD841W6c5DwQRDpUgjoUPojgtCSvLdSX39FU95wiJ1z4no",
  "key12": "26AgrBYjWEpELMWJSCzQHCiQcu6L3DLxT2CABD8PW9Xrr85ovjc5y2iidDV7EodCDwLhHh3Tvz9T5CMx6uwjL4fZ",
  "key13": "62FMDEGhPnnpKpdQUHrNYNy5U99P7F2KiJLBHJmp2eqSPdVkG9QyadmRaxJDsNtfyV268fi1JjpKB8KZw3xDf2H",
  "key14": "5Tcvy7LLXoSxQ2zy3yZkZ5wbmix3PdjktcCtrZjUbm6T5d7a7kUDeGKgHFGmvPm9nvzsFLVkrWQMP13jGg5izTv5",
  "key15": "4jBc1cccJZcB8uAfvUu4VJNAmU4bsa7oX9kCQK8P83WCNzrmqx75xHR2oda7W7RLrh9uKsboNLmHFE2YxKynHoSR",
  "key16": "3Mx8f8eJK5PjHTKpyP3fWPBvMXmhDXAaFnhywwmU8oBSnPDggy23GfFhLc9BY9NdShq8k9FfRWGNttmhF1yksJVi",
  "key17": "4JgbKH4m5SqDjHQZr65JYuG1EGPxyVrQg8N6fQxfnyG9e7ATKC8gUv7RJJ4LCNraVCTg5rNwmdipS1yHUSW6vgWh",
  "key18": "2y1hVtBv4gvyAUsVREQUT3ZKHLMCjGmqBwQmsRUDPa6JKYprCQp7FGaexhyJ5jEfrVUaHz3QmRcabwnQ7zqEpc3C",
  "key19": "4gPkRn6k4NJFxAfmkqTcHzmbg7rx1YaeSGXfXdEdMqs1sYKHpemRL9Z9fdE4ZwLDQf6Pg1P8rQN9wQ1Nx4wK1gEJ",
  "key20": "5xQjGAa7WBamC6gtd9LRoprxt8EGRivSf7pbRFPQt3VDiuUVwmzn8CWQ151BnnwCT3EJPaE54aQZUc3tVkHNHad3",
  "key21": "2JnhkyX8Tzmy84yQgkhsGuETLPCGNrbHPard2wwiyybcWg9tUAt3mJAzNLXepmXpkGBHwHsz25RCmtQeY4wfZ2sB",
  "key22": "3UAs3j1KJmfqofyYYBfuwJYAwx1S26ZYeFzQMWDFoT1Fw72zj5MQT2z5azch5x8SnTEetkP5VFC2nxdHNUcS54iJ",
  "key23": "3endCvC3Z2LRrhgobW2t49T7bhAQi14tPeT6kQUXBkoU5xbtx73rS1FFN6t99MQfptb3T63TGqR9dqopkhJhK9Vc",
  "key24": "4CMzt7xJAni1Uo2L5DJJsq5K3E5m5mvaR7UajgBqk7hqzQEgsXpRDf1K4rjmZSB1ey4TVix1haj73BhB976Ez2CV",
  "key25": "3mQoRCAp93k2XsDdsQ4V7MehUDBU1UAHMdo5qeko4U26PWf3uAUx55GEBNLbDyXRi6TSFxnqUNhbutc2H7XzXa2x",
  "key26": "66JfDTth2BfEhNSFpnbwaFCvLC7jcDbj619TBgN5g5g8yL4TCh3PmqBFdmJqnKJMgS2VA79F5ha4Y5ZC17o5BLsi",
  "key27": "3hATwUjoL9bfJy1fW75sGaa18RnpnTpaQq9Spjm68M7FK5HWv31te6mWqrHS3dzQxkGEeNsgw8rgwrisNhQVjfmM",
  "key28": "2tV1ptrygQ9hj7TR9enHgYisXrGGM2oQEWwaB25x3EZQbJrvFBcJcHEPEebeaYhpq9avuErN8k3MKJLPH71AEBUz",
  "key29": "veAnuxyATUG6QWDvDLUJ8AnQ2L4TDrgpEWmwrAUPGWykR6uEyto5y8yzZp4vWE3eoisVMGqWmE5pvmZ28dadfXC",
  "key30": "4nsjgYYEUSmoihhhKcp3CeqBWwgWhQK4mU2kfarPYnCfie4Bb2ike3Q8GHBgj8NLXx6TWsyUG4YjjPXweVNz5WCH",
  "key31": "2uh2Z5ArN3RaXYoiunwSqfYXwiruXKwdEivFRFjz1XeFZKbhLaAjiFaMo8WgGR9dwcHALcp48HiyKKMRBa54TVKt",
  "key32": "38Q4nhTJY5d4VEXYmUi61DWjGyLmWmH38Tk2f63EtiohkUKzKxt9oQH1wzuQjLjbvN4CkcyFgpDn6z8sT1kDJ2JK",
  "key33": "2dR5zkwnarUNmTCrGNNytuXkswWDkTcAjxecZ8UuGzY2H2ARLGc6gykH7s76iAsNbpGsbVZoSj2Q78q18mP79m7U",
  "key34": "3KDAsZ1gmQ59UanPUub5RLohENifxN62YLsJqBQaaotc2ybSbXEmX7ySG7crXSCjtjhzKo2Rm8JUfuyohguSnCgb",
  "key35": "yP2HmgjSHTntvjpdEsGaTjowhDDmjefLc8admHRWSrUHtu1FRahZSCgAnQ16j1wST6qK7993FYKXZVb5Koti2dD",
  "key36": "2JaXSEVtCPk4B2xaStPc4UXxUmwM96ij8fW6tnniHBVwyWcURe45w5G8Cp9Snd6FminwpiqME8CbkonnDT8a3v9A",
  "key37": "5WWneYqnsouPLa27auVTmuMwEvujpmr1RsXk8YST4reoRsoMXxg6SFkw4nQruLfsMhtRc7zt12ZQcMmR9NNb7P64",
  "key38": "L269wKmP81UKeiPzq3E7gMVjMYEX1YWzci3DziAGvc9a3YnT2f2Lc2RmEj6rLhejE7ZCSGatrfLv1LJsV1afhaw",
  "key39": "2fmAHctxBpUV8Uwwf66uK5gUNQ349pxTMkt7j9wNFTb8dSBxjYLtRGkEixY1JHzTsUo6KsGCY38SWchVx9GnA68V",
  "key40": "3ZEWi5haxVB8SrzYonWPo99Fh1RsMyfEexw9jbKqBbKFSWckKVKWWZrhUnCaXQ2CSjcawQprgrwJjtLX6hb3YXBP",
  "key41": "4ivF1dFvGkhfZJE3LPDVNiQ75SzLDz7zq9B2x4JSNLiZBsZAxF5JeWMvvAg6GvkE87BTtLgmreHBqUAUTJ3EREfG",
  "key42": "4XBQkwgzhq3a9eCTSpMcjkEdcSLnjaJU759QG6PmBW6mCrxJkZzqUM43kD9tETvfZxxPHUYE7tPZKuAEu3RBEtFY",
  "key43": "5pT9id5j5QT2KqVkZRiXXsa54LhTW6RbMBRQG9cWKBJXBN5ZygstGRnXA6asA5C3cmGHo5CiTcx5tTG7o32CX9Qy",
  "key44": "2THtwtxKUqG716oYHGwb7mzeBUPHdCUX2Xxsy5BKbnP3SFEzrJHKXHzKWSQ72UPnzgqvyiKLi8SaK2c4GxVabNcQ",
  "key45": "36iefV3tUiWFjkLEGTvKN9PSCA1y6YrpZmsa25H6h5wiYD553if7mQ8NhjsWmXgFTbgPBjZ5NWwCU8t8rhcQMggu",
  "key46": "4Mopi9DpRvS9AmNn8VE4GnsxpT4hfeUw4xcUD4YVhZQAXdPsYff4w5sBaEzpLsvJq8uF7cwg3jL9abV3YbEwfri3"
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
