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
    "293QAuYv8hk6esBMbbjzrK1jqe4gv6wbCNkMaQZiutHv7sdAAmAVersnMRk5eQGrfxhejSMjtLwCSHGYjzd2JqGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNmFr6Ah7vFhRDUCfDiw3H3jsx1ZoLG3wwhp25YbmAJEbrUynMQPiD4P63ZucBVfikeHKb5UUB2db4i9cuMDEn9",
  "key1": "2nRmoFySbUTnvc2v9WAXitxoq35S3hH27wZvx7gfqqzvKwgMs9cmsnag7ZJeanxo4ufh577JirC9FibsLwbEq1aR",
  "key2": "2gDM2RcwVRMi1eXRTB71od8n88sZ1dZYLbLigsLe59xF1fejKZxEXQyRSW4oyr7AzfFYX1uDfsoXgNQn2Fu9xXur",
  "key3": "4VtNSLTMQ3XBGzZwiLXN3qiA3FrmtCh7VYfvUNLSiw6x8aUqodMvaBGaQ5XwwM7sfX1kxbRwumijtqcytgJ5ym34",
  "key4": "43UPdickaG6Fc7ZP6K89LzE8SKFXqAVhQo2muEggVffTCSmHzRU7kKhCSGnTvUxT5ZhbGZnfwwFzi8fVwQDKeEsR",
  "key5": "4WztsUsPJJrC3SDqrevKjQ5gCYdf6LRdGPqNfyCHL1TTAhPd9hSWRiDSynpvswV1vxsn6K4UADDSm7UTEvwwAJmX",
  "key6": "5S2KJ4AvcyncFPWbfkVHTUnaYqkLbzwBzcizHcxmzTSELqMf4c5Z2bQmxCSckgijuKoWR7h7SFD2GhRKgPKgfBKo",
  "key7": "34AgxmaqPQBxXZ7Bv8wyYQmeYeg4SJSCf368jsHqAG7KobejbGGyFnWCnCynDQwGapJpNUA647ubtnKM5RfXoBSu",
  "key8": "3LYnFo1BhVfsRCCfXjhpC6N4XPjRSZdFThkXiwVyS3q4bzkPdQaeM6zyRDzYxLF75cQrFfK5jkP8eNg6M7Su1j97",
  "key9": "KJrC4hQvEYPvjjnyVUJyZs7Ry4VVGKhTdb3QR9jhSFXxfhcz2LwTds2gGaAefGUSEDBoeAvBfzaSJgHtRfpYr51",
  "key10": "5jq6rjw57i5LGiJkEDgP73h1myHDJhhynm5Adz4g6N7id7JfCVCzcBAUtc6kKjoTzfeNQmSewFw2FWcKeNoU2KyY",
  "key11": "2Dpow13FFr6ThypP4AgvvHmSUTxuoWQGASRdbgactTvY3ppHNxHf416b26SkUCsca6Q894mHTd8Yz8cfJXRqhT78",
  "key12": "5JfDPLQu2Z5pxX87rxozRDiz89zTAXNsSkQfibs53xxWqqoyrLkbVQPyEW46UXM5gMNEu1AM1CAeRK7Qpv147r31",
  "key13": "28eCtWj8vYidUqDKKcokPdrqi9ULmenKm5gfVytfk8yShyVWC9fqXcpx5J859e8jKV38mNUniDEvYwDSt4e8aUWC",
  "key14": "4BffpZuTSVpFdkqcTAfcTaVVioZGGLaX4oRrpw125HGTW14bGyXtfQdwYaTiy9EQFwbggoKKEmnwzcNiH2rzEVNa",
  "key15": "56U2VA9Abky777zcu9Bv5NT3ZqunCXQZjM6pWAL27DMbichDCknypSwgsSXwD5tSDaXLtmmZj6x8fWF6ub2sCZZD",
  "key16": "4P5cqRisQdYC1dHCmgcpWMdYophky6N24PTFQhN2xnnUfQz7h7Q284obp7oYgBJ3sZDB7xDZYg9qKKzVvhAur1Pi",
  "key17": "3MSjihYhcVZRhcKtWF2Vcav2aUjtrc5u5Qxy8PnGQcbB1GBq7wT84iBf3GruEdTmconA71UjYqY9LHnhaU4kKk11",
  "key18": "53gq2pP3UgyF3NuuPSih9ukq32PZcP1v1kQDJTsftTURp9MfVhJh1D953329CUdP3PU7rcysVA1ewycg87jQWeeJ",
  "key19": "Hkhhu2cKaUxxEcvNwU7X9vtw5GXzakeJMiJQ739wNVU3HE2kHoQJ7WrLqdfKzfGVJrzm2YvfRADHTSir7JEfopr",
  "key20": "5Cz2xW7e7TMmBddHd9p2e9mdt4wqL2xJ8j5577xtzANwdwwBy8TjuLPFQrbRGhGBxSjirBM1cfJ49K6dd92HHM3m",
  "key21": "4wqq3eV9Cea2Ptqd3mAwaVV5K5fuv6ZZbt4KAv9MjbaDJetNPKYj4iX9Gq8Kri2ACQzqtMmXhdi4TqCYHbdMweqB",
  "key22": "2MVRYzQyXcvmch8jyqC26pFXa1b6E8y6qPfHV8ysWQebp7jqzBDEYFxvpk411DhHkShkWuBK5724n6F62nsrN3VS",
  "key23": "EvyNcAMPNdZMia4AoSHqh9hLnZkkg7fqMspGFJN9iJSuRVBtzVoKwWb2Hxy8MRDyzaJ78DNHrA1cXuJBn5JJpLx",
  "key24": "5CZiKV8s4ntzWKPapXdS8cw9TGNSkL2YXgcYARDpZJk3EswYHFxHWoRh6JwoMzwEQZYQvVURXQN49TaBUpCX2mkz",
  "key25": "2MTvRSekT27SiE5EvVpKMs1abEXqnEfTrrvLwJQusADgpEYkHYaTgT6feMoWjkqoihowShaEg5EGSje9Bmms3Q83",
  "key26": "2wofNfKZxKdB8JjWfZ1Z3CDhddb64deCE8ez2kp8HUSZhsU87k3ZzL8Fzzch4u5aCUjEfvCcTwFq2arMCkERhdsM",
  "key27": "34qAqpib2X6P42QNay86V4etA2hG7KdxJfajsaE2g5EDSKW36h5SiXD5zL6Pwa9USq46p59sKZCXcbSZ2VweLnpH"
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
