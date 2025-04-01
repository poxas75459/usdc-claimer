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
    "2F4czYAsr2U79XuiyTk7ViTZDsoYhYc7xsdRPYHiErvGacvNHR35XtjU6ZF2g2axKLz98iqJEtqQSSraVGYqwVn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jiyz1nx6narCgd9qdAC1ESWgxWz4cvcQ9xViM3WAP4se8xq9CvhUW7hD7zxmQpMDP9LJC2eACYzDdnwHtBGmzTK",
  "key1": "5CJQea6zA5UhKHF8pfXnsxGZpBHwvvzFn1A7Kc2TiA7U9T7GBXAsVxUDVT4nqVMgAVgANNLW63bQPsYPRyrtaGMG",
  "key2": "3m1yeT4TAfNVjCUt7DKysGAVTXYijynxjhSH5bSyWQwe8gTd7iApHBe2yH4ZH7gvycziQKrprpNoFSeDrPAgYdPA",
  "key3": "65FHVpwJXz7v66SyqqAoSbKZtxvf3o7X6SNtfadkKGWgunjkFhE1eLTP1J3avxHq3A9Bo7tMeDBQ2WykgUVY8mmt",
  "key4": "5792AHcTyrzDafYQapkcCXYDfjN2Kw54Sg9qYeG4pj1ZJ8XT3HdeCCA9E4GPsM6xEhEvzu2eNGE395hiM7TBZW2s",
  "key5": "5Nie97beGtz1owB8iURQs5wvNhZZAjSxZ875zAqTmtc3fFgb99PNj1qAFisDSJF27kNKy4eYqCB5KWeXbR19TmPW",
  "key6": "6Yxvu38a3mxxYao1dsABpt338nrW5PnNPV8gr7fGiVKyUz5Yu9fXktc5P4arxy3VYgouypiKz3zVseBhXzKBTGN",
  "key7": "3yEs3Li6dPAr6iJurWzpjkNZFJLaLzqDaHQoUVDWM2kCX4XcnkXaGgaUTwpwoifdDGwW1CHmD2ER9RaBacjDuPfa",
  "key8": "3tJCJLDBuosw2PU5WZ9XnR2b5317T9f4Uu4V5mcdidVEqtgV5okxErni8igKRJ6AAR9NXFfCLp4QvB8HRyuw5RQr",
  "key9": "2HkVWFyTMhbRP5fcva7gDuSE6PVP17C1CsK2YXU9ngwRsxjvdUwNzwY9wk5kUhAvyVm2diQ5QyQTisbAqRqhmTvj",
  "key10": "3XGXcc4kUWYLsMJg8aWEJK8udr53rNQW13jafVUngsZSCq3HUwMM55GkgeKkSNQCKHX1NPsfDS4yE3TFbH5YG8N8",
  "key11": "57hP4i1rZrwdGWFgoVtzvgz9LPBzu1j1GT6tyfsFUKyS9LWi4mZrMTyDXsJQvwyjJ39CgrZpVurmEcLW781xZjJH",
  "key12": "YE7j2FxiCxufpWUMx75N5QMakNG9brF7PtXpHZFb1HHkRDXfAG3AbFsvUJ8Jca2PhEKMa9risqDxMNApxgERNZz",
  "key13": "fAE4rWvS4PaLf8smfnGY1oMkHLFehKynX8uYsTR9dvQ85awbPG42Gyw1qVHpYbrXEJ9LzWhUCyCJnGXvxxMfL3u",
  "key14": "3TjMVWRBJaqdA7mnxmJ4fCUkmiXR4mGjPoLw2c5m1UVeM4s7CCPvufEfhAJFQfppCUZ99tqSHAAo4S3375mSg9FC",
  "key15": "Z8wQq5UZk48BN12UNy2gkAw9W1jFbcpxAsnfNB9gjjwZbBo25UiodFTEHhvJYXQ3VbMk4YdKKmoVUcFc1VVXwET",
  "key16": "3AsLgZA5aphSJxGkCV6Lga4hMgif8nq1T69i36HTVctjsBv6xX9B6zPfa3tDYSYmF8uSE9Ce7Q4A69Y788ZcrkHM",
  "key17": "6y7FTP7g3XLMfVLHHcLtChTVo9jqn8Yc3wmERYq8KLzcysPHAzWTzCcELuh9GdFKJtZpQ4HtCRektBbAbWA5J4F",
  "key18": "5Rcmb32PKCbxoYfkphnTNVknJg9dTVrvA7jJWmejQBQ5hDN1MadDisJD6nFoVHvm5XxPVbgasBBfJACDzGHsWr1M",
  "key19": "jGxPATyzpGAUHpVqRQad2TVeK4v9Tu1BCmTyrBJo5oeBxNbfWnJ3TbDyzZNgVj573xtMsBphiRwr1qa92eqkG1K",
  "key20": "YSNFWspk1BBfqefrBWuwPGf1Gb1cb91CCF3bxRNdqUWZCDUpEAZMtzRAoik1fvc987kRZ5o5Q3Ri4eG2fMV2y7S",
  "key21": "5vpDeJgiFwRBmVGsURiDB2TbCWdsYKKrSSJvFH71GqsYyqXgVWmc5zgDfvM5RyW2Y1V6JdByMoACHn5Z8gBzbGd5",
  "key22": "4BbNocjZu2yeehtZQWqYNMQhkjZBHt1efHgq8E5vibTS99hFk5bxo5dmmtWKwe4V8dMf3FsZBbXKEhXe1FXBcCz9",
  "key23": "hjLUBZbeqa5j2NWbNQzpgC93knap7ngr7TXjdNzK4ArF2iy6ruCG3NpAvvqVB74w1YzuGZUAKBidgggyL6vJd1u",
  "key24": "66M5GJPcb35nGxVYUAVffqSN4FG4erPhc8HtjXUoPs8tEE232hLvMUcMdUyoFXpCgdeXnFiSjd113EmSYUGKPJW7",
  "key25": "5Tix5dJAz1k2jdz33btHUBisWDaPAd7TyuJNyeX93MgTsMT2vr3dsNTU85NBZHwzRR27H3kZZSQeXRyb2XFQ6pkT",
  "key26": "4Gmo2Lym6HeJu967u1h5BFSX15pGgwQfJGxd4r8A9sZc3xGLdE6SkkTHuKrx2Xd1pxjxTJAQ3qHiKtW7xbi7Z2ai",
  "key27": "2yGeab2VYJ9rvfkZcRbMhAD6iYa9TwPedqw6SBDRGMyRxEMPXsk3AZd6P7JUyPkHzNeyuebUHcYzYg7PrpyHCwZu",
  "key28": "4YTnnJb4CcFbpBrm9MPQYk5Abd2nXnaEfXXTUNuCfp794JNQmDNfMzdVfiJZnCj7piJCfvgGrJFRm3t1zoRc512K",
  "key29": "5s4wvtM8y2CB2jWTvpbeSYx5wU7b1dAWawane1vPhn1WivZCeRgd6Ek8RtP8z1mg4LUpY9jQnrQK5H3CmNr24QXH",
  "key30": "4BEvAnVyv7sNxdbd8nU1HVohhNqDXoqgrT2xsq3V2LPb8hJGNYDuD1LdeCgosreiXUeSGQA1Yu6gq9YpmioPRG7A",
  "key31": "5gZeZgt3Fh5Mrc5D4HwiwCQund2zmumzkeAPy6yN7kmNFHjQcK5ULBPxHej8gZPYom98H6QsdUwMGhh1wDrr4XS3",
  "key32": "2yaysNNWZ6Zk2diiqWPCnxnvjCXbEZ1y45G4G2mjsiLmmkRZKj3JynupX1vW5m3esJf3YrVS3guraG8De4sM2394",
  "key33": "SKAB13V4wgZUJxcteusg4ocVqnfcRNAwnHK1Eu5SbPg2DGqDNy9nDGTDwWY7jE3vBWfVmX4iaYkKD4jA6s7S1vC",
  "key34": "3gv4shiJvPnSd4Y4t3KvbR7jWy1RyiNw3YGUXQyf413LBCsMsYeV3sJ4Hrt3FbfjxT6WKFCLeoQZ9TZXgJroB4Q6",
  "key35": "2SLytQfqY5BScu9v7SwHcZNWX2pESxz12fu63g7B4jWrX84R2T1tKHdmP2ndSUcNz7rzTau8sb9tUhPfFMgAytxN",
  "key36": "24VrTfiEQvevKuM9EDkfqNFf7vXfTo7AFfxwCFnCe8DKxnwAgQmGdx1yA9UPR6RxK5Qu7Kmhw6fMtcaZFtht1SkW",
  "key37": "3GP1LTjXziw9riyyoBabA4NB2YYk1wRnGebU3YVRsEW515WybtH6MAaRsWLBk1xEFz7DC7FvVgtPJocm1GDCssUh",
  "key38": "4sE1m5uXESg25Rh8eXBGAv51BKPF7t99JuYALunuDxXnXfTzbApDzP6fV9YRDg8ud1hTstryWex97mZ46WUge7JS",
  "key39": "55bJN35okTnWU3RvwGYQbPAzhYAMSzAp5GKCCk2LqSh8ZmgCrgYoXkxwbfuXrsUpqw5ZkQP5LZ8Racfe44aL5D6G",
  "key40": "25ENwTorqut3cfhBrbnw4Bsx5Aq4EofKgVD3xucnqRxR5vFPbi48zkdgXwEkdhqJL4t3C5YW3najBAuFfAhwg1Hg",
  "key41": "2x7GYsmZjZQTD4rwiweh5rxz9FQfGm59qABc45HM2YWwbVULumTtJzwYF1hduPD2bDyLG4zXNpPHV7aUJur1nTAc",
  "key42": "64UjcCKM8kgYF2eD2AaMJhLhRJMy78tJbBk3WnT7mcFC15ufL2qgV3e3EQT7Mk8ebh91ZLyovqnDy78FXiTKr6Yv",
  "key43": "4hpD9kMDxzXchn57zcFUj5kEPM3oxAH87LVkQ7m9yV3YqBhMMSyoAUPYbyZDZ6WgH29Nc9aF4GFphjdaCGq7J7Ks",
  "key44": "66hNFZwNuisoBgEWY7Kv7P5HRFe9fvP9xTEW1FFMkWGWSxhcb7kHFW5FmoFk1awdc5ZffBoUY7XWw7SqKZmMbvrb",
  "key45": "48aDpP5ZnfyJxWVuJQVa6tX2j26uUVbfAj6iwTUb9YZrX8zFeepqExN3iDbhrJxq1AjsuS3xZjrtmSKR8wnPkq1z",
  "key46": "67LyXwBW4VjzfKFgEa8AeBy2WYKRhTwRUdbgyGA3DDis6J8WcwjhWnK74UjpK8m6DZ44xWKugSxv7o5rk99LcbKW"
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
