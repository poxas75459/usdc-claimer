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
    "35hEFEJn3knrhsu9S2AkUWY5vZFfRNFL5vyTgj1Xjw637QFEhoNyuA2hwJe37SyEQwfYgZat5Nqgw34SaAZsRymS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CcQ9oEXaRkr5JCmf3vFEGzx94w9YaKvdNPKCbx7bYoFj8hbcVM7sAXF9Hf57ZPPpoEjZQDjJ1zcqcptfx85fUeM",
  "key1": "54yyqjrKsUZXrQ4AKE6KXUKir3sSNgG9K14NGKonja7VRBw7voc1Awd4Z5qSaR3CsidgcQRFXDmybwihWpDXcw53",
  "key2": "2wyHxPAoni6rGvNxcNWbvXvfC4i7Fh7xKbe4donCdLb6GvTgX8Va4aWh7xqApCTWpVZ7dkn39JS4Bc3RBMUeh7Lf",
  "key3": "5E2HhJ1PkD1PEKyzcun8FLPMusRL5qiCX9Bzp1Camu6yiWon95ZGPsQoBTTg6ytQLHeyk69WvkVVwXVNMkZ2ZDqw",
  "key4": "5iZjtsxHMcJ3NdZ8RbQDpqbsQwcSzHMnnhrtxCFJjywE3ze7MkJNUzGKNuGHVnfpm99emDBsEbjgWA5DB62wrpDf",
  "key5": "4UJLon5A9Mf5BpUJPn3F365USvCjJjMMnKAj5cJ2G5r8iEqS8qw7wWiZys7EHk9PgaqsEjcztmfFoShM4BGuYAPh",
  "key6": "2pAYGhbb4p24o4T2YkoNLXa82CJVwMnr3s3kLtWSahgP5RTnwzhAT8GkD15T7UomtvfLHLURu651V2As3hVPaYVg",
  "key7": "GngFgEbgSimxjGXxKo5WTLF74wKv5jsJoZdNW452WqFwEqWqgh4N1Yh9jUBLKzbriAxVru3aXKHRturxW2Kpe72",
  "key8": "2E8ZE5h7je2n9meVTywpF46VmD76sWP9VrASeA41eJYdHbQScKX2NQBKgWKppyP7pMw88EDBS5AiUKH2PmcX8HnZ",
  "key9": "4woy5SRRmDKScHwvtWMbu2wevsnX7o5KNNtWzTYzz8nn7Mwz5bZb7UFKmqoU8rKR4yt2VJke8mSE9C6UZwCAGLyT",
  "key10": "6zp39cdftjRFmYp6DdAdbWud9vxdANWVs2G8B9JHQk6BcbUfn7NaRXJkeaEFeu3xRuFRDhetUuTN4UiqcEK4A3C",
  "key11": "2oKLk3KQyEVw4SjRDBVxpPnARsxzuhBMRMhk2Xuw6E7dF1Cr8hJrjdLTVteWG5479PNnPNFbviuPNao8zSFjeJg8",
  "key12": "4M1TX9fUBN8X9aXdZg8tNeWX6Yrw9SEdRW8t4FbxQWwhURG7MPPEsK27dRpWUMpgMrFm3nQhrt4UsUkzQ19YqvAm",
  "key13": "3Uk4NoDYtJNyjdEoCEgxksRJJQTSNSxH9NSaDuizpvAaqxDnPK3yvLjSYXnjFVd7aZChYC1a92BN9QcSYj7vQy95",
  "key14": "5DwxqpcvhuPJSDTxeEwgSK7apDHWHJxjkC7XfTUJKjVmJaLjbWqYrSkXsm85N4KcDPhK9TBJ4creCpFBZ8oYYu5C",
  "key15": "57ir52TAEy33dEWXEFZBXmN4aizPPBLruuJr1FsTBaqP4kGuEPXrGAoFE3z8EVRNiYYrZ4owQMPA4WGKh87ChJJ2",
  "key16": "5ixnMrQm95CJagQHxiFj5j2twMgYrpq3z8Tcb45c4kceYeuQhxRwt3WXWEDF5rv2qJsqZP2iioUckPmP9oXUHeer",
  "key17": "2zQg3Qi9SNBTqb8XVmSdYiYYgz9hjAmvpVKiDeTKxm59XarR9oS9sbTvL7jM6xmdGwnA2oR9fUrUiQztxQ9QyzAB",
  "key18": "62SchAB6X1YA89hWMF9iQscTox9DX2WtaVTP3V3WLgkyGUM7SB6evnq7AgSk5TZLJ7BM6sFfhuf1pheLnN7GJSbb",
  "key19": "5xcmgVFytooJsgtg3i5ZJg6kM7BvyAm3bZ76zrwCqgnNtMtU45FUxTuvroX1YuvhDHTaSxY9k8qSzUhZ6YJzcgdW",
  "key20": "4iFZKVK48aeDv8pFJy2rcPE6x3tKjK3GxeFc3v6EwugKzh3Ut9xnLd6rEzEMGANfA9sAF7E2ZEgsMpUkE9GuwTXT",
  "key21": "5BbkBjXf6TUwPDV5nzNGiv52UnFwEmfdVxKLx9BLDmYaqzSn362zXF7UMxTG5BxjAKSeCW6F8rh1f1PFX3avgapc",
  "key22": "4DweW7ZDDyEj4JXkyqu61YTyBJFtWQgkhmNT3FV3oySoRHKMKStz2J5ty5j4ZbrJ5p51RxoLa8rp1K27i7pahPmJ",
  "key23": "4BtMRNxGqh5iytL9BJa6kcZuAqdfxv9Ug4Lfy8RdCJM3VgzXQ5Bvguf5gv4rE4mYwCzqUsv8WnEBmXpzsoiqo9PF",
  "key24": "5HAKBZ6CcJeNYeB3KUEv2sNJj8vYLUhvrTzt2vHSwVd1ZYHunxrtyRMMMhNPggE3Wtvkaytub8Yd8qwPD9Zur13p",
  "key25": "9Pf4r4V1rcV61eubxajvRfvhWzomsqMJSmMfkHdRmWBs4JMbNWV8WXLmcmSaefwZ1m9oPn9XiCCy82wM1MveRuq",
  "key26": "5ULX8GaGc1d9SyH3Ze2LVJSSj7BZQpR1jpnV4f8pNgMiTAsnD44ejYJbwL2kL7vy8mRWsw9h8j2MnTBpZzD96XET",
  "key27": "3uLENczvnFN4WFBp8rXYyrsjsUXa6kf5awcxmJaXGo1gvxYBaTbQ2yNLDZbpfTjG6K4uaLxTkWQyqMTXuemNvijC",
  "key28": "2sNVY1GUYSFdtdvsbzbNvuPxDhK6tVJmMzN7AYe1KFu2a7Bqw8jHaAEa63xTgpvAqtVEJZZNzBjUu3bH7gJTDWkN",
  "key29": "25MuqvSTsVEvBzjUntkHkS5mDphKchZuBr19QXT3ZdxzbzLzhDkL4wR4BHEQr4DfDRcpd2jebb629r1yR4n9dtB3",
  "key30": "2yL11eb3g8X64VvTiWyoomwtYmp337wdg7vVq2Ebfm4zEaimKr5YS7XRbJ3q9ysL7EgQYbb8geAde7bLV6rWrWuu",
  "key31": "4dJ9zRAmzyLYrhTF6sfvyTAyoKwERU7a6LrQTpUo4C9shTwaTYiuC8LGCtdoN7F9TVjBvjoMFzxGp9k7xbMjouK",
  "key32": "sEvmr95a98NPJDY1Fvpe7MBZz1djsvxqs8DVu8BjeNq4NqqUFffZLKzhkVCaKjGzn3nd3Wn8tiZi5EBtpwUmi35",
  "key33": "8xrqRKaNs2bbnzLZuwadzVGhdB544L86juPaFMAe74bpGmMpwivFonofwj7qPH2F5pG1VdyJyBwpAAgraaJ7U6X",
  "key34": "bvAnA1ynENg1kGsskHGeFK9vEg1CMFmTbz1iGvqw2CbMmyP2iko86RdyMo7KGzrSJee4NYw6Xmf4NduksRUfQWD",
  "key35": "255SZVbYL3KinjU4JHUTMCsGbm8mmzHiNY7262YBdqAejL5PvZptPtHc2MzCBd4z11PWVZHB66aSyM3jzFiLxj3R",
  "key36": "3LU1qWUBYaHnBekAuiCinMsQerxxZH8MwXZxPsR3JruMiM9RuE3kE9dCW4SE5WkratWkDgfWNfnhMk5uTaXozYG4",
  "key37": "NH7xg2L6DscG7GLRtpgcnLvT9UN19iJL3wBaPvjxyGMUUopYf4mf9VpfhniysNUxuFWG8a5KqTEfNm95pN37K71",
  "key38": "5KA7gSud9mfaTJGmFdoJe8H1ZgKTszGJpb1XddfVijMd7Yqxfa2LtGqob3bxRe18NxBLAULjNfSuokg3Y2EVZF9",
  "key39": "2n5Kqa3GSxQat1UpF4z9mzvN2tWNRxUbfg1NjewiDBMCzh1jg8nCzqpUixcxXLdW8QBjPHStpZA7GVfV7PGhRGby",
  "key40": "4rsyBjUR1P6FiNmYxLeHBJQbn9DrDoQv1MtpUABhYgXdLvDt6FHKS3oBdN73euAZBWpZ1rRHfQr6TFoJ3a64bwNd",
  "key41": "2MZo4wVWsc9SYkgTknFm8kwF7dADQzAZvhnguwBQQetzmSA9BKuaU9VyMZ4cxKT83k1oVX9Fv4XJmPhgStH85p6t"
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
