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
    "3NGJjww7nL7A8shQGLwunjxVLNQJiZvWMjq2nWZ8Fe4xeFRq81hWwnpZi1ZqcQyqpCbDkgxqv31Tkp6Bq4HRz2jS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G22fyg8DDYnzGaTQXrRKhGufGV2P5srakH8qomb6tSg6kwCnxtajaL8K17LxXtE2v3TKgMXJZZXTVbHaoHTX4F",
  "key1": "Ln6tdaJzTb6UaHoYkdmfzFWe6uRV8euhT5dUeTMjNXfFGEFPiLzMwrAMgacUu1H9fzd7PApoviEHrJfERgQqwZG",
  "key2": "2tdEiukQ2q3NXfUFP2WpoCypMxbbEF4RPVBxxAW1oqZyPS4boUzEiakpLQdsS7MxmM4ixN2drjo5SRktpuMFGWFP",
  "key3": "33hLiBi9Q457AkVhi379DaygcAPUpRrvNdLqBmbwTRnwvEeXHcCEBT7rCrr9nv4c5fWHDDuszn9t2DncrqH4kqpq",
  "key4": "8tuNDUT34H9N2WEZyK4mEREyHJKj9kQ9vTodANWj1QCqR4byEBJvsY2Up2VqFkEzbddYWgmD7XhQbtHYT3xX5Dx",
  "key5": "3N5kV21BxQRTfFJ5CXG7ACcB4dsRwjwfyMt3AoUv3rcLTLQWCNAd5sSwcHyPxfQwJbWky2AbxQ4d2tJa1j7EdeKC",
  "key6": "37UhHb3HhC4w1jie3yaBvMiTUNciFZFE8TYkW3uVsNGDuXHnF9vQWjymhDjVuHF6j631oEZfw8bCgdMb33CPxSYh",
  "key7": "31xzkmvU4t7uwnGy62Gi5K2PPmjv2sQDJUSNUFynBapdDXM6kDUWmTa59kXok4Za6qNN1C7j6EqWEQ9tZdXCLfv1",
  "key8": "2FzedMsUNTgNpYsVyRKN9JCsbimJVBFJ9dPg911Mn9DeFCjYLQHzSAKeCTVcb4GdyfTzBYETvQqGCTQzz7yCtVCY",
  "key9": "3ZanRuQNRxnZ9ukYzqnYKvaHz8FmQ5pKkdWGFGAX63yuEBZ2e9tkJHng487TDDaMqMiRKkMTfqJn4AtgHBw6jhNM",
  "key10": "5Z6XMRTGS54MdpkHaao4y8vfvAVwLXcWh3EJRmm6hgCFZCA1mFEtsGUoWo96GyvtwrE8t1e2645Nw8RzrzVEzHA2",
  "key11": "5dQP3VcxRjbcfJYce7DHfygXXD74C6Hdmkssht7aNay7jA6FJooq5ymttUrntRDshtZJRHocPSeGmz69D8a3efhX",
  "key12": "3kuMHccBrxNci8gJWc48oo8qwYoyXRM3noTgG8fw9BjgebYAjZUKgLCGV5h6Urh8ndEb5LvodtUuc7pRGaqzWBNa",
  "key13": "2YtNBiaJDQFLadXB1V1bGBXABPX2tcyNr5e4BnbryAcr5C8hyZHPyPd4DgHUJn12Ymwc67LP46DdPanZQFQ7Gsrc",
  "key14": "12KmNVDsLbKF5jtivXy73pyfJSABvNGwWaUGQpqd9GozptU6e5g2S3G1q2VUswKxzmEep7fpBgpBEPofABrDSG9",
  "key15": "31xRYqCohD2yb9yCUAnLhWkYjoNEScgG3wCrHciD1TgdFVHMfXC8oH887L9nHno8nA7ejZzGJdyPXYfNez8UgJGF",
  "key16": "2SbP5KxzfrV1nkXen1prtLPhsiNJnfAuCPdGoCaR5dWiJuqcWYJdhwACDUkKtd7kAKXkxTaXQipvXUgo24g5wsxG",
  "key17": "L8uvcLJUpiVntq5jY3BsKaWYTAVAJ9163aBoUwfVyMioYfzz2vF2pzwx3whmKv9i3xpadT3QP1ZEFMpTYZq2eek",
  "key18": "5G3YCDE1mvd7Ypfb5TSYhBe9r61T3fa4H5GbHuZkK8KXcS2p51jWyRSauPuDSwYNpJFg8pozbeNt3tZJjWLc6XqU",
  "key19": "K3aVgh5vhRAVKepvvT5s9sqKuco9zPGAecQa7wqB3yMqWY4WxfXbtdcDYiNj8j9Z6P7U57NeLGu1GHe5jM67tvn",
  "key20": "3z34BucjWEpu9awbiWyvffvmxtvGjt5T372vy9cyagmM7iDUXxfqum7bMYvWefp9Pq6FWhUYP51rDUAForneMyzY",
  "key21": "2fHUznujFZNyAEU4FsKtUp5MP9CgWKLrY5TTkpFLdYZ1tVVCYAi6cxJVccnkPBp9QHRsn2rV8mqF5CakMcFYfD5q",
  "key22": "5qcRBM5555q8QKN6JnmVEnmW1MqmpJspiBbyPfNaXo3jVSfsMNSYyG4MkBSccTnfzQHNjW2ViRsygQhzt7PDeVFd",
  "key23": "3FDHFTWwwUz8EwYP1wPAvcpmhMkQT2M4dTkdogMWSGeWZJCZXLpwM6QdGzoYf3RVzUY1Tq4oqUDJ8rHyFwSYmrfZ",
  "key24": "5S6uErYVHEFhYi2tmnWkQMyWJ8L3CYRyhdWcQx8kCr9HANnEmPUt7jvVQ3EBB5gUJ6hM6ThAmhyfXZTorC8q4WSv",
  "key25": "5xFtd7gi98kG8kUjQ1hN7BiFqFhDpxJuM7BsAmH9EdXnJyRDRi3uHJBLZocYMTHfCUeqnvsUTxjUwNWU5QtKptzX",
  "key26": "3tSaEaTHwdpHQT5LUyn5C1RL93Bd96rMtg3vGsZexq9F4k2FS11MHnYyqZiuBf8oNQpaoywh1fHMY9hdkHNhCcJg",
  "key27": "49s1Qzmc8mLgfsQ69ejXEnd3hdxRGow1UWYvuBXPHZwk7bPBKschsfSX9KHowaSMdgL6sWd3eDXXx537jRg8aKCL",
  "key28": "5XxbkK6MEEpp4ZtAmrRjLEcgiiWQMEzr1Ur7eZJxziNxtfkaEpCfHCnUE35PwYQa2mcd8zhUAFu2BnuownpkAwss",
  "key29": "2xMM3ggM2N77F6aaVqiiEmPxUVUKapSDcxvMu1AHp5MLgkqDA9UG7gG8Vk9X2URBn9xbd2nCNN6cxA57TfYvABmk",
  "key30": "3Nww8HKVUabh9pskxNWwrHycgtEgxFDaqU5B7Nw5b7aSaRfPy5oWbaMnvGFyNmJ6EJaZDdnydEFq6Wp5th731sBn",
  "key31": "4zG86XdRQCpgyZaVXrPYVxsVSzJ8KE4U226V3qfL2VQ25WWbhmE5X6FXi5HsZDGzqch8YzWvZjQUz3YYvDdWa4s1",
  "key32": "9rjgjDoqK6S9ur4XrrcvsexGnY67t9Je6tvg2g2mXxb3bqLT4VdjLoi4y9uaVU6W8xA1engJYRLrC14oSF8axH2"
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
