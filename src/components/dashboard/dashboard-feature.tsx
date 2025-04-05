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
    "caVzwZxYzN5kZzYeVSfF482jvixX2caEbnKSjWAdCvcoc1UsJ6ZKqezn2tzh2uLGZ19ktxscE6C26M94XfZrkc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zhb6kuAPoZZq1U5Tf3TfT9bYYySqBS3MRkuFveLVeZadtoC6GVgYj3xWz2ZyhB4oL3EZf2bjccMvUHGq84UEo6K",
  "key1": "3amjJKUyEaVrq48vy6jtR75dhmDjpuZ1Nhn4qR8B3XnVnVwLd27yZNcmqXyg1cjGZ5iQyaNH8VyVSkQLG2X7CsGH",
  "key2": "5A94owZW7irDFgVDLBKs7VoSuWzPvgVQUT3XTLGVXwmbgLF8Z3yXrGiXqNMGUmG9JSqiPHsWaRUrax13Wg6Cowzk",
  "key3": "gtKF5nszQi27exFifrjyS6BBuMnWKyFDa7AxaK7M4uHvhA47GdixbHRXWJypw7AfkyEjRMDDKWSBM4EW47yJJK8",
  "key4": "4qK2mWwHDy472d4eB4eDLx5kdMW2hVL9L74vaBgDFzbpR6kjpxzhV3VLhVxHZ4vHcj8YrhH8rdAUjkyM9vE7nfRg",
  "key5": "yQqWBHHmaQW22YEHyKLao1jKb7VLktfcu79mWMuxiL2n1JfbkTqkkMzxJC8QxaksxNWPjsEbArHy7CCR8DxQrxz",
  "key6": "2TBAFQyjoc1NN3BYVKrTSCZdjyY4erpgf59mdyV3JgY78ydgtq7UJCiKnpRZBFBVpnNL375NnHa4ZeKVfr4h8r34",
  "key7": "5DTu8LbccyW4Bgzcc6zikambuWX1XfFrRCSEg7UUCdA5K4QQzQWQrtxb8sc3jgmBiZNX7uZvBLNLkk8z1guTzCjZ",
  "key8": "2EHfgEq3ofocTV2LxiPF4xUro2gpFfJac6CfRo7KKB2Krocbh1xDCB86JmR5vxipJ7Z7hjCSxWvNnaRChuzqMGmM",
  "key9": "8Zp7hcbhVuRHFpAJkeP1tkupLsnjV7bsJDRmPbxokiy5Kk3KYdGAz8GD144nxyUkKHeaa6x7besaNyPnm4UQquo",
  "key10": "gxz9JRoVHkMJYfjzzXdp3tETrD57eMrwCP6BWSxitSrBjvY4gN3PUbGKx6BgGsYaayXVVxCJ9qzdVxZ1dFXiioG",
  "key11": "5uX6VjW79oyfnJ5XXUmTT4PYzsshL2cQvrQa3oN5mgKcFoL9aCWEiPL92444xirsziPFKGiXi6BgobdszZ3qvimh",
  "key12": "2Mw2ZtnFSJgKCjygiCGYnBhsFPXVaP2nVVCQkcvfuXN9hhW3EJUdLnvstf2KSfK5msFSN78mvDTs77kFuZbMkf6S",
  "key13": "2sa5hhC1ZPP9gNJyEzaJbW4JqRkVtCENMwhmp2arRiwfMG9E23tinSbhUzz621fsv2Ap7jdpFShwX4QsmLe6hYkx",
  "key14": "jjqmjxjHjYEMKNg25JG1pfGGW5tWGzWHwcLeN5yofaGd9zTLvNcdSXCGWjDDiLx2TbBeuuhHC4Ypy2Z9M53Yb12",
  "key15": "f31f49tj1nweAL74Gz9ZYXK3AEmgJy7oq2JYZBo6Mi9YrADobWwY8T9saaYxeN1KzTgCJtdtYaaH8PisEeFSq3r",
  "key16": "4X3BocCmE1i67qy5bshtt7zhN6wHjyaveoiL2fSGT9p4DiJfdLkGTy9BnXfvAXQhpC3e6UWPBcxkHnNYqe1NjmkC",
  "key17": "2C5cwrXGZWVzdkRehZc16YeyZgANVA1Cr3LtTj1vQvPqqZ5fRjLW1puKE6G9hpWjkvJhxkFGve6YZ1i9456bKDf3",
  "key18": "55f8GrMDCko1dEtUwwEFEjzN9aa7xUziGi9KxBHuuTdbQrx6MX1g9Mexk3wCp3zKzL7yMQTDayfi2vojqFDZnxFE",
  "key19": "5ZnWVELvCa85x2T8xrwHFxrY1hkyF6fHrzR43b3TKUYNZV6s3fRXevjEDWRksZverHtwmFXJdsrNffqsmyeWimyY",
  "key20": "oRNrAShFxP5UJ9ZMu3Tt5SiHC4g9j2PnrLB84nrip4Z7vEQsBFEZ6eGRYCFCwms9bVwtrzxmdvfaabGs1iFZxKJ",
  "key21": "3wmLatUcW95CNiiz6YsCevSPrmag8bnjtY4qgaPxrtBuduT7SAFS2goB3p4EwSUsK5o37WrwKEA7AwZusbBqE5Zr",
  "key22": "gZbManhy2JEVAtLJKdPtEEeoDv3tYqFQNt8pm4cTRmJe7HjQoCrdzdh4w93gDrbNNqBZyt8RepuKrnSt8f4jbrA",
  "key23": "3R7hhh4wP7EbwCut7WP4HmCXY3Sppc9fVbP1VKiFixkW5QkYyQVzeWy6cDiH362aEcGG38xdC39KwZS5qQTt2K4k",
  "key24": "2MLyiphBawRCbPXX5TBQvPuyLXf2ThXXqSJRdoAajD1UVDbDCMSynGsSgvuGKAV2ZMospnGyQuGhMA9mQyVdPYUH",
  "key25": "3vzKJRixWzXXFaDcDCFKW8RX4gB8GFZeubDBkEcLM2fuQJRMCAuV6A2w9qFRsmMzGnZoR9TfXynLGMdukStqZfiG",
  "key26": "5eYioA4JgpXTAgZiUqqgVVyigE5nEwq25v8JUqFqkvSMTBcpu2fGcgpFvcjaEHRvt2GbfykSqigajfsC3SgzGo92",
  "key27": "pHLfwLgLgtZ8Sb22YGCsWewNg7zL1uJV2tSTFZH5wXhXNKYZuutbRjsRGj3fTU5cEg7NUrEDYisvEDu4G89f8Jd",
  "key28": "3ksoGbwcXUY4UyNn8gTMc3Hoxe454bR76L7HCTgc1FKSLcvT7zYQBFdPA3U9jGwTKyJus9JNKvYRaPQL49G4D8hR",
  "key29": "LCYxUoPRPPQrHBK975s5F76Xd1YwLSEF1RbvAVdA3FZbJFKYt18wakK2Gtj1HXnWRouoBrNEPYJhAqgFG8rB5xh",
  "key30": "2GXKRxKfc9D3EzfEa7s2CJCBc5zdo6aSVhBkbS9fu8BmEyCNdC5v3VmgiuZhsAvwkkQYP6udSdAzUR1tbH5L3t5",
  "key31": "2FDaeSxh7bKMGWwBJgCNyVUzFAbcxM7EeqRzLFu7Q6dFHGcBuD4CqX3juZZfiNy6KW1bDZEugMyyHqqZUgC3Af2p",
  "key32": "PjRFK1VA3fNdnqC435ENpWdHEMtr4F8s7WkLqVZAnwqPqvZf4K43hA7tnMtUZy7dpeG3y8pdquchCm2NhZ5ga3V",
  "key33": "52fcZP29BvitDLuVttdfE2xxjgseqnYz872g2Ryy7MeeHCckV2DG7DppFGgPrKjXRYK4t5WeqCmkpVQneH7or4oz",
  "key34": "2g5mTCMUjWW2xrTUPdqL1LB4AZAhVk2dCD687TLJjWaYvJ5tk4UdBH5hpR2o1fQGpfCh7FL6umvHWZu2aZfKYquM",
  "key35": "3hvjufQpxEbpXB5BXmPygEL5ueaDgPP6WkoWsLJ9utxGxEyUREHJT8h5X4zgXupPhAArxDnuEXs8gyvn27CprrW5",
  "key36": "4QFW4brPD7xUKiqR8Qtu6nyxkP24mDyKRGoLJ3RTvRdedfpUTfLFhxSbpxJKxnEHefeuYuJChszXoy7RuGBs7giu",
  "key37": "2HcNcEMj456u4HgiFPsXbPV8Viachqdrhd5e9raCTffca2TrXPzG8nRLRvmzt9datrBX2XBcFkLH8KwCGjrUA9yU"
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
