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
    "4wu9XsK36oKaNWgvKN7ZMgPWzs3scwdv3syiKtksqfWQ6m8Ytis3VoMn5QhTCLPi29s7Xc95tQA1k2BvqqMsPjNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sihZ8fyGgNdvPJXRqYMAHJJ2o5Rrsz7YnRH2pDN1W3kaY5uqoKEmotZtMe65nT5wwkctXt6h2wKGTESui2Pv22g",
  "key1": "3QBV6DCa5LC2ALvxM3U5V1CPaNv9FkjZ81nzpy9vTAow3gYsWCtGUGooLdp41bwyjL9vhoeevtDdCjANB33Gxmf4",
  "key2": "6YaHqq8Q5upPUbGfAsrDESfj5w1gGbGTL9SpxVT465Cp34WkWSdbSLVVHg2tD39TZNvMRoAcz8gLCYoJsJg2VN6",
  "key3": "8tzzr5rAcUAavGHqpXL2YgjQHmXNxnBEjsTiauKo5yMeMLiut6DVQfPu9o4GoEM8wNcak6zEQqNebHnFN1KgTV5",
  "key4": "5pyp4E5FVjc7vs3ExmQmCzgRDQjquhgz4U7ewRWyfyUSTn2gTH8GkeRwzr8qkUS5TY5KNMj2dN8mqpr8ASQC25Gr",
  "key5": "3FgF78JCmnqWHhFXh1RsKD3nAwNWMDWTNr6XYHqqCbytv5eXwrWUmp5GeKJWxSS5MGD9S7u4VkvMZhkpMnf5gwFE",
  "key6": "4izt3jQ6ZpvxtUXypcvUK72LK4WGpGnSDjzT8frFFACdAKCUg5Qtw8VRaTejkLUyRtjKmUn6VdXJcArLUyKXokbY",
  "key7": "433g6itgUFpd8kbsS97ovFnenokr4ptzQMrU6F9MGrcdvzAFXULBf7jYaPEXmuy38ZvDBtEbanEXTLwBnmFCp8BT",
  "key8": "2AjCXerB5w5csrNaYHm59JqLz7ngwC5msPPaxUFT7fCUsPHTQqmf45cM9dU4b7VEbWLmmLgKwc8bJzvEffNW3ErE",
  "key9": "C2RmNe61XnXLtM68Z2CJBwv8TSMi87xCPd921SQCagF2q73Lqk3L9aob2zwT3vnEASeMwUxoq1jYhefzjjRkomD",
  "key10": "5yHjQzhwcuB1QtcHU51gBG9N9YHpJgbz9bD5BymosjYfF4d7YajeLZN6tZSo5TBgPnm1BVm6T9ADvPSQ2AFmv8ZS",
  "key11": "4EQhRR4EfUARxx3GbueMNhiREPuR5aZX7c2FJ4Zban1kuFUGQ5YirP8rJxm1h8qGTpbktx4yzVqk1qsZEoA888t5",
  "key12": "4VYfhhieVzXS5boN1U1kcHhY34W2nHmRhHFDzxUZmrzeypaLRRjjoRzvV6jZcWYebuCDuP8Szi8A3VZPPJjZKgVS",
  "key13": "oue2YmSwLFxFuoVXd38FB9L5PxUmg8SX33CDsbV298Zu1cfSdWWTCVgwc1Eh4E43DUfGTSci5dX2mYh4una5czT",
  "key14": "G8G4yp82kFUJW95MQof9vLJXJfEAbPdb5dEELjjJRgN3VE7btb8eJrjj2UwY3h58Q2L77q3Sims8mDU7nwmToqV",
  "key15": "2FyVWdXQDQsMkRFPjehwo2B557D2EVN9DUqJUCM1FFAUVdEtuzeoED8i7GUx2er1nDPnCRwRtaxsLbM1zXDK7MRp",
  "key16": "65ZkMxX19rfweL1rKpMyp68fUm2cytoGj3cxK7skXjvdLuwynHqvVQRg4BPKZofjKqCNDJwuhkh8yLtYRuu6JHxD",
  "key17": "e3iqunoLMuUscxCGGLG21NdUYYHx5XhV8jUEFmJoJHDcs2SJ2mh27jkGbxiKvLECnvsQn9h6U31aTVDhktJaX7r",
  "key18": "64bHaaDTLF9SNtjimsJWoTKRBEMHQz3y7HZgiSFT8KrRiG9B2KALEKEdLv91ixaTpHTNXs4V3MaPdHCsWTRsX5LY",
  "key19": "FKaBHtBwgkyAM7iyyuh8JGsh5M9WXLSpQcFKYJq921Kz2fLN9mtNtDXi1NGvD23Ybni8aSFVWCt9jPdNgBi4bed",
  "key20": "4W6asDm33gFnvG8DzahE7U9BJPrEykQWnJ7gyRfMuaeySZekmSAuqxGdeUBrrRVDey2Rcd14k3B3i8AfReUGihSQ",
  "key21": "5qm8sFHGRzWoF9orXZkW4gTzdBki8WC8jAmjDRE4oCNkYTgW81v2DXYQKiUzM5yL9jU5F1oueYvr4qV4zFnQwotm",
  "key22": "2EL2sZrNg6AxqFUY3b5YHF7SYw9fdypxv7TyDjFzqMC6ihY2CfLtczHxq3Ne9CHwApeNrBHm9SsjMUo4kRJQpV5m",
  "key23": "DHto6z3dkWeHgo4pguDTCrQ2ZJdxVo8m4hRodKiE3MdCPx3uZxu7NjNG2mFzUdSRvzBQDSoqqQPfhKkdxvyiPZY",
  "key24": "4NeCeW6BwPV1LxnQjs3t1vuBXxrmrrR3Fw9XW8jHeBEJFGU8EL6kwjBKdoHe3SBaXKFsg65Q8K3n8BDWG3s51ndy",
  "key25": "2UgJCgwot6Ug5cEGJSoJUEcD2gUTF7EcvEYpMei7pQiTX4b4pQSeB2tQT4H6vnrGmBuEEDShuEAkcb5agkXiuqoX",
  "key26": "2CrcBNALUjnkDoQPfafXsVkQ2QTnRzPj3DTzr4JCueHyvfyeSEowqPnmfF8gkiWvdBSHNvR7VcRvFvq8BqSLu3L1",
  "key27": "3uciieFxBhhUtpaDQYW3SSWDMudMG6ysA1p6at2rfqoWYBGGEmND3m4bBXWwR1nxNRy6ASBCg5acfE7PHTbgjak2",
  "key28": "AnPpyzGToUz2baiksQ6ZsJNxGQeytrKNmZXszA7XRMufcvr84kSmEm2MUNLgke5UzpZ6sm8ydBSgJJ74S4pMuqt",
  "key29": "59j1EZw64CXZivHKEjgmBnNmceS1CFxmuoGR5wCUo3mNwKcjdu66ZxJjcyTYMiZGTTzdJ2pNkkaZFE9vax7pyg3i",
  "key30": "AgNPQniexjKpaUmmTT8DcQB5pBCDNWQEumFP869PmxhBZDJvY7FiuG2zDmKaWDowDK5Asd8tM8FSNk7KVr1pZ9t",
  "key31": "267XFVJmtXJPSVmT8A9Uq6XNNEHdkCP9ELBFwxTaRrejyVxSCs2gHTA81XKVYXGkB7LFjs13oo6y1rp4iJdnheYm",
  "key32": "FpcKPfWuCVmdiJkvaPBbPgBQuLNRd2DD4xRYxv5pJiSZb3LJm6xMkuLjyzMgb5dhgyT9uftvHNPePEydDx32x2f",
  "key33": "35LXU4ZcLQ14sb7V5TFqLuzcRAYNXVLrhfo2VpMP3uLQSiyzhd3DSongMf3zd7qkiAtebtGXLQTsUmrWdjirrVwX",
  "key34": "5hm8Yc1ZfUdgYnHEZNixa1dDUgaM2Xw93dgsvrJLU3aLtAS1s1oDtEMoPEZ1SAzn9LCR2Y61z3UYSKQeT2nW4faC",
  "key35": "2SDXmiKoT6kh7Z9pgzXjTM2mHVX2HNcnCh7CbbyddH2cuTGUDRUmdSAgX7s8mpFarQUQmCzfDfZWKd5SwqUaLcNF"
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
