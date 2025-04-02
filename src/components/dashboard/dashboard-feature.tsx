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
    "2ZQrDwBt5STMqbppSez7rXZt2FMcr4JwLqUfP6XLyX11AEQfqGatBwBprBpU73ruzf6BzKkjGVhG2Hi4SaxEQJbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7XTQSLZ6pLWUkfQMFs4ohAMVopwZLYA2Yw9SfXvhAYuyxRtdL4oCEpPreWGeD4Xq88Yt7am8GsPrdmswGhf283o",
  "key1": "5busD1aGpHXrYJhZZWaoL2fsctfXj4NRZs7mnyQJ4kYQyY2u2XzY79fQciMzJxt8Kvqqy2pjK55fDAW3LkagCJhQ",
  "key2": "E2Qc1XeAdgxVQN7XnWa5gzASvMRsmUzBmxjM1F6qD8mYKrGgDsnDpkXQzo3kzmYsGntNUP7GPLWNWJo9qnpDQKt",
  "key3": "5iNnXeZEVBPyw1y3EuGtynWhGbn2DrHL4VzmJofGntRtTNDuQ8wh819ZoJKf1Mon9qGgzMAHVMEf9np4cYZCfKPq",
  "key4": "56zEvLpm9TNe1VN3fVQJYj2BaAZ3NMzwBm7oghP2kjMtPH64s5a6CpZFHrEHzn4q6mohLHYxwqkTSxepcitZCRiC",
  "key5": "U4rgMbyFxcTw7j232Ju8TenaXRUiuAryqpsdSHEUYHmvwXPW1U98THCrxufydjRR6vuH3qwm5s7HFL1nEQBmczG",
  "key6": "2hyNMgMVJKqJVUEEC19M13wJMob5vigH8HJRnmJU8VrN8N1HfN3QFMHnokr3h7mHXzBgTCPt4WW4uEe3yML4gTij",
  "key7": "5JLjhgu8gcxPCEa5wKDgW18Lpturhoq2B1XaiPr1t9na3DBZoLRPp8nThPKzq1FCsGouDSNntJ63TTvayBFKYWjK",
  "key8": "4tcMr5fL1PbxVjHT12KTpJgFYZTtK5R5g3cYJbSkQbcU5mYQREoUSzJ5RP7wxkS4ZaWs7e1Y5giaUPkKjtkTmTvf",
  "key9": "48c5PBVeKpageyD9stc3938vWdF5T7pbNENnBKieNgaUmMYBef1FNWGhjm7XRcTVo2L6qrNFw3cqsLtwQsN1YSea",
  "key10": "3AzbysnvXHujDHHfGtskiParerpmr157Z1dTbzvDSatZVTF6ZssWyzFcdcPw3nzBMVjhd3VnYXCj7GWrHcvbzJaZ",
  "key11": "4mUQe1YPP1sW7ZUJpMbAVuQ3TWck2NXCGZThVSb4aRsQSCs3Nufo8DZV3jz2tnmHoWSC5g27i983o7o14ybQ2pxm",
  "key12": "5xNGAD6a71WfdHdSjcGfdWP5rpkZSoh8n2Y3UG28b76Sw7fzseYZpBZUDA1zHtE5q5QTp7y7aEXoMtoAJrY4e4ir",
  "key13": "5QR1qZGUEWiSZ3ADginDT4TpauvCSxHzyrWp91dDzhWg28pLxzg4jLBexgT1R7jSibNkTN6UzRYfdiycwRrAE2o8",
  "key14": "61tfKgb6gmZVaWRJwBxn4p7KuGiU8xys9ZTrPScTNebMEtQKns7b5ixfm9cNS4mC7Wu3LBKnH7NKmXfZGj1GwAnH",
  "key15": "62ZSg1xivVHzibRGHP9pwYoDUZjvbniuGQ5gHkYSkNMnnzbKLCndaYWp7HKQur6jqiYYcBiorySkwCs74LXen2rP",
  "key16": "28KNewjDAa9LnzKGfw9inrmif4hmUnDC77gYVXy9PWAJ7irTS356Hibj9sqpeLyP17ceqXmd8x8jKLwF3qtoVdE7",
  "key17": "5WWhwbL8gN5aq6sV4bB7Nq4SiUpm7nZPFePNfJoKdsiaFUcR3XFMGntdNjmL1ZiqXmQLzBxHitt5xGhX2RkjGarG",
  "key18": "2W54qEYpecs4QMKa6DsMYARJD2Q3b5ukfGLeeNZjdDkEbgjWpvNJngnaWwgWNhmp8N7Fo8GKpFVZu2dm1nYMMC8r",
  "key19": "2TRyCQKvMbY8scho8ze8bJAZK7oymUTYHVSk9XFwqdrvhK6GAe6bVRmKPWvLNHtVKt6DyjouUJbieee3XXHyYG8M",
  "key20": "36D1uW87qxs4QoGs5pTEKRLHV7CMactEHfmh8tgcAHjEEmoozt5bNBsRUk12jo7ewiJUFuR3VJ4mHEmec1H1xWne",
  "key21": "4jQjVLAX6DpXBw7BP9NiXUuGUwKpvk4jbvhnHkSZTopAeGHfevvwxJ2tDG7farBZKHpidJDJX1Bx9S5uuGsWn6nf",
  "key22": "4YkH2BjN6J72vWhSJp6ghQqiTWQTtKUJXzr5cBrL8UG2bWoJ5xiyfmGkPCxk8RUahfWPTz1rvETjXX2RvDjR4Jqe",
  "key23": "3FxcUTp8qPVmSdsJ8X8hqU1rLtHVNoiq8UaeE2HoGykpWAgSXtrGiKCDuGrsEkcTAkTHu85QL8SkrCzwVyi7pZSh",
  "key24": "SkpEdyhKFEwgzac2QvCcBmTg5XyG25nTiNUNjQLCkC4MAgAcByzLA5RbsmGf4U2sutUJoT5Q2NRWWbnEAxC5Jqr",
  "key25": "VpM3WMUtcVDwcCK2gphufuzYyYB5tCsHMcikyRf7zXu6V8hHHCk3fSK57XbMH6vQguynvuXH4o4Pzzei23tYRnM",
  "key26": "42DJYggetDBRxHSDd83Y9JWsvsaz7CWAfaRCDuRP48DXB8LwRDxcR2tZciLEDY1kKgCktzZMYuB2Bv9VQ97o4ahM",
  "key27": "4rM6kYgRnNyw7oNEreeWsNVyta6sAGnmyvdGxeB1MwtkEFmLuFNQ1bGRLewrFfdBW352GihPaPVzFtXdfGJTfGew"
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
