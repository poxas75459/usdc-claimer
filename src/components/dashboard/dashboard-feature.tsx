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
    "2mVpBLNNNfot2EBSK4aN8ErPXFzcsgpyLfFvQ5wcjLfAGkYV6JLQCdYBNoUdhdzQZHgCJypg1mApjZPUVXFqbTQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WMyN3j5DFMKJA6pfXCYn84RZAw7AVhQQAwTq1LyXCwKtxY8qRDBDVYVAmjMK4MopkUJxCjQf6LZKhR598kxH6UM",
  "key1": "4nqmHqzWiwfrZUVX3WhobNNJCUMytVD9HpT5BVLTZu74Zf88c3H53SarpvL2YyFh7DgAf392AiRnqwSLJB1v7wTD",
  "key2": "2RbTwRxZ8YesfD8MZS9KsvKoz4fshYUeQE7dY6QJsPcVC2byX7aWMXD5RVxoGFzUwPycduF2uLYDh72o7rxLCn4L",
  "key3": "4pRUT9EeubM6xjdHJpBURZEj22XPPPfeKDt2PX8o1wXKgtZSF5PZHB26NoZwDAJzGEBuFsTaU2dkptFLysas3Kzf",
  "key4": "1HBqnjFwWL7xwdYFvx4FmCEr7LsiopU3CEK8D7kR7x3siRFvLGFcE2DNZZAiPytHKuKDktDBLXPYBUGwtacgnN7",
  "key5": "5cPitLstbZNrTu5A6VTaZYki6i5WUnQi6c4h2kMThd6NUP5JStLYEosTZ6GfG78kxbkSMFcqh5rNJy42NDtcfUrU",
  "key6": "5AzGfWYuoorszn9AWB3qVkNSdbyJ9t8NE2cUZnvppeV2jVTDJF8nR6JHRQiEW3NNP6WXmpvqcrsUwygoo1J93tcA",
  "key7": "4XFkLhpG2qSfHwJwCSVQ9vvXw1s8gSCRCppG2rSaWg6qceq1mdbNfKgh3kRbK5eFTVgs4fat2y7xHgXgrWMPmWvf",
  "key8": "4guqRX6PS2Q3rvPcpUoz5EPThvpt1f8qvdDwKq3cevqGLUixaF4YJ7HMrr27icpYtQhdFUJhp9PfmE8QsLHjgvXD",
  "key9": "67MtrwhuY4om8t1yrw5sthYvsQGbvT6EptCq88PW7Fpr2kF5Jou5FqRHuM9Vwhv3fuaXE8PBGrCuP94kUbn88WxS",
  "key10": "2hmwbazjNSsRXe8zCuXn33q63tBbtV4DvFMQ5pCUQc6K3am6Uq1yhGj9kyn5uhT8JFxyxwvqXRjuEjJJgWKYVgP2",
  "key11": "36Kbr3dZA31K8dNV1b4c54st58PiEQHP89WMG7NAWgzwp2UEFuSN4skCzBVS44Lik9mykEqiu78fZn7ExCKzLcs",
  "key12": "5E3AocWrQNMbixwsMAGK8x6hWGMMgppyt7c5SvF3DLhg97WoNmh8CnCM1KiizCnSzPXzHNztuc2EYED43BMsu6r5",
  "key13": "2HacVuHSRjMToEq4GtoN3jSJ96nEkwwzULnT8e9AVp5CaApHkCMhSFZcgf3e7zqhDF4bobe9V4b7qfXdZNdh93RF",
  "key14": "64kQa7Pu3vQaQpVqzeiV7o6jrkXsTLy74Qw1whxLzZi1XKNQuKb4BXpo5axdQs57HMRGk9EQWitvPA41HPsjhafZ",
  "key15": "4vNyts3k6bCwxWxdftiVFSUC3UeP4g9satLhPcVBHWTYqMe3LtBE5rn8nA6XyZzinxjSCyKp8t321uXAsLihb7X9",
  "key16": "31MpowR25rgtjGbkAeAXL2xVdS7FpCn38GsRwUcKXmLZpT3y8PEQThSMCmAS4xNkj4L2xUX9sB96jvDDRMNYubLj",
  "key17": "2bEYVdMhoJq8zSaZARY4BXV4rJJNUL2q3TzXRL7Fesxx6HZv6fDvsSyxWkD3DQp2QVRxWMzYo6FbAwv7S9P81ccp",
  "key18": "5Djp1qQ2oANL3CfrDzPPZF7v8zZgvTu4JHqLDf6G3A69pttjUTayuVd77E1tyLKC9wgTSSFk6mUju7iVwrxrhTrx",
  "key19": "3UwA4HFoHcdVL51Vmmo3WkfLmnTQphULJE2QVPdgeXmxwoeaB4bbrWPVuQyWPjjgNboS76nrLwAG7HptZcwA3bs8",
  "key20": "3aEujWRDDAi4VrqKDMNqMMzcoW6qZv3K5xLeohmtr1jRuGsX3sn9NUncBnFihHBMGJemkyPhPxdnQhx7rrsPLHhV",
  "key21": "f4YszrTZCxhT4GxqWykD3TxKBDsZDdGWJvL4UdSLKieWsy4FLvB4mywkxjGfQtxWysZV15RwKwRcpY6xT85m7L8",
  "key22": "4a67bWndXFYu6Kiu8jeqHhPUGfyyEmeWEBHFE8AXubwKfLVMyLCwQgaebb3QyCVjjFq6RUsSoZGKhkubGpBmpgxg",
  "key23": "4qNLTprWyn4zcoLKJ7oGnhPs7XCUwJne91ZnDA3wxLUEHBGZBRPaapBXnpV9aBDmQ9E7GkNrASAvJEA3Hpogc6As",
  "key24": "3xFRcjoGVMHu17k1UdAr1iD3GhEg8uUiNzbWUAL1s95Y3FYcnn8FhjmYwPMJ1sGQoYuE8qrCQibo8UXM5mzpSKtB",
  "key25": "fcgCRac7tJomcDJ3QEHKkMEuqKNK5Vmt6uagxh47DdMgkJp6YwCdPnkTPz1QJybudjcMMGTAPVDh7n8GpmFb4NB",
  "key26": "53jzLekBgKUp7sUaVqY9P29v71S94cC6yrUBoukGtSQoLrdToCF4pcMcWP4hxhLpxXZ79NQPWM2rCArzW18c8ucg",
  "key27": "qeS1d7Fp3LFwUvSPH2wwTUo27G1A9DDR6xHDFXZg7ffQtcLhtPS9hn3xjwwWmSAFLjqyV8zNUkDPqF5b72caYPm",
  "key28": "SBE339kYqE2cyhPajba5ucTBWLGdhkjrwhePFYEJmJKg6zCPCqesD97TYmpy5iBnL2rRMFj4J4rN9KLiSUM7WUg",
  "key29": "5AUE2HqcSg7ui6BsmWG4K3q4RFQLFhzNJH6CCqCSYNGKFAb5pJLCZ1S3sHrD6SVJo8C3sxKMgXKjpN4hesB1gQ2G",
  "key30": "tqX86vBVtDHb8osA1B4m5YaCNvesCkz8jvDgotvMCEjCQzUqn2CmcYTEcvp8i5WLciJuUxCvJddb6V9sXaVf6pX",
  "key31": "3oZzai1rgJdrsJmLKz9ZTg3krA6huD96TxL49D9kRWPgJ5xoQHwxyJaCH43aKDaJKvxePvN9pgzHbKyun8QXm5Mb",
  "key32": "2ZbBymXnDkdX6D5HWsJ1oXUZNXUYGBUbNaPbL7gpGUVaygfMGZaEfZNype9rTP5qRG63xFTAjcVBZAQF44hYutQX"
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
