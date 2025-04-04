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
    "2qvqY3HNvc148tHsvdiBA3HU23UVEY51CaieYAyG2s7rz2vvbTj4qS18At8h7LW2FNbXjWiGBcGBtoTqxKr9tSHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CvGbH8DmFPYHuNEnKdjtaQi6mitezpHoKh95b5z2hjvgMYGnEWktwW7UjZ3gPrn894Xgvpr2GbME2UJo2ddhHNv",
  "key1": "3MpmLCwbhNNT5JTCKwjyADR42xSxf9Q9DYWcwYMMcaKb3TogepiRpqJSot1Wpr9Caeu9zbNUPEVpNDxW4QFjx14S",
  "key2": "55Nwc1qX3j58iCky7tsJX4ojJg4xXTjEEspvYXNsRsGf71HXBJou8Ki9oo8UXVJWYyvTn2Cr2xZxYxMGHbQmcWNB",
  "key3": "452mvMF1oaZibnQBqboUg7Dhs8t99KcxFQXcNGQHWWkJ8JANndeHgpk9Qsve3oGV4iyhXSjrEmP4CPAK9KQNpWsE",
  "key4": "3a3uybcFZe6Y5fo9hCupJsnv6XxbX8FnZPYUqejgkMcwPLUqeF3qxyoYSKWSuoESfNyajQiwpXHPJKpLQ72MKbWG",
  "key5": "4e8MqKhSrcdCoPE697pWGAfQ7VHveCAUMmNKCwXv1aazJuSPdHVZs9ykRqZ5QCnaHFv661yMLtRCvBiVPtkctnw8",
  "key6": "2mkxxbimH1Rc6M6Kkjf2C8ZZgEmT8g1aPyGUTYHGoR4Vnq1XA86TwTSrb3iXvXRhbSUeRUVukkLyqQ5ogw7bwusD",
  "key7": "3t6Lo4VUHwqZaweP4w9wKUGkDhp8zszAPXtgGs4tAf8nUesZeUY2tw1giP9C96oAYkkCSEX4E3Qd3Sj2y2mayV64",
  "key8": "fGRQhQMZYBgiXKmyqKf1Gxh15MT43Vy17ddtkp127tXZN6uJB7Kq9hWZTPqqJdnHfzCvmZ1tfxUTjUuqatB1WwM",
  "key9": "463e1rgkCY8jVv3qu5FP4YLLNaSUZ7p8toUWSEYTjy5n6hE6Qw8mU8iyaABbGPQasRm1Jvb9MJRwiPN9kUNXC5HE",
  "key10": "2yFACdNQQJxwncKGYFacHPaRvsdk3PinBmVVJRsTnj1hUXkuXPtFqX5yCPi3hm8mZKPkXTKbhG1nL27NkrjL1MQY",
  "key11": "2irVZYyGy3YLHTP12rgnzXh9LNv4t5GcyP44G5GYL5zNCayBN7t7YktsbepkHyBMRW6Xp1YcckNhiWAyZYUKtXSX",
  "key12": "5nTkW8sauHXHhLEbx1BB7eLGvqtx1NPb9bD5zQbLfDbyBHZQf2RMsrkuu5N9yRQx6WrEvsdEE51eNBq19sC9PTsD",
  "key13": "3tWmdYg65Z2RPdeNhqcCfydwNjwwWm1QtnSASPJqEFDWyCERoE5iauwRbS7S9UeNqVcUADkzcUcUx7pmBCLuK4qS",
  "key14": "63cicGeAzckdYjj249jeZL52D2Zx6SHsG8yRPekPHkPp9mQnzdLeqd7Q4xEYr51yxAr5BDov8wEoLmVbNtJQHHfu",
  "key15": "4Nhj1X9KD79cYtUtxZkY4ZMyZhLzxLsr1fo4nyp81iU4G29YXLgEK1tCbMg9FL5va8RkdFjRaBRZX7Dyj6TiJbD5",
  "key16": "3fYywXZZPUpWVTx5YToxkEJBqGLJPPpoVTtaWvmnFgZY766DuPifNMEsAX9vWxvSUNwFaQmwnMJFsHqQ7teFe3cq",
  "key17": "zhcR1H9jsgE9KhJbYG52ZVBk7eRq5z4k1tn8A8XML47Hc5rx6ufqCaiLnrWUamDzLw3AZcshRta73MrGk41uLRJ",
  "key18": "3Y2TbfPoS6ELaj2X39Zi9zpGp8tiCLQXdrte62nooU1LHu5NaeBY29PbiEBih7z215byYW4FuMk6z1tMi9rQfXsB",
  "key19": "3amwYUoiWgBi2WBXYAFtfZJzHEP54Pu2ZAR1X6mxzTjboN7Zk9shzvFo9FWJwA2b2oqGofpw41JpnyoE2stbCm2v",
  "key20": "2zfZyxzwMGzFPjCVmDBLEo59UFFgP1LKQMc9BFRPSYQUWziAzs7rnXmr3oLggXFRrWumR7xP7s7EvK3FWDYJUtma",
  "key21": "NYA7xNcj9L7TViAxWnbtWa62jcVzibqYsEWrMxSigMMo6u7ZYVbhQvXJJYQ6JYjxk1AUqoJUkdQ4doJUGoEWTyU",
  "key22": "2ekpTxqMSRhQMysaPnrpZwF9GbPqJiSdzAhW4Vw4WuiEDUVUvtV3WAkjLJTNcAfEhrSxNr3TiriqKiHJrAbxBnUe",
  "key23": "36r3gghe6WEDGwqdgvjUUVj9hvn1KAQ29nth2gmopF7MznvD3cWRStz8p7BrzGMqQENtBATCMfQnkgXtNM9fiEmT",
  "key24": "5pQm4nFu1BwoXSPfRZBw6GoJw969fw5bMMehLHHwRP2wEBc6D6pFFDP9j12DrabP1sSeE6myvYvNvPtAiAFrvC5Y",
  "key25": "Y1txVqXvjTykQ1JSiZtZWLFT4ST4UWjTip5ViFshcauJ4RTHbWEqs1te9NqXSGwrMWbtcu3gjpvFaeHWQ7aZsHY",
  "key26": "2kQ4nrx3wSp8PXGU1oSgDW1HHu5vkSpRpb7cCMo8L4iG7UMyCEP44on5yBvcomrukRQtcahvNr7VEqLhfxvfn4Jx",
  "key27": "2YobdGiBAVcgdCL47ZzrypVTvHG3MciuEMon6uAMgZK1L6egPQibZwMpnWwsEtK2WPacW96fNe1cVztfx626Qsxp",
  "key28": "RLj6vgdd5izrxUNoHxK2bpszB2TrvAwVqhCdLhbFAQkyFnutkP5xauNFaW2SpuBmqKghQ93VBATf35J3bcpf5Lf"
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
