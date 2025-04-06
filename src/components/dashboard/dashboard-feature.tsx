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
    "5pC69veD4BZWYiUvFeRKfkYeLyQSbRUQ35tRGdCUTd72vNBz8hUM5LRSJPgWy6r3G318mS4kr9knq1o1SQbHQGCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NCS37cwcYzJqt14qDbyAR6HxVF8i6BTzdx5XTnmqaotwrYWmWwKfQbuPM9W8ErSAb4XmaE6ihgCgfETpPZH6HBz",
  "key1": "4etghHmXwvfKEdoSXe6YvLymfCvSrBQot4wjV7LGmgF5udNW9hcRMKFknRxR9G93ia8waJXta6HC1njSjKXkpLZB",
  "key2": "2i56CJNSWXkUiCv5EtVopFnkgchseUTembVUpggWw5jfVo2ChoSwccDc2PzFMM5VRvcbyzQ3ijUcuvC63oVWGnu4",
  "key3": "39kWouzGcVNq7f6TAMx4LbasTGHZPxRrUcRJEJWeGwywaAZgh29jjFWrKjprfioTVndFfF4cqwaHAGtbBPiWaW78",
  "key4": "56zAcmfLZTU2SqFxgGjuzVaDupjF217E26CBipQPR1BWGFSyL4Wz4i7xMdGUHHp6QegkeozycjePZAJ2g9S5YmVo",
  "key5": "2kqkejGqmtMmN9sBovjWiWV3yhXXhReVNRPms86LbFgeB1KCFRn6SPY2gTGmSdAJDB12smTcfg3QUjv1DjDgfEap",
  "key6": "4rW7Js2bGsV4CykKxBKVbJ96YabfTQebQwQ9cguu1q5T9Nvt6sXhnx7P6mXmtHwUrykgeC2dB8BFnJcD1AhdEseE",
  "key7": "4SL1apBUWrZaVNWNh7Km75QdvCJcFrkAyn2ETnBTX2DWoeYm5TgXt3h3ifLAEJJLqTmq474FC6y5q2p68X7co3bm",
  "key8": "5ZGurwpb1RwZ71KfSFgGDrFnNuuKkQmoCd2U55uY8gcW62MfxcXQF6oMLXkFUNUZFNxA34UA81BeZ2GDkiZhHZne",
  "key9": "24DSf2jisx3fJWfR3iq539NuesD8K4o4HuR6nCPBSRBVJTKVDLu23r119Jetq5RTHXRebQty8vn8B9G4yuEnvs6h",
  "key10": "5DgkkXduCLQzPgQwKbuTMcf5Zm66NZvEwyEcPio3sVMSuMrE6gJFtp152pkRizgmLsvRMRmSGvvxYP72d2wXvdsD",
  "key11": "4SVPijJAAYdwNDVf5R7yZTTeHA8MzUdoRW52ZY4LRbrGhZDgtoyFCyKGcdvSEgaCfkYbA4cj2nMXTRGQdoM11G1p",
  "key12": "54SSN3NSrp9bV5su5U3FqhoPe1gSnE4z5NboUk25prn397nExtzFyKeDsN5ifXobPvA2TTpM7a7hZie8DgamxggA",
  "key13": "4N83shatzViXtKxQ5NS8brtyt3R4fDX7RvfNZWSv6vuSpfn4cSw4HT7dd3jinNB3HZkB8Wga6Fz3kgv3oUvNm9hY",
  "key14": "66it2r3hu9eyUm9TkM889VkbvGmNeGstPgJcUzeQM7n9qVgkkdJerVff9nnhzs9ULydfc3B5hwgZW2cxqbjHW5MN",
  "key15": "42R6teA4KX8woTkmQEBM1JNkRHj3Ps9JQtSymkk8QLKgUgjLSjMvPWde9oULYCqDbTjPuFwrpsKdPevxswCdcn7t",
  "key16": "Bft12RMsQwa1pEB9AmFpou3RSQt2ozgpjjMUwJGqDGTUsopGSk1sXP76AmcerDQJy2bqMwUrnTiaoVAW6mFiwkA",
  "key17": "U9NSgcaHCBXkEu95vR3raJhB5uTRe7MhWDxBeT3HsXcRRbF2okqJyu8RKt2D2MhkD6UFynuZKM9UDgzJ1FTAHdM",
  "key18": "281KBZagFRKzU7QbiW1VbmmJcZFCYjzTWyk7hbs21Q4TT1srVxoZcaccH2CMzW54mCp19PGQyM9FhYoTeWefNGQm",
  "key19": "3BypBEKBxH2oW9mai1UVvbGMMYf7Zka5dP1GRcWixmSH5RqDEVan7iQNrDKYzrLcJctG7HT7CVi9ce5EvT19pRxN",
  "key20": "3UdHWJNRUEYQKr7GLae6CnttrNkptP17cAGQzhbazZBhWYEPEnazHQvqUbioibfJ3e4N8vAq4JodFK1HF1vPUKPs",
  "key21": "376o8smLsAQ6rpJ3qWt97MMVmbd9ejcfueyXA9QFgwBWaKR6fwB2u4MqCKWeLLxDdFp9WdZb3zM7sUDa5F2AuyMR",
  "key22": "5z28qoHgGruE1yHqBsK1jhW7hcbbmEVBMYCMxydFZUC9g6P6qVoLckyMBwpziwJED2LtVj8S39Gkvp1NiirpFxFn",
  "key23": "5xTRNcbqzoVZjXX5a4iEbpSHYdnBW3V3erMr5y9vtXu4FxdAkDDGVWyKf3NkJuT2FiTwSmg86iUBqSA8hBWhqW4z",
  "key24": "2MjMC96yuTBKZAR1pe1gWw8iBfd44fEocy4yEt4HtRrTttUrLNfcZKr1auAxgrcy5sGmpSJ6EVQdPni83V8Yo4P5",
  "key25": "ys1smNqrM9kU1z4as3Cas56MHSZroqPuLRX7H8EB4ed5tcUFdZVBM1pAw9MG76XAWmqYcHVq2U2s21WZjc5pw11",
  "key26": "4rjy1SacEPgZoU7ZS6rTgwnK7ZGqTnugRWJsgu1LgM1rp1VxM2PDSqAMAwDyXitwtLgJzfx14eC7DqD874MwNoEV",
  "key27": "3G8fV9E23MyPFx41CJQuPT8njn5fg3PSuVyqgbFGLvL4X7Hd6UFgPC7JK2q3NmFrAeKEPZdrH2stTac9FufY9N6h",
  "key28": "d6NyB44FECdcWdLkfDoLkj7LEdJNEB6m7opf7bPuGfW6LqQCeGG9Y4a9sT2adWfzGfc17TWZNRhjccHcuk4fN7j",
  "key29": "4fEuJUfrUzyipssHpJk6SAZ7amrPcWrfrg4UhFn9E6nQ988ae1YqFQbsCqF2XuR7QVnRNvrRFzz9RimJgaFh84Ps",
  "key30": "4CjRAsXvbewicNwwzVHiJpnmVtQCedEaxNh6sC8noBFZBicMdRyL7MWy4iEpmmtcD1dNdjPnJhVt2Nqcm5CiiWwm",
  "key31": "5F6VNPR3ngtdRc22NM3NgHNuu6nF7KQ2FuM9eVjFkARjbTd5K1NbV5NisqRBuBHJBoWWETmoQ3pAiq23ZhVJZF4M",
  "key32": "4XCvY3AFd1V3ni8ptgY91NjY5XJa1q44j3CJt22CrXdEFNW5BQQAuiXNjqmfeuWT9jYYrfjoQmCe8PRthiwCvsUS",
  "key33": "2g7zHyXRs5N3jU3GEpUD3NWtCXGaim7KKUvNe2vS8CR7Nk5u3UvA9squ7NuaWBBgK9Xqt3EPEhPj7D5bWt5LA5J3",
  "key34": "nq8eSDoTumFK6UwSbN7J5CgNmEsTYM36iKXjisRSANxU31uCD5765G1PgwBGF3XYRgQaCyz6hztTmfhcERKFNWx",
  "key35": "2k4KxoHXjBsvhi4G37JVGN73AFXv9fvzbqNhBnMoetgfJbK6J33mrCE9T38cpaveKnR1SdRgrXJYcdPhQeCqgADG",
  "key36": "3bX2WYe6LsnUwPGm7A5oWTH7wQMtWcmjhnDQd18yyDjQcMYNc4R39JzJ3MntaUoVLHXC9wWuaN9T7htYmMPs2aor"
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
