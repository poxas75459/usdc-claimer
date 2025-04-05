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
    "5Z8D3jgEtp15vhSMaaDayhgE73Gb5mfEk2EjfgA7qQfhTFbZ3GYLgHwe11fLwT8gs5F2XR2BrLNxZcEKTsTnQSey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36AXqfFWQrFedGMJRcUcPUX9otEzms12af1wiMaSwc7EYZNqevmKFkavJGLA94pAW4ySJ7y5qHUxCdh7HYYX6DFp",
  "key1": "5TmdEvrXF4p9acervBRBQ3pCk4e5yPd8byQopRZhfwNMtKa3RL4vLabLHWwPhkVM6EEJshSnGYYWDmqXZbsF4MqW",
  "key2": "wPoG5DysM1iG5zHZPwDA59WmfrfNd2M6yUmUAeUxh6dw7H7qZR81r5XjrSHtuSwzvjBc38vyNjyvt7ub9dFXXtH",
  "key3": "Zc6Ns29noRUXqQdrbZNtNcy7ceQ4UCVvyNCBNV8WubhD6mLTabSkSGm679i9VKpyeZtJwvC4tz7UpzUM4j4hx9c",
  "key4": "3aeGQXF8Cxd3kvTQPAcMJdH5CZwoovPNiaAENAXDfpry27e2TH8t7CD5pfA8zKGkMcgfMfsYj77VjJJ4uqRhrjp3",
  "key5": "4XWFUfzY9xZ9yCxjaJQHpw2v7oPB2GxYqFmLu4NMfaDFZMLBkTzqQcadpYBMMApqiCbpUgX32YfRDit1DmHMC69Z",
  "key6": "3NfkPkqD696QBU3Vdtzxj8DaevevAhy4b9JEWXSxMASLtXiJkJrdziasfkzQTZoffEkH6WeTc74WPQ7mEQZgiUQE",
  "key7": "4Xab5GjEGNfGne1b5E2GQgCGCWGY2UbxChJo1wpWLYaTHzARZsNbt5qSZZa8shQiqAnEtKERNsMtdnaYWhYBuGdh",
  "key8": "5fEfXnLyEX7Tate5DsQpNfe8qXKDmyacMq7d7zeiH6cwxbbKrLQsCMxAbkmK3EDCzeVyD1FSchdazvuXcc4vPdsA",
  "key9": "62E99TPoHUjFovdmrRHJBsRQSKSDxRazGNqCz4eh2Guq6dkm18u4BkEwcJZmUzJtFdLCZ6zwMnfJiVyBvs1ktAvh",
  "key10": "5ByuVdPzyzyYuEbshUcxWSEBPXEp4f11JBknmdfQtud5wYo56HKyhoYEWMZx1YqNA74ATgDYVpipUztwsFCtxpdw",
  "key11": "3xKLR6L39mbXGhfZjNU2EDmFnq54AoRrrxQRtEEfGURYTw4iGytcQe1vesr6wUDoPwATYoEts2Adwk8Edg9zQo5z",
  "key12": "599qdnqdPovHhrootcgTGLmzd7QAib3MPgBVciYsPn7XyZmAwoXGYTtTmuJ7VM7M3vymwX6vd4d7WxgrmxDPMHRf",
  "key13": "4Asve2extpFfsEZtrfAUf4BBiT83ATFGvqSTbG5Gs1Vnw5j3tkHz6qimLrS4PKy2mtj7FTiYMWZF7razgoWJmfr2",
  "key14": "2T9hoKRZpbNCp7QNRxnRkA8Fi5ApGjZdi58pvSNikTqN2P1Xj8XvEhMRtmGGaLb5n1oesggdoTLxUh7YYhFEgGvh",
  "key15": "62Xmqq9fZuHxpY79k5gZDUojauGcXyVG5tZiBiJ1Zr7H3cody5mZhHXtUfoJmaK7RW8ur2hpb2BxgroZLAoxMUKK",
  "key16": "59rM85KDbGniRfRkATgFBDFjDfmaRmju3z3BZr1ngZcBv9d2bZBL99KexBmnzxDDpUcjAZubpsbhkD3RuXs3k9SB",
  "key17": "5fWZjGMMkyZbpGsX3DsoEerboaRDFkmKnqRuAnFe1bq4wtXCKBNmvF8qP4VbVpNmJhzpifn63vDsYzv8dNGP35Kd",
  "key18": "5KMzQ7JA53q7thyTnZAMYEg2HN1wXp1nMhBAg7Mim8cBRi83o4u11wYqZmyRJeJRvPS6dom2nDc9DSBwwLeS1VBs",
  "key19": "2c2aYBnMdSCJd6SaCsEvhkoUAz2hPSFuUsP6JxVggYB3vDDeMiLpxRTd6rRgqEzxvqc6J4Qj62TCZFLMVyG658rP",
  "key20": "foc5j3VnyxvwYkpY9RhTR4Q4WPxhewSY7moXVCxzEwmK1goWDBbcad1iX4mqCovU7zuREGybLfgad7A7eN17XdV",
  "key21": "2nvynLayi3S9wDRq29GncY8AG4Mdn9hW3SevhTCJb86bXiqsiC6vNHtEpwpXdxEGiW3qbvCoNqRpxtfo3Znn1sG7",
  "key22": "62vR6bwCStK9yTwqYZ6jAtGSFpoSiSUNHj3Wz42YVjMCJduwomfzbKkJR248VkfYqqgqngkcJ3ZzM7kTwiTTRyvj",
  "key23": "4MGNoUsiWYyWg2f4oKFcWJd1y5HbpTKxqVUSSXrmgBPEA7kwG2sioE8L62ZEDnLAfG55qVEPDpk1tRkVUS621sjk",
  "key24": "u7VALQR8Z8jnQyuFj959z4BWjKGu511TuqgEQjFRVeqyNtwCUicncte2ZjDwgawQJsgTZ9Mg5Gs9ucdQ8D1f3Kg",
  "key25": "2dDKN1mXRQoERpefPoFxr4zmaxkFj8LtHpAragn3XVSNdnBrN61JH4r3MP8QXtv3s3tHG6cgZY6V3q1osCD5ta7A",
  "key26": "3rNnytYvhbUC3KxnkWNJgQxS18DGYdZTFb6MiNCLEG6tWo6XTnhsnY7wyUFzLrVgySLn4wckgyXac6bwwLvJBnNZ",
  "key27": "SN46b57fjjp33MsAytbbbftCsGsoGGWDBiJvUEwhq72T7E2Zyr3mzZUttTnfRdetuGqFLzkFi3nXcjfpDRoFNgS",
  "key28": "4k5UgKQiAwEY41YShYyLqmAJ5aFAiTZ9e9mKpkrknZ9BeSQFWNvka4es8oPv2JhQ4KifwMJ6zqaPG24gQoff8Jf3",
  "key29": "4jgmjwc7xNotAiXW48Gve9K7o79tfpimkdxpRKVCcoQWz1R13XYb4MkTtK8VjHH29xrrKNBHKmqS1Qm8BfAwFhmM",
  "key30": "5zPQfFdCKkuxckSuocgwCTop2N9mF9fbgsJmfxEU9d4UHPKW12QrZtFi7ZEbsp92kxfzjjXRiKhmfHTCS3RREmB8",
  "key31": "5i1nDSUxHWf72aViq4wNkCabdVPZPaxjjLMg62rUoZwuLSBVRUhWWEvTQAuriTXHBYRqhbGxoC7C1GPKnVJ2MozM",
  "key32": "4Kba352DnvwRwssNb4YXFA1uCHeGXYEmBVd5cUFqYFQ9UtYSFiJ8J8e3Eqsw4PoKG6TAzcJC9vDqTEUAPYW3DV55"
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
