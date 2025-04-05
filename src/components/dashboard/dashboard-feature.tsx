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
    "jRiRFxcLMmrFWtAzfgZ9mKJSG6Q8Mt3xUBVnBxoDsEqUmQBTg88ra2P9sPf3jNFuTgmhrTfdt4fAAF71DDitMvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nuC5yh3ttejrRRU6XAkUEQJG1aEax5PiNBDsQLNMuNrfFAoXbyjdGhTqQmVdMzNcEHMHXYCjHG3FtRLgX7tQiSA",
  "key1": "3RabQVqZhnci4f2qGryayyo7c72ZaRd2MWsYwbYnA6VDqBghrrFG9328cge7cRM4igx8ssQPgrDV7Lc71oNbuQEt",
  "key2": "5FKSaLpjYjkRL5PPoPkQEGY682sUMce4Ae21mNZGDUj1wXJFjnWPYoRzMNTbQmjpbS6ND1SaiPfRKpcMnTzcUfxz",
  "key3": "3Yz8ZNntvcnaoYeuRFziXJ8kPVse2JHRSacAZPED5ux2vbfetHNfZeu81AQ5uk5C1QXSjXcdpeYTCBWc6bm8DcDQ",
  "key4": "9BPjowaxoUpKoBUTQtXQ21PfCWEjfCT3YrD8UYTVhyqogaZPR36zKq4YjgV5PUUDhgyfPGnHyu2ZJWC6fFA6Cky",
  "key5": "vR3FATDxZhFGwPgvcPZ8UB44YFajxAG3wgkL4zbJpAFjHsRG3QN1n6DHQtbwVKKDMG9VY4vzXS55Uwx9oX9gXTK",
  "key6": "5H4y1CRZR1nnMKMsFPbzcjpjVw5vCPfEU5RQmE9gqvmrov1y5Z2rMV8TkvCvng3qj5gMKyvdvc7qZnFMCqCJPoMg",
  "key7": "4WoH1RnVTABbsLWJfDizY3AvKffsdsdTspkGxPH4oB33E9VpbWF5E86BgLFNUMUxSUsNt1Wir6ZywAExjHbVnMqt",
  "key8": "zgGnGppJJ3MN8gzNVuhuajfrDa6U5N32kXeogpTCpN3gyjGAFAKUBZY1wvSjdTk9Wjaeb3wJQm5ujn6TTwmr9HF",
  "key9": "3Hk7RJfCDJ1nHxT32EYqxWdZmhoBMz3uokhUexcySVMidMsj2KYdgz1Y2o1M8YZEQ1a5Lvp53WrhAfPNPPx77LVa",
  "key10": "2N9ZtjPF4atHfdHiQsEKPxYjWixRYjoLELaQEXEDr3ZGp8ZbC22dEUC2tch2344LSgrcmGLDLC2PMfXZbJrJ6Ptm",
  "key11": "A1oobenYcT7CzT6T5W5S7TLUYr16LcNkxhaFyECvF7jEAbU9hsajN2pbgFVs87Y4u9KhqEyKi57wW4E6D2YvZB8",
  "key12": "4nb9RutqPwGRati4WmsDLTSJ8ae4ywNMVS8FKjySQnBXjXvHq6N7ZBbw1Jo48jx53rovHoC5B94L4CFLShnfJuU5",
  "key13": "5JaSgRQCvd2wYvujRJBtaJni9tPTk58j7KKRwDE1mCAFwQNVNjcFQ45gto2f4Sxg3mkH4kH139ZTcyhHP3yCB6XB",
  "key14": "2H4dzj6BQJA2v7UXqpLgjqzQJ6kP7XcQTfsQrVNLqHneCEx6VWjZBU7Hd6x9KkhGRHsrbEJhQhC1sxBCJcr15FPC",
  "key15": "3T3fRYG4jsiPVZEts1xy7hWi22a2ShjBo1qhbdYwhTpSQBSypusdwTbwHspGwYwq2S4FbAbBsXRxYSS1ShHLBC29",
  "key16": "SJypAs1Bo2tzn7ynTRc7UCnrKstQL78ZMMxY9BbC1ZDnF67hH5Etyyi7wcWWzsaFcM5uLQVp6kJUGM4G5FSay1M",
  "key17": "43jMdnPG8ByUbaaa49zU35bSvd4NyEJn9BWdxLsZE8qwTwngx1GsoXcgpk88tVotd14z3ZU7tMWLrYS6sMxMMhUh",
  "key18": "5TwHo7i9DHQjDbdna2XJHaLfGWJSgkrf3v9Do1uSFu4EV5eVGXLuPM3sPVq3RGLJyRZCSifWoTqzhVZsELj3d4RH",
  "key19": "3B3oy851R3RLq5BsLiCVyfzEEEEkCkJCA4g2VDddPM3NaHQghYCgeJzDUdabkhqhgvmFyMawHJi2gHPnYHQqPCFb",
  "key20": "AvohEszfaRDPexx6AguRHf4fSzYXLv4Hj1pZUkxX14uQfuf34VfD4Lvc2WZvUYmDLm6SxHZJt4Sw7NoSvfCFpwQ",
  "key21": "5TVb6tgSfeY8CgzwGrjpVZpKuCcvZwVsX7ukkRstZyspFEyYDEDfc4x2hkxhp188eeNRY9bQrsqZ2g7THn3RXNE6",
  "key22": "4N7cppniTdxQcWKmTCTawN4xSsuK2MKVEwA9UbgKj7AVK3yqKKpzigrGn9sFpFkJn1ir8JuH8vwFj8NpPWCahXCA",
  "key23": "3XTfbbw2oyZ4cTmihF6wgTHWtwCUgGqFug9iUiACqiestNUjJhiWj4QW2YJy7BgxJm37CXyFmrBD9qfEApkwaizv",
  "key24": "2yUQiZyvuuf8RBRixbzjp7Cm2B3cZcP9iDzC99hDwwSVABzzqKq3HkwotDRwp2ReZNmMPKqqNiu9kunQN3dqv2tY",
  "key25": "n6pMkNAATcMbvMvoooEwFPvYRJbFBKLqS8UHRkqfrx9oF8dHAr5mpGSB715bwSqEvxvwPjX16Df684RJtxMrF3A",
  "key26": "3osvujkssYMtvw6HvEFYpoZYxzvxeqxJ91nbjPWBjNXbVvq8HbDcurk1vDVYQNeL9dTqm4SCNFdbCHLcyWyQ7tvA",
  "key27": "5X8uE7f8qJmGHkHChVqSiA6BptdLd6KF83chsoU28uTBFcgnx7SVxxuz3GM37gWuoLSnjWuFEhnAbpXNokagnrd5",
  "key28": "5DATDKnLkJMA3PvJq6M2ibzrhA7PY3RDmyGbNxwZsoRMJ7vCGbZpTnUeVdea3RjdNjPAwYJrpCAKZ3mSVKe6Lwgo",
  "key29": "5erzUGtTF4GUiECNXFQSJiZAnMBbRsVvermLfDvN9Fa1zKujE9Ujv4AqcQdoR8GXAFx7WmncsXxAZLhmnLkxbyoe",
  "key30": "4rEK7iizKB7FEJxgSwfKB8pgdiajCcGGu72eoc52tTVmQjH3g65RGA4iaukZmzXaJvGAwuvb2pMTp7ZhwY6HibZr",
  "key31": "3tQsRcBTnZyJUKWyGwwZyD8E4psvwDuEdmcRQuhdFyZjkycGQKeH6K34woMbu5c1WrZYw1RoGTAQPDzQzg92doZb",
  "key32": "y3HLQr6cf72h6HE7YPNKpqvvRjW6tps4esdGnMSU3eLJxGtRxtWdMwuRqvZzDpW2hJ8wSDj8tKSbCEUeZM2DG3U",
  "key33": "2reAZjXB5xxhjVPJZkJRRx1amJRvmbNoee1K2N95ZAT1ZbwgqVkLAcjXcrGmQNkF1Fj8sGmWHB5QT5o8M5kwxFhm",
  "key34": "4faGBrxR1thjtyPqgVLnaQLrzpGPuDdrK26GsgZ74tFMW5CNAM1LrtPqD2xoizvFW1qHi5vLLFyKQPAhsg5RuRQ3",
  "key35": "5RYu3FoFRAnF8YqcDEUBUtTc7VobFY5WkhxSVw6iRrVj7gmbUnZgjNh1kpXAWauHLJd59uzMGS2NDcfGLUdZBWz3"
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
