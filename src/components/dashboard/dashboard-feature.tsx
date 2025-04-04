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
    "41ZHJvFhJzTNeVE9MVicCTiSzhsMGNrSEeHRPwMi98E1CoLGKTbGtCrZH5rmZJLWxPByqt6pq3CoWLM7jiXvGMX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d2iMePZXCNvhfqtKTYjXTik1RWWvVo96qLf6AuLQiXq7A5t4GR5XDDNZK8RnZ1wMEA51UynBpModXkGmZZHSrqp",
  "key1": "UYe9je1x4ZSUTKA2WQoBeZhB6ucgfXR5i8TEWtfBxaRUXVNmzCKo6nm2SCmJc9TDvpr5b5wfVqjJsX29Mdp2dj6",
  "key2": "vUh5kLAsVf8t98iHJFsmLDfs8dpx7idJ9uQhKs7M1EMXpikAgbScsZ5FRZuSsjMnWv33cJReoQx9dA6AoFLJ9Pd",
  "key3": "2SH73svxdDv6Kpkmjc37LYD5DCGezDgRDPbGi4rTT2QxVj3droXVV6PrKKyf7knnwS5b5RJNduAZXbRPfHi9eVhZ",
  "key4": "5vvBEBKV3wejaZmRyYgRquVT4z6uEqHfD5mKPa7hRR96HmNC6hxidur29zWbgaK5f8fsT2dSJBk3s43U7K5iHWRV",
  "key5": "3wCp6enrF4dUo8qsZcepuLNbkBxupfPYMUmtynza2m2TP5NZicwUmB1kEEQZraTSeatgHARm2QMudYffyZPtAjhy",
  "key6": "67n7vAm6y9GEhNjcM22bFsRS2BHFJSxpKjgyL87cx4r5FzSnUJ28fmC1FvjnMPfKLreSY8kC5veGTZtgv7uNfcZ6",
  "key7": "3DJjaWvNaNiExDhhaV965ZEDiV9UBQ9dvcvpGnUee85S9q9CpGssmBg33nje2t8G1F7aVm9otKyeBmcKig3aZQ6Q",
  "key8": "2ZWvP3UwvuK3ppYyesPWwW3s4GNeURtWLc5X6kTHLpWLi4Fwkot44aZQQe8ZTnLR9xF8S4BqbC9xZRqeT7LE97ci",
  "key9": "2DLnMnV1eE1A1ebUGvrtUUhnqWvgvyd7HSURxEDsaL1J4QbeSsBJyggEN1KPrjxtiF5YSuLxs5A5LD3ubjV2qb4W",
  "key10": "5hWQYn4UspN671hYPKEwRJ3KgxaZY5AhYydBbUn3F8VRXXx2ZbZx3PL5vJf3GrUBsy7EU9VjG78ntRk8KNb43s8M",
  "key11": "fiTBEbbuC5dK3mmEggKNLtHxLd8ZePnfHqDeMtAYf79agqKs2FooQyJzuiHrvBy5xLPZmwARyfiv8c7D41qoBkW",
  "key12": "28rgCJ6obnKL1SK6wLKWR25sW2295NH2aE9ugdyiUmY4EdFup9odFoCGuoX5VEo45aeUptEQWdrMfjJPMhv8rW2x",
  "key13": "61LLA287urtkHyvfZ71HCnbxi95bEfQZ3gbFSwHD8FNvofGKYzD54o3FL9YX1AfGqb3VbX7RyZ8xPKcbNqW5VF7B",
  "key14": "4VaYEhK78ovrYAGCZcbepG2U8XZBcMHkh3MDefvedPCnAqgfnprbDFYhWZLbvTFDDVY6EhxWSckJWZrBWsbE4wRQ",
  "key15": "5ucwGVTbq3UixA3qMywtFEb43EkEiK63Y32CHVZep9zmdJRYbmpHtd23kz8en1Ej3UEizWK54siy1yydjF5nZND2",
  "key16": "4c3Cp9zDs2T3vvJsmCvywBqzkqeiejKDbenytpqujH2USMHbaKcdSsNhvWRHrM9VtcBUaviZkuTG6Myn3VvJZ2H8",
  "key17": "2rEvmAB24asaQgKk6pKcR8tEXCwVMgKVDVnwbZEZ31X1Hk5XAbiLR3Yjj6H9YSgSZb4VpK3hTbkhT8AJq7op4k33",
  "key18": "5Fup1eBDbK55Xp2CzUsQcamarNvrY361rNeRZu7AbtX3iYHYh1TSBdnSXFNMcsWCQeQYQpXJ2PT864JhMpfWkxqP",
  "key19": "msAuTzGdWg1xTSMDtyLE7n2voUFJbLREeoZfHVJF4tsbDsXSXmwHfc42CpvRVZX7kn4SBU2kqt7ffJn2SP1aGxg",
  "key20": "3a7Qy71UGaAmyUCf7f2m77gYb29jUCzApYjneJXsgCcCPUfeiBLM2QqG2rkY1eQ1JGfqXUPN99mdzJhTBXSPG5AZ",
  "key21": "5cNLurfC9zwMdGfxQzL2jdHqGAz6n8aXgmPSBHDdWM3PWwcaZH7sNWgtSxjSdahA5KTTP6Xe76jvLyGDJCHfeUvt",
  "key22": "4UHKoZx99NsDJ5QhZsvskWTr729JixonQ91snnh8KG5FXcDGKScabSyGDHKJ52u3Vz2fg5gffZEcheov19h2WKyf",
  "key23": "5Re7CjyPWQrHKzSN57j99xu9Sz9vkoctwkMURx25tMcNYcqHgEiMCby8auo4NiBC2oHyNaj14tT3vpzzAhmRHHhR",
  "key24": "5jGWvwwXxfVshzvDnssjhqQ9XZeuJsjxrihzc8FrUSsvLmiAz5kRCyWmhoppVwd9Cygb74kLpnBQdCX17p8Z7LrZ",
  "key25": "3FuUSCCrdGd6YQbjukmhaGNJ7se2hYbxXAg7VCVCVnzTjf1myCH19M7pJWUT16BnYZXyxzJEDsVTKUvybTgvPiPj",
  "key26": "61GZVrfkJpqsmuffFwzKY2AXs9ZoRjoLQ8iy4CRSxKGLcq9ViELfSWc6GHYFqteJxaiKgFs2FXL5K1aZy9szwMiT",
  "key27": "4bak829qo1tfFTZUmEdcoXHJLH6K75epDrx487B1mLaUCRxciAVLTRhzTENXi5rKTdnEY6pbpWxUSsTUNjwL9eu"
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
