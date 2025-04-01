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
    "5K2wFRQ3w8Qru4dVzYodE1U85RzbKxXXMAL2cCe3w9iXfA51ZxjPw8tHoJFwGM9npwj29JKNAAKVn5rhtmm6LAoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bo5Wj3oXLXfkbtW7jproVjAAFnToBqbAWQq2YcMEH96N8a9PQF5ugjkTLKnTZuNcMikzcHhtNNvBFkYvihC665v",
  "key1": "g3mar7nombaTVGF5f1ER6ooynV9ZKgWZUX91pSXWfcD4JvUDftoGpc96MmYfR9gaMvKfFLAKJzqzDrK6zH3QQhU",
  "key2": "36GBP7SkCVxPuRRfAZwyF7hjgzzbVcCDe4rNZt2jpr44GMmz7rb8XfA95X2yNHGLYgb5TtBE5kykrLTsNfDm3xm1",
  "key3": "4kG2LnVGjNeKWztPaUDoabuQcV5UxSzawDNPkUHn8cNuEf9LSrh7Peb9stveJRAXn5kjpZGxDxzVKCGmrRRMCRJR",
  "key4": "Y5g3bWnv7biC85ZJpBA2H9B8xgPUBR9Frt1bUxnMWtCEiSkt5jKiiqBooixLCpLxU71MFXPNP9zGnLxGbubscud",
  "key5": "2nTsEjBeHzTtF1N19PyvCC3trA6SAdCDxGLVuzCiU5y1hkR9K6PoLi8EoBv1KNQv9rgf1Fsf3NxYQMqK4YyfVx5u",
  "key6": "5RMGCLu7bJsJamJwic5L1tBrZuSVUw7B4Yh5AwcJLH6P8qLG7DxezDC5DYqmnsHPCrokNBwTWdmzwa1Kn3L2Np6y",
  "key7": "2uq6N5nzdvc9ypCVFnuA4gDWmzSGA8Ya8T6cm3VRjsyTt3La1kyvVYrjwWAEBYEhK9kpSUGeJZwa7fciJjboukFN",
  "key8": "3xvRke4BKxAE98GW4V1GbLNF2wNguWTmQf6QMhEahZMpLkkxUBPsYAsc4ykm5J2N6y4tbrB5Rm39VN1jyidiGJk2",
  "key9": "5WKfqvuvMHRd18Pw7b5LGCuLMWP4cUX5dasfWLEDcHmtuEVHrmc7ofgUYwtj5uTF7LNepyXJjdREFxruHFbLEyNE",
  "key10": "5koUnUW8tsEwwBsgNka69kGvep4r3TafT6SfG6Z1MoETLcyqbDCgUcM3Qgk78r3Q4itckzE2hj6GSnU79weLtRve",
  "key11": "65y6YCY4B3cnUBee3fR8ac5nsR2DXtVzKxqzT8qAiWpAckVq2qVBkDCPNq1ZY422S3eVpG1gnusCfHVf5aGaekCc",
  "key12": "2Td2BWg5teEKKENkchuLoiuMS3B8NtLqDr4MV3i7i5HjshYQ33Mw4XE1dLjHPFBHJc912HusnCrF6WgZyU3BcrBv",
  "key13": "5azSp6CUoyoidM65PBhP4ayh8KHsawXqMXdbwYZsSYxBE11Gg2nivxkYTY5yVFVn6U2LpYSXMUrfdQMRUjks3Ktj",
  "key14": "2y74tp5iZjbQ1feqZbfeCnLKToAN3PYLtfKyqC8ibFYYZKJ3Y4jeVrTsHkwVwZDTZib3mhmCpS5Q1XmJR4qshiQB",
  "key15": "3GosUj1JKwkSuM1VWtTBpc6DJyvTTbJK8N2QRrFthZe7exPAuXwdpYnDJgekFho2zmtsKKVUgBW3x3T1UX7Kt6Ki",
  "key16": "4x7a7tAfofBcsBcUHrAqMUdTAWnTz2opYKBk5GXzXExPE8Fz4xLKEk8ZYjCqz8WPYmWD1kMjxTWyFVGSgjVfXwCC",
  "key17": "4We9JffpJsQD6EjoKkv8Yu5gq6dQxq4uYU5CiAj35bCdFovDZ4PQ5eBitpQrTdbz8m3JkMKwYCEh96gQ9CXs2NdH",
  "key18": "4vzj9RsVyC8MpSprfWmexCnvrnhSuEQAz4QiqLvz6tD4KJPAwwguBa843Urv3o4ZKpayGK4pMjBYKFTKLuA7ejgC",
  "key19": "3CtjEeU5BEkVhVWh71JzCrbaUXz7y46jM2XahMXwA7J2U2qpmBwzmUCV9ywVQGVbgk2y9M364KUXU6qdZjYs1om7",
  "key20": "2K4VKRBacjuN9Uzzx7d6rds72ZAgCC22qu2TpNjbDjjp44MKw6PjCCpTcQ8sLBcUZZLSW3ySLRcJrhUuDvriTaEp",
  "key21": "3RAccnYgNoeEkk6iDM6J4fb58mzBx3QPcr4HnhUjxETw6BJv3C6TNdWLQumiZidYwUFEtkVe4gWjoswuaX9TMD7w",
  "key22": "5fgZFyjQmZTYzjFZTbTf4Zn61qYWgHnPgPVq2feDo766o2T71Weo9ubpex29XC49QhnXAHuHKNMBBcA13Rgh9h5i",
  "key23": "4GDz6NpeibpJrD7e8NL9X6aCxXfyHJ4AUEyuzw3WVdC1ZtGkfRq8WBW7sGpnrT1iwLNtsBU5B2geufdS3pM8eJtr",
  "key24": "XDATwrQVSUap2e2rMUtzE7Q92xGGwRmXu9F6JyXttMb26ediwz6vGztWnT5SnKeSnqzKB56LWoPiC12tDR9ZExK",
  "key25": "4cXGpzP74oDtFVg6TZNjA5T64U5cHi1eTThrHdcYyuqj3HxFtz5XDsCSSJfKCD3hFgpojGF4myoZ2jesBCmbi8ik",
  "key26": "5wFfvCwp1dEq4ttsccSsaA73s2jGtBV6ahVfYKqNVXATrw6JCtTMmpEG4bdAUa2SzUubxZjtbnXrfy1A9BijCbfm",
  "key27": "2RdJg75PpVtCt7WikMhShR8KCzgEqX1eNYAbmCJGPAkG6vvbDNTQADxwbzwjeArCAszAoR4KZw5od3XfXrowb2p6",
  "key28": "5kwtFxvP4zBCnWbgDxzhvViFkprwM9RW2YRgigAkcPTqCKAEnpWKdFd1g6BHx1QpqcbcwA6ZGPXKPkxNXv9F3vuT",
  "key29": "2uHpFtK78JYUJ4QX9L2t8JLp5G1A3CQw6FrQzKhhpG4U3Wei9Td81iVNw4fYPzmFyqQrce8z8w4we8qbJAedPJLY"
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
