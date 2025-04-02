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
    "3NZu5KdhckXDndWEnShxHEjGAcDFkbbukqpUFRrrS3HpYKyMoFCp34jjxPbVqPqJV5VwNZsgvG3zPSeVocvL2rm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QXK96TWyTtHi8C29r2L8gaUJwhUmryFbrPJwfAkhV7dTz31Wn6G3SbtsEpvBKfDqYLrFhLkZ2is2whJKWhsyF9K",
  "key1": "67iaSRxa3pXYzsfEvSKs8F8W51BdVrLWTyLewRHUs72iSEUzgGDcZMyv5wjbQz8zbKShpfGJh2Y6pgAfypHi6Kip",
  "key2": "X9AXyYdWUG9sXLDKyQnPa1VyWvGiJBny9erMSCHRgXAAVa4GkWMuRtXTjRxiBLYVzVa4e6c3tASpX1wdSXi4R2w",
  "key3": "31xz6ptWrxoado1knzRFpFxaD7R1sjk1CzsZaq4TBV52iTsdi4jzC79VpAfuAWS3qR63pDxMJrS7xJKfn5csR8JW",
  "key4": "43WM3fKvFssLeVT516baaMmd5tuZybCT73xkDDYWZKJXkVrg7Ez7HRj57m2NfsSMeXyYtiKvxkvG9QxTYNrUk5FU",
  "key5": "5dzpvsev5skCpjZ76nCA8RcpziNR2zbJnMcwsQJ4c9S3gPaLeSKbEhF7YQhDRxbBBKKux2wibnLpfBupjJnuGpZi",
  "key6": "Ur6Yg3FyJAAwBtqCCj7BFbLkje4JfKDb4hbMa4z5vFaE1TezeUfwvoDBxBT2Pbd9hXG2jbsskckDv5L9PLeapuh",
  "key7": "4bMifvq8T1KogDFHz2LfedmN1dzsSba62WPUerGKXGCnVSeM9cX6ecHyL8AVNMqa1gagpvFZSXuTxNRyUxYzT9Tc",
  "key8": "66HcMWfZUmf7iAFrpsA3aBnJKnjFd2EJB3QvmR1X9jj3LY6rZwDV51gdsqhLvED296HBz2G5bjqMrnVwj73HMukS",
  "key9": "59ujkKAvgW6CCKDSCmbkr6zoSX8GVrp9aYkzDP3sDPFwMwUXc4n84qSSLKFbC3hTzvL393NCCrSN7i558dquPVxr",
  "key10": "5oQ6fHCnDVUoBSNpU3Ec7gSWfrU4cHVQ7iXgnVPKggJiYTHedYEJtDcHYqt5eDV3gXNtFTYhTNF1EM2JWP7ckLQY",
  "key11": "4WQa2QYNuwfBZLGYh7LaJtg8a4jUcpBVvQjUjY3KTG8D5BQ5scthqS6W6nNDBppp8NntTyFZGZB9EHzUCqDhY53B",
  "key12": "5zWNsPmW5TqwEKK22w4RdGBqX9EkwPu4uXHoCFQw2nakNjw1oxYG783jJsRoe3bpiyCFbdN1aSzZYRoKXyx4DSUY",
  "key13": "nKabNNyzrRn8Z5KZJA9Ww14MC1MpQS9yqraMfrDxmy2qjLvTz3keAtdQPGs337JNE1wfNXpFfTrTfi6gqsGr3sP",
  "key14": "1B7GwU4MMCERGoTvrLeLrc6zXZ9CGLz6YYJCFgHWDBb2pRYoxFQECqiPt7ZbV5bstw716jmDxh3Ho7NAhUsE8Q9",
  "key15": "4yB1QCA77V9JVs1qKqCtEKAkjz2v6fhzfuhHS4PAzfqQYiM3FrcPhyfPFyrGNX9ope6ERSfQ2AoqftvrxoFemVkd",
  "key16": "4z8mcYj68PoRMnsTACJtEBfMgHfhzBYGhp6768dGonU1gpFGs8ZFtj4h8UADqqtig9VzvzAtazYJw3AKK1tsUUzY",
  "key17": "37pC93FXndphJ2HYY3VnTfaBzxU1GmuzEjgqDfJ6etiBzhkkZHf4u9uHModHUp5DhuY9EsPGeDfQiXvyHH4WgoKJ",
  "key18": "5SwMntd5J87PhM4mGmBRCxGLqz4R6w9qJgLc4zJj8PXGHqUnepsXw6BL77X3KcUAS9PeHWyf1mH8yq1s8aUhb23J",
  "key19": "432Yco5nsaATKKG9cALDERUdQnxSnVCJfuAgvBnuhmcpcjtpCs43vE27vYW79zC8i1zxCEVNSVbGZEtn4vZU2aCP",
  "key20": "Af3ZdV8U691U2dGVMHBAAo4f8Js1zDPwpD767gMjgm6ckKxVrUPHdTDY1Wk8ao4AsDdm9dYqivKjyE4sm1KhiR7",
  "key21": "5hnpWtGdoyUCwChFGBXhwPZfGfJivoqETdkJEY6CQz7mgdyoJYD8XienwSTyaA6QiLxU3R5q8DSV4mz1xENmsPVH",
  "key22": "3DQzzr9Ub7pSHHm7kAiG27nVGp5vgWRdjhGdHgs6zdPodRsX4sZNaUmSnAkCgfsmqJ87R7rRwutDTM7k6fvzcKGF",
  "key23": "64AmU4orEXTzuUiRczoEkVGtiVLZ6JaY7cJbicpvFgigkEuvReH8rmzsct9JBEFp8JPDBz441hYjvmrGWJpbB66g",
  "key24": "3dhTDRdoNf6Ezw7H2dRkgJEb2yDMozB2h6UYsZw6KxeKxAMg8LQrPdyqqY9S7S4RxDn3CvAFo2NtBqGEGYQTaXc4",
  "key25": "2NVXUNtAtBgknFhLNEJTesSJczXdC2HRSen1mWr2Euj8iwB6bckNd1s3xLowpPAWWzTak2kCzc2QxoSFaaba5SoV",
  "key26": "f3jPKdqGoEzxrGUsENwpwQe4oSt3kA4h3oPmuwTHL6BFMwoJwkizKuyQFZ4qgy8CYh8cGzNegeppbq5PYNPhEhC",
  "key27": "2J3RZPe9evELNsn5bjNpHZyVLZc7bJCVKisaWCPHytdK4BQxhfDCYRbtVki6ackooedcjEDFT2CDcPbXQ8ATThpx",
  "key28": "3yY8WU3SSsdawvNFof1Q9zkm9y5Brefucmc5XqS86rsV7bgzZfnJzSL2wN41WtHsdimfXm1YweAHhZRQdDoFjSfs",
  "key29": "65sKNL2h6GURxk1MZSL85kKhJCdHofdHWzoFo6vHRsq4KWiPhHLkmaRRJdBANmiMQqq1Jo4UAqdSuuS37h1LyqDt",
  "key30": "2w7RsZdV9BdE9RbeL83UtrRG5VNXr8WxHi8Ku5xK3osNtQZM721xJGzSq8FqT7SfCLouXS9Dd4TqQmrJQwtyYjLM",
  "key31": "5FQv5YjDML1UNCeLrv7F4TwaPFNoHrmG6xVHYk2oBMP3hBmcbFqhDirf5juFf1SFzMavvoYxQC7vJ3eRNTPN5Yce",
  "key32": "5mYUKB2vidWajGofiKa8NKyihnx2ZUSEpch2aH5ut5xivgcP3rbWaNJFND12dF1gr2J9tNbtt6RTdjgtrU6ennKJ",
  "key33": "5qg117PCqZ9ZfiRmeXd1tjGt11CNZdW1SdKVkRuC7wBaWFoc7gHxKCx22CDkQ2QHMrKyaT95Du4nMJkZsZdLrjbB",
  "key34": "3wemaGNMXwGoUs41TVyzZurg62Bu3JotaQA3SbckmEtupYH5oXJpPzmyfgLu3RHjntkPC1YNdVUuvG8apz56oe4v",
  "key35": "a4rm6eDBLWs47FTquo4ysgjgXamr1MhX5jQErN3KGogbQLpbRhT56WeA3QMTdBmyo7PeUhYVZfbq8FvLnvMZh2E"
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
