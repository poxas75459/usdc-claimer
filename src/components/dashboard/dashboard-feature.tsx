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
    "4xkC7yegWDece5FURRLTW3RVxodxDibcoovduhVqJnFxyKrN1anK15ufoXHXDuJ1Sj32vD3JbyEPZtqwy1pCqoA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wv1rn2y83bVVhNxb2onL8gZExKUsucyF9HMXP9uutiL8isccY8Z5nRgwNpmLhjmXzF3uXf4fojy6UdrPAMrZbRQ",
  "key1": "66uvRDpRpWKntMa3CDcWUCv2cH84HLCYV2J722Uee3ThU1nCiymbzanAnYuX6rNUgTTnqHUCjv8hcJbvnWH1rfRy",
  "key2": "vR3cQCBQHee5nbmkF8sdKxswaeqhtm6gwLp5uFZ7tFuiNg6ziYdn4Z2mDjhnPG1A5GK7f8auVE7YdtnvwuEbto2",
  "key3": "2BkypgDQfcRPCVcxn85ngRoCaS4Py1Tq7VGpm2P6n3nhZanFBZ93caYAHkryBDh2VKACTDpyw7y5T8rFyZjoEzG4",
  "key4": "5zJoDX78Y6tGZSn8jbqniUxgu1WueJ3ehTG28qSL17tCS6qG1o9e2xVjFWYkQghPdDxkovPQoHY8crYk239sNBdz",
  "key5": "4AHDABP82iLneyi4QzVxfc4g7H3N524YCaXji2g5sevBMC1JujUycEPogmpnJvWnXwUrgeAqYNbB22SKRzoDWACC",
  "key6": "RkFXh86CwJuidfRcLjSTXusbNQF1gU3fr5QFcuqLcoAboWWWjbhGqc2jBdhsKL2BMxLjZMe2nDkGKj7k1KDZEuF",
  "key7": "3RUqmpRUm1oGGwANHyym4NSjuBe26zLnzZ7ZMQTUbKYUbEyKs3Tva4qQP7UzxsXxGsbsSzTPje7X4bmq8JXgWUgR",
  "key8": "3VxQcj8pofHid4Nwgb1KKxegt6MQgBneY2foGhcshgR8fYrZak5eXr8Y6HMK9wq6WrzovfSxHhvvPnwhfMGoKynZ",
  "key9": "2NURsXovbrjUYWcnbj5iWTaBSHdEYE9M1dva2FJAS9S2sdu3PPGp1TEfwzaFRBtPzLeuwVLCccbhC5UFPgdFgDzF",
  "key10": "4pbP86hwWbifYQYypHFEP3UgGJXvWXGbknJ9R3hJit6jjnMNGbnaMc37dpYPdCSetHanmpstx2c7jTkthZizAU21",
  "key11": "3HUkajLSeuRYNGnxLuVmpN9QbcFUdMCdLo483wXHL2vWiQEYtj1QPiqNkbqpbEZ2H5uTeWqSxGDEL64Y5EUva4QF",
  "key12": "My5Sk7buo1WbyfhGfixCfKzpEdmYx7WzA4WZjqCrFsnkPKBLxZ1Eic6MkMBysErWD4mur9uY98wUXDm7nr6LL1e",
  "key13": "5TP2Mg19ZNSvLegyjaEnCV3sJpp3Bzntk5QgUeb2vomdei5mUhcsjF8PtPXMG1jCQiUVXKir3TcUz1bjVCLyoiT",
  "key14": "2pXPxFXSjV7vNmnQKCxoFVudAztMh6AC3axBqGkcXU1A6qGYNYdGUNPt5957qdCRtguuSLcHqUdD2GRR7ugeg3n8",
  "key15": "VVAqs6Rs1yh2hyRDuC7Shfdai4rj98uqnEJmgYDYToBdy49GHEPAw2hdx33EcTtnodEbhmCcanA3sqnNEGdqXrZ",
  "key16": "35tKPuKXRMCJnK7TgwCyZgY5Gp3kARoRuaHDN5ko94QZwGfcQPWEKuwfmpBvKSLGRQrdRH5iqrjdcBVso94K4yst",
  "key17": "63Ex5XRMZxjwhiposprB8K5gbgsPzXxPGSStmQyjfb2mBe8642i6vujmZZ54JK653xMz1XpFvu9PWi7mWakQ4Hnp",
  "key18": "4PcWTdQQmGpsb6nWLpfWuneXsGQiEfN4ghSoJRd3Za4bpFnL9DM8zwuteaVGMDFCohMF8tbrsgBz3gxXMJ1a89tb",
  "key19": "9JFpkd1h3W5zrPbopQDyuDntLhXPsmcdh4p5rbHwRLhwBd3GbUxjUTd1eznikooNQwU37GvubzMpyzCwG4cJqmf",
  "key20": "5QtjhVkSWK5eXkbATQcb5vHLy85cBLt7WNXDZ9apwyGDGoE17DFrTtfsyjvFjRcBm6ZJD8a9uPmcNAQL1VRmNyab",
  "key21": "5SVcBNaQ5p3dnqbHGPqrrhT16NvqQhCVLyhBoPvsDfEdE6thQ7JW7cSiY7vSVgQisCXwDNHXGbMEXT4hpsJFHjML",
  "key22": "2cPhB1C4FmvgrwrLFEYvTVEE84w4v52DEQVVH7YAhYvPBbjcKL9m5ntuKMgcRU11Y5fVyUxsSbbv96yCxaHtP6fZ",
  "key23": "21ZH5ooQ83zg3oU6uGFdjVkWZ6h5ba8DZw19FxTyNTSaagQ1kVqT1EpkFi1xtyCZNKJ46e13ubCpksCqMnLzoWKp",
  "key24": "4NjztyZMRVt6tqhW78JpsAdDigZHW2dHXoWSKxiRC3RztCV5g6X8kCYVqULutkSRbAywuKyqgkGFDE5NkrgdU3mk",
  "key25": "3FNqFwbmvzxVbLfr9552NoTLn6SdKU8LA12agc3jXT2aP3Mi69FJgLYF4qDcyXMHb8qNn8dFo8XwhQXQQZsDexem",
  "key26": "R7cEgcuoqsq6vAAtrU58Xad8TBL3VWUXQ3BzyGdj5HSaqCSxnKoFqJGdFHE3JaY2BHDJcWf3mnkakCpN9TJx6Dx",
  "key27": "2eVZzEJEevF6QARjmd6PgYV5HdKtQRKFvc5zDUGVCx5kSaNr6DVo2vXEwL5dx2eNGGCUhd4b2CnxwvjbHnRe2URo",
  "key28": "DisZbz6myuNk9EwbTfeC1g99yebR2ja2xrbqxujn6T5UTR1b8KeYG4H6D8mrM1yeUmZvCp2LVjn4VXser1nNmLg",
  "key29": "5d7BjNUhJbZxJQgXHTR7UiZJC3BGX9qey9JkhF5SeJR2Q2oVJkpCoUp6w56kFVSyTpfxN5GX7T1qKiuJ3ipH9jeW",
  "key30": "5LGwhHYDPXks1ek88TBPKLTGg16QStAjKiNLbwPdEC2C6CNCQARZCzsgzZY2Dzn8zxLKiQYYQcCQpqgMu5fjQtFU",
  "key31": "4WeAfo39mTGaRz8AoA5BeESDA4arfYHF4tTGtiCAfB97imSviHj8qjtppBt5WyeVoscxoBA37LR5QkeVjRfNbB1T",
  "key32": "4aF1izmcUiFmM3HapqGj1kWnZxkZPPRdiErEa2uRjeYx4yubqoMJJwMS38Tko7XYHrvPinJo7LiKs4iaKfTrMbNQ",
  "key33": "4143wvTzAfSmw6coLpP6Ud6DhWcKDrYbuBRPKeVi1wz9h7bUzAEhA9BNxGe79Cf4reyBfJbneQj887U4hYYFxRTU",
  "key34": "2tTK6sipJZwjEZaULAFdG4uUYPo45nKqZn2CPnmGhdvPjAniJqVpSk4wxa6VpzBoZQx32Up7iGbPGBL7CeevbdoG",
  "key35": "vfmJqbCRr6iLvqG1GGFRoPCfSUfJk1wjpMACDRvt3ikxMiCkX1ZhfzUBCNqx3ejbYNeHz6upm1McsacBiCJfjQh",
  "key36": "2XHDrRtPU4LvkowKWQdFKNi2hXvVbC5df3Kaz7b9wYkJ2MTpcwaeaF7m4G3BvWhtQtNmWznhFtJvDpgQZL6uaRWR",
  "key37": "4sTbke2RoKWCjwbc8JeLo7nvHRa6sQkiXSfiwKvPKtBiaXgHGCBQyH4dCEYAJZvzCAetDBhaFmqBLpMLpH2S67dw",
  "key38": "618diaADPm3SojUwpDyGbEhVJJtJuRtsmwvsUkJv3Kksn77TMuBo6LtJRmbmoojuWAyjTCcNfjKjz8qjj4U9emSa",
  "key39": "5P9m3NzKFJVRkF6W7jh9CWqWmgrTwJNDSRjSVhJeQ96ToJMBHVk14tBDUM1TyBeq2PEUieLenR7iuQMV79S7UMNB",
  "key40": "3ud5sKssdwqNf9c6dgGxwvg3UrN4ZPEYis7DtjGKj1BRdJA5kd5vgdVKqATeRiKdMEHPenbP8i43Xk61Cufg9yoV",
  "key41": "4myPLmUVJiha7uBdD7B1huNvgb5KJBkJPgbLYPL9dq1jCikd7rx6ynknN16M85nz62q9QUZeWxqZ4FGfFCQFtAwu",
  "key42": "3VqQTxud7Lgr2b4yYx1pNBAY1sVEatvRtXhQBknMR9PdRggNuPrBA9rh7vVj6XHmkGxaD6svdJNfSuS6y3DBDCS3",
  "key43": "457ZF2Q2cPZAhuDFyzB3aDkPYqWB4KrWTzZ1RZEdsp4iyXznJwgYp97AofvtkgscUaAg81azP5v9Ss9EXAQy9hKC",
  "key44": "33EGDB1ijnczioDrGk6y4TR5QPLH99ncSy3MqNjBqKhHam38reheT7cpNvLuVvkDjS2hQjzvdZpQwfNioGMgxF6c"
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
