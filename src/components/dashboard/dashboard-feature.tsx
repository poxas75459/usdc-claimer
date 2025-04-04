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
    "5BD3Z1Nze73iqEQgMvd4THDnHEaj6oMCP1cKNS7qcJysVftp8PaMYXssA1BpSzUoHWWe5BbcPeJ7H6xsRL7mH6cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o4yfad1omRhFvixojGXpGuPnVtVnKg24pXWbNYjEavN6HGhHLPPz3uxXZSJViPMgBjZWmbF4jfFipMg531PCJ4r",
  "key1": "4VLRwmb1g7beBYgSdWRfPbMf5xddWTTjs1VEWuVDo1WXgF2kxrXYAnvYWRF2PtLJ8qbGp6uidpveT5BJ2pNgtqTw",
  "key2": "4qd96Z51jqJmoMgfE72wYQu7EDxrKDnUdArw7wC1ryhBSTXGGKBvMDiPrgezTHWToMvdy9u4qejTuwrX1PPuzrkn",
  "key3": "3T9zYGoxH9cafdCmLmpVhkdD8rDmrWnuGh68FT5ybqcgBzsQP8CvaGJ7qTbrFkNKQGvryZoyRbv4rexkkKUvgvRG",
  "key4": "4TckVhXvQnQqZDnNWtUFXuakdNsEmV8EDvppuGszUjCPZdXAzPyk9V5G7x8QpvfebpScpkoUMAaMwWk85sX8PwEc",
  "key5": "3oe2WMFAt6TKRMRQbm1vN4XNtCDFeJgBX7gmcLc8FPRLZxftjPyTVhnsS5SjN7HTat4NCVPfwXMR4Ud1isycBQVy",
  "key6": "2Yye7fzW5VL8qg1b4xTmuQ2PTZnMCt551AdSpAcDgLzF7qapAtap255DTSRWrbjCz3vQcoRYEMhqmasMzZgnQ1uU",
  "key7": "5fy7fQnzJ7L14ia8byFoAt3ZPaMHfLNAVKGKDAJsBVfvcztpQ12crgozMFtiDybJyZXUNCr6aW9pzsopPSuvbB98",
  "key8": "4TfQ9fAq3ixWC9uvLDNh4g9isxB914UqpQiX8eSR2gGi1V7G9Mk3AyvamQcyw6kQp5r6kcxHDKnRiTpWHCpLYEpC",
  "key9": "StJR7mf1X8Qb1VM2shwWf3pPECLoG8uxDpZuo5zTWwtupEzp7v6eABYSuBDH7MNpNSEtM5xRy4i3acc2X5Yx9ar",
  "key10": "32YzNx74Djo9ybA7xjWoSe8c6FjtVzvL7wCJghVoESfkDK1NFJhfHGdGsTQ1dqJSUzZLpvgARyGENJVJXQK6hWt",
  "key11": "475FMyZ7VPa8DxXjjGJiVDJTbA9bcHnx4LucnhJguBrfUEMFb63UHpwf86N7X5SJm7VKz89Z9367VLPWpvJFJPV5",
  "key12": "31Uvg5JHVz4rTPoFoZ1wD51bL51BKtj82ZR9vXv9BsdTqEXSr3X1pbC9aYLbN65hYVoxECrQRn52Lxk7QasCYwC9",
  "key13": "4XMm8c1UbYZrWeGzaLzb4d1FVVSiY3iwQzPoPyoVBK9LYUEeHNawrMe2vhJf8iRkd7HZyWYQL1LqcWbidJxTQyvo",
  "key14": "4yanoTMus1Dc4c1Q2WAnCiLnwstFoQ3gKuUm9kFcc88JThNWges7mSLLHsM9TbJNU5u8TahDDKqE6vzLoYU7k54e",
  "key15": "3fD98ahedu6rnaBhPDaiHvPiTsM4LYova5rzanHxX9YtLG4tWSSti7Muaid1Dxgsnnumt5ZKPxTJpm5PiVgVfB9h",
  "key16": "4LcgQ1kpCKcR8hRyhmf4dQ2gN72FzmKSB1t2YTJY4nc2hWAvfRNyyz77F6YbdDKAx2PgyajkpyjWeD3jWXNwn9GU",
  "key17": "4v1KwHAepSXsMdM2V1YKyx75QxHyP4TTQhfoKhCHFCB7Hy3bcxoTkmRBNpM3Zb92z7hedxiTtx4D9cHgs8ViVWNP",
  "key18": "5cgvCukTZUJkem5rRbQd9XWABa2XHJAFucw957howFFJMXVioiQ5XVqG46AkG82t4YwtXbvcKh6TeVruNuUs9Eq2",
  "key19": "tX8e933VkJu5Nj8pW9ovZzjoyZNDDUDu5g4EdGAwwfJJLmXaGy2UubaPhhjcRXYhxnXvuQMnz4eFWtYhvVDm7Rk",
  "key20": "yvS5SLBAnFSHuHae75PyeLK9TysywJ6Sixs6LBCABemJLuML7u9B4Aq3HPhPcv9113XBoeF3rGpCjhEvGskNLxT",
  "key21": "5nLUThxLeRH9FMvrBBDUyqtdZzUuLMRzvntgbHuTPm47wpk8v6j2Fi76ZPwkJHXy3Wgy52G9o3sstewwUQCo3qdD",
  "key22": "26wo2tZdibAnSiVpRNX6znZ2oaLRiXF43Ag1aYKTjmqs5MyK1YrGDE7DAyUmVG5Af4ZdvanHmAFqMYMSoQe1xGBw",
  "key23": "5gBCtHhmxswSmikgmYBLkanT9ZTyLPi6DU59r6H4Fv1KqNDbzBgXecBTEN2BuJo59yDMyQMGo8FgenNRxokF9hT",
  "key24": "3RM5Gyb198ySor9bTmowgez6xdRvT7c42ecgproh8RYLj6W6gfNjpx2ztkw42yiSgcppZ9mUyHPTK95j22QVKEqD",
  "key25": "64LgSzVvTFfv3Q3U6ML254doEHULBSv8qkv7F3t1evwGmJSkoZ6PiTg8KGtdNxdoUa63AmzkDp5NoMdG5CnN7ioc",
  "key26": "4rUZC3fpDUvYH9Z9Ec5xAhxDhWWNZiJ4o5kc7kSPFe6L4BoxTbpEre5KTyMezJ1bSsR4AD9emQbMfukTpTqQeeov",
  "key27": "x24u85gqgLqTAcioRxUJxwFrJNcrDDR6T88xtRSmegV9FL4ds6qtaswZndwhX2djEELMtQLePW1RLSGVNnLhaJd",
  "key28": "UnzW5VnMiHRk9kG8psV6sWA1MFPuKsbh2Kta8UAMW2cLfwKM3JrXonPM5v8HMfwW5pSrEy3imgYMjfzvjrbkWSt",
  "key29": "k9wkv3MHq3z957fh5wDhqpmpj6tzekfxVKfCaBwwp8jZbaupqRbWeAGgC2eqYkQrFVYCAkUnB8FwFa31Vtyi8yr",
  "key30": "BnCH8r5BfwcegPbCmfBLrVZKzo4E1LQjgzt8uhkKDXuS5WmuSRJFsqnhjPVV46rSF2msu2DshJvL5FTjtKbXSmQ",
  "key31": "3MgSpAY2XLqZakyKUhFe21rS1mV7rwb7hgzrbjkc4YoYy9jvg9XExobNGZyZky3c8e8qm5wqynw1LzLmuUHPBzVD",
  "key32": "vW7jkogbirTNgv3gz1ZTgMVitNSdh4N4exhWqP3Vd5vptCqSD3ea8shgBSoMpfGzi4Y47D6aXAfmVnaLk5yjDKJ",
  "key33": "3Qvee7oP6gxU9D5P86MmAJQ9mR9m5VHymR2uC67qd198Xn4p3EhKb3KA4RR7XHrfRGUU932Y9NgeT3eNdGDyhaQK",
  "key34": "5JDoNGmcjfJCcNbUH5TJMs1Jg7o3SrHvPiMZCQj8SGMzyxvakYxbP3M4Gwj9rp4oj48ryGaoBHcR9UDGyKD8kDdX",
  "key35": "4zzgJyaSPRa9WsFaecS8i3PmF4xoAM2bC2JpMCYn65ntEs4Z8CCLrbLQbuhpaTTcZU7uXWZhreFhE6Lo4FxBMg7v",
  "key36": "oQD93t9oPAKELv6pfmhRkwZXaPEigRX4t4sfkHZDakQGy5wPHcSvp1RkALxWex2fsGXAskV2fQq9MrFSyE6ovxF",
  "key37": "Q24XWiN3iHC7Y5bcyH5ApiHxhyYXT5cRXwnXmcYrSXLj3dFSxp5fjuyrKqg8AHsEacvGZpUAC9iAmgKfD2igptL",
  "key38": "2gBMBHmobwANtDiqN4xHRpTZ1HhNBXrVSqVN6zjDKywAgtpr5WYxuNgdsV9ccdDeTGBhgfaQ2BU4SD8pVB1oPWCZ",
  "key39": "EAxbzEvfEdCr4macZv7t5gsWA5thds16Kepywg5fny69mBU9rqJqy48nWMnD8PiJmLsAFXArftysiUG4nRmVwhS",
  "key40": "2yAcAfUUKCLFfwHzFYuMr48TfjrRZJAZZ5pyJkhcArJyCekSwGSX9mjtAw38GX4F4pSStPHEjTXJJMGEaPU7SKTs",
  "key41": "4fDadHBLT8Jyktn4YyGZy5oDgLaxj8Ningsvqwc2mVXUAq8Ks7hmMToUYswSqDEeGfaPBE52iYBNZNgS6FLGyFyu",
  "key42": "4MgPa6raiSgxBFnMHCGWJixoTArQ94z4iYtsn71F1DZSmDwd94heAGcK5N7ziSrZKefAB5NxrZV8JSrpdggVTRxk",
  "key43": "GyMcjvjmfiE2nazRLKYzW8sZtTsognwtsrE1irKrbNXhF4j9p7Bg4WXe34GTThXSv2npZ8Z4B4oFTKDcva3ocqv",
  "key44": "5qGzUnUfbVZEAG5ZY97RPpzpgxVSe4Zb8x5VMggSX627eVTK22U9bP1bSd8fSR3McbxuEGd8ZKytJrKaSdXDqbto",
  "key45": "5FBvL6dKUgGx3zqxV7qtRLFht94LYsSGjp3FC6JGXQbzLAyZvHqaT6UqjfjxYyXGAFym2Y4mi5dy6kCdn4wGNYDB",
  "key46": "47V7yRWQaKo1gieWjQVwApT1A2DAm4DLwVSiXSwPj8keDyULWuuAF9V7RgnvWx3SoYGCsqo6bDqLUAjvKaeZxF6h"
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
