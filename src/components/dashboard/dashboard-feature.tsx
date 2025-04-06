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
    "5iThhTQtyxP7KNyMhqe8p1gd5UW1r1sYuFN2xYzhFBmq85Eph74Vvo75tB7HapBcXa9P5qPEULuHy7tpFRxXfQCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LfGg6uMNwyhzuoLKSpRpL2dYBtSNyBwsVfY8EufqpgArVmjrPjyChvqijFSubhXnTTs6Svia9CRX3J2MuGPqUTH",
  "key1": "2jNW8vi5WUdZKdomFzVFfveaZ1LhFaFaP5fH52XpStvMUzv9jjg3o1zCTxeuK4jqQrWU3jpNdxHJgdnHEWdbH3mv",
  "key2": "NTbJfKKRRJJGzmVqt74QYeYsBHtVNr3DYX1P9bDH1KhzrBwqtVBf9dMH6JvPF7cFX3JPEHkYh8GkAgX4MiPs5rf",
  "key3": "616a9bR7zUiCKm4FEgjHr4isyCewhCAVtnLKYbrsMwZ791wKZSrwXwtMBsYs4U6CFPAG1u7P7Zi3m3TZQxWfsVFv",
  "key4": "4e88kGmbDZChkQ8X8LC9UPjCxWaVJWSVWBLSbT6Se9Xk5pbepjHzThvyXJUWzaZQFDY8pJfTiPfhZLBEt5yTz6ec",
  "key5": "5oGCTHMnezCAJHzGHabQNZNVUUEB12SrSgoku81XnGXx9SJ4Gue8RDcft683u9R8wLPxgpGAWdRFRbcTee1mMdaM",
  "key6": "5qH7A7AGsgyUjTaFiJTqwQqsrvVFF2MJ6KkwsbSSDsawhRxF435HvHeodZka1Hp8jx8RZ9qEH2E5CRFrxLWUKyPR",
  "key7": "Ey5AKjGR6LkNrsjyhbmffeZURVATVtGi1FznQTop9XMwcs7Giv9Bxji2eRXJTBXufYZfpHkgBPfjBLNU7GkEeRS",
  "key8": "215MSr5sif3BSHdRo6UJ5Td3Vusoa5dANdinVyb5TUjSsX82ZPzQEXSUx5KVjfRboSGa65Urx9LxtJMNzhqNZKPi",
  "key9": "52qVTkMxrozJsSzd9LManYPW1T83LpFiZc4pevAaT2mLdNoUGm53siVuu6XVeR8K59kUkbSvpAetLbMYxE436SRc",
  "key10": "3zcFLGT8ucaWj21DSrtQfFzZ1BWZkrKWZWAbn3yzDBVKJxrdNy5HaXruu32RNB7NEaHkMaP7rVmMv3v2hZy6pQJ5",
  "key11": "44fRF5pk9qUuSbN1atTbuZedJDjTMxGVAWMpWR4JycvcBkdSGbzXK7sTHvz1nRYQrqcLqiCu19tVi7b1HEfeDfsX",
  "key12": "62qq2p1YqPhCFHuWns97fUAymLENHQ6fAZoyx81GJosN59qsC6V23CrekRwgaVpAGEApbua6fExJrPJ9eVfzuZgc",
  "key13": "4ZV1bMLEp2XWiVWqbWS9wLdgUkAeGDEC2K1DYWrhrYn2jRtAJbUm6UV8K6aFHXozW9z9PkvV6m17rXyHKydRfwXQ",
  "key14": "MksiJb1cuamLZq7SYuYUok4UoKHu2XKWZyKCDAHLFbbbiX4pdicxZKGsoukDi3ieDknkm3Xh3mEH5ycFvYPytXB",
  "key15": "2zLfBp9uJ9DjtuFN1xdwLX2r7BhdyJwFxj4fcTbxt8o1qJ9sVUzLfnrhhVXM5aRZR6aNupZ5gEj5LWs3civGrhzf",
  "key16": "S8J36G1mYoyVpBT6AC6tTyQo2DtXgRSP4SqQJmP1QJR7o6i5KD8qUebpbDignKPprmX3TbQofz6Lmhk7u9nfvhi",
  "key17": "2Gn25ZpximjH1sD9P2tCoFEwMdH1i7NdGAabN3xsvtWwRwPWiPq2S5qcQ8oPzZ5THuZZV3V6hzNzZxhz2kRrBvas",
  "key18": "2rhTV3VKPW595RZwEjSb6L59XB7b8nDzkVeMy2bZgxeQ6mad8Gsc4V3MMN3t9eKvRrQo7ck9Yyh2K7PRndyc2urV",
  "key19": "41aiCTh7FBPJmw5JkXiTNDqaTS4asdW5N3okRVTJEJP57563y611cpEcKfKnpdqS6GXqKBcN2hPsb1m1eAEAUieB",
  "key20": "2jeybzYUZyK87b33B4ZMhFtBKpjcB1ojAKAeKLm9eFBz5mxVvs9Vagh8DwgKUDa9jw94t9yQdN6bDx5WJuraBrdt",
  "key21": "26riE1XRHNbyzQANLMKdRncgXAViLt5xdMzn2ZZaxBL2QivLpyfkkyp9cZq1koX1m2tkEnLC7Cz39jgJkesvSMgN",
  "key22": "2gNBiho1csUQs1wivK5434SJCzBSTMp9sXigro8a6TNCyMSV69ja2L8gCUwmw75Kksnvkf8GkuaKKQcNBbsf5hHY",
  "key23": "3RuTyHvmBe6JxHewDXNKcSHf3Evo5CjwQrpHk6LU443hfZEEPW98tKiujYCmRRbtkmRNc6TuSAmDbhskxJh5nu1t",
  "key24": "4Ue2ghJ2yNDYtQr4UjutB5QkNf6bZBPFQxqM6MMQfrFF9g8biNfnYb4cmdGERMAiNpYiDt5VDVBLkRYbSdJGL1CC",
  "key25": "66zgjEnGd1WVbDThiHCQg1ZhGJbZbRapB93uBYrqajunB1UQM3PwJmZQqitvKBqyFwJHK94o1nqdReQGikq8S2M3",
  "key26": "ceE6816cuZtQdNKp6V1VuxpzJZZVa3AYRgoqr8RmePQy5toDtZUxVtjQm13x7ZRiBDDZseC1Fgazyqbxu5jL76n",
  "key27": "dBgdUs6voaVMNe4wv46eWkrDdERW6qcAFD9miwz6qJQ59n3fxT57S2wgnPaMNcwV3yKwAF1FBoFgphLyJvCqViC",
  "key28": "kGNxV2dRESnj4wbVHmh3Q8e2PeptKYRdzpKpuLkQBGRBZNEP3UaWZqquC3P4w6v7EsxeCxXEG6NhJRzLMmjCZTg",
  "key29": "htYUdabbp9Sd9fcf2BXRNBVJeHpmdo5iu8u3kk28Ft3tjdTPwXknJZrpaHFXehe5c2Lij81GdWjjLhEWmYv7caX",
  "key30": "5zjoq4VciiwsdC8Tv8FJmZmgmVG5mJb6JUKL6118zij72uHSmY1aAuDEX47NM5ENZaHxYvfi7QgGoxsLtj4Xb7ik",
  "key31": "4yvGEzFj5r4erCSD9mynDX1RpAzr9oJ2A1keamPCUpa3ZL1QJABYcDG8yecvZg2qLPzPjAXFdeH4GcbC66R6Zwjp",
  "key32": "4jW1Gw3rjxDVnatSWyYn9TUJDSk73yZJrU2tU1MAF5J1kUw9Z4taVXBBEmPRsfH4ggeDQ7AKBtggym8MoxKZZsPe",
  "key33": "31WZQNA2PhmGL34yumyB6Lt12gYXwP3sqjhYo3a4Cm945SG7L85GnbieWfsfFUAkEeprZgc4B2areWgGTXSuDakM",
  "key34": "3A9AVFU3hDb1qraj17BTzSig1DJ19jagnDmW24qUonszfsbU56oCeNXgpTDvqzJP9LG1SP8i3vdmS7Cavrf9Vbee",
  "key35": "4FrySXCZAq1cAgWRqNeBxEu1eeRLspkUz8BZ1LCbeMT2avg9NaY7XxZ8dV8H2nLRtyBao14Kw1CoSVHc6V4p7zWC",
  "key36": "3koDbKFzYYuuXo7TM29buUuyStSUSTx66pXme7jEacNeumhc6yAvy7o95d1M1F5BCAZqscst3BBQrLfHXrNUWJSk",
  "key37": "3ZRvEiucBxMTR5FwJGJQKL6UhjQuy3Wb7JwVUhnaotDg1yFXA3ShbP9YyTFvdQ1hG6fxAYQxVFyfn9uaUjuYqApx",
  "key38": "4iMC1YX3P95DrCcTXuHL4WGbhG5UgK8j5XjEsiXaUaimJA9hTi9DHWrBz3VDFCxApeVFrePht8SWHVZW7mae7T7o",
  "key39": "5jH4egF9xv3gj1Fk9UMxmB9EQv38Kq8ExMNj889RmzbK1WpG5GUPJtdkCvgYA8bqqvSTQAwVx4vhvWZa1zVQaf56",
  "key40": "YwqjXc1j1xTbpkHrLyukjgaPAPLY8gaiNhpDq9JqopAvnBXkszpaidNnf1JGa8SKCUxVNnXQAAZ9YLMKwg3JJoR"
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
