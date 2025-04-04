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
    "4c8znH3RhdxXwNNiJBYBaVEXzC8jYKdEvnwWjpyS2V1KTSHCBPexnLS2qRtxWNZqcogrkYCT5xsnd5hzSbxaepgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "276UfZV5MmxVfgVCmyN3ngusk4GT8tGt8kgueQmH7jNHCmdgvtNA2qAHYfy1b3pTvbzD1sWeWigVc4vri11PGKDn",
  "key1": "EHJ3HifNugFQ85FzsugPKcXxqp6v9gDD524prmRo3wedEo988fhJdh3EEjjnRBewtBdshwvQAB58Fm8Cx5HUykp",
  "key2": "JMxaNsURHNMqhn9x59JSjdHaYZh4WkL7euUABhejy8N2mxV6Q72HFxKUQr1yanq3qLE9MUdg4uVJzEVwowucHp7",
  "key3": "4wZ5b7cB91uVTf9nGDWBmp1qY2S5MXVQXtskRfn8ire4zm94fV6bZ5tywrHsEttmZ1kzNoFGy5ncB7Lg5Qsdocjj",
  "key4": "3RxaeJJXFNnTZ2mHjY7KfmrYm89jGBjiQ83X5RWamoUDK9Qyipeb7VPMqMnHMogCXUZNQS5y7PtrWECf237ikY3Z",
  "key5": "596QVLc6GKC7jUw7RB6jxVED9ShAbMUcZxdrHLadwgrZMotpBnMWTLm1BZWUNPkk28iKH2wzPKjkfiBRRvnfNCbX",
  "key6": "4EKXSG6NPiMFSxc8zUqrugDfrkkaeYoSoysRgmqDeRWYw65NZRknQ5a2WtSkze9Cp7rLS6cM4NXqBPP8rW3L9imX",
  "key7": "46Ce34eEPxdh5fZPeHGx2bMmALJpDUovRMfKNfB5SDj3RYTCkY9L5zVh51dCWNnpu4q7hWASZZZyA2jpre7Xys2R",
  "key8": "3gByeQ5Vtsoyz8D3D7Dc7F5hFQnWqkkKAGSdSvuz2bCdGpk9pbejJ3HSufAjoAUn1yeNwKmW4YhFM1YuiPNfULHr",
  "key9": "5T9SMnNSKGGnU5oco8DYJ5RwFXuwtx8rrVq2dmvUQxFECUP4nfNDG4RcFYZQJsUsFxKhcg6bQP2jufA6nY78tvwB",
  "key10": "5pwuKRWKRhw77aMiFarS7AeeVabXbUc2Sf7ULavriCLB18UrDYBCSKBk9ABMvAtEPSCU5k7aF637wegL3NRNLgbg",
  "key11": "62psvAiTrNh9NGxzKsMPMvwm2BPRwsM5aYrTdK81yDwakH2SxpxHpxrTHq6GPbeWSKUxnX3qVSXsrd12NTh99pTe",
  "key12": "5nj785kmMWyBAjB8Djr21SfU7gd3SDXp3BKi9qdSWkW6sFiWwVZ4fGbsiDsgW4Vz5vmTm8uG5ofeAZQJyPAnf1PT",
  "key13": "3udD3xi6XNkZPyojvFQN6r14F1E64om1FESyX9SBf7wSMSuh7qKi6zaQ2uiSp44Rz8XA7iwYpBgcPuRBMtY4kJeD",
  "key14": "2xYHH3ggYFuv7VmrJLtXkTMGN9aUpm7kGaw41T1xm5ztL8QpVfdfN3yghgzdzWs9KsQY4iCPVjxgJA6xnBGC12aQ",
  "key15": "2gpVwsAVq2KZ9jNoGG1T166Hic1T4JFDQ9ZkGSq45YkdYnQPmbUrzT5DdpccCKWrpZCQacfjJLXkgGZmy4iqQiUN",
  "key16": "2uDKLjWNgDmq3JEr2fhztPEmHTiTFs3T6t9GETKCsv6ZTXhmZGRzDayAguf2295Ba6fLSBJPjv97t9u3jpPrFZuw",
  "key17": "qxucDdUryqJrcJHC6nZSbUkf6hwZMdpoFVMVmVj1gayk381WhpzrVCLxaecobAK6Xjk8dXfAKZopQmEE3YHRrdY",
  "key18": "3n9fhHYgvJQsPBoXyLLdaeRSumYKeBDgJddDLGPhTef6hWHtcYHEwnZSCiYV1aEcQ5g2CdbsnnL59gWymtBLMeKF",
  "key19": "2ywckwszjeVKrXPKCVApcE3oBarchLajS7ziJdJdWEmkr9wKNHfatZt92HrPrsmX7LwNxVhTxcHsDBViVRy2DKgE",
  "key20": "2ZZVeY5HHzUyqAmELFdr3GzWc5PLLKxzoCdaywpi3TTREyRWFfFhVerw47Nu88JaNvZU2kBRJMeCFaU4mpYefyS4",
  "key21": "55Kdavfy3Rg2etv2nn4f83ht2E1Xx8Me3xNQMnnWQhTwtgR5zvS9GCRCGsmV3tg9CdV4aVKSKGvx8d8S9uRy67H1",
  "key22": "Dyi6Kp3K8XVX1Ed63erXcpYVNSNnBQfgr6r5aBwJFYgYnYopDhW6txaMMg5vyPX2G25BjaCd3djGme3heiZa5B9",
  "key23": "2ig8CWYK6yhZ7pCL9uFFJzHha8N5k1fQ1GgcGg6hdnJjHZ4XaeyyYkibKGZNTPEwkBKYW3HrWDpwfhKsNv8GEwQ3",
  "key24": "2jNupqduTUffA12crFgtUxewAj9zWWe7ttNS6y78ueTvJX2qLnXVRWJsAA24Gww8R98uTD1wtJmKjKsLWpbCSuEj",
  "key25": "2yrFCUbNr9GYugLjTXtV284qKF6fpX2UHJPDWnMTAZbZfeyZHTpKvbUwXxAQyForGf14H6QzPu8dLu3z88nFMbv6",
  "key26": "mykLBjg9fAvtAkdwZbVdtJVMy7anwQhTTiHnCD3Qh26mn1S3m5Frvepa8WkRUVcxuXMt7XjwxZBu1WoFR3nioga",
  "key27": "4ydbRNLQ3hCRHL5ALRjFBfDKZnuHEM1uiTYvmFFF16TDonAR6LLCtwiBghJet8DyVtLAqAaEwuQca6f3YgTrby1e",
  "key28": "5joSvpDdnCozuSVJteXK3W57B65G3X93vuBRrBvXbSJBBwr6E797hS8f2Ch89Tbkz8ej8X49YhYhMpL5fRHm75Qf",
  "key29": "2wPrhqypLbX2c8siMGJroLc2K5DiqBFH5QG7ACYFWyjYhLH4WfE9BdtJ8QQvGJv31z5Ai1nd6RzW16cVyGdkMMrL",
  "key30": "4VeWXMFZdpP2ShzUjV5AgaHxk8sBCdxv5TtNQP6b8KvVcziPSYN7hiHYqdNhh9zPMQFqUNCGzaJTam9GfmtTqjzk",
  "key31": "3F12DtVR1yQpLNobfKJNtbwoFZWjJKFj95dVtiG8dgHkVyvYCDwv9fZAAy3vtr5FsRpxWhukbmLch6PK4JZa215w",
  "key32": "2Rt1E8w4jSvvECqfEqN9jE9CpDWSECmsVkoaBfqm3vyi85rzQsq8AN82A4mALMxxKbt73ST7cyB1CUYknHMYQSUU",
  "key33": "3ArfF553Q23Ps8VRNRTvUzqGRUigsBWE5Z2LCCgwAwh5T51tgizkk6Vj6qBrUduzgjSmzPa5mzeMFyXQkdwjNLRG",
  "key34": "3vrVikuA5evrjJwjt3VS5wGFKByCSTadmrwUeXVYFXd5TDYyNwBHKxbAADQiPtxZKbJv4AMadz1hhVRHyppL7qvW",
  "key35": "2DvExXq64dZEEh4TzDkRAXi3AMFgREuXmxA5YHWrMnGcadFREm2Fhb9DWWQjv47X9WuaZhXXH9gFVvmKkE9dwv4J",
  "key36": "46oCVBESoKTH6RXfpyouttAMcSVkGqeRmiWEnzqPajECBTbhGwMLrfhYRPV9uCMhzhrr67CQPHooAkbXSSQC8QX3",
  "key37": "4CCj8FAgTvYUVVJC92cVJmPYwTsmq2AKyM6vw84AM5jnnJNKMnDPwwBGeBdUewHN3HG2BxynK545fBhmrYvUg2BL",
  "key38": "54LCFsjQNfQc7PWk2oBUc8T9TZ2eCWD6EDAgsF2NG7xhFFsssBocyPyj5Y7BjzJhQ2QbuxePSQrn6RgNVEfDcRcc",
  "key39": "25nrJpjVCAKLYo5jLJYgp2KXboFCAYj5LaLuRA2JHeQMpgSsbC4mjNRS1bdfBGXKsnyEg6Q2VUh3KMdvYUQWZePd",
  "key40": "2FCpsr3GWi5FxknqrFTvG67a6Gq94c4pQqzSnUawzrW7wDuyNTdbKgJKnEWqAaD1x6CqLKkCQyWCU5BVgztBxrDt",
  "key41": "5nP1ZQ6hdoNPnFrG1pGCXX1Stsg5K6MVXkhyeJ7UDAJRw1Zb6H2LKuG9e85go4Sydu9PkyS4Zz9cBQrKLywGZgKX",
  "key42": "3mGEFmgwxnTQ57fQuUfDooS3jJUySemEYm2AUPoUYx2uf1kchmYsACbUXrZfXKQ3u6vyj2G4thomVEEsMMpG29qD",
  "key43": "22zRvtR3V3Sw5zA41WUhun6JcpiP6xDwPXYbyp2vEpX8KwCGAs5TUKDhdr69D86trt78CK2MKdasAmEk4qz2CCF7"
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
