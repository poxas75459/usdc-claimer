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
    "3BDp5joFR9LvZHiYC6s5w2XUbne1dmicsrTLzqcvitQZUacXBXcNZC2qPN1LY2W4uLNr11HDqDyPg5MWjAn6t4e7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pzFuJVaz6aHBHEp5K1XVsFZF3YZcvAPSZ1mhLdtZc1yGet9MUoFYotNTCkb5y7EdESec3xAH5tg33j2Dm3MetVp",
  "key1": "5txvVdyN5UceVu6o14fz5xMNKJphRx7AqisM96nz7PvrPV2a1Pobn3ZG5DC8XR7JPR7tuT3axHo3Niyo2aTBuSqm",
  "key2": "5ZVQvd5dQaCpytneDKLjLgw12TuRTsKPsa24B9VUfrZ6cvV1WrwT1iF13dQdrKG3MSJVdLmnpgXgsC8eSYXmahmj",
  "key3": "5RafdUrWse8GTJWRN8HqkdJcT5TtevnaUqijGj4tZvjMgc768FALBYna8UoMDRKZAMb8gajpQtBxyPK4uxEBXX7x",
  "key4": "5RiXYdw5s3UpwTNhzbxhkgk7kwqcnJgDCs7uJnAjLmYN32LrEu9C7bHL6T3uXVCaLXqhGjM49NdmLKerBBd5LiNv",
  "key5": "2m5RAorKZPga6F5EHu3QbhXsADMniX7Cmyvhf7ej82wX228f9g9X9EMRvv8GhtkGv3UbpFiUgMdZE4CbL3cF5RG8",
  "key6": "5BcC6m77pG5U6FaUu6Q7nLBim58hVR46XNoB2XB54JroDj4MjSKJzcdwNitZG2FVEBpTbN5G5N58k4CtgC6VikUz",
  "key7": "3qkejYjP25wpm5kKxnciTSaup4uG2NdTETkPCmFXt8w9SjhotdSpDerRqLorfeSxTwiasn8ngRpWMHkCvXHodoS7",
  "key8": "2vGJg8oXn3r9CaWZnNvyc7SxvD3Eve7QTEJy9jrHmbDogFRERMXfwXsfVZpAvCpvWGkNm7GvjXTfY2dfEkzNCnPJ",
  "key9": "2iutJSbiqiQHD54nvqTyjXVv9Zt5e7U49qwqz5TbkGwo8wo8Rdj6DXQFVgd4qZy99gDfoMRtPHPkSCxqsmigZG7G",
  "key10": "2LXAaEymstfh1wmQuR9MSt5HSfLBjEfwj4wkYbXgaQUm1CcQE3wRd7yxwk2YweVCygMCyuqpVbJYLsBXH4yh1gmi",
  "key11": "4kyfdpxo6KYHmdpVj5FuEw5GZnfo52gEa46Z8LMiiDbmDScWA1AT7VqNsiepaNPW1xY8i9g6YBefL4vrpowUc9v7",
  "key12": "YrJhJdB5UaRPicTjXeNSEaNDoCa6uA5qhx4vdRYp4YyFMzN9re7Fbz8RNQi4ucU7sajaQPJsmKtHJK3ortjyUqE",
  "key13": "2ys57YSWjqdVuzLkFRMNRJaeHq77NCzfsTNRKcH5uZL2nqTgMgyXaYM8QAqHJGdHKnxKbkdENNpv6swf6Mi4YpoH",
  "key14": "3k9bCyegvpJF2cMx9K39muWpzGw4X1Mf8UQAL57uA2hLGP9JvZCW94u8FvvNWQ5CWmqo5snuPUQvHPh698UcR42s",
  "key15": "3bLnzaCHqDiE1smgFCzn2Yav5QAbHWxZ3MKUQfF6TWwDaqVrjw3uLKhEKfgP1EWtPg9BLQEAJ9Y8LYkWk2KttT34",
  "key16": "4Q8sZA9SLCpjvVmtGva1yFWQJyra2RrFUu1nVnJHbAHqN2eTJhrqynzDJaqGZYNd6p4iQVCCNbHXfZUpvBzsZD94",
  "key17": "SjxGcoxpfhpmrTRyfzq7zakC87h5uqAuYm864eShnjfGkLApwiRTgXNadr8ov6Hyi6P8EsL2SUZPaarNt3sNuBR",
  "key18": "4eZCETZeStvWBNbSeAEn9JLRR8cpdZWpjg7JxdwcEEQZzeDKfLhJd1nqZEvchTTwobCyaBsgj4CpbCP1mA5Q2k13",
  "key19": "2dpUkPxdEY96iHshYPGcfnuCM1jUsfquC6o81yrSiYzXLqxVgpMfenyHa7EzKskcNpxrr3hqjsDDwEvXBih6rrxd",
  "key20": "4GJrpJDorrv9ptY743ZbgrRuXMkZWFrcTZJKgJa4R1Xn1DWUcpxcP74YxhB6j3ejPswh5yq3kWXfNVxQ5jz2jKKs",
  "key21": "3B6cjdL97TpU4RfeEGguutFSjsbX5b6F21z1xrQXiAQrnXAbN8inQaXW6sPDXzAd9Nr3brwaZFYb3zPjUjJLrGQo",
  "key22": "2AWMDkkTvMXDr3gxaw9MJrjMeok94WanMNstwxg8zKHknwkMTWNv57jbdUWJtd7g1CsTeJfLQ3zEMovDjNUmBrXk",
  "key23": "5sr6Wah8QTGxcfYbt9CrNQc9bV2KaHJVWgDbBWbFhYGP9SzqanrsCXozJWm5GpHsMgUsx3p1hzkTud5d45TrGrCW",
  "key24": "3n4St83kQwRPekvZKYFxHBw1jcagYt1uVR6Ae24LMymtLA6xffwnYnvHPBjKZgUBG1r2HA2WQmkiAhde5ha1nxyX",
  "key25": "3aFBgwN1kS7eYPiedJJMSxGZCZLGkJN3VrrPQUxq2KAe5RYNJGdgeFpjLhdV2dAatLVZi8ZxovPTFWm3N7UmhAZA",
  "key26": "wUBdR2auV1QAm74FaFawpbchx6rdSVKRRYLcaBXnLwKxs1HK9X1WHesv2GhY2ZjAzGVcQr8PeAhcqscVD647utM",
  "key27": "4xvrie3Rgabm7EzpefLEvf341FKa3pJ1CZ6iwUH8wTmPHzzt6ifsD513AakbBmNgdieKzAK8yFqqWjD3EXu5ZVE6",
  "key28": "3DEwUcz5gPSz5VpkRPjuTuMdUGupRHVRejK9EYMjP8NyqSBVcU16Xny9tFUAv96vPY3b5W4SZD7cucgE3uxjZWoM",
  "key29": "4Uiwe4cZy47bGBbMR7rwA2tQszqRnYzdd8daBicJe3ADusEytSSo1YquXBCCCvwWCuxHK38YHUzPfaGu92LnujJZ",
  "key30": "4H4AWZBbst4LZ3Dq1TL4xTr3Yyw3JNq3U3xZqfe9HhKL1YNZBTE6W5NdVbyRoPjHRP2QFhMS9mhM3xjwEPZ5ZzQB",
  "key31": "5r1GyXXdzhbAc7NfJHxmbnAAq9df2jhZUkk4wDmabpM8DicMiYjkC51DNHFH7B3f5ovwgB7NF3s7PXDhqWkhyRsT",
  "key32": "2KPy5cXwQUR2sdATq8F94QeWsf19QPxsiqSmjwf88jHDRfHxD8PeteQPhNYnpEgyYMFHDQkQeNtGVLEicec931KX",
  "key33": "5wuGx5dWiUDmyzA8JspaeiwRGJ4ar9wv2DcAPbYYMYifvMjFs1YnZD6mEN77YPq6RY3eV8CzwuqtAZ6aS8HSnWtR",
  "key34": "FYBDwQsGhgmPtXZTrKVoXqntSBXYV898BEjAhboTdu8siLTjj4zmswi4LvZNFb9exfJZujpFTqPQimmpEsTNKXe",
  "key35": "5xQ35KFPYatY8NH7vcBSsCt5YaHudN6ptMrAZKoNf53gAZwFx4qT3DtESzC3taCXYU2KZmg2PugzJayWVAkftwNA",
  "key36": "3nBukNp7aEu5zZQKcQahWgV2nSsGYGN9xr74e6auXMC1WKpgDj6StxEoMU5ThoJz6mxBq5TnP9ePnnWrEXt1Gxyz",
  "key37": "54HHeCCJpBR6m81mRkiGMy7jyUpgpwszEtaf51kcezFC6JDgnGMgwqpdEXdo6uZdDFEKrvULS2rEbiHi1XAYe4Ha",
  "key38": "45GKeXyqHxQKEpZPtUS1Ai7d6nUjA2i7JcsM1gPB5gmKr2amcR8NksrK2K28hkEABnvMLBBPDGXFwyXDZLtuB5ir",
  "key39": "2DS8U6s8mnhDQEBqoCefSWt39gg8p86L5jAzqGkThk7qqb5gZwMzFoDiWXj89JrQ5JHt8A55f2mGMnn4FpY9q8Tu",
  "key40": "3pEYGE3gqCVzam9rKs86Hka1fhFQudZsPUFVaFoxDB9S8U6PpL97EUJf6TJfE2mxhFZXgaKLzmTYTHkRbbXYrZKL",
  "key41": "3WS7SVXURjTPYJ4E6dT8AmpzbjEKMt5Tf3YxF1EDUWhDTmuCkWWHJFx5ndYdXFL4GsRbVBvZU5ubYNDR1kG64mEt",
  "key42": "2ULQZSWXzz86ZH3EojGGVksjEri5kDUZXTghojwLxjJoezxuoVpS6EHvnXWKZSNLTog8K4hotVkdmJ5o71Nf7Pdg",
  "key43": "2WmYRCC6Rwzrus5zEhE5o4pTfDgCdCzhX53E1aipb6zxzWaDJNAFpqDszKCHCn7wqg7hWXZgHsxNKB3DFqyEJEgt",
  "key44": "4mvcR3K3dxSbL4bJvtUdi58jZgExkyqXVMHrtgxgvhZF3R6feGb4i2LpJgzVSXx6uQ79sDv92rbspEyPtKyeSYXt"
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
