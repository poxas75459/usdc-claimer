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
    "2wek56P1RtizxUeyqiZqgRxRfXRiFt6VnxMwsRa6dne3qxpEGwRbRFM7n92P7oSfZbK1y4wCDRfj6WxCSpFCx4aX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uJR2fN9xmNbhbNgs2pRbfLAoodTCXxpo4deczKEVncWyQuSwkuo1qqoLP2AbykDgaW7a1U6PWPaTJhAjJqPU6Tk",
  "key1": "314oX5zG7os39uwMsD9gubMTUyY5yaGXzvY3w3kTLSertE3ws161bxZkR9LAitNNPUCHxJS8VkKyBWufGJ69Bz72",
  "key2": "2EKM8cY1DdhTYJYnBRC6rn9dwjo9WcY5LREf1ZJRyJG8J84vhNBnwvbQUZYPhkhWA4nb2NuBQN2Ju2fvna5GQPKe",
  "key3": "3yQzq4XsThB9ik2dfY4rPJV5QJ5yXVRFdfen3fd1gYJLNXiY4eE6paTmKjwPUoW7RB2NrTzujPV1WbnaFUazreGA",
  "key4": "4NqZoTHaFr9YVsjTLGbQvCmXi76AYqw67GWt36z3moANRRp27q8SCtC2YfyB4njBtrbqQSojYYJRVVK7eZxkJRze",
  "key5": "2t9QtM13EHhd1xdUj5epizV8Ej5xwVgDXqHk5oofG8dQ9cwii5BtRTqNKvBvFKRoFSmLazNL2bttZkB6vh47zLAj",
  "key6": "4kHx23TpLLGgyAFcwwmeGbUprVxCcfhh8G55YcTJJsjymgFXtAP4d5vxR5MHj9ennhghU71KqVGyFnKsWQjgd132",
  "key7": "2skPA1G7ifYkA1SMgt1TQdfPTS8qZmFm3sRGXwfyPHQBHSNqxU2EeGguht5oMUbbUaNwHmwCrbqsQA8afLzJJKyt",
  "key8": "5VcDBboUw1cXWLbsGoXajGeiEtYnG3RwTwSGLgNyyFqtkySnPWH36bsptddYLVTtyEfTmtwsaMt3MxW3naaUwgJ4",
  "key9": "3PQjaNhLqMmFBrgXo6PLv6v7g4qo4bhxTumC5hYfNdLbHohaBoprtyy9h1gMVDgTvcLR8GHrqQcCB3zfcss8YnaQ",
  "key10": "5rbYHCuU5xQseyHG98ZgkGCtpMbjVcSJ6Sx9AEfa94drXAkqpD6ba2Gxo3aR7sxJJTkC84gKRTgC9WrhmHWcpSn9",
  "key11": "s95zc1ixnb7KHQw3nf9SLon3RitanGRDD8F4vF73vkM4KLNt6zK4ZDiUwDCQvSFZnLRZ8KBAVcaaEnW8zzs9jma",
  "key12": "2a4S4aWk4p6JNA2CHNzLfmph1G8PPY2mgLjQym2y9ve89LhZcrNw87KNayDyRvRXxdLHsxWv1ZyneRfzkymg1cmZ",
  "key13": "3PgrS365bcdiazHCA9QGhoopYydx6zzf1LobR4G49JSSQgMmV3MhD9mAmk1PGJCDaiX8HxTJ3giYovHb4bar7J8E",
  "key14": "5aCqTfH6PLQH4sFLoP45prX679x5G6MinuUvBfwct1AnYQVDfZD1DFXo6xwfja3p86mDdqQLbFs3grB4HX94ry7P",
  "key15": "NVY9mNMFusLZ1uyruoSgiPw8VfUQKnLVv6Xmj5D58xSDDxk3j1F3zen69meuDdpdR9vL6MwQFcYieQn1gTgwkqG",
  "key16": "3Cd9b4gyZJ98mpA6ZN5PmQxZT7ZJ4vR9Q6zkvP29pATUoVhUtQtFVyZ4HojZhXJbGyDMAWdvuhbpC5VLGop1L29n",
  "key17": "2JRv76FYAa8jBXis1czqR1apkErkGd4BJNrT9DfVJcxB5wGFDruSDS2jZyKMg6XWe8XkqZzKvPK2EcKpRQ9dms7E",
  "key18": "2rRx2GQfVnA4p72QbDzL1t8yYSxowKroLWs11MQpHc2mr8tqk1hsxiFo9NQ71N4axzD212MrTFT6yLMfrSS53VLZ",
  "key19": "UQpr9GQpsxdNXCdpheea8dVg9E4R77SDVF2ynjP88ScKnkjTVkez9aSXT3S1TvpWAsSPadA41MEEG6eGaMaanB5",
  "key20": "632Tjgwx6C9T75x3z4WCg4ocwSEmG61uCzsenneCGCmyMVHYELATTitwBnD88yN3R8iscca5suSXpXoaREXEb997",
  "key21": "3an4wD6cSaKSvKkq3ZwAi8S2pbmLTDg4Na76JhyUYVUe94PyihPGvVsQBTawXebbjJAeiXrMQ1ELDTvvSmafK7G2",
  "key22": "4fWojFMPuiegiKXk6qvE4Me42qyh85qkc4ZSN31a34JeBHo6MieErnSQmQXFhWoQdJBM4v39MHitxZcttPk5Kom5",
  "key23": "GCgDGuPZZPdSDjDmeUkb8cfmZwUt98bmEeW1SgArijSErZXXCkEYNQ3btCwmfLNQnvXF7zNFJzdw2WMZMMUZqPS",
  "key24": "QDHRYnRKYKj2A76NdbHuHwEY6R6fMf6rC9VUzp2kzB6Sv2Lw7k8gPtrtc4ZgY7uUKCTvwxHKkJG34iADm7tjvAU",
  "key25": "2mpPndx5Fk8LFhzDDodxCPh13ZpyV1zf7WhJgjDELNsxrqsRNmspgSWDhWgKVCq71va9mjuUjCfRWyoEQBR2BEKU",
  "key26": "58cvhyr72kvjc1qTm1GRcYMX8f7w1rtVHja7eJ8P1C6SFKDA91hsLQJQRcPjn98iqnL7vSB5sWsUrQwFesWtkSBs",
  "key27": "3ApbkaMjPPyhMXFiyHPNPpb8YhwfeC19hKxJujhxziVm8VAydx3nBc2RL2MSrGyXyjqqmYbZcMAHjSSTLQ8Hh9NY",
  "key28": "24wJcW1bXmQEK1MtRzABcE4wkaYMbqiSSNDGbjMyDXxd3mEp4EwS7P8ixjbCihneex9T7wJgh5xfCLTwb4Zu9RRQ"
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
