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
    "5yReh1FAQwVjyjKw4AnoaHGd6h8xnPvFHzewasbb2ygZFZ1Bwn3M982WBiw5RFjeBjibmq5MgFMmqBSkauEkZXvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wowpvYG9PrufUKZFwrQQSPGgRgyi8ru8ZkYCd4anMPPgXeYqCGingb1kBogyE7QqVfKFHgiXhMZkG3ZmDgT7U7E",
  "key1": "32fjJfiFEcFn1ZAmxjAPLGidDLjVK3MVvjzf2bq7TFg9S5oNMXHwEV3xcny9ucrYN58ghAAYZjkiTKFrmyyq7tmg",
  "key2": "2rcXr2NcgSDvYUfoArTYsKdBNsr4KZ1maJLEzCcYhNjqQ7eiMwkQj4gKJdFsYyD7vCSnrNfRx8ZuWFtsD9yUhJN1",
  "key3": "5kngLqFFh7LSyYX9Xnidpt34TNFjKrs4W5as41Wt9dZXDDfyTcPvUEkxEhHTsJUwSN57eBNE91b1B6YDYze7SRvo",
  "key4": "5X77FHZ1PpN8PGB6Nou4omRcqehTHYqHcY1WV4xZt9cZiJGWWnViFcjYKuRUhRRTqVn8B2SUPZrB3rH146AwwPE2",
  "key5": "5jsUx1CGhkqA4qZ2pifEdQdfQYXANwtLaJ1pz762tZ8Juf3GQKrx93dRdjUVnkySNCS6NQ1VRNP5bJVnBdcYaPYi",
  "key6": "3VgNjVXjeh7oJJcTCnm2BLfuDrrw3ZCvgqaYiSBAsZ3XZtTG3W76SSv6ghpXshxVyS5T7iqmzTTTKRke6BZg1HY6",
  "key7": "5TyFhnRN7WdZtqY8yPjHFHG2w5X64fFj2Fjt8qBkcXT7AbacQWPTiw4XcLuEPappsFTgY97P7o4CmctDB18MRQrS",
  "key8": "5VuZoczkMJtsWEWcFRHKTu1WLkSgqUT12ABZCZvo7LdFZ35yF9B8t5gFt9LJefTnghts1U1Qb3hiMLR7pzLMNSgz",
  "key9": "3d6H5VWnN8oGBLwLpDc5VEM138NGnCYzm1v2d4HciCwMeW3p1KKAnt5enMPdxMaLDCVeiz9Yw4KW2BDUGQGjbwsQ",
  "key10": "4qMKdD8tvgwzAnyQrEJiSuxbbfJXxSqqYnCWeJ4WMge8ZRrpfK37NUrBNVfQoQscDNNLPBxdirb3skP2YkmTFUXe",
  "key11": "WFE6YQXJ49BAQKqZLgnwqygNjyt4nNubiYLkzNbgmYwV344WSg2mX7j6HUqTHnEDaipFUDcwQ3ybtss3TtvR4zo",
  "key12": "42yJQ87G6147vTzWTo6xhWWUNd9xFRFgDDYEapRdsst9Wq7FSRyRpjkKvj5PRwk4GwH3R8bNpDMXYftuamSSd1GS",
  "key13": "23rVqprpSPmMiHYyqrJB5XSGHh2bRznCgDG7J69ZPQzn8RF4iEKdMAjyt5F4vCx4phqrcJXeBkYRPdB3wNfa9nXJ",
  "key14": "5jdDzhTnh7bFonVhXtLvxKynae1sZukJv7QCgp8VwxgDDSF2mELC8jiBdAK2NzUFMrhwmud2twi8Zu8X3WpDypXy",
  "key15": "4kJPu9ftfyNhqaNT61vXerAQYPmt2mVjxjBjNamPaKJwx6GEx6bSZPb7h3thiYVCDfBWWAjy2V7AWysNN8c6NUR3",
  "key16": "3n66r9m24PTuHgxv5KXf7kbUsySvcUyMioz8nqaCZyqK8m4eGVxDHF763pYidJmzCKUNNSLdcAAbwxrfaDBZWMHj",
  "key17": "2GyL9WrG1Qjq4BKVa3PvQyDujZurKY7b8scjtUqb3cGyMtG9grgDxd1xPXEmsHYnzGLP2eG2CMFZTXzyLdqDxuCh",
  "key18": "2GutatpW5c39jo3gNG58mTJUrbA7bNBq5fY7BKX5JfYzmQWQt2e6WHeRvg1c2P9qhNwB7PfELpPGUa9aNZUSymYj",
  "key19": "237Ae3fNf2NE8XJyUmPANr1UJhYEK9FWNfjnye3V27XMvfseoqa2WKziBNRrLjnhAaiqb386sTvWNGMpzv9sNxFt",
  "key20": "Xnh1Qg7dY3UmCBYBsHAiz63yJsmhyUu9ptNsTGz6H4fsPewk2LH1rQX4vJrfz3JZB4zs6yu5jzRUTbSxPHKw3fZ",
  "key21": "2SWkBb6kcYHFHhrBfQv7P1pvVtAP3PZZgLxMTutAax1iac12xnfeBRssKz6acYSaMNaJHLTA8zHvaYGvAzWzgaEC",
  "key22": "2ruMrcv7BUPErRp3qi6CzSJRxMqysDM7DuMGKvLbhTTAPJTvYczZNWPoutQQXEzMcgzjahmiRJ9T3gGJBQFe4YoD",
  "key23": "3SNhLF92car854Qt3GRk3dSb34eiRfwAYUmaTGM6Cuw211Ha35684DBoSxpAH8U6zUVkj31Y1dJvSzUj3k5Puhw5",
  "key24": "5uKAVdp2spgmYJgEe2tGpMq24JrbVKpvKyoUUujfYFMy9o1TVBmpqb5BCswt3b6tBLdxjqNwRSU2PgfrCYjbjMhT",
  "key25": "4pCk1nEnmejJEnxwW8avzBzspiYRjTdG4jajA47bMfzKpFRJUwC9RqrFCGg1PLGjVrUHkAxqLJJ94mwFtuHfB5B5",
  "key26": "4Rxc7sNUYJF9RVrYGPUdVMFzhebxoweQ4McqT4hPfChRgAZr5k66TyorSQ23v7WWjtudDWvVk16CyTSnguHZPWSN",
  "key27": "3xLPq1jkSVVdX7E8NfxcfXaWkjnLkP1ZK4UxSZTGXFu8AoTMH3LL5KT8qAqrPpMDvQudoAMsY6EuUBNZXpzQ34T4",
  "key28": "4X4EM8ke2Fi3cPDwaoceDfZqmxj7qREBSbB5evk8PMLfgg8gvBNMoruZqtqMGrVccwwy1qYWNB4Uyz4VQQ8F2qgN"
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
