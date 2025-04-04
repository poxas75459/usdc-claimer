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
    "5SyWHxF8RTMcUR6bXSHtavbdFySt1Lcf3DpuBy7zFvMdjMzYGwinjAuCxRbgpv4Fwcf8yetZjFuGnFyRPZ2HSPN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zWPfnVHQUvufhofinTKuLWvyPvPnHGAh7JFdYW1MEMYqGM7a2nMigRbdPU7CQmcXkT6B7j1AvAzXMu6yxnaaHab",
  "key1": "3tg3YyghFyn2SggR2WpWFFJEbyCTMS5B1fYEqZm3n5yqdcWTf62jzh3Euf2ujiPeXznzpyTFGqjPUJinL4uzsqvM",
  "key2": "46Wy1sP4cP7EH2vyMhoxNv4dFobt5vnYLFZgF7XsyMziTKeBawcB3xzK1qLCCNt55evEMR9AKmMEHsYUD7o4ZPnS",
  "key3": "5NY7yhqVHhe25fketxFeEfrZpLxy3FKRqSwDTbRxa1TAH1FgrUG6TSKCqUezJLhJ8VkJwM5qGDKdXhEBLp38qKxw",
  "key4": "5hLP8UuwNYNL8VHmNQMcUw7ZwqEeKwWGSucgpthv6zrAcis2XavGBAdcBsiWoZcQU5W4ArxDYeVeq3cvH37BwBHo",
  "key5": "21SSyn3dfdWXCskTYtydqrxNYB8zotAP3Stv2v7xcAg8ircpQTmtL59MoKwPxpVt2X3JWr5Cn4rQbm3uowEMM7os",
  "key6": "4C1mvoBCuErzDBGWHnzm7FVGYvAUngx7Q3QA57gvdE65KQyaTHQ9FtJGArF8Bhz22jTBUg6B8LdnDz73w4KTYHh",
  "key7": "2TzvxRYpZ65vH8dpSaw3SvP5xw7hSHXBvJPLFCFUH1FyZhoXuxMzrjPxVitD4z2R9viBMB8vZ6w2R61ouEy7KMvF",
  "key8": "4PbAo4h2Kta53CQftVGrZXWBRyARLN12Pp6ZYMGTXadVQRQL273rV2e6gPNML1np9p7FLUZdADG8TRVuwSHuL6vF",
  "key9": "bYGXds22sJ1E2aY55NKJZo9c8i9zZJATZ6BjUA9XJcAFAVE4nWW2CB9QwEB9fYz3FHawEFvzSfnx6QnJMYUeyZn",
  "key10": "2DLJzSZGwhPuCLKvmaSRYcf8Egw985zKzVVTGVR5t6HGBTKCo5GMXgEryENubJpej5scR6c8n5FgeLhE3HKY5BNL",
  "key11": "4SUEXwPvdNfCVaqqVnk7oeQZYtFSiZYcXUTTJjzFeoCcxqKW85GqafRHbBBqZMdrPpq4PXJbfdZFij1pkMDF85dC",
  "key12": "5nQymBJZv47P4oLQQY2SThcq6AWFDw2iUQz7shWoK8PfRCejg1R5SDsPwwKZoauLQrryiZ1ShYvBLHEVNdPtfVWf",
  "key13": "3GVoGxX24bZJzM9YbKDay6imBCFhRCCNxd3RKUNk3wGKyiGRTPVi5XSq9vzX1YktSfjHpWZJKQ1ASJoTx7XL5Z4T",
  "key14": "53Fmr2Y88pK7E6C6p7DqeRCCS5dagWfbaaeGnJoUARjwQxEhoePaTyzoWRiNPaCo4PeGnzvDyye8W54wrdEL4jLw",
  "key15": "WBg9w8TgErMoHmRN8QcNz7bU94Fo98FQnDaJVBtbcooPHWQuL2fYcRSkaqGjfZneihtvLbVS2e1uv4CKQsiwB8n",
  "key16": "5S6oRjJRfjTveTq4YXKZp4uWMaNy6JiduhPjmrKRPVU4cnJmxrq8C46cgPxMM39agU4AR1X369jEesg6oRKRwD8S",
  "key17": "318gPCa2UDsHn5qtTPGwAkMiuat4MvBxVTRR63fJo3h3gq79ubfXcJqp5y4ctNPydHRtLrTewYzbAhghCo65s1bh",
  "key18": "5WdivRdwH8WPfdFJUv8zP9UZCFgEhk4ok5Rz599yX1kJbWJEi8SnkuNE3bxeLbkXfaE3RGjZpEkEPKYR8wSUjL65",
  "key19": "5pFyELctx5rUm7oPfZXTnfGXjjVJYczTcWP63vFNmVEgATa4YnAsDfzPHdy6kNPeQKequsp87ZYB1vo8PEDTU89J",
  "key20": "4QuXc2bEU5idmFyHEy2cFHRF5dJF8ybf8aLmraAesALmYW5mLZunXyRj6sceJmHGiS8jWxjZ9vKPtsNvcx6dYBFP",
  "key21": "621ztymt2QxNUDitRjWbPqb9R4yjqe4Vvq11CsSz2HSvrHVdsV3mK6DR3YBfoXsbKdhTNRKEuonS8Ap3hgKvoM8a",
  "key22": "22oshTFiQRDEnVyeF7XjgDGUVYE6vi2sbUBd7fgu3t9uHKcVDmXByKcXJJX6BLajfVvJpcSeEbSzcdY47N45aatR",
  "key23": "2iVGdppou4SHGHdWtPEgSTbTiXPSZHF5FZGQ9H5XcgcE78fK4YyVfxT159JU9C6b3SDwMEDSaVnPBaAmKMtz3D5A",
  "key24": "4WbPquNi8aEBqQvejgSwua8MV9RtnYiqZqunKE6ScMFLP2ruKEEWKSCeBdTjdupFSUVVwhNYDrkDJTJ79fQn3acp",
  "key25": "3XUaShom1qcBf4FfKqtL4ysNzJiMHv9QzbG3toi4D3rzots7SkU74oeuWDJFDegzF25Cn4VALvJtCLHjW4PovA5f",
  "key26": "4yjQkMdNJFDMPnct2bbMW2tpB6cppqFnSi1FmENKDqaYbw8DDc86ysBYLC8tQiUAj8e3jQviXHWn6CViDzMdUCiK",
  "key27": "t5htqXYhPiYm4bvYmNHjdfzMgVMNJsdCEMwWwUphAAb8hKoPJ2ehenZoFsJDSZRqjjt9rWTnVMVPbKKH5SXEVbT",
  "key28": "3ZMVUTcJ3n5X4cnjL5XtBeC8ZZHTc1vY8vkgxUq9SNns7YbSeJMXqfo8bAju3T39WiLMBtMzfAoYE9QqmjwWpodj",
  "key29": "5bbJDZpNCBYCKoKp7KSkk64yn1mpsZ6PFf5NNnAeKTc24HpfzqMc6nSU1WbANdLV9xjxuLutAHJXLcCvRRwzxNKp",
  "key30": "2mNExZfYNmSATqzoHx5KM1C5xG9fdqUv4y6vYGioWqEVfrDWPxui2rxgGFWk4cnWkeikAv6TrRXUPRFnRVDSPEXs",
  "key31": "2D4NfzexZMmmHWf1zdawcwnj1MLSVAEpimec9FKX11HknGdHDeDxBreGDRcohnYJrrVVxiuzeXWRiMCzYtWAWVvu",
  "key32": "3GMvGccqsp9zpbfaTBHEFVrMU2VPc7J2KbCMyGX1iCtQR5eTZceEZk8tfESKYPfauwNUCKvDNAk6XPeSXkWfkVYj",
  "key33": "4i2zYPkasQf7J7uZLRYoVjQihVWJnBXSHFbmhBYunoEEQg2TS5JmaNGiixFHDAehDmWoGXKC3kkXptQ94SA6Mkyp",
  "key34": "L11baMh9NqUqgvHuKTaWMz6bM6yhhDPPZDNr8NE5Zp7FdWa68Rogtkb7Tg1kZftrgKsNqcdmwVJ5rDLisgtPp3b",
  "key35": "2DaU4w5QdF92g8xho525hTKsHVEtVXgXf4bYTue1GNEwuUKeDpHMW4o1u1CHXUn2TDGJoN1in2c9otoU18zmcG22",
  "key36": "4kp2oSPaLhzWSfmucyCXpADHYNc6FisztPAMm1tSUYqcQjH9tgV4oJwEeUR9GctifVN72Lc8TcR9HAXRGZQM2CeY",
  "key37": "Zf9UcY2AymoiCBs5X9giTp6U1pu942m1vUf6qQT8i44J2A4rMaYWUNaFcaveyeJskwEGTTq2gGzjRhNGrdvQ7ar",
  "key38": "3KeMU1BNbg8odoT3279Q9XsfSZy4mFTP3Hs6QixD3SCdvnBkt1q5mBCKpywDGbKx5eXuFyA7KcNpirseT4owBtkP"
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
