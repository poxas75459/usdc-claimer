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
    "4cJwkC4eBLrruqyrMjs4711VCs7yM5j7HeJGryMY5L7bJYBfcPbTWpW1L1gcYHBCnhmNpT2mAWuxyruPmtY9tGbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BksyuUmEpbkQUaMrnSwj9QS8nQaton2irHZmTFrDVNLRTVfVU1Tkgedtb2iAjg7y3Vi5qEUiXW9GnYTSEtXqyYh",
  "key1": "ixThzkSFRjvigSzPesmW9WXhCpTpLW1CqAWBf7bvcrkB3eMbf5KGCUXS3ejNmniTTVSy9LwuSUbmd1AEpjdU1oc",
  "key2": "eHgcamZA89NdG3kMEFtbSshACRnFpHk7H3CqvtawBVK38sHRxTZ6b91Fd6cwmhUzF8oVnNTfHjwrAHpEhMWUCpM",
  "key3": "5dyCpWimQtAUuSHwSKnXcrMxXbgvz23SWCYirAbD2Sf8vMZnDXPN8TWnfZXs8AXWzERQD1urDqvYF51EhRzsPZE4",
  "key4": "3nMoCYF1G85kH8toA9tRCts4GzNyNym6DbXBL3JA5nQjFi6dGNuKh47tjWTgKn3wdan2SCdVagsVHP3yH5jGrmH8",
  "key5": "2ytXiqrZMbt3oHXDVhiDBbfzq7uHSxcSs5i7PDhjVL85i5MPjztio64kwGk9KZrHyxfz4aYk6bKC7PLAsam3jdMU",
  "key6": "4xxj4XVhAE8jUZ9Kky1mFkx8JxpgeCVcz3GXGix3Y7nKxQEk2EAP7jLQ6SZhKpV63TMAkYDrXNzakZKLYPhzKxp8",
  "key7": "5R98wn8U17eNxivGn8rpaNfsjrVkjhpJVp4GEHTE3Cwn7U1DSb1a4K23xCXxsCdsfsj35tG7uktUqBX4NPjbTJcd",
  "key8": "JTYmgp8XGp9hkApq3mvDY4WcCHGh8yy4c2Ltga6w89r4M7mdm8uaB7yAamUiDjK8BcYzQRQYixto2jfAJo2HndX",
  "key9": "XyuF3UNk9A1Hkw7MB7E3nHue7aMvGnmMfoo5mBgTYhrvtMCM3noFPfpiauggq5jrSTP9PAq7oxDjLwGSA2ZUrmH",
  "key10": "4zYqdLCbnU1vmZ2fHyqcGK7i7MRQ6PwGFHZFJn3P82swABopag9swk3G57MQBn3xfcUuQFEXnC5HWFHEEPbjdwjk",
  "key11": "5rXw2Dao6UTcioYTHxx5jGyHghyXHQUBVcYvpjSW8wpdtauZvdG746nvsmFbYVBxb8UvQpE13iCVHo7CynXGgJtx",
  "key12": "2AoFgKHSsPzLTwTSnexEZAzrQxGPwdtW9buAmfpAfto9p9qoWTsFFjrzE19Ba9cY8qvjbwBDeyGB1XfCj1iHAf3t",
  "key13": "4EZNXrT849yt9ods8n68RKPVDaVS8phcjHfRvHxQoU6uh3VGgGboVTu3ZYJ5wNS7tAsYg3kHrrucDsocULEzhjb9",
  "key14": "3XuQTvsipprt7vaWVbm1d1Lr9ZxvENSphmp73gZ2NvF4QkX6kfjtjjf5RSar1jQxj4jEExzvogcgAPWQr4HLURji",
  "key15": "Sv5sa9P4mRFNu79Q5zit7kEyjdgHpqC1oQHUAwiwh73gUtnfFukPSGbDBfu3dSgCUCPDA8QMM4FSJkHaei2yG1f",
  "key16": "3dULvUvnnViJkL3o41gcNzYUuqhzNWYXQjw7LWTYy3ZRziLMQJeecBfaSmjccoYcSG7b77wVsL5t3guoFNrajwjt",
  "key17": "4rGpRng5uex7Wbo93UcqxsG4bci3Dt5fvKCe7UWbjnmiTninL5UAUFeXgg3KTunageqdNU36JXndLbKsGu6sSKAs",
  "key18": "xbNE4KFToRBKAM9fjUUUCQsKHcxkymtde41uXv5FCKnY8RTeQsTgzC3j2bxuS5QaqDK7hmyY5y7D5jRXJMevxuK",
  "key19": "2WxYFXKNt4zAUb5Gqo2cCn52JezW8ct61G1bkqPq3DHtPgm1UZ9RZFUkGuHQt1ZG9pbQaLNSfRNoxwwpF67zfxwr",
  "key20": "5G1XadnVia8pBuf642vL3gZGFFLhaWvRHtAWtHHQY4S28N8YdYBNJL55beXwzmkFdChbRFZDtia24CaqiwW9TjYF",
  "key21": "65gVuoyYwZ8vpvoQd7VEHaiJYyPx741XyFteB4eG9wppdNvETo3JxpTdc8tbVpzke5fRh6ZK7vseidQxjamKmVys",
  "key22": "2gGJua9P8d1cZX5SW1JmReZpPVbufByX9a6HkGkxJamN7RGjm1wqzwMtchSzNnxBx3E7BQtQbzNeePLzv4KuTS4G",
  "key23": "4XAbvWje3MDuCHUM8L9fiEKTH2G1fiqcLWXyn3CvsRxNP7gG3JEU86hngTgDiBBCwdiFYJekDWwKTiofLTL7fTYH",
  "key24": "383EyQeTCQF6hM7UZd7qvHaFrWrQShy7yMX7XS46gXrAn36W4umAA7ZbabX48zs5i1RWNozTwA3JLVZvmCwuu9B2",
  "key25": "3PFK9NCjMhzeUyuGBeDoUDemDEaPeBCwES5AcSN9j8dCzdpBVuCcAiDaadFAHrSe3LSHQdyDMGj7Y3JPHWVboMxX",
  "key26": "45G4hF7cqvJCHYmkn5REopXY5amJv87LkAPQK19W32an9hhP3WVotTFJn2ujNVa8oCei6mVcX73XYVnie84cXMT9",
  "key27": "AN1ZohcuF16WnRzDKHJRtaCaBi9UncvUjieNB9anFJhQF6vnAU6dg2htFY5CS1R3uQYjUV7Gy2WMTiJ2riXqAhD"
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
