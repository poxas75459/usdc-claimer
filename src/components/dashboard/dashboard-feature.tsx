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
    "4K6YU3bQGqUnsSaJMrAG4Fzdr2LohRy7xmVQ6B4QxFUdVtwo1pr59cpyTxMuDgt446ENB6P3aXkzubwz2sAiT3U4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3818U1Bek2uCivyzs46nQaqrQVnbo45y3wMLiwV2vTUQvGRPyoSNjajeLUg5qKVAHXdvdiCvzXaq36QXnoJRi8Lk",
  "key1": "4T1Ubo7RPAkB6aFQrmJ8Bz4cvLbZsTbH6yMqMPpztbPwTEwNNkajJXQWvTrF3hbpbVCwJY8eHbYHER6B9aKZVSMd",
  "key2": "3tNHJVZ6qGvykjT1XHhZZgaCp6PD8jxTJUAZKfVwkMYbWLv8iBLSbYrxjdbD8GWKrgywuCqzqmQk9oVp3spVur7C",
  "key3": "BsLLux8ba4qAENDk4qkNdaVJBScgTf5kBDNfZhcW7k58RktaPfBRxBBbBmqX1SFvgoUqrW7FD5qGUxUSY8mvbyR",
  "key4": "3zLsp9srtJacBZ2BLZMpDN6mLxbYMmdWFXpiX1NYo3qBkEXipxv5QSUHJbQHzVbMfpk4nrkZDnzCKSg2Vcwq1TrH",
  "key5": "2YuTV6Ru2ZQa9Kgn7iefJuHDKwu58EJfYmhFZgWSu65T8SbJ96gET6LLqBzyxUZESq9MFcHpwpMqLtfvoLLG4WQZ",
  "key6": "65GS1kvdwRNzmMMJ5iauwMH6K8z5AFZR1mc1r3FunqTJhsKjePk55ULfhqrRmZqi7NXs3XRupSRdMWHbdwZxfZ1d",
  "key7": "2Y8EEeenv7WMcz5yBPqv7svgHWvU3AXYXd6yezox8aqDL44hfBkZrkzNwM97xHHdk7vko5ytwrQtacoCfNYbAxxm",
  "key8": "2ZguWLg9hVHVQownhtBABv4C3VBJvFSJ6YZBeWaHsbq4Gz8XoiZzew4cheihaNBbcabZZTvj2ZAJWYVfqgMJq6CJ",
  "key9": "27Y1i8MXzYPMjdEKyFh8va6q2D9u4FakjN1bQDw1ox72CsxS1EbpVHYKfLuX4rrp6kmY6qEn7ka3HNsSU9aKrdd5",
  "key10": "374aDPw1Q3GcAFqarxTgyyRi5qiVL6j6FbLZFnxVrSxdBFibXMGtWUZur1wBu6qhnF1zqmZKd89P11oyXEAnQnd",
  "key11": "iCQ7Haep57Nn3gWpCPrprbaq1gDrWaAvXFbyLCkNezMKSs9axXUrMhVZrwdRtb3dsDUkm6DDiVeSHRcRmP7QLGT",
  "key12": "5KxSLuQ9RZiVrJKU625g9CYogheJH2eQXvqAtdHTHWaGBNDadX1Le9JtsPsn5qqU1DBJviAYbaby8t48PA2L63Hn",
  "key13": "4aByJmC5KBCX4YiBmShBKPAwW9cgoNieXCtfTfghXWmx5hQ3zCNPaz6AY29dfmouVERKPcf97NegVKSVCAQDfDVP",
  "key14": "3azivwZb3262Sgg76fbrXw2tRfcxfdwUS8GEz9qFcY4Zug7W4qK2YkscCTUMifTZHVBZWddWi3j9ZSvUoYeSHDUr",
  "key15": "5rJBzyukZPYzA7Ezw8RKj9CjgpXtFkXBx1S8qLTroYcLPTntYHogtKu4gp7pSXCFfKKrKqfb9vm5cSHwvihBgfC6",
  "key16": "4dn3jCaB1WFTB8C1843H4AiQATMiPwgWQcZjXnEVWf5DqDDqLPboepPzJVhSHAyqAGNneasznhoaGsKvMeLMSvNU",
  "key17": "4hr4SmdiYYUBu6Vf8DXZ1UzCymMCCDUrgcQvZ1NM55Ei7Gz8iBgBL6ew9oFukQG1FqDuTX8Rze9Ht4mrxs9wSz9R",
  "key18": "2AuSTgp3RiUDBg22Soix2xerJbLnsqFYDXccsQW8spkL9qm7efJv6XB6vUcJcZnyn8fN2bh8axCi2oM6Xcz8FU88",
  "key19": "4uMpNvvcvy7HMScihbyRJ91nN2PggUKJE8AV8JvjZ5h5JUpv6C6EfznVJdUwKMceAcUiw3U1SsR7EVozZns3Az78",
  "key20": "zaKo44SQ2MeSonabwftmvTka8JXSkzcfMVc28kJFf1yh87mcCGb3jo22i413UfuaH9fCSTcRkJEUCY2K1pU8Jtk",
  "key21": "4tobgncUTYJtBJh3NbT5byA8XBV3UaoiSdbsnjxBdZpPuTkS5VYr8qha3K7kz9DqNZBPkwBPuw237y6HGrwoWwzk",
  "key22": "3n8Te3UeoxFNkQbLiF3GrAEdZNGe3RpEEz8yVuNc4RTiM3VuGxc27tNVr3v84duuGud2kS5VP81Wwj3Gt7A5x2Q",
  "key23": "2izLpSpk6YLUuqcQ8uCvmTV5dbwedKHvVBCRh3WZfghPN9RJ4C3AL6Szkf4YrG5x3Lz2qZhtRSdSjoueMxR1qofj",
  "key24": "4SAAEZzahEYPhaYtyi14FcnHeWNHBYEAAku2peqrzVezyWmk7NSgH3qEkfkQgo3zbVLF7rX2cDYPXHNvJzYXJinf",
  "key25": "353b245PZpUBN9kgxUQkJe3SSoJ7FAD3g4RAv1nNemdYEs3afJATYTUWcLt2kBhKV4RBhSKKZpWJ2zMP2UVnmaLK",
  "key26": "2TpJcXcCQw6JEGQKsmweBQ3C97Lxk1D7YpJikFxM1EF8NySCAS5UmKQoAbRFzvsdeWvH3ukHAattjn8asGQbFmgV",
  "key27": "3j3uAFU4Whhf21AQprCVpGRBmB4ckGzF3DXP6fukcdtL1qFzb6pHvGDaE6FGmgYWFKmiZCJwbbcGsaLiX8X5amjy",
  "key28": "5jgBFewxm1KkDjqT8HcMv9RhWBHzKuvb2HGVkJJbLeWaRazXeysPYN5uPHsA9zUf5GooDb4evCiDWBL9g9yPqy3j",
  "key29": "2rNovGJbDhmVUpzaK8jfMZfRKndrma3vzgiRqwHKpwtj5SGZYmUkZVVJFQpTiK2DaWLxQFp7424gnjQwry1gSfGS",
  "key30": "4J1tCkc9x5U13GzrpuZF4mVW1DWparwB4b7jHJcz5yiFEvc7tKvrcK4DvYt8nKhT74oPm7Jc36dc5HuEsgzJpjLP",
  "key31": "2SGUVL6k5hEFPPRLJZLvARckGqymcH6eFCwwhDnhGy414QFNr6Dtfqa9eCFfCTQqppCaENciBMMv8oSW9wWpadJy",
  "key32": "DVzYszh7pfw2AmJF5vUY28WmqAF1WwLbjkYWYbgg4o699BpDL1u5BkvowYDRcjNR2qK9DmGvWUU4ekqSEk3NbFE",
  "key33": "pPoFSkAcNwtqH6cFArR7PWCCYcn8rTTT7QTH8GjzozLiFrbHWCLBnndNHx28PHectkx1ZVsA727ZGMfHBe39Diy",
  "key34": "22YoYDNVos7YrDVHTFpJbYhGStDwd7UyihQBurfGrybs87edQoed5ipKCVbvZbdQ5XNnicx4aqx7pRAm3Q1bACn4",
  "key35": "nLfaQGiSvr59n2XAzMchmpRY95LJp7wadLBBk1hsB31NE1MPXDN6vP9wQQLhJT564kYTiamnjjoXzKcbm2DB9XV",
  "key36": "2GSz2GHpUUZKjLr6tuVmhwNAvGa8fi3tYehUt2PZEae1LgqqmNtF2CerV2yGVmLaSbRH31RiD1QVX4jUKi5adX71",
  "key37": "4yQgi9XLpc6PiV2PyLSTK7dzLRxbqi7DtAeQzxrbvzPcjAHHafZJVm5gf9SBGv4o6Be4nCdTKQxyZo6dGw4hLXrh",
  "key38": "2q4ECTjqhQQbNLeUXRMCYBrSn3ZNcUAfANBXVMAvi3dKK26dnUqQUafdgbhaBKeUKA9qXU6yEKQHRC4RcwjmTPzs"
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
