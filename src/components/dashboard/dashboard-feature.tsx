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
    "2bAhiYrFJRrWH8tqe94ndSpQ1t5ZDJEy8aMxmdDpTZMhTsYq2VT2SESUueXHjBqCBJaiQfvoF87SnG64teecNcta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TKG6QhcqCzSZG9BetYNX7c3abRTXuj8u1zGXEyY3g1fzu4qeSxeu4UjmxQWXLjA2bCirLJTaHxyTLNHirdjZNC5",
  "key1": "556tN8yBtUVk8cTJmRnQbHY9Kr5PQyFCfJzesWhAKHYaR5ii3qMg2woxBUjNUQbEuN1Z4Bp9oBMwyD6NBEXpATJT",
  "key2": "5VuizHwLQtX8yfvpzwobm8JbqiE3m7DcpcnLkSsjiXcoLEeYUWaCKWP6AigUEnJedt6mXe4ixtz8e5be4Uv2UCGj",
  "key3": "2fdxtWiQ26RtvbgER2mNWqY9uxJP96Rn4w66vWDQAisw65DEQUS264ntPd2x7f6AQQGEGriJTbqaxCrPnD7RBpDN",
  "key4": "4iq5MsXfyudTPykGctHgoRnKVaLMPKbVrCrmWDCLUa9BZHHcn7gF3VRq68aMmQ5nmPChFzeL6bFMNHvWADJjDtMT",
  "key5": "2eZVEdJUhFNKHgCGZq1Td1fYixpvPtWnneoVnKeQ459UNV4vKLboPg4RFMwWf7T6PTDmTfAPqNjsB3TbG7MofgiL",
  "key6": "4FZKFvD6MkLtBkYV6oQ6cYdLBUPTo4NtTBoa585HAGtEKPhkwuLjj826TWjLpLnVHModYbafs9bH7oKJdLk2Q6a6",
  "key7": "3nFG2KPtABcF7HRkNwaaS4azgVnzUpAaCTe7cBqsgRAW5bfwKmKtXFtSk5fZYvyBcgZBUEmorLynzQ2MppKjaWgc",
  "key8": "3dEk5pYh8js4CnSujYNEXZSaREWGRdVV15mctAAUWTE3xSa3jUTuGKd5MgSqZP3JLJkq917CYjKfjQjDFbAJiGFy",
  "key9": "3FgjX1uPbjVj4j8wWiwhfoDrbvLxguMRpggMW16dqY4yE8wqpSaeAiUNsKbynGKGu5bmJynb6GZb7VAQNpyQmNqy",
  "key10": "3RPQZyqBBYSkFW2VrgQZYLxmffisGztVMfHorn9amuZXUmA3KNZygoyB5kNjkEjazSPkfvi31YFC67uGGUf1okhy",
  "key11": "5CcjqyNuL6Tf3cjhLGzWGXM1sJFYuGUHEGMBLtWgTspfaTgh5btcfvV45PDfZSchMGmEymuChXMHNSggGyKzdXRG",
  "key12": "RAwZDCF5sgfyEhS8zBu978TFHVZzJbAvTM8oC51SNA13aVuqJajZJqms6S35zdajnAPT8CocNJrtymCxZ4K9ATi",
  "key13": "2uMhjKwfCtZfpUy2A17jh8VPcqAVwzjoWaFjBWzc1uk8mD3NDrLfPJEs5p4XJYxMVMkUUFcg77vGxrp2YnY1Zwnq",
  "key14": "2LnrNFZKRhR923x7AXFuWTPRY5wN4pDBaN8MHTXc9aa5p7K5yUsi7sCXEege5fnHVVFCS5sRkkAgJcVBsP3oWYrR",
  "key15": "4sXZb81rZ2WU1zeC2R1Hh2xhbSBUTSEgL4EwGwKTsKsYkrBtKWFP7RQKU9SjVSxpkswshZ4S22ksJhiCux2VLzAe",
  "key16": "3cNGjVMZgZZQXup9j4sm9K2iNfRnyagZ2J2CbgurL6YPeKWSgCnQz4o5r2GPRuzrszB8LyeetQY9WG3K2Vh5FUqh",
  "key17": "5s6PNsiyBTMU3bnaNoLR5Fv4gMpAd1ehyD5nxLMdeFyd6zmTUuMhPXUtshSHzcJqsaQNTA1qbU9eobpouw5wwoF2",
  "key18": "44VHUcS9odv5o2qTuFr6jeZYXwuB3MQHMrahze6VUXGqxtiznveqp6wQmUADBhwgRsDAEeJDtf3eWHzGATK2KYNN",
  "key19": "2EEN1FfP7AUhNsCHAvsp6LsZkcmbxyrmiUEibMuY1A96gQteYVYzBrVUhfbidrwtuy6JaGu38sqjEZx8nrZu7437",
  "key20": "3fuJaohx46cYQQW9gWSCXcRGaVnnSaPdk1kUv574ewR6j6niXgiotHXcxmpYxNULUvmgnzcybJw3ivEGLYogBqfp",
  "key21": "4mHG5wcRwWHwFYaLFcmDKDayFBVpXfS9b4wkuRn66yPpt61FryRiz4ouAiMEirMh6bgg62FTALkbqFmENamMrVAF",
  "key22": "518TpBzHw8pLPinA1EjfGHBcryVjp1E9g58gjLBvg3qAa4wqDx6dsnhSPWCeFweiY5iVW7J3WqKoe8VaBUwCKFgi",
  "key23": "55aWShoR6XN6mJMLRiGt6UaZpEMMSWNmtyECU69Ngpa3NMLzYF9epsYJB3dBPByimPtX9idJqZ7oJnYLZZ1YgQU6",
  "key24": "3ZCGBNKionzMYJ3h7XWKCWYpteWHjZjewH7KemkGymeDwtV2onDo3YTN2B34HxQcPQVKm2P83nnS9saHovEpdkad",
  "key25": "49WDJtHo3RJ6Kcrb1XMf8UqEBGWVecAWVwaP3yDR6Khj4GU3W5UvFvA8fhoGgssix5x1L9tvFpZJRXPpeG59xocJ",
  "key26": "YAokcZjx6yBcXg3Yz7BwBEEFPH56f2FPoutUoP2F9yj7nsHiuyh2VpEc5s4YSqjznMR1XkZ1PHKz8gQf81yNVau",
  "key27": "5jJCChp3uPzKYDri6Csp4oz6a9FYeviu3N4huStQt3pjNS5GLeaC5ngF1maaQvTVdKFXQ1i9Axb9yVHuDiA9BYtv",
  "key28": "3dez8KoEx7f1LXps884XqSzkeVtfATbzHAY1SRseo4aiAFGDHMeSx2iEFmXQyKFSfacGNyR7uzHpbC5w1azKeMdx",
  "key29": "61N6yKZJHjnTnyxQf2MrzFgqEuh4Wew3q5cq8a3cVQNtNGfvW91qj1vpbvTsm27eSYqXMnxwjcHf8fU8TH9ojcvC",
  "key30": "4hYRE26qg62i7aAxnas7HhtpjEEwDRB6KDTA1YTWtzaCs2bSofftKCVHfw8htyt4skTGc3VdnCnGG6oW8gygT4Zh",
  "key31": "48dmwePDUYLYjUbQ3RfvdCt9dRVvoEJXqcKkETxr4DU5FGjqfhthwWVkyF8NULKsVpTDcLR5rKGEv6PyU6iN3Wde",
  "key32": "3wStPRB2aePD7LooAPUtmvzTRs1dU9DPRhBiE9eLoL8N1C4prXUrR4KeNQE4eZJUmFq55bCNZzAyGGmsxnoUod9Q",
  "key33": "3Ef59TDFzCHAdJqJpKEpFMdaFx8Rz9pBpZKzjnpBt7oC7tvmXGx29GYYK7DL1kwxa7SZHZXgBNhR9eVLWyBykVBo",
  "key34": "58zGQGaGVQeNDx9rK1qzsdKC5j4DEA9RegnRn9QrU17tgSzP5qnGx7UpzcQ3JztU2142UoBXAGDRiyPHkgN1CyDq",
  "key35": "5VZVrHENDBKRJZkW1GzJGTbzHU6wRP8k6qMgtY9wYMBf1fEoo3VGtk3hJEQhrMzETCNLQZa9gXk6vssyB19npFya",
  "key36": "4AuUwXabhdRJ891GZo5auM1FFJoXtooiBtTgsrTXmafkNZS3u7Y1QY95NVMCPHpQUoF5PqrcV7SYAXJY1y2QCqDv",
  "key37": "3CJCmG1nDEHvc3WtxLQADUFrEV8s79ryBUTJg9Z9yorCv8ypxwrnt5uyRViC3SnyyUBKGQvx9FEGN1Qfw4BEkEW5",
  "key38": "355qqsyuCTWben9F9nLUM7X7sWrR1AcXyXKaKUD6eK8SYA32Ne89J2TXtpDWRKk6AQvQd3AuBJ4ni9SyGgGpKrVP",
  "key39": "PPEkpQSgjtnunkdTb2XGrbgDgnSNRzpEsPpFiRQAAMKQHp1axS5kV4whEnRLnqb5ZPDbZKu8ELZ6FzxSmu7Byaw",
  "key40": "5Q7cgnAxWhWhmGtFE5fQEzhLnDbAGAi5hWXF5se6YC2DUmnt4uDjTaWs9KQCb4gSnQpYdptsY5F1EeVv9ZJn6AF3",
  "key41": "4DLs6Csk5tX1R3PNfgzeZRwPk5EX4PW4pB5XXRNYhhxmTLBc5S8EqLUNYvAQ4nfyWDMfavUy4XyL5vThN4iCJE8j",
  "key42": "5PkYFFN2NHiRqfaQog4TeJCbxZ6rKUg3f5itqKr3fABtEL4934szS9xJHbC3rryyc17aqy8M3Ty3aSGWPPA78MUh",
  "key43": "TJ7pHTAhqCfvk8wZjaTFkuC3QmiwPtNZPeq6Gg3UuYWth3KHAWFV94A1cJquEud5JQUXZTbKwJoLEAipNWs928F",
  "key44": "384s8TxBvV5iCU7nMTrqWMc1ciir6hBhvj36UBkZo1APEVcorADvwQjdjhhHAUGM8RA6HhkcpDXhPxPq3cT1fR8x",
  "key45": "1XBSoA6j3NrSLPP6Bn6sUfbJJ3gjpF3P8U8ShcuGYEqJJmims15cZ1eN6EsrrAGDxJ9ZNmwxp1XCyPLyNB3xWRR"
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
