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
    "27v6FTGYQrBcbrDRegzgoXCcBpvC8kMqzphkXqWUipYLQswSV84gph2oc1uX6U1uEv4ygscFsV7tHLYt4FjmojW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N23hejoQG6BjN4WoGu6gEsgGVysA6Kjt9bZp48e7McQNy1v88Q75o1MdZEGH2RPT8cKXdowKHQac2YTWbC6gpgL",
  "key1": "5sevSHWtiwPPTXapq14Ldm3Noy4J5cKEP1xi9DpEzCvRq2b9cVYvJEjc5obQYixzhVXjX2oDR53Z8eQsRa2HEDwu",
  "key2": "3vNpKAiuz2CT6tVj3vZh7zE3hc8B8guVmG6mCPR217sXrLMnELk5peUaSwLMNyv1deTcdHBXAJF1SbM6xX4JkuZN",
  "key3": "21k2WeVUvHkDaHzJyyCdVZm7YfhPSHQkJMUdhdBdoMWB7Q5XkUbzv8xZXy3jP3yxgecHAcw5QFCX1JNXp3ARziVh",
  "key4": "3k6UHrBciHVZ8yCTJK5n1CfvFmdANUHpqtJwCf82y6A1comLiycJdKrDj3JwHJ5i1xkQyof7rutrrQT391XehDCC",
  "key5": "3UVdhQVpJp6HB4eVaXVUvYqQGiFgC9QVKiqtp3CCjW5f1FNWeRUWxrHnmZ1tujoa6sPMp2BQFdwd3gusJ6WEcToM",
  "key6": "5cM2cEUNuCNunUCebH89QvmPFQxQ4ZhwDV2Bf9VmzzeZt7zZ3zvSdWBuJM6xeaDCBL8tQbPQ5ZsPbwJwEt2j9FPV",
  "key7": "3GuGTADSjUMBi7Wn2CZhcEVUDCrFZ4oHZKZVvz7V1BdSbZNJc83G2rb9nHG74xT4Q4JbiEG1bqQta8msDKTcwdxq",
  "key8": "4t7pMUrq7m3GyfZCHAHUWR2mrdsSGNKn44bog5LEzsBmxgTaaFzjyKQhdnNKy9faTa8UZ6kQLbJaLyYjC1NC7jQg",
  "key9": "3kV2pbp95c4eAxFQyia97EHfv6dsLexCTAYpS37Tj389DPcMMPnEbuZknQVvp79QphArJBh8NJ63mpNiJu764Ryc",
  "key10": "2wKnjkq8xBUVLrbNpG4N1agHRtHEviZvbUYbEHb5bAt39CRLJqePPikyNUEQjMENR1W6rJXdYGHVd7ZRWzibpgGd",
  "key11": "2GwNckeaPPhyUWssNRo5pcQcztmHG6xfmfWbJTmPAhqDx5DNZWc89bYEoaMapTJKTPdSNze9ADS8nDqA67PkVLEP",
  "key12": "4D6auUDNmW7EKtiP2xSdGzW6jrCCDEnjzwP79GLHriQMsvPFwKBpMhTq34u77HxcbEBE3HHgtT3P9LdD5NoEwGvS",
  "key13": "66dCgrbqKQMhbK2ryNz5VBgvcQavBkwh31PqJcpMdsNvN9u7wWCKEDEFDkcaQmTkJQTgmjtAPSu3FiteruXCBw84",
  "key14": "2S2qQEJx3GQwRc2ft4VrhdUGEwKXTdz3NstEXYRkKTs1Drt7J9eX9EiLbEonfQm9izA5p2JBksSuexrdyoocgC5r",
  "key15": "5tBGQGRK9VV5YW3RExQrMksRTwLaYC68Z5LbzrMeNkcjG4GohRHQgGtf3RB64T82Cie3ATEbwGmT23ks9mxBpCLR",
  "key16": "2Q4tWhN3z3h758wKb2Hyooia7fEHE1m89yxhWbJfTGDmoFhMCJbw5Chmop5pgUUuT1RXDDsvsreVLCzLGo6Cesy",
  "key17": "J8q5AUjqcUwHAsHy7irENeLt2Y1VKFabw65KeMWS8oEKJngjV8LHuWQ3QomfxY8dHSh8WxBvoyUm7DLZ4wsUxhT",
  "key18": "61z6t2jHGdkCuroqhuHJdcX6Hv5jTQfcQFPVWYk3whjn781X789NDrJuEPxSGEiGaDxYLdj2dtRHb6281JYu9pZF",
  "key19": "3uceqKAtP5K42wHcT7JLJunjKGXhZskCsCtu48PKH6gTVFgf8VLCi3MmvYcW4ybEejP7RmskseCJFD3rJCop2xnq",
  "key20": "5YkXBuw3GYShCmFidNj5ab7RbDQFLd7mqdgq6ZDL9wicFvo7RwrUD23nWkmhh2KScesN6CVBdjz8GZGx94moU5hH",
  "key21": "3pon6V6yBLPqFeDboBWR6DPQ2LaWVSPEnmyDWGg2wQJEZ1jiyPnC5pxBvE4Dm58CNzowiRbES6CEWYqR6zWzjf5s",
  "key22": "2ifVnZe8XjRavqxyGTQpvbBUZyDEXLv2cwCTDpR4qZSow1upio7q8MFFG46MAf1s3VDC9XnMRNAgsxoY7gNxMHCF",
  "key23": "46bSE3p4rik2xpAbJH82zRbvd6A2dePPPWiqmEGpsJaU2ytGWJQBVUHLXmpGWjfLZx1ChCBfKc8USeHddUdiVZbx",
  "key24": "48eQVSfkAfFvZMNjsTc9GbjV5NLRX3WAYB7V11DVzmnPm9fh7A6gnK4CmKU8xCaxLP4d1MPpQv9WcbUHcvG4L2uz",
  "key25": "4pMBuRHqti4EVo53T2J4bQMQ6izSRjPwFFzf7xZiqeSuPjs2PFGRSuY7Fs5H9T12mphu7HLJeg9Zm5zhjdt8o4wg",
  "key26": "p7qp9Ggm1ZoeKcRKauqnyioDwjomZ9HSv3QSgBDqYvhzCKd4bdzy7a9cwjTiBxc3RhuEjmhvsafmD9PEmCEAiDK",
  "key27": "4kp863gXJsPpx68PFDmNjSGFuc448Wjuv8ww5Ha3qzTxH6CU2wnHUdGfTcNN375E1FNUdqnPSjjRvj7P46jxX67v",
  "key28": "8ogPsQYwohiawkKJdSFqbY3LMD39dVoJX3zxRXe7kqypG3zJ9wFdS1Ed1rEsrk6Y5keLtsSsD18ZtnvWKjQtVp7",
  "key29": "4UyQuPFJxezE5uouTWK1pZ9tDRbSwdovHZixCBADqdzfzeD7cPRGT6aR2kAgyCiBCzi2fYWWRsqeaB5fs64fV1Hd",
  "key30": "4kiPwMBadYeEpHPW7iNS45LNpdJUUgzzUtfU6JKvMGRTGt9dGGNXQH6pLqKVVFdt5rSjW2Ng9mMYPXew4PvYh3u1",
  "key31": "oMeE6Fsms5N9HM7JvayaCaxh9QPeDZcw4bUaPMJS6vhB2GNwhis2LnvRAb1PBj95RAd2hfWdPgLktH2yng3w666",
  "key32": "2df1CnCHPDsBK9npePAu71X1bKZGxJxV2Xh4UKPyVVeFpLydu8PHRfNaPYJ29v4yFjWvc8oLARZqjrHZnt4KGr56",
  "key33": "4fMd2s3sVveSyW3pZZDxa3Ti4qoj3hFaLTqqmMtuVwuhsk8ULuxAV5UhaUPNwhym5TfJK6divqFpPaa3VmAwRzQP",
  "key34": "azx4uoCKsKB7oEzxkMDvknsN7xDCpGhGXdY8w4GsPzmzYb4J1EHXVfNK4c4cwn3y6v4rVcyRNmko2ojV5LBtBPD",
  "key35": "ssdYnWwL6eLKL5XPjfY3mKYiSFNJ2XrH469XuytzZ6MmJN8DyvMiM4G8KFuL6gBDeDrJ81mQMnCgJoNU6FTFCs2",
  "key36": "4Q9XxTBCbbKzazuQjgZqWkkbPdgroFhrjA8NKp1dYm18icr9xYoVmGXr1KynZuuKQXZVrM5mL6Fq5xh96ibZRi4Q",
  "key37": "3tGyQL3K1djBmUrvFtpVoa5KUsTPNvtNBVfiSf5DsHumpsiHRZ5Ghc973vDSRN4YEi9F6snXLHnSp8UB1pYznHgb",
  "key38": "34YpFyBCQbaqVuhsWm76p9mg32Wchto7FFxkvV4wffWFjGbFnuhUEcfHTHHU2tRmwoc9uSKYSyDwbzkMR4ZFp87K",
  "key39": "3VoCj8jVCSkFc9iijTAQgSkmcr7oKg6LCUyr95A2dr5ZBgJXeXEWKN97ELVyxHiVHVmZ1kZJC5hzqovMy11Pe8Pf",
  "key40": "4bEwinXz4aPwdMNMvBxyjC5ioSsZnpuALPhTi2M6cAYkSX169YbssRZJdTWHk5anKYLnPo5bQ4dbA4QuZZuPQBGX",
  "key41": "3kBusdVUiENpQYiGREYjJobK6gUAsTyjwzaowTrvzzonvto76FkG4NRoFtdtgtKfPXtYn2fwN86sKXWZSucVjjDh",
  "key42": "UQfVT6n2LkRksTW7b53kH5ho3rWvhLU6DmtMT4i2Ci1Zx71W8SeN3SGZxuQXcNcytbmNpw6iFn6Gm4m4tZPK6iQ",
  "key43": "PZHr3Z9wgsL68EaZJqGShLweTxoXLi2mEPDbJC5DX5ai7hPi8iz5YHeKGML3Bg4SFrmjbtaoxFADJXYLQjQ6hQn"
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
