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
    "AiCcfoahN9xSs8YcbXxftHSBgBp47Xn29mDkQFuMDP9KdZJfmX3kGne8siQnSdKpTEsaBKsZXBmtBdvNa3CC7gW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cS4dknYu8p3rcRjUCXiTo5v1SXVhyXQnmV2tP9wNwzgNZvLDtetiqCQ6gG5btATTjwBnTFdhTKJw2LPn3MVZtbs",
  "key1": "5m1bPjSRPZ6jXGHEv5kZ2M1BpXJ4bBbkuDM5ZjBS1jG6XCUDvimxQUWMXCs8Q4k1fNtTGJq6cnA3QDVdJV9eLyQA",
  "key2": "wqxMyfMbryYS3BNbQrpZmfDh7RUeCJpwXvj1rGhXqGsvbbZE5AKM5dTqqWtF3UVctjS6tFEJdfsuKrYG7oBu5eB",
  "key3": "5iqj7RmymYBkp8M2mJUHycALimNRZQ12YvHRWxciEPPFn7jFyTphL8uY6eAp4U1T4eTrB8coCYgTe5KzvmmVLKE9",
  "key4": "2iSahNLA5atpHtvMK82MjveYCCvUyUjJMLLgCZKeY1T1YYwwC8xGGLBfAY3yxC7iGGTmR91uxtiBC2D6a15p5sPv",
  "key5": "zKDuhdbuRWmvNw5ayRGUEpRrV6szn1Rn7rqeFfifSGQ5URhrevN7TQFJ6CvEcMnQef5hDMu1XCYdhbQ7Zrvk764",
  "key6": "3pQi99rwZjbosZCXzVWrPzyfHd4yWvThJJBjTJJtpxrdVPAqKKqMCj5o5wWvpDTu8nFmTVVqtG8dqGTVSJGZNTz",
  "key7": "4Nzjwh2Y7bsEnb3y4HC5RhjZdA9mmTKPQUrtDz8SMYHdBriPPaT59CPsMcaU92t7pqHY72cnBR3ecKHQ55fiUH6H",
  "key8": "3JU9WQbzweuXW5GUe1Kjxj2RUvh5FABRu374KiVd7rZKqwd1zLQn15NNzH5whtr3N6x9h3HTUSeFRgyj5SkNUrdt",
  "key9": "2vVJjsaR2aMnYpgZaXYsBxzAYmCehUYLVyRKSzXJMFCBAtaGKr8FhRNYFirtFzBMn6tpdGYQRoP5RsxFkKRHLp7f",
  "key10": "5GNNML5toGWKJkxGxegkGP7TB26NanXZpkBGEpQC7PApbzvSHsMkyrgqQ79z3ucfgbpU8qTVXAXkLfPxChCVuJBV",
  "key11": "5RWgynkYYaCxiw5DzmRz4RLY8rEHzjKnGmhatR284mXRUiPJ229P6vd2SM642ENkvBW3SrYHqgT7C5SDYZXimnZU",
  "key12": "3La68AX7n7b5HB8zgpK3DGhYFEhy84yJBnvQPJaJUHZYhDs6x2WbZFxdjEyvNCJTYXMhzime4zyGrMF8hLRAPxsb",
  "key13": "4AaFZKhoiJGLEiMzG2caHJvWJjMZqD7JMb49WdGxsXQaTqeMFKTKANvPBfcj7torrVaBuY83fnkFgHC1rUQnXZHv",
  "key14": "46GhztCHNdGH4J14twjqDsCiRHpMNYe6fiioa6ZwhBNfFdhiHCjgXgj5NXVwMdeLusgVwXqQ44mz98agFBcKgKoy",
  "key15": "5FdFrBt7ecnkVHtY3VZh9aon2h6s1HtWNkiN4iuYzPLbqw5VrMGkckxKzEhGt4sbKD9JR9wZUrxroKdCDq42zvZU",
  "key16": "4NtMr2kuFFnoEcfbGnbhz81sCYXFcjzv3MysiKYxGKn8iSp5vE57BTwC6mByxWvznGiSUc4m8Vckw8mQh3k3gAco",
  "key17": "4rzj5NbErfa9Gwh1k1hx8d3ppfyYEvzrqP1Wbphy68WmeKV9gaSHyUxRDEGQ8NNjPwZG8t2C9DvERNcc3fn6Y8we",
  "key18": "5i11a5S4xg94Esq7h2xNBKEycS5G8kC4akzRo3n87nhHC2JjHp8HvuLj1zEKiXujE1sx5fp3r89mkYCZoL7QJecK",
  "key19": "41BbhcsHQqMggVCq1Utg5DxsmnxsjU6nPdxmE7gE9DQbqSdCYUHMRqv5n992i6J15mLeDxMbjxsU2VPWPZnZnfxS",
  "key20": "VnedgH91onGaMvXYeyQLNDStXgTkvvJApMyY9a88f9s6cxTGUKr9Bzvei9Suc312Jy2wAuPWcjbo2EKaDgUQGFu",
  "key21": "mDQFozfpdERbmkFQY9aZyh5XaMZpFe8SDocfc46m8yj5SnBNjs7R7wvsrWZwvM8N4LjkjSAHW2Y5GLmAzR5kHcu",
  "key22": "5HSPCkgKaDLWvoC9bfJZ43mu1b65oJFEpB65Pi9YqYNPaHZ3grtXhW3pptFXKJFDhSFhU51FweeR7STJkmZZufEw",
  "key23": "a24QaM6pgaqY4ue3mYsRc7oiAxecYJL15FUoqymmaCqzbhBckzDUQHWa11CGcDAwCD8qzAEVsA7TxwPyQPCjLGw",
  "key24": "hzLmyzJkuPaVSuJVDEDK3Ho7LNBEmXg7b3ehxeNQBpCvbA8GQQZwRSpmgCUqnBFVbyk3NWp4vy7ypF9hEc1iZC9",
  "key25": "2eKtUwQTSesnhjem6SiuyEQr41bb6rWszcKgehXB2Fg9nWN61t4X7R9trDRrEAED2mozSqa8q4HAdNTca7HTKSJx",
  "key26": "3gbQs23SekXEW3GHhAffqJDjacR7NeeAjbgzhSJ85JLpkwUE1QVSRMqu5Pdh99JFKVKmVxW59A15KLCUtYVPcF4H",
  "key27": "fbE4DJcSMQPvDsbL5Axiq1ATmiuaC79FEJcJnPMuanHMJ37nnhBAX43nKq3jPjwYCZtWFoTEEemUbVCtARxvSDd",
  "key28": "5dxgiaNn1SfJeX7874nrjTpkCsiH2kW2kEVgWJzcdjgS1De25Z1oQs8GvVCsoEiuhXPU1EmoG1eb2ExPsRGJRoqf",
  "key29": "3ZhsuAKrr7pFXWBvoVwzFS7GT4d1XoQaDvPBHUR9aSNQCnVh7jXJ1XqXrzzQpSMwMcGE2qRXAsKKVAxYJZTucVv9",
  "key30": "24qq4XN4m9tuc58GAPTvqNHiqUJA4UTuVEBb17VZBAXH63Dh5xA7y8tiXQezeuFtf3UcDmkBnCoJw3EXhqSKJ8Gq",
  "key31": "3s3z73ZF97BgTfYMrWPvYeXBZBXePoJE3rnuhxiTH4B6LCaZp2nMdiy7noHZaXzq8sksz8GaEgryYyUmvh4cwmL3",
  "key32": "55HpZ4LcqruUtZrNT9de8zsZQGBTeNDZPhNUznFrrqiaSxhAScus7udwVk1VjxD6zbKP4dLuGDFQQEPbpb5d6JsK",
  "key33": "2bsUjvLakXibEJsCrtekfpx8usZ5ZvLSUXycGhXTH67rnfY4tKvoxNtET8Cb9pacsXtjEqCwHxsCiUZdtZ3v8C2x",
  "key34": "2mDHgKRyizGmZEQDVQV6fVkXszoKLnDvUemcgDwxpy2CHrQ3KqwjEKud7kt3JSQVqTnLQS57EdYSwCMvngjz4yCB",
  "key35": "wcfcN5oRdeu9BTgimo3JgzPRgPH14ZGGLQaxPVs97Z31SYPjZgn6FAdFtocwe7zh6NJUc6sjB4eGKa7qdRD1JmF"
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
