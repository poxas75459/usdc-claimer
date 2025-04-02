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
    "4oxq91qHVmNtuSjnhxTDHZGFCxA2fPeeq5Stojt1vz2wHiTo1tcTr8q1FwJcq2BQn7VF9QV3dBGxrdfcxtH55UUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jzZc3Uuiz2opEYWF8S4a3bQpk71HmKSX4DnZ7sFcZZYt7uqnBj9K1Rx8hikcPWA9BuPPhnYQPT5YHMvQai93B97",
  "key1": "3x2on9Ak3Z54pFQeCvVovaEBJYiYGJ1Mfx8L4FY77977WdKnNBnBZMMxL6Wea7f8uT9C7AxHUifERLferb9rhxAx",
  "key2": "3HfMLLkj163uwQLU2iRa93G3mBnuA8vXxNAnSdErXv1boCMXVZaMSWk57FtqRkcdJacGmxfMReNc4NLA1JPjy8PV",
  "key3": "4aZNnm4EnbUpfTybFCYf1YYRVW13KAZSdYmuHC71B5w4rLyTPdZ7NFajcWXtTr9BoFJ4hYbmWar7cwHtS5zZDX2z",
  "key4": "5LWk2MEKVjethV2NcmXMU8gVBSnzhojtjq7ELqMtcJ6KmpoBZHdAkWggqzPkqqSaBZjiLr5kbQkt9GU9mk9YgwJb",
  "key5": "59jX6xEcLua6kGCKGTuhdRb1bzRXRA26eR3wQU2fuMRcVniDJM7xWVA8fm5aSz1cqRHxPBXqxmvjTe3jMNMx2TVg",
  "key6": "3t9BJbS1KYSkycg9X245GsQGACiRf3E1RZRsKXFDn3GqQ1vXTVQGN4JqRHXGPc6kWUJ4dsCGsgsSzYZyqSD6mJBC",
  "key7": "UKH3R4mWcu73VDUXffGJj2MZWQNdQFaVZqqbkVejKeGihWBcM14Zr27JkE1DjYYcowb7b9kqeEjHmyeUvSNX321",
  "key8": "NFRuabquQyjiAZtK37aREisufGBRQ2xKcz6gdzMskrc7ryHsuvbgx89WvMMnEoAuyxX1aYjFnoScfEuj6biuX8M",
  "key9": "5ZnvhNWhssYWo91FsTRKYbzEHnAobSPpCaz4mJw6btEAXXSZ4cZqAsqHJaTvsaMhKQtQZTnyuAphqPVpnagmfxFE",
  "key10": "SmfP4Xr6WoBnmUsV6bvqnJCj2pnTHaqj4Tr6xpvPrXZwxA1HqLAuYjmk1UVrzA8BUkrd3eEtNHSduy9jZ76SR51",
  "key11": "4heGWykNWiF5ZX4PnvZhFDtTKgaiHUjz11QVJgx9MzFvXqjxtNupMVXjBFTZ4iCqJ43NrNUuSv6hUo9jgMrVXUb1",
  "key12": "44aNgwKtb5vjbz626m3k8n7YNFmhgxihQfD2SWMhBvpoPeeHk6SW12tYXNwsYw3GJGEPaZkBSMoekvsKGXSY71uq",
  "key13": "5BZn6MmETuLaUhRzkwbQJM72va3a1WyRUBWvXb14WrkuWrij4hcUpcjt7RJGn4AMdNa3Ei8ho1Ks92WTDpnbk4JV",
  "key14": "2tEbVKQP3KMnSwUxiZyfsGrbzXzBZ3Miz6YWmSte7xfDk4N4pbuSMCFohhSs2ZSjdh21GsQMbQMuQEBXW7UuCpQ6",
  "key15": "3wFELEYTt5SDfc532eUjpepHJ2RaA17GU8fwT551CeinMPpRxhpHSCpG8kJaoz31sM94BFYT8zVbQWwgV5S3nv41",
  "key16": "4zip5PH7NQYxHu2BTH2AGF2RMUvr6TQKU4DWvuNn3ju7WCvBTjgvqg8rjSiM7NJbFShKZBK8bUh1ezfTLoRsUCX5",
  "key17": "5jAzJpAxQjr7oGUxr82zYhW8MrVBtuKPCoxcHDPVvDmcghjtacBZZf5jCF1bXqgUEfHLXNktxmg7gUWcNATp9Ki7",
  "key18": "4xSTRfLTfcCXQmQEbC7So21WcymHiGxToBY31d8cvy6yQsdGGVdy37ccTj6HpZ1ndSyA5Ui6daAzDdTkPLsjzDt",
  "key19": "GPzknkbCWXZEZaDwHDMh64acQjkDDLsLiLizYmiLSFT82G9vhKWxdQRctb4VAdore2cgNR7XRsXBBgUcskPtef6",
  "key20": "3C2noZSQizNfw79Ww5TNB25EpmePAA1qrR7uMWMUf6RfFQR784TopY5y5pmukbLzzmCQPKi4F2u47VmeuXZzs4py",
  "key21": "3xUAzbL2r55Mh6YuMc3gW1WA4LAsdMjHCgxp3rkudVpwkAYb4XPoyo8ebiCttdPocaMiodvcifv1EziFi7NBNEGj",
  "key22": "2U9zPWBFczKyKq5ywZ2NmqnBL8PMxXD1RrjXKtGuFoqmLA6FBQDQKN7PxL2BQnhpPQD4gJUZhiDCXeUqs1tBMfee",
  "key23": "4EqY564NvhEB4YPKc97gUZZnBpEaFSZhhaXXk1rAn2exHQxGzgMH3f94ugMxKiJGqXjztWwWR1b5GPp7fELESCFQ",
  "key24": "612w6iHTGP7BjnCmfkKk4gqCnYxX7UStVaS6YHBty89vyArRwQQXVxB9iJKzkRUiEFfySJULoAQejKwYXPnNpgW6",
  "key25": "1zGCnxnSt23JvL9GmKoL9o33CDfeG9yXY1ZJ35t6baPFXtgE47kPWPQhB27ANb8e4gqY9YWDvLiMP2FJi8VKoJB",
  "key26": "3onaJ11BXZMP9YMDeJuUJUg2XeF4MUyzyVDbUsoKiHc3F32jhyXKTa1ZqnLXoCFcRLQh5d1eUpN9J6nzmhwKbazW",
  "key27": "61GQgXmojRgJbubgbpj6qiyf1SFXKG8BdH4CqPjaH1UogsNr8cBbEHBV5bizjhDB7AKs5Nn7rAaEHWF9iKX76bCq",
  "key28": "3HAaGiHMBBqBNpJwiBV1ZUeMdmtYsYV7oQDL2PDHLtQ5MJDNhZxFbTPPCVde9XUPJUJQKqjmoURZdsZvmR9NpHfi",
  "key29": "9htSHqbRQkWZjoVsM5xPHxX9mKJ9DUndmPgjnEPCpG1ge4mcHkMWkANDZXoYmqvF3vRvZiXtSJgXxfyJ2D6XVE8",
  "key30": "mnctEaaUbaTtqyMmq1kfkzRykNjLYoYwpCroCiuiTti4MM8M2x2TzA8WPfxoQZdMtx4SpU1SdJBeHNcs6NcjC6r",
  "key31": "3iQhYukmmfE6Bh4ESLGFUonTyDLwC4ghMZUftyQHFTXd95jh2T7orWT5k64fXAvjwcjMQQ1GfEnQa4ofo2msGH3N",
  "key32": "5PCspyKFxS9VTdhskrQ5AQgYZP9YqHLDabc8wRvrYz5e7bZXHD4U969NVWpVA59vRvQiKZ7fnMZbpREwvfQ9w8AV",
  "key33": "4bCWQhTYdHoiCuqXCAtUAcC4anC3Yc4hMyT5iYUG6MCiW8iW3QfHNTy9Z1WSkt8X5eda2LsCXekb6TwurvJmhAkQ",
  "key34": "ZSioj8xBfmfhBMnxVCU1NugM5UeHrzdZggk1JccV1n3BbR9UFTEUxXy8DiCcjLvCgCbSzLESs96KQqDMPw3gGub",
  "key35": "4iAP8UTLBWNKWpjvTxL7wWuhdgcBUva9qBNj49bXMH97CKN3vpUiVb6QjXHvLihd1tVKtJcwiiD95vQkKqRsAMS2",
  "key36": "aKFwnCCM4ay61sAtrDKLq22wyJNGcrqXTWFaeWubqBfCHFSzHbzvJhkRRptMha6Sj1aFjhSWE5Fy2Bqq8VrqTf7",
  "key37": "66FgoVKzc7XTfYfdpdwxxXBuVoj1sDm5nVtSr6wCMpiA2yrHjJ8zNfmpyMzHG1sGgC6uUZxkUN3pnH4Vhf2obL5z",
  "key38": "5mWkttx6eoYESaCrDL9J1U6Kg34mYB1kYAVhniX7jxn9p181sNSzQ1ci9f91ncWm9UgegLK3maJzMs4nCcEWKaPC",
  "key39": "5LtVEbhYbGvvmomSMSPAZYwvPv7th2uGXSN7crZzWXf8e3G1aR77wM8AxFZbPhmwmRTJ7XZnzEDf418F7hVmkF8j",
  "key40": "67XoiTHDx59uaTDUDLxmvsdhG5gkcFct8PxztWpfkndVkLUi2YL7PXFc3qfE4KwqVdLJKLCHTGAmiGcKLdQmJFYe",
  "key41": "4C8wgC9Jza4Gj2phKvLhN8SPXn9LUZaCXhtdik1AxUuhJSszc7VXWAdPCvrU9rYfEbp4JY1mfgKcyMD3uhhdREvh",
  "key42": "4EBxJJXPYYMTMGrTb1bRv2jvvjX5WhwuVhkZKnwd894sd1XN8WH7pVBYaLU7J7Se8Mgcv9dyvvpEA4gt6oF2RAfH",
  "key43": "2gEse8vwtZVX8mzz31xzXcneR7chmKF8F2HUmEUC4C92mhDVpTQnqkFg9E2heBRhXvmQMrAimaza6kJkbY5NBba1",
  "key44": "3jA9gjxXBLvRWXSEtdwgY4mwFcGQhmVSVxCD9K2JWxBxYDzUoTA53rMBD8LSAgBjqjGLCsBLDnwtfQ9b4QUEQykM",
  "key45": "3TyUoLjtJUbpWq4BRJtMLNduAnuSE9GSxYQSBL6yphCNRFvy8LVHZDWxk95LEJPHTcUuQYWebeGjP3sD29mS8Fsg"
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
