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
    "4CQC8defjrjMTDHwP7WQGd6hHEzHciKmftXJg7AucmMMAf5kzBvDXFjbeuxnkG8es7WBiAyDUK6rmm7x75PJ6qbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qZWzHwv46zVn16sn9Q7HEnJMPYHACQgMfqv35cwWdZteuT3VZqyJSJqoWAp1W8HK8qR1sihFw4aGck5YJ8vsJVS",
  "key1": "2Rh2qjzxwgg7iLnMAmT9w6eTAGheKY65pMUrrVsKDusC3hc115JgG5ryFT4jqq5k3nVaKZDqpWu3eMAo4FpswbBK",
  "key2": "4Hx98mWpCKJ4ybvmAbSsksvctPQNzRgymDhPwK5S9wWqef5KUpdU4eh4em3pdDWkRPcNj83k5z2oYfJ3Gg2aSfsh",
  "key3": "2sQZnhBJm2FLgTQyV3K6UMjMDT2F9Mkc71Yupu6XbJSiLtaXmoLDjjMsXawKQK4vDoeUtgmuomqEvE3dkdyvnDJV",
  "key4": "3i6iNJiFdxKB69Pr3d1jnbUS1p3LKDLAcGQezAdxzQhrGhUKP1XCHNMbradFgJb8d4kMfQ1w4Q6C3FgMHFhSUd22",
  "key5": "5U5tRGoE3iJH9Wsq21njWzpE5HFdQzdfbDKgMeYWui3qtBPMy2qrXSg5QLAmAfMJtF8cXtSF3FsTTvrs6sPfo9GT",
  "key6": "RgshT4ev1CfppEMdodKmBSegbAJ73terJ588tunY95kAqxgFgku67ifSSHohW952H23Vk9zGydVGdbofQiXmLBp",
  "key7": "3packwBPP6yn2Uzwwwz5jsHWJ74EKpSK9vZknQNVFywEoR5T39twqzDU94XQewCsHmKC7VCTzK5JbpGacK1N7UEZ",
  "key8": "e49Mz54QSshVdVtKjLxU5hEwBCe8UcGuenPAaLia9A21wUPxmKSXgDcEwVLfSeqFGxv9kWUsQYDz2R2iPuHfPgj",
  "key9": "49THM21AD44XziWmRU94hozzYmfy8jxsYcq9kvfggg8X1Xv7GT9PFEak3bfiChZ8Vr1Kxi972UEEzvevHe8jNQ5q",
  "key10": "anSJs8ZLE3T9g8BB4P87yQZyKYBsKKmXnfQgKZEvgncyNCPsypACQfUUYrPxtbk19UemSmRnPNdiLS8vqhSwFuC",
  "key11": "549GBCdBnoviTws4A89FBcrac9h2YRR2HfCeGtdR9xxMn797Mg8SZ6BFZDi61s45WXQDrwa7V1uqfGUJ9ThFgdPZ",
  "key12": "GwiHCeaepq8hzU9TL5nqV49CYDxuMgMveF9DAJVT8GBkbrHuUaCqmQdjrdZ8TKVSRxjiY5Y6nLCLEmbdazRm3ML",
  "key13": "53EPTd9WD5MtAu1hgcBWrhyWXRP4XDak5SCAnaaPdTbuGeaoDipLdkpWd9czSquvWVAqpmrcdfrQjCoTY6PqTuyj",
  "key14": "4vuNTQ3y3AHd5rGbR72gxTrwN9zQijmKbZ84qtoSuaMM3EDceHXnEn4mju9yVQnyWTuQK7t4oJF7HRkVZ55ZRWcG",
  "key15": "4pCfAM9qKnUtUfgBc6SFNMNC9PJSBSLrUwoH5GBdjjKPaSQK2VzMMXW6DWggnKad3PwPQsxrLtFoNs8eyxESiUiq",
  "key16": "qEoj7ZNR3KghWiRZfifsFtMWirsLGiueFLL8CQwrYrfDvqYTbWw2RTWHkDb8CMHDPRSKW6qEcUcCXBuJLD2YiXm",
  "key17": "4fMqddCxdHToaP6GKPhYy2YAXWtXr2QUtQngx1KC9vbmuPTGPuVnkrHH9drHQ1dmVG2Tg16mV6xSp1qmAxYxnUkG",
  "key18": "3AqxLxSZxf77LjAmzXhoeGkhrEwuQ893UBY6s1JDSRu59UuzXqGV7NPrrQ11iqXDmmrPioJY5V8toaHhsqW9xZ1K",
  "key19": "37fx1BAABP5mYSwH5mv6U8wveEE3bY6Tiwc3HuQx8PeVXReRAtRfLqUkJ9gFBfF6T44CMKGDRnrVuV3o2EYbqvNY",
  "key20": "2khDpvdCPHszmZGphD1NuL4YrA5JNP5mbuV6fBKKMFoVK9ABytZAnjVoCY5pqehAVyyrznxDaQ9Lask8smDxWmLm",
  "key21": "3RCFbJMkhs575FNo3VrtAqRWu595Hf6xXkjjVYvT9gKZvCG81LU7EcucXdpEB6h5UZPbEgZ2MooDdZ8632xaL1vZ",
  "key22": "2GzdZZ8eCTnCd5jYznZ7X8DS9Xrm511PECi84MeBXZCuwuBHACcP28kTCJysBzro2Gh2oKG3qtvNBrkCz9TXfpVn",
  "key23": "2e8W3WeB7FMJnAn52BEBC3LoURWYhcfG2oRu8uGFnLi96gL7PC71PVSo6yUuZzLpE6jRTe31suE17vGGwPov6H9M",
  "key24": "3jcVyqNidv3q5PQyHxtMXrmgasr2ejg16LM1VowmC4Q2nkoVjKKyLSRcufK9XkUdJYzuJY2fAqtZJ628Vtqv666g",
  "key25": "4PWyY59rZ8eVnqqWzuesqH73c59e5L2FaNhLAafVN3NjnTztjBHNTQ69ca518qcuMeNwA6Qvuy4dLJxFc7CLW9DG",
  "key26": "44cMkW313jR1eggPAkC5iVXJurwiYq31pg7viZLuyeGPQhqtAYSXmLo33peKQqm1WSd1kxXw6SkzkHrnpiqGktX1",
  "key27": "3CpAkzsspv6FZiEzyuSvej4atixwR8emWUKNh3NEMMSVDTDnHe7hyuSgDKngApGy8UGDzYjQxyyqJsV1exgQAxos",
  "key28": "3hmQWjRmixyBSbqymhgXGu9VGGfLaUfxcmBStogkswYS28ydpto3e3wTNZDq6RFLdUnBF8NJpGhPzXHsL73C3H88",
  "key29": "Fdh9EEozDEc11sa1hsvDSqPHxojxHmjv8q28NqnoFEoYgUDARK2EMTMjZ5PnjMzfrhvLgkLcxdMsoyVFkwwe342",
  "key30": "3g231txqkeKKTpsaSUre6StVMhxFqGZ5h6gnKb3yoDF5SJXoSYpxbPVygpMujFfFdrdSBN5LYuA55Z2rsQoF3sx6",
  "key31": "4wu36zbQ1jNE72JEcUza2nAD1cJW2gS5YfEupceCcfyvaBanWp6zay8YSE3bEK41usQaa9wisz6duHwFtK8giFzo",
  "key32": "5WToSmRvPvU4CRrf5Sr9FjuczeRVCnyZga17ArV52Rbm4GdScAsqY3vrMsCrhQT54mdUWopY1irkxcbXeo4K8yEn",
  "key33": "4158YnXcVRaMfPaFRoE7P7kQKAn8PkwCN2VtqG3MwbhYdwaaeYatT5HJGVzpwQt2hE5AYPySxiwgSaAj9QqnQVTW",
  "key34": "2BYGtytBGMBvbh7sA1cChMWt5fGcdtYnn74WginLswgXjM7j8p3JdeFiXnpmrvHA9HaLVdezV6ropnvMrRaH4nMP",
  "key35": "UCtN1wkkjsknuqymhqVCR5FzkEJeYUPyCdCuDrL2iA2QfTPtoumfjxq3iGEtvK273Dip3kgKU6J26DhJY8REVze",
  "key36": "29b5Ke4JFp7Pcoa6hNJmaUoGpksqUqRr99pAPDpbgAeZiTo3LmjojqUyB5hjrGEAt7keoSTnjJWX2FLbfLprgxNf"
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
