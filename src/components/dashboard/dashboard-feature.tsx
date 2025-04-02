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
    "HxQ5C8isuF5ADpngVudpf9LsEYnRwDvsXLdQ4TXspGnh7i8cHipeGmt6ri9uKDK3dV2Tkow8GSio6i12SJEvTLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mw3AKKkjgGWZAcggQLieMM6WcjhLWFaPWLaD4eM8nXnveJMX4jgMktwSjYU9RCCCeLucMx6JZXaEV9UsHhti4FR",
  "key1": "4NibYR2rKEHLRhsoMiPZZMLhxESpqChP34PGXrewvESQvQTgGKiWM6yxMVzQmBbQxsqAkcGWrY74WzkeWgNUXhYM",
  "key2": "5gdyJqEnxGDKFU976oexP5uw1juxoxCwZSUkCoMinw6R13RqeKugEoQo9LVktRxiKTm8jS6Gw3TRjuGvHhdpyrSo",
  "key3": "5iwVuWADCbSBkjwwLCVV4Hs4ezMPrDujUA9ApKPHniQrUzP3XcSSz3ukoPwuanz7Ta2RjPhbvm7p22cqopRW67H5",
  "key4": "2h4bHLabhEAhghfWZxyUWXV69hj6gEHVDy8KMrPxLBGaYEASJAC1AsaVrrhnLCwTg6NqC3raVMCy4cY3yRykFht",
  "key5": "5hTfT44s1RdHcQvFSYu7Tf5bhjpXKHEMJDp7TzRhQL7FtFGLw6yzXYXs8EqjieHmr6HNckmDVXH67HYLUMiuxxZL",
  "key6": "3YaygcuFD37ivDFLfHTFq35Ud7cec8J8WstWPA4zpZRHBZHmuKzjyiqdbK2Qxb3VeWN421163Jn47DciEHiUKJA4",
  "key7": "2HLuJDyCuJApgazcATjvJUPGHGZRDmF3N8f8Yx8mvw1W1JyCnKruWBtUhk2oM5E9GEAFKyGe5JReskNsuzhTaoT5",
  "key8": "3SpoUurwCpdXxM62YYxUcaLj1inDzqixX8Nx6ta7ERsWtEqsgNaWd9kM2S7ZKNCRsZJLfH1ZAA61sfKjnFww32t3",
  "key9": "4UsRQ62GudEqK3HN5xELF8kL96tqAtEd2S5sGfT7xnzPF3A65985hTnpBhLKL7dxCjv2r5B92Rr67g6uE27esn2n",
  "key10": "625sCnWiq2XNhmKMo3kZfnMyx3zsy2AGhcLqcEQXNpgnjryzhicHj1JwjdxG7moo87fU7Fi8BiKCspAc3W96ykpA",
  "key11": "5u2aSDfjVgQFDSvT1AJKEX2fr1tcMbWjQBiBU4HnmVJmezgWv2TkBiNS1v9rc98g3pm7h4rNzY8Lfmu8vkCe2bYX",
  "key12": "2oNycDZgYEW2C4Vtxm8jDynPW4v8MAkGVyzHY16CwwSyjducSYyZ8C3yv2W1pJ6hBPmEYztsmGkouumkM5J8RGmz",
  "key13": "3bBtoTB3DsRjPC1i7rie4xb8As75VL7b3wKDimGrmkMBwZW9Afo1V7j59pkWYDroGnmHJHNJ6pfGSRK57KoNCAJF",
  "key14": "EdxNuGd7nNUx2utnG7PF9X9a4psyWiSq1XwCsJ3SuPtZXJP37Fzxvw6jpSMQ6rA79BVWLiSXrcKWNFAnpwVttZj",
  "key15": "5qsMUiTH56fXNTzuyQz8rqQwoAmNq9ZteqqdJ3groUukSDF1g7n5FjzRfcnL5CvXm4y3bSWaZMK8XKU4UYWB1cPn",
  "key16": "3KqZnmQyTHsDRsQfXa2oHTbkwNYxx1TtzR2a4VbLwJr1yroD7rFP5BeVfAgLb32X8VqgaBHEYZDeJP5DBtmoJFP1",
  "key17": "5VkZPVLjrqEi2wjs35TeM14oqSx1bCMKrrtqK2WdvZggCLyJCTQb84KF1jvVxCG1bM8oLJAPPUUzDKQyUdFyXmfb",
  "key18": "6qPSDZhVaundxhqq3ct3jKquMspXikgTdwfKPBzC4eZdb6bs4FZifVstsniTFWsQui3J1zadxh4iTXmXhcmJFkp",
  "key19": "3diDTHCx2HAduVzNS3SU8yqpg1GtnKGBeNsEmDeHrELBVjrmsQ1ncWFkAd3ffJf1tghgiHqnqKi4VwpMLkCBqAw3",
  "key20": "2BTaEeFocLqAgfUa3anc6zJRm6UyVecEvmV5kF5AzgquCZ6MRzvUXWYextk9SQsVv2myPh37kXqUKwoM4E3khsFt",
  "key21": "5wKbF889VRK3YjHUyaD85DhNmQw4ceNZRofJYJYiK77sHymisdt5ATbuX9L6EZEVYGBhy36y4LU674u3EfK6nCoV",
  "key22": "SDk6FwQMWzVxjHBofZ2zMynNBgmkvQEsRgYf5MawFnp4MfQEG7fUjbfvJzGbyeetc6iVZwDUeT4YdFP67hMhQs4",
  "key23": "1NnBr1HsNg87VgQ1mKeXpQuzYZCMgYjrvkVgSQRcn6ESCWhkvMgGVPKok8gs3ieGKMYQuSrytdsSDRDAtdRGY94",
  "key24": "Eh2DFvVtYUN45ySFb5KMxJuLCgboFC8gyTARiRfThugDMY4aEHr9DUS2NU4AFuBA1LtnVCGZRkE7eeU4Parjupn",
  "key25": "2Qu9UUfpB6rzmiJizLxqi8MgTRueerqEsq6wyHqQTfQ3LkZZGUjsvc1cW9PgsDmn2v6uF6nB7RButJM4nxASyP5Q",
  "key26": "2yD25ZzJYBhvV62rt3raDGurZGwvfZh2mEhxM3ZmxiYsxvm2jbbRGFfGSb8sLPA2QjKw9x48hK7co63whhUYLfS5",
  "key27": "2XBdfSKXLD57z3CFGAYC2iVhjbdjrAkL8xpHQeLAkhkLn42TGyf7sDsyrXeBeRgHES7UD1ordnHTeYznDjbiP6v",
  "key28": "muuJ7bbGCjm4MaGAE68yWoJgheguGiceKVRktJCkeRoNpznfXCEJ7vf8TVqGRiebW3nbrKZu6P9aU8wktmuq7Qn",
  "key29": "zzXr9NAhFWfuUQgfRJwnUFQPw3gcJ4cVG8WMix7nuEGMhoQYZgfpD4HNHX6s6VoTehAu2DdVnQh7kCnMphuGvH1"
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
