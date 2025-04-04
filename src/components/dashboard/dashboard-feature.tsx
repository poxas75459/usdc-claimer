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
    "5mfPmRxn43iem61cYsEyVU7JZKo2Es45gFMJz8HXhLgBHbd5SwFLJ3MAtbVQsxXpENRNV7YmYCwgsrmxs5G5PtfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PnuY2Pe9Z44xuoZmDQTyUs8eZYPzeY2bQ6oCgJo6pEUDDY29QpMSFXLGFWv51F74N4BckrYHKqQT2DbtkhB6Jn2",
  "key1": "3GKUWFY4xrY4PKCc3cnabfTAz35SL9ajActgDmNgTKce9zCWY3pfYqT5bxMeWEk7vjeqBSLa86MAeZ1KgSnWGG5o",
  "key2": "3ooPM94gDd8pXjC9yMzzVkkgKbmdrdgueXk7X9YpSxyxCLJXkjSFX8MuEYgBLDyPAk2ZaQtBUmzBtXcAbM9Z8uQs",
  "key3": "4w4XvrofpgGbETggqfszpaq1ABvoCRt7z6r1BLSZye2YMwENid5Egbg2JZTDcdCq6Gx1GXJvZu3FezbnwJF97CGg",
  "key4": "5L28Xw8yjh2zVozK2naf7kDDN1XqmWa6KzSGP9DqDFaUGxQ5WWzddcSGj6huKyLFk9e7fecnkx8o1owGzg54higo",
  "key5": "2bAQ5QP1BvosgHqtNa65Tfk5tgX8U9hSC28QXiwX9TVkN7rWdLYktgfcWh7L52sxFt6FnDqyn1bnKsXUHdNtAE58",
  "key6": "4D3i4ZC6YDJMdxnPz2XdnMftC1qE4m5xvnGtmZf3b8FEzy9tnMnVgYwDX4ooa71Kyf93kY2e39g3jpeq8X9JW5Xz",
  "key7": "4jjwzyF8LUrVHQdLTXjnyQKSM5L2LB9adF79zVYWq1eqw4Bk1CLSuvYvvdfFt9NBGf7y85CD399WgN5tbFpZB3mG",
  "key8": "211ayq9RtgLFkpz6KJq25vXEkHBuRJKkr2jv3MzzKLZG8hUe3vpLfbpe62NVt8v1hPuq3aZzRdAvfvqCQWMnCX9o",
  "key9": "TFpkRteVDLSFnU8xdz2qYjth26YL9aEUkYE42Hh7FScMSmP4j6JcGnmDo5bZzD8Rn8rNue4XnVpac8qbkJCTucp",
  "key10": "2Xsc1g7jHQZ4obDuEJHRPE3nuCH5utEwMZDNszBqUU2AgYokNXKxNgRAHzy6fhMGbLT74tbM19wE5b63MNxY2VZH",
  "key11": "2XodB4odjT8BF3LNauj5fpF6ryZAjA5WkepYMfbtYAvM5HmN61t99fcbTRDjydCSm5kD9otGBK3iBPHQk7Ub6Vsw",
  "key12": "4tmtdtELXQeivwgZZrxZNJB7CEjNQ1NeH6vPxq7XUrDwqUDPpVNkiebB24n3VhZzQnLaL2xf8UoV9x7TVmN24rw5",
  "key13": "3AidFSCqGots6EbgZvy9qReKRkNJbDr5zz5UFpFSwTtNYrJGz3mRo8KxKEMykADRDAYnQYcKF3tnePHpAbJHADu",
  "key14": "mS4W4RQzdeBfPgK66KeJ5KX5g1e5xdP2GKEDL4CoAkYnkzpUashzJvtvL3sDqJRSWdzvcZTE4WFRtHEZPcMidwe",
  "key15": "3PrKaxrKxt4GRENqsvTEuXSfHSzRi5sxxsNPhRVEnjhSBoprNhq3yo7q9R5FG7S8FkL2Fa9mXuLoVNa2Howqd5si",
  "key16": "4NpNp63pyggu3GncphjorjWZtwJF6ZyscjKTVfi59PjNJksq6zKcZGuMaHui8isXCAePRktt9A1w3PNEx7Tpj5om",
  "key17": "5FW4G5E4BRbtABB5yg4PdFy7CV7HavdD6N4Ky5nGAi9hVjrfqwZvt3MRoAY2NNwedCTZ1UD9MMXaBVs63W3mK2Ao",
  "key18": "4TGNHYDnuNA5jzcLHwD8HhdwYeuhQ9Z1DL32gEAbUAGoNZUozbUfZHh9NaUmcyyupyzTkWrGZEXRmpiRYQdTcbAg",
  "key19": "4DjLRtruKDHEnc8sfV6fccVbcX4pDNN5MYx67ZKgQfRP6eruFQFUnpKhtcjz8pzrxymCfGrUTEYuG4wiHkvL13hs",
  "key20": "4mGo8ULmvtSHuB8gnt87vGMLJ2owjo1nvLPU23Z6PgsgD1ekdaaEe4Mjxt8Yk5R988He7sXKX26UdukfC4h6d8CS",
  "key21": "4v7DyTvu5Dk2tuNCSHdYh3co9KJisgZrVrdg8iXvGUYhhgXiMjVLL8SUjEv3ntVeoEMwVq7K2afhFrf6ppoduq2h",
  "key22": "3KrQHgZnDvHuSnbBJXZrARp8hTkM3Pjs9VaXv7uw6Xhz1c8B7CvR4K64RQiE2Ndu1WqY8DxUkPfBoiz29AoWqiMy",
  "key23": "2VniReBucp4RJ5TrWV43SgYXW5nTCkoDkitR1S3ZVjLL48jTCieGtzyWVU3YPyaZECZRMVbjdqaGTo5k5GDjWBuB",
  "key24": "3bEzwkoF3JC7p2jysa9FVzZjt6Vh9zjKx1sbJSWyibhbnbuNPCiSHXdaTzCUyegSGcGbKRBzTCoHe6Xi3YH1cVQ1",
  "key25": "5oUrSrV8vtJqju9NskwkJyqGm89Qa2kA4odMo3qHsSubooM9tTcjYRtbkQeVe3VeDz3ycMQ9hUTFvtgdmsh6JMev",
  "key26": "4mMJPAhSnvHzfoT51ehmKp4WKfyh45yFx2TnBZSr5yxRYAbyLuP4aCrjFU3Q2cgkpHS3T3ioAC7gFroG23ANKKFF",
  "key27": "2isX6UmcnLA3hJqxfEASy4oc97dBBVHvDKWJRPNb5qL65uGBBoToJkgT47CeAt5mDeTfcNnMcd5EXomutLLaD7yV",
  "key28": "2q3QwHxKB1LWyXXJYqiNdXNs6B95WGw9aBESLgJXqsmCiTWM5MbyAr6fgTHPFXeFj5aPpnRfRq6ZPMWNzyrLV6J9",
  "key29": "4RXTc3TUQX4u2s3XgBhBb5twiMe7jK8pTs68VYdupGyg4cQVHuybBzCqdvMuxbttfjAY15NaHYN5L2upMGcmomb9",
  "key30": "3nRgcwJRrKnyGF2NDH8mxgtdtwQxXgPAb8oJ5Kj2fTfQzuFVxTdXsT64eTaZsieqiA3MSf3EWzm54d1diFMfuzcS",
  "key31": "8VwZnyYZ22wcFYpEZ8X1Q4YmwubuJiP96awFFqHWWmav9A6tQukSW51q4fk5VQzs4FJnEYqwLmbR5vQib8w3Fuz",
  "key32": "2pbNeTtfpFCTKj2XpsFMdX26KS22C9dfbbPau3U5FCYo5msBvfkptDk5YiMzzo3Uojt13zYGzsE7dE2BQzNPNq3k",
  "key33": "4GwnJ95t5yomDCHVqtt18dKACEDmcqqS14rycvHVwM9TJmat9yHqWuV1DVE9VSxXUtq7byQy1yB7jGMNizbxeFDT",
  "key34": "AtfQK4JoPayxZEurps5rWMAGDruVu2iuxXQmpioXZQ96YGteJEtzAJvugxS9S4KcPxbWTbKg2cPCkgS8ZzrFFWq",
  "key35": "51BDi6Ct4bVjtReXPbhhKAq6fdVwezA6LLDaVX92TL5YdC44NKYHYrtgxu6pr2aAbC6y14LvRsKDiG8drAFGjVMn",
  "key36": "5ieaq6zbTH8Ht2F2sy26Zie6SLTYX8yRqnsiQvEwQtktVvrGNogKVrNDYJ2ehTMBwkDZaVSC9cBz37Aocsz3M5Mn",
  "key37": "oqoRz1NeHUQ4hvD6QNuPfKBHUQ3gK7sDW4MJNQ27Fb1y5tgCQzxFcQDaeNaB1URdiBLFcdCV4WLVFFsi79VAKo7",
  "key38": "4NBZ8LqLCt45ppn2ZMX64aZPez2E5HoZEpruCCN5hU8UTpYgkYSjdrNwpAcxPW8fZKdrwmX5YunD68AFpudJpaaN",
  "key39": "5BWxmFpPz5oN1oua4rttPYAW1Sr6oMYW9uPjJskv3H8P1L69rnMZ7PFfASA9pjxAeySnjZdWaCzfAwY2uU5tHiZi"
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
