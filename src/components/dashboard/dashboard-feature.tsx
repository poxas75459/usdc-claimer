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
    "37oPrB825eQ84m6zmsiqJQpcAzmfgc3v8MF7nqYqCFcmVBBPCSqDvHYBhkntdftG28KQ2fGQpdt4Dz3FZqmuEu1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GBEjEbPiWJGq1Uf6nqafNfEaKCmqyqSgNtwMwg4ybuEggCKfBqp1EQLGJcBwV46RNMVQauRXmDsiSrLVGH7LEHS",
  "key1": "5BW1U31jxvDs49mheTRQR1e2NnuDsq8wB1bcZZ4zuXo9Z1qgzgJM7ULVpVL6K8aTRTPnccgyzwHJJX2PsRaTdMtv",
  "key2": "39X8zPga4vjVFCpNjJNgq4GJBTRukf84mKYZjjFdBTiyMFEGvrSNZpeJA96fnKHLykyifdzS4RJ7dhtCSuWqxZMt",
  "key3": "5uGtfgboQZ9aFRJFnzHNDGMFKJC8UnQw1ajBUpRKnvE4ce77hXDb48kHBjYV74j85VTJsKhrfRKoTH7sQYECrrR2",
  "key4": "UTFzanH2wSTi5HVpaQmCs7G9oFU9B4JKddxGwVFdnSbxrFoSVVZAcbnudsuCkbHWa6g4ya2UYRxedvmRPxg4RUQ",
  "key5": "3Bi748C1ZScAYNGkEonPT7fpEE5omUb4rWV8jbfwPRbqWDQFPYpdK9y9mjNwm7D4XNRcbNyXqJSa2ew5D9MkhwKy",
  "key6": "4jgPZti4WnkCYQr6dCAYgcHrc8JENzPvd3H1LXp1RHs84WPa1SiKhEThVQHUVLB1qRvNoPXo2kMcEaf5fuhA6ypR",
  "key7": "662mGDWp8TpFKZbr65kitHPwzss2s8Xk3K6TpDGSapCwewpCGzD67fYgPJoM15eodcTaFGm1LQcPEGu1gssNLgiG",
  "key8": "2ZZAyTpwWHHEqDy6dGQWtsYaP4cUm7NpR5x9K1arsvo2jbaNyf9FzKvGsGLHp1wq6QS4MPUSzXqdaobcTWafJk2C",
  "key9": "4b1VihwSFHXnWNtYZV5ivLCavnqrrc9jAWwaJBDNahLjdgn3z1NqBjPLrhBxh9g9atq6CW6p7X3m79q6ebhHXhNq",
  "key10": "5JMCHLpCS9AfynWww4N2uWN6m3xyYQLGBqnKiN1Tai6TCmyPEnYUSk4YvypSRW2oEUx9zdsDFrphY7nFYWYP1ZVg",
  "key11": "5e2QQoSg7b24vkeZA5i8M7F8Pik7nLDrquTr7hz4kU7N5yKSRT7XqNPf7ePmh8dHREtKNmASaDhN38mbe5eP2cw",
  "key12": "5Bcy46xyE5HqT7R8EnBTpdz3fiXiFyJCocVd7zfmtKmeahJew6c1PwvQxqSm96qrFpA3rT3UTWMRUDsd7quyPe5L",
  "key13": "2Mrj5VS14sb4Yn8sWfADchT1Pg3G9oorZ618vtBzB9JR8n7SGV1pTAduUpEbgxrXiddvDLX93uy2ufEDMWsh1mLJ",
  "key14": "FPNN6ZupEVcPnff8jmr6qn6Y9Jg2ZixX5BWTiBGdVyRTXwTAqQcJ1PV5e8CshU1NPaRa25W113JYCvaJ619nDgn",
  "key15": "4R3WXLTZdh7xRuDbLRipGeiojaywEsgTDzJHbGvXKCbELuEbehMx4YqYhRNcmu7CX4sxp54Rz3ngStQM42WdJvws",
  "key16": "4rPxgHBDAVDFS7QYUx43hfWUo4Vas8cPTFYbJy8zfqS8NC4ZV7TL18B2YZK1GHhDauZXXS8RfLWy4G1wkpyUfZar",
  "key17": "jmBzuJFDHjBmCQPtGxJeC9z3ZizAv67h1ZhoxathxfK2BRYiAiP6LKZ7x8MT4xCWuQdwdmreLXw1gZUDWfHuRP8",
  "key18": "5VE9h3hjDsfTqs9bDdRLpmfFQpMe4zcgnVkR5xSvWwLCYQc4DNcRne9mh6vUqNWLzE87FSPQdeZzmu3c726pJmE7",
  "key19": "5kXdqzvqn84JqQvFtiQdgGmG8auMJuffm9PM2LGEwdnsgqcvAriXbZsiMkZFV1FioRcK2AEFQGkfaaY5Wk4Xpb4y",
  "key20": "47b25Mn4WFq9UBSfLTdqBoP4g9JqDFcb7hv7afRT6D1MA7CHNReWinTbNdYj43DqugNV8eK1gUSuSGHRwMPfB1fU",
  "key21": "3urtzbP6Xogd4qnYJxRSK6FZPwLVrStAnbFzDeQZ1n45SUsEPHS9rhaySXpUaZSEno7xFNiFm87MAxEnyL8LkySn",
  "key22": "251uAgoc3KPy6x2H76Jhp4KPGxfg81cQZUDgGWuakdwZ5YUP1ifE6pxaVVc3pYzzzTSdDcR5EM31xiHJjL3b9j22",
  "key23": "QhfkY51n7Xioe5sMCZ3PzLLJ231Q8GYWPCayEhXeU4oGsgkxHxsb3KJrvDtSex2J3DebW3j4ifAY7nDNK5qCU1U",
  "key24": "5fVbDHCioFWmsPkkUs2W3xPGEFKaNn2ixAyFemVaxy9zpcAcHyFJXwtcm1qP2okL8LiCe2Rrr9yVwhbtN8cXTbSx",
  "key25": "zVR3WaxFPfQMnzsxcAgjitV5bc7xhBDc5HaaKKvQVGzp2yvWjUWY1W5wnEHHzfwjyinnW4Kkk81eXjdDzi6QRGp",
  "key26": "3NXPQX5A1ijYjKxhWpnYY7TiSdcj4hdFyRsEEPgqWb3aUfQTPwVmVUuv9snaZYyEiN1xeyvP6egXwNUU4NNPfobZ",
  "key27": "FNHMgZXQ1rS54LkWTyMb7BY4ckLXCCvUYbkhWWSb6zzGEUSmkCZ7ZJ9kWMseUSNriK2muzr95Qoy9zZum6EKRup",
  "key28": "44PhsceevDCGAgPc9rE39cCpzVfCKnZKKSZzMwTi8LwCiHjD9E5iJBHggD1PnQz916B37wGZoqLe1jLKhPVm81ay",
  "key29": "5stPm5Tz2gmgQLJ5jJG6wVgySYTq7DPQDKECJSNM1sFTcUVGunkcrUF3TK2EQxBxqzZZqVgWfoBo5xsxEdAH8pR9",
  "key30": "27JHLqrFCm25u282vCn9cePsREJJv4BbrVuLkjAsrS8cKXvD13f9HVzCVXMv4cPt3iGys8VCLQ1ehD9WayvBm1oW",
  "key31": "4d9a55VrzVTygsjTELKpcRrWxavMqhvQirwHpbM9mhHfwTw2GbuepNLtyjz9j81kBCohf9rdJdSd97vRoT59HFhL",
  "key32": "2f4E6VfDzUkhQDoYJTAWvmgb4PobEcV6hBxwuiTVZSmGRykLsZgqbfFNEbZmyJZSNxfLe5AiWnB7Z5wBcMVmFfJF",
  "key33": "4HhVcm5nqkX4HujwkhkHhXiDgTF7S6bYjL5grgnRQQAg6kJy7xnHGm5XjbANPS5KaipK5E1bJAFkhQBh27ErH4Dv",
  "key34": "8wHByrGqYNvV6Gotaf5rpYXRMnvEQrEfikJuTxYtZQbJHFfgpJthUV3W78UbM3hWWutBp9cQ5iTcC15ZZaSCUZE",
  "key35": "5HNG6bWirmGfo2zj4eQmB9MtgfRLFz2hGwGwGDFjWfju1vuhqfPp1pK8f1DAvCShanWtGjb3dUSPCNFfziChpZPC",
  "key36": "3N37jMJKydqE7jaSKRe9xXRSqing2Ugy4QFCGyxe9qG743Ns1vjDprKtCqHpFd9WaN3Yoc1YAZRoRCgW5ot3hhm7"
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
