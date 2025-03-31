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
    "nGdgejzZeyBt6tvQtqxMrABt8xzTgRBuYgtFTb89pzDYDiGe9RPt2LXV4AGExJ6e9a2cZm4ghKNVXJh6aMsmcGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qvMmavaz72RHbPnDPmEMGDQw6cJY4YLMcXSscGR9qhD66JAD2jhV2hQrdHMdZg3FeCc4S9aJyuwCJHYapTz2GKV",
  "key1": "2X1kdUcztESPRx1FvvkxVERknSxLw9UDdhJeG3CevFHLEDUKcAxfKDMxb1sUqthS6S1iYVEbU7RWCH5ZSGTGUC6u",
  "key2": "2K2u9nBE7GVCY85mQrAWnAwdfjKHkCfFQTTgkKGHMfLfVyfrqtdbVuhcQX62syJ95i3f53h7MyC2D3KVk9EbD9WX",
  "key3": "Tk3UUFwfw9kfJCHhPb9YJzEHNtmYsspWa2j7GfbZdggS6zkAAngDLQM6XRoA1xFFcAK89DuT1Lb9ghTB8tRuxKr",
  "key4": "3MZpQUwGa8oYM6x9kbJN1Vyno4foLcivKvy3SKG2Yee7iLrvAyPmdeNDdWLhBKuACcji7cducBro1nL89tawTs6A",
  "key5": "5beEgPhNiWerwZd8Gd7E6afG81au28ApUxrGueEVhkZFd6zsEAEXA9i3JNF3sm4g4ozRMJYoaX6XnFizAfhaEEs1",
  "key6": "5LqoieKLBzWaSAzGD7TqYNZfi9C3ro91Ducb8YSfKKbrpXtcPfu4J4P6kwZxtSjkGwVJQE3q8RnmTYpanrp9U5Ci",
  "key7": "3QQMqXv5E5Uv3vG41Tyi1dN9WNXw1T5q9Emzs58TQEGQZCuhNzsWkQbFkgfZTVp5LX7WLyNiYePdEkxSAkeCFcWT",
  "key8": "BwEgomaT6DAUuwayJjtUJs86xFHJmmkwTkD7rHU35W7sQeWioh12kFhyvWatFyzoFYmUDv7SjGUzmQUN7JwuLDC",
  "key9": "4QDyhtgEASrKuWimP5mt8Uy5SGA7hbPCRnbkFM74tDcBtQFJVGTZanibyKPiiJFEWSU3pMUpaEnSHM4841DEbDC2",
  "key10": "YuFkw71RJicPKDBNLRu7TobSDrwSfxexj8RPaToe1G7m5buoWYSpkGvjvc4AoFng7AJcRx2RaP7pD2wXB6JxV52",
  "key11": "pkhLGFs8oTfYq2AQJ4G6gc3h9pKbJiufzCA7wu8h7vc9M9EEMqZvGgYYb1oHrYqDVpXG7Maq2sFdbJHxxRGL1ue",
  "key12": "4tfHEyrNqLDGyr6tCt4MKDdLmmtFFxLxEPtDcXr22FhA7Eg2D1bo6gTznsocLchbg4ZwZgwHxWpUyHNfWxXcXKw",
  "key13": "4tYFX1ejvaxazPgxYAaBpsGqrtweXncPacCNwjgnM8Jvybbv8LWs9FKqwMEsSExqvFEUqDPagB1Z6MZXvV18cjfz",
  "key14": "2zHmJCgsTMMDtyqBMxATcRhxp1CAJC4DvDdhVYbBhrr7qr88JMWq4Vz8NgZF8S3sfeDNpCZ8oNDjUkJNsPNfT9ja",
  "key15": "SF4fCYK9wVqhbKVZ8kG3jMPNTCkpoazivYxca2wCaScCg4S39RM984hi7sbrXtnHzjx2LEE2YfGkJgXByDnn999",
  "key16": "665UeVzBwGEEryC56NJ2fduijFuaMxTm7g6WS6KGYdpfk8C4DqdRacRJgFJTYV6i4A3RHyE4oGcJf7HRhe19n2Gi",
  "key17": "5VFwYpMffr3RJ2mgegG2fpefjcCSFdffGdfMasEEjfXQsBQYA9jK5WxRpsFHGk5fGRU1kRvYivBi74h9zujJUH5R",
  "key18": "49nPnmsoZgNYgTuyjSUdZR9CEYfdd6rGbu1DYdLkWo4P9pmDvNXE6St5PLRCjCMDWhGKaKPsMC6iMgRYmgUgKQHC",
  "key19": "3WZ1iemBe7snfM9vnrLeu9o4ADsGWWwv5rexdCSCEZsp1Y1DjzJCWi2qCknq4i7ih1X3caV2ny4ztgJmmz1XX6Kq",
  "key20": "FFBXV3ub6rWMMFfmUN1kjq3jbUJvpQpfxAncrw8V2HWF3o1ZK6R4nxZok8PyahmM4H9ouW7j9sEJND37sL763Xa",
  "key21": "CMmJ4CLcFpffUUrTxxwF59uaPYgKApTb1gh5JxAxAPhQSByDFkfMPKCckeYRPXbvK5Y2zEFqxACotdNcqoA68hE",
  "key22": "4Jqyj8uD3x8JNGFajsMdtYkhbp3hypSngFsVg3CB7Ms6phqsRWjeonJSqRhK9we8tv2TerbeeL6h2euHU9y2aFHJ",
  "key23": "5a7xtGgxoLzSffnWQ4DitRqnLbSbccMKS33bNcaZAdyFguTMTMsgVPuyMt8Xj2nbwE5XJLgkY7R1xFW5TE1aGvhL",
  "key24": "BRHB7uajKntdLkQ6neidJFaY3yZgUzagHxzkNKJRZZ5EwQd2XFqpa4mxk13pN8aKxBcXHX9pZibmfZ6cqjuXFuk",
  "key25": "2dgPnhUHQYyQbEox5cCxBLNKyDiAM4wiwQrn6a9o4Kjxme9rd5nnSM6UUp6j81TR8Ep5b9WkqD7d4Voayg4crTS4",
  "key26": "2FUVu83VLNrReV875BUz9B56vpTWBpqgonsAvLACpPQrXW7ViuiFVeGPZuC6vNsnTw5MqRSHjiTZhbTqQpaLfWcd",
  "key27": "4eEAKcr6nNJwdSd3Pb6ioCPfykSMbsP4N8pBTukPD1asfDkGCrapqe13oUaGY9LGN3H6EU5WScymN7JNbFBDWnuV",
  "key28": "2b8bhSQArH4Az2cvDGGkhvAxtCijxNm5jziaCKjrJSvSpr1dYTTVAZU3aMkhxdb1ma1a2CmS4JD3LgJiKwPzq3pV",
  "key29": "2NV28AfVkTJP6W5kurZib18AVEyQLbJCtaNBr8QzTvyqNfh6GshxE7zz57vs8ihx2DZi1ZLRgd4ocSfFkeb2LZV1",
  "key30": "4VQMg6K1jar1xjq3aeLJTBpXm6r3JtxQ88GJtUssRVmKtquu6pUB8Et8shFKNrBk5FUbJa1cwYw4TYfmwuBVTFMJ",
  "key31": "4CUFsr5ynYhKaEAhUQ6rNSaL8ZaNx99wjcrGoJUFPfcrgEzdixDndFq1jS6UxeELZ76fhYyEcPDhZ4Rb7QPs1aFD",
  "key32": "2NpAYfygeeCmM9hbgk7PbzXEqLX7c3yVKZj3yxUxEe9hGRzpzxeVTaKHvYrzeaeXFVLNfYb436TTafP53fhY2gDy"
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
