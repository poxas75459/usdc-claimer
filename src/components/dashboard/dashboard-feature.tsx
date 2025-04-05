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
    "Gb1TwEpcnVjBUWKeYdA3sGy3yEbrPknFyrSqvBeCuK8KYGUPeULT6HhbkLBxpjtLUfutS8LSqNbqqLX5dzHw8XB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jMMkZXVeGcR9MRbCuFaeg74UiXiH25WGW3kws4x6CwCphdQz6xwQEqcvb7PhqT5cTugV5UjdwaR5MyAhuZcUvHu",
  "key1": "47BfvbRPsKmH6hNXV4P94EGbtKpg8RNazZAzUjFdUvwC6e41HZYJGZRkeRC6U23r467cwyvFThRKuUCATTT3yrJH",
  "key2": "2AxnbUovXhSZwshFaEPerysBwq4FAV4ipwGL84TbpDD8v7om5Uraa9cs5Huo3TdskZqz4wCci6bTJVTztzeAKgwV",
  "key3": "2wkxqrzAfaBKXSYaaE21EBJQ6EEvmTAghdGAADb99wDpzXB6VVUpvA5G3wwf6tCjfmBriSihadFZ1b23EqH74ip9",
  "key4": "41YP6HvnFQem3pSyEDdeHbcJVEYDdMLLUMVNNdMfBK4uWn3jb8AQSxekuABdAkiKmnopPxsmfoUDPBM3e4LrSNj",
  "key5": "3zJGrYLzCUnvKt18qn6mDuifowMmKPimRHwAoRr7iAW2v13hQ7NJ7L4Vi39dVMcqk7VM8FDXCMTc7bAbnjEy43MZ",
  "key6": "51jW3zSBUAN7rPdHWDW3uyvzXRkpaG2EiUeR6djv98G4Q3wPKr1DTLfLyypuazNxQm5ZmSaYNRyTdHHRAkADfhc5",
  "key7": "3bwk9hUnNsXgGxJT7yV4UEYY4x7vQvyv3ETgiWMrdmMgm2uPHhr6FNy3PK3XcNbsm12M75ciozgJdJAivtp2RP4a",
  "key8": "363mUZyS21HtrZEfZtscR7HttKP4ayWdjNuZ9Frzh9GZKC6EKkGhpobdEiXtnqWzTVAfuGtyRQeC2rDgTLcLMMCw",
  "key9": "2tvRzjYmcnZhsq6jkXNzmmFAPx2rdbcxDrHJrWaRCe91bRKrkbiEmnxjyp7mudFh66V8necPnoXJf2qDV9emWrjk",
  "key10": "5ei1c5myAMUXcELtCAKzRRLoi9Bd91LmEuUEEwY4Aj3QXTrT3KErfv9aqT6Z8g1oJkbSmSm18qABh4cKYJUjFyc7",
  "key11": "3eisSs9UdP8AneT6tBf5okHQuwr1toWHyh2zvBoxdDsAPA4j74aZMPdNJ5hJwYT2h7gdWet8mw2snjSKhJzXKAQ2",
  "key12": "2f6UmaKmWRgti2YKAnK2B6bezGL9nWUwWkAqcx58w3EfnrGAbDR5esdwLNZcjv4akLmVbC7BzrQExUMV3SoGr9EQ",
  "key13": "5rq9Z56hr6mRfG9mRGVSEngM7REw9qWfwe4SGZZoPSRMaFufMuJoyK4BR8nnXAmpH66STBjduDAzW8V1o87qQ1Wv",
  "key14": "4GPcb4JhGVBR9McdFwbQyukVjCX5E4dZX37ZoGYRRagz6vYySXjdemcoTei6vBP4bWc5c2kuf79hPyrHa4nDv9a2",
  "key15": "yJfUJkL9ffCyxL9oDYYPJmSucms1Xcada5G5JuBAW8Ju8WSjkYU7LuNqwbsLpfTm1jQCVrdPd7SZwTYmjEXCHFf",
  "key16": "zJnBDjQMqSLzEEjmXUThLrBJx37jbzKqRZ7nyyPh1voqsXPsaXHLrcfihd3TQuREDGUryr1BStyFgH5Njaju9zA",
  "key17": "5tSA1YNZzRVsvFrikrYn78EapBZeZCo8k4EQeacUdWTNFU42kC56drZRstgozgxNfyyDtuZgCmayVjhtDEz5RT3w",
  "key18": "34FxbyUHmn2Sd5JDuAavjNKy7CRv1M9LEArRkEvuwhWJPUUrKP7YTpPWKwPDgy9z4kL4KDWGikBvrhUonUrWA7Qp",
  "key19": "2zxEpyjqdbiGhwgRTYPn35MpuiytS8ybREKSXcpAHWCurgKm5cZanwNS8v4mnUB9EditMiKWhHBxELKt1CX1LqX",
  "key20": "49uyMo2cLUm1mZdZ5Xcp9Pk9JnTxBwsno21SSfZPPUD5ykggFfSwpTfsPYXG3iq9kpeynqnvDcHfaNPfwkfB2yn9",
  "key21": "2sVkETkWdrSMi9gUBf8HGQcJGGCb1qX7xAAKCjLJx1qVkM8Ao28wjq9Ld3h4HU3Uew6SiZeaVtPQThzSJACdAxRj",
  "key22": "51eq2nmzpBqQKHKkpyu5JLF9rv14Q5RwDk2MX4XJrDTHa6ubLqoVjW7qpf9vPM4fisd7Mt55tiAyfcfXb7T73A7Z",
  "key23": "Ks4DEZ1fmgv2zR6etRSfrfS26uf6FzX1mpf72jx4ZPCghNSb5NFD4hzuo9CaEp2fYks7geDU2UEN8Hz3nc4ZJYm",
  "key24": "3RyXtCuYtKxXCHTu6YbackdF5oEXYtAxnoKKAdzPiow4xi5tusJZ9tUizFdzjXC2nGk7dTmvkn2Pu35dQ64FqrsX",
  "key25": "34PfXyen5aos12k9hLAes8vnJc2FDf6zR5kjxaZscKK2JqXhv71GpL2TvNhGw5v82ncxjCnEJJiF7EY1Pr5zJqxp",
  "key26": "3H74Rtsz641Ewwd5BPmNtPvPcF4VASm4ex3NYV7zsaENjtgvF5pNWcBDjk97xehFKEYisTpP5SXeDWTkqyTFp7ni",
  "key27": "2QrERAs3iLLvb7W6HVQsWVaX47DKhg23rnQno4P3enMA78ZrvcQSjUs1Wn6nvLo2cHiU1a5kvpZkzpU8YVxXCtbo",
  "key28": "3TSE9c6XqarJYS3uGvTBdpiqMrrFwuojVnBF4rqxM5iyCruvGVN5C6wUJxeXgpkj9Wg7oAtuqqP4chWscdifKK3X",
  "key29": "3LpWand5BUUPUUA2FeuV15vga23CNpZZtNhpM9e3FRvhPChcTioju2TUoH6LCgaAYXfnANYUTxmi9Q8gppvPrSPf",
  "key30": "mQ77SBgHnxuVqSmXjdKjfuXavU2BK5AJp4cNMeyzcUSArPQ4sSoptshFgek9yZwF4DTnNXyTrkRUiqUhjHoBUYa",
  "key31": "5tXcpsAo7UaSgvyffPZie6JTfmE1yUniR14DkwpgdCmWoGEG8xwqVctz13DatYPbDSENsxm8JkP2d97Xq4uudnNL",
  "key32": "3pVC9qPMKzUaLvcZTBiyRoU4Sz8uUcKNBotP3crXHhc7vtdMcYwQHQmXtXCw1k8MojAP7PJi3iGnCx7rhG1N4L6",
  "key33": "3Ymp8BAu3EZ8G3qqyMDm6JKVKXn2vNHHxSZu7nocQ3cJrDKGLymhLmKPDHKLEgNHUMmWGcXpWy9gjNMKP3KoNz8X",
  "key34": "5vah2BC6iuzRGETpgpwoFRBSzvEcqEKbp9diyckAuthUTe8Z5JoXDqNxXB8hB8MqbLDS8jFrD6zJ6wjKnUjNgWyn",
  "key35": "25zfVg9DX5DcBw3cYnHnrFxtMD6mfny3N3AXJ1fRa86Ep8aP3WTWEe6Pg5EhjSxYjKfuEjp2D8ULGSWkMD6SYq6Q",
  "key36": "3aBmQNvpVYi9UnUSqUdhfc3nzj2ZazBgeHzDNTS7Ttrjs7K1R96etxqeqPGUfmdSQLHYrFXfZL3FKnCuyM8NcCqL",
  "key37": "4zcbMnoEuQyYm7bBRNZfRYTAnmVXHVHDfYmT6dcBj7MuVZQWemQBAmyntLevDWDRu7n34ycLpYXVRwLzzAsd2u3Y",
  "key38": "5W156ZgbqbViijdaRqBRpBtH4GGSZcXiFEPwYo3QJYDuVDXMzyN7v4rVjiygoYB1mPjp7m4EqGAKKZ1yzm6sK6Fd"
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
