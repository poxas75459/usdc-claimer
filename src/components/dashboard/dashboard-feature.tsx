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
    "35Xnpksc9yt8yyuaHRYH825dLJScs98vPeeptRLrd71692oi6bfqMeiaBYbjXMYUUitCXCU7J8G2pmgCjNVjquW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eopD98eaM1atbPrqS3JeqV6TaMRF6cRhMnXKPakKMey1EN6bMNEQJ7WYcSvBvcdg6htW32u5LQXoSJUFD8vK6RH",
  "key1": "iYUZxQwdKe1sozuyHGWYwf3GYgB5t2NSRbGT42WPNfq9jKtbANzLmsdNPE57NVsLBPtdYqYsvtECLnXKdqm7nNw",
  "key2": "31WeLwho5nvqrVZpexv7ADbFUcE34ByPcBoq2HK232QuhZWbHA6K2hb4piyEMAfocdnycZv6qdTzvUK8AF5QA1f1",
  "key3": "5ou5MNhSvPaMWuqNCkcFkkVzDPojnLkZP7QJX8PfKBUhHiRvvVxqti2LxumoL46HKg8XDDwmUWmL6DbcRyAF7yHQ",
  "key4": "wKeK8fGHdDcboManp8MFPTaoVmpNpjzVKUNKjXtsC4fjSifYvekjRcwN89pFB8ZWgUpKk6ngyVTxADPozJtdaJZ",
  "key5": "2gZRQijGmNZ8WxzmPu1hn73WVNNrvF7f2Z4hxtXeP4LEvwa2xJ3xLBZ26sXGcSyBazSB2ZryYeAThLDqj5F1eXqN",
  "key6": "2KD1BSmbBDo5gone3xqZpA7UEzKKwdcsWk17D7BDt6QE2NAbUSsYgkd5eFZ8791WCabahsDCmULH1fpL3DLq9XhF",
  "key7": "3RZQoGx4gnMLtVdvjwaUJMJ7FHQ4jtFYnJFU4SEgiM4hd7HMb7nr1ADZqSfSmZcG8RLdmuC6qnDWGpE8VLbSTYTe",
  "key8": "4R3L6gbNNTGXHJWkMUNwH1bVJrdi6nnXKzqNKtKQkWP6JqR61FdDB1Z5LCncXJZ19LhZ17LNyhTVFeQnrh4D5ARH",
  "key9": "53RnzN29tvsean3Dt8uQcAvF68yRpax51bLm8SEmceouoNvsm3VFAZGwVRSdF3DRTJRScqTfReW7BCyhwitmwocN",
  "key10": "4vaMJAUDKpVqBuvJthU6BfWUQgswk7JtpcHZeTNuHXRV6TYuR1Z33z7HEHnt6jv5BD8RpV1ZU19c13Tmdjztj3G1",
  "key11": "4e3fWwe5qekXzZmzQTDQnizE1otsQGAirkeSxnvdTRMdvobm4eZNN3axudjnMv2mzEriJh4dakQgLYGekUtCjHF2",
  "key12": "2BtN5Syb6agNJUHUpFdSWustZbdKxZdJzP1MWK8KPfCcUSyLnzHxdQtxdEW4cctmMGXCGRZES2S5ZunH8NJ5rTvm",
  "key13": "5K7gCSeHhLApnXnd27Q92NJQgeeaqtmpLU9yvYKTjJR91zBFzNz6USqWysUZ3Dca2GiXWNazajV8FVNVQT1H9DCa",
  "key14": "2yCuGHRyvauPPUF6e7WHfN9NGh7cU1WEbsB3bK8Vu8DJ8KbnyKSQYn21wwKsXJHTBn6o3EAYpnmVm4F731f9MZep",
  "key15": "5QePW8AGEEnmHWXAV9VLJWPJm1vQMKjiMRRV6tv1FtD7JQpsT6BerA15R4ey2f7nzPF8z4kLmhBmixSB1i33iGzy",
  "key16": "3oXrPTSjsQeXKJBjPbL3ijdURanNcxxrWH6oU5bHGcwa8x3K6TXtMQckF2cMoB7NMyJPFaWEYUhSRqxdVA2so63B",
  "key17": "478BdMhX4ZaCdMxgJMoegsAHa4HubNiGjiQuksyR9UZYkzXuRbH9z3m1BtdQgjYsduqw7LYt4vfSiByAKRGuAALE",
  "key18": "4y8icDkvB9r9w65nyQLQNGcJckcxCEMRSQxioagRMCXvaECW62UhzDnvZXv5BwujS1qwFvqFo7nb7orqrBk17oyR",
  "key19": "3Gypm4agnuud5mv3Hn5WkfhergzYpBuT8xLYaNGVVmHyxZ1pmCHK8GSG1Gm6V6jTKxje2CpNXLvW2suBoyw4dmGF",
  "key20": "41QwJmgjqxwsrsxE9B5FJHY76cSxMTFSsespTBgWfDJp7p7puL2Kh8Rjd3QRADcMEqgnubym2tYYCXTAyc6mnXv4",
  "key21": "2DW4uwwrkb2ZshKznyZZu5JzgtptzLRYzj8z6YaiaEwULSefA87a2YAHvifE8zQ8HasswW1HwcpSiaJB7h1Wua4d",
  "key22": "2RYnqS5eoqCcGRBPtM4oUCfcTmuutePRtevS4o2mUTpr2UEJeFCfvZiRorGAPy7YFsV6BfhCxxQAioeihSboiPN4",
  "key23": "4XoW2d5E9rXEEVYHYNaUHFvPCus1LdwbZCU2y15MY2C2iRQexKDNGtoLMNpXdZqxR8ufwSFDaMXXJPJpqEVL9t2M",
  "key24": "4rN6AMRZQ6zMjZeTP7a7DZGUkGZtUka2f6Dnk4LadvEJY571Y5FP4AaPmVaPeyukPVYxkvrBMywtyfY6faN3ayqN",
  "key25": "2iyh2afeWmHCa4WrVQSHAWx8H8yPnHim6Fr2UJntb9aoW2UotcyU7WUN9x9UqqTuLqtYS1eNFpXoG1EV3UT5dDrU",
  "key26": "5PNQizVSSBHWQtPM565nBGWUEcqZJYTBEKkB4P6vDcp2unvwjtT5A4rHu7J1kUwMowd4zytUJA8d9sGpNbtUUgrX",
  "key27": "4RM3VdwoAdbMwJXLitrsiXjVCpmCe4CaGggdgwBdFM13PTEadN5wuhq6v1GpjEF9U7R8xEBynKyFnCkJVNHNJZAJ",
  "key28": "3zsKuWeZDCWYmBNX4DvJKyPvWEnfanQhnc1QfeGdMGNKFWjL4rV34nMxvGxXojuJovTEXXSfGUCSgbNK8Mj3ZPUL",
  "key29": "QSDpvbecQDt9LKTPZa4Hcc7ybj87QKZhYxXPQeM1orLh88QtdNqyxWRwagQeVmQR5YrbQ6CBRzLNhywqGox5JJY",
  "key30": "29cPY6Z2kjVt7x68VUgeauKN5sfHJS34bZwXujzuUmrjfTHoT8h2J7o2k9ydQoQ8b5JM9V3vWqV8J77oZqK8iVN5",
  "key31": "en7B9AwaUMw1Epfw3ELtP5F4A6ZNYydJbAk3R99XbD9WonVZE9eBZCYL7gUFAYafqSFaTbLfTq9PwqLRfSFsGEy",
  "key32": "5rDarzcTME6eDRu1GPTN92EeNTMqMjT1nhk7xbubpAy59gvd3pNJ9h1U84T8ZxmX6E4GT8YJsnozPStNNMyAa3Vo",
  "key33": "5P4mq4AjfUHtq8L3zmbUdMzJxA164ejq7oHM8Sn1dG5VQ777NATFkmU7ffB1MgfxuP3Kd2nN2UG9LwPsJZaW3bt8",
  "key34": "4uAE6jqKYqhc8VuQqdVAgtvB88v629cnEK4WzV5ZKdDg88cyiPzWsCTPJvVVSC6qYvAMK8diUN8Q62BNc2X6gFN1",
  "key35": "Uy9KNVbsPHkXdieHYHDhw45tw8KEPXZ2wD5iAoFUxWrGYFqg416GeuVo1DArXuACgkJgdP3CiCS7j9tKVRcVdGr",
  "key36": "ZHZD1LXYYHSjyiUvHgXW5v2D1nuWjb7iuMVV7pNR9jU6kxe5HK1nyv7VfU8fmBuDWjTtVf4Wk8nbMpFQEZbAtWP",
  "key37": "5PYFWgm6jpp4My2EYSSHDi6EpaS6nzhVeU7HSnrWCVaAdwU3pCXWsoBDd398vNHgq6NKN492nNAH1cxRcPzVfFG9",
  "key38": "3MYAkMAJo3YWbWiwW6bwBPwixmjDw4MJdgPXcfdwytPwqUEKDJpePPZ2fJuTyELBp9C7Rkk4cpT36aDRsodayZmr",
  "key39": "2brkBP9pkjeE4FwSHyGkwcLFy92NjjWZCdoyEWpLYYdHg3wt5WoCnzz6qF9emfSHG4Xqfm95uxcRRsYYsxn4Ynof",
  "key40": "66AjHzT9JiAoKFXYyrcpjU1ihvgcrDBeb3k3URfqTLJ41qiW1nvAKjnw2qQaNuwXMCvLYrJWSFtE94J5GwxnGVQn",
  "key41": "5irDASwDRjRz3LLZFZJgQjJnzTdC92JEry9uw2xbkHVTP87SCHbbHjfWum8cETczDzJtBz8JpMHSd5HJea4gassi",
  "key42": "2bUbPL1f3r9jcRMpQBgKTGL4pKsRYjQcd57GMbGsYscJ4wHwKsvbxF9E687apndReRNmfY4MfipXXh7TvkKFwTDv",
  "key43": "2gUPAWqWwpv5Th7EiwBBDJRXtUAkJLLHAnPaEtzNCZrbJC84VJeu1PiKKLZVQHh2NVtZHwDWygpQaBEUcKT7R5Ai",
  "key44": "3rCAjXpKQJ4o6ekSAWaM6pAw87qhkg9bJraEbZxcqCpGML4AHGuCDDoFhrh4PRXFEssHfcuySRWg5BdZ3kRsQj1k",
  "key45": "4YmGQfYTY3oWr3P7szXnEfXXAxuri8ngWswf4QhrzwpshWFNW7GusSsiDtX7QkivJePNm5ah4dw25qvWiH3vGD9v",
  "key46": "2TnuTGSN8yfVZ7JnhrHhkHkN24tr7t3kTzZFQQGikNPqbDUnz4FHzbKha86GjUDpoVxJWvuSzv8jyYLxVUtXVFBV",
  "key47": "3UDucNG2BKtdphpRXCEXXMUaAr8f49Zqf5bEJnoDhjtLELBjS4gsdfXZJoynnsmw8Q7Yt7iqtoH7uoKee8b8ieF2",
  "key48": "4iX9GGijNmaJ3hoo6SPmy53YVPF5Tw75xadTcZz9mSbwndXrkL8zSdEA1n8Xv7j7HaBu1sNQRntLzWVYipNHxZxU"
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
