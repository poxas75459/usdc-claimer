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
    "21TgksuDABaEg5wEHzZkeCSE6fN8PEKCUfJmWLd6XRU6FBRmy7V4GMc3P3BMjXrcGY85LhFxoYZWzht9knrMK977"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CTYRNrkaG4nFJe5M9LTfW2waCZo4nMypSRCEbLi76Evvmv4Lwu56k3axWez3aE45aEfTQQYV8gaqxENFpPMBukE",
  "key1": "5VVt9pMMJhiJK7t3xoUDpMsodggMtGYFV9GEW1GiGufbNormm5GHif6M5VAy4KgCutopMEgh1iKDbiLB9cbm3WXy",
  "key2": "5esCMZcDbpu2YxMdgqSVWLz4V3CpT8X5w4jnBTzNA6b5XWwadLjA6xiUDhukjFT5crKBNwwSjN9KooDcmDwAYvVJ",
  "key3": "2PJGMTfsppaByJWwFeXRLYRi3Qsw6E3FREjSnSxnqYnCa6pxEA3fQhZSgPNEsLkswCLgig1EMnZy2ToN4Uucuwh9",
  "key4": "4KWg9ULG2RangEPnwugPaDVnScb7YDzyS4xMn2GCQvf5RngNSg1TnoAbSNQthPM5ND7njKPRgiMoJgyP7PPmarDL",
  "key5": "5gaA9ERMrcTFyvPVRpSU9nJ9zniGxVv6RmDBVMg2rXMBJtT69oiQWTDTMnDLR9AhAUHvnc6GYwhfQMuWHtbfb8iW",
  "key6": "4v7QZeoHUawZcEAXgcmqVTQ6meWhjxA99NqxSv2cyLjsEpLtFoqC3wjRdBeG4aaGGoMZUbhRbXVkdFGWg6SNUf7v",
  "key7": "2uUmjo7xCk6LoM331Ph4N9oigyroYmji1fFNu2vMBMf4v1vaEp4yRExCEphBjdAa8WGrGpoHJxxZNYoMk1p43LqK",
  "key8": "btoycUQJmokgHEQyYCkChgJAwr73sCMs6SM9UQwohkP5SWY6qNbspFPW4erRWMErVDRXS6GjWEPDq3y4mEPHmBA",
  "key9": "4sCcmWCbFNopTCk2ssKtFHukbug22q8arMskXuwyamFgmY6BUwHzoYWaHdcv34SHNqQ74RLEi76ZLArMRcP1Rqvi",
  "key10": "2FfMA8mBW4WczQ68ZYkEzZoRPhcmw4wSWJQyvrNYTHwLfXBFyd7hSX59hZeUeRXKaarV2aXLwEkUoNkdxLiq2rB5",
  "key11": "Xr5hXvJZV1kD1Ty29n9aChyQfWMxTmZSVNwms68qxj9K96jrtxdgevXZJjJxByE8rQsQtCMX4QGCBhWoJywQVxN",
  "key12": "2wnCa11ACZg26xJZggrkLFKVPoEimBe1rJhTEqq15vp7csY47sH8zPoXv2gZ3uBEpzN1ysYQvkeinuuTQWdRUBH3",
  "key13": "2JpY3UmxmQUxKedePPfFZafbMtN6VfBeYuY8f4wbdo1Z9XDDUyrwV2trpLyhZDLxitJqp9vTAXb7m1MSRMDpks6Q",
  "key14": "3LyNbVQnF6yu8eDq6FyyaLcCZ5bh7cjUcApDZtF3xDiunvgbc4VxSiEb7EjEMxcPnYXg1PCe1cm2WgSyaH2e49Ls",
  "key15": "4BNMG1fDJXDBWjmTPbrxLKqicsnNv74KW8z9zoU499HPGYesoP6RuUPjvscZKBHTJWCy1z3v2rM9Rtiu8xC8SgKq",
  "key16": "58rRka1McNuMy7AoA8uJZ6gactVzsYcXc8dNXnaojwJ3XbXr7TPTXYHjjtvDZMkQz3oBfn858J7WQRYyfTUz7htF",
  "key17": "4dVsofcoN13wi59xWA1FGNr267NqUxZcEQqpRekxVQWChYGdDyvxZUmCE4F2RTJ2jbn9oet69mYsLMBzg1Rj3zPK",
  "key18": "3FznuRC13fs8EnjosTX15vZY8zozh7nu4B5ArWGCAxjwF66nno38Jm1MZvM4hMuq6BzBTTXkFRbxatwb3vN3rVUD",
  "key19": "4edUUBy8Bs4gbZv7fTUG7oSAh2snR7dfUta9caLethrmrQHH5Jv9qK8CSkBc4iaAjwgULbkYLgT5Qap1bRVtkNqm",
  "key20": "2v8Wbm4B3qe77FAutTJmaCp3QgGzqf2zTSV6m6C9r4weHvFNyioqb1gJZRuGuEA5gsQrf5u6J4924jyLpVAVkLaU",
  "key21": "4FNPnxY3jgyenUnfx5zb6GC3zmnyHqeuV9R7dBP3sQaCi4Pf1uGeZZmqKUDfTL5prvjApNZTua87S1rVbjuQ4ze7",
  "key22": "3zs3tNoz1T2tcYDDqj49h19NzBRS6CtLYNux59mfe2Pp1B3ASYjrPQVKXHmSMLstqK1HUpXZNK7wVXJRjwPkjsuK",
  "key23": "9K7dnbaPbQp7AaS8ye1mspKZLq5FHf8jswAFu8NB1xPLzjUhdSs4C8BPtjkvZi7KjLyYETjY4YoBHbxqvHAYoRq",
  "key24": "2rZ7epsnK2iSwAiu8SJvQPW7XENxqhxtdXSp21SxRA7vMPPcWDJFdiZMaNpb7wdaZ4mwwmbPAZhwMtr1dmHWbFS",
  "key25": "3YHhXGodXGM5Z5v1aqEEnBZfPcZVFkUqfWBCmuM5xabSF3RA894fFWAnLaV67BnEjPjXR5gUE7BEdU4sNboM7aLs",
  "key26": "3aV2nLE79ybzDimGWp2RgxsStsnLRHBaJXUB6W1LVYxK1LoN1AwrQAxFbcT4X1UDJGNXNkvdQYckHUbNjuUBByGu",
  "key27": "2XQ3vnEXmWpP2Gm7kVm7m1HxSrYoc8dACc9e1YYzJHdZCgBmnVqbxAWeywbPyvP9LGEeGdfxeJ33Edss6adaksEs",
  "key28": "3b8eHvxE8QP3spPqVRPDNcEUk6K1tnBNbEJZWpkbyg3vkMtsnEc3Wd29Wo5CSVRqw5oHd3QYkJxebfwiibGo5ZCr",
  "key29": "2qQuyua7EkMAnvS1payUPREBpPNh8jn5XUJ9f59drsBVoPLQDjpKK6aFDQCoQZSWB3CukqR7hhG5U3fPc4SiFn2o",
  "key30": "2wS9JM6GNT5MLezqNssz4pZa4Nq5ocCwYcb3RQnALPDp1otoq9tahhR4z1GRYnbtD6VKjzkGF2RmVVo8vsNbBPPk",
  "key31": "2T4eJ9fpCCq9asYFypMLnsD5rd9WXj3ETV4N2YMiavWGFsuWKsSufSd1chmCypXH2XL3wcCCfkNevxSUbbvbbfad",
  "key32": "62P7cUNyh4tTQahLmFJd1g8r14vHdcGjMS95zbXxcdkECQ3A5oSLTAy6agQ8rgUZqncZSZH3ceciPo4Xb3BnHgst",
  "key33": "4vpk7ZE7pLZGn1v2iQCNoELRJGK4hn2yqYdpUEeAku3BHihs2d8WFc3sGK4obNFTMCWyqNVGbKxMQoipFkgWJ1Fs",
  "key34": "4iAJE7aLmmc8DcSSy4acL5ejNJWmP3KSUwkXY9sa6yC8ZShMKPaYMoHaFfxnZbeK8pcGnRXgjptrjcMDafC4cQg2",
  "key35": "FanibL2MdsdX7gUHUQGuvHGWjeTwfFLCZy6uxsmutGU5wWr1D2BCyukgE2pUTXi14DWzeX5CRbv3RiKHDuRwhYH",
  "key36": "wm62uGjSiuRBErhCnqvNSMxkE4HXy9YZeL6Xi1dBfuLZp35aotjrsQ8KYCL5MiFQfcpArLTjc8QiGLpcWy5zeLF",
  "key37": "643W22FZBMgXHNw49ocvS1kfdApYq28zpAKiz1AWxNYkjJHxxnnEg1vpoowu7CSi7NncTFDx7rEJFg5MroRN6WXL",
  "key38": "3nYKEQopSA8weXF79d2dHZr96uuTUJq7NyDwGpme6tfanJh7DSd3dyK2z2mjFUREjVKAMvvRMoPokw8iVktrzU37",
  "key39": "4WdN1Yxe1M7hCgvdTRJoQ1DNzmMLyCMudC2XRTPCzNpM9kj3FLeY3gu39GdMueiCeAfawHqWTBSavnsyJcN6g2zg",
  "key40": "4MhwdwvvPCiYKBJYT4pxWMJ39Gye6YTAei7H5UKtgSWm8bREDuVAL2n8kMiKzckSQc5w6mRcsyDYARzCrkTh3wQa",
  "key41": "29AB8RcyqNgWkSh9totZxiDmCZmCseoLeCMZoUqk6h2Ag3ArHczyH3RaguYCdVdKRVaBTKHFZx5fZuJehxrKba51",
  "key42": "4mid7bYYYAWwjcbrh6Bz5QVbtoVU2454sMhWKH3Lyb6gsdj6q5gn9dD72jiNzfXCzjNwDbFr3EcPzWxpjtYgNEh2",
  "key43": "32AUXCN3Cht3dgi1XWkCeKA3Hv2Wgi3V7kj4hYkirSgygSp9GpvqrzMJMEDRKw4idzdeVfU6MX868NeJoy25PDnd",
  "key44": "2vLG37SF6D6q27XAz4e3K9DxaEDGjAgTUZUBirrgWxpWF9tYmuTeF2CfG9ozMBkargBfByADMqAXLtFrSPXYjk2W",
  "key45": "5FUYQCWuXodxPKxdvmWC3dczucHsKPo4njRkQHSqrKtC3FkzjYLdpwyhYJ9dRMTzvm1DWTNnqfGSh6b36iKTNYK9",
  "key46": "CfsqZJfAzz4JV5dW8Vx4f9juQG1fBitHTCumy4gBJGkNqLKp3LmmWXrsVzPb7ERMgVSVyFX6hkhyAjXmVZNgxwJ"
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
