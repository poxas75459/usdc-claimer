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
    "5hoXEPaFJax3E9TanDy3v1cXGid3PP798SN93UjEipvTHy2AXxdyeugzfBsFALNYWwRMFUnuVVhs1tXwdponJT6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c7YnYZrPCEhSdCtmvemt4hQAfDMUBJAoxGfD9eyrEkwkZvP9vPjgzj5ZsBMqNhuisPm9fsrcpRs8tesh6skqCAQ",
  "key1": "61sBNWHjweDwk86EXGVdrkwjwHusbxBPqsqUiX2dmQWco8JbhLKPDJ2dfP3YbPGJfP8LCHQgmGCfRmrnssgkPjpA",
  "key2": "29mXuzpd59sTgyxmNSxnKcJyuwjAsWEpw2QrkhjBQPmezr7CqohyUqa6Mm4tBjyqETYTAhY9WkUaUXFZnRnhu72V",
  "key3": "2Wk9BNccLfZyLfnptN9iKjcHkJKbTLGLGaVgxA2mu18bJGbJQBBRTF3DMp8vN9EMmyWy7KDQmW7yKbXkaTDXArrD",
  "key4": "4G92oiQyACF1yMihuAPivZYuadD2CbYP6R7QeixtaWFk4BBCuGV5S9tNBwXVkk72hZwXbVaCYvuPyKdgLpjNztPQ",
  "key5": "4cXzPxjzidKD4tSuUFsWM7YzamcGVo6mLauAL1e9YkuBRx3K1eFcJAmQCm6NA4PFi6FhxJNcDDLaV4aQWU4bdssy",
  "key6": "42vtqLAuWMUiGYUXZWjuHTeFytQKA9R2PFYko2JzR19CpDLG6qgLVLGea2AhV6E8BEGq5vrUZLhGYAxD8NeZbKsr",
  "key7": "5aBt3ZTfFbUxmvW26pbeAZ11af6vLuuM7Q3xFrM9SXHThAVx1MS2wbrEG4mPCJ3fjVfTj7PA3d5CTWNEKjbPbH1q",
  "key8": "3FqoBhUNum48n1q8aSKqiNwxrwr4CzvbLVxS6sRa6FDEUM7NGLTcEmCuJAAG3KwNinfKdMjvXioQYuuf82y5AzXi",
  "key9": "3ge17DP7xst7zxr5GfsjjxZbJLFDGRcC5WSc7Dm1H3b4sufz2D8qxZvKu1GqXEomuJcTy2Yy3wHgSkGbng6FEyBC",
  "key10": "4coXkwB7qCjPQf1yz3hsGgoCE4qeUSWEkVGm7CTEPRebjj7XzjNftVhsWgn8SQQwoHpgx2ZnwiKEFDdyvuUag5LV",
  "key11": "67EYn9tptdce4AJTQfWstSdvE5DqzkdPRBc7Jud2HPtjMt1voXWr2zUFGySJKpb1Qg8iTkfRu1x5Ff34T61PLWv5",
  "key12": "TdeUZc4vfXHbqWjiXHRdmeELxr35aWU1ixxxfFe5XxwfYhfPoHZeQEtcPUFFAJZ6uqKiWAuuzEE4kxhtFFg8hta",
  "key13": "2knHKEB2GgAs9DcTnSpnU7fU31dCphsQj548QJ9bF6uehM7tEcJogvniKwTsjFyafvHrWcdQwfSMgT8Y5ULWQLaK",
  "key14": "34dRfzdhEF48NFasVh7LJQbrf54MsGdTjmB57EJaucpcBrNShMyegfYVZdy5dSdWHEvwWkXtHYKXotC4j7JYu1WU",
  "key15": "mCbBj7J9iwXWERB1xgW6XUKsE63h4aoireB5JzCua8uP5jrmseyTMjRar4Kz1t6StB1qqLH9xm4Mb2SdTbKMMHS",
  "key16": "3a5BMB6v5JdkcGRWpDDmTBK9DYnDPoUhAMjtVMnxpuTvDzdBHNJTdUmpKqjiLcDohHQAF3XiDzWHHgFjCVtf5xAJ",
  "key17": "3WHTaMCeNTYZSiu34hEqUrnQFJJRcbXyx3QTEsJevq41evdSLCCUtwUP15jRAHSfVkxPicwuWNkzbfjyBSxxguo5",
  "key18": "waqSLVzFNMLARekDaWUVEEr2Wr9s9yJP7SMmHzWS2MB7H4Nm3JbHAZ89Re5ZTBtoT76LHVeeESfCarTDHyR2phH",
  "key19": "pSNJezrWPaK8iTMPaPntju54TTHDRY6VWKX1AEMb2KU56CCw6qgAdgCYYm726F5DYRjP7zRtM8MS6dkXoguZMB7",
  "key20": "22XyQzHfM8CUTk9FSCCK88Go5gNfCCUFtJuvDd4AusQ5xSPqdsm2GKf3mgiXeXeuz3xibu8XmL2Sn6hVcAA4bUpg",
  "key21": "3YkXXp3YXYKNA8FH2WU7vgqKLMMfBkKXf5NYYf3fSucN5gzkam1dXn5nkdbLJSPPg8F6FSLZmYUAau9wtGGkQSez",
  "key22": "HVyYsdHKvdKrLN3Vv2iTDcTTx2h15d8j1ciRYH1EGiLdccKMFQRSgEc3Z2jZh6BUHmrCqsLogJTnF753QdZPQDk",
  "key23": "GJCDz1SEnqjVgocLggBiPofj6PHyhpLrxWUiKbpVdB2eQ2GRzX9bCVhgru2bt6PzxNifCTUGVVxM1LUurSyPenE",
  "key24": "5Hsze8Ho4MmzBESwu76CMNdnoe6urmmtigBpDBdhsfKPUx9F3B6CBefGnd542WZx2ZUG9q8pW5tN6UrYZA66WuKM",
  "key25": "4eF1WQbsT5XGoB5rAnNGt9Gfg497sEtjHSA5QRTFk39UkXagD8KUJJEqHaPxw87UizZwvCvi9xpAj8tyG7WKxRL6",
  "key26": "4G9aHnSs4V4dQkm75fa4UBJGJKdmcaGK2dAQgr1irUyAZ2sUA2QjmpATX84Af1SwLusZGa57nhZvtWazkbJZ6Fx1",
  "key27": "4iXaSZ3NowLLLJAczqJS63zKAjjvuMqHK4CpHH7nnMMLJRGpX4r92qL4MYivas1KjBezfPRcxuMH2vNdr2RK58Rn",
  "key28": "475RDmHcTZzfzuumGNMyurhL3ULhCmqRpR5H8MNj4LL3byXKDFjEDmcLdDHaTDXTk6oQwXVXnAiXzdYEys5Y6saV",
  "key29": "5wxSDHBE47py5vQUC6kB3GbpVxXLKZNjRqR3kKyJuUQPSJZ1Ag84oVFNzGSLc9bMyyXxgPhMU3sFhfgoJMHCgq5L",
  "key30": "3hjedJHaPntQSLqVnN3diSaXwWbCy9hHgxZzUMf255TagatHtMiQYjwtXhUtCy2ZM3wNa7VFxDxqyjwsTAU2uL2q"
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
