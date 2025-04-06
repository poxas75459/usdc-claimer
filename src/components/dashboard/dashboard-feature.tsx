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
    "3oGF2CZyPNU7qMGnC9CoNKLfbntyysPqGj7MmP4PDhR7fdQKqbW4X2swU1LTKQq7BC5cV3iBn5kFLoUj7LEze7nZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e1wUG1VAUzG7akGby1H9TFtaZGRGuuewpABXZURXtCXAu2ozNizJBdWC7mBAQftxm8EJC7gwYBr6TAz1mE5Xmfy",
  "key1": "4VQgFERduiRjxW9CYp4THA9SUskcQSfhMFvtQwrGGCXyCEPDvqhXSmP1w4sRvXzFNgJhvUgdKFKpzt9jeWoe6rEk",
  "key2": "2EGkCKyRwktq4AtMCFWD5K6LpqUqpsRrKprt4565GiGMtW3NJJd3BJHtb8BvQBFvGdNnfx2XBz987erdCamHWHyv",
  "key3": "3eeD3D887sqmLw5C2zLXRscUr2o7GFdRodRJNFkPxQwtATqy3ExAa9fatodGUacVJsBeMwTcpgxx7dQLCWw34tJ1",
  "key4": "378UQSafY5eJoeAYgogZMUJdGWEXt2tvXWtxz5QM8qiJkbUmzfz6uhnUosdHC3gksHNDH9NQgmiGc1FST97X6uN",
  "key5": "3r37CxCzYEZc2Q8hjoD5PJszCUHnKoukna91HVrM8Lme9BZdFhkB8FE1HbVv5cdisz3whBdwrDsJHYoCEiLuwd5m",
  "key6": "2BUbpRbm7FSnWUDx1DxtnTVBWuL7Tykn1boX3xKTKKBuSQ6tHjY6UU4iDHzd4SxVW2F1nDp9HB4BuNeJJXz1vd9y",
  "key7": "62SyUBepYibWhwA37CM4Rog1HdgwioLx26NFscFHSYZkRhR1sE3osRiy2Jy6to8basvtvGdz12Zyo13RcAadupdj",
  "key8": "5MF6svqxbhsuVJVJv5ftjc4U7tHPr9W7jZUQw9hRxzEjjzbom2i3LSPcPM5ejUmhH8pJssZJQ717qTLiLJN5Tdwd",
  "key9": "5f5F6RMpZSEjKyQyE7YrrusUQsLLKmej8FZ4hk5qJQZFXpbe83Y3bAN9VJjuXqqW7FTiYJ1WQp73eYZPSENNeP3J",
  "key10": "2z99cKwRPLzWmeAXNRPxkjR7x46gkCcSNbPZqJsz2jXtFz3t6n3QLKNxqG94XirxJRC8CRxd5zd6tNbFXPr9Bavv",
  "key11": "5UtjzSJeauHMNNEp1g75GAEdQsKv3YAzJ97g6tVscgMJFWHbLkLrzfhEHy3dUgyLfuaDYFpMnZ5TAHzTzrbZ421R",
  "key12": "2hvf9fXzW1thJQeDfXgbs8Euaz4LRaw4eNChdbGpVFdrn4FrVUqaXKpeCvhqDYWRodUdcXat13VMsLD8jz9hyJ4S",
  "key13": "x3XJ3msfSS6rhTjuaEQiqvNMfVbUw2mn2mXZHPam8GpziWYJ8wUWibtzwwc5UZpQKq2fECy6gEfqfJbEJaJpH92",
  "key14": "4are141VeemBpEokhF4HxSaYJ1E2v1nGUWqmh9na3J9WC9KNPX94QiYQbUA7dUjgNiRRFtMCtptKJGGxWRqYQpFE",
  "key15": "4Qb11S7Pe5WENxLpfkc3AMZvhbCKF6y8bWWoRr554JJFFk68TAd2CQcGBL3NTwEm4pjDf2ERfeTz42mLipMZBwcz",
  "key16": "34uBoEX1e8s4XPda1WgSYyU1SzRfAuF3ZUPcDTUTJoR5RsM7bise7X419KDKvw651HmA7H2fzZBamMUQ2B4FY6zF",
  "key17": "4F4tBddqp6CJ754SuGToRLCRu3Jqmb9rGAtMTbgqvSoHnZx6DfFzkAiH6KbwwTeR4RWsgz2UP1Pwqah6LzWo3KWQ",
  "key18": "6LuZxL631N72KzJB1yDBiUdzhfs2UL5k9phr4SmRfGCDaY5KcYqd6gNRrzqFenWJHyjUcnFBTY8ZT9Zbvzyxpyw",
  "key19": "2Rvk4kBHwcB9VZxVWhXv6cBczGcQ2ATYDHUR7ABDKq8TRj1y1bjGvh9B4NfgtfdGZ8tKs8NEgw7GXj246uwpNfT9",
  "key20": "3s3sAJigrdzGh2iPU4VMSdibVMakvjHjVJzMR6KXkVGgDG6GsQ8eqhUgNDNrGVHeZfEkSHMucKPYozNTgEbGjTfu",
  "key21": "4LyUP5f53ALGBsxSp2xYTmkEBVQNUZjcW6WgTVXEFG8jffjkMg48iuc4S9XyWemjmLpy2NLfVob5nETfUZXwShxh",
  "key22": "C4JpYT9xLs1Qw2QnAau9EkvPmHdDobUh1PgV9dP8H61aHThhnJ2GnfXVPnboABmDa1gtnHfmmRTr83vktnkQHUc",
  "key23": "5RFVHBJcc6YoA844Xsmneb12k9H28jdsdRjy6VStvxjAiQSecpX4mrf6Xwg2p91yLjUfj3tu8gLVYNp4z9QHTEyP",
  "key24": "33xoWroFj9CCVPritiBTYiBxqDsNsGactBgPE6bGAobP7q5beudN6csZ5pM8q65om8FcY5eUM8cYb2FrZ3N7kyTy",
  "key25": "5ESkYVSfZHfV1HhxXRs7GmLkk58nTPwYQABqwXocqmmKk7Vi9CkDpfbszm75LJMXmorrGZFjqoyVAPCTvDAvGsrS",
  "key26": "2DSurNdF898ZA8QQfbxvWmyVRycyrvWA2ME4unaxTTYCohwwske6VdchcifXb8TJv144ZuaNbkvYSQj1rzJxxXux",
  "key27": "ktK6dScvKjmnRdqgy1QhFRq7KJKos6n7YCZ1UUh2NYQdijWKH7qEfF4UjCiRv5gM9F8W6DJKd3DdEkXyis6V4Ry",
  "key28": "3qeThUcgNW6hAf9GGbB7FWJinAMH51fpigVVuihmMd5y2nBBJiTVXjuWydf5hgDzu43B3GHcjWuts74QoBnVmqWR",
  "key29": "5MErTmzKDsJY2XBHZZvSgqVqRe92dpkraEahJj1xqpUzXvk6DWZE7vp4tyjr6XPVrEiwYMw5NuyE82XshQNpDVTd",
  "key30": "ZisbJYSiSqBpbqqhofBQdWRYv5yr4G9hPv4T4Vo8TCGhxSdPBLgs25aAYk55cPEJaEKKNYjPDDxUwSWLPcyCFg7",
  "key31": "e3ruTZ6ssRxrpHNkYGS4C1F1xoZXFVVusMM8z8QYFzNmshnGvdvYaDA6qZfrxCUwxpBdR8nrj47poKYDGaYL9Dy",
  "key32": "4v32xNPmuK83ohvXn5xetktUiVuK5psSmFQtsBR5VPNVtR1EgQdMAkyAXqkuaSR1NeLehG84pzSBCTz8qjkFqBkR",
  "key33": "3DnZpQtfJXkzLB5T2MmFPtAjezRY7YmSufE3UjUriwEwuQGpihvVgTcFq2mQtrSTDaQu1MYUYLo6kgbaMxaBdQCw",
  "key34": "MNoMuz2tGc9o8EY3wFufDoAUr6rWMmDeVeHKggHGgM4UiywiGd1NJoQkjmvbtTHreg9Zgqs3xZA1NBuv1koKZ8o",
  "key35": "5G9kGs1QjQRjwtg14PjwGtd8Y9V4S3y789WuZy5X1Ftdm9y9cjWAxttHxK1HmVvpPh94y1JUoTYS5sebzUx3X8V8",
  "key36": "3r2Fh2Qzz2Km8nXhW2TMX55UGDUw1iwt3EeTQnUMPrYhJH6KozRWhX987iRJfoyK5WHLt3Rhe9MBjp5sVEGSMtgd",
  "key37": "59aAUGoPjk3qAwW2mZDvPBiUxRFVu3iVSQyHKqGc3ZQJhXJxRz4F1rXbTXZiv1QkexyqvnTYNWzcQBsM9TWxi8FT",
  "key38": "DAJ6MavavZ56iWwPM15ksbwiTuuvFnjSh3hu1uLzG4nJBD7kVJKL3xmzSAKSjTLS95Gxb76j7iyeYyed3EfLRV1",
  "key39": "SaQM14F2d3Bc6m2tM7ux7XKmyHM9hSvQ9RxnGau6NSWfqPNmD9L6YbvR13MvRU9taorq8FVCeWHB2Zo2uLFmecC",
  "key40": "4JPZSQ7EjT4D7sQYDUeAxHrAq58PByANiKdcrGPh3rtNja1Ve3Z1g6BJeVUzDdrEYwpfgnS5SP7nitTZ1fBA6Kya",
  "key41": "4Rk7oFSEN6ABPpQkrtjU2wyLhvc27EZeEZiQJx66aMthhsjKRobAcciXCigTkVPT8EoyRBh7URe69nkFB66hHyGi",
  "key42": "2536cmU561RkzKovxM1Vkj7tuzNSLgCAjnJMGTehwXJXokrVEdC5huY8HKQHSWLM1tNZUxdXW4fW67dVbujFJtkj",
  "key43": "3DRUVCWsZiua9fu3EjW6GMYAzz5aXbYRfc7w2PUvc1Dfa7SAoyJqDMeduSUSnqhZtQ3a7GToLqfKFdASA38WWCHx",
  "key44": "4st6oMEPxAez1tPRR8yJWA3jK5YUGCromPj67ePRjwsUYruVZKVBYRKtM3viPS5yrq3F4JGUdLiDnxU1FvPnNJMc",
  "key45": "3VZjoSXJTEiaEvHsceW38uX7u9NySsQN5HpLYVJumAjVzGhydLF94ik5Hq6ifw2XHq5LrQf76rMkLgpuYjyAPWph",
  "key46": "1SBbiGhzLN2vzBangfh8u2fRg6Akt9Ee4cPZGB3QX9dyam2N9KRMuXV5JAH4kWoqj5uvUmGarXKXXaRgknd5zjf"
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
