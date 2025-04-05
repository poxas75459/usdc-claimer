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
    "3H43fdkxpBz1nA7MWa7PZKUfBZna1V9x2MQ8rvVSebijMwAcLNJhUyu7kHsPEhHwfYPUGqLVk1EFJFUK8dAbVPtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DBa4zBBQgWatm6HHBu9dD5TRK48wMRyRGSz3BL6NMgQtDh3JcDH1rVjbtnmhdepmQRBqSF4hheDcbheP8wmJVpP",
  "key1": "3HJDmXJC1MQ3m2xrZaUsPQT1Pj38JZmRYC87yE6pbKGDgS3Kx7WBmdbCsQcneD7rt1F6nmfpnrdRQbwxYpLt9D2w",
  "key2": "47q9qjiuBzJi7EkrDrpr2RW4HDeEahf649SwmRDaP8QsYt21QTxKD1FppBXrfjHEDwcE9ZABqv732QVzFLJ2WN3N",
  "key3": "4LnAsXo4SB3MTkYANP4EwMzapWbA25UDad5qEitWv1aeoEwDBGWWZi92SrDPVZgsYBLhSwmLHXbwfbv5VL8DxXk5",
  "key4": "SBxe42DT8ydyp99E6DK2dpYzsYEHSCJ3Qw9Xk6Z9g5G1Br7pnvuuvnjiowApcDCCgSRTNW9PmdshqYjeXBLWqFr",
  "key5": "4oKraK8GWYknGKk2pRyQUtL1TR47jZ6wuA9rkoe5RPXhXV9ZGmKsELLeC1JRWmdzfv9D7h3UdRDvsRQsfxVYtx1J",
  "key6": "2BR8aY4ZztbdThGWbWSohS6D2CBCtiMSgk628kbEqrWodNh92bYPM4S7azbcS6AXy6SLxHDvtMTtAtUREVJuwpDs",
  "key7": "49wUB3PG8k3CtTknNJddPS6N6Wc4DP3mmLzyeHUQWG5iXKQRp5jE3oBeGBhghnMuDek54YvpjaJBpnAvHUGgKhEa",
  "key8": "2BUjp22BcAyhnayvg7oervKyWowvzN8RquxZ3ZDeJofN9RYvTt9t6d5vzxu3hxTUTYxjrgacaigMmD2JMTvU4Jgm",
  "key9": "65gjqNiuyQ6aH11yz1fw4251s2jgFRDtgS3zFGU8heiGzEETVmSd3CE6Z5mmHNs1ckDdbniLKCQaget7sHUmSZiZ",
  "key10": "4qhctk3Knt7Qd7b9SB9wMA2A3JdPJCTtsdqfEQMwYqD3Te2ZJVsMcGpaexgx6KM9NNgk5BYzduXXpMPNnQDLtFNW",
  "key11": "22ATMHcYHurRibGAxZhzSmpKrkK5oxMP8wkBDE3PaciPYMKCQk7fUtGyLkHekfdmhcS2cVgiJPD8nzhJ6PwGY6Bg",
  "key12": "3WVMPGmtWt4kRhVoxNSQePv19njMN1qM2YyEHPuzmoyUH5zhrCessXd4q1P95ToP4RpKnxbTEFbYW3FP7s8MSfrU",
  "key13": "8kYtKT38PTBDPhywDpjne2HbNNmLZsGYfmhGATFA2WR2HNewvPLWjYcApX5Mnawza1a5BCySftDGuZUgXhmzVjz",
  "key14": "2pcCfD8oxZNVfGGrgJxUuWmpsNW5y4P9daj5BpExUAk5UWG5qeojpn3kW3fGHTSNPaGNhdi4MUanVRoEcGwrjM5w",
  "key15": "5m2ddsJkiqqTpf6Veqy9oMWJQhTJ5w8SQ5JZWUEGWunoh4VKt6HhoefCgvkBJ1uWbN7F2hyZnvfJiLhguf848EZh",
  "key16": "5CL1HDChuJXQXy6Fbh9PUQULnUuJFnqrpS9zXvrJY2LXZkEmL7BB3fiEi99skzpjF3P3azirReD4z1ktxsDEN5Tx",
  "key17": "5c6k7CFYcg7ByqYxb5FoYYubRRjxKsZQmVtgCu7io3hzqf4kCPyUWmnEDmKvTF2TxJFeQvZ4wj6tdzD7xrBM5XhY",
  "key18": "2gawCejHuAkpnsiJvV339iJXAwoHen2HfWAJX2W8cs3N4RNd19L9sbe1zbZw5KWmWvHYGD76HcBhRPQPtSPmR1oY",
  "key19": "2aq6m5D2XvsvuTPtMvK5UhbsYmXjEDfRVrkysz8Uw1bBJxYMQEsKhWVkwoH4FyL4gMATb3HZ1apz9zyLgj336gaj",
  "key20": "3JRaz1Uxsq4NGoE1DcHHJet7MfF8JKWyHMhfR8J7k2pk8D9QKApRAngcxuqQeGUnNfSei2hkP7UPcLjAzgyPKQQi",
  "key21": "5Gr7zm3nwcktEvV57VP4Jsd1ArPxZMbxduQZ3WJYJLih1wd5DG3Viy8ZCUjpStRQkGV1L5XDW1Rx1BHLPNGSebHJ",
  "key22": "56num9Yg6eshqnG3Rw4r6vQDiHjC8Dn9auFPW11wXD66TKHBoXCMUfb4ctd52votNaovYC9ZSjFkVBT3yBGRMFEK",
  "key23": "4zsDioX8yt4k6JKyDq8uTS8qjUFSZUUmZHuyKBJZHxECXajoB2Xy1d8ffpE5HRcNaCfeBMHMTUexhH3UahoD2v4N",
  "key24": "UHQ6VVxqZSq866cj89m76699YEZqtCRDmbRVe2Q2qJ8Q21cA6V2u5VB9Zw8kW4anTAk8UZur1aPcxYbyd85x7me",
  "key25": "22iATBs4VC8oCyFgNcauCjK5CYuib1245YusJcR7gJcU7Gc1yh2Gqw1gdBdgBfhHWEEJyT4eZvfDGP2iboWiV375",
  "key26": "2rqRekRMwzY4KztkMArn6zKDchqCWdSCcF41P87BSKnU1FB4BJXE3DTyfLnLXao1AS1KBn7GH9wUr8B3m7N13Wi4",
  "key27": "5FVs53mZTPp2mrPm7X3YMQCXveKFXKnbLH5fqE99NkoWydiSPwtjkcQo97m1aZ5HbVcmEaPsisRoaVbLagWgWh5A"
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
