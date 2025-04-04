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
    "5Tpf8A6aUgkfWLA2HntHS22tr165AbjzH9zSk4pEuecEMfWzWLWd8jrm7HLmjV9jd7CNPUnjNZwFY9xtjfjHFmij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KS1DdsRLZM3iT7Vt82JnhnCvUvzMmmESwyGtDatsJMLhRNVvB85fWtAnHSWyyuUwegxR3PqBrvPALia4zM4cfvL",
  "key1": "PMpU2NLYjwnJccmhN8GVyfYD1qmCjjfA31graXFA2caLW57qEx3AhCmuUMuErezxas5hVZT5ywk3pYsKsLfPMWN",
  "key2": "2BaCRnNvrgEgXyzv4CX4tYGZHT5urj8nksjx49r2dGanq8wU13TNtcVbxYHECZDfqMkKr3pq2caGuVe3zFE6dDDN",
  "key3": "2QCDPp2iWSaCLAi2xVyfLgMAzGeUQhdLNWwyYDoYkW5pvwM1aAEsrMsaApeNDD3Vhj2c8g8Zj777EvsfKmqSDvM1",
  "key4": "6gwhSu735J3g3sCBCR1ZdEJQzYXWjoosj1ZevbeoiEzivJiUo5TS8epWZwy8BxbM1VXzSdCc2LfakK8ooL6qw96",
  "key5": "pSDAYSBBV1TU7rhHh9oDNW1aLpYpccgreCDhsUTDE4jYhCxdjnzhf9Ex8KbXz8fDD3QHFesnZUdZoXp9w5Lp6JU",
  "key6": "5MwmrjczBEGhFjarNnJ6b7i3HnUKRXq8re15wy3MjmAJoo2yvKRzzbp9xjvCFdXhnSVeysxMTewFiqoKqbpsQTz2",
  "key7": "15UeP15q47dDpKg5YvNfUYN44P3waRb71tFrGFRB3FGAAn8CrHGUM3Vqh5Ju9KWY6Xt7c5fJDBDv92FTRfcV54R",
  "key8": "4U7byXuTf4mFMBp1PwjfsQWki3NweQhJhq31hQ29RkFHbWQ4VxiRToC9DC1kLLpfPRP8tHpzKXKnkJHePraTgsov",
  "key9": "aPrFywHnqKCpJYgWR5MUgJ2ZBH23cr85cuGSvR3iRPZXcefBm9RAEsDgPwREnXaKChhrvMH8dMF84L5Uw2ymyw1",
  "key10": "4CxVfEo3AqAGPC69ToL3K3yCCXGppV59d6o824MMt6HT4wD93RUQsrC4KGxtL8WuwKfQToDmYaUHRPxTcG6vpsEY",
  "key11": "TfWfwbb9YdXe28L9TQVLQDWqLAcEV67vKWdAnU2CEjkrPftFt5GPjHbidfQHNsWLameUGxiSrDiAmrrFRH91zq6",
  "key12": "4DVpgN11C2ABucur9xmSZsHzRfohzxYdzYxWKASspAQpb3fTUoCZkBHrc6UPUuNyadxkjUfRGTzwEwK5bYJjqFnq",
  "key13": "2VLU2J3hCh9a6RAq8hcdttxbqamENDwqqTvWPfRkRhrV5NsStN4V5UznChLpMd1sJCxau8duniH4sN9q8Ngww3X5",
  "key14": "5b1GBYF17kgC6aqyNSC8RvQGDvVMU8kYRsNN7ojTmxwMxBU6f6GXvNcbD1JhGbyG3mXK33fSNGvsN96s1wXfM9bU",
  "key15": "2R2ZyGtm1C9HjHMDewietkowucchykLZLJ3XSr1DXUmysY2M37jJo9J4MHYVToXUMNieu1QvNbs2QMNQbSA1vgYG",
  "key16": "2CriGiJfqCRnhGWNLM6S7fngdZ7VojUGb38Y8qZ5Du2ceCYChVaSyaMZaCvzrf4VUHUMd93Q36dphXjKGzpmyAwk",
  "key17": "5YvQLKs2nh2CgaW5KSCyMQifdcsRgdF4gxWwPkA8X4aossbEnjzLTVkc6c2M6voMW6iFoxyKarALn4LcQuQAKgeB",
  "key18": "4HbhSu7Q6cZxRUUydLrzsBKgWcFranR5pdt58y9JdcYRSzV8xdcMxkqjuXNXa6Zr7dQg5B96ZZiUiCdcoKGrDYH7",
  "key19": "bAiWpdMkzCVD59CeF4aHZk9v4ZwZQKuBnVEuxAcyfK7hGDNNDdR1YTaoQ4K4iax7Hg8DZtWyZoeqYeMvYFY5noY",
  "key20": "YAi5TD8My9tLpDFQxiuJnkBP6Fe81vLH2yY9NbNVa8tkw9hikEpgXKzMo6GEfssr9VhDHbvrr4XZ7TM15d41HFo",
  "key21": "S19cTkucmu7cC96tfhfTCRvfmPEbAUt9uh5WV8zxA5gcMJqo9MnWGgzU4VDc1mXMyMfB8rZQuEkdrBXiDy9tA5X",
  "key22": "FvURjmUo2TufjG5ibzSJ1azJRa4g2hkUkRbukehz7Lbg26aNZHhkZRiKUi1RLQFVnedWs6tosrRqCXBm2LSLci7",
  "key23": "45aZ8N4vdnyB42w2CoU6ieGgdSVuPpnbcje1Xnkvg53quw1P9TzW7NsxdCx5C7DgRxBt92uZP4b5uyUHAA4Z3mcn",
  "key24": "22xwhdC9bD4i17wmag3hN5eBfoYyJ7JEtXyQTtppNACSYpUubv6iZ4BE6ks6FLFidFCJCmyqNDyYMrvQZ2K8otw6",
  "key25": "2iwDoGAS3MD79FEht1uRZZA7nkq2jYtToMqBtPCbvtDHAYMRADSTrvgYEtjZ6qjsRD3Mw3qmCSQ3LXgHvLBnsKPn",
  "key26": "4anzJpwyB7F6doKv2vLTMCZJ9rpBrzTwxawHVmmx36Lev7gHnYQcKVDjXASXAPfT3TcQSYD3WcGG8cJQ7YJSxccP",
  "key27": "2cXA7sVG2DHDf7WZTBjXxdXRq6dzd1NUrTHYoBChUMKMaDNpkKj6CZs2RY7Y8FgSVTha5fRQAHfbVrkdKTu7fsUM"
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
