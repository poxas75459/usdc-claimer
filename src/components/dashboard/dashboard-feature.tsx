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
    "445KZP7XcK9Gzoqm28yWvsr8sPGRtNHRzuj9r8KupaRZbhKbyipz7KCGozNUjtpzStEgAcoHMEBcjss75p3tTaDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7D5R7EwPSXSPsFMUMjTCDEUYjCbFjjJv1LtauUaZFJHvwAP2WcM92sqUHRs6f3VJRsH6NQVxZuiTHdQ8uv3s2V",
  "key1": "3hCUZMEuxeeMXAFeg8UTnG4LN4BR8UteVBbuufeuR2iY4yDgkWdUPsuKzVtcyuL9vKpcpY5swiRHb988ijTKSKjy",
  "key2": "4fJbF8NrQxTBop9a8cP6PBAU6y5RE1hP8As4huZ7DvJPuAosr4KR4KWqGayDsdpBktKP9jX81vyrXwqW2RVKvosW",
  "key3": "5fqUGLNSYnHnzBRiLuos3KjWTpcrWyPhNgDNZ14dL2owRFa28d6hyuQDxCoKKgbzMWzn4PDgnEhnBV2XPpMe7fTZ",
  "key4": "2ktJa18T8NMXgMT4YUSGprFVm7sZGphJ3Bom79B5yg9WtewYtUn3sGA94sKefZ2KXBxQyikPXuhwcqFJVAynNNeL",
  "key5": "4gMfq1PYGagx98bsVUUHRRJBuuGsJNryoG4GNqEL2Kjfq9LrihikpsyDCfuK53JKQc98QCCUPnPa8Yx4EeB97NY3",
  "key6": "3VTazhgeonHUHGUDf8PVSq29jLtWTBPT7mBdQxjmcqfsHQSzpsz3keYp5PZueezBXUZSZmQSiJY3ueaELUEyZjkW",
  "key7": "4GiFbbamTR9RjACTRu59NUpNsq8FfcwxYhwy68utf5EdKiCtHFBqN7xdAzsCUJgiWaW9vssmSF4ADw9FGKsKmZp6",
  "key8": "276ihyQYWwGAN4eu52iJFgwtkjwiFYWRpxtSXrzNv3x58MFfx4QSV68jTL9URtgPRW4PZtJLNq49LspgVGEyNTVA",
  "key9": "4hy1gMLBHiT38ZVMNm8RKcvmAQQuCWEQiiTrCBjyduncVyZcFBiimAUTvEedPnkf2CFKD2Af4aQt2m5S5Kb89FJh",
  "key10": "4G89iYAiexvfxzXp73A1XkVvaAyWXTS4kjAkwE5vZMADKTTgifqB3o41gUrU6H8hT5yU8qSc2Tw2HLEkqvpxRU18",
  "key11": "v4KHhhpCbri9k7qyfZQqCLJkynkSjB8RwfXRwYkB7v265TJtLJMQJtwKysQy68kfm3aiED4FhtD44Zf8xFjMkZB",
  "key12": "5ENeNyxWtPEiCKYA5FSuSmBFJPX4q4kF8NKDjdnffWLdNSofib3e7SPX2DMXu7eYmgXDEn2TNdUWoKXWFiDndbfT",
  "key13": "2K6iGY6svvTrkBNp4HLHDwtHV1G35EUZVtD5Wtw3zysCVdthukvRJunrUQJNiey875X1L99SPwVnTDMMUdg6e5eA",
  "key14": "3HRXf2nLFoaeLN231GW7pZprK4r4CT1HWWL7HJdJqsiN8Grky4Awrp1pUNhL2yHDTtFVwRkQjv2U3nJA77Ca4Udr",
  "key15": "3PxD26MuwZrHGvqdjPUfoWmjLmJnDu43KGyW1AcopPsN2LJdZWU14U3B1MSfs35z1jMEUgm6jFJZ7p12oyGTK84L",
  "key16": "5wqptD7KM1bDwRA9kEXHGg8kK8h5rDT92yWpLPGE71zmjdmxeBwC6L3unLvadbnyLLH5ZvSr68u6vBxSeZw9g7f4",
  "key17": "2GrhxekCFF9JbA1rPMiYMq2ThEp8DXcP4ZQdgkXjuEkMR3Cvo27ZJMZ8Vbi4d7JQ4T2p9tPkzUiXB5baGurCYkUm",
  "key18": "5mmLqzjCi9J1jYgQHsfgnFhq1GL7a39T5oVDVUUCFSziNHBqR4j1H6ixHE9Q1zr6LmMRZruYuYgof9WUVmksCyDq",
  "key19": "5rspVLzN52CpRdwoCawVn2WHypRiZqm4qBGrDkXFeGGKZdetBZCm1kdMifb9FZe99MKSEXvurmGbdbPCZdbK7JWP",
  "key20": "5pG2jJ5ad62v5dYZutCLmkCwqNmvkvvfGiaidXNXFQDib3zYtXuovLyv2mJcCQiJdxk6raSoBH1KXQiCPChYggw7",
  "key21": "4Fr8iKRWGNxFsTXnHJhpej5E2FSh2YLa2dLkyeVQdESkp9uaU7vqSAcoVG9ThGpBZTFR2dC6pd7SBhkN6XJYKgHc",
  "key22": "29hebi8EmRgbx2JVfyWAfgFXpvDRHp27XhJ2DPMe9drvjWuoruGhqt5MYv1WsSjsXfZfetZXG58RiBdgubpVnCnn",
  "key23": "4MCPLD6S7db1Hurt4y6ZMbP8QV24v2CeBgbq9VPQCJZT4ZTjbCsrrdNUn6fLGTj7ZHKNCKeAkTcRvLm325P6axmc",
  "key24": "5gueW4CnMKQDNPd1HiXJWo2Yt54sfWj75etHsWWmZitjWbeCTR1uy1z88N8ES4yBpQ57FzWFdivZ5C77aUsuvjeo",
  "key25": "3UwDn2k3XGymH3tRsYJHvTVesnfaqdcVQZ1xmBEh16CXB3M6KXjcDus2xJeAhDiTc7t1nphhpyepD72mHWhS33dj",
  "key26": "65U3DWMsxtSNXRn6LtYu6vBycAVNG7AU2hcaDR1wcq897J1mFKTg3ty1k2jgbAFKhRKqK9JkVw7TysuHQj6Kfx7G",
  "key27": "QuiatMmEuLg7ZvQEzfqsTBkd8Dcme4e2WMF6V7aChHmrAC7D4VSj6ygbDXDVRCX7Wu9bmivhERyGbvmsnLzL9pP",
  "key28": "2hbTjRBHBEeFZEyCKd4AcSss2Q6WVJXpg9mepoQkKKTLV9cZe6UTFV8tVDMb1ERZWMfJdKSNZ4JWaqrmoNqAsrAj",
  "key29": "5CiMe2aoCishX2rEgpwf67aFDTvgB1FS7YGaeqD38s2rKVTJaJgcaz64pBvjPn4vxza5w5QKizqgNRaAfghCrH6Z",
  "key30": "5WE5EdwnK34K5SQxy1EXkH6nqdmisZR75fP6LcW5fetHjBnYPYkNJeCcqGbuBhvCaMZF3wLxUt1FNBpggDd6JoYy",
  "key31": "5PjDtAxJzfK6vPjwskh7CfKn6QNQXzQSuq9xXz1Sp7jkPXnaUYGJgcsizfujegPAa2mbQ313sQMsoQuWUUFRoeAD",
  "key32": "3uAxRWchCL8fb6XAQ8VYCPbtSJ5R5c7jBAS596rM8yWdT3rp7sa6yXLfw2CNwhJbHHrJJ7dTz7dRPiesmtK3CFnx",
  "key33": "5ZfGiPVHJ9dBjChTenjnnu5HtxCFhV6oBH5phdqebu1YctRPBc6bvVVgNiZ5BY7ZTX3bZe1rZAvJ1po6m8G5f8AQ",
  "key34": "4yjEcWg1YLETM8vn6GVS1uweTCnZ4SyGE1BFU4AKnRo1evK68WebwJUAQSWQpZ3CuFSKsaKrFU8KCAkKJGMDUFvK",
  "key35": "hm91ksixMh3VNwz365oa866NtjneDoFJtvubk73RAucbZ8eHNAnzX2JEWRXUbCRh52RHWwpyNYeTLSroH14wmPz",
  "key36": "2qzTQxWJnm4C98Ki1Sw5BGBAsdSjBqyTKHkJ7cXHsi1iKhxVhhzowfF1G5ukyk3SWzShboW8u2w5xfjzw7PA5MCP",
  "key37": "5Y493W8SVZcyADGuqxPoi7rHF2ED7mrLBUtSfVHvEVPKBnvJZCthQNfewTREwBHEHgLbzuiPivDRZk17mKbzfWRs",
  "key38": "2ifyHDk4sBQNqaDMkzuqpE2p7jXjA9h5eVyLiESLtnmRHj1PTDzpkSZMaT7NjHErfBHApB9YWpfjMzN6QhkQnLuQ",
  "key39": "4xVJnT9NzgiwKw3uxsK8zLFDBnMeK9YezYdbuvn4CsruAMePMUT58H9dYmigi3iYFHGmZ9UQgWQDJb9SLVJCWYG8",
  "key40": "2kLXT1o3k3TpQKqLqjEbGGWLcdXkAktVf2CQ88geYoNov3Fq5SeUGQyaUUHhkRxiiPrNRgf4EkiNaQ8c76MLVHr7",
  "key41": "WgHez866nCJ6iJhvT16XBMVcbrzpb6n3obJtC3KdFi7oGfPV5F71T2n2LJTKuL4sEd9ajvjwDw96EmAL6U2HmUr",
  "key42": "3n5WvpA6Yx69E4V4nLae4tYEJf6xDSk3dbZyK8d2p9awWz2dgK9rYAa4ZXXukp9qTfaZXiJBJJjDDdJrrdMnf9Bt",
  "key43": "2aceDMUSVsRF7vjr8h3dMSndk3yEXV3c2cgLmW95wyPF2uzE54eeCdSq1AJZEAyvhz6wyBH4qD7ehbPiuUqCoFDb"
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
