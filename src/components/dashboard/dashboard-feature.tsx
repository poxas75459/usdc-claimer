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
    "61CKnzuXW2dQTBNbvzGxZ2zB2ADGBCu4Puo4NB2Qk61WUXXnUZrEgQVM5N73zpXHQbqiK5hLM7SCvh8P4U36Bkbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F5b9uH7siSAC22cpUw8NyDDyC2hR6HJoNb6pUuguBgnZPDqQFQT5RM5wkx7Bfm7dWWdbtyBwPafZGL1GsChzeV8",
  "key1": "4JX2r1KuCsysV8keaT5LMoL6juQi1NKFyGycpEAr9DaCkeLF7vU2zR7WbZ8m4JcJvBPU2Puw3i8aNpgcwo127zSq",
  "key2": "B8Qk8kHpNfFdmFmsPrq3vPq5Sbf5GYVvtDovMHUAq6ZXeBmRcaA9XZicq71PaLA3dNDogzrHuRi64HK6e7zPx97",
  "key3": "3cnNuWfBX4HBUtUv6uLgCa5H14koZLoVoiQkYzrNDESUdkEetkHd6WSL4nN5C6vDwHnRiVuw9BpSz6VdcgjBkXcA",
  "key4": "21Axbii37kp71Ht5XxLzxXkwZgjvSuhS2nioazFRmPJAzEUr62LGvpJzP7wbpWi1pVgh3sU6Cs79V3eAHKCqWj1m",
  "key5": "5T8sorLBYHwzD3kbFPcKppxVf4pDnMiiQAVvGUSACsszVHxuFf6vggDZs6ftPFqZjiSktFDz16YKCXUBkDE263Yx",
  "key6": "127T56jRa4cA1RSivdQsg2BgcavuWvgeKAXcTnNB5VfiTrGtzYiWvtUBdTqpHMCRVL8eCL68pzsPgvUqNyAEsKHh",
  "key7": "5rX8C5tH2ePUb87BeJDdQ9RkEfuhXQJ2PJfUuXtQeLYSciBB3BGAW8D2XMHYyfKBXQ7r5u8uMCpKtiENqMCuss64",
  "key8": "4E6kY2zRPr6kuH7m82zEzFcp1rUNuCfz6VYpS1xCcYf2m6x8ih4FTXjex795xoYodhATmBBPrCfEMh3AvLFVyVbN",
  "key9": "4PTZuyxbNoUXE6Gs4QvjsiBpWQKQejAkjfDWF4QbmC744jmDkLuNJSHDX57SckSnkQrao66N6bzRSuVTz2RiSRDW",
  "key10": "2HcPjPrrBsUfxasEwSUkAZWj3qeR9ozekQrDpAFBFtUekwp3wrJghGWQDxuCcygvqLWbp3aHJxx9oenQviBhwENy",
  "key11": "32wTR99e7MsjCaHVDChgLnZzpX5UjUcKsmed7TB9Bb6qMyr4wW7fJQVr2fiRyzmiQJE1CL4V3fuGtjrkYAEPienG",
  "key12": "2ip1nMsgW89DAVXmQuqRtgXxpq2Sox73onwCWzRyvKWEkE2Jj2zEbjGqCji4bobXAJwBTNMQJeom5yAhTBQ5fYvK",
  "key13": "qCYxZ24CLgYUFKWKUCg3niNotvCaCazfCyBYR52o9j28noAagV2mmBenBWMj7hmGT5q94Vo26ifXmRxZesgvFoM",
  "key14": "4PQ4H4n9kwwzQLHpU7zSkcvbjyva4R4FtFZ4BvLy6xVHMyN2jMyEWuWkeDxkFCRupEk4CactjmG98gaXi43Zcamz",
  "key15": "5975KZeYbsoBDrRZgSTPR1Nr92oEv1kHnn684DNtuWLqVos8uNFqqkYhzLwLaAxWPJpHveJYtHuBBK9KMHeFKNw8",
  "key16": "jFZCEVvqWCHRFQfxrA3DSZV39zgcCMMoZneyktWErE2WU3Aa5cCi6irH7849wzsA84bDMCmg5PZwVFuHHu24WxV",
  "key17": "3Q7LkcLHWRoKWJ6W2E7zHTYbt4rXG37Q9P1XPXGaS2Pw3JNvvQat2Y6kVUzpx2iz3RqtSo4GvxT5XhS9S6NVEZDp",
  "key18": "2aRKG5zbikVVwWkwqqv6WSQzwovwNQhJNpq6V3jvFypnXqgQ7Et8UzKHRuR9BBLAeiSs28umMWiURcu3TbMPR5cw",
  "key19": "5k1fsz85wKEKrTjgfKr8j7gvjzsvedoe6mXrgqoRh589BzD3jq1gSNMUD14fEPdh9VpAhTpyAd6UweQ9DJioPv12",
  "key20": "2ceE5XqXFD3W48SnkmgwpC5Dfwxt1XfzM6URkjsipYZRQdrUH4vj2ta3ZqALp97E8qDMkDUhgB68VpNTgZ3HY8VQ",
  "key21": "2toarG2XbCXwdDsuMfPdj3GEtPyQC4upx3NAFUnYoQrtc9F56GChgHyhhCkH392ajWCBmWqXGx8gr65vARh29iwd",
  "key22": "2RmuDc75gYxbn4pj7o7M6s487gxKDULQZVQ8KKhKaSTNsS6kJdWbZYQa9dugfoCx3myX76hhxcdP5VaLQ9oCDJ6u",
  "key23": "56hcvZS48NkfoMk1LgpCgjDSzYCAwhdxZHvajk4qoicgEQ6NhzCg5BTzMrnU6hRmATwdwvpUvQr4WCbhaS6sxF5o",
  "key24": "2CfS2uayZkBM6mxv4LTmCtPng5yRoTejvdQdsTiFCF5Vnq2N8ZeMNrfPy8XozGMGuYaE15BZURoc7QVsHpSxPThk",
  "key25": "igszxWnhnUHFqJ1w51aNehj5Lfp1pgmfYFU7TBWKkj9QvBpdXPdenxMmY4fEdn34usdkcXFvVbXHzYgNM6Y4YTR",
  "key26": "3V1Fh5zWizYRpFJRL4kNRwqAeTr6ym7KsZ6sd8o5gocT86jLF7CetdThG2EbQGLRkxjSJYPxtDivqp3bqo1LWaVS",
  "key27": "4P3dtUHptVnYKf8g7wrXeqn18EGjZ254aQxMeBYWJsp2VstawHUv7ZmBBq1sp4E3Hpyy9Tr81zkEtpGJ7YQr1oXP",
  "key28": "22v97UVhyt2ywG32wSudar2U3NWdiJzwGv4QtAzmXwxn1oJc5m5qsqpccPuUPwpdM2rrxSfxfHsUn2Qvqc6LsVfK",
  "key29": "5xQvBBybvdRzMamA3xM8hw9K6BppY6Tg5WLxBsimS2R99RwvnS5EXdfHnXQdz4v2hcPyiC4y6BTaoxcKSka9oj5X",
  "key30": "2ckn6EANf5e26MSPbDa2iW4B13jEhWeirjn7rKtLNavbi5GdWzdepshC1Bqq3FfAbSLZYvMnwGfsi394TjGm9z6f",
  "key31": "3ADndDYDaRRGBiSLFstV3aeVAtsn8gcamXa4hG6cTe6CgEqZzA7ZQSzkSrcBdbZqGmpyKAUrpcRxG5M9CdWLWF6i"
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
