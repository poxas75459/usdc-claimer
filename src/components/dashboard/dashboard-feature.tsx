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
    "2eY1AuZ3J2dNe9pfuRieVKGNfCSxEkGv6SLxPwHuQ1AsvDoEwNC8ZExwq3pSJ5L6w1B5okEpEqBHxkC8n4pUE1Xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NToAc3Tj9jLTXWg3zwJgnnjp4FNSk9nLHJEQssg4QgTjVpfz7xUz65q6pChQTh4qocAbCmHNMzhYq7JsJ2BHKY6",
  "key1": "66ftK1jUJLjU3ZFMJqLCtAcoCFyZfVKqQMXxFbfwBuMFXPME4PCDhABwUULC6y7UwHdSw2gtux2tZ3Z6SEMMAuYG",
  "key2": "3Y2psbXXBaaZWhgCy3Y5F6Ydb3gmiJSBW1bUEBeeS9Y6mnWGEkXf9KVBqm8DdX9zeUFyDQzVJmLkKygDhFwYTayv",
  "key3": "2UWHxryHufxRWPjdiUirNnKqEqJtevWyEzcW3c2k9NucbPy3FQZdfQ1oD6ydUizzzvtsQMRB9JoMK41rqdxjjazi",
  "key4": "5fuLeGJ8DecbFwYqMQEyWAJZ1b6uQEhyuiLEYQ4Mq4W58eqQ5hWGsuRd7Lyp2h23oXt2NUxBT8DX3gzbVugePe5w",
  "key5": "3dtcAPYLNKAwHUrfMAkrJaYDmNgr79YQFrdTiUaYVcs2j3RmwYJavDrgDwdogfN8SyWxVRs1vgnbdaAnx9AqEqaw",
  "key6": "3qF2yDKeLwGtKTTp4cnPEFaHGtQU73YNEorm66JnDGmvp93DtKyAKNX4759g32NNBbzChPX3xD2nKUebxyz8uEuo",
  "key7": "5sg7Sb6tUH5Mkmo4LuZsyERwe3DEC6ozWZrzi5s57zjHS3LniWS53s9mstcRBTatmptjsohGkuWsHPCDnjm5Fr8Q",
  "key8": "4Uic8fa9AYXjCzQqTwDDccJvZ5U8vFMGZ3hAvLQJtt5rZkfpcCNf6JjHUoGhbq3tN5qUPh661QNQGQqemRMzQ4sK",
  "key9": "3nhVdM6NTKEXSk4DpEEDkk1V2tcJvcYY7wPfQFqdacNLJp8AAQ8vWb1rnTos7aQ1ixPEVBkJLCEZvzVTV7MRHGPe",
  "key10": "3cy8UUBVwdN6m9rpxvQEKxeWjw92j8MxiV8xGRgQYw1pMSt8EHM8xq5pke57acmsfZ5ji2UrUtauDcKp3ueAytWo",
  "key11": "4jKX51PeX7MKg4A7i99adrow3Ps62NJKNd6nZYGJZToEHxQjGdjnkpKsEe55Yf245vbrZtjA8rwvFeaUhPdwF9Us",
  "key12": "43tW7VyGSSufPcXvsoTUsQuAHgnnd5jNwVcU34RmSTevrFpHUks15P8mKyxLeLWjPBbuNJQ1rSrYa16Z7MRWD7YY",
  "key13": "3PHrFxY8kXFMrhKn8vVtoosEJkCrLESJ2KqWoM44XritUesDQb1hWsLNwcmUi7DL1R6fqxF2iBqWy8FzfuDYbtWB",
  "key14": "2Dkb9BLyvNi6cN9CJemqWZtM8WtSnPAJn9b3YuvsBuQz5UVepbX3Pom3fMVT4YdtXmvMjtbQBpawLHQNvLzv3xjG",
  "key15": "3VjLNQ4uDZMAQvGqvqz4A3idqzXQDh4EhftAfK9yWtiE8Ercdvz5L9Cz9j9a9dxgzdv26oHGLrLcUJqWFwixrXq8",
  "key16": "4AuoHbRfVdS1PimyhB54kwtkBV2LuK9uvBmZFLR4EhPsvje5RRsyoyCmg2RMfftpyW1N9ZQVMVWhdXp13eE3dufm",
  "key17": "4anmVLnz8R8BLWHJRaxnErv1umZ5Qpb7frt7TAqq31ymqm6EZKZTcDtVchASbpgbJRWmUD3HnnXTjhUP8pR7hgxF",
  "key18": "ULg6KEeFVas54tpmLWDYNYzp1JzY8NnwYapLBpqWjvbcdrCb9bezNhc1QQndaRKRz5JYmUyTkgKt7fkw9Lw8uoh",
  "key19": "27E2er759eqix5VdKtkATKp2cC52mTQgT6JZvFkUjqAqmBtP8C57SjHYWeMmySxMAeJai734nAqdebkiA126dAJ3",
  "key20": "4tG1jj2Bg8qz84ddrbJ3FgtsFKkDn4YrvR5Q9E7ny6EmCkr6Nqu8VvQdzsTnjJxUFt2hCvWjgXdVFxydQ6eNkkQL",
  "key21": "2e9CG79QmM9aFPSn2vARpB8fdzgj8aMTD28EJHcvCxzVANBiFbidCF8jjCoYNrRBzCdncxhEb7gWTqdCUoDdxgYQ",
  "key22": "Zm26dfdbRM29d2RtNZspHw7rUugr7r99VV9sLm1ipbBDmDfJECSGB774uba9ZVCJ8RMwp8m5HB8obNf7oenDKkC",
  "key23": "4RbfSHzwJpj7cLP1opM4rjJLQWw8Giyc5ogdt3LCTpnkB8BB7mKSdifmkiQu5jNLBk4YwfRMZStY5KePATGrgc7P",
  "key24": "4yooveWQGZd5cejKaEjbYbDaSU3Uidx2XZekft3ZWyBg3d264iTGLKShMhhZS8oZH9g4FH9GhFpaGZWBMt4BQYyH",
  "key25": "5v51TvG7ngjr1ryFPmrbikMmgCrtgRNDMSY35ixgxsVq2JXd7zgXBr4uJ3tjKSb9BBA5fAucP8tfNZ1DCM2nGokJ",
  "key26": "2EaRBP8NmoXovA3m2z15j3qKxXaZJaVU7J71MNAmLqHusvVngwpuDeYJWwPqeSonrQwQEUthhQzLEhaHtjrELwyw",
  "key27": "4mYgXxuxAwzV7deS4wjjKZ4EKjF14BjVfAFYXKNFJtw7bzEt69jUDV2Q7LUSaU7dxEUV3ucoQ82xkpr7rEm2wtFn",
  "key28": "cgTw7G7PiGWt579Wf9NpHwWprrJjkokMBWY9wA5deNkopKZnku3Wq8uv4FPux7eafeJxGRYg5Fzwsuby4ShTQeS",
  "key29": "5xzc8RYwN6zSSNszNi8Xr5knTH3acxrS6gb8dCTpoY3nXtc5E7NG2TVJZnHBysASeFhxCKAQLnMLPJEdMUsazj8L",
  "key30": "2jTHrwqerQkK3CEtxeJhXR9WQBB61HB9CmyWzbDqDAbjDqsaaoDkxmeBiZjpeWKCgbEZrD96wJU9i2JPCS2DZQST",
  "key31": "5d1Fgy9X7jeDM19BBRXATnHLdDhmX5aqMs7M5GMy8NmDLWcBTJvfaqfuUU65DBG4teghNAp7X1dNGo3Y7pioAyQD",
  "key32": "4PQXRoujXjkFQBWqSqBWUM7VYUz624r2suTN47KrkprFJpJ1rMxkzBgc3ypa6nsua4dac1D8ScqZigvfFSYmydAQ",
  "key33": "JbhYXoL17YEZxLyWZKDfEqjKHZ5g6BLfhj5mQaXkXsownC4wuw1tK2WFvicqZkPNnvHL5uVxsi24qWywZABu3Pt",
  "key34": "35uUHFfm7LF8ehAwmeW55dtSNH1M4Modxaa47jWTVQEFhGczsZGCwDtxZkeY3KZqNmvQueLA35Gsi4mhyFid1qgn",
  "key35": "2MxXdBuQVacreYF31HvKAQzisjNGdZQDb3NBT2yk5ydfCPrgYMJrKRXXcXNMv8UW2m9ps1L2eLATHGVUbWqQ6Jku",
  "key36": "KCUSj3gg9UDK19F25LCrUK3P9j2gDzg5phHEVx9mT3xhyPxbrj7yLV6qGy4bRrf6jRYGFUcEnXXf5jz159GxRY9",
  "key37": "4vEy6fXJ6FJwavqkQRgitUqtNxPUQjRd2dT54txpBZVUwwtjH5hnRGrxx2jy158Vtp9U5u8P5AQfUcCTwYF4q5dy",
  "key38": "3mfXakWhqvY7DAk9hKhtF4v3dNRVPTxC1PkeugnWqoKwo7iwPcPZeVAvGiuR7s3pTQS2ymvF489rpc728os7wGzV",
  "key39": "3JPX8bq4wyUeXxKFmFhU18T8MFvvhiN21gt7oRKb8Y6cVGsMoVSELAasaZRqb6G6ytcZdPCXt3vYBRxNfvny4uFm",
  "key40": "26Jo88bHY2dyUP7mxbsyu36NVov46nyV9GLVT8zV2ne6e6EdHkzXU5u3biDRDAM8ucR1iVH7pddm56Bhw8zsoU2n",
  "key41": "2aMXhwhSGvS952Unbq8TZwwrudSaGgMPrzmEnqHKaf1tHV2ejdZ79e1Q7VjipStj6RGPxk6mzpUPcRh8HsmDP7yt",
  "key42": "yEGP5nE8VD2sV1eU1G8n3xEydohVLLq5HWH83pxQ1atN9MQS1FtQXyYHr5v5PTDgJri47eWS6ZDew47m9ReYGLN",
  "key43": "5AiuKFpRUBZYUJR4cwJBpMC6kPTvD2gQSNC2QF8ddmNcTxtF2TRbD3cijRPBy4fwi1orccUAjjRbgXGpV8oi4UCS",
  "key44": "1FauXByuv6kV8HE6Nn2qbamQ7T3JFcopNE5DE2agCF2mBNy62ePsasSdQE1qfSMtfaTCuJMJ6Jte7svAw1kEhPy",
  "key45": "51GiVK7pLm8cdsQe9LEuBzK6UNPr7HME9uqpxKsQzKyJbEqEVNhoLwFtY1mx5SmRXFa11VV47Jm26XQZvbadFL1i",
  "key46": "57Jh9kYkxfiqQoWWEcofonXSD7dZbjaDDWLYU6gdBNqBZgFb6DkpTwLjPPmneQ6jVCYoGQrccTLArWxDbdFDcSqb",
  "key47": "2ivG2ZYp78zkg35JyEeYxMwAs16fHHErCMcUCeWRXeuxMogyxZufQDUXK69mr6wZ57DNnaYQUkrNkV6A6nsXasa1",
  "key48": "AMqDYMDtnMjMfPWSopPKy4DPuLqN3EwQFFnVsiN12Y8RiKEnFv8MNdzmhaQa5X9EozWzQex4cWFHBHSSj9C1kXD"
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
