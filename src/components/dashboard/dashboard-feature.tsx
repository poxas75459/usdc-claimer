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
    "35LMQLmeYXcfSNefVqBkkfcpYkFvcXtUEc3tATfkCEXQjo2t1GdyvECynq8k5Tsjyf4piBvcJqBA9vXzusZk5dne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D5x1wHh7mywWYkkkzVTLpHtFtczYBtEj2RHWcAFvBDCRL7HZPFQUAdCSYxScnXiv4FJ3Kctyew2Gs9j44TxGPfa",
  "key1": "5gjUmKt75b3Q3VWqApxjfvV9XzxNx8WEikLy2aTQkruZhZBGoigLbsnUXhqTkDTVEHRYCi7fURbrwnkau8NDXwtN",
  "key2": "29Yzsg3pG8Jp2uEg89Ln4wrFViU7aDSnF2gMkQn3jp8ujqV1PRshG9DrirvEF8mNYGjnwzwyabXLZhSfkZYD4BiE",
  "key3": "w4tAftBLEo6Am9qKVkGrH2kLsFkNEJVWbWFYvNCD6ybZZonC5u9NU29bHXrEN8YCD4cBaWSnn1vRMJBXBhbUsXL",
  "key4": "5xSDq1myFkzUgWwUH1rNucwwernSnksiYZKBC91aCfeMzWgFP5LnowYo9ybVNeUgZS4LiZviXQyCJfU9CHazt4G",
  "key5": "51sQzD3fEqocPZjcvmeRzKN5gRNrPRvRKbAtuPqBnYhQBQBFMU4KvMDniT1AFvyCjXRJ58rDxjV59WhbXAa7VyhM",
  "key6": "45J3sBbyUjysmFXyKG6X4sfZPuJyWjiCjb6ZTCcXsdCUZGwCZwvnBmKdk8J42ao11xguD1gZ2upfrvyrbjhcemZg",
  "key7": "4sxZ58NRsW72v66YUrrvC1sDPvH82mipe3ot1nqhMtpuakCiXXNAV3DeHoSgyRqsQJzXxNnrcZDCz4pWbQH3rYuY",
  "key8": "2cXLho7CVD6agbozASD6ffKcXhShRkwZBae2eVaX98EdfaowNYwRs4cJh1McTTvHhqzhi6q8tfkQMpy9S6g7FpvU",
  "key9": "4yvhT7e6WjkytZKb3WamLgv1dowDFBS7y8J5xYPiKuisp62FLerSd4cuwKRGQ4T4F4tuuX4dKxUvJ5ybkcFtYunV",
  "key10": "5MVqVY9WB2vmKN7iErqa8Auo5K8FZAKCNV6JwYo8594x1yT5ZwodLg7G5rSayiWF3e4u7MtQgLrx4RnXZu2XkfJ7",
  "key11": "3Pb7iQ2k1ikj2TBviYAZMz9iEu512kiAjgs9J5W5ijVafM8YWycWY9yprVbAkRV9o2u94R5iVXGvkdnXFqNsRQqX",
  "key12": "AT4W4ngssbhdKAM8xUw7t5yqsYDu4VPydAs9mkeRn6jf3ESYzsq7YGkMMjayMEHUdWq1bM3mwmD46irQ2dbVb1m",
  "key13": "57Mri5jQxzqqsCMdHDtfPwqUsf5dohzZifWq61LAHyK2JAUL1Kad7TrvJKY48fbQtDPHvmx2S1ejvDZuvPZBxHeU",
  "key14": "5fN2FvGbXSG9KVXMf9cgNvxdSuaXGVZM9Ef4PqDCDr3ygJo3bvWuaN3ADG5YihJDYvPZe66yXPWtfmxv5pLHY7tH",
  "key15": "5MZhphqEiiNg4f9J1bUvX9gxKKkuAeAbvLL6XUTUVLKnJPZh8LXD1czRVQYy2hoK5igiz8CyPmB4BRfa9g5krfVT",
  "key16": "3GbnukV6Te77pzJwvk1j3RW5KxC8iFc3Xz1Wx6MVLNov8hASDWJBV2WhsAHzS3ajvz1K6PXkmBsvJXp8HGckY6Gd",
  "key17": "5afrWiyveeFEKcaZNZ7h1MKR49WugQgVxYoQqibDpkJJ3wBmmgSX6a7w4fzLVkXxCQmUajLZZiVY7TWvLYELBhQu",
  "key18": "yXaH8he2unicYaKTFnDFsiT7vGaPvtmuzaptGLc7GgrSMfYZgJeQWBAHoG647vX5Cj9bHzA1FmynTWzDK4penJb",
  "key19": "3HT74hX3HDZ2T7Xm9hAZ99BH3KdkbdrBuznc3SZzfYDAA5sCdCYxdzRphCi84qhznSbzRThcbzPYfYVbkfHrWUcU",
  "key20": "3xiYJ7EUKu632nuJiMncxNErPVb2WMPX5Kc2dD4jFuefKDGPtNXTSgu8Bdx4J7xRU1poKqijRKe6EmvMhQZ1WxW5",
  "key21": "cgw5axGMdMWtuMkNCVW8GCq6XMsAtaBy28kA4Qo3P19JCdQekzmfG5eKwDFncydZtbU6RSovPBWnxgi4TgpX1qe",
  "key22": "3UA5VawMjVT5KCiGKdZmerS6fXwxgaCMYyBwsSqycr73Tpth3SxSRqzbZYM762jBs3tP1nEDb1oiTqSRs6G8Wk5d",
  "key23": "5JGM1vBS4F5gKgzVQ6PSu4vzSN31cqs2H92tc7jroJoY6Ec984dy2VZ6tdjQ4XgoH67myqNno19r4ryq3aavP91Z",
  "key24": "4r7JNFjpZUfVZZMBnqSxJwo7ksuPX1w22evYGffw6DMj5iPqHArYeMiLioU7egrLCxWHVeswJ6FCUsYtubxHP3Bq",
  "key25": "39fMe4vMjoCdz7tUw9UZeThbc7zPD6Cw4RXSCbJdFt2TN6PrMjDq33FcVyr5KSMEPFeztU8jyoZbz9mZrpwbqvNr",
  "key26": "4waCo4RA2ko6rroiLU85NTPpFMScCMqr2YRdEnM8Yd2n1WBrWYNnZfdSFyFKkMMQ3KnkAJqvGDWx2ZuyVhhkNxgA",
  "key27": "M4BkZ6Yqwhfktu3LzLWJJFkMAbtXBCwrfx79PoRkxL8XRoWAz8Lrz4nV82z5U4V9S5z2b1cpCZy2AafBKoD8UmG",
  "key28": "S8RwMvficfZTs5LeYxrSgS2jkVMMzEbyXF3tGeTchsomSREFeJ4Uy5dAbuXAsD2nncRnPfrMHocHRwg2nDUiGch",
  "key29": "zn2jbuVtQhuk9R13pbBMkh2aRqvYUukYCWE3iVB6sJwcGYWd8KsWtYHPHio2f8DMTvrsyK6wFAegqAGZC81tiWv",
  "key30": "CNGQYuGJ93Zojuu92WH7hfhwcujK9YQz1mgJWyBU1c7qhTm6F7FUCR54e4oscvftNoZbjNaBvHUrvsZ93U2VAj6",
  "key31": "5ijA5pN84Eq5omgrAG2TDJUenHyX6YokxcDfNvPPLVYyWuP6un6ocJsX2t75wmW2SGVKPCUGVsnrCmcZVrTkA5Cd",
  "key32": "5zvvEHUsgfP4NPQZXPPVbNTKjFD6DPXPUZ4q3MfsQ3iKxbCWJf2DdQoLyNXgS9EWYEFnpxKH7XGnDFrTv13HY8cL",
  "key33": "7SW4sshoxaw7f5cpQQgXEWbjbQCxpVVZNzd5Lsrs2B2A6shtAtWTbxJzdTXcyS6HKoubSksXXvnzWbcSKzzKJ4Y",
  "key34": "3WcAE1ptpV1iq6wuguXS3PPpZYgNiTy1RFCCZCMRh9vaWmd8ztH87ZPbwVZ7FgcxEx3HcUAMPYrPQYm45A88W7nj",
  "key35": "3v3ncR6kGEo2KprRVtVAy7GksQkpYGRiy2NneHkMDZYGuDL1Af3k78ggyH5uaXM8r82R7fJAF8mdREKjSZrvLsf"
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
