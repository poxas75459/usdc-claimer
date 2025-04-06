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
    "4YtW48VrG7eAgJboMKQnWrNMNFU9Smw7ts1nVCa2HjyWZ3vMmnCTfy7GS48HbuZCnYs86mpKZcGvHr8he3z2e8xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dYsQbUb6Hvm7jV5NMdUuRMn12vWkZ4fHrhc66EPzpvrKhRtqcRtmWZAGhBvtomVi1h9Lcfn3kme5nZWkxJtJ7q1",
  "key1": "248TVpsL8ZcZvQRmszAYbjHibZYM7uCX4PdraV5vU6kEsHdAfVfMBELLFfSYcWyYgZvpVbSKvgoR3JZ6M7Z7T4dv",
  "key2": "2xYvY6CHih1iBTL1RoG8Z3r3sdrX8hpPVunsgvJxugoLHEb4MWJb22EKHmWRc23aePV5rBArWNp9P37T9rQig1FV",
  "key3": "2QyJdRxreo3vKWS7pyBeMphaGYYsfqiGChxdd9CuhtqJBnRBvwXWfUdiL2t8FeH2DRRYiLfBMTZwZ18ZS5TVgjQJ",
  "key4": "5HcdwcfrxeDGXgiTEjr3sEPiC5pgTmwUwtVwrAdJXGidpHqyZKhtmSDTCkHHNfioUkoqPKdb4oNeQxTdTmCxUJit",
  "key5": "4WrTjRXskV5uqtJDQn3eZHEZ9nYnCeYK9AQQkhkpUG4hKub7nNDmNU6zqWG6sSMQppbwZAuqHy4vkSyskhFpqDSf",
  "key6": "4YVVrFAyfMZpL8BMLgE8Le1sihtJynoiRFsbDa1Y1u4e5Hm2428GmC9aGnYp19ueu4FDTeGSRoqifH2aGvhXyCsD",
  "key7": "4DW6eEGYBs9mfdQCdVTnTs4CkAmPbYDVKUJVfTUC9gRN1i1k25dMbNr3Am6s73TFAuj3tG6Bw6azdwkSLqv5LBGo",
  "key8": "6WocebWgJkVtei6wRq6ekqZEYEiTRP2ePXSm6AAnAdzcfVdqybxTGXZNYUuE3gk1aUsPdY2eUn1j29FXSE5KFG1",
  "key9": "3fGm6Bj4Y9gJn97XMTzKM2oaV2ZXbzEBwSFepahRDirDhiYEFgqdxeoh1msupiPMxrH2BsVJ2ZtwtAeGMfvWtn6E",
  "key10": "5xMGwCG9BN2WAqJjhiHV8N6wu2yjRy7oLsdigaoX2cZNxQWChRYo1R7KAYzech9RvCDk4GYukV1i55JoBk58WCyf",
  "key11": "5pi1mmGXvdK6hD9Eu9Q8io8HAM7auCzkSLTN4yDvnjwyybQczEbQvAgZBMRKSYCJQqSCpzeTC6Q6zQG4bcgpB3c",
  "key12": "t2QQ7RzEYjNxvLxPPXAEfvX97Crmjc9ShnPuhNwTzjuQWhuyVVwjgqcHs2CNXKajfXWX8VtsVw88MfBPSan1BXH",
  "key13": "3pN77GvxM5JBpa51AjpeEzGnTwaLMt6NbvLDnFKEeMHPoUztBMmwCXu1ExYfk7DN71FDBwQNVWDvTUQ5bqmmT7gH",
  "key14": "5PBK3pzeAvCi6bTCXdLdAMFWoNncRKNPw3j4NdTQzfMz4kGCYgsRJMNcMaHk2vyRhsCWbKi7fHiJTpUe4fzB839Z",
  "key15": "4wukmscPaNNBxvLVcP9amsGKnFmtLd1vuEsz9xrqPYDQmKPUsT3qFUMECKUZvv278u1LJzKGYLoqHPctE3HmpqoM",
  "key16": "3z5rUT46TLGVdmVtuVCQ6PySGN2Q72vv8DjyKmDjvqeiiCtohxJuyLrcQyPE3a6wBU42ZUiVAa7JrEe5w9PJsn6N",
  "key17": "3tHarz5URencXSmNiYLgbxLhPRE9R6P1BvmkfSLQN6wnqnGnZNTzk3DSn2DAzRcMFMAfEu3Xh8zbSYy7hfPeLo1t",
  "key18": "3YFAQWpHxDb3GkGEXfQoATatFr9Ay6Z2AsWD8CaM4iCsjvbfbSjSJzUicrnpuJijPs2WEwsZkr9vr8WGDQiSG2ka",
  "key19": "3Y1hZWRSphYuFD1gWPcNaC823D94WDiA4nUpy7CpDxK1xRvmjWe4fxCLLTjeYrKtEgE7zYxEpGdt4JT3qegyMJVM",
  "key20": "fMmdrKiM4bUfbKigXphgVjygbmmfL7VK27Ndz12Eb8bVuff6PpSCf7uEsi7NTWAP2FdkEjP5kWhW9cZeh3KtMd1",
  "key21": "3kWvAa9symFeCRJXU2ErUYPXdRNXmXxH3x4wvT4KkCBEHjfngzGs5EfqE57S4pcci19zuniu2qcMMxZwWpFCrBVR",
  "key22": "3WRXEb1mf5HN6GgGny64JFkuDk3pp1Wa1hz1esuNe6mPFYK4mEF1rt2jQst7We4yq2PaNfaCrCJFsSASBsHZ4avF",
  "key23": "8sf5TXCpS3XRrEUhJ7EBz36NLv4njWWVcTz5Y2AdE2Mnb4CHxk4tkpheiTsu3xnsHS7LC9fLaGjNoxAQgtmgmLn",
  "key24": "2kJ4sDpJKnLbdqZUzBid8eHQywUPatFjYowCCaj3ZNo1oZmFuJz4SCP9o1LMVzMSBg18ajaRZSJ6rb7G9sWCVjrE",
  "key25": "4waRB2bT6zNVwZbkPGnoFvdgAMbPXxpjYxAdrzrca1qnEUCZMamZ8vhDx9J4L73goSHSzNk1Z91DiMDsBZQxZuxd",
  "key26": "2Y114U7tyMLud8fwvSm3EK6jeJvAxGAb9UWAKqksZVi5nzVFPjPczCARpmMG9jbmg2raBWRSbcuqYGfP53PjtiYd",
  "key27": "2wCbn7zht9WF4B71Ga75z7PHyDudqPh77eSXV3MPdonW67J3518UmyGWTtdZNRUsc6XWLkz1vu7GhGh9V7cdGGYS",
  "key28": "4FCvk3doyMJ5QCuUZmbdADzBTMaUiBV2xPWfywsNBDAJHjXqXj1ciTXNcdkzuNm2pnWxNAg3dqMpaSPrVCKjHTPC",
  "key29": "5HJRocVaiBvCYH3o1Z2ay4QXRUK5MRLmjVPWZmLMJhqbeK635sTzHwAnhnzmtYnw8YbT1nGRvqz1Dhwz5MguDMPm",
  "key30": "3yzzgviufQDiHoziVvi1KypzA95htXgMGnK9hqMxV1C1oBjie1PGDJ6196cZHGVy5z4CnQJReDPJTW6KUa96v2Et",
  "key31": "2pkXpWnZHT3gyuBvPfF5KbdDvjXNda68cC6SAB6Aex9L3xgxMQMMMnW7DJ6RWhTUbiBYJc3ZpcQxQ9zA73SKW1Wk",
  "key32": "dMLKytzgv3BYhdXa9kRYU73jxoYZwkPoQRTWPnPUBovcbiin2Ux4CyCsyKtMd1GTGUD2a3t6B59fuRSa4Kfr7ks",
  "key33": "4EmDv3dN6Sx9dS3d416UhrQkHNYYqEh5zndUzaXMVv1X2op5sjJTRKKqHoHwZ2A1c1jWgCg29h4ixcuS4PKyMGPh",
  "key34": "3trs58nGKGx7cF2x4myXvzgZMRJZnudwKtGBf5uAQxE6tLt8RpNe8Jpm6JXZ3KwhvGvXxpaqHnFSdbJcbVrrtSn4",
  "key35": "xDeBevfj6b4ptzw4n3gdPAyhEF4vVtqhKV2edsBeDQXp1v1JSFn3Xw3Fah7oqgwXGWXnnSMrfeRqC9CDqa9QRiK"
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
