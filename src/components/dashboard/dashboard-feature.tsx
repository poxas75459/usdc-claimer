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
    "2xrVHd1gEuYy5KJb2EfTkHw38ap6QmpWX5xNFzA5MQsMTfV3XJ7WK3rmgXcCMSEjaLACSHthgtfXsQnj2NnDCyeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nV2agTqwakMsUaUrTcNzxCcbNjgWproHAFfi5RwGma2iHxTWbjsPtiR8FZJTCY8eBd1TcP9K3aJeqP6HGccCj9r",
  "key1": "k7RS1tPEh5wU7bxsaj6Qjdbma1cQdkVFJ9dJkgyD1uUohc3coFbpP9WjkEN3QMg7murE8FeTkfSPArAAQwX21aA",
  "key2": "4cwZduEADcPo12Ad8yi4tHs8WML93Un5CbLYtmnvWYagUy8A7qyXLuecpYYrRsPcxXE7JKcUNyRW1LmcrJVsXuqb",
  "key3": "LBGtAXG8ysw8W4mjePgJtXkyLvdxEzNDQv6XvxaG8cHrU4XddQdNDvkrAULDR1i7u5eKkvNgAGgXiH79vMWMDmM",
  "key4": "5b5n24LZpT7SMk1gzi5qJGvLk7Vg2DHpAizsnpbycejQhfTMJr5ckHxoEBYK8aiTKadL29NfiX53R2WqjyT4nKqp",
  "key5": "3NiEq7ixMi4kKio2xWQJoN2t47wnrutU1vq5jQQnrxAjmCub1R66gb37oxYbwpq3bcM8aK1mFZsJqwXVtZX4BY1p",
  "key6": "4CSuEKpGcNwYJq1Y1pkHzZG7miePeurJG4g9DiqkkfcnbL6mjJ3wGibHQkEuiNXAe2UWTtFz6jWLq5QwJDMfQRma",
  "key7": "3nNCi3nLgNYriHgUmyvDqqtXusGppKWWddyER9dQpPRDwFfAFmDfcpnB7QSGycX78BWE6nNxAxvhijnHgd3NBkrn",
  "key8": "4J6X7ZKtpTkiqSinPHYxGAEu3ddnwv8EdJz528TuUn2ncjq3ex9Q8spmc7zS5nrKU3rivNgcaJ7b7b86ZyBSt4LC",
  "key9": "41wpSFrJVwEdsqRZM9xwa1NQ7Uj4ihFnNmsXzqtdZimKr5srtyPjim7kGdxK9vY7P37vThRtNjRCLDWqUpTrvHS5",
  "key10": "2FHqd45fmi51dbdAxtC72bekMD5hViLcahLea64kqLjaLxrL7haeYA11pGmQtxQrxhtsyguZtsviPTaXvAM4zdGh",
  "key11": "5KCBa8LecsAxtqhCuRhe8rkTcaTM3nbV586EMxJZgYMiGpvnRcbkzq3ayiG1Y3qgseL6ApTaBLyHzfksYryXwpqP",
  "key12": "26m1bcD8QvUDJ4TVabaf8gtxDQt5c7yY9pBjRXkPsJAGPnnvKJtf71GPXF8mERsDJhmv9DCdVGr1Yp5oeX2zko6F",
  "key13": "3iS9oLmgDWnZt7wYv26NtN3X4VGb6V1FYZdcDypfbJ5Rb5vkv2TBgEseK5feaq3XeFiptbzkfUotsF3HuNC74VcU",
  "key14": "hvr2fpYyvGKPRYSDhSNTRLdYhBfqFCq7N5EGSVkfn39gJPaHoU9XpJ4j98GST8stTwDdstHXkYh9CAQnTsNjHYQ",
  "key15": "3yaHK6dNmMFxe9nPtTy2JjNM7jBcGonthVJUiKvxGHu3bBpWZ9BTyHkPToc8FLmLfJnwjMCBxQhk1eKebA66aZ8N",
  "key16": "4ZbEjwmT9fmtRkPYeapYizTFhgo15g6at8T88FDTszRBQtVwPQVfyHpHb9QUFcB25QvsiHZLHvB6XDYgGLgyTBSR",
  "key17": "2ss9RWrpjU4DxwXyVmJcspnLSmdfTKGuuZinGbC4dQ9SCTbERRrN3pRPiUZHNivUaWEAm5Tvwp9i63u3fms9KUV8",
  "key18": "335tskMtUEVtoD7DRgcaT4J66AWCoru2Yn6BBJsHpvxuQZVjKCenTTucAU2oKGMUv2XQ5MwnEsbwKxHja32uA4ph",
  "key19": "3dojHrfhJ1fsiRn8Av1W1dx4CSbWt6PxD2kb7xa228ghjmgpy99ugBcSigpjPXg4Xf3cSNyit2eiN6VejP5LA42f",
  "key20": "nCwstozZUmuGRKyvTiQskx2h2KLoBk95R7uYKvirQ87GFdyy26YeyAxYXzhzNGBb3bPbM6QNschnerNoWRFi37F",
  "key21": "4TXkwxEVtVoCqNCoTbqeUDTREnMb5ADs367MpcjHEKpsQ1jnqoLCe7bLERViXnrye6fSLJt4j41QobpMr95GAKCu",
  "key22": "2cShD9Bm4un4Ri53zwzDHW5r7s19Acg7Vc7Dtn4bdSmVG6tNwcYNgqxUHj7bE7JuYu2V5auCV8N9EocGWU2BMiDe",
  "key23": "5R56AEmgnVc2JBHnKCnGH8Aff8pTBW1KyNC246JEV5eJtzFVqAvZGsVwoBuebF9SmAzR462UqYJhFH4dH3m7euDJ",
  "key24": "2h33S7duqckhNZWGgryPhR8vRJLsDwiq5wfx9f5QBh45yNKDBAWa3G9zBVB2YQuvoGnqjrQtdsmaab7mCJUEq6Lh",
  "key25": "G3FKjuemeAtkC6xg19TNA1qUAHBBzLJxdnv64rmpobC1FU5hKwVHyDdpaD3JvU2dxV1iG1oUN8kyQAJX9E7DN4g",
  "key26": "3avU2DLdbS8GzV7pA7wcXpcuyCsjAw8LukqnKBTffbMuoHFdaSEj3hpNkqG82EKMYtHz9pkXkeVQDnc99XmZoJyJ",
  "key27": "2mM61ruDq4JKv1D19xYYbYooEzTdyKHqNafmvxQqVrgujNy2Ngcxb7FWN4tPUTxHmWboN4rRduadvUdMHxW1s9GR",
  "key28": "2wUqdoE58VddWKXs6saH3sNAgYzrtYRz6kEEn4AVbd621TaYTJ2BZhayFtexGKWQo6e66e5x2nZ5sgXvdY1EVMoK",
  "key29": "4TNivQKH1CCkCfSDw8yBZ7gEhbdTVk6JtQwFpZaBWaWQ2Yk8fsRCQNePY6syR8PLsHy6xjje3aQgKLm5ZH5ST4cE",
  "key30": "w639dgt7uFsr24w6PzGDaGurNWatFwdLFphAUWkWvA7zDbTg3a1YAm4eqRRoFJHp2Awmu9u3KgmJDDZti5MG8CR",
  "key31": "44CJLfvmBZ9yppiaWMiFSKCTGyGhgqqsZsP8SkQ2Yx5g32NpbYFy5qJUeiFNRDy1L2Jo4RUFvRxb6nCc6Wapo3K4",
  "key32": "5GtVfUQGoDwZzFnbV8Z27S5cU7r8RmW8tfGyDdj2baBpDFw6o5mdyB6w9gyfVJhjPYTU2jeHFuBXLCsirieJV4XB",
  "key33": "3VpVBAhin7xhHne6QTnYhgN1TMZzfKzLQ9NyWAK8VHrfojc88D38Kc6owPreUbTXqRxg5rEZ7Ze7TbadQFTdBVRM",
  "key34": "2J2ty3UefmYh5eaWxQQbUdZBMpfWX4dia7gTA9oie81sBb2Ke2ENjMF79fLMXiYZSpPSMnZhYYDwC4z9yLgj6thg",
  "key35": "3G397pyNWsYgVDVeq1gVrafpRFdoH6fioP6HVodrHLFQCJtWSEVejtsZ1ohSaKPL7kLBbf7fsDB6cvNRKSKhPNwQ",
  "key36": "dnGj1GXybMNK3JKe4Wtn9QqNiKHVUUfntCZcBEbSUcXXpPDLoKAsRRTWTuzNioX978gM4uauPjUNTvkhc1KJTGm",
  "key37": "3DHvU7LtuKMU3WUDvCPyDRCg88gzv8Z6jHZjHaaeE1cSDMeshYd9bSx65cMAEy5JQyVA534ZRpBZiWgs2fzt6SYQ",
  "key38": "UTmSpK1av6KqpNf5kJXjWfwQrnPScC8vGE8w83cyiSLbbYpLUUMSqEAksWHL6CoCkDuhw1WQMURavixM6VaRJKN",
  "key39": "368HeFhX2sHH9t2xBDSDNQgE12tmQyQBrJvzw3FSEE5pf4N11bt284VyCEYKbyxZiLABv9k5qyTQgW921PPfRt3F",
  "key40": "4CiweNYTzqfUrJYwzDuAn3h6YqY436K5Nsc9ZrNVhXwRcf4FecPz3rQGSVPGJVW4UffDBquXb296MMLDU1x624f9",
  "key41": "4VckYKyKreETSfaPrroXoB7CkevpUZFhu8FAyNP1exU47xF5FK8eLPEyif2kPwHJ7VvWSrKwvWJH6vQ1xC7bvrxc",
  "key42": "3F56pdn7EvBHLSFAx8w4kT83gsxqcyuEYAANyvAyWjyfzxYVc3aDqRGaKGivnipMSrTYog78fLdvcSADq2ZzDGDp",
  "key43": "3wcLcU3sMYE9WcTG3U1qdg4YAdAVDbnNvZHcGvEDJ5Vf4hc91GYW9ocBcrk2PXh7w1TsDmzLeyauHwzGKJAyGvE4",
  "key44": "2U8XJ3aZgD6pDkrBT1izWzzh58GHzsKUEnJ6bcimSMJxLU5yrDXGQ2dLLRqnWbefkHaj7hxssAdxAE8P7R3XYwWS",
  "key45": "hJY4rwN2XjKx3DSNP6ANDRGkGEGevuhURmeMF4r1Bip7pyspWYn2opSLVtJ6mhKiwKMfhGU2osXHYpHkfjmb1Mv",
  "key46": "4gzMYJcPo83g17PutnyeXPLTkUCQYjW15DmkmxMP3R8rGFMSHpcugNteZCqdmAnTMqTeA2H5PpsEid8eHJC6cxTn"
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
