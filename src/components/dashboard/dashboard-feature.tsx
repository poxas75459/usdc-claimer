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
    "3haJFykYveeGdbgXoGurFB6jZYWm9evGytnZu3R4SDESaFUg7rtfQgxLiJRf2y3Uue5bw7qLv9SzrjH1oy13Fq2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WKWE3dYzjMbDhT8iNpCLBe4x5sYm1Lqpnm3LFe26Fbb1KU4cD8LEwWEHM6FYgvVjtyoX6idGtynLmC57jg4BgcX",
  "key1": "3LixKJNgcNAiKHkcvrzSmPSxi6nY7mdPaNXChkbkyGbmQ1AuAAbv3MTkmXiTM1whv8nawkZ7rm2AueuWcRTycQxp",
  "key2": "3Z1NBWBvqvSmEYCttfHuhv31breD67q7kW4xB6wtW2rFewFQqgNk8yQhXFNMXaq4CW7UGobWJZkSA4bFQ4KDmNhD",
  "key3": "44CewxguQGBTT1Hi2aHv2Xt5k6cu7WWsd6JhxB6yCWSTUNycwwMD4AkEUynuwdhkLDPdnMZ6H9iNiWMZAXb4m8Vs",
  "key4": "4VzGR1H1vBYP9UTdxjRTU7Fp5ZFxPCQhNxLFYsB6gqhjWqz3GciQxpD97C4exuy8ZQkCCz72RTW6PMWiK9nxLuCi",
  "key5": "2dFsvV4j541UJxECtTkZjQQMhTbsgBoozrzxVuwsPyvjnn7n5FqG8X4YpKyyqn8Jh13NPqxqYBH5Y8E627vmJpMF",
  "key6": "34crxoSgKkjui9WU67pRjRudXZLyE27RmAR4jFQPq4dSRyDg99GtCLouGJTb6YAXf3XSxzwxA3eu3ank7mw3W5tu",
  "key7": "5AvKhqp7R5Uvgz3nGH54P1XHHtcuRx5wiKiKWg7r5rxo7fmBb2pEZXxMs4F4zneJCHKjmKkhf2QnCVXULVHNcKKB",
  "key8": "48iV26m5pbhGEYmRQUmzyE6sJkpZanhdNnC1n8GKoybst72Q84JpWeTDqjzJYLhKF1PTseLLM6pbsT9rBEjNmhZw",
  "key9": "3b4tcPDp81gd6CVxP5puzTGqkbng68kN2bbrG8Y1UPxL9VdFezbqvANCmhB4udN1CDtx6wzj5FLQ556C3HdUwLoB",
  "key10": "Nw12LGjbAFB1g79coogvSoottS5TpFNTy6xHvHmm88SuzG63XQGsP3YXYgME1wzFqzAbuHkP1MhzA5CDemGcJ3f",
  "key11": "BswYHFcoFNnv196HR88WMXpqcbukWqx7uHkVDE94y92gwEiACuQ3SL4KHdtqF2rkqwS9xHR1Vnuo1Hxdgaj9nx5",
  "key12": "2DxWMKwyqxh6JvAGymL1n74i33G4ZSyNwfRwRhVBRiSsEsr1XfCRFB6dR9RrHWK9RRDJG2X9X7NXgTw9RQ8558Gw",
  "key13": "4jxwd1dffjCWLJACA1EVZTtuEGYqDMo2E4a69Kjd9LrhDTwgkwqAJMGthZB3ifBi5BaXmNkQD3ieJ4KzmWTGHo5B",
  "key14": "2fyKiVxZtjFyFMEobFcPGLMaTMUpERC2oZj2yuGGcGBjPzo3exMraiYfCbjSFshkCQkvVPUE8KgfMrMJ7JuCtWmW",
  "key15": "4nQRqMD3RHo4Vam9cU23dvexmaQfzebE9VjeBRKQ62drekurhTpo138XJdbsekgA9PBVDa5Wwkc7ePymsMB6c13A",
  "key16": "DRj72GpyePxeqjSmHkxuJojDyD1DiKybxoKmwQFnfsiEXVNZfQNJrfHX3DGiyX819SGqGNAxtHvhHLrNr237QR8",
  "key17": "JJVqgvk6NmbnN5vYDs62oMVGG3W89apg1oBVtugTsFfgUwx6PUNCUUy3k32H8MN152CjHD6mqHQB1th9nt9zSSc",
  "key18": "5WNRLqdRw8hLtFmbZrjYB9RVCCeeKmG5nb9xUvodwJVvvF4xkYxXr1KfA3uR8WyfaCwDDB5P1bEENent9SeeRvFZ",
  "key19": "64u6d9EyAL4sUEmzBCffqMegSgqMfg7ZZk37p1C9SrbMANCgeBYqKhLTWsWEdb6yhA7GtGfYRifA9VDf3APocAxJ",
  "key20": "qB8ejZP3YE2smvLvhRAezr6KixPBt6ygyjuf4b62D8MsbZAF1EtHBrvPxjx7yCXgV6kNCHGzBTPhWENKVTnrFQk",
  "key21": "5LG2HshusWWKmkJo2wLZgwBnhCfjjP36y9fLj3U9xZWUzhREg6EmesPEVq6NrAseDWVL84tpfy9Lvdzefjd6SAxy",
  "key22": "4tfppCL6M7hoSdFixZPk7TNECoToGi2H932Wpn18ts4YFT6T3UTvfNZphW6pFzadnD7xhaui8pDuermtsaMKi3xD",
  "key23": "V1jNgt8V2NhRCAzSNo9ZaBswUYMB3wRrF6oeuhmhyfNWU47U9MycGuPfzceH6Dg9UXNgh22PP37UbJo3ELtpTND",
  "key24": "42nLvFk5EqhieFfGJwv8Vbsyd7oYTXQzz3Rpb9xnRZyrxCQhtZLLHfkyhTa3uTEuvzcmN8fuSqJ6i3RuRkxRY1u2",
  "key25": "2LzWKws2e81s1hFWwXG4EdSC47hjAfNSpg59M4saBn9JbGS5HXoLNpAwxeDFjtgMHATNCiaKW56TkQvhWksUGLTf",
  "key26": "YS2QmrP4nZSGDRtQMMmK6Tqo3KF7RfjW8UKHHDoXTSiSJPYqYUEhExj3Txp5th6wRYFMcuTFRLwW257FmY54Got",
  "key27": "3Rbijs5fAkxLwx7SYCstUHqa3BCubRCtT7YMYqyBZNH4N3y39vWibJ1zTaREsm8AJoXhyWYBsveFxiudiMgf9Wwb",
  "key28": "2FCUwjt5SM6C3yPwJp75PEnRWiHcFX2YqpVEMH9RSKAzmninCz6pJ8Tg7f6TzkLU6fHjRAkFjmrEgH5pjh9TCjc8",
  "key29": "C1yTKPktsW9FXgRiwWxcs8YuoDi8wNatqrGZfCeQrrGsYik8tiLys6T9mifksYCpxAKFPWyBrXE2gTL4yfkXTSR",
  "key30": "28oAV2n3iUV3HFJDTvmCSZavnvqiHcgRTdr3YrPXYLUv88CYm4JV4e2ah2EUL6PGjRQTcBauZ5MkmHp4RBUQiUHE",
  "key31": "2t8umLnzh7X2XCPM6fJ9YabQxHZ85xh1G6bo2pF3NoFArMmUnBhxFFPKj1yMkc6xn15t4QzDbDXyJEGKL7FuYhaF",
  "key32": "2WDrjteDB5BfcNpNwuE37TvdHWkFFntkvGyu5a5KaEDjuQSrdBsdjHnH1Pefe4CdXPwQHi2eypobgvH9kBAeZFds",
  "key33": "4A6Fh7eym5iVWFxurRE1vs4Yy1Y4mwLotauRYkDxwEVVEEYEbjpWtMpxB5oDYAFL8Rds6vtU74GYdDkA5CLRYm8T",
  "key34": "jWkZXxNodzFtBtDTJwEMBQ2HjXDacBFprHaMsApdybLX2YLW1mWzWgjXCMHLKSSJ9rjzfsDZJcVfd9bHSfQz1v6",
  "key35": "3mkEjpYXcECKav3vktserFwUr1oZk63JadeiQcza3faV5NtSdFEGs3XRGdXjsTGP3m4a9aWqrbsyXp3VEwnkBW92",
  "key36": "3FCaq2NMX8Tg6W59MpiyTVAsXZuAwP6QFjvMXJoAinDzisjZpSKpfa9WXXQgak4YUp9cxRaic6qeos1ScAYicnZ3",
  "key37": "3ZKP17XAWuTvbDa8MXoCHsvqhk22HL4YLaRnSrGmTgWtpiiNdKaXJC8Rk2m1QSHTufD3tzAYTBAYks37AuK2Gp31",
  "key38": "2SfacRbgpKaKhsjs7estDgRe6jzh74muJt21XkGtZZ9HZHWyzLjWwjFZwfjaVQS2TtKat4ePxa5NR8bKpHFJCxDm",
  "key39": "5eponaQGYKUyfrCuRKeBcw88MFEQNxUwXZf5bfEAAgEPT6Q8hsNrmVyajcDy34hh5cseSnJUSG2WgFr7jNhurJFg",
  "key40": "5fGWkR9CThza8wAmjAUEPqzKBquNHeZZTJmNrCqTuYFYMmB1Rh98BTQ9jbKT7sdPb7ksdGcLL9thKCvEU3E63TrD"
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
