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
    "B2oy1jR2i4WowyzzPEcyYMGtyqkM3mHZMWshZBJE77RXvK7YYZTdLFFU3MB2zHs9FTopaUt7yNGKjxnNdepZJvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DbyWaE4wNcKrWpCtfgsgd2Kkjt7vyapqjb92UX3Wt6fCrEtv7B9kfk4yH5bww9mhs1HFtFWd87sDHCTDMLxDKhj",
  "key1": "3G1MPxP1sEt1PK4u7MuwDBNkGvNDoEsx6DRaw6NKyM1a98oSMbYmfRrTc8J8imuHY9gtZzgn5YaHH1M5p42PtbDD",
  "key2": "5E4UeJCHTkdFD5fRXd112EKzhJUowwVYwu4KBFgWqdJ6szHT5S6Dbk27TSvQnc9y3r7fFbympeDHSGdtSVe7g6qJ",
  "key3": "5YFs38v5F6mjrqkkUeeaPxvxpBYJbP2Lpitdef7i61JnthtbSmZ7STL1A19gw7VesRz7EtnCEW9od8eerFtqxjqy",
  "key4": "pC5z2CAXvrz6tmMxv25xwMo7G7RsEfMUwqEyDgkdkYieosnGXMidyzH2XEeUUpiBjrrvu4qerXqPuGYscgHNedY",
  "key5": "5LYDaX4ivbKmas5cu4XWrCK4Ax8n69swYyg1v9fm24aRgr5251UpJgC1DJsPLxKPjsoceaKcu1RvWU8zJk7VxFv7",
  "key6": "3hL2UkAtC2B87FaJJ3g2RSWhnW83URguYM97LkmpZX3V1J3C3wKujTbA8tjGsQ2DmD87XXccmAQHdqsmiJEnJoWZ",
  "key7": "3LZbsCA5n1evgoE55rT6PhJamCMYJTZu6NnAJeJcfD7e4JtJ4wvQmRpjFcS76qcCUak6Df8Wm1VUfHMcBxaJcaP2",
  "key8": "86Q7tLUmcAB3uym5rsfFmCM2tMDAGYVHcAWEci9H1p3Ykok7xCJLaNLj36KnHonsjtHWQ96BXxLpdoLCBLPxtwt",
  "key9": "qSJwifvbsba4345AssoUKQEqARjSXbF529gXmAKyvVBio8Yx6ZR9AzuxS9xsd3t5nWetA5ntrpt2dNCGJV8zB3j",
  "key10": "31hVwfFjcgFQpNhpG2gJgazV5KkYzyzmkXhxVnqkA8y7uzteVAkaADDnExUamTrCCqevpBKUKDUUKNdfFypqL63R",
  "key11": "7x9YmrJFn11M9dLzEFrJp7JoFpgCiCukDj3VUjwKByvLijhebMiFnV84mdSH3tTkV85LfTsX3F9Mxpbesf9dQz8",
  "key12": "2L6Nw3LahoGdchLEam4C2tU2zn3jC8wT2c5rHhpS74Fk33cnwvN6FcbuyU2bjuUNdLwapGzFLA2aPetKKEoGuhvf",
  "key13": "61kioEcF2YTo8Sz7nuxmhdeVF4i6VGBu6Ujjv32zTtoA59LAs5QKED42n6bJmNWZ9w6aqjxmCshcw7v8iF56yVes",
  "key14": "35ie9y2Fu32NwGF7kd3omE6TXxmeuzkXHeeTSqcR9wBweBS2wnwpFFdkdSHhcMTksZMzCNbsvua3zte8Ai4XRoxZ",
  "key15": "5ZwHvYXkCtXkxVaLMx7CpZtfKB4MDBHtiJsqMRsJZQad2j3NYTcJtJ9Wu4qMcJPA2Nzepg587CEziq7JANy3ZK9B",
  "key16": "xiMnWZQoe2RT91Pg85ubsM1uqcPMdUr9cC27MjuNNjjjTx7XpzpvKSifRGhybWEar1TWh6itE4KTjuL9WuQGjmc",
  "key17": "2R46HKVPybn1QdYwVDU4occmpt7de3Gj54b1zK6c3v4YyYybNATWuXEVNpJ1eUCw6Q5v8GNJeNHbaQQHhRYfWVMN",
  "key18": "2ZLU1QP8UBa3K2vMji1NqXW1PiiQZFednFGLzqH67RgcUPfdfa48AmzjFz1uxsNiFpbumHVH9kKMbwVGgG4zKUXj",
  "key19": "3PGUxTPwAT6pHFUo5LkuCJDBbKtefjA955pWbJXv6bnuEbVapuqnisc7WtQkY99oEGtVoL8SRmTD95cizZnajSMY",
  "key20": "54eK73bxFk62yhCuwGB6AX3DpPp6ZFFiXHJaXdYYnMET9enqZKgn5bqqaNYQAiydGFVcwvcCcNfnFLvfmy71NRT1",
  "key21": "3YnhrkLd5xodwdKaf63Reht4gmsX7BxKJfGYEyyFNt5vwCbTZYw69rkyn2TCaMZTMgFY1GZYctwSgXFU6f5N1s1z",
  "key22": "3HBJxBYVSd7y4sckZBDgU1dVigk71cUpzQC8QtpLMqXJu5zFUGKyFWNnZsWXSDHEApwJa6i6J6hTUzuDEBM2nV5B",
  "key23": "5jLbyLxRJr9yaERe5JEwonRzxSgtDik2afL87XpRbAGRu2Y8NPnAWozmMQAGavgy6rVWxioMMcKJKzQdhiJdKQdB",
  "key24": "64zrLkUtyGGu6AbC1FzT6NZxFoyiH25kJL9DAdBb4dsNdVRPaCxePgBh3eEde4Ke1BgNum5M6SYqa4cRKd7NE9F9",
  "key25": "56Nj1t6pZLSjXJRX9cWmNvBDn7yYkTkNPEq4DLnaJ7BuoYPipi7TfMJgHC8GHqR6j1MfoFycZ4du84vkRGKYDD2R",
  "key26": "2EWfshxYGfkXkhvmDkz1LiXijWaHhZh4pSnchd6gtPhgWVsP6giUp4T2HUacrgKD9HoALUP4mgMBo7T9vA45xNbJ",
  "key27": "4o4Y1aTwnPSK37BdHrerCoKhzpp2PSoTaY3tEvkerkK1yNBfemcx24FT19sDSkWXXJA88LZU4HDZ3Vv9weYi2BnR",
  "key28": "X3y6X5xSq84zn2G9NTy7LGjcHUnHj8SMwcUjiq8SpJT6C1PxFi7QtT3f2Pj2oZKaYLBsSpZiSM8FdKNbMD1QnVa",
  "key29": "2N2baBJ9s6o4KnpXtJCpzod4gQWBPiSkbqWbgruveSWVBWTR7EaGBRUMGAUNY8EbpBitucAh4WgKLhmLQbSn52iK",
  "key30": "2qxKjzNNC1PYVByi46GtPQdCkddpcocgi5ikdMdM2fjdLT5H7yXpx7poj256sBs3XYwAn7Ra2EicyEwQqQV14tQ4",
  "key31": "3FGGpqWk12yiAxy6wdrYwvURUonJKVh3z4yLNhpcGZaDGZ5KdC4hW62QgK5MbSjciPFdBeRJgMsiB6CuPARTwvBY",
  "key32": "4L8zCNCcoGukY7ynbV7TRgeeBLx4GxNfQ5NmnBShxxy3s7LQzGYEmNRUbRAa5o3ASQVtYi7hKvWvVx5AxRzQdSAw",
  "key33": "4ZbpzRbkfWjtaepWvbTHPfpaptP3KKXwWLxnYQ4TeVvjgNdPGxLEEh6CPt22mwUVMZFtUzd3yDdyexrwGDBLJ44n",
  "key34": "29zevp12qdwPqxdQDy4mGQgCdiyzzduLW7g92qy7DWavG7mSzm3ABXsYkvwZh1ZCQz9nSKxeL7SMzkdMYvdf2cUt",
  "key35": "5aXiP6JKCRgatqSSQf9VXwYnLPcKLVMibJyt7rihmPj89ovtv1j2ibzUbiHJjumNEqAnZhY6zFt4ZipfGgatyNPi",
  "key36": "StgZCHELuzzSauKEMbmFdvcxvy1oPbRHQKTg1MaBGVHMf4xAjnC53LqWK8p5ZDDCf7ZqiQBPdqvr4795o66QQgx",
  "key37": "C7rjH36BoLLpXS44VFrT94fnsznWd2tZKTfRR49EeRBka6qzLcihumJronCXtfuba53nVgDQfMAEQ2U6V3fiGAx",
  "key38": "5BYB4tCqmDhh9s3KLgjzXiwB57Z6Uc2YC3AXZ33HUkkRCsoCXoYkzXXVa3TwhkGHvuEQ3BZm5n2ceFGiHeUEHA2Y",
  "key39": "5mG7nLxRUCorXPuQ4DJ893jSpMsvkjjZsgQxxk9muNiPyFry7Fq6UJQ47VhFd9RRBZgrGGNuosymt8mQq2JYwtWQ"
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
