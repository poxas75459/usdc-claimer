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
    "duPzUo161WDSDcb3pRFfp2AqnhPotFfGs8iJwkXB5NyF9qxTLVgBQvbMz7dT5reBhnySeezFFhYUMWyeH1sXX9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWfga3MVvNuEnTgh6A1dn97sEEjJEhdy1wcFAY6CVLmq7GLJYyERiTBBJU9q4f4rNDqS9RU7gmKbimko5MU4qdC",
  "key1": "FvTdxLiqVVxujGuC9ezKntMNX6V6YXVaR5eLdGWruPPetmcCHHXV1h3xYqcPtvpshwYLAUGRTi7CvdrKjXmKiS7",
  "key2": "51uaRgiGnEVpr9oVCUpiKNE2z25JCvxR3MUZTjXE4a4KnUHcZeP6vDcaBSG1hwz4MXyQ7ivqWxciSzAffYUihrKd",
  "key3": "3mpkRWyx3RyRJnvLA5k7J9G8nXQKx4DFJ9DTa7M2pZFSjRHuqNaBndm2ThTqx2uEaRJWXfMast17dYqyTC9bm5Cr",
  "key4": "2eburU139RL3ixmZH2kUZRCUmDG2gGsi6hDkyLoprJxHU6o7mKSPMmtWHFNyo8avJ79CTGWCZBwJDGysNkAxGdiJ",
  "key5": "5wmpGaPW1kSDmniKUpCC9x2AfbLeDpSUeJAFvzdrk6VLurjntH6Bf5o3iEq5xwRR8AmPSD9hE4bbbbQ6Hg4yqJsq",
  "key6": "2V1F4TNzkGgbBNMvD33pjYJPPmxXt3BAkKfEmTavLk67ehvkKFPsJZXUwjwtKx8pfqu146DcoDr6wRK4KtKA4Qsj",
  "key7": "2fSch1Uhi7t4QFppNhtfKrNvX8ufPrYBFv6oBAbo37Ar8oxGaUT8dqoXjVUThKg3Po6dtB5A73TVdoCNDU63FRv2",
  "key8": "3v3g84JHguD2nDppspxdpeQyjK64M6KhDLPBGm2tPV8ipp2wxtNh1g648EDVoSUhV7L1JnuvwETHmYSbLc6m2trE",
  "key9": "hzbVqFr95mmvaUKUdmBSJcYMm2aUQqFQUHRe7uxmvhQvwaZNDMmqK6FnooxSUwoJqGdhb12F4NhsRdryaLm5suM",
  "key10": "mqyFZZgGBGTGXoWGZFN2iNGbRG36XP6vDagUr7qtj1hsfAmpHmfB9hTcfGHpqubiauooqJGKxojyQQKwBn2yX4L",
  "key11": "64ERzt2AbouydZvgVPqU9D7qaTzYHWXxjKrcRQckprVm9HyWDfArB36T5c1NNh646pSDKUKKMszXYUbY68FxHQTv",
  "key12": "326beoxBZyG44HpgU2jCGTdHUCmKjPVkdz3FZBE2ZTuTn3ttnSfiDHch4t3rr5SeHwaxeRFDDVhTXX7WhC6bJh1a",
  "key13": "3eXrsPd5sVZzfkyTbEJcfYcs4PvxsMakhvkayogpm5gx8rhDpb2mWJwNAWYx2fNgeDXH5YeL2nBR3jNM4BGHfQ1r",
  "key14": "3iRJeFxqUgmsupokS2No8LTLRtBDSqL5e1Sno2RMPEedpkdG6FMzdHHc3c2mJXyWqn8J3GT43rUJ9ViLyZNf4hV7",
  "key15": "5Up8t1spJrm57vWEYaUWBrvXB9awikrdrVi5S3MwYJkKnUkQbte9sGhWeV5unppmmLS9CHso1fkAjTDPXj5xXffk",
  "key16": "4U9CLDRxkBW7vcuSj6aEjPiQp3X6BRW3wRvn9JUncdFSjWG9kk48SaKBfpsi4PayLENYo3KV4zZcoEajATHYaxEX",
  "key17": "3hNTGZ5bX9wqDa84nvJ4SkNpmxuC8f8mVpcb3G3a1AwvLFYzEHbLCNYB7x8815G3zPRKoucicQETHSjkfbbbkUGv",
  "key18": "63WURDybbDjz6zXuBZiBGx1DfNTf2kGA5kZh7Epq7fEcbZsU5tmRT2BBdSWHhtJkMt6eYqXrz5BWnMLqDDJTBgaJ",
  "key19": "2q5RCtW7CBxBawiK9DLxUmFjaiXF8xb5f2CRCoN8gW3rji3UYRKWsA25D2Zo7hUCuF5ZN9H2mrxn7xZSopsk7B7w",
  "key20": "ZpbR9RkwBjwtP9CX33NuWb8VbRTX3NJoZR79sqWzVBrV2ydNk4srfQV8HBbZCGLV3q9hY1PSNg3MXAGd3gbsqdf",
  "key21": "56wW8spgPS1F5w9FhJ5CoFRxgbVQDBNANF3eQu8CkyU51bWjzeZdSZUrmaeBTAQgNXzGRz5asbdmiLpSfvk9gs4J",
  "key22": "3nMdC4pdaXkJeX1CxLDzgrjwrte6PEhTuwubA5Z5cDykV3Nxr43SXtCC1nrtdzmrAFCBqgeACjiQuPJ6yHMG3sVt",
  "key23": "2XSC8pLMacM1pVT2haCDXPKJ5TVRa2VKb3ERP5yV3ddoHT3KWa9WhLYAqS8cLZbBH3vfLQwYvdta55MveQ66WjwX",
  "key24": "3YdbsQ2oJYwsbFFJ6PuCUtKZwY2vAhs8n5Bd4EYD2o9ehpveEJWFCZY79NjHqTYz7dNbu1wVoNt17NAkoxm2uMLG",
  "key25": "56U1j6MLS8iqACQJqX81PuGrmNJRecHzLAtqJp3NY64a82cNY4vRCsygF1kHFt2GgKa7GvkUoqJZyC3arwKxcepi",
  "key26": "2nTzuyQ9LP9gWiidas2bkemeepbvD7Xwkq8NSSnPmJmsoRbN9krttsCPJCeGcKU2TwEDpxj4RXKAXLRzMfbPgDbH",
  "key27": "62WBAkDci3PU2XzbiBzty8PCaQeZ6hhyb6kua4Mv6NGURvetiyyvRnW7sQEabd9TnfyxxcLfQb4fwJEateLJq8VV",
  "key28": "6SkNjyxQaSMxfwi42PoHZMdbFNhY1xXkUwmeF78bkpfkBRWSn8CeuN4D7MLnnZRBXHqjFnwgMLD7QKACBPiMkcV",
  "key29": "2crLqXgSruN6n3d2jkj2zzNCuUpobDULrWoRn3W8KJEFZASUsLCBNCdG4o8e2yB5fL8NzssHEaH6HnotKiz3XeSc",
  "key30": "4SD1zygDgY9pBdRaN87qSjbSvc2Xq1X49wrkgVf6gjcXmxpaaqRZrjqr1hjRcay1hpMJkvC9dqhHD1N8nkrqeTSo",
  "key31": "DzdQoXoxMPfBKJ8yjCtJ3U7Gr9gTWYS832nvdTegFuPZWZMMNi83QCA8mxzBssNpLHNKMMBAAGKGnsR5NcNjJLm",
  "key32": "3KptDMT7NpyLFo6YGLmaMe41AyUC2gTZo52Z6ivM3r2oB8mCK3bZZbb5Q1GoqPRvu85cU2KUcumotAmMut9jMmQA",
  "key33": "5zTbvkyibSkekNVVQwkHKDdSKz7DMgXd1zzSShCF3djjjJ6rTZNiZGot7WffPsUFEzeJgJdNm65ViPcZXi7CGi25",
  "key34": "LRPtzwpCDz3wHyyTNuSMYvfqUrhQa6oKbd3sRvTu46WBteMdcT3qgUFp5dmT6WFw1YJxFVXM796Cb8RnDgem2gh",
  "key35": "5TB5L5a4CHeDyefq9ULvG4xcBvs5GQQMXXrNcVQRc9E6fJqjS94VKo23KZW2qsZ1EWB7YeDpu6MVck6ef9j4xZ5Z",
  "key36": "5g6QUqxstbwsEJwb5gjdTTPvtY7NmTC628yTmmida2F2M88igaYqFrBdfLJA4gAzsBXXWqFWmWHMFDtK5iCpYQVx",
  "key37": "2oYHycTDEYmhD5kdNaAwTWS4d7RSfjoG73MqQewxY6tKyL8CNfSA9HuYiNs4PUxF8wBMNk68yVMywwJ6i5QKNMYi",
  "key38": "3qfLDVZi9HQVQwEYSqMUHcsfoXzBAEANDaoZwKLxpkW9THoWcieMN328y8qQJKuwsu6jikjbEbBQ32NuY9T24Hvc",
  "key39": "3YK65WfJDBiXEFn57pziaUimY2VMXx3ptNzr9qCXNSpkZFf5jFSsFHaN3o8qb8GrhN7v6duapsC3gBL2YsHVSQt6",
  "key40": "ezjru4MGWKmVdZWGPyj1dsrsLFzAY22HFar7YeawKtWDp524pd2fyApkyGxYWX9g3fx5WrVLmdLM6WTAecYpHEH",
  "key41": "61sJ7HMZYT9cbkZ6zCi15ajGXBwGJ49VqenczWXdyFRtcoLRi2SjMmXQATGQVPvUtsiaUePq6V7giVtdWrUC5UB3",
  "key42": "658LXKZjaMZ7C6XLy9JzjcuFWT8RFD7syMrEJmvHFr6qA5UVvWgczRu5L3uvcnufnnnRmWXuAYtSegY4KrLwjzQu",
  "key43": "4MHwreDUmkLxZErj7jKeWPM3H8V6jBmfWCyxebjUzGMNEFXjCWDmpXFTfBioMXe5DzGPoj7cWrRQsVqRKXqrNRth",
  "key44": "FYNXgK7eX53ezgJqTXEEBsHDpePbgVccaXCUC4N1rJUCQfhkLCzhBTUA3QmjVhkuotMoPVgLnW2yrZrHK2XxCPG",
  "key45": "yA1DEDKKknwAEH12hMqHwn9Gjkh4F7W8NQTFznPrnQR1bXEUaAREwDw6MtZ17PbPFCGSWjGhcgpAJCKmgVppHGz",
  "key46": "mZgK2KbWWxLyMTcvqmq3DgPuwXeCxLNH8gkKoWJRSr2KhUKzKQKf4BNTwQcgZVsf6XesJqvzwcNbMJK5YrLQvjX"
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
