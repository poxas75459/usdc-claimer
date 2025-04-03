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
    "4T8EBVt2bsjFRh4RYgRaG6PxRXyC1huEFw3ZRq3NVsuTtydWPWFvrC5tVhReKZyxh94RWoHjdKWQVPcM1dsQxW1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ec3Qzzx3SxiKjLdVsM4pSFgUBaUzpXZJdtpGDS2c4DaDs4LHwms6fUNbqcQNuAaFndXVqRPsxg7ViY5wcpj6HDi",
  "key1": "5zQneQ2u7ETpvjGFJuNUipRCkF7fBCMdFgeA15PjhxRCR7qRQ8FkaRcUdsVoSRo95dUcbjPJErnrS8ar2bandXpn",
  "key2": "5uFGN8XX5cZcdUPtCaX1Po7wSF7PnVQZzfsgBDnYN35TkyRXud5AW9zHEaVNkjzs6BtXqaUeGMpUWh1r6UgE5Qkk",
  "key3": "Ez5qdkCstXXgJQxCdSKxNvjwm4ascBjYR2wqSSQg3AwpS1d5RuQSpv17ecG2XBg7z3rBXUGzcDxLvNnBcHX15m9",
  "key4": "4HpEHakSyPbRKYZQQ4Ej55Eadx5KCvN5wZWYAABPvQ2mvUHCD1H1u5agz2YGYQrHY44kmRjcykn7BB1J43suo467",
  "key5": "2BrKSDj56W9Y3qf3KP8j3tczWoU19Re3ckyp1hMfDyB8c4FW86zC1hgA9J2XR6JFHaKvugRtyzcGaRDAfFQbC7TG",
  "key6": "5dF1BAoH4KywKob5UjX2i7UQPDa13jFUjvm1J46aM8t2aC3BdYcTv9UA5FyXgyPnVDFiGKMRDqmpxPHYBVnGWoZb",
  "key7": "4UnBVAf1X7sqKtHPK2pnaSxbrgCsdh6XPns5MhXCk9KM1B2Eh4QMYUwzf4M45iEvWUHkCFVbUF1m71aXCw3SVUXU",
  "key8": "x7MUpJyCEZhgqKxTstMRAPMjEWZmQeVSAqYL15sW6ctq1ZhUsZ4RB8HRXaniw4DUy23Tgygm4u8oGBpGJHnQ7uQ",
  "key9": "4ZjniAJoTP1bAVwMrNadmqRpUG8XZAuKso8yqbZ2udPkaZKyjSsCPbtxdP67FwXfrx3nuqpb8swME1XDMkkavayL",
  "key10": "49x3MDh46dyrwjzSX3tThG3auLZdxssDJAR3QQ3ZHxSvcikqeRCGPaysFcyVhFzxHgydZo2kfbhbxDHWxdwXNKQ8",
  "key11": "4tP4DP9naCMmLoXFqJkiKAW1sK2gdSHCCrTmWxLW3SFz2vrvopXUEbMPzDy44fxqjXZVunos4cErYh5BKczM1YKY",
  "key12": "2aDn9BbWg83iMxhCRsPTbtQboaKodAccBPP2JUJmSDek6JTUahQ7rUfZEy2UqK4N9uoiBSvLKMCqaG5pf136Gfda",
  "key13": "5wta6YLoGYQ1PatVD7BH2EPbNZ5UMcU3d7aLG9nYRKqwnZC5X1CFevrvP9d6TJL1zve3g1fTwt7GiFPVrXoKohFy",
  "key14": "2xr18ScuKVAK29pCYgEETn8QNbRdBpA4ugJjVefaQstT6zxPJT2WcvzppwVy1nU8EUwfxC2B3Z6J2eWvNUMZ8Go7",
  "key15": "5PrnRaEromHW4QHtnZneDdmT1TrsW5nujk8SZvVGaVdmYyQet4esxvX1UrYimBhB5TjgV8qg6HcVBuDReNxTaKvE",
  "key16": "2eR6uZSJcZVxRZfQgV3uGfDfUZUgMVcQKZZMfgxafwqtDRpbHYopAKC71VzmrLaEb4FoqayYWAdgFtF3BhJ21BeG",
  "key17": "5ajZ3eNgWLc4STcjsURaRjQk77o2sDan3gdAiw14QYSAWwKE8iK6RXmPKgiFpsNHZ379xGGWGda7eHhhikCgVp8B",
  "key18": "EDPBMPC4FQ9PYJUFns42n2zL9PUHC1cZBPNoQyH1175QkBPVebCdTxnkWPaKxTomUB6NFjynczc6HpeDGokCeph",
  "key19": "g8MSmSm6uTabQHpehNoQAfGSPohHP27MuF9uZ7sdDY4PoSWvof5BnrNyahnaq32FdbWzG36t11nWwjcuPrcJfrJ",
  "key20": "5mQ6ho8vAiacsDEXrP5R7wHujx81D7SAKnSgZNggvqkoNxuxqfSn4u99wxVaWXJb97AsqiGoowhgRa7rJWhzaAWg",
  "key21": "2dk4e8RzqySsQu3kMQ5mCrQnaUpXgBe6NjuqNyquV1KrBeg31rA4ShwHZmQ5iUnrtQTvkEArJ84T2xyMo3jkZoed",
  "key22": "3pnxRSbpNDbQVMutWR42drxQtUNUSHVjk4h1nsfvmGiSnontFevXpb8NZhebnemQFjCia3o2LcMpVK6qvKCeiVug",
  "key23": "2XH9u6nkhi2ZDTXP6SCfJEkFrnNz6XgmMDBGf5V4tBFfXugjsusVdr6oB47w2sRpabM3CyfBBMzA51QtH4CwNh51",
  "key24": "4w2A4nnGK8xwNjV9yoPD946ctHna1XMyttNy6xQ4maGRPNY4Fay11kviCiWBhNBL2LhBDWKkg73yi1728pmEdxP7",
  "key25": "2M1EX9HXpi9w1HHf2z1ZqSU4EpPbcTYLGD5VRP15CARtfGSjAacyBbScFW4vrgnusseo4bZVCUAj8AkTgu425iyW",
  "key26": "4FWNN8ifC2wy1N1qmBvwcUCoETLxVGNn8t9nyF2PxT6J4df4jjQxKSsca8PkpDmHhdh8vBZgBH7MBsebGFvphhP8"
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
