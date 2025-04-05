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
    "53yukLLnYswL9T6ePywwScUCFM14YYvFKy5hBt8RniqZtYQ8hGhnfubNRj4AbaJKKYF29b2aQAs4Bt3kA91dLfpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36996ZHvU4FyZp8mifDs4UeqLLnbvQYYYoJnrcsmbLUNkGQKuNhdEqrGbAQQMaSGRovMSuuVpXGyDWyqk2tJhYMp",
  "key1": "5Ax27GCZvduhKzFiQCFvpwyHHwPoRbBd21h7zMy6jPMnchvMoGZ42nH4piXUzXAqTEXR5stR2FF8W8h9c9x3oN9n",
  "key2": "5cQozTUrjfJMvjLjSKtVi77pRqJCusNZqTEMehfuFyatnMzh316Td2rKL9JdSgDfKAbXTTunsuLdiPz7RtejCDT1",
  "key3": "5WmWDRwcmKoFrrxscUxbpY7GrLmJGuGTbkSCiMoTDgzZC8EUvHRNVTsCMkDp2omW31PeKu6HAADo7hVqMeVjEtRe",
  "key4": "3Vp86Tm2KFwHCM9RnVbw7yXuNBJVEU5Gx8xaXYGV5bctxPZT3zBm2FesYk6LoHyqgs94MGiBi5iyB1RJ3bMuF8Xf",
  "key5": "4bqtTGtkqwNqHvB2jbxd4NrQEVQKVZbqNiigUGoiekpwK2uXJcsChACRDP3BVpyecybS3nZrkoTZsmxVrFL8w1oR",
  "key6": "D948eRtuB64cka1nfVQ6ADLXmv9gK5GBtNjxmuZ69ztyRTnvb2oqV8r3zYZHG46uAi9PNeQKJhop4LSWkzTrgS3",
  "key7": "4HKxRB9qzk6ojyB5NWgq2YcGykmCMKLdxQKmpDQ3noPGcAkHkN7WQtsAuLfZAroZATz7ohtRRPBHUAYQoPRzWL6d",
  "key8": "22G7RZbEvq6JdxVZtrMTXdps2p6wVHrGJRhUD9JfFs6bWptq2VVrJ6hBagcTJsCw5QmVo6B5uywpKXsonNQFGS2F",
  "key9": "57WWejL47mdHUso7SQCYyK4Mgvxmr7rSfec4pVmjo29oHnokXbJVn5GKZwE1iXGHraoQf4mHNQHSc1cYTmorMwmj",
  "key10": "fCgZ1dAGPtTsGBLp9KJUdH3A6sXP8eS1wUUEBv7srFGajgTHKVYV8tgTYRczhR9R3KrhMxu8z6zrDQ1RbXzD6Gc",
  "key11": "TpMvWNEjHfEDsFisEtUzpGMdH8XfBiJcK1pjPHrLc7mWvii2UChENxmAfMYkpMFq3QZA1yA7S6LuyywQ25NZRge",
  "key12": "3gZponYNryEJf5Qcemeam9zt7jBD3kQ4JbpmeGunatynU6tAy75XFSazJmiEwAiaNuu5nyipn1o5dBsFSJoznNxE",
  "key13": "5ajf4qrPakuJciJQx79ahgzN3Y8HJr6L9LSWwNQCkTnnYxpME4GArUnCKL21tGCCrvqMTEAXn1vURYSAWMEai8VZ",
  "key14": "NPXNitGFUveimN46V4VMNsZHUApqCTDB8A43ASQ3xF3gd6FpbTCp3PeQqootrJS9HhgaVtM2zrDzS2PLusLzWG8",
  "key15": "3WJXUCbANdR5bdQumM7gVqacya5EYmRBz2J8cm4Eib1K6CfQheRSr44wiBYnSJ3sA2H9m6i3LQuWLvJhYsy6rh48",
  "key16": "x3TYuYnjYqotqZTiqs1kNG9Qec5nyCAWENxfq8wvuoP5WVP8nss8j2SwcpmtCZbnnFPfmzHZd3W6b62ae5te7tG",
  "key17": "djT6g8CCYUJp5Zu6fk7HfzrjU7JCkbaPPu3ZN3PGKmnNAjoGEyA8rEWv6youVBCazXgSwwQ7oyJAkwJCn3vqZqy",
  "key18": "3MGS9ZfdmyEynyVytoiwYEMP9CooM5km6sveP85XcezFWAiz9pq3RjLpw7bzZSjem79UzwaoK9tomAKs178nQkXM",
  "key19": "dxiCPUR5AS9rR5emwcxsVJnxhK9Y4344cTHP9Yj8uu3PQ9ZVXUXTPYaa72c6YNwWdApe2scBZMU2vaae7CAVtT6",
  "key20": "3Exd1LsRmkeKLkawdxDUhZeh81Cr27b5KuAsJBFPooEUsrWSdvx6GcJN9q7Hszm6fz8DJD7CbULiAvt6VH8Ny847",
  "key21": "3Y3FpJWRsKnSbsBZAQE2LLmWMyQvezzNBgREoKLSo6Q1BHfod7dBDN3ENmg8byG3rQ9bR45fVczfa22i8qupZb4E",
  "key22": "3iwZYRHzNFKtJTjKCtRCSQcVhGty8t73mE2kiGuwLpZTYvDsRQsxFYJoMvTn5TH1NKdV5x2MSCeGQwxXYPjuDMB6",
  "key23": "5N4XUopWGMjWEecVHQ3XNej6sshYrnE5MptVq5Msz5eb8kp8wTgZqQfhr1yFAXCg8pYfPr39NU7cNpm44rdpT3m7",
  "key24": "2CAs5vuQB71FHECJ7Z96xbH1vLpWdvNJjhKmGkWGKmL8UywdSYz7oV11MdnSSroGzcgDTGVE4Lfen1ZCw7sp9B2E",
  "key25": "4C5mfMB9R7Qwwn6dcvYpsyn1T3CwUhPqP1HZkLUTdz8JSqLzzxxyPBbZjWoCmMYyQ7hMRvFj9iCFXuhhfXtyTj4f",
  "key26": "t4PgFFKWogtVKcEzfKj6wjJt2C8ZXGwWr3sHbs1aDx1h8ocPtLb4L3m7DFQGkxN7ULQsNjdW2Jif29yCsXbHoRk",
  "key27": "45Y1iooQggUh9PdMDtCjM3QKRzfdZyBu6BhcgitdFTydZnM85Tixtxfo625NQY9wTVVWUGdLCrMvGhbwQAYkZJqd",
  "key28": "2E7MErrKTzkmDUkwpRLyWa8EdVCYikj1aiYpYeb5NhFXz1LMRpRCxef6GCJdbjQUrSgijeZTqqVA1HtwFz8U2reJ",
  "key29": "5AArd8rgiyY6jTj1gAesa8qKdNJPhfRMqUbCSzyYALVbHSn7Ax3PtMMoKHVmNLvTZTBEC1RAH3AgV5szCvGWVsGt",
  "key30": "3mVnx2EnKr9Ycn39igJGgtcDkFFRDhucfwkraqshQbzTMt6vykmmHNMFNMD8PGXRcxatkGfc71DxP3LSGdhfthBe",
  "key31": "2aiN3unaD8TYLguwaWAJnnzeyogQMgFBBsQN192k28PUxjakSSJzNbQBXNexLK1SBLLd36rdrDHPmiKt1P2WbUsY",
  "key32": "NFjFfQXaeYELM1TPZmZcKPJ5TQ82xFZyUjHL73eyVsZ4mVPGxbFvhTF84ScqkSHVgYh8N8CAuYj1iw9K2132nzH",
  "key33": "4oj1XScF9Qfr3C6WDjb1ehSvfzoCvxZC9avX9Dybbc89WQk81mLKDunQP3Hp99Yz6C5o2o3PTGNApdR5phYU96qG",
  "key34": "5bT1phhSqqDb91JUSTw5WqPJMinGe5M8X6ngzPobL7REz8BvG5of7nzxw2AZ3vEuLuHi5zMAiQswdMvW9XLnUDKf",
  "key35": "4BCAxrySdUFwd6ariRGFhtUbmkDB63Neoy5wAoa5AmZ48FAkAthJU4J9DTnAoq1isQwdbJeQCMz4tvSJBYr6raPe",
  "key36": "4LbAWZrrweURR5umfkBTB6q271nL6i3fd3uKs5Q99kVHyD4GzhpzNTQCpGfeq2NZhiXfRJnybtFJiZjqiiQSZZVi",
  "key37": "5yssJAZ4Ek9n6xbMjSVWUu5UJGyz6BFupBSnCo7nqHa1YuQ4yiMXpkodqyNVouB3NLADBeuaZqvyJj5nxQSb1Bju"
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
