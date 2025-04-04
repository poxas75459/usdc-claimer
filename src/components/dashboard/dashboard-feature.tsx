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
    "EHRzRyXHwQVTYACt8uGUvWBHdCdiWWY3ZNa9vKofUWmTCk1Fi1QMA8UBA111WPs5WUJhtQD6hQZ7h8a9oYZUFCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nRn9ZkWncv1CMg9xZrbQqSymsB34V7CZ7cVbsRq2NJuykfZvsVZTMwt36Liue9LjNDacMrJnXyFGqpo6f2h47Ho",
  "key1": "3GoSRtzkugraNn8wDMf9xMA4ogqancrWW43JDfR8L3QtgtfzDFVoNt7chLg7RQx44a7JKcp4yCBXZ4NnH68sRpSV",
  "key2": "541BZS6cpiDcBrXQLD31gHw4JFa9ThQ2hMr82ysaEHLMDoDfUnAQdkv1DGMiPyhLGSfEZuW5qS4PscLg5XkU8MyH",
  "key3": "4rbGUW59AdwkvffmvX9v9x1r4xBQT3HZtJRky3aaxKpSRWbUdwZm3xUSwJUobusXUcMCetzdgMn8xGV7WiMgyHDm",
  "key4": "397bxE5r4tcxn2QPM93CKkvq3fZsk5kzM6E3YRKZ3J1m2NwnoVK5tuBkCQxdKZ9JrWZMD5pTUpFv8LhMk2W7BcRZ",
  "key5": "4v8FoXLfzQiryqBVkYypz6zHExi6SDKM52kEBVt4eqWeDufRAYZ9GURxmhEmQ45fx99dJPbMuFR6QGANW7SEwrgQ",
  "key6": "5r3a9fiYYfa4zSjSvdwhfUzXfeADdzuAueY9uTmQ8abMdK2xnraoWaWjNK3a6Tya3v72YC16XpxskdGZTCjhdKqm",
  "key7": "2aJyvyvq42Vskam5dvZg7F6W9wGjA5FfyA4BoaXx6YrRuegPqnNeTT4pKL2oWUXbKWPA7gJGkXyKMHnZuCdky3Cp",
  "key8": "5eEcapANaXWJLR3xCcUomQ7h96ZjhwBgpxXEPdtyLBCpnvoGonbpSGhfp512JFrevpviFdZniChQSQTbBioisDS3",
  "key9": "611n5MLeKrc1P964K4LCkJnUN7Wuv2FSnFkHCncTwrSZk9t5F4nKLAygjc6BfPbVQa9y3TRLsCEDPAEAEVaQDxjC",
  "key10": "3659SDzBMN5VYpijRbEzfFJYftqseMaKX6htUazo2F2FyQHc8uQU7QkcvJiRw7cxK942KVqne83PSAvJvSBDNYuv",
  "key11": "2PFVmqHXejQjrTqq5BiDfoXa9bGgy8qELcSWwtpvaa2dd4YqxUFxBAgabKs3gaFAG91o6mMZAcahotrLtSGVJLLL",
  "key12": "47oH35Nzzq7iMiDykwyFe2fqGzecofn1M8abwHWfemL8EtGKaJGQRG9GGzqU4gLFBBqm8kqySY2ZZS4dKKRdmerj",
  "key13": "3H23M1y5LzsewZZAp5vj2yzShnWWshHxd6jMwY9pijeWsHE4LFQXBGxo2i2DBtf55VdXCAdyRyPrqiHNGaMdXm59",
  "key14": "F18y7NL1WLmjtoKW6huYFinpT3noqvgJjM6VMg38snFss9yYpcH7yzmFH6Zprj17f99wrfcG9qrBr6eEcV5ieNs",
  "key15": "3CUqMPrNSq2eztc74V6zPFQvfbQwqHhpY6xAH2ShwshdZYGeNpCRtwCYJoiKitrfWunP4sUjqmoQddV6BLoRxVA1",
  "key16": "66s5YszsnE24igdZoD4Hm3grsQ1tbfKvCwiCbuLkkvAnjxqW4KDctgwM5gxrf1NeqaHxjM6m9H4DLE1zhJLtbnbN",
  "key17": "UJ5ijLuh8vVVEoWhchqMMrQ3rXTLXcZD55yBhrozsApVgWnQ6mZpZCRmGFYkdhpfAfq5Kq47p2NsogSH6sX4Dyh",
  "key18": "4BSQELDaykFUqZdx2HA1gANWppMVCCYoYtWSVGAGxqBCzzP4dyWtA23AdM9K1oWxDs6aHeMCcE33p47iAMv7DJ5B",
  "key19": "25mSrrmVaqKLKL5w4Htt3PZMt3vusDWmuspj5xJTWHBWWx49PURFGosoB8yM8E92GYwtEoUaJt6G4qvpQzXYc7ps",
  "key20": "5MbEh7nqQNtNF8hP7LfnCs1AxnHCTJ2yCzf6fqagrV87ygSGab2N8SLwt53sCSRETbjSFaWGDJoJ4Li9EaU42Tg8",
  "key21": "2CSGCyBfYbvy7fz39sK5avm8iap6AqskPuedUrKwbxJQwHWBBhfQXGc2mHfgcDZKzZx57v88awQLAh9TRCPwBmah",
  "key22": "3pvbaR3YKTJ1VSpim6Znje6MkwMDjotsSdTamwHN7G3fBbz2qhbZHLEWownASub4W2bZApm1FmqeRTTbxVicPMSD",
  "key23": "2tjHPtJKCi87urnD3HwCCwZkxi7TBw17fE7NRKCwHzXtM8LNdVqzrvyD4bkTLWVd5QQZe4EzbnAxzNP4cZroqR4h",
  "key24": "NYcpZf8vU2T3777ziCcakZ4XP8ZGqgVKRm482Bn3GtLk2jrXvPwWTZWNNCiVc7fSkGQTHo9RFb3orFWNwtFWam4",
  "key25": "D5cqKbLHYBQue3YzSdoBvYdVtPf6QEpJBDvJPS11i36nU9N4eP6FqxsKAumcA1AubGyqdGniEuLEKiyKDcrSViS"
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
