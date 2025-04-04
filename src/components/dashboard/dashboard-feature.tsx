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
    "4me8LvHo6JR9Zbr11YUjmkN7RkwWp2z1dgsDZQzwCcfTewGhphnSv1KvDABhszHY9WXksonUwbLPdPynvQBSVzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QWfJpWymDgBhJwYe6ruo2YQbhAptDzPSqqzm8xrUbZ6grENkBdtro9ZYdNdihUyQgfc6Cb73osRNhQCqdXYTsAT",
  "key1": "4NxMCzeJ4rgzYUzS1w9jfGicfwkzkVJP9tK9uv3eua6nnkL3rJR4TrYC9NxdTXowxxbaD4tZ3CAbbKeYFua2Btsu",
  "key2": "4mTSkfgL1vzAh87wo964kuHqbcX3Leu5uR7vSDdnVaTsDqu2pM1QvBrLaVrwCwL32RTECbKfG4AnmT8XxRwakvMD",
  "key3": "2YfxGxVR1ugmrQC9iLNryCoScnsBYeZiXhHrujVzHYXMZ4jd1VAQBdZaJYE91tNAKNjAkWmyn4Dc2hrFTSU9EQHG",
  "key4": "5cspy9BH2VACaKmozNTgm9sEUm8FmopAsrUkJECSqixbtpuXbGnnZkoePXieagyQimKJj2Bj8YxJ9vBC5aSBFrhE",
  "key5": "5ENiDfkRHahywmNGfMYj6YqMHeXpxqGEroymeFM5q5Us2cEMD34aoC1Zu1HS4g8sXNspPCcd32nxgZoofzePLYPP",
  "key6": "4KA9hDzX38d4bD4P1cNdvVNcDiU7qffwLwEcgoJBsJJ6jezPfum3mgK6j5JdUQRbTprCWKDtv8LNbdy7DTsjeLua",
  "key7": "5rmBQnKUn38mMeYsQYZBiojGhHZEiAfxTtYGBcDZpqYVA4xUTFz5fCT3CajvWJCi8QAkiyiiTKdt7KDHcuHLRgFc",
  "key8": "2dGuRPCMFJKq2SoBag5aNYTKgrfQtbv6cRdLE97iHvs5UCLb55hDmFX44MkaK6mzMNbySztpBYsxrWoabQUQUCKT",
  "key9": "4Pes7sq81qmrZ1V4x3RPqBfnRxwhYCdf8GNxwFsYWEGn8zvzDdzsDj7VpmK5KaBM4vWUadbt2NGWjgyP3U4nhhJo",
  "key10": "2PRgtfPVHYn6L4qZC7jLhtgW4Ho1Kt4fif4VHBbcDoEonvSLjY3VMrXqUGKHRb9oJCeuR3mqwDNJ7xSFPgTRQHHY",
  "key11": "2u7KybxPYZs1qnKyp6CNUgk8pydE6ns4beGURkAHNuTmhNTGMaTpAbysHmN8FLfdjhryGFBmFBbjSRddMdGbwkEw",
  "key12": "8rbnfiSeZRjPhckqzWtSjiWJFafyVHdbBeQnWYTahEDCCyFz2LjgwkwykHmQrfNP3QoPiGybYCusLEpPkST3svj",
  "key13": "67XXFEN6f3b8aT2hDfVNJpd2pcqGpxRoDNSXkQnBJa9pxVRmRh6B4ywh3Gf18ZcUGQGiVnZFHZfX1giyyh7imTb3",
  "key14": "n6YBMZmVDcpt17jwcKvkWYt3DDKtTnbw652xZkuqFwbH17vt8FiTXUibzWDDujN2KtNJ7y6QRVaebQ2kptJeYEt",
  "key15": "2t4yHX1UhcVmEarYPvHPwRg4ogyixAvszqb3pCT6XJfThYT7CMNqEGjY5tsk5bHxWA2PEFoFZTfvobg57FhW8Z9o",
  "key16": "5ehsVvNCyi4cb7qANDqrZbjLudSwLNHFdwh5EnGdNLTGD4rx99gQuFRbXg5fMrkt37hQPRb9BmawBCogpvUTobf2",
  "key17": "te4VFjZ4mDKN66puyhshgo8No212KXyuyrEiBHMunpBf8tZuset93yWP3MuXnCpmQNTTdQTJxfpRBNCRu9mjYZm",
  "key18": "3LjD9UZbRCSFMbazbKwnwrjt6QtAwch2vPw6pmcMGqJygP7dCXRbvyvJxmuNnKN3MmCPZUGuhtKQXJekgQsXJD7Y",
  "key19": "27Dry3cMiNopQFEQRttar65LXDw6QQ7jqVqr4RJ2kZ2DXM6JYNV3gHWaVDPCq8PQdb1nP4XNJtsikKtR1VCy9a6W",
  "key20": "5YkrPt1BikGPwkfHqXSohNkp6cNj5FVh97HmAFMrjfopH21yCB9fxhQqkKxK8aMZLAWe6EsCQFRXeVc2eggrdv4R",
  "key21": "2djUY8JpLGZLjQsYWixoRiwvdQ53akruaV1XmxWdLVJ3HhtG5tkDhRGKk64FgSo6VsQ35M8RTWrQ7uDbFymxMaTz",
  "key22": "24PrJtC1g83BYcfvkSrYGyQWWbNBSkwdHLeNE6ypPfJKWff7kwcKRj4YYPtmHni127LDtA39hSugM5SjBZu1iUwU",
  "key23": "4yMrPp5A1zGcT6YPj32b5NDmMZZi6evws2QNicxuYqp7aakoD1j23qGcnepz7NWFCEbksWM4Vo3YxyRQJXHFHtEA",
  "key24": "5uuZ8hTPHEtWKMWU4wgeqcvpYcCtFq6QJGkr2i1qWpToiqV8m7XaLrcLNaSitoy99DGJWxkFRiKv7hkhGJUVnLQ7",
  "key25": "35q9rzEdQmmwy2mDNAaNknnpHxjxprwE2oFzHHdWJ1LkUJjRLyto3qMxg9m9qg28vdH6Pd7anj9EJCrhPnF22yk",
  "key26": "5xvBsSdjYMWwh1sigkZdxP4WQM7AVnvTGra4LZsQKpgUwykYjcYAQAYhSb5GttDdUyXpYMP8ivLvTuzZQJEv8dhx",
  "key27": "4R8zgjRTNf9bbGbrHUSU1TAiDJ1hk3q4AUWmUanymt9wdW6Z8XDv5UdBs6UgBWN6deiXZdaEqQVXhgLRg4Yee1A9",
  "key28": "5RjoaEebmWn8SscuZB9ZCDddWQJdGHZ6CMiETU7cmHq5SuXJS4yDwy4YUo99xdf6P1DGZkYb1E85emQsRZe2jRoj",
  "key29": "57tfSFZFh1jdnN6oeeZVJrsGPW4fZyBxZcYS7q2rdxGkJeTuhr5GP5NLLEJumEjNxWAATGPFGhqH7VtotBcu2hUK",
  "key30": "2g4SjZbqW32HCjUcaVw2HKntKSzn3sgmkGoULM4RX4fZCcckf2FwzKMJT3ZfiPHwLDKVWXPHxosEvuqeGqhLYEiY",
  "key31": "5e7Vq59Q4k3z4DHVK8o5rgS2jj6C5dF1ppo3UvQcHWXtyycYqCjSFV12DXiYtGUQuFKxzbqbrWdkwPCF91bRkrn8",
  "key32": "N3HwnjKamr4pjPFtCdXzGLk793TqkV15oV9XjY6GXqZMHuFco9cibBwWVdxkJv6X5VGiDfBkwuQ11YYEFznAf9b",
  "key33": "5LfL3tn6Y9TNWrFh7ekGvbnWtKKSew7n6GozjxC1MFXSeffQBsAR1xrFdDbgFiqGXwMr6bXvwMVRCFjr29xdMqn9",
  "key34": "41DUuLppJCyYoL3Rwf9bVvXf9B6549q4pGnMDYEnNWEnem5nGZQuSJ5nkJ2vdFz8zB1XLHLBtuiFoqvh2tqsg4Xq",
  "key35": "5q4qbw9xrvGCRMHJkSjpyHFHpDvQuTn1ZhMY3Q5HkNxBwXU2hiqNapkAJkpUUunX8SjXjPwuEZPTTRxuweN4caW5"
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
