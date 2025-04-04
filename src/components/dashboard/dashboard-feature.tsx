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
    "3qq3NFtfbwwKWsLpGABuizGg3VSdaYiViARn2iG37RiM3y9aoydn5WsDCahe5VdMDboyrahVHLSFQ8EJ1yCjo9Hb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33XJZBrWT1t6iPdfNmq4G1DGNrQs4cwdVQqe9U9AyqXAwySEnDQhnzAjQeZV25PQ5ZEtDhMeTJyvFqwFvKgqdvhu",
  "key1": "29hMKmhNvUuriUC59q8WWiHHaFa45QzAP4pgQFfX4BnpHNbKD4stTmZF1w5N4GR5HqaQ1pWf6mxx9GPFqVjQyaYW",
  "key2": "pnynVCh9C6K7vxE9z2JKwsTbLoWRjFSdz48qXQjhJs7xVrNQX7PE2gCAT5m3xCTEtZkZmXcmPY6RN9iaGc1zzXi",
  "key3": "3f8bsy5Bmf531bTc9rnknwAwaCJaL8dkzRvZs2MTqsoD2x2etcKqg5uLt7XhZGmZBZ7u6XMfgyqVeHud1nQR1Lq1",
  "key4": "2gH9Czo7RqFRDsT7td4bW7667WgppvH2Dfrmyz74e24NtKas1ZpPtKzgpScg3smvSA6VbDZMXmMNZtJFZibHn23E",
  "key5": "2V8U3eYSYRDN4rNMBkLM3bpXmSmbzHUMu3XLiJCZHN5DThPFaEr59QsKivYo5yrYWQaVuQNCFFY4KCF6vVvU7RjK",
  "key6": "2uv6yc44UAdrZvmZvv3S1YhcWWJjS7qZaeCTXFn4UM38xGHy28iiYkF9DjLadycRDaCYaox8wWAaKcK1DCru3Fv6",
  "key7": "4V2AUs8mJnt9agMN4gGivuZBa2tBn2fjmtHgT82DFqBDGiS4WEZU1E9aUvMuo56DrW4QuosLiLNTj2N6voVtj84Z",
  "key8": "BfREfv2YrVYjvASkNYQEY71hU7As7VynBpeNZHwT4JLCCZqsvKNTwayWn1jzoDRr5iXZpNDy4k2p3vPAFyGeqA9",
  "key9": "3NHHJqQeG599C7CMRhEq6cXgGeMKjg6hwcukB2g9hBfXq91FNEXzzPGKH69auraS2ff323bbrMMS8waPDaQP3zhG",
  "key10": "QXKXLNoi7cqVykoHEG743dp946FDbt1YbHXSVUwzauuD5ySMT9p52yTSbqHdaEBUo3z1E9BxCGHn5UMrDKWNuBY",
  "key11": "4rPDY4nr9bbDVak6zVY8i2vLCXayZi5mfx4KWEataHz26ar9LJQeWdanSaHc13EMaraZdSz984ZHQQ8jDTNv2MkK",
  "key12": "3Lp8Dr8pRRnX3PnZ3r7KxQu38D2q5EhFUd6HKpC2Wme8bKTwHqE2gF52Nu7RwghvPAVVCwR3fBCiy8nmmW3iCpPc",
  "key13": "3jM8uCzsjBi3fSQAkuAcmYXyZ6DXXGKqFH9vwR27gLGH5AvSfef9hj3pZXzME9BDT48v2C36QC8MUsNJBr3aEBxJ",
  "key14": "63wRiFVA1UwHNwZ88jEAc8HW2c6WST78DnAFnUjm2QMuu59nftcBTLyyUA7gGG3j2nrhTvV1SL7jDQZEDoncWoNL",
  "key15": "P1iVw8A6HpuWiCs8v9z1kKECARpxeYg431AQxE9nzq55QazqY1Y9bL2aFb2s1KYYuZjHhf7PtmugUCQHhninxny",
  "key16": "3qFeqN83iGmYYk5j1BnNpj2r8tdEMcCeAjw82VWJmDMvM6AeRvchAboLsxz6H9ECQMyGbYfsZ9NWkh95hxnZTdkJ",
  "key17": "81QR4JeXwB1XKWtA3Xpt17JC9zts13XBPQ8g5WtgjMBW3GSXE6ZCQtpWKd3BaKikSyFL7wTD79YKSSyoawd2rpE",
  "key18": "4ifBVRWiZ9s7kjWdeJu4pGjsUb8Go4D7qwJuW23KmKRK5UB5Y5uFGFdgukFJ4MEBCGPDjVejk5diqmtcFQABEade",
  "key19": "4PEHB7VvyMgoWRfpAgJkTgu8KNkoCy3tniYmSfug65w38TsXHjogWJZeRu9oHyRAHta8gNMf4GsCtoZ3CTmLAZs3",
  "key20": "3c6aiguSeUtxVnKVcMsdxh8Tc7addyHQ6bHXHbZpTmPY9hVDBSjxqUtqDKYmvGK6wCZYyYZ9m7fCbVnV5mdvtNxb",
  "key21": "2m5hC1nJ8xGjRhT425538zhHbjor4vVb2Cht7yhXLGUotxR4FhPhjHRofYgeMqVCmtfgCJSn52dJXjMb4t9SDSDJ",
  "key22": "PEgqCNskAP77vQvuLBLML1yPMB6e8xiPizCxMkvNAURGxpuMGTjtmXepwxgicQMBuCjxTAJUp6dTte88MxWpYc8",
  "key23": "SaZ1iKzjeebj5yVk93jaZwGXvy8eHnWni28dCVw67QhxXbQXUTfrJULdKwPVHNDX3WYjnVSCMxmHvqhaV6qNLNH",
  "key24": "27i2PjPQTsdxqgTVUQWGdFr8EHqwKh86H3Ta3R4t6DxcUBrYfqxkwgNVzeNK4VCRyz3JzDLMrJsCqGfKHiZecH5k",
  "key25": "5taMFQmoVnhrtPPPfwadD84mT7Q4bUYX6H7tnbTjYDepEb2MEdBoJNa9tS2rsGMCjiRGccsC2TzT8pdcEb4XaZvM",
  "key26": "5pGoHuvPobmBJx1A3nQGFhjwQJjypegWTcRBXDtSp75Q3aGa1ByAiePBRPo6PWXkq9uKjUW17fE42ij6Tki6B4qz",
  "key27": "5ETHMSPD2VLVn4tqGtkWoaV5WDtMkB9vaUWH5bfBRcH1k21WxTvMYDeCr1jiM1buHJUdSCw8NakhppQZsXVfjBdx",
  "key28": "4MVxEGvY3BPpxWyUQKzs1u8MHe7nXgzcc8hmzSoepvwN1qaRstWEQqJzNUQysxnFjA2S5H6zoNGm2Ua3s1ASunGq",
  "key29": "5zUVQAtuw5iXNC7skn3r5YKbhbz5snhGfe7wMWrepAQQDru4eTz2pBYEYQyqAHAN63VRfbkkcYf7GFf7jtntkXab",
  "key30": "4TXNU2hKHwUwzussCbkVnU7zNQkMrp66GVXCwY2MTQ2dqcU6m1o2mVtsuXKwQSSmM1HSUnic8DJsddKjUZopkWa1",
  "key31": "4x4GvTj6Lp7bUhsyVj4bkEyJZip9iyCAJn87jHUYPoqYSBzmsrWYj5L1VwA8LnJuR6UnDrtsmAJDc8FcpiSrVLPg",
  "key32": "4J4Rtvy2z7dG3bsL64yV3v2a8C9YuBfYAHtrMMkY9pCUMi4taxjeWUccfJwbGPDpWr7pr17uxkFiNx9fc5g39a2y",
  "key33": "3715fpUcHfMJGzGHDXrQ2QgwhzoxrsikihHZQRMq7zxxaDwjUQJu2inUBzsjriuhfHcSyon8GWZdWkkv8dFNRK8C",
  "key34": "3RmRqBYV7KgQgHxcuSnJEQu37Tsyj7ZfANWr1pTJZcnyXxS9DR6kZXic9sFmdhqHQTAYW7HEH3yZ9L8RX66V2xzz",
  "key35": "4Zp937nLVx79ojZvdBfJci7tVun86K85aDwd6FXsVDgKyEEThksXpTfWTifCZJ1tbbU5EZxu7VhmXqPHx992bYiv",
  "key36": "5NBZKbAcQipavDRd1wgfaoYyBdrvp1SVADh6FwoSuGAR92fZzghzvGRi5T26d3ioNypr72xzSvzXVoSnFpgrgZrj",
  "key37": "4ShvJTreEXGNT5NmyLRdy34THryBj7QB7KD4zdTwgwrZNbpPuKz1V5qH618f7cALwY8jv7hV9Syk54jdPcavvWs3",
  "key38": "3NMygfRE2VzAqo66WTgFeQhoKZMMhapJk63bH5LWHFx6MCUDVRyFiKQP4YfKC2yJr9N2utWAygZhBFHx94sGvFfY",
  "key39": "4E6eBgsqAHHKgTNNocTp1kZWnC6s5XXRYn5DWrLdmUi1rJxYpeHU1JeJMe6zYGfk6HRcS3aAzHEFqWtsjVejWcz4",
  "key40": "3hSh6gMDvPYhPiq6X1nzraB1qmjhvXHc2Ywr6ERrAuZT2ZmjifRrwRSZ46UCSH5Eu4ZFSKwaW769dcqYqCsQwEDJ",
  "key41": "34xQPGGKg2v8Hmzpma4mYBbaL3UE83zmzyWYhUdbAsoaZv8xicaXzFvokSivtexkbhxigA2vikNH4zzjowDAg2uw",
  "key42": "44hLNpm2srEXWL5Wtsb7dMmX7NJHupdFtM6Fco5tZWMMK8CN7wyiyEZVGa7TfzENZCVEcmLib1rJVuxwp8p1LMuV",
  "key43": "5PDUku8DzDtzMBGTkZCDqB5aygF8cgsqMinbemWihBWdaYYrtCbB8Yniz31Y9dCsvEn19zBQf9HhHyhxeRXiKFum",
  "key44": "5HoG3RbEsZ5K6nfEy4r2BxJLdDEEuxUKo6jqeZVy3YS8AFxoABbNXz65B4ZTq5GAboWJsrBG6jBqhud1CVnQmtYQ",
  "key45": "4tEx3CfaaBtLEDTQJgTc4ZmmEXwht91X68vKv4ZrXiY2ivVmEb66JCDN1zMrcru2A2H5fRsfpLu4xhXfnny7q6xG",
  "key46": "5GRTePLoR98J9trP4hXTvvw9hb1rKbgSY4yYxxQc7xx5icF77ABcRsu9CyEaRyKmSmk6tRqXhC8SVtguRJ7gp3Si",
  "key47": "UsxLtykMGsmTDxQq7VhtHHSqax9no2shfVzsSWC1YusF8NECVtCnD59w7APq7nMfYfr162FZn8WHEusPqQS2QZq",
  "key48": "ArQ4CfEXFVwB493T3TPtpzBfwmYECYq98LjJ71KjrdbKUdfUU83e1QceHf6UAJ5EqkHxR6qRkTj2BEtGBaxHxHy"
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
