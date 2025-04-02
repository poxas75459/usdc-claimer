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
    "2Lz1mizYXgsU67pTE4vrUCwS1g8zs3CBnYsoAzwKRVqHuc3HsQm8Wok7iCcDU6N6bhnBuYiKzpsrw6mQh9daEsf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VoB4atnz4vE6qHSGbzDPZDy8ogxWQwUghjMuxNpQxAgP3nzBTiLVeRZgBEtvGL4ru87p9RBogX13sEGchie8F9t",
  "key1": "MeGid9EMo9xF8XCFNXoTNEtX71bFZXpcTnfnKiqbsSMWpbrnELv13kRhFpzgXwguNDyf6VsLWav96nUokvZpSp3",
  "key2": "2K8xDJAHDc3GmSpZppdD5f8vEQWBuMbRanLgA8GPruQAzsRuLd8wMXubb5xnnM3Ve3bvf5g1VEEtedLj6g71JG9s",
  "key3": "3DSFPrwcrpHpcv8KPUtXFqCaxYaAosmzLxox8q49K7YyLaMKQj54FYmkbJ3dAhhfWfriKRWX6Vmn6svgAFfQ4nj8",
  "key4": "2G9yhnR1gMjh2Pmh4Dt4ro92wWTyd7NsMgS2pgV8B9drj6WPEcYtA6TtSx1Gq7jqd99irdfTUjYm8ZR5SwiK9VNX",
  "key5": "2YUU2PFstv9i3rYXpWAEaHs6b7qyw5RQhnWudutsSsFiLHUYoFR4dxrxFV5ufekRCamjEyEjy4TpUK3iTZEmQQB",
  "key6": "5yhRT2KYSX3zH8Bj2UiyL9DRvq5XfNoEQvufGh3QAdysUNMAwQKDioLykSNyvvX2Vbe1zUt1eEtH372itit6ZySn",
  "key7": "4PGwBxFuWMRigvESUUvtVWhynMGwHcRMn6DHoeFBkfVvAk8P6ZFcpv61Q6fHdLXpph8PoHVXnBswAw5NzvMbZw84",
  "key8": "Ps4JeF38k1TKgRkUgKt8jJBhowmDy411ZkJoVne7psnFm3hMHSpHvpvZbf7EAmuUHopVcTRuSLZs6xBe2B1hjCN",
  "key9": "oNqiRbQTBaMNWbdJN2Vmub1WEPLQa4DqzEND3BAv1bY49Vic3fGZwSXuwuNU6ou1w1T1CTDzMwLQev2vYedjouD",
  "key10": "dFMZwsT6WAXyoyxidq7Gxd5aXHv41vwJ5Bmz3M2yJ2sfTawApiWQEbCUeDbKAEjqJxw4UENPhfNGivo8L8dZaC1",
  "key11": "23iM8WsUZtQsRuFLVX5pW5DEEdoe2s8uSoT3tcH5ATZLuhF17PMhfVYHepGjR6saXqRjEhrA53uLsKvNLdkpXWQf",
  "key12": "4Y2w7TfEeMaMhcY9SJUqPiVGgezBQG4S9Ug1WdZuo28ki9UK7AaXRCFh44PtQaiZ1SaCZqSM2bq82UQgoymkmGeV",
  "key13": "2mm1EUBB28gbQDZvFuZ2STgVZaD1j1LdjNuPpihp85rMBb1kGiYGyzk1jCM6fpWbWgDJfHFzqqJgzwaokizbpkuw",
  "key14": "34M4j6peFxQXPkLYE87byeZJXNfYNMyncNEnRQRXSTLH8A5JXJBZFj8JbGeXfTtNCvLLUi2Aag9Jf31NjjX4uH81",
  "key15": "2rxP93xYNrVfFConRvovFbewQUteLnPhn1j8fM3tQpzYAXK9Vktx5rtQe65LPAZoeZeVC2DKYAsoLMfMs5UEZWs",
  "key16": "4hnrjwEjpnDgFBkWFTEQceKPPdEocvbXLK1Bqe9hELubzu33byq3JQWcktw6kanGYgCCd9V9wjExFgZdeBkLu6wZ",
  "key17": "6oNDGQCKAxAa3C3HzdUPD3nrsuMaPEDNc5BRsFBF3xcdAJAyYqohCgdAhH3eHEqbG92Qw7L9gPobjTzDwZg63bW",
  "key18": "37U4oraRDQyNg4HpE335sopXJbgQF7nnZbpa9TntNHzvgrvxewHScpThPHEthBekGjnv6YKvu8XkuWhpBP7BZiuU",
  "key19": "2wcGeBJUtNKhR427YLXJQCdxixQKZQBFxCVCSydNANSwSqqYqeHiX48zpwjzxSFAd1QoLLWPbw9Q22ikRwh8sEpE",
  "key20": "2ndafwM6XsC7LKZdMLqJzCf86UMxua1ie7QdGrPP9WjTcsTQ6YtqPrPTMjZAQm2ba3GGZE5jJAqGatabRcijwUUt",
  "key21": "3rAdtxjNazXr4QEfEuohbERepmTKhUeGTsdkCjz6x6vE5wgiBVMUXdHnqdvntK6osLeCAGGNsNqVMpG5pJ3snN5u",
  "key22": "2bfzj1dcxr5gw5kwqUDFt5yBad2Z5X4bnqqEDm7AZ9RmiXDzRJtX7HRPgRoAzGwrKEuPXx3nXGP3oJAz8jY53jqo",
  "key23": "3ghA5Y1swLGm5MWsbrDYgtX3AJw4mE15j8L2Tmsn1C1vPnWo7eaYKc4qh9MjC3y5y5Rsz6niHn2kLbHQfwaPJdPn",
  "key24": "2dadEBByDtQiuRTGyNws5P2HWjBVfV6VZvH2E4zjhXWSYQjQULMPSvJtQma5x9gauyhT6QZo7wshb5YPugJpqRoh",
  "key25": "Q9u5SHx5gMxkvhciha98eexNxcKmPFtjbwBMzb3MaxvGK2Rz9SUjx9uAYwbYemGNiAVSCRQPhBtKjeYKoNS6awY",
  "key26": "41ZPmiooBYzRrqDMtwKV8x3VD6fiJZccmMy1WTzWxJLgscTDbyxPfFVpwpZqXfg1JFS14oSTEyNvCzwKwi4NB7F6",
  "key27": "2EcQfcrWEhSRXA7rX7jLP4U8RTmrHmqGSEDEDxtzwz6RunnyKYoJYUzNZDDyrUhrgUd9CQztWcsc2czPjiPGYQDP",
  "key28": "2NEVoKuUxpAZ9TuFLSuvqt6uDTW923qZ2HoBNw93e9Hw3gfMEnQBfhpuk1JHFaXpoxhvPSLfbwSfeybia5KRjdAA",
  "key29": "2RyVfTwKBtfyvfzjd1c7kfkAgcbeNB3KzjdGX8f4pxZqeT2wn4Q7yt2VDDSkowrHMAySp2E61Y6Ah1J69WBjeK88",
  "key30": "5J4oTGkNQmS18S1ZH7asf7bSN7AQwrVbQo8BaNoE8FLf9cTHAXZMTQKs39AS6PErmnc5pmhmQUv69u55yD8PBj7g",
  "key31": "pocnYfkggfAchy4BszCZkFGdrvcJzXCL9GimekhPGGu4X9PduDq8nKq735wbbdvsTYudBp7REWtNzMuHcfsNVDz",
  "key32": "5tyfns3UxbbfQBLz4f8Gjpv8aKnFnRyLoTgTdAX9btTCxhXATnzA2BbdwnXZVFttEsFJGvkm8EGNUuGmhuDqGUWQ",
  "key33": "2Rb63v5ZL2Q8AY8gMn6tVzeAcHQFJLFWXC8TC96jdhsKrFrx7XhbQZkDTNzXTPn5L5wSwjpLHumzHZf3PL1iydH5",
  "key34": "4Xt5ZhMvuzWXdg28JCUjhHo1ois5vjRcwztEusWjMrpmPG5L83XkNGihJGBTt8gTn2i1nLiX2SwC88kk2HEYurjF",
  "key35": "BJdRpVWM4o8A4XjySZdCTUUvAC34d6wdwvpSMmVsSPnvpA6tForjVcrpfaun7A8czdMKXdCtfAGGjwD18G3wLTE",
  "key36": "TYAaVrXhZtvLrAVnQ1Zskp8PEmJvcMr43ANYwJwq7uawkqqa7LN2Te5r2xSvAR4RbqtNhdXmWQK36Twjsoc6n3G",
  "key37": "4yqBjkwW33u2hsyGVr9xDvFHyD2X988DiR642aYq2bNNNA3HkC2j2VrhD69JfqspkfjpTiTvgYXCukdqgKgnzH3z",
  "key38": "3e8XfSp8MT3PMwVKH2Wd2MYZEGaQdeL2Hqyo4UaV345MRUeaRT4UKM4EW8AbRcU4r8SEpDgxb5LLSbAXqLiSPP9B"
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
