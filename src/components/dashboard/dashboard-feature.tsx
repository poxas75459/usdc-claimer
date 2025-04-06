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
    "2rQYEK36Mqbka2iVghuxP7xYxg1bgUrF6pEankUKtp2K4Kvc8jzV4odrwKsJKJ7Ly6fkfX7hwU91ZTCfcy4kPnLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cn4dmcPWyFRE575KgFsk6JigiTSzXM6C7uxEQPBu1SZicZz2mhfBPppbamowvCNsRypKvcqMkxca9aJEDxTYL64",
  "key1": "5KVg9DYGGSYFfVQcqVq4JWqQETzJw5VmWP5APmFNZMeatZSjXWHaHBAXMSiL9PbaGhTEJe4LVFu9rwjqpeKGaiwC",
  "key2": "3oUdJLSiEVxr1Hh7f99CqALUgb3igqp2opdeFWJU9ZZGGoxzTsx9MsV9WQhGaxTWVggcPvGiivADk8hesW1bDYgs",
  "key3": "AoHxQh7J7tJXxGJ81fTRoUJZPoq13TumVSdAz2i5u8mpKX7ejDj8vrPxUaSxLjqQZxR4SWy5kHYyV99gd6BenBy",
  "key4": "3XCXx3b5WkUBC3NkTBWj4XJSD4ZwJfdnCSfZpkf69RffgTKpAQwQqaoVWMDCRuiWKGsMCLo8f1ASeirbNqDjL5PG",
  "key5": "4Lm4C72q5yKWvLJgGa5y37Uy4j2eP4CpY5KKL8k1qc56QckztejceZqabgvJN3Jwwqxhmsv7DLf2GfYgCp6nM9tp",
  "key6": "2JxCmsX7N3tmSAZaEmzpfXjtuUxw25YzUQuZtAHPiWzmqdZUCCrRKQm5S6QQAkwMuaKQajMT6RYvtqUn1gkRtozS",
  "key7": "4Hq6YhbneBpCjwmxgvBryzycpDQLAnHvBnMc5dQwWDVqx75hEGzKviz2GM1Xrq5sjnKwsTPjMK3W2cGCNfLrXtbb",
  "key8": "2eoAkN8hhA6g6qzEEuhgKjwynkd9y16NuuZrDLdo8PRQRT3YTjsPS9ZErJzfuUye3ykkeGfdNQhgXvBD19GZVELn",
  "key9": "2XdnwirumbkvJamPwy2P63XjvtWc9FsXRbhF4u5BbZFnY9bRgf7jHznPkmJLu3DuJtutN9G4wcrn5KyV2ryNob5s",
  "key10": "2aYc255quKB9Lin8BsxPreWAXbTjUioCZzVvQHiujfATpHXZtVrVS32GyLTzRP4YB3ST81d8kgXzrge6KqVUMAyJ",
  "key11": "2jrVtAKnfZdmUjLrGJsN2w2gTwNZm1Dj9xPeKPPixBqQ2TeJAfHvGDAGtjRdAfDiPxj6LwKuVyTh2n5P27RF7kno",
  "key12": "5PzHawaLCSrz34AgGe5pJAgbRstE42Tp2BR5yRPiWCDWC4SBmN77QxEp8tVa2ofxQkFSQKP9fJV2574gvmy1jaJs",
  "key13": "2kUMNEUzyg8CActhDPm4XyrjsuLH7Pp4KBcBouiJW5BcZ96Ahrzyf4D2c8o5cBmk7ifEKdrNvs22dNhaVXqPcUXF",
  "key14": "5z2pMZhCU1rHmncXUf33FdwFNAWwepMCYjCZEwNWH6yRxLouwVbARcZpxA5LBfAH1xy1brKc3HUekJqwCcDrgPoL",
  "key15": "adC7s7JnLdywJn4vjxAMUUQ5HkEwcBaK67UKcjZpYcrBEPt8z1N57yQy1zQmHakGEzP4itTfmhX72MkRjCZ9AdJ",
  "key16": "2Uws8un5uyhmMQoRnbD88uESNt97VxSUM9iYpAQMeCPh2W8cHzBM3ThAsA8p2CG5J3muLfYyrp9AL1usEmidGmm9",
  "key17": "4yZMd6YXYmWW3rij998eAazxcNVHfS8ZtJqtvC2wjCL4cBA5Q6v1Pn5kWnEeR4TCcuHXvBbN23wp9qjiM921jMw3",
  "key18": "2HnBQXWneTHaYoqsFr3F6zFX2dE9RBDmkPSXKgESqwaXWc827WcVmuhXcST8GXizc9pJrDsgqmgfQa9a5rsV9rgt",
  "key19": "2rdAJ2LP5Jim7pxMyaqe7238dmVvkfLbJQ98bT2skzt2WGyGQmCpYLkQpNTNMJwbxX8PjPN5yDp42LRSmRJRDo8p",
  "key20": "TnkxoRtrgBz7QBR49zqbeantaMFtM2yDTTC2VL7TePigrhX3wZAU36MUTnVkC7qA9PshsUudZRNEZWu4sCVLNab",
  "key21": "AeYtrL7aQwHM2NZuoYQ1unZ9dm6bjS6Zs6iQrBKdLYDgySWHEXGoTdrZpvEYGxfDRNEzwuyeXniEU8fBMqYm4zs",
  "key22": "64VhceGNvui8kiJE5Qvt3nbWJsg6FgJre3GY19NuEnaSAJH1yUA2Z2htdY8nLGuAdMMfXx2LDER4qvJvhBAC7SpZ",
  "key23": "3zyUFkqtzeuxSiqmHEGB4qXMS9wpdnugJaoJ1ie2XGaUqFevjHjVP4VXzJNxrsZF1nXyGMM6r6q9cvKwHCqLuE95",
  "key24": "dS8u9DKdHu7xu3rgvgxdN1B6yth2QbxR5eCfFgHCn7RZS6pWQ83xs5e7GZTp2ynZGBtvkCZB5G9tMWDwviVm1wD",
  "key25": "56YP6SfidJAsdiJDnxuG2qGBLdKvSyy4PMX6eLcRyJUcWduGAun8DSRpr2s2gPvLKbjKuBErxnrUBsUpik1QNMZc",
  "key26": "2wE9XeoRkCt79tNgtarsVtYXqXNncM231BVYUeZWotiuWwKJKK4NUdefd8YeXa1Wy5EQgqyLRAXvDgWGp2SP2yo8",
  "key27": "2PmdSSCu3oQN44bpVmUGkL1KbsKN5qYVGJgDfYvpzKjrRkYEmFVxXzuP65UgYjZvWRd7drjxXMFtzJ2uQgt1g5Lk",
  "key28": "c3kPAvGi5LweNj3SKraimnaUuinZqbag4htKAxeZpnx4QDPNL1mjFCLamDwtuzPAArDs7z6EgwesEzXfvx8osh2",
  "key29": "4F9X85T8FwqNVT18Avh3745vxVbC831hoemSw6yPjj6KZgcQGzoiKxw5a5ZaCuZwHZz6D2VbnDsjEg8WatcNeyes",
  "key30": "2tP4PWRL1DMoBLpVhZAPqs1hh98H9N4rAcfRGCFmWPK7crmTpgMFUet3bsEbHfQ2LAqYRspWvatTut99o3QFeZ2s",
  "key31": "2YQYFNAo4wPXtdndbRA2en5PZ7hArCY9Fg3fLrNPmmwGknebdVP89HbyW5Ha6HvQQQxiLEmmT1obAb8cfodnaXnR",
  "key32": "4X89t1q36VDoy1zX8KVKfBracpmooH8DdoBxFqwEhXUVP1E5YRtHAdpXmy4QUvT3tdK7GGLQ6o1Np9SA2pcZQprR",
  "key33": "58BjjhB1GTk4hH7paSqQ6bQZ9akFXzDqVRWyybEtp9twhQYfeceDCXfh4pTFysXoATVwUvq9hZ987E6kMjjc3Djm"
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
