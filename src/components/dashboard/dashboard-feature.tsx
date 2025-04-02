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
    "2bPsdWZwPHzqD16iuGGm1pj1QUQSMd1M8F1tZXTRVFpfnkzTHusPjKBJtfRdQ9rXhFHLRWxwQ4oq5QFjKRueKKot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "619d2x3ZzBL3qW5CMBvWq573UYvQ5PMRYKF1vmSiz3F3MyCRR9739eZFdrsPoVNdmokE6WTHkjYZpDRiZRz7QuWf",
  "key1": "55PXCHJkxoDAedshtGp9AcMZfJ33K5RV5A7XvFYP5c4gbso4pDg5Spi4KMu3haPGd8MwV1iZaJLS5P2YARMMw5Lp",
  "key2": "7to4gYGPBPkJt4fQZRnAeZiiUWMjDjMUgkaHxpkgSMjVqPv6zm5b5i6w3D8HDSXXXrzdGiLcMP261ifzt6cNRaY",
  "key3": "4QRVhmxHwaBMCucmA6WYSmsr4oiwTNGHh4RuQxWiWPCvojcC4jFpEjCR1MrPeHGFptRhrV5tDvrKeL9hq6D9Eaub",
  "key4": "D6w3kzaU4nChSQR8sdqMT1xEUDbXYpKs5UHmyQnyvY43hxFF2FPycV8MX5mHjaqZWJwnQikNJ2mpi7kJ6P2Bsud",
  "key5": "2kDFRpXBHD1vvEj5Cfh683mughfP2RZHj3xNTctMgqHaXtdopX7D7TnohjvpNN7AtxXEvp37J21kXK6yx7Hge5Zk",
  "key6": "43HZv1LR9aVFwJXmzuVT4yukrYe8n82Reigbprf1JnrNeTz3qDHNu17sEoefrZR6pdaJTXmvqj95ofA5xMVJXFiF",
  "key7": "4hy4jpfEmKDiVhHPKCbt6xrcjcfzaBXafAEYTMCpqVpw3xViV5aQAmE6oft6NbE1a11o4RJQvKogWfsTdbxpFMJQ",
  "key8": "341Nmftp2XnCjk7TRtJ6Qcq4SCkgEHkC1gwHiLdZXkZEuo2D5PftxDoCwHpGGSSbXtFJUYet3WvUW1J2whUpt7qi",
  "key9": "yQZfUk5tVzzoK451f5wnZhUHen3LX61LfWDTeZ8Umt78CQ3ivJ9AGiKy5TY7usmXA5uDsJ2SXJFaKM6ZXbQQUkY",
  "key10": "4rMqjcRtoCsPAcXLw224Zp9xoJbzy4u2auDCftkBESCbACamE4R328diaDSdPqnMGfYFGvAQ8tzrRJH6CK2sw32o",
  "key11": "53rbgaPfBRKEPS35RRQ4gwM2APYNF2usfcQZqPxtvmbRuzy9tH2vnvktDcC8KXm8Y4QVrbjARN4jWUZm4BKqwCvK",
  "key12": "4qmTSAi32dMQaH7GwiQfxkk1UUddioVQfJer8LRZwFmyMkKrC27dSPBy7gZabLDy7cEW1f5i2igte6pr637Mb4HV",
  "key13": "2gPmx9AuVu2b9JWyAkz5whupcktFDG5vF29L9zRrwhkpJ6wMQq91xe4s2RYN3AEkoXBLhcfRgJUYcJo7zpLEbVRb",
  "key14": "5RtPi1zfjUWPkxN1qMmxPYyoct3t2bHVBaDBu4cJg9inWBKQ7igMU3dHDkSfR8KgK2vatGkpjE6x2TDyrejuqU5X",
  "key15": "5kC7uVJj3BnYX8wFwwDsHEkJFPPbrakE8BwA24ELP9pw2i1gawQ4RnQzWq7QHjnAXhoMe1vkn1gBJ5APnSqXHfqF",
  "key16": "2G6YqmZKm6TfSkdjUEDn4qaqKPqYadngyrefFgwT7gThVrXyXVwZhaPzWa5T4tgg5G4vx8ULzMNAcUwvVh5EJq2Z",
  "key17": "3QenSoUPhDjcSUhamSFHfK8q6DDeNZRHDecB95EAMZ6Z9wtGuLfh7UT8k1u3DuaU25U4G1quFeD7m7cDTZXSU9ew",
  "key18": "46TGRtxJJqhVYGMDLYZUBMcvLziwvuJiizQkCiD8H4fvoBccFRmGqdHEhx6zZujxJt34RQezp7SAmUmDeF8NQYna",
  "key19": "4YE3gPXGBEKQzEzfUsX4SDBkvBz79QdPqWYoqsqVehKnDdzegnXffU881kA4cKRjwJsKYV3Arir6QG5j44TYFGa7",
  "key20": "5D56ewXUWtqVYeL8uo1JRch93eWFzFsnGo8nQp8m876W8RQjnGhoBXvSvrPVfRaTy3UxkmiMvpuABN8k4dNiGoTW",
  "key21": "3t4R1vnB8BBCq8QFpWzjSHzYK7MCBn14u3phMefANCZsJpd99w8ARi8njqSbnDte13AszzFYvkM4BnEt6T7FUzrx",
  "key22": "4ewDSRy2PQrrBSnQYj3sWvkJBv2f3gwUHzjviLjRRfTSFFz7Vm8YDimKJW2BGMdNboFFhNnaEXV5Ect5yQqySGkp",
  "key23": "4u18KNCKzXmLW8vh65rQa2ai5UserZx5FJHQNTFxU7ZutURTGbTqE9xZgz2WVin3bCytn2wyg7Bq54fy32fhnpf3",
  "key24": "3aWShhLk5pHCxMJ8a8FYQgnsji78vvo5zZsfnN5KG6Nm71LEq7aWmSpronBafgJNZEcXYRUpLPkN3Thqv5S4XSzk",
  "key25": "3Fep4oAQntJdGxCTpFwhM5Wv8fkZkZdSByxwiXmZXAVyDaqknmmwBLcKQLoTJDMDzcM2kmqZxL2sRhMQw2Q9ytw8",
  "key26": "45ajtL4nvLkyZg44ZZe3ecvZjEJ7d1wLRv5AWyeRZqXu5LayYZTPSiog1YwNQW9Tv32z7o5WQeRVPabr6hSZ2mwu",
  "key27": "JZC82x4BuWBQrrDWygFiDgDeJoQfdKhBtm3meLBJTzVYogrm46Q2c5E1sadMoeQEf2yJtFZhARw77oLJ3pRRL4s",
  "key28": "4uNoE8FPaLfxJ8YBKXfsAB8q1N3omd5KXPYTz7JcYuBrVfPzPwfoJcJPsXugAYLd6PHgQ6J275ptrQj4PsoQ1U4Q",
  "key29": "3NEt7obqRpUauB5vwfgBQzf2Ksqz37h7bY3Mgwj8iYJ6SmZweD2L978hom8gEzhzLcSiGGgdU29gvaYwpGgVRWK6",
  "key30": "2w8NvAT5Ubc7ZLgaQG29x12WZde8iYya1t3YH1awrB67oTx5Cyde4uD2oEg5aHHrvgdnQoUY4n3EJCvRSv2tRQig",
  "key31": "3vatTkYTr6ABaZAoVphf6C1WNgCGPgsyfJbXFXCEzSwvAJ9UW3sSodnxiJXrPMFvF7cL44XpD8jUzpBJYKzSVqud"
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
