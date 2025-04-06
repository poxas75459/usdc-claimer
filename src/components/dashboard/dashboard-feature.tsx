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
    "31qWKrbstRRcevzjTohLMq4Maxv6ZgP347vKts1FW9tpwmfHuN6kEhAeSdtLvBnp4GQkDnftKbqPbmj4vL3Q5ekT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VKJgm9hMfrvRwn5bfoCXErgJ1tCLhBYyatFcJ2C8dbgFo3h3SRKmMgkFYuoxSR8CvKQSfYTknp5GpPaa2PA1BHa",
  "key1": "KZrbGUjbG46eEJ75AEw1XGzBZSqJgA65GFHT9FGrDcZdCR9q6c9WjGkeJeAXnzJGNemLS4ZmwtWrUbzL7ktK7N3",
  "key2": "5TUM1hDaERqcdgAUUC7NvXQoHFqxkgeni3ctGW7jwYhmJRfFDvcoCmdEPKRsG6q8XoF7taVNFK86VvGx7BHWJuvP",
  "key3": "2yq918y7cPHcrK8uGjuymX39wesjtMAZtWcwbxCi6yTFY7CMyPLXgkcE7faFK6S1wfunChVV3XR9WF5gBJjoAm48",
  "key4": "HczNhWifKjKaBZjHGGrmQNPviaS2P3HQA3fBAviWbUTVTf4v1WhMCu31NsNtGifyKSiQrVeaTw1vGQeDNj34vCR",
  "key5": "62bKzj9STsv1qLboW6Yy3kFdS7cMSqLeEqQYHngkApfQsNV6RoGSXHuB8ELBdqVZNb2qYbz7uqTaPJwb9hJKy8zJ",
  "key6": "UJJDkZeJLmtPwiUWNigYnaQgjseh6sGFXwxdcnFQ9cE6dSf42scGqwCsLUMCvjZgbJPQHrWBkAsqPbBtdwT3qXB",
  "key7": "4ZMaGNXCYNAcLo165FprbE5ASn6qfBsERwXzRvF8tMjTH1Fo4MU543GSBEgHjL7Gp7JhrRm11ywSkNzvBShq2Ng6",
  "key8": "3wSBeraLcztXAhUK8mbRbqg6YTs1he6DtmSTaPp9Rgb63GhJwGdZBiKDDJc5FpvkAwxzR1nY8TaE86mzchVJ5df9",
  "key9": "2naWSVtKADdq5fAq7wA4aY6j3NMjn9GzxSBYN1tiCQGe1DUkHHYZpVGV3QNC8MwxdUV8Kq7jhUrHSiGbpUekeEMC",
  "key10": "VU8KBAQ1YxLK1vbmdDXvRMgyFgrv1Fa5CDYz1h9Ezh7Kuy691B6kBnDmnkGACnowNu4SMPoDpzkwczK76G4gVCK",
  "key11": "5wtWj7MCbuBU5WeqtgpwmsS6Sn73BDpxhHCgbMp7raqAVFXQHfCdcubJDFt8vkQXRvYf4zn2nkFR93CUot72udnK",
  "key12": "65TLbzwJP1HNwCF2BuPnLcxN2qARBihbcvc3HRZYZMuag8VAJkRyzs1GsczLZc4gfyBS2fSH5jAi8DWgQthPbiKC",
  "key13": "2FES5iJwsgz6KdnsHsH18nqaaFRP1NCwj9zrfjSYUPxpYicJT1pZ6BWq1BDnDLY1E8uM1aim9ZFS6uqwJQaWTvjj",
  "key14": "2jzv1JfLzZirBKjGJH6Z97CLCgXUdRRuguet9qTvy2nWRzhEHR7qbbgW56GZyFKn1N8K7zDMx9ZGEdF53UseXhiM",
  "key15": "Kj2SVP7c1YNe9BmNeDyCdQGd1Jh8qbfbFAYxrurGeZEn8aeE8mRaTczeWMf4yy5uJjeXeYhLWbqYH47Pm4pxHQk",
  "key16": "2Y6Ep624MeDNfPXCRVs3gx5kAN2tRd7uqNMoBbJVrWZWWHLaLv1tEp8e9KccQEdfbGPcjDKzUForapVEHcj2UTQr",
  "key17": "4kAsQgw8RrPq2gyZfoGdsP1kD9pbvYYqNwt5zbUoWLHuQvFDeeSNS1wqgVVppsEvDD5fqDtVobNmg9xVSFCxeMrT",
  "key18": "5VjbkvSCAXuTrkFPwJmEgW4YCjJPMCCBoHQ1qvazA3bW9pcCEq54GwHrpBS3ubX5mhdiRbbq9nuNChNvGe3Wfw8p",
  "key19": "32XMsjAff4Tuf4vmpTYooCGGPbZiKnV2S3KNbNuvZgPEbsRNAdPF9hiyUnoahVSWEitmWSCv3LyreSAoUWvee4fP",
  "key20": "3svNHpnXVYBNp4VSHqVxz9gxmqvy4PcjEeMBPAuXYJUQsDZYStWzXkMe58rSgAqhho33cQhHuQVK8xpNYGwSwmB7",
  "key21": "2Bg9soaAPCZo7v8u71KNByyYRUGCz7h5BnNxcg78R5g85FqomaN8UdRWggGWMug6pJPjsWf6sdH5HCuZqwB7axQa",
  "key22": "66DTWPr75gptum1roxsmR6JA7H8me2L1cWkZqDRxntAwA11LEEdzF4Ybbr7tnoh8XQe26AMcmdT3oyLbweChedb2",
  "key23": "24nC3BFsEuWhHZTHiBgDk2CPcXwL5YaRMGgEbBXGLnMr3dFNSwrxVMgLriqHdsRXxhyRVj3rtsHuqbhVsKCWQQgk",
  "key24": "5dmYPqbiCbwuifnRKKv5TGaWMCU39JN3X69znxhnmUuESJbeYZhPybqxBJxHgWakXp1GMv8FjPjKHAeEGMfYefoi",
  "key25": "5yC4tXGouAK493optdczXcirF6wTGdREFUZrFRip6tcpL9jfyz27fQ8fWuAkv6x1RSBwRW9cF6MWx8xUDkiJEPLA",
  "key26": "2jX2Cytj6D57xLueQsZNSLmKGsr3CWWaFaYH2T7YntVp6ydYHTcikB1Kcso1u1ePCn9pupwkD8eNuL4cpXvH4qXa",
  "key27": "4TRyktYDjKCq9AYEMv2GSmXqE2nvDPxeMZa6dVQejK4S5dW33Yx2Dm4wNBAd2mpHH9p7RaB8sqW95ttW1YspyoFR",
  "key28": "5UNkJ5wzfzoxaFEcX4FwSeYp7G3E3Nj5i2rf1vWPwVDnVvsHGfZTTcVDc7Ch9K7f52JAHbCofuHMWbat1JxKAWKN",
  "key29": "2vZ2SnyXBuUwcW2pZKkaywdTJUxuypTvudkQnXZA1aobsTfy9DNuRgHNonFT5c4769ppgfViwUjdorjxsVsAWR8d",
  "key30": "3zJnEnYbNdLZWYzAHQgGF8QvaB9UTx5QMt33GMEiKGNkinGzb1DDDRd34MhEb2iQPeyXLXvXXoU9XD238FUJW8XS",
  "key31": "5HyWmqdkn13GLpCLZcuNZEpkbs3Pj1Ym2nxrE9avAmvqmRPKknofrFcyoxb1qpZU8pkaRg1EvzUftj8ACj4hiFqd",
  "key32": "37ekgUCw9UuECG4zW2XGGx7hCRJhCHPK95B1BHoY1VsZADWNHTQ7k5PQvudGsS35a4PJdDfPYWX9Av4qEuk3v42B",
  "key33": "nZYCY6zhrSyUkAkjtYZ5KZ5zN2ggFZaLMEBufeK1ojSWkRsoRuCxe33wkPe4HDL94s3XbwGq4ZWDgekcCvEMSw6",
  "key34": "5G5mmmEswkQuvJn8Zsk3QBkwdacp7vJXHsTTSu87DbrPV8nA9ELeBbAFzUc7EGvMVoZKGrPpy2UcspUxCPhTEFqN"
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
