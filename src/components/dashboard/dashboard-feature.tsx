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
    "5KN5ASGgpfUwZWkQuGtaqzfrmEXQXyNCPv18kMKPJQG8xUQGM1a2Vf1beZcu5Y4yRiaysUFwr8tFY2dJ4f2ESxC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rwrjkrAm5Ae8K91fJ752wmQwJWNShV5K11Nd8yi83JfPFXSWFfTn9QBSES7uxGcyrDPnnoBYjUQijhatMQAYmgQ",
  "key1": "3c3eAmYSFLLTk7zZ9F6k8d8i5tMftMsA3znNb4mHM5dGSrErUNZrafk75LnomRfDyGWMxd9VafeeY6r53jxwApfF",
  "key2": "2cXydCx17KQ2dDT6pswTuzpdr9R7Y6ZYa1LHGwRQQL8daUfqvMP7rPfQmn3qj98RwZwuBvD7CVWjNZwwjxy4zMsz",
  "key3": "5NZR5NnBc6uC7skrx24hDULexLTqTVdsbcEfzL6ywaJBJ6nTSBQ4pkxQsdfNn2rp444JZFpSXYDuZ3YEZoEMQny7",
  "key4": "31AxqEvboipt3WtCpHCEgUVSdDSQCYwvMgXMcwPxiM5pmDAGLrjgAD5TRDBYDsn32bCrGepNTcUvhjKS7nGDYERa",
  "key5": "5F2ey24A2hddGB56UvQnM9J3VKPyRSBz9FA6awKG1NA79ozdBRTWc2w8cqn3wcQdUmjuftAgJNCKhC6mRUZ9APma",
  "key6": "3Kusqhv7GuCiC1ghQhN3FUvaa9SgRTvFs55i2Pwcd7dmvQGduzJNrr12fqLdYGy8wU2xSxLfbMPaW1oeaKYiZF1J",
  "key7": "3aF8YttfgyLdfPWQcAMtS96U5vqyHJrsDmihFkmUHzVS2465UYTbuRvjeWD6eKMnoUuhkwpBZmTR69mC5qJ7QVPv",
  "key8": "3wvG6o5iLFNvUi3gCsBwaBstk87E6CcbgxFZ39jK4j9NkPKwQiCesiQgEyJSF6hnz9Aw2GnhnjMHAmZ7sR73fu3E",
  "key9": "5H5XCtMqx9EAQ1UuNTSsJfFqovbDpnJeEz7jvTw69AwhzsFeZzmYFL2GLYcjducgSTZc8sc8t4YkE6gVPFVCqQWc",
  "key10": "2qWFu3uBvZbAWxDwfRv9pc5ZrnNHfW6YMjFkVeqfYEPLEQKjbYAiVJZ8AmC3mEPQahGJtED7VgsHWDZLTgd6j3qR",
  "key11": "3a86KEiDr366AMzs63XTZKN6rUt6yjYAG1LM9sXtBJRqbJfrrM6CRmDM2gKNopABtz5hWwLDcj1LBcsddbm8mKCq",
  "key12": "2aDkR39vFb6RaNKjfGT6rHros2ZpjM7HbXtje4DqBWFBrh4GifWYqNRDG32Rt841FaUpCEUNvrwauvf2kXtfXxjm",
  "key13": "5aWyiHVCw8vjE7rTFJeVes4VAzqorz6hi55dSaxWFZ1pRpFj22yk4s7tKmRAgdV3UbKbY3m1uMw9AA7CixstMC5M",
  "key14": "4dkmnToABEGW1vG79wzuDtjEtoukgUNazM2c9Sgjs6TwLFvJdaNx2BN5tUGHc359mtc5zfEKpBebuzQkEygjDhaS",
  "key15": "2cJHyExZCuzMdeFCHqZDrCjXNjm1YRY8Rnfm5JL39sWmif9caQeZE4b32h4fLsaNw6WYyrwaanhJgPfXX3eTZG25",
  "key16": "5ffjPgsJtVcVhangKsAvMohh7MXRoJYYZqd4KiXeLgayVNhNUqGSp5rxei6hEprcQyV7zoKSFkUr4A9Nbmb6Ntjo",
  "key17": "5pinaQLkUhFEFgnaqTYbcQvcugKm3nciwQyAJaBkCnCWEn8MK7vCEkJ8j9nBddA8Ri5orAd17DRBqfeH9w6z36hv",
  "key18": "uYpMuAz8qYw3Z69LujNLz2WJd1Smv13d5WU5gRUrJKpTdyu7VmtyicFXNa4ndXiX4whNuHjTmdEZ5GAErgxE4Mp",
  "key19": "keaLcAzFQvQr8SAE9G71frnLAZsNZGdNYehDTRXoXMmc3HBWV3KLJYwKMV8zsP3Y92TFKfbvVRHzNFRXGT5HNha",
  "key20": "aLxovBbwmyhWV8rk2k7dnQMm62Abd25tEFftzbyXZkQL5dd8ABqpx6q9ZDo13Cug4iZP3Q3STrGFKStWpDsECHk",
  "key21": "5xzisfqrTZcAEs3hndUG42ZGAc4kJV2A6yiB1UcqZhSAUncVWHy7wFkXqgAXjbW2xSM2W6VvuqXhLdHMLyYyL26R",
  "key22": "2HfQwys5JH9uzZ7Ja1GrtKq61uMmB94Yw3ivGRE57uGcs2pzdGQEGkuhFXgcRPjQxLtJrGjeLdeAYWQbf3a8krhU",
  "key23": "3dKgmRM5YYp4KGCDmGB37wcJW3GF27veev4u23AZYBa52zjXT6t1LshPDMydUm9MF59q8vyBaf6cjUTt7m2qCKH7",
  "key24": "62BYJ2we4KFEwRCsEh4J4JExhFHypB7GGC3npQtYkFt4XHbXsv61qwmp8ZM28BCrHFK4KaDqPAX6B12b6Hu2cCts",
  "key25": "5FzSSAEp29LKwpLTchEYhSxTxtNJifyZw2Cc5Fb23ihwsFavroD7kDqmPAjcgN2AB9HYg9GNbbJZ9rv7Mz31zSEc",
  "key26": "3tXQ1pAQHUZySydLMfcfYmQ5EoADA56wqYaZDttUtC2bcLo9T48cpxYecgR38QE17hwUsQR8UCQUpyBpwrWB3MuS",
  "key27": "4tE1syaokW12tbbvajcJjpUcNDzAN5Rk7x8vhQVchBtjdCC3u9ZwP6hNei274fnHfHWQm8t1JoH9rVPUidBDa5kP",
  "key28": "At1VrJ6Jmih983mgQjKZ11HbsEFFZAR7ezBhFCuDWr8zcELvFpJvPbwYQysojVP6qVM1D5YDU96Uumjwvc4Rpgz",
  "key29": "2wEaWwYyoJFQJY2D2Kpyja7L4o23mJVWETz1DwenRDt68kQGiWyzLDKXCJsD1vaiq2DbAr3TjAPcRDdEmD5Z2jYx",
  "key30": "erDpdnqk7RGTtPYAupdLzFt6GGksUigSY2Nv3q3QP9Wn1wzrfxu8WZrrU89X7nWo5SRAsgsqywiGmu4fjQbHB9R",
  "key31": "5ZGY27T3xrajkr49f7f17xvUzVzFeCdGYmJdMRFdnvyJCbUyRvXSnuqX5Ab1Xndb8h7yZZJa9ZBSrawq2CkGEoRo",
  "key32": "3u3fbS1bHk17j24vm3o18Jsozqh2hYXWZKYcEF5zuRbMZxK47n8xH9AGhTL6mAYjM47TLbUwPYEqgHSVjyMkPKkB",
  "key33": "3VHAidcim7j1GLo2edyiC5rxTJUetxzDarcdoXiDTAXR8fYe6TngopA8MjnxDAZVD2isBMPgUKjqprrgTVKfAsDR",
  "key34": "3xnH9bgV9kUDYPGLybpdfJ6k8MznpRTBSS1RkJyaPV6Gzi1FdScgL2vLa6JHcwRnkJnWbtwnReucUGaggyJkFXtX",
  "key35": "2X1cMRdvfjDaDAQGXJWeaRWegT268jmFPqMEwAW5y2KBkUJh72nSchrLoNx5EGjn6bFAwrELKzt4Jzm2SpjfenM",
  "key36": "5DBwYMsWqDEtNKnet3rs4XoBP6shu4LBzhEbDCmGG4rnpWt88HnHhsKYatHfr615D1SttwGh2FXuLGfpra1TpCMS",
  "key37": "366RWSQ9P5gamyLAza6wVesmnML7oDXbqXJuNu5W5ZTqXsr4APjKjnKxAvbm1WU4GXuGQveRurujUtbCEGkdCJcM",
  "key38": "3JmMFzhcFWu4G7iApkJqP5jWdRSJJPNpabms8AskqMkmZMfM9uhExycDj95ye1tWRpPQikuQXWE2TCQYV7Ahqs1y",
  "key39": "3dp8SfbpTmvYeeohtRPwYyBCY1H2gwfZ2GEFunjeS2DoZPtoNaaQZiAWN6xgd3Bh7KJGxGnfXWRX7MRjfg5mTXpb",
  "key40": "5NLs4qHiBcXGejKEsUnsa1ACck6hqyHS1KT1bwFDUeWpgtQ6chzqKkCYYRtXsfyR1GrD7tQcpsCLsaBmmrB4DJ86",
  "key41": "3QfGR4ktfjDeNHjCJXA21KAV6Bx3YhDiEF9GTM4L8At5wTQw1b5UEXRG1RotWw6dJBoPAQjxNRgir7gGdoT7SbXj",
  "key42": "qSTpG6mRMWwBKHJU8iwdD2B5Y2g7Sbn5fsEYABxYUQMsJeuFw8jppdXx1FNPgEtn3p9MJ4KEDYhgAk5CSdNedcA"
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
