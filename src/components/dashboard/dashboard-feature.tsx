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
    "2g2N7WYcbHZWcZdCu4uy4ypYvqUqqcMLbX27MEZf1iTrpGAPvv8ew2VECTVqFfiZ4r7HmbWry1rzBx9X4CYh2chZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "647jFEoeBM8741vv9Aezn3LgQgtCWTEV6dtv57EPx52qQiBQtZt1agU3ga3cauLM4bvtzjHmKB6TXoasU6MpixSY",
  "key1": "5V59QxpDZJT6KBmvFPyHvve9coGrWH3KhYMUYXFvt3mKP6HiW4LotRc34sMshVC2beABxQvxDrmvxFusSV5CJ3Mh",
  "key2": "2BHJ7g67XduDLRdassQsPYwcYMfU3DsiFK7E3UtW9q3X78opwQMoV2Q2xKVFncJWzZTVW11xiVZHChVA67pv1W4v",
  "key3": "4UwwYi7Kbukrien5CubndNpbGr4aAikPBJDu4Gy3uoBaEZLW8RfUHWzYMM4hdFNsHmnu5a8JpbXoHMnDWutM73kT",
  "key4": "5JqCXc5i2kFJwqumvo51touvnp2Z4ewBMxR2kCiXYGAnHDTYxXbcQXKRKBkpz5rurn8TU7pnAtY4iPixNdLUS7Vd",
  "key5": "2o5GCwzTXZ2SjUEKHtvT2XnaE2bWmA5vH9xSTxhFTYwGWdbqmSXYYvzSpYkWbLtgMX26hBABGkRKuhMbYhLuHBdG",
  "key6": "4oFmEjtJKaCbdDBayZgZNcVsc6AednH5qcJfZB1tw1xUFT1qWCvwSfRwTaxSkxDBnRkxVsKtr4CRb1bwmCEkXVDQ",
  "key7": "5KuxPonogze3Vnm1yrZKG3iem4BtSTo1Ax6oRmno5btkyaXAr34VTv6rCey3H9xJb5jkgGLJ5FbJ8SCRizb5xkr5",
  "key8": "2e5zp5hNKsAQqaRL3a4S9v8xnJWMWAhJ6h2pK7TYugVr3g9gfRhRvazPJNsKY8NX4FJe5waucGzabf9Piy6vqDvy",
  "key9": "3QtmQ5USNfz4MkYYYvd95jq85itJZNfAHbJWAEABaaZUEufnRVGsegTyTeJ2d8cVR99Z19NuSh5zQgHFpgjmbQzd",
  "key10": "3gtZShbs9EAKoicLpFRPKVP18Ec3qqNgZCdXP2jN7ikE6XjqEabYhrv7cT16KoNDxUcGemLsQ7xqHzhGFUbvqsSw",
  "key11": "4CmMHeAkC4rc1t3MLTkNiPUuwKNy9GNwNCaVnKBE2TF83R7Dfv6kJX7KLPVerjq4UYe1MNETjwDafMMcfN2t5Eu",
  "key12": "2hZ2c38StTgPeBJekAtNZAxzqWMPPhNs89CaRWoAsRGguueboqd8DBRC3DwMDAbG2Y6pyUoMmX4wu3c4oBwjepjb",
  "key13": "25Tfhiguuatucn7e9uuAMySkHfiLWkXDAteN2XMKhvtHyBYwh8mYqLmn1CHCBpQSHj9RqcnRS8p6E7wc2dEKgEhx",
  "key14": "5dPTnE6ZccCTEMPiFgkd7ZAs3BSUhQocLXQRFrcLK4fvFpdpqAtpNjrZzPU39CVctjAVTq3pwHpQ7fCinTnhWCbo",
  "key15": "4WgGK5cHLVqvPQ2S347jfft5fh5z6XSfVievLf7Ht7LLb2zTPKoknyN9JTXAKcexXXShig6idPPGiFajmXVSqMgn",
  "key16": "4Xo9MKRnbnG8eWNFPaw3fc9WsGU6Xvyo9QaPxsqtvxzAv2ejpEa8f12gKN14aR4zxh9giA3WcZGiXvtina2mYKhg",
  "key17": "2fdDfDmmDKT6R3UDv7KY6B4zhrRbo1RRsX7cBBDAZPoM8c5p78NPHJMNnLwRWnJqABUPjsRBeS1BkisLkuKw9aER",
  "key18": "4TVPm2vStehMn3iK3WkarMTu5PPM4uHq2S4CRoRCVhMzdm5tXYoPKWk2GmcgMsjS3BCFY7uf2HRiKRcP4EbGEu37",
  "key19": "3nJHngvsaXbWeH5TsYTdvv7z3c7izPmuDX2bj93ER9pYSyuZnC9bXJVsat75SPygjtqGxqjWTisj8Ur7ztR2HELn",
  "key20": "27DbVdf5SyVfMA26sGYDcqKAq8upDo5qTX4ZgaKfEGyehpQeip3A1fZfrBPjKMsR2dM9WMpmcnvU1M8KyKk85uif",
  "key21": "39pJni8ee9z62nNejDDjbPcZ4DfeHh9NAXsCe4ptFstnufsCVTbeLm47E2PFiBGoBDwxidiXbTGSRWQDZNRucBsG",
  "key22": "5Xipfzr359yuudnQ4igwVPeLJEkRAfpauAJqgu77V58uLDbKBVLgetV2LXpj4i3W1oY4iETpRyD9TEYYb4ZCUoAR",
  "key23": "5JWBCd3UU3NBxcsCejxdJz8SQr2F7Rz7jw5yb3hUZvMGVsysGbm68UnE3Ln5sevc5X9MTXeQXXMbYmMQ3TyspBh3",
  "key24": "5BEgte7hqfGAUrYp7MCbPp1ebcbMAuAKBiwHZq8kiMyq1a4VksnMdzqaGc9mcBz8McoiBVDys2y1Us4dmTWujwgf",
  "key25": "3bLnYo1pvEjgnuPS9AZKxm8HxuAwr18Gyp8jMnJiukqwZWSRcYgrrqtwpwV7d9mPGvYscB8B5AumxfLJhsqGxQUp",
  "key26": "4CLAsKS243rbXAmRmBdJzeje8gH8c9Nv73kkFF7xXzDdpJRfNxdjYP5j7d2CekMjem6TkP3XEpzvw9UUnQwNmtud",
  "key27": "25qyWjpjGtgmNJxSKfor4bEiKWiaTuzCXu2jZ1jHF9PpD2vYSFd4SPoMmMHYB9K368e8zJv9MZWp44oZTeFdoScC",
  "key28": "5YHeHrJuG9PVCQi8Nh2fTirpZEGGVsTdaJVadAPf9rAFpbjSxLqAC2oAdhjvpQEtKbLnfg7f4eddqU5ws7gmqnD6",
  "key29": "4HUyn6HpuaqVuJsKAFHmAkKki3oTpxRktvSu1cnWxTwWg3HdL6TeWVP75TLVJ8iguorLmJMhNxF57UnWfpRKvAW8",
  "key30": "4myWxcGZC1GfhQuvDLK8N4S5mqJaYfdnB5DUoFygabiwPaZ6msq5is3AtfTfpmboV3CjxF5MTMr555XXNEHjJS61",
  "key31": "4hAti4U617B3czH4JnzvH9aXj1cwW3Y53sKDfQWQRRswtrRVXvnif3iAVsZgWtB2ENcXVw8Y3tcijPqUFCe6X7cP",
  "key32": "UW1AqZD79Ak9MkCDWWYHAWLQKqcQRHuXwLjAAGt1DPkp7uBFuJRKM2pxHqnJv3G3JAcFGt4wU9DMtdC3tTp1Ana"
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
