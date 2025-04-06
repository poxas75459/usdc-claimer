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
    "64VBaastc4r7n3q8c3x9D1Y6UwRVodbZKsdB392J4BSobNcGKW3QYDdbuBJVHJFMVBFEDGP1hGE5ypms8EemkGLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iZWeFo4E3FMtvs7Le5eqdCucKXed31MCWifsEuUEEFxzjRdvd2mARSn5bi72nbwfyx2qqK4H75fzGaqGaM9ZJqi",
  "key1": "4vQ629DmU7YFHnaHbGoAZ3n9w6nLpbzr76xMpBryVYKHGSpfgvokicEaqdR7e4yLuPQY9Gi1iFV4Tvh3btWV1UdH",
  "key2": "xau2wxrwn4ZuTCSE4tr47gYNLvRNC9aGEurKpBijKMDMkWrD7yZPCsAXmSda3h4f5jX1qF9ZDqATeoE84F9JJgh",
  "key3": "4c8zMmEAAyXHk7XNebHUbMNxHoDebE7TLz6DPfctMAjgRiTYA4PXq2ZbhUAAf2Qp2J33bWTDf8FXLgzR2Vfwt4y1",
  "key4": "3su85nfz8ZdMqc1kiaEZBe7LodLJUZUvP4rBKK1fmzzoH9SpfrBQAg9T4aitobPVN9V3eWtmRYNcAYmZB8zHL3JW",
  "key5": "fjyMPzxsFkqndEzQ82AF3qxLR5sf8NZ3FFTGceLZypGitvx4AyBZbRauCaCsfSfq2UUbPDi9FxqvLDeJLvdH6RB",
  "key6": "49zUMLqLqrVVSBBSjuvPKZRQfWPapWNyzeQzAHdyiXfbUkqR4z8L5Tg77c5T9JnkncAYEPC7zUHwKmzByUJFUDsa",
  "key7": "2igkou1Xqwi2ajmQp7VJ1SeDdTbJ44WZJQ6qJGDMxdhXBWMLHb5W7G76wCbRiXNJDrBfJZQUYBWAv2WM62tnwa1m",
  "key8": "59sgTAAiXbgVSf6vPHrhSjpfHS85LW8cvp34DV8kw3vJU1S3vKrvLFqX1LPCneyFN9WVQGnVAdwUuayLKjDA1Kgf",
  "key9": "FJqevVom2nTTCkyQHaNiZU8DgrwSLmZdERczgXdSDkkFDs7wyEN76Q2nwCfk78aTVzrTG6sRrvUgaJ8zKidA518",
  "key10": "gaJ9WL9LQjFqVrJsdP2jiaEj1dRmkPCVp9G7ATgd7fo5iKRkhtJyJJjcGGUbf9tqeyJ1S6yLyFW9zT2AvpxKwj1",
  "key11": "5juwNjAqYQnMZtSi1kAr2Nf2nNgSqCgeVJttyRBD8QqaTRUdwx4QkJ536Zm3MZZLQQUabv4m218ycuHN1uk1Dwuo",
  "key12": "4AnQWfizAKZ7iKFAUQWeZL1efutszoEEbwtfu3aKTtfPr4nXjJFAKqJnBbq26z24FcnJowMBkisEgAhFcifGFL3w",
  "key13": "nxms3tmAVKRQqj8f2F1EaLaQKZknHJJU2dzcLcBqnvcDGcd2qqc5jAegXvRb7NcpeC2a9Y5rFDo6LmeQdJJ8bjj",
  "key14": "5sLqnJr7sBnj1B4EBh7fCRWaCQNWwWaX2v51A44ncSX1GeP3SvvKSyGxoAbnMhPoVVuQmUpUnJQ9VxjkNneb8Vy1",
  "key15": "5CnP1b9M2Cfsbu7tQ8qgjJL7Qofz8AU8QcYMwHjcjpnpB8FxNcecEmuXiaDZiL1kAt4jcGyhhtiE3Myt9pYx59eP",
  "key16": "3DzFsYUTWfXcpr829vPA6qXoe91jBcHZbNSjyswgyFe8HgJTXh44Zy9XYAPMPrJYVeQ5Kv5TxT3EMuQn8oSM4Ndw",
  "key17": "4ZrnAWLkPFH4ULdocDxVTPUZan8ynwK7A8WUSgtXV9u8huo8LidEyNR7UKtfBKsEP6j2GgYCSaJcVy2XXDTQFKue",
  "key18": "5Xk2pQuwobrDrkkBbRwi8t89AM21Fz9Sq5V1nChrQECvnDV2Bo4upN9CWZqHP38oFbepv4YdgG7gr5ZhpYpDe34J",
  "key19": "Y7WtstDBxLRL3yrbN1eDaNJizeZADbZCUwoiua92vGVodGJYa8vGYqvKEpbxpmoCGQrrFNpGi7Sf2YZKepyGvQN",
  "key20": "2Wvzw3uGHm5yBRgjyMt1YKZqcKvvizoEWVyTGyxwkPvNn8nazpYZKuhWLJHtu4vmKiQySzZUzdR4Tq1kjwY9EXx5",
  "key21": "3UrJokvtyUaBdcTbz3gGSZjAjJZHHQri3ZjBKnjkSpZLjcYd7BP8K9wts3vxRzAsrsUMhm4Yegaxoh9S1EYJkbKL",
  "key22": "Fvovgzjsfoxc3v57Gbk1g51hczJTH4yiYeBJrfSVszSxrTxpBcg3ogxxgtr16rBwtXi46cNwm3ygzp5RBovX8w8",
  "key23": "2rXw8RJiH5HAiZBp6Ci8MpKsvN6B6nMLVAYea7FRHJvsf5x511f35ivrAWeE8ueFwT889K1zN4qnERwiRWQixVu3",
  "key24": "2H39yxUPRg3sQi5zr7qcN595MtFa5DMmpTt3ReUkb5asF33Hg9kDVSUg2jJRASSmwb2GA1u74uzLyeSn2Rf4tQxn",
  "key25": "4wEcYaim3eu6WJzbBZS7sfJhLqHfBDDppMgcpnLcRFiTb5GXwSFqU9Kh2cYgrz2uq21kx7Mq9P8ZmjjWmnjhaTrH",
  "key26": "62CVZUSwzWRmg8ZdBLfK13hqLooETSReuzwMkwit9ZAARoxhZ7v1gbmnn8dp5kp7JYoy4RKutF6v8Rt9fpjfA4Nz",
  "key27": "3XH7bBjpYiepudNZUD2jGkMMH3jS4LXkgAEf9bdqZ9URETcNjQFt8K8Tx8Mq2rbGnRePCAMcXFYdWA3iAupdRvay",
  "key28": "4JCJmGygR9jjAFsLxafy1VuzYgaHbpHGb1NyYtfoTfu9K1KVfshxh2Wov33j4LjX5L5jgPc91E6NJrW2Y1YhNf32",
  "key29": "62KABiMQ3hLYPFoVo8u19XF3zTvXcAvXzt7ZdCuwqZPeM21JdFPjjMTXqmh5BM7eVhFSqLezz3b89KEur9soXUnb",
  "key30": "53YnptELwiR7dF1gTQC7YhYJysoj8LYhycHryU1HtzKn35VemUMqyfEGZ7M8WreTYEPxrJvGwcAzVVH4aUr7P56A",
  "key31": "tjfwWcgegKNU4QDfMVbjfX7ncesyhXckrFNv3BKaL3sSCUPdTuSVpvtgX1AfhCy3LWttHMGbmiB7pHQtD9F5KZx"
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
