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
    "5xMBkBWHWmkC3WXmTrkPNKwMundYRM5CbUFRf6ihkuCUqtkiXyoKER5WYQoEq84RRCLMb1FGXcFq1nTxRFB2gdvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QCeZquTHa38wAf1qWkbwW8WfMCVRKPM4o6oa3ZgSjnJCNZWvrBNZJKdXP24bi7juGjF9vWVcqvNKiuSqo2eQ6Ti",
  "key1": "3f8SBhR23YqLF8ufMZZrQXPQGi2evYQQGoZGQQ2vBugUvZdDtpcCXJAkBc1kNVJyUpdg9Tp7fA2y9JMQdVRdhp22",
  "key2": "4w9tgL9GTn8Y8A39pc4aKuQqACpVpEpUPtUxmhowRyTFCVzitZwmWs16MtjQXFvnBZQbSxuR2rKL6QyGB3u5oKHQ",
  "key3": "4883mNyEme1V2oVDwMZNYumaM6HiH8V2jHMcuGNbsNq7CdXF2pJHgfmex3zMLmdYZK1r2VN9VyLRhGCEoW9xJ7EP",
  "key4": "2wrnfuhdCm6VRDFhAeanDfodiHGLu937pjK6muKF8JHsMAxPLr4e9tj5nVzV2WViWfY8smFhxc9YhnCNu54oCcF1",
  "key5": "3NvAbpLHsjrrpZB3C2tp7CoT8KJAZBpAutBbseZrEjr6dkv2KExf3PZVJ4mWdSD7LEsTHMmLN6w4Rxm365pd8Prp",
  "key6": "2CQWWgEwvpNXXzhxsGZwGyXpUm5tDM6ukiwQXHbwU48XgXgrmKnm79kMGMkaFQ1Xh43LwEiKzyDdhW4qc4Dp7Zah",
  "key7": "3UJxSu4HJVfBDhGaXepdSmwszpxtsDDnvL8xZf7PVzGpnSm4LVXzjijQahZWTqbirGzMfxxgpkW9eMYdcY5UV2th",
  "key8": "5XZviVN3UWxkvyd4oGd2YKnU9yKNpT3JJQqGA4XdyDFq4U25VrX94VxP7pAKvm6vYwjovUGAwjvNhzL37CgQiCzV",
  "key9": "59RmBMzHgnWp6VkaPDrk1tdB7YkmVUdrtVXE5FZMEX9y5LD3ZEdEnNpYJnF1fj9HhDYanchTUHUfQUAbqsMgHDT5",
  "key10": "3dxnmxyjPwjFpcb3uxHhtruhuoiAAQgjyqSTLVHoYg6CQ1oLc8CuQZLhGhfdbk61gm79XVZ7zH29ktLPohmno1x",
  "key11": "3H4UFThr4iRJ67rUmKsLq5bjNn8SnYbSEhBaew596V1sztDPcjG46SuobSjchWzv7PFpKTGNpneQ67oDrqKEnar6",
  "key12": "4q1BZ3yse8XhpLgvfc2MPaZB8Gbtg97PW2pygfpqYkEYstrvArNHM2DxdKpLjKzQPZUdRykNmUBPnKfgEXB244EW",
  "key13": "4tt12ZfKi3qtpx3TPCdNYc9DaKTXtT4ybQzGqXX8pGnpnjPtkY8cUoQXqSsQjJ86j1KXxQFwZQBkGwvPXwFjfJti",
  "key14": "2Y8RL9oa1oFkMB995eJfWGG6AJAsKgwmVcV3p8GBM95DbeFBDQEuwksU4gYKCVqjXVCfp3pw6ZTxZPCxfPgd4jT2",
  "key15": "4kwKDeZNh3LdAnBm87UaAL6DUQNqx1g26inVnzCsR416yuZrsYHDCu9D4AVnyL4YaYJeCbx8rHJJM3BXXX7QPtQr",
  "key16": "3rzky7FMp5JGcdQpFD1wPwvUDxNDMnjYheNSbPXveZYU1oxQMYyUzJgsjroo9KLwo6Tgjpqph2QxMmDSuS7Vv6sG",
  "key17": "35AcDtbZXFbkhBVVMUkeWPwLeTXjXzgD7sfrXueKE8MBdL3jGxEUTmLDTYqPpLZeviPXLNS142oKrq82W3buTWUo",
  "key18": "375KdGofH7CEjZug4Qjg6pG3CCncvmDzCBuJeKL5ojCc7VKc8VqcYqwXEhpJUiyDyFGVK8Gx8HVg5V4aLAW5ver2",
  "key19": "5q6S3JBxT9gUnpvYvW99kzwayWQpk695ragCqwVJkNVeZwSp5LjxoDQn9Eac8tLSWkbqtngS2UAzicRoZpUZ7hKK",
  "key20": "4Nx9TvmDJqmyqCffY8wysJUuMLco5Vn4cSo2RQad7fMqA5avLLyum3kRinmDbBL7eU9Va1AA1dPGn2xAbYEj2H9e",
  "key21": "4hkzKjsrZ2rTasx2nFhqisTMVeJtnhf4iAPzFbxVpZnxG5aWw35RQBeh8qvZRPKkhaCn3BxPzPNTJc14kYy8MTpD",
  "key22": "3wV8e4QomsRjjpeEvn5ixMkzHArdzst2uV4dbMB9Fjbp6wK8HtVwKVPDfdc8QeYzDV5BdhZimJVoDeJfXJVWEbN5",
  "key23": "39JPzmkesRuh94DDVzSqmXcib4bmY7AK51nxbqq83sJCMFUHfrQ12Q8FKD9ZwjnEB6Kezd1UKHRbJFwAMGdWwLja",
  "key24": "4ybR68CMnJiGMrULXUQ21rPYADL2cBAu6kiKCJm91NCS66DotVLfDDoif6nKyq7VJQbmeaPzrCrTVxWxrRQNCvWg",
  "key25": "4zUy7mDmv8zW8PXBLJQgB7Ee8SeWAZpXpXXXP2v616web2AAx6tCf5W35Y1EsBxGxLdAqd5rHQim44Ns81FXt1yw",
  "key26": "5p364YT9T3CCARBBybpftWwac9LXduwppi9fKu6MG9keppVNt5bvwFVKm9cR1NJNKXUdc6JY2tpjtRE4qgiqzNyy",
  "key27": "tmGG2SNfxyUNW1XcrUGx6H5PXKKZV3Pqi24vCvmtMk8r8ydDJ2iLcTXCkDpvcwAvHKFsxTakLGvffSKyXjtzDPu",
  "key28": "3Teh3sMK3RboiNabbXhXWQ1p1trbVMXzAmhqfF4i5ecjfpSUViLMQgA6Mfx5sAu5pquv9wUYKwvkjWttGgWHbrvT",
  "key29": "411A8cYNQkM5bX19FRcnGxAgaX46Q64jiYNsDcZCtjzrdqQui8vtDGoK6zMA5vSaPLnxG2gsotVZivr3oNp8Epwe",
  "key30": "42ga5MMsexW5eYrfjVeXGaePDBKnxDvrunu4j95iWCsqFJHDGDsZcRzTdeQ8HTasdZ6Qrb279UGFPFNRpPWsFnJ3",
  "key31": "4v1TFa7GxjxpQ4nDh3Ci4Pp8QAvWTAQaMqHKU56TVutab6WrN8LNkScQ9fr8kEqeeW9mg5dieHAFQMFDqBvHKXUP",
  "key32": "2xpDTWAFbvLmqQD74fMxgKg7AUiccWfpQxTQccB3DRkXLtCTxz3cfR1nrMQMRoyzK61E1NbhLucx8YhVzue9HVLQ",
  "key33": "3btj3umDuoDSNVhxN5gJj2UUztm68yB8AiSp5GVj3PvovodK8Ly2Qu8k5W3yHYAnKFeaupKN88DU8Xgd9AmkTiS7",
  "key34": "4eYsciKpo44FQRAsEi2y7Z2R9wZAYG6nQQsXzpEgyLATqBxcjmJ9DXnAbw3hayXaandPMATWk94PiGkh5a3iZJod",
  "key35": "5RjiFhnnvFPAWYgpyBRVBrcRRxw4mqNiz3NCh6pnSVwY35zfBMkrcDksUkGLdGMrWRdC6XWtMkwC5r5HYNHALhf3",
  "key36": "2aab3AgUjxjBNaSKTRBV1WMA9etnZ8y7NzzRjSijcVvcX2CcUkSYDJtdvhPZheHhdMGmw4ppJockDdhtaQLagLbM"
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
