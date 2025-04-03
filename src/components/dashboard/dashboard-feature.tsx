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
    "5Uef4k7fz4NGqZGpK1EGigsRxySCQHqFTAxLsHeKaKoey2v23VJ55dzXzq5TeVUYsq7gMS6HRAt7utE4XDs43pEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KUFxzhKYPiZ8QaHFhzZYZJgHNsKgEBMPKsFj1Z9mfZsC3Tyktavwi2egCKRCnvf3opsKjWAxsjJx8kZP1fnXZm1",
  "key1": "3RdXuCqCd1U36Sj3k77AowACuNDs91xvx11oP89rBBuHaNgVkTusLN9pWoh2yDEJ2P9ysSjBVYGk9MYfZWQJdgk1",
  "key2": "4a3fDPt426pjHfzhc14b333qXkKhwhtsUk1mQMADNkVNZVNrLP79Kt35VCsw8LtWb5Kc79FWTwPawQ6TaW4uKqoC",
  "key3": "3oa28fG5UAY8Ao2zFyrp4Rx6Qh1AiHUr5v5QaumReXBP3Fjnsgk48N4zAphjci2VA33yMXViqVqwzXjJm97kkVrh",
  "key4": "3vX9S6D4GmXSwzzq3zHxfwNkeJm4pxjpP8RsNYuN5ExmgbxVT6RTRVXdSG8yzK5m85ud3raJxEWtTWWMupFzw1ja",
  "key5": "kdhHmyzkPwBvuJLRruF2TLJL1geAW7LvFnWsLMH2JPnSU9aH4AW5yaXYXiFfDhtH6v45AY1DiVshovih921A3Aw",
  "key6": "4wETZfkJHzcGf7sXgzqakC8vXYziESv3GdHLAd8bNt8oipaSSWDetBnCTSMtKC15ngfvRs6iqsr6oSz2jJ9GUYKt",
  "key7": "3FxD4hSnTayJSt5j7UQtL8eKGyPrt9Uu1Ft927BNTqQPac86NdKJn93FoNn5nCjXMo64PMSmC8cdP1za7U4KXn7A",
  "key8": "4agqs3uPUJnCXs7PVxGgczJ9Xo5XX19br4ERG31wAuBFdxYT1YG5H2NHaL91bqH9QFydnrpyrTu7VNitZJz2Hp9j",
  "key9": "4Fe9djw4nh9aVTm1tzKMhiuf2CrYsTs1bUN2zbywfLPzsgoEcS62bAPReEPA6KsW1X3QzQb3hiWa7B3hzSPRWpzd",
  "key10": "4HEMEr13HRhV5E2rKyJwu68raMcgpvVZuDZcKCE5u14GrfWNjhz1eit8x8ZjbWY9r4oNE7vDP2MisuMHi141JPV4",
  "key11": "3MqyBUxzXxVdCveL2awZJDbUCEtn3F4PfAYCdJtGCbRQ5AQ7eHMNzSNt8Ej53tQ6ZBphkwRhhBfEtrbtjjgRNXLe",
  "key12": "4bBxZjHspL8PG9An8GDgm1wG7LZKkJh49d2SPPZBsHNqzX52RA9ipPHU7feiGw5YFpjZLymoELhnLbuSPP3w2a24",
  "key13": "3sRusffXxH56pjsd1f9VAxZRaWoY1LBx7Su2vaGUs4RGubwc3QjGQWY1MTUKYGUxfGjio5d6fT2zTe8ocpDnsyzq",
  "key14": "5wnwpAHTBRmX6hWjidirJqyzaC9QD5HRB6j7saQXhA7x7XCvt2ZvZ8hWBsR2jinanRf2a25FkZjr3Z58BSPayQi5",
  "key15": "5kV9sybgHcBUypRXmmTGx5Rc3Vt1nJqvCamzQko8FAQReetXXj5QbtSMsV3orPrN55s5YvLPPkRVNRrUJaph7mzA",
  "key16": "2mEZ1yzaqgsnTzCyVAVHpaLuVKj96g43nyeaJeL5DJPXuxfz6f3EvQ9zyULxj87Rgf4E5eUtaeUypgpjfCksPfEK",
  "key17": "59HCkHved5bjhpc9xmto17ZFJttBTeTeiD721UhvQhRj9fBRPBA1ebJfNmG2yq7hGm9gQUFsUyCNmt97c9k1knT3",
  "key18": "4esMAWzsDkUt7GBSh1oNYZJyyoLuqKFM6jBGUfaezXtNb11ftBNwvKtxAnJzmAxspsFABN1yx6ajNt482dkXAHjE",
  "key19": "4JmDaqiSDYzagqZmfHqz9CBcown4erFnKVpGRmpbBWbdZzR35hn2ArxzhrNyWwr28DXD37xao68GjnuouD7cD7GJ",
  "key20": "3YQ33Z7YoF5eWUaVsBSVobTk66DLeMGbs86navAUVii6HrnwGFwcC8tuBQRdtCrnPvjvKm8L1FKtB3uzdppq9QXE",
  "key21": "utViKWrxDeQPoHs2efWJpEKjCt4cZXj9akZ7JQCkamtYtjKGCvaBtYvApbNa9QqxQWSeLPSB3CV7amPL5qq1Leu",
  "key22": "3kLj9uDkxtB3jesJA1gCvkMHHsf5E22vieAwo8pkiEZoWPRtGK2sQkLB9L3AmcQPniAyZQwfv1pPxcWgBtjUBoXT",
  "key23": "3rKzqNwk1spPFdrZViUkRxAmcEhSahEwvURrETg7ggiS7Rro4KZqdQdvB7ucBokHpfLHi73GtwCzWbhFFBUJZ7Th",
  "key24": "3LG5LSeu3w4obeAcX1eWhX6t3rck7K21sKK8V9fvjL4Tifb2wQBjRhviv9xby9UpouGGsoqwzF2vX68fStBTKAyh",
  "key25": "5hwsep31i2LhsdFwdyLfe6F11CmdC93WZtkrg4RPMrevtrqGCiCqvv65dx8B98MB1fud19cPU9zZoUaCJ89ZgZ7B",
  "key26": "3HhX4orcqTfrhMNvYRW4eenWw1Jp6PgTsCM9Vw9TqhnXQ2AJW4bTB3wqtticHrGQXTvSzZeaLiKu6EkpQaYEKirH",
  "key27": "5hspParMfofPbLNhkFbYkW68vnDWo1h6oeXaa8KvZCjGEnPVDkPKdXYKJ5PMR2MhparmzuM35gus4mrBMiBXVJPB",
  "key28": "3peYbxEx8kMLW1LV6neCC15JZ4w9gvnfJLXSZfakMkvNj2KoYmTgK3uaVaT6pW3FHytSjm9KiZtvLDtKL1sx2LC1",
  "key29": "4XKqcrGVKhSYCyd1o51vzTwf1RSdnnvvDvCWfERQANyB225D9KEBV9wQn6dmZrVEhKMtrJaKeiZPzsNSzxGEfSRH",
  "key30": "5BTQR7LBULrMNaL5EgUZa6JxDLm7QWF28uyX7Bi3rJSb3NBwejMFwcVwsY6kxvT1XPmpzR8j3RgqjdnyvSsqWnmo"
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
