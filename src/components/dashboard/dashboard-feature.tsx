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
    "5EXs48zdKfko1PztYcKtMXr3VYxFsrQ2yUaQjLuRYmgAhS1exCmqJx6MLVuABgpxjjR3SZCxssyV7HSCwnprTsyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DdY899uveWipZQawn8MZy9nQBtURaN7j6xM4qmKNGZdw7yYhQZL4zYJ4ejmsfRRWvEfRqB3JHBGqPEyPNrT3ZC",
  "key1": "4x5cuKiTddDyo23KQXmQ9skPomemkJZwP3kaSMV65tNruvfb6LCv7HP2mfkJCzzSePgaapbZJwHrr5JmQwoEfyvY",
  "key2": "3tJhcbAAXbPQP4PNfAAPNWPFGDMhokixEiNTMBctBiTyWVEUjVRwXvMQbJs5MtRmGBQNPBHSHXoHEXnZaS3UYzTN",
  "key3": "48hsfZLcvD3pkQo1p7F8f3o84gDhYjDn9jYpZsLtB18Ao8EjGdqu4mFE5nLWyhAWXGFiB8sfZcadwUD6T3QSyXxN",
  "key4": "3bzMeuBgnAcJczdu3754FrCoDfP83XoVcvKWWPD76JC43rcUJHeE2qEGNkw3PgyFfyMwbj4Qrx5WXgb7bwSh5PYG",
  "key5": "4yE877TMpE9gsS2frSnBzce14DczT3QgEEjohXC6kzCf6jawZ4JgVuYggCgpcvj8BKsYqoGJz4JcxGU6cxaEbQPZ",
  "key6": "4PH3xThchChEb1A1MSxM3C2oDWamSTRzwAH5S5oMqiAjT179HyssRFsvwd69AB1TornDacKht2yotGRjLPSQavLV",
  "key7": "3Ln4JCqWp3e6N9YxSibRHk1A6rmFYQUygo9u8CxCwgiHsmTgoSL6AzWrVVfE6nhfF7FEbmhwtZAefisdEoaYpvdz",
  "key8": "4969wutQSbfrtfRUqYWzyu877NCokLQ6Hgb6mKaihAd9FWt6kG11wW7kzoBFg7kjeJPGyRuXsd3P5HxrD2pRainU",
  "key9": "2JxUnE6H9xFNMkMXUQPGyDRRspVbL417266e3FtriU3ovQ6MEzi3CwQA8UcjAjsd4E8XLLVc5Yv5jhT5vJCbSUpK",
  "key10": "671tMbKV5KCvpKy21EgUHhGzbBGdQQkYBBxGCSNxF3fdrdz2yvHaFKNVjLTnaL3ZYsvUQrkmNiMEBDShSvJsaFWS",
  "key11": "2yD4RYTDAYz6j6wYRTC8JjJPP1E8vchZnLy93g6sF6aZHgo7hQufL8UFYteA8aCzZ2sunbFxcL6cDHUc5uhFoAx5",
  "key12": "uzJ2cL3JnGpQ7kvNnagN7GS4xMEAdaXntJ2qiYr8MdMtbvE6Yvq1Bk4TBVJ8zSbdTvGbxfR3KsTC9GX14MYapBY",
  "key13": "61ZofSmTsoc3WhxZdnYyAnxk2W4TK29KTcre6Y5Hd2tQsEzRUS43DDxDFQCbc8dE937gRKywQCjF2PN8ZM5KCKsP",
  "key14": "5gCvCRQayz9S6Y4XSaoAAigTf2FReniLvizkyjMTF1MkHLebdB8jgN69aj1XMktkxkZfrVvUQi9e4SdC27poq1zQ",
  "key15": "3CiaLRHCY5Uy8Bc27hxihhjsVTpuW2m3MrrAy31rSHeK4GHNJrE216WJU74T6tuCDahe2yHqiG6jrQemAhMy2Mws",
  "key16": "ec44hkMZToP2pVmVauoi2KodUGgX4JjEZwcemYs7Rj9SRysfnXT3W4jS9RZnQX75CvaFmHu74YLK6nwqTukTbKc",
  "key17": "53kxZqBdpSAehd5y1TKDuQoRmY7C4CHScpF7UEEUUtDMgNwiy5ekmY9bMcGtyYhGXkXfYuopDfYriCUUjVpCJhRm",
  "key18": "2E1BM2AQDff3n9skHNDR1P38Kb7heGhGCVyZniyV2MnP7iD7unrmbYhPdfBxwu1Khq6MbozRBZmLi1Xs385cBLyQ",
  "key19": "5QZMH7SuEyjsd1hPCyR8bJVswuWYZ68HR5z37TcK2BdUAzQG3mXVTyPE6qhFi6GmiHpFd8J2jFx6PiHRoSd5ufVP",
  "key20": "3b7qJzTaSmFLbHNwFYengdkYTuRqVje4pvrtWqgYxnPdfuUgpMF2SjMqmm8BeWzyarbUeMWZpXQT1G5PzGC1Rbv",
  "key21": "4kGepxjjsfPavZqVGBnyDXXFimzZ6eYSMpzJyzWcWxu3KjXtsoTHNE5JnpTJSX9sfYJ3gibwdpJT7qL9AYUpFrrd",
  "key22": "3wGmStiqfTE1UjYLH7jv8e5BYDiuFYkP224fPD5Jjy7vnqRAkTgC9XaNqo4Ta14hNg2Xe815BAYmv54hPtqm451R",
  "key23": "59GxKcJxjsZUsUVjbALTwDrcekt11XGMPfLyixwDAb1aaangkj5BCe2uZa7kWqG99UACcqLBSjXRMfF2oSTH6iNz",
  "key24": "3hRVk32WRg3W5sbXegWQ6oDGeYpsm3V4GKkxVwjT52ZVRwvKDf2d6f4casd4xuVQQ1LHHm1cBKe5kTijhJJdncEz",
  "key25": "3K4nAAjgCZazxiuzwxw5EivWp14tsKHpu3dQNQrDgcu3QTefHoZ8p3EiW7gqQXznT21PSJD4bvYPWojrwsp3Yffw",
  "key26": "596tyRR1YN9GEo3HCHahRTarUNBNEo3nom2eV6UMYu23ViVpjUTZFcqHSZUNwqXtCwnoj7mtac39Lkv7hQsQ1JNX",
  "key27": "3goYZCSGA2BT9enfVNBPEMeB96SyEYRGjU9a7Ax1NtPme3K7cyMWpdWpTMgEHXSiNSXL1EXfGHBAfD8RGY4SP1pC",
  "key28": "2zJjUpfXDm7vXbcLHAuTtc7LucjWTJ89Ca9V1m1vLrAZCABLrsrJ7h6HefYNoHWcuYh58bttyb1YwFm3me4dFt3o",
  "key29": "2ySquAczaftcmezaaiLUgRQa3LmsQ4aeJhHEuqMrbv6acH7YC1mxcrBmvtM2rireLvphjpEorfTT8Sjkhy3zSQGN",
  "key30": "24knGag4Nt6mymYuSvCBdXsudyjrnKu4wAgu6RkJbmNLtGnAU3QHUBvuEXpSpgVDh7wsNCwtWgGbyh9wgC83bDjF",
  "key31": "3h4Q6w4Snz7NZmWMzd4de9wqrSTNjaLsrBLMAeQCKnU4F7MfYhCsr4ykZC8483yEJzP4k6vXGd76S61vcV9K771o",
  "key32": "66tyFhcGjxJuyH8e53UpEaEnEEpYEWPzX8QTLkwKzRu3ahPj66dLrmqop9kRpy6kqLVz4hB1xhkBJfKvmdqmC73k",
  "key33": "5fpNZbSD7RnA7Fjo8S6eF5ccyuBxunLL3H1c2CCLQqMfjBAhWTU49noMhxTp72h8T11MyD5DtBJkm1Q887dpcjY2",
  "key34": "36XCNK6HeVSoaoPcrVUirZrFcgfXrK5yc8tFVYBJRpdxu2SCQHsTD8TQaVaZUvduMY5eHxhq9o99jVcMshrgRk1H",
  "key35": "5U7uJ4eWGHFRFqA7KmYZBR4YAY52N3bqPDTv8APrKC3QVYnfxPJTJaJz2VSrytZJgKLyqGRP6QVFErssZxMeGQix",
  "key36": "1P8pJ41LiUNZ2DxWw8o9UcBC2oyKV1qdsKCcPnLWmLu9MnYC85qg1u2aC6hsKSk6WfxSGmqq4q6Qgo3DFNezKSe",
  "key37": "1GSQkw1jfurLtinyTttzPe3827xELqvJgZhoyH6wcxWRjVfyd7adxNLSvgLpvSnzgwHTVfL5YKFRA6xxbsrhXP1",
  "key38": "3dP3FFy1K5ibbAGzrzwb3JdJDWo9p3DitWgJzR3LBWBcwqV9zhfW62Eh5gr48ZwxpDYq5hSZcQopzA6oybPWBfv",
  "key39": "5V8vDxB297hLHnSdFVuBhwkX6a5Gx9E6bwQbV9jhbNd4CdMxwTbrexWV6qHTrCnaY3U7LtYMTxqFdrd6Kuo8KceS",
  "key40": "5poJ6vgBrL5RJ3cTWsYV5xs7cqduHZXGQoVLNBQBg162UmgHmb79nmvPjhLirhZRqavYdKNCJqqddeG9LPNR7xJq",
  "key41": "2CWee5JQePM2vCawgYPGqrdQ7KgaZRbJubZmAbGV8BihNyagfehnzSmgEuANPQmwUZ2yFrZYe4ahwffXJDCq8CVD",
  "key42": "qFcTd3kiMsBvubXdt5BFtqvBeJVrZjreUZ8SoDhoncXVpj7KaJHzujuam21jF4YRyFPp6Zs8S6azMMDHrS1bRPJ",
  "key43": "4oCqfq3uVB9c4s2zqTWzbF3Wk1JyAAzeVPqpfk3sETFjVVaDyDockDuMNmNyjAg4RmnAzP9r64qbmGtsY13LBsJe",
  "key44": "3XWVa3Pk9BxNKSLfA9ozd7pwCqJGmvVDBysKsHuctdheiJLgmVmZ4gAkxN7TEwuYcm4DasStBw6cGeg31qs2BaDi",
  "key45": "25BbNWqEriScQaGHwwbsLzxDSkKxaatkMNpgfy5kgMjwcgmJ7dGbNCNjMxxFdwusWU5Ef2QiV5ftBHGTgGDjLE1n",
  "key46": "4njM6P42HatknAgKzjmWfSREuCFivGmJW4TecQ3wCyZK1irz58DeeJWEwq3RNBhGGNukpWb4kYoUm99P6eg6Z3ai",
  "key47": "5UStWxytGNJcUCwpQtECaUwwcgMwTMZJMsLCVvAGh4xXTHdepwMX2vJKUhgF5GLxrFenmgejnJ4toKLqLdsDohQZ"
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
