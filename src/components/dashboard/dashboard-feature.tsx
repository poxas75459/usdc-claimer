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
    "2bRarSfn2vun3NYA5eyJKwxqiJdRTtscCJKhLqTRGCwx7DHSwH7mwHQuwzx82wUmECMaEzdfMkchWfTuLiKcyMwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51k3ZNrXkKzXCDBxv7vHrweYe3KkLSvniSGpuSZ3qn9pt1VoxkF91avWrjJqCzvqamEiuWPaK79mQCNJUMDYfpUK",
  "key1": "3UpRSVRgxJgbLBLnMTEHwKBgnfUjARYeaaRgJvnHrDmk9sZEtsDxvvgchmbEu2DwZDEG9Ma2UvJQu9FDZRWu14du",
  "key2": "2CdVV6yQg51NucxyTf3F2fireQuohQ5TC6vKfK9Rrk4dZz4eAiJRj2MzBt1qsGWf8uzDjiTLSHzY9K4ja3djsjTt",
  "key3": "37EdbMz7JyJad2NX1MPQVfMxEAKRw256tXYPzLA7RY65oxp4WmdzJKkg9JehDTNKMEs3p55B2Q1aKsc51aMph1Nq",
  "key4": "4tiqN1A7swnXWj7e6Sew6PYuNi7xLQY9k3KPFk93XAfeLZ5ip6KbkdASP9nNiK5E7tkszSWj3dA7W3a1x2TcWfak",
  "key5": "6342QCYV8kxTjwRtSnfkvsUUGuFPsHcp4xJhYZJc7eJHP6LJcRLgF71QEVLCfgdKC1EhAWuJLSafCPSDaiLQKQz8",
  "key6": "61SovtGmA5p1WivXex7CoFCo9PofihsqN4bWmGMjEyE8K8jShNK6ckDNJ1pUuYj43jcJYYaFvK2MpZGGjaBPz4P4",
  "key7": "47Yik4RtGHvRnTcUifKPVimXYD5UC6F1XWhUNvjsd19ChASYrCfAfef1L2D6iWTENLuqCmRxBzcHvtajkyms4bGM",
  "key8": "8QGjyCx6zcw9xqttEF2PxAE5qsarwqXZNdASq34omYVsXF2THzhZXMhaJ4hZAeiXnm68QEnJBF2czxSBEqdSX9H",
  "key9": "Cmn1ACfEzeyU22oebQ939BZwXyr9C3Wfm2zVh6qyBLxQ4ZzqChopTn7FS368SS29tTdHpYKoZypwRBvUg4AB9j4",
  "key10": "5rPn6obUfMCWExGfdt9WuDreDRWgr8Q3a9pFyFbF2NAfPzzoja5Xq2B9nr3AXUMuUoSswTjB5SwWQU4BPmU6LX9M",
  "key11": "3TsG5SKoxc4DxGmcTCdrTKvVNpK2QZKFGeAa8PfvMpWB2FZEuBxQtsuZW5HXFdmKgW62tgcnjHuS3P6qLjDHiKvF",
  "key12": "2rxWTtmrhWEvQ555oNm2h4ZhaVFJ7aoE8Q1dtuYFnSqmSdsuRtBxTdsuNNiTFy82XsQNb8qPFAGjSB3At9XHdARW",
  "key13": "4Uo3YEdqUcg6TuDyBKoBQaCVfg8Lw9RUD3PGbQyTzY2DFCW5phc8JyQo6a69h7L8LvdqYWJry2f5yGKGDatgqZuq",
  "key14": "57yYqnqT7z4NCCHswRn7qd8M2CaZ5GbF6DGSmeSAr6kFzXSHm99zAPCiaQr6URkE64Y9meQTBgNBT25rmAj6ts3Y",
  "key15": "5GZzBDm6HCS83B9sug6PREuF3xBX6EzVJRScKpgwkWu8MiSDTRXqCd2icDoCm1QQ8G3iJQJcrwCxXUaiF7GdJ6fs",
  "key16": "376ZrDZsPYACN4AKDoRYRc8xiva5GH5iWy76tnH6iesMBTNvRiPu18ujz6vYmcx2nvoVJwQxuGbwH96aAz6CLxzW",
  "key17": "33t4GeSjcX61AhJ4EfbAWe9FnKNQdAPNqi46f92epxyqqaxxe9Ei3MZj9h9k2oP2q4xmUYaQWCKp1jw2Fjwcm9aU",
  "key18": "55MrCbMDhD9Njwsjpnf74pTLMCXJjapcLfb2qo6ye41vaMDRBKH946t5jNeCyCAantExx1eC3hfFb1A4WzfrttwN",
  "key19": "7EuK1ZtibLyHNUHEWvq5LRFzMcmDs7873aJT3yXP45WvNGtqo8gk9MARTCJnVvXMEcigP7svjZg1FYvVa1P2e3M",
  "key20": "tNKYUJszRM7M3ejqWVRr7To7H6w2zP8it8ZgBMnbNMaF983ckcRqoYXkqNMa3yqfE6EpPBsYxaezc5uk71J796v",
  "key21": "3rWFiJCMUeyzoZTSppNskDBCTB6Bg2br529SSfioVNBFwDr1ftCjQzFqpx8gYFcBUVWuBDjF6XgGR6ekWNwRZxV",
  "key22": "3GoLu9aXgnr6mpdEjJErznBY8gC2vTtLr5GpMkMEJWjAww8BPJ7SvQMVPvLAFA8wwJkDtiC7TgG7qDwJfHoatoqY",
  "key23": "Q7D1zwKayCsubqsf2AXQm6w48LZfqLGeR1hHX4oZwJn7nMxBzh79sjZnXDLDRM3HGL7v9K8vpPSb4i4tKrTrURr",
  "key24": "2ACJ61Sw5t1j7ABT9R2gyMNNhHsrDojBGmZptiEYt2NgZEt7cRAdXLDzbYdbaNKScMavjWKdQTTLKskpSoFk2USP",
  "key25": "29wvR2a9ZLPnHRExVgcyVG2HUvsnxD29T5Ut8N9krTAYV8ZWXP9FenjMdGJnJAMP7RMKGGXMUfXtuEt2Lcdkiomf",
  "key26": "2CRw2QVPfdxqNfvJLLwh7uREZFN2wnauRrVVsRhci4VwN1xiWzgNUEHsvRod5gVfWCZm5c3oNjAEbAcVnCNjzg94",
  "key27": "4ERZDgXnG1ztNmxGfkfrc62CVvhpXEzHnZKkxSkbdNpy8QAj3mkhuc9yjfMyypKwDfyLrrKveGrPuSiRag7osWLn",
  "key28": "2qjU8iA9Y2pHuF3SwTBqhU1s1H7uUKiaCjQkDCyjVtnmZtbuFSn2EN9qyAQ6maeWvNkiqvhZ1YxEf4DjaMDx2NiA",
  "key29": "3fpBnA1F5mbEBNeA3Akms8h21J8QTcFJMJEmE5dn7SsRMAoeKjQ2umvPBnSKk6foeToQD4xsuk1XbT16qdWVzLiR",
  "key30": "3A5C1iqyKs6u5jyE6cXekqhoPxdp1DjrKph5s7UYKDqEbA7h7E7FsKUKYSnjDdXU4tQ46qX3PUDHtFj4cVSnacFU",
  "key31": "24DJz1jA8z7kuxK9fYueEC7biRqScGegUrMn1xJSPhMgzhm9MFc8meoT1h4yWgRzBPBhmLtvyeYVzTxrUaL2L3Q4",
  "key32": "4wdgtVtK54ZddTLW8y6FnX3qQoSie2gq8pjJuskK4qtNx6EV7TaYMmUzoCWHz8MJ4K7siaLdFW2Wi1Zh9gQL8M7j",
  "key33": "5Pvjm9kNTEWJxaYvroupQf4LrfUZTezRHvPXxVRVkNGSwiKnPkUnkJFQL1niyAGjGvmLF1mJ6ZtEFwY89k6pKZUV",
  "key34": "64nfsPd3cksXQjcoUmsVciU5umeQq2jkahxSuS6gAriKFA2v74uVcUKP24wCGoHFvTxcZ5NaXBgHJhwL6CBAAeDu",
  "key35": "5f4RA6WBMf1yFphuLQ184N8U9gCSpDazLzM3jwdDvTJ9viobqwqmC6dLXU3kutrS2z2S9gnWgy6VuZPiHygg45XR",
  "key36": "gKWWR3V63LNFTXwjjqPVDtiuP5tb45hmrczjDDGXoB6Rhjnd86ho48y6LVU6g3L3FrLG6uLcUn8F9ogR87cKBaQ",
  "key37": "n5fjLYeytCVsyDEocQsyCq7yYkJY4VKGqMpCHvh6NJp2gJUEPavhfGq6hFqcAXmNPAp2qtNjkFh2vQD3HsFz5cN",
  "key38": "589Yw3FWsivyX3AuZ7v3SdU5Kpy4XPykZDE6JFJjdDEUkk4VNBLRfua5oXPPMZ5uuDmHiqYdjs5KBuBkkNX9xTCk",
  "key39": "57SaFr3aPaAhBKxfKYrmkDHTaLoiBBtrLmC8omiXmAz69Yoxw79ir9h67g2gQKbihQKtng2NrjfgPzFjLDG49VxZ",
  "key40": "3ofSMxKfRgupSBSfP9XyX5KTEir1Ept3ei2Yikfs8YNdPCx7Jk8DVbPhb7J6xcHeDiYCPSQAX1KF9dLmMjjZ5XeV",
  "key41": "5f4AX6gCXSnccw8arff53Bef4Sh5isj2ffDU5feJs8RPunVdgSLH8HAzY7QUZgo1tkzqiuDox81taidcKKfkgW1X",
  "key42": "4FVoStQQ2wdxNuhRqsamdS5tgPvD1QA8ggjefTbmnxY7yfLS8xvpR3mcLJnULsqrhoysp4b8Y71shfnMjogj6vKf",
  "key43": "Tvppf4pL7hUfqhivYdY5EJdN76TUZYoEFHgVpdvcaAjhBrMUkPWUuwmEnB1133utCqTYpJovLjjn9jPQ1e1mhKC",
  "key44": "4SxcYNYFMga88aNM3XHxqbb2YX9TkEAzKNnUGVG6ec33TmoGmxa15UFgKM7DMajDZjtdhpR51B2tjLj98DwXKDHm",
  "key45": "eycprYZCBJWB6dBYgcDYbewZc6wovWKvZP48YVCb2bwZ8hFKCNUr9ENd6At89ij1WWuDgyBc3XWjkXYEJXPRr4b"
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
