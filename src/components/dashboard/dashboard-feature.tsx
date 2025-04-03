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
    "3w8UcENSox4NQiehtosvHMmpcvtiuFb6a6UVziPFfx8YhpREBJTkSHKTtEYPFF2pV9n3nKTYmLynbzP6qq1kUXaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BiEUk5aCcs8iuTFLnk9UrDTuCPcnEok8wBHKgZJMtMa26RWLcDiNxAagDqXLwcmGBgorm2i3VxTfmCQWRdsnnMU",
  "key1": "5GaGvmeqsXJ1M5HtBtZ2bSWd2QG3dT7uedH6k4M2nEebcqC7dbY8BsC9rTgwKH7Z8RNDfVYaLhC1cJyZKCUW93Cp",
  "key2": "5hxVrrHJyGwsJkiN3wLrzMwfkc8hhatn9Hs2ihqFAuY45j2S5q5AvWyj7PjiTnT7L18hy8fAeGxZyvb7a3M6BssT",
  "key3": "2eYKuj3zxWMNUazWHuoqYdu5hUzYuTLWdCdGK2JaPH8mUU4D8S2hby6t28q5wS1g1ABZygTfkShFxaZtTuPbnu6i",
  "key4": "28tgSZfF441K6xzD1zsN15PqmrojCqS2Rm1c5HDbgYomZxEwst6qMKanfMe2KBj6B75q5sj964661v7tuPgJ9juJ",
  "key5": "wSZWf4HtZYZGJFRgAqAsdWsfuRPKqhuYRxJk9VaTaM4nn9gfE24TYr16U2WjSaDSGTGdSTRCTc9TTowTeZNwNtW",
  "key6": "nwhbXasSgXtSrjmmpSvCWsa7FJ2UUFJhvdKui19C9AdPmVcxVVGQx3PfnEPCvSFyb3ereK4gbjYrSspX4iKzYPK",
  "key7": "3jMm6zVQSnAg9A3WQmFHDvMuB12QfVDzRwYUGAnAbFE11ix3xm16gaavybXAU3Pc9CGnzFrDpPppPRYisBaE8Ft3",
  "key8": "4jgWYNdgf8Skzjyi61152V99QXN3jRKwYTZCPE6bvRavA1ZN8XaL9KPQZWCBxhDUcrXGo6D7kxibh5eJKHDuSyE4",
  "key9": "3YbxAaP8v44YV1CHW138TsjPcNRRF4qtZ1HuQ6hBNYHb5ziZfLY6gWQ8QEjjxk2o3dq59a39qD2Asc6etddff6Wz",
  "key10": "2SPhXvNBwXY731tfghxTrFQARrVZ4GoMFXSPUMwLumJXbFgFCPobVBkfz21djQdoHmDRnXJG3RQKDvcdUEcWprSQ",
  "key11": "2Hob9NA4mi2wxfgyEo2xoJYBzZmYXkG9zVM2VCmbgY3NGY6X2aU5W3jL7Y6qs7pmTAtEaM54573PyWJsy9Zt7dcY",
  "key12": "c97XeTx6xv8KcnW2KVtgQ8nK6ADNV1s8KrKcdY3xQqcPN1sqgyW6MHsr4cXyhJ6XbeuA9GQDDdS6rTYTGMxH92b",
  "key13": "3WU93GCiCxVYCmtKA2GErF9mqjbZZctjfrVf67zDmz4serh6ZqZPZLvQAQN1vT8dcBhJ59x7D23iHHiKFkvUu3P",
  "key14": "63Tu8UeYZ8CNKWjJRjDR14APxYQt4bFNPwqS9EPJkaTUayP2qp18P3KzqDAC6euUi5Ggx6QxqNcxehj1ZQGbpvKU",
  "key15": "2ahWtWGzF3bbrTp7TpQSbfdu8pvby5YEVF7Ji4EsqmPqBYdjyXAhzwx1igV7k43HEethnQqbnLwKEqAWK3vimR52",
  "key16": "3Qenyevq3Syfya65YuWH36tHeZofycN95aAWW1dED7UECFwgjXEzo9Lab5zL11oRowT1V3hHK36vmuXZA5Qn2tMJ",
  "key17": "FuSejQC14Fx92ddmmTcsq4RNLc4k1tWHJ9FArgRMe5YN95oduvcumBfSaGBCVyJjbeigtcebtFXNbVNDR96kLv6",
  "key18": "3daXXqfHt65bQ296jZXg7KqoR4mGxuDYyC9rKhMnL5JXNU4KBEvWQNjPBqJxuzuKCKTw4nLMdx54KWvDwNMMqhXo",
  "key19": "2E7xY8SsDSQPBbU8WYb4s5ySXWF6VcmUDq46EFSN98Fr2nJwCKPKxKKgCgVPY2UeuAtG9x6ouGDQZvHEzRba8xBZ",
  "key20": "3pBM1Y2EhiH26Mr5D5tsCXGTzjR5fqrdHKnwwrWoeHDLBt6f3YHtW2mHcf3QRSw8KyjNQumbXuARnGBRojdpd5di",
  "key21": "ZWB11iproVYnowVQZag9WmZhr41GvyPFJp7zSoh9J4wy3itDzK5VYafYiEcdj85hFA3dsoeM7YL1zuFH4XrdA9R",
  "key22": "4W8GdVYxn8tB7BhhHVeMUA7uvADmMETiNcqCGUbqKe7ocaEpw7x58y9c975daA867LyP1ZGHEZXF6UE5QZNd65Z",
  "key23": "y76xZ66Bffb3oss3Nzi6YPF8U192uynXZsy3wt2ZHoBXwkn3JsGpj7Cj7T5j61mysxUSE8kubLEhgJcS1sS6KaM",
  "key24": "EiNUP4fSiZRXCbZXT4SQ4z6XFgfa4Z8FTqrYbDpLvqkLYHxop4bhkYTUtAf9XVoLfR5iFiaCtQEEmo3RNumMEiQ",
  "key25": "4SWpsKmBr2PDGtf9hnfLJGYQHi25c7QauzxqarFTvpPGtZ1dY3gJVMAPembk3JEN8YV6fJCzNTWRegBGq4dapazv",
  "key26": "5paBsqMyAszhXZb3tYvZLdLk7kgD1Sa3KXJu3YjHc5vygTumKiCydNw7pavZqNPiG5NG84MKtLALUwCL41YZuS5k",
  "key27": "4d8M2NuKsborrLND7kerZMWqxbSKqqaH5V7cuALDMESeeKvKjmy7xQwPWnMeJLjyWWsxT3WsvK4bPuUBJDFGJfJG",
  "key28": "2UCzgirn8h8oFzYeRBYPURiWM8HHYS4aFJh7521BwBf9s3jdDpgFZ3QxsQqZTHkQ3Z3oGcxwaqgni5kkLXVPHWyz",
  "key29": "2TUqt3Qj6sdH3e8oWLwuPmTcAzaXAFwmGyy9Zuozz9tnJC9i3boS4RVjRBJTRTeBAWxLnUPDkgF6vWfrDqMf57YE",
  "key30": "5w5uiuGxhVjeQMb6iunsUsFRq2gDkB9ZPWrxr76BuFfhUG6H5LNoQw2xP6JQ2RBAgYVzDg6eSGXMQsfLnMA6Gu3C",
  "key31": "4jywwZuEsLcSiM4WdAHoTMv4gDVUMb2fJcsHP6go7JoaoYmdMWYGtdH11BbA9iME8rDZZA3K5r4xVneUiKHVYiy8",
  "key32": "5gAxihvS2kZVGiWSCEFQ2bBseKxu3Qu8TXeL4D8NpUXVayo4X2fgLfXQSaA5UxYasZ2kEMJuaNx3zqguMcoP1Jq2",
  "key33": "4RHsHe3Ht6KyDi5UAv3nuCG5fPtcuWwhpqHBrzGBVt5USGhJMp759qAEDwRd2u32p27GezMb8joNprPEDV6epvfy",
  "key34": "5dXPu1T2zrPxNkLgYkNkccrvpXRQYa3TdyNW99U8i6p6nwhEHpM2cv6ZYcbHzpfnUdWdRp9YVrT5w2cgn7JLPkRU"
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
