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
    "5ojmATp61EquzTEuFDdTCAW45opUj3JhrYPLxmAdKv2VCuVxbRBnYeQ7KsH1XdXTf4FU9HB928ts2oozdXUVJB3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s5CgXkGWQxStF3BitXG5wbeLdLNUt2UwzKX5Etwve9GtUxSYSAhzXKNLtYAhrjv4UXJUYzRn7Tmh3YuQeKSvgc1",
  "key1": "3iijRtnj46ZKawnGTWXYk347P7FG8mkPLnZbQda25Cngi2e8GRCpVGuF7SQZgqYx67XkHQ5V46dUhExeUf4xuvTY",
  "key2": "43jGXFJvnvsSmXG36DpSMojQjX6FmCtVnVZdGngfkEf63bNxGvAcSSUUogeAwEXMxZviWBjYidmkiiBtyE3U6noH",
  "key3": "5PX1R9Dr1ykynf3CJkYDqB1gH7QmSxjFSZQSx3ftJkA4itRqvajYr3Jx5svLtUxcrqZ4uEz85JVqenUFf3WS7Nop",
  "key4": "5qqrGuB9V8TRV5ePaY6mbiKFVCXt239ngavfhhFkSx5zxqnX1W55t6dYNZNQBFg9JD6MZFhhtSGYJEUJJABUHAzP",
  "key5": "4ZvtkQ7BjK9mwUsuz2btU4qTBgJtpj6AV9x17A84UjDyZKW76UhAKWqsUtKA28MSdpUftmJ9XJKPhK15KWu4WJSp",
  "key6": "54YJB1cGyjQff5i27VpP6SS8p6h5c7AxR76G4GGRsmbp6DfLd4uHgyq293DhkiqWt9tytcVm7HyTfQ4MUkZHgDCR",
  "key7": "3iGM5PPnJ4g5PAGLGeXPHbxukZcVFizk6E38VNkChJ9TneoW2E7nryH3cyLDjQ4ww5vfchu7RTMMmXXS2XkhhR6P",
  "key8": "5QiKdEcVYZ9KYciTjFmWAsuM6Ci1xWdzKZfa84Nr932kdQBBeiCagkWcCoS1n4knNNDjRAdCDp2MwXPrAQ1K2Bmy",
  "key9": "23fJM4LoMErsbrdtY83oj3Ug1qpxvV8RJtNMijQdQ3dGSPVFjZHrsRbbZ4s54ivBfT9PKn6LmgzjsqAqca96ndif",
  "key10": "5qCYpm8TBx694SNT1GmtWZLfpQvazmDnRzFQNNkXeFK2cHatBZPWXpJ7NejWFg9auTBEnmH4gfkfSuB4QFMwHDPq",
  "key11": "5YTuyDFcr3nnizyTBYnLteTYPF8SkmnXeXGfhU5APLjaTYvng7vhLEaS4V9fpkUtGEKyQyhBZTT4TvXLZWvtfSj7",
  "key12": "xb2sTKMPNcWfX3kVa4PqJR9pLj1axvckrB6gqec4KzYUqCFBpPbGrKtnLJFNi25bQtgoViK5MdwHdP1TtS948uK",
  "key13": "5kBJki2Uvbst4b5p1xYi4Ch9KyH3Fw8bvrCFQWR2AptrtJAHzk8mgKHhf2Q7h4gKTmVuE6NFSir3XdnU7kd8pPKC",
  "key14": "gw9hAqqbuukYdSKcNpYcqFxyvSUNzcqwDjadZU3BFMSeRCDXb25YvoeWVnZTM9K8TgxjwVKHJFHP9C866VzZ5ch",
  "key15": "5eeXU7u5wnNUkj53ceDZWTzMQj95tbEwxz68U2EWF3is28XyuJBeTaVq12qzSKxLbdCZHVchtvDtk8mE7R8SjZm8",
  "key16": "3Ap8i11hWSX91AxfyneoCdYL5xRbdEuhKGiUyU97DyN3njXyqsfgLvPDw5k5bHzgTXaP41DedGHE2h8xcS9ktNi4",
  "key17": "2FiJiz5sJh4unhVFUUtJwWf8DHT1QTfvZqBsJ91CdRgYnqvncbASFLo9yham6oYNyiKgkagnwFFLccPe9XY81hx2",
  "key18": "3t2Ftd5upqZj58SdZ5zVYsLLjwZC6j5TA1ZHjTYCQxnEvpvaMjozd6dyZ2RKWTStdAMDrWBFzXo7dfgCcMot6SQC",
  "key19": "2EeoDXfwen3KMdHnQGg6C3cro1w5okyb72b5pBevVC74JybCgH48CZbZqx7cS13Yum1uSL2bLwzQEwE4vETvzFFL",
  "key20": "5Zbo6kqbaUkAdPZM85Q8cqr6sxaRrfzZ4oDuhyoYph8ScTSCyJ64zqMBAbWJP1YfVYEr7Prffu3dxhZXnZs3sG2J",
  "key21": "529KCarngD9mnKS4aFcNs614dzTjx9Zbk2GGiHXptJ8tpnvmNVk6HvmQ9DwUC6EiBf3pfv6wiDDtB6JdByt6Dw5",
  "key22": "34sRxXQrkoWSoYpWWaMyNdmDKnVKP8txK5bquG3LmTZUYzkhcm4UgUxSMxw9nmPQ4znT4Z4yMAhRTfTTh5vHUnmn",
  "key23": "3AMQFcFJ268YGsyDqPcZYjpykbgE4NVDv5Vu26CWnGqSKQbqpVHM7ZeZeoLHSqb1pk2DVQGSPj3vsUUkkg5dLpYP",
  "key24": "65zGc1jYm5ZUQr44tfwB4wXZ378VnMFkK7KBvzLMUgncjeYpUYTmaWR49vHPxhFLAWQAdYrajN4SPMfcUy8zy2Cu",
  "key25": "3tSuUJba6QJiMRAVH9ZzEpwpRx2UMfJEoDDjBo71eqzACNwMzk2uFKouuryarRy3k7KM5KBZntzv5J97dy24bDxv",
  "key26": "3CpWXhaGfYeQn4exh1VceyLmAqWDGny6BEjno5eeCBKV7pv9fkCy2SHnsU1YCMKToJNJUHgPR3WfPEDfPpFJqP4h",
  "key27": "27AMcsgxZeaJaTCMMUhXcTED38bAnvNh2aKF2T8oSFBym3i9G7UsjczAsw3DkqYNmp9m7jNTzh7XKYiAJpamwtAz",
  "key28": "H8qJVqs6S4uB42vQanKwEEVkEPmD6evHujrSDcwwFYPMXqjZrgzvMtMsShi3vymSX2WNW2Ga6znLrJhj11DnnQo",
  "key29": "dNrcZ9bLbz7ZijQ3pYEa1fA9L18DGR23ugmjtb1WFTDTy58iy26idAgR5Ubc161bDbzHTtNfC7HyCqmJf55zPUe",
  "key30": "2fdZmLvz4pc3yK8MkjSH9zu6spxAdfbirSmirxghFgfnQXmH8e7QkSp6nLFDMtVixkKo5gsFKMkZBvFSboaDT6HX"
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
