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
    "54Z3KxBuCgTKx8oSjPx2Wp41rjnUX1LNSPdHqr9g7b7UFzWDcJicbsxm5UgEG77BwUGdXbxF4ToRuCZXTYyqwsDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D61rawNcBuwGE4CdVZuwZVPZTxY3HJM1MPKTYV54izSLMGxn79h9aifCGHTh1ggt9qqH4JE42CpQVDckPtmB9nN",
  "key1": "tfgNgyjCbQo5EH1kth4eMbJVGAvQFZMZbGrAvEDSa565xQMxNqM73tfhtHjubuJgKVf5pxFtCsuvjog1ZCFuBws",
  "key2": "Z3P6hv8nFWb4uqCkp7UkKJSRQFMZVN5yhcMZLaaJhHpvo28d1faGt4LZ53YkB3QDtmtZotQXvmRCuWtXCN98Er6",
  "key3": "5ymMd8Y1VawYFUeFAfDEMYSuJQ6xMaza38WcFKtdhZi7R22NeDWC65ah63NGDXMR1Gbzetan582E4Qv82xXw8eqt",
  "key4": "pEEQkY7DCHaeiYkj1F6JPxHc9XsTfmP4ABfuXuQNe9Fs2Un5FmF7eKD59z7X1y5K2Ex8eHHj8tE2Ax9NAXuwoTg",
  "key5": "3hMw2JodXsA8J9GbUHvvKE9kQRSoAELpSTjbAVRhVD96KVYK8DfKQp3m7PdWrRU3qS31YFJdG3AcztTiZf8Tx8in",
  "key6": "2dEyc7cNSnx6cv5mUSzbNpoV6gDgJRXJ7fgLk8Lue3c7zNL5twqPhUGnZFpXv2zE7BraFvXLhWPeBGdt4cZHMU7K",
  "key7": "Rm399xtsVqFhzrWWAZ11D65H4qYDH3NzQ4wpjNiRwbYkFUxBWJt6muC7VUGZmi5A7aQjHDc6g1AgUisSPXyihFN",
  "key8": "5prQvJ2BvnmQEYEfgDrpEt5ksMSXGiUZHtWHLMSKwpCC8AUt6JqmTesuLJ1uLusqCLYtm7avDHfUxFZrV9BeyhUH",
  "key9": "37eQqnGwDKJr2TaQbSHZCcVsC7h52VC1T981B94C37TjMt3JU7xNydpDp961x27kecMGxiNUKXfynKZqosAhLb2",
  "key10": "48bV4e9XzPSJiSRGf2qbCn7b4ByFQe3souBrjccxg6wbbmAvR97Knqdh2fGDDdRm3VBV1y1HTjRb4sf1N2SMRVV1",
  "key11": "3Jn8UkKriLHfx8BgNjcPgmzhpNWMbqi11hjmeqozr1QCy3ea4GBReJ5X9YS4y6RtuabUNu42h2C2aksjmHjWJQSX",
  "key12": "HLcmG2FtvXwcx59471fRkEKTsYXZQBzRW7tYpzP9infgkX2Z4EXLyw4kcKnPVKRbsGi3Rn2hheeA6DF69AUu5Vh",
  "key13": "2qEFM3d2khze3kdmQKGjUqJ6qqWGn7K98rvoQH6q17Rh4w9Z2vTNHRCK8SnG3yR2iCtD3MC21CwVwbn9t5cJHyJV",
  "key14": "4BfgZhnqsmKN15aMphr9hJnsSc2v9JfnfHEcfadUNPqjcJ8NbPRrsV6j3fgvQd5mrurajLesXpKNfm4SbbipCBVm",
  "key15": "4KRP62MBhK6GN6CDw5PLTi5WdtmAH94g33XMMinHzSyABmAyTsH9Ke8fjtF7jbRQ2t6wYkRXrHtGFVsGbz8NSfHF",
  "key16": "2fgkAkmgnuqri6X35zNToNaKrJGf7uZ9QGcXYXfp5P1Uf1Komy84E8AkiaD6VrM5ioeVeTbuSFHaT5KNZNrUeYLK",
  "key17": "4KE2PCCbtGpaFDHzYkVJL11HQbqT1CnXKWkeiCoXtft7ny89SVQyU7aBqZmNrk333eSraZaKMVsSj5Q1mHv1JPZL",
  "key18": "S5fiS2nybbJk4ujn2Q1Jb8Wh34nEggEFvAkzW2GeMxXqbyyfJVzBQohvNTiTR23yFMSCjr2M5KAi8cwfKtW4ryr",
  "key19": "3ajam97RAKsyDmt117MzxfY8cdRHDJ33sFwabx8zfxWbRsWAYn71XTSdaJt5hn1LEV8T1hSSYYnvN5AdccpqKmw7",
  "key20": "3W3qJwWFDWTjGTuZjiZ8Sa8t3RWMmHhozyBZFvfdEEBK2zstVWo1avxEopm9iMqPxPMVzoZHcMGDriL92M4Q6GKz",
  "key21": "2fb3DSb4AVKHgqenvQS6ZC6bfp2yVGk6AfjyhkRCTMKaDuDGcd2Ad2i7qWS1LbK8wA2JnECTTFYxiEZCVvQ2NdBC",
  "key22": "9YsXcsALRxhLTeAkTwz2K3UwN7ZyHup6gDTd2B4S8fswgnGv86BmnYYKFt1Jvno5LjLaXT9qQJWRqDfGz4oQrJr",
  "key23": "tgCk38R1ncZgXSYP8Nxscnw2QcJMhcnUj7WmzXdjyoVf1oCBqbKwKHVFvTrmHLFkjTnza2VSxpxy4Zq8D6XpPPw",
  "key24": "5CCpeuckydTZcx8R6jyx6VtNP6ijS7Ym7ZtFwjxzxG8Tpe3xzHNFDoYSGLM6hy1QC8gNeAaCgnRZoD1wi9D5ZC3W",
  "key25": "4jgGrz4PLKiSvptQCaaXToNCbYBHoLaXWF9Xv7dnF3tGTyyJoEHNSCGb8Zsv8SEBefcY5ZVA1o4WFf48a6xEzRQ6",
  "key26": "3jesTrj2Hc2eu3bBwBd4Lsyk2h2eydqvLARwcwsWTsPinTzzb7TJLnm4Gc4FPmj5xkr3xat4xbPmVNF1XiSRpQwB",
  "key27": "5HZb6nJcaYT1jV71ne4g6o786GL9p63Z6AU1MhDms6ineWVUuiLaJ2gWAnKgUsQhdWn94HF6UdmsjTjiGMJUSVTL",
  "key28": "4L6tBizsiBDAavgN2rHXjZoJEmyTfiakJZnoyKTKXFByDdnJuaJP6k54vD2o2VHyzo7jmg9gj66PEufK2Kqt5BfN",
  "key29": "3hsnJzZuFeUJVpHo99MCegxDdUezqAYYA4ukkBAKTsexvxGDaAhTTCMhhqvSpwjBPxHAgxb7tg5wgTxbezEZPANH",
  "key30": "5phA23fHyPW3ZAmTwfQhQqCAZp9hPrVeta9HVmfZXEw9fHHQER2E6CmeC6nAdJxkZ4CgFJ2aV7gpexrfYMNVtJWG",
  "key31": "5bJd6PKC3QVwxr4kMbReTjtvwoiumZiRvxJqTibPjFzgsjUtxeTXyQUWPT18mAuFFL7PnnryujyEKBWqdrY25zC2",
  "key32": "Rommue8FrM3YVhuH3P7m6NU1FBD37mBThxgg5qnNhFwDx6ETvbBeNdarEZnzWRq45Z8zt9YgZzEgC2DSdrVWyWT",
  "key33": "5CZ9Na2wNPJJ5cmNaHMuUmDd3tYVzTSH5PuRQacv2q3DLCkVt6rHR6oZj1g7juAJhkqfcFoKgVfk3dycBzaUxfCT",
  "key34": "5owuBDKzJsmrfL5zhjf8eTbpNEaqNtC3QHB9DPNtQsJUKkGhu2Y89td5BB8uWG7xhjW6hUrZqPLywJ69GRifGWnq",
  "key35": "JF3NxY9LondDDR1wqxq1sGAhasqLwjKcJws2k7eUuo3aLxCFdph7zCmkqa1Fn2tgHzx12BjqgCEe1kWVgF8jkCL",
  "key36": "4G8ojtA4Pz1E3mm9hQidxvt9miKPCEiFJmFbWXohuBTkP7jWXiv661GQE56GDteozFTK4Fc8pAwNydbFCFfHiVzT",
  "key37": "4EFE2kcm4ssyLTMSofocazM2N7TywTD5hQQGD1ZKYuzLMfgjJqb2wEedXWLfs2rzuXJVjwnvh1hFr4LXArH6GFBD",
  "key38": "5eEMQNxt8qbpaKeZuL3Z8Bsn9vbJ98vCUXmuMdUN3fCU7chjWv2dKhJr7LPXdi2egBRTY7Lor3XB1AbUcCV8kimj",
  "key39": "5wLaKLfxb4iCJpgot8TYcQN5VZAjK17pKztfmf9K65LAXEv2ceJHsE2dSxyZTXyBnykWboyoiLuYzoiJum26WNjQ",
  "key40": "558nYBjNJwhG4zgveMDAzoSDCWsME5B22g1jzTadwMRNgUvTskodJUsQtFR6D56fUQZaNNoSLyPCXPRb3oy65erH"
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
