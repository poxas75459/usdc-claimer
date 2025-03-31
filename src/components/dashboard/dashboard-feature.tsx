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
    "3pqybvXyz4HA1p5bDgSFUVhxgw29Fig1WW4iRB59KFmr364cb4XD5yhMSRLFyZLgr8oW4cXLVXkzGWCN1cQjX9Cq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DMynPGK5qaVK2rT1pNFoyhKhe8hLMxfxZPznBfhc7YHiixd7GxGY5L7UzXh8ao43rWBr2A9uZSeQh47BEopJbrH",
  "key1": "4TbyywDVhGf53yckAnhWM5uUAcumQj3QPQnfpaMQmRXYys6JkK4rG15yabLSLgbTAGmb2P2ubJj1xMp9kE6c5vrQ",
  "key2": "4ngeoheR2pBcqN7UvEWbeb3oVoXdVD8TvQSTEVYMsLBd9A1U6xEQEnzR3kFRuxbNpDT7pE38uKHuNhL6enemuSGY",
  "key3": "5yvsMh3rYLgRWzYjCZ3zSfYdXopkmgnsUXYx7pro6Up1gJdKm4aS98qwY6WoP34xmSecPtczb93cuUMw5FNiuyab",
  "key4": "XxBNsu7t8T1witVzs5xFuXNguhWj73STc73dvc2NkjKRVGFBVDgvek5BXs4gSh6htkL1Kx1wpW6rzuyut4GJpTE",
  "key5": "2W8goJNScbafJLqqmsrxkpRjRH9KZsPchhu9dVEupcfDQ5CGRKwuBpekA4Hp6seSwZMDqVvEVYjzUc9znzbr4DSR",
  "key6": "3fMsYAT1k6UyHzWa84NS4v8J1zabFhPTLza3DZWM3AR2UX6sQ2DxrxZsTYXusTjub2kCz4Uu488CW6KLNVwrY6GN",
  "key7": "nCAwYvJwqHvztwVk1XX1oamFzV8SeUhWBw9ukeAUKTFLi6J8TPZvya88pA8AC24FhaAi8ZBFb5BSm34NfN8ZEi2",
  "key8": "CzVtoVNvj29erWZ1MuKMZXr8X7yk2H6zFhqcBJovrSNDvRWfHUNDYtxnHNrcfrzjVRhGrJWEiDDG77tSfadzNuD",
  "key9": "JiYx1KwUwvECBRoGFyHDRwYRznW2RdWvaAEBsyPXVCfSPkS59gFfhAAPMorP5HSoPVmpEPUBbuh2ipqdeoB5bKA",
  "key10": "5C2Bsv7TspBVJdSVCiSef5TdsMSorqVXDX8DWWjNtY6bEEXvaXg9idi83wsj9RKYGdu1TVWvA8hDJ25e6uQU6b62",
  "key11": "3YcnVTCJL5P4CMoSy9ajCnNcVRXXqEGPqMWPAivwkhgczqK4YXm8EH6x3vrsRR32eZUve5WoAwSAmj3Jr6tPD7R3",
  "key12": "5KbXGefquwqJwZMQ5hHfefF3A1V2EKxGcxeXKp8gQy2QBhNmcCp6wkpDUaxSBgDErEHXcZ3AQHg9Ex3sdukBRGXY",
  "key13": "RZLqQPk32EAzEvtkfyh8yApBvYij5CLbTdcKzRAjwcwq363QakpLojXPTiDH8xZqQggcm6SkYEEXffSZHdN8ESv",
  "key14": "2jwJSQGVByq4D5uAa49St3mwmQ5EbxdWSmniwgvk6ixr98L5ggym4z5CVAkGfW5BkJgTUVsWabptnynPG4qQ7PbN",
  "key15": "2ewWNqNVcBsV6LiszUbB3xpJ2JLwR4tyeJng97bWuWmCF92NWKU9FVc18woAbSCKiDccPwjKgpTqmq5yMwXRagZG",
  "key16": "5gYZQemAkxcQbakThgkYQ8tBiPcbVrkbGdzHzjvqYGtdoQRGXbEXRkMRLsAaaaKudiqyL1rgsMwoFmUQJndwkw1d",
  "key17": "2AH6KopSra15HCmaCSHxnNNwoA5VSjRyPHfAmvrffEzMQaTPnumo7tEW6kHKG4YVB4c3uy9mvrZjdS3F4KXLkQWH",
  "key18": "2WgbRZ5joe8zcaoWU3CoxceMCnzY7u3nLQLhohMeTjs7R42dZY5hBVo4EvFDh2jBSdUyQotdk3nbMk15yBzLcPt7",
  "key19": "53vyGwCf4owsYFsmLbBubcy9gKBgejA6ZWL6xheFbTnoDwmLPbQoGT18SvGmT5vCy3Ne8UpAzN6dcjXeCuveFvMe",
  "key20": "5ZTrGAQyD39rcFiBmTQPG8AH2gJTh3eo44PTZmpJ1jSf1qpviPwHjW3pePXLS1EcMw6Zf9t4gB8JwsKfZhD6bRZz",
  "key21": "4svj4tumkXUUehHfgELtNMfRzaDPqbNFpKsK6T7FegUW7Z9LW3j1URaruNGehTmHqE3N9wSb3cXnzV98bEssSyJc",
  "key22": "4H6LR2BxVZWzS8NfGtTj7NZaZwJGb829z7WJ3hcb4FtWZ6MzjFH5J6JprdrpQMSkPvLVbUwrKqDqmzznWHSgppan",
  "key23": "4TN7ecT1q99FdcP2JQxRXhHPNy3hn4mszS8Szsk69dcjpLUiyLUd9Ca7ZFzaSjzL33EaGCegHGu4mEQE3pmh2pYP",
  "key24": "4PrkdGF8sxTUiamFXLbz219ckPP6tdnBQzyXVQvD5aNQxYyvZmg14bi6wHc59XTZAYeUiweYMrwCUuc3QaEZh5ka",
  "key25": "5VeKueExQi68FGiTyiibs8ZjZAv72VWW83Afahi9cgksTGagyrCGWXf5RHE8ZWpup1s7yMijajooKjLQWgnKqEfR",
  "key26": "5C2bCBESsQ4ojWFTzuc8CGFtF6WsrwRdxzbGa3ZfJETBsZzhWboxz6NkSutMMdzmtAWKK8rJG6mdterDQq1DBLvh",
  "key27": "4VG6f1tger44TfGRuLiLpWGz9iFLz3kDbYDv5z48uBaiTrm1TfHotFU8E9Q5dphe5WUqr5ZptG5cKLwrE4Xka1FJ",
  "key28": "5UEYxZw4gxJQ7wAhrYpj5oGFk3N36EtPk52jpWc1k6nuzSVPgLSxF36N9kcYVEsQXmCXUMjBC6tqzqXgRD45pJ5g",
  "key29": "4J1Mor9TusiZ5verc2Mkus18QzctmSXHoeWn91QBeSoFT7heRxfEEb3rfsMG5vNw7SQXi8EUahFA4M47mqeHNi2e",
  "key30": "48G2JnsYEdmiR6wvBWiv2y2UnCvYRoZiMGZ9MvRnm1vJamwpz9fh4duFioBiRNGbYNxvQ4MHbjm5jiay1aGrKpk1",
  "key31": "597xxy5csYaJZfGxaw8DWLbtto3iNeZGk96Bbi7rb9muph7NwxjeA1EY3AiSESTXVeZBqSjyzSqVpHpgM5n4CSP5",
  "key32": "32X6A6RhHvN8E4WUTyN1oAUCeXk1jVYTvvr9Uk4wvcbd5NNiRYcz7F2U25ksdC5V4pN5GkLX6xdcsi9w86GZhsdw",
  "key33": "33iCfDmvBsdx72mWyoLptDNuY8ikUxxvghNgfW92FKqFHEncLUtY8FTpd9Q9CvdGbniWfaEQCbR4Jy9C8jSAX9P3",
  "key34": "rxXneJouo9CKMW3msHKzMd69wAQykERzeL9FjD1CoYxQVGhy7Lgn7hCooA5Uxr2RXQgvi7ocfowhkJiCESQFahy",
  "key35": "ZeEJTUpuMdGQFakatnPsBRN7T5XYoEtBBw9AM8wLCmRo9XTnzPCjoCjpKLySCCYn5BBaVTobzFeKnW2LTWx9wPD",
  "key36": "4qSoNuZWSdqDpNDXsqKLJHTjar7kvgnPjfkmGHVxt9ZtBkbBaUY3jM9Hhabc7E96Q47PoYWHXa165XNTWsNEk4nL",
  "key37": "44bda7tv49uijreGMBV1bfTJQsgM4odBRRNLMvtwjjU2Vmnr8MAkWoJnFh5ZgdScEiwsHWqK1sJhR2WEQMWGPa73",
  "key38": "4DxotUZbenzxyXt3hwHpYK9zba6xDZENHvSvim1R3VWoAw1DeLEbSzqfwm3viL7VktkoBnTSia6BWohJkLwFmU5a",
  "key39": "QwaKrGqnZXv8mogyqf3htJu2dR6FpmczPynREE9vqUBJXixFikdbyQJ6BxrwWYQHTqBmVQTQXR8YN3GzzgDuMHv",
  "key40": "1mnMuAVkBEos5Ru79SQCQnSbUhLgmiqxArkpzzwk6bfHEGqLTXPeLU6TZkcFQcD8y1bZWJMqzWTNrp7GqLvgWuz",
  "key41": "234XnSMUb6U98Pwy5RBzSdYf74dckUkabbcHaPjJJfPEWKhSFictRgWuHfj9M1qHbF8KFMuKjWPYCntua7wmrHYG",
  "key42": "3GgtwPsAqnjHkHXUdTbJfS3j2KbUvuzqLK5memKcTGFV49SnMDH5mSKWn91FXWZZA9poNkoXpbUgPDJrB9hQfUMU",
  "key43": "5aY1mwBbdQN6GFjQPVD3qhznyLTAJh8Dk3c1DCZ8R3FFeyUe35MuCR9HNMDggpKExCwU1T2ifbZALKpiRSZYWPPu",
  "key44": "5K2wcyPR5MQGKsEReMKW6B3yK3y3N6zd7ydNY5ypzBdiCfuzALpu5DnVCtDa6Zb8kJn6QYyaMdSPDoq5Jdwsijcy",
  "key45": "DWUUQHX3GskakJQEEiFiSaUw3hBXvrYHwAmy2PedggGPcbzYqnoZLieQQ3XPgWBFjLxvqP5bjoVhac39ZVjVziz",
  "key46": "4DQnDdBaXN4LK28qXDsdA7CPwWKh43yEwL3abBk9af3vgQJs89ceDCbhq3PnenjrqSmCsNbHAnJ7EiWU8bNmKJKN",
  "key47": "2Xb6CRz7SVJJeaPDFhwnSUnoisqYbty2eA7em2eWfyC7g1yLFYjnoexfkx9vdNcsiMK98LyKF8EehpfA5GHyyNhd",
  "key48": "4siF5u9aTuKi2r5Vegxntq2y1ji5ZWrMkZu2sXMuzojHZmivwQtBZjGkRtbwS2iVcJSucHFoZBCCtXbpxR5pGJNw"
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
