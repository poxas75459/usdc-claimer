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
    "2LzQ6evbGd5wex8eB4LsAdzdvtenNmksMgDwJ6RKEdFDYNtE9ro1fcjMsFLd5EEFGhsUPQM2LjKirTXWL6PYVgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iW1hzBJCp5coWAqUWgc9wtxvA4p6EF4bseULH3xyesje4sAcHpApCy9Hj2XsThbaPDXd4h8uGvNttkeAPz5yy3J",
  "key1": "4ZST3aZiYqdLxn9Sftmvo7mA8qQFWxGCMFqbSJ2bUPxzRpSfWzdPqzu1axct9SHCwpeyGBHjnXW8zTug5p2Ay5ZU",
  "key2": "4rFiQ8T3VDwD3KtdGVhKKHkbJmbq9r2rQPa1d2Q81FqM5dfUSUYtNnLYY4Q2ez7s76z6Fp5fZ2vNbhpSWP9CFKBU",
  "key3": "2YNtnfzHycV7kZaDLCZ2o3XhbGv4uSeK3HgqHpE5gJ1mGQeUKyrEzZtzcxbcyk565voQcgt4e1xom1W2bvtXdntr",
  "key4": "5ZEGrureLrHCazqDzwJ1wD4w1zd4vXDAaAw2Rgezh9dPGUBHbZpoonNRy7RBBMdHiD4ytySjHZxiTKVwCp8QYGZP",
  "key5": "3v2vvqpaSxUKHcw9PvvfwZuqdgep9KC66X9Uf3N7KeJ1qzoqd96LAmGrMk5UqGXyRC2mGaru2CsPz3RkJMMFmn3U",
  "key6": "4PKbbxSmajNzq1oSbH4MEQWWi4DXm8B91dbAmXuHsBjrnLndeAtVJt2cxkvbTPtc5aAi5c9k2bDTN158Z8f8CKYB",
  "key7": "2NLcvcrrUTqu5rzygSotLFcyCDPSKLRdoqhQGaHNiTuHtCYPnLqgdzyEzHgqAxnNYafEKivFQq5GvmGN4e8LKiYL",
  "key8": "n3JocBnaVseGVU1KqYXWd6vEjZTHWyPo7jQSGwX5QjtGmegSXkTrCZ54pJPqojqfp1Jx5bP3wzmCZtbx3UFwv8R",
  "key9": "5Lx2tERnGTjuzsnoErbyBCgb1ii6ijkcaEZuhVHnjdhuthzmrt2sK1bvY9F4ZWSQoC9V7KqYpWWTEaYmQWCUw9p1",
  "key10": "4DrMRf9dv8AkcDxDunuJnJSAMw4qVhgqRPfrUbCM1xjg1ww9dBXsxxLVx477GPETbnUPtUJccHaeTbW5tEgP8iEV",
  "key11": "4VycNG7tK7XKAwBLuygHGTgRideCSQr1fk9bTxEkJCDLsZKBxFfg1BeNWcNzBtHzt8ULEKkzBDqiC2z1z4GdjNon",
  "key12": "3ccsLeFqQDfUoVDpP98esDus6sjtKcQDtL5KWsdJA8xqp558W9nYcdGmoNbshQoHaQN1y9BdHYGTKm7NbMsqfCT2",
  "key13": "nsEC8v4mThaTcHAxPpV29fCVXaGn6E4qtHaiq7iiiSHJPSUp3omxdKj6HCJc7aNjrbCDi1L65DpFtKjUQUFkWhn",
  "key14": "5KYBB56dV2DZfurSq7aBNhjcqxD8epkvDsN1suHkuhYuk3Ns7zZ5Ztbup5tWkXqykAJ2qQNs3vT4wCEAoGT68x9d",
  "key15": "3vF9s6RrMHdySCJcCNzzmzLEnwuxUJPDy3SLwsosWD7aXin3CkGGP3QmCCJMAJFTzQvcoANM1h9g8XHPvcnxHqgF",
  "key16": "5migf1xkQZbZoM1i6Pam3QzC56hFwRNeUPZMjtZ6YBZmx6uUajKeJ2CsYgE2kFeYQL9QeaCKQ9NHByLKq3CM7qdy",
  "key17": "56BTM3xstdTW9TvpMNuoTnRAZ9J3ecoxhmaFYkpwA4qpnGf3F5ztzm2NQWM2WS1idDAoU1vn9HDYpVnti6nccmC8",
  "key18": "33LnJv8E1o2dkAYyZ99Ag2yJ9XRx3GYGaSwjtVuZoCs5tQxAMfgPZyAuXGZNNL3EV2aE6eVodNnW8rjy12fXJsHj",
  "key19": "pU5sThaFCbjBFXC4nGpYgVAAjbT7CTTeoxZ5ihDHTN1Lz7SkC4ytUAFoCJWbuDPBqQ2QzTCHmukD656tW5bmKRS",
  "key20": "4Xc21RYXMAq2WEQjbJAxyTZvWP2X3HS45DgT2RzubntB55NYWvCc6QnnNERHMRmDqMjV2p9vi1eKWo82c3guPTVY",
  "key21": "4uypBAWzpB18JAV3eeAbdxWxMcYRXEAC6XJ4vrmpcr3j4egFdZP3yRRXpH6bE7QvE9Dx2m64btt3mefD6YLZ2jT7",
  "key22": "56jm35jJM9jE8x81Hhhq2GHAkpUP8tNtiqCMpC7J4LcUaoZWk7MRqWRYQAT7qGHEx99gGWzBb15mHoivzTWdz5qj",
  "key23": "4aFRREkoTqWx1aPygvP6g5EgmwwDnfaYfNb2eroAkPM4NQznkcrprQ8v9LNzzXp9rKjpQZ1XDenxu4ivLAfzokqo",
  "key24": "3cTRgSa9sdurdUQLWjvq8XxBvq2EBgUUZ4JboyuzZjnShi3BQiBJpUmyY35PNZEwwXtqahRmTwUQS6kn89AWbfEK",
  "key25": "5W4edjSj3MDJYePgVaRUyYHRdcSJZFBdepioLfsdi5hH2jR2C274fv2M2aX4KM4LCq7bZDtYzJrhxNx7L97nProk",
  "key26": "5aM2YQogWcwEfTibobmnGjEBdfAWay2BAYQocmrqUxeVfaZm4jH7YFuw4tVTJEMz8ge8Xf1TLEFsZyDbA8mSighk",
  "key27": "4vkRUcKaU9UEV6YUJhQzKcqfSTrGeNNibfjrw5jJCeAyUt86rkaiw3VNpTsLrCHChHm7ntPuP8WMrJsYGX26et1F",
  "key28": "5WxYqtEBewy6qzshYUZdqbmNkXhMdEq2smpkPRgN3wnxJ1jAfiUDdME9euVF9TsPxytn5V4U9WWmAYCqeb4SjiFN",
  "key29": "2gZhY7T7Sou1ehcpSnadVbDzBbwAPwnhcEziyzoHbYKv2RLsBKTgYL3yTJeD4eGzGEYgRxwoqx6N3yCxQaHfcXDm",
  "key30": "4LZmTcyx7ADSjWsDv99Q6G8qnSZnLCsP9m1AoGXzRb3duz7AtZPPnsqwG29T8o8UBaDTUCZv9f4nM2PAmy6uYMTn",
  "key31": "3sZwYVdRkut31pmsBEVAm81SaATrvZ3ML8WymC9QJAECZ3TZuG7srHCwgqNzkF2LJfK8jxfyoXtySQByk8vJXPt1",
  "key32": "iKBdgV7n7UPkCivNyM9WYnreoJnPrkAJ7u1J92ZLBNGTid67N4dRDT4aCCFkhZXcMZ6jXGiKz2SCxrW4gBXCVcr",
  "key33": "4WnWgZcbSqY5TxPZtLrNteHxFaz7LhbdnCyaiEzd92Vi3oHtmhVebNaLYHca4vW7tBoB2UGvJNS12xnjEZprP1zW"
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
