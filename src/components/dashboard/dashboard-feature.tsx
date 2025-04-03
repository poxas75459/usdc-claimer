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
    "3tjcECi2u3ytwRG3xiJDeqd4UTScTSoNc5HwRAgjf79Xz2w6q9FPVSsTEw3suUdyExZRw4Xh7LzUdyhnEyLL2f4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kpnKHiLaa5ApumbkFZTe1jnLHxngJvNPyuEy99wZBshDKUY6xfZjx4xfAbP5Mgno8byZR5TC9AuqV2GEvLrN5kQ",
  "key1": "37CAa9bY1Hr6u6DcJ4EFZ4nKx1pzmHPdECPwZdRpfB36omXL2dGMKhCqJLxyyNuqyzXYq5n9Q8WA3Drr5eeehFdD",
  "key2": "2z5bsFCYC7WLRkw126kqS577iCusFKudu2hRZH4MPJEGAvioJxw1oqjZTXj25MZWv81Cv4gRnGEJpsdztsNiJyCU",
  "key3": "2ZGoy4xN1hqxqfETA3nfZKuy96PMpPAc3UQCVKEGXFoG2sxWZNaTcbcQyv961hG1mjAzWhPRCWg6hCVpDcQiZrqv",
  "key4": "5kW3yAtLHuxr65BAYiursVtaCK3oREEhj1GfH3nby2NUJbnY6tD85NXFVm4Jf5aDyL48v73SMxHudtCexLdC8f9v",
  "key5": "5JtMDhW1KqboJu2j29uYzG6NpQ6phJ6y1VXJw5jTaUzzPWtDFw6ibHQRbNg3W4rZxcfgaP56qkMHhgp27fLNMF94",
  "key6": "5EWN4qxBKjT8oU8yGTgSFRjkfwRsF5Y2Dceep6Z2RbnMbEGnMEfkfGoRjFThwrukRn2WR4Fiw7DHsE5HVYjG28Lx",
  "key7": "mSRUQMTL623MV6A7ZFrb3Lg12rnxcayoSa6cwS36S4777VEeqoQ334cbmAR88CpLaygcF4E7PAkSAG8mXnrYhXR",
  "key8": "5zCLbceRxsfwAA6mh2zJSVJRdHQwQvw7tVVkEBZY7q7HtvkLjtuLYXt8NtAMmM6cgSCU7SUMffa1WDhmayzLTVLp",
  "key9": "4PMVLRpjNqPkAEpvASwYTgAHxrxURfEGFdjf7p4vzEcQqyyBScr1oyXBeFH4VpSegg2ppcGkR1agGsryeG8tFKjz",
  "key10": "4Gw8AB9uwGLQAvby8pUCCjceV8X5wvyhR9HTJoN5fL8Wvn6ikeJtvwxvLVxnEhGPAY3UUWeTWb2piX4bCCDqZH78",
  "key11": "5kbA29R5pLUwbND2d5qLLBBjDAE4sQuUDmg56KS4sDHVpJ9jrd83TSEH5yQqP111qentZMysYbTqMbBV3bLKHQhG",
  "key12": "2vad6FncYAR2DBV6tPYtawexBEj4qqVaL5oHmMV9epr5y5YcMx3u4K4f15noujDv4NvDrb9qqtnrbKUwqPnxa72n",
  "key13": "2s49wo663eFjp1CHppiN7j9v3p97TUKk9kvess4pBvNNxkgJ91rTv5qWQ78dECddBQ8t5Ba23uka1LaP79UnS1Sj",
  "key14": "XxXQ3rxMZC68ZHB2enLiFG8q5qzU6Sq9oLMbdjN1ukwjao53TrQikExKq13naq2ofA2s4aoFsX4YwyNChRTuccJ",
  "key15": "4sZEPa1wUqdomoGY71EodqakL8ySLkKZMn6WoRP2zJuPhXLH1C3gL8cJzf2V7pXNFCYRExPDsUaa9Y8btxXrTkZb",
  "key16": "3ABeKAYPdV9nDCHd5d8NCXZMNLjVEo6NH55avgnhrEH76Mkb95q85SJGc6uYndJD1m88kUaepyTzY37TzFCAwu6x",
  "key17": "4zFkGaLwY1xWrKpxoxGqekp9PiRetmUDfDa2mUyjAYbVsmYvMjiStJqdTwApMQchnR174NCdSypxGkA4vV3PBp4k",
  "key18": "5SwmoFvXXKrqDD8eMJ1KY3nix13rZtoryLNZvNcu7QLuiBXFbsPpWaSYbJFy5gAJT3hvmzDKhjzR6itTVpSVQSZx",
  "key19": "5iinEKozNzGUkHCnmJ7PpyGzentTqG63sBHp2Jqzg7BF1oxRXkw3Ad9HQiDBnFqN5w9CW9TcbXy47GD8qFD5A5DA",
  "key20": "2uUEhVCgB7sbkLekvw9NXnMVnDpGTMVoeHiRxmwBoFyBjN6eJa2XpWyiTDx8Jv5qDDProDGUucaq1oY4fxL7A6bc",
  "key21": "2sz6DdgRjgfyhDs1hjA1jRvVdD5MiN87BY7mDmSfKCQ8pioaRAuP2n554RkKzVaYa5QHmwPB68kK87gtXLBwC6iS",
  "key22": "3FZysUGEXFneNsHHptrkXSbSN5zvEdkxrg38Z3CxFsPf1Ek4z2TZ6JksEYyKZH88e3c9TiRwq5zZkEfUpPSbAcEa",
  "key23": "Yc6fiMwZDZdgvREzNQgf6SMKf8vUjBEfRytsmgjPcBb82UCzq2ViBHMSAyh8Xdfcb7TQQRLwo79yiw42kZPZwKe",
  "key24": "UnioWSdeZsChJVnnHHTrNgTj21mw8MmHUmvzqSMqmhCzzJDfUrHj4Bq4ktTLzPbgCW9cfnTDzcgvsyUwdHbXYQV",
  "key25": "48QWjvAGTq6kCSeC8PuwseBSvhjX9VZ2WCoT3dtWirBzCwGKfd6jUZ2NrFZiLUrXxTJJcrvV5Km3XhdEaQ16M1Wz",
  "key26": "2eEC8LnSrf6NAhcckS4yQrzoBbocNXRBAYWoSDWjbRziruGYPhoPjaTdYCsYPDpqYZMSumctzMWUgGG4VMLxqWaP",
  "key27": "4Up8nZTXFLHAfNPY54BK7oRLwSsgCiXP4CxFZjnkpYjfNRQDYn7z72JD8VmVvH3DpvfYRihQaHpe4LgT3FdW5xhW",
  "key28": "4pmbS3dWnyNiMtixTaxsAMF7yVSxeVn8NLt9P1k69QSVaZmc9gTX4VyUEFYVnBHx6KwJz4aADiMqxQZYLtxSQ76H",
  "key29": "kD9x6tt4DsKC7veYuDx52p2bnMXDUrqXgWXMzxMkTERTKn6czk5rLM1cr6SvEzHnE5NwLH1TrhFVVjoVBaNHMh9",
  "key30": "jRyEaKj62p2B5L9M39ARW4F5J5cWQtyT2cHvqvs4B4NY1B8rzmQ2LDpnAgg8sVPSQM1NeGZND4axHf7Wa6NooNZ",
  "key31": "3FTtLR46B1HZvXG4DMFts3XMnjg7yP7kwAigXr4YiLuu9vAg69LcNohjKXSy19GRYyjJ58vQK75cX7dfrWJ5NpQ5",
  "key32": "49tkKe8vaU6T2X7uiBpMsw2zzRiFk33PAsou2ET6SDfZwrPJXCBu869AUfxBCbW2cENueURVq1wnRwSsQkXFhack",
  "key33": "4YqqzsadGPv95WhQYJHDUMtJxvsXw9EBnchqJ4NXrMXZPYJQ1a3TEgPnsA7V3ngBmrzcZM3nze16uTUeqSWi8uxe",
  "key34": "y5nBgcmFs7EMtNCNyRJbbbEtrGH53unCK4nrhBWW2CGgvr3x2kvr3nua8VBM7bdyqxNMLqyuoehmu8bLWLeydSv",
  "key35": "4LW3j8phx4iep4pPK4gR1zWEd9Bnqdps4kEay74npV3JqGp4Ky3FFVvBxhxMxeZ5drC5Nzey8ypzxTy3SrCHCJyk",
  "key36": "3DPTFG2nYRm38dCCMMKjKLTxR97cCwuBeTJRB9VyGK1A2vRMTZcPhV1J3wRo5DSt9ftAjWF98pDqQ6g3w1KUR6cd",
  "key37": "5jzKGKrkpsbDJQyjQJFdC7QnX6svqkvCqbBTAiZSWmYADQ6NcPXyDMiPySUQHwCorgvbi84REQkX9J9cTpfvF3qq",
  "key38": "2e6bzKwZRLe1rxXeFXXuSu5hCeei7Bs8FUtDvgWfVT9WXaWqTNjsCQKjJhtwWhrCYyiHRMrBgL3TuHb6pKBmDVih",
  "key39": "42EsaVHDtK8D6x5Cd22K12HyViidmyagUAm468oFWR21dbrNgo1zXTSthRoNx4uv4VSufMQ3U8PbegyKDzCgWnYT",
  "key40": "2S6wgN2Tzp9MjJDwdqa4Le5b5R44Epdjj3XTBLGkQuqad1ZTDXk1dc3BJxTJ11hjX5e799TxaDa5YbMvnaqF6Aag"
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
