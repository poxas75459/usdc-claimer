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
    "5faxndJbcKpAv1V6acX13NJfvfM4Rkx3XMeFZx3F1oMFUvU4Pg4oLpB31F4p6RgLv2o1AmKJUwBtceq4p8PMXHZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xPNnrZsDaKgsjHepu1P3qW4pZzGKsGS5eS8g5AtorZ2pq1hZ1fQULdkGgfpzY4qDFLs61UrTqnZfAs7ryiypMAq",
  "key1": "CWT9JWGKVum3YSbk1QPXgNR2VaC3jr4RzMjKwbWc2Fp6dYbfNnHhf4n3G3jjLjYBQ1ruZKocURW72xjA5CnBhrS",
  "key2": "4m3hL4pGtKtcQ1aATN9nvoqAtfSesXn55zuVzX3yefEdfeXF1gnT2Wv2TjGSETueJqyLPUbg7sd3FC4aq9WHDEG6",
  "key3": "4hXyMac82EksW1okcRZrL2go9SYKU18p72EzwKcuPAd4EX35pELnQmfAFyicAw8SAefRtZ8NNFuBg9LBQ8LTW37v",
  "key4": "2ap5Qt5bK2g9urWaVRurzBFACVFkLYht8wqPCX4W5dReyih6zHqPJHNNDryJNDMsFB1dD6EnQPXN15SQxeK6WeuH",
  "key5": "2GTmGoJH4VFuhekcXfYWPCocTQbRDiNeb6Xh3G68viBjX89foFoUfWDpYsRXoQQVRT68zfRHDbZ7bzecdtXdnRqB",
  "key6": "5CEhk7JE9dkNrD6Q5zmRuQTQzKJk5AW1CQr6uAm2s6XJGZBgRKEEexKNKrBWWBtMSW59TvQGUX6N6B8vjbV2QWXS",
  "key7": "vWEYiM83bD2JjJ7eShffku7UPfXysXpddPo27Y4dWD8YiHRXM3LCKiLBRYQ5iQvb7nQpKJbA1xsjKBvZaGhC1BD",
  "key8": "5cpE6pgjUy3Z567dHu62jxt8WjveRp7SAbDsZRPVd4WqpAqpnqfnVtEU7iU59uytxjv6tcmgSEeLUWj4hdD5r4JZ",
  "key9": "om1tYMRAiwbhyvr15LYDivhB6Cb8QKQeFVrVDo6RHMFuMx7nsjCuUseqvQjKEcxuUmRmPkoWrtVbUJYWBBy6jms",
  "key10": "z3GfXWHdKmfjr8KFrmo3P8hmYLJatrR3hgu2uekUZeRn1y73G9NwhiiYksfdtSXUkmv1AXQVhd4c8Ap9ezuQzwP",
  "key11": "4zbf8DMpFvxvVpP7C4Br7BUuoKhXJrd349HcaU8GEx68rsG5qncC4pBFKSeYKdYNNRRncu5u1YtYjt56Dx6KptBU",
  "key12": "4nWT2UdPPCaPkjhYhFNofQwfGeupJLw3qj7R2dKQQ4nNHq4JvL8uLCaaiWvEr1juyEBbsoStLxzNtF2dZa8FWKqW",
  "key13": "HwTUggFv8akov72nFY2MC1erCeeF351kXRLdQUn6szjUxp6Jnx5kFANVCvgPJqqNqTKLnMC9ShHq5J2YhHeyBD8",
  "key14": "54Kcinc7kc3auNnVW1fMxg4i8p7w29k251ZV6cp7hiZg4Ary5AnxpxxmiRWeuBhPwCyAS3pXHBgfAuhKnMs7nqws",
  "key15": "VEcRgcUynezanyZFFYWoxpG75QRgUjCxsFnhW3NQ8dQQmFw1WAUQZxqDNZULCUcKNYtrH6Hu5ixEDZ8YuAcJDFv",
  "key16": "cRstz3CLPVLrXn7GcedEfdUNj7uMw2bZS9hc2gGH3rMb76ocwqD9JZ8Ps9Ade6gyyBQCr588EnHpaR8Y4766JQw",
  "key17": "CRuv2ZzFQsm4d5G6zDfwPDovZBiFbSxJgAR2E53vJd6nP6JMjjUFFya3bKtEhAqDf3usD6Av8e4baGic8GDiAbs",
  "key18": "47hV3MY3X4zwzyQoEfiL8hc6k9DReaC6YSvqWEiR24MfSkPctpEcuxpdGtNts1GoW2jgWWieaBVRrfALH4ek2YHZ",
  "key19": "39gZs3mV4V6WcgCRSHNqT619U1vr41MoXpNigNzi9ZdqbSUoEX7axhREn7UgKobdKX9z9Fn3GnrcnR9LKreHqo1s",
  "key20": "3R7HQJ5Y3oUW9pbMfcT8u5S7NcsW9MsHSj2BtEEGX5FSTcUTEhKeSJf8TWmRPTvDc2CR4SsSAbMJaRjqBDGdHUsF",
  "key21": "3xxdgtpNsKU8YVk2p31Eg3j2FaodDTF8EW85rHL2n2vGri4Wio75taYXrB3qgw8FdD1W9ddacRTfeRAzMYyrT6Ab",
  "key22": "4RTSnPaJLSke37ggitbFzgnJTZrbRQ32eFrp8JBKtrmTUjVjmzr55BtDqqGfd9TPdJMGBpZ3niD16hcUA4d3Xmcp",
  "key23": "2vJsdLL7aU6P17QpCtmG9VjD9LyFLMSWaXVaVWr6YCdkx8S3qgGgG2MfrCkSAstM7yC7tk7WNcZF2eoU6nShwijF",
  "key24": "5UgW7rDqQeiaEQ56evRKr4evX5Hyag9HxWHmeVbTqYPNBXB8CpsxsCy19sS9oaNi8gZ9vWkcBAMo31UmgYVA4aoq",
  "key25": "3FMNAzncFRkmkzqLreNVNW25SYPigBNAH3hRSKhX9cPLpzRCV5FYZbegTXTuxrarvEx9iEJpNCco9qAMrQWpNKWA",
  "key26": "3r8L5rRZYtwWViu6s4YgVHTTTmM8E9Gazbx6WZCxd21pfBMfr1NW4QniicYPZzTUCTpnxqrSgDXQ4K4e7gTmoSJv",
  "key27": "2pSDofkcn3s5TQbqmryD2Z7PrgXXNECVwVAJ12vWgyJGionaGnDkXVRPZCr35ShtWMneg7nWfhC6VUiaJ9ZpjyQR",
  "key28": "qivCxdHdBiNZ6c9EqjQNte1qSWmUsTMKoXaWf3T3jbRJfmswXoKk6hzVHJUHRWEfGH1cYc6WWeWYgKA7dxsovPg",
  "key29": "4f53qGbT8h63pgBcbRKa6WM1kAiwesmnMuAX9WkeQoZj3iRNRVGZd3FnTuQvx4LsWVhe66Xp9odLopdBAv4bcvEh",
  "key30": "2Pp55dKKBDp62iAmboCnqf9Y83KHh41f2h9ou7kzYSaBAv95RbQBrWYQV2mTWsRX5bqKun7sK58A7Rr8qfcDa7U9",
  "key31": "57W6pciKxeGceunee858SDKTLJyzSLYW98xzkxbV2RMYChA9XvbZgbkFXtHdcPHXQdFFyoTZcGztFuufXGnA7V4g",
  "key32": "GxmZmmU8jSeqMZartQ85VdWGqGbSNAS1pxmcY5wdeaDvKyCvsSuCECaJcVSopByHc7NM2eKyyQ6vn47LNYi8Vtk",
  "key33": "2xF8FnVrFAJ9uCavtdW7uAnAfKDZo4ywQ2vqX6pqMTmpZve41piWKYKMfR518gKFGZGeYcX5FscMp4q6owp9rJMf",
  "key34": "5TgZ91D4GfYBproxa8q6cGsDwcysYHJ7H4rTQphrdeCyKabPcZnU6ftgr54Bzbsihs6so6TNPXkzTK2geRAzrtxC",
  "key35": "5DaK7z6h4wW4KN1HEAyvoENgcWAmQURqzb5GARmwkbHNezafMBmJA2wnHcJSLK4GaZx1Zr9gtJqdqnPnhekguwRg",
  "key36": "6wEafGsqzEHYza167ZNJTMVJb9mXCh6UNScu3FeTXLXk1fQvSrbHNwP1CYnAkt8oGCH6ooBCJe8wZRiJkn4b7Bt",
  "key37": "5HTJiTRwq9Pn8qK4rCVCMmWv8FD6U1hZ4U7Zh6eSVTdGMgwqgqTPvBwke3HTxGCyNSvAbT4zRX6Nxr8kTNppK8rm",
  "key38": "3n2zzm6ffsVTCxrVGCspd9P6a4mHAiVn4pxvT5tLvTVif4GqoxgGj43A2XFE5Fn9JD5HXMkZaDHMYahdFaxpkK4a",
  "key39": "3YCmvjHFiHn1fATUXeW6eiSuecFkx5RiBnNGzukEkDYSDW42jEVR27bSXkGtWhpwWGdNainaytd68Hz3mT6qN2xT",
  "key40": "3rEJFCGmPNJyhU2BBeGmvmZCfWerosaurozVnfCCWda5wqPPMuGkzWeQAp7QEereaZKPsf4DweinhFtPEvDkLzmF",
  "key41": "3QW6HgtiiLwHmoxMwSMDokHtHBzEaRkxJSrmGvzruhRcATXn3BQbatb3C8k2iuFqGmwKJors5ocvgBETzduHvF3p",
  "key42": "BqwGzDZvrFPLyRWjBs2vMkoAVW1a2gUbBr6wxgEZwGGo5swxMgFTnd38aVyghZgx9M7febVQx1WaHGctWgvzqoT"
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
