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
    "35R99em2mRpwuq7FQsNdmr49SiJSeuQQo1xuVYCZc1XVHy5cDLKdjdLTxnxuV73JFvTSURwkMa9ET4MErGoU3ucW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ufvpLgkPQ4v9J2GPcR6RVoezx9wmNTagwirKaFpunVWvotLFbYQwtxwt62Hgd8qobpZMxn5tudzwrgJC9Xh1zCC",
  "key1": "4ZxDCb3nm6RqH49KwZUNoWUQA9qxdPcLzmpfrpncZt82fVU2h3bT2KtNeTa6KhJb7EEmSwjByEWBQeovaDmJyQWS",
  "key2": "4uuQHZD7VBE6QFFPX3msk1x1fJU465NjXsYUecEanxeFwstrAzbULKRB6g7d2zFMbhdsnBFhL4PTX9aPbg2X9UEL",
  "key3": "5XsKYJwX7E3pCevKYNGWsdyFUgS3krobTAf6uKYd2zoJ58UYWqNbUuMyKxGarihxsAtCqinKPzWfUw5UkUSGu2ap",
  "key4": "3jsj5xaPdPHWiLSYGDBt5pEE2Qw45gFpehneqHaBsL1LVeC8KpwHBmKgWy5y9N57GZ5yX1ErprE4dwKKntB1wrCg",
  "key5": "5xeV6JwysZJ5tZCWCpaPUcFHS9eANYFKbpf4ecKCPGzxzjj8yd2p9JeD16CzWCBssKhUmtauiwWAyokqHGRj2hwV",
  "key6": "3Xf3YbPynmcos6K3rqiAsQRH7HrcUJiEBxznk79VQJPFEtGbnwvffmnuAJpvc2rM2HJ8vxe7cAtrXMN2g13RbYS3",
  "key7": "4S1eCakye7n2L6i3u2NfKWoDRNs4PKsh5NBxmrd9kbEoaT4KhJxkdTKATjoTHE5XmnR5gf6cLsEeuurorEBXqq4L",
  "key8": "57kGJR4Pyu9XJu5F3kEzBEmGNzmzX6Ldgrun9xhUw2fHXtrkE9azKARXYomUr97V68u3YypyDeFWEGQfcvtXCpP4",
  "key9": "5SXaJHX74oSfauJpKqgXiKQY767YUdfqxdjXPtc3GyCnxuP2RrZUH2i46H76n1tincgjpXkK9ohthvKdL52iTiiH",
  "key10": "2WYGuTUVtnMsTca1yxnmzuyda5PU2LxHAJeKk8RfvJo36nhqZVQCvK6F6a4xXXd1CJbHsEPrDL9pBPuzaLHyaKPA",
  "key11": "JiiqKCVzoYASLZmGbZ6zNASJ2aU7QKkxrnYwaE639GpdfUrhp4K8b2hr6y9AQts1ML2viQXpjCAQZxkAMKU553t",
  "key12": "5sBqG8LouHFKGAaw7qmwpPk3VZYsuYE1gKR7okWXyrg8BsNNoiK6JsGBMKVtgqJxNvivXmqaque6MsprXjmynm3k",
  "key13": "SwHYBMDsXpF1CqKVUtUvjruTZzrstbmqsfVpcb7zkqWCQY2h7F2cy74SehvbUTARkXBb2YoZKBqAr4zLYYUYrBC",
  "key14": "4jSxvBBSocbCfbEzGZtAXRYXxd2k3EJjDop9a7UuRfpRbAz6B7KiikzhPT33QTUjQqQiD9P2bTB743x7RboDkGCj",
  "key15": "4sSqXw7jeNsKcyxLfZowYEtLwNAR92qEVmQGNrVFvciQDwEnbbcGBthr8kb17Y6vZQZWaUQQNGVp1M5mb1N3G53j",
  "key16": "5dKPWuN8tTr6x6TkFb4uNRRZSFgz7LBU6W5Uj2JYPo2NNuF5YTsoDHgz1otL2miBLjtv7Kx9SvtbfTHasncuLjvp",
  "key17": "3q2JxqJf3v148bRroqRHmgLtjBHCAcjiDpNHYMsubRs3dLN8KJ2NwPAcCKmDf7dPqQMPufFRNALcvoYXJKGj1YDQ",
  "key18": "3AJ7otmAyDa97vRTfuhya1XYkePSf1gmn1jY5d2DVqmVyK2A3ZsW4yFAB1ygaodHJHbGpyQHi32gGQARdQyP7LsD",
  "key19": "5gETANhmhGzRdr1TMSLhVErxcReZwhe87jMRmxZdm2mwBcYq2hxqJvTLbSCbYrShY5jN2m1aPTD6ZKf9k1RgUUHB",
  "key20": "3vbu9gn4aiP2eMqZmUBaM6KwXHLdsPVigf1u7NZyDuFRTeSQ7rwgBjTUiAhxvQmk7w1LtRMp9uC74oWF8P4CGosM",
  "key21": "ZwBmhFc6FQan4DxxiTVYYoAo3YPLdgyMcamfgQ7dFcUVXUCi7FCL73bDt9DxPk5yYtwPq2xCfgzbq1SRCg1PJVH",
  "key22": "5AWGLcChi6zBwXQ6CxKv6sTk6nHtXxx9bbGzMFyaLFDP7CeZLS1rSgzzgrVXAxpYhTSebwa22VcBCCAraUUgLnu2",
  "key23": "3nYL9WaHsbjSrkJiuM4XeN4dtCSTB19Gu4h18FDSYRmNo58m59SUSFwyvAxY2U7fUKVR6sErqwCCnim7Baw6xD3Q",
  "key24": "2TPA2rZjKBKZcn8R2grKb3zBqXUQBbv4t1on7uVD88ppvH13BqfsFdSLNugyirx82wDqJEWiKq4ZKq4vg2GLNd2X",
  "key25": "44z4cnsLYra6XZqP5iY7RAJ3jxPcFXgZaSeEi1nU4StPs6VoVqdikT6YL4fwNpmL9JphhLWExiCYFN9xEy6YBny2",
  "key26": "4TC8GJ4z2TsnCgo7DWfMfVLNRZaMr49htmJtTNABSnzzETX6XdxXAtJwc3SMcV3eZZJGGH1Fsy1EmjcxwsMChD1z",
  "key27": "5oJuYt4AJwT8qpaGoxmWw8HcNeWGq9yLbHzhs9ohhWTsSmWBJr4i8izR1HXwEWTadLy3XDNw5j7kaDy1obmd96wr",
  "key28": "4GWVpBtvPLX96z7zLmAz3gRxStRc3DThai6HFLuyDDqgSruDgrDnFhYYgDJ2dETrr7VB1oGNPrSp5ojCHkYFmv4a",
  "key29": "2AWPcDuDKCBs38r9qu8mwWPfiHE8g6xuFi23WD7omWbZxVjJQhD6FSdVXVMktUNNfgBKityATjH7PUeH7V63xGQ9",
  "key30": "4XyHLft56ZC3quJ2tT2WqQLB1HqFEpdkLBQxZd7h5p1xrJK6VNXRfWLjrxewDqP6ovFjFjgCw2wdC4hBUSfkykaF",
  "key31": "5aMZ2w6HVS1ByiiaGqJ8Xz2oJgEGCSQv2747nmUNBmujo3XkQAjX4KSjyTaNZk64NaUxMH2pmqcennmdTacv7tuL",
  "key32": "336e1h2DERmfcjWa2U2x42GUdqkEBJSZRy3bEKSkZMJGwTE6Nz7QNumezNi9tpydPN56CP3kdonMuAp4sM6jqLCn",
  "key33": "53J7GFzbmTgVhqCC6qSbZCNriLkjxEQq6NFoCqSgzs93LqXoJTcV8zcY7u1yUxAXvd5U9aJc5Wykz1LV1pozhRoM",
  "key34": "61w73qB1dvKzbDtN82PAMYXB7o3bFnivLo3WTYx8bPYLv3bRcdnyBYMmcpXd14VGDZUMcPUN5DqdDmV7yGb4iRy7",
  "key35": "2PgNoUy1ECv2Q4C9WvThN4DQgxKHKsbd64mL1EUEcD1DQhQJti77WraX1nGmLqJoGiatna6BfvijKFmbqtJsJqJE",
  "key36": "4c6XWJRnJ8iPh1Cw68bKMoF6d8FwVhZoeUzzADKVyj7dZdNz86mq5zr9cbj1q4SgcLT6MDEGJN6jSNzXoT9wDQ6R",
  "key37": "timdAJN7j5jJ1Qn9mzD5WXF3FoA8NPPX5UhgE2Lp5tsWUUqH3j1a71rsyaMhxfx9s2Sn7BDP9KGWgg3eCduZAMY",
  "key38": "3CQum6KS8KyrZjYySKSNZyVGSnngupEYQbrV5sKDG3TR9PeLxtmABRY88E22Kbiq8D5g7FdtYktUATTWHBgniPgz",
  "key39": "53pvUuAvAsmD9VjJtYk1GL1pqjfbwBhpNWRqk2ox1zh5MC5V6rGpe9Fxp7haf8vYfpNzjBwm1gv7bDve9i6Jd5EE",
  "key40": "5wP1CP72pQ5DXYX9KUF12zqqEq4gwFeHxuVKH4orY8yeSZyzUCTu4jQrWL3fbGTaXMuXyvqfkfkjHNWYFTVp49Qr",
  "key41": "5h23EGrquKJWWrxVgUVe4u4xHUUXQ216TDes31ESkWPCw55u2AUttJCVzXjHqeUmYqe7XXRZtdn1WjBjBFjfYyoo",
  "key42": "5FPKPuuksbRo7i23Ck4aBxAgxz8HpUZtbQPZjn2rH5L6J3KExeP6Wmb17UW5PChMW3Uz8GsmE9PwLFUXGhCXKDzw",
  "key43": "5jZZQLWw23HJ6ZmsqvnVC3A6EtmjbzjPvuJvCWnPDNwgtdT1hntGkgcPfbb2uoj3sqd4iRs2ep1Xy2TiGB8mMgta",
  "key44": "SLWdtxnuBtymTwrvnxP8iQLjUEcFpy1SN4yPKP1MVsccz58bnbWuuUv8dV57kppqJzDUY99AewwM3wGJ2wrhMHX",
  "key45": "47NBFr6XXrPVx8R8n8xqhmmrrpszGZ2j5WcboMUMUcZSN96ta2FNZ74S5J2aLmHRQBmzVo9GKDoZ9PpgysKtAsLP",
  "key46": "31s8QtjPt1MdUKCmHwF6cqfR3mgrhTKY6Up2446f4GCW8CjqW8X3kdUbhgQ7y4XjznVDZLSpmY4DZ5bKk3PASPpS",
  "key47": "3NX3qrWiRdR1CtjiffEcyhLhDgXP1BjvKMLfirD65rfYf3rFT9t9VHmRxQ1yT5NwDiEpFAqgwnFUCWAaQayQT7aZ",
  "key48": "4nR6t9Y3ZjwoodbijvmNvD32JwU9io2eoTaw2JZzVBg41TLfFQMd4zgByyqoTTap9ra71A1vwpU6vyMwqzpESYQw",
  "key49": "3v4RXBGUjYxG2BWCKqjoPz9QbnSfHKtEz49WYYq1QULxuiMpCyUL28Wf1MGGjMvQsZCzDbeFc3BbgaKPPZfH3AuR"
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
