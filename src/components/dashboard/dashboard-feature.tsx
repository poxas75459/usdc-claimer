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
    "22D3g7ZuMef4bKzS1TWcd2WpnSAiRuNnL2AY3po1tqSALX7wu4kgCAQDn54A3YsLnYpxMTSUNdMd3Jf5wWxnVnhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vLmKA7u8EPStYWKu3oSWuogGJEsaipeHWqgr6RFLVwTnfFbRhkk3nxPo73sYM9RAzVHcWhfexSqb76jaC2pwE7G",
  "key1": "3w8qLcWbcGmW6xxF7zHYkhzuhfFhLgXsjGMNf4UTrQo5BUufSy8FWESNyqZFoXBEH5mGaQAoHvxxXbEdJCBmuiqJ",
  "key2": "5XoXwE9G6JEDVWsJWgDwpnySgVps2ePpfPyQMf3K83WiwbmJMiPX8ScsQxng91TFLPhuz11jGQwdWfWPzJBxRAcQ",
  "key3": "n8XMqmu5igScSvfZzRUSf6pD9LS5p77PNJ8ePqBbeiAoxQJwSBxfzZWHf4V8U3EaRj8gBhe7Dt9Fv3n4e7Pb6Ck",
  "key4": "KgyzJgbzPfsfoFS4NpBKuVqhQiECpV8JBPDzVsb8AQ3ymKWkBQiUXWDcxpJFZzs2q5qCPJZk9J8nSGs8tQaUBJA",
  "key5": "3CbyFV1hxrS1q7nG1HwAUUmMuD4fGYAucttyutmJRcSkYVdTpVU6zFQijp2psu2o6uUeQrvCCYuo1KKYRnNdLXi",
  "key6": "PLtFy6DtZyNzj5aa1iF9q5GTwbCnE6f4iJYChCwii9vpERNHC1pEZZkqGLLESfaV8dk8VmQR8iYhyUctKu38H5m",
  "key7": "sy7HRaBTt4GUmG7SxaBqC6z3PRJvgPsgtJAEKMHPe8yBHZKiVoYXwcwRCbuQVWM55THNagh5e4tVkBUutAX9MkP",
  "key8": "2jDuejVygzZ8qGNhG4gE8dKHWTKrvkoBYzXECswFGAScXp6zJ9D8bjseJUHt1Pb9bTXgfAr3piNrwtwaqXNfupdP",
  "key9": "59mbfPJTY5KrAX6qhNaZKVWMFQD5YhdYyCyTxN4PNu6bnemVnAMhG3aBgNyc1VR9hyAVVHkdH9GcRZcqjyenGxck",
  "key10": "21yVgZgv64wPcmxxwPJ96QzwB6QidEacMs8b1n7HYButfXLMPFBaqQnQH47EHrxMudkFhSRAXxwkqYtLySvDoMLa",
  "key11": "59sKWc78nZnEeVvkn7Piz1AzhEKbNtjhQn2d1kSJTxsgh1CmuRGvWpBaJT3FhALadYy6uLLkmfjvdivWMAD5GJfm",
  "key12": "4hkdjbt4CGTHo3bHPKVzWjcNkT3u43aJnmyL73Aqn748TbzT9v3vzDWdoy5fweUHgMytW81KjxsHdpZ1MB3tnz6V",
  "key13": "3WpiGy7Lh83tsMZLms5YhmaYbE5tfDScrrSN5uy46hSt9JzZV2hppPsvD4iB7nP2QKzqukfgDRcHF515fqdpHgab",
  "key14": "5j9fmrCRr7DhXbcmYhaZBV4i2LnYef1QtYs4v5nTHs3vvUFuyj4bppB3StmtkvVrcAiaDik7AHvCLJ24Dg4xv2cq",
  "key15": "4X8Xd5Kbabbwzo3XrLy5RS4vHj6uNWmjmMu37jsR2kUs18HLFqKpdtBLwwPJRcVTyC15yhn6rx8dFb1DkAD7N53t",
  "key16": "2Jsx8CitThDaQNs3rwFKkncAXcpGR3M2zyYDngHrbQnYq8AQZD18Wa16QzfJepQy4fqcEpFXKWaKSq4Mpk4fB4vf",
  "key17": "2BAjZNcaBq5w1EJJWLQJz2KrgL5XM4cEYxLcCrLReacyXx4zohtvuCZPyvSDNwQQdz4dPZj5caUzQafTcaJt7JxX",
  "key18": "KotrMnchq384mc3j3ytAiFvGxvUKrkV9PKjyc7njGzFBYa5VRvBXnnfu53xkEs3WFBuAwo3rTsYn2ZGhcxYxbp1",
  "key19": "BAypo1VdrU4TZJruQ4dXY1jfLJhXiaU2yQ9tJv4du8aoPyJvdWBAPW6kUu4giE178vWKCWk5TcGy2K5gQ1FFY4d",
  "key20": "27DUvqyb1UzuYJHhP5TSzXVgzLxcMxHyoYzXrW1LdSMgGbzAoFgnTrC61rKENpFS3GCGrDVFWADPQvAaTN6c4AfE",
  "key21": "5RV4hmgEEwRg7FpWrd1zUW5n6teBJGAiimKumnFbyq2bH81hWLo7akzC19HNc6gokJxwGeonx51mVjG9ejfdfrha",
  "key22": "2ufFEQekWBDRR3NE6qAbaKL3w7jhAiezasEx886Av4FmvbcKiqWMUV25h58ygQw75iWjZFc7W5VHDKSEHd6dw9YW",
  "key23": "2xvfodb4bHePDA3qBaJgB38RPPxti1xxSeXiqKiZRbD2cf9wY51fQ7HFy51Lb8BAustSaiNDe2cybjdJhzGbciRF",
  "key24": "3jSNXNYi3itYbApoPivxPZNMRtXkt8zYwHiykGCwF7nqb8mHDTQPkKEuEfWoceSKC9npvVatVM7n8VWaT9eyCzjs",
  "key25": "35tkBMh4K2mfnAotL9juheZ8NZ5Aq3BiMWXVrwpqmJLmBKcPgNu4FxaouPbQ9VmoVUTxawSqBDzqs9hTp1H8RdYJ",
  "key26": "5PLmi1ZMwyPdeYJy859fiv2JdnKEyHioJUxJxtz3vTfAtK5mwjujraJ1pVA8cos9d8JvS22bpSsJK3NWL8S8YcAi",
  "key27": "3gfhm9AqZBPRfzKAe2CFhhD96fqtVe5ctnpjKnQcuf3A6u6Huv3NvSmFzqEhu1gDGouuZdGBxzyNrLZTUWyqj1pr",
  "key28": "2YSSNdm4qsRw6SNiXK1djKiaQjrPAT597piUFWcm6RFDbJUppKRXKE4d7kDU6H1ZKhVUpPvG9rFnPWNvY9YuZyfB",
  "key29": "3fPD6ua8KZYgm4eePy21YuxihoLY8MUZPsUVHz4nkyhfyug6bUjHetrNbUjVroQZggTCQYWo8iuhWVc5SVFAQGRZ",
  "key30": "57WgZteXdePNGUDVcNP24ggqU7ai5Je5gXeC3Wm8bnEvFqx3CK6CjHNFf3qfn5aVMdMFkyyjDUrq3pEJhNvs8ZTK",
  "key31": "2Y39sVKDBctgs1SBqDh5SbWKfavYtX2rhC6B58tn84DVBoVM8Ygiro3us2AA1SGh4xCaCJfVxjg7TpQpZcWqjJks",
  "key32": "mjnLCKZSS9ZDgzRFjEGDXHmPa4fANif4gm4y9r3BKcGBjHW9CYm1degYwsTX44ajtsN6mr3Mj2rJFQV5DquQhv8",
  "key33": "5g6yghdBarSVkroRKtdAqdviELcAYbSh1onqTmieWSMHP3xSP8KgwvRXubpVbRVbaTHz1TTjENZquyBLqrRkDRow",
  "key34": "5kU8S3b1EcyKHwy1yg1mgousaVU6Kd36oREBcfZM2cykrtTketVrwaFG7sKMJ9qWVkkxa7gVEG94Qr6BNfb3tqP5",
  "key35": "4DoBHozLPVgeYvBNABm1DXUs6pdDoQVKb51qHgnfCA8bb1uva25vPmkJwotXTHzG1CxDBSFEKRTZWnf23y1BCjc6",
  "key36": "4RVHFyJWfUHn6HPvCrcmERjnU5SbhmGGkBG2iupdR1XPh4VDcjQZsMp63FaxGAv6AKrzecfjJvWQWERSmXcvXMgE",
  "key37": "2Km8fvSehcaxYZMPKYStV3ePqu34MgsC795C2sFp2ZwRnBtehfUJn3sVKDHqWMokVQnfmSsX2PDbke9zUKzykUVj"
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
