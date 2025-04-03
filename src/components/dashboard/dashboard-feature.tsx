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
    "gESDpfjJ85LNKU9iGPu4F9QBogBziiT3vGUGfSEYaap15wsn2UAkDdt3cZ6xhTzc1QG2xG7Tyf2GPYQf8asrFiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f7agfK8jxjUV97Lisx3ML1TtBTpHSWaz2whtUQwJjUa8pkYCndKHnoesoj4Hhw6kMVuZFdUEupA2FHodTAajDdV",
  "key1": "4Pk2hmpFDzPbPsDB3CAxo5nY6ayJCRKLap9fwTX6oXmqqxRztse8BNnCANuGkf8QpSENTkNSVjASUA8qcb5QgS4W",
  "key2": "5oW2HQgYvrQhK9wHqyAdzmcCqrn73MKkQ6kZ2XQDQVRpJ4HmLEXDHm5hTyk9t7PHRPccxj3t7f6SNV82wHRGfsEW",
  "key3": "5dJr2koLG5Dnryu392NjxJcswLmvLWCi9UcLyNePsWQegN331dLGJE8EYiyQn8C8CYcWvVLGsWSU1FbA4od9mVj2",
  "key4": "3skJXSG7SGAFPoaPiBLU9CvJKoUKgrUfgpsxzmm8bF2qvU9VtnXSMwd6Qkj5eKFQHcWpSJxxZqhB6GEXkdYCfnhW",
  "key5": "5Fi9L3Gmm6Uve3VQHFiMehadbuJ3fmJhRKTbPxhmdZPuZbyPMYdBYApSKEiv5jfofCr2PbwA3uviNAuroDgnYvgG",
  "key6": "4NMXyD56c233uLDn7dJDiYf8xS2gUaAXgPrWLkxY9KqMQaCU4UK2utGZpH8etNHRRZ1YFJswjyA1xWBSQxBvpB4h",
  "key7": "4q4t59HHGpAaB4TqZahHsb6vsobasva9upvdFmcsFFjpggLcVGUQ2aWinBSKqvTJh64LDdAP117oQFZgqVuLdtwj",
  "key8": "549VjueSHkhpjKaTzbjTbwn5iPAWomheUNb4ycza3ANZj9LJMvzPJm68bfaPZHp82CV8MtnBNC9Nxw7y9nMPjSm9",
  "key9": "5C8ho77un139Q5mbemR3njtiCK8k1Y8NtfiFxVFWG1caLQxX8ZmPLdK4L1QtEd4uF9DeiHuHWCNXNMrZwYn4KeNo",
  "key10": "4D5YYWPfBgmrgLJsUvMLUKWa7LGxtz47kKgq68eTeDGrcx9VsWZu4EHHZ677hL6dY7EACSBw7NapsPLmwuwgduvQ",
  "key11": "3NeQJ3QPLPpF2XbNkPUHZ222AGL1TZ5mJ4ohitBZFci4tWWRFEFwZSmYYi69EvmDKksU94T4hFSzSamFDsBS6aw4",
  "key12": "45q3dAcJjenP71MB1q3GvSL8NMGEhHY9k76XRso4UuZc7aGnW4KV4bK8eR5S1Zr7JuhaTMnRMS7poGutuxv5LLer",
  "key13": "qrKbnFhXv2HoivbH8ea47jU6TKjRKS5HWEh1sGWAcaZkkcXEFQPLJrN6rdYn3KdvQCbTEJQU7Nqrysjgb53R1Ay",
  "key14": "34MNJGPZQBbThvXQcxVsLLnyb1KCbbjtyebi28W5LE2NzpxAU28a9oknewpr1Ubfx4Bi174fHS3jLEsQygcdTV7m",
  "key15": "5pw27Lo6zemec31etd9buQMxSmus6PNKSCyiYihcuE2ohkVX4CBoQ2qqye6j19VYDG9pg9jWrSSuC18Eg8Bpy9NB",
  "key16": "3nhzEcQVdueoVsr9w4smhzPq9yS5oV1F3wD8pPxoHwvNdtP85mKQTy1saBFMSCNLMoeEwov2B6rBNhKNomKAYh7d",
  "key17": "6y5gNeTEEwLpKETC3eB4GeCwoNYEAVVegFevcLJ8MopoBkioLNhJ1ZN3uqpB6mbnt9WSDn3sXXtj6iDtXLqveDX",
  "key18": "4NLNAN7P6QLjjTBdNMm7mzswNhRWzVBBupFTMBTQM87DTr1Ywxt6bg4sPgxRpabygbCzCwoTqa1h4GgzwshZYKs2",
  "key19": "2BBSWhyTMQoWNBqvQ4nHoqBPXCpNkgCbUCiS9girjkSXMiVNaiVPbG8bGmomCsCsJSvW1iKhmxGqzxRkeEmBsof9",
  "key20": "4KQHdW1khDuA9wBcd6ekjPcrikgjoTNyRxTHFma9JRVSEfWSW63WqtgaWhdoRGspVzBVGif2wEoF8UdShAjGhzjC",
  "key21": "2RqSs375EACC5bQewWbnYgLqpvEQcTuKZuGbHK2qVR6YeKmCVio9N3Nmj4sVe5moDsv8Yv193YnSc7674iiqp3ZU",
  "key22": "42rdQAH3QAvAA3yx4LzQ3zDJ4oD4imF8qWujUwegL8cSGqTaJ7qKy13AaK6bmPR1VfKjGKNsCSNs72XX6748akp4",
  "key23": "2adG2uwUJuNJKUqPD9W3bfZFw8GQVs6rRKFTRJcdARH1KTWtedkBDE8QAhtFwqhSK9RV1nvtdrm16Pz5oSejR8Kt",
  "key24": "42so85iyrTMexhbGAjWsRQxgazdHuSmGeuZNSNtfAg2f5xcCXM1PGTvPj2J4v5ZuB1NpXn3bNGhqBWo8p1zVztmw",
  "key25": "2QcvpLbyCsen85x28NX3fa5jzcjYNCgo6XjWyPLt2nBsaV8Fs3mZjSQqzNyHzKsYV3Jbwaxg521Ku9JsDfvTS4Uc",
  "key26": "2dZwftB93UFjcDWjGo4A8cWEsmiaxc3VGCU3JTqvcMt7oFFMr5MGA6i9xGmFoPhj6XweEHz6JQGjeXTPPfSjukZ6",
  "key27": "2vCgW3dP6d4ATEF57PCxrSWytTQStJ4ka1us4CBFqhhEDJ3QFW6nQmgdDWTyU2ecfrHQDKNTwhJ73Gmcz2s3z8H8",
  "key28": "2MpAJw5ViYbUHon2b7DJYhZZjEMum4L7GxM7wGtA9uX82iXwj5GY7sqJpxQL5hGBBwpYawMELTW73mzSh341wELu",
  "key29": "2EcFA8sDwABEimY7dLJnN5vcpGASebwLg2p9innXgZqWU8j9kX1djfxmY79WNqnhbUV6BTuLunqF4rK6eFWLrsrh",
  "key30": "3aqqAazu98MuFTCP91LdrGV79UeuC4D2SBQgfFnnEKQjca95fG5DyeaRGukcFeWZYEs88Mk9nU5L89hzmmVfoA4c",
  "key31": "5dizJ4983jBQyuhzE1EyaD2VrXw3JCaP8kBG7dMgUPd8fVjdSY5L1M6eAAQWPDPRjNkswah33MJZC6b8meo1VTqo",
  "key32": "2fLWpijtPUcxQ2AJmAqRGAPAMCuzkoVU8vwrkT1jzUvPSb7wzAHbWkhXAv7GjutNfNKhEi9hMN6kASnGHjkHXqvA",
  "key33": "2J6daTqgw9G7BYSdwGN7H8dWaHd5DThgZzCPLYxtWSa7xBoJ9XJj5LEC6ysU7SSPfAUA9QfTUJ44EdWpqWMQqHBt"
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
