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
    "2B3UetZBBmAVabzbEu6LA6mDuDk6UPetNGeZRTFAZi7stEhXnpvGL8Dfrz8A4r3tcCuBuUrXN9WtFTKEpK4r7WRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JnJEB5zuRxFPRfJabyTVEZUv4wTgW1DqHDccyzASv94jHsVNM6S6sXnxmhxjdX4GFBeuxtez5ERAh8UT82g82Zp",
  "key1": "4BoBkDrPVwNR8h1HT7jjaE3nkn9TEAwsjhq7zeRAoV1PnCpETnWYxTfzyfgQDyNqo4Jr3fusm7YUFv9kCww975F2",
  "key2": "RRjXYun6zQGkTMNrKtUFGERAGJPVbftcuc25DmEkEMHjxpXGTxJRB1UP7Qk9vEgrFPf8zrQfTGR36BM3kdzELaP",
  "key3": "3KomfAMvRwL9ixNnbNrJ7vZ632gLj4zRuPQ2zG5RtasvUuMCqsu674hNgwWZh1KHuitMYJgrEUZJZpCdXmkH4bQH",
  "key4": "5cSpLkYevyF2pnovnXfKMAMoeY1CkgAfdQ8cBjwFmmLT6WzPyAnrRX7CqzCgdq8FRUiWK8tH7pB5Dt6Le9Ja7r6L",
  "key5": "3m1ywY1mmyM6woYoeF1Yv381zVtZrB7qXcKccwNdEzvveWzsRGguZ6Z9y4MbaGMv91gNN6UuUFPdUzTWpnaSQvZ7",
  "key6": "4AfRpKjegK4QRycv2Nj9rWBgSzQQBMLU2p8y8y9yrUwTy4DsyhXSAzgYLPFid8fcisgYKEKv8HX6YYgP6v1RAFiJ",
  "key7": "PDMhiTPjmLvTn6ykdQKSNyWYNPiyxQKEiBvb4LdpNuKRXv2xkzT27mRDfUXbCY4JuHRidijuy7S5A6vnq91YRhi",
  "key8": "4WvVMizu5JsyBPQ57tFLnPJvorMZetZMpsGde92ZqZzdtH1sMq2qkZXYcMSwETxVGw4WXLdCgX7Jh6SGa1EdbnnS",
  "key9": "jPMReJazPUzv7mHT4ZKeX1rifnhMSfKmkxsgHLrFRvQAdjfGmW2RePm3i6LyDXJDPCi64GXLC7ECEs5Jz635ykp",
  "key10": "2knULKaqnmqu9mzZ4T9fEoht3v7UMtghSBqrwBRUbnUAoAogsB14rdESApUhZC4B7aFJzw5Jf72QgYzpgDUtVuCz",
  "key11": "5AJKc1csQqdYyZuZ5HNoqiiBzrkKo7YMMzQM9ENA2reBjAEThzwLFUWHtt1WhHudVb8nhw3eueP6oUe8gpy93gER",
  "key12": "4Rt9tRB4uc7yWtuywNQ7qGqKjNaEk5wQYSe42JBSAQBfAGbZTeGa3HaGanArTCmK19ftC2jrfQ7QLHtUqbvB68ow",
  "key13": "39rz9mkGYnyHp8KPE2eKUvZFqESdsEg8Pt4FQbR7GoSUvxakgUDHKtC95UtKCbEHvzWCynPk59rch1JCkUYz8H1A",
  "key14": "3DK2VgCQtd9bZjQVgFUKJyMpmwHJVCFPzYEPWTVqXK3yaeH1V7sLGbcLW3giavu9eZPqwRMFN1bH7SNoNAvSmfDY",
  "key15": "cm8EYR9M1ymztiW5wsuSYfRc3nmnkqje1xJSHCojLKuHXMVgnNxaXdHsLuQp4bSd5hsS6D9Us5gNGavxdLxBsYA",
  "key16": "3pwJRHvhEMiWzhYhLNnx8je4JHnidm7dPg7tYS726TE2bsHEfQi7egBbZ3hxNgPVPtE6LMBV8PsP2SLyTFJeNyME",
  "key17": "5PysDc9hzqGN5d1o8ffk7eq3bGuJirGjqCSkC1FmmuzztdtYJiyiXNCVWTzBS9kSTYcUQJWQhXJaA2AK5S5HkKba",
  "key18": "3RodhzNiRbhMn8mMpzszq273qiMYSEznkcrdkxscdMm7CjeruThV3H36pG99kpPT5YMVMyHpbuJUVUBU98Ga9zzL",
  "key19": "4LJUg32eyBdkAb1CPcE9xgNP56dj4J3tMFQ9FezgHqwCvq1cXs7rTKHzHK2gTa6P4hDHGCb7jXDqBb7BMyvtjt1i",
  "key20": "5WYdhQAMQaD9LMiBPDxJ4nr93xKG17646YeXAiS6TLymkB78tFRAX21HktfWNiY4EwPtSAfp8cJiKoZsjemo7W5T",
  "key21": "4DZPTcN9x5S1SndFiGuJ1XM5hdyRvNB4S6dFtSgLPn6PNMoW1JR6bZPd665sbTYvuJi2qSCjKEafa2AqoWRStpyL",
  "key22": "61JYUCrBAuTpQowQqvHEM6kt7o4svtN8uq9vRib8umrszCTWXm1nvQS7WxBxJKXgdpkePGioY3DSxTAnoNTbjnhL",
  "key23": "57Ewh9vZag7PZvYb96aFGzBNRDpLa9snpVbahq2xG5LqZcNorgwmppsrRXFHCDhXVUgLAwQNwogcW3KLKRirt92Q",
  "key24": "Fj23GE4XjNM4TcBHosMdQ7LLwJEYqDHunRxWNkcLozZzp2hhweZY8PQEZdiJajUUiQp9smdZbXDCDpyZp3iyXaS",
  "key25": "2yrqZT8SRZQYqirj6BU2ABaYWnb8y6giNR2p5VTgc61vC9okryF5xpATJfPX1fwRy4NXXVyS6rUckfqEkFsxhTTN",
  "key26": "3cWFKtkfQRGnJ5qNDf2P9Zh8mMi9TT74YVwJBALSfUGF7AHy2bfkC2MoKZNqWVGgyHYReVXTiv5Po2geRz5Pzgmg",
  "key27": "5h2QRgkym7EMC4SkeUbL8rQEVZs6deVhaZYDmB6qNo4FZNSi1QCMSCHETkf2vikYYbmSiwZWkC8AqfEDeuLGfbrD"
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
