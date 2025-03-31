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
    "5iRU54bXKtWanudtvKyBxdpm1kRY6LyVjxzrGt1ZFjdZtd3oSHv1mvek9TwbBvCNZJrRHWj5komu7u4PX3F55Vcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G2XKn8r8jHAMvJ2EYcED7b2BU4G4xZqejuowmRGmP8kbfG5js9qiG4DEnndu3qcr241Ux7RNSKfGa2szKAiVAwh",
  "key1": "43ExF78Q9Ax8go3VtMK4fWvv58n5kVxrg1PSQcyCNf1PXuzqHgtiQaDcym2fALYKQeu74Zh9eS3rcmKyJwdBzJe8",
  "key2": "55o73jZHoEmHhyuU8xzMkVRRmasuwZkRGgQkebMdxyUZiU7N8n1fjUTPzKCeuRTAanU3pWnAKVXv9otJNJVYW1H1",
  "key3": "n2hUhc87xNBu6SVbgZz81akNcYvZaL6fRa57b5jgNh6CnMdwTnLtBthvFyG78tVChnkb2ooC3u32LBYc4er7zVr",
  "key4": "7UBD5VWhUTtbmTuhoKZexMvwgiiBx4iXdDey69FvGrs8uzLLfZQw5z1a5Q2LrDtg5rnnqSGZzCoNivrk2FEErbw",
  "key5": "4YVcLuT9NEeZcMxcZjsXZDa9K3M2QbUDQWn5fhCGVC7edKf9esyVzjN6ftkC5X17V1S4kfCWZBGpRdfQbZG2q5HV",
  "key6": "39Cxuskk7ejRoiJ9cGknyn4vTo9jfsVHcLb3QyojE7hvijbvpSZMwozyqAchETDqZw5DPn5vLNL2D9wwzrdzMQEH",
  "key7": "3omHQjKKnTk8kayjz1pAi3VT7qbGrbh7JwxnJ9yfcyb1oc6WXTnqCuC168uzYQ4ZJdmCkJX58fKfPmnyHq8iHFwJ",
  "key8": "4tZ81xsv71LpZ25zmwNqyNQDbAzNddWJTrcxnjZQadKv5iz8jmm6tFuQiiaPUtuJixmQp9A7otpzyEhTuMxQ4qDS",
  "key9": "2mo2gKGZ3B3S5ct4zvLx1tQvRFhreGDdtLfmS79q3dXihGUDyiszffGhqPySmG4qJYrwezhXNfvQD2zySvGDWRsD",
  "key10": "4esSihw754srth1JufjWUsCvxKaEzQG81FtmaMo54FHo3dCUUAXyBdAWZEx7RiAJ4wrEQ4vhQpVUR8wFVF8KQpKD",
  "key11": "51g5p1HBJ9Qncb1UjzVraTWu5boQoGZxyFxQQiXHDVzYT4A1LXeBUHQw1UqB7KaPBhWEH4BkywmCXpjUagQir4s3",
  "key12": "GMGeK7Qv2efekbxcnfZtRRwbKJMVVTYRFhsPvGZaPchagvGEKhzp3WA87DzuoShtWssGtxmg6XXEdCTVcqJEX9h",
  "key13": "2pa2cNCYHYzctA3kiGBh1MRXSKZDPFf9eSP29vRBQca7Pi12vxWjFyFaG3uqmJHwKX3z2vkcGuHcrYBeQzVw1anp",
  "key14": "TbSseRZfL8fQJsGroLt6mRzjhQfX9Kf3UCKxDC2kHNzsJBLSSo4GSCxcwJ4Nr7rFkXYGnGqayx6ALZNi24T47XZ",
  "key15": "2kFEZ613ZbZ9mb8C1Q77mhq5vpVSodWJTiCzVaAyCGGASVS5gTYi9wTdmaZGwzqdQ4eqXjzyYBdkC4tE1wB4gLga",
  "key16": "2VMuhWmMkVhvWdrf7EU4F5oBQ8x8dq7pxZSMP1Ba4511iPCq8Ce7QfSxqNvGFDHfJeVXEutLJwUxZwoHyhwrFkmR",
  "key17": "2uLXzJCQWntoyzLbKtLLvBswvVCQrwJ8vewzBwje1LkVk2SF5M8gB8oufK4EwtU5UemJURrCcvQBd6vk9UpsKGmi",
  "key18": "5m63c9tquRRjs5Tab49oYYGXXkbcyPB5mDqFUneSaFhkKR4Xo3BJ6khkJVpP85pBg3yGReoAgfTfmHmwDSFJW1xR",
  "key19": "5guM9CB3W6Jidd5kBX9HJBZzPcUv2MEiqeWXi6bT5VjjFYBH5B8FsJ81xzaxdkau1Fi8ovieGrFZV4p5W1JKKDS5",
  "key20": "2LUKRFmgeuK8TLvMkvHZMPDTmDRbySszZ5wDH3vAcXfgvRSgiRDhj4VsY6csLVKmrjbHw2rDNiMfHKG6Xyoc4mhV",
  "key21": "3WYnFji5NVzQEgsD6HTGrKL3kT1y9KrvjZDvea9Gu6odv74UE7rKDkjw7EmnX4AZCoqJEgqzYqgWLDZtQCzGCn4D",
  "key22": "61AUC3nksvcMZNt1Q9T1bMbXBvQhkD4BUjJco5bAzD5rs7PbK9WdwSR2p4eshmWK5V6iTMBmA63kiLJkWVQEnCmi",
  "key23": "4nLFeLcYQHZ9qHu4PirXpUfbiJrPkEVXopDr7bqydTVj3ExLuRzS8X1MgdyqCmzEngxupZsQyaFsMJcn9KboELRw",
  "key24": "29rzYFgrmuxQJp8CqpdkeuaEppe4tPMWaoxLQqTwt1s6D9MgTgyd9QDvVGEprhHwreQQkyj4TvyiDHMV9gXi7yih",
  "key25": "5Gyod7VwEq9ydnL2otbwLuBTg7gnX3xHg31XdmLBUP3bzmsgGKgz7cPbEwP8wggjEKL7rzDr8duL17MEXrq8xXw9",
  "key26": "2tddRhF2VgC9WhQsw6Wqynu5U7rf7XoWKuLTdKtZzqU4K5JRkoWPyUYXVH4yVRPYrS5CcVV7was9BA4mDVo7knus",
  "key27": "2iC7zTNB2FzDMSRhH54YceoxNTnzbx99aoMGp8CKvRy3ErdFEpihFahjvRXyWvB2jZqJzsCb6yMzBSyiMBUMVJ4g",
  "key28": "3yaPmQ7kAbrgw2CuMoKhzBaTgnJqteufCzVDYW6BQcz2QN4jQNUu1dPhjtckx195TyHXCpsfTYP7jE56PZqbnP3j",
  "key29": "2zPPw1EbvsF8shKw5BxGWHzehoeNQdHnxKV417xDGEZnsK81GeNmVCsjzCySf2tSgBFwN1kYu5wEUmJ6zzRE8EzJ",
  "key30": "4g1FcAn53FWE5j2jNgiKd1n6EXe3VTFpUcmbaSaqzh6dW1AvrASxXTezRMwQ4KgQ3R3Uh151YdLSHNmkTcp5hZZd",
  "key31": "3HJvmqkbSMJ7pT8fTBsXggL73QXUBrzwU8F5Q64yUtgDeAHiNcH4ob4qc1ApwqrgvU5BNXKTMyUEKy2fL7yA4RNB",
  "key32": "2fS7TBz7AtDdPe6RcK62UDGMLtUcvNyvJV7vQvocqPGbpBAccDbSsLPyRwcDrHkfxTxZFQeG5pDwSCLDAfziDYDB",
  "key33": "2qbJ2EtJMBsUBhYTSg8vn3uJ4Axs7smgECCu8diLzLdmVk5Fes18U5Zzhq9E94W1tt34F2xvQkt7ptEfnrZmEH7W",
  "key34": "4WiVDhh1BXdrLYH3AfRSC1ewVXEHeDLyPjHTr9Cpymz1SZPSFp4vhg9q3aMfBMivNPk6JZJuVFMqf2JepFYVqgFT",
  "key35": "3jECg1cC96cqB7P1ot8GwqdGvUSbSDdBFgzN2YKmvj77Gcp1kGUFpqcyyt9oX4LxSRCXSEzBLGZhceqFFfbJwimr",
  "key36": "oeUusu6EuY4K3GseDgJLoywgfhPCUgAHkDx44KgSpwtYaiSxSwxc5igkHZHHYasTUgf7uUEVEeRhWvCGHs1VEe2",
  "key37": "5JEo511ugi71bQA5Jn4uFRUnF9tjiVwqcW5yZUq9AUUJkgZQMmzzzxpbBp172nJUHsrK2z2jkCrZKh9WKqyLrYnT",
  "key38": "HhMfT3PoDZRiYmJVqeRNefPtSgfFmvXuAdfcvVhJwQq7qA8dhhUPBftttzCMxGtkgcoVRWzVn3af4DMkoGCmZeq",
  "key39": "67oCRPKE7GsHZu6sAgQC9d5n7byuksiiB4nPw31y77a5U1hW9qQPqknsnxdki1MuTZc1pLDgrwUaThMi9Jtmqda7",
  "key40": "4tr8PVUfG5Y3MV583sbEg9svPc81gtFYyL2R2hbBckJUyLVKgceXp3vw48P4GULPQ64ykSgcoyocNE8XYHz5EsDu",
  "key41": "4RyVZkyg8ZRNvrMHwGtPXcYDJtxudZ7WU2qoDM54z1vgFJLL4FR2AoaCUCbsNCS3Q95KsyYxVEWwhvF9J5iyXxCy",
  "key42": "4DeMKoGNEnm9QbdKDQmFuxXzY7nzJWcsGgWin956tX3zsV4tAui8zy4XZwuw8ALsiyNNFQ5nWJsLx4AbNLL1r7R2",
  "key43": "5TA1RaJuBpCDcGDRarp2DZLQpuiQQRQp7m25xx3ESAbnFAPNBwMHpHjnYrSrQLLpAps2VEPMk6CRcEPxqogo1svL",
  "key44": "4bsrJW7bAnbisC8jqNyer8VP1ZyehAgkGXLMfZuhQUr2JWzAmUnFtv67q7sWvVcQomdyfdmgBafmDMEXMpM3aCZP",
  "key45": "NpyPyzqHzQh71rZkH5GW4LPKFpX1xEXZ7BMwfpgrGeTE9M3d1BD5bgEtQGWfn413CpHRRZbit3VEYxhB3J6T1eb",
  "key46": "2MXUV4vZmGXsAQ9fQZCr726dGFF9JV6rxt5WAcXrWuPsurEkFjeXWoH1bDBxA8d2M3gyFV68KSyoyTkHqHnV7vcp"
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
