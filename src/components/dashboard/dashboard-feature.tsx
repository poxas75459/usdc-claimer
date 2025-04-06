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
    "4hAsnwGHcKWaWV3rvirBdT4UYowiYGGf6BSELzzji4HnQWtaL1WqDHiTUzXoSmdEpfL5K2iA4YUzs9Wt7Y3Pmwva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hyJGZmybZWtnMmMHZCBCrgr8km4zSbQxKRxwkfuBhwL1TtYTAAQWysdcyPvusU6U9wz41a5sHjpfmngbLs7yHJ7",
  "key1": "4zaWp6vW35YSc9tzk8QQbrLgfrA87cgSJzkTaCHBkWDJQBr1e3W8CvQyj3P9jWQVY1tYn3Wt8cf1kRYBd6A4NYkV",
  "key2": "3zb15Qyg82tPZtLam7oXTtxPeaNrTsyVFuiZ2aaZqnUxMvpryuvCHUMWZDgVA8VFKEF1vckawhE7NvuKRjc1mxqT",
  "key3": "2Nq6E3ybNjAxrNNUgD8a6jLgzKvaBkBVmhD4E1CJw49woAqR15WqikBFiaak7knVfCKNjisjCQtJgfNxd6WKgDPr",
  "key4": "4fsf7q3Fs63WK1wPVGQCNHd1Du3U8K773Z3T4Tgk6eewaktPd5TCsGFexCFqbgNXH9iko3tf2H5TxmKGiQXmzcQp",
  "key5": "wX9f2kPt7VEwKLqnrbtqRuJY2CKRRyxkA6pHmjtBS8tQvgegfqF5Fr745ojvMH18GwqsYWtPLvvy2rZjjywDVW7",
  "key6": "2VUqvMHGNJyGiigtFhy8PQoQAp1MuoGr96grM4UEnu4WJ8HPTJBbuXAGeFd3RCnE529xvwq7h2x2Z9Ct1xHjMX1z",
  "key7": "d4NdTqd5hp9u46RVoVpTYzjYXS5RxcBv1zNp32NK9n1EHK7pPRxEyJyXd5YtG9L8e4mZ9hLncovq5cXfGQ2jwN9",
  "key8": "BYD9iAyrnh6TfNo8HwmxsTUX4a2V1QBiTBvu44x2h7xDTZJKzgz66kiR5c4BSmYWP2frSStEMsyvCVH3oeVEprW",
  "key9": "4R17wnXLCFyAPpxiQwbxBGowxR9rKHXdmLqB9cQcwTrFgcZbFMiM2nwmMK8zN1FQq6oHGuobdAeQLsUxjxxfPQF3",
  "key10": "ZajjrN9zJbfPKzPwQ9Kce5FEMxyLZLxQivXDKjPpi3V3t44HmyaEDjuCMcktHVhkuf4dEaqxwUi8ZCSAh1fYpuh",
  "key11": "634MtCDa6dS3xRDWVMuNq3TpgTDUB4WTxWTBETxHSmGSBDjFFCTzmoPWN3PypHEcA5LDw5Pe3wjWuqvSNT5twgvD",
  "key12": "5BfSw1uQA6dbYV2QfWDbejGFiuN8fzCjkSRWBFvQavVjdXTQZKmaQT6uABcS4287JTxNAvZ2TeVi4pmJmbsre6RX",
  "key13": "44pfs6T3GNJH4wivmhLypP2nSTsxeti26jaXnXptKRFpeCsFqMA2LWFGkWWvPNna1jHr5862B9w5gNzNophhKguV",
  "key14": "R8tcThMkE5JZAngkdaYfBZ1eMwGAgw94YGJUCaNdMCmvTGzSbQVpshV9iuNLEKJ7R78CYJp7gabE53izJYPr6WT",
  "key15": "5gQR2g7Ks8nUDsrcjAFZhKdgfsgAKcna6QTJq9gMoJV9MQnWnZt53S2fWq1zip1KSgofAGq6cLXE2FT2CBYSJJbH",
  "key16": "22xJia9T4GdzNeFGEVajotmR4AMgpmpqVJpRRq8ibpVENY2Cuaf4yMW8NRdysrbuGqgqd8eurAHzuDturcshsr1C",
  "key17": "kSFEmGvj9HonpcQEP2c5djwUFnUkKatz56uJWUEs7DgiekBzzVb1CRY11WgEjULYCx5jHoo5ff2EjEafBYSK765",
  "key18": "7DkKRT4Du2sGiUy8RZLPxy13Lku34Ys8qaPyL9PW3ezDKCCUKuGAV13D8YhfJxZLX77udvc61BGL8GewmNH8VpJ",
  "key19": "2rBQRWcq24q4ugKZFmwNSjtsSn5g9CSjVqqHoiCWZC82rPLPe6RqXkZYJ3KyEaHXFRxxTicHks9NKNugSz1h6E5Q",
  "key20": "95NYqJQLRHofAqenSNWMFw6GpwxCH6S83KSrStex2RVzY8RFK6QBGqpmGazhxA6AoFWNtB2HjZR4va3mmkcesms",
  "key21": "5V1KqRLp64dKGd5GAnnHcuGe5CCkJMkbqGDXr1yWgVmRXabfc8rdoEDWpq5Cb24qMDV4sn41Qw1xHvrPY2EprhmU",
  "key22": "4b55XTCHQJsWqwdnuqTe6zBroxiE1qnFzdxRrh5xXGMZiVspfCiL84zZQct3kCZ64Gj3QX7C7MFEB6MKkNzT2V1T",
  "key23": "FV8YnQ75as7wzxbYsrBgdkgBqxfZUJRuBFpMp2hmv3NzvVRsEzT3TED7ajLiUydGsHngrvLqWeVg78UXyyxsPX3",
  "key24": "5QPPRy7kkcKP4JTtB6yourCvV1HGKHYe7QAKkBLsQLLDjyVGiFz55Uh6haVQdVy3Z5gr2JsW5aBJ8FzoqShTUiLE",
  "key25": "2hTDagE8vXwhxyq382rHQFjSQxkcUGTDULfRdpFw5dNhyD7VnK5QrQX1YG1kAEHki4Tmx33XoKLLvHkWtays6eiz"
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
