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
    "WWyAbyUPmAzyouU12awp5XPM9Z3vuQ9HZuV38rj5kUWhTP8YQcSuxTqfnWvPJ5m9R67RgvuWr7GZXk5BP1p4WdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z11cBgpnRFoGV8hbrN68ongDe1zWtLQ7tTdxfjthAyF8yHjvUfsUbkYms4V1q3stcuCAXjZRntmgVZWRbbZtLkR",
  "key1": "4jkGQNYSKopYzxTpMeToYw5j7ypupzeuBhnJ4T7YehGJCeh2rmrt1jdHjfAhwHcyChwemsJwQbzTza7xmb6tJctk",
  "key2": "5opiKcyKDk2MYGx4usqFyQz3Fjn2oaZ8XSuTjsmZpzpdwCU8F12rwnHf3c5syQT8SpVjBkhkUbQzdFSJdbyM6WW8",
  "key3": "3A2KbxDgqztXaZwZvngym5qh6Smp2m2qESHvuoJCxDnWtwCid9dxckFVqAkC6kyWE7NRTSRukCUczq78sZUWMDsM",
  "key4": "55uNdHH4ZvaSerR92nAC3dM6mjjcGksVtZF6AEUCtndhxz7HqJBS61qXcTSLoc83tG35CrrybbaQD9kpiJcFuTux",
  "key5": "5ftWjRhnrFzDZiKNNaXzhD4oPvF1Hwa5omQjrZWsSVnHZCie9T5aJZ1VvVw6piytdcymArsCMo6CfQYEFRXYCCsE",
  "key6": "5AtNBwxghZGty2po29EsPD8uvhZ8yei1bcfB5pnzd81GwyBxYWPsD4kKFKtKYzwwuz3NgTmR3nY4vyKTKHDM8Vbj",
  "key7": "62sKHp6XAySzXe1TcFfrpKwhiLE8J9BJNzM5wRc9Yduai6C65GAyjWEAWQRLwTydaYMkco47fVMxhQAUb4FgLJ2A",
  "key8": "3xPVBQsBFCgNNnotNmfDBHoCkz9gLrSpZsT7vLio8EdQj9LLPmNAqCdQK9G1T5PbYCwZxG9YSAVMJeWPHyXLaNEZ",
  "key9": "5mCeFKUcNCih9243uDNbkoCfR5o2FriktZqVwZFRh6LNxGd4VKe22L2aPtN6kP4A6QKqoJPBTwNubHiLPF5bYknY",
  "key10": "Lgy5veDRwLUy1JoNnztEGBNVw6nzpwVQ8eA3xfMU4doDYXhDsR6Bo9GKBDisUNqUDVxV1onfaLQYCMRWHkvGZEz",
  "key11": "2zL4eADZhdSBm915r7C5MHaWvwwLnbrC1wkT6uLeszDwXihCmzYPqonzfE3FJoMHN9mDmGEMxMC2NhpCJF6tKDrZ",
  "key12": "3V2LnKpkpDr2sgawLFoKRx8dTWvo3EBuLX5WQY5CZGqL7MhyWfSPJHSYCgQLSZtZf1Lfa3RZEgLxWo2uV6mkRSV4",
  "key13": "5UHMzpiP2zNFw8zXsvheDAcDMutd9b1cUnxWN8mrygZKgWMHft1ft4CC2jD53eSyQaiaXxHPAeTVNyRhx18uaBcY",
  "key14": "2BXGKZ6q6LUPAZiScgG1dNR7TyQi9AJsxpGHf8qf1Xzhv7ecCEincSBpSx1iwibFexaJRz9zGsApoRbfNudfhdEr",
  "key15": "15KQ8MTAg2uFGTBv8yzTWN2aWNZ3Gx44iAnamr4ArEnhPPPYkqKE74DvA8v9T2WwGbqTfzLUFw4c5agLHhcoQxi",
  "key16": "2xK2Yk5fMSN1xG4vuRkttw5CLCgXvmYWX4aDCjV1HmLPWR2mEJrJEHLLY1pKA7khM9235Z7tJJmSbayadiGNcSyL",
  "key17": "2ZKMQdfJvP1DDMrbtS3atSjVZSGDc6FLnMxi5rbhN3qAzVjmr6W3Vj7yR6WTXnvD44hmjxPDRyeoi9PYVSkswGBS",
  "key18": "5TSxgncgnX6qsWDW3Wik9w9dZFN42T37yz8qFBhM19THa8DeXVk8bWsW9RhXgjYzwC5KgfoadWySrXCSzgJWoZyc",
  "key19": "zmjG18ZA4SdMs25R33xGSNgsfbsgCowt8j3gWUVXWtTEBKgHfNchZZcfjHipLfgu3Rfwu6WBRMAFdJpSHLBbLH6",
  "key20": "4ZTKaa7t1hn5yjPux99UfmKyG3sAavpYYvHZGjgBfX9EGyPuXLdDkYZQfU4HfvKvt4f1KQd2CBoc2xEbYpvWVE3N",
  "key21": "3Vr65pUBbxwCdPV4Z36xLa9Huqv45JLFQbZu3VJeCTj5YEP4hj4HtC4kBHCbT5c8VhAiy428mhUFXmKWRMBDPtYg",
  "key22": "3uj84eXebigJ9ELUcpJkLXuQbJXQqBhg3d2bd3iM7YeW33hLKUiLodMhJbaC5suvataGJEWGqwpanof3VHTajuWe",
  "key23": "2W6mAy1kjTMGvqyYR7wi6jwn2PdNAXV8oZhkn815LdJJgTqQ8SRRAvVzEPvqXMKW48SeoapKjQ6XnLi1bHiSCsQk",
  "key24": "Fvyi21EvNYtuXTeiXpjxVZBVVD1EaKn5L9igmrUrdZKhLH7LFmKS8SKVfobF6KrVuAi9Q3B86QKFTAwmrYH4bLw",
  "key25": "4mqbgiD6vr4Gzd8J7ZEdJgsmg8ntVnfWf9997YSX85rvFTUyBzB1CFYrrhZHZWfdXKwdxLtsuVTWdhG64bZM9grC",
  "key26": "4zfdmwLRDP7zw9bog2RtTmudyvi8SwR6J4xP61LwemsHsL16Sn9c3hYpbBKzkeNWe3W3P2kdHdTeNvaqRCdNMzCV",
  "key27": "EuaguzVX2BjAbLLAgakF3gVMcnDtJJjH8LXePbe4vtYxwD883UtDh79DhaecDN9xWpogE4K3Pw9J2gu6ipncmzr",
  "key28": "rF3Pcr9Sk5BVCNsJs338DvzHzHnm8ssbDNKmnFhpFFRgpgsVM7MaiaCrGEaDm5tVwkJcjFyVUutmVMAnMMFK2m6",
  "key29": "4A495XkrfaqtewZ4sLGjLLyxYNA7tZJEJ43vdqCtEEErHBKCvywwLJK65654T8y3xeSaXHdunNw33Md61razgWed",
  "key30": "4YZk1t6ooZYi6FUyFxnMyLbctMe5tov8bmTiU7UscFRnPoTj1FuGxSyfvWk5UTCKWXQH9co4zJhyG5Z9V9oedLhw",
  "key31": "42xMV5NbZnEqg6mxmfFStj5jNqeQ1WPcu8iBydxvQrZaT9ePkroBptzfFT5GWeA7gaHGerSzS9SHDExDFK3ncjoS",
  "key32": "3L3p3Yw2jkwPKQXhvuHEHMJwh7nhFbSNcZWTAiM9FhSnyANsijqjVwLVbaRynk1oyFjj5F15YymBSbZfoLQGJRdS",
  "key33": "5mPHcibKkuATbiwHBpybzJqyGVRMSAncGuFCgy7WJnso7FdWSPKy3DFCbSiqPyaDKpxtBBwAaeeSCvWY1VfWPu6a",
  "key34": "4dhEiMTGFCz2QUDKmwMMpAEEeRCpqV8gxzGX9wiHmmNCEsSnbCxmQ2iM886BP8k1cXvtT2akwyqhV4rwLFcR6RRa",
  "key35": "GaLnY2s4DXLT2vGPHfPBunmgNYrBfkFYnbSSBt77HBc4v5ouSUcugKAQkVDfUB6zgQQ2pzsj1jzYLwfCLPzvvrg",
  "key36": "4BXeXj1eZ1rNzCGdeZv7TG6KPCn5fQUC4etE3CUuL3UvneVkKBH96VxsdU3B54KGuWQ2p98pXyQvuNzCZ1imLd7w",
  "key37": "627F6z4CeESUGr9KXu8EdX6XEi7x6XCqQG4GtpjKhcuNrmnGAVYKjswsNbEtDx3xFkBTePwPtvKYGyz3W2DH71bY",
  "key38": "53C6c1zPy9gDGRTB9TAMySzPuGPxC3eBh73HWfudLNZYofZZArYqWLivB1XePMqUY6dKAXLwmwXTFPj8FuNE9VUJ",
  "key39": "5jpmki35UYrjiaeoVpiRzcXcf9fu9HDjxwnc4mswkKgmoDCwmxtQe7Tc4bnSpufabcCr3hskXYWQnaUpsr42sbyU",
  "key40": "211ucZLZ3MurVHHTgQCZUshL7LDqFzSb5mGVmkjVgEVLBhcx554UPPdVtM68YSQi79JcTDQfMsWKHj7oz5ruv63E",
  "key41": "jYF5CoHHHpzwsowT7eLGWLS7eVL4SwJtXqHeqh4J3E3vBCRidzegRUVHWokypYa9FtQ6tHFbYghWvoGhvWQSPX5",
  "key42": "wBn3WAnGNTPG42G1eY6puBbGkF7sN3zyPFM8d3UnGUp7Y5sPoCXYcLAxmDmHuZyrudvYddzL8mca1wj6LWN3Ur7"
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
