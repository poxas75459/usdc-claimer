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
    "2PcT41Qfb1LLzHD997QoSt83rcuNNxxL13Bx8y9sq4vstMsF3qtDBKLAqvpqDBtedeejNhmRp9tTjA32BPqpJh25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rr7JLSdoGZ3bHaiQxY25sLrXtvG9FMrJ5Mx3JyAdwihKJZxexPZqNhkc2bK3UeoJosmZ1iZMjm2PrzDj34fNHNR",
  "key1": "2tQs1pova4QBCW6p2xRFkFvAyMzj553uP1oKuAGgePRmmmEJMavxt3BhQJrQN5rnCzcq7UdffXfmXgYTb4qT9QvW",
  "key2": "4JaRFjN7u4rvs9Zy54csbP3Uep9b3KRP2xbbUsaocWzcupdXtR24Ze9CRbZRVsrT5nbnufzrCNuuxqS536SHh7Ei",
  "key3": "2HX5ZjwEFisgezyTTGFnduvETyj9oNXSz5Cb1EihRKuPYPjuN35BWcVKw3ce5nu4AfLpEfQmTuuR1P8UhErCWFVx",
  "key4": "3kauy9Tzi1nUFVZb1uxx2M7QcRt5wndTJJx4FW7nba39xr5epWT8ZJY5Yu2xkYwWU1axiKaMFGbqPz9ZinbfK8ey",
  "key5": "51MV4CYppSN4Fnn4V1jvh1YuefWwA8dJg6R4z3Q44L4GPddmwjmcfubDiGquaseHWc8GuhFUq4TncobLg4fcZk17",
  "key6": "422ds3eanygcYL4YcWn98bffQMSqRA84qH7pczUZw385GHGNCDAdBt6RdErXPtjvobBB6TWRwmwWauVGQr56Wknc",
  "key7": "3e8kU8bqvQt2b4B4ajL5uFY4C3kj2iBMp26fBAQ2PpsC3Xn7PZqBkYgpmhCwLhMyfvrUgZAVLHb2dQF5tjTN9hzC",
  "key8": "p51iPwmbnHMmNuDiWMV3kcsQQqsy3EFFntsqgjw1SvLSEQB9a6Vj9sU1nQf98NoJFyXQhE64sFp21U6YxCcD1bv",
  "key9": "3FCTD9tFXTbXB5wfP3mBVUubBWwowuVRQ8R87K9P9jzN6Dk1u1XKuSwNWzkMD4LN1Jyrr3HpmGz7FZjJicrGshPR",
  "key10": "5Hrqa8ugQbaLxBrqqZcpQGvwzXtQ8jgcRMxavKz31w11k8jhPwSp4xdPS4LzqYb3aNjvKS4aqtRLQNXMRZQMikry",
  "key11": "2WJpszVLXcBK5twcpUew8PyTUTfQH1KCyS7EU63LFAMoeL4uUwHZ8HPzsDKvoacaVjaJPSREd1eXrnSrZzjWY1sD",
  "key12": "3FqtL1gx7QjtXSiMpB5jyacVqkQ4qakf39nAwGdG5qQnNcbdTfDgFF8Kd4KpZ49nV3fLjMPK6ZDSh9XNCeimBYe",
  "key13": "NVKSfypAQbH3q9vjtkaN8wAyCZotJrh2fkgJ7Lks6RQdwG9wQyB5ftYJomEfypPWQ4uP5TA8eEuXJuBNzr3m8Xo",
  "key14": "FF6uZaR7HeFnM9uXLinmiomiFXKhk9GEzTUWAJ3ZzgudYf1vBf9QTgscAQuhofJhESKYEGL8Jv3RfELGtuV1pwe",
  "key15": "3XGt8m58o4Entu71aZQN31YAm7c59U9iULoprBConAuQHVSet5BSkoogFacDph2nkEseozndbKrxobPHANABS9aT",
  "key16": "4B4qCDUei2snn1VUR6tRfMP4aqqq63Cbxcbm42d6T4UQyMvJtsByK4nBE2p8tdq3K9Gsh7Ck2TZk3qiL6jdnawt6",
  "key17": "2Ttk4bCzeHhhnt9f6MSJ611yPpcUtkPTisCVJ8NuYAUpszY54xyHQ4Yt44qGPjpdvK2YeBfmh1Zq8rpHu2gqerRX",
  "key18": "2r1E4Hmib85hLVuWiCkiegSUnjmw1g2wn6d6mw9nVyJpZJ94VpK4ckv1hjqhyFZYmbQUr1fB5dYpEz6fhMUGiedc",
  "key19": "3nRCwmWigE7YfXBXYFEb2gBsiEHFEadAkxZAW9wsSkzh3M6KPpejWKmf9EKtH7Mv4tmaMZUvdBuChvYnDya4sWjV",
  "key20": "4p4CjWjwvXaHMbs46E69TF5FTBkxxJ6mJH2ZTTcahdGQY4wmsceVLBMpotMD6UNGVe6xQuNP1VKzTD6vkhveJUeC",
  "key21": "5YdpjjwymHyjFq3UtegnPACM4qXjYTnhPasp6bz9yEy3nayfjL546Xm4pZL4oYtg4VxqoLigipxqzYmdK9qEw5Xd",
  "key22": "5v7ei6PBgBWJyh8F2bUpjd3HWJoXCrTyZPY3KaJrUoNMBpfJcrpGqN6Z5imHQ9RJvstu4jqhaa7TMfUHWDSq8bDy",
  "key23": "28A4oNHXE4C2suNjauNJpW1zUzeD27J6c8wGEnERqj8vWd6GZGtsm4w9JE22xbRwwET5a4wDTozqfrCgYecJgJj6",
  "key24": "SrpjU2t1UcswujdT1QWQhumFzcG5rShzPxX91wvzpmvmxSAiuskB6JLJxn17WGQ6e7aDorPfaM81WQMWRRfkeLt",
  "key25": "31nytxYgwgPp2p8ncP4L7kiWnkTBZDpQdC4G1uu8XkMY21APFwv8x3n9aewY2ucjUzscvsj61U7Eu8qfU6yPRf9i",
  "key26": "2npa22b8on4AQrM3vro3YBDewBaqmiZCY5RNPCaSZwNpWNvUYrJ5UAstX9soRSwg4R1Au82s9NzK8abPWw7fAaF3",
  "key27": "2FGinhfPfpudFhuXxnkPfY9WNxhrt9oVv1tVbd98CpD4THsPLX24zamdd5vQddbpdGrmceSJbxVmZnKg9STj4WCM",
  "key28": "TBsHkYFcLsFLdZHut1PHAJHCgn72B3ny7rosBfk9zxzZXzCorijSC67MCxEf1nJd2G97WY2342C7xdfT2A1oE3X",
  "key29": "4ctZFMF22d6fNyDjCFPPDkyu4XfMHjRpRnzgVKJAWZzpYcf6gtq5EJdmjQsQrYkJufeMadcW6UjSv1BZsjPH9jFr",
  "key30": "r7utK5qJGmvYLANnbWanQyG5ENcRbVu6gDFvzs4ZRPArCQc7Hr5j1ZqgCFuhr5dmcV4HPJBmYA9ctyehMai5een",
  "key31": "3BkBnTzrpxLecAvkKBskLkZG9T1sYGZPL5YrKsVMvaoKUTYN88nhku6WUTSHxbNnUixdeoyYhxqGtVCMnpJ3ByMN",
  "key32": "K5XNCQmMuLjvVsUnuxqGP4mZXmLgNT5cAPddLnpWUS5FSeHqcSzfVSyNwbZj6xUPBg5KWVo9H68mcMnuAbHFmHU",
  "key33": "K3VJzzJxnbmcNxbwCDm9rT9TMXk5rHKFnkg9hAY1mUvfMq2k7AiFRzUt12VjfcPo8keppfLVZpvZyeYa6ftzkZW"
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
