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
    "48EorC9Vb3noJc8aqpRvndDwTRNt4vSHoM5C2M25cmxYdrpgkLpXhESK87VqBhrtQTWcF6SUHoCgZGwqgDP4bLH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b6ETWnWCFhGKkcXGw9p85ovSXzaReZ6zDuHvHFCC6rASScFH6pNF4pnhnkPx95VyLbsB6F1iArKNwuDBeZYV8Eu",
  "key1": "i29ZXCK8HMzAbb9VmTGHNdq5xYgsPER5EiEtbPGaPgtTvQ3amWS6RZdc9HnkFYRb6on7yRKm4TRcSWZhkANgfqA",
  "key2": "4F3ChdMKWcgv9xcLYYeRj82B1FT787x39Hsti27UUrXWPtce7AS3q5QX4kmgpYT4Zz3GarrpCMpX3QitR2f2mzVC",
  "key3": "14UfhP75TaoUk6y2SyNzhVASi1JPBMpMnJohNYovcTqUKMwGm6Xpf7t3zKFGsagLzYTtHXEXdoXh69R7zT4PCiK",
  "key4": "2CAPsxnGuQypwpqxW7HNh8yyKLgKr5yjHb1qWA4tXDuQCpW6o7x6DwufxZUbyGuRQMCnfZi7xZUzBQe6xFNeE3VJ",
  "key5": "5mBT36XPLMyrJrP5RBoqR1GJoAH7UyjF4LKDrx5XjR9w4pB7pnpTuUPxWcNQayVTz7EJqXyxGu3JHymniagdEAKK",
  "key6": "3VNjdRcQrRrxGGbSBhSSQ7aYVwCSoioqbGR2HxR8KybQ3R1LFbmWG71J2p5BEGayFeGx7cuTAv5LAH4gjHg3fCCz",
  "key7": "3aTXgNPxh21NzdyFQ1bqZJzTBW2UZVHFfCCqu7u7gUCu74BVMGN64D7WLSMMm4TRdFTktQkuv6KKomxjT2nWmQHf",
  "key8": "22eiKcP5bqDDt9hBhaW9S1o2hLh919J8qQRhttj5KYgaKFMz9gu19MdNjzeuJgJbU6WqzuonFkGSjYc1ojQqeJxt",
  "key9": "53KHogfz6AFQ2XdcEZzxuJ2DKkeiqEPQQDmMaUAM4xsBn1PjPKse3tKNV4jkyvuj3nSGeYa3LeNfQpeah9m4H5Cz",
  "key10": "671c2hpDYx12nuqrE71d8RZ8qpdzFSTe37jPB3hajgU8KxF4qugjVh5UMS6dTYcBstNw4jaandvs8WiZpkQQwNZU",
  "key11": "3QFVBrBE7zt8tuqMYXcZcnssmbASxHud1Frqp8hFryAx9RzJMAgLh3CLcdV2YctpKiFV5QEQR6ojqT9DppZixuN9",
  "key12": "5B53ihtL7dzKxyHRRCVitQ2cssD5GyD8czj993BnQERku7Us8PLAjP518MeFg46iPMk6Y4CaSZZdUMmmALJB1XcG",
  "key13": "2wxWJ2MhQb32QdbsyGju4AzUZUb9uQZaxJrHzvfaZrPCYU1TwZdTjqs3wKbkxQ6UvMBSobrxRt9vTWTvYoxLhroL",
  "key14": "3r4ETXZuDsKaUPyx6poY4opB3SKmjNK8LAfoL9o6iKLA9fsWA3cvkX2q11rq6UvrjxTjsfQnTYBWqmEfpnMiJHsM",
  "key15": "Vh9iHap5Y2RCj9RbW8Jow7ahy13hQVUuAPWAyZTZZAjL8qq87vDmfkXvvSVu8UVqRUBssE4MPqxTQ2GjNuqxVvL",
  "key16": "4L5Brs5hDPzuFMuq5gDYeASp5rU9bheEruKuEKgooXQvxU6cwA3L3z2PyxyCkvTNvR2EoVr2bfjEXzXoryGJvEQP",
  "key17": "4z1pV2qdvtUhxXDayaCAJEBFWM5RMEXQZyhjWKTyJ6R7tu9o5pFdgms6jppwh6rvKexVHkvK3FHWvNDUFmJCoKxJ",
  "key18": "2x9tXTGbqxfX6PwMTqFSGwAonmjwcuyBHhLHT3KfHNVJYS6tDqsNZp9PYaRm8JqUAAVvVR7z5VNoigBeqsGcwE6s",
  "key19": "566WdB3TR7ENmWboEGvj5Vt9iwu2KvvCbjdKqBZEtv9E6DR2Koar4B3xCnVxqj6PX2TkCJmsauxB2Bi1tM7zEbr2",
  "key20": "rASR8KM4TX55RXthpxUu8otLSqDNV38Zw5dhsnak93HMmiEJwzfixWNqg8PkwSq4uCRzsn4VrdFZej1aBeCe9aE",
  "key21": "5PRpcgq2u1MSQTu6H6BB7Kg9fZzMpicd9GkeReoCueMP5sdqpNy9EwLVJX2MyawpzLFn2T7BNaPGBowYDNPKQdd7",
  "key22": "31AEr66TdDwFuyK3mrCaC7LLrRHjCjSchtPLpr2uDZthLRzxspsk6N8SuNKbJYdknxD95zHN3uyvjPXgi9ripSX9",
  "key23": "3mxEsyZmaR6S69Q761SpM871H15xnP7rv17EVW7qV5V4HUpYKxm6khqQvDW8Vou64cTPVNCyt7dUCYzxhGRJBzFY",
  "key24": "2ZEveiMhr9wt7PnoFh9bRecXuWaF3tCRBej25KAoSEEQgBZsqTSkVM2P5Kgj8bjmkjWjU8SCMXSSHXxv3UQzrKdY",
  "key25": "4u8hJEhoMxNfCyxv5fr5Hz1aRnRtbcBzcBgmnYx2PxzmMJqb1zvVUTPemReNHdprZ6iW27bsd9eyiBKZaA5xVnVc"
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
