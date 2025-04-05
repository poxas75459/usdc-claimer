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
    "4ZBwKg6PaMdrMAeaDitiZNsXxecKaPSH49U4rLzrwdVrERSHfPxxGRmMM8Xw7vUunTPu9BGMFTQs4Ad6JyjECsVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eamtkYyimXVi79vRtRhN7fgYUvpiGdXpDzugNzQtNjPB9oHyLQ47mCPNHP7jfxQptBKmvcoHcCMDriFaQqDNdY1",
  "key1": "4hwR9FCqyLrvmF1nzHrUcLcpES2QagbVrUgK69UKxcFfTJioDnmB1M9ZWmVG8bqrPYr6R3mRwTg5m5wQprsWPWoQ",
  "key2": "3p4exbX6MszQpGbGrYErbP7iJyCKCBC7haR3PhNKZc9impQpHtEVBTyyMkSpBr29nQf7SMLARdd8ZkGbFC7HgrCd",
  "key3": "z9GmEjGJE2BCBWiUEWTm1rcnqTWWmNvtmFBVmW3TTca8ebR2oUxLoqcKGkToEUjrGjzXxtvAgo1rA7p9sHdZpdg",
  "key4": "3zY5x9QiyxRkCkLGtYFwPyXU5cdQ3CFYEFS37RzwSGRAS2uR4uTcwabgJj6JwKMmxBAVNGCRyYCxCmMruJCDUmch",
  "key5": "331764vgnc4JUxNMrDkDTQk4zYCoqrj2etXEmncYrmz5ooJuRfa1nMawfMVA2rJ5x2f1oqKDEn38X2mbNgg1yKJW",
  "key6": "32F4N9pn2MLR3NN7Roi1uJWVRWT42vFicyXYPuARuE4haLohUsWNwxZmyYoByRYyfAG69qdu5P4kwEZJ88MWRgMT",
  "key7": "DLeZRicF6njRec5QEmAooQqZ62r8Rx1kWyTPZ357D57M9mduvqNwUsWWZ4HV91L5yNUYYrj7oTSmyMoNmZWr8re",
  "key8": "2p63tG9dxNsFouCgMZaQLom9EZ27WxLi1Wz5zqPFC3hByqz6yfQvDDCizKdDzDVuW9kUTTfabPuWjGVZZMv9EXze",
  "key9": "4C3jgzhC3PDGnfUaLrJbyXcBcRBiZPNMc9HvCAmJ8o9MQec32LUoNxb6kdz5AKCBbgMurhBGPggqBv6YgVRZdocW",
  "key10": "t8t6GHb531ugdxbKYzjGCUpARxgoVMV5SznXkrdrgZyKF4PvJ8GYq61tF4p9VYXucewkTtGCDJVhcHymhZD4N79",
  "key11": "2o9azeDnL8qKQiKY8pHcurUP7UCfHP5JV6wo7aTbH2bymYykaMoPdiokg9hBsn6XUK9ZXh1w3kJ25kKWRk8oZW5u",
  "key12": "3RxcL6PYsSZxnDofj8nDFJ7kM161UiiftmHUiM1rq7bNgZNhbYefMvddPM16QLGrQbPWQgrSh73evFmQwJiP44gq",
  "key13": "SZgW1k4hrPxzNd1yYkpcce9doPok52Sv1imvMhYxGQhDEyoq8i5UJmeydVzXWGQ4KyAxNhG9fr3kSd44VW6dxR2",
  "key14": "5XADbVM7NEsLh6cd4hoKgHkUqtD6AhAw9avJmUxDJnVeiw6Z2SQjsW4sGT3PGXtsx1ASDf6sD69hEbe5Mc6pfchX",
  "key15": "bKGnxfPu4D6zmsnfCK6nTDhK6D7v4ou1uWXwsALjeHWKTfvYjajsGEiqAYy5CSTEYwpBck93nQwPs8p6SaXdUbK",
  "key16": "2gR8cmdr87bpjSTUm75zZ1uLBxMxqcNeiNYjmJcZdUXcWAeZhXn8JBkxHoD4msuUKXKKfxbsVBSqhXejn4cVokeJ",
  "key17": "4oRPPW2hyU1VySYaTD3L7AsfKq9ftnGcJKSREm4yk5vqfPaWrbRURYXDj42c2Wjn9ZPSfZ4A8Np6n55CgxWiweHd",
  "key18": "4vUznDgguucWgkggJaTLnajU4MitSe56rwgSFAcKapVcr5bmc6MrVraurWkcQ9CudLwYLw8GMXbKCeXmSXPUz2R9",
  "key19": "5YuECWy8L7Ft2aqMYYrJfdFpCosAhM6CQpcZnwcfac4eJpVHftRJFsqJ6Rvrpnqda2BQH2uyi8TuMq67nPoK6ppa",
  "key20": "5j2Pkp7NwPw9NceCwkxEEAZkvGxNtmvoAXLJBWJhXY52KDTu8iitfAYPCCnF4bobQjjsa1TvWHEqZ7WhNwVzjz8K",
  "key21": "3zAx4znW4nY1bG6zo7zHdEdnmt4QUHAfAtrQwd5Y3QJvmZqTPWCDmZaGVDsnMKtCDQpjFYnPDsFJngsAbqRkPNjX",
  "key22": "tq5f9SEZt6g6UYVWRdC1R9LPCAYWbguzZeBnWJQDTdrJKy9xHVpjtdWMwd6YMy82jGmdPKvsoqDjA1C2Ri2aYqr",
  "key23": "2CQ4pmyYPmRKghAuGobhDPBTLQ74JG91oemj3X3PwJ9dCdUSH15WZjTVHGohwULbzu7dmFEVECLDru2mqwSm3UwP",
  "key24": "2vWM2eEDXiYg9tDFArySAuwsjS6fRp6LdVUAWXcdSAnsQwKM5Fimcv33esXFJ9u8LoDq9EPSVfmYPiaYXj8KYZFN",
  "key25": "4h6vmufQU3J9ByMbb3fV96bE2qfFVDSESbCke7uvmJY5RSExF14MyYnF5Vfxc6QShJqCPj4a4yEawwGMXbMem9QZ"
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
