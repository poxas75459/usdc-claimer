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
    "hMva5JvRp8pyTAXVkM7Mw8f2JTaA3t61Zd1yrAUmMsTTxkzdKLhVR4EGTbivQ7YUxTAvrMwzmvc2ECVQ6EarJEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nSoKTUQRVtTUCBrLaSLfPxiG9n8rTBnPgishUZV76BQtPhpk7qs72JBev6pDwTxDnqK2Ygy4gA1JBypBdJQZvba",
  "key1": "5cPGvm3RkV4UEEPLCbEPMaTbsuvSaEiThymF8WBw4eqHpVh588Y2FnvwuaaRKUADSXQwcKt4D9xvkwFZ5gB5zakr",
  "key2": "3u2R271HqL5Pm5YZThTvH4LTtgpEwn24Yvyntk7s1ydQNJJxU2nR69MAF7Y5reEJ3ALCuGFJwhovT4VRsFSMTuHV",
  "key3": "1ux9bCzuktVuqC2V45S6KNMYAqSTC7EeX2JMsfa7yQP1P7iSPGzcBR7Kh6hduQ9EsWGpvJkYy2sjkJBVLFEtzXU",
  "key4": "3Sd92TpTPeAp3DFuUAZekjpBSVTZrnHZNFq3WRxRyRNNkNCZVESw5SvVQKDfWYKs3HoZ7tjDrPHt8gdr3fzFm3k2",
  "key5": "3AD8iZL1nVMkMN2CaqWipEAfdqhzn3tDCSDL2rBzoUuWUB3RF8sXAxZYFoswRQ4rbxRQ9Brc3CdfGSt6NyabStEM",
  "key6": "kZZfVfWke6U8SGXrr5uBYR3uEUhWxANep8d3Qkcp2V2Zsiuhru2jRJ5sHVe6NFp6saFUVubaXujw6fR98eesBJX",
  "key7": "AKgTkris5nuKdReCyADFQM6ML8GYRZZmYC27oXbRsFvkSDVbBkSxZUAy1kTRs5S2dfpCYHRmqUr1HWpQ27KRUUe",
  "key8": "3Reqn5ACkUZSPqnCy77fPePypud9jghum4QQToVvbvFujPwDp3WiPHhK6GtQGa3QksUJZFRjB3NUmtfZUpmBZ3QX",
  "key9": "4PMah7TNiWF2X3dWoF1ck4MLhBSRa7KzB4TXaorwy8crVnbaWADSzcTiCMtE2WwSSQTnbve9VVGJjx7Lg8a9Ficz",
  "key10": "5WX4EztSKz5G6U2T1XGpaVCQDUTiYj6mcfig8CDKLkddPKCbMAjcV667FQ6TBsHqndS2iHyNQSTyFSB2GtaHBtmn",
  "key11": "KQWnRj3jHuGutC9J5rY79cTvVDEfLE1AgTWYpTPpkCtSWUCz3g1iMg6JuuwE1Zz1g8fo9VG2ohzdkKZq3cubdCi",
  "key12": "1SRg83xgR5Cew1L3dvgoXSkrw7YArVrdk3SJJXbSoD3Fxw9KCppBkwd7tTLFV1SrA4QSpLjuqvfdFWgMaMPRM8k",
  "key13": "3Z55zwoMMqKQ2GRUe3y51mgCeJFaANXFvJLJvx14ZJw63oMaPgYDK5wQxDZ8Ruu5MR5jGqMwrhy4rSSt6CZQ4Mae",
  "key14": "3c3kvC8nmVVJLpoub9ezNVsQe1TvqgEeSUcP5rdrWrqzAYktxQ9b6fsUfu1kPRHAL95wVuEcad2YwpVMWJVViA9r",
  "key15": "AJAx8yehCAwzHi89T4XSmV3pdN79DBmELxM5wG98Sin59XY5xCEpmjRHfrdvP9K6Rn9dBsMPzRi4oDc5kBiGPwD",
  "key16": "2BzxhmQhpiSkLR7pJBDATJAUBKMrgzHSn5C7utVwpaMwfwrtTt6RG1XLPLhirkB8ov64gV3JJLsDR89PsYbzz3YP",
  "key17": "4q983bBLMUCJr1uC8FTPswPsG4tvjtbKafPtVGx3esjEDQRXDoZrWPBUNpRhuinKKmvegi25fReKusfC3Deykcr1",
  "key18": "Cybnf7REkLFsfqpXdQpUQma67U8tsKgQZZfdXXnM1bQRYKaKcUhDN61iXYyJhZsoMyGrbaAdEXkvrZKS5JYaVmz",
  "key19": "4m3q3zVR7aocwGV78kp5f1qWs7gqrLRG7QMyYpSHFAq6keDJbg8ZtAcq81zyNPU8tEBNM1D25Y8GRtb2qATwmB8R",
  "key20": "3MertbwtPjy4ZZR6FRtSpbQJijXSU1sPuuYmBgB7AZLqz4kKkofjnTbJJV9B2AFweJ9dMuaFyZ5panSzRVP8YwmY",
  "key21": "3thcEN3CvqinFtaucZJvSQgtQ9aBgERb6TYHVp7cyccmSv3DpdjwKfHy85Gn87rJpWTYaJS5cQWWW9NtFU9zox4w",
  "key22": "4GHYUMyBVKVYFd2MWs3tQHGj2h7WWZ3gYyXgYTbyTa2Koiyog8zQ21mzANPw5rT4uANk8vGFRjoESbRt4jixoy1U",
  "key23": "3ZvfSRSqRkPNZFnviYAVdj8n28E4h5oz1JSDvDAEgViLFM4rxjuwKXUmV2vbLHCkjHBBtT587r6ANcShAZpbMjAM",
  "key24": "5Yfx6d4LTn2LZsxJCaSH5p2ziRzZ3VTkLaCemGQteoo7uxKoq8x12XkWzmY7DvzQjyaLtQkrWfM6T4jEQH5PMRur",
  "key25": "2MH7NWydP4yxFQGPHHUcWdL1N6qzZJ16zCPh4qmn1L1USJ7gZ5ny8Kdm83ZzDf75g5dN6phad5wxapgvz2jZJk9B",
  "key26": "2BA9La9BvB5JHSLxpvNAZ8LGBoBbTBT4JXypmD3kV3p7iz9EGgtYXwkmQGRwLUXGKF4KLqDSPK9BwRarmncpoLib",
  "key27": "2LeMaLVtRAJVGmb2DUq2CncDqeWD79Wu68uzgw7dtk9iKrjV6mkRfbFLKHE8tmRYDV9buUUPmK1odPd7bykbAt9t",
  "key28": "5AvAWLcY8cLyoPLgBpssAwFanYkyTNXczAxPdqCBznM7tiTA5bWPZWNsmaX23KvRmTEPYBDwEsr3JPeZm9KoKK5o",
  "key29": "5s7Swa4LBnhjUugsBapXRJXHcCYnXZV74KbzE4nyNEQkaVmNK7RgnjAGwtH4REwCpZBoZAhbjbRYmAm8WqCbcBVX",
  "key30": "5DKWnNL1avxY1XWf5ziMfcigg8DbmjAeVggszvQepdKteciYD15eyCFAeZtbKYm7d3PDsZP8uQ7VDhCr6GFyRzfq",
  "key31": "56pX91fhMLs5YbAFmtQkkVDXyLKtjMwHzd7t5RHWjiy5j9hwvvDsACkEJytsHjM8PJEGi4aqc5wX9phge3Kh4mqU",
  "key32": "Fr69YVwRVf6XTJCX1bi5SuzgMtQhJZo7151SFdCp3TvYoUWqHNVYxPgKDgR8j6zcpwmVQc6LcAEsc62wAWSDuR3",
  "key33": "4VkT5RZ4mUVF22TtXJ1RMRZYhi1mcKWAcwA3c1qBUsUAJBJABLd7PgoTH37YuVGMgvMSshZxsfVN6v1NebrCFWfy"
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
