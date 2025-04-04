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
    "Tuoc2UTZnGKNtGRE6gYdhr3qHUpVPMw4UrnfojLirSXCxfzCDUiCiVovCm8SbaqrPbbS9E2rAsMxsLae329WZnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34HUM4M65Ye2ZP9xjDa3LpNPcyKqAwWBfAQEKJ4qkrC4HGpxkLYDdDjXvpV6K1ZDgFih2pUaFWTPiEty2VoqBZJq",
  "key1": "58fFfKxFxgA7W1tV7Z519sY8uc2CBtS9f1PNc9ztZ4stNn8dhbWJwEjBnNrVCSahxZEngM8JPxn9JtEbMUE79Kac",
  "key2": "2ZuQYfcJv6RV9Mh7WFjyGwYJdaixw1btDhzs4PqPwWwvd4tiWfAXShNU8f3kD8ibz7ZgDPcQ71BhCkc3Gy4gJ77F",
  "key3": "57w5aP2pYNiyzycMJi7CNPSQCzaAYXG9p11hudPpwq4xrdpMqEAwtsoaRockdB2wmnnXB73BxdE48QFsxTVKHjj7",
  "key4": "5aaaNVKTdYPQBszr3vwp5DzD8pLsttkkGJBD8RWN1oWMRNZfvCtS79EuTBXCZcj78ow2Nkwdp6AY2NqGGnYuNE5M",
  "key5": "9umZ48x6gQrBZivs8Y4ixzxdu5Buf7N994BJvEaCpQuoHahjCrwnZtmQMX6GKKdFZAP5CBMNG6pJR2FgKnBDnCA",
  "key6": "3zy5NYTxXNcC6LZDi54BMrBMxwZxNPo4vTVafcJRj8o2danjPaSgTB6cbBEuEgMXnZW9zLCVFfqvvm1To6DbhUBa",
  "key7": "JQzzhR8cwVAkxJgJC3j97tm41emgNgxHnq6M17gyRCbGMgREhnrBCdLAT1iix2xaaZWnTtsscMBsTUM9d9AZUdo",
  "key8": "2xc1nB6w39isA1UWwo6uTu5GvCJYkyMqxL7YMk1tcJTRrLbf25AnnA9PZh3c9DRxvN8cACjkQwyc4T9YRpm1VMP5",
  "key9": "2Gnf9sm8QJbsFCSKw1wGnpfCEMmAqg2jdQ7Kgv4nD2Pr3buPguRRG2BeFakQeE9YEnZoYzcAxdumzkmfTgkeWgdg",
  "key10": "SWc8HjbzMMhQwzE1Quq41aeQfj3BAqwuUpvo1bS8w4vxjQuJkJBfS119J6Y5KeTetrAuAKteQky9nSBdVDPkwUT",
  "key11": "45EY2AcEZnWDAHLXyLMjAX1FmiwC39bEAW1yy3yo6DxtyiEt67wYknSnf4jWJYavXetXQcaZcmMZXVueThNQ2DsP",
  "key12": "5FFs3huTtcGSWudWw253A8sJ6fM5WXQGahfjTCoPDL42QMQ8ATkQRmM7DmcCk3TgWUr9mkp1mJfcQxzCSu391dHc",
  "key13": "5dpXGmBwi6gLA66DxS5XBGxgpd8aohbmFWqTn3uzURMgfk1wLnVDs9sYaZo5LqxFMnpGEpdys9uoBVXH8yEubwh",
  "key14": "5VG2ZFJV9RKv1qiUGiJicLPT9jTTRadiwH6vj6SjVXff97JqqVk9Zru9Bk8HGhhgPBqywnFN9xZjbQFghzB1yMtZ",
  "key15": "4Fd1UE34eoXveWvT2R57XzUUwZbBvSucZCy6HDxGF1V9s1yVm1oaSiWSscuR79SHWUxGuAZ3hp4vXoaYJkMoEsyA",
  "key16": "3afh9wxU72cEa68HYd9kJUD9Jxzt7FNvjDFwpHL2KPXN9N7DCtLZ2uw1thJsn8bWtcs8aUyUD8coDZV1Fos89tEM",
  "key17": "23dCdDnN8fs2RYMrMZeAm42XGJJUEPQ4ALG1e8JHrPRHCiZdXYWNCqAXDV2Ytf2ftYqGvVpUqoLJt2pC6C7CxCqH",
  "key18": "5Ue54dYEBaJTUPnWtKAaiur77mTggmhSSpFXEdcUaRUEwJvyDeBVQ4vYekhDjRK9hy8JkjLCBKzy83vHDV5xgRHe",
  "key19": "5GKbbmGvwKjrhEkpc3FjKtVZLPrdkQPATPrbnkjtvDCH7E6FwjuAxfycPAGUtmM6EiN1GMJDdcDsrmZeDBAZhs6V",
  "key20": "2WJ4vfa3wuGFADYMu7snZE5ogtvVA9NETjk7BFnfh2tTY6VMuh9XXTozTUyyhUHXXnZEun38qNvb8AfYLVxAAfz6",
  "key21": "2M1WgHtCKZnyTZaDhNdA46yBA1yc5SbbXeQk6dNikc4yeWxYLHvLEU5YsW2p1Pc3ietGtEb43hwD3DXcssBvY57J",
  "key22": "4TsHRJJZsMLiHfYzqM7HQEza2DdrooZ9pXLxAKbnRWyXU1Yk64K9KDEckBx14H1bRmGo391dqjkNxCQ9vx26gT49",
  "key23": "3SshvXk2uhom3JoouNwVyEgSyFk5tmUvg4NPiwRqhynCFVSCSxa1dsYaEH75oveRs4NzRybTkAaAwWt9EFV1sz1S",
  "key24": "2wUHuv3rW8fNLx2sXS5gLsZty7HHQdcFthV8A8roqQQAxV8gXzAHXY5zaeQEbQFUB6xB5Bdu7KU1vQ7gymYH7Pws",
  "key25": "4MW6TANtRGnGpmYUfmHgnDvbbEw4DgZLeKXbzpALMsdSzG8UNqbsxtY9tyXLBiscUEuYEeKG8H8oKdiE29vgV8Sc",
  "key26": "3kg6ckgELwi9xnQb4NJg4AQn8wwFSCMCa17Qs21LTvrD6TdF4CWUwPYggzQecousiptf97iAPDynumbyVnMJjKBD",
  "key27": "KbXU1kGNxpjeGKabXD3tX1mmStqQ3KTpGrwfv3HtEUHG41uv1YSfsWULjEnkCixhWeepZsAEBHgyUpS3BMDFnTi",
  "key28": "3DQeXWLT2G9bmibXEeXvH7mXjFzf4UTNAZvYCGGeFg5PpDHsu1jmPCmg1FCg9kcfpgNXDbL8nUgA3xZ7i4kBGehv",
  "key29": "5rA1kEo4wTUsZEY1y16UP7Q3ziA1BfLtTFo1TbyFKHV8fUdy7pBdELCL7NKNYQ1Jgp1XQpWyaBBbEc2nkPfU4y8G"
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
