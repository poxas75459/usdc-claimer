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
    "4rDUqczbvvyj648mTZpqsNFMjBzKJhZk8owDgTZqX3kXbJ3ucpdd6dDe9iR5rpCzCFkBuREg8qxwcTVArACoiJUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7e87jQNuQHYnf7bqKm5LFfidcxyqrNXTr8A1H6AMFBaDTRERK8zkPBRFJoDViKKJb59WvXSyCn5RxQBFgKk3ou",
  "key1": "5Mu9BSUKjnBt5MpYJbDNfgFCEcjhJT1VWDcLtJjtgCoFYmt5Gd9Pb4vmU8BiYqcMannsVo8TycHGvLa22zAnvkkp",
  "key2": "51YM1xXZZSJCKjJJ1XXeSWyN6gHeoNFEp67WrQC58LfUeft1RXWdShfFSxX1RKzTWoniL9V1vzJBU2zYvS4auFT2",
  "key3": "2b5SS8Jcf2DPkErKJKXaWxeNDTK46WQMhhBH27hJuM4s2oLwrQLWREgpz84X3rqMM8QJAmgG4Fh3R8CBXLv2sQPj",
  "key4": "2vaoRz1MsbDEfYL729S7Msif633A6w1pJeZVvG2USCj8QHSJPhode52ah41egkhgba1txTx9HzZ4dW2pPDmfVJZz",
  "key5": "23CggswBBGkQLpXzDYMW4pVwbJvWEYmrzfSSh3ScgQhnENSmSNCLhgttGtzbUFjZKuqfB9jW2giJ4deDJuAyhMrb",
  "key6": "zMAnjdrprnzGqydy63p634PANHLs4s5YDECaYehYG7iXsX45PEZgagSDZCanGTsvkn6mFgpcPGhCo8fxQx1SFv9",
  "key7": "5KBdtReiqyuHLUrnKHGvmmrhzPhZGCWTNdnF9LBwUkqq2p8nbAm6SJoS3eG18X8Vrg7NqibjDXUwGaQQvBqtqs2y",
  "key8": "49qQSVMdCMoD8SEJKiBBFfGoBMYNkkkweVmF9BcRsZZ463WcuVY1xMFLjUbY2maMx1XafhC8RWBn43xoRwhdD52F",
  "key9": "3Ahv48wxFkYrMpCQsBgCoNdNLMS5HWEB98epWkjUHNvPrHtakwi8x77d8eWf7LBunfukbWEJMM24S7mHTkUGFRKM",
  "key10": "4Zrsatvh74WjJfH4Yg6Juo3DEkZ3rQpyeMU5mrmMk1S96f1VoLRKDVus89WExvupBhDtbQ2n5kFmfHz9xPnX2ACv",
  "key11": "3GGSAgF51WpyNfG9kyNnFMB28KhJMWURK1RL4hfg2u4b5UZMxvcDpUKXNmBgDro4xw7zQZmpsmicAaGGKtU7mEoH",
  "key12": "2UepwCHJosncCStt4z7PKp1a5zvjhswBuaapYU9Y6ZieyRsbRJ25qia2PBgcX3aPUHDa87ndP72Hkpd22TKgna92",
  "key13": "2C9oyMzTLJ3uJHiSd1YuiNvdkPT79e66ZyV6DYCMPBxunAzpX97GAmjwsJLLoCEJRqLpvLEawnCbz5VE7xt1vLvn",
  "key14": "3qMJcaVKx6TCAbyV3tDJp95H33ZSpxGbAEn4gQxehEzZwv4j1avnJ5bbmVZYT52TaRTfJd4N7XQs3pBB3NKNnTLf",
  "key15": "3SowKygcTDUYZhwbhNWdidkF2jVHsMP2BEpdmG1DzdF6jeCVVQkx9ws8fTQc264uybVbQNHKiv8T1SG5JAuxzzxa",
  "key16": "5wZ5vB9QXL57KsHJCK9tmU4Rgd17vSpe2PckWD5ELFzRA6pTEr5tTXHpc2miiMrdjqbxGfJDr2khFoY8pU2jbGBK",
  "key17": "5fGydWU23iQ3KwrU5bddZ6rfr33aGQkqWHN6YYqwVJrT2tTjPCdUWxufZieuQ9j5e4fL43JQokPdSmf8592Dtq5q",
  "key18": "2RhKL5d9uKcwZQcq8aviqmCefiBMEVkoaQ5sPDkRfKA956Sr2JCtvLNwQox27TLDinTZaDQesbNzyqVHoX42afyJ",
  "key19": "35LYYkZTQfYjnZ3WYcj2Qxzs7pFspRAyaevts4nnPtfGK56CtSL9BzcZy5MrNnqjkciwf4HX6jUXdSXWaz5bWvAa",
  "key20": "3HDJfapdT68GGAwnkd8gpDsZ2X39Jd3LEB2LFHt17ifZLkf8z4ZDusbWVSk5KYb18Hvv31Le1HmPWwNh1o2uDpSv",
  "key21": "4AhsJiPD8q9rmxgDGobpYipY9Q8nHj3M5umeHsxZ23RTdLrQyCoYz8dXTC1yEoJhmUJ9m8ABQ9eraoqaf14NWwRW",
  "key22": "gY2W6ECrN5xGAwTitgYNxXPUPS3YcSwjFYKJe3i5vFv14Evap2ggWyjgCgATUM9rQRVzKZbw7UGMu8MjXgYmDb6",
  "key23": "5RmiztAXsUaNfzKdB2ETAbAfBnc1TZ5nvq5kLGRbd1nyqBGyaGowFZcjsby9SEn3ZP35EqvqCaptHq1qm2rZLL2R",
  "key24": "BDYZwf61xfseECxz6YU9GiLzKHoqixcSZkH1uUhbkMSbqFHD9SkkWfofKKxQVjghJL11icsqrwiU5LPrdSbpuwK",
  "key25": "663XGVdz2mPqJWoTufSzuJQXWTT7UzGxE7ht7H8tiTETBE5zeFNndzN7PFUnzDQmQuurs8vUMzUDTXPYRBA9e7Js",
  "key26": "4KvYj9M2sZsRJunSTFNFiRytT9HdkaHNYeMoff1kZkrkgH3AfGZ22XJZEAesGCFqzxKJ5MDXZycW2ZZLP9L4CHqi",
  "key27": "2bryM1QXJBhb6rEFMnMrYRxTa8LQqZ2PmdgMYKDTNKa6QWQQk3TJNMa9XxSR4fW6echyohbVvituCggp2kXnKzqL",
  "key28": "4NWReDxGJwu9sv2YD9GwjbUyJjJgQpAGDbetXQyv3bwC9XfLE94DAja3roMDvr4gRM4BTPquf7xBtjFmKmY1v6Qi",
  "key29": "2BnSngbGEsXXLKqPDeEsWhdr5fQCN4tznJmLFp7CEdJCQK3r6bDdZ8DHMXD2XUJjQpj7uEHi3M7rVyr1SyuvNbVZ",
  "key30": "63xT5bzvpXd2cqEZM5VnJHeyR9y5uNoeosxovrGQPJVj49yKyzeR1SMJFYJ2bzyzua7bgfMyEGQjgjpUVB768kdm",
  "key31": "3CTWvvMZNYMqxsrvAMCVmCD6NoSFoMsH82rLhHd23MophU9idGVT7fxFQPGf4ALhwSxGHV5kZGXfMUG3FF4Yf6ze",
  "key32": "WJm4kxGvSrdgQir7J8ybEFE4nhmcjBBdikY9nrpLGqbL9pgRN7VUKLHaCanRUZTHqKsmKBuq3gyuXFo5dhv8g9K",
  "key33": "5Lx3sVSSusoxBkQFRxfDZRvXWykouhTeN5QZfAzWiUr4KmoNFNeqvNipNz3HVGpxxBec9AFLkSXU38uH8BpqVtiL",
  "key34": "3YB9dNrS2FkQ9kQN6ysj53fVyXKCko5ozn9G1BACU2WrwBXRuHF92EmgWKyuoiTwDqxhrE8nvohLnTDRFb2H6PDD",
  "key35": "4gFKAyiHZQmGNS7LPHuDKNS4gNvoLniuXK6Meqaz2NSZh3kcLGVq6ikFopEjinoE1TTFGvfjYBCNJgy8jbrVrtng",
  "key36": "U1b7bvFRToSAyDkGiWwmbbvsgdypGVvvfXMQXQFMans8Bw1RAjRgkdwdPbBoAMHcq8wdJv6keZRRoosyBrr4Ro4",
  "key37": "65oHJL53H7Eq3EgZCGRrt1MH6RzLKZQ21wvDuKu4S1xRnfKRm4zMSVJztkN4CUgRGMQPXhq7FDTXKDEJ4MtEubzf",
  "key38": "oiNuyuxo1yXETyihqc1b4PSKY4Anp3CgSWsS5yY2wVQaAGZU6LVnTRwka9vAP9XaVGdZ3eSDycLxfuWAmxTUXhZ",
  "key39": "ZrL32zAEjGpJqL8WQ7iSXMBf136op8Uv8uyptBm9ySMFL3DNHiy797RUVMVdGbFwKFsn3bDT9KvgYeyoykr6iVR",
  "key40": "2APPsB2F1jmXJmnKx1tCjw9CG2yJinmNdfzEW7omoCP2uHayDF7nQuSmMobcmh6qiqW2BDnisHV1mSXZVVVeziGN",
  "key41": "5DVarK9XxFTgct9jmjup4X8SqM6okAN1dPbGBVLGKk5Ac14kWQ2bsbYJfK2dF7RbFtY7zTnL6AwTKWVzME3M6EwS",
  "key42": "4JZeT12iUMSaeG8RFvoLr6xdb8KHwQsqjBSHukYoKXqZLNzjQ2eBp2AAg7BuLEwp6cTMpTtPJG3pVWXWA9H3D6tK",
  "key43": "WdJdj2R7tR3XdjgkAedUoyJc7G3V7m3tqZY1jeKHAtB4Lq3RtMThyvqMbwLVL6zab7NKchnKn7WHRL3HehfuNLd",
  "key44": "6B8r89Ez6Dbcw69ELfxfM53jVppiSbrJLws1QZbYTyk1qp4gzQo9oWhyF4qCD8LfiHaQLknMeL5Tfwww6z2ssAk",
  "key45": "yLfZGVyy9NqTWNh7JX89zbYU68KeekReA1WC3jhhBQsQWkF8V2uBwPuEnWnQ5nDQwihnNVi6daebUJnN9mzXzG8",
  "key46": "3CgEviPLJTLTjXxmixjN3uhxYiHDvtPP7QM4QVUE4WQYTqVB8WGtEZd6C1Q8EopQRiFuqQeT6a3KHG2svrNAqnSx",
  "key47": "2b7g19rsGb9wH3EpvjAJieitGucbJvNvv5AuJEbDtrT8DSmxvvemyvHqTXYYwuketd4NreXEPxbVRdFwm6DMUEeu"
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
