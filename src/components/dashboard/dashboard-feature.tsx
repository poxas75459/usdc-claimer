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
    "xpzf3kZvWkiyzTC1vRUCpA2zzmq4DKBDK7ZHFwzDVhDvSynGDA4WUa8TcUoTwdi7X88syQhc1MFQNnkar4F3Ykm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59dHP4H7j1ERwcpJvs2HT6zGPHja4qjb5cgYD1XQQmbBAHwf7TjMvQq3v8mDUHNGKCFJa44S9Wxvq1xDWsp2Qa82",
  "key1": "4PgGBcxRkHw24tfwfVLLmUVZ5DL5zxVtyvnVB4ZhbjgfsKf1S7TBq47dpqbnRi2HvnU6khPRX7BNV4VgGUMQPPMd",
  "key2": "3DUhaBhFdRdCQ3Mo8GJ6WHKaZTTzy7VMdtVkVzdhgRHwYpvEdbaPE16QcUw74ghfFYwaLNbsjMeyEaeySsgP6b29",
  "key3": "4NL4EwdrV7CXCsm6UJo9tJjq2vVQtpq21Jywy14gSNgHK386bBzhEsK5BFCKadb59eZaxmtf3HVDvti45DQFRgWp",
  "key4": "27rS3TvzSXiWpFWArfJq9RwxdKB6fK86dZePYXEZ1qTMfL9zUz57wJmbuHz8aGdxfQEzC7JxoLAafwDDn2vDoz5e",
  "key5": "2S3PEdT3TNeAX2aqzNvcUba5E8DXVeVEU8QbbrY4oCuzuCVXVk5DZDzBKjqAwHbukLvXhjWiJ9tQVMN6RsXDmzBK",
  "key6": "3LVvkMEpzFNJwbUzwaJxD1LTeA5FbnzyidLcaBHQMk7Wpqo8mYUjMuAc9h3VHSTiiomD3m8khGXKExHDGJFYnToc",
  "key7": "8Cf29MsrAcatMGH9ZuNYsgoXuEFmWkieBZxcwWbFtEpxLxdABETDGNgoCKsgLYu2XnpnTKJxe161bHZZv5Ufqbo",
  "key8": "3MokPaVAvUR11Akjz4aEH9Gth5fmx99ZG9d3dajnHyDEMqxPH7cV8CJd6gDzGaE5wv2aSdiVwSpQxTFUEYCrcWW1",
  "key9": "36Q6EuAruR4wo3TMZ52h3WjhYd9AcUCWMzEc8KqVvi7i54jzX1i2TVosdFpigm1uW4gZwjzTghNGfddYgE9wR9CY",
  "key10": "aUjfwLW1NwJDKqmPyemwaeH3jrWCjNNVgJrH6Ued49G9d51aCkQY2pqXgR5HqcZYELn5GUzkD83Rm1guzavBRgB",
  "key11": "2tg1D2LkQJfoxLvy8svvck6YJjYhxGG2ndV9q53rWiQcL1yr9xg3H9asMRgQEsAkWBopS4Z7ypR9EXLiCPaQ36Br",
  "key12": "3rLaWuTs9sbeWLuEYcRZ5ZT2Ldp5ZFWnWbep2vFqwwD9XmQVRS33qmVD6ggLz8aaGpcjh8pZinmQaD69LHY8MAgn",
  "key13": "5yQhksSp5dqsoDZWzLR469mt5QkJArW4dnQhgw4GpxJdNMiDqg8BKkCg8twEhgmd9XmqAnkqhfzpvTzpmfrRxQZR",
  "key14": "DVK6NANVsjm3yrQ8mD2SEwTndumLSkmWfdHLWDs9SBNznBXduSN4nmbVoEpwMgGHCJSVBBC2gB8RMWZWPsm2Yym",
  "key15": "3CqmEQU4pFBJ2acKthjhqNncfcy68THMdaSBM85S2txa3cpRggkBvUoeLfud9LSKidWJBX523YBADcHjvRy6HT3M",
  "key16": "K7vYUDWUfifZGz98qjw3dRFccy11fnjvAUo95BcqSLqEUq4kMy8TL9pJ42YvgSm18gKdMaoB4c6axAR1KmdKmPm",
  "key17": "37BHTnfSsQds8ugitcrvxaKbKdgNDPCXGA9TsrPVcrZNqUWSFdX2463sCqDjdVUem3PLnhceXiqNuBBD3pkWujVE",
  "key18": "gawTpaGjQEkJTXTZnfUrZDsCATbN3cwNfTi5aKUuaF6jcdfc88YoKcn51mChECZF8322inYkKYTZ8HeZcpqpBAx",
  "key19": "2XHa7E3L2cFviQ326mbCoBmVDkFiXWQ8m8h4Q8bbc4Jpj9U4W6qDd9c1xwbEE3jsoNAZCCP76iGQhkn4pW68BfXg",
  "key20": "2WjS9rk4xYn5jkZLeqFB9JDws839d4VSaadwzHzg9xSy6Wrn7zYKCRrdci3yA6MT5KjCQN9LChdPQVYPYsnBrGoQ",
  "key21": "AnFq5X2q3XqBKu1KArHFtMc7zztJdZXbrcwf5h54Ny5AmSLEYy3eoWNR8kPod3qcVZiStAbRq1GYAuxF8hY9MpT",
  "key22": "646Z1SwKfq9NrQQ6tBxZ5pmGKMRxVPMS7f7DutR5gb661Y2WabZd9b7gi3QuTazvU3z4ooaoc6sEfLLq2nt5bBob",
  "key23": "4LCfE87dCb6DDPgyZ4HwcDWYmJVQkFU7kUMcU1akymwBvZanQCfx2wnSEp6ZaAM8wgmPGnRDmqpLx1zqZcrGqAHo",
  "key24": "2uE4fNgGKbcBwQxses8av6kTT7L1wXh3RtyJaQnCvoXFa39kv6w9BBMmAZPkDXJybA1VcTxux9N7QWdq3Gws1C72",
  "key25": "4qJefPkuu62f77Z7tgqzDKHFRpT9Nbd34vkU3BjgN6qZigsZqbKjQqQTmuzYcHnPUHCgRnnMppEyKEDXQ5KD1FTF",
  "key26": "3aavQn6Hn92TWBmBBX59AVNmoqpMUA83gCUcF2ogGizNNK3EdnBN1RpUbMwFknvyQPDs6dq1EL9M4smdtJzhJEYe",
  "key27": "5jxzDBNFrWXCmBYzVHFo5mn5utpRxg3iwi8gniwKMjYppEpjAvn1DaPVvXpK1J41v5vkfCpMAS2JejDdHhc8BznW",
  "key28": "5FxbLWktTTe8mGxDxMi4WbiJFpQ7wzPUFx7PbxnWuq1mSmbaF9ix2FVsYnv9VAS9SzLEvoFpSnEpjwREtL6vGjEo",
  "key29": "4aYFoJe7wCj6rMkKLJBU7yQqzzaK4maW9513DYTPfSQTKQRn5o3EyHVnvvHdJZuCeec2VyAF3vVzSqQMDuU3gatp",
  "key30": "1px6PeoVDFnQVTi7UuhRUahbytue8bij5PEiAdRGCEqbdUzVby7Sm7sTFEBw1er65nRWo4XRWa92hzue3cQc8T9",
  "key31": "RJfFtThpE26z295Jo3PWQXekto6SKtqY3zFpdEmd5ruZpjBcg8M2rwox4XD4cfN56ZmD6ZjDZdA4nAJCDmbhJVt",
  "key32": "48LeDy5XCDLFTUGNzE7hw2idT878ysUqb1aGdtE8a4rZtDVBnRbSnpQDRiq2zD5rg1jL3jugXexhk1bFZ6e8AEkT",
  "key33": "Mk3FKkk7zBKPcWSqWuA7WQoFEUBcvnbrB1MG9dY4tvrFcgWAXgUFXMWgU2KhMa27Hk1QmtmkvoQz2Sa2vNyEvj1",
  "key34": "jEPc9rxkZfjtAmTkeB8o5BoKNrgYBBj1Fv3az895A1CUms6kvxGAtro1753WzrEtGR6VGtrKG1sLMokTgvY3R1E",
  "key35": "E21MZVkvz8ZYJjGzJQdtdySdbsLC4aFh5rPZiLH21hm7aNHSpcfvsdCWHmszWZTuT4px7hfS4dWLH3VWSiB9Tks",
  "key36": "3T3FRita33X3vGgJFQwb6y9RCBEMFbnkxv2RsnjD9qbjwVq5Y4vJJ26S1Hu5drr8YfSbie2vthm6GtuDj6E6qCoh",
  "key37": "ryyuThWD9wtf2tbEQh8iiERSKVRPhjfQvCvDff54n9CYUUpvG8NDvYon2a6P8j9XB959rQtyiTYUwb6LzJN2UnU",
  "key38": "3GXcq7ZRpvhoXyvzskXRiBgXCZJGwBVTv46ffCcHLzNvfQhdqihGcS1oyiRZHysG55MwJAvqQjH5BM7Q1CZ2fy8A",
  "key39": "3gJsvEgwcoSVH1X6AXXXHKfMtvd4QzcXdmKzmrdqxARtZF3CpSNh1KKraQo7eSKQF7F6FzndUL1uAFNf4dawdyPj",
  "key40": "64jFFvuy6DyeejyHieBxmNDxxtmrMUDYHEgGeueHrHja7sDPhz5kdEGBrX9tP5n3c1rs98rJyTud7ttLGMz46apT",
  "key41": "2MiSdMawLPkhuc8oZvBsdtWUG1cGLtuLBqoR4HrTDQ8MyrVGNZdibtwWYWvFUt4xyfGPV18yQZgEYwCSpmxm5Qtr",
  "key42": "6YKJKvRajFKc2x8sSmv5ssYyiP5m2c3GEXrLvssGTuHT3FaPVrLidEZu2H1fvEBUYham5eS3k7rMhHeY8Y9p6nC",
  "key43": "3pC4yDHTeUu1b4jSMq81C169Yiv7mMdxon7bVEBtNuVH5bR7GGnWzA4g1ZMUDHQNbS3SZaeF6UN9Y7wkddLqKpAE"
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
