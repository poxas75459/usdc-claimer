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
    "5NLebuw8qmutRnAMmQJvPh32qofoM82rUjfxfyLvjfsK2PtyYjdh5RApZxMXEMXNWu31d5qZzpki9YiJcUQLY6cV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tP5AeQJ3BuLCZkUmzk5dCkvqo62FAYFbcXd6UXyah5G8U1NgKLvvVdcmL2nF6gqidtjtrG9cckwRMyH8p4TT7BA",
  "key1": "5pFPdaCJDWt3JqV3pXvJco4Bvg2gBRyy8mioPmG4zJahn3vjmtXvh1RkiiwxWoBAjQCa7g5qV5LVBqqheS6QmUWz",
  "key2": "ZA7CLrSsrt8EHPDmEmYZSLQ3BNZykKXzQADrJr61EJqn6zSbn2Y83jUwf8o9xRzqRSoj2D5YZtAdKCeraaQnGsN",
  "key3": "4PhZ8e1uE98jxxW69NBgC7qMXwjVAeAJ2bUha7yJ5UQ4fqaEP6yrCqWgnksrD2SzHCjbx6DmSNhUq2toGFkZnr9m",
  "key4": "3MhVFW5PoRLMpJmwKZBEG7Cb6GyUUWs78Wm8ANtKhUTLFXLvTtqApW5D5vrSFJveqeCARRSgo2jABGgpgQdKkGR1",
  "key5": "Tx6sZL9geDTA5tjZh13w7QvwsWbMXUpvZa9weRJokttuQKcREdynNCTbbGTgf9Q2feSuN5JQyBpULascMhh1TZ8",
  "key6": "38GxGMcpnzCdSt6bUQZcv2LQBVTtTGXDGYhGR2EZZd97okhyS38rpYfYJYLRnjcsaqGePvK93ksgecYRzA1aJJvL",
  "key7": "5syivGNibs8p7ye7jFJHjJ1a3SDKG3q3f16z8JbShrAKrwKAqM6VGyLBKrY966cuV9JZNhpiLXS6YUs7pA8SPmxh",
  "key8": "3t8rr3KzfQqR8mbLxvJ58egt5Np1o2LCGMszQ5m7waxVc6qjUQ5mKvMsWCHndSAEAHgYV2RMeAqtPP5Avqp8eJtP",
  "key9": "2sdJnbxx23SwjRm8jcg8yE9rMy4aKu87awzrSTh26NfHih7Ewngyb9QubgYJFVi3WLkZvZRcz36bfnHPc2nBJoqm",
  "key10": "BCi2gVcCdg9UETkAwSNdT7WnTZScrkGwrUGGNGGmRAWvEzN9nhrweTB5d3wY2A6KYfsZkaJVhs2LWjgUtD1TKQt",
  "key11": "8zX7WNfqSiCBjNsPXu1xiSZR2DDnoUJjTUMiYzUrkrJWx2wP2vUnQ5Vn7FEUfgxQDf26mF6Uk2Pyk12oX3fLYy2",
  "key12": "5iq4v8oTxUvaxsKs6XwTyoHrRDhuSCUu5C5GhgiGkTJpkJEM1HGK8myELARXtaZU2iK2dzjDzKqC4SCf2j8E1D4r",
  "key13": "2CcKeieCmz6Tdwvrtzzn6d4WZFTkHzeciL6SfyzSyhy6P1WBtDsQcrnUgTjcrmpjZ59ED4nYvYVygXyhLxeT4EGk",
  "key14": "48EFDsKfkyUeWSa7yFFaSidXT2JQV7NGRiCiyLucV6Lgnvr1ujppmq8bNi71rTsWggLohuCgV7eEw2Pvu5m5n9UE",
  "key15": "2d84HRSJFTgydDiX1PpRmNkk6dnXcSBwhhqCbA1ahhKRijvyQUqCHT7TkUsEAXaR8iYo4YLK5gkj5dsVPJsa45sq",
  "key16": "t1mnj54CUPKfsms4EX42icJWUvuBarxPy9d24qaNTmKhubmii5A1n8tBzhJBpzofwEsASQ3uQ4HHt5SragfHsrT",
  "key17": "5cAMs9McPGMz6rsGcB3Ba4cPXfV5z33447jp3fi8249ksYp5Nswrgr5pzFUVbr2GfdhwASZWkBw3LMoHYCY2HFX6",
  "key18": "2QBbHrEggk3A7akXiY4e9VvW939Ac1XkXbJbx8rP2Wvh99D1Vy3K2FYpNmm1WLm7k4o8xxUzvw9dkXe7BuMXCHT6",
  "key19": "5AtSGqBx7Bk676ZbDX97FwMxC6vWYDiW2qpeuFGhbm4o1WGJHM2RmPBYEr69nfyQDxMbccN4fFafLzNkLy7ZTrP9",
  "key20": "4PZvnMNGkB9mXdgvzveoquDdnwouRssjmrMuHxBKfYHxVkSndp5bRqwv7yE7USpTNhNsckN7gUEE5Go2928Y16Ua",
  "key21": "2YkDJVMqHn4XfNYVCibbZyaTtQqwxTrUvNRWqjReiVLVPi7cdfs5nbsRj7bZgNrUkSedS2icJotArqL9UZjnikLh",
  "key22": "3PW928sYg4Y9YQ1p8nDbkzdxtiCqqxFNpEndkbsR7ALbwd1tiU2xGCLezv7Xxpnjg7XYEyF9Dbm8DF6u3okybgro",
  "key23": "3yBre9i6hp2zS9LrxsN5JKBKJkEyT93cEhyB7CfX8pvXnGyqf2bDojFVnze2Z6j7vRrTWy5HhShpZkPpUAf84qxU",
  "key24": "3HjT5fGyz7CaPccnWXEZPnujT9kBymtuS9NzTbVpuasniLx9y7oRNDb3N2mB6zpLVVQFKjxJ5BJFNmSXULPamEMP",
  "key25": "5aCwkt3sDT6wsiiLrnWB2oLDGfenqBt2vThaRmQHKud3r3KxK5QGTuqaXRLq6qwxLPMnzpHwrgFNieqspzexPrDa",
  "key26": "4V7nJ5mSgpSitdqSzLEMtn9jwVsGYRGfDeCRHELFiggHSE26XCs2a8tEczDEh7unj4NU32byVGGmXkCFnpiWv3zc",
  "key27": "wHDPCVpbjamgyAA4MmrdEDuATA1Qnv9dQCjW7VomZghxL6evGpWNVyQ25c5vwsqDMuXNtZEA4EzXuTa9BrtdsVZ",
  "key28": "4GGPdGVP3sVkAfN7fT5dZaNrLUFbMEAtU7bCzWW6b8bpBMRbunY5CX53Mhsr2kvz7XNAze6faXKXTzZMdifyAsLm",
  "key29": "7Ac1YBqHn7untcDMBjc7ZkLjubVoDFSLFVgmmWiQLjNeJUBdr1ysLvn85s6ygS5YADFvWpQdCNBoDmTnvKVYAog",
  "key30": "3boCbYj2Fewe2yF2ebxiGAoaMprrsqZfmmU6HSYJRM8gZ1CYs9ASbW6q6zwZSf7mebR29H7Wn5nXx9vEQMci9Dvb",
  "key31": "3caYfcbBWccdZQfGvkiB3UwTtMEeYGLYbNvXeGegLULan6ZwMj87ddFpnhmKY4g98SUamCds8pwcHns9xxcZ5xh8",
  "key32": "4un1wYCDV2kaSRCCWArC2cS9hGmdByiczQy6CMjVXZ41P9vLetyXLQSUbZdMZmBf7CM2Re7KQrfPLcS769GRWCo7",
  "key33": "3DbGmBgDLAAyYP9kHNiQcBUJ48Ut2aykQXiqAhm58bkqsXKSEUC6okiHidbqB54etqK6d3R5MAb4Ym2TnR2GSBvq",
  "key34": "5sgRUrrN3FVVn9dDfYdLkrBGZuv2k6xQesV473zvetYR5WM2ohbXfLwuPKbYeRfoKxx6vPbVk9fzjerZB6VAD6kN",
  "key35": "5bo4qy5mFgGYC9v7koD5atNQHnHcMb8byr4NXDPTnwCCgskWEzVGwvCzMzf97WZGmoY9AaYuB1ykR1qCLGAwqisS",
  "key36": "2dUYA4pvFDgeajrZD8nioms5ytwKP3LUvN4edhpyX3GycEWDUwSqvStQHdcpKrr8azwE995XNP5E7Zd8i9yuERV8",
  "key37": "5FrETBiGAHsw5yuQj9Fijd4MFuBiqq2ZCHeXFB1HuQaVLYo7q3Lp3iJ6yrqxwMSTfvsFuKxocR3JRkP8aQjPDtvr"
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
