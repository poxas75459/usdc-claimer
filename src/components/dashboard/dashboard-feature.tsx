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
    "3sYJkwANcr5DFhkj7AKDUoKDcWacpjtNctJBfreyDXzk8bDiphDHdXuUi97e62CW77DYBq2V4pAbEAasVKPkhWVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qq57zN8wRKKXk8uKSvR1vs8aRZrQC5VCPteuTwLXyu8HQzHoacSA4vb2yTkLcKfAfVi4QpbdRPfArpZRY4ApwtT",
  "key1": "3ZrErFPXtZyeRfKFAPRgPPECCkMLWMYFi9hZbMH9a3wdt3tigYLySWfdtFBJy7chUbUJiFbcCRxvRMRXXFzk4hhT",
  "key2": "9JZ3NrjhonadyRk1jpWvbCEZeg1EWiGoc8qjkwEYEwkqNfmEhfMYQSG9H14WT4E4K9HU8chKktvaf7tZLnAuSRu",
  "key3": "EmvaUE2vC7Sb34ETLV9tu4AyNV5USETF96HzTKwwNvs2rsHVf3UetMx93DmwKo5EmARiKSEdFbGih4oHL7GNdtr",
  "key4": "taWpPHM4sCjtJ3mFWGdzRpLYCJa8q78FvZyBMMq9s3KKiJZqYtgrWWmxpFxaqKJmyRrXPiB6PyQ3ryfoGSUkSRu",
  "key5": "2XusjmwdYoT2WuJcbEWFa9GbUagisg9nxXSuSrzM98TZxsmQor5kb9ri4r8WDA6WHUx2QQ5TP1PnvepCSg5gqMTQ",
  "key6": "2LUmNt33Ev8ycBRcD4GGWEpttfA6cQyBgHrPcLPAeRU3ZngS4GB9DL9DFnbPf6pkrgU4NZPWKFzHJWtxXxuXMcVL",
  "key7": "2HzQRVqgyJ8rhQYSozFhdWCsK3p9P55RkUGn3VzHJnCtjGAWDiNRFEzAiTmi2qmbfi432gFUV1syjxQwcNs3j7Sz",
  "key8": "3Ve8tDAoYKxw7Rt9AbBZeEScyntGfyyDjuNsXeuxi1Y9fvmS9Gd8HHYFANhU83JTpRnqeXHfQWPwqxkfitAvxWkf",
  "key9": "26fPDU47vyB7bqkpDvB8aJMwPyKXhDEvi5EKVrNbDeKJSSACEGRHiiCr9uFJnxE41pGBCiuTnZs9WkSLXtWzgZi1",
  "key10": "f44qCnx4WoD2jiJBLgE2wGRAk8XkDNe1m83m6LR6kboVd5zcr9zkjfYE8YAHHBg61RyrMBRXDKgrwKWRDrZcLhq",
  "key11": "4o1uTZHLzhreYsxF2rM5y4Q62qJ4jRPYFWHrCiTidGdJivQ5JkBS1McYLBCbtEC53ALTMrC7ny4ee4iGfjwKkxNM",
  "key12": "2ZxUckCU93aBRRZQkLL2FYMwD7L89oW7i1rF9ndhfoCDQiVP4WftzEVdBwca4H5DngnpqGiN7q1zc4SsDrUZjYz4",
  "key13": "2ZBogK3gLQT3doZ5XmurXoTuNKCxzTcrXt5CpueKBUuUxKaYGTY1Xny9VNi69uQDpJCpYuVLM5W57KCqBBQ9MktR",
  "key14": "5bNbJMzMtDdh8Lkkj2MJYVXQuy4jAQoJwrpZC1CREZyh7yQGNd77SUBxiS2YWpHWXB5aKB1Et93BYUBTp6REswsH",
  "key15": "2kBDSjKRgeS4avpHs8pJ6hErpmt51L9TAtaRz1sfEyrjGAfN6MvXJqR8hG8z5ymJWmnEnFYUwvdoaSGBVku4J9C8",
  "key16": "M8NcPiwdKYwAWaSw4GeEJzXrZe9uMJVemyRjbjtNmKqK62aPJp8M9Jv5AoEMjGnWJxUE97zFzrF8Gag83AVez6R",
  "key17": "LfmrRKnje97xikeGnuFS3UKKphjtq6KzYpeqzWfGY2C1jMCsm79iXWyN2d8fMDXVX39V7doX8nUvW45Lw2f78tw",
  "key18": "5ZyvDuXKA93aqcRc9o6URXzwkrhCNyFhJYUUmsHDZUEN3PpeFgugQUV6p5TuGbvhGt5pHKKQVrrxzVnZCxqf2jRM",
  "key19": "RR5wPqHLWU9ifnDPh1Z2maMpXDWN496VwhfCuUqbCugYZfVVp8mFAwuGPpzyA7DmRUgDvW7jUxYV9Sa4DCx1am3",
  "key20": "StW2P673EB8vUBXP8DugSUxNcewmcSSGsFYH3oYnjazQPTLcZdnWVP9y4ntYpqKKXvErtoH7FczwdAJReJVisFT",
  "key21": "5e5wPWXxrftwhjX1K4kd5cgWiGhfqxJGUFfcnveLSMHTH9fLwbFNdfeWaHJcr5pxM97WmHyKtymGuir5MBWeRkfk",
  "key22": "4qNvyTwktgA2fS5cpcU6Ys6dbTczWj2rxq8a3KX9NFZhPxghvYLZaUkD5ZvrW2T7s28mGvuNLhuW8VByp7V8gsT2",
  "key23": "4NydfAkuwT49vhUvQyMQa16iapBBaNpRomAA4FFBPfSUhK8nkHREHpbV8rEdhFienQs4ayZHC56fKqcB7emxznSc",
  "key24": "4ntgED5zK8giqQtsJH2WhhZLfLRJoi76uoy9NbDYjfjqLNL41m1LyheTvFYnsDWfWcJZLvdHeB3yA17bsTtFpLCu"
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
