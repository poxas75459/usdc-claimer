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
    "5dSk965TKJDdHW8c1p9UDaAkUZWgWbg6Wbquo6sNdPm5QFkCGPF4smU4tvqPFc3vF1y8R9zTvnbifU2wyD3jKBJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2khTMNKoTAd1T62veZ2U5nzkSNEFZVQbsv5CufwJJDnWNv2Zkx7mfaS8sPMbK6oaAsk16y6nsdUVT5FqgvVHnsFe",
  "key1": "5fd3bgMFkWCPog26C83cRNURgCzNXBhzyEx1txT8LLtyU4QMiJKuNEVLKyg7r4ygbsam5UAySZymJKaTbK5Mw2ff",
  "key2": "4gY5CR8mdRXsH5pvC9BGKXASEZ86Wb1BxXh4x3GAhJHW4YcqdZgKeXvAMJo5HfyUHmzvzj8e52fz2MY4Zu3JYssc",
  "key3": "os71eVEH7yhKbLA2azxW3PKSGCNcvSvnNzRd2ymLGE2X6Q7cJ2M2aMbePCeKRBhJSDZca2JqJ2nNq3HecUpxuVh",
  "key4": "2TVZVJqq6zUuaZ1BK8cYVDnf7cied3o7H4i74deEFmw3PEo3myWXrybp9LjmokbQ57nD2ut6XUyzdLNp8AvbNZjn",
  "key5": "4pDRCcg5WDRdnenLLYPTWrpFZRagYfuof37LACTwz98gYpVn9M54c15sm7SBqiCRnULHGnbyrEJ6EQcM5dU1Ep4",
  "key6": "4TkHEACE19wmk6Z3X53DhNw1Jn831eLkRtuywEy5VFjF4TP4nirv1wzEmhCeDSuBRTkdH8vrHgoPo1M59GpKJUy",
  "key7": "5vkaudBqVzTRAtqySsoFUfpSP8WB1wraFJ8de4dExsN7qA7z1fRGxp84VqJ4TZhUkSwwvH1vozvKAhhZ8SARy9WN",
  "key8": "2WBq4gNsqmJb84ECDVgXzF7eu5mDGc7epb71u2drkF9BsGCdcA2N5oFMmsxfhM8C2cMSSNo8VK6NzfBmS1BEwP8w",
  "key9": "64xt761m3jUfj9HQD5q3AkKwYHHVTbq3sLNviwE2qWa5azWugRwVqhX9MjkcoMyPCJ2E4LktnHdURCwoDSppyfKz",
  "key10": "4eHAPcm8rp1nbNut7EUuMD1TzGojDUH4v3Zt3LGasNN8pqcXAQwpcEoyzUhagngUjB1koJEDzhBbjLeDgn6GQfVo",
  "key11": "4fvBvs8Afa1KXLfPGWjMaNLMBtfKEkdsWzAvyBXfubfPCacwCcAeCsuH8fG2yDg7hdUiH1vbFhRPPmiEtbN9CZaj",
  "key12": "4ovUUdhEgaSUB4D6uasvstN5LLLc78uVkfWmjpzmCVDXgCphdpGScwZ5yYgEEqSFMe3jxCT8zTtcV5xEYDcddFY4",
  "key13": "4eVZ2BKSKxbxULSdXW1Bih3LL9ZxvExQm8YEN5AHFogxnTwPutKFVhvsiWA7s97htZG4YXyt816xj87ZH66y4k2q",
  "key14": "2nTqTgJhXeocTQr89vjApZmu3GXNZvHF614biH3AwyVemkoQadRCUe3BCadAfDcqyy5KagAyRAFyW67oKcaq5QHU",
  "key15": "SH5yNnhPrAqKMzcmLbxWFPkXTnEriWt9JHGQ3TApdxM7WaPtACP6Sb4jphLHMJL79xykw65FRZuMn3pqLQPFkyx",
  "key16": "4mT6nuJ58REBTfrTnsj2iZtJwNEnEwRDyfjGzWVn873UWeqBzJWzRPBd7o5esy1q3LqMv8FkogmqkJ6b6nWUeKk7",
  "key17": "4myNW3JC19PL2FVTyzTHXavH53VvEYscFyPNxrBQi8ekzaMpyMHdmnHDhJmGAZeZH9YAWUXdFN63uMjCs6aFgSHX",
  "key18": "37PGNaggxmRQyjU1KCtJ2ECfx3SepurPD5XyoKnRiNRmjRRYhCy7Tr8cBMe3Uw2Wx43jx5tU5YU69Ui1pZMukp7G",
  "key19": "AoRZDFRJ7hA6cMjNrayaezRLBRFxafHTRaGjw3hXAkupUZ3CY9wKKQZNrn8VF4MsgHtRTcoCVo7jCaWs7arNvhX",
  "key20": "4hZUsPPMsxRoP7qCo3Uc8t4foGitvxbVmiRAKqchVSwVjkBXyUYgzz1Tf8Qudfikza7LYGyVAEjTE4dMJGrP3Fsx",
  "key21": "S7eCKcMGPxN1JNFgJpmLLo4SFoBD7AxdV6Hvaoq1GfFDBErKsSNsMDks9WCvi2Ek6cvZrir34RBtZ13TJ8asK5b",
  "key22": "3pbuurNtsq71gVhhCmCtqynk8CqykuWzcR8saE4a7btwKNAhqm4emMaTaLir7k76NVCAYBYYn9X1M1BDXvpWdsL3",
  "key23": "43gXtceHpqRU3sV9Ug6WatAxB3FvpKd4CCE7HkLnrDnBsfXxaFsCwz4pgx6NVCmzViHHb5sTuDDDSX3CwihW4Gqn",
  "key24": "5Wta8ob9Gk4AuMdk51zPughgp3CXwnbC1TVZvzzu5PNVquNRmNwTPs8Rs5HRxaHP3xM83452q6D2MCEKAAfimuc9",
  "key25": "5hSSjjtUYkrp9ni5BXhDgK28zEiBRkDPqqG3z5T7kHiToNWMTktNjN4j4aXoDYxDeawcetp1ngtAbMKfdyydV1z",
  "key26": "3jfnMuq4AjTyq7ZvBhh9wTk9P55Vk8tmsYVDGN4ZWeQk1kuYfXG2yyRydininhohRDPk1WQDe4PLzYc1vn15jr98",
  "key27": "5fCsvJuU1upCMiVqmehTNq55wwooVJnong4Ewtq8gvGRngumDDeN76pLXDSngX65JfPFXJywdCFTbv84bxGoDTbB",
  "key28": "3hsRxVqQUUAux73zsxxokPrP2e89ZN7sRQaWhHdhA6LXkYanskYKqnwvj47PDTnQ2yMwwaCPf4WeQSVLVJdmuKks",
  "key29": "5H5oWoUc9YkmgdFwtCcwmLq2F9b1RWP76Q8pqi4U8VnNAeiyqR6P69KkbwPsoH8GkW5QFvz4zduDTnm2J5HzFovm",
  "key30": "2EHHCLmZgzoRmgPiVwPMB8f5KDkfWGJSTmpAkoTjd4iiyNaNtqEH8hCiqJDYFezTkA2kvUscPY5t446XxAeMqnAJ",
  "key31": "L9e7XWL2A1gKPLfSxtRgubnoZTLxhPpRT6NqVbm2cMB3UeXjwAcK9cEuLLSmGNrJ49tKHRuwD3EBBiSVEnfx2tR",
  "key32": "R5c5YhSxZKz1DUcsy7HAwdRisMcrQ9mHdsy6iihkhyLPHZaoPzpD8yukCuVqTcLbPuJuSfzo4wfzkbFB6L1rmJt",
  "key33": "4gqNcd2FMGvoD7aigQ8YuEhjKhKBioB8nnQWWxe1AjMhVADxNuPJphkBbYGtHqxgCqpsKBX4AD1ZSMgu7Gpmjros",
  "key34": "5zwxEJUzZT1NaSBFKRoyUMxbSEm751Y8aNGBRx55EzAAAvTE6VbQhoL2eWRvNYXxQpxdLrh4LxBF97iNAvBUwNw1",
  "key35": "65TFw4m4H5wtNrT7zPCuF9MmybAuTZd1S2eJ8X9y78b9qzTkt17TM5mTqLxuTP2a3Q3HzyEtCwVLR6WfEeHSsYWn",
  "key36": "3PkXeebF2q8ZX2bq4kGxB4ELMXvXHaM7fmfiQ9MWn2g3A2FiZUrCct9Y2v6Xvj2SCCUf2Xs5qTTa1g8jnE3ZmP68",
  "key37": "2XtqmyB4SGGyGmmSXfvhS1scy3THWUzrnrw8QYV6ErXgFJiWBguS2CCgAXjYAsik9ctag3RMPwqwct1dPJAdi13d",
  "key38": "2b8xxTQiE3CNu8yqeg7giauDhzjW5fjbgjupVJ8v5veyFS36qtvi5Ebx4d4L7A8RWrk9UZVSuRfzeLuSuPtBQeSg",
  "key39": "5Sig5XD4N6jCYzyHPMb4Ek1vCGpeNdNbrpDzXSTzqxzJ43srfXJC5W7mqkSi6hPBhT8EmQe3QKKhzyrJ9Qr8xQme",
  "key40": "2rdTfmSXn52yHDJu3BLmuJMduHA82yAmvHCv23cHnBadTQ9yZkLT6YJoYB6cGFzwaAdoZvqucWHEezAu5bjuxBNy",
  "key41": "2C2JT7kr6LcrikES67Ycs2jJvsUHxMnXq3g74CW7BEVUdQ8J6JCKwk4pDcps7mUeT7qGFNFewXqHeYkfqixNTkgv",
  "key42": "2NUS4WGvJxCiJCMqsCB1Hody7CRQtVaVmw3joUcYWkAYDvzCkZCHbiUpZmy27uwdBuEh1Efnr9MmUuwQ8XEBvkji",
  "key43": "3Man1jtemkK7y6BTEWBqUQn11FH29PXZZPCyjLUEvqEod7J2XYxgvdH66vBDi8RZMTWuZB1HTabwwHELHu3XxuaV",
  "key44": "dbkFf3UyLMcsJT7uruADxwsQT2QCzi6LvNdcjrRwbfCtAusqqMTKxh5efJ5v2dLs5UWFU8cpTZU1KGGNnbYDXAw",
  "key45": "3eUCJ17w8k9F5GoGcfRyACF2EMGTKNPU2FNkZpumrXoHV8igW7NTgcqgGZ31de8nFooHbN5KSKLV8qWaMpYU5UhU",
  "key46": "48HBZzA5fAS1TbSKoT3rpwL9SDZhLUEF5GZizQJ52yyqFDfZ5AYDXXGUk4ATHDsT2XPZwuyLj7LfZThW1wft4txB",
  "key47": "4KbZXdDF8xemQr1DPcKHcRfF8MqgJx7fuBFEY2EJDANGkABJHzGnQM9VEQcekVrNiX4w6LBnWZt845hjGjDkgEEJ",
  "key48": "XHkkxgtqrdc2FbqtwzPuu9rVYykwrHyo41kX1wNgze4vWG3kRsfxapiEZhaM4zvnQ5XttcYYN3oQzypPQnVTxBn",
  "key49": "3iFuATejo9YVtAMU6KFtYNhmfs1UG92W4zophYjLbHDYMEBLLXGYAS96Djp4RdKpeaMCMgg29itg8zGxgFocnAct"
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
