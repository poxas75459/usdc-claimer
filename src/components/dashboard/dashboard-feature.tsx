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
    "2x25dAcdMSGEWNabkqNHzfDJixwjpwTWfFHR7fDinpqquD4pC47FcpE32KemAovKCMzDPTCYb8bRqZjR52SDBgRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KpNkU8YPniExFNg3NcuARDVAaKKziPBLSKk43oE6pm9haqPN7u4efcEhJRfTRAf8P3PtZMvtr6L1H8ENyNcGYTj",
  "key1": "32bbWwEjCC8rme5aqkWowqGy5JTrMiSRmdu9j5pb7cT6fkECJjHJuVizkveYAbf59KsCJyvzQKrQ2nxZcs58x4NL",
  "key2": "QjX5Q68sF2Ya1Rbs2v9Z4KhweCY3q4Wj4njV6LheXPJ7w31jojwbpgmLhUAgKMJ4h3k7F1fK79BPjyD5obeQu1x",
  "key3": "rWapBPTYxiCF8ZpHawQFjbxE7mqxuhTMhpUAifCoDaKCgxZhG4pC5hv3QCJJ4xNCaQD7uVArmJ1YdBCTkYWyLxo",
  "key4": "5Xe35WPakgAnc52Dxq7DsgBozqKkyvGuQhLoy9CtTdZ9vd5TZ59BZCvVGcag7WMmsfnL3wcTZW4dCdX3iWvunxSu",
  "key5": "3LqtRTMUVnSqXmpvVmGgAP7N6tNW19MohCuurWaDdycpeFAHW1mmC29qcC86SJ7uDFxW5QwBSFy9W1921H5nEEGG",
  "key6": "1h2cQyyPgLc2XEDNdNbnE43DxGZf3ydQpFYmsnUyTC4JGA3dnGzFE4425gJjwGf5ZMWjs9732p3Zd2fD7VYr9Qh",
  "key7": "3khFx7ngSj983re5MnXrBLW7JcoyDGMxs4i6X9MfWJbnR1a6zNz2sREzG1f965NrQjN1w7VEjTHuv92dqmkpRgca",
  "key8": "3obD1Yn48yru9Y9szNB1oa4WSB6ftWe5nxaUAcCb8ck2uHzzHZmwSDYGtEZ7DKBrCihvmLonu4njPMyi72r9qk2L",
  "key9": "3edDaKSShC32PJWi7aXtnZqmfdx4bGZyHFXWqs8uZ3H2MBvFpuQxM9EAV3aQngaftBMsfshTwosoJDH9BJKzToqJ",
  "key10": "66kzDvMFhr5arvBJoYGebrA3H8G9S3YHCe17kwd4uvqx8X4RP3pFGPV8PCovNGmaKaKdmmZ28S8RzC7bRCozu8nR",
  "key11": "5V6R6teRoi6VzVk7MDyVcfSC6GUunL2FftTVCY56yKveR5SJiFzD7cUwLMEnQLEve6QoVV3JHFh2zEMWpXB4UbFZ",
  "key12": "5mjsFRzqCLQj2a1NXGmU9MT216wkEDrGMxRW3HjzhHQ826HTEM7AGdau5hFAxGc5k3QPcQVzccPX1vpjzBi2BsnR",
  "key13": "Sna3fRwyFesETBX7rmnESbgxCNNVRb9eeZiXaDKg6444vC3F2peg5BDUbVfLEK4Kv83PENMkTBCExuvXfRYhw6P",
  "key14": "5r25z8Q43WNCNa1qL8i6BDmZ4LpCjGGrqbtMhiwtuKT6NCHPtqEXjej9yiNBBrnG1JXkBL23TeRfmBHJEjUwb3Gc",
  "key15": "3dDk4DGKL1oNCbVcxwXfXVcqAaFxdaUCufhGx9yUNzZo62yL5Fs3f4TVnnKMRdC4ohK6sa6hTMatrvcvyWgRMSmt",
  "key16": "3bQA2HaJvzqD1x35UizWwg9dKuXHPjqS7SyTykT32oktfx7LZyDCPtVAJg3pqsezJpKsNcyGN6TSN4ptfogvkWZK",
  "key17": "4F1Bg1NW3yMQJEnNevhLtV2nAr2Jk8jsj11HoaV8dFE3kXkX7RYE9cpcwrzPRucNXUJuKPqgwbLt3rodE3Rh8pPp",
  "key18": "4LBR1dW3SNVLBKSb3p9yKSas52ZyxHqBQLxw7CZSqaH4Ujrx7FkzAQ6grVevyEamHPhTSURzwYiyFTsHmDE4uk59",
  "key19": "2KoCbbadBjYdK2boF8p9UVFV1xiLHRWAuZxM9XkwY4wYbdUw7PEyTc6wNHA5ZLWNczt9tvbMbyaLbnbDrRN5Ff47",
  "key20": "66ovm6YCM2NofRzwR3kZWWouranB7VD7ch7a72kUmR8rfAydBdoBvnHsPMEvWwPpG6yTzGD4HgpWnnKmF5xHcQX1",
  "key21": "2EjWqtZ9v2UHhXme1G2yPSqTPxjc5de34fWcykRLi8rZjsaKKVQyh8mq5PMDrUWmQphiwYfFoCVgciuPPBYC9aPm",
  "key22": "2dkYPPjfCG1qc8dk12nveHB1ApRiTD51h4hYiLVqbcLDrBKrq5rubeZ87cMcDNwr4wiNoup2wTrf7UFBsj5SyMfp",
  "key23": "3rnbW69LBt3NEyfP5dFtuEb4z22qm6SCLgshXCrhmGYQhUvRdQnmGL8MrT5AP17Ez5hJ2MRN9djmTijrx34jXo1u",
  "key24": "2zb3amEBLm9TS8X6qNDkijdbi254acdwdCVsUB2LVYvXYPmPper5yi532eUBfvoiYAwDQcXooAZcgzbNQoJbu873",
  "key25": "2NL8FWcCCqWXGTV2C8P2xAFAGLUBoP9foQPj1sH2mK9w6fjabhP6FxrJhTjVTa2GKaVpcSaNPzLp6yYC6BaRvoL1",
  "key26": "3p6fwYgTcvsyMS6cthpzXoEsfcTdUgV4FyC11VoZxyLDdfFGkPSzxsin8jmzWKzjHB9yWYBqmor9Jn6CyPhkqh1h",
  "key27": "yckUL788Cy3LLAo9HopAXYYrbAfxbn9qRTEW86W5ibSnnSjLXyBSYcX4BXXGZe1Am8BKss8UnTjVhfpArG3c3hz",
  "key28": "3Cw52dW2vLBu6ZZ1vLyL8HNyFeoKEqj6CjNMRVcVirFR8FCkVp6fQ4RdzEeifK3JU3Ggnqyn4yr81yvw2ook4jJu",
  "key29": "5hUtiYAQnQhMrpaVVv2iF9VX7jHgCCRiMWKGThCUzyGUwzonwJyp4m97Tk4WBHv2D7WxQnD6DWQ6Dd8dTjyjAUY8",
  "key30": "35ef7NetCZwB4dgYAZX8SWrb2BWabyVL7emBtXHKNyxTCBgcowPGNNjrmVWz2JL6nNCFdoyXogkpvbFbQq5e8bqm",
  "key31": "DSQiJc12t2pjTk4PCygkt5Pixbvn761axq573UREBdtMfQ8YhBQtWDUkhk69TRCBRPQXt51wjJ4qMSXLH69KQhc",
  "key32": "3tq65vHu4ipCKWsLdmPn8ugXByehFdcLrXLt7Y6abQ6gnRaybsCRFxfUVnDAokNmWVzhNkiFEie3iWtkUwJmGpfg",
  "key33": "4Vi5MjSHfkxpijYhD3YwXoNz7WyUh49sVAqREiadf8FYDGw13xXwN6P8ZweN5WeFtj3ffdaVhbtKLZxhHB81Du7t",
  "key34": "2gMN59HDuMnqq6HEtugHrteo55YamXrXgKuDx3NoCane4ZbvF4atrCsn4LWvQxr3USuRCQdR4KdAJGNKLPWEdY2Z",
  "key35": "5SuGr4KU9SHQR6aG3wmpiSycxuExgBSsJWdJ71zKBha8V51ob42xzJX7wKuAjaVjky69tscwQeQJ2SVdPD2DXeNK",
  "key36": "5e37TRRCzQ4d8CHRyNqnLnN1kpHnfdsWER3H1m6JY1fVJ3JzQGC86PBkuqe39HVWVm98H4ReuckopAZQS3KPMfu3",
  "key37": "3pSo4pyJkwN5zEdhru2NdDLFBwNxjG7pmwVbYxrxSX7CvjrjLriVK2VTy3gEJPdv9vzVpsdeNqduq4BpsdBKKss1",
  "key38": "3jmGYVq8vyeqEq7PjhvcUZAyhE7ThYu3HMT1mgbstqdCaibxmdkx1W6dpVGMg2ushQsmjVXLvrRVtdx79sTTcTcN",
  "key39": "5GJGYQkBNrXYsXcRPfcPZNhphTWvUv6xnnjRF43yo5sEMR19RSxNhG7fm59JMYsqNC1D5CrznZmfM8ixpknFnGzR",
  "key40": "5aSZZxK5Cz2sbHoHdrWjx4t55CS2ATmR6R6HzQUPxXiu1BDfGkobBDVUmBqzu4hXiDHMJhQjua6EBKjZgzt3xy4r",
  "key41": "5c8EZT6AmffAJrrqEte7zY5vFrnZ4oK49aXBhNWFWYrwSFjTDQXiH3gP17nL5YPGugG8v5skBWXeWSa74PsWg7cT",
  "key42": "5NDb1bGJdVkgBxUbmA3tQbHrjGXDfVaJ4VGsWt4GqDuUYzzJTHSXSX5twWLj9CXKCHZ82yHK15NrDwCn8UgduK4W"
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
