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
    "YnPUp6x6ptDj6Kmx55RTZyLYDwYFPKoqDz8gKeHYkGWiF4xnfeuJhgvvsq1JcAx6mt7iW1Mo65u5muV8b2ib1d9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59aDQa65ANtTJb2URji9NEUmrmwZQAM2eKnnJciprchSeeqk3YfgzgdFnrYDyHEit5Gr3K8AsG7Vnx5yzdMfKY7Z",
  "key1": "LykBrqD31EJzDGKNjZ967crrtwcMvssUQtsCmri4a5AUmWV4WouHh9bUSF651SU28PK2muGq9PhHfsjQhCdv3P5",
  "key2": "4NweARsUvhsiEeNA8vJAGZu4z5poKYFPQWaMnB7PTfGZS25yUs8Xk9dTR9rLjbtjLJB1d51MGCKi7w1Kap929uvZ",
  "key3": "fpth32EtLKaGRivbk5Eu8ic6khfLSYt8b49zwJwNdBetbGGJjugVBvMgpjEZtXrfw2tScjD9mzXogyNX4ZHpued",
  "key4": "5Yasa7MRH1mbSdhj6tFvoh1m5EigxV1chsX2vJ3piSwcmDtgvTNbqyyGEAYdqN5jKSWeodRhFvdTcG8RoDABN8x8",
  "key5": "3UeSMms5THLzpPpzvJdy2MqccVeRMvbsk5nidBMw4R3Gjj47MRSWJT37W6dN6rkt7ZQPTo9bBXfHk8wUBodsbzfZ",
  "key6": "5rRLxELBwPrgMuA87EvBkNz7fhAefyxLKMHxCGkr91PUvGrnZD61byF2Yg176eaYq2PNRBb14KQov97PurW2CxSY",
  "key7": "4t8kvZHDhFugajxnmH1QVJN8KWuKLZtcLnPTqSFMZBEHRsgPoN78r12stqSCbAb3UDyKGdC3k7wTeop9idoM7Ju5",
  "key8": "4Ati5fXxGeeinNbYvKjBxgjMJXF5wFyJAz6vHhtcpMu9HSy5seRqtLDPGwnoEMjZGM1G6ByaSmJVAyu1sWWuWt1",
  "key9": "4GxNYBvfseEat8nwLEnT1vojnxxgbu7CZfpZkgtPojWoWYJpxArfDbrjV5VJbT916iHjeATCMMwksgAPKYCoNc61",
  "key10": "2nDFA21i365tVTTDFMUQmKisAd9BbjeZ9R1ZHobhZ5v4uuZhtL1jgVFZy9aptEY5ciLgfgkmPZiktqqxwAPcrdsS",
  "key11": "4V5knBdWJY7GaHtpABJBVU6hjMyCG7x841CZ5wtwHYjezQ19VXANLJuwPwTuuunJ8K3CFpZSxPhF3e52TV1hn4zw",
  "key12": "3ZccsSp3DhQAdLPJVChBC2vrjuqXHJup1gbLJLJTWtoVo2236YuKoMKAchhcvZLjvePPB9imPFf9rHVhSDFtabR2",
  "key13": "4Wwaqx419fuAw9jDu4RzVFvnf9BPd7jQzVxLkEWpatUPkWbZdyUppkeHNybkoVYcYeNKDZ7HZDHCiHAQCkiT9X6g",
  "key14": "g9yZozUMKhMUCGrwqECyb32DHkupcqVFhzRNK2xvvuzqugX7hUg3U7k18KgsAkr7T5yyUHHcW6Tf5txzswrdaJu",
  "key15": "yjXtQzV2ZWfcbzZPi9uB1jr2ddA8Xd6zeKMkPN9AWP366NCedyfMFtrzve17KUXnnZbrYhQZQmMzJafz88UvMxB",
  "key16": "3xMnd8sgVUt4Yms4mSbjGkiZS4K24PgeVuMTYevDcd639HH6iMvs2ep7NuY7JrFuNA7WBxFfCxpk1ioErnQAUgHS",
  "key17": "4c7vPfmkSegW8Ub3M89ihT2iNCraXn7LWVUbwwMtknnX8UWrXNM1u7iBGkLdwhq7EsGtDyXcpCMM1waJU8ZKbudU",
  "key18": "4qzVNUEp17gGbiyJr2yMx5W6KnJDqhVhnkHxWWk7tNo33Bivbtd1cXV2gvycAQzf42oUfhWy6qCqUNnQfxZfRjur",
  "key19": "XRswS2WX9MRo4AGNqnU1TajuxMLYpfpmsQS6UTeernfKZezPe6uev6k9KfyAsNk1LfG92fLykfBNnVhpXcavSNc",
  "key20": "3gUmkFU4iEyNgusD6z4mPsaa5ByR2VbjYTHJXKDmZyuCpAKAqUgypZUsUH5yzQU6qjBtK1sJPy46xVWnyihJaagi",
  "key21": "49sXPUSafcjcbPiB4e4rNCKxi447YCqpmqWs51rDM7DuJHAFaQfSQqMzwbJsfwUYy3za7sPPYqZyLXonRQzUt525",
  "key22": "4hQmD6NisB4gAQEjrXQUgwbzTftaxHgcTQKRLZVLZ8Y1DUcXKJvxqPHL1aaFhGGLMB55KN4SM3XQufstWfb6av4d",
  "key23": "3mrQ616xiRTSm49KLzLFn5VQHfmFLMczjoWyn1Xg3tzdDhkLeWSAuNmNWu4uSXcq4E3MyHdjvb6cNvWoPNTibVtL",
  "key24": "3U2fBCegjo2b9Kp4XNN8YUUx2wtCmSpiQjogPzDzFW6Xbt17jttpAy4dKSx1UFqV4kwqWPbe5xgsESS92mC2aBNo"
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
