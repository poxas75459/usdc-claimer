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
    "4xYer93XrN5XvwKTgpW1sz59p7XksHz61Gwnq2zjWhRzesLghE437TPQ7wBoqT5DjiiAzzvwXXYg6wZFLgxAExcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F6Nt6oGU4nXfM5WTjGpCtQ6BWXettLcDmkfwZsLRd7YgTkc4gH4be4FgZA375wc1fzAQqoCeyq4F4UH6CTubJ7o",
  "key1": "84gF61GqQBcdoV6wK5XUyf3fHP3vk1ZZhrHVaUQa2kWaSxiWbzhuvHwXu8g2TioLFB8ScNzctd46Dyc2sq5T5mj",
  "key2": "2W15GarVCanQtr93r396rYUcdTL7enKHLPkjDAxdscM98qy52S4D36VVhETieMrjSYcDzzx3qSY31GVifNQtPCzK",
  "key3": "53xAFbC2DzhYpwiaLa2CPFNsFp7WVJXnBRrDdvPd7xgx7jd6AADBVwCnw1i77snGiKt7uwBjsyejGJLa8qbJ3zrT",
  "key4": "izdx32aBZjYfMc2deJYpWSwc1FbNDpmkb848dZw4exxeoRdkHmJhEKG7wGriMBTYc9EUiVw6A6Wo1LctUHnV7TT",
  "key5": "n8szwseMritYhyayNwNqcWpB2GQp9nrKaEiU8mWeV2gSbAc8YakKcHLMUzYauib2MG46mYLwW3887owEMvLBmpH",
  "key6": "5b6xaS2cgG4T1cQW7WnaE3FePX4ytshYf63NXwB6UnkhLJtEVdxT1X6yAAWMm8HRaXZYVW38R5hdWTNvUEabGmyN",
  "key7": "3LRXdCKLz45tCGd57NZZpt7Au1bHinhEFVYHL9Sc1CMMFJ7jCFkJgdsrAGwR9Kyjie4mJ68puKfJyrDaMeteashL",
  "key8": "Mx1CycsWU4Zv65RHbcM9ZewgG3TxUZRjqYccwk5Hyjs54N2AKqr863x65UyYsjTTgtfKmsMUZxUMkKkTbrWtLZa",
  "key9": "LFiDwEKJnMXhu67qLZaPdWZmdm3B8ScNNEn4XPENAQzUhmm57BnCCFyHi48aC2FDhXJeX7eB64QWLgRbB3PuRuq",
  "key10": "4x6Kq62hoqawiLeRPNyy5TzGjP3ZC4FBtaS5mindJ6HFd1wCfNLZ1MoSuc545FWMHvfirX9uxPi8VGvSCVwbo1hU",
  "key11": "47trZG7RYYqsG3dSXPf3uNruyGPiJHtBMnDgCA43xaR5QUq4YGKf4Cxt5ccz8V39FryGhiYqeq2vCG1KiX19jEjn",
  "key12": "yoyLgSfmy5gFUxRozBVoF4TF6kJfMvqoen97y2RTrTQq6wCLPVbQTA87LihP1xRqSXjPELK4MmcfqKANgjBBYtq",
  "key13": "2xyLoRdAEu1btnw2uuXLiT2S2oT7hXN7WZe5Jqvx2jraHiPs4JrpkWs9wTSuLy4ghq4ZBNee1zrrGoi4dYTAJWXt",
  "key14": "2EeUj5tnSAujUf9HscKm7AgNiBspD3WUZQT82rsKKf5gSxYoDaEAXLZytWx7b22NPz7L8VK3Yir73Q2y6ebwGQr3",
  "key15": "62RNzdj2vBg5PjmZK7JV7YdoB4MX5Lzpw3ktYYyeKZnJvZEZ7rRByMohnX6Ys7ztPEYVaZKXKUsnaDcvZUzCFJ2D",
  "key16": "3VyqMGDDbvhYjJbB5nKy7X3C6QAc6WZgrUB3ZqwpHdDjCKC2dxRnrZ4rGteCmREz6rjYN3LajfYjdy5nLrp1Yaui",
  "key17": "3DFEGa9NWfSoPgQUbPAJ3uSMFP4ekQB9jKUe9jnrMEvMwaJR2XiRNtWzqcuoaSBfDdYtDqMRmUt7V2RQHPg3J4iD",
  "key18": "3V7MWaRYSfGjpvZenn2gVyp8qSuNXP2vu9dRzZC7ZaWmDUT8S6VRbcn3fmWb2wZT9QHQ6ism3veLCUkWmERWwkSW",
  "key19": "2A5xwkQfdHqs3KuEGvyeAxi5RzPPD6aDCs5Z81Pn7vqsgiVTvENUinDcVVjmKeg7TdDoBUz2DzoYxzSUhRMaZhi8",
  "key20": "4GHREZxuTfwNTYYeFnjSxBqHgDHzsEdkRgQx3WbMxSx7Ed3WhJtpdDo2hf7cqHgfVsh9Ukq18X5ztMTjaUoxeYtZ",
  "key21": "5ZiHdJcrnkKds6HFvHkZK2ik6PH1M9ptcE7NbSasRzgW2stjNpQommPk3u4SXcGmuoYrVCnBLTXxJz77LjTkkJHK",
  "key22": "5LynMey9f3gvkFVjfa6Z3sDXTYide7ewmrjJw6RKxvKR6vHk3dQX7vkatobemuP9sxeMkgixnaLDZqLj9QmU3Koy",
  "key23": "aMrPR2qHVQHKGwUXsDgM9f3pAuX2swbMo4JYPrcQ42ZjeCbPVBG9abLyLRYh7BLE8yrMpqEgBMtsRLJ6aXEibtV",
  "key24": "KRuLS67yt3oj1SFHt6qvzKVpzgVg8YWJKuxNFVuHKNfws16nTcqPNzqCYVR634iHkrqH6hhYJ432YJrQdZn52po",
  "key25": "628BvzRHQSSYqe5Q18csSgwukK7RqfYvYoEWq4CjvYfKo2Vbso6iCMF7nxhEhSW3qLxvHCZpHf4W3Uqt9F3xWVcs",
  "key26": "62xEkqXa83miQynwQ3gG4gyDrK9hnjc9YEUqu7paEKH7iQLb9BECtJfhEWtjJbzayzS8pNSMnC1K2ZA9Gs3Xof1V",
  "key27": "5mWij6UfhKhK4FrvKKWfU4nuiCaETQ1Y44EA71aSagxQkGXCesRiTqEPfbsp8r3PdQgDkEnhsVos6Y6varQy4jXA",
  "key28": "492Ba59Rp5BentBRmKaj2Mc5c5eED9zdU8ScrmiqktG5hbrZXruMxKuQ7FqYwihec5Q3WbXKjAALJMjMngBDzCVp",
  "key29": "22vnQf9Ajnf3r4w1t7KkETtbTy4UbFo91TkR4DEgrsGLYo36xGKytnfKqWskX5DjQ5YZ5gXTa96mY2tMopJwoz4a",
  "key30": "3F8KhoBpUKVb9eKFxsuX6jWMr3nP31M7BnbTSFU4RPhPhgdm3agLqvHMeSPBarySRgeWhmDo7dBfAqfWkykyarRj",
  "key31": "21oXMbxLfa1nZiUNWeR85LXZbiu84pBZ8RaSxLJcgAQQm9v5BTVmUnJxZbLiRga18iAKBzgdXVv6R1RWyhSibqv8",
  "key32": "5eRdsNavKipxgrcGUbSiHQxMGSXhKDbwzMd7HiUDorLkzxqaKd2NJL8JAZ5NyAcLTbSU7zkncMV3Rkj1PfXxaKpg",
  "key33": "4uF467QjHDMRPTdyZUzsreia3UR6obbcce7mueUBdKV7JiMtsxdqgYijJZvdb6ffQKsp5uU6znYKUX82QhuCKJJ8",
  "key34": "3awZsMncmqo5iraVt2kLMLn32jZpXrMK33dui11A4YqonsXzWHE2NxdfWnhmRb2WDbvfyZYga2PZMqkAsTkU4gap",
  "key35": "niv1H6PhK9sWFooEdAeW8vjZ4KMM1BcqnJ8uzVjTLkg4uAQ5vNUkDSKzYw1eTVxPjDHVV7mYuGfRvo2bs6XmCnZ",
  "key36": "3SFYjnoiiQwhyUB3TVe1mi4GzRuPELbjrFrNHuSwZM8TtxdvtiU9b8TJySCrv7iBzXEnuybE1vNafUHL4VpmMXiA",
  "key37": "5zbbXSZRHkG8wg3W9hcerNVwKBYgiKLWgGbdf8kbWqfdcwgEoS3NffdptD4f7qHASXX97N2UF2Z8VvPmZPGev123",
  "key38": "3Sq6xg8PCjKWYDseY4QPSW3hcDeMFTrSh3PvTs5BK623yPss6xghism9DrymBCiiHr9Xbjr2uUh82d8z4eKBEXrP",
  "key39": "3ummd44WAXw3on68Hxw5sqYCYDoPbkFWCmsjqrugrcBoh7w38yzS2XVXiHsnm3joHZ4GKZwAXCNviy9ZJK1NVKk7"
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
