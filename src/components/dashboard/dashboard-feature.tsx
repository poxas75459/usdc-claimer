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
    "2vvbUkbQfe9vhFRCCbaJSgpjV6Mu2ki9CChKR6C9j975bAJ5M5HxPe4v9gNFoTTyYfdMZVhEvFE9yZ222vTyUPQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "399YoGaKTbTBHc34yFQ2U8F6M2MJvh96dzjrrS5fkgiecyioHXaNn1oiCm5tAvXXUyTM6jJH1KVVvEV1Du5UA1gf",
  "key1": "kDTAdeiXh6BBXkVKuDDVy9mNJEy9fZgqGYgkkKDYvq38prg6GjYj2ALVJrg4nDVz8EZUFBUNjAYG1DVgLFJMbPU",
  "key2": "2ZPtKdUXnjDXgdbPW4s5UyuVjRpz7mq8iTkjVve7SEPMSLgzL57ixdV4aJLZsGWZfL2fZg21esiHt8BNucmFqZSF",
  "key3": "5J3iNHdYLggNUnbJyFykgQnDirCv37b4vuvcLqcbZSayY5tWdHA3oxh81FgVmt519pRoU8guo1BbTiEJaj55YK8u",
  "key4": "3MGUMworAKNXePAa7DF9ynRZJnTpe3zDz5Q1Jmt62Zq52P8BqSJqAkhN9HJT4w5oPMJmgUNHTiswizv8seeABBw5",
  "key5": "3BGgZfpDLmMuT715LYNURBL5iGFtGXQMj41AaS8xKBguXMnJ6fkPWjASCm1wUPpo6SuweZiS1oFMR7CYw7xzoStU",
  "key6": "5ZRSwQ8r8JAZa61mSeuoZvgDHircxgiVjQvDVeXBvFsou41gVdTst2V6GpXZRfwe6GGAXkgucVefF74edmwfwAEK",
  "key7": "5moJK6PrjEiWLBfcE1ymMyCYXHsqFp5beVXcwkrtqyyQjjaSPsgsHKU7JWeLby64ngJF8Hf5cRAPpasY5pxPmsw6",
  "key8": "Rwqu2oBJBRncMdXN8KkMY46YcScEeRGNKFN5tKnNJBJv171E2EPpwCJzapFozZVnzSF7B422NTeMmJLqCwEgyjw",
  "key9": "2MzBBfMqdHPYbT34AVoTbiJU3UWhedJJCHXYv8q4xCwTtGD4aYNycFgWTbTnsSsegM8oJNE2GXLdT1vyUEbfatkp",
  "key10": "4NJk89nXixSKXLEgKEDLC2WXp6Nsoyf41WzYTvQXM5ni6AgKhJgA3BkJY7fh6AnwDERwoByLhTB8dUdKdw1WBxfQ",
  "key11": "5XtN83JtoBW5g1tTT1D1pkKJBGoQCz71bY8Fgx6fQQ6cjfjxCHMLRGDzxHrsjTikarYEnB73T1KwaomF6EwwYiQa",
  "key12": "E6sBp2jv9NvYvt9B65oTQvqiYiLMQVMkRsCBVTYWEU6M5wo2L7st2wagoy2Mcb63m6eAKiNJunj8Y8UR1H2Ky9a",
  "key13": "2E7wueJqv4YLVspeXftZQzZWyQGVCxb71pnfkMCRCvZwzbJCVhRU8ipGdnZy38MkhfSV2WDp7CvGbVCM812nNMQc",
  "key14": "2tVdfKoVY4sA9yndX2pUFdSw53CXtdBnusLvNVnuJvpnP4Vp48W1YueXCq11wNuuzskYbRRtCwUa54hjpyW9hNbj",
  "key15": "2GLqDLTeouKeH29R636FtP2oHp5xeCKbPSuV7YNQx1EHLMoJZDobnVuJ4sLhsQ7BfP3dSkAHoiU6ZYGvRmLcLgop",
  "key16": "5uwaL9KhYyFPbTPsUP8wDMSEG7z7v1G12onSaxYxshdgTJLJBDypiHQfKqBpCmyvoFoMK3tf4HV9z9Jrw3azZ1Bp",
  "key17": "66192bHGpNxqrbKMRWERVWxQV33MNVU44D7N1AwWydLX1ttFghueivTiLwQDQQMwehvi133wuzPTCUwz8Rr85CjT",
  "key18": "5cbRRjZiX4kN47Jfv9SzQWq1aPJvzSC6JsXoVHnt4ijbvicZP8rSEii3kRq5HChSSRF2fTW7Zow5owN5ujeaqYhe",
  "key19": "31HcNXH5iRqhoaa5W5P5LEc265tGQrnt2d2t1eCVwFWUHo3Uz268ygnZVs5vd9u1nT12dRXnKoSiev5Ut1V81V87",
  "key20": "5Vtdp1XuiK2hLw6jztjzaMNNpKdCe3B1vpZUxj2yU1TpGB2ZeEih3xqrN1oCcJvDvEQRFX6B9M7ydPPoyDryLyLe",
  "key21": "NjwzrqB57jNmSzj3WPKeF1DsWeNvEPfo8YoXPUvyJW6JKHLVjGa3gZWs8vEUJFiuQJo8hxTBj4LcsU7PAkYUgzs",
  "key22": "K3aFuP2JCE2rb7Tg2EoxoQRLQkted2s6YN8vWfaZ4jqyT6z1gDoozwdAE9eDYrcmgprt1GUsh98HQJT6q6e5RkB",
  "key23": "5ra2q8Rzh6jH86wAHG8WBPxPrF6DgiBjufVf5S2GHo7fqGAMDqA9vdXFMvhWbcT7iHDTuC3A2vdtdhoLvchhP4xY",
  "key24": "2KS2WyoK4AfM4xkKzLWZyTCNrH2gm6YTK2h79t6ZeRTmojZhuqZhMy6q8F6VJncTiNSVaXWEt4ub4yB5RaHRbDGp",
  "key25": "3zs12FbgCJf2FiT2viRov6qjkrrQ2cEFAaE7rpUU7mLck2MVxU6NGnb3gvT6Jy8FjetTQyBUR3EPkds8uLzabx8z",
  "key26": "5c82vEoSWcEQcDmkrHsQGeFmRJUiySs3at8GX1KkQDDGJmxnr4gyvRqBRLrvs4RQGBmoj3VuH3mkvdPWamyMeSSM",
  "key27": "3LofS11NzePmZKo72MBEKuvVxHLd772X5ocUDSKMVCqdM6bziC7n83n3jT4CL5M9ZJcRh21Pi1CMzcyUZ4Q3Ro5y",
  "key28": "4DJ9ebBrkrrLHFyE8m4jD4eAmEM4NCjLcitfdmAdyTTj2xsMzFB8znkMiBekmusBMMdkmVdiKqa5vpWb6KoQ9BRs",
  "key29": "3hm9qfv2CD9TMwDfCwyUhrpDvjgLovHLNKMJYVrPw5EzRfmCzjGCBE8xjMx4fe5rCULZwJipeFcjarY7CuRyHa2K",
  "key30": "MDTyqWxNtaRcwp41ofmXBgT2vwPrairEWkxEsk6nCw8CVdieKoeHxxKQjKdmvPdBL9JLc3eyT5j8EApbWMrSMDL",
  "key31": "4BFi6VwsRDDG6TTjzu9pPXSRBzUkbvvWSC3P3s3jnsmPsEVeqzV9JbMVuNcsfdfLwVTcUZzLSQrozgmSwJuGD9CU",
  "key32": "QSfXiDs7oc4UQ34q2aAM4qzVTzDcaMUH68tUR3AYrgo3FCZScbgTbFKaKozbuUqXba7NixAuBUZtRjfv8cURiSA",
  "key33": "2hCLd3k3vAYWquiSgnYMwvCDWMxrbuZTpnkakk8yZ6HN8z44vZQG393ejYrejWCVRJckXAwEVgooLRfFeWMz44Lu",
  "key34": "2VDTYjDZ5mGvF2Dchzg6Z5cJhx13rpcuX7G3DJC8e4xADAYhT4GrhVLLPC2ZXeqYx5YXE26obdZEN63NMcj6pcFX"
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
