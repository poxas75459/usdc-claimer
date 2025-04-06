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
    "34nRN8RN9CUubeXbE94jeC7Ettq2UGLp5v8dQEciiTLPASz9xZfaaHQZN4FU7Eyha2cVYFMZPnE4fSSFUrg4sKP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Bi6JRHfkvLXzwj9xgCs1VnMmXnHsTVXevwc5c9MAsGjPecqStsJF2MsXAYTjdJcXCjdnzYxqYDQtWna3dhuCbA",
  "key1": "4S7BJppvvPGZvfBUQRtRD6p8bVqT4WkLsSqQhAdZYFkN4voHKpykSfDLDS42zfUpx8gerDohDJ2FZu4eQoGCwNhH",
  "key2": "2xJCwpnkJqMrn2nGy8xi9jF1rrTQcyDic84U3eviY6dSKxLt65YPwH4kC4iExcj7wUBbjfBzkQdgY89UU8uZcNTG",
  "key3": "4TFmN5CYn3mxLndHxfDpJyyvNiYceaif2qvvmkp3hKMJQYCxfnjqsvC4Lx8NgeDZdrUU6bCVy3XnBjbBMDjQpyes",
  "key4": "3w1wLEYFzfYC7jhb8WrZCYxL9RVMmTi8qFZ5xw4vKXGYViHumsgHNPTXg425AQpEsB4BJigg3ke5hxht67myPLEM",
  "key5": "2f2wUbenxFVSDLVh9jJvizfoRW2Wn1Q5D7Wkea1oEwioNCfCVCaxfYxbmgpEoYaGfBTtL5ZqxDAfEF3UxRgvvYyq",
  "key6": "5mwEgpFxRGt696rV9ryUQXjJ2eQSjKNd5sdjmagiEnHpjtzz2MHkgULXC2tXCaHxPeQicGpT47YQ4vphdXjvmgmi",
  "key7": "nY1H4zgTgrQKnHVcX2nhJVVeX8AvgBA1mbSPjKqL6ThGcnecfhQcwy5oZbPSVYkLmMH1EQR9yJf94XyLr8U7ggW",
  "key8": "gn3K3mJVbZXrP8vqn4eLM2Pqe7CMvMnoMsjHDmQwXz2H4vy46zyoaJ3cdVCRKeh4Mm2DacRZ8tr4Mcnt9sUG3se",
  "key9": "4ydjinj9Dg7pAc4XbmVrKVgE6d5Y7gUYZ8ftBWdjCwsNvyADUcBnzUNpLhJfstHsSSwckiC4FmAMU8YE255fqyz9",
  "key10": "x2vt19zU2CoPonzANwgsfFTjkDzzMwuF2pFhfpy9ubkJYx6eC4VLjEsoyDMwqbKMEUPypLcxn98f9p6u3yB3pwc",
  "key11": "2d7p4GjcZaEwtBvY2QBcNGDrqQo8z5MK7ZBgdvGQ76XmyW681uabCKwbVWMJtnfgWzpNiPSSBsGixHsM9caEEhMS",
  "key12": "BhSc4Kh2qvmz5mVv8PNMHeScZ7GTAU3DeZxLzbzJ9XKz2x9Z2t7VddDQ6ggYPGRMvh2HJ5Uv5Qw48pa454BkHPE",
  "key13": "2TGtk9UsK5FhgdGPbWjCrn2PkNyPoCi2FfUb5pE8pKNNgo2TRVB3QSiYhQHV2mJCjtX83CZk2tuxmrkFfDaGybya",
  "key14": "2EbhLMPtjXp8mtwX4LDpPHP2UkQ4ZxKPrgHXCCCGoe6kfKfRsymr2ybsEgPBRC3Nm9UVkeLCsxXefEDYppi6rFu5",
  "key15": "3rz9WW7R4LB39KmZ83PJLgReVbJDWPwru5HL32afcPNGqvPvuA32VMxDNhrsmhSRtJTuiWAuEhxQ3BVnwNXmXdL2",
  "key16": "26dDWRZZDmUv7ntnLTd54hxkkwDM1S8qwouWTGYv3npoBiiTkLgjpgMxTc4q6D4wkeoJTASbwqeXG29g1PcJYdBQ",
  "key17": "ggvYvQ4GvwzaXhwkDU8KT1pFhtM4eGCedoLQAYJ4cSTNZAqVUQbQ35nzQZRRyGkPfeFjv6ggopnk35nqAF5hC5K",
  "key18": "3CqGv2f2PMiWouh94jWybZXqGuFGjTWNeATkRozBFFGkdexcEW8E1iW8MWoXg6UmwikaHxsdK3K9JswDcficVv44",
  "key19": "4qH5iPuwv3Yu1jX2YSLL4ZXtrGSgB8hU333qwkzTVLtF1xC9cmazYsj3xw2PKxXNYz5gGYWc5QmmUTPJvHAWoKFB",
  "key20": "5QU7hRdNVpqmEP8X3KyzpHPQYsGbF6NMJQE4XnShXidwGHYT2xdwtAt4mw7JA8Lc4EXr6WTV7YSz9Aa1gELYMWTn",
  "key21": "tLzBWaSpKDBi5VRubRq4EkKzePkptqvYX6eKAHk7Keq5AfGHzGLWKseewmjGJgbsDr5cb3zndzW3wxXrBvLw8Tq",
  "key22": "2wiJyKH42eBTfUun3Y9L1xFtGqA2qqDMp6o6EnQaCvZjAqsH7hWk9KHcFjAT1rLvnLAPcxJEWHHmhJN3jKLjyWpk",
  "key23": "6mNwHnTitYuHQrx3i7hkkR7ku6MV19Pz6CZshq6ySgHFqPazHiE7ivq9qoiuJu1JQSsDtA6rJW6RMTDQt9jukVt",
  "key24": "upNh8gpJVWcvQ2F1fJ1goYbVEkSjyN546gYjB3LuiiTQwFCZCY7mudrUeMqzSHSYFXYgd2ejj2VsVMWoWCgwwTf",
  "key25": "DzaQkiL8EVynu4uxQYAkiFXqjrj6Fpyy57L5f5YkpEF2EABskZEU6nxnsBKknUNH4H8Lqh7agTf5b2cb7tbBE3R",
  "key26": "3k3o2PniPSPqHN1ZAFpFfQfpCaH7mXC3hfL42gWgk3YLXp1HRcPJikRmBmhatKnfBqw1M7WU756wCNkWs7vHssfR",
  "key27": "4pgEefbBR2FcDmY7eVwTBzM8geYpAJGm9XYtnk5UfWcQkxFETxzQEBxfm9c8PS58HHCgw2KBU7AGzvPxs5DZULjX",
  "key28": "3qUBoXF3h7uW8udUQr4iMp6ybN3KMkbEnawXtQWjzqBohSBBDyctSfP61abjGhJmjQG2p8PyYCL3NwprfFb3wD3z",
  "key29": "5mStZ72DnWPKWf8SEFc3RDFNYKD8tb5cd4Ne3hM3qVRBPkJUqTAP9HNBmh4f7jDWzpvmDSyDa9AhGtJZJYZ7vWH3",
  "key30": "5aPf6pYmJjudA7k78bYSCT24jWjcXMRz5f8Rme9pNkfEj7JBjUVTBEaLcEqXY2tnkQTcMfxYE8eVDaFZ7pFKrMnN",
  "key31": "52yhKJxrAGjg2FCG2weud6w1ZXaPr12D8UXraaEqE8U6ZEGb1S2ihCPWUqWCnMiKmqcLXmW96Mn4M7GcMJ6fCeRm",
  "key32": "2VwfCCDB7geC1NboGYpiEMa2vm9vQqBLeu3NPXoLoU8Af81vqPnG8fFbVWFRbTDxcBPFQsozxNxQqahDLVjLK4FL",
  "key33": "2DPzqBV5M9KBuEDSbQYKtRRwEkMzQHM39jhZE8C6bso3rG1aCepuycDoV1szMr2uR7Gg96VyVP1QkZC388uQ1cGs",
  "key34": "H5d2VqgbghL7JDDhuR8cmAraMTMBtmFP9CeVTiE6UGiCP5fooAWD2WhWd28TodeJt2EriAyX2PhHr1XBUi9haWx",
  "key35": "2ao31SYedmvwKWtRLppLEHWdCaQz12o85PcEBL7uYtNhvrZAidA51Zq9rbR1u6LoqdBScx9pg7wDBm6UNUTxkEJm",
  "key36": "4S67GGsndfp4HxSzeTjQ3a8syKNqtsKRHJ5BK981Jdg64srkgRGQ5sxMv5szpg5PSUJiKNvQdn9jAtvXbo1AzRyV",
  "key37": "28zAZzLLAhYTR187Lxvy3aS2RwjxP8gJiuHsZSUu7LPWdzMbncuCyUVHGVkQ1F3UmHFtvc4dXTs1hCsW7xDd1Emo",
  "key38": "49KsH6sV75FqV9d1zNH3R4QHuPGmkRPJBZ7yA6f3sDYy27w5CNwcQnj5Q77RK3Lay4So8gCnuAciv1mZoJEEipwA",
  "key39": "2nvbfQChtYw5PMDcYA5Ydn4AgYudxggoXum2DcsvDX6E5PLUh85aHN4aHC8aTpSRgRMa6HdfchK1HuvEEWYCTfuw",
  "key40": "2TG4ekKAAetPgjFLiMBymwTezbdhvFZp2rn8bFSVpEBGbXhUMe2CnCK2Vrr5GWkx5zL9sMWeJZf2uJQbZeygAEUf",
  "key41": "522KTiMmu8uwjum1qFy4WPRZRaLmGrhMucgcjuutQX3UfMhvNp2NUrmFnxUShGrfSugeUG8UcRsHy3AbpDqAWVxy",
  "key42": "iw2BnENAMRv8xGAUZpaTg92eRLGG8iunCRJdWnxPghQBZzyoPNa4ridJTmfufXy7RnLkMKs2W8Yy7VsiEhDKo6K",
  "key43": "5q6ymG5Hrj6n6iYptFACwcJHBu48u1xvpt4CY4wA9PFiaVwvzaiYgeqmwwuQcSjkRjfXBk7ukYA1XA5rdztCVJCu",
  "key44": "2FufQH1mNYCXmvcpaH77VcVVSA6xiHkY2v2LoMv2j7YqtqJKUrfFHFzT1x1i2a1zH5hf4Fqu4xFY7k2CpjJiAKza",
  "key45": "4NFCsQ9jHpjyi4QKWiPfLqDj2VK5GrZqpFGzMn2ugPuY4sdSuRdjDBBVaiXNnqnmsTnX6y554o34w6ar6RjvmJbV",
  "key46": "7N5J1vHTfCWn2p79LWDk2D51W75yhE444AynTeLgQZt2oP5zQ8SsYCU7p5QX1ZFi1wXnAgHHkj3jFmvW5CVKDqk"
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
