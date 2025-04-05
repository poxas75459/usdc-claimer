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
    "7vhzrGPTbjTNyfS2dCAKSvWfmkDRJwZ5KF3hiiGzXLAwnZUHEv7uEDofFustP92NXgp1KtkFbPzfPGUXyXga1bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57uoCPZ4wEoiG5sUUmtCAjDjDdTK1b9xA41pSgSNpFoWpB8eNczQHYquSUFmfAg9T487ZS27zUeooXGt5GPw8CAY",
  "key1": "5eFgDQfwnqpWquqPoS1VjsE6We7kQQsodLED7oo15mSxWnj35EwVAsDHXz5yceDtTouzn32JGPVgctgqAxJTGCuF",
  "key2": "34L78GBAsGQDV1hBYzUWFTvFvhs6Tga8cLiVfByF4xVLDD2zQU9qMyST5HvUCMJVkJ7dqoGz9BqnMVAMcnzDWUyr",
  "key3": "4Gq8WtZVDQ7sFNyrHPHnDuxPKbQSPZRDaQQMVwe42B2ULsxzSeFAC4J45v1fDcm8tFNPyVf7vqyuU4iHGDsY7TFe",
  "key4": "5sExUnWfbRmRvEfUcbG2ngtD232ueHcaN1a8Mg2nw7jmLNpqgc5HWLwnwiBpZgwkqyy9ynCbcHgsw23iZzPZNRfv",
  "key5": "4HMdMfTDuzHreT7Sx2DZD6r6YXkwUMEfdq5KB1jG6gyzX2mMpwf2GJn8cxBkCVuM1Uz8nW3wML2mQ5HiXeikPSTZ",
  "key6": "5cq6QTKP49ks3Kq5PAqL211GVYwuLRhSCQCQNxTCobEKp64NAWnVjH3aAwvKWc8qVdkhArV5gXSMp2pwuzBzwxaD",
  "key7": "4PJEJzdYWnJY3FNVmUy26qMbHvxoLmAFiPF54Xmg8dmGTjjoXAAYXytwuA2K2koWYhJrXTsJD5rdyyzhVo58TpgS",
  "key8": "Ct2VEG8S9UqBxKd1uxMwFgrGrbo6MSdax9YfQkswgeyiXqrGqeNvdzonKFdey3cqcDU2faAeWVgQgq7d1BvBsUF",
  "key9": "3msptbmiP5eUJfhLaCPDHBGAHwrXVEbdNZHVB8UxMKHd2k2QGKGArjnvUDQSWEZxQBVhAzgXHLqCMR4PdJiJrpiS",
  "key10": "3t82HjJ4wQGf2AJrhqmwxart4gVcARCT6aTZPvckShEn1xASw9ELeHmh3huXNnXcvM2L8Y49wDuxPZGTPCgH37mK",
  "key11": "dprYkxReNTjrHgUWexBQgnUk4ZYC15ahjKLiMcVh4n5TQprWcNjRH53Ha9xbWu6B77hRyx8yCp5hWc91wofHk6B",
  "key12": "3vdtZ2yvALyTaiG1PfNr4PWfsxiw7tiAkhY4hfAe8fqeYxGfxECNPh57KqPnN7GytFdJaspD2A4coLvRKToe6xtB",
  "key13": "3SBcGnjpGFmfVZhDxwBQAUQ6TtTeUPHnQ9zUwYXGcaRWumzrVPBhf7rLtXL5cRQQxQpMLnFoSqP8Z2sNaJt2nfXp",
  "key14": "4c3U8hcEzAVJsBuQzY4BQx6JpcUoXM4Dvv4N7HuaEKd3SpevDVaxcm76mWEqbXaPxu85ANxk2DhvpJp8E3Fgt5Ki",
  "key15": "31HEnA2Khch7fTy53ovybQBnudc1cC8s3CsNfdAs4ZYbUhp1VG1JtY7QPHBJWutmZ8DGKgo3Jo5eQZW3TwgZVTmJ",
  "key16": "65QfY4pT36RXqF5GEFsYaXWBtZK2QgdvgnapeiZNJxakhQnx1jKkWiN56ZNtS8NP1xz74P9BP23j1wkognDPkd96",
  "key17": "4h8VZ3aE4HXGRYAGnDZDxr9u2Yd2UNsvrLg6pCne7BSHfMxNCNSoDJXbprnBmUbk31FoqxcgwM6uHnqpG5q6MLrH",
  "key18": "5nbaj6Wfbuyq3R89evJ5ejNmp2aYLraDYxh4fsxKtGwNbv4tCdn6jKmqrxvSyUJ67g3VUFM8Ne7RP1a1pq7E8iDJ",
  "key19": "25uPqxVVdT1MEb2ngfoXnjUc1AZxvEnHwrcXQhVQxEnvkJDokDYq69EbrWxDa2UJwoGFiNCWyWYxz7UdzcPQwJQ6",
  "key20": "5uBJM9C3f5gV5M1ShKoNdBFeoMnKSbzJ5iF51mbkUXqWYbw98KYKvcob39KL31GnbWYoNJp4JwwUurSnduymsbFL",
  "key21": "2nZ4h6tvqdbqM44vzs6r9z47F3H3sAZxWm7g7wz3AxKChbCQSfPzc63ozfmofWqf3d3tBiM55ojYZHi3hoRc2ifz",
  "key22": "CmSssQ6W65RgcNanMCoia1Xrg6DHXoiZRWvBBPkQ5qTWB49goFvgqawNDveVkggd2uXpftH5azuMS9zJG3XazX9",
  "key23": "VRwAQpgdCb6nuaFtK8TfQSA9kMAu7L88XgaZJURN2sSp64KNSU4A6yYFAbDQPcQF96wFLccBaGfAAGvjE9vuYwo",
  "key24": "37rTf9Ba9GZXgrBJP4i39cWCa7oBNdbgKp1Cyp7xrJH5K3VCDijGn83ALNebvXxKjqHg7TTy4hB4KUX3ChsSFNE6",
  "key25": "2FGGvDDsjemJrTJu1HPtEV339J3sm4qbUsgwCuLhaYaFzSyd5k8dh3Tt2ZJdBJ11wEu3FKgYSSAGimzD8hTPfFy2",
  "key26": "31Bsbu5JEGSZNgXafgP3SUp8jwXXFsUTr5zLUMoyvnCMvEbCF8gW3GDC9P5dN8RvAMXQUFcuXwcCHFaLQcREbAQH",
  "key27": "2nEJa3R5MU2AP8MmBKAbRMuKiQzdaCo78DKxNzGrp8jDqDEb9gRgsJkZqhYLXeTsGA2mwNo36erbya1zAJUVCHvA",
  "key28": "4nNBJgT4f1kuPFiyXMbajxan6uK2xJu3jPiZwaRaGJZszfRyM1vdMTRdoTBw4TVTCkXCJSBJc59ny8fiDGcYB63t",
  "key29": "1q36byhFJdJJ72Bnrdh68TiJdRq6JsCcuFMGWUe2o48wSi5BTVt8nsDuKasmp17eneu6BirDfEETdi7U1uzEQAh",
  "key30": "Cdy8YAfi86znCawyaPqc7sntQKxGRMGUinVQ4CBmyuDUnMKWJkj1mwgf5SJpMfu513ThyzcAHwL14gDRrzaDbor",
  "key31": "3HjkY4DaF62ysnaCQ7Hse1ELdFBLPFw4U3LuV1YaZvxm3u313xJTyezrLMGTDnKDuxYnrK2PYgtPhSZcj1xTsqqw",
  "key32": "4TJDJFFYXMTUvFejQh4Z7jtweL3RZMr9tRzz8KAJAeaXcWe3nE1GENQQJ6TkpTV7AQHVBojdnmfyC7ZTCtFtWhdp",
  "key33": "g44AVsRUG7WZ4s6TBs7AsJ1VBFeYoUHwxjocS1LCeFPZngb6G4go4x9H3CU3ZoHtwFjCvtiMFB3Zstm8SRMYay1",
  "key34": "3tACxRZnR1Z4bT9C1H22LFDpf2Qrz5sRcP4pUMKtVPp4pDKimpkW1Ftc7S2LGHcSynB6kAWUHbPRNCU1Hh7uTFrq",
  "key35": "5p7cc8QC7Sg5HY9VgpyuRuX2Mxq1x1295ohrSXRaWcN7gj4wZHb9cUk95dE95Rx73iC4UuCazR5UZXCYjRTzrDrk",
  "key36": "5heMocw9GYuCJUGcs8hFi8QUZEAXGExyrBRfCpMBAqCtsXLeSvLt1Ys3wX82YZ1LQ3UxAVgvfLiAkjbKxUako4Gp",
  "key37": "48FdaBfh8i9wJxiGtBBVAWioHiWphd1QxMX6oehhsNrf4s6neemmtg55sQ6TEwFQptBVmPccYg26WTcitUc72Dsp",
  "key38": "51t4juUxZFnhVp78G1RGsfV5Rw3SzEDVsCBgyWahkpw3JpHPL5APBW1sb9Wmx9nfLFFSG9YPixCi1bS9cPb3JucM",
  "key39": "2WDMwATT6W8zoxHhJPaqKrmBpE7nWRykYBW1dAy9voWyoSnXQKYz29UjtG8eWuydfZggfHSU7gSmH43m1VwCJurF",
  "key40": "3k3NSYz5zmPsvnRmTgitwT7z1Kax5fz9QRsJcKLS4noqaTeWLF4ojuGEocV8B3oxJDEYhGQESTNMPZXxMFKcPY4E",
  "key41": "ukwcNs9LDF8G8AxdVKhd5aVJJPkQXaaCEihPD3JpFFT7Wm5z4m51vqCzDzo4tpqzcuXdZr1iUmFiBrmw1nh6Dss",
  "key42": "2641HqwmFGVJfDqVXrcWXsy3KNjBLxRLxY9vgPZ71R4WKE3qECP1wifm8hLbLnfAPE9h5RWhM57AsU2tDUL3MUd5",
  "key43": "iqpEEnpUq5MZzmFUFCwEkJrdCUcpV55aory5KK7HC47Pef8pVfDMe69ZVZThbWwHgaGdti8dLsK4M1t7QjbkUNj",
  "key44": "45AwJB5i8azUAqVHRvum8obx143frg7PBMTt7bo1LiXdZG1VNpBLY6xaP68b2k7vESuZR8zhYnigp4BtVds8NPBU",
  "key45": "o1Cr8TjdAnG68RtZoFCJrPx3EUrHYWjhSCEz3VuX2Jh6wgu14QGgyJtQ3XtQ145GJY6xKTasWuuU7oWwRh5eqVw",
  "key46": "SxDFPX1m4EjGHXEh6bQ3QAeEBZcVCcFhSFBLoAcBQuddoeJRteJRx5cqhDNoSRV9zpNpNX27nik74xXAdK5doCU",
  "key47": "5c9nEXcb9kmzWhn6UXsSVf7AS5iXjPbFuuHGBUF16nCGvJpsDPMNsKxgWE6eCL7NgrgcDBLgEF9HiXQcnf5rWqL1",
  "key48": "9jqLduY88thtXCeuRMXmy8YoENxwQknpoF3WEr6KkN13KRqca5oTxBc8C7xaZPuUj3AC5Uk8HMhTeHnLJQwsbuP",
  "key49": "2JSQRGT8Zhiy2KzdHmBAXiPodgLidUTDkrDi7Ds7c3v2BNQu2ADCgSG8moZ6xd9VtNYaNPppQtPXdjo552fRbc14"
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
