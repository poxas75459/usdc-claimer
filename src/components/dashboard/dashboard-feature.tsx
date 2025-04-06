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
    "5ADvEpZ32Fg1Goq2u1LoR5Xr6YjVMn4iCM1S2MzCeF2hhiJK5VYAoZ6o1VtDvj1Tth8dZZkp4GuYJGLpeuNEZ546"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GFDeLvytnTtUdyeAdJ6aVZNg5EBuFizKwyeWrqpPJvH6NtjfRq6shbEwDVMDiC4NGDzxRcLvdWUHmFHaZAW5bqq",
  "key1": "5bGDVAoTqiVQCwrTaBuKJgF4jBVkLue9ZwUJerhnSdcNsNFQ5yYmsPMsjdNoBdA259yjRQczivRiWbaVJ7cYyomf",
  "key2": "41ueMFWS4HMAxQq9z7dmoj24TArBqjRtXJyzPtVfBErrfinMtQC9h2ekz5na2rBAD1FatpbBuoij9TvmMZr2LvsY",
  "key3": "GrZiVRA3dav2UgN6mfmk93eBTmFExm36io2xQNgyZMeRpwNpvZKtSstJSuPYiwx89T3XqE11wKgFnxD6PwmnaRT",
  "key4": "4iN1AzdMJKEr6861AjSD6SzEBPMK3wsxnVSmXoL617oPVJFCrSbdSZMwb2yFmQ3WVtYTp9TuGA8FCkCakZvayzV7",
  "key5": "55FxdstGK9ZGpQChsj8sBkAXPbM4erTCS7tv5yf4Gsmo1KACPPryWe7RjdrPCGK9SHA17bspgtqraYmzrpUXqTcf",
  "key6": "2GMUF9UiAE39MhRYKG9TmSjXBLb77a7wfiRQYdXwDnR8uwT5YXUQLREWtMkBcgG9rsLuFTvXYPEQF6SGTQD5XPDD",
  "key7": "2rZV3XhH6EGazK8FtSxJJqiiDHbX7sjZKQdfDHteZcXMXx3t4x85STp8EpfHy8iRqdc7vgy1wE6LzdSu37r181hM",
  "key8": "5a8Rtq4gkDRytnkz4ani5Xk9rSAsg4YhZVuoAUk2SC39jPbRVmZoYYceU7HRZy9VCNjvwsggtycrviwXsKiMCdUD",
  "key9": "3MpbetBk7ds5j9C4JKWaZp3hY16qY4wsF8u55svdWCvXoHR6JmuWZJ4hiS3xiHV2Venm24j6xydbMSn2z4n7RL2Z",
  "key10": "2sUk9ZLjg1RmEt8yGAeHjdUjK32tJ3MAmTZ2K36yStLBEjEQthmNzbLuZ4RXHTKNKJhMZ4xneTovyDQJxAQmoGfR",
  "key11": "4o3Qhy8in5VWxGY4PgWjX4z52b1Nip5aJ1vhVWzTSd4cbL6Lg4iFePN3SAFfVNtQE2oGzp4yC4GydsgNHkuDFgQu",
  "key12": "31SRWvuLGScmACCoYiw3ik7vQqZbfWf2UzWDNP9JcGDkRsPvQpA3vXPZG75Ran7VUsum1pvFJuTV3be5bLpz9i6R",
  "key13": "5PuaU9js7whqh4ojEjdVZ6mCeEXpsb8VDLcFQ58EqvkN2pDssQLm2yH2VCF2hUh45fThVfSYsKz44Z7KWQMExLd",
  "key14": "2UUDgbJFWgdLs7zxuB1jJ9DnJjHNyNfwqypv2oUpy4RXXp3jZypCLLwJotCNbRThZ9DZCGPZdgAmEFGFkfHqfEgc",
  "key15": "3hpYRBLTQwmF8LiAVETC7pYnxVJoJaHbJKxX4oYcYr5EFhA4exhPfvG8UQjLd8emPR2MyTfDkinv2WcjSi868hGj",
  "key16": "4MJsg1ciEq5UdPSGHqgbt3WUhVaYe6ajrQBjDMUvhEKDB3ueWhSzMtc7u92dNirogpxjs8knrPRCrnMPnQJNm6g7",
  "key17": "3Vw8fP8dW2H6AkgSWsKKjDRAuYGbLEcaXQ8RtW8cnkyz2VPZSFfP1WdHCtjFHXMuc4HW1AeXJyZJeqPjeTCtDWBJ",
  "key18": "pGR7KAHTnkofWRpdLTBAeAY1B4MdiJXoNKRoy8SAWThbqwq5Qr6ADHobAiyZRfTZp7YzQc5DUmGnnahPz9cqTB8",
  "key19": "35nQyRLo9ypdUKVeui23nxbGJ3HLsNTtx2tuV8Ky5tttywZduRbFngyScudhaQ2FrttbRc2sLoyadLzffb1pRHDP",
  "key20": "3b4ksxoq12yQq5f31G6crLSCdVp1rYnBWYToEHXoDwTZy3pyjM2KXEjRF4MJoxpWSL19Wo4nQX1hb6mSyrfj8sS8",
  "key21": "3sXZUKrsoP47BsBJVoZwFNq36qhDddbefjYfhe9QTZMgm1rndZDxnf5rLU7UiWy5J6kKjkadqEp3rECXU1L2Lyk4",
  "key22": "aZhWyCFNjRAX7qn41pnyr8V6SG8fuXyTSE6Xm4UbUrnwZRNqcAM8dh84UckYiPwT5w8xFSNorjzksXb6wvshVYB",
  "key23": "gxKa2Gar96xZ2pCxmF9Qe6RssAjyBVWKd3RiLWKWmaVXAJmhsyhcH7H6i1c3KMK4apq7noXvsn4Nqxi5yJS6q2X",
  "key24": "5L6tmJKLPBbVrZGgdPTzHbY5vC9A7imTjLuWKjdJ2HgHTeo4M4T2FZ5hFvvtgwxh16hkvskgH9q2tfa3nD22u5xi",
  "key25": "2P6AJV8C6tJ5rLxiPG82wab4xfX2YTfoieDRwdWG7fjoLchUTbRQy41nKRgL2UNc5aiksTF1EqGPJMFBNrQcHWPK",
  "key26": "2xCqCvZYFjjqivLhduR25PqsZvZowEZGnG2huaideB9yYpxcTt5vvLh8ePpXN2kcrRRSf4hR3Zt7XnGeuEioL7NK",
  "key27": "5ojTXhzM6MHBVjwzTqkJKD5M1rZSSXRjrCubjjUY96VkiHbsUjGJX21dgjS5ziwb9ECEfTbrXyiYJpEJ8NFBuBQ9",
  "key28": "2MggM8hDbtDQorqFZcirFRyo4TErjK9NpFTYtTH7HtzYNddSd2vCCcCfc5FqxAz8itJLBavEt4pQF4cRSsfC8KMj",
  "key29": "KXFex47scQv4jFk4aV1DtZDdGTWLjWWMNFY7L8oxKgfWrWNSFATSDktxT3FFhxVyrf4cEvRcvTpSZKeQ51nfRyv",
  "key30": "62iTcVsPhuqRoTfXq3eg3fsLZa9E67AvKfGmZwF4yzg3hb8yFkk7vqFJG4G7d9KMsiSAZPW22pFLFyLt9cfvTLVQ",
  "key31": "281PcZF5ffmyFEGZHo8Hg92PWH7M34WRcqifnwxqkGpSWAYDDiBXPC8sEzLeVtBZg9R59gb1jxkLFhZHn4SF5Qo1",
  "key32": "5rea4KF4nMjBjGXucL5U2eCnj6tbRwkYy3H9ygahbr9zCAGneyTbScyM9vEy7CU9B5XSqgSCbGDjEtR4VdaUMbvD",
  "key33": "2w7KVvAGGDnXHZY6aj8frHnmCz18P4uhnb7x11soydDASBiwjF4Hn79yr6A1cyYrtyuTdBMkgMjrRcK7hPFYxUR6",
  "key34": "2DP68FshBPk4mJBCAN97gi6dZRRFfw7gr3UK3kTEEz2WQJqGYzjjJKmcnqAUAZPMfa2b8p9vDyV958bnLAtwSJg9",
  "key35": "49VrWTZvLLHdTCo8pfQN5xQiJfTSGaASEuRD8gwDhQAMi7vWfLvjWvGSchtUiTGBUgiQMB1gxP2djitxbcae1gCn",
  "key36": "5KWQownqChkz6tj6GJrd4iu7nCHXeAVcCuGi2Wh1AFBVC8GHd1kN3KGEiG23sJmq5w2t3aJtSSZy4nUBooVnAdPC",
  "key37": "Uk9EnhNgZrTVfSzoiMKpkJfVuwpmd1yonUDrcrFMHRQikFqBU78YZ1Lmfpg325ooKGYkTpAEgVhhXG2LBz1gSGv",
  "key38": "56um99qssU3gRviaR5bAdxHER9mSSemQbSknhmPiSGbsdkbSMvtvFZSiP29VqET68DPVaf4GRekrKgndA2TCNDeV",
  "key39": "5bbVZKX6SZPWrcXmrMH3RycbxPsj3U9a6DDwiqqABqsDdL1Vo1miZZFPxuJKsgWs1ktoMSVfNeRC59PdwYARdp6F",
  "key40": "5qnQKmem5VE9g6czfZSK3TXcQhcEMTZqmEEJ7DqymdfrWrqL72NNs6Wikk3Kytv2tAYorYbzwP5YUwQovAJiTFxe",
  "key41": "2ANtrt5tnyA87BGo9mAxeEPLnxh5ypX5yiFzaEdtfaUzEQwqJvDAdK3CSeHQYGJDjKwkUteQ6kgBwoSjL7Ce72jF",
  "key42": "5XHfXfJp8C3WfSpumXPjJYvLW2RGpnZGRMmrRVKW6JWJr3LpenULCx25Eo8j3sxKQJ31QqjU3LZcCMytwFX57zN2",
  "key43": "4u7s66zpv7HP7wADgTTdF8DZmWNhvZgxCXrBCqW4MJMfN9rTV7NsvH82hasoBcUx5EW6b4tm3SoyzXunekPYcp5A",
  "key44": "6BL9kM9tjJd6PT9qB821WPSYSnQyfzYogAtbteH995g7fdCyhgLaapceT5Y7tBBENFLBxCYjJ1ziqdLAZMCgmHy",
  "key45": "3sVGsiNv8qLm5ayevFUSxYHHkkLeSz2gbcUVK5KmYVVo2sQvGysr5pPQYsR9ADiE8pKbZzLmMc9W1RsoGL1QZgtW",
  "key46": "5LcfPLmThcnHxoikaQwtYPHsStci5kphyrKvyoRmXkJZ8PjukKvHMSyE1mYvAJNxEDKzMWzbm4cuD9t63pQD4v5Y"
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
