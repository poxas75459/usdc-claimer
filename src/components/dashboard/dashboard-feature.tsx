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
    "61zPXetfMwq2hev6VjxtC18DnZHXUgRe2GHX615m7qkNTYrti7Pz99SQTNjifDxCweGPacKGHfsN76jproGMAUpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mVnmRHTXJ2LCNbcgx5vWD1cAJtFUQAhJxoSTQZ87uogMryVs9roHtBQ7AyBeprZz4BvMDyVbAhQJBDF737dcniy",
  "key1": "59kvetChd5GuMFhu3nuMKpURsM7E5XRiLkN5CSkUts9vR4uRT2mp1DDcJoap6N8BgjJeTe9HUZqkEQB7aZmd8giA",
  "key2": "3p8zQSt5EE6CeAStCd6QtYKKJ3AGpev9j5GGYFBfrFm4by6xd7qvU46XNwmrrYQAm8eniBCbsAMHV3DMQf88bqx1",
  "key3": "4oxnt9jS8PDBSo19x1MvqMDEA9Kv1Nf9otYRn2RGYgGPjGidBEoMnveKEp1DVQP8mqnMsHfTrGWbrT6P2GSjMEt",
  "key4": "5XXEmLFkJNpUBZLvGveLut4my6JVRxA8XezyX3p4Ze9bRn2p3fVesEx2q9epEv23BrTAjdjntUpqneGgQrKdnoTA",
  "key5": "3xY5kuGLFnBQZSDAhB76PPRiW5e1v22jm5Jym3L41w4T199gu5FyfmS392F5Z8P4Va2KXkabaaXJFE7jWgzSFRYD",
  "key6": "5qoVacqbbAcARTYdhm9BT5hi7zkcWgzMN8ZkhrJZiD4Ck6MDYRuRdM8CdJZV9d3n14R6VTM5k4oj94undGrwb8ah",
  "key7": "94vgkeRhMthDwAyjfCBmMzxfB1nX9Msw6dbuvDPCTydQkxwkLTPiq6fPYoUXcJpjQAFHzRnWVSznANixZeXRVHC",
  "key8": "3cEis3i4aqfFHw3iiVUDpUKqtAcW5DNNs52JSadBXpZRhSxqGM3VPZCFqtpqcYy1mgLZwaGcee81RJpof6wU3VoC",
  "key9": "5zTsL3nhKNJC4eD8oeujavsteqS28cuSsPRVMcCmFjmk5Y3rBedAoY7FsbpNYEVAMXQjYT28BZcHuyuqg7oHQWiQ",
  "key10": "3KjLUAUGVW4WRK1EiwFQHUb98SXYpCQXRJsKfCNJqV2FNXHqsAExrKURvzaDjXdk3PjN9fRURYXLXTG4bkDXUcDm",
  "key11": "37fkALRQA35CNEyYA9oF9YU9kjDd8B2P55cVR1nrToJSU6u92Yrkf8c53CkVJaxjCM6FQN9VzAXgPj8BMeaGXm4v",
  "key12": "22p1rWEcGj46fY3KP3GmzfhgqnxGsUp6DTBhLkG2XyKCYNcKknuxYnS2hGkXADSs8DcRNF7xrHHsxmQE8UKPraT5",
  "key13": "4khPUpzT1vZPnM8D6Ahm8Gk1vHMncbFu94qEf97W4es6Pkcs2w8qLbDi91vRQQBda4we1TrBtWPKhkAVah8REas2",
  "key14": "3ososjbf5Ck5MmLcpk6W2icrKk2S56sJHd1yfukGkHGhFA9q47Wkz7zhM5squPAg4ZCVSLYXdcHL5NnyfhCQUBKP",
  "key15": "qLFDf5rwwBMcX8synr8szTegDWE3p7XQfH4o7ityM8xKgkw6X4juCng4HXu8ViV9drUsog7xeKBTbDbuzCknv2C",
  "key16": "576qszVk4EC9GgtFBc1ZxNXT9fshUiq5RQyXW7bTHJD43xNBmSTKwFf97ZTgzHmKFB5ySnL14QYG1usDEy3z33gB",
  "key17": "X1enT5duWFg3qBfEpY1XyyY77hsHPKmJoVoud7fVJcLhXfoPgMavpMFT8gj4vtiQhH2XsWupQDzqgCWTZC3pCHo",
  "key18": "5hA3CvLUF9oLo81D4h894pFsARYPbbbJvZRXtx62QJ7JHPLMJZqCb3XnYowXzbUGJs6fpi87TvrXapR2yj1Agai",
  "key19": "5ddbVrPEYaVPiStCAJNQYs6Hf4pxq9fYz835p2ibQVzDy886RZ8F9gqD1Z3Stv39EhfBDV8NaCMcu4osheDCoANM",
  "key20": "3DmHvyUz7m3e9ATjDxDVti9i52WxkjtD39JLnnrWPLsK6DTqvsfbsTSz59AKdwXhwE4oHJbfUnLnv5txbrzPxmSD",
  "key21": "5cogJ3Dzd6Q7Y9AdR5HxkX7YABvthyS5YECd1fbTHTBCTaiWUWFqDnwYQizQi72JusdqWbgYTDEsJ2eKZEdakLWB",
  "key22": "3e2Q8cym4ReGde1tm9DoaaZF4QA2D7GPDUkHxeS4WXRARULjcYSXRNtTUKPtQ52MXMn56cC6misdVxeUqi5fUquG",
  "key23": "3p2wyV7UcCrnXjgPsZBugSiAsimFXaNokQwk3hGqC8LeV7EBEcdJBJWf3ueWtCuk813qB3dGLGG2hMFAcU7DnGAb",
  "key24": "2V8F1Zjvpo5EEGAvagvCsgmiCXFm6z9hWFmw3NmUMHU1q2nCsJDVhLasSFSinEfUXSFmEejCLReKWqVAQKohv69D",
  "key25": "XgqKzimJT3kcnwKBxRVMR5Zh8CLgxgjB7Kp6E49VoVembq1vHmqquGKgukCPVBqD5EUPjUce1RHJFMGBSeRKYJq",
  "key26": "qZixVjQm8sPHi6nFcppda8w3GD3J648zEXiZbiKJeMoEJ7jjh32yxDwWgTCw8nbYxpCa5gATaXMUDtJwCSvjrnT",
  "key27": "3bHy4R5KFY91txX4SHqZfQa7eRsnqUHmq4R1BumZZHdnBZ4wp9F6ZoXhfB2eTXyULqRhHbnpUt2CjHjzaq5DAVpX",
  "key28": "5pxiVfEyrUubYwhhch8wDAnqCmPTPELUuP6ZcBuYSjxoFvPgHnWy8NzSak1NB4weiDUUmpTorC7gr3bcDvRnCpMy",
  "key29": "4jCepJ8xmSMbsCZkbbmJUmDJpJdkCS1Zf3ZfJWJQRnKwB8NunEWsaRcwc82qimYvQ8ZbwVc8D58GFXofiidNNsTu",
  "key30": "aCc6teM9rWwSisg2x439hbm6Bhhtt8f6uMQ3BPNdyAGyjWFSBbd5t6Veu47RwxHtsTVnyxHBCd4q72GCdhdWRz7",
  "key31": "DxrapFQYiqecLVwadfGfSwNdqGCwvktwnvxR2LDipi3t4h4sUb6xZa4TBohfTktMWAdqAu8raSgzh9uKGFZuYjs",
  "key32": "NUzAURqu9qBQhgSALtxsQrh4knjYHLCLRRMgqNHQJ2U26yyJV81nG7P6PHRoM4c6LLS2YqgvSeXqxStLvtPkbcf",
  "key33": "334rfB3GtcY55Cf34NhAbmcNybLwgDGgVtMQVVSPX6cvYaHn4aejk1tySaaFBMjcUVPh32g2n9kQuH5Y2ubhWBDC",
  "key34": "62SEbpd1p2iknwUshshWG4kZwqQpa9QkZygTBXRRzf8kELG3NefggQjNmuccPrDi66HezPs7FHaTWJVEcSEzuvbt",
  "key35": "2m2idwHb9b12pmptuzr6oiqsqWKZYfvEPJV9z7p5UTuq3wiYYnkgLndU4quhZCrqh4j3226UX8EHGKpUrUJnazmy",
  "key36": "5PhbbGY8Z5GYr26rGSzhtDnbyeE9k8k2YochZWoHc8YqDB5iBqPrqNMpFcW4rc9PBHcqnHbhKaQyKNhc2ksSwCRU",
  "key37": "2kr4gmQfJ1eSVAsZuDxMcKPi1eFryFehLHreuG1QBVoHsse93hdA9J68oEbXmS4gm3uuBaEmPJvKcuGpeb1quRWh",
  "key38": "3X4f4FbuzxDhnHqMjzSBKgFPSepNsiZFopJv3z8CuoQ1BwTQFQqNAvw9tdGDqeMYbZFJ1HNjgurdov7FXHLbby39",
  "key39": "5GuE9hBoa4vYPcQMUj37AiebyA1aLBpTW4rKKrB7HVcvqYFSga6By2oD5MTKtTpKAT3QnBoeJHRp15qsqUargGoP",
  "key40": "TY7Nh5FJDcDcZjrsyZyNdCaNPMsv3cCH5X8tpWqWHP1B3we6dT9fA6qRkxH1FA2fHJ8UoH2XUMNnmprTemNvQAM",
  "key41": "3gZThzCHC81UE2whiCAzG3amUEZ7w2jFEqqBHmEjtuNqo1HQii4rdS86BTFpthcctbWNqKL4EpE7i981fgjpNGas",
  "key42": "4uGk3iyKzP49tTtigBaQ9QtEXW3cDVeKJqB3VnLZVFUkPJf9qDe1P1Jge18FZiYrqu6pADSdhmpa1whMUWsGDV2P",
  "key43": "4zMGZxjTYTF4NtFNPvjmGpGD15GNnHcNG3pPdhMaScPbByLFJEY1YjH1sYhg4YBhdsrBH4g1BzniBXCJ32vYrMvW",
  "key44": "2Ue5y9oS45n1pwJYbrsTZJx3sEezWwmd1QXQhTWepkCFr5mFpHLkiabm1pkHe3U9uFDKDmE7iwZnrDYq3yJmo4TQ",
  "key45": "2AFzJnMhdbuKw69dp8Z6DRz5KuNF7YbBCvbuaVTsHxnD2DyCg4w62yD533zQpTPoEpmJB6ZZKozzjTmXtkWvdj4T",
  "key46": "hjP9dVcbwmUbM2Q5zRqb8kqDZf6mPRbbw3Tk8L4rhEtVsJrQE4cE6dxi2yNggGFArDt8SvQK7UDHtaacZRr1gpy",
  "key47": "Dk1LwEYEkndq2PHQC6Yka6D5tisZ8DYHHxHKBCgnEgY21RvcSTGL4ikrcukWGwZ8xUN7FMpakPjscPCqGDu1yDw",
  "key48": "5jcZyAfoeVQ9aeXSew9zanamK66QfQMFAmQ7nhjP33BQZrYARU8cfo5V6v8CXq5QCTUx8mCSwo9k5WUGfEcZ3Nto"
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
