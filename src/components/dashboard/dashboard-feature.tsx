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
    "xU3V5Nz3aarXiZcUWh9iDxunZ5akUb5G9FXqDrfhugSEAnoiAShRBjsTBMX2HUG1ZHBF1cTSesVyGDQLAvsqhXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47XfANAFP7kAfd9c8aXTdfBe2kpto7pZ25zxMn4byvWbeVJnJ71fZN9zJrAhyjkwj413tE7wraHPnJp1DYsp9BH1",
  "key1": "3W1qmon6rZHihqMiVsM4iCZDLSXaoFspDvygf31dpWmfYq9L4Fkf7FgkY4f9ESMeGymnNvuVPtZbMjZ8nbh5eUqj",
  "key2": "3pDrGxN1PjrURyp5F6Kgr7o57BLPwMqMk6DRHCcUdeiZRDYxzGYBQ5nubFMCcBQbynWfxGtKqUgiH3YgWyykEswe",
  "key3": "2XxvhjdrxxKSVn5EVUbB5jTTbeCCcWgPo4Vd7zBUWi5N8kd8SywfB9pCjG73qPyCFNGNdzCJSoTQF48YKvRbngL3",
  "key4": "37HX7TsGvDjADVFWAWBAC48xwYqS9khdseDSn4Y2biwk1dtxP4Y2R3HyrLJzAsX3nTUMb8zBiKMjrhroxQ2kuhVV",
  "key5": "2zqURrdNvwkn8mkiUhy6NoxmBjjq5U9G2BW1c11JTDE2RrDsg3ue2yy1VwLxbPfAnKR4JYiD2BoJ5SHxw9AjVPt",
  "key6": "BhbmQZYFmDnhEU9E6wjYf6ihxN1tJU2LkgUVNN3GcJo9KojskUtBobZrKXGVmL9xzUys1ggLSbMQLaN5HaZMstS",
  "key7": "5xs3qZDtTuF22x633ik39QxRr7dFX8oJESybensjyiNBLpCczuQgkrbc5E5Zi26NRd6fFwR9Po6jvHGWjXMLWhQw",
  "key8": "S8ueyhSLvUCUFBqJ1yBReWJHVTkd3u3DtrJEM4EsaFy2Th3AbGT5mP6LNsXx89aLvNPgRZ4Muq8NTcLEUKWnQUC",
  "key9": "49GCFRgoVzJ23qisfXQ3UDDFoEXBL3xYfZsdff63Sm26G9fuYNZr48JLRzVdSv8xYWBetNww7xrZBPoGegwkRrLX",
  "key10": "3mtk7WhrxTfJ6duGn7kM8eVbEz5YttUF4Z8kNaXUnSmBVfpEhpE3UVzbEEmT8VdjBALuEbnKCmBx8UDttM1JTebi",
  "key11": "4VmHEraZTux8nd7avipzJcGGsRKjBAAJ7urqDB9q1j1d43rfzMxc6xWHCyagCfotUS3ooXxaULcEuL4JKQ9Gaa51",
  "key12": "5G5ax3C2GeyX8KabEYGXsvy6RoGPVKMgGmsW3UDvfnHHPH2tu8qXwTUPQvXaG7PDz2wD4sHMFrkKAFDB2BmSk5qy",
  "key13": "ZayaLZEd6B8SMfuqN7Vg5GyvhED4GDCDxQDR4WcXZqFeTcc8s5EpQ1Y9zX9Yq5pmxswhJWvXgsr3ENin4vnsL6d",
  "key14": "487ucEfqfmJ8EDmBPX55erLNis3HX9a9jion2RNz6SgZAHZepockLXugZKjXMdiNMuhYHiLZqV3bPiQBVxLin3r7",
  "key15": "51eP32J8nw7fhAer14cAx8amBK6Kp53fHfZV5jp8PPtPkam7ZeA7qfMafbXnK1AmB62t8MgcMLuyn3DxLyqRy13G",
  "key16": "2TpZV3HvvqMMJDDXgEcNf6armiYH1q18KLY3o3si5kpVm3CVcVNbxEV5Zsf2pF9p3yeYwhzN1qnFifE8tu5o2UPJ",
  "key17": "37MTmoKX9jpHggErTukpE2Bud1CUofgaieF2DJEpqc5srMf2wL3Y88xJMZd1rp3qkH692BxmFGAod5audqTyA8rL",
  "key18": "3axjRrd2KEM66yYJjqxPGm8oW2zFFL1ga3yFYita5FuzdbtH4xJJvewSpFjDf4L1VhnrFQjKfcn2JTdNnvfcCUYj",
  "key19": "44EwrrsaUAbpArbFRBSXDvS8vu7eRsznZZNeVRu6X78MN6mdaUDbfyn14YpHdVmqGEwYKmYsdtNjnqAJYLrUG9Ta",
  "key20": "5odziPZ21eCoQJLHtLWRKXHFueSaEkf3UC46iSgLUA6czZRGjCz9efxUdBWshWtaFbWtsY8fJPWYjBr2j3wJvEqa",
  "key21": "54QaQRQYQxXFF2RcmZ5NcEbQxfEibuFAJaQueM2UpFubsLDDE24XKxxW5pZHc6GtijJ1SsBG2xQzNMR4GUMC8f3U",
  "key22": "4ZFqvXWStAmM7kF8kLrgNZarqhM8RbHvtaRVL9nTMtLXf8jhJ3rX9JwA7myNfpgwWyhSmAALiHFAC2baw1NUHh48",
  "key23": "3a4nC3tUpmtKgwonLNmLSia5hUvxqgHdHoQ1FBvXB5qxeDxssLa5zN14P4Ptt9DB7GQ7hJypWH9dUpPmbDUWBShq",
  "key24": "4zvNdP6yys6w1wx8yN6u8kohv7mmLDrVVLuRiuQTjiBRiu9oihvEGZNV4LW1qdT58GPWT8uWz3FuBUv9C6F2FMVh",
  "key25": "2485TZCiBJ97sbahdmrQaPBWFKx8r7SPeiqLPscwzm9n98MYnaTULwaUWdVrqa6wJsuRZG8rfNpq6GHew3myHfLb",
  "key26": "2ZK3ZRU7kQx77XTJVszyPNpzHrXGp422g8pXFtjNfv4HG6WZRusxUpxEycpsHpiWGmLSj5LyQZp2ZNrZF2dPajcA",
  "key27": "3Rt9GptNyhrwTAw29Rm5AhZdN7fAn7rnALFg2PWwqjMhQJxyuxXdrSH3LBJdutXX95NCbUjfo93HPuLAzTkczcBr",
  "key28": "4HWqyXpXEgYhagvEbfTXQ2oNVLMFv5TZNEZh158BCAZZ723uiskgD31SKuHKnhjgrHf9uEUwqbNPw9SBNEJDaXhF",
  "key29": "4G97NAx2fGEtVQdGEsLWbZd5upXf8cA5SQTVX9QPNPNMYWqovJRgrJEPDN73CMsaWGC8fuaaUGkSgcpREBK7tmHC",
  "key30": "3L8eLBwhYgCjgWJQGmxpfaw6T4gpFH6DJszJupBSjUfWTgbwtfWmVwWc3nHd4BB7drunn2tQ33rmTeV4mJpVZv3i",
  "key31": "JrQ3bZiWUEtzDPhv7sciUQ75cgrNKdrtcVNXb1QMdJG5oGNGA1LKEsZ7qLCE5BLypsmAx7EhLjfdxkTA9djeYRL",
  "key32": "5mJWbdNfv3U5jN83xuKQQNcNMSyMWQRU8jJZkC6kPdddfwKk7HB3R8rBVr8t7xaEBpHs4svrfArmmf2i1e8yZgBE",
  "key33": "5gPqMGhJaitkkJqKLdnkRgzTHYSJAwbLxotgWg8gmcaq3vY4FVAL9x1TuFKy7Nvd8XAQFiKcMDKhPhjuD4Bi7CCf",
  "key34": "YCz7jh2BRts14LKJDmEiCDq1CWeugC2QA3fDdXU6Mt9Wmg1o6mXeLyyY2YRFcWapcFBaRrVtmo7VSf1UcrWWdVj",
  "key35": "4YbHgWXNd4TgqLGXgEZz886hwbo9BjhoMHy1ugs9LQQNrdmM2CAZEpH8ixHnwi1sdYgXhwhXqPG1ZSn8bZ9a5M2y",
  "key36": "2s2QZdDcq88yDPpZoLYE1jvaqsQmcCcMp7Da52DaR4MVuCrTgzW5CfzNFTC3FgDiwzueA8dxd8iGXoHCGfviD8cr",
  "key37": "4fj3keP9eMvaGacdiCKXEYUmJPwkDTWytrC5JrgBin4QYo7ek8tfuj7r38qciW1zcXG5JnJVHHafjPTXLjfhCgeH",
  "key38": "4SqMbxosWa3aBfq1hcsrrQgqiyKqijEAeo3k8wKQyG6wTrDMF8Rua811qUn6adZ4scfpc4xNUndjnB2t2sCSdg8h",
  "key39": "vxa1ndAM7H7gND3FEMEajh2b4NPFkvwT3uAPnHdXNDiZhs7ezCKV3htXzafyNmTBnoFQhx2HVkGww6HBP7pNgtf",
  "key40": "5rP2JXC7VT49xYFG1oGZCRBeW3QWNoXoDYJKFcJSqS7Qky6T6uKjUHcQC6Fmj8MUs3AN7tQrsGPahcRN5m9Mh41F"
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
