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
    "2jbSuckKCCEcpXwayef88RMnihUVxU9Bsm1ViKWcPjjhbgUHwoCkunF8Wt9VCfLbaks5N6zFqVihrqoW2F1nJN7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39RkyLtgQHBGZa64fLFYKu9LjT7KBhymHyQAXWZ8be4JYm6Jh6tWxKvs8R3AMfqAM9F2FpA1MgFufQC4z7tyB2XT",
  "key1": "4JaUxou5U5BaYs4cZ9DfsGfxeaWLumv5d2vpRsoRmMmyaPV8JN8pyQxfWXaX8EKYk31aBA2oHn6rPkzvKJ4q3ULz",
  "key2": "4TZLmP6m5D5iRa5cyHCddwbWYkVpr9GqDNBP3jrb19tsnuyjuwVuggxHkUHnYJv7vn2tDAj9w8F28A5VvbPuaKdT",
  "key3": "2VQuNsLffsTdv92esWC3z2LrCsNfA5yAd8ttz5xY2zyEABn5XSeCWphJnqEQRRe5oY7aoWRuwKtQpFXoVVamZMGP",
  "key4": "431BQfFD79fx5e8Twfh3fVDDEKGMgUXpEhQMtyusPaCDPAqV9CtHYhBZ2JD98x489VXookEb6TPQkeq9Q6j5Lg9S",
  "key5": "ZNcjGtiUd5FbFeX4KyRVdMuQXSfyoMGhSbofVnNhwD2w9ektUY45vc9cAbBGsaSL3NRvMAfyfiotk354VuSoHhe",
  "key6": "4XPCAQdCpLBQ9H16EFS6LaoGLmKwMNQ4pZ1NVipsuppQe26ESsAwDszWfH9CmyWxuwyo52joGeGEwrAE8eeBYT5V",
  "key7": "4WtVTcHtBue2prTDGrWuCgmyDa2dQUwjtvSDVyn7KW5TZojkMh3L2cfRQ9ptcpqfamsGnduUQVXPo7FL7VsLmXvj",
  "key8": "5JG1scWHhG8t6KDpdvvRVJDh38QayUHUuUbcZwjTNHTqBGN2dHntc4wBStawPCnzNtPNb5BXjctcNzicrVvTVHhA",
  "key9": "NpGCzjhDM7taniRA6NZ2x2G5wtAh4AfT74kTs64GLcdmVegAQcVvE1jxe7SmcxmsmineHvc4L3PJ47iCXtwrwPh",
  "key10": "4Kfk5Lv9HjGL1gk81DyMh9P1utJUJqaLSNvqxVpk4G42Xeeie7XBExEW4ja1my4RktbKvFat8Nz9GhG43XC1pvRz",
  "key11": "4mEF44PFvm6UEXnA688nUrCCbWsQ8aeAxnVhePaCP59SYMaTYhFMbjcD1HVhN4bdwCFg5eyMfQWgnPHNkRytM91N",
  "key12": "3SpsU1hiS6r71JVwsNcFVbQ1unv2Xvvtxx6jfgVJ5tc1k7oNBx8gWJgcGTgGzeVR1Wis1PTt3tpXwcUkuCuABX8p",
  "key13": "J5VmTkTynnZKZ8VPS3GMqAzuJvJwkj1sErtXAhc76rSTVcPMHXL1W5G5KtnUtzhHknPabq3yjWGG9GX6pBcSo9F",
  "key14": "2jrF5L2a1SKNgdEjrhjYN2QTw8Jy3ZbFS47tUkjDunJ88d9DFgJzpWJzEVTDjVg6sze9JYZGfbr6owFSZBJUatjb",
  "key15": "4tqzQSw696YHneY5xqu7FPmPnTrnSBBygeYvDbSoxJe2wNo7tzaSQ8bfMYn1WaHkWqZtubQx9qCyvmTRy6in3WHJ",
  "key16": "5iiEJbzFWhezDvG4ndBEHypUacoygPpigY1xNYFcNc23L22QyidJyV7HMow2Q21w3zxYaU6GjzJdP3KafbeZgiPM",
  "key17": "28jcLcYzG5WjKkVeGEZnn4KwwTduqkG5jaN3ABECPDRBLkjL4GK495c29vBqp5Mdz5yTpp9ETvWkS3wJfXe4MqRJ",
  "key18": "5UEsusp3NKfFh3dXUJ1eWrSyPASjwhbjuHDpukNYHdYJ3vygR2n8obEHkusTKAKHsxevCb3yLtMPyiVd2L3ym86Y",
  "key19": "W9SKdMFZnUVjguin38MjwhsZZbxh8SjtnrsEZRS24XKCQ7a2aNSeygnYVjvqqEy7FvguCPAYAypwjUK85EcMV4f",
  "key20": "3a512rB8T1tektWGK32zhRXDLEkNB7twv2MJyv7XLLUtBk6wkdpawfcU1ECwbKTcWjgYE9JDRUpUqDc23rvmVAFB",
  "key21": "5HNPnyFKjj7M3h1ZEytcgEfaygJp4LeQiHB38nGo7g4w3WMAVeF1T5g7GvzsbXEfcD9KgGsBkDwaVs7qkSMTuCHR",
  "key22": "5K3ANcc1imoDwonmQ4qH285D7zT6c8kBaVZPaVVWd155wLsYBmGPE7ab4h6so9tBnZWwk8xFT7NRhYVeBDXNLfU8",
  "key23": "9y6FStvTjoRUfQaJtZgJ82QFa1KuXZs3PWmJuJzED9KHNkxW9KXBuLX2YwsoiyH5VWRUFvXqdJ8oeq2dUbtDEeG",
  "key24": "3afyWGyHbgxuJdVA27sznWZiJS2bhG1EnSGMsngKp6MsQFxT3JhGrCQv6zF8vULQikhjczCc7n3Dyf18xnxxjidr",
  "key25": "5kx8QufP21HAxeZubKTQx3B2uef5Pr38krG51deZdTjYCmJC4D7vZTW2ZASAhQxM3WsBCUQPj3PCdsDUz1RYEdSz",
  "key26": "5bpCKoX6t4Lkxdj2janm4NLkKLGtD1oFQ3ZHNpzEFpXyyGLriGfeeDCB6YmVYuPcKfeEq42oy8CdSNguqiVWhhD2",
  "key27": "7bsAZ2rqfeKAaWcbzR7WbArY9Ssrva4ecoVHGA6FL7E41KycDkLXkNC9K7Dd6miqSUXYCJWnhpY3x748scxhVm3",
  "key28": "2xRcxTMHbQrnXonRNFQhK6x1nFhPrZEWzSRm6fDkquRDYFpNq1SyiXGvYhgUbSugUtFxnsamVi3qeT9bLP32MA7b",
  "key29": "53iLijnw6TSAgoyob5bTEKCienbhayJGiW2vbmoUNXWFEPnoitBYm49hjxufFYbDAHeKuoxVsLdQmtHu5tUvAFd5",
  "key30": "x4dBtdD2REqbXqcLsVaYGx67UxAsHXbTnpuDPDLhoVVzzKmjfRHPXVswjJYk9A6y8NTfXizHBCiMwL7XNh5kc3G",
  "key31": "2xWx7mYJtpMMRLaK97ywR9mmWS9nnrwqXCKkfKQ1R3QvKZzz4n6Cp6XtVQAjnayUnQAwa95JRa612GXVpp1mvsuq",
  "key32": "5ZppKNKE1bXpLHZ9xFFGx4xsKXUyMpY6ityExGCjz1tLNS3fYeH2C84fokDTgwkAowMtbFzsa2aGLMAuyxcfLAKW",
  "key33": "Db3KBfaWb2XxyMvdzbbN3JsBwpVRFAekCdxzTzXNZD3cjCHdcFtPiMXCh9wWYMLeNQ2nHnfNwrmKhs9G85PAMkG",
  "key34": "DZL7XCxM9RJkpbf2zm6zdem8avDRcKkSpS6QgiroKQgLkdyD8NnYTgBoRngCJRBbf9ixpKD3rN6AH2y8GCoQXPR",
  "key35": "4axmHA7GM71f8ZH4TRGGYxmjNPSaqpd28DpNvNqo1WXdM8dWfR22wHw5qAxPCAWAAtRhNg4U8Ez92HKsDg39pxxg",
  "key36": "CSZeKoXLPdvrC2y9kW9n1NwT7jd1xmmeKeGQYTj9gnfBqwwRuNhh3wwemizECVjk7Sz4SSk6KdLFTVYe9gFoq6D",
  "key37": "3zPqTs3kFENaXXgNqVSbk4s314sDFxuoEhDhnRDL1ALpkUybLD77g7rWWtzmS9gw1yfpYbJXXUG8VKgf7PSQnkw6",
  "key38": "4KegtJ6V1wjsBNSJSPE8qxxNHJ6vR1c3khQjnjSHCf6ogdijL4GBxYNGE8jBi5N8DR36feNuQnh9SQS7mvwJgpbn",
  "key39": "4bRQbryHsP6KrdwbadPHrSZZYhBsTZDMmumytx9DWvEti2yRNiwbWjkWCYH6RSRoxhsSh7saJm6e8RA1BSY5cf9Y",
  "key40": "4DFSqBkgAkfCWcgg9B2jqQwnrQtFsUc4ButtyohRyAKaXtJwVL8Bqjzpd4kyQ1ECwMkPcNBhfnALpqK4rhJkY8Kz"
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
