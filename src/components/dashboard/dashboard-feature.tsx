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
    "279BL51iV1E42yabSeCceGgQ5u8C6dHu7dKspMjEkMNXxaQdSGuH83srsEwNwqubQV2BMuxZVAhiHk7LruTMezfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x451qLtJK22yoimjXGrKzfYxPLi4zRgCLsBkXfT5wMBnqt5x6rpGH5qzJCYkb1Cd2N8P9dC5ex8sQxMGsZPj8Ky",
  "key1": "3ZWhQ9xcQJXjWGRt1PQjh2tUkxZbVTBKK1wRTfqrKkQHNuDL94QyTs9Wwu6vy2YSoWaMZXYtpspfXqkjiMfeE19i",
  "key2": "2JDV855xazpcab52GNhexLHRazkc4gSZs3etzQC7TiPQ5Qgt88z8cKw7V71RtG2oQujhDdXHYEw2N28y5bi6P9Vm",
  "key3": "2pherxawVQPeFaNro5sgrN6EUPJr3Pc1LqFfkkG8rDN65uP1xNPcz9MiVivKhUc46UphhnvCxoumAoYzTagnhuUw",
  "key4": "5WJYmpcy8168UCJnoFa85WNN4vDJtBYbeatTVwZJY8jTJizccYUBptBAvA4Mr1FRGNKnob3FMywUSiyvLwScdbHA",
  "key5": "32bJ7iKB15c8cpTZjfi66a8bmhsFz35ecFVY1yDrFBc2Q2ki4oytgcLaDdfAP88SFLrRbaG9P8GJBJjq9WnXyGh4",
  "key6": "2PbwKSkMR8dWQaXCjRSbbHGHSzkXSJx89tGzkD4xA26E7NntuhgKCNPbbEJufSxURbKDy9Kn2qJaEjiAY1gsWToD",
  "key7": "p5HTSwngFn7VsJbsHmyVZsnHmSssQZ2BinLvmobdvvATy4yEZvwRKLPaezZmn8ER76138VX5buhe2MEPYL5KhyK",
  "key8": "oYHvxg2csmch6gMF7wiVXiop3AGhxp1RN1Ht9JkU9P8xhkQsENjGWzSW4gs7YrTAYM3zsjPimdvkJXXgDG7f4kk",
  "key9": "5aLQ9xfXuy61MuBvqtXDP8KMaLV1aLWmXskVJyWpr6D9LZrqiZ1utoTPuC75zrkTnoKbEYcR8ff7hrmBz29mDfBC",
  "key10": "5HktCKunL5P1xr2WfGkfStNhaY4K7gaHNkDk6p53PGRwS3CDSanh7LeySYXCwowtiiriFSL7aNJw6ibQSwxZonw2",
  "key11": "xSh1qhEJwZLvH1hcAD3bAjX4qt9Ypt8hDDUBZPVrHrMfxNwWz2JYqkoJpYsiavvMa1oAgEioazupecaR7dMwYct",
  "key12": "41S6WL3yDnfdzvkNET2PPCBWziwjZw5wpB9NcZmSuEKuoa6v5nkz6myCMzTQMb5MbeQDxCNgBcXx1g6A9Vz4zxBU",
  "key13": "4eV4zbvt5fojXq4sMbTLXcbo5m5JbVCCXfMtpjJ3TAJcYig5pfAwdLr6fYdLWgv3y1s6PVLAMaVWBA1s7K21q5Br",
  "key14": "5ZCnY2hJtqHggcvmjJyvAWV7qf1mwaZv6oJWNNeSHZEmQLxAD5BXydsmXhaamfYAGGUDKccXU5diBCEedeART3W1",
  "key15": "4Wfg4GwhRAsnEX2zLfr3va6pmzHgyYPTamzGJi56PSEKuHgQiTD3x613PT8egkJqW8H8dkGMWfRyWLTugEPc5Xxh",
  "key16": "5ZLyMRGrCaSp6cGPwGdus5FvbsCXdtAk9uq7q4eHuPsyiiB4TzzfjQGnZagfGLFsMtQgResmZtWuZiSA8VcLiiZH",
  "key17": "65bMkWw6f7jRGzgLsWqTDoXKVAsaiSZgYsrXYpr7J7srV6qCBW9jFbEYk27prcaV3k3ppJxVqt2pEC28xQ85qjwq",
  "key18": "3XNAxj2f43Aa6jkmG8DNHCrx65qX1zqVhABbqEAHUqZURZ3QmSZ7GFx8wiKLrw5PHh7Y6Vhs2ar2rmAMWnhGPikw",
  "key19": "4mPSenrHUND7GV71EfRiS4isFbyVXCHdq4q8dxqDDVd1GGDLMksp1Sz1KTswTa9NKt4SEWkxfBD4WqzWG3mmVUJC",
  "key20": "3QV6JBnEcDjXCHB2phjzu8CMxb5sYQ4eWRx4SykNeZwbwJRmE6BH61LWPdmhjH9rCHsM1h28MEz7AWnK7qjwk9p3",
  "key21": "3CfmyQNG8og669ibmC4fxLCAp7c2akCbjz2RFSk9HLbib7UhfbepQL4yU6djFhJD31GjXf5dARpBQ6u28DeFbcUh",
  "key22": "2eaZe5xdUh7BUNfJfL5wJQ7J3u7aNpzvuFk56do3mMdWb39pZQMxWSrckA77Eu2fenWma7PPYziaW4h3sVpu813j",
  "key23": "41bVgXxH4EVThKVEEPW5sVRWh4fBj9EhyiE8cXgJNt4XKNQkL2rK187ppi4HFCXUpFehqX4cUFrKvrB8Gjyq4A92",
  "key24": "3CFtpvidys4yWzDVJhrkwtBjhU7KVPtezBDeqv3DtkYe79WtPDdEdB2b69mm1rhcPBC2Sp3hARTSfm3kySzAViwE",
  "key25": "2fpNR4GV1KhT4HCFgqSx2qrJeK1EVXPQ59jWRMtMhf7XQL7LxzXvGFRPvuA5XaXqMqmudb1CYPjckJftB9FHRM7j",
  "key26": "3MxNie99XnJsmtQdBvkYXAbd2fPa9N6WtasXnRzLgPS46NgLe6tHPJwG9idzcCrYiNZNcyr9fCWkZTk8QTsXJ5c",
  "key27": "4EuDrHTozqJgiWTeELAGqAzxJCxmjYxqGJkgJPVxde2yMn7PUG9qyBQaxPFzsEComWwE5umAPTyiQ7CYzaLNFo69",
  "key28": "22J5CyT4hq8ihxTNQxpSmcthinFXFaNJhQACykq5bRreU1by1VZfgaceRPh1NWFvy3RQiYFyFpesKdoJEhTXnkoW",
  "key29": "5hzbMmvr52T2H9EKPGswwmhLSMcsW8qxK94JukgauNNkwHLUvz8FafMazVfUZdXvQLSDnXcLkGr2F44mnZFEzi1X",
  "key30": "5CUdtAqNp8rZkreFkyhLMx2ZCTiQgqGXGwCg73f9SRNtqmPXRPmqB18ZUdxY2sksysvxRRKpFJn3tCoLNgAdeuEY",
  "key31": "N821vV1rWGAncUPpienYHKW6Zd4oJ96SC8eYGrNYU1YQAW48W5Pf9zgfFTtvTgg8kqysSqdtUvfPGh6Lfrdgk46",
  "key32": "28hXY2TPUgZPKfeMFdGTnSZhxUoqt6fGvJQc2GtQJz2AZduJxQawfEmqQppAKT9mWp7L6ZUHLhKtb388tWZrv2AF",
  "key33": "5r4pUrYN7doCmasnScFTLhaxpcEpQNJFLDxevKjKPEiFBNysUzmLUHTfSqa4zZfkL9LnFEymtSBNK64jeDCmXV7h",
  "key34": "622XfhpU7AH9bMw6j4pXiuHCZ43TLbgY4yr1ea2rdKDwEhAx7fMkr4bWQhKUAFhqP2vGrKrf5GgEkQ2yzbjhQYTc",
  "key35": "3k99EPwYpjHnArzLCnQL84kYWEJFQ7k2fpqXDTJrSsC4CyBrmWEWwzDD4kvUstnPvo9x1gsBeDzeCRHpux9vEGsn",
  "key36": "3Wq2AAQe1ayZLAzaFrLr8EHJQ72Kp7XuFMTexbY595W5NNsTWMvpm6TGR56vADtsvpVsSsrc8k24YFb6UBkGjmzW",
  "key37": "3JhvYYKgh1uiqvNajxdKWYW6Q1e9dMScEwHejuRemULhcztzKthHqk1om9eHPqecYAVGBkvFEDBor8iGWHAav6bi",
  "key38": "Bi5bqNKSutNzDatLqccdcuJ2u9ZjdUXd4YGcoAtPzqbLWjjSa7oxDZY3p4Zh1najJSnZtb79h9EScq4wSF6whha",
  "key39": "2X4iLePMLVd8JUtVEH7pqHRvxfeGMoVcbCQGKQisoG8qpXewgze7EisTqgRu1QJYro2dYsUrgZwVFRe4q4zurMhq"
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
