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
    "bmRqHnJShECUzqULW31TwZsEfiA44SZeVLPAPXotVkBpXrqfNYGdvHdP1h7hfseJYrEegfPjLB2y4rWYZiY1rwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HA9UmE9XMHEwVFuQyN8FpK5rTYHp8zdsCnCUxgv2YYC4tWCUrGiDY9ogv3PUPdxJSX1LuMUsDGb3pwRmU5B4f1u",
  "key1": "2torJLX5wzhhW3dKyN5v2Ychf8QSz1JQEZXo8YxLuEbYPCAooUkiuYQ7BxP57wxSP21UjUJ9RtT6xQ61244sZKKG",
  "key2": "4FffgMwv3f9hVxN28FdKeoYmUmQAiTAkTBaVse1tfMZkEE5HE7pd734duSvuuWowHtcFETbDR91iYMgr6KzXZXWL",
  "key3": "4p4wssnyVbNr7iAcwRyu21S78v2PQEnvm61rm5uzN7pmrPRe7qSnZk4bdwBPHaVWCiuCKTmxuYCtbkwTVpASPeHB",
  "key4": "2PJcuUXGTK3qScsW9uU5BEuh2kzADyeHoQCAVexnnaNjGQzZZoUjhmKN3Qn9f1nf6Q9EnJVx14AybLJkXuRXh1ar",
  "key5": "64G6zLNNwUs5jDLwPzfNEj9219iGkGWzZoyNC1z2kStXbx5Ra8ZUEhcqJmNdUdgrMdPPw8EUK9sspeUGZrurx8Qw",
  "key6": "3LYKghSTGxMMVancfa6YHL2xKeBca8cxs8AbL3tptDgdNA2kBhqPEgQyYFW8XRXucidD9Wj5S6pGSXb58csQGX4Z",
  "key7": "3YqpWcAmHiq19wczqarX9iaEBZMwkQH6oCwUiWnrM3vczHJfZ9iN6YJgpqAhK7GHVykvT3EqYp3eK5o7nSwUVe57",
  "key8": "2jWC8QUTA6wHff5ZkGrF56rHXheqws59Wijk3hTWa2pLKvdUc8rPvbFi3HHMQHPcCNkm7VVQkPfJJugqthReGXjj",
  "key9": "sQAPELa9eL5XrPw82NYSTYvn5idHfRmZvwwfMjShKboWuZcwRpt3zUyphGYtzRDGJUBcbAmRqgkG1SyiDuccQcj",
  "key10": "5Meru4YThudSFQS3g3XZNQUiZMFNcWBhdSULgUZGCGd1rc4ntLqPQGSSTcXFwqi4a8ckCVkFwESESjBFyZTqWFiN",
  "key11": "2omBWccKa7GxL6sUe7y3juikzdns8Ldarh1ieCS4ScLCcf4kBJFfxNPjLdBUXKW8F2vFEmNmujmFDeoGnRRFXzxr",
  "key12": "5S3arDH3ZXJ8WHyUPV4ZAf2u7htRuwKPvXqENz575o2Cs8b6bn8sV4WQAaP8vBudbvZAxSz53xBjqLzkcR8TaXdp",
  "key13": "4omEg6PeB7FbUtYVYsHGvgnKvRA5BMhGzQqwFmAUet73RnHmJrWGa5z6a2LXaQh6kkcx2iCjAroCD5BaMh3Po8tH",
  "key14": "5ZKgc2YRRVjJqBhTYarzwWqq3QM6eLDRbgxbLmjADhjkfXcR8t3TL66QSp9iq6xfa2GgaqCXinG4Ms9H8qjfgBPS",
  "key15": "4Agj2qBGJ5KHhqXV4i7f7TmY1bjT5DV7UbfyMM79xrVocKv9XkJRiPBuBbReg9DG9u2Z4EvK6tijTRtGjpfuYFSc",
  "key16": "4b5vxBVPJB1tcCC5VAVeswEDmKhzbiuEHTcxP9MXFA7zEfW6oYw4n92ssvZQR8CUkUM6wisAw9155ATvtjCkh9W6",
  "key17": "4izy4Z2StDWZsmq3mjL22n3ajbBtSZG4HbxphS5ZzeC6DoSRZ5iHpkyDYPxzN2Ax1EZZB3BCFdHg8zUWMbUy1bXi",
  "key18": "2Q4ePbfdnSoDNpjdYkLR5RB2HUdJv1cjAcAvBi9DQuTusNtahLcEcNRAvZsBn2jGTRH65gALufGDw9iq3SfsnaEA",
  "key19": "5dod1ACG2ozNpTnTcxSyPVcLF7J22UwocSj8QcfUoEZsae6gGdy4xZ5Y84zTf1wSMAAJsnXbp6KwEzhx7HW55Zed",
  "key20": "5Dt4Cn8M6xa89M2N9YU41R4tZvUjnNw2i7A4hgxZbfZYAtrZZiCB8azFxcvGKWk1ao8G3FmcRBYzwdd1LxbkDFHC",
  "key21": "3uoENuTzN1w2YaqeK8fgVHeDb6qBrV3zf1fae3U5TGH7E22wD5aVr7YrtSXx8u96zHNh4LPXhUfMHfixn7yqodHG",
  "key22": "2St8qRgtdo1KkXRrq55AcAUiCNPCjE55HtyfSK6EzKoP6rkrPRERgJZAW3YPJob4gn6r7h2pztMSitt4Kg7e4rL7",
  "key23": "5qz98P6Cg2v8N6eF8bD4WR8G59j5nuaGkF5zr92EswLmY3YFTLnZXpCw63LGZJxucv5xz8fyu9cuxYmiagpKbZKg",
  "key24": "2q259XaSuJMGHuqQAiP9QLQGxyo3DZh5NA4MMpbhW7ZxovkiH844N67PEtJio2kNq7yurXonAdoKgtbDN17SLpdQ",
  "key25": "2Xzb7VNBHqHPynVgaKP1JftqySMXvy22UdjRFUQWWoen6t1kTPsbmHzmUQc2tpLmxycsps9XTCWtmzNPptUCkjMU",
  "key26": "qsugjn1QE9M4yDSMQov8CaYesCoWXskMxRuyvtEpo4KRRF3DXbb2S5D681SCVkFHGUncnVhoTiZtCsdLQYZBzP5",
  "key27": "4oHyWt91MqgPvLhWKTmoJjXLM6thnXN5LfJVPHPhB4jqmQrYjG8RpmnzvX6mLV7NjCUE74vp1YttQeaNvFAjUG8Z",
  "key28": "Rkh73Vym2ff14hkhKFVQYzV9HWwKunPhceweGex5zRq9C5f9W1ziEU5whUiiB88puNyKHoPasptnLQ4C13H2BF2",
  "key29": "3ybYHVYHdhfWo2TZMSCUWpgMP7gqWqnmqcZRrjc9ezDwhU51Ex4yVudrzSWAvuHYyRGx78vPUGLtz7fEVx5Zd4hK",
  "key30": "2B2umitx9GRxKdTHfQiwEHGRVHjp8qYnPtrBMRSwWRgyAJdjmp7Sqs5GdjwXUy7isAbTYrfcBBUreun8taD7DpV7",
  "key31": "w33xGkang8CJPTm9zGP6DnkT3MtL9GBDFyfgNx8np9gKoBCxGJ6H9QEg31UAbtpz5ux6RE2bc4nCgbheVnK2Cne",
  "key32": "4e9FbVL5AhsGDxH8NUQ9FSk7VEPMy3K71qU86LLBo9Y3Hchhvyd8w7C1Pu2am4pnHLSWespsziWjxpG7QzaBxtEe",
  "key33": "6TzfSKZzgfuPL4jqFNxYHxcqWuVH2HqfNomxtEhDehe7RgLYgAvZ18MTGFjEFVUsA4EARpxnooRtpcubJyzrn6s",
  "key34": "3pikhMWTzwLZSr9Q57uvtCJnScQpP7LiWFndguiynmZu2YQqi5VWs5e8Ji21zvpPUTistCVLNKgKgMr1ioHUvmJf",
  "key35": "2TFCmQsemq9uT5aNnMbjHM42PQjoVh224vMeg4xZzgD7RALKqfTekHrcqZrTDw7nextRCjHZ1mEdRj8UWEevnE3N",
  "key36": "2e8ctgxysa1h7afrTzwktwzKQj9daxtbnSo7MgyaeubMV1wuF4Fy69iHyD1iW4rJVBBxYo9Evq864ZYkvk6JYTBx",
  "key37": "4sx5zynwK8ZiZDWFKeatQ3AQDrV25BD5wgFBHT8fkN7ZBz8PXuhkzHN5pcgkwbUmu53BQUo7U5hWMe8LGqrCS6FN",
  "key38": "2DigSUi835G1FN3YhZcZg5PrPFaqQHC8awzz4Qkt6MuWmdy5sAbd84MkbBwCwqhH3cmfBJAzn6vdNRZG5xAZQrJi",
  "key39": "247cbxiUmeTS4n2qCyz5eWK6iYD5GR5wMXnFPc94wtmtEh73NgYaMBZDeaop89tzPM3xeAxo4zMLijnbYQ3EdU6f",
  "key40": "DFv85TGthtumjpZYtj3HudmZ5jPZ93iUpHZ7rq1LUskaFqfsJ47g1fzvZa6DnFdQ3emknvYkaN2Q6Q6gHpFWWoH",
  "key41": "HXqsE7LB696HxZwjQoYdjGyaF38PAdcLYXm2A7xXAAD4zViKrSCrSLST7fiYuutNi4tWHbWiCiqKF5hcQkzvCGZ"
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
