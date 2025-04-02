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
    "379CnUJSX5nEVTWTk9HocezraoEmqvHJrr4o1kc8aVe8fAd6Fbhr4jVPuSqzfsFTgH3hdKDxmCvmAVLzzBKACend"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2442bq9xee2CTXXLmWYN9cgvGSAcxHzYSY1T9NTJr13hVJ7TmhuxLh8EnoZRfM77K3iWFEP9Cgy5Fy53avhDTs6M",
  "key1": "2ii1GhYwVA5tjAjzsLNqRyVam4EfZGicSu1AdnLMwJwizUAwhZw6f2CHEtJHmgE6jx4sGhfZRmP8e5HJbdvVSb7T",
  "key2": "2A4mVP857jpDKu2pesgMyGk3yZ2ZqKBXEc2XYZYim7mF12ah2YvcGQmCrhPcBkSm5uHx8gbAWRkhP5d8rHP1G6uT",
  "key3": "3g1Cqo9GoRSHPSy1gYVZR6qb8UXu3V97DGPAsn4Losve2XcGboKzfxWMiXR8JL6RjkdiYS1iVdXUUxrGjete85GB",
  "key4": "42hDKu2qHuHUgymMtbCjbBUFocYP3bdQh7PKygjGmuKx8em35WRZfcExBvpyCjkt9zpzviqADTio9bK1NzgQ4aQd",
  "key5": "4ii1wnKENS4ewZtZQY9fUM6meQ4W6EuSBckwcQLQBjAYRaJMbeu6hgGGX3Yx9Jp4BrBAztAXzau1iZZgqioLRFqr",
  "key6": "iayD3g4HTmHedCYzDskVcyosNtFhMc64rJngSCHqWQwt5PRVQX5oMurJqphmm9LkjRT3ivQRgR7QXEWBzFnK3CZ",
  "key7": "2d6FKGgabkegckjnxRrJQWmQt2ACLiGfmThasfVVsSqY63gJRrdXsBCBPwbpr59U3koiihDVCLRzUQ1Ji7QKS77x",
  "key8": "5kEnu2XKMjNUbs8Usuat6X9Vj9ZjEtWnDeVFz7pMerFCWhx1yJjaLeNiyAJsFcdU5prB1pRxhTaQCtrbjpn2XUoQ",
  "key9": "33MCyaLnkbEizxsPGgnpBRJzvkHw7m7yyrrcdXFX4VPf35cemaRBD9kP3MYbaUyMSazFz289eWMdpg1GDdgCEoQ9",
  "key10": "4EksMz8vivo14Dzp4UTwAkTPHHX3HZCGcHooKhnNbdK5d2SNoG2DSjJAgJMyS5KBV5Pd7MHkMwh3XzujtZSfYDf7",
  "key11": "5mNHyYhuyMBP79FwwVGWJVw2k5UvfXkQJWb8mXAmfgtf8QjBVWd4iLvphFSRtMBq38UfWaGsZFGgbwttHX2pxSrQ",
  "key12": "2euCadKqBiF7eJiLy6FSzYo7zR8Vskec2KWqCajwaT1GgAjzocP2Dh76HUySsoow3t99VhBjNDz282D7hecKZaqz",
  "key13": "52f2edSpo4gLHLfu1pis3tyGTzgN2sfNyNfL5xZW8Ne8TrusUuhNCqdEnTtjUK8C8ft6LQb5Yq84ezzQQsFH1DN1",
  "key14": "2QhqXpLMNKQoUKc32DVXFfBTD5txoed3AiZk7xB9eSQpAEoAbmgJVKuA7ExuKGVZJDA1k4xd1nzfxMNjDLTDnDRY",
  "key15": "5VNYGKyvQ8iPNpNc3hkmQMnHpTfKAS6KYS1vmBL39Z8dVySuyVeAdyeaRPwdiFNYxmBhxuqE7mXT38WrWQx51scQ",
  "key16": "nMGXzgGEbpnzScWE5kQY9gq5nbypnNUCZHLdkJ4hkJkBMhH146kMM8tKDBZrUyq6aCSMjY3CXzqLYBi3B9bBwUM",
  "key17": "3AbX15qLbdUKGHhSpqFc79hahVm897fZwDs1qtNUh4qb4MMRZoG9cE9L5KpD1MuKjtZVSXC4QmwJziDcmAzpm2pL",
  "key18": "4eMEmSDTMY2cyNcaXcCvbWPSfqkNh9s2tNKTEGeURs1EaQoAiN4Z964Jp98U6QeXiyon9R9QcLWv7FsVe4LSAxAE",
  "key19": "c5a81k5zfs9UBM52BmyxUbqkh7r7G7a8MY4jz7L6j12XJ5rGUaoTe4db56pmbRGfK5kq7cuEoCMuzcjSrq7F1V8",
  "key20": "gQwv5AcAHqMpxrWoBYY3SAVEe3eUkdcjtZ2p5GSGkbv1AsoRj9c7ahLR6c3DrTBHqA3rJYQ8dPxwTsvgHovxqs9",
  "key21": "44ueUAHW1VnPVDd6hgXKB2jtticuEQf7qidEnaju8S8fDT2ugMQhG8CU66TCwUHWm2xN3Bi3f1xwzCp3K83h1oeY",
  "key22": "4BU34jEqfMs7X1ZDNatXi8Rv2vBy7MzPx73mbXAnFpumNUHxKiTQJN8Y5hoegyZz9wfvZgzJnyuPQncthiberrfS",
  "key23": "5mRtVx2Sgd31fP7b8HKVvs8SwsYc7YmDAt4A1BJgkdgMaVdQrMD1AyzfqXB84PddzaEdp9dDZ7URm5JLbyXV32Jg",
  "key24": "5YaxJm9vgWMeKcV4UVXgvzy1EZ7AKEFVG23dRSLvpEVVmHeE9chKkrvDgQ8ynQQsXVxEfkqdh7NEbiVC3vf5rFGu",
  "key25": "2R3dEwLj6F3urmdjQt3R2cxWs83AoWm4Ztem6DACtBjssHKL7c9Pvdj6VKGfrZRhDNfWHMXTqd9MAWnURkZmmqHw",
  "key26": "3ePRXYau36FmyuXHwr7AkEDAUSUu86aaAZZRQRyTcT2mPVtE5epa6rbdkx84zh4N8oZ53FT7kdUMYuKTWBBFSiU",
  "key27": "43fovgGBu2cUVBsyv8ZN9kD7B8EuznkRHufXz3oAMiSQExTwVKxuv7FNfGuYKkzmwQrEzaVan1znCFgaY3XhRr4c",
  "key28": "4gTkB1jLo3Rwfy948Wu8b9vvR4N5HjVjuuyPHkYR5nNaaR2zHEUDARoWfdiCieycuYhNQ12QT7fzd73ppnxgAqNY",
  "key29": "3a2rLC5aCVZNiJjqiadjcWqrsotiHqcKGPsVxGCHDZDyANYsz7psRUAqN3tgC1CxF8PCJdaS7uD5cVntDX5j4Tbg",
  "key30": "55WGBqX9HMDHmJEvRkPvBrnSoVpFDoFcrS9mdoX8WzVDuSu7g9DK2SGK6B9ZFc8i5EVD47ijsk5jHDDqfGw38uS6",
  "key31": "CH1f3LKnaKZfGPkuojSh7enV2z25g9KrWvesuqKzEEmaX7f2WmYUQ2P6jPvP6iWbo898GHo5HfeLr9r6nFmpudh",
  "key32": "etdNJDHgsUzZxUtLUvkCS5ibqR5t1VKoVHCanqnhK8X8t8Fv7zXMXE36h9tKZr4HZAXYya4PHR1aKSGJPrSUAKe",
  "key33": "2XnwpeFQr8KQ6idKRuZNHwAEVTSMvXAnBkhconVMVJ47ENWokiACWXTRq4CVXtqAtU4on6ztrJYykE7u4AiQJW1A",
  "key34": "K4PNF4a3GrmWg4L2z61cCAVVxNW8MdTvCfvgHjngs7PhfRhTdFyGw2TRQo6VpKQMi1xzcHw2AbT3pjtJ3R2hbuJ",
  "key35": "2iPDDXawcwFgJvDTx1Y7gSnRvFv7egT3FADfQeomS8K1nrmBCrwhZ7T1GAUNpgY1XUNjZqFATG5jrkP94YmebttX",
  "key36": "3CYNq91YjLxgF2A5rXmPovBYH6nsSLs9U7YRvstBdRwUqCHvSF52zxk9QWkxbgwpinKpfdjUNY9aXWck5E1AGtki",
  "key37": "2Vu5KT6s35TkBatwKTNsMShhLU3oKbJU64y2nSe8WB7TAuVZisZT1Efmg3DxCBagc5Jd5FVPyZtsPhtMyN8zoGEg",
  "key38": "5TdHAsxdtrzaduNgDoV1GPpS2wCiHMk12ehQ86RCypMVJVKce1PGKSmSXABvjApJz7UZjtcqrmLLiUHSjGPTDGzE",
  "key39": "3j6fttXC92GYgBvWanwm8WLaE48WRVr3uyqYY4eXkwVPm1MCegDriU3orFHW9uNdHPsvNTQqabzgoBpTYJAqzGUP",
  "key40": "4djkZFCoUpJGkY3AEBsQ9HZQ8S2iymBQUG64PhsMyTnHeFMkH9fusqHZtWBQRTP2yNxX6XFz77NsaD3mMwbrxbsg",
  "key41": "58z9GQpcby6UkvhwuVTYTiAeLoVJQzuWKh12oRTBYKoxyjgfuW2ViBwnHWbjmHBrAYYMihLFXUns2mw3rhuohC8Z",
  "key42": "2f92TDWvrDxisaTsiN4e4kjzVrMebZST5VHNUWkDQWewyiZE95C4zF5qPYmtFEJTABrH5LWhvLC2sZv6uqJoPqVr",
  "key43": "44fPHjhWFKfw4V8258RP1QU4RoyNFjqosUgtPUxSn1fL6AG9BqX8NDjuNrmpxyqFsHukrDBbDMDcsR9VksK1kith",
  "key44": "2dfCWZthMujZ77CU7gMbvUxMUjgMv31ahraZQYpmeKrBVVymVYmmqfcvvFGRAKp89ecyiSYCwk3f8JteXGaTYgWQ",
  "key45": "46B2uWQUbDpmisboWAfGMicVKRdAQvtYDqBLiMQiX4KvhsZAKiKyiYPkXHpux8zo8Q8Ddn24MrfWG336kk8xfvYb",
  "key46": "3JxWQVgbuNHtbznp8tErtYLSNqiNdXErdVjPNBjbAzbdvysdgCnK53mF7UwQ98E4iCZQxYm9tnwLTY4gqJ7LFEr7",
  "key47": "62AfqPZgTR9nmP7h8QhRfjdcR16nkv7pg2mNBJvnz8SufwnbUucjWN9u2NX4sWpiTPhQP4ukqEWUQCGztw6WQ2nH",
  "key48": "2EGrraMgqufP4d2HcbWxRjkL1CRyDrQcPhfSrj5KQhAPX3bAPD9oGZdM3KqCUupF9EunDo1AuTFX6fcWZV112pBM",
  "key49": "4HsvjAjvRDotP83TWzzichb7vuusnQnHsnK78Fk4JeKdHs3WUjWdvNdSQrQqhPF6s96UX9cAXFKbcSFDRv843yrB"
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
