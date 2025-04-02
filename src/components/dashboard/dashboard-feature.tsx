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
    "4YDtkJKiYghVstyrNoFSHwZjEA2q1SD9QQENCzRuFknmUbUZwHxn8LTMkzFrgW7QQgWjhV3N2FDXXkcsuFdzXH2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ty37RxajdELgV4J2ETXb7ZtHygUGDWzgqVxsKcP5yFnqWTBQ5QRCTLysWjHGh8Hz92iJoULVWeva2oWvbov5D4",
  "key1": "CWaZGqx4xEo72CcAHHndvFseSnZ8K268C9kQeBeFMuABPRtaaVDHSEjbKFYEwz6GCRbquESmbXYEgHBoCjmg47Q",
  "key2": "4gjwrmbyebjynjGkEXLKzbiei7rSNiXzx6jLSwfkru6XfCmBrDQ19nvgFBJFnzbrj7Ws8aAtY5kTKJxMXcae1bgu",
  "key3": "2V4moJS36tDeeJZdAnoJcMTtF9Spj8uvEmBwSNfLvwWgVk6uCJNn8SmgxKYuLPebkY5nqwpK3jVACDdcsH2jKZfN",
  "key4": "4ud1pp8sF9zTv7MteG71wTe4oavuVtD69rVadL81UfFc5G9FhnzFPEuCKeUoDi2irHqSxDfaUDmGfBXYCf21JiF",
  "key5": "4ssTbigyc2cyi7db4ujWZubtwFXhi15BSAuq6FAXuvSyVtdreJAKAv8DrViMhLy6pic5b7enY6ya2MnvMkyfXLEQ",
  "key6": "2CF3eCFdv4RG1BYS4j291QXu6ggmDAMMN68PAKbJMrU1QNgaFy14idyJLFhoDfn5xECpAf4WChVPA72AqJoZmrMx",
  "key7": "4e5BZYxHmtZwswWgrgugoSXdU9SbD19scJFRUfcqEq4k5JJjLSchGZSRfhhu84LnnYRktMghs2xnGhCCwDAZyJtr",
  "key8": "3pmL71EMXy7Van3u4PmNkUqHeAdH5EJX9KLt1Pgh1qrQmVe8TLoygpcLMyHQQc6WDGmV1sfVFUS4zrwjm6KrybsP",
  "key9": "65zrbzvNoVdHaHM4o2PttHrDqTqSe22qqdBi34dF6SfwJ3NshkhnMPKXcwgbha58y3uJjNoYLoxQ4qt3tKrJZbai",
  "key10": "5nHg8BmPtXNvokrczXMwHLQADGFYR4PRQwq8nmowGqxJoGrVjD92CMVj1q3S9vmbaQrWoqPHo14MQKiMiEHbXGaB",
  "key11": "3MRFY8YUbSFKZHLp8uzPpNeZiqSjG7TBqKUCayoY8UdSzKqPw3wHYH6iyxk1AQBb4Tsmh5NQ1MVWtgnhWh3S3zAo",
  "key12": "2oLNUexUDqDjmUub4y8mE8nYmJM6QieMAf2GpjEfQ9MUxCYsmCWrJe93i4ZmpNPrD9Y22ZtXPmfXrKEp9VES5zHk",
  "key13": "KQGAo2VSVmV82uTuB5KyvH7ffSw4SQ9GE4Du6gKPSuSuixua4MT39J7wD6VsWnZeLt4zu41xLnF8PTEJDvBsBBX",
  "key14": "3KWxioZmXM3FuzPWgNKBPYKgxpq7y2nymav62yVghHcHVD5TyAZbL2EJfQWQnhfCaiv8RhBbMaZTkPCLdxZTbocu",
  "key15": "4NmLTqTTwn4NkMDkB18NYSWcoaRuM8ppWMMHepwfg484JdJ2sZ81zj17VZaWpR1Re994xnioYz3Y6XgmJKFX3ZTJ",
  "key16": "26eex8UNmQ9SYgVjVBUUTY9x9DaU3U3x7w4aNVCSsxmxj5zhNToeKfH1ayyhBZabYMUpbFrZ5qAhv5v7ZLttU3i9",
  "key17": "2TukNYhwbqyBHajs5CenmbaB11xNLzKT6m3457WreHZF21yxqNdgxEaUrmSxHHSoSP4NYoDdRjiWGoJsevajdadt",
  "key18": "4FPqf58x1c5ZAVB7d5edRG3wNjsMZ7x1fHXWVtmg3g4KaxbBVtytfBG7w37LRZ1GvzQLrMmo2qojQeJ3zCM9ZQ5W",
  "key19": "CXEK68ePmLc7YqtXE7f7cdRxuuRSyfdaXMG6o1XNYfWbDbQsanxaVjkvgeyEH1CBi7ootzcSKCNQAtZ3rCDSHWe",
  "key20": "65HEwqkz14hGkyk19PHqPePwES3RP84RX27VshXTMDmxq6aDymiVJM4BfYxD6r2UnSnczdVCeQyQzYmYKh9MV6Fe",
  "key21": "315eh6cxwaUojX2gDNC8Kn1jkS8zCF9NiTe5ALeW6qsGJjrmDTgz3Z5jNniPbC5iyGTEz9fqxekGoLMeqiEb9s3e",
  "key22": "5Ga92mT7C8PuBrm7Ycy4qpHoaKayGdLiSMzXdznkNtq7yPPhwNsTQs25b1uDTqJUdk9h5RXBUCLkpawCFdjGcX9B",
  "key23": "3XqKF1RWkhqUJ481qxyAtmH3RMFuVLVN9nfeLvRsB53C5KrR5jsU51H5yGXwuJqWNvPjk1DumgEp4ffbNQ3YMoRk",
  "key24": "5FSojWMMG6P8aCPJ3cAypBmrfaCrHi71ABNZkHqRBoveTkJf57uMrF6w7ZuoiGNsHs3D53Sns7YiFXeR1PtVhdgc",
  "key25": "33yKG8xkzpUJQKmq8EMkyUiDjjrn9bkzGZyCxWvFmQrorW4sY9gcp9wyikiQGHFWPUmLMHne9dXpbtcEGGp9Lz3d",
  "key26": "3ignQBwoT4GKj7rbz9WCZbp6BuAwQcQ7fWyGqc1m5ePLYrtmKusbxLzfVQui3XHJKFbHCdhjTdsZFQrmvuyuhRic"
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
