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
    "2BbVzMXStwfmygRFrrJRWnbLgZgrEwjwqQ1fWX4T8znFf4ULJnYkcRYGZbpgWqza8dkpozzBeNUcPCzmwUo8HrUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tUh6aXQdo8yFjDUGcbMU4zdTPGjUSdUHtbu6jGbLYhaeqrZAaKyoTfPJf5vZPxX25TKnh9pKAnrXAt6V4KdBSaK",
  "key1": "2kiDdtniQacSypVYz3Q5tNr4n7QWMoxfPE9fgAJSsHdwvARZJSaKQ55xmUcAZ1SeoP73EEXYtHaTk7JSETcAvCrz",
  "key2": "2uq7epZKN48JbwLHcfLdRXQgiXiGKaL3knjhKdtNcjYfWFbTEXu2TUM3AzZYehm59CLfu1THoXAN7uZkUVRYrLm",
  "key3": "2fFsVV7og6FN4CmEWEmZMhydGwQ79QLiSLY5wRpCbnaJ5m2fEEDTEqoLtBvV5QhwzXBzgsf79zKd2ySov1MtZFGz",
  "key4": "2zuDS7QEXrHdtJDiddxdFTZ9gFSNcrhDKp1bnGeyLWgyg57cQELPZAFxQuwcd3wWKyLDuTNC9LJar68hDb7L2Ef3",
  "key5": "GDMVf67jJ5JjDjb9L4VMim6hA9FoZHvxA4nAr78oDN81aXy1P5boxoLjP3J4JV1YDGANmq9hnHzGA7fkEKbQmyU",
  "key6": "3nX4SiPks1SDgy2adNkEeggEZ5nQzBxY2u44YDHvRc4DRqZUiA4Q8b8rySyd22RebxowWw4F2ykf8DhqtPDEGp4L",
  "key7": "4ADj7xsNPTyG4maR3TbU9z175ohAhAc8CgNvQJ4NMjWSVmfdJiza492kC15f5ggMaugADXe2J99XR7g9vwSonAL7",
  "key8": "5GziqZq8WW8CCBSUWPfJvWUpakzXPzt7Wpbx6k66VsWik152NJzRKyZ1ZgTYjU9YGG15wmMwonv4vVCGxpZysUFF",
  "key9": "VcAhyTazwaTQE2eTRq4wKZ5ij95Tuo3J7pwKsaoDyJr6Kuy9qgf75NjCzzEL4LA6kEHi24H3YZwSCFLTnQYE3AG",
  "key10": "4MQK3ThzcpjXJqYmJ6E5JLdtyRVpQS9DLtF2NikApSZhRipuXkXZRbqRDHagtRheRmR6o8iHhqJxYb5Qcqx1LgLN",
  "key11": "VsrQqaLwu1i6s9vfgzWDoK1XTVi9C17tiuMexQNbej4vCWvmE6MT65fbXsAyQjP24fo1HxqTYaeVi7mf6YCbdMW",
  "key12": "HRXfTuNvppMgg8hZWJkAASzc7gsKsuJgGdsRJVX8nF8iP8tn3dWijc91gzhFN2AJk4DS1ArzEBryAQQ1E1DronY",
  "key13": "2K59AKv6CXCgb9McUesrqJVcNjtJWZAG4pvXomR1VqTFEwuXyBj9JkhFdEaLgCTmbVXhaAghCsGfEhY6F5PYZspr",
  "key14": "FsvvAF51eJsnJ1uWSyPQA9CuXiskdA2Fi54Fr23ryUyksFAmx5TXyvU7mCM54tLbnYyiBYWs4Zi1LqixvpYDsdM",
  "key15": "2pv1KJrf7LaRFRhxwc4rmueLcJGcHsesWDUctLbjpvqkh6yTDdSP8ynToC96JXA3mgmyVmGSBCDeAQfQYNBpUfqr",
  "key16": "4pEsBDh2sXAGSrFV4ywoBjzqz5fSGZ8YTo4VYc6Bk1F2Ys9yrJbuToWb9Tg5Ve8fZLSGH7N8riyGbXusRJkZNGGv",
  "key17": "43oXWGXbu9v6HhP4AtoWfgS7ww8eRE4o1M42zf1WQFXNPQNAvUK3WkjKzGLqRThUEwkJVLecnSJSGw88VMChr6S5",
  "key18": "71KDiJ6CasoWV9hGsRGc9WuCXYxMuw59ghdR7fjjLcUf58CiudNVwHRPAhVTzhuTWq4QXYUc7pasEw5c2SfdRtw",
  "key19": "T3HpCzDrcJMctNpb24PN5JNdKmdBzXrjcjC4C6KWyKZedfRxxnFBbnYBTptDaG6HwXcpxBbspGDT5KwgLQ5uN2X",
  "key20": "5ioqvxvBv3cAy32Hkn8sn8HjfUwd146552mcUWWwg4Fr1XmbPgts46FpNnPLmBvdePcudag1bx1MjNBR79HgwGwS",
  "key21": "3dFJy5v6Hpkxejwg9YtYk8uJ44i76JhvrUPpYtMYpFCkgvaaTcAhNrTFY1xkQHRgRSdQ6pNbvpGeXps5qFdU4QmG",
  "key22": "5MTXyo7qCML9MPkjd1JDnm1P5cTTa8FrVxB6uQ98YLisbyrQudYNkdicxqYV7pWnrFbqb7mwvg48pQ2ibY2PkL6p",
  "key23": "4JRePYe3W3cgtdaHLmSfVgDcsfXmodooHjo852hDmf9fFkiCBR823uSa3Vu98EDUnipkgMwDW2Zzs822UiKv2tFm",
  "key24": "4MyJMviAUbF5wiGAFkBLhdUFysxe2PnY8tF18j4Nu3Au35f2mZUToRZcCwjjGpgwswxAPL3ERHPKfyp1LPxdPkf6",
  "key25": "4sx9iccgxSWA3FR8nwA1S5VmvyEFzL7bBLizXFb6y1R3KjeWnBZs9XrsjN4n9Jg3kdirANrdkMvJhdkTdoKnHpyb",
  "key26": "2NtoQ5hjW9MnUhBjawQ53PnVG7LgsSvRAHGRHMUQj78WHSC2rsdm2eAYE1Uvvh34VhMQYVS6YDNkaMv9pHERKWBd",
  "key27": "2Ac3kQnT65sxEhWekQaEe3mvUoMtz4Qe9fNvfzPx1syrjY7XTzzPrSKAqKJCAPuhZ4ZZjm7xorYfmWgaUegRiToF",
  "key28": "ASkTCjqUsULkzg2MNsqwRNrJLoVaGRucWGiaC3FKdG7Rv3rLngGyRzE3AHdhfPfw4BizsSVPhESExNLGkMUB44J",
  "key29": "4xTJ5uFsRtZTVC5h9zqVH2ir2knpZ66oQ5r7u9Bw1zihx7oVc6cSnvsNqmo14CtrHWCGwZBQNWuYuq2C9krez386",
  "key30": "TjSLR6bxVvptKwM1NA21AWrZC92hVfw6HGrZCqFX1QxpYWLcyHG4RH55kdFvfyFruR9Usuhbzz9HdnD7n3okF7p",
  "key31": "2hHjugttLiC8t1ZqNikGnz7ESXbgNiMg1UhhMWxAnCVokmSAaaZGYkyyrcwY79VvWqwVmZpGLhifv5kTQX8GbddV",
  "key32": "5gCzFkU6GLBbHzm74k778oY7quof5uMdYFsTFADNU9AjUhqw4hf841S4wMyiBJLMTc8yJFnJEo2XY7DJNHLchGKF",
  "key33": "3j6tmjQdLHm4iVTFt6sqFpZBsLQseq1LViTXkNZYRbtEy6tmTT12w6JHERQSXsbRs2FX2XRjc8rUp93zZbgzuf7G",
  "key34": "7y8nQUKaQUHMW7kncM3JqpuwRs6ZTRNxNRtVw5XjVKXAmuqDXXrvvSvfJ284nNTPudVi5ov5iu9sV7L8p3jJXF4",
  "key35": "jLNGudHDHKapQbAC8brLhoAHnNP2WGfQY4H7yso2Szxfm8u1fXvSuxR5ZiWzZWXmDakoPxLa8HtuMNzRjba8VhV"
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
