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
    "HDBnXMuTm9wKTP8CiU8ftKw3LPnFzRsJHnVrqYJxBatsJ7BTXJQ9DQvHe7vUPXVue1fQwMzTR76EHQ5PmQwKbPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eT8r5sw5gBcuxdMKPSFEGHL5u4bN3GhpDJLdWGPpDJo2AyDf5nSkxE3DuZ7wTGeEscH6ZZUmk4jUtbEsddh1iBQ",
  "key1": "5P8sEHxuTGuH6sSgTYhWquhrztH7SjDyYYdypwu1QJkHJHcQMBaaiVJSfb38mn4RuvcL8Ui6m3aiPmKrutzLnxDC",
  "key2": "3imCqpiAkGuoqM7eYDrxHYEGhtTyQt659DjptZUrVxbbaGb11yi7P5rDZB3DqRnU7DxQDnECRUYT5Q8PdKzYQyiC",
  "key3": "4sp6FDQWWuRNt2kq3GDUhwmskDifVDnXq3pqFkfvT3c4biZmUabaiwMYvn6pQGzarYn75VQGh2VVB8T74MVNugf3",
  "key4": "3X5b3Jo97nGsinSVAekn2LkZrgJLYaSb3DxkqURubzP2DGMYuqLuxxyPpZConobcggJKhUjztHaBfU6RPUiBH65L",
  "key5": "4uoRdabWGzwviBv82VvKLM1Qap1jkkiKEGsxbCy4QKrRWrAQY6kxrYLnvv46BmJgEBUfQr29CQhHeK1o3hd35t6T",
  "key6": "5kYyVHr5QaH6ZmDW7y61LGn6YyLyeNmVGiTA2M1iaZJcaTABfRFc9fLppq2Ttp6kcsKA6XB7QhJMJgHmDED8TUZQ",
  "key7": "ASLViVF3bTqzrHxrE4hkTogNeE4dFeVSZQ1pPVo4CvNgyKYdkDirMEQSfwP1t8mKXX1H9YKc2LcjovcQ4iaJCK9",
  "key8": "BpsVQdCTPQZi84aezCaZewsaCxv7JxgWY4cnnJTJn8Q5g9MEVP6VBsnjGd4QmhDrMkruqBjfDQZmroLF8TNWsrw",
  "key9": "5NpBo47YHgGUYyNeh8oUCoVcsvuy25yRgtTinhYz5mL2ohYxLMNwtNKXqUd58mCoJSmi2FT944r2zicy6JYETuPW",
  "key10": "2M9DzJ8dNhcCrTAXbSt4EH44MvueXaBzWeTbEMLrDuwoba3MtJ2vQXFUubkM3FGhvMQ1N9fuuiEJLfC5Hg565L9k",
  "key11": "3nZHM8mGXkrECBSfaRyRsefJAvcuPgnwP4KmK6GYQa3zLw3ZpQx8ubVkAucTMveyW3nS9knWrDcM82gbfHJvaFnS",
  "key12": "2F8rjCBhJWLyWji2s1C7YNJGJm2Jm2TYcZbDP9ihgddRnCk7Z7Vowj286tNZrSQPW3Ndh9jydahjiLgcmDe3HA7",
  "key13": "2UGWdj7LHM3mdixUBCxSkwxukyZjjbfc86rW6bRfvMz6pQGJAA3EPcadMZisbxotSxbvAvwknQSkzKUtV5jzDhB2",
  "key14": "5ooCaPxcJxA6BujCvVYxjrAqDzf4FHDYJMym1r84RWKRf36J5CyD5gM4kf3Cynu4WjN4HWB26rz5MTtJjZQQ5xZu",
  "key15": "3pPBeZqoYWiUbwtzborVJTpDgRsSpxJXqmy18h1FuzDLjHexrC8ooKn7zdzyCjvN8pNY6to9hJeoExDwZE3ybeQM",
  "key16": "3291kexqzHECoVKoRDWLsrTg7AfLk2Gft2BHYZXaAGMYkbDVtuRVXxan1bshmLr87viJVfNdWCGMAFjMSg8tKPKB",
  "key17": "5njNiRQd6zV1TyFeE4VzNL2GYxREywfynnJLSvLH2g6nYdV1xHMgFgVDLdeNcSexVqwvoE2rx3BPmsMf4u2KC6ZT",
  "key18": "3itYDzbE4fno6BjDSbXz1z4yHgpXEbHGbqJxCoWGJ11ySgC4BmUhAm6GcaR1JJB9jj4UopPPLwR29nrsqtem1S2D",
  "key19": "5VQe4JHRCS52jhBXe18HX6L9DUZdmkZpqL6wnKo456SaxWXMScherTAZnJidajFGqY4RzgUKQb44UZZ2tNV9Wovy",
  "key20": "4DN7rqr4UpypsE4C43sW44ChFdWHkJsvN3sHqMcaMHgH2XqQVqewQpiEscGjPk8bCYdkNmXiQkUceF2Pyg3meYTf",
  "key21": "2fwMs6nmQrSNvaTYf9x8eXu9tbuiRyCknRBUAEyh8o8zChkELXz8vJGErnqNVXmCZZuWEnGrXhXRSyhUb75YXnX",
  "key22": "5QHZ2K5ygpQDyVk4HEfaqrxr3h7zckFcaYjTtf8uLi79fF8M38XXoBK7btsy9ShFaJJMU11phHfBFePCcBFY8oQF",
  "key23": "49hqEwEyWoivgLZedfCztqYmRttPDeG4ffpkCvD3qU2U35CD3YDiGtMXaxTfeG4Guobax69yEXGv3cnYQss9Eo6Y",
  "key24": "4a8Rx6vMwdpfzHXGFUWwDJAG1X4jHtQtryq5tjqcJnYQv6emCmcAfokwhj4ns6oCXtruNhYK4kLKUtSDqsSLWMtF",
  "key25": "2rpUdTdFsmjnWCajPuaVJgcG4YMReAQxZGr94CQiJxXBcg5hsYmvr4qog1DSYAdU8ivNsjcZVtU1ErGvrCDdMQeu",
  "key26": "Mx9Qb4nxsbbcDhiSjbSimixoxdrGJMfJsnqoadxn1cLDVman2c5y6dC4dWrifaMgbe8LM42J2WGWnnYTXTXVVkh",
  "key27": "5SsPtP33RDChDnvNe4fZEKuapYK6ZiE6yoiDCNzuhFhwCEphgEU5qQRnscGbco2xopH66499xrPqco9FpXQz1Quv",
  "key28": "5esmgtKP1QNgTCF3qfH1LEyuTRrWrmLvUNQDTxV3hZEgSR4vKTJeidFuDGXKZrm9gKoigmBj8Aiuxh3w8X2WdH1p",
  "key29": "4uU4UDjtpv2rdwVxSfYwhVPsKqRckLXyZZ3qu1unC4r8QXNcnTV9MtzEwsmYu3iu6rKaXrQPYj8KskuNAS93Bsvz",
  "key30": "4N8qtp9SNeHZV9hyjUJyUkyGBVPjRDtYQ7fWWE4Mf4e1HwCf4bifVHeEZmdB2swFVP9rpeVoKwRb1QBdCbFrzuZs",
  "key31": "5QiNEBjYNLbr6SajhpwauWxxjw2FuLzkUdtprrqz2oeNTjnStsnQb2wetg6UPG2PJ9X4qozK7a636K333ctcoHxw",
  "key32": "3eCFjc43Ey6JfSyV9JV6ap5Y9K3gL4CjJjama9HmcrB9Nff7poXG4n43g1mnZEkD1NPTQNRmRktJ3SKVLQMuGLpd",
  "key33": "321sh9kvnEgnPUxEYsBCE4qjESeJW7dC59hmkJYtxgXFLq6CWy4V2BScCB56a7K3CrDVWAZrzZyHGNMRD8S3EEsk",
  "key34": "2ZiZaWxYzM4p8nJMfzjLcG6p6MXBKYF1ET1JfYs5yGcgBjZ9rXi68s6XGtCjWKzLRx4bUi7P53ioJuY4d6ARLemA",
  "key35": "4pNUnCpTbnCKHjrnFw8XojxZpr4YVEshbyW5KUsRyanDixLZW7ThMRK9eyFxxDwcA9vRVjRviY3Q1qYA2rT4Spju",
  "key36": "35U7mScqQ5Ki3PBttSan1dThPuHnFteY24dYC54gmYNCy1Psk5zmf8UDMc8GLfABtgF91ZGE8qeNaicNGxS7CuvU",
  "key37": "3eQRx6tN3RRPhU5oMcZ81PdvNQQv11qZDurjjtrSxa59XeQH1RgYYHc8RkTM1G5dhPnih6aQrm1UdyXpYEnmfPuG",
  "key38": "2sYJRN7wzZbqA6HiJBPafspe2CW12M5kv28sdkCKWKvWSmzpinU89zq8AzCmbhpQhJuHjTZERaHakiVo6DkxMJ9a",
  "key39": "5nacNgufvYZweitiiU63ohNsGXvTyY5z2ytaMzTr7cSVLvYCdWNoPpENw8Py5Fzf4vMKvtLa8AfSWXKkSLXy77DS",
  "key40": "4WWXSd6pPwMSPn1sWiaXtqSwGwFga9J9DZevbTtncbkCg7yg58vHKx1ZX9mFVdQ2U59Y8BH3kUyhtihJab1tX9rz",
  "key41": "2pgb7CmSyZefVJk8sMNiQUbdAFMP7soGHXFksGUi6NTnQzJijRo1ofwh83E4YbhbnjxBrmH9vgLgQzqxmKNztuZc"
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
