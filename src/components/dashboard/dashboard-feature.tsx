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
    "34oFVYZo4Ydo2ZzuAxim7Vq1iTTq2gWQLycWBsDDUn8p6Fh9bQmeYSxwk2YuaQ1onUKdv3DCe113uqsBCdAur8iF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35uLByLHEsD9yyzKS8NVfeN1Ch9A6HTxU8m42uK7NKFoDZhVFW4wx5vrWGANFnDfHu8FD86mjjdn7p24cHGJuJdo",
  "key1": "FBHEwouc9Lbk9gJJsWiK4PLkoVZUN5RSyXeavvwF8tAYCKYyUkQ8BYg8RZBFGLaTmJJLhg7T6w27gAkN1NmpjST",
  "key2": "56wDbi9qq1inLgKukssFyg6bQdTqAiKEQG1B1VyFJCtpjeJgnECyQZ4fiNeRxErAk1bRhui8UCUS7vfgmzFnW3YL",
  "key3": "2smYosANxqdiJ6n5hHTAkHNGnzkgiq9fH9scqD1SoTWiT8Qj5tbtUc5v6wR2rQwbvL8bKUnD57QNaqxvRb3ptjHx",
  "key4": "2rFfcHPesdUx7aJdxKkDJ2YqekH7DpYX2TdGXeyKj3JgHq5MyBY1SgG8744PQmSQD3fW3EwfLmydLgQeWGqxWjUf",
  "key5": "4sWj1Bun6WnNtWKDn5e7CEoZcqufUutHEJEcrSkc74ukNticKd4h6pZuNrQNQ117FdBKGnvEA3uX4USYjXiAmhAR",
  "key6": "5btd98WhGULu5TNrFd9TcWLvPgk7aNzf2mZUytFvRY2z79rfkJh7gbhVEuELEHYztC7cvb4UcgQLRAP4FeLNDdyo",
  "key7": "31hS7fFZVGz1L2v4vc7DeqMm8jdmJaKuh6JRgAcnPHQZVWBJTvP1WeuV2b2PbdWSiSZiS93U6jsxUmkro9WcwzBM",
  "key8": "6dvDZaMZNeauxFrwZQNkcFTFQ8xPiy15SPWKUyuRRvfcifnm6uV1SD9CLPpYV33cWKRPNUT2P1GptKdTZaC6GX4",
  "key9": "4eQogYKxHi1xJouaAVg27n6qRxvLNDPZsb5Rd7xhRHus9ZEfcxr73EMKaB546qbT2ys2C7djGL41HmU6DgPRjTaZ",
  "key10": "4jT6HZbUakSaJ2qSPyuApTiMNufKda2MaFwNfHtyLrymg3RQ9GbYxGMKJAo7FA99JvJSV9yZBJHoZUWWq5W5U6WP",
  "key11": "64wTKTNmDMuTALahHoDQuEpkiPnaAXPJXpqiV55YiS5FyVjoSdHKwXHuTLhdDaTFaQ1kLk6yhjhtotPiFvNxzWs9",
  "key12": "2htCASx96yafXnv6Kw8UKvYKQqcK8tXkpCqhd4mxh9h6T5GUi3NwEbYASW4hm6eDs8xPsf2WRuoqvbpaXPHVR62R",
  "key13": "4nRXyBUie4X98dbNh1ofHLqtWVUHQUkmy1rRE3wws4p1aFyb9XXHvzMtDvD3gBmDpDfyDfhRfCiZySpCzf3bm89G",
  "key14": "5dQp6B6bTwH8yPbtSJTcy8XFDG8GKuap7MGXoZTNHKFfSas8a5JLwAvDfVxRvRkud5AaGe4ykShYbbejQYsNpzsC",
  "key15": "32NoxRCDeoA8s642EF2HFr9viKyicXvxyT3PZDn9tuKmqRqtjUAgNBCetVD4xcGJGy3pUUVwSYQqArkn4RB3Fwh1",
  "key16": "4ospNy3f64KoChaHTVDEES7jsZESed72YuZxRZKc3d5uBnuM28o1u5UEajraD6wvi8kfsg2T7RsrBN5riUBh3PeM",
  "key17": "2wyrkLDQvv3j1PMvg2ZnrKL5ChvJm2TgTiPsKcqgFHkQiJgmZKRJh5PHvquAdoTTEYrhg8utCJfmNydMjVyYnCzm",
  "key18": "2DgT6ytyUx6153uFE1PQ3roPbXDHNmPahob8Am8PVxKP7MzNDUt95QvMHLRbpZ5XY93rddgXF2MUvMNV4HCqSya1",
  "key19": "32gunJ5GPTDSqHD7qf5Wt4ZB2Qf2yLPrr3Zhc1nzncWvBebifdZubEGE46NowVev2GvJR8gNH5Hvyx5gVam8TnQK",
  "key20": "2yd5YK7ASvGywEtVrVTn3Fozsrx8Ak46bAF9NH1K62CArUqRg3Yr5rVgHAttt6qpFveZuZZ1WPtQJ62Jahqo349P",
  "key21": "5cXFK5xCqD63AcK8ePRvCYar9AhyGt3Zyeahv2Q5ykEFShmdzJjZDBmiXsoyYfWq6Z5Fj4WJvWV6GEfL8jTUTRAe",
  "key22": "4Uj3BJ7TX1eSzaaBYddNXPzWDgixsgUtFXJSajfJ9K5gYEqBzSbxNZ16KsxXTHL4RC1cmXcGV2Cyp5boETMeERgz",
  "key23": "4NS7sveEUATy17j4L8dEsDDG9Ek4zWxZpy2KaGTHpDSDFC94aQy4ZBnmD6N8nACcXtSN6RjhMrGeUu8n1ByETmje",
  "key24": "5rHoeHv1jSvaec14fHcuMpQGToiNE3SPCpWUfJTmanRkK5vLGfnk6Rd2VYR7w7Hit2iU8sA3hg6B7BEEgRGCk2gT",
  "key25": "4FhtYe1Tnji15YaoywPzCojB6Fu8xNy1DZ7AdJxCjkpJwuCForUZSTgyPEzMZym6FWEhAEdGt8QL8nE2LsuD6Xy6"
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
