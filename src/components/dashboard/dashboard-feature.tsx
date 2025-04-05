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
    "qiPTnMeRaaWpFxp2cDDfDSacXN1s7oerNU2syFEMuSmxihGxEDHAjaNsfsEnSQGewKP8RyHFqzRgKsf2m5osAcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jT8D6sT3j591dQDi4ybiavdr9eB9nBzgS1ZyKTNRwB1D1UZdVAJ5vhHV3yjPRjfmqZ9XJAzeJoWbW8EKNcDzdRt",
  "key1": "5Kk8rTx4adrbypB92HX7Q7CBELoQzrXHUrhAHRXeWQr6wkDsCs2aToZkYxWKZS3AVbuGRzyqkBLxNA2FuTM5CH8t",
  "key2": "BmGa61mhGjGJQnZxYfPayKQXVFjpc66PFMCKeB92bQh4ykwues4pARhQvfJVuD6z5iK5N8FHURHWpxiiNpQSBTB",
  "key3": "3Q1Sy5JTkwGNHeRvY4vViQHBLCaVia4aQUPtuipdGS8ch9JXL9CcxkrkjyDHmKxagghrMxtzFYKS1TeLBMYQYgRH",
  "key4": "2dALumcUYW63nB9bH6suirbhSjoV6nBPUSRbKyYy3YoKk7ntsj8Zn8msgKEmg7hZZoTgLYbn9BsVPicogRc1XPdS",
  "key5": "2eKVhjDZXpsEBE8fg3j9KaZiuGFXC6q3mP3CffMj3r2NE72ySW1ztLUGgASCFFKyhAVT7M3L7SH4gGAfJaAZ4jHZ",
  "key6": "4RYpJWYLfUM4Ezj7Ts9u7eSkNTiePAtzAkBWKLYaB337vY5c8xG7hErnzLBmhiNimf4bPMRag616GPBTq9u323qZ",
  "key7": "2owtqzYsNeGG2ps71CiVSnXDkHZFbpYbTWDnEv8CWBUqtZfAB8vHNwAtdRMb96C7YwNA96UDoNZnmZX4JGXQws7R",
  "key8": "36dcbNB59dyWy8UW1ygg4snbfoXyxBaNrzVniM1J4uPMWS35jmB6JiyeWtkHiBh2c9FTPm1MVoaYkw2VUZBTMgJW",
  "key9": "5mmHtm6bgNg34RuMfhYFCPmBTACGnwdzBvMaD1nFMVBRSm8YL4eZQq9W8qvTwusnWthKfnpe9aCGW5WoppS6MKHC",
  "key10": "D1WYbggozhyMqVfuEbHvjkdry5TwCK2dE1jXEZR9wot4gwp1rsZUPMLRmXrVJCk9QkwjbExCzvSSYGcPGRtycsA",
  "key11": "3vHVA5JM4aMmcWPj4Yp6P8Nkws1uL8cUxuKvKS94oL9p5FmchB1LPQmp8GZq3edG1dQAb6qx93XkBsD5VscT1cYt",
  "key12": "3ZkJExJqkGaTYw5fkyoxzCtPYKodSMXLAWRJkD3UCJpnCwxH9Chkp43Ek4mNfpL4xF4XhJnA6tBJb9SYcXyjH3K",
  "key13": "3TDdSGgWU9ktaPgKxB4fgfr5ayg9v8Hx8UgGQcPppXitLYmv5HnyJthpc1m9vNYeehLohEFXyP6ddTqNEUzrUqz2",
  "key14": "5ekyYicQftAF9vS7VRKZArrpSYCXcQmhGNQW8hVCj5jibh8nSYnVm8zC52DFj5o1DLJDMWrK9aLgnBr9qTjKpRpu",
  "key15": "3NSZCjZP16bK1CcNCerYk9UHbPKA6Ac4YBMi1TXVigCfCG2xRAvtWxxneaNjijKcCYLA3C9E3ykudbr5hB1UdFF3",
  "key16": "3VSP53VYi3UdrULbmdkCm42AG9SekTFX8kqHDGZe51eezfS5bU48ecc5J4X9xZsYiDBx5LCTtXzGa7shtsW1GAAC",
  "key17": "5MUDioL18WRShS1edjdj9a37K1BDSZBhXQQU1ernSa12kuo1xJHg7dKdBRMuBBc4NDwe7KeXTxFQfZtKQQjM29YQ",
  "key18": "3PWisgWdzGHdvdEkYA7HakUcbzds2bgs1M8JDqZPnRSGsPS96yT7i9LjtWPtGQm7aj1rXkGXiWiT6xd7nFJrQjMc",
  "key19": "5a2j77xndGUJafRiQ7Y4aMhj8VzFGriyaTPQngV15mSW2MNSQSnnmfU6HHjktsNhe2vTiuSNKhKZh1CbgtwwNJM3",
  "key20": "5Q1UvDnTckXXNLpS79ALBSCJ6esKBrrbL1LeSju5CMe3pHjXPSMqQb5Gq1355ohaNcwpT9yFVJKtvCtNj75oaaJF",
  "key21": "5mQ5khmGkQKsgh26MNepaVBz9kW11tJTfn8Hs8mrvYAU7Lu4jRqqPvi4Twmw36WiKcUGWAsAA5bwF8hfVww12iAz",
  "key22": "DAwv5ndUA2zvbi4vJYFJpXGPBbYXhundUovh4jxdcFgcP62FcpAcDQyD1k4GDQQGHEKfNgwB7eYbNmb66c8WrCQ",
  "key23": "3w3Marg7AjCBV5PcAKd1dZ6N89R8KbHZPL2RaVyABpJNJBmxDvrxcj8p39UfUXxW6NuDifoMDaYijnGtGAgFMND3",
  "key24": "2NkY4wK8gT1XTLMo18vvGQDfGtxgz9gNop3RmSpU3o3HEHmXSpafPvDAetjYRcenUcFFdkQTSYejsucc311U7VzD",
  "key25": "nU3X6S5u2N1H8vCEghJiq5R5BY2ixEZeHfGGB45gGc2PbbqMdYFDNdvrBXHDAGMu8mjm9bTTvHVSTwZkzrmMiaQ",
  "key26": "2KKU5SDfsNkgDbP16FAnzN777dwfjpdg5aa5EzoPGqLrnhabcGDcXM2u3nA6p4bomypybhsoZHdivE4PphrUTggz",
  "key27": "5GvneBkoSThYXhgKh26czCNTxzwECCAxj87qox5iuieHejjP6Wupzg8F7yHhA1fXvHqzrHiFoKd2fvkGbGh4sYAc",
  "key28": "HsjXnLUVRcTp6YSMr3xDPwEUm8jrZ8nCugyDUBNDZBnZnANj5ujHiCg1zR1pN66o5PJpsqqLpLVqe1WqirPoCNC"
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
