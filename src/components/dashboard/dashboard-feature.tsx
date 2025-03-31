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
    "3Ei7prTMDDrvhRfXpiiY7BeLhggGMYnXEPhZdpWrYhR16VQrSNyjBpTxGtQabGUgCPTMmn363NoMXwG4kCc3eZmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgAYDK7SpceyPsWgqP3QLmnQxf3qdqbNXG2QnqmacsQkmYkKAN5Mtr12ZY2sDx3KMtkjpkntEnGX1UnhjzEz3dP",
  "key1": "4qMQ8fbi298YwWfDN5pQUiA1VGP9psD5X7aATtkheA7gQXTy9M7xQRfWBD1kKVBnSUPtBh72FD5egA5Abp9a46qs",
  "key2": "3CRkNFrKN3FP6brs8yT9Fqe8sAqBJpDAVrFaaeQRKwB8CEX9ZWEo3oW472TXk5EkGnrYbSxJGrgs8W9yHA8PdL5d",
  "key3": "4HhFAAGrrDA3jEohCe1CWFhFBNvQtpeh8mYsYug88ZyzZfB9YXPLgJyQYnAh1LLEbWEAzXH4PEnnxytoooHzAJ6k",
  "key4": "dGLHJq8EemwkyBVBnFaFzXZiNQ75iecNdwECn4Mv822J6BiB5r3xBJWUj5XuLKaKdiTDJ1y5uoDLSyRoFKgzA4z",
  "key5": "3iczgRcvqetKspCxvRmyVUnvVfZpqkSrDPKfVmokk3LKBCx1DPrrCTmVQyU3fTrfoaSRYBJhQ7HhKT7LoEh4eeXh",
  "key6": "45X1oE7XctSo2XyS5rxHQ1N3NvytVCsSVab4Bimh7KaXyBnxxGBWVqPZzbCpUa1U31TkRm7AgEU78KcLxv7cxuor",
  "key7": "2kr2rvgWozBg6aNhxnfVtU3VWi8AGAfBQjbLZpV1HtX3oC3Vqagksm7RFfJMEM75MbcMgZb4nTHNGP3a1GB32rqL",
  "key8": "3grTFHFi8NtN4mvRGtxWmY9xaK5SjQzsP6GxCW7XkKFreUbrkvLnQGpG4EQqZPmyaijw8Y6rVrrNbo64yw1Cy8fk",
  "key9": "5QgyRCKF6dJCy8AeDJLd9GxGiZyUb2nb4DCxiEVj2rjubiYcDc67StTvoHQtmMm2vYEtEDRuKdxsVzftyC18gcHd",
  "key10": "3Tw9sf5SPxmvRFh3wb6RcwhrNMjzjxi4UPKbyRiUwcd1w6yQMQ3dvNQrQ8tmC9Qoj9FPr2ck34KKxxBovDmwqwz3",
  "key11": "4GTKyRQ6gjHdoGvgA2XyB6XS5GhtLHQ2t2uacpYxhv4jc5CQQgEYjuMEnV6BKroN7BiUCCD1psDwab4fumDYtooE",
  "key12": "zQSzvVq95KPPsA42RkSjx3LeWe4apEZtxbLkrGkPaaito63YFmXToGfUQmyEFXUy5iwzZSyAv2trD7KqwQDkyNY",
  "key13": "kRND1aKEWzGk8CQpqXNfHUiwqnSc8EgMTeX7KMJL45RLtYRoCL6CFoMqnAdDjuHHpaqzm5PUDGyk7TRWGwF9tgh",
  "key14": "CQGWaMrewCZSpcWKu5QpuU12iqb7KfGB4RPUeJSyyRYTfqQnqGZk4RsJg3ex5bYeoV4sULHmsTaWsYL8uo74Hr5",
  "key15": "5nLuSmj7tZHZJdV8GZK9PUjCTbcq1dtCEq7gPfdgXkMyARqZGMCUuoeoA8X6X84qRGG7WRTCjs2awDbxwKzmiTt1",
  "key16": "Zry4WwhFQvSKLy6iqkgvrxLqAi1D2gC2pSkeaiufJofL3D8jcwUj5qGbTBNZiWAszWPzRjE917Mn3MFai2NVivc",
  "key17": "3i2VvSDRYZazcEzLShGii9seAnfhN7pF3DMQRTNhhCwATMxvEcgWgwd2mrh5M16kKyHJ19zm798qDBc15oLXqgfB",
  "key18": "4nQAcZJrrM465hpNFgk1NZey5wxxD6YEiyApqWfPEt1qes7X7TFJG6wvLS4QkJeQFwvK2WEJqATjn1mL43dcCrZx",
  "key19": "4dyd8h387RtGTiyEnoyboFvqwGNjMFx5ZBMNA5vAi5M1RP9ngpdYTbhf58NnBTZuf9c1GZaoBZe7QNZjmssTKNSn",
  "key20": "34GLTpA7xDvFgErCae1JfGcjA2QdaZ56gqGsPZsnHGgfBG5tuZxVbQEnN9EK18pM5VCrHeji9LGXY22v9wwpZeUs",
  "key21": "3UfTvftFRE694Jzz3vccEeom44zCdaorWsbSmks5f3ERXsvmaJj2yQoiTiTWR9euaqzfS8kL4toauNoGnwaD6EUZ",
  "key22": "2gN7HExdVo25vBCsayC1kLSazqTWDTczjaJ1Q7DwoGwyyAKkYfxbyvunQ6f4QuN6nufCvNsLehumjK7ASWKF8c2x",
  "key23": "3S6kBaiqFV7cw6sfiBukM99vY8GEUikoDXSHmuwrNpovTSz2zhYxx6bBwzAfr3cTYgSkqPXqibiudX8SEn7BhBq5",
  "key24": "34buhj8sB2fJDZZ7zzyqczGQrgVAzJ4yWq8PXbh4KTFMxY4PBez9M2RVP1K3r4uzKYhmeQ7WPQ8h16pxXzkqfo2b",
  "key25": "5B7MpMDgGZ1UaZH2j8FSfnMijf7Kozjacd7bgQtw1vp51h2taKgiWXX9vcKoirVBccU41u6jra8YXqCddgRjFX7Y",
  "key26": "3xgP7x9u6bnLLQa73a3MCjY6TfZh4Uq24iv6aAVTSNG7fbAoYC3dpr5PG1P1bygwCdkSzSWvKMYBbGEN6FexAZfs",
  "key27": "34vA2ub5X2xJAEfrScqaeEreVbCdb9XaqFtdnMaAbVf7Yht8HuVWVpHZN69TndG6AVShM9xXm1TYk3mA5jyrZ4Tr",
  "key28": "3hjRrjRbXutpZCzsxtxEByCrBnQkobPaPp59C3EcPzQ4uLZ4JEJQQ6xemDi4fjDNwfwdj9zXCZxX5P5mefVcug73",
  "key29": "67g866rAU1xTg5s1gkV2zGf1r5jtVSFVtXNeFVRDUPYfR9X7gxzrQFF4j6JQfgdj8iiY9afMXrfJchkEXfMK9NAN",
  "key30": "3oX2A65WQgfbGt2mQwYuLkgRBjhLqXnWp5Tf19oGC1AkjvGxCvCyKLnPbh5WoWzP51KPtZP9fiTLUCLhgS48o3vt",
  "key31": "tkXS5DuuXhCmZY6W6FCArTD1YeME5AjSeLDAoGWjk9Gh6mNMsrKWzygAtB2hEBbvkcKenv5ZyVENtTobLGyHyZa",
  "key32": "3fELQQWvRAEhgxMJjWFkWwCuTPhKwrwiL64mDgyjbEEL5XJD37MismN4LZTEZRXhhHGpoqLexdkMUndMe9p1bSf6",
  "key33": "52g3PvkWRi3nch8ztYX2kfGP8iQU2XL3GznXRyJe9V5rt1QaUy3p7o6QKe4TYrgmcaSwS2vjQbPCHVgz96aLUnGe",
  "key34": "21TseKQY5Nb6b2BWj2s32pXCrPMWjNC9tXxfGGr8ddseKc8vkWtspWBXsv46YskY2tZxTndRLS4jJPqUcr4mcjM3",
  "key35": "1mvw5sMHkshBADPAUkSSHYpMqQXkCbcK428W82asN1DzFQeADxow5h6LovPCQcVZmjNdvkBsVF6fKWrW62HXZbm"
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
