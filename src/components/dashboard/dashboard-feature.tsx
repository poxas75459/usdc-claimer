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
    "3xMsBM5A6rtaTo9THB2B9r3BKUCSaJXJnRv5XUXMMriwQyVdRpaQ26ZjoHjQ1TAvy2bkxHSW9nxeLrVrBfzjDRn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x28RpbjBoP45ucm3iVHne9Se8QE6TpmLZCupiJikuLKe7s72GeNfq6Zp74YiLJ9T9fePkDdbhPr2hapQNKkG5M5",
  "key1": "47tgbSeSg2Aoabr872MaSqwFsZuTTFexAqGanvFAwFuphFLLYoBVcCVmbrzqhvF44ez37tnb16UuKipfGrieH9qJ",
  "key2": "5XbhaoKghPmfMbCPPLJzBjNsBErtMvexXPGz25kK8jSDfjigKVjN1jC8T1mYyMJj3ZUADJqjL7hsdLq9QXbvZkUq",
  "key3": "2Je7Lpv2r5xWkMRbnntr2EjSno9wu3UCJ1CxsdgdSmfEsnGoYo8DyPxh8TNGS6RRe1iqaPEQZ3JSzh7MAAV2fRdF",
  "key4": "5YaJ2F4GeYtPTrzRFNHh7XuC1rcyH8s7nuefsKrtXjv5ndyvVR1tZ93wm9UUnzvhqcAWftaM3sR4FHTGa7mtbYUP",
  "key5": "G42JoKxxsAsX6RJBo773gCKJnTFFJF7jYY6aTAUg91KxiUghZfFP7PvVNzq2DxJtz2mRpfvgB2dbpi1BZsrWTzp",
  "key6": "3PzTdjYJ4H7yqLRWnMk9gwPJQgstwRSB68mxNuftEMAfbc8NthsUATZgoAZxG54KwEoLNwFDaEk1kWd1HTNUuW6e",
  "key7": "2QbtfT4WfzhAzHULw4murX2kL4J4s47a72EJ84KTeH1tTTSP2kfiyUwzNbWPsaDXYQKdSEeZEizTGqcBskZNV15E",
  "key8": "2FwRGHEZAr1XNtcWcQXguf9YMnBHKA5x38pYkJXLq3VbmKPVB9SvJJEHgUn738RY46fYL68k4hC9CVuAkJDzierA",
  "key9": "58vghEa6BB6gYKoxKdDqcUd4jJmdFysZbh7fyChVyDsdPWaf9EFWyA78e1KAspHeFMAUV8xtvca2zFprtkV9pVzb",
  "key10": "RwePU2eojaniLKu2wH5CZHA8KNpP5gRdAikBM3hUpuF3zireGCxHogvn4sMHrsBfyvNFu3hDrWxcu4gHWfuxZov",
  "key11": "pZR1rPb9AyCJ4QBordmiSrpTZrLDPBVJnJ8rBsYeLVYTqpo1nRM9HsNMdrrqVLNi6nDTbMowTMUifhU8QRt9hYM",
  "key12": "3U5BhVaNntUcvoBABzuUGmD1KFz7fKiEvmGxuVD1R4zt5XsHq2J25jQwb2ocAsknX9ZTbaKMdnX183zsm1eoAsj4",
  "key13": "4WYD5ZjUEfzteSd8Ct2BrSDu2xdNHqGX3Q8hJLJeMjGukPieHZJV2PsEGfm72HaGJWEdGjRmCPKSWBsNuHsS28W1",
  "key14": "3B2Ec2LC94conq1L2ejztajYZJjaXsukjmoZ5qdjpQgdLQznh65tZQno7BdpUJdDHZTKvuondEJVCMjVjvntbmZR",
  "key15": "2YwABunYnjxwAnam73SjMEhnKfxNpVPatgYz4uL5abd8GzbZjX2qcHGDJezs4479LqNs3tCLJjCPBkuNZm3VZYwa",
  "key16": "CbEcmzWWNA6jUGiME5J5HZXpkwVa7HdXmdwXpBoGEPHPoyvPZcwYgC2UMYYWcQRtmJsGevYevt445vCxZ7ZnMS6",
  "key17": "3hV4noef6WPsgxfbMNgA5Db77fDW1ucp7x3S8mwqnZYDsmfEt1gQSKj9eW1SooJqRCP2rFizzLGFMpxhCGG7GQpg",
  "key18": "2HN3vsUAsvrJH9cWQhBzcGphtrD9LfD6yJUtuMZCwjEWQervASxeNzaabieUFUKS2c4pp6yvbGB3dGF6sk9nLLRX",
  "key19": "463vq7i5BXBogUbamL7cBx2tFmpiRbqUUB1AwEwqeAD6jkNBSzPePNbEeEAx8iMssL7MiE2ivdHGxn7bYXzNhBhW",
  "key20": "55Wo5ghAypRHhsyeihhxqr56Le97QC1k6ocYpr4gKHJh5aDmwqNq2gxuUwWo6s1NhUoeHMd2yw8osV3KQmqY9Va",
  "key21": "5wtFTXHASeWuXBV5CXVxfbTTsQmLmFwNrRGwNVmiWCxfjmvKi8h2KJfiWzELTy7myjb64VNvjHxbJXa4qpm2CdEe",
  "key22": "66ZFDDfpciJG4KmRTKpJXmFaPG9W7L6KdQPa1vWBzHGxd2NuzupwMhJjgNx2cGZiP4GevU4S4s73Cq2EzCTgiZ2H",
  "key23": "5eLQVda3X19ZCqa2nbRm6bEn6CaL2WDjFzt5t5gcrVsF1Y9gZufahb43WonhLCAuzjtHYLfnReUxfz8tRNPZKHCd",
  "key24": "2ZPLi7sDjE4SnxVV6LjRcLVkuRJLyFNtTTf8L2dLQCPDGsnjaS94topkLECxW9uQMWmEWcQBJgwrmW1G63CfVcqh",
  "key25": "5dUhUy6M8Q41dsSQfFwjdJyg4epKdVELNWzQV5SPmPhkvd1uRAAtc5ianhnPmG4F5YfUKXAFRNCkXDi5fiZrVVpv",
  "key26": "wCoJ7xXgfpDwy3QnaWTBDjpYwE38yW2BykVhzjLoJFYUCsGFShXRyJwBx6hr5xrKx6CHph9nnka6HHyH5rHzUZc",
  "key27": "27mqGehYxKBsvfk5c92BRubp8MBXtwsEeLYzx4SMsezyaR3s2vCa4Zh98BtiRj1yzx6DSmR171bWyFjPyrZe3qtB",
  "key28": "2LSHibohDDwNiJGUqm53ZQpGfs8MvExhv23gBELqN8F5zVNDkYgtzPWfAkNkZ6gD9HxkdDEafjyqkpKokoyV4r2Y",
  "key29": "5BeQA8dzYaKJ1pQQXxYUDM8y9a4EAnhGPDoo6ksnv9LjPu1JXyVctfNdgfahvGpocQcw6sT4nP1AWPMbYiK668Fq",
  "key30": "iPD7t8FZGMLZeoMPL6P5izYsVS6VetsehoEkmdUpngjRSzPWkhogFoKHDUw4GmY1AHAquCf5C5XdcVmAQeaf2tt",
  "key31": "5Y7tmp8b71jbx7qykNJ7Fm8VQtEHJoYXvYS8YZW6vg5MKMQZDDXqWNirKkdMKKnKxgFtQxhkc1UPyq8JWKpsEsZE",
  "key32": "3mDvuuGBaGvwa5eV7CB31V4YbVqfBgqsbhksXXZumeZEyjLCV4ZptyZkwBCRTRHKtTmTgZL6r7Jzq9hHjtnoDGwF",
  "key33": "476VV4yg1G2hxvYEGhUo4q7u1rtWQepNbBeXKhUrjNnYC3aYdSAWo88JV7dbtiuPA1tM86f3NcZMGhrNxJat7Q3f",
  "key34": "2gaRN7YcPUAMBy3Yiki4sy2brPYva3xLaktfhRMY1e2nspEV3eSj49tKjWouQv21h2fkPLind122GR7wmJA8UvzK",
  "key35": "33reSenG1QbPgRvC3cdAmwFZ9yh4EpU1GKazT3gD6pB7bWZtWhXz24KB848KxwkyzwJaxadw78UadH23q9L3puyG",
  "key36": "3Nzc2WwMBSS6Drn9n6trepwdLZ9GqhTZ1wdr7VXouj8SEATMuTAfwVatevNm1fUiLmbEzzkPG2zBQwaVaHY6sA8P",
  "key37": "33V7txceKePfEkppqDUBXVqqU5u55xwuQqnZbCFMi17yhLkEh2zDeoRFgNM93bUPwufcpoUd81wGhgBKZH89kDXD",
  "key38": "4pj2YbpXA3DZ9gsvqtyG4bBng2qvqcvNTV7jhwg7gHpR3ZnkthCdYvyaCs2hMWGyw8YRuVHKrDM8wpZimfyWjQpg",
  "key39": "4U3j2i4ZLTyRgvXv6h3o8J4Di3J6rBTexpHGRs7vNCbHbNcXHvJoebt96oeHwF1fVkQdbx7vwuGhM3svNyZSx1b4",
  "key40": "4oWDdY7X3A8Na83kwiwyJxCLb2t44Hr9DZi6iVYkunQqqwBZp6BXGnQLJF5ojToMtHPmQzT4gFXgptvtGv5XxMVi",
  "key41": "2L7NX3BtfdLrVSXfHdxmpfoAeD2gYLtFF4cpGoJmF8Dbgjp6eDv2xPnagWSMQEVAjdR4gNM9P2oL5hVziUBBFpTb",
  "key42": "2psVA2Udq78fynYqYvc9jE9BCTWAE1ZFwft3Cmr2hoB7pXjWtcWqzGMtUmxZh4Cbx4DQc38RMNmpkhAD83npNzym",
  "key43": "bwBm22HEb1MXfLP5z8MiadEHgwqgVzRxUcioiN9xTX6eZgia7ndRZqdQLpUMz75XpkgisKAkiQZiXn2BZqx9B2t"
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
