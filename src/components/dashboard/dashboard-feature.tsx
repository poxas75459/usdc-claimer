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
    "2Jg5V6dURLLexjx1f2SKumdQZeM2TzHvWMwz9BuV1zqpmP3UAEVoPYDVgDDkiha7GZfQrWzJ1Y2hbWEfHhNXR2Yh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23UNZMhLfNbfpfpoNRr3iHKRoqcstzm9t8rZSG6i4SCzm3EtfMwhsnNGboiuHiLnYvKG8a3cEFi2TzuLhYjQ1AaD",
  "key1": "2ZyGi8qMWbjJng5a5DJi3gt6dYssumi1p3nuyZpQNGQhgcpe373kEjepdvxbMme6RLiKUeiv7cTfahSdviTHYt5o",
  "key2": "5KgwWj5fPw6dpTB4cdh3UeRHm8FSnMebEnvTtEFE9Z45EM2hz6PLjJQnFHFpuWymA4nM7ihyKbY4ZpmzvVY1Jsmy",
  "key3": "2XXoK7crrvTKZsrJRE1Aq3MtyhVUqXczKRW6qWNxmfdJBTdsD4kq85e7k77FzEbXN5JtKatrBrk7eU5KkwqPJzUQ",
  "key4": "2MtpRNPgvT85Ve1z5BQJqZAJu5s5RuaTimjzBBz1qp1GDUxxwQsrg2Njc1DZqfRg1hPqGfw4sUsTNXzPY7g5TGCx",
  "key5": "2yKv5KeSqkYuF95Xp9pEiSK4MvwE6J8xDN693GnrzdMZEAWyErFbEzVnyWkZXNTfftDigdvt7u3Y6dsisdjJwfE3",
  "key6": "5ERFbNnriTpPTkqGjpU5xnMv44qVQcFPU824uTo7je4hRsWX4LugUPNMLGtCcxW1xhyPmUmyxy4cX4wXyiC5pM26",
  "key7": "26xmtSUGr1o4c3AfxDYJWh9Zhwh3w2iSYrJZ6Laj9DAmit1t6rXPjoKhAPwADsCkrYmTpqvXMD5NgeS2DEKBHbaD",
  "key8": "3XMYgj4utuZXCky3vKsfW7ExtcRnLQkMncvW3bRzfpUv9QnkTgLUkqe8DVQRCY5eX1U2KYBnniosLhEAfKFUBaAq",
  "key9": "fFR16tfDTQZVyBVpJ5xKHLCGoNcer7uUx9akwUp8LKUyrxvspqKLqNiPr689d8jRDfocTcfj65QHH8ezaDpeCGB",
  "key10": "4PrZD8VGM9RS4wKdL7t13SGrp4K8gQPwFpLzJycezmVxvBZB2y5uNVwWbPoPhhuDXwj8EUKCyYG1gzB6nR6vMHVx",
  "key11": "5xRE7b1zdtNKCnhDA24aDZkWRjTxE2rd6CnDGtcRNtLY4nrBhiwg7JnR7xVHzGag2Jx2KP4869BDN5CkXdFykfAU",
  "key12": "4at5N4tjRjfzbFiUWQtFSbDa2Mn7CdUsShLUZptEMQmr7UPSTEhuSdWirWSLWLCXak3SAv5SsEtshaFpJbrj7Xka",
  "key13": "2fKBkGpuMEkh8SWBxUYvsjNfeLanVNBk8ZT1TsVxUZrpbWHnxapf6fD3uf8d4JYnAMbnMDRTU6Qt4j7xhox4NakW",
  "key14": "3ZWdfkrLDAacPiPtwfYXtUWV2JsGNC6HvFZ5VVLrTM8FCFvRptvhwfVb8jCzZiPWcE87fkNQcLBjViLRaQtqvULv",
  "key15": "3me8Ccp2bux2HNYZyXYrcba5WdzfX6MAw3PkAuDEFGZfxWANbQU8dYV24xAnkqxeaMxpAa5WqrKF5pdRbvZzSHYQ",
  "key16": "5U3y9JUu8ZXMtvtCGemRFEqPiFMC5MXyxKuqaS9vHYeP1f8DGTLjRVdAxKihMbbHuFCiBXLu4E4KmtLEXNX7GKD5",
  "key17": "4oxF95479a4HG4g6Z27NS2MC7ZHNL9yNgPYggyHC4Vrb5f5U8NLW8BLNDMiA5mdYmggxXFRddzuLFxYYvGiQLByx",
  "key18": "3P6LK3PqGJdmfJXDsP4EMpozVDJ3BS6RJAujV8wnB1RvYvEPBNNmm1m6n52zTanCCpaNBN5nRzUbNZzxM7N2BS8H",
  "key19": "4wk7nw5DVmXGXQdoEZVCPyz1nf9Q6qzKZDKkmnjyhV588EEw6DbTL6nBfPWgXjXyMFJmh6yXdt5i9j3jBmqZbkrX",
  "key20": "2afTbccVdL6D6yLFAb3D548gQZn6RXfaCnvbRiYQAmXHsovzR8VA3qAMFr4hwovY3HGme5EeZCEmLywrBY9zDXMa",
  "key21": "3W4kho6hDzet8Bfy2g7apKiYX9M7HZ43hewvmbLaNCDWrDP96dFoSQ8Xgez889xkGc1arbDrNY69NNaFbpuxkCvs",
  "key22": "3ZCsXdxHw64m5iwFe9z4ZRZBnDtXuCWKJAoUxVAsPet2gzEpmraYEjBb8vnhB9iDVgrGYZyj84cTijjVV1STNgi8",
  "key23": "5pwNjVzW5UDxQKy4TCkqbT68VUT5quQ7m5fPeN8LfZCqkeoQaAwabvSD8J3gyXNDkkPk3VEqZhzSpViF4uCjcyAC",
  "key24": "61ioqaK2JLEW4WzM5efx3Dhjh2Ru1VNp6MdySrhtnNe5QzvdajPExpK9srePxfS5KYEb5ERxcFMF33tpicKgb6ZB",
  "key25": "3WhZgPwazirRm1DJ7dmm6YemAAdMWt84Fm2TsQW3ZcToZqGAa8pHcyuKSPArwNo7S1S5Xw9PFVq4r7MSZzRWDV7k",
  "key26": "3NdVfjXksKxV8v7HhPTAXxVUR8KLAcaEiGgRXAfEgPUDYDaerkFHGFCtefbWtf8f6HX6m9TWyYbSXkXkqekH9wo1",
  "key27": "49re6DTqwJYKb4jL5yPnnYrPQ5bP6Jxoa3HTNpsAibC3SiCBecgLhvHaWFq7YzwBb1CiGyVB9PMaJeEFuCGhxQ3f",
  "key28": "veeEcP6qgAgV19ekz6SHrYXedLAF3XLiLpEd3fA2jTg3CuThmjEHvgWta2i3J7ToEjGhZcais1natxr3UBHAYyu",
  "key29": "5Y7YfpDyCJhwnf5yuFRrZNPxJsAnPTN4cfuYWteChhkJQtCbrm3wPcphPdTNFZgp4yfnQRPfcmtkovjJt6qftKPz",
  "key30": "2XzQans2774wQfAVvEzJ1EUSRCKyfzz6H8dEncsuXQTfiGAQTPRKFVw5zRSX5yxGavvhxA6L8bSDP3aYSvHij1jB",
  "key31": "39u5aH6N5cnTMhHfk8Lt1eJh4L2x36u2n5WKsrKjoCci77nnVe64XYCcZtZwohpWpWbHktHGU5y23x2XTWP9dFHA",
  "key32": "5vRWrXWYKursLvA1qKyV3ezm3TJGsYtbZ2B1zuGoq2uxDVMtH72cARrFmcutyqzEWF7x4jFn2TKdUhvRWDZFDTii",
  "key33": "5xgkmqpvT8ZWbF33nvPk4ZMhcUBXeMPHeH6qi9N8Co44PqWUH2QoTFVmiEFVZr98JoDF1UbF7zSDeJ7TuvDjBBA9",
  "key34": "5f1Wv8yo1UGY5AfB84DBBaLnRfuNfrTmwuPsWhevPaqJuVXhMyFbrXJLrbXrg6LJgb1cdBukuAsXTQpcs8twkMjp",
  "key35": "2MGHYuYE2o4SdHpwSJYVLUzF7bwWjn5tCWZJu6v5xHxs73HdtczRaBYtoU7PuHQpz65eCbuuKSm8GbSXEUSEMDiq",
  "key36": "3bzoKmA9PHQy1ze5mXqvVKEjS2eYETfaR9VSUWhssKm8Ng655ir2Q14LgAyPunbi3KgDKRX9oTYvrJDVLNz81RHq",
  "key37": "2DFkUMZzLaNfxX8uAvgyFGHoesjiWRsPq4QrhDAQs6mvjpbSymZF151qxFYqxYbCSR8STogHVGD6bkVuQ4FaBtHC",
  "key38": "5q5yoySd2BWwTaP8dNy8NzpM4TPzCUsy5CpZsq9ibGm8LZSkiMm4Cgz7961mBJH6Dx1aC3wby8WEzRqgsznAetet",
  "key39": "5qxASqoGy8AZCKveAbVYz7KFhPtaPeSN7ocDBCdJrNbe4x98TbTKYDhyVLkxSp5ePJK8AebbpnBe7LjjXoaounUX",
  "key40": "47TPmmeXAzf3dczm9XrkfP7ooQQXd8Jnvcaw143YDTZ5rKbEzSsMVQzHNsTpynECuhWmfCjSwXdxqFts3XL9M6zJ",
  "key41": "47UWXH5Qzho5jMNQUQkUt62LDD5incJ176k6eJHhkHNTaLYxeuYgznfZXGKCHLbejvqVxk4qHKDD1BKpNRxrv8Rj"
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
