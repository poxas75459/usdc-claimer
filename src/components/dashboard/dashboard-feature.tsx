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
    "dxuE8wrBz3x4ypNdJpDB4jxSbd2iXao7Pyz9bq6vSC2V2ACpQnWDWjmxD78F77XugrUaeAkghws6aPv3VXiA662"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iyMTduiEpsTQkvh2ZAW2aim2Qk4dxrQ8HL1TPPgRNDoQeBmMJWih1UyaycfV8qRc976dgh4sRwdDEAyizZbxAQW",
  "key1": "3tdXK2t3ZVZxzcsp26wSEVrNkSncx45vqH8dF97earamefdKnCvu2DD889w3AF6NMyjwhFCmhw6dkWiHhJpJ77W3",
  "key2": "2222maDetGehdv2FcMmBHSJH1LmmjKBH1P5EtnJaeorpZAEAvrstc3XEK5vynTKkB2Uu3DTioYiKdj2ecNmtUtnT",
  "key3": "83VAJhSk1aHWJP6R9DiFcTixojGY1mDLZ7pDL21pQVpdhexs9ea6x18WepwcTWd3Rc7nzu828TjMwWsLEGq9Jm5",
  "key4": "3xFvdKMwtWa1Bo55N8SjwEQo2hyYfVFBSWJESy78bjjRxzk7HbeZKS7odoje6NaqZRbbEsFNYuU8BTMRusK53ESF",
  "key5": "2RPBrgRmwATPVHTs6JbzfZtC2q3DcqLuQ4oULVMxzsbUpJdYYwk4iDuVVDzgYfaubFT9VKkXvzDPWVRVHjEDg2Hx",
  "key6": "4N7qhJspARm8E2DHT6FaMNrmKtyGsF23hVi6iDRhRVFZ4nJArpiWfpzz7BQ4ydrUGjm45NrKmVD1J7mt7fh2t5ke",
  "key7": "5fqzeQxTaZPfFopbuesohwtG8ibibBHVMnBZXfrQdn25TNNjNG49t2rJEKwQZpwDiq71fzYbPdB9bMYe4s7AP1de",
  "key8": "4wi3F2fQKnrm4EzTWyTtkrzwdVdafP3gX253Y4Pf4WkF6WzXDfq4jwrB99pukoFWkE4db7rZygpFkNf5HEohRcPu",
  "key9": "36LSn1z9f8Z5QKX4AoqWCxsBpdEGYMVxq97KRh4h6oC2TbEyCnZ3PaihPqWWdASFRaD7Cja16f66UHVeCmaiqgmC",
  "key10": "3d2ncoc3CWkq326juDkNbVBinQEL67Xyue1uwsBXGa8Y6vYRZQBUrR9tkPiKDmtr69PNtoukxcW1aJpGhAjTUDBT",
  "key11": "4ckJ3cUvXen4hFirivG1D89FqXP8RLUtmLUzMGoCo6ZRMxAdiJQrQ3zJEZWqFpoGNVTwysPKvstywNqsGQkieDD2",
  "key12": "5CJaT5nUXaLHeUqNZH9UpS3TtWFAuQoBoyay3doWapL1eBYyf3rGJHXhdLofPCMm8ZxWfLsGQyHTe4GTTENEKCuy",
  "key13": "4yvmVzZeS2rWz4oxhswCuEquCL9umcnCf89Q5drYdLFm2omRSWEGvUSAJXAgzLx4pUr5REmTMnproNSgYW7C6UWq",
  "key14": "48x6skL1Jwq6V25WWnrFy9G5rxQTzYq1sTA63GmzgWZaNq45oyESPP8wcpmRUdL6sWQJdSqnnnMwv8F2PdDXwSw9",
  "key15": "5rEw93nJqcLbbNfRBnjjUfGRvv8HjuSCLu2DD5v18uaQHZoY3zBqj1MXLhj5ovpmxXvJ9AR1zMrM8JKjx36Zcmtf",
  "key16": "2UHX3NEDWzgds1S2ADb9qzPoQ2Ad9ZZKhhrdQvH5npDgJwji5GF4KYqR9W4D8ioe9H8d27PbnfPhvuaQims41faw",
  "key17": "bW6CPab2biNLXfZo4ssNgyV4k1no1sWUm7By2q5LwseKZBPFcEH4BdoSTgyJBGCWb71kv8175q48CQvLEG9F8sV",
  "key18": "6Vjitu8Zb39KUg3wFo1wvTbEMKyzHcuTgNgFebsxsGTmtuzkGVgDDcxpbcGwTeNWUyZ6CYpQqMcYZKxVHzo4ThY",
  "key19": "3YRjydC3rSgv8RjpkAsaRyxPg9yfosgQ2huE28DZ6JZDvg5tX4wrR96LVuMra2fk1tAU3LD5vgCfyqfzdwCQ8U8d",
  "key20": "6DXFtLcVhpGrUJ3cNZVhNxGBhTMEeuQNRGbHs1aLbRREFivP7nrzget9Ffrwv33eU3nm9yruXmypgej7APUqys7",
  "key21": "31g5Srzg2UAcqt31NbWjRuxrB3b5ED9LMK3ph2FDzWheCNjr424rfDka3NpoqHvCdQERRWzefwq7xYE3rQE38352",
  "key22": "2fDzYKzKcTCxmGPkGSmLWQj37ochcev48LQ7zGW1sYykmCqDcmGRM5bkkWZRYyPoqyVJASbskKnxMQa7yvkqRgaU",
  "key23": "YgR2tu3qY6hKLg7PsHEbu4ZpXEMgpzGU4qdA8xe7bw54t8kvFJeprTTjW7kdw7by63sdKyhf7abwJjkAymr25nG",
  "key24": "2C7BkYL4N2aLknaQY45DomzZX62vxKFppBKRb8xSfQKTUqfKCCHQyFHVwKj3tNybfuZ5gWDcoPEoJWrrS7XDrivj",
  "key25": "2Sd87X6u1GozXrsM4fFWmWoEBnM9EovYaazjhDtLamPArirvqveyacfDoknAzvJkEw4KyheCpaTaz7YH6JAaihWA",
  "key26": "npwSYWSx5XxsDV4PphvcidMHKUGFLs5NQG1UbvZrTeVuJdeFX6BYnTadmZh2qPWcTc9sG11nQQmg8pd6kRRFXJv",
  "key27": "28H1t2W8RFHapM1i6tuyFYHQmSZ4fy4RFm1W5FxABbjyjGwmqQ1wwSzPss5cJ6RaZ7LGVFR9zKkCdVPqAQVN1Pt8",
  "key28": "4PX6LBmJSDe1zJVvYZAoNDSU81EwnDxXD6fW2mN5Q2YPna1Vc7ruoVAyVt17BdLceT5aeRPshoPYX94dJqxbzKQS",
  "key29": "Wd5NwtPMjm5TqBzhFrEUphD4fz265REL2U1f4ecE8yjSFQvVvjyoKZEBymJaE2N8yrJpP8jfYGc8mitAwDYHSKH",
  "key30": "BXxrPX5oZ6Hjie17WBo2AJJnxjZZYogEvQcZsy9wnncUSfvHYmHty8J2jQWnpT5cWHY4WkV3jA5ixEYWdtF3DVK",
  "key31": "J4dW1Lb13JVTtzP2jVA1zZR93FkDw48M8jn7EWd88oHq6fbKhMSfHyAw3cPw7jmHQVaJkTvsnNE8mHZJSsXJtrJ",
  "key32": "JZW8Xq2LPd1CKjSEF7JHzTwDQdt4QFMywqTDCkpxAq6NR4D7renNUnok8vpgBfabNHPEgknNzPhDzFWajzzEQUh",
  "key33": "61wdtruX3A6rpr4WA8bagAG5DMLqYQLhWCX4yeUS5giQsgopiQvz3e5FT13uv7kJaYaHravxkVo4cHe1vCaiveBU",
  "key34": "C1k8hXwagXQQYrfGdKHwtmLbtGr7Hs7By6xUXyxPwBW8eArePrxP9wYa1SA2cFGDugqfLXGTvq1GCSdLYowqQfP",
  "key35": "3E1nzhMC4ysj5URUZEv73bjcFXRHfZWeiexheihMgDGY2UvrP5HmPuCNFtL7Y8VRp8DZUUcHRcif3kaYEFpXNm4R",
  "key36": "2mQjUVoCPZ5hkCjH6Q5oNymL3gHusfp5j18LbbzYfWxEXRFFp86t5Ua8qAKAyLBrTc79crmwWYfAcQMLZ5cUgHFn",
  "key37": "5aSbsEhHBpKjN3Y4Aa8D1m4KYWuxKgraHnCY4mjWW7QwJCHoTSAsTES5PLeMYZMnN1Lo1jjikYbiinT6ELQKDSFK",
  "key38": "nBrA1uTuUWEMUhQDQsE3VWSJcjxNcHE5WibzBtBrhRd3D8Uj4VJS3rEtwToHPZS3YZANP5jUp8yVieo7Ysu9gej",
  "key39": "3ELVf1yn6ekyaVWzjwkVH2HauMNqWc9yQRuo8gj6EQR4tJDmD6GXu8Ak9ibm1S2gjZK3k6hGmjKgrQtWT1ENjr3w",
  "key40": "25K67hvEXZvikm9yuugAMEXTPJTyx9JVwN87vdUb7TYeq9svdKhyCWJrQy6CEKMgHjdQQGFKMDxKm2kbLdakou9r",
  "key41": "3Tkd6rrrJJEg3iyxFafis8bGcMnymJGGd35JZSRfS4LMHAVC4SFzzu42VWF7ec9de7oQfNZvkKjLnmDxsTQ7jNGU",
  "key42": "5tYZeYxDMzwjxgw1ncMPhxmX4pLWv8XNo6hoJu4JP19XyxcfdSBTgT1aGukxXNjs7hqMNEerpwK3zjdnUSbtMDaB",
  "key43": "MxqoRhgCNihgXzw68TNN5vEZ76L6i92BjKGKAfz62B3Y1YU43wMSXBxP9vPVQRPZriDZtKA3YJ5B5C41MF6Lift",
  "key44": "5Cc5R95rgA211xdUJ88j1Hs3Md2ZfkvWbgHmwkaNobFqmsvivvRsHj9pHx4nS7Z2jWnzLGEKYjopsh4bgHZxat4R",
  "key45": "5PNpRFaPtxmrFDjF67J9QnecKYCykw25agqhfCAuLZYK6pw7bfYqwbMi77zYibS7WRFKgn751uehmSkYjLepgzqB",
  "key46": "3M5mbk1ub7we9JVe1nmnMNgEf4rRNRZdJ8m3inZ2ksYxCNeXA6uwAV53TKsyJNrCcqaigdfCQFRaCTPeZnVLo9s5",
  "key47": "ZPMbfzN8eCNb1VPz9kxcLARsekytwpv73sk5cPbmyL3StpWLABpK2nnXQ1KJZf49N6DgCJpMfbWQZ2TcmNDEFgH",
  "key48": "2SAgwAmRtmQUJ1h97a2ahaseiKm9h4eTssGH5mMdTnAgbZ4PWghPLJsGyN5hwszUPsSupMpQDZdB4XwkZbXFsAba"
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
