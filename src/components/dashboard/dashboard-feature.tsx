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
    "53mft6PW1E6jpQvSe9eFhXbWguRbfSnWcPkfhAqweAoUcsefHvgnwYAK7hSv7fq6sTArayV9Cm2pfQjnceaf2f6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHNVYay9jNkCYRr8w2fhk1g3YJWHJYucL79RQrZw5rZZ33xohJxWJ2aycC4eqYnEcBvUHrvJbDgBWRG3EpQqFw3",
  "key1": "zEkTws7BScQf3kGzGaSbFTP5fscsp1uq9Xw339Fr916z447rdMQFS3WAjY7XYuqZTLp43rvocFM8x89kNqHxTJM",
  "key2": "5E3o6FBqyj23y6J48YPDA864hTvsGr5wQdWoiix3WnaAdhbh6o2cTA1hSqzRvT26Rx2FJ3ZnHq6sXSnLvdt1wbKm",
  "key3": "3H8VAcQmSHYLwv6979Gvzmmo7MwhLqipUErjD2Rm2EcTT5xBE6kFdJBPKsQenEZYkXWmpR8NQBZUBzu1g4xtzxoF",
  "key4": "2MsfD4j6QDiKz2WAaJW96nYjErARB7UFa41SzjqcBKWbhzDW2HUQvrDYv4zH2mZDHKRdJBX2u9HKUXqS8HCuWRUv",
  "key5": "5yfvRoWzUa3o2gX9XXxwdxUmAf5NdJVKzJ6ggSR6Jbih22izHTwupR4jb3fi1CC6Bh2q83Xh95GCQX8DXzBMLpwg",
  "key6": "3icBwE7A5ri1KzxsCeXJNk6Pq7wtEdLK5HWufW22UM3nBPugCpWZPFMdABoHJ3NTmG81sj67v7J5P7G7QUAh1rBm",
  "key7": "4ahQDcYeSUoL13VPLAKnZSQpQ4WEkPjjbsTQYu7nYWQ2Vks9TexzMFzjzdP96Xp2ZTmnrK43k2EPbygYh6P7kKqx",
  "key8": "5PwsoMDQiGBQobnuXma6MKFiPHvvgdWvc7qErDK7EMBJeK6xqWGPuVvTLfyzRhujSMV4sRSEnk1Gx4oCg216wEUn",
  "key9": "3C1sxjqySi13Wos6Mb5rQjf43HY4rYc2mRxqmRAnFizJLs9ohzJo1boHHBPJu8Q4EgMQuZ1aSRtdDfSQrdn23Kex",
  "key10": "5ZhXVQFa2xRWPxjEy8DDXMQhSV2cte8EW2ShjGN3FHZTnVqWuRVcThgvGvwPvQTBoYyfxCmueMdRZDRaM4zhDjp6",
  "key11": "581y3LGp2MHQWRE2LhERsvv8LSj4vkUvMqFPM3ifU2nkPVkEpU4RAPQuLS3NRr6u9w4M1zyXKRs14LcvC7KueDbD",
  "key12": "4EgYwbUZ6UCti56SNoaUrVp9irqdYKTp7YE7ZTuPrEJai2JWXacCkjm5pxFgqTwdMC38QJT8RAPxQSAQZ5tM22on",
  "key13": "3pWxZWTJJZjxaXVE464DsAZrfvvsFAXLSLaQbLquxxgub4zf4uzKcJXp9jpifvNWicNPBaobzoc8pW6e7iAhrWSL",
  "key14": "3T5yBtRjMyvPcTS6iEPuFTNHnVFodNtHV7GE6paXGqH5KA6VvXevdKpH5zVBHkxX8XTVZfHGim3LVQ5NZCA21hyV",
  "key15": "5kntmEgyKaB7q62aubbZ5RbNy94YMxHNgYHzrE191k8m3xNSHbrVeVQF9gXbszJvwqDUsfBfzn6EBxeCiyYkKgx3",
  "key16": "3M5q3TCTdmJE4E5qbeJZgbaQpoK8S5WUkM64fMqVp9gyrCU4koErTWaZksYbuRJ22EYaz7SJqkvdHYGQHBXQmbjh",
  "key17": "2DwVbwVaqhsozcg5G3fKhAqV4opht6uT2yGwNdiSGWRZCJtiwWRt6WKEqxXFsW2xX2vMaLhkRT5HZQHq8hzVuZsX",
  "key18": "3RQwTm1AX7eHFXyZuf1pz6XBuywYxn1LSeHRZ9h3tDXiRZHEcaCoayoNshtBQkRb5LqoUBeDKBLDM9t94GKLmDML",
  "key19": "8AZShNMz5ntGWp9m5rJ9r3FeXftKuL68dtGALRKDGxGyZXesesYXKgZjdJBjeGWdFDTKjgifKK7K59C5ak46kn9",
  "key20": "3ZEokmCaCqxyHemYsyFPMH1tCQTEJyM41EnjfBfrmMaE7uS2povTGtDrzbFw9NbQsXqMvq5vB8ic2DCXi9pKgkmC",
  "key21": "2YKKGj5i8VAWk5phZnikUdcKm8xg6aAM9uCNJo3oxgy1RA6uh6ngf3K3HNUwZeLhsqpUBcBFd9DgojnLjA9ezYud",
  "key22": "3p8deLMTcXF4gqGsmwqQRa1S9dMporsYEg3ma5Y6mFnvjxG9nsJsTGFdSYZVAWngDYsAxUzCG91vmmvZBsaJE4Pr",
  "key23": "28jK1HGL1tv4Cr37YfaATCiJERkxjtWjPsF4AtZeEvAcAR9qGJ9i4TQdYSd8tVua3Kt7DVVWceBakogoXabthQeS",
  "key24": "2wLPGZ8iCmAQFNaUWWoHUtAFKSy8EvvBNM4wTBgAAj1UWM8SwbUJS3Dx9V2fhYsi6aWYARuRFzdFeGBbFDbNAa9q",
  "key25": "3JRrTf6nnYmgtxvhFry2dtGypE55tmbSTtcoiiundfXeMA4LWiyRXPsZqJKqF21k54cTxNEvky6W8PgVgsKWPtY1",
  "key26": "34fzdUNb4e62vvofmBuXqLnHS7QHHYUshMvshoNHo9oFYdyb6r8kpeKmohCmZWu1W2ETMxZPVHZQm3ThFcY6nhv2",
  "key27": "2byGYBDQSaTcsrvcfUrX16nNi5atxka6PuegL5UVwLLC1hbA1gbvRC92LkQDTYDKTjeu8tTS9oQeHGvg1GptF9J3",
  "key28": "2vVTCHUgbn4u7CuFJUEhhL8hmQHo7Ze7z2pxF4W6VkS9Btduv7FvmFtJ2su277Ca2iAVZTAquJMe7XCY2JeVE5tZ",
  "key29": "2nWDvvBVFrWjad13HycUc8bQrowf2ugaSUMQRkhoQFv3gmbhTSJ34AmRuATeU7ctF1Lu36znKZQwESoBhZbQk2Di",
  "key30": "3WcrKKQyTDPSJfMQt1R33Df4ryqbzy77Nukeiqp6tLnjbiMhFvUssm1QKUES85oGfPQAvea37M8UQ8p58satgZdB",
  "key31": "2GzecdTYXyFcJA6JTmaB3Hr1xm8k9X5njdWamPPFe7gggthcgzGvFQuBoAfaPadMR2s1oJMmrB33vxeT2U2fjH1o",
  "key32": "57npWadoxqzWJGbQUFeKmNzhz2wiQPNFWT3PAa6hWBAVhSLUeffx11fQutNDtwWTRuh7GmRebGaJH1YNHo4eoYKE"
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
