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
    "3JkH9k8mx7SS5KXQQpgc7GoHeShsT4MVNSohmgZQYyh9sdEJobjGXLKJ2z475d8h7VHo81NUyCvEQyeGBp3YZnYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Z8GEe6qfYsEni4bUsVtgeZQXsx1ePfHYq25wf6KtEsNTA8qxKsUhUQppMQ3xes5rVwUaqpwbZaFwimPt8jAqDa",
  "key1": "iZYBS5MAQopGAXoZewhCfw9PmH6EgCLw9HRNqiHnnFjjhPeny63DyNbitTY44uYZfMxqXVBL5snBRTBEnGGMHxd",
  "key2": "22a8ioSnVBsyQJgdKf7xCyjcYieppmaoHhUZU6XYeD28X3mQ5EJgfaRvwZrfm5ajaQBZdD46vqVWgQfHgKsKnY3U",
  "key3": "3guBe6278XtqHeJuMrCcdHhk8BeaiyiGRAZLQe2Z89dfweXrdxWYy2JbqbwdPyYFiXqbHmWAmUkAL444MvAgbkPL",
  "key4": "Gm6ERzViC7BmfrSUmgiTZ4HMMr3L9tEHjeSkoNdneHH2gJUoBC1XJaaybCQ2uiVan5jenThv77tVngcfSxymfjR",
  "key5": "BPxsyREpmvEeZpyRwRgcbvhV2oTRSTemQZ86iUBcVYeus1sHyGYPvYz9Mpy8Ns9rEAaGz2tzgKggfcs5JWfNvGR",
  "key6": "28t8BKEsdhh8ptDDPasUJEnsnQPPnARGitqXuCx2YjwyZoFEduR9G1usa5mA3E2XvZMdHey65kydb6CcSykpgHXU",
  "key7": "tr2WUA5Kowb3YeBz98ZkA9kZsh7wdFe9YH7epFuyimKXJZ7RodE7J8htWrKRuogckjuGKoyG8CojrEv9SqeLPZj",
  "key8": "4SojkhVi5gUnsNwScdeLdC8McFHzmq4K8KkbnwXKkFLZoj8praUK6AwYqXVGnQpUmAwN2zGg558xwYEHWYc1HhAm",
  "key9": "6t2r17yoJSTE4VTTAxUP3PT6466c8GoMmmaW13bTrEroU2FUEosWnJn7CcCeuWGX3V6B9KSP3MfSTtZzshre6pY",
  "key10": "2ricJ21qD7FQzQD1Jokrd36jcuaVAjfmyNj97iF2VqfZaEGQ4TDqgE4FuvGHxfdPrAbcJiymJNCvaGgBX6TXWsQ4",
  "key11": "fPA2UAzbNEJpjRXXTPAsDq9ZsjjaAbXkVnmDTmu5eS9F5JPGptQTmw5fyjyLRqb13VXXGQBK2RktFZyk6syj9nd",
  "key12": "2MBeUa3EVVEfBhyaWgCEYnJ7kn1moitpphZntCuiGEMPMkuq7SbLCn9eH7H9yfJj1iKoCtKHg6wZfx6BfK6xXoea",
  "key13": "4Gx8Gh4uv96W852uzTm7UroLdGtzrmGXJn2oshVDc2EHMWYsM14zcNoEyJvmEAug27CN9ZMHvbxwtBvBYc6EZP2i",
  "key14": "2m4uYpbVXe29oeF61u2vNvJW1tmbrKFnCJ8Xj2bBywZfBB7vzRf5nunBJudeaUvkFdEbjAA56PhoT4aMNh4ZHrPf",
  "key15": "49gLMKCFXmsqzEwgTNBsWkQ15QkXfUrUaown1qdPs9KuCFrn6kPdpwWs9CCn1NveXJM4NStqwPkauxUfuhCmNYvc",
  "key16": "3zTx5Jz9dPm8tnYAJgtqByvbUP1ZgZGi6ECyW4xDYjZ7gxPgQhySQSYdekw2fpWX4FWfn7Cfxb3tfkNX5oAhTmFt",
  "key17": "5xCJdjABFVtxb5jMF9rwCrrirRrUexEQVDftJZMGHbJ1HYvt7cLvpGpJ8qs2yivW64P7zh5fJ5MBT5uR7aow9VPU",
  "key18": "N1E97Yw2cTrwvPL5v8yZJ8SN3jgwZFtsb8uxozDgCCQ7a5Wuf6QnfPsoS6tibxXtEkUNzzDbVknjH4PssD4BEb9",
  "key19": "5hTkkF4WH1gN8ex8XdsySaty19oE6hHt6mCYDKRziXGxGhdSYoxVRBPypU1tLuZ6tqdTQeCn5KMfS3Bxkf55KMHB",
  "key20": "5e5sE7k21QEaqL3DPtnTn5M6SDz5jPRdeUDqukbJZwJ3JLcovPjPmY1qUGQWa7nyXiEw3c5Lo8jsEz2uJfbbeVut",
  "key21": "3jGGsy3d6YBLcfShHpujWX9ZL5WmFRPVQyfyMBMfhicM1EwLjqwb2DLTitDvfHRXaPEdVimqyCpG6LadM8DVkV1b",
  "key22": "5vryHBVkBUP3b3BoV8cpHKBFzmQRn34NdmM6C1rx7y7DAupeJgDoupuo5txo9vrcDGBApfPAFEzYQDeqKxKQnpWz",
  "key23": "3v6DghJR6CmhhDPmxzdvaLpPRiqByLsy1SwGCGgbCQ3boJX5qA2UsZasWnLeo4RYPPmDqnxPoNR2mNESNB5Dtj58",
  "key24": "DkJpxbQL2b8tPCymiNJbJQgezT1o4dvb67HrXoM57LeuqsT2AhzwzMymCLWS5eVXWk4tuxwwQJPsfAnBdzhEBJD",
  "key25": "2KVzGXvmPC1tXZnwsznn4xD2ink2Z2VSFyUqybdrxcPjrWqpka6oedUJbRdN1V99a95vMiztsyJuzJ9Kn67tvwxY",
  "key26": "4TJAQrHAZ24BNBf8w6bZybcavvKU42nMa7hTCwFpJVi14515hTEAaHUPhY4KYgx5rRACdA1J7szAFXy7VGiUJgBv",
  "key27": "4xaC6gyV3VJ8g3qNXNrBWFbYmqCv2Qsy5QNnAq56yrZTfwDYJS5wvqeA46yjZ3qEx6nWUU8t5U32fcQtNjLxzfqA",
  "key28": "2yy7UuUejjD9tfyRe5nhLzVcT7Qbg6AbfLwnoJZmTH9E58a5Ju1fftFGBzQeD9EPVLy938dHnLsHFUpk6mfpfq8m",
  "key29": "2SjVByA4gz2md5pd6jq5PePLfyS611HZRc34XYJwR8Vvk8LtF3SYgPNDFzNTiTZVTNPbuUqbMfLm4mN2cPCRRBzt",
  "key30": "5H8sYXY4hnRCQSCNmFvNpiz7Z1kSVUX7LqzT9MtCtGxSDeN3CxoDrq5JJvzA4PPMmv3i9pAU6pYEqHPbTMB2MSZk",
  "key31": "5DN1Yixfy28bYKvBQ3Y3bovSeQfijEyPcqALY2Yvw1gWesWv5SaJ8w4bao1eqUcC9ubaySCaG2sDwpHMYoHUccED",
  "key32": "HdhUmz1bXd53KaHFTHEXfTvd2N9kn2gHkNn74kQgTtU9n9L9d3ABZeLb5pYkpUkHJusnFi49NyuJCNcGDPAfuUr",
  "key33": "385yRqF4jBxfLYE9z2AFQMezyd7ng261bwQtFVfwevnKWwhxL6cYKagK8D2h1wr1WUknaLcL7yeuKWM4rqE424vA",
  "key34": "jQ8hWWc7j6QdMWcFotEtjq7rqJamMWD5N8Nq5XuFoac5vhH6Qns55SCF6faBUP7CRvUX7oouY9YV6REaD8B4Pia",
  "key35": "4KSw1uPukSJreF9gvUNbjjyZ2DrAQt3BAAV3fftgtyU9gLxTEcpcGuQgbNUTMhSNQWMGKr8gKZSRxD7p9qpMsNeX",
  "key36": "3oMkzqQZNSMKyyy65m4RYjAsMr2K7vZwSnizEzsQKHqNSVMrA5enrijm3F2UbzEsbmU2th5DgER6CARqQttrjmfh",
  "key37": "35QTqwwgvdfXCPJXMtbSAFHaQzMQjVgCBof5TYLaHvLaKrLyu88CbcLNrst6SMVh16PGwToReDPovhqvGghkCJDP",
  "key38": "qM9YzytxzwvQ7DZwsVuJTaTwtVD679ZtvqVq5Jd77Vb7rHCeh5B2bvfdB8HhbQ3e58oarUmnjG6ugLxqz2p71dM",
  "key39": "kYSu6btGmNztrMdsARzshLdbVH1K5azUdSxxFbU62P76M1fXvLwmzVmXeiCeBCtFxKS4Qg2XTtRqHRn2YKx5HDu",
  "key40": "45nsG9x4Hwq4hUt1kwGwjAx7oHE4qDz9KDpJQtK56vTimak4hendsPw7qMT5m6zba2ozkRfnTZX978vdQTxaM1mu",
  "key41": "ahY3eZ1hehuGGgzu6HMVaVjToeuqBc1GwNKregUwvuEnkLrnHopmSynMcvzWhnXvPfV3bs97cxpJSYtqn2uZLGj",
  "key42": "2mVGdkNQGSeDRRxceYxgUrwJoFKcWDwo1J9BsGhd8BZaruNDrFvxdPsYGmJMBGfTLNBMpirG5BBG4RUbWXQ6DFz3",
  "key43": "3UUDWiDgX58uuEPoFHVu7X1Vp16WibQLofH1tBSJ3GCgyDm2dteiHhfTXKAH3b24jwxGkvy1Gdo7YN4vYMXsCj3H"
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
