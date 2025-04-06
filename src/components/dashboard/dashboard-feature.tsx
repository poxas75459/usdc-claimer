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
    "8qRbNnsp2kesFKARV2gdWBSPa8XYwGWqSNcvKGW4Tn59g1rryJd4Uyte4P9TBippW4ULYN2YvJMKoNtPkaoSiBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bpRUY1Gpmf3M4JBf3PgD8g2KKq5UMbWWsqhxKk9HFbk8ihnFy23D9akZEnkhf36Uy6dig2vZPKU59XS9YVdkrT6",
  "key1": "DH5wVvh9KkDhNEewLqHzq89w9sPJp4LoTiiGhPTWNj388Mfez2ARjam1k3JRr6c6BTHy5wAS9zQuUEekgsoZVK9",
  "key2": "3pixCHtKu3zY8drP5eEySDXoobbN8rkUtyCs3mbTa4tTBLZPjb2sf7CzFZ315wsuFxP7fS57bXqmDubr97JBCkwz",
  "key3": "5Jn3vFm1BZkb8yne1QLCQhm836srJNbQFwbU54gn31UKhtrr2qrYqSGnkVzzVmDjZVRAcLrpKfQid41K8Yr2mztM",
  "key4": "5xWMHfpUz6c4bkxPuRKWATRdtTf41A2cZSsSMvSEEvCNhMpnYWpHyAeer3dSGShTjTwnPEEQnU9tQNcsWhdX1TDR",
  "key5": "ZfP59KxCVq2cKGaBCqSxbQ1sqgYXGU8Y7kK7NLoWgXnMQeneur5PSGyHRoQv6RWALk3WmmUJtzhQCwZxA9m7MRg",
  "key6": "4H8qZTY2ScVoAG85qLM9qzH5LBNFWtKv6rL6L5aWofog6Hhym7J6eZgzpHX5mAmRZ1CokJCf814BGjSmRbMEuqPn",
  "key7": "2Zwj4jjpzLePpiMtj8Yi8qxjngEKbv96b9zrEj15B8TyEHEDzVzkaYtr5QKKaWvYYaZbv93syGCFDAwXfQZ7LSgN",
  "key8": "4KLqzMEEpxoJvthwcjfXSahjHewDX1JaK15ZTGyvvZ9Nw8Y67UzasLGzFXtg6si8kPgnnjNWTwDyvLZd5cW83jZ9",
  "key9": "2jTyLQ3TauGWXrB93rcqjf9L96b29vgkyZemjFFEgUavyvCCxZUeduCAaqZBQ8aWiD7WuBzdbqfnuQV97UgUUGMb",
  "key10": "3PxyQ1D5eFKgsxY57wpuBrCKpP1uC1WzJVJ5v4BTFsyA7jwK6FpZqkvoywJX9jbzMmCqB7iZH6z4LpJZExKZNXj",
  "key11": "5Nic5uoRp9GY9damVc7KCC7qnDu3Eyw3Zgmt3Q4WJ7tzndNLkynz6BTR7s96RhUQRcWsimBdB9WEDv79VJTP6zrQ",
  "key12": "3ZWdUuWcV945KtgArqJ93svy8kLFd5DpNrzvBRDCE79ucKkusHpcS4Z5f2MCSsFLVSMomvDRdSiByy6r35Jwmn5n",
  "key13": "3ebX7HAFZ6QcyqnSHEPY3j4rQFqpoyse6DfxBcAZPg9rzLpF5PcMVBMouCx9UBgkcf5HLXXRXY9Mt5D8i98reFhB",
  "key14": "3GRvJ43xgFZFErYoQXnKB55u3GTywSxshSPqzNdaiiXKNWt2sFUbpF4nT99zmLnGeoY47HqYXXhb6K3QLT5DnpnR",
  "key15": "32zm1VAohJr5hp5EDZwFSeYMFgiL8tdjR447GnpwTRLeQQQaYniocvCn42H3WUX3H9pxQ4Phgj1wz5UggAuDoKjj",
  "key16": "2VWJ28maQHWgW2FQBAJZPsAMJzX9rK2YT7k2JeVDfCkxoCJnaVSGbVaBjxTBNAhMSJtasrA4LgWGbRyn1E92frMD",
  "key17": "2wht3xACpZGYW5jBQVUUFgAnZbR5z2EfWXM6ukCiGh6C7gM9PZwaUAF18YW2j7vepHR2uYH82tJq9JrH59oMicjC",
  "key18": "55xk2wXLPg9YKu5ZpTpwFjK7fnRF2KqTGg9jj8TCknAARWS9bzLQk9jqrRgN8kdAXMBBFoYagYtunD1iiHwDtT9f",
  "key19": "3tmqEsmkB3QpUndKfLh85fhR4f6F8eDHwiZovZAkAYcScNnt2BkTijUDqz6qcCqR6KPS58oUrKEm8M8vNGRC328A",
  "key20": "67ALGav6uxpRCKDPE7ARXxYxThovJmrKodioT5Sm5vRF2BGxgAdYQfiFmgPvccT5tPnaefwW4Q4z6Wcm3WQWXUwr",
  "key21": "23k9dZ5ghX2VibXRn98StxgR6MqCnRfcqZJMdu7wDzERbuU2UdwUDqcnB3rKhYxKES7xSwgboGZjpik7UV5L1iDg",
  "key22": "2DwCkdgwHJecBofjhSRTyBJfVbhTgatPMgjrMhMuaMWMhtBj1EnJfv2yyxjfQuG8JbfhHZKmoniJUbwebVGMLewX",
  "key23": "4shyemBgEYegiezsnZPVe67JrY8XE2DsEU1jFviyeg7noJfDhi4L5LxEQNH2cni6K48Pch11SngUzpHcryykz1oh",
  "key24": "4KerNeCcVcXkYLCXh9wBP7aaa43AXKFx8dxR6jKqmjkZffnzWnJfXq2eRyLRnnyGS992jghsXN7uJXUASUZu2g6R",
  "key25": "5b9nzTZJVMW1GbrFRE5iqX7pc86zJYifsX965uwaKpYtuzVQnKPNgbNH1ccsCQEdnFnu7Dpc1oyNyVyuuemZ49iQ",
  "key26": "53BTnBTtdALFEQ7KrF6de4oMKDkCuBBoyepkQY3j7nEhWnJ4pFHZLfjLBfkS39x1TUDvzx7U8opaDweypwuoS7je",
  "key27": "2fMYNRHjB6aDA5jKADskzzcQUPfuKpMMEryf1gKfb4i1zeAWFWraBswtkihnKmykxe8hMT1JrmxM8c47tkzVGpBd"
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
