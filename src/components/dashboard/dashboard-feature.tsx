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
    "3Lu21deSiGVCCipnxmTtFCXMW1PTrZVFfBsJjPEcXP1U1bvKmdkb7PsCR1fXEYeqvn5iAvfeLxaC1hzXwYUEBvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wShfDAeRf9yBe6cbmZJTJvWvoT5QCiSW98d9dSQ9F9wvmgTiowyDdPKoyiJYNXd7xWyUjgEVD2mcdzEWfgj1pJp",
  "key1": "4aPV5uzA5hMZxqMKMzMNzR3DK95ZHNqLB9Mbm7dskEimoYpf8YTMyWBWjvEKq7X8Q3veqa8j7E1EGYxh2biSTayD",
  "key2": "4jxJKXHGExpD5RpdRMap2uQoPbRfHwtusWN3hgJA5xLKcCraSjGb1pkExC1wFxFLzKfbDDnf7ZXdcTXebrXwzHPS",
  "key3": "28vt1uGm8PBiWqtPF9CQhmUXsWjxTSJQdi2oEELVVH1GSd3RJom5H84R8CGEw4znPPUppCvaD3bt43F8XizUqEMX",
  "key4": "4FWbozDULMt7brsFKfixZKhfiDNwuiBhMZL65w2Jzk22LVWRMbAMGhWtyEF2xJrphf3ZiVH9B7YFTDJgHKwuMGd1",
  "key5": "23FqzAuXEAHkfWccNqqT3Y7Ggo9s84jScg6NXoTAmEsBhhC6yrzvSFMkPgYtogq2HGeNj4Sgh3uRCdxfWMx3c78u",
  "key6": "2NZMKYtRjTZtXYxjTMyMVacPruYhXX117Pusc5ZUYTrTwiX1e9w8xX4fyz4AwUAPxpvkZCdRXBKsQRoo6UjhxxEz",
  "key7": "5dFgZjqYSuUUPbGsCdLprMCRhhjfFGWVLrwSdGVzaUGgrXAfrQvSvEo37QLDRBRzhkFEe2Wn2tjyyYL9d6NbiRq2",
  "key8": "eZC47jSb36UFBpCF2CMYfggrMN7FrP734wrFJE1nZsoujQXvBtVBwV855S8ZnMTHXnWGCCwnuqJVg6LRgzMKLfk",
  "key9": "6fo5Qxn1Txkur374uYRkCduzkrEJxvB6sZjok88Y7q5jRW1kURQi6UwKH9rBdCFPTgrZzvSJDTEzPAZ7Tcu2yUt",
  "key10": "5jYkp52wxJEkG4iQxDi2GgrfAoSoZN4QRpWupLCejAyWCehi3oqkgqfELx5aCiQnKt1UcpXryFp5FBPMBzW99TE4",
  "key11": "5aDUu9ybFa6RVZFjachoJ2omJzeyCiFgjwas96ehBDtuVedx9pyoSMRLcrrQhCPGiaXNdWhs71qgbXfqpWDBZnzd",
  "key12": "4gUi3EdfyywG2QPMFzfA4HpG569Q3wJJC6WYzNtkeFRQiL9Kk35BkyS8bWSo5jR7tS5vgH4P2pc4Ax9uZMMeAhCi",
  "key13": "DY5Pcswix44cfqN6QmSVAta8WbXUipkWCXyMmUbvM3GWF751zy1ExMHvZN2gry7zouVfYj8CDrQpFtsC1dtN4Ys",
  "key14": "2J4SC5ZpxSHCgjwCYq5yuV25hAZW838CofhoMWNFvU49XCnSGeaEcZyP9SiuYQ7T17r177Zf3dhbsv1MYpYR4mtH",
  "key15": "4wH2w1uqxDqKgBDpyFcZgC7TmeA8KQTEuA4Nx4MbreRMKX6FtFU9HWcr82Ve2jVcXWb8V1HdZ6W31B6znFiL6wkb",
  "key16": "2Qprhygb3yyKjaBuDsBTQhkTTNqqD9eji6yQuj1M2TgsnvcFBBmW4zaFXfC4VP3PwrsRzQnVPiQwAHmzLRpxbjWb",
  "key17": "2SMUCFWHQ8kb6f7nXfuAJXTRc2TFGmfw7dubai41CgC6i53GZjYzrQWS5CJKfymzqJogRBDDakmhbXjyohKPXwpX",
  "key18": "2cgwuZWYUz1frB3DbEMTPcn9U8MMz7vTcu79LNNWZArcEYaLK66JruCb1neYXv6pQ82RqP3GiNK3QrUqZcopfKjm",
  "key19": "3gmPXZbvXdffhVquGpqr4e6H4KZ8BatkCrQAsqEauHpmEtcwPHnc31ZeaFomqmbU2MtSm6Fnm85Dotx2g1KSBJCG",
  "key20": "38oisobkFCKk2rMzNWTxYCETt6cffX8c4LzpbW92Ao52oZQcUESYy2y8Xm5V1GyF85WvugkWhkvxwoeox3DDXQeW",
  "key21": "2jj3HKYTr4KBGmhTPX4ZWc4UnJh8EnjX4mPEA6K5vtdiofJJYz5MCf8Wj3U5EzrkrmTHeamJ6WQkoCudLSN8dkYv",
  "key22": "LE5tE5PFvMfNhqPfWj7sknMwvogaL71kfNGAwAjk8AUmCSnnm6EWusrAWLa7RqDMswgRAMrUSf2byFoSERppH8m",
  "key23": "2mFXRXSqSBM9ViihqMxmvmheqgDGpqk5C5j6GmfZyehE952cZmp6wie4u6jVWgyXXTTEUgn2XUa9pR5gEoK3XATf",
  "key24": "3ykb8kD6Qcp2mNqnfq3bFT8QRcedZBh1BxXGonCz3uMC8bg8GRFG24hbqqwSwPGzWq4RPjE87KSE1RjdQfQGtjwa",
  "key25": "Jpx91hqtTfsw1M8du4nRFvfmh1W1JaZ5iBDSymYayPvAD7kBuyDmAU49mqUQzy1PuM1K6pBqYadjaYVMkqSq6SM",
  "key26": "3Eqotz4Zxzo6jfmpZd3dgif7bUiprHp7dxbnyYeU4nfQ7qCq9wPouUxEi1uFVpiEFfhb8bdYd9FMfmfjexuok69W",
  "key27": "5wiWSQL1DTNA5fZPo9bYVSEY3rjRkuN8UFPN9bb9w3vjRtSNn5my5uJp8oBPaPsU29XHT2A1XNNwfndcLuEcLUk6",
  "key28": "5EvNMBK8G6N9sM1kATSU8NiANi7xXDJK2obZc5wfRh4pWnN1J8pX5K1ejdp7Mi697fuwbtztPpFAXcC1Zmk6a1GA",
  "key29": "5r99J8AMFV9BPit2Ds3sGLEHMB6Ms4LHLgNG9U1C3Ck9i3zF7MS8gpQnddQ848bXec3oh1umT9ZDEPDn4SgFC4Fg",
  "key30": "3gp8yR7W4MT54BQraf87HSo7UCRxTa98eDLe56KhQb4wau1SNhQv6HvpmhhZDt2n7CubfWaQc47sD9nrhhMAeNUz",
  "key31": "3b5WjizZPzMV98w4bbVJEsJ4zFyFLzD6ZBQ9VZTUkDEqbBBnQYHadr1ekmqNYDVywKhHJXZ4bcdfbqYmSGCWbgCw",
  "key32": "5WDtUXnmUQutEUE2KZmWnx7HDS15JqM3moLGaKgjkNuzp2ErT5m7NF2oTfMxXarT5iYJ9gQ75vxAT2Toia8mG3Rb",
  "key33": "5QnntsbhynSZaw7hjPQifXHRS21vQ8qbBzJQuKUN8qGLYMGGKHtsrGccjUSHzb6Qcsw8RxNbEk9ictwHhbcuiexw",
  "key34": "4abKGm1PfQ2st3LAzWesYyMbvrsfMYEPUNrTJMR3EP5aS67Lvy8sTs875vWRHfUXSE8LFJL9V3jE7rcrSxjtrgCU",
  "key35": "fEfv8TmLQSqqHnoXHDtqBopqVdpzC9QvtxmW5sESivA5TQPrjHkiqJ47HEh34ei4CxnvSqLp5hNYtRGpXFJ4nxy",
  "key36": "4xMm6JpiaKuGfGTAaC8DxY5w8b4DcJCgWYHsuSWJicKJmZqk3JNK4HrGfUZDnCgwVjAF4dSTRCFDZAFQHwtgMS64",
  "key37": "3FPJzSGxdszNBbeCU7ZmRGaF4q95hNiSHtQEyo9ACV5G1gx6cjfHNFZmaVxNaQy1KmLkeF12xX8ioAQhr4DNUQeB",
  "key38": "4mSsbErW3W3eE66NBbB1R6FTSpB31vqFhu3vVzugbWF6YiuYy8sCqeqaCwf5WTZhpRS5TAueNAym31v32ftjGjFZ",
  "key39": "wRoRKh3Ww5dD1PT4fRihyYSQJLtnYWWScHX4NZ4inmcJyJQcS4ENLGJheoSYf2Fs1H7wcgLih3YRRGa18WSKefs",
  "key40": "3jJ6vYvAcVwuXBB4GRHZsnQMct7aTVcL2Ztq4DAbmk6VS94ySid7oJzw2fkNG3AudUtbaQ9dcHyayjNUMH32gH7r",
  "key41": "2eteRebSnHqRC21JsLASHy5Pt9urkV2ZXCT4AkpPpa7gVS6T371sGeMe6amvWNDCt5aohZiSVci2u9dhQR5vvwi4",
  "key42": "3EjgH48EN83j9sQUokUa5Lv8K7v8XdAHqPc7AKYVYa3m1RnLjHEvmzVzLfzEKToPrK6X1WNdbq6jpCFaL2FJdYsj",
  "key43": "58E3YEGrAs1LLnxxH1tW9Z6FiiiB7UXJR9Wrh3RGfWKSUxbKEo8Kpmrg3ExFNT3QNcmcGWwgEJh2pq3h6SBt1pQw"
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
