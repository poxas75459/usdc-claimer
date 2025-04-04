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
    "5TJRjCtjwnkNBGVQ5awgwCm3wA8jVt5cHtt6ddFGM2dZEaLgNePqj2shzV5L19vm9xoMYbFp3VzvoukPzCkiZReL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FM1xM88UScUvyTfpp22XZqbqYnK3g1ChKHxSu3UjieGNCEUT8Avp8AY6eTyMNVUdVbCVdrjcBW5YVWnHqPFxmTh",
  "key1": "3wmFqrKAzcwGoicsKDjgEuMpdmdtjm7q3UPR4dADhLd66A666xLBdVG4bPdBmGzGyQyu9sYgwQZQx13w14sqQQkk",
  "key2": "4oRareiZ3mnqaxBkdPLrv7qFyCRVGRmxmELBQ2CeGhMpQogzgPDCSN5671rKRzz31SmwtA3cTfdMaZ6LTbzfvvPT",
  "key3": "5wKqKLTCcgbhZqDigJ6L2cUNAH4C1YtPjsq91Z2fZbWtWu69XLyQTJG6nBACji9QoiQeyA9wuKEVogTF7MLFmvHF",
  "key4": "3nHVUJF8fT96HQbHgkpPHPDjAX5RUQpNDGyffVuC3VrqXukuChoxkE1wFfvXiFmpDa462YbU82M2rdwHY5ePp9z2",
  "key5": "2VZDnJVTJx65aCrhtWWchhHuUPM2gVHG985ZcBJ4hQkRX3V4YPtLsEFizfqj3o7bLWDeVQsYLNRZSFmrJxrgWTv8",
  "key6": "3vHjVffJBjBppVdePHUcTcgrfztDRPiDWRxQQxNhiQ5Y3QeJGhFSJeuLeTuEbXMwnQCkVnkdR6K1MpxRcD5cgCpt",
  "key7": "23BmG56Gda5VmxB7M5w56WWbxRPrf3H55aSnq7zi7G6NYw1QB1bfjEva4tHmQA9utQrvBg94CV93Q5k79q2jNXRe",
  "key8": "2hf2264Ncns4P5ZnDTpcEo3ReihZzyYFSQsjXdTg7m6RyUoNCjRnQAKZvsXL4Hf2MZ8xW9M6iKKqU3XkQxKvNZWZ",
  "key9": "BUe9b6LoaUyY84ibjeeGmARituATa6pY8nAM9uBfKW28bEhwqoovfSCAuBDdFCybSUXWp5uo656qw5yDQPCq7kE",
  "key10": "4t9FrN6zbG5vG6bLras2GfP6bTh3MAv6JhbSdpgwXZvp6bvQmE1xuC7uNus1E1edmHNLRjmWcNcwAjKYjbTtcJyH",
  "key11": "hukUmWFfvj7PPZCYHcmQRCkpq8vvBzYNRxcVT1ovYp25DidD8HEEzuox4FUKJ6R7NSY2mH3JK2HRvwZ2wUq9FoJ",
  "key12": "3w49sTPWJUb24bVWrapBstobdx6VZ6ZQ482EG47BfctQEnRTtA149cyhQGQG8RCS1FNTP77JEZT6DJpvgfXTuF7V",
  "key13": "azdHDMRvDsMsXfZTTyLdTeUMDuaBX6ZnyDCmZURmM5PuPpg8pS6m7hR4v2mcW8JovyfrrGa74U4GNRCEh2XBXhQ",
  "key14": "26QsUnN5HHPLsfxVTe7ESGnRgYzcHmN1Vj4TDBN6q8bfsbpegZKAwwNZJUiGkssLtXvU1uPgdioZ1tuQYN5NkePJ",
  "key15": "4PuvuWZpsRKWmcTP7iz8NVTejaGxJgVgAdC9QMaPufFSN8Fgh4zYkzYc55eXq5Gorb3amnQ231examt272Wuff3J",
  "key16": "3rHFPit4urNWaDCkhdXeozXAqHiGxzFwu8o53r7UzMZiSvNTQGpCWipgJ6aU4Fm1hYxvxzjXvKTiaNm1bYjZHJoV",
  "key17": "1P6vsfLV5ugUzMApU49KmZdi5Haqc6pEpCZNq8rwqp8QM5KSYuf8bNPJJVUSnzVFxJ3tdf5LRJP77RiaofJBab2",
  "key18": "3WVzKJSQtnDrU1LRXtvbY3xCZ4hXemkJ8BJ2uBa2qXqs7CoMSarAuYR5e6v2n9ccg4K2qViNspN8K5s3Jr2NpPgP",
  "key19": "2dLcwxKBpXYJKSWrSAQwdLb1kSF3vCY2CgcdNC4VzSRG2k1vNNBFwCfpPcQd8tvq1yD2mTM7cn2HZv28BRBJYZTu",
  "key20": "4ZFvM4eYsuvPYbkDts9zULyJSoitQYmiYfxeXneMjNZPh1aCWkxhhf8w7G7b3o7LBwF3faYYaARQXFh1RQRot4jT",
  "key21": "5a5Mw37NbcBbGpX2aTZc7gxySSTvAzYJcqzn26ioNwXkpk9tGkzxdKsE5t45D2JjiqYS1bCc7bKkULRenAnWND34",
  "key22": "Azw97f755JYEJWowe88rRCoaQRjaQ9vSj6RzRd2Ya5M7GdfdfM8qQ1kdXrAL8qMBEhEfgiAbMTHxxBVMf4m4pRw",
  "key23": "4CeLT6NEuYztGmZYSZUsntamVQjoWjgPrAajLpakztCqsBnWchGvbGPCLybvr3FMoXzAugCiMqNViizbCdrwBXpE",
  "key24": "u5A1iv5nHDCWiGAixHzdAzxA6XhMNYN9GsNh8WriaWdhKCsiVhWNYZTrD9jpdJgLGy4sctjM4fL3wj1KAC43nxk",
  "key25": "4LUPJnh4dJvDppB4LQbesk8SZNhiPLBrpoSnE1mTv38scjnzdUz4gEZ5EzHKDLA5XqCJyNiHTUqsaNugq2twPq3Q",
  "key26": "5ZYZ4czdHwqCXa37UuSERN2pcnWxZtCsExmB2qmp4BUV9EeckHXmsp74qMbrFNhvnTeTtdmG182Gk8n8FSE5mG72",
  "key27": "5vEynzgeFGL7k92sof4itq4EmdBFckQJS4cQ3ggxAyaweNMiFZYLnRKq65bFtRdfRQHA66VAQteWLn61KQt9oEFo",
  "key28": "2ZRKpGRDKqn3gDh9hHpYzrrQycyC6pmQt9ju1nP8LoMUmmBaGxthC4UaNHadGCve67CfCsqFkvZvsebC53LD4FJE",
  "key29": "uFykhBXbVzmAzuJuEX3AXomxzYAFZCxBuVaezTHVFsaEiXEFgRuB94vFWoSLKWQxHWst9xBSJbRfKWMp7nMk6nc",
  "key30": "5U67uAHoznwhD9evoLzFJyf81hHnpV3RmAREy4ZF2hvBBKMAqpRSSPVrfp255B4ktXXMHXvSv94w5F4xKxC48HZx",
  "key31": "3Udacbrf5Rk3wVWeuoRGXFd1GtTHoU29M3gzNM5iwPqpJK6NE4Hdia7StTJ5Na7TVqjhbESGUezyah5FabxXzGoa",
  "key32": "3VLtekZUMNw8AJLwU5pA2kF5wNN3jTk7wmj4UYnEcqhcdoJPeFzWKkzoTZkvL5rjDaNTd6ik7194Pd4SMp5wBmms",
  "key33": "fKQoqnFWF78gNJnt71DKGtDtYdkRXSMsviNkLy4TvZ4mVhSEMWsD1SyUFZXPF61ep53MNzj297QBvsURrDhtzCK"
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
