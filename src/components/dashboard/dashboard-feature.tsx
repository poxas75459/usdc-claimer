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
    "5Caynuui8eG3GzXDaNQnBX19ZqyzdynHxdsx1EyiNjx7X6uM5SK6Chn16Pz35G7vH97Eo6S5H51TRqFTayJudd8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cAYRcnuvssr6tBnK3c2E58mPD6v73SySwuko1ggoEFGASGe27Y5UeLhS8Cgi43nWcqpdVW2K8qgrXwJuRZVsj6y",
  "key1": "K2ViS21PpALSri2TmPUu97GzdnA3wPoMZ4Az6GHZkSqV7xugR4BCo2Yh8GedmB7Thho8pjFUwWuCcVFHXQh7fgD",
  "key2": "3SLD9ctvWQsuSbkgvqLqeaGvcJ1Z6VoeexcMNrwf4EhJHGrdGFuRcZqXmAC1Wk5bZMz3UZrqygGQXxYFvjcZnPCV",
  "key3": "LSqjxTgz2R54Y8wjYZPCqdMKptCCzEcAa3ED77Qdi8NBmrWyndh18oAttTcaygJtjQGGmUqR69SYoVsaNs2Y61b",
  "key4": "3gBciv5ADgM4WY4WRxAzqFXxrcYFtyMekLLk2C8BVN8QXPcpRuGWjoVRjt1eXuUazz3Rm7GxqNmasxeSbsNF32aj",
  "key5": "5jMpsHYb243sUbnQKsPwNqAEzCJTiRjyd8moJi3wchrqhwMLhffNLg1woVVysVGwYVPWUdjrKEMnFaN83SKFMhKg",
  "key6": "5sqWytqJywoaXsD8tW4WpbxbcNDNXZUk1RZXGqDnssgQcFYGc9mprXXmAovMxoHfpqrPg7p8re4aY4GebTxhVfjk",
  "key7": "4RkjczekduZ4zyQDEw3bamLdMHRWz3hMTnhyPRbYydoSn1VQf9WWyWqg78bAjKGYHtwNUrmWr8URFTWF12gPMnfg",
  "key8": "3Vf8d5u1ecbMEoQfDw9rq2Smc7uNjTB4FCLDmf2fnqX19AQRkUGE2QdYPtNsQp4nEkBfgWa9BbeRmYZCfq16HjVx",
  "key9": "5FgbEw6tysaSpgLfiBQAez4pVHbcrPEmLEkg1dP68ABGNxZgXkka3uSfscNRixk2z1r9h8pcHAPoeUZRnnoM4Lg7",
  "key10": "59kZDfdkswAkDnn1NcAJMeGU9QHKkLd8URCfWcecYR74UA5GRA2C9rhyHZDDe2Hv6JVjRCrhWZzrXwUj7nKUXDKD",
  "key11": "5MhMu8fteq9cTvSTRN6fzdj41dMjFVFYd89eaki1vtxDKXLvFNzubqxM5WgUDVyz8grnfPdSuCxwYCWuRRzad1jE",
  "key12": "4bXCFrJxCaxPF1WAZcqQVW8WkVS9oetPhtkXgPeNBxf9fc5fTVqhHAXMNn1cnojzjZaV5vrY8u64XM6uX8oHbdgq",
  "key13": "4HrJoHa4fdDmubDdcaTESjRoU7tTaEtew2Eo8doJin28GNSL6pKSHS6NuLhExnRePXF4QGJ8cMNHUUFGLya2aD2v",
  "key14": "UkaihtEbZcQQ8E6hFEfdtd3bHS4vNh9hio25HN7qEsjYvM2UTwEoyDoRrRWqawjXQB1naMusZ53RqfUKMjRrRVV",
  "key15": "5byzkeDNkuAruuhkFpStGEYYZMVxxpHBCCVeZnAEyrrfXgyfSugGfpLPARdUCWMMG4tr3JeYRiBed7d2SxsfDCjd",
  "key16": "3er5SecQijL328eGyUEGybQWWRMkg6p25qZAQt9bAoagFSTJ4eu7v2in4LVETdhEQaGNhw7e1XWzb7UqXZYBdKXQ",
  "key17": "N4TCXrwG2LGx6rhLaRvVBwYk9DEatoyw1QuPYbDkv3ouFjwCpkQboyNHrxijA1SQMxUFoGELevuGEjJhUmz5LL7",
  "key18": "4fbfhbrs1yt7adVH5RuiLjjf41jhcDFsGVpaeyjZAY8jTzkxdMB65KUFLBtH3bKLfAdqkDMf7RUpb12dNHT3WkU3",
  "key19": "4cQEHycuk9PAaHAHMXpf5zR9mxGEukXDvUeyiFVuFt3nRNQ1BKKZje552Y3gWLx2Dvz2p8QVZiNrvkTJKLkQjWn6",
  "key20": "4jvGUX9vrxqzYdwvVLv5xSqGEkFFJJR7NQidwcbFNorjZjzodN28H5wmUTPhfngUZFuQNLCVyz1JhU5iTZH6wxx6",
  "key21": "573XQQm3gGupuN2V3QhbWbavToNCMQP2bKwYqPog6959f2jhp7XnKPkedwNXEmx5w76b5Mbq9GZ8aSQn5s5xTUyc",
  "key22": "5oRLmbceYf8vrALNMPXTpeTiwL2cwSXKa7EJ4j3AFuecBcinnpLS7wWjhkBDceLZhyKXdwhfbUAMzYSBRwSiv5Du",
  "key23": "4sW7WsStfSSPodyuubc2diWnWw8EE5GxoFFZt1WFpe2MTVtAjYWhjgTTwkowBchMfFWgV2yC7dytvRag3MgvG1KV",
  "key24": "5eZNQxsnzRt7RWxAfXF3Si2Dv87GarYoRcb9bj7fZskayqg8PKoD1yWbC3XQYbyxUdmfnAcQrqmAXoX9nH7MTF1y"
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
