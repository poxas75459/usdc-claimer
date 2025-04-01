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
    "2adka72ZiK85zY6ZiwJZKsznwiMo8eWxBCVtC3wPEAQhksNnHTH1mz9ZhzUWPWvJywpaC4XPT6QkReDGNyAS8QNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TxJAYpSV5kHRGRh3zsdYbQnt8vvZRCbo6TVuWQniYUZseNy1xf5Ce9rGTLJr5HvuFTgKJqRkTiPvW2mYTmf9EE7",
  "key1": "2sZHhfMeJQs4izZFrFgtssQa3Gewz1WrhwDXbYUc2avEoeeWPCvaw8jKafG94354XFtw2hgK7BMBnanugPK6YX6j",
  "key2": "3AUF7PZfGAoHMvjDFeuUaVwR33cDRQ5BFXWh2TK4dmE7Nf3Gv4aWtvWjY3RHdd2n6bojSQfBWxjFSHHDdHb95vBT",
  "key3": "43BpndgqYmQjncd9R567qVygc7yaGVEHfUb4BigsTQHunzMb26QP4HMErwkXLakC28vn7W6mzfLZppGCjewbvvgv",
  "key4": "geJGGWdGLH5FZ2e16uEx7KCHq9g5zSp8xAwdPtjTHKU71hqcfzxyYwrzYpHQvLZaPrdXshhT1tH3snWwyJ3gxjT",
  "key5": "2V4S7zczcXhqphTqW4peuRVBGqqhPcMTuhdSy5XJMPtAXAwt5ivu1Vad9d6RjV7tGxyxM8kusNsBm5iVpiD3eAJZ",
  "key6": "66m5tHP7snGy9Q884j9Tpkn4jZ5sNwYR8N6UChP7Bbpsu34tHNevmQ4ksGjhSE3J2SKUsUTJYirFbicNgQ2rCw5j",
  "key7": "45cCx2DiQzyjMmAQ8sggQr4dmgDmFPcCLgURYbM5u6NLHr1dchhF6H3S4NnTWVzQTdZdnHRMxctPG48xbm7v2MXG",
  "key8": "3Q8wQCuRu2djykGhnPYuhdKrD55DEojZAmLfi2KZd2JwwmoGBA578mSstymYhJPeUWJ6WRtjSm8urUj1SuMmmqCM",
  "key9": "2HYm4MYiyhptDwzbiDL9z7jFkQrHE1wXmKg8KzCQo7yknK1CfrsBP1cTkXmrYdpXaJvRXXcqntzZLfgttW52PMsr",
  "key10": "xg4QR7pKW4FFnKem8auqxaQVBSshAwXa4Dq34tj6FCaTmHozttcm2BXiTzJo6zjt1DFiHaeVJogWEAjTHEU4bMu",
  "key11": "UScHv4dmKuVYUm6ecuaksKJg3cE8crgQwN8bAyeUQqk97cBDURsH5fAqsVmEGQcir4vcW26TCyzJDiGL9ht7MCH",
  "key12": "316y7S6WXVViYJy26bRfJ1pdnLx9qdhrAauRdL7Zz5gqeBcevydACuAKVnkSL1BDGQ8PcfD8psVL1ZuKN1JEve7c",
  "key13": "5Sd2nc4yG2X83aDABAKdqDLEBwuHbyMjMkAf4EYyF2tz6EzWFkns8chTSn2kujkrxRK7tPKsYE8gbK8v7We1pveB",
  "key14": "xoDw5y3ophR78TR8cPsHQ9qihgtV6fmBi45vpArtgJL3ccqbQMhh9vetHSxJ4jiHywP9y3xBeqgsdS3m1dqmRXL",
  "key15": "5KsYyWAtL4sUcqKDBDQxR6Wi4ZfmmTNNurjeb4YuxSaSpyZ2VziuSgyyECohMZbKEqSsmUgPVinque1FpvRodAv6",
  "key16": "5VRq4waLbR2CoVjgrdxHfn34uVZjNzUoMzJ9ESMsEpDaK1b1tJ2p6G3wnypCiU2wqFDLJ3Hazpi2b5dvxtL4RmwF",
  "key17": "4EVPeeHNCSWgaknqPNsHNVBU5X1nkspkf3K8W5vGvWEvJGmXpn75oWnJSna6CbMUxwgRHegMzTBqk3Gh7a1VYMsF",
  "key18": "4bRKrhL3cgXA4hSn4SSkMrhBZ6pUi4A9phtprHRwzz4CNBDQhFK5jD1yVFc82LUWPdXzwuEYBEVAdwMzkj2emcf7",
  "key19": "5gs6CbvuaadUGfk7PZZSFmHacKGBpr7hCx9pNj2Zz4JLH8oNFt9QDxJEtJh1w3euHNrnzD6yaKLYyjbCWVFTmXgp",
  "key20": "59xnEqtm5vqquMVVBpBkDiXWGqcgGLqTi7aN35vMcuBgS4DK6s71HteiSsTcCLfT3um11CjrUSdtq632eA22BVZz",
  "key21": "3RQR7q9tLZLXsE8DRKxdhEvDzcWZYF5Ui55u2gpUxUvdQVGKoeTstEHnzJnw54cbT8XGtsgx3C6F2UUDbR9XMYzX",
  "key22": "23Ncpzr9u6dbEcrZe1wxRZkpFGeUGdYFBUgVh7nMW1jUsT1iebefATKbFTR3h117cTLqNJAJarqsh3pHZvp88tGf",
  "key23": "2dmmfcrFLNWM2ZRc3ZW1Sw7zACwtDKEPR9BzMnA8YHPXeKo7JCYhgg1oSNqgY4eVtj2DBbi2fZLjosTXEbsDB9wY",
  "key24": "5kzsWr2a976u2gbn2EGjdFK2WWnnpCazQhgfRtrC2AuVECp1u6SyjAbwJrqKH4EScp4cUtQDeqiMrP9EGTzrEHHa"
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
