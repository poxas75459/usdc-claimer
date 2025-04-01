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
    "3da4tknMPTVknE1pRKkREpabUngtaWSCVvApe3gy5iR6jvRrByVUzAGQ7nWRLnw3n7jvbxorL4mNGtCryEPovmFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jTQosVR3RRRi32xW5ovXV6hxMF3mSrv75wKx34jmnK5djKFuhcWTLjYCiHXqfpESFuXVYdwC5vgYuFV3bh4UG8H",
  "key1": "2omPW2zbamy5BPightq19A6RyySYAhT916XUHdwSNzVSfgzntxaUP7sveTZV6HizeB2t3detvzzPu5ye2DP4JWhu",
  "key2": "2d3i4Zc9tmo5UaNm6QmNo2xFipiDMxdMcRk7jDJM6jnuuc48VDn4j53raCkinun2ywpUiRreG35FCfQyVoSNFSSq",
  "key3": "5oi82xdtYVQJXcK1itKB8pqJnyQekN8ktALJR4XQxCeTwhRapkJvAYCzmi51b3boA3VZo279tstDm2bJ6DviGJVN",
  "key4": "2YdZxMzQYxJ1utDDo5iGfLUbkWozxxNCrmsz2m4tbie45PQcjiUMvYVr3H919tX2HrenBUAXPQD35aiktCjzFZ6y",
  "key5": "Ldn7WCDRxRo8YSWrHaKbF1r5nxvyjg6UtTGfD171sTuVek7amU3Erp1NeK2xrkpNRD7zauDMuKhburyGjyyQNU2",
  "key6": "2nfbXr9UixwvYdiv9U9iHGpFi3u2vr7enBoMBxcpAxs3oksug6HBLjB4LUmFEmZX1ZddhGXihX1bJD2RUZULW2ff",
  "key7": "4Sev8gsFAU2pEr57YRJ3svtozk93qnQD2bEXDDiJX6QcaUacCQHifbz8VPkzzxpyxqPpnjqy7fmf2piK8v9u22TM",
  "key8": "3TefwbEXK644ENaspt6mpB1sYZ5KpxUtJ8g1aDYzeBCSyfMuUJLYKyckJqNLwuM2AqJ7EucbUYCGadn1pvvNkUVJ",
  "key9": "K55UQvNamY9M4uk6muLDFnPUybcD52GGLoWqjiCJWVPvxNaYfQjwRyQKuGmrG22pukiroiZHzEP26Bu2yrTBgbk",
  "key10": "4yJVhzthF8n3brhvBHdYmAq1FkJFLPqtZTt7B7H94eyUJJfE5FKoxcxKSyJQ6XFnvjmeo2xe9iT7EH6ZHxy9mtcj",
  "key11": "4zzkJGfMr9yHpWpinKDqptpghTJbAuRqsTAMfYFzjEgUe97KB1YhBXvfjnXcostTadUA97FoP5FfyfdRR6Lhn3hu",
  "key12": "oMW1M3cdjcmkoDH99JbuiAXo6F2GWRwK2QxK5M8wQ6KBH6fYYJtNSbLAGeBg49bukcvrg13CvAaugEWD2rhFfWw",
  "key13": "5qrrrSQKh7w9V1FKhjWJW6ctD4ftzyMsBB6ZnXyuo1pprXQD2NM1JHYNgNKGrGYnP3pHojDL7PkNbVKHereC56tV",
  "key14": "33qHWfGgUQpTFkMuQP9aduBZD6UT1soJNq16CjFt9xwghHsYYMMjaE6GZGsUaz386Xtv8yX3AAg1cYLJHFQVUutW",
  "key15": "XTVf5GuaFvBwMSmBRjPb55TcnRvG8ENhgTFehNN7KPgwYyL17WBJrnYHPXCJCDXEwhmtBUEdW28LNhN42FsrhgS",
  "key16": "2WMGeTevUAc1kPpb72TgQDpAnDTGiW5WWTMziaFBLTKfFm66Rvo9gsFpbrbQLp3LgPvT12GgdBXgM2bd7QkMsxVH",
  "key17": "2RCMM5hh2wyamT78A4V33je4viAFERMh9x7C8p6rXiJxwrTStkXRubWKTHFMpMF14rUFquSE9dHSRVUpAbp9Qihq",
  "key18": "mvwQQhV5QsAdcyjXTC8BFa3zszGdJJCRaq596FZcgJfjMnZue5FP8gSp5yGMRFn5DB1yHBKWYMXULqnucnY3TLX",
  "key19": "DQuKuNiqtCBc4Nbu1awK5tZnQ8kygFUK72nHcPGGrpVVyVxkXpcssaJ8z9LXbWFni41LFGTAwHA7mBT1yEM7DVf",
  "key20": "5ySucSVxrPHCTrDd6vMf8BDnaukywryjPzjuZSeR3PooFd3HqnpAakpaVPWzMw7mdwDPRBWCAY6nMX929yfh64br",
  "key21": "2w2xDhUbZgYch9NSdXUfLEAYVPsLxeBRtbnPHfVfs8iYLsdmELVd1RgW8qhZbu3YqbrK4TEVZZfiZ1tV4CpwsDz1",
  "key22": "xz5yG9Vzv72rFqHEDeaUrsijzQEmbJpdobAsBFu2MjAD394AwySaNAGa9Msb52x2PqQaZob1EqdsLSkvv2X7q77",
  "key23": "4YXKNa2BXpTJm1SyyHPcc4hnhKXLwMNXdfLJ37SZJffEFW1uSbiw25fiovpFwLTppSL6g2sps12BAaMPUhhnNpX1",
  "key24": "5it3NfXTFmpZ9G5JAGrEgUvDjAgE4sRbKP8BBCVhfA6ofJNV6Su4nhpBPZTD2kExmmo1EB4v3kPwZLtjcKuH72k5",
  "key25": "4tZjbTcBMdRu3S8jg29xwVoBikCB8R2P6GwdKjPdR2ejU2Hxvucwrjqk2Ts9xVPyiqBkWB8fHCqnww2ojKYCgbdu",
  "key26": "XU36tyY7Jw4rU6CYC2Qd33tRrpoU6hKBR7jbnUcCngpDtZZdvz5mK3jNhm7SwgVbJCVHt99UdDQfJvyKzT32B5Q",
  "key27": "27K6FwyAU35RPcv4zeC7sp7vUnUJwZvhFHkcCUnueE8LNGtcduhxBnFSCEaFQnjQ7oNwfuqjofp3wnRYhcVkLF7P",
  "key28": "4CC86sSsUUY1pP8XXZzUF4CdqB7sWdm1CeEazSnor2FxWCPZUdSC4UEMbhUZovanAdQcz8mHNqNyGwzPbkABxkMv",
  "key29": "3Qadv2nmjoH79iJdkNY2ig2pBS5gXwJoKsyZ916UXR3X6gsmjXogZSeiTkz6Karr9nnk8yNP5SqLKrYkFsF5sY1Q",
  "key30": "xnc1QmtUTrjwQwWkxR2m8F5Lvqwkd4PVh9QwKt7s1LECugidA7565ayiGqHbFuAvGMV2XHgystyP4YVYQMb6KwJ",
  "key31": "BH2SyGqWTvg6s1aNFuH5yKdwh6tYo53gyUKo8aWQEULgfa3eobPWQY438E1DQvoz9vEdBgxShmsERiBMBLrcrLR",
  "key32": "2ZCJcL1T75K5UFvBbFrw4ut4rBWh6nkTLnD7K4qeDoA7Jm9r9QzWsxRbqjyff5ApmgQPwJjTsUSGUjMLZWzuvaSV",
  "key33": "AfcDyHKzMovcX81QnhPoUC57774auUx8eGSvdVyVTuyoRnYtK1JV5xJKdWQJbPia1CQSx8BAV8C2Cu9WBFmregh",
  "key34": "4UudSRaZF7BEYbjtEHkrLiRA7SqsqNwyUKs1ioWLdGRYQAFJHn9ymoHar4tQEtXb3sKWrZxtPmJzh9E3rhy8WJsU"
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
