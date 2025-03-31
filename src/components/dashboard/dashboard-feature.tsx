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
    "5fqU4hGYaFapFvL73ZTS1ZU6C7xAvbCyN4fLqHbEGZTi1NDjMxnio5NBeD1mnmeGsnMeGRhQFjzhb4cZ3bdSJkX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kbxrENXrc4qGMyG17AEgE7w5SdFExbkzs2TSvwSkVTyDSWNgKxhedQUc6E6McwQMpKdBbe2d1SkymdxEMDUEWiy",
  "key1": "3YE8AAhC3cDKyxFmQsN5gd6mjN4dKRYUHiWzTvSfAzakuzJfyi11G4EtLym4DJaqQoPixbjXobzGdGxaqSnMf3uP",
  "key2": "3Ja3ieMt8GQjhX8ZLUFGfLXYkKiLG15CDvteEr2Ap6Jzt1FPTdYd8eHQ4vue47LRPqVBuUR5UCKtWS5KnTmBUfD7",
  "key3": "5Nw7Jna1gy7w7rUhhtTemGmgcMm7CpYbKx1Y2xkJeZrEJpgxq8h3KkydBsPAjcwC3BhP35RJU3NM4nJC6WuvK6Xy",
  "key4": "4q7qCCGMCeVk2uYBDKrt1oBxZ4xnQkD13j7xtZXYyanV2SgapFrct3Txc67U1oUq3RVNoZMn3PARkfmYH3HnmZ7",
  "key5": "4LSK1KW9txd8HrTA6Rq8VueVDq3xLwyQkC2vSGWuZLZmnPHhDgkfZUaS9XiLUjPpSNRU61wwWafGwLUNEa6C5fAz",
  "key6": "3EVAwVdwzqmDgxTLb3aFodPyT84yzaAeySNUF5PC4ZKNV3jN1tUGVFtmYk2hvePLCgcCqpgSNqBHuyGVtzmaMrKT",
  "key7": "37mk8Wif7hXGj8CZv8v3ghBjMn1qwwXfPKQAxx3ioyuNc9AFX3FRm4QGpC6JvGq3vVqZ5ept5uv88M2henoyj6zp",
  "key8": "3nWvQqQVjGp6stVER3mmHnQdTy53qhj5pLdf6JuaL6ZGp8r9D4ejmQmkEoXyhzRF7F3tLUc2SbumNvLrScRxjnRa",
  "key9": "5BQJm27dQYZqBHbNTGY1G5iziUD6wKFTURtH9ipo2n6t8HHLJEQgrJVRWtAYgMZ9W1gEgtqk1xbCeCi8btJCpfVQ",
  "key10": "65nMbkrpkJNdEgeUqP52TX9EEppQRC7dUoCSWphrc6FXmPN8zwpKDSEnAbfdUBvDW3GThZDKo5Uo3L2Jzup6eBPV",
  "key11": "4RhfH4JuKCFURiPBV3qRCLkG17HAsFqoX3VJQdv75SR16vC26CY8MRaqWriwrYGxE5TFnJ5qKXRMbZ21mGyZMgCH",
  "key12": "T3XaVN9eqqZ9wNeJD6rtkPowwyTDYp5MFb6FtkQuc9MoUiCqXdZuUvQNx5G6dobZRVgQZ4QTQKbc8JgkTrwJvpS",
  "key13": "536HYTJwLKLmyeThTyDk8GojuqMwS16W8Gx3SY2PAiYbkHiT2tqtSG7E4bvn3V15yQGGCG8XJsytK9z2pXcGGKKe",
  "key14": "YECyheV2koaRUVfVmXFEawoqui4kZTceumttXhBfEXH6MjL7qrMrg8KxAfxACgdHabVAcPxKA3J3Y3zfcMspyFJ",
  "key15": "3mCfEMrvM9uYz3acJBit7XhCf1G2L1dF3AQSAHqC9MS83nXXztY5WpBaFfAYhmoEiSpAuFXAeDDuNFxC94MKfsaZ",
  "key16": "4AVUsVoJdfWJmhjiv8Yonu4nMbhxY41Em3brZAycgUaLtL7XLaVS8S7PbXBXS872MQauizcJpk7jBQPnP7i3zqTk",
  "key17": "5eKK9Q7ybQjkRaojj9YCaYmXHwEqZbKcqvGpN1viUPTP8Q56jBZdD3wpdb8x7tgj5NHvsRahhr2VwWW9HpdAuhXM",
  "key18": "3NRAC19jTCvNvcCsC3q5Ctn5s3Knj9eR8zSC5SqyM4C8TpM1drKMhcfzuFS1cqcsVdbuRR8H5VHWQ24GUz6jWZHV",
  "key19": "365RYbgT8PK5HkNg28GTohhWgahgnK6kwEUzfk1HMFFmtjiU3GRQsEtQZNvSydJ98Tt2ZxEvtqM7YnJ5XJhCeQ4W",
  "key20": "4NKuxh7D12KNk5x5gfXZ9zCTwS8cLWjZe3eK7ndaX4pwzSyAiyXeb1wfUXrJuN4mcqx88eatV1vy4v3rPpyoy6Vv",
  "key21": "4pKx7vziJkWs4cAFuJCukMr1nBnMwDYxkoFuMARRZ465r36vNWf2c6Gj7ruCd8cVE3EA6xdV1RiAZKHhxgfhoaib",
  "key22": "3CxrfSjx1MfEasLXhDYiCBJTj8TZrYKtR9MXvhnScxDmYUv9P344V5wpy4mqVmLufsH3QboAAmTRwxT5cY1qr2VH",
  "key23": "iT9rKMb9cesHKSbFUWJ8Cavi4eAiKGV5m2WJ3anppoE54zqy8AtDSqpznPMv8b1m5evKXdQY6NKGoWPm7hv16v9",
  "key24": "3oFsvWwm1Mgj2aoBMrJsz6FNu8MyvtFs3SGA82XeMCkvzuKoSb1Aq4Mfc4oWSGzKZyQ7Gf7djs53JWrruDSERwyH",
  "key25": "58uLxaqcR7meUurmFM9q1CV62nPb4QkkooMAa97MR6XxNeaVG8UoFQKN6zfinHtHW8DVhcJQZoFYPyFXW9MKuW2w",
  "key26": "3mTej1uEtdde25VtXvzn8Wbgahex2YGRC6tyYpwaWGP1WGmz7bKPYmSoVyYizML7mXo4cUhTNZoDyAm2D4AB6mB2",
  "key27": "54b3WkDjN8xjdYq1HeWwuyTTFs8J4QaMPKPAtJPvKkgNQSuiqVJMTawkurxL5g7TEdRfFvNpEiBr5bKwBtAYZcge",
  "key28": "9ZLh7zMwKYTL2A9tWWYwhA6KjaTZdLF1qPjTwrpE3ST52hWct8gc7QrhFEbKp1mH8fbiY3h2zQiWZ3jgAdy7QTH",
  "key29": "YppboKogy8acJpkmmAY28CBBRvguyb98pjP5EkU5EMv3oJ9L6RcAS1x7Jjm8UZe7uWL9WDhtDeLXMFjDi5Sas9C",
  "key30": "2223QoJqgk8aHvJKdwuQtYQ5NXuvbLNJdhvhMBRck5cnJrQuvXmmovtPgXFMmsAkxEqHgksyKrvCV6qT8Cpo1egT",
  "key31": "4o3mSePNfaCrH5WEjP7HLzFQeVjBTSZYFDvGuh1x6wCGSRgukNYTs6D5k4PXT9yX6PHoqE245Poyccqtw9yyvKzm",
  "key32": "5xrZZqPNHzUisMATe5srTkxJmULLWCoPndNTXVyQf1H9rvH9ttSYEiRVRHKJfXfTEtriwfg4E66v2WhBCEQ3JzUo",
  "key33": "VxNNvewm9W9wBwzLVeCPuz5YoS1zVnpKhswTqC1zLXRjychFe2QoPrfZa1hNXjbo9TmskTExq18cu8uvcMnZj7N",
  "key34": "2BKC9iG4tZrGswSgVUo1ofxcpx6e6GPfZMTAkZNr2N3zUPHVjNCWd5pX7SxG2tmoRRwdgBi3H1coPqdi1CsHLSVN",
  "key35": "mg6v497Ea4mAMfYiuQ5Bdc1b1L28fqzMQ9n9NsNRLUvER9YPyumEazwd4Zq4bwb3qx9y8dMCMx1jrQVcGG7yhLG",
  "key36": "4fe7As92EgatdJ21LiJKEmnVaDYpGWaPDLGP2Nyktoqtnv9FR2bMA9v4E2kmqydTduGBgTM2QE7u3Wjk2ktQMs3K",
  "key37": "4QAtcpphQLdopWRSUw5ETMEztxCuhs7ReTZysswq74zGZtVuTZtS4CqueWQeUh3VaB8EXuWcr74ve9sHn7Egxb7a",
  "key38": "3bANYBcZLS2MjaR5ZKBy6zh4CSpRnWRoKZNo4DEA2YPVM6HT962QZXi1KzjCXkEgwfmaT9nQBTqVuQB5ov4hEbjn",
  "key39": "2RzmdXSMyQx8JbBTeFdwcLGuhzGCyLGWTkVi9pjAxUZbfVbjQjNYrsmmxdE79eDTVtun3KUFDESzcRriThoJejXh",
  "key40": "4N1mrGiFdhieCw5DhgsmfvdyEoimGAYC8UiTnG464E4Bia2py7yTdvyQ1CRnhzz4s1WaNEcdo7VPGYvPoLobyqpE"
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
