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
    "46gSNJkeZeA3qnsceAcYiW9z6FGrzwQE1kPWajPgUzM9v2MumzKZjm6fv5AaRTWC1Nuy3vjMYj21dn8uLfX3aw6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zpezTnSxbtYwucth7PEn5BV8iZDp1WBCjMj2HH4Kd8pjBtxXyLmLoeffNARLnW8snZapc5XNLemgUBt3CiHqQY7",
  "key1": "LsaP2pjp6ZJd3xPsZTDjJP4mUNNJmbsKJxBFmZ71vGcxTpqMxL6qwxmQCoka2H5UyrGK9QQfveQThpp89JJpNnZ",
  "key2": "3bQTc9y8azSPh8Bmg78t8DWvdbW4ibEH8EuvrFBkq29RzPbTUdQHffzmAvsweQn9PWmrKgewfU1SbSav6tCD99y7",
  "key3": "38ArZdTUGhEcXB1FzrvLkDBDsbLp2NxDvjrwYZEUxitkaFPmqEnTUuZqH1cER6uoJpN8AdX6ELd3ojVME7Z6ruUr",
  "key4": "5mvA61bWYWqh2iVzqyXoqoHoSMjZQrnownTULCoTj1SfVtkGL7oStuEK8oEpHD5DcQhVHHpTZVii2bfvWgt2H9vK",
  "key5": "4vpmp2f1AhwtGyDGqwy5uHhAC9U8Gg6uoNz2HnuvdSAMSWqxo6akGaxyjkARiV3byZFJ5zHPiQupiKzjGnHkzcbs",
  "key6": "5kVJA2ssb9uz8FBTuaBCworqWMubkiTw4ZVVn3DksF1WZyL2zjX1cTiDLuxYE5QqxFPxrAL9w69fvFb9rC5DX3Qy",
  "key7": "4XvQX47pdHbagx8mDqirLhCkLci4R2vJBhyGd1uAmGCP9mKaKzmrUmpKokwaoBad5oCCpUPTWeYUAjV26bJJUzu7",
  "key8": "21r3KrafeWg8dnp3trMW12unPbsSNgtTJXv7f29tFZn5GMeNSGHFTG6gWSBi72BRSYoTGCZ4wRhRjjksazJQPAEC",
  "key9": "3ZoVtnR3HNyTttSYPP3MRvkRaWeiV3amY7wq6ibM43DKkJeF4VkXrjPgKK6y3viKJZbCragv5B14AnD4eKqA4HBB",
  "key10": "2bX6YZzkhJWvA7K8kt65G3quykpkW78pvBtwNYetWEujjFSh8qmuURGRd9YXSYT94ha1MrH1QpAc26zLaWqUQR48",
  "key11": "3PdfkLJ411hcpZVRm4HukwQmJjxCg11FNof8YFfXPryte2RJCnSH8mb3PFpree3Um9PDrR8t38XJKRnWrYpRLJ4F",
  "key12": "sx74hTi12JrrKjuVtLGszQzHpZfmPZ1Y5dzWA8oyDyqAEx6w1YSAMBqyMKtT93Q9KiHpigP6P7JueKMpmg8kv6A",
  "key13": "3vihZxKjGkPnMmTEKUMce9FeP36cRz4BWHgPANKjNZHFvXXqGUms1eybALbNAhqCaxDGpCicjR9NNXDbn4LgeXJZ",
  "key14": "4X7THwSgc97TxAHqs9py5kVkkqRwHfZKXyTNw44ZbpzqUQx1xiG9ZLv1rugvJyLvHzDwuH5iTtS6XmMRKVqMnUT1",
  "key15": "4i2Vv5zVeA8cz5rNtEx3W1ioVFk2dhqveZiqbQDj9jmpocN4oNzHQNCNVTw6ieEXRAxAfhFCvso1GxVgc7N9jPd",
  "key16": "2mpEhadtEbwUB95MZJUgpPRVL2tFSag1nVqVXKb1xMSxUtB4uH7SNKNdwuZf5gkWfqKgL9JrN2bVkk6Qfx1vbgtr",
  "key17": "x7UUo5etjNRi9gFZ8AADAjHYV7dsMbVuDBUJ1ee3v6J1ybRUaxQZ3gFndcEGFwGwLPUQiBGeuz3n1MXd4vnh157",
  "key18": "3XDEJNUZDm2dBNozst7vgHTatnTsHnLp9oUeUxrtU82Q6cus81fPNgr5h7J78FMvkk7cdsrTD8s1x4r1H3nM6r3r",
  "key19": "21N52cEGGsaE3GLHtmF8mMrgUDJ6hXj2GsYtP9R1NrXwn3Y6Uy3dyzC5hNPGLE5vSynRU3GwqRuaCG1rez4GUyjS",
  "key20": "41wgcrN7whyUYtpKLcQVRiDhh5cJpg13czEiPDXUmLZoDG8HyUBdtnePoRZbsvi7frRKmjT9Dds8aQHjyqkjHJrT",
  "key21": "61hp4YTVh65VSmKWFxAujTWH3VFHhBcHsMGFXhAyh5FVQCaMxzVrrabsTebsbCo4fmwvuFoRdBztnH2Fwg3wKmc9",
  "key22": "5xxXRwMNArPfXSAK7Kd8LufUZ7WskJCmTw6ipWKjdX9oVEffsBh1PU9dyM37AuTmpijf7yPx6qxwPBuo63eDn5GT",
  "key23": "2ctNTqRtMR1ovA56oa1RfMS1V6qnDvzhnGY7hxw4PKhStvHp9SSHAKNpzjKBXKcXMcWh4mtXUctfU6szknanujL4",
  "key24": "29N2AKJfd47RVSVQg4d5LtoB1MJbzenkGFJicn9qXXy5qgd5a97AZxXagYW8uSMciUPoxPFvwBc58Jst8EMjkbou",
  "key25": "42XXacpLafmuTypgVcRUZw4UuZD3HydpVGF3vMceEFZtEq9zi8w8ptXcGQfjCrY4eMByYD93oZtT7Zfp5F5xN6Nv",
  "key26": "48o9WGe2czxoJ3NUz9gejmiSjaKK7T4mpFhmWUcGd7jAMz1ZrFr43md2zZTmucFzsFKPutWmQnMQgXgs7mi2z2Co",
  "key27": "5VbrRKSj96iJiwLDMTCNv12nj3QuxrxC9nqCZznARwketohCESfq5tnNhSxP2p1ohSGQsPs8jmkVCmTeFs52D2p5",
  "key28": "66puNbcHHZnhHatmqUvQrBxEGEXv4UhKPfGxxLp6cb9LRo7JUNdG2Y52zQU4M5rf6DBQ5oDSFkynZEs79z44pA4Q",
  "key29": "5qBfuY1Ek3wKGMx3kQF8DYzbg72cRpYq6Cp2dM3Sy57iFEDAi5cqz77cKhLBqZEvBmcFxyspjqqXvTirJ4sViBh",
  "key30": "3czv3pWFoSSk2MUufQmGUtVeYJbbd7urAuSj9RXpkmC9YnJQ2db87sRv4QMkzG6s7TZYCTeRjH6D2vcQzxF42k7j",
  "key31": "4eboPATnDmsU2MytsTc9eBUVKwaknTzWP1aPAFE7HQZpJ2bdnvDnd9buQwvuRxLLSFvUvw7PrBAQtW9cG5jq5QUb",
  "key32": "2miuZrTN6QjePUyQH2rcbHW4y1jpXpwQiqNkd7Kkd9F1gXdHNBpZeq73C4fSAZ4vswQgGtz5uDwrTUPcYnLNtXe8",
  "key33": "DHfh4zz6jRfambtfBKfYt75ynHbdMKnfS4Zi1EwX8WNhsUavuP42nmzfTf1iyGUDjTXncL7iDs47tmzWBXHFFh2",
  "key34": "4QzozLo27hmvYku8ujVLKz9NiDhWfGebEUKCd9vZsjRrCKGS5fdBQgjrpM9nujkqF82PTaAAtKzmBK4tg5vbhMKf",
  "key35": "2DP7sqQ7QDRASyQCT6a329d4odBpqEsiQeTi3dZb9WsPtff3qRxaTbp7LCMGmyTNz7u6z9afkSFuDYBhNZZzf4Rj",
  "key36": "5FMBFGfHwfo38xTcVGcC5pFhYwoNCxe318NTgmS2oqB3jXuKrq8JjA79ArVqEP8JRXwQQfKzGmxejA2oNEAKnnuL",
  "key37": "JcCFZEkqCowTQZQGweaSF14nYGG914SoCLrGiRih4RiiHhQtqe17aKeFo8msorpsTB8jXyZvhbZ8sKkUNU1dvYq",
  "key38": "usKHpvcG96NA2AwXz7D4Bb2ZCTqauiGSXBUx2ioD9Q3qC7zPKh7EqmkwkcWTHT46FsCDgtqB6F4bKbsm8hLRmiB",
  "key39": "2tdMzq6fs2n8k1X4vrYwEWVJBrEkTvL2ePbxiWztQM3YN6CnDNEf3X44sbP81XzkVqSBZS1sJj6vwxozFEQGmd3w"
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
