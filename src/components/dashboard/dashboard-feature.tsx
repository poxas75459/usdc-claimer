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
    "2iD3eZSj274dK7AM88G7dnYLxFXULtWdg1aYgwkUTcazVniTrAu6q4LoDkACy9Q3n4vMdZXdkFq2WoAen15uaSf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jRp7jMKFAfKyzC77M3Fw2oJU4MyQKK4rvRYhEHimXM7c86mz1RGpAHEBtBUuNbwgi1C3pGnXbHsigTbw5hErAfE",
  "key1": "5R1A36oRFUvpFMYTuSp8ZkA93EeRiDZeR1etdEQ8kyMQEEjnRmpuapKy2kaNxf3PQvhX8m68rrMXMA4MWkakWsLx",
  "key2": "5adbsViNv1WsvdKoYQPrn63BsWpsxe9wuJK22jmQQC3Q1UbRJQmZC8ue9ErSf8Z5CH6FJGBv3NbLGqybaLVJMjsC",
  "key3": "5dipCi1sUpCJdJD4JgeXe8VJsCqwxmCFJZJMMpgkcyLCwzszcRLea146xXXA4UARy5QETikyxMRhMFy2hjUK4NDR",
  "key4": "5Vv1eJY8KSH1K6vzJgy2PKtTqckRdxjzzDjQCzV7cgBUpPGB4AqEqYd8544PH4dP5UyXuuawJ5iq2hqZJRHZmtH7",
  "key5": "5Pzt5ZZCxmDo41bRnuoAMf8j74cPZCwHzzyLBEv5qiXNwhQs3X2Yz7k7qDvwar8ysksJaGx1LbN8hiBBWrui83Lv",
  "key6": "5sCpAevrv8Y7LniVqzbCKf4wupjASBqW996FjttRFZW4UjYRkxZkMzcoEtVjsUuS2RS16dWHRNzZm85Dt3wz81sq",
  "key7": "4aCPjA46Ft87TuZERM3bXhDBqHKDtPcS7EZZySkD8jo7VKoS4G3GdhNSwC2Tnvkg1SAzWNTvtKMH9gPbBsRgWwPy",
  "key8": "5SLR6BGnuf4MWUuEQYqYS6eK7y5J8GtCHJGgz81f5GQbpQeJDneHWXMAQU4Xw1Udxo4qMhYEX3iZBLq9cfgnPJfL",
  "key9": "b29XmgMHUS8dia3cQBiQM6K2PYjdaiXvUvkfzpCZcq2yLFuesavnJWtoFT7XUR4Rv3BziumqGdu5waTR9XkAy4C",
  "key10": "3JHzpn6iNUA6SE8JzXPrDDu7zzj9bU9ngxJTNyQuCXn6cThmJ93UVaBv8qmrDYLU88mFftmSbUR8hwVhNAxXWgqs",
  "key11": "33NjfVWkiFwcyz2LQozakTKXnyMezYPsYNPwMWsikMpiVxPaoX4QWr8RdP96wwqbr3Dp11LgFRYeaEHYuhecEMGr",
  "key12": "xJTpL4LKSosj7WiTBxB1qUxV8Jsm7ZxzaPT3JUrCCXGBwP21B1zQ8Rp8orQ33yFe7Te84u5H1nJdJGuo5ZaKHJq",
  "key13": "GD3V1S5PNtQ2125S72tCMZWcZo6DHTP2mgDc31eTbpX7L5JfePwW7qW8rtPwjp6KCbpNB8pVNUajcYCpHDCrb2H",
  "key14": "rs4LFFzDuHJcFm1b8eE9CKomwaepTvBxy4ai1XAshuQbTj4Shqj7U7P9irANUqiPpwTGgxCFJD7dt3Rxtfik569",
  "key15": "3K48ic7VxfF81SiYT65rJY5VwNoW4ZiVrUMBn4GJDk4gk9rBo79onHC34jRQsMfygkLAbkVS3VCeSL2xx5g9iRVm",
  "key16": "457T1XxLvLH7Qp8A16Lfk3T7RoDAtLPBGFA5ZYN4bkiBLyrzzZAZPgzj6bzF67g6qeJEzHH2Mi4BCPW5kajbiSKk",
  "key17": "4azhG41uJyLbKqfcjWSP9gTmPALMAbKmy97d2NLfVAuxBGvdoC3XxyL6fCPShicqWXucD647es1hBVCtQqjyr5g8",
  "key18": "2DZh4GQXfeFthiNdQAA531T9WpuzRb5VUNofZ7EKh5vN7JVrX3zJDnh9jHqnNcMR1BkAYsRbma7NkrD3usN5BeLv",
  "key19": "4ssNELmpNvTU6QQcCzQKZ7e4hvpH29HLdaWm1WbXUCdEKH1zwEWdz9ZiHqUKuS3HQp11qyQnBmXif47F3TpScPZv",
  "key20": "HUfs6sFWoULxRSQbM2mvkQUkNs5y9GpVPWLWeVy1Q5uZyWuFeGmrzbBuSZNWjHufuyKoFCvhdwyseUdGePCvMHh",
  "key21": "2v7UCDgZttKeGnx1Ni5MV9Mp93CXFgdQM4QwmfPp6KZ1bKGYPECiSd2BABjMGwjN9ohjSnKApTj88Je7zYEkVG6B",
  "key22": "2mp2AkHRV7juPjZjfaiy2jzQ2PU9qqeyKXqk1U45Mma77Wbwcx9DCqutkTWiLXGd5kfvtbUpUTi2j5nWSsvkYpwj",
  "key23": "5rC1DcpFqsJDwJLCdWE7RVft9EPvobWxcL1ZJZVxRJ8jbRGmx7rdrHkgHb9WK6nQ2sbK2sWyfdKvDeCntMbAjY71",
  "key24": "5ZVPKy11Em3bt8XEw7sJUTm8GJMQy5iy856RUqqjaKXXH2WyNsMf7VePJqTS7ksFM8AtC67CsooZPg11VwC2RLH4",
  "key25": "tt6TK89NedWGgSxcTBZLGkpvZJeKiATJ6hLaTqZHT8Z6E4dEdDjfM6rcgP4iJVBANZM3ZcRSUUeMKDH3tu7Z9MN",
  "key26": "sw3esWQ1knnuPLUbFgGsfQAyUJmPjuQ7wFWMuGvLfEu6sDufAcRreCWhparzpCm6xA6mv2gFBiReXFAYp9uamzK",
  "key27": "39GwU1GmQsjgLv6cxwQRJqqqTnpi4QJxbjowhiFXiB5JgVQsrKyWpfPzbLP64i8SwoK1Xmx9utq98kdjNYB4Mx4h",
  "key28": "3TxehoAQTGshumZY9nM63tUAnqS4wqwKBQjYfHfxUmNRPGxf17Pb4gApbP891xR13Ffhnays3FrVKKw4UPfJMqW2",
  "key29": "mqaVoUMZTy9tTzap8TqEqDx1dZczPiAp6q79USQwMSFXct44s82TZhX9f7GhwGt3fQnXg1hGurHGs1kne4D5QXj",
  "key30": "Dui7e5xG4gtDeXbJjonhupWRyZczawjF6YsEoYaybMopzjz1EBefnXsKNhSSBUorMGsqqBesBe7PWb9zBxBk7T2"
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
