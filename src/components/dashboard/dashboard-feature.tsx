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
    "4VakzcKpqL9cymQHwKFbybKZcsKkLiZNVGeWG2yZrDC718g9V9fHhhJeUjBsnh8Bv7uzrsL6iQmMFTe3coX9dh6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48EPtxF19yQj143XkhHHEYp54znxA878oaTZAiyBDNbDjGTkDUpuv7aeFF9CvyLBEUEr5XWskxXoyka75QQAxgao",
  "key1": "3SGdo31FUEsvKWzjAF6vUeec3qChDeJV765WGfu1tDtxAH5sqLGtLmuJMoMovaZH8vrnS4WR1uEQu7EcW9MYr7kG",
  "key2": "55sncdJLKfCoZZRQZ8nmrtdAvrHX7MCt2gDxRyCP5CKFLDkx7BxBoahjn7foPcEHbG9rnkuK7iqsAGL2CibGaXqs",
  "key3": "3bkkPCjUjENaaJFcVgzzoEaHMFLjJm9hhZDV7sheQvaTk3Yh4ASdSzBuWejcSg2fbgrRvXvzizRexN8fArSd29T5",
  "key4": "3zfRn1o8kPSGqbkAZMtnJxqnpW5svrDR95Mm5ZEH3DsyZmjfj34zc7ez6hCEyYu7CmzqNJzxTfE9TgjgHKZp1hGp",
  "key5": "5XLBTcDDhQs3oD6HcJPq4rrzJ9FbTSuaArut7qEthbRURyx5JNWSSnQ5xMbAAMdM6odRCkdagdUGzzSrgCr6hBpi",
  "key6": "3yVTZ7kMj4ogmq1mZ1v4FLqzaScqua7TfAL57uLKWeNoxGFbZrXYvxLGBwWhXGjiEZUqczwkjvA3aA7uRBCSutnn",
  "key7": "4rMtLRsbm24btVGrqKiXgqHyHuUKMUWFBEmwyeMeeHWmicEpLnYJCQJ7pNURnfPE4B9HFoFTT18971Bz6hR1THu9",
  "key8": "4S2WgwrBsttLzrsRLjXVRcFYL8vTkfdaaXVRusrRgYRNdjc9n4bjp2XHBE3HvxzaV2DHqmAkZxJZ38oBFNSCEKTV",
  "key9": "3WpT4kSNt7XEeDUvwdrJC5B8bKj6SvVgcpHrwn8V5ddMhqHKxsMJPDQTYN5xhhVqh7jpmt9t3n6AYcMnfqfjvUzX",
  "key10": "DKQeSFCEA3mgiVd7si7z2Dcp3dRSaQpCNeiB2DXJTrdND9EdCewwviktz9X2K6iSWAFyr3GtpdC4daWJkVJcc9F",
  "key11": "62ojxCzVRubJRYvigsMfLkykDG4PmSxr7VqrX3dRLiuS9ZugqQ4zZ52u2mM43DTY7FdTCcMnJGrwqVkW4YdMtSQd",
  "key12": "36d7t88Em5DMW5y2MSrtKoQfLBWkgqjvw2UvgvxJAPNbc78ULUZwqes12kG9zc9MuoLb8FjHbSM5v8QWseGYZ5g2",
  "key13": "38AyWZEMsbRy2f2uhyYvHcg7YRFHVjRXgWrPteg8qZUC1ESSZJyrSCLXh8HNgzA38tWeYg27YZTmgPEvLKs63jUF",
  "key14": "5xpQsjZe2ovRZdfJ3fzE7pF7cd1HaGRpd49PStaXt8kLe5x35abSxEHT3N3x1eMsd8NTiv65PnRpKujhQoY1JiHZ",
  "key15": "5zbLjow9uLTDTf3LQ7Q5gim3311yNew1fzyy1SbZ2azqVWYR1nrUDMynWHFurhvf2JSC1hDqN9jrHCYUtD8QmFTW",
  "key16": "2UnmhSCkdnRPxLrfw4SDnmVQSTMSz1hgLToVYPBpE2rsqMaEFcRKJWqgTY6WSeRZ8dMPUEqJani8Cy1DUekVvvPu",
  "key17": "4YhmeSmVN7FctHqihE2YUyKHC3L9bsvXXUk7KZVhzdiyUSacZqVNie1N8NTUjr3rRrppg5ooVeUt23bMbbNwotJB",
  "key18": "3BGxUZL3drSXkY3ci9jnALEAzFsrudpGFdExQRvuXv3N14YSWPmq4fVYNpRtvH9ENwME5QqejPhdxPWFaAX8vmxT",
  "key19": "3oNWABu4jS53qpygoUKhjTd2eHfeykSFLrdjNuc6NJAyhgvSmtTNw7fDXCbf4qQY7VznV8Xcj7PMF159LYp6KtyS",
  "key20": "3MwwthHi6njgSbhpNa7uJGgDWtvD87GrxkfyJEegePMdHmkHjMy4a19bzy2aWgiD3iYvmd4Jid12pVu9kbDn9TMG",
  "key21": "oEgcwLQQZLZvVYW4HPN46pgz7n4NwofJKUzjUDnxBZVKKMXnLU8JWXi37D6ncZi4XCwTvbHAdnkuo9kme2YootN",
  "key22": "2nJzYnqhBgUrposZCW5f4uQzANdMGcpW82ke7dRbwpGpVfKkqzYcHQuePFqBRzkTPwniQjbaNqwW99ZVrh6EjK9P",
  "key23": "46EbH8GRacjUErTerbA2jGr7y6dn6iqDz3bd8cLGWaphbDQ7aJeQT2tGreaS5HbB9Ds6PEPcsVWEPmN7UzWztWBT",
  "key24": "5yw9btmyxHno2i2DDGf6rRsZzoBEysJN3NGf8iJq3NjE28CiGNeTgGratSvCXzvz6hEmAKhaG2w8gDtS5VskLhRQ",
  "key25": "3bNQHXuMQ1rYQiSN64Ji2brvGHe54YHcFTWvhPx5qsGKPtA4UECq75q4rCvj8NSPtfskXebUgm86dx7eietCcDhJ",
  "key26": "wDbsZAzNu482TKpZdwNTuqtdchD6MATmm8TSb5StbjkKoe9JqaFhHAnYKNaoA7cNS6UDkVWs6kiXU37JXMu1SQQ",
  "key27": "5sZVZQipWdTH5MDbUpxrhQmbGzoFqrivThEwttZrAQD8csZetNTJRAUbj9y9eNz8cqfGtKaaRUCmLazAEw5QjSjv",
  "key28": "339CB5qUKzkj5z9JPgTVCRNJjT9g7NHzE3VgFopbrACm3mqmEpYEbuMVBoFn15n5hiFFWqQjvS4mD3zh51FuX8kG",
  "key29": "2pojVtXwgStbJ22nPADmEhnGQ5JhsfYZCRxgHPLHb4VGJ4pyt7dMVS4nTwPqUd1WEHropVjTdmhUDLXNWCedixR3",
  "key30": "2ymGZTtCSQcY9wo83ZTUe76GycZ6qbaasV7E6ryDBtey74jHPMByFNwmbJSdT8dPLcXyBBJeGZgB85r1az8wHsdC",
  "key31": "2nDcDwx5SDNqD7RxDHV5tNPxx17T5y3kSeoZEsCRuRJFf4TBrhJUYs7HdMQqfK4JYsXtAGWaRkhdjXzP9X5EJ7mZ",
  "key32": "5bBWXJjfj19xWi3h8tEMjdy9bjdEqNvB2RNVkfYDRfKpMXGYZokrBzQ3DheQfQNF8rHQfUnYzRBRcAHZqsgnuGmR",
  "key33": "4KwMUqjQFYY6RFwdPn41VGoKqbx2MMQ3NTrG5o3e1ixFk4fE9B5DXoBA9MksCf4AVDJAJ74TG7pmp2XQhnsCbEDQ",
  "key34": "2998JADm9ZN3c6JrCWQjHoBx8vmnTwiJJAMY3WNsQDBB545gs435YeL1kwsBanD9BnBgi15GwtwSkASa7HAvmp6m",
  "key35": "2j1BsFBPjYRh9NoLZdvcVaKMEXaZjRtYAGr1cFRgQkUjhtXfFbrR7NZk9SUPVLePz5BnEdALNTCnsJtqbwXHJbZr",
  "key36": "5MDeGiaZLzdV8S1SHSeVw4Jo8gEP5iJt8NPXhUMfzEa45f2W8s3V9qHz1Bg7tn294MvTGFboTsPtXTBoL6JUWF6k",
  "key37": "61W3q6yvm4tdL46Fw4nhZdB1gdUKJoyRW6GbZnaE2MkaM8JW8PCTq5XTKPYqpDsgDTq7tNd5zCmgj7WYSwF4MnoF",
  "key38": "3xuNHHnDWsMQTzXZuvRQAQfnW4aLUhDbmBAYD948qgyuC61jH8kcQs27KJJKMap3VS4zjkwJu2xAUzDy5S6HjfwG",
  "key39": "XvS2PhRPVCUMGWdpVraouc9U8fGfmvEab4yTvPu5fmnqiGkwmBLENrREWmaiWq1YMPP4kBTYxDs7xuLBge4btfS",
  "key40": "4AabdzjBvFc3rXrDheWsPXsq7UKUFweLCZbo2smFVrXfgLNNL6JUKdcqMZ8zBpXz1sFXTeE6KUrBcVm9K9Ljgvtz",
  "key41": "3qsAo2EiTXqWSzbpeWXBB7RAMj1UJo5BUPqCxDV5mWrBgGkobFuu7V9i4by8vCc1VveRoFQoFX4hjReemPeWc7F2"
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
