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
    "5Fn4JVWCD8seRYtwfrXZpSRqpJWV5jJbi3fS3eAu7hDKaCvQUrEFqftTC8GhYmZ38Nbsk3gfQR9sdj1y6qr5DA83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ncyuM9fijEm6dJtXa5b8agU5kQVDXu1ZEBQTR4tSAVWhMfv3WXfZVSmtMfQuhcPG1yQG1REdoQK4Edxq4kmG2oM",
  "key1": "2XDu9X5iAG4hdznkTWd5VhGyKBMYeR88ihq91UPnch8wHLj27QBKMvZfeLVD6s2qNbUSm4t37Yt8cgGQKoSn5pVA",
  "key2": "5byxcaK12RTA3dzMNAQUNe8ckEKytUhAkGeGPDBFnjXmqsNsWPrERKJN3ereQamt3n7YqoA5WFV5CSqjqWiFuTxo",
  "key3": "5ZPN8Te8CZk239P26s28ua8iffLDLc8b2EaZHUraAsq4PLuuB2MrcESakL6bpQG7eTufvx7z7ocNdjpuNNKcg398",
  "key4": "3zLTpDdDQmTJsam7bdJBwmBqdAJ3KDpPAjfs3uiwotpEBwBYny7UpUFwSsjmVEH4sZw84NYAgTnuf9wgYP3z5ydx",
  "key5": "2twujk7Gdv6aJde7WoScsAqw87q392eAyiykqbitxSVjpLDPxs2Pk1gkdsgn5twPGV6dZ95R373JArkg4BBxbop5",
  "key6": "3Ft9rumU5BbxFMmMsHM73XHytt4Phxb42HfcfzeLkjpnYnHNFP7SXoAE6wWPsA1ZhwsRPU5YDaExgYwCwSMZ9ti5",
  "key7": "3NJgMPTXeQ7GVzHMLLvi5ecFTbhszh6s1RFJ8nRBNXUPXidQsGGRsttuHw7rVqnjdRb5pBegi8LFWuJbEDtmo3Pk",
  "key8": "5hX4NN6KUmpNrnwpqRPqHy51v7KmPH8DaaARPtTfC4MqApUtAFYXYYgSPtb6qcyMAteVvM3MYLSvshbfyxYn1dQP",
  "key9": "29NvETsgA2zaAtWYmEgJZMehuVC6XwQ7B2CjftYamxg1NSV993gAW83mfqwyt7yQCmraCUdR8xGSRbHFnfHtYpQA",
  "key10": "DiGcroMJM1iHcVshfq9nYfga5mBKYKEeVmTTuxDyCzJruR7xNXyRwb1UhDGkt1hUqLSfzBtSiA3r5xcmXiJtS1c",
  "key11": "2xa3b3ViNqmBGbJGAToNjrnqHcLu6naynXM55upkZhV1FKbLHwYMK1HC9LFnNWjLxcZmcpENRaB6URYkVnVGhcfz",
  "key12": "ddGGxKsPzj86mhiPRCzpwdY1JQqfsdTVm3omVp6HmGU25n7wJYHBeB2xaEbMN4UXYhT6rUSDeJX24JGo7Pafw36",
  "key13": "tq4a97hBT1fDa9RHR4whXuZF7atGm2Wx3tQrgpkNGhtcK5AYsfFLUh8Qn9rojpF6fVZ4FyYBZ1E5fcDejRtxDQM",
  "key14": "2oBt4PKGxa2zttqnxywGHYuRhXR4NFHDMHmiJwsv8pRQsV9smx7zxtfiLufw5jL4e4rSEsEvPHPyJQX8MXwnMDUe",
  "key15": "48R92Jfm6F8k5x3AcNnJzXfLNMDP5iisFWtNFjvJ57mQXpgAUpYdFNNze5FrLxBDijJYMcZToFTcVqU27u8fBrPz",
  "key16": "4YoFpa2fCYFjbcqj8gCtwiF1Rfsex7mpKeY678a4PCAQQKC3bkMuxvwnDJqyHNy3FiU44SynZBmeZr9ZUsDmA7c5",
  "key17": "3kLydY34W8rzzuQSLMrME1HUJbm8Tbx4EActCFGgBJzEVs6uxAE6VTQEDk5xNsF8hN7NJ4vAmmefQWPeia6SJreu",
  "key18": "2QYipnFcEmqV4G5LSPtfinpGyrzVuxBJA8bKA8atrMEqcKvxWYirjy64iqjQQQxLtD58EX9Wzk7QzgFv7f6XnpXq",
  "key19": "65hgrQFjFHVJNZCconSHvR5Htb23FcDEUAKMJTsCnBoexjuk5r4i4SHkYoYrNgvkuJdPHeCzGPDdP4Um5wnEfZkr",
  "key20": "2BQmbW27H57M4NmN6AfmwRyF28jZQBbrpk499q1QPbkbSHptL4YjVSRcT8ba9ZNgbg3UPYW9fWbU78Af29UPnjGr",
  "key21": "2EHhmJ1hvSw8XjN459kyYPBqzPWKCuZ88KB9k87W6sHGLYd9uSULLbGDmhEyzXeVm7YhjMnpi9oCoKn2pvNZySm2",
  "key22": "57VSHvdxkxdW3ZaPfXNigKs7msKMBTRyScMrwHcRLUv7363Jd6xiAbTUngZkwmAqsUqerK8QkRfCfJiwjwQfxaZL",
  "key23": "5hjwcB4pd9WwaC4apohxnm8h8yf8GZXDMvkcERZWTTfb6gBgvFtHdrAsShKXfckv3mWqRWNHZqN1trd1TQSn2phk",
  "key24": "4LXVPPX3kFEz6Hmewu9B5YwtvnA3GnJmXfFSDkNVXAt6EQsayjiULGHBE89QaW85oVJFECyNpsNHYn4yFPdy63Wy",
  "key25": "5vHVohixQJojr6dTCmySC1fgPVmqprMXznCqyPARLNjf6wKrMpDFM53gkwaTwj5qGFzrybXdUvGwfKmvsMN11L4r",
  "key26": "5vNs8expKo9s88Sn5Soc2bNguVvzBxTLNstTY1Szi4aZBMoCjv5DNhHVPVAFzrwm4i67B8bpWg2gh2XpJDcoAUps",
  "key27": "2Ase8SoVbLhmMvfKP1qzk2QrCWKYyhSDnwKHFn5Zce6Fu3YVYyhiYR4BwjofM7w4DfXxqxeikmG6TKECBmXLK3NE",
  "key28": "3YDTgVMHZrjqhHyWDgHLN4ReGztSAVz81WesPpGsFiWYyjUPAMf3K1ERjpfk1dpXMaD75US8Dr9PJrGRtFVmxkSX",
  "key29": "4hebGAjUGFfiNAkLgvUGcrntm4MDeihJEcdRZ4YFXyyuwNsQbc1FHRmcBz6YhHWjeRNTQKrdRmSt6H7JEZ7cHezH",
  "key30": "3Yg71dvVrFoq3diCvUpGWfVuPfDTpSKsj8JzrBDjBoNKRVKEi1PefnoQotfh3o4rcq336nzzW4J1q4PzgSE2gQ2o",
  "key31": "27xyH9kdnwRUjULyg5sxhNXKC5VFpK3qRLkAASXJMM5KhffMbAA14rn77g5R2TD3Y6RV8ur7c3rSVgA1ewaXqreE",
  "key32": "Q44VV7AkBM6RhAYU9bUcjZEXkfUixYRcfoizcFVaCPDFzcBtgVyR5ExbZ5ojo9NnpkLbaMDn8RCBVTdeVMpEJmM",
  "key33": "3n5Xujec65VrJN4vZThBAhmfR6DvrCCgnTaFZV9rmxmwi9m3azY9k24zYBQAwcEa5pbCefz2VYPD6Lji1yxBVWFi",
  "key34": "44Am4vEs4UTsXSRzbbVsA5ktsr7uFJLdeJJd22rfq8QtJmuLdcWF66EHPS4sZjxVLQgp73b7s8e2rzEKCV7txjSW",
  "key35": "3KiqZwXdBk66J8if9NjkgcPwenZacPNwa98L7SDnTgCpD29KNqfT3G7UmYJeL15hMGPFBLePq1pVcLseUGstejPA",
  "key36": "5cb8iseNwQuw1NJsrjejMBevuMq1GVi6e1TALGNJPfwma1yQUVXifAPBrby4Cyr1Q6wQHtgDHuzqVui3iuXPudM5",
  "key37": "32bwArzrXrTE3GqtckVGTHtJEQT1yn8baJTHnasuPFgjUGe75JCJqioupALkEzSpZuxSVr6D33Q6mFo7QUJ9w4d7",
  "key38": "28YSuoti8coMNnLkpACB3Dy8mX5fRFV4ebBKT1xQz7r9NDD4dqxFps6HW2UMLe4Yh5dAGDKhupjCgPqBZNbGVWYT",
  "key39": "4kLYLLQStVJLBoY3NFB3kSNG7HzG7f55TNNHjmo9hMEWXECGRE711visk6CdEV1vAaAUrYFD1NyhDqvwSa3zzT5N",
  "key40": "4EmAxqebdLCHrgFtPxWyUSwtGMkmXXM35SqDFkssuqx9XatU8rXUTeNpLMaABi8jUMbwtqByN3wHy7t6cNxgwvYc",
  "key41": "4wBKbVpLvR51fqpDvoGm15JpfGQSGJr3vU2grRVju3L3CVBtKQDDqcawvpH3TdY2Z5hcVq9QU4n9iiSeGkF6RPzD",
  "key42": "2HhGKVAVPjUnFzYtv2yjjfUpMAWmHbntebHkFWN6xyZwbpwzoJT2iMCTnKJBLCGCEo6VChmeka2dLAq7RywGiFL8"
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
