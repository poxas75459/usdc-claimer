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
    "3QdEEwmE7uZvW1mz39fb4cWYezEmRmUVGZT3ddC7NH67LVtMJ2cnMucwphM8DA1fmhEqXiPu9s2f6qYhEVUhuZbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FMgsF6hPpQHzLs5BeiziWvrttyYX2ig1z8LHVibRRjtcooXSZbRWvQ1isaNHowJ7E9qanmt4h5dwYnDQDPxaJUx",
  "key1": "2gWuWpWrzwQqg7ptmqYfpczrnfUVgenKjPbqMT1Sr6uaEWXv2FJF49ETP8eFVkkt7bCjgpcKb45kNSnan4JJiNVk",
  "key2": "3ysnHB2LSxKeS51ZkqGxAf2poRYjSmrJtMx7yN8c5zRXAKYZCKmE3N4H9v1NAhzb7WAtgqkZQUor2Vv1WTUUCmcH",
  "key3": "3cUPL4hn6DhDyPX2wkrVnLaULCfFRssT2eVS8HzZ6ghNCWsoyQ12uSYgsd41grM7iDYC7N8bDpxF95mCcU5rnFhp",
  "key4": "3MCYVh63nLbPnHmB1CmHoooMs2Y7Per4sLHDrtPKg6rKHFa48G3cfk5Qi2kBaco5DSrMXhTnXsjMetqDHExjwKEL",
  "key5": "3KuS8ELfaAm38aErNRYAFw52Z8pjjv8i3CyXkDDj1PWHtBRCX8TocrwLnp4R4QSxTyMWHrS3MqB3kqBfGYWVv26i",
  "key6": "nvhYiCqWYV21f2ch3akvGtg3mY1ReyeHUTAQxnMKdTpaVCqpprzd6YgTDALNoBszSmgrxYenBGCQupdCH5pRdiV",
  "key7": "4Z6xmBUYwT7Rf1ARHXjuuQjCWbw637dNqSpHqTLWX2wQigyVLMMBZ7CZwW41tkxeaNoSaNjNut3sZZBKN3ZLqKGU",
  "key8": "PsDLJh9EBH4x8e1DZybHX2iSLSgVD8oXPrGA1XEbz3qf63x4eJbw9oubdukya4PbuEEApnQQNFc4aewBRtDtt2g",
  "key9": "QjYUw4kcc55opeb3Jds7rP6mU6hWXWmo8B9pMocmmt756CZbdpNB8dwkh17psesGJfWDQBgA1JZ82TysvF3NY3Y",
  "key10": "4FZ9Wt8sCnhWgyvwsKCTKFT4GpSsZgxkHmE2AbJFaojJxs7qmYj49ESCvixHNfrJw5aR2dFeLbw8WZM1ybC3qbsZ",
  "key11": "5UnUNoUTbAkwrNHfS84Wi7qMdyXcXv6oS5kt6GJVn8h4pdgissbi3KcGjSfzsFKX5fqQStKUZHZiakUHYyWBe35Z",
  "key12": "31b1Uxd9APkYNndXoLY9TcBfH2TJ2HY9nnnMEwq9nSFHXfCaZeqKtfN2qfvJXVWn33mryTehH42cCE58hpZmid94",
  "key13": "4wFkgeEvq3s5NVub8aCZkTUUZYvt8KhJrWLbrGmk4PsNUdmyDpnBkKs6hkzmnBv2cpLLWV763E1m5CdYq7PspqgF",
  "key14": "61twb1D6kaNbPKc6RZwHXEmva5yhyMcKMgNQZqDrX2tUM6TZYw4Ax5ZHZji6KKbTUfi8rT88aZkfeYM8uZqp9NMY",
  "key15": "VemAzKYHtj4jWvGons9VaExBAvXruM57LJUTqyxgPdQ7zAuWpzf4SkoeRt7Xv9wtazazCKB6LQHEVgKDz6btpA7",
  "key16": "5BxqTMjCSLgGYXswhnntyf6xZ68XqXCS4gVAYguYWL4A2NwERBJsnMBtmipfwHpyf5ZdYL6G6AuTEVCgJKAynttS",
  "key17": "3tf3NshVokVdDvdS9BE32CS2REQRtPgbJwLuEpWfzcHiMNixNGvg7YSZXNK5jCyzLLgkDEXXrtGLN3drh6KzCtuA",
  "key18": "4mPUaZykihq3umBvZXghQWrVZwgjjicB5TAoBEWM9NSjKQzz77dK5W3oQJJeggKbpZuk5ebW7pm94ZhiRUipiSPE",
  "key19": "3pGGqgJjT2JQ7YoBZys175Y4onReg8eEmPpA561SRpGexiFLtqo2HcUrz93Vdyoi5r8rPvWpNhfjsqRrQ2hgcyVq",
  "key20": "3YGndAhxmDvDfJUsgaNNU7imDPMqdfmNh9RfjssCKPjqZHfxuQ7u2i9KbvV7R8KhZ3oo8HowfjbjN96uCYG5Lf1K",
  "key21": "2xoodhkC14dq8cqW5Zkoyy1S3DUMq3Umxa6mgheWupSvoGPYnQ79zQJ9LEUqMyGkKYDLqUagEUk6i2v7xGxexNxp",
  "key22": "2QcbtxCRZH2SC8fy2tBSHBvuTKDo4mZo82XZEqx77FogXurG1rUCFQRTMSiQ7Jhp1c6NNrKESvKufWBFQzB2uXYk",
  "key23": "4ySMBffSVpfn4P7r1caKJXM6h3NgcTr7RbvyEsTkDuJEYc9cqWJnijdVgEnsC8wjczJ93CtFpZm4kQJzCvU7t1Ar",
  "key24": "5q7v77UzPDmfJ6Q9q7boGrcAApsX7r8HB3AYv2vHVUm49sZc8fZ3MrXJPvEc6wrCKFTHL31p9YyLTympC9KziUbP",
  "key25": "BsHHmvrJjkPShqNCReUVjTWn99X8WcwV8HPu75LSnudogh9XqqAUKiiXJ631YndcXJz6ySbs5cJbpLUkYTvkTwK",
  "key26": "FmPwW6T5WXk1yVdLrjki3KkoYVeEEY8QZ1QdvYYTdNqJ4euYJazUJVkakPaspLR1xMYwTc2DSoJebobgUKbxx8s",
  "key27": "4pXJN8LbEqVQkBg7zDirH5U84eBBwcpMTC63AC3GZboSCFy3uGRcJTxTbkPRTcEoRp22jNcEaxkPU2wEzrJZH16C",
  "key28": "3zN9rRkSPYsaGTpGDS5eQr2aeGNHiKbJkcsSXRTGAUY4iLUkbJbuyLZ9RNKMJoSCV4fPJ1ABJWyr3Ju8DvuagMXq",
  "key29": "JEPNGrh3exuGGxvGSVKy3aqHBQCww42rxXi99oMmrEFx92Eo4uBFNHu6K8sRXUZ1xbVhpasW73U9pTJHSFLCWSF"
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
