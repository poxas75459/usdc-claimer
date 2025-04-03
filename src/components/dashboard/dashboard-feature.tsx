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
    "VU3k9fdyYm4SHAirGdRWCnfEGyDd7NHXvJhh8XGUksqRyk642YBa7XZEcVLKAQkyq3Jb9nPVTRBfEaeVASRzoeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RugSG5sy915GVMyDDkZaY69V8Vrj8Zz6aE2qjXfD1vhC9Rt1U38vQdKXQnM8HsE2RQsAS9EX64uQcECa3Cra6mF",
  "key1": "27bdVpdrC4ZZGyPPTfgu6ov5XnMLyV9rdpbHQLhK7KBWx7hM8XKyxANAYGPuAt6CM5aJdY1jBqzUuqCy78ATiGZS",
  "key2": "3kEaKcDAHSu4FhY4oTwkDkdwmAD2euvLKgZhgoNswZMwH5C4ysoaV5SNXJz8SQoYi9qnys8rGZLkgViKzTofmBEc",
  "key3": "2RvNUBR7UD3VQjRJpUX3FjqFxS43kgmrD1PWN2enWNDYULF1aSwvt9eEpeZvUEnohwpcVGy3xvwuZGgXVzzacxi9",
  "key4": "2JCf9BNu9mgD7AbZVDWkpe7rzvTz89LfN2YsoGy3hcWNBtXohQj2eXUnpvABbbewm8QgDGQ8SE1svoHJmxCqJzX4",
  "key5": "4ZYw89y2a17NSUzEb6Tr96WPz5jC28RDQq9ZoiXLNMLQLWkqknB6JT4oiK8EMt85Rv2XbxqAWtNvHDsG4N7nYj7z",
  "key6": "5n8MBMCcFUYnQmMp42upQL1Yobp9M84y17TJaSThVsTiWkmdPPvcgWEfupAVAdHm3QXUienQLFmiH1N6A4UiqKDG",
  "key7": "1wFiUoe3DJcGAQKUAoxysyqYJJXMpuwyym8UupzghWfhWegLVMJmH4sgNTmUDtJELSe6bM3SWu1ZHBL8cCXzGQS",
  "key8": "9uoLP9Nhf81enngwcEY1ZeE4hErG1NFuT3qLQaF8mCZdgetWTB1D89YbHeThvtj2LNS9iwJsC2R1eSyH4vtKj1c",
  "key9": "5CzLcEs1EPHFNe8fQDDtm4zpQkNsZvwBVuTpbtmnqKfkt7mZV6kP8QkR7xRB6XPtv4Y4PMugCoKhWHBBk9qwcM1f",
  "key10": "4be4Cgng9q8YJDgGffWARvN7a712oKpdXYB1ZEZadoLwvEB1h3BfGVXQwAbCxG4HQdKMcLNXUzWqCdaY51CJUUzC",
  "key11": "5WUPYmHM7VUe6mYfKWLWvzrr62tLzARciokbCdDqwqE9cSxwiJE8c5Qi1XKZ9hSX1cSbabWBPjTt6sh6PTvYYibz",
  "key12": "2RScLHq61xwpZbQSmAi9graM4wrEgViSy8LCfNyQXmNSvRgyU67Ln1wWnLijX5F6n7dbXayVFCUms58oX1LC7aPi",
  "key13": "ieuDFh9jFPWX5VmZnE4qrdvvvfT5TFD3VnHg2Xq466y5MM9ZYCgZFSuFYuVUcsMNMmPak5cAHL1WQsroXYvy7VP",
  "key14": "yWvfTJoZTMmxeKaxLBvCGFhBEptZ6RoeKongDb1V7DsszEKegT5WNiBSLNPshoDVMbUTi1eGY31wASFfDhbrEVy",
  "key15": "4TiCdn9o954XBJ316vqFgZgE99KkRuvsUTj2nPnbq3DPUdQgE8t49zcLt566NSrep6YnrPeeCcbu7NEpV6SV3cqJ",
  "key16": "2Bb9kVD2Z4gnVm1fX6NzEmKryke2yQHVJxvpKcXgi7yLze8DHsP8h2ZKJi6yeWHLDNrBEMcehqMrWQmf1YLr8C7B",
  "key17": "5eMhtUS9DRywgjaTmCpHb5jwswjxN69iEJb2piei8Cp4ofFjrTJHF3DWPjkmo14aN26z4EW1ZeZR9fPyxM5VAZhA",
  "key18": "3qTeBkCY7fULq6acVWqZ55HcgqE84o9c6Z5gj1Y9cxa8ConZkMeQ4YKThDBWKyire81C63qZLepMqE1xoZGi5QRQ",
  "key19": "4TuUXreLjrJarjoELkGizwhjqVhECtKRVXkEXEfid4Y2Ajw4McSobUbg4gUkPELwrcYsvdqu4iLnX7kM55CscnqQ",
  "key20": "3NFGH1pYbG64YFphvBoR23oxU5xSxKG8hbHnWtPqPs8ze6WKwqzCbBQGoYXGsRHS1frgBB8aNFz6g1kaQMubqL5X",
  "key21": "3JCwPdhgUbJS3Fm9hMksw2ZeFfR9Uo8Rn8XBYZGgdEsq78hJ8KktQaTWgJk3thiV4G7DwEAm279ZrJMCm5FC5As3",
  "key22": "2duuzZrDTUv7vh4xYzPecTqdGFQy4HUtZgvQf7BqG6NNGy6fDxLnF4KpiEECe12Qpf88DqsFkYZhrsRYK7gXrhz3",
  "key23": "2EApfo9CvYchtZcGPU9h5i4GMA9ogKm7icCmD3YuYp4K6zyZkxwEieFSKcxRzdw2VKTY1ZJnkB12H9r7tox9ut8t",
  "key24": "4XYMEz2zZ593nP2YyicR2td1fne1TjgVtSMXVTQgCj3bUYzeZHbKJgsXhjJ5yfTHMvurFRpLxwU4EJvE7PZYgEq7",
  "key25": "5YVZRp5WdaSFGB8Vm8KuyBqZTHbkMYwZ4UcFbVDnjZinoR4QLNZj665Dtp3af8xfA92Pgpetmg4jtDioRKmU92HC",
  "key26": "A9CpLhewPagPMvm1iM7QfBEDSAHZMgsrHfFDHrw9C1iXefKbkTPYd9NBevn1dMuMPRwSqxZHBHZPwDSp4YPEPgN",
  "key27": "5MhEZLKcyxesG5Md78zanc7zQGVWL9e45ASAQqNEpJ9Y6CAjw86PZnhJjgFXzmNwL2X3XMssVDH3bomhFA9hR5Tt",
  "key28": "22GtcyrymSfeKvtWDGCThQ2E8LivwZpMDDjfWi2xNx8cJRtnhuce9ZyHehdthPvMBMGkPeUavBMey9iossvgDz9Q",
  "key29": "5HmFxuKMq6akkZX8KgxBQDqgCzMkErVszbSYoGVV6B2UgYfUHVqCsZGHNNEJMGqFPSW9PMLbneW7g3HnFgHsM2MJ",
  "key30": "2hXKpSjh83CLi7wLiuXyXEXW12zzzMmdbhiZHe5Ymwr535oZ1w6HXdnuEA2GqtZ3At32cqSaFhyCMibj1wMDYreq",
  "key31": "4F9tNheSr7cUyByg9isRevUwhst2BT8VisGkNFnSpRzjX8r9NhT8aJx4ESkQNPfW3bePAU47twNxdL934Fs9groG",
  "key32": "37io5V5iAknBEBHcwM4orBQCzAi9BEWyedDj4fzXnfcyrheGtaBEsVTwrnPWPCAJXHQQDcqZ9VQXDfDvaUEpESfG",
  "key33": "4EvxWetTxmEkqP6GWr8MnFgCEgG9AzEfhPEph4fetHojKu9FSQ9eHp2qxmyZporpjWbj4C2TWHj5wG1R7SZfMbaf",
  "key34": "61b48hiwz8mSXSP7uJ1wz3d2eyCbZEN8yrecExsHtniwEKPbPdBZTXjvvLMK18x1urbtFJjvVkNAeW9XRh19vbgV",
  "key35": "3awsGTAn8fnfseNWKdmHRZ5thTzSX1a1XYQ6yWdY6c79cLBvBxNgB5eR5rTwC8GyxekvxpYh8oAeE1hXDJX8ay3L",
  "key36": "3oBoDY4Dzyv9QFt4n6eL9gb73bYxhodVbsWZ7UTS6xTfYA7cLmLmYYt7wQDfuELY1nUaV5CCQc21xAJPK3ueUkNv",
  "key37": "GQFyBWei1Hm3H55KNENTsaHi64VJ1PqmdUVTQbbgknFxnVDtGTdh4z3KdZrryvv5NdRzTsTF2XVbPSJGbTimjYJ",
  "key38": "4AsWRRx8v3ERYMY4oeJF1KUn6ya5s9UFpSJJNp5JwzfQe4CW1K4LAfKJVaXA2UVr9iRiyccKyusprCN1u9uCyHpE",
  "key39": "3R1mSUVGQyHM7AaP6LqWbFqRPxcgo8CMECHB8sZK3XiWqN38fEjKEC3Uca6b5iJ5fhdtFiDAWkf2PaM5K52GJMJV",
  "key40": "2ygwGf6aBYoNx136p2M3f8qfdvcMsNdezoFZZPigBNyWQp7yPDeU5NAtc7DK5E3kukdiAN9mgKXyC7nngwJTddhj",
  "key41": "2NShsHJGu4khRrfKk5vsip12nyyzwKBVhE96iyP73QVFxRitNabrXxgNTP1iVGdvKMs89mfe1Tp5unUAoLWSfBJJ",
  "key42": "5DHr9yvGhaV9aFSf1Yrz81eimrWsQPV8yeBG5RfdjcQgP5rxwshT2w6FakyhN5qsogMM5VM3haRua8Y8DANDHrRv",
  "key43": "3cP4y2fez2XeR7hBkut88aR3jXBs45FpCPxFNmE417JzT6d4BUvqQDJce9n4xoTewHg5gMBqj15Kpn9t1Sw3Hb1s",
  "key44": "5EeNS1Qg4Jzbh5q3ewqNRDek4yHc6vvFWHknPs7CYoTYMkLqho4VfNWHKe83uGGGM1CnnedMroBtJvZBVJgV4Apy",
  "key45": "46PCRkKgxyaumNUjy8jpC4DR6pwtkvmWFmBimoQt8ZCuXKpSnsD9Xow83jD71PEDEeegSmvPrfBZjVzag8DavQou",
  "key46": "283JcXHsgHM3PqkERH7a8sXSgyVXYJz9Gjt3b7rLzGv8JemyP7qbLsZXFLJKmFH5MjbubsEMJqp65Smj6x4ZtHSq",
  "key47": "4KuSLhSe6oNAAevw6iytMt37o1yqzxSFs9oZjPrh68zkUywzJQvgEnf2bQGuQBRCVDnX47niZj86pT7xfpUR8UUq",
  "key48": "2Zk5jD3bEFgGPdbELCWxaLVBZ7upWCrNMqC9sCf3ZfHmyhSTPoKcLCoErqnkDe7Xr8E4coHrkhbGtSbiY2qWvn7C",
  "key49": "2ZKqorTHxoVEHm5bDonALXrqtZeXruEALGcx46pwcSJJER2jJnvEHo5xPpq1RfmKaz9SSPwoHSknU2Xhuyj5MN5S"
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
