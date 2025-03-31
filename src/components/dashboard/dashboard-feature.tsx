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
    "41SAr3hC12Lry45Nczdqd4TqnjFZfXwAZWqyEF34XCUGpMSvTVkZAQCHJjETJCQBRBnSGuyVovyPBQFLPdN34y2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KpfLeBtW557jnouG3pywMJYHbxPTyLZbkPBx8P6DFqPhPBMswwVXEc5AbQM52MfuPKZhRRrr9Tg5fcDJNfJdGCh",
  "key1": "5dxFSYnPW9VcvbMD2A3ChQaoPed4CtTy6R5uF1Pm5RXh1EugL65wUqWuJV1uCVdZLfySc8onrZtRi7a9nJXDduVE",
  "key2": "2Hp9p5v9NvcyWcMoDkh5bmRE7ZqNGcJ8Z4dW6MBr31XC3fXda2tcPLoXiry2tEHrVNNggZFULChebABax316SnyL",
  "key3": "2pcvNfthC4nKu7tpvmThe6T3ppuVYf95YgP5p32TXaiFoQwiM2frx2vStVSz945nzYuzorVW2qm2qNqTVz41G8gX",
  "key4": "57nNFjebf8mU1DfES8msQ3pnMozAv2Z24V93MKMEha9AHPjZzR7cXhJuR9eosxsHXmdSbDLAMy59XNyFHmZCv88Z",
  "key5": "3BDocPpHY29fpYnjpg2XsGTuextQXQVakNXogo8Ak5MtibMsf4BTkS8pX3trtSdWxiNVy9p8WoxT4iWYiBhLLHas",
  "key6": "2cxmNPY6PtDYfcYKBUFPRxT1aVYukUX6GUKoFJb7hHhUSfJQM8KY1o6dXjp3x1NUCshfTmNvVFfhNeJ5XRXVdPsj",
  "key7": "3zooshCVfMggCvnZRhgs3dfzSr4AXc4DrCwcQQjUtwU3TvG5Tea2ka11hJ1TBaqZkeJ5sgfJRmGxwivujJNECbum",
  "key8": "493w2PXNZ8GjbmTQ3A1gxSazVqUWYus3Ra2zUxDhXxUhBGb1Yk7n6gmTpgvcj5n2a9nEadxzjeLFGD7TwTytHKJ9",
  "key9": "htVasfQ3KjqNmS9LEiEFBhk8He1qhcMXoeM5MvMA99SDMYhAbp3YyBwo8B1Ad1d1qmunmKxxdeFFZsADgPsSkNk",
  "key10": "5tjcTA4ZUvRVocf6vczSczsRcxTRauRgBC7s1yyCLip3ZfmxmGGVX1PFYNZ9AgPjmYCqs7FcEC4FSqkRgL53C5Eu",
  "key11": "4xdoJd7XPsRXTvrtiW1AsWgkvEpSwdXhiXfjh8SbRJLhyTkBwD5UvfxsgUMag3Kr74qcNrcFeKzChpGzpocW826S",
  "key12": "5Vts6CgVYpC9aGefWRVtH8ViHZpuvXomVQ7RxWoy6q6ej5EdKkE1rzYhfba2ipKCn62Ro7uLbaJzfsR7SibzuHV9",
  "key13": "4tFCa1aBitPCrA9foaCUMFFiNshWP9EVuqLfaPJh9DhpS986Vj65nJ4BNW9QuJkZZLzqUQgfiFWDVW7UGA2HBX4H",
  "key14": "5bEQmtbirNUE4b7DmXXHc2Gv4MG1mPzzPTLSR6DGReZYNaFdbf7WiGxRLH4Qeb3ep1TYnF1vWnK5bMeQuSwTH4Vm",
  "key15": "26DEAaMopYih6uWvP8ADb2K25LTWpqzikdw5gR9dBnRn12mKgpwrXAA9Ca6JZ5XU2URzjkhTLd3CHNbm8aewWq5j",
  "key16": "5MPucDUQohsouVxL7gGwY2DpxmkREYPoMr2Tdu4xvSsySdBGt9VBX8XeZRBLjQhAqegtNUaEpYPY2gj4WdVFib8P",
  "key17": "Vqgd4hmPYrgpHyHzzZHc3j47rvUu6dhp8p7BdVcrqUyj9pxvt6nuVng7QDghystAoF9JLhTjGLLtaxiGwJ7sLRa",
  "key18": "4NM83MNnPvHGgbiLZm2sr12JQ7iuXNkNZi8zCcfkdZbyUpAa2jvx4kEhuUePVcTNsNna2HEUnimx8ccmmn35KwtP",
  "key19": "ePnNeeNzhSSk2pV5ft8ARVT3ckdREXTqYeGeYWwqytXfj1GrTY3q87p3cL3tJarZWudemqbyRTh2g5daCsuq1wa",
  "key20": "zjvGmBK3ZBnhsQAMbkqN2bj4QjGrVW9haPVeV8gZq1EGpsGQ9sEymtn9ySZ7kyQL9zGqQDNfAVNMMJ5KHQDEPrr",
  "key21": "2Tr36W8XphZ99NWUBBWJeq7Z9puyzjFkSk8RKeRFgFiiyHxQB8YaV4UnFKEvaokvN8PaUAdAzWiZe9G9bEWbEcxA",
  "key22": "3zy9Pzwhh26YxbQdV5zGW7b1ca2cvmwk5pa4aTpQrMZdpLXTrPKp8uek9tAiLGmxbxqbef4TjELMZB6ZKqV7BNFi",
  "key23": "4m4C24K7JA2BWbsnufRo2rXdPPGRJfoCmgQMQwFfGqYaV5Guk8fZatNCsuYt7EebXLtgJnfNUzsqcUwHcoGrRchh",
  "key24": "4B4sGtKRJg1AQ3vRda54LJnBPoDpvQkiSfqAjNuDXRk7BV4RTiWB7TsJ5PVDwXYXQXuwTXra3Rkqg9nnvyM9V3ws",
  "key25": "4EKf4sqKAZHoAfz3PCMJrw1iF3r4YQAMcRbzYLnHW9y87Zy89EFePK594Q46pEDjn2V5wGiyDAMYjeNcRNg8frvK",
  "key26": "2qCCjPPj7rQhmyjLrgbLvRG6XkPH5XhPPY38EYNPAj1Fd4qf3D2qJagy5HM4YeGpWdn6uRaJYPRPrK8kHHZXyrVR",
  "key27": "puh8Bi1BytS5whm7TF6DU7GtDHzzb9AHqGRUgdCTbgeescqC1pMniofFHYRi5wz3PHjhyrHYMjTwoya3AxnAwws",
  "key28": "46MoUWGaVRKquLYgXF3JSBSv2RQkfhkocGFtJg3z6ChRjdPNR19ExvPWFgR1nN1DAH5DXhqQQkLsMBdzwbMP2fEY",
  "key29": "LLMBHiFXnKetAXU1ZUexCEnUgszUw2BWsYxYUde339aekVGqNpw4qHky31Rzz7FBfVmrby9Ub7SQUGvDugEUGVp",
  "key30": "J3CDZwJw5Tdh4P6MH7MRgq7FQ9wCxNyAfPa7nnvpgRc7FEJTwujEXcWqU7nQPASnU7Q53RqQUPiKNfVLZ3n4VMb",
  "key31": "2hH92ETSU7CPvfxgwgE27DZQLTBzTkv6UZEKjk7v312V73si8J11Lf6Geyv6wKuqecNtytn9dSeEehgWvJtDHTbC"
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
