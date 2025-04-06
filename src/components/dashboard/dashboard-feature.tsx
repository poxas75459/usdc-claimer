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
    "3EsfaXiKdH98k626h2tQFuAQNRrmeLog3VYXXfdrGhyH9x2FvWp2mDbpuhtmFg7xzqn8yfMWk4qgM92wNWM8ccdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63P36F2PgnoopLuzHyT6HEsW7SRMX8Y15DP7EpxNNEAfFR1HP69x1TAQaA98XBMBRHy9YCLQZ3xw3A5S88tsc4AW",
  "key1": "ujFJpTvLxnKauLL4vsPjngM4GypRTbCtvuUvHnqeW8oJinXq32jj82AFr739YbmY3adqL7xrnscunub1yqvT187",
  "key2": "2JLtdv2wTiE6WTor5RF1a5aRggT5PXnYMwzH3kyKwrT4TT9kWgtA5doSqWCJ4cFwB3YBzoW5E2sPhWnrY7Pmtugu",
  "key3": "5fyHAzxpopQebX6FR9HPSktgFmLdRTLQBV1rTRns4wYc6euJsjrXMQGT1nGx1XBakHjW9wmMagZD4p9po9gBSEUR",
  "key4": "3RnrqgjTUL1vCjuxxTxPMXt6mnmZDx9Fyodrc2kzx61sCu229qxzqdkZyNtUJv2Xpiy3neKsdzaX1ieSWzYNUWD8",
  "key5": "K72a5Ww5yFNZkjfv7JSfVKwDWRJ5GdzYG6mr8LyzLW4LnNL3pHvgArNMYFujw5VtC1s5uDfUoURL52sUF1HjaBZ",
  "key6": "5oSsZhCJhJtjSWNwovSjRMZnwVvd1BYNHEdAHARYmwDguqozGqK79dXy2sUeqXC66AMzK7JVVARrHxBLjsCnK5Vg",
  "key7": "5Y2Z8azrrurtCEscTZbb8ovcpphYNE43Y1WbomQiNncafqWwRwvJPq8BzQJBA77rCUqEQm3rBTssgvTEwkaPaz9Z",
  "key8": "4jxBUrafdPXjic5ej4iVqvrcCi3G8fLyP38FHhyqng4WLT75JJNjk5zbdg4wjpCrLMu9TTdcz5VqK3T1WzW3XTDJ",
  "key9": "4UBuKL34oxhrYVd5NVm9Msbyzpi1kQTkJX74AyQNf2WBZPY7H3Jd2MD2kLvcTzQRCVZ6n8fV6UtSB2pd8PGKsamQ",
  "key10": "2nCbGmnDoMdCKpwfRBp9V6Y9xHdNr4b7amJcoAoSGxtDTRpy2CC865tdWhDWzkjzWnoZXPmmwXx7ySfbMfyEiHLk",
  "key11": "TYm7Pmy79LrAuzNsgn4WDrxZMfTpHaTBrmJGFAtanto5wCgYd2F4eVBFwV7mNk3ivvMyzRkvYFcarhQQpqGXxJC",
  "key12": "5qHoBQdnHcLotGm9eEFUDCzrGGcgKTWSDPa5fwnaXaAcwdC8JymPDJmoLkvqzoMscSfQU5BMNf8K3sT7LhHDo6Z4",
  "key13": "r5xPYJAreKxaeEsJxM3Tr3SZNwBxRTF1XbYfrwLqoXWznFySXENzWV3jyG2B8ChaJw1HvRtqDiS1R9TuAYWNbXL",
  "key14": "2J5hU7PcrSt192XaP9uHCJss2KgCYQDPWkM7HDsi4gnaL8jmjzG3AUWRHRauFTgLU7kMH68QwNuV1DDnff7WvaP1",
  "key15": "4cRqwmjBFoAW2Wp4fz7sLHPdA8eTiMWhinLLRZ5fdNf6FWFGaNRpQrht5ktB8YF1Q9rKGvJve4X8duKfn7PiD3yb",
  "key16": "2BfSs1e31ZTgqUHCPt3jvnh5hQNn44ZTYto9K4Ge2tVjVRC8sJscov7k45VbJChkvspMwYWowS6bhJuzmzAJ5j9s",
  "key17": "4mgsV7MXRfET9yMN4UqdBmSXPixNXRRgfwzKuTSfhwwttDtyXXeSfRTUrqK251aZtqRY6mK5X5myAY472SQRhcHV",
  "key18": "3LQUqCcWRFtgiCJNr8PZrSeZFDsENMBB9EvzZBUAkhd9HsyAvgWGJwTLxgJ55bgrFL3Yrxwg8Dxxofv5cAYNpDXr",
  "key19": "4Usm72CUwt8vVA7qfZSi9nV9uw5Dka14HfGpsRRsB9DARfFVWUQ6jgXL3P7nznvVYgjGWCBNaFs2dtgx8qiQmp9H",
  "key20": "34sfJeMdfwM7S7TNCHxM7Bt72noLsimTXTNNAL9TJGdkk6KqxGmU2UgSPVUKcSScmpTrnaSf2MBNMhcSpyyfKAom",
  "key21": "MeXgxSLdnAHXceKQfu4oTnZGaLNMF8LaAXgDDZDY4CPutH7qA6Cs5PhkfBrukhowhAFwJcDg34KuCVMefrkMKz1",
  "key22": "nYnZPMSxdGhJpL4qKQa4fy1MkXPJn3jXienMVrEbS83mKBzxLNEDqLapJpxivwRcX7EAUvjyuCFSMJxxH5kJg5P",
  "key23": "9Q1VewG2NVMbvnjW2aqBqJo8ym6hJDiqwgdnFycKUAtquXkBEsWr6UrS8tBN5BR6JNiVsZ9q8fWvNxvTFzgAp7h",
  "key24": "3AS4eAq1rsmv6f54Gk7GaRtteJYMiHQkjeRzRAwer3TXAAfEgDx941JYG7riKCjbRWzLK6c6QbUiCFB2XSpreEjY",
  "key25": "53NWe54VJFAqyrjaMyu9egQzw4wLjEa1vbN1uVv7PHzAbBFPSjX91eyW1ApzQwZ9r5nhAPTc1Jzytdkep1uQswaJ",
  "key26": "3KZGXw8Wjcoqj3ePRNqmwb1nyvEtsFrPguHYtcVgMAmPPY2ErQjF3286NdKyo3s3Uin4H65rfhH228h7X3mT5gCh",
  "key27": "3PptHafboRaX3snmNmPpdd8SNrPBDtLJfC8JQoUFWcsHoZBK9iMH79cBfFXkXovQNYJFtDKQqr2WThAAY91qRjJD",
  "key28": "j1cN8mZvQL1xgs7XVvwfsn49k3GEttXPoRRkoCuCqAXmMV4FKwVi2gzSybpUoiGxUKBqhEw2Jt2TVZ9BoTRAPxS",
  "key29": "2FNm1phS5J5U8enMzBBKiNSgzANK4zrwQkGzTnjqPzdJXMF8uZ1wD9dQWn5N6deMkZbi9CyrXaamKW4ZxxCtiaQr",
  "key30": "i5icPy4hSX4Zq6pey85mEjvT1f5EkDKSAPXAK2c8pvLqR3uMh23n5PUUrRotb4SqWKLMSXFdwcS4epapJ2fvzLe",
  "key31": "3cSz3Q2yJUvsvpGSBavS3rCreivifNcFxcigTXMJNPP3sSkfXquCfEWdXnp6hoDJfWrydjDqGpTnaqSaP2GnbPx3",
  "key32": "3mn8HJ6yeza7jDHNsLPsbqWTTCUdq7BT4EkL1H2naPNP78XnWYNV9eiY49BkcVZ2gALFNRMurGVnU4xG6y8zeUa2",
  "key33": "2x2p6MvxPww4YPDFwUHEgPTE8gbwjpVwfTo6uGo2rd3tjtA1GBCptwchUyahrVe3rPoBut2uvNkYU5Z4FEA4hqA",
  "key34": "3YtafWfmQ6nutfirvuWwK2ab2ErwabgP9j4R68gzpMbhZaMu2KQ5Y5g1iPHYHmSjCtcvQChHiDhWrP2Ae15Q3dct",
  "key35": "UXmi8MyqErzBfcen8yvMK7pBDFGsfi5o55TCBHdvCjzEVLEoy4a9emr8hbYoFdh9kpZznWHtCXbbrfH1yUx5Acf"
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
