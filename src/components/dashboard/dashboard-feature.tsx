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
    "39GULTHshKi6NqzB5y4e2jnYBHAeGaMVRBdLDcthR5eyceGhvu5eAhyzT3TYNktzgSBX8pNLzx4Q3Vnrrzm2qNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e2QjCpDigis9fRucq8FZKtFUKFLRFBBKN95A3Scwq7okv3BawkMiJ2exsi8gcCdudDkynJmoG1DLzSNx6fVn2kX",
  "key1": "RZm7ijLEexSLKEB3tuy3Xyi4XeDBY9PiyvLSZHVRPVQSjZDR964nDdPCvx5krzf4Kijdog4DQ1asoFiVwooY9LG",
  "key2": "2ua1N4VDeaFJSSLkKvsEFTBgqHGdy3fMGwffHZ2e8JaR6N5CMXKsr7jQgjteLTgdP2Vz4RA5CauvTvm9vjSBALjC",
  "key3": "onGSifDjpp3j3UDYcKUEeU9eEZDi9wHhvcgfudxJmhb6aNMBRQmxobkEdw69tjxAkniqd8hvrRPCQn29f9SHuB9",
  "key4": "5iRWzb61NDXfCYHsvX9PsiwsjNFfN288fj7xsSVJnWSZWHSG9KDyh8ScXAUekr6B15gSApwr7n959ZrPx8DPRqE4",
  "key5": "4ejy2i27K4jQVDSqgKkHoitZaZ4KrcgqEtXpVPogE6u9TZdXtQZyhk6GBS7JrbCB7cyCxr63tBeDPNPJorbwEA7K",
  "key6": "5uLVDownfRpYqEQvNzD1kvw3WW95bCZFptwfvvZ68pxhn1QgbkzmzuYva6Sz1VHvWA1syiYYCyQ63Q3ufLTytM6Q",
  "key7": "2hgPRBrhqtbmWQeNCUid9rcsPoWpnu2cQc651TbVwrzWm2DiMauQudYWTtNGXdiKoL6mZcjmRmzhJtSn9UoTBrHq",
  "key8": "3XXbueKUNhZq59tCG1vFSjuDeiYHJvq1943M52HDAUfWzdQZxgDWFxBfUyWRcnnj3wGcXLRhQwy9j9VvCfCKciT6",
  "key9": "61R7Y7CURETox7n7yswXjbT5DpRyiNaKsoCWj5C2aobodDUXqvpDWDJwnEbqUZrqJMh88sjcuMRocUUUpBx7gQ2W",
  "key10": "4L4P1i77GcFZU3GKdumoMz1UsWm2vvJ797ZSLqdsQ6MbojZ1aBRPZZ13jAWHFvp6g66Sk1FyN4hDWMjSWrZiNRxw",
  "key11": "iPSM6MLTpY4SZfuun9yNeMmmSAhknttsKRXATDGsedVbggC4TUNGAitmMYGaCvuW3DYgatEqxazyCiqTYqaGPJM",
  "key12": "SXTZTKxWzMwbaDyLMr4K31NRfihkkHHG3BhpRox2AZCh4g7bref5eNLhkA3ykuwgFJ58K8N2D8dhWy3nA1giS2p",
  "key13": "5DYNJokp6NswtU1MQ83RXzV6k63tQ3b9cbTqEHHwYrZUNKtQdvu59vPGnWQ9mCvCiSMbBEaYjPtCACfpon57uARr",
  "key14": "3Qu6oHfYPvbXfyKnL4GfuTB3P3SNH2CcYrjoxELxkCYCc1MXbMeCjLMyqZQHDDcc1KBJ7EY6dAEsumew1hzwA1mw",
  "key15": "4YHvG8VexzjrBmHKuGvT3LoB6zo3QMXk8xu9UXsxPcRfmFPKLct6WdyStUccD2kzKmKBQHEbkwVRM4hx9HSgp7sw",
  "key16": "2V2P1Q4AqniLoEGkjjMFhjdfwUz1eQ5pEiCkyPwPRDe8bDZ61jqXrnmfaqZff2gQGTkNvg5atFmGM7v3WQsY1CSE",
  "key17": "7bB5yj5Gr5WkG2MzTEkMTFojSgnjTBw9zreAxkxnZP96Myzir6yDxEGWRZeDFHrvtFBTinA7aHh19aX3AmxcdHe",
  "key18": "hwuUAZ686o1hEaCoVQNNn2A6LhZwQPxHvLUXP3AtsPP5LKxvmjzL57gQFSdKigJD9DmLZrS7ymjvE3kYVAupn9F",
  "key19": "4gzPBX6sEZ9cBYfde1FrcEvLGb6BVphahNuP2fTuX5jFys1qGfSmVxnFhd5knh84w2GMFgGExRjkgDWJ6DdUUb8c",
  "key20": "2hF5jLTasZtuUHeRFYLL9jH9QhzqRiTpJayPbWSHRb7ggTnBEPS3yRicrJ1G7aRn9fax2GSi3UyEjn11QzmJ4hE8",
  "key21": "2JcUgiH7A84pyVQ77otmcWe3uqaA1e2FargDc9eaGauoDa8F4e1yd7pu4ZMkgqctr13xSukAvwKVb2etx3wKhAf8",
  "key22": "mhRCeV2iUPaw8CXjjA3UdyDMnXvr7Vfjy3jf4ojZJGYxeMEdE1ZZdLnxNvBvs8a2Xoa8QFi2F4MHWruKvAszsBV",
  "key23": "43qWi9Wxz8YJeGYUrpvMFqyAPkcPfoAmMLApRHtRNntzfbwKedg4bXywBe1TfFTD2iLB7nUBUqb5wUabRXew7mmU",
  "key24": "3eARgPdnWE4XsW8j5wqQsG6XM1TKy3axTU6QJgqHk4kDvhHkrDcbsegeK4gTJc1SZvfKiYCUTJFK11LPRWfDrisQ",
  "key25": "4RTPu2CjF4tzq57tECkrEHmV1NvBBFZGtt5t7x7V3qERS2myigiABg9m5Rr3b7e7kkJ1pKD26fodpLXBUsEyCUrn",
  "key26": "4uYYwA9TRBsqtxab7B34ffvPKzgACLzVafj7AfsEEfY3cVHxP926yVzfvCVJzkXZz9J4pshkJr6J8ouGAy9oPnRj",
  "key27": "2U9LZkarsensW29wKPDNtPMPJpkGDbTxBZhe418miJKnvZdh6xLvhm3uDCiEUMEqPWxHzs5pc6CF7LhLSQkjSKDg",
  "key28": "Mvv2LnDUHnp2fsqXYykeZY3fXy7kuTRQTcJruuswZ3upETsscYdUsjA4azuNLKEuQQeWPdkHuGmJEnpPeLkRJse",
  "key29": "5XFnutxmtANdtXa7NFWw33ndC2ByYNTomuWSs7gDF5MnADKKEco5TqCq7APy8mR3Qr7xh1x8ErL5mLkVtRsT5sEM",
  "key30": "5H7GbKNW8Emvoxpvb7te2BzrpeEtHwoy6cysga4qKKTsuDHFvYfmTjipGnUB6G7uU7gCVKA2Tcaw9AVy9A6fXsvq",
  "key31": "4ysHSqEP6taeWjWtjV7eB7AQhzjnETdN7T7mLMuQjTBeK2UnxfyRr9PRuAHAxBxfbbAAnsXeMdwySMR3ouPCnhSS",
  "key32": "zUaTrt1rXT2iXMeanBmGrBnqyLdfJP3nokdcU6J3ASqtSrCAJdVRxjearoQwnsE6EfavGNAqLghCn5shtoi182M",
  "key33": "djvzJUuyvULLJfTD6fMsLrcRGTw5hvdtYnJsgYmGbptnHCTP2PLyFCzZHVUgRPXKS5MD2wfRivD6Nv9KFBHesRE",
  "key34": "4daqJYTS8KDh5yW5jvi8voEjrwU28yXgh2SAouHcRBt74z9rS3n7gXeLReahPNCjGiStGXNmBdXNC7XQRpC29ZRx",
  "key35": "41RNBEm8yMnw2cWYiET4MLaN3T5LGERApHxv6YHLrpE6euuzFMBHjAnVRf8hUb8sGbQm5GL9dpSezpiMKHtUiQKq",
  "key36": "3Wok955pBmyCiDRNonhWCYxAuuq7UTExvs9HGEwP6w26AAz1FCaugNrxrgcAvZN1LarsruNnDQJAjYriVkczemXD"
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
