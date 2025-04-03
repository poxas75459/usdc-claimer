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
    "5KK5vWjVFwBmoBABiTe8A4U98jDJz31fozycNvmqRGpGn37adYrg6LKx4k6rtKLmJcxcQaCndwR6kxrHWthnLeoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xugLGr1JbUzhgUQYEHDBLm53xFCSdNiLDBBVBJjUHqk2qAQKVQLBsf8msqf2WNuNPyjhA7qJqhcwM9nQvFrqG9c",
  "key1": "2h4P4GkZZUeznmxL4RDdmEK7XQ4MnBwyC7XaSo2HjC23fY7tDPqXEMbK5AYSucT5B6ZVQmUrhau6782ncxxEvVdy",
  "key2": "GvmDeiCFxwRCNDcnBAXBZdNDfw2CEuZFmEbYnwEs6CGxdkWdhTSLE2QXFYJSbutVzx2SAxCWmDJDnZQuPAPmL6q",
  "key3": "8ETbx482KnmVgGdGNCECZX1XytMKonctSfRRLFzbUqNKmmdBgEvEfuMoc7wSxD8G7q7ouL7j5YBoxkUSmqc7Epz",
  "key4": "4cNHnAevzY6chANKYkiHjYr9mcj1pMKXDhuT2pzrikA5bUSNoYTr6rAEWxdEyqXQcZZQ9DRP7H5s5UKnxCcdXjdp",
  "key5": "5GS3dYeTiscmyzfuDw3YZYePP8bGMkTr2caVfm1MJY5eydx1MqpNfRJdghXt5ytupdr6b4jCFxtag2Ledd8brbiy",
  "key6": "66pFqyvDpngw22W1R7ikgXtei1m4d3gh33JcgB6WWyHVAfZsEm3DiUV4pvZHpDvxrkcXoA1G15UZSv4XUXiApegL",
  "key7": "5p41Y5mKaSacb8B82xnYJK8uWfNASVk3YwGkSKWEtopwaoVtgEpb51C4CMWMUmziwGofg8oYYfdSfUGooWmDbaRd",
  "key8": "2js3ed4KKMVQu5ktqRfThhNhUHVNHYt1gjiPGT39JnrcCqhxiYBvggFF2mWmmyMYiE7WDdyXYNcPNJgBZd7h5d8p",
  "key9": "33d9xdJjBvFxtuCYdXLmuaCtbfBwgLYgefYvdrb1t9FSZUp474JqUcURKyKkRcPDUAUyFow5HGqN9gjKN2feDS4c",
  "key10": "5NevnG44KhYx6eCDqzdiiQKfCp4gAYc6AwbRL5HefYv7XyK799sq2vCcsYRgra4s9jchtrk4keSYKUz8PUUAUtTN",
  "key11": "2s9KwJHab6Zrm7HrwGbQA2odthrNbnK7ixDqm8pW9f4R3BSk4eBMucSYH6kynW5ue8MRzJjjV1FHTK7UHbJ6fKFf",
  "key12": "2ALckLUnAy33fXNSz7ZJ8yL3KvbPMBvHVBCEaqDg5hnqb29UuFsxeXG21qqNK6gqYnyrm533XDvpmoDNguGGW2fD",
  "key13": "3xsoBBP8BPyHVkfjMhPTRSBhvWbB4f6vVEsCuEbXewUtUM4fNS69njz2iCs4mmpa1SCyGnSZTetDXqVjQLVysB5C",
  "key14": "36EPzpyRJqNLcQy6r9By8KZtq31VJxAys5uyPQrSZwG3BqGbLS9vR2yBVHx2HSrFGYuksNoXSaaK8gmy9gUUx1Rx",
  "key15": "2XTNuqdUoB4wR2h4A1A5HxumutUpVmSXVVdqrHvtvDfXqaHH19gFXdxmkXgv78udRL3DwaVu2xturikETGa3N39d",
  "key16": "3g6m4t5QxXkaMReYdEUebAhswUW9SaMwpVwaB7VXbbS3SB5T6VXoVDLyey4sfhACTFnPPNkbrt9HRA6XmAv96LGs",
  "key17": "5JB9X9CDD6UM3EQVveoweZbYx9NZrqBg4RVqpvAjF92SAv96quJUTuFmAeDJw2uM1Hwy7L3ymuZjksE7Jc4kLQAP",
  "key18": "4YXDNmZXrAiRGS1BeGu1GtJL3ZDHh3YkeLWMyJMzxfMENnzGxZKGpV6w2vvdxBh9sWqT9g4LbUQvwNpqSvLfryC5",
  "key19": "4QSVhrA22ipNanqkqKbehXmrhddhn696iRxPktCq5C9QNcMWjwiVR7992j3sw8AwQgBiCNSvSMaKgZCAWBRD3Fq3",
  "key20": "4SiSspMi7DYmHjkcgwPDX173HNS3P8mo6xCWqgMKCvN3nv23yfheLUnAzxGMu2kYcnk3V93TAu2c6PsiaYUEdoyr",
  "key21": "2SfSBd6S3XNZPkFPK8qCoi3iYKP5ctKyEGHcikQVEpGgYpBTnBM6AL5bSQsJLkgpjH2QGnR5ADCLxUR3GXvyd6YM",
  "key22": "34Su5AGVhwdpGSiRJryik1wQByUvCVZqAf7vavVTwkrvnfudH98JLmQCn8h8CtKnpLr3a8bZ9B8CQq8m6krtkwGq",
  "key23": "2VCYh5dwkkXZX9t61MXJw5ra9XocFBqCeUg4GYdAN4kvf6tp24EuYkjPrDRhTnTtLU8C4cnuFBbz2JSSdP5TDYit",
  "key24": "5Z7Mh4VZNWtvkiRQDgK1muTss4JRgGJsLKDdgDWgEpNHy3jnUKREX3WQHkWjgzPkfAQ3J8wWL25iYFt9PU69mWXi",
  "key25": "3P8ruobhsJv31KrjrEQCmfNXFXVaDDFDFGX1Mx5jGTFmTE65SoB3UcsU6gKXia24yabvht4s2dHc9rfnFreBmiri",
  "key26": "5g4nJ9p8pXojcJUeKwXa2QzAceKyaUCG7M4pLQy71KsSJDf2h748J83w5H6vq7hycixqpdZJUMkAfBGgGor8Txws",
  "key27": "4cWXwsGqf7VMSUHisY5NokFNFbRMEB1Da6iVC8LCbtPsrsPVZgxq5yfT49VpBuuYPxG84Z9kS8tjP3bj9a5dy2WA",
  "key28": "2AMifPGwkF7x75ksKSdVWFkYCm7SKRnUTxMErBrBRteuwuCGEVZN9mqjXnbgYqDHqgGG1EoTri33naejbCcKjjfk",
  "key29": "2uZQQozDSiV7PdmSzPUYXDRxBgi5RbWPRb9WFsdJeRqgm6gXdDYhLharMkcoS8ewaKkSm3Eq2Ge79DHBuPk7k3fU",
  "key30": "4ydYa79m6pYY5VmMueVjoamqw6d3QA6j5u8okeSYRi3B5VX3EyAYWuee1THMd1f9fT1Y8J7rSLhzLvAj2YDR2yNj",
  "key31": "2TFD1bmaZM5VkNYuXQ8goNDig9HWTenMNhgdhM4fFesiU4jbR7KaFM1r6SFhr2uEyEozNQA2mQv5qX9PRUBgQ8NL",
  "key32": "2Qjnvbe3BMisMsZEN7SiVurF7XD6u36Ypb1qy7bPAdFCTj587vxGd8tDKGD6ywVWg2NhEmHzMRCGGspc2G3DSkd6",
  "key33": "3QWqMYme345DMEDHBYqMXJMk3MK9ztsHtDXEd587nmSdhZBj5W7q4xwJLyqK8bdHkHgLdqzYYT5MetoXzYbQbMqj",
  "key34": "XsAKTfvNE3ouNQXBogrUfJzxkiNE63YaEeJn2SgRVyXP2cTQASVSGnRPfdg2MCQvapBP7pm6iKJV5qCn1quwwS4",
  "key35": "3kX3szEtggx7hdyRsxXnWHUJynnGiHzwiZv2wTarPJiTon1YCXUJsMj6Qb1cqbz8Ypde1WkYY1bMiLE2mjcAvvBV",
  "key36": "34i9GLkLYK45CTereERgJfCCZy2YDRGx2fHFH4dsK294WtjaZAQJUf9bE1eDfbDrUDEJxUsg3etrbeVgtaQud27x",
  "key37": "2A3Uz7W1cyr6rM1YfFhLCPSR99XWd54G6RYqMQBmPVyhNK79RZYYrvAcN9nHyqEUNLcCKf6BBPF7cVUHT3d4YZdk",
  "key38": "G54rzWEXLVb9wqyhqWKLEmaoBpTstWEJDY6kMF2ftVv5pPL798gHPKMjBnnVD74dV2QsCNwvvBSx7XabraPuc9Z",
  "key39": "2RYm3eCczrKqwQyVYUAtRC9PNSjm174P53U2Fzgf7kNprk5fCGPNnPPFKkhqJ5HvctaG6NXj3e51xnXYFNYMuJrK"
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
