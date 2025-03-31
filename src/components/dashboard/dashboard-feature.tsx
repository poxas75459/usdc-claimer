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
    "ZuFKftG2iBSPjD4ebRy6piftBdQD1jigkz2h4xabtVHBvLttGorno6r2YmZH2ungrqgSAAw4uzN6gKZmenKUbbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c8zBjCHZAs3RbeoPJTkNCGBWttRdjjEH4dXByjP97NkvoPFLetjfGchpZgWyMVDRPn72TGshPXZUJf2HwpDDBZp",
  "key1": "4zV9VfQXCREARSAb37YWgDHEnP5t3EwZpYKb1tHikCyCdDn7TDFmfjUjJuPvvYDUeUrsDV5E24qRSEJg6xjC1jvL",
  "key2": "4p3E25j8psBjNoUZQ17VML1Eyx42z67Sd7Qh6X8pV82ufLxQh8W2CpBj6Qtuiia6v8j1zQgLd3D7SSjMY6uRPe3x",
  "key3": "Zp8mWbfoiBZswEE621JTWcYYSYGWZjnyNo89fRUuncnCYhu9DtFYr849S79rT75uWuwLXB2W4qihAMVtfzorHYL",
  "key4": "2a5XCyxtyufVsAqzWEAH38rYyjqAY17MLMhB6oQ5C9vWABhUnWAoB4wLP9CdMXkhBVNXC8ZyfSPfmfCCSLVuBZjP",
  "key5": "4QbWB6fc3pHUVcFuUaKu6w8c4w2we1SwmofPMh5UgAQ996nMMtHjUvpq9mvfrhQksiMUSMHkDarNG4am5hWMvpb2",
  "key6": "5DtSkQs7CMfDB69GvnSwBErwChts6FNWGzJG6YfVubZxnwKWSXcawpReAXAauo3vTCDAiHetpUbgLF76YvKCp77R",
  "key7": "4N5d9ermYzxGdpaWAYzVNYD5NFY9VVSQ6YSqkYHqgL3xBP7UQjLGTTj2PWFz9y9amUiA1CNF5238y8KypEySYf3g",
  "key8": "NGwHbv7oTgbk8pttAhxf1pTpdZoT2WxjFXvScFr1px4FTjxuTb6514iRHXAj7eupjLXu5QkWS7yVYNB9MATaAJH",
  "key9": "2Unak8SeH75UGoE9ffbad2d4DajbkWxes4bq66XKHDFmfkj8qd7d8k5dup8nRrezGU2u85DntbmzVojpaLndptD2",
  "key10": "4vfEzugsPeocjhhoBmkZbNynmXBihnTGzsNsKQ4NcXm9vctWN5TtVEpFBEWZdQwn4vxBXVNvQR1mDGrdM8g7cmb2",
  "key11": "YNBr3KR5nYobJZRv29pmT8JF5QWdtmWFHdYwsvnPnyUWHJJG6kcFX7e3yRh8FKmJs75t3N32RZM5ggnZqpnTivi",
  "key12": "3wr9fbrgKtgB8kXzhxiW65qmcJ6ePRgMb6oU3yoPrgRS66a51VwG1APBjmgEMYS2cnTnqR6gXLSKA4VT69mJVat1",
  "key13": "5RpmUSopA3CBKKaY9ZAZQ87BtKrMvSoC3doea99KWc22EVm3wsUHmssACp5c4yG4Qa5BLbekFkQQeJamJG5PhewJ",
  "key14": "4HVPXoUq5Lpf3Fn9VztbEsytiZGD3MFEP8dPicw5rwqEgyhJRLhnoLusR4gRwNGu7TfruaXKQm6UGTZzYch5pbZZ",
  "key15": "3BgGoBeftiLWRYoB3fsS8QEJcjTUPk7To8ed6BNeURKV1j5a8m6LBZgcVYUR53knLeQF4RsrfscK5ndhrLjbginC",
  "key16": "XNNih44yrcH9U8kS23aCT7EUHtftsBjX3jSzaPpTCqBDGxofSJ14inLrrZLqfzKS9BLz15wmej9hiqFycJijzkz",
  "key17": "2r1pKERkHs7yzo1pgd3GdV2FijkurKh6EACVkecDEYCBxNCpuooTt9Ef6PSLjNHA38XxcYny1KfWEHWeDiD2vHZt",
  "key18": "5R6nzrmzd6DneG2fzMrE2PnuVgxaA862C5XrmXJDFHecCwsEGQ2YNvonZ72NL78qXibjCiL4WKtyZGZ56MEyBeNo",
  "key19": "2BkF33jZN8VT9tmou6bjagQwBEmjmgwuZfsfqFdYzai48iEQT2L1ie3ogqcXoxvVi6d1sBcsqCnBNRdaKsyX9w32",
  "key20": "21VpmnFGDqoskM1TMSpAUGqZjdBfoA3KZTpyDRpvaQnKyPT5pTwfazqpKJCxKa5huDBJRVzXF7gQzYUb4ZnpYw8V",
  "key21": "2UCjup2QLWTb8vj3d4GfgPbYsYrJqUWAE7mAuHxJ3n7w3kKBV3H8jvRymAB6LnvrzVgcn2g6BRZxSjQ7S6Dg8Q3q",
  "key22": "5Q8xQJJVj2FUCHpy6RyxLrh65KnAnJ6nfG43xQhK9VU3YvNd1yxMFnz5pioQegVzGhine2DiF75RT55MNgqXZzY2",
  "key23": "59K53x3VUGo8UX7msGKrCrxoSJVGPkpVTP5fRBMZCpAJSwQVFWKtNSqGt75B8nK2T2SYzJs11Hcqj23r9ZRa785N",
  "key24": "4ps8oNReYDjWQNDq1ymRzCWLRsbMHynQ7UUdEub5d81LhC61qCShoYo3cz5sPQDDdachaquRNRg1JRAKA8REcJFE",
  "key25": "Wk7BUcDXDjqqs5ixDWv6h37jizjuuCTjD4hcJbQaU8L2KNhxL6cBarLs7nndVYK2x8dhWQ4iYZSgXWqkxrj2AwE",
  "key26": "jQRKJ8zwZ5tbgAqtHGg8gMeC6XfLZ4kZyV8YFT25GMtbLDu1ifZTbWz5fdQrJ8G8UFrmXW2g2V6Ynf3XsLxzbVn",
  "key27": "3VxWbnWouvq2bhLtZ686LTh9encmc1GZQaL7LvvQmiamSeJajkBM5qmZR87ts5MUyyNcWPYCmnhErVbJ114iB1Fd",
  "key28": "3Sw6xbBnW3XYPGrGtpips6TtR9Mcnp56RQD9dVYDBjEVYTmvDTFZk9GUPNyukuDaxne4ppqT9D5s5hZbqdNdwmZX",
  "key29": "22quCn9UN97Ntbgdw7kiiMg4WKqSDEDzsFsncWRdPQM4VYK5AuQ2vXcY1qFXCR6pmSUN2A83FNizyptumVcvM6Lt"
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
