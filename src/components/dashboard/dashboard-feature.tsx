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
    "3rni1GKRj3W53nKP23RPfgfMGFRZibxDdPKR8YsrVpvj9dhWfkraPhqhCD7N7NfuXxnfLj6pxTPtUz1ExoaK2kXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NK3XhC7MBY7jqMco2PyhiKvTtMdWJTwavfUrahtJAP726zEdaFCsRBtPa4ostyraPgvsqCpKgGLnfYBopYdfEqm",
  "key1": "5KK4KPMd4U3rWECvsEck56nt5sgPFMUjXoyPC6GmvZmndFWTSwqje4TXwnbVKNQPWHwQwg3ayQw8AuFarciSK2jY",
  "key2": "3KBZyxueNXnkDDQBLsJEJqe1vurB56dECZpnsbkmzbsSkgwDBqmxzvXqbKfF7tvpCcPTy6GNBXEdSfzX6NFTMnEf",
  "key3": "2kkCekkMGgLaAZWrzetm4L87jCdfNCQLdVXoth2AGn9WM2Jo3mTscWgxi3kVyooHYd1MNgwx5yWoQzPw8FPrjsxD",
  "key4": "5a29yzNCAbXfZP15RbxDw47U4doYhCWRM46s1ffKXr2pJc4cddvT5BuyRsoBLei6xyGVPSDBN5t3HsiYRhatbbRt",
  "key5": "5Cd1CF6PYcbXCczcM3eCNB7CYUcCA9seEB1D7J3dSka3W3MffUDqgtiiyD63wReXBSBjzQGbLLdKp1cMsJkCg2dF",
  "key6": "4R7jZGPPRzydcfVLjwyG2bcxE2CaC6TbUswVd69xjTGEDuDne7uqiY5WLtXJrBb6ouL4jawqqGwc3BF3yHNkfKTK",
  "key7": "UJ3ThpHXY5k4yPywjBNT1CdVtaoU5EyjMGFkC8DPfHV5b5gEBkoMqinJ296kmxia7CRHHocX5YeuEpLHgMW1wrp",
  "key8": "3yhsVFD44s2r7kqPSd38FYYa8Z4UBqnvJPPQ8B6qbTJqawkhNPHdui9KvTqF5oLXjAnuGmbAur1sGwUhtv1pgQmV",
  "key9": "2pftwKr6BiZ1zrwU5bLpVLh1dekyMzKxy9ug3f4Ann43VtL2HZ2xXSxQaQLgQhZf3A5RcosoqU83PaPWbQM5cuRD",
  "key10": "4NqXPkyb2kPSuTiuAmu9FjVTArDjwP7R2LR1k4qDfeKMe7zC4iDjTF8BPW8ReJaHXMobowwwN5zgvLPimqEqXk7n",
  "key11": "3X7m6ZDCF9zHiAK8eRhTwKGATRe3MKoKXJaNNvPyqypFXQ9aZJVVqfWF7QRmKFPR8r72PCPJzbT1cFCT2t191P4",
  "key12": "5MWdXNUGRoDJS6masH75dmDQtszo8RG92bZsKTN5sbBC6o1KBqm53if9ifqT2dsMHkQScEqubmWy5zfmX2GNMeFk",
  "key13": "3Yk6FshWiu8VGjtYJ7pGk5C7wSC5VeP3DK91WMyB6qpc3n9zB6h2xkje8qz6mBpVBszKQ26GW2ab1ra8qehXV7w4",
  "key14": "2AH2yvFC1bmDUpWqrR2ZthBqgoa5KvvXhTVNy1qepCGPP86cXrSMfYJsXpnbmnYZ732RExMbw4akBbYuitzH7NNQ",
  "key15": "2L1y3MsoFQCRyer4MokmWMcHEuxLnEBZV3KucvV4VSX6x4AtQa6METAt9NZ7guo2H1fQ54thWHWsmuDHoH55DtC3",
  "key16": "4LgMy6bwH7A9cL4XNUJMC5BGWRqxwm3YBRyxkn47GzfcXZbrJ6EgaAENoxKHMjQACfyv1jWpxLKNn2AuwXXFrEFe",
  "key17": "ijkyE5eQjXho3D4NEkPECAG7t4iuYjjuGzD4nQuXQn4N63VDb6wmFFW9uf1SuCoFfA8w2uoR9RsyKiSgXTH8mNm",
  "key18": "34N9et3LiXad88V1MgWxLrjvFhQUeCnpDekxUKKWvY1pCBeZEXnLi8KhTgN69bkdLiWj5WfXJiZicB8NGHRsHi2Y",
  "key19": "4jN8idaBa4DBXDdUmCUtrAuamjq8ST472Jp6QcMCS4AtSyGgDVSAy68dYs6KEmAfcym8feeWKKaDgL3KfHtwuyaF",
  "key20": "mHDgiPqJvVM2fpnXzVEgbMNYsL2sjWVu5RptuMP5cJUBz2hW1qQmo4G9tNdjYYfUoqyN57TTvKUJKdXdrjyrU91",
  "key21": "2xjeKUsmqbFqY3W9Coe6MSnm5dbBEKBxBo1u7AEeaj6d9BcJgmfBoVvgeFj7imPbsxKpR83USUYV6BJjnohBxXww",
  "key22": "4EwPHRYR4veYLcnCzciZxYvqUfNDXGE7sgJ9h4kMH6w1CihSYMDmZZDpXehq8NKy8S5K1238ffqLsFqQAJppeCSW",
  "key23": "5Do16dwwGBKN9ku9eDPVAaYxtMDZhvqHn5qFvBDYA1DrqyRFvtRwi9ywmtvbm7w8ckQHzSWJEYo9tbioixaLR167",
  "key24": "2L3DphfNowXDtn2QhmKwSXpgDnDVzDzYYvCtpGPnHnbG5NkDX17a91xHhoWgz3PLfQYxSyDwErxZdEgziqKoS8sQ",
  "key25": "qMtCViTRCLzFCD8Dzdsfaj4b8x5vVqLtevm7jnS9CY5Tjg86EcwLnUiMrAvsV9WqApztrteqfaPSbQkx4DyjcXo",
  "key26": "2ifFUfiNhXTetwh26RV5qfDfqnfT4o53H71VhC5nTsYkusRSFqxeM1Sxra74NhzpwQEdjcJSffoHpHkxiYWoNhtA",
  "key27": "cerJTwmzU2JpSrPcKpP2hVRvVNZ9nEpXnpTn2TmCWevqBYcyuq4FnbgDpGVdm5pnwLcvzv4fBvZuGpSvJaDbDMs",
  "key28": "2Z5fjhVnJAu3ooPnuUfu7MJ9gUJ6pphJT4dUcqteoNH72mMt8YdY2o6eXxVwxQ4xuo3uf68YyKvwjrzXG71haSjY",
  "key29": "3NwGyNS8tz3VvGMM2oisKMucfbJcqjGLJuyT7vjrG6ZA5mjYPTBm1LXWujfUxetadTaR3vtQimvB1mSbGhH7TJth",
  "key30": "3Qt5kjTSjHPVjR1Ta6wYChRSiZHAttMBCB26rQW5XMZH1i18advHX7u6uNKy7MptKLYi1Q9nyQnWNY2x1zAFX9GW",
  "key31": "ZR3dSCH3GoRDj85d9sNiWRwCoxiMB8DyLLc4MFEUeWhJqyFqR73F18Uop6L7KC7VmfNS7nF7KY9wjdxiC1xzc4H",
  "key32": "3uSahVkvfUYySGXZ5TVq6AwzBqkQK8BrEGLzKun8nzsiih7anTqeBJnmEQh2GPBtmXyBPFbHUFPMWMG1tMQUfdJV",
  "key33": "3FnKQVTPD94QMwS9JNknTnaRZdCTJ1dZR2iG6QTKQQFEyibASfBjW2Tyg2p2PvKGHbD7JLV6euQqpv3jn8H1R3w7",
  "key34": "23ZqMmmYDQVdcZQi4MLPNu1tTrCq2fxkRXMNNZK2e35SF2hp7vdyz4PsByDGDBmL6PH7CMMT9oRaAgZycXwqLzad",
  "key35": "di653fQXdWPAw59XctB5jiZZR8y5v7zEk3GsjJV55vbi4VQxzmKW6wHe8LoZRuA6EZrcqp7Sn32vmqxrnKK2vnC",
  "key36": "4Xin44jLbZig8GrLCx8D4hWJZvxEfcgdS8wQzCorjmc1vYpXHfaqPArzS5B32BMRmHDZViAiuA5ob6zyZPzdxFpn",
  "key37": "48r8HQJ7CoigWYoaZdzZGrHriHtEzg2CAtFgEAT5EiSdkxqTsrV5btD1R3ezHAf2JcHDoRXUCVFKEWyEfpBi7pfo",
  "key38": "5VU6BX3RWBvP5fsp5UG3GY6DRdrNUEk65nrPMpKbxRQZ6wbApoTohHkUSTS6YSfgTbjPLgKGW1CJBrBmQgcoun47"
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
