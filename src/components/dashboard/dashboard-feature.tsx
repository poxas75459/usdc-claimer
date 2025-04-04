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
    "3988o8HNUR2Y3widTdZ25pGP7XLHnmByLdkuasMqZ6VLUyv51NScgspw4tY2n7HW8oFcP884Ax6HuuZALdHmmyzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jR7SJucdwe5JXvyN2uJk4JrHKhAYxj6tffGaC78qetpCH784WZGZrTLXdUmNaH5ZTnt1GEVh5eeFqUhLrUgxHLH",
  "key1": "3Fvbg44QCy8dncE7bFTnCw2jJJUPKYe88P9nULDQXEezY2RrT2K2omyiTHkAzbcTPab63dZTsgmc6FsRgxZdk1GL",
  "key2": "54D1PvNvY8EQf4Xfac71QU1ukG98zvvNfu474fh6pYRtH6zDyiocUcZs8kY15AUibL9q2dv3ip1BsJgRab39Zdp9",
  "key3": "ME2BJzbzbSH295hGfP5mck6aJKt6ye88JGycVmLkEXuHnpgRu95AUn8H2eQSj2U1kd4rYmDpU8VnXokisLPLsin",
  "key4": "m6qATT8BNiSkEdufmqHLZdpqvMLuBMa4uFKqJkTaHpsswqdmddYBQkL84wZFbhdtmbTYZ9mWR9BK8Cwhj72nhhr",
  "key5": "2pu52iNU9Puz3dXmF28GPtE8XoL1uMB3MJifXGD3QDRrxK4YL2B8r6phPYxmJQ3hm6LK6jhNgVd2hrzCcZdcTQyx",
  "key6": "3djDNg9Nns5CdxXmkcdALQ4Agr3cTjEVBtftPKXRMdvFSpNSR9ZFc33QziNJ5BATuWnPnoTkchLKzCG5Ph4TQehS",
  "key7": "36bucGqw4g5wF6sigd4M2NAp1R9XD7dMK8eRiHC58rNjxPTVY4qDWgYRFkva4UxVLnikcmFhkNdZLujeufkm3Kgn",
  "key8": "Q9Q1byRSPTbsoKozEjSYZvakpPnenVoHgRhefRjHMCyjwpKM4WRwAc626rGosAzdRBXyWsUYRkXjzKYTmzBiadm",
  "key9": "4Ygc43cbqhrXCNHTDm7N18HWvnSBXnfhDaouwLWNAY5tRgxnVF9cwebcPg48vDV2d3F37LDAt5KdEmzTnNxd3ogh",
  "key10": "48csX63BoZyXSb5CekU3GrHVbeGfCb6dyzqhJeEbcW2pd1w6D41et263apSVRfwVPKy1LEDYjh7W73GcX9QAfowr",
  "key11": "65hFAt5FXakgzSmLSdJ2mazWvuJNAbndGdyUCMLDr93iw8bSn8uCMictvDmkNm1yuqshg9LK8hwcJqmGUZ6zcfDB",
  "key12": "ipGSfmU6sjcL9fmyohsrq1E94FZdtDi9GHRRWANe8WeScssayNu4rjQZDgAitFwk8Fnf4jgbvcBT3K8tVx9VAbW",
  "key13": "5M9yhDqZ8W1fky8cccwXQLy72DHtVPZC6omepcz8WHRgW72V43RZFEXLwhjvUBMseGf5ssuio4YqcbuPmmpQbXXn",
  "key14": "LYPnADuQGYTUfMPiqbr7zhjjy6ave4rDcUVHsYybQspuUvATY27CBwasLvmAFmAxmSSvpbMaVEZSHhwnVA88sWN",
  "key15": "NwGCZR8oGdUBvQenJkQzvHwgFrQmDXPXkZ9grg2sHvAvtSKLddk2VES8PNqba7gQJoyEdQFXKbARjM6x9oeA1Kj",
  "key16": "2YNMzTBZZTJAgncQgQRk87ezydjP7imMsoprPC6nZCzJe1AL2ASUYk42mx5NpzpemhxhvPJJXi1nfvDbvyvnudHf",
  "key17": "4VtgK6S6QMXaN27pv5PG9cCdAa5SPUWgiy5pxczEQDffA4yErVaVQeh6W55aruXn5waZ5LXFy7am83qXpgywn7Fw",
  "key18": "3kw4RsiAS6UeFkekhiccHqTFnw1J2gVggVGeZqn16ALknG6tLZs43yxxupdYg8Xtm9zcPwB17Js4vRBNkwvF9EEY",
  "key19": "2k9eTzTDoXAR1gwhfPVAcMPzq8C5V3nLSKoWDnEvTLSgooqF7vfVAtBnnwRFyNEt9YzDT8ui2GXyWcNphbDxCd5g",
  "key20": "2ptfRTRxsW5VqZYSZSrpNNcqFsm6wypFLXvWDTkPB7W3GVggeDLyB1XvtEPkoxCDNAmqKpb2vT2R5v4B9XByUJ86",
  "key21": "5Sxt7zo9uBD4u4HSGLXyuEfekLvoDzJndvV35jhm97xHQgDEfuqAK7EMHWrNyLXEHi7DX1LRo1fMejn3sHwPw11P",
  "key22": "jJV8B5npzoBB6sCM3xnsVAkh9GjrupujgEzLKkwdKBCXkN9TGjed5u67apjUUEzzGva84LrC4EDEotnVwqajW6f",
  "key23": "4B5CtUp7c9rJWDGVVF5uLUKT5VwcEoFqN4QUdyrz36T4UxqTj9LnxqZFfnqX1QtDEf1iqb8M7Cz6kCBff6KCzpy5",
  "key24": "2qc4XoQANX4sFjvLYTf8y8FabEuyvmcGLUk5KBvMjsZa4q6c88RjpFVzSZoeeuYTykYD1SdW4jV5qZYZNfE9dWxe",
  "key25": "r8QTjDTAaWRdHmCPHz7Z4RAhuYpT1zPTUgxKKo6kpwiquunNv5EwgTg8WQcJ5YBRxR7n6tiKhg2139c1HHryg8T",
  "key26": "5sdjpRbW3nEe9Fpv7vGRmZNSYZi4ozZcPtXZNoUMWFGSEL3k6UGNT61Ak3HCSC9rDVGG2ioPDuaDVUDcTf3UWGmq",
  "key27": "3SFeC6CyCFVAtQ6R5F8mCFEjHReLisGCRqgHQpv21Ko2UHtek33NNAq9VZTpfiVW2btAMuAheGy68Y5tL6PtRpZ8",
  "key28": "5YCYkQWp9vDYQpTR6iureQYYZ8KC9k6gezqjsD6rS1R1njPbkDHH7NaZnV2jwJArum2nbRj1yoVLKEbx4kVbCTRM",
  "key29": "643s33u35RHM3NWpj94c3FE1QWNyj4qNkNnBa4FkV1bKQu8bquKaBUBFKTP43wCjH31A4wmB95dLk9po4yAxyV3",
  "key30": "McB6WBH3ywgASWnsBXPcSqs8ckXbUs4MWLRwdxjXg2ke3bJEeU9tDqFetc8Tv8PXoHsV5ofg6JPcM6aZqREh9CT",
  "key31": "5ZyyTYBE9KXuVXk83qjMba5oAfaYrRYQE4cyMVCiWeaTcaAdpNNkLiHT7FMvUrXWiyqXq7aR6DjGPs23kWjRuPKM",
  "key32": "2uz7NibYiVhEsEne8BKJaPQALtjatukR1VbACzV5AA1Kkt2t5uqyGvVyG7DPbGHPRwu27S3o3Uf2VWcFi3kyHQYN",
  "key33": "2CfxNCzF8HaaBccgaSZG7dAU2oAnqBCMts1aQ95kw1Sv2R3vprL11stLfMUCjHi3kWr97XKyvnpjoprdMqRH3QdP",
  "key34": "zkQH3qWJ4VhwThkpGSttesb1e1uNnGJzE9ta1MDrNCT5QrrRxMSpWXxY8beyQ9L9z8rUjmsL6rPjpjyRyGU4x7Z"
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
