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
    "3p7vtp7GD2zSTCrCYsHoSBmCLQC5SSiaqhna4m2Ygi38YbrboMdzGGRfPM4WH3JkxoRTc13yXCvPifz8EN57Bxsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b16wSYwcK6VYKF39wyWNKd8WFN5zjv93k5RipT9a19DbLotQQ3GyKwRFjbtdachdvzF4iGnXcCwUPbdobQy7F1u",
  "key1": "4JiAVK5nyZ2c8LadDbXxxLaXhGxqiErxdr8UFWvxVdhAeHcWF6zG3VK5E4A9f3oj4n2T3QpWoMsDSSG8psF2RuQY",
  "key2": "48yGoDnLQRSD9MDtpuS74LdgmTtdCXfqWkthGM1zURwHw5gijp62K5TGeFvNSp4mB5rRZLV2yUNeo8oxPH5ySdd1",
  "key3": "3ii1o93vvaYnoWv2jv3yfNhQNmwSps3315zC9wnXMZpvcygp5oU2vJ3hUgfQ4aVFf1hKfh1bRNtfE43S4XwoTs6x",
  "key4": "4r5boGV8D6EW7SzRKnpXQmmPa5jFQAvss3UcMofbCqvx9cxtJyefUVmrqVi6fiisXbUvM3zhR3Ag63qaEUzALRAY",
  "key5": "3gjK2v5c75wjbCsqQjjZgGrARp5KWMuBSktzdsCGgmkdNoc8MhkdRaRy4mkpMh9gh57MXDA4evTh1RBdDq59SBp7",
  "key6": "4Uz4cSbNU3815wrqUAJ9cNaPPfZhMzbbw3ho48VsESuzAQjJ3ms1eDDtWKW2SeSrUXLj4jVayW1aJ4rKTUor6ydy",
  "key7": "4ASgVKm3o3kYLJokW2rrW578uBbf6g4PptpxFavZxAVvgqyEYMJZvqmhSiMf2qSgk7mqHkC1ju2gvCXYeLySmzZT",
  "key8": "4LTjuVesb4p9XQjK6uM3Y8Bjo7B5CuzU21L4aPHQ2DTZxuHvpArgXs4PHq2YNNmGgHbB41FEZWDHFMXAXbHWXxw5",
  "key9": "4iVL8hvGZvzN2JE8tVJ4oyvmoWMWtzUvcQtTuAiVqpjnwQPrnur4PQn7n9PVnFa5muq2SvwQKpG3GnvCB211Mp5U",
  "key10": "2vxXBkXrEDB4448tpdgLopKvkgPcrzpigyhwr4ekGpZj4vxyFVwUf8UU9iRUPMhpFMg9eFYCorPgkcgKGg1P2sqs",
  "key11": "51nz62pCPoJBaDHD9izAjKytG2hxtry83d5bpJSZnGqr5Up8nwH4smncHsBF2a6RMRknkgZc5SU3JeFdnkvFbndf",
  "key12": "4fR26MBYyWhpTh88eqt914qFDxMYgzuYtB3QPUJudr6vR3pGNx8xsFqMPmJ7mHkyQjQ7Buhfw7YZvxbE83YhQPew",
  "key13": "4crW6KFacnSdXHvFecJqTAE5wVXsJvLg7p561CEVrmdQSZM2vg2TYKURE6r5RKXwjiqfZ2gd8NqSzMzwXGASCbKf",
  "key14": "2rAUr62bXDxXWBUFgsb97zD2P69kgU8qWJxFVkfB9k9shgHRqgGMLJqkcWhZAcbTxom8nAqfEUvD8Tk2d1kzdER1",
  "key15": "4PQef8BRkyRwER7XBb3vfoq2JvYzrHedW8wnrTSWU3TfmiEPsd2qnRF2cRxPL2t3KC4yeL6qbY6CRFt9tFPejDV8",
  "key16": "58pPcMfMUqqxrUmADmCcgxZSAhECJ1sgzzgZzzx9guNtXYNSrFDfAF99wwWwYmz5MR6LN5ju6ghktqymRQkCrWju",
  "key17": "4oMrDNzfpndDacgmK7uMnKcANSoZ9RVENo2WfGEnJZjVyeSAdcarGE7RFzCmeXhATSGZveQuZsNdxmm6opNWTVAm",
  "key18": "5W5xqmbyYwWe2iATgVdcW4nPVJUNsUALdojD37WPesfuKMxctRo8NbibySZQSn6CPHkULvuKNpi1xSseXYeP7rzm",
  "key19": "4C7uunNToXd4XAkDgMnmHh7N3fgPmRjZdAcQHPTYW6YuRvNperQ5cf4ghhuKGcdkZYojFD3nGvLkBWrSAbJwKcqZ",
  "key20": "41LgtATpvx9Y6F3jdFngB5opTowToqYqbwE5bYK6wLZqbYjNuG1Z9qMqNZV7TrKL9WfDcg1zs29JkAw3XFhRZ8yg",
  "key21": "64Ctywz1YYF5uYJ1X6nPdetUCghhLJVYq6zqCtn53dEcTrEiazkFhzMQacgsikBfMuyAhBngmacGqa7Z5LuPLnbp",
  "key22": "4sSL1aASDmXGMUzZjjFgKPSXo6KrXuaHfRnv8Ns2PHkcB6xmsFseK74szqYjeuTsbYMDqbGHMiD5ffNqtsSiWxPs",
  "key23": "5svd8yd17zEx22dCxtKo8uH2B4HVRPt9x5x8VkqdwVwuouG39xy8ixr7L59uDZe1oyDRQ5UUcGTkj1ETGZsSrb11",
  "key24": "5ZfZgcrStAC6R1AznoR1Yup5dC9TYodKGDWgQ4Y6oxS9XS7zzxMSmm8JRC43cGP84tbWgfKUE46krB6RpEY9xcfz",
  "key25": "4t2T86ZSqhKTWGprt9VgYHDpnB6D2sXZNDn5r2RS8KKsyPjcSPkrNqBD4DcawsAA1s9wnUWtptdFSPxWuQDykpqD",
  "key26": "3GKiFE6pvibkfcwevt9enSQ8KVV7hPxrMkrMuEn12goSDTdAj4ntzcM7PPhMi3X21ukjbgYrcnbEcM6YpqNgtoYv",
  "key27": "PKP9WUNDpJ1bZTHpffLmBspbtEujX5yrb74qo5tdV3SXgJKNecaTKqsqiPVebfZk745PDzWzj4Qsfj2J6MRynWR",
  "key28": "5cJt6XxmuHvnfzyQ5LU2JrYaxdFFv4TkZW12Xdq4tNZvKaq3P5W1Bv49Fq5mN5XsEoB2i1SG6UwTgZgshp5HzySf",
  "key29": "4HnoTRHnpWL3kg8CiJcvc5JHnBNrAurRjTVXKRS2JzTnfy4Zyxhb9d8gqjFqUhJvLuxbtg1sBo8mBmCebHqVckQX",
  "key30": "39ZjmTypA5p9UUFXgcpy4HRVQeRuJH6W2FQAGAYQWxmdEPkBZ1FRhLkynmPxDmGAWmeLtFqs2LEooYpuc7FaMBQz",
  "key31": "5P2K52adF3mX5g331KsefcX4aFK9p5jd8APb9iXV8UHPPa1pABpDFaxKbVZnf1H2QCBpqHbA56mVJG5cM2GZRsiR",
  "key32": "aVYYWTyanMTZDa7iexHzJjXSfwYyzNPg4cx2NSSrshWhUfmSuouMUk25pY9Wkg6XHwnHpgdNeB4f3T7utQyrXqT"
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
