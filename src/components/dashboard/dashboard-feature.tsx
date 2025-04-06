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
    "5qoaA7SftTKwAaAFwXeSdZGPnqmKdvuUdfVxN8RA4uhTfNQHv5UeqVCBdeLTfDqTvSWgaVXAKjguSpWFUhfzbqpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HpChJ8WzHNtdjWi77guisZEyWzqj1TLeYYWmJzGGqMy8rUzsG45HnwSvtZqjz36uaXfbiGFDye9g6JAGGxXpNmN",
  "key1": "37dCDaNT17vNuy2GvPQeuH1Bd9Wcu6hN6BqheQ9NaqW8N1phhKQzMd3V85KudC88w7SVdC2JDhC4CWFaQzUckGtg",
  "key2": "5KT53XxcZ6svonznDRmcQKRgPQby48sGumQo4Farpfp7eb3e7oLoPeCHamdxfVPtxYWkwkENgZbP6jTYx73pmMYP",
  "key3": "hAGbCW1hy6df4BzSDmQ6iDwwTrQkbMgAF4iwGictUbToLPgX7rcycWVN2dCMMgjmU6wb22e3AQm1ySSJ1f7evvq",
  "key4": "5ksvL5AaQkCcbyb2kC33T8XGZqV1RYw7JkAid1KwmJygx2Wwfn1ADStDrc3mEbTAuC56fnSxsLdTPrj3JAEj11jK",
  "key5": "66fpnrgqubAKJ9yv8aExEiQdaaV87cBWNvcZgBASZ2BJUv6TJEczyuhe7FvxgG1oYhzGhRwqpobPcU7vTQJ2KrwD",
  "key6": "2t9DRz2C21WNwXnwma6i48rWH86FttNM22yXHPNYJAGTDirwsN7fzstHDaDY7L2tjELee2BBfWCnMymo1HGUFZaj",
  "key7": "533jTkaPSBK8AND2Qbgrr9ghtof4gKSANnx4QbTHcfbLfXTQXaK2ZmXWMtk3W13vupCEhgjdN7X58qo37fUFWpKv",
  "key8": "CyeF2kSwjnKjYRfueuR6ybhagxoMU7XUp4ZtbYNs8SCXKqWMfwkp2UDqRbfaqsJwF2BPCG6xv5SFrdYbJkqx8w3",
  "key9": "5ZuSF1ZhoHy347fKgao4ENdTB7ZLXLmudwKrCV1emCpD4msnH1KrouHEjwGZkWRnXWgjDsp7ybJHGvVHXjuxyDPU",
  "key10": "4rz23vz94eJbxDyfM45rv6xJutZhTzayFV19ZX6a3TvMNiBx5DVr8csfgMvZovwVrKBE4nQuSS72S7FMc6WHvJRH",
  "key11": "2efhxS6JqrHUEjwLCVgnNrL471ZEx26Rk8BmNTDKPhvSVyyAc9RKRc7UkxodBXg2g6VeeLevyaZBft5KW3beVRJY",
  "key12": "24YReR1w39dWRfoiwUPvqXZrZWE31cng8EMuGXufS4s8qWZgEzRkdMqEZan4gqu44reimpiQLbm1uYLtRftqu4Nz",
  "key13": "5uBR1hxRP2fHvN9EjPuFGNaunywkHmNV3oQC3qQDBNfzhSrHfCWiFds8SHwX61NNACHFdXSFBQxGZ1Q5J7nmkc5n",
  "key14": "3vsK18N4TBpu5NNFhz9iTNvAXvboFZR1NzCXGjtGSMB3M5XcavatrosE6KM8oTQxMriQu53m2bKvR3XD6ygQDsSm",
  "key15": "3UCp4D3sZeuLMF43XgxJJ4WdrTDivuyULwkdyoQ24fyfpCnKtHRBth8wRHDoCixDzyywG3XUsXK5Qq9UGhu9tbjb",
  "key16": "JiJkkuB8i7jxp2dK15tuckGnLK5SZkJaympyu97bw4Y8sHeFVtVQQhNJJ1sJnbhxAgjzak5ciUr2RxGFeVN3mBp",
  "key17": "4aRLjLJRHv6e8WqSecNaSfXWDzhm6KTaVRjDueK1caEi6JoZSfoMLTfmvtS4aaxiTQFoRZfM7kWxzqC6rvnTsC8T",
  "key18": "4xkxmRsZKCdC7ac3Ez9AH9ReVpVPpGbQt14puchsG5ZCqGyqjJYjKqzETEejcxSHPquvuu5Kt77A4jGDe49Qgfcz",
  "key19": "4s2qLY6gestpYfDcc8xaGT1ZY2rp2cYNsrbQcwH58MvL2DPob5YntZiMr5Yfvm5hscfXUMP7vYzPQohyBxRonfq8",
  "key20": "4jGwYe7mr7KBiMAMbhHjAC6wif8Z96Khjxw5TBdNVEdk94JcnDF29cB1MaR8rFFEK1baPRB4VBsMn54MDwAYcwGm",
  "key21": "5LjwXjGHkHCfhEyftzWeo8se3JfEqRgZCKy7P8oHkh73quoZ5ySxyuzvU7KmtcbQV5Ptc1BEuB9SfdNtfPGz3vR",
  "key22": "3P7EspFtuFu2avmgBCA5GmuFhRefMxb1dLTioGjKtAbY34QW5LaLYQiG5P2E6cRi5JsnKwY3cwhdnBukUpSJLMLT",
  "key23": "2nAG3v3bZQUdcd7p5mHAEA7Rra6vD9LRNymjjHUg7sjn1LQ9V5XPz1pmn7QoGdxzij6GbGY2kQc7UT1kNei6Jojh",
  "key24": "3vZysXC7yA38ApJWnyjFboCLNK56RiPTHrCcTZqxM9fDW3HRGpiMjx451q3suWJNqVwSzaHoV5T6y8DtXCWj7Tvr",
  "key25": "uCr2RZWiFziitjQvKbi6YihwDpyZwzBpVxNnYVKez5HiM45bgPHz9R517isKZF79DHSA9Ba3YxMcjVtDNFvUADv",
  "key26": "4j4KRztacFbbfpySwyZSmWmN65Z1Y5bzhUKMVCMH18WwVb5AfdkMzmU6DpEa614oiNTTx59iWrxCmafbiamqYoND",
  "key27": "3EQg6Z8edSF4TDSnM69isWNNj5XyyNHUq3pMCiTpyPUxDi3muCUtq8GXP3DLZFSuk3RUrubvXxqLhY7HUGgQvcYT",
  "key28": "5xxDDoGHnoDc8r4VFDn77iwfMefRtCVqH8kiFKp9u3PG6VCNsYS1DY7XVzCVxKepgqq8aUMns5YcrWdrjR6ve4b3",
  "key29": "4Keh5TMQJNttSGm5L6XYTTpRFXZ7oYjw4Lg5pSCFLRxGS43UzcqEVFuX2aKhhf4MRh3Sm9QsXa35uy8qYQkUbuPc",
  "key30": "49BHWGAqDS9aHRRcA6D8yedXiTLuGQ77XQxQ4LmtM4eXg5wF5TJ4mn1Rw9tEGmnqRZoozzybPHHv2eWphUj5KBoD",
  "key31": "5aF7UhQ9YSNTv4b5FRFKdpuKhS4P8RMkutcmGWHK4DFLLoiFh3ePt5myDo445ZLbgcQXtJZaTG2uxvRsg3qoNi6v"
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
