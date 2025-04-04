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
    "2BUKS3zrwbeaFKtqeTmCJrA3S2kBhxipvLHdfTtKkW6ipaxPmoBvJ7BsbqvawQZ4MgwPSWYMcWqC2fq1UovjcDRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qLZBoCzcWDo5ZMqQ4ySKQDHHX6QtUKcNECT4VseJAJHYxdtu3inHg3BisdosqFTCTe8cHKswW1gSDVdYxqBTef3",
  "key1": "3fnu3Tar2r6uDN5qPuj2DPUvbX7xmgnvScJ7YFirf8hhwB1poVb1aKmKKS6nVetP9RukD3c3rWnmb3rUC6B7Pq9J",
  "key2": "eA4HAajF4G7EbJwfStpaPVapDMTsKG1hzTWSLhqRE1dDU8TkinPH3QUKSNpSkV7C6QYVNfM6Nx8dQ1qzDzMyaJK",
  "key3": "5fVCe5ckwYM7Vhoev13GS14njPr2avdLm6oBc5fh9sB4G7PqpuzCAzsrvVSQ1ErbgNNnN37n6eDzy7gcSNinNAwY",
  "key4": "54cXYHkDDfcd2SJQ17tatXi9CsVRDgL7k5QmqQg2KirRVTkUgAjC9hGFN57aUAXZDD7abWRi6omtthZdRvsHNV6j",
  "key5": "AvBgsarrSUaaimju9J71ZgeKHeCyELS5KiFAZevtHCDVery718yM47DGkjvo6HFXVZyJG3i8Ffk6K7Zyrr7UHW7",
  "key6": "5GEHiuMKnEQ6s8SvGsk51xAkoUsHVMDGsaMSxrnZe3oxAUTaxnBpKFa5YCVxrSxqtiNucqnjhLYD55HbPSJuF1S2",
  "key7": "c7MVnntthq3nNRM16unmAeUVkCwUCzemZ3DZppF7qwqnXyaZRNQiiPFFuqzwdtZ6qLTCdmTQR3KMH1aaXYMvMfY",
  "key8": "41oDJRBPYyuSUYtZh4zLqHnirawkF7cyimmt6AcRx65EkEzvA9XN1PLk4y5fYdDpTBnaMafjzzE4ySqJ9341ozwL",
  "key9": "3McxjYimAzRi97tuzbzUCPWzqhBr4uaitwPsb5FWCUA8Y43czW3zwk7BTvga3zpo5hhpjoWY3DnPcynojAUVNPMg",
  "key10": "4fjYSqVQNmjwMezq7B2xN5FgXrRBJ9u184ic91cY5CMjHgNUqQoPdZPntz3taxukj6LMhWWkaGijfPJoq1pf76n3",
  "key11": "5nFMk86hPApAULJxuNGvP3VVgZvrL1MV8oHxvYCgA6S3tRvQoCxuSSxRXV87h4F98jxcNLGnAYt5iqWLWRQPABJr",
  "key12": "4bRacZCdywUL9rJ8pBaZxajgj1jF52JZBRmirmewsGXsxEJPFY5ru6UFeDRifVUkuwaTz4JcGWfv6cPZGYyHsPsH",
  "key13": "eojHJRh6yy5yckgiKSHviS88feZCFrjjFJoogaWRUJoDHcMatRwrkn7rHDtQbzz9V1FkJ5GCstLBSJQnSWfggUH",
  "key14": "4GL6CTSxLxeoYunj9PvERX2Phd3h2u6KDSByVXYwztxwCEXw1LDq72ciTXh4XhRNEeiXSTED2BoGwUwwVTE6PXCu",
  "key15": "48GfwwJsZt7YY72vaCstvUT6tesBKSnM5S7ct7tmv8LHhBpmJzrCJaHXPTcXLB5dsL14hBmJqj1vAYRNLrWF3m9p",
  "key16": "2t3k3jpnpcoFBULA888d5XHZyx4VRhzfjug7eZR2TXSrbJHj4FGegfmFBLcZvgucLcezgrUJw3fUpd4psodbwWhh",
  "key17": "5Q9pExf5Pz8E17jwMkv4uybj4T845ErsnSkQwgK5wSLDCU7vEmKgxzFFWK7pigXTpqtvVACLKfPuu9aBUSMQ2Nnq",
  "key18": "2nUiF2gYd5VFE4sS98ajC1QhcTqgGEGsH6U2vANvVK9eAELzNY54hV5aCqsps6fADD8znL4LZYdzrfJbx9eb2s9p",
  "key19": "rG6GXEL8MctXU4hgGyg5PeTaD7nWw3Kgs3XcCW7K41bY3Zr73hqx94DwQHsqPzGoYRpTVVC3Zy9StWhhCsKmyjv",
  "key20": "3QpDdSAWQfpCrm4F1BZogWdb4z6xu8Pr6nXi8GBomk7tM36A5SjfhzbjAqKjqsChmxJ1KesseWP6dD9KAcf3t9pu",
  "key21": "5Vg55tKBvuogoxkmzh3cNEMBpnnbxqumMM3xpxLnte1DRThAC37bJW5geKGaLgcjDyv5mMN9LBmgayTQEkWZdVb2",
  "key22": "27TKcDNK8kuwNLYNDesuuotyCgJE5oWKqy14nC4maQB7PT43KHtW5LDZ38vHaB8pWo54FY16kWsnf17cHi8276yR",
  "key23": "5dTXj19wtRmLB63AzGH323HtY9c7qEEMuLWMWCWZf53KSj451yPPrErwm3ekaaapnA3rzrsSpeUTYqiouPntHU6R",
  "key24": "5itXu7hUDLKSAaK3QtWhBozFMPQ3iQ1xKMmXJ2Kmz7tm23Cp4zMF5V98nn9svPpEpzJj5z3anPxBtAoXapR9gZwS",
  "key25": "4g2mfBYsiASQNTWBjhs2ES8RgJKu7NxJRNeadqEY4CFarJXCxszm6ZwMeZ7LJoV1AJHfv1kUkW7JkcyTEhFMLUhZ",
  "key26": "2A8HfgxNyjP9MUefSB4cUjQsPGvGHJ4xEZ4yK5pj67AMWWzhaRuLECa9wcka328bmenXe7WmgrBRrfBThz1siKJ9",
  "key27": "Uc48AAFGDvgiwrm8yiEBYH8scLaqSV4YGHqeatwq3M9eFYpLQ4dms4Gf55TDBqT4jQNpAZvFDgGdsVqSFrXjTmH",
  "key28": "5dV4bnm36xwCTJnNwgWNcdnD3qd3wSf2JeBNbujCN3PMSqVuiKXabpsEg5GzZJBDQksvr5m4xyYJDWv4EmBg2CvQ",
  "key29": "3Wrr3VGYatLyt7ubREP5n1YQ5HLYvnqxm9kADe4XPbh14Lr2vPUK6e5Te2CejpUDVrMd7bXRCkMhf19rGGatChPA",
  "key30": "4Lkj1W15Xpzt15jgypeerHymFQjUwHuPT48zC8GwBY5pv6VCFtMfLmLEKc1AMG6H8CseJEFVtRTyCDfJSx1QAx8L",
  "key31": "YUKX7F4P2JN6gqBuscqwcBSUcjwZEh7bqZj6A1fRggE6kwRZrcBNx1PAcsLwocFESjQaAtNfzJLoxNikvhFyeDt",
  "key32": "4eEteX8efDdp5uiXEbN4LAbccunpqX4CE3dfr7436nAqaKyApbdz1bayjPMA1k8DkCpa89ESyv52pCUjVXgxexra",
  "key33": "5bbDzFzVM71R8rgWsoRa84HAkfw4cWQdFNdEBr331eWEFg2nq4EVPiCem6NFU2jCRcVYTxU5WY3G2ADwVvGM2L6F",
  "key34": "43Gok1ksubjDDrvNpAgK1AvYE6ppx9CF9Y19DXYg3Rkc7jU67PdmMQ2EyXwJLTLXFxrD7pCtkgbpEixMkCtBQHBP",
  "key35": "FK6eRN2fCg83YJyULpao4AX18xZUrPN5SYwjYFvTChxZMy1CpXvnnGxSt3V8o6MTTQTegLCrxcCvqL6HB7AhDEh",
  "key36": "5HXDhCdW9WztoaRhjP5mGu3Z9MyczpWmQb91NSXEsGCcKk7Ym4HFL1voGfigC63zrZP8FFYSH5PX6YXLyudYahhS",
  "key37": "48zavLmotMCXYKt5vZ6PVRbzQi2D8EJS8s5tx2xSKNUAGcJqKauVDjZVUPdfcSAo5vSd4LAkZdtiWF6H7naReB8A",
  "key38": "59wCzEnbBZbC45LTrJ2eDf9sRnDEs25APxUcQHpoowvuSa7xAkEgC6xfYGHZMeJjozV4umCp7JArB1g8yzWohEkR",
  "key39": "2YZdZpTgsRTaYq82XKdz4EAakiD9gYBRzaJNqZzVyz293UqFnxLBioPdtHDT5sKQEbnCuQuZ2GFZyHwg3UQ4D1mZ",
  "key40": "3MYR2sU86LPwJp2H86Er3StWJcgXMbgLJbbjQmcbU9s2MkMKbMx8UgzwNKEujVXNM3qYNDpvE2971pCWv63F2zXz",
  "key41": "2aMd8TeYixcwfJcvp5zDYhGb75WpUgVQbLynGajLyZRx7jfpLiyuFouDyjWqiq6h1wzUvUdKuipkWUj4KjibCf7c"
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
