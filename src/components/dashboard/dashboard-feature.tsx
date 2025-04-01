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
    "4XwPS2gqVztTp2HZw6gntRE5vDF1kf9K6pX46sWZGkmkwKjsTidC2yXNJJpQ1ek94Nm9iZPC5rwj3Lun2cKEs4k8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zcxP17rUfG9viipgDX9r6js34X1mjXqv1fjLA7yQxd8HmaBfcTGeFiMWfCH4SkqhTV5e1g9AokVSekwyWpfHjNm",
  "key1": "kTho3VEj7PPTvtLKVHUckeGu3nbaqpKb5aP9BDDwhsWyruEWgwdbNq5LLFJaeqm7sdTJCUypSWzMjx3oimjBvM7",
  "key2": "5k4AovNeGNjoRyjMR7h2cw5Hd5EGkuCxFh5jpEKpFJaxWGrCZTmLuhkj3QDZCU8eRhCZj2wGTVoFzVx1S2wCBAmD",
  "key3": "5EHFTUh3GqQTGGa6gNzW8LmNzCzmCaPFc2djsXUMAQpmCyKDSvXP29HUwvFP9UVup9uktofmt8LmYyfEs4gAP4n",
  "key4": "26jJX2H1FmoMHuhTaQtZfqypfF7FuQ8C8VkE2uQ5jjjWHXpRd8VN8GtAseuFXDT7v1NbebeaStc4XKVj96iMZ6xT",
  "key5": "2KAccvvLnAAHFLaF34riBsy4ysHRKUKjGRktiGnLtBh8kbnLQxg98ut99pFtSYo2k3WamjXCwJ2V9NypxJek9kMU",
  "key6": "4MLvC7VAg5AS57GudmX1GUn4rq7bHi1f6Yn5WizVCBPet9XRfU49bGD5kZWT8ezC95i3mH4GkEci56zxhhwJwB8B",
  "key7": "4NF6dFRZKGECHRsbCjg8d2djbVgzNKT7ve5tDXVkXBGmM8jZwomfcycbsfGXi6771yNR58u98ryA2eJ9EWTDiWh7",
  "key8": "23it3bFEm3BMd53rAwiCcXtszMzz6ayCoERzuewn5fJc3DqYmq7Rz8T2uehNTRwHjk5avPqL8s18GvES8xLZxBDt",
  "key9": "3LV5SCpFX5XPcgP3ftm3SL2egfMPo4L2jLN8dRfd8Xo4oDXjztC5qVfMkf9E4NFD4i6c3D8s7TCFhnFuZf95q3or",
  "key10": "NaThjpJis7mHU3W2S5XUiDcte6LUDDihkMaXPCdq7FpZJPwhphKev45dQKtaaHzgDkTQmbQW7h6rZdbJ65NJaHf",
  "key11": "3rkFCZ1VRVb9HKfaef1ZpzHo7AtwWYbHbSkBCHeGCYp1h2DF3RZn11SCPFQMuacgLuL9k6duv3g8okujGATG7Jtv",
  "key12": "2LKSQwPHJybyBcj4BspTFYCmy2QjCRBQ27CE3PdKBPz9uV5qHkUt1hUJwkBid4XQ5FivnfmmCBYFQDFGpRmsD7jU",
  "key13": "Ks6HyrF5tMPiwk4V4wGDjaJiZfFYuyv4h4DT3R7YD4CfuKYvmASZgWGS2pNd6ytQ7rpYdpCxXd6662XbwYE6XBh",
  "key14": "d3wPV7YMsWeifExSzVNs4qL3ZRzJkkizH2WwEsH7XKgUCypSjGezQGv63m6vpgjG43vskZevJ7fngKLTzgU7AiA",
  "key15": "BzWN1s1HLdqf2byypSFVj3V6DTLoVx8tuZDnfJteSqRdq4F7tv8rzGiWBBVKVbe4zUrNNW1tkfmzCzSdvFpcc6W",
  "key16": "5PMtoqWJwLMDRujurnJmDWLrqtDV1cua4HpWu8Ct5HUpRE1vaSFP52Fh9fyoMpsJF8Rs7y9KXCyQN3joQ2MyM2Xi",
  "key17": "5HZJaXAnyNBq7fFgwup8MoZXUoo4w8taXx4cEpYs9iGPnF1BrgeHysYmp1AJ4fMgyz277LYwvF2F4Tk7TFScd2Rd",
  "key18": "ZzGmBaEbRb38UtkEDNfZu3GoA5JtteiVh6CU5GfBgpEuFcjaCfyqKPYLYnMJiNe99iRMe13bVM6JnFfWujvYBg7",
  "key19": "22wXpgL5s1zHs3ZQzfhYgNsA6hwhfWruk3WwXi4N7tGEdKrqjKyie5Scx9UArBTnV56jDBMDAWa6Xz2VcqPF6q7Z",
  "key20": "2eZKnmZTiEajx14m9qzjBzy4guaHJ9xS6vSTZb2ARWqn9JR8oph47oNdZoZ5Rjd6JzGiiA6uJodxLCAiPFdCqd4c",
  "key21": "3nukvES1xTDGRjVfCmGqZqg5hNnkV8Zze43darPnunR8Hmc4mSt54noaByyrs8AEcbT3mGtQ5C233X7ztt8LNE2w",
  "key22": "2tNQpKgtS2cQz81Ta1oHTjUiQuSnRyXEYVvufjo1aJJyjzS2Ky8YyMkQfvNiuTefkmrAbkwoSokmZVkTWtifqZWn",
  "key23": "2wzj8bHKgRuigCihQ52jDR6cfdWd9Ly4VymMXEfWwCBwuMLq1UJpsrfko3KvS8q19EBhS92NDgN483Pyu9frPkMJ",
  "key24": "RqQK4tVz22E7XiREMYbD4xTtRZiDdQxtncba3U6sKAyyCZiXp4XZHDHsH9fF5xA3pxAKfkiLATo1QJ1jzUvD1GQ",
  "key25": "3ba6SGHuxCGa7JuQTDfstbcQp84yjrPKefmCwWDYRcGegfovHUmuFsqPR7hanWCPpnerEPy8ij8oKpeZLt3kozJw",
  "key26": "5kjareAFZACoYyFrRP12M1DMo5Vvvec9DPkUYwDLrX3Z2qXg9apgyEsido2uCUsF3aPHuoriRprhTLuGs2b55a8D",
  "key27": "3rxNZ4Dgj1tDKyw7szmkaiFqLsJLjsQsewbw51C918wGiEsZtiF7NgPzki47yZjmo2V2nuFErpCbAcKxCv3oHicR",
  "key28": "3aqezWmYQAvQCBgzAZkRLf65EbX9336bbrt7ctXfCwszH4Dq5a5s31t6XaF92Dj8K6SFeAXYqY48sn5JLsHTgGzu",
  "key29": "4WB8E73adAmz2xwCYCXcEeGHxNQ9zyKBtmJ2ZGosoUdcUjRwCRixvLsdeEvqHifRfQpFo8miY7iddNDwjLFEN7X6",
  "key30": "NSB8ihFzCpqmNXwjv2sMTbGyVchbka1Dop4MZrUFtu3u9DLtBiar3fgBWztJVqoQHoTNyYvKDq69evFdD8TUGxU",
  "key31": "UY35YJF6jQokXb72ugFpiGmLQPayVwoExjdNeuCBLJvmTrpeP6AxKnY2eyL9NmVnyJPy2fqzRCDaANKGQ6AcoD1",
  "key32": "5NvzCyVWFaQe3tAM1ZvsfxHErsfj81926ax5pYgN3UmZFLxNnsbdCHcBpTeDfrgWqpckdvdJZJ5TbYn1hgHs54QJ",
  "key33": "4GLifMgKmF5RGLRLBi4er3vAJsHZ7WWeCyUkqpyve48bkFEGdVnv6sVXPSNhBL2jkuMv1vXwW2TRUCvKaD4mrSGV",
  "key34": "3BNQc5f2zYepTFJ2uhBoXUEQHWVAmBgXD9kToJd8mAGaj3YAgVWXB5jQtLLv9GXna3eWfN3NWq8jEPxGETBBT4zk",
  "key35": "NZDRJNQiAwJ1fc1f1R9oUYMgu1DgDW7LwVvaqLvBFhhykKo5DPN2vReZF67CYY5chcvbjG3NCJMU1tuHQ3bLvQX",
  "key36": "2nFCYeSX5wmk53C5BLUcU4E5ntzQ4YGgqk9S9Kmm9SmbxtBYgNhthxsBMRtAAWg2VxhYjZMcQK64r1cfhiKoRMd2",
  "key37": "3PPUF2WPJphN94Jg4bEmJBugnG9BceMh83bEGM5XJDJ2ZuH3SLc6aWiS9wEsM3zavsj1nTx6QMDU2JaVd17tbrsf",
  "key38": "4yPCJExeENabMLGYgJcgL78mqF6kFF4FVMZSW99bhs7wdPopBVE38K8AsxicC2sXn1zDRNTSHmh8Ma3BTzfRaFSn",
  "key39": "4jpczL5m3hVFUPHqhAf5mikBMtv7pDEcq8x3T29pqhyh7W16ghdpw2zoQYS31TcMfvswzgmKaeKY2X8SjHwL5FPw",
  "key40": "3MBXV5eEXviEfUaquZr91qMc5NnFytNqryHZpjbPrLd5484zd5mZwVWPpkNVSJQPkxQ33v3C6rSqifvBwS1AfHAK",
  "key41": "24kDHDCZY842A9ov5FWkLyGbHdqkfcc1EBs2BiH1C9kDjNDeH3AcTHHaRd1YjjHdSkKbXz6E6vRaiQLLwgAgNvjD"
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
