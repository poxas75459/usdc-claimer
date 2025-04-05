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
    "4oq8kk8jNUMCUNoKzUSZkLW2XJdZ2ChC7xVivemn2KeugjDmpn7mJtEgNUEuCpmtJAkLiMa8s1zeoFjFby2jrcxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YsmAT9E8RAncZe96KhihhvYgAVP1RAc8m5jqMdvnoRCw8tV2quwT3eZKHxpej4zT7rMvcXJLXLnBjM1Roz871eA",
  "key1": "3s77h8E2uBx7QYyzNnPbXK1YyBzAmefijLjrgd9UMkAUcLstYzpQuB31C4fcbeuTDFXxezfwDbM9zpW2Lp7BQ3Z1",
  "key2": "ud61JEpV9aZHVbbQ5kucj6giVtYLphBG137Z8GsqUcmFZBFXtFCrjdfQL2KRHA5Uyrhb28F75E6fuEh5di1sC3H",
  "key3": "3BeeY9TebGz2eysSDq34osw9Frr569myzHB5HQgrhHxPZFcKfoTQcqknWzqZJpeJJ85dMaPKPGB81vqUjoKJ1b3W",
  "key4": "2jPjKF9bXbJrtFnhi8LKrHEBB9swdL5u54cEnALSeZw4oaopsW6qHcEaQBR74cHPwSe5JgNvV2uRQYwUAgGXzGQ9",
  "key5": "533cgW7mFQtr9QAh94nKyRsT5n4XrGGB9eN4vKyRSaArkB4YQEwsHkEXuUY2iW2qNrGMTHfchXevoqSCdwTbY4KR",
  "key6": "4LtwM1AxhtbcN2TG7NSqtpwojLM4kx2tRCeDwGWwuMUBx2XBsicL24LvaZRrhnj5zi4K9NFw6kFQYgG5CwLmi1XP",
  "key7": "2wcGFzYvKhaZkLNXeX3a4P9NuQr8y8LE9i4f57Az9bxhKMHewwth8CZtmtfgnDBdRovfK7LiK6kWTJzAPDYBWya3",
  "key8": "3FmqDcRrZjCWkLLP3YNhDCrJ13RrjE6vzh4fJ5Uoz8xFbyE48Rrv4PG3oJy7QzMbEupaNsd43p9oCwaeF3wXEKnL",
  "key9": "5rCZ5FA3U8zaeMyLCpCJVVVcvXY26Cyaji6ug3oakaSVMqjC4Ed9scRF1MnCwfpVZZMTiSo7W1ftkbwBXC16sLrp",
  "key10": "4PsV2SDzgG9pz299BHqAC7fzThHrFuA5Lv62yTGzxBHaE1fd5RPTqL7E9zr21DCZCCBYJmocGxu8vJ9G7Ewrs8GR",
  "key11": "5YyRqwsM3feu1fgL9qr4aAJ8xuohi4RGPeUjCxhxvGM8cnX1FQLU72jghk2UYgDFQ75Bzz1T4uTmuiAvFvEyqowS",
  "key12": "3aZqLUTmEAPKmSZseNBV5bpC8T59XF1enKWosrDBcGRyPTvAeAjCae6G1K4vzcU8j6ZsPZichhGShKmW3Jzu3TYm",
  "key13": "cRLiiBMa6YXrDD66MvAp8pLVU16Xm2GabTwszX6tB2JsQAdme1mmWRcS89QmTUS4tavBNzE37vZmWyPrPZPsTvP",
  "key14": "3SrLXA1k8yGPjrfWGTgrEwA3W6CwszfvMz82DgNEiZJ6ejS1MnxACnAKX89qAtug7UwpXGRUPDtBs3N5T3NQwNFu",
  "key15": "4m1dtqnCxLx2YE6XgGxbTXs1peLHvEir7Qe5Nfo9vH5wb6JmoC3WNQXbS3oU1PaBTbpamkaKLBisEExJW3mnfq9P",
  "key16": "4KRv51pAw1AKYHWsxSkqBQZmeu9YsheD3z3gXRSzoYu8C48catkvfa4rf3SpQaF97nYXGonNApf3iif4v1wLjyZS",
  "key17": "5YpHeKD6iM7x5YXaLFWLAS8ncqRP8YoJCbSFxGDgX4TR5cUfeqJD9yv8VTXosgg7xPC9et62YbqgtD9PB7bQ1QJd",
  "key18": "TUormB8bkxQPef2Uk7Y56L8idhAMks5qmYZD3m8nfimhNKVfanBq7xdCAwFLVA5jojLMXMX1gBPmWUqxvbjmVC9",
  "key19": "3zA6gdtkymyaKre2c3qJa3kDEmvhJX4KcfSzwHW6Bh2vqRyZGMBDevrw9kyL9JGzfnoMrJnS1EFoz2zQx3kuYW7F",
  "key20": "4TyhB3hrA9GtRr9UzMQejBAQHnLFWLq1EoRoWqPB5vzcK5UGDgovimTs3MYEgDLv2suCaC7zEzUYsoN5U24u5duu",
  "key21": "2sM2AVdWYQ6eAxtoxFPxLvjETvGL1HLPV3y4wEpXfsuYBmUYziRSM1dn5WLdPY2BbJtzUzJbe3j7jMR8pDdVXCcq",
  "key22": "22dnYR8ShNXfcBRSjLL3M72vXn985qA86GDVB2RG6SzQBnoLzCf49w3j5Ljz7FBqTqq2rYVKDr93PEwM9tYpvexA",
  "key23": "3uZpvVSXQvyXCEyk86YYjoAqqnWoWE3aK89HMSscHAhzF8ysecJaCt6LY8PcZQDjtTEQhxTwR4zQWvbW4dLj8ihe",
  "key24": "3dyeGcZyDyDtrBv4WWupFMPbXkjgqABCmLJhyUwwqoE73E2MmigE9Z8G2cQaZtLnuKTodtoXWqYUmupKEqoGWRVN",
  "key25": "2FqbQZ9Ypaxyd5uAG1HqQSrNedSzAYvoQJEtBy867TYnyDX94Gahym7JMetDA76LtgrxJV1jhAWkZYRn8bQWCGzG",
  "key26": "4wgWyod6Uajx8DFTvqPSJFdLapmx7HNnQc77bjV4xBTrcdZYd159a2cJ3bk6FGR3GHoeGEtnj1Acks44rwPDSoTo",
  "key27": "rCBf1mQXZgDmvfyoED8CFKH2b2L2AbiFTyLkpDAoRtcqu79chzjbxp6HAtdGDjRtpoMf29DEtF9XowBptBxe3dX",
  "key28": "5NQHpRVeizbJ1dX1ViDXPo4d7gSaoD4a62wzCCP3RAb3uwcLdaQjq9uzYmL5H55RKCT3RnUhpxmNAgQHjjECmNfY",
  "key29": "3vUiJbRc6ZSZCL8FpL3rP1C28RNPjzjscUv71MmjCf7Jd5vGPKTNPhne3Wbf1rQDYiVZd9S8roTkoRCpUSFVkP4N",
  "key30": "3uCsDT7q1hMsHKCjKaJDBFPRaoi24WEv32rrz7EtixkNu9Mz7xX5Bjh91ekdT974KsvFELXufByK8KWKgVV55Lbg",
  "key31": "3xZ4SUm3pkK1pw6FpbEeFXcd3wjYaZepFPbLSTwHjjDHsvR8UvNLdqqfzLRfXWqVcYwEPx9uczAatYvDLcpJ4hvM",
  "key32": "66oaPvR89jZu6wsuamkePwVvUh9ZKzLZgNYsfzyYdTk6JYGjx3E4LyoKPe8Mqx7tKoCt2cuCxHr7cXjV31TFBhzL",
  "key33": "3mwRt1s5ghcGeTACeCXirn5btsNnWpdpVHtkTxsY7fMoccMvk8tnMEevbP2GHHuaUjzAsATki72R64YEBfpAKXgF",
  "key34": "4kQXjuxHZCBh5TsERZa9R7nXaLWNkGeeGRMqGYnvk7XXm2EC6LxRc4AkgruEAnhAKgREcYTadveh5LmxZYPVGiYA",
  "key35": "22BRwibAq9e75YAVKWKWgRwZeQ8et3zGfUoxoSH3YP193eyXtCczxgpTvDmnS2fLzY4yAP9CAze838Y9N8PmErPD",
  "key36": "3RAYNXdgCmWPDSLWuKdAS3nUSgHk98V8ain7u9Js5ru99r114zsPCStuvKiMFQxPf1S65G3HweoJgC8faxQkJsgd"
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
