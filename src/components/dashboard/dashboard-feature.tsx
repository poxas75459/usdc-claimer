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
    "4mysBFuih3m1E6FNxxHivBX3LBGjxyW1uwYn8TSmsHWJeA9DjzKdd9HHKhnMfpVWBndnau664YzndJw8zCeHCWh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PFoQ3mEJGmZ3QWywUvFxGJXDhZNRntwRbVCGJgC7EYM3zn32q9LaTA3bWSbW3G6PY3LbFvhMSjtrzPKNAgAHq1B",
  "key1": "5v5vVewwGDhvmxFWxXR64VQ3Hx3XkxHPCuu794LTvtGdcDiFuWUHAbdGu4FkmH9na1biH1fmJsHbKR6TN6ae6Pm",
  "key2": "29znBiBhR8WdJuxRuDJKoNTbUoBddLx31MMssBTmgS3m5buppKDAVd2rPe2NvqEuRUTYED3NNLdkcvddUvcokET5",
  "key3": "3pk5NhwXDkWVC7yeQdjogdUehgLoCdmrh65NLmMPFz3pE3Tud9chnDLLCxpwssBGDoZd2vBMNAYfdEqdDM8eBnJ6",
  "key4": "65rfwuxSDvDrq67uBqpQimYUcH8h2j34U6cNSRKZq1Gdjdb3hBT9eaBrX5nWp1prUtkLgqD85QmQ3ysXmRtfTrXh",
  "key5": "4czvZxMhQjS3N2RyqD4fTS2bru6TwRPCgaeBPRZgBCd7jnPAPfuwk5xBK7VXuF46ZLXUj61QYzmYgsUbeUPzAwdg",
  "key6": "4TLGDRUAfBBoof7TUJvREbWBEhLn2u7qYkbhCb8hLt6Bf3fqAouB7iv2ibSRFHWR1UZTupVZzB63f5vpWpj2DjMR",
  "key7": "ckwnTUsNu5ai8wTDiXxtTXmQ23waRnPBYH4dRt2ZQ7bDFvp6oNT6GkcSM9GcU14aZkuEm5k2V6JGZhoQBXN95hX",
  "key8": "2zFRze2p4ttBxT7Dx6snza65QZ9TLDP74iVrU1PKEFL7pA2T2CXw2XyQZfGvyEk9xk1SNYLfkbMw9GSwYfvsKhZ1",
  "key9": "3P7EeZbYZtdiPFBAtnCVGZju85gePNxN2ARphkWiKJeq3DTZtFmBBb7Caf3e5ENYAEmkCMZAYPVinpK1fwzztSdW",
  "key10": "4734TFETzTr1RBMgzhMvbvx5WjoEbCiQDgQZjtYAvEeF11Nt7GenJx9zSJ25cvnpczj7RPJ86NVe6uoJ1Yda9MMh",
  "key11": "5Ki8pq8Td9xKMoy31Sus8tm4mTfjqo5NudT6cGy4Nkw4aiERRJeVDFMYjEfVKSRFoftZfW2Et58ksojYL43MZdTj",
  "key12": "4vrE7TPmWPqiH3unjJo38V4TKRs3CL1L63ALGtAxNZmEMKE7wGtp1cuLF5n7tQKDLDMfhPFMdRk4EmZCPf1MecXb",
  "key13": "5o8fXKF7APmrVF7yg7L3Cuomo5idwLxUF4pQr38Qu2BcijgaCuG7oXBBLcL4UcfVMAqircLJd93ncEGDdnyK4HUU",
  "key14": "2UJwVqU9vUcZwG4RNkk8XZpFb4KrBiYGn9tv64QLwHQzGwtxCLL5Yn1kqeyvHaf7pz8XcTTLWyz8PBagEN6mRecC",
  "key15": "2vLHBRaBzN3Y5gY4pWf1eRRwLQJzUXkgxJ5sWtyQ5YbdVGBEiFebn8BgB449YT7L3xTG6kBJJrUXQmSMtsHk6MAj",
  "key16": "ZFFrbFy2Ao7vcPnSDa1rqVJgJctSquXHymCdGa4mF45ciBoT65f1rmrm71PKka3fSDdddcrtrDwCg9nW5WVov7j",
  "key17": "5u7m1YMDP4W75shVWJHDJvg9bqoXKaKvmqL4r2HCFQYerWpS4atE1RAjggY9LUSxZZZt84JDZiF8HkJF61EWnswo",
  "key18": "J8nUwyTgjMYcXxdoWBJAF2i8DtW1TMzjm2UnG2SsD2miFGvSWpmbQyy7ueG3AjfH71gaTjWRfhegCDM87ofTwNz",
  "key19": "3c7qhTDtDvNebVwgpbFxy33xDbmpn1Y3YGqhySBUMPkuYzbSiypXKRfPPfq2XKToSEkNWNQKgiaotQCuMYet4jE6",
  "key20": "2JmnHSNdHWPfL6Tb1j6wmXACZ1Eh6nx7CttobMdssNHwKcwiLaBCTBDqexQ7ufbuAAC9jtWPWMNHd2JJqsYzLhVv",
  "key21": "2a2pJYf8Nehdt4MLpWcGwxGa6uGUfeoGHqC6oEeTZNFRAJrf9kboKHRZsqdMHmLx6fbAWq8n673jsBm4QkHfCbvC",
  "key22": "j9tbH41bsLeLY4kUeohSCgjAqgP4FpGfQfDHR1bCmTYN4stC56ByCeKzsDfqi4wHHPpzRgmu2Abrb9Zev1HRQqr",
  "key23": "5hgpKjzcKnNNpRLskFGZXsB18G1dk8iRy76UF5emUYqjpZgLmjUez2jA3EF5teV2y65nsCjyTVAU4uskK9CTKSn3",
  "key24": "pjSYjjWxULo69CyRL3DUU9sseu57N5nQDxnFiAjNutcxo6BYLFd5HFnZjBSz1Jx2fCBr3x9CJfxRvL7potZ3Rwy",
  "key25": "SpKJrkS3PpuBAgNkr8FpSRwjtY4DGNzJZPFJ2h8xD6GQms6wm9gStWLwnNrR3yRJ1i2zdcavNrGej9ufrN4zirH",
  "key26": "2fykKZHBNevFz9b3dvyeb8Xo7kiXPu7foEHDEVxziWN1Hu9P8So3vazYd13yQzDh8mu1Ro7TwdcyYLEedpsZcnC4"
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
