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
    "3vX3Bzdg2De1SjxUecg3nAEstRc5H3VmHZqYYfnZxZk9qJ2pPz3QmB6Za2w2wMAAruhNMk9bzWwpMN9DkubteXsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BrupapJSSpwvE7RACMyYVaJyEgvgdfjo685uxuBhM7PYtJ1P1UKf8v9QQ4jZugBY6o3qG3zvhZM2SkXtDUh1wVX",
  "key1": "5KaVk5KZ4instHTiiJUUs5mFmmbNeS6X8nTBUAw95LkfkMyo28hEkJYeybNAQWhaAufLW4kDniuANpzr6QYfW4y7",
  "key2": "3ub2kZpS4Vy5KVdcjqgftkmguF7EUL9ZXH9qwYK6aWDfQnhWTN6gBD57mmVhNDWxumLopD7yanaRNFRBLuuYUp6i",
  "key3": "67Mcikcfdswzq2DBN5AoH1AwbWki26EG1ZEmEwUs3TE2vA4augAtDSm2k9DFEHywUq7kbedgpVQzXuHg9Z2cp7eJ",
  "key4": "3kxQfbrs5ib9pfCAhhHQjSy8XgnyKn3F8968antDJNk4WW6wRieKgsTc31Kaa5RyEkw9EhMdEN8oFrbtgSns3bkd",
  "key5": "2XaCUcF6s1RzBgbETpJpECqTdJCfMUCENFgG3odWQp6vwRb92XyNHvEisW2s4tFF65Bm8iUy141aHLELDxqjL7pi",
  "key6": "44qSzKfFH72VVLYuwfqsmR1mAok5cCJtQCCZcVGQ72waz7TVCHpEUCftS3ENdKFixqKubDotiKAP5qVUL1tD9Pjv",
  "key7": "3iCcggERiYBbGwTRvLezHgWhigctGcfVKpg1GBrfkMAaHT9htPYwXwyZXHMsFDig6HBuN8AQXvNd8sbTtwRUEa3C",
  "key8": "2AbNAvWa48xrCGiSqFfDbi41xDV4bDod7EX8WQFr1uo3gkMZ4wQUUpEdGz6Sxj5fhkRGC3nkax93tFKruPVAqUT9",
  "key9": "5ud9DXXL98EySyuQjrsfSeaP4j4Tsxzx7vvZjefZUQswZ82tuLrGa9keLadmqpEDpUDRt5qXuQCLdc545JzVB8q3",
  "key10": "oVfmXMhHRR3CLRCpHFzMAGL7XMBZZyRb7Qac2MWAUfKspSxfkLkKqbaSAra1omKnWssmGVi2qX5hkq3njgoCCep",
  "key11": "56JwcPRQZP36ZbTVAzvfbei7quPu6s59V1yn6CdRRnWKunZF5hQa8QQQQTCqVPG1EvoBnc5zDH4tv5vDpBARXtFB",
  "key12": "67eQKFdw4AGtyq1avmWfixkgHwAftXCgC6W6zrBcb2MEDoEDnJ131ekQ5sTGuCjqnkRS3zDycw3g4NqkJmUQjMMp",
  "key13": "3GzB7dtt5MfBUQcNdGx5yEcjzp9qdcHSvSzjwqcge3hjMZEHovKcVtaxWKYwm347cd8Ui5jaAGPRZpohntxfxQ5v",
  "key14": "2BS31t4u68egaZo8DSKMNbjS5mAkoBPEjB5jUU28W1pZ9tvSdXbzwVGzz4emNJimJBUZjXGdua3U5abEw3NR2WNr",
  "key15": "5pJj88orNLZHRrV6QRiNWzjCRY9SYpYgPy7MQj4Q5rkm51RqFNJQNDU977hRvxHApiqitRKxn1d7ZFXdGHXvAsTb",
  "key16": "5oMz2tdyeseUf8fyHECfUr1YhW3a39FWiwdPHxyF5HsgFoTHBWdNuw7pQGx8zrG35oEqiMLm4SMq4XghbK57eCG6",
  "key17": "4s6gFE8wKxAFNAYCN7m9TuGJboPfhkWhPBMJgs3waAzV7KPV6oQNCA29BkSfZn43UcnhVcXBxiRr6k4KrzyoGEPG",
  "key18": "2tjg2W3pQeLnYKd2YZP24HK7ByeGi2KEVMwfWe5UuJghy7w5ss7Tjnt9NLRZYKYXzwPCrGRqdqzjt2vDBJhRMyfJ",
  "key19": "3YpdqwM6VyDGLPPbz7jpqQkk7zH4SbD4tKzHBWRgEAieTQQqZNUHGSPdZ3L5YCY8zdT1p6n6VRw5TySB9bVGTVGi",
  "key20": "3QLj91ExeYQyw4CKu7GhRomcNhTgJfp736CRiJRpKmMUka8BBgW8KtZujLtD247uvCoDRsszn9zzkHhV9Ze8L3SL",
  "key21": "zBXgyuQ9z2Eq3ywpxVKrwEXujbidrbpYvjnFi8a5BQWfj4ALdfEnNKUzwTUtYU92RSWtQJqbVysnWnqW93hMjrE",
  "key22": "4aYWqGL9Y9Msq2qMA4ZFf6f2BgrbFuy7hPmjKE9rFxfnbai1KxjiKEhhKtq52ALFFuMvvCd4XXpoq7Rbu5dXuJUo",
  "key23": "4WeGGVuC2Nv7Y3VKRBicTuWxqMgUte9m1wHHjqyjkUFsBYUxjXtBgFeThWYPPEhfH2fqY95TL5s4m34biecZYiV8",
  "key24": "4D4qvY7fJTn3tfpqfx1BKxjG3uBibRfwKfHHqxHbd6qXRCAc31KwLRGSmcDransLSUVS73mwmzPCy8KA8vnasJYe",
  "key25": "2om4XJhFcsXAp2PHHrkeziW6tAk96GwreGHuADfFhsNRk9p4ytMaPJ7ZCxHqfrff9B9h2joV99HNot8w9HyhjXUW",
  "key26": "2ynvyia711gfQioCYEpJijY8ZmUmc3h8awmtRsfE5qYdbnPZx3NSVR9RKXZDsYZdv4UUYEJjbCjoDCqSNeSayNJ",
  "key27": "2fiADNN2Exoq4tDzA54mH3m84pMbEoUXruGAB9Kd6H3WTbQoidQ1FMH4ChFoX3ArgigBzFhNxVPrfFfMLxHQVxRJ",
  "key28": "3JpJgh9Fm1TXdZSCihefuFLzpRgwbquBoNBrAqHuEn7MzGpFSmJ24q4B6Gd4p6YA9jg7tZMUiFCThdnZpUf46ybm",
  "key29": "ne63VHcsNdmhARY48xqzzo86vcTKL1ysDRcRNEEezbjBrFdnMwTjn1L6vRnvbZuoYC1poxq46ejuLHPbZSxBiwd",
  "key30": "3PwL8znUTMij6rDrHc5NmwKBKtdVLv2EBosY6P9xMv4nmBcCGptaQoYwpurNFNaiHvSDhUDr5LKudTjXW4u19eVq",
  "key31": "2bHDLz55sPbSbReNsxWPaJJu13TZurAeMTiAr2GzBQxrnqapu7Nu9oE7orS63PaSAhTU7Jz81nWKF8WVCzuMMWMh",
  "key32": "4N4rEmf2zwsXg3bFDn98P7M7MVRd4rMo7FwzHfbV5gbsxpF5UcaEHYKS7GSvmxBrdQpa9wg3r3QxhU6xv47hYkWP",
  "key33": "3nkc4UV6LaWr8JiTYKfEHwJfvZSYGXgv8uCzD3ZfvXU7ioCFZRKLbYAWxm5aXCwJYvAj3jk1em1iX8W3ZkkL1jLP",
  "key34": "44zk7H7ToDRMN5RKzFgjvLgtWCCAW8VNQdkY5rvVb153xzujqqjwvLVzM5jGJBRZ1iNRaeidFViF3uYE3d9JzCq"
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
