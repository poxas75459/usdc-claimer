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
    "3Warba8VLTQ54AMWfzBxiEzis6kSEMmkKpZxw1GB35GjoNNyrj2J2ShZEy2Raw9N81VNm6Qc1R2BKrDhApXVgPAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZYRtjqfckRiXhB1n4Jues1NRktZpqL1dKKUPPsUgML6V4tPEmcTeo2z793Gftr5tfRDSmQffAVragdVAf987WH7",
  "key1": "54DuMidq4cWiJyBT2oXCN2rtJjGSwxmrNMBUaosGVHYe82Nn1YS9vdYQjsz4mxeBGD1hU8PwxiTWAv58i5tqbR25",
  "key2": "5c1JbgiFfiwQzD8GgT58zXwjQj2kqS6mwnEtcmiUJPUuiwfANKkSvyBFWP27uJMoKCF4d18k9Up7xMcfKAV6LPQe",
  "key3": "3pXiPXmihvBMWk1Y64Bnvu9WrvBCckmLsEJSsR1dtBDehb7XMnracTiJmrC9yYd27GEF3J4hrAqN7phVsHWvyT4T",
  "key4": "5ftFJiAcSm22FtYbmN8JeCdFYyTnZ3c43wV3CWGeSFXhzYUVTjSDaTzbPnxQTbJJ6HbtAqur8uFfKhFxQiEdP3aE",
  "key5": "515iL99Jn2qHgKowUjH7JHbT7aukozhJMJiEmwhFfSEWVMQrcisH6kYD2N9kmZy3xCnhJG4cWzQuYFZ5mrnkxaSd",
  "key6": "664NdUmUQTDjDh9QMjpdpnjN7BhzgCSjXXyQxHXZ81wZ8j426dCkYbKYJnY2oRa4xWs2SVQyCUFQqX9u1c3mdLZ8",
  "key7": "67ZnrjiKaDEzbhnPVEdmBZCLhmtczXwwQwL5kbMWrS9KBiDGjv1MfwHufNBiQQJ46YegyzrV6aPnqJjCWbWQ2iDu",
  "key8": "2oJfi7pPZYwdHjn52v6eUjFpyh1fFX1yExhqJk35qDSFE3DXdcMDS3x3DLPyqbkjdGaeWF7gUTC2UzRnre3QKLMh",
  "key9": "4TEzJxx93eXwZG9kzRLNfRkmVJA74uADKHPKMmu932pmhxQX59AeGr15VgrsXUj5Et7bDYgiUmu8hx1xexhgTYPB",
  "key10": "64CgeUWxuxgQfFsBgJdsoVcdxHPfTNi9T2g8NvzCbZKp3jUMithe1QyDYNoCzTW61Sw82XADtRGLghEFcCKfLFPa",
  "key11": "5P1c3xgc33cx5zmuWBASxSdTFY63rq6hpeByGJVHP5dvTxJrPS4c22yziwVBG4V8LYRUkAM9RkA5HRP5Z375jCVH",
  "key12": "UfNSwhJy61TW1xhynyowrEJWcnNbrZxWAYK4stFqzkhRaFuXmXxmyKriTi4AXt5V1GrF3bWAteUH5MRTQvgn7mb",
  "key13": "2gwoyYnxeAjS3wFS9QvmJNfYot2v1GBtwm48v6SWgfU1XGEpVtrGtvfuxgJHTFTYXYYGVm6foGtybDoWgjxexzYe",
  "key14": "6Nkyf1hLL6qSRzX9b3BoREgeMgjgLyZzZxxD2aKuVjVC7Jz2iegiP5LA4G1PP63VUK8JE7BuDdPRiZv28BZsBTT",
  "key15": "3aDBaybrPeaUWMhdmfmFcGVmDAbPMiEJP3wo61WggtbKyFefbgjFb4sxPVJi1FWGtuM5VZ7oEw7QhmJaqrBq1xS5",
  "key16": "FDE2Hh78QZeaQzS8NVrLSKt4oX7wuWs8EkbLEKM9uaKNoaoXTVBvCDxGZQxSfq7onYyDMUWMXaVReHTo4ogaEr1",
  "key17": "5UTw7eFwFbJdjdXPUFRYe9CwW9M5LT4j434iGVSgovdg15sCWcFWZ4kVm1Hvd6Kjv6APizsKkpAw3HybWbp8VXWq",
  "key18": "5mHckNUpstoYn1azzcRSR8NsZoy7PYS9UdvWGyWp2afiVLsxj8ppSvXdj5PWwSKnSxPibhDPtLQL2NTLKuhrQ2SC",
  "key19": "3NMNoYRNF6yfnG6HLrCZ4kUSMTJ4MmVvhG7BVvfxJ8hXupzBELqx38rCQVNonVPbg73cYqQwFNoZfWnzpSYgW1rG",
  "key20": "7esNQFVmmbWiPXmw6PSvo7Mts6Vi6DXhrGxvod4e2H5NzwDQhKEc4Y2JYnDAMRD6a1L2Sii43HtQ33psGa8EeL9",
  "key21": "4EcGGNcHFaR4MVfx1mEm3q4NoxzLGCmfWa2ACzTyj3LnyTdDdWzbhWkXb9YfMyJJfAYRzBzXoLdHk1EJSgQuxr7R",
  "key22": "2SbiXjHREiChmgEGpmcp8HmeqbHjFhNki1JfQnJrp2LzYbGj15GybmM1wihL2RDJkdGrUS4jFnkgw7BnCzcHZ3Kh",
  "key23": "3erT4awcHEhEqwxkMmvdfL6qtdUHXHKgWm7TnFHrRqNYrgX4qnqV3j315UTrbZtFYcQX2BnQuoDk3Z2vkGWBpreD",
  "key24": "2xop3ByTHnxAUKPpYVhd7GpEj8KwdgnechtRK8XWXng6Ww6vKiPgkrK9rDgrrJgZsWWnYGUm6hqshfBpejjHQ8KZ",
  "key25": "fr4dhqxekonwckMV6PKCv2HiUypqf24miDxxoNjxUektrq3h4QxvDRmG7Pp4wDSK4pUVzMJ1pSU249JQ5rrrdmB",
  "key26": "2PQvQkBkNVoUEMAkhbhYW8p7HvMq9eXonSEnJxwEEdo6uNT3zJpXro2NyuT9xSvUkFqv6KDZrn1aATi4CQ8v6Kip",
  "key27": "3oBXJenZM5rWM6j1MVKX1oqqNY5FU1d8rqEqkdNoy8xScEQVguN1xeapQAnSLg6UkT8JyWqqJ4ovuf6WaETanLHt",
  "key28": "xyDyMrZgNjWL9XR65tWGcyMtkNGGBW8JHo4JGGPNQJXeaUdTHj5GY28YrzULaQ4e289VywYfuQoSiFA5GonUPAf",
  "key29": "6yJYog3Rp7jyKG8x5L4nrrXPBKWvnQuknz5mboNHeMcotzJFuoAY8Cxt5yvpRi5nbrDXuDfeoGeb8MAsQ5pawrj",
  "key30": "3m5Yp92qucZ5Sign5pWGJTua7MBJNfFa6Hukky9oEWNAUW6NxdYYUX4B43nWDwqxGrhf6r1Gb5XoWgpuZXgMx4HX",
  "key31": "3rngi3N2j4g3LgEjEdWrQySevvH1Pn3Qee9qrqd2ajTHageBNSrxL8GPzdsk2TwZcXa44Edpkjbf9xGbiPZjWTXx",
  "key32": "2iQ1TzcaYmCmxRd8HhnrVMaFaewDdn1QZ56d3F9sUPkr4288g7Hy23KNGBx7Kx8vP4PRjwCeTf9zSs11eTeNd2xc",
  "key33": "54Pus46jkmVCz4vJeefha35qgXpJiBasSHP3WLiyfhuYrA4deNNtndpMmZqimh9E4oM7WywmJovT5T6hzvLn43LG",
  "key34": "4FpsDHUSJHELER6wfrewpSnJa7bvcqHE4Ziwujg5zdtMvMznwo83uZ3yQN9rFKW4KRz968hkeEgSmhm1eUbJgDBc",
  "key35": "35MpGFJyNW1aoj7xggFwCosRZkc9TLjhAXuqyL7zNMtAKnrUnLJid7ceLMqPYSAF83SWVrduCF55gokWWbjtW3Aa",
  "key36": "4sL2QtFiwGuLqMWaD6bVq6rVKRVzvyNPFYtSB2V4Mc83qQTRK5JF1nWc6r1cnzYjnwNm35QxB6s7uWKjrGETERf",
  "key37": "bTXmLxkxXZdncaTKX7J6b4A2C8zhvTpdSDuTyggGZUpS9vtdpaZAsaQjoijbhJEPnSrKGGz74AgyHt1fp8mM8DF",
  "key38": "4R2VAvM5p3gHuugrScjrNFksAm6GKjdMLQPjgi3A1WDBqVMDHi6au3TdK34ZggzedBi2CUMpouiPCRraYqpnRcy9",
  "key39": "5yPGjNEPcLLamwT4a1X9gGurdDYRTD3YW93vzrBbfrMGDXXRmkBTZKwHCrpCwR7U4V2NgRYqcsv8nY5UFXNLmAHz",
  "key40": "HHvso21CHWAjmF4Pc6qWbZKNZ6CASWoHoJHENkBSCs411oqGYEHNAukHuxyJMmtPA4bssqUSZLmfVu54FrwVZkT",
  "key41": "2U5duwjoT5t77bFYmFKQ4gnHaxGrBqdSh5hQwP6R9ZiG8u2J6o3W6KV4argxNXxKWevRWCLnoNqjo1pei2DdBLzu",
  "key42": "4Yq3qKgcdDaynrUZU2U6sL7NgnXUEouomWeAUEBCWFFr4VEeWo1FYSoagvcd29iVPhF3th4D2HvdXtNWWKFSR9aJ",
  "key43": "2HCea9BVwwAwzB7Ckyea9ouzJQ37r6EBVQ4qFygwfz9H4bYhCnUHRQgMAsw8s4MdGzjmJpQq9r5DZJkua1svTEJK",
  "key44": "3EZ7VSTzzXZq3DSAUFpVMJBJrYnXfX1z2L4eSLj7BRoA4t8SCYcaju6drQTGSPBnHP8QYoCrZs1Jav5uGpkzi1SM",
  "key45": "5HFa33WHv4xuoXqHDRvq692bcwAZUXMkB6eSp73oLuCpwCGf5gHtE6DJMcVZ7YpDuS86NnJewb4NpmrX3EBae7Yx"
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
