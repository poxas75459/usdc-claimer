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
    "4fLfeBXffYM98bCSyxmXfxFWhfiygGrSMH8SpBtBNUhQWh1y54XNRhHExgEXxit1MVe9n4bS1JDYmt5eZUpuZ5Wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kjKydQ2rBndx81VhfuhbFUggySwXdmc65kbCDE5HXmWxDtScJdqAEsGLawin7AL2YL2semgP9SebjKFPxbrmCTu",
  "key1": "CFoixap1147dtx2sx8XTLVCzG8QA5DvaZLeEEjgnF3VHGxNaiVtiLdDPpj1nSR5MCNeTFfUxhAV3BzGc1GfGqe5",
  "key2": "495XhkXMFkpSCCJjWuJp2YcqUP4gPR4LgMen71cmWppEReRJ8UDtR9hrE1Z5pGurzsvibzENFg6AaX67UVR9MxcD",
  "key3": "r8Uh7HFzxpADAeGoPgyjxXpS63kZPT56bpK6qdZ5jUWQSujFs3NkUPVfrKh5rUJcX5CNz8gssmEuaJ5hCxoNdF1",
  "key4": "58vDamsecB9rt56AZfKfKEaJcnXGmTkgzkaygv9PtiRybUx4wfdy3jFuXep2Z9hzaL68Cpk9DXN9RxV8EiJoX24o",
  "key5": "2SpxuYGFM7nPT32evGoFgDyneKQfmAk4LXiFtMTsCX7VTvDq19nG82PV8CbXbFcgkMCv9AhY4mHUocErtzif5jRs",
  "key6": "3ndKdZfYgaTtAJ3yKmo4rAU2BHarfie2bPZTrBuG1NnELdfkNNeYsLU5rwV3CuphX3aFwXbkxK5s9geHDK1LAtzQ",
  "key7": "38988nmKMYJWguicjgwsdgyYzxMP4n5tuBp4xAunKeNhB7re6bVg3L7icuSkRmAkcojmq3vq2kG7Q253s9rdwFhu",
  "key8": "5Epp9rp6ehRGdNu3WzhDCVCk8kohzofBzUPUSNJkWSDYf7ectkLJt2MphGeq6RaTZDTkbvhQDMR5PSNGk52bDfyE",
  "key9": "4mxUbWt66bD9MWzQ8rrYcGUE3yRJVowZ2PzzQ74zsbnFHxo6di8cBF6oUyjDEnSTNkoZ1GCoGVFvsX7Yd4oCrvUJ",
  "key10": "5HLzUu5REfkKBd5uXAWZ1W6b2QTPbyvLJWUvxXvQ6uKVPYk6ydxnk2zFmQBhYsAuh8qAm7VcL19Zf3cPNad2xEjt",
  "key11": "4w7o4ijoBtfhLpUFySresnAM8mMY739y8gxREpujo5koNJkofBHnuT6qd57hbKLZPiQqvAkQ3haaVQ36uy2y2fbj",
  "key12": "4b1X7CiQbiEH41VvUfKoQ6xs53TbzW9nr6Q5atPEjgE5FUcoFWd3R9GWyi3UPSkyABgbK3BdcNkZY4KCgoQTJKoW",
  "key13": "TuCi8J1NJwZoBracbetX6xGuPoKsJ3btAJ5ygPxfr52b2JP3esC3WF5eTF3dYHq18BS27KWpACycheHxZsjN4Cd",
  "key14": "2HJ9m7ega86wHpxE742fpji9fNjDmPRbcmjRLXQCQcJubkPNhyXZrb73WgTgfYxuiBQfZN25HsRuCcgu81UN48Zs",
  "key15": "5MPm3UyBHDA3RvqGhSGRNMPuKHnyFLEmxRKUcX8b6weWno8gSADrcAGZbvYRSSvjBCHwKNA2kWMPVZ3tJdF15qfe",
  "key16": "3UsFVAVE9qKV5dTzT4KoYvJdDtQM52buYDN3idTHgZdbPbKxHpnGBgGWc4Fyn75G16NSTtJxU85DbinZARzUtA41",
  "key17": "5FjwfBGSjSh7Ryep17pxtyAXEETPHjMTXJMxdJ259LJN2VVjLZUDbYEbN68ktfLDNJugegDZTd2sR3j3BvK7ShVV",
  "key18": "41hTwoFNfaFCGVp4r2oyahGN48CGUaFD5N4XZRAjWdpWhi533wWVS1KnExWGwWLDbZzjtTh8bofmc3Ay5bBBGNh8",
  "key19": "5LNCvi8TK2DhDipLfcbLPBNv2ah96Wbc5NNy2kdHCQ713jw2CKNDFmNfZx7yjgCoqVTNL3ffPN8FuheRBScvWoGF",
  "key20": "2N5Far5vpthf31aWpoRQGc8ZXG7AqNeMERQYqgKkeEm3RFXYvKNfaT2Y5wZUbnXT6EJE2X4GgviXEspK9FCd7Ezj",
  "key21": "4rN9WkGdeiHZd9K6jykpRmEkAuNAFiMgGcpBnpztmXQN8KmzJjYvvnrkKjWHvKhZBGCAYU5cdRu5oPkScYAi9uFG",
  "key22": "5DQzatPhqfYgVp3aStEryMkm1CWHYA3Ww8HQKknewVMt6T4GgBZjfpB7C2CSvhxEbSNYTA6AVSbwjtc7vwGuGhZ6",
  "key23": "eVJg46V8ts7WFCcaxbDt21B668Yus4Q3iqoyJUTie2KUm7nQ2aSmsBidNETwcyQH6kKYsGajNN6PqB77MRyTcxY",
  "key24": "4vHBfykFSz9btxE5qg5p2eP1AVrrxmno3Z2LX1QLh9PFCJFafPpE6AQXm6ixFW8shHzsCGk7kvPcZC8e4Rsce8xu",
  "key25": "ygkYd4BuyxPX2gNrGdG1MYbCjUcX8WkT8X5us3esNn4XQ6R3meWENUiM9rpt29d8cHD3bg25DtnyyM3mobccTaY",
  "key26": "6EEM98AZNJPDMhEhNTEqZ6PDMFxvB79TeGFwukR7WsX8cCbNfF8ikiwZd5zmZnLFruxBVDuoGEYUQHtU1zJLrFg",
  "key27": "2YBtGHKYzjZzz7bwVwzD3P28cSnVgc7Wr7dWCPet3cQ7ZsY6RK6kxn4F23oGEGBszEVdNaBTG8NTufa6kdpLt69k",
  "key28": "25C9wA7zpPCU6UCFPTRipX5oEDF7v25u58mKon5KJJeSRNv42mLkLxY2spQGknaXmFRbdjYXH388uqstZA1bJSzd",
  "key29": "R5ZgRDTMj4EDmqj4NQSCQbRc9czjQbd3W9yzkp9jnZ412sLK1W3mUYsdBbX2CHMgQfC4j1SK4x5RTDcHbR71Q2V",
  "key30": "3a6Gp7KYwTEENx4yu7gYiB7x6FDL1G1YE4vQgczkvoU91siwjT68gu5nrgTBU3vXBdqJRbK22YXuj6uUnoqqojXS",
  "key31": "u88cEaQyWFvkvivWmT3tP66q5bGkFipgRsmYoNUfJ9KtaPwu5KiqpsC5P3fv9e7tZspRZwQMJJRAPV9CPxNBPNm",
  "key32": "63rZc8FHxfronBdmqMyb4y86QsCLs2ifRYZHVirHxwPuStcBQh4SB4QcUX1hff6HkqGVYk3Me9vDC9hcWJmFQeVj",
  "key33": "NrjnjBNBkLjH7qW5z9z6qzCiREpBXDfFxFoKxrqi5S5pPuGx3Uhe1wNXEEXKHD3nNzRUetUbZGgn7rnHHeb31Gr",
  "key34": "29pXU8fs1CUQata7CGKu9MhExwVb4LavotAkpfV98UA6oK6hUbkWwxtfTcuB2vHAApfkJvNFoLWMjUzTDdA9cZPy",
  "key35": "BoykA4BWinA1niUVYi2dM9PgrZbfb3jyWLiENRbsN9VFisU73rVtjc5Y5xmBWe49nKwgrhV98ujwripfYzVBdAU",
  "key36": "2nm96BzFQyBVFd36Q95bxuLZMsTpvC6eFM8irk38oSFCo6x4ghXsgxQupwm2HEBDSeHFtn83WktMd67gA2qGfpAH",
  "key37": "vHJNPc8kxXXct3LWZpapP5nAZUKgS8bv64eoprpAEDVzGzCA2ALDfMjD8zfY3Kcjcc2WgcbamUM23tXS1fGu4Yy",
  "key38": "4PocGL1WWgPGxWEwk84py2v5ByxxwpTvNh1eePZkRu1yv7T5BcvWHzkx8BkxBSPwnKvwH9gSwqZf7EZxrHZ4aQrr",
  "key39": "3HtfLVUNfqSqzLH9WByyDyMBSneLoyB3T2YdaPWti36HmC364zKPy2UoGpgVN4sUV7dGkNDvWwowseasAPjFJGAH",
  "key40": "uJRqoVYiNXoWuCEYUb3Z5C6KdZGDBZThrMv9NMxs2ovNJLaPpd5HRVBpnMqSePsdi2hhiHrChGPSU6PGbp7oChW",
  "key41": "62vkgiBA7rNaofbm57JZdB8CJQ1PcNV6byCpxocgSRm87gMvrzyQuKJGUnJGpCpVakApW4sQTFoEQ6qAnhfJdvUi",
  "key42": "4FWjyuuY5sdoSjdXDdsME9f9znY35mWj5rh7MrWg4aqGdt2ZuAE1yPkRGbcHVWjfeSHavGfdH15ft8M81NV86x3A",
  "key43": "5uxyMD4yguv1iyDdcieBSUTdLBKyTg2UbhrNyxw68JnQ6RcXXu1ZJ6Tv7E7j1Gapxqs2ZsbsDiTUcL87gRUvCGjX",
  "key44": "bWmE4Xw7vqh8rPdg9Ghvi2T2xP1LZUjPEcm7eY5oHjnDGnRHbvtF1tqwtBkqiho2zELmztwLC3GU5LURYRSosjC",
  "key45": "2bZbmZhRAkBYc2fQZpjicHtfEMUiaBS8aDPQ9nPN63G65kpGk4r76SnNP3PLsaRvmmv8S3Yt1dVcG4TiG5mmdPEv"
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
