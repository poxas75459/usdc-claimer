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
    "JfjhvuCLJbHgEEJKcQu33p6TkunUEZTWX8Aj194ko8mSvNChxfjuYmyXiCZtkbLeadch9pLE48b1m3UmuEjtu6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "suAaq5FA4oGWuLrquJNVuL9QrdVvZhCWCwyaDHUSnHQZaL6asG6T6QrK7uhYtsyMBuyYXVWL8gy3fepjt7hZFmA",
  "key1": "4y688GejVEgRZALqnErzxfctcf6Ng9qDJyu4ovNnDrBoy4NSgDvfvzCBVm5LzSbYyKcqxz9Wokz3RU5ANYh5fqe4",
  "key2": "2KdvGDBVp5ELPbQ4LmaLAq3rB7GjKFAniupioyfAEE4wdHvhBYQJTKDuGppkrvTiaDFu4nFGpZEnajemfMUn4VyF",
  "key3": "4A35LhNGDCxL2ih3d8FLTm15vQ1rB1HA9BWvoysnh1sngE3BifQihxqZi419eTF1aeNqXr5Yfw4CsCpjHBigddzC",
  "key4": "3MCBpJwrDT1x2jFfY2qyfixrRxNGNRCQceTeDrQDuN92mkXXrZiTfKgdTgJk57qJ8htcBaNXyo4ckE7odo7rwxCh",
  "key5": "2P61HVV3LR5uRHj3v42DQcTpejGY9xmbBJvT291odb2zWj7aZwSZ8HQTSkuCZYnc4kffeczvR4KtedCc7hhcfJSs",
  "key6": "4pu69umuj6nzwMAHdZ83k4QerEMdbTzrh8hQPyP4QfoNSttAEWutbPv4jvkEg1hXhxLPNhpkYXLPr5REy3Kqcd8w",
  "key7": "36V3EBgnExfHWxkRhQ9SAB1NS4zRavwPU1J9W8Qx9pW23ENMT7qGdzbA3bmKdF2HqsxZCAdSh83VA4V1zecPNwHq",
  "key8": "48HQhgrp9tVqWUpBvsJhFRbjpZJk7kWfgPukeFStLtUhsdMvgTVBkWDXZP61iUAC7q1W1GmKu1GcBPAK4CRX8Kw9",
  "key9": "3pfKG4X9KpQbStAY61gVc9po4uxzf5BkHGsxWu3hLjgC51cyKhVAKprLWpg7Ugb27GrQkHDtaVKMeV9yv229B4fJ",
  "key10": "33eNdtrPVszZG1QghaiNkGdRKKNXabank9fNk3rqA8HaGjMyTmsU5RHYoUyiMcmSx87GVqZj2LDNwudLGXyL5J7m",
  "key11": "3epBq3KJ4Hos55aDoSTfnFiY5yYU1EzHH4MWKw2x7UkGSqj3EUckvJXLmiMzYaXnenUmgEnBsKLkKr8qHHEqHSxX",
  "key12": "4wxEvnp27QPm9dpwG97smh9kHk5AbCWjkuR7PZJZ61M4WMuFX2JnB7SfztF7hUQYx39BcviybA6v9QHBaNsQaZfo",
  "key13": "4pjZwGZ6ttnP3EAPhmfbJ8X2fQZRyt9mZWVaWG238t7dMSGXA4uSPbRDKZ8b3YJg8HgaDjgWFYnExoU7fmhSRjFz",
  "key14": "3fyhX3Rh8D6rK2MXs82zmffSh4RAEzEDBTXNNVxKHsnUTUsx9a2joYQarJhsqBwWh6jPkEzQrHrGnUpEEA4Zi9QF",
  "key15": "45vEz1yoE4C8rDQTCeUH2UgH87ak6hJBik184cG2E2NVMKyA9BLDjdFCZ6WQ7QCsC6bTL1rktd7YYJhBCiEXwZdq",
  "key16": "47stMmFn1FUkp1viuJCAzPKztZc3dCbcbLwKEJ4hWzyy2NdiAz2wqRr18nRfmVVtiUZsAY5pgqQjLvdqNGqFXshe",
  "key17": "4BjPpgVCrUMLfxFrBPKMbemT9tTUuEhQJhhrkrs9zQ8D5TEXAcXrdgdnhtTq29sLUK2RrsByGxaZEqQ4JV6zDWD9",
  "key18": "4DWcai121evNXjtQUQSAvLaPoa9pxcJupcWDYraFaJz9g3xttGerXQ46RaeLCEZKUG3ATKy5XBXqPE2oVJDtTYxd",
  "key19": "5KortnxjZorYGfy2JRgC1y6SXiFPrduMzDkHfYj6spUbpRumK2VKWmw2wY8JfbCRKHGPmCmaqfmqRp8i5ct6mJ66",
  "key20": "5doH6A7QHC1yWnDTXDSfYA18BNska8Gn1pBa4JhU8btvKCs3By2pU7aRprNEiVowE9U1qWKhe4UPwnuyGEExoT7D",
  "key21": "2mFvxhrqRr6sWdSHWT2hSnHZ7hwAwzgf6peHPoW8SwyDEsZRvwRPBnJnxQfnmhfLFswhZFzRD3z6vSh4z7fT8nDf",
  "key22": "2Ri1QDgwR9TCsZeNPggYXpvPCsRuyRgfxY6NQVPokDj9RLEEEpe3g2bmC4GgjepyZhkWEjp1tcg6GTXL11thuxyT",
  "key23": "PZuWUKW9s5WtsogCSvELhX3P3DcXnupqTSP6BaLkm3avxsta3zuzAnAThaGYN7RruYKBsdUFen4Gvx1qaMSHZNi",
  "key24": "234BzwDoS3psogzBNrZytNbg5yw1hzD3oPh212dC1CMgiHugUAaCoVaS1r2cHdqDCFYXbyueyU8Axb9phf6uDTQ9",
  "key25": "3GfzgRJhxH7SBEyExbN5kih239ZLxUnNFPwA7r5hmTBpBFrJbVY52bWUXMAgQBtMu5QxJQ3mbYp6hHoziZmmdeNa",
  "key26": "2o68XKL2gBhtHevEMWY8SAKCCBb5soob4RSymA4Hbq14XK7xqsEAdbewTFyineGSJrXFwMxCPjgwQgJi4kMqH5fR",
  "key27": "wD5EjK2gbSSW2uiEAhy3RioFna7v7x4kG1JkSZWHxJHXrKsvpF7kuTj4XLuq9CW1pchSpUicnyPx1hKMnU6UNjW",
  "key28": "RFTwQxvqxtEmgpzTYu5rr8FSCJ2cMRpfDtFXWuxAbXCZFB74zu6uhmCDmaQhnEa6iEckkUNF9se73d2BPWdGKS3",
  "key29": "64RekfZmzB6bAkxkj9KaxpztEBhW3jE1w6M2yY6ZzWJbcwbme1XXyM7D8wz6LcoYsWvMmJMoVkgK6FCRis6pDnDS",
  "key30": "f3SMvgktgb2ayYLrrFtkvv5WpDi7MouG7bV952s64m8WVSi5kCrbFAa8TnpATEwkDth74CD8enM8xEePPegeJjk",
  "key31": "2JTh3X5H4bm3ntFAK96wSH3zc6BA5P7vkAPujPXUaaWxCAQ7xhXeazivP8qqQaHBX78SUnydAoZ95ansPEwpMxBs",
  "key32": "55xBkFpDTtoASgpEJP6gMjNPSTKKVMjUn5cfNCDn4PmtFjWs7r1AeZQgTGKJFHVrdARLNdX3LumoLmrLz1UbBbfJ",
  "key33": "4eC6Hrvc7vbnTyehZq53LJ8rtCtaPbXjarDgcWLhj4KbK3Z865623CpfVyU1MoqX9APEKxkVBkqq7YfN8aqF2Zph"
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
