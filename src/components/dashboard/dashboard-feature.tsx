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
    "3o3MJ2k2fFbQnWhx8dq6pupSAeLjTBX9yiBZTsuZPGf2aK4sd1veCifhjaTKu8UcBKGC7m6KHwJLCURkz7ucBvee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X3ARwCkAa29LVY7c4paGa4gsu4dRo61RhnyM3iyMjh3c5fvTEKbwmVEXEA165GcVX3jubM1tHQe9PHrjs28vtSh",
  "key1": "2YQ6DdaJaUUv3YtfcceFDaUNytsJhfUvdKzTBYTFWU8pCzpp6S1neRYaPSkz58s3vrFwhQ2ZiAUszRC8c1ymCN9r",
  "key2": "5bwyBuxC6LVs5aqES4DAhGeHxF7R4X9D3CtSKuukMrhVnDF7kTDmDfCVKPxNBa6pW5Ce9TF1uMb9Wgr36DK1Qwb7",
  "key3": "5HgNJFaQkv2ZLu8Dng4Z7sochxDzQuqvGJoWpjLof3UgpPpU3sz53R8dN7j2H18hwA1cBuaddNNXyqeVGH2pJine",
  "key4": "zibasAYMnxyE4tdhXBYuCMxP4N4ytjktx2F6GG5fUNKnyn9YfW78EaQ6t3y4iPG2ug8vDNqk7AWQwTgP6L8Pvz6",
  "key5": "2nafYbCrRfkC1j4XmchTwoMJmrmSo4rQBmxGTcjF7Y9nQcynDzon7ww3o9UG9YTshqrFzSbYNZHrMdy4GfAeC1P8",
  "key6": "hNnYEHa5wHBYvATmtXqLwLG23Uu18FzgPdDiS9ic48H6TdQo56xAkF5UzhmoD2CHTE2SHA25SgEXTyNPriFoaeX",
  "key7": "4h5wka4FMER6EdHioeCqCFctVLE4VrzH8tG14wgAhWyToTnuSGRpARBJFRcxkuACqLYhgwpW9KXVJ2wskvTkY9vg",
  "key8": "2XDWoCfqBTqktepf2GKEhNpnRFtUUFd3UgQa5HuJEMCsrAGjkCfFrBr98Q43riQXZYqYRhfiWknxbYeEbs8eTm7s",
  "key9": "mJmJSRM4ZZ2gfBBjF2Mvdnys9WTd1wYG3zvfvXnauQW9FgQfqhDXz3qkdjiA9PLvey292shdGjCUFMscNT5kaSn",
  "key10": "4tGTKdfXhWyVHtvpeuv5mRj27fXBGpfCpm5pfnfJSvmXxRh3SaDKDnwntMdBjjTUBuZ84xbG7NucEUDcrP4imaqC",
  "key11": "53qNvuVb1Yc4e6UaQ4CHR9wQjH55xZJArhb11ennswAUSW452qWrAXWmcS9BA5FhipTBTLdJx4myjnvcdu3metqv",
  "key12": "2tG2zBENSQ4j1jsDxEjWMD8Q3kcpaoFp5kJvzAbFPac7zRd2Lh3LX9V2EzWwvAqaJNLjoLdrwyNKgWcd1jD5xbPa",
  "key13": "4vmvhQExCBRm3cUhfHg6M894NhHgs7qiN8zBn7jMe5wRmdppsAh3zwTLkV64xLFePL3z4xekHiJ4yE49zZZykY3K",
  "key14": "24ktHa3EJPdaN2xsPMs1cPEssm42HnWSheZ5QhBjjQQLxf2tMRoe3t69BvwUZcWYt7KeAuFvai2UwNSr2tbrDi4z",
  "key15": "5KUhfcRs9u4ZFEVAJ2ZPBtHyLWpCB9dkUvBtjCwge6cQaX5waQGsALCVxiJfabotJ5cB8wsxGzGsaXm432Bx9dJ8",
  "key16": "3YkBUHTEdU1P3ziPYjswZbEUJGpmeP4RWeR6hM3YqeRaYpoiZfPy67dfHQdf4BxZgYFGjkecX6EvVCu9gxFLmp7s",
  "key17": "XKMtoyQuxsZuVLiRwaDA1yuBVw7MhPU7cKvixRfeQFFKFMLHTgNohDjFwK4azdncwx4YtQ2WuYN4dPnirZVukEG",
  "key18": "5FYV4vKWaCow8LYCzCcuqjw8JivjAQiLh2gPuDFTNHYqLVQctmUi9FMTo9qCu1XmxUA9ypchSJi8uxys1BTX1e7i",
  "key19": "6ry6LkF6XX8XncFJyna4ZZrYduTyYGwdC1t3CmkPLcP5nyFpEghDTkrpYnjBcCDGRRbDLH5JBC93kHCsvDGu49f",
  "key20": "tdaT5t785oLYxcLRFFbvDM9hvsZuLxKaesc8YknntTqrRezTgXtkrSobxHXXkaA93vtpsXymiLjnQ6fjdPepcCy",
  "key21": "58H6cUjawhMkSAKPm1erLDZiCY5DqzisEs1SbLdZ5P5oxBtuxHV6CJNchBLYMYn3Ay3tEkEf9XZDcwgUtKVCrRFu",
  "key22": "2e1izwQYxC1Lq5SZSKFpFw5uaUwbPyfVfPinUXL2q93sJp2Zyx4n9oFqkaxJ9snz8gar5ue1Wd8ChWPPVenuHj8o",
  "key23": "62UmwHibCtfs4uy1uainfks77T3a28KrZS9Yc2aNSRUMPnigLBhUixNDgqWLGhFwSitGCUX7FjXVKnpek4EFNrPq",
  "key24": "dn1XCWqGYFNmPAedE8VsLeBa3ZzqZNPf6sKQGemPcA2sdjvErQgCs6nwfRZQnTkzhexW7ckbJ5zuYDqdJhQXEkB",
  "key25": "2gNpQqUSXwuNPXZVpWxsRFU9quU3gVG2VLLmRPYFaFRrRVsoe6Ts3zH7GweYrSas1VN5gDHsHgoEVHSw23LGs9aV",
  "key26": "B2wh8bPc4gVj25mEmWk1djRXXPdk34tGZuW1LYF3EM1yyWK6SDPZSBVx3wZKKNxrk3HFZguZgBhHqJHFQNAcBMz",
  "key27": "2EZwbqQvhk2qpQ3L8swHNnhGvZpp2XfvVccCmKj1gKN3qG3pPQHV3qyTiWUHK8raFpCwmtmspAYsyB2fnxQEndmz",
  "key28": "5mSvhq1csd6Kdb9H2YR2oc1XbB2tW1gkzWmuaCQM8XuXjtvXAjusv3iSJn8uAH3AS8rZi8Fg5fb3K2ZETd7RbyVC",
  "key29": "J9J4EPKcbjUL7d8qWQfeD7xGaaNaeBhXaKVFiVRH4XQ6k3JTnnkeBWKMRbJTVVn8948UNT7tVcZV6dgYmoR5yGp",
  "key30": "Aa2HpHZ5jqqQVYJXMEPKXx2v1djJXSmR2Z4vsS7eCQbpv71y54sbzUf5osnYUXMiia6VVxoWmadRtBanRqE6CJZ",
  "key31": "5ULYHtZW9zmQF9MLS1CqCxxVa2T6w7M6SobjvtEgq1XeXY4QJJWZU9TvqJNTpFHqykiy449cRew5CucJPoFyCjvN",
  "key32": "3uhpp25uweGUAH2SNeQNdBjaDQJHDayLDtP7DQRrdEDpz5vGiBz64CStbRtAntQnLRdVqBJa5ANFx72cNUdT4DNh",
  "key33": "4goNDdwvRwZWsWpkrWUpHrpVvuUWfxQirFmLwyoV6qVxiAvVD2r1yQoSv3VHZuzPB46cUnShJqTWPboUfqdcHYEJ",
  "key34": "2oLHrbdQTKSWCP6h6FtGYWbSb2cLh695q9QgZvJzGh4vMw2eUEU5TT6Quv9o1EuYLxAD2Fmnfk6V77WuWTjWXMUj",
  "key35": "2PfZ5CyYs8qyvpGVW3uPTM2Ze3Sz7Qsn4u3ifvXVKdCxHWooBktcWBwfUSeTBRe4xhA1o7coqBkH6RPGENMCdK56",
  "key36": "15sFRZHZs9qSvEwgKRhAbAxCYk8Ujt79KPtrqSo1kbUsb7bggkrpjefnvJrCcAmT74UKcnJR4MUWtUCfKBMjxTt",
  "key37": "4vG6pShM8S4go4FwLFWipFzi984v5vx6ZERcfa3BXHCfzdUKFHJwKShzZgJfwaAemnWoh9sVKKDHga6trJo4qP8v",
  "key38": "2wVJxKw1NckBqG7d5SduPGSqgmYT4KvMj6S9aGCiKBx86hEb8e6xDWmmSHaVYvUZtxS6LoGMxqtp3dHFteoQhpnn",
  "key39": "8i2UzxdahGageeTGyiMdZ2k4x9xc5Pu5UEnw9LaB5HiFazobkrivmafXbFXBFEYXb5Uowt8bxzAvVPBGhJcdhvr",
  "key40": "5NmwPUPeuTyE2NaeJ2Uno9GArwL43KDkrk4BdU1Tz7zT9Y5z5sC7YGFYbqiLaYPYAhDohkHL8T78PZ2jxi8JbYPD",
  "key41": "2Wr8ntRqKzNzbooGqUotNTaRVfV7z5h2Sy1VYGc5mcDYHAxRk1VvBwwqy5hTU3sr63UhuMKwHQfaKXFcjsz6mxEf",
  "key42": "qKefNbW5dnmjLLJotodWDvTcbU6o1JbfnnJATaSvvMGfj8LyY7JKJxTkhDjjX1Tc96Q12xfAANGUY7ry9om9zV1",
  "key43": "4pipohY9SR7TtTMZ6TPAQTLH3kj9kaqxxLSsUsVtpJQdwvDvdRuLBn3B7uQD671mJSMpAJMt5DFsk5nc5VPj3XRF",
  "key44": "2SHHYpG4JGZvr8BZYQuDCpViC6UvJnEj1Jfg3sQGg3g2WxgNB9RtGfKu2oeUm3JjtPaLcDgQ4ja1hBEY4FGDN3Nq",
  "key45": "te49xxH5wnfR6CdSntPULeJAVkWgNLsD7EfB2kNGd9V21CpuzSMCGZvgyizQsy7twgKLjscJteTFZ153EyEaUf7",
  "key46": "3WbX8e8P1ewNm9mdaUPRcnAkz9GXYXVmHUiVtrY5fJkJQZezvXSsWnvNbq7mfTdwUL5nziHYcioHGxhqvKMWP7vi",
  "key47": "2AmknddAk1ATB7pNnpA4FU24cPiJZXTnxKXXtFtQWp9iu9jTNC2X9JqsVPGh2sL7C9hbwVRQ5uoptFFujNZruHw6",
  "key48": "4ZM5CVungWd5HUUwncn7wa7zAsBdoFC37mxLMRxQApT68jdEq6mZNcFYYG8FrQ8yEdN4bVz5Pjk4edFqBXKbT3AZ"
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
