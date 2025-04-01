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
    "3tmgQgoLfAwHpZgTz7guJCkmdKNCNCiFvLT7n6zu9XnPn77gbqUtj4sbJACybRT1RdjP2GYE4XpjpwWjDt492qrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3piRzc6jWxwkxDWBUuCcA7gBfvS9LcmfwXhnD7J9DZvQgopk7y6C8NH6c7sHSUxWoduqaFZeVDToMhTqBcSjaPrZ",
  "key1": "zHtNMcNG3qNADcXfxDr1cMFBVuf8a482cgikBe3YKHyEpce2PhrK3gSRBpf326tWimRyNwVhMLmvhaXjX1SCYbw",
  "key2": "3Ht7fj6NEnKFbmYzrAzsssCpnQgUZyJXsAst5s3iBzvW2m2LrR74sMzKSFHbkiLe8EY3zhUVJoqcUFPJ1VHPk7Au",
  "key3": "GZyJLkRTzwqDTEBeDKMAF2KoTJ1yRgo55ykQjAVZxMSRaFzBQ7DR71b5eDhmiLeBkkFEsENHZckFBUP7oLGYwsH",
  "key4": "2LTerGQXQfwD9zuKYgs5wpW7MWoWmHaUNA72pQ9RLPyEUkya7qYi74ta9GW8RnPgWUfaWtVUvSuXnK4tHqZYYZMk",
  "key5": "3SKxG1aewKZCCZJmMvMLRYpoKSLP3BVYQWeRZwvGoNyRGyEJgaDtCkoRLckc4EmjfRgJ3R7YAi44bE7Az1WF3BKn",
  "key6": "s386WAn1BctGxaVMXZy6LPPKvYBAcaQtSi5pb58pbMaMB1hwQMCRRcQcmHiubjbQGTSetc11DoLWMhsDC5cNpLh",
  "key7": "29jijwiqLrX8DZquCEDf69vAYcDAwKobrDgVRKaYfMPPhVHkFex87Z8Q8G8M64vwzM2gSCTkbsoDxWWJuXv6vnzm",
  "key8": "2kfxtJH1gh8uF7zdamhYnUiA7LttpASj2yheEKf7ZJnhof4Zeg96ccHZ48N6QCvpHzwFgRmJZwyMmBHVCM4Uontv",
  "key9": "3S2CwZChD7khnsgjEXteFFTf5qJ5i2CC3HDgB6E8BJhXWGb6bJLtc9oCSbLwTdtE9LLxxR4vHdvvPh29WZBjgyUC",
  "key10": "tFgcrpBxDX8tgLSyBgM2TZYKDiq2pKWUZB3T2gdK3eDnA3HsPx2HyvzWrnoQuhHiLswYvzGei6CK6QqqYQRueTX",
  "key11": "2qEbrxDtvAEvKCKJHcZaEVJWDfy3pV6mcahvH26pAmLVtC9oyUUP6ehGrSaf7EJZFLBtcmXXfyUX98aFhgn7phdb",
  "key12": "tNf58j4d8YyFUG9s18CGyF4FTTne2vEFZXj1TJQ2ke8F12pbGAQXQkEMpwFbDemWxu37sph2CmTizuBHXt3Wcut",
  "key13": "esPD3wgRRL81z4sGH1ZDcPbPkBcJY4qPpKqqjwfYcxiDWs4LQdEsqWw9zGDhnQVEjBe3vgxtjSEVwUPTjeteC95",
  "key14": "2FY7DEWd1WZGBbFDjpQ3YuZh6nJjJKfYeva5ZdTuz5eHU9u683fuuz4g2A3bZnsMrpiZRXcNjHEhCrJv47jH8tPn",
  "key15": "4UMTthMuUqqR2j1x9y81eKJiEsxqvhdk5RSJjzJW3Zx8j4F7ApS1fndEUJgR5L2tzoQ3f659tmA4uW5kTQknzniD",
  "key16": "2oajRpphGXsHNtKVsVii2LnEjD3JxJmekd9AoiRtfGdY9yX1DepUnuqz4E5zAJAt4npwVoj3273RpNm8yP34NFud",
  "key17": "2jzDZgAJc82Dz45nWCgTFZ6nYgpTeT8t6DX68dh6yCrHzopxeFz45JhuUTVkNsm8xV3K6DimsrVB6YsKxQuZWbBU",
  "key18": "3cRUp2i9XQZ9BeEssi9rJENj194Sj3QoogFvrx27McvgfkShpNQPwyJAf174o3aBqbK5yHM7ePeKWmSLpdhi1B66",
  "key19": "2yJ3XiPHKpY6MmXe7SHE4AhNvM6yQK7UeFeurqEhgByDpkQ7zEaxgeQrBPrBU8wZzvfwB6C4niRazwKMk4k4TjJM",
  "key20": "2oNZeVuuCL8f4EgMkYpUFC4FjiqpHdY6EgHmG5Cqng7c9vZ7kx56BVBcG4xeYAn4GWdVYpGuPZkTEGpe4w7JecSi",
  "key21": "5kUjXmXMjqQmYei2orP9VpKNePRKoCQp4z7PAghXPukmeY2hAw4VMEGxJXEUpziqNVWL938DvXFGNVLGCfvMckmQ",
  "key22": "5vqY7hZyvXLbbvyepjLejsW7wSYxxthLuV1SkXRdGfq5ktc38v4787sS4em8jD6QB8mqy8NAv1pd6JX76mHeL4TF",
  "key23": "Y3XDyVmkYKSfxiX3CMd5sEpdiah4MCYAXng5ZTV8uXMPuvepwb8WsvB9S11r7nVueWtCYCwAHyCcUwpRucgAV76",
  "key24": "AqMse2MGsHsa8L9PmZcWcARR5146n676ygk95TYpq3gvMgDGFgxvV8tYhXde39bGGUQbQywM3sTTrpWc4HmbuTG",
  "key25": "5mf7c8A9yKmyrSh6ERgmGNR7oPtDz1bF5AgZHTCtFef1rDQtHZASaVNDVFHSvZunnrXoK4A7ju6kqXcLC15N6s9U",
  "key26": "NSUDZ4wiw4CVUsgKAWmSRv91JL3DJcBdC9KGX5WEtxHyuwDqCXNnkLb9CKACMw12ew61mdiEZhNdK1MnyTDRJ6K",
  "key27": "4cRt3Yk9uU6KrPiFvGZEEZxyS2Max9y1JsxQ35BzjHdbtew471VfEuHcLBmbPUgBCxJ7M9YbtN4PXHQZWbQeqrNc",
  "key28": "3tkeYM9ysdGsozyWPtsNdArnhXhgmrctzf2fKmQ9m5t4kdCA2VwQthsEw5VEiaWMtY1CLeRhjmrWALycfo7hDW6L",
  "key29": "5RcbkbMxb7aDHXkgdNn3H9kDBVL1vUVZ5ctbc8wEGSbcKuVDXQd96Z2bsmcX6qqRRguYfSDmC3uW21krePodh7Xf",
  "key30": "3T2r7EHSRC8xuHZSu8jWd1WKQmfb7uUjgqxyFvN3G9d24TzHGdV5u3wKpBFvGGUDB3bV9WQYp8mu4p6mHPJrLnmA",
  "key31": "2FYisGYJta4jjaEHPh9Qz6QGYTfsnV5d8yr5CamSQ7xB8PX5nkV1HctuuyJb4dzeFpzisT8zphxkGBfgbxNzbVn1",
  "key32": "4qMV1HxqiKAWrK8zaBNbEynvJtkBVWhtGuJDGyyGPrNCn5MdvJTSFdwKE9a78nid4SWh3SkUci5CC6QADvcns6nx",
  "key33": "2Bf3N7umETycbyiH1wAMgH4MRNq9Q8KWvrdoDNt7iaL8VzHnwMzZi7EzW5P35Aoygrsz5ovzybv4PiK4Ayh2g23J",
  "key34": "TsLzQVFKFpBUSD3DaTwQtWBdMEWkpYZp7cqrtRm9f73eYkFbiicYgHw41Fb7DcnoG6ftFDsQ1dDqNuWi6j8m9EK",
  "key35": "3mQ6BknY5KBrTiaprosWzZUMXpcviRo6W8qvu3cBLHSy2YU9UDM5rY4NGFrhrXVC91SdjCnZjaV9WLaA9uJjKkGy",
  "key36": "5G9gbTS6v9YMWKZjv5xyGYMFqtjFa5eoryU7F6kPspGmaoB1haHauG7hkVHUXdqtWzDNkBzerAL4H82afGeFQbPh",
  "key37": "5Uhm1R5qcNH9DY3uQxkeMy28K7eWBtoGBWcgVp35xo5VnLNPaVBWr8D3wDvPwcJKyuA6snckMmks6i4fgqW1N9xE",
  "key38": "2Rqtu1Qo6a1DaATncN7utcyUnFwVTxHctfRmipCQDeHDmBH1ASpQGukgP8ttrWYMMsm7womGW319L7eCCG2fKiUy",
  "key39": "2BqG8bhEXpCpgCsMw8MWaUkJw7ZRN9rH5qKriGaQwH56xerGzq7nZUFig5q6ZYaDUTfNLfEDxdW4yc8kygehXKhv",
  "key40": "31oa1tLF6Sr6MQ2TxvSLBbAPAWTbLgFXouNosofUCHymwkKBy5p5DgH5RXfrgGPNPf1gZ9ssRc6Ju8hDh3XFHSJT",
  "key41": "3XgaUyx21XtBWyCdkS568RR11K1zTs17mQ7vKVwYpLLQ7pewNEenht3L4WKwFfLaeffakeZZv4qXW5ezsHd6uADL",
  "key42": "3aBEB4Nh1sH8emQ1QeyCcMaarqNtwbJzZQ9Dwzcd3TDHGgXGGjMWNeV1jpHLcq2jnmCRKjv1aFwELpnJKNdHAohJ"
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
