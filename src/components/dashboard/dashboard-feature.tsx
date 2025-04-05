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
    "3DnYrPRMsLnMYujc9PkRVPnBk4a4UHHaceQ1D6M1qfBeyFC8JkA7ewB334bxHigJAXeD53NTr3dUCw3WSDH8c2Bm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D3HF2kw3oXQ3FsQJW8Z9SaZrPjkQo1kguN1Z7zA6N8xkzcjhTMeYefXiEkpV3zxUJv5BvkgFAGbmhcB5E2RTNsD",
  "key1": "5SykbKPQLvfvmFuzDb5RWNwC3aMK6RdLGHrwphoaAGAnreSw76UbbWjLBBSWs6qdhbb1pwNrwwgFQwngn4SV3ctN",
  "key2": "3rwcmeYpk2qkijsoV7b9QRtMq7QBXUJFpk8RyWESYLSdUvxT6jBmfHWPh4s4urq1G2CGHJrwpZ9ZWG9zJ4MYqQxY",
  "key3": "3M2JAtVqsgapNSzHTYoET1wzkvAyRyaCy3Y5iv73cedGonpnKgz9iCZRsSeftmUi6ifhfmx4XrjNKCBDayfidL6r",
  "key4": "5fzwSYuEgTm5dkSWNzLSzsabEbyAh6pYZFt1r56b3RccQDaJxDYC7xExMvRg8naFPZGaVvMe24wsD2S1hDePohNN",
  "key5": "n7RF3t5KoXGV4cGHgYRjyp11kCwEaPDqJygfNZfY7va77v5vMUHkt78dgzTxPKGkzNwnTXvF2NbqRiVMeSiMy6T",
  "key6": "PzvpFLdJngZEwer45W4iH8BDRFLLa6N7Kxu7rzsCoeHGpQb1y4AiJQajadKPiLD8fH2Sv4FW5fWZLQcGW8TEtQ2",
  "key7": "2FHkCZCxXVoveCMK5W7qasnXy8q2VxUhRHARfQWfqzTXE6nxbJ8kaMwExeR56myoiSkuEetZJkjzg3GC9aoEUXB8",
  "key8": "5uYdLTwNiqmKEFL7JVyC5hz4qUiPbZb7L6qoRFYSN4pXRoa98KY3XnUQ7JH1uT8furC6D67W3VnQ2cfb7AFxCP83",
  "key9": "2Rj3YdHmUVLeRsupzh3Y4RHLf2cjEFABK775RCjNiSSjJwocUh6zfavyYbxTww7iLSGKhJTy7H6SVFcoF9djFzxq",
  "key10": "3iVPj1E19A5BSLVi2sf28zTBGciD2ALGAgmKcmWaNyHVJrVrGZEa1ELdpn3CLTFfsGXK42NNZCcV2HmAogpw8X92",
  "key11": "4FFURG8ounnUvtVBajz41gnp3AADka3J4GBe418x3khRiaCnoAGkNmo3KJQiDX96gt7wNu4hbNTGb8mUcTTmGpr6",
  "key12": "2XZCyUKawobMDFSudGHHPdhVv1P5cp1jxX61vRfWVRvUUSqo8Lkec9JCSGpdxzPTQdEAbc1kFudcCPq29h7fbeL3",
  "key13": "4BnwKKHbP6fruT5hbZ6Am6zBHgZcxZGriu3wwiRD2pDRQj6VcsbLjMX6oHAwf1Q2aubLAbcd3Pn617WeSMRwnzGu",
  "key14": "5vXE4yCiCRNvpx6JVdsFE6sm5GkYbueNzzGb1H1vydYkmqvFQ2MvWLs8gWxfwtH4J7C8EWVNrrv31dwAvMW1Si2Y",
  "key15": "65BvnXswmva4LZYbNh4Y5wfMRqe9GPe2huXLHykX1uqokVxDPhUina3fJNFVYa8ueFvAmnpqtxsrqWxAk6eCeThJ",
  "key16": "5HmsYSjBjmWLmuv4pTPipHdHYGZxJmNNpnvSsn4QfvmscE2GoccqdEgjWvZSFPDVgbXBmJTNEZxTKqY4YUMytu9i",
  "key17": "23qnt9hNY1tum5efUfHxW16UuidDHYHm4qpSGQYWcCYnyum1whRvdBNkjHiQXtUyd9N7hk2YPJH2jfvhXymnCg7S",
  "key18": "2iV6o8NifxkRYNhGm4uVhprheh7uSQgy4Jh4AYLYYWuPUasod588nQ6GaWnQ62TsDvStY7XF3kK312x3gQcXApwF",
  "key19": "213mqsvKiuxgDhcCgdS9NvsSFCc2BRCzJRE5fbiYRgiex5kDeCVjiHaU5RKqnqiMWwdqyqSC9VoAuX4t6XvJo5cJ",
  "key20": "WEJTJdt168vR8XjmUmg8xuhufd6tHic6fJhbqVzFQZdBFVvBtJTPk2wwHu1jQiBgD31kcaio3dNihvcMEZnRfG8",
  "key21": "TZmMQ8J9yhqkBZ8Z9Vjm3ZUTYJWREFLGyJE2dQagywjuBUP3oM953GSLRdxB59pm989Rfpsz3dgvn2uy5gEGGam",
  "key22": "4ZH9NJbUjQxu73Y8CzEn7YFJmK2EHqMCtoyCSEVAkPysdBgKQo6umsM3tDeZYcpAukgk3HZYuJRYkbahwp9eo9Uh",
  "key23": "4W6vUze5XitjmSqShPRnsb6L69P6eD99iG6noVyDtB3nDJfJJN2ZqTQW7ZvRwcxxuKV6BqoBmnAL5RvTb8MQtQzQ",
  "key24": "3Fg25qTRF8brrCJnMf6iULM5dCit87fJyh8WvgjEhYZB82Keh9mgoTZVXWyah7wrnQhv2q5r8HiEkCKnbocBNhQG",
  "key25": "GyBhTgke67RoQEE6szEvePSZ44io2VqmKhz3HifiHi2TufVuvjN8ptLYJUDTRcuWsVPCvpPZG6Eet4V4aAQHHue",
  "key26": "4HRUMwmGCX42YXXyP5gNgfesrdKD5t8s4ugLbF3DJKUjVWxRAVzcw2nz2ZZoRtkjdeZwaRLP5M12VxCV3rgxfGAx",
  "key27": "4sJpXhRdz4K7tXgC3RpgMc58feVaPUbNKs4UmaE85B8eEdY3igUDqFnfjEYndZzoV2EBQraGPv7Fq159o8F3U3K",
  "key28": "hdT33QZXoNbRH3RJCD1uGcLMen1PGfbPSaSASk1huun4dZ2sXxpvsmtPAjfTH5sh3yFMFwKy35th8UQAqM2e4zn",
  "key29": "5J3rEXXmPw9w8uajjAqWD1WbsrDRjPFnLCGPoWPn54jLmX8KrtiNjp8ECW5TuqqbYd7HGifrdess4Je8moRiWrnr",
  "key30": "22f1SA7FWuwYgokSuUyRbZUKyvhWEQb4eGphxcREKK3AiQpiWf5CiVLUcsvNSL2cWdT3hgk5sA4D1jZUPQcV3voX",
  "key31": "5SEw4h5Rgx81fxE2RKnHE7qSH9iyZGaTJQr9sDw7cT1MCWaiGHvHiPJXdKFyxH28DWsgBf9eQ1p9sRZZxJRtyjCg",
  "key32": "mnjB461rsHCiBwNdQyF9waY84rDgzazqPVnJx9XLHJVt3gj4tU1kZpkBzWRnovj3jdAmDokSE6LbuZHwdvfUo3D",
  "key33": "3EQCLGHaY7QiMYSTHLYAN8zUhDtXbsRTiQnACr6kqMcD871sQDFUMrpjoxiqXmFcGwTceMiToWkHTkgzuFZownGK",
  "key34": "65zbayMN8xLtVVc8oCT4pJJjVEiN7TM7oLaUR3JuNWpdBxN2wwTFpo4ugYFZvdr8JQARUbLfPU3amDZHUd8KCArS",
  "key35": "5k331122y3XKssUoymhW5CLwjFnLUo8Z5xT9M8aHU7oQdEGr23bmqTtJaeTfCXHNJuYeheQyJztb6gujAvHRRGUg",
  "key36": "4UEGA99cdsK2KQxWE1L7AYHUq8jVSyVMJLAYdNd9bDhgU5TsTskCbRTXygDRjokCMFijypjdBqHZGstSms8kkbtz",
  "key37": "3S4JtcMUt7wxC5LTSabCd2mQcZ8fedLTRe427trjbAV89HvMKtFcsZeZVnkA27NKzUdA9mfE16VwmZRGycJ9XdDx",
  "key38": "5MCuNBSV4WgYVptNh2uP1ajr6a5S1kguHso4j9ZLdH3ySvEG7RRdhy7VtP54XKCPV7FRmwvUsAWVAuF5kZ6HnavU",
  "key39": "4bqahGbXjEXR9y57MteURfM7gDH2LgGqe7CWjL2dYzLjtc2zZP8R2bqMkV4sdxNsiYVBBH5N7zCeL2Nk5MwYrDGn",
  "key40": "3pqX8TVeBPvJJcfjD7Smqvvmy4WTgiYJtGDT59QECMrgVHjQVfmwpVK1DBgrr4cJKBTSygABqhJcE9Vpn88cj2ov"
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
