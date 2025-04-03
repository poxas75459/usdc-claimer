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
    "2Uub9JvLY2wLeHbPHdSBWAcjuxnBR1yxz5MjDt4nkhQwfXVPQB6GACDRGBqvMWUeMYjsAiin29jP6gvotJGVZcBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iGQ5EQY2F9FYTQaJ1koXdReKV27EeepGFi64wsTzGJDgBGM9PCzgSxvXXc54DFpYbd5p47qt1GMLPRhKbeFxtTe",
  "key1": "3yH1SAcobWjvqvuJe1zz9DxpwXcQhtN9VXuXWDnryqghZ5PGUyxTN5CMWeB96PsiqMkS966pHZPTsrUphoucQf7S",
  "key2": "5y69JvXhD2yv9ejPuVMR3PJi3BeeGhLu9jYqqbxsaGHWsPSMmnkWv8him5tv8fW2APXg3G5GfrAXjZUJpPEk2Yj3",
  "key3": "5rTkY1xQQqpJZMmYRGex6SDWwTTGQU3YtVwfQbE7DwmoFmqY3xj6DpvDSFpTfbRq9QHeCWQhwRe53Qwrznc3pjoA",
  "key4": "4hTLuNBAfXKLYFpqWJYqEYRNwiaPAKwqHteP9N97XsZgP2XbQ1jYxBdbMZ9M5JRF1it3P38WdHtTxxW1fpPHLPoi",
  "key5": "4BagifioNURFeUq4SN7YjAMAWUWH8VSJv8s2QrqAssaprq862PiwSrYWrz1RLNsYq3maFYndbWjmnCu4R6qZvBJZ",
  "key6": "2tqtifeUKH7np25ogNbVeDZXx6dN2rKitoJuRSimFmEkrBkKuxxpMJKPGgDh6BdNtt4RHjndZismgDvjAzxVfJDW",
  "key7": "3fK8fCkxepzCqNFv31kbVABnJ8HPGACfpUZMx1UEM8jwdnon9ohVvnPMnF894ULekrhv2fSuzkqMunQmhbj7AqEG",
  "key8": "c3UMcEFE8XvXHT2YNmXwfsDhd2jYX1p2aiApPLcJFYs1v2a7XQyszwRtwMUNP1jv8FyVx2MmkeXu31PzMdBrxFb",
  "key9": "4p7aE8x9VN6WfAJto34V5zwb7b5r8QfhP36xaRxtSSSsoFwix6k2aXDAQN81er6J7z5SNFLwwCvYVvXGvTYQYLrx",
  "key10": "4G4iFCsr2GtsMjAzJsAozLV4A6ovR5hsz3PTDAnETEH6NfksPaLSfPMg1iT5K3aMLUxFLaZT6eYD7oePD1UVwHKt",
  "key11": "5pVDif3eohSZMKmXBsFcXMuEDHf9sHjdpb7xBCMju3NeMUmWxbMPf4okjdWhYUSRNQoB1Qfo49vJ5X4vzzKuebQT",
  "key12": "ENKdS1tMSSUiNHpn6eFQssKkbJ6KPbG99kKJMJpqD2zb2Q3Xrdh5eUbSa3hjcTmB9rvg2P134EH1ga2z6fJMvfN",
  "key13": "2xiAhw5pBm8sCp1xvZqM3nfCPaMFT6vTV3F8q4qmiK6gVSaHf58ezZ5SbRYReFkV8uxxAeLS1rk4LxwRoXd5VKC3",
  "key14": "LaBvSz7ppBuFpZrMB8MCvbMSKS5YhBPfRADNHBU55V3nit3wCrwanxNxoCzHr1D96kM7jgxc3PkWdoov8ufhgLt",
  "key15": "2e5vgy18Vcm1CNyUzE597riq62uizXDjuUWH3aBU48yQMQxQf2oDcGEGcNjDoa1yyHVCe9cKM3sYVqqyPhwN46on",
  "key16": "StNg6JtAwrSs8gGrakYo6d6mKeyfVv1Q6G5nf5CzuhrqZ6f5Czy1XPn35RnHNERT1N794st3MULUUaRftuKP2qf",
  "key17": "jLcMm7uDne5eHKFrd4Qd4rH1cBbXbVNwkrmCV2gNrZcy9VWqTRwZ3tDyPrss2XpPm2VubuPJrQ1AEgdBFf2JYHd",
  "key18": "2mVYVhBU9mF3RE2LekBY7eatZaqMxso4MPP5Tpdh4BVDLS5qDmeV2zDxGYPprd4KVXRXY9WwYcAZxurKXEKJnwWW",
  "key19": "5qyyEEGUbJeL8sttsk1br1nWBjXbcjMuEqx2JYtuWqqCiHgTUc3CyM5s8q888fxiySdqWAL1iwYiXgjDx97QWuSf",
  "key20": "5daSKU6pMHRDcFdqVDZi83CRvQGXviioe1uqd9WkcvbNuJuz9BjUjWaj6ohoSRiBx3j6xhMsXdfTS3khAJjuXKW",
  "key21": "D3wSViDJyCsqnS7Ykn5pD7m5VF49W1sK8G86rb4HXqGqzmSR2PPj48wLWJDNv4bWSmn8ruP7tUEtoJMPZFrtvid",
  "key22": "3FcVxwp9H8qe5N3i3KBB1KhU81J4PJyFa6B5SGu6MkCBrtgSBLxKuUbt2aWq7i7JfFy1Kop32pCUgWykqfGeXexG",
  "key23": "2nAeAnqYJ4MhpB6Xc3bzjojEmHPKMaSbtF16LNAPESNeDvD24PxKrKGxMTvajZ7E5yJxWXyqey3gMCAzejt6DyV4",
  "key24": "46UYrkhnwFBnXfAW3uxjt3qzJNtTqpTH9XqzXbPpkNgzspUPf1aSqj8cTnDdTV5SyuzC3TAjqeBXLncV9evU4tFa",
  "key25": "5caZnpfMHyRcW81cCFBynfkhpX56QzsCpUi1upJKrGtwmGk777rAaJzKSkEE6PLikdjepGxXdqphRav7K6Z68NAq",
  "key26": "Q3cxh3pZP6WUHXTqJm4EYDzM4ZENNFQf1TCW1F4yKLK4jjMhRKpKqv8TtFBNLvNCDGX3c3HvwVv7hNPXEY14sQJ",
  "key27": "45F7uiCsWTgdJy7XeZ8s5qvPywynG9SJ8Pnttpz5bkhrB8PDWtf3rPRCBQx9dYZyfsFXES4oTxXioeaS3AngbdyN",
  "key28": "HUMCEvsbTPUpMuEGGQMaKXxgLAmc7hhYqeeFrhZzrZu6xNWdV7aWV3bRFukbbkmsZ1kv3vx3LW86iGhC4Eum6ve",
  "key29": "4xDa3uURvTGxzmjsLhcCMiyTUy5UFr1F1CDvhed1zRgY1stTcnPDu1sBYMRCrfP7DyRNzsWYYn3NM77667Vxwpg5",
  "key30": "3MqwpDaCH11zg1oFU2zDj7Q8qQoQoJo2beJ8DjVzLcd1BG7WWRgZjNTQeBfCgpARxaefBbT8uAk4psaQ5CYnog55",
  "key31": "4nxAzYWLV2jnL9C43Dn6PBQwmMG41SKt3SYtVHSoNEj5HyZrC1hXSEc4ZwH6o4TvBospPoutxBrq7Lmmo8FtAizf",
  "key32": "3CaCJ9L8SefS1qWB86RW8zn8CP33gpkoWcNsAA9U2EBVArxpH9Mp4hcRSmuXRj2Ez4rSPwQgTcrhUmhDMjvo8hNX",
  "key33": "4psLWmFYMwS3Ep8GfrJsYcNyyKBQ5PyQ2ud2YdAcKZkpfYWENmMYkgommDCzWJLPsaxDPgN5DmqtxsMP85YpbnCq",
  "key34": "yLGqbptL7DhwGma2qWyUCD8YoXcqL8XBZMgqZxhsSo383jLCYPZPYKK2P5oWpT9MtawmvGmNs8pDDfCDvsN9waz",
  "key35": "3KHVg85HvJwk6sjR8jRpUkrLBX2iPAB5Apxp9aGpFnDahwVq2SHQ3G6Lc3b1sco6yfPRLjLgVQjy7Gkw3wxmxUPz",
  "key36": "45VwHQ1HaS7wxuTVd79ggiNd5HuPpvL83GR1k45YW6Up4nmM5NNi8MGTi51q6ug6eRCMSyUgA4nFnhHJRWKoPyK6",
  "key37": "3SMApYQYjjC4WJAYe6NsagdEDXcRj6aAf4sW5u9LMAikN9bzUyJpXPejQFo7skyjSsbDg2iR2wUb13Gsx55ArAd6",
  "key38": "5RbwFyva6PPPZF57VAPHVteiM4D5YmeFWsiyVfDsUfPJhgrN6HPdqT6pWcEdaUsvtf5bMvd4FMyypRoVTZCgPoiw",
  "key39": "s95DGP16h4bqisFTaQmPTmSiYdY3AgQSZKqs7rC3C5o2KYfTRsGMaLddfwiEDapa5q3U2zrmEbP2dSETGcdBDfU",
  "key40": "4fLtHEYke9k17bmjQi8wqyWMtKBkjqdu5gd2Yt4ABb8Hgu2eb8UHv9o42diqnQAkGnRrmSVs3fWJHHPiH9Yqnzqc",
  "key41": "2NkoyogDkM62fdqQ5ovUywcoRjTx4rGG3gwHYZixVLfPcKef18WqcNd2xh5fZknLmjerLRpk6fo5qWvUKpvCaMW8",
  "key42": "3EMTe5xFUPvQAo2zEyNEyPpTSA7VTW4mHtjyFg1vFKQFkTfcbkgvQpSmaFVq3XzgSx2b4aMqFwz6cX1QvrCx3rrN",
  "key43": "4rvum7H2bYW5Fsxxs8fejnxDVDXV73FECSMqA84Hs7zF672J1KYNV2jwAeJKggWrRYnz6ks1CLr4ThwbR94hgNMe",
  "key44": "36m1nin88YoT2ipVcfkvNtHqZFYMCEpWdK5KPYhBL9BCWUn5kgbHmJD1buti7JpceNWRRPodCSMsNcvUcewynSQR"
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
