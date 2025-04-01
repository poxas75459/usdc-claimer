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
    "4TqoZHUCVvbsrKiGvZbnRF7kxwCEkY61Xs37zrkKf7W5J2aNLkvWKRnQiTrJTu3nEWgFsaxpFZ2XnwtYwESJTXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7FSMgZMCn8PepBQbLmMV1XRzzc1Wn1RQKmmAbC3rKgp6QU1a3a3WsQcCcesWCjY8STrX6NY3ixci6AwW7pBvZDS",
  "key1": "56gnV3eLowmAse6wZcBuTQ65wy73PRT4zuTGpFeAV5ScQhPuPwWpinNF3fqfx7jgz517JQpNphN3NDXHxFQLkb1g",
  "key2": "4gydfKt9wtbQ1fjsmnKEyBfhR3iNr3NQMyoCxEpyDgX8AZewzd9TnB9kuCAUaRN9htMGH2aueKUNz7G8NCFXLCeB",
  "key3": "2bgXdXSTvmoXUAPD6msvZrC5Dx7L9hWNCGyp8mc7a9spy13GawpbzJRWD1EegpiH25bqUeSe6bN4QaYZydg1T5SG",
  "key4": "4QEj6zG63sNwEEgHhei1dbFe1geTDLrFHFqkG2ngc2oTRotLP6TTcpCmzuCbCvgXmxLEtmwbk4WaGAw26agvibDW",
  "key5": "pKNHbwJ39rnDjRQ3tqzinb4coEqzdrmFmck49FPZouX3TbY4uDuNqVKF5tkKWtASDV5BdSUcjDCNQnMbmDrhSeT",
  "key6": "49ch4bfmFkXT21jENS4fThGTU53hFfeibCxVuZ1kTxAg5wXA2hPKArrkgzcfhKHiEmnR7AHbNczjJgihUBaKEzw5",
  "key7": "51imdHoqbrgzodUZMjZ68t9wKJntkpxdggMpW8kdm7H6mvqbkJq34D2HqxCiyFfnN6rqRny13ZeSFjWA4vxZ2Yqu",
  "key8": "46djwcbYWnLcifTz4qHRZgzVaYFBg6BUSby8zEdn9LWJjZmMhcaE9KhsZPDQ2YyPamjmv8TNzHhbL9AdZQcg5nm7",
  "key9": "5HgpavhpbtZuavESrPZXhTHS4oZQC6YuwXJqnJbQRScFLHd4NE6LnTHuzRVnBZtbRUTfs2pvghBvpxNoFiVNTo4q",
  "key10": "3hTSQWJAUCB68wBYHqnodGprba1qm1cnCBR9FtxL4c81XLwN2mKLuQruY6hcudrbd7mqC6bYYftVj4ahagTUo3Eo",
  "key11": "cSGUMuq4K4YsYZVPTNfwyhY69bVdkytGmJu35Pj2CCu64BERyhNEQBcieVsEguTNE9FjTs2VuEStLYqKzrh4Cr9",
  "key12": "25d1nfPtNcbKv6dukE1XFGiWVrkCNmG8c84zwnwdWRNojzdnkigALHAmqMdtRLaxfresg6moSfTbnaeJ1ZK5gRnJ",
  "key13": "4LqxCJpQoJKDXVFCe5TBshtnGB4mssnM6dRGFNrHasA8ZMSDFqudHrGNKtk2bkoH8csLAQSduAgRhchEkZ331dwN",
  "key14": "2xZiDTgK51wiTMzAVLRNMuWBENtCrqripSvCegAzVqGG3Z52WWP4hcihmHsVBU9ZyuUL3HTwRihLQrp5vvMXuthX",
  "key15": "zUsxJ9aRQAGXNQjkUfS5f92iB2QDvUNUMiJsU6ezBV5mrie6hEy1QVqQj6iXzLXNw9cwEmDRNPJRfpoP1k3wTax",
  "key16": "5r21n2K1xk5qnDvf54yNG65pwfBUPSigHEDXwzTKomGwMtBbTJGLt2EeaiVqFWd3KMSGB7Q4HnCavuc2fJF3kNPb",
  "key17": "5NSPSdJCsGyykkQffvZvqC86k64JrqudLuCGLzdYku8jaS9VSwmrRLvMt8tMzP7m4bAisVEESE6x8wzxLxB4AXtn",
  "key18": "51h9znn3FAezjnAJjNa39qsu5Z8UFB6hhA5tf2AaBQDH1t5VvMQ8QWTY7ebjG7CV3o4GWUHFLdoj6hi1NxYk9h4k",
  "key19": "1rRRdK9RatCgQiQPbxP6rdGGttrjMqLtFjvuHbK6Z87nFCcM6EAKnzn6sdJ8X8hpKsiYfykJeBkmSQunP2i2xeR",
  "key20": "5rAzw2C42EhEcn7XEQ6XdTEFzFMt3A3rLikA14MUrJrT3dSpBBkZ9My5EUh4WavSfkDBbjJda9LmRnBWEqVRvLU3",
  "key21": "2tSzG18YknVbs2SSERm1GrvfJA5oP1DoPWccLbGaYWxBC3YGV8kJqPQRLQsfXA1GMEuynpQk5RJUv9R1vn8m7DqD",
  "key22": "2SXu1cC46iXDBD6HowSmAfncHqtT8bbHbrajUAnyE5RxrL9ya4njtghkLfMEfXXqiVkLhsdTHmRYgaBMcNkwdbGk",
  "key23": "5oGL7v3tktg6UjdW5c13eoqGpHnEcbc2ewC2DWd6uHgVpHMs9LxDDQmwQm1s9C31R9zdyW3f9aXRrYuSNL1BHRHc",
  "key24": "3nDVFpDHeVVq9NK6znDT8adFz4psUMqNdoaH8Bop9RTVBiMAptJrDEga5sFc7rhFPmQ5av5M7zUHSMR5vxTzD1PL",
  "key25": "gsMt4jfVRwgHS2si8WKNRGZzd2Va4qjDzFGZGWPoMpB5Z3Qbj3NV2k5F9zEcfB5zX7XLv7W2NJHtXeUrBswkY21",
  "key26": "59vFjdMQ2XVN4xSBQ1k14kbnncA4Z4eTt5Qm8hvh3QMoaFRTtqS3DWNvJPZbNw2Hh6TwwCAYm87zuWhTJc3RCKJr",
  "key27": "2xfu2TN7vPpHGzKcqPrZfQP3f7jMLj7qn8bNFdV1uUfCM6PD8tZLUk2QgNEpYUTB3ENGpnYmpHx9JGqhiffuBFpw",
  "key28": "5cK2qRepaGUEK9qxXtGuhZtqyvLwJZ77umHR1EZHZgApLis2ZWqQQFTnmZcFvPYxhRwDxrNihh82xwpDEPTwu84q",
  "key29": "2eoqDkxqeqrHwR6WESFVqjBBQ9fyYKRausqtKhd6QSBh7DVhNpn7yV6dP3HAMrWU8CNtPm6zYJBHz8ZPVE2dXEnF",
  "key30": "HC2tQvG4R6avFMmaX8eZMWqW7quHDdD54mh6J5icsovbQjoYGtKh9BtL6p1B5VCPv5uB5M6HxP8ZSjQumZpgeWb",
  "key31": "3U1gRuSbhYPtwSaHaSH9Cs1jqRiryYjZNnwgAv22L1ZXhSBpj7eUxrWPpQfVmziu4ErWiZPAZ6LMki3MEKdpSeyg",
  "key32": "42cgvcj785myyuNzYXsxcvaSGedXwK1SLMHHPYharkBkuArZo6EaxSxMT5HhXViLibhhjwU6rKMv1xHjzgkkAtck",
  "key33": "bGAQuumxCnsj24LLuLHyXWgDStMJDW7JUvBDjCz17FCJHFVBdaZDdnRs7452Rn44hDMh8aR3dbjhWBVebELHPUe",
  "key34": "4tC8vYXENd7FKorEzVV5wENjBhdphY7XMgNRkXbDzPjkNgS63MYVcm8CT6NGdckDjXApHS6kb9ANUCkygjZ6RYVY",
  "key35": "4TfmgVwozma7e825PcdPdSh89NBgqLE9YnEoZc2NRyAwURc1uwXE3bqspdjbs3D5E4ZQfrvSPcJi2EpdxrveuoCe",
  "key36": "3KJ6vjME1kE9KmhH4MNinxMtkdE9TSVsUBwemGQM1uZdv16W1SwGvkTPdwPT1JddBF34dRHuDNH4kEfuYkZNRH9C",
  "key37": "q7W89njpmZnC8CY1wkqQPRC8dhMLvXMoUzRHrRgz4AwyaUu297EjJa58ytfVfoWLSCX9xwumco87BZDVK15oZis",
  "key38": "4jDELwXJ3nykMkj6ysgEnArbs1DsHW39rAJo2raU2A7nbZbznDxGrjKSEcgEsQRfjbNW3ik9ayiBeKEoF3sCMxSA",
  "key39": "5sjLoc829vk1r5YZKPdFQocyLDs7sS3KKEWLaXBpCwu7PgH8ZTFrtNhuvpYGUhPxB2BUfgiXM14fM7sFSZ3nkV6J",
  "key40": "xoVFCKZPZdhW1hwxD9oqNrUKn2DfMVni2nKSd5Y9PuEJdxLATJVp668p4A1CfzjgD4UmKah3tUUdiKxqgTkyGck",
  "key41": "3acC5nSabBE1dwSJdPEjR2ANxJH2ZZzUePXzFmcoGsfBTmbho12Kb8Qo4VNRP4JJVaKm2iFoEy9JX3oQU6YHTutj"
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
