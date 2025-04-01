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
    "3VMULXdDSAPr183vEwXPWoZheJMynfShd5vWcLxwX5tjqCB5VpyRmqpQFvtqkX8DX81Px7DrwZBbPeRGYxCj9bXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pXJTxXHB8yVu7suJKpJBtLSDAtXf2JYZLrd52ZEvz4RGjEfqeHizoGckSjvnrp32MhNHYV8k4bfsyqjuqZibE4B",
  "key1": "P3koyTXvSGtnS3U9aDGtXVFEkFsWNuk6SEN764tCiR9CDHW6ZQW8D9BUjo5uGbjHQ4sSsBPeKxwoiJxRMfcT3WW",
  "key2": "MRpzBb3QwVmLoADr28ei49EqpUgzefB7WnyCB9haJ5ZqUMJSHSrFzFbonh2WAwFBBeEeuQG7cLKinzKfXxbPn2N",
  "key3": "ZeCA81C3LWZujgJFCF5rG52h4DLP6dy79Umi1t28H9Lh4notE6FzDymwcbwbTNp3M4tArcQdazNJW4iSSmYBkRk",
  "key4": "4i59LHin6ZJxirstkkTGrtWLPAXP4Aft7zdaoHv9y8jsWstryPnUY5ktokeaX5qTE3ZRzC75QpMbc3Cp2gGA9pQm",
  "key5": "56E4uQbiBq2gN1Qtjs9AWQaoE1HN86ZKBQrPpQwPxzFF7KgPzqj5N2eqKnNcYDdeKRbusKZBF76LZwoCKxQ74Xi9",
  "key6": "3f21qdbknuM5cHRqd76bUUvS2f82d7jq1B2fRcW6c9Hr3xZwQDgY7CJdJ2ptHWu4ujHqpAThSguR9ToEzCPZiCMX",
  "key7": "4HC9ZLEWx4hvXGh9UbFyPKMGTZtdceC8iH5GcsRqYWJYSXc9W2LvUcCXbbndcKhxE5gbjr3dZLvAGbE8EjeMsfjJ",
  "key8": "2UUbv4YxHixW3EwvBfkpj42b3tmvuwGJv2X6LpabkL43BfkEEf2ZdPycYvAxbHZZLGr7ipYCYkfP9xLokK7otFPL",
  "key9": "dw3om9bTz9HU3Vd7kr7Z3CDuLkh2TLF2bNzPVY51rRDZbdu7wvQ9afJdammk4h5iVHSK4QRXBmpP7S5ErBTqQA3",
  "key10": "2dTUS8PUrtBGtcpFqK8Hy9fu58MLx2RZ8Y8h8otdFngfnh6dJa1mJaBBDEfFFY1imFgTjZBBGn55BPJPgG9QYnnS",
  "key11": "36qKpC2XfBsjP58tq1w7Jp414KjyoCVvdCAT7kzr8B94JfUaPrfYFBAyD3oGCGiFzJZ2RN7MTwoj1jKCmjHoKaDB",
  "key12": "5HZxVSuXj51GJfq2vBgLumh9QGDGQoBY89R65cssLB38y7FEvvE5t4nbGjDBez7K662yeRMHPYnRiVsrVLxszGqC",
  "key13": "5FE6QJ8CQu7aMnSivyw8HqqJiDfybVvWK11Ld5P7YqDGF59YKYQ4ptG31sq6QWT3o4z3aDT5yxH7mcvqkinbJ9L7",
  "key14": "5sXub5xFLZ2uRhJfGaK1hRdGgVYWrkkZ3bbh76YL4nVNRCrpC2puie8ktDHvQHDWgACHCUMwktEDVT5EKNjLm3tS",
  "key15": "juBSVzYjUTGA369SsbCmt6PHgeoL1pyUv2EGcFNXTw98XKA4uykynMsEFZ4jQBQRC7wQhCQqVqDHmV7kgJBmXQ5",
  "key16": "5tdhMNPrTK4NnJ61N6r1FTE4R7Dxmbw3SXADwdir4MSgGMmdCzSguQKJ2Cq7VT7NEuBkMFBRoWHc3JgrX8feucpm",
  "key17": "2drUqzPmqxQBXSahwzvFemyb5pH1cpefzQzS1jo7oN6KhZ4rArR4XoxEhkjabjit5H6MmewKB8thZsjQBPxVK3K3",
  "key18": "3SZWEWzrodqBKYM7ebZ6TADgrUn7UBvWTY3KYqpx6iPu353GQtbG77gQh6kLLypzgfcCZgQgb7m8peUmrF4TjaAJ",
  "key19": "4d5xA9kW9xDyMBHp1XuPEfnouSx71zfsFkzTia5C9996bdbU3kCvja7TS8BTXBAvAyec3TGS711FqGyciPrzh9cW",
  "key20": "dxuwp7vu8mRLAuZvEphcVwDWMF2qwbgPuMc1PKMvsUmCGbzQQMoBePugLV8WXuFXfNbVzDEDCMZ3q4V3zQXyrRa",
  "key21": "26TF7GE9mpTnkykCexiManXDCdL2jtr5XhPcMJtJd791K7MWi7FDCAYqks2JaaeEpKnCFkSpw6rfUeb9g4iQoe1q",
  "key22": "3XFP3FdMrG7KKUhKu9xzqHUW6ypRedZ8BqrUKyxEcFepaD5inqWJKfhZf4cj7AsJF5eehgWu53HSNbCo5GuLd8V4",
  "key23": "4VX2EhPne19SdRQ28WrT5jZE2Kd2MDZqf8v84LurZRsuL8Eq7pPMVqRnqmjPg2keXbqWkTuifrma927CKbPifu7X",
  "key24": "4qk2NhY3uS9ajRk4cnBWNQPHj5crjKec588fJboMjRg4ENFY9Pxk3XmgkBtktWTsxn9xR38LG1Xi19p9etPmU1od",
  "key25": "3UCxZzGQdS78tqqBACmYpQYcrb4PH84oNSbtmRKVseSpD2ijEsCbMKtPWeLgYQKJsvS5BR2NqK1tLhHRnRjcKmMG",
  "key26": "3vFFGfZNZUSi69CWLq4EJ7racmcDQF68pR7jMP1L3sAQmEF3GQVTMiCR2PV23CVyqKVYahsbBkfg7svohp2pwGLR",
  "key27": "H1MHgWwp3u3VhwhjdToQGBypayDPX55DqVGoGzsQy9rFvbt81tDKrAnR3nhN7HGfZKN4wbAM3nGRyXgngfZjyqX",
  "key28": "2h6cQiCrqzvjk9AhAKQsUCXqLKuHgP33aZ3CuFAYLAyheDWEUgGsj99vejBWdYHr1GeLnqZdEvPKErerLtVHPiFv",
  "key29": "2cXE6g3nRNd6FDTB7hob9GXBsrcryH9KPdy8cij6GXtGoa2osPBhBE15S1KJ69vLdL1UyffDBvL8eseWk143LrVp",
  "key30": "2CjLvsC8J9hw21UXt9uZBhDXdL9sscYv2hcqpxQL4qNxBCPPyxaQP77QYy6qfLQqKwP7pjNYuPn34kdNrmyTigPe",
  "key31": "3BeJdzpWKhe5jGezSvuQAx5svuAF36z8ykjNZDvnskPUuDaTXqaouFMBdxUD131qp1WT8u7UhT33sBthPPU4ZVAD",
  "key32": "4TUhu2yCQbB2eb9YYnnSinJB7DVZ3eyD7NMUurjyPfQqkmzpZsdD6pwTUeRjcVpEsfej9EM2dkngL61HtrRk694a"
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
