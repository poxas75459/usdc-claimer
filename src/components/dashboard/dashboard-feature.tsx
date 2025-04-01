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
    "JR78URZKYNtxCeGiukmQPBz92Jbmp4zTjRLQAvvBDeKQ3Lw9vy7DBpdAeuioZVEYFveZtcS2dC2dsN1HwDHrPzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eKjxxwTYgrsKx5cZejiLUk2bDmys8jHbLUELSaMGYW7aFsYxsPBSEtDqR1CXUb2dPdkCE9iuURDzgfrfbUAL4UE",
  "key1": "4fXFWMZin4F9xXLrAvaJwpCp6MdFVPgneadzaaqBsmi4P7YjT9R4uJEXGRhqvgFQjS5p2i2ehLjKQ8trHqBbaL9w",
  "key2": "35ozMitTriQNB9vDNcYYBDnSxDmKKPAGufpQ1uhBx3crmbwunZZ7BvcrCC5Sf5nCXcJUgHzZfQKcjsQKeD3P8yip",
  "key3": "4Aavzw89S1i7UrKCuqpmy7a8UEqZZmfJNAt2hHLVjVUd6MpYnmQiSfNJvbgsH2HUqfjymvVKtXJ3NijEJ95b3mpZ",
  "key4": "3Y8nZ3zYkFpq3HMxu6wziEAdfxHMvHHzkvLi2aib1QioSV31kwfz5Tc8FcmjDYyrCAwoNJVHMjBKDseoAhvz7DRW",
  "key5": "2FYBYnidWA5rqPxEKciEpgUjj3CRSzL3ZqJxQHjPLqWncwyA3BMRmamYrECSdBge4WVA4GMdJg7uP9pEc4p8ReVe",
  "key6": "4H4cSRWzLqNiymT7etPL7Rsu4nXSQsCWhPQDPHs6DHD6SkqQtFw8sy74TKskbAbp57mAz9B1sYCyGQDpTJtpKmeE",
  "key7": "3QeVwU9qVy8w2eVRcE42bQJ46omMgx32QBrEMGcPtLZHqEyw3kcq9CAXgW2SYt5Sa5Kn27U72ydAfWUd3cDBWz3R",
  "key8": "RyzuzjazSZSMKdvwWWmRySbSf5XHmc5FKptc7bgZHq22C5g6jPycpvv1MoEGEDcseqggEF8vYAMW6GDCNwKHnaE",
  "key9": "66uhKxW7KEtmJUKuxddHBhmc3Qkx3VFtQgSqaP58xfkoc4JM6wgt9c2HkMEiKTpqC8GbYh1QAMJ1uXsbxPgc74bo",
  "key10": "22z51qm3rgJxApebfXqE5ife7UaKdsM1phRPhgeWszkC4eMZKHqfqhQV8QC5KDN9D6JaApX8zJkfVCwueJmQnAs9",
  "key11": "5WEnT848MPXWWQGJN42qAb5z9G3j4adcT5Ah2EW8D8bRG8ihFPa8Lu1w23YzQmV4M9m54XMfYKLKiziqmMHp2BP3",
  "key12": "3DuLugrG5K7gGfGJC8a3WdQicwhyiBiBixN5P93Y9kske2aLiRPgyJ5aND48kLTHT3y2MvW7FMQ61qA4Mxni6cyz",
  "key13": "5ENerM1WhzBYrCxst3XEVfsSGWJsogAS7mbZqTjNtbw4RqFLuRewEydLMKXDJpbnsaGCg9b48GTvWBaDCs256Eob",
  "key14": "5aF8DunxP2jwy9tfAUTbVKNKAEdv7RAZqTXHAUDBqb7dDkST1JpfvURcVTvLFaVwEBa84R2SkewyYs63WdtSUhnm",
  "key15": "37qcQMYosu4cawcj7thFu3QjBxmtu6d54xSL5iR57qB9jaPyzEfmXkjRr91pM7xNwS5Nnf7AiVTwFiCjP5bwUow1",
  "key16": "5pE1Z5s9g1GPqS4QZZpi38zVuVbSDMLnCapkg4WsXAzkxTSRPzz9n1yNyPferemDSekpKYKren9DUwhrdk9E3Rwz",
  "key17": "yfYodiVgV31ou4CgFXZVRyV7bqvZD7hmd1DbDCJ58C15DAYAu2Ck9tggunaKXFxDGAp5dUofigsrbGmWNe3cavA",
  "key18": "3RFE3JRDzNWhZvjh6fXXPkkw54UnrSznqDAfrCcyVzBFY7L8jDZDEsWrxVBVBufXGi8s2NVSuLGXfyGnwUViA7uA",
  "key19": "5cQyFVB9geg84WYdzbYJAr4EUBUi6ZrweRDMS1FjPx4jyRk296fR3ABuKWmme7T5kHkK9jGkyyUEvX6QoSNn7F87",
  "key20": "345vExs7mJiviHEk4M7GobxxUJnX5RftKepxbSxacJag3Rb9ULRS7hYe2wi7ihBwsji4BJpxAb825bYXvZvRhiMt",
  "key21": "3tFZ759UC9RPRkFu9e6rqgDnapHxUezntnmfTNPYJ9HQkZqrPkpuQojUUbpomYq8mqCuZhf68KvYeB7k2n6zbPVd",
  "key22": "3vEp2vTM4SiRLTFwiQGzye8dLYeCRZUA8cMyaeWDtwWVWjTLi24H2VsFamzqrCh7bPv4Wt3SXRHKPuoYD68XCj6K",
  "key23": "574DMLKzx7ucR3cEFy7Nv9GHqmWmY92T6KXEjpAjEZywUi6SpuEPj2SYVjyGduRnjujrNDo6P6AGSv7bDqWeMcNk",
  "key24": "n4VUN4vGH7bMVuZigMui6JNDy8QbEczDz34BFpHEovagvQQBtEdj9yGCW4YmYXgWMTiPLKLB7cmySLAaicN3j5H",
  "key25": "2fyJrZ2wjVCVNv9uR8QE9WM3K9TQ68UPp5thh94Ck45evcBaxS38UYqgvBdAZKtatpETsafRJxdCyPMPBXjW2YFB",
  "key26": "4xNU8QD2eF7hSRhSpycSuT18L13pYgWja9HfaUZtdRCdfDbTcW4Y5AxCcNEezSevehZevkLoWzrW4sQr12E1RLow",
  "key27": "3KnpAUWLaKDofDFQq7fiGpNrAaSr6mPCfnwWJbfRo1UUe94ziQ7F1zB5JrXdCrTgHbVMZgtLoWMYAHE65S6j7yNs",
  "key28": "56yM49bTwj9bSSye6QiE1tr5X2Q2Srhnr8sQzjXrUx1kmjH5P4sHt1qwrijxy3n9SkqjFJuhTnFp7niAAwuGznAM",
  "key29": "5AKcXv8Hhg9NRig2p3XXyWcvkhh3Vb6Dccuor5XXfVGDqWENuc9kYNrESm9AFVEganbUBjmxryaywN4QQG5TMWhb",
  "key30": "4sk58tUVopF7PDEXwb7EhEmZyoFUPEMZW5A9f3VAkxyfJW1dDeqNEMcRrpb1XRS3Xt1cPRUQhFR3i5h5eg7em1M1",
  "key31": "r5TvZQYghPJ8UiMD62dpp1wMaqcsYvawFuK51SwmLZDS8eReDp4Fc9KS2w1FRzZD7HuxxSdQk9EDkt7LpvHdqKe",
  "key32": "4zzbq4ARpUp999DhJxtLEfVBR6FBWs8dALRyxhsHkkkXtS2mbWxNFqi7tDPvb8yfPvMkGKPhPpCiTaYQNSyydT1",
  "key33": "21JE5wZ48rDbmkVgnvhi7qKMrjGapcJpRjkGTh6EtygogZibvt5LCUm4SSYq68gRWxSujrmoJEsfLCyDEaR7P31F"
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
