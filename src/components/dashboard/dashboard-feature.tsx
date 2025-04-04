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
    "49PvPysD2sEc8eQ3WLUSCpZLMb1tX52q6LGEFjxPxSBm3U8XDf3mPwExWePeuGXbPoHJgbBN5RrMCrr9Aei4D4WS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tSmUSp8VJdSypxjFHkfkf2Nh7NnMW9i59SzGfS7HhgHEYpDJpMUdo3UrLkURtbCx3oXgsJK1dq2FE1SnQSXPtum",
  "key1": "4pndAHPqATE89ibLtiTNm59JtVZCw34SxtPHMhmHsnwtGwtPWyLxzdWa8wSZZ6H5p6jnLMMqJwChyNMKoeL2R2z2",
  "key2": "a87dd913n4keXg3MuwoSReoG72khvfuqa9bmDDxJGiaVoAyWwJXRh3javJWnL6Y5UdfednouS8gUcPzjU8uhmE5",
  "key3": "5Lo7YonFLtHyL5SWRSBjPfJA3eSRjtKTRcnuAdmg4kYoQ4f4AHPtxWqYSu5vAgPFUdYvfKLbtyb6YAz4dgYxkfby",
  "key4": "5knZmbKNRNBaYMujAVfL8DxAZ1NMjqrujpUGTsa8d8QirSG6fjfW7nZnBbCz4GMv4MtdjwN8sz5AgXgRVqTYYEzh",
  "key5": "36aXFdnEQXKVapBoSrooPEC4wNuYUoQR38Kt3VaXtRLFy7V8XEsEJyAEHRnE6aHP3UhrS5ty9RFZzuMbqXPws2s3",
  "key6": "2Bexz3LEXD4W1obPyQ5ntwxdN8GSWxiVFGu2yotseT4ftL1mDZCSAyMVjgHmPfJQvcSU8U7gPMKHnLD5PcgLsGgJ",
  "key7": "4TcdqDNXMKfrmav7KFuNvZK9aKhk8qphHqUfDWQf1pcmoy4zYhTTunBYXC7GQga2pR28kNWJt4ivc9Vy53vTMBwi",
  "key8": "4URzgFqth8oHwTjg3SGN328Y3sJSTvPQxA9sTJ9cnXk1PwWU2xtWVSA58dNJKuHMksB1M5KDF1WjShNWKJxMVn6U",
  "key9": "45DSEEiYg4cJWgSzSgp2pq8Vn91dbt54RkpRbRHQjhFkQNViGjYRWe57J4GZJHPAdkU6qVJ95nJsFEDoD1kxyPAJ",
  "key10": "32kYboE7Q97nFEoJfsESpToS3xbVw2QTcr2YEtz41ZxyqCGW8VW1Rqn8oXJa6ZeimWg7Z4sPAmdQ6NpSqJqCiZ3F",
  "key11": "e4ApjWWvJoYSBht6wNyzUnsPq5FzBZWB2qyVYc1TMVh2a9Gzpjj7DT1Fdn8iZi1zhZbkZgSUrgdXyYs3hxMcHrT",
  "key12": "2Wkt6FYjoxjNy6XRzNF7R7pzXbC3Fh7k1pfFmeQt3mfBDuRGBzQQNRk2kxZ2rxCUVfezx3nYrNNYsRseunCnG2uR",
  "key13": "bkf71D5MBhvz5sCp7sCVpDAGamxhF4XhoP3fqoTSBP7XK9HTkVtk4nErC7BjqzkCP3xzrB6Ui5aMPpAo473SmMb",
  "key14": "2Gr7Tw844K6JZE8UvtBhBW2rmaFtgM5YrbZczyEiuiCSxRzk6bhaM5pEduNbPzJsTdJZbPCDqqpjpDoynVzXGXaF",
  "key15": "5kk7ums9iDSatvAHaZWiXnxcPNn88sw1w2dPozi1rV1s4omc1MZxfc8Tj4wBpzMviRmCYLpw2L7mMHLJKYmrEgmH",
  "key16": "4GGBnT4x7741bmENKoTEx4GK6asSRKTcPq6XwEwE2JMGFjMHa5zB1KMb8cVDD347q8pfXEYhA7j6odHP48bNgqY",
  "key17": "nZWLruso67xJna1LytYNtp2ZTPqSce4AA2Xv3zKDSRyovV9vacQc6wWAvE4vii91armML6CdpsRP7P1aCNfSmmL",
  "key18": "4bGZYW3xN5KWM7gFLAKXp3PyNMF5oPgaTZrhW5HcRfxe8eXeQWa2ArMbomzB8Q1397cD6tyNDQFQQqyMH6XBZK45",
  "key19": "4ea1RWiS2EYDCAzhYzbvsazu3CqaN8SLHuPQGrafhgQhpKWEvGnj1fD8omKpAjpfC21XrpLvv9hDNYVn9caLh5Kc",
  "key20": "4bNrWR6BUDhHV3vz4dGDzAXBNrXBgMqBmZkahMDhS6op9VFQ4i4HN4iiSDBNXqPby15xVrJ4WSkyUkiCf3WzuvgG",
  "key21": "3HDvph25VG4ZVnwAMdcUnqcSVBifMhwVCzs8z9BKBB4NW9ZPh3Yk9JK6yrNJGUYfXM2aEVbApG3EAu2k5cJqVdDN",
  "key22": "4YY6LkQndWxtxUuBRpTLG64bQCCuBYCUGrassBL8jSY3c6E1JgBHCYRvUuqK3JyZicrJKCYs2HHdjt2nFy1DVNDY",
  "key23": "2eGYfMtJAX3NWJWSJdBBLhV1zMfLLXpdyh4vuzyJCNYrsKxhzzL93yRAvHvW7ivJpKx18FjZdzpRbLgJKACWc5cP",
  "key24": "4XkkBAVg2dDPFD9np8Z6mEgJMRaDgxbURrBN3qn62x1dGzGFsZujGR9KcQGBt5wwhJB2K5CcXCRjNYbFBWP3xziS",
  "key25": "AdzAd4bS3GMkNqzi1FW7Ggmdb7um8nHzvfKgrdn3LgtL6Ch5b15xD2Kqsv8hmogafjRvVgvmkLvemuUWETTWCSr",
  "key26": "2KdKQcsEFMcDtn7NWmKL6tmRm6zbbKPEj3LdV5icp1uzQKYrLpyEhf2SHSwCbRvFXNZCBiJkPDBwwmwAYLbWxEk2",
  "key27": "4kaUxzANfJ43jFEYRi9epVRXobKzWGyzhWVyfbvdTzQYTgr3wJvTEtWCCtwZdtJXRvbJZ3eU12HaH3xdZzdjovzu",
  "key28": "mbE5XXgtw6kfi4PUhU8NuovYWQd1U52zq2LdWVefPCFjaCGn55NP2ph1Sa8mm5zdVwztxCG5MpTcRL4etWGdqik",
  "key29": "2Z8o9CRmTEAhAsBqc59FwDrrZ5XNGvs9rqUAuSqmVedqGmPLbKyhZ99JWXtQkT7KcMufZSaVdw2YbS8PFSKhiAvB",
  "key30": "5j9ktJscsrgxS6G4oRid8cy3TuYzyvzzpAanuJt95anbWjb2fd5XK2Gkdr2KLSvrskp8nQNJzZ9fjaK1GyGpr8ch",
  "key31": "66niBR4HyGNCL2cL1iyEPi3fX5SfoSwYo2g8SauFqm1yW4fJNmNxr2snNGVVnNUzCMDMLEZo58kxBkTPm1Nw4Bej",
  "key32": "4uQeCXtECDEhMxLxuHFFHphSu1GJ8ztDqXb5FHjTqzN7ztZRQRVqT6RyDS1AGMNftS3kZt1rVDsMbpPoPZwApV9g",
  "key33": "2UqbUwMsqfE1JLKy1auYbqovpvfebBwkxMFsdNNqV9pTqGsBXHV9V2CUwJ3kbfQf35mK1X41qLDfk8RgJHAMB3me"
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
