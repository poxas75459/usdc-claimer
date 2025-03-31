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
    "jXdqJk16T4Ex3zFeY4DFDhMpoDXFE1hAXK9o7JxoKRxDPk4545VaGDH4VGkF6K78zJxVm2wPce5P8bdj6A5w5TQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hu6yhgebR7JLAnhbX2ZQRP5grWmM7PGL3AWjmct6GfPws5ePEcY4VwmukVdUJapkimA6LP3FqbQMbXVEpYzQAU9",
  "key1": "5fMXx9s3R73TqR641nST66ke49qrdLuQqJkoaPEsGe5Jqd7vEo2g3muL3wFgVyfHwLDbc3Z1oxJubG3sdDTtcLDG",
  "key2": "4uehM7hiG4un8HhdrBJv7c8UhYxe8kzppTyDjCihSc8tzsAjij4iRVRf9v5mXdfE1Z55hzAUNrDJmo4f6ccXacGs",
  "key3": "5oL2WUmcvPE5jt5BU4nQmbjULAHiWfjzW9bJLZ1tYRnRzhNQbf3fq3Hpdh3Mu7t65ksPhYsRyWnRtnh86vTnhC5F",
  "key4": "5AEAy5fRR16ezmf1dZMBBGk77taHSSErWod6wDcvET9b4FEHo4sFyX7pb2KJMkEWQps3U7C9b5NykLW2Lkikw4Dd",
  "key5": "ZnUatwBLZr2jedagKff6uYzNtQ2mLjGXqZbaHkELRVkm5wpmgmSLJCewzsVSHsWyCtrcYGRzCupSrCjR1w1nzDR",
  "key6": "2LnJPLuu2XHzZsPjDfF6MGeNCtZuyLNVcQ2ZL9AL3RThRjCSBURp4asHuDTFQPMFSjrKbkrGKjdnVyc3sUQc3WiY",
  "key7": "3Tqcx22Caj5GvhVEzjvdnVRXkZ8cDHTfyaMLhG4LZHnm93mcFcwsf4WLmJg5oj4sctogFoLVPbgs1L5VFDJpPQN9",
  "key8": "uG3GRjfeBGJSwn1zhkNTz3P7iNwSmQm3qHvM8jfzSaPrAE8eGWT5K4g5vnmnBmNzUvJJjHeejoXUyvY5D4ZXQCe",
  "key9": "4QZHAuUv62pcoXGoF2dMpo1Jn9bUAbSdVzAmEnkUn7z5GL2Uk7vcEghuYhZ2DeNUvvUiwP8SfEi9rTMFV68Ct2v7",
  "key10": "1NZ6NRYFzUFxWFQCpNWKr2TRFpGLb3qFocVkKedgH4j5Nf1q8nC4Fqvw9ZwkXP3aHT7cWke5HTi72Lpub1NRPDh",
  "key11": "3uZA9ysxS8sUPTgwkSLn2LabfQk6dZJyuVs6NmyhDRvwokazb174dxwxjx6AyLuogtAagSGTnr2L4uk5J83PCvQQ",
  "key12": "5LESD3hrKKSkfZprva92uRsVey6BwH9vkLptQ7owP3HdbFRRrnjeAjVEVM5WLZLyin44umFC5aKmUhrMX9u2bwcp",
  "key13": "5zy7qMo67rPHqh6hRzYXbby3EQw1nLf9hXHqXckokvoSvu9vodkJxMjWRzRmrYXQQ2EPaGKeijgTryYSN1CP4gEP",
  "key14": "FknWihSh1ViCryJwxPEEUhitKqkfzGYgCgzE8mJ8tWF8MfyQhqLyiiDY5NLVDakVUU9M2fs1hw4kvXTdzzd3pfB",
  "key15": "2TuLQbX5AdMsUTjJ3qKpyAAkkTjxbx5pogUd3ZtoRQLWt9UyivHZzKWb4KnJvo7nYL3AZU5fid9RHewy8V5biote",
  "key16": "4ifdRqwGMVYDhBqvAzcq6XPkDYLBH6tKNrho5D7AadJPszG6VtWb1ByfBuAPSuGUeKUePVzhJs5Rrk71F6nsAZw",
  "key17": "4qf8E5uKsw1w8KSerg8RThvnkLk8Xeka9R9mPwnRbsFZddnB7AziBUwgNrQXjK2g3SxRGLYPfHfMiBDzzwtjNoLg",
  "key18": "57Ap7DL8apQuSZtGR3Gag4gwb5gudFHmaRKxRAH5X66UQCc3zL4yBFzbca2R6TpYS6qcSXnyoba2AH15efXcaXFH",
  "key19": "3cgqfAGBvMmCexu3vD9JEGw21Yygcmfo5oYdmhbpZVMiwLZSFxBmaA5EW8x85rSABqYZU9weraA1FmsDzNv6X5H8",
  "key20": "2uYBP48BnmPhNceacTJs9TK8GJiBuw4b3CcAsf7re8WW2JvMupS1MR7fLpTpih2afbPzVChDtrue5utoTSuukpW5",
  "key21": "2jAuZxze2NZWDcp1iw61NKoGjLQndev9reLBPbz8yrASn7WhrtXfbR8HBg8CW7SWnZ5RSqNJgKpJZ3jvi1NrSKMw",
  "key22": "4ik3NuAhojhaURLr5QM9eBSBVzwugEK2BkHsNfLWdhWncUxZkicP8aJAVSCfN8fiM22cvHbu5Zc35RXasuJv9Luz",
  "key23": "4qB83inLFoswUh2cvpkhEktWRHcqyhEPbCLN4f8JPetWFvhi5JSzu1qvKgfEF5AjfnHc6pqpkutoW8W64pxhLCjB",
  "key24": "5fPeBpeMufU97kcod9PBGdASJuWQf98UWiwfyNygUEjrgYY9fadeJjMNMbjrpdP7HNphJuhQjvmuWnqHnxKh7YqS",
  "key25": "57DeyVvan8F9nEcRnx3BBZEtpU6SnihnpVc7ctZ59zTC3XfWWr9EMkMa3ELh9Shv3zzyVK4uP6d2UPvY1mkkcMkf",
  "key26": "2cmKipsHUfLBv9yDcagGA4apHzg5NbvdPAv4ffqERjZuZ9doTJ8y4feXiMUECqJ7kzmT5VuXzi7TtkESs2isbZzD",
  "key27": "3TvzBY9kPQAqNv89NNaygustYHaGMH3iZtW1NfpzvwCKphhwNZXQX5BeVJRQrqAgVM5uz3jR5wUGYNEz2fLiyQ6U",
  "key28": "3rHUWid3jtfHzS4bbCGo8j17uoatW5Y5F8VcRL2uSHMRVXY8gBrs1wn9Mh1XXKXJL4cAV7HHbXkHPibPTycvKTkF",
  "key29": "3rFt1E2UvjLTLkUDYEHqd1woa5iGBxbrNneXrpgxkYhWMsqd8QqECd8aCR5cHkRnULGVLo4DoMVxCy1yxwDQMVJL",
  "key30": "cnAhLzbxcg59o1LebKnFZ7L6qAToVUTjJtDBH1v6H7q1tnKk5SZrBq5dNScvjs2SGfqJkV5spsGcUhd3CRDRxkv",
  "key31": "MG13QBL5pUvUmX91Ajtw1ss7zJ8ipBzJ2aEboWYiFuXVVVKqVkXhAg8Hpptz2BMYKAPugQd2qjQdTQanfuJMcUT",
  "key32": "28wF2DUQUpQTTYeoD6n1VWWjyM6RdnbNoNjmYXVbHUE6xDqeJYaPAmExSRM8GR6xFNguRQo6Cu8h6vrLTC8BzK5P",
  "key33": "A7cAePDhY26qnF3qiSzscPXsQTprKQ3mfsoSy7dJGJhaAfMQ3T49apmNyNbnGQYZiuhbdZsLuqRe9YiTPs4oYCk",
  "key34": "66WPtZxWfFV3YCLw962mnXjHyppXRMzsQF4GXFG1a4jJFmkCucDjRQMF7abdJmUNL9c84qXwrzP8ZCfFjNz3nYqL"
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
