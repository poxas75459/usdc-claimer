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
    "3Nyv6vvH87i9zTi6YNXARSauB5NtKncCh3eiCFvBXJ164tAMzdjjrhetnCTAtTLD3beZypeCokupKSDn7iDDWQHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "516yaZwVDhkVm9qXCKEWukvnezcW2e4VzibZhzwY2V7yFuEXQYUvcc4brUT4seneRmA8MqxP5vd3AUrmCHt12hNm",
  "key1": "2hscVNhSTKHjJQJguwRqRsMX3DZKrbVSv1kmpx9HMMxN7fXF843w4x4u2gJZqKke7KhymNzEr2My8k4jUGkCTESS",
  "key2": "4FHS2GD8YyhqnagkgzFbchug47qyGjpG2xN2A4brgMK5F9tRE3ofJao9BHHEzScVkoDMC5tYJHV2ViAHbRRpLVfM",
  "key3": "5CWgQyVamNLZgVto5mYPmBSSDagKmra8mZrvEf6uiwoQU5yK6ExwdFEvepsZm9n6GQ77gobauLwsfe31LrrJd7Lr",
  "key4": "4oCc7L17NJv3MX3aftb6GvCqaDxMtsKEPAvDSg4MXkGV6echicSpBfjSkQ9LHK9eu7twSPV3oMMUfJDHDesqbMJp",
  "key5": "5MHcdsueJQtBhzsckgcQUXkXtt9bPGRWzCL4KrLwMGxud82xj5965AGnjQrsPkYCYKE37d3otXJTF73kTJRVa4QW",
  "key6": "rzf4BKoeeRBFrGLY8Xk6VynUGrekXECuySNHZ3jbHNVN6ZAE3bJF2bQH2M1Svdcq21q9HnMhpHJEtYpzCefi71p",
  "key7": "3BbR3aqo7NfvSYmLnxjWWs5hM6eWXMqRQBEmHymEGYskG6qdzYteyZ5E2omAfo8Hrq3qw8VMAjjhZqVtSngFReFa",
  "key8": "2CFLxaVYujwWxQPmPkLbzf7TH4e5TpF15uCjEfVZ3cnwPakNXEpc4vyAMKJzZ6WcsNkKKHd6rAb2kRJHLPmj8Zwi",
  "key9": "2xe6Vh88PkdjrFmuJdSYgCUSQoUZQgb1jR7DfYqZfcW6gAqhKKY5weLWePW3X1t5KYtwnk43P2aL3rTVhTU7p8gz",
  "key10": "VpXxKr3Z1BvNA5H3YoJFfirK36NZsr7LV7KQGh5EuzuVduB6nb51KxDQ78NDA25NjxgfpiPAmsxQF8S2SfAjsUQ",
  "key11": "3VFpSvcqr2XBtXud3eiMb132zofzmoF2HwcvACjtqYxwPWHXXAMmoo8vQ4XfvvnZweWsi4KBp9Qea2X7tju9kLD1",
  "key12": "34AWQpDFM8MdMv1SHGLRtK5MgAPFTSTvxrv22a4ds5j52AEodWQfQG6eVcmopc5erDbUDcwVu7ggtHmzDUfJFWF7",
  "key13": "GhEdHjdM7xk5YtjjxAYf6BRc1mRdrHTrQqWouW3pbYw23msYr72GqmwXw5inhfsCVBbkPcGDNhCWVgUY4t8XWmX",
  "key14": "23tkkfsNmUQiBBCsWpzrgy1uaiSx4ShAKaCWp1iYzuMYs7CjjKzCHsoR4nGqM9EPqos1t1F8o98mhqFTDFZbQcNr",
  "key15": "5TKyfExdopohSdobEQ7Qt9sLqNeimGytvKW2oZMTk2CgkwFf5LY1r26Hsov8cYRqXqCFrhy52sMJXaVycUw8FPXB",
  "key16": "4oCJpGzihANNn5XMUmeeD3nZEBooqhoit4BPr81NRBr1ybmXAgM1byts6W9WdrCPWKfq4G3Kn8R997nvukdDUcLu",
  "key17": "2aWcY1ajugaB43zq1ZETscVZ6agawWxzkYUeBrZAdXTiaX7SjuY7tUGLPKaG2SzzbwxYYwf5L34vWj1WsFT67tpg",
  "key18": "jbJyK826roAcEd8kUeX2WPdgPuSCabd7oSSfoephhcjmdZDs2171kVAwtriKEa16U4WP9uDQn3C1bv7kVRTRnno",
  "key19": "5qdy3gN4b5jxZTnb1XY78PyXPLtrygKZPLhsQEnZGx5aFqfE43v6hnBvUuDgnzZBvCPAGjdJyAfGJEpRdupQPhtT",
  "key20": "3FfaVrbyTTmvkPGiRCHWrgkhdwkRFTxasiiCj3CEXDeMB1rdHJoFvMsGdcabJB2ApG5Fu2Jk45UJY3SUCL3Mw82v",
  "key21": "zVorYCPLVLwoYB53T35U3mVDR4uRvCwD71Y6g4hXdoeru4JtEYhK2jsHeQGVNLs79CMf8hMjKg6ofgAQdySUiYm",
  "key22": "3CuXuVbksA6MHn9bZH35vfmnvLo1KD8aeQ7PqbZACj3U9CVopkVLdxxSURvj229eAKmKpg17WxK168icy2tdQG2f",
  "key23": "5aqDi4oLsJYVzyapc7sEYDz4bdpJAUeUKoeqnhzyU6E5F5mQo9kBZszVMicoGJTPoUmjL7UFc2MLe5bHthQWGk7z",
  "key24": "2QR1sPf6thJPKnGCq63yKbp8drE55zZmW1PAGRgdELhoFxwpxSxWTq2dURDA6ieYvN9bbAirvsFTucPFwE5GTCae",
  "key25": "5pbrB2RBqojcZoTrBtUW3bYQJdeZpanxNFEGojuuEkmSvnTDuUobHAtE9jmvk5ddAhAKZNVV6uXYgeUSnLQNxiQ1",
  "key26": "4HitHtdRqKdaBoo5H13vpbJpi7SdRzLAP55JwRtSrXtrBdf88xDcMTfE6dWai1u7bikVN935xTgSvPW7r9EydkA3"
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
