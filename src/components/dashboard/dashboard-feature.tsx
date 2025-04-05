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
    "5137iqifYnGLgfM2adfUizizoJnSZ7w72Wy3YHMCDEa7ouxk74uKhj9frBSqPrZBCrgGJPoAQ4MFDyTc9vKckM6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38LE5FaQw3e6Livtj3N5hjjqwY4zs9cAANGdyJp8cNNVYsKZKRLGDo1mHQagk9g4g4pYGKEfrN7YjGN5Eef3Ui5L",
  "key1": "2zxyT98sDrKBJwHgLWY2PbqcWLePDNzLeh4e2bzfcMWw8d1MrR8UwTWu6KhShVSZLdUHrhBZkD1MU4miwDe7FFcr",
  "key2": "y478mVmasL6Ge7EgotY1s48uf2dnarX97QEsDWmY7EfU3XcRuH63bA7CcLRUuiH8tMVLpsKwXEix5jD4mrsPENj",
  "key3": "5JnoymAN5MQw4e3SMLu1v2wAUAieYWRe4MjzNa9UuPQqmyaZiqHdYkxiYGmdbUV6jM4tWmAxXLQk5CPtppeUwAD1",
  "key4": "49wEKDih1MHDRkVbatgL4UexNbWixHnDZ95FLjjK5HBW9eeXpCdM9g9XcEbGxA5ouVEeerr61Z4QcAHEkx6zitKQ",
  "key5": "4BKJS7x7kEmRAqnEXeg9j23BU3CxYNFuMQpbws3GnR45ahPGPQTrpGz5vMv8a17MiS7ZwJNSe2K85yRyiYz1BT2c",
  "key6": "5eg2XEpyFt9Bd4gmwzmwg95Bf5WVRjkbQpguX4k8tRVMbeHEd5bGR3EyEXWvQr1e3Lf2JLSVnpTorxUvyZYvP3Jh",
  "key7": "4Xw6JzCCYoHz88pS7tafSmgTdkVtPjfpFeGivX68tWVxL9ogyAdppgTZWFQdhLoh8CanaVGtJF1L6VyWDnw1LjD2",
  "key8": "5jNNo2CyNtrbHmzFgESQpBish3NHZeeauoHBXx1gfNcR5tveZim86yo7qmLJ7NTjBymLiKpZaLQkTFXYvzv2VPe8",
  "key9": "bDBpQWb5zDZpZvbfCRB8mGfH1VmybFvWAeUfKZ6LeWknfYYbS7LyQfiPpNDzvdj7mC2EPtXT3jZZX6VFRbYS9hW",
  "key10": "4J2nwVmAhbv4dR3QBWRjpz4dsY6BRxpwaiGXxQjG6kmXAGVNytcxPRETuBmThSF4yFJ57Ed4qKxdCRdevuAPvuTo",
  "key11": "4efdeiujZ74VfYgmXoACD1Gd9PAGdDPjGY5FGDvqTRF2BRLoZQ9jdxhytzV1c7tfZyHmnfbR7ExEffB2kjnKSGV2",
  "key12": "46pSSRqt9aJxwBjWiADtvhGHPNayZ8ng8SHpruFjkfYyWFsUpgDM4eNHtv7CrqYNvpHZ3z4PVLMdoXiwMcaqnDxD",
  "key13": "46xMqRW53BX2No9MGfFQApbKb75hDvsa4CJq733QHJuCGUDmPZtCS962YUMNTYkWY2EcatLnkN4oRFoDXdEUYMfT",
  "key14": "Xzd9CvEqyvBwJ7msJq458Z4kzTQb847wxjtA6qC8wPM642rZh8EyimgwrLN27cnG18ydfAFz57t2PQqsDPGem29",
  "key15": "5U8bgMmwBYQoHTCqkwGpoUc5hqHMi2Q2jKRGvveBG1tTwM4aGZB44qJuoZf7YmnVCF56556dkEEKjgbvUTLEzBjN",
  "key16": "o5DX93tGBLjirRNjGnb8Xoa77cqEPMbVEvoZxQsc44WybA4cNAJaxhNtQ6wmEjpjvDyYnahhu25BK43frgUYqW9",
  "key17": "52TSpQJUtLzytsiUYwnAsyFSTLCEfNJo34y8FhN6Q36WuXHoSgZwN2UJmMJsNKK1u6Cg6KFMgSsbGCZ7fWa49BTS",
  "key18": "2Squd8z5rtHcbEFKrudMKYoMuMHPh7kbYtBmmW5wTXuY8Ne25QXemiBJyUKuq7W6wJgpyFvSeRr2sbhLKLcxiR48",
  "key19": "4ffxZQuoZUReNqN2W2PNpHTTwR9rDeySmTWZFDjzYas7K2k8scpz2SE9cBgLWJQnyGgbWwEioKkE6SQhLb4j4GgA",
  "key20": "2YoeP3L3de4qePyi4ov7tdPVgJTbh7h26CnxFAueJmkfPiV73XH9NQE7GHF9doxGfdtb6KQryiUk4Tm5a3rtnQYp",
  "key21": "3NDygrkTAb3a4QcyuibFntVfiEBYjYLxCa9L2n2vMnLpKrxG8JAV7M86SZxyBQ2c3E4sBu6DStLYR4rkdeVb5bUr",
  "key22": "65NkjMevXZispdFHGsb9CV76iKin7SEZneXx4FpRBvNb2JPXkNfoSx7czrcMoaMyyFPh23aYxnGwBkjR4p9xufSj",
  "key23": "2cvQNsEABcobx8bTvgBND72kTxxtAYeF8ExwnwwVnJqNxfaHegfaxoUPfdsAEnXAPgas1PiPmd8oRpsGN2Xo3LPd",
  "key24": "49vNays1XNkwiXZUGb6Y7TuEJDdcsks24P2cyvXimcCr7eqYwZyjfjJc1csnrcSdHuCsfd2mTcZbJYc9Hgk9qyxM",
  "key25": "4iqTYG9XWrdvQEaTw7WBod7uY4oJQQsBMmtwBpaMd7JMCJsjfbm9xuryTSBG39QZf7oHYYWiCHixddJWZhih6pWT",
  "key26": "5U8pMTzUi9LZhC5EhUrcKThNvpDTiJWCKsRmpCAdVG3yJMpEmjgg56fUyp6gSMkYmuMpTDhRh3U6hhbh2Vvk3JSK",
  "key27": "4zESUWXSiNcwidjUR872QF9WvHhSQRkq6fQH5Rho4iwLd4kbj4cU6AVfkSC1sxbZ488WDqV1xuEmvoU3TphUifsq",
  "key28": "4XwKSqEPV46s7yEDXWw9j3BAdGyhrzrNvMA4rd56s2AuZ67mUVoeftRiDgeWHoZu1m4KXwyBfZSiVbmi1PyRgvxM",
  "key29": "5GFUbyLbgxgUxBwQL1LGvvECtxVxFywrNoc6tiNbJ4svu1trHcWfoPd2Y7UTHrG3BqJCJQmaRQyLENbKhXrkBMdu",
  "key30": "5GQ96ZAxj8esLwgyzEwRXXJkjYHQ7UAJnYw8KqUZpKAtk9DCRSRMAUtgMfCL3Xf3LHy3ANYGyeKRyDkmQvLT1JdB",
  "key31": "4yq3YiSnuoHCXtc4qEMCX7Cg3HnVqW8bb1ANEu46CKwAzTDNuae6zZmmi2L5fK9f473Xmp3QQaRiouGJCtAuTmBa",
  "key32": "2U8X2oNHUUaGBA8Y1FNyokbUQdGWhqZSjbMCmRpEjAFymrsuAmYc93HWwXiuqQLCAaWPa99AeHrJU3RwtAwxnrQA",
  "key33": "5CvUZf5FKoHr2HzAuT2rxrJ8mWJMjG6GXdE3z1DaMw4Aj2jKSzWj3sQ4PffvZuAdfCdbytWeY13pSHiJaj3AYbwh",
  "key34": "KfFNxBYUxswuC6KE3wm52SaZh8foWediNBgrttSCkqUqKAC28XRPseE3ZB5PXwdMB5eVg3bnU3QE2MXBPb4sxu9",
  "key35": "4uKoVmSgKzTfvG2e16hiRp3PMfViuCLzETM64tkZ8y6WA4WF8DXb9d3EZTsS9cD2sNFHdwZao4n8tSHwGRJWtrQN",
  "key36": "5P1DN3uzde5esC5QKuzkZTZCgnDVhGVMWF3yFCpRs5HnTPx3rm2KFBVtmvEhzYiJ3VQS86qUbMAcZ7YVFkssnYEy"
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
