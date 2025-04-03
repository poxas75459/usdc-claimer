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
    "2UMCWaNoDpEGKz7wgopaRPyDzt7bDmFS2eWF4ZH6hLDYFSDG4gJww6KCL7SnwvfXUCuDsYAW8eNALq6FWQF7Biyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k4nLVVYpaRTAUuQJZaM5x4DAzkvw4sMfGP9JfSKe9PDdTucsdCiVoXVWGHwwFQdrT9enQdChTD2q5VQbLWcjLW6",
  "key1": "61N3W49ehLgrSjDPk1Ny9gZywFw5B29bxiMoVF8oJmNGDftPtcMkdutRKP6dd8ww8kND5DGJryJ2Btc4a6HiN14P",
  "key2": "4BvkZGWtUxmVpAQwWwqrwKfSJemM5RArCqdzFoveehSxFwuoSxDbtoKjfwDvDT84wwBTCUWyn3iPEucZivHGHJ3E",
  "key3": "33hhHbknzzjCUEvcWtGaKRuPeDBtNt9ZCvWiJQXVbjjHLTn2XPe8jU7wrC6hwSozrKRYdqcP7hifuS8GTEQ8tmvT",
  "key4": "3PBChV3JbfSDzpS5Cbc99ECy1E1UDNRLLy1HSqGqsRXzhBQnWXBUPzhbjqdHpsUNXcai1WHEWLxt8pmWGka8pvfY",
  "key5": "3KnrGpnLHbSLpBAdKX7C5uMZNZaxM9rBv2BtqnFuihsJzxZiMnuab2BDwpH831aUmwnm6h1g1wfvNCQjECj2M79q",
  "key6": "3rcRYobh7twC95nSieHumV1cRWSUG8QtYUxapS2qnuVztN8od5UgVDbKRG7Wk1N6HUXZTgQd7SHhD78Pve2MdjTC",
  "key7": "52vFctuJxvPmBkW86tKmwsCWois6b5Ra3k2KG8BnGFevvcJMMnKw178j3iV69XZus7JDrBRekWR8PKKRbFgAi3ja",
  "key8": "dKtQQLekLQSgzTD15iaJGmHuFDejVKnJEg5cTXiwdS8wD8JCKBxhHUSsEcqLjbP6mrMoTGPdCMT4rcPz9kd2TxL",
  "key9": "5qhKsEQ2oBDYP2MQhDuqyUBHoZ4eEDM9rf5oPJiNXwi7d9uLeVRbVLpbjYZ5RNixxcQ2GpqxoJf7Wam8j2115KxC",
  "key10": "5V3xmu1jaY28QvbzGCy8GTfXVvryFSBBSHWXhDguEM34MBPc37xv4Q29wT6nppwqYo3WtL32QAjjsZjZRfBgsxhb",
  "key11": "3BkVRfs3sEbLResNtjd8HeSyBYZmGEfMpE2zvcp1PKkapcyaoRPBY95eKz119G1uKwVjEw35uEeaXChxnW5xs38b",
  "key12": "4zSfL4GK8sZM6yRvcBp73dgEesAezXXXEA7PXBPggJd2cyhMNo58dwQLbuhpw1iRMUQpXWTTErm84LwnJnFJf5v8",
  "key13": "5GNXLGo4zwhBxhv1PWAVLR3KnW8qiSyB4FuAFZZpVStofJNhxBu8zgtLiSdsAnrc3KRggDFTouaRxQhKtq3Xa7Px",
  "key14": "2zAW4ijBZWF4m7jhD6nCce3oTtc6QuZULGoCDsHMgzyQZEcMvCAnZmwKDrYgAQABsE1BFJ7vrjQFitoEXyHzZhv",
  "key15": "5NqFXM1zFyjRTRC6bs57q2CeJs7uKSrixFpmGPnppLwMgbyAmpdNxEEHNqLX6ZcoV5dUD2Ma5nqVo5v1rh4oZVpp",
  "key16": "2gqZxGA6z1M3fUAvj5SLXJdt9Ymi3XbqEfoye1vnQiNzq4pHHi44f5YAU1cNPbqReDzp4N3GpzDzZuBfNPRi4J61",
  "key17": "3HuoxqfgqyYFHFuckYw7PtritXgrAmakxVhXH9nijzgzUcHgtMDwkUYuEUVGM4Fda89WaiSiFswTkGd9mQ179txT",
  "key18": "FDnhxnCmXRK283n4AYeJHtVenP5zMg782qffHkaV3YB1eBLZ4UBg7hS7jgEVSb6UoJhvvB6KLckPv5hwxdJtbwG",
  "key19": "5zpfQUNzKJsmxQbDnAfcJ82wtFwWipLV7WRnSeMvi6Q696NkubG9NE3RfqfW7mtaf4SXSjM4tRtHM7dd5SwZ2KYY",
  "key20": "jjoxfpfaB3VhqCWXgEkLhGBki2nzcWvzsMKir49hHgUiEHfrgPZxQQZ9kKSN4RnQ75CqD2h84DNvVftA1Ric9Xm",
  "key21": "4YXz5a8qwr9PArMmjUQchJHNKE9ZJ73rofGQF34NZWJBS1hxXHUHiAa3hH2E5EHa6JocXNRFBv82XwwYULw8RS1P",
  "key22": "59Y5KCfcf88fJhzCfoT7eUWu7hbrA3qPwFWaN56r4kNxvTxmVdpzacngg9AXER7nLSXPeWjYWGvmY9ioZxZUmjsQ",
  "key23": "7MPYg8ubxxy3nLHLjfdnJBg8WDud4p9kR77cfGjujMk3Lo561dAMBzACqLmsgzkdkbDm2Tbknefkz33GzAX8LMi",
  "key24": "4VTBGeyPbUbu4qMvNoymkGUbDh7B17zdubeXgbJ4QRnrWbrzV6hNwWA9hZUENqn8b89BVv2QkAXNq6jSJGJACfhG",
  "key25": "5mEn8ewkDg6LQXmqzLgt6Xt1r2fKYNEk9S7DB8ig16PQ5kEsbn31Gh4MzNNjDAqBeRNeG9ebTi4Y3TJWNjMKFuU6",
  "key26": "28bqXtixN2VED4D69wcA69kZQoiCnbGpNgWtXPcbchHBsutsx1tmNka9KBxT3gahVyoMVEULXchC79cZdpzEAJ4A",
  "key27": "4rRpZn1i2MxZqUP4kANExH1rg2drDoCu33SpU7hmZPSmat2kvETjD6RxSdJBF83xAbBGfsi3aN7xg8s93tKuamL8",
  "key28": "4vicbmjSFkZVvrpyvAhTV49p7ZfV622eyAxkzhLu2yupM6JfEUB31UqQJiSdCkn5f3gRzN2NrCLpq7Z6BBLcQNNi",
  "key29": "3Szx64EhqqHWYZaaLkXHqcsdDTQo4AvDBRqm6kaSNTkvVR75YNsMeASJLtYTctXN6GvqF9tWdzVtef7RfnAEyZGG",
  "key30": "2BNHfyvupU3JHP1fHFPoVH2mgBagsa7smCgMFSL5GPMwcDMaUJixWsx4vxDdtiGXCzGxjdibB51d6TNKRPZBCWY5",
  "key31": "4M8vt7kmcUUpyGnfaiXzqrE9xUjdUxVW7JHNWnEDUhfaHeTEDdKEXj67g5Wk5uDybBC1LbWZEwJmB3nVERTDHevA",
  "key32": "5GGvmfXFvLGwJeNy979QV3n3yb9aqRB4w6PkcdN1FRRAXUX13mqtqYUSE2XgJxJhgyy91PeoGVPRgk4RKkE6C8rA"
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
