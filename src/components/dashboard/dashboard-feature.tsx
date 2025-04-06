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
    "2D6viHFdifgXwLBDedD9rU7gZd9uU21gg6nMSzLsaTSHMiDqoGKioqAm2PYZFoHnGRvh1vFZ2uw7yrwvM3qbo6Qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46hDuBebHQnJVGU1mAndiHNppwjwgd2tvdXYgGJx4QbCLg4dTgrhRuBzsXTW71MAZQ9UHh6uwtJ4W9eHcCy2RRgQ",
  "key1": "3kyMo46xmfNLHXDHckany3w3tNcn2XRopWTYLZ5DTeCpsCmiAmnfe531JocS9vVXipn5xwaX1NfQQ2EDnvXDoLQA",
  "key2": "45pJEFAcmyFz5WjaM5Qpso4AKq2npo9tAuRPmpYJri5VEi6M6NyCJuVuof8FBQQCmfngeTMMKtPSEY1j52eYVVHP",
  "key3": "5QpSt3JtMuustci62HkwpcAWoNtPNK8dprKMHn5fvxgS9rH4ccev4gma6jm6AnREpRwJKJo2qv1HB4DYZTJmVW2d",
  "key4": "2fL6MUuB8UXc7Ws1cPXmsxBSkBchwUhoGCZtDP3JBvrcNZyUfbF2mtbMgZANVCVVnRkZa8FCkfbC11LfMfKLSWCq",
  "key5": "4DKSu7hZahwmLMcYZTQwocDZkUc1ZRHNq5h64XSPLXgndULRq5HJenF7vtWG4nCx1nhdHLdtRLEFCpv59bM3JRxC",
  "key6": "2WpRJdpVbXzwFmpRb4ekGBFtoLgeCDurxQkzk2DMQF6sZNoMiwrnRoZWYFmfu5zQ4Vx8fwiDdS9425pcHojWtECx",
  "key7": "dBY6pF1REaym4DDgQvcc4htBLEDt48dyhioymgsNBATEeXLmPMDLbFrbSEJkCMQAJKdb8A1H3WaxaqKcUzfKnno",
  "key8": "4n8ib1uSJ8kwFUDsGgXP9XSocBdq5n7m9mfzSivzeNmh3AEtYnjii6pkBS4EXgUukGE4VR66TaftGNFvJvocthvC",
  "key9": "5A54FFEfUMdKo13jZFG7j9cZGyK3byLpyEqjxUHs1Nqef4iCqdjR8B73tn9TLLjtLQtdn6kUquTD1MGwkq4NJbXJ",
  "key10": "5vpW3KwqM9iLoT578GJVxAem8jEAp3Hx8Y2Ph5CBFiiy1QRDqCjdrixmZsu2NU5KVcR2qjat3mZj4XfU8weyiNiU",
  "key11": "2FBWxggrd8P11sLpNr8xQM5QGoxyWUVi3WYXdvUQMLfdxwYM6k1zrvz8JFEtSMtST24a2wPh6UqCSHMHamX3cJjH",
  "key12": "543f4H48JHivdZrGJbmQWrYtbE4wbAg4mXiRxCm22xP8zQgWE3Zkxemy4N2zpm9ksmQWaJzLqVAiKkTa6DuH291P",
  "key13": "5rHTY8dJU5LgiMBLMuy1M359KL8r1eJMey6FbQxe72U6GLHUBX4zs55RrqTYg1TJCoQkvwhZ3WuqYgPrdj3VFyj",
  "key14": "dYVN4eMPqDtTwCUdp2ocRmC87WWAab3j3MMTLAt6ddu92SVkPLnsbEXpQEJcDkHxFZx3eT7qry7dcCXPrPiZVps",
  "key15": "SGuinCCpLASZc1HWEDM1Ydy3FfbtKdSv3g9sznZQgteGcTAMz537r9JVdjMsN1rjBKp7HaaU6uQ6TCMkcPk8p7C",
  "key16": "3Q1H1wS4Dz1e66B2EHACpix1LtGvfyZKsZTtfaJRiofn9RbK88v4LEFWtQUgySDLDt9x4iunJSFBKBVKauMQ35Qu",
  "key17": "1262MRdV98TYVKkNQzLwV6djdJdvfZbg8mL2Kbojy41PJR8FUvJAWFGoCbf3gaq9Yi4RQnZYr9Bda6bSxQ2kPQwz",
  "key18": "2EFxEKDXLCKEvUkrv4HhJuqm5AZwtoDLDJsa9rrTJu9Bea9gxTHjHQGnFFicJZJHytsE7s2XSRKuqYaSHASxRdkE",
  "key19": "5iAEYX9uq5JRde46MaLEHSqheJoMPkVgrd6NorBrSTXkiCHW64vPYaXiDmsshdxocJitTmtASK7XPkrhnMBNCct9",
  "key20": "3w6G6c9eRKnRuWyHhzdUjPMSXrafATuZ6BEzMM5fxR9FdoE3fDmFngxTa2AH8bFmrek2hQQnempaDeii5nRWwu5x",
  "key21": "49JUB39ooSZyZV6ExmZdN7PWHD8GtKq7bff5vTfrfzqEZBZgxxg5jdtgM585DZPobHrQuBtXhXPVnsASvtLzuvmJ",
  "key22": "4tYfh4ERB9X6d339Kn7HTKZtdrHruAAoXN6FeAjziEKzcgVi59MopMBUHaYHFmieDF2K9VwyY46RhnLwysKo6E29",
  "key23": "2yFKWGRNyZayQtwT7foirFWcjxxNZnx399R9tarSscE7HgNfDozxnw1yRrkVDGDzRURuanbk2mn81uFcYpr9sF3W",
  "key24": "ZNVuCNTtFAhNwWXa2L4LRns4vPiVoXPW1tBU9Kwgy1CRQgVEcioQBdnps1xL15LJGZDJqefJdatFspvfJBdZhe1",
  "key25": "2z4PwhCHicAzAdBGfFeqb2KBrFS4THxRimPrDnD2EgsCF26zEjZct6bwSVTwtCkcCY4t987peSogGfFTr2adzPEz",
  "key26": "2EkY8dRnJcXtnPow1rBqNz3TDQqN42H6osFMUeiZ1hihR9BikmD5uZXrEAPNEuTU3A8G3if1eApFijDB59z9N8B5",
  "key27": "nfCjMHi2oRs16zTuwnC9pyCq9dy2N3MKByXhMmJrcrz7bzijALWh2HBdwqvTkUdLHTM3GhH4kcmyUWwNefaFp1u",
  "key28": "5BrJjmcLQzkTgRB3vB83sdv9DffoJF2C25YUq4s5KNRRZdVmUE6cgkmCbrMGczCMrmwJ3AfYTuyLRoYtRBMog7NL",
  "key29": "4b6WFhZzbHefH7Z8TELkPKAS25VN7xXmzy8Wgn1eAA1JmYoNqR99ZQfP4xFXC7GpVaohJkhfcTW1d5BtbXrpz2s9",
  "key30": "25nXgFUWzXdpeTZAYnDaMkrSi9rV2RW1Di5p8mAzJ9Gfvn2pz53TR12tq4BQTcMsUYdissosfTHMdMok8zTNxQzj",
  "key31": "4hn71PT8g5Qu9FoyWywJM2kzP8X1s31A4HigdoC9VsrVk6suZQCS8UmjuB5C3UVQCY7CLivv4DBHqWfbsMjQ6urg",
  "key32": "5U99hbUru39xrfnZmQYzLw2NCatSwmiNDaFePxA19hqvtagAYH4LXeta52FRxwSmAi7uBQ4ZX6DfRJ4Q8y49HzXZ",
  "key33": "2xKnQfrKEJcKDmee44cNVH1WngYkQ2Hvx4h9WSLGiSqYMzMCCnU9bWasGYLg1mUfWZUu9ZvLAJDqBrQZdPHsJGgb",
  "key34": "3GEMPxBVBzmbixgAYZ2wgaJJwXMSLQVCTuYCu3u42guJQ16sMc8NvNAirtWujFvmR2Ae98Q46rfhb1zhoYqm2eAz",
  "key35": "3wnembTfYjfaADCyah5GjJM9kXivp5t2AUD6TuWyA15prLFrdRghZGzQ6fV16zYGHm7v1B9oDFWPv1pa1YLxxzss",
  "key36": "4cH16zBm1Buw2WDALS2vBokhR4Hfa4pE6R2TsufHpkxVHn52GJK75UUWRWDAXkjntguVGM4pebL3vrHAKYhha5Wh",
  "key37": "53dEEfmBGipbGwzafvydwGLPFcnGf49KKJCg7182YDQ4NNfk8vzRiFi6pC8RkuEaWNuBG18nm1uqv7w4V651BE2",
  "key38": "3Soy1HoZzQmw2dZkja3jh7LU2d72TBQwix5yda4qtnZi9yXEBbpSTQj7W6GWpTdK1Qm1eZac1Q5AkxeZ3vv7ZQEk",
  "key39": "3YRbey7HsevHGipgtAXgUHHFkt48RY252wbn9AxhNZSiHqZvFN4LoB2P4qcUDMoqZLVPoHgbeUbUbG3XjtSr7WZC",
  "key40": "qRTTqKBYbr75PFYXaPGzUFXLpdHv2u6myAAuKseagv47rxRgMKFRVLW5nbxFbaL1VS4EFXP52yn7kc7Ets2ZRym",
  "key41": "UsrE1JMtQP3QPDiWPFsThvRsSCYE8oQdejvNf3xWw97hZSij7ieTzxyAUQJJwJZjcAa8iexenFN8wyeFAymzExj",
  "key42": "52mdHBp2taLp8L4VQW4e8ukDAR8rJPKwTFbgEqkvgzPCNJpiboSRRJG2rBxMFt5kKhqasoqHk91LaAi8k8KTKeN2",
  "key43": "4gGW9fqT8cau8j8NycztTSVnRFvovh7UhA5zpPCboKDQqbmrtKmUURtrn5PSxs4CUmAYqvPB6kQWbRS2vQep7pt1"
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
