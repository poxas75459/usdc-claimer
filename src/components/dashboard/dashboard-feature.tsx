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
    "58VRMpe5UNwrrL5hSsWfdSgLMzLparJNXu5oBbFMDqPJ4Q2njWgeFhsvc5jNHDapG5oqCrrYA9M2KnopEGMzwMiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vB8CLnguRWs5kLwXJh8X81Zj9WSm6i9BxXS25CHnZpGtoyajy7utBojQ7G9gQWq3aULKFZ98LaQxgBar23p4KJK",
  "key1": "4g3ubGHRsPDaUT66DXHzLKJaxeBxrbpyhcP7it5dPqBgcM2Z4SGXuXB7yuGqRoj8AtMrM7Sudh2Tvbv4nBJaW6nF",
  "key2": "4TBaZKxXMoPm8hoc8X1VJ8y1csz6gRTpuafL38DoadK4woDRZH6Gfngs9fZ6rdjnHH8TMw7k9jbrEt67uDmYsvvV",
  "key3": "2LVDcF8gfdfkgPvmtrmsHTFfYHT27rQ7vRko3DM6VdRbWTpzPSGHWvkLGMcQDKPsenXeTsyqRREtjFN8AiuaipKZ",
  "key4": "47xwJaKPAsoVdWvMqEM2A5Z5VXtN2pEw5u3UewQsqwZNjmi49YJ3RZnuydsTnN1bvQ4dT4tDHXTgCiKs7vWE8wXU",
  "key5": "4NWHkJamStBLsFSQGHUj6MY41VShzPKLcSdVciRuT1w85pnYcxbfcGn5SYLx9fQNaXhJtsotbmV3N5jvnn7eLYyk",
  "key6": "3BcSNvneFq6iMgsCrfSsLz1GHcoR3EcCsSxK75NKe9EaRRJmBsGWHQRGEqwaBhRuskKWJuLZzxsTtRexbCfHQZgK",
  "key7": "DMc3BmJbvDSpiADKygz4hoLPu1ALw46E3GAeSKyzR6rZfM3RvVtvU49deAT8DdG7qysi7WtuNbkZqqaYUDrJCqa",
  "key8": "67Nf3FZNfR7MqoVjrN8nscYNpviK7euhX4HxSCZhJoSZ9YM2U8g7kRBrD8LuyiZHeRGGaEVK8cer5xEDQj3bkaSJ",
  "key9": "2q1wCWdzbofVGqANRBve9kNr1WPFxxskhsHLQCKyizRsQn5ue8Qq1EVQtdcf5WUPSfw6EBebJCi1rRe2Zr3EQuoM",
  "key10": "55Qpie7KiJyDY8qYQcB7y1uFYZxJ1LedZQ5QrsW5ukwSuDXUcC7V6qnJz5sjMeemovShDUXYmjYtVCnYbfgrAaWq",
  "key11": "3DYhXHuBgC6t7sLN7qx4f8EQfhKqhR4DAbbfgqE1Abkbhk2YY238zQDe5YW3Dm4ZD9RTMSve6Jrj7KpvVaqbKAiW",
  "key12": "zncT4FZf7R1sskgfqokmoLD4beBvVAwsrDinn5XFnH4ctHcjjhViZZaZHzkrZPXi4HbiLT5ZMmasWb53eE3xVGm",
  "key13": "3XRYKYTkjf4dNseU8pCdSDvyNqnQaw44G4CwrzsTXriZisLSVFAnoqRQydRmqFhUExBpmYjHggqANiZXZsXkV4zJ",
  "key14": "3yifNfZ98yQCQJN8C9vjT59ztm9YqXrL5GGoGYX3HwqdzHBAXRnxUbCMnPynoDEAH2qwNf1Xc8RbF67jeRKDQA4R",
  "key15": "2SGiJwC3awJ5Dzwqo4p29d6Qr3K8bcrAko2Mhvt2kvUkXzWGSmkzmngffYR4crqUYBnmji59ZvJmkT5trmWBe2We",
  "key16": "5mi4mLLvgikrveEnFHJHPX3VoB4Nnur77SKr5xhX8dH2yFFHHCFtyEwpk9wKfHsPvKvtkekMSEwFjHNUBgqsb2AU",
  "key17": "sgZZWZ8iuqL6kpvv2shNh6S7xpteP9qZZjqKCzrGafneWaJe3NFrWA4PxB7Kxk42drPAZan83zCNYmDWYnNMXFW",
  "key18": "3q7bcU9uXx15xDYHABekgZFW4BENkPwL6ybvSwSr8Le3cyNjiJbqtkcWX12d5T32xKGh9dQvAXg52swaNFrSszD3",
  "key19": "5J2eEFcxhG73b4uYXzBXVt66PgzAuacjUzVxZu3Z6uJhKYqjdL6qUwj1ZsypRHzD8pfXti6PzzeF5we84euXKRnC",
  "key20": "5masgdbK8eBALT2reePpz9fvraPQDwTR1ur4KVwhjgwLEAUDcuyjfRSKz8NXCzSCzfHfoRGxNQVDkqYohajstL1m",
  "key21": "34Cuzrd1BD3mmf15uXgPYyC4BWg9Mex9Wg651SwCWizL3KRufD9PJv2XAYyQXQ9Hk1wbUV2zDkasUcB8WbfmgB6G",
  "key22": "27dE2ezaMjNFqi6WLK1r7SwynnK8mF8ak2uY3epP63CJSba8WV3fGPGDWgMx5LaTpz9GuwgNWNThKTYnmRMRdN3F",
  "key23": "3BNREzrPXMkfs9XNiX5aJg4cSaQcPbhKYyt3MPkZhCfkNBuJ2756Y1N7cZgzGRcKtyrkLQqe1L4jqbRzb9SPghrh",
  "key24": "63MyqihWGPXFcSM94YyD31rGiaUW1ntfyfM2xwEZGHv6ThuzzDUYqTrAbLhyQW68MjZg8Eshqp8meaCp64ocvrgo",
  "key25": "5m9GuU92aDDLmnd152HGZoYmJRZwuHqQ3pEKCcN1Edkke66Xzn46dzo5qg5AMBwYGwUBfH3aWpEBWaoekF7r6Rhh",
  "key26": "uuFvQqZZ4Kk9Knr14kKGxYTixZ1KnZEg1yUeC2uxXGemQ35XCVDYrbHrnmxNJLjfETb1CD2ZMZMRtSeWsd7DTPQ",
  "key27": "3rGEeJn4GJoapEewgWdudYDtBaFH1yMMw8KT2QfAd3YS7MeWpiXCLmbVUaPyjmTX8tXk1GpZqPMWTWSnM6vmfvi2",
  "key28": "5hjDvUxr6vAmAUb7k6ap8wUYr3x7oatVq5Yjh9MyYZERN4doWJvuc6ND3Sw4ejVhPU1e3mXXAQWASnMrPoJj7gyv",
  "key29": "2XzTvFzwmqduVcid3ABR625AtyiuUnVMucACyE5Fdn4o9uYweSNDoYK2QZWzgHCH263XdSSr5ix2NXwBDkN3nxn",
  "key30": "4eRmv3kmJiAxoa99BvvRM8o75wQxi9jsNdc8uEvT2ja5yrRF2YvaYnFvkN4umRssEZdjZYmkTcJzF2rbPBSUAUop",
  "key31": "4ALZFVHU3drddGvrBSs4AtqXBKKztgAZwiBHvwoBhTh8kSr9EvX3uitU3G2SMzHYdGq9ZV1ZQpbhZ4FRZ2he3YC1",
  "key32": "3hjZoqTypcFGnVKXopMaWkufCNyhBWcuhjvX2fPHa3w4wfhGkfk1shtGWozr7HRRHZrrUifehN13jzMu6oem1YLp",
  "key33": "45extUk4iiwvNiD8UDqzr1XKbXaTpN3eSmf1CpE3hfD95NyDMmYTw5nK9JYpdkn9EJy1E2VJDfQrT2Z8kgNp78QD"
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
