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
    "36muJyNqXDYtULax3LGe2p2cxT619xWX7vm6YbDukmBnm8jiohmwQ81Yx7U5aX3t6scfnCjDhT6nU9eeZG3tGyfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QDsFTBqr4yYi6ykxumTJUUUHdmtDpJh1YTRHuhkjYsGje3QJQwLgb5ZstTF4QBotfh5fsskozjEoTjazCmhmHsd",
  "key1": "4zXiKEJnqutcpYwzryFa9KgE2hzHWkeKGfdRNU2yE1SGX2QZnigRyJjjfD9y444TrAcQxWT3MgWY2yVbyLY9Y7K1",
  "key2": "4Cdxj8SMMpBJwLDNxUcgctWf8g3AfhD87wkmSmfqY1nrTwXx3dxzgh1NiGP1aTfWXQEHeUKvkJCSgg1No2Kryztt",
  "key3": "Go1sSGJ7PsKyV7WCAcP3dr75g52vuXupbmxwaqvG6HZCYnB1ma55k6xg24cwUcgM261qLQX1hgBRRgzfH3raMo5",
  "key4": "CY6fPgZFVSPXuBWWtvtXiRa9PkeEN4d1KVp2ishPeHjBREnAkNKVZbC4AVpfYbYpbuYkRC4UCFEuPREK7FjTTQo",
  "key5": "WLCZET17cmUThR1SVtXt9epMPoAXdbTCDHZwPj3PZKRb6tQbDTvcJXxxKgjyskHgSQs8ZxFmrD741EJXEfPJLrv",
  "key6": "KUfyjJZwAjvYoBpwkkym7kJKG7JKzHDeLcu7N3tCKMPTN6r1tGi9aCfxdT2GnwRhJosT9iShtzcf11brbckwuha",
  "key7": "5FDwaitSY9473VfJtQgL2jwkapZEqEhQ9kNeTpW7GdBr5myS4fhaqAvXWcDFLHw1sWbYjhuqfxXEVUMwJX22G31g",
  "key8": "4eTHQe1zaoFSXGkU8QSnQcdJfoMa5pvKUKH54a37vTxtfDBKvC7TwCVvBtnRk7sgUUiB3xfHcmzyEsCEJA6oURgx",
  "key9": "5hfPCRTMxGu9k7D8bAxK1Z53BqMfYZ2S362W37FsJkQvbVqW8Zu86fwC7hLTRm7YTPhP8vunuB8X4GscbTQCBwnP",
  "key10": "5T7URh3eekzSASseJE84EZvhPTxKaXrVBENZTpvdyC6Yt1nWM4kJEnMsZeq9HwAXwPoUqiAo2zNt3aLSU37so9Z3",
  "key11": "5xKqgPXHqrMJ4ycFKJpWdNovKf2yGdNyFgQRyksdraXpvf6AwMcCyac1N9zuzjKWskW86ozwp7qVs8CfuQbYKbw3",
  "key12": "YNB1W65JZFtcnovaYKQcSyLoisYyhxDnXkgf3SEgv2UQaPrGT4XrHF17fpGPHxjHmcYXsRRouTGJSKoLaVYAzYY",
  "key13": "9dY8L696nFDZt4ACq4N7VfMDYwBFQH1wGNn39eDwhzvxKX3V4sSw7s2MqYjJgbbyNmvbB9rP38nLJ5mgHbeVwwd",
  "key14": "2DRTedwjtDbfSwVdXEkL8zADRYiSaXzszq2o5y35t3WTi6vMEA6DcagY2iX3RzoDKcyTRxeHJ3mcaAhcNP1nXCqx",
  "key15": "1wuwap4tFSw6fTHieEBNPBWkeUTYvXUTe5PNixuWz6J7szV4x3cadon4gKXUB11cSSL68G2fy9pw2hSLwfja52X",
  "key16": "ehYPPfh3zfFfVxjiDHz7u3phNcZM7CHCZYPu9LPwzQNUQvSSUKgtu13vQq7RpVMgpsSiY7NoR6qbkTRiyRF1ADz",
  "key17": "2yGP2Mm3f7tuMSxBUAPLQPRkjQYjriZbGUqWcJmp2dQA5qXjGh8VjbiRfmEAN225JY6s27LzfUT2FqeJ3jtPLRZ1",
  "key18": "57VFVMt4pHQGqhzLCBsdaFzqnooqxt96YyDZXQgEzbSf9JVfH9LHrrkmYwAm5ELCyZx57Q4s4szKaN1iRAWrTD8h",
  "key19": "3ihJdsRmMQdtmQwFVMFiXhkQXd9LZT2fLarNPNxghYMQbNGhvPYMegmq9HUWepx2wXbngBD3muSxRfxSPojJGPTM",
  "key20": "5bndZy856x31fd8gSngtwLYhLgJmHep7fk3QULNti1xjXLnxtDT9Rsfu3wnxPADrgU7iN593Ds8HJwG848onnN2k",
  "key21": "5jg34voerp9hxk9MFgdxb4uvTP5aD4Yt5TyvCEJq7HPy5pGNidnAfAPyYyMqk5N8dW2E6GRoFXRYLvt7JKik5SYH",
  "key22": "67G1f3PXQWiMYaDUCraLK8EnsSjEbsxvvtBHvMM8vzCLoEodHLLkvhdsYtTMXpnycfVrBLGiGhRYFJETnxjhznFY",
  "key23": "3uds4F77Tds2zfYdPtwD3sFMnYsPTeUs9VWv6oib9tzheRowk4RqgRcabjnsVpDwTiqfyTuddo26aDigsspzpApV",
  "key24": "CEpT77iBShi4BassJ5XS3KyKiRWWM3TMFk8xRtMY11N5DRuev7KrBnyeoDc482Z83rsSt3EzPHz6uqFCmjLEiHE",
  "key25": "3HCvB6r7ABL8yxxPLoSAuVenoRP3Et9resEcQGnJU7rCFpkKFQDDsGbe7coZN8MVnUeayWdFiUuZf4SXdYTZbA3B",
  "key26": "5ZaFeafymwyHvo4JqJoE5k6QznZzEPzDos9z2fAX15ogiPs7JwBbgGD21d3EQtLQAWDCgv9jK34TY1PpUo7vwb3J",
  "key27": "5asxhbTxwJiRxidn9FU4sPcd3DbJU74KJJWu7w4mav6ZDdMUPDrEGtn7L9NdspdJsJBphhXN8gMaUjTSHZQGKfhK",
  "key28": "4NH5Cs1zZfoSfU8kk7o4Ymi7Kb7dLD3cCPFoqzuYBfiv7Kf7a7fH5YbkCheKjybnVPcpuiNbytBeH1FiR3Y14RxJ",
  "key29": "4FtzJ3Dn6DE81yJqzi745djs3kxY99YFcF9b5gc5Gej94aiBZXJ66Y5MR1Kb3YGCgpGH5iPpo9S4HkK6QbLsJi9Y",
  "key30": "4d9wcuKo7KZx23aKWFbthVzmTuV3WqYNcQJZJvDR161dErAZZK9vfC8STDZrzv5fFL9TD79CkAWoeeJgwgi98qVf",
  "key31": "59h79oKYtacy5p66F3jtbkrsyTephVqpRYWrfP4SvXbbGcV1JGB41msFwKPRXX16chUHQBruzv3Z4vWzT8vRiMEi",
  "key32": "yzzztPxVyAM4rxWwv3xyRiccPnEw8J4v88m6pmmDF4bv7ZWYKdvHiDyhkwjvwMxZ1JrJUKjH5A7ofCvnHzjNjhF",
  "key33": "MtZJEQbyYmva4eczpXCN4T8eb8Pbziu7CD9YxF9gPipA5QnpvJ6mGbwSUJ5fFG2VRsNZneDGpqZSsZNnqeXA75N",
  "key34": "5MDCNNoNAZcsGvgwTBvSLp9arQcPRnD6p2BwCpcRYnaHHLXmXfxPC2LAwFcoYtc9KXf1pRj49XBFBZMcHzLh4R41",
  "key35": "3dzRLyJLYds3P8Mm4mjaDNTo8pmffMC9fCAq7X5dFaSn5dTvQfvtGbnWZZD1f83CnucDCfUWHx76o6uvkkKxjLHx",
  "key36": "3ddUASHDMNQXzNtcqMqUU5W4b1m1fCtbXBajW7z47fuHFiB7ewRQJpNuHqMnitNqDyffwj8ivHuVzjmMKVp8rkET",
  "key37": "2cvLnwK1UwcBUb8onHEhaXUq7xWcGL9HwPS6465pRt6C9AQq1h3dq6MJGuDbCcs92RiLrithti9aQfLzD4QWhB9z",
  "key38": "dpbu4pW5DNrDomThKR8MZFuvcrbW2YBMuT8dSMeh6ncfwTga489YUWBfHGMRphQNcMd5gs2U2EyiGVcVEnzJR4T",
  "key39": "2sr49TePTmGo2b5dF4zjNB8vETtvXrRJn9mJEMfzRPwnRyTwq7RKAeCBczncp5ZaypeCnLgbxa7npKMbiHaEkj5t",
  "key40": "23ZYMkSADPz8MzRMxjYeRZyeUJnthotAUvmYW5U3mDxJkstqJJnJ1juwCStqqWFGPrufp3isdWt6jhmvsYuD1ZeT",
  "key41": "4Tk7oYSFMhnGvC3z5r9dEDp2tvnszEe479JZnrAmpMMvk1mkBYtj3GtAkjhaVkU8J4MMVWAB4h4bphaLNye39ZYM"
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
