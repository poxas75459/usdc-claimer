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
    "2FeECbhKSW4ABCYsmuWEGXuQNY7qHWNRNTYC5y77QUmaMXKyfP7Gy3qwTacSaRpiX6bf8naM6poL43vAWn5oKrSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3prEL2CS9rvy8h8YxovMmYdihXBP1oBmtTJAiHBJQjqYfcGJfGeGg2b7AYiGfbGDsGF7S1PNAe4wjBPucMN8etWM",
  "key1": "22HADs7rRAvpQu1DMKvXbWYGKYnhYGAB5jJsgYMZAcfVC9gWkJkj988UXNKCZAtwBhKX29N54MzJbjwFsC8gmqJd",
  "key2": "5trnvpviiiJsQ3kgm1uQbvrZKa8Ks2XPy82bhEMpmpmkBstESNsg6mbYzeqQuapPncj2RP44s2zm7gVERiqwBXrH",
  "key3": "52b42qRAhD87EmKkot8phQFwD87JMimjHmpb1hvx6z66S9R7NqxAsuPLE6NpP8SmnAaPcEFnwutk8odjmbx59SMC",
  "key4": "4Uh39i6V1BTRzFqM7kqFnsSQEAtzNrmRxcK3mpH6svi2DmJzYwAoJLz2RdNwKS91Lz3RsLUkxSkCXeZTKfAvjKxW",
  "key5": "2SJqDnWDf3rfs54B8gMZDD9dVz58NUx8Cww3hSfVKbDAQuD8Ddb3DKTBEiqg9JiwSstnnbkSo7JrVU1yGdxh4Rsq",
  "key6": "3fuYLwPA6BCxusEiL934QNYKnfyWLNAjD2Dwh1ynq5gNc5UCY8RwgSxPsSyUyNnaxSzB1PmLU1XxWBxjJ5GkPrhZ",
  "key7": "xVhx3wzwP3QB9S4gV4TmPoM4Csk3ySZXwB6pZz4ybNLQrSMPE6Fu6FbnzMqMiXq7oTgnMiEEy6TF97dM1V9no42",
  "key8": "6PbsigEX6X3P12g3ZuZ7CrjsG6K7ou4kKbYA7tciRh7dz2RVSKLVEbvLNg1NFp27nF8HAzKYmpUF2aYs9A5gwhy",
  "key9": "5xtqPN44oSGxXah6KVZGUGJcTEyVZUa7Bdo5PKBf53nBaGxuPg4oLYsWhGMSqb5U1NPsLi8YaYYnpKbk36sCkKfK",
  "key10": "qi2uMd3szNkeFSnNYXS5BLqKT7Y7Cn4rmSNcQDneMirT4JximaYmqpshorwKt8fPnTiEGhzBh93D6mgTZz6DejG",
  "key11": "3ZhbkQfVbJ59Y4VcCC6dh4TNmF3dnYvnQEbCiFxwSKdFqGJLzKHFgC4rDht7MLZkWsXxXSdm1UDWM34TJNqKiYK9",
  "key12": "Q492ZhZcHehjTp6AhdFXpVbLnSFupzRmV3wNvNrCPyEgFuG3R6KfesyDvqxek91496RqBSz7YV8jxTeyRBNZHs7",
  "key13": "2nwxfqdT49prgCN6FxmzWnLFAWuJpafEf8HSQHcHAbkhjenBWGkcyCS2nTDjQUF72Kp2pehqAFgBCLM8QyHDB1WK",
  "key14": "uouaFjM4WZCSempxH4WfqCYfS5nrNDo1XvMxEGGyaSJcLpQwDCVXPVm8sLuYaoUicCwFshgi3ECk6Q9CZJbkDPc",
  "key15": "34xhDLt8uRwrtWuJZBhLhb4rfjaB6EhvXKQmSbMk9VHkupAsEvSQ2dXH1RjonEwDdrFp9znrBmnV9DJRpU1J9dkL",
  "key16": "rvtCrmXRNLKk91jbv9mEzwgr5e1a65trhQ3xg7S2pQwdHxHPaf9Xbz1X9gJkJXXCcEhDqbUbB4X2hbrujSBp5E9",
  "key17": "cHZZGqVGpq2H1ia5ghdbvRwbdmJ9j6q3jrFMLKjMvZb6au77vvexmis19yqJELSSweE16cY9BXrYU8x3oWsjMfZ",
  "key18": "3KeoY2K8qmhvi8DWx3rrsWHeaZeCzGt3hPKYckVwKQ92GHmgoN6emDFVNQ9RYfqiqQcpqHTSmFHAruRSrWmPkM2C",
  "key19": "5MXTjwmJBi85hr6SzmddwwNWfLG6XagFrmzzgoWrJ3XcZEbfqA1kz3y4oGPqkvfTLvnCUYw5FHUzZcQa3Ja9hYwk",
  "key20": "64aDETQ7REygWCn8wzadFaFwSEyvGCWUUm4DULqbjpJnMNkRq5HYaPE8RdWazC3DHrrE9UR3cwvrZ7DMvKwP9LYX",
  "key21": "TRGTF3gce9YqcPq4cdmrbFfdjvjykTZCTu8JdWUsyyNn5z1t3K9DGfVWFuHFyUXkBCg24NFcJW3JxYrbavyY3GE",
  "key22": "5owtHxGSjur2769BSyU2Z7q1HNFzsufxtCBYQQ14Gj7M3U8Z8Pvswx6YcUtk8wG6UsCHA32Ng56Dg38B9X6L7PUq",
  "key23": "62jps1vVNKJmrJ3i2kSjs89mrfD34TvNPbJ6mhbqTqqLNCbrYLQ7vvmUyRjySaKebP5ETU8Af9UdBnGeq4LoaQEz",
  "key24": "5mHhyEKgU1uBiKMsKCsUvkqfRxjfkQF9yun4XrBft2B6fzkV2BBpWctjD1kGxSZzADsyU72BeL9xmk2FTLfw3aEC",
  "key25": "3dPDQFKbaQk8BT41wsMKAGUbYYpf4JtZZC8SHCEheTkJWULzfpK9ZGa6LPZUP5QqFwaFJzAN5P7nYgBuNeWXL5GK",
  "key26": "3WitUak3qVMpZF97R66mMV8qogUD7oNjmrL9PFwM9F6LGjFwgUXBSVEi9usVp1iJ6tFr3aMWcdghGDQL9MBe39yn",
  "key27": "4wtwEXCxpc8CiVYeJCHf1EmS18Kxsh1sfqFaaC7NJSSJwn1SXPcaZYo94BBeSRSiQbuvvhru1VfGkSwrro5zkp9F",
  "key28": "5raV5Wj8ymCHvJJt2XVSRZ6y5RjmbSwi61Qxew6tWwAcLBYTjQuL9bvHnj8MLLkHG5jMWAgaQwY2WmJGnbm4gc7H",
  "key29": "dg7WG9PaEY677QV5sDNccE8Kk46d2n4zNhgEfppmR72g2eSh5fcCn2BqMdRjzytGTLtECTGeSbfQc3gzY7qx4Rh",
  "key30": "2mG5VJUrqWYPDkRZkbWttrVCUm5UQP8HbqiUC1TBjxZPDwjQexihhfnYtc8TiwSJwyRdvrKBdvnxdFvXTdskZ1AG",
  "key31": "5GzJc5YKyDzFXoTy6WVPN7K7vbpqPsf5Kah5C1MyHhraRMRhTuQq3mZtmGmh8CuVtJiz3T6Sb21UH8A2a4me6hq7",
  "key32": "4bhChWxiu3iWDtuUzhfApqDTPimD1eHEMk5A57vuwGYb8o2HEGoY2Wyh2Ug7MzgPRivj1XxRFkA1ggoFgRgcVbys",
  "key33": "3fHnB714UYVonGNaZB23q9MU5diA43KnpiJ88GYLY64mH3UDmg24Hp7kTCXZqPyP4UrdDKeHkxVNKhW8ikKnDX96",
  "key34": "5MNSQt2b6ieFryqB1hvTrCUFxiudsb9awzt1BkWx9yja8TwgqKJvH3hq2fbujxxKqM4iK9NXS7dUxNEwhkfypUee",
  "key35": "4EbLuAMdZemwrUdp4AE8FKfBrNdEcMv36ZDXCd65T4nh9z7joPXXsWk1u9P4qQfFiThp3bdNbUN8M4qHDYgbZ1Q",
  "key36": "4FjtdX1MDtBGMRmwSugxoTM6EeTZGyuPV1FpRBW5DbHmEDXEPmqvRbMz5g8jTtVJuPJ9NowSmLubMkvYAGykf4dE",
  "key37": "4rSPChf9DqgB63EvYU5nwikdXKJkkQJp8rCGw4LBoSsQX3HfTKHRE1eKaHBCpGgyDimsuEo7RJKEbPbGmhVvQB5T",
  "key38": "5GXt2y2xERAaTf1w927aFZU1PByrDYAXQ2qC6eLL8LasvzYVzQLemqJwaWMVCkb5yLCm2a13huA1du58Zd42G88a",
  "key39": "2GpXhdKea1jpfDH8ZKDbXRDo3zDVqnk5Dxb5FPEed3TRRAMLarSUuR6LUbacyaujFW1SNijvaqpaoSXmdL8rndb5",
  "key40": "2XQGeA7awRgqc5eSUdACQ6UtEEZF2s9DV1WWoqvWurm4y2p7iZd89RvATehh9z49aBkooRMVkmqgNnsN4ecvBp3a",
  "key41": "jUbYBFX7ZoqRtCLNjZCWjN7a5MCgfUP5M1DxX8UCkFsK8tALTDbhCWVrpa4tNRYEgjGehSezsQvVHSAX14TDLVR",
  "key42": "3r9ShQqptMcbRYjKwQjiiJZEvYAUJ9YTZnDfxhtu18W3iKB144KqiRgRHXQAU23cUX8pZfBMJdYMLYc9vpjXZiej",
  "key43": "4nrqkgLSV4ZfWWtb1dz19tNeccyaofvThbrSRd4zAQ793yFS5VhtTYRVJxGZ6Z4jNLDDB3QJZ7GuNd27Ah4szXoj",
  "key44": "5sn4uH7YvrgVBh2qYJ8kPn1vdjGWXHE4YznqcRQDoEs6N2jpzYEDpQi7DdudppJZzTmiPsJ31EmiL2FCrcJYAL2M",
  "key45": "nCtULjejsavrvufCwDyUequLa2A1RDz8PEd38k61RtFbvo7zCziZxEW9yecexdcJSHAxiG6EzrXeX1KdhiU7Biz",
  "key46": "2f7i8n76wnmJT2TS8vwUZwseti476N9qbTVidp1r1tRZpyJnNNvqdEApVSSCatfMm6ZC4XtnWnSaqdz3o9QmgCFA",
  "key47": "4xaRtrKNceq2BhHYoAyHCNX9KYSNTM2qKiHwxvv6PMMmvU91ghJhMapvUmAJBUA9Z6UWJCg1i2mueWb6qUPQjZpc",
  "key48": "5JTUfc8YuehS1T7BoXCy3nBn51Jd8iZGmJUMqtYYW3vdhnxe9yGGJ2ZFGTX6uyZ7k5xZwCuVnWA6yAWe3TGAurYm",
  "key49": "2PCu5Q9Nsu1cYJjWZFSCJFCvqV88U75WnM1hxKjpXApytomLvxrUjxtRUSWvcgkJ3qyJpfdmHqqM5KkeWnuyHUcd"
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
