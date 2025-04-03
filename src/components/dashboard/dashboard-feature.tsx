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
    "5iun372mLEJWCrzvamsFSoeXfgPfrTPqsA5EDuZwM9VgYFXXzn6yjb1uPDAsZ99FfP2HJaM8KuBsPnTCCeTWHKBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LHSWWwQz1pFWg8mtvsvQF7tSAtq8fmP4NPZtiqA4WnnBVRxnauugp9TBh8gGD3QpxmGu3jzyMSJQTPnC6sFZLu6",
  "key1": "JeG727BJHaVQxjSjmxkvU5ti3UUitPX2XuKVEYeEyhFFeS94WSJ2vWtShPpdc6zwzp7cwshwwqQo116zHd7XVXP",
  "key2": "4X7fGgQeq3n1Uxqiz5YsBqRbAyY3yN3GoXvZZCetmBWXoocx6th28LfLKkrnSrwoX1AXnMFo59rncgDHhYXoz7rg",
  "key3": "4bD9zAWF1muUFrgqdSrr94P2NJcPDyZXMBb9MZEwNjLT8uWZ8HkdohvATg1ZKZUL19HXBvr52KbEciywmBsM95Qu",
  "key4": "8n51W4PxmtehSy24Jm2pkMF4CUFMfbdT1PWrXWbcngDsuYUod3KZoHS9GcyvNtoq6GGaFM49SLpU6aYJY5BSiD9",
  "key5": "sGjxrR8aJeKB55sBV9rW7k5H6mbTJzS4azaz4wcqVL3RUo1AmBQe9uTCcdUGTBpGwADaj3yNhpnw48B9GVbiUby",
  "key6": "56gC2XXxEKVYmrifchSkWFB5WWVsNEumuk6ZLUQsGdDCMaXZkBceQAStae79RpVQ95rNVAoVosbfNTMqpQGkopBi",
  "key7": "4MpckYtxPjFyryz4iwaCtza7aWG1qTM8n4y5Ey45bi7ZFZnKazpBDvANvhendXJ6s7njHpUYsfHQSdLSYteUjJq7",
  "key8": "5CduhyzKw1qBEDUjsKnR2VAd4UA8D25sjAWPVy7WcNokRhsRExLrj32hkUxdnsLtpiAJWCRUuVfXJpnFJ1DQKvzy",
  "key9": "4dfsXMPw6X5R8otqbY8iTpqWKybyGgdd9q3y293s5JR1pVG9tHjQXpm8FKfB8hNVYdfSJqyFPrS7W66ZANVhqq1L",
  "key10": "38xaomKeyS7qqUb5oF4pBsK2VybPf1VFNqH5eauwo3RTbPFtgKTdTenxbDZXnCLuH9misAXJSarLHHzYptBwYesG",
  "key11": "2rMeztz5kJwSAh6rcmPFLmQAaSXcFM3aeDGCQzseWFmWXgpxT5EaSrH6T5xSZa2fkXeaezgqAgXSsG23fm1vMhBa",
  "key12": "2WcDu2Yxur5nZNQVnCgoXq3E41RerHzubyjPxTxHDcHNzfyiUnWf7Y6hnJu7KFqe2zhXhJqjx5pQ3f6cXXDJuQbF",
  "key13": "4K2YmfjLxcmj29uPvvkk5HThAoKhWtUDjBjKdZ8GPVEaDhWWq5bfagng7ZiLmR4ye7Mb5WCxt6PSY8GeykcG6vb8",
  "key14": "3FVH9fp6dAs2taS69sn2mCRJZmEABieL6GG7MERrxVkSSTMJKn3FcPTb9kpeRHuSthAbDJRkTGihZbJsPREWpirt",
  "key15": "2ZJD9mwv1o9r2r6V1muCMffBw3QXWRzxAyAZaG9Rh2LrdomgD1EwrqTLpuq5HkMiXjxaQ11SacM7bS6uSLQzZE1d",
  "key16": "4xQea9GNX9rQa1tcVZBjyocvi3Dv2VGacmeCEES38BmmooiBurKwaiEN6NWV8DumvVpBnNEzYgaRjaX1WcbDjeVg",
  "key17": "35k2EuX9EQQcbS9kj5rCoS9TJ79GeYLHbL2ieTFks1tMvrYqcpifqFkiEzVSRy29kWcS4Q7boM4Jhg2kqW4XDUvV",
  "key18": "26F8W4rVfaMUXTZpoctLkLCyiEcJEkFK1NmxMDXdWENvUySE37LiVvGojwAEvtoEJUKJW1EMGeMQZxq3pHgGh7Gu",
  "key19": "59wQFtTGjoVRWbQZnCP6b7vXwy4jwAc4iWjRVUAsnZhCvgJxFQhe11Rk8kaqXNmTwiMYQR3UAbDNk8Ye2kt1m711",
  "key20": "2vtpXLDs7afeVW1acQewTPKY2CU5fp2n3jcvdYd93ktFyP8AVtKiV1hrf1m9Hkp5zkHugXkHJGNLDztQUeiEFioL",
  "key21": "6WzhL2rUpMShN2YNSPT1b2kA6zYkbUczq38nHoG6chGu8TKjPkdwMaaT5DacpVdJzc8YpEzCrKadW6EKkrsHiD3",
  "key22": "29vSWn6UmKtJJbkkAGKPgKLj5kjiEPktZSLLJZNrx4KnJanAz3E8vurmNUa3Gw9wL1NZWRg5ejVJwtaPoBUA13fo",
  "key23": "5jj7JBKzY71YdXyV5wxU5heWRrkoLUzg9JrDho5HzRtvQwCzcETLwNfvqFFWUtVxzMsyJ3MH4As3T6bN2VLAwptH",
  "key24": "Qksb25AsFkVwBVX2HZzdWfrSQt5bymmKAJAW2DSxRhxhTNxTQkYCUMjzUWfw1Z3j2j4VyALUnMdA5HRbvjGhG6b",
  "key25": "4GqGNxXTqtKBcG6jZr7EHEHEfT4X1PapDEk2Sx9cEj9sKhtwywtocuLf9f1CbDeKq4dkKZRWYohcZjfxegXDw92G",
  "key26": "4mo1cALgVsSUYHJg2tcRCdVv3RSFQ4mdGsaETQYavswmPjwuCkALFfTrkmP8Qqeb1C1xZf8fu4B7o78VvCt9sK3b",
  "key27": "3AUByAdGNG9L2SdjJCqGQummf5vU9txFMnVg6bf53nCMC7gbg8725BjcTyXPS6DNJR8pB3WRatmTsgWpAeWy2gNa",
  "key28": "3p3vfiz82oYMhGRxnF6cpvjfR2HbBqTjchDjkrJErYsjjf2eBTNgej8PTcQT6H7LGZc69ZwJ4GMQL8vTMGLWSV6D",
  "key29": "5iyhPrWT4G4Xw44bsZjE5wAWsfecjKsufBd5HoXAUzyAmVc5s4G6DTnziNVEpLtsecpTPKoj9RZmJs5j6YtDcxSo",
  "key30": "3ToLAiTcoq2K9EoifHyUW5g7XspbDDxXeou3M8MSiCArq79bckGzjeebVUZdY37rwotUwEZLko4WmLW3PoMvhjQN"
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
