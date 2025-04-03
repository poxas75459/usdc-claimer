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
    "3QzRjzqAnndXLGqBDUBYPVTtgVv6D7QSvKvkZmbj6bZUUp7GvHj9U8F2ZMqJLfXPWww4MdcxtVb6bCYE3Ts25Cm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gmYjcenR8P1sJX4yurTaczty7Vu963EXR1i72amHtWVCCXi43hYqfudgvQEp443u8pAb2Qnrg8jkENVreSsBtNT",
  "key1": "4gn1qGfMKPJEMAfC6gTKitndcDHq5jKw4WBihy6dWh3mJ7cJLWAHuYqk2oiPTgcZ4r3JTnYoNa3U8RMPV5TAJsSc",
  "key2": "5gJ3tYr1k8k665ddthULjNhaKnccreW5ycSxjq6NQGSb8BxNnxNWNoKVVyZH6d2BhqHN26UQKP9ZMqihQtAfyyuS",
  "key3": "62xGjxLQQWugEf3ghkhQmFyKKfTNa45SsqcPzamy7EHm5vRH88Zgh7QNHw5wZjAU4mhme8HTiwM4DTed92YkQubT",
  "key4": "3cLrmsPovos4aW7DWuyLfoBHnJQ7trRSEr355PX8guBco53LmJQRqhJSdKRghohqN4R1JUc92s22tzGDS45BpUWq",
  "key5": "VmHoR15d31CtEzmMNYcPWb3maVQ5vnt6YFjFpoEieBEjzHsbuKXpiJS6dSDXneNriw2k867Q2TZJQMNX746ihmM",
  "key6": "2usVtpfuuR7yn43dTwH3RRGfZx1v5ooZbPUvg8ac6B5hLfrRDgSdbNkr91YJEDwURQNfya5UkY5CJVh9L2w8RhKp",
  "key7": "2n3hARLRxTcej28KoSXBbSGKNP3AQXLhmj96L3bX4sYcTs9AbQWpk1t77fqqxBfe8Dx8PZd3CzYoR4VTJmm2HSbS",
  "key8": "7G8tf3nMABAB4ZhpF4nJ3Usb1kUkCjLyrw5d7HueywxFWG3QKV3DviL9uKN5FmaAejL6MMoZ7zTNfNLcuVEEkNg",
  "key9": "4N2cCh9c3wS5kG9cq4wtbhZd4d4RryWAWxSUfHHmXu7DzjmikqTwbwM8mYrCydS6bjvfcW7VWZgf8qgnbFxbCL3o",
  "key10": "3RPxmJMRCmYvpJ99HeLScrxKCbhoBXro6T7HdqFZy5twHBzTTmVawcQHRp8i5C8KuYw2eS5aNSZ5HKULViJGUw5k",
  "key11": "4TvtWjSx5pHtPKT2xMGpGxrocXXfGc9hJ6yLyN2cW5hCEBWoZdbckRiWKUM8aYRVYXUcKq9G44KJh2mcYNLFeW6z",
  "key12": "5MzzM9GnqdzMWod1iBPNSqLXKKiWwff5amKcCuQxCVjBiS3uyDPX4AUUHYwUyK8F65nLwXUBS6hipM3QT2cbaXZo",
  "key13": "2GPemmRNXsre3knCKU9hmTDnmsGtcjRHwg5m68ZpTxQZnKZjjpy3RpZxcGkaY1DV65HjnmnhfBYEnkno1tdMPopj",
  "key14": "2PsYQkRAYTKjMxxJ4c4AeKFRvAwHLHasyG7kPcBmWKLQQcKVCMzc116oNgpMAJkvCseJwQ2ijQAqK8wkQxaPW4SV",
  "key15": "5KbB8dwcv66HxvNRpeBVN5LxvEkqrATy7CJ41QoxupWZbXimUaH7fWBjx2qx4MkdQZgufPRjdJsgcUhdNxW2eZTj",
  "key16": "55LZWCB7PHCyazozRRhWthUMd6c2ZCeLQiewjc18pUVeQZKQ6txYF11WJnjMzpQeq4tw83LKYWe5MyU5tuPGupun",
  "key17": "S58ajJa6Fe6jiBBJActw4J8CP8kQZW6xy4wy2otUguuBXDEGzHqebMqTHGSFxjhtCnZDEzPxjMS7HfULjgUgw47",
  "key18": "44tRRCXbhMQusvWvgS8Ftbybe6hofyP3bp76BmFW5NM8quJDmh4eQ1Paj6HSNwynENnbrLnHp9ckQxP7aV8bNP8M",
  "key19": "4cPMa3ZKj1GdsLz5T4CTf9Ez8tURqEGDkEXHArKbSKSUGHnn2qAc7n5aq9BQDQ7RGkRLju5nYqVWB527FHzop5nr",
  "key20": "3gdxcFPpWd4NRBLhJCXVQ2nRjWiDk9JLVGXKYohJs7C2LGkNB7deTkTg9F2JqD4dyeFKsMBAjFB5G8ZPcnT8oEMV",
  "key21": "4xsaJbdTBJTgEuiQiYyphB9CzjHsHeKLxJzSiqhakweXFEv63t6xQ7tg97GzC1qK8akzZBf4KLMbmJUQuKdHD5qE",
  "key22": "5GSs1gRt7ipchH6pLyZF9u1W3HxNrveDDyn3Ungo3heAcc1GtGAvus1Q1GM3eV8RGwWgDgNyXEZehciaCWJKLayg",
  "key23": "618wPyGrxryzXjSS9FbvB1KbyDUMiZZTHYG97yZTtVF5S4B2Y16d4WQdRvB7eDtcmrLPX2PnNHgTQtWmb7RVqYXq",
  "key24": "aiWjoTxWC4Ua52L916NgUbhaJovaXCPXaNMg5MHCAVbzbrJTN29VgJkrqJUhXMs6JaLeLkSj3mUudW73mtXrB5k",
  "key25": "36bP4sinBHcnpXhu7Jeb8DxP9rTtUJmy6BwEgKfYv9ZkpFt7xyaHkHF5D2eTF5bGb9aTEZrQXGsNqVpYFwkmDVdP",
  "key26": "21uBqAgAUA5mbwgHjmrTa7U4eQDC4ypw5Ut3sVC1qRssbNxwFvegbc6zzvqftU31tciwu2ATH6yuAooD6q3t3vBz",
  "key27": "5L4GhyeLMmKFuVtmsXFhKRt1YQGiebnctYZ2tybnEgWJ1T98Gzp1VdSvJfkwFcNnRGRqaaUNX5M78i3UPiKP6Ckx",
  "key28": "4ymckGwSEkDjwsetGFRmncBxbeVY5iceLT5XeopAUKczJv2cp65QT9tCmQNcaGvYVEas3hNCRn4QS8ihfBjdFq3Q",
  "key29": "5psZ2zvrBRjodTBjU5w3E66KxnGUXgNBkWYWQk7sJXWp2mG8xJrvK1sfsXAAYnqMdWwW1wStrNmVjEK8xgGy7sVK",
  "key30": "sfznxA7nnJdkcEGdBPneohu7GYEaYrHzgXs4H47TFbcYE88r2bqEijKm5nECTQNjJDV9t6nWeWfRckeKq2ScstX",
  "key31": "4q8z1pi9Z9aM2uZwpdsEBrbveJu1zEKuPtwJkvhhGSckqwTdE6aG6hdYzcFGfhswpoHNVXGivXVc8anx6AE57ruW",
  "key32": "6sauhabTeNVXhjkKDtBg529Gzq27X5rLyMcQiUiMd7vFGPxip3RSBR4ZYSWtwwVtK6qZRXhxCo6pbDzD356S2C1",
  "key33": "arH1JDB9GWD9qd1Z5LESvQfRd6uotc6rmLiLaKa9mewNhv3mtB3FzqYUpiq3ExNieabUPSsdfLv163KuMTEhthf",
  "key34": "5ddy1tFisomhbVk6a21q9tB8WYBg5qUnyeB54KvxNH8QGytbbeZbrz6VTmRAVKzbvbyFoGGLQBSAM8isSVywak3u",
  "key35": "4o5zBKeHtGbbNRkfaeTNJgw8bLfZEB7suXApALpf2Wd7JHGvQ3AntXXmuU4DMw4qDy2b9nEMCexRttCAEkf8hAwT",
  "key36": "4UEbb5rDDXDkB8mYC5osDRkUvG819SY3VYTxkiRqJt9Vb44BZUt6vH8pAEKuLB1vfcMof97cJ7uGf5tdkqgq5peX",
  "key37": "621TKVVcNcdB1MbLqmZoUVZ98BdokWCfR9foPyi7g7tsnFNgHUeNMkGMnBneWmy6ng9mCkGuSWSyBi5ExhZa1SZM",
  "key38": "5AiSBtwXuYYZLCpd5WwJG5JeQf473wBGUtB4xCsbv4uHYYq8T33HMENgmy4bmLJayynCVsa2QdckQLQniBfwqqvq",
  "key39": "3YUnYr4LrR1XbXPq8877FYZe6ts9MotLvJkWXxKZUUYyoVDixa3FfJyDAinafeXiHuNhH8hnshyrRkBfNNJ3GrMM",
  "key40": "3GN24fTv9Ev8w4oogaiinNVwWL7zATzixA1GZUHwn6RCLty3255MS6WcYvaPgJdXBath3Bmua2ZxYwQJZixMjMTW",
  "key41": "1GvVZfs3tw3FbjVqTwCZC1ytVgaVmQj8TstuaW6u4y5WJQLTBJ71DoMbYqM8kAu8RL5Awm79w2XApL7Z1SsHinb",
  "key42": "LLhwVKGD7XztepW9uqseojmreEzvSnT7R4uquoLYG9Z9orHyFQFPQKkdGziR4QtZL98YKkeog2uawEPrGyZdUTD",
  "key43": "5YAyaZnyDCybbrat419Wt7D3vzR5jxGBuQDwDV5EuXVk4gYdKwRw7425xuLqfHrzJWcXMY5CjAseqFEhapEPv771",
  "key44": "3JUZ3WEgUjoX19mUiACU43zeqC5KBkKfmRs886kZBN3dN9GDvbw4zRbuHJAZVumeN9cbKP1Y9StJS5MnrTDCZm2",
  "key45": "2cq5RokPzzARKiBTsyHwvSEnmtvXGYh2FECJ437XAVYiCqH7Yzm2KutecVvBfPqJbX8YJHnVvkBck9us6NuJJLXG",
  "key46": "2tj5wq6JWX3ozkYrDUJMozQFc6MbUTrGozDwt6NZVwjy8HqtkJ82k2umenvJ7KrGYZRkTFGRT8Tno2ciR57BVtso",
  "key47": "4ug3nKybB51QeE1mrYW2mLRpmknRTpntUFd4LgsUf4WoajKNem53fRowbEGF9tWrz31FgxbyfRGrkpCDKevTPoh6",
  "key48": "42PD1JvgjKQZVKR2m1Z4muUQWkYKybBakwexzPwaoRcknYkvfnj5YZoWLjkCqJy7af5Gf8kXRP9h8kZNevRquN8o",
  "key49": "3d4U9ahKtQenBW63s6Axt9tKn1ciQNeLP3XyyiVPCpC47xn4R7A7GTQVbbknMt64bwp5D1ZhQGKgqUo5gAsyEtUZ"
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
