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
    "5b2zb5AKPaPyRLtCmgDAiJB3Q4bXSx7eEXqvXGHH16HVYjSfV1CmWvNrA7AeFndjnALwkusNwdsyVe3UhHVybeDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kyCExD9Yx3sHPk4rtFj6AcscomwyTLxx8YCRf147UYRKH2HKBHXS8QNAebD287xzgSYhrLHFEU24RKr9MAQgBgE",
  "key1": "4r173oaEzqPAww8sWK2WyXaXnLRfxkhGva73dyeZKxQyjFCQ16TV9P4BvCcbFMG5Ny8Fh8W27Hrjz8bfqXRQm3AG",
  "key2": "2wnAirgGLfat8sy7AFpzdQHqbxnuBBjQuijRT3ywBiWkqU5SyftGiYesqTSK5pXyMTbewcp2tCXSh5TbRpqN3hTY",
  "key3": "5tD4SFemQ8pcL67c8kwGm4NbXN5NKDtqwAcD4jcsYfBQEd8pSjQxRL6E8cv8kkdAkhSWaPZkHThbX1D5BWMBzouU",
  "key4": "3AjYZaeMhqLku1BaWR43ub1hjX4UXdgTYpehrFt8J9EnSGRhqnrEsB5Bd8ZCTm2gT6Nu81Fcyk92V3a3nekgpRbz",
  "key5": "5ndNitkXhxWNnab6dwA6sfE8EZL1hmeWa2oKVGE5hoCJzEKC27AHRJUe6jFkPHQCA46jdNrbbEeig6MViLbzvBeV",
  "key6": "kAi2hzMP7RnqZbpCFEzLTCdvdswzPDZkNqYYcSTxxQSKiupDu24irQTm1Le9umVeaWjiqWaW9GoK39TxnWgDfS8",
  "key7": "2gNcdp99tUYfShqBmRJf76Xbhhhd1BVzrz1cBqezHh7JBwVVVWVGL8sX6qgezrzih6RXemHDu6UXEfwfxRfsQZHH",
  "key8": "CQDknnNNDHJNJrxEhTbJk75XR5ciK8JNTf8RAjGyjMvsJKbWYw2qLb6Xe6DKPrtnn6yZxfLUJMZGLUyjnzpJQMg",
  "key9": "4wLLzx6tY7i4c4j8eJ8Ln5LFSFGYCPem8p2gGhN1Hb1tdaBFwiW5Ms86EcrVesNofnt6sXuxGFAoFpvSsdyayiqZ",
  "key10": "5TYiCa9WVqq1GsipyQxMkV8ckdhBr41CyR6iXjgi46fDCSNBitLmGY1kSufvVhSftsVA7J94orCKWh3gm9DfeQAW",
  "key11": "4CFYbrgEo6ShLaMnnig8NWeW26a4u5FRdiV5M5V2bWreBVnHYsbtfnRzY17Zvv2DifKxNcHAxtBw57qML3fYNPP6",
  "key12": "4y1bxX72LG7sjbDoiJXRJuzzxSAckNVHxKGdHVtD1KdmHueq4vcpiVZ4PtPf3XyMf5yGpHZeAba5Jsvn2fYSVmfs",
  "key13": "4ihi99Li2xN6o4FP47BdJQzfvp9m5FDGuLN8V6ZPtwLKFYD2FccCY42AZXubrcmykfG7EV6HcwmGmcVSAcXVHJcA",
  "key14": "4KQYX4WdzFiM54UfscSsbb4p4WC7nNxpWA2kYmtWcvx99QrRQDaTcznUwsFmCKww7MmPisejN7z6ajT683A7jXkX",
  "key15": "4qMNuavtrPMnxUxbsnPiYmvsnhEQ2RnKMR2ivhKuqr2DEuV64UkQmaCQnYjjPwHuCGXNkn4dFRytgwf82YF8rrqf",
  "key16": "44xejkDNZq5j3nXumx7Kg3sz31pv1Gad7Kikx2Lt9jkrvoTbQQ1GErXVXjYmeHxNNkr7oMzxjcbfRzdwbRQMv3BZ",
  "key17": "4Y11PfHzth92xMgsr7KoG1FpaWL5YhBhhHsoWYUoQwmdHjmRRp2zLvhMfDMGJCUpoSE7oGPdDb1LSisybLJxBEvY",
  "key18": "LyrTjiVF7oy6ixJbLz4vLRL4u76pjhzZs1bkvp6ZZ1K8WvenNnV38fGweTD8zi3MNqA7TGMYAWrnpUAsB7RVn1U",
  "key19": "2ZtDhGtxXW5mgYyc5TQ6tibhKdrM6LS6TguUhxxtoYo7S1PvnbfE19tiMHs6nmutRKLyt9gWmiTZSThTNAq6d4gw",
  "key20": "vJFnWFVoaL7fA55iFzEnjKuzYCaDA1JyWe2KdPwL2EBUSHVtWdmRdP6jDjP4hXj2Nd5YYmLk5vTaEdxhB8sXZvp",
  "key21": "67NNAfvYEzQhwh7dzEi8BAWaDesufytJw94FLWcDD9drHX4aFCrjpk599Q4wbEE3TgTgdbqGGLXYCCgfRA4toxx5",
  "key22": "jsjVp48Y1HQesHVGW6CHr4BJL5HjhYss98YvZRTr9tDDZHYNK3xYoJpE4mde1ML5o1NTKgxX2pJs8tjEQNAcuHi",
  "key23": "1dTB7h3q1m9JgojUP9AWQNVzBg3D5TSkKDM2y48TXTPpUjigwDk7H4HDuxF2A8o7TZWU9n6ZeqKpoHkyoWJGbqj",
  "key24": "4bFwkLTDskm4RScppqtzpEUYLcK9hFDLpqYkLGbyXrUwDV4jWF8gEbdHJWvSXqmS4mggmLmWyqEn6dFWfCMGwGU4",
  "key25": "LJtb3q8puuYGWpT2KWLbr8p1T58ey4MXoSAVPgaRGpNtBecE8qkt9QQWmK4Sv9JyBmJBnk6XRceD1RHmY6oCRjJ",
  "key26": "4bk99izucikhnWP4y1wYpNXyaEM4aMHdPHQ7cKwgPDScZE8po7wGMRFHJ1rw9e4uuQhSuPeBkUUnxoYEsKWoHvpH",
  "key27": "5Q27EL6GDWo67ud4qRGNsMMTG1fukAWUEokrvmm5CGGsG9VMxfEVoU4f9eafDZzi2wsogTGLG3a8t8smthMvoWzv",
  "key28": "u3jGgQ8iE3CVWB2c873Y6ywU773G4BypQQjUfpne2wjmcyHuv9UiCT6SzxuAt2pDc5AdBgmTr7MyY8n1S3P2vGN",
  "key29": "2FVNtNMTzkJpgYRpkNJdKr8LLFpgHtvNzrt8LDNK8M9xZpex4x19mEHnNDsXcwNPt6r81GFzJE6JpozNfUGYQmgp",
  "key30": "MPUu7HoGFmfP7TF1rUtaE66mcnmPFwQLAxGek8DXLcn9hsZ1PBDv43SiZv2k8LLYFJADg84Ry5qmqS8YZFMiren",
  "key31": "bjaA41ipdK1gTxZcVeBv7brv5gTUu2f71zCmMvLRGuZeCWwUdg2MnSUDBjBvjAK7cfa9GAj5otmSibnS6pRzp59",
  "key32": "WLRUtGPJVXNBQksBM4x6Dbq3eULkcKL1BhiioDb4GLByb6ze5pbwcJzoSNeiZ23KZLxKA3j9p7gneVJ5pCp1Lz4"
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
