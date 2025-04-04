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
    "5TeQvtaQqQAf3NkdjAGMRX7H3P9LxY4NodJcDL4AuoQL2YdhmfRu6WqT61dnPXzEVWPjvR8rnJfzV9YQYSA3y1bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59FiatXuNHAaoTFXUBLbBkiM9LgnkFTc8f6qjwAaNmaDVyu5AzTx3CZKrV73BCRNTgKTCDXNWNen2VaVJs5RqED",
  "key1": "4Mxc7rnN1v82miLJHGTsojSiC9XYX8c7UJKDqkvNopqVViKZV7dxQKLUDWQbfHAif5Jrbo3c1HEPKDpUcFKfoPX7",
  "key2": "2hwnB29XdGH18zDHjgBJGpngt58K9tCK6LUbVh6kSeZtJU1YfssBpZLp1w44X3vdajjNm7ykZS92asARHBxeraU1",
  "key3": "3CtsmuS5S99aS9pvrQ7LjQkHZHaxDebVsd5gHVCThET4zKnwFEQjXgvMcdiho4sijg8CuS2oRA1pKMLKPUG76JUj",
  "key4": "5fNZBc9nBfonj4MbAyAGoP5Zv7FRaPSaWFDe7HqFe4BXV4hWuHCSAqcezVKoFffQAwrkXuaLJfeuVFjSFDMwiW1D",
  "key5": "3bWU2o7rVqg1GWpN2dKbkezE6Cm9NNyRHJ1Zkae1sib9HdRpTPX7jRWjDRus2vyf7bsr4wLNL9Ykjje1nVfjM2Nj",
  "key6": "HAybRbA4eh4mazFRhdUPHjiMngHmVrvzHRptsqDm826PnQz7WUN4i98KqJ4gefwTeGcKZKSAG9z38yTDFzeuoyb",
  "key7": "35Rh7aPmN6UxkQ6CcvejE4fTS5KgQZkdAKzs9Goejrj1hRk5evrNpVKVrFZBPLgvLZdWFzfPPgyC6UrNDxQd4NDm",
  "key8": "3Eeqx9PohiigAK8ty4oNeZhhkivut3no8ndQFsZcZSn5Yj5juy5k41feFhgm5AEwxEKtM3QuHNW11ZhXjY2g2X7u",
  "key9": "5hfBxy9to4MkQVtJgUdTJSPk1aysvHLrAcxvo3yxYKdFxPWuj5hvxCWea1JmEqAjKyERR877UbUYPUSmoHygk9xs",
  "key10": "4892fQeMj5n6qztNPgYrr6JktmJaaVDKfY5mZJnFY3PrE1wzQgyyYkMsiooB1rKvCxParVhhzjp1AhPmZZTMYPKz",
  "key11": "3GSWupH1J4qTyRDfeCLPddCsxJn9hB6Xtr6c8i47SpAiKHXwg2TKmuu4XdFbsVWjqTKNUenvjGpmFMazjFdLHgzo",
  "key12": "pqCna1aWjg2thJzPUfnsHCwo2NeQa3Nyt4ZYK34ADTc3j55FVZ3P6c44Bx7kBVSApzgChyjzwNgK9UFXYqxAzBH",
  "key13": "JXQinTSooK51KjHAy5H4sF5hwKhkwxHZG2mUrahRdZzVJELNW6g3F6vwPtp1KQB3aUiHpbZwgYJHfJRUwcECyen",
  "key14": "rHT9Hqh3ZScKawWBvqtVYA3WLiNbUJkNaQ4ZV4rueCKoaaqkwwYfU8aGD4iSTVBLbKRpk6eAdZS88NYp1ZWm1fD",
  "key15": "k3LteApibHX4NZ9U2zMS3qiLP4yMuGttjbvEy42zydXKPruiJqSo4ckxKo15RupAAeAXSc6adBCSNb8J4VWcdSb",
  "key16": "2zj4PBpXyQpTtFvvCPRtJwn8pkoD7MtaKSYp4efpE8Dh9JU4YWuNim9rxabwhGL21MqiJryAZnjZofpwcUQ24QU6",
  "key17": "2CjWKqUSzWTu5yxjYL7Pd1qX5eEjcudQzGhTTNFoedXdGpVA4gfuEJjESu2orW1cW4eJaDaBGjrqSE1X8q3fndnC",
  "key18": "3v5zWEMknJJYdEzmGRxwnYNetpAeVfpn1Vj9CgLdY41dpbUcW4kRetjvp4nrwo8AK2P3CoFaKARiArdojT1sVpo6",
  "key19": "zb4x93zTG29U6NJqbR7otciyFjeMnFeb9mSbGTwtRCicZ7yvjR82jJDt1rP9zSu6MnZDhcA9CxXXBs4UtZcuGBy",
  "key20": "3wpi6kJcTFRmcFqNi6ycQ8USHW9Ya9dPappmkfYAU8xHDza5NYAaWS3L7GAsBzagHeu2tAskopMbF2GBya7MoVBk",
  "key21": "5p9DmhmjdPa3MJXbN4Qj2PxzvchqEfSamcsnuZ9zJbXKUXM5DkSrMTHBvmwsF8xB89LbyK3mKAwjJ8cJNgFfFRAW",
  "key22": "54h7NGpS5DnV2H4gsac1Cfr6YTrKFH38EovhgComfgXM2NYaix2jjBZN7EiGDcauJhTGjiGr3MtepCJUifej97Lq",
  "key23": "SCjP3U7qCrzsP6SYBpWx7z6MhasUVBKz3BEjEVHz18JRJvVdDhNm8xsXQEtwG16swk8AaBftTNwtNeYtzr3ECCM",
  "key24": "5uxTH8a6uBKuoGQk7hwpYr61t2w3JjtGH2N4QRYhkfnS6jXhwiWiqqT8VubAoP2oMHGrikFXstrFE2sTrt45XUrj",
  "key25": "4vxxnHQhiKQcew4uhDhFuVbcp1wBxeRAMFUtbKyd7cCHf76TrbzVR2zxeamU44WENRLGrbNDFNytoBoEdYeFoWQf",
  "key26": "4L9yedbwTsqX6Fehn5pZf7U8CbiXjXR9XLELMerqpkY1YXjcrHXdfMF24hNdvg2bStJULJbMqn1rFw1WYZrH3vwk",
  "key27": "252j8jRNzzoEaYBx8tr7aMHe2CAM81jhMvhM5vWTePA8BDXuDiSPbniczqqUMbXAfzpzG2m3QjEo2i1rNai5hxEJ",
  "key28": "4Kf9voW2o9QMBzAWnrP6a9DRMj8taQnEA1JbnQkWG93zmzdccbEGkHfaSK6gwU9F5vGyuYA3a8GVfCk2vmTgFokk",
  "key29": "cf6P2qvAeuda1P6TqcewbHyqDPinhCj6EpQWCUHYWF9fqASG8NkbeAcUKNSK2tRhxoqkvXJFjsb3v33PThh2WQ6",
  "key30": "5HsByS5cCm2aS2MQdUEaBzpYccnG2eJ4fbtzawagkEYs2Xqycmh7f26y8cseBkUMNkq4ro2tHrf8Yg3iec4SrEDS",
  "key31": "31KLYkDJttMmkySbvKh46aXFMJc7mi4iSbcs345PELecSE2ytGpQzkQKdsQ9aGoAb38p3ETeMB7tuEvQrvfKZJjX"
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
