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
    "pEUZsmkVJ1VyLxwdeViTJPaLTAZvWpVwdfzwnpeGnx43ZjiZuhWDNjj7L3SxBJmLu7g6BriYQUJN6i9USnyjymU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RSTr3SafVdWzYbgVBDWTiZG1S7eEE3M9Gs4sa1DsiwFZqwwb1YnbvV4Bqi28iKd3VtxXCE8NKS8zWvUV1ZPXdaG",
  "key1": "3dpXcoWiip9HHcfhAzzoCPKs171mRSydFWMpztLZ3uahXRkrRXDcXn2DGRAsLKrA2JTFmpS4YYsRhYpju5DzC7gP",
  "key2": "DqaT6hS6fHH6yT999GojoWm72xaQzC1zzeaTRu2kZkMhnMS2XmVqZiJmj5Aa1mApgovBc3yk3P8QvgcdAbexq5L",
  "key3": "4Y9QQrUkHHD1pqVktTUroVQMxnSFBkp2urnFDKFhQkcVAXSqifCAccJVDJ6u5NhCDmhzGC4EWZmxWva2QJ4YcMNs",
  "key4": "2SoPZaZt2puEBVkZfnmnDXKZj3uKMAwnzCF8r7whJhmrcE5D2XQtENULSErUJNsggu1iFySh65Bb3EYy84QQUzQY",
  "key5": "5cSbRUYwbh6DHxuKWh71vsJbe9iFRLCr5nKPZ2KFGJMBLDYTMycKG216zpYhUVvqwndjzQkFksZ9nHgXYUAA8Ve5",
  "key6": "3Xd1ty2uN8wmt18QHz7JU3kcDA27vAArMzLd8zQpcBwGepzjafozMQUsEfKiRNjjzoTNtrW9XC8Nay2ZgidK9ikw",
  "key7": "5hmgJ7zyfGQBCPrQyeGoZp8ggxvKHvLFoShgnigZcM14VFxNaYQoJE4A2kR8PAKNJEkPqcKKRogn5pZWMQJtskq1",
  "key8": "5hvTTem4GJcsLCSTJHkoRpEUpd5VbtoZuPfiJj5kCo7p1jFui19QsCq9UfuvFNEoG8A2xZapR8QXRkrt6QgsqtiB",
  "key9": "4APTwXeEujxHx3rYADcjpHSq2akNHmuXtKWTyEsFxEWDXpr3aL1DvxhTqfZnsUbY4kPcb7k8vj85DZgtddy9F8w2",
  "key10": "4fMTexKy9p78VgKisPPZGTXmvbNCP6nG6vGbGULdNtYSj3FDx3dZach7FXU6PGAG8f9bUGzoSHKwqafTKaKG237j",
  "key11": "3xhGQ1iMf8bRXgHtvg5WM4MigkFuEcEFdaSVjYzfTErYSXdWWgXZGzwV4qfv1rYcLeaqAADrVRzQBVjh9KeF8zNk",
  "key12": "3kJJYcn4ZxTkdHqGpL8W5juAt4XeR5C89VsPQCGMH3b2hZ7wMHEY68KgWoM5WAC9Wy9b2W5CnVCHVBkt3DeYnkik",
  "key13": "HPZyAqNovqLdweLcHP3smsUosXmzpkYzSjkW1VKpZ8nMWWjSQMn7AexFRgvKxvPmCSsgfE49QDhkfcbYJsN86Yp",
  "key14": "51iRNf8bEk4yHCqiGxJcn2mZN84aFXJQFYAvtcekE1MvPmF1KzWB16RrVYfZpeJuXKrA516iRJZkTdtKWGn2SV3A",
  "key15": "2EikAXjBEB2EQHcZ56d1C6ZPqeTDcPZRbbzmBxpewhAWxtuvkrQN2WJWyzVUmREEGFZSAVwS4h6JEFrsMAT6BjWS",
  "key16": "6QRApqtBtxJLzN8eFTGLfRhvebZA7hbxj58c7EEm98oRnQnU52nusZAWn1vJvmAPKwYgJ1xEh8u8qiupcLgwzaf",
  "key17": "2yGXVrSMbx6qsSZjuaAQQ86ufpSYsaeZReiAd3S31pBuzUJfCaKEkCNdRpFWkXbdk3ZJgWDw9JajwFneMd6NvmKj",
  "key18": "2bScKbs4sWGnppHn7LJpJPXbNF2u5vNxVrgpS2wmP2bBiA2cDJujUjuCUYMrK9ozKTagYKnUtdE4SqNSLkvM5PxY",
  "key19": "4CkhCx8uGq5psnpx6QzoU8HtJ5S7MGXamSYYCuty4hVa3xsEiQef88hfpCHmF2yLpVbDVgTUec6yMRQTU5smiA9A",
  "key20": "5h7c4N5S5TZD6yzd61HefMPegqSsGwrNpYkgooR12DpSKxmzeBE9HUC8tSPF526K9Q4R8TihLTdFL4bn6dKTGjab",
  "key21": "3ZJcPYeY3v3StGb8NoSFduziiQUiwXqugMfhhbGTqDxwDbRkWsMmTxWSsFzdcgasSxR16wX3wkBqyGTX242CVr8q",
  "key22": "5E8f5GssQ9gNwLzv3d29GKkhScCTUEVbA5ZvZK6fPTjVdbFJA3oLZrgmCUg7Y2jLfuQXzg3cwzzR2zn3EvCMFGr8",
  "key23": "zwzfQstHCwy3EwqcG3ezVZqgVTDD274QysHMheXiNZiWyNAG4daGpCmfoVR1FRbbFsnvaYYJxZtirFQ2P92Sx86",
  "key24": "tThDXMZpFDxFhc3Qpkq1k8MXVTaXYQevDavMuczvd9VdLLiqxQ627ympx1P6dBtJBPgtYrWdHvqvkWZcLoCGdnt",
  "key25": "2NZmT25SSDD3nidSta1fiudr8xuiHmsCSCWbtcDFyf3a1Fp7fPZvuHxtJLtHwWYxUeaHVyDPLfeZRYufiSMPUYb2",
  "key26": "4TcoZMYmnHk2WHsrLZ3oRWtXXUQwvvgCiZi8bDhVFYcUbxZFV1JcEbomU2mUeaQ7ZCcgkxaAEeDvm7MiL2FsXXH3",
  "key27": "3UPakM3UpsGdrtpYqT8gp1JY5tQdgxo4rFqNckBZMPeR2sriUbF9HJcz95hDdy5tjwvAUgHqMhiYui65CDJt6gFv",
  "key28": "5gVexccpRP53c92wByBVFAdYhcvqApuvgeJsXvLdJeEfYxJeW9tNDkkXjc34PjZfc3tNFNcQ6iENJr1s75xeTeWP",
  "key29": "4NYkafJctksdhMnx5yqvgjwPMxWem1xhJoRmMaUy2Z7SebXitSUKzkihe2CXmFHjXoAYSBahB61ePYQmvtNhiYR4",
  "key30": "3Ppb9xJAHtmv8sezsUH39tZzH6ziJ5dZZcYsvcFVW95P87EcwweQPKZABnet4HdVjYEeWcZkrPe3n22872oyXKoh",
  "key31": "2TJ6btnkEq8a6UTSj2haaRxCa2ZwGwumuniDpqPQk6Zp6krqyvS8FqjVtccJK1DymuT7bDfW3D1iTcUpWGWxEvPY",
  "key32": "3WJ4CvnWnaK9BmekCKcwjSXXi7k6cf4nsQaZUyknRmZhfzkRtPiQkPTnHaZxg7Reb9ga6iQy3rPXrUSe53xVzLEB",
  "key33": "2WGdjgWV7Gg7mCbnn4HhRZcjYz6uowLRiNtBkdwfmPSmZ54bfsNuJPu9ECvFWiSZqpqwPoUAU6PCZwoGW7TUAovc",
  "key34": "4mEdMMm5ah9VWRU3rCzXn3iox86tqcLs9VuRivykkxE8zFcVHGiqS9WjBUCaGqJsYQZEsGpvrzBrKHzQfpvhZACf",
  "key35": "4ik4c7A2bKh4Pr2TYcSnR15tytGPxKScyUQZFKSFK3FXmyqpqHBRJjT85KNYmMBJpqv45PWuLNVR3drNBEn3e9tQ",
  "key36": "5fkDZh4mnXGVs74B2V6nPJXsorRyhnEUaoA1A7GjwinqiAHDhwkSACW2yyv4jFvNeaGTdqNeSHLpH1ZWwF89Gtnh",
  "key37": "CeGZsABB6PuvZF9m7CjXrcgS7sWXgdY6awUTUvKVMefNWS6owgfuey3XNKpT8FM8FVjxZfcKbjm6Rfv6VCePnp4",
  "key38": "4MGnNiEGJZefooqJ8ktKWzN3vFhsbskokgS2zCPHhn4UDq3x3TyfDg7P83AjdxvzQgvxgLmuev4ubNTfdHnVfCv4",
  "key39": "3zTryduENdmp5qGhfdmCcYGbGw2NMfYoShPg3M8PDLPpTrQgHFMb5emTn4VECd2ugch4jKhCQdunfA8hnFiHjWgJ",
  "key40": "5mTNiCigvZN28x8aJtdRt54diWFv3YbDycpUrHnhutNvRQZcQCgva4D51TVVB5UNUMXo3xH97RuZvAjEQtxMMMcK",
  "key41": "2A5CMg23xKHufi52dvkwRYmmxzZV9QQP3ENp2WhNSZeKDL7mLXzBpUWBQs2oHXQErXp5d6EB6tKLRsrhzmw6sti6",
  "key42": "5MB2sC87NFGv4Y6L6VJDxySWzzHMLcoLQB1TrFXUdLKqT6oHNt8gYPJuWRbhPfZhc1GK9wtMXBK5rr8U8MJvsxaX",
  "key43": "3VcT8Ac4YFExyY9mU1k3gyUSMoUCYHoNH5i4PwBEjq1N57WcrzPJpmjzmCAXnPP2SfXJR7nWgGSdfDRBHfUT8GL5",
  "key44": "5ftAYE8UarPrTYGVHSTGd4RbtH2k85eiADvWNsTcSkLHycoM9puZep2ySFEMhVLaGGwHz255LFZ4soWXz5SqY4TE"
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
