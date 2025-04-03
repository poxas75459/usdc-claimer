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
    "2qT5SuGk8KebxffByVVbP5AtNiDLBG99TZ2ntYXeJjbMVQMFLPhZ8iPy8kBeGh4ZqFB45eg9FUgq1fxmJF9Jxvim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hLEtxWUDm7cnFjbYeczxPx9mXMoHmuftuyYMG6Zux6ouFeGsfdJGEYaefTgoNE1KUGbr5TvWrfQD3gf7X2nQMTJ",
  "key1": "dKGJKohzMTqq7Qj13MmteVq92rSg2pxzK9p5TPgM8PuoeeQQvJgxVa7PDJphgZDQS4s9VEza3gQLmdNWQpKVUi4",
  "key2": "19xwUbS23trNScrJsYr7PwRzMTJighvaXgqAHAHX1udGAS8zgt1KB1h7bXmdg7b51bdV1tww5kPAKwvGy1CMcjW",
  "key3": "2n8bjpdjfWKaTCCfb7ZKFEE9cXvqupMYRCSSwNByrcKR9yTidxwHNLkMvThwPM7eojxTHZQyeziBpwY1xtb1aoD6",
  "key4": "5bgJnPq4yZQSA9aFG18Sit8RLccaf2BVQGe6v5r5tCAjmqNDeagtJHtLLPN2PwyEVJgBjHzvjQkhNMrvF2dqTdYv",
  "key5": "5vKEY7ozAu8bxNGJiBCnR5QyE38PWpZfgBJCHzYyQzpnVMdJgrHfGEL44QhjCSM3mtHQ8Y4811pGFgj4EQSxoWEa",
  "key6": "3NrUuRMm9W5RgGzxixz88MaGNa54yXHunnXTz3E9MmFTDmLshCrmchuxsG3PUgmAKqDPywWw5jjdiAjbJ2yhhQ7M",
  "key7": "3N6rkPqEHpJW9kmErDZ9KPEdG7zyQU6xkz3JRW4c9YuFqMsGiFkauR8uxFSKyVmKfRK4CmvLPnuX1dqe3hGD8fd7",
  "key8": "43jSLTr4QT22fRj4vQdZJPr35mbbpGp3QubFERG3vpPSBZ5yzvjvosQbMw7x495ktfhfcsR4RxsUjpAvpzbsg8xw",
  "key9": "4WcvTfSRUvsRq5uK5Zfm3jGyKZjSuDA9EEdDRQrtW2V141v8yHDEeLqchkrs4X5H8f9TfzYeNNYR4jLFUF6TCtRU",
  "key10": "2p8bceUxzLrJGU1XBzHNihStiGLDxKTwpyvE5d6S879rJM2FS94rLN4SuNSSjJd8qQsYQiLd4t3xVG8DfDLLGBEM",
  "key11": "wuD8HTZviLZKMYPchkBP8CANnZx4CdduBhRUD1BenMpmKnCwNZyhZ1QwbiJ6eA7SWGgqkQwFTup8LjFFdNLW1n9",
  "key12": "58bKMvTiCB3hFzt7cRRdBhfe4fy46xA5vTU5BGaWL8ZhmSRjqJeQeovwD861LudahUKLURZPboAeKQDshK2kKvgi",
  "key13": "4j3LM9s1MJuSdsUU5G5hy73m9RKoYhCVfsvCjYkvfp1DaKL84rAsYAGj4NoNkV5CnuxhxWGHtutAZRspVmUzpL5P",
  "key14": "5ZzQFEKTrTTfMF6dbRiMpn5vmJphFSZuUYoSNB6yuWuxeuPxw6EJNUE47DhKegFu9YYkHP1bBkuUB41RyAgdFQGD",
  "key15": "2s2WpY7PQhnNUF2GacrsNJ22V7K3fYvzM5eP1P18zwdivc1zzaw6YRyuq2EEH5NEcXWwGY1e2rhZJUk2AAuh9Nk2",
  "key16": "5psHcsJp3JyjHsz8NZePZJKYSF1FaR6VPDZ1VFXmWKT5WHXXMwDMi7DDqZj9ayY2E7TXtFL8BHMAeQ2dP6ivEQ9Z",
  "key17": "5PyTx3TBSESsahfVJDoLDigCRVSQzBdqvvDUKsfCwv6ijqxRGDNuRtXuPYr2XXccSVGZMzN3qxNJ5fYoLrBi28BZ",
  "key18": "vAtKEkbVwZizW8d45bEugGfV7WrePGxiWVdcS35BJ6TJYTBY4ApXRtjzKerHZECcuJCD7PZSYCH4gSz6uXH7HZJ",
  "key19": "ktixFVyi8GPvmoutxv4V4vbPXktQ1xcswzi4XvbV5nse9C2jKdGQKgvjaW9GtSkd18AfNEGHLNrBzcjP9RTcLVA",
  "key20": "4TBRp1529GKvxGGsVH5zR3gr7NtT2Thh9e1ijuRLDhpvqvjsvAwphQcoiFTE8sKAnwDfQfBL7i6EF9KE9z8KFRYq",
  "key21": "4jjWjAcqyoajP5zi3xFESd3jhmSpRcUS5mhar2wh8CvT9GwDL7Hs1DMZaAhoJos5RZBqf2stjosqihMaZzBKh6m5",
  "key22": "4yvaHPQAkG4BSKfr8zsXn9rHFghveTQoAqNw58UtKviseesdKxyivpMDUunvETJXJvRucPwa64ogth9aWgCLQhes",
  "key23": "2QgZuvxeJ7XHky9Lr5ePwzuHWBs5xsbJ5pJ5aJzACvDwqBhqLhpwz8NvVnqHd6FwYrwNxXs72ZRv8oibXkar4Ttv",
  "key24": "2znBNDk2NyvrSHXPfD57WwPEYB5794enjVrzRipNyjjf9MMa3xrr18HDz4FgP5Pdnjjzxaquf9ZSGF7NrrN5u2gN",
  "key25": "5WKPKNfFVmQX32xBdVnYEkUGecwV2wGUgSX6STsFeGu1iQvJKy4bq7eQHKEqJkXtQACrwFBmQE5rnfRSMteRnMe",
  "key26": "5N62oDyGv4hZ4ikzVNdQstZmVG75vywAYmhAbxpmZdeRsgobpvqsybJ2HnNZue2BNWsTb2ymNzxWAWWeKPF8NNAJ",
  "key27": "5YgCUUkBNR7Tf16N2JfuFGRyiksc9VT3Bfi75A7vmDXLT8u1rY1H9ubezUy7Ry1TJtUQrckY6bETbt19Nrnvkkkq",
  "key28": "3qDU8Afw5vMUxuvJqAJg9Up6xvUdc1c6PFEphb3KgoNAWvnhTMBJWnrnpqNfHjqj52nF365aFQuSKYNMRzJuJLVa",
  "key29": "3vJaLXZuUM3ECcW9zawzTFdFdES57oL3fhUyW92t47yBHjqhVuHxzo3KTUKSCmSYhkXBvsLwScPkNQYptqTAKs9",
  "key30": "TETSoYvHKiFACDhG16Z2Jr8xAJREAXSC2eKmJEr3ayMonaExCKd4AT77R6aL9Ec51VEUSNWEihvN7H5kMv8ZSEQ",
  "key31": "RyujNywE3sBiRZVi6NQVui7yKXdyhux5n3ft1HNVy9gRBSafnwhCEwq4e4AiuAsYhYqJECRzkjacuLfoTdHar9r",
  "key32": "5R8NP2Ys3Dh7dM64dBBTkwffwdrojvoD7W1176vcmWAZktJXEpUkXGA9FLQc2wj5eYdgEvyD7RoXnnd6VeAc2gPD",
  "key33": "5UuFgKTryeDzGHYS1e5NJU3pYMSv7RsE8Egbga299iQasaaDQvNME1sfRCaBKtfjgPAu56QRqeygdAEnsQxwN53t",
  "key34": "viiDhxAUSWxH9A5M2Rb3SohZM7xUrq8k8sUfdNRsWhA6Zi5xwehDatpWT7JoHNJShfXxDZVtgo9RCeLNQvBz2r4"
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
