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
    "3K3GZp32ALWyGKXKqMombnnv1JASgJWj1gDkBnKkSER9QZj2sVHXtF6no4Jr5BnbxD9y48fYzwVKFVzfdvWwjsHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KJZFDb9S91heQTpN8VRwHqu8TGSuS6ZUctcK2b89KPmoXtxDNZFTSCMozCRzdkajca3FjwFTQECzP3pMdY5ZWir",
  "key1": "2G41hczqXxq4HX1gVio4BGuN3rVJoxh9vhyZV5RuD7GhhBPtLCsTRbUmXwH5rVuuS9C71fBUGWkXDa5J2N1u7zHp",
  "key2": "5kvHK4wLkSFipHJnWCaPA9U72RuY5fCKZzz5q4ezYyDaLBMNrd95dcHB8z4r5royXAGLwZtZGjHvx5mFDHpRrJpw",
  "key3": "64nNHMYJqk9REkMaki5am799XoZqvjFsjUffSzDKMBNHF2fDMVe3hxrAmJexbWK2rsM9bo1ffeGGUu3B55Go6Y8n",
  "key4": "3niS7QuNmVLxu5XcDxk41Th3HN4XWJif4aBb3hd6fzsk8UkzaJS5TnhjwEy9vLUPhLS65NjXeX5B4y2a3gGYnTBz",
  "key5": "58SAK9tFmzqsYY7KeUkbEVURvvB8txKa9hVWmKv6dCqsjzecWNWAtyseAHRYkkEGNW53Fi7VbfitUeXrEtCmG15h",
  "key6": "5kEodrTDDgeqDWSA3hd12BotmEDsx1HByGMiS8tYfACFdmzat1LRgDCEEJDwq5wkphJMyhExd8KnpNeABaXU5Jkk",
  "key7": "4Ekr1PXtJpGmXWZG7A4WPvvkqMre1tsWrPuaAfBLjZYXVx3K3wRRS5wx1vjRdnGiTX7zrxEjdo6SfDeatPLU24bP",
  "key8": "29uBLahDLzfcfg8HJJw1av4qb6Vc3CiU1DDPi4YRpv7UAv9YTw2iKeqCs617ykq3S18fEHZHu8WYaP2qJY9WifaE",
  "key9": "o4XdbRVdsZeGKNvQALXe6rsVU8ZZr1iuyQLGSA1zGaXWB74sYUPn88piAuQmAtx2evexyAHJayg13HLX1ggHJVc",
  "key10": "4BHHzS9jZ6V7i6ShqSGWMtPUzhtQqJz9J5bpJUcHbJvy9C3yhprVkN5jy4VegWPfRySRURHn7a4rXepfcBU4Zbex",
  "key11": "5z8CkKPnwWZ8n41TAmbsqmerjaSqW1Rc48gYWdShHHFqFp7p4gf8P5W7yChvVYifeiTddbGrSttDVzhHbAY6DhnM",
  "key12": "5sp2k8xqd8qkECDhJJ6Rs8tRSgWkkQtM86qT32LuSAskNpJwYp1W7i5DJ4pLgbKzQGYwLoHb6JRT5nUvK3L8D7Ex",
  "key13": "PfPvjrZZdRL8zB1pwjFXrjseye9vdMQaQVHG3zovBx8yeDw1ZzKntBwnZhamtiAfvezisSYCus3ceFboLUkdUtR",
  "key14": "3y4qxZTJrhYdPGFS4eXYhrT6EMJgFmv1bdtFLTj2PTtuRhivVswWUC8hQDdFCG9BvVeL8shrqrAFrB5V2K2RK42o",
  "key15": "5Jmn8x2qUh1Fj762qYURSnToHwv29sWNGzEeS9U6fW2SpJRJEZ42nsbj5TBctKfARaRYtRYgdZShbyWtbH2u7VUW",
  "key16": "5GtsxAFZ85hdMduoseAggQW74kY6qP3Bh6vNdSxUa4medDZtHSmH6oE5jpiaYm9rQEBXQNPu3yNSxXkgRMYaUkeF",
  "key17": "2iR113xozvZnABwnZS8msZ3Nxj37BiWy5fpkFAyxn3iKNSqJ3RczP9zWX1ak5RupbQ7HUpRoiLWCwgaw2bJhQZhY",
  "key18": "ZkxCH3KVWzNEbdcvrD4j6vNHhtZzJgh45cMQrdRe6vkaJymYPhQJ3PmkbD52fDwbe4ovBVbc3Abv2iGj55Fw4hX",
  "key19": "2839693idJ3yis1TFfZhd7egJLh47D3EfRK824rv3SsSundXWyupp96hVaoso37ZoBZD2vRMEuptAw1QXwFRe2WM",
  "key20": "4dibSQbt9DfPHqsktaiYuKLKkNCbUNxw7U2jzL8zxfnGHxN5csyQsAEXedbWktQGzu6GPfAnSVAB81wBDiDtXXJ4",
  "key21": "2bqpdXFrThBy2T4XuRfKhCQuYwmxweHv4EPytF8uFJ9rhC6p1vrs1evj8TUMoE4JekZFrCNTTZhuqFJGQENWjmcr",
  "key22": "26yYf5R98dbpkimc5FNVmuXT2wq4Svknk8gsw2kojQV675os7TwCFkdWjEnxFeTAt5YUSFq4vko9QxY42xNjkKjN",
  "key23": "2Pw3vwdicRuStjhcyjBtwpRiv4F6Y57qAL84ubQ34GejueGevwiziPfHzJBj2gHiiAgqSgoA5nVQp5vWzWpixjpx",
  "key24": "2VV1VuV5dVP6LVPCUS6wZxWL2aTPdhTnbeMFU1Gt2o32yAdS5QADsBwyyrjps4JEd7PWw6cFvYYtQLg96fPyfrbL",
  "key25": "aneXoNQpH17dQEkdpZYAyCtPRdWXwYXVLC7X9ZXyA6WhWvrM3i7fWDzE91Taxx7R4b8XsWgcYZecWQD2YkAVERE",
  "key26": "3kFBpKvmBaoDj3Y2yNzp6JtrqnKCBnNft9VP5HiUTLfoV2G9ZG2DbmEvuzsRJhRdCdpErRwqK523tnHZnWqNjNv",
  "key27": "64jjLNvVL44dxBNd5TsVrJQkXU3YhZozjaaJTeKGmdGc4FcvUPddWmRdkMuqSbohz9ZtKnsM4gaYkGFMDKn56ZXh",
  "key28": "5aEQczhecHbAHBVFyQe5JH9cF6P1p4MgeUFUPFmC6vZrC4chfACCXNomGVzxHVnTkQGU2EyueTZhdaBXmuoBTA7X",
  "key29": "37bNGDbLuAFDrtmXTtA66dcLmiM56kCbQwcqB9xUfWcwDjqGhTs5PnZmbEWvN6GJcZzhjbshfCPTTju4NzFSBTYu",
  "key30": "UUnjVb1ZFLxM1voZbtQdF8QqYciYUYz8Mt7e9UZZ9mtfbd2Gg6Gz84mFT5iy64ZYzby9q2s6uLiVCto5aXEweU8",
  "key31": "2Bvb9JNvEciiDDJhpVjSEoNxz4ycoSQjNpGUo7dkT9wG4ZbmX4xpLwmDWsEsUZBq7F3e5HyXnwdJmdpUYVS4sPKk",
  "key32": "tHRoFBsEySEbxpR9zp4UTBqAjBgrH5BX9k55CyyLte3RscK1DAKbkLEsa2GeX6PXsS4GUDxtiHRhP9F3GG7MrE5",
  "key33": "2NtQeh2a5QVm39YUawxwFd7WKsripmwBFPfqa4DBUJydJq2ZmFNFb1eb4PZVrSFpKy9tftUdVh1HoEKHqH2MvoiG",
  "key34": "3REUEXZdtzK9bWxpCFsu1G7RYSFaZbboDybmfccPvhEbF7fcbfJDfZU2fgcZPwW8rx5p7NvkV3LYb6iCEGNvhHuf",
  "key35": "4Dogx3qvJUjZj333oSB86hbpksxGP5tTbtxHmjVsnXbugB6RSKntw6zpf23GXu24m3ZvE2L9DpdA4A1pZzkmoWGX",
  "key36": "39eXFkyvenKyzJJjngyXQvU6F9PnCvX85qYAQhSDuXKEShmVMA6uisZXDozhUbsy1XMgFaf355cDgCPLCyWN7H9B",
  "key37": "46LTebh7BXNnBTsyzMh1UD3fLGVqkt5eADfpSFtUu94pcgMT8gJ5YJjiS9ZakYmcx1YiXh6r6o4BKWtX1rQfYNFo",
  "key38": "57jr41HsfUpd6QYrhDfXP8oxQyXHbn21aWH4cLPFWCUgNYMnW4dwvHntkPCBSanVeTmhoHCNBESb9CqCyhqHsHsd",
  "key39": "4iuoLrQSGvSMa62bxSAQ1pzrkq7z45NUXWMaGaV74iYVTrXhP1MSjvxCkBs6LhBthscsddmetSoEenTsAfLCcNsA",
  "key40": "3VL1ZFnbwFkHTXWswm7H8Vc7wFDoKMX3snngpnuMjUba6NHRR7zFSYJBr7SYZsnDGQW24XHUeBqGAYZfgXfpyY89",
  "key41": "2zuoABQzN2EHdm8UVcMJQgnwQiS6BPWakk3kfu59SL9VXFSFWmPqav1oKKHYgx8QQqYXW1T1mHGFPdeN32edRTfe",
  "key42": "2x1rTGjsN1U4yrsaXYy7pTcTWeAzomo5J1rXHEXFZ9FrABxLTT6PmYCdQhFRQijJoGakYqi1gcFpuDTT1X9ZrQCG",
  "key43": "3bLZRB3tWGc6rdYyUHt3LVRWfPf2xLcczvZnRCitQUHdzpa9bUVuUYhDhEMSBqmmwLpWphHZzYwb9ypQcMiMcnca",
  "key44": "5LvNEgdYYTrENUe8Trdtcs99nn9gAEA91ozAWDmSRqPoQQ9v2ko18akjuZpdiH2oEjDbdu58yM3faQN1AWyL8EeF",
  "key45": "3Xu5ixQVCz3uaHh7sKwmsBUVb5CHCF6EW9ej6FzvsSLi7Tb3ewGVUvk6cZ1cvV1ezk1ZqEy38dpdwdvSpntEni3e"
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
