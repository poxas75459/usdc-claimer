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
    "2PMB1mojAHTcvjyWdY7HdPyxVihNVtiEi4fB9Gq8QAq7gAqE5HTLWpzQtQNZE97qv58zhuBoiBnEUSiYLJSfAFNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MomgLEyD7iih6bCPonKBTcuKwvcrmDNBpGhMMK3P4b5PN95FQdZEAKBzTnrojDsnmwVpEPoBQ8zm7ztFNjSa3Ed",
  "key1": "3VYyo43Tyf1LqQKy2BwNQEx2NxBZkgECAFYsQ7Yz3Yq7zq3WkGko6ENR19yq4jkx2r81CF2nTYepoQEHjy4R1HrD",
  "key2": "5pCjgEzYxytccrwygEYWMqrqui3TP17zzXJNf7P97w8rtsvE7C66G8xLQjLkjScybQ8t5D36pJRUbqEM4bJg2UfY",
  "key3": "3Ss7uGEoQenBD7fUwUBhUby6M5VVhd2FBQsGT81kQDD5a99umbxmzZvuHr7meVFAnZKcYSs12CiBMUp8mWLMP8DR",
  "key4": "4p2HCTvGTf2PBUnFMSaamH7WF8mXtt53voVwgxwXfCAhLWBCypoRrratxGMQCj88AKSQGZMnWkAa186C2dZRAbpx",
  "key5": "SDYkzJ6Cwi4WRbWLc1xoVdZrrvMtAg2yCKA7PzFTjbmVMFSQ6askZU2WR2e8MGwSPEtyea9CohYZVzzpyYsamz8",
  "key6": "SszfLkBCqc769PNmdfYDCLxSYnpEFNwPai7hD8233nTWfkvvDyPVD915YN8oux5UNuWzvNwUMgbSXZoJUqPtHgw",
  "key7": "4VbfZSXK2bqFv5rhjwiZuKeSmzd6xF733QtDng5eBZ8XWMoPxibsHmetx3o4NErVaMgShiBF3qDV2Xug4UySzuTa",
  "key8": "icXZHwUdFouvZ24SdaSpofnFrXH4QrQUyw9oJezNygF6G3GcAFB4mUYjVPwN9uCRZDrbrsafqGu3a2JPKWd7SVB",
  "key9": "3F5MzSMVs6V4xDkmdDYYoEaVhktFPvf3taQtTdpwPCKt8YuZzneEFWEcR4hanV2zWgsfxvmBd26q4sWTfPWu4evy",
  "key10": "z5uJcBS5B8ZWMGPVWpNfa6sP8L3TERdPcoZbrsBLT1JPLEyqFArpmAq7nYtbnRPRxdSmoMZ3NZ6mbjqDEbFrZv2",
  "key11": "5ftnif1DR6yjN2ocZkTKGC31PfgPw17DXg4CXEhcZkrwwd3hzM3WkpZVgPYd3Ac6nm3RMhi8RcZ83QUCEbGcun2g",
  "key12": "4fBDFF2r4CSWJkLpifZGJAhEy1kYmLGP2VzBEtnAehJSCj6E5HYjM5gWQzNTJNdxgLkBCyhXe6tgGuRyn9efk2Qr",
  "key13": "jWEABrvihqYopd9brPB18Sz9Xa5BFHYQ5t1spqYBr4vHbyo81T2YnUWz5UHcjSCJdg7ygetfmkQhNQuhnVEgjKH",
  "key14": "4mcZaQVVh47LJswq7jif2AEY8qEUFzQqJpDHdc5yQRLL7y6ZPZ1tUCRKuUy2oEUjASXfkfZmrDGr7Fbca5cThjHX",
  "key15": "4Ao5oyw7Ck8vcukyzzrL4a5XYQiL7iWvWh4iRhzURTeqePaneDS3r74oB9dfGNR5v4BdtWEG3bC8AV12EKvi5oCN",
  "key16": "u8FbPc4n3XwkQb8W3o3gh6Bt7Q1KEdeedjCfpPsmrpxGfkCQSBYeWHK7samn2aWAHPb2znZjTyBdMrQz8bEfagQ",
  "key17": "gUWZ6up527t2zyraLsNtJ6jA14jdE6Gyt5YyBu9QGABBNXhyk16v4cZpSEXKYGnVb1t81VQZKcFUk8HbNVkBMyf",
  "key18": "3zrHuWnAhQgqAkpVn6ZVvUw4iJ1aWgzo2Rzmsy73pEvjnTecUUxwifUgNLRMXLVLRHhiMotqpe2BrzcDgGDN7njx",
  "key19": "4fS6GdAAUy26AfZa1SofBD9rcguxfKoGHC9cfoZCEjE4HfUBCkJRotKZTU52CTA12XJxt25MhZgdKFWsW5huhqNt",
  "key20": "4MouAzCzTwsyFG7gw6ry2mEZmWBWFYtyjYc2cXWB11BP32SB21WwvNAczxwksQK3EsRrDuuBsEudgLJkfSSkVbNQ",
  "key21": "9fU9X5JnyQqx3LSeDfzEBMw6Wbmkoga8tXjHMyEGaze2Sh6gw2HGs4HxZXVsac8MWcdALXyueP6RNRnrvcJZBz3",
  "key22": "w7Xx6Dmg12Mgx99FfLz6TG8FoKRTYTAVmZwRNNViRaGdwYHB8qbH1gEdKHwhFzk3iFRu7EqpScsRBkSSCRztarS",
  "key23": "4PDBqKtLJ5yX9CGVfvLhT6Siw4NYRbFYH5ivUnGoxLBUgcChhh9MFKXgCPwjNuuCXVk5JBfxkTF3TYRa3633CU5T",
  "key24": "3rZtLxnmJj27w978WKoKpo1wNXzq8NwcEqNiUFtZFT3bWkCVaFGdSek8dywPeuhpR32JStoj8rWRqAVzhd3YbyXB",
  "key25": "5X5jFpenpj8M47UWL6ADeiBkEZ2PvjBJNmQsg8fNtoLWTMfC2mmTe8LQ8Z6WcfguQRkWUcp2nYF32snMoFdYDmav",
  "key26": "2XZocdvA99bTiEE6kcazWLXVaqDkSJZAeXSYXtLRJP5Ku2A9nnb3vh5aVW4Wkvy6qybVbfbQiPHxBhfemjF8mkaS"
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
