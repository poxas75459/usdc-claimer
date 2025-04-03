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
    "4rYbERCFywwzDRfQNe2SfmTij74CZGgWXjhAM1hFV85xMWRDodThEvetWrAFWfyq5XjZWKixyMg3MibP4xzZqcNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oL5TytJt4wAFpUhogXYk3wVd5D9LQpz9sqeJEDCPGSSSb3kXQQcHGbKUos8kqUGXoiMBM3v1MBt8qYymMmVEiPw",
  "key1": "2jwNCJA9Bsxc8xJ6Ucq6E2QR6vdVVp1yHFYu9YPg5A39Y5CVUWZfnXxh2t5YLZQ5t2G2jYa1kWQmrxkMxqfL9g1Z",
  "key2": "3egBvivmX1B1Jc83j2Q76cCJZeLGzpfDN33CKyZKEF1W6H9MGpJnaQNo5u4s8p31HshvPaSxvgJgAXQoDFrBTQbT",
  "key3": "4ofMvvGiuXobe115yP2zHJCBKik5tEFZArad5BZbLrQneCkcDRve7n4e1dpkC5efahNEwHUsFNFyHNNtgFTBnzaN",
  "key4": "5DEKdSfznZamJjEP4A1nuuatWzknMfhbmch7EegHMghRhEzBoNDUvNxL4gtFtnRkCnNaC8HbSrMpeLt3JR3k6DFt",
  "key5": "j8zcf4jgX1MRJ5wQLxaNXnftzDtjR7yAaVTQ1uSDqtcPUeJZWQKT4FsqPkrtePnQSuSaSXYALhgWdyAn8uG7Hec",
  "key6": "3WjpJ1W8ddk5KgexV5fDXqVMGK2Yq96B9nKNGdc4eCLowb6gYpL2bSstZgydKiLLg7pc8dg24awnt4ZyhyHiJFCJ",
  "key7": "5tcF7aVT6GoJPEGoCefzCoPXGkhBy8HshSyQ3X2kiQhpCAwFuYHkYkEv7cKxE4nLsmqAq7TggPZ9mbQKXLcVLdKv",
  "key8": "4Pei2nWqig43QhiN2xdCA2iNfZ5a5EZLJLzcSggmsqVDtVDkM6d5dD2sU7ka4VjaYQyMcayD8F7ojJNAtTTeKuGa",
  "key9": "VbMmtGBJJRdjKbpFXGwu3RZpzzcUSFyG14i3VCekL9K1wH7pmCnRbFeeAJJbdkjQaU1DW7Yddmj78USjV7iQBwW",
  "key10": "3ry1kNPwFp3YWbjN8Rw435cjknfQhhbz1MK6uuBgQmA1cXbuXFBdDSZq1gncU5aYkKJbFYpD8KG6QKqwU1AN7uB6",
  "key11": "4rc4ZWyw7LvJyJtoHg8uxrFf3kBYPz5KSk8eY4HkC5dAZb6r6Qf2udhDjRxu8EBhxLP23w7ykWJ6wSCvtjJHULJZ",
  "key12": "4BMYY3U3yKV6PbaWTm4t36b5LBWihHfdvFPWaSoPBChDcT4JeTnr5HdjnDgBt6qzydXjZCnjpkmuYayhA6ojXJoQ",
  "key13": "2wNsghLuNjdzuDj2Fc3m5amZKmgZN2mxJf719PTpjDykweDCJQQTAHCJv2jDtZrXErddDzi4SKfe8AEMeVe1KQtT",
  "key14": "2NV7EU9j8UZpnJuhg9HUnMLt8AuMf9NPgq6DjkXtPEdMYEfC1vwXq6EiS1iwpNSh62dMYPj7HM2ccKeNo7wCXn3V",
  "key15": "RQku5iBXcQjt3JZuyZr9uEZLicmVKdgroXPDEwFXP2womL3vafU3Q8TNscwmHQHbPhHgwVeEM4yEV8wtaupib5n",
  "key16": "3KdgQjzXuSfGDuyPWMn8DUMHUuDWJfVRbMN2wUhd3pJ5m2KLdR2HH49y3MuZfbpYsvN6A7CTJ9Wzu294nBBgDqhg",
  "key17": "4YukXQikuc61jYuy4fGhh8sZ3ZnvfrN6mBR2ivVWdzMVe3yTDpBLVUJRx2bxpST2PDqKFhFTctT3Da4K7a6b3ojz",
  "key18": "28P2QifYLd1h53MFjTkWkR9Bdr1dbLnkTXMRFgLwPY7kNXMCEEXsU7sBmw5TvXeoXHhsMwefWpFJvDDnHMsHvcue",
  "key19": "4m6tnHF8rNuVQmewgx6xWDNp1S8fwL9VAeJGAbVVwu2yUv1pEZPz9azexzDFbpEbcxmb5ib8oTuVQ2aoLwnC3ZRh",
  "key20": "3wfnSt8fLazn57o92e3AWTBm9zf1cMbGkBgueGWdSHRWm8KcsJe4A6HfPYd7MWk8rbbZ79o7KTSHSAYqvHukH47P",
  "key21": "4Ep5u3928VKZscYxeACnNetTkzPDQqfszXrFKYFTFwcDWACVEGJsKXC3op8XR35yChH1WRWKLW71pSgQ4JybaB53",
  "key22": "mfMm9HS5WrvxDnaxP5qEiVhorZjnD5zgVAbesUGiD1X8pVFr25JeZHmXuhKssQ6A8iUPGCNLCCKgAQaB4P7ERXj",
  "key23": "3Lo3Sv1QquXFitVaij8oSzSBXag3Tsx3J1rXqYH5yMDnnEYT5KEUYNTbQ4A8gzWqRKrvyyc3EhpfmHKD5myHMfyM",
  "key24": "bVF6tRyK27ruhAWfQEWCqfWLvcHowbSmopALT4ntxqQKaRhAcr47Mtpnp6fTKuDnddXXyvefp16nyC8MLiL49Cc",
  "key25": "4a5s2g4uRB8gCrc4fuLnAcRH7aH8H2hS6ogRR8UgfGgr2u4MHdQ9tA7oZWE8QyRRYCXYxiXyrrN2mB7gqNE6KZZX",
  "key26": "FV2HuX2bpfdzGTKiL6tzYbxG5r1LHHzcqf89d4LxmpCaDbcLGSf8vviTjAfKSnFVRtbj7rye2dFn7VqVGEKs8bd",
  "key27": "KRTfZfZk2raUyYt5Ct3JUoKMrB2MuRhGxkz85rkyXochfF61D98j2AUQrELRpmXhiaRQswwugWQRirXsPUAY4Hz",
  "key28": "5mGV56X3tcNZxvgXohQmt3RCu3CpoyKyjjvymECkxkbg5p1VL3JpWF92DWVs43zHn5jVQw2DTsyMzmT8UpfgYk2R",
  "key29": "9AgwV2xiJjvamkQEnqcXg29dUk47eY7kZ8Fj1rDL3U4QJVm8ubbYZyGbeVUiDKm6qHBpvQHL9nXJrhNjH7CoJLj",
  "key30": "ATDVSzxZtfdS5yawTQnHsxkQtiCZKYHZAmwpukAP3wxir6oGBhQ7NAoRvT3wMTG5eDGy8BpXvrabAzMm1q27GSC",
  "key31": "5LSyYT6fj9TBtSzxiJ7jQcS36jqXGCHnyhyumB1iqJs7KNihKV5ai2V2mhFpSMRxU44TfTV65ti8CsxjfrrWj6xN",
  "key32": "2nthmGvwB7bKUxwa3cUW8pNN1vZzL9CV6nRy7XGLy1FqSNdRaBHHwAsyCaPWwdhYdYx3KxAVnaCywW1kVYSJ2ktg",
  "key33": "3PEa2z66ueCxcE75s29FHHA75AGnPaQmYhd8nXHrEJpK24cRrPLkZVbhWFL3fD5XSPhK9XYM5WbAnyoSyCyJsdwR",
  "key34": "5AzGSsT5Q9m6DxZAyMkhUwsFTVYgr29i4WBf1R7oXFvcmkwVTwwxnDqibGRZe9sMs3JMs79uHhnMbeDqnhvhrmXX"
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
