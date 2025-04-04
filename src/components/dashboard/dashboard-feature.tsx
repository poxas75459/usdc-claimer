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
    "499oypjbCiCAyTK8gEsDxLuiJNutLd1m73ynxCKzg2HCwKr2LJedLTDnEnh3XvmistLBzLmZZiXEHbZJQtjRjqKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h392rea2tWqoMpWk8UpGqcHgnoJYc4FwQPWc9XfWhxJC56TiBkGquGHSfgXR5PguwXaC5MmTeHYZF7MdS9yLcSq",
  "key1": "4WicJUMY794ofbcWY3sTQCojsiMicFFTFzBahm6EAeXdcFxDxZCQb7qo73e9UH6Pa9XdJgB5qMwEj6UwPma571CW",
  "key2": "4jyvquJjNbUzgZYJhNvDCYr9x5H1dzXsXi4d2DU6BYD292hdkYgapx1jtfu7agJ1Wwk3SSTp73RxDvbvF7t9p3mJ",
  "key3": "3onYY1cN1bhuu9bFqGbSKJc7vea2NTWSD3n6vSEsLrLVtKHcNpCs5Tfoi3yoFsg4dWx3WxhTEaj6AFz2q1iJxL8L",
  "key4": "BTYz4iF15QVxvKikjh6C6x93uvsrhnQa4vSYdhbS3kNBjuG7MbjrugsEX5UY4jkYNR1P5KKEqnyWyMzDLocbusC",
  "key5": "56pAGSq37TqTFMAqi1aGQSi4zYt8nwkcF4MwfzNXUEdmgsW9Hcq4jYBeRtfH3jR3YKdZ3BuQvz33FAGvgnSSaieh",
  "key6": "5WPcDQcY22KZNdyGpHyBQXPLpbGCdyhafTX7eyCns8YChm8pKCyTxCR2EocEnxKhyD4sw19qMqUubpJpksCCQFua",
  "key7": "4QTbYpc9iP5GEt7h6yLocWcVKKejPCRYcvs2FD5jhdkQHuZqZUJLdfGBfQ6qRdFsRzYS26GzBEHmw93P6N9uNLFC",
  "key8": "5QL5b333V7dwYgifAdSZrUkXtoBTgupa8LXPT27QmMvgSfhhg1yt6oDmutcT2j1ms9qav3nWRNTCn2HV1exMvhP9",
  "key9": "44gCuee8wodzcKGMv9XrmE2eHcTRH5bHb2sy7UqfYcjpxULbL5i3iFDHCCjA1omWjjF9vtghtSYyoHMjwYXXzT5u",
  "key10": "3EmXpyUtNbJdi7q6j96CX18NuZzcbFDpdTXfe7Dbgws1ojxQGGYVvKAtjwNcNokrAPhpgLcc2cbHNVV3KntMYqks",
  "key11": "2TUiJDaLxfQ5egRPYoDFGyxn8MoWYk1gHbpMXSTScvsGk1FgPC1hUfJ6xGqcBanf7YUbpPDudo3yviktZqbJtPnQ",
  "key12": "5zTuTxc8c3aXvUM8SQ6BnjfkXszGGWC1YxLACHwQo6CSWNr5wLHjMb8NSwLy5ZKDZwbWP64UUnbdaHjatksTfDsw",
  "key13": "yeZaNBfmMEVT4yM7eHq4DNtUumA6qso3FGkcoZmr2mJgzi7YhifLhfG6UytYwp86JsJv2A8spkbmSriGp1Dzbqy",
  "key14": "dBYAe66Top6KQy5f7Zf1qECCiXJxWPZJdG5X45LWUFv4SbgQpzFdLZ32fcNQUGP9rKuvXwCVJonN4hvdywtk5wv",
  "key15": "358pgG876s6JgH3oPvTL592EHqCfACfPGCzndMxSW2nQK89WQU2SkEobSC1Mk6eTKuWN1gGwrNsP6tCvgE18zUJA",
  "key16": "bjbmpGyXbnprrY2XG8QMdnN7cDLwCCFtdEbrks7KJs7SfePC7ceGKHASgxj17mKFFsakACf7yDdQ4NaSxmrHSgK",
  "key17": "5gY2qweWm4jBcRc12DVZgyyZQbopDAQonUWiyYKarGZC8bPtvPF3dgWtyMjcMhcAVEWB8JqfSHMA5Y5YtCrVZpbD",
  "key18": "34VewVDN9A9x5LK7GYWW38y9QqxvTqANQXLeykv7FZAhcgdkqAjCutpp98DLFRFSMzddwPDwXdnxaNGjd2QEaNoR",
  "key19": "4QtnjhhdSNkowjXXWmcYEkRAvAwdM8Hd53WExEdfSxuq2hxzzzA9auirSpMX4w7xKKvJQMmxuwDUTHJFbH158Ncv",
  "key20": "ysvcPt9pMqQrZWzU2EyoShsYMVbuzCAGudxaDKaJBNqmKKz7o1cJFcyV7WC6PBZ52s1hHd1TCV2RbtfNDgGKm3b",
  "key21": "5ga8SYsAuwmFQ8Nh8rQ4gJormFLNCq19KJ65CiBrBXNKv7YovsQ5xHUVc47kdEL7V4AmJdbVTjXbDfbUKKWrT9ep",
  "key22": "28Vzfo7wNF8K2CEnSUx6eAdDTnH2yh41xtgyr3UX5RNN5oHAAmNoKNH3LpnwkvqeXKSWhyPRFe2F1ZKSgj7onU3X",
  "key23": "2LMMDz9QB69TZ2v1wvLR1vfgpQBNZRpz5P6G34ppNk2VUL1zRNyEsgz8LBR2mtv61HWmbk2DxigQQYfopWsPZAtn",
  "key24": "2Q1yCt8TZpz5PkYV1zihjhw5ZKTcEiGwwY1JzYcC3k2zvFzPScSVPKotPGfMW34nMMxcZQkArWcTUogBnoAGWTy3",
  "key25": "kz9LBMyVGyyZbMkecDyqR7wgFJBPDArxVNQ3J8VB36vA3atWFpTUvXgaaNsAr3PJnwL29wboEs2CRC4FTvoXbkp",
  "key26": "3RFex6cx3mB9Z1eAoBnfg4qXpAdVKuyu92FasTahdj2FAnj2GdWpFKcFFhRT6Wo1fReYUzeBybXdP72hfAQDFCAc",
  "key27": "CKYRSBoNStnnb1fNCWx7dWUrihYvmB2kM5QZb8JJKXwUCCTBx2qSMDiEFYxKLPXGQcebYfQVs6X85KSQxHCB6Lx",
  "key28": "2AognwnQBAchkTyj5VSnetjEMHq6Qfyi1LLPhctFiJbFHpf2Nf2wNynozMZc1Cc9iVjVgTTZWJedMywVUWgN5zQd",
  "key29": "4txxkbZs1nP7WrbbbZk2eHDKNudsQJLNeH8AyD96tuNqhM4oQFwcTShRRctuQ7bjRgGaNiep3z5nPqbHFcZJ3TA6",
  "key30": "41oysV6mYFUc9C3V67fdEKur6Y6tjpH3GKtdjF29aGJfYzBzMYZZRSCxLoStL2iTdcA4YVS3u2cf6PabrDof7s19",
  "key31": "2daxVW8FNnWpUY9KGd93BFUY3UtRYRzatd4YE5AS5GV2GgKqZWhCuwUyDXCkVCpQJZiXZsDm2PSp1REe2wwviiqG",
  "key32": "2M4MYLJeXtEBGudu87MuF5AThevk3jak3jCBHnjdzAyKe5D4zvgg6Va2SEDEU2uNaagTndVYscmaKwSiRnKxreDC",
  "key33": "5dMqXBkPeLRXi6LjE7DiXnMT2xiB4fsiy531VaBMWg3tzwFnvvYoW9Dv6BF5XkEE259skspjhJRXJRAZze2fSmVU",
  "key34": "47q6a8UZMvB7QUCnK2sPBYUGXRySqGKtBFFbe8pgswimEgJhm1zSnYfyssrfM4i2ncYEsMbuL5vmJ7wZ87FsK3Nv",
  "key35": "54oByo13jfQm9VTmSANSfeJNbqeM7cXS3Q27xaxdjbf9r4UCEacRWMcfjx4LSAg9kyUv4u7XphqtD6H3juAYVeVA",
  "key36": "3MaJWcGUD57b2dE9Bd9AtzHmdH2guv1pk5PJPu4QAYG2tmWMmU4gR8kxuyRVKQCHwELzH9uuTARpfQanfhcmSjwd",
  "key37": "3Krc1oMHAtKAarevebBhbiVWrcHMuRHLgtCJyie8YaPyaT4XMzJg12ksgX7cT6NyPQKdFPuDTVYpGM5tputroYiq",
  "key38": "4YjE5iB3iU31BxSYp78sqgaiEHxMEVN1Pkw9JdG4E3M8BvcRnPhH9KRnvLot1cnjWrianykgN6zMQFZfKCByVdz4",
  "key39": "5ru3UKvpQYz6Divp1T8QM9j88Nky1NcLfs2vE9y6jTXPeM8kMKsB6EyRApEaXcgy6zSGBrkB5c2rRvSKoN8UQGdi",
  "key40": "2MCsYquL9q2gtHiXTSsNepYDmMGPDoB2kLy1jcGb89Bsx9F1PRpEZih9iuAWJqcZdKZjSnmxWo7pCX9u3WL7ZBKg",
  "key41": "VMatwuMQQcLJ2zRhskdfdTRTQADY3zmHAbLvMvpNhwbgcbnpCCxRFvzzhWA32RNJvs1u3yg1EkyGCJ1qce4AUrn",
  "key42": "2NjKnyVrjJb7Z21WQWaeFGgjFi18ub5mdTDFCosqaGAYfky8hzj7LM5JFzj5rTivXcVgLTGoVhU9PwDJ87ATQmob"
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
