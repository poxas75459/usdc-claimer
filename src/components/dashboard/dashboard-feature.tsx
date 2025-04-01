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
    "3JA7YtHjX5ikxVgtWnQcnoNBpfpWxMra3EeB2FzBV5sH6xzzb67G37n9rLwFXWogf6YWeoGKRacLVU5U2ry4aB27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "654TTNKt25FDBpaTjodEToxfc84gZPqrvoxbh1Eef2yztfiy9SV9uxxv5g9LTQ6Uxh2LTHh2BRYNLnEFwtEFQbCc",
  "key1": "48SUoAZHxm2FzREHeyZemNQ7qH4VuPb4FTAHko7P5pSjyfGyUg3bxmXzfTTUoourZRvzngYGWTFboUmxegJYA2QR",
  "key2": "35xc1MTSnLy5qCZaFR7GJQadhT7AGAbsoigS8YyWsTRXCiUqxC12s8kkQUKUaoUpBi7qGxk9Md5k4LdbPc5bk2rs",
  "key3": "48YknumrgjbUdfp92Xed962xDoZxhsmq6hb7abShbf2VddnPsk4niNigEJFTPGbMLwzoudjjJkYZNbL9acetpqoi",
  "key4": "3JXd95fNC1hLxiSnBxquMSNyJn4cwajgNfmA8UTcek8YDYPf3rx6VUQSsJ3ZrFET7S3fiXTYJtXjyQ3829GANt76",
  "key5": "41KCuzJk9KWZAKqFJYve4oET6pjuY5DQbhvpDYRdKi7tvu8RuusgpihfkyfrVmCqz2eqw8H9v4nZUtcFmibMrFN3",
  "key6": "5rpv52xMqwFPeGKknf8zfMwGXJ11sucin8tfSkwX9feoFFLterP3WQpfZVz7ZLaVxVPgSyCxzHSUG6F7yd72wcfE",
  "key7": "2i37CdhPJgZBUYZ664rVLZoMafj443HU8E3pz34tiNc1RRJq1Tyi9ry878GeesiZZkc8ZiUcPxv7ijvdnXYi2KWh",
  "key8": "2VBdZVvqotevs1vmEJVQpuWBgfykQccsG5Jhy59Gw3QiSrtKVrhhu1VS2ottvo39PSzAUVDkHjpkzRHPQn4iFbWu",
  "key9": "3SCpSxcTAPokCBiQde9V3585vYETRYFsCGLPdUXG8RiDuaMGiZ8Xxho45QCABvKQkzuKEcnwXPNaLL4X44wWq9CA",
  "key10": "2sKmcUTdAFzEaJFhFXSUUQPyUQiivfVANKLHRaf4LtYmJB6gVDTJKbgiYy5u18UinhAV267ndxqTYDNbwXpxazdA",
  "key11": "3m89TPexT7uVt1bc2AEaswAK8hv76MX5PoSjp944KrnqncVmqrQ9sHCK9Lu3SSEfBSxuFJyUf3XVgaLk5y1BahKP",
  "key12": "fV5vuUmPPRDPwqpZtP5T5V6M8JzHQUfxk3bxyAATfuMmgnDC1sPJ9fXT4qGuH4fUrzTpsK2WuDSZDt2DvwKQcus",
  "key13": "4kcLfivqL4UzVzr2ah9172Y422vJuitUFhyaYjVbXRtDm8ftPvuaXT33sWMvBqB5qdMk7jMW8siL6LUnHpuzhW3Y",
  "key14": "3u5CjiC5QJX4Wrkv9AuV746Ktmdvu5BvDgtgnfnycCLMe9beDgHSufVatN6JEC26xdzHKpbanXiLoprKeBV7Gaqg",
  "key15": "3m5NxQ25WJusCtK9v2pix7N3sbFuxfFebQzEc6UQ1NhUDeUCxawQp1Cxk7ytBWZ5pjNSLAGWeSkf313RDZmyV8gR",
  "key16": "4Jbv8Fmqc9SbtVAxZ63jbsinARA1ypqmzrn8DqumhXzFafYoUE1EZHjZV5zFs46GGUzMQDTAzwGVHrrX26kSGpES",
  "key17": "23brMjMTqPoXJATE58cgQMGu8KucEu7xSrZA2Ywd4HaiG2QnqGRvfWPkq4T5YEhC9bnGbiMqLHLWNkWRSUh3xD2y",
  "key18": "ig6dLJtGvsQNYvMtfgeuu1yaZYhULD8SczQ3cMDMhauNwrH9SRFw437UFAtMcx5AjjcHJAvnUNLa3ZsKsnGCT1M",
  "key19": "5hZ6raC7YDPhE3gaP4jkpQBzggZ1q3CKWZdHANNQGcm5ouNQG5nL13tSUFgmNfa1XPphZ5frg2MeqXQsDLT1HqR5",
  "key20": "4o5za3F8VpaMj1cVpWqQXhHA9VA99LNV7HDQFcMaWYEaEXzYRBW3BxeHbb5UNYQSGkYA1P5ryyTBMDeoR1A8n52k",
  "key21": "3BDuMLZicB35VavEuHij3RbiM2K7EJdw8Jbapoeu5uC6NZr3YcbViAGVL9cjs6UDn9f4me45Xuw26uLvvqV6jdgh",
  "key22": "2edFqSBFSZCf2GWqDmziAjip3QUPm2wdDjtk4EFUUQmuZpprucTKn2utb6uobaDz7HnoFawB1JedhyR2iTa9WKDn",
  "key23": "4XWpFocP6pHMLLV2fWieU992FY6L7KVNa8yUgrki1gz9DArzbSxjRdWXH7myLYfwRYomdy7o8DLQE71roWQ1nhrZ",
  "key24": "4Ch7YwCE777TPUFJJ93ETHfkyXBJDuMtbotHPpj7vSBkZXgxN75pHSxaEjAJ3Ly7nq9T4o1ZhRH3N9K5U6B12cze",
  "key25": "64eMPGqF8WBPZ9JMj9po8XbFhg2TfBbmsMvBgyebf7LTdH8qF4R299bm3ERpirFMUcFLQPw5fgmpWGNCBgdaGMAd",
  "key26": "ZDZK74wJzfm2gZahG7LYomQY2oTpfFcNkzxFgTWyd7HX2LbunaCWrGUfPMt2vrkUUp3MzxaatUd2B7gXmr7Hbv8",
  "key27": "qWtCEvndwPyftCMktZ7ocVjNHh97BasJy3njmf9WqJk7JyV6KbSTRMSXtMncaufvrUNpZLeeAPhzbL7pUqKFB7Y",
  "key28": "5HDx2ZKBJ2zVePxh8cDBEHu4Vfq42ngVofMQCqBJVo79jEfWnJYZnpSUvAE3dnEjVd7i1Xum4X52iFoQViqXUJb",
  "key29": "2igJkB8YnyDJCeGVpqwL1VHoK417qStzbTGdPaCgxQ7zrpgVL8T74voYpf9GFrcJ7BpHBKQKb9rpedeZWvyETZro",
  "key30": "26xGFVMPCdoE8qvQ1FwvctdLXcX2qPLhVbq9UhbgE9mWWr7kTroqf15nsaLoyAPjbdaDTmNHws7K47sEYUSnFyLr",
  "key31": "2DQ7yb1huDx8kUxK1SKAsRcuMFQXPWJLcZ4YaATZR3CfFgcEK3SCRK78eWe1bwtjtqbZyNysjxTVT68bsZ9HPJBs",
  "key32": "5i2fu3GrNxQEkJht5HRtmD5HnSWDE1qABFBE6MqnmV6PXLF7TPFtkNeVPvRhxWZaKVxgw9zJTAbv8SMdpzPUQMPZ",
  "key33": "2upZRBqhfJP54jcWzefU5d4ZVnL9NSJ8MXRGjD3k5hbVcSYhGS796cZPpsb5eJhQik5Ve45M3i4Fdu5Yz6qufUYV",
  "key34": "2rUVbcQDbJuKNd28uYfsDgGz8x8RuMz2WxzDDTPkRVH5okzHNWmnsHLfyNTn1wsbRmLnmpSq9vdGkiABtCXih85o",
  "key35": "5i5WQwi7D3wqjvUMdH7Btz9ABywHGheQ2PwTPr4WCqG1hgupfmCzS2BR8PNnnh24nfMiWttvKhVyVJ1bnGf4bZeF",
  "key36": "36E61C5UUUQz1QxExU2QkRb9UhzYwB11jM5axjAnx1HuzHHNwiyPuSVwVzCahxXaUxAaAJu86Uaqnqt8XZAvjqvV",
  "key37": "2Fmb9iBzgcS6J7jvRaHCGouhPFNDusT5bFB5eaWj5idfmy6UogdPFj8ePz9BSGfLcKM5w2ydGJsvvQNgUHdWFJoW",
  "key38": "4hwggd7ujHvn4N284y7sHkBwETxQCQBFnDhYxvez8aLYzpsxK8kFpvs3CDDJac9bhukyJ2BwRh2xPpnFSKemFmbr",
  "key39": "4YrVFXJjE1LrA7qiTWPJGb6PYttx1aRKyEuTFFXQNFXqBHtffQiMCNgtBZgPgVCgtDWfZG1maRmLvH3pCNF3i6d"
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
