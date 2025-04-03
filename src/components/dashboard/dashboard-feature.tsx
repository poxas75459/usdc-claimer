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
    "3fPxQCHqpVerjwKZko5wzN4kS9xizX9NUwgW6rfwVgMgreaAQ3MGCPLpABBAohKSdZgmsFxGqkBPsoeFGteFs5Lr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54a2kY4LTNzMZb7PnSUrRXc4axwTYQGwCM5HJCUPbaLNSPnjgtE3jeyjCTBwoH9LWMcW5zKrN9nos7pm7znqm5JR",
  "key1": "2MyAFQuUBeRTFimqHRJdHjVE1ej6EJVT635NzYHy1Ns1pvjBHw6g8uFC4Ccxutbmrr2FHqkT9JimLvXBi7T27yiK",
  "key2": "yiyVbsZQa5QvSgBTawskwD7Ui7AhMdre8MY3AsiA77iqxsDPASYedaFzXSjAiW3qvdETnAm2VjjTCCYysUwGkky",
  "key3": "2KNK9tRgNcxDBazk1Z94887LUaBunxAh4iHsDLmNELRESt6mKRsazAYbRapVNwcAR5vsu6TGM9X8TLghNdwBEvjW",
  "key4": "3FzdCUoVvSgxVZT8zBYdVHw3Lnw1ohRBaZA77SrYXTCNzd7gUzGjbbTca4wThqACmfkvFrARE1M3AMdsHni8eVCp",
  "key5": "2zdh4n6y3puwbx53H5hePkfXQ1gAKkfaHiuuXY1p5djh1J5dncygvsVXkhZZcgr341yFXzN9FcAX262tELwtAWmq",
  "key6": "5yNuewhRY2Dc78M1m8J1SEdorNMGGAr8HuFDMKySEm97mMenKCzYm5Xjh1nNcxTUxZyVuyihLWijuH6UxjQKerBu",
  "key7": "3F3kDXRq9BV43W8RtMzfXqSaJh9scMCnpFNuT9KH4rvt8U8oA1dLcvwhFq6Ci2XBG3EuTgYJ7JJdnx29cPVLCirb",
  "key8": "uRnH5rpYkVKDmwoDEviaaftfEyGbteZyWEfSnaNHxuv2dBF9Z6KpEsE2Mc86bQhxPhDjyEDuKEtLnnr37BmW649",
  "key9": "67UuUQwRjfaMgjPidQziW9BSKrQxC175bHBntTstTGY1cnwG2FuRwsuZjNnTFoCAYw8gForhFzSCzmfQubtfmCCx",
  "key10": "GHwpZv2pP967SNLeyQAwe6NRM2nBzaCF2SXtnEHkJ6TGJhy9YhwCczU81umAzJzABRdNEjfUueZppHG2TxNYgT4",
  "key11": "4avhzHTCX7f5NKrGLTyoNTawdzUyUPX6FFWvkc6uAwB9v5rLX4a5X27MX5SfeUrcKhDWewtGdddYt9hgJi2GoK7n",
  "key12": "3V2H4CBHNDELZLukFSzXr2ydUfd2wd8dEGgeN2tGmXsGgJRBUdNLQGQPWnb3pnmk1XH64tSbesjccaSPgsbRa3Tj",
  "key13": "5RRUAtJVAEoCYdYG7vN5r4df4F8WzaW2g77nWGT1ESKUAU8NopFFYYg538xxBPMb5LfMQuynsyPCXdrtCFdRykNe",
  "key14": "34dNC8uhBzsf9aZ1xd5n9Gt36bc1V9MgxU7iZMv9BdKHg9FV9EZ3bLJZm5eWKyrKi5gYoSa95SsybVHzaKG8UCMo",
  "key15": "51zgewDV8jU8BvZ9AsF4fXWB5WxVKuHp96PyJBRcacUweDgwN4EXUzYFiwpWqey1DJcf8ccZQAFyc5gz6UbD3EvJ",
  "key16": "anMgVRpRj7dP3iUHejx9Y9PfK8niEhRovcDF2ou7Dc7p6bycpa7YeUszUaXaUZrKWRzebjhXSiSwBjoJygkEcd3",
  "key17": "2oDhThJDX4vaioEvVD9X3vyMdxBY4cWuKhzM7X5RxRqZMjdMdnLPd4pcRy4mxX4QynMUqoFZXM7JgtMFsxEfkEpg",
  "key18": "5NY88KgTSp6hVz3NmaTADtvReAa7iQvAumwZWsUkqYqjAT9HcC34ATPaDbDvQcxhy3b1HemNDq5uuGHtsSdkoEaQ",
  "key19": "7RNLb1UZbLj6tYYp6EaqAhfJTDCKmtDB3d4KoYM4SWbvtLi73783bEE6o94WoWxJ6a7q1GQPNnU4MtFHUw4uNN8",
  "key20": "4JFGzpG7AaUcH1RdE7uCefjVJyom33S4HUDEzBn3tr3xwEBjoziuv2po6LX5urTr4jd5N4xxtVVWyXKCumUg23dF",
  "key21": "57gaKCkLMjWgjzaqK4oTtcKeULruHjSqKSnqdoxnZRvJXSt7AxjbsjhayTNi3D8A517RJyVZxiYDj7xdR9BdJfTE",
  "key22": "2PL1BHqZKjTzHQi9jNka3LYRV5BCkaTitsrEDLGb3F8fPpNKndjen2STruaEFRH6kT2TneRFkkqMPBm752Q5bddb",
  "key23": "2Pp47KoQtn41b9d5vd6fVkQsWswLeAGUCaXVUJHME3jQuRPH6mpq8Ea9AThvmMcgRME7mpeqapAxCN1sUb3ziTg7",
  "key24": "sfYwzU8WME7tbqtLNtioMLvWAHtYMQeZyxXsC9pKVLjfjUT9HCHLsB75MABQU77JqctecG6oM4JdX3chSWatMXU",
  "key25": "54WqGQhv66gKUixGaoxAd5TKhVfsf1oUgp6y5Dk2TncibjqokphdPmaqzdjqpSxK9xs7H4RvqApE6MdhJiGw9JKw",
  "key26": "5dQiEkaoQRXxgqT9umXRTQB6qQHtZcyGQfa64497kPsk9WdgTo9ze8Wyzbo84beBXfoD7md9xBiGJnCE9jjRwVPC",
  "key27": "3TJJ2AQaeDYtrg2sr6zhbzkfi49HeNCs86pn5bqwh5Jp6g7a6ishmvXn3WebzQTDCGyBt5zL6G2ipHbTjsJeGbMs",
  "key28": "3vj1bj9jwwNT4rDJafu8CVqyTYQ13s26EtY9NcndqTvgqsBFuBAfWH8pKRYENXvpG5TrBjZt6AtGisqP1Pmfy8bG",
  "key29": "3RhmWPH92SbieHYyaBjB6gELsH7nfub82e5nmRCv7S3mgtoMEPjDaGErW2s9VsQg9PngMTdy5UjrZ3CBRe8mXFh7",
  "key30": "29j9MyU2ku9VZLNiYJnARnnXNCj6YFiXhTbsjivcS6Gn8Uyg1P5funiQ9dVNz3Czgiy41RXJdknNuHe5NsfaSAQw",
  "key31": "3LAQaPHjr2fVyBNNwBmdWsVHdAaFYv2X2EFKBZfe4C7GAvSBhYwFULRvoh9t4yKkCXksk3ritzd7pSDJdfHpM3u6",
  "key32": "5geBLNYDVaP1ih4ZMY7J71yrZEnnv5XMVK99ov5EmSoohxLH1aT5NqZF2cej81K1jQAhdGTs7uGgRETWa5w1kdiC",
  "key33": "3CeDKUHGNu2SyZNqGMvFe4JfaCuua8T6ANX4iB2LkXyu1GqgsK6YPkYZiLUKEFoZJwGDS7ybvpyyU9tAr7wx6YR3",
  "key34": "5pgvzfDagwnHVkZFYaym9kxboFskR8YmBR9Ptq6BCfKr47bnoRvY2cx4qRY7exrupjWApLFizWy7vQD2NCpgcxry"
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
