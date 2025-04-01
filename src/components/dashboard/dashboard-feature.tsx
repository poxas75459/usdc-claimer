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
    "655NDi7uZ57qKM29DaDh9Ackptr95kKXYiGuadWEmhV6nhZUEaLJiKfMdSVQ8nxn4k4CjTTLRFYM88apgfdxJRSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yWSCUhfA4jSSVr2QJKrx9iVoXmXXXV89RRn3QvxqzN9macDREH9vP25qFcQcTbYyNRt2aT3s199EfUgsvrx6rdF",
  "key1": "ZGE8M3A6dS7DWtaiziCvobf7q758K5ZbQuMTRZyvbjKTS8MUm2sW4dKiJCsbZ9cee4X3gqYjEQpc3uriSuNTGtL",
  "key2": "2MRgBoKdM8UqhbfsVASR2xnnkj3TEjsTDRJQjCJsUpG73Qv7KRRQtWGsYShaQYMo8iV7CAyFNBDeGCTmMJPLkeLz",
  "key3": "2jmgwLA9PeBA3yCcXU4c2CbMKhbkjtdswHD6fwi5HNRgcSdbLMwgkwa8taeuTDKpQfocZhEu9enLFkjUA162YBgC",
  "key4": "2J2RqTGVtNcdawR79FqpWdTqf5tk2soiWTPGEYD9GeiQzQvHXYM4xJ9RdmhWhoL9L2xLVqd8Lmw7ahwUVhWN5aw7",
  "key5": "oDNVJD6XPd9fmrGD427UkgT1fMJJ2fx59gFNAwf7qpedcMcVZsZRyQUPycuEuqt9dcqsgXmyrGtxPyeewWogYWd",
  "key6": "33CghbbQYDCr2RAuvNHwMCYBufBEatFkArDhbuV1W2QKX8izsgjGL9DK8HEVt5Xkd5HCPW4Doku8a8XbPQPiiFHQ",
  "key7": "2vCKzqdNfmFc4GqmZ8faTuJYQfpVRKWYt53PyVhV6Fa9zHGHzaGadau2EceaoxvU6TdiAAm9nkBULdFiYmhydN29",
  "key8": "5iWBEkhUy4yzV63oefvrY93nDur3tN5Mj8QJJrWgALk7ifMCQ42hkGBKQtKaPvYLZcr15wv3xvnA33XReGku2kz3",
  "key9": "4Fhfi9XsV3roz6RgNNA8E88nYx4fJ46XQziRULn1yhwNuVXjdH9ufsJfoMJZ3KwJdHvKqiWHnA3WkZ1G8kSAiL7U",
  "key10": "4Rt8T1bBU1FstzmurcvFK2aQERP1vH9XEwKVT8tTd81KYpbcKDEtnXv7jgDqXfoHynxi9PywczobvQzUtmdDh55r",
  "key11": "4bgbdyMpoZxWzFn9UwTqnqmq2TCJT6n8MFVTAo9sBAGnQMWctppcwqDjCJEhgA6pL3vwgR1XKCND4B3zxdgptfmY",
  "key12": "336VKyddCeLa1RU5TZixwpr8Siy6k7HUDfabHyWDCoa5qpzTRDwvdD8BHEv8oMYcHQCQPJpfmVqWobDKkfg4SndS",
  "key13": "2DradcLCMDd48tQ2R7gyjb3TaoWTasvv9chM7w9WmeGym25WUd598fadKwEUCvXWxjhhR2uj4yEaBVzYYAyeagqR",
  "key14": "yxQZbkfUwK1kTmjnLQ7hJEpmaiH56Z9DQKecKdPCDxC1LH3Umy1RNoy1gRCLMUQUyBA7B2HyqKpwFP1tX2i87zr",
  "key15": "2g87SMuMHoZZKaekmCdfDGjh3WpWWYebH3nj9bxSzoLbj3ppgWLhuMEvnbdRotp1QnGkKLhp8T7mEtEnD8TKzuXy",
  "key16": "2mMsZiXTxbr8DD2jmRKktfRVrV4dpsvweQsiWcLvXY47tkLx7HeXW1PeTC3kfY75FBEYmtXzg6MoE89JuqPfBuMC",
  "key17": "3QtpRaqdwgrUfwdQPFECmoYzR7DYpjMeBi58FF9zujUrgbmvdoEsKFw1n7wrVsvNYdKZnkRtU9Noeh6ZWSRCHymf",
  "key18": "37PqQqarkkswADGgFnZQqJ4bqfd4JGCHLchH5npcfPS5MNN1GSaHxZTJJNkVNNMEcnPAzpXTL8rpaxKae3e13M7V",
  "key19": "37eeSy9hdzqbzx55MN2dUiaBKfC9YUd4YP7en3SCvNYtY6MdQ84vVP7fdMwkzJmr3JxxazsKEGUfuN5HzSSoGJKF",
  "key20": "T37PzQyDY4jxcREUUjzFHtoqWWvuwVaNC6V5HkciC4pvZxi9g51uHAq5ULU78xjyW3Mrzt3nZKAGuRvgNDKhMw2",
  "key21": "4y15Nd66sfoTNvmwYH7ua9oACzhFmN22YyU4zgBcMPD8L2NhqLkaxbj51jPStvMYEZRNtVqSjSoq7bpWfcubS69b",
  "key22": "CbjQXVHaQEDmJWmKzZ2p6S7m2cG1qWp5bNzMZfgGwL7dx5rdhjPFhHXijsHDb6xx7bTUWXmfUDP8nHBJxFH7UJu",
  "key23": "33BAUYAMJnrDTG88aojSFHfecrm2GUmeEEuaoMZc2GMCwKHE4boVHh7UVPZ8tQ6srkpuSGbPPkBg5vZTL5rJEKcV",
  "key24": "4nM4uCfFvfEeoNdwW8Xx9WB9y7JxFQn5jhru3a4NZL32gqSk6evnUkPkyLRbu8ULGDZPgu7xPfiS81RfemgFvneL",
  "key25": "41dp9s7RajdsVRtZ3CRCtoG2KTzQH9iYzXTm7CX5Fqzy1V2oisTtpmxx6qRD4pqdkbETYzWqTPZYBWMF85ovHdSL",
  "key26": "5FZ1v8F2bPahFYuXmo8y7MV7XFScRfsB7ddDoZtVgY6SA3zgHXiUyUHuQ7fxXJhFAhZF2DLYHKXwTGnLq5HVUGEZ",
  "key27": "2AVm5CfowTQMpQnaGVJ3qzBTqPU3w6Ye15u16fGVZP6JEvRj9sFjJDGvUiBDJxg5JX48Djhn2qp4gDSGeqJfXcTS",
  "key28": "4PBiQxYxgR4vTFX8yuB6us22PcHtH9gJPetx5uPgCiTUqGL7aDwKtmj1eQBburDxu87oACE2fcyRgWvLDY2te3hK",
  "key29": "Wd4WyDN9YjEVaNsSQKENCnahspzFrPoG4Db4GF5VeiFHBDi3MKpu82jBnGr6E1gSYHR61pXYYjnhdharN5N14js",
  "key30": "3PqWNicRNfbxwwsTwM4Dkn8pnrd2WRqKG4qJRA46K3uhgCDVkdtxRKSFRniNSEZgVopZHeXyGTtqUnt535vEmBGy",
  "key31": "4JJfwVJLB1JrEdCfnjs8oxQZq985oDvQyQVt7Uxc6hPqPH2xuuUKQsrKYzP982cszxbp4NBz3bMmkaofhRuBMrEg",
  "key32": "2rChvCn2MgpDoqXy6bEBC68Fic2gKhrFZp8fPHbiUWByicutBFxZ1chkVne5xLPDDpTrmEnfU6thRFqQRypS7wZy",
  "key33": "zg2YuaMXVkAtiimoykjV2xUPt3DSAhRyq4Q5Yex1PdV8tyTh4fXGCHq17Da1CSqsywfBohe7MzC386SdErqmPmk",
  "key34": "3JSovQ2jf31XrfpjtdkP61XPAPC9Nucp9ZCtG5iZyNteuxnjXdPPPuLuanmKn7p3C9dGLAuKw3tCKpUAK7Srsj1Q",
  "key35": "aA48EHYbwDKHHiaJMznASRVqbV63oA3vnmetziDPP5jG5QMgNK2ZRisVBE1LxVwdv8wewoT3zH3TM1QeChhgBDT",
  "key36": "5r6CWaNceXjA8fLs8WhJmQS5Sq3w3bdAKpSukEohmR8MjnegLbh95DU16u91nXXjJut8dUp5F7oY4DUbwrheb7yD",
  "key37": "5T9SD1N2ZYhGFPp6MAjZ1YG5zhMQaYfWxSJDzZWzzXvrFPdSYpyyKXYFFJbJu3pYVUsnmirqwqtQ7JFdfc1uevcW",
  "key38": "2LbwahAwqpbZRUtWHs1M5zzMJYvEcCQF1fWqMZHuHA6MtFnKXNLSKWpsTrbTvUfKVDG6up3aXKTr7PdDs4nEagwH"
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
