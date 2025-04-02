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
    "4KZWo8WUhy5aPV9YebYvTmwmGaDj8fVH6uRUq2Tu1rrvQGA7CC91en8xMXBk6dWoqPBDB8Edi8jEWHXAqJtNfShq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TWdCruBPMvAcSt94q38BcWgP3s7SKmhiUZu9hfB5u2y7rp4SHG3Nf9uyHh7WEPeFVfpeLF9o4jXWQ3LAEfFeAnn",
  "key1": "5hqX1cfi8iNYv85eSXTsfvZBgrtp9ayo1U8zuqmEUf79wVsyJYBEafV9HUQM7a29SypknH93WK2fbZmiKJibFppM",
  "key2": "5F4ED1Le1Tz7wuizrZP4xM8n5Wiu1ftr7ifMusGuATWbeqVvd6rZCRtwDpu4WNHnxe5JCGy1tvNYQV2qkX589Wpk",
  "key3": "3UhP4m2DVrrqV4ctfg45okPkQRgB6MsYiPjiPGquJbcnNCTLX3q8e3bEbVAPLci1tL9TY57oPAafjpqK298Lezf3",
  "key4": "3xer6GSnAYnGaf51nJa6Qg4jy54H2UjMuM9nKVWXscdhcV9ZqFdPFxL26mkQysZD6SromrVBeSa3dzuVR8SrZuto",
  "key5": "5YdSpcobTLT4jDuwnzrLV8dWiZhm253peMZXtvSVX7wTJ6fru2wLzVuMytQkvonsVpbUGh4n2NbpYfEs7nMvzchX",
  "key6": "58mNLFchkWTpwvXJrP7PzhBjaCahUqAMih87VmHFTbqdc89vAhz4eYwwjVhMTL2bL27roVjKSF1KQaRxgTTU1Fzw",
  "key7": "45sHmVtrfjrw8ysMimXnxGJjshn6RisV8kTKM5sRYfPupZbjyo3CvC3Z3vXeoVjSMaDvptNDoU3ttDjhAM9mjunK",
  "key8": "3zrdZNrGMw4HzWJNsmYiPrFGCXKnNAKuvTLsHg2xwv3QY5fApAAYnPCMyYSUtEjrBNyFHAaCB2CDHfg4xsssJKkW",
  "key9": "5Mt8f4oAgPPH93C4sqHrmfJ8Hfqc7jAgf8XkaVuGNPnYhmTaoKHUo6KnvfNRwzKZcxChko7D3rKHgECRRfn1yzoR",
  "key10": "58rQcoSey8vqiVtjjcV3ZPxP8KUvBgMTbvhMBHQXGsJyT4nnTcD8pXdD7MHzrz8qoUSCZdAm9k4QbQBzgxUUkb4M",
  "key11": "2yfmzxLxwE45XaXmG3tpbsJXiAKmLFPYWRp3yvYTHKSUerVYJ7hQDPEQmBCxpNY4qY42c5mf6j4ehAtCTMaPcNaV",
  "key12": "4RL9E7jwGnrLf9kbcBfab531Y3762UdWJGqaiBEHaK6ndDRJ7wDQur4nibg7dskwGecqs8TB9imX6LZEUsTPfmjk",
  "key13": "8yDKXx6oevp1NtYiAndZixbTZnxF4maFPyiU4vrGaS8sVpqSVQ2gAWyBK8kxSF2UFVvjtxVvURBteawqW5Mee7F",
  "key14": "5CkRgH57izLu5rjacgRK9rQMXWWKaJbyLA7gfBEkT59YTQRjXB4VuGrCRcsQHdxFnyyQdywaHcVSLfWPQqPNm8V2",
  "key15": "4f6LnN6BpT63bamAf5nHWyg1Bj86yHod9XqrNM7NM2h128GhVy9ragNVoXMYMa2JzkmAtEVx6NvgyZLAmj3j7Kk7",
  "key16": "JoXxiGJJJfthN8z9vGVbQpPbUJtbWwnQqkwVT4aXRytMvKu5PRFVf7cVo6PfVFFW1PE5kWQV9GpSz2SXUsd6HCM",
  "key17": "5g4gz56Ejyt2dLgg68yrpfN7pmS8JP1qvZFowAjso7WeGAjLN93gnkCjxdM4zVkTwnibvTbgbVwGgpCjw4KAhzmx",
  "key18": "3Y5NE4svBnVRoccBAdJRaKF5Qp1zysUpXgZrqGQXuYumKYedYBNm8Q2XdEbekf2F4JjGuNHhBwZ44kpSWaGpog4u",
  "key19": "5XRySiT3Nc6ZrNHSMrpN5HqtvpgN4vARtvJLDFRu16ciwePqKyAgijhA4MYoqWnn4zLMfpb5oeVDzij2wCPfG8Fi",
  "key20": "2cDSQgtZAeZeTwjEqT3CUaC3CybtS21cnSeQwdCH7P6Uq8vw3qFBsxGUxFHnTE5W1vxrM8SVk9oQQRqmuf4EsmSc",
  "key21": "4zREGz8nVc479ANkzhh6hWy6buMWNJhWbdRF3VTRM4ACxKjoXiwE1sp8DaWLF9487iepEhH112SgWiH6Toz4uamu",
  "key22": "3Hzt8iw6ZQFV8ACheq53Kkp1ECpwFUupcVKVkgVjyVejmvgUYzGEUF8ApVaPBQyQaftUANNkHEV8NVX2rQum3KZW",
  "key23": "2xiqmzGpy5joSvtzwB6dGdD5B91wQ5g6bHSHHoYxCfKfEyimH5zKargkXSUHJNaQ5MdBXiiCpotbmeETGR6sK6jE",
  "key24": "io2Y3J7TPBVMoyALJ7HKGRqDmkAV53h8ffx7C31u3d9ywM4cobmEM37j81hJCkpdLZMbFUd7egHTJHAq6cKLNas",
  "key25": "3ojVnAb5an4fxNfbLp26TULr1QDWTBuorerNV9qbW8U2SUD3nQC7oQJQWrMb5eZB8yhPUgXuLrRNrHnWLPfCndUo",
  "key26": "3HaZshsCk9vYUgjzLGzk2ityAPoqAs72hE18ifpbRkgi9PRqJ2kKP7UEoRpWNXWo27Wss5ii5dgdMNEtnkhqT6QQ",
  "key27": "5w9JGcmXLuCduJXxAmTHCtcoF25oezGH5mcYr9ftM7x6YD5XqvKizXXwAHZMMKFaYpWXoC1FXdCVkKG2oiHRE9uG",
  "key28": "42kD646tFPyrVuJH92G5A6rDx3xrU5SKgG8yMW1Lk3c3DssusznMNa3twscgQf6erXrq3227KAqY8rBArcJYP4NT",
  "key29": "2WeM68DkxDWMcgxSXFZ1EURctVh8ra5g1TDM8GA7RSddv3R8M23ZtEan5nD91ps5JudVR5oX1EdUFCC5fzveUSZ7",
  "key30": "856tUfEMiXc8vaHtEebCBQUzf4s22ttG7WwfaBiHQH2QdmQj7X1SDruxjGpi9As2haRy7sGpM7i1hWYuaD4j514",
  "key31": "u9MrbAsJSoLap4k1W7EXuCeYeUj21uSZuez9qUyHakD5kQqPEnthP3ZdoTE5yhmaTmYoJwkFZLemdXXk1ysFcte",
  "key32": "2u5H8BCeV8Did6118meeogJ6B1xeFjewWnnkR43z21aEXWVXWUBbQWQZLRGj7BAiTAbUi2r6DxewYr1zZVLAMNaD",
  "key33": "55eTg1QA7zZo8T1k7fTGZHBQe3ViN42dxQmun67DyL7rbrygAtohAX22vaLstYTeFtXcJ88BEfLyQgEeL18W3cFV",
  "key34": "44qsCNMrSWRLnastfL3cmnxJ2QFZb4Q9yTKk9YPSzhZdE9veRsyaM3P1pSUUHdPA36S3YLLQviRZYKyzXJrqCK7e",
  "key35": "4qrf8LxPtDFDWVSRMqH2uu6NXtfLqSf6xAZmYSNvkRirXgJ2ETh2eidTmN3qAwWMFuDt7MfWqGEfuDRKY2sNRkrU",
  "key36": "4ViV7Ryw2PJXpNZH9J5LW1pmfQZc3cK3X9jSqRMkJbmtTCbXhodiib4zgr6rSvFG4gxNSHdkgE8NaUc2biwRZJCa",
  "key37": "31jaeu1yACNE3pkHUi3EGYLyncfbvdFgu8CYZNYq9SaAiHswDvnVYnuoeNf7sekEN4SsXS3gsFdEyLiJ7nGBaMKj",
  "key38": "48W5bfRmp7A9mDn98qQMic8kaZdaxsGuNUJq2XdBcLwPdJpKpkyMWhyKDUb5NFWhzioKstmAAZSmdkg9Y74R1r9f",
  "key39": "563AAGvJXD4Dcx6u29gczEkBSTmr9wxaePDyzQgdDXyz2czX6Ga4bM5oss7Qys6EfPr2VdrS1MUeS1ijx4CXxtn5",
  "key40": "3kALkn3YYSjdPjJfNLdGeN9vGd1G2Eyu5r2HB3eb5sZ1qoqaQeXm7UTEmz6ZEWHeCZsXkM5ap7SqMCbkUTbxySLa",
  "key41": "2jc9BncDyLJ4BttNoDXNuV7Bw8uUvP1Yza51ydofNKGFG742S76wxKRQjjwcmW84dcRYHCxgJx2MdkUnwZxpyrFr",
  "key42": "51NhHCw8jXdZuuD73kmxFEos3qGqknpfUAwTDstYtFSvSKap8tP7kHTnDNPBhcCBkuFUNy8Gz46jNpEVGNAweCcf",
  "key43": "47GLpq6snZkJAB3bCkzpfWY6CM7BYVu8gpo26ZGRg6YxSyUCC8P1EuwmuVDyTE8CLfNjP5YPbjzdito5uEMZsghF",
  "key44": "2cyDNHepjJDhvo2VYVzfn5NhZEosSdUWNHMHf3NKirjbZLPcsHD1Y9ajBiUV1SbJFbxt2cXqSC872MMKKPok8uPX",
  "key45": "3a8DogGEFW7rP8WqeMTT1aitzFJGndnEcjmXLVMZZT1hqyust1EyE5H8WKefYpfpZCHsTDfhnPB54vW32jmpFTjV",
  "key46": "4JGKSFRuxDUHjqsh1HEdgZQHr2LUKHy3u9CeiHBnb26QqPJn6ry6BusFWdnAmtAMrHAuE5WRdYb6uFUsw2t6kLhg"
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
