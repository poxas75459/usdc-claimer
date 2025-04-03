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
    "4x3QFia4wATvb5eeULfY1ykjxerzGt8r2L7ngfHpdodtEFb6zagzXpicCqBNcUoDYKWHVQgSipDtWqJsyHDpf5XJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fq3QkH4yxqudCh3XJdRW2obzjcwB7kj43BZMAA6LYVoxBqu8u3zxDpCvayhQR3exEvizkjt4wWSCtj3u1aBBRyh",
  "key1": "4e3woESrJLJPu7qJUsD18bTh9LAaDgfcQD7nfLbYDciXPfMVjBYGCCGqwBwLozcdGZTFujvLjV4htopw5hk7vwif",
  "key2": "3ZExW7QMjaUHsXqFRREbXmHrEwZVfZwWRTYE8V2PJ7PftEx2qcSCMeqhJAtz28oBB8eL2dZwJdqA7xWTsY1cpeKU",
  "key3": "2TnP8w6d8a42YhuHgRsRcTdgPCGS7zappMNuTkibTyqgiw6qnTUtP3WYahbTkPMnEaJTWcMQ91nUWhAof7DDC7PW",
  "key4": "62vphPoya1wt7xFaxBL8vinM5EMNnrAMGcH9fzrRYQHdnagQRQSWXdrB5UBSBMf8cKdsxpfiVFrfAtbToFGEtgsg",
  "key5": "3Lj7zMaaAjnwDrwm2E5aH7sC2fnc57R9jwcBKEXfUEvJEes2Zsqn63H8inXszut4aA3cQe9LyjMdzjF5bN7f5AUo",
  "key6": "5KYSM5nE69rCGeTDGbQpTGbWaHjxuy8kpUvjJCXLrmT2gA6Mmpd6GdTCawwmZR85P2cEYNXmif6Gq1kFoLiR4VL9",
  "key7": "2zhkJoQDXferLQA5JbmfhSNVvBYW8nEXZCRfrorHGSkfmN1KWxDtJCiHqfQSD3dCXRgQ9FVabPLKHhEtA83i1ExB",
  "key8": "2z8yEvPZCEFSz8Dm8f7GVKks5Gd5Nt43HPYwSsDQYBtEegnPeeMdmgo2MzsyrCgDMbpCcMHHUHXS9kWHTkHsdMWK",
  "key9": "2jD6VuCmaboeapK4TJSzh6FcnV7u17A4aJuJkJ33i6kgckgZu4eTwMVNqP4wpZNsMUeAMFFtPUL2jb9XNVKXXuBr",
  "key10": "sNNjsBdM8USVVDCn8L3D1ZQ1oJEkRfsQM4PF3yScTSeRMmisMyPjLrGv3wbyx3uyxLwyjrkTRZXSzQRxTYkpuDx",
  "key11": "URG4JJnxGfiyuMyCMQTcKkWSqZiy6GFLVzGET3o58eRmrBzKdMxqMxZeu4MUmv2sN28wcWzceGqDwywcVDJfx6M",
  "key12": "3JC5FE21igUL1M8kqnnMpjpXQ8kFFS1X7sjKZwdaxEscYejb98Hc6wRQuUNxKS2Za5ben6rNQGMnb2nirJCCSjYm",
  "key13": "GoXeZL19wGJiGwkrQP9bkEfHnquiv3kgGujdz1KxeB3MyxdSgBXw7AdJoyfkAFkXGym9RxiCqFH8rbX1A4im1kq",
  "key14": "2caUw9SA9vLJ5u38S1Bi8ZVKXEh7xzrGU2Bx77Be5Kp2XsNrDkZw2jVyaFBgwrXHW8ooJxRqVkNn5U7egzqH1H2g",
  "key15": "3ZgJDRVyRWYNXiNiYfX6wvoArXCHS2wdxvFo2nF6HWCtJ1uAj2gYBTy5JR8AkDj789LAtSyENs7NrLmCkfdPW4sp",
  "key16": "2e7XQNrDthaxcwv6LddjcqToxH16z7TCdYpDL3vsBxs3hJq3Eg2gYtTsZdJ4RMDETNiHUEdjQZGo49BN8dt4FWmn",
  "key17": "2y6T96iuYbJxHjNf7r6J45APr7fLtHmMZyLDWcnTt659AnS2UPsXh1g2WU9zWjMcYdPBGUmtjXLznMcJ7z4m6Y18",
  "key18": "HcGNVHVFcxHqz3X14ARJUzeuLcLEgLotj6x1KiuH5HWMRTiW6DaFEsPKBL9kG21Gs7C2N9otGg3cWq64f7xUywc",
  "key19": "5rDXWmPwfFo6oX3pQCUmXGHjHEFcFevj82KCvastgGEt3VWnLjvErKDxFnA8btT8zNPk1GyT7DLn2gA4MMttiRWf",
  "key20": "5R9FTcDgEFvzvJcKqwFEZHRq9RcirNHhAo2QCVXnTn6dQauprwuWMhgJBTH8M17MKpUrHkoTo7YwZ3XZ3JAQ5f1h",
  "key21": "2ecd3eLZT94ZW2CwUGRj8j3Vq7V5Y9BMiSKvwBxdgTt3b2v2Ruk4oc4Xvgcu9sbhfre5fACCdeWtxnaSvY8VkLrx",
  "key22": "2nuwwZBmR7MS55jKMYxBqGwZUWtTNH6N6vfE3q1d7b1nnu1gtDKDVvXRdyfo57vaeB3UqJvTvojuSSoHUCS9wL4j",
  "key23": "DLdNcn9eHx9mF2XCz1bnzb3aWHWDjx7zuMhPwdHN6cMHJ3qyT7LrHfq4BmRQQeCqjBkGDdzWYgRFjAtxhhsYYv7",
  "key24": "5semLK23sykMsHewTgSzrH4F2TrqrRj81MdwBZWF2Gu3gKFkzbVyhRBXhevQpnjbjkP5T6oUaEMCBNy3wukvBGT5",
  "key25": "4cKJ4pKG7CJSyAWtMwm9MUgurRxLwKNo8KjkAa7V8EXuoDgPayggayHuh1QvuxjtQKjDWvaZv34QFGatRV4DpVq2",
  "key26": "k6iL5KYLZW7Y6uGeDb4SDD8qWepiE8PrsrMcDB1nzbsbpdiysqKqd7BaENRfgQhmp6RKnoaVRtDDUd5FxuXfSvB",
  "key27": "66xQHATDbpv94Kn1urLNPs7iHgLioNNPnHGdjMvp27iS6ssZJ48us7qtBWXM7PZJrbFZ8A2NYg9yeCDgRqaDwLFS",
  "key28": "hv3kgKyB3ty5uEVDkCNMev3jprzfwcC6YsTumGWNLNm2HpNTZGPfp9v2aSNk6pSqQ3FjAAqyzNYB7dJhXz7SyLq",
  "key29": "4J1SS1UKJPkoFLyx7YGopUsuFpSTEmBzt7EcSbwomeRnfzWQNyHjQNcsubyioPqUJk2f1vGaPpEKUiy5Kwh8sp7v",
  "key30": "vLdrzkFuozuhLsRmMypPJZRFoMVjZx4WJWnchUaT2EdFoJWz2LeCAtveVVh94c8qJA2b5zc7iP3W1Py1LP74QBd",
  "key31": "2hsZQs5LQ1dLLGZ57fPRemH8x27v72xGnBy9GoqgaKJHBM8xujoGQzNQKDAwDconttvKNACWAuLrdGMAip6Db7Qr",
  "key32": "UWZJPDjqTmHobbNFBxFeGWLzzQNWdbkFp9R8oxrUhXooWfPMmF4xX8xsLgzitgQavidknRHhC1Psxc1GsBJEc72",
  "key33": "2kaoD6d3jgD4Qb7QuYcF9qVhcaxWJgmJAX8bJtPXTP32toF3M3obvtYThQ9gJE4eSm4v6CKu4BG27f512wUkFT3P",
  "key34": "3erAQvbHHHiYuGctTRJKpBhLhyAswLwKkH7Firoy3L2KZR4Hngxrb6ex7XAVT6oB5s7PKWppZB9MiY32HvAN8BxT",
  "key35": "5wr8ae5QkXKQ2ye8zB7jH4Zgcc7KrWf16ReYsBPirt7CF4DwoaCXphWoNWvh2NZmkmXEQHJTzPdumzNazDTvmdxV"
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
