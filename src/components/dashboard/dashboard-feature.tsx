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
    "5o7b4wuk4hgNBcvECLWsC9kkqJgFkoCmtvu6FxVHTgVLmSuypCMr9wTf5GMHtveWbTgXE2w2QDLzgqYk3gQsPs1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xpb7Kq66z5xdjnG8nPD6q76n1WcsSiWsPGm7JcPKSh9hc6F3ywax9RqCWdyEDkUUvbYNRcn4NdyuNrznghy6Jc",
  "key1": "xZty2hxi6uJB2esgkEesdbuRQesXMPqvEJKLPJDUKhaB3AYU2fn26pcK62XzZZyLDBrdZuHx6oPZ2CZYG5KKiDp",
  "key2": "sT1QZEhgm35SXFPp2TqzrnRMrFQu3roxSYbdQn9R6RQACmwUX7NsT3ZXm8mEhH56ARW8FkK5pdEhLLz4Ai39Qen",
  "key3": "3Pfpfa4gm4VfG2m67QVTcZsZeh6s6KR1Bj4eUkNFg2Q49N3yzJAQqHLghE39nZTrYnL8TujNSZkJhxAThye9jhv2",
  "key4": "3shZNANc4teDNgbvCpvcGpzZ8NSTft1eXm1ZA3chTVbSYjDaQjmxv7EPpnULGiw7jcXCR93fAv3grF2xNfRMSKjZ",
  "key5": "5vFAU6nESNFb4p4J8NUh5oDtgVX4f9ejpZxDBakkHUBw6CRGi4zA1EsviMqW56dobPZJNL1WPj6opLyzftMnAi3U",
  "key6": "58f4ix5SrnkNv84PxrqJQdQ4VLtCvmxXNVqYqLdjKyMJZWBm1GrjumdHLoNKby87nbJZoBPUfKqGRws4WKvis2an",
  "key7": "2B7TtHJ8M77YKMrkKkDrKULZ9vZxkRktGogLs5x9q8tBpJDaPPZdmW5rC26EgS9fECabntVFSJv3zLGkUz4PEaqo",
  "key8": "rtsDg7TxpevMxrZBA7bPJj3U7c6KbxJjr4XnbJMGXioYURqPoLonMUxYNbQW66HmL2YDRDQZsdAt1wWcLsfF5Tf",
  "key9": "KAvcjntXYmXAh8vwz9VDfwZxGadtUo7KNtVMJRcHfRFHshnyHCHpvgK8KHwvvSvYkC2syc3iW9rc8us9YGTHvJW",
  "key10": "4fsEmJABL1FuyQ8EZDvJJsXn5KCE32smh4kH4Xmj4tjGeaqGeyhzzZ1msuGUtig7sh9q9oecvbdTkUjj2M2ka4Uo",
  "key11": "L2RuBSHjrw41o4MTrEcx2bKSzCdbsanKEwKEjeKwmtHmdvbK6F9k9iLfxGACNNHsufKhiSNWhetoMcz3PwYiki7",
  "key12": "52FhRyyRzXqdwKwg9mQeGDVhrdAmL7VcsXKNrhTCVSFhpDo7X57uawXeZEqc9AYoERtfVAWWLj8LcapG613ggFSm",
  "key13": "336hVMdWwwZgenkTZ4crs3aHfVCAqiLZgyaEAXkJjGjpPtbyEhkL6gicpGkd2sAxzsEwXbZkZVBaNxnGwSDysXcm",
  "key14": "2K3GmUHdh4JPUkRd3LNoNKT4XFXDLbW8LakE2fm3vGGteeHcEGpVFNWow6Wee73hQgd6SAQ5uGhFw2duUTcyoKMG",
  "key15": "5fkDtkqafpMb8QytctG9oiqDNMzo2Njrmnq6idKivUxp7kAuyYZiQppsrAcLVQodzVhXJD3TyLL2o5sEev6CTfqf",
  "key16": "3H4jrTJRw8ueSX4k7R8MPT9s4T76WDLbC8RphvY61BL1E9UA99DJyMw8fsUeVDywS7oT8dL25gRuUZzPyEqVJRkH",
  "key17": "5gssraegU6SuP1ZbvWE3qfZf5Laq4woFhjWaaGdmHGA2mA9CuYhPg8CeAKVsXLeiwaNxKAVsCngGVMWPVGC11NJA",
  "key18": "5o3ekegBNjD6AtVtVkKsxvh7XAL7mZU8xG3irhcxciidcyvsWhekH6gWsN7BEvJoNnCAbgwjARPtFJshtBNvYHK5",
  "key19": "2pLYatha1hCoKXG78kqcm2yaxoejQrAyaHYWJwfzscXBxoCcT47f5w2QpXocwCR6q3eyacWLWbo6RHqvL76teyvK",
  "key20": "65RGb9kYVMfSv6KPoZreWsF3eLPVKYZKjRaeoyECQN145ykqPAwxm7WppYAHw2zuCeRoxiutx1FWXNLpNyXtbzm4",
  "key21": "3DFY7GA1Vqwda9xJP7A5E8UFb9nwPAZCgbKxk5dF1KufjAPGA2n1vuCo1JKP4whxkHK4DQ7CJQFu2dpRVESvabWd",
  "key22": "2KYw1BALJRhH2Yt6TVPsYb1FZqr7zsCUmxGQQcWFYsvgV7UU4YgH54J1u26SH4KMc6SztpAQpqYD1dGXjMxEgm65",
  "key23": "5A7cSHMCPT2ztKtGonPVdxHcK8b9CYtv9yjA8wmwZqEsgSd3ZzEdjWMyGbvcsaJSgcuX6eatxisqTz75cpRwgeWL",
  "key24": "5Fe2qJKT6tF3QZk1nzNXCrw3nebgYydBa31wHELMLeQMm6GzBffArDFiYv6rHgm754jcPGJ7N8iRsHqt3aMEzFEe",
  "key25": "uknrRogrewbewexebsDGdy1xxCtd4xB25tyVxQHxGx3DFstHSqrh1sNDBXiXQGSTHncGcSQ6m77Vn1rC55N2juK",
  "key26": "KasMmEu6gjiUrDZLtNTGpHaF1vgsJf4UNwZp7KvDNWLXDFojiA8wje4pkhZL9jrjtYAs2V8KmYxTCms8VgoZb2M",
  "key27": "WmMohE2uLjF5U4XUqG3YqZ438SWU11u4Qzk95H1tmg16rPsu1Hz1kM8MptoPcbqEGTEaRdg975eQmz422rgiHbG",
  "key28": "4eiYYqLRE8pQz6ALQ4CFd6UoQ8e4Gqw7RnyRFuiQcLn9Y8fkLkhcsiatSXmiPtBAR67FYwr6MvV17DZRE5DF5QHn",
  "key29": "3fnkpH44hF33W5DQmFUASimSUQq7M8gMLAHerQdyVcHxGmQqQ43uWoPjCpA1CcjK4QHstJt4omhEES3j4rgZUYY6",
  "key30": "262jRTGwkCLebAY362FU1wBAyaxDouphxidbHRarpKWCRAVT1fVinBsAFrJrKoLfdA7m8qDcPHP1PdYXEnsaYcQ8",
  "key31": "3Mq6Cu4U3gdGvbxqUVF5UqmyL3JrBu6uAWxdC5E8qe1hHsefkhbZ4g1iZcSD67eYn15wBfyxBU3hQ4tkz43CHQog",
  "key32": "5VsQ63MXPTwFFpDj5xPwW58HP6HHQ8cGEzL34KJ647g3dc6EuU41PQhfdQjdErmpTVGdMUF9sx7i5VEjNvHv8jCF",
  "key33": "5rEMaybrMWyqRVSmdFVxTegCLRC3CbkRrGX3s8Tespp7iX6UFdUAqogt2hsxc2vPaBisuBgZU3ANFc1Tebdq3PzN",
  "key34": "5wDEiMiyrVh6rak7mZSLswT7czEPkfodf4PoFtZ98xuoJDmzd3ZuPrCduenGxHp7r3D89DWFjjRYyHzaSSz1zMb2",
  "key35": "3DcEZsaydQv1fGa7ysRWvFRxGf4aP9BQGNLhgW7G36zyF4K1jZTSs12BMf38SG6E52uPTDYhcg47NrNZdvhvFmyK",
  "key36": "41zsnLSpdcUmxRT6HKpDLXULRxEnU2ikkBbkFNah6idM8WG6VHBjTndEMq1n9CEqPnGqYTpNH28f9naNdHvTVA45",
  "key37": "4ZTXEnTMW7j8iLHYehmUdsy867xJXF85KfbDUs36vhzkomarLzfZrPoa61SnA3VXgC37jLjaBSPzxgkjKmZRaQWz",
  "key38": "KBs3zao8rzUtEBEVx6yJSZi2owEHt52DBoWdk8nR6hLU8uGpipYjDjKfqyEkKJbyUM1ubAGeX2QHxrGK7JrHF9e",
  "key39": "3qqEcdAaixqxBs5nbiCYwtWvcKmsTit6bV7qbaVNfTGGhpYVGbzbHJrGCFKUD6VUHXP9CzrhtYCJHFSzMFaxUN8o",
  "key40": "sytTWF9Sjxt3nPht7ay9ihnNqZHip4Lv4Zpu5q2YXhZne7yF9xjKVxoXHfU3rwpPhYqZeRRkbiY3WtbPURzJvN8",
  "key41": "2EaTjDgqrMHCpkCgErsQgsps6jhGNvdZqNHLqBKJNq3Jdy98Xeaxiu8HiracU1bnsy2zj5NhGhRmRuADn6ukq7zR"
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
