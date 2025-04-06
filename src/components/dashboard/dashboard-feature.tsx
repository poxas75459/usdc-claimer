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
    "5iXLzhi9kPkJnwZwnMALAuYEfh8xjNMmdv5E3cBhSCtGqVik45MdxZQdQLS9BwwnrMkT3VGVCXAusrjcZFmBuFte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gfeyMmXr6hduNN4A1P9Qn5v7CNexuLHh5BwHsmhSsc82bVW25DtgkQUqboWWuXtSUyrVCzVMBkRBnuvssQ4r18G",
  "key1": "5g2A8gJrP2KzFBEZivv8Rj3U38Y3n1AdTYpYY811rHKbbBdvtNALkmxM1fXsMUnvhiqoFnTFHN1YYhY99gXutgvC",
  "key2": "3RNuFny4fFe2VbMVyizzGJTaHhBhFHfMKTCZVhojYx2Bg54cUpUqk5ifrEVp2VtrDFnFwBFRNJd8ccLeexVSyGbr",
  "key3": "eFmbveENsLxoVE6CCdPAB3GdAdBqc8yBUfhnuJ8JQoqpP4KgpiHnQ3w9x8JDbQhrdiLGY1tT93caLh57EmnZtpW",
  "key4": "5zdynr6b3D6u9QCJdgcNKEqzoiLDpexKxYmFW4whU9fJsaApcqa6iAEhLAZ8R7DKkYgHUjAg7hBwzEZDAMSGrpju",
  "key5": "61XCjDQ96D9sBLDCnWe4t5AQTSTfE3aHWGucx4idD5nKyjknsS4Yqc2wwSsYZ7vAZ7P8coJJDEEJkLteZ1RJPt66",
  "key6": "4UtH49pdwu8DzZfzMUJeAdUTkv2TKVYrBTgT9UzEAHinNPpuepdaW16bjdpK1fAYVVE2eMr5a122nT1ByAbsxr97",
  "key7": "3dV6UWAY7GFjvbxu5NmbgDXBkNWzhkXrvr2aUg5hXqSvRZAdxyxJqRVs91MrqR8TNEM6PDqL2zkTyst7KfCH3C4k",
  "key8": "4qn5pf8kf7Baz2gKj5AViw88hEGp2H2qhXm65HhZJoBtgrK9HTkk4KmybUcXK76QqqPkVUn7n5RmDwysGE4QTwzS",
  "key9": "3kesNs1XWZK1LcP1ykKQnK1ht3XbSS2sxCh5UhEgiJKJ8mtpZksiHSTzoB1uQeUYS9KE7forNmHQvemwFYokrmeV",
  "key10": "wJQx6KALgdyDxPgp49p8P5LW3WiiGKmAatcCGhQEp9cvtkn1caHYNgPoqg6Rg8Yh9fze2zQoNfyKGXYjbG6zLUn",
  "key11": "3DLjAJM1i6WTFjT1jN4c81pdZkmK5JuEKJgNCfYoZ3BGfZYe5vwgRa8cj14EcazX7L3yHTo1UfWRvDg22m4xNwLw",
  "key12": "2sUbP5eP7SWx7G6drhriL3akULLmnxoaumJwxWpjKGA2BfuzKKPZQ9s34KGQzWnC5pwErqaLC9M8qZ3ZhWB6Nd2h",
  "key13": "3iGLZ9Rk5PyPPQ7CYwYnwmvXMBMQdjz5hAYxcJTJEMgZcrQk5JpLNpHEuPh5ffMNDzCTtdzAXb6qLAShekm8sUwc",
  "key14": "kBjV6CoGoR6nmBdVyu9tSx2tmp3EuT7Q29QHaYoQFarUsL1kcaCsrL5QuNEY5aNdEEfDs464ExrERBoyYikTAjy",
  "key15": "255GnyPxQ954ognHMA9EKciy9vQBbKsLmsxLXHfy6PNTMLZF14TmdurQviG1bEFak8QZ7sdfDVFoWUniszaxvZeE",
  "key16": "2fwoDL8GpSkWrHRrLHQVc9rmSqfuK1Qj3DQ6KNr9dEZdJWmXPER7ew5jphAYjPEHQmx8oTsHncRkYxV1xbjPpFzW",
  "key17": "44ThFQs1FAbb8MH9gtrcEnsFaE9o3btm8ZzdWsncSqpyMw9Mq9yQhNnUDp9NG9VktnphVPoNJjSzwBFeJBurdX7",
  "key18": "2Ro5ADwYUJpgyTBvFpctDrgVKF63PCw6VJZDs4wHCGDivwrLgnfQHaFjVFo3jThfBNvdK8Nqt9Sd4camzuE3uenv",
  "key19": "4F4A5KNgUTUWjanXjA54wKgyeiw38aDa8saH2PDVhwDdmrw9srFmehmLRu5LpRuQABJvj1asVagQTyJudqrnPPhQ",
  "key20": "3eqyGYegNaPRhpn3nra8aSFVgD5YnX9LmwALxLRQ4XBUc3ekdkv5PtooQ8BcyfkM6MuTkyezrHSV7iinitob4rdr",
  "key21": "39jHobxHThGmAK5tHyQLY1vkar9fYUGoRJM7jZzzqbjgRHpm3eiR9J2pitrRxhgJYJQQDXztchicfh2GUKizez9L",
  "key22": "36rD24yhRfvETVn2ZxyHCUWQRK7uatsm55fqYFzFJHaNa9qDa8epsQK7ctLuaidMGafhqbY8HXt8WxgHezay6Y43",
  "key23": "WuZADKn7do5i8K47EotfDHtKyDuyuNmVXLwx6kRUFgYquDyYGsyjQWVGfnpHRSn51w2fKLoWWsVqWH5J21b3rsy",
  "key24": "2ZnrVC4RZH1kFJH86p5iR2C8KzSs6EL82qUn2Ne4HpUAESUYUDBYBb2ziwyaWdF65YQwFusy1SKKDorFPR3JtxLg",
  "key25": "5fpwrGUynZchFdybtmwgfLGELm2kXnT98BFPyg8mRUVs3R6bCiJYwnD8xk5uZ6VjyFNu8DvshyEdaGmg2eDNoQ4y",
  "key26": "4dNdmnXLm1rU87HboSXDJLdwoC2DNBXEHyBszTvnZT4KD8sFD9VRR9iDCF2Bdrr8BSNvxD1QSEuGAZxyrtK3JVjp",
  "key27": "3yGvtNVVTDRT6sNZDZPXDMNSwD7X52HvePg19svWgk1N6icx3WdyBZd39T4mv7LhGBJSkWyt4tFYoK9wqzLPmAMg",
  "key28": "2nEigdWKVAbhr7J8gmRLxJk3W4bHcKfDiqbsHgvfUnZbeXm3QjLwAAGrtTDKfjjgPb7N6FjKZVQis2vqw5qghpuy",
  "key29": "JFkg9dQKPxU4XXP7oQCWKbbBRTcmByA573bMVFQGRkuyPo7ZE3cL8Vj7R8Zv8UsbspL8gtt6zdhY47hbWh2Yqcc",
  "key30": "5Ck3swf1GzmEFdkeDxtQkVLkz7RTGdByvtk8coXzCoD8zVciifEmmxdkdCEfFaT7h38PV6EqtWwjq63dbcph1Cu3",
  "key31": "skpR7TaR9CHLASnY39smCNipV2dX5ntPdzi7DNZpJP3bE8VWvpXv7hHV5U9eBxPDacaq34pTxkDrLUKaeiWgJZx",
  "key32": "5HFKeXSoTcdKq1Q2wYEr4sARaCFSrwDVHowMpNH8SkHbnC1vEL9JQrqYWLjhfhZHuHYJimhndC88k6nbiAFy8hZk",
  "key33": "5PCtwruBtUHHNfeFcFh85wvqMRcEqpu9q7TT62RQEmGdaLHmn5R929fsNsyNVSBcNRr4dhNs5rNERpaxe4Essdwj",
  "key34": "5FfTuoU48znNSuZYwkL4Ee2NmQrVYe9MKKZMhzThixNPg7cYpTaX439JNqDxVk6LihgWe4ensfWcVK4r8aecuQza",
  "key35": "2z2AnsSVFaoKTG1bn6138CTKDgMP2buew3vZEahuberpGWoBVCydxP54m8aYssGYVGgatKc6eVVEtV431g2ZCywB",
  "key36": "25zBnHPhpUT3ooH59oYzepgpjcR1DXKcVvcu6MZjsgr4Lh8AB9UYQbPkwcZckZ4sKxGVkQU96oHRKYucRfftA8CU",
  "key37": "2XfUovLk18KPLYmVLeoHX2ec6U9n5RUrqJu5JqojmrTotyazqzwH2BQZYKNh6idwHpdmuQmuV71qEXsnBVfHDDcg",
  "key38": "5vC2QgmNQdyRdwxQF1ad77tQzHqXDtNjbrJuqk1qL4UD99uw8r5fsHRHTvecq3wvBixKaqvETukydgeuVxzM3G55",
  "key39": "26JEoci6gsfzuXXWvRRHJbsreydaxwCUJTk5gbFkWzRTBHfHhMU7m7UyRY5DvcNg6RmqJwHkA8ZB1YgWoZoJeLgf",
  "key40": "5YKHD8FQ2x7DfGkYSz9BELeKixKgfmeWqFGt4N35zXHyeWccmUTLaGrHKduZBb59PYEZQMfkf9vJSkCBtd1A6nje",
  "key41": "3SjRUdtpH6GLqAotKEzTdfd1HA1ZqFS2w5Fd5k5y5bWv1saqpPUj82zcustDpyU7bQMAsdkuxQg76yabvkzYnDS4",
  "key42": "3qMKgDiRou6ntuigUdKTjsB7Jr2kPfgbjHJGa6udDLaBY6ErZKmHKysEGXYxYCNXxB2rD6SworR5xYEyYmARrAxG",
  "key43": "2fCdPxa7i32xy1rc4WQ94X5qD7xs4P1pFpPepEhPPg7XmiuprYVLHyamhXNm3dizuMZseWfMDjEYVnMYzGsheJXM",
  "key44": "id4JtVwtepwbYFpYp6Dz6uY72jNM4YBQSs3eZddjtcHrRbFprkZu7gFrApjbjdphLyMH1Vb6g76AApM64RJxtnz",
  "key45": "5YX4tEeD7rpbxYuwCLd9pKQFCecgC9jAEEDM95ip1gqKgyJs3B9rf8pQ1UvDH9Z9eiMNrFyeAPysgEmQwV8LpsaL",
  "key46": "2puTyyhjhJciQXVMi6uDhSDqypN14zsrXnMm7yiWVjAPDRBv9ijdrSH2vKY6LK1T3dYB9vtyE9PJATrQN2znagDv",
  "key47": "4zkj4Dgbi1PQPfBvGPv1BYz7DHy2vg9Mhga2wi7iagtSFYipWbxcm217wg2hYXUsxxVQXZxk2uJtNZvMpE5xsbha"
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
