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
    "2S9ZmTTvx5RgSfLLTHver9v5HxTQcKJN7nqF7tqGD9HLqZiRzYJ6DszQfuE4HfkW8z9TgDk6P81UbWjNrbM6oUCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J4EeeVhdU7EH3MGPYZiH7yY1DkVbPVGAhnbfRwCVuXqp1eGai78STwKuu6g3FyaX3nTfHw8fin5zfKj2qLc4zJD",
  "key1": "2L71nTFpPJorrabha9Xst8xLiZamFr7fwX9gYnfizUqdbaCd6wxnvXjJjm1uG4EgtwzLtrCTr8uCwK4FTpoD9x5n",
  "key2": "5X3HLPVSzPVpjjCB9PJcjv251pVKJCH1rAPmyCUXAmW9t4Wcnp7o5qGa2EDvFPdujdtLy2QmXhhJvnYcuofQJd7",
  "key3": "2shGoVh1dMnG33MEfKRu9z79MUfQzVEbBMNHd955fw4zetXb2Nf6YEKQYMwYsKMHDwfmNabHe4A75HCCkE4vVTB9",
  "key4": "QUS9NzFy3HwRTLxTjYbe9yEyQic7QTamfpaETeXWKffXL2dhX1yCo44uniu6MiJKaA9PSHZL2JGjLYdTpKUhfwE",
  "key5": "LiYnZE7tA1TKHfDBWKgucMY4fyVXmTE4B3efHB7cDujd2aeAXnLtDWUcofdaCNQnwUKALv6L4RWgNYUr1Zrm3o2",
  "key6": "63dG1DdEacMV69XMLVxaew7AZ8Z7DLZE4ZsUd2jc8jJ7Yv29JJWSd3Bi1JvtBWGHVXRUur5FMyzQc4sQRAkxeSTD",
  "key7": "53BEyPfCxFmncW94ygKUmtvXoCAAbGDTENVKi3nxxSLDThFU5cBySJqYPxf822JoRr1q27bEgCKZDLpzrJn34rjU",
  "key8": "5XGvYbvk2JkQwdeB5B76gDZptgdEZJvHTJxpvoqeH2qPJtFE2UXFPdmmgZsXsE4fCcBHJJcPJ8LxdP4FsyKzfdee",
  "key9": "21jepbaQCVSy7DsXHMNgfX35CzcLcMH4ZbAm3F3qNnscdVd2rzV2dXhnRXzw6tgA4uFhBy2uydqbiZ96jSYmV7Bm",
  "key10": "53q2ZKjAZqN6sGtT4w2V7TQF3VpKt6fpNXeUY3RC2eyp3ak4YS2q3a71x9oKVSKstUeRuSLGVm2VEbnJGDJwqf92",
  "key11": "3CJfUywqUPx4aAEdfS6ebdqkMZtWCipmGWBU3LphBGcraoWegByZt8HL62CuXgtUQzsNGSrdQR4dpRq7W6fTzM6z",
  "key12": "Fee9WfDWXcLmjM8Adxqzka8hoybzjKU8wgjQz3vj4snPAbSmWFy9bd1xpQdzRhAbFcFdhj1d81jJfz2guqiDS8F",
  "key13": "5B9wTw4NBDBBG4yit2kJ5RcpEEhFGHFMAu9R4Q9UTT8azA2vjM8J8L5M7TYUeLR7mqgzeCvDModvSqTeUBx7XAFQ",
  "key14": "4NwgHByQ3QbcuyqFHyhJuQ7VjAkaxrbeZVBZzF5gnBvGjoNKK35BHmK6DBH4cAwGWvZTbVfDrucWiaJfQLW4thfM",
  "key15": "tauByVUSQaMsv6C7ZSE5127QMHPyTuPrSyhtJyqRyXuYAaisv6ZpQHaaF9h7RLwn9dRY8hXWG4qHvyyK4yFMUfe",
  "key16": "55rMczMwkhnFvXbo6ZGHwFHBfSe6YRCeMugT1nWCaQ85q7TCFJrYXQVjshTiEWYVXDvPsn35Fuvd54ubAvhksMYY",
  "key17": "Hi6qAkm5qqAZL9KvhtcEgBRNqK3Bh3mfMy17xxYk8Cm4uamWAAXjvaY9YFNqdygkdDEn2nPBYWHJwtRngQRxJJ5",
  "key18": "5W42RzRkcNe4wuHNdMb9o3wfnauJsR9RUtDQZaeaqCHGwZgLNQiF6orJNxrUgSUCgE7Lm8a44NeDxncEnmPH4EZW",
  "key19": "eKpL8wF89J3cfshXP99WRdgPLiphAzrLWzFdpd5br2cAcj3CyahkHk5dKb2QmmL3KPU5hL8go8WWMFHw2Arm8Fk",
  "key20": "5JbzpbQdECyQUAVfBjRyBaegyWvQDHsJ4vboFzDhxhqdCAPTLV7ejsgLmxVxyJvpcxrGt1vpgJVNSYp58BoA5htC",
  "key21": "4Na8VpMeZahuznGSKEsXAFXxqiWXG1RMfwfsxxNnbKRvEgFWm6fh7HUfLpmBXk5ehekGXNhc8qsXXmsTf7ZBhYmS",
  "key22": "3MARrjwErDgpjkwBakidhMNne5knaDDKPXHRmu5GmUafh8V6vbBy39apRg2vdA3xoRwkb1YshvWWDmMu6Yo5qgiD",
  "key23": "Hj2otNmxuTbmQyHb685QUDzLU7wttBacF2GXw9spimF3XCn6WMjWosAb5aHcTjZB1PxotdP1RxwLBkdYmumP2t5",
  "key24": "4Pd9QZVWcR2Yb6xZ3Wcvj81CXMdmsFUA3xU4xsyqkBrNmpTCqvzbBAxaFYsHQAQ1ZLGsmKoKzBtm94zhosQvSYCy",
  "key25": "5YdT9CunJBSHSAyjGphPPhxPd35GJFc8yMWqJ3xXMhkrkakntuWSvUh6MZc1NhNCH2rPpfwT68tDJJeF6YMadoGh",
  "key26": "2oWm5T1a1zDSxBKia35STyw7pP3bVs9cRwyHuSUyVLC4UFJnsttYviQf8WcwtPW1RLEjXDSj5KyG4AB66ApyFCe7",
  "key27": "5V4pgryxKquzbQDJxPqxxAGUbNY8bVtQLQWChiPa6eF1Nes1eAJjAnDCV9bpMR1hNZAQQVAGp3tJjSv9bDi8DTDL",
  "key28": "5ZAduXpTtWRYA2wxMZGnRRbHXqVSVDrMFbpPgFTbafBYmCRu4mJTQ7DRNFn3g77nNmaQd6s4X75Vt9LHD4whupqy"
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
