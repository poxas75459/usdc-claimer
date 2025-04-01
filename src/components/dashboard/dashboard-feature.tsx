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
    "67h75paRx7k96pBjBTgJQFueDuY3odagmUoFPdD9NCARFT2jM6x8fJi7jVgGbXf2adgDz5sGT3Kz3bKej3m1emYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3enbDZ2zJH7mqfzsCg1dSdvufZVEkxmDQKWVNFtgC5Cw337vSWytJgE5wRyynfYrpaZrTMdxKh1m9m8DCPEs7ARU",
  "key1": "ERmyHDjzbvxZ4xDVQL3VhUYaBbPpNQqdfpDKT1GQVufHSFRQgQMmKLuYvBSyQ8BkXWeJDqqJhPe67uJ7RcWXxhF",
  "key2": "4FBwG2ShD1bE2E82rc9sRYbG7LDW8fyJGCNr1eVgvtckHotJ77FgA2AnZAEJX89ZqGtHtAH5NQJkd8gaRUdJ42oJ",
  "key3": "NjxhRLcvPrzJXzc3XkJapxkoBBEQ9ucLuDuMGpP1mzLwAPTQsPRFidMv8EXweVQrGbcTPi8oh8HzDZyCMVFZTVc",
  "key4": "34K2ghYaty627mMBj65GFJXhfuXiSAopUH4ciWPvviyfLYquTJhVjR5HDoRNPBsKmCLEkALyvXPTQWkaB1J4KnKZ",
  "key5": "2aagwivbetU9dqv5oKKXxEki5PFnspPxVaBLdbnpNJzdNXKxj5jZNFEA7LaNg3ZQhqTESLYwueR3fEQvokjZjkq4",
  "key6": "3F6mE1PqNe7ZNFQzLfVTWpxtmYzhW7T3EUDuTJt21PT9cz88NM2CDXeY1pqZhhxoBT8WJRPqHNNTbht5myBmUQEc",
  "key7": "QQd2SHzhHa8AmMXf582c96CAvg6GTrJ4iQvSaRVvthDEo1SRnpP21LjDn2fXupgaq6H25VFuaen9sRDHGxXngf6",
  "key8": "2Y2YX6hAHfLjWzLkxVdnhmn2MRHHoimRnbF3ZPDinqUWdeCBDAnkmf6Wv3UH9Vu2TBLW9DDRWfartj23DSqYREhW",
  "key9": "2HKhAAArtYDadTAgaygEB3KCn7iLZjMBanwsqH46qgQfYQLb3BQgbfFLMxmTk4fXwujajsBcZcShVqvzZwrFryd8",
  "key10": "udZcUux1zywnHAzyvU3ZFMA6gVmo1q1XShU9EA3otiRHKvN841i41osCmRpAmc81Bahox8BmvneASMtPssjsix3",
  "key11": "4VKMvgchUF778HNTjHVmkTUCQfx2XFym42tnPiqbnH1waVoJYWhaFfDFLNmS1M672G2DdT5HnwXh4akaG7V2y4vy",
  "key12": "5tZDNjccm3bJCTnKBHtUSbsNf77AupR4DaGKSbi3eBmEc9XP6mw1Ex5VR9q9cWY4zUfiFEsEEmjiffci7HfW88wP",
  "key13": "2P8JG7hNpSy8LEQoK5QvgnpttVqPXgD1ypyuHBJwqJcKYgxru8om3LZDxHa5SfHmLL5PWUyxSUVD7BAtCSSv1ivt",
  "key14": "2EP3KrmriC8sLHUxNHf1wkU3rFB47hx72YxXnBxUqV1i2uENe5nLxD3fNmgh7FLYDs5DN6jg5Xj3WM9yYyov8dgu",
  "key15": "5nTVFB8fWrUj7FNpNYfvRGAhMigqywBHddFxgsZKZQ8rv9rAMpTFRnf7xpJRzTq2RgAsLaT2J9vXScmR7A5YFa9y",
  "key16": "2Nihmy78x5NLEfiN7fQgPQxACP4axSgNBzFRRDbtThPzb4dVMDkK3RcLCifr5RwmFMeZuh2JzUbVzSn7tMLFQvUs",
  "key17": "5srVFt3aZddnTLH91sZKU2B8UqFqDo4fLFTSTDkWu1rnKCK8FEnYiwbxD4FM2cxkuBTELSjnWGLKeG7zcbeS1mt9",
  "key18": "4KcmKcwr23s9eXiCepSjSg2dDr9cAcFX15KxVFhRwFEQCKzZjNgzYuZ4kc1gdoghb5sJ5fxwV49saNGwMUQG9Jk1",
  "key19": "CEhFe6oFQFwJzaxMvJCUYcgiHCz6zrB2PcQMGVJkrtnivndNQUKcBMXxeoSE4Ab2Fsa7EQy1cRWqkSNUZgt3aPt",
  "key20": "5MXkVzVnPsuBwYn5yRTxvWcU8eScK69bGk6UMGwMT3Ts3sHRnA5UMSaHZUwEQD92DmpfD5Ui5RKg25KrrJYFXPmB",
  "key21": "47MaSnZ2HNz2auMWU4xabsQ9C8GqP6nCDB6d4Kwx82CHu16PuzEqRsmJ85RymMPZYcXhy2Pd6KczeANoZh8KWa1F",
  "key22": "HsxYfEJviwAAqLou9B4G7mnMX9Ud8JAQKMMT3Goyc7gVVsFSm86pqwtEi2ePf8a72BcBEtw8F8ec9GCqXCGvUjL",
  "key23": "4iMnXsnrngrLGxwuUYbYYzPswbA2SELFb39R1ZVDKcaMGuGiWafYg7ojvWmpc7MUvw6Aak6LihhCnWEBiquNFANi",
  "key24": "2zzAnYDuxvofLQUs3VHJCZo2HkgLAZS19pmqHmrtiv1GSvLNgR4d7gyiztHAGyzvs1ML6TZiEyJkU4x125fPi5Xv",
  "key25": "4T2m8nbjcwMVyWCLVMrxnucrrqLRoRduksx8DGqBdc2MHLvp2pvJD7xQCva7Qrvw7XubJRGnGuTrwWdY3WFtY34b",
  "key26": "5f3yAhzGdctDrGHk3WHuKmFYw4WWPkhLXcsEtUEswNgxNgAYRNssRoqfRCZUtR6DTCPWX4a8YU43k6DtPvqyPyeU",
  "key27": "3tRg2n8PoycJQ326oFSNCgSVK74o6CtgZT5hEhkKdrVUXvsLqUZFeCxumV3Ws9MU3BLMEM9quDoZfMq9A59VWmcj",
  "key28": "Dhft2hsvBT6Vitea4pQC8k18aHH1CZqDmGQx94ak2DMLdhLiFRJpCMigQB5FfupwiYHDRj2kYrXuv59XcsrQZsP",
  "key29": "cwzcxFxYBCxE2TnxbLDWcdcyNSvC5Bmdk8hvVBktBxre4mBeqZmeSV7jhEHFjx6zmYLdEJxZ5gGeidFeFZwfj65",
  "key30": "uZEgSX2S4ZxHGNG6PXDJNk7QwKx1vQk2epsnBvjmGgSyhmjhnqKqFgfvfywks58N3NwDMXDJ3f5Nz4Fy1iftuTN",
  "key31": "5yNbgrKe73odrs7zS7Apw8RQfbAsumvUoa3wHgjbTiB9vpGT8xipRap3CYzfojEvySaJhg1rvtfES16ASBWFabND",
  "key32": "3o7e3ZVvXFCxD8wH6kkzrWX2KqBQabihErrBMgMN7o6gwhaEVRLNtLqJjzN8fXQULkxYvhAap8torPxYNb8ZmsAY",
  "key33": "2VFkWhFZSJiSjCJdEiW6QWUq33Vc85hmV3KNkjyk8eKDTf3iy8PJD11wqL879XpNmPVFNYyqFBrbqSNz5hDFo7DY",
  "key34": "21YERoo4gpBRvKmEz8kwFDrSgvZEELTNY3AXNswXqj1pehQEYHmMmDHvvMLRYhVkc23VfNekQn13exttTJRDUqKS",
  "key35": "AmwJJisKqkWwoUWRmGq6ayCKDpMsFxTdtS6SC2QqMXWRAC4nDZXQVqRx5cZaZHC9jMf8oVLUWzjeR9qsVRfGd7b",
  "key36": "FEWF43YfGCBDv3fojoYpdoVtfGooZG52ZmUnjtrN1G8NyWpnSTssi8rdFpWF4Bk2n7C2YPtXRjBPfVTH61C6777",
  "key37": "3yq7yFrSZgamm2TsGX49VSHTso3P3BGTticdh9h53UTJTZdZArRfGhrPhoNg4EFdNLZnbruafAp39JMQWNQW68oo"
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
