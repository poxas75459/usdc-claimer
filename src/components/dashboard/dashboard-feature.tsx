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
    "2nfG7xsvPuDYgbe8K3eKMEEC5Y7rT4L4GARvbeWdo91f2TdtsBmYW3gC99r9VYiYtU2tsZPccP84ZYDWVPwWHkRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54rHFp1WxaHid4ahB7SfsgqUKeciQrwT1x4y3w7Wh3XCVW7xaWJfCBDMnjUmpjBzFuT5JDyDC79UsARzd13Jeaap",
  "key1": "3B31gy7Sh1DHiH7JMiYbA4tCvibc6NcjASBQjbhYp8iEV4nssT3HZKDLg5jbvSixxMdbmbiYerxmX5wsF1rkZAbp",
  "key2": "395S6zcd2GjLvsH9RptwF5rtRvgg5pJHL9L3MCs6kvg5fhHpwsPZ5qB9q8HN5iaLsQP36pgBo8MBhrrmB562mfx",
  "key3": "6XjCw5bSEZyYdwM9qVPA49MkRMeTCQrzHzE4xrTpx7c9ausVjnG1p6ZD8MFMbfdVoMchyBiNDinSsmrhpDrWkWq",
  "key4": "3mbsawDw6eqfbGpZdVT5Erudkk9dEYtEw2S1MSPiveMDxixXtRQcwDKY4wvt5SnLsJhzouuAYsbNbH9ykvUy1pX3",
  "key5": "2EzU3JkCVmEGTqDjjB1EtnajMV7kasztiwWFThffc8Msmwx87jDEe65S3L9eWtovpKdGKWFrY8pJczcLP5BJzV4G",
  "key6": "2eiUHqspMh4weeKKPBFc4N4XJuJ7ZkrdxZRrxaoFVFLxg5FPwxErjNdS4hmD4Q4wjasAeqU4JL5qhjgdjmhr489N",
  "key7": "4xoTVSzYtJK1piCkgd4QrJYWEPDz4R1bvMz9wpewFCtRAvh4W9uFrox5BQoRfRAmp4gUTjuxnqEf6gymA8LbL2px",
  "key8": "SwSup2J1V8UMc43bjLc4NUkwkjnqaQMrkFtKy6wKopQQ8VTNmi98aVPeQM2YaBCXRmtuYkWtg7tP1TcYZbCCDoB",
  "key9": "PNm37DV46Qeamgf7P9NLJhcWZpG5W6XSWbgimXqKLpEa2puuJKRJ4cw8NB2JGG3xn9ZADwJPxhAEXfPkQyL2zMs",
  "key10": "3kks5Xp1S6XKWD8YTL3VBLAa1Ezg5er2eAFbvp7hN5twWRbciSdnahCrYfJb8Up2Uzrpdos3cgUoFfQUpDuWttBJ",
  "key11": "2mmGvb7XmmK6XcjPdZ7cZuKPyeA71HxYES51wBR9ZJjJ2xD2rXAMJAaEr4gVnu26psiC4qpHMzEnHwcr24ykNK11",
  "key12": "LFX46jFsuLacWU1cWEsHUXqTg54PT1SEFuaoS8U25Ud68tEUDTvVMBq1Xdd9ejfzAVbZMW1gDfYEHRC7EA7zcCV",
  "key13": "4qY9ZmzDEPvHSUgxg4zUwnSkm6DyWQP5Jz9o3ieDwLfxC9q1YcsUPWACnMzn9MVLrM7T2iA2fTa9PAEq78K1WmGV",
  "key14": "Mtd7kZCb17Vd9Rn9wUB2ygEWstakUfWWNsK1fKB6ixc21SsTzMTAGUFRzbZ1WvTC1cBuv6MMZ8ABss2KLRjBdty",
  "key15": "2vcFcPzt5iMo8btG3oU7eUm1tsFu2CjCT6ijJ5dPS5eU61PQ9SkUVKtofg1hCPFawT3n8snfXMBy5JmEyDmE7UNy",
  "key16": "4oXy6FMRhYGR1qpFx7U7YNrr5fQvSRcPdHE1VLnRsT7y5eVs6w5RDpy75JJT2WMsep9vJqxBZMZP7suNNLY8oBtL",
  "key17": "42zBJFr3ryoSkstgcy6ZqG7w7XEXeyBfTbEtLcRgmocdhVueX3MrcTkrb5HHycb6fvo5RkCy2y6rPzHJniAvrUGj",
  "key18": "4p4eMiVvbxmkao2qoK9ACZeZhoLu1bSQueMqzHtUuFrr9s67fJFE2swrpEJQhD1ufqL1rzAxLZnQMKJiadx6JEpR",
  "key19": "4U7mfUJj8AsvYSd7pJqA1vRk3KGBmGZGNT3KPuoTp5NZ6spMceacNkVNFZQ5XaK1FB335uRx48JR2nMUsxJUr5dX",
  "key20": "56wNqxrpJEegg3Zqf7iVpbeyqeQma5gRweFKYY8uBPtxvm5NbCQ9dnsWurSW8KbzcPdqE4zEmr2QBpK4QmpDyqJv",
  "key21": "4hfFeoraCBD82MzEJBu65G2zZUqrcS3jYR8PDo1Vk3jZZLVsy9gRRk1HburMosa7GWa3JtP1E1SKLhr22ebNrzaF",
  "key22": "2ofFco55MkQvivVTxozWZ2u9mmge9LVVEGPfqGwt6TvVK6QP5Hu63YKpS9uXc9zaD3SitaPaSWBbH7MVfSQ51pAw",
  "key23": "64iuPQ5EVtJZm4f4RqULFFZW3EZVoDovLwYhys6dA9f4ib6EDrH9BfKDh7591ooTiMFtCZ5VscHSqVXia7q7X2wd",
  "key24": "3E3nAPUWJaAtxN8rGHoRndtctjmiFx4zu5tF4gwDL1iZhVacEdJs13zqAzWPbPpSSv55nrnjnqrXu7U1nk1cC4Cj",
  "key25": "vnXHYVcqXMwirg7uCRKqYgeZnsQktb9nee5hHpjffJJ5D3wkxNAfn2oUa7Z85pjaiZZ71HfReFBcampySXx8P51",
  "key26": "3hnRLGUiAqJ14DRbyufBVZjJP8E9w6uccqHduvzB4RgoVpM1jib65w5mGg2Uxty6kYbPaGWXCm7if7PWZYL7VmoN",
  "key27": "5SZQ5cCRhkp55uGG9w9FZm8qj8Tkkm7DYoQ2LTNZc7CQTsrkUo49uGotKc4omggyznNccKhWTJ2XPjmqwgTQ4hFV",
  "key28": "4EMpmz3hj56W5rzYxdiiQnXVK4QmKMsZ7GCDLg5vmRecAqf1Z7s2vE38thso8iYm533HceS3DxZjAJQcyfNj1rRw",
  "key29": "5NUuc3rsB1GxEVFbuFKZa26LwbKhPidjYKSSTSjXkzaJjB6zPdddMX5gLeZwdjX9rYb9aoboHNxH5SzawvNNnkNr",
  "key30": "a4Y16KDB7oxxMQDecejYGWZzhXWFVZ3qy9YunWdZrZuuSdRxBhmNRMJpZMgFzWGWNALi3PMkvJqQC5TrXdGX7ef",
  "key31": "PNM7LfxJTnSUKazoubXx9Q4eSVQF2DapfiX9916F85tT1iY35GZM7D4dr591VpBzMS1cruzGgUi1r1tdYjyCmJM",
  "key32": "5YWcv5LE8ojy9bxDJYXKYWYJyB2gHAQKM6fEyL6YZpz6jANEz5PYFHtV75ffY5C1A7AvDEU1BKqNcgxS9kcp9LUS"
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
