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
    "2cGpBZCcrNtPXopeGYnEewH9iFPxSWUtsBK2WQ9PPGB434hgJdHsXQjToPaoZES3nJ3btSb2CkwSBYYf2efzU6Uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nEhFiiiH5e5fHe3HnPW7Gg9mX22SoEvz5Q4nySE7kqiZNhULe1KMqCHFq3wbXWMhDfP7HhmGPsQmrUZmBXWS4d7",
  "key1": "3sDXumo6VGqNEVpLY3mfwuuNmHwtdxa4qVQ57PMFESzwd3whu7gHRhbyPzbXdtZMMfk8rNdtYo6wesbZhR8NUcp5",
  "key2": "5nk5vuyQTHNkbTzokPXuLFBnDpAdAnA5SbPp9b8BNGfLqf98JZtjuEnAFTzsEu46YiK9GB3voBP219XRT6Wq3jk8",
  "key3": "imkAPdU4mJ7c4XfkknFfapQDq3Vi3WUA427cQhbFvQp8yQCdqJinzxBzawJ8W1hfCGdZWFj3GrGM8VvNzVzk62k",
  "key4": "4GibVa4AfEigNLVVKycc1kW6ez5S3PKoxmAgwgUAtb6Gmwtd5fZFSnC2fvD2YVFGb5BqANaFhEouZzR7XsdaSXH4",
  "key5": "5Zcs5Wdp1dXCFH38VrF2zXDTBG7khZM6P1uK9466aQzeNrXpAxgni1jvfpqzQh43S1NTgQrguERKSEbDgXagKQYR",
  "key6": "5sqE4MT4MUAna6VK1t5vv3kH7HYoqqMz2Lb8SeCoEAzDpCp9yxJt4XSUEK3g3AAi5Qyzazp1ugp3Y7u6uzJmhGkB",
  "key7": "5pjwjeYDLmMjpDDYF81hQfUC3sf8kdMLb4Pp1BEWJZu7mqt4tVtbn8KE2XZGWTnfK7ughFPXt77bYgu9Xs51Zpys",
  "key8": "5h3g14LJXb4FcXQs73PoLriu18bFrUgU4gMJR3kee5FQ8Wz7XNmn5mZcggzY7cRBsd5a9gLRGWgba5JYQkPfx91M",
  "key9": "2jc2NJxrcY86KU6Cvn1QW6mu21GwBs185zopV3VeRNrrBddeFwkovsrt9W3gJk5Qi8mRRQowJSLEK6oFAPFEVrdA",
  "key10": "3DYpegFyqNEhPNSYmGbUdKyoKAKtSNmMMCxq6CaaAJQ8LiLjhYodoWgnQi7MLNqA3mFk81reGoiprKfXrZrPZeTa",
  "key11": "4htmGA7Fpp5FX1ya82erWqwqhH52pnHmJcMGfUS28GisC7di9hLf6Q2qLtJD5mi4mT9eEdCw3VTSfWm5y95p5zNw",
  "key12": "CKr3W7Fnyb1Y73ZAyF7obLw4xMHqHUwDGbtevNF8RZBipTbjxrpG7ybyZ8DftcZtY3yWECujFjWmsBYViwzdPmC",
  "key13": "1o1fwRQWaXJoL9o3XyNgS8Azkfmg4QN7DDiUo7U4mcgXsNWjMXLjwAsVYsDPN26LbebCMe2d9FrSoaxK1z6j1qL",
  "key14": "hHNNPJFc6KP6sKR5pMpMSjeAQV5hxFDXUYKj4ahj1WXCSrHEADiPuUSCgCeiqf1rk9ySjQRVDC1YCw39vTM7bLe",
  "key15": "4t42NPdEWAAfUG9Vb47pyhbQ86K5T8853JydL46kZgvkE6fGfWbYfUNjnBNeR2Rs32DvAf2NKKMG364JXpdEepmS",
  "key16": "34v3gJeqVjrsGjTiVv49fwF4NaKC7BnYahU2UPPfYEnRNXfp9znARUq6feWq1hQmRvtnb7TLcn2vLF53G5Ae6USQ",
  "key17": "4zeqKYXs9NxiAQfBizTMsbK8D82axr9TTQQTfYanKuve2ca778ZYmnxHnHRuj9tWfuu6WazKkwJXByr2aidUNkWt",
  "key18": "4wsc8m8qHfRZXzF9oFFtVGi2Eh6dbn3V59F187tit5bG4X6Gg83rhLhNEFoWHxCHarsLCCZbLcJSPdoh29TBbeKo",
  "key19": "5vgrmyUUJbwpMCD964yxP7dnV5t4gQtKno1muph3HTMDcVzWXX2ejzjdbhPNk23xtsjsw8Yya5Ave7px82s8Es9W",
  "key20": "5STVSMJrARm7jhckmNJ8xgckWVLqFncbTC8DMwVkdVY8bZGAH47C1P8JfqNeiSF9jiJWE3dQ9FVc91BrrR2ZWskV",
  "key21": "4ivZgRjtSLnWkQwYExqowDDoZfSEJhEQQ1PcTwqXJG5fjqgZUhmoD5wmYMjhxtLqWxZTiWWZbDDgZUcox12ebmGo",
  "key22": "3bAKvvKTyy6nKmAJtc4n2hSgFxaRKjufbo1Mk1eSRAs7aBTsLV8euEFUySWi1Gjw4WHVffJDMq7ETxPK68gvHPkv",
  "key23": "2NJMEQADkDoBFRZLovHmfbXt2rmeRXaq6eWwPmAHQFFTmMGHuAwqpne9UWQkXRV2ChbsVRimbFHXyai6i7BXVZb3",
  "key24": "5nxZ3kTAacpq1pQsMegEmGuim9g66ChgWkyZsX99TbbNGZikJsfG4eNJ7nszzvkJD7kv8UQqUCDzULQiUWTGNkCz",
  "key25": "tPeuZ5Latu37X528otUZNFu4ZLcd1MzWHsxKeswrVnokth2tUtSA91KKF5k6aAvMcWwXceUyaCPQa5BHwZ8XN9C",
  "key26": "4UwFs2tGAEFwiAbAgZVm5JhKgfhLqzcGgoYWvaeNUYnQCP7gyapLbquqtMVaM3aSkfTRdWftpAYj8dF2C6mADztJ",
  "key27": "5CBxJAxkWuArJZ4fhEFmWxosCzzrohpUVhN4e7u5GTNgmvdgwK2jwY3A7yjroTHkzUgUxiaaJRFdhVcNBYSxQnqg",
  "key28": "3ejb6j1n6muiF7nQNx8wo3XkEejfA4VK5FctqggBebfhHzZwVJTnbqsrNbQ3utn2oVRackF17Gn7MzR6qG72h4AN",
  "key29": "2gsZWo47zgxzGPTxRaVzVLSEVaGcVjPWCmX9tuU1qimwzGML8P6EyCWTVv37pmYeoGz2HBrYpJ9XCq4C63YnTXiw",
  "key30": "4yrZjspvGDRjd6wooyrCuaA4SgMZb8ukzbnhGXCugafqBhgm8njcVXvYkgwcS8cVoQJUQTZ8RKsZ5as1ZVvx5ybB",
  "key31": "xBnJjQD9hv2prcM5xpKgdhjgKwM5JrmZCuxXdQujR3gPKY6GXC16d99BQ9JPtiiickZbtGWaAN44hEdRYMSBaWa",
  "key32": "98w5GYtp4ScYgeW1LaCZaFt4waRJsf6wps26Tie1un9A2QywGYeopGKQxseQkcLYjuUUCZmvcvVGp69zH99Uaj3",
  "key33": "29nHEVgtyS9idi6aG6cwpPaRfAcevsdaQX4C8WrVt2SjxVRibtZEdQHajxATQKtPG6AZm86TxyRXnTK9q9vyNv3P",
  "key34": "iG2uRKrw2vtYg5a7zoJLGwWpSQh62r67xy9PztEHQAx1Vz86ZW798jYTXF2iAMKPagvBSRShZEhiaocvai3f5eM",
  "key35": "3jxVCqiX3pxv6PcQYcBfEPbYnhmrfWz8H8VrSs5JXWgskcRaTGCmpmhRGwSEPodYsBbBWuVJWFNFa5mTi97T3hqv",
  "key36": "4bbBgMnGA19EgibJLDsreSQSXXak9jsNHdK4mJJfwXjqsD9oewaXd6HRmZHczSzVNXUFemQPbSuWfv5DmeS7z4uG",
  "key37": "QWQyZbD8zx4PyYNFDWtu6AyzwJYiAFzu6kQus5ej2Ae3XQvutocLuTi4e4vDCtivQxAeambLZGFMeLPvL8eML6w",
  "key38": "2ukZzndjFeicSfjpfAdD6ZqUvA9g6W4zqhTL9TttsWPJYiETzgbFJguUtUsBYWAXPuZjcxPuQ5PTAZ3b2BnrHKzw",
  "key39": "64VLM7ZbhGoo9UbwcLcyTcJ2xahmAV783JUp8cKnmBbWvYBpceR21UPxTu7miLWiNgYPQM4vtQAE1NfvNBeuQTBB",
  "key40": "5ERMyWX7chi3YBVWp94NYmYbnm2zUigXLmU3DnZuc3U6rYVGYjW8vx1fYfo1Bfeh4SRtCNwZqw6vGq8NGfWbukxV",
  "key41": "4GCDT9fRFXjYEFmsxfCcc9rhzK3ouWegaakZXvBmWhSTtM6QUKFe1pAptjpRs6X3UBL7G7vzXR3Vqof5kopLZ5EG"
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
