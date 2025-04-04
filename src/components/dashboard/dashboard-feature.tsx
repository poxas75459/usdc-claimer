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
    "4VojmRJutv2tzbkvBA4L1GZP9bA1rcn66MtctpGZJ223QsEmDdxDxKx69Kh3d5yCYR4MYEF1Nz2BcaUNFsDo3kM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gE4nMX1HYnhyZkVLsefcXYbWuyAyJzgcrmExdWgcVtw5j75U7UhCHyBhWKwEP81xSij7iEJaSt8r4eFG7yDQDxG",
  "key1": "31J676w8gdnEWFZGgcPGFyTj9s7VmqMRKxc2fB7DBsPBNxvLzRxHYhjo4CgDQqLSXeuYm9tm13jsLvLeiRrsgkE7",
  "key2": "5ndBSbWCJJzp3JcwuQKK4xJrFcir3SrxbjKUqDX79PeCqr28Crb7LZRsU7Cz4eH6QugE3NHZe7D2XSfvBia9ZkHi",
  "key3": "4MsUXDKmh8GwdjKXLCJRaC3x1KiK82CNcJyrvu3Jkdbuu9FzsDwnKNQk1EKyRCwANnWkQrQRGsLaDati8LCo5nXG",
  "key4": "3fwQwSSbk83tukovz12M6EGSYQFXJB48PdX4j9XgXavRKWWNy5ApAyCGPiaf8P9xV25Uu2raZpx6ujk962ei9LJU",
  "key5": "2AXwmmqfKEbfHjT7vrwPv9jpETiwLEZDUWNqiyRJmnVXZzK4ApajVMoyvPrNZ7ZG33LtvEyWZ72bUQCXa4ng3Pwr",
  "key6": "4HTk12XrouaMEcuSiS2759o1Ta2hQ5TFDSaa8sr5ko6s7joDPdfu5D1vUTANd1YvhBrVnxck6xuXgH2YEQhKonfx",
  "key7": "5rk1Tg4F1oZTrNas77Hb1UAqjmFDdqPptSHQxERBHqdUCuaUyuJS7B8NGKykuT6EUhLRpc7DYsUC7YA3j84izLbq",
  "key8": "48h6agD5eNZqcbueQ39vY7XgyqbMR3t36spMYGLPfnun9UDBtdcSAiN42e7vK6E7Bn3ckfyLcqLxZDS9xXn72Yoh",
  "key9": "ZTCaEcZyJ49ieZ7AM3Ukc9nL4zkkKFYR6TBtzxEsf2jZH1NRwHskhG5WnnbTCMb11WDLPLgDGpcr5FyiD7MQULe",
  "key10": "4VpJffB2fUVaEs6RRiZPNMP5Mj5XFS7dbiqjmUK6ATvo1hXn9wJcnVg5mQoXWhsUqBQ1vCN8xi8XweThmHnqvJfH",
  "key11": "2tWJdn2srMMr9VecuL56za29ND2EhHjukU41GY8xBo7TrMmMJ1Zg6df6yt3uYBHC9obynk8V7rh7Ui7wyprtPBR7",
  "key12": "37yQhJNqrMyxccyjynLKLScavaeyXxpn9zpHdiW6Wh5B2sqsAhTkcKdNwixznTp88Pc2YFMFy4XsJwkQL9i38Y66",
  "key13": "3MkjXS4iPjMPaSJgM5b2NtfmrUGcFBsEGYGH1C8oSKvDTfhkPinzZ4ZHuUSd58sqV67YakWuxtRCv1rMRCW2rj9z",
  "key14": "eBuCSc4iSUWppnYf2rdyBQ6TQ9JBzdj1CEmdb94FvVhUHue1KgvkRdcBdsahbv4MUDpTfk35KhioWh1MYnT5S4o",
  "key15": "2VFHqQwaXvbpu67GeJc5wKyHG92K8Hfya1Cfcu3KdBeD1QZswdgV4VxXeC9RPSZ1S7kT2vM1xkEJ732hqU37o6nQ",
  "key16": "4XTh1Z5wfSJ5yoGZkv64AJqRPvAG181YxTrBr7t5VTCSTrRtmvSYZYhhMcDZ29vWtWLaFpWMQs4oRmLeKSuZL2x3",
  "key17": "5MTWmoLU3cAAF6EH7h8Qqd81NavyqtZ9kztBRoBsYz6jPBahyBSw8widEmpGBm87JF3QGfsnT65rf1YWvs8ucH18",
  "key18": "3ymEUsX3hSCrVchmcHurKfxrFJyC4u3k2YqgjHgWUwwdos2pozLPXADAsqHzbLfXrn19UW9vBAbpF6mS9Y7Fbh1z",
  "key19": "5JWRqjuGeDKMnKGCAu8pLD4VUvRNAGMQyd2vfvNTGphyHDyrytw3CRKkhoN28QSro1nPHRN11VS2kgqojx1w9Fkx",
  "key20": "44VXhazmpMUpYVK5d78c1XpbYUNTkU1gCvUQ66CZebZW7ofYS25S4Eyq2Zrwim8NJ8xKXCZf3USqt7ATNprFn4mX",
  "key21": "2GbuqX3MJUwWN8AAcmxS4CGjQCmZZ9X6b88SNe3HqEGbyUjsyjSamP3o921mte1mQ8ELHvQVApnY98xHEXRZnX38",
  "key22": "3RWXpz3nrJHnKwqUzPuyFCdvZAUmnT2VtLA2NS5WLQz3ZXPzBot8pEj5EkxAkZPYm6UDHsnMvmrKRDdLyd37qTAc",
  "key23": "4VEsxFRLAMknbJyfPJ51jdVFqPrkTkAxS17sBvsuxbDXMf5ojq48KmjXu2Bw2Px72SNHcG66hc9HfnZ1N1PpdcVp",
  "key24": "Cgq2eWE7QiGXuqZdEoDAN882s4SLc9AQGZgizpxqxQYKLDNiceqqwcG7oukamvL8429e9Yh2hCEujCWogtBo9pP",
  "key25": "3a5RqMDEknvChiNjTfcxseYVQvaEcxe9ErqYzM27DBGkzWffDYCgqnbvMQibhWTDL7wxzx1yAsXUhSsXU7UswW4R",
  "key26": "3C4nCVqTiwCjtuwejGxxbxcDxJ24r5EQaJFRNZJevfaPW7WaWoiUggvcwuFbVwNbcQjj32xop9FMQcneQD24xHPf",
  "key27": "3EZke2pwRz3Q14MhDySLrBjNqLADyPvZWHxpvZA6DbrUeCs4Tq4GtWgmSKkEXRiGApw7gH6ox87eytQqwtxXdzGP",
  "key28": "41fb9dKXYS7ZEyQfPHNvxWtVJ2wjzwzEzgt1w8kdtXCtP7c6mi2noir8PsrUdc2iojaKhwhfUgBi8h7baw9k8pXD",
  "key29": "3BqpWhyeNNGeZrovRpHrJCGwbwfje4ghQgdAWtq6pvZc1hqbzoYz2nDzmeYuvMomDGJa4kqVLSzbEK6GYHXfkema",
  "key30": "2tuYWgF4KmSC4V6s4NQszfHAEFqob9jWjawJCMoBitY65rnyZnVuFfbzG8EHKL7KntLwKPdTEgRczVAi47GCwVKU",
  "key31": "56EwNEwKiwisEvo7dxt5BZSE79TP7Nar4GKqu5YUf6EWNPvFmHitqdrY6qq1kiWWB1bdYGjcknQ8SMVoDfb6VxMH",
  "key32": "5ruQhnY8ce31kusHATbHJhqUaLjz8CEyvfkTnfPs4XKWNC4BGQHPCWwjQ7FHgqk5ReRz2fVgpJfRaww6VDwr5C8F",
  "key33": "rtEB9zuaXuaBRENcfPqXZmjxwLhHUcCyJYmmLpRLGN32VN6eTgtpaQi7F5SN8hSqrMt1PAtjvuEB23mxN8caQZk",
  "key34": "osaSzLUaJZ2icXfFnYWD5ZvUiPnf2qSJ5B2XhjrtBnsUbGAvhGn45uLmsezQnTcWDHpCtNzQb6GqBbsCt15hTWJ",
  "key35": "E2JW4r1nEzcbRSEgUMsoZa2QTCGFWw7FTAhZYe7KXjPkP98YX9U2NCcpb9Wrs77UsgzrwhGdNCKJ9S13YsVJiQn",
  "key36": "XvdMXSh93aLNj9Dw3oockUUKuUyAtqnZHW8ZxUwpVkF1yvNewnFGwqMLgdRAra1nwa977jC9fyqqPh429854TJ8",
  "key37": "2rtCm8EZYsX2tMB5hTnviAmTSaXU4BbLriashyG4CJSzPoHoSs4PmBs3HHT8rpgRaQmsVsZ4sFq8DprHvr7gxa4w"
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
