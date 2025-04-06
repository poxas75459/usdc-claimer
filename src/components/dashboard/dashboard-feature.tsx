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
    "4WwPkMKVzwxvVZDeBKNCHyXcujb1eDvPiVd95JAziQEH9VeMmgfZzNh88jX2Soim7izSYMrB21bzcUfFMb1L4yiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XDnkiRe9spoYZpGHh7YQDYj6ojPAwejGXNdAqQdH17EBGBCrupv6wQwhJRRLdtKryTqJgG9idzH2iCQGNwJwrAN",
  "key1": "5UpsjnTPE5WpnxyCfYRnJV2ejqDx32Axpi8bCUHKEMCYHxCURmcwLzn1yErPdKZ7ySFZvEAu5mwZrV4KCTRXokUh",
  "key2": "3Q4bNz1SBRFQBTHCDzpeNzRoUzxCkXJBN49o8jzccJaFa2khEGbRJSwAYTVwb2Q1PHcccR26JX2YqCCUyzMKeaXQ",
  "key3": "3UvAWoJVp9Uuv7DkN9VuW46S2Wfmsin5pPFZfRj4UzJvt5tMFDr8qkgLy5mTrj7EWTRZwJ4JpioYp1ufyZ5VCNjk",
  "key4": "5NGPGP79Cys3EsMpfuwzgVkGojwDERF7wyB8mevo2MytADZW9T5UBrjU7ZA6KQtbHE2cx4n7a9wEzgLQ7NvoaD6U",
  "key5": "62f2kVjLA7hzNSHZWwrhMQeAwST8vQLiF8Q8L1h3Z1u9qgPoPpR55b55cwiGAnNZYhTsCZsKp1KHaM8zFdCfJFgB",
  "key6": "3ZdwP6rUPQM2oQkNmGAQiisrMUpi7GJG8DqievZqQGPPUKXZaNk8SqSvirBqVevTZRWsfwisd7BhfXhVLYpwTk17",
  "key7": "31Gc4T32vCLUFhuwkW52pYnt6ckLbas83VP9MyTpmFdjiqQwsSuXjZPqe9dJYC7pZdtc7Ni8hMyf2sNz5iQauN3e",
  "key8": "dxfXRmxNPZ9fLV8ZazwXZEtKkYt4ohDv7PEP9QfMrR9bCYFDeAkkbZ8tmYMyneUByzGLWALt4c5tkC2m984Hmow",
  "key9": "ZhudADxdkvvRdP1vQjUdtKQ3ucabYZ88qTBbjw6TpvnvyMYtxZEfDsJaWUtcgJRc4ns3KP7zyB3y7dst5V3kUxx",
  "key10": "3AgWiVXnXaG6gNRSzMDBsMkjzKxZmS75tz3fVoryobbM11784Ga4ySkEZG1YGTatJhQ7CnhPpXb8VMSAav9AKK7Y",
  "key11": "2UYES8Rhz1xD2WGB4w9hZoHDGcGgkm1Acoxno3UdpgVEp9Vabour3kVc1PdUeB8nHe474a7sgmr7obo1jVZUbjtF",
  "key12": "5i882HzVMGatY775tJuB8jRRDURhv3L6vB4jR6TpaKBV6Cp2tPExL3MqnctGmqMdj1jjMeDL4U5zoMBEucJuanET",
  "key13": "49NuFBheGCJX8eFcUDH1aC92fYtagv53UBqJMQwQRjzc7EQGvTtmy2Ekksu2mqe1hvTvbsSSTUiEZNU4UzHqTcsv",
  "key14": "2tVQP9xqZhbhA95w8RE977nrL8YbncQVxFrknREFyNHPFBBSaVNHQHf4Lg8kUWEXKWApAHbvuX6Q2TRmYigtUPtn",
  "key15": "3fdZsssCAMZFHNV9wxwLeNcKUsXAf3ufMHKYUdggmvyJUM1yeFoQfQptWnY8oyCkhHZPi2qbK3Pff2REHVV65zgq",
  "key16": "5SM3bXeVCWuwrLFrQGHifLsKTjTcodvMeMJLyMJMABjpp7WPB7Z9cKRLUDUkSD6rgjzEDUqmHqPMcP5dJmcQhbbC",
  "key17": "qq2owEJXr4YJ7iGKqUYtBKjDxTg17o7qdn1amiZY1WoJwCZhuhEHstBA3m3NTgeKKqnEGG4nphHAxf2xCTyGn8Z",
  "key18": "31NtjbanHRyGkVGoyyAr2kc1zbBHpQ1YjxKU8nCRk8tVnVgzZ3urASmHdm5bshMXDt8n2vUZPBb74U1QU57p8gC4",
  "key19": "5q3mAaEE4HWXEpKsJN9vCNdKRqw21wHstubaEtfWtEthhStUQRyjTc3RCJuDeiMyu296DBVDWwVL7vYJhyjxUwjs",
  "key20": "5gzGNekyif4qWQbWwUr3JBub1QXsNDcpdqQDgB39P5VhCkypwqKDmXsGK5x371jL458J5RHubPNc7VNHW3PXzeUD",
  "key21": "u94vvSUxTeSr3aJGgWP6oWJCfNZva3UvftRAcYBpE628U9Qu55Qt9QMxX4sAY3JrmhrqVDuGPDJX1HAF4Cvrvjq",
  "key22": "C9LPRkz9Acj9eMK1TjzXkCSkLNTtTmKXMdNFpkvWLMxVKFkcEHTtByPofvNgJS6t4RE3PHqapwYNw6MZC8ZXogD",
  "key23": "2q2CVcDCvYHVHQh7rQYSEpneZtD6Ci6SwyGPLDozoKA29jQPNkG9Lwzbuhr5yxgXNenHRnSvp1hNTgi3bzmbH5Ew",
  "key24": "2zZNMW5pswvRe2zXrLj2XUYny8Gj2XbckwuGoNpwYPP6Vm3RNG5pczy8DPAjrC4PskoSx5yQGs9NxJvWLiHCeGHT",
  "key25": "4Njfkz7GcUGRXPamNqC2eHsuh8XvA64pg5muJYsTpacn45yqPJ7inxqVi6zeX32P8Q1r9E5FxmYJvEGqmRufpR4M",
  "key26": "33eUnZH7Vymq46njzcy3dUBJ172cxbzg5uRknND2wW46o6ww1yT8csPZ3WfHHDePJeyVdrV9wM47qvy4RkF9hX3q",
  "key27": "zFRvpdqgwAV8i54t3pnvgqZ91X9aEWtyx51xtVGSQE4rDnYY1JvybbJJDV6ZAWYNpLD5yGh5KuGjG1Pn8YqZZbZ",
  "key28": "3sBGQYHUu6EP1b8w79GT3PdrqcFDrLFy3AHAx5k8y455zjQ5g94XsWSXwKgpMT5NFLJSJ8vHmAEGoWrXij8BBLo3",
  "key29": "2pQRgxQUuZsNhCbPSpjvXPo1NwLUEY3D4xpsk4CYUWfTaZVAYPGNN5wQDFvfEm5gZaYSujWNdBDYBNHDNXpNzSNb",
  "key30": "2m85YqM5TL6Etn7ArhL4Wvbd3pCwwYZD3kh6hxHeUkRTJBvfHgU1nKYP5Ts992VNefoGFhNuCSkRxfSMC9pt7cQC",
  "key31": "64DnszmwuwfmSqVciYEta79HVXziaLKWKaP276F8hvSe7NXEV3DJGjP8KoravMG1eAZxDCwm44HexqGMijCxhrWg",
  "key32": "5eojGznRmN4wFnKHjCYtBChg3ngcPGpcFrW3pfq5Unwxt8gf9xvhf3VFQQgRM7M7Cqd93RF4DgfTToRS9tQ9gKZC",
  "key33": "5igVsC6GDJvLVCfvZVR571RN5AddQ2cm19tpeGkkDhR7iPRv5C1z6zknZixNuGUh5eoGrRxqcSQzZZVxVsegTdQZ",
  "key34": "4tvYeiyAoZdExpMerCm6VKu7NXp2TGTrgfSkrHjK6yYYAowrraqsUQPDyQShSV1a2hhdZJKmQ4goXjEWFivmJoag",
  "key35": "2SZYB39o4C5a8SYiC9nWpJ1f2sBKgjdBU8UqkZRT1mThDQo4pnPUsD9vcrCkwp3B4L5kWoXV1m3nCAnG96Tb7WTk",
  "key36": "2bLB2eqQbjHdCj63kTEvYW9jsUkK1HSnfHdVKtNsiRDhRYkjaKKnaww3dMxMhYvsrt9zJKGq9kavWVfUTdK3DxDU",
  "key37": "2DN7txRcttwAoLpxozCrsjkFuduHrKNR2PyaME3gRHBCVms9YnPLML6aq6AwMy2f3Ww4GBuXNjDqT6C1tfCzXZmr",
  "key38": "4fyVUkFXKT3KzVsH8U1P3xLeknAve6jgJ6GZwmUzTuLsSsYztgSh8NQ8oGf3StGhfd4QAx6VQcBB2id4nCUnCHKX"
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
