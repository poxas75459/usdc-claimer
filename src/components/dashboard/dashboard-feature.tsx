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
    "5B3sWEfQxYUdboVxiEpj3GYHXcB3yap9kJhSVK2Ati76FLsnT22VME1HpCkStHT4CTubmme78Fj8WaeeNT4u1xWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x3xbHEcmMQBC1TTERZAajGKDE7P4dWR1AApwfk482HfRSyM6au3nTL3GoGLtxK3YfkfQXXTGoX2351wx4pe27tg",
  "key1": "L2s1Gfwgt5qNT9SXoEHvJsAv7v7xuYv9tUD8GrJ6UQ4jmxHzJseBFJVqKMbJdH32bzXe2jk2tsRqcwdXqcvJTzH",
  "key2": "2PDoyWG8uBvwGsiLm2JFeDHZjATph8Uf5wRuUDZ1iEJA8KvFWuq5VwLppHXYwFRHt8pgeihM16B6TE6fa3RQSat3",
  "key3": "RbuRSG7kXknQtZtGzVTykmCeTN7PMcnTxTANLJ2YKWgqQuSUoU1HLoe4QLANT8KaXPFwhTQBjFrM7E2rzdstdgL",
  "key4": "3UEYNL4PbVwbCMKWHDQBZsmqMGQPX23oQKPgBEGfKPNEwJM19MhU3weTiLzy6tZQ96brEZHQXZiFQEQr6qt4rzDB",
  "key5": "3hUPncJiX48DHL4YaBZr3Am6z1p4rJctQ6ZazdFrzBmhQAF6uzejA3bAcyHSYeEMdUcemhZxHiLkamgZMia72v3Y",
  "key6": "4QybAtdrot1rQNeyZdfTiEBbnvsFirYfuMD7obBCwDNnPNnAy6SpvNnb4FAvTgGwfYEH71MSBJKrNBS1TZYeQsY6",
  "key7": "3vC4gZs7cNVt1SHvHNqpq8fmvieSybfPd384TjumnAum7RQscCs584cyFUYfAp3oB6Ec5yH44cHYbrnXZcpwa3b7",
  "key8": "uCi7Tf81KbPjHcoTRVBX35nt2YUwQywqGvZY32PTdGZDWU5DVrRpHAE3MXJfDr95RRqgk6fB3xWxhkCPmgWo4Zx",
  "key9": "3BvLSdbqHbsdb7qALLM5JKfTMm4feEQFSm39uecZ5LTAu8AxuyjFTm2mRtd3L2RtdJc2vHETL2Qs5kFomdvHyKeQ",
  "key10": "jvGFxPHnQhZSYBcHCm1EwRcmzZHG34HXfbztafQ8HiyFQuneNMBSVNWhifvuTFtevXUUzcBohuAE7Vu28bhH1jE",
  "key11": "3ZTa7z59haLjCVYBoaLKGpLRZEXXqTctU99GNc3Hs41fBG8BdJzU3JxYz8cwTvEsknNkuNf24xRBx3sW2sDarZVx",
  "key12": "61wnpRvBZM98nJ1uRXxiiipVqJZEyC8ZYrCsV5MP3Tij5E4Gre31NzDkZJXM44vwAVW6wW1eGPsE48EM6uYUiBoA",
  "key13": "37Cxj9dEjhZ2aLgR1gSwgn9TE1s7q8tCZbfAHejNZUhYPxGiXsTPsbpHRA2Az9FSzWYKwgdfJp3MQHvzUrEuEY2j",
  "key14": "2EtJs7X4us1L4Yb1d8k3g8WuKoXrsNVvHwtMftzimDXbxZgYN2T8MHgAPixB57hozaoUxMsg1f7ddm6tYhKCztc5",
  "key15": "2qXG8eFyBcpk1LU2iBW39TcogJJ2mwdYReXeqMSm4yktgYyAVJ7u6ugWpdSzcBbHysnFLVM2RZFRfautMU4bYXuz",
  "key16": "8mirgEqU2B3PRCue2MAJ4kgSt5NP6VGBThLjkGE5wBZeSYHH4Mwn6h472w26gBLXk1s4ZzfnbPpn5a1iBqQAZNN",
  "key17": "5LoAXYpBDxP2udfSCCuY88NMBgSWUpPiN81QDry3ihLKvYBCgAQ1wJB1RCuoHWhQ1eYaK5L77V73CW61T5QtWDq7",
  "key18": "3YNLPvbbDSpUYcJ4rjUUQVLuK7sReujyYKaw8kPvxnfqLRCYaEMxRSzn6UXMJJ7LnyBdXH68KVeNjajuDCLnEnGY",
  "key19": "3gyc1CLYgAcr2UzY64QE1ZfS5fA72AejEeJExehgQpS33XinDG68g5DJG56WV4npgmdDvcvnZ75G9uoFumSDuZsw",
  "key20": "5qugSKq1ua5tmqm1inwCnZ3bz5QnSCYzRfdMyoQGPDaErFoaMqfHpXDvK9L7MTLASySZ6E4tcW6PgfGMTnLoWXjZ",
  "key21": "5E3YfMXaXseL2co9DN5K5rbwmoPCACcZrFPe525KsyQvaWdSYnsbdxdbMD3VYFxcKx8XLfvjZfmRw4bwZgekxRHf",
  "key22": "5M6SkmfFSx2LLFNKcMFEdwNKJFAySVpTFhyBAumeXBEY2ez3NgeQ96uJQG6YmCUmMBxbd5JdiQ4GQ8PJGimL975t",
  "key23": "5J8SkVxRnSS3DSfWwYMcN3ca8MEEpFwXf9r6HLsSS8oFEEjgMaSGSe1L7LFYCjATdXsGSPAeeqDpbcuT2Rg3K3R9",
  "key24": "A2oWJMp3SMR3kbvWUQqSdrZiPQsoFYZ3uRwoPWYuqVHxUS3BD2DT2jcRvZfU7L2BNFb4NBszNiydaUEAbovj4rC",
  "key25": "3vNabVKJPVL1pypxHZkAH5cWxGHMRcwDttDKy9BvqQNUTVJ1gcJDHSmzgpmWofPqcQ35ux7eCDFwU294vCuUz6cC",
  "key26": "gX4WhxWaojMXviMP98ZUwWYqjMZweGLDU5niHbKYzSj8PbVtiwPnUuGXZVZF4P8xCFKW5FHdZ7xvQd4aoPoPr29",
  "key27": "zfssuSD9w38qyku6rK6j5mURsGx59FtToecPhU2m7AazYcJ35VaSYoU8qpu48CxxyFGtxKLTWw3qQWNBhNpXWZg",
  "key28": "4Ja4mLEeZ6U9nZjovnewcPj2iCrXEufLMad64Z1YfoMaZ9oZGktcya4vQm8w2AeNyzJV7WS1Ho4V9j82xC2FwPSf",
  "key29": "55zj1fJKZcdNJD9EcunccUbVf4K4WL7on44GZJ6DzVMEYX3r4L2keCfyfvYCiYxbqg8a2SUFwXTThJtG3XbiUFqa",
  "key30": "5p8XfonJ9PksWS17CsWwAEDZv1Yx3koAt3khHiUi2KPFfF2U2BewTuRQ6WtmZuy41k4Zm1CneEiWEUyGwLz4feKJ",
  "key31": "9rL4GJwY3eSnEya6CL16AkDnceo5PUEfwRFk8Dkb8qrPAvGVEmg8UkT2WoJfUYSzVwscbn9CJV77G6D7ew3S4uW",
  "key32": "bkSsydNuaxaEPsdGr9LU65nKAWYbeF9Dx7aB23cyw1myT98NkHXWvtV8p5c8UyqbhHJbyQgqbiocdjJy5Q3LAUW",
  "key33": "5Up9WqJwj3Gc1yaU3Tgzeva9ZaCA2YW19B7p3edyzFMGrmzD97LBz9DWfg7tjAKqyM6fLwatPVuRZxeFDYtpYubo",
  "key34": "4FQNKDATQCgr6CDtusQ3atQEQkHDYzLnWgxma7UGsCN6A4yhdiQYswSGqkCNFxYkHuVxgX1PM3hn5fcZNinGwWcY",
  "key35": "5c6hZmTVdW8PvnVQpXFVV9eLM9Yb7TZE7jy3AAsddg2re5V5XvNSEN2mpVPt6TdYLug5nhcWadrSj3KXv37ujR5W",
  "key36": "39hzWv3zh6hPdVuR4gbf11DJmZeg6tRkdaJFWnFFftBnUpwrq6cBGymLegTEZM3CLniEcESWmWEzxjm4KtTQTtKF",
  "key37": "5kykcQQL3P5txMGETTtXm4mkpc7zh33rbSx4iFDgaD9CS3atjbU9vRNUEucKJRV4aRANoYQEgJoiYn7eWyFYPeMT",
  "key38": "3XJHZDgGE6YHYST6ekw1dca4BM2hKXACUJWRvbPuSXrqxRAfDMs3wKgsFiXbXLVnxWZthGEUVwGyWKAfPyyzuGbv",
  "key39": "HwZ3TZtixYRhPd9zsq4umccArfAnj4MuDwJEgcqLRKXUrte4wQSW6JxQ3YdFGBDsNYA75hsYQJaNNLqS8nEXKuV",
  "key40": "5GxBwxK8edpsNhP8FVcYYJGSCUN14VnNLQzu832gzctsvp2ZYM1qwvp2X7twrBPFbvkYoZrwgrJK9A3PRckkL4qx",
  "key41": "5Y7C41HLXWuGEQ8ekfUpVqYPbVykt2uC2h7AA4Fj5hbfeA1QwSgBZHVUjuDWDw4iuBFsMySKd2DK6spfvtR1nto3",
  "key42": "5zWj4HTEHbtUj9xw73y7tKVzWg6HY1QBBFPd9z8Pdc2U2Qcn2R2Za55RqMb2JCb6gKEYF8dUcDVCuztDDN61Y9je",
  "key43": "3WWwTcUn4pVdvZgeximZ6dJx4RwyWzke1iXQfFSnmqnQA928MaDrGVzHV144qNxBe7hTBd5LynSZFqPAkHJFxMga",
  "key44": "5vgVcbpG3ZmeG7Ly3ukYESTHPnvpBj3HmT7mgyrSg54J8sQrxVCghhekxwCqTq13viCq7mRN7xePHG4UUHbaCayx",
  "key45": "2fE5nNWkH6J4rT2P4PCY9bAEQkyCTc1maB7kJavbiGHh7u4S3TPiKLd7zLnP6EAtvmtbQX3YwiNiduHmhApgnQs9",
  "key46": "5P3VG47tYhBHCWsLeJE9JzLaoBNmVQ3wxBWZpHxWCPbt4rvdpgmm3cHEyyK1scb4DavxVvgWNHYtfWcSMgziKuye",
  "key47": "5pnVTPEU3jvwE1Yqfth3NyrCNw28mrQ6DPzAnZQFvCKURTeerWTW4jYSoyoEw7qnfTf86XsSSp1t28xVsCfKY9np",
  "key48": "4HCc5UBWEjctzP3zCrKfViJDSnR4GLhEpRUjRaH7vhW2b3SczFDnYAgVakErDHDCuQpPaAsxeDX6SDwuiyCoyCKv",
  "key49": "38sQGKwMWpEVNhwQFhaK4dqAuBpy3pZf8GpDwT4RaRhM7SDPpKUj4UiCrhJmo4HktYPA3UAxGcVwTSh2W4PhdTz4"
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
