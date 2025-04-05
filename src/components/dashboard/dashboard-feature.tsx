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
    "58NB3DfXaXrXGKZWnJMzRFtPv1wY1rDvFvrVS3rS4EHr58esuH2NPiuyAntK5ghRb3Jh8tgtoFuSB93CJCrG9o3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hsYnvKHYkhwjRNBhUZ4sfcmCjxPz9Dwsjd5xyjKoTdUFmpeJgbuN1ZbtnSZUvFN4AdFTfv3Wdk1ECVP82ei7g1i",
  "key1": "5RQh6e5tbRzcibVCdDEVba5j13DoDJjERpBKumoSD68PKJQ2osmeXinj3JudEZB7RqvUbXKy4jkV1exwP1nWMYiR",
  "key2": "921hcqgS9bD1gJ15ZYnA2btCUcpL1UXkqpszLSG6aM8TnB3dYiZFwysEaRZvrGmwx7Dcfa5uEH7o1QK78qnChLi",
  "key3": "2X1PbSiEUWxMxNaV8PwAtkU9fJyAKTrn3iEiraED21Lye7woJwJvJaDTJGkuF8BQMn3ZAx4Ka2DjuxyZBLJKA5ka",
  "key4": "1EKBoLjvEmCtZnskiQeLQtgHZMhAFBPEztz1xDUmrUt9TZhVLP57o2K89qdDUQdA8fEMbdisu3MSSnySxkNKhC8",
  "key5": "aKPzVMocSKvCTqvkRLVK89MfstP3YCnCAifnfthaG6E3BxKcYKYt6J3AwHwLZgCGXBdMsLgBfqwXBrAYmW6ibSP",
  "key6": "3dPPmNVsodJjmpDzRP7su3w5Bq7AF4Dbd7Ab9dJbLMfMWpJTuQjvYARBAc23vwV8TeF4dHphExS3ULYi7HEbLshd",
  "key7": "5pZwpa1igsckbTq3qgS46VocyVdvXGVBtYvCvyggAC4gkcrpLtRhQ2hWWYPBYoRNo1pVL6DBx55aWoUpcWDrp7bE",
  "key8": "4MX9z7yetxQQMV7UPQnGRnJ3uBDphebiThPPtxDqRPsp8qgC1GP8HrH9SqvuQQyumWmHKnMvoS2cxtF9hAz18CSe",
  "key9": "5KKF8dCao6ZgLstzKdJwBSjHHTVqRh1NdrTMkReRrJsk47RGLSgyBKqpxyLkF7rf9HsM1ZaVED3EADDPtDhJ67Mw",
  "key10": "5JtjmCMPP32gMqXE3c6KZrudvGPZp9oihwRhSf4HGpZcBAsYoiQhcTh333741Zgf5BVFn1cdkJyg9F8whiBQU1K3",
  "key11": "nLxpEV1o4dhmxi6C5gBbo1U5TVyenER3b6nqkWxGiVxW1rQzXBrDYxXBE968zB8CcUyaFpHLTTBH2ccuwXokMch",
  "key12": "66NAq7En4dbvd6g3vRGNVNUG7u3XTRcDHJgJ5xmfkw2KX4ypiUudRcJ9CrDEd5wLNSnezrG5QMsT2NmBJFkhrTqR",
  "key13": "31dUtowbdHTxtKa1EsTYrwVQRkoLU3RbQQEecX6eujgUP9UiNCXY4kznoRcKQENF8GGuKr6TmSKSFKCnVUUNs8nH",
  "key14": "2YDnW56p73hsiiLo7HYEUEJtaoBo2CPV66ARTk2aGjrUgxLR6A6SxnGj3jZY8R31aMSoZdzQw4A4gkKvhqU6QmLF",
  "key15": "3ezr5FmP7SZz3hBVDHSYDjBtW7qHpMtWe9aYRfzfgLRtKz2xPXSFh64oQobmWGNm4D8xUBNJqiFeSYje9yLipweP",
  "key16": "kyB81F62Bs8ymu21TRkJAMD8fPPg3sraxbzEPZLUZjJPx1r8UcqxPXQYRd3jC6b2Tk3zoL6QbpwRq5V5ZUPiwJd",
  "key17": "2iBm8SSQS28c2sLxT7xxSgNGbVJCwLJmXXbisYqLKMC4RdZ2jDgyVEaR53e6LLooKUGyBSMC2n5vceQa5yiAbENe",
  "key18": "4X79kdB7Aa2s4wSCGE8BkEBXy5WtqgbYK8rn2EBQuFXzF43o3FJnjijjbK4NkpefBqPnxz2xbL12BRAJyPqL56at",
  "key19": "pStuJ5esvHBcMLnBCwPVddk9tcgYcJPNeFrGexFcnZ8kzWpPjWqCQKR628hehgLE4R5aYTsu7F5fvP2J8Kji6zK",
  "key20": "4tYTVXg5Cy9P1BsKiEypS1PgX69mzLWsymLu7oPf9EHpR9AovtXueNNaSRKBoM9BnrByZNWiS9gyRWqZ4iCWzoHd",
  "key21": "5N8YTeReRWHesJGM6nUvXuda7SmU7ngTo5RvBzaeaNN1sfrCTnoXDBFP9aMqsCFozvkB2vb2vppr8tVKMXGSDnQm",
  "key22": "2poBdxBvEv7cZtAFRW8FZW3fn4HLrVnkiYGjjBVWq6m1cuKmpmUSXMXbfUqfZa1L8aBo3b6ZTk27V9CmmFU6bJNe",
  "key23": "47XeUkJZeXgmvmoiiiYaRerRoEE3oLPKpS3DhQbq3A1pvSs2b54ZQS6YVVGGZ9QZA6rstEn2p2joqBcNoJ8UYAop",
  "key24": "2ZQKKGMtappHbLKtgSQXS1b8NT6gzMwbUrb7ww3zbd4Wh7DBPnWsGza8C5zfNZrvVFh7Vae5btqvCiceitSjSFre",
  "key25": "4wvzB6fpsoTCsMmZZfqx78Yqmf6npJhunNy25vV5oaq8ZCvoNVKyj7v38jWrT1WTaoyfLWfUuoqaxbaqLkgH79tu",
  "key26": "4tKv1392Xe1Yb9Ygj38CDeE93MM9TiWW58NkJzbdJuj39xtBEtq5d9bcaLSrT6xKWPyd2D1DTYbi66TdnrZZH7Gs",
  "key27": "udFBxyYh4rQrYf3sEhGzr2VnpnTRhwE8ruJJCX6znsNhAvXa2hfhqyv7ZSBBhHFimckQwMwmVED2giuCZSajwgA",
  "key28": "35PkPsywEdyKNW5jkHNFPNj265e5KxPAaf4M8TTvnWLE6rKTff2XaZqkbugg4G3MmyWJNysnaBUYMBdGj4GtnB14",
  "key29": "31T8iBNumdsyz9aDUAztTjbdsJu1dMDTXJZ3Y4Syt7fuxUSptH9wagRxLBLhhmsXSD1HiAgKVfiYV3CrmPbk6Gsj",
  "key30": "5BxUoddpwL8Wo5aodexdMxAWE86dSW1no84RV8qpGLnEmK7GiZq1yeB2ccVdWTu27EvLaTLDhTYHqKpjg2pbv6t3",
  "key31": "unxRDLnWYhDCh4rHHhPSzREekEcCiUMXD7rUyHfgfkmx1i2htvspPBF3CmpnZbJ2mdv6TgC9TE8bxrjY5MCGars",
  "key32": "5jP4wdnZyLCE4eKPgbLqQh94xRiirWHZSb8UQpe5Pae3jE8smRTocGaBSejc6zjKHzDrLztqignrLUDqcRtPdQNJ",
  "key33": "5uiSprVxy7G7vLJzsQkwcip9oaUGL1jF8B9MfZ2ZKQtJ8Zd3BfbozbZ8AM3oEDRN3ReJMU5M7ARWfrZcDR1X1TUB",
  "key34": "5rT9L9ENTmppniaLTKDCvdfCBQcSy712jZJKavtvPpUZXDZnVJiJxG3q5eKPWHQnaqMD9LgGVc4QuzkHvYsDY2SA",
  "key35": "3KoTtSWBgiSdrbKwJwHRnwmwErK8GFbp47kuNVyD6UFzsyBK5b88JzFKkJ9ZZ7FufANMxSZYVBE46Y9JQbrWksXD",
  "key36": "5FrcSs5spcEPuquDNJdBHx7n3rXDWxvy83x2htp7eTGuv6vPiTE7QMThuiTk3TyVtxGCd46oNruqWbuv9rYewe6K",
  "key37": "Hg8wZh5NYfCN66pZKqTx2jxm4Tka4nvjFArds7h9KySK6DV5UzerGxwynZ5CDEMmtAcUNbJ5EcX2QUwDbemUrFR",
  "key38": "4XC7csm858VmbQrcixr2rRCPRzqNLccYiLAKvtzntQpYFAFqzBMKKDEyHyXby6KX7KGL9zWF3G1Af6FQMqJJ3guD",
  "key39": "4JG9UUHWAwu4VoBqCdWLTFYkVwpSSoAhzZvtXHaHNBF4FfVZQSoxBhQFjngN8gjeKRLVz16WWCyWJiZXMtYG23tU",
  "key40": "2Hum7kYNNbki2m1aHyxT8kZuxbs7QTvYmGZdsHDMUVX5UVE5ac2C6hABxoaXcWpZo5vucdspUr17n7aRdaphVEgf",
  "key41": "634Jvu1EoySMD6WzLE8tuNzZs5MbEw4DscS5o7Gib9NrJxyqWLrB4p5wBFeFwWsdokVXk11Ws4sqyiwRoQvsNYGU",
  "key42": "2ovFcQsFoZE9SSH6nhSFQwHbNhmNWrnzxrDixrp68XAupK4wC6T1JyHUtMhzR2RRY2rqkz2GU12xs8t6BMqT93Zn"
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
