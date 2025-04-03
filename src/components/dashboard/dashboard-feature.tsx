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
    "3Ymatapwh15q8qAfVvBMCgzz8PkH5tzJz3QBAax1vuQcMCwPZRt2v7kNfZc4TNU3cfMEBKpSRchEtJrVTKRoUfbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zb5Y133SWsQdPGPmjnTkxJbFqynNYfoZSa7huJqYdTDXMHoCKMwgiqvgY5HxwMJmMP12WLscbuEsEZ89ASYTD7i",
  "key1": "58w89Eir8GkzWa2BpBAjNh17AnQhw6KBzoEXTMdHvg9K2PXRP4zyMnXramwXbmo8Pvo2iZudtTDzEboau14LCo2u",
  "key2": "23oN9Wn5WxswnFoMvMHGhyxDx8Uiy58KPdb53DXoZ7HLe7VEPgeAm43wyx1Fod9nFJgvfNpoXx4A1sXUQUQAzTWe",
  "key3": "5uHjqRkAi7Sjiqea4dU5uduk6pgBjWFnN1H7FCwuSrtHgx74VXUbAmixPzvCNEEkwmySJVYTPZ9tasXxBUXAdGfA",
  "key4": "cELwhM5VaiiccBimTMk4A4SNMw61ku5UtuBtxvjusa6U3oXzsTYsDNuzG6SgcmskX3NxzBEjdL2Yw8VKatYAq2G",
  "key5": "4jqpYdCAtPwtiRRbbpsDHmSotwzKVVectajAPPLk9aomVesLpHwtqQKiX1ndQax3gd7YG4HD7f8zKe95tzNhRZ2q",
  "key6": "5ThAr19s66NnBucorz7d2eK6As81wUdZmF2vqhq8Y6zgzbkmo4kUkwoEZLqtCzsurntZ6WMQw4UH6KYtNEpqNPSw",
  "key7": "2Y1sib8AF772mDG8dBwPTTsgB4AaMfEjWEffcGu2RuTuXLEwCeTpMJVsnWwZtbVLhhu4Mf2uD2S18Mj6jzX3Hoiw",
  "key8": "4CBJaG1RPjHBHd8v4quQckz3oGow1m3D5fwTLmkXf4xNunNgw74oafcNdeU9mv7qQYPif4ypMrRvEzoZR5FQbK4D",
  "key9": "9mYx8n53Nvh1X6v1Qa4GkMPMayZSPHu7YTVgVdjwAiDpaMTe4pSrzU5GoGg1KCQtLXyMMiut2YadCagB9fF9Vkc",
  "key10": "4WqFzoBtSsWXYgXs73J8cB5rWf7166qrm3M4XyP73MaCraUpXrzFGUFXaZQNBmhWgAh4Fd7uS7NNPtWxHgiWHqd1",
  "key11": "3eyNusLLhUXGrVXDnbf2nzJQm4HwXJ7kMqjgLizfNgjRoUK6rfVUKggivcz1c3y5c7eBQQA1i5scxiokz6nyaJBi",
  "key12": "2fQokezjDVCedHoty3sbTRQuDP76XeXTMh9x7vxEZXy5myEdN5EsdAk9QMNLkdpwMFobuGveQ4ebdsqfZWmYF7V8",
  "key13": "cEBi8YxHkSCLENM6WKDB9xERBtwUkYHLMK3KAumTxwKi9ZgJX17xc1hEafpJxheTECCEiwTEPEtWibDTkUU9TqM",
  "key14": "3PTZdmpSjgiXKRzT9FDzx7xCVqChxms74qhu4V28T19nrCS25kZHxZs4n4oqAmMfdertWbzKwgzvyuqNyNXQJXrn",
  "key15": "3JcMSKzvJ6o28whUwCsWKsMt3K8H6gCJDdTEExmhSBqwkXqRYHRionKxK3gaHhofes76tCxSWw2YaDfin5DWogNF",
  "key16": "3vJuX9bUjKDrFveCjc1cM2JzVkhyk5K2s4s3XjfLhdwr153eRLb6Ny6q6i1w2YfbcpawSCJP39Bk9wbiYX1zX6mw",
  "key17": "5XR67DoBPigD4Fsf5zFymbRfkeouUqDEVhfjoQz4VEmiHoBSR8NFUqLcGsfxweCGRyuScbsYQizALxzegutxuVHh",
  "key18": "4inUv65dyyPakvhfQRBxNGsfNLq3uaH6RhM75puYRVkgtV1FSRrjLCLQeAuhPATaQgCPwULyQyuiEmJtX124X9gm",
  "key19": "3xA311bVU8SxocwnRMwrUFb8kY5eCMagtUtcgXjhG1PxKvY2ov1CXdQcqoTJNDfmZ8HC2z95was33Xn53ZBkPDqA",
  "key20": "xHneDrfLq2hQssyKYRnWCM2qrDZyipKLAsNL7qMYdit6LLiwKGtZxfyJUvzrnk2JNoKhpk3rV88Hm7hmZ9LmcEs",
  "key21": "2f8UQpfwgkjUtDFq9sHt4RZ2F23ujVhmQmewBW6zfpxXAESRPeN7wCSFW8tCfVaPgPnSUUQo5gvMawBQn598WZQt",
  "key22": "48MYEL8WWDWsLDJkjUoBYZqBc9rB8uxW9P6mNMnJvJgrkqbMWMZfHJFvhDbDbTNp2Wdn8Rnyx46iyXPNpZtycrpS",
  "key23": "4YimmvsLThgBaboAvxAssCGccFs6UtokAjmVQ6KhgGC1ZwxNkAcNjF9UWysY3caSzaWHtRtuszYhhq75U9aWFrGw",
  "key24": "5pBjNxyh7u248L1CPKSMKq3V2JR4XKZV4KpEYDiGGG3t6nuav7rBbWGbS7zKKNwKNvMzsRHBNNyq8mgFaBDeiyQC",
  "key25": "3pYPViAs5zTxuCEY22iRoZrP54DpyjqPs8bKwQC1C1DAkk6g6g85UEBqus9W4Jgs2PDZgnQ9AqVdRSTsd4N7xbwz",
  "key26": "52s2VyfgzEH7R8TpLLQV6aaoF9Rz9gdef3txzqRRDwtJsxDvNZz9K93XLUn1hEC35CC7RENGM5TKrrLvvZPKksVG",
  "key27": "2tkJXTpEgk2gSME7sSbCad1yn8UHEhY4HB8HWag8JvYfJkBvi2Lr8daqXb6HAqZPaSRC5hYkHi7QvhRwyEoyBB1P",
  "key28": "4tgQi9eJu9pYRsMNPSibdRvGV1T73T1AYt4HcZmGxY9M5hdRABs8JMPzMzSEETjB6efgUzTWnVogC5ZNwUe3Cg8Q",
  "key29": "XQKkTJXivsiMGi99Xrw6oKth8Ro4wzQpCkg2ebinTXLRjRiYSEUMSYVp6yYwDDntM9QWJsjF3JnDD8Woh5pbDbr",
  "key30": "3MGwxnDyRQLWRiz7typqWDPy7YPUeRrtTRgzQ3p5rCc4mSXevsShrm8WvJAmFDjDoRFfFtR7AtrK4SYtYf7XHKVG",
  "key31": "4hJ5paMowiwmD6TEgyLj4X1sXs4fthXDgd5Zn5z92MkxjfhNJJ2Rf8iQAsAthEMd443DdzeQmAMiKPPSdrDp85pL",
  "key32": "4hLqTG5qAoYhc6aW5zh43RNswp9fedFFRrWF4iy5C5mmZs9vMK2eWXBXvtzUPVRqG6Noz8hYF4NayaqT5WASjRM9",
  "key33": "4i27WipbMbXukznpTCCPpqzBzKxYYh8ZJGn3Fr9TfEPyX4MokkCKpsR2BojuiPPiJ3VKBntAucMAFTvWA2UVS4Jm",
  "key34": "3oC4zVrrzJFNCjHCcSFyHS211cQk2qDZ9DAtDEULTEb5yDcnkWLNMUT4JJrrSBtb7vGs8A5oy78efksMCsh4oXi7",
  "key35": "5Ht9abaBmtVr8RrjiQHDzUxx2Chyzj4LJiZgM2ei3t7AAzZUBjhoX1XvMAkqNM79EkPe1DTNrVPC5dabTrVUiPAw",
  "key36": "2Qf1k9XKajh2YPtSJ4PaBNYGjQdueumBSVTf6DB3pj46hqy5HpGABRrJfxuc2sxUVou4CmE2GF6bGZJrp1v8pgHE"
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
