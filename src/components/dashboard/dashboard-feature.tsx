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
    "3WWVZrMpPf8ytDDPchfVqBGieHBaFc1qc4URusjTy929xCGPrZKnQ1GXPxJ3SGDJMe3RqoJQD5GM7eoG99ujqeEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R3nJ5qzthZYWLNEyNfvApbZ72agdnW9kaPPbZqwPbV5r79vCuLME6xXAbHvNrzgg4gBHiEmisn3gmBzXmtUapbU",
  "key1": "23yDA1gpaeu9nHQdxWqDD4urkm56FzsD3PimXknchRRUyyKF5uoT6ek5cKHmnFuJKk7ShcvVfWjeK3Wmu25BP7wv",
  "key2": "3Fs9QcihAATQ6jgPeoSfYb9aVg74r4mnyUDR7A9a3sEoQQU5n2zHCeZwaomuHMPLB9kYqFNxLL6Hn3thRf8xxVHC",
  "key3": "27ceYWeu3UVKDd6yjxnJG8ahbTRBMcoUHw1FpqqpgJokW5Y5EYbsWRpsUJ6aJFg8Dq7w9SSYAhx1NDYzysbJTWA8",
  "key4": "599PeLvfR7VEhoZTwZL1TdZbKotzMnGNcEPCscvbz5uGh62X3ZLF2BXUcYRWLXk3euxQEYwLYfhfLQnHsAjJub3K",
  "key5": "64SGhXSwBbAeYNtkSLX56Jf28FXWZbgyiqfKhxcyfX1mfaFrk9gRxcof1LG7Q5ju6Rg18TekpQDnyXRRYyd8Lhg8",
  "key6": "2g2y8K18Ruy6Bd7rYHrCPVANKoxqj1bXbjFVsoW5UrzRHK9un2NoJdL1vHvwfpwM5yWbaZfPDDsjWVUgpPrCcSb7",
  "key7": "3f649XH854h1wboo1ikF1CHac6XiMqqjnojKqDiAgCPSQcgKjZ4RRfvEo6hNqmLZqz7mvhxAwZtofavKRFHGU4aE",
  "key8": "315xt9VPjSM1gNBcuHepWmUq68W4bm8AsqmvZWzrCJRymazhLNS3qLdW49xXBnbPhoahMxc9MRQbuCtgfVfYPnhr",
  "key9": "4EorTbcPorit5Lydx6SQfZGhN5uY4QaDetaWjnQCiPFtSUVRoN4qBzEQdzbGdKWCvQa6yABfoJDLvuPTDy4MeEMW",
  "key10": "5hrA5VBUo3oePq8sJgbRCGHdyFgwz39yKx7sr8pcE5qkuZmyV69y4Rsfi7p1zoXF4ynhFQMoMz1VxK2DRwpt37HE",
  "key11": "5ZzLP2bebhSN8t8DFA1UZnfhtAY6j5txWJyk4LhW8NYwBr4XNCcKTCYxhDxfbYzohjR6YR3ih5nz8TwVsuRnihnd",
  "key12": "iTKuNqymeYjPxXZvUQPJSCSBAnXJU1wTpmHNitqSYC2WKuTu1QN7L3HQrmSkxbnwwiLJ6TUMC8dnoXrzA2SVWqq",
  "key13": "4NAXy2KuNj1VGDETRrY934eXVgGVUKUqQjiMLNRWzHFwGMXT13akgGTqzWW3TkzQGRakZaJTX98PvQbU4zaiNc4Z",
  "key14": "2SSFScJ5gkMn97A2h2yp2e8U4j3Ao6xcLc5Sm18G8bgcTPYWG6qKLjGd44o82ad37fx3XSiasB2b3uM2ZCZwUAWF",
  "key15": "2LK5ydsrG7k6LtGzEuJBspDbG9J26qMibRMErVTdj6yypvgDbEzExcp9XaveCoroXZ5bpipS1z55QU2e2i2qFFAe",
  "key16": "3LLArxGUHffggvxwmre9Cv5BHfiVXhF1oMmd7EkcdECAqQ8mw55uE6DJwUN7UoWhcHM3uRyC5wVPx6VULt1FWrn9",
  "key17": "xP62kXLawkRRm68qQMFK6EHXB13JMRoppZ2jws6H2PbuUkM3M3t7obHSSccrw6BkqskgbGJLseKzutdZFwVr3xf",
  "key18": "4K6XxkQYKMGsH3ZfUp7RRigwAuwduRRnxRovyYbRVxgSXWria1H5D8NAYj5Za2h9bFXP49w1DK7oNbZFv8ofFxrw",
  "key19": "21r3M7GxexaAX8bqhzqGNAxy29NzUndnFznTuo3oA7nP3vo4KtsippR2zvbMqhi2NC31A9TUzTKWUpH6kyyvb46J",
  "key20": "2UYDCx8rAVfEaNv7P67A5kyT2P27ty2k7VZ3YhCU9K39QTjNqjDjvBhk3o5oDJYdZBoAf9oZvZWmgWhi3EwMwDgq",
  "key21": "sFBD8LTZwNazptC5xCrdVNoubGLcJvfcS4pxjMHECPQZX6hYFdjtajp7TMEF48d9Hu4tW91Zp6Ej32rJJhrH8f4",
  "key22": "5ZHJ51x7AwaaLNr8j8RFRkMh16BY594HVB4nPL1MQzknmpQDGygJ2iJYtNf5bHKtPzVBggv9Xu8sVyrGfKmkszqs",
  "key23": "4qFANV1de7Ds8u6EY13cxKfMjQofYaTqur6rP9dFRorhuFDX5q7w7gdtYYpHLyDQazrd5ssa86HzG7cnx7QpBb35",
  "key24": "3TvJwuu79i9WePLejpozbv5dNJS78zXRA3q5WSxh9ou1Nc9PfY9x3AxPiUaoQUKzdK8f9DocTZBRy3kHEEGyCdGd",
  "key25": "Gcf95jEBDi6usWUdhz55idXYm7bqxpsHokWeMUoeJijJyDQMiDgxMxM8a5KPxN9SBsjSpcn2QBy7D7piroZ5pTF",
  "key26": "66Gb2YqeJ8vNFJM2mm7uTkARt94VLm7A1Wt1Hh2ckLWQ9my1iNYhbqDouar6oBTLbyWDiDpNgdQtZxXeVWropFhB",
  "key27": "Quurb3qqCuecjvWVttHpPNqr2VnSzryZmRFRrw99WRzq8Fr95YiQoACiycDirXUYSZDNMrQcRXP6yeDGoPTVYTu",
  "key28": "64MjvEKykey9QVu9LNhy8BJpq1vDJf36TDu3EpQK6c2zdoZZQ7wfr9R4kEHUeyTsf8HqBdSAwpRMHTGdgzpDPahV",
  "key29": "5cx1vV8k2JuE8ARXxyXnNUuGbFcwQqpW42iEik2nmSJSFrnXiavG4LWeTQh7B7GpJb9geGvXbfDgfVaeCQCggrJ5",
  "key30": "5h4Mna1v4FM3EdwWxNA2oaRyxs8XJC4yC1wtfSkLFbgAzagGXGxsEUeLccnkXdTQaYTW97ozaUAE2Nb4PWEtJwjF",
  "key31": "65PssaYciZhF9nMSHzbTUf9Z34j9YXTpE4Kbvht4E2qhSHk22HfLUSkYDKsHMrgm58Wf4yavpbxxaeQvGmfUCvef",
  "key32": "3skjuXqFvRhainioFprRciEpN25MkvzJcumt8hTK3J9Eq8qUeQDwMyPp6ctUTct7szgrDtxC75GbX2YJKw6ikpZP",
  "key33": "3A5wFS9bUMhfHDPyZLH7DGHytsX9HUPf5AsefyTiiMPeU5APR7yrCv7HTZqMqMrzew2yd3DfXJ8k8KG4MzpUEBtm",
  "key34": "5eVGi496xd4pN8j9KCZLYPdJncJPZ5j7R8ddepq2S4QiALPPuFE4kqffxUvMiYZs8J9HjmkELSCzD2i4PokGop3u",
  "key35": "4oGBtrYQa9VrG3uvo8Pmx5nCbzvXHD8hD89B4CwV5FswtqPnhSnNwFK4yGNGFqe5SXqdaVJQPQR438QDJvN9pq8f",
  "key36": "H2Nm8Zvtm5ocFdMNHZDPgcwMEZCRBrZQrfmLDuG3b4XV6vyb6BioAxV73J9bnofMQdqATKHjzfgpgq8LWtbgMcm",
  "key37": "4SX2q76mMAHoynbUVoaxfvokCR4uGWbtrkuG6k3E9hfXoC5VPUGYi1sYU8bBfBqkJ27gd5urAJ9x4z5wGzmUhqXP",
  "key38": "2dyG4bfuQTVDHQUQ3eqpqQujs5fJbgg56CS7dDAWg7fXN86KwhpwPJSBcDinDdBAaw2vvzhoEUBR7cEUDTCC4Xnw"
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
