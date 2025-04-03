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
    "2FrixAGE5GrdzDSwdWuZL8rZkZuSUGWUnPLxbfHEep5ykSswBzEFSbcdiUgKkmUpEnLR95vCk7iSab54Vz2gB3GG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j6AvBdBasA9ZG5K2mmHpVunfuLnpFPEjz8mN3nn3j4Pe5TLVbqeGJDhtGxHhUkAkRAC4aLLEVpTaF3SRBscfHKb",
  "key1": "3jv6CMhGRciPhA7HFLuJsoUkHWLDgNjXnXKuuCd42HZ1FNvTYA8a1fHRbyThA1wBnP1AM8VeeCEpjib4kAS6pMZ",
  "key2": "3ZTbKS8kuizoDURgYeY1wxtcoSH2tt3DPwwquqzQ2LCsxF3Ed4f75pgPibp19VBy8m1aXCVxZ5Zhwsj5NY3tbzZ5",
  "key3": "4W564j6vEy8FddTTrUS5D68TDGGhZn383qECzwmHsSWyrW1NVf52RRFWipfDChYd6sQTLDNG83QfB2uLSxYMyiRR",
  "key4": "4QWyvmptoRe3vBYDR1q52Pgp6rJnEmBaSNTsNZxsvHQDbhpCtkLJngujYr5MQDU7aAjETRU2x6bdALWGB55tkHcZ",
  "key5": "4CNcJjY4aPQatdMtKMDfjHCq5621RkTXauntBhASVEH3Ai9xG9BJRAbi2ia8ZAExmY8U9WVSQA6bv41FYTKLRPst",
  "key6": "5k3g4fJTrkkuVWHWh9yZ9CNiWMQKiB3QpJKWvHSA4JNVG4oz7ujWfyXHUkv4qZCV3xTNZhJ2bs7SkHWK9J316met",
  "key7": "498wvXSR7x95w1q3SwAWTwftXfj2ZuMAcXgL6zF2dnUo22V7ULTisQs39Ux8whM2V7fG7wiSBoi837ppnarWz6ym",
  "key8": "4NXHwrBTaXd2X2ZZ8VoVW5RLUsRhyHcxfUTEQEhU32YEySMtpeiQVry2WgGoRWw358gmN8TZAu2MeZTXjKrVTo3A",
  "key9": "4rUcoMPN8XFXevZpCE9W3rgpjcVCaBQv4wETzcEHo1D71GJoFSZFAmt47TAu1HRHsbXuu6htJbQKSFFQhx5TK2ux",
  "key10": "2sdXfhpL8Q5P2taWcuynKcBgCKw5ArSjZT6xSojAWTd7RMR2XZTCe956zDGakQUmbr75ngwjzN71KAtYAVupboJq",
  "key11": "aTxiL6PiXcQBboaxUKVayFS6gC2BRaz5dyHJw1Y6ttxEmXo6n16NEuKDDLCBGFoL57FyysNR1He9d54L7Ck67m9",
  "key12": "121XLtZyibBM6PxmRrNcMeaLQUuVtgp2aTqEVL15dxrHao7UfyD5BdbajdxDDBaG1AF9UBGiaEB8oxQAPMoAoYZz",
  "key13": "3nsJFgTZFm1hmuu9G1fqhwhoFsJuiPWeXhNhtwxJeH7MuP6fjRHiatE23XLq7d3gvScu39GTqSmzz4sma9GtNcfi",
  "key14": "46AJxfRTbfvgHpL4fAznfvCd68GtJacJu78YVoUJz4NfTq1Fgy8sMPZJTeBQbQDoMXKw2FbyhPGeCK7HEjdidfCp",
  "key15": "3wVz7gzy3M9LGog45UDnY9YbcyqEKYdaxx9rYuChQAmqRcAuXgWcVkMcFe2hAv7rFgLGBoGMyKnosXt6zET1DPkq",
  "key16": "5RPZgp8wZC91Tkb5vThfTGRyyv3CkGx7jbTuUP2Nm2KUeon7tyuRyqgY4b3ckggqm1h5dZQj72cNHctZTDPMkiiM",
  "key17": "2DTHpWjbEGkUAocmQGSKHMrf4bJdzXEheGXsNwE3PW7AWTHAHn1fpNYEEVPiuHiksDneARDk2JVa3jcMVXG5YPnd",
  "key18": "3tiAroDSyxjLjfBiDeC22f714RcedJo3PKUxrGLSXr94oiSPAZ734iWpU4WYMMmTFSz36eAoPXfyjyRDKq8tfFjH",
  "key19": "3zGiKNGACdscfJUjzWu6s1vcP25DHypguRp5NuXuuREoo3cuAKiHRhCZJtV7ZHP3irh2jy5wbdZ7nKjsK6efJ6Bd",
  "key20": "27Gz8oMwV8EqdBgz19v3XPvkSJwQnMjZE6wc8ATDuH11QBin1KgmB2NcDhN2WFFaURBpovCGo9BCG5vX6hrDPUmo",
  "key21": "4ruovr2uwSyG1Xn2RU52qTH3e4Qr3MvXSGKoHb8xSSxW1btmcmXpY4urJKYXL2WKnAEzHHhpr74zoziPoEU1Fn6q",
  "key22": "3EfucEgT8f5m6gXzdMbKq45eGQ8sBmmR5X1jrx8pKYzfoddWCRfqbi1b5g6trCHZUV1iHF4vwx2Eue6jQ3Ljmwqs",
  "key23": "27wEn3CUo2h7ziD8wbHRRNBZervcDXWtP8KTFJBGCt3rDNT5NYBpkRe5EAPuGtEtWcwYyjTQ4s4sBAx5jxpkcrYj",
  "key24": "4e9gXwdS7GZSZXjRbWh798mxN1xsZPVvz2594uVjAmeGJfR6mA1wSaDuzxW2nQGFXep6ffaUdTZ7AL5aM8mQjj8J",
  "key25": "2K3wQFYNnG3NUVCH74kLZjPkDAFU53MXszs4Zhf7D4DfXyMWhhR1JhpeYCDeDCqYotKiwzBNQEDQ2bBGVS5tGhdg",
  "key26": "C2edromLpGe4FQW43KcB55UBRALkhm1AcnTmXnoVXgHZPE5DQuZDYQZbiNUUhzodAZJtz6RdkTBKypx4UAjhSNL",
  "key27": "5gymvXBXHtkj1mLS2xJVk5jCazR49UJeR7x1PtN31drT6PiyTMhpCQkwnoR7Qs3kWuWKtk84oG5atpchFyYeouUj",
  "key28": "32fbeDYMgxQDxKNWeC9JacmyXsy2addaYW1LYfMJQVjQG2sxDbPyxumCCmQghXyDSHmYKPRxbusboagoTqaGcCYf",
  "key29": "5FDQ1njL7v5bhkioVosLsrGgqfLNE9PwPPP8gyBXC75ghUomXA2sRiG5aFqFp6QXeL6STM67XAheiGz1EsPyS9Ke",
  "key30": "4yASTGEBwuyp84NW2ssgfowutPUV87KjyoCooKtE7JH2PhSDQ8S6gxPMCdoZ1UFyat59nGzRWUhxjnaruNdia5mX",
  "key31": "5jz1NQU9jfKtwyA6VFzwNvHQneaTuPg1UjA3HnRkAor45SEzWCzUxwciNti7pmkMGANb5LnVKkhpFcGGjCESzMpn",
  "key32": "3mWocCqmMNjzKf4LgVvDcKwuWmrDjG3MhZ997LRAUGpJXb43bC1MgdpMtJTQE6KjXnTgEfmABkC9UKmiDrFic7zL",
  "key33": "3hCaTWvf1cr5igDFTtpCaSemLtUK5hRmDQWpV78Dbv7uSkuiJKm5yRsmzsYFwgaZqGHeKLcspog7ZKtAGHC2TW6q",
  "key34": "2pREeSgWu2Wo3xef6Jm9NW7CYdVPad2JvXGHSmcTG95ChBCGRzcFB3iHsCE8FegnWhp934kXg5rFpKRo5bF3txGt",
  "key35": "5txqcGmQKMjix5R9GKXnkDLaPVkodMK2vgi9X6qyvjPYUqgvZZymrh7t2mqJUEjPMJeysyAH56yTTEmUL8TQXNNF",
  "key36": "33Quzr7bxbWNVfwiQ7MX4mcGLPJjoWWBWiYfZkuvxatgn7G8zJZy9HvoS5BRWBndSfE6JkQCirvumzfnaMLURiMs",
  "key37": "2n4efEPm12d2h6VGBD8Sa2hHaeZQdFBo9ZAWLHSVaaeB21sbCWprzov5boUu2ChjmLCGmDMHCDQdjpCUrA5TNpER",
  "key38": "5wCuRPR6M9DobPU8kydLfYfpEFn5bfbqo935c5aU7tFzVUuZmrZJMoxpeg5vzSNmUweGQXQJxETUci1onLyTnixT",
  "key39": "QX8Jo9nEh65rKqvCHKqc3AjnRFGuNdRDMgPXmAnzsncd8eKAWGk3kJ3Q1JDuBCk6uw3pomh6ZrGPCD5AkVHmP13",
  "key40": "4hghPKcBjVfEas4ahHcfCaecAFbhAwjv4bAJnd4gt7F73NuQMwvPqwaUFik4ef4QdcYz8ykTa1kEoTqSceUuQuMq",
  "key41": "46og4giEY2nLWDUoabSLNkH7kkRe8AgtNf2dbU5k7kaJ5S6pk5YjMAaGcCZZacpPV4UCr6r3y6xfUwzYCsHdDgW5",
  "key42": "5Ampi8gPL3J57DRwtFd5ADx5A554hNXVkUfK3fwhKMCNdx1WyU8ydS1C31exZjcjE6vxhdFWw3dEAhugBAtNL9xB",
  "key43": "2n26MUTF7F3xYfbay5tZQvXebxMVi5t4bMFXaHgF7t1bsTwpYmBNzLnSRkPF9A378V6F5q2f8NgDN4rT7v3jjsWX",
  "key44": "DUc5dJSsFpX3TPGUa6Dgnyy3A1hhtBN2kiFByMSVQxYJ62yWfDYCuAs8aVTL4yviVRu2qYHBpM3XoXTrCGoRGcK",
  "key45": "4vQETE29dbKBtx8sw3bd5imaPHCT6sTgrThVKVkUxXyzUGeokDUvobxShWcEynZ6r3bRp59owG6NYnrbAsb8wtPz",
  "key46": "3d2ThdrdBt3uSgnp2ohyAwQ1rF9ZkCTKCfHciXUvfqbaRJpvCf2C73RbmBdqcFm2BdPrS7i3HdqwYNHGAxN6CLhJ",
  "key47": "Pi1QZaHEDHuBB1nJNUi9dFdsLMFawqwg2NaFDFuboMLmrKYhLKS8NESjzospTMCx6hCAvrojifZAVZuuLNmTcWp"
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
