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
    "5bYxZRGKUhEgfN9m1keq6A2wQ8N8adU6Wr5dVvQQ5Qj1EUS16VhAyVkEjhghZVXHtbjbcApve8Ek4YLHKB1SJ1eL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6P9tBqQnmc7VBhvP9GwUAjPN12nET9YNCQkcaLYBjgn6nxH4QEi95J4idPuz1ubtYqDnFyW5J3FxL1HsbowPTBR",
  "key1": "NZSwPWdmNYSyywfixoFPJ5SAmRgSCr3F8g9xKw7Hv6G25goaSAweDqz62DwPNduj51TtMoMuoSejFdSHeNduacY",
  "key2": "56s9TUnJ6jfh8Wg2zae2fW4fDHCRdt5PqdhE72Bw2egaig4QTDTuBLyq6rKVHURqhnDxXz42qEhjtwArzrw7dBjx",
  "key3": "5qqxe9cFhQb2Mc81sDXpaqv1iJpfZeVf6NLJpf3ntQnzS9A4yr8n9tmHAsFNmC4L16vZGK1pGs8zxkQJYsv1mynn",
  "key4": "dCeBd1amKvUfPYm9TtwXWV95WTjzGRqGx1FaLwstcxB1AHHf4ShV9vmmQL8NN8YbPD6SvhPRfxo2wpmR8dn384T",
  "key5": "55xuqpE5vKQxdHBNEiGqApmqHt4C3Y7yiEbCM8icfsWQVfkbm1MfHAzjD4MbnzULZ7mu8PzeG3C1HYrdw3SX1Ucg",
  "key6": "4tjWoXzPPmcLc4nqp76UVU9Gx7deSDqWqcRXDZpL3gdfo4AjpEB1p43aHUytppXpCbe5CVgapiDu341LkwjTcZdt",
  "key7": "xSaRRZRWCVvfTatCGyTudTg9KkMoNmhEjiiCwZ3UD321iD2yQxYD4wJWVQ1JWpmr62BHMvmz8LygyL8tAmkiRCM",
  "key8": "2v4C58oQ9Wx7XWbeRVBXCPUp9fJcrZYtN3tr8kNC4K3bUyeUHqUK6y4Q2NLmvLurrEUuvHv1nBGtWsQAnznr5mSs",
  "key9": "GWMdFv2cTPX13bt5xg5R1icqWkdoBNeRDLuCPNGUgcute2XkGNJ8upzTmeeVZqsXRLyRbcrhX59qR7DmN3GoEbw",
  "key10": "5pNUtaZa3F3DnT885XkihpPdxVZBR87zKVfdpwqt6zDx2zpVMznKuRLUCvvCGojGxCHkm3wvz2wQTYW9ykSLfheW",
  "key11": "41Umy7DrdJbgfGs2KgUpyn9XH6WfEmMZLVSuoL7DRsmdauLEa8381LvQjycoEvDaCBdKxgf1Gp3PfRJsfsS7AY3o",
  "key12": "2f8ZhioPmRX8EXCK1PqvvxKDUT7L597WKh93gbiddws4ucubdjG9rRA3SWknoGJ4yYbwsZudoQzBHGXxz5yPdyAv",
  "key13": "4W6Fs4V78JjjEHH4MU64HxXvLx4KoxjP1eXn8Tp6saHL3bXTr8sjYhcJyx2jYunjiyNp19jyarHMAgkicEueLsV7",
  "key14": "5ywStPA6xbevQzoaJUJcs6cm4ngExcGA8ozj4GzR8skhkd2Hhjj2TuM6b7eVMgxdnNLNmKokHuW7iLDZ2xBczMGH",
  "key15": "4AJ1ANCZF4KDwEW6GZXLaNYYEM86rjM2siPtGw8i6f5m6JEwjEf9GBVXmPYcLm3VaXt58Htrnpw2owseYeuGqBHt",
  "key16": "55eN6LxC7LyH3xibjyCpGtvDYETE91cMCtYC7v3Mg3ko7eN7nR2ukhoDPfRtw7K2b2wS9EHDhnMXXVmcWf6TzoDW",
  "key17": "5WUTYwHPacgBtBnd4FBFHDGBwrb9aDQJQYZ2j6prH3unoSdvFBzJpxK2vobbfnAt74hkGrYBhVUQyAr5w4KQQzhF",
  "key18": "53UrUUgH8A1ZntyHiefsQWsBKmYdjJaZc2fcwov6Bk9WM3NRrUxAnFRtMjcG7ZBzmW6wqTQcxqVMmiyEASEv6ECz",
  "key19": "4Y1VyQX5KfMbX1EFU5iPtgsnYngQhB3qfydRFuzahUYSYqMt5uwJboNjb3MSmN1MrhjMjMnDu4JjG89kr621nXet",
  "key20": "ttXSFJ8HRAyr86H12zPAMzJah5H83q7MvTRjDZeosYKQAWabwoUmjhHCpSL4nYD8an5t6VCX9c1KTewt6qxWupx",
  "key21": "2yML8PsRK1YiZXRXjUVe6eKXL2BdR31zKNMxKMdDsgufdoKy5hiVS2yu9g7yd8THJgYGWeMPf5Prd3UKRqEYwszz",
  "key22": "cRjf9eVMeMssYk4n2aXaQ5HWLJMWBL5PMqYqXGKSdU5a3wPyMuwaD9K6wUDRNBZ5bwBWXS23TL5dSm3j1ChWYpt",
  "key23": "3d1wZCVJN5MZhk6DHoqUkrqArCLDPpcGxeqySvZAoxzE8U53QwDdxxw1yQWAErgkumH25EKo2jvEibJCF6GjS8Dd",
  "key24": "4LkkLmBcnWFroKTVRLFvRC4ZwxK5N8d78KLVxx8nYVVNetEERGjjeeWT35yd4oXVDvHF1BwTEWyjuJkwG47aGYBC",
  "key25": "hjyYKVrEaJrVrm81LKcYA9BVc3i6anRRFJcTog9fXfWfzJMZHm8paWqtKNjmGHaLbJLEiXtaMXXGW5Mo3PVPoeV",
  "key26": "4sKqAcu3RPRNdYhiAhHfz6JqQKuNdtVAEZTAUcei4WCY7TQBwZ4sLosLZmKE52x6kcScfCAT7zpr2VDG6vhvEDyi",
  "key27": "473FUxfXcUkhk5qSSDLdheKsFTadg8aDTvgm7HgGyM5svXTYEsGoguWc7WURzBmPExfsXrbTTsjtsEnepbJcRv2C",
  "key28": "b1De5bLUGkN6b4mZtV6Gwc9y1y8caojh5WG6qZBuj5XeK1LJFshKv82mpG8ft4wKuQFCVBmjyMF6FwtdR7vxaca",
  "key29": "3vB3a6yzQefY6hkAMri2aDETNagFfR5KPdrFMpPbf8sCaK6WVwbwH1pCcArbhAwsTrLtRbWUdKS9k9pxr2cZfyuP",
  "key30": "L7zuAXxvPMZNvxK1WCRDBLuNaVKhYWTZL151VdLqb3munCnSxoKMTrvbWVaRi4bi7wNPG6JcjkKTsRU7a5k3HDw",
  "key31": "66YnmxQ4jGoZZsdwaXGhXyAgD6U6npfPnSrZXP5MUp4h4PtvvDgRFEAgFxXXJwpMuSYpBFD2xnYkFapXys3NDv8o",
  "key32": "4eqsf69TWm5NNRNvJZXCLheSBYJ7FZJp7JksJAjXGtdez5TaA6ANLRb4QbTQMJkcdqfWWURYZELSKvPwBHV8biSY",
  "key33": "3xE7H6Q9aKs3NrGA7oCuB1gb3cQjSsn9RQWUVMNh6ryWXo57GzL36JdZdQdqEMh9z8Sx7Ng7Mauzpz7aEhauQFUw",
  "key34": "4nnw5V6bZvDJ7pEVigVbqHFsVaaLYsJVGpiueio1wAT1VDFgui3TDn6rC9Zi4rPeoMoJkkqvN7UJtptTRNbvcZvx",
  "key35": "62v7LaGr7foxN9jzG1RRrwuKBpJYmBfu7zTPoEst9xvwHTrPVUBJmCNEvTZBwYtTtkGmPxehAwvbnQDPUqbxoSpa",
  "key36": "siNiQ1xguhAAqfUg5L3LdwZ8P252NvTQx4fgvv7mcnBiVNm61H5sDTh2FoUffmNMfc8kpuyy6qSSXDxw7kcCM8E",
  "key37": "3GSbuWypVUP1HiSZirpbnHZRgBuUgJdasf6su5YJfwi37E211PgqUKRjYXEBcLoYgUraJBAxbp3UiGyz8ZnSw71E",
  "key38": "gChzdB6avmtbrRGWhhyqhaVRygRbnJkzNvarcv8524ryxbxaHsZMUad7NsDJt9hNgZLBhfM2xadjXLYq95Ntbct",
  "key39": "gQbQpj7tosL2ywcafFTakorLqcbvuNbJa1k9MuezJCT9bEUra2ziVuHnBsMpxs6GMi4GQBseWek4385EaHE2fJy",
  "key40": "4tMScznnd6NMkeQKhAkke2AULM1yiuAAxaio9UBAiEoEmQ4pDMdnx6ucHe26o5xsaF4zJjAzBhX4tC3RgudRD31F",
  "key41": "4XQMzbn51wLZjdvX2tAyrzZvB6vfvMPYq55JS8xqXG4tKAsChCBuScU3TNRJ4BzrqxEKSomdMpHEmmqFYji2Hn81"
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
