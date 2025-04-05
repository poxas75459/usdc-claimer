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
    "CWuYAyJP6npkxvgrDx93eLxQS6eVGXHgR8yASApHadxuMvnoXz8rDMmzc9aTXpSYtSx6ScG5datpkft6PJUNjFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zk8TRLUVjgP7aBeLQbryvtSwUTC1P6UfS2D2mPDGofZp5cs7QoJNzh8g76ugdZgMmJF3qYkNBMMZemmfRZC4eA6",
  "key1": "5otvUpiGScUvqHUeaHELCn6W2FsnjXnqczS7UrFYfn9Au79uSfm4BY6fHjm7TdhTtNmd5WkmCZi2eugTxi531kQB",
  "key2": "hfPB8EGRCK6DBUt2YEhjoBtwJEJZVscXpTxjtvYq4ExTFrAP89dNdrVV8KAmPy3jPvn1dvFFF7jnYx132CbhoKb",
  "key3": "4FbsKWA5MGwFKezCEfUtYuioJqpkhv9yWdFy6FJmgL6cXR4Q9V4V4RWuWrPCx78J6sSGksEg1iVCou3N9PdBytCC",
  "key4": "BTSZmbpJiPVZaLQ8oWYTnquncYwn8iiGYihhTy3Hn4CxQeRZoUfWV47QFE2rKCwRQpbQEKYZ33bU6cYVHFi1qZW",
  "key5": "YG6K8PA3ifqQ2J7cQkY2cxx5nhLbP37h9mfVpnLwdaF9PgFTFdH3h3tEEoD3EbHWG1mirhm7uHwM1RoMRxLfv1i",
  "key6": "3SSmETp895EsHyeeCRsrjYGFvpc8HF7A4RHqmAhXLmeoaCjAywfqgVh7awhKcgqALx6ipFWFSrLMGHLzcKPCrU1s",
  "key7": "47NqbKNzDZFUhYKQjkuBqd6RJj6Xzeso1TviMrMw6MVwRaEtHmCyXN5Qgz6h1xmtWj9tRk7hmbuWSXwDmCJcNDmG",
  "key8": "5bXnAERXnrFRvwLVoHVpDwkWRMp83B2fr5Djg1ETLVXHrjUzJDRec7kQRHc8J5obT562Mm6rMUoUm11q9z2GcwhQ",
  "key9": "4nEo3Rjm4Jn8iHFJPbzx6jWmFW8PazEgbBvzbPA6DBCfUsEhN4oiFhr69eSm1MXjHZFzJw5iq633JjtLHnUEEMph",
  "key10": "2jQCiEPXBX418uMgRZXnbaU7fTVnytJ2XSxQLBu11N8BuwTMXDW2BRvzTLajuZTdU8UnveskUAU862Ua2f9Et6tJ",
  "key11": "2BfCXoKFPsgBDeDTR7a1bZdo3GCns3TnG3bTvTg8SC4etcZyKoSrKhq2i8GtWHpPHP9FmTcDEXZvcwMPHM4xzt6a",
  "key12": "4Mh68rPKN6Xh5Y6j9CcsB3ZUU38V7YJNYfq9EKwhwcZYTNPdAbxDMtH8qNHv1BBqw1JEB8GqdmEhn35vqmC1yuyk",
  "key13": "4BrYcCEfkMQDtLJcrzt7HNTbELwTwrsbqBQd22wkBR37e2b7LkTxN8MHYoVxUXRi7axtPqz7Gj5ZdPsYhYtAvxbe",
  "key14": "5isSRK2kaNu9k8WLdLv8xPQMhRP7ET7wjgiMsZhKTahXxQnJW4YFPkz7pP53xxtoiy9xRCp53jUg5QYwq6Pf17gv",
  "key15": "4VNezjJtm5hQ1amgYdow6kg8py34ktXbwvmY3cwK9jnRW3vmXRpagEYHPsytjjDodssu1ZqwayxtoVKA3dc3GDqQ",
  "key16": "5LufogC7RSAXJGGq7ddBehv6DJSZUfsdvu78qZgB453AYMxgabWbzGbo2sa6hm4EGbhiva461qAWCcAAbetVwozw",
  "key17": "4PHBuPrG9Dhb4RqYf8DapwhvMKREtMqTmvtmmVPy6ni8eTEQjfdXzYEifo3oc18ejCTFEc6xxXeaDxxi9dKwHUFy",
  "key18": "ZN5hfk4YKj95rPs5qk1tefFXUTPxXhTuKM9CaSz5xt9XaudGxQ5eeeHQULUQPUk23ZC118A9zUDcAh1cuCSSfRu",
  "key19": "61mMpai96SFsVZyFD3ePMP65pEXLyeYdNGZxzgATYNF6eiYCd96qwacVf9zZvGrKkCNw7Meh4RVNcPLkYyXPifuw",
  "key20": "47XHY3Gk1ZqchGMbGgU7JbVLKhvXhhP3ptSXuyyR1a3bjNAGCdRVP6B1sWJxfA8oSh8vitqipppnESXP9dehdxkF",
  "key21": "3W5XGCXSwg3RgcKRcGBD341z8xAUzDYFoQwaMo1n4BfGnGADd96rhnyifg9gKeHwaZ4qfZ7daeSA2TV8vPqV9RR5",
  "key22": "4peH3fKw75spBnEvcSJH2XCao31JcAfEw2ieEPHov12zAikx3RGj6KscV1fycNevZXGcUVsBAjFR15kcSLF2vDS",
  "key23": "KuxbBgWybZSJDydky73oiGCmMkX1VePb234osrGH8SaRjobmVfNT2ergeLNpKuBhusy8ztGcDFr1eb76qEQrF3Z",
  "key24": "121HDf4XDXc8oNpSvuGL8zX95g7pagaRp6KmvAP7dDZbjV8nNP1xSrJ8g69oq2X2vQMRNpfxwrqs946xCK9CzXXt",
  "key25": "3GDMpbhXfuUSc7935XgoYjEa4c3BJywHgRmXBky3UZPgxLHiDgiL2aP1x9Z5AMWMniQcE3ttsMJNGGCreDxYcU9t",
  "key26": "4HJz64rmf2io7SuPk7cKx8KAwyK5PA2VrvgEyZFcjaH548hVKHJHZhPo2HWyuX8yH4jNU3CCLBAiYWwKZaei9Ppc",
  "key27": "57q6azdV6x8K5B5y5hHwe4ZAs8TZm2yEjLRKaTfTkpUxf7Xp7GpcjiWiQt5DSEbvY5hHBr3GhfMnWF1Mthr7wEzY",
  "key28": "2QPmyx2c64nSv12stsbCXSeaGoBHDHxQbdBX7BRa5kCvF1FcLTLSdhNtF9YPDPzjVura19SxdKWo3QjmP1eHdDsT",
  "key29": "3urb3Ajdpa1XuYXnD28Q6pWJWdi7PXKM9RuutTvhvGg3e11R81nCrvrdMLozWaaAe2oqqkDU7u3xA6Ad6XAcxVBb",
  "key30": "2GbdTwrqdysGsXyUbC47SifhvkeGMZwtndi3aN3W9YbYDo2pbqzAa4RFUq9hJyxu6Ty9UWhzfvHDHV6XjMdQL4m2",
  "key31": "4LMnsionRSxSkTB7JHiuiKvgM5v4ioY5MxcEUkqzkE1jFdHyRi2njMKhZzcwrHb6wySiTMbDFKvNbiL2mVnWkzJP",
  "key32": "2AqzyNjAfepYehtGLBou6TX7nX9xa88m6H9h3d1gofbqPxTbLzc9eVdwJK5STJHraqKi6UppT1pb54RtXmABEs8G",
  "key33": "4YxwNfXNNDYia5QC219GHPY8b84PGfgFocBJ9yVZ9rBzsWrgueHuE3bUifMJe81f2geaMwZbesSURiqxpALhYYyD",
  "key34": "mgANZFPWFXtjiGVAWAUqEHq9dhnJiJGWK4ontnBHxsLibtgrRnwmfEVv6wsLVyZHBZS4v2dgRfUkJfJx9m4fysv",
  "key35": "gjkpznc3rUBRemxoYJkE8A9FHDdofA16xSieCckZAo1giYW1LUeSWsrqxL8DThnkijksdhJdYKobkhzVicH3XgB",
  "key36": "3sWoQSwEfeZ4t4pSwhAipXkveAyDNYNANWs3XJVfkG7An7FJKJYhgZ8F3GVt3EtfrBZ2CSTDM1HyhAGQnvqzxhRn",
  "key37": "iT4N8DwNiiP44EeALNxUWaBUB5n1PBfAuSDtVCtZiDxrW7V18awt4NgZHTuAnMEQmuyLrnixjqctYcMJA7u6ri3",
  "key38": "4HzBiueoQkSMFhrph1iyFWsCBSnbU4fbRa92cZBnNmXRWX51Z6Yp9unNC4dWn2bv6DU1Wejq9iPe63ZBVmJTytTD",
  "key39": "4zGcGVGSpWagr3wZaELKgSNBhX2t9XivMk9bz4k2WVbbokJALeE3vZToTbxEZGwZbWL8A3pWi3gAVK97yFcVfvTb"
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
