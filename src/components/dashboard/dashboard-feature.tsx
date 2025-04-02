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
    "432P87NppTdi1un1firjFj6khBEMcd3rRpb7JQjwRkFDM6ru4iUSPEiUdKAm9UVXciazG5ZcrhchPfncNDZkESig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wping5XXZ5v7Gm4Hd6DfMrcqYkN7KVTmmHxJGHRERJGKhMRGfEW2bVraosXpqnKVcgghD8dLEfEiUCUfE1fEEGv",
  "key1": "4iW8eRD1AnFR3Yj7FYCzTfLFiKMs2kJR2SwbBzgWLzA69fC3imdev7wK7ZKJ1psMekqSR3ERoNd4zYN3rdbyxghp",
  "key2": "3uDNfnALPtTi1FXy9KJG8EkfvY7veNzXjfF4vw9rv12uLfajDTwzUMe9rHkc6fxaDtF76bPFvVPvoFjeyMX23xag",
  "key3": "4PynBPFXBEey2RwYnu1EgzmoiRfkb3QjctQaFQzu8m7nbbc5MPyHgYeMDn2xyCUukvkp9R6gjRjC6GYzwBNBSnsg",
  "key4": "5Tfzmnq1J1dgKWRgNNMKJpx91sjSaHnuEMmd7ZJvyKgVQdMhFffmi42d5LVWk7tkCKCRr6PziLRUWpbncWg4aj6A",
  "key5": "3ksQ2u4kq196LPJMCTudADajd8tFc4jbzpmv7Swc53aqTJDbdukryvGXGKEaXQNdvui9v4m8yhixgz9MbeVovhBy",
  "key6": "3GW4upYUWMgZGzsq9NUTPRW8xB6iQEheuEaanpTmYCUsgSZjuQ1oHfy8ixKvCPoDeiTba5ZFBaVXpPFR2M9KS97",
  "key7": "nw4z5Laj5nCimCFDzipNhgP2ijNj8cWYhsKPtVa7S3hBCGpSZA29pbHVVGhXxFvu2rfJkgaYsNpmcyw5CMctKsK",
  "key8": "3Br71WSxdbgfuNZGnj6mmrwCr6MJ2fAi5NUBxZJQuXVAwzYoSrE6qTty1AoUTQS2WM6xZTpUSACpxJQ34BiX1gN7",
  "key9": "446eK98gapym7vQzgvZa7wgZo8gbNf5yzAA8U7xxnd4zvKvQHBqFeP5MRrf4rqQQHRkKwf3fTngjjrBHs3ZX1Sk2",
  "key10": "4bHrJ7xXEfMAVjq3QcWxqaCckFXMJHFqShRcoswbsb9dNCQ8ukU3iDmJk2Y9r4nqHNHd8Wa1tmzr81uLK3Td1YWE",
  "key11": "2HPzzZEW9JuS473LPdYTyQ4EmZQ9TLzTdAbtWUmWMfAj1bi1qxQ5yvFK4RVFy4Ka7REynRCXE9YPNUcRB9dgaJC9",
  "key12": "4UMhAKSA38a9zTzJE9q8odEgaqYJTWNG2cZuQ7q56rLkgS579WEHvvWdTCzQzayVZrag7eXmdmDWf2nXfHyqcnHR",
  "key13": "5aFPXMYEPN3EFWNW95PJuKx7q3baQbtLwwx1umuJ9jAHDEBBvtkbA5eLPPGd4LosRcTLMNSkp7jmSWePKU8qsJsW",
  "key14": "4stLoT5wS9ig5jWyeR6bTdKa9yZn2HHhx2foaxyVnPMyrWDf51aGsGTa5c8jvjgXLX3bvFS6K9aDXC3AEsAnu6pi",
  "key15": "fRi1poXbjMaif1S8wRu1QuddxKv9LGRnRbzsfJnYN68UDJPVjciNuce2jcGgUnsQEkk8MNVbn6YNS4Ni3u8mZjp",
  "key16": "2nbZohw87AacQ3y9UpPksYKSio26XVSZ4q9yMfVh4b2qAgG5GuuDr8mFqWfWc37jDRe8bhbRvxFJmz9LJGQPc7L5",
  "key17": "5VWAzAqyoWJnRFxRmAXHgbY2aTFvFvrZNKnk9pKZM7EcJjQjPA1JhJe1gsqhAhen5hmsoUFLXj7JCMzjRJHoDnLF",
  "key18": "4ABVcN2yFmnHjcP7RnEXQ7DUyCi86U9uZfsoMr7hipBWxToZj6gRE78ddxw6Vxh7GzvRbaWVVnrQs7xFfUkj1hbd",
  "key19": "4pWBfoVMQtixguokJVVzv6eyUynRhRv6RYS6Ub8oPqXZdVz49Ke1d5MgYQr6822Zm6h5MJpcK5jedAYb4mLHyqAJ",
  "key20": "45JAUypbWkJz4DCnNcWUujkx4H4qhNqh6XFDFP1eHvoHsVpKdtWhYmkS6itMKaJ4Aytn5Hrb7j1x2CmYSPpVMtfo",
  "key21": "XfLmmtfHsytX1BbyUmM4g17yPuw12NKSMoThZxHHF1gEB1Hudn9xyF2MiSEdwnQcx13oJA17Kw4PZ5dFNNaDdpS",
  "key22": "rKxFixYrw7SiWgsR2FYkwYw7sqQR2ZPV4g56fpYYWUr4x4GZSP4gMAZgn3Hc32jmfHcHmYSHW7nYQx8FkSWMZK3",
  "key23": "5WXFi9frU5tJdDiiUd2miqYyGGZEqXvwEUvrTVtcn7Hqv164bkuP32LBogA844reS4Tww8ispAMoyx2jV6DTVPeX",
  "key24": "4XGJdq1f63k98NKoRyzuXKvJ3gyBfh6XTjrxWubK7u6LwtaK1FEKrUX1QtgU4BLyLTsnQZwQgRjT6D593Prq4Xzt",
  "key25": "2MuzrRAvchafJQ9MEQArq9Xm9YKYPQVaSfNR5oJ33mb2A13yGYSiFG7NDd2CUF78tcYxc7wdf85RioGt9aLPyuVz",
  "key26": "5Qq8Zqbp8ACtH3FBFU2gy6pAe7LtgtSSUTLHYBv4aCMh5zT2cjW3B2dyvui4sDWCtWvxmre6eAHemps45d2ekpnN",
  "key27": "3spLcNesen2289YAxhx4kz5JKALGuy99VnMzxs7tKfzZVSp81EcJY5KjrR6yb5SvwRNGaf3dfuiZSLpRJWqf3yMA",
  "key28": "4HTd6h9n57y4GrAECvUdGKDLFocgr5PyrxrX1AoH6bsJTPw4PwW58fpqD8Er1Fj9p2xsHNvNp7Aoa7NQJWRi5PJY",
  "key29": "5Rbnb2J1SrhNqRH3FXMW4Z2C2gmWQEYKJdRNdD1AnqQpo4KFE4jKoMSeNzQs1k1JV2KgwUks56qxC7GyNSdPtprc",
  "key30": "GAnVSHiJL6Mw2hizrSswMiQfA6UrRM2ecuGQuPgVAbcQL1khEj9fg9VBD9Gexfx1aXxoDeErMeeE5AZ4gb6zdUC",
  "key31": "2A27ksrn2C7HgxZCxTr6rXf568tW7LEdY8xpT1GNSne2CEvYyPJSQqvxjbJ51tMfQf1HTs5hYjAtB8K3SPCJckAR",
  "key32": "4RqZMATc7AQesyronyH3zrBVtZtLWi66C2eoZcHMUPCMZ33FixRzsbNo3gNpp7UsvXqa7gFEHZ6H9EN2VJYNT9Qb"
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
