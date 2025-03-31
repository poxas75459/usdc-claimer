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
    "4dfss7Z8Ws6di4P8Y5JMU2zzk9gYxLTFBq9Ld3i9zBNBZ3suamRvjiuKLgbhmPtwhVV4ondQwDtXt5snwYL5DShS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NTBuN3fZ4vTMGBaWS8YVq4zrMwU1g4hJS734y2TP4s4qkojpHLrCwUhfcpNDUwo1bvUUS3jB5wwpMbUc25HeZ4L",
  "key1": "2d4jyg7FdUBCwaSGhu6UDDMLHMKyeo3ufiSeNWfJ3cQQoXSQExXZY7yqYTwLu3Hy62GKJ4vqzYSLYPDeq7CzeQ1K",
  "key2": "2KBXevMMWEXdzepk4zUxtxW1xzFXWWyjCsv1rePgjRxKcHnfpZyN1vPU1Bh1LUpt6Gcstq4ZVbXGJBH3AzQKeQCW",
  "key3": "2QA8f1h3zB5xKG2T8VwZdxuSbfCXgCLjaV1rnXoxt51kxapKk8GeZWWfgJJTLSeWBCJ3Svn2SXzunHr9pJhfoNHA",
  "key4": "2QanpKX8taYRS9YrEZHSE2YGMkQAbnxjPbpHpZ7Ugz8uFQatrq3gwpPQDPbwSR7iPmAwoovCujaGiLw1LzARKPjF",
  "key5": "5U9xvS8Uitc6TogsV6JK4KqcMHsayvLoQZyNn6xXdekvzJk7444Q2Q4MkzgnwCMLzqxLcbRD18weVjypJ7qRrq4A",
  "key6": "4uCBmF7acbLE2hKoAh8Hr8QoapidPM4mXVYFSSQdJJopxmQmreyFJZGrgnUEdrR1fz5PjQXqRp5Y6qNdat1bJ4V9",
  "key7": "3DvdQ48aCBQpLMd6ikS7KGo5apcSsREEkZmr3yJRccgKkBSwfcTDE9Us55JFQaYoFSyC9qxkgxz8GXxbju8E3WvK",
  "key8": "2y8KApqf7Dz5haZQaQtzthFFDfbuNgGiDMa82thFWXCxt6CJkwYuEQktjQksAS7qZJkHVi7hCMJW2DuR6ktST2Qz",
  "key9": "5q6YupwVZYT4KTx4Uykc3SVeTHVbhgY55jeXFNwbWbiQi65ihYbKXf3x87FuVRBJmwbcGNBhvN2Hx9bjmLAp9K1A",
  "key10": "n82AQbeM6SeStksoJG839G8wh1soVhdCxBQQgm9eMvuazPmYGpXDM9HndMA3w7x4zAC4cgiojBk9CLFrgmV7KsZ",
  "key11": "4grW97FYiwGGcVwx1bm15LSrhx8nP7pqYwFqdD9roMJN9VhAn8bcuPSRRfZdUSenXxnbUb2xoYh45yts8fUSxFhy",
  "key12": "5SnjJWdWhtBKsNYgb4GU878onCj2NBMPTQULWBXvZXmQ4bn9BYHmxCfGmTv3kFiijiez4XsLkhMCBitqptT9vZ34",
  "key13": "MEFXh644V43oonwh7oZ24prwEpHMrNzJiM1ouZmML4xngdtWtLMnUyA4gGMGXrsyUURnZqj3EjUR6cYP4ZoSu3s",
  "key14": "2YvjsW4VV2LPMQ2ziwgumP4EuSjsjknh3Hpw2cH2QfVEbF8hxfWyENfoJAtY9e122xTc9rSt7QU2pLsJemhnb13m",
  "key15": "3xknwabbLJnHVZU6i6GSKt9JPRbDe14pK6HcVJGFvygeRZAZ5ZaDBYjHL1sA1Tp8nQoehA6YUFcKR6LC1mUDp8n6",
  "key16": "65JggHJwS2H4E36bfNtwqXgad9PWE4BvDfTse8HoeJvUYwQaL1fdKa2PxSEEeVv7zU3VGS4FedHwxpUkMrCcFRHv",
  "key17": "2vaYJrJnqWD7chwGvqeDtuWk6VYvPnaYKtgGb6Zf6WsEsjL4LgEjaA5TUCAEscTh1akfcCAKNn3Lrrhbz1J3UzUc",
  "key18": "5W1RDwdBKysT9UckHqGUPz21JUbJVUHHuCq8uZdUE2fxGycxxsYdmBvRSpBSHZReDJ3gfiDjCW8orPbshhDwtHk5",
  "key19": "3HnyCuFTVvBDWaYyDDFvQeBJKs1PghE4Eab2WsPRLiUr3ti6c2a9jAViaLdmumgoSAhDpSr7ZgWGFV9YKbYNJKVw",
  "key20": "4Jem54pChBrFUY3LfP6TBaqtAUXW7LBFChTJdbWCC3XVAazwCbc1oBCBwmSErv1XkVWbrL4BEm5CtHMnKyTkDDoC",
  "key21": "2PiGtPVK6Dpi8niQZN4sy6FVmSnnzSqGVmmGX6z5rkpn9sjnRyc44kKLNsfnwAm3rcEg5E3FPsSQ7rFFvTH7xk9r",
  "key22": "5LWfzur6V9adHnpFeXpyxHaMUhGbKNxQBrk6n9XaXGc8a6jgunXz1oMCXLDBUUAbxpmJz2zz29JxDg6uoH7mRQv6",
  "key23": "2kvXiuVzQ5TcevsNmw8UoZQnvhs8HybXjhbU6Pd3viJQQ5JJk2XhTWRyyCPh8FZwuEfXdiLEnyvJR8ihVcpx9o8A",
  "key24": "2mePEdTH8dFMxtNSMQSD9eQBWohyooArTfs72vBvPbmiTk56FtdevhQy6DWg52V7FgRXrtCHQmh3ZGSmiGA4mgE4",
  "key25": "2R5y3ivmrqwS9UWqm864vjfjGsnxr2BYmNwtsstkbP9eHm2tp8UJtGaV6FqCLq5oKMZnq2qmLgDzrbas22bPhK9p",
  "key26": "2EpxiKist3bErARhw3cQyjRBeJQuf4EMYPe9ftVaC1qotGUcp2dyWNyt7rr4eVpiUmkizJvbLHrdfSNWfCP4Rfjp",
  "key27": "5QkqoRensM2NQBaLwY8AZDAxfuHNZDpGBbRRKHuWMRHmAvLydQSeQKshJVYmqeiUXGKEnGy48mgHu7cmnGF7yB19",
  "key28": "263K9Nac3SrLMHrwgfjEjpF6E9GWVZitErgqmzHNNSGGuLD5V7LBQWXyeL8Rmp5iuDx2MrnjWAHy3xtLKaipZHc7",
  "key29": "2qks8GvgoToxt96fdoUTfBtBKJ4fenesVnYYTbUwXvknFGiJWoZvC3xpXJfd7QyPhp5xxuhkeJApZehvs8dJU1Vu",
  "key30": "3KT5ha7n5ctiEas7r4akfYDh8Z2r1g3wkXkv97QXvBrDRDPPmrxZMAaSfnXFqbeCJuETEopKZqZHheaHfNThkR3o",
  "key31": "4zRyvJKzk2k6Uu6QWwJcwibD4e7GbeqZGkjhDeRBPMNa9ExE6vCKjfGYKzYhJ7U2RoGXEk6PBcJbzHTmgUfer91Z",
  "key32": "43BjMGsR6VLn67PQLHogQ4urpTuMAWuvQyfDF2hmGtNYaJNch275eo1PPu2CC4WF8uV6Dc4rvDSbfnUQisS3hrWm",
  "key33": "nTRaCeKSJLgAcWgadUScF4Ro5goBAXM5zXW9LvjtSpc2LUzux6CRTrx8AAQ1A2iYeEp1TVKcNoUT27YxD7A522a",
  "key34": "3iiCzSSaPjRGHqVmYxEpdXYALTYNQ6ZYnWbKsx3qkvJue54Y7VBh4PSFTbnGDmAAUQEcij8WXADEGB2ay2NbH1kU",
  "key35": "3uCdLsASN5oeoQ6naRB9YTcMFe6Vp7uWgbfQZnzrT9JMBpDDHxPYcKoif2uUFGqupzQUaQMNwhq358RXfwpMAseK",
  "key36": "42KPg3TWqoknq7eLwXmVLARGVWoGyKzpAAqevK9S8frBYAok7qUMKonsbNbkad4qgGdkyqb1qF1Q9rCDQ2uPRRpz",
  "key37": "pkqB5gZZxDz228CqxnsbsHgP8qSHEh88GoHo1dPnLSbWwfQVpswJ6nut4LUToDNtMbkDotgdhmeNsMDYuKVvjmG",
  "key38": "oSaN37ucsbMzYsCYAf1gRZ6N6fhUooCWdUKmPYBgaqpczXxds6H5dkc64Vt5DbN2u7BsQrcPpAihcnMeyktfTWQ",
  "key39": "28RErY2hmWFD5W1124nn3rDhm3eyTUZiEMZBM8aMvcXPM9yARiRAF4Sm92jhfXpRiBHDcr7TVd7ngASXRB67AYuU",
  "key40": "2z8XDn4eDQ7UqQ7pUyY5GuQ59L34XReCYEVu6JDPuDs4QUZPPpkavAGsCD5DZmQRWSS8UGhN6aVBxQ7JfXuPjMma",
  "key41": "4ryncC1r41nJdwdKJotSBGCoNDBS3BYAEA6zajAAw5fyA1VyaW8kMuEzJKkCuCk63M3xJ1ZosfTwaS5odyyQ2uEy",
  "key42": "22SPz52mQygCsVg84BLYjYty3EpuHh7XALMkBiejoNfmgyt9aRL6fEnWM3dcDmJy67RqqqkssZdVARVoLUso19VA",
  "key43": "571Fiy8jW2ffSXuQbZFCkZp8oz9ebjNecP4dmNEe4UGNMR1nWMxvhv3TwYs47XjApbAfMbExFaT5Uhv6zqoH8j5j",
  "key44": "MqU2jhfu6zQqyj7cCXuNC71u8ZDsbovVsHr1pWVMTSHq8pE21PgpikaPr19N8RPuPKxHFyLMZTbWYUF1zgE6tjM"
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
