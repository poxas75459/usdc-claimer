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
    "2eB7oVCtYGZggUf78cPiLgPrM9MT2j75Ciakfbt2AYK1obpbB1AQvRMwsqTVnqgo14DmvRM3FEAunwZyQSbZRuKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cHHjR1v7n4VGZZpMFG8yHgbpoMMnxrytyydRNJJ6H5VojAJsGBtNJ8bCw65yGHpZpjCJk2YH2To6oewuYUEdADt",
  "key1": "3zNM7v2ijLzpdn2xtjMZTAQPARjM6eqJZkk8TurVDczst1Spv4ccgoJv4pMCmTC4aQGVqBQCepkU79vX3t6YDpRP",
  "key2": "dHQpeb3fuxjCCdGbXDE8hrgCA5mmYbw1hnLSmSP655wbzyiWBqXQW4aF78h6EcgFfgZvWDpYwDNJ49Xsn6u1VYY",
  "key3": "4oYXTGiVri8Wq4LBvuQdegnPMwxQ5vzohcEpjViNoPRYTaGP6D6AQWFCAWyeVCs8twLZ3BFCXKyWnrWXDWTkQkAU",
  "key4": "3XP6m2xYAhFxCReJDAC1dmodBA17StsvVTXsnLQnb1aZmfta7TTGdcduytdmBscNgGaJ7kRfBbxzcBrzsMzL5gKd",
  "key5": "G7RXACgoCpq24VwoEXFc4nKwbSnVy9JqcEcWzNQwBq3BeFXLN2TVvcMvUEARsKKjMa19BLvrfhTFSQPfhvYiNY1",
  "key6": "63LFLBoNHeSnBM6XASbx4PBDfRQnR7HfV5uhFpwjfk7UetwYRAshQVhpbNsCUSWpSTDjruMwQwp2X8gVSFbny5zQ",
  "key7": "21q2UVhBjx6GxkeAXnEZVTKaeyMayEcgpksQwZ6cZApdrJ7vMpd345sFwYUjwhdBvVD7DmS335UvUN35W5ytqCaY",
  "key8": "46Jd15rRMJpUXH21SzWxXYYcYMX9USCRGm99HxPj52jCEH4vodGytFH8jbffBPVVLdHBCNSN2ue52fKGX7s7Q3Kd",
  "key9": "4gCZvEuZBY8eVwDimCDmhcSWYsjC6XdXx4BFJSTa1MXZZocMBeob962qX4DCS9sfqozCr5sF9sJPU3tNfddHiyej",
  "key10": "SWAWqsN6iJnBhZrbx7pMMWuYm2wj5ukkjgzKggZ4MpHUoeFvNTvbKqgWJYzdD9kxk9FRHydMoEDJyEcFpbna3V4",
  "key11": "4p9Lr2npcZHMcdRqS26tKDVAL8AyMLVfK5WKAtbfJF49u2UdBvob5XGP4XwgaHfPrVVErhq6nbGeR8LeWrkuK9bD",
  "key12": "5LcGRqmM4nt8Aoy2CBXcMG6UuHhEmTDrbpMVSNtHoC7wenTHxGyq65Fpext1NWg1UuvFzNmjFbJUWdxfpU431TvV",
  "key13": "38DkBYexatbFudcVk5XV8qUqGVCxJRVoopDY5CuqSNyeMLQxx5wVJcpgnA51bU8xKoATxN3vAroTjdKksS4GiV2h",
  "key14": "3g34P36iaYamphmzReAFkLKzi2v5RWc4L6VappGD6pURthwTcL5zL2GYy2JQTcgMtKVC8swh7iRABTdoPCUkeYnz",
  "key15": "PNaYwBux2HqVcfKPYx4iKq6o7iaHezvNjNfc4mMxoHQ1Y1fCXmBBpsAXBkvAf8TH3e9mTns21HZHy3RPhke4iyL",
  "key16": "5fcjx8QEp53YjhvssaTwSqnTC4R3qLgygu4zEyzuvG1E4imPUbdpwtELr89rGhA6zwuspMExjM9UA5DQG2cErYV4",
  "key17": "4BSabnN1Q7UsnziWnGgZP5XxcedFeBvypA28jrdu1dEM1hEWPX7rb6VZqPdHD6qxzZphZcYU5XBLmmGN1sskL1EJ",
  "key18": "65e4Erdf9o1j5aMQHRzmSJNSr51Ur9KRNf7vppeAxvvXDojBJJXp5pPkhyTbqnNJjB91B8Bhu2EmXGvhg2iuosMx",
  "key19": "4PrQDQ5Q4kKj9mEzcPZAAn43P1kqWNTPQB9BuPBxHoXB9THmSdakc3My5w8j5geNg8kEQMXzTZVXNxGoWvVVizqp",
  "key20": "4QsWvF35PgmNwdnrVHPPN2pVZJVeULm5PrG4YtJcs4Fxj9FCfs8BQxHwYpf4cpR3FtRtVKaSaJjbT3oCvYpUdrd4",
  "key21": "5UkZuYAEtb3meQ4PA8Mc4EjQcaaKnHnxiZquh4w4N6ReB8k3Psi6TCUWbpf8pUugDHec84wMb1TitBxH5w9yX5Ny",
  "key22": "2W31S5LnvWuMYh6enLQCYQpria4NAP8dwH8KMg5cZSWCWHgNjPzcJmM8Rq1dLbfP8mrUpmwvECpKLCqQE7i3B2Cn",
  "key23": "3Y4NEfhwnPFCAXHjTt7ve7MYjHnYLmQLH7MMfHANNBBRTzDqsTUt3oHRvpS7NEztbQZHqMmQma1ZHfg1TmFnPMAD",
  "key24": "3MhhtzTgXtZGP7ZmqSSpV1L9MTHWvJap4Zj76pw6BXunkpfAR7y2LT3MKA3TFYjjeRD1A2mxYmvhpmX6y6tMWGks",
  "key25": "fv3eW2qdWRDCvSSmBJP2Wxec4uHVDxQ4CPrUtNCxdq7W7NqMqFVxACXMSoEcpw4qk9ADrKY7TxrqzgUdASGJY6c",
  "key26": "2P6LR9rkcTUp1yHvHjyjjVwKpALiLc2nBrLrU7oUf9cYgrRdxYqhQDVHiGERY9bVo8JgmgmwgYY6kQda2tCxtg2N",
  "key27": "J2bR19ocpU5BpLQhf2ZhAYscaH7EqDPaJM1sRzUGbXxcAHSnvZnUZ4SUD1hFvs4GVf4p18E4bXTnCeSwi6VqFWa",
  "key28": "4Z7ma4Etzo6f7yKjKtDAKyeoAUe8JeTJNFE997VBt86Q43v3mpMYPb1FTCqpHek93NWKKdtfYG4v5aCTREndgtpA",
  "key29": "4JtTFuHd9E7bwRYgnaCBvjadnzEYEqby1kMrmzXQDUknC6b31bDwYR9ASBrD9iX89AetArQeNBbqDTw4dLpNjbKZ",
  "key30": "3dZ8WJGZihnWjS6XAK7ur2McMtWKtQirQVwpADdMfjudewy9RCBabs2R2YUBM2UBTk2sAYzhAb1BMzgi9XXZxtHM",
  "key31": "m42zsU9kPtwHcbJvgkjUuc9UihDfbSXJzEHBgdvP3Z45HoQLdKGwgMeZ8fX1mCkMJnDLHGSfrANw5PjasbyeFhk",
  "key32": "37fJDBihvf3PZFpRLnKAWeuioVY8YfFp4Wf7cJ4e7GUziQri9dZSYt1KQAHAiZQdth4fc9TuQrRZDanmEXMrxZV4",
  "key33": "5JZEmVV4HaCHzhFA5mmsXCStUgaKyZTpava9yUr1ro6mWwwSmim43cP3cED5F68DyFFyqw4kRjnnYfJnTy7xeptD",
  "key34": "pyFX28XWCw8dJVC3FCEbASbSYBoMKVhpXc634JmGHsD5RvMQTPDBhYKrrx44RCYBoocmR663id4a6Ao1cCt7PXn",
  "key35": "5JMU6ZoFMcC9CTR73XPRTE7PabwiALopSTyj1wEVnoNb7u9uhTZbeEENeTRFDAAtwgqtrYF6pR4thxkLw28oa9Su",
  "key36": "2xRtN9H4L1RWJhSBQonfdnsuahqNdQYoPJcrVrFCE7h9geVNu6xtwSirNMBJQrCa2mrJHPAenTgu24XyHn9M6UAC",
  "key37": "5J4nH2s74x9W6owXHJwaPB8kd7y8TU1idgT7otAwfcNU3vwqBDsz8ata2bB5hCvUdgHnds7VaozJY4cZLqP8uYCk",
  "key38": "2nqgZRYYUKnCRfofcfCtVzcbeRQJHhBr7ENns2aqZ7mtkcXvTfABiy9eePuDxvw4ghEcfbTJkEcvcnudDjisZ9Xv",
  "key39": "5aqBTzCB1gfH5F47q8z5B2SQDY8HucBRmMNQQW6SEcV9pWYnVsx7sG45H6yQ8oZVevzZEC4wbcsiqcTm8C7iQegM",
  "key40": "QTUbDhGTJsMaGANpTsJLrB6ao7Vnzw4MqPaNV939oCAFktfPyBBjxanZePdHxmNBKg3eyxMo34by9FJwRmP9826",
  "key41": "2ssbFeVK7b9JJumCmYrhyCESSAkv8THMKJGSoAyZ4dji9sjxMQ1aao7g6RYJdHHL84jdm7EwkcP7oCSL4guxDixs",
  "key42": "4pmBgBP7izSPHMA93j2jnZM7CdK4ZzmKuztJNVYDgFZ8b84zQMdV7hMRrqbTf9EQT8x7LagNrgsqer8nrmY5QbpN",
  "key43": "3trYG6Mob9TsKEzy4AQL5voUtdVVo6JCX8bLKHVVtFancbDGogFfCByhExu7U6vkUjZzEyiANdU8ZH6YATJwqwjP",
  "key44": "4KK47DgJ4kQRC5KHSyHnQoqi1sL53B1BYVWe21sEzYJsZb9auyWz3pWK4b7aEMEMjjkG2ECQTVZFxxkNSKe42wr1",
  "key45": "8Q5wRYMUvabztTVWcoXt15LbhBgysLzHZoDDZRSrDs8uSFQSiGZvYQpydborkBXfrkn3WZif3Z1xim6dzGsKWFM",
  "key46": "3ieMGiztNZCD5kCbfETPcqtjNmHN5R2NVWuDaVvtvWEvt2ZyKofTtyQ5TR3ncuG3uwBu5M61D9DUbkeathWaiXXg",
  "key47": "5Yy4MjB8LbGs56kJVHFr4f2xLMboPMvCaq5Y3WU3Pozi1LAQh28NathfKAEvvDMAtg2oVVfnBjhNRJnM4pa8efLY",
  "key48": "4nhfJDAKyNPtR6r1u8QUos8fPM2m6CyZ2DXGQ85QjeNt1MhacmZmA3cVUoaSHczTZwSU91acxrDddfFsqknPihKu",
  "key49": "4AFTPD9bjJ778yJtrVAETByuvzsjB4DRcSHMJiojwDREA66X9cer96UU5gQBsV5GXWSDvksQ8rAojmzjEgR7ywGk"
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
