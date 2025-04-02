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
    "2wBSJGcgfonpUsVrarSjMAhZMLp9quk5cUYad1g98j56XpRFSuibaP3jzCho7oHVGCCV3Ht2TfDUsmN6EsFTQpFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HePkCE3evadJJ83hVw4Q8MTAhphAs1hSUnfyZWmTs8zWppM14harcNGB3jT2GyQpUUhsHa5FN8SvGJCYE5CFEEx",
  "key1": "4VdZWRNenvotVjfHKyiXPU5MVQFoLhuDPLvAMTwFunDaDMXAMH9cb7xjfrHtT7vCRE6q8RhhAuJG67ftnAXLrg6B",
  "key2": "5iYmoCE4uwD7uuQhGarjqaSUuZQG7uSDA5R51yy9pxXVNs2MeKNf1XVzcRw6HkmWkBg7nBZd65vEoqGS33KKUdxn",
  "key3": "diD5Lk65QSzPHoXQs9t5TicQwoqqn6xU8rNMCAehKmRMJJKHncpURug9tFX3MF5cRui3hxaEo8TA43pJqjaGvqi",
  "key4": "cqxV4FQgDMqJZ5QA1Fbr4eJc9eRedncPRATbrPX8fViDK2NzpxQgVDMnnAZ8DbWamHo2G9MvjZrYusfEW72vzby",
  "key5": "59PzEyBgD9iEmhbiWo9XDtjLKDQNGJQQRK2rGGgjofw3pRLxyZCLQQ2WLJnYN7HtHzVHjvUP62QvaPfHSKgBMAR3",
  "key6": "2Pz4dgFYbFTkoVvKh6RyfP6TvFeswtuCGRLfEHUyH2Pp9wrXwQjp4JK9iED3hbN2dS5tA2m2UmWMtnmftgTjhSv3",
  "key7": "2c49dKhn5fBmvqoMR9cZpyQpfWC47zWVAA24QEpyJLNhSw2fMJmBvdtBwVBuTPzFvBYtATzUiJgPn95d1iZZDDkD",
  "key8": "5P6aVsiVJ8ave4jBnpVkvpyNVSGmKSHk7GVdukQYqfTQNHFhNKthRaQf68tBznTtDxo5jmfL58PjkFFJ1D5YhSz5",
  "key9": "2potJqqtU2Wkf5P8D5Y2Rfp2JZqXbVLBoCREUVEX45DAnwfCXJHi5DaohNYcTVAMNLE735yfPdhNRRTq6KTvDVTv",
  "key10": "5NdASAqgNrBLuMu6wVz9RfaYK5Ag9r4CLzvyenLcyATuS1yEEtome9TKPbQavt3XTpKdaJxWBuWjxF7Zs2Qokmo5",
  "key11": "4ZcuWd3RoQN37ZTJnZxoxUH1kd6Dv1E5TsCyUdLWiPtdBMFLDW4cP4K9sK7mBhDGocgqNXJfxvB6NNcVkyaYdssC",
  "key12": "3dUruys2uQnavYz3Ri17omsD7FDYTQjZmDhQTVysTfkp2EqK4ZBghXHpzjcGEdxUnk1xqLk8d4k56cJCQtBrs6dJ",
  "key13": "5bfC31GM8xfzmXTrGjcNY3Vd6Tho4NhMuq47Gyr6B1CX6kPYyUZxMyEFx9EWskgKRZVkYw9PFCqm3hp4o1YHjQH2",
  "key14": "3pXV3qeF16KtFs2vKq3sVcHCxgk4h7HgjoV6B3JxRMGkDN6Z3R5ZRHu5tsHrbTXeWnaLaoGAcWZkjDX5jz81u4EB",
  "key15": "2usKpwxxTrncKu7HupAnjuJxjMSiUSErAhEkhhodXg6CNPNgEaQYbLZmVRMgozrxLaGu3H9QV3r9xFsuv7CXwa3G",
  "key16": "4jdoVMwxnyPUCdsNWYuHS6L2c5YXKpgbNYiZCYZYTnc5xyZ2TJKdZjGMsRomUBtRFgnp8AzR6aK9aES3M6R7G9b5",
  "key17": "2fdaD7vtea2mw7FxChuEdgKXREZhwfnLTkPMkJL3tm3PBMjEsuSrJizUYzD4JKF4W6h9gy6DRV69VWErX8p6AX8G",
  "key18": "3a6CX3ppQJvMTvS7S22XS5xk1euP2tSDjsRxuJBCGtouAS69SgA9bYvZTNq9oyHBZGkWUJ4udpvv2CyY7naSTHGL",
  "key19": "3v3xV4eNMtrdj7GTVgTYA6xYwHmJXt1DE681y1XuE3nKZBtSdRFf4GQTvjpM31834YzMDUn6fVzzJd8qqMiwS8AT",
  "key20": "2KbEic4HLpLtT2SLZ2R5R2NnzJSX8FQMPcMFKaF2R149KY2rk2N4kKSR5btNELpaHWiR2WkGJrHTksdJtWte5uvH",
  "key21": "4G9CoZePMbtDrzPBVihuFutaB5DVs6236CStMbeRETgcXttciosMcpF3XLcSbKw854Ec2Gm5tAKt4g6vNmKEXW5e",
  "key22": "3nPno519xCMNydJPBTpQfY2ecQ9QrCrCQMwDqZygSqPSeBrjNjdk7VicEDU3KhqUE43W3vyohKR5YKqgqA8zhjMc",
  "key23": "33mUD1rqdwBVEgBSUjdpu1LsiBvNHXsw8jyS7GAUNQ5ryLfoFpGokVrUcY9Gs4ofn15mrPiW4nBaNCkzN9NfjSQT",
  "key24": "SVH7AMdqFGDjTtAQtecczKGwBawaihk8BDbGMwyKrxDM7reFpjvtroSjwxUn9qw3ENtaeXaAhZTfzFBcGpcU6Gy",
  "key25": "2eQJa7Nbvc2d7CpuHgYRjHbjcnZPVj99K8fzniWfSdF8RgnyCTpUxLhp574y7ii5v6wUDXrPTfaU3nGhGCieAbnP",
  "key26": "4PRRMPBwi8mP6iu6jnUQvECBmE88fAeunDuesiBVdn8s8JxFTEvc2QkkgxS6SFmyED9X4mnM4vSNx9WztHfHxV9c",
  "key27": "2DijrrmMUXCEeabUkxoznT9Ge4z6HVf8Tbugax77BAPuAqjtBHenYAgvfKmx6r16y6At7HYSQsfx67fhTFPiF4Sz",
  "key28": "2oGB9LznyBK9T7XhRBnftWvhRSj3D4YnCjeCDoWNTv8sQdacuqvZQNKjHW94mXav77grnvfX51YG8ibwrZHgEqHF",
  "key29": "5dcHqPNQ1jAtqBnC5WuWy8nSyyHSHAyiodAJFEsjzFAqTygMPkb2ZCFWif3DwSCXgLCBS8eXzSub22z6hP4LuKRX",
  "key30": "2c533ze6AF6mpanGQC5XwWkXQXW2wdSWrMpFKkULkWeF7oGeYrZVasgm9JMHQNtLXU4fMjDQqac8umFecj4wTqDQ",
  "key31": "3C49Gn4DpvCSVJTbJH3KLmEe9eL9MefVbVJoCszSQLNyCweeYpG4c5HJAF2xHwzTrKNY8tVJThJRPjpp77iLexRF",
  "key32": "4uA3GcNa3iiBJfrDGWdCgSTxGJdqFKF3EHVdTa2UM1vCYof6xd7ztVZjfgkPw2pgBGfKWsYnpZVDcWtxvBKbP82",
  "key33": "3Pkpo9ESw5E3Uq1RUfRVRL6r1UssTREGs97YwAJKiSAuUWStaMPcMcEmpgJVhKDX3fh8iZt9Bdk3BXhEKnHu1SCg",
  "key34": "LASsKskTqh16Ncm4pag6dRaq5HeNzETuoHahpdQbdocxpzKTf9auNcQWyDfA9vyuML9XfZ2QYkCNQdHZjKWQSUc",
  "key35": "2VdFQCZtoFaW2pE86QopFxXC84THyhR4tx4YHxEoyE8ouCtGujGKcsPF5Yx7hPNfn4gJi2JsHZ3n35Ck9hMobwr8"
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
