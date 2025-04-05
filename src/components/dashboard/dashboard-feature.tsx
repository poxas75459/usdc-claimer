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
    "3FfQMYG45HzyyncmGuiuUeoVN7WpFfyRCvUDGfdDrxeUiAzatxRHBzKAEo5Fo6WXm3jZWnsvM6UTPGfQQBrf3zKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mJ4YYeju7YCKv2zono9dHh4aAXRo1WjLbmur4ExLZ4rsSLBKw9mTwCWQKr94gp2sZv52W6ZkmUdUie4os2WM1Y6",
  "key1": "32TD7FSdVSoYV2XY2cd4odi3hQdBFhqNWrtcJPwDF4NVvibNBFzbDtnnejJcnze7M1fQJNysQyw97uUwEb6YEiYJ",
  "key2": "3GbLXn5NiDmb7FtQ6Pod84q9ekm6y2z9nv4JHFLwePt46FrrhwTQGiqpi7puwzyP3sgctcxKL8bnfLrLFyayHuQu",
  "key3": "3qASCKNX25eqoo2NyE6DQrYVMBa3Frw1rCPUBVc356nH9Z99QBcKLu81GiJtvfgwK8y6daeywYqng8iGS5ZVAbaA",
  "key4": "2evpC3npNk3yfPSWf4eLmKb7w6eneDW2AqoUYA3SGeftseaj8vtU4Ezp6HqRukjtmuiFKdFabBV6GoZotdASzMEx",
  "key5": "5fGuFi8KExRF4AXddF5Ua8C9j6KDphuXqtiw8M4caEnsCPdXrqsYytzA6JUXQWwhPh7wq33Zk1AwX1vy3nvqA6zZ",
  "key6": "62f7yAEe91XNDVc23kphnSQNZbnnQeoVh56MRGjUZpx3tdvJCY6yYFyXAVNmWooujkUzvaT8fX1HxZut7t5R7YDa",
  "key7": "4MBuDC1G1o6pGzN6NYwAZXNLAp9cNS1kVQAYJDBqh4Bnk9DEx8BHygtjwYSbi68nH3giKWnBvHjcBzXcrZBbB8rt",
  "key8": "5LoCSgSh89BxJbaUeF54HV2z7teQd4XS2pZDN65VkWRDx2G3xcGzwL8uoKbwpDaGDmxiu9yMvRapCDjAkihjouPx",
  "key9": "4ugMCb6hsnCNKFGXPxn1jUMAd1M8MAD6x3y2tW8xdiippSVRWU6fknHwYsTcTP3v8o2sf1Hq1FvSg8QHxoposWxq",
  "key10": "3JRtLtdCZqxzYc2SHG44gv9jHg8hsT3BAd5Lyakwza14EXpbpTjyZhBTSAD5na5TDaitiEb4XvdT1TGMvSJbiVzm",
  "key11": "64ZUmjh8VBhatRH7UALvY2BtgiG8zMndbSXgE5pMWRCMBKfKnraa4RsEWaKb1Tmw9Ystr75d7tvaEwnmkhoUnKCg",
  "key12": "2rTFr7XqDUPP6mbKpeoT9Lhu6pLSBxKFDuY2JTVCGbmazFpNR4WLYAHyJxurMFdCmQwR6ncwdNLyw7mkJ2ZBD9YU",
  "key13": "fL5ff9DZNPrwcHPAbEZQGJQ47GFgTU9qfostPGet1QUmmtfGqbgRebaWhFuWYrRsPcMvjpKVxEDEmerjCzBVLuB",
  "key14": "4JJK7Nygot7Lznyw8EYF55UQMpNQGYjiT44zwiMFrgWhzGNWHUTpcPpzErbS9wLt3eNSwrUgDqA51S36TLNEbaNu",
  "key15": "3dmkmhmqikBtYX6qK3xDs8s2A2gBWFQyVJQZuxG5x9WpuEoxP5jk7K5Roh5D7ZKGdwKfHHaRwAmgqC39Qxqc3SEZ",
  "key16": "rxmKvB3E6koXtk4D9XVhMwyWeEJAw7ChFosLmn2LR2yDpQ3DruMKPYR7vsPAAZBcJHEcFipaLQZRe7kVttLmYTq",
  "key17": "4Xi5dh266q4mwxT2iJjiAiwBxLWT9krHDErqo1jWTahnCtSpynUk6zUvsETgTtbd7aVY5vTuPMr4LBfdC8Tc1aQm",
  "key18": "4bHb9eMeEAJFdtLc635oJiht3tXynQG2jpT4X2UN3Uetczb8xynHXJEnUKab2cZRF7NpuGbbL2dc9DTT5ow3F1y2",
  "key19": "4QbtobjPVq2sQsKawNv8yeBD1KriniuFv6JTViEpVjKemjfrFMRfqrSnWGB3fBZRKKnBZuhpxQ2vAMApGkLBF8Pw",
  "key20": "5jR6oePTDsJEBt4RSMQzdbEiEZsq8WAstYWw1iF4dWqC4T9dCuMRKwWmoH14Jku4sM9zosZeaVSkrYaYEMk7YjUX",
  "key21": "2ZbU5gtEwewRosSSFQg9TtGfkCiqMZLffMUdNHtyqH5poeiBfTz7ZChTForHAqwtc9hjZ6Dz7pCXrmE9A9YPQ1wS",
  "key22": "38DqE5aPjisuNZPadx6XbW2khiVeoN4UFstcCgZk3nLuRLTgp3pJm7goTjMXeTNRcWC9QeQQB1WizZCYjbdNec3W",
  "key23": "5UAcv9PFdW6jrMZftC9F4q88PoYMqbeLHodsbsB9t5ArPgZ7f772etKyibnzZx5X2mvBez9bxMPCfUsYdWvK4Ksq",
  "key24": "4anoDndtuqkSD8NnWVpRq2bVdn9L61WHeKkyoadWKRWmSUQoWRhB1oWBweSqCqjn1XKPFAXpMtiAC9pNmcbU8Pnb",
  "key25": "47QfHcJS3FpjHBuPGEJg8xBioFjSAGQKXk4v1nbDwT5vRTJHsbfEd8FUpcmKk2J2gt7N5bUJWNq98X3a41PyyzSX",
  "key26": "55CdxKth5NHUdvQvdwMrFvSShRCLNP74zfdJHmfXncwUJYg6KtJgmb28c1tmFdUAEWrCzWW7h6776FtWE2a2Qo29",
  "key27": "4eCtMW2EWWzRhz1ckUZ5hpTKbepgZzhhcjznPBrC6BSHk3RxTDpFcL1JeKew5TnWGiurgkZh6k3XxzXggcGGngcX",
  "key28": "3MMARMNp6mtt3Zk8HvevS5vbG6J2pwtqE8SUdfRuKo4sxKfrRx1rrCHKMeyVAFuKWfcbqB87NASxTi56iqPhVvVR",
  "key29": "cYSYQZxGFaV93WghZWVQttKa6i4HUrR16BUt456WPtcjXQs1PG3aKcn7AE7tfsprY76fbsqLdRJHA7GBxDZeEzQ",
  "key30": "75XMpCKYkjN16kAPaJJfY64zwxZwxoRc7ZXYmhdnxyPK5N6rNevZCNTjFuZwYdFj9ggrjTctd6dj7fZHUrLPnxe",
  "key31": "7nrZcETEkWWtJRuN9BCFhMoTy5yHoGht6f3o3D7DFoBUu8geDHGzsTvM1TV5wR1QJeDvjyASBXMWoi7GNzJQ5o1"
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
