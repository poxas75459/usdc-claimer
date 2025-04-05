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
    "XpLY6LFT7WsAn1mSpeVAKRpWprKULXyviBfLSu7FWPBW8irvNxFp5AsjHX1Wnzb7ovYGPGAcu8FcNpzgvzgRVJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rkAgZU6iZKEb6gotaMZKoBDewSBPUGJwze8zzf6nbe1djL8DgGz4JFWPmLtN4avg3ipdGyr7385AdM2Z3cWEjX9",
  "key1": "bwKmQg5qvBkB2S86T5sHQyM4ESikMhAAsTrwgJHG55VGAZ1axabf66r9iQYDdQYoeUM1UekPwVBZ6WLWksbt7Y7",
  "key2": "3tbxJQ9xJ8KYZRWKnnzTCjaGqguiBDdjfyxFZ6ix5neJsSkTQ3MGfzVmAHA2CQT2K6bRKdaMsRMkw2ZrNZEDeoQo",
  "key3": "2gKh52kewVVYuKDhHY9NZoMronEcFKZBpprbcLv3Zz4s5wfv53yyCbqhR5Xw6oPn4ByHjtNzMM8u69f4cfhpw2w6",
  "key4": "D96DoXRGhHPimFEww2ky5iLs4GwbgtmJX7wBvr51J8koLEQPAu68WANf6Bbmb9vQiMUsAcBAoVnvHhUXsQt9GHf",
  "key5": "4vSvqecia5Xz5kLFUhxr3a2K5HrTWRTuqV4P1K9mMLMWHLTmXWNZHyoY6QjZ6rujaE3rM4xjDyacj1Uyeik4TsTH",
  "key6": "4gdgXFY6ikQsiEsoFaoFaArPyy7NRpnBaaiLXRhyFosE5uP9zfurupAqQwKSB64TAeN3GbtfmBtWYPZfSQaB9kzy",
  "key7": "46QCkhUo41TJv42tFZizgPafy3wTkkdSChtYn9faBi7RmEnvuRhiwy327xpempzv5rYFY8oS71FBZBvmrNxzVWw9",
  "key8": "52NmMogK5VCRYpPu5fZNtbEXiWgGQMsyPewwTUq9CKe9gcHkxj5ZUpMFsV9itaGTpXwwqdEqwsQeLcqNJAGFLiLG",
  "key9": "41BPk9ZtzcFxWPC8cdH5rQzy4YJRKErimim6M2LgM6pyYBX9Ufd78zE4aDC9xEf8aK34JykDmR7mmKCEQWmx7BAM",
  "key10": "4K5bzybausCRByWmsaRupsrwJSM3vYpY3M6iapYpkuMHz7Dkr8bmtgQ6cGUzRWiazLeUpKiS8nWW5SQvXLKvQsNE",
  "key11": "4yXPZYRMqGPrETaghoE2uTmC7pXRxdWZtb4x3dabTJ4VsEVGvQJDZiot5WUCXJZTDwHDbx796K153y88jQ1m6m55",
  "key12": "4QC9voyQUMzk7wqa9SSd9GXkaq728Js3pMqU1PuFvHkYWrbrquX8tkdvCSfb8Ty95cwxkrqJ2peUVn2nnki5wxr",
  "key13": "5d7acfmL2QKZDSe6Tsm3NZiMktzxMGeN6UVbqBPRcisPLUATEXfCxC4D92ihzSqd6x5Wjk2yMNvBWZaWdFX9Xdsv",
  "key14": "5zr7ybjxgne6RCLEAgqWkFrRaBzF7QLPvRSL15HTy28jAQLseW86tfmBGszPYpky9DKgHDf5EEebr2aopADLDDNR",
  "key15": "5KqLw696dMcKLmjSTLT21fVScaY8zvP3x563sKcUaw5GAXDGN8stdzBHT2WNBDmXPdYv7TUdaf9dKbD1D1BBk1mY",
  "key16": "4PobdiWE2fpbVgfFRs1U3PTLs7pBVa8qaQvjNewN5U2Gb8Du8EE6y2FXCUgn16Xm6WzwoYuzXmdV9v6qXiXuQTq7",
  "key17": "2YGcft92uq7Gipbm4nkT6W4kCQSiiL8K8LJQ31giTJQ8dgPMfezDXenPz6ehB7zWmim464VJ272nMTPZyYNEhZ4a",
  "key18": "5tb4fTRDkUwT9SkNMf1FvojXnDJbfDWwZnBoegR6uJPMWLwqWUkkqbC6ZCyaFw6rgVq1jad6UmsxfKdfe66JLpx3",
  "key19": "5ZFRY1nNw3H3GwDrx9ndnvEPcvejKWaQTE7PG9yPXwKFqM28UwfFeVZy9vamargytbPpQR6QgNWhHdDWgkoNELvb",
  "key20": "3uKVWMjJ2D3qyPrD9o4ytKzJUkiKm4vvkLR5TgTLLzWmTnzapgxsurTzLGrxTFK87aUTEjNZ1ZEVMwT8bbvrQ4oE",
  "key21": "2s6XZnXir81ibVJAc2HWiszK9EpbPAuYf8bEqwCUoLev9ZgdWukrWajX48gBSz8xSEHR9Z8nWj14BF7oF3PhhKfA",
  "key22": "5V5QTn6m1FAUSsRJcPbJuKNGqN9fxZoVjtPWYZReANHAMXxe11enT7BFkfN2kzihKvpTwiHnJyjwkpdoE9WfgyRy",
  "key23": "qxKZqfF2h2ppTPDuaQAGciyfibFrhgNzK1LS51BfPLidUJwqiy5crZxT5U2M3w6vM14GMGHMs2srUbViS7D4uuk",
  "key24": "4KmPsEqVbu4FdjckFqKvBfE4ohCswmUHUVs7J7o5cV25PSqXXJbG9hsnacu3YrRzAPDsfyxnw4HsXuNeV23Mrwb1",
  "key25": "2W8e9FFnrrxihT3eT1w13MGDdCeMM24VcHzR9DcCz73cmLwcdMmFeP5vRrM1jZkyCPytabBxfcT6XAiKtJGYVkfW",
  "key26": "2d9zRebVMcNCmafp7mx4xy7tseSfEHeCWndL3BXfag87AKYTi4EGxZNvc9hVnmAnHRNtQs7TrLTcm9gUNwek8NSY",
  "key27": "2Wq4kyNWnkyE8oNLz28GJTg5dJRTRddrswMJXtm5h8rJwMB3ZuhTr2Y6dyReFe64T3e4u9TW8vu8MDa27VtPyVpu",
  "key28": "5QVJiBZHgUMHy1ygkddjvQ3PjnwbrJNJ1xA5msrtRadiZxg5JrqoffFBF2HsE9efWGVTWMBbCRudyABKJgVmtgvH",
  "key29": "3aex4PmxK6fZ3sF5c3t1wmSwfPRQfGBTWJgeYCDhvBpw1mtLrkaPVRTf78wX827XkYJAEFgGWLc6b25LsjkTiJkF",
  "key30": "2s7F4ifKzHvxE73dZ8Zm1EGeo3AXFD8aVgVw6d7xgnXuBP58UZq8uVh4qHK5X1bLi4niFBH7KPNyS7XxYyFZxG5m",
  "key31": "TCLDP46V5zYfLUC46YuYxiVyP5itS3H42oH935Unvh7Ap5hnQwUbRCVWhSyBAj4Y6CwzqY3LNwqQ3pKwXGTpC9A",
  "key32": "598doEF2iwjXpFcZ2YtZxe8J9oy8QyUiXrGj6o7GUxuNmvatXD6rrkeM1JSBFUGrqFk2tqa2yr85t5286r8fQEqL",
  "key33": "2ZyGuQgcdAKn7MBMXB15USuUm8mUJGYYn9MnAzq5X4tuvUD5p36mxnKJtPsKBvC2PDsv29idmcFz4i5WGhYbaeh2",
  "key34": "5H5Hm2dB9vZbYgjCmXbeqmT53LaqRuPWwaY5fD2TX572LFKtqUhjys3Vf2H1Z4tSrL96hwrfGtbprvLoiej7vYTR",
  "key35": "4La5hJJNb2zwTHii6qJfpCLBEag7JDC8G6QUrATP8RKjshNvgob5jkmTjwzAPj88MbDRmXzR7mtbr7UdkK8faoVo",
  "key36": "iaTTArSseEBrQnKBx5NjTXvayxvEaSPSJwcJPkbtTv2akzhv7CWtJbNur571aQRZ3VdMWngDEv5SiWe1qj5Zmvy",
  "key37": "aw8RvSuwdrWdNKcWsbbz5R1QgSTfN8KGFrfqSaMYHUmqrNG5ffbVZwJmh49PiYzZq32fGdePQXxRy7dQwHPRDwd",
  "key38": "2j2gm6bGQ7iurJxkF4h9TfsET428NonJ3gB7AfxrsWhF9AjSn98BdAXeQmxGaZphgJXACZ1MvbGsKmeryrN7Fimm",
  "key39": "5GHjpf65rbJMGgdECxKBrmo1UFPez7NMPDMzKxcncQkPDrNzKQd8L7mge51kD84YXv1ycmRZ4jbDJcFMzrHiSjBm",
  "key40": "653RdrYU6mT6qjay1ZPk5GgCYpTWMD5KLPr2jhwoLcJ61HVLn54zQXEMCJv1jA8vE3qSmraZDRP3FguKBfYDaA5A",
  "key41": "5FmSLBB5fBaNmcSSRnoFJVc9jaCuxKBPqQL3JWUyY6HehJaGCgApXnNTWX3v59f6AcCbCN1LLpYg4Y1QPMXeAALN",
  "key42": "4KVkWzCevqjuCPfkgtX87PgUJ1d25TrjdcoeX9iTKESso7NAWVSACdRR7acf1Q46dzqzS7f4BBgPbbnzv3VCL5GC",
  "key43": "2kTGPnGedwcJiv4LACVgHhu1WDuHy3ayWbuF2AtLLvoBwafVuoyDohZskMbdQy4Bpv9oxMB5ChspTghiQfxJBj2H"
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
