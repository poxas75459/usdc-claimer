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
    "XvXneDhM9D9BhQiBKjEy1iFGibbzsFsuqyoKC6JumpJrJRfbqs4DXZpZDQ9hJWRdV9hmhJ5Kq54pxQRdXaPZuD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e212xspWSsPM1rALVAnomLKuC5XPrEdFRLBpJ32Bf4vnJZiE9Hjxxoc2xexbiBs7tmXPtvmBwHSG26jmmKX9SFt",
  "key1": "5F8LsKj2KJ5EDxtaudbUwbirEZUVtGcz6fLkRfB5mzsX7utQt24AkdGpyipGf6RojmdNvqMxW9rPevXF7JxjK4NG",
  "key2": "4A6FPKfsLKLGHhtumTWD7LzL2bNPhxSjgby19sMVsqCjCdpmwxnVXw6buwncGGSBWiqPHTPBe6dfZpHiSL4UbeL7",
  "key3": "3fmoMVAghft6p5htHDJJj1jjTjWwhFfD7CGhP2Ea7ndsKUV2gTfyzTZm6hfDN3mJ31bo4sdCdBgcfKnLdVZ5V4oa",
  "key4": "5bUDvvWZybZtCL5TFHDfAXA9QRg59GHUbM6fy6nCDwGf1tBJWvRYKH4hetnKY925ER9gFMYXNo41krqWwc8JBfKT",
  "key5": "2joY3y92deQSim7Qg1wjFNv5tBv7JQkqZhn7C3oqTKwCmDDho2qngWqMvVknz3BabBUa6YxnppejDt78qVHtJWWz",
  "key6": "4osfAEyeRzWCEWrYB8RN8JbRrZtf9Uh2kpVV6aDDKoEd9sWXggDQAW6zpzGDktB5ow7QeEZp8xSWMRzCqxEPiGM9",
  "key7": "6x6NvHqqZVt72yZiwo5g8ds17XdW5seKHmX9jxWJsEHBb4ZrAXs1fbUSZXDSMeTnv94umWgFSTp9fmrajmah2cM",
  "key8": "3Y3jtPGNh778BaRRp6H5HKj1QstT7A7c9joezoEaZZ54v6vmV2m2G1TU3xZSn2gKNS8gDBwNxydRd9Ru5NAtjQCx",
  "key9": "3KnRns9Ybrxbi2CKN4gwzmcELCtShZb6hGnyZocD5g3acbtMW1uSCX8h2GsL8BjxH3CVD6ZXsoD8NGFKe722FrYY",
  "key10": "48n5M32yXRJXEpVDHvNismK3Wi53qC2AMXu8uNPH6E6eB5ojq88tWyw1oJu8fUgAsBahFBnCwvedUR1DCoxj81AG",
  "key11": "32stqA5MwyyA1vr5hFjQ97p9zFEzhxmMeoDmkzJBGc37AHDrWbqCCH2NMy6ZNuqx4UgfF7iwy4LnwS5GeirCNSKh",
  "key12": "3ibk8eSMy6QkCwpzpLei8pkLGnq38xQcUGcvtUTnx8NgMYMD4jVSH27r9RdMdCj1moUNaDk1uKcr2VcqEfHPYCs3",
  "key13": "52LoRA2euRMQJmFrCdvj1jdkwjToPTTLn4qLCKRdi98nsKrxCekZYUWzy8a1ou3fcydoe76KX3xFcGk94fSRoX7C",
  "key14": "3W8oqQTtzDY9aYZ4bGiRYyPV3pE5TAS1Wpk53HHKurWsWQWoHspv6QYQfMJBKi5AHC4oRNEUYzak6WZAm3S35baB",
  "key15": "3sLqYtezpaT2TGxeeCDfQDdAR2jAiJhRjdz1yJhywjw1dxUa9bMtYDwNa7FGRWi4eL7v8LrJHat1yLvP2oDx1y1N",
  "key16": "5rzhQNBgPoGTCd74KtNt9QzhA2cyRYmBpaKfJhoHkZ9JZ1YXnaVwTnBE5yMDxCb5VgufJMZttrA4LFZhe4FJ6tP",
  "key17": "46HtWMZq8YqA8nh5v99cTCSk2VVHjTtDhRCeBqg4ruz2bpBYNva4KU3LuQaCbRVb2CCE7gkEzvucyziVLyLqznky",
  "key18": "3sJysBXayCn5xtUqexHPKZPbsjVEG6ytr8yNpmH4saHf9hgdP2F7neaGwgEtoWLVXHDU9RiWSDQR5GhHJYATw4zB",
  "key19": "3oyozhFs1XxFAKWHFJrvaT1HVT4GoUUbiDAVGVFKH2oU7Nh2E7nFE77CMzLvLZdptgPVcRu3n9uQe8B13xjunUBi",
  "key20": "4PYzHfi8JGpQkq2612n3VYLkStUNLYkQJDkkrRw5UbWr6qwEvyZWUXzRwCyEnwsqSjNF9ZWDCurtbdKRk4H63atn",
  "key21": "5jtEtjCR45RwqQyUYo8VCHTqbFeqZ8hGoMa7N9NeL1S9YoEJrCzNAtpndxhwxBXSYkiYZ5aBUjMimV1aX8gZrGKw",
  "key22": "2dknfq7TvWwAp3mKyKypf4itvX8quXTvaXofgR1qGBzJvCDcRAbYBCS7rkNJKGpj72rpFy65U2Q4jJnjnFrJku8c",
  "key23": "4YhxxhoDfCP7NycBiNZinN6T7LDKeXg3aouN7CnyDLcQKKhkNz5b6KD7uuPXkPhEJwARu9D8CeWbiRn1rYhydbrJ",
  "key24": "2PmKhbNZdLdB2mWouZZdeUFVV8w9iBUKCxF3JEjxFiWDeC8nx5rnMy6sYcZSqSB3Ey9axjBAGDeY3fVaJjqvNpgr",
  "key25": "5bTAXZ8oZ7bg4PsJAbCyLqXNi4qa8RufhkPdhxxJnR8hqHNumZLymN2qTWTUrHtGrKjwEd7c3NEoFJvALNKKEp22",
  "key26": "5dsePuWnnHKT55kUfyErgjWTRT8HqT6v73T2wGjQsHG8XMaQhdRMFA1mFi8iQmgdPoN2L2wjseNcnSnbXueHKf8r",
  "key27": "5URakVMaCifuAUueVvZYfVLbPejyTdNFp14poVo2CRtS5AWhssYyggfa7v2SMhHegpb9chkaZeUxeafof2kLdYk2",
  "key28": "Gz8mXKXhEWWmBZgSthGzpm8y8mMzK6F3AHoWqW7ik2wR2DSHTJJTHcR3cQzfRMqydrnnz5q1EFdSfgKTvYp7rCQ",
  "key29": "238TqGftM2DqpcBCZ8LUs3V5G5bTWAkH8XNiSBFDrmm8J4nVaJ6kYJwmgcfYPbrSRSNKnVciDxefXP3MJx1b62XS",
  "key30": "3qse6983B2ymRg1dArC5hcciZHzE4xpKh6KkegWiXkyH6p7TPtxQmVuJ1FkHV5MuYEyBfJhMvYrgwToc51hqUTfq",
  "key31": "2SiUBaxyW9sZ3eVerUHYZc8tWDNthvwGtCkreefkn8b1K4cQWYV5NGg1y9CTMfEhU33khKvuTuHBkkiK68dtdyxv",
  "key32": "4wCbHpDUTDsZrJYgpV1jToCmCtJyXHMnoAEXGgTmoVSGDGEPqhWrM58DwtivSLtFH32RkseP4pwUS8ACBtCpN7MY",
  "key33": "4fSCTJ7Fc4LtUu7yobUa9Vozpymnn59wa3FReoF4X6ThcmRnMo1peg4WnL231g2K2U6gpUjtd5Ve3UnM9nNs5mdz",
  "key34": "2TYTBeW2iKC94AJoagiL8uXPoJus8pUFNHYZL74XRG3393UsDTRuwkNBYZyNEXxa4XvKdYTfewame7m6sGBMq3nn",
  "key35": "2RJbE9Krx8QwjknzsutYVdv2JGunCZro73BubnnjauGGs4bthP51rKauYV2xrHJqXenG3aefNU3f3YyKAuCU7ewg",
  "key36": "5tnb8UiHWQBmZSngtcmDCthjkdmvatzr9DtThmSMJZbPa3w2GBoZ2LpGKW9b2tAutsNFiYDUnoF35Gd1xVAJ92UJ",
  "key37": "5L5dj2jSJQVh63du5EHJyLByyaQEU6euASDusZDcykqr5VYQmNj5X9zXQwK6BrL47sxUoTp9mjxp1EK1swSso6dw",
  "key38": "5U7pjzkmvCopVAyr9UocTKYQq5cPPbJkRUVvaeZb5c4HWgaZnRBUCXx1GwkC4LwNEL4JS5jpqJA2YHwzg74mTVBW",
  "key39": "36FxFUFw3K4mFRsdT6wgkxRUo8WGe25Booe3suvnCe9sZP53NAtaJdEZJRyExS4kiHgMtKi3LnmES3LPJBrygdwj",
  "key40": "4v6LUMtXoVgczCTts99Vv2X7kTcqF6N61Y7AHZCBGdtB5YmQ92xwcrbvTweXVzBoPQjHQwD1XhbRJcyTKdgu3Qq7"
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
