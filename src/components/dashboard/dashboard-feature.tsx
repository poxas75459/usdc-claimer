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
    "2Fpm7WZevb4F6ukChdfbkogMVMuv4Nem4tHnxX4a8SHFhptSwoQKYQUU2YJoReQ8DTjQ5r43cXA6a7fb9Mbwthzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gPQv327B77KbSKpsBGdjVDRr5X1iYMyiWdPQLvrAUKCaZC68oFETtXMHQ6aDgmAW76ovUV7qBq9ghVopgwUBndh",
  "key1": "397Abojd7vE4CdBqkxycrLKYLuFUYPJSWas2Bh8ZCpsBKNACSPg4mGqJUzhDXbhozSG6Pq9AejuBmNfKeVLNuHRA",
  "key2": "2hNv3K8D48qJzkAEGrWn3b3JV155PCfZbdeucEjA6iEE98VYH9Tvv5jBHvLSyBKsV8URt4FFWt3FDeYCHhyCyUYG",
  "key3": "5zB2qqCiMeXR4yPAjRFcUmvuGR8HbzqB3pUT3TFvcRgypFQ4QHafpz8L37KGCMvnSpXnGvNBEuEqNUfVs7Hyo3ug",
  "key4": "2F18MdUK46zC8yQ1Nvy6hycQiuoA9ZH5qNQwYgjk4TRReF6Up8rqXacuhFd98HqVUzF96o1MR6thUSRFLegVtKjH",
  "key5": "5kHioid2ENkWCsR9KUCTyWna4Ymw1ZBbmRVEeGmYYh2TBF3dnUkQXgbhyy6QRcX9jsMUDnsUQvD8kN6pdS1dSeUB",
  "key6": "3y3VE3eD5ZAvd2E3yKCxbbShx65gYDpvbdZvQiz9fwy1sxfBYeVamWqKLPpGkCzk6wr891DFfPfy5gbNuhfXrfXF",
  "key7": "1gR9FG3boZ5zBfKYvSCmEHQtHWXwG4CsHcm244rbppxkPo7FL1ujegSAz1F1a413kKxeycBk6Q9r67uBp42b71p",
  "key8": "3hVx1T9rcMFVnDxneau8GavCFtoPiqtD5urtDKnNq32motBd35KCqFmRLz15w3BjumMGeqa6ynH4w4kvv4uL8wgm",
  "key9": "5kxN62zhZxpiNX6v7EHYuuPEH2Xu6srinQBGdgzmoxe1k2YV3QkzNaEZdAn7muGK3v8Sq1PFruD7iWSxtTsbLTPW",
  "key10": "3gDyWXjQuZr3DZibrzJkUeETvMTprSY66KbE9vccaAxfTJzeNEHtkmg4XyB7ueA6dc2rjYEkBJVagaHTXSm5aaob",
  "key11": "4c7uYt8yqf9SyJYbsLhSjeZ4EmbSFFgZgickELkMiuTEQwoGE5V3oAL6QBSUg3tpmj13MTS2Rf6Uy7z8AMGuctKb",
  "key12": "QHBKA5ZgAtK5R971gZ1rAi6DYa8fuo8deqtd65ecFKEv1s42Db49x8U24ijYw94MB3gBuvS6pH3TxbQxbmT1YhJ",
  "key13": "31EqynZWpn9vBo6TAvnUGWhzisTpzCRc9t21ERbnrHwzE3UMn2dG1oVSbVaZofXdywUqhw7G6uXQkGxDp9Ctypgp",
  "key14": "2ZLAe6NMYgQXyeYo65UmNL34VrXHv3nBs5sFPBBLzUyhGrQ1djn2PuCFhZ5kdWJkTPLUvMmE1qPVmZSdKTDDsAKn",
  "key15": "crsZv3LPdphSdMsK8Kg5wx4mZi7FpXXRGgM1KhQAqypytifW8WTUtMzpsWi2RjMcPK1YpXKwN95Wp5hsR41p5mT",
  "key16": "JaQBh7b5TdRmBwmThsMmhb3pyQ6Tmbvg1SkXJCdDHNagiBER52ZBrpxGroSyZ1bBePk36FJ7h9TJngaFHHgBTJR",
  "key17": "5ffcbNXYwdSYUq1oFvL1fAQtgLPL1Sp5mwqpH3zFU8iWdJYGHyjgEMiroP2ZWwr2XGjsr1BHew3TEYwW3ku47w4u",
  "key18": "28izaLrVosyxkRErVJ5D87pzzMQxKy3BReGSJVkzX8u4LcpvJKxxqVuhaVFhQRdQSCDCcLMHCpU7r5XcE4Ldnje3",
  "key19": "2yPs5BcyRDT9DQGH1aYcXAcwrvD8qF58HTw439THpYHhPpBTe66qYy3MzL18EbPxUyLctNGshAF2zt8LiUumRqwY",
  "key20": "3Vk5DcmdsFRaGbFUDreg1iCbNqnPSWDeRjmNMf4t4kzPN4Czuc9SWdKiCckZFaMRVFL6tHrE31vE6SR5SQoMVaFe",
  "key21": "3wNbt3EeycXtJKapXex33wseS6WonyD7VJmpF6FKoziVfrkHPXwXVWWNjKmFQjSaM6ioytGipa1jRFRcbaKinayU",
  "key22": "3Li2DKX1RCCdq89MAZ4bqccsGeiEbaj3FtbNSceyzQBXnGoaTFYFpPa651nP2FJ7AaiCuw7dXTWZ6x5WiVwzNXFD",
  "key23": "cfFfn1MwWDKXUDKK9UEftKDVqB8RVL72hsi2T4bpX1UGGgJnxLX6MczebvCUV1LkFXYksMrWNn4QP4Nu18k7F2J",
  "key24": "5uRtzE8bRK8YWj3CYk5hYbSCMGkHg4ruGqLRh4QUfFPaMuktKV54JzxF7eyuY9UnA8R1AEQ6TBGUBepDVexBEeD2",
  "key25": "39Z5NKoKNrKbX7VJK7VW3EKpuBba96eCsxqdr9W2DEqfapBszvzeBcdVbzV3nKJMdiF3ZDJEQNzGcbtAupELLSpE",
  "key26": "4pDwSZrGb4N9mwkZ5EyiCU5aNEhzp24oj9Uop7yDMkQycNJyL5yvR8rRvDzVenk4Xg1yxEqxSuDDFstH8JenPexE",
  "key27": "GU6MUL3uPWcvYPyfbeW8L7dRhQyz2hqapqNSVC6NaAv9p6U3P78krjxMvR87FfR4Qc3URVavTy9SRufLqSL8aee",
  "key28": "127LP5yojJshek9CdgtBp1qfYju43qzRhnN14Zz67qv7gBZYXLyFA9K33J9EysPKDo4aVVo7BiQAvzsj14qm2Dm8",
  "key29": "US8Uq4Nir2djTVQ5uKbha8pQESVti9GJgKNH1HZxgFaEBiCdn6M9hCX4nfZ9jVUM6AGuRGZi3nFL4eeC257fKiW",
  "key30": "2gVKSS2XA2HboaNNawEtBsxJfWK9gTDGpDGvLMSWUjp1qSsM9APD8pkvefELn3LMWaYm9NBWRTMotRnwPMxJoeCQ",
  "key31": "62Np7Qkt9trP3p3NcZRPQtiKSsoYo7pRj5aq6vF8zRKKmG1mUGLUmsmTp8cugnMArjWDEYw18ga9YjgDtjfsmwCx",
  "key32": "3mPeYU9kmamqAB1Nw8RCCB7D4Qoh3yoDTdjzYqa3gYpBdmP3GCbnS7UVVVyp1mdN6HbHRXDtR8xGf1RCZSWJ2xSk",
  "key33": "5gPEYNMURJ8UTAuZPoNU3jALf8f8JGZ2BKJkTk1uw85P1GsNsVogpN1mbV2aWBXwmza6yXogzVnN2NuqfdEjxxiZ",
  "key34": "47LavpKd1vejnWGHFfHbMaVwPeMdw36ZBotKUybCEqBryAKUSovrF6hoy5vnCVk5LR3ovhUEPR7afEtJWfavQB5P",
  "key35": "4LkLDHiWDXFy9QjqubRPDP1UHBsy9cqXJVTT969Rd42oFyqTTX5xyexZnMvT9pfnyFppXAbLUpuiaVS8suKoRRQa"
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
