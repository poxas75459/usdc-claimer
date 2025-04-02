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
    "57PCFDL3q3SFBxNDsLC4Ycn3tsjMR2B1ivq6jRQJ63eXeLUuDBmfT6gwtWTNmGAQsrEQAuB46maQJ55eGrW9bsTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kjLdEPqBHdEogvBHpnGgPmJr6pRWmvaW6iBTxokQjdFtmGV1d33GrsL1Cr6CuKhsaY6VNMFGKtHR8r3CVTGfnM5",
  "key1": "4CwU2QfRB9TPJAKHvEgUS7ntLuNFU9A1o4GvpMSDF9TAAT5wAKw9bA733o8mUDvSn4fYcGdL7AFoWKFU2vC1pSbC",
  "key2": "5a8NwN5hkRieAUEH7aZuRdLN7RFsmH1b6N612BHpWYrn9u5whVNoTHAiNmTTfw1VdfM2TR3YDTzGPRSqKzos1hfk",
  "key3": "4QnEyVeZGeQ116Ncsfxs7PxNzHV5JbcsWv4PiTGpYXMxr23fJAyydNch4DWuv1DZmZQteaZKCXmcGxUj54YUZfD2",
  "key4": "4obnqAhDdacf7gpBREiRbSbzP4Xq3crfYmxLUwyRdwQTTRAM2mQvUkgEEAWKwvr4MegUW7PxQey5tbXD3WTTvZ7G",
  "key5": "5Ywgdf3kvSuaRsZeTH1BnTQGhcDVCRakNcQwm7B62qMLioh7UTfu891ouCoUgyDjZto9FpaexfiJqzdE7D3Z5G6p",
  "key6": "LaLXsDiGgQRiKa9u6boxd1yoGbn4GvNgAdkFG38YTMckniEQTrPtqJiHm3CCgxUSKbHByPj4RnXL4SsLRgbrmyC",
  "key7": "4bRvXg2HppRPPWnYKY9Udz7SnrobqUHxC5AKsjSAZ81d97NwMLfggNAjYXL5Yhp6EY5m3oDHzfAJLQx82WutBGb7",
  "key8": "4F2DRGqneJcQmocUqZHEJ1CnTcqSdae1vqrJfETfhUHpsquAHp2vQs4mVa6Ct8cBzU3eM8VYFyHQqBGx4dRXRTvu",
  "key9": "2mQGTFX76uf7eA5bt3HU2b5qtLJHyDSHVp5w9VEQajQAzvF5A7JGrEnuurC4i4BDcCyrpYuAuiPawiVv8iCeMSmw",
  "key10": "cMiHEbXzWtopiuXUgYYRAZinJC6ZbUkwXto9TVvoWqcx4Uxu8D8ZVacicpkxXG44NkMVihaFkoSW5P58mpnyAZp",
  "key11": "3ueavJ7FtB88p7tgYAaiqwWZd6MCpYY4aZmjrQ8Gxnwoc7Fmw3iLHugKXJRioCRGpCd9PaxVsvPUgSmx4SZLMUtF",
  "key12": "3HRbmtW41vhrZ9GbtuTdAcWR8HZuMEqhYKm8zGHBN5RAvie7fKE6CTfwGgskP9nJzQ9XNz1sALWxTvoiECNxi3NQ",
  "key13": "2w2WGf6nUuGbpa1GFiA3Ks4KcHjo98Mxjy4vYz8zEictq4gx2ASTz7XPS3sndHqw5tinNccaYimrAXZ3C37tzCTs",
  "key14": "2cYiHuqiHv83gyyGJPKpe6D4nKrZtWYEMDV7NnxYFtd4mqsjYUq7Nz74TT5taRax7JgqxgN6ga15t8mr1sevw6tZ",
  "key15": "3K6YBFcoQb5EFrsDEC7vY9n8hmUPWLdDha3Z9JeeQFnf1SGRpcDR5zdtQkXsfsqQziAzdH6hVckRjjCUeik3nw8f",
  "key16": "3auZ6J9QidfhgfN8Y4fqoeqtr6QKBgHhTTqLuBbLEU2hAooRpARwZ4ywrqCia8ftFQUWC41L8LgVo4bdifhEzaG5",
  "key17": "4TA6rox9HdGR7dFjBU7KThjppnbut6bEdYgxRGvEiSnR4sjfiyi2qYSseRejxc8CUw22T6DsFE37gHYrxMwNGyn1",
  "key18": "5Y7G9DomiGm1xwQd7oUvr713unRWWrHmV9JMMDxURyr24FEiNxRJ16Qg8Fy8BW2H2yodiVQMDvD8PhDDruH8rrDb",
  "key19": "PRsUw2B3hFrUnmaDdeevS5LwS84gvENgVbA6timp7x1L3BUmTnnnMSXFNCZ1632z2hBjC9aCNBbnYV3v4zdo5YJ",
  "key20": "2Hjpc3ZZLYRHkBfsEqazb43UYW4W7cfxic6CqdXuzNfpj7oBW2uJ9kvtFgMGaXZnNBRDagtEt4nUxs3aoYF7Anaz",
  "key21": "3um9QNVa2qNLaS5aWKaSHWqxn91fu3bjJtAzTA5DLzmBzpE7gAfybQzJPvBkDRnoaPpTVEQ7duieERMQS1EWweVi",
  "key22": "15ZYJxi2pQcgp6JyRtdzehiTm4fR9ErAU8YzrpwcYZmKBUKM47syLi7uUnMN4viik2bYbUKpq3tLvUJzsSge4Lk",
  "key23": "2r4mckUEYdSAfQh9PdgqbFFiRU4o7cUyXKuWp7dJyRx85Q5m4YyNDBfyEDXbia9wJU8M7PHyKwGyzbJppXyo8KBW",
  "key24": "3AZvu3QDJF3vq2GJPqaWfUYpVLfAmDzgKGoosbKbpzGxSzDvwH8sSLu4SWQjbkVtzy8zjdzrVJ5b5epfCs34dqBH",
  "key25": "488USt2du9jXoKi9EiivgfDsDJc9dLKrF5RGbWJzhwF8fhhRmosrVhPYVt5N4WuQmteupc2WMU7evGrsQPAUcR3y",
  "key26": "5LsiYFoN78HBQHPufpjgA7U2m4FDk45FGtU9VJfoy6BitotzGaot9dxj7FAeuNYNA4x7nRU8mRiFYEx5KV3iFdN6",
  "key27": "4y4qNqaf4VsFX8EmkeFeHJbPFohSBgJEhZRsJ9RaUBdZQozt2HoxHkvZ7Pm1GrqgtCSNUzeTXf7tucmKMmnjEzUf",
  "key28": "GQZXM3pkSUPoQQSF7ArTK1jStM7ZaXyJnt33j5psKn5ZbL2jwQyY6FZYmBFTSeoFsr6GARivoD4iptaUrmLiQBU",
  "key29": "41jrrccD5ktMgoGTqjDwnA72CPSWLL9kZZUN6US8RzSgAwSCybbWzgRix127xcpC91SzpMshCU9mXWhHapdySUCw",
  "key30": "3J2SDLFefptv7326qnc4xqgHhAqv3fM4G2Ei7yBUqAD494xYZoYSMERj9CKMsPyLxSkUkN3rrWE5qUK7cebBW8vv",
  "key31": "35Nhtvh8daZgau4cJSvarAyY9VHduhdYWX44dBpmRvFUvS4ycHyjSSVUvX1mwjBwqkv4fZPus33yWRQZF9yr7oCd",
  "key32": "deo73XGoEV9sEkg6Mh5eihy3LJ2gohaX25QcTGCxyig7ioPUjFKCRiy4zxQqJyaXjsPrjw8qJGVHtkHC6K6qFCD",
  "key33": "5TyumECw1Z8wDgnSc2RBeNuo1vzn1b6WJDW4dQnFoDMqJQ3ogDsHyqdUCRLe25Y1s9GGJM7zvqMsLQi7MBCArhj4",
  "key34": "2h41UQ7bjeZ7i6su7hQusNMaeaa5RtxJuKwDNoztyt3fkYYtSfsDP58wqGAUgtT8xJFZcZsxeWTh4jASpc4TTPAC",
  "key35": "4boVdxEyuZkQPKMCJbVyBymNWTpbk1pvoAyqf6FTQjQp89GmU6Un4v5uutupFR3rxGszhtB6McuF25DqzZsDo77m",
  "key36": "3NzP5L8AissoJjG3XTPD5Hx4WdFzzrtjGoTe8vFmTLBqywubbYzW9wzNDWkasBQ1BpjmSWjU38cJH2vcD1PeUC12",
  "key37": "pokWQboHPFxFZUs2Z97qTwTiiqcGuPFUTcrAgdTDNryHSND3fJE1w7iUKofd8UwGNTBw48wXkRExFxJDpjUeZTA",
  "key38": "2yrumo6MR6kmW4oyHGoJgywcGyasfKABEJBTZVqBD7566AukK7iRV8wBPGsy8KVTY4fQQyHcZYUskPkhdrSVVTHF",
  "key39": "2af9ZnnH8JDPGdHtdn47Lb6yAvXokLNzhtiFpXfRsjXnP8LJMbkHEhq3PNQjWaUB79dgHZcoXdRKorz5kSWARxdV",
  "key40": "2yC2PHSLWCdSLLbEWieGa44EvPzceh4g2Pv6fwMqSrRqT55SZ7vyeZJPimArU6G61J71gV7wJ6GNng9LYoqxEH9S",
  "key41": "5bjto4iJdJ88pD6RpEdiN5SWJ6CY7u8v7cXp8ngbBtBehvczrvYCStHm8TyWZJccMPovQAQg7DZPLWLmRcgpsJ5x",
  "key42": "2H6TcuVvsVBZQnHzbS3S7KFgkadYN4zPjAoDc7nfWJEmXZkjA4HPzkhSNJ8bv8ugEz7SkXSyQ2nxgydtSqF7Tvwp"
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
