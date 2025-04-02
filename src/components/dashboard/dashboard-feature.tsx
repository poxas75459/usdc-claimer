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
    "5wqFSPgSpPzjJwqdYEbLzJBSoNizsx344w1YGgJu4s8jdozvRrhHKWy5Bgh9XaqrwZLkYnqBe3jrqrMg3y5iztgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eGvE1n741yoYwFPJ5SPf7fxa5yEJPVJQFETfTXZt4QVy6zXrutZ8myxJksgw8Q2jKp8hk6NzziitGoSQFsq6Gyo",
  "key1": "2BrHc1tpLn3w9fWqgzBMdkDU8S9y8MmEKy3eMWccT13nzVno7tmoc5prpLDfgEkTERHRFM2CWFhWRYRvVqGoA7Ez",
  "key2": "462NTNbksT14Pw38jYrPTfoHPfAuxAW8Y8G5LCynGA3qBJm9NRSAn3fyEa6uQBykfni4mVqRbCKXQLxdSA8ebHMN",
  "key3": "3zdjRArXRokuH1oZXgxVCHP3pwM3ZgVgTDrDCShDPUZAZSYZgUzWpuTrTB4QdASi17yXruLhPSJ6CfpccKiuLRfN",
  "key4": "4k4BxXQBMGcnaTo7aneor8ik4QqeYABNMRdVmZMtczchTg2zGHr7dxJdk27YjS7EgViJrgTumVwY5PbR23xHqMpg",
  "key5": "jmWfAQtkwGNDHBzVwBkLyTePeeCyZe9doUKq5yK6V97vjepvRzn5BHWY8hPZ2xJNbxjApvFB6PNQgNKbvaXJdjy",
  "key6": "389KKsoX3XrzgqxKDQCu86ocbJw2sfkpZhv5oBkpAKqgjpabsh8pwKDu7TXdANFFhLWp6MsnZvRkac96x8a6hYnC",
  "key7": "3vwdT8MBASPPyfxUnwsXE7RFkxZaHoGHXc51RJNktKkY2nRrNtrf24G1p8ZRVdsYCsEiQciHhNfvBUfvJ4QYbZ4K",
  "key8": "M4j95JLuvND5xSC3gT6P7ypk2XRkFFjSj6iT2QBusaMdGV7FYsNrEYLuXSeRXMJZGTEAtLdEEiYtKkLtsrCSYWD",
  "key9": "3jEJwvyLBipD6LMEAT89HZfAvJEbjbfkG7YsNZhyUMffiwm2t2ywaFYa9Bw9wLFZRy89mB9mK7Ab7p5WAQRGCvE4",
  "key10": "4oSSG83hzuA22tbQhwZBsdc8upeX53PWQNCXv9i6cPp7gWFLm9wsL7L3m9E4r3m5iroU6waNwrdP87PCh2eC3rGR",
  "key11": "44aNtZwaSnJUM2RhAcZTXnDwi8fGA6N52YywhBARrWFMC4tNzFEaQyojdSr3YJzweswapDC47Kv8eAPcwigyghHG",
  "key12": "25FFdNvkEn8q8UFFH6wopnrLy3ynw8A4bF4nvz3LhmZstFueEdutwRbyPUNw7GW3NAecKBwG2HN8UqY3ofcjow4F",
  "key13": "2M5rsbmN7veoYRbaKAs7qdcsdecVTGeeS4QXpv8xpa7HG3rZBMwwCeR3fgcRGbRrwWcdSAeKxoLz6Jeh2UKQ4H7t",
  "key14": "23dDR3wXLMxVNGERaQbsbE6Z9aqYARhGwTf62i91cye8Kb25Ubvtdt1eQRBAb3HPJK5vdFKgXBC7wcuLJqvntk8a",
  "key15": "4her5tUzUTB8pey3XgwtKPo67jyuXFC49tXp65kSwvZgaZ9kDXJfqf6fk8PRL35DL3bagcNbqEHtkkZeBjfZyMf7",
  "key16": "2AjssaSHLYCUWqnGjM5Vr8qrVtPSr8cmusFm2iDTywNkD3dhB5FDa1AoiUyeSmWbM9R6ezVkiDqnNcozqZU17XoH",
  "key17": "JzTQW8Aq2xgfe3vFzYco1qqMynnr3hU1cb9SacdFTgH7HSNsJmu4wQgboxP63aqSVVisxW3pFyxDsKQnvb5TSEK",
  "key18": "5RUoNUcjc6SaSGw7j7e78SBNyiu5SB9oTNLa5hs2usXk2MSLBsRBrDHRbpjv9RM3FxJHwFYxmo81EqP2VTcspPAK",
  "key19": "3AzPahrvQswceBAsE8JsKFJuH37NaVNuxerbmBFaF4tdvD9NH14eR22iYy45YnPpapz3zr9Hgfp2WSRJc8pWTccH",
  "key20": "3fMsty3hnRDGoHRp8F4w2Fa58YtJfx4kyLHvP7UcHMnYLuPw7YQyecqxUPFKRgek9pYRefZLRsaCDA2noH1ad6PL",
  "key21": "5qB96SX4yrwTWbqXe49n2CKkE8JqPyRxD9wP5hEbSfyUAFEiwd6jTfVi4Pjq6aNsGVe8XamQKHJcSFVZ7dNy8chH",
  "key22": "xRr8ufttyvvdfeBaifRiyBR5ASVJ2dEiKG2KdtpHjoQr3RUeKtSQ4wTgtnPFrG1FsRLxaBg27qmeHzKSL32yN3f",
  "key23": "YTqjiVCCemkrSWWe31U78SZkLqBn5ujN7v95B5oareRTjScVNrd8HgFvuBLyZLb4yw2uYsiAgYhdJUjt2EhKknT",
  "key24": "2iqhjymYEu2TnTMUC5JuobBJ9BG64XsdL4rzBhoyWRw8Fzz84sEbC24jebn7BqFJWpG8PafT5ZZUv1piVHP62SNX",
  "key25": "sjtJXaLf1GuJQ6tdZts7ug4NTpb4HbyGeUnAT1iRTCB8tyxm2sJ43X1ayMSJ49RPCm8acASkHucWp8AKaQfpS2q",
  "key26": "4u3gMxakbj66zqzeDMFumV2C8BrHD6EWdUDpgFgi6twsRmpGsxwk2EgjYoJaDQ3UE4pkKTZRJCfpTF8q3kzu3wWe",
  "key27": "2o8a26ZRbPr1MEV9kER6Yry9zAndEiML8pAo5TAMDUd8KT22htbQ5FLTfJWz1revJ3p4xuNmSm6SfEi5Q8dXaTWY",
  "key28": "3jUDwjNcDH3nDkUDQNhqrfMj4BMWYLDgYNUcaZN1M3VWWrTSchZ5GfKEagzosTKRQryx8WrRKPyUHKdzAvtS6qsA",
  "key29": "heCYL6hxQXqTq96hWLBdw4g46PEGUaNPnFPfwTHvf4ETjU3nT2vfqohq7iT4s8xES2qbC528wytjsrubaAgoa3i",
  "key30": "5ZjE5hA6qBmKa2dv1nM3eDccW2mYaC1Uk2qv661NMbuys46AJa2bEpDGP3J5iXxVAtNJzsdejqqZz1sB5gNY55D5",
  "key31": "4Ct3BEBkKvRKsSD8DyWBosP3Z4DWhMnQfKLvASayqeqwrYmHSBsjm7PzUz6v2djeZMX679amDZWWuaMSoicZX4Cj",
  "key32": "3wCVcRaTshVtxx4HYEyXUNfx6bZPkNbQ6iyiqKyDhpbFxmRcVw4P3vAPdkxV5dD2uQC3dKMa2pUw8uxM548oLfnw",
  "key33": "3fyXQV1FBxcw3RtDLvkDCQv8L1FwtZ37EaGBBsxi9pUo6r4yDfrgpRCbrdKLSAe9ykjh7RohPqfDapgQEp2vj3Xg"
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
