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
    "3FWZ9uz57HY9wdWNwz6g4XUKgHpVHvrSb5SSHo1GkFViCZvDDw7ZnNdTqDAMpt1qGQspLpY596AahpLzp7rBJXNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44mVpncofVBQFsLLhkvmRZ8MogjwbgjrBM1WDWgpnXqWfZjEXq6UZzJBXSEPBRjAemrFkeDHHxL2Eh7v8pZ5LAnJ",
  "key1": "317V3aHugd2MdmhFw5n9gm1YdsfX12uG5ybg5Fq8L5qLnJwGEKvSt5SZFCjk1z5xozMRknTrSNb6jZHpSzG2VWLu",
  "key2": "4YC2P9y39eN1anhtHWMEZPDV6RjLYgv5RTrXQ9tRvtXqosPG4gkXn1SBRfKFT6z8fQfvNo64SSXQwfusMWiM1z2u",
  "key3": "ovTUnxVFmA1g8Gtb8soULej1Z39npZgbsxVLHYvMjp5dRbd6SzUwmn3CH9Atam76ziKsy2HUm1GgNY4i3SE4pZz",
  "key4": "2Vepo4LpJJkJVbmJMsLQnoyUcYnh5AsNJ1gQpke4hHZL7U4m1yCfesrVEF7YUDt1b7HJmj58EMB5toeGEt3KnQ1h",
  "key5": "51BRkDWgT5QxKshGpV91P3SAkeEEWqUFHpXrCpo9FwYUN44PPsN3muWP5GMQuQLTuQ36jaZhmPRizxf8U6nSFdLe",
  "key6": "3Ca4wwzA9g6G3XPtdj6o3trnQFqzHsGsKh58m5NGMQmpRBoZGfm9ukhr13FviCRjApxcnRiuNpcD9rfVmaFdPNjY",
  "key7": "2T5eXkCokJpf9bzHE3Z4X5XPLUH8CkJBQsFkcXs7Xn52PggZHPczUBE4EB7CvfNUaGsiDcLcidaANuYsWRC6Pu9N",
  "key8": "2ZhdTeStfNncPrupDCp4RViUihxVXm6f4uioiZcpXpv5qESfoPU2fuAEASAjZhozfmQZc3nHq4XcqxydxVDtZKCL",
  "key9": "5ma53u4g3MamQHQzV15ZrNkHcKfGSJiUtjcwCGJb3UuBXsMmWUW7BiBVLxofcAPaDSDGEvHQHuM2FmpMGUwt56N7",
  "key10": "4M55nuaftQCuaBhEkaK7qhn2tzRkpNXXmy6TgvY1SGXJmDchecDwKoQcq4m1kkDXjp59U4mvoNnsMdqqdNdzbJaN",
  "key11": "4rq27yVvt4akLbVWjbKM9kpQXRakP3pb7yi5TfqBJ37EELEKdV4vR5JBYyFaWsWoq2tweqFgzLgMUpV5ua1cdTm3",
  "key12": "UwBQTR9sKsahxt9PNEfJC84gem3gNHXbEZfWHuip5cPaZ1yx2NtQaZKB4Y2dkYz5zjs9cuQq2dzg3aX9v2YiUmU",
  "key13": "4cKAfMpUuQ2U1LsxrBM8HMXQR98dnmZcXW72EJRe4izmNy4bGj9fytoNNqrKVEEBJd8vaGS6BAXmpSij19nuJjw2",
  "key14": "DEMiYudg12L81CvGv6nk5ALFPf9QeKv3z2eL9PGmDNq975r8uLruy8b8dvnDtSAgsW77GKmerABYf3aXFVTNHDo",
  "key15": "5SYC9BYEK4etm7zxCeREh9m5aK9Yi91GR4MaBSKgxBFSdXwzAiP2aUK3H1b2N3oJHdhddehniuvJEfQL1iGX9fZT",
  "key16": "4PjMvzSK1mmrPGG21vP2cBvLrPrbjDWvwwEguSBoAK44kaCCTj76esTj6HbE5kRC2X4Wp8DAYCQovtg4sNcKWxPQ",
  "key17": "47otcFmET4dk2gpX1aAikNsgUu9rsdYB2vwBoZWXsnT1v9GKrNhrrWZoQUzKaxke1fhX7Ha7NiBfAiafppJ394KY",
  "key18": "4oVawn6QB6dQUzbzDLgPDpSDpYwyo9hRLriTxGyA4WYZzgpaNxXYtpjVH3xsX2HuS3ucPJZwXfgqvyGho9GngsMo",
  "key19": "4Anof5nLftokB6N1V67FpSPuPkVSBcs5x7AKcm5HEATYneZvMwyTk7PrR4XWL7v8ydNJfuUcm4b2RJopykoErqB5",
  "key20": "2FhZSM74XjNfMT7GKHDH1iooefLtnCv7seMkxdjTNC7GPatU6frkmf9zkhiGZmkaYqUpWqJmqe737nf6MjQMXVt2",
  "key21": "4fuvWYRw8cQWB2VvYhfSqKaG6i8qxm1CK6w4WXyeHqbKVZ5E6P5mtjmkoqHLYkNHavtSByxmyEhdidPwiuUFfpcz",
  "key22": "3v3NCnt1v8CQGKF2nNWC5yB66fxNgvkgrffxow6uFguHN84ZgCRHsSmQtPE2tdPFsuQLwdUXZJDfdL2xuopEBSYN",
  "key23": "2GSNVWJxcYCoRCbA8kb975c6wYu3LZM3y4mP16HkxQQPtAYWmoUmLZWu5t7nzjZsogh4F1Jidg9PMifD6nGgnKi9",
  "key24": "42KoGV9cYAWrdnX5yc6TcRS45ZszhazUZmvka7JuKLv4jY5Ctx3vdidxtFyWCrQWS2r1YWXnJRrBPjxXHqMXrLDV",
  "key25": "3oN9Kv6bxg77V4bamWwVeihLhU1YURsE8qhHFPLCbcGjTug6J1UHDrq8Wi1Q5f7RTkR8rmPzKMgNKCCpnTbN3MLq",
  "key26": "4sWBYgjiY6ZAbx3Vjjvx1yg4s5BVARY4XzYgzHi2L4nU3UAXybaUYcZ9n33u3AvZUbGCuG6nM3PLd4yCBauHvAbK"
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
