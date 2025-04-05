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
    "CbPkchPJ2AopGFKKiAG6JkQPrAGijotvyVMZqkGK7bpTmEKbriT5kkmerfTk3cQWvjEiLe2SE1UjQ9nhDGrBpEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KnxpXT6gF1r4dLDEvX5wyQ6hmQti5K1XSkCNxRDv9qX5mriiAWfXQTszx9uC2rTEuUwvtWWjpeHvc3HbeiidCvt",
  "key1": "4WLHeBJuSzsfnk2SwPa7tRB5QeH5UFHbNhMLrp7c7HcNkvbZ4Yvhv2mu9REhmfNV1dPySVymzb8Ma1HDUacGAYce",
  "key2": "28FMdPxNSo4UEccCB5xGZGiB7xfnJY6uNUKTXSK2AzHApYy4R5jhecSUD3e63TqeyuiWKamK7po3pAzArp4o2yiM",
  "key3": "5569qAEDMfbi2sSvEgMDZakLS4F5TcN6E1GsKr1eg1TQCh77UGkJd9ojUU2gNLYoMra9zy8oZPSX39d4TFg1sM7e",
  "key4": "4YAKCyQSzEoUpKSiv1gsAW97T8ci1AGtAFLD2y5z2C4jEdkNba9bPrLAS1zWZgWBDU3msg4z8SGijnVMaLDJRt89",
  "key5": "3D27emvR3owTfSYhjCybT7y43VN7CHP1Mr6QnVKi2uYdyGohQMjeCq5UYK963qmtazwqZWoPiaGbvEekuabdUtu2",
  "key6": "33ykgZAN8v8dRkgFJvzKeV12tobEE1MW4gDNPgsKdRxBCH8vs9ikz6xVGCbkzi7ShW6UR1z232KEhc4V26FnQvzP",
  "key7": "3RUoJn5bQhdjvdjkKoVMynnm7NqyeZ6XK4dPYePMBjiqHGobKYmXRaRWLYoFZ9Azj4saJRSHfjJ1vCkZnCL3nEUH",
  "key8": "58LvRUYcFJ6RvnrPGefLqeAnNUumLzNVMzhjb9A1BDkGDVrvi2F9R7XVarCbhtts7fMfSyN5wpF9unt8yYqGGzmS",
  "key9": "3ebWmrxqUXH3FG6H3Ct1xNSoC6Yg43LbTauS1jysYoGQfevWLp5DKzSvwN8stJWXMWsuScdqrzdnGKGVh58ySsuZ",
  "key10": "Xfrpv2GzKZk888LzMYZP6WBmHgrBzYUNA6n3zYgrmSiJJgMxUc9jXtDK5YiD7mVXvMj31WdtpFCnkyXCgDpu9wH",
  "key11": "2Vjx1mbzZnhw8zjf5bTbGqh2GT3YM6jj64LGUi9sQXyV5aSZb8yc7RNbT6SW94VnYtEH7QUEMabZeZQmUHU43ent",
  "key12": "5Z89ooC7RFr3mDiN8MaHvXZLByS3Hquyb63cwj6kDFnAwnXWkyGtAYQAs7mcAKPzHirgyoLwdbdBaCCk1VaBQJLZ",
  "key13": "4taZEhhBYRLXanscEtZfnP8GZiiQY9ForBPL86rGrh6T2752FjqDXgzuGrEgiRZeZ1RYmSQMpLRsZgw8Vicrzfc6",
  "key14": "1nB9WTumsytCb2MD1JFq2JmjqhmB7FzZfH7J2BhJuBcedFMLoapbEbQzakcjrF3Zts2xMApcmppCzmZpgjPf7mK",
  "key15": "37RJreaTmhW1cDkafiqxt755mcRqbkauZRGiuvJ8KkkHfiJVzSmjscKccaJB9wZ5hraCEu76uCqDKkHWeqaPusAq",
  "key16": "3eHbgYEZr7eYTx6yzLSz8GeXEJHj6SAGzaFAMQPpjcchiSJ2YB85LcWrvsoDUm5xpUyY4fSYK8TXki3g1vxy554S",
  "key17": "4ysurmRdvC4KuXDjvbcFVASYbbzobfxxdhzGudXVo31ccjFTMS6gDAW2jzpiJLnAFn6M1xBambLxGb4CAueFz2vn",
  "key18": "3fqkVYLjvNsbTyjd42chAWpC6gJj3sEUHxPiuLwiT5aVt8KMTxhjYfSNe6sa7YgHNdj3cVuhrez4M9iYi6AaRX76",
  "key19": "4R9MUaFNoT3U5UtLMyu3hnr8ZS494MabGq8eVr3ZfEo2KbbetggbsQcUgSMTuo1hdX5rV4rjD6UPR4Mr68azzfny",
  "key20": "19d6ngjnBVV23LP9aCPySNHbTRSa1eEMMgEwAbU73AJmBRQRSuTpCQqZsVLCZsWQpAjd4QssJcYDgiMftj5swSi",
  "key21": "3JqfJBaGBxnEVnj4Ni8hAfsDS28qoz9SRgbvwHjm56FRr8HbhTTMVMG7ZyoPvfD6dt4XPKyhH6ftZrfi48aajy81",
  "key22": "uEysBZgdJfGhbs61dtnFGSpHjv1YuvHdVTqiiUGbqsr8yLWyetA8s2mPFZUz8FFHhSENJYzoezpPUn458aq3VPG",
  "key23": "2gjSsg7NCEnrjJF5NpVFqs2HMVk7mMN2DohB9JxMbBtiZSyRjvAgVo5i2jBLwaUNarcQbd17DVeKR3RGP48Pfc2h",
  "key24": "3kX5wBJuCJnN3HKMPuEbdeK9F5bQhk1XCNo4ZZdoUHcXLxxXE2DUpCdQm3NeeqSSdVNUHuKrACCLBgZcGeFNsuEa",
  "key25": "FDRwqQh7f1LLfkh5JUGvUVswnWEu9n9pmAZV1Q8ZrMAmBKoWzTMXN1vEf7mSG4VEPJ7qpJbJSwLZuRdsr9vZ4sn",
  "key26": "LN6qMZLs8Yev86XFJTiGyaFohkFgB2Sy9MEPcjU5K6xLSH7MLGMArxmzTsqC1XNKChNBGABnW5wJhc8T6aJUwcB",
  "key27": "67YctwdX5Wn7HqpPriK7FNzGD8DKSqFQtFbhrFUFP5bFT4gQRG9S2fwNFKNNfw13bk71srxwkM67rmwS9RFrNnEQ",
  "key28": "2nR8ENVxW8QDLn5T2MKSnZXKLW4pNfeGxNbkMJfeUsyt4b9Rjq7xz1TAH9YfZPNUF5fYfJvkfaZKybyNGWNH181f",
  "key29": "jRE5a4YF61fPhd6jtheJuahwCjHGPeamxwoGwGbx5YGkJPXKFkvPBmL9kbtnKqLuz9R3YCaL6Tx5fu7SFqtt5mp",
  "key30": "4mgAp19BqaJJ4ciZ5npnYZqmTJinX2mzyEfFaJ2Rf8xj2WyftDQDwAnQmKgD2gerPtnMsi7z6g5G4TpivRVRbxHh",
  "key31": "51eyJVkaT19sKBpCcQjnMEyRdDDRLMRxDcNVqvZBMyEnm85WrX2q66acJp1hGhLDYwLX1GcVNrWMQ3ZrytiFnGG5",
  "key32": "44cTEawYyWJySW9EZKnw2yjB9oH83x1JVExXpVEEE5kQV6Y85Pu44UQnFEXsjeX2MR1RBMinWVqGkW3424kgEwxV",
  "key33": "4fCe1CuqtNzixj86jrQvLdayxBbjB71Fm5rHFtjtnHmbK4yd2uMw9PWgqiJoA8zi5oVY2zV7tXiRDZjUzDnyb5es",
  "key34": "5sotjF1CAetSjrNriUSXNGrthp3UUbBgVbmfnZRdP1QNPbCVckFiURWJqvoaAiGA8RXYv6y64orzQyZneepstrVP",
  "key35": "3DJdZQX9ZSE7humZEdNHutk1VrVSp1Xrco7CM1KAmTWxAcpUmFKch2tUZzBsGHCTKCGtrw4sNKCWrRCpjfuqvpjs",
  "key36": "4YMEpEeaFJ1dJQtJ6SWLf4sbbvYm4MH8GTU94J84rkfQ6tkpCeCC9va8V5agrDXXyYyLJVAvAdGjUeR9VbRiCUCs",
  "key37": "43avdqcE6dkkXn4RnBBUMjhzgVBXnHJVD3PjgJrDo8Bj8dye5xET9paTFu2L3gEKsDnqm6JgTN91mMTC7mfJ61wN",
  "key38": "5j5Ep5u2CvLCU3eeha3bDWZekTjf97DhPsmEk5F73uJLhLGL9Fsad8LBHTYf92sTPNAgQDfiE4pPyxfRX3UWBvs8",
  "key39": "5x75QwMdXzETYpFgoofzTenyZjwpnh27EFZ7JVya5GaTHm4XtJLr576f9F4V67EP8kcpmahpjGjpnsgtCt82SKQC",
  "key40": "5wcs9TfZzpesmG3XixhJcw8AW2W8622xqEg5BUq1rSaeB4g9Pzsvu2U2RDxQeaWSNmvm44ytVe3eq2HTniJdtVs9",
  "key41": "35xwZJwEeLaHudFz377t77qaNnojR7YcYj5AphMUPN27SdyqkpWTki3BcUYtZgFryTRwJ5VdbnxKLdVsX6VVCtkQ",
  "key42": "4G2BZCp55bmkXb1jN9txkN6aL1ZLsrEU2soHmLjGyCWVdFXMh356RD4XZCgW7vq3tCnaMbRQgM7jknRoxDLLKx18",
  "key43": "Y2DSwEYfKYi9GgQncqVFyERQgcM4KsLoc5TVwY5bQa12xLftCo8AtuN7gRuGzA1ocfcw9pGe5Q7wwYrCDX1e2sQ",
  "key44": "5Jkc3CgKa2d3cZhFRMbCXySa7cTPPArMrxjFeMGzxh1nX9Wrc9QJrT9LbD1hFWcDGZZ5Psb539nw6av89DKNN7TP",
  "key45": "4VvNpu8PwTfgupa8k12befF5iTwBSKryZeQSQvvVNhmwG95ioYFeaizjzZvhsy3hfLvsND6JNxP1RamMfiHhbneL"
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
