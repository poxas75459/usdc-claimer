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
    "2pC1K9So66mgk3eF4L7FzsGz96XM1g4FBUht6e7jsNzJAWiBZVfzkgiQYPzqnM72auk6xYEpdSCLtmntwPj2Pnzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bJkehsFWv95hhUzu58dpqVdGpo5QXffmjwUw9q4NLvdgzHELPgsP6R1vzQqGG2YxsmQbrogET47KWPwLwQYUjtJ",
  "key1": "4WCyUo1hGeHZsarubFBoZuguyWPa11uZCDFAeX2GANNJzFGekYktPmn66n4YCBDSc4ksaEkrtYo3WDd5H6sivcYy",
  "key2": "2hwGXCgb2cPykCSRJowGCn9W7fSQ4zEAeJG72M5FPqfmYmhvbFfPNG7DvRpzHz6fKytay2k71zbR3q1dcWXbEgjo",
  "key3": "ZHh5AWAF648X7wCbAE8uYnMPaC6zH1cKqo4xvmrnzoUXB2b9gZk4yeRvWYb3CeC43yAwVPVxtoxAmyJnoWVAmsn",
  "key4": "3myzUcLkrmFpcDDPCrapLDEgnHz7H6pwH9HbLgkj2ow79imU8BZB8y8QXvXXsa9aSLguwYyP1b898skkcRCnyg5u",
  "key5": "BsdgeZcEfA6b3ews428xeCvAa7Q8GSUS19ENVfU26kYiLJCQfa6Czdgf835pXuXSa49u8PtQ4b2BiXJ7rPudCw7",
  "key6": "3ndPF9WebseLKH1dE2zKTv4pjye6waLfWggDif3hD13g5Q2sNQ6YoBVMamgL1VqazP6poY8nib9jLPRhzPsj4jaV",
  "key7": "3jc8SrWkvAZnR6Tando81UyTEX8GRn3W6jaijRDhndcpXVM3gADzyYnoeUvijtks4iynajYXUQ6tqpHnTF77K1iH",
  "key8": "3dzWyXqQTzyeJ2YiU647u2HkEpJLvPPy2aBgfaA1uvQPg8S5utoUEKmrvxBjXB6oUT74jQxb3YsscD6DUUeGiZdk",
  "key9": "3HxUVJv4ngS9zFTJunKQ4vBhYpt5hWD9VicNriFK5jD3W5iEYngmNCJ5bq5P8WcMhfo82phJmB1aMMUJ93ESXfvC",
  "key10": "FtSKkV3rWWTUHdESYyL8eGi5PYTKUj2TvADQpLLsvxPVxaxazDy4cUJ4RcMZAw5DvqCg4wcT6dP8NsHhpxJGhyH",
  "key11": "26L3HSbNPzjHxGgTSTLzbab7JH8TfqE94HEdhnZMdcGsu4CVTy7qmHJspnniEKwxFjdcn6BQc5PSeHQbB3XPZVuV",
  "key12": "HMeU9PGHCeFpDxFJ6cywhe23gaitZgQaYzSNrzFzSsZJsSY1Ro4RsYiJqNmvRPZyNHnRfJszufb5TDQPAVp3Lpj",
  "key13": "8FnK2aDDhbmCaEdmDRTFHj4z6yYEZXK4prhorS7x79sWSfoyEpPYkhUpMHY5cD5U7ih28xhPg2b6Z6BrNngdNNb",
  "key14": "4K1NkbTMDe9CFW5cAbN8pTTXrtCCu6v9hMVkMgJKSzBiWNDsipXdd3rPcKT7jyB6z2VM5VbMest9YDD44CrGyhBD",
  "key15": "5N1GadjdAgrq2eNqr8gHqUECqRoB743ruko52TUL23uPXgQLFihLLjNmPLRNz4srzASys5mbpMJJvDGS3GkwQ1s4",
  "key16": "38yTeCXq6CAfHkxDBCtxhMS4XLGFR8CNRdncJyraSvS9hbqLDPB125X8nanoH522HkEFxDapG4D1SaCsW7SWmbAm",
  "key17": "252rL4SBr5bHVBTPeKS7vT5Pf93uu42vLRvwnw9CgPuhin5tLZxcHokgAGQYrokRBh1WgR4fwo1REXvVJdnxv92T",
  "key18": "3BZ7TF9KBZECgU5wJC2HFsCXDnJSmn8uujrs7kxGLshRYFdz1f5qy2mWK6CfXv9Vwt7Z6gbrJXCahePvDHTYLmCz",
  "key19": "3q11S7gGAk4mQigrjVNhz3y9Bi8pJSfCcCegPLMzZ6Te5xtqR2AAktQmspbzTS2GH1niSTtrnzbbBFvaYECawNix",
  "key20": "35UXqD2BzfLp19Rms3UWWygPMgXRsp3DfQaoLKqoTy9uRbvUTN5NYBdQ5WQbAC1PDnipnoRKxbkR3LZ4oEjxJKLR",
  "key21": "46q7NH5m4sAjaQjo8TbnaoKVwUuF5NZJY19L33UHCNx718fqpGmiY6h38aUgaEVSwSFUiMJyd6uN18FvyejvH1wt",
  "key22": "49UoDdoNr3VNwG4LDBdV38PRf4nBc596Tjm74mCXQWXAHhQPyw9uGFQgQWsXMkfdBw6FtRh1E57qvZY8bWyMxXY9",
  "key23": "JWfyASMjwQj5c8bD8ZgnEvEW1kFuwWPLWuw4JYNoFH3ZJ95W9FeryA4Y45yC69iZEcpt5TDcfBKfGsYQ4jGHgRP",
  "key24": "3jotuqhoVPKSZgmBMBn2fWrnsR9DpFEPHJD1Ufr2ZEWErWDs23Kh8Tc11gTzfcmiyAt9GKQfSq9SiL3uAomqQwug",
  "key25": "3ek23Ana46JHXJDF1AtfJao51hEz6pU7hDAtA1JE8hGL6mnvyFNTQtsPreAuTYtk9t48MioTHajogt5s7FDucaob",
  "key26": "2pr5wS6eNjNU8fVRSBLsoVirJ3rMU3vnfF1C3qtgVaNwQU4P3GQPG7WmA7LiAZvDP3C5yyMBTYBUBSeRXMr7wQDM",
  "key27": "3FT5Mm8M99jCLCikbsozjWqrcgrRSrsEhczBs43sxUbG2GX3kGvZy1CvGx65G1ayVnL84Mmqm4f7mGF6ncSPK9bh",
  "key28": "25sCPB6H9nUm564WVDS7EHWKyK1XgVLjfTQE5MSFAraTQQ63tCpstXvCzi3dd7inUVrUjqVXHxQkixgPJz439FwZ",
  "key29": "3A4kggFUosVzthTxrhRSo3G8kZWxrzwn54Nzs6n3ywTfzY9sBNGccu76rKzyArcUp6H1pLEGReEPce6pzAv7xQic",
  "key30": "5GDd3Gb1DHzKm9Uuk53iN582yRs4kbR4BwtQopf7FFmR25NfdS14gHwqSDG5Q5oz7AnDmC4y2LJHthfA6mSGGMot",
  "key31": "64CdYAjWytYy2JWSaiBzZP9JGYibzCS8cPKRstcn4TrcQ3PYtqgFXzGpA7VLutv318WuLsNUjw1MXArMniuHBDRT",
  "key32": "2R4AXV4c2F3fiopi8cHsK3YcMwMHPezwTeHFNQSfjVfiwdB4jyvM4BPLswZTGrYMsTnVhhpeW1pqUhS7CZRmQzN4",
  "key33": "3p6yLGQT69gW5gi7DBj3aX9ftLR2EhyXyHBhrNyLfas9TB5sXwYRkWzXEyB6ykAmsZxMBGBPSESdDUGsoA7Bz5b4",
  "key34": "2MTejJaQxf5yoRoRPLm88zZKCar94d5fhy2eGXSUfnRwgd1Y3obfKDj2ByMkiLUNwbkvRAjsM9d8LqX3G82TgwC3",
  "key35": "5LhePagpcKN2aGNXRhxDSejmJAZRjad1cHoqAe5ecoBuyjiL1W4kPLCvf6YCNq2KVMwcDmr47YMvLRGqEqLgh8kq",
  "key36": "2p1ebQP8SebGff98tFuVXUre6QXf8bzoh4ScP2XF1bRVGeUs2xoZ9QifTByoAPjnD64i21N6six9VACBZJ5oUNVw",
  "key37": "2yy3WamVUjSvbwzmKB35Kkrg1ihTejNurtjnSP1YywdXe3UbhZxdvCLeu8tKFeRjkxqHcvZpvm3cHg71atFQZZEv",
  "key38": "8bWjUZ2XrTq7F1j46u69xT1mffEkbWtfKWGJiBG57c2eNkiiN2g66GK4zKPC2VZ2KVJr7frtMD1cTr4KzJ343EH",
  "key39": "22HonpHKrRSH7YQPTwGx1odxHpu4KfjZoidjM3L3MR1qooxXyh9b9iMbdKqAhK55pYVaWsEALUgENECm1VG4QVFu",
  "key40": "42ysS6j9FTk8XyTYUAPhWGPpiuXnRYKTAjmTvouEVcD3Y6K68Yw3b4K62ZJr1TW4axvGHteH4VGJa1A3j16VSCPJ"
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
