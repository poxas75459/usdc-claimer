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
    "oWxdE9wkMyDCEajJChfRLkYWE9YnEHmmoq6KfWdp16voL4TaR1a39imH1QeErYCqGsRfwJXmAnUdqrmoYCd3W2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tq6a4aWAbqw6gTSN9VL8P2iUo1nKtignoANdVHbjp4uTBDBuNJrKWma4YPutJXM8R3dKFafW51uVsUy6d2WEm44",
  "key1": "45ToLBnZeaTMH2Kk8TLt76KzNAirrBVMMhx4YJmEAimTe6wJgxBVq9XYtfxZd2ratsJRS26Y3e5chwbuLb1NJgg8",
  "key2": "Ko1THxf2PJDBcs7qnBYXWcYQ3gCiSnFSUkoA19k6vHEgLVuAQ7GNdxpepL5HpG2sAYXoTYXx7BMTVf3fpL8uFDr",
  "key3": "kJzwqimKpDWhA7rNrcjD8yZi9cU9REkNA8Z3zM1EmZuDvZQ6YhULXZp4xAn7gm8JYLPV7WX9k1k1T79TocnLArS",
  "key4": "5DuGwoXWJqJhrgfjrj8fggoe2ZwPvRneqeZzuurvHnf1eDtvE7FcKC8Z3LhFgiFUfG8heVgCXe9uEihVjZ4tpDy5",
  "key5": "5eXW8Qt7J1Z9dNurEaLiX4Ni6fCT5rAukiaLunP7rRuFqhziKymkYk3SEGtJbjDHZKk3dnxZWnqUaKGQZQzJEtrL",
  "key6": "3P7zAFvkNChTiKwU3Loq4hRn7iHpr5icsnmod3aHinhBSeuroHtVwsaPvhNJpUTSD8hMMCTTNCCfKVCGEr1fHaMm",
  "key7": "3n77f6wy1krXS5MuKeJgWtvFZomJMtbTuWYrMeTByzRXbGZbrtZXRRW6rhaqWXYhMJwC6w12xWEfTCeMUfSxT2mA",
  "key8": "64uvUxsBC1wTj2T7hUanVgCJ2LGk9eZkWKkLSvuSob8G9L9XyeACRJWFsX984dw7m1wmDHVtRRhC62bkeMWsN3mf",
  "key9": "37FTSTUyVG6W12cyWkqD35MsDQynLb84MK8vi6KkDobtMkqWrqWRAxRyFMFoh6dXHfokEQePAFsuN4su6hy96uJQ",
  "key10": "62HC6djXdFDFXfcMays4EkFzEMcxqecTSvW65jmJqDDYgx1DyBViLYVhYy8a6CkxLTWoHXmZnnu5Cm7QFKtQpM7R",
  "key11": "4Vn63VkUsK7zsaDyPAZYEKKz1Tvnumo4BaLc1L4mHkf5dmLN17ouXLZ8W4rxNDfS9CEbzkpF2aWPphgZ6K2cekYu",
  "key12": "2tJkmU93sHB3YvoZU87Ai4xfxFKgy4t1unWoVGJmch9ZJxZFCqEszkFQVyxhk7Cv8RmNWmv2sMgd96kk9KGAifzN",
  "key13": "c4TY51GYL9dSTbJycPCfsmVv2ZzEMz9hXNzHNw13kiT5ZVSrhnGubXZMGGEmhVgdbRYzQjbwBfe4aGenJeWQxkc",
  "key14": "5H8Ldvzw5Z4iv8sAeBW32NgkekAk95s8qtQC2iafXRbTBWVvc5QFqcT7NztfSMUw8JqHh7ErAb3FgGJ1PzBdFxvx",
  "key15": "2GyxMEDzAixjPRAS3gNCfs4N3DEGhx2fdHHmCo9nRb25TPiFjADQKh6ooau6VRJYKmodKktCwgWP2J4bMLefhnLt",
  "key16": "3gBuftGPzi2xuViZgXpFR3i6N3pJZQwfUJ3eBVNsu2SvzcRTrs7pCi6Ls4DMvajhHonJ2rw9NN6VhRPq4zULgK9W",
  "key17": "5atqQdDJiBccPSky8LjHSsF3QEktkswTqVZULhWyVZ1FnpSCUeQfhove4dbqcvMG8CgGibnURKdRjKmZPXzdo28g",
  "key18": "2dFWa35zk9dskRyDyW6zspXvZ1epZeJXZA39UjHyF9pki6gWcWw9ML7F2sLakJcgZbhQmF5ShuPz3mZpA6gGrFyw",
  "key19": "5wfEQB2RYey3FPcbhyEdMwUYdPjDCnBU5yVw9Qf26F8CSfDv5zgoMCQTzeCsKHSgRpwd3eeFAUjb6e8xuoU3zvpf",
  "key20": "5A7caZGsqAfGVhwrJNWfYYjsMTiUQVTDBQAjrAZKsGyCvX3NBqdycQhzJxWQgATCNdTgHWhf9e5j7B9y1fxAU5mj",
  "key21": "yhYjFTeHkMXVqbstA2LK31LHLLwPqHMwMN9Bf4DwzXUCpi1RUQW8qUqtQzCyuJgMTkD7kRgNk8rSqzk1wAQHX8R",
  "key22": "2Ly73gmvwTgV3bEu39JcQqNGeHYNp6VkfDKkqEPe67JsoFUhiV3KJrubRX2Dr8pLqFLCWdXJDEg9jgXBd3fWVq2p",
  "key23": "7NyXY2WezvmN4HUPYTijWFNfxUmwXmRcB5VAsEcyeBG8gZWXcyz4vXDH25AbZTsQd29FXavgbnUCs3tHRsMUpWX",
  "key24": "C6UHgfkaosB16JCnn4QrGq23UEp2P2Sktb5MBfHiK4TmMm89bx4Z7iFYtzLq7cT5vA2AzTJMdWCseCHgiEmNJuE",
  "key25": "fRkpfuhxpjDLC9RiKfuSZiXBRQMCK3k35jXfzkzwQEGrjapR8YhTRrfbGxq7dU7Es44ieZaLsMyHBZaTD3f4Zvx",
  "key26": "5R3fGEzJB4qz8tcpRER8ZAcfTvgsFtHB1SWP5wqAn85Bv6Gd5VQfiVT4KkPAXy3SPJ4iUXL4UyrY76Qoa1LDFD9R",
  "key27": "2PZ1gbZENgYFu5UuAuPXd4Ff198fiHn7jvVSmBWuJJfPgyZTKtqqfmhHHbN4AHvSXeZRGeDJid5VMLxuyZFqKPxm",
  "key28": "58hbZfMUDsmhuEymEaFpU8c2ARQkc8T4Sk7yM1jNF5nYD2D12QgKWMSzW95hiK6F6fGvsnpVnFZQEhbv89jBh4bx",
  "key29": "zak1JPucq4YEZt8Awwk3bme5yZtkCJDzR3JcmKakV5EgqD5nSNxK5CoEPsJLutxbVbRpkAUYPN6RtJzS9PvpG5R",
  "key30": "2v58qvJecm8up2iton1Sp3frtbGMgPdB3xzJGU7eQBEzFh3QqjH9qi8sZzvHwDwqt2PPYL2oZ2jKHZnfgafscF1i",
  "key31": "4xsMmxhBUH1D951pyW2p6aLimHSPQifACoYrUKbrCggE5qec3o6Ct2o7DaNDgaqYKAHpioiGCKe9wgueXXtvwgSC",
  "key32": "53hx9k5dqHixKQrmyvYemf1zAPKyFtJKDQ3VaGXsVF3qyxZUV6TVbH4ocfX58nzaudULZJSjDvWKRR5QQveBWGLa",
  "key33": "5BNLMCMHcFeXbkHWWG3wZytpZRMem42ShzeGW2SfJ2RKHyQNqKbrxLs7dd8X3M4diUXdsVJZg54pAeCNvE5EVUGJ"
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
