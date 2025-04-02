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
    "5FsyxDKmGM2uX2sMDyn4ZGxUT78cEDmEwByfFv5XFbWvPh7T7Jj6WcccVNGpo7ErXknFjKa6UTYPM9Sd8XcVYgUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26DY48bv1RrM72vpZ57p4QHfGNddWsLXoLGLQvbviJkGvaQkF4rAqLPbo3e7rzQFuVJcDpi9HtSzf4paV2HUwNwo",
  "key1": "2Z6ZsQuP5r29FWu5CPUMp8Ny17r6BbBV9FkpBo3AYjTZaCBnZBc3yMDvs4fSGEhMhbRPmgmkxRpNBWW5jC6eCU6f",
  "key2": "4NDfFkySLuuxkqWNhAJbaZAcKWSZbXVrHNV91EuNaia76B7dGTKeRRhJsiGMv5hzizkTxFx41gnNp9mQNApyuLaK",
  "key3": "ReuggU7UqnH4EAZva45k72aFg5urb686ihVYC8iE4XW4HJE4pPkTvEH2dp5wuLgmRMgg9e5nh7zEdVCU5xpiU6Z",
  "key4": "34EgDYjagB2MwcrbmaFqbkgkvH4yVdagsBESFJuQbtJKSGW5f7SCboVscLQUsVdeG9YUrP7qf1JNQk5xqojBBroD",
  "key5": "4LvCpWM4KSaNZdXYbmQikmCT8Jf69fyunZ8Yq9WVAbYStTyCpfveuLmzUKypRvZr5p5V5oP1XAcVqo2UbWqNkYq6",
  "key6": "2GW3dRhDGNzANjqZBVsmPtvgftDTEgxJc5rBqaUjS71vRSNzNBvUaP445YJUEvDJjzpzRzMAAF5y7R9LyWwpiFn8",
  "key7": "5FQaaSPRzUHLeTJ1MrujjNt54LUEKCdZPhJe6vZD5acoP5UdMpf1JLzPLhYzoo795EQPnwGc43TqfpJt1kmvVu27",
  "key8": "bqvcPtKDhAJiS2exo7S2bqx3h8zE3xRQGVygfnaUBSBzSGvpwiY8moq9qC7r4LxziontYeqJRrCTFoKP1gE1MhN",
  "key9": "3LmHq7Hc1Srxyf98JdPfmuxcbinhgSnck9QBLtp2fYt9gBnM6J2UTUqTqX426kmAQeW9B3rXYfC5RvAtytSSoRtY",
  "key10": "5Jii7YeyRVBz6x68ZELkC3FGttPJ3YFtPFETmhNrmQmKg9uzC3xLEqc9NENc2WpcLvR7Z8F76SUiJ8akihUJodTw",
  "key11": "5mbmQs39CU6WGENzXcZkJYooZSChpsCHCZgJoTAvQRmM7xidAR4nfquUgJTjZWvBsJuHqH8FPkDEcVDJgciU5Vcd",
  "key12": "iA1S2ArLqPCrYNzuDKbDaq28qdGpzmLQ9aAcNDNEiS8Aj798wZsT121Da1h6DoGM1djG2dL9eXsNqx59XK63Ls6",
  "key13": "4tWXrnDEGguGJJVQikQJYa8YMM9pDcaJSbCHTbRBjPV34MF67f5Kp84kFnV6xwTiTJauzin4YT14CznSrDYQVSeG",
  "key14": "5BRQXEQx59K7xute1winJzJh9YkL3XShsN8jHkpYmEEhNxV9k3jxR4T4K1SFJZEwPy8JVZAvhdQQazWDY7rrdxMa",
  "key15": "3DXW1ewheiJHLufNCVCtaYeagDcj191itwPenZwkXwkVDU3Jx3PGf8qUTaUSbs9Qvi3BRSQKRZBaSXLjS3K8YGwq",
  "key16": "4M4CzUYNNUUWwKmKdGS47V5jCqfV3jKSQavXW3q63bibFET6N1TifYVZz5rNRmAeKSqxMcjQ5JZCKHy71PcidokX",
  "key17": "2uEfQmeGBEzc4KdyWTELU8mU8aDfW44oPG9QqmdtVBAKWGseeCSxkEiwktFjUFCi11LPk1QySamusoXgDRgZoZLW",
  "key18": "4yURG4K7nkYfrBNmcAg2ee6agTBjKPmUaUgQ2M8Rgdy7Ki3Q6sS1u1Tk8beRetV3uRXDyTNVDUaTdamahmF1j8Ng",
  "key19": "2NoKG1D6L3piSg7a6EymhFWG8EvbMERAMzyPqb3GLiMa1bFfJqWrwFAYvCTEQ5LKAp8CUbpKiHL9cxYJH2XSvEJK",
  "key20": "3Ts5ebzddBNAxQ1SfiRAs4GfBt6ovaQmKkSpyU8jdr6GtUvj1R7NefkSZFXKgfZvh1TdSmsZKZvFf4jQzmxNdYaf",
  "key21": "2yyqWDYoBVneB3ao7QtXULYvgm2ZLfYF42QTmhDBdM5V4Nu5Tu8wExaW1QDh4hj6ZBEDmKmMgJWZmXrrxQqKYiGY",
  "key22": "45MfrfLbtn1BpVAJRariB8X95SVGffxTRaJyU8FZdPDSbTYN8WzbE877Xg6i1bYKiLJZLuPCeEKGjtuFEo7A4zCW",
  "key23": "2BhDweo7oRG4Zck4umwVAPJWygd52qVrHpMVcbsna77okGspicLscdfYEHuiJehJ2fqi4McMhqj4iExo2EhRi7xD",
  "key24": "5XkhjnkbASQawDmS2RNbFXPprjqjwk9qpjxz3j4cbJSg2jsHzGUyx5eqQX5Q36MhP4GvEcAzLKn5U2UwN1fXbE9U",
  "key25": "51VYzFWJ82GXgjnYpBVLF9aYicxPdMw6mL9oxjYC56gFyTnuEtojZpK9iGQK385omp1VUBf9LMdzL2MkydxyFa1z",
  "key26": "319d8wJYoobEwe7WeDK3GpZTpyQNJBNJjKX2kj2h8gV4QgMtwpXNVFr9p8rMUHuWQbyhYyhqctgqPXqc48yqK9td",
  "key27": "2fYCF4X84Ju7vSUuFb3wFkFbABhNjRK3JBrsebY6sbRv7BBtQL9zM9aVh8RSvUnLM8fEkbFmATBwsRmoakEGg72t",
  "key28": "4aCvxiyJ24nbCyxMVy22SePz4Q7WgrNYxjUsw1im3HiLYvbvutX2m7p3MkVwZxsQ1VMkJfek72quvoQ2TLfC257z",
  "key29": "qFiNRhSBjDwCa7khVAm5vAonp2dMh9BdE1LcV469fRHNgzRrpoyBP7wE9k4KC12ewbJQrPQ5xskRhgG5eaUkZ1f",
  "key30": "3iXWp9m7MLNmBJh2sQZMFWHxYpBfQ4LnAJ8TiAFpaHLYPC6v6PrG9JqNT7DSZXRNTG8HSEyVsYX5SqKRBAnPYF1f",
  "key31": "3aTWRtfxQ5DvJ92bZmujbvqRjzZRt5MoNtrXLpu7JhetqWDkUp3kGGgiSVS8g3WDcgmkVYZ5wySza35GMYLRLVcz",
  "key32": "5BVWX8gRNyQUQ6kkM7kKp1PJXsTV3PRKfXTCTEUAR23MA7Qg4TYmNGxXQinD4mKRKRtkedEVaX7LgrS39X8ehc1o",
  "key33": "5XjmPSaYfKQvxT5JJWo2cxbFpUjakkYkmmQXDWL9YiYAFcbEcTKxHKfSDMupugi8Wgdie8VPBwNHEGVEyJSp6A36",
  "key34": "5Z4kpkDC8dB942xmhR4aYP3uEhLaQmxAqua95nts1JrT3sQughH1bPsBaU2NQTT4AqhEthTwmZZf2M4FHMf5Rqt1"
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
