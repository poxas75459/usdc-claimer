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
    "35GKaWYCUkds2modz3EYcz4EyKXXdu3EMvJUrxGGoeziBeZ5jBijV5HsjH7PmXHu1PAoDLEUHTTE84FzYBBbyJAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxJqJMWp5uPkT1Css4u7mZMfoMV4MA4mdDGnKhBc1PrCHPpPXh7o97aPd6f3uTGDnajwuiGqhCGsW6PP6A7t3Mx",
  "key1": "46Bka17LKrq4TFoYzv6HWdeQhzKpNHP6gJP7GGNgiefakAHR7sLj9cYcrGLGdApEbcWgLGjrgPZ6WJyJBbJGVoeS",
  "key2": "4EZzGya7uUjwh5Tn6bLBEPk16UZHJ8ke7AME2k3tzHENTMk8rZnLFSCNEMaARZ8J6YPR6o1RcgGaLm4eCtjARvvg",
  "key3": "5BFNLfkZQYsanjWGYvMUymyTKdw7qF6b9nH24BMu2tyT9KhkUpUoFtXhqmqaQgbx14aJwK4W36WZbYcD96EXCjej",
  "key4": "2PFyNua6Dis11PApPydAyepd6cgnuffVSaWx2oB9JfD8hBB3GpMXokhpLj9evx8GBL8vkYoAzT78Dvo6KuWBbAWJ",
  "key5": "4hdbjGukzCCMh5yHsUsmtQnbaE7jtw4sg5G1YeMQpJaR1ECmeEYhoYx1JE1UWiQjjLBdspCwAkQk8J3YArxqccMC",
  "key6": "3qPnGBWzMTkqmqJXkDMf1KWsVHrnH5V7wf8fPxHV69qqi4mtwLnUzv3SRzxtpPnepupBQbz44RQwZH3vGBTLCw7t",
  "key7": "3tCjaKC2n7gXLqKjgc5zj7hhHoDr4t1wkeGuoyE7qWuv98R1SAUG1zEnEzpYYC68ugnoqJ5SUZmF9e2evNfS4rVe",
  "key8": "2zcZ7itwS5HgBA4K6SJ5jsPQSysoxFqefEHQW7jLLFtzwVkxCAcpjuzG6ADaiUJ9g4fkALGMJ7xtPYWT6TEJyGBR",
  "key9": "fgDRpqGho5Q19VGchRJiG8wZv9ci7tYFstQcturNo8jd7F5wgZsjmYYYjmWVWxeviW7Fq7FtCpQcBghRcjh2j9t",
  "key10": "5in2SXox3KZspvxPWL4YZLb92L8PWoru27JhWapWAddxQ8rLdYehA6N9a16aegH2bain96kd3QCABzHb3WWcViMi",
  "key11": "2RaUk2rHdiLA4ov5bigvxABAoQLXpNasr2nY464bGp7rW3eRN4tDkjzi4XN98ntcAZs3gMoLJppg6VHMFoYM5ApK",
  "key12": "2ErBPicEbkqatyvXecPMzi1mEFhcTrSvnT86K5iq2EBsRTbzjtS7W73jpUgUaoK8hRAUyqagWAcoVaXAeYtQdwoa",
  "key13": "31vasPWgAxPSbk8vS2jAZBtvg97tu6zhJF9auNKUvcZpncWmjkxWzmRa2p226afC4sVLf3WTR8FGCPsHNyCpQuPm",
  "key14": "4NSEKwco7QG1ghKjiVtMiGTRJ4LxjTcZ9cV5v7ZL6XLrFch51Vkog4HDByxqEpJzngc8A1Y5EheS9LiSwBPJ6yTs",
  "key15": "1kzxz4KAozSNBRyNRLBhJfaoojngXEQmtCVmkZBH3gttn56y6pB84Pj6pVhRTLvrh7TLTsPEEy2kSrepBxymoxa",
  "key16": "5y4y1jHmE1xnx6dHBAKdKgQmLPKUzFNCLTjekPT1Sk6GJgkDwQTKfRDBy2Cp9QVLFujmGjNw8iDC4S8551np7can",
  "key17": "3BGQPnZ6HUmQaF1Pt4JPUcxLMoeMT6LGyFZ7gh8V6dYS8Pyfi5Nw9iUjjHFnCnbEynVVJPnwemdVpm19foVypvB6",
  "key18": "4iGXceYGrkNZQmVLiG4rHz5WK4CJ4E265MHxAqiDQ2yWa8N7iLm7MrggnTF6mNzsTcvq3yxZSTEsDJ5wtRJtGaiT",
  "key19": "Mkr7QAWWPirB4C1tXsxdTLR4UiqT3vNZShotaNioTa8TLTPSVFTXep6QoYistepFCckUUJSPFP6Eq2TQxTvYtQ1",
  "key20": "4g6n4R2UZYM19RfKFrEXQhgHAY9WxBpJeWqAW7CWfwUSEHJaBsNpxicEXZ9b1w3rP9k63maGuzJHyPRDMKEkLDco",
  "key21": "T77E7AfG1X43eWMKXdJ4S8LtspUVkV2TzuiR8EPzQgpqCnR7nitVwDxi6bJ9S7WULMChJAqEEJSmep5Nf3UnL6d",
  "key22": "5r6dUqerbjVWowvJXseFJjNrJhLNLUg6AtXARPJkWA6z2qHxhPmFcynirxgxj5qAwWEYesjiybSGvWDodTSqZzBE",
  "key23": "oxihNP87yXWzMxht7pHkKC2Vph1hdoedeJByPySWp5UKQhZ2AuK28WixX2C5dBuevrkQrsdKkRzqU8oaE7F5QBt",
  "key24": "4qmGQLZiBYg8s8aqPcttf3EoXApd6t6DdfGhZ48gqBWL7nLx2pyyjpewW4Vx8Q9VLr97At9qT9iZknu6y9CgFkdX",
  "key25": "2yxYuurbjoiatdUvURRZ81LESmoHi2CikQJWeWXSUnJLcKVjUCk2nti3HUVKaStcNW67CK8mMM19z4nBuN2QcTz7",
  "key26": "2mpcje9AhesZ6N2NEXGYbWw8HdBfZDBU38jai4PoyqSyzE2WASHKHgBEBBqxSptGPskaTnB78BcbntifKk2tyiy2",
  "key27": "2q5sh4S2vGXgnxMfpg9j4vxGsjPMQpHe9b16SpJdkZCoZWMmEzb5GbqDZtANCknf6uvzpMAjAz117j6jMAUGMDB3",
  "key28": "4yk77XZZxP4JMBhGuP368iMQXJX1pHn3wqbjGdGzN7pAE7eFPcnmkVneYgYmQn7ztKZAoPwxfg1zjurSqsVTH924",
  "key29": "4ZnzA1b3UqBtKKcvzrWH2zwdLMKTrT7FQs2B7PCP61PgMyPLy3bMnauW8NipVn7K8EZcE2wRi7bw2uZSRACXb88V",
  "key30": "4uTbGnXT3jN2TaFtcWmSaBqBAx5BggmZoSWWcFGMctfYAqnDALY2VJGjFAzGWJkm6rQdRKsd79m9X5yhv13Ftoda",
  "key31": "4YCQi4KnBKMzKZidcYPS8HHfdSvyHwhMp8rXRxKwYgGTkV8h6cKyX4vUYorwWzKWS4vJnWA5Cbixwwhm7joAADQn",
  "key32": "5RTmr2PguoFKr5HDeK77XtrY5Xg9fTsniuk1kuQ5vdJYMH5gjfzKnz64ad1xK6Ec59HQfpRuBDX5DenqMmFzfy5D",
  "key33": "344QJVT85Q44x3Ce4gBo6HJeJrhFGj3sNSkVsiWZdw7eF9n3bYb7LAXgUW9k2vMX185VHWwVabCNmefAsuwLSPuF",
  "key34": "HREJx2gM1FdTUKte5joksismoqE9De2r5VPadppux2SfF82WHV7qAxZzJAtAui7sVjS2RSHdmqmz1jLerFkmasC",
  "key35": "HUGM4C9ivdJBTP816XA7BnPqb2kpp1ufVLQxkFboUaEXSzpeU1nocrSsntDdabwoE1GDe2n5HjGSBFcnAvuUjYV",
  "key36": "3yWiTK27GfZPaH65RmW35jP7UxMzozvT7i3WLLDYEA6wfu3PYiG7NpzyxNcjRNhxChG7oU8rRq1C7hLBMLmYecGS",
  "key37": "3LofCSwn5fNDzN5yyLBZVtgavCPaAdR84Fpx8KhKZVbVJJdem8UCVi3eu6jQ5qy74Q2EWVXsSCZ1mDqD4dDn69ph"
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
