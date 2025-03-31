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
    "2mDEjQEfVCA6pCcDVVxY6YxyBc856768Q6zXJ6LGRf1FjycUDGjoVBzxfzdQdkJZmVXZyYETY3VH4uY282Uh8QDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kTDQdrvVKaH2v22XHvMKhGE9m6MLzftuAdwGhvji3BLmzRb67wU7kfNeGgaB67SnWmy5ZHBuR4y9sR233Te6StU",
  "key1": "5AgCNz52FN4vqaREHEkLoaHHGuLSbeu5MFHxTKz7dfqi2sq2fgYXKQLh8wLo3D6Td5xkq5AueazEjV9BAevR58RZ",
  "key2": "34A23kY4Y2rCMn7z1y4L47upehSMnhL5guVdNrrwJ9eLrcysfqqS6KgDg5wHgpppFN8UNkjCLXCCENo6MVN6t7NB",
  "key3": "zTjhuoipve9ThTRLDx9Wznq3yphCjabjCKbASLX3H1rm4e6KscQjoY7TMegg3EXSDPCZhvCBD7eXvgWrnpbAZrH",
  "key4": "3Z2ySzCmPTdPVRhnp2okgP5daTKfedxLq8DM9YG2ioHw1GGZUXm2RGv5mQ2Gt3G8ZyJnbZP11kteVtoCKh9pgPzy",
  "key5": "24nH8Q9CBR6ygKmU9HzfasyzA8MbKRAgPmtLD4apjdY3ipnFXCVMrjYxpj3zqJKDRL2R6vRMpq9Jw1F8G49499r1",
  "key6": "2S7qQGPihmMyMmQDdwcLMoZsjkgC5hsvxoZ85yzc7duEiGVPEQzfXUij4HHjo8RP7WjYfANwBMFuMYiq8TU93gHS",
  "key7": "3n3JSxuTPCmc31HQFp2jNUKCiMgHcq8QpErCjMttkYRnCNwFDLGzzVvHm9TW7XW2wrT3SQDAL98UARnF74zAbjEK",
  "key8": "29MvBa5Fxz1HopqXZAyimLgWKKRw5hop8Kg9d9MaaQqMsNyThi8YBGSWYqsWrskusrdRMCVL9nuZgyCHH84Zp9dU",
  "key9": "1BxxNj9Fxcva8XfTcdG3BzJvXSU3Yyikfi97ckjwinRNQHJG15efQkRmR4CcYrT8JXKV4SHHsjEnxh9MRPrXUX2",
  "key10": "2dhEbDVZGuXHNF3S3ZEejKEc3Y1CRhiqsjh9YfzYoJ14uzehh8vQAeeyguhwijy3GpCAoeRWGQyTUw8z9rrQSS1M",
  "key11": "26uSaVgNiNQpkgcjkXL83yyzA2eaPXDzvcuZkxpvfcKfyddvaiYdXVLE6YXr1U3Bw96nwrgQMc3k86Sb4Pu1BNfs",
  "key12": "3AzDjjjgZGKYbKv4wo2mbw3rrgcNfuTtbUPEaReoS3UeU8FH43xYXUTm8vcqzXjd13rP4vXsHPbjQXN2yvtAK9GA",
  "key13": "HHbewkW4GKrsy2Qb3CWCeV4Lq66EuYLepEEvgv6dAFmV64ud3k19y2yDeuujDYFJYALCz2JydL2gBxBDPYLHYLB",
  "key14": "3rNdwptjewXPaKwaqZ9i65aae5shuPyZTnrfjxRnXXNKJDRhhkWaWRG6UV7AcPJGsYi7GC2wATJaNC1TUNYjWUDG",
  "key15": "Ni8DEFthmNksAdvnugaEnyx13aFPEx4o57eJ3zixu1cnA22G1oyWHojaierUEXVRbxmqrTBxDGRoeffR2HdsxUg",
  "key16": "4KqitgNMUaJLBBxrq674WiEPbn11b1ir8odUkoh8xvAREqtUtCJ99ghEtEr1zEtwGjYFoxbW9pMWGCwgxBHJvYJH",
  "key17": "g587fZbWtwTAMSv7pgfYUWpK8jUZEdV6mLJ16WLh299YDbiYU3DLa3XQ9Poep3qhFoGa1McspX1ah9DMzYgwcUe",
  "key18": "8KFQ9XKeoXA3oPbp7gWotLqWZqEWdHm2aup9Bu2ELTim9m9z1e4eumptuPwWPPW4utCXNxoJwx7okwoP8P36kJt",
  "key19": "2RDHAjutKYHYPy6Zmvity82xiWGdtYL5Z18kvXn2yFX5PqW7pDEmLpqL7wYtHHx77E1WQNWoMJWiJdnXKrAPZsbk",
  "key20": "SLRcUNiAMhKFzL4VwSY9fDdaTRu4cvwfFa13mFoKEsLWBYdhJ5goX3UVZPWd5aL5E6M2SzqpNFm7iyhPujVDz1h",
  "key21": "3EGbi9H73fQB53BXNeUY1jrVxx2Y761EY3jrDSDMpKwAadZ1WYbu6986RD7CWJ8tg7xtRshS2kuUz5hk9DXQoGqE",
  "key22": "3DX3wiNhkNuGNtw5WsXCLsSLEpqrWQJbBR47c97VDHEkfJ61Qd9Y2C5JsPQzy6oDbqdb1ApigJuQgGANe81aGXGH",
  "key23": "aUXSYd54RikvgyJDxHZPt9mfcUzMqqvwDB6AcrQfyfp6MXdBspcMc7pvHCiwFUZhV3rSWpDULP4jpQc77VtHufq",
  "key24": "2yAbpERT56C9DteVySUqAFpegU1DozTm9hKKpUHzYfzQL5DeN661XDqh4yPfaYUZV5t1tu1stu8yvWtKb2jpqXKy",
  "key25": "65LPsgcQNmT9wWvPjzWXSMdiyH5eK8D6jLtgeQXbWXuZHBmDirx5CqjirZfEg6W7RLTcKMQv7Zq37kBzJ6aGJN34",
  "key26": "3sybLqumfiiuKt6tGGewALbYVFSg9mcGQ68y3HNpR6WDUptEKJZsg1jrSXknieDQee1s1eSSdqquQgp6YALaBcy5",
  "key27": "nHRsCdLQK4qV8namuPgZ5Z6LiRjZzsMJVgRNBik4nQaAAgWDi2S53U5FvkfDEdr1zs25xp1jjWLWUmq8FgJM6jj",
  "key28": "MbKRCTPTpCpbGEfynsMzbiNxyjh7Q5nMgFV5XYjnfYDKwkZJtXAMHkkSBQ8iVKosUfFciiTGUjDg8nLbFDvg59E",
  "key29": "4skf6qsyqeVbfUeYMqE4ouYhCdLwogyonNG4aUg3ZYUPBnZ4xyWUp3eNUMfBNw7V5YrBTqwuTeWATjJW9XwQvj6F",
  "key30": "2MirFZ6E6v9uK4Z3yyj85FZKDuzLa2bdtF7VndGTrAPbKVzACmxKJrbDbpxKuyvBqTEpc4ybjnYihwykKER544bM",
  "key31": "2595J2BtvVFbDPcQuTx8sWYbn1a5zz2Kjk1SyT8yjss6Lj2RQNbHkG7kBD4zP1VwVLwSb39o4HUCdQXy1dPRjyqV",
  "key32": "31cAjAZErW3Wynhxtxj8GxmWcq3X5TKw7tVLjV5TkxvDCB9UTJeVdFBXSHe3B5XkhN8rdQw8sc36uPtP9sh8ryXZ",
  "key33": "2mntoviuENJ19YAmWst7RzKkQH7VX4WEqgMgKtwYwHCDQbbyiRJCXm4bMSZq5LyTwBAmTW3HvjmcwYzhab4FtaH7",
  "key34": "2uP2QVqq3WPs8ByLpfzUoTGFnhejQGS9GKm5vrMVNVnjF6DwYgApsPwuU89zYD1mnHRAwE8BcArdFV2ZLshWopBR",
  "key35": "4qR67ztX5HhwPqFRQdsTy6F6LwXDhPwwMvRLmMH9qcsHFy2mNKYHj7oz4zFm9K6VXcHLTQpAiYAqFZ2Ma1rz8NfY",
  "key36": "4PVFJTiq9aD89hAiMPKgZ5fu9TF8DjjA3bgwUKPxAEJuM8Gw4DU3Uq7aXer2yk8Y6GufETSeLgCrojsEa9BoHUjb",
  "key37": "4xFR7en6GiqkTnHDqLajSuNzYr1a6mv2o3UME21z4tNjGvqjHHJ97g8RrBtbQWi9SrqZgfeKkzE59fg5Umsnae1x",
  "key38": "3a2Mda3T1auvxCytgM4FrJuyKRNiT84mqXh2MfQ6qHpzyTtobt5rgDfgS99P7hjSj27yvRxP2xK6DDZoFxMW1p7r",
  "key39": "5bPcvmKA5szpco2RdydcU9DsWSnRvqf9QaqZNHSnj9TPrgdEwRErtUR3aXpriU9UKvX6BgwTef2i9DKLRfzdHnRd",
  "key40": "FJpUqgv1yUNLSGx5heBXu6WbsUW3bik5VPaQVsMXecrELLA4uqf1eq9AagZhFbN4EoX8kLRu6eAiJVbLUA1B88k",
  "key41": "2mVE2gMymUzEf6UKD5jphWgf9qZvVDhYedRsU8d5muPuC6NEJCjmxmF6UwDqE939gikuoc8qC71XRd43jymafRpj",
  "key42": "5Cu6N6mXGyREVMtyUiX8WpnG5hvUVdqoR4NPGUQ48zzBzeVDG7v2d49581o23VdQWBvpvHdwyQsj3jSJmqQkkWED",
  "key43": "siJ7cJ9TE1Eb82ncqZiXy1LLEhyoQk8VuW6cXcoBy5GZvvf9bSCrz1qgvSzHjTzPgvEwtvBu5PDJrv7EtixGsgQ",
  "key44": "3qLU7MLpF91NdurvgLU4NVKRPvhhLSgnFXo65dyMuRNVxCtoBTheaBT6vxssV854U1eekoEvDpwrcp4ot2v7cUuj",
  "key45": "2xKc5ugHE5PbFpsMN3oY1GswLJsoJCoA28rkGk3TC29kc57u3KjdnBPwH4FwXcM41UpegeaFwjcxTPseBfsLQXLT",
  "key46": "4z4ZCtpe27LCWNDwCb32HiVpDPxKhbrWg1a5LU6QBsyhYYEWjYEX6idfgSSMdKQmno2FHXFyCou89NBDgkpJM2Jn",
  "key47": "3aBCcdehMcAuS9K7c3hb457UrfiszgN9LcrUqm5CTmxxHhQfRugDNZ21QYkrjdSm2G8HUkyciYkXGmyKVHvFu4H8",
  "key48": "66Du76XGx89dX88THCvqnh5DWdS1xKcT2mDNcX4kKwk56bmFxSVYvnpQeRDxnWRALPGVaVHpgmXqux9Ggvtbst38",
  "key49": "3MAHTmc1tmnKG8H7gKxiACqPMVERyPCHnxj1k5LPYxSfdxGAid5zPNJoqrdazJAChHnzfoTsGJrCPQqwmbRfh1Fx"
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
