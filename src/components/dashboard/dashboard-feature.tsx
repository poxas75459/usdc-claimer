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
    "32FawibWchfJkirD3KuWbA5EET24ShaB6BUWogQrpVPAoe3mNQydFX8LZ9GqmCF76e4egFKo37TrDPTT4AFXtxxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sieLXrUte9dUYvdpupfybF777DjdUoJVcSLQkvzYbisCopzy4EvPrUZFqRfkZY49dGZjR3kfXdvRZRcRYiSb2xV",
  "key1": "57dYhGLmzrmbsz3vaYE3g9SMaZGHFAJMDqsMhQ3TJYCRL6A71ucNuNG3FHenjVjVSJc9FFUWWqY1pQFsG3kdvLxK",
  "key2": "2srjMMjW5DpKHYy9n85ofmQa4QZJRajXx6jDxYZGAFmQXnjtnk2d1C38Xz5Pyyhneww93FpugkDstjv6RgXKTkfE",
  "key3": "D9DbLBV5zvwKqMLqqjq5b8uRiuZrzfhFMNvuebk2q6aHwg6kgGzPaggqKzq79kYoZCmNXX2yuMrLUm5fVJwgv9D",
  "key4": "GpNawpZDbRDUSuk1mc1cZwLpezbSRxQLs6Bob8ixhJ1SNodkkcejmmDY5SMv7mCbTKL6K1Wq1aGbksNUFRWzcZF",
  "key5": "4eb4hAvMgrrB76uwerUYXsxfinEavB6w6GfbfjnxB7cTa169P3yjtPqpb6pJkGyQPZuB9ydGK6LWbehvHELgMHio",
  "key6": "37yTGowt9ujvoGYkteA8fJajYkf9q5CAu6TuH9XXUzcisyYvdTu84wuJcA1wn8dwpwZzjFihFXawkNHo5LCXdZuv",
  "key7": "2Wqz52KdAahWcQYvb3DdLgLvAnqdEVsvfRkMufwkt8HdQJtsDv2WUFfsNYN2bd6wpwudEuixP1MtNxx1edWvpTqe",
  "key8": "58oSzWKuGGV2fqiEkS1v9vLWT65uJ9RF5iVHFDxZrjVwixLthmX3ecQGfwC9Aocr4qtoG6RCrRdUQaQuajmG9PPi",
  "key9": "3KW78f8jbse3auYyMzpExbh9sMxexyWPBoPCtRFtCgjhy7RyfRMQZ3ry9SVnDvsdK8G8kz88qiULAuwTjBCH1buY",
  "key10": "3GKD5UTCdidnxSNDGxZkMjoriCeoh4Nevh3ts7ggiQzKxSeZFX5shmHULse78Dtr7vxBt81ZmDvSL4xwVZvyrYtA",
  "key11": "2KRStzJrkosAQ34Bz4cULPEsvF54FLkZFdpPMXMFD6Vcby4447G1vdPQi9kem59NcP5eqMsb91qD2DKSQJsTaiTa",
  "key12": "5Q9BsYMk2nbERyuSSqtE84LR6meTrGxSZg3Q1dLxa5y4XNmCz838yEShcqEUGSc32sa2KK2yvFJZCA7k57U2HPyg",
  "key13": "52EwhfTeCX9M9qsydymLXzcFWjDMb4FJdidYa3RsRdcwMQU4MctY7X4Heu1CY3TQRGM7pYT5VzkxDTBp2kgYdqiC",
  "key14": "ov2cUVds12APNMnCZLiQT4eQfZm4m6XTewoXNsZBxHHDcaVDMEDtwbFqifc6XbCGgTPk6rQ2t1991Jabvk3pAc9",
  "key15": "2zewnUGK2dArDrfLXAy4JvUywuzYkCSoyXzpZH1doqDbvdXBEesYRUqb2njTvwsExo6EfyEVs1cQ5vbtfqv4Q7tC",
  "key16": "xJqP9zG4Xd91zJhk9qBKFgtbL7dWH2WjYkaLcXsY8rD2gtoB7EQumcRrT98M62jx9XZkMkWcSfNfkk8yq2UpMoT",
  "key17": "5PvmQe2vnyv56GdwqFvvcineGRgDHgfjoexLcDTSLpxVdwmNMKoL5wWWfd745EJ169PamMew19kzP1n5TAfhNfHs",
  "key18": "3Fiwo8fCn9bB7rjC9QRveFx7zUJzq6U3yMQnSjrrktFGK38V6eBcSm1qUedCFCjZmnabjb4HDqKFNwXVek6B2HxF",
  "key19": "QzV7qctBfkXFUaCBjk9LRAUx2uFspRg7DKerH4r6nG6jW8ruABBmn1SiM2W5VdBiQinTY4WWMpNYdMLCufYvHjG",
  "key20": "2yCAfi3y8A8QUamB4WyjyotcwKL3am2FSiqFReXV1EzkkM97SEuVbGDE4W5t8paybqZrcDUUaHPLTBj52T5vssdw",
  "key21": "4jNaJMEnMNty8WjaUsvWQcqA1hECEu9uhzhV2Aj7wZyQm7SLc4c8Dmd8JemvNUBfqjZ195JN4opLHGMUoPbvf9Ft",
  "key22": "optPApEnEjb88YajmjFiBYEQ6PAJYDGfsxrTdJHUqMNsMsYLoe8kkwPqmihWV9hgyCLrk9Kv8ihPrttNiP5N8xq",
  "key23": "4R7CHk2VtowuyogJq6nLzkeY7PdM1vwvX5TdXKkeFh165LSqYjjTeL6tiCECbG5MGS75xHyoG6UDb8afCM5LAvcV",
  "key24": "2cdtWsw5MP5nxeCsrddcYbdDtcs6UpxkgbyJLYrifMNmNvqKGX7KLRrZirJaZMLPchES9M8r2wYv5MgKjBu9ahxN",
  "key25": "vZef2bg3HigiySfyjbAQnBHogMutTnadracKd9AXqEzwVFG6HoVaX4XEUpsrsgaSVKFoH9LUVxm9ZPxi7azrEEN",
  "key26": "3y4WKDsYmEgSm2bC9GrqM6VfnQcoBuv8q5zAnLtdLd7KhBX9vmu8Yef8HPAvVE33DJEL76GErD5Wrvw9W2wTEqhv",
  "key27": "43SyizjXsfy7qkR9To678E1kgqJ9mDSk5e19gU4PKYbEEG5fdpEYc37U2yBcQ2pNP17h7hw9fLAJJNoTsZFutAH9",
  "key28": "5TqKM6ya1nNAnkhDDsLnBTcSw5ySpaGkCuQBvxHGzQGhAAuKfpWs3ksgsQKkVxooPdDGxterhg9wGxNUZRWdU4vm",
  "key29": "bsEU7snuA2rUwwp2LmneWWKP15myRGugF6JQvGCiKn9cMAf5a2RJLJq3wVSPsnNRXYU9Q4CjtCt97coe3p8Th26",
  "key30": "5RxnWZG1DaPwLU5zd335cfg1ubpGsm4fPnu4RbbiLK9n5eqjyGS1wySj64pCNEAyspJUM8e1Z2UPXom3hnVwJT1C",
  "key31": "46CyCMQZ9dKgLvZeCbB3mPPSQGMzEq1PSNkv5Kbb1YNhP4BBYoAqcsTsHHiWNAqSmDtUXDDE3Nb8K3rf75fcaThb",
  "key32": "55qtirooMQLPX921u33FYoep8dL676VdJJC8Qoyxxe5PPCuvpkviVtRmdCaa1vnxHmxrhBcjCAg5oKDPAELqM3hx",
  "key33": "gXELrdhp8eeSmnfVHcMX15RrLGkPu6dcs7nytjRHfDUTRFwKULVfkYete9yKp69DwWQe5NsUkR6GRA7ky8eoN1f",
  "key34": "5hnUVMMJqcwDzRVyAPUCeqDLsY3KCVWhY84giEvyXpERXXXnrSrs4RJVjAau2s9DFJxZRmcb6LCo1rvKma5sHon8",
  "key35": "3LitP8LMvcAiw5F4QXQetjwXJCnvVFSpgMxHgjQt8VQDgXjo2x3nSKCTgjvCaYFUzNH4x8Q7Ezigr7KBbK2qxEfK",
  "key36": "3qa5KmeFsKSCsPSVNT4bTaf9wDqXXdwWQqZeb1oRyhLvAb4jbtwgt11z8FPk3RcVsjv6Z757EpEdCSzJ22sSNJT3",
  "key37": "X5cnP8cP2LMKCRuhW2fznU4uLzQKQBhBsKt8Mpbm8UyWDuTi9gkoQKNjv9LPggYdvFhSjAxD9pQqnZVThZjGXju",
  "key38": "3T6Ld2JRZ6FqzZEbQdrhJ666hNHJ3cPcbMzjc8NS6fpu6FHRPjMLgR8s9bB7yE6LWRLv4RUd74sgoQNF8iHkTfPG",
  "key39": "WHDr5Bz2X9K1bczUmztmmWhDPkVBDCmZqZENi1cruLHv6JZatWcHds3vmd8a4fcqaFvvviobjbt9b12UvHHVg27",
  "key40": "Xc47pfTHCvsm38oJcDx5XXFdTRxfrQKkUNqteQo5M5dFkWn4QCYUGV9pmqogMgqPiUmrCkn2FhyuKjHNvBdRxBj",
  "key41": "omaGY3noHVQnLHu8WyPzibtCN7ox4mfonPbd1bkrG7NQ4zDTZqVsDn4g24Yqwq1bbpKqd4PS1Ctre4tXc325NAx",
  "key42": "iFJWzHT5YxzMANugBHzVBf4ZP8CvbpFNx5zudrUXzQhbKo1JaBwxhm5JQAK5ytjABvTcy9s4yRxQ69kScw4VLd3",
  "key43": "vqXv4hEL24GhcSdpt2fv7xmtr1QiLU23bmAeKe9tQ7DPWWsLA2o56BCPSTJKwYQhWCfFwaz22rD4xdbr9R2XWse",
  "key44": "5wqxseG5D5otwmm577XtEQjZ97W51swzxM3N2zmcem1m9PH6YeELasQvawN5KE8DJrY575TCmBHDMgVSMQUWoTMA"
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
