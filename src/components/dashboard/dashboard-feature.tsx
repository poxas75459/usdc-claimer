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
    "45bDzCXBTwk8p7VDhieDSLfAZ2RK21CMPxvMrL9ANskiyWqemArzr1KiMuYDQefqjYhuZjJ67k7U9REd1W9cHyvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oMsTRgNtnx46Mrd7b51RtTRaKsoJ5pT9jFJFT5rbLqMwe93sWGRGSg4jF8XGVifJiSQWe5Ai1qtHPV6zre3BzfU",
  "key1": "1AgF4FTn1EUFGYWEch6im3oHt7bj1DwBMSx62NFoGxgeoC4YVTutyQRZihvDzdeX5zZ8ET5mf161ttR7w5zQ817",
  "key2": "V3pqKJV1Ffk5McAig5KPpR4vsGyLXWee4anir9sXuTV58WrRXpdhCuRK5XKMGHMSyTkMj57N6Zc9GRLYdqW1tp8",
  "key3": "3LQWj4zTdTVAqVLbn9b8TdycVy7dFJTTFcyRNtxXn6ynwwEPqePCJx3nybL3f5WgkmNatw6Gh3D3FjnxGNc8igJr",
  "key4": "3qCCCmdZsU2gyRFZFxCw7JK8sTb3PLVVoXjaecYRA3ViGEuEUSHNsWPKpSVH5zvEvssvYTh8xkCmJgeLZPU6EnM8",
  "key5": "5fksdxPKq5PmBhZRuQW63P4BkApiVo3k2f9sV3crZe1XqFZ2PZKbK5nbFkR9nkFDZ1xt95KzzofgX9uN2kRDgZDT",
  "key6": "3uDo8VmgA1b78dHauEwTqJs645aHKBGxSS7qYqZV7SkCk3SaN1WcDjag5itdPxXCAg1eGQdFs9LW9dpfeG7Xxwgu",
  "key7": "5d2AxaBQBbHsKaf5mc6fSEAAtuHMZqR2impfww2QjQNeVVrPqCSkGc5ovDkXih58kDNsB2zyzKNCFsQi5qBx1Vpg",
  "key8": "3ZA6vw5ACcSQacZxU5co5hReZXys21QE3V9yLVmXjT1NaVsKKR3EbxsnSpQg4nHXNCCXcwWNkYUzBuLSuCZW4P3P",
  "key9": "2G37fbNfYq72rD7qeiaCdqmCUfaUNV8wR6BuaG1ALc1jz1HprkJdoDJqkfDHTwVZoAPqHxsKXoGz2xBtBifKYoGS",
  "key10": "5VR4iaLnLtuc5ZsUNsDJcLHRgj6m6jkRBTv7ySFt3vxbSHtseWQByJMTB6AgNGRiQgc8wpbX2piv3pjhiY3WyLbY",
  "key11": "3gcAKGurF9cVANcu5XadDQKf27uQytxKxQtDM4akrHLGus4NB1ssCTS9kP8hpSRzakYSFJ9jxby2N5iVpfwu2FWV",
  "key12": "5H3JBRo2dgAQH18VWUE7CnWu5hTGmPUx49okNZJWr9etuG76BhpzD4yNfBHpqexcbNrob8RUosMaWULjU5Erkv5v",
  "key13": "2zzkmXmdPspEmnyjuPrLwMYP73HBwvuiLWAHDVpJkbjjyxC1V463ENSJVdcrzW6vXui9gGH4sn2oMkmesTHEo6yG",
  "key14": "4yLsow3GtSznm9o44N2NRUe4WRBkYCZFJNTCsuPTWQczStXBsVKPWSzHhqix8zEbncTVnBZqn1R3wpBeq9XWG5oG",
  "key15": "2EXfCDTiTbuSbgYQPzJwZVJtsnZeKEzv13K4TSHw3GpZWhW9sNUF6wQLqRWSFrk8gq1mbpRQtwRBm7LuP7SqgZ5r",
  "key16": "4vLwfDdvYFKGB3vKbycAKdNJy5ubGeHZxDmqn717hHeB8zRA4jqX7Y9vtBtm4Ry8fEdctQUEyb96gKLTHVk9V1Ed",
  "key17": "5Gykk5LH2rs3mcvFzibSZMYJRbWouzpbNQogtVwLQjNGv24ijykxLDn3x3XwFQ499nq7P1XgwtMWzsx9er3uiDT5",
  "key18": "umwGvCmFV57V3Ss9ujyMZ7QPQ81r8wAtyoyV5VLnrTuniSxn4HEJ532xbuGsjNsabK2UmfEJq44zY61omwDGm9a",
  "key19": "5CKWgxvK665Y3midU4v7yfFXWitWZV162JBphV7Yo485XLJNiFVgozJfVeGtqoHEY8G7KVnSGypfvSqzwN5Q4f3V",
  "key20": "3v72JaxKUVRJCVLUQHGByxsfJJuEyzv7KUWes8hhsjKyzh5nxpJkaJ1XnXEbZcx3XpGzBwDXMXSQ9kcJpXCMHXvT",
  "key21": "zXVwVr2HHEW36Q1nRgjB1d7tc6nnKLVwrydaQVh1EFQkSiUdP5yomNzDr33F328HUf4XVCuWqoKrSTE3oBBG6ps",
  "key22": "5FvV6nrbd3VKgdDhsoZDsiQreqwobFYUpQRE41sLsEq1hC7hNRQZMJzJnZ3X3GrU3uUoS8C8PJfqMEmhgVeeYRnx",
  "key23": "AeVZVTtYxo9z6Tu1DtW8UiAtHQeFPkrefvUxManFyvirm2JjksLF9D4T8dxjzRK8v8QPQZrrr66wai4oB1VA9qX",
  "key24": "54mWbVkbo8bjDneaRnWG9MjFenaar86fT2ooDSBv3D2BqD59z6nzf9ZPBKKxjXD1KWixdN5km7GikwKyexkKtgbT",
  "key25": "2WHj1ZRBmEp4kUdyYiZ9vUQQV7YN7GdsJAsKYRDpesWz97MDWL8MjyY2ZKxMenWvLNfczQK834Rjqmw2c7w5NEDw",
  "key26": "5fKLX8Q4E5MzQUgCcQB1MHHrFcxmxj7KcxPkmvkvKs2qYDSebHUn6ZKCFBUdzEYLm5oMaUD5zHpTGpECzKSeSzGi",
  "key27": "4PygDiEKHuWo8j5kVpBHX9nc7k2vnkV3QrkwPaUbVMRKzRW5dyv1G7mZQwQfpwiVwq28W68552BUvtoeLDKXB7b9",
  "key28": "23jeu7txL3KcHX8UehXeJuBg8vc6Jjve5cHwfUUxzmPNFHsT6rEKNVYFHhDSpc2HkU88ceSE9UbGb8XX3cpHbzo1",
  "key29": "4sTZTSeWuxGmhy47aWBen3tk4JY8bNrYTfk3JWbf3PrLHwvryFt1Uq7tvR4KrtkoTdYtu2VhWBZVRe3u8Sa9ZHB4",
  "key30": "4MnGDNuqmPvwJVKUhKtm4ynqLFLH4rKSLQe71KDVEjFv4xSU6m2oA75nBCJZ416iFQXU4EYwonDdyaFbfWbY65Rq",
  "key31": "35Q5nqrcYiDM53Ph9E8uaAwpVYidYiAmTsNZccvQRLnYUKtZGs4k8tF7rcQJDTppRbiLhRhb1n4N7PDn8Ug52jqX",
  "key32": "XmTuu6yhbG6egkoanYRV6m1orkxE5WsMQDpFCvtrCmzk37UpZac3r6c1VKy9cJmHbEvy8LE5Lb5Cmb5BeuaXtYP",
  "key33": "4mrWUUFa8ZVBKvS8tJ3SihGnPsTGMVUxM54nwJ3sVGASMzbX1Ji9BiEqVqx28jDpq3Hz5ZRQeWKRgCELRG9hc42P",
  "key34": "MDFx3mp343gS1ErVdEmtoPCWfPTzM7rTXKdG1eqX4wiAVcsaHKuDw41KhvTFuXTpammdL8CszaZLqe9pkYN4otQ",
  "key35": "PLtdusPGRms8KMgaY4NXkEFomMEC8hwirqoqDdJVwp82ykntib1goXAdkLm1JiYCdtzssQePKYVbhoPmVnmsdte",
  "key36": "JXqrT5CDAWG4rAcDRMBAiKUA3evmZr2Qfhu27P5E6fVYdjstnD59V3NXrHLpK38CbjPUfjTTnNAgNuavtwRoLLS",
  "key37": "2e4yMZj1kpy1M2uhbyMJS2AbHDHorzUqoRD7qbxebAfXV2dQdkkDgW7KyKemXJ1EVokgzNMHgDJFs86rxdZVZzDq",
  "key38": "2cU8HXC4MhQhqSprJUcJQNRSaixYWvSSdSDg4tQZtMX6zRChi8QhkDo2jm4qbuUiGk2FiEiyRvUWjoYepkaEUyXv",
  "key39": "4qg2kCK1VHCSDv5exbSRRNmRgc7CeUzGsMSrCwgxpXF3d54rwxXuXj2ZEfZYS8gGnJRu7PVfpwApdJPmtKK7Sw52",
  "key40": "5UcVt1jXXeo9qxfzsiwhjz233qV71QauH8pprXgBvhGyAzvFfoEwENeumDJdEAdPBf89MRLPJ3HDiY7nv8me15cm",
  "key41": "GiQLv4Xq3vjkhYs1MD4wr9mtnywzYYWjJRZs69WYBnt4XV88v5qCpLWai3znq7CCpuft1BAHKJyAJDEathXqTxh",
  "key42": "3ZKV6gbwTxzbm5Ff3CsybXmk4opCpBLANXK2K7zJHQooRyEZd2XC4KK47HTTMn7LgXy6mzbx3VMUCzkmS84PEK7B",
  "key43": "5fPsFdDuCf2AeqQpn7TrxfupfoogBRyDKkSeELbqsVm7Rb3V8mH5urKnYxQhXJY6HNpCJWwtiJBnHHerQyzFrMBv",
  "key44": "36KmisARPZvayNaLzQV2eyri5aEYZGaRSESdNKjnDRzy8o6tDuUTt6HDbycGuuGzgNmhCVWQsdgJ8M7F7HZeZ7vz",
  "key45": "4Hwp1m24qQoqBXRwficU2Qfwyd72We85GwjK63zHsmiMrn678BJeCeJSmDLUo2Zx9cY5N16JCcdZkfYtWGnvW8tz",
  "key46": "4U5y2yKLGEeo8vH5VAMUrYoTuBBNfqJSvymQnGtZnRR3SgZUej1vAPpQFMg1RuKmNknfSmog8kt3XbsMgX5LWkb8",
  "key47": "4mLReaGVDP2mS1p7gjSzCFFmmYEQieAAHMtS4QMMrwX87xtRLoikCbxHZuAs9wRczy74RTSx5U2zjVDjEzQ7gkGf"
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
