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
    "4tagkcdEDAoG4qgLn3xXdW5xgzaetVND35U484RKK2P5sXcfjNZWmKTh4cQnFgVDCZmSbopr8KwE8seRaSkhFaDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y3TcLRwowH3Rxr2mwVuQdC5CPHP7qGfg2nF7ZH4Rf8suVjvaa71EwFjwsTDUzMXrgvUj84AVpSpCSZMeVCAr6tn",
  "key1": "2rncCnM8m6Fx7YD6So7VnEvPiFrDjrTRjF1Ug3QTCAGFSyuXbN4HmJpTRqpiNSHSWp5PKmiC9mxfdCqyrXVe3n8v",
  "key2": "sc5aTRogQmN2JAG1EzTS8eqmWQsLNy1N9QZCpQ3HUK6V7WVJF2MTS2UPpYm5v6c1S26oJHEWZKt4Jo3H9FkgWEU",
  "key3": "3gbeffYnA3whVGcAUkbCnbPz3egv4xo3jfMes5H2fz4MVhgRjtzhp1h3nTdTqQmv6TVJVXMv5ybMT5oGhwha8nqg",
  "key4": "5RHh5HS12yci2uhK2KzReAH4Pmjwa4QqhVUo28HZmAiMgPn61y6xvD8oox7GJccMhvC7p66LNPXx5oEByjhfUnAc",
  "key5": "4ZD44oB7kiyHBve4mdhnkmsEnRUwRgaBxEtqwXrbeQwbvJ9FgbrFZcncb8yPFej7VUiZDojLVwBSe6sdTwzSNjV3",
  "key6": "1bPJiuV34PfFA7BcsDeR8V841bp3WJowfC6pbnqmLL5XMBiLkUDsNDRi36oaSjph7agXC78964ho7S2c7MReBDo",
  "key7": "5r1bCePU6h5n8KnXZ592yZcFsLXbpMXpbNnK2QH9MSrT8nLisXD9fKJZ1fS2jyAPhTUrEfJXg7ZzKjk4Xsm2ACrn",
  "key8": "qr61ZJpRfmqi1sLXUeSAWu6Byd4UXYDmsVM345zw6mPQe7TfCtBJNLejo8VMnKGQH4HJiZBMmAV2qMY5aqfBBLd",
  "key9": "3Wu5i5NEzbKhK7yg123JjSiufFQDoamZwjBQoSRc8zvUr5TB4m3G2yS5EkncpSvf72dYqEkL4K8HTjJrvWrbcNTs",
  "key10": "5H1PwSamXKuhyL2yjiWR54FrMJaV7K3RAhwMvaH5ipuyz6Bpd4K857i2kKy5JQzVRhA5HKrh77FHXYSmBbn7Uzh8",
  "key11": "5vvCKjPZ3kfG9nrmW8wDQwNjYRL718bFQuZ3vF11zJKNXLwZgpt6FeYyUVx812ZHrmtLmkMeVHvN8f9gVdz5iDxb",
  "key12": "5nPCkm64XRBbtjvkT1mZagbL75uMHJuVPgryrYLAQqWKJGRy3QKWsCPk827nrPJqBY5pkzC2ni8EcxW799JN2utg",
  "key13": "366PKSuDshF4ztL23GsQy5F8NdKdgsaVFZW1CJwvANF4UWxwkvnZK2n9qvJhTWA3se1GJa34GxQqUVJhyst6Syyc",
  "key14": "55acNoiQ9PdvyGxvW7MLuZ4WEbd6jUHk7paSD6qTnsX3MRjjRQJv6WP64E3Hco2S3BVf5AtVrZzB6h4sDPnkVidd",
  "key15": "4gdsJBjbZqp8hLC7TmHXAFp3m1gp1ysByPnh1aL9nFoKLPz99eKaMnuMLMpF7MHP5nq671ywfCngaAPsvy8xmhvA",
  "key16": "2mhhZjYwMFkZu5xAGRPDf5HDSu4Zw956vvrbYLvCSW5G17EtJMqDyMi6XW1knnjP4xSxgRtLDHEKuDaiBQsqQDz4",
  "key17": "4YUJ1s3MUySaTLDGLH1m1Cxvm1pbZFrwvDhrjt7ytMTJ78uVA4PKA9R9d9nvVzBwPWPdFVRuyt7RmxpUwhV99U2G",
  "key18": "3VsfxmjSgRBRLua8KaKQu2XfjdFNuacTTYQaWNGYZu6tagkMzdhjnW2LFdcFjuZpBMAdrjCHVhvrQtzZySKVjhFZ",
  "key19": "38diRRhF4P4WGBd54rQFRYg3V859dtfUy9bRsaqjYMe6F1QjRdVNgjddqwSWBeakbZkwQmpH8PiGbic5kpNP54Cv",
  "key20": "3xtSyN3x7DNSVcTcRzQpKYGbtAM6uqYAHbSp8WciGhyUVCs4DqFSn6qerjuhwDYKSy6jcJk4syVtRUoufMJ2WBFr",
  "key21": "398wewyBJjxHt71cecYHwHW1DyvrM4CvxwgxfkQHQW684eU2zJvFqaqSdtedWQ3n8rkvh3jrLZCtPAD8hVuXUuUf",
  "key22": "39qmPnwphHJjUodoVf3fccXUwd4wira3q9ePdpwwS5xKBVebfQM2nwkUvZVHL2tvHQ9FYH3vBixbzYCHQVc62mu6",
  "key23": "3UmZoG37i1C6N6NAWV837xeGjd3AKWoNqeUzvUGdCuGTrSLB7Jn2Gx39CmbUq9G14UhPdKxz9NnHXqkTJHKnDVr4",
  "key24": "29UGN4sJ7arcDrkPhsjopxnsV2cmPygTbqtK8aRTMq4UNo9eXE3e8TD7aQVc5P9FYUyU1ZyhQ21cnU67kEHb2jLx",
  "key25": "gKAGtYzkgA34guPdEw8DgbdsWEPMwyrCdr2LxqdXSpjgkSmt4ayuXhAsmHo6uXZydMnHNisoax5gfqqqj9hsHwu",
  "key26": "4PXvSfdhGj9RccTP21b2SFxnYprGvsTUji87mM9NYDu66NZftSVwKmnQj8eW2Ns97FtrR9ZmjBMbnXEFUThErEBs",
  "key27": "65ZTmstQdTMPZm9iTp5ttg6uiqZLkWTBNh2Fuz4qtskRDHTLvp5cKnt7KnNMYcYqxk34xuiyHAyZD5LgezGDYk3w",
  "key28": "3SerSSu5Po6em7NsNr44YY2ksMthuQn8h5TkHUjC1z7J9DTZi93uYjjJ9Jpw5WDghV8VaFtheudtfSHiRVebPDni",
  "key29": "2KhFdsYs1zMyCewjgw6QJBYXvvC9HfDGsiFekeejZ9WicRHe9gK9rgxLPr5dAUzPNwkLxaZEee7b5x2jY5vY7PZj",
  "key30": "3b7VfoLRSS8j93oJ7Gxk95AC61wQjL1DHtMrjsejAyytYrqbK9ki8JKbi9JQCmwGhXvcJoXiHeZS9QmfA2fu1ix3",
  "key31": "61DYgN363xo4BpvHqWpgH8KKwQ5UTa8ahNXDC9jgHrfQwrNLCvCW2u8ufPZ6pecen8Na41f34DqkucQUAaaB6vCU",
  "key32": "3ce8KM4Vsey2QZvvTJnrCDsSM9WnnPQVpvZ2CKa2N1NvqG1UV4vZ95ZNmb3PjNq3e4eNMXghw9qbJT8LnXtmbQR1",
  "key33": "riR6mkBjGPGFtyiQj5in66oZLVwyMaztATqGrNDKT8VRVu4f3EWn9Dxan99NcNDruGg7JHQpf42oKoJEuKUMtQn",
  "key34": "5sv7s8JbVYwAo1ZPP9rcQJWbkUabzW2Y7NqpixYP1R6mKN7UiGQkDR81gDjQaBL6UvsqQn69MwWJUjTixpWUYZwg",
  "key35": "3ZYnZfWgVny63hcxwa3tYL2LpMMghRQbrYmtd6rR2EznyLdJtubvmba1tpg5het21Sb3P9auEXPhni6Jq6fFzS3K",
  "key36": "2HDwh5F9EyV63d1con1ohGp17SW9C12qa9JQxh1MVapNbRbfRQxSdirTCwehwvdJnafSszfXBuw4dmZ5Frpu6a8N",
  "key37": "4wLgkm4qKZKH7DiaTCfipYCv2af9rUGHKD2M634DC9v2rnNG8udMKnFCXpPUNqCR42vwQQCPfLt2TRJ8maZ49GKC",
  "key38": "4mpmAhcBJNgGb1xdpVcSRAqErfwEFGj8XEP32rCXNJSrTboEnPZQGAkqfXPvBB4mJ1JZeoj6sSsQ7CyswRwbnEdw",
  "key39": "4UQicp8pJAMkZAQETdZKd3apdVu5eHq2f8xm9tMFWwUuaxzAqamerWGoqgfjo8ZXfyD3EtwBZGjr5GLnxzTsbzFF",
  "key40": "32KifzcQ1pNsJ6tYGebfTmRkTKtX5N4aa1qq6mp28zwZxgwm1jZttVPDQDTFFKyCtgzEFGb9kp6TgdHiVYuncRKw",
  "key41": "35EDHid4thWtzPynHxGGCxfbqCqUHdFJD14JoqddTKzJkvu4TuS19WMezZ1E7jNWva54eiLrYNezShtzFTDUdXmy",
  "key42": "5LVbpiCPia6qK8PcWzaurXUHEiTARotcGUm1eoj5FM5t312JigfmZPC4AFWYwmjbrureVSGMDCDRspK6E9AFGmAe",
  "key43": "49GNLeeM4US6q6WhmLAzbaJ4w4ChByDZnEz88cviThqL4yGDXg4EjBxMDsX6yJfbX2oeu12EN3Vy3Qtwk9pCqU9x",
  "key44": "3wWDggrFCiPLM8nuAGownEbqpkET5Ep5kHAPx7T4cQCGwv726QfLJZPkrKzw6sDtjfNRhtFbBgNTajRsfXBTM3L1",
  "key45": "2vV2ZqPiAmY8kqBEhZ44Y2CMGJKVxqoqNEgYpRbHhVSEuecarF8HT31qkVfao9gZmeNjkhbNPtk6ed4XXLDx6EgV",
  "key46": "G7WJ2XKd6mRtHL9ndhQRKxfNjtiK63W3aPyQ1EcDzovo41DhD7U4Ew9y9BeQyfVVEWWLhYmGoN6T2KFNzp6pDPE",
  "key47": "621ZhZnNnyTf7bwXwptuXurDK1tkvZG3DL44XyKXa2ZvEGKuxSJCfmuRfN5Yg61CpbyBfeZJazvAdKtbRn7d4rMz"
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
