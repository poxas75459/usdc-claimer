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
    "4g3RUy3MHAugQ2LtY1e3oNCRw3xiZ6PgYuMJvU9PzfKKBawbSYGm87rav3BRK5Ce1Yf1JziLqgKyoyXcpjLkcBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fcg5W8nFG66eAtH5hWnRRxuPFECoZSgMRNqoumbxSVcMvLNXvVJ7joqkW3JoZw7y2fQU2Sn6Aj4vvwVBZtRNNLQ",
  "key1": "5upoM3LsDQ76sBqHzUHsx5jJsXYpKPPeEDsGK1K72iMuvyPaJTbmWT8cACScoXoeeHmXev6cHH6493UHT4eJkKAp",
  "key2": "ijyShZNDQWCNwiFx4EetP6ZP4aqhsQU6aM5Fe5QhTzNMWGnFhKP4rodDB3WDDQcpNt9tj8BEFAhEmQez8Ki4hAU",
  "key3": "ksha6T3hgQvacyVr4vP8dMuE7JUftkPTJUVqctgQC3sGSx8fU8mUpkAbuvgxVF7J5wLwRuzXC7mPQNieYpptABC",
  "key4": "5kBnNAgNFgZdqd8tw2692dJRpF1bdC9qZY5jcAbgsvSh9mc6zJf3juhdwVG17hm4NZvYdfTHT41MPut1MrJJ4tPT",
  "key5": "2NxBwmpLvRnXXmfNoeeTsPCCycCZrjibXh5jb8cJzhh7ZR4EEefpLv1dB776ZvuswJkzQrGtgMF61GhFhA9YQ2B",
  "key6": "zrgRnKEfkGzQQ7m63mshW1cy17B3riA1hN8wiqtCGC819dWQZJnoWZQbE5RYSqEMNeRtY2UsdfePBHbQ2jA1614",
  "key7": "5v3t2UCS6s1uoqyLGBbPZCMqzfcMdWoUecYvJEyZ3q6VxQxr4TugKs7MQibh4xPT6JpYWzcj11Q5niyD6BZ6ysie",
  "key8": "2Rb6jeVhJyokVeLArAgskpQux5DPcd3p33J4mMShasLBmZAmTqae7Pm9NiAoJKdFdAjLcSKbG8uUgmDE3wU2nWE9",
  "key9": "VMJ8WBJx2FGZccQQnRjx9vs9kUPuPoiVYB3Uj9y5braqsYfoxhhH9MhiGww7uj452wf2bWQRD5E26RvHKfjX1Hw",
  "key10": "5GqCfA8v3g1S8BZrLFvDgaC7c7UHH3sSerGT897ohNWDAeavBARsyF3RAEvobkhRpQMXQUb142TJEhfxHKBMsAwn",
  "key11": "3ah4CUGr88Tz2bLwQ7iJbt7eFmkbNn2k91ZkbwWAPxfC4J7a1ZyMxo6mYApeaqpXGKEGd5zJ9q53dPVXUAYZ3sdC",
  "key12": "5XAehkqX5MYCvvm2Fq4Unmu8jPTYby3JSrdnDVJ2pXSiYSoRgx3CcD61aM2dUR6uW4qE8XrTwWAYqeVNrVsAFBoS",
  "key13": "3wZSLb7nUhZ1K85QHnYpkoche5ChyKUCkHVuZLQEhPGCTgoRQ3YCYqazWCqFbk1Tb9kSg5TJFc1LZvN3CHsQ7xsm",
  "key14": "2ASTmv4JoZqJMRG47s9CfiJSrdFEWU1pZQXX9LvCujnxjYTp55rpLJ7vn2JUoiL3UKUSufS614im9CUJN95hKE7i",
  "key15": "35sdC8o6t4Di6EM1TFukyEtPPDRfHiEv11YPhG3mb6A6d1H3zo6SnYFZHJGvQMi2fmcNi44WQyeePLHjZy4k22TY",
  "key16": "5KhsxWr2LH2xXMe3Juqw3UeMVCYekjb87ZKosT2DdQod5H5EAo3ddEFckW2GzFJs5mzc1VP9fct5s2g45QTmAmFT",
  "key17": "5tDm7RE5WRkmBumkZnbCmWiGi3pCu6CgcspBePF7MXNqDc1wLJgHX9Ue2cfkvEXk5He3bQvvbXrv4ZA331wXE5ud",
  "key18": "cj3vWJE5wUNpRvhWnepfvn537hjvU9oAaPtoGJwo61dGK4fovjdMqi7vJEz4iWwzQ9XooQpMdJHWPrHiMC5HHrF",
  "key19": "3S37MuRZ46ruifCw5NTWY641ee6EbjCiYoKLscNVPbLVAH2E2muNUjdBANfbjKHVd8pAiUmJTh4yTA7GzbVhL4Qh",
  "key20": "22GMsfWH3Niuub16f6HWVXse7eEFZ4kaNUkqavobVpecz1VPuW6BkmV5wb4i6i5X1SD8Z5CUPcbnaxLGA12eWbf3",
  "key21": "3ZLy38tt5hqfFBNAxCLdBexgSufvMuB97Zra1WLELQqcnMiY5CDqnEXWFtf2bdGb7KEZcjb4w1BZxn7yhyFsbfia",
  "key22": "4HaNtMVaAtyHSj4CWn4rjmfC6aQc5LDKm3g1DicXNMkBSURL7zibjTbWnifcjRx2RuQJ1DyukFmZ6aeJN2XxXdje",
  "key23": "Ye2Z7i8nevwFcbN5dFW6VGJ2PbBnaMWe6FdXH4NhsknAXMJoowGH8sCZkMuKMj5WioFZXzYrEntqvK3X9HYqWfQ",
  "key24": "5sxjGBBjBf9JHTMZEHyTviy5DFTuqf63EKBHp7Y1ebvjBiX88eGPE3Eaqkc3BiK24FVnJsSnwgg1rbm5SLyNKSV8",
  "key25": "3UcBPrh8WvB5NiLDeVSczsnccLdGWMbi72y7CcpSdpzprjQugYgLRV8tJFYdBHPW8Sk6f1JAWUkSX9r494FaqPUg",
  "key26": "5tHzaaBLhgJkq5ppMi4thnM7RjvCYsdLhBTCZfohRZWVNeqfSTqVXpv4yJ7cQcqGw91UhAh96vmANpioyWvXDGxY",
  "key27": "2ceB2Koo1eyDdfNXxbdDPeqXLWod5QFQZQyZzkAagRi44Nk9ZzGPUt4XfXDz1XjL1kn42epA2b37JAUsRy8NHNyh",
  "key28": "5vLjeSd83u7ZuLnHF677gbdP2dJpvLdpkSYS9NCZMoE4AH25ajTkKoRbtHLbkJf5zeKCMymjiYRS4g5pMEb2xu21",
  "key29": "2KqkgZnS7ehrgyoCFE6U8qwy4JCX7oCVGJDXVVyGkvQrAUtBhS4t6xriSJafBQqLrB3vDivr6uhsErrW9Kpzps6S",
  "key30": "51JYAgq8KM7zaHCWPkoM318XtaBZ6BpCsf57p3gcaUjijz1mF7UWKcN8y6wBhYFWd7mzB21wPR6iNy6sdMKJmeVi",
  "key31": "4hizgBWZc3j9FyL8qrfbd9khJfq3WAGSpUPEyQZmo5TBWR198pcNSiHxM8giA6Vv9n4gguiR4bYUABEQRRmF4gKy",
  "key32": "4fvRQdAJ42Eqkccx2oQevkycGDqPG3F6vNA6Kuxwkb8LXhyenFdcv85z2wDph7sLJ6DveeWbtph1A2Qo3WCnfnTM",
  "key33": "tEr2BMuHN81G8mvTHPe96ZpE2mQDNdwFDCEc3a3sVHhWJasBeU7qe4ieMyz6UdVRfN5ygUUXV2iiLPwonGDD57j",
  "key34": "5rLR3njWH56UmmNGHab3dVhivEUMcs7FUxHbLYcqW9DyMtFwsxCyAvh7nCB3R1fVz6HGKE37popGZpkGEgAVAFMV",
  "key35": "4ndY6mM84tA2VVoHUwaJ6r63hQefSyG7Mr6SC6HZSrCNtJdhEkNVr2jrV4SFZGwXV1wpertBDJCAMB1N2jZdDjnk",
  "key36": "38VNrcgE9DHkb3StFvdFRKAnAViKjBBNHb2Jh6zfui6372G6iTeuDn7xpKqmKq1dFZ1jiB2fqnBwmJec763KM9Yf",
  "key37": "22Uk8tpZGr7fAkZKQSYvfT1XVWXZHxxoDxHHFQVUmYc3TawY3ZPsVRS4ryv4psEEEQa6G5m58jY3g8hz7stbdZgj",
  "key38": "5Jrv9E57wsjoGrpZKPFvGQ1PUrU3GAE2u29fCGRc4G7dCBaaS7RN32dRsSZctHm3YrnHNGK4HYS3JGB4bUvTnsgP",
  "key39": "45Yu2htiLGUupQ56DAqzRWAqzqPtgmXf6E5efFJkrTKCYUKQGbUfrhfM5CQkzpqVS6QUugyTVBusNJd2xaifEcK2",
  "key40": "6jsfswJZZ6tGChAwFXooifbBneTUytgcQPyqsvjRN4i21D7F7f1uP1JPoRdy8jpbanjzQzaS7mZWjqjyTX4QxpD",
  "key41": "31TM7gXq4yiG2S9BzTu9QFhmWTsjLgAvoDLDAPiKwTDJRNNEpEdcV6qmUqhof51jtHJTyDx7S5CspmXu6i3nCEeN",
  "key42": "m26kRYmbW3XSLf8R7iNb7oJNWKMsHqsmzX4Lq2vvXh4gfGbGwJWCq2FDeT36Pbti5NVcFsp18JMfhDX2NKXQu3p",
  "key43": "5aGs4kSzqxead8sxATdcJJpPoX9h1a9VNDBdJzWC5Xww54CJYgp1fseXTJcKXF5t4nXVKCsopgSRQgiSu59B5Cc2"
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
