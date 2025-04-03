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
    "PTKRCKoq5gsaogPh2zDtVQ9qPvq7MMGZs32MuB2agTEgCTzhCPoqjPWfp1CsZVtS2o7XsNCUZ7Gf6GFEtPP4sBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XLZjomxgLSDdvExyVNYuCfi2UZ8jtn7cEdx6PvViHKzK7sbB4hSiE8j3Lz3D6Tcv7CPS91NqqxG1yW6Sah4KEaD",
  "key1": "ujyYWmLXLrdbzK6qoZsnkiLQJZH4U8AMZ1QgxHxpA5WQGH8B59PZMQTPx4ZiNkFv6PPFMnUNtsgKh32MG466VhB",
  "key2": "4kJHavNEkLBPtfhXD2gU7qkNvTL6rmLquqGja1nejtZcXerJ47PcdJH1TnqgC2AheHVywV4QhaEDsaLerZW8GjLG",
  "key3": "47r4akGRaoB7kMbQFmADEJkmJ5ykptTqFMWAbpeYeuwg3eYumZPGxTB4zb3Qv2Eei2vycWZGRXvPqYj45b4iHxmm",
  "key4": "5mDMUWtVruAaRFsg2T8PinjQFP9ydMn6wsqcgv2tRV8va2WoNnX47XUD3C69ocN5oDZiAcQShoKdT47ZajCCbtbc",
  "key5": "3yd97H1aDgi6AzXY4mSEALm38rUKicXNycxtquw5JQYB5cyXjCUFgDsdaU1VWTfFbN97VLfYT2d5DwfWoy27S5FV",
  "key6": "2ZUdn1mXFtQG1Xh8ayUEdaEaQy8qBG3u5BLWP7hzAB4Y3ffRFafma5DEHsABdXs5pNepgetpSXkxiMLr4NwGfHuw",
  "key7": "21uwntf7ZT87ugvE49HNriiPbB5xNrdT1gvGU28tS1aQ9CUsaMAjbrXarrPmmrNkpiR2enmC21npzKhCwQXHTXHx",
  "key8": "3hhszzrunmofdVZJXXYYzhAYfJ5eTinuQX8jJMt1ty2gAAeqmghgd2Wgja9f7D5j7W1eKd1k9WkFBmuCMVTGTPzH",
  "key9": "383KvVSaw7RYLiicKy1dv9H14vWcWR4bfHV89nj8fF2ToQzqdftpz8naTnaCpxJDtoG2BKdsYSL38SM559EnNVgf",
  "key10": "5xDTxGWQNxrdgKg7nFNTvjNeezswcrsdqVNP1jb699xuyBWGRpkZSWtqWHtKETAF7N2KnzeQVaWNqPEvbQ7ApnLt",
  "key11": "65AUQH9HFnfbuicyX6NTKkZXL1UXbuLRWdmScaZttkCLYH7Nvr8VQVM1LjAe2wyXMvdrEWQndTCUcXK8X7ArXA5W",
  "key12": "4v5DKsag2KWT2anxH1zVfNrJ8ZVssDTKjEJxhcrGhuLaLg5zQx8rW7soEox8xmaX53jkaqHx3CoAozopjoCWbcH5",
  "key13": "TxBuivEjxbA476DdB7US2Db8K4CRoRhgn8VF4YWspDh2ii2q2eyDykkwouEtBMbGNx4RG9ZB9ykqZ1Ub2fTWwZz",
  "key14": "3W8VPkxF4MTf6Y3RoDb2CvsDB2Bro2dPE459zJRLijxMWfgJuNctszWaTaZbsVGWKDN1QBKvhBX4QqGbAvbcYGNM",
  "key15": "5Qz2JtF5CEkWMfGsysqi5N3wFusPm3yK1RrMM15xV8QoEgdkbJQYb7RCLAZx5qtNm86UA6aQ1N24ajtrRTkUckzE",
  "key16": "5m1dgJ9do3Wc3Qcq1oABhSSQq1UJXs8Ja5uYBxaWiFREgofWqGR2kXFnmug6yVJQhrUqfm5o599RFT6J19nqGkWu",
  "key17": "dSnFhfVsCHtk6jaDCXqfhzzScVi3DRXNVcb74HVf73sMLhhS7srgaQ5T1obqA549rVxqbR8vsiuy4EAP5p8yNqi",
  "key18": "3FC3B1N4QeU14fMGTmWNeb9pfnMce3WD6R7JuYTjnkV9JrN29k9wxBXxxKKVQ494y1QZYyb3pfmsxTrUU5aRf2B5",
  "key19": "5WbNX7UGk1uZ5g6eDkbTrYQGNByeyqrm4Xjsv3GmgUDreeJEWJGgN6akbUnmF83kF9WHGAgTxjeDfW3YCWtFxyVd",
  "key20": "5gAW5QhE7cFZkgmLfKZgXXPjNHEx59drjJGrBoUMrT3DiVfocxRS3nkLWfFs4yUtSCqB4PM9dcKCs7kyNhy6JgUt",
  "key21": "4p1cRGYbBNpmUXpQug8E51N1cG2r8MXEPhaV1YKptL6ogB12A2Sh79nLpM6vqbBN4i6e6jYnSfmM6ABqXZSkm2hj",
  "key22": "3a38yifLtiPyFC5DxhwdNmSfBWXPkBAu8UcunsPhazfVRrCdo5ft3USb1NWt24sxsM9uMEBXKYxxZrchVVTrwHVf",
  "key23": "52BAvLdaZiXS9VfpufYGyBf3yi2qqp2QrSCdvgTiCiTXpHHCAx2kNkK8FnzU49bFzZaS6nqz7BbTusdhdTtuuxnb",
  "key24": "5nU35Esx4wJqioPT4xmqt1Nt9e83rmKpaC63CPV38z2McSq4NyrRYsn4L1gaKkkyxsLorYkVtHcJtZMTApTdYUyw",
  "key25": "43wc3p3ie9yGQX7vPwLkJJoyXAjMhmpitdqJfoPR5VjVEkHFSaRrpBQqEXFDPravVcpxhvymvWatCWU3NLSwM6WN",
  "key26": "24kqqx2VBc5FxFfshyixJzxf1fajXeXvH5BQita11dBJ1WiAWgYpiEF8wrR2SinSxe9HuS2FNJEWEjxXGFb1LUGY",
  "key27": "2qmT8u6gAYA1VAUoehLxa65NGf2YEVaYLZuyniyB8byTKkCvM7A1dvzMSgJ189vuJS1VkWfVAZHKXbxC3E674GjP",
  "key28": "3qFY7WpgQ5WgZ57urWCyL9uBUpLruK5wbKC2Jx1XaGQJFAmEGrKsCqikw66dBdGWfsMUYfHL4XYbi9p9XPxgKFUn",
  "key29": "79UvDjD3QRCtfohEAHsToG1rLHLxRhvpZ1FB6rCMEoG4QodtzSYvuGJSy8zftbQztxhBBEyGHKHA5jAUcxQvsQx",
  "key30": "Gw6dcHy2vUcLA5DAUS6fUYYuHyc7b3cDpzTSyY5yoSxBqkhRQ7atXpyYAap5GhFQzAZNJwq8VUCyivDULEoCrgV",
  "key31": "CHXrpwZYhGJPcoYUL5MXFZpH4k5NuHNZWZrmTEb924LpeFTC1KTGJhZgtoJcaV9JspDmJDnfxptkRseQAh8jdXK",
  "key32": "56NXRtewYwjHum7yXZ71jTXuPfbhZnrMRi7mcVc2wkNiFUkbjiJW9Jy1qmqyA5eZf9V6qPf1b3AeThzFKaLd8tFR",
  "key33": "4a8JsW2mvkXrmsygB8BXrVDxcDvPQq6c7KnbVsEYoYE5Q4aemFgovyRGPFHMxsfqnJmp7GhyeG16boQz1mmx8r4Q",
  "key34": "F5b4EaC8msvh6V4EEjW8zaNSXL2P9ZPGeWXGqAHAHg38pq65i391gWRD5T1FuCoV9Jcbz2vJPt4bCbZFiuozTtw",
  "key35": "4EAQhnMSHG428mhGRGWbvRAKdVwfuaXD5TWcPGE7NwcRmgqVxU9KGTF4VsMWq4CDEn1r44WXnfE1UNVjSNDCsr9t",
  "key36": "3rarECAgnnHkVSHp1KtLjM387NTbwTE6RZBGLLog5EBxFhC4vDxKyJQRgMDZAvfUS4EisyiujzHoovAqBhMsQRVX"
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
