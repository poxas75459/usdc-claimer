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
    "4fehXXLjAsF3MC1WqwokXyztR6dz2FwP83YdsvjFL9aR8wgKASf8xMQ6agACvGTPxRKKGFufPuHsFL3WyGH2HLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67kWQMafrMfKhSeJ6SL8bvMvNbCBEwq8XCnyoZHndfUdV356FZidvPUe8tPp3J6ve4Ure11QNt91D4wZYEBkq4v4",
  "key1": "5qX3Qk6z26h1kqy6R13hbe87zvufkQ72Fam4m8nbr5aGEvpubKumRttgiw1YBmRf4GHcYWJgfho8qagHDgMuhaZ",
  "key2": "5DnL4w8JsztvUF6BgzgM1SeTXWafQCqGCsNX2R9zyhZrzNUKw7x4gkKt52JRVRBaL5GbEtKnLnCNK5X2xFUwLuW7",
  "key3": "46wEWWhCjBPWfgGtVJ47gDKWx9bWcCd6aLgqMgjxXna2wRfmCKz5Vcbff5aTbAPgG39ygKSkiCTNMLFjBrn2Tgvf",
  "key4": "KTPYMZYf9ysnKBCbwxGKPvaRdjnjPmvWiVA1m1j1h2DpzD7hMcMkBWdYaRcpJ4ngndC1hRWMVgnDsS7CPqGekS4",
  "key5": "yyKXKToSKNrbg1hHuipMTwLckLhQf8Thic4RnRSXHve34wooSh4NJosMBAbTsX4Mq3Qy9rUZZYrDjf4H16iiiEK",
  "key6": "4RMkFPQggvX2afMd9nAGcoLgn6uZrB3WqscN1XBWFM7SjXofoxrrWRzDraRNLPspAsV1mqa7hgyeD1aPWsN1Kaug",
  "key7": "5eF2diw35qswXp3trFoKhjMuSZtY4L49NCBWCxFaGCMePMmubCXmJ24wGVNbKZWvfvx74NBRu17x5iPJUSwcyJxo",
  "key8": "2nUFvT76mgTumiSr5V4QV7UoGVB6E3EiTNw9KBcxvLw6W2tvSE3sx8y5eSzudZegBBcTz3iMMfJYGYSqkFsP46wC",
  "key9": "2YMSv2NCdckPT5GMYPApDz4vM8tuFNPQQkB7K3cnP1EAfkEse1oqYauQPv28KkKpo7hPtQtviogj1b7Z5JawqxHR",
  "key10": "5jjAyKA3sBefTrfixwEhGVZYSs3hQaptGYsjWTHULvNWvDFwUsDyy9skR4ipaW7vkTP7Dx5zc6838qrFbngTKPZP",
  "key11": "5saCkR3Ugv2RZC4zWB6Qfem9yB7obJJK1X6mu9pDn3J83FVJP6JfWDC5BdWWDwKA2TiqsiHnq4NUms9faC17s6AK",
  "key12": "23ExTVZnqZwU9Sq28wxDrPBABHhP75UKcXRi9gcpZ89kUsANDpM2uGi93D9pQqyau13t64Ae2AtFZUvsHc6ChpAo",
  "key13": "3GQ9uYh8cb9YApMu7SEG3ra1fVVFJnhf6xQrLam4NrTymZLK8xiBQVpT7phYbYHU5LWNfsQEhzbRPovc5kkDPcck",
  "key14": "2FuD4cUDQ1XzmmvKs2Md79tzAyoPqXUhRcTv9VtsV5PY3acaxgi7juC6xr7XEhU2f1DWiE9Hxs9bUnq4VLgWjs4P",
  "key15": "5TUNQBsvzNUvMukmRQZRUDVgj4AxyZkRTPNWb7erjWqC7vumdLb6PbfzeLEx7Jgk7kwhkS7WAKkHv3WWcpWD8BcM",
  "key16": "2PZ3jiLTfV31kykdK4pxceF8VciXd9YqyoopaErrpsF6sJmpi5crqRY45y8hv2j4AjSBzbV4DsCBdvPs31mKySDD",
  "key17": "28GFfA1n2Eag4seGNnYyqkxcV7eDme7jmmXHopm4uqxiQeSX7sUJCU7BQfjovH1TdkuRfVUMYWQnZyq9436oi6Qq",
  "key18": "4MihC2zq3gCxGRZznxR44UBabhPmafGVEkD5gjTuEcTJaMTUFQV7dgL9ujiw3H6wArwc2EWn8fRApedLgCcpUK4u",
  "key19": "2C5ryxGv9NXoQSYE1MQFquXQqRtL6TEFnb6d4Mcub2QUgDFbWLxzDAU7xWHNEGntAVPocW6At6M8dyJboHtCK42w",
  "key20": "5jTR84x99EMrHd6xarQDuVnw2s1Zgs5kpKyihxkWurrJCumrggssZC2aPgiPd3xpAzJVBjugzE9WTyFNgw1EuhNi",
  "key21": "jg92yb1KtrSB5jXhQKDG1uAhSMLosQ9ivb7f6Cezs9tfG4J5NdUkdUoW15QwojMrrTLHtgj4viFNBnRk4CUufvj",
  "key22": "2jL9PyNgktW58qo2sumg4NC9vzgFrJPF2dayA3urfs7N9Zb3TCMKE3UrwpxwwoAK9t8FX38qV2iv2bVTcvG8L2SS",
  "key23": "28DYEYSQirrC33U9FFX1p3rqjc9WNV2PZJRkFMDA3NQgXZcPcmJVRQyrtS5fZFZ5ym5zyktft1aL46VB3F8cG4bc",
  "key24": "5ZWKe2VKmyuZz5knGA7LLmgFX4ZEq7Ako1akvHoZjRq5tMS21xj6S7RiUYQToCSpuzW5AMfdJrodc6XbR1cfSDax",
  "key25": "26KjV8cVmGLBhmj3zoju14q11idoNQb4rCgS5arqp7C1jHQppE69FmUD5MED7KQMFPC8xeLayB8vYihUnJBiqj1v",
  "key26": "37oaLQnN593uhx2cQxqcfFfKCTjFfGUx2wzfuD2CxcFC8EUHF7wKb6TPND5poYSeKWiwJVreeiWnaZvk5VcmZGFZ",
  "key27": "5VZ25fZJBhNPw2Wf1obRWhzxBBDzLVyoVvGkU1DQTjibQS3HjJUFShiKK3U2QpzFkwTQ65XySCTQ1C1NbJLwfnCB",
  "key28": "2dsk67iRMmnFRTwvEsKe9SGBNmM4ehAjNbuC18FLWRRjFwtbzLVxRtYhwiiBtE3HHLVFeBFnrUDkvKFpmApQZBKt",
  "key29": "2EwxxA9hzpiM2X3ohDMMD7W6RQn6XsStoQzdTHLfjyCb3YyRSPBfqCiu29fdGv3xW1bnZDHidCmFqjLAetkxL2wc",
  "key30": "K4PnYyzCMnR23Dg2RvW2wkczNnE2vdt1jEv5NRLo9zquRQCeL3GdWs6e32163sc2zuFLyPVPCX7p6aeLL3yqmz9",
  "key31": "jTXAXhFDj9qfZsRuFfBKFz7qE9UL5CVQzf2qmExqeVVwY3aR66MLaaL6tWxBR9CSqUFqyyE5AYr7zKLezNy5Dcw",
  "key32": "2NwhfdtDghGggbdafpUg7DTppXYAw3bJvptmSrBS5mkgV6rzY1B1EbuM43fffnT7mq2eDSoeLEDrNH8n72k1RwXp",
  "key33": "5m3eTRbQ9re19g97FdaXnkkzV7FTeWtpjuXSnGYtrKnLuUmSd9FpPCbY7gbCM1XAoMtZurtLsqabt8rVBBd6agzM",
  "key34": "5ETRk45rnjxHF5Kznjjutmaw7x9d49MYj6eSMRBzy1hUttfnmuPgkeqZCi7byMayXaxxRAs6vdoSv1xPTVDTxKBd",
  "key35": "TtLLFnxZNiDgYQcH5A3vgYjDwUAwZjo4LJYNbWAKXHuqbmFmGicsBTYYQvnazeLEbRwUrHkyNc7bNpr3tntf2sN",
  "key36": "4gRKoq9TAboBA6K4Fp3A3zUd8Vpuu3gGs42EaNz6kVVBkn2kjN6ReoJiXLGT784bhCxrX8Ezy1QFesaFJmemxFDi",
  "key37": "3SHEpjEyYPcQvMbPxREvq42P9k5NaMRdBZktiGh6G6iCe6uqKto6orJfW7teuL3i9bJcGit6ZvSy117wnGCsbY54",
  "key38": "4XJtTDek8uJatpBYiwkfTUsaJMjQiB3p6uec21ic12HKHqBLgeeMCHcbPqfFjUM8AbRHvfHZa2GhWbHNGWwcqUaj",
  "key39": "HhvN8tUZQtA1RbHTiG4VD5qgHFrxv8R4h6EukvBuDzzWEBXFfy2B5Zv6z9yXQ57UpBUiiTJNakjL2JiCcDoE2dk",
  "key40": "5kHrG7a647fnLp11aufVJKgz1aawBEnHGVz6pNE2C8RnkbPff937jvLqVPdXktzNFemrfeLnFz2RNDm3XMmDhGDo",
  "key41": "3jN2uUZj4tb6DJmZ47pT5ErVoboU7sANnGDyjRoKtjQvcejdYQ8zkdiUvPPKBvrabnNdhhEt3qCti1wAxMAY158w",
  "key42": "3Ay1Mwjfap186wWKxKYBx1ES1VgsMbaDcEnnSBVrq6MCfVQLhXQ7T93ZbeFgiNzqPuAo1jeCH9eVvX2B5uR1SfpB",
  "key43": "2nAtvY5BdjJdAGT3pSYsDxgKkKD5VfSM29ktvyWZZJFXwsdUHZdfXWb8Uw5wPDAJDBmzfVvTB7qSWSycHiXENSpo",
  "key44": "zfFVWQYzNHFocvSKSTFhkvHSfgisCZAdTobtUp8Mwvkw57feAQsEoKywAFZLCCjLi6qyUT21Sd7uqYY9DKhAvdt",
  "key45": "5P3Miqi16PJH6dhWbYa8HGLrwY3qjbH83TybSMQupHPCsAKJih2o48mcWTMZeYeJAXTrfEma4Ftst6odWTSNu4w1",
  "key46": "2PeizfRTHSHK4zxYFwkQ3FYUmYmys9RnpaT74vNon4dnbCZhwM1BdykyWfJeN9YMJZwKm7AnkKHnjbHrAFryGbwA",
  "key47": "5u4HuceYex29pnwSd34nw3np1F1euE6FKUeULDQ4x6kMYav4Lrx5k6pAQ8sQtYE1pBb6reXLhN1J6ScRDGLffe2E",
  "key48": "2HdGum15MDsuCdue2RFhXYcxqSnSHuYKXRJAW2b4JyvjMf9hMASDiUXboV6V5GtPS2Dq2VyNzyH1iKDWCdds1gLU",
  "key49": "5czevhEMnP2D5qD1gpBUEzRc9SCAFLAsAzT2qJJo8xL7rC7UjxaN1WcNVzQKAY4DZgzBM78TADKjt4UyY3FvQhFr"
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
