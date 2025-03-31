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
    "9uZmfeUcYzT7QdL8C92CwEAZsEzkDHshUGMhdEpbPTJf2gLmBbwc7TDKy1oSk2SrL4dJG9KJuct35iofpK9qCMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oJGe64a142HJTafwjJ9WQLzCSGVZjVRcpRsYNUdGKJzgsjj4sByynahC9MvNcbZiT4gconv3GZfQQZ7WUbtSYD3",
  "key1": "ffyjr7FuQg6FWVS54g1SiQMY3wk4KdfPnjsm5KcYiDknNmE4dxnUSwGGNeND3k5aJm52RKLTngT9usyqsXP84vN",
  "key2": "513Dm7LUv3eN6g3tv697TTiLpEwFqHGHnZTDCs1wKw5JufATT2pgij4ab3T2pQPNLGznr3QXLVEUZJTrA7R123V9",
  "key3": "5hKjHzjaeUqUrHVtdLzSr3oSa6JywnJttb5j8qkjV1j2gdGfiNUuMCYLuvmaaQPYUpkFVb7VtGxF6guYNE5aGYPo",
  "key4": "2o3sTPYvuiad6rDcQpUGkyoeVG7a3asboZJJqhW6Bbo2fVZe7Rf9K4SnPAcEn5AcWMC3Uvb7YHttKKoNFWXAHxKR",
  "key5": "2q4HuAuyzsWNxd1vTAEuPFrkJLxjLNFfDSkCTfAHSEJb7DJPYvZHF4iUfmLtShe7mgbgcJmvEdqN14L5FuXgfE92",
  "key6": "3JS4aKemuFvuLd2bq7FAFPjYcnW4KQbp2y26kxqtSVxUEeGbLkhrgehTtcGXHyH2QJc4Ni7cSDNft9wRYJYLw45F",
  "key7": "5JURL938PGkGHibWfTkgrxvbG1AiGchKuqRn6NKiupq4Rt6DWCgvPBzQP5iFAy8o14fCd5p1uLEX6aGsGPkX47r6",
  "key8": "3CwYAWdTMDjzB3js3V3VKfPaaBEBsfA2CJ8vaBYr539Q8Xz4jbXxpMjxq2tbgaa14E68DDBn1Zbjm9GysuHXe9Pb",
  "key9": "5hLXMuRkp9nDrnyHZZ1Ff4n4zKNwHD7qH5gGW2CmkvrYiiXsNm4vfMvyaG2gTGcuJTh3vwYWS8dZxrripR8Rzbu",
  "key10": "584hdmNuUVYRzcR7WchFzP8vdqsCFRoXqrn82E28hdFv15nNPLvi8PJVTSCBGvorTSq1oTxLUNVgYQQ5VFDaUnMm",
  "key11": "31duH1JeFnMGytJum4p65bXamag9Hv4zd5jFv8YyzRLuEGN5cfatazGagoRvV52wBYH4jGTwyvYawmdkNSDkSShg",
  "key12": "48uNTcnNM4Suw6F6DDbJCtSWJMapnvMku1G8X8QXeYJaaGZPcJFygexjpNVfPBwwXpUVCPdNkA1ecDBoFLxaRyaF",
  "key13": "3HG4qfou4Pa6mwFCCh2sCrMXRTJevdda916o8yZ2VjuZWETQj2QS2qPNtMPsa8kx3HPbJmA6Woq6Y4roAijafLry",
  "key14": "2KdpuVRqMKjnbqatn15RuaLX6swovn3E1zTPSUQHAen2VoTXZhF963FtssJsxSxbHC9XiNJ7jivbAQgUqKM45kNq",
  "key15": "5dbNHVqDaM393ifAnqVYpSinG9EoWoQbcDxH6NsxpwZU8xNUDBwqLZugmAEyhPnHESj3Pm3Wj2fSRciKQ5Viijfn",
  "key16": "2PGFVtz2yAn8xDPDxmWSQbELSqrugAK4mxxWjzvbWJXmsAT1nPDKdANmuvS2CKDNgnRVk1796bHM3me3Ks3qUq56",
  "key17": "qRsga7i6KhaLCGddkf8u6C8FG8G3DRqoGeEW1zDgQGFMpqj6Fju7h3M6y9NnbLuu8RqnDGDret21X4uM4sDQYgN",
  "key18": "4Vyf3SMH8192gjcovz16j3gwvAEpUm5FbTT1KuqHwLqLsmHkrvbcCUfqgxrMUJko5KCwASWLeYmSxr24ZKi4Qpuw",
  "key19": "kzswo1KBMGHceB5L1dLWUePrVmFDMdiPyR1ePLfYoba7QQ4tMugDG6AjqoKf5Pv35KXKt9WrTBdCiWYYcRVizs6",
  "key20": "241RWUeG6e9ZVe21VP2sWx3nvrYPHHhya5S7pf7P5adjFCoRLHdBrMFRGgLLpftRWYN2Hvf28ZusCiFXME3fGWfS",
  "key21": "5vbL66RGTXzSa34hHtSFRnmesw2Hf7rba9hQj4ft8Xd8gS3aXHew8z4uZ43rvr5bcuH4bSBWf6f2TtASU88793xY",
  "key22": "2ujApj5WznaifT5M4ZwLyfrdN84GrNt9RrBk8gZqEkU81YCHmVg3t54SPN5swrMXQ2hwDiJQ3KxJexZda3Lns22Z",
  "key23": "4Wmf2jTvfhrYbcmQrm5HeXosM5A4pV2MWYqNmL35cc53gpgupWzZkcUCSus8E6sPPsuTt4QxE7nqDm3WMroKgA9r",
  "key24": "bSBZBr5tbSEvFmqwbXrvpwGt78iy4LE6CwCF34Zg2CJ5BXe9YASPkcPZKkYqq2maSfmtpeku5zkwrmUiNAXFSKB",
  "key25": "33VZyauPpgUhMYexxGiHmWu4oFunhVbM86Frgo6b2APoQQr3XF9EPrvYCCGVLWn3JEXGvFMGHoD8kkDkUUTKXp2b",
  "key26": "kChYXwQaX48414uxAcsV2rQjLBNZTNwUjKafh8sJjB99c3i7HrrovNFFaw3iB9LAtiHvRNqudDnjRE7NoPGRbGb",
  "key27": "3J9PQirgS5Ps6NRUgxWGSXDuhMFNQzQEoVJYzqXPndEbyJGMdH975J2eVUmLCYsibAGnmoxjgkf2QfUG2uhXFHFq",
  "key28": "2q4VNCoTroVAL4okH2sEbpA2qtgFhyzwBp7CHBzHRw36rJCR5EwmCcJnczkRZjH8ZPr3jaRBsjVSkkc4uQdzRSFW",
  "key29": "h8d5CU2MGQU3Ttx4b1fJ3fJ9HSYndvSM15JYt6P4xCtZEPBfZnaGAP6zADqvyxh9cikgkamYcvPXUGmgeBjHbsE",
  "key30": "5UJRzp8RtuRNGDWY3mhXrSPxgXv5tnp54Er17w2Us12aZUttGPnm8YkY52VYhbNPQLXvJKdQntYhoZw2JPZh5LRP",
  "key31": "5Zf9adXsNZJqf86CTzT6g3KNTtPRNDQXXV6pQKzmMNnN84Exkp7xZ8jGQ5JbRzhycfUuK1r6CZHuYAR9tdk6v6zD",
  "key32": "2KX7oEzX2TExTnsEci4Ey37Jz3AKSjVCcv2MHRfYzNP51kDAK6K1Ue5b6EEvQm5SLyDwVyTck6JcFqURCVesi912",
  "key33": "2MrYesu2EpnjJPmkdyFVBuQM61HagykGWAHXicP1tYABjav2eFPhwgJ5gU314ZsRuBCAQPvv43uJeEDpLA53nkaU",
  "key34": "Up4ZN9h2YReRLVxguqcg5r1nx1HXitKQzTVSiyFTpNAQkB38KkqsVxYdyWa2CoZ2hSm57h7opkn6GasdbtGcrW1",
  "key35": "3oQEYXQGS716S1gjdYS58fV478DHwu7yVmcveyQ97oPoTn1axcpqpbTFpvs3AAW6zKPHiRdckrv9SEVa2TnYEt5z",
  "key36": "2v6cNUSUSsLZY8kV8bJhZtCaaPq7r5BEJBv7vy9fwZMiJ9hHkgyoEyro6pRyeG7eXMsMmAAKv2qyXYLGHqFXLxGd",
  "key37": "2nfyw7Q6xRC3RUDCxZo4nCLwLZeAJv7isq9w4RmW6g5YAZQBcWGA7YUyrAzuk8Ek2MLGwxkhkdSUmyRNRWhJxjYk",
  "key38": "62xbz3g8RV13FcPVR8Yip8h4JczZWA61KNen1vXvVgo3WvHQKj2q7uHSSWwvoCBoCT4LfXT3MrhrCcgNw3fRKkp6",
  "key39": "49W5srAS2RgEkqa7yxaWzSLHsJ6q5c8CD38Kj2ArQvHimugagK16D7Mnut94YvekDrxcuB4hqekBFXUtaL2Ghfds",
  "key40": "23ZZ9zTgy5H8PPYhfUunABM2vS2A6GoeoPxJpRdyWToSxhZFbMCCrprBh3oufqQFiMxMrZEjMU9m8aGXi99mNteF",
  "key41": "9cEihvSqZQXhRtWXimPRojZvDCJ6hkUN4Yijs1qT4m3HeYDsEVF981Q2CccCZkrrwKPtDVaFFF6HzzwWym9WmYG",
  "key42": "qyhj6uSLWauD2kd8jEALXbydQoDTewtjwJjjv4c5QKoq5KeDopPiTck9bYfH2WQckRCZdbUJXwHf3xCPszdq3XB",
  "key43": "UtPJZrUyTp6rL15HZj1PtyrAum5n3B1uxYD17hCenVccdU8i5NPwjDTPRMovXN883d8z1GSLrwT831vTr5RH5Wb",
  "key44": "4w9dFhUfvSSDbpN21cMpurM8UX8BhdGj9ry8jt5uT7xngC1LCn3HyU6a35CMWcTEqLveGMpMSA5AZhv7vSPLQWTb",
  "key45": "3cbXVqmFCFTdHpnvof9b5Ko3vbWrisNwag2g8TnoWZiJGmeYGHktPoaZz4qxHmyzHi72HQ4vU2FcsfS6cqXrtQfc",
  "key46": "4Y6MCoX5NNrST6dmZ98LjdeKkJX1b1B1kMRC2P5JxgMNwGrBuGuQb3mdK3UzkUbrh3DzvmMDaUfg8eE5Z1WqLCxE",
  "key47": "Ce7f8NuTFaCduDHzb89FzyNmLBrvCTS4JxjiC5dUVEpeFYqCcDuwr3UKQfn5dRDb8yiTt3Vw8yWFXM8BRgaTrFL"
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
