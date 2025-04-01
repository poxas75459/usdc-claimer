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
    "5dDDfhhyrBqLYUshMCZ2MVF8iokVFCJEMyA6KFnYYteg1yDM5E6NsyUQR6mQoMUzALd25agesKzpPtFWkUUMoyi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Gb81N4QVQGAvaWZCwxeE7g8VCscWUx57aBhJS9iWRtJdp8h9CyNN5tr8ytHQyMP5iK2UgJWEzeaCkfhY44SuoL",
  "key1": "4xBJqBES3HdGJrBNFPp37JMDadLJ4JVUsuB1VZSuCHme5yPaqs8sumD3ZqF985arckGZrV4ArSiCSo4DxhdKM3Kg",
  "key2": "5QBxoMrKnDETLt1BrsLWzR5WfxfwcKnWshc2mKbipLJLDgZZ6nYjxMExcong2cUrABtGcZMnsXHFLnoaiizEUucX",
  "key3": "2TvX6KxkFCqjKhABxGxCdKHhKz47CfJ8N2Mp8hbY2qkPbwg9yCRh9CShb8eVhkrhKHHqpMfbrR6b2KJ8ouypJ78D",
  "key4": "4EeTs4NPXsq8uJKLVtF4iBadwKdkFfcjrFhgThSfVu8QFWwafY9YDUVVK5gykzshHBt17cdf6hwy6ZkZfMU7xgh9",
  "key5": "4rSuJc3pirVeviYXjVe74PSSL1ZUXMGpuYzDVuUSnLnWwG9xbGQYACmNg4nUYCSJqmrXc1yyn9aya75MJmtR2kXN",
  "key6": "4vNyNLkFbcAexaUu6t5BseCLwHmDU41qDrPo7isz1hANEGEzUQbd2AEjawk8KNmF3Jn9C9VCMHZ6QwFsW7mM8TzK",
  "key7": "5Ju8KwrBUAjecdaMNEkS4Rh9hCiPVEcgrWQXf9EASKMhvTpD9nNoH1B5d3GLMMD3v3Drtb1Tmg25tXyEfSvM2WSu",
  "key8": "cXg9THSRVNQWVF7PSmZGG9NxokzTQw6yCM4xhNsAj5dhSP3Kx26Ro1ydKefPxxfyi1MfRoCSUmR1H7p1DNiHJvC",
  "key9": "4H1NDDM9dt8UXdiUrv71T4GBz4cvn2CDa5hqa4fyr6eYSFsneaGgsGmrHYyCU5ySj5vo2ZmU1JH2UK7bqfqW2NdU",
  "key10": "46v9sj7KnP2s9FhzaNeZ67YbG3SkJVk2EVKEarVD9EqFfqAFozBvq24tSkFxkAabEpiQEUCUNLBCxiMiQPhXKa9i",
  "key11": "3um3rAgbiJZeuniQigvDqLwrt6KDQmmDkdb4avRjoAc5jaYi1EGa4bWQ5GbWM6gPwxb8yB6K3h1ayN6bfWrPe6MR",
  "key12": "ewsRH76oWFjCAHALF4Z2jqoDUWkAAtcY1RPjKPyUZ1DEDStk4XdJb3fFk6gKo7qAs94agdivfzmUa1YuoQPwzZT",
  "key13": "59XB5Wm4U4TvfGBzN1rNRMVQKihRVM5VsMq7ZSK9KMF5QmGhSCrR5qXGo3GUKfaqu63eU6EJcQHArPXmGHL9XNg",
  "key14": "28fDkjppeLdziGj1YTM7ScTpRUgg1HZVyc9BPEeHZJ8e5weEwUU68SMv5Zf6YBdEUX3YeEnUxwAK2YVSyAGSpbq6",
  "key15": "4NGapcFtmk1e9CVjN7HnMNbsurm5hZWbX8mMXTeUmvLBG4MwmTdnXxRfoKtgpRRbVS3W4dNqJEc9WkmTNtfPJJBg",
  "key16": "mTMSi7EmK866eFHxghoHHkviXtLgLky4innstbvdJJi5GuL3q95LBPr9eCvNZU2C8ndvXvTta37robdCHUCJkbF",
  "key17": "454FRzK7PTbdAP6T8EnUpM5bxQZBZvhGg2k2RUQspVSmUzVTMWw42kATW9JZnNDqqmwbCn4JGV8q91d8MR4jpBGW",
  "key18": "bqYb4NJhzdoH8psDNPNw5Zym7mzs5aATRiYXadehpH2jobNJQfL3RsTV1L8yypfceT5xopU7M5nvZ3MtudpPKGd",
  "key19": "2viqPFTrSi35SAy7xqa2fAGMCVNybFq4cUx6PRyoRki3tumEskZeUkSDvKohK61FE78EqS4ZEkkeDtDj6nqQAmYU",
  "key20": "2rrqPx9YJiqPbvM8Gi9KKTUAzHwnQjPwsLmSkEihVV7XJkkw2diwbNdSjvWGXa5hGpqrFwhUSf4qbwghwa3gEETs",
  "key21": "4zRaL4D7tN3mEorJJhd8KCTptYW5GuahufGX4xxWd9BydvYmQWLGk2BBpV7QpLLzgyykfzBa9NxsLYQhkzgW5z9G",
  "key22": "RMfTGmBPSKb9YpiRjtLoevYdY3S6bQzttKMrfjjcrEnXzZBfB57H8b7SFxNtgGJuiES1GnAfwiPKk6Br76T9SPs",
  "key23": "bGWjk5g11BMg2JQxq2n88FUkkVtVevuNHUUwLhhTGEjjyVUhA6VGQeHVKmh39LmQDJJCFGxskVZrQYJvzYWHnjJ",
  "key24": "3oGsuEQnuyhB24ce3BdWJZxmSTJyuPCsyEFf18tRh4ntKgMhFgrKfKpHbn78Anfj2Yc2hvPi17JMyUzSKwMfVEXe",
  "key25": "4RBCsb4h9uLUZ1FdBTp57tBGLEdepxLZvaARc9Wm9U4Ub32JDZCtVNUdrn9ab2smbJBG22LT5ePEvwid2onUPtzh",
  "key26": "2KvUnbR2oaEqGGMYUHS78w26ZeyhVZEPbVSdMW5YaxoUBbDkZfK7urYrAGGzdF27jwT5BZBmppFFKDXWUbPyAh8y",
  "key27": "2ngeWMghapaFDRW1NXXRdQYWtwLX4vMoahr3g7GWV3rm51RJtwQe7fYZj8rAnE3FsmHS2EhW3yMHe9d2df9s1SLQ",
  "key28": "3bbQ3Mv5nnAMut3mUQhRjZNd8zUsTrvUoayp2b7WgrBotv3fRWdJHD8dgwCqSqhmhboDjue7XW1rWGSsShb55gWW",
  "key29": "2eC4DnUTGbmAFmT2TrnSmnPQCtuFSavXz79h9xj6w152uKvSwVi2oMaA4EVzPvoyZLUvRF9RooiGkrSZro8AveNM",
  "key30": "2z9Rq7kn4tLiBFb2LuoibGAcEtraHz78w1ksjM675nK6FDS4ZDz1ebPTHM7u8d8aF5SBnWLgiuDw7uofZZsZvX8E",
  "key31": "2ukbVEepFhq5kGgMdvSG4VRwxKsgddWqygSehWEwdLW3FQZFCa9MehDGuNYtfYY8xfihsDNEaSmAutoXDkm9zws",
  "key32": "4KJPRy1Emc8gXL78bzxRsNoCxoAPcWPzbQTvKBBcu9V3tdfRb78Kevd9j5MUQP4Au1jcNSvmEwNVKDergmV1Xgr4",
  "key33": "43d4rZhr7YNuKGXujqebuFLCnf4Ca39ABSSa939qD8bqESdfWgyBCVEGc4LqjMq5zUSUfH4ujFfqK4CfJD25ABrf",
  "key34": "2CuzEwLFYeCmvAbh8T63vYiu5ov1ey36KyVfDZGTjigHqHTcxz9BkbjT27BsGu2W723L5UQWjndps227tqeh8jxd",
  "key35": "QdQra36gojpn9WSuewzoXjLXSFpHZgohRrrHzs5h1rRaBwixi1ogjJAdqmKFqUgf2c1tinz3gGwhdVLtK26vUZm",
  "key36": "21eiBkUh2CPXwz35kDR5Uk2ZAja9fqji3Hz7tyaPbt4bjMvQaXGD5FKEQCkmdiAjwnf7niptFudqDoMnxEmjDkDG",
  "key37": "58L3TtdinHckK3BRCT2mv6dBx74R4oE4Ne3xQS72AtGqU4yzBsCjcXHfX2WoZVzsjD71HTp1nouE2DJrCADc8kS"
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
