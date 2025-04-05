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
    "4zjCy4XoodQej8Q9aERYhe6f1m7g5f2RqpKiBQ1c7WmQh1BgwxM5UPRqoD8Ddqrxj7mVgdh4SAuyoMUtsZd2P43p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qjBzKfLLrH5r3XjFfHbbHbzqTxezTsNGiajYVJ843kTNdD9aMBLsQDvEwjLo75M7xn7KzW5Nusx5duJKwC56iby",
  "key1": "5gLQiNeR7PxbHcwSuixHRq1zGpb6f7cVDU3SxR8fPM74EptD4Z5kiUSWPwSDhGYay1aZ3ctj7mb1it48Eivr7X8E",
  "key2": "2kcXLfTMH6YVHeRu8Aj9wpzg4c5t3ewEBqjdVzdNDJ5gzcittVGYi1YMWuRQZqJ9HCX9QTXBwWRC34BZFrucynex",
  "key3": "4tufytoj5VH7FMqVTQaDWepNiKanLbnuPAsH5ahnFxPajXyP2gBtxHoqkRJ6kGZUG7afURQfwEeWMUR4EsEdXupy",
  "key4": "2ECvmiVpHsPDbLVzaVGd2ECPGKzXsPUPA1DhQovtnAnu4dcKwoTFYmJwtFYUAR7jPTwZX5Z7qjy1kAPA8Xb4qnw4",
  "key5": "3pjrXfs4vPvEermPtXp5AHmUkvD8iA7tQCUFX8DUJ6xWpYJfySuR5dqpGzjHrv76gEazyyAkRpNPL3Usf1xNJywm",
  "key6": "4FLYpLtAYjSLPzsvw36tnKw2zcbdanpQirK6cZNx7F5jg3r54R4ovk5zkUPV1iYjW5RYNBCMmBxFobYM9Ub43igH",
  "key7": "ZSXQ58XxzAHWEX8im2UriPw6eiXZnuR5cwRLJ4CG6YxMUY2vgyUNb6aCtUjYGHPXo1QR2tEos67fZLs2iYzBYvb",
  "key8": "4CYZoVST48F51AT2sN1SE3ygVrab6M4DUnWYN9YfyAVM8xcKZayi6AmoAqbrJxMenZxvzRmBmjoN1QjbA3TsvJNF",
  "key9": "3BpL1EeP1QaSEpoExsd5iPbGCPK85KXHXG4cTtZHQSM6oWtzfSVQkK7LtDZG1kC2oK4qc5MdxR3BPQ9gXKoCv8dN",
  "key10": "GDj48mFMGX78D3UvX2oQvNdV3zbTiVuEbjhxbKpYAiYo1d9u94QMw2LD8wGvMLt7MmwvYkeCUdMV7JfMt2c6AN3",
  "key11": "5WozM8NFAc7gaPCAJNz9xykxFqt2fYWY8Biwa3gip2kErbRPt2KRYmj3QKrcU9eSfVa6pDERbHQxyDVCJy1facai",
  "key12": "62BpNR88nDNCaHsUGLR83HgEpMXQxn1LozT1WcgGA7aVovtpidwb9H3fABbUyhpBZF3BMRhtZcBRDiimfwsGSQX2",
  "key13": "2DexTpRSWMt6Z6pY78XztKMkwERLztzBbrH3p9dZsVTPsMTwA1PCtvUoRUqW2MR3QvZw5RqnoyRpak5M54okomXg",
  "key14": "gwXf8kNRrK2SQZ8YbziattoE3Zsa3qPrGjrhhm9ytBseszcCRYV47hfGkWrvAQYb7VaEsULGatsUbC9nJjp3SKW",
  "key15": "2h6erFwRV9U6VCLhFAPWG9thMzYGmYXHPU9BUQb3vMdYCC3vAM1az1ig4sjihgk3PRpKrGLehz3DRJhKYGCdVRKJ",
  "key16": "56XcSY1ZZSvXcN6nVsjvFC1Rt8ARQwMqzVgvhB8TyDhyGwggsLU2YhcZc4W52ZekyMTu2zWiM2QPEztgLA1BG4vN",
  "key17": "59MB5yTet9FCzD63U6nwKBwmZpiarCaWjH9iZzp8zd3DGwj5BYimjy1AcKumZfNFTDP5vGojfzZuyXEn2n85sxSY",
  "key18": "4crCY2KbQ87dfpCzCYsdyJYNRuB9SoT8jJusvTK8DSr7cki6vS8jexro2kvJhvoPkbFssDmcVe2LSY43j6w1xhPb",
  "key19": "3KDiDyzG1CvRENPJwp2EaepbcNPqFhv8b87U7TKncc2b1XeSshFU9jdPmzmiuRod7vrRKArPqJnbzRfV6rWRSeiV",
  "key20": "2BGvbh5DieNWTo7A4rkowtQuhTiRrfdWB4UnUJ4Nvz6x3wMK7Th6JaC6obG67qZ7Y5sCCfkCMRZkivqr5MGeZJHa",
  "key21": "4WKWhYC8D7gTLszyDv8zvH4TCHDTkzwYTRK7k6uzmdhT29nM2puon8GUyLQDJze5ANXDHrjJ69gPShTV2Qizyw5h",
  "key22": "G9fEgAdC8ghdgvPPP39x1q77JCbrC1yR4EzMdPoYvkckbCvJa2aA2EWYbzgaFP7HdzVYct3cKVm4Bk8K4ED4F1T",
  "key23": "2zMH3ewN43UfML7ukie863mQpSTQo6hBYpqHLC38UtGoQiL9WJrkQg6YpXyvXRrAPSP7Rj17BituG7bJUD3YRxJV",
  "key24": "ZWCLRdzCQs6xwUEtzYbUnzngr84SzsKSKMUsywNCa4wF3H5FE3fie7GC7Vn2H9EAzeF6F59x9KoGycBW7ydpd7U"
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
