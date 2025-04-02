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
    "1HuYFQF217JzkrTG6G3rWvPGVSULUqsQt7fnDaDgJHfCTE4xKaKbSCL3vcwaX27BCnvMWarxi6Trr3Kh9my1KQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "447jV9sRTbEgaD1LhuXaea2kJh4zcegXosP9MQox5bjmX8SpU4PzQQX55XRiPq7uL5DfhKpHdmtAoJTcffd79DGt",
  "key1": "4KYT5KYE43MeYtnEUn5vAu3T8MfKSnALhJv3a4U26yj9p1yPqTGFKUvN3dLwZ4mUrGQqfknYkpQTknaV5H3HD8Mk",
  "key2": "2Wf6qfv9Z2KDAy9z3QssfTfYLoAtrAGAcvkyzYneiXPgX1Zd4mxpSX1bGp9s16KDNuyAZ7WpZCMrP4UmM5WNH2hD",
  "key3": "78mocmdaGwG1Lu1oYJdXmupfCh8XHwVjHLLs77GvqQGwvbEdjhq8fkZse1F5wqEv7PCKwGb5PMGBaHx3fcPR33K",
  "key4": "5RNmR12Tfggp45yFLKMKf87f8AbdTvfs72LioddrMLdXZa8EHA7xGSbiFXnyN5eW1sQUDvUPWzvFSShWvWZhU3wK",
  "key5": "3k5ViTkwP16arWWHD9SZRxKc2bn1dMj71NptZVjScXrDnRo8ErifSeL16kSeomvVXniVVPmDbYpeRp6CjRBEGY6c",
  "key6": "3k3mxd7GKppbBwd7eEWmJwz3tdTuvFgGfLrjquxuGHxXx8fR9oeVN8Zsajrt7BrahLWVEUY1mHeMBfJrDie9LQ3Q",
  "key7": "5KJpCBb9GdL7LvZRzQ7vDeg425f2EcceG456gNrUugV3Ttgsynp1nYATLtX74TjRz78hoxTLs36TQGhWeDrxHSun",
  "key8": "3cihqFstLZNvgDXWz6PYNTXMriKZ8gnKyWG3EotSJMzaVtQqSSytRGQidGVZ8ayUtbLf6kyUv2HsbAcebbtRLqDv",
  "key9": "3q63R1UCqCDLRXCLFm1NfNPbwUxP5jCYbE69KzW85vpRXzuvcEkmz6172QLv8MohjhyJ1wYh7mGyF4UU1pPc8hSv",
  "key10": "2yLZDuesmT5tJ7h1pv3SMrPWv9Z5bX7xTfJAopDT9WAEonZUGUQbwkfG1nL99ZCzqCZnMyZdpxX1tZHFFb8xGJbW",
  "key11": "4HYS13Fg7GZyFcBnxVgVJ9eMsouzEzRm6SQPFh9Xb3RbfoccrHcoRX97KAc26yDugfVKhCW1Akzv3UZFejznUisW",
  "key12": "2gbqqCk2H9eRVoqD7dvfKei5983fo574goDHGroWtpruGmhgAZBDYDgmJmp94KvFePCTkA2sUnLGQmMfCDbCFMBs",
  "key13": "4YzpudmRguon4WyF5uY1RmfpoN6hzES6AKS8Ex1TfDTwTSRMT4wV99A8zccABg8tfDPUXjGUXpKufwUJPvgzboCs",
  "key14": "1z8AA8Da1c7127sxkxD2AcbQnkyxxADiXKyqVz7rib9seUiXKsGrzhLPL1VxafemcWph6o7Pd11LowD54pxBx9x",
  "key15": "3amadhQqyguuugX9Rrt8yV42mEXxCRixSouTEfmUT6nTbJVQwjX1f8vEr7LG49umAJBAoqij1v3syxCbrbHQEcqX",
  "key16": "4a38QqN9URQqkvT3kBK5rMqCyQ35uP7mCB98rHAnDXs5FdWJ6j2VY3KApjb8f6E2ckvJ6kM6xh2394223vxqjjqr",
  "key17": "3EFSVXqzWPZogD3CNPPDT25XdMn6x1gAm5th11eP9NbHK8fWP15PxzHr7tmhFxpnw6P44MUAQZ3Abx6QmYDmPnUt",
  "key18": "2BacdKTtHEZroPtSmmgC2fziShHYXYCfckSGkQxF4FaREhwyrYWcfbdX1WTjBZvM95mfWc4B5F2CyqNADbiNKEb6",
  "key19": "4WZNsrBYWMYKwDqMxVrssYw4KRLor9MnuDvNqHcPCbfJiniycw1qaJtz1UMZFRKoFb1ThuqwPDr4JeRunaSLSkWd",
  "key20": "444oNpToESVhnTXwEH7UyyNU51GFujbBiwMiEdkibwW3Mkh2qWkLJt4xNLfHHxEEhCbrgBiaSGpRpRNUffJw2SYt",
  "key21": "5BbgPQFxoGXT4uHGLjXNWE3DDLf2RyAKEQXAuUxZdM3PZxNSrEgUNm9D4uPT1kLs6iRFPxjZfegvJicXKuhR1imp",
  "key22": "37XtcTozHZPSkrDNLmTJQnmEieMtNuWLnCWiiJiPNakig1Czk1JtqtX4QU5j8ei7pNAGEBqCBvDgPmtNu749n6CV",
  "key23": "2cpjYL5gFoJS3PkBz3tPAV4csHgg6cor2suhwC8m1ErpjV28BxCrhwMTp5c2qFw1LUJp9UV1Ez861Y8L93BzFzvq",
  "key24": "4WjFZzL5KMmVGRFqrgCXC42YT842BmL52KLSfydb2DgMpCNpiFCo3CjnnbKDafhAfKFaawemFoL5DZHu8oE8h6ae",
  "key25": "3JcdMvLBkPqpdADgpQPsH2U7iUydcwQvqPvqXRdyZsAKob21wujef2cft6bXX5cjsLjCdQxYjvjVo8Vwo9DseMPy",
  "key26": "4SYAKdDkQ5HR2qjXaGuGQC9cnEUDi8775FhPwjXpxnoUP99rWF2oVWbFjeTMTsU44oJscKY9WtfMznWg2j3Xxpd8",
  "key27": "2brazoP47SdXhwKjTUn1ccKQLv9MgPVQ173TsxGQSHFnjhofD83GmJjnpXPgLPBzMUrStwhZKiVapw6tGHqHZFN7",
  "key28": "hTmvZat7jnsUTGVExkNYhzDq2kJuw7dhYncnwk16aAQVFyvkJK9mfv4j7S3kUjMjWpkcVz5MoUKvPt6g8WpQx5q",
  "key29": "2sUYQke1gW3ygvfCJf8KvkcDSdR9aZvjSuFd2iZcnN1YuDZL3eK5hRN4es6wytB1JtdNr5iffCAE4rk8bMuS7Gve",
  "key30": "2pAP2ndeVJN57ymB4e2Y237PsWRJ9vrWBqFym47z5uEJQber4TLivXfZHxoWVqsFYSL9nVXBHwDzrxsF28rHCGrC",
  "key31": "3r96DihTvAPd51JDcfWP9WjC4uEjDFCmHq3MfcK56eA8s4tzd52pz3WL3Je42zmM3BZqzt6ymou4RfokkKs5RYjt",
  "key32": "4CqVAQBn8nyrALJGuHZnWt7fXC4A16MEzHnbd38d4oipg4amAtwqKyioPAKrLVGDqy7shGdV2yajvraw83ALJxXs",
  "key33": "2gGE5srSP8BvrUHd5UUomWzATy7t2bku995MfTi1epZeYDe5DezT2RvR4mVJDa6DXQhsJZM5aYC6V2pn98c99zeH",
  "key34": "2oxLdFiXyX36z1KVfXH6CoJmWSzVjHNxoyR8LDqsYXYLrKgNGAhzTQWF1mSMePrTdBHpYWDmCXBhvH7t9aPYQosg",
  "key35": "a7kz5e3WQkRdFhW27J391PcBqJXKrKTLDvUR3yBK1ESsuBbjrJUzwLVasa2ZEYJZbSyuW9YrRDzCn18yFBcdS4j",
  "key36": "47ru1mAWhJoba9zfFMNCe1oLWJC7BcPvPjFKKWJ8grVrUZ22TnShGLxLYAPGSeFNSKWLtKfFjM83QrWLhLniG7PZ",
  "key37": "2yqR6RyD1ihWhbn6iD5Ky8B8huafi5u1TpXBxFfHrB1f9ktCMbUxWWNgkapjRJMkqAdX9PevCiehrqsznR7JcFp6",
  "key38": "4DJNP9ezz6cs9nzMmgp2CBtAQRxQMY4gLgxEEFoC3A5CNoC6JJd8UyW2ABnYJzSVm8wCmtQjGEZGBmTTR19kntzT",
  "key39": "99PJYHSSTgGfHSDWoRmJWBFrUWfWg4bHAE8hRBJfZwKegMeaN4QzuktBv73Lyj8VYhrHY3b5WEE2BsVM2oAa9jL",
  "key40": "54Eo8c85tz3wmEuXb2R6XigcPSLHm1Tcg3USEULFcSEz8vX6ssjTYi8fo395ncq1LkJdVdYivKa8j7hjoJCBVgA3"
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
