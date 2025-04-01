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
    "5d9xhfGhjgYqkApVopxky4aYSS8a2kFYrmbfssEmDJtRRPQeEU6UDUknn1BPcvQxhkYs69PYUsqT7wxhEQDx6SLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NVkuFJwSwCgeo37uCY4MpTkFmVv9Rv6neYzdgWFT6cyBeYni5H7DVccydXgB6QxqmHrvJtJzqTNFq3DSBFK6ycm",
  "key1": "q4PZd5pDBYJgZsLzDRxYrjfP8qvX8HsjcM4ctwA5ZnLuSQypwpFb8N2adWfsGsQ96DVSmaCJ7WKMzisFg1ntZxz",
  "key2": "4WvTwVrAbpkRRyYmKnDCHRX5aRZuyDneXUtZsXrcT1DqBB1ch3cxQEk2KehPqE3npJF1keyVPtJYkw3yxGMEjzKa",
  "key3": "xPwsJN5NrZgfvodb1RffyVb5QWaJZQwLcVhrqwX71tdasna6GFoUoXCKAWNEfeQCHPmnYVD1xJhX78vt1ugZ41p",
  "key4": "2JE5ahiSCmNwqMoKEFJ76pN9zhBjXmhYPFPY7asP4uc4cy1FauB8r5X8VbSRZH9uczPdiHp9Nrip2EzDSj6AnLjB",
  "key5": "2hWZenYrzbEuBji1yHvPP2V5bFE1ZQDAdaqmH74V5VgBt3S7cQPZ33QqozWdf4Aw53pSDpz1u6YBctfXzhQNsWXz",
  "key6": "5nMZCgNhTe5G4joMXbTgQEoTM2TKpFb9fNnEFzgUyhwk86CoUJvq8Ys3hbo6UD1K7UVfDqQyCnWjhm2dMGq7AEYr",
  "key7": "Cj28dXBrheYUQZXpJHbh7RDJvc8aroFa6PxuqrfxEhiT28o3Q9jCS99qAh87DR379yXPwhbBp7QXmjwK13eun6b",
  "key8": "512kYN29R8mLbMS9kHZ3pAKdt8kfXLD4BHF4mkBex5uP6rRKmgStHmTubT2KHr5yVnUHpUBTfwYxyJmPqkUrnpBB",
  "key9": "x3k1Eb14eGLDKofRRzQuNSikNt1ZMfmtPhqLTYeB1kGM2GuyBBSRaJBQKBYcBgLKA8LqjBvrTHZkB1MTR1geA3C",
  "key10": "2wtxjPWSiLmjbAxnQa6tiaTJz7zyhWRHUrmkxJYmPDVrc5fWGviXd55pF4YfmC9x9fiTkoYe7RszBkncLVT3rDLp",
  "key11": "gDNzmEL4TmQzSsbBnmaWdfNcYWq5vt8DfjYwwG72xcfYYFtLVFA8Rzd8i8LYSHjA4JeV5izqC9PWmNdu68Nx5TP",
  "key12": "5kETXzV1hwbKmqKmurEcjBX3gMeywTA55akhZzgxYSdhgMQMsTHy7gMkcuQiu53Evaspxu1wgKp8Tziou6fgcpsx",
  "key13": "56VmBusD2nDWAmVsYAwGbgFSkKA4YU4FEkDfAqcUxyM7LYNP2j3U3sYdKoi8nCWRV6bEjEThUK2GyUNnEKwH7Gjq",
  "key14": "58ytoyk5X2hRGgScyAwXge2XgpUdGNG8WBjwJmNmpmkVSrqVLBwx716cgrR4qbsnH28i1wiRZmERmBi8Hh6fa2ws",
  "key15": "5AD1MpYmoxBcr8y8roWGFREXFkCyzB9deiPfJEx5DH9ipuUFdgdT2dXjYSoJDWvFuTyQJ8LmUMLePCwEVhY9JQ1L",
  "key16": "3FBjqb3kX2BtwpqDRW1682FZE1aYvvEKbuw5NUmc8AVtFDswJMY77PjsFV8ajzUxT2PhdthJLEP8j7YXoCp4Now1",
  "key17": "5cBjDpd2N67F2L2BYGztXBPaPwN7hbqhsNqYP9VUtAhsCKr4K6b5NFTR4sKujsGwuMu7cyqFJn7HiesCf97gdPCQ",
  "key18": "3swvL5xb5VVug6AFgLXAWX11puc8Rbop4hSTH86HawP3VyfBc6xxNxMHN5YHades5fYDDGeqWvfEdV51xk4HoKk6",
  "key19": "2fBBvjsdFni2oqLL7u1VWubTheRcoDMGnbCWvke7jMQPN3oNE3K9XTosqJqCMUbi8v3zaytF1FtL3GsnM1Jh53Lr",
  "key20": "2i3fgdfJYU49cWzJB2h8yxSx9HYwVvKYoiweok4kEqMiTidsuyJAc7KPms3rSTPk4kRAoG6XC17oLx7wEojUJWZv",
  "key21": "3svFWTiuTSC5dAZL4joGixbsWFFxZistd7YiVMbV74ttQ9x4cruskPeFbRqQ5N79dhsKxTzwUHGcVqZsPCKpkMYh",
  "key22": "3YDdoTtphrQfXmZ8bj2fhHcfzVeaHRDHdSYj5RLjBYK6FCg9EumzDChM9EKW5s7G59HBxZhubTwc1HLeGV8niGhc",
  "key23": "5oFjoE2vJRMMY2w3BwakoNjU7CTkbLgpvMDjTSH3VZLDw5hkFvyWdLEDg59x83RPBf8Wf9nEbwyAW4EUbbwj7uMH",
  "key24": "2UfEYrKBnZ1qp1kPnTisgNoikX8kh7nYD199EsxpzgLQx8eB9nLgQUsjPm2k4mBvr85A7SNoqL7GPKqBKP9s4ZUC"
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
