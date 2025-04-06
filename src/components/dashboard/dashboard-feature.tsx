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
    "5nNnpBAztjc3pz9x1aKjueax5FKPeM4wGktGABiCQEZ1MBaUPTpk7CZ8GgaHwJodT7PMxWtaQmQcgpWrPaQedTeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PjhdgLSGN2QJvyShwkC2chK7HaoGCZbNZhSeGBc57TXpPw4NVuKyXPa1WP7YkDBPwK1U71az3QcXBFihJNwM7yh",
  "key1": "3jN8Z9Sx6ND42gN99iuMWQLtgKz2rt1Mc1JCA2pNyUpMS32PCUG8jTXQv8uN47yR2eaarvS3PV42gFKYM6KxSDt7",
  "key2": "sTc4NjU1mAAE7qxgg84GSx6JMK6VGrGcFWVYyLveQnda14NzTqJM2jpNNwhccYEZgzHf1hg3C1PnS8WHF1AVt3A",
  "key3": "4ucQdoKhiiUmhvzgEGu6Qcc5tuKKB1JTTpEkBKYFM5NSmrF5ymZyQJT7n3FhHav8QdDMCBa7zzGy1RrLKhUZ7sye",
  "key4": "3t8wWN6D3oAybEk1p8WpUwn9Au4bc4aKCwrAgwore3UxTxAoZmu1qYQzGY7ncaGJ9XyaL5y72w4fiMBKJmipYFbS",
  "key5": "4FRRnqn2PQVt4hFJuohtE4Lmr4jBEL1w36ENRHEsgA4vpvqDw7UXEoK8k7rGT9A22NzbM2CyFTMeqLZ48ohKJMKt",
  "key6": "46yCpgmT1usyvpYJzRZwc6f1myisbRSYsy6Ao2dhNkv3gAPK8BEJq3D1XfShpx7fVw9fLk1vkj7QpiviqQiLh4EY",
  "key7": "5xrEcEwZvVwENDSWoeANVVAWxntTNPmDdTNz5HecjrUSaGyj63WrVyzXAiE3Tmc8wBN9rBk67pxQxYmaNsPs5XTQ",
  "key8": "Z18yeEQ8c4HnZkaqUwfCvQu9EHLRvAXF3ZzzDuzAe3u1DWQHhjJ8LZWvfGYt4yzhzdVDp7Tu9KjVEYynnAEGa7L",
  "key9": "65aYr2w2bATvgdBteqo5p5TquijP1iS7zdyJeGBcQVqBKY8djesYq5ubJ4iTRaJnC3VQ25sbYCcKztAxx8fCtPw6",
  "key10": "4zCsVTG7hMhdG3KbCuZrweeFQLRGJDJBnw61PbQBC4K3fPLbo8Ed4S6iNQ1FCHj66wUwkB6YKr8gFMbzpeopQW39",
  "key11": "21GMScoVifCTtadiHj35DgDtXTYphccWyjN7LLqE4yzmRNNQYmahSqcSZZhcZYRCji7eVKtoUXP3wA9iERLCHFVn",
  "key12": "74p32b3mSAdLGG7tfmVmzAkxxryx766JBA5nG2ZJ61JHkkYXxiBHgurgYhfH4SRTrF8WSLBt2WHaR4EbN7yDHxB",
  "key13": "uwg7YF8G7ENG5Mkk1YEWtc2qjy1ewHAaoesU5T2s9r4Fr9XgFD75nyisSeJQjkXjasXPY9wYosj5PxiVkFyxTDy",
  "key14": "CZgyDV3yVH99MPGDqnUayququP7zoRTSGRqLZxDLPFoPFS54s2B9QL5Wx43nfghD4m3aj5yJx9FTcedEMt2QpiG",
  "key15": "4PkqybCV6Sorppyp9XV9Fjk3MG2V9WuqBaSVdc8z9vvQXmxReu1CYVWLU78WGGDzpb9qY5BZvAFozjHyQheu6GG9",
  "key16": "kwQygweP2StF8xcAs3MMd41xWqK7HPyo7e73r42a7DHRX25ALA3GfAfrKteYhdQA1436ckZrFF7617Cc8pU1Gr7",
  "key17": "5hDyLco1FbrUEAh1anK4oZNSiYxnM8YWzcQ6YvB2YUUJ8aKi1VdyDs3dTgJQWZgWrcFPy3vh9BgijJGEyNnLxA4D",
  "key18": "3ooVQ5kaXGZxpbDGHUmGe1TqCkYLz9Rm9BHijB1VAwBf24muWBosrSgQyBijFhttd6tddkdAFKsTUeZsxqv2yKGD",
  "key19": "3MKN43DY2a7mncz6JxoXYjmXLdBabvzvxQLNow32RYjtW5Vmx9KfD1Kx81sTn6KJn5qcWkLD615f6r9DfFj5kJkV",
  "key20": "4mDnuHYsrZSdiiTZj8FGuY2xTM4AGmrQEDnubirVb7kTLQ1vdmkaNWTU8eYbXjZhBv5YCyywFmHvarp4VSBnGN77",
  "key21": "3EmtkXFieRH3YErV1KtxkXGCmePvThiDp4GVwaGoj19ua71xjrueYvPvJXobGGnkTGHPfpksfhzSBP2KCVbFcE3o",
  "key22": "3imkJUZCFbhVpmmjCwhy1jxXwZYfbfzC6bEXK6Vbxs3RBP4GUVNUmQbMgpfDZmfaThcG4uQ34MyRpJk51cv75cPP",
  "key23": "3aM7owWmqx2wmzYwAkkx6C1PqV5tkb7SxNGunXqfeQDDT2ooMbz6xvaFBDBUtxptDyEzmGEQ42QajgoKFcUZSNnh",
  "key24": "5Sbq4Gi2APCYVMtKuif7Ziee5AzeVUtMKbLaM1taF9rEEFm6giEbtLFypRM5Fu46WrnHt4e2o2AJjgQgpAig2LbY",
  "key25": "3M6Uo21BCBDEDJyvWr9Q29Ztu1kH39qYFZix9FrnYM1AJRw4PcqD2TXhW4qtFore7Yo3RUniUfPY3bcMQgp7o1wa",
  "key26": "3uso5wigKceG7z3rreTWS1v5H1qWLN9ED9NuKgXZVnmuBuKLV5yaEc1Pw9AqZb5QHJxTyzXc9uW3jumy1Lm1YSg4",
  "key27": "3b9abeK6et1667Zv88YRrV2GYT8qVmJZckjcujb4gejnsyZ5CXBpuvxPZKqH2fp3CXR5a5DfKAsVJh2MbX1pv8Gb"
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
