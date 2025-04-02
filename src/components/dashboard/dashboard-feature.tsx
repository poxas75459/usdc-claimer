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
    "4JGHeCryT9CoTdGJoxDPgNkMBzTuktrdC6eZTsegE9g7CrUpj6tKWxDTM9z2ATwZy4ypKjz56nVP5s4VV557YiFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xez3YUgVB5xHfGF5WPUphiisKYq73pC8omJQBsxb9Xs9cA7CigPXUunHDv7SuaXFyAHpZM7vfyMAdaJqQew3Bb9",
  "key1": "62aihepNkN4fSsfxpvY6BoF1y9NxTTTc4FkvyRaBvstmJ7Gc8AMMiyPLdmrePVZwyQtDZijwmME3yzVdJQHvNeUJ",
  "key2": "KC3jzJaFoyb6gnP77thLX3qhy6nWFs6UYSicHBgpimurAby2A5yLT2M9XzMrZe3R869VjB2HSE38CLEWRFNiH53",
  "key3": "4cWN8UHLGXb1ux3RmVMs7yMayvmprJSbRBVrcCNVzBFJAbvYLQR2fv25QiekBwAxhcqExENCP7foftzKqVRWNtvJ",
  "key4": "21PhhPTxva7it6EW4rtFbjBC1kLCkLGn2xqJtq412AT68Z8HrbYfqVxWeFA3TBVsJggj6mcQQRuvjodxPet8biNX",
  "key5": "4gQgRK3oHNUjPcVLfnE6e47sB9rtfYawzSFVTit5t7gDcELActV4G5v44pjd1jJku8bdzoJZereExCXSBVWZ7cC1",
  "key6": "4EJfcHe77kLK5i69S3AnQ1k6syXXjS8W217zGPgWme6xE4D1LnfTcjFwemwGVPfHouRVPnQNNNNQpAKN3GLbFe7j",
  "key7": "rmsmJzmAnaVKBerfJcw88CSz6UwFFozgHrHTVj5EnEzLud7UcJA7Pim5n43FN5wFqpkDa6LqtCRfRViLT8Rutv2",
  "key8": "YNdNMieT4t7o6QJjTUFPcC4k9aDbX6uCatcuK45GR278BHmUYf5FS7BfEDnQN3hSkZWE1ooq2YCyTgWdFQ2HSLh",
  "key9": "5fQ7LiaMarWUwGc1GmsynYVogK88e8eayE6NjtG8brf9Uc3cCSwNeeKNmEY6DqadbbFufSYDRpWUWH2RGcztYv8T",
  "key10": "3gnwzUTRcB6ZGFKx9kvftcQsWNDrAFMro2KwNKvxqAfPGCPCpBVXSSnKAF9jBh5ZNVhnG5itCnsYyiUHTLb4W24o",
  "key11": "3tiZLFcAWWhmyKhatNwzhuHeRhYtpHJo63YnbacMwKodzX3SBvfY3hMCGq2PpdhBBGsDVaANtePP5WUodmitExHk",
  "key12": "3THKKCLU24LVfGB2k3TbqqbLbBqLCj6W5KJ7ZXDwvtWnhMwVjJdTesoRawVu8N3MDeLCkXdk4fHrJKYSnMjoTKHE",
  "key13": "4fVLdC36KQiSE4xK3oHv2PCKA41AjfRTTH2aXvymvArMEfPxhPcwf2bt6tLQx9wgKCQfA7MQ3Mvcriu9PdiccZrD",
  "key14": "3gsLZvMhBuhvp8JsN5R1W8KcPo3qc28XuLcj2dMD1o5oerSrr54SBq5VAmwTEw2rYpSJgVb9iWL6HWXASZwiDQEP",
  "key15": "41SQJuTNoa7HbDdVTDyhVadB4hNu1F2RjDdb8RjcTJTdmi63VFEFRRECynWrP3kYWYBcpFgagj9vgMDyK2J82FzH",
  "key16": "2eXLcMcPWwdr7tEhJFiofmzJYLR8GRk3zTPvJrKoXQANHwEA8ukLheYAdqNjzZmuTNQFKNeSu9uuKosN6zsvAjdX",
  "key17": "26oG9pEzPuRq8eFd3ADapPJkQnyqHF6d6Tg36GbAWKqKxuijAmBQAnkQVebLMg5pj3ciYRYxJofyjnpZFpDr7Wp7",
  "key18": "3E8ADpRachpYyw9joESvXoTGRVoKkWDX4Fuoa7kDwrq9UK4RLGnHpzCxtgBkuTyVYtrviL3kjox1PQyNAzQUt9su",
  "key19": "38dfLiT7NAEt55rLsSYUzTt7YA3evD2Srz1gRRygYJmF4VTdoBNy4zP2NMi6kvrPyZ4oznMqiLYnDGWmPsXcWBjL",
  "key20": "DEA9JEVy4FjD46LUL9mp4bQCbZ8BZ7T8sWxYuzUUeYQgZ73jkziKRdmvBAxbBFvJHXffuK29CMMTy4Xby8i659Y",
  "key21": "4wyqMmSQpurM4r9xJnvySN62fowEserfgYGcAdxcLtk4n4r8Xx9j2BxjPr4fnEtkeU7qo7u735Tjfq3ewygdzGWn",
  "key22": "97yLiBFuFsHR8GgNnh58QUVGM9e6sRRoycHbhp4EMsi3YoC1PhRFters22vxuHApfLdDoJw2Nc7E57oYfNG5j1x",
  "key23": "2KmCcx1esSFjoZAJVgDQutxGECt3iq8nuT1y3CnNGCpbh15sb7zHtH7tMUXM2ERkAUeDM9oGa7CXLWc4iwyy5XE5",
  "key24": "5772LysGXVuPjNrduyhnZSMnVBAHquHQvCgT254BMw7e9RpKR85jVMjsn6ZhFzTNGWt2rrouS1dJSmKBi4FG2ti",
  "key25": "93HxyXqDtd8sJpJTojZX4BegL2q3DLCxEeoQdkcQxeKbxQWoYzvuzjPjQA2CzfF7wBh28XRh8AC6L1eMPniX9av",
  "key26": "2CYfPPV8MMrbLPPNdkQCzWPRkb9X5T8qin2fAvrEbwBMo2CfWS2XKLAQG2GNCZG7Ade5oTJzhXcc96A5PEhxToo3",
  "key27": "4aTdmguRNSiTmHEhbQU1tZHiPKKM1ahqKZGRVtDAnUypQsf88D1zDA6fDozUubsSW8dqgyhzB6fbbgcWMWXC8GX5",
  "key28": "6QhaBDnVHd3xYX1ijQ61wVQ2K9qv8G1RzxEbNQHLAZgfThduUBfg2KNttoUniXFFBHD39NYSZBrGBbTE1sga1GR",
  "key29": "2dceSRS7MUr3bVFkB5YEXPM1Q5fCQtNH1idG4JKrmMkXWUH1eD2vit5dBhBsWyM2EqDi8UT1pA6bVk4kb1uXubhx",
  "key30": "5UUcpFRewPZ3YTwQbpzByWsKSx6KiDv6e15cbWfNvPgx41pW7WPhaeSkHam35KVt7ffyiYaEeJeAuXXsnKoFscCt",
  "key31": "GHa1m9V2tJfJa5vX59gNh1MkRgG1d67A7fcEu2gKv5eUPFBdw2A7PLPqDJnttYegGggEXNWf1NNm96iQzxPCKYP",
  "key32": "5PiBAPbb6A82XNHzVMLWBD7ujRofsKGdq6TPnGPmCJv1WfPnYHQNsmp9q8oPGwVj2pjkR8VuxySwEJNLiKpgpJ4E",
  "key33": "5mEYBRboqYmYRar891xrSFbCjB15aAWXsPTYyqFevWKxK5NbXD59qRJxt2m5G7t5erWNJvBr23yGRw23eNK2JZSD",
  "key34": "45kDWiT2HVqKNXfMNJFGW5er291qkpuAG8ZbCJ1hawyCGrEhJzddn6VBfJiWWu1D6YY1YKbGRcZATCksEE7RncoL",
  "key35": "5EoTZWiCNqCFDCbkYn74tMAj4ZVeSQbyQnxyRZeDa3SgJU53yTGv4MwbsdNhJ4pRLXUuUMtqo4dy74ZxzaosPgoe",
  "key36": "2cqWnxSfrFZxMdPy8LDE5FrbgjvkdhF2AgHT3uC7SmB9Jdzy6ccj38UTKMCGoqJrnWcwYjDr7GZcVsvfva5k3mVt",
  "key37": "34goF2SRsyHwCfBrRysQ42nnBqRX4WfitEcb6E2NFBtbXujYpjyps4x8Dfc1dt1v3ky1JWDrugF8G7T6emz243MY"
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
