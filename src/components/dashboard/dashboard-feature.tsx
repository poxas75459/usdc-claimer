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
    "2mVwCG4A7C968s5Q5dRygTFsBeBMh819M3526aoRgF5BPu4fwbkUiYewV7gis4ZyDY2Lvh5vE7NJf5aTK6tVFKkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "399AKPWzabF4KGYQJKoBwib9JKfTxEjgd33eK5hMfRTTxm2BCogUUBUvcPTc4Pc9hF9nFCCXsxJVMfhsbdxinccH",
  "key1": "LYbNFnngTV9Vns1wjy1whFEKPBKxJRHeCpC8Q3ZJSCCAkUR5RFGGD6Vfftuv6xkLmmKrxSESUxJzhMZYWsYbbKB",
  "key2": "5w6DckAFL4sTMVHVNWga3PsNcYdJ5LDo43pmNw69X16SxQDcZE8reV1axrTEFukAMY4EGL3DaQk3j7hAuFu2Howb",
  "key3": "Ts7ZLui48YyoQDxjhXtuU5xV3Mf89p2WX4rsHnav1dDXNCBvFBdK6rCp5YUYGsqPypypTozctvpLMUGDwX4JKQn",
  "key4": "62V8KnijSuhTrTUi4GM8cUTCG1UbSPr9a8xfJF2bxSS4d4EBcYSNkA4UjmPRawk81dM47BsTJYdbAshFGABkmANg",
  "key5": "4hseeeLyP53GwGK4amqjCGKK5hjpmnNFSEDmyeoVeoMVkeLo8zvJEKzDpKXj2wsAFYR62btEskyyxKJfmAZNmgWm",
  "key6": "4nbTj5HZ7ZMwWqveznd5sxY4u5g3mdUqb3uCA8DjFhnFe1Mp9V8FcuABe31pxmJJtdKAKogHFH3i7opWAH6xRgfn",
  "key7": "4TT1Ujxv6GKc6KpUAyLndmfwQJzY82Fsr6fGwtTpeqwTEiaHXSXT78Bdi5y9cGQZjKMKn9zViYmbsoAGvQvEnCHq",
  "key8": "4nVeHnfb4iW6PBgF26bRi9wXYbqnSr2MeVnNF911PUBScbAcUWiTYQp7K6UWb8EASTuKPBdruG7UDMGqamA79gmB",
  "key9": "4gDjiRLhPEGUZpXb9DAJhmbFRdPsXuKS3RpLVotSzYBbWMz5D7FcfihSvjAHTyk9hDYrUY6L5eGWz1X7e7x8ezWo",
  "key10": "26zcNYzKiXf2aLjvpwCTbf62UeunHsoDXhhgiJadxv3ppjuu2irPhyAfC4URjYyiLmVJA7C5TEdUuPMmFncYbmh1",
  "key11": "5LMGck4mALEXZfQHcvtYXbNcegoSTPkWRBW9NLFefQDhuxBZoQxTBEEKDRFmTqDrVuATZhvS5zYkjFQahEb5BWBq",
  "key12": "4WAMUBHsdptrwEoSs6Tz9LYS3Zdp9udiJJrU7km6J6pMvtTbQMFsE2ZtqswVHvsMD3NcJsiAnC1BFX5BWEwPTP9n",
  "key13": "utHjsgb3u4QYtyz6Pqaiz5Q46p966G2oDBusMAwFTtAtb3SiB6sbg3JejjojUDJk5eDirGQfwAVEPUfGkdK1NkA",
  "key14": "35vMCkQNGVhA3YFLPCDh8bTivGdfqfMPD9gnkpdGHG7ijJBtVfdhEHTfYDMB5nnKk2AjtXbFETyBXJsau1py4uMN",
  "key15": "oGEN6dzCYfVzR7M4btQ8DmARMjwEtLFPtqgnWKHmtN9jGX8kvbnhTULxC5p2QAMFhKrGfYVgbuampW7AzampWid",
  "key16": "5Tvy2zp5fZ3NfM6SiBXaZo4nR5RgKgQFZjYbCprzuXAfP2GuUH6fGdSnxWf2n2LtGGpLUr5Ws82viXzQwuzjtHkd",
  "key17": "5a2gsvea8wPSe1Stw8ARhdFQug5im1UDt4CmJvX5SJRKjfCnadTAdq2QdrruT1quQ2j5o33EpzzREjhbysuRWWrf",
  "key18": "4Dgh9Vq1tG6iXEQUg2H3J4vn5uTdSVkyLZ8omUuuARxqdHGvMJFEnAW25xvJNtitwYAnsEdyLw87raDUxpcQZdRp",
  "key19": "3GVK2MSiuYKHudZZZ28A79Vnfxiwh2cxasXh7sYQWsKL4g1aDjoDyrt23cfRfrQUvPLFNDzcytwyLHzuhwqT6uXA",
  "key20": "3nbFTTZfXsYUDE6AYdeor9s3i5TL8GvBacLTLziFT2nfitC7g189s3v1PcA3LDuo4d3M3DQnL7RurhTzCQHxu5bM",
  "key21": "HEFK1d7etBZKGjtqTGLJ2oS6iygVTNHTNTGGe4Kg5fArbqmsaVz9J5FRPpJcx5YX1Kc8PVPZpAJr1BZHBFHRqS5",
  "key22": "3WkDLfP5eixhXUnC5zENaUEaAPfgFRQj8Nmvjrihccg5JoCuSkN4efKqr8hVaiSwnP3LnSDP8U9zb68BoxUj8xhE",
  "key23": "26SuzCGsqywFpkaH4SfAEMGYXmg6vuR2SpkrbJqyWXquqvDgUsDfnCZ14nnjyuD2xdk677YJx6DvRG8bPqXB3ESm",
  "key24": "3GJgexKN6pH259NjNBgbtsU2Dxqi9wojvCrAxwyuoAUb1C5TM62hXpHKJBLCQbajQRnqFrZDvSukPsyCnPwRGo9E",
  "key25": "4iYkh7qkTFvq2q13a3S784zUqyiYB7jmfRUCuiYSV3wP7j9K22PEjiug7biXiPekkCTENkaWUHanTbpqK4Hz62bK",
  "key26": "4GyeNQziRSwxgfAcaEBtqKQpGjPbLrRg39QM2vHTsYSUer9DTdj1a26FaiVogkMxXUqgcyyqqpV86raWd27LD7ug",
  "key27": "3gE7bXncYjs8nYrhym3TLVuLefthZwmZtAqSV6gBpkC5qrC7MXjRxHZqVwoQ7t2hnGHtgGGWABVGpevbbXPLQTYH",
  "key28": "4v6tuyPMr3zW7zp4TaQfToKtqRg1d91DqcN6w3WXWCeTgsxqNvUJ7iZfYzGb9ceiBzH7QAzpjUjzq7Cd2yq4dw1w",
  "key29": "5jsyPc4b91udPAT7YsnycCoexmidjcdqh2GaksP6DnaHLQkfza5FWEN4PPWXqj3nifRr4b5cQFPdwLMDZms7bTAE",
  "key30": "2HXbAPm4aVwxbFBdWVFA7jvp1BPALs89g2siPKJvdBS3MLC5fmP5W4WMSJH46vSaCbiN6TdwNrBa77vvp9tUP6W",
  "key31": "5182SGiatJEne3FBR75A5Wy8WQZNgc4E2X5xbgRbJ3ubC4762uFDt5HTb6Vd5Ye4nPEEVq6KiBcRDaG9KQLexGUE",
  "key32": "5tgnCupFyodJb1T3KnkfbTpoqxgABTo4FvkWxqvk73TRfD2ZjxsMWygtTk3eLsozSphCLYiL59XKN6Fx1BKmPkJz",
  "key33": "LN7ZZaNdMgNEz7niytgh5yrkKoGV5Z4qeyZiB78q8Y4zxnx7MVEBcvz74KzK6QUgPVE2ScrMrC7jwi4iDBgsbM6",
  "key34": "66f2sUXpCRVeAmfmTWgaF6rEz7paFp8mCJ59Frbdd1nafi36mkXhTZXkq2U1Yro8ifmzJKvkHihSk88g1TXJiEBY",
  "key35": "416HD6QMNNaGpWxLHSVYpWukgHtUtNDfkvp2jGsAHKbT26XqD2q5S3quVJbmjymKVimk7r4CkvArSVqtUew84bcZ",
  "key36": "3uDMRtdAW2TvECAwhjcWtDz8TsotTcPpFiW6PBuAArGbpTJYu5zMcW4CxgTTjs3VzPfcZqNC148ubHnGBdLHJVjK",
  "key37": "2YK87FfFeG29uDsnQVKMWjsE2RHLPtXaW6KqM1oybMRLTSp7Tf36MyWb9s6VSRAwQ99JV2dV3WRLjdT5EoJaY9Zy",
  "key38": "nz5mQCyruqNro5yBYnpM2StUud25ckzYHKgpUZRqQb7r1T5wLsG6ixQirFnc3s821QxmjBJW4ChtVEbVYjsRGvc",
  "key39": "UGcJSS1S3dd5AfgW9ar1D8uS8pLaU5Zg1wCAChLwLWa9Lx4t8449dYWqqAn3ayANJg3jfD4jvHYwhpX4ZUmEDZq"
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
