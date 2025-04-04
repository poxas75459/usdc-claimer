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
    "4DyeV4iUoZb5gpaZCBnRzVszmE8Db7x2dGVUag598s4gpqCNqt665QsoUhw16pSBdEjXuT2jWzXRtiexihE8sPQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zQpeP1je7DxAkceeAc8GTi2RVURspudW4j1Ze4Kipq1zU9p5v6bkjMDcTnecEHwFrA6uhdsfW83bAQCnNL91zgH",
  "key1": "4bLkVKbwcJJN5TpNY8qwb3HBcdeSEvi7xHNyCkVAG9gGVpzeBWN85wVg2oVhyhU6FtS1y7vHzkbtXqGNHM5XXurs",
  "key2": "2LhWsJpkpxGKUbeQxaM9v9Ay7pndn3gvwNvPCF9odabHJkTavRMeNFgGjr7yBFX4xGEeEQV7dUBKkWAFQXRKQ2sJ",
  "key3": "2R3oEV3SqqCHpG8wP6BXLLUvg6MMYef2jKHYQiofErJSQZntJix8qidS6jFWGhibuYVnXMrirEfLoETfnzuTKnD8",
  "key4": "W6Ap9nU6RkD71ADx8GoHSFCnqhkQjtZEv2Fu5xTdRiUV1YPpwCTGcSVBbfvcUKRv1Z6dgYSvc1Noqhw3o25KtUr",
  "key5": "3YauiqfUgpebh87QHwTTCgeoUnkeZ5yKm65uWThQzpACmqu1LwLYtH3hY9ZhkYcXVf3gSRsvAAGn3uvTUCqxrm5L",
  "key6": "5hLdABAaJ6g6kXgunspQMhBU8WAMsrgtoHfuNkVTsDn2cdDBmXsK7Lv1sqftNJNmdENqKSfrviRxc4KnZ59tkhVg",
  "key7": "26TTnuJjVJbAi6wQxmX53MtYPQTun232EzBMW5w7C5pdGKvHbf2xeoXY9nYRucRtGLkk1315jAAKEiWop5GeYnnM",
  "key8": "5vYGykPnEzWXhfBuL99a95qMqzmH6apvnrRNaytz6Hng1GuPwpwGynuVTbSB3K2w1PWMY4nuoPCu68BPdjQjSrYN",
  "key9": "3aaskpD4TQmmbWfkgt1fDA9KWS91L2S9EnCkofe2oA3cRAjRvYGJUkYAJfTFQ66ugMU1gTtXDGVa4cRT9cA8F6T3",
  "key10": "3uCfX5dEJBTCcWepEVuybaGKt1qMqBPbHRm1DQp2yu8bfv45Uvn8LsLic88BunkkEjLiQBJErn3pu4TpoqHvpCQC",
  "key11": "35pxmHkeLXwe6Ro8jXENyyxjxf8ekzwowri6YL64hiwpWUhVhfMmsPwJdj42ha7QeVJHTHJ1ke6qaVmRTmoAvbjm",
  "key12": "4o97A2hTTxVQPaVAeLvQhwt168S3ME2pB7aezwPmjoCTj3HZKegR3oxUBuyWHkQs18iJAPKNseBNFahkrRee2UcA",
  "key13": "21ThVEDS86vGrs1DWJv55929pjDjgnhs9XG7wUy3uEqgyNPPL8gkHP3YFe8NFfELDR6k6QMHL52kDESapDTz73Zy",
  "key14": "4SnYwDsgso4ZqrHtVGgP7kCTraFZsvJHaNSbsai2xFR2EVoKQnCt1VJL746M8N7QBaREKmqNLZGbux9m2tmDNhcF",
  "key15": "4vKmnsorxg4SC5f9t9esErNgsoeLyci9wQ61bSqV2S9NZtCeW4opaNTxdmFeC63qtpr2kcQBJ9eWz3iSAJobVwrz",
  "key16": "53shycVmbZxSVqnB9Dx7PKz5H8MY3Yikq6tAY7zaYjWE7L81KVUjJMnhaKAfU8cYqaMj8coeRjpDZ13qf7mEY4vz",
  "key17": "5BoueSdNFskcPCy14zvcZ7QnkvVbgpBAxCHVworYEJvv2jwcH2ibpkSJfqAK35sxePYhW9mvGsSifTWCccxiNwBa",
  "key18": "ySAKJXzuCLK4vGWJrP1tFosdKkbabXyQvmrLVmUNvQuztdM2NvxHZK2shSDtM3arxJUFu1Hm3jj9U9Y5wgQHX9w",
  "key19": "66zs2ZyTR8qJfDK9uTfRHjQTDDPS9h2CfjnhtyABtQBq4pYUi7jMw474ywHAYrPUL6ypQG1D1mzpzLfY5eKrKCnJ",
  "key20": "9c72t8N1AgtakAD38xXrc47GGTWNdfNtz8hrrs4jihQhiHkNZHW7BeysqufrXJJULmTJQCGrr2LGyPUHJ82j8xn",
  "key21": "3FBcsEVgGTB1j4dovGPLVTyissXLeK2GvfAp6BjtAkzC5pyYHbscPDpoPCqM3gaj9eaNCUMsuNn7qEajAt8ZHjtb",
  "key22": "34F91TgeGmm9XsKjqJebcWLTmXxh3YAW2aPCvybTtcyZC3kw11Lp95kAoa2XniNZATt26Mg94yAVBv7X8NbK51Fb",
  "key23": "4fQ6cpAbRTSxb7jombZgwED77eifg2ZcQKqww3faMySJ4W18JDc9Yw4ypmyxWqqZcZtzeVFQnjXYwvPwzqnzECzi",
  "key24": "4zW5E7NmzkYVPCy1jQqEphJRtBs4PXHEya2WEh1HyWLVGnLGaZmQWmEScsVjvsuUwojEDqBhZTR72rXi6VbhjMd3",
  "key25": "36V2YwDFWiEE8zpVDHknhbRTSLjZoCxSocpzHxc5bvfW7182zY6jKYNuDhThRtiyZz4n7byz2ZHKQbEGKrV5ehVC",
  "key26": "5bew1142mfPCbWGpUUghqp4Vv6E64QMy438aR5iKh9P7nQdruKJnJda8o6vMLgiHfH1ee97BN7AzEd85R9VmkvCg",
  "key27": "3D7s4rFVTE3CoLpXaz4VuWZPQsbX3kKddBPy1HYHEFb3WAnB7AZruxf9oobq1ecHon9LPjJJJvoupHm4sLomCY3f",
  "key28": "3TFVSBaGMdMR2N6XXnvPkj7utza2AQpXVCBb2Y9UYHCJtqUQZ9RkBXnpCGg3VNRbh9Zng3A8EwAcG2g9LBMqoh62",
  "key29": "4HKCibSnJDodizj9dRGUDuT7M4DumEdLk3VW2HkjYwJ1nCVY2rw2JQHpebYDhp261CZdSDbFSc8s7DJ5N2TSCoMF",
  "key30": "2V2nm1sQt4AsQcNMroBqz6AXbSvqWVTYqKu4p9UFKkhMvVn4wMzVtmLLqjAcfTtnB8HqW396Pe4wgEt5MqyNqaG9",
  "key31": "2U7VYsqbjbAMtxiy4zZCcAQybyEUc6SjrQNtm8ZcJjNVpnFWqGfPp5rpMqPF1KYNzxNeih5eStbHSrhRyZ5Xp8Av",
  "key32": "N7otPT7NG42W1qnX1fsUvuvUfSaQguwNua3iCsoMrZTQcrc6FGQbhnSEzmoRcafQmm1UsSwJkmT8LYDiW75mFKA",
  "key33": "NqFrnf9hrikFFqZWp513sJrphWGpo5udfDM9UsaoxGvJHGSfrno8yjr6qqwvre4gRiu8QaH9UUSfzpYnRQ2cGkT",
  "key34": "3KtWgwu6cKviqH7ZhGptjAxVzXaZFKR4sp1nB2Kwi61NR9qnxLRrUzgd7D2g8E4MzjuEGwdqsRVB5HznGvbNQB9Y",
  "key35": "JsbMiFz6eJNDB86HUCFtLqtCYYjQatBs33caMAE6FFrj1KFANzaC3wFNyYLjRwWsxgpY7BnRR4jW1jRsmur7d54",
  "key36": "5z2m2uuTuR6Rg7wjSfXE7SZH9eaAq5iMMFHZsv1VCVcBFW7e4v34wtaEwGrA992D3yu9eXHcyC9zcxgYqEtjXiNx",
  "key37": "2SYqZwYFEVXJzhcWdvdXDKLjegrHjT2cKmjYdTztF1mbDcroxYeWRgH4wWUdtpNxZ1RjQLtHSX1oukhT4NNhpW7j",
  "key38": "5U8hqVRzMwS2KRuK9UZ31eos1bShL2UfvtUNY29vffedgeDh3psUysF4MnmtScSVvGk35Xt4LkUgYN3SqwnDJc8B",
  "key39": "3DpzxVqgodtoSPfkxwpHKsfQHLgYMr91JnivbG3o4cpgH31HCMhwY4RumHPvgPgJGuhptVoQQL1iMsMCyr8ngue4",
  "key40": "5pKvU6TcbU3MnGGuE7M5PVGXwX6K29F2VSTWH2jHV4wsgrd4tiUtNZvSKoVQckCvEbj1nybbjcHWYkRPKGJ3j4gs",
  "key41": "2vX3mSuFnBUUPEi9YFcEJ2fYek1o8VSSKf9sHpoAKwjQPdB1YEZ1fdeeLMXDmD9pyqW23gNnU9e1L3CaALevDiM4",
  "key42": "4Kp2DpwhQBqwGtd46byox1yP9WQuThNp7f1HSFgdHxKmDeyquxuYfeyNVHdJv8n4BfRmgk5FqmN2waWQmGsUF5NL",
  "key43": "2DWQnaJ22uDBos7JzZ4tGVTpiBLMvsg2E7Rjgd5bbKnADnxjLuZsRdsv5McsRov1dtQGwbKijR4yjHAh4aMUtsHc"
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
